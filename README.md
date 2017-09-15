### A Simple Question App Written in React

## To Start the App

```
$ git clone https://github.com/edwardwardward/Seneca.git
$ cd Seneca
$ npm install
$ npm start
```

## The Task

Correct Answers are currently set to: {first-answer: right-side,
                                       second-answer: left-side,
                                       second-answer: left-side
                                      }
                                      

In order to generate a correct display click on the top question box. 

## Changing the questions

In order to change the questions displayed on the page change the props given to each QuestionToggle component inside QuestionContainer. If changing prop.value to/from 'correct'/'incorrect' the relevant 'q1'/'q2'/'q3' must also be changed in the state of QuestionContainer - this helps keep score of correct answers.   
