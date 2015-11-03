w.GBC=w.n = w.numBods = w.count = w.getBodyCount = w.bC = w.gBC = function () {
	return this.GetBodyCount()
}

w.G = function (x, y) {
	var w = this,
			v, currG = w.GetGravity()
	if (U(x)) {
		return currG
	}
	if (N(x)) {
		v = N(y) ? V(x, y) : V(0, x)
	}
	else if (x == 'flip') {
		v = V(-currG.x, -currG.y)
	}
	w.SetGravity(v)
	return w
}

///
w.step = w.go =function (time, a, b) {
	w = this, g = G(arguments)
	w.Step(time, N(a, 8), N(b, 3))
	if (g.p) {
		w.dDD()
	}
	return w
}


BOX0 = function () {
	w = _$boxWorld()
	$l('bod count : ' + w.numBods())
	cH = new b2d.CircleShape(50 / 30)
	cH.friction = .5
	cH.restitution = 0.3
	cH.density = 0
	b = w.cB($dBD())
	b.CreateFixture2(cH)
	b.SetPosition(V(545 / 30, 195 / 30))
	$l('bod count again: ' + w.GetBodyCount())
}
$boxWorld = $bW = function () {
	var g = G(arguments), o
	o = g.O? g.f: N(g.s) ? {x: g.f, y: g.s, sl: g.t} :
			N(g.f) ? {y: g.f, sl: g.s} :
			 {sl: g.f}
	o.x = N0(o.x)
	o.y = N(o.y, 10)
	return world(o.x, o.y, o.sl)
	function  world   (x, y, doSleep) {
		var sleep = U(doSleep) ? true : doSleep ? true : false
		var grav = V(x * 30, y * 30)
		return new b2d.World(grav, sleep)
	}
}
box = function (fn) {
	w = $boxWorld()
	
	dD = $dD($.c('z', 1800, 1500))
	
	
	w.sDD(dD) //the_circle = new b2CircleDef()
	
	n = 0

	_.ev(.1, function () {
		if (F(fn)) {
			fn(n)
		}
		n++
		w.go(1 / 5, '+')
	})

}
