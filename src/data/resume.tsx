import { Icons } from "@/components/icons";
import { FolderIcon, HomeIcon, NotebookIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { Angular } from "@/components/ui/svgs/angular";
import { Tensorflow } from "@/components/ui/svgs/tensorflow";
import { Php } from "@/components/ui/svgs/php";
import { Tailwind } from "@/components/ui/svgs/tailwind";
import { Figma } from "@/components/ui/svgs/figma";
import { Laravel } from "@/components/ui/svgs/laravel";
import { Mysql } from "@/components/ui/svgs/mysql";

export type Project = {
  title: string;
  slug: string;
  href: string;
  dates: string;
  active: boolean;
  featured: boolean;
  year: number;
  category: string;
  description: string;
  technologies: string[];
  links: {
    type: string;
    href: string;
    icon: ReactNode;
  }[];
  image: string;
  video: string;
};

export const DATA = {
  name: "Yusuf",
  initials: "MY",
  url: "https://cornfuze.github.io/portofolio",
  location: "Surakarta, ID",
  locationLink: "https://www.google.com/maps/place/surakarta",
  description:
    "Tech enthusiast and passionate about solving real-world problems with innovative solutions.",
  summary:
    "I’m a tech enthusiast and a student with a growing passion for technology and business. I enjoy learning new skills, working on projects, and exploring how technology can solve real-world problems. With a curious mindset and a drive to improve, I’m eager to gain more experience and contribute to impactful solutions. Let’s connect and grow together!",
  avatarUrl: "/me.png",
  skills: [
    { name: "Angular", icon: Angular },
    { name: "Laravel", icon: Laravel },
    { name: "TensorFlow", icon: Tensorflow },
    { name: "TypeScript", icon: Typescript },
    { name: "Python", icon: Python },
    { name: "MySQL", icon: Mysql },
    { name: "Tailwind CSS", icon: Tailwind },
    { name: "Figma", icon: Figma },
    { name: "PHP", icon: Php },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: FolderIcon, label: "Projects" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "muhyusuf.sungkar@example.com",
    tel: "+6285161804841",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/cornfuze",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://id.linkedin.com/in/em-yusuf",
        icon: Icons.linkedin,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@Emyusuf557",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:muhyusuf.sungkar@example.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "BPTD Kelas II Jawa Tengah",
      href: "https://hubdat.dephub.go.id/id/bptd/jateng/bptd-kelas-1-jateng/",
      badges: ["Maganghub Kemnaker"],
      location: "Klaten, Central Java",
      title: "Web Developer / Operational Staff",
      logoUrl: "/bptd.png",
      start: "Dec 2025",
      end: "May 2026",
      description:
        "Spearheaded the digital transformation of public transport services during the Maganghub program. While officially handling operational duties, I took the initiative to architect, develop, and deploy the official public information system for Ir. Soekarno Type-A Terminal (ttairsoekarno.id). I utilized the TALL stack, implemented automated CI/CD pipelines, and built internal web portals to streamline daily operational data.",
    },
    {
      company: "Enuma Technology",
      href: "https://www.enumatechnology.com/",
      badges: [],
      location: "Tohudan, Colomadu",
      title: "Software Engineer Intern",
      logoUrl: "/enuma.png",
      start: "Aug 2024",
      end: "Jan 2025",
      description:
        "My internship at Enuma Technology and MersifLab was a transformative experience, where I developed the Heyra app using Angular, gained Machine Learning visualization skills with Tensorflow, and honed project management and teamwork abilities. Guided by Agile methodology, I gained valuable insights into the professional world, fueling my passion for continuous learning and growth.",
    },
  ],
  education: [
    {
      school: "Duta Bangsa University",
      href: "https://udb.ac.id/",
      degree: "Bachelor's degree of Computer Science.",
      logoUrl: "/udb.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Ir. Soekarno Type-A Terminal",
      slug: "irsoekarno-type-a-terminal",
      href: "https://ttairsoekarno.id/",
      dates: "Jan 2026 - March 2026",
      active: true,
      featured: true,
      year: 2026,
      category: "Information System",
      description:
        "An integrated public information system for the Ir. Soekarno Type-A Terminal in Klaten, providing real-time bus schedules, passenger facility guides, and the latest operational news.",
      technologies: [
        "TALL Stack",
        "Laravel",
        "Tailwind CSS",
        "Livewire",
        "Alpine.js",
        "MySQL",
        "GitHub Actions",
        "Hostinger",
      ],
      links: [
        {
          type: "Website",
          href: "https://ttairsoekarno.id/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/webterminal.webp",
      video: "",
    },
    {
      title: "Real-time Gesture Control",
      slug: "gesture-control-globe",
      href: "https://cornfuze.github.io/interactive-globe-gesture-control/",
      dates: "Jun 2025",
      active: true,
      featured: true,
      year: 2025,
      category: "Creative Web",
      description:
        "A 3D interactive globe application controlled in real-time by hand gestures. This project utilizes Computer Vision through a webcam to track hand movements and translate them into commands for manipulating 3D objects.",
      technologies: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "Computer Vision",
        "MediaPipe JS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/cornfuze/interactive-globe-gesture-control",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://cornfuze.github.io/interactive-globe-gesture-control/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Globe.webp",
      video: "",
    },
    {
      title: "OMR Grader",
      slug: "omr-grader",
      href: "https://cornfuzeomr.streamlit.app/",
      dates: "July 2025",
      active: true,
      featured: true,
      year: 2025,
      category: "AI Tooling",
      description:
        "An interactive web application built with Computer Vision and Streamlit to automate the tedious process of exam correction. It scans Optical Mark Recognition (OMR) sheets and provides instant, accurate grading and analysis.",
      technologies: [
        "Python",
        "Streamlit",
        "OpenCV",
        "Computer Vision",
        "NumPy",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/cornfuze/omr-streamlit-app",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://cornfuzeomr.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/OMR.webp",
      video: "",
    },
    {
      title: "Heyra",
      slug: "heyra",
      href: "https://github.com/cornfuze/heyra",
      dates: "Sep 2024 - Dec 2025",
      active: true,
      featured: true,
      year: 2024,
      category: "Accessibility",
      description:
        "Heyra is a machine learning-based platform that is able to translate sign language into text or voice in real-time, while providing interactive animations to learn and communicate with sign language easily and inclusively.",
      technologies: [
        "Angular",
        "Typescript",
        "Flask",
        "TensorFlow",
        "TailwindCSS",
        "Python",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/cornfuze/heyra",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Heyra.webp",
      video: "",
    },
    {
      title: "Gaoxy",
      slug: "gaoxy",
      href: "https://github.com/cornfuze/gaoxy",
      dates: "Aug 2024 - Nov 2024",
      active: true,
      featured: false,
      year: 2024,
      category: "Sustainability",
      description:
        "Microalgae-Based Facade System as an Implementation of Eco-Smart Building.",
      technologies: [
        "Angular",
        "Typescript",
        "Ionic",
        "Firebase",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/cornfuze/gaoxy",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Gaoxy.webp",
      video: "",
    },
  ] satisfies Project[],
  hackathons: [
    {
      title: "TDC ITS For Startups 2024",
      dates: "Nov 16, 2024",
      location: "Surabaya, East Java",
      description:
        "I participated in the TDC ITS for Startup competition, where my team, Empower Play, reached the grand final top 5 by developing the Heyra application.",
      image: "/tsf2024.jpg",
    },
    {
      title: "INVENTION 2024 UDAYANA",
      dates: "Sep 06, 2024",
      location: "Online",
      description:
        "I participated in the 2024 Invention competition at Udayana University, focusing on Designing Inclusive User Experiences for Indonesia's Digital Renaissance, by developing the UI/UX design for the Heyra app",
      image: "/invention2024.jpg",
    },
    {
      title: "I/O Fest UNTAR 2024",
      dates: "May 12th, 2024",
      location: "Online",
      description: "Developed a mock of Empower Play Game with Kinect Sensor.",
      image:
        "https://4get.ca/proxy?i=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.HhLAVEaPteiAgWbRSCYEBwAAAA&s=thumb%22",
    },
    {
      title: "FTTI Competition",
      dates: "April 29, 2024",
      location: "Online",
      description:
        "UI/UX Design Competition by HMSI UNJAYA: Empowering Everyday Lives, my team developed Gaoxy UI/UX Design for Microalgae-Based Facade System as an Implementation of Eco-Smart Building.",
      image:
        "https://4get.ca/proxy?i=https%3A%2F%2Fugc.production.linktr.ee%2F58c1c15e-9a80-4944-bb96-c2b4f58a4370_Logo-HMSI.png%3Fio%3Dtrue%26size%3Davatar-v3_0",
    },
  ],
};
