// Abstract Factory: defines the interface for creating different components
class UIFactory {
    createButton() {
        throw new Error("createButton() must be implemented.");
    }

    createInputField() {
        throw new Error("createInputField() must be implemented.");
    }

    createCheckBox() {
        throw new Error("createCheckBox() must be implemented.");
    }
}

// Concrete Factory 1: Light Theme
class LightThemeFactory extends UIFactory {
    createButton() {
        return new LightButton();
    }

    createInputField() {
        return new LightInputField();
    }

    createCheckBox() {
        return new LightCheckBox();
    }
}

// Concrete Factory 1: Dark Theme
class DarkThemeFactory extends UIFactory {
    createButton() {
        return new DarkButton();
    }

    createInputField() {
        return new DarkInputField();
    }

    createCheckBox() {
        return new DarkCheckBox();
    }
}

// Abstract Product: Button
class Button {
    render() {
        throw new Error("render() must be implemented");
    }
}

// Concrete Product 1: Light Button
class LightButton extends Button {
    render() {
        console.log("Rendering light button");
    }
}

// Concrete Product 2: Dark Button
class DarkButton extends Button {
    render() {
        console.log("Rendering dark button");
    }
}

// Abstract Product: InputField
class InputField {
    render() {
        throw new Error("render() must be implemented");
    }
}

// Concrete Product 1: Light InputField
class LightInputField extends InputField {
    render() {
        console.log("Rendering light input field");
    }
}

// Concrete Product 2: Dark InputField
class DarkInputField extends InputField {
    render() {
        console.log("Rendering dark input field");
    }
}

// Abstract Product: CheckBox
class CheckBox {
    render() {
        throw new Error("render() must be implemented");
    }
}

// Concrete Product 1: Light LightCheckBox
class LightCheckBox extends CheckBox {
    render() {
        console.log("Rendering light checkbox");
    }
}

// Concrete Product 2: Dark LightCheckBox
class DarkCheckBox extends CheckBox {
    render() {
        console.log("Rendering dark checkbox");
    }
}

// USE EXAMPLE
function createUI(theme) {

    const themesMap = {
        light: LightThemeFactory,
        dark: DarkThemeFactory
    }

    if (!themesMap[theme]) {
        throw new Error(`Invalid Theme: ${theme}`);
    }

    const uiFactory = new themesMap[theme]();

    const button = uiFactory.createButton();
    const inputField = uiFactory.createInputField();
    const checkbox = uiFactory.createCheckBox();

    button.render();
    inputField.render();
    checkbox.render();
}

// Create a Light Theme UI
createUI("light");

// Create a Dark Theme UI
createUI("dark");
