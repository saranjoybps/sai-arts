import { Artwork, ProcessStep } from '../types';

export const ARTWORKS: Artwork[] = [
  {
    id: '1',
    title: 'Silent Glow',
    medium: 'Graphite Pencil on Archival Paper',
    year: 2024,
    category: 'Sketches',
    image: '/IMG_6203.jpg',
    dimensions: '120 x 90 cm',
    featured: true,
    aspectRatio: '4:5',
    subtitle: 'Lantern Drawing',
    description: 'A timeless still life where a vintage lantern and rustic objects come together, celebrating the quiet beauty of light, texture, and everyday moments.'
  },
  {
    id: '2',
    title: "Nature's Harmony",
    medium: 'Graphite Pencil on Archival Paper',
    year: 2024,
    category: 'Nature',
    image: '/IMG_6204.jpg',
    dimensions: '60 x 80 cm',
    featured: true,
    aspectRatio: '4:5',
    subtitle: 'Fruits Composition',
    description: 'A refined composition of fruits and glassware, capturing the richness of natural forms through delicate graphite textures and balanced tonal depth.'
  },
  {
    id: '3',
    title: 'Journey Worn',
    medium: 'Graphite Pencil on Archival Paper',
    year: 2024,
    category: 'Sketches',
    image: '/IMG_6206.jpg',
    dimensions: '90 x 120 cm',
    featured: true,
    aspectRatio: '4:5',
    subtitle: 'Boot Drawing',
    description: 'A detailed graphite study portraying the enduring spirit of a weathered boot, where every crease and shadow reflects resilience and untold stories.'
  },
  {
    id: '4',
    title: "A Mother's Warmth",
    medium: 'Graphite Pencil on Archival Paper',
    year: 2023,
    category: 'Portraits',
    image: '/IMG_6242.jpg',
    dimensions: '100 x 100 cm',
    featured: true,
    aspectRatio: '4:5',
    subtitle: 'Portrait',
    description: 'A heartfelt portrait celebrating unconditional love, quiet strength, and the timeless grace reflected in every gentle expression.'
  },
  {
    id: '5',
    title: 'Sacred Presence',
    medium: 'Graphite Pencil on Archival Paper',
    year: 2024,
    category: 'Sketches',
    image: '/IMG_6210.jpg',
    dimensions: '70 x 90 cm',
    featured: false,
    aspectRatio: '4:5',
    subtitle: 'Divine Sculpture',
    description: 'A finely detailed graphite study honoring divine artistry, capturing the intricate craftsmanship and spiritual serenity of a sacred idol.'
  },
  {
    id: '6',
    title: 'Wisdom in Grace',
    medium: 'Graphite Pencil on Archival Paper',
    year: 2024,
    category: 'Portraits',
    image: '/IMG_6212.jpg',
    dimensions: '70 x 90 cm',
    featured: false,
    aspectRatio: '4:5',
    subtitle: 'Portrait',
    description: 'A graceful portrait reflecting a lifetime of experience, resilience, and quiet dignity through expressive graphite tones and delicate details.'
  },
  {
    id: '14',
    title: 'Innocent Gaze',
    medium: 'Graphite Pencil on Archival Paper',
    year: 2024,
    category: 'Portraits',
    image: '/IMG_6208.jpg',
    dimensions: '50 x 65 cm',
    featured: false,
    aspectRatio: '4:5',
    subtitle: 'Animal Portrait',
    description: 'A tender graphite portrait capturing the curiosity, innocence, and gentle charm of a young companion through soft textures and expressive eyes.'
  },
  {
    id: '12',
    title: 'The Village Elder',
    medium: 'Graphite Pencil on Archival Paper',
    year: 2024,
    category: 'Portraits',
    image: '/IMG_6239.jpg',
    dimensions: '50 x 65 cm',
    featured: false,
    aspectRatio: '4:5',
    subtitle: 'Portrait',
    description: 'A character study portraying wisdom, resilience, and tradition, where every wrinkle and expression tells a story of a life richly lived.'
  },
  {
    id: '17',
    title: 'Rolex',
    medium: 'Graphite Pencil on Archival Paper',
    year: 2024,
    category: 'Portraits',
    image: '/IMG_6237.jpg',
    dimensions: '50 x 65 cm',
    featured: false,
    aspectRatio: '4:5',
    subtitle: 'Character Portrait',
    description: 'An expressive graphite tribute capturing the fierce charisma and commanding presence of the iconic Rolex character with bold contrasts and intricate detailing.'
  },
  {
    id: '10',
    title: 'Compassion Eternal',
    medium: 'Graphite Pencil on Archival Paper',
    year: 2024,
    category: 'Portraits',
    image: '/IMG_6222.jpg',
    dimensions: '65 x 80 cm',
    featured: false,
    aspectRatio: '4:5',
    subtitle: 'Portrait',
    description: 'A graphite tribute to Mother Teresa, capturing the profound compassion, humility, and unwavering spirit that inspired generations around the world.'
  },
  {
    id: '7',
    title: 'Untamed Spirit',
    medium: 'Graphite Pencil on Archival Paper',
    year: 2024,
    category: 'Nature',
    image: '/IMG_6214.jpg',
    dimensions: '70 x 90 cm',
    featured: false,
    aspectRatio: '4:5',
    subtitle: 'Animal Study',
    description: 'A dynamic graphite study portraying the strength, freedom, and graceful energy of a rearing horse through expressive movement and rich tonal contrasts.'
  },
  {
    id: '15',
    title: 'Peaceful Dreams',
    medium: 'Graphite Pencil on Archival Paper',
    year: 2024,
    category: 'Portraits',
    image: '/IMG_6231.jpg',
    dimensions: '50 x 65 cm',
    featured: false,
    aspectRatio: '4:5',
    subtitle: 'Portrait',
    description: 'A serene portrait capturing the innocence and quiet beauty of childhood, illuminated by soft light and delicate graphite shading.'
  },
  {
    id: '19',
    title: 'The Keeper of Traditions',
    medium: 'Graphite Pencil on Archival Paper',
    year: 2024,
    category: 'Portraits',
    image: '/IMG_6252.jpg',
    dimensions: '50 x 65 cm',
    featured: false,
    aspectRatio: '4:5',
    subtitle: 'Portrait',
    description: 'A striking portrait celebrating resilience, heritage, and the timeless character of rural life, rendered with expressive pen strokes and intricate detail.'
  },
  {
    id: '11',
    title: 'Curious Eyes',
    medium: 'Graphite Pencil on Archival Paper',
    year: 2024,
    category: 'Portraits',
    image: '/IMG_6251.jpg',
    dimensions: '50 x 65 cm',
    featured: false,
    aspectRatio: '4:5',
    subtitle: 'Portrait',
    description: 'A gentle portrait capturing the innocence and wonder of childhood, where every soft graphite stroke reflects quiet curiosity and hope.'
  },
  {
    id: '8',
    title: 'Moonlit Serenity',
    medium: 'Graphite Pencil on Archival Paper',
    year: 2024,
    category: 'Nature',
    image: '/IMG_6216.jpg',
    dimensions: '70 x 90 cm',
    featured: false,
    aspectRatio: '4:5',
    subtitle: 'Landscape',
    description: 'A tranquil landscape portraying the peaceful harmony of moonlight, still waters, and silhouetted trees through delicate tonal shading and atmospheric depth.'
  },
  {
    id: '13',
    title: 'Joyful Companion',
    medium: 'Graphite Pencil on Archival Paper',
    year: 2024,
    category: 'Portraits',
    image: '/IMG_6248.jpg',
    dimensions: '50 x 65 cm',
    featured: false,
    aspectRatio: '4:5',
    subtitle: 'Animal Portrait',
    description: 'A heartwarming graphite portrait capturing the playful spirit, boundless joy, and gentle innocence of a beloved puppy through soft textures and lifelike detail.'
  },
  {
    id: '18',
    title: 'Echoes of Heritage',
    medium: 'Graphite Pencil on Archival Paper',
    year: 2024,
    category: 'Portraits',
    image: '/IMG_6246.jpg',
    dimensions: '50 x 65 cm',
    featured: false,
    aspectRatio: '4:5',
    subtitle: 'Portrait',
    description: 'A detailed pen portrait celebrating the wisdom, resilience, and enduring traditions of rural life, expressed through confident lines and timeless character.'
  },
  {
    id: '16',
    title: 'A Moment Unspoken',
    medium: 'Graphite Pencil on Archival Paper',
    year: 2024,
    category: 'Portraits',
    image: '/IMG_6236.jpg',
    dimensions: '65 x 80 cm',
    featured: false,
    aspectRatio: '4:5',
    subtitle: 'Celebrity Portrait',
    description: 'A graphite portrait inspired by G. V. Prakash Kumar and Divya Bharathi, capturing the quiet emotions and natural chemistry shared within a single cinematic moment.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'Wedding & Anniversary Portraits',
    description: 'Cherish your special day forever with a hand-drawn graphite pencil portrait from your wedding or anniversary photographs, capturing every emotion and detail.',
    icon: 'Heart'
  },
  {
    id: 2,
    title: 'Birthday Gift Sketches',
    description: 'Give a truly personal gift — a custom pencil sketch of a loved one, pet, or cherished memory, beautifully rendered on archival paper and ready to frame.',
    icon: 'Gift'
  },
  {
    id: 3,
    title: 'Photo to Pencil Art',
    description: 'Transform your favorite memorable photographs into timeless graphite sketches. From family portraits to scenic memories, each piece is meticulously hand-drawn.',
    icon: 'Image'
  },
  {
    id: 4,
    title: 'Old Photo Recreation',
    description: 'Bring faded and vintage photographs back to life as detailed pencil recreations. Restoring the warmth, expressions, and stories of the past with every stroke.',
    icon: 'RotateCcw'
  },
  {
    id: 5,
    title: 'Custom Commemorative Art',
    description: 'Whether it is a farewell gift, a memorial portrait, or a milestone celebration, I create meaningful pencil art that turns your emotions into lasting keepsakes.',
    icon: 'Sparkles'
  }
];

export const ARTIST_PORTRAIT = '/IMG_6210.jpg';
