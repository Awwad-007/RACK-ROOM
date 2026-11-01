# RACK-ROOM

Smart campus equipment reservation hub & 3D digital twin.

## Problem Statement
Shared university labs and maker spaces frequently run into scheduling friction: overlapping reservations, phantom bookings where physical equipment sits idle, and a lack of real-time visibility into which lab wing holds specific hardware. 

RACK-ROOM aims to solve this by pairing an interactive 3D campus digital twin with a deterministic conflict-prevention engine and priority waitlist queue.

## Target Architecture
- **Frontend & View**: React 19, TypeScript, Vite, Tailwind CSS
- **Spatial Visualization**: React Three Fiber, Drei, Three.js (isometric campus model)
- **Scheduling Core**: Deterministic interval math (`[start, end)` checking), no-show auto-release, priority cascading
- **State**: Client-side Zustand store with local persistence

## Implementation Roadmap
- [x] Workspace scaffolding, build tooling, and dependency wiring
- [x] Domain data models and TypeScript schema contracts (`src/types/`)
- [x] Core scheduling engine and clash prevention algorithms (`src/engine/`)
- [ ] Central state store and mock campus lab inventory (`src/store/`, `src/data/`)
- [ ] Isometric 3D campus canvas and rooftop unit pins (`src/scene/`)
- [ ] Booking drawer, Gantt timeline, and check-in telemetry (`src/components/`)

### Engine Capabilities
- Interval clash detection via `(startA < endB) && (endA > startB)`.
- Grace window management (-10m pre-booking to +15m check-in timeout).
- Multi-factor priority queue scoring for waitlisted equipment requests.

## Getting Started

### Prerequisites
- Node.js 20+
- npm 10+

### Local Setup
```bash
# Clone the repository
git clone https://github.com/Awwad-007/RACK-ROOM.git
cd RACK-ROOM

# Install dependencies
npm install

# Start development server
npm run dev
```

---
*Current Project Phase: Milestone 2 complete. Global state store & mock inventory in progress.*
