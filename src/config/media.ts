/**
 * Media Registry for MUSKAN Official Website
 * ALL 33 model-2 photographs + 3 video reels.
 */

export interface MediaItem {
  id: string;
  title: string;
  category: string;
  src: string;
  poster?: string;
  type: 'image' | 'video';
  aspectRatio: string;
  description?: string;
  hasAudio?: boolean;
}

export const HERO_MEDIA = {
  main: {
    src: '/media/images/muskan-hero-portrait.jpg',
    alt: 'MUSKAN dramatic editorial portrait with dark background',
    width: 3072,
    height: 4096,
  },
  about: {
    src: '/media/images/muskan-about-featured.jpg',
    alt: 'Muskan smiling warmly, natural and approachable',
    width: 3072,
    height: 4096,
  },
};

export const FEATURED_VIDEOS: MediaItem[] = [
  {
    id: 'video-reel-01',
    title: 'Daily Unfiltered Moments',
    category: 'Video Reel',
    src: '/media/videos/muskan-video-reel-01.mp4',
    poster: '/media/images/muskan-video-poster-01.jpg',
    type: 'video',
    aspectRatio: '9/16',
    hasAudio: true,
    description: 'Behind-the-scenes candid moments, quick greetings, and daily vlog previews.',
  },
  {
    id: 'video-reel-02',
    title: 'Private Stories & Moods',
    category: 'Exclusive Clip',
    src: '/media/videos/muskan-video-reel-02.mp4',
    poster: '/media/images/muskan-video-poster-02.jpg',
    type: 'video',
    aspectRatio: '9/16',
    hasAudio: true,
    description: 'Exclusive voice & sound reel — real-time greetings, stories, and candid moments. Tap unmute to listen!',
  },
  {
    id: 'video-reel-03',
    title: 'Candid Studio & Moods',
    category: 'Behind The Scenes',
    src: '/media/videos/muskan-video-reel-03.mp4',
    poster: '/media/images/muskan-video-poster-03.jpg',
    type: 'video',
    aspectRatio: '9/16',
    hasAudio: true,
    description: 'Special studio clips, festive celebrations, and candid real-time updates.',
  },
];

