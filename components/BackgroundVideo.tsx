import React from 'react';

type Props = {
  className: string
}

const BackgroundVideo: React.FC<Props> = (props: Props) => {
  return (
    <video 
      autoPlay 
      muted 
      loop 
      disablePictureInPicture 
      disableRemotePlayback={true} 
      playsInline 
      controlsList="nodownload" 
      height='100%' 
      width='100%' 
      className={props.className}
    >
      <source src="/background_video_2.mp4" type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;