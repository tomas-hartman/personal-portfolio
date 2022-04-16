import React from 'react';

import type { NextPage } from 'next';
import { LinkConfig } from '../types';

// import Head from 'next/head';
// import Image from 'next/image';
import Link from 'next/link';

import BackgroundVideo from '../components/BackgroundVideo';
import PageHead from '../components/PageHead';
import { loadMainMenu } from '../lib/loadMenus';
import styles from '../styles/Home.module.css';

type Props = {
  menuData: LinkConfig[]
}

const Home: NextPage<Props> = ({menuData}: Props) => {
  // const createLink = (
  //   href: string, 
  //   title: string, 
  //   target: HTMLAnchorElement['target'] = '_self'
  // ) => {
  //   return {
  //     href,
  //     title,
  //     target
  //   };
  // };

  // const links = [
  //   createLink('/portfolio', 'Portfolio'),
  //   createLink('https://github.com/tomas-hartman/', 'GitHub', '_blank'),
  //   createLink('https://www.linkedin.com/in/tom%C3%A1%C5%A1-hartman-78004a13b/', 'LinkedIn', '_blank'),
  //   createLink('https://www.instagram.com/tomas_hartman/', 'Instagram', '_blank'),
  //   createLink('/about', 'About'),
  // ];

  return (
    <div className={styles.container}>
      <PageHead />

      <main className={styles.main_animated}>
        <div className={styles.main_content}>
          <h1 className={styles.title}>
            Tomáš Hartman
          </h1>

          <nav className={styles.menu}>
            <ul className={styles.menu_ul}>
              {menuData.map((item) => {
                return (
                  <li key={item.title} className={styles.menu_item}>
                    <Link href={item.href}>
                      <a target={item.target}>
                        {item.title}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <BackgroundVideo className={styles.background_video}/>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const menuData = await loadMainMenu();

  return {
    props: {
      menuData
    }
  };
}

export default Home;
