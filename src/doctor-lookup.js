import { apiKey } from ./../.env;
export class doctorLookup {
  getdoctor(paragraphs, words) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = 'https://api.betterdoctor.com/2016-03-01/practices?location=37.773,-122.413,10&skip=2&limit=10&user_key=' + apiey;
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
