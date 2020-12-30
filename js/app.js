'use strict';

var Counter = 0;
var userName = prompt('What is You Name ??');
// console.log(userName);
alert('Hello ' + userName);

function firstQuestion() {
    var myName = prompt('Do You Think My Name is Lana ! - please answer with yes/no or y/n');
    // console.log(myName.toLowerCase());
    switch (myName.toLowerCase()) {

        case 'yes':
        case 'y':
            alert('That is True My name is Lana');
            Counter++
            break;
        case 'no':
        case 'n':
            alert(' False, My name is Lana !');
            break;

    }
}

firstQuestion();


function secondQuestion() {
    var myfavoriteColor = prompt('Do You Think I Like Red ! - please answer with yes/no or y/n');
    // console.log(myfavoriteColor.toLowerCase());
    switch (myfavoriteColor.toLowerCase()) {

        case 'yes':
        case 'y':
            alert('That is True I Like Red');
            Counter++
            break;
        case 'no':
        case 'n':
            alert(' False, My Favorite Color is Red !');
            break;

    }
}
secondQuestion();


function thirdQuestion() {
    var myfavoriteprogrammingLanguage = prompt('Do You Think My Favorite Programming Language is Javascripts ! - please answer with yes/no or y/n');
    // console.log(myfavoriteprogrammingLanguage.toLowerCase());
    switch (myfavoriteprogrammingLanguage.toLowerCase()) {

        case 'yes':
        case 'y':
            alert('That is True My Favorite Programming Language is Javascripts');
            Counter++
            break;
        case 'no':
        case 'n':
            alert(' Not Ture, My Favorite Programming Language is Javascripts !');
            break;

    }
}
thirdQuestion();


function fourthQuestion() {
    var myfavoritehobby = prompt('Do You Think My Favorite Sport is Football ! - please answer with yes/no or y/n');
    // console.log(myfavoritehobby.toLowerCase());
    switch (myfavoritehobby.toLowerCase()) {

        case 'yes':
        case 'y':
            alert('That is False :( My Favorite Sport is Basketball');
            break;
        case 'no':
        case 'n':
            alert('Fantastic :) My Favorite Sport is Basketball!');
            Counter++
            break;
    }
}
fourthQuestion();

function fifthQuestion() {
    var myfavoritefood = prompt('Guess if I love Fettuccini or Not ! - please answer with yes/no or y/n');
    // console.log(myfavoritefood.toLowerCase());
    switch (myfavoritefood.toLowerCase()) {

        case 'yes':
        case 'y':
            alert('Perefect I love Fettucini');
            Counter++
            break;
        case 'no':
        case 'n':
            alert('But My Favorite Food is Fettuccini !');
            break;
    }

}
fifthQuestion();



function sixthQuestion() {
    for (var i = 0; i < 4; i++) {

        var myAge = parseInt(prompt(' Guess How old am I (20-30)! '));
        console.log("How old am I " + myAge);
        if (myAge == 25) {

            alert('That is Great , I am 25 years old');
            //console.log("old am I " +myAge);
            Counter++
            break;

        } else if (myAge > 25) {

            alert('Too High , I am younger ');
            //console.log("I am younger " +myAge);
        }
        else {

            alert(' Too Low, I am older');
            //console.log("I am older ");
        }

    }

    alert('I am 25 Years Old');
    
}
sixthQuestion();


function seventhQuestion() {
    var colorArray = ['red', 'yellow', 'blue', 'pink', 'green'];

    for (var x = 0; x < 6; x++) {

        var colorName = prompt('Can you guess one of the colors I like !').toLowerCase();

        if (colorName === colorArray[0] || colorName === colorArray[1] || colorName === colorArray[2] || colorName === colorArray[3] || colorName === colorArray[4]) {
            alert(' That is true');
            //console.log("colors I like "+colorName);
            Counter++
            break;
        } else {
            alert('Keep Trying Please');
            //console.log("colors I dont like "+colorName);

        }
    }
   // console.log(colorName.toLowerCase());

    alert('I like red, yellow,blue,pink and green :D ');
}
seventhQuestion();

alert(Counter + ' Out of 7 is Your Score');

alert('Welcome to my site ' + userName);

