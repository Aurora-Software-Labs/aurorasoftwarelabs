# Production Deployment Guide - Aurora Software Labs

## Email Configuration for Production

The application now supports both development (Gmail) and production SMTP configurations.

### Environment Variables Setup

1. **Copy the environment file:**

   ```bash
   cp .env.example .env.local
   ```

2. **For Production SMTP (Recommended):**

   ```bash
   # Production SMTP Configuration
   SMTP_HOST=your-smtp-host.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@domain.com
   SMTP_PASS=your-smtp-password
   COMPANY_EMAIL=aurorasoftwarelabs@gmail.com
   ```

3. **For Gmail Development (Fallback):**
   ```bash
   # Gmail Configuration
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-app-password
   COMPANY_EMAIL=aurorasoftwarelabs@gmail.com
   ```

### Recommended Production Email Services

#### 1. SendGrid (Most Popular)

- **Website:** https://sendgrid.com/
- **Free Tier:** 100 emails/day
- **Configuration:**
  ```bash
  SMTP_HOST=smtp.sendgrid.net
  SMTP_PORT=587
  SMTP_SECURE=false
  SMTP_USER=apikey
  SMTP_PASS=your-sendgrid-api-key
  ```

#### 2. AWS SES (Cost-Effective)

- **Website:** https://aws.amazon.com/ses/
- **Free Tier:** 62,000 emails/month
- **Configuration:**
  ```bash
  SMTP_HOST=email-smtp.us-east-1.amazonaws.com
  SMTP_PORT=587
  SMTP_SECURE=false
  SMTP_USER=your-aws-access-key-id
  SMTP_PASS=your-aws-secret-access-key
  ```

#### 3. Resend (Developer-Friendly)

- **Website:** https://resend.com/
- **Free Tier:** 3,000 emails/month
- **Configuration:**
  ```bash
  SMTP_HOST=smtp.resend.com
  SMTP_PORT=587
  SMTP_SECURE=false
  SMTP_USER=resend
  SMTP_PASS=your-resend-api-key
  ```

### Features Enabled

✅ **Production SMTP Support** - Automatic fallback from production to development config
✅ **File Uploads** - Resume and cover letter support for career applications  
✅ **Mobile-Responsive Emails** - Professional templates that work on all devices
✅ **Rate Limiting** - Built-in protection against spam (3 emails per 20 seconds)
✅ **Connection Pooling** - Optimized email delivery performance
✅ **File Validation** - Size limits (5MB) and type restrictions (PDF, DOC, DOCX, TXT)
✅ **Professional Templates** - Aurora-branded emails with gradients and logos

### Deployment Steps

1. **Set up your chosen email service** (SendGrid, AWS SES, etc.)
2. **Configure environment variables** in your hosting platform
3. **Test email functionality** with a small test deployment
4. **Monitor email delivery** and adjust rate limits if needed

### Monitoring & Maintenance

- **Check email logs** regularly for delivery issues
- **Monitor rate limits** to ensure emails aren't being blocked
- **Update email templates** as needed for branding changes
- **Keep SMTP credentials secure** and rotate them periodically

### Troubleshooting

- **Email not sending:** Check SMTP credentials and host settings
- **Files not attaching:** Verify file size limits and allowed types
- **Mobile display issues:** Test email templates on various devices
- **Rate limiting:** Adjust `rateLimit` and `rateDelta` in the API route if needed
