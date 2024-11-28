import {
  PiEnvelopeDuotone,
  PiMapPinDuotone,
  PiPhoneDuotone,
  PiWhatsappLogoDuotone,
} from "react-icons/pi";
import * as y from "yup";

export const formFields = [
  {
    label: "First Name",
    name: "firstName",
    placeholder: "Jane",
    validation: y.string().required("Please enter your first name"),
  },
  {
    label: "Last Name",
    name: "lastName",
    placeholder: "Doe",
    validation: y.string().required("Please enter your last name"),
  },
  {
    label: "Email",
    name: "email",
    placeholder: "janedoe@gmail.com",
    type: "email",
    validation: y
      .string()
      .email("Invalid email format")
      .required("Please enter your email address"),
  },
  {
    label: "Message",
    name: "message",
    placeholder: "Write your message here...",
    as: "textarea",
    validation: y
      .string()
      .max(250, "Message cannot exceed 200 characters")
      .required("Enter your message"),
  },
];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about-us" },
  { name: "Our Team", href: "/our-team" },
  { name: "Blog", href: "http://blog.localhost:3000" },
  { name: "Contact", href: "/contact" },
];

export const contact_list = [
  {
    icon: PiMapPinDuotone,
    text: "1805 W Colonial Drive, Orlando, Florida 32804",
  },
  {
    icon: PiEnvelopeDuotone,
    text: "emrosecare2024@yahoo.com",
  },
  {
    icon: PiPhoneDuotone,
    text: "+1 (689) 287-5792",
  },
  {
    icon: PiWhatsappLogoDuotone,
    text: "+234 802 968 4754",
  },
];

export const our_team_list = [
  {
    name: "Roseline Nkoronye",
    role: "Nurse Practitioner and Founder",
    job_desc:
      "Leads EmRose Care Services, provides health coaching, and conducts ACLS, PALS, BLS, and Heartsaver courses.",
  },
  {
    name: "Chinenye Lumenze",
    role: "Digital and Social Media Manager, Life Purpose Coach and founder of Vessel of Purpose Podcast.",
    job_desc:
      "Crafts compelling narratives and visuals that connect with individuals across various social media platforms, learning styles, and cultures to meet everyone's needs.",
  },
  {
    name: "Ugochi Emeonye",
    role: "Clinical Research Coordinator and CNA Instructor",
    job_desc:
      "Conducts clinical trials, instructs CNA certification courses, and serves as a Licensed Public Notary.",
  },
  {
    name: "Ezinne Alexis",
    role: "Blogger for EmRose Care Services LLC",
    job_desc:
      "Creates and manages blog content for EmRose Care Services, focusing on health and wellness topics.",
  },
  {
    name: "Members Board",
    role: "Coordinator and CNA Instructor",
    job_desc:
      "Conducts clinical trials, instructs CNA certification courses, and serves as a Licensed Public Notary.",
  },
];