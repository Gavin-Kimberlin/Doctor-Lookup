import { DinoIpsum } from './dino-ipsum.js';
import $ from 'jquery';

$(document).ready(function() {
  $('#dinoSubmit').click(function() {
    let numOfParagraphs = $('#paragraphs').val();
    let numOfWords = $('#words').val();


    let dinoIpsum = new DinoIpsum();  // create instance of WeatherService class
    let promise = dinoIpsum.getIpsum(numOfParagraphs, numOfWords);  // call the instance method and pass in user input

    promise.then(function(response) {
      // const body = JSON.parse(response);
      console.log(response);
      $('.showIpsum').html(response);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
