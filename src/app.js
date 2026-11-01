// ============================================================================
// TOBAPATROL AI — CORE APPLICATION LOGIC (TIM NAPOSO3M - MIA 2026)
// Mencakup 3 POV: Masyarakat, Petugas Lapangan, dan Admin Pemkab Toba
// ============================================================================

// Initial Seed Data: Studi Kasus Kabupaten Toba (16 Kecamatan)
let reportsData = [
  {
    ticketCode: "TP-2026-101",
    reporterName: "Sintong Siahaan",
    reporterPhone: "0812-6501-8821",
    district: "Balige",
    address: "Jl. Bypass Balige KM 2 (Dekat Simpang Tambunan)",
    lat: 2.3324,
    lng: 99.0681,
    description: "Lubang jalan besar dan aspal amblas sedalam 20 cm di jalur cepat Bypass Balige. Sangat membahayakan pengendara motor saat malam dan hujan.",
    aiCategory: "Kerusakan Jalan & Jembatan",
    aiDepartment: "Dinas PUTR Kab. Toba",
    aiUrgencyScore: 89,
    aiUrgencyLevel: "DARURAT",
    aiSlaTarget: "Maks. 1 x 24 Jam",
    aiReasoning: "Kerusakan struktural pada jalan arteri utama dengan risiko kecelakaan fatal. Ditemukan 3 laporan warga di titik koordinat yang sama (< 50m).",
    status: "diproses", // menunggu | diproses | selesai
    upvotes: 14,
    slaRemaining: "11 Jam 40 Menit",
    createdAt: "01 Nov 2026, 08:15 WIB",
    assignedUnit: "Regu Reaksi Cepat 01 - Dinas PUTR",
    photoBefore: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80",
    photoAfter: null,
    logs: [
      { time: "01 Nov 2026, 08:15", title: "Laporan Diterima & Divalidasi AI Agent", note: "Skor Urgensi 89/100 (Darurat). Otomatis digabungkan dengan 3 laporan serupa dalam radius 35m.", actor: "AI Triage Agent", done: true },
      { time: "01 Nov 2026, 08:16", title: "Disposisi Otomatis ke Dinas PUTR Kab. Toba", note: "Tiket masuk ke antrean prioritas utama Bidang Bina Marga.", actor: "Sistem Otomatis", done: true },
      { time: "01 Nov 2026, 09:30", title: "Petugas Lapangan Ditugaskan & Menuju Lokasi", note: "Regu Reaksi Cepat 01 sedang melakukan penambalan aspal (cold mix) di titik lokasi.", actor: "Admin Dinas PUTR", done: true },
      { time: "Menunggu", title: "Perbaikan Selesai & Unggah Foto Bukti After", note: "Menunggu unggahan bukti foto penyelesaian dari petugas lapangan.", actor: "Petugas Lapangan", done: false }
    ]
  },
  {
    ticketCode: "TP-2026-102",
    reporterName: "Rina Pardede",
    reporterPhone: "0813-9744-1102",
    district: "Ajibata",
    address: "Kawasan Pelabuhan Ferry Ajibata (Jalur Wisatawan)",
    lat: 2.6565,
    lng: 98.9368,
    description: "4 tiang Lampu Penerangan Jalan Umum (PJU) menuju dermaga wisata Ajibata padam total sejak 2 hari lalu, gelap gulita bagi wisatawan malam.",
    aiCategory: "Penerangan Jalan Umum (PJU)",
    aiDepartment: "Dinas Perhubungan Kab. Toba",
    aiUrgencyScore: 76,
    aiUrgencyLevel: "TINGGI",
    aiSlaTarget: "Maks. 2 x 24 Jam",
    aiReasoning: "Fasilitas penerangan pada zona vital pariwisata Danau Toba. Berdampak pada keamanan wisatawan dan ketertiban lalu lintas pelabuhan.",
    status: "menunggu",
    upvotes: 8,
    slaRemaining: "32 Jam 15 Menit",
    createdAt: "01 Nov 2026, 10:05 WIB",
    assignedUnit: "Belum Ditugaskan",
    photoBefore: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    photoAfter: null,
    logs: [
      { time: "01 Nov 2026, 10:05", title: "Laporan Diterima & Divalidasi AI Agent", note: "Kategori terdeteksi: Kerusakan Lampu PJU. Skor Urgensi 76/100.", actor: "AI Triage Agent", done: true },
      { time: "01 Nov 2026, 10:05", title: "Disposisi ke Dinas Perhubungan Kab. Toba", note: "Menunggu konfirmasi penugasan teknisi jaringan PJU.", actor: "Sistem Otomatis", done: true },
      { time: "Menunggu", title: "Petugas Lapangan Menuju Lokasi", note: "Menunggu penjadwalan regu teknisi.", actor: "Admin Dishub", done: false },
      { time: "Menunggu", title: "Perbaikan Selesai & Verifikasi Bukti", note: "-", actor: "Petugas Lapangan", done: false }
    ]
  },
  {
    ticketCode: "TP-2026-103",
    reporterName: "Togar Marpaung",
    reporterPhone: "0821-6012-3389",
    district: "Porsea",
    address: "Jl. Pasar Tradisional Porsea (Samping Drainase Utama)",
    lat: 2.4439,
    lng: 99.1526,
    description: "Tumpukan sampah meluber hingga ke badan jalan dan menyumbat saluran drainase pasar, menimbulkan bau menyengat dan genangan air.",
    aiCategory: "Kebersihan & Drainase Lingkungan",
    aiDepartment: "Dinas Lingkungan Hidup Kab. Toba",
    aiUrgencyScore: 72,
    aiUrgencyLevel: "SEDANG",
    aiSlaTarget: "Maks. 2 x 24 Jam",
    aiReasoning: "Risiko sanitasi lingkungan dan penyumbatan saluran air di area pasar publik Kecamatan Porsea.",
    status: "diproses",
    upvotes: 11,
    slaRemaining: "21 Jam 10 Menit",
    createdAt: "31 Okt 2026, 16:40 WIB",
    assignedUnit: "Armada Kebersihan Wilayah II Porsea",
    photoBefore: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
    photoAfter: null,
    logs: [
      { time: "31 Okt 2026, 16:40", title: "Laporan Diterima & Divalidasi AI Agent", note: "Skor Urgensi 72/100. Disposisi otomatis ke DLH Kab. Toba.", actor: "AI Triage Agent", done: true },
      { time: "31 Okt 2026, 17:10", title: "Armada Kebersihan Ditugaskan", note: "Truk pengangkut dan petugas kebersihan dijadwalkan melakukan pengangkutan.", actor: "Admin DLH", done: true },
      { time: "01 Nov 2026, 07:30", title: "Pembersihan Sedang Berlangsung", note: "Petugas sedang mengangkut tumpukan sampah dan mengeruk sedimen drainase.", actor: "Petugas Lapangan", done: true },
      { time: "Menunggu", title: "Selesai & Unggah Foto Bukti After", note: "Menunggu proses pengangkutan tuntas.", actor: "Petugas Lapangan", done: false }
    ]
  },
  {
    ticketCode: "TP-2026-104",
    reporterName: "Marta Simanjuntak",
    reporterPhone: "0852-7011-4490",
    district: "Laguboti",
    address: "Jl. Sisingamangaraja Laguboti (Dekat Kompleks Sekolah)",
    lat: 2.3518,
    lng: 99.1252,
    description: "Pohon peneduh miring dan dahan patah menghalangi bahu jalan dekat sekolah pasca angin kencang kemarin sore.",
    aiCategory: "Ketertiban Umum & Ruang Terbuka",
    aiDepartment: "BPBD & Dinas Lingkungan Hidup",
    aiUrgencyScore: 84,
    aiUrgencyLevel: "DARURAT",
    aiSlaTarget: "Maks. 1 x 24 Jam",
    aiReasoning: "Berada di zona pendidikan ramai pelajar. Telah ditangani cepat oleh tim gabungan dalam waktu 6 jam.",
    status: "selesai",
    upvotes: 19,
    slaRemaining: "Tuntas Tepat Waktu (6 Jam)",
    createdAt: "30 Okt 2026, 09:00 WIB",
    assignedUnit: "Tim Satgas BPBD & DLH Toba",
    photoBefore: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    photoAfter: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=800&q=80",
    logs: [
      { time: "30 Okt 2026, 09:00", title: "Laporan Diterima & Divalidasi AI Agent", note: "Skor Urgensi 84/100 (Darurat).", actor: "AI Triage Agent", done: true },
      { time: "30 Okt 2026, 09:20", title: "Disposisi Tim Satgas Gabungan", note: "Tim pemangkasan diterjunkan ke lokasi.", actor: "Admin Pemda", done: true },
      { time: "30 Okt 2026, 11:00", title: "Pemangkasan & Evakuasi Pohon", note: "Bahu jalan dibersihkan dari ranting patah.", actor: "Petugas Lapangan", done: true },
      { time: "30 Okt 2026, 15:00", title: "Perbaikan Selesai (Bukti Foto Terverifikasi)", note: "Jalur kembali aman dilalui warga dan pelajar.", actor: "Petugas Lapangan", done: true }
    ]
  }
];

