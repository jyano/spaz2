 
b2d.tF = b2d.toFxt = function (f) {
	return b2d.iB(f) ? f.f() : f
}
w.pDraw = function (p, x, y) {
	var w = this, b = w.S(0, 0)
	b.pol({
		v: M.p(p).plus(x || 0, y || 0).vs(),
		c: 'w', C: 'x', l: 10
	})
	return p
}
b2d.tlNeg = b2d.reg = function (ps, b) {
	return _.m(ps, function (poly) {
		return poly.tlNeg(b)
	})
}
b.pos = function () {
	return this.tf().position.m()
}//used in MEET

b.killXY = b.KPos = b.KXY = function () {
	var b = this
	var xy = b.XY();
	b.kill();
	return xy
} 
b.pD = function () {
	var b = this, f = b.f(), g = G(arguments), pD = $pD()
	if (!f) {
		return pD
	}
	// if the body has no freqkin fixts.. 
	// if its an infant body , massless? fixtureless
	pD = M.p(f)
	_.eR(b.fs(), function (f) {
		pD = pD.U(f)
	})
	return pD
}
pD.isPolyless = pD.hasNoPolys = function () {
	return !this.hasAtLeastOnePoly()
}
pD.ps = pD.polys = pD.hs = pD.pols = function () {
	var pD = this, g = G(arguments), o
	var ps = pD.polies()
	o = b2d.iB(g.f) ? {ps: b2d.tlNeg(ps, V(g.f)), fn: g.s} :
			g.N_ ? {ps: b2d.tlNeg(ps, V(g.f, g.s)), fn: g.t} :
			{fn: g.f}
			
			
	o.ps = o.ps || []
	
	if (!g.n) {o.ps = _.m(o.ps, M.p)}
	
	if (F(o.fn)) {
		_.e(o.ps, o.fn); return pD
	}

	return o.ps
} // used in MEET


 
pD.pol = function (b) {
	var p = this
	p = M.p([[0, 50], [-50, 0], [0, -50], [50, 0]])
	// w.pol(v.x, v.y, p) -> p.pol(w,v)?
	p.ps(b, function (p) {
		b.pol(p)
	})
	return p
}//pD.polygons =
w.ps = w.poliees=function (x, y, pS) {
	pS.ps(this.D(x, y), function (pS) {
		b1.pol(pS)
	})
}
w.polS = function () {
	var w = this, g = G(arguments), b, o
	if (g.A) {
		return w.pol.apply(w, g.f)
	}
	if (O(g.f) && O(g.s)) {
		g.e(function (g) {
			w.pol(g).stat()
		})
		return w
	}
	o = O(g.f) ? g.f : N(g.f) ? {x: g.f, y: g[1], p: g[2]} : {p: g.f}
	o.x = N(o.x, w.hW);
	o.y = N(o.y, w.hH)
	b = w.D(o.x, o.y)
	if (!g.p) {
		return b.pol(o.p)
	}
	if (o.rg) {
		o.p.ps(o.rg, function (p) {
			b.pol(o)
		})
	}
	else {
		o.p.ps(function (p) {
			b.pol(o)
		})
	}
	return b.f()
}
//gpc.hV = gpc.hPt = gpc.hasVertex = function (gP) {return gP.m_List.get(0)  }//used in MEET

WPOLS = function () {
	W(50).C('w')
	p1 = M.p(sqr)
	p2 = M.p(combo)
	w.polS([300, 300, p1], [300, 300, p2])
}

BPOL = function () {
	W()
	w.D(200, 400).pol(vs1)
	w.D(800, 400).pol($pD(vs1))
	w.D(800, 400).pol('o', $pD(vs1))
	w.D(500, 400).pol({vs: vs1, c: 'r'})
	w.D(800, 400).pol({vs: $pD(vs1), c: 'b'})
}
POL = function () {
	W(50).C('w')
	p1 = M.p(sqr)
	p2 = M.p(combo)
	w.D(300, 300).pol({v: p1.U(p2)})
	w.D(400, 300).pol({v: p1.D(p2)})
	w.D(500, 300).pol({v: p1.I(p2)})
	w.D(600, 300).pol({v: p1.X(p2)})
	w.pol(300, 300, p2)
	_.e([
				[500, 200, p1.U(p2)],
				[600, 200, p1.D(p2)],
				[700, 200, p1.I(p2)], [800, 200, p1.X(p2)]],
			function (args) {
				w.pol.apply(w, args)
			})
}
PDPS = function () {
	W(10).roof.kill()
	b = w.brick(300, 200, 30, 30)
	pD = b.pD()
	pD.polies(function (pD) {
		w.D(300, 400).pol(pD).tlNeg(b)
	})
}

function alph(){
	b2d.overlapping = b2d.ol = function (b1, b2) {
		//alert('b2d.ol overlapping')
		var v1 = M.p(b1),//wont work yet
				v2 = M.p(b2)
		var p = v1.union(v2)
		return !(_.isEqual(p.vs(), v1.vs()) ||
		_.isEqual(p.vs(), v2.vs()))
	}
//b2d.hV = b2d.hasVerts = gpc.hV
// }
}