let click: 'click';
// click = 'dblclick'; // compiler error

// The string literal type is useful to limit a possible string value that a variable can store.

// The string literal types can combine nicely with the union types to define a finite set of string literal values for a variable:

let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
// mouseEvent = 'mouseover'; // compiler error

// If you use the string literal types in multiple places, they will be verbose.

// To avoid this, you can use the type aliases. For example:

type MyMouseEvent = 'click' | 'dblclick' | 'mouseup' | 'mousedown';
let mouseEvents: MyMouseEvent;
mouseEvents = 'click'; // valid
mouseEvents = 'dblclick'; // valid
mouseEvents = 'mouseup'; // valid
mouseEvents = 'mousedown'; // valid
// mouseEvents = 'mouseover'; // compiler error

let anotherEvent: MyMouseEvent;