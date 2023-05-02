function receivesAFunction(callbackFunction) {
    callbackFunction()
}

function returnsANamedFunction() {
    return namedFunction = function() {
    }
}

function returnsAnAnonymousFunction() {
    return function() {
    }
}
