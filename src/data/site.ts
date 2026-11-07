export interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
  alt: string;
  tag?: string;
}

export interface Review {
  quote: string;
  author: string;
  meta: string;
  initials: string;
}

export interface OpeningDay {
  days: string;
  hours: string;
  closed?: boolean;
}

/** Construye una URL de Unsplash con el ancho y el recorte que necesitemos. */
export function photo(id: string, width = 1200): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`;
}

export const site = {
  name: 'Berlinas',
  tagline: 'Obrador de barrio',
  city: 'Madrid',
  neighbourhood: 'Malasaña',
  since: 2019,
  address: {
    street: 'Calle del Espíritu Santo, 14',
    postal: '28004 Madrid',
    full: 'Calle del Espíritu Santo, 14 · 28004 Madrid',
    mapsUrl:
      'https://www.openstreetmap.org/?mlat=40.4252&mlon=-3.7041#map=18/40.4252/-3.7041',
  },
  contact: {
    phoneDisplay: '910 247 118',
    phoneHref: 'tel:+34910247118',
    email: 'hola@berlinas.es',
    instagram: '@berlinas.obrador',
    instagramUrl: 'https://instagram.com/',
  },
  hours: [
    { days: 'Martes a viernes', hours: '7:30 – 14:00 · 17:00 – 20:30' },
    { days: 'Sábado y domingo', hours: '8:00 – 15:00' },
    { days: 'Lunes', hours: 'Descansamos', closed: true },
  ] as OpeningDay[],
  stats: [
    { value: '48 h', label: 'de fermentación lenta' },
    { value: '5:30', label: 'primer horno del día' },
    { value: '3', label: 'hornadas diarias' },
  ],
  products: [
    {
      name: 'Berlinas de crema',
      description:
        'Rebozadas en azúcar y rellenas a mano. Crema pastelera de vainilla o chocolate.',
      price: '2,20 €',
      image: photo('1578257264874-5a9858af7d68', 900),
      alt: 'Berlina rellena cubierta de azúcar glas, apiladas sobre una bandeja',
      tag: 'Las de la casa',
    },
    {
      name: 'Croasán de mantequilla',
      description:
        'Laminado despacio, con mantequilla de verdad. Crujiente fuera, tierno dentro.',
      price: '2,40 €',
      image: photo('1623334044303-241021148842', 900),
      alt: 'Croasanes dorados recién horneados sobre papel de horno',
      tag: 'Recién hecho',
    },
    {
      name: 'Hogaza de masa madre',
      description:
        'Dos días de fermentación, corteza gruesa y una miga que huele a trigo.',
      price: '6,50 €',
      image: photo('1590301157172-7ba48dd1c2b2', 900),
      alt: 'Hogaza de masa madre cortada por la mitad, con miga alveolada',
      tag: '48 h',
    },
    {
      name: 'Hogaza gallega',
      description:
        'Hogaza grande para compartir, miga prieta y aroma de horno. La de los sábados.',
      price: '4,90 €',
      image: photo('1509440159596-0249088772ff', 900),
      alt: 'Hogazas rústicas de pan con semillas y espigas de trigo',
    },
    {
      name: 'Rollo de canela',
      description:
        'Masa brioche, canela de Ceilán y un glaseado fino que se queda en los dedos.',
      price: '2,80 €',
      image: photo('1509365465985-25d11c17e812', 900),
      alt: 'Rollos de canela espolvoreados con azúcar sobre una bandeja oscura',
      tag: 'Temporada',
    },
  ] as Product[],
  reviews: [
    {
      quote:
        'Entré por el olor y me quedé por las berlinas de crema. Las mejores del barrio, sin discusión.',
      author: 'Marta R.',
      meta: 'Vecina de Malasaña',
      initials: 'MR',
    },
    {
      quote:
        'El pan gallego de los sábados es religión en casa. Ya no compramos otro.',
      author: 'Diego y Alba',
      meta: 'Clientes desde 2020',
      initials: 'DA',
    },
    {
      quote:
        'Vengo con mi hija cada domingo: un croasán, un café y a pasear. Es nuestro plan.',
      author: 'Susana M.',
      meta: 'Dominguera oficial',
      initials: 'SM',
    },
  ] as Review[],
};
