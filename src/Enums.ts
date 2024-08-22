// syntax - group of constants

// number

enum Direction {
    East,
    West,
    South,
    North
}

enum StatusCode {
    success = 200,
    unauthorized = 401,
    serverError = 500
}

console.log(StatusCode.success)

// string

enum Directions {
    East = "East",
    South = "South",
    West = "West",
    North = "North",    
}

console.log(Directions.East)
