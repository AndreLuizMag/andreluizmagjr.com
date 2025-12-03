import { site } from "@config/site";

export type NavigationType = {
  id: string;
  label: string;
  href: string;
  description?: string;
  iconName?: string;
  external?: boolean;
  disabled?: boolean;
  badge?: string;
  children?: NavigationType[];
};

export const social: NavigationType[] = [
  {
    id: "github",
    label: "Github",
    href: site.links.github,
    iconName: "Github",
  },
  {
    id: "linkedin",
    label: "Linkedin",
    href: site.links.linkedin,
    iconName: "Linkedin",
  },
  {
    id: "fediverse",
    label: "Fediverse",
    href: site.links.fediverse,
    iconName: "Fediverse",
  },
];
