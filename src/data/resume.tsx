import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Yusuf",
  initials: "MY",
  url: "https://github.io",
  location: "Surakarta, ID",
  locationLink: "https://www.google.com/maps/place/surakarta",
  description:
    "Tech enthusiast and passionate about solving real-world problems with innovative solutions.",
  summary:
    "I’m a tech enthusiast and a student with a growing passion for technology and business. I enjoy learning new skills, working on projects, and exploring how technology can solve real-world problems. With a curious mindset and a drive to improve, I’m eager to gain more experience and contribute to impactful solutions. Let’s connect and grow together!",
  avatarUrl: "/me.png",
  skills: [
    "Angular",
    "TensorFlow",
    "Typescript",
    "Node.js",
    "Python",
    "PHP",
    "Tailwind",
    "Figma",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
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
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
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
      school: "Duta Bangsa University ",
      href: "https://udb.ac.id/",
      degree: "Bachelor's degree of Computer Science.",
      logoUrl: "/udb.png",
      start: "2021",
      end: "2025",
    },

  ],
  projects: [
    {
      title: "Real-time Gesture Control",
      href: "",
      dates: "Jun 2025",
      active: true,
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
      image: "/globe.png",
      video:
        "",
    },
    {
      title: "OMR Grader: Automated Exam Scoring System",
      href: "",
      dates: "July 2025",
      active: true,
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
      image: "/OMR.png",
      video:
        "",
    },
    {
      title: "Heyra",
      href: "",
      dates: "Sep 2024 - Dec 2025",
      active: true,
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
      image: "/heyra.png",
      video:
        "",
    },
    {
      title: "Gaoxy",
      href: "",
      dates: "Aug 2024 - Nov 2024",
      active: true,
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
      image: "/gaoxy.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "TDC ITS For Starups 2024",
      dates: "Nov 16, 2024",
      location: "Surabaya, East Java",
      description:
        "I participated in the TDC ITS for Startup competition, where my team, Empower Play, reached the grand final top 5 by developing the Heyra application.",
      image:
        "/tsf2024.jpg",
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
      description:
        "Developed a mock of Empower Play Game with Kinect Sensor.",
      image:
        "https://4get.ducks.party/proxy?i=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.HhLAVEaPteiAgWbRSCYEBwAAAA&s=thumb",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cornfuze",
        },
      ],
    },
    {
      title: "FTTI Competition",
      dates: "April 29, 2024",
      location: "Online",
      description:
        "UI/UX Design Competition by HMSI UNJAYA: Empowering Everyday Lives, my team developed Gaoxy UI/UX Design for Microalgae-Based Facade System as an Implementation of Eco-Smart Building.",
      image:
        "https://4get.ducks.party/proxy?i=https%3A%2F%2Fugc.production.linktr.ee%2F58c1c15e-9a80-4944-bb96-c2b4f58a4370_Logo-HMSI.png%3Fio%3Dtrue%26size%3Davatar-v3_0",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Cornfuze",
        },
      ],
    },
  ],
} as const;