// Coordinates per Subdistrict (Kecamatan) in Kabupaten Toba
const districtCoords = {
  "Balige": [2.3324, 99.0681],
  "Porsea": [2.4439, 99.1526],
  "Laguboti": [2.3518, 99.1252],
  "Ajibata": [2.6565, 98.9368],
  "Habinsaran": [2.2845, 99.2481],
  "Lumban Julu": [2.5678, 99.0512]
};

let tobaMapInstance = null;
let mapMarkers = [];

// ============================================================================
// NAVIGATION & TAB SWITCHING
// ============================================================================
function switchTab(tabName) {
  const views = ["home", "lapor", "lacak", "dashboard"];
  views.forEach((v) => {
    const section = document.getElementById(`view-${v}`);
    const navBtn = document.getElementById(`nav-${v}`);
    if (section) {
      if (v === tabName) {
        section.classList.remove("hidden");
      } else {
        section.classList.add("hidden");
      }
    }
    if (navBtn) {
      if (v === tabName) {
        navBtn.className = "nav-btn px-4 py-2 rounded-lg text-sm font-semibold transition-all bg-white text-sky-700 shadow-sm";
      } else {
        navBtn.className = "nav-btn px-4 py-2 rounded-lg text-sm font-semibold transition-all text-slate-600 hover:text-slate-900";
      }
    }
  });

  if (tabName === "home") {
    setTimeout(() => {
      if (tobaMapInstance) tobaMapInstance.invalidateSize();
    }, 150);
  } else if (tabName === "lacak") {
    renderQuickTicketPills();
    searchTicket();
  } else if (tabName === "dashboard") {
    renderDashboardTable();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
  if (window.lucide) window.lucide.createIcons();
}

// ============================================================================
// MAP INITIALIZATION (LEAFLET.JS KABUPATEN TOBA)
// ============================================================================
function initTobaMap() {
  const mapEl = document.getElementById("tobaMap");
  if (!mapEl || typeof L === "undefined") return;

  tobaMapInstance = L.map("tobaMap").setView([2.435, 99.085], 10);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap contributors | TobaPatrol GIS"
  }).addTo(tobaMapInstance);

  renderMapMarkers();
}

