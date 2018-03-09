//Exercise 1//
var total = 0;
for (var num=1; num <= 20; num++){
  total = total + num;
}
console.log("The total is: "+ total);



//Exercise 2//
		function game() {
		    var person = prompt("Do you want to play?");
		    var out="";
		    check=person.toLowerCase();
		    while(check=="yes"){
		    	string= prompt("Enter a word");
		        out=out+" "+string
		        person = prompt("Do you want to play again?");
		    	check=person.toLowerCase();
		    }
		    if (check=="no"){
				document.getElementById("demo").innerHTML ="Output:"+ out;
			}
		}

//Excercise 3//

function game() {
    var person = prompt("Would you like to print your name?");
    var out="";
    check=person.toLowerCase();
    while(check=="yes"){
      string= prompt("Enter your name");
        out=string+out+"!"
        person = prompt("Would you like to print your name?");
      check=person.toLowerCase();
    }
    if (check=="no"){
    document.getElementById("demo").innerHTML ="Output:"+ out;
  }
}



//Excercise 4//

function Meal(time, type, suggestion){
  this.time=time;
  this.type=type;
  this.suggestion=suggestion;

  this.describe = function(){
    return 'Since it is '+this.time+ ', you should be eating '+this.type+ '.  We suggest '+this.suggestion+'.';


  }
}

var morning = new Meal('morning', 'breakfast', 'eggs and toast');
var noon= new Meal('noon', 'lunch', 'a salad');
var evening= new Meal('evening', 'dinner', 'chicken and rice');

console.log(evening.describe());
