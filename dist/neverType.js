"use strict";
// let emptyy: never = 'hello';
function raiseError(message) {
    throw new Error(message);
}
const authorize = (role) => {
    switch (role) {
        case 'admin':
            return 'You can do anything';
        case 'user':
            return 'You can do something';
        default:
            // never reach here util we add a new role
            const _unreachable = role;
            throw new Error(`Invalid role: ${_unreachable}`);
    }
};
console.log(authorize('admin'));
