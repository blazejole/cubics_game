//
// var players, activePlayer, initValues, counter, fSaveCombination, sum;
//
//
// players = [0, 1 ,2, 3];//temporary 3 players, min 2->max 4 players
// // counter = [0, 0 , 0];
//
// function init(){
//   initValues = [0, 0, 0 , 0 , 0 , 0];
//     activePlayer=1;
//     counter= 0;
//     sum = [0, 0, 0, 0];
//
//     $('#one-recap').children(".data").html('0');
//     $('#two-recap ').children(".data").html('0');
//     $('#three-recap').children(".data").html('0');
//     $('#four-recap').children(".data").html('0');
//     $('#five-recap').children( ".data").html('0');
//     $('#six-recap').children(".data").html('0');
//     $('#tripple-reca').children(".data").html('0');
//     $('#full-recap').children(".data").html('0');
//     $('#small-street-recap').children(".data").html('0');
//     $('#street-recap').children(".data").html('0');
//     $('#fourfold-recap').children(".data").html('0');
//     $('#chance-recap').children(".data").html('0');
//
//     $( '.cubic-images').children().removeClass('active');
//     toggleActivePlayer();
//     roll(initValues);
// }
//
//
// $( '#new-game' ).click(function() {
//   init();
//   $( '.cubic-images > img').toggleClass('visible');
// });
//
//
//
// $( '#mix-cubics' ).click(function() {
//   counter++;
//   if(counter==2){
//     hoverAvilableValues();
//   }
//
//   if(counter<3){
//     roll(initValues);
//   }else{
//     // counter = 0;
//     nextPlayer();
//   }
// });
//
// function hoverAvilableValues(){
//   $( '#mix-cubics').toggleClass('not-visible');
//   console.log("activePLayters")
//   console.log(activePlayer);
// }
//
//
//
// function nextPlayer(){
//   alert("nextPLayer")
//   counter= 0;
//   if(activePlayer < 4){
//     activePlayer++;
//   }else{
//     activePlayer = 1;
//   }
//
//   toggleActivePlayer();
//   hoverAvilableValues();
//   removeActiveCubics();
//   roll(initValues);
// }
//
// //event listener to hover each cubic
// for(let i=1; i<= 6; i++){
//     $( '.cubic-'+i ).click(function() {
//       hoverCubic(i);
//     });
// }
//
// function  hoverCubic(which){
//   console.log(which);
//   $( '.cubic-'+which).toggleClass('active');
//  }
//
//  // ================================
// function removeActiveCubics(){
//   for(let i=1; i<= 6; i++){
//       $( '.cubic-'+i ).removeClass('active');
//   }
// }
//
//
//
//
// function roll(array){
//   var cubic = [];
//   var tempCubic;
// // 6random numbers
//   for(var i=0; i< array.length; i++){
//     //if class is active, skip this index
//     if(!$( '.cubic-'+(i+1)).hasClass('active')){
//
//       tempCubic = Math.floor(Math.random() * 6) +1;
//       initValues[i] = tempCubic;
//       // change cubic img equals diced number
//
//       $( ".cubic-"+(i+1)).attr("src", " images/cubic-"+tempCubic+ ".png");
//     }
//
//   }
//   console.log("roll method>>>>after")
//   console.log(initValues);
//
//   //check if values match game criteria:
//   //sort array
//   // initValues.sort(function(a, b){
//   //   return a -b;
// // });
//
// checkValues(initValues);
//
//
// }
//
// function checkValues(arr){
//   var counterOne = 0,
//       counterTwo = 0,
//       counterThree = 0,
//       counterFour = 0,
//       counterFive = 0,
//       counterSix = 0,
//       tempOccurenceArray = [];
//       // counterThreeRecap = 0;
//
//
//   for(var i=0; i< arr.length; i++){
//
//     if(arr[i] === 1)
//       counterOne++;
//     if(arr[i] === 2)
//       counterTwo++;
//     if(arr[i] === 3)
//       counterThree++;
//     if(arr[i] === 4)
//       counterFour++;
//     if(arr[i] === 5)
//       counterFive++;
//     if(arr[i] === 6)
//       counterSix++;
//   }
//
//     //push to array
//     tempOccurenceArray.push(counterOne , counterTwo , counterThree, counterFour, counterFive, counterSix);
//     console.log(counterOne , counterTwo , counterThree, counterFour, counterFive, counterSix);
//     //set values to activePlayers
//     setValuesToTable(tempOccurenceArray);
//
//
//
// }
//
// function setValuesToTable(occuranceArray){
//   console.log("active player")
//   console.log(activePlayer);
//   console.log(occuranceArray);
//   players[activePlayer] = occuranceArray;
//
//   // if((acitvePlayer+1) === players.length)
//   //   activePlayer =0;
//   $( '#player'+(activePlayer)+'-one-recap' ).html(occuranceArray[0]*1);
//   $( '#player'+(activePlayer)+'-two-recap' ).html(occuranceArray[1]*2);
//   $( '#player'+(activePlayer)+'-three-recap' ).html(occuranceArray[2]*3);
//   $( '#player'+(activePlayer)+'-four-recap' ).html(occuranceArray[3]*4);
//   $( '#player'+(activePlayer)+'-five-recap' ).html(occuranceArray[4]*5);
//   $( '#player'+(activePlayer)+'-six-recap' ).html(occuranceArray[5]*6);
//
//   console.log("active player=========>>>");
//   console.log(activePlayer);
//   if(counter===2){
//     // toggleActivePlayer();
//   }
// }
//
// $( '#one-recap ').click( function (){
//   console.log(this)
//   console.log($(this).children( '#player'+activePlayer+'-one-recap').html());
//   if(counter===2){
//     sum[activePlayer] += Number($(this).children( '#player'+activePlayer+'-one-recap').html());
//     $( '#player'+(activePlayer)+'-sum').html(sum[activePlayer]);
//     toggleActivePlayer();
//     nextPlayer();
//   }
//
// });
//
//
//
// $( '#two-recap').children(".data").click( function (){
//   nextPlayer();
// });
// $( '#three-recap').children(".data").click( function (){
//   nextPlayer();
// });
// $( '#four-recap').children(".data").click( function (){
//   nextPlayer();
// });
// $( '#five-recap').children(".data").click( function (){
//   nextPlayer();
// });
// $( '#six-recap').children(".data").click( function (){
//   nextPlayer();
// });
//
// function toggleActivePlayer(){
//   $( '#player'+(activePlayer)+'-one-recap' ).toggleClass('clickable');
//   $( '#player'+(activePlayer)+'-two-recap' ).toggleClass('clickable');
//   $( '#player'+(activePlayer)+'-three-recap' ).toggleClass('clickable');
//   $( '#player'+(activePlayer)+'-four-recap' ).toggleClass('clickable');
//   $( '#player'+(activePlayer)+'-five-recap' ).toggleClass('clickable');
//   $( '#player'+(activePlayer)+'-six-recap' ).toggleClass('clickable');
//
// }
