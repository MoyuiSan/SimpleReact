import _ from 'lodash';
import './style.css';
function component() {
    var btn = document.createElement('button');
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = function printMe() {
        console.log('I get called from print.js!');
    };

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());