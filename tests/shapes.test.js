const Shape = require('../lib/shapes.js');
const square = require('../lib/square.js');
const circle = require('../lib/circle.js');
const triangle = require('../lib/triangle.js');

//i don't want my render() method to return anything for the parent shape object
describe('Shape', ()=> {
    describe('render', () => {
        it('should throw errro if Shape render is called, only use render for specific shapes', () => {
            const newShape = new Shape();
            expect(newShape.render).toThrow();
        })  
    }) 
})

describe('Square', ()=> {
    describe('render', () => {
        it('should return the xml that creates a square svg', () => {
            const newShape = new square("hum","blue","blue");
            // newShape.shapeColor = "blue";
            expect(newShape.render()).toEqual('<rect x="10" y="10" width="300" height="300" fill="blue"/>');
        })  
    }) 
})
describe('triangle', ()=> {
    describe('render', () => {
        it('should return the xml that creates a triangle svg element', () => {
            const newShape = new triangle("hum","blue","blue");
            expect(newShape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
        })  
    }) 
})
describe('circle', ()=> {
    describe('render', () => {
        it('should return the xml that creates a circle svg', () => {
            const newShape = new circle("hum","blue","blue");
            expect(newShape.render()).toEqual('<circle cx="150" cy="150" r="150" fill ="blue"></circle>');
        })  
    }) 
})
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');