function renderMapMarkers() {
  if (!tobaMapInstance) return;
  mapMarkers.forEach((m) => tobaMapInstance.removeLayer(m));
  mapMarkers = [];

  reportsData.forEach((rep) => {
    let color = "#ef4444"; // rose for darurat / menunggu
    if (rep.status === "diproses") color = "#f59e0b";
    if (rep.status === "selesai") color = "#10b981";

    const markerHtml = `
      <div style="
        background-color: ${color};
        width: 18px;
        height: 18px;
        border-radius: 9999px;
        border: 3px solid white;
        box-shadow: 0 2px 6px rgba(0,0,0,0.35);
      "></div>
    `;

    const icon = L.divIcon({
      className: "custom-marker",
      html: markerHtml,
      iconSize: [18, 18],
      iconAnchor: [9, 9]
    });

    const marker = L.marker([rep.lat, rep.lng], { icon })
      .addTo(tobaMapInstance)
      .bindPopup(`
        <div style="font-family: 'Plus Jakarta Sans', sans-serif; min-width: 210px;">
          <div style="font-size: 11px; font-weight: 700; color: #0284c7;">#${rep.ticketCode} • Kec. ${rep.district}</div>
          <div style="font-size: 13px; font-weight: 700; color: #0f172a; margin-top: 2px;">${rep.aiCategory}</div>
          <p style="font-size: 11px; color: #475569; margin: 4px 0;">${rep.description.substring(0, 85)}...</p>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:6px; font-size:11px;">
            <span style="font-weight:700; color:#e11d48;">Urgensi: ${rep.aiUrgencyScore}/100</span>
            <button onclick="openTicketFromMap('${rep.ticketCode}')" style="background:#0284c7; color:white; border:none; padding:3px 8px; border-radius:6px; cursor:pointer; font-weight:600;">Lacak Tiket</button>
          </div>
        </div>
      `);

    mapMarkers.push(marker);
  });
}

function openTicketFromMap(ticketCode) {
  const input = document.getElementById("track-input");
  if (input) input.value = ticketCode;
  switchTab("lacak");
}

