This an example of a simple application with: 
 - a front-end served by a Koa server
 - a back-end API
 - a configuration to run on CircleCI

## Available Scripts (npm)

### `npm start`

Start the application in development mode (with _runtime reload_)

### `npm test`

Runs all the test

### `npm run-script build`

This command will build your application into the `/build` folder

### `node src/server/server.js`

This will run your application as it should run on the server. You need to rund the build before that (`npm run-script build`)
The static part of the serve will serve files located into the `build` folder.

## Local testing

Open [http://localhost:3000](http://localhost:3000) to view it in the browser

Use Postman to test the API enpoints available like [http://localhost:3000/api/now](http://localhost:3000/api/now) for example

## Available Scripts (yarn)

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
