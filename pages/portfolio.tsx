/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { NextPage } from 'next';
import { groq } from 'next-sanity';
import { getClient } from '../lib/sanity';

import { LightboxProps, Project as ProjectType } from '../types';

import BackgroundVideo from '../components/BackgroundVideo';
import HomepageLink from '../components/HomepageButton';
import PageHead from '../components/PageHead';
import Project from '../components/PortfolioItem';
import Modal from '../components/Modal';
import Lightbox from '../components/Lightbox';

import styles from '../styles/Home.module.css';
import lightboxStyles from '../styles/Lightbox.module.css';


type Props = {
  projects: ProjectType[],
  preview: boolean
}

const about: NextPage<Props> = (props: Props) => {
  const {projects} = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState<LightboxProps | null>(null);
  
  const handleClose = () => setIsModalOpen(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleLightboxData = (data: LightboxProps) => {
    console.log(data);
    
    setLightboxData(data);
    handleOpen();
  };

  return (
    <div className={styles.container_portfolio}>
      <BackgroundVideo className={styles.container_background_video} />

      <div className={`${styles.inner_container} ${isModalOpen ? 'invisible overflow-hidden' : ''}`}>
        <PageHead>Tomáš Hartman | Portfolio</PageHead>

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
                  setLightboxData={handleLightboxData}
                />
              );
            })
          }

          <HomepageLink />

          <Modal isOpen={isModalOpen}>
            <Lightbox data={lightboxData} handleClose={handleClose} setLightboxData={setLightboxData} />
          </Modal>
        </main>
      </div>
      <div className={lightboxStyles.lightbox_portal} id="lightbox-portal"></div>
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