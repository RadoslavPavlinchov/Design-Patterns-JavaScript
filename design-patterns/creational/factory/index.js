class ShapeFactory {
    types = {
        "circle": Circle,
        "square": Square,
        "triangle": Triangle,
    };

    create(type) {
        return new this.types[type]();
    }
}

class Square {
    log() {
        console.log("Create a square")
    }
}

class Circle {
    log() {
        console.log("Create a circle")
    }
}

class Triangle {
    log() {
        console.log("Create a triangle")
    }
}

const factory = new ShapeFactory();
const square = factory.create("square");
square.log();

const triangle = factory.create("triangle");
triangle.log();

const circle = factory.create("circle");
circle.log();