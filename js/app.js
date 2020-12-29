'use strict';

var l = 0
var userName=prompt('What is You Name ??')
// console.log(userName);
alert ('Hello '+ userName);

var myName=prompt('Do You Think My Name is Lana ! - please answer with yes/no or y/n');
// console.log(myName.toLowerCase());
switch(myName.toLowerCase()){

    case 'yes':
    case 'y':
        alert ('That is True My name is Lana');
        l++
        break ;
    case 'no':
    case 'n':
        alert(' False, My name is Lana !');
        break;

        

}

var myfavoriteColor=prompt('Do You Think I Like Red ! - please answer with yes/no or y/n');
// console.log(myfavoriteColor.toLowerCase());
switch(myfavoriteColor.toLowerCase()){

    case 'yes':
    case 'y':
        alert ('That is True I Like Red');
        l++
        break ;
    case 'no':
    case 'n':
        alert(' False, My Favorite Color is Red !');
        break;

        

}

var myfavoriteprogrammingLanguage=prompt('Do You Think My Favorite Programming Language is Javascripts ! - please answer with yes/no or y/n');
// console.log(myfavoriteprogrammingLanguage.toLowerCase());
switch(myfavoriteprogrammingLanguage.toLowerCase()){

    case 'yes':
    case 'y':
        alert ('That is True My Favorite Programming Language is Javascripts');
        l++
        break ;
    case 'no':
    case 'n':
        alert(' Not Ture, My Favorite Programming Language is Javascripts !');
        break;

        

}

var myfavoritehobby=prompt('Do You Think My Favorite Sport is Football ! - please answer with yes/no or y/n');
// console.log(myfavoritehobby.toLowerCase());
switch(myfavoritehobby.toLowerCase()){

    case 'yes':
    case 'y':
        alert ('That is False :( My Favorite Sport is Basketball');
        break ;
    case 'no':
    case 'n':
        alert('Fantastic :) My Favorite Sport is Basketball!');
        l++
        break;

        

}

var myfavoritefood=prompt('Guess if I love Fettuccini or Not ! - please answer with yes/no or y/n');
// console.log(myfavoritefood.toLowerCase());
switch(myfavoritefood.toLowerCase()){

    case 'yes':
    case 'y':
        alert ('Perefect I love Fettucini');
        l++
        break ;
    case 'no':
    case 'n':
        alert('But My Favorite Food is Fettuccini !');
        break;

        

}





for( var i=0; i<4;  i++){

    var myAge=prompt(' Guess How old am I (20-30)! ');
     var num1 = parseInt(myAge);
     console.log(num1);


    if (num1 == 25) {

        alert('That is Great , I am 25 years old');
        l++
        break;

        } else if(num1 > 25){

        alert('Too High , I am younger ');
        
    }
          else {

        alert(' Too Low, I am older' );
       
    }


}



alert('I am 25 Years Old');

var colorArray= ['red','yellow','blue','pink','green'];




for( var x=0; x<6; x++){

    var colorName= prompt( 'Can you guess one of the colors I like !').toLowerCase();

    if  (colorName === colorArray[0]|| colorName === colorArray[1]||colorName === colorArray[2] || colorName === colorArray[3]|| colorName === colorArray[4] ) {
        alert (' That is true');
        l++
        break;
    } else {
        alert ( 'Keep Trying Please');

    }




}
console.log(colorName.toLowerCase());

alert('I like red, yellow,blue,pink and green :D ');


alert(l + ' Out of 7 is Your Score');       

alert ('Welcome to my site '+ userName);

