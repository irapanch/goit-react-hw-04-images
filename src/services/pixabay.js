import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '39011501-5171506c9db8b64cf4fbb065c';
export const getImages = async params => {
  const res = axios.get('', {
    params: {
      per_page: 12,
      key: API_KEY,
      ...params,
    },
  });
  return res;
};

// export const getImages = async params => {
//   return await axios
//     .get('https://pixabay.com/api/', {
//       params: {
//         per_page: 12,
//         key: '39011501-5171506c9db8b64cf4fbb065c',
//         ...params,
//       },
//     })
//     .then(res => {
//       if (res.status !== 200) {
//         throw new Error(res.message);
//       }
//       return res.data;
//     });
// };
