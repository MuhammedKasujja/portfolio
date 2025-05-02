import { contactDetails } from "./about";

export const contactsInfo = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "hari-crop.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  ...contactDetails,
} as const;