// ALL 33 images from model-2 folder represented in the gallery archive
export const GALLERY_ITEMS: MediaItem[] = [
  {
    id: 'gallery-01',
    title: 'Golden Hour Radiance',
    category: 'Outdoor',
    src: '/media/images/muskan-vault-01.jpg',
    type: 'image',
    aspectRatio: '4/5',
    description: 'Soft natural sunlight and warm outdoor glow.',
  },
  {
    id: 'gallery-02',
    title: 'Sunlit Terrace Glance',
    category: 'Outdoor',
    src: '/media/images/muskan-vault-02.jpg',
    type: 'image',
    aspectRatio: '4/5',
    description: 'Candid terrace moments with subtle city breeze.',
  },
  {
    id: 'gallery-03',
    title: 'Dusk Serenity',
    category: 'Outdoor',
    src: '/media/images/muskan-vault-03.jpg',
    type: 'image',
    aspectRatio: '4/5',
    description: 'Serene expression against a soft evening dusk.',
  },
  {
    id: 'gallery-04',
    title: 'Intimate Warmth',
    category: 'Portrait',
    src: '/media/images/muskan-vault-04.jpg',
    type: 'image',
    aspectRatio: '4/5',
    description: 'Close-up studio warmth with expressive gaze.',
  },
  {
    id: 'gallery-05',
    title: 'Festive Crimson Grace',
    category: 'Festive',
    src: '/media/images/muskan-vault-05.jpg',
    type: 'image',
    aspectRatio: '3/4',
    description: 'Traditional elegance in rich festive attire.',
  },
  {
    id: 'gallery-06',
    title: 'Crimson Radiance',
    category: 'Festive',
    src: '/media/images/muskan-vault-06.jpg',
    type: 'image',
    aspectRatio: '3/4',
    description: 'Delicate ethnic details with joyful charm.',
  },
  {
    id: 'gallery-07',
    title: 'Midnight Velvet',
    category: 'Traditional',
    src: '/media/images/muskan-vault-07.jpg',
    type: 'image',
    aspectRatio: '4/5',
    description: 'Moody editorial lighting in dark ethnic styling.',
  },
  {
    id: 'gallery-08',
    title: 'Urban Chic Look',
    category: 'Candid',
    src: '/media/images/muskan-vault-08.jpg',
    type: 'image',
    aspectRatio: '3/4',
    description: 'Effortless street style with clean modern lines.',
  },
  {
    id: 'gallery-09',
    title: 'Coffee Break Laugh',
    category: 'Candid',
    src: '/media/images/muskan-vault-09.jpg',
    type: 'image',
    aspectRatio: '3/4',
    description: 'Unposed candid smile in cosy indoor setting.',
  },
  {
    id: 'gallery-10',
    title: 'Minimalist Tone',
    category: 'Portrait',
    src: '/media/images/muskan-vault-10.jpg',
    type: 'image',
    aspectRatio: '3/4',
    description: 'Clean composition focusing on natural beauty.',
  },
  {
    id: 'gallery-11',
    title: 'Terrace Sunset Mood',
    category: 'Outdoor',
    src: '/media/images/muskan-vault-11.jpg',
    type: 'image',
    aspectRatio: '4/5',
    description: 'Warm sunset light falling across terrace rails.',
  },
  {
    id: 'gallery-12',
    title: 'Casual Everyday Glow',
    category: 'Candid',
    src: '/media/images/muskan-vault-12.jpg',
    type: 'image',
    aspectRatio: '3/4',
    description: 'Relaxed daytime mood and genuine warmth.',
  },
  {
    id: 'gallery-13',
    title: 'Editorial Shadow Play',
    category: 'Portrait',
    src: '/media/images/muskan-vault-13.jpg',
    type: 'image',
    aspectRatio: '3/4',
    description: 'Dramatic cinematic shadow play and poise.',
  },
  {
    id: 'gallery-14',
    title: 'City Reflections',
    category: 'Travel',
    src: '/media/images/muskan-vault-14.jpg',
    type: 'image',
    aspectRatio: '3/4',
    description: 'Exploring quiet city corners at twilight.',
  },
  {
    id: 'gallery-15',
    title: 'Evening Skyline',
    category: 'Travel',
    src: '/media/images/muskan-vault-15.jpg',
    type: 'image',
    aspectRatio: '3/4',
    description: 'Panoramic skyline backdrop under dusky skies.',
  },
  {
    id: 'gallery-16',
    title: 'Rose Garden Bloom',
    category: 'Traditional',
    src: '/media/images/muskan-vault-16.jpg',
    type: 'image',
    aspectRatio: '3/4',
    description: 'Ornate floral embroidery and delicate jewelry.',
  },
  {
    id: 'gallery-17',
    title: 'High-Key Studio Glow',
    category: 'Portrait',
    src: '/media/images/muskan-vault-17.jpg',
    type: 'image',
    aspectRatio: '3/4',
    description: 'Bright luminous studio lighting and pure gaze.',
  },
  {
    id: 'gallery-18',
    title: 'Traditional Heritage',
    category: 'Traditional',
    src: '/media/images/muskan-vault-18.jpg',
    type: 'image',
    aspectRatio: '3/4',
    description: 'Timeless cultural grace with ornate craftsmanship.',
  },
  {
    id: 'gallery-19',
    title: 'Warm Gentle Smile',
    category: 'Portrait',
    src: '/media/images/muskan-vault-19.jpg',
    type: 'image',
    aspectRatio: '3/4',
    description: 'Gentle natural smile radiating quiet confidence.',
  },
  {
    id: 'gallery-20',
    title: 'Festive Gold Shimmer',
    category: 'Festive',
    src: '/media/images/muskan-vault-20.jpg',
    type: 'image',
    aspectRatio: '3/4',
    description: 'Shimmering festive details for celebration.',
  },
  {
    id: 'gallery-21',
    title: 'Candid Laugh',
    category: 'Candid',
    src: '/media/images/muskan-vault-21.jpg',
    type: 'image',
    aspectRatio: '3/4',
    description: 'In-between moments and real genuine laughter.',
  },
  {
    id: 'gallery-22',
    title: 'Celebration Day',
    category: 'Festive',
    src: '/media/images/muskan-vault-22.jpg',
    type: 'image',
    aspectRatio: '3/4',
    description: 'Vibrant ceremonial energy and rich fabrics.',
  },
  {
    id: 'gallery-23',
    title: 'Festive Aura',
    category: 'Festive',
    src: '/media/images/muskan-vault-23.jpg',
    type: 'image',
    aspectRatio: '3/4',
    description: 'Radiant celebration atmosphere and classic jewelry.',
  },
  {
    id: 'gallery-24',
    title: 'Ethnic Elegance',
    category: 'Traditional',
    src: '/media/images/muskan-vault-24.jpg',
    type: 'image',
    aspectRatio: '3/4',
    description: 'Regal ethnic silhouette with intricate accents.',
  },
  {
    id: 'gallery-25',
    title: 'Golden Twilight Glow',
    category: 'Outdoor',
    src: '/media/images/muskan-vault-25.jpg',
    type: 'image',
    aspectRatio: '3/4',
    description: 'Deep golden hour light illuminating candid elegance.',
  },
  {
    id: 'gallery-26',
    title: 'Festive Radiance',
    category: 'Festive',
    src: '/media/images/muskan-vault-26.jpg',
    type: 'image',
    aspectRatio: '3/4',
    description: 'Joyous festive celebration portrait.',
  },
  {
    id: 'gallery-27',
    title: 'Moody Editorial Depth',
    category: 'Portrait',
    src: '/media/images/muskan-vault-27.jpg',
    type: 'image',
    aspectRatio: '3/4',
    description: 'Dark dramatic editorial composition.',
  },
  {
    id: 'gallery-28',
    title: 'Signature Gaze',
    category: 'Portrait',
    src: '/media/images/muskan-vault-28.jpg',
    type: 'image',
    aspectRatio: '3/4',
    description: 'Direct compelling gaze with refined minimalism.',
  },
  {
    id: 'gallery-29',
    title: 'Classic Charm',
    category: 'Traditional',
    src: '/media/images/muskan-vault-29.jpg',
    type: 'image',
    aspectRatio: '3/4',
    description: 'Understated elegance in ethnic attire.',
  },
  {
    id: 'gallery-30',
    title: 'Quiet Confidence',
    category: 'Portrait',
    src: '/media/images/muskan-vault-30.jpg',
    type: 'image',
    aspectRatio: '3/4',
    description: 'Poised and serene portrait in ambient natural light.',
  },
  {
    id: 'gallery-31',
    title: 'Evening Atmosphere',
    category: 'Travel',
    src: '/media/images/muskan-vault-31.jpg',
    type: 'image',
    aspectRatio: '3/4',
    description: 'Capturing atmospheric evening moods on the go.',
  },
  {
    id: 'gallery-32',
    title: 'Sun-Kissed Silhouette',
    category: 'Outdoor',
    src: '/media/images/muskan-vault-32.jpg',
    type: 'image',
    aspectRatio: '3/4',
    description: 'Warm sun rays framing a delicate silhouette.',
  },
  {
    id: 'gallery-33',
    title: 'Authentic Unfiltered',
    category: 'Candid',
    src: '/media/images/muskan-vault-33.jpg',
    type: 'image',
    aspectRatio: '3/4',
    description: '100% natural, unedited, candid real-life capture.',
  },
];

