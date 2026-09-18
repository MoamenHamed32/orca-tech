# Orca-Tech Website API Specification

**Audience:** Backend team  
**Client:** Orca-Tech public website (`en` / `ar`)  
**Version:** 1.0  
**Date:** 18 September 2026  
**Status:** Ready for implementation

This document is the contract for making site content and forms dynamic. Field names, enums, and validation rules match the current frontend.

---

## 1. Overview

| Area | Endpoints |
|---|---|
| Settings | `GET /api/settings` |
| About — By the numbers | `GET /api/about/stats` |
| Careers | `GET /api/careers`, `GET /api/careers/:id`, `POST /api/careers/apply` |
| Articles | `GET /api/articles`, `GET /api/articles/:slug` |
| Projects | `GET /api/projects`, `GET /api/projects/:slug` |
| Contact | `POST /api/contact` |

---

## 2. Conventions

### 2.1 Base URL

```
https://{API_HOST}/api
```

All endpoints below are relative to this base.

### 2.2 Locales

The website is bilingual. **CMS GET responses must return both languages.** Do not localize on the server using `Accept-Language`.

```ts
LocalizedString = {
  en: string
  ar: string
}
```

### 2.3 Success envelope (GET)

```json
{
  "success": true,
  "data": {}
}
```

### 2.4 Success envelope (POST)

```json
{
  "success": true,
  "message": {
    "en": "Message received.",
    "ar": "تم استلام الرسالة."
  }
}
```

### 2.5 Validation error

HTTP `400`

```json
{
  "success": false,
  "errors": {
    "email": ["Enter a valid email."]
  }
}
```

### 2.6 Not found

HTTP `404`

```json
{
  "success": false,
  "message": {
    "en": "Not found.",
    "ar": "غير موجود."
  }
}
```

### 2.7 Shared enums

```ts
ServiceId =
  | "ecommerce"
  | "shopifyWordpress"
  | "engineering"
  | "seo"
  | "ai"
  | "cloud"
  | "hosting"
  | "data"

IndustryId =
  | "retail"
  | "fintech"
  | "healthcare"
  | "logistics"
  | "telecom"
  | "education"
  | "realEstate"
  | "hospitality"

ArticleCategory = "tech" | "ai" | "design" | "caseStudies"
```

---

## 3. Settings

Used by footer, contact sidebar, SEO, map, and social icons.

### `GET /api/settings`

**Response `data`**

```ts
{
  siteName: string
  legalName: string
  description: LocalizedString
  seo: {
    defaultTitle: LocalizedString
    defaultDescription: LocalizedString
    keywords: LocalizedString
  }
  emails: {
    info: string
    sales: string
  }
  phones: string[]
  address: {
    street: LocalizedString
    locality: LocalizedString
    countryCode: string
    formatted: LocalizedString
  }
  map: {
    lat: number
    lng: number
  }
  social: {
    facebook: string | null
    instagram: string | null
    linkedin: string | null
  }
}
```

**Example**

```json
{
  "success": true,
  "data": {
    "siteName": "Orca-Tech",
    "legalName": "Orca Technology Group",
    "description": {
      "en": "Orca-Tech is a software house building modern platforms, commerce experiences, and intelligent systems for teams that move fast.",
      "ar": "أوركا-تك دار برمجيات تبني منصات حديثة وتجارب تجارة وأنظمة ذكية للفرق السريعة."
    },
    "seo": {
      "defaultTitle": {
        "en": "Orca-Tech — Software Engineering & Digital Products",
        "ar": "أوركا-تك — هندسة البرمجيات والمنتجات الرقمية"
      },
      "defaultDescription": {
        "en": "Orca-Tech is a Dubai software house building e-commerce, mobile apps, SEO, AI products, and cloud platforms for ambitious companies.",
        "ar": "أوركا-تك دار برمجيات في دبي تبني التجارة الإلكترونية وتطبيقات الجوال وتحسين محركات البحث ومنتجات الذكاء الاصطناعي والمنصات السحابية."
      },
      "keywords": {
        "en": "Orca-Tech, software house Dubai, e-commerce development, SEO, React Native, Flutter, AI products, cloud infrastructure, Next.js, Shopify",
        "ar": "أوركا-تك, دار برمجيات دبي, تطوير التجارة الإلكترونية, تحسين محركات البحث, React Native, Flutter, الذكاء الاصطناعي, البنية السحابية, Next.js, Shopify"
      }
    },
    "emails": {
      "info": "info@orcatechltd.com",
      "sales": "sales@orcatechltd.com"
    },
    "phones": ["+971 4 000 0000"],
    "address": {
      "street": { "en": "Port Fouad", "ar": "بورفؤاد" },
      "locality": { "en": "Port Said", "ar": "بورسعيد" },
      "countryCode": "EG",
      "formatted": {
        "en": "Port Fouad, Port Said, Egypt",
        "ar": "بورفؤاد، بورسعيد، مصر"
      }
    },
    "map": {
      "lat": 31.239621138513407,
      "lng": 32.320161845413416
    },
    "social": {
      "facebook": "https://www.facebook.com/",
      "instagram": "https://www.instagram.com/",
      "linkedin": "https://www.linkedin.com/company/orca-techs/"
    }
  }
}
```