// ============================================================================
// HOME FEED LIST
// ============================================================================
function renderHomeReportsList() {
  const listEl = document.getElementById("home-reports-list");
  const badgeEl = document.getElementById("total-reports-badge");
  if (!listEl) return;

  if (badgeEl) badgeEl.textContent = `${reportsData.length} Tiket Terdaftar`;

  const statusBadge = (status) => {
    if (status === "selesai") {
      return `<span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700">Selesai</span>`;
    }
    if (status === "diproses") {
      return `<span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-700">Diproses Petugas</span>`;
    }
    return `<span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700">Menunggu Disposisi</span>`;
  };

  listEl.innerHTML = reportsData
    .map(
      (rep) => `
      <div onclick="openTicketFromMap('${rep.ticketCode}')" class="p-3.5 rounded-xl border border-slate-200 hover:border-sky-400 bg-slate-50/70 hover:bg-white transition cursor-pointer space-y-1.5">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-xs font-extrabold text-sky-700 bg-sky-100 px-2 py-0.5 rounded-md">#${rep.ticketCode}</span>
            <span class="text-xs font-semibold text-slate-600">📍 Kec. ${rep.district}</span>
          </div>
          ${statusBadge(rep.status)}
        </div>
        <p class="text-xs font-bold text-slate-900 line-clamp-1">${rep.address}</p>
        <p class="text-xs text-slate-600 line-clamp-2">${rep.description}</p>
        <div class="flex items-center justify-between pt-1 text-[11px] text-slate-500">
          <span>🤖 ${rep.aiDepartment}</span>
          <span class="font-semibold text-slate-700">👍 ${rep.upvotes} Dukungan Warga</span>
        </div>
      </div>
    `
    )
    .join("");
}

// ============================================================================
// VIEW 2: AI TRIAGE ENGINE & FORM SUBMISSION
// ============================================================================
function fillPreset(type) {
  const kec = document.getElementById("input-kecamatan");
  const lok = document.getElementById("input-lokasi");
  const desc = document.getElementById("input-deskripsi");
  const fotoLabel = document.getElementById("foto-label");

  if (type === "jalan") {
    kec.value = "Balige";
    lok.value = "Jl. Bypass Balige KM 2 (Dekat Simpang Tambunan)";
    desc.value = "Ada lubang jalan besar dan aspal amblas sedalam 20 cm di jalur cepat Bypass Balige. Tadi malam pengendara motor hampir jatuh karena genangan air.";
    fotoLabel.textContent = "bukti_jalan_amblas_balige.jpg (Geotag GPS: 2.3324° N, 99.0681° E)";
  } else if (type === "lampu") {
    kec.value = "Ajibata";
    lok.value = "Jl. Menuju Pelabuhan Ferry Ajibata";
    desc.value = "Lampu penerangan jalan umum (PJU) mati total di 4 titik tiang dekat dermaga wisata, kondisi malam sangat gelap dan rawan bagi wisatawan.";
    fotoLabel.textContent = "pju_padam_dermaga_ajibata.jpg (Geotag GPS: 2.6565° N, 98.9368° E)";
  } else if (type === "sampah") {
    kec.value = "Porsea";
    lok.value = "Area Belakang Pasar Porsea";
    desc.value = "Tumpukan sampah pasar belum diangkut 3 hari dan mulai masuk ke saluran drainase warga sehingga air meluap ke jalan.";
    fotoLabel.textContent = "sampah_drainase_porsea.jpg (Geotag GPS: 2.4439° N, 99.1526° E)";
  } else if (type === "longsor") {
    kec.value = "Habinsaran";
    lok.value = "Jalan Penghubung Parsoburan - Habinsaran";
    desc.value = "Tebing bahu jalan retak dan sebagian tanah longsor menutupi separuh badan jalan pasca hujan deras semalam, berbahaya bagi truk dan bus.";
    fotoLabel.textContent = "tebing_longsor_habinsaran.jpg (Geotag GPS: 2.2845° N, 99.2481° E)";
  }

  runLiveAITriage();
}

function previewImage(event) {
  const file = event.target.files[0];
  const fotoLabel = document.getElementById("foto-label");
  if (file && fotoLabel) {
    fotoLabel.textContent = `${file.name} (Terverifikasi AI Vision & Geotag GPS Kab. Toba)`;
  }
}

