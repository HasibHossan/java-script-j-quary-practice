
function demo(){
    document.getElementById('custom').innerHTML = Date();
}
// bulb 
function bulbon(){
    document.getElementById('bulb').src="image/on.png";
}
function bulboff(){
    document.getElementById('bulb').src="image/off.png";
}
// bulb off 
// font size start 
function txt(){
    document.getElementById('changetxt').style.fontSize="50px";
}
// font size end
// txt none start
 function txtdisplaynone(){
    document.getElementById('txtnone').style.display='none';
 }
// txt none end 
// display block start
 function txtdisplayblock(){
    document.getElementById('txtblock').style.display='block';
 }
// display block end 
// text change start
function txtchange(){
    document.getElementById('txt').innerHTML = "Hello world.";
} 
// text change end 
document.getElementById('num').innerHTML=16.562;

document.getElementById('str').innerHTML='myself';

let x;
x = 14
document.getElementById('varriable').innerHTML=x;
// js variable 
var a=45;
var y=64;
var z=a+y;

document.getElementById('manyvariable').innerHTML='the value of z is:'+z;

// js conts start
const price1=256;
const price2=456;
let total=price1+price2;

document.getElementById('constant').innerHTML='the total is:'+total;
// js conts end
// java script subtraction start
let con1=25; 
let con2=25;
let con5=con1+con2;

document.getElementById('subtraction').innerHTML='this is value of con1 & con2='+con5;
// java script subtraction end 
// java script Multiplication start
let con6=5; 
let con4=16;
let con8=con6*con4;

document.getElementById('multiplication').innerHTML='this is value of con6 & con4='+con8;
// java script Multiplication end 
// java script arithmetic start
let con16=5; 
let con14=16;
let con18=(153+262)*con16/con14;

document.getElementById('arithmetic').innerHTML='this is value of con16 & con14='+con18;
// java script arithmetic end 
// java script percentage start
let con26=5; 
let con24=16;
let con28=con16%con14;

document.getElementById('percentage').innerHTML=con28;
// java script percentage end 
// Incrementing start
let incx=532;
incx++

document.getElementById('incrementing').innerHTML=incx;
// Incrementing end 
// decrementing start
let incy=32;
incy--

document.getElementById('decrementing').innerHTML=incy;
// decrementing end 
// exponentiation start
let incz=52;

document.getElementById('exponentiation').innerHTML= incz ** 2;
// exponentiation end 
// exponentiation start
let incpow=52;

document.getElementById('mathpow').innerHTML=Math.pow(incpow,3);
// exponentiation end 
// assignment oparetor start
// 1stoperator
let plusoparator = 20;
plusoparator += 6;
document.getElementById("1stoperator").innerHTML = "Value of plus operator is: " + plusoparator;
// 2ndoperator
let textdemo = "Hello";
textdemo += ",Everyone!";
document.getElementById("2ndoperator").innerHTML = textdemo;
// multiplication  operator
let multiplication = 60;
multiplication *= 2;
document.getElementById("multiplication-operator").innerHTML = multiplication;
// Exponentiation  operator
let exponentiation = 20;
exponentiation **= 5;
document.getElementById("exponentiation-operator").innerHTML = exponentiation;
// Division Assignment Operator 
let division = 80;
division /= 2;
document.getElementById("division-operator").innerHTML = division;
// Remainder Assignment Operator 
let remainder = 10;
remainder %= 8;
document.getElementById("remainder-operator").innerHTML = remainder;
// Left Shift Assignment Operator
let leftshift = -200;
leftshift <<= 5;
document.getElementById("leftshift-operator").innerHTML = leftshift;
// right Shift Assignment Operator
let rightshift = -200;
rightshift >>= 5;
document.getElementById("rightshift-operator").innerHTML = rightshift;
// Unsigned left Shift Assignment Operator
let unsignleftshift = -200;
unsignleftshift <<= 5;
document.getElementById("unsigned-left-shift-operator").innerHTML = unsignleftshift;

// Unsigned right Shift Assignment Operator
let unsignrightshift = -200;
unsignrightshift >>>= 5;
document.getElementById("unsigned-right-shift-operator").innerHTML = unsignrightshift;
// Bitwise AND Assignment Operator
let bitwiae = 51;
bitwiae &= 8;
document.getElementById("bitwish-operator").innerHTML = bitwiae;
// Bitwise OR Assignment
let bitwiseor = 51;
bitwiseor |= 8;
document.getElementById("bitwish-or-operator").innerHTML = bitwiseor;
// Bitwise XOR Assignment
let bitwisexor = 51;
bitwisexor ^= 8;
document.getElementById("bitwish-xor-operator").innerHTML = bitwisexor;
// Logical AND Assignment
let logical = 45;
logical &&= 9;
document.getElementById("logical-operator").innerHTML = logical;
// Nullish coalescing
let logicalor = 52;
logicalor ||= 8;
document.getElementById("logicalor-operator").innerHTML = logicalor;
// Nullish coalescing
let nullish = 68;
nullish ??= 8;
document.getElementById("nullish-operator").innerHTML = nullish;
// Fahrenheit to Celsius
function toCelsius(f) {
    return (5/9) * (f-32);
  }
  document.getElementById("fahrenheit-to-celsius").innerHTML = toCelsius(105);

//   Local Variables
carname();

function carname() {
  let carName = "BMW";
  document.getElementById("car1").innerHTML =
  typeof carName + " " + carName;
}

document.getElementById("car2").innerHTML =
typeof carName;

// JavaScript Objects

const car = {name:"bmw",type:"Fiat", model:"500", color:"white"};

