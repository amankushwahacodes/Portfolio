import {
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
// Framer Motion icon removed (not used)
import {
  SiC,
  SiCplusplus,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNetlify,

  SiPostman,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiRender,
  SiStyledcomponents,
  SiSupabase,
  SiVercel,
  SiVite,
} from "react-icons/si";



type ButtonVariant =
  | "outline"
  | "link"
  | "default"
  | "destructive"
  | "secondary"
  | "ghost";

type Category = "language" | "web" | "mobile" | "database" | "devops" | "tools";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  variant: ButtonVariant;
  category: Category;
  size?: string;
}

export const techSkills: Skill[] = [
  // 💻 Languages

  {
    name: "React",
    icon: FaReact,
    color: "text-cyan-500",
    variant: "secondary",
    category: "web",
    size: "w-6 h-6",
  },

  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-600",
    variant: "secondary",
    category: "web",
    size: "w-6 h-6",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "text-gray-600",
    variant: "secondary",
    category: "web",
    size: "w-6 h-6",
  },

  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-500",
    variant: "secondary",
    category: "web",
    size: "w-6 h-6",
  },

  {
    name: "JavaScript",
    icon: FaJs,
    color: "text-yellow-500",
    variant: "ghost",
    category: "language",
    size: "w-6 h-6",
  },
  {
    name: "C++",
    icon: SiCplusplus,
    color: "text-blue-500",
    variant: "secondary",
    category: "language",
    size: "w-6 h-6",
  },
  {
    name: "C",
    icon: SiC,
    color: "text-blue-600",
    variant: "secondary",
    category: "language",
    size: "w-6 h-6",
  },
  {
    name: "Tailwind",
    icon: RiTailwindCssFill,
    color: "text-cyan-600",
    variant: "ghost",
    category: "web",
    size: "w-6 h-6",
  },
  {
    name: "Styled Components",
    icon: SiStyledcomponents,
    color: "text-pink-500",
    variant: "ghost",
    category: "web",
    size: "w-6 h-6",
  },

  {
    name: "Supabase",
    icon: SiSupabase,
    color: "text-emerald-600",
    variant: "ghost",
    category: "web",
    size: "w-6 h-6",
  },

  {
    name: "MySQL",
    icon: SiMysql,
    color: "text-blue-700",
    variant: "ghost",
    category: "web",
    size: "w-6 h-6",
  },

  {
    name: "Postman",
    icon: SiPostman,
    color: "text-orange-500",
    variant: "ghost",
    category: "web",
    size: "w-6 h-6",
  },
  {
    name: "Vite",
    icon: SiVite,
    color: "text-purple-500",
    variant: "ghost",
    category: "web",
    size: "w-6 h-6",
  },

  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-red-600",
    variant: "ghost",
    category: "web",
    size: "w-6 h-6",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "text-gray-900 dark:text-white",
    variant: "ghost",
    category: "web",
    size: "w-6 h-6",
  },
  {
    name: "Render",
    icon: SiRender,
    color: "text-indigo-600",
    variant: "ghost",
    category: "web",
    size: "w-6 h-6",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "text-black dark:text-white",
    variant: "ghost",
    category: "web",
    size: "w-6 h-6",
  },
];
