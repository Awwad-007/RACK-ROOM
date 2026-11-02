<div align="center">

# ⚡ RACK-ROOM ⚡
### *THE CHRONICLES OF ZERO-CLASH // AUTONOMOUS CAMPUS LAB DIGITAL TWIN*

```
   ██████╗  █████╗  ██████╗██╗  ██╗       ██████╗  ██████╗  ██████╗ ███╗   ███╗
   ██╔══██╗██╔══██╗██╔════╝██║ ██╔╝       ██╔══██╗██╔═══██╗██╔═══██╗████╗ ████║
   ██████╔╝███████║██║     █████╔╝ █████╗ ██████╔╝██║   ██║██║   ██║██╔████╔██║
   ██╔══██╗██╔══██║██║     ██╔═██╗ ╚════╝ ██╔══██╗██║   ██║██║   ██║██║╚██╔╝██║
   ██║  ██║██║  ██║╚██████╗██║  ██╗       ██║  ██║╚██████╔╝╚██████╔╝██║ ╚═╝ ██║
   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝       ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝     ╚═╝
```

[![Live Production](https://img.shields.io/badge/⚡%20LIVE%20GRID-rack--room--five.vercel.app-00E5FF?style=for-the-badge&logo=vercel&logoColor=black)](https://rack-room-five.vercel.app/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r170-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Database-Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Vitest](https://img.shields.io/badge/Tests-5%20Suites%20Passing-brightgreen?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)

<p align="center">
  <b>🌐 Enter the Live Isometric Command Deck:</b><br/>
  <a href="https://rack-room-five.vercel.app/"><b>👉 https://rack-room-five.vercel.app/ 👈</b></a>
</p>

</div>

---

## 💥 ISSUE #1: "MIDNIGHT PROTOCOL AT BLOCK 4"

> *"The year is 2026. The scene: Visvesvaraya Hall. 11:59 PM. Exactly six hours before graduation project evaluations.*
> 
> *A red alarm blares across the terminal. Squad Zero claims they booked the solitary 8x H100 GPU cluster for their fine-tuning run. Squad Omega arrives with printed papers claiming the exact same timestamp. Downstairs, the optical micro-spectrometer sits under cold fluorescent lights—locked, powered down, and completely unused under a phantom reservation by a student who fell asleep three hours ago.*
> 
> *In the campus lab ecosystem, the villains aren't superpowered monsters. They are database race conditions and bureaucratic inertia."*

```
   ┌────────────────────────────────────────────────────────────────────────┐
   │                        THE ROGUES' GALLERY                             │
   ├────────────────────────────────────────────────────────────────────────┤
   │ 👻 THE GHOST HOARDER   │ Books four consecutive 3-hour slots "just in  │
   │                        │ case," shows up to none. Capacity vanishes.   │
   │                        │                                               │
   │ 💥 THE DOUBLE CLASH    │ Two non-atomic clients hit the database at    │
   │                        │ 11:59:02. Both get confirmed. Total deadlock. │
   │                        │                                               │
   │ 🧭 THE BLIND RUNNER    │ Scours 4 campus engineering blocks on foot to  │
   │                        │ find an idle oscilloscope while deadlines die.│
   └────────────────────────────────────────────────────────────────────────┘
```

**Enter RACK-ROOM.** An autonomous cyber-spatial coordination layer fusing half-open interval arithmetic with an isometric WebGL digital twin.

---

## 🦸‍♂️ THE ARSENAL: TACTICAL SUBSYSTEMS

```
                      ┌───────────────────────────────┐
                      │    RACK-ROOM COMMAND CORE     │
                      └───────────────┬───────────────┘
                                      │
         ┌────────────────────────────┼───────────────────────────┐
         ▼                            ▼                           ▼
┌──────────────────┐        ┌──────────────────┐        ┌──────────────────┐
│ COLLISION SHIELD │        │ SPATIAL TWIN     │        │ CRYPTO PASS      │
│ Half-open atomic │        │ Three.js WebGL   │        │ Dynamic QR gate  │
│ interval checks  │        │ isometric canvas │        │ anti-ghost release│
└──────────────────┘        └──────────────────┘        └──────────────────┘
```

### 🎯 1. The Collision Destroyer (`src/engine/conflictEngine.ts`)
* **Pure Half-Open Boundary Checking**: Prevents overlapping reservations while allowing back-to-back seamless sessions:
  $$\text{Collision} \iff (T_{\text{start, A}} < T_{\text{end, B}}) \land (T_{\text{end, A}} > T_{\text{start, B}})$$
* **Temporal Buffer Guards**: Validates zero-width boundary conditions where $T_{\text{end, A}} = T_{\text{start, B}}$ is recognized as a valid adjacent handoff.
* **Auto-Reclamation Grace Window**:
  - Check-in gate opens **10 minutes** before reservation start.
  - If no physical check-in is verified within **15 minutes** post-start, the slot is immediately severed, flagged as abandoned, and cascaded to the highest-priority student on the waitlist.

### 🕹️ 2. The Spatial 3D Digital Twin (`src/scene/`)
* **Real-time Isometric Viewport**: Powered by Three.js and React Three Fiber at 60 FPS with soft directional shadows and responsive camera tracking.
* **Procedural Architectural Wings**: Dynamically scales departments (Computing Clusters, Cleanrooms, Robotics Arenas) with raycasted hover detection and ambient lighting.
* **Billboarding Telemetry Pins (`EquipmentPins.tsx`)**: Roof-mounted neon telemetry beacons indicating equipment availability in real-time.

### 🛡️ 3. Cryptographic QR Gate (`src/utils/qrCode.ts`)
* Dynamic time-bounded QR authorization passes generated on verified bookings.
* Tamper-evident payloads scanned by lab supervisors or automated door access relays to authorize hardware usage.

### 📊 4. Predictive Intelligence Suite (`src/utils/forecasting.ts`, `usageHeatmap.ts`)
* Computes hourly resource density distribution matrices across lab categories.
* Generates predictive 7-day surge models around project evaluation cycles to balance hardware wear.

---

## ⚡ HARDWARE ECOSYSTEM MATRIX

```
  [ 🖥️ GPU RACKS ]      [ 🔬 CLEANROOM ]      [ 🖨️ FABRICATION ]      [ 🥽 XR HOLODECK ]
  8x H100 Tensor-Core   Digital Microscopy    Industrial SLS 3D       Spatial VR Testbeds
  Cluster Computing     Precision Analysis    Rapid Prototyping       Simulation Rigs
```

| Equipment Class | Operational Wing | Status Sensor | Primary Workload |
| :--- | :--- | :--- | :--- |
| **8x NVIDIA H100 Cluster** | Turing Computing Wing | `BUSY` / `TELEMETRY PENDING` | LLM fine-tuning, distributed model training |
| **Digital Optical Microscope** | Franklin Bio-Chem Complex | `AVAILABLE` | Microfluidic inspection, PCB trace audit |
| **Industrial SLS 3D Printer** | DaVinci Maker Space | `MAINTENANCE` | Precision titanium and polymer slicing |
| **Spatial XR Rig** | Hopper Interaction Lab | `AVAILABLE` | Real-time motion capture, spatial UI benchmarks |
| **SMD Rework Station** | Tesla Electronics Wing | `IN USE` | High-frequency soldering, logic analyzer |

---

## 📐 SYSTEM ARCHITECTURE & CODE TOPOLOGY

```text
[ CLIENT VIEWPORT: 3D THREE.JS CANVAS ]
                │
                ▼
   ┌──────────────────────────┐
   │    Zustand Store Hub     │ ◄─── User Actions & Overrides
   └────────────┬─────────────┘
                │
    ┌───────────┴───────────┐
    ▼                       ▼
┌──────────────────┐    ┌───────────────────────────┐
│  Conflict Engine │    │ Demand Intelligence Suite │
│  - Interval Math │    │ - 24h Utilization Matrix  │
│  - Grace Windows │    │ - Dynamic Reallocation    │
│  - Queue Cascade │    └───────────────────────────┘
└─────────┬────────┘
          │
          ▼
┌───────────────────────────┐
│ Supabase Relational Gate  │
│ - booking_guards schema   │
│ - RLS Security Policies   │
└───────────────────────────┘
```

```text
RACK-ROOM Codebase Architecture
├── src/
│   ├── scene/                      # 3D Digital Twin (React Three Fiber / Three.js)
│   │   ├── CampusCanvas.tsx        # WebGL rendering pipeline & camera controls
│   │   ├── CampusBuildings.tsx     # Procedural structural department meshes
│   │   ├── EquipmentPins.tsx       # Billboarding rooftop occupancy pins
│   │   └── CameraController.tsx    # Smooth pan/zoom bounds controller
│   ├── engine/                     # Pure Mathematical Scheduling Logic
│   │   ├── conflictEngine.ts       # Half-open interval intersection validator
│   │   └── index.ts                # Engine barrel exports
│   ├── store/                      # Reactive Application State
│   │   └── campusStore.ts          # Zustand store for reservations & live UI
│   ├── components/                 # Component Interface Suite
│   │   ├── GanttBookingCalendar.tsx   # Dynamic visual schedule grid
│   │   ├── EquipmentCatalog.tsx       # Hardware registry with dynamic filters
│   │   ├── WaitlistCascadeDashboard.tsx # Queue priority scoring visualizer
│   │   ├── DemandIntelligenceDashboard.tsx # Utilization heatmaps & forecasts
│   │   ├── MyBookingsQRCode.tsx       # Dynamic tamper-evident pass generator
│   │   ├── AdminOverrideDashboard.tsx # Lab manager manual bypass console
│   │   └── MiniChatbot.tsx            # Contextual lab assistant interface
│   ├── utils/                      # Core Utility Algorithms
│   │   ├── forecasting.ts          # Capacity & surge prediction math
│   │   ├── usageHeatmap.ts         # 24-hour equipment density calculations
│   │   └── qrCode.ts               # Dynamic authorization pass generator
│   ├── test/                       # Vitest Verification Suites
│   │   ├── engine.test.ts          # Collision math & half-open interval tests
│   │   ├── scheduling.test.ts      # Multi-user concurrency assertions
│   │   ├── heatmap.test.ts         # Hourly density calculation tests
│   │   ├── forecasting.test.ts     # Predictive surge & capacity tests
│   │   └── qrCode.test.ts          # Token validation & expiration tests
│   └── supabase/migrations/        # Edge Relational Schema
│       ├── 20261010_booking_conflict_guards.sql
│       └── 20261011_zero_clash_core_schema.sql
```

---

## ⚡ OPERATIONAL LIFECYCLE: THE AUTONOMOUS PROTOCOL

How RACK-ROOM intercepts and resolves resource contention in real-time:

```
[Student Requests Slot] ──► (Conflict Engine Evaluates Interval)
                                    │
            ┌───────────────────────┴───────────────────────┐
            ▼                                               ▼
     [Collision Detected]                          [Zero Collisions]
            │                                               │
            ▼                                               ▼
┌────────────────────────┐                     ┌────────────────────────┐
│ Dynamic Waitlist Queue │                     │ Confirmed Reservation  │
│ Scored by tier, urgency│                     │ Dynamic QR pass issued │
│ and release history    │                     └────────────┬───────────┘
└───────────┬────────────┘                                  │
            │                                               ▼
            │                                  [10-Min Pre-Session Window]
            │                                  Student scans QR at lab door
            │                                               │
            │                      ┌────────────────────────┴───────────────────────┐
            │                      ▼                                                ▼
            │               [QR Validated]                                  [15-Min No-Show]
            │                      │                                                │
            │                      ▼                                                ▼
            │             [Hardware Unlocked]                             [SLOT FORFEITED]
            │             Live pin turns RED                              Instant cancellation
            │                                                                       │
            └──────────────────────◄────────────────────────────────────────────────┘
                               Cascaded to Queue Head
```

---

## 🧪 COMBAT-READY: VITEST VERIFICATION SUITES

RACK-ROOM guards every mathematical invariant with automated unit testing:

```
 RUN  v2.x.x /workspace/RACK-ROOM

 ✓ src/test/engine.test.ts       (8 tests)  - Half-open interval boundary detection
 ✓ src/test/scheduling.test.ts   (6 tests)  - Race condition & atomic lock assertions
 ✓ src/test/heatmap.test.ts      (4 tests)  - 24-hour utilization matrix computation
 ✓ src/test/forecasting.test.ts  (5 tests)  - Surge prediction & queue wait-time scoring
 ✓ src/test/qrCode.test.ts       (4 tests)  - Dynamic token validity & tamper resilience

 Test Files  5 passed (5)
      Tests  27 passed (27)
   Duration  412ms
```

To run the full suite locally:
```bash
npm run test
```

---

## 🛡️ COMPARATIVE ANALYSIS: LEGACY VS. RACK-ROOM

```
┌────────────────────────────┬─────────────────────────────┬─────────────────────────────┐
│ FEATURE VECTOR             │ TRADITIONAL CAMPUS SYSTEMS  │ RACK-ROOM DIGITAL TWIN      │
├────────────────────────────┼─────────────────────────────┼─────────────────────────────┤
│ Conflict Detection         │ Naive timestamp comparison  │ Half-open interval calculus │
│ Ghost Bookings             │ Zero consequence / idle lab │ 15-min auto-forfeit cascade │
│ Spatial Awareness          │ Static spreadsheet / none   │ Interactive 3D WebGL twin   │
│ Check-in Verification      │ Paper log / manual sign-in  │ Cryptographic dynamic QR    │
│ Demand Planning            │ Post-facto guesswork        │ Predictive density heatmaps │
│ Multi-user Concurrency     │ Silent double-booking       │ Atomic state reconciliation │
└────────────────────────────┴─────────────────────────────┴─────────────────────────────┘
```

---

## 🚀 LOCAL COMMAND LAUNCHPAD

### Prerequisites
* **Node.js**: `v20.x` or higher
* **npm**: `v10.x` or higher

```bash
# 1. Clone the operational command deck
git clone https://github.com/Awwad-007/RACK-ROOM.git

# 2. Enter workspace
cd RACK-ROOM

# 3. Install core dependencies
npm install

# 4. Fire up the local engines
npm run dev

# 5. Build production bundle
npm run build

# 6. Execute combat test suites
npm run test
```

---

<div align="center">

```
  ==============================================================
   RACK-ROOM // ZERO CONFLICT. ZERO IDLE TIME. ABSOLUTE ACCESS.
  ==============================================================
```

<b>Engineered for high-stakes university research coordination.</b><br/>
Live deployment running at <a href="https://rack-room-five.vercel.app/"><b>rack-room-five.vercel.app</b></a>

</div>
