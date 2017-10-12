$(document).ready(function() {

  var charArray = ['f',1,'f',2,3,4,0,5,0,6,'f',7,8,'f',9,0];

  var randomColor = function(arr){
    var hexArr = [];
    for(var i=0;i<6;i++){
      var randomIndex = Math.ceil(Math.random()*charArray.length-1);
      hexArr.push(charArray[randomIndex])
    }
    return '#'+hexArr.join('')
  }

  var tileArr = [];
  for(var i=0;i<3000;i++){
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

  function tileReplace(){
    var randomIndex = Math.ceil(Math.random()*tileArr.length-1);
    var tileTarget = tileArr[randomIndex]
    tileTarget.style.backgroundColor = randomColor();
  }
  var intervalID = window.setInterval(tileReplace, 5);

  var canvasArr = [];
  for(var i=0;i<1739;i++){
    var tile = document.createElement('div');
    var canvas = document.getElementsByClassName('canvas')[0];
    tile.style.width = '2.1%';
    tile.style.paddingBottom = '2.1%';
    tile.display = 'float';
    tile.style.float = 'left';
    tile.style.backgroundColor = '#909090';
    canvas.prepend(tile);
  };


});
