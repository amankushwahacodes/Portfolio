import { ProjectCardProps } from "@/components/sections/Projects/ProjectCard";

export const projectsData: ProjectCardProps[] = [
  {
    title: "Lodgic – Booking & Operations Management",
    href: "https://lodgic-app.netlify.app/",
    github: "https://github.com/amankushwahacodes/lodgic",
    description:
      "A booking and operations management system for lodging businesses. Built with a modern frontend, real-time data synchronization, authentication, and dashboards to manage reservations and daily operations.",
    status: "completed",
    image: "/Projects/projectPreview.jpg",
    technologies: ["React", "Supabase", "React Query", "Styled Components"],
    type: "Full Stack",
  },
  {
    title: "Natours – Tour Booking Platform",
    href: "https://natours-5fkg.onrender.com/",
    github: "https://github.com/amankushwahacodes/natours",
    description:
      "A full-stack tour booking application with user authentication, role-based access control, Stripe payments, and RESTful APIs. Includes features like bookings, reviews, admin dashboards, and secure JWT-based authentication.",
    status: "completed",
    image: "/Projects/BannerNatours.png",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Stripe"],
    type: "Full Stack",
  },
  {
    title: "Orderly",
    href: "https://orderly-food-app.vercel.app/",
    github: "https://github.com/amankushwahacodes/Orderly",
    description:
      "A client-side food ordering interface focused on predictable state management and smooth user flows. Features include cart management, order placement with validation, persistent order history using localStorage, and detailed order views.",
    status: "completed",
    image: "/Projects/BannerOrderly.png", // update if you use a different banner
    technologies: [
      "React",
      "React Router",
      "Redux Toolkit",
      "Tailwind CSS",
      "Vite",
    ],
    type: "Frontend",
  },
];
