const Shape = require('./shapes');

class triangle extends Shape{ 
    constructor(text, textColor, shapeColor, shape, textSize) { //builds off Shape parent class
        super(text, textColor, shapeColor);
        this.shape = `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}"/>`;
        this.textSize = `<text x="115" y="109" font-family="Verdana" font-size="45" fill="${textColor}">${text}</text>`;
    }
}

module.exports = triangle;