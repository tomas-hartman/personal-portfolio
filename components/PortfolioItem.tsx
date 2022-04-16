import Link from 'next/link';
import React from 'react';

import styles from '../styles/Home.module.css';
import { LinkConfig } from '../types';

type Props = {
  title: string,
  year?: number,
  description: string,
  /** @todo */
  preview?: any,
  links?: LinkConfig[],
}

const Project: React.FC<Props> = (props: Props) => {
  const {title, year, description, preview, links} = props;

  const generateLink = (item: LinkConfig) => {
    return (
      <li className={styles.nav_link} key={item.title}>
        <Link href={item.href}>
          <a target={item.target}>{item.title}</a>
        </Link>
      </li>
    );
  };

  return (
    <section className={styles.project}>
      <h2>{title}{year && ` (${year})`}</h2>

      <p className={styles.description}>{description}</p>

      {preview && (
        <div>Image</div>
      )}

      {links && (
        <ul>
          {links.map(generateLink)}
        </ul>
      )}
    </section>
  );
};

export default Project;