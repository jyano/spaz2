/*
 <!DOCTYPE html>
 <html>
 <head>
 <meta charset="UTF-8">
 <title>prof</title>

 <script src="http://code.createjs.com/easeljs-0.8.1.min.js"></script>
 <script src="http://code.createjs.com/tweenjs-0.6.1.min.js"></script>
 <script src="http://code.createjs.com/movieclip-0.8.1.min.js"></script>
 <script src="http://code.createjs.com/preloadjs-0.6.1.min.js"></script>
 <script src="prof.js"></script>

 <script>
 var canvas, stage, exportRoot;

 function init() {
 canvas = document.getElementById("canvas");
 images = images||{};

 var loader = new createjs.LoadQueue(false);
 loader.addEventListener("fileload", handleFileLoad);
 loader.addEventListener("complete", handleComplete);
 loader.loadManifest(lib.properties.manifest);
 }

 function handleFileLoad(evt) {
 if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
 }

 function handleComplete(evt) {
 exportRoot = new lib.Untitled1();

 stage = new createjs.Stage(canvas);
 stage.addChild(exportRoot);
 stage.update();

 createjs.Ticker.setFPS(lib.properties.fps);
 createjs.Ticker.addEventListener("tick", stage);
 }
 </script>
 </head>

 <body onload="init();" style="background-color:#D4D4D4">
 <canvas id="canvas" width="550" height="400" style="background-color:#FF66CC"></canvas>
 </body>
 </html>
 */

(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FF66CC",
	manifest: [
		{src:"images/bush.png", id:"bush"}
	]
};



// symbols:



(lib.bush = function() {
	this.initialize(img.bush);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,149);


(lib.bush_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{a:0,b:1});

	// Layer 1
	this.instance = new lib.bush();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.79,scaleY:0.62,rotation:-30,x:-74.6,y:88.8},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,122,149);


// stage content:



(lib.Untitled1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"a":0,"b":1,c:2});

	// Layer 1
	this.instance = new lib.bush_1();
	this.instance.setTransform(271.9,211,1,1,0,0,0,61,74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(485.9,336.5,122,149);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;