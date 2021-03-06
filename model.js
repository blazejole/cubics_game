

//game controller

var gameController = (function(){


  var players, activePlayer, mixedNumbers, arrayMixedNumbers, num1, num2, num3, num4, num5, round;
  var cubicResult, threeRecapResult, twoThreeResult, smallStreetResult, streetResult, fiveRecap, sixRescap, chance;
  var tempSum1 , tempSum2, tempSum3, tempSum4, tempSum5, tempSum6;
  var wholeArrResult, addResultToPlayerArray, playerArray, resetArr;


  players = [];
  arrayMixedNumbers =[];
  wholeArrResult = [];
  activePlayer= 0;
  round = 0;


var Player = function(results, sum){

this.results = results
this.sum = sum;
};
//temporary like that
var player1 = new Player([], 0);
players.push(player1);
var player2 = new Player([], 0);
players.push(player2);
var player3 = new Player([], 0);
players.push(player3);
var player4 = new Player([], 0);
players.push(player4);
//=====================================


//przekazac indexy ktore ominac przy zapisywaniu do tablicy
mixedNumbers = function(hover){


  for(var i=0 ; i<= 5; i++){

    if(i+1 !== parseInt((hover[i]))){
      num = Math.round(Math.random()*5+1);
      arrayMixedNumbers[i] = num;
    }
  }

    return arrayMixedNumbers;
}

//logic of the game


cubicResult = function(arr){
  // console.log(arr);
  tempSum1 = 0;
  tempSum2 = 0;
  tempSum3 = 0;
  tempSum4= 0;
  tempSum5= 0;
  tempSum6= 0;

  arr.forEach(function(cur){
    if(cur === 1)  tempSum1++ ;
    if(cur === 2)  tempSum2 = tempSum2 + 2;
    if(cur === 3)  tempSum3 = tempSum3 + 3;
    if(cur === 4)  tempSum4 = tempSum4 + 4;
    if(cur === 5)  tempSum5 = tempSum5 + 5;
    if(cur === 6)  tempSum6 = tempSum6 + 6;
  });

  //add second parts of combinations




  //===========================
  //temporary hard-coded solution
  wholeArrResult[0] = tempSum1;
  wholeArrResult[1] = tempSum2;
  wholeArrResult[2] = tempSum3;
  wholeArrResult[3] = tempSum4;
  wholeArrResult[4] = tempSum5;
  wholeArrResult[5] = tempSum6;

  //======


  wholeArrResult[6] = -1;
  wholeArrResult[7] = -1;
  wholeArrResult[8] = -1;
  wholeArrResult[9] = -1;
  wholeArrResult[10] = -1;
  wholeArrResult[11] = -1;
  wholeArrResult[12] = -1;
  wholeArrResult[13] = -1;


  return wholeArrResult;
}
 countRound = function(){

   if(round<3){
     round++;
   }else{
     round = 1;
   }

   return round;
 }

activePlayerRound = function(){
  if(activePlayer<4){
    activePlayer++;
  }else{
    activePlayer = 1
  }
  return activePlayer;
}

addResultToPlayerArray = function(val, ind, actPl){
   players[actPl-1].results[ind] = val;

};

addPlayerSum = function(val, active){
    players[active-1].sum += val;
    return players[active-1].sum;
};

resetArr = function(){
  arr = [];

  return arr;
};


return{

getMixedNumbers: function(arr){

  return mixedNumbers(arr);
},

 getActivePlayer: function(){
   return activePlayerRound();
 },
 getPlayers: function(){
   return players;
 },
 getRound: function(){

   return countRound();
 },

 countResult: function(arr){

   cubicResult(arrayMixedNumbers);
   // twoCubicResult(arrayMixedNumbers);

   // console.log(arrayMixedNumbers);
   return wholeArrResult;
 },
 addResult: function(value, index, activePL){
   addResultToPlayerArray(value, index, activePL);
 },
 updateSum: function(val, active){

   return addPlayerSum(val, active);
 }

}


})();





