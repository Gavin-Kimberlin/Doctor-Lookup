import { DoctorLookup } from './doctor-lookup.js';
import $ from 'jquery';

$(document).ready(function () {
  $('#inputSubmit').click(function () {
    let symptom = $('#medicalIssue').val();
    let name = $('#name').val();

    let doctorLookup = new DoctorLookup();
    let promise = doctorLookup.getDoctor(symptom, name);

    promise.then(function (response) {
      let body = JSON.parse(response);
      $('.showDoctors').append('<p>List of Doctors:</p>');
      body.forEach(function (doctor) {
        let doctorName = doctor.profile.first_name + ' ' + doctor.profile.last_name + '<br>' + 'Practice:' + ' ' + doctor.practices[0].name;
        let doctorSymptom = doctor.profile.title + '<br>' + 'Title:' + ' ';
        $('.showDoctors').append(`<li> ${doctorName} ${doctorSymptom} </li> <br>`);
      });

      // let doctorLocation = doctor.practices[0].
    },

    function (error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
