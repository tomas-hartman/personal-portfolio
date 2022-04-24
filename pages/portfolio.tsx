/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { NextPage } from 'next';
import { groq } from 'next-sanity';
import { getClient } from '../lib/sanity';

import { LightboxProps, Project as ProjectType } from '../types';

import BackgroundVideo from '../components/BackgroundVideo';
import Head from '../components/Head';
import HomepageLink from '../components/buttons/HomepageButton';
import Project from '../components/project/Project';
import Modal from '../components/lightbox/Modal';
import Lightbox from '../components/lightbox/Lightbox';

import layout from '../styles/Layout.module.css';
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
    // console.log(data);
    
    setLightboxData(data);
    handleOpen();
  };

  return (
    <div className={layout.container_portfolio}>
      <Head>Tomáš Hartman | Portfolio</Head>
      <BackgroundVideo className={layout.page_background_video} />

      <div className={`${layout.page_container} ${isModalOpen ? 'invisible overflow-hidden' : ''}`}>
        <main className={layout.main_portfolio}>
          <h1>
            Portfolio
          </h1>

          {projects.map((project) => {
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
          })}

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