const URL = "http://wwacoman.com";

export const getOPDList = username => {
  return fetch(`${URL}/oss/opd/${username}`).then(res => res.json());
};

export const getIPDList = username => {
  return fetch(`${URL}/oss/ipd/${username}`).then(res => res.json());
};

export const toLogin = (username, password, type) => {
  return fetch(`${URL}/oss/login/${username}/${password}/${type}`).then(res =>
    res.json()
  );
};
