# RouterOutletRepro

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.1.

## What's the issue?
It appears to be impossible to clear content from a secondary router outlet using the `routerLink` directive.

## How to test
1. Click "Show secondary content".
2. Navigating between the primary routes does not close the secondary content.
3. Clicking the button in the secondary content does close the content. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
