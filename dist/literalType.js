"use strict";
let click;
// click = 'dblclick'; // compiler error
// The string literal type is useful to limit a possible string value that a variable can store.
// The string literal types can combine nicely with the union types to define a finite set of string literal values for a variable:
let mouseEvent;
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
let mouseEvents;
mouseEvents = 'click'; // valid
mouseEvents = 'dblclick'; // valid
mouseEvents = 'mouseup'; // valid
mouseEvents = 'mousedown'; // valid
// mouseEvents = 'mouseover'; // compiler error
let anotherEvent;
