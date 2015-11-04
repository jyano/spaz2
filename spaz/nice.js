NUMBODS=DTS = DOTS= SCALE = function () {
	W()
	r = 10
	w.y(200, 200)
	w.S(400, 300, 'r', 40);
	w.S(290, 350, 'b', 40);
	w.S(280, 220, 'y', 40)
	w.S(100, 100, 'r', 80, 80)
	bb = w.D(600, 400, 'o', 150, 150)
	bb.bS('me')//cant attach to above at the moment..
	b23 = w.D(400, 100)
	b23.rec('r', 20, 40, 0, 0, 180).fr(0).r(0)
	b23.rec('b', 20, 40, 0, 0, 90).fr(0).r(0)
	w.S(100, 200, 'b', 50).f().dot()
	w.S(100, 300, 'r', 80, 80)
			.f().dot().C('p').dot().C('x') //overwrites dot?
	$t(function () {
		var p = bb.wP(80, -80)
		w.dot(p)
		bb.I(0, -200, p)
	})
	w.show(function () {
		var msg = 'num: ' + w.n()
		$l(msg)
		return msg
	})
}
 
 
KILLFXT = KXX=function () {
	W()
	r = 20
	
	b = w.D(300, 300, 'g', r)
	
	_.ev(.2, function () {
	
		if (b.f()) {
		
			b.f().kill()

			r += 1;
			
			b.cir( r,'y')
		}
	})
}
 
 
WVS = WORLDVERTS  =function () {
	W()
	b = w.S(500, 200, 'o', [
		[[-100, 0], [0, -100], [100, 0]]
	]).rt(25)
	f = b.f()
	v = f.wV()
	w.S(400, 200, 'w', [v])
	
	_.e(v, function (v) {
		w.dot(v)
	})
	
	//w.S(600, 200, [f.wV('+')])
}

function worldGrv() {
	DBLCLK = SUGARWEASEL = SGW = function () {
		var i = -20
		W([800, 1000], {g: -10})
		w.roof.kill()
		w.floor.kill()
		glider = w.D(300, 500, 'b', 100, 200, 50, 50, 20)
		w.D(300, 500, 'b', [-100, 0], [0, -100], [100, 20]).K('b')
		w.D(500, 500, 'r', [-100, 0], [0, -100], [100, 20], '-').K('r')
		w.left.K('b')
		w.dot(300, 500)
		$t(function () {
			glider.I(i, 0)
		})
		w.$(function () {
			glider.I(i * -12, 0)
		})
		w.$$(function () {
			i = ( i * -1  )
		})
		//y=w.ship()
		//y.C(function(f){if (f.of('b')) {f.B().kill()}})
	}
	GRAV = GRA = function () {
		W({g: 10}).Y()
		balls = function () {
			w.D(100, 100, 'a', 50).d(1)
			w.D(100, 200, 'c', 40).d(1)
			w.D(100, 100, 'd', 50).d(1)
			w.D(100, 200, 'e', 40).d(1)
			w.D(100, 100, 'f', 50).d(1)
			w.D(100, 200, 'h', 40).d(1)
			w.D(100, 100, 'i', 50).d(1)
			w.D(100, 200, 'j', 40).d(1)
			w.D(100, 100, 'k', 50).d(1)
			w.D(100, 200, 'l', 40).d(1)
		};
		balls()
		range = w.pJ(
				w.S(600, 300, 'q', 220, 20),
				w.D(600, 300, 's', 20, 250).lD(10),
				V(1, 0)).lm(-100, 100)
		w.show(function () {
			return 'Welcome to Gravity Range: Current gravity is ' + range.val()
		})
		$t(function () {
			w.G(range.val())
			w.e(function (b) {
				b.I(0, .1)
			})
		})
	}
}
//colide

FIXROT = JUMP = CEN = LVW = SMASH = function () {
	
		W([2000, 1500, 2000, 1500]).G(200).C('b');
		var b1, b2
		// y and remote control fireball
		var y = w.y(300, 100, '+')
		farMoon = w.D(600, 100, 'y', 150).K('b').r(1.2).lV(200, 0).cn('thrust').fR()
		nearMoon = w.D(400, 200, 'y', 100)
		p = w.p(900, 400).cn('jump')
		sun = r1 = w.S(600, 300, 'r', 30, '-').K('r').bS('sun')
		
		sun.cl(function (f, cx) {
			$l('sun clide: ' + f.K())
			var pt = cx.cen()
			var v1 = b.lVW(pt)
			var v2 = r1.lVW(pt)
			
			w.D(630, 350, 'r', 10).I(v1.x - v2.x, v1.y - v2.y)
		
		})
		
		//$t(function () {var lV = y.lVW(y.X(), y.Y()).mult(20); nearMoon.lV(lV.x, lV.y)})
		//p.cl(_.m(function () {w.D(300, 100, 'r', 5)}))
}


	
TRAMP = WARP = IMP = function () {
		W().P()
		w.S(500, 600, 's', 30, 200)
		w.S(600, 600, 's', 30, 200)
		w.S(550, 550, 'z', 100, 20).K('warp')
		w.D(650, 580, 'd', 300, 80).K('tramp').r(5).d(10).aD(10).lD(10)
		p.warp = function () {
			this.XY(200, 100)
		}
		p.cl('warp', function () {
			p.warp()
		})
		p.cl('tramp', function () {
			p.I(0, -50000)
		})
	}
