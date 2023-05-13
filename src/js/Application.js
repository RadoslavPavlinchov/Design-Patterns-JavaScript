import * as PIXI from "../../pixi/pixi.mjs";

export default class Application {
    constructor(options = {}) {
        this.document = options.document || document.body;
        this.app = new PIXI.Application();

        this.init();
    }

    init() {
        this.document.appendChild(this.app.view);
    }
}