export const GALLERY_CATEGORIES = [
  'All',
  'Festive',
  'Traditional',
  'Outdoor',
  'Travel',
  'Portrait',
  'Candid',
];

/**
 * 4 Themed Tile Collections for the Homepage Gallery
 * Each tile holds multiple images with selectable options
 */
export interface GalleryTileCollection {
  id: string;
  themeTitle: string;
  category: string;
  tag: string;
  images: MediaItem[];
}

export const HOMEPAGE_GALLERY_TILES: GalleryTileCollection[] = [
  {
    id: 'tile-festive',
    themeTitle: 'FESTIVE & CEREMONY',
    category: 'Festive',
    tag: '01 / CELEBRATION',
    images: [
      GALLERY_ITEMS[4],  // Festive Crimson Grace
      GALLERY_ITEMS[5],  // Crimson Radiance
      GALLERY_ITEMS[19], // Festive Gold Shimmer
      GALLERY_ITEMS[21], // Celebration Day
      GALLERY_ITEMS[22], // Festive Aura
      GALLERY_ITEMS[25], // Festive Radiance
    ],
  },
  {
    id: 'tile-traditional',
    themeTitle: 'TRADITIONAL & HERITAGE',
    category: 'Traditional',
    tag: '02 / HERITAGE',
    images: [
      GALLERY_ITEMS[6],  // Midnight Velvet
      GALLERY_ITEMS[15], // Rose Garden Bloom
      GALLERY_ITEMS[17], // Traditional Heritage
      GALLERY_ITEMS[23], // Ethnic Elegance
      GALLERY_ITEMS[28], // Classic Charm
    ],
  },
  {
    id: 'tile-outdoor',
    themeTitle: 'GOLDEN HOUR & OUTDOOR',
    category: 'Outdoor',
    tag: '03 / GOLDEN HOUR',
    images: [
      GALLERY_ITEMS[0],  // Golden Hour Radiance
      GALLERY_ITEMS[1],  // Sunlit Terrace Glance
      GALLERY_ITEMS[2],  // Dusk Serenity
      GALLERY_ITEMS[10], // Terrace Sunset Mood
      GALLERY_ITEMS[24], // Golden Twilight Glow
      GALLERY_ITEMS[31], // Sun-Kissed Silhouette
    ],
  },
  {
    id: 'tile-portrait',
    themeTitle: 'PORTRAIT & CANDID',
    category: 'Portrait',
    tag: '04 / UNFILTERED',
    images: [
      GALLERY_ITEMS[3],  // Intimate Warmth
      GALLERY_ITEMS[9],  // Minimalist Tone
      GALLERY_ITEMS[12], // Editorial Shadow Play
      GALLERY_ITEMS[16], // High-Key Studio Glow
      GALLERY_ITEMS[18], // Warm Gentle Smile
      GALLERY_ITEMS[26], // Moody Editorial Depth
      GALLERY_ITEMS[27], // Signature Gaze
      GALLERY_ITEMS[29], // Quiet Confidence
      GALLERY_ITEMS[32], // Authentic Unfiltered
    ],
  },
];
