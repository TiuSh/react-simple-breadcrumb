# react-simple-breadcrumb
[![Build Status](https://travis-ci.org/TiuSh/react-simple-breadcrumb.svg?branch=master)](https://travis-ci.org/TiuSh/react-simple-breadcrumb)

A simple React breadcrumb component.

## Install

```
$ npm install react-simple-breadcrumb
```

## Demo

https://tiush.github.io/react-simple-breadcrumb/

Or locally:

```
$ git clone https://github.com/TiuSh/react-simple-breadcrumb.git
$ cd react-simple-breadcrumb
$ npm install
$ npm run dev
```

## Usage

```html
<Breadcrumb path="any/random/path" />
```
will render to:
```html
<ul class="breadcrumb">
  <li class="breadcrumb__item">
    <a href="/any">any</a>
  </li>
  <li class="breadcrumb__item">
    <a href="/any/random">random</a>
  </li>
  <li class="breadcrumb__item">
    <a href="/any/random/path">path</a>
  </li>
</ul>
```

Then copy the `lib/breadcrumb.css`, and include it in your HTML page if you want to
use the default styling. Or you can directly import `src/breadcrumb.scss` from a SASS
file. See [Styling](#styling) for more informations.

## Options

### path
**required** | Type: `String`

Path that will be used to create the breadcrumb.

### pathSeparator
Type: `String` | Default: `/`

Separator used in the path. **Warning:** This is not the separator that will be used to render
the breadcrumb. See [Styling](#styling) for more informations.

### pathRoot
Type: `String` | Default: `undefined`

Path element that will be prepended to the breadcrumb.

### getUrlFromPathSegments
Type: `Function` | Default: ``pathSegments => `/${pathSegments.join('/')}` ``

Internally `Breadcrumb` split the path in segments, and then generate `<a/>`s. This function
is used to generate the `href` attribute using this function.

This function will receive one parameter, an `Array` of segments, and should return a string that
will be inserted in `<a/>` `href` attributes.

If `pathRoot` prop has been set, this function will receive an empty `Array` as parameter for the
root element.

### onClick
Type: `Function` | Default: `undefined`

If this function is defined the `Breadcrumb` will render `<span/>`s instead of `<a/>s` and call
this function when one of them is clicked.

This function will receive one parameter, an `Array` of segments corresponding to the element
clicked.

If `pathRoot` prop has been set, and the root element is clicked, this function will be called with
an empty `Array` as parameter.

### className
Type: `String|Object` | Default: `undefined`

Class(es) that will be appended to the class of `<ul/>` tag.

## Styling

The breadcrumb is fully customizable through CSS or SASS (even the path separator rendered).
Here is the full HTML structure that will be rendered:

```html
<ul class="breadcrumb">
  <li class="breadcrumb__item">
    <a href="/any">any</a>
  </li>
  <li class="breadcrumb__item">
    <a href="/any/random">random</a>
  </li>
  <li class="breadcrumb__item">
    <a href="/any/random/path">path</a>
  </li>
</ul>
```

### SASS

The breadcrumb is originally styled using SASS. Therefor you can directly import the default style
from the `node_modules` folder:

```css
@import '[path_to_your_node_modules]/react-simple-breadcrumb/src/breadcrumb.scss';

// Your style
```

SASS file also offers the possibility to customize the default styling using variables:

#### $breadcrumb-separator
Type: `String` | Default: `"\00A0" "/" "\00A0"`

Customize the separator used in the rendered breadcrumb

### CSS

You can copy the file `lib/breadcrumb.css` and simply include it in your HTML page
to use the default styling. Feel free to modify this file to fit your needs.

## Licence

MIT
