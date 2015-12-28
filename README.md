# Build Angular 2 app with Babel

A skeleton [Angular 2](https://angular.io/) app built with [Babel](https://babeljs.io/) and [Browserify](http://browserify.org/).

- Uses Babel instead of [TypeScript](http://www.typescriptlang.org/)/[Traceur](https://github.com/google/traceur-compiler).
- Supports class/parameter decorators and parameter type annotations with Babel and a Babel transformer plugin.
- Bundles JavaScript files into one file with Browserify. (However, it doesn't use any Browserify-specific technology. You can easily switch to Webpack and etc.)

## Try

### Install

Clone/fork this repo and:

```
npm install -g gulp-cli
npm install -g lite-server
npm install
gulp build
cd public
lite-server
```
