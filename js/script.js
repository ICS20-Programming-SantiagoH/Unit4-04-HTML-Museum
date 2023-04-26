// Copyright (c) 2023 Santiago Hewett All rights reserved
//
// Created by: Santiago Hewett
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function tells the user if it is hot or cold
 */
function enterClicked() {  

  // declaring age to go see movie variable
  let priceForEntry = "";
  
  // Collecting user age 
  let age = parseInt(document.getElementById('age').value)
  let dayOfTheWeek = document.getElementById('dayOfTheWeek').value;
  
  
  //Display if user can watch r rated movies
  if (age <= 5 || age >= 95) {
    priceForEntry = "You can go enter for free."
  }

    // Display if user can watch PG or PG-13 movies
  else if (age >= 12 && age <= 21 || dayOfTheWeek == "Tuesday" || dayOfTheWeek == "Thursday") { 
    priceForEntry = "You get the student discount." 
  }

    // Display if user entered a non valid age
  else {
    priceForEntry = "You have to pay full price."
  }
  
  // Display results back to user
  document.getElementById('result').innerHTML = priceForEntry
}