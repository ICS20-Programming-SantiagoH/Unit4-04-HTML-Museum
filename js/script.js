// Copyright (c) 2023 Santiago Hewett All rights reserved
//
// Created by: Santiago Hewett
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function tells the user what they have to pay to get in to the museum
 */
function enterClicked() {  

  // declaring admission fee variable
  let priceForEntry = "";
  
  // Collecting user age and the day of the week
  let age = parseInt(document.getElementById('age').value)
  let dayOfTheWeek = document.getElementById('dayOfTheWeek').value;
  
  
  //Display if user can enter the museum for free
  if (age <= 5 || age >= 95) {
    priceForEntry = "You can enter for free."
  }

    // Display if user can get a discount
  else if (age >= 12 && age <= 21 || dayOfTheWeek == "Tuesday" || dayOfTheWeek == "Thursday") { 
    priceForEntry = "You get the student discount." 
  }

    // Display if user has to pay full price
  else if (age >= 0 && age <=120) {
    priceForEntry = "You have to pay full price."
  }

    // Display if user has to enter a valid age
  else {
    priceForEntry = "Enter a valid age."
  }
  
  // Display results back to user
  document.getElementById('result').innerHTML = priceForEntry
}