import { DoctorLookup } from './doctor-lookup.js';
import $ from 'jquery';

$(document).ready(function() {
  $('#inputSubmit').click(function() {
    let symptom = $('#medicalIssue').val();

    let doctorLookup = new DoctorLookup();  // create instance of WeatherService class
    let promise = doctorLookup.getDoctor(symptom);  // call the instance method and pass in user input

    promise.then(function(response) {
      // const body = JSON.parse(response);
      console.log(response);
      $('.showDoctors').html(response);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