**Notes**

- `phones` is an array so more numbers can be added later.
- Social URLs must be absolute. Use `null` if a platform is not configured; the frontend will hide that icon.
- `map.lat` / `map.lng` drive the contact-page embed.

---

## 4. About — By the numbers

Used by the stats row on the About page. The UI animates each `value` and appends `suffix`.

### `GET /api/about/stats`

**Response `data`**

```ts
{
  title: LocalizedString
  items: Array<{
    id: string
    value: number
    suffix: string
    label: LocalizedString
  }>
}
```

**Example**

```json
{
  "success": true,
  "data": {
    "title": { "en": "By the numbers", "ar": "بالأرقام" },
    "items": [
      {
        "id": "years",
        "value": 12,
        "suffix": "+",
        "label": { "en": "Years of experience", "ar": "سنوات خبرة" }
      },
      {
        "id": "projects",
        "value": 140,
        "suffix": "+",
        "label": { "en": "Projects delivered", "ar": "مشاريع منجزة" }
      },
      {
        "id": "clients",
        "value": 80,
        "suffix": "+",
        "label": { "en": "Clients served", "ar": "عملاء" }
      },
      {
        "id": "team",
        "value": 45,
        "suffix": "+",
        "label": { "en": "Specialists", "ar": "متخصصون" }
      }
    ]
  }
}
```

**Notes**

- Current UI expects four items.
- `id` should stay stable (`years`, `projects`, `clients`, `team`) if used as a React key.

---

## 5. Careers

### 5.1 Listing — `GET /api/careers`

Optional query: `department`, `location`, `type`.

An empty `items` array is valid. The careers page already has an empty state that points to a general application.

**Response `data`**

```ts
{
  items: Array<{
    id: string
    title: LocalizedString
    department: LocalizedString
    location: LocalizedString
    type: LocalizedString
    summary: LocalizedString
  }>
}
```

**Example item**

```json
{
  "id": "senior-frontend",
  "title": { "en": "Senior Frontend Engineer", "ar": "مهندس واجهات أول" },
  "department": { "en": "Engineering", "ar": "الهندسة" },
  "location": { "en": "Remote / Dubai", "ar": "عن بُعد / دبي" },
  "type": { "en": "Full-time", "ar": "دوام كامل" },
  "summary": {
    "en": "Lead Next.js and design-system work across client products — performance, accessibility, and production polish.",
    "ar": "قد عمل Next.js وأنظمة التصميم عبر منتجات العملاء — أداء وإتاحة ولمسة إنتاج."
  }
}
```

**Current role ids in the site**

- `senior-frontend`
- `senior-mobile`
- `product-designer`
- `product-manager`

### 5.2 Details — `GET /api/careers/:id`

Return `404` if the role is missing or closed.

**Response `data`**

```ts
{
  id: string
  title: LocalizedString
  department: LocalizedString
  location: LocalizedString
  type: LocalizedString
  summary: LocalizedString
  description: LocalizedString
  responsibilities: LocalizedString[]
  requirements: LocalizedString[]
}
```

`description`, `responsibilities`, and `requirements` are for a richer job page. Listing fields must still be present.

### 5.3 Apply — `POST /api/careers/apply`

`Content-Type: multipart/form-data` because of the optional CV file.

**Request fields**

```ts
{
  name: string
  email: string
  phone: string | null
  role: string
  linkedin: string | null
  portfolio: string | null
  message: string
  cv: File | null
}
```

**JSON equivalent (when no file)**

```json
{
  "name": "Sara Ahmed",
  "email": "sara@example.com",
  "phone": "+20 100 000 0000",
  "role": "senior-frontend",
  "linkedin": "https://linkedin.com/in/sara",
  "portfolio": "https://sara.dev",
  "message": "I have 6 years of Next.js and design-system work across production products."
}
```

