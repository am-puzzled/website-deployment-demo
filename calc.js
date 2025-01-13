

// Put the buttons in a const to work with them easily

      
//       const CalcScreen2 =document.getElementById("id2");
//       const CalcScreen = document.getElementById("id");

//       let One1 =  [];
//       let Two2 =  [];
//       let Three3 = [];
//       let Four4=   [];
//       let Five5 = [];
//       let Six6 = [];
//       let seven7 = [];
//       let Eight8 = [];
//       let Nine9 = [];
//       let Zero0 = [];
//       let Addition = [];
//       let Subtraction = [];
//       let Division = [];
//       let Multiplication = [];
//       let decimalDot = [];
//       let equalsSign = [];

//       let everythingTypedOnCalcScreen = [];
     
     


      

    

//       const One =  document.getElementById("ones");
//       One.onclick = function (){
//          console.log ("1");
//          One1.push("1");
//          everythingTypedOnCalcScreen.push(One1);
//          console.log(everythingTypedOnCalcScreen);
//          CalcScreen.textContent = (everythingTypedOnCalcScreen.join(""));
//       }
//       const Two =  document.getElementById("two");
//       Two.onclick = function (){
//          console.log ("2");
//          Two2.push("2");
//          everythingTypedOnCalcScreen.push(Two2);
//          console.log(everythingTypedOnCalcScreen);
//          CalcScreen.textContent = (everythingTypedOnCalcScreen.join(""));
//       }
//       const Three =  document.getElementById("three");
//       Three.onclick = function (){
//          console.log ("3");
//          Three3.push("3");
//          everythingTypedOnCalcScreen.push(Three3);
//          console.log(everythingTypedOnCalcScreen);
//          CalcScreen.textContent = (everythingTypedOnCalcScreen.join(""));
//       }
//       const Four =  document.getElementById("four");
//       Four.onclick = function (){
//          console.log ("4");
//          Four4.push("4");
//          everythingTypedOnCalcScreen.push(Four4);
//          console.log(everythingTypedOnCalcScreen);
//          CalcScreen.textContent = (everythingTypedOnCalcScreen.join(""));
//       }
//       const Five =  document.getElementById("five");
//       Five.onclick = function (){
//          console.log ("5");
//          Five5.push("5");
//          everythingTypedOnCalcScreen.push(Five5);
//          console.log(everythingTypedOnCalcScreen);
//          CalcScreen.textContent = (everythingTypedOnCalcScreen.join(""));
//       }
//       const Six =  document.getElementById("six");
//       Six.onclick = function (){
//          console.log ("6");
//          Six6.push("6");
//          everythingTypedOnCalcScreen.push(Six6);
//          console.log(everythingTypedOnCalcScreen);
//          CalcScreen.textContent = (everythingTypedOnCalcScreen.join(""));
//       }
//       const Seven =  document.getElementById("seven");
//       Seven.onclick = function (){
//          console.log ("7");
//          seven7.push("7");
//          everythingTypedOnCalcScreen.push(seven7);
//          console.log(everythingTypedOnCalcScreen);
//          CalcScreen.textContent = (everythingTypedOnCalcScreen.join(""));
//       }
//       const Eight =  document.getElementById("eight");
//       Eight.onclick = function (){
//          console.log ("8");
//          Eight8.push("8");
//          everythingTypedOnCalcScreen.push(Eight8);
//          console.log(everythingTypedOnCalcScreen);
//          CalcScreen.textContent = (everythingTypedOnCalcScreen.join(""));
//       }
//       const Nine =  document.getElementById("neun");
//       Nine.onclick = function (){
//          console.log ("9");
//          Nine9.push("9");
//          everythingTypedOnCalcScreen.push(Nine9);
//          console.log(everythingTypedOnCalcScreen);
//          CalcScreen.textContent = (everythingTypedOnCalcScreen.join(""));
//       }
//       const Zero =  document.getElementById("zero");
//       Zero.onclick = function (){
//          console.log ("0");
//          Zero0.push("0");
//          everythingTypedOnCalcScreen.push(Zero0);
//          console.log(everythingTypedOnCalcScreen);
//          CalcScreen.textContent = (everythingTypedOnCalcScreen.join(""));
//       }
//       const Devide =  document.getElementById("devide");
//       Devide.onclick = function (){
//          console.log ("÷");
//          Division.push("/");
//       }
//       const Times =  document.getElementById("times");
//       Times.onclick = function (){
//          console.log ("×");
//          Multiplication.push("×");
//       }
//       const Minus =  document.getElementById("minus");
//       Minus.onclick = function (){
//          console.log ("-");
//          Subtraction.push("-");
//       }
//       const Plus =  document.getElementById("plus");
//       Plus.onclick = function (){
//          console.log ("+");
//          Addition.push("+");
//       }
//       const Decimal =  document.getElementById("decimal");
//       Decimal.onclick = function (){
//          console.log (".");
//          decimalDot.push(".");
//       }
//       const Equals =  document.getElementById("equals");
//       Equals.onclick = function (){
//          // console.log ("=");
//          // CalcScreen.textContent += "=";
//          // document.body.style.backgroundColor = "orange";
//          // console.log("orange");
//          // equalsSign.push("=");
//          console.log (everythingTypedOnCalcScreen.join(""));
//          CalcScreen.textContent = (everythingTypedOnCalcScreen.join(""));
        
//       }


const CalcScreen = document.getElementById("displayScreen");

 
function appendToDisplay(input){
  CalcScreen.value += input;
}
function Calculate(){
  try
  {CalcScreen.value = eval( CalcScreen.value);}
  catch(error)
  {
   CalcScreen.value = "Error"
  }
}
function Clear(){
   CalcScreen.value = "";
}





























//  // let everythingTypedOnCalcScreenOpened= [everythingTypedOnCalcScreen];

//       // function updateList() 
//       // {
//       //    const CalcScreen = document.getElementById("id");
//       //    if (CalcScreen) {
//       //       CalcScreen.innerHTML = ""; // Clear the current content
//       //       allItems = [...One1,...Two2,...Three3,...Four4,...Five5,...Six6,...seven7,...Eight8,...Nine9,...Zero0,...Addition,...Subtraction,...Multiplication,...Division,...decimalDot,...equalsSign];
//       //       allItems.forEach(item => {
//       //          const listItem = document.createElement("li"); // Create a list item
//       //          listItem.textContent = item; // Set the text content of the list item
//       //          CalcScreen.appendChild(listItem); // Append the list item to the display
//       //      });
//       //       // console.log (everythingTypedOnCalcScreen);
//       //        // Flatten the nested arrays
//       //        //ticketsDisplay.append(everythingTypedOnCalcScreen);
//       //        }
//       // }



//       // // if(CalcScreen.textContent.trim() !== ""){
//       // //    CalcScreen2.textContent = CalcScreen.textContent
//       // //    console.log(CalcScreen.textContent + 5);
//       // CalcScreen.textContent = everythingTypedOnCalcScreen.join("");
//       // console.log (...everythingTypedOnCalcScreen.join(""));
//       // // }

      
