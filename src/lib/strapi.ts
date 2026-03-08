const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN || "";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${STRAPI_TOKEN}`,
};

// Hent alle tjenester
export async function getServices() {
  const res = await fetch(`${STRAPI_URL}/api/services?populate=*`, {
    headers,
    next: { revalidate: 60 },
  });
  if (!res.ok) return [];
  const data = await res.json();
  return data.data || [];
}

// Hent alle testimonials
export async function getTestimonials() {
  const res = await fetch(`${STRAPI_URL}/api/testimonials?populate=*`, {
    headers,
    next: { revalidate: 60 },
  });
  if (!res.ok) return [];
  const data = await res.json();
  return data.data || [];
}

// Hent alle galleri-bilder
export async function getGalleryItems() {
  const res = await fetch(`${STRAPI_URL}/api/gallery-items?populate=*`, {
    headers,
    next: { revalidate: 60 },
  });
  if (!res.ok) return [];
  const data = await res.json();
  return data.data || [];
}

// Send kontaktskjema
export async function submitContact(formData: {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
}) {
  const res = await fetch(`${STRAPI_URL}/api/contact-submissions`, {
    method: "POST",
    headers,
    body: JSON.stringify({ data: formData }),
  });
  return res.ok;
}

//Om oss side
export async function getAboutPage() {
  const res = await fetch(`${STRAPI_URL}/api/about-page`, {
    headers,
    next: { revalidate: 60 },
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.data || null;
}

// Hero content for forsiden
export async function getHeroContent() {
  const res = await fetch(`${STRAPI_URL}/api/hero-content?populate=*`, {
    headers,
    next: { revalidate: 60 },
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.data || null;
}

// Featured contenc for forsiden
export async function getFeaturedSection() {
  const res = await fetch(`${STRAPI_URL}/api/featured-section?populate=*`, {
    headers,
    next: { revalidate: 60 },
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.data || null;
}