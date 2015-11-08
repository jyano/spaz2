w.D = function () {
	var w = this, g = G(arguments, 'k'), o, b
	
	if (g.u) {  return w.D(  w.hW, w.hH) }
	
	//	o = //g.O ? g.f :
	
	o = g.O_ ? {p: g.f, f: g.r} :
	
	{p: [g.f, g.s], f: _.r(g, 2)}
	b = w.CB($bD( o.p ))
	b.K(g.k)
	$a(b, 'f', g.G(o.f))
	return b
}
 
 
 

w.D_ = w._D = function (o) {
	alert('w._D??? nah, w.D_')
	return this.D(o.x, o.y, o.c, o.w, o.h)
}
w.cen = w.cent = function () {
	var w = this, g = G(arguments),
			v = V(w.s.W() / 2, w.s.H() / 2)
	if (g.p) {
		w.dot(v)
	}
	return v
}
w.UI = function () {
	//alert('w.UI');
	return $(this.i.canvas)
}
w.$h = function () {
	$l('w.$h')
	return this.i.h.apply(this.i, arguments)
} // h = $h().a2(s).rXY(100, 300).XY(100,300).drag()
//  h.rec( 'r','b',600, 200,  600, 200)
// h.rec( 'g',100, 100,  100, 20)
w.C = function (c) {
	var w = this
	w.bg.h().c(c || $r()).dr(0, 0, w.w, w.h)
	return w
}
w.cir = w.ball = w.ba = w.circ = function (x, y, r, c) {
	 
	var w = this, g = G(arguments), b, o
	o = g.O ? g.f : N(g.s) ? {
		x: g.f, y: g.s,
		r: g.t,
		c: g[3]
	} : {r: g.f}
	o.x = N(o.x, w.hW)
	o.y = N(o.y, w.hH)
	o.r = N(o.r, 50)
	o.c = o.c || $r()
	b = w.D(o.x, o.y, o.c, o.r)
			.d(.5).fr(0).r(.5)
			.K('ball cir')
	if (g.n) {
		b.sen(true)
	}
	return b
}
w.bump = w.baa = function () {
	var w = this, g = G(arguments), b, o
	o = O(g[0]) ? g[0] : N(g[1]) ? {
		x: g[0],
		y: g[1],
		r: g[2]
	} : {r: g[0]}
	o.x = _.tN(o.x, w.hW)
	o.y = _.tN(o.y, w.hH)
	o.r = _.tN(o.r, 40)
	o.c = o.c || $r()
	b = w.S(o.x, o.y, o.c, o.r).K('bump').DFB(0.5, 0, 0.5)
	if (g.n) {
		b.sen(true)
	}
	return b
}
w.d = w.dot = function () {
	var w = this, g = G(arguments), o
	if (g.S_) {
		o = N(g.s) ?
		{c: g.f, x: g.s, y: g[2]} :
		{c: g.f, x: V(g.s).x, y: V(g[1]).y}
	}
	else {
		o = N(g.s) ?
		{x: g.f, y: g.s} :
		{x: V(g.f).x, y: V(g.f).y}
	}
	if (g.m) {
		w.dot(o.c, o.x, o.y, '-')
		w.dot(o.c, o.x, o.y, '/')
		w.dot(o.c, o.x, o.y, '+')
		w.dot(o.c, o.x, o.y)
	}
	else if (g.p) {
		w.fg.dot(o.c, o.x, o.y)
	}
	else if (g.n) {
		w.bg.dot(o.c, o.x, o.y)
	}
	else if (g.d) {
		w.g.dot(o.c, o.x, o.y)
	}
	else {
		w.i.dot(o)
	}
	return w
}
w.brick = w.bii = function (x, y, W, H) {
	var w = this, g = G(arguments), b, o
	o = O(g[0]) ? g[0] : N(g[1]) ? {
		x: g[0],
		y: g[1],
		w: g[2],
		h: g[3]
	} : {w: g[0]}
	o.x = _.tN(o.x, w.hW)
	o.y = _.tN(o.y, w.hH)
	o.w = _.tN(o.w, 40)
	o.h = _.tN(o.h, o.w)
	o.c = o.c || $r()
	b = w.S(o.x, o.y, o.c, o.w, o.h).K('brick').DFB(0.5, 0.5, 0)
	if (g.n) {
		b.sen(true)
	}
	return b
}
w.bfR = function () {
	var w = this, g = G(arguments), b, h, o
	o = _.x({x: g.f, y: g.s},
			S(g.t) ? {i: g.t, w: g[3], h: g[4], c: g[5]} :
			{w: g.t, h: g[3], c: g[4]})
	o.i = o.i || 'sun'
	o.c = o.c || 'y' // can be removed
	b = w._D(o)
	h = w.g.h().al(.5)
	if (o.c) {
		h.c(o.c)
	}
	h.bf(o.i)
	h.rec(o.w, o.h)
	b.bS(h)
	return b
}
w._preKill = function (b) {
	//$l('w._preKill')
	if (b.sprite) {
		b.sprite.rm()
	}
	b.sprite = null
	if (b.sp()) {
		b.sp().rm()
	}
	b.fs(function (f) {
		f.rmSp()
	})
}
w._fPreKill = function (f) {
	//$l('w._fPreKill')
	f.rmSp()
}
w.killD = w.xD = function () {
	w.e(function (b) {
		if (b.iD()) {
			b.kill()
		}
	})
}
w._ = function (fn) {
	Q(function () {
		fn(w)
	})
}

