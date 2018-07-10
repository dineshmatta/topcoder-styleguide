# Live Style Guide - Build Modular Frontend Framework Challenge



## Install tools and depency

- install dart sass, there are two method to install dart sass tool, i'd like suggest you option a, it looks more simple.

  a. download binary files from here https://github.com/sass/dart-sass/releases/, unzip it and add add the folder into system path.

  b. follow this document to install dart  sass in CLI mode, https://github.com/sass/dart-sass#standalone 

## Build styles

- build sass codes, `cd @actian` , and then use `sass -I . index.sass:./dist/actian.css --style compressed -q` to build dist css

## Examples

- copy *@actian/dist/actian.css* to *examples/css* folder
- double click examples/index.html to test

## Note

- *@actian/@material* folder is material ui scss components, i don't modify any material ui scss code, all scss code from like *npm install @material/button*
- svg cannot use directly because IE don't support this, need convert it to icon font, like this https://icomoon.io/app/#/select

## Video

[video]: https://youtu.be/J7ZK8Ag__tA