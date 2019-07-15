import { DoctorLookup } from './doctor-lookup.js';
import $ from 'jquery';

$(document).ready(function() {
  $('#inputSubmit').click(function() {
    let symptom = $('#medicalIssue').val();

    let doctorLookup = new DoctorLookup();
    let promise = doctorLookup.getDoctor(symptom);

    promise.then(function(response) {
      console.log(response);
      let body = JSON.parse(response);
      $('.showDoctors').html(response);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
