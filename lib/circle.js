const Shape = require('./shapes');

class circle extends Shape{
    constructor(text, textColor, shapeColor, shape, textSize) {
        super(text, textColor, shapeColor);
        this.shape = `<circle cx="150" cy="150" r="150" fill ="${shapeColor}"></circle>`;
        this.textSize = `<text x="105" y="155" font-size="60" fill="${textColor}">${text}</text>`;
    }
    render() {
        return this.shape;
    }
}

module.exports = circle;