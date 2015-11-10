_v = function (str) {
	return function () {
		eval(str)
	}
}
$L(  'player', 'relPos', 'zilla', 'goomba', 'coinWarp', 'orbit')

b.horizCenter = function () {
	var b = this;
	b.X(b.W().hW);
	return b
}   //-> b.X('hC')//b.g=function(){ return this.f().g }
w.bricks = function () {
	var w = this, g = G(arguments)
	_.e(g, function (g) {
		w.S.apply(w, g)
	})
	return w
}
w.rR = w.randRects = function (ob) {
	var w = this, g = G(arguments),
			o = g.O ? g.f : {y: g.f, z: g.s}
	o.y = N(o.y, 0)
	o.z = N(o.z, 1)
	_.t(20,
			function (i) {
				w.S(R(1100, 20), R(150, 40 + o.y), $r(),
						R(40, 15) * o.z, R(40, 15) * o.z).K('randomRect rR')
			})
	return w
}
w.goal = function (x, y) {
	w.S(x - 20, y - 15, 'y', 10, 40)
	w.S(x, y, 'y', 40, 10)
	w.S(x + 20, y - 15, 'y', 10, 40)
}
  
function player(){
	w.tim = w.addTim = function (n) {
		$l('w.tim')
		var w = this
		if (U(n)) {
			return w.D(300, 300, 'w', 15).K('tim').bS('guy', .3)
		}
		_.t(n, function () {
			w.addTim()
		})
		return w
	}
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
	w.plat = function me(x, y, W, H) {
		var w = this, g = G(arguments)
		if (A(g[0])) {
			_.e(g, function (g) {
				me.apply(w, g)
			})
			return w
		}
		x = _.tN(x, 60)
		y = _.tN(y, x)
		W = _.tN(W, 30)
		H = _.tN(H, W)
		return w.S(x, y, 's', W, H)
				.r(0.3)
				.fr(2)
				.K('plat')
	}
	w.clod = w.clouds = function (lX, y) {
		var w = this
		lX = N(lX, 100)
		y = N(y, 75)
		_.t(100, function () {
			w.S(R(400) + lX, y, $r(), R(30))
		})
		return w
	}
	w.rub = w.rubber = function (x, y, len) {
		var w = this, rub
		len = N(len, 200)
		x += len / 2
		return w.S(x, y).rec({
			w: len, h: 20, c: 'r', s: 1
		}).fr(.3).r(.7)
	}
	w.grass = function (x, y, len) {
		var w = this
		len = N(len, 200)
		x += len / 2
		return w.S(x, y, 'g', len, 20).fr(.3).r(.3)
	}
	w.ice = function (x, y, len) {
		var w = this
		len = N(len, 200)
		x += len / 2
		return w.S(x, y, 'w', len, 20).fr(0).r(0)
	}
w.p = function (x, y, sc, cn) {
	var w = this, g = G(arguments),
			p
	sc = N(sc, 1)
	cn = cn || 'jump'
	p = w.D(x, y).fR()
	p.cn(cn)
	p.SetBullet(true)
	p.rec({c: 'r', l: 5, C: 'r', w: 22 * sc, h: 40 * sc}).d(5).C('z')
	
	p.rec({
		s: 1,
		w: 8 * sc, h: 8 * sc,
		x: 0,
		y: 20 * sc,
	}).K('foot feet').C('w')//C('X')
	
	p.rec({
		s: 1,
		
		w: 10 * sc, 
		h: 10 * sc,
		
		x: 0,
	
		y: -30 * sc,
	
	
	}).K('hat').C('g').mS()
	
	
	p.Bm('me', 0, 0, 0.25 * sc)
	// p.bS(   {i:'me', sc: .25*sc, x:-10,y:-110}  )
	if (g.p) {
		p.tr()
	}
	p.r(.4)
	p.lD(.5)
	return p
}

	f.mS=function(){
	var f=this
	
		f.SetSensor(true)
		return f
	}

b.inAir = function () {
	var b = this, onG = false
	this.cxs(function (cx) {
		if (cx.IsTouching()) {
			cx.w('feet',
					function () {
						if (this.of(b)) {
							onG = true
						}
					})
		}
	})
	return !onG
}
b2d.cn.j = b2d.cn.jump = function (p) {
	
	/* p.vX(
	 K.r?200 :
	 K.l?-200 :0)
	 if(K.u && p.onG){
	 p.vY(-1000)
	 }*/
	var m = p.mass()
	if (p.inAir()) {
		if ($.K.r) {
			p.I(m / 2, 0)
		}
		else if ($.K.l) {
			p.I(-m / 2, 0)
		}
		p.I(0, m * 3)
	}
	else {//on ground
		if ($.K.u) {//initiate a jump
			if ($.K.r) {
				p.lV(m, -m * 4)
			}
			else if ($.K.l) {
				p.lV(-m, -m * 4)
			}
			else {
				p.lV(0, -m * 8)
			}
		}
		else {//not jumping, may be running
			if ($.K.r) {
				p.lV(m * 2, 0)
			}
			else if ($.K.l) {
				p.lV(-m * 2, 0)
			}
			else {
				p.lV(0, 0)
			}
		}
	}
	if ($.K.d) {
		p.I(0, m * 3)
	}
}
w.P = function (x, y, sc) {
	var w = this,
			g = G(arguments)
	p = w.p(N(g.f, w.hW), N(g.s, w.H - 50), N(sc, 2))
	if (g.p) {
		p.tr()
	}
	return w
}
	STOOGES = MARIOS = MARS = function () {
		W().P().P().P()
	}
	STREET = HIDESEEK = HEEK = function () {
		W([1200, 600, 1400, 1200], {g: 300, t: 0})
		w.S(700, 1000, 'r', 800, 20)
		w.S(500, 800, 'g', 200, 20)
		w.S(900, 600, 'x', 200, 20)
		p = w.p(700, 600)
		w.fg.A(p.sp())
		w.track(p, 600, 400,
				{x: 700, y: 1000, w: 700, h: 600, mX: 1.5})
	}
}

