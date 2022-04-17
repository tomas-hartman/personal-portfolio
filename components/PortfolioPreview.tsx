import React from 'react';
import { Picture } from '../types';

import styles from '../styles/Home.module.css';
import { imageBuilder } from '../lib/sanity';
import Image from 'next/image';

type Props = {
  previews?: Picture[]
}

const PortfolioPreview: React.FC<Props> = (props: Props) => {
  const {previews} = props;
  
  if(!previews) return null;

  return (
    <ul className={styles.portfolio_preview}>
      {previews?.map((item) => {
        const image = imageBuilder(item.asset).width(200).height(200).url();

        return (
          <li className={styles.portfolio_card} key={item._key}>
            <Image src={image} alt={item.alt} width={200} height={200} />
          </li>
        );
      })}
      
    </ul>
  );

};

export default PortfolioPreview;