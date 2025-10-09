-- ============================================
-- AI-PEOPLE TEST DATA SEED
-- ============================================
-- Purpose: Populate database with realistic test data for development and testing
-- WARNING: Only use in development/staging environments!
-- DO NOT run this in production!
-- ============================================

USE aipeople_prelaunch;

-- ============================================
-- CLEAR EXISTING TEST DATA (optional)
-- ============================================
-- Uncomment to clear all data before seeding
-- TRUNCATE TABLE lead_activity_log;
-- TRUNCATE TABLE buyer_leads;
-- TRUNCATE TABLE creator_leads;
-- TRUNCATE TABLE email_campaigns;

-- ============================================
-- SEED BUYER LEADS
-- ============================================

-- High-value buyers (business owners, high budget)
INSERT INTO buyer_leads (email, name, role, company, team_size, use_case, monthly_budget, ai_experience, source, email_consent, terms_accepted, ip_address) VALUES
('john.smith@techcorp.com', 'John Smith', 'business_owner', 'TechCorp Inc', '51-200', 'advertising', '5000+', 'advanced', 'google', TRUE, TRUE, '192.168.1.10'),
('sarah.johnson@marketingpro.com', 'Sarah Johnson', 'agency', 'Marketing Pro Agency', '11-50', 'branding', '1000-5000', 'intermediate', 'social_media', TRUE, TRUE, '192.168.1.11'),
('michael.chen@startup.io', 'Michael Chen', 'startup', 'StartupXYZ', '1-10', 'social_media', '1000-5000', 'beginner', 'friend', TRUE, TRUE, '192.168.1.12'),
('emma.davis@ecommerce.com', 'Emma Davis', 'business_owner', 'E-commerce Solutions', '11-50', 'ecommerce', '5000+', 'intermediate', 'google', TRUE, TRUE, '192.168.1.13'),
('david.wilson@creativestudio.com', 'David Wilson', 'agency', 'Creative Studio', '11-50', 'branding', '1000-5000', 'advanced', 'blog', TRUE, TRUE, '192.168.1.14');

-- Medium-value buyers (marketers, medium budget)
INSERT INTO buyer_leads (email, name, role, company, team_size, use_case, monthly_budget, ai_experience, source, email_consent, terms_accepted, ip_address) VALUES
('lisa.anderson@digitalmarketing.com', 'Lisa Anderson', 'marketer', 'Digital Marketing Co', '11-50', 'social_media', '500-1000', 'intermediate', 'social_media', TRUE, TRUE, '192.168.1.20'),
('james.brown@adagency.com', 'James Brown', 'marketer', 'Ad Agency Plus', '11-50', 'advertising', '500-1000', 'beginner', 'google', TRUE, TRUE, '192.168.1.21'),
('olivia.taylor@brandhouse.com', 'Olivia Taylor', 'marketer', 'Brand House', '1-10', 'branding', '500-1000', 'intermediate', 'friend', FALSE, TRUE, '192.168.1.22'),
('robert.martinez@socialmedia.com', 'Robert Martinez', 'freelancer', NULL, '1-10', 'social_media', '100-500', 'beginner', 'social_media', TRUE, TRUE, '192.168.1.23'),
('sophia.garcia@contentcreation.com', 'Sophia Garcia', 'freelancer', NULL, '1-10', 'social_media', '500-1000', 'intermediate', 'blog', TRUE, TRUE, '192.168.1.24');

-- Low-value buyers (exploring, low budget)
INSERT INTO buyer_leads (email, name, role, company, team_size, use_case, monthly_budget, ai_experience, source, email_consent, terms_accepted, ip_address) VALUES
('william.rodriguez@smallbiz.com', 'William Rodriguez', 'business_owner', 'Small Business LLC', '1-10', 'social_media', '100-500', 'never_used', 'google', FALSE, TRUE, '192.168.1.30'),
('ava.hernandez@freelance.com', 'Ava Hernandez', 'freelancer', NULL, '1-10', 'other', '0-100', 'beginner', 'friend', TRUE, TRUE, '192.168.1.31'),
('noah.lopez@startup.com', 'Noah Lopez', 'startup', 'Tiny Startup', '1-10', 'advertising', '100-500', 'beginner', 'social_media', TRUE, TRUE, '192.168.1.32'),
('isabella.gonzalez@marketing.com', 'Isabella Gonzalez', 'marketer', 'Local Marketing', '1-10', 'branding', '100-500', 'never_used', 'other', FALSE, TRUE, '192.168.1.33'),
('ethan.perez@agency.com', 'Ethan Perez', 'agency', 'Micro Agency', '1-10', 'social_media', '0-100', 'beginner', 'blog', TRUE, TRUE, '192.168.1.34');

