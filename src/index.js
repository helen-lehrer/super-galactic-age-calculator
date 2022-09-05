import { GalacticCalculator } from './js/calculator.js';
import { LifeExpectancy } from './js/calculator.js';
import './css/styles.css';

const lifeExpectancyResults = () => {
  let countryOfResidence = document.getElementById("country-select");
  let lifestyle = document.querySelector("input[name=lifestyle-input]:checked");
  let activityLevel = document.querySelector("input[name=activity-input]:checked");
  let lifeExpectancy = new LifeExpectancy (lifestyle, countryOfResidence, activityLevel);
  let lifeExpectancyResult = lifeExpectancy.calculateLifeExpectancy();
  return lifeExpectancyResult
};

const galacticCalculation = (lifeExpectancyResults) => {
  let ageInput = document.getElementById("age-input");
  let galacticCalculator = new GalacticCalculator();
  galacticCalculator.calculatePlanetaryAges(ageInput);
  calculateRemainingLife(lifeExpectancyResults);
  return answerArray
};

//need to publish results next
const handleFormSubmission = (event) => {
  event.preventDefault();
  lifeExpectancyResults();
  galacticCalculation();
};

let form = document.getElementById("calculatorInput");
form.addEventListener("submit", handleFormSubmission);