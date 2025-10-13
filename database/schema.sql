-- ============================================
-- AI-PEOPLE PRE-LAUNCH DATABASE SCHEMA
-- ============================================
-- Version: 2.0
-- Created: 2025-10-07
-- Purpose: Store buyer and creator leads for pre-launch campaign
-- Database: MySQL 8.0+ / MariaDB 10.5+
-- Charset: utf8mb4 (full Unicode support including emojis)
-- Collation: utf8mb4_unicode_ci (case-insensitive, accent-sensitive)
-- ============================================


-- ============================================
-- TABLE: buyer_leads
-- Description: Stores potential buyers who express interest in purchasing AI content
-- Purpose: Lead generation, segmentation, qualification, and marketing attribution
-- ============================================
CREATE TABLE IF NOT EXISTS buyer_leads (
  -- ==================== Primary Identification ====================
  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT COMMENT 'Unique lead identifier',
  email VARCHAR(255) NOT NULL UNIQUE COMMENT 'User email address (must be unique)',
  name VARCHAR(255) NOT NULL COMMENT 'Full name of the buyer',
  
  -- ==================== Segmentation Fields ====================
  role VARCHAR(100) COMMENT 'Professional role',
  -- Values: business_owner, marketer, freelancer, agency, startup, other
  
  company VARCHAR(255) COMMENT 'Company name (optional)',
  
  team_size VARCHAR(50) COMMENT 'Organization size',
  -- Values: 1-10, 11-50, 51-200, 200+
  
  -- ==================== Qualification Fields ====================
  use_case VARCHAR(100) COMMENT 'Primary use case for AI content',
  -- Values: advertising, social_media, branding, ecommerce, other
  
  monthly_budget VARCHAR(50) COMMENT 'Expected monthly budget in USD',
  -- Values: 0-100, 100-500, 500-1000, 1000-5000, 5000+
  
  ai_experience VARCHAR(50) COMMENT 'Experience level with AI tools',
  -- Values: never_used, beginner, intermediate, advanced
  
  -- ==================== Marketing Attribution ====================
  source VARCHAR(255) COMMENT 'How they found us',
  -- Values: google, social_media, friend, blog, other
  
  -- ==================== Consent & Compliance (GDPR/CCPA) ====================
  email_consent BOOLEAN NOT NULL DEFAULT FALSE COMMENT 'Agreed to receive marketing emails',
  terms_accepted BOOLEAN NOT NULL DEFAULT FALSE COMMENT 'Accepted Terms of Service',
  
  -- ==================== Technical Tracking ====================
  ip_address VARCHAR(45) COMMENT 'IPv4 or IPv6 address',
  user_agent TEXT COMMENT 'Browser user agent string',
  referrer VARCHAR(512) COMMENT 'HTTP referrer URL',
  
  -- UTM parameters for campaign tracking
  utm_source VARCHAR(255) COMMENT 'UTM source parameter',
  utm_medium VARCHAR(255) COMMENT 'UTM medium parameter',
  utm_campaign VARCHAR(255) COMMENT 'UTM campaign parameter',
  utm_content VARCHAR(255) COMMENT 'UTM content parameter',
  utm_term VARCHAR(255) COMMENT 'UTM term parameter',
  
  -- ==================== Lead Scoring & Status ====================
  lead_score INT DEFAULT 0 COMMENT 'Calculated lead quality score (0-100)',
  lead_status ENUM('new', 'contacted', 'qualified', 'unqualified', 'converted', 'lost') DEFAULT 'new' COMMENT 'Current lead status',
  priority ENUM('low', 'medium', 'high', 'urgent') DEFAULT 'medium' COMMENT 'Follow-up priority',
  
  -- ==================== Notes & Tags ====================
  notes TEXT COMMENT 'Internal notes about this lead',
  tags JSON COMMENT 'Array of tags for categorization',
  
  -- ==================== Timestamps ====================
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Lead registration timestamp',
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last update timestamp',
  contacted_at TIMESTAMP NULL COMMENT 'First contact timestamp',
  converted_at TIMESTAMP NULL COMMENT 'Conversion timestamp',
  
  -- ==================== Indexes for Performance ====================
  INDEX idx_email (email),
  INDEX idx_created_at (created_at),
  INDEX idx_role (role),
  INDEX idx_source (source),
  INDEX idx_lead_status (lead_status),
  INDEX idx_lead_score (lead_score),
  INDEX idx_priority (priority),
  INDEX idx_monthly_budget (monthly_budget),
  INDEX idx_use_case (use_case)
  
) ENGINE=InnoDB 
  DEFAULT CHARSET=utf8mb4 
  COLLATE=utf8mb4_unicode_ci 
  COMMENT='Buyer leads from pre-launch registration forms';