function analyzeTextWithAIAgent(text, district) {
  const lower = text.toLowerCase();
  let dinas = "Dinas PUTR Kab. Toba";
  let category = "Infrastruktur Jalan & Jembatan";
  let score = 82;
  let level = "DARURAT";
  let sla = "Maks. 1 x 24 Jam";
  let reasoning = "Terdeteksi gangguan infrastruktur fisik yang berisiko terhadap keselamatan pengguna jalan.";

  if (lower.includes("lampu") || lower.includes("gelap") || lower.includes("pju") || lower.includes("rambu")) {
    dinas = "Dinas Perhubungan Kab. Toba";
    category = "Penerangan Jalan Umum (PJU) & Lalin";
    score = 76;
    level = "TINGGI";
    sla = "Maks. 2 x 24 Jam";
    reasoning = "Terdeteksi kerusakan fasilitas penerangan jalan/rambu pada akses publik yang memengaruhi keamanan berkendara malam hari.";
  } else if (lower.includes("sampah") || lower.includes("bau") || lower.includes("drainase") || lower.includes("limbah")) {
    dinas = "Dinas Lingkungan Hidup Kab. Toba";
    category = "Kebersihan & Saluran Drainase";
    score = 72;
    level = "SEDANG";
    sla = "Maks. 2 x 24 Jam";
    reasoning = "Terdeteksi masalah sanitasi lingkungan dan potensi penyumbatan drainase yang membutuhkan armada pengangkut kebersihan.";
  } else if (lower.includes("longsor") || lower.includes("pohon") || lower.includes("banjir") || lower.includes("amblas") || lower.includes("lubang")) {
    dinas = lower.includes("longsor") ? "BPBD & Dinas PUTR Kab. Toba" : "Dinas PUTR Kab. Toba";
    category = lower.includes("longsor") ? "Mitigasi Bencana & Jalan" : "Kerusakan Jalan & Jembatan";
    score = lower.includes("longsor") ? 94 : 89;
    level = "DARURAT";
    sla = "Maks. 1 x 24 Jam";
    reasoning = "Terdeteksi ancaman keselamatan langsung (lubang dalam/amblas/longsor) pada jalur transportasi masyarakat. Wajib disposisi prioritas utama.";
  }

  // Check spatial deduplication against existing reports in the same district
  const duplicate = reportsData.find(
    (r) => r.district.toLowerCase() === district.toLowerCase() && r.status !== "selesai" && r.aiDepartment.split(" ")[1] === dinas.split(" ")[1]
  );

  return { dinas, category, score, level, sla, reasoning, duplicate };
}

function runLiveAITriage() {
  const district = document.getElementById("input-kecamatan")?.value || "Balige";
  const desc = document.getElementById("input-deskripsi")?.value || "";
  const result = analyzeTextWithAIAgent(desc, district);

  document.getElementById("ai-urgency-label").textContent = `${result.score} / 100 — ${result.level}`;
  document.getElementById("ai-urgency-badge").textContent = result.score;
  document.getElementById("ai-dinas").textContent = result.dinas;
  document.getElementById("ai-sla").textContent = result.sla;
  document.getElementById("ai-reasoning").textContent = result.reasoning;

  const dedupBox = document.getElementById("ai-dedup-box");
  const dedupText = document.getElementById("ai-dedup-text");

  if (result.duplicate) {
    dedupBox.className = "bg-amber-500/15 border border-amber-500/40 rounded-xl p-3.5 text-xs text-amber-200 space-y-1";
    dedupText.innerHTML = `Ditemukan tiket aktif (<strong>#${result.duplicate.ticketCode}</strong>) di <strong>Kec. ${district}</strong> dengan masalah serupa. Sistem dapat menggabungkan dukungan Anda (+1 Upvote Prioritas) sekaligus menerbitkan kode pantau laporan!`;
  } else {
    dedupBox.className = "bg-emerald-500/15 border border-emerald-500/40 rounded-xl p-3.5 text-xs text-emerald-200 space-y-1";
    dedupText.innerHTML = `Belum ada laporan serupa dalam radius 50 meter di <strong>Kec. ${district}</strong>. Laporan ini akan diterbitkan sebagai <strong>Tiket Prioritas Baru</strong>.`;
  }
}

