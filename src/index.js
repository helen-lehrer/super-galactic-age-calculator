import { GalacticCalculator } from './js/calculator.js';
import { LifeExpectancy } from './js/calculator.js';
import './css/styles.css';

const lifeExpectancyResults = () => {
  let countryOfResidence = parseInt(document.getElementById("country-select").value);
  let lifestyle = parseInt(document.querySelector("input[name=lifestyle-input]:checked").value);
  let activityLevel = parseInt(document.querySelector("input[name=activity-input]:checked").value);
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
  let earthLifeExpectancy = document.getElementById("earthLifeExpectancy");
  let mercuryLifeExpectancy = document.getElementById("mercuryLifeExpectancy");
  let venusLifeExpectancy = document.getElementById("venusLifeExpectancy");
  let marsLifeExpectancy = document.getElementById("marsLifeExpectancy");
  let jupiterLifeExpectancy = document.getElementById("jupiterLifeExpectancy");
  earthLifeExpectancy.innerText = galacticCalculator.earth["life-expectancy"];
  mercuryLifeExpectancy.innerText = galacticCalculator.mercury["life-expectancy"];
  venusLifeExpectancy.innerText = galacticCalculator.venus["life-expectancy"];
  marsLifeExpectancy.innerText = galacticCalculator.mars["life-expectancy"];
  jupiterLifeExpectancy.innerText = galacticCalculator.jupiter["life-expectancy"];
  let surveyAnswers = document.getElementById("survey-answers");
  answerArray.map(function(answer) {
    surveyAnswers.append(answer);
  });
  return answerArray;
};

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