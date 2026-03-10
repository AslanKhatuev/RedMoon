import { NavItem, Service, Testimonial } from "@/types";

export const NAV_ITEMS = [
  { label: "Hjem", href: "/" },
  { label: "Tjenester", href: "/tjenester" },
  { label: "Galleri", href: "/galleri" },
  { label: "Prisliste", href: "/prisliste" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Kontakt", href: "/kontakt" },
];

export const SERVICES: Service[] = [
  {
    id: "v1",
    category: "video",
    title: "Bryllupsfilm",
    description: "Cinematografisk dokumentasjon av din store dag.",
    icon: "🎬",
    slug: "bryllupsfilm",
  },
  {
    id: "v2",
    category: "video",
    title: "Avskjedsfest Video",
    description: "Videoopptak av avskjedsfesten med venner og familie.",
    icon: "🥂",
    slug: "avskjedsfest-video",
  },
  {
    id: "v3",
    category: "video",
    title: "Lovzar – Tradisjonell dans",
    description:
      "Spesialisert filming av lovzar og tradisjonelle bryllupsdanser.",
    icon: "💃",
    slug: "lovzar",
  },
  {
    id: "v4",
    category: "video",
    title: "Reels & Kortvideoer",
    description: "Kreative kortvideoer for Instagram og TikTok.",
    icon: "📱",
    slug: "reels",
  },
  {
    id: "v5",
    category: "video",
    title: "Videoredigering",
    description: "Profesjonell redigering av ditt råmateriale.",
    icon: "✂️",
    slug: "videoredigering",
  },
  {
    id: "v6",
    category: "video",
    title: "Street Video",
    description: "Autentisk og dynamisk street-filming.",
    icon: "🎥",
    slug: "street-video",
  },
  {
    id: "p1",
    category: "photo",
    title: "Bryllupsfotografering",
    description: "Tidløse bryllupsbilder – naturlig, elegant og ekte.",
    icon: "💍",
    slug: "bryllupsfotografering",
  },
  {
    id: "p2",
    category: "photo",
    title: "Avskjedsfest Foto",
    description: "Fotografering av pre-wedding feiring.",
    icon: "🌸",
    slug: "avskjedsfest-foto",
  },
  {
    id: "p3",
    category: "photo",
    title: "Portrettfotografering",
    description:
      "Individuelle portrettsesjoner som fremhever din personlighet.",
    icon: "🖼️",
    slug: "portrett",
  },
  {
    id: "p4",
    category: "photo",
    title: "Arrangementer & Feiringer",
    description: "Full dekning av events og viktige feiringer.",
    icon: "🎉",
    slug: "arrangementer",
  },
  {
    id: "p5",
    category: "photo",
    title: "Individuell Fotoshoot",
    description: "Skreddersydde sesjoner for deg.",
    icon: "✨",
    slug: "individuell",
  },
  {
    id: "p6",
    category: "photo",
    title: "Familie & Street",
    description: "Familiebilder og street-fotografering.",
    icon: "👨‍👩‍👧‍👦",
    slug: "familie-street",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Amira & Tariq",
    date: "Oktober 2024",
    text: "Vi er så takknemlige for de fantastiske bildene og videoen fra bryllupet vårt. Hvert øyeblikk ble fanget med slik omsorg og profesjonalitet.",
    rating: 5,
    service: "Bryllup foto & video",
  },
  {
    id: "t2",
    name: "Fatima S.",
    date: "August 2024",
    text: "Reels-en de laget for avskjedsfesten min gikk viralt på Instagram. Så kreative og raske til å levere!",
    rating: 5,
    service: "Reels & Avskjedsfest",
  },
  {
    id: "t3",
    name: "Leila & Omar",
    date: "Juni 2024",
    text: "Lovzar-filmen er helt utrolig. De forstod den kulturelle betydningen og fanget dansen med slik eleganse.",
    rating: 5,
    service: "Lovzar filming",
  },
];