//UIController
var UIController = (function(){

  var activePlayer, updateView, showImg, hoverRoundBone, hoveredIndexes, hoverPlayer, btn, clickedIndex, getValue, active, disablePlayerCell, cubicsRound, reset;
  //get from player controller activePlayer

hoveredIndexes = [];

  var DOMStrings = {
    buttonNewGame: 'new-game',
    buttonThrow: 'mix-cubics',
    table: '#tbl',
    inputOneRecap:'one-recap-player-',
    inputTwoRecap:'two-recap-player-',
    inputThreeRecap:'three-recap-player-',
    inputFourRecap:'four-recap-player-',
    inputFiveRecap:'five-recap-player-',
    inputSixRecap:'six-recap-player-',

    inputTrippleRecap: 'tripple-recap-player-',
    inputFullRecap: 'full-recap-player-',
    inputSmallStreet: 'small-street-player-',
    inputStreetRecap: 'street-recap-player-',
    inputFourFoldRecap: 'fourfold-recap-player-',
    inputSixFoldRecap: 'sixfold-recap-player-',
    inputChance: 'chance-player-',

    bone1: 'cubic-1',
    bone2: 'cubic-2',
    bone3: 'cubic-3',
    bone4: 'cubic-4',
    bone5: 'cubic-5',
    bone6: 'cubic-6',
    bone: '.cubic-',
    sum: 'sum-player-',
    clickedCellPlayer: 'active-player',
    arrCubicsClass : 'cubic-images',
    cubicsSection: 'cubics-section'

    //.. .. ..
  };

  btn = document.getElementById(DOMStrings.buttonThrow);
  var activePlayer

  var updateView = function(active, arr){

    if(document.getElementById(DOMStrings.inputOneRecap + active))
      document.getElementById(DOMStrings.inputOneRecap + active).innerHTML =arr[0];

    if(document.getElementById(DOMStrings.inputTwoRecap + active))
      document.getElementById(DOMStrings.inputTwoRecap + active).innerHTML =arr[1];

    if(document.getElementById(DOMStrings.inputThreeRecap + active))
      document.getElementById(DOMStrings.inputThreeRecap + active).innerHTML =arr[2];

    if(document.getElementById(DOMStrings.inputFourRecap + active))
      document.getElementById(DOMStrings.inputFourRecap + active).innerHTML =arr[3];

    if(document.getElementById(DOMStrings.inputFiveRecap + active))
      document.getElementById(DOMStrings.inputFiveRecap + active).innerHTML =arr[4];

    if(document.getElementById(DOMStrings.inputSixRecap + active))
      document.getElementById(DOMStrings.inputSixRecap + active).innerHTML =arr[5];


//======
        if(document.getElementById(DOMStrings.inputTrippleRecap + active))
      document.getElementById(DOMStrings.inputTrippleRecap + active).innerHTML =arr[6];

    if(document.getElementById(DOMStrings.inputFullRecap + active))
      document.getElementById(DOMStrings.inputFullRecap + active).innerHTML =arr[7];

    if(document.getElementById(DOMStrings.inputSmallStreet + active))
      document.getElementById(DOMStrings.inputSmallStreet + active).innerHTML =arr[8];

    if(document.getElementById(DOMStrings.inputStreetRecap + active))
      document.getElementById(DOMStrings.inputStreetRecap + active).innerHTML =arr[9];

    if(document.getElementById(DOMStrings.inputStreetRecap + active))
      document.getElementById(DOMStrings.inputStreetRecap + active).innerHTML =arr[10];

    if(document.getElementById(DOMStrings.inputFourFoldRecap + active))
      document.getElementById(DOMStrings.inputFourFoldRecap + active).innerHTML =arr[11];


    if(document.getElementById(DOMStrings.inputSixFoldRecap + active))
      document.getElementById(DOMStrings.inputSixFoldRecap + active).innerHTML =arr[12];

      if(document.getElementById(DOMStrings.inputChance + active))
      document.getElementById(DOMStrings.inputChance + active).innerHTML =arr[13];


  };

  showBtn = function(rnd){
    console.log(btn);
    if(rnd !==3)
      btn.style.display = 'block';
    else
      btn.style.display = 'none';
  };

  showImg = function(arr){
  
    for(var i =0; i< arr.length; i++){
      randomNumAngle =  Math.round(Math.random()*15+1);

      $( DOMStrings.bone + (i+1)).attr("src", " images/cubic-"+arr[i]+ ".png");
      $( DOMStrings.bone + (i+1))[0].textContent = i+1;
      $( DOMStrings.bone + (i+1))[0].style.display = "inline";




      $( DOMStrings.bone + (i+1)).css("margin-left", "10px");


     
      //rotate random angle 1 to 15 degree(+ sign for odd numbers)
      if(i%2 == 0){
        $( DOMStrings.bone + (i+1)).css("transform", "rotate("+randomNumAngle+"deg)");
      }else{
        $( DOMStrings.bone + (i+1)).css("transform", "rotate(-"+randomNumAngle+"deg)");
      }


    }

  };


  hoverRoundBone = function(ind){

    if(ind >0){
// alert("??");
     $( DOMStrings.bone+ind).toggleClass('active');

     if($( DOMStrings.bone+ind).hasClass('active'))
        hoveredIndexes [ind-1] = ind;
      else
        hoveredIndexes [ind-1] = null;

    }else{

      //if <=0 -> clear array
      hoveredIndexes = [];
    }

      return hoveredIndexes;
  };

  hoverPlayer = function(active){
    $('#'+DOMStrings.inputOneRecap + active).addClass('active-player');
    $('#'+DOMStrings.inputTwoRecap + active).addClass('active-player');
    $('#'+DOMStrings.inputThreeRecap + active).addClass('active-player');
    $('#'+DOMStrings.inputFourRecap + active).addClass('active-player');
    $('#'+DOMStrings.inputFiveRecap + active).addClass('active-player');
    $('#'+DOMStrings.inputSixRecap + active).addClass('active-player');

    //===

    $('#'+DOMStrings.inputTrippleRecap + active).addClass('active-player');
    $('#'+DOMStrings.inputFullRecap + active).addClass('active-player');
    $('#'+DOMStrings.inputSmallStreet + active).addClass('active-player');
    $('#'+DOMStrings.inputStreetRecap + active).addClass('active-player');
    $('#'+DOMStrings.inputFourFoldRecap + active).addClass('active-player');
    $('#'+DOMStrings.inputSixFoldRecap + active).addClass('active-player');
    $('#'+DOMStrings.inputChance + active).addClass('active-player');



  };
  clickedIndex = function(clilcked){

      return $(clilcked).parent().index();


  };

  rehoverActive = function (active){
    $('#'+DOMStrings.inputOneRecap + active).removeClass('active-player');
    $('#'+DOMStrings.inputTwoRecap + active).removeClass('active-player');
    $('#'+DOMStrings.inputThreeRecap + active).removeClass('active-player');
    $('#'+DOMStrings.inputFourRecap + active).removeClass('active-player');
    $('#'+DOMStrings.inputFiveRecap + active).removeClass('active-player');
    $('#'+DOMStrings.inputSixRecap + active).removeClass('active-player');
//==

    $('#'+DOMStrings.inputTrippleRecap + active).removeClass('active-player');
    $('#'+DOMStrings.inputFullRecap + active).removeClass('active-player');
    $('#'+DOMStrings.inputSmallStreet + active).removeClass('active-player');
    $('#'+DOMStrings.inputStreetRecap + active).removeClass('active-player');
    $('#'+DOMStrings.inputFourFoldRecap + active).removeClass('active-player');
    $('#'+DOMStrings.inputSixFoldRecap + active).removeClass('active-player');
    $('#'+DOMStrings.inputChance + active).removeClass('active-player');


  };

  getValue = function(clicked){
    // console.log($(clicked).val());

    return clicked.target.textContent;
  };

  disablePlayerCell = function(id){
    //TODO
    console.log("IDDDDD");
    console.log(id);
    $('#'+id).attr("background-color", "red");
    $('#'+id).removeAttr('id');
    $('#'+id).removeClass(DOMStrings.clickedCellPlayer);

    // $('#'+id).prop('disabled', false);

  console.log($('#'+id));
  };

  updateSumAfterRound= function(val,active){
    // console.log(".................");
    // console.log(val);
    // console.log(DOMStrings.sum+active);
    // console.log($('#'+DOMStrings.sum+active));
    $('#'+DOMStrings.sum+active).html(val);
  };

  removeToggledPlayerBones = function(){

    // console.log($('#'+DOMStrings.cubicsSection+'>div>'));
    $('#'+DOMStrings.cubicsSection+'>div>').removeClass('active');

  };

  reset = function(arr){
    arr = [];
    return arr;
};


  return {

    getDOMStrings: function(){
      return DOMStrings;
    },
    clearFields: function(active){

      document.getElementById(DOMStrings.inputOneRecap + (active+1)).innerHTML =0;
      document.getElementById(DOMStrings.inputTwoRecap + (active+1)).innerHTML =0;
      document.getElementById(DOMStrings.inputThreeRecap + (active+1)).innerHTML =0;
      document.getElementById(DOMStrings.inputFourRecap + (active+1)).innerHTML =0;
      document.getElementById(DOMStrings.inputFiveRecap + (active+1)).innerHTML =0;
      document.getElementById(DOMStrings.inputSixRecap + (active+1)).innerHTML =0;

      //====

      document.getElementById(DOMStrings.inputTrippleRecap + (active+1)).innerHTML =0;
      document.getElementById(DOMStrings.inputFullRecap + (active+1)).innerHTML =0;
      document.getElementById(DOMStrings.inputSmallStreet + (active+1)).innerHTML =0;
      document.getElementById(DOMStrings.inputStreetRecap + (active+1)).innerHTML =0;
      document.getElementById(DOMStrings.inputFourFoldRecap + (active+1)).innerHTML =0;
      document.getElementById(DOMStrings.inputSixFoldRecap + (active+1)).innerHTML =0;
      document.getElementById(DOMStrings.inputChance + (active+1)).innerHTML =0;


      //=====
      document.getElementById(DOMStrings.sum + (active+1)).innerHTML =0;
      // .. .. ..


    },

    getUpdateView: function(active, arr){
      updateView(active, arr);
    },
    showButtonNextMix: function(rnd){
      showBtn(rnd);
    },
    showImages: function(arr){
      showImg(arr);
    },
    hoverBone: function(index){
       var test = hoverRoundBone(index);
       return test;

    },
    hoverActivePLayer: function(activePl){
      return hoverPlayer(activePl);
    },
    rehoverActivePLayer: function(active){
      rehoverActive(active);
    },
    selectRoundIndex: function(clilcked){
      return clickedIndex(clilcked);
    },
     geValueToSave: function(clicked){
      return getValue(clicked);
    },
    disableCell: function(id){
      disablePlayerCell(id);
    },
    updateSumView: function(val, active){
      return updateSumAfterRound(val, active);
    },
    removeToggledBones: function(){
      return removeToggledPlayerBones();
    },
    resetHoveredBonesArray: function(arr){
      return reset(arr);
    }


  }



})();





