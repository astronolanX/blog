export interface MediaItem {
  id: string
  type: 'image' | 'video' | 'gif'
  src: string
  alt: string
  title: string
  description?: string
  width: number
  height: number
}

export const archiveData: MediaItem[] = [
  {
    id: '1',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1452849411618-6b42ff62fb4f?w=600&h=800&fit=crop&crop=entropy',
    alt: 'Abstract geometric art',
    title: 'Geometric Exploration',
    description: 'Digital art experiment with shapes and colors',
    width: 600,
    height: 800,
  },
  {
    id: '2',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=entropy',
    alt: 'Creative workspace setup',
    title: 'Studio Setup',
    description: 'Behind the scenes of creative process',
    width: 800,
    height: 600,
  },
  {
    id: '3',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=700&h=500&fit=crop&crop=entropy',
    alt: 'Typography and design sketches',
    title: 'Typography Studies',
    description: 'Hand-lettered design concepts',
    width: 700,
    height: 500,
  },
  {
    id: '4',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=900&fit=crop&crop=entropy',
    alt: 'Architectural photography',
    title: 'Architectural Lines',
    description: 'Study of form and structure',
    width: 600,
    height: 900,
  },
  {
    id: '5',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?w=800&h=500&fit=crop&crop=entropy',
    alt: 'Color palette experiments',
    title: 'Color Theory',
    description: 'Exploration of color relationships',
    width: 800,
    height: 500,
  },
  {
    id: '6',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=500&h=700&fit=crop&crop=entropy',
    alt: 'Texture and material study',
    title: 'Material Studies',
    description: 'Surface texture exploration',
    width: 500,
    height: 700,
  },
  {
    id: '7',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=entropy',
    alt: 'Abstract light patterns',
    title: 'Light Studies',
    description: 'Capturing light and shadow',
    width: 800,
    height: 600,
  },
  {
    id: '8',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1551913902-c92207136625?w=600&h=800&fit=crop&crop=entropy',
    alt: 'Digital art creation process',
    title: 'Process Documentation',
    description: 'Creative workflow and iterations',
    width: 600,
    height: 800,
  },
]