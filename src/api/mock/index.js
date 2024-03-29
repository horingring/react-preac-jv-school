import rcmdComments from "./data/IntroPage/rcmdComments";
import introComments from "./data/IntroPage/introComments";

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, time);
  });
};

const api = {
  fetchRcmdComments() {
    return fetch(rcmdComments, 3000);
  },
  fetchIntroComments() {
    return fetch(introComments, 3000);
  },
};

export default api;
