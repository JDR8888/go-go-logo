const fs = require('fs');
const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);
const Shapes = require('./lib/shapes.js');
const square = require('./lib/square.js');
const circle = require('./lib/circle.js');
const triangle = require('./lib/triangle.js');

inquirer.prompt([
    {
        type:'maxlength-input',
        message: 'what 3-character text do you want in your logo?',
        name:'logoText',
        maxLength: 3
    },
    {
        type:'list',
        message:'which shape would you like?',
        choices: ['triangle','square','circle'],
        name: 'shape'
    },
    {
        type:'input',
        message:'what color do you want the shape?',
        name:'shapeColor'
    },
    {
        type:'input',
        message:'what color do you want the text?',
        name:'textColor'
    }])
    .then((response) => {
        let myShape;
        switch(response.shape) {
            case 'square':
                myShape = new square(response.logoText, response.textColor, response.shapeColor);
                break;
            case 'circle':
                myShape = new circle(response.logoText, response.textColor, response.shapeColor);
                break;
            case 'triangle':
                myShape = new triangle(response.logoText, response.textColor, response.shapeColor);
                break;
        }
        fs.writeFile('./examples/logo.svg',
    `<?xml version="1.0" standalone="no"?>
        <svg xmlns="http://www.w3.org/2000/svg" height="100vh" width="100vw">
            <g>
                ${myShape.shape}
                ${myShape.textSize}
            </g>
        </svg>`, (err) => 
err ? console.log(err) : console.log('holy shit you made a logo')
)

    
    }
     );
        
    