function handleReportSubmit(event) {
  event.preventDefault();
  const nama = document.getElementById("input-nama").value.trim() || "Warga Toba";
  const wa = document.getElementById("input-wa").value.trim() || "-";
  const district = document.getElementById("input-kecamatan").value;
  const address = document.getElementById("input-lokasi").value.trim();
  const description = document.getElementById("input-deskripsi").value.trim();

  const ai = analyzeTextWithAIAgent(description, district);
  const newTicketCode = `TP-2026-${101 + reportsData.length}`;
  const baseCoord = districtCoords[district] || [2.3324, 99.0681];
  const jitterLat = baseCoord[0] + (Math.random() - 0.5) * 0.015;
  const jitterLng = baseCoord[1] + (Math.random() - 0.5) * 0.015;

  const newReport = {
    ticketCode: newTicketCode,
    reporterName: nama,
    reporterPhone: wa,
    district,
    address,
    lat: jitterLat,
    lng: jitterLng,
    description,
    aiCategory: ai.category,
    aiDepartment: ai.dinas,
    aiUrgencyScore: ai.score,
    aiUrgencyLevel: ai.level,
    aiSlaTarget: ai.sla,
    aiReasoning: ai.reasoning,
    status: "menunggu",
    upvotes: ai.duplicate ? ai.duplicate.upvotes + 1 : 1,
    slaRemaining: ai.score >= 80 ? "23 Jam 59 Menit" : "47 Jam 59 Menit",
    createdAt: "01 Nov 2026, Baru Saja",
    assignedUnit: "Menunggu Konfirmasi Admin Dinas",
    photoBefore: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80",
    photoAfter: null,
    logs: [
      {
        time: "01 Nov 2026, Baru Saja",
        title: "Laporan Diterima & Divalidasi AI Triage Agent",
        note: `Skor Urgensi ${ai.score}/100 (${ai.level}). ${ai.reasoning}`,
        actor: "AI Triage Agent",
        done: true
      },
      {
        time: "01 Nov 2026, Baru Saja",
        title: `Disposisi Otomatis ke ${ai.dinas}`,
        note: "Tiket telah masuk ke dashboard verifikasi instansi terkait.",
        actor: "Sistem Otomatis",
        done: true
      },
      {
        time: "Menunggu",
        title: "Penugasan Regu Petugas Lapangan",
        note: "Menunggu petugas menuju lokasi titik koordinat.",
        actor: "Admin Dinas",
        done: false
      },
      {
        time: "Menunggu",
        title: "Perbaikan Selesai & Bukti Foto Before-After",
        note: "-",
        actor: "Petugas Lapangan",
        done: false
      }
    ]
  };

  reportsData.unshift(newReport);
  renderHomeReportsList();
  renderMapMarkers();

  const trackInput = document.getElementById("track-input");
  if (trackInput) trackInput.value = newTicketCode;

  showToast("Tiket Laporan Terbit!", `Nomor Tiket Anda: #${newTicketCode} (${ai.dinas})`);
  switchTab("lacak");
}

// ============================================================================
// VIEW 3: PUBLIC SERVICE TRACKING & SLA TIMELINE
// ============================================================================
function renderQuickTicketPills() {
  const container = document.getElementById("quick-ticket-pills");
  if (!container) return;

  container.innerHTML = reportsData
    .map(
      (r) => `
      <button onclick="selectQuickTicket('${r.ticketCode}')" class="px-3 py-1 rounded-lg bg-slate-100 hover:bg-sky-100 hover:text-sky-700 text-slate-700 font-semibold transition border border-slate-200">
        #${r.ticketCode} (${r.district})
      </button>
    `
    )
    .join("");
}

function selectQuickTicket(code) {
  const input = document.getElementById("track-input");
  if (input) input.value = code;
  searchTicket();
}

function upvoteTicket(code) {
  const rep = reportsData.find((r) => r.ticketCode === code);
  if (!rep) return;
  rep.upvotes += 1;
  showToast("Dukungan Ditambahkan (+1 Upvote)", `Prioritas tiket #${code} dinaikkan oleh partisipasi warga.`);
  searchTicket();
  renderHomeReportsList();
}

