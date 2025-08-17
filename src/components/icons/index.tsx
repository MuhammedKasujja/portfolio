// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import profileImage from "@/assets/github.svg";

import { contactsInfo } from "@/data/contact-info";

export function GitHubIcon({ className = "w-6 h-6" }) {
  return (
    <a href={contactsInfo.github.url} target="_blank">
      <svg
        role="img"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} text-black dark:text-white`}
      >
        <title>GitHub</title>
        <path
          d="M12 .297c-6.63 0-12 5.373-12 12 
        0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
        0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61 
        -.546-1.387-1.333-1.757-1.333-1.757 
        -1.087-.744.083-.729.083-.729 
        1.205.084 1.838 1.236 1.838 1.236 
        1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605 
        -2.665-.3-5.466-1.332-5.466-5.93 
        0-1.31.468-2.38 1.235-3.22 
        -.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23 
        .96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 
        2.28-1.552 3.285-1.23 3.285-1.23 
        .645 1.653.24 2.873.12 3.176 
        .765.84 1.23 1.91 1.23 3.22 
        0 4.61-2.805 5.625-5.475 5.92 
        .435.372.81 1.102.81 2.222 
        0 1.606-.015 2.896-.015 3.286 
        0 .315.21.69.825.57C20.565 22.092 24 
        17.592 24 12.297c0-6.627-5.373-12-12-12"
        />
      </svg>
    </a>
  );
}

export function LinkedinIcon() {
  return (
    <a href={contactsInfo.linkedin} target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width="24"
        height="24"
        fill="white"
        style={{
          backgroundColor: "#0966C2",
          borderRadius: "4px",
          padding: "4px",
        }}
      >
        <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340a53.73 53.73 0 1 1 53.73-53.73 53.73 53.73 0 0 1-53.73 53.73zM447.9 448h-92.4V302.4c0-34.7-12.4-58.4-43.4-58.4-23.7 0-37.8 16-44 31.4-2.3 5.6-2.8 13.3-2.8 21.1V448h-92.4s1.2-269.5 0-297.1h92.4v42.1c12.3-19 34.4-46.1 83.6-46.1 61 0 106.8 39.8 106.8 125.4z" />
      </svg>
    </a>
  );
}