-- ============================================
-- TABLE: creator_leads
-- Description: Stores potential creators who want to sell their AI content
-- Purpose: Creator onboarding, portfolio qualification, and earnings estimation
-- ============================================
CREATE TABLE IF NOT EXISTS creator_leads (
  -- ==================== Primary Identification ====================
  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT COMMENT 'Unique lead identifier',
  email VARCHAR(255) NOT NULL UNIQUE COMMENT 'User email address (must be unique)',
  name VARCHAR(255) NOT NULL COMMENT 'Full name of the creator',
  username VARCHAR(100) UNIQUE COMMENT 'Desired username on platform (must be unique)',
  
  -- ==================== Professional Profile ====================
  ai_experience VARCHAR(50) COMMENT 'Years of experience with AI generation',
  -- Values: beginner, intermediate, 1-2years, 3plus_years
  
  specialization VARCHAR(100) COMMENT 'Primary content specialization',
  -- Values: photo, video, 3d, mixed, other
  
  platforms JSON COMMENT 'Array of AI platforms currently used',
  -- Example: ["midjourney", "stable_diffusion", "leonardo_ai", "seaart", "flux"]
  -- Available platforms: midjourney, stable_diffusion, dall_e, leonardo_ai, flux, 
  --                     seaart, nanabanana, ideogram, krea_ai, magnific_ai
  
  -- ==================== Business Expectations ====================
  expected_monthly_income VARCHAR(50) COMMENT 'Expected monthly earnings in USD',
  -- Values: 0-500, 500-1000, 1000-3000, 3000-5000, 5000+
  
  ready_content_count VARCHAR(50) COMMENT 'Number of ready-to-sell content sets',
  -- Values: 0-1, 2-5, 6-10, 11+
  
  monthly_production_capacity VARCHAR(50) COMMENT 'Monthly production capacity in sets',
  -- Values: 0-1, 2-3, 4-6, 7+
  
  -- ==================== Marketing Attribution ====================
  source VARCHAR(255) COMMENT 'How they found us',
  -- Values: google, social_media, friend, blog, other
  
  -- ==================== Consent & Compliance (GDPR/CCPA + Content Rights) ====================
  email_consent BOOLEAN NOT NULL DEFAULT FALSE COMMENT 'Agreed to receive marketing emails',
  terms_accepted BOOLEAN NOT NULL DEFAULT FALSE COMMENT 'Accepted Terms of Service',
  content_rights_confirmed BOOLEAN NOT NULL DEFAULT FALSE COMMENT 'Confirmed ownership of content rights',
  
  -- ==================== Technical Tracking ====================
  ip_address VARCHAR(45) COMMENT 'IPv4 or IPv6 address',
  user_agent TEXT COMMENT 'Browser user agent string',
  referrer VARCHAR(512) COMMENT 'HTTP referrer URL',
  
  -- UTM parameters for campaign tracking
  utm_source VARCHAR(255) COMMENT 'UTM source parameter',
  utm_medium VARCHAR(255) COMMENT 'UTM medium parameter',
  utm_campaign VARCHAR(255) COMMENT 'UTM campaign parameter',
  utm_content VARCHAR(255) COMMENT 'UTM content parameter',
  utm_term VARCHAR(255) COMMENT 'UTM term parameter',
  
  -- ==================== Lead Scoring & Status ====================
  lead_score INT DEFAULT 0 COMMENT 'Calculated creator quality score (0-100)',
  lead_status ENUM('new', 'contacted', 'portfolio_review', 'approved', 'rejected', 'onboarded') DEFAULT 'new' COMMENT 'Current lead status',
  priority ENUM('low', 'medium', 'high', 'urgent') DEFAULT 'medium' COMMENT 'Onboarding priority',
  
  -- ==================== Creator Quality Indicators ====================
  portfolio_quality ENUM('not_reviewed', 'excellent', 'good', 'average', 'needs_improvement') DEFAULT 'not_reviewed' COMMENT 'Portfolio quality assessment',
  onboarding_completed BOOLEAN DEFAULT FALSE COMMENT 'Has completed full onboarding',
  early_access_granted BOOLEAN DEFAULT FALSE COMMENT 'Granted early platform access',
  
  -- ==================== Notes & Tags ====================
  notes TEXT COMMENT 'Internal notes about this creator',
  tags JSON COMMENT 'Array of tags for categorization',
  
  -- ==================== Timestamps ====================
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Lead registration timestamp',
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last update timestamp',
  contacted_at TIMESTAMP NULL COMMENT 'First contact timestamp',
  onboarded_at TIMESTAMP NULL COMMENT 'Full onboarding completion timestamp',
  
  -- ==================== Indexes for Performance ====================
  INDEX idx_email (email),
  INDEX idx_username (username),
  INDEX idx_created_at (created_at),
  INDEX idx_specialization (specialization),
  INDEX idx_ai_experience (ai_experience),
  INDEX idx_source (source),
  INDEX idx_lead_status (lead_status),
  INDEX idx_lead_score (lead_score),
  INDEX idx_priority (priority),
  INDEX idx_portfolio_quality (portfolio_quality),
  INDEX idx_early_access (early_access_granted)
  
) ENGINE=InnoDB 
  DEFAULT CHARSET=utf8mb4 
  COLLATE=utf8mb4_unicode_ci 
  COMMENT='Creator leads from pre-launch registration forms';


