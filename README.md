# Skeleton template for React.js in ES6

## Structures
```
app // a react.js application directory.
├── app.module.js // a main entry module file.
├── app.config.js // a main configuration file.
├── /containers
│		├── index.js // a registry file to register all contaniers.
│		└── /sample // a sample container
│				└── index.js // a file where a container component class is defined.
└── /components
		└── /sample // a sample component
				└── index.js // a file where a component class is defined.
```

## Commands
For develolopment purpose, a minimal express development server comes with the project. Below are the possible npm commands that a user can execute.
```
# npm install // Install all related javascript packages (Ex. react.js, express, webpack, etc)
# npm start // Run an express server calling server.js in the project.
# npm run build // Run webpack to complie bundle file out of app/app.module.js
# npm run watch // Run webpack in watch mode to keep updating the changes to angular.js app.
# npm run nodemon // Run nodemon to keep updating the changes to express.js development server.
# npm run dev // Run "npm run watch" and "npm run nodemon" concurrently.
```
