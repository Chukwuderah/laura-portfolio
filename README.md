# Laura Eleojo — Portfolio

Personal portfolio and services website for Laura Eleojo, a multidisciplinary professional offering Writing, Product Management, Graphics Designing, and Virtual Assistance services.

Built with **Next.js 15**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **shadcn/ui**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| UI Components | shadcn/ui |
| Theming | next-themes |
| Form Validation | Zod |
| Toast Notifications | Sonner |
| Icons | Lucide React |

---

## Project Structure

```
src/
├── app/
│   ├── (main)/               # Main layout group (Header + Footer)
│   │   ├── layout.tsx
│   │   ├── page.tsx          # Home
│   │   ├── about/
│   │   ├── contact/
│   │   └── portfolio/
│   │       ├── writing/
│   │       ├── product-management/
│   │       ├── graphics-designing/
│   │       └── virtual-assistance/
│   ├── globals.css
│   ├── layout.tsx            # Root layout (ThemeProvider)
│   └── not-found.tsx         # Custom 404 page
│
├── components/
│   ├── home/
│   │   ├── HeroImage.tsx     # SSR-safe theme-aware image
│   │   ├── ServicesOverview.tsx
│   │   ├── section-primitives.tsx # SectionLabel + AnimatedSection
│   │   └── Testimonial.tsx
│   ├── shared/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeToggle.tsx   # Isolated client-only component
│   ├── portfolio/
│   │   ├── cta-section.tsx       # Shared CTA section
│   │   └── offerings-grid.tsx    # Shared service cards grid
│   └── ui/                       # Shadcn ui components
└── lib/
    └── animation-variants.ts     # Shared Framer Motion variants
```

---

## Shared Component System

Reusable building blocks used across all service pages:

**`SectionLabel`** — small uppercase label with a leading line accent. Accepts a `light` prop for use on dark backgrounds.

**`AnimatedSection`** — scroll-triggered wrapper that fires Framer Motion variants once when the section enters the viewport. Accepts a `margin` prop to control trigger distance.

**`OfferingsGrid`** — animated 2-column card grid. Accepts an `offerings` array typed as `Offering[]` and an optional `showLearnMore` prop.

**`CtaSection`** — full-width CTA banner with dot pattern background. Accepts `label`, `heading`, `subtext`, `buttonText`, and `href` props.

**`ThemeToggle`** — theme switcher imported with `ssr: false` everywhere it is used to prevent hydration mismatches.

---

## Animation Variants

Defined once in `src/lib/animation-variants.ts` and imported across all pages:

```ts
import { fadeUp, fadeIn, slideLeft, slideRight, scaleIn } from '@/lib/animation-variants';
```

| Variant | Effect |
|---|---|
| `fadeUp` | Fades in while rising 32px. Supports stagger via `custom` index |
| `fadeIn` | Opacity only. Supports stagger via `custom` index |
| `slideLeft` | Slides in from -40px on the x-axis |
| `slideRight` | Slides in from +40px on the x-axis |
| `scaleIn` | Scales up from 0.92. Supports stagger via `custom` index |

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Key Decisions & Patterns

**SSR-safe theming** — Any component whose rendered output depends on `resolvedTheme` (icon choice, image src) is isolated into its own file and imported with `dynamic(..., { ssr: false })`. This prevents hydration mismatches since the server cannot know the user's saved theme preference.

**`overflow-x-hidden` on `<main>` only** — Applied to the inner `<main>` wrapper in the layout, not on `<html>` or `<body>`. Setting it on either of those breaks `position: sticky` on Safari.

**`will-change-transform isolate` on `<header>`** — Promotes the sticky header to its own GPU compositing layer and creates a new stacking context, making it immune to layout shifts caused by Framer Motion `y` and `x` transforms in child sections on mobile.

**`as const` data arrays** — All static data (nav links, service offerings, timeline entries, etc.) is defined as `as const` typed arrays above the component, keeping JSX clean and making additions a single-line data change.

**Framer Motion variant propagation** — `AnimatedSection` sets `initial` and `animate` at the wrapper level. Child `motion.*` elements with `variants` automatically inherit the state transition, enabling coordinated stagger animations without prop drilling.

---

## Environment Variables

No environment variables are required to run the project locally. If you wire up a real contact form endpoint, add it as:

```env
CONTACT_API_URL=https://your-api-endpoint.com/contact
```

Then update the `handleSubmit` function in `src/app/(main)/contact/page.tsx` to use it.