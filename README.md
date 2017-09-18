### A Simple Question App Written in React

## To Start the App

```
$ git clone https://github.com/edwardwardward/Seneca.git
$ cd Seneca
$ npm install
$ npm start
```

## The Task

To build an app that allows you to swipe 3 questions into correct/incorrect positions, when all three questions are in a correct position the display should change to illustarate that the user has completed the question.The app must follow the style guide given and be written in React:

## Changing the questions

In order to change the questions displayed on the page change the props given to each QuestionToggle component inside QuestionContainer. If changing prop.value to/from 'correct'/'incorrect' the relevant 'q1'/'q2'/'q3' must also be changed in the state of QuestionContainer - this helps keep score of correct answers.   

## Using the App

Correct Answers are currently set to: {first-answer: right-side,
                                       second-answer: left-side,
                                       second-answer: left-side
                                      }
                                      

In order to generate a correct display click on the top question box. 

## Challenges 

There were a few learnings I took when developing the app. 

1. If building it again I would have spent more time selecting the best type of html element to use for the button in each QuestionToggle component. I used a <button> element however I should have also considered radio buttons and checkbox elements, using either of these should have reduced the amount of css work needed and potentially simplifed the passing of state from different Components.

2. Naming, I should have put more thought into naming some variables. Specifically the value that is passed as props into QuestionToggle. It is slightly confusing since that value actually is the opposite of what the question is set as. This is due to me building the QuestionToggle compenent first where value in this context refers to the *new* status of the question (i.e. when pressed on the first time the value will change). Using a radio button element would also have helped resolve this issue.  
