import fonts from '@/lib/fonts';
import React from 'react';

const FontStyle = () => {
  return (
    <style jsx global>{`
      html {
        --Noto_Sans_KR: ${fonts.Noto_Sans_KR.style.fontFamily};
        --Roboto: ${fonts.Roboto.style.fontFamily};
        --Montserrat: ${fonts.Montserrat.style.fontFamily};
      }
    `}</style>
  );
};

export default FontStyle;
