/**
 * @file triageEngine.js
 * @description Autonomous AI Triage Engine for TobaPatrol.
 * Classifies citizen reports into responsible government departments (OPD Kab. Toba),
 * calculates urgency scores (1-100), and determines SLA target deadlines.
 */

export const TOBA_DEPARTMENTS = {
  PUTR: "Dinas PUTR Kab. Toba",
  DISHUB: "Dinas Perhubungan Kab. Toba",
  DLH: "Dinas Lingkungan Hidup Kab. Toba",
  BPBD: "BPBD & Dinas PUTR Kab. Toba"
};

/**
 * Analyzes citizen complaint text and location context.
 * @param {string} description - Natural language complaint from citizen
 * @param {string} district - Subdistrict (Kecamatan) in Toba Regency
 * @returns {Object} Structured triage decision
 */
export function evaluateReportTriage(description = "", district = "Balige") {
  const normalized = description.toLowerCase();

  let department = TOBA_DEPARTMENTS.PUTR;
  let category = "Infrastruktur Jalan & Jembatan";
  let urgencyScore = 82;
  let urgencyLevel = "DARURAT";
  let slaTarget = "Maks. 1 x 24 Jam";
  let reasoning =
    "Terdeteksi kerusakan infrastruktur jalan yang berisiko terhadap keselamatan pengendara.";

  if (
    normalized.includes("lampu") ||
    normalized.includes("gelap") ||
    normalized.includes("pju") ||
    normalized.includes("rambu")
  ) {
    department = TOBA_DEPARTMENTS.DISHUB;
    category = "Penerangan Jalan Umum (PJU) & Lalin";
    urgencyScore = 76;
    urgencyLevel = "TINGGI";
    slaTarget = "Maks. 2 x 24 Jam";
    reasoning =
      "Kerusakan fasilitas penerangan jalan/rambu pada akses publik yang memengaruhi keamanan berkendara malam hari.";
  } else if (
    normalized.includes("sampah") ||
    normalized.includes("bau") ||
    normalized.includes("drainase") ||
    normalized.includes("limbah")
  ) {
    department = TOBA_DEPARTMENTS.DLH;
    category = "Kebersihan & Saluran Drainase";
    urgencyScore = 72;
    urgencyLevel = "SEDANG";
    slaTarget = "Maks. 2 x 24 Jam";
    reasoning =
      "Masalah sanitasi lingkungan dan penyumbatan saluran drainase yang membutuhkan armada pengangkut kebersihan.";
  } else if (
    normalized.includes("longsor") ||
    normalized.includes("pohon") ||
    normalized.includes("amblas") ||
    normalized.includes("lubang")
  ) {
    const isDisaster = normalized.includes("longsor") || normalized.includes("pohon");
    department = isDisaster ? TOBA_DEPARTMENTS.BPBD : TOBA_DEPARTMENTS.PUTR;
    category = isDisaster ? "Mitigasi Bencana & Bahu Jalan" : "Kerusakan Jalan & Jembatan";
    urgencyScore = isDisaster ? 94 : 89;
    urgencyLevel = "DARURAT";
    slaTarget = "Maks. 1 x 24 Jam";
    reasoning =
      "Ancaman keselamatan langsung pada jalur transportasi masyarakat di Kec. " +
      district +
      ". Wajib disposisi prioritas utama.";
  }

  return {
    category,
    department,
    urgencyScore,
    urgencyLevel,
    slaTarget,
    reasoning
  };
}
