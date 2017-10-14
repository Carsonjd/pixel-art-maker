$(document).ready(function() {

//function to return random color
  var charArray = ['f',1,'f',2,3,4,0,5,0,6,'f',7,8,'f',9,0];
  var randomColor = function(arr){
    var hexArr = [];
    for(var i=0;i<6;i++){
      var randomIndex = Math.ceil(Math.random()*charArray.length-1);
      hexArr.push(charArray[randomIndex])
    }
    return '#'+hexArr.join('')
  }

//body tile loop
  var tileArr = [];
  for(var i=0;i<2491;i++){
    var tile = document.createElement('div');
    tile.style.width = '2.1%';
    tile.style.paddingBottom = '2.1%';
    tile.display = 'float';
    tile.style.float = 'left';
    tileArr.push(tile);
    tile.style.backgroundColor = randomColor();
  };

  for(var i=0;i<tileArr.length;i++){
    var body = document.getElementsByTagName('body')[0];
    body.prepend(tileArr[i]);
  }

//Function to create random changes to background tiles
  function tileReplace(){
    var randomIndex = Math.ceil(Math.random()*tileArr.length-1);
    var tileTarget = tileArr[randomIndex]
    tileTarget.style.backgroundColor = randomColor();
  }
  var intervalID = window.setInterval(tileReplace, 5);

//Loop to create canvas element
  for(var i=0;i<1739;i++){
    var tile = document.createElement('div');
    var canvas = document.getElementsByClassName('canvas')[0];
    tile.style.width = '2.1%';
    tile.style.paddingBottom = '2.1%';
    tile.display = 'float';
    tile.style.float = 'left';
    tile.style.backgroundColor = '#000000';
    canvas.prepend(tile);
  };

//Click event to change the active color
  var activeColor = '#FFFFFF';
  var body = document.getElementsByTagName('body')[0];
  var canvas = document.getElementsByClassName('canvas')[0];
  body.addEventListener('click',function(event){
    activeColor = event.target.style.backgroundColor
    console.log(activeColor)
  });

//Mouse events to draw
  var mousedown = false;
  canvas.addEventListener('mousedown',function(event){
    mousedown = true;
  });
  canvas.addEventListener('mouseover', function(event){
    if(mousedown === true){
      event.target.style.backgroundColor = activeColor;
    }
  });
  canvas.addEventListener('mouseup', function(event){
    mousedown = false;
  });

});
