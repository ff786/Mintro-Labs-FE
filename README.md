# Mintro Labs FE

Mintro Labs FE is a premium digital agency website built to showcase Mintro Labs' branding, web development, UI/UX, software, AI automation, and social media services in a polished, conversion-focused experience.

## Overview

This project presents Mintro Labs as a modern digital partner for ambitious businesses. The site combines strong visual storytelling with practical lead-generation features so visitors can explore services, review work, and book a consultation with ease.

## Key features

- Premium landing page with animated hero section
- About, mission, vision, services, portfolio, process, testimonials, and CTA sections
- Dedicated pricing page with starting prices for core services
- Responsive navigation with mobile menu and services dropdown
- Calendly booking modal for consultation scheduling
- WhatsApp consultation modal with pre-filled project details
- Floating WhatsApp chat button for instant contact
- Newsletter signup form powered by a Next.js API route and Resend
- Motion effects and reveal animations using Framer Motion

## Service areas

- Brand Identity & Logo Design
- Website Development
- UI/UX Design
- AI Automation
- Software Development
- Social Media Management

## Tech stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- React Icons

## Project structure

```text
src/
  app/
    api/newsletter/route.ts
    page.tsx
    pricing/page.tsx
    layout.tsx
  components/
    About.tsx
    CTA.tsx
    Footer.tsx
    Hero.tsx
    Navbar.tsx
    Portfolio.tsx
    Process.tsx
    Services.tsx
    ServicesShowcase.tsx
    Testimonials.tsx
    VisionMission.tsx
    WhyChooseUs.tsx
    WhatsAppChatButton.tsx
  data/
    contactInfo.ts
    servicesData.ts
```

## Pages

### Home

The home page is a full agency showcase with:

- Hero section
- Company story and stats
- Mission and vision
- Service cards and showcase
- Portfolio gallery
- Delivery process
- Testimonials
- Final call to action

### Pricing

The pricing page lists starting prices for each core service and includes a Calendly booking flow for quick quote requests.

## Contact and lead capture

- **WhatsApp:** instant chat and consultation flow
- **Calendly:** embedded scheduling for discovery calls
- **Newsletter:** footer subscription form that sends requests through `/api/newsletter`

## Environment variables

For newsletter delivery, configure:

```bash
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=your_verified_sender_email
```

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Start production

```bash
npm run start
```

## Brand links

- Website: https://mintrolabs.com
- Instagram: https://www.instagram.com/mintrolabs/
- LinkedIn: https://www.linkedin.com/company/mintrolabs/

## Notes

The project is designed as a premium portfolio and conversion site for Mintro Labs, with strong visual identity, clear service positioning, and multiple contact paths for prospective clients.