-- ============================================
-- SEED CREATOR LEADS
-- ============================================

-- High-quality creators (experienced, ready content)
INSERT INTO creator_leads (email, name, username, ai_experience, specialization, platforms, expected_monthly_income, ready_content_count, monthly_production_capacity, source, email_consent, terms_accepted, content_rights_confirmed, ip_address) VALUES
('alex.photo@gmail.com', 'Alex Thompson', 'alex_photo_ai', '3plus_years', 'photo', '["midjourney", "stable_diffusion", "leonardo_ai", "flux", "magnific_ai"]', '5000+', '11+', '7+', 'google', TRUE, TRUE, TRUE, '192.168.2.10'),
('maria.art@gmail.com', 'Maria Rodriguez', 'maria_hyperreal', '1-2years', 'photo', '["midjourney", "leonardo_ai", "seaart", "ideogram"]', '3000-5000', '11+', '4-6', 'social_media', TRUE, TRUE, TRUE, '192.168.2.11'),
('tom.video@gmail.com', 'Tom Anderson', 'tom_ai_video', '1-2years', 'video', '["stable_diffusion", "midjourney", "leonardo_ai"]', '3000-5000', '6-10', '7+', 'friend', TRUE, TRUE, TRUE, '192.168.2.12'),
('kate.3d@gmail.com', 'Kate Wilson', 'kate_3d_art', '3plus_years', '3d', '["stable_diffusion", "midjourney", "dall_e", "leonardo_ai", "krea_ai"]', '5000+', '11+', '4-6', 'google', TRUE, TRUE, TRUE, '192.168.2.13'),
('lucas.mixed@gmail.com', 'Lucas Martinez', 'lucas_creative', '1-2years', 'mixed', '["midjourney", "stable_diffusion", "flux", "seaart"]', '3000-5000', '6-10', '4-6', 'blog', TRUE, TRUE, TRUE, '192.168.2.14');

-- Medium-quality creators (some experience, building portfolio)
INSERT INTO creator_leads (email, name, username, ai_experience, specialization, platforms, expected_monthly_income, ready_content_count, monthly_production_capacity, source, email_consent, terms_accepted, content_rights_confirmed, ip_address) VALUES
('anna.creator@gmail.com', 'Anna Davis', 'anna_ai_photos', 'intermediate', 'photo', '["midjourney", "leonardo_ai", "seaart"]', '1000-3000', '2-5', '2-3', 'social_media', TRUE, TRUE, TRUE, '192.168.2.20'),
('chris.digital@gmail.com', 'Chris Brown', 'chris_digital_art', 'intermediate', 'photo', '["stable_diffusion", "midjourney"]', '1000-3000', '6-10', '2-3', 'google', TRUE, TRUE, TRUE, '192.168.2.21'),
('emily.ai@gmail.com', 'Emily Taylor', 'emily_ai_creator', '1-2years', 'video', '["midjourney", "leonardo_ai", "flux"]', '1000-3000', '2-5', '4-6', 'friend', FALSE, TRUE, TRUE, '192.168.2.22'),
('ryan.art@gmail.com', 'Ryan Garcia', 'ryan_ai_art', 'intermediate', 'mixed', '["midjourney", "stable_diffusion"]', '500-1000', '2-5', '2-3', 'social_media', TRUE, TRUE, TRUE, '192.168.2.23'),
('sophie.photo@gmail.com', 'Sophie Hernandez', 'sophie_photos', '1-2years', '3d', '["leonardo_ai", "midjourney", "krea_ai"]', '1000-3000', '6-10', '2-3', 'blog', TRUE, TRUE, TRUE, '192.168.2.24');

-- Beginner creators (learning, small portfolio)
INSERT INTO creator_leads (email, name, username, ai_experience, specialization, platforms, expected_monthly_income, ready_content_count, monthly_production_capacity, source, email_consent, terms_accepted, content_rights_confirmed, ip_address) VALUES
('jack.beginner@gmail.com', 'Jack Lopez', 'jack_ai_new', 'beginner', 'photo', '["midjourney", "leonardo_ai"]', '500-1000', '0-1', '2-3', 'google', TRUE, TRUE, TRUE, '192.168.2.30'),
('mia.newbie@gmail.com', 'Mia Gonzalez', 'mia_ai_start', 'beginner', 'photo', '["stable_diffusion"]', '0-500', '0-1', '0-1', 'friend', FALSE, TRUE, TRUE, '192.168.2.31'),
('oliver.learning@gmail.com', 'Oliver Perez', 'oliver_learning', 'beginner', 'other', '["midjourney"]', '500-1000', '2-5', '0-1', 'social_media', TRUE, TRUE, FALSE, '192.168.2.32'),
('ava.starter@gmail.com', 'Ava Wilson', 'ava_starter', 'intermediate', 'photo', '["leonardo_ai", "seaart"]', '500-1000', '2-5', '2-3', 'other', TRUE, TRUE, TRUE, '192.168.2.33'),
('noah.junior@gmail.com', 'Noah Davis', 'noah_junior', 'beginner', 'mixed', '["midjourney", "flux"]', '0-500', '0-1', '0-1', 'blog', TRUE, TRUE, TRUE, '192.168.2.34');