f.S = f.stg = function () {
	return this.W().s
}

Pol = function(vs){
	this.v = this.vs = vs
}



f.pol = f.polDat= function (o) {
	
	var f=this
	 
	var vs= f.vs()
	var pol = {v: vs, vs:vs}
	return   O(o)? _.x(o,pol) : pol
}



f.cir = f.cirDat= function (o) {
	var f = this
	var cir = {x: f.pX(), y: f.pY(), r: f.rad()}
	return O(o)? _.x(o, cir) : cir
}


f.hDat=function(o){
	
	//not a circle? .. then most be a poly of some kind
	// *** note: even if u set a fixture with SAB or SAOB..
	// it still only knows it ( i think ) by its points
	// SAB is just a helper abstaction for getting the points in
	// because u commonly want to make a rectangle
	// .. but when u want to GET the shape..
	// get it by its points.. (its not conceptualized as rec anymore)
	var f=this
	return f.iC() ? f.cir(o): f.pol(o)
}

f.c = f.C = function () {var f = this, b = f.B(), w = b.W(), g = G(arguments), o
	o = g.O ? g.f :
	{c: g.f, C: g.s, l: g.t}
	var easelMet = f.iC() ? 'cir' : 'pol'
	
	o.c = (o.c == '*') ? $r() : (o.c || 'b');
	o.C = o.C || o.c
	f.B()._i = f.B().i = w.st[ easelMet ]( f.hDat(o)  )
	 //*** look.. we just put the easel shape display object on the fixture's body
	 // we called it i.. just i 
	// but i prefer _i
	
	f.rpSp( f.B()._i )
	
	// .. then we made it the main FIXTURE sprite,
	// which gets bound to the actual fixture,
			// but is clearly ALSO... referenced on the body
			// so that is just temp on the body because it will get constantly overwrittern!!
			//so can be used short term.. but why not an array???
			// wel they are already probably an array of the fixture?? body can iterate fixtures// better that way becasue then they can be more easily associated with their assoc fixtures
			
	return f

}







f.dot = function (c) {
	var f = this, w = f.B().W(), v
	v = f.cen()
	if (S(c)) {
		w.dot(c, v)
	}
	else {
		w.dot(v)
	}
	return f
}


