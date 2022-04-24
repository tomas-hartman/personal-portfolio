import React from 'react';
import { LightboxProps, LinkConfig, Picture } from '../../types';
import Link from 'next/link';

import ProjectPreview from './ProjectPreview';

import styles from '../../styles/Home.module.css';
import projectStyles from '../../styles/Project.module.css';

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

  const fullTitle = `${title}${year && ` (${year})`}`;

  return (
    <section className={projectStyles.project}>
      <h2>{fullTitle}</h2>

      <p className={styles.description}>{description}</p>

      <ProjectPreview previews={previews} title={fullTitle} setLightboxData={setLightboxData} />

      {links && (
        <ul className={styles.nav_links}>
          {links.map(generateLink)}
        </ul>
      )}
    </section>
  );
};

export default Project;