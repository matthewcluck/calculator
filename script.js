const cleared = document.querySelector('#C');

const numbers = document.querySelectorAll('#num');

const operators = document.querySelectorAll('#op');

const equal = document.querySelector('#eq');

const screen = document.querySelector('#zero');

const equation = document.querySelector('#equation'); 

cleared.addEventListener('click', function(){
    clear();
});

equal.addEventListener('click', function(){
    pressEq();
})

numbers.forEach(number => {
    number.addEventListener('click', function(){
        pressNum(number.textContent);
    })
});

operators.forEach(operator => {
    operator.addEventListener('click', function(){
        pressOp(operator.textContent);
    })
});

function clear(){
    screen.textContent = '';
    equation.textContent = '';
};

function pressNum(numSelect){

    let opArray = ["+", "-", "X", "/"];

    const opTest = opArray.some(op => equation.textContent.includes(op));

    if (screen.textContent.length < 7 && screen.textContent != 'ERROR' && opTest == false){
        screen.textContent += numSelect;
        equation.textContent += numSelect;
    } else if (screen.textContent == 'ERROR'){
        screen.textContent = numSelect;
        equation.textContent = numSelect;
    } else if (opTest == true){
        equation.textContent += numSelect;
        let txt = equation.textContent;
        if (equation.textContent.includes('+') === true) {
            let ind = equation.textContent.indexOf('+');
            screen.textContent = txt.slice(ind+1);

        } else if (equation.textContent.includes('-') === true) {
            let ind = equation.textContent.indexOf('-'); 
            screen.textContent = txt.slice(ind+1);

        } else if (equation.textContent.includes('X') === true) {
            let ind = equation.textContent.indexOf('X'); 
            screen.textContent = txt.slice(ind+1);

        } else if (equation.textContent.includes('/') === true) {
            let ind = equation.textContent.indexOf('/'); 
            screen.textContent = txt.slice(ind+1);

        } else {
        screen.textContent = 'ERROR';
    }

};}

function pressOp(opSelect){
    if (opSelect == '+'){
        equation.textContent += '+';
    } else if (opSelect == '-'){
        equation.textContent += '-';
    } else if (opSelect == 'X'){
        equation.textContent += 'X';
    } else if (opSelect == '/'){
        equation.textContent += '/';
    } else {
        return
    }
}

function pressEq(){
    if (equation.textContent.includes('+') === true) {
        let ind = equation.textContent.indexOf('+');    

        let txt = equation.textContent;

        let aSt = txt.slice(0,ind);
        let bSt = txt.slice(ind+1);

        let a = Number(aSt);
        let b = Number(bSt);

        add(a,b);
        console.log(aSt);
        console.log(bSt);

    } else if (equation.textContent.includes('-') === true) {
        let ind = equation.textContent.indexOf('-');    

        let txt = equation.textContent;

        let aSt = txt.slice(0,ind);
        let bSt = txt.slice(ind+1);

        let a = Number(aSt);
        let b = Number(bSt);

        subtract(a,b);
        console.log('sub');
    } else if (equation.textContent.includes('X') === true) {
        let ind = equation.textContent.indexOf('X');    

        let txt = equation.textContent;

        let aSt = txt.slice(0,ind);
        let bSt = txt.slice(ind+1);

        let a = Number(aSt);
        let b = Number(bSt);

        multiply(a,b);
        console.log('mult');
    } else if (equation.textContent.includes('/') === true) {
        let ind = equation.textContent.indexOf('/');    

        let txt = equation.textContent;

        let aSt = txt.slice(0,ind);
        let bSt = txt.slice(ind+1);

        let a = Number(aSt);
        let b = Number(bSt);

        divide(a,b);
        console.log('divide');
    } else {
        return
    }

}

function multiply(a,b){
    let result = a * b;
    screen.textContent = result;
}

function divide(a,b){
    let result = a / b;
    screen.textContent = result;
}

function add(a,b){
    let result = a + b;
    screen.textContent = result;
}

function subtract(a,b){
    let result = a - b;
    screen.textContent = result;
}