let radio;
let submitButton;
let resultText = '';
let questionIndex = 0;
let correctCount = 0;
let incorrectCount = 0;
const userName = '413730242 朱玉萍';

const questions = [
  { question: '1+1=?', options: ['1', '2', '3', '4'], correct: '2' },
  { question: '2+2=?', options: ['2', '3', '4', '5'], correct: '4' },
  { question: '3+3=?', options: ['5', '6', '7', '8'], correct: '6' },
  { question: '4+4=?', options: ['6', '7', '8', '9'], correct: '8' }
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Create a radio button group
  radio = createRadio();
  updateQuestion();
  radio.position(width / 2 - 50, height / 2 - 20);
  
  // Create a submit button
  submitButton = createButton('送出');
  submitButton.position(width / 2 - 20, height / 2 + 40);
  submitButton.mousePressed(checkAnswer);
}

function draw() {
  background("#FFD2D2");
  
  // Display the question text
  textAlign(CENTER);
  textSize(20);
  text(questions[questionIndex].question, width / 2, height / 2 - 60);
  
  // Display the result text
  textSize(16);
  text(resultText, width / 2, height / 2 + 80);
  
  // Display the correct and incorrect counts and user name
  textAlign(LEFT);
  textSize(16);
  text(`答對題數: ${correctCount}`, 10, 20);
  text(`答錯題數: ${incorrectCount}`, 10, 40);
  text(userName, 10, 60);
}

function checkAnswer() {
  let selectedOption = radio.value();
  if (selectedOption === questions[questionIndex].correct) {
    resultText = '答對了！';
    correctCount++;
  } else {
    resultText = '答錯了！';
    incorrectCount++;
  }
  questionIndex = (questionIndex + 1) % questions.length;
  updateQuestion();
}

function updateQuestion() {
  radio.html('');
  questions[questionIndex].options.forEach(option => {
    radio.option(option);
  });
}