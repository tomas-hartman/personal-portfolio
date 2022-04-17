import React from 'react';
import { NextPage } from 'next';
import { groq } from 'next-sanity';
import { getClient, PortableText } from '../lib/sanity';

import BackgroundVideo from '../components/BackgroundVideo';
import HomepageLink from '../components/HomepageButton';
import PageHead from '../components/PageHead';

import styles from '../styles/Home.module.css';

type Props = {
  data: any
}

const about: NextPage<Props> = (props: Props) => {
  const {data} = props;

  return (
    <div className={styles.container_about}>
      <BackgroundVideo className={styles.container_background_video} />

      <div className={styles.inner_container}>
        <PageHead>Tomáš Hartman | About</PageHead>

        <main className={styles.main}>
          <PortableText value={data.content} />
          <HomepageLink />
        </main>
      </div>
    </div>
  );
};

const query = groq`
*[_type=="aboutPage"][0]
`;

export async function getStaticProps({preview = false}) {
  const data = await getClient(preview).fetch(query);

  return {
    props: {
      data
    }
  };
}

export default about;