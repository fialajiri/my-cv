export enum LinkTypes {
  Email = "email",
  Phone = "phone",
  Link = "link",
}

export interface ContactItemProps {
  icon: string;
  text: string;
  link?: { type: LinkTypes; url: string };
}

export interface ContactData {
  name: string;
  occupation: string;
  contactItems: ContactItemProps[];
}
