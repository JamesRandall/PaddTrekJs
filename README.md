# PaddTrekJs

PaddTrekJs is an HTML / JavaScript version of the classic mini-computer game. Specifically its a direct conversion of the iPad game [Padd Trek](http://itunes.apple.com/us/app/padd-trek/id412782761?mt=8).

Currently very much a work in progress. Most testing is occurring in Firefox 4 due to the handiness of FireBug with occasional forays into Chrome and Safari.

To run it simply clone / download the repository and double click index.html. There are no server dependencies. Though right now there's not a lot to run.

For more information [visit the Accidental Fish blog](http://accidentalfish.wordpress.com).

## Issues

This being a work in progress and a project for learning there are a few issues.

* To my more classical object oriented thinking the majority of my RequireJS modules are factories. But calling each and every file a factory while in some ways makes things clearer in other ways obscures the real content which is primarily the object created by the factory wrapped in the same file. The factory is almost a style that building with RequireJS lends itself to. As a result of my muddled thinking files are not consistently named.

* Although QUnit allows for unit tests to be broken up with the module() function I really want one HTML file to be about one RequireJS module. Otherwise things just get unclear. I need some way of automatically running these tests and gathering their results. Perhaps a bit of Ruby code.