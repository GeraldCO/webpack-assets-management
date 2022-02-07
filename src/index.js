import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';
import myName from './myName';
import printMe from './print.js';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); //output `JSON Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component(){
    const element = document.createElement('div');
    const btn = document.createElement('button');
    //Lodash now imported by this script
    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.textContent = myName('Cody');
    element.classList.add('hello');

    btn.innerHTML = 'Clicgit k me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    const myIcon = new Image();
    myIcon.src = Icon;

    //element.appendChild(myIcon);

    console.log(Data);
    console.log(Notes);

    return element;
}

document.body.appendChild(component());