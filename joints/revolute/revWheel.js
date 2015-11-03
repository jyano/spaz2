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

 