f.set = function (o) {
	if (!O(o)) {
		return false
	}
	var f = this
	if (D(o.d)) {
		f.d(o.d)
	}
	if (D(o.bo)) {
		f.bo(o.b)
	} else if (D(o.r)) {
		f.r(o.b)
	}
	if (D(o.fr)) {
		f.fr(o.f)
	}
	if (o.s) {
		f.sen(1)
	}
	if (D(o.k)) {
		f.K(o.k)
	}
	return f
}
FXC = function () {
	W().C('z')
	b = w.D()
	f = b.cir({c: 'o'})
	b1 = w.D(300, 400)
	f1 = b1.pol(v1)[0]
	_.in(function () {
		f.C($r())
		f1.C($r())
	})
} 
w.sH = function (h) {
	var w = this
	if (U(h)) {
		return w.H * w.s.scaleY
	}
	w.s.scaleY = h / w.H
	return w
}
w.sTW = w.sToW = function (x, y) {
	var w = this, //works
			x = x / w.z - w.s.x / w.z,
			y = y / w.z - w.s.y / w.z
	//w.dot(x,y,'*') // cool
	return {x: x, y: y}
}
w.wTS = w.wToS = function (x, y) {
	var w = this,
			x = (x + w.s.x / w.z) * w.z,
			y = (y + w.s.y / w.z) * w.z
	return {x: x, y: y}
}
w.lG = function (c, c2) {
	var w = this, o
	o = {c1: c2 || 'z', c2: c || 'r', x1: 0, y1: 0, x2: 0, y2: 0}
	_.x(o, R() ? (R() ? {y2: w.h} : {x2: w.w}) :
			R() ? (R() ? {x1: w.w, y1: w.h} : {x2: w.w, y2: w.h}) :
					R() ? {x1: w.w, y2: w.h} : {y1: w.h, x1: w.w})
	w.bg.h().lf(o).dr(0, 0, w.w, w.h)
	w.bg.h(0, 0, $r()).dr(0, 0, w.w, w.h).al(.2)
	return w
}
w.warp = function () {
	var w = this
	w.eEv(function (b) {
		if (b.X() < 10) {
			b.X(w.W - 10)
		}
		if (b.X() > w.W - 10) {
			b.X(10)
		}
		if (b.Y() < 10) {
			b.Y(w.H - 10)
		}
		if (b.Y() > w.H - 10) {
			b.Y(10)
		}
	})
	return w
}
w.tE = function (fn) {
	var w = this
	T.t(function () {
		w.e(fn)
	})
	return this
} // TICKER !!!!!
w.bmR = w.bR = w.bfR = function () {
	var w = this, g = G(arguments), b, h, o
	o = S(g.t) ? {x: g.f, y: g.s, i: g.t, w: g[3], h: g[4], c: g[5]} :
	{x: g.f, y: g.s, w: g.t, h: g[3], c: g[4]}
	o.i = o.i || 'sun'
	o.c = o.c || 'y' // can be removed
	b = w.D(o.x, o.y, o.c, o.w, o.h)
	h = w.g.h().al(.5)
	if (o.c) {
		h.c(o.c)
	}
	h.bf(o.i)
	h.rec(o.w, o.h)
	b.bS(h)
	return b
}
w.xW = function () {//used in MIRROR
	this.e('wall', function (b) {
		b.kill()
	})
	return this
}
 