-- ============================================
-- SEED ACTIVITY LOG
-- ============================================

-- Buyer activities
INSERT INTO lead_activity_log (lead_type, lead_id, activity_type, activity_category, activity_data, page_url, session_id, device_type, created_at) VALUES
('buyer', 1, 'form_submitted', 'conversion', '{"form_type": "buyer_registration", "completion_time_seconds": 120}', 'https://ai-people.com/auth/buyer', 'sess_buyer_001', 'desktop', DATE_SUB(NOW(), INTERVAL 5 DAY)),
('buyer', 1, 'page_viewed', 'engagement', '{"page": "pricing"}', 'https://ai-people.com/pricing', 'sess_buyer_001', 'desktop', DATE_SUB(NOW(), INTERVAL 4 DAY)),
('buyer', 2, 'form_submitted', 'conversion', '{"form_type": "buyer_registration", "completion_time_seconds": 95}', 'https://ai-people.com/auth/buyer', 'sess_buyer_002', 'mobile', DATE_SUB(NOW(), INTERVAL 3 DAY)),
('buyer', 3, 'form_submitted', 'conversion', '{"form_type": "buyer_registration", "completion_time_seconds": 180}', 'https://ai-people.com/auth/buyer', 'sess_buyer_003', 'desktop', DATE_SUB(NOW(), INTERVAL 2 DAY)),
('buyer', 4, 'form_submitted', 'conversion', '{"form_type": "buyer_registration", "completion_time_seconds": 110}', 'https://ai-people.com/auth/buyer', 'sess_buyer_004', 'tablet', DATE_SUB(NOW(), INTERVAL 1 DAY));

-- Creator activities
INSERT INTO lead_activity_log (lead_type, lead_id, activity_type, activity_category, activity_data, page_url, session_id, device_type, created_at) VALUES
('creator', 1, 'form_submitted', 'conversion', '{"form_type": "creator_registration", "completion_time_seconds": 150}', 'https://ai-people.com/auth/creator', 'sess_creator_001', 'desktop', DATE_SUB(NOW(), INTERVAL 5 DAY)),
('creator', 1, 'page_viewed', 'engagement', '{"page": "blog"}', 'https://ai-people.com/blog', 'sess_creator_001', 'desktop', DATE_SUB(NOW(), INTERVAL 4 DAY)),
('creator', 2, 'form_submitted', 'conversion', '{"form_type": "creator_registration", "completion_time_seconds": 135}', 'https://ai-people.com/auth/creator', 'sess_creator_002', 'desktop', DATE_SUB(NOW(), INTERVAL 3 DAY)),
('creator', 3, 'form_submitted', 'conversion', '{"form_type": "creator_registration", "completion_time_seconds": 200}', 'https://ai-people.com/auth/creator', 'sess_creator_003', 'mobile', DATE_SUB(NOW(), INTERVAL 2 DAY)),
('creator', 4, 'form_submitted', 'conversion', '{"form_type": "creator_registration", "completion_time_seconds": 160}', 'https://ai-people.com/auth/creator', 'sess_creator_004', 'desktop', DATE_SUB(NOW(), INTERVAL 1 DAY));

-- ============================================
-- SEED EMAIL CAMPAIGNS
-- ============================================

INSERT INTO email_campaigns (campaign_name, campaign_type, target_audience, subject_line, sender_name, sender_email, status, total_sent, total_delivered, total_opened, total_clicked, scheduled_at, sent_at, created_at) VALUES
('Welcome Buyers', 'welcome', 'buyers', 'Welcome to AI-People - Your Gateway to Premium AI Content', 'AI-People Team', 'team@ai-people.com', 'sent', 15, 15, 12, 5, DATE_SUB(NOW(), INTERVAL 4 DAY), DATE_SUB(NOW(), INTERVAL 4 DAY), DATE_SUB(NOW(), INTERVAL 5 DAY)),
('Welcome Creators', 'welcome', 'creators', 'Welcome to AI-People - Start Monetizing Your AI Art Today', 'AI-People Team', 'team@ai-people.com', 'sent', 15, 14, 11, 7, DATE_SUB(NOW(), INTERVAL 3 DAY), DATE_SUB(NOW(), INTERVAL 3 DAY), DATE_SUB(NOW(), INTERVAL 4 DAY)),
('Launch Announcement', 'launch_announcement', 'both', 'AI-People is Launching November 1st - Get Early Access!', 'AI-People Team', 'team@ai-people.com', 'scheduled', 0, 0, 0, 0, DATE_ADD(NOW(), INTERVAL 7 DAY), NULL, NOW()),
('Nurture Campaign Week 1', 'nurture', 'creators', 'Tips to Create Your Perfect AI Portfolio', 'AI-People Team', 'team@ai-people.com', 'draft', 0, 0, 0, 0, NULL, NULL, NOW());

