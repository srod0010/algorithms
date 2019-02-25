class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

Function.prototype.myBind1 = function (ctx) {
    const fn = this;
    const bindArgs = Array.from(arguments).slice(1);
    return function _boundFn() {
        const callArgs = Array.from(arguments);
        return fn.apply(ctx, bindArgs.concat(callArgs));
    };
};

Function.prototype.myBind2 = function (ctx, ...bindArgs) {
    return (...callArgs) => this.apply(ctx, bindArgs.concat(callArgs));
};



