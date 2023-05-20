// Director
class PizzaDirector {
    makePizza(builder) {
        return builder
            .setSize("large")
            .setCrust("thin")
            .addTopping("cheese")
        // .addTopping("peperoni");
    }
}

// Builder
class PizzaBuilder {
    constructor() {
        this.pizza = new Pizza();
    }

    setSize(size) {
        this.pizza.setSize(size);
        return this;
    }

    setCrust(crust) {
        this.pizza.setCrust(crust);
        return this;
    }

    addTopping(topping) {
        this.pizza.addTopping(topping);
        return this;
    }

    build() {
        return this.pizza;
    }
}

// Concrete Builder
class MargheritaPizzaBuilder extends PizzaBuilder {
    constructor() {
        super();
    }

    addTopping(topping) {
        if (topping !== "cheese") {
            throw new Error("Margherita pizza can only have cheese topping.");
        }

        return super.addTopping(topping);
    }
}

// Product
class Pizza {
    toppings = [];
    crust = '';
    size = '';

    setSize(size) {
        this.size = size;
    }

    setCrust(crust) {
        this.crust = crust;
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }
}


// Usage example
const director = new PizzaDirector();
const builder = new MargheritaPizzaBuilder();

const margheritaPizza = director.makePizza(builder);

console.log(margheritaPizza);