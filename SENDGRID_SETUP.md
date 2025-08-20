# SendGrid Setup Guide - Aurora Software Labs

## 🚀 Quick Setup (5 minutes)

### Step 1: Create SendGrid Account

1. Visit [SendGrid.com](https://sendgrid.com) and sign up for a free account
2. **Free Tier:** 100 emails/day forever (perfect for contact forms)
3. Verify your email address

### Step 2: Create API Key

1. Go to **Settings** → **API Keys** in SendGrid dashboard
2. Click **Create API Key**
3. Choose **Restricted Access**
4. Give it a name like "Aurora Website API Key"
5. Under **Mail Send**, select **Full Access**
6. Click **Create & View**
7. **IMPORTANT:** Copy your API key immediately (you won't see it again!)

### Step 3: Configure Domain Authentication (Recommended)

1. Go to **Settings** → **Sender Authentication**
2. Click **Authenticate Your Domain**
3. Enter your domain: `aurorasoftwarelabs.com`
4. Add the DNS records to your domain provider
5. Wait for verification (can take up to 48 hours)

### Step 4: Set Environment Variables

Add these to your `.env.local` file:

```bash
# SendGrid Configuration
SENDGRID_API_KEY=SG.your-actual-api-key-here
SENDGRID_FROM_EMAIL=noreply@aurorasoftwarelabs.com
COMPANY_EMAIL=aurorasoftwarelabs@gmail.com
```

### Step 5: Test Your Setup

1. Deploy your application or run locally
2. Test the contact form
3. Check SendGrid **Activity** → **Email Activity** for delivery status

## ✅ What's Already Configured

Your Aurora Software Labs application is already set up with:

- **Smart Email Routing:** SendGrid → SMTP → Gmail fallback
- **Professional Templates:** Mobile-responsive with Aurora branding
- **File Attachments:** Resume and cover letter support for career applications
- **Rate Limiting:** Built-in spam protection
- **Error Handling:** Graceful fallbacks if SendGrid is unavailable

## 📊 SendGrid Dashboard Features

### Monitor Email Performance

- **Activity Feed:** See all sent emails in real-time
- **Statistics:** Track opens, clicks, bounces, and spam reports
- **Suppression Management:** Handle unsubscribes and bounces automatically
- **Webhook Integration:** Get delivery notifications (optional)

### Email Reputation

- **Domain Authentication:** Improves deliverability rates
- **IP Warming:** SendGrid handles this automatically on free tier
- **Compliance:** Built-in CAN-SPAM and GDPR compliance features

## 🔧 Advanced Configuration (Optional)

### Custom Templates

You can create SendGrid templates for consistent branding:

1. Go to **Email API** → **Dynamic Templates**
2. Create a new template with Aurora branding
3. Update the API route to use template IDs

### Webhooks for Analytics

Track email events by setting up webhooks:

1. Go to **Settings** → **Webhooks**
2. Add your webhook URL: `https://yoursite.com/api/sendgrid-webhook`
3. Select events to track (delivered, opened, clicked, etc.)

### Marketing Features (Paid Plans)

- **Marketing Campaigns:** Send newsletters and promotions
- **Contact Management:** Organize email lists
- **A/B Testing:** Optimize email performance

## 🚨 Important Security Notes

### API Key Security

- **Never commit API keys to version control**
- **Use environment variables only**
- **Rotate keys periodically** (every 90 days recommended)
- **Use restricted access** (only Mail Send permissions)

### Domain Reputation

- **Always use your own domain** for sending emails
- **Don't use shared domains** for business email
- **Monitor bounce rates** (keep below 5%)
- **Handle unsubscribes properly**

## 📈 Scaling Considerations

### Free Tier Limits

- **100 emails/day** (3,000/month)
- Perfect for contact forms and career applications
- No time limit on free tier

### Paid Plans (If Needed)

- **Essentials:** $14.95/month for 50,000 emails
- **Pro:** $89.95/month for 100,000 emails + advanced features
- **Enterprise:** Custom pricing for high-volume needs

### Usage Monitoring

Monitor your email volume in SendGrid dashboard:

- Set up **usage alerts** at 80% of your limit
- Plan upgrades before hitting limits
- Consider email optimization for high-traffic sites

## 🔍 Troubleshooting

### Common Issues

**API Key Not Working:**

- Check if key has correct permissions (Mail Send → Full Access)
- Ensure no extra spaces in environment variable
- Verify API key is not expired

**Emails Not Delivering:**

- Check Activity Feed for bounce/spam reports
- Verify recipient email addresses are valid
- Ensure domain authentication is complete

**Attachments Not Working:**

- File size limits: 5MB per file
- Supported formats: PDF, DOC, DOCX, TXT
- Check browser developer console for upload errors

**Rate Limiting:**

- Free tier: No rate limits for API
- Application has built-in 3 emails per 20 seconds protection
- Contact SendGrid support if hitting unexpected limits

## 📞 Support Resources

- **SendGrid Documentation:** https://docs.sendgrid.com/
- **API Reference:** https://docs.sendgrid.com/api-reference/
- **Community Forum:** https://community.sendgrid.com/
- **Support Tickets:** Available on paid plans
- **Status Page:** https://status.sendgrid.com/

---

**Ready to send professional emails!** 🎉

Your Aurora Software Labs application is now configured with enterprise-grade email delivery through SendGrid, with smart fallbacks to ensure emails always get delivered.
