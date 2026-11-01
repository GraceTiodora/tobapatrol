-- ============================================================================
-- TOBAPATROL DATABASE SCHEMA (PostgreSQL / Supabase)
-- Single Source of Truth for 3 POV: Citizen, Agency Admin, Field Officer
-- ============================================================================

CREATE TYPE ticket_status AS ENUM ('menunggu', 'diproses', 'selesai');
CREATE TYPE urgency_level AS ENUM ('DARURAT', 'TINGGI', 'SEDANG', 'BIASA');

CREATE TABLE IF NOT EXISTS reports (
    ticket_code VARCHAR(20) PRIMARY KEY,
    reporter_name VARCHAR(120) NOT NULL,
    reporter_phone VARCHAR(30) NOT NULL,
    district VARCHAR(60) NOT NULL,
    address TEXT NOT NULL,
    lat DOUBLE PRECISION NOT NULL,
    lng DOUBLE PRECISION NOT NULL,
    description TEXT NOT NULL,
    ai_category VARCHAR(100) NOT NULL,
    ai_department VARCHAR(100) NOT NULL,
    ai_urgency_score INTEGER NOT NULL CHECK (ai_urgency_score BETWEEN 1 AND 100),
    ai_urgency_level urgency_level NOT NULL DEFAULT 'SEDANG',
    ai_sla_target VARCHAR(40) NOT NULL,
    ai_reasoning TEXT,
    status ticket_status NOT NULL DEFAULT 'menunggu',
    upvotes INTEGER NOT NULL DEFAULT 1,
    assigned_unit VARCHAR(120) DEFAULT 'Menunggu Penugasan',
    photo_before TEXT NOT NULL,
    photo_after TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS report_logs (
    id SERIAL PRIMARY KEY,
    ticket_code VARCHAR(20) NOT NULL REFERENCES reports(ticket_code) ON DELETE CASCADE,
    log_time VARCHAR(50) NOT NULL,
    title VARCHAR(160) NOT NULL,
    note TEXT,
    actor VARCHAR(80) NOT NULL,
    done BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_reports_district ON reports(district);
CREATE INDEX idx_reports_urgency ON reports(ai_urgency_score DESC);
CREATE INDEX idx_reports_status ON reports(status);