function searchTicket() {
  const raw = document.getElementById("track-input")?.value.trim().replace("#", "") || "TP-2026-101";
  const container = document.getElementById("ticket-detail-container");
  if (!container) return;

  const rep = reportsData.find((r) => r.ticketCode.toLowerCase() === raw.toLowerCase()) || reportsData[0];

  const statusColor =
    rep.status === "selesai"
      ? "bg-emerald-100 text-emerald-800 border-emerald-300"
      : rep.status === "diproses"
      ? "bg-amber-100 text-amber-800 border-amber-300"
      : "bg-rose-100 text-rose-800 border-rose-300";

  const statusText =
    rep.status === "selesai"
      ? "SELESAI DIPERBAIKI"
      : rep.status === "diproses"
      ? "SEDANG DIKERJAKAN PETUGAS"
      : "MENUNGGU TINDAK LANJUT DINAS";

  container.innerHTML = `
    <div class="space-y-6">
      <!-- Top Header Info -->
      <div class="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-5">
        <div class="space-y-1">
          <div class="flex items-center gap-2.5">
            <span class="text-lg font-extrabold text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded-xl">#${rep.ticketCode}</span>
            <span class="text-xs font-extrabold px-3 py-1 rounded-full border ${statusColor}">${statusText}</span>
          </div>
          <h2 class="text-xl font-extrabold text-slate-900 pt-1">${rep.aiCategory} — Kec. ${rep.district}</h2>
          <p class="text-xs text-slate-500">📍 ${rep.address} • Dilaporkan oleh <strong>${rep.reporterName}</strong> (${rep.createdAt})</p>
        </div>

        <div class="flex items-center gap-3">
          <button onclick="upvoteTicket('${rep.ticketCode}')" class="px-4 py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 text-xs font-bold flex items-center gap-2 transition">
            <span>👍 Dukung Prioritas Warga (${rep.upvotes})</span>
          </button>
        </div>
      </div>

      <!-- SLA & AI Summary Grid -->
      <div class="grid sm:grid-cols-4 gap-4">
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <span class="text-[11px] font-bold uppercase text-slate-400 block">Instansi Penanggung Jawab</span>
          <span class="text-sm font-bold text-slate-900 mt-1 block">${rep.aiDepartment}</span>
        </div>
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <span class="text-[11px] font-bold uppercase text-slate-400 block">Skor Urgensi AI</span>
          <span class="text-sm font-extrabold text-rose-600 mt-1 block">${rep.aiUrgencyScore}/100 (${rep.aiUrgencyLevel})</span>
        </div>
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <span class="text-[11px] font-bold uppercase text-slate-400 block">Regu Pelaksana Lapangan</span>
          <span class="text-sm font-bold text-slate-900 mt-1 block">${rep.assignedUnit}</span>
        </div>
        <div class="bg-amber-50/80 p-4 rounded-xl border border-amber-200">
          <span class="text-[11px] font-bold uppercase text-amber-700 block">Status Countdown SLA (${rep.aiSlaTarget})</span>
          <span class="text-sm font-extrabold text-amber-900 mt-1 block">⏱️ ${rep.slaRemaining}</span>
        </div>
      </div>

      <!-- Timeline & Photo Evidence -->
      <div class="grid lg:grid-cols-12 gap-6 pt-2">
        <!-- Timeline Column -->
        <div class="lg:col-span-7 space-y-4">
          <h3 class="font-bold text-slate-900 text-sm uppercase tracking-wider">Riwayat Pelacakan Layanan Publik (Real-Time Log)</h3>
          <div class="space-y-4 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px before:h-full before:w-0.5 before:bg-slate-200">
            ${rep.logs
              .map(
                (log) => `
              <div class="relative flex items-start gap-4">
                <div class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 ${
                  log.done ? "bg-emerald-600 text-white shadow-sm" : "bg-slate-200 text-slate-500"
                }">
                  ${log.done ? "✓" : "•"}
                </div>
                <div class="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex-grow">
                  <div class="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span class="font-bold text-sky-700">${log.actor}</span>
                    <span>${log.time}</span>
                  </div>
                  <div class="font-bold text-slate-900 text-sm">${log.title}</div>
                  <p class="text-xs text-slate-600 mt-1">${log.note}</p>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>

        <!-- Before / After Evidence Column -->
        <div class="lg:col-span-5 space-y-4">
          <h3 class="font-bold text-slate-900 text-sm uppercase tracking-wider">Bukti Visual Transparansi (Before vs After)</h3>
          <div class="space-y-3">
            <div class="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
              <div class="bg-rose-600 text-white text-[11px] font-bold px-3 py-1 uppercase">Foto Kondisi Awal (Before — Laporan Warga)</div>
              <img src="${rep.photoBefore}" alt="Foto Sebelum" class="w-full h-40 object-cover" />
            </div>

            ${
              rep.photoAfter
                ? `
              <div class="border border-emerald-300 rounded-xl overflow-hidden bg-emerald-50">
                <div class="bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 uppercase">Foto Selesai Diperbaiki (After — Bukti Petugas)</div>
                <img src="${rep.photoAfter}" alt="Foto Sesudah" class="w-full h-40 object-cover" />
              </div>
            `
                : `
              <div class="border-2 border-dashed border-slate-300 rounded-xl p-5 text-center bg-slate-50 space-y-2">
                <div class="text-xs font-bold text-slate-600">Foto Bukti Penyelesaian (After) Belum Diunggah</div>
                <p class="text-[11px] text-slate-500">Petugas lapangan wajib mengunggah foto hasil perbaikan melalui Portal Dinas untuk mengubah status menjadi Selesai.</p>
                <button onclick="switchTab('dashboard')" class="text-xs font-bold text-sky-600 hover:underline pt-1 inline-block">
                  Simulasikan Update Status oleh Petugas →
                </button>
              </div>
            `
            }
          </div>
        </div>
      </div>
    </div>
  `;
}

// ============================================================================
// VIEW 4: PORTAL PETUGAS & ADMIN PEMDA TOBA
// ============================================================================
function renderDashboardTable() {
  const tbody = document.getElementById("dashboard-table-body");
  const statPending = document.getElementById("dash-stat-pending");
  const statDone = document.getElementById("dash-stat-done");
  if (!tbody) return;

  const sorted = [...reportsData].sort((a, b) => b.aiUrgencyScore - a.aiUrgencyScore);

  if (statPending) statPending.textContent = reportsData.filter((r) => r.status !== "selesai").length;
  if (statDone) statDone.textContent = reportsData.filter((r) => r.status === "selesai").length;

  tbody.innerHTML = sorted
    .map((rep) => {
      const statusBadge =
        rep.status === "selesai"
          ? `<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700">Selesai</span>`
          : rep.status === "diproses"
          ? `<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700">Sedang Dikerjakan</span>`
          : `<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-700">Menunggu Verifikasi</span>`;

      let actionButtons = "";
      if (rep.status === "menunggu") {
        actionButtons = `
          <button onclick="updateReportStatus('${rep.ticketCode}', 'diproses')" class="bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition">
            Tugaskan Regu Petugas
          </button>
        `;
      } else if (rep.status === "diproses") {
        actionButtons = `
          <button onclick="updateReportStatus('${rep.ticketCode}', 'selesai')" class="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition">
            Upload Bukti & Selesaikan
          </button>
        `;
      } else {
        actionButtons = `
          <button onclick="openTicketFromMap('${rep.ticketCode}')" class="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-lg transition">
            Lihat Bukti Selesai
          </button>
        `;
      }

      return `
        <tr class="hover:bg-slate-50 transition">
          <td class="py-3.5 px-4 font-extrabold text-sky-700 whitespace-nowrap">#${rep.ticketCode}</td>
          <td class="py-3.5 px-4">
            <div class="font-bold text-slate-900">Kec. ${rep.district} — ${rep.address}</div>
            <div class="text-xs text-slate-500 line-clamp-1">${rep.description}</div>
          </td>
          <td class="py-3.5 px-4 text-xs font-semibold text-slate-700">${rep.aiDepartment}</td>
          <td class="py-3.5 px-4">
            <span class="px-2.5 py-1 rounded-md text-xs font-extrabold ${
              rep.aiUrgencyScore >= 80 ? "bg-rose-100 text-rose-700" : "bg-amber-100 text-amber-700"
            }">
              ${rep.aiUrgencyScore}/100 (${rep.aiUrgencyLevel})
            </span>
          </td>
          <td class="py-3.5 px-4 whitespace-nowrap">${statusBadge}</td>
          <td class="py-3.5 px-4 text-right whitespace-nowrap">${actionButtons}</td>
        </tr>
      `;
    })
    .join("");
}