-- ============================================
-- TABLE: lead_activity_log
-- Description: Comprehensive activity tracking for all lead interactions
-- Purpose: Analytics, behavior analysis, attribution modeling, and lead nurturing
-- ============================================
CREATE TABLE IF NOT EXISTS lead_activity_log (
  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT COMMENT 'Unique activity identifier',
  
  -- ==================== Lead Reference ====================
  lead_type ENUM('buyer', 'creator') NOT NULL COMMENT 'Type of lead',
  lead_id BIGINT UNSIGNED NOT NULL COMMENT 'Reference to buyer_leads.id or creator_leads.id',
  
  -- ==================== Activity Details ====================
  activity_type VARCHAR(100) NOT NULL COMMENT 'Type of activity',
  -- Examples: form_submitted, form_step_completed, email_opened, email_clicked,
  --          link_clicked, page_viewed, download_started, video_watched, etc.
  
  activity_category VARCHAR(50) COMMENT 'Activity category',
  -- Values: engagement, conversion, communication, content_interaction
  
  activity_data JSON COMMENT 'Structured data about the activity',
  -- Example: {"step": 3, "field": "specialization", "value": "photo", "duration_ms": 2500}
  
  -- ==================== Context Information ====================
  page_url VARCHAR(512) COMMENT 'URL where activity occurred',
  session_id VARCHAR(255) COMMENT 'User session identifier',
  device_type ENUM('desktop', 'mobile', 'tablet', 'unknown') COMMENT 'Device type',
  
  -- ==================== Timestamp ====================
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Activity timestamp',
  
  -- ==================== Indexes for Performance ====================
  INDEX idx_lead (lead_type, lead_id),
  INDEX idx_activity_type (activity_type),
  INDEX idx_activity_category (activity_category),
  INDEX idx_created_at (created_at),
  INDEX idx_session (session_id),
  INDEX idx_composite (lead_type, lead_id, created_at)
  
) ENGINE=InnoDB 
  DEFAULT CHARSET=utf8mb4 
  COLLATE=utf8mb4_unicode_ci 
  COMMENT='Activity log for lead behavior tracking and analytics';


