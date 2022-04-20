import React from 'react';
import { LightboxProps, Picture } from '../../types';

import styles from '../../styles/Home.module.css';
import { imageBuilder } from '../../lib/sanity';
import Image from 'next/image';

type Props = {
  title: string;
  previews?: Picture[];
  setLightboxData: (data: LightboxProps) => void;
}

const PortfolioPreview: React.FC<Props> = (props: Props) => {
  const {previews, title, setLightboxData} = props;
  
  if(!previews) return null;

  const handleClick = (item: Picture) => {
    setLightboxData({title: title, current: item, data: previews});
  };

  return (
    <ul className={styles.portfolio_preview}>
      {previews?.map((item) => {
        const image = imageBuilder(item.asset).width(200).height(200).url();

        return (
          <li className={styles.portfolio_card} key={item._key}>
            <a onClick={() => handleClick(item)}>
              <Image src={image} alt={item.alt} width={200} height={200} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PortfolioPreview;