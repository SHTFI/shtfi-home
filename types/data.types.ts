export interface SocialLinksData {
  github?: SocialLink;
  twitter?: SocialLink;
  telegram?: SocialLink;
  facebook?: SocialLink;
  linkedin?: SocialLink;
}

export type SocialLink = {
  profileUrl: string;
  profileName: string;
};

export type NavLink = {
  href: string;
  title: string;
  label: string;
  icon?: string;
  iconAlt?: string;
};
