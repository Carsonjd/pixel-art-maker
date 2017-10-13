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

  // function titleColor(){
  //   var canvas = document.getElementsByTagName('h1')[0];
  //   canvas.style.color = randomColor();
  // }

  function tileReplace(){
    var randomIndex = Math.ceil(Math.random()*tileArr.length-1);
    var tileTarget = tileArr[randomIndex]
    tileTarget.style.backgroundColor = randomColor();
  }
  var intervalID = window.setInterval(tileReplace, 5);
  // var intervalID = window.setInterval(titleColor, 1000);


  // var canvasArr = [];
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

  var activeColor = '#FFFFFF';
  var body = document.getElementsByTagName('body')[0];
  var canvas = document.getElementsByClassName('canvas')[0];


//Click event to change the active color
  body.addEventListener('click',function(event){
    activeColor = event.target.style.backgroundColor
    console.log(activeColor)
  });

  // canvas.addEventListener('click',function(event){
  //   event.target.style.backgroundColor = activeColor
  // })


  //var targetElement,dragData=null;

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


  // canvas.addEventListener('mousemove',drag);
  // canvas.addEventListener('mouseup',stopDrag);



  // function startDrag(event){
  //   if('mousedown' === true){
  //     draw();
  //   }
  // }



      //
      //
      // function startDrag(event) {
      //   var targetElement = event.target
      //   if(!dragData) {
      //     dragData={
      //       x: event.clientX-targetElement.offsetLeft,
      //       y: event.clientY-targetElement.offsetTop
      //     };
      //   };
      //   event.target.style.backgroundColor = activeColor
      // }
      // function drag(event) {
      //   var targetElement = event.target
      //   if(!dragData) {
      //     event;
      //     targetElement.style.left=event.clientX-dragData.x+"px";
      //     targetElement.top=event.clientY-dragData.y+"px";
      //   }
      //   event.target.style.backgroundColor = activeColor
      // }
      // function stopDrag(ev) {
      //   var targetElement = event.target
      //   if(!dragData) {
      //     event;
      //     targetElement.style.left=event.clientX-dragData.x+"px";
      //     targetElement.top=event.clientY-dragData.y+"px";
      //     dragData=null;
      //   }
      //   event.target.style.backgroundColor = activeColor
      // }
      //

});
