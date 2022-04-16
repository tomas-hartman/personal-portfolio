import Link from 'next/link';
import React from 'react';

import styles from '../styles/Home.module.css';

const HomepageLink = () => {
  return (
    <Link href="/">
      <a className={styles.link_back}>Back to homepage</a>
    </Link>
  );
};

export default HomepageLink;