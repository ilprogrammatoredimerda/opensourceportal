# opensourceforum
Source code of our forum web app, which is a container for the members of our group to share their projects

## Git Management
This project uses Git Flow to manage the repository. If you are not used to Git Flow,
[here](https://danielkummer.github.io/git-flow-cheatsheet/) is a quick run-down.
Branches are organized in the standard Flow structure:  
* *master*: stable release branch, never push directly to this.
* *develop*: active development branch, should be at least stable enough to be usable.
* *feature/MY-FEATURE-BRANCH*: personal development branches, feature-oriented. Use these as your
development branch to code new stuff, then merge in develop (using `git flow feature finish`) when ready.
* *release/NEW-RELEASE-BRANCH*: branch to cut a release from develop. Make here the last bugfixes before
creating the release and clean the code, then finish the release. It will automatically merge it in `master`, create a tag and backport in `develop`, then delete the release branch. It's maaaagic.

#### Quick Command Synopsis

Initialize the repo with Flow. Do it the first time you clone the repository
```shell
git flow init             
```
Create a new feature branch
```shell
git flow feature start    
```
Close a feature branch and merge it in develop (feature branch will be deleted)
```shell
git flow feature finish   
```
Create a new release branch to cut a release
```shell
git flow release start    
```
Close a release branch. It will create a tag with its name, merge it in master and backport it in develop
```shell
git flow release finish
```
## How to use
### Install
```shell
npm install
npm install --only=dev //to install development dependencies if npm install fails to do it
```

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
