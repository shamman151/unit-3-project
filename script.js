let doorOneButton=document.querySelector(".door-one");
let doorTwoButton=document.querySelector(".door-two");
let storyOpening=document.querySelector(".story-opening")
let optionOneScreen=document.querySelector(".option-one-screen")
let optionTwoScreen=document.querySelector(".option-two-screen")
let mindControlButton=document.querySelector(".mindcontrol-button")
let shapeShiftButton=document.querySelector(".shapeshift-button")
let title=document.querySelector(".title")
let mindControlEnd=document.querySelector(".mindcontrol-end")
let shapeShiftEnd=document.querySelector(".shapeshift-end")
let yesEnd=document.querySelector(".yes-end")
let noEnd=document.querySelector(".no-end")





doorOneButton.onclick=function(){
  optionOneScreen.style.display="block";
  storyOpening.style.display="none";
};

doorTwoButton.onclick=function(){
  optionTwoScreen.style.display="block";
  storyOpening.style.display="none";
};

