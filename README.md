# Agam Jain - Premium Portfolio

Modern portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- next-themes (dark/light toggle)

## Run Locally
1. Install dependencies:
   `npm install`
2. Start development server:
   `npm run dev`
3. Open `http://localhost:3000`

## Production
- Build: `npm run build`
- Start: `npm run start`

## File Structure
```text
src/
  app/
    blog/page.tsx        # Blog-ready route scaffold
    globals.css          # Global theme + typography styles
    layout.tsx           # App shell + metadata + theme provider
    loading.tsx          # Skeleton loading state
    page.tsx             # Main portfolio page
  components/
    sections/
      navbar.tsx         # Sticky navigation bar
    ui/
      fade-in.tsx        # Reusable scroll/fade animation wrapper
      section.tsx        # Reusable section shell
      theme-toggle.tsx   # Light/dark theme switch
    theme-provider.tsx   # next-themes provider
  data/
    portfolio.ts         # Typed content model (experience/projects/skills)
```

## Personalization Checklist
- Update social/contact links in `src/app/page.tsx`
- Replace placeholder project URLs in `src/data/portfolio.ts`
- Set your real domain in `src/app/layout.tsx` (`metadataBase`)
- Add blog posts under `src/app/blog/`

