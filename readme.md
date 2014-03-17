#BridgeGap
An powerful and intuitive object oriented Phonegap app skeleton. 

The BridgeGap app skeleton is a quick way to start a mobile application. It has the basic structure to build out a complex application.

Technical support is not provided. Bugs (and fixes) can be reported via GitHub.

##Features

* Dynamic Javascript based page templates derived from Moustache
* Hardware accelerated page slide transitions
* Powerful hash based routing engine
* Load and save app settings in localStorage

##Dependencies

This app skeleton depends on many third party libraries. Thanks to the hard work of these library developers, this skeleton is very easy to use and they are included in the default download.

* [Phonegap] (http://phonegap.com/) - Mobile app toolkit
* [fastclick.js] (https://github.com/ftlabs/fastclick) - Polyfill to remove click delays on browsers with touch UIs
* [jQuery] (http://jquery.com/)
* [jQuery Transit] (http://ricostacruz.com/jquery.transit/) -  Super-smooth CSS transitions & transformations for jQuery (Optional, for nice effects)
* [Director] (https://github.com/flatiron/director) - a tiny and isomorphic URL router for JavaScript
* [ICanHaz] (http://icanhazjs.com/) - Simple & powerful client-side templating
* [PageSlider] (https://github.com/ccoenraets/PageSlider) - A simple library providing hardware accelerated page transitions for Mobile Apps
* [Font Awesome] (http://fontawesome.io/) - Scalable vector icons

## Getting Started

The file structure is organized as follows:

*config.xml* - PhoneGap configuration

*index.html* - The app index page

*templates.html* - The templates for additional pages

*/app/app.js* - Main JavaScript code for the application

*/app/util.js* - Utility functions

*/app/routes.js* - Define the controller functions called for each route

*/libs* - Included third party libraries

*/phonegap/* - Assets needed for PhoneGap compilation, including icons and splash images.

*/data/* - Storage for any additional application assets 

*/css* - Stylesheets and fonts

*/img* - Image assets

## Application Flow

When index.html is loaded it includes all of the necessary files and templates. When the device is ready the `app.startup()` method is called.

In `app.startup()` the app settings are loaded, the templates are loaded in and included, and the router is initialized.

In `/app/routes.js` you define the methods that are called with each Hash/URL. For more information on how to define more complex routes with parameters, please see the [Director Documentation] (https://github.com/flatiron/director).