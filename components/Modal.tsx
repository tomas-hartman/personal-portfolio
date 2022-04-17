import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactElement,
  isOpen: boolean,
}

const Modal = ({children, isOpen}: Props) => {  
  const ref = useRef<HTMLDivElement | null>(null);
  // const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    ref.current = document.querySelector('#lightbox-portal');
    // setMounted(true);
  }, []);
  
  if(!isOpen) return null;

  return (ref.current) ? createPortal(children, ref.current) : null;  
};

export default Modal;