/**
 * @file server.js
 * @description REST API Backend for TobaPatrol (Civic Reporting & Public Service Tracking)
 */

import http from "node:http";
import { evaluateReportTriage } from "../ai-agent/triageEngine.js";
import { findSpatialDuplicate } from "../ai-agent/spatialDeduplicator.js";

const PORT = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  if (req.url === "/api/health" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(
      JSON.stringify({
        service: "tobapatrol-backend",
        status: "healthy",
        aiEngine: "active"
      })
    );
  }

  if (req.url === "/api/triage" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      try {
        const payload = JSON.parse(body || "{}");
        const triage = evaluateReportTriage(payload.description, payload.district);
        const dedup = findSpatialDuplicate(
          { ...payload, aiDepartment: triage.department },
          payload.activeReports || []
        );
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ triage, deduplication: dedup }));
      } catch (err) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid request payload" }));
      }
    });
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Route not found" }));
});

server.listen(PORT, () => {
  console.log(`[TobaPatrol Backend] Server listening on http://localhost:${PORT}`);
});
