x = CanvasRenderingContext2D.prototype
x.pol = function (vs, ox, oy) {
	var x = this;
	ox = N(ox, 0);
	oy = N(oy, 0)
	x.b()
	x.mt(_.f(vs)[0] + ox, _.f(vs)[1] + oy)
	_.e(_.r(vs), function (v) {
		x.lt(v[0] + ox, v[1] + oy)
	})
	return x.cp().s().f()
}
x.setup = function () {
	var x = this
	x.cR();
	x.drawPD(p1, "b", 0, -30);
	x.drawPD(p2, "r", 0, -30)
	return x
}
x.gpc = function (vs1, vs2) {
	var x = this
	$.h1('blue op red')
	x = $.cx()
	$opButs()
	p1 = $pD(vs1)
	p2 = $pD(vs2)
	x.setup()
	function $opButs() {
		function Buts() {
			var d = $.d()
			G(arguments).e(function (op) {
				d.A(But(op))
			})
		}
		
		function But(op) {
			return $.bt(op, function () {
				var pD = p1[op](p2)
				x.setup().drawPD(pD, 'g', 0, 150)
			})
		}
		
		Buts('difference', 'intersection', 'union', 'xor')
	}
	
	return x
}
x.drawPS = function () {
	var x = this, g = G(arguments), o// can take array of verts OR a gpcPoly
	o = gpc.iP(g.f) ? {vs: g.f.vs(), ss: g.s, fs: g.t, ox: g[3], oy: g[4]} :
			A(g.f) ? {vs: g.f, ss: g.s, fs: g.t, ox: g[3], oy: g[4]} :
					g.O ? g.f : {}
	return x.lW(N(o.l, 12))
			.s(o.ss || 'b')
			.f(S(o.fs) ? o.fs : o.fs ? 'w' : 'p')
			.pol(o.vs, o.ox, o.oy)
}
x.drawPD = function (pD, sC, ox, oy) {
	var x = this
	pD.eIPol(function (iPol, n, nIP) {
		var col = n ? cols[n % nIP] : oO('c', sC)
		var pol = iPol.vsArr()
		var hoCol = iPol.iH() ? 'z' : null
		x.drawPS(pol, col, hoCol, ox, oy)
	})
	return x
}
PXC = function () {
	$.cx().drawPS(flatTri, 'r', 'v')
}
GPM = function () {
	x.gpc(vs1, vs2)
}
HOLEY = function () {
	x.gpc(vs1, vs4)
}
PXX = function () {
	Q('me', function () {
		$.cx().d(Q.i('me')).pol(flatTri)
	})
}