function relPos(){
	w.ramps = function () {
		var w = this
		w.ramp(
				[400, 350, 200, 300, 100],
				[500, 350, 300, 300, 60],
				[600, 350, 200, 300, 100],
				[700, 350, 300, 300, 60],
				[800, 350, 200, 300, 100],
				[1000, 350, 300, 300, 60],
				[1030, 350, 200, 300, 100],
				[1200, 350, 300, 300, 60])
		return w
	}
	w.ramp = function me(x, y, W, H, a) {
		var w = this, g = G(arguments)
		if (A(g[0])) {
			_.e(g, function (g) {
				me.apply(w, g)
			})
			return w
		}
		o = O(g[0]) ? g[0] : {x: g[0], y: g[1], w: g[2], h: g[3], a: g[4]}
		o.x = N(o.x, 300)
		o.y = N(o.y, 300)
		o.w = N(o.w, 100)
		o.h = N(o.h, 100)
		o.a = N(o.h, 10)
		
		o.c = o.c || 'y'
		
		return w.S(o.x, o.y, o.c, o.w, o.h).rt(a).DFB(1, 0, 0)
	}

	b.relPos = function () {
	return this.X() + this.S().X()
}
	AUTOGAME = RELPOS = function () {
	W({w: 0, t: 0}).P()
	setup = function () {
		score = 0
		p.XY(350, 100)
		p.lV(0, 0)
		p.cn('j')
		p.d(.1).r(1).fr(0)
		w.s.XY(0, 0)
	}
	setup()
	T.t(function () {
		w.s.X(4, '-');
		if (p.relPos() < -100) {
			setup()
		}
	})//.pen(score++)
	w.ramps()
}
}


