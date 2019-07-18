![](https://raw.githubusercontent.com/ics-software-engineering/meteor-application-template-react/master/doc/landing-page.png)

meteor-example-form-react is a sample Meteor 1.8 application that illustrates how to use [Uniforms](https://uniforms.tools/) for form development. 

## Installation

First, [install Meteor](https://www.meteor.com/install).

Second, download this repository to your computer.

Third, cd into the app/ directory of your local copy of the repo, and install third party libraries with:

```
$ meteor npm install
```

## Running the system

Once the libraries are installed, you can run the application by invoking the "start" script in the [package.json file](https://github.com/ics-software-engineering/meteor-example-form-react/blob/master/app/package.json):

```
$ meteor npm run start
```

The first time you run the app, it will create some default users and data. Here is the output:

```
meteor npm run start

> meteor-example-form-react@ start /Users/philipjohnson/github/ics-software-engineering/meteor-example-form-react/app
> meteor --no-release-check --settings ../config/settings.development.json

[[[[[ ~/github/ics-software-engineering/meteor-example-form-react/app ]]]]]

=> Started proxy.                             
=> Started MongoDB.                           
W20190718-11:08:30.749(-10)? (STDERR) Note: you are using a pure-JavaScript implementation of bcrypt.
W20190718-11:08:30.770(-10)? (STDERR) While this implementation will work correctly, it is known to be
W20190718-11:08:30.771(-10)? (STDERR) approximately three times slower than the native implementation.
W20190718-11:08:30.771(-10)? (STDERR) In order to use the native implementation instead, run
W20190718-11:08:30.771(-10)? (STDERR) 
W20190718-11:08:30.771(-10)? (STDERR)   meteor npm install --save bcrypt
W20190718-11:08:30.771(-10)? (STDERR) 
W20190718-11:08:30.771(-10)? (STDERR) in the root directory of your application.
=> Started your app.

=> App running at: http://localhost:3000/
```


### Note regarding "bcrypt warning":

You will get the following message when you run this application:

```
Note: you are using a pure-JavaScript implementation of bcrypt.
While this implementation will work correctly, it is known to be
approximately three times slower than the native implementation.
In order to use the native implementation instead, run

  meteor npm install --save bcrypt

in the root directory of your application.
```

On some operating systems (particularly Windows), installing bcrypt is much more difficult than implied by the above message. Bcrypt is only used in Meteor for password checking, so the performance implications are negligible until your site has very high traffic. You can safely ignore this warning without any problems during initial stages of development.

### Viewing the running app

If all goes well, the template application will appear at [http://localhost:3000](http://localhost:3000).  

### ESLint

You can verify that the code obeys our coding standards by running ESLint over the code in the imports/ directory with:

```
meteor npm run lint
```

### Prerequisites

To best understand this application, it is useful to first familiarize yourself with:

* [Meteor Application Template React](http://ics-software-engineering.github.io/meteor-application-template-react/). This sample application illustrates conventions for directory layout, naming conventions, routing, integration of Semantic UI, and coding standards. Meteor-example-form is based on this template, so we won't discuss any of these issues here.
 
* [Semantic UI React](https://react.semantic-ui.com/). We use Semantic UI for this template. 

* [Uniforms](https://uniforms.tools/). Uniforms is a library for simplifying form management with React, and includes built-in integration with Semantic UI. It's worth reviewing [Managing forms in a Meteor/React project with the uniforms package](https://blog.meteor.com/managing-forms-in-a-meteor-react-project-with-uniforms-33d60602b43a) before looking at meteor-example-form-react.

## Walkthrough

The landing page for this application provides the Create Student form:




## Screencasts

For more information about this system, please watch one or more of the following screencasts. Note that the current source code might differ slightly from the code in these screencasts, but the changes should be very minor.

  * [Walkthrough of system user interface (5 min)](https://www.youtube.com/watch?v=shYgqco1AUs)
  * [Data and accounts structure and initialization (10 min)](https://www.youtube.com/watch?v=7mobeyECNH8)
  * [Navigation, routing, pages, components (10 min)](https://www.youtube.com/watch?v=V6rrX7sbWDM)
  * [Forms (15 min)](https://www.youtube.com/watch?v=s77Vg6hgevI)
  * [Authorization, authentication, and roles (10 min)](https://www.youtube.com/watch?v=_i1dgcP0zoI)
