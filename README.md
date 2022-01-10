<h1>Mortgage-calculator</h1>

<a> https://mortgage-calculator-react.herokuapp.com </a>

App inspired by Clean Architecture (Inversify used)

### Project layers

App - React app layer with useReducer store.

Domain - domain, use case layer.

Store - Graphql requests.

### CI/CD

GitHub (commit triggered) -> CircleCi -> Heroku (run in Docker container)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Run unit tests
```
yarn test:unit
```

### Run Graphql types generator
```
yarn graphql-codegen
```
