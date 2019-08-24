import { DoctorLookup } from './doctor-lookup.js';
import $ from 'jquery';

$(document).ready(function () {
  $('#inputSubmit').click(function () {
    let name = $('#name').val();
    let symptom = $('#medicalIssue').val();

    let doctorLookup = new DoctorLookup();
    let promise = doctorLookup.getDoctor(name, symptom);
    promise.then(function (response) {
      let body = (JSON.parse(response)).data;

      $('.showDoctors').append('<p>List of Doctors:<p>');
      for (var i = 0; i < body.length; i++) {
        let bodyIndex = body[i];
        let doctorName = `<li>${bodyIndex.profile.first_name} ${bodyIndex.profile.last_name}
        ${bodyIndex.profile.title}<p>Bio: ${bodyIndex.profile.bio}</p></li>`;
        $('.showDoctors').append(doctorName);
      }

      // function (error) {
      //   $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      // };
    });
  });
});
