w.spinner = function (x, y, s, t) {
	var g = G(arguments)
	x = N(g[0], 500)
	y = N(g[1], 200)
	s = N(g[2], 10)
	t = N(g[3], 100)
	if (g.n) {
		s *= -1
	}
	w.rJ(
			dial = w.D(x, y, 'r', 200, 40), rock = w.S(x, y, 'b', 10, 10)
	).mt(s, t)
	//<- rJt({  i:[rock, dial, dial.c()],  eM:1,  mS:-10,  mMT:100  })
}
w.perch = function (c) {
	var w = this //specific structure, birdage in sky
	c = c || 't'
	w.S(200, 50, c, 300, 20) //top
	w.S(200, 360, c, 300, 20) //bottom
	w.S(60, 240, c, 20, 260) //left
	w.S(340, 320, c, 20, 100)//right
	return w
}
w.seesaw = function (x, y) {
	var w = this,
			anc = w.S(x, y, 'h', 60, 60),
			lev = w.D(x, y, 'g', 300, 20)
	w.rJ(anc, lev).lm(-30, 30)
}
w.car = function (x, y, sp1, sp2) {
	var w = this, b
	s = w.D(x, y, 'b', 90, 30)//.bS('me')
	sp1 = sp1 || 2;
	sp2 = sp2 || sp1
	w.rJ(w.D(x - 40, y + 50, 'o', 30), s).mt(sp1)
	b = w.D(x + 60, y + 50)
	b.cir({c: 'x', r: 30, rf: 1})
	w.rJ(b, s).mt(sp2)
	return s
}
w.car1 = function () {
	var w = this, s = sus(150, 150)
	wh(w.D(200, 150, 'r', 30), 120)
	wh(w.D(100, 150, 'b', 30), 150)
	return s
}
w.roller = function () {
	var w = this, s = sus(250, 150)
	a = w.D(300, 150, 'r', 30)
	wh(a, 6)
	// wh(w.D(200, 150, 'r', 30), -500)
	return s
}
w.makeCar = function () {
	var w = this, s = sus(240, 350)
	wh(w.D(300, 400, 'r', 30), 4)
	wh(w.D(200, 400, 'y', 30), 4)
	return s
}
w.makeWheel = w.wh = function () {
	var w = this, g = G(arguments), wh, o
	o = O(g[0]) ? g[0]
			: {x: g[0], y: g[1], r: g[2], n: g[3]}
	o.r = N(o.r, 40)
	o.c = o.c || 'x'
	wh = w.D(o.x, o.y)
	wh.cir({c: o.c, r: o.r, C: 'w', l: 10, lf: 1})
	return wh
}
w.pWheel = w.pWh = function () {
	var w = this, g = G(arguments), wh, o
	o = O(g[0]) ? g[0]
			: {x: g[0], y: g[1], r: g[2], n: g[3]}
	o.r = N(o.r, 40)
	o.n = N(o.n, 15)
	o.c = o.c || 'x'
	wh = b2d.pC(o.r, o.n)
	return w.D(o.x, o.y, o.c, [wh])
}
b.wheel = function () {
	var b = this, w = b.W(), g = G(arguments), o,
			j, wh
	o = O(g[0]) ? g[0]
			: {x: g[0], y: g[1]}//,r:g[2],n:g[3]}
	wh = w.wheel(600, 300)
	j = w.rJ(wh, b, 0, 0, o.x, o.y)
	return j
}
j.motorTorque = j.M = function (t) {
	this.SetMaxMotorTorque(t)
	return this
}
wh = function (wh, sp) {
	var j = w.rev(wh.fr(0).d(1), s)
	if (N(j)) {
		j.mt(sp)
	}
	return j
}
w.sus = function (x, y) {
	return this.D(x, y, 'b', 90, 30)
}
MOTORS = function () {
	W().P().P().P().Y()
	w.rJ(
			w.D(800, 300, 'r', 20, 300),
			w.D(800, 300, [['b', 100], ['y', 50, 10, 100, 0]])
	).mt(10)
	dir = 10
	car = w.S(300, 300, 'r', 200, 20)
	b = w.D(250, 300, 'b', 40).d(5).bS('me')
	j = w.rJ(b, car)//.mt(10)
	b2 = w.D(350, 300, 'b', 40).d(5)
	b2.bS('me')
	j1 = w.rJ(b2,
			car).mt(10)
	w.$(function () {
		dir *= -1
		j.mt(dir)
		j1.mt(dir)
	})
	_.ev(1, function () {
		w.D(300, 500, 'y', 20)
	})
}
WAGON = function () {
	W([1200, 600, 4000, 600], {}).P()
	p.d(.2).track().cl(function () {
		p.onGround = true
	})
	x = w.D(600, 300, 'r', 300, 50).d(2).fr(3)
	wh = w.D(500, 320)
	wh.cir({r: 20, lf: 'x'})
	w.rJ(x, wh)
	wh = w.D(550, 320)
	wh.cir({r: 20, lf: 'x'})
	w.rJ(x, wh)
	wh = w.D(600, 320)
	wh.cir({r: 20, lf: 'x'})
	w.rJ(x, wh)
	wh = w.D(650, 320)
	wh.cir({r: 20, lf: 'x'})
	w.rJ(x, wh)
	wh = w.D(700, 320)
	wh.cir({r: 20, lf: 'x'})
	w.rJ(x, wh)
}
STAND = function () {
	W([600, 1000, 600, 1200], {}).P('+')
	//y= w.ship(500,200)
	dir = 12
	car = w.D(300, 300, 'r', 200, 45)
	w1 = w.rJ(
			wheel(250, 300),
			car
	).mt(10)
	w2 = w.rJ(
			wheel(350, 300), car
	).mt(10)
	car3 = w.D(500, 300, 'r', 200, 45)
	w.rJ(wheel(450, 300), car3).mt(-10)
	w.rJ(wheel(550, 300), car3)
	car3 = w.D(700, 300, 'r', 200, 45)
	w.rJ(wheel(650, 300), car3).mt(-10)
	w.rJ(wheel(750, 300), car3).mt(-10)
	function wheel(x, y) {
		pC = [b2d.pC(45, 10)]
		return w.D(x, y, 'b', pC).d(5)
	}
	
	w.$(function () {
		dir *= -1
		w1.mt(dir)
		w2.mt(dir)
	})
}
WHEEL = function () {
	W([1200, 600, 2400, 600], {g: 50}).P()
	p.track()
	yy = w.y().aD(5000)//.fixRot()
	dir = 12
	pC = [b2d.pC(45, 10)]
	car = w.D(300, 300, 'r', 200, 45).fr(5)
	w.rJ(
			wheel(250, 300),
			car, 0, 0, 100, 0
	).mt(-10)
	w.rJ(
			wheel(250, 300),
			car, 0, 0, -100, 0)
	/*
	 car= w.D(800,300, 'r', 200,45).fr(5)
	 w.rJ(
	 wheel(850, 300),
	 car,0,0,100,0
	 )
	 w.rJ(
	 wheel(850, 300),
	 car,0,0,-100,0).mt(10)
	
	 */
	function wheel(x, y) {
		return w.D(x, y, 'b', pC).d(5)
	}
}
TANK = function () {
	W({g: 0}).P()
	g = V(0, 1000)
	dir = 12
	car = w.S(300, 300, 'r', 100, 5)
	w1 = w.rJ(
			w.D(250, 300, 'b',
					[b2d.pC(45, 10)]).d(5), car)//.mt(10)
	w2 = w.rJ(
			w.D(350, 300, 'b', [b2d.pC(45, 10)]).d(5), car)//.mt(10)
	/*
	 w.$(function(){
	 dir*=-1
	 w1.mt(dir)
	 w2.mt(dir)
	 g = V(-g.x,-g.y)
	
	 })
	
	 cjs.t(function(){
	 car.F( g )
	 })
	 w.right.cl(function(){g=V(-1000,0)})
	 w.left.cl(function(){g=V(1000,0)})
	 w.roof.cl(function(){g=V(0,-1000)})
	 w.floor.cl(function(){g=V(0,1000)})
	 */
}
WALLWHEELS = function () {
	W(0).Y()
	x = w.S(600, 300, 'r', 500, 500, '-')
	wh = w.pWh({
		x: 450,
		y: 50,
		c: 'z',
		r: 50,
		n: 9
	})
	w.rJ(x, wh, 50, -100)
	wh = w.pWh({
		x: 450, y: 50,
		c: 'b',
		r: 50,
		n: 5
	})
	w.rJ(x, wh, 0, 100)  //  x.rev(wh,0,100)
	wh = w.wh({
		x: 450,
		y: 50,
		c: 'z',
		r: 50,
		n: 9
	})
	w.rJ(x, wh, -150, -50)
	/*
	 x.wheel(0,0)
	
	 x.wheel({
	 x:450, y:50,
	 c:'b',
	 r:50,
	 n:5
	 })
	 */
}
BOOTCAN = function () {
	W({g: 0})
	w.rJ(w.S(300, 600, 'a', 200),
			w.D(300, 400, 'b', 100, 100))
	b = w.D(270, 500, 'o', 40).r(.5)
	r = w.S(300, 300, 'g', 100, 20).d(.1).damp(1000, 1000).rt(100).dyn()
	r.rec('g', 20, 40, 60, -20)
	cjs.t(function () {
		b.F(0, 400)
	})
}