document.getElementById("name").innerHTML = "The car name is " + car.name;
document.getElementById("type").innerHTML = "The car type is " + car.type;
document.getElementById("model").innerHTML = "The car model is " + car.model;
document.getElementById("color").innerHTML = "The car color is " + car.color;
// JavaScript Objects single line
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  
  document.getElementById("java-obj").innerHTML =
  person.firstName + " is " + person.age + " years old.";







// assignment oparetor end
//34. The Integer Accuracy
document.getElementById("nin").innerHTML =Number.isInteger(10) + "<br>" + Number.isInteger(10.5);
//35. The isSafeInteger() Method
document.getElementById("nins").innerHTML =
Number.isSafeInteger(10) + "<br>" + Number.isSafeInteger(12345678901234567890);
// 36. The toFixed() Method
let fixm = 9.656;
document.getElementById("fixm").innerHTML =
  fixm.toFixed(0) + "<br>" +
  fixm.toFixed(2) + "<br>" +
  fixm.toFixed(4) + "<br>" +
  fixm.toFixed(6);
//37. JavaScript Global Methods
document.getElementById("glom").innerHTML = 
  Number(true) + "<br>" +
  Number(false) + "<br>" +
  Number("10") + "<br>" + 
  Number("  10") + "<br>" +
  Number("10  ") + "<br>" +
  Number(" 10  ") + "<br>" +
  Number("10.33") + "<br>" + 
  Number("10,33") + "<br>" +
  Number("10 33") + "<br>" +
  Number("John");
// JavaScript Array splice
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("spli-1").innerHTML = fruits;
fruits.splice(2, 0, "Lemon", "Kiwi");
document.getElementById("spli-2").innerHTML = fruits;
// Sorting an Array
const fruit = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("sora-1").innerHTML = fruit;
fruit.sort();
document.getElementById("sora-2").innerHTML = fruit;
//  JavaScript Array Sort
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("arrs-1").innerHTML = points;
points.sort(function(a,b){return a - b});
document.getElementById("arrs-2").innerHTML = points;
//  JavaScript Array Sort descending
const point = [40, 100, 1, 5, 25, 10];
document.getElementById("drrs-1").innerHTML = point;
point.sort(function(a, b){return b - a});
document.getElementById("drrs-2").innerHTML = point;
// JavaScript Array Sort array alphabetically or numerically
const po_num = [40, 100, 1, 5, 25, 10];
document.getElementById("arran").innerHTML = po_num;  
function alfa() {
  po_num.sort();
  document.getElementById("arran").innerHTML = po_num;
}
function numr() {
  po_num.sort(function(a, b){return a - b});
  document.getElementById("arran").innerHTML = po_num;
}
//  array sort random number
const numb = [40, 100, 1, 5, 25, 10];
document.getElementById("rnum").innerHTML = numb;
function ran() {
  numb.sort(function(){return 0.5 - Math.random()});
  document.getElementById("rnum").innerHTML = numb;
}
// Array Sort highest number
const highnum = [40, 100, 1, 5, 25, 10];

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
document.getElementById("hinu").innerHTML = myArrayMax(highnum);
// JavaScript Array.filter()
const numbe = [45, 4, 9, 16, 25];
const over18 = numbe.filter(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}
document.getElementById("fil").innerHTML = over18;
// JavaScript Array.reduce()
const numberve = [45, 4, 9, 16, 25];
let sum = numberve.reduce(myFunction);
function myFunction(total, value) {
  return total + value;
}
document.getElementById("rufi").innerHTML = "The sum is " + sum;
//JavaScript new Date()
const da = new Date(2018, 11, 24, 10, 33, 30, 0);
document.getElementById("newda").innerHTML = da;

/* jquery start */
$(document).ready(function(){
 //  1-hide and show 

  $("#hide").click(function(){
      $(".topic").hide();
  });

  $("#show").click(function(){
  $(".topic").show();
  });

  // 2 hide and show with fade 

  $("#fade-b").click(function(){
    $(".text").hide(1000);
  });
  $("#fade-b2").click(function(){
    $(".text").show(1000);
  });
  //3.jQuery toggle

  $("#toggle-b").click(function(){
    $(".toggle-txt").toggle()
  })

  // 4. fade in with diffrent perametar 
  $("#fadein-ex").click(function(){
    $("#box1").fadeIn();
    $("#box2").fadeIn("slow");
    $("#box3").fadeIn(3000);
  });
  // 5. fade ouy with diffrent perametar 
  $("#fadeout-ex").click(function(){
    $("#box4").fadeOut();
    $("#box5").fadeOut("slow");
    $("#box6").fadeOut(3000);
  });
  // 6. fade ouy with diffrent perametar 
  $("#fade-in-t").click(function(){
    $("#box7").fadeToggle();
    $("#box8").fadeToggle("slow");
    $("#box9").fadeToggle(3000);
  });
    //7.jQuery fadeTo Method
    $("#box-fade").click(function(){
      $("#box10").fadeTo("slow", 0.9);
      $("#box11").fadeTo("fast", 0.6);
      $("#box12").fadeTo("slow", 0.10);
    });
    // 8.jQuery slideDown Method
  $("#sl-down").click(function(){
    $("#slide-txt").slideDown("slow");
  });
    // 9.jQuery slideup Method
  $("#sl-up").click(function(){
    $("#slide-txt1").slideUp("slow");
  });
    // 10.jQuery slide Toggle Method
  $("#sl-toggle").click(function(){
    $("#slide-txt2").slideToggle("slow");
  });

  

});





















