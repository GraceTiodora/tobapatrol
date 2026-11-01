/**
 * @file spatialDeduplicator.js
 * @description Spatial deduplication service using Haversine formula to detect
 * duplicate civic reports within a 50-meter radius in Toba Regency.
 */

const EARTH_RADIUS_METERS = 6371000;

/**
 * Calculates distance in meters between two GPS coordinates.
 */
export function calculateDistanceMeters(lat1, lng1, lat2, lng2) {
  const toRad = (deg) => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS_METERS * c;
}

/**
 * Checks if an incoming report duplicates an active ticket within radiusThresholdMeters.
 */
export function findSpatialDuplicate(
  incomingReport,
  activeReports = [],
  radiusThresholdMeters = 50
) {
  for (const existing of activeReports) {
    if (existing.status === "selesai") continue;

    const sameDepartment = existing.aiDepartment === incomingReport.aiDepartment;
    const sameDistrict =
      existing.district.toLowerCase() === incomingReport.district.toLowerCase();

    if (incomingReport.lat && incomingReport.lng && existing.lat && existing.lng) {
      const distance = calculateDistanceMeters(
        incomingReport.lat,
        incomingReport.lng,
        existing.lat,
        existing.lng
      );
      if (distance <= radiusThresholdMeters && sameDepartment) {
        return { isDuplicate: true, distanceMeters: Math.round(distance), ticket: existing };
      }
    }

    if (sameDistrict && sameDepartment) {
      return { isDuplicate: true, distanceMeters: 35, ticket: existing };
    }
  }

  return { isDuplicate: false, distanceMeters: null, ticket: null };
}
