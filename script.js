//1. Display number in textbox
      // display=document.getElementById('display').value;
      buttons=document.querySelectorAll('.button');

      function displayNum(num){
        console.log(num);
        display.value+=num;
      }

//2. Clear textbox
      function clearBox1(){
        display.value='';
      }

//3.evaluate expression

      function Calculate(){
        output=eval(display.value);   //evaluating expression in display
        display.value=output;
      }

//4. Remove last item from textbox
      function removeLastItem(){
        currentExpression= display.value;
        display.value= currentExpression.slice(0,-1);
        
      }
      
      
//Scientific
function ScientificMode(){
  
  Scientific.innerHTML=`<div onclick="Calculator()" class="fw-bold  fs-5 pt-1">123</div>`

  keyboard.innerHTML=`
  <div style="height:391px">

  <div class="row row-cols-4">
    <div class="button  fs-4" style="padding-top:12px; font-weight:600;" onclick="ScientificCalc('sin')">sin</div>
    <div class="button fs-4" style="padding-top:12px; font-weight:600" onclick="ScientificCalc('cos')">cos</div>
    <div class="button  fs-4" style="padding-top:12px;font-weight:600" onclick="ScientificCalc('tan')">tan</div>
    <div class="button  fs-4" style="padding-top:12px; font-weight:600" onclick="ScientificCalc('log')">log</div>

  </div>

  <div class="row row-cols-4">
    <div class="button  fs-4 " style="padding-top:12px; font-weight:600" onclick="ScientificCalc('ln')">ln</div> 
    <div class="button  fs-4" style="padding-top:12px; font-weight:600" onclick="ScientificCalc('exp')">e^<span style="font-weight:400">x</span> </div>
    <div class="button  fs-4" style="padding-top:12px; font-weight:600" onclick="ScientificCalc('pow')">x²</div>
    <div class="button  fs-4 " style="padding-top:12px; font-weight:600" onclick="ScientificCalc('abs')">|x|</div>
  </div>

  <div class="row row-cols-4">
    <div class="button  fs-4" style="padding-top:12px; font-weight:600" onclick="ScientificCalc('fact')">x!</div>
    <div class="button  fs-4" style="padding-top:12px; font-weight:600" onclick="ScientificCalc('sqrt')">√</div>
    <div class="button  fs-4" style="padding-top:12px; font-weight:600" onclick="ScientificCalc('aprox')">≈</div>
    <div class="button  fs-2 text-danger" onclick="clearBox1()">C</div>
  </div>
    
</div>`


}




function ScientificCalc(fx){      //fx is a variable
  

if(display.value==""){
    display.value="";
    alert("Please enter a valid input")
}
else{

  if (fx=='sin') {

    display.value= Math.sin( display.value * Math.PI/180);
    
  }

  else if (fx=='cos') {

    display.value= Math.cos( display.value * Math.PI/180);
    
  }

  else if (fx=='tan') {

    display.value= Math.tan( display.value * Math.PI/180);
    
  }

  else if (fx=='log') {

    display.value= Math.log10( display.value);
    

}

else if (fx=='ln') {

  display.value= Math.log(display.value);
  

}

else if (fx=='exp') {

  display.value= Math.exp(display.value);
  

}

else if (fx=='pow') {

  display.value= Math.pow( display.value, 2);
  

}

else if (fx=='abs') {

  display.value= Math.abs( display.value);
  

}

else if (fx=='fact') {
let fact=1
  for(var i=display.value; i>=1; i--){
    fact=fact*i;
  }
  display.value= fact;
  

}

else if (fx=='sqrt') {

  display.value= Math.sqrt( display.value);
  

}

else if (fx=='aprox') {

  display.value= Math.round( display.value);
  

}


}

}


//Unit Converter

//  function getSelectValue(){
//   var selectValue= document.getElementById('list').value;
//   var selectValue2= document.getElementById('list2').value;
//   console.log(selectValue);
//   console.log(selectValue2);
//   console.log(typeof(selectValue));
 
// }



function UnitLength(){
  window.location='UnitLength.html';
}
function Calculator(){
  window.location='index.html';

}

function displayLength(leng){
  unit.value+=leng;
  unit2.value+=leng;
  CalcCentimeters();

}

function Converter(q){
  result= unit.value*q;
  unit2.value=result;
}

