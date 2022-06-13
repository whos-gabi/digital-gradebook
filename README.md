# digital-gradebook

A Useful Grade Book for all students
<br /><br />

#### Files

- `.gitignore` -> Has details of files not to be commited to GitHub (node_modules folder is excluded, it is added during project installation)
- `index.js` -> Entry point of app, initializes Express
  package.json -> Contains details of node project

#### Install and Run:

1. Make sure you have NodeJS installed on your system
1. Clone the repository
1. `cd` into that folder
1. Run `npm install` (Installs all dependencies listed in package.json)
1. After its finished, run `npm start`
1. After getting the message `Listening on port: 8080`, visit [localhost:8080](localhost:8080), you should get a JSON object in response
1. Edit and save changes to file, the server automatically restarts

#### Dependencies:

- [Express](https://www.npmjs.com/package/express): Runs the server that will handle requests and responses

#### DevDependencies:

- [nodemon](https://www.npmjs.com/package/nodemon): Necessary for restarting the server on file change

#### Scripts:

- `start`: Accessed using `npm start`. Uses `nodemon` to run `index.js`, which is re-run on all file changes

#### TO DO

1. Setup server folder structure
2. Setup views and integrate wirh API
3. Connecting and manipulating data on MongoDB
4. Redesign pages with Bootstrap CDN
   ...
