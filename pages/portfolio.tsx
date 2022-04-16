import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import BackgroundVideo from '../components/BackgroundVideo';
import HomepageLink from '../components/HomepageButton';
import PageHead from '../components/PageHead';
import Project from '../components/PortfolioItem';

import styles from '../styles/Home.module.css';

const about: NextPage = () => {
  return (
    <div className={styles.container}>
      <BackgroundVideo className={styles.container_background_video} />

      <div className={styles.inner_container}>
        <PageHead>About</PageHead>

        <main className={styles.main}>
          <h1 className={styles.subpage_title}>
            Portfolio
          </h1>

          <Project 
            title='Clean the mess!'
            year={2019}
            description="Addon that simplifies the way how excessive amount of tabs can be managed. It particularly aims at how to close several repeating tabs at the same domain that remained open from previous visits."
            preview={'Image'}
            links={[
              {title: 'Firefox', href: '/firefox', target: '_blank'},
              {title: 'Chrome', href: '/chrome', target: '_blank'},
              {title: 'GitHub', href: '/github', target: '_blank'},
            ]}
          />

          <Project 
            title='Skolahradecns.cz'
            year={2022}
            description="School web. Web redesign was carried out with emphasis on better usage of space on bigger and smaller screens and improvements of user experience. Redesign inherits from previous design, updated with cleaner and lighter design features."
            links={[
              {title: 'Skolahradecns.cz', href: 'https://www.skolahradecns.cz', target: '_blank'},
            ]}
          />

          <Project 
            title='Simple wp calendar'
            year={2015}
            description="Custom calendar plugin implementation for wordpress. Independent project, however designed with skolahradecns.cz in mind. Refactored in 2022 in vue.js."
            preview={'screenshots'}
            links={[
              {title: 'GitHub', href: '/github', target: '_blank'},
            ]}
          />

          <Project 
            title='Skolahradecns.cz'
            year={2015}
            description="School web and visual identity."
            preview={'screenshots'}
          />

          <HomepageLink />
        </main>
      </div>
    </div>
  );
};

export default about;