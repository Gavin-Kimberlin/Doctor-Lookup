// import { apiKey } from './../.env';
export class DoctorLookup {
  getDoctor(name, symptom) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${symptom}&location=45.512230%2C-122.658722%2C100&skip=0&limit=100&user_key=d5bb2fc15861067df1fb45fba7c95d7c`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
