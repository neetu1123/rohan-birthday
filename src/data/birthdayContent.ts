/**
 * Edit this file to personalize the birthday surprise.
 * Photos: drop files into public/images using the paths below.
 * Music: add public/audio/birthday-music.mp3 (soft instrumental only).
 * Run locally with: npm install && npm run dev
 */

export const music = {
  src: "/audio/birthday-music.mp3",
};

function photo(file: string) {
  return `/${encodeURIComponent(file)}`;
}

export const navigation = [
  { id: "hero", label: "Birthday" },
  { id: "story", label: "Story" },
  { id: "gallery", label: "Moments" },
  { id: "reasons", label: "You" },
  { id: "letter", label: "Letter" },
  { id: "dreams", label: "Tomorrow" },
  { id: "finale", label: "Wish" },
] as const;

export const intro = {
  lines: [
    "Some people enter our lives...",
    "And somehow become a part of our every tomorrow.",
    "Today is about one such person.",
  ],
  name: "Rohan Chourasia",
  hint: "Something special is waiting for you.",
  openButton: "Open Your Surprise ✨",
  skip: "Skip",
  signature: "A little gift, made with love",
};

export const hero = {
  greeting: "Happy Birthday",
  name: "Rohan Chourasia",
  subheading:
    "To my favourite person, my best friend, and the one who holds a very special place in my heart.",
  discover: "Discover Your Surprise",
  letter: "A Letter For You",
  portrait: photo("WhatsApp Image 2026-10-16 at 6.55.02 PM.jpeg"),
  portraitAlt: "Rohan smiling on a rooftop in the daylight",
};

export type Chapter = {
  id: string;
  number: string;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
};

export const story = {
  title: "Every Beautiful Story Has Its Own Beginning.",
  text: "Some stories are not written in books. They are built through little moments, unexpected laughter, conversations, and the people who slowly become important.",
  chapters: [
    {
      id: "beginning",
      number: "01",
      title: "The Beginning",
      body: "Every meaningful story starts somewhere. This is where ours begins.",
      image: photo("WhatsApp Image 2026-10-16 at 6.52.26 PM.jpeg"),
      imageAlt: "Rohan standing in the river shallows with a friend, hills behind them",
    },
    {
      id: "friendship",
      number: "02",
      title: "The Friendship",
      body: "Some people make ordinary days feel a little less ordinary.",
      image: photo("WhatsApp Image 2026-10-16 at 6.52.26 PM (1).jpeg"),
      imageAlt: "Rohan with friends on a balcony among the trees",
    },
    {
      id: "little-things",
      number: "03",
      title: "The Little Things",
      body: "Small conversations. Random laughter. Moments that somehow stay with us.",
      image: photo("WhatsApp Image 2026-10-16 at 6.52.26 PM (2).jpeg"),
      imageAlt: "Rohan and a friend standing together under a colonnade at night",
    },
    {
      id: "unspoken",
      number: "04",
      title: "The Unspoken",
      body: "Sometimes the heart has a thousand things to say, even when words fall short.",
      image: photo("WhatsApp Image 2026-10-16 at 6.55.02 PM (3).jpeg"),
      imageAlt: "Rohan smiling in warm sunset light beside an airplane window",
    },
    {
      id: "ahead",
      number: "05",
      title: "The Story Ahead",
      body: "Some of the most beautiful chapters are the ones we have not lived yet.",
      image: photo("WhatsApp Image 2026-10-16 at 6.55.02 PM (2).jpeg"),
      imageAlt: "Rohan smiling in front of a water park on a sunny day",
    },
  ] as Chapter[],
};

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export const gallery = {
  title: "Little Moments. Beautiful Feelings.",
  text: "If moments could be kept forever, these are the ones I would save.",
  items: [
    {
      src: photo("WhatsApp Image 2026-10-16 at 6.55.02 PM.jpeg"),
      alt: "Rohan smiling on a rooftop in the daylight",
      caption: "A moment worth remembering.",
    },
    {
      src: photo("WhatsApp Image 2026-10-16 at 6.52.26 PM (1).jpeg"),
      alt: "Rohan with friends on a balcony among the trees",
      caption: "One for the memory book.",
    },
    {
      src: photo("WhatsApp Image 2026-10-16 at 6.52.26 PM.jpeg"),
      alt: "Rohan standing in the river shallows with a friend",
      caption: "Little things, lasting feelings.",
    },
    {
      src: photo("WhatsApp Image 2026-10-16 at 6.52.26 PM (2).jpeg"),
      alt: "Rohan and a friend together under a colonnade at night",
      caption: "Some moments need no explanation.",
    },
    {
      src: photo("WhatsApp Image 2026-10-16 at 6.55.02 PM (1).jpeg"),
      alt: "Rohan in a cream kurta beside a loved one, with festive lights behind them",
      caption: "The story is still unfolding.",
    },
    {
      src: photo("WhatsApp Image 2026-10-16 at 6.55.02 PM (2).jpeg"),
      alt: "Rohan smiling in front of a water park",
      caption: "A memory waiting to be added.",
    },
    {
      src: photo("WhatsApp Image 2026-10-16 at 6.55.02 PM (3).jpeg"),
      alt: "Rohan smiling in sunset light beside an airplane window",
      caption: "A moment worth remembering.",
    },
    {
      src: photo("WhatsApp Image 2026-10-16 at 6.55.03 PM.jpeg"),
      alt: "A close portrait of Rohan in a white shirt",
      caption: "One for the memory book.",
    },
    {
      src: photo("WhatsApp Image 2026-10-16 at 6.55.03 PM (1).jpeg"),
      alt: "Rohan standing in front of an amber sandstone fort",
      caption: "Little things, lasting feelings.",
    },
    {
      src: photo("WhatsApp Image 2026-10-16 at 6.55.03 PM (2).jpeg"),
      alt: "Rohan taking a mirror selfie in a blue shirt",
      caption: "Some moments need no explanation.",
    },
    {
      src: photo("WhatsApp Image 2026-10-16 at 6.55.03 PM (3).jpeg"),
      alt: "Rohan sharing a meal with friends",
      caption: "The story is still unfolding.",
    },
    {
      src: photo("WhatsApp Image 2026-10-16 at 6.55.04 PM.jpeg"),
      alt: "Rohan smiling in a dark suit and blue tie",
      caption: "A memory waiting to be added.",
    },
    {
      src: photo("WhatsApp Image 2026-10-16 at 6.55.04 PM (1).jpeg"),
      alt: "Rohan standing by a railing above the clouds",
      caption: "A moment worth remembering.",
    },
    {
      src: photo("WhatsApp Image 2026-10-16 at 6.55.04 PM (2).jpeg"),
      alt: "Rohan in a striped shirt, sitting by a window",
      caption: "One for the memory book.",
    },
    {
      src: photo("WhatsApp Image 2026-10-16 at 6.55.05 PM.jpeg"),
      alt: "Rohan looking out over a valley of clouds",
      caption: "Little things, lasting feelings.",
    },
    {
      src: photo("WhatsApp Image 2026-10-16 at 6.55.05 PM (1).jpeg"),
      alt: "Rohan smiling at a restaurant table",
      caption: "Some moments need no explanation.",
    },
    {
      src: photo("WhatsApp Image 2026-10-16 at 6.55.05 PM (2).jpeg"),
      alt: "Rohan leaning on a railing with hills behind him",
      caption: "The story is still unfolding.",
    },
    {
      src: photo("WhatsApp Image 2026-10-16 at 6.55.05 PM (3).jpeg"),
      alt: "Rohan with a loved one at home",
      caption: "A memory waiting to be added.",
    },
    {
      src: photo("WhatsApp Image 2026-10-16 at 6.55.06 PM.jpeg"),
      alt: "Rohan in a yellow shirt beside a loved one",
      caption: "A moment worth remembering.",
    },
    {
      src: photo("WhatsApp Image 2026-10-16 at 6.55.06 PM (1).jpeg"),
      alt: "Rohan with a loved one outside a temple",
      caption: "One for the memory book.",
    },
    {
      src: photo("WhatsApp Image 2026-10-16 at 6.56.14 PM.jpeg"),
      alt: "Rohan with family on a sofa at home",
      caption: "Little things, lasting feelings.",
    },
    {
      src: photo("WhatsApp Image 2026-10-16 at 6.56.15 PM.jpeg"),
      alt: "Rohan standing beside a wall of theatre lights",
      caption: "Some moments need no explanation.",
    },
    {
      src: photo("WhatsApp Image 2026-10-16 at 6.56.15 PM (1).jpeg"),
      alt: "Rohan standing on river steps under a wide sky",
      caption: "The story is still unfolding.",
    },
    {
      src: photo("WhatsApp Image 2026-10-16 at 6.56.15 PM (2).jpeg"),
      alt: "Rohan with family gathered together at home",
      caption: "A memory waiting to be added.",
    },
  ] satisfies GalleryItem[],
};

