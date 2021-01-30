My Restaurants Carousel App
===========================

A showcase app created with Create React App 

## Features
* Imports given data for sections of restaurants.
* Renders each section with its title and an infinite, horizontal carousel displaying all restaurants in that section.
* Implements some responsiveness for different screen sizes and animations for user iteraction.
* Provides unit tests for 3 components.
* (Types can be found in /src/interface.tsx)

## Technology & Third-party-libraries

* React + Typescript: assignment requirements.
* Blurhash: provided for assignment.
* React Create App: a simple and efficient way to get started for a beginner.
* infinite-react-carousel: to use what has been already created without creating redundunces and focus on building on top.
* Classnames: for cleaner code to conditionaly join classes.
* Jest + Enzyme: recommended for unit tests

## To run it
To develop this app locally or run it:

1. clone this repository or copy the folder
    ```
    git clone https://github.com/fviaren/fe-restaurants-react-app
    ```

2. install dependencies
    ```
    npm install
    ```
    or
    ```
    yarn install
    ```

3. start local dev server
    ```
    npm start
    ```
    or 
    ```
    yarn start
    ```

4. To run tests
    ```
    npm run test
    ```

## Improvements
- [] Aditional unit tests
    - [] All components
    - [] Responsiveness
    - [] Additional test cases (or assersions) in each component
- [] Add context for window width changes
