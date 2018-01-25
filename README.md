# Skeleton template for React.js in ES6

## Structures
```
app // a react.js application directory.
├── app.module.js // a main entry module file.
├── app.config.js // a main configuration file.
├── /containers
│   ├── index.js // a registry file to register all contaniers.
│   └── /sample // a sample container
│	└── index.js // a file where a container component class is defined.
└── /components
    └── /sample // a sample component
        └── index.js // a file where a component class is defined.
```

## Commands
For develolopment purpose, a minimal express development server comes with the project. Below are the possible npm commands that a user can execute.
```
# npm install // Install all related javascript packages (Ex. react.js, express, webpack, etc)
# npm start // Run a server - to be used in production.
# npm run build // Produce production-ready(minified) assets.
# npm run watch // Continuouly produce assets for development purpose whenever changes made.
# npm run nodemon // Run a development server for the project.
# npm run dev // Run both "npm run watch" and "npm run nodemon" together.
```
