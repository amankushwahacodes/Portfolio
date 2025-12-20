export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

export const siteConfig = {
  name: "Aman Kushwaha",
  title: "Aman Kushwaha",
  description: "Full Stack Developer building practical, production-ready web applications.",
  url: process.env.NEXT_PUBLIC_URL || "http://localhost:3000",
  ogImage: "/meta/opengraph-image.png",

  author: {
    name: "Aman Kushwaha",
    github: "amankushwahacodes",
    linkedin: "amankushwahacodes",
    email: "amankushwaha.codes@gmail.com",
  },

  keywords: [
    "portfolio",
    "full stack developer",
    "react",
    "nextjs",
    "nodejs",
    "javascript",
    "web development",
    "software engineer",
  ],
};


export const pageMetadata: Record<string, PageMeta> = {
  '/blog': {
    title: 'Blog - Thoughts & Tutorials',
    description:
      'Read my thoughts, tutorials, and insights on engineering, programming, and web development.',
    keywords: [
      'blog',
      'tutorials',
      'programming',
      'web development',
      'technical writing',
    ],
    ogImage: '/meta/blogs.png',
    twitterCard: 'summary_large_image',
  },


  };
