import { NextRequest, NextResponse } from 'next/server';

// Force static export compatibility
export const dynamic = 'force-static';
export const revalidate = false;

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

// Simple rate limiting: max 3 submissions per IP per hour
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitStore.get(ip);
  
  if (!limit || now > limit.resetAt) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + 60 * 60 * 1000 // 1 hour
    });
    return true;
  }
  
  if (limit.count >= 3) {
    return false;
  }
  
  limit.count++;
  return true;
}

// Email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Sanitize input
function sanitize(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

export async function POST(request: NextRequest) {
  try {
    // Get IP address for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }
    
    // Parse request body
    const body = await request.json();
    
    // Validate required fields
    if (!body.email || !body.name) {
      return NextResponse.json(
        { error: 'Email and name are required' },
        { status: 400 }
      );
    }
    
    // Validate email format
    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Sanitize inputs
    const leadData = {
      email: sanitize(body.email),
      name: sanitize(body.name),
      role: body.role ? sanitize(body.role) : null,
      company: body.company ? sanitize(body.company) : null,
      team_size: body.teamSize || null,
      use_case: body.useCase || null,
      monthly_budget: body.monthlyBudget || null,
      ai_experience: body.aiExperience || null,
      source: body.source ? sanitize(body.source) : null,
      email_consent: body.emailConsent || false,
      terms_accepted: body.termsAccepted || false,
      ip_address: ip,
      user_agent: request.headers.get('user-agent') || null,
      referrer: request.headers.get('referer') || null,
      utm_source: body.utmSource || null,
      utm_medium: body.utmMedium || null,
      utm_campaign: body.utmCampaign || null,
    };
    
    // TODO: Save to database
    // For now, log to console (in production, save to MySQL)
    console.log('New buyer lead:', leadData);
    
    // TODO: Send confirmation email
    // TODO: Trigger analytics event
    
    // In production, you would:
    // 1. Insert into database using mysql2 or similar
    // 2. Send confirmation email via SendGrid/Mailgun
    // 3. Track analytics event
    
    /* Example database code:
    import mysql from 'mysql2/promise';
    
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    
    await connection.execute(
      `INSERT INTO buyer_leads (
        email, name, role, company, team_size, use_case, 
        monthly_budget, ai_experience, source, email_consent, 
        terms_accepted, ip_address, user_agent, referrer,
        utm_source, utm_medium, utm_campaign
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        leadData.email, leadData.name, leadData.role, leadData.company,
        leadData.team_size, leadData.use_case, leadData.monthly_budget,
        leadData.ai_experience, leadData.source, leadData.email_consent,
        leadData.terms_accepted, leadData.ip_address, leadData.user_agent,
        leadData.referrer, leadData.utm_source, leadData.utm_medium,
        leadData.utm_campaign
      ]
    );
    
    await connection.end();
    */
    
    return NextResponse.json({
      success: true,
      message: 'Lead registered successfully',
      data: {
        email: leadData.email,
        name: leadData.name
      }
    });
    
  } catch (error) {
    console.error('Error processing buyer lead:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Prevent GET requests
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
