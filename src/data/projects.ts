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
        name: "Laravel",
        iconifyClass: "logos-html-5",
      },
      {
        name: "Microservices",
        iconifyClass: "logos-nodejs",
      },
      {
        name: "Tailwind CSS",
        iconifyClass: "logos-css-3",
      },
      {
        name: "VueJS",
        iconifyClass: "logos-nodejs",
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/harikanani/Keep-Calm-and-Carry-On.github.io",
        iconifyClass: "ri:github-fill",
      },
    ],
  },
  {
    id: "1",
    name: "Smartrides",
    url: "https://github.com/kevalvavaliya/Yog4Life",
    description: `Developed a real-time ride-hailing app using Flutter for the frontend and Laravel for backend services and APIs.
    Implemented geolocation tracking, ride status updates, and driver-rider communication features.
    Built a secure Laravel-based admin dashboard to manage rides, users, payments, and service areas.
    Integrated Google Maps APIs for route plotting, distance calculation, and ETA estimation.
    Handled multi-role authentication, wallet system, and ride history management for both drivers and passengers.`,
    languages: [
      {
        name: "Nodejs / Nestjs",
        iconifyClass: "logos-laravel",
      },
      {
        name: "ReactJS",
        iconifyClass: "logos-reactjs",
      },
      {
        name: "Flutter / Dart",
        iconifyClass: "logos-flutter",
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/muhammedkasujja/smartrides-be/",
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
    description: `Built a mobile-first lending platform for the Philippine market using Flutter and Firebase.
    Enabled users to apply for loans, track repayment schedules.
    Integrated SMS verification, secure login, and real-time loan status updates.
    Supported both English and Filipino languages to ensure accessibility across regions.
      `,
    languages: [
      {
        name: "Flutter",
        iconifyClass: "logos-html-5",
      },
      {
        name: "Laravel",
        iconifyClass: "logos-css-3",
      },
      {
        name: "Vuejs",
        iconifyClass: "logos-javascript",
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/harikanani/Adoptisity",
        iconifyClass: "ri:github-fill",
      },
    ],
  },
  {
    id: "3",
    name: "Kaltech Stores",
    url: "https://github.com/rajmahadev8/Fin-Split",
    description: `Built a mobile app to manage product inventory and generate invoices for field and warehouse operations.
Implemented offline-first functionality with Laravel-based background syncing to handle stock updates and sales in real time.
Integrated barcode scanning, item tracking, invoice generation, and customer management within a single workflow. Backed with a NextJS admin pannel`,
    languages: [
      {
        name: "Flutter / Dart",
        iconifyClass: "logos-flutter",
      },
      {
        name: "NextJS",
        iconifyClass: "logos-nodejs",
      },
      {
        name: "Reactjs",
        iconifyClass: "logos-nodejs",
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/rajmahadev8/Fin-Split",
        iconifyClass: "ri:github-fill",
      },
    ],
  },
  {
    id: "4",
    name: "FundsTrans",
    url: "https://github.com/kevalvavaliya/Emosic",
    description: `Developed a secure and user-friendly Flutter app for international and local money transfers.
    Integrated KYC verification, beneficiary management, and transaction history tracking.
    Implemented multiple payment channels including mobile wallets and bank transfers.
    Used Laravel to build scalable APIs and an admin dashboard for transaction monitoring and compliance.
      `,
    languages: [
      {
        name: "Python",
        iconifyClass: "logos-python",
      },
      {
        name: "Reactjs",
        iconifyClass: "logos-html-5",
      },
      {
        name: "Tailwind CSS",
        iconifyClass: "logos-css-3",
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/kevalvavaliya/Emosic",
        iconifyClass: "ri:github-fill",
      },
    ],
  },
  {
    id: "5",
    name: "AutoDoc",
    url: "https://github.com/harikanani/e-commerce-frontend",
    description: `Developed a highly scalable e-commerce platform with secure authentication, 
      product catalog management, and Stripe-integrated payments. Implemented a 
      responsive UI with optimized loading times, improving user experience and conversion rates.`,
    languages: [
      {
        name: "Python / Django",
        iconifyClass: "logos-react",
      },
      {
        name: "React js",
        iconifyClass: "logos-nodejs",
      },
      {
        name: "Flutter / Dart",
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
    description: `Built a smart matchmaking app in Flutter with AI-powered profile recommendations and natural language chat prompts.
    Designed swipe-based UI, secure authentication, and in-app messaging features with Firebase and Firestore.
    Implemented push notifications, real-time chat updates, and block/report features for user safety.
    `,
    languages: [
      {
        name: "Nodejs / NestJS",
        iconifyClass: "logos-javascript",
      },
      {
        name: "Flutter",
        iconifyClass: "vscode-icons:file-type-html",
      },
      {
        name: "Tailwind CSS",
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
    ],
  },
  {
    id: "7",
    name: "Offline-Sync Module",
    url: "https://github.com/abhigoyani/votechain",
    description: `Developed an offline-first module using Laravel and IndexedDB to enable data collection without internet connectivity.
    Optimized API responses and reduced payload size for performance on low-bandwidth networks.
   Used Laravel queues and jobs to handle background sync and ensure reliable data persistence.`,
    languages: [
      {
        name: "Laravel / PHP",
        iconifyClass: "logos-html-5",
      },
      {
        name: "ReactJS",
        iconifyClass: "logos-css-3",
      },
      {
        name: "Tailwind CSS",
        iconifyClass: "logos-mongodb-icon",
      },
      {
        name: "Shad CN",
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
        name: "Flutter / Dart",
        iconifyClass: "logos-react",
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/rajmahadev8/Fin-Split",
        iconifyClass: "ri:github-fill",
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
        name: "JavaScript",
        iconifyClass: "logos-javascript",
      },
      {
        name: "Tailwind CSS",
        iconifyClass: "vscode-icons:file-type-css",
      },
      {
        name: "Shad CN",
        iconifyClass: "vscode-icons:file-type-css",
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/harikanani/harikanani.github.io",
        iconifyClass: "ri:github-fill",
      },
    ],
  },
];
