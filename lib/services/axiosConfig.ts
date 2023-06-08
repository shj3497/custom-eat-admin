import getConfig from 'next/config';
// import {Configuration} from './api';

const {publicRuntimeConfig} = getConfig();

// const axiosConfig = new Configuration({
//   basePath: publicRuntimeConfig.NEXT_PUBLIC_BASE_URL, // http://localhost:3000
//   baseOptions: {
//     headers: {
//       // Authorization: `Bearer abc`, // 인증토큰 설정
//     },
//   },
// });

// codegen 후 위에 있는 axiosConfig 사용
const axiosConfig = '';

export default axiosConfig;
