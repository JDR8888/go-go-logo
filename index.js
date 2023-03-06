const fs = require('fs');
const inquirer = require('inquirer');
const Shapes = require('./lib/shapes.js');
const square = require('./lib/square.js');
const circle = require('./lib/circle.js');
const triangle = require('./lib/triangle.js');

inquirer.prompt([
    {
        type:'input',
        message: 'what 3-character text do you want in your logo?',
        name:'logoText'
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
        const shape = response.shape;
        switch(shape) {
            case 'square':
                const myShape = new square(response.logoText, response.textColor, response.shapeColor);
                console.log(myShape);
                break;
        }
        
    }
     );
        
//     fs.writeFile('./examples/something.svg',
//     `<?xml version="1.0" standalone="no"?>
//         <svg xmlns="http://www.w3.org/2000/svg">
//             <g>
//                 <circle cx="55" cy="75" r="50" fill="${response.shapeColor}"/>
//                 <text x="35" y="80" font-family="Verdana" font-size="20" fill="${response.shapeColor}">${response.logoText}</text>
//             </g>
//         </svg>
//     </xml>`, (err) => 
// err ? console.log(err) : console.log('holy shit you made a logo')
// )
// );
