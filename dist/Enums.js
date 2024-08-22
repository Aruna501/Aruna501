"use strict";
// syntax - group of constants
// number
var Direction;
(function (Direction) {
    Direction[Direction["East"] = 0] = "East";
    Direction[Direction["West"] = 1] = "West";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["North"] = 3] = "North";
})(Direction || (Direction = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["success"] = 200] = "success";
    StatusCode[StatusCode["unauthorized"] = 401] = "unauthorized";
    StatusCode[StatusCode["serverError"] = 500] = "serverError";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.success);
// string
var Directions;
(function (Directions) {
    Directions["East"] = "East";
    Directions["South"] = "South";
    Directions["West"] = "West";
    Directions["North"] = "North";
})(Directions || (Directions = {}));
console.log(Directions.East);
