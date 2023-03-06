const Shape = require('./shapes');

class square extends Shape{
    constructor(text, textColor, shapeColor, shape, textSize) {
        super(text, textColor, shapeColor);
        this.shape = `<rect x="10" y="10" width="300" height="300" fill="${shapeColor}"/>`;
        this.textSize = `<text x="115" y="166" font-size="50" fill="${textColor}">${text}</text>`;
    }
}
module.exports = square;