function zilla(){

w.fireBall = function (x, y, vX, vY) {
	var v = 8
	if (vX == 'l') {
		vX = v;
		vY = 0
	}
	if (vX == 'r') {
		vX = -v;
		vY = 0
	}
	if (vX == 'u') {
		vX = 0;
		vY = -v
	}
	if (vX == 'd') {
		vX = 0;
		vY = v
	}
	if (vX == 'ul') {
		vX = v;
		vY = -v
	}
	if (vX == 'ur') {
		vX = -v;
		vY = -v
	}
	if (vX == 'dl') {
		vX = v;
		vY = v
	}
	if (vX == 'dr') {
		vX = -v;
		vY = v
	}
	vX = N(vX) ? vX : 0
	vY = N(vY) ? vY : 0
	return this.D(x, y, 'r', 18)//.bS('sun',.2)
			.lV(vX, vY)
}
w.zilla = function (x, y) {
	var w = this
	var z = w.S(x, y, 80, 140)  //make sensor?
			.fR()
			.bS('guy', [.8, 1])
			.moveInCircle('-')
			.cl('bul',
			function (bul) {
				bul.B().kill()
				z.hits++
			})
	z.hits = 0
	z.fireBalls = function () {
		var x = this.X(),
				y = this.Y()
		w.fireBall(x + 50, y - 80, 'ul')
		w.fireBall(x + 50, y + 80, 'dl')
		w.fireBall(x - 50, y - 80, 'ur')
		w.fireBall(x - 50, y + 80, 'dr')
		w.fireBall(x, y - 80, 'u')
		w.fireBall(x, y + 80, 'd')
		w.fireBall(x - 50, y, 'r')
		w.fireBall(x + 50, y, 'l')
	}
	z.fireBallsAtInt = function (ms) {
		var z = this
		setInterval(function () {
			z.fireBalls()
		}, ms)
		return this
	}
	return z
}
	b.moveInCircle = function (rad, speed) {
		$l('b.moveInCircle')
		var g = G(arguments), rad = N(g[0]) ? g[0] : 100,
				speed = N(g[1]) ? g[1] : 2,
				toRad = Math.toRadians, cos = Math.cos, sin = Math.sin,
				b = this,
				ang = 0,
				x = b.X(),
				y = b.Y(),
				bX,
				bY
		T.t(function () {
			ang += toRad(speed)
			bX = rad * cos(ang)
			bY = rad * sin(ang)
			if (g.p) {
				bY *= 2
			}
			if (g.n) {
				bX *= 2
			}
			b.XY(bX + x, bY + y)
		})
		return this
	}
	ZIL = function () {
		W({g: 0, w: 0})
		health = 100
		y = w.ship().warp().cl(function () {
			health -= 5
		})
		z = w.zilla(600, 300).fireBallsAtInt(4000)
		w.show(function () {
			return 'health: ' + health + ', hits: ' + z.hits
		})
	}
}
function goomba(){
w.goomba = function (x, y) {
	x = _.tN(x, 300)
	y = _.tN(y, 100)
	return w.D(x, y, 'w', 30, 30).bS('guy').K('goomba')
}
w.bobom = function (x, y) {
	var w = this,
			bobom = w.D(x, y, 'd', [
				[40, 'body'],
				[40, 5, 30, 0, 'bobomSens', '-']])
	w.b(function (cx) {
		cx.w('bobomSens', function () {
			this.B().kill()
		})
	})
	body = bobom.rec(20, 20).d(1).r(1)
	sen = bobom.rec({s: 1})
	sen.cl('player', function () {
		w.B().kill()
	})
	return bobom
}
	GOOMBA = function () {
		W()
// could i automatically have body listen to their sens?
		w.ball().r(.3)
		workingGoomba = p = w.p(900, 450).cn('jump')
		p.my('hat', function () {
			p.bS('guy')
		})
		p.my('right');
		p.my('left')
		$.space(function () {
			if (p.my.right) {
				p.I(100, -400)
			}
			if (p.my.left) {
				p.I(-100, -400)
			}
		})
	}
}
function coinWarp(){
	w.coin = function (x, y) {
		var w = this, c
		x = _.tN(x, R(600))
		y = _.tN(y, R(300))
		c = w.D(x, y, 'y', 20).K('coin').bo(0).den(0).lD(0)
		c.I(R(15, -5), R(15, -5))
		c.warp()
		return c
	}
	b.warp = function (p) {
		$l('b.warp')
		var b = this, w = b.W()
		cjs.t(function () {
			if (b.Y() < 0) {
				b.Y(w.H)
			}
			if (b.Y() > w.W) {
				b.Y(0)
			}
			if (b.X() < 0) {
				b.X(w.W)
			}
			if (b.X() > w.W) {
				b.X(0)
			}
		})
		return b
	}
w.gG = function (x, y) {
	var w = this,
			gG, core, shell, z
	z = 40
	gG = w.D(N(x, w.hW), N(y, w.hH)).K('gG')
	core = gG.cir({c: 'o', C: 'z', l: 10, r: 20}).K('core')
	shell = gG.rec({c: 'g', C: 'g', l: 5, w: z, h: z, s: 1, al: .5})
	core.cl('bul', function (bulF) {
		gG.lV(0).aV(0);
		z = 40;
	})
	_.ev(2, function () {
		z += 4
		if (shell) {
			shell.kill()
		}
		shell = gG.rec({c: 'g', C: 'g', l: 5, w: z, h: z, s: 1, al: .5})
		//shell=gG.rec('g',z,z,'-')//.bS( shell.img=w.s.rec('g',z,z) )
		//w.back(sh)
	})
	return gG
}
w.badGuy = function (x, y) {
	var that = this, w = this
	b = w.D(x, y, 'd', 60).K('badGuy').bS(
			w.s.h(x, y)
	)
	b.draw = function (frame) {
		var b = this
		b.sp().rf(['r', 'g'],
				[frame[0], frame[1]], 60).dc(60)
	}
	b.h = b.health = 100
	b.cl(function () {
		b.h--
	})
	funcId = I(function () {
		b.draw(frameByHealth(b))
		if (b.h <= 0) {
			clearInterval(funcId);
			b.kill()
		}
		function frameByHealth(b) {
			if (b.h < 0) {
				b.h = 0
			}
			if (b.h > 100) {
				b.h = 100
			}
			if (b.h < 50) {
				return [1 - ((b.h / 50)), 1]
			}
			else {
				return [0, 1 - ((b.h - 50) / 50)]
			}
		}
	}, 300)
	return b
}
	GG = function () {
		W({g: 0}).Y()
		w.gG(100, 100);
		w.gG(200, 200);
		w.gG(300, 300)
	}
	GREEN = function () {
		W({w: '@', g: 0})
		y = w.y(400, 200).K('pop')
		w.gG(400, 400)
	}
	COINWARP = function () {
		W({g: 0, w: 0}).Y()
		y.warp()
		score = 0
		badScore = 0
		// p = w.ship().K('player pop').warp()
		//p= w.p(100,100, 'thrust').Y(200).horizCenter().aD( 10000 ).lD(0).K('pop').warp()
		gg = w.gG(300, 300).warp()
		_.ev(8, function () {
			w.coin().sen(1)
		})
		/*
		 w.beg(function(cx){var fixt
		 cx.with('coin','player', function(){this.B().kill()
		 score++})
		 cx.with('coin','greenGuy', function(){
		 this.B().kill()
		 badScore++
		 })
		 })
		 */
		// w.coll('coin','player', function(){this.B().kill(); score++})
		// w.coll('coin','gg', function(){this.B().kill();badScore++})
		/*
		 // w.class('coin')
		 //   .with('player', function(c){c.setDestroy();score++})
		 // .with('greenGuy', function(c){c.setDestroy();badScore++})
		 w.class('coin').with({
		 player: function(){score++; return true},
		 greenGuy: function(){badScore++; return true}
		 })
		
		 */
		_.ev(3, function () {
			w.pen(score + ' / ' + badScore)
		})
	}
}
function orbit(){ 
}

