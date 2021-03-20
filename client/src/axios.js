import axios from 'axios';

const instance = axios.create({
  baseUrl: `https://tinder-swipe.herokuapp.com/`
});

export default instance;
