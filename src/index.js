import { GalacticCalculator } from './js/calculator.js';
import { LifeExpectancy } from './js/calculator.js';
import './css/styles.css';

const lifeExpectancyResults = () => {
  let countryOfResidence = document.getElementById("country-select");
  let lifestyle = document.querySelector("input[name=lifestyle-input]:checked");
  let activityLevel = document.querySelector("input[name=activity-input]:checked");
  let lifeExpectancy = new LifeExpectancy (lifestyle, countryOfResidence, activityLevel);
  let lifeExpectancyResult = lifeExpectancy.calculateLifeExpectancy();
  return lifeExpectancyResult;
};

const galacticCalculation = (lifeExpectancyResults) => {
  let ageInput = parseInt(document.getElementById("age-input").value);
  let galacticCalculator = new GalacticCalculator();
  galacticCalculator.calculatePlanetaryAges(ageInput);

  let earthAge = document.getElementById("earthAge");
  let mercuryAge = document.getElementById("mercuryAge");
  let venusAge = document.getElementById("venusAge");
  let marsAge = document.getElementById("marsAge");
  let jupiterAge = document.getElementById("jupiterAge");
  earthAge.innerText = galacticCalculator.earth["age"];
  mercuryAge.innerText = galacticCalculator.mercury["age"];
  venusAge.innerText = galacticCalculator.venus["age"];
  marsAge.innerText = galacticCalculator.mars["age"];
  jupiterAge.innerText = galacticCalculator.jupiter["age"];

  let answerArray = galacticCalculator.calculateRemainingLife(lifeExpectancyResults);
  let surveyAnswers = document.getElementById("survey-answers");
  answerArray.map(function(answer) {
    surveyAnswers.append(answer);
  });

  return answerArray;
  
};

//need to publish results next
const handleFormSubmission = (event) => {
  event.preventDefault();
  const span = document.querySelectorAll("span");
  let spanArray = Array.from(span);
  spanArray.map(function(spanItem) {
    spanItem.innerText = "";
  });
  const answers = document.getElementById("answers");
  answers.setAttribute("class", "hidden");
  galacticCalculation(lifeExpectancyResults());
  answers.removeAttribute("class", "hidden");
};

const form = document.getElementById("calculator");
form.addEventListener("submit", handleFormSubmission);