TALK = function () {
	W({g: 0, w: 0})
	score = 0
	shots = 0
	p = w.me(500, 300).stat()
	_.t(100, function () {
		w.D(R(2200, -1000), R(1600, -1000), $r(), R(14, 8)).lD(2)
	})
	/*
	 $.space(function(){//can double on on shots!!!
	 setInterval(function(){
	 p.shoot(); shots++ }, 200)
	 })  //setTimeout(function(){$.pop(score).click(function(){window.location=window.location})}, 10000)
	 */
	w.cl('ball', 'bullet', function () {
		// score++;  cx.destroy()
	})
	cjs.t(function () {
		p.XY(500, 300)
		if ($.K.left) {
			p.rot(8, '-')
		}
		if ($.K.right) {
			p.rot(8, '+')
		}
		if ($.K.up) {
			w.e(function (b) {
				if (
						!b.of('bul') && !b.of('player')
				) {
					b.I(p.vec(0, -100).div(-50))
				}
			})
		}
	})
}
CLOOT = CLICKSHOOT = function () {
	W({g: 0})
	p = w.me(800, 300).aD(10000)
	w.tim(7)
	w.b(function (cx) {
		cx.w('bul', 'tim', function (t) {
			t.B().kill()
		})
		cx.w('bul', p, function () {
			this.B().kill()
		})
		cx.w('tim', p, function () {
			p.kill()
		})
	})
	$.click(function (e) {
		var x = e.pageX - p.X(), y = e.pageY - p.Y(),
				rot = M.tD(M.atan(y / x)),
				adj = x > 0 ? 90 : 270
		p.rot(rot + adj).I(x / 20, y / 20)
		w.bul(p.wP(0, -100), 10).I(x, y) //.bS({i:'sun', sc:.1})
	})
//to do:  maybe u only get 10 buls ever.. so u must chase them :) (only way to kill badguys)
}
SPAZE = SPACEMAZE = function () {
	w.grid = function (grid, x, y, len, spacing) {
		var w = this, b
		var gridDrawer = function (x, y, len, spacing) {
					b = w.D(x, y)
					len = N(len, 30);
					spacing = N(spacing, 20)
					return function (x, y) {
						b.rec(len, len, x * spacing, y * spacing).C('r').d(1).fr(0.5).r(.2)
						return b
					}
				},
				drawWall = gridDrawer(x, y, len, spacing)
		_.t(grid.length, function (row) {
			_.t(grid[0].length, function (c) {
				if (grid[c][row]) {
					drawWall(row, c)
				}
			})
		})
		return b.K('grid')
	}
	_grid = [
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
	W({
		g: 0
	})
	w.roof.kill()
	_.t(30, function () {
		w.D(R(1000, -500), R(800, -400), 'w', 2).d(0).r(2)
	})
	grid = w.grid(_grid, 100, -100, 14, 40)
	grid.aD(1)
	//p = w.p(220, 70, 1.5).aD(100).track()//.follow(300, 150)
	//p.cn('thrust')
//    p.fR(false)
	p = w.y()
	score = 100
	T.t(function () {
		grid.aV(.2)
		// w.i.pen(score)
	})
	w.b(function (cx) {
		if (cx.w('player', 'grid')) {
			score--
		}
	})
}
DEMO = function () {
	W()
//make a dot in the world's center:
	w.cen('+')
}
GRAPHICS = PARTY = function () {
	W([1200, 600, 1800, 600], {g: 10})
	w.l(600, 0, 700, 500)//hud
	w.l(1000, 200, 100, 900, '-') //red
	w.l(50, 50, 500, 350, '/')
	w.l(200, 200, 500, 500, '+')
	_.t(10, function (i) {
		w.D(100 + i * 40, 100).cir({r: 35, lf: {c1: '*', c2: '*'}}).d(.1);
		w.D(100 + i * 40, 100).cir({r: 20, lf: 1}).d(.1)
	})
	_.t(10, function (i) {
		w.D(100 + i * 140, 160).cir({
			r: 50,
			rf: {
				c1: $r(),
				c2: $r(),
			}
		}).den(.1)
	})
	w.D(800, 300).cir({
		r: 120,
		C: 'y', l: 2, bf: 'me', ls: ['y', 'x']//?
	}).den(.1)
	w.y(100, 300).tr()
	w.tRightLeft();
}

old=function(){
	refMakeWorldScrollCode = function () {
	 
		w.t = w._t = w._t || w.S(w.hW, w.hH, 'w', [[20, 2, '-']]).r(.8) //trackee
		w.i.A(w.tSpr = $Ct().XY(w.t.X(), w.t.Y())) //  w.tSpr.bm('guy', function(g){  g.sXY(.2)}) // w.tSpr.A(g)
		T.t(function () {
			if (F(w.t.cb)) {
				w.t.cb()
			} else if (F(w.tCb)) {
				w.tCb()
			} // actually calls the callbacks
			// i see w.sXCap and w.sYCap.. i think they limit the scroll distances
			//distances are simply calculated and assigned right to **** w.s *****
			//so it moves the actual stage... (dont worry, not the canvas)
			w.s.x = -w.sXCap((w.t.X() - w.hW + w.hW) * w.z - w.hW)
			w.s.y = -w.sYCap((w.t.Y() - w.hH + w.hH) * w.z - w.hH)
			if (w.t == w._t) {// if the trackee is the generic one that world provided...
				//have it bind to 'tSpr'.. some dumb tim graphic.. i think i can lose this part real soon
				w.t.XY(
						w.tSpr.X(),
						w.tSpr.Y()
				)
				w.s.rot(w.tSpr.rot())
			}
		})
	}
}