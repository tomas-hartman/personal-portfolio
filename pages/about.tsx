import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import BackgroundVideo from '../components/BackgroundVideo';
import HomepageLink from '../components/HomepageButton';
import PageHead from '../components/PageHead';
import styles from '../styles/Home.module.css';

const about: NextPage = () => {
  return (
    <div className={styles.container}>
      <BackgroundVideo className={styles.container_background_video} />

      <div className={styles.inner_container}>
        <PageHead>About</PageHead>

        <main className={styles.main}>
          <h1 className={styles.subpage_title}>
            About me
          </h1>

          <p className={styles.description}>
            Frontend developer, who is interested in fullstack and has passion for linguistics and 
            graphic design. Always opts for quality to quantity. Focused on details. Always willing 
            to broaden his horizons.
          </p>

          <ul className={styles.ul_about}>
            <li>born in 1992</li>
            <li>passion for lego since 1996</li>
            <li>had first encounters with web development at about 11 y/o (body bgcolor and frames)</li>
            <li>first published website skoda-auto.wz.cz at about 13 y/o (defunct)</li>
            <li>gained skills in photoshop and 3d graphics</li>
            <li>interest in photography, graphics, design and architecture</li>
            <li>gained some success with photography</li>
            <li>participated in Rotary Exchange programmes in Turkey in 2009 and 2010</li>
            <li>growing deeper interest in linguistics and scripts</li>
            <li>graduated from grammar school in 2012</li>
            <li>unsuccessful platform for distribution of high school graduation exam materials called mtemata.wz.cz (php, css, defunct)</li>
            <li>attended Charles University in Prague</li>
            <li>studied arabic and turkish languages, literature and history</li>
            <li>attended 101 course programming for corpus linguistics (perl, bash)</li>
            <li>first major public website (skolahradecns.cz) and visual identity in 2015 (wordpress)</li>
            <li>went on Erasmus to Ankara, Turkey in 2016</li>
            <li>summer job in Seznam.cz as a QA tester (e2e testing)</li>
            <li>went on Erasmus to Berlin, Germany in 2017</li>
            <li>library catalogization course, catalogizing library at faculty as a part time job</li>
            <li>returned back to Seznam.cz after Erasmus in 2017</li>
            <li>worked on test automatization for an nw.js project in Seznam.cz (selenium and jest)</li>
            <li>published Clean the mess! addon for Firefox (and later for Chrome, vanilla js, later refactor to react)</li>
            <li>master degree in middle-eastern studies</li>
            <li>MA thesis uses interdisciplinary methods, its topic combines art, history, magic and palaeography</li>
            <li>started working as frontend developer in Pelmet in 2019 (typescript, React and other FE stack)</li>
            <li>several unpublished projects in node, React, React Native and other technologies including a working proof of concept of a geography quizzle game</li>
            <li>contributions to ElixirFM open source repo (node API and project dockerization, one line fix in Haskell)</li>
            <li>new web for skolahradecns.cz in 2022 (wordpress, calendar addon written in vue)</li>
            <li>personal website 2022 (next)</li>
          </ul>

          <p>
          ... and counting.
          </p>

          <HomepageLink />
        </main>
      </div>
    </div>
  );
};

export default about;