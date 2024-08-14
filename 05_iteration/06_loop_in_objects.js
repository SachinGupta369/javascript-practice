// loop in Object

const myObject = {
    js : 'javascript',
    cpp : 'c++',
    py : 'python',
    rb : 'ruby',
    swift : 'Swift by apple'
}

for( extention in myObject){
    console.log(`${extention} of the language is ${myObject[extention]}`);
}

