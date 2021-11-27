Visit [amateur-radio.school](https://amateur-radio.school) to see the site in action.

# HAM Radio Practice Tests

The purpose of this project is to create a website that allows you to practice for the amateur radio exams. Using this
site you can take an exam that is made up of the same question pools that are provided by the FCC for the real exams.
You can practice the Technician, General and Amateur Extra exams.

## About

The exam data is stored using the CMS **Contentful** and the website is hosted using **Netlify**.

To get the question data I created some python scripts a while ago to parse the question lists
that are provided by the FCC. Some of these question lists are PDF files and some are text files. If you are interested
you can view the python scripts [here](https://github.com/tyler-daigle/ham-exam/tree/master/data_tools) - although I am
not a great python programmer and the scripts were written quickly for just the purpose of converting the files to JSON.

## This is still a work in progress.

I am still working on the website. There are a few more features I want to add, such as:

- A results page that will show you which questions you got wrong and what the correct answer is.
- An option to grade as you go so as soon as you answer a question it will let you know if it is correct or not.
- The images that go along with some of the questions have not been added yet.

I also plan on creating some kind of small app that will help upload the data to Contentful. As of right now I am
uploading the data using a bunch of Node scripts which I manually run.

### Images

All the images I used on the site were purchased from Lukasz Adam. You can see them [here](https://lukaszadam.gumroad.com/).

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
