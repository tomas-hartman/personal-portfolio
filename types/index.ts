type DefaultSanity = {
  _key: string,
  _type: string,
}

export type LinkConfig = {
  href: string, 
  title: string, 
  target?: HTMLAnchorElement['target']
} & Partial<DefaultSanity>;

export type Project = {
  title: string,
  year?: number,
  description: string,
  /** @todo */
  previews?: any,
  links?: LinkConfig[],
} & Partial<DefaultSanity>;

export type Picture = {
  title: string,
  caption: string,
  alt: string,
  /** @todo */
  asset: any,
} & Partial<DefaultSanity>

export type LightboxProps = {
  title: string,
  current: Picture,
  data: Picture[]
}