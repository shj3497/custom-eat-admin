import {Noto_Sans_KR, Roboto, Montserrat} from 'next/font/google';

const noto_sans_kr = Noto_Sans_KR({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--Noto_Sans_KR',
});

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--Roboto',
});

const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--Montserrat',
});

const fonts = {
  Noto_Sans_KR: noto_sans_kr,
  Roboto: roboto,
  Montserrat: montserrat,
};

export default fonts;
