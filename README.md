This an example of a simple application with: 
 - a front-end served by a Koa server
 - a back-end API
 - a _mocking_ folder to mock data fetched from the API (see `Mocking` under)
 - a configuration to run on CircleCI (TODO: Not implemented yet!)

The backend API returns today's date in text format 

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


## Mocking

To start mocking Http response from `fetch()` we need to: 
 - install `fetch-mock` as a dev dependency, like this: `npm install --save-dev fetch-mock`
 - add a _run mock_ script to your `package.json`, like this: `"mock": "REACT_APP_MOCK=true npm start"`
 - update the `index.js` file so it checks if the application is started in _mock_ mode or not (the _normal_ mode). To do so, test if the environment variable `REACT_APP_MOCK` is `true` (see explanations under)
 - create a `mocking` folder with two files: 
  - `mock.js`: where the URLs that should be mocked are specified
  - `*.json`: the mock data you want the URL/endpoint to return to your application 
 - Start the application like this: `npm run mock`   


### Using `REACT_APP_MOCK` environment variable

insert the following code to your `index.js`
```
  if (process.env.REACT_APP_MOCK) {
          require('./mocking/mock');
  }
```

## Local testing

Open [http://localhost:3000](http://localhost:3000) to view it in the browser

Use Postman to test the API enpoints available like [http://localhost:3000/api/now](http://localhost:3000/api/now) for example

## References
https://medium.com/hackernoon/serving-react-and-koa-together-720ba6668298 


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