KILL = function () {
		W()//.Y()
		y = w.y()
		w.randRects()
		l = w.S(255, 50, 'g', 60, 15)
		for (var i = 1; i <= 10; i++) {
			w.rJ(l, b = w.D(255, i * 30 + 30, 'w', 3, 15).DFB(1, 0, 0));
			l = b
		}
		w.rJ(l, w.D(255, 330, 'd', 20).DFB(1, 0, 1.1))
		l = w.S(900, 50, 'g', 60, 15)
		for (var i = 1; i <= 10; i++) {
			w.rJ(l, b = w.D(900, i * 30 + 30, 'w', 3, 15).DFB(1, 0, 0));
			l = b
		}
		w.rJ(l, w.D(900, 330, 'd', 20).DFB(1, 0, 1.1))
		// _.t(8,function(){w.me(700, 400)})
		_.t(4, function () {
			w.me(700, 300)
		})
		// _.t(1,function(){w.me(700, 200)})
		w.cl('bul', function (f) {
			if (f.of(y)) {
				alert('f.of y')
			}
			else {
				f.B().kill()
			}
		})
	}
	
CHEM = function () {
		w.rec = function (x, y, W, H, c) {
			var w = this, g = G(arguments), b, o
			o = g.O ? g.f :
					N(g.s) ? {x: g.f, y: g.s, w: g.t, h: g[3], c: g[4]} :
					{w: g.f}
			o.x = N(o.x, w.hW)
			o.y = N(o.y, w.hH)
			o.w = N(o.w, 40)
			o.h = N(o.h, o.w)
			o.c = o.c || $r()
			b = w.D(o.x, o.y, o.c, o.w, o.h).K('box').DFB(.5, .5, 0)
			if (g.n) {
				b.sen(true)
			}
			return b
		}
		W({
			w: 0//, g:50
		})
		w.rR(0, 3)
		w.rR(100, 3)
		w.rR(100, 3)
		w.rR(200, 3)
		w.rR(300, 3)
		w.rR(400, 3)
		w.Q(function (f) {
			f.B().kill()
		}, 550, 250, 650, 350)
		w.Q(function (f) {
			f.B().kill()
		}, 350, 50, 450, 150)
		w.Q(function (f) {
			f.B().kill()
		}, 850, 50, 950, 150)
		y = w.y(600, 300).K('y')
		_.ev(1, function () {
			w.cir(R(20, 400), 80, 12, 'r').K('r')
			w.rec(R(20, 900), 100, 24, 24, 'b').K('b')
		})
		w.cl('bul', function (f) {
			var b = f.B()
			this.B().kill()
			if (b != y) {
				b.kill()
			}
		})
		w.cl('r', 'b', function () {
			y.stat()
			w.e(function (b) {
				if (b != y) {
					b.kill()
				}
			})
			alert('you win!')
		})
		y.cl('r', lose)
		y.cl('b', lose)
		function lose() {
			//w.pen('you lose')
			y.stat()
			w.e(function (b) {
				if (b != y) {
					b.kill()
				}
			})
			_.in(self)
		}
	}




function revJ() {
	PINBALL = PNB = function () {
		W([420, 600], {})
		w.floor.kill()
		w.S(215, 520, 'r', 30).K('bump').DBF(10, .8, 0)
		w.S(215, 100, 'b', 100, 10).K('shelf')
		w.D(215, 90, 'r', 20)
				.bS('sun', .24)
				.K('sun')
				.rot(10, 100)
		flip = w.flips(100, 430)
		$.tap(function () {
					var b = w.D(R(300, 40), 160, 'g', 20).DBF(1, .2, 2)
					if (!R(10)) {
						b.bS('me', .24)
					}
					flip()
				}
		)
	}
	REVY = TRICYCLE = function () {
		W([1200, 600, 10000, 600], {})
		//yy=w.y().aD(5000)//.fixRot()
		dir = 12
		car = w.D(300, 300, 'r', [
			[200, 20],
			[20, 165, -50, -50, 45],
			[20, 165, 50, -50, -45]
		]).fr(5).track()
		_.t(30, function () {
			w.me(R(9000, 500), 100, R(2, .5))
		})
		wh = wheel(250, 300).C('b').bS('me', .7)
		j = w.rJ(
				wh, //.lD(100).aD(100).fr(100),
				car,
				0,
				0,
				100,
				0
		)
		w.rJ(
				wh2 = wheel(250, 300, 50, 10).C('g')
						.bS('me', .4).aD(10).fr(2),
				car, 0, 0, -100, 0
		)
		j = w.rJ(
				wh3 = wheel(250, 300, 25, 6).C('y').bS('me', .2).lD(100).aD(100).fr(100),
				car, 0, 0, 0, -100
		)
		function wheel(x, y, r, n) {
			r = N(r, 80)
			n = N(n, 15)
			pC = [b2d.pC(r, n)]
			return w.D(x, y, 'w', pC)//.d(5).r(0).lD(100).aD(100).fr(100)
		}
		
		// j.mt(-50)
		T.t(function () {
			var K = $.K
			car.I(0, 5000)
			if (K.r) {
				wh.ApplyTorque(3500)
				wh2.ApplyTorque(3500)
				wh3.ApplyTorque(150)
			}
			if (K.l) {
				wh.ApplyTorque(-3500)
				wh2.ApplyTorque(-3500)
				wh3.ApplyTorque(-150)
			}
			if (K.u) {
				wh.ApplyTorque(1500)
				wh3.ApplyTorque(-500)
			}
			if (K.d) {
				wh2.ApplyTorque(-500)
				wh3.ApplyTorque(1500)
			}
		})
		//car.aD(1000).lD(1000)
	}
	REVERCH = SPERCH = function () {
		W([1200, 600, 1200, 1200], {}).P()
		p.tr()
		w.perch()
		w.seesaw(600, 1100)
		w.seesaw(600, 700)
		w.seesaw(600, 500)
		w.spinner(400, 900)
		w.spinner(800, 900, '-')
	}
	REVEVS = ELEVS = function () {
		W([1200, 600, 2400, 1200], {}).P(100, w.h - 200)
		//p.d(.1).fr(1)
		p.K('p').track()
		speed = 10
		j = w.pJ({
			a: w.S(400, w.h - 200, 's', [[40, 40, '-']]).d(1).fr(1),
			b: w.D(500, w.h - 300, 'd', 200, 40).d(.1).K('elv'),
			lm: [-250, 100]
		}).mt(speed)
		w.cl('elv', _.debounce(function () {
			j.mt(speed *= -1)
		}, 200, true))
		speed2 = -100
		j2 = w.pJ({
			a: w.S(800, 300, 's', 40, 40).d(1).fr(1),
			aV: [-30, 2],
			b: w.D(800, 200, 'd', 200, 40).d(1).K('box'),
			ax: V(0, 1),
			rA: 45
		}).mt(speed2)
		w.cl('box', 'p', function () {
			speed2 *= -1
			j2.mt(speed2)
		})
		w.p(500, 200, 'thrust').K('p').d(.02)
		w.pJ(
				w.S(1000, 800, 'y', 40, 40).d(1).fr(1),
				w.D(1100, 900, 'b', 200, 40).d(1), [1, -.5], 25
		).L(-300).U(200).lm('+')
		j3 = w.pJ({
			a: w.S(240, 150, 's', 180, 90),
			b: w.D(200, 200, 'd', 200, 20),
			aV: V(100, 10),
			rA: 5
		})
		j3.mt(-10)
		_.in(2, function () {
			j3.mt('-')
		})
		_.in(4, function () {
			j3.mt('+')
		})
	}
}
function arcade() {
	JFAL = HEADS = SCORE = function () {
		w.me = function (x, y, Z) {
			var w = this, p
			Z = N(Z, 4)
			p = w.D(x, y)
			p.cir({c: 'X', C: 'X', l: 0, r: 1})
			p.rec('X', Z * 12, Z * 22).K('head')
			p.rec('X', Z * 10, Z * 20, 0, Z * 10, '-').K('feet')
			p.rec('X', Z * 2, Z * 6, 0, -Z * 12, '-').K('hat')
			p.rec('X', Z * 8, Z * 2, Z * 8, 0, '-').K('right')
			p.rec(Z * 8, Z * 2, -Z * 8, 0, '-').K('left')
			p.d(1).r(0).fr(.1).fixRot()
			p.bS({
				i: 'me',
				sc: Z / 10
			})
			return p.K('p player')
		}
		W({g: 10, w: 'L'})
		//w.s.sX(.95)
		num = 0;
		heads = 0
		y = w.ship()//.den(.3)
		_.ev(1, function () {
			w.me(100, 100).K('head')
			num++
		})
		//w.show(function(){return num + ' - ' + heads  })
		game = true
		T.t(function () {
			/*
			 if(num > 30){
			 $.pop('score: '+heads)
			 num=0
			 heads=0
			 w.each(function(b){
			 if(b.data() == 'head'){
			 b.kill()
			 heads++}})}
			 */
			if (game) {
				if (num > 60) {
					game = false
					msg = 'score: ' + heads
					$l(msg)//$.pop(msg)
				}
				else {
					w.e(function (b) {
						if (b.K() == 'head' && b.Y() > 600) {
							b.kill();
							heads++
						}
					})
				}
			}
		})
	}
	ICE = GRASS = HEADACHE = function () {
		W().P()
		// w.clouds(100,200)
		// w.clouds(400,400)
		w.rub(100, 100)
		w.grass(400, 100)
		w.ice(300, 300)
		w.brick(200, 400, 80, 20)
		w.brick(300, 200, 80, 20)
		//$.joystick()
		w.p(600, 200).r(4)
		w.p(600, 200).r(4)
	}
	CHARS = JETJUMP = function () {
		W([1200, 600, 1200, 1000], {g: 200}).P().Y()
		y.tr()
		// w.ice(800,280, 10000);
		// w.S(1200,30, 'r',600,4)
		// w.clouds(500,-200).clouds(1000,-200).clouds(-500,-200)
		//w.s.XY(300, 150).rXY(300,150)
		//  T.t(function(){p.centerScale(1-( (p.X()- w.hH)/ w.hH)*.1)})
		//w.s.XY(300,150)
		//w.s.rX(600)
		//w.s.rY(-200)
		//w.Z(.5)
		w.ice(30, 450, 400)
		w.grass(850, 650, 400)
		w.grass(0, 800, 400)
		w.rubber(880, 950, 1000)
		/*
		 //w.s.XY(300, 150)//.rXY(300, 150)
		 w.grass(300,280,500)
		 w.ice(1300, 280, 1000)
		 w.clouds().clouds(500,-200).clouds(1000,-200).clouds(-500,-200)
		
		 //w.s.XY(300, 150).rXY(300, 150)
		 w.clouds().clouds(1000,-200)
		 w.grass(300,280,500)
		 w.ice(800,280, 5000)
		 */
		//slide = w.rec(1200, 30, 1200,40, 'b').den(1).fric(.5).rest(.5)
	}
	PLAT = DOODLE = function () {
		W([1200, 600, 1200, 2000], {g: -1000}).stats().P(600, 1800)
		var b1, b2
		plat([300, 300], [900, 600], [300, 900], [300, 1000], [1000, 1200], [500, 1400])
		pf = plat(900, 1700)
		// PreSolve
// gives us a chance to change the characteristics of the contact
// before the collision response is calculated,
// or even to cancel the response altogether,
//  Here are the alterations you can make to the contact in PreSolve:
//  cx.SetFriction( friction)  // persists for duration of contact
//  cx.SetRestitution(  restitution)   //persists for duration of contact
//  cx.SetEnabled( false )//SetEnabled(bool flag); //non-persistent - need to set every time step
// will disable the contact,
// meaning that the collision response that normally would have been applied will be skipped.
// You can use this to temporarily allow objects to pass through each other
// . A classic example of this is the one-way wall or platform,
// where the player is able to pass through an otherwise solid object,
// depending on various criteria that can only be checked at runtime,
// like the position of the player and which direction direction they are heading, etc.
// It's important to note that the contact will revert back to being enabled in the next time step,
// so if you want to disable contacts like this you'll need to call SetEnable(false) every time step.
// The contact is only disabled for the current time step
// (or sub-step in continuous collision).
		function plat(x, y) {
			var g = G(arguments)
			if (g.O_) {
				g.e(function (g) {
					plat(g[0], g[1])
				});
				return
			}
			return w.S(x, y, 'o', 500, 40).K('pf')
		}
		
		p.K('p').tr()//.cl($.mo(function(){w.D(p.X(), p.Y()-150,'w',5,5,0,0,45)}))
		p.cl(w._t, //when player coll roof,
				function () {
					w.C('z');
					w.G(1000)
				})
		//one way wall
		w.pre('pf', function (f, cx) {
			if (p.Y() - this.B().Y() > 10) {
				cx.en(0)
			}
		})
	}
	ADV = MIRROR = function () {
		W('->')
		p = w.p(100, 300).tr()
		w.Z(1.5)
		function left() {
			p.XY(1100, 300);
			w.xW().walls('->')
			b.dyn().C('b');
			r.dyn().C('r');
			g.dyn().C('g')
			b2.dyn().C('o')
			b3.dyn().C('y')
		}
		
		function right() {
			p.XY(100, 300);
			w.xW().walls('<->')
			b.stat().C('z');
			r.stat().C('z');
			g.stat().C('z')
			b2.stat().C('z')
			b3.stat().C('z')
		}
		
		T.t(function () {
			if (p.X() > 1200) {
				right()
			} else if (p.X() < 0) {
				left()
			}
		})
		b = w.D(400, 400, 'b', 150, 150)
		r = w.D(500, 400, 'r', 50, 300)
		g = w.D(400, 500, 'g', 120)
		b2 = w.D(250, 400, 'o', 80, 30)
		b3 = w.D(150, 500, 'y', 50)
		w.$$(function () {
			w.e(function (b) {
				b.dyn()
			})
			w.t_.kill()
			w.Z(.1)
		})
	}
	FLOCK = function () {
		W({g: 0})//.P()
		w.D(300, 100, 'r', 50)
		w.D(500, 100, 'y', 50)
		w.D(700, 100, 'b', 50)
		w.D(900, 100, 'g', 50)
		var n = 0
		_.t(8, function () {
			w.y('o'//,'-'
			)//.push('+')
		})
		//y=w.y('b',100,100,5)
		_.evx(.5, function () {
			if (y.going()) {
				// w.C('p')
			}
			else {
				// w.C('z')
			}
		})
	}
	CHARSWITCH = ACO = SEN = function () {
		W([1200, 600, 3600, 800])
		w.Z(1.2)
		w.Elv(200, 100)
		//w.Elv(300)
		sen = w.S(1200, 400, 'w', [[2400, 200, '-']]).K('sen')
		aCo = w.aCo(-50, -150)
		aCo.do(sen)
		//<- sen.do(aCo) //  <- sen.cl(
		// function(f){if(!f.by(aCo)){aCo.B(f)}},
		// function(f){if(f.by(aCo)){aCo.xB(f)}
		// })
		w.P()
		p.track()
		// w.p(300, 400, '+').K('char')
		statMar = w.p(2600, 150).stat().K('mario')
		statBird = w.y(2350, 450, 2, '-').rt(90).stat().K('bird')
		statBird.cl('char', function () {
			p.kill()
			p = w.y(2350, 550, 2, '+').fR().rt(90).lD(2).K('char')
			w.Z(1.6)
		})
		statMar.cl('char', function () {
			p.kill()
			p = w.p(2400, 250).tr().K('char')
			w.Z(1.2)
		})
		//.tr()
		w.D(300, 100, 'r', 20);
		w.D(400, 100, 'r', 40);
		w.D(500, 100, 'r', 45);
		w.D(600, 100, 'r', 180);
		w.D(700, 100, 'r', 10)
		_.ev(2, function () {
			if (R()) {
				
				// tog()
			}
		})
		// Imagine that you have gusts of wind blowing sideways…
		// you can add your objects to a Contoller and have them pushed sideways…
		// then when the wind passes you could remove them from that controller.
		// now just add and remove bodies to the controller!!
		function tog() {
			$l('tog')
			// if(added){rm()} else {add()}
		}
		
		function add() {
			w.C('g');
			added = 1;
			co.B(b)
		}
		
		function rm() {
			w.C('r');
			added = 0;
			co.xB(b)
		}
		
		w.pJ(
				w.D(1200, 500, 'z', 60).K('ride'),
				w.S(1200, 500, 's', 40, 150).K('cart'))//.lm(-30, 60).speed(-100).motor(1).maxForce(1000)
				.lm(-30, 60).mt(-10)//.speed(-100).maxForce(1000)
		w.pJ(w.D(1400, 500, 'z', 110).K('ride'),
				w.S(1400, 500, 's', 40, 300).K('cart'))
				.lm(-30, 60).mt(10)//.speed(-100).maxForce(1000)
		w.pJ(
				w.D(1600, 500, 'z', 80).K('ride'),
				w.S(1600, 500, 's', 40, 250).K('cart')
		).lm(-30, 60).mt(-100)//.speed(-100).maxForce(1000)
		w.b(function (cx) {
			cx.w('cart', function () {
				w.e(function (b) {
					if (b.of('ride')) {
						b.I(0, -1000)
					}
				})
			})
		})
	}
}
function edgH() {
	DRAWEDG = EDG = function () {
		W([1200, 600, 2400, 600]);
		var p1, p2, d, l
		p = w.p(400, 400, '+')
		w.S(200, 200, 'r', 400, 20)
		w.$(function (v) {
			if (!p1) {
				p1 = v;
				return
			}
			if (!p2) {
				p2 = v
			} else {
				p1 = p2;
				p2 = v
			}
			w.edg(p1.x, p1.y, p2.x, p2.y).K('pf')
			w.rC(function (f) {
				f.B().dot()
			}, p1, p2)
		})
		p.IsBullet(true)
		w.pre('pf', function (f, cx) {
			if (p.shall) {
				cx.en(0)
			}
		})
		w.b(function (cx) {
			p.shall = false
			if (!cx.pt().y && p.lV().y < 0) {
				return
			}
			cx.w(p, 'pf', function () {
				c = cx
				v = cx.pt()
				if (cx.pt().y) {
					dif = (p.Y()) - cx.pt().y
					$l(dif)
					if (dif > -10) {
						p.shall = true
					}
				}
			})
		})
		//w.end(function(cx){cx.w('pf', function(){$l('end')})})
	}
}
function scrl() {
	function scrolByMovingAllB() {
		w.toLeft = function (n) {
			n = n || 0
			this.e(function (b) {
				b.X(b.X() - n)
			})
		}
		FLAPPY = WLEFT = FLP = function () {
			W({w: 0, g: 50})
			w.S(800, 500, 'o', 100, 600).K('plat')
			w.S(1200, 0, 'o', 100, 600).K('plat')
			w.S(1600, 500, 'o', 100, 600).K('plat')
			w.S(2000, 0, 'o', 100, 600).K('plat')
			game = true
			p = w.me(300, 0).fixRot().cl('plat', function () {
				if (game) {
					$.pop('you suck!')
					game = false
				}
			})
			cjs.t(function () {
				p.lV(3);
				w.toLeft(2)
			}) // odd way?  uses 'w.left' ???
			w.$(function () {
				p.I(0, -180)
			})
		}
	}
	CAMBALL = TRACKEE = function () {
		
		//W([1200,600,2400,600],{g:[10,10]}).Y()
		W([1200, 600, 2400, 600], {g: 100}).Y()
		mick(700, 100, {c1: 'b', c2: 'X'})
		mick(700, 300, {c2: 'b'})
		//  mick(100,100, { y2:10 })
		//  mick(100,200, { y2:200 })
		//  mick(100,300, { x2:100 })
		function mick(x, y, lf) {
			var g = G(arguments)
			w.i.h(x, y, '+').c({l: 20, C: 0, lf: lf || 1})
					.dc([50], [200, 0, 100], [100, 100, 100])
			if (g.p) {
				w.i.h(x, y).c({l: 20, C: 0, ls: lf || 1})
						.dc([50], [200, 0, 100], [100, 100, 100])
			}
		}
		
		y.i.c('y').dc(100, 100, 30)
				.c('o').dc(100, 100, 10)
				.c('X', 'g', 8)
				.mt([
					[100, 100], [300, 300], [400, 100],
					[500, 300], [450, 450]],
				[[500, 0], [600, 100]])
				.cir(600, 300, 'u', 'g', 10)
		h = w.i.h(600, 300, '+')
		h.cir(105, 100, 20, 'b')
				.cir(100, 20, 100, 'g')
				.cir(105, 100, 8, 'z')
				.cir(200, 100, 20, 'b')
				.cir(200, 100, 8, 'z')
		w.t = b = w.D(300, 300, 'r', 80).bo(.8).den(.1)
	}
	WORLDPAN = wpa = function () {
		W([1200, 600, 2400, 600], {g: 0})
		w.S(400, 300, 'r', 200, 100)
		w.S(800, 300, 'z', 100, 100)
		w.S(1200, 300, 'b', 300, 100)
		w.S(1600, 300, 'z', 100, 100)
		w.S(2000, 300, 'r', 200, 100)
		b = w.D(100, 100, 'b', 30).lV(-10, -20).rest(.2)
		co = w.tCo().B(b.tr())
		_.t(10, function (i) {
			co.B(w.D(100 + 30 * i, 100, 'r', 30).lV(10, 20).r(.2))
		})
		y = w.y(100, 100).rt(120).aD(100)
		w.pan('*')
	}
	ZOOM = SCORE = ADV = ADVENTURE = function () {
		W([1200, 600, 2400, 1200])//.P('+')
		//$.test=true
		w.Z(.1)
		w.roof.kill()
		w.S(100, 570, 'w', 200, 30).r(0).fr(0)
		w.S(325, 570, 'g', 230, 30).r(.3).fr(10)
		w.S(550, 570, 'r', 200, 30).r(.7).fr(.3)
		w.S(100, 400, 'g', 230, 30).r(.3).fr(10)
		w.plat([800, 300, 100], [260, 240, 60], [550, 250, 100], [1350, 550, 100], [300, 200, 100], [300, 500, 60, 30], [150, 400, 60, 30])
		w.S(1200, 500, 'w', 100, 100)
		w.S(1240, 450, 'w', 180, 30)
		w.S(1420, 500, 'y', 180, 30)
		w.S(1560, 450, 'y', 300, 30)
		w.S(1600, 500, 'y', 180, 30)
		w.S(1960, 450, 'w', 300, 30)
		w.S(1900, 500, 'w', 180, 30)
		w.S(11300, 200, 'w', 180, 30)
		speed = 1
		//  p.tr()
		p = w.p().cn('jump').tr()
		w.p(100, 100, .8)
		w.p(100, 100, .8)
		w.p(100, 100, .8)
		w.p(100, 100, .8)
		//p.lD(1)
///    w.show(function(){ return  'in air: '+ p.inAir() })
		//w.goomba(400).fr(0)
		setup = function () {
			score = 0
			p.XY(150, 100).lV(0, 0)
			w.s.XY(0, 0)
		}
		setup()
		T.t(function () {
			w.s.X(speed, '-')//.pen(score++)
			if (p.Y() > 600) {
				setup()
			}
		})
	}
	SCROLLGAME = function () {
		
		//no buffer to worry about
		//it lets u gradually move past the target point.. until hits limit
		W([1200, // x
			600,
			4800, // x
			1200
		], {g: 0, t: 0})
		w.S(1200, 300, 'r', 400, 100)
		w.S(1200, 900, 'r', 400, 100)
		w.S(1200, 600, 'w', [[400, 500, '-']])
		y = w.ship(200, 200).rot(120).damp(1, 10)
		w.track(y, 600, 300)
		// w.dot(600,300)
		//w.hud.dot(600,300)
//    w.dot(1200,600)
		//   w.hud.dot(1200,600)
		y.XY(1400, 600).rot(90).lD(0).lV(1)
	}
	SLOOM = function () {
		W([800, 500, 2400, 500], {g: 0}).Z(1.5)
				.Y(200, 200).showOff().bricks(
				[400, 300, 'r', 200, 100], [800, 300, 'z', 100, 100],
				[1200, 300, 'b', 300, 100], [1600, 300, 'z', 100, 100],
				[2000, 300, 'r', 200, 100]
		)
		y.damp(1, 10).track()
		_.in(4, function () {
			y.bS('me', .5)
		})
		_.t(5, function () {
			w.p(100, 100)
		})
	}
	KISS = function () {
		W([1200, 600, 2400, 600], {g: 10})
		w.D(800, 300).cir({
			r: 120,
			C: 'y', l: 2, bf: 'me', ls: ['y', 'x']//?
		}).den(.1)
		y = w.ship(50, 50).C('d').mid()
		y2 = w.ship(100, 300).C('x').rot(180)
		//i thought i may want t for timer/ticker.. but time has no x and y !
		//move the stage by manipulating the trackee x,y
		//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
		w.tRightLeft()
		w.showOff()
		I(function changeT() {
			if (w.t == y2) {
				w.C('w');
				w.t = y
			} else {
				w.C('z');
				w.t = y2
			}
		}, 5000)
		b = w.D(100, 300)
		pf = b.pol({s: 1, C: 'y', v: [[-200, -100], [0, -200], [100, -100]]})
		pfs = b.pol({s: 1, C: 'o', v: [[-100, 0], [0, -200], [100, 20], [0, -150]]})
		cf = b.cir({k: 'cir', r: 100, x: 200, y: -100, d: .2, b: .8, f: 100, C: 'x'})
		rf = b.rec({x: 100, y: 100, w: 10, h: 100, C: 'x'})
		w.D(200, 300).pol({
			v: [[0, 100], [0, -100], [200, -150], [200, 150]],
			c: 'y', C: 'w', l: 5,
			bm: 1
		})
		//FROM POL ->0, -100]] })
		w.D(800, 300).pol({
			v: [
				[[5, 100], [0, -100], [200, -150], [200, 150]],
				[[-50, 50], [-50, -100], [450, -50], [450, 50]]
			],
			c: 'b', C: 'X',
			bm: 1
		})
	}
}
function fxs() {
	CAVEMAZE = function () {
		W([1200, 600, 1500, 600], {g: 10}).Y()
		w.S(0, 0, 'z', [
			[500, 500, 600, 100],
			[500, 400, 500, 100],
			[500, 300, 500, 100],
			[500, 350, 450, 100],
			[320, 400, 50, 600]
		])
		y.track()
		w.y(100, 300).stat().rt(1, 10)
		maze = [
			[1, 0, 1, 1, 1, 1, 1, 1, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 1, 1, 1, 1, 1, 1, 0, 1],
			[1, 0, 0, 0, 1, 0, 0, 0, 1],
			[1, 0, 1, 0, 1, 0, 1, 1, 1],
			[1, 0, 1, 0, 1, 0, 0, 0, 1],
			[1, 0, 1, 1, 1, 1, 1, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 1, 1, 1, 1, 1, 1, 1, 1]
		]
		w.grid(maze, 900, 200, 20, 30)
	}
	BALLS = function () {
		W([1200, 600, 2400, 600], {g: 10}).y('+')
		_.t(10, function (i) {
			w.D(100 + i * 100, 100)
					.cir({
						r: 35,
						lf: {c1: '*', c2: '*'}
					}).d(.1)
			w.D(100 + i * 100, 100).cir({
				r: 20,
				lf: 1
			}).d(.1)
		})
		_.t10(function (i) {
			w.D(100 + i * 100, 100).cir({
				r: 20,
				lf: 1
			}).d(.1)
			w.S(100 + i * 140, 160).cir({
				r: 50,
				rf: {c1: '*', c2: '*'}
			}).d(.1)
		})
	}
	TURTS = function () {
		W([1200, 600, 2400, 600], {g: 10})
		turtle = [
			['g', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]],
			['y', [10, -10], [20, -30], [50, -15], [45, -5]],
			['y', [-50, 10], [-50, -10], [-40, -10], [-40, 10]],
			['y', [-10, 10], [-10, -10], [0, -10], [0, 10]],
			['x', 10, 55, -12],
			['u', 30, 40, 75, -12]
		]
		w.D(400, 280, turtle, '-')  //this changes the data object for future uses !!!
		w.D(600, 280, [
			['g', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]],
			['y', [10, -10], [20, -30], [50, -15], [45, -5]],
			['y', [-50, 10], [-50, -10], [-40, -10], [-40, 10]],
			['y', [-10, 10], [-10, -10], [0, -10], [0, 10]],
			['x', 10, 55, -12, '-'],
			['u', 30, 40, 75, -12, '-']
		])
		w.D(600, 280, [
			['g', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]],
			['y', [10, -10], [20, -30], [50, -15], [45, -5]],
			['y', [-50, 10], [-50, -10], [-40, -10], [-40, 10]],
			['y', [-10, 10], [-10, -10], [0, -10], [0, 10]],
			['x', 10, 55, -12, '-']
		])
		w.D(600, 280, [
			['x', 300, 20],
			['u', 30, 40, '-'],
			['p', 40, 10, 10]
		])
	}
}
function art() {
	function devArt() {
		DEV = function () {
			W([1200, 600, 1400, 800], {g: 50, t: 0}).stats()
			//  w.dr(100, 100, 100, 100, '-')
			//  w.dr(100, 200, 100, 100, '+')
			w.dl('r', 0, 100, 5000, 5000, '-')
			w.dl('p', 0, 200, 5000, 2000)
			w.dl('b', 0, 300, 5000, 3000, '+')
			wh = w.S(400, 350, 'w', [[300, 220, '-']])
			or = w.S(400, 200, 'o', 300, 50)
			pi = w.S(400, 500, 'x', 300, 50)
			y = w.ship(150, 200).damp(1, 10).rot(90).lD(0).rot(120).lV(1);
			w.track(y, 600, 300, '!')
			b = w.D(700, 200, 'b', 100)
			me = w.me()
		}
	}

	TFSET = TFS = function () {
		W()._(function () {
			me = w.i.qB('me')
			me.drag()
			me.grow()
			i = w.i.qB('me').XY(200, 200)
			ball = w.ball()
			_.in(3, function () {
				w.C('b');
				ball.bS(i)
			})
			//  me.startMoving(10, 10)
			T.t(function () {
				iS = i.inStage()
				$l(iS)
			})
			b = w.i.qB('me')
			b.setTransform(0, 0, 2, .5, 0, 40, 4, 2, 3)
			//m = b.getMatrix()
			function tf(a, b, c, d, e, f, g, h, i) {
				return this.x = a || 0,
						this.y = b || 0,
						this.scaleX = null == c ? 1 : c,
						this.scaleY = null == d ? 1 : d,
						this.rotation = e || 0,
						this.skewX = f || 0,
						this.skewY = g || 0,
						this.regX = h || 0,
						this.regY = i || 0,
						this
			}
		})
	}
	BMRECS = BMR = function () {
		W()
		w.i.h(200, 300).dg().bf('me', function (h) {
			h.rec({w: 500, h: 200})
		})
		w.i.h().dg().bf('me', function (h) {
			h.rec({w: 500, h: 200})
			w.D(600, 300, 'b', 500, 200).bS(h)
		})
	}
	BINDSP = BSP = function () {
		W()._(function () {
			x = w.D(600, 300, 'x', 200, 100)
			f = x.cir({r: 100, x: 300, c: 'r'})
			me = Q.b('me').rC()
			f.bS(me, 0, f.pX(), f.pY())
		})
	}
	BFCIR = CHICKBALLS = CHB = function () {
		W(1600, 1200)._(function () {
			_.t(14, function () {
				w.D(R(1100, 50), R(1100, 50))
						.cir({
							bf: 'chicks',
							r: R(180, 50)
						})
			})
			w.y()
			w.p()
		})
	}
	TEXTBALLS = TXB = function () {
		W([400, 400], {}).C('w')._(function () {
			b = w.D(200, 200, 'b', 80)
			b.gx = b.gx || w.g.ct()
			b.gx.qB('chicks').rC().sXY(.1).Y(30)
			nice = w.i.T(0, 140, 'nice', 100, 'o')
			b.bS(nice)
		})
	}
}
 function dev() {
	 THRUST = DATA = MINI = function () {
		 W({g: 10, W: 1000, H: 800})
		 d = $.div('y', 1500, 40).A().abs(200, 200).pad(2)
		 p = w.p(300, 200, 2, 'thrust')
		 data = function (str) {
			 if (U(str)) {
				 str = 'data'
			 }
			 d.E($.h4(str))
		 }
		 data()
	 }
 }
 function errTap() {
	 _v = function (fn) {
		 return S(fn) ? function () {
			 eval(fn)
		 } : fn
	 }
	 TAPSHOOT = TPS = function () {
		 W({g: 0}) // u cant shoot when ur dead!
		 p = w.p(800, 300).cn('thrust').aD('++')
		 w.tim(7)
		 w.b(function (cx) {
			 cx.w('bul', 'tim', function (tim) {
				 tim.B().kill()
			 })
			 cx.w('bul', p, function () {
				 this.B().kill()
			 })
			 cx.w('tim', p, function () {
				 p.kill()
			 })
		 })
		 $.click(function (e) {
			 var x = e.pageX - p.X(),
					 y = e.pageY - p.Y(),
					 rot = M.tD(M.atan(y / x)),
					 adj = x > 0 ? 90 : 270
			 p.rot(rot + adj).I(x / 20, y / 20)
			 w.bul(p.wP(0, -100), 10).bS({i: 'sun', sc: .1}).I(x, y)
		 })
		 //to do:  maybe u only get 10 buls ever.. so u must chase them :) (only way to kill badguys)
	 }
	 SEN = ARM = RIGHTWALL = GETSHAPE = GHH = function () {
		 W()
		 b33 = w.D(500, 300, 'r', [[40], ['b', 30, 100, 'arm', '-']])
		 w.b(function (cx) {
			 if (cx.w('arm')) {
				 b33.I(50, 50)
			 }
			 if (cx.w('arm', w.right)) {
				 w.C($r())
			 }
		 })
		 b3 = w.D(100, 100, 'b', [
			 [40],
			 [100, 200, 100],
			 [50, 200],
			 [200, 200, 300, 400]
		 ])
		 _.in(2, function () {
			 b3.fs(function (f) {
				 f.sen(1)
				 $l('shape type: ' + f.GetShape().m_type)
			 })
		 })
	 }
 }
 function dud() {
	 FRICKY = FRK = function () {
		 W()
		 w.fricky = function (x, y) {
			 var w = this,
					 b = w.D(x, y)
			 b.rec('r', 40, 20, 0, 0, 180).fr(1).r(0)
			 b.rec('b', 20, 40, 0, 0, 90).fr(1).r(0)
			 return b
		 }
		 w.fricky(400, 120)
	 }
 }

 