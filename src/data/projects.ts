import { IProject } from "../types";

export const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

export const projects: IProject[] = [
  {
    id: "0",
    name: "Metadent",
    url: "https://github.com/harikanani/Keep-Calm-and-Carry-On.github.io",
    description: `Built a full-featured dental clinic management system to handle appointments, patient records, billing, and inventory in a team of 25 developers.
      Used Vuejs and Tailwind CSS for the frontend, Laravel PHP for backend APIs, and MySQL for data storage.
      Integrated permission-based access control for dentists, assistants, and administrators`,
    languages: [
      {
        name: "HTML5",
        iconifyClass: "logos-html-5",
      },
      {
        name: "CSS3",
        iconifyClass: "logos-css-3",
      },
      {
        name: "NodeJs",
        iconifyClass: "logos-nodejs",
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/harikanani/Keep-Calm-and-Carry-On.github.io",
        iconifyClass: "ri:github-fill",
      },
      {
        name: "Devpost",
        url: "https://devpost.com/software/keep-calm-and-carry-on",
        iconifyClass: "fluent:window-dev-edit-20-filled",
      },
      {
        name: "Live Demo",
        url: "https://akshitagupta15june.github.io/Keep-Calm-and-Carry-On.github.io/",
        iconifyClass: "mdi:web",
      },
    ],
  },
  {
    id: "1",
    name: "Smartrides",
    url: "https://github.com/kevalvavaliya/Yog4Life",
    description:
    `Developed a real-time ride-hailing app using Flutter for the frontend and Laravel for backend services and APIs.
    Implemented geolocation tracking, ride status updates, and driver-rider communication features.
    Built a secure Laravel-based admin dashboard to manage rides, users, payments, and service areas.
    Integrated Google Maps APIs for route plotting, distance calculation, and ETA estimation.
    Handled multi-role authentication, wallet system, and ride history management for both drivers and passengers.`,
    languages: [
      {
        name: "Flutter",
        iconifyClass: "logos-flutter",
      },
      {
        name: "NodeJs",
        iconifyClass: "logos-nodejs",
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/kevalvavaliya/Yog4Life",
        iconifyClass: "ri:github-fill",
      },
      {
        name: "Devfolio",
        url: "https://devfolio.co/projects/yoglife-b20d",
        iconifyClass: "fluent:window-dev-edit-20-filled",
      },
    ],
  },
  {
    id: "2",
    name: "Lenderly",
    url: "https://github.com/kevalvavaliya/Adoptisity",
    description:
      "Our mission is to spread awareness about the benefits of adoption and to support LGBT families so that everyone has the chance to have a loving home environment.",
    languages: [
      {
        name: "HTML5",
        iconifyClass: "logos-html-5",
      },
      {
        name: "CSS3",
        iconifyClass: "logos-css-3",
      },
      {
        name: "JavaScript",
        iconifyClass: "logos-javascript",
      },
      {
        name: "Wix",
        iconifyClass: "bxl:wix",
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/harikanani/Adoptisity",
        iconifyClass: "ri:github-fill",
      },
      {
        name: "Devpost",
        url: "https://devpost.com/software/adoptisity",
        iconifyClass: "fluent:window-dev-edit-20-filled",
      },
      {
        name: "Live Demo",
        url: "https://rajmahadevwala1.wixsite.com/adoptisity",
        iconifyClass: "mdi:web",
      },
    ],
  },
  {
    id: "3",
    name: "Kaltech Stores",
    url: "https://github.com/rajmahadev8/Fin-Split",
    description:
      "Split your bills with your friends without any hassle. Manage Group Expenses, Track your expenses, and much more.",
    languages: [
      {
        name: "ReactJS",
        iconifyClass: "logos-react",
      },
      {
        name: "NodeJs",
        iconifyClass: "logos-nodejs",
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/rajmahadev8/Fin-Split",
        iconifyClass: "ri:github-fill",
      },
      {
        name: "Devpost",
        url: "https://devpost.com/software/finsplit",
        iconifyClass: "fluent:window-dev-edit-20-filled",
      },
    ],
  },
  {
    id: "4",
    name: "FundsTrans",
    url: "https://github.com/kevalvavaliya/Emosic",
    description:
      "An app that plays music according to your mood. Created a playlist management UI and used SpotifyAPI to control player client based on mood detection using ml model.",
    languages: [
      {
        name: "HTML5",
        iconifyClass: "logos-html-5",
      },
      {
        name: "CSS3",
        iconifyClass: "logos-css-3",
      },
      {
        name: "Python",
        iconifyClass: "logos-python",
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/kevalvavaliya/Emosic",
        iconifyClass: "ri:github-fill",
      },
      {
        name: "Devpost",
        url: "https://devpost.com/software/emosic",
        iconifyClass: "fluent:window-dev-edit-20-filled",
      },
    ],
  },
  {
    id: "5",
    name: "AutoDoc",
    url: "https://github.com/harikanani/e-commerce-frontend",
    description:
      "An E-commerce website built using MERN[Mongo, Express, React, Node] stack and we have also added stripe payment gateway integration [in test mode].",
    languages: [
      {
        name: "ReactJS",
        iconifyClass: "logos-react",
      },
      {
        name: "NodeJS",
        iconifyClass: "logos-nodejs",
      },
      {
        name: "MedusaJS",
        iconifyClass: "logos-medusa-icon",
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/harikanani/e-commerce-frontend",
        iconifyClass: "ri:github-fill",
      },
    ],
  },
  {
    id: "6",
    name: "Pro AIConnect",
    url: "https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io",
    description:
      `Built a smart matchmaking app in Flutter with AI-powered profile recommendations and natural language chat prompts.
    Designed swipe-based UI, secure authentication, and in-app messaging features with Firebase and Firestore.
    Implemented push notifications, real-time chat updates, and block/report features for user safety.
    `,
    languages: [
      {
        name: "Flutter",
        iconifyClass: "vscode-icons:file-type-html",
      },
      {
        name: "Tailwind",
        iconifyClass: "vscode-icons:file-type-css",
      },
      {
        name: "Typescript",
        iconifyClass: "logos-javascript",
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io",
        iconifyClass: "ri:github-fill",
      },
      {
        name: "Live Demo",
        url: "https://bauddhikgeeks.co/",
        iconifyClass: "mdi:web",
      },
    ],
  },
  {
    id: "7",
    name: "Offline-Sync Module",
    url: "https://github.com/abhigoyani/votechain",
    description:
      `Developed an offline-first module using Laravel and IndexedDB to enable data collection without internet connectivity.
    Optimized API responses and reduced payload size for performance on low-bandwidth networks.
   Used Laravel queues and jobs to handle background sync and ensure reliable data persistence.`,
    languages: [
      {
        name: "Flask",
        iconifyClass: "logos-flask",
      },
      {
        name: "Python",
        iconifyClass: "logos-python",
      },
      {
        name: "HTML5",
        iconifyClass: "logos-html-5",
      },
      {
        name: "CSS3",
        iconifyClass: "logos-css-3",
      },
      {
        name: "MongoDB",
        iconifyClass: "logos-mongodb-icon",
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/abhigoyani/votechain",
        iconifyClass: "ri:github-fill",
      },
    ],
  },
  {
    id: "8",
    name: "Inputi",
    url: "https://github.com/rajmahadev8/Fin-Split",
    description: `Developed a cross-platform mobile application using Flutter to simplify ordering of seeds, fertilizers, and tools for farmers.
   Integrated Firebase for authentication, real-time data storage, and push notifications.
   Implemented offline support and local caching for low-connectivity regions.`,
    languages: [
      {
        name: "ReactJS",
        iconifyClass: "logos-react",
      },
      {
        name: "NodeJs",
        iconifyClass: "logos-nodejs",
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/rajmahadev8/Fin-Split",
        iconifyClass: "ri:github-fill",
      },
      {
        name: "Devpost",
        url: "https://devpost.com/software/finsplit",
        iconifyClass: "fluent:window-dev-edit-20-filled",
      },
    ],
  },
  {
    id: "13",
    name: "GitHub Portfolio",
    url: "https://muhammedkasujja.github.io/portfolio/",
    description:
      "A Personal Portfolio Website that showcases my work and experience. which is hosted on Github Pages.",
    languages: [
      {
        name: "HTML5",
        iconifyClass: "vscode-icons:file-type-html",
      },
      {
        name: "CSS3",
        iconifyClass: "vscode-icons:file-type-css",
      },
      {
        name: "JavaScript",
        iconifyClass: "logos-javascript",
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/harikanani/harikanani.github.io",
        iconifyClass: "ri:github-fill",
      },
      {
        name: "Live Demo",
        url: "https://harikanani.github.io/",
        iconifyClass: "mdi:web",
      },
    ],
  },
];
