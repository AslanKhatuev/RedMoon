# RedMoon Production

> Profesjonell foto- og videoproduksjon – Next.js + Strapi CMS

**Live:** [red-moon-one.vercel.app](https://red-moon-one.vercel.app)  
**CMS Admin:** [optimistic-splendor-b9f6192352.strapiapp.com/admin](https://optimistic-splendor-b9f6192352.strapiapp.com/admin)

---

## Tech Stack

| Lag | Teknologi |
|-----|-----------|
| Frontend | Next.js 14 (App Router), TypeScript |
| Styling | Tailwind CSS v4 + inline styles |
| CMS | Strapi v5 (Strapi Cloud) |
| Deploy | Vercel (frontend) + Strapi Cloud (backend) |
| Fonter | Cormorant Garamond, Montserrat, Space Mono |

---

## Prosjektstruktur

redmoon/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout – Google Translate scripts
│   │   ├── page.tsx                # Forside – Hero + Featured seksjon
│   │   ├── tjenester/page.tsx      # Tjenester fra Strapi
│   │   ├── galleri/page.tsx        # Bildegalleri med lightbox
│   │   ├── om-oss/page.tsx         # Om oss + testimonials
│   │   ├── kontakt/page.tsx        # Kontaktskjema
│   │   └── prisliste/page.tsx      # Prisliste
│   ├── components/
│   │   └── layout/
│   │       ├── Navbar.tsx          # Navigasjon + språkvelger + hamburger
│   │       └── Footer.tsx          # Footer med logo, WhatsApp, Instagram
│   ├── lib/
│   │   ├── strapi.ts               # API-kall til Strapi
│   │   └── data.ts                 # NAV_ITEMS, fallback-data
│   └── types/
│       └── index.ts                # TypeScript interfaces
├── public/
│   └── redmoon_logo3.png           # Logo (brukes i navbar, footer, prisliste)
└── .env.local                      # Miljøvariabler (ikke i git)

---

## Sider

| Rute | Beskrivelse |
|------|-------------|
| `/` | Forside med hero-bilde fra Strapi og featured seksjon |
| `/tjenester` | Tjenestekort fra Strapi CMS |
| `/galleri` | Bildegalleri med lightbox |
| `/om-oss` | Om-oss tekst + kundeomtaler |
| `/kontakt` | Kontaktskjema som sender til Strapi |
| `/prisliste` | Statisk prisliste med fire pakker |

---

## Miljøvariabler

Opprett `.env.local` i rotmappen:

```env
NEXT_PUBLIC_STRAPI_URL=https://optimistic-splendor-b9f6192352.strapiapp.com
STRAPI_API_TOKEN=din_api_token_her
```

Samme variabler må legges inn i **Vercel → Settings → Environment Variables**.

---

## Strapi CMS

### Collection Types

| Navn | Felt |
|------|------|
| `Service` | title, description, price, icon |
| `GalleryItem` | title, media, category |
| `Testimonial` | name, quote, role |
| `ContactSubmission` | name, email, message, phone |

### Single Types

| Navn | Felt |
|------|------|
| `HeroContent` | title, subtitle, description, backgroundImage |
| `FeaturedSection` | title, subtitle, description, image |
| `AboutPage` | quto, paragraph1, paragraph2 |

### API-tilganger (Public rolle)

Alle content types: `find`, `findOne` ✅  
ContactSubmission: `create` ✅

---

## Kjøre lokalt

```bash
# Installer avhengigheter
npm install

# Start utviklingsserver
npm run dev

# Bygg for produksjon
npm run build
```

---

## Deploy

### Frontend (Vercel)

```bash
git add .
git commit -m "din melding"
git push

```

Vercel deployer automatisk ved push til `main`.

### CMS (Strapi Cloud)

Strapi-koden ligger i et eget repo:

github.com/AslanKhatuev/strapi-cloud-template-blog-ac2071698b

Strapi Cloud deployer automatisk ved push.

---

## Funksjoner

- **Flerspråklig** – Google Translate med NO / EN / RU via cookie
- **Responsiv** – Tilpasset mobil med hamburger-meny
- **Dynamisk innhold** – Alt innhold styres fra Strapi Cloud
- **Kontaktskjema** – Sender direkte til Strapi ContactSubmission
- **Prisliste** – Statisk side med fire pakker
- **Lightbox galleri** – Klikk på bilder for fullskjerm

---

## Kontaktinfo

- **WhatsApp:** [+47 96 85 69 78](https://wa.me/4796856978)
- **Instagram:** [@redmoon_usm](https://www.instagram.com/redmoon_usm)
- **E-post:** <post@redmoon.no>

---

## Design

- **Farger:** Svart `#050505` bakgrunn, hvit `#ffffff` tekst, rød `#cc0000` aksent
- **Fonter:** Cormorant Garamond (display), Montserrat (body), Space Mono (mono)
- **Stil:** Mørk luksus – minimalistisk med elegant typografi
