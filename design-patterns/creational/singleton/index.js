class Singleton {
    static #instance;

    static getInstance() {
        if (!Singleton.#instance) {
            Singleton.#instance = new Singleton();
        }

        return Singleton.#instance;
    }

    #message = 'Singleton instance';

    getMessage() {
        return this.#message;
    }
}

// Usage:
const singletonInstance1 = Singleton.getInstance();
const singletonInstance2 = Singleton.getInstance();

console.log(singletonInstance1 === singletonInstance2); // Output: true

console.log(singletonInstance1.getMessage()); // Output: Singleton instance
console.log(singletonInstance2.getMessage()); // Output: Singleton instance