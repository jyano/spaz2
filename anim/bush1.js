BSH = function () {$l("BSH")
	
	cv = $.cv(550, 500).id('canvas');
	 cv.A()
	ss = {}
	canvas = document.getElementById("canvas");
	loader = new createjs.LoadQueue(false);
	images =   {} 
	loader.addEventListener("fileload", function handleFileLoad(evt) {
		if (evt.item.type == "image") {
			images[evt.item.id] = evt.result;
		}
	})
	
	
	loader.addEventListener("complete", function handleComplete(evt) {
		
		 
		 exportRoot = new lib.Untitled1();
	 	
		stage = new createjs.Stage(canvas);
		stage.addChild(exportRoot);
		stage.update();
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	
	
	});
	
	
	
	
	lib = {}
	lib.bush = function () {
	this.initialize(images.bush)}
	
	lib.bush.prototype = p = new cjs.Bitmap();
	
	p.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
	lib.bush_1 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {a: 0, b: 1});
		this.instance = new lib.bush();
		this.timeline.addTween(
		cjs.Tween.get(this.instance).wait(1).to({
			scaleX: 1.79,
			scaleY: 0.62,
			rotation: -30,
			x: -74.6,
			y: 88.8
		}, 0).wait(2));}
	
	lib.bush_1.prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
	lib.Untitled1 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {"a": 0, "b": 1, c: 2});
		// Layer 1
		this.instance = new lib.bush_1();
		this.instance.setTransform(271.9, 211, 1, 1, 0, 0, 0, 61, 74.5);
		this.timeline.addTween(cjs.Tween.get(this.instance).to({_off: true}, 1).wait(2));
	}
	lib.Untitled1.prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(485.9, 336.5, 122, 149);
	lib.properties = {width: 550, height: 400, fps: 24, 
	color: "#FF66CC", manifest: [{src: "/bush.png", id: "bush"}]};
	 
	
	
	
	loader.loadManifest(lib.properties.manifest);
	
	
	 
 
 
}