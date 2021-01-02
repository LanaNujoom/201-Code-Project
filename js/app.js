'use strict';

var counter = 0
var userName = prompt('What is You Name ??')

alert('Hello ' + userName);

function firstQuestion() {
    var myName = prompt('Do You Think My Name is Lana ! - please answer with yes/no or y/n');

    switch (myName.toLowerCase()) {

        case 'yes':
        case 'y':
            alert('That is True My name is Lana');
            counter++
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

    switch (myfavoriteColor.toLowerCase()) {

        case 'yes':
        case 'y':
            alert('That is True I Like Red');
            counter++
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

    switch (myfavoriteprogrammingLanguage.toLowerCase()) {

        case 'yes':
        case 'y':
            alert('That is True My Favorite Programming Language is Javascripts');
            counter++
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

    switch (myfavoritehobby.toLowerCase()) {

        case 'yes':
        case 'y':
            alert('That is False :( My Favorite Sport is Basketball');
            break;
        case 'no':
        case 'n':
            alert('Fantastic :) My Favorite Sport is Basketball!');
            counter++
            break;



    }

}

 fourthQuestion();



function fifthQuestion() {


    var myfavoritefood = prompt('Guess if I love Fettuccini or Not ! - please answer with yes/no or y/n');

    switch (myfavoritefood.toLowerCase()) {

        case 'yes':
        case 'y':
            alert('Perefect I love Fettucini');
            counter++
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

        var myAge = prompt(' Guess How old am I (20-30)! ');
        var num1 = parseInt(myAge);



        if (num1 === 25) {

            alert('That is Great , I am 25 years old');
            counter++
            break;

        } else if (num1 > 25) {

            alert('Too High , I am younger ');

        }
        else {

            alert(' Too Low, I am older');

        }


    }



    alert('I am 25 Years Old');



}

sixthQuestion();




function seventhQues(){

    var colorArray = ['red', 'yellow', 'blue', 'pink', 'green'];




for (var x = 0; x < 6; x++) {

    var colorName = prompt('Can you guess one of the colors I like !').toLowerCase();

    if (colorName === colorArray[0] || colorName === colorArray[1] || colorName === colorArray[2] || colorName === colorArray[3] || colorName === colorArray[4]) {
        alert(' That is true');
        counter++
        break;
    } else {
        alert('Keep Trying Please');

    }




}


alert('I like red, yellow,blue,pink and green :D ');

}


seventhQues();


alert(counter + ' Out of 7 is Your Score');

alert('Welcome to my site ' + userName);

