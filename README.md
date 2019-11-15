This an example of a simple application with: 
 - a front-end served by a Koa server
 - a back-end API
 - a _mocking_ folder to mock data fetched from the API (see `Mocking` under)
 - a configuration to run on CircleCI (TODO: Not implemented yet!)

The backend API returns today's date in text format 


## Where to start

First, import the dependencies: `npm install`, then start the application localy, by running either: `npm start`, `npm run mock` or `npm run-script build` _and_ `node src/server/server.js` (see _Local testing (manualy_) under


## Local testing (manualy)

### Test the front-end (without any _real_ integration with back-end)

You might need to add some _mock_ data. Update `mocking/mock.json` for behaviour and `*.json` for the data (see _Mocking_ here under)

Then run your application like this: `npm run mock`

Test on this URL: http://localhost:3000/ 

### Test the integration between back-end and front-end

In this case you need to run both back-end and front-end at the same time. This can be done in two steps: 
 - 1: build the application with `npm run-script build`
 - 2: run/start the server `node src/server/server.js`

Test on this URL: http://localhost:3000/ or, if your want to test the output from the API (the back-end), go to http://localhost:3000/api/ (+ the name of endpoint) 

### Test the back-end

If you only want to test what the API returns, just run/start the server `node src/server/server.js`

And test on this URL: http://localhost:3000/api/ (+ the name of endpoint), like [http://localhost:3000/api/now](http://localhost:3000/api/now) for example

You can also use Postman to test the enpoints available on the API 


## Available Scripts (npm)

### `npm start`

Start the application in development mode (with _runtime reload_)

### `npm test`

Runs all the test

### `npm run-script build`

This command will build your application for production to the `/build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `node src/server/server.js`

This will run your application as it should run on the server. You need to rund the build before that (`npm run-script build`)
The static part of the serve will serve files located into the `build` folder.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


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


## References
https://medium.com/hackernoon/serving-react-and-koa-together-720ba6668298 


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