-- ============================================
-- TABLE: email_campaigns
-- Description: Track email campaigns sent to leads
-- Purpose: Email marketing management and performance tracking
-- ============================================
CREATE TABLE IF NOT EXISTS email_campaigns (
  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT COMMENT 'Unique campaign identifier',
  
  campaign_name VARCHAR(255) NOT NULL COMMENT 'Campaign name',
  campaign_type ENUM('welcome', 'nurture', 'launch_announcement', 'follow_up', 'promotional') NOT NULL COMMENT 'Type of email campaign',
  target_audience ENUM('buyers', 'creators', 'both') NOT NULL COMMENT 'Target audience',
  
  subject_line VARCHAR(255) NOT NULL COMMENT 'Email subject line',
  sender_name VARCHAR(100) NOT NULL DEFAULT 'AI-People Team' COMMENT 'Sender display name',
  sender_email VARCHAR(255) NOT NULL DEFAULT 'team@ai-people.io' COMMENT 'Sender email address',
  
  html_template TEXT COMMENT 'HTML email template',
  text_template TEXT COMMENT 'Plain text email template',
  
  -- Campaign status
  status ENUM('draft', 'scheduled', 'sending', 'sent', 'paused', 'cancelled') DEFAULT 'draft' COMMENT 'Campaign status',
  
  -- Scheduling
  scheduled_at TIMESTAMP NULL COMMENT 'When to send the campaign',
  sent_at TIMESTAMP NULL COMMENT 'When campaign was actually sent',
  
  -- Performance metrics
  total_sent INT DEFAULT 0 COMMENT 'Total emails sent',
  total_delivered INT DEFAULT 0 COMMENT 'Total emails delivered',
  total_opened INT DEFAULT 0 COMMENT 'Total emails opened',
  total_clicked INT DEFAULT 0 COMMENT 'Total link clicks',
  total_bounced INT DEFAULT 0 COMMENT 'Total bounces',
  total_unsubscribed INT DEFAULT 0 COMMENT 'Total unsubscribes',
  
  -- Timestamps
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Campaign creation timestamp',
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last update timestamp',
  
  -- Indexes
  INDEX idx_status (status),
  INDEX idx_target_audience (target_audience),
  INDEX idx_scheduled_at (scheduled_at),
  INDEX idx_campaign_type (campaign_type)
  
) ENGINE=InnoDB 
  DEFAULT CHARSET=utf8mb4 
  COLLATE=utf8mb4_unicode_ci 
  COMMENT='Email marketing campaigns for lead nurturing';


-- ============================================
-- ANALYTICS VIEWS
-- Description: Pre-computed views for common analytics queries
-- Purpose: Fast reporting and dashboard generation
-- ============================================

-- Daily lead generation statistics
CREATE OR REPLACE VIEW v_daily_lead_stats AS
SELECT 
  DATE(created_at) as date,
  'buyer' as lead_type,
  COUNT(*) as leads_count,
  COUNT(DISTINCT source) as unique_sources,
  SUM(CASE WHEN terms_accepted = TRUE THEN 1 ELSE 0 END) as accepted_terms_count,
  SUM(CASE WHEN email_consent = TRUE THEN 1 ELSE 0 END) as email_consent_count,
  AVG(lead_score) as avg_lead_score
FROM buyer_leads
GROUP BY DATE(created_at)

UNION ALL

SELECT 
  DATE(created_at) as date,
  'creator' as lead_type,
  COUNT(*) as leads_count,
  COUNT(DISTINCT source) as unique_sources,
  SUM(CASE WHEN terms_accepted = TRUE THEN 1 ELSE 0 END) as accepted_terms_count,
  SUM(CASE WHEN email_consent = TRUE THEN 1 ELSE 0 END) as email_consent_count,
  AVG(lead_score) as avg_lead_score
FROM creator_leads
GROUP BY DATE(created_at)
ORDER BY date DESC;


-- Source attribution analysis with conversion metrics
CREATE OR REPLACE VIEW v_lead_sources AS
SELECT 
  'buyer' as lead_type,
  source,
  COUNT(*) as total_leads,
  SUM(CASE WHEN lead_status = 'converted' THEN 1 ELSE 0 END) as converted_leads,
  ROUND(AVG(lead_score), 2) as avg_lead_score,
  COUNT(*) * 100.0 / (SELECT COUNT(*) FROM buyer_leads WHERE source IS NOT NULL) as percentage
FROM buyer_leads
WHERE source IS NOT NULL
GROUP BY source

UNION ALL

SELECT 
  'creator' as lead_type,
  source,
  COUNT(*) as total_leads,
  SUM(CASE WHEN lead_status = 'onboarded' THEN 1 ELSE 0 END) as onboarded_leads,
  ROUND(AVG(lead_score), 2) as avg_lead_score,
  COUNT(*) * 100.0 / (SELECT COUNT(*) FROM creator_leads WHERE source IS NOT NULL) as percentage
FROM creator_leads
WHERE source IS NOT NULL
GROUP BY source
ORDER BY total_leads DESC;


