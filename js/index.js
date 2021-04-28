function showVaribles(){
    // variables
    console.clear();
    console.groupCollapsed("VARIABLES");
        // 1
        const a = 5;
        const b = 7;
        console.log('a * b :>> ', a * b);
        // 2
        const c = 8;
        const d = 2;
        console.log('c / d :>> ', c / d);
        // 3
        const e = 88;
        const f = 21;
        console.log('e + f :>> ', e + f);
        // 4
        const numVar = 11;
        const boolVar = true;
        const strVar = "java script";
        const strNumVar = "100";
        console.groupCollapsed('Variables');
            console.log('numVar :>> ', numVar);
            console.log('boolVar :>> ', boolVar);
            console.log('strVar :>> ', strVar);
            console.log('strNumVar :>> ', strNumVar);
        console.groupEnd();
        // 5
        let num = 1;
        num += 11;
        console.log('num :>> ', num);
        num -= 11;
        console.log('num :>> ', num);
        num *= 11;
        console.log('num :>> ', num);
        num /= 11;
        console.log('num :>> ', num);
        num++;
        console.log('num :>> ', num);
        num--;
        console.log('num :>> ', num);
    console.groupEnd();
};

function showPrompt(){
    // prompt
    console.clear();
    console.group("PROMPT");
        // 1
        let numVar1 = prompt('Enter the number, please...');
        numVar1 *= numVar1;
        console.log('the number to the second power:>> ', numVar1);
        // 2
        const numVar2 = +prompt('Enter the first number, please...');
        const numVar3 = +prompt('Enter the second number, please...');
        console.log('(first number + second number) / 2 :>> ', (numVar2 + numVar3) / 2);
        // 3
        let timeVar = prompt('Enter some minutes, please...');
        timeVar *= 60;
        console.log('seconds in the minutes you entered:>> ', timeVar);
        // 4
        const greeting = "Hello";
        const userName = prompt("What is your name?");
        console.log(`${greeting}, ${userName}!`);
    console.groupEnd();
};

function showIf(){
    // if
    console.clear();
    console.group("IF");
        // 1
        console.group('1');
            const numVar4 = +prompt('Enter the number, mr. User');
            if (numVar4 === 10) {
                console.log("Верно");
            } else {
                console.log("Неверно");
            };
        console.groupEnd();
        // 2
        console.groupCollapsed('2');
            // if(test)
            let test = true;
            if (test) {
                console.log('Верно');
            } else {
                console.log('Неверно');
            };
            test = false;
            if (test) {
                console.log('Верно');
            } else {
                console.log('Неверно');
            };
            // if(!test)
            test = true;
            if (!test) {
                console.log('Верно');
            } else {
                console.log('Неверно');
            };
            test = false;
            if (!test) {
                console.log('Верно');
            } else {
                console.log('Неверно');
            };       
        console.groupEnd();
        // 3
        console.group('3');
            let money = Number(prompt("Enter money..."));
            if (!Number.isNaN(money)) { 
                if (money > 500 && money <= 800) {
                    money -= money * 0.03;
                    money = money.toFixed(2);
                    console.log('money with the discount 3 percent:>> ', money + '$');
                } else if (money > 800) {
                    money -= money * 0.05;
                    money = money.toFixed(2);
                    console.log('money with the discount 5 percent:>> ', money + '$');
                } else {
                    money = money.toFixed(2);
                    console.log('You don`t have any discounts :>> ', money + '$');
                };
            } else {
                let answer = confirm('You do not enter a number... Are you blind?');
                if (answer) {
                    console.log('You are blind, my friend');
                } else {
                    console.log("You aren`t blind. It is very good)");
                };
            };
        console.groupEnd();
    console.groupEnd();
};

function showLoops(){
    // loops
    console.clear();
    console.group("LOOPS");
        // 1
        console.groupCollapsed('1');
            let i = 25;
            console.group('while - number 25');
            while (i >= 0) {
                console.log('i :>> ', i);
                i--;
            };
            console.groupEnd();
            console.group('for - number 25');
                for( let j = 25; j >= 0; j--) {
                    console.log('j :>> ', j);
                };
            console.groupEnd();
            let z = 25;
            console.group('do while - number 25');
                do {
                    console.log('z :>> ', z);
                    z--;
                } while (z >= 0);
            console.groupEnd();
        console.groupEnd();
        // 2
        console.groupCollapsed('2');
            console.group('while - from 10 to 50');
            let num1 = 10;
            while (num1 <= 50) {
                console.log('num: >> ', num1);
                num1 += 5;
            };
            console.groupEnd();
            console.group('for - from 10 to 50');
                for( let j = 10; j <= 50; j += 5) {
                    console.log('j :>> ', j);
                };
            console.groupEnd();
            num1 = 10;
            console.group('do while - from 10 to 50');
                do {
                    console.log('num: >> ', num1);
                    num1 += 5;
                } while (num1 <= 50);
            console.groupEnd();
        console.groupEnd();

        // 3
        console.groupCollapsed('3');
            let num2 = 1;
            let res = 0;
            console.group('while - sum from 1 to 100');
            while (num2 <= 100) {
                res += num2;
                num2++;
            };
            console.log('res :>> ', res);
            console.groupEnd();
            res = 0;
            console.group('for - sum from 1 to 100');
                for( let j = 1; j <= 100; j++) {
                    res += j;
                };
                console.log('res :>> ', res);
            console.groupEnd();
            num2 = 1;
            res = 0;
            console.group('do while - sum from 1 to 100');
                do {
                    res += num2;
                    num2++;
                } while (num2 <= 100);
                console.log('res :>> ', res);
            console.groupEnd();
        console.groupEnd();
        // 4
        console.group('4');
            let userNum;
            console.group('while - 2 + 2 * 2');
                while (userNum !== 6) {
                    userNum = +prompt('How much is 2 + 2 * 2 ?');
                };
                console.log('userNum is :>> ', userNum);
            console.groupEnd();
            console.group('for - 2 + 2 * 2');
                for(let j = 1; j <= Infinity; j++) {
                    userNum = +prompt('How much is 2 + 2 * 2 ?');
                    if (userNum === 6) {
                        break;
                    };
                };
                console.log('userNum is :>> ', userNum);
            console.groupEnd();
            console.group('do while - 2 + 2 * 2');
                do {
                    userNum = +prompt('How much is 2 + 2 * 2 ?');
                } while (userNum !== 6);
                console.log('userNum  :>> ', userNum );
            console.groupEnd();
        console.groupEnd();
    console.groupEnd();
};