# Cabana frontend developer assignment
This repository contains the result of an assignment set by Caban A/S.  
The original assignment along with the design files can be found in the `/Assignment` directory 

## Setup instructions

1. Download/Clone the repo. 
2. Run `npm install` to isntall dependencies
3. Run `npm start` to start the development server and open in default browser

## Building project

You can build the project using the `npm run build` script, when done you will find the build version of the project in the `/dist` directory.

## Reasoning for choise of dependencies, libraries, naming methodologys etc.  

### BEM CSS naming methodology

I chose BEM naming methodology as it was mentioned in the assignment. I researched it and found it to be an interesting way on keeping a better structure in my stylesheets, and to simplify the resuse of styles. 

### Gulp

Gulp was chosen for the task manager as i am more familliar with it, than grunt or other options. 

#### Gulp Autoprefixer

Gulp autoprefixer is used to make the styling job easier, and improve browser compatibility.

### Bootstrap

I chose to use bootstrap for this assignment, since it is the framework mentioned in the assignment documentation i have the most experience with. Another option i have more experience with would be [UIKIT](https://getuikit.com).


### jQuery

jQuery is used since it makes the javascript part of this assignment easier, and since it would be required if i had to use any of bootstraps Javascript reliant functionalities. 

#### jQuery validation

jQuery validation was what i found to be the fastest way to implement frontend form validation for the contactform. 

### Animate.css

Since i wanted to make the page more interesting with a bit of animation i found [Animate.css](https://github.com/daneden/animate.css/) to be an easy solition for this purpose.

### onViewport.js

The [onViewport.js](https://github.com/Habberlabber/Cabana-Assignment/blob/master/src/scripts/vendor/onViewport.js) script was found [here](https://gist.github.com/eltonmesquita/bd803a21f27b12a58df1), and used as a simple way of triggering animate.css animation when elements enters the viewport.
