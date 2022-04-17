import React, { useRef } from 'react';
import { LightboxProps, LinkConfig, Picture } from '../types';

import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Home.module.css';
import PortfolioPreview from './PortfolioPreview';
import Modal from './Modal';
import Lightbox from './Lightbox';

type Props = {
  title: string,
  year?: number,
  description: string,
  /** @todo */
  previews?: Picture[],
  links?: LinkConfig[],
  setLightboxData: (data: LightboxProps) => void,
}

const Project: React.FC<Props> = (props: Props) => {
  const {title, year, description, previews, links, setLightboxData} = props;

  const generateLink = (item: LinkConfig) => {
    return (
      <li className={styles.nav_link} key={item.title}>
        <Link href={item.href}>
          <a target={item.target}>{item.title}</a>
        </Link>
      </li>
    );
  };

  // console.log(previews);

  const fullTitle = `${title}${year && ` (${year})`}`;

  return (
    <>
      <section className={styles.project}>
        <h2>{fullTitle}</h2>

        <p className={styles.description}>{description}</p>

        <PortfolioPreview previews={previews} title={fullTitle} setLightboxData={setLightboxData} />

        {links && (
          <ul className={styles.nav_links}>
            {links.map(generateLink)}
          </ul>
        )}
      </section>
      
    </>
  );
};

export default Project;