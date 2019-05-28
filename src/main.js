// import { someFunction } from './functions';
import './styles.css';
import $ from 'jquery';
import { toRomanNumeral } from './scripts.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// Front-End login //
$(document).ready(function() {
  console.log("hi");
  $("form#roman-numeral").submit(function(event) {
    event.preventDefault();
    var num = parseInt($("input#number").val());
  // toRomanNumeral(num);
  $(".conversion").text(toRomanNumeral(num));
  });
});
