b.polCir = b.pC = function () {
	var b = this, g = G(arguments), o,
			vs = [], p
	o = O(g[0]) ? g[0] :
			S(g[0]) ? {c: g[0], r: g[1], n: g[2]}
					: {r: g[0], n: g[1]}
	o.r = N(o.r, 20)
	o.a = 2 * M.PI / o.n
	_.t(N(o.n, 20), function (i) {
		var v
		v = V(M.c(o.a * i) * o.r, M.s(o.a * i) * o.r)
		vs.push([v.x, v.y])
	})
	if (g.n) {
		return vs
	}
	p = b.pol(vs)
	p[0].C(o.c || $r())
	return b
}
b.minusPolyCirc = b.mPC = function (x, y, r, sides) {
	var b = this, pC, p
	pC = b2d.pC(r, sides)
	p = _.m(pC, function (v) {
		v = V(v)
		return [v.x + x, v.y + y]
	})
	vs = $DIF(b, p).ps(b)
	//b.clear()
	b.pol(vs)
	return b
}
f.polCir = f.pC = function (n) {
	var f = this, g = G(arguments), pC
	pC = f.iC() ? b2d.pC(f.rad(), N(n, 10))
			: f
	return g.m ? M.p(pC) : pC
}
w.polCir = w.pC = function (x, y, pC0, pC1, pC2) {
	var w = this, g = G(arguments), o
	if (g.O) {
		o = g[0]
		return w.D(o.x, o.y).pC(o)
	}
	return w.D(x, y).pC(pC0, pC1, pC2)
}
b2d.polCir = b2d.pC = function () {
	var g = G(arguments), //b2d.polyCirc =
			vs = [],
			r = N(g[0], 20),
			n = N(g[1], 20),
			a = 2 * M.PI / n
	_.t(n, function (i) {
		var v = V(
				M.c(a * i) * r,
				M.s(a * i) * r)
		vs.push(g.p ? v : [v.x, v.y])
	}) //returns an arr of rel verts
	return vs
}
b2d.polyCirc = function (r, n) {
	var g = G(arguments), vs = [], a
	r = N(r, 20)
	n = N(n, 20)
	a = 2 * M.PI / n
	_.t(n, function (i) {
		vs.push(V(r * M.c(a * i), r * M.s(a * i)))
	})
	return vs
}
CIRPOL = CIRP = PC = function () {
	W()
	w.S(700, 100).pC('d', 60, 5)
	w.S(530, 170).pC('d', 80, 10)
	w.pC(325, 155, 'd', 120, 15)
	w.S(100, 110).pol(w.S(100, 100, 'w', 50).f().pC(10, '*'))
}
PC2 = function () {
	W().$$fall().D(1000, 100).pol(
			w.S(830, 270).pC('z', 80, 10)
					.dif(redRect = w.S(960, 280, 'r', 200, 100), '-'))
}