class Shape { //parent class for building a logo/shape
    constructor(text,textColor,shapeColor) {
        this.text = text; //text that will go inside logo
        this.shapeColor = shapeColor; 
        this.textColor = textColor;
    } 
    render(){
        throw new Error('can only use render on specific shape classes');
    }
}

// class triangle extends Shape{ 
//     constructor(text, textColor, shapeColor, shape, textSize) { //builds off Shape parent class
//         super(text, textColor, shapeColor);
//         this.shape = `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}"/>`;
//         this.textSize = `<text x="35" y="80" font-family="Verdana" font-size="20" fill="${textColor}">${text}</text>`;

//     }
// }

// class square extends Shape{
//     constructor(text, textColor, shapeColor, shape, textSize) {
//         super(text, textColor, shapeColor);
//         this.shape = `<rect x="10" y="10" width="300" height="300" fill="${shapeColor}"/>`;
//         this.textSize = `<text x="115" y="166" font-size="50" fill="${textColor}">${text}</text>`;
//     }
// }

class circle extends Shape{
    constructor(text, textColor, shapeColor, shape, textSize) {
        super(text, textColor, shapeColor);
        this.shape = `<circle cx="150" cy="150" r="150" fill ="${shapeColor}"></circle>`;
        this.textSize = `<text x="105" y="155" font-size="60" fill="${textColor}">${text}</text>`;
    }
}


// console.log(myCoolNewTriangle);

module.exports = Shape;
