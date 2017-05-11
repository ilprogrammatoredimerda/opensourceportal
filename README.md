# opensourceforum
Source code of our forum web app, which is a container for the members of our group to share their projects

## How to use
### Install
```shell
npm install
npm install --only=dev //to install development dependencies
```
To rebuild the frontend using Webpack, run `npm run webpack`. It will create a folder `build/` containing two files,
`index.html` and `bundle.js`.

### Frontend development
Location: `src/frontend/`   
Webpack build output: `build/`   
Frontend is written in ES6 + JSX using [ReactJS](https://facebook.github.io/react).   
It uses Webpack to manage dependencies and bundling, and it includes `webpack-dev-server` to start
a lightweight web server to run the frontend.

To start the webserver, run   

```shell
npm run start:local
```
It will be available at http://localhost:8080
***WARNING You cannot access a URL like `http://localhost:8080/submit` directly when using
`webpack-dev-server`. Direct URLs only work when running the full application with backend.***

### Backend development
Location: `src/backend`   
Backend is written in NodeJS using [ExpressJS](https://expressjs.com).

To start the backend and serve the application, run   

```shell
npm start
```
It will be available at http://localhost:3000

## Source Tree

```
.
+-- .git                  # Git folder
|
+-- src                   # Application source files
|    +-- backend          # NodeJS backend source files
|    |    +-- index.js
|    |    +-- etc...
|    |
|    +-- frontend         # ReactJS frontend source files
|         +-- index.html
|         +-- index.jsx
|         +-- etc...
|
+-- test                  # All test files for MochaJS
|    +-- something.js
|    +-- anotherTest.js
|    +-- etc...
|
+-- .babelrc              # Config file for Babel
+-- .gitignore            # Gitignore file
+-- .travic.yml           # Config file for Travis-CI
+-- LICENSE               # License text file
+-- package.json          # NodeJS project file
+-- README.md             # THIS FILE RIGHT HERE :D
+-- webpack.config.js     # Webpack config file
```
