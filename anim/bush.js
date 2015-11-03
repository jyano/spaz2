 
eachFile = function eachFile(e) {
	if (e.item.type == "image") {
		images[e.item.id] = e.result
	}
}
BSHH = function () {__S()
	
	lib.bush = function () {
		this.initialize(
		images.bush)
	}
	
	lib.bush.prototype =  new cjs.Bitmap();
	lib.bush.prototype.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
	
	
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
				}, 0).wait(2));
	}
	
	lib.bush_1.prototype =   new cjs.MovieClip();
	lib.bush_1.prototype.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
	
	loader.f(eachFile).m([{src: "/bush.png", id: "bush"}]).c(function () {
		b = new lib.bush_1().XY(200, 100)
		st.A(b)
	})
	
	
	
	
	 

}

CARSON=function(){

	
	__S()
	
	
	
	 lib.carson = function () {
			this.initialize(img.carson);
		}
		
		lib.carson.prototype = p = new cjs.Bitmap();
		
		
		p.nominalBounds = new cjs.Rectangle(0, 0, 221, 290);
		 lib.Tween2 = function () {
			this.initialize();
			// Layer 1
			this.instance = new lib.carson();
			this.instance.setTransform(-45.5, -43, 0.412, 0.297);
			this.addChild(this.instance);
		}
		lib.Tween2.prototype = p = new cjs.Container();
			p.nominalBounds = new cjs.Rectangle(-45.5, -43, 91, 86);
		 lib.Tween1 = function () {
			this.initialize();
			// Layer 1
			this.instance = new lib.carson();
			this.instance.setTransform(-48, -203, 0.434, 1.4);
			this.addChild(this.instance);
		}; lib.Tween1.prototype = p = new cjs.Container();
		p.nominalBounds = new cjs.Rectangle(-48, -203, 96, 406);
		lib.CarsonMC = function (mode, startPosition, loop) {
			this.initialize(mode, startPosition, loop, {a: 0, b: 1, c: 4, d: 19});
			// Layer 1
			this.instance = new lib.carson();
			this.instance_1 = new lib.Tween1("synched", 0);
			this.instance_1.setTransform(98.1, 145);
			this.instance_1._off = true;
			this.instance_2 = new lib.Tween2("synched", 0);
			this.instance_2.setTransform(97.6, 251);
			this.timeline.addTween(cjs.Tween.get({}).to({
				state: [{
					t: this.instance,
					p: {rotation: 0, x: 0, y: 0}
				}]
			}).to({
				state: [{
					t: this.instance,
					p: {rotation: -174.8, x: 178.5, y: 297.5}
				}]
			}, 1).to({state: [{t: this.instance_1}]}, 3).to({state: [{t: this.instance_2}]}, 15).wait(1));
			this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off: false}, 0).to({
				_off: true,
				x: 97.6,
				y: 251
			}, 15).wait(1));
		}
		lib.CarsonMC.prototype = p = new cjs.MovieClip();
		p.nominalBounds = new cjs.Rectangle(0, 0, 221, 290);
		
	loader.f(eachFile).m([{src: "/carson.png", id: "carson"}]).c(function () {
		b = new lib.CarsonMC().XY(200, 100)
		st.A(b)
		
		b.gotoAndStop()
	})
}

 