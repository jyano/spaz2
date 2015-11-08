 
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


b._pol = function (v, c, i) {
	var b = this,
			newFs, spr
	newFs = b.sepNew(v, withF)
	if (i) {
		spr = w.gx.h()
		spr.bV({v: v})
		b.bS(spr)
	}
	return newFs
	function withF(f) {
		f.c(c || 'x')
		if (o.lf) {
			f.bS(w.st.h().lf(o).lt(o.v))
		}
		if (o.rf) {
			f.bS(w.st.h().rf(o).lt(o.v))
		}
	}
}
b.pol = function () {
	var b = this, w = b.W(), g = G(arguments), o
	var newFs
	if (g.u) {
		return b
	}
	if (b2d.iB(g.f)) {
		g.f.fs(b);
		return b
	}
	//if passed [[ color and ]] verts:
	o = S(g.f) && gpc.iP(g.s) ? {c: g.f, v: g.s} :
			gpc.iP(g.f) ? {v: g.f} :
					b2d.iF(g.f) ? {v: g.f.vs()} :
						// pass in  [[],[],[]]   or  ['r',[],[],[]]
							g.A && S(g.f[0]) ? {c: g.f[0], v: _.r(g.f)} : g.A ? {v: g.f} :
									g.O ? g.f : g.O_ ? {v: g} : //pass in [],[]
											g.t ? {c: g.f, v: g.r} : // pass in 'r', [], []
											{c: g.f, v: g.s}   //pass in  {c:'r', v:[[],[],[]]}
	_oo = o
	$df.h(o)
	o.i = o.i || o.bf
	//$l('check _o');
	_o = o
	newFs = b.sepNew(o.v, function (f) {
		f.set(o)
		f.c(o.c, o.C, o.l)
		if (o.lf) {
			f.bS(w.st.h().lf(o).lt(o.v))
		}
		if (o.rf) {
			f.bS(w.st.h().rf(o).lt(o.v))
		}
	})
	if (o.i) {
		__h = w.gx.h().bV(o)
		b.bS(__h)
	}
	return newFs
}
b.sep = function (verts, scale) {
	var body = this
	if (!O(verts)) {
		//	alert('o.v must be object');
		return
	}
	if (gpc.iP(verts)) {
		verts = verts.vs()
	}
	//needs array of verts.. or one vert (which is converted here to arr)
	_.e(O(verts[0][0]) ? verts : [verts], function (v) {
		b2d.sep(body, v, scale)
	})  //  'sep' each of the verts onto the body
	return this
}
b.sepNew = function (vs, fn) {
	//this proxies to b.sep.. but has two advantages
	//- it returns NEW fixtures formed in an array
	//- if u pass in a function, then it loops those fxs
	// //alt:if only one fixture added.. it is returned as a single fixture (not in array) ?
	var n = this.n(),
			b = this.sep(vs),
			numNewFs = b.n() - n,
			newFs = _.f(b.fs(), numNewFs)
	if (F(fn)) {
		_.e(newFs, fn)
	}
	return newFs
	//return newFs[1]? newFs: newFs[0]
}
 
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