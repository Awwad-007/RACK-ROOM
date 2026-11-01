import { CampusRole } from '../types/scheduling';

/**
 * Pre-booking grace window: user can prepare or initiate check-in up to 10 minutes early.
 */
export const PRE_BOOKING_GRACE_MS = 10 * 60 * 1000; // 10 minutes

/**
 * Check-in timeout: reservation auto-releases if check-in is not confirmed within 15 minutes of start.
 */
export const CHECKIN_TIMEOUT_MS = 15 * 60 * 1000; // 15 minutes

/**
 * Offer window for waitlist promotion (10 minutes).
 */
export const WAITLIST_OFFER_WINDOW_MS = 10 * 60 * 1000;

export const ROLE_WEIGHT: Record<CampusRole, number> = {
  'Lab Admin': 30,
  Faculty: 26,
  Researcher: 24,
  'Club Lead': 18,
  Student: 14,
};

/**
 * Deterministic interval clash detection:
 * Two time ranges [startA, endA) and [startB, endB) conflict if and only if
 * (startA < endB) && (endA > startB).
 */
export const hasIntervalClash = (
  startA: Date | string,
  endA: Date | string,
  startB: Date | string,
  endB: Date | string,
): boolean => {
  const sA = new Date(startA).getTime();
  const eA = new Date(endA).getTime();
  const sB = new Date(startB).getTime();
  const eB = new Date(endB).getTime();

  return sA < eB && eA > sB;
};

/**
 * Compute the active check-in grace window for a scheduled reservation.
 * Check-in opens 10m before scheduled start and times out 15m after scheduled start.
 */
export const getCheckInGraceWindow = (scheduledStart: Date | string) => {
  const startMs = new Date(scheduledStart).getTime();
  return {
    earlyWindowStart: new Date(startMs - PRE_BOOKING_GRACE_MS),
    timeoutDeadline: new Date(startMs + CHECKIN_TIMEOUT_MS),
  };
};

export interface CheckInValidationResult {
  valid: boolean;
  status: 'too_early' | 'eligible' | 'timed_out';
  message: string;
}

/**
 * Validates whether a check-in attempt falls within the valid grace window.
 */
export const validateCheckInWindow = (
  scheduledStart: Date | string,
  currentTime: Date | string = new Date(),
): CheckInValidationResult => {
  const currentMs = new Date(currentTime).getTime();
  const { earlyWindowStart, timeoutDeadline } = getCheckInGraceWindow(scheduledStart);

  if (currentMs < earlyWindowStart.getTime()) {
    const minutesUntilOpen = Math.ceil((earlyWindowStart.getTime() - currentMs) / 60_000);
    return {
      valid: false,
      status: 'too_early',
      message: `Check-in opens in ${minutesUntilOpen} minute(s) (10m before reservation).`,
    };
  }

  if (currentMs > timeoutDeadline.getTime()) {
    return {
      valid: false,
      status: 'timed_out',
      message: 'Check-in window expired (15m post-start timeout). Reservation subject to no-show release.',
    };
  }

  return {
    valid: true,
    status: 'eligible',
    message: 'Check-in window is open and valid.',
  };
};

/**
 * Multi-factor priority queue score for waitlisted equipment requests.
 * Formula: Role_Weight + Urgency * 12 - NoShow_Penalty * 2, clamped to [0, 100].
 */
export const calculateWaitlistPriority = (
  role: CampusRole,
  urgency: number,
  noShowPenalty = 0,
): number => {
  const roleBase = ROLE_WEIGHT[role] ?? 14;
  const rawScore = roleBase + urgency * 12 - noShowPenalty * 2;
  return Math.max(0, Math.min(100, Math.round(rawScore)));
};

export interface WaitlistCandidate {
  id: string;
  role: CampusRole;
  urgency: number;
  noShowPenalty?: number;
  requestedAt: string;
}

export interface ScoredWaitlistCandidate extends WaitlistCandidate {
  priorityScore: number;
}

/**
 * Sorts waitlisted candidates in descending priority order.
 * Ties are broken by chronological request timestamp (FIFO).
 */
export const sortWaitlistQueue = <T extends WaitlistCandidate>(candidates: T[]): (T & { priorityScore: number })[] => {
  return candidates
    .map((candidate) => ({
      ...candidate,
      priorityScore: calculateWaitlistPriority(
        candidate.role,
        candidate.urgency,
        candidate.noShowPenalty ?? 0,
      ),
    }))
    .sort((a, b) => {
      if (b.priorityScore !== a.priorityScore) {
        return b.priorityScore - a.priorityScore;
      }
      return new Date(a.requestedAt).getTime() - new Date(b.requestedAt).getTime();
    });
};