-- ============================================
-- UPDATE SOME LEAD STATUSES (simulate progress)
-- ============================================

-- Mark some buyers as contacted/qualified
UPDATE buyer_leads SET lead_status = 'contacted', contacted_at = DATE_SUB(NOW(), INTERVAL 3 DAY) WHERE id IN (1, 2, 3);
UPDATE buyer_leads SET lead_status = 'qualified', contacted_at = DATE_SUB(NOW(), INTERVAL 2 DAY) WHERE id = 1;
UPDATE buyer_leads SET priority = 'high' WHERE id IN (1, 2, 4);
UPDATE buyer_leads SET priority = 'urgent' WHERE id = 1;

-- Mark some creators as contacted/in review
UPDATE creator_leads SET lead_status = 'contacted', contacted_at = DATE_SUB(NOW(), INTERVAL 3 DAY) WHERE id IN (1, 2, 3, 4);
UPDATE creator_leads SET lead_status = 'portfolio_review', portfolio_quality = 'excellent' WHERE id IN (1, 4);
UPDATE creator_leads SET lead_status = 'portfolio_review', portfolio_quality = 'good' WHERE id IN (2, 3);
UPDATE creator_leads SET priority = 'high' WHERE id IN (1, 2, 3, 4, 5);
UPDATE creator_leads SET priority = 'urgent', early_access_granted = TRUE WHERE id IN (1, 4);

-- Add some notes
UPDATE buyer_leads SET notes = 'High-value prospect, interested in bulk purchases for advertising campaigns' WHERE id = 1;
UPDATE buyer_leads SET notes = 'Agency looking for diverse portfolio of AI models for client work' WHERE id = 2;
UPDATE creator_leads SET notes = 'Excellent portfolio quality, 3+ years experience, ready to onboard immediately' WHERE id = 1;
UPDATE creator_leads SET notes = 'Strong photo specialization, hyperrealistic style, good production capacity' WHERE id = 2;

-- Add tags
UPDATE buyer_leads SET tags = '["high_budget", "advertising", "enterprise"]' WHERE id = 1;
UPDATE buyer_leads SET tags = '["agency", "recurring_customer", "branding"]' WHERE id = 2;
UPDATE creator_leads SET tags = '["top_creator", "experienced", "high_volume"]' WHERE id = 1;
UPDATE creator_leads SET tags = '["photo_specialist", "hyperrealistic", "ready_portfolio"]' WHERE id = 2;

-- ============================================
-- VERIFY DATA
-- ============================================

-- Check inserted counts
SELECT 'buyer_leads' as table_name, COUNT(*) as record_count FROM buyer_leads
UNION ALL
SELECT 'creator_leads' as table_name, COUNT(*) as record_count FROM creator_leads
UNION ALL
SELECT 'lead_activity_log' as table_name, COUNT(*) as record_count FROM lead_activity_log
UNION ALL
SELECT 'email_campaigns' as table_name, COUNT(*) as record_count FROM email_campaigns;

-- Show lead score distribution for buyers
SELECT 
  CASE 
    WHEN lead_score >= 80 THEN 'Hot (80-100)'
    WHEN lead_score >= 60 THEN 'Warm (60-79)'
    WHEN lead_score >= 40 THEN 'Medium (40-59)'
    ELSE 'Cold (0-39)'
  END as score_category,
  COUNT(*) as count,
  ROUND(AVG(lead_score), 2) as avg_score
FROM buyer_leads
GROUP BY score_category
ORDER BY avg_score DESC;

-- Show lead score distribution for creators
SELECT 
  CASE 
    WHEN lead_score >= 80 THEN 'Hot (80-100)'
    WHEN lead_score >= 60 THEN 'Warm (60-79)'
    WHEN lead_score >= 40 THEN 'Medium (40-59)'
    ELSE 'Cold (0-39)'
  END as score_category,
  COUNT(*) as count,
  ROUND(AVG(lead_score), 2) as avg_score
FROM creator_leads
GROUP BY score_category
ORDER BY avg_score DESC;

-- ============================================
-- TEST DATA SEED COMPLETE
-- ============================================

SELECT 'Test data seed completed successfully!' as status;
SELECT 'Run: SELECT * FROM v_daily_lead_stats; to view statistics' as next_step;