-- High-value buyer leads (qualified prospects)
CREATE OR REPLACE VIEW v_high_value_buyers AS
SELECT 
  id,
  email,
  name,
  company,
  role,
  monthly_budget,
  use_case,
  lead_score,
  lead_status,
  created_at
FROM buyer_leads
WHERE 
  terms_accepted = TRUE 
  AND (
    monthly_budget IN ('1000-5000', '5000+')
    OR lead_score >= 70
    OR role IN ('business_owner', 'agency')
  )
  AND lead_status NOT IN ('unqualified', 'lost')
ORDER BY lead_score DESC, created_at DESC;


-- High-quality creator leads (ready to onboard)
CREATE OR REPLACE VIEW v_high_quality_creators AS
SELECT 
  id,
  email,
  name,
  username,
  specialization,
  ai_experience,
  ready_content_count,
  monthly_production_capacity,
  lead_score,
  portfolio_quality,
  lead_status,
  created_at
FROM creator_leads
WHERE 
  terms_accepted = TRUE 
  AND content_rights_confirmed = TRUE
  AND (
    ready_content_count IN ('6-10', '11+')
    OR ai_experience IN ('1-2years', '3plus_years')
    OR lead_score >= 70
  )
  AND lead_status NOT IN ('rejected')
ORDER BY lead_score DESC, created_at DESC;


-- Weekly activity summary
CREATE OR REPLACE VIEW v_weekly_activity_summary AS
SELECT 
  YEARWEEK(created_at, 1) as year_week,
  DATE(DATE_SUB(created_at, INTERVAL WEEKDAY(created_at) DAY)) as week_start,
  lead_type,
  activity_type,
  COUNT(*) as activity_count
FROM lead_activity_log
GROUP BY YEARWEEK(created_at, 1), DATE(DATE_SUB(created_at, INTERVAL WEEKDAY(created_at) DAY)), lead_type, activity_type
ORDER BY year_week DESC, lead_type, activity_count DESC;


