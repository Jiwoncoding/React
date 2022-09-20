import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "ca91d4fe545a80a5a8f72d6881928f5c",
    language: "ko-KR",
  },
});

export default instance;