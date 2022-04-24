import React, { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';

import { LightboxProps } from '../../types';

import lightboxStyles from '../../styles/Lightbox.module.css';
import styles from '../../styles/Home.module.css';

import { imageBuilder } from '../../lib/sanity';

type Props = {
  data: LightboxProps | null,
  handleClose: () => void,
  setLightboxData: Dispatch<SetStateAction<LightboxProps | null>>,
}

const Lightbox = ({data, handleClose, setLightboxData}: Props) => {
  if(!data) return null;

  const handleSwitchImage = (dir: -1 | 1) => {
    const currentId = data.data.findIndex((item) => item._key === data.current._key);

    let nextId = currentId + dir;

    if(nextId > data.data.length - 1) nextId = 0;
    if(nextId < 0) nextId = data.data.length - 1;

    setLightboxData((prev) => {
      if(!prev) return prev;

      return {
        ...prev,
        current: prev?.data[nextId]
      };
    });
  };

  const src = imageBuilder(data.current.asset).height(1200).auto('format').url();
  const blurSrc = imageBuilder(data.current.asset).height(1200).quality(10).blur(90).auto('format').url();

  return (
    <div className={lightboxStyles.lightbox}>
      <div className={lightboxStyles.lightbox_content}>
        <button 
          className={`${lightboxStyles.button} ${lightboxStyles.close}`}
          onClick={handleClose}
        >
          Close
        </button>
        <h1 className={lightboxStyles.project_title}>{data.title}</h1>

        <div className={lightboxStyles.image_container}>
          <Image src={src} alt={data.current.alt} priority layout="fill" objectFit="contain" blurDataURL={blurSrc} placeholder="blur" />
        </div>
        
        <p className={lightboxStyles.image_title}>
          {data.current.title}
        </p>

        <div className={lightboxStyles.controls}>
          <button className={lightboxStyles.button} onClick={() => handleSwitchImage(-1)}>Previous image</button>
          <button className={lightboxStyles.button} onClick={() => handleSwitchImage(1)}>Next image</button>
        </div>

      </div>
    </div>
  );
};

export default Lightbox;