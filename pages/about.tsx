import React from 'react';
import { NextPage } from 'next';
import { groq } from 'next-sanity';
import { getClient, PortableText } from '../lib/sanity';

import BackgroundVideo from '../components/BackgroundVideo';
import HomepageLink from '../components/buttons/HomepageButton';
import Head from '../components/Head';

import layout from '../styles/Layout.module.css';

type Props = {
  /** @todo */
  data: any
}

const about: NextPage<Props> = (props: Props) => {
  const {data} = props;

  return (
    <div className={layout.container}>
      <Head>Tomáš Hartman | About</Head>
      <BackgroundVideo className={layout.page_background_video} />

      <div className={layout.page_container}>
        <main className={layout.main}>
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