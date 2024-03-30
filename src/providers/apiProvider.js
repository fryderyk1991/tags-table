// const url = 'https://api.stackexchange.com/2.3/tags?site=stackoverflow';
const url = 'http://localhost:3005/tags';

const fetchApi =  (options) => {
  return fetch(url, options).then((resp) => {
    if (resp.ok) {
      return resp.json();
    }
    throw new Error(`Request failed with status: ${resp.status}`);
  });
};

export const loadData = () => {
  return fetchApi();
};




