import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { groq } from 'next-sanity';
import {getClient} from '../lib/sanity';

import { LinkConfig } from '../types';

import BackgroundVideo from '../components/BackgroundVideo';
import Head from '../components/Head';

import styles from '../styles/Home.module.css';
import layout from '../styles/Layout.module.css';

type Props = {
  menuData: LinkConfig[],
  preview: boolean
}

const Home: NextPage<Props> = ({menuData}: Props) => {
  // const router = useRouter();

  // const { data: posts } = usePreviewSubscription(query, {
  //   initialData: menuData,
  //   enabled: preview || router.query.preview !== undefined,
  // });

  return (
    <div className={layout.container_index}>
      <Head>Tomáš Hartman | Personal web</Head>

      <main className={layout.main_index}>
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

        <BackgroundVideo className={styles.index_background_video}/>
      </main>
    </div>
  );
};


const query = groq`
*[_type=="menus"][0]
`;

export async function getStaticProps({ preview = false }) {
  const menuData = await getClient(preview).fetch(query);

  return {
    props: {
      menuData: menuData.mainMenu,
      preview
    },
    revalidate: 10,
  };
}

export default Home;
