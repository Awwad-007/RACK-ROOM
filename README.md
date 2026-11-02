<div align="center">

# ⚡ RACK-ROOM ⚡
### *The Chronicle of the Zero-Clash Campus Twin*

[![Live Demo](https://img.shields.io/badge/LIVE%20DEMO-rack--room--five.vercel.app-00E5FF?style=for-the-badge&logo=vercel&logoColor=white)](https://rack-room-five.vercel.app/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r170-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Tests-Passing-brightgreen?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)

<p align="center">
  <b>🌐 Experience the Live Cyberpunk Digital Twin:</b><br/>
  <a href="https://rack-room-five.vercel.app/">👉 https://rack-room-five.vercel.app/ 👈</a>
</p>

</div>

---

## 💥 THE ORIGIN STORY: THE LAB DISASTER

> *"It was 11:59 PM before the final major project submission. Two senior research squads claimed they booked the solitary 8x H100 GPU workstation. A phantom reservation held the high-precision laser cutter hostage. Chaos reigned across the engineering wing..."*

Every university engineering building fights the same notorious rogue villains:
* 👻 **The Ghost Booker**: Books four workstations "just in case," attends none, leaves hardware idling.
* 💥 **The Double-Booking Paradox**: Two non-atomic database transactions walk into a lab simultaneously. Both think they have the slot.
* 🗺️ **The Blind Explorer**: Wandering between 4 blocks looking for an available oscilloscope while deadlines burn.

**Enter RACK-ROOM.** An autonomous reservation command deck fusing high-performance interval arithmetic with an interactive 3D spatial twin.

---

## 🦸‍♂️ CORE SUPERPOWERS

### 🎯 1. The Collision Destroyer Engine
* **Atomic Interval Math**: Eliminates slot contention using half-open time boundary verification:
  $$\text{Collision} \iff (T_{\text{start, A}} < T_{\text{end, B}}) \land (T_{\text{end, A}} > T_{\text{start, B}})$$
* **Anti-Ghost Grace Windows**: 10-minute early verification window; triggers automated slot cancellation and release if no-show occurs within 15 minutes of reservation start.
* **Smart Waitlist Prioritization**: Dynamic ranking metric factoring student tier, deadline proximity, and historical check-in reliability to automatically cascade reallocated hardware.

### 🕹️ 2. Isometric 3D Command Deck
* **Real-time WebGL Digital Twin**: Powered by Three.js and React Three Fiber.
* **Procedural Architectural Blocks**: Responsive raycasted department wings with live camera tracking and orbital constraints.
* **Live Status Rooftop Pins**: Floating telemetry pins projecting real-time resource availability directly above respective labs.

### 🛡️ 3. Dynamic QR Check-in Shield
* **Cryptographic Session Gate**: Dynamic, short-lived encoded access passes generated on confirmed reservation.
* **Instant Handshake**: Allows lab technicians and terminals to scan and verify active access within seconds.

---

## 📐 SYSTEM TOPOLOGY

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
┌──────────────────────────┐
│ Supabase Relational Gate  │
│ - booking_guards schema   │
│ - RLS Security Policies   │
└───────────────────────────┘
```