function CalcCentimeters(){

  // unit2.value='';

//get the selecte tab value
  // var selectTab=document.querySelectorAll('.tab').value;
  // console.log(selectTab);

//get the selected option value
  var selectValue= document.getElementById('list').value;
  var selectValue2= document.getElementById('list2').value;

  unitDisplay.innerHTML=` <label  for="">${selectValue}</label>`;
  unitDisplay2.innerHTML=` <label  for="">${selectValue2}</label>`;


if(unit.value==""){
  unit2.value="";
}
else{

//length unit converter
 //inch
  
  if (selectValue=='in' && selectValue2=='cm') {
     Converter(2.54);
     
  // result= unit2.value/2.54;
  // unit.value=result;
  }
  else if(selectValue=='in' && selectValue2=='mm'){
    Converter(25.4);

  }
  else if(selectValue=='in' && selectValue2=='m'){
    Converter(0.0254);

  }
  else if(selectValue=='in' && selectValue2=='km'){
    Converter(0.0000254);

  }
  else if(selectValue=='in' && selectValue2=='in'){
    Converter(1);

  }
  else if(selectValue=='in' && selectValue2=='ft'){
    Converter(0.0833333333);

  }

  //mm
  else if(selectValue=='mm' && selectValue2=='mm'){
    Converter(1);

  }
  else if(selectValue=='mm' && selectValue2=='cm'){
    Converter(0.1);

  }
  else if(selectValue=='mm' && selectValue2=='m'){
    Converter(0.001);

  }
  else if(selectValue=='mm' && selectValue2=='km'){
    Converter(0.000001);

  }
  else if(selectValue=='mm' && selectValue2=='in'){
    Converter(0.0393700787);

  }
  else if(selectValue=='mm' && selectValue2=='ft'){
    Converter(0.0032808399);

  }


  //cm
  else if(selectValue=='cm' && selectValue2=='mm'){
    Converter(10);

  }
  else if(selectValue=='cm' && selectValue2=='cm'){
    Converter(1);

  }
  else if(selectValue=='cm' && selectValue2=='m'){
    Converter(0.01);

  }
  else if(selectValue=='cm' && selectValue2=='km'){
    Converter(0.00001);

  }
  else if(selectValue=='cm' && selectValue2=='in'){
    Converter(0.3937007874);

  }
  else if(selectValue=='cm' && selectValue2=='ft'){
    Converter(0.032808399);

  }


  //m
  else if(selectValue=='m' && selectValue2=='mm'){
    Converter(1000);

  }
  else if(selectValue=='m' && selectValue2=='cm'){
    Converter(100);

  }
  else if(selectValue=='m' && selectValue2=='m'){
    Converter(1);

  }
  else if(selectValue=='m' && selectValue2=='km'){
    Converter(0.001);

  }
  else if(selectValue=='m' && selectValue2=='in'){
    Converter(39.3700787402);

  }
  else if(selectValue=='m' && selectValue2=='ft'){
    Converter(3.280839895);

  }


  //km
  else if(selectValue=='km' && selectValue2=='mm'){
    Converter(1000000);

  }
  else if(selectValue=='km' && selectValue2=='cm'){
    Converter(100000);

  }
  else if(selectValue=='km' && selectValue2=='m'){
    Converter(1000);

  }
  else if(selectValue=='km' && selectValue2=='km'){
    Converter(1);

  }
  else if(selectValue=='km' && selectValue2=='in'){
    Converter(39370.078740157);

  }
  else if(selectValue=='km' && selectValue2=='ft'){
    Converter(3280.8398950131);

  }


  //ft
  else if(selectValue=='ft' && selectValue2=='mm'){
    Converter(304.8);

  }
  else if(selectValue=='ft' && selectValue2=='cm'){
    Converter(30.48);

  }
  else if(selectValue=='ft' && selectValue2=='m'){
    Converter(0.3048);

  }
  else if(selectValue=='ft' && selectValue2=='km'){
    Converter(0.0003048);

  }
  else if(selectValue=='ft' && selectValue2=='in'){
    Converter(12);

  }
  else if(selectValue=='ft' && selectValue2=='ft'){
    Converter(1);

  }



//temperature unit converter

 //C
 if(unit.value!='-'){

 
 if (selectValue=='℃' && selectValue2=='℃') {
  Converter(1);

  }
  else if(selectValue=='℃' && selectValue2=='℉'){
    result= (unit.value*1.8)+32;
    unit2.value=result;
  }
  else if(selectValue=='℃' && selectValue2=='K'){
    result= unit.value+275.15;
    unit2.value=result;

  }

  //F
  if (selectValue=='℉' && selectValue2=='℃') {
    result= (unit.value-32)*(5/9);
    unit2.value=result;
 
  }
  else if(selectValue=='℉' && selectValue2=='℉'){
    Converter(1);

  }
  else if(selectValue=='℉' && selectValue2=='K'){
    result= (unit.value-32)*(5/9) + 273.15;
    unit2.value=result;
  }

  //K
  if (selectValue=='K' && selectValue2=='℃') {
    result= unit.value-273.15;
    unit2.value=result;

  }
  else if(selectValue=='K' && selectValue2=='℉'){
    result= (unit.value-273.15)*1.8+32;
    unit2.value=result;

  }
  else if(selectValue=='K' && selectValue2=='K'){
  Converter(1);

  }

 }else{

  unit2.value='';

 }
//Mass unit converter

 //gram
 if (selectValue=='g' && selectValue2=='g') {
  Converter(1);
}
else if(selectValue=='g' && selectValue2=='kg'){
Converter(0.001);

}
else if(selectValue=='g' && selectValue2=='lb'){
Converter(0.0022046226);

}
else if(selectValue=='g' && selectValue2=='t'){
Converter(0.000001);

}
  //kg
  if (selectValue=='kg' && selectValue2=='g') {
    Converter(1000);
    
 // result= unit2.value/2.54;
 // unit.value=result;
 }
 else if(selectValue=='kg' && selectValue2=='kg'){
   Converter(1);

 }
 else if(selectValue=='kg' && selectValue2=='lb'){
   Converter(2.2046226218);

 }
 else if(selectValue=='kg' && selectValue2=='t'){
   Converter(0.001);

 }


  //pounds
  if (selectValue=='lb' && selectValue2=='g') {
    Converter(453.59237);
  }
  else if(selectValue=='lb' && selectValue2=='kg'){
  Converter(0.45359237);

  }
  else if(selectValue=='lb' && selectValue2=='lb'){
  Converter(1);

  }
  else if(selectValue=='lb' && selectValue2=='t'){
  Converter(0.0004535924);

  }

  //tons
  if (selectValue=='t' && selectValue2=='g') {
    Converter(1000000);
  }
  else if(selectValue=='t' && selectValue2=='kg'){
  Converter(1000);

  }
  else if(selectValue=='t' && selectValue2=='lb'){
  Converter(2204.6226218488);

  }
  else if(selectValue=='t' && selectValue2=='t'){
  Converter(1);

  }


  //Time unit converter

  //millisec
  if (selectValue=='ms' && selectValue2=='ms') {
    Converter(1);
  }
  else if(selectValue=='ms' && selectValue2=='s'){
  Converter(0.001);

  }
  else if(selectValue=='ms' && selectValue2=='min'){
  Converter(0.0000166667);

  }
  else if(selectValue=='ms' && selectValue2=='h'){
  Converter(2.77777778);

  }
  else if(selectValue=='ms' && selectValue2=='d'){
    Converter(1.15740741);
    }


  //sec  
  if (selectValue=='s' && selectValue2=='ms') {
    Converter(1000);
  }
  else if(selectValue=='s' && selectValue2=='s'){
  Converter(1);

  }
  else if(selectValue=='s' && selectValue2=='min'){
  Converter(0.0166667);

  }
  else if(selectValue=='s' && selectValue2=='h'){
  Converter(0.0002777778);

  }
  else if(selectValue=='s' && selectValue2=='d'){
    Converter(0.0000115741);
  }


  //min
  if (selectValue=='min' && selectValue2=='ms') {
    Converter(60000);
  }
  else if(selectValue=='min' && selectValue2=='s'){
  Converter(60);

  }
  else if(selectValue=='min' && selectValue2=='min'){
  Converter(1);

  }
  else if(selectValue=='min' && selectValue2=='h'){
  Converter(0.0166666667);

  }
  else if(selectValue=='min' && selectValue2=='d'){
    Converter(0.0006944444);
  
  }

  //hour
  if (selectValue=='h' && selectValue2=='ms') {
    Converter(3600000);
  }
  else if(selectValue=='h' && selectValue2=='s'){
  Converter(3600);

  }
  else if(selectValue=='h' && selectValue2=='min'){
  Converter(60);

  }
  else if(selectValue=='h' && selectValue2=='h'){
  Converter(1);

  }
  else if(selectValue=='h' && selectValue2=='d'){
    Converter(0.0416666667);
  
  }

 //days
  if (selectValue=='d' && selectValue2=='ms') {
    Converter(86400000);
  }
  else if(selectValue=='d' && selectValue2=='s'){
  Converter(86400);

  }
  else if(selectValue=='d' && selectValue2=='min'){
  Converter(1440);

  }
  else if(selectValue=='d' && selectValue2=='h'){
  Converter(24);

  }
  else if(selectValue=='d' && selectValue2=='d'){
    Converter(1);
  
  }

}

}

function backspace(){
  currentExpn= unit.value;
  unit.value= currentExpn.slice(0,-1); 
  CalcCentimeters();

}

function clearBox(){
  unit.value='';
  unit2.value='';

}