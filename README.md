# TobaPatrol — Smart Civic Reporting & Public Service Accountability Platform

> **Tim Pengembang:** NAPOSO3M  
> **Kompetisi:** Web In Action (WIA) — Multimedia In Action (MIA) 2026  
> **Tema Utama:** *From Visionaries to Architects of Change*  
> **Subtema:** *Civic Reporting & Accountability* & *Public Service Tracking*

---

## 1. Judul Project & Deskripsi Singkat

**TobaPatrol** adalah platform pelaporan masyarakat (*Civic Reporting & Accountability*) dan pelacakan tindak lanjut layanan publik berbasis **Autonomous Web AI Agent** untuk kawasan Kabupaten Toba (16 Kecamatan). Aplikasi ini menghubungkan **Masyarakat, Admin Dinas, dan Petugas Lapangan** dalam satu ekosistem terpadu untuk mengotomatisasi disposisi instansi, menghitung *Skor Urgensi* keselamatan (1–100), mencegah penumpukan laporan ganda (*Spatial Deduplication* radius < 50m), serta menyediakan pelacakan batas waktu penanganan (*SLA Countdown*) dengan verifikasi bukti foto *Before vs After*.

---

## 2. Arsitektur Repository (Clean Modular Monorepo)

Project ini diorganisasikan secara modular menjadi 3 komponen utama (**Frontend**, **Backend**, dan **AI Agent**):

```text
tobapatrol/
├── frontend/                         # Frontend Web App (Vite + Tailwind CSS + Leaflet GIS)
│   ├── index.html                    # Antarmuka utama 4 Halaman (SPA View)
│   ├── package.json                  # Konfigurasi Vite Frontend
│   └── src/
│       └── app.js                    # Controller UI, Peta GIS Kab. Toba, & State Sync 3 POV
├── backend/                          # Backend API & Database Layer
│   ├── server.js                     # REST API Server (/api/health, /api/triage)
│   ├── package.json                  # Konfigurasi Backend Service
│   └── database/
│       └── schema.sql                # Skema Tabel PostgreSQL / Supabase (reports & report_logs)
├── ai-agent/                         # Autonomous AI Triage & Spatial Deduplication Engine
│   ├── triageEngine.js               # Auto-routing Dinas (PUTR/Dishub/DLH/BPBD) & Urgency Scoring
│   ├── spatialDeduplicator.js        # Kalkulasi jarak Haversine (< 50m radius deduplication)
│   └── package.json                  # Modul AI Agent
├── package.json                      # Root Workspace Scripts
└── README.md                         # Dokumentasi Utama Project
```

---

## 3. Tech Stack yang Digunakan

* **Frontend (`frontend/`):** HTML5, Tailwind CSS, JavaScript Modular (ES6+), Vite, Leaflet.js & OpenStreetMap (GIS), Lucide Icons, Plus Jakarta Sans.
* **Backend (`backend/`):** Node.js HTTP REST API, PostgreSQL / Supabase Database Schema (`reports` & `report_logs`).
* **AI Engine (`ai-agent/`):** Autonomous Triage Classification Engine (Dinas Auto-Routing & Urgency Score 1–100) + Spatial Deduplication (Haversine Geolocation Check).

---

## 4. Cara Menjalankan Project (`Clone` ➔ `Install` ➔ `Run`)

```bash
# 1. Clone repository ini
git clone https://github.com/GraceTiodora/tobapatrol.git
cd tobapatrol

# 2. Install dependencies & jalankan Frontend Development Server
cd frontend
npm install
npm run dev

# (Opsional) Menjalankan Backend API Service di terminal terpisah
cd ../backend
npm run start
```

Setelah server berjalan, buka browser dan akses `http://localhost:5173`.

---

## 5. Progress Saat Ini (First Draft Submission)

1. **Halaman 1 — Beranda & Peta GIS Publik (`/#home`):** Hero section, metrik ketuntasan SLA Kabupaten Toba, overview 3 POV, Peta Interaktif Leaflet.js 16 Kecamatan, dan daftar laporan terbaru.
2. **Halaman 2 — Buat Laporan + AI Triage (`/#lapor`):** Formulir pengaduan warga dengan analisis otomatis *AI Triage Agent* (Dinas Tujuan, Skor Urgensi 1–100, Target SLA, & Deteksi Duplikasi Spasial < 50m).
3. **Halaman 3 — Lacak Tiket & Transparansi SLA (`/#lacak`):** Pencarian Nomor Tiket (`#TP-2026-101`), tombol *+1 Upvote Warga*, *Countdown SLA*, Timeline 4 tahap, dan perbandingan foto *Before vs After*.
4. **Halaman 4 — Portal Petugas & Admin Dinas (`/#dashboard`):** Rekomendasi kebijakan mingguan (*AI Decision Support Insight*) untuk Pemkab Toba serta tabel disposisi interaktif lintas peran.
