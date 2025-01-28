import { images } from "./elements/images";
import { links } from "./elements/links";

type Components = {
  a: React.ComponentType<{ href: string; children: string }>;
  img: React.ComponentType<{ src: string; alt: string }>;
};

export const customComponents: Components = {
  ...images,
  ...links,
};
