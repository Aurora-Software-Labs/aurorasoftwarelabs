# Email Setup Guide for Aurora Software Labs

## 📧 Nodemailer Integration Complete!

Your Aurora Software Labs website now has fully functional contact and career application forms powered by Nodemailer.

## 🚀 What's Been Implemented

### Contact Forms

- **Contact Page Form** (`/contact`) - General inquiries, project discussions
- **Career Application Form** (`/careers`) - Job applications with detailed fields
- **API Endpoint** (`/api/contact`) - Handles both form types with proper validation

### Email Features

- ✅ **Professional HTML emails** with Aurora branding
- ✅ **Auto-reply emails** to users confirming their submission
- ✅ **Form validation** (required fields, email format)
- ✅ **Error handling** with user-friendly messages
- ✅ **Success notifications** with form reset
- ✅ **Responsive email templates** that look great on all devices

## 🔧 Setup Instructions

### 1. Gmail Configuration (Recommended for Development)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password:**

   - Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and generate a password
   - Copy the 16-character password

3. **Update .env.local file:**
   ```env
   EMAIL_USER=aurorasoftwarelabs@gmail.com
   EMAIL_PASS=your-16-character-app-password
   COMPANY_EMAIL=aurorasoftwarelabs@gmail.com
   ```

### 2. Alternative Email Providers (Production Ready)

#### SendGrid (Recommended for Production)

```bash
npm install @sendgrid/mail
```

#### AWS SES

```bash
npm install aws-sdk
```

#### Mailgun

```bash
npm install mailgun-js
```

## 🎨 Email Templates

Both emails include:

- **Aurora Software Labs branding** with gradient headers
- **Professional styling** with your brand colors (#123524, #2ecc71)
- **Mobile-responsive design**
- **Clear call-to-actions**
- **Contact information**

### Contact Form Email

- Company receives: Contact details, message, timestamp
- User receives: Thank you message, next steps, company info

### Career Application Email

- Company receives: Full application details, portfolio links
- User receives: Application confirmation, hiring process timeline

## 🛡️ Security Features

- **Input validation** (required fields, email format)
- **Rate limiting** ready (can be added)
- **Error handling** without exposing sensitive data
- **Environment variables** for credentials

## 🧪 Testing

### Local Testing

1. Update `.env.local` with your Gmail credentials
2. Start development server: `npm run dev`
3. Test contact form at: `http://localhost:3000/contact`
4. Test career form at: `http://localhost:3000/careers`

### Production Testing

- Test with real email addresses
- Verify auto-replies are received
- Check spam folders initially
- Test form validation errors

## 📈 Next Steps (Optional Enhancements)

### 1. File Upload for Resumes

```bash
npm install multer @types/multer
# Add file upload to career form
```

### 2. Database Integration

```bash
npm install prisma @prisma/client
# Store form submissions in database
```

### 3. Email Analytics

- Track email opens
- Monitor form conversion rates
- A/B testing different templates

### 4. Anti-Spam Protection

```bash
npm install express-rate-limit
# Add rate limiting to API routes
```

## 🚨 Troubleshooting

### Common Issues

1. **"Invalid credentials"** - Check Gmail app password
2. **"Network error"** - Verify internet connection, firewall settings
3. **Emails in spam** - Add sending domain to contacts, use authenticated domain
4. **Form not submitting** - Check browser console for errors

### Gmail Limits

- **500 emails/day** for free Gmail accounts
- **2000 emails/day** for Google Workspace accounts
- Consider upgrading for high volume

## 📞 Support

If you encounter any issues:

1. Check the browser console for errors
2. Verify environment variables are set correctly
3. Test with a simple email first
4. Check Gmail "Less secure apps" settings (if applicable)

---

**Your Aurora Software Labs website now has professional email functionality! 🎉**

The contact and career forms will help you capture leads and find great talent for your growing software agency.
