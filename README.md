# City Explorer

**Author**: Caleb Hemphill
**Version**: 0.5.0

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

### Requirements

For development, you will only need [Node](http://nodejs.org/) installed in your environment.
Please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Install

    git clone https://github.com/kaylubh/city-explorer.git
    cd city-explorer
    npm install

### Configure app

Any environment configuration steps.

### Start & watch

    npm run dev
    npm start

### Simple build for production

    npm run build

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

### Languages & tools

- Node.js
- Vite
- React
- React Bootstrap

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

### [0.5.0](https://github.com/kaylubh/city-explorer/pull/7)

12-08-2023 3:25pm - Add server status spinner/alert while server is starting
12-08-2023 3:47pm - Add error alert if can't connect to server

### [0.4.0](https://github.com/kaylubh/city-explorer/pull/6)

12-07-2023 7:33pm - Refactor movies component
12-07-2023 8:08pm - Add header and footer
12-07-2023 8:30pm - Hides weather and movies unless there is data to render
12-07-2023 8:50pm - Refactor city search input to improve layout and add functionality for enter key presses to trigger a search

### [0.3.0](https://github.com/kaylubh/city-explorer/pull/5)

12-06-2023 9:11pm - Refactor weather API request to handle live data
12-06-2023 10:03pm - Refactor weather component to display live data
12-06-2023 11:21pm - Add movies API request handler
12-06-2023 11:49pm - Create Movies component to display related movies
12-07-2023 12:30am - Configure API request to work with remote server

### [0.2.1](https://github.com/kaylubh/city-explorer/pull/4)

12-06-2023 4:50pm - Request weather data and display it to the user when user selects explore
12-06-2023 5:37pm - Display an error if weather data isn't available for the requested city

### [0.2.0](https://github.com/kaylubh/city-explorer/pull/3)

12-05-2023 8:30pm - Create Weather component to display city weather

### [0.1.1](https://github.com/kaylubh/city-explorer/pull/2)

12-05-2023 2:40pm - Refactor component which displays static map image of city
12-05-2023 4:23pm - Refactor CityInput component which handles user input of city to explore
12-05-2023 4:43pm - Refactor ErrorAlert component which alerts user of a bad search request

### [0.1.0](https://github.com/kaylubh/city-explorer/pull/1)

12-04-2023 5:16pm - Application is deployed
12-04-2023 7:00pm - Displays a city name and latitude/longitude coordinates when searched
12-04-2023 9:08pm - Displays a static map image of the searched city
12-04-2023 10:04pm - Displays an error message if API request returns an error

## Credit and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->

- Inspiration and assistance for some features from [Immanuel Shin](https://github.com/ImmanuelShin)

## Features Time Estimates

***All times are Eastern Time***

### Lab 06

1. #### Setup

    Estimate of time needed to complete: 30 mins
    Start time: 4:32pm
    Finish time: 5:16pm
    Actual time needed to complete: 44 mins

2. #### Locations

    Estimate of time needed to complete: 45 mins
    Start time: 5:35pm
    Finish time: 7:00pm
    Actual time needed to complete: 1 hour 10 mins (-15 mins break)

3. #### Map

    Estimate of time needed to complete: 1 hour
    Start time: 8:00pm
    Finish time: 9:08pm
    Actual time needed to complete: 1 hours 8 mins

4. #### Errors

    Estimate of time needed to complete: 45 mins
    Start time: 9:18pm
    Finish time: 10:04pm
    Actual time needed to complete: 46 mins

### Lab 07

1. #### Weather

    Estimate of time needed to complete: 30 mins
    Start time: 4:08pm
    Finish time: 4:50pm
    Actual time needed to complete: 42 mins

2. #### Weather Errors

    Estimate of time needed to complete: 30 mins
    Start time: 5:20pm
    Finish time: 5:37pm
    Actual time needed to complete: 17 mins

### Lab 08

1. #### City Movies

    Estimate of time needed to complete: 45 mins
    Start time: 11:06pm
    Finish time: 11:49pm
    Actual time needed to complete: 43 mins

### Lab 09

1. #### Componentize

    Estimate of time needed to complete: 1 hour
    Start time: 6:13pm
    Finish time: 7:33pm
    Actual time needed to complete: 1 hour 20 mins

## Lighthouse Reports

### Lab 6

![Lighthouse report, score: 100](/lighthouse/lab6.png)

### Lab 7

![Lighthouse report, score: 100](/lighthouse/lab7.png)

### Lab 8

![Lighthouse report, score: 100](/lighthouse/lab8.png)

### Lab 9

![Lighthouse report, score: 100](/lighthouse/lab9.png)
