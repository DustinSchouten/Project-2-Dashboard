# GITDashboard: Dustin & Aron
[![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)](https://forthebadge.com)

Welcome to this repository. Here you can find our app called **GITDashboard**. The concept is that the user can view information about the git workflow from students from the minor Web Design & Development. The information is shown in multiple graphs.

Follow this link to check out the full app!
[GITDashboard app](https://git-dashboard-minor-web.herokuapp.com/)

## Table of Contents
-   [API](#api)
-   [D3 js](#d3-js)
-   [Design](#design)
-   [A preview](#a-preview)
-   [How to install](#how-to-install)
-   [Authors](#authors)
-   [Any issues?](#any-issues)
-   [License](#license)

## API
We have to be able to retrieve the data from GitHub. It's possible to do this via the GitHub GraphQL API. GitHub chose GraphQL because it offers significantly more flexibility for their integrators. The ability to define precisely the data you want—and only the data you want—is a powerful advantage over traditional REST API endpoints. GraphQL lets you replace multiple REST requests with a single call to fetch the data you specify.

## D3 js
D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS. We are using this to turn the dry GitHub data into multiple kinds of graphs.

## Sketch
<img width="600" alt="Schermafbeelding 2022-03-08 144013" src="https://user-images.githubusercontent.com/74137185/163171120-47594493-ad61-4956-bc28-8a1fe941ca58.jpg">

## A preview
<img width="600" alt="image" src="https://user-images.githubusercontent.com/74137185/163171511-32e42943-f7fb-4764-aa60-a1b2e381fde0.png">


## How to install
### Clone this repo
```
$ git clone https://github.com/DustinSchouten/Project-2-Dashboard.git
```

### Navigate to the repo
```
$ cd Project-2-Dashboard
```

### Install necessary packages
``` 
$ npm install
```

### Start server
 ``` 
$ npm start 
 ```

## Any issues?
You can create an issue in this repository to let us know what's wrong.

## Authors
[Dustin Schouten](https://github.com/DustinSchouten)

[Aron Pelgrim](https://github.com/AronPelgrim)

## License
[MIT](https://github.com/DustinSchouten/Project-2-Dashboard/blob/main/LICENSE)