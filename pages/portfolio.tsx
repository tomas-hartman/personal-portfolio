import { NextPage } from 'next';
import { groq } from 'next-sanity';
import React from 'react';
import BackgroundVideo from '../components/BackgroundVideo';
import HomepageLink from '../components/HomepageButton';
import PageHead from '../components/PageHead';
import Project from '../components/PortfolioItem';
import { getClient } from '../lib/sanity';

import styles from '../styles/Home.module.css';
import { Project as ProjectType } from '../types';

type Props = {
  projects: ProjectType[],
  preview: boolean
}

const about: NextPage<Props> = (props: Props) => {
  const {projects} = props;



  return (
    <div className={styles.container_portfolio}>
      <BackgroundVideo className={styles.container_background_video} />

      <div className={styles.inner_container}>
        <PageHead>About</PageHead>

        <main className={styles.main_portfolio}>
          <h1 className={styles.subpage_title}>
            Portfolio
          </h1>

          {
            projects.map((project) => {
              const {_key, title, year, description, links, previews} = project;

              return (
                <Project 
                  key={_key}
                  title={title}
                  year={year}
                  description={description}
                  previews={previews}
                  links={links}
                />
              );
            })
          }

          <HomepageLink />
        </main>
      </div>
    </div>
  );
};

const query = groq`
*[_type=="portfolioPage"][0].projects
`;

export async function getStaticProps({preview = false}) {
  const projects = await getClient(preview).fetch(query);

  return {
    props: {
      projects,
      preview
    },
    revalidate: 10
  };
}

export default about;