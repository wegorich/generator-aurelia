# generator-aurelia

This is a Yeoman Generator for the [Components](http://aurelia.io/docs.html#/aurelia/framework/1.0.0-beta.1.0.6/doc/article/creating-components) of the [Aurelia](http://www.aurelia.io/) platform. It sets up a standard navigation-style app using gulp to build your ES6 code with [Babel](http://babeljs.io). Karma/Jasmine testing is configured as well.

For more info please visit the official site: http://www.aurelia.io/

## Prerequisite
This generator will use [JSPM](http://jspm.io), Aurelias package manager of choice, which performs GitHub queries to install semver packages, but GitHub has a rate limit on anonymous API requests. It is advised that you configure jspm with your GitHub credentials in order to avoid problems. You can do this by executing `jspm registry config github` and following the prompts. If you choose to authorize jspm by an access token instead of giving your password (see GitHub Settings > Personal Access Tokens), `public_repo` access for the token is required.

## Running The App

> The recent update will take care of running `npm install` and `jspm install` after downloading the boilerplate app, so this shortens the process to get up and running.

1. Verify that Yeoman is installed

  ```shell
  npm install -g yo
  ```
2. Install this generator

  ```shell
  npm install -g generator-aurelia-base
  ```

3. Inside your project execute
  ```shell
  yo aurelia-base:view YOURPAGENAME

  ```
  OR
  ```shell
  yo aurelia-base:component YOURCOMPONENTNAME
  ```
  OR
  ```shell
  yo aurelia-base:example YOURCOMPONENTEXAMPLENAME
  ```

  If you don't want tests to be generated for your component, add the `notest` flag
  ```shell
  yo aurelia-base:component YOURCOMPONENTNAME --notest
  ```

4. Example
  The following command will generate 3 files (namely `datepicker.html`, `datepicker.js` and `datepicker.spec.js`) in
  ``src/_components/picker``:
  ```shell
  yo aurelia-base:component picker/datepicker
  ```
