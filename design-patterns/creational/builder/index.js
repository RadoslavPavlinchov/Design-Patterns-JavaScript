/**
 * The Director class (PizzaDirector) encapsulates the construction process. 
 * It calls the builder's methods in a specific order to make the pizza.
 *
 * @class PizzaDirector
 */
class PizzaDirector {
    /**
    * Constructs a pizza using the provided builder.
    *
    * @method makePizza
    * @param {PizzaBuilder} builder - The builder object to use for constructing the pizza.
    * @returns {Pizza} The constructed Pizza object.
    * @memberof PizzaDirector
    */
    makePizza(builder) {
        return builder
            .setSize("large")
            .setCrust("thin")
            .addTopping("cheese")
        // .addTopping("peperoni");
    }
}

/**
 * The Builder class (PizzaBuilder) defines the common interface for building a pizza. 
 *
 * @class PizzaBuilder
 */
class PizzaBuilder {
    /**
     * Constructs a new Pizza object.
     *
     * @constructor
     * @memberof PizzaBuilder
     */
    constructor() {
        this.pizza = new Pizza();
    }

    /**
     * Sets the size of the pizza being constructed.
     *
     * @method setSize
     * @param {string} size - The size to set.
     * @returns {PizzaBuilder} The current instance of the PizzaBuilder.
     * @memberof PizzaBuilder
     */
    setSize(size) {
        this.pizza.setSize(size);
        return this;
    }

    /**
    * Sets the crust type of the pizza being constructed.
    *
    * @method setCrust
    * @param {string} crust - The crust type to set.
    * @returns {PizzaBuilder} The current instance of the PizzaBuilder.
    * @memberof PizzaBuilder
    */
    setCrust(crust) {
        this.pizza.setCrust(crust);
        return this;
    }

    /**
    * Adds a topping to the pizza being constructed.
    *
    * @method addTopping
    * @param {string} topping - The topping to add.
    * @returns {PizzaBuilder} The current instance of the PizzaBuilder.
    * @memberof PizzaBuilder
    */
    addTopping(topping) {
        this.pizza.addTopping(topping);
        return this;
    }

    /**
    * Returns a new Pizza object.
    *
    * @method build
    * @returns {Pizza} The constructed Pizza object.
    * @memberof PizzaBuilder
    */
    build() {
        return this.pizza;
    }
}

/**
 * The Concrete Builder class (MargheritaPizzaBuilder) extends the Builder class. 
 * It provides its own specific implementation for building a Margherita pizza. 
 * In this case, it restricts the addTopping() method to only allow the 'cheese' topping for a Margherita pizza.
 *
 * @class MargheritaPizzaBuilder
 * @extends PizzaBuilder
 */
class MargheritaPizzaBuilder extends PizzaBuilder {
    /**
    * Constructs a new MargheritaPizzaBuilder object.
    *
    * @constructor
    * @memberof MargheritaPizzaBuilder
    */
    constructor() {
        super();
    }

    /**
    * Adds a topping to the Margherita pizza being constructed.
    * Only 'cheese' topping is allowed for Margherita pizza.
    *
    * @method addTopping
    * @param {string} topping - The topping to add. Only 'cheese' is allowed for Margherita pizza.
    * @returns {MargheritaPizzaBuilder} The current instance of the MargheritaPizzaBuilder.
    * @memberof MargheritaPizzaBuilder
    */
    addTopping(topping) {
        if (topping !== "cheese") {
            throw new Error("Margherita pizza can only have cheese topping.");
        }

        return super.addTopping(topping);
    }
}

/**
 * Represents a Pizza object.
 *
 * @class Pizza
 */
class Pizza {
    /**
    * The size of the pizza.
    * @type {string}
    */
    size = '';

    /**
    * The crust type of the pizza.
    * @type {string}
    */
    crust = '';

    /**
    * The toppings of the pizza.
    * @type {string[]}
    */
    toppings = [];

    /**
    * Sets the size of the pizza.
    *
    * @method setSize
    * @param {string} size - The size to set.
    * @memberof Pizza
    */
    setSize(size) {
        this.size = size;
    }

    /**
    * Sets the crust type of the pizza.
    *
    * @method setCrust
    * @param {string} crust - The crust type to set.
    * @memberof Pizza
    */
    setCrust(crust) {
        this.crust = crust;
    }

    /**
    * Adds a topping to the pizza.
    *
    * @method addTopping
    * @param {string} topping - The topping to add.
    * @memberof Pizza
    */
    addTopping(topping) {
        this.toppings.push(topping);
    }
}


// Usage example
const director = new PizzaDirector();
const builder = new MargheritaPizzaBuilder();
const margheritaPizza = director.makePizza(builder);

console.log(margheritaPizza);