//GLOBAL Controller
var controller = (function(uICtrl, gameCtrl){

var DOM, activePlayer, players, randomNumbers, hoveredBones, round, setUpRoundListeners, selectCombination, clickedIndex, valueRound, playerSum;

hoveredBones = [];

// console.log(hoveredBones);

  DOM = uICtrl.getDOMStrings();
  // console.log(DOM);

  activePlayer = gameCtrl.getActivePlayer();
  players = gameCtrl.getPlayers();



var setUpListeners = function(){
  document.getElementById(DOM.buttonNewGame).addEventListener("click",startGameButton);

  document.getElementById(DOM.buttonThrow).addEventListener("click",startRound);

  document.getElementsByClassName(DOM.bone1)[0].addEventListener("click",saveBone);
  document.getElementsByClassName(DOM.bone2)[0].addEventListener("click",saveBone);
  document.getElementsByClassName(DOM.bone3)[0].addEventListener("click",saveBone);
  document.getElementsByClassName(DOM.bone4)[0].addEventListener("click",saveBone);
  document.getElementsByClassName(DOM.bone5)[0].addEventListener("click",saveBone);
  document.getElementsByClassName(DOM.bone6)[0].addEventListener("click",saveBone);
};


 var startGame = function(){
  setUpListeners();
};


var startGameButton = function(){
      // $("."+DOM.arrCubicsClass)[0].slideDown( "slow" );

    //1 clear fields, setup to 0 players scores
    players.forEach(function(cur, ind){
      uICtrl.clearFields(ind);
    });
    startRound();
};




var startRound = function(){
  // hoveredBones = [];
  console.log("START ROUND>>>>>");
  console.log(hoveredBones);

  players = gameCtrl.getPlayers();
  // activePlayer = gameCtrl.getActivePlayer();

  //chceck round

  // activeRound = gameCtrl.checkRound()
  //hover activePlayer
  round = gameCtrl.getRound();

  // uICtrl.hideButtonMix(round);
  uICtrl.hoverActivePLayer(activePlayer);
  //make button visible and wait when user click button mix
  uICtrl.showButtonNextMix(round);

  //get random numbers
  // console.log(hoveredBones);
  randomNumbers = gameCtrl.getMixedNumbers(hoveredBones);
  //set resu;t of all combinations
  values = gameCtrl.countResult(randomNumbers);

  //update view
  uICtrl.getUpdateView(activePlayer, values);
  // console.log(values);
  //show bones to user
  uICtrl.showImages(randomNumbers);
  //set up listeners to choose one comnination
  if(round === 3)
    setUpRoundListeners();

}

setUpRoundListeners = function(){

  //wait until user click one combination
  if(document.getElementById(DOM.inputOneRecap+activePlayer))
    document.getElementById(DOM.inputOneRecap+activePlayer).addEventListener("click",selectCombination);

if(document.getElementById(DOM.inputTwoRecap+activePlayer))
    document.getElementById(DOM.inputTwoRecap+activePlayer).addEventListener("click",selectCombination);

if(document.getElementById(DOM.inputThreeRecap+activePlayer))
    document.getElementById(DOM.inputThreeRecap+activePlayer).addEventListener("click",selectCombination);

if(document.getElementById(DOM.inputFourRecap+activePlayer))
    document.getElementById(DOM.inputFourRecap+activePlayer).addEventListener("click",selectCombination);

if(document.getElementById(DOM.inputFiveRecap+activePlayer))
    document.getElementById(DOM.inputFiveRecap+activePlayer).addEventListener("click",selectCombination);

if(document.getElementById(DOM.inputSixRecap+activePlayer))
    document.getElementById(DOM.inputSixRecap+activePlayer).addEventListener("click",selectCombination);
  //========
  if(document.getElementById(DOM.inputTrippleRecap+activePlayer))
    document.getElementById(DOM.inputTrippleRecap+activePlayer).addEventListener("click",selectCombination);

  if(document.getElementById(DOM.inputFullRecap+activePlayer))
    document.getElementById(DOM.inputFullRecap+activePlayer).addEventListener("click",selectCombination);

  if(document.getElementById(DOM.inputSmallStreet+activePlayer))
    document.getElementById(DOM.inputSmallStreet+activePlayer).addEventListener("click",selectCombination);

  if(document.getElementById(DOM.inputStreetRecap+activePlayer))
    document.getElementById(DOM.inputStreetRecap+activePlayer).addEventListener("click",selectCombination);

   if(document.getElementById(DOM.inputFourFoldRecap+activePlayer))
    document.getElementById(DOM.inputFourFoldRecap+activePlayer).addEventListener("click",selectCombination);

  if(document.getElementById(DOM.inputSixFoldRecap+activePlayer))
    document.getElementById(DOM.inputSixFoldRecap+activePlayer).addEventListener("click",selectCombination);
};
removeEventListeners = function(){

  // console.log(document.getElementById(DOM.inputOneRecap+activePlayer));

  if(document.getElementById(DOM.inputOneRecap+activePlayer))
    document.getElementById(DOM.inputOneRecap+activePlayer).removeEventListener("click",selectCombination);

  if(document.getElementById(DOM.inputTwoRecap+activePlayer))
    document.getElementById(DOM.inputTwoRecap+activePlayer).removeEventListener("click",selectCombination);

  if(document.getElementById(DOM.inputThreeRecap+activePlayer))
    document.getElementById(DOM.inputThreeRecap+activePlayer).removeEventListener("click",selectCombination);

  if(document.getElementById(DOM.inputFourRecap+activePlayer))
    document.getElementById(DOM.inputFourRecap+activePlayer).removeEventListener("click",selectCombination);

  if(document.getElementById(DOM.inputFiveRecap+activePlayer))
    document.getElementById(DOM.inputFiveRecap+activePlayer).removeEventListener("click",selectCombination);

  if(document.getElementById(DOM.inputSixRecap+activePlayer))
    document.getElementById(DOM.inputSixRecap+activePlayer).removeEventListener("click",selectCombination);

  //=====

   if(document.getElementById(DOM.inputTrippleRecap+activePlayer))
    document.getElementById(DOM.inputTrippleRecap+activePlayer).removeEventListener("click",selectCombination);

  if(document.getElementById(DOM.inputFullRecap+activePlayer))
    document.getElementById(DOM.inputFullRecap+activePlayer).removeEventListener("click",selectCombination);

  if(document.getElementById(DOM.inputSmallStreet+activePlayer))
    document.getElementById(DOM.inputSmallStreet+activePlayer).removeEventListener("click",selectCombination);

  if(document.getElementById(DOM.inputStreetRecap+activePlayer))
    document.getElementById(DOM.inputStreetRecap+activePlayer).removeEventListener("click",selectCombination);

   if(document.getElementById(DOM.inputFourFoldRecap+activePlayer))
    document.getElementById(DOM.inputFourFoldRecap+activePlayer).removeEventListener("click",selectCombination);

  if(document.getElementById(DOM.inputSixFoldRecap+activePlayer))
    document.getElementById(DOM.inputSixFoldRecap+activePlayer).removeEventListener("click",selectCombination);
}

selectCombination = function(event){

    //detect which index is clicled
  clickedIndex = uICtrl.selectRoundIndex(this);
    // console.log("index +1 dodac");
    // console.log(clickedIndex);

  valueRound =parseInt(uICtrl.geValueToSave(event));
    // console.log("val round");
    // console.log(valueRound);

  gameCtrl.addResult(valueRound, clickedIndex, activePlayer);



  playerSum = gameCtrl.updateSum(valueRound, activePlayer);

  //update UI sum
  uICtrl.updateSumView(playerSum, activePlayer);

  // console.log(test);
  console.log(players);
  //remove activePlayer view
  uICtrl.rehoverActivePLayer(activePlayer);

  //cash hovered array prev player TODO
  uICtrl.removeToggledBones();

  // hoveredBones = uICtrl.resetHoveredBonesArray(hoveredBones);

  hoveredBones = uICtrl.hoverBone(parseInt(-1));

  console.log("HOHOHOHO");
  console.log(hoveredBones);


  //===========TODO===============
  uICtrl.disableCell(this.id);
  //==================================

  //removeListeners
  removeEventListeners(activePlayer);
  activePlayer = gameCtrl.getActivePlayer();

//start new round
  startRound();

};

var saveBone = function(){

    //toggle class wchiich is clicked
    //rememebr which bone is selected and ommit it after next round
    hoveredBones = uICtrl.hoverBone(parseInt(this.textContent));
    // console.log("HOVERED BONESSSSSSSSSSSSS");
    // console.log(hoveredBones);
}

return {
  init: function(){

    startGame();

  },
  getActivePlayer: function(){
    return gameCtrl.getActivePlayer();
  }
}

})(UIController, gameController);


controller.init();