w.polyCirc = function (x, y, r, sides) {
	var w = this,
			b = w.D(x, y)
	b.pol({v: b2d.polyCirc(r, sides)})
	return b
}
//wall
w.isWall = function (b) {
	var w = this;
	return b == w.right || b == w.left || b == w.roof || b == w.floor
}
w.clr = function () {
	var w = this
	w.e(function (b) {
		if (!w.isWall(b)) {
			b.kill()
		}
	})
	return w
} //=w.wXx
w._walls = function (o) {
	var w = this
	if (o.w == '*') {
		sides();
		verSides()
	}
	if (o.w == '@') {
		w.warp();
		return w
	}
	if (o.w == '_') {
		bot()
	}
	if (o.w == '~') {
		top()
	}
	if (o.w == '[') {
		left()
	}
	if (o.w == ']') {
		right()
	}
	if (o.w == 'U') {
		sides();
		bot()
	}
	if (o.w == 'A') {
		sides();
		top()
	}
	if (o.w == 'C') {
		verSides();
		left()
	}
	if (o.w == 'L') {
		left();
		bot()
	}
	if (o.w == '=') {
		verSides()
	}
	if (o.w == '|') {
		sides()
	}
	if (o.w == '->') {
		verSides();
		left();
		right1()
	}
	if (o.w == '<-') {
		verSides();
		left1();
		right()
	}
	if (o.w == '<->') {
		verSides();
		left1();
		right1()
	}
	if (o.w == 'r2') {
		verSides();
		left();
		right2()
	}
	if (o.w == 'l2') {
		verSides();
		left2();
		right()
	}
	function sides() {
		right();
		left()
	}
	
	function verSides() {
		top();
		bot()
	}
	
	function left() {
		w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h).K('wall side left');
		w.l_.SetBullet(true)
	}
	
	function right() {
		w.r_ = w.right = w.S(w.w, w.h / 2, o.c, o.l * 2, w.h).K('wall side right');
		w.r_.SetBullet(true)
	}
	
	function right2() {
		w.r_ = w.right = w.S(w.w, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')
	}
	
	function right1() {
		w.r1_ = w.right1 = w.S(w.w, 100, o.c, o.l * 2, 200);
		w.r2_ = w.right2 = w.S(w.w, w.h - 100, 'o', o.l * 2, 200).K('wall side right')
	}
	
	function left2() {
		w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')
	}
	
	function left1() {
		w.l1_ = w.left1 = w.S(0, 100, o.c, o.l * 2, 200);
		w.l2_ = w.left2 = w.S(0, w.h - 100, 'o', o.l * 2, 200).K('wall side right')
	}
	
	function top() {
		w.t_ = w.roof = w.S(w.w / 2, 0, 'o', w.w, o.l * 2).K('wall roof');
		w.t_.SetBullet(true)
	}
	
	function bot() {
		w.b_ = w.floor = w.S(w.w / 2, w.h, o.c, w.w, o.l * 2).K('wall floor');
		w.b_.SetBullet(true)
	}
}
w.walls = function () {
	var w = this, g = G(arguments), o
	if (g.f === 0) {
		return
	}
	w._walls(wallOp(g))
	function wallOp(g) {
		var o = g.A ? {w: g.f[0], c: g.f[1]} : {w: g.f, c: g.s}
		o.c = o.c || 'o';
		o.w = o.w || '*';
		o.l = 40
		return o
	}
}
//anim
w.ps = tw.pos
w.iGP = tw.ignore
w.th = w.thrust = function (c, x, y, r) {
	return this.D(N(x, 600), N(y, 500), c || 'b', N(r, 40)).cn('thrust')
}

w.dance = function () {
	var w = this
	w.e(function (b) {
		if (b.iD()) {
			b.thr()
		}
	})//w.eD
	return w
}
w.boxes = function () {
	var w = this, g = G(arguments)
	_.e(g, function (g) {
		w.box.apply(w, g)
	})
	return w
}
w.brcks = w.boxesStat = function () {
	var w = this, g = G(arguments)
	_.e(g, function (g) {
		w.brick.apply(w, g)
	})
	return w
}
w.ten = w.addTenBalls = function (n) {
	var w = this
	_.t(n || 10, function (i) {
		w.ball(100 + (i * 80), 200)
	})
	return w
}
w.hun = w.addHundBalls = function (n) {
	var w = this
	_.t(n || 100, function (i) {
		w.ball(100 + (i * 8), 50, 10)
	})
	return w
}
$W = function () {
	W()
	w.y()
	w.p()
}
f.bSQ = function (j) {
	var f = this
	Q(function () {
		
		//f.ctSp( Q.b(j) )
	})
	return f
}
PROTONIGHT = function () {
	w = W([1200, 600, 1200, 600])
	w.dB(900, 300).stat().rec(120, 40) // top
	w.dB(700, 360).stat().rec(120, 40)
	w.dB(620, 400).stat().rec(320, 40)
	w.dB(500, 420).stat().rec(320, 40)
	w.dB(250, 500).stat().rec(60, 40)
	w.dB(300, 540).stat().rec(320, 40)//bottom
	_.t(10, function () {
		p = w.p().XY(R(300), R(300)).K('guy')
	})
	y = w.y(400, 200, 2).track()
	y.cl(function (fx) {
		$l('collided')
		var bod = fx.B()
		if (bod.K() == 'guy') {
			bod.kill()
		}
	})
	w.showOff()
}



 