**Validation**

| Field | Required | Rules |
|---|---|---|
| `name` | yes | trim, min 2, max 80 |
| `email` | yes | valid email |
| `phone` | no | max 30 |
| `role` | yes | open job `id` **or** `"general"` |
| `linkedin` | no | if present, must start with `http://` or `https://` |
| `portfolio` | no | if present, must start with `http://` or `https://` |
| `message` | yes | min 10, max 2000 |
| `cv` | no | `.pdf`, `.doc`, `.docx`; max 5 MB |

**Notes**

- `"general"` is a real apply path even when no jobs are open.
- Store the submission and notify HR / `info@orcatechltd.com`.

---

## 6. Articles

### 6.1 Listing — `GET /api/articles`

**Query**

| Param | Type | Notes |
|---|---|---|
| `category` | `tech` \| `ai` \| `design` \| `caseStudies` | optional filter |
| `page` | number | default `1` |
| `limit` | number | default `9` |

Listing cards use cover, category, title, excerpt, author, date, readTime, and resource links. Do **not** include `body` or `gallery` here.

**Response `data`**

```ts
{
  items: Array<{
    slug: string
    category: ArticleCategory
    date: string
    readTime: number
    author: string
    cover: string
    title: LocalizedString
    excerpt: LocalizedString
    links: Array<{
      kind: "linkedin" | "github" | "website"
      href: string
      label: string
    }>
  }>
  pagination: {
    page: number
    limit: number
    total: number
    hasMore: boolean
  }
}
```

**Example item**

```json
{
  "slug": "shipping-headless-commerce",
  "category": "tech",
  "date": "2026-06-12",
  "readTime": 6,
  "author": "Omar Farouk",
  "cover": "https://cdn.example.com/articles/headless-cover.jpg",
  "title": {
    "en": "Shipping headless commerce without losing the checkout",
    "ar": "إطلاق تجارة منفصلة دون فقدان عملية الدفع"
  },
  "excerpt": {
    "en": "A practical path from monolith storefront to headless — and the pitfalls that stall conversions.",
    "ar": "مسار عملي من واجهة متجر أحادية إلى بنية منفصلة — والمزالق التي تعطل التحويل."
  },
  "links": [
    { "kind": "website", "href": "https://shopify.dev", "label": "Shopify.dev" },
    { "kind": "github", "href": "https://github.com/Shopify/hydrogen", "label": "Hydrogen" },
    { "kind": "linkedin", "href": "https://www.linkedin.com/company/shopify", "label": "Shopify" }
  ]
}
```

### 6.2 Details — `GET /api/articles/:slug`

Return `404` if the slug does not exist.

**Response `data`**

```ts
{
  slug: string
  category: ArticleCategory
  date: string
  readTime: number
  author: string
  cover: string
  title: LocalizedString
  excerpt: LocalizedString
  links: Array<{
    kind: "linkedin" | "github" | "website"
    href: string
    label: string
  }>
  gallery: Array<{
    src: string
    alt: LocalizedString
  }>
  body: Array<
    | { type: "p"; en: string; ar: string }
    | { type: "h2"; en: string; ar: string }
  >
  related: Array<ArticleListItem>
}
```

`related` is optional. Prefer up to 3 items, same category first. Same shape as listing items (no `body` / `gallery`).

**Body blocks**

| `type` | Meaning |
|---|---|
| `p` | Paragraph |
| `h2` | Section heading |

`date` is ISO date (`YYYY-MM-DD`). `readTime` is minutes. `slug` must be URL-safe.

---

## 7. Projects

### 7.1 Listing — `GET /api/projects`

Optional query: `service` (`ServiceId`), `industry` (`IndustryId`).

Cards use cover, name, tagline, industry, and service.

**Response `data`**

```ts
{
  items: Array<{
    slug: string
    service: ServiceId
    industry: IndustryId
    cover: string
    name: LocalizedString
    tagline: LocalizedString
  }>
}
```

**Example item**

```json
{
  "slug": "ai-powered-marketplace",
  "service": "ecommerce",
  "industry": "retail",
  "cover": "https://cdn.example.com/projects/marketplace-cover.jpg",
  "name": {
    "en": "AI-Powered Multi-Vendor Commerce Platform",
    "ar": "منصة تجارة متعددة البائعين بالذكاء الاصطناعي"
  },
  "tagline": {
    "en": "A feature-rich marketplace combining modern e-commerce, seller operations, platform administration, and practical AI capabilities in one scalable product.",
    "ar": "سوق غني بالميزات يجمع التجارة الحديثة وتشغيل البائعين وإدارة المنصة وقدرات ذكاء اصطناعي عملية في منتج واحد قابل للتوسع."
  }
}
```

### 7.2 Details — `GET /api/projects/:slug`

Return `404` if the slug does not exist.

**Response `data`**

```ts
{
  slug: string
  service: ServiceId
  industry: IndustryId
  stack: string[]
  tags: LocalizedString[]
  cover: string
  gallery: Array<{
    src: string
    alt: LocalizedString
  }>
  name: LocalizedString
  tagline: LocalizedString
  cta: LocalizedString
  sections: ProjectSection[]
}
```

**`ProjectSection`**

```ts
{
  kicker: LocalizedString
  title: LocalizedString
  intro?: LocalizedString
  cards?: Array<{ title: LocalizedString; body: LocalizedString }>
  notes?: Array<{ title: LocalizedString; body: LocalizedString }>
  steps?: Array<{ title: LocalizedString; body: LocalizedString }>
  modules?: Array<{
    kicker: LocalizedString
    title: LocalizedString
    body: LocalizedString
    bullets: LocalizedString[]
  }>
  layers?: LocalizedString[]
}
```

A section may include any mix of `intro`, `cards`, `notes`, `steps`, `modules`, and `layers`. Omit unused keys.

**`cta`** is the closing heading on the case-study page, for example: “Building a marketplace, commerce platform, or AI-enabled product?”

---

## 8. Contact form

### `POST /api/contact`

`Content-Type: application/json`

**Request**

```ts
{
  name: string
  email: string
  phone: string | null
  company: string | null
  service: ServiceId
  message: string
}
```

**Example**

```json
{
  "name": "Omar Hassan",
  "email": "omar@company.com",
  "phone": "+971 50 000 0000",
  "company": "Acme",
  "service": "ecommerce",
  "message": "We need a multi-vendor marketplace with AI search and a seller portal."
}
```

**Validation**

| Field | Required | Rules |
|---|---|---|
| `name` | yes | trim, min 2, max 80 |
| `email` | yes | valid email |
| `phone` | no | max 30 |
| `company` | no | max 80 |
| `service` | yes | one of `ServiceId` |
| `message` | yes | min 10, max 2000 |

**Success example**

```json
{
  "success": true,
  "message": {
    "en": "Message received. A producer will follow up shortly.",
    "ar": "تم استلام الرسالة. سيتابع معك أحد المنتجين قريباً."
  }
}
```

Store the lead and notify `info@orcatechltd.com` / sales.

---

## 9. Endpoint summary

| Method | Path | Auth | Purpose |
|---|---|---|---|
| `GET` | `/api/settings` | public | Site-wide settings |
| `GET` | `/api/about/stats` | public | About stats row |
| `GET` | `/api/careers` | public | Job listing |
| `GET` | `/api/careers/:id` | public | Job details |
| `POST` | `/api/careers/apply` | public | Submit application (`multipart`) |
| `GET` | `/api/articles` | public | Article listing |
| `GET` | `/api/articles/:slug` | public | Article details |
| `GET` | `/api/projects` | public | Project listing |
| `GET` | `/api/projects/:slug` | public | Project details |
| `POST` | `/api/contact` | public | Contact form (`JSON`) |

---

## 10. Implementation notes

1. Always return both `en` and `ar` for CMS content.
2. `slug` and job `id` values must be URL-safe (`ai-powered-marketplace`, `senior-frontend`).
3. Image fields (`cover`, `gallery[].src`) should be absolute CDN URLs, or stable paths the frontend can prefix.
4. Careers apply is `multipart/form-data`. Contact is JSON.
5. Persist contact and application submissions. Send email notifications as needed.
6. `role: "general"` must be accepted even when the jobs list is empty.
7. Listing payloads should stay lean. Full `body` / `sections` / `gallery` belong on detail endpoints only.
8. CORS must allow the Next.js website origin.

---

## 11. Suggested HTTP status codes

| Code | When |
|---|---|
| `200` | Successful GET or POST |
| `400` | Validation failed |
| `404` | Unknown slug or job id |
| `413` | CV file larger than 5 MB |
| `415` | CV file type not allowed |
| `429` | Rate limit on public POST endpoints |
| `500` | Unexpected server error |