function updateReportStatus(ticketCode, newStatus) {
  const rep = reportsData.find((r) => r.ticketCode === ticketCode);
  if (!rep) return;

  rep.status = newStatus;
  if (newStatus === "diproses") {
    rep.assignedUnit = "Regu Teknis Lapangan - Pemkab Toba";
    rep.logs[2] = {
      time: "01 Nov 2026, Baru Saja",
      title: "Petugas Lapangan Ditugaskan & Menuju Lokasi",
      note: "Admin Dinas telah memverifikasi laporan dan menerjunkan Regu Teknis ke lokasi.",
      actor: "Admin Dinas",
      done: true
    };
    showToast("Status Diperbarui!", `Tiket #${ticketCode} kini berstatus SEDANG DIKERJAKAN.`);
  } else if (newStatus === "selesai") {
    rep.slaRemaining = "Tuntas Tepat Waktu (Sesuai SLA)";
    rep.photoAfter = "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=800&q=80";
    rep.logs[2].done = true;
    rep.logs[3] = {
      time: "01 Nov 2026, Baru Saja",
      title: "Perbaikan Selesai & Bukti Foto After Terverifikasi",
      note: "Petugas lapangan telah menyelesaikan penanganan dan mengunggah foto bukti perbaikan.",
      actor: "Petugas Lapangan",
      done: true
    };
    showToast("Penanganan Selesai!", `Bukti foto After untuk #${ticketCode} telah dipublikasikan ke warga.`);
  }

  renderDashboardTable();
  renderHomeReportsList();
  renderMapMarkers();
}

// ============================================================================
// TOAST HELPER & INITIALIZATION
// ============================================================================
function showToast(title, msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  document.getElementById("toast-title").textContent = title;
  document.getElementById("toast-msg").textContent = msg;
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 4000);
}

window.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) window.lucide.createIcons();
  renderHomeReportsList();
  initTobaMap();
  runLiveAITriage();
  renderQuickTicketPills();
  searchTicket();
  renderDashboardTable();
});
