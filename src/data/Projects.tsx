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
];
