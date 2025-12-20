export const siteConfig = {
  name: "Aman Kushwaha",
  description:
    "Explore more about Aman Kushwaha, including his projects, education, and certifications.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: "",
  // Use placeholder.png as the canonical icon. Add a cache-busting query string
  // so browsers pick up updates (Safari can be aggressive with caching).
  icons: {
    icon: "/placeholder.png?v=2",
    apple: "/placeholder.png?v=2",
    shortcut: "/placeholder.png?v=2",
  },
};