-- Lead funnel conversion rates
CREATE OR REPLACE VIEW v_lead_funnel AS
SELECT 
  'buyer' as lead_type,
  COUNT(*) as total_leads,
  SUM(CASE WHEN lead_status = 'contacted' THEN 1 ELSE 0 END) as contacted,
  SUM(CASE WHEN lead_status = 'qualified' THEN 1 ELSE 0 END) as qualified,
  SUM(CASE WHEN lead_status = 'converted' THEN 1 ELSE 0 END) as converted,
  ROUND(SUM(CASE WHEN lead_status = 'contacted' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) as contacted_rate,
  ROUND(SUM(CASE WHEN lead_status = 'qualified' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) as qualified_rate,
  ROUND(SUM(CASE WHEN lead_status = 'converted' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) as conversion_rate
FROM buyer_leads

UNION ALL

SELECT 
  'creator' as lead_type,
  COUNT(*) as total_leads,
  SUM(CASE WHEN lead_status = 'contacted' THEN 1 ELSE 0 END) as contacted,
  SUM(CASE WHEN lead_status = 'portfolio_review' THEN 1 ELSE 0 END) as in_review,
  SUM(CASE WHEN lead_status = 'onboarded' THEN 1 ELSE 0 END) as onboarded,
  ROUND(SUM(CASE WHEN lead_status = 'contacted' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) as contacted_rate,
  ROUND(SUM(CASE WHEN lead_status = 'portfolio_review' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) as review_rate,
  ROUND(SUM(CASE WHEN lead_status = 'onboarded' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) as onboarding_rate
FROM creator_leads;


-- ============================================
-- STORED PROCEDURES
-- Description: Common operations for lead management
-- ============================================

-- Update lead score for buyers based on qualification criteria
DELIMITER //
CREATE PROCEDURE IF NOT EXISTS sp_calculate_buyer_lead_score(IN p_buyer_id BIGINT)
BEGIN
  DECLARE v_score INT DEFAULT 0;
  DECLARE v_budget VARCHAR(50);
  DECLARE v_role VARCHAR(100);
  DECLARE v_use_case VARCHAR(100);
  DECLARE v_experience VARCHAR(50);
  DECLARE v_consent BOOLEAN;
  
  -- Get buyer data
  SELECT monthly_budget, role, use_case, ai_experience, email_consent
  INTO v_budget, v_role, v_use_case, v_experience, v_consent
  FROM buyer_leads
  WHERE id = p_buyer_id;
  
  -- Score based on budget (0-40 points)
  CASE v_budget
    WHEN '5000+' THEN SET v_score = v_score + 40;
    WHEN '1000-5000' THEN SET v_score = v_score + 30;
    WHEN '500-1000' THEN SET v_score = v_score + 20;
    WHEN '100-500' THEN SET v_score = v_score + 10;
    ELSE SET v_score = v_score + 5;
  END CASE;
  
  -- Score based on role (0-25 points)
  CASE v_role
    WHEN 'business_owner' THEN SET v_score = v_score + 25;
    WHEN 'agency' THEN SET v_score = v_score + 25;
    WHEN 'startup' THEN SET v_score = v_score + 20;
    WHEN 'marketer' THEN SET v_score = v_score + 15;
    ELSE SET v_score = v_score + 10;
  END CASE;
  
  -- Score based on use case (0-15 points)
  CASE v_use_case
    WHEN 'advertising' THEN SET v_score = v_score + 15;
    WHEN 'branding' THEN SET v_score = v_score + 15;
    WHEN 'social_media' THEN SET v_score = v_score + 10;
    ELSE SET v_score = v_score + 5;
  END CASE;
  
  -- Score based on experience (0-10 points)
  CASE v_experience
    WHEN 'advanced' THEN SET v_score = v_score + 10;
    WHEN 'intermediate' THEN SET v_score = v_score + 7;
    WHEN 'beginner' THEN SET v_score = v_score + 5;
    ELSE SET v_score = v_score + 2;
  END CASE;
  
  -- Bonus for email consent (0-10 points)
  IF v_consent = TRUE THEN
    SET v_score = v_score + 10;
  END IF;
  
  -- Update lead score
  UPDATE buyer_leads 
  SET lead_score = v_score, updated_at = CURRENT_TIMESTAMP
  WHERE id = p_buyer_id;
END //
DELIMITER ;


-- Update lead score for creators based on portfolio and experience
DELIMITER //
CREATE PROCEDURE IF NOT EXISTS sp_calculate_creator_lead_score(IN p_creator_id BIGINT)
BEGIN
  DECLARE v_score INT DEFAULT 0;
  DECLARE v_experience VARCHAR(50);
  DECLARE v_content_count VARCHAR(50);
  DECLARE v_production VARCHAR(50);
  DECLARE v_platforms_count INT;
  DECLARE v_consent BOOLEAN;
  DECLARE v_rights BOOLEAN;
  
  -- Get creator data
  SELECT ai_experience, ready_content_count, monthly_production_capacity, 
         email_consent, content_rights_confirmed,
         JSON_LENGTH(platforms)
  INTO v_experience, v_content_count, v_production, v_consent, v_rights, v_platforms_count
  FROM creator_leads
  WHERE id = p_creator_id;
  
  -- Score based on experience (0-25 points)
  CASE v_experience
    WHEN '3plus_years' THEN SET v_score = v_score + 25;
    WHEN '1-2years' THEN SET v_score = v_score + 20;
    WHEN 'intermediate' THEN SET v_score = v_score + 12;
    ELSE SET v_score = v_score + 5;
  END CASE;
  
  -- Score based on ready content (0-25 points)
  CASE v_content_count
    WHEN '11+' THEN SET v_score = v_score + 25;
    WHEN '6-10' THEN SET v_score = v_score + 20;
    WHEN '2-5' THEN SET v_score = v_score + 10;
    ELSE SET v_score = v_score + 3;
  END CASE;
  
  -- Score based on production capacity (0-20 points)
  CASE v_production
    WHEN '7+' THEN SET v_score = v_score + 20;
    WHEN '4-6' THEN SET v_score = v_score + 15;
    WHEN '2-3' THEN SET v_score = v_score + 8;
    ELSE SET v_score = v_score + 2;
  END CASE;
  
  -- Score based on platform diversity (0-15 points)
  IF v_platforms_count >= 5 THEN SET v_score = v_score + 15;
  ELSEIF v_platforms_count >= 3 THEN SET v_score = v_score + 10;
  ELSEIF v_platforms_count >= 1 THEN SET v_score = v_score + 5;
  END IF;
  
  -- Bonus for consents (0-15 points)
  IF v_consent = TRUE THEN SET v_score = v_score + 7; END IF;
  IF v_rights = TRUE THEN SET v_score = v_score + 8; END IF;
  
  -- Update lead score
  UPDATE creator_leads 
  SET lead_score = v_score, updated_at = CURRENT_TIMESTAMP
  WHERE id = p_creator_id;
END //
DELIMITER ;


-- ============================================
-- TRIGGERS
-- Description: Automatic actions on data changes
-- ============================================

-- Auto-calculate buyer lead score on insert
DELIMITER //
CREATE TRIGGER IF NOT EXISTS trg_buyer_lead_score_insert
AFTER INSERT ON buyer_leads
FOR EACH ROW
BEGIN
  CALL sp_calculate_buyer_lead_score(NEW.id);
END //
DELIMITER ;

-- Auto-calculate buyer lead score on update
DELIMITER //
CREATE TRIGGER IF NOT EXISTS trg_buyer_lead_score_update
AFTER UPDATE ON buyer_leads
FOR EACH ROW
BEGIN
  IF NEW.monthly_budget != OLD.monthly_budget 
     OR NEW.role != OLD.role 
     OR NEW.use_case != OLD.use_case 
     OR NEW.ai_experience != OLD.ai_experience
     OR NEW.email_consent != OLD.email_consent THEN
    CALL sp_calculate_buyer_lead_score(NEW.id);
  END IF;
END //
DELIMITER ;

-- Auto-calculate creator lead score on insert
DELIMITER //
CREATE TRIGGER IF NOT EXISTS trg_creator_lead_score_insert
AFTER INSERT ON creator_leads
FOR EACH ROW
BEGIN
  CALL sp_calculate_creator_lead_score(NEW.id);
END //
DELIMITER ;

-- Auto-calculate creator lead score on update
DELIMITER //
CREATE TRIGGER IF NOT EXISTS trg_creator_lead_score_update
AFTER UPDATE ON creator_leads
FOR EACH ROW
BEGIN
  IF NEW.ai_experience != OLD.ai_experience 
     OR NEW.ready_content_count != OLD.ready_content_count 
     OR NEW.monthly_production_capacity != OLD.monthly_production_capacity
     OR NEW.platforms != OLD.platforms
     OR NEW.email_consent != OLD.email_consent
     OR NEW.content_rights_confirmed != OLD.content_rights_confirmed THEN
    CALL sp_calculate_creator_lead_score(NEW.id);
  END IF;
END //
DELIMITER ;


-- ============================================
-- INITIAL DATA / SEED DATA
-- ============================================

-- Insert test lead (optional - remove in production)
-- INSERT INTO buyer_leads (email, name, role, monthly_budget, use_case, ai_experience, source, terms_accepted, email_consent)
-- VALUES ('test@example.com', 'Test User', 'business_owner', '5000+', 'advertising', 'advanced', 'google', TRUE, TRUE);


-- ============================================
-- MAINTENANCE QUERIES
-- ============================================

-- Clean up old activity logs (run periodically)
-- DELETE FROM lead_activity_log WHERE created_at < DATE_SUB(NOW(), INTERVAL 90 DAY);

-- Find duplicate emails across tables
-- SELECT email, 'buyer' as type FROM buyer_leads WHERE email IN (SELECT email FROM creator_leads)
-- UNION
-- SELECT email, 'creator' as type FROM creator_leads WHERE email IN (SELECT email FROM buyer_leads);

-- Export high-value leads for CRM
-- SELECT * FROM v_high_value_buyers INTO OUTFILE '/tmp/high_value_buyers.csv'
-- FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';


-- ============================================
-- NOTES FOR DATABASE ADMINISTRATOR
-- ============================================
-- 1. Regular Backups: Schedule daily backups of all tables
-- 2. Index Optimization: Monitor slow query log and add indexes as needed
-- 3. Data Retention: Define policy for activity_log (recommend 90-180 days)
-- 4. GDPR Compliance: Implement data deletion procedures for user requests
-- 5. Monitoring: Set up alerts for unusual lead volumes or failed insertions
-- 6. Scaling: Consider partitioning lead tables by created_at for large volumes
-- 7. Security: Ensure proper user permissions and encrypted connections
-- ============================================

-- End of schema
