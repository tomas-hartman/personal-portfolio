import React from 'react';
import {default as NextHead} from 'next/head';

type Props = {
  children?: string;
}

const Head: React.FC<Props> = (props: Props) => {
  const {children = 'Tomáš Hartman'} = props;

  return (
    <NextHead>
      <title>{children}</title>
      <meta name="description" content="Personal website and portfolio of a javascript developer." />
      <meta name="keywords" content="HTML, CSS, JavaScript, React, node, developer, portfolio, webdesign, personal site" />
      <meta name="author" content="Tomáš Hartman" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};

export default Head;