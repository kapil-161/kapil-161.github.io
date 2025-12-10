# Newsletter Subscription Setup Instructions

The newsletter subscription form is now functional! You need to configure it with one of the following services:

## Option 1: Formspree (Recommended - Easiest)

1. Go to https://formspree.io/ and sign up for a free account
2. Create a new form
3. Copy your form endpoint URL (it will look like: `https://formspree.io/f/xxxxxxxxxx`)
4. Open `index.html` and find line 984
5. Replace `YOUR_FORMSPREE_ENDPOINT` with your actual endpoint ID
   - Example: `https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT` becomes `https://formspree.io/f/abc123xyz`

**Free tier:** 50 submissions per month

## Option 2: EmailJS

1. Go to https://www.emailjs.com/ and sign up for a free account
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Open `index.html` and:
   - Add EmailJS script before the newsletter script: `<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>`
   - Initialize: `emailjs.init('YOUR_PUBLIC_KEY');`
   - Uncomment the EmailJS code block (lines 967-979)
   - Replace `YOUR_SERVICE_ID` and `YOUR_TEMPLATE_ID` with your actual IDs
   - Comment out or remove the Formspree code block (lines 981-1007)

**Free tier:** 200 emails per month

## Testing

After configuration:
1. Save the file
2. Test the form on your website
3. Check your email/Formspree dashboard for the subscription

## Current Status

The form is currently set up to use **Formspree** by default. You just need to replace `YOUR_FORMSPREE_ENDPOINT` with your actual endpoint URL.

