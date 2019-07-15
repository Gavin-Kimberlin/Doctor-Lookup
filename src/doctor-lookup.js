// import { apiKey } from './../.env';
export class DoctorLookup {
  getDoctor() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=portland&limit=30&user_key=d5bb2fc15861067df1fb45fba7c95d7c` + ${process.env.exports.apiKey};
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
