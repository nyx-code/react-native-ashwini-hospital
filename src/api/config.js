const URL = "http://wwacoman.com";

export const getPatientList = (api, code) => {
  return fetch(`${URL}/oss/${api}/${code}`).then(res => res.json());
};

export const toLogin = (username, password, type) => {
  return fetch(`${URL}/oss/login/${username}/${password}/${type}`).then(res =>
    res.json()
  );
};

//for houseman
export const getDoctorList = empCode => {
  return fetch(`${URL}/oss/houseman/${empCode}`).then(res => res.json());
};

// for individual patient
export const getPatientReports = (api, code) => {
  return fetch(`${URL}/oss/reports/${api}/${code}`).then(res => res.json());
};

export const getPatientEMR = (api, code, fromDate, toDate) => {
  return fetch(`${URL}/oss/${api}Emr/${code}/${fromDate}/${toDate}`);
};

export const getPatientVital = (api, code) => {
  return fetch(`${URL}/oss/vitals/${api}Vitals/${code}`).then(res =>
    res.json()
  );
};
