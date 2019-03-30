const URL = "http://wwacoman.com";

export const getPatientList = (api, code) => {
  return fetch(`${URL}/oss/${api}/${code}`).then(res => res.json());
};

export const toLogin = (username, password, type) => {
  return fetch(`${URL}/oss/login/${username}/${password}/${type}`).then(res =>
    res.json()
  );
};