export type Reason = {
  id: string;
  number: string;
  title: string;
  message: string;
};

export const reasons = {
  title: "If You Ever Wonder How Special You Are...",
  cards: [
    {
      id: "smile",
      number: "01",
      title: "Your Smile",
      message: "Your smile has a way of making an ordinary day feel special.",
    },
    {
      id: "presence",
      number: "02",
      title: "Your Presence",
      message: "Some people make life feel lighter simply by being themselves.",
    },
    {
      id: "dreams",
      number: "03",
      title: "Your Dreams",
      message: "I hope you always find the courage to chase the life you imagine.",
    },
    {
      id: "happiness",
      number: "04",
      title: "Your Happiness",
      message: "May you always have reasons to laugh, celebrate, and feel proud of yourself.",
    },
    {
      id: "heart",
      number: "05",
      title: "Your Heart",
      message: "I hope life gives back all the kindness and happiness you deserve.",
    },
    {
      id: "you",
      number: "06",
      title: "Just You",
      message: "And perhaps the simplest reason of all: you are someone incredibly special to me.",
    },
  ] satisfies Reason[],
};

export const letter = {
  title: "Some Things Are Better Said From The Heart.",
  hint: "A little letter, just for you.",
  openButton: "Open My Letter 💌",
  greeting: "My Dear Rohan,",
  paragraphs: [
    "Happy Birthday to someone who means more to me than I can always put into words.",
    "Today, I just want to celebrate you — the person you are, the dreams you carry, the smiles you bring, and all the beautiful possibilities waiting ahead of you.",
    "I hope this new chapter brings you success, peace, courage, endless happiness, and the strength to get through every difficult day.",
    "I hope you never stop believing in yourself. I hope you keep chasing your dreams, discovering new things, and finding little reasons to smile even on ordinary days.",
    "And if life gives me that beautiful chance, I hope I get to stand beside you through the exciting moments, the uncertain days, the silly conversations, and the memories we have not made yet.",
    "I cannot predict what tomorrow holds, but I know that having you in my life makes some moments feel a little more special.",
    "Today, I wish you everything your heart has been hoping for.",
    "Happy Birthday, Rohan Chourasia.",
    "May this year be kinder, brighter, and more beautiful than you imagined.",
    "And maybe, somewhere in the middle of all the dreams you chase, there will be a little place for me in your future too.",
  ],
  closing: "With all my love,",
  signature: "Someone who hopes to be part of your forever. ❤️",
  keep: "Keep This Moment Close",
};

export type DreamTone = "sunset" | "celebration" | "places" | "together" | "unwritten";

export type Dream = {
  title: string;
  body: string;
  tone: DreamTone;
};

export const dreams = {
  title: "Maybe One Day...",
  text: "There are little dreams that make the future feel beautiful.",
  closing:
    "Whatever the future brings, I hope it brings you countless reasons to smile. And if our paths keep moving together, I hope we make the most beautiful memories along the way.",
  cards: [
    {
      title: "Sunset Conversations",
      body: "Watching the sky change colours while talking about absolutely everything.",
      tone: "sunset",
    },
    {
      title: "A Thousand Birthdays",
      body: "Celebrating your dreams, your achievements, and many more birthdays together.",
      tone: "celebration",
    },
    {
      title: "Places Yet to Discover",
      body: "Finding beautiful places and making memories along the way.",
      tone: "places",
    },
    {
      title: "Growing Together",
      body: "Encouraging each other, learning together, and celebrating every little victory.",
      tone: "together",
    },
    {
      title: "A Story Still Unwritten",
      body: "Perhaps the most beautiful part is that we do not know all the chapters yet.",
      tone: "unwritten",
    },
  ] satisfies Dream[],
};

export const finale = {
  lead: "One Last Surprise, Birthday Boy...",
  title: "Make a Wish, Rohan. 🎂",
  button: "Make Your Birthday Wish ✨",
  message: [
    "Happy Birthday, Rohan Chourasia. ❤️",
    "May your dreams find their way to reality.",
    "May happiness find you in unexpected places.",
    "May you always have the courage to become everything you wish to be.",
    "And if I could make one wish for myself today...",
    "It would be for many more moments, conversations, and birthdays where I get to see you smile.",
    "You are special, Rohan.",
    "Never forget that.",
  ],
  signature: "Made with love, just for you.",
  replay: "Replay Our Little Story ↻",
};
