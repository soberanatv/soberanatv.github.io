export type socials = {
  [index: string]: {
    name: string,
    link: string,
    svg: {
      id: string,
      viewBox: string,
      path: string
    }
  }
}

type card = {
  name: string;
  description: string;
  image: string;
}

export type projectCard = card & {
  link: {
    label: string;
    href: string;
  }
}

export type creatorCard = card & {
  link: string
  pronouns: string[]
}