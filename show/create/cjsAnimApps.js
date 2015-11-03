$load('bad','tween')
function tween() {
	TWEENPOS = function () {
		z()
		s = $St(500).t().A()
		s.bm('me', function (bm) {
			b = bm
			s.bm('guy', function (guy) {
				g = guy
				guy.XY(200)
				w0 = $Tw(guy, [{r: 3000}, 100000])
				w = $Tw(bm, [{sx: 3}, 1000])
						.wait(1000).pause(w0).then({sy: 3}, 4000)
						.play(w0).then({sy: .3}, 4000)
			})
		})
	}///B
	TWEENER = function () {
		Q(['me', 'chicks', 'guy'], function () {
			W()
			guy = w.i.qB('chicks', 300, 300)
			me = w.i.qB('me')
			w0 = $Tw(guy, 200, [{r: 3000}, 100000])
			$Tw(me,
					[{sx: 3}, 1000])
					.wait(1000)
					.pause(w0)
					.then({sy: 3}, 4000)
					.play(w0)
					.then({sy: .3},
					4000)
			/*     .wait(1000).pause(w0).then({sy:3}, 4000)
			 .play(w0).then({sy:.3},4000)
			
			
			 tw =$Tw(
			 w.i.qB('me'),
			 [{sx:2,sy:2}, 3000],
			 [{a:0},300],
			 1000,
			 function(){$Tw(w.i.qB('chicks').spin(),
			 [{sxy:.2}, 2000])
			 }
			
			 )
			
			 */
			//  tw.then({x: 200}, 1000).to({ alpha:1, visible:true }, 30000)
			//$Tw(Q.b('guy').a2(w.i), [{r: 20},10000], [{r: 0},3000]   )
		})
	}//B+++++
	TWEENBOX = function () {
		z()
		stage = $.dragStage()
		stage.bm('me', function (bm) {
			SL(bm)
			$Tw([bm, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 1000],
					[{x: 0, sxy: .7, r: -30, a: .5}, 3000])
			$Tw([bm, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 100], [{x: 0, sxy: .7, r: -30, a: .5}, 100]
			)
			//  cjs.tween(  [bm,'l'],  {x:0, sxy:.7,r:0},  [ {x:300,sxy:2.3,r:0}, 1000 ],  [ {x:0,sxy:.7,r:-30,a:.5},3000])
		})
		$.dragStage().t().bm('me', function (bm) {
			b = bm
			SL(bm)
			bm.rgc('+')
			scaleShake(bm)
			rotateShake(bm)
		})
	}//A--------
	WAPTWEEN = function (a) {
//combo/complex/anim/tween
		//wMs looks like it makes/appends a stage, gives it a bitmap
		//based on your mug, and pass it to a callback
		Q(['me', 'chicks', 'guy'], function () {
			W()
			me = w.i.qB('me')
			$Tw(
					[me, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 1000],
					[{x: 0, sxy: .7, r: -30, a: .5}, 3000]
			)
			TR(me)
			$Tw([me, 'l'],
					{x: 0, sxy: .7, r: -2},
					[{x: 300, sxy: 2.3, r: 0, a: .2, kx: 60}, 3000],
					[{x: 320, a: 1, sxy: 2, r: -1}, 1000],
					[{rx: 100}, 1000],
					[{ry: 100}, 1000],
					[{r: 50, x: 1400, y: 300}, 3000],
					[{r: 200, x: 1000, y: 200, sxy: 1}, 3000],
					[{r: 100, x: 300, ky: -100}, 1000],
					[{rx: 30, ry: 30, r: 150, x: 500}, 2000],
					[{rx: 20, ry: 50, r: 100, x: 500, kx: 300}, 2000],
					[{kxy: 0, x: 320, y: 0, rxy: 0, sxy: 2, r: -1}, 3000])
		})
		//$.ev(2, function(){ tweens.rpunch(g) } )
	}//B+++++
	EASING = function () {
		W()
		Q(function () {
			b = w.i.qB('me').sXY(.2).XY(50, 100)
			$Tw([b, 'l'], [{x: 800}, 2000], [{x: 50}, 2000])
			eas(300, 'bO');
			eas(500, 'bI');
			eas(700, 'bIO')
			eas(900, 'bnO');
			eas(1100, 'bnI');
			eas(1300, 'bnIO')
			eas(1500, 'cO');
			eas(1700, 'cI');
			eas(1900, 'cIO')
			eas(2100, 'eO');
			eas(2300, 'eI');
			eas(2500, 'eIO')
			eas(2700, 'qO');
			eas(2900, 'qI');
			eas(3100, 'qIO')
			eas(3900, 'qnO');
			eas(4100, 'qnI');
			eas(4300, 'qnIO')
			eas(4500, 'sO');
			eas(4700, 'sI');
			eas(4900, 'sIO')
			eas(5100, 'qdO');
			eas(5300, 'qdI');
			eas(5500, 'qdIO')
			function eas(y, e) {
				b = w.i.qB('me').sXY(.2).XY(50, y)
				$Tw([b, 'l'], [{x: 800}, 2000, e], [{x: 50}, 2000, e])
				b.$(function () {
					pop(e + ' : ' + oO('E', e))
				})
			}
		})
	}//A---
	TWEENBALLS = function () {
		W(400, 400).C('w')._(function () {
			//cjs.rulers()
			w.p(0, 0, 10).stat()
			_.t(8, function () {
				w.D(R(100, 50), R(100, 50), 'b', 30)
			})
			w.$$(function () {
				_.t(8, function () {
					var b = w.D(R(100, 50), R(100, 50), 'b', 30)
					b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
				})
			})
			w.i.T(200, 100, '$$ me')
		})
	}//world//A-----
}
function bad(){

FLASHSCROLLER = function () {
	W()
// ****  THIS WORKS!!!
	var p
	s = w.i
	images = {}
	lib = {properties: {width: 550, height: 400, fps: 24, color: "#FFFFFF", manifest: []}};
	(lib.StartMarker = function () {
		this.initialize();
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#339933").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
		this.shape.setTransform(0, 0, 1.515, 1.515);
		this.addChild(this.shape);
	}).prototype = new cjs.Container().bounds(-25, -25, 50, 50);
	(lib.Player = function () {
		this.initialize()
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f("#CC0000").s().p("AhtDHIAAmOIDaAAIAAGOg");
		this.shape.setTransform(0, -20)
		this.addChild(this.shape)
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11, -40, 22, 40);
	(lib.Boundries = function () {
		this.initialize();
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhPBfICfi9")
		this.shape.setTransform(846, 100.5)
		this.shape_1 = new cjs.Shape()
		this.shape_1.graphics.f().s("#0066CC").ss(38, 1, 1).p("AjCB9ICgifIDlha")
		this.shape_1.setTransform(777.5, 163.5);
		this.shape_2 = new cjs.Shape()
		this.shape_2.graphics.f().s("#0066CC").ss(38, 1, 1).p("Aw2FtIBGlAIHMDwQBXixCLhwQEJBtDPBgQBMAkBGg1QAegXANgkICgAAQBQlqFUANIBQiMIBQAA");
		this.shape_2.setTransform(627, 261.5);
		this.shape_3 = new cjs.Shape()
		this.shape_3.graphics.f().s("#0066CC").ss(38, 1, 1).p("AikhAIjSCBAikhAIhQAAAF3APIobhP")
		this.shape_3.setTransform(-157.5, 229.5);
		this.shape_4 = new cjs.Shape()
		this.shape_4.graphics.f().s("#0066CC").ss(38, 1, 1).p("AEYjHIszhGIQ3IbImulx")
		this.shape_4.setTransform(-17, 253);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhXgTQBigNBNA2");
		this.shape_5.setTransform(452.8, 235.1);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#0066CC").ss(38, 1, 1).p("Ag1AAIBsAA");
		this.shape_6.setTransform(123.5, 342);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f().s("#0066CC").ss(38, 1, 1).p("AALkRQGogLDzFiIAAB9I1LBQ");
		this.shape_7.setTransform(356.8, 309.5);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#0066CC").ss(38, 1, 1).p("AsujgIBuAAID0A/QHfAfG2DcQBVAqBdAUQBxAYBDAxAnMihIBCARIAoAAQAjAtAPAHImkhIQCGgFCCAIgAmojgIkYAA");
		this.shape_8.setTransform(222.5, 239.5)
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#0066CC").s().p("AmOE2IAApqIMdAAIAAJqg");
		this.shape_9.setTransform(101, 227);
		this.addChild(
				this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4,
				this.shape_3, this.shape_2, this.shape_1, this.shape);
	}).prototype = p = new cjs.Container().bounds(-214, 72, 1087, 289);
	lib.scroller2 = function () {// stage content:
		this.initialize()
		this._player = new lib.Player()//.transform(115,147,1,1,0,0,0,11,20);
		this._boundaries = new lib.Boundries().transform(40, 31, 1, 1, 0, 0, 0, 40, 31);
		this._startMarker = new lib.StartMarker()//.transform(120.5,135.5,1,1,0,0,0,16.5,16.5);
		this.addChild(this._startMarker, this._boundaries, this._player)
	}
	lib.scroller2.prototype = new cjs.Container().bounds(61, 272, 1087, 289)
	$('body').A(
			$.button('start', function () {
				boundaries.tw([{x: -500}, 10000])
			}),
			$('<br>')
	)
	exportRoot = new lib.scroller2()
	//s=stage = cjs.stage(550,400).A().A( exportRoot )
	T.setFPS(lib.properties.fps)
	startMarker = exportRoot._startMarker.X(275).hide()
	player = exportRoot._player.rXY(0).X(275)
	boundaries = exportRoot._boundaries.XY(500, 0)
	_vx = 0
	_vy = 0
	$.key({
		l: function () {
			_vx = -7
		},
		L: function () {
			_vx = 0
		},
		r: function () {
			_vx = 7
		},
		R: function () {
			_vx = 0
		},
		u: function () {
			_vy = -20
		}
	})
	//$('canvas').click(function(){_vy=-20})
	processCollisions = function () {
		return
		if (_vy <= 0) {
			return
		}
		if (player.belowStg()) {
			$l('fell off')
			cjs.Tween.removeAllTweens()
			boundaries.XY(500, 0)
			_vy = 0
			player.XY(startMarker)
		}
		else {
			if (collision = boundaries.test(player)) {
				while (collision) {
					_vy = 0
					player.y -= .1
					collision = boundaries.test(player)
				}
				_vy = 0
			}
		}
	}
	scrollStage = function () {
		boundaries.x += (s.W() * .5) - player.x
		player.X(s.W() * .5)
	}
	T.t(function () {
		_vy += 2
		player.x += _vx;
		player.y += _vy;
		processCollisions()
		scrollStage()
	})
}//D
TKBRIT = function () {

//ok an export using toolkit!
	z()
	var stage, exportRoot, lib, images
	flashFunction = function (lib, img, cjs) {
		var p; // shortcut to reference prototypes
// library properties:
		lib.properties = {
			width: 550,
			height: 400,
			fps: 24,
			color: "#FFFFFF",
			manifest: [{src: "/britney.jpeg", id: "britney"}, {src: "/gaga.jpeg", id: "gaga"}]
		};
// symbols:
		lib.britney = function () {
			this.initialize(img.britney)
		}
		lib.britney.prototype = p = new cjs.Bitmap()
		p.nominalBounds = new cjs.Rectangle(0, 0, 259, 194)
		lib.gaga = function () {
			this.initialize(img.gaga)
		}
		lib.gaga.prototype = p = new cjs.Bitmap()
		p.nominalBounds = new cjs.Rectangle(0, 0, 242, 208);
		lib.gaga_1 = function () {
			this.initialize()
			// Layer 1
			this.instance = new lib.gaga()
			this.addChild(this.instance)
		}
		lib.gaga_1.prototype = p = new cjs.Container()
		p.nominalBounds = new cjs.Rectangle(0, 0, 242, 208)
		lib.brit = function () {
			this.initialize()
			// Layer 1
			this.instance = new lib.britney()
			this.A(this.instance)
		}
		lib.brit.prototype = p = new cjs.Container()
		p.nominalBounds = new cjs.Rectangle(0, 0, 259, 194);
		lib.Tween2 = function () {
			this.initialize()
			// Layer 1
			this.instance = new lib.brit()
			this.instance.setTransform(134, -109.5, 1, 1, 0, 0, 0, 129.5, 97);
			this.instance_1 = new lib.gaga_1()
			this.instance_1.setTransform(-148.9, 33, 1.537, 0.24, 60, 0, 0, 121, 104.1);
			this.A(
					this.instance_1,
					this.instance
			)
		}
		lib.Tween2.prototype = p = new cjs.Container()
		p.nominalBounds = new cjs.Rectangle(-263.5, -206.5, 527, 413);
		lib.Tween1 = function () {
			this.initialize();
			// Layer 1
			this.instance = new lib.brit().transform(-57.6, 52.6, 1, 1, 0, 0, 0, 129.5, 97);
			this.instance_1 = new lib.gaga_1();
			this.instance_1.setTransform(72.5, 0.1, 1.537, 0.24, 60, 0, 0, 121, 104.1);
			this.addChild(this.instance_1, this.instance)
		}
		lib.Tween1.prototype = p = new cjs.Container();
		p.nominalBounds = new cjs.Rectangle(-187.1, -173.5, 374.2, 347.1)
// stage content:
		lib.Untitled3 = function (mode, startPosition, loop) {
			this.initialize(mode, startPosition, loop, {})
			// Layer 1
			this.instance = new lib.gaga_1()
			this.instance.setTransform(275, 200.5, 1, 1, 0, 0, 0, 121, 104)
			this.instance_1 = new lib.Tween1("synched", 0)
			this.instance_1.setTransform(202.6, 200.5)
			this.instance_1._off = true
			this.instance_2 = new lib.Tween2("synched", 0)
			this.instance_2.setTransform(301.9, 206.5)
			this.timeline.addTween(
					cjs.Tween.get({})
							.to({state: [{t: this.instance}]})
							.to({state: [{t: this.instance_1}]}, 19)
							.to({state: [{t: this.instance_2}]}, 10)
							.wait(1))
			this.timeline.addTween(cjs.Tween.get(this.instance).to({
				_off: true,
				regX: 0,
				regY: 0,
				x: 202.6,
				mode: "synched",
				startPosition: 0
			}, 19).wait(11));
			this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off: false}, 19).to({
				_off: true,
				x: 301.9,
				y: 206.5
			}, 10).wait(1))
		}
		lib.Untitled3.prototype = p = new cjs.MovieClip()
		p.nominalBounds = new cjs.Rectangle(429, 296.5, 242, 208)
	}
	flashFunction(lib = lib || {}, images = images || {}, createjs = createjs || {})
	$.c('y', 550, 400).id('canvas').A()
	canvas = document.getElementById("canvas")
	images = images || {}
	loader = new createjs.LoadQueue(false)
	loader.addEventListener("fileload",
			handleFileLoad = function (evt) {
				if (evt.item.type == "image") {
					images[evt.item.id] = evt.result
				}
			})
	loader.addEventListener("complete", function () {
		exportRoot = new lib.Untitled3();
		stage = new createjs.Stage(canvas)
		stage.addChild(exportRoot)
		T.setFPS(lib.properties.fps);
		T.addEventListener("tick", stage)
	})
	loader.loadManifest(lib.properties.manifest)
}//
TIMELINE = function () {
	s = $St()
	q = cjs.lq(['me', 'guy'], function (res) {
		me = s.bm(res('me')).XY(300)
		guy = s.bm(res('guy')).XY(200)
		cjs.tl([
			me.tw([{sx: 2}, 10000]),
			me.tw([{sy: 2}, 10000]),
			guy.tw([{r: 20}, 10000], [{r: 0}, 10000])
		])
	})
}//f
MC1 = function () {
	//Uncaught TypeError: cjs.cir is not a function
	$St()
			.mc(null, 0, true, {start: 0, middle: 40})
			.tl(
			cjs.circ(50, 'r').Y(200).tw({x: 100}, [{x: 600}, 40], [{x: 100}, 40]),
			cjs.circ(50, 'b').Y(200).tw({x: 600}, [{x: 100}, 40], [{x: 600}, 40])
	).p("middle")
}//f
REDROBOT = function () {
	z()
	//this is a fancy mc
	s = $St(1000).A()
	g = cjs.gunner()
	return
	s.A(g)
	g.drag()
	g.XY(400, 200)
}//f
RUNNINGMAN = function () {
	s = stage = $St()
	$.i("/MonsterAIdle.png", function (i) {
		imgMonsterAIdle = i[0]
	})
	$.i("/MonsterARun.png", function (i) {
		imgMonsterARun = i[0]
	})
	$.bt('start', startGame).A()
	$.bt('reset', function () {
		s.removeAllChildren()
		cjs.Ticker.removeAllListeners()
		// stage.update()
	}).A()
	function startGame() {
		screen_width = s.W()
		screen_height = s.H()
		//Idle sequence of the monster
		spriteIdle = new cjs.Sprite(new cjs.SpriteSheet({
			images: [imgMonsterAIdle],
			frames: {width: 64, height: 64, regX: 32, regY: 32},
			animations: {idle: [0, 10, "idle", 4]}
		}))
		spriteIdle.name = "monsteridle1"
		spriteIdle.XY(16, 32)
		// create sprite.. and set the registration point (the point it will be positioned and rotated around) to the center of the frame dimensions:
		sprite = new cjs.Sprite(
				new cjs.SpriteSheet({
					images: [imgMonsterARun],
					frames: {width: 64, height: 64, regX: 32, regY: 32},
					animations: {walk: [0, 9, "walk", 4]}// To slow down the animation loop of the sprite, we set the frequency to 4 to slow down by a 4x factor
				}).addFlipped(true, false, false))
		//sprite.regX = sprite.spriteSheet.frameWidth/2 || 0
		//sprite.regY = sprite.spriteSheet.frameHeight/2 || 0
		// start playing the first sequence: walk_h has been generated by addFlippedFrames and  contained the right facing animations
		sprite.p("walk_h") 	//walking from left to right
		//sprite.shadow = new createjs.Shadow("#454", 10, 15, 14)
		sprite.name = "monster1"
		sprite.direction = 90
		sprite.XY(16, 32).vXY(1, 0).a2(s)
		sprite.currentFrame = 10
		// we want to do some work before we update the canvas,  // otherwise we could use Ticker.addListener(stage);
		T.setFPS(40)
	}
	
	_.ev(.1, function onTick() {
		if (sprite.x >= screen_width - 16) {
			sprite.direction = -90;
			sprite.gotoAndPlay("walk")
		} // Hit testing the screen width, otherwise our sprite would disappear // We've reached the right side of our screen   // We need to walk left now to go back to our initial position
		if (sprite.x < 16) {   // We've reached the left side of our screen // We need to walk right now
			sprite.direction = 90
			sprite.gotoAndStop("walk")
			s.removeChild(sprite)
			spriteIdle.gotoAndPlay("idle")
			stage.addChild(spriteIdle)
		}
		// Moving the sprite based on the direction & the speed
		if (sprite.direction == 90) {
			sprite.x += sprite.vX;
			sprite.y += sprite.vY
		}
		else {
			sprite.x -= sprite.vX;
			sprite.y -= sprite.vY
		}
	})
}//f
TOOLKITBRITNEY = function () {
	
	//ok an export using toolkit!
	z()
	var stage, exportRoot, lib, images
	flashFunction = function (lib, img, cjs) {
		var p; // shortcut to reference prototypes
		// library properties:
		lib.properties = {
			width: 550,
			height: 400,
			fps: 24,
			color: "#FFFFFF",
			manifest: [{src: "/britney.jpeg", id: "britney"}, {src: "/gaga.jpeg", id: "gaga"}]
		};
		// symbols:
		lib.britney = function () {
			this.initialize(img.britney)
		}
		lib.britney.prototype = p = new cjs.Bitmap()
		p.nominalBounds = new cjs.Rectangle(0, 0, 259, 194)
		lib.gaga = function () {
			this.initialize(img.gaga)
		}
		lib.gaga.prototype = p = new cjs.Bitmap()
		p.nominalBounds = new cjs.Rectangle(0, 0, 242, 208);
		lib.gaga_1 = function () {
			this.initialize()
			// Layer 1
			this.instance = new lib.gaga()
			this.addChild(this.instance)
		}
		lib.gaga_1.prototype = p = new cjs.Container()
		p.nominalBounds = new cjs.Rectangle(0, 0, 242, 208)
		lib.brit = function () {
			this.initialize()
			// Layer 1
			this.instance = new lib.britney()
			this.A(this.instance)
		}
		lib.brit.prototype = p = new cjs.Container()
		p.nominalBounds = new cjs.Rectangle(0, 0, 259, 194);
		lib.Tween2 = function () {
			this.initialize()
			// Layer 1
			this.instance = new lib.brit()
			this.instance.setTransform(134, -109.5, 1, 1, 0, 0, 0, 129.5, 97);
			this.instance_1 = new lib.gaga_1()
			this.instance_1.setTransform(-148.9, 33, 1.537, 0.24, 60, 0, 0, 121, 104.1);
			this.A(
					this.instance_1,
					this.instance
			)
		}
		lib.Tween2.prototype = p = new cjs.Container()
		p.nominalBounds = new cjs.Rectangle(-263.5, -206.5, 527, 413);
		lib.Tween1 = function () {
			this.initialize();
			// Layer 1
			this.instance = new lib.brit().transform(-57.6, 52.6, 1, 1, 0, 0, 0, 129.5, 97);
			this.instance_1 = new lib.gaga_1();
			this.instance_1.setTransform(72.5, 0.1, 1.537, 0.24, 60, 0, 0, 121, 104.1);
			this.addChild(this.instance_1, this.instance)
		}
		lib.Tween1.prototype = p = new cjs.Container();
		p.nominalBounds = new cjs.Rectangle(-187.1, -173.5, 374.2, 347.1)
		// stage content:
		lib.Untitled3 = function (mode, startPosition, loop) {
			this.initialize(mode, startPosition, loop, {})
			// Layer 1
			this.instance = new lib.gaga_1()
			this.instance.setTransform(275, 200.5, 1, 1, 0, 0, 0, 121, 104)
			this.instance_1 = new lib.Tween1("synched", 0)
			this.instance_1.setTransform(202.6, 200.5)
			this.instance_1._off = true
			this.instance_2 = new lib.Tween2("synched", 0)
			this.instance_2.setTransform(301.9, 206.5)
			this.timeline.addTween(
					cjs.Tween.get({})
							.to({state: [{t: this.instance}]})
							.to({state: [{t: this.instance_1}]}, 19)
							.to({state: [{t: this.instance_2}]}, 10)
							.wait(1))
			this.timeline.addTween(cjs.Tween.get(this.instance).to({
				_off: true,
				regX: 0,
				regY: 0,
				x: 202.6,
				mode: "synched",
				startPosition: 0
			}, 19).wait(11));
			this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off: false}, 19).to({
				_off: true,
				x: 301.9,
				y: 206.5
			}, 10).wait(1))
		}
		lib.Untitled3.prototype = p = new cjs.MovieClip()
		p.nominalBounds = new cjs.Rectangle(429, 296.5, 242, 208)
	}
	flashFunction(lib = lib || {}, images = images || {}, createjs = createjs || {})
	$.c('y', 550, 400).id('canvas').A()
	canvas = document.getElementById("canvas")
	images = images || {}
	loader = new createjs.LoadQueue(false)
	loader.addEventListener("fileload",
			handleFileLoad = function (evt) {
				if (evt.item.type == "image") {
					images[evt.item.id] = evt.result
				}
			})
	loader.addEventListener("complete", function () {
		exportRoot = new lib.Untitled3();
		stage = new createjs.Stage(canvas)
		stage.addChild(exportRoot)
		stage.update()
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage)
	})
	loader.loadManifest(lib.properties.manifest)
}//f
FLASHSCROLLER1 = function () {
	z()
	// ****  THIS WORKS!!!
	var p
	images = {}
	lib = {properties: {width: 550, height: 400, fps: 24, color: "#FFFFFF", manifest: []}};
	(lib.StartMarker = function () {
		this.initialize();
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#339933").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
		this.shape.setTransform(0, 0, 1.515, 1.515);
		this.addChild(this.shape);
	}).prototype = new cjs.Container().bounds(-25, -25, 50, 50);
	(lib.Player = function () {
		this.initialize()
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f("#CC0000").s().p("AhtDHIAAmOIDaAAIAAGOg");
		this.shape.setTransform(0, -20)
		this.addChild(this.shape)
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11, -40, 22, 40);
	(lib.Boundries = function () {
		this.initialize();
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhPBfICfi9")
		this.shape.setTransform(846, 100.5)
		this.shape_1 = new cjs.Shape()
		this.shape_1.graphics.f().s("#0066CC").ss(38, 1, 1).p("AjCB9ICgifIDlha")
		this.shape_1.setTransform(777.5, 163.5);
		this.shape_2 = new cjs.Shape()
		this.shape_2.graphics.f().s("#0066CC").ss(38, 1, 1).p("Aw2FtIBGlAIHMDwQBXixCLhwQEJBtDPBgQBMAkBGg1QAegXANgkICgAAQBQlqFUANIBQiMIBQAA");
		this.shape_2.setTransform(627, 261.5);
		this.shape_3 = new cjs.Shape()
		this.shape_3.graphics.f().s("#0066CC").ss(38, 1, 1).p("AikhAIjSCBAikhAIhQAAAF3APIobhP")
		this.shape_3.setTransform(-157.5, 229.5);
		this.shape_4 = new cjs.Shape()
		this.shape_4.graphics.f().s("#0066CC").ss(38, 1, 1).p("AEYjHIszhGIQ3IbImulx")
		this.shape_4.setTransform(-17, 253);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhXgTQBigNBNA2");
		this.shape_5.setTransform(452.8, 235.1);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#0066CC").ss(38, 1, 1).p("Ag1AAIBsAA");
		this.shape_6.setTransform(123.5, 342);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f().s("#0066CC").ss(38, 1, 1).p("AALkRQGogLDzFiIAAB9I1LBQ");
		this.shape_7.setTransform(356.8, 309.5);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#0066CC").ss(38, 1, 1).p("AsujgIBuAAID0A/QHfAfG2DcQBVAqBdAUQBxAYBDAxAnMihIBCARIAoAAQAjAtAPAHImkhIQCGgFCCAIgAmojgIkYAA");
		this.shape_8.setTransform(222.5, 239.5)
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#0066CC").s().p("AmOE2IAApqIMdAAIAAJqg");
		this.shape_9.setTransform(101, 227);
		this.addChild(
				this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4,
				this.shape_3, this.shape_2, this.shape_1, this.shape);
	}).prototype = p = new cjs.Container().bounds(-214, 72, 1087, 289);
	lib.scroller2 = function () {// stage content:
		this.initialize()
		this._player = new lib.Player()//.transform(115,147,1,1,0,0,0,11,20);
		this._boundaries = new lib.Boundries().tf(40, 31, 1, 1, 0, 0, 0, 40, 31);
		this._startMarker = new lib.StartMarker()//.transform(120.5,135.5,1,1,0,0,0,16.5,16.5);
		this.addChild(this._startMarker, this._boundaries, this._player)
	}
	lib.scroller2.prototype = new cjs.Container().bounds(61, 272, 1087, 289)
	$('body').A(
			$.bt('start', function () {
				boundaries.tw([{x: -500}, 10000])
			}),
			$('<br>'))
	exportRoot = new lib.scroller2()
	s = stage = $St(550, 400).A().A(exportRoot)
	cjs.Ticker.setFPS(lib.properties.fps)
	startMarker = exportRoot._startMarker.X(275).hd()
	player = exportRoot._player.rXY(0).X(275)
	boundaries = exportRoot._boundaries.XY(500, 0)
	_vx = 0
	_vy = 0
	$.key({
		l: function () {
			_vx = -7
		},
		L: function () {
			_vx = 0
		},
		r: function () {
			_vx = 7
		},
		R: function () {
			_vx = 0
		},
		u: function () {
			_vy = -20
		}
	})
	$('canvas').$(function () {
		_vy = -20
	})
	processCollisions = function () {
		if (_vy <= 0) {
			return
		}
		if (player.belowStg()) {
			$l('fell off')
			cjs.Tween.removeAllTweens()
			boundaries.XY(500, 0)
			_vy = 0
			player.XY(startMarker)
		}
		else {
			if (collision = boundaries.test(player)) {
				while (collision) {
					_vy = 0
					player.y -= .1
					collision = boundaries.test(player)
				}
				_vy = 0
			}
		}
	}
	scrollStage = function () {
		boundaries.x += (s.W() * .5) - player.x
		player.X(s.W() * .5)
	}
	cjs.tick(function () {
		_vy += 2
		player.x += _vx;
		player.y += _vy;
		processCollisions()
		scrollStage()
	})
}//f
MOVIE = function () {//wap()
	z()
	var s = $St($.c('b', 800, 800).A()).t(),
			div = $.d().A(),
			fn = function () {
			}
	$.getJSON('/img', function (imgs) {
		_.e(imgs, function (v) {
			v = v.d
			var canvas = $.c(100, 100).A().fit(v)
			canvas.$(function () {
				s.bm(v, function (b) {
							bb = b
							createjs.bindTransform(b);
							//fn(b)
							b.$(function (q) {
								fn(q)
							})
						},
						'+')
			})
			div.A(canvas)
		})
		part2 = function () {
			c = $.Ct().A(
					$.row.A(
							$.d().A(div, s),
							$.d().A(
									$.bt('shake', function () {
										fn = function (b) {
											W$.get(b.obj(), {loop: true})
													.to(ww({x: b.x()}, 500))
													.to(ww({x: b.x() + 100}), 500)
													.to(ww({x: b.x()}), 500)
										}
									}),
									$bt('rotate', function () {
										fn = function (b) {
											W$.get(b.obj(), {loop: true})
													.to(ww({kxy: 0})).to(ww({kxy: 20}), 500).to(ww({kxy: 0}), 500)
										}
									}),
									$bt('size', function () {
										fn = function (b) {
											W$.get(b.obj(), {loop: true})
													.to(ww({sxy: 1})).to(ww({sxy: 1.3}), 500).to(ww({sxy: 1}), 500)
										}
									})
							)))
		}
		//c.o('$$',function(){  s.sv(ART)})
	})
	return s
}//f
STAGE = function () {
	z()
	m$$("location=location")
	s = $St(600).rgc().drag().XY(300)
	s.bm('chicks')
	s.bm('me', function (mm) {
		m = mm
		m.rgc()
		m.XY(300)
		$Tw(s, [{r: -10000}, 300000])
		$Tw(m, [{r: 100000}, 300000])
	})
	s.bm('guy', function () {
	})
}//f
CJSSPINNER = function () {
	z()
	s = $St('purple', 1000).A().rC()
	$Tw(s, [{r: -10000}, 300000])
	s.bm('me', function (bm) {
		m = bm.XY(500)
		SL(bm)
	})
	s.A(r = $h().rec(400, 400, 'orange', 'red').XY(1200))
	s.A(r2 = $h().rec(300, 300, 'pink', 'red').XY(800))
	s.A(r3 = $h().rec(300, 300, 'green', 'green').XY(0))
}//f
RECTS = function () {
	z()
	x = 20
	y = 20
	s = $St(500).A()//.drag()
	h0 = $h().rec(-20, -20, x + 40, y + 40, 'yellow', 'yellow')
	h1 = $h().rec(-10, -10, x + 20, y + 20, 'red', 'pink')
	h2 = $h().rec(0, 0, x, y, 'orange', 'black')
	s.A(h0, h1, h2)
	SL(h2)
	SL(h2, h1)
	SL(h2, h0)
	RT(h1)
	RT(h1, h2)
	RT(h1, h0)
	SC(h0)
	SC(h0, h2)
	SC(h0, h1)
	a = function () {
		x += 20;
		y += 20
		h1.clr()
		h2.clr()
		h1.rec(-10, -10, x + 20, y + 20, 'black', 'pink')
		h2.rec(0, 0, x, y, 'orange', 'transparent')
	}
	a()
	h0.rec(50, 50, 30, 30, 'black', 'orange')
}//f
ZOENOANIM = function () {
	z()
	spr = $Sp({
		"framerate": 24,
		"images": ["/zoetest.png"],
		"frames": [
			[0, 0, 512, 256, 0, -133, -143],
			[512, 0, 512, 256, 0, -133, -143],
			[1024, 0, 512, 256, 0, -133, -143]
		],
		"animations": {}
	})
	s = $St(1000).A()
	s.A(spr)
	// spr.p()
}//F
ZOEFRAMES = function () {
	z()
	spr = cjs.sprite({
		"framerate": 24,
		"images": ["/sprite2.png"],
		"frames": [
			[0, 0, 128, 128, 0, -176, -161],
			[128, 0, 128, 128, 0, -176, -161],
			[256, 0, 128, 128, 0, -176, -161]
		],
		"animations": {
			"weird": {"speed": 1, "frames": [2]},
			"bald": {"speed": 1, "frames": [1, 1, 1, 1]}
		}
	})
	anis = spr.spriteSheet._animations
	// aniNames = _.keys(anis  )  // _.e(anims, function(name){  spr[name]=function(){ this.gotoAndPlay(name) }  })
	s = $St(1000).A()
	s.A(spr.drag())
}//F
CHAR0 = function () {
	showSprite(Sprites.char)
	function showSprite(sprite) {
		z()
		s = $St(1000).A()
		spr = cjs.sprite(sprite).drag().a2(s)
	}
}//F
}

 
ZOE = function () {
	W()
	//this is a sprite sheet literal, but not an actual ss
	//cjs.Sp converts it to a ss for us, before passing it in
	// to cjs.Sprite to make the actual sprite object
	x0 = w.S(800, 200, 'r', 40, 40, 0, 0, 45)
	
	i = x0.Sp($SS({
		r: 24,
		i: ["/zoetest.png"],
		f: [
			[0, 0, 512, 256, 0, -133, -143],
			[512, 0, 512, 256, 0, -133, -143],
			[1024, 0, 512, 256, 0, -133, -143]],
		a: {}
	}))
	i.p()
	
	sp = w.S(500, 300, 'X', 40, 40).Sp($SS({
		r: 24,
		i: ["/sprite2.png"],
		f: [
			[0, 0, 128, 128, 0, -176, -161],
			[128, 0, 128, 128, 0, -176, -161],
			[256, 0, 128, 128, 0, -176, -161]],
		a: {
			"weird": {"speed": 1, "frames": [2]},
			"bald": {"speed": 1, "frames": [1, 1, 1, 1]}
		}
	}))// -150,-140)
	// _.e(  sp.as(), function(n){   sp[n]=function(){sp.p(n)}   })
	b = w.D(300, 200, 'r', 40, 40).cn('thrust')
	b.Sp($SS({
		r: 4, i: ["stick.png"],
		f: [
			[0, 0, 512, 512, 0, -22, -2],
			[512, 0, 512, 512, 0, -22, -2],
			[1024, 0, 512, 512, 0, -22, -2],
			[0, 512, 512, 512, 0, -22, -2],
			[512, 512, 512, 512, 0, -22, -2],
			[1024, 512, 512, 512, 0, -22, -2],
			[0, 1024, 512, 512, 0, -22, -2],
			[512, 1024, 512, 512, 0, -22, -2],
			[1024, 1024, 512, 512, 0, -22, -2],
			[0, 1536, 512, 512, 0, -22, -2],
			[512, 1536, 512, 512, 0, -22, -2],
			[1024, 1536, 512, 512, 0, -22, -2]
		],
		a: {
			die: {"frames": [8, 9, 10], "speed": .1, next: false},
			walk: {"frames": [1, 2, 3, 4], "speed": .1},
			jump: {"frames": [5, 6, 7, 0], "speed": .1, next: false}
		}
	}), 40, 0, .6, .6, 20)
	b1 = w.D(200, 200, 'b', 60)
	.Sp('char')//, -150, -110)//.rXY(275,220)
	
	w.S(100, 500, 'r', 100, 100)
	.K('hurt').bS('guy', .6)
	
	w.S(500, 500, 'r', 100, 100).K('fly')
	w.cl('hurt', function () {
		b1.p('hurt')
		//b1.I(10, -20)
	})
	
	w.cl('fly', function () {
		b1.p('fly')
		//b1.I(-10, -20)
	
	})


}//A------
MUMMY = HEADTURNS = PACK = PACKANIM = function () {
	
	W({g: 0, w: '<-'});//w.Z(.1);cjs.rulers();w.showOff()
	
	p = w.D(100, 100, 'X', 100, 100).K('mummy').tr()
	
	p.gx = w.g.ct()
	// you must set reg point BEFORE you scale
	// because once you scale, 'W/H' return u the scaled height
	// but you need to set regX/Y based on original scale
	
	sp = p.Sp(Mummy, 110,110, 2.5).p('walk')
	
	p.Bm('me', 0, -50, -.3, .3)
	// sp.sXY(2, 200,-100)
	// b.bS('me', .3, -5, -22)
	x = w.S(500, 400, 'X', 200, 40, 60, 60, '-')
	//x.rt(90).fR().bS($Sp(Pack).rC().sXY(.4)).p('e4')
	x.Sp(Pack, 0, 0, .5).p('e4')
	
	//.cl(function(){p.I(1000,1000)})
	// p.cl(x, function () { p.lV(10000, -400) })
	
	$.kD({
		u: function () {
			if (p.Y() > 530) {
				p.I(0, -380)
			}
		}, //jumpButtonPressed = true
		U: function () {
		}, //jumpButtonPressed = false
		l: function () {
			p.gx.sX(-1);
			p.direction = 'left'
		},
		r: function () {
			p.gx.sX(1);
			p.direction = 'right'
		}
	})
	
	T.t(function () {
		// p.rot(0)
//		if (p.sp().dir() == 'right') {p.I(100, -2)}
//		else if (p.sp().dir() == 'left') {p.I(-100, -2)}
		// direction='neither' // <-- demumify (doesnt keep walking
		//if(jumpButton is pressed){jump()}
		// p.I(0, 200)
	})
	
	
	gx = w.pack()
			.sen(1)
			.lD(100).aD(100)
	w.$$(function () {
		anim = _.keys(Pack.animations)[_.random(23)]
		$l('changed to ' + anim)
		f1.sp().p(anim)
	})
}//A-
FIRESPR = function () {
	W({g: 100, w: '_'}); //'<-'
	w.Z(.1);
	// cjs.rulers();
	//  w.showOff()
	w.p()
	gx = w.pack(300, 300)
	//gx.fR()
	gx.f(200)
	ya()
	//.lD(100).aD(100)
	w.$$(ya)
	function ya() {
		anim = _.keys(Pack.animations)[_.random(33)]
		$l('changed to ' + anim)
		gx.sp().p(anim)
	}
	
	T.t(function () {
		if (gx.X() < 0) {
			gx = w.pack()
			ya()
		}
	})
}//C+
SPRITE = function (sp) {
	W()
	w.i.A(
			sp = $Sp(sp || SS).XY(10).drag()
	)
	co = {
		jump: function () {
			sp.p('jump')
		},
		explode: function () {
			sp.p('explode')
		},
		spin: function () {
			sp.p('spin')
		},
		stop: function () {
			sp.s()
		},
		play: function () {
			sp.p()
		}
	}
	$.d('y', 460, 89).css({
		position: 'absolute',
		top: 200,
		left: 300,
		padding: 20,
		opacity: .9
	}).A().drag().A($.sp(' '),
			$.bt('spin', function () {
				co.spin()
			}), $.sp(' '),
			$.bt('jump', function () {
				co.jump()
			}), $.sp(' '),
			$.bt('explode', function () {
				co.explode()
			}), $.sp(' '),
			$.bt('play', function () {
				co.play()
			}), $.sp(' '),
			$.bt('stop', function () {
				co.stop()
			}), $.sp(' '),
			$.bt('meta', function () {
				SPRITE()
			})
	)
	return co
}//A+++++
SSBUILDER = function () {
	z();
	cjs.testCanvas = function () {
		return $.d().A($.c(960, 400).id("testCanvas"))
	}
	cjs.testCanvas()
	//canvas=document.getElementById("testCanvas")
	s = stage = $St(["testCanvas"]).tick()
	cjs.Ticker.setFPS(30)
	scale = 0.4
	mc = cjs.gunner().drag()
	w = mc.nominalBounds.width * scale
	mc.tf(100 + w / 2, 100, scale, scale).a2(s)
	label1 = new cjs.Text("MovieClip-vector", "14px Arial", "#111").a2(s).textA("center").transform(mc.x, 30)
	label2 = label1.clone().a2(stage).T("Sprite-raster").X(w + 50, '+')
	b = builder = cjs.builder(mc)
	b.Z(scale).maxW(1024)
	b.async(function (ev) {
		sprite = cjs.sprite(ev.target.spriteSheet)
		sprite.transform(mc.x + w + 50 || 0, mc.y).a2(s).drag()
		mc.gotoAndPlay(0)
		sprite.gotoAndPlay(0)
	})
	img = builder._data.images[0]
	$('body').A(img)


}//B+



function _pre() {
	scaleShake = cjs.scSh = cjs.scaleShake = function (bm) {
		$Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
	}
	rotateShake = cjs.rtSh = cjs.rotateShake = function (bm) {
		$Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
	}
}