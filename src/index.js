import { DoctorLookup } from './doctor-lookup.js';
import $ from 'jquery';

$(document).ready(function() {
  $('#inputSubmit').click(function() {
    let symptom = $('#medicalIssue').val();
    let name = $('#name').val();

    let doctorLookup = new DoctorLookup();
    let promise = doctorLookup.getDoctor(symptom, name);

    promise.then(function(response) {
      console.log(response);
      let body = JSON.parse(response);
      $('.showDoctors').append('<p>List of Doctors:</p>');
      console.log(body);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
