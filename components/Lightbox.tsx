import React from 'react';
import { LightboxProps } from '../types';

type Props = {
  data: LightboxProps | null,
  handleOpen: () => void,
  handleClose: () => void,
}

const Lightbox = ({data, handleOpen, handleClose}: Props) => {
  console.log(data);

  if(!data) return null;

  return (
    <div>Lightbox</div>
  );
};

export default Lightbox;