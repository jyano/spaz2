pS.ptsArr = pS.ptsArray = pS.verts = pS.pts = pS.vs = function () {
	var pS = this
	var vs = []
	_.t(pS.n(), function (i) {
		vs.push([pS.x(i), pS.y(i)])
	})
	return vs
}
pS.tlNeg=pS.reg = pS.toRelativePoints = pS.mapToBoxWorld = function (b) {
	var p = this, g = G(arguments), o
	var vs = p.vs(), b
	//you can pass in the verts,
	// or the gPoly itself!                 //what about a f?
	o = V(g.f, g.s)
	return M.p(vs = _.m(vs, function (v) {
		return V(v).sub(o.x, o.y)
	}))
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

pD.A = pD.addPoints = function (pts) {
	var p = this
	 if (A(pts)) {
		_.e(pts, function (pt) {
			p.addPoint(V(pt))
		})
	}
	return p
}
 
w.destructableBricks = w.ter = function () {
	var w = this, ter = []
	_.t(13, function (i) {
		_.t(8, function (j) {
			var b = w.brick(i * 25 + 420, j * 25 + 200, 20, 20)
			ter.push({
				b: b,
				vs: b.f().vs(),
				p: M.p([
					V(i * 25 + 410, j * 25 + 210),
					V(i * 25 + 410, j * 25 + 190),
					V(i * 25 + 430, j * 25 + 190),
					V(i * 25 + 430, j * 25 + 210)
				])
			})
		})
	})
	return ter
}
w.pDraw = function (p, x, y) {
	var w = this, b = w.S(0, 0)
	b.pol({
		v: M.p(p).plus(x || 0, y || 0).vs(),
		c: 'w', C: 'x', l: 10
	})
	return p
}


w.ps = function (x, y, pS) {
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
function later() {
	w.vertsDOt = w.vDot = function (d) {
		var w = this
		w.dot('g', _.f(d))
		_.eR(d, function (v) {
			w.dot(v)
		})
		w.dot('r', _.l(d))
		return d
	}
	pD.dot1 = function () {
		var p = this
		p.vs(function (v) {
			w.dot('o', v)
		})
		return p
	}
	pD.dot = function (w) {
		var pD = this
		pD.vs(function (v) {
			w.dot('w', v[0], v[1])
		})
		return pD
	}
 
	b2d.hasAtLeastOnePolyX = b2d.hVSource = function (gP) {
		// if gP is a dP, then m_List is an array of (its inner) polySimples
		// [polySimp]
		//get just gets the index from the same (its own) array, hurray :)
		//as a bool tool, it checks to make sure that it has at least one polygon
		return gP.hasAtLeastOnePoly()
	}
	pD.minus = function (x, y) {
		$l('pD.minus')
		return M.p(
				_.m(this.vs(), function (v) {
					return V(v).sub(x || 0, y || 0)
				})
		)
	}
	$dif = DIF = function () {
		$l('$dif DIF')
		$l('DIF')//not each of the ps?
		var g = G(arguments),
				p = M.p(g.f)
		g.eR(function (p1) {
			p = p.D(p1)
		})
		return p
	}
	h.drawPoly = h.drawPolygon = function (V, c, C, l) {
		alert('h drawPoly')
		var h = this, //h.drawConnectedLines =
				n = V.length
		h.c(c, C, l)
		_.e(V, function (v) {
			v.X = v.x
			v.Y = v.y
		})
		if (n >= 3) {
			h.mt(V[0]) //move to the FIRST//lineTo the REST
			_.in(n, function (i) {
				h.lt(V[i % n])
			})
		}
		//just a clever way to start from 1
		return h
	}
	h.drawPolys = h.drawPolygons = function (paths, C, c) {
		alert('h drawPolys')
		var h = this
		h.C(C)
		if (c) {
			h.c(c)
		}
		_.e(paths, function (p) {
			h.drawPolygon(p)
		})
		return h
	}
 
	b.reg = b.rel = b.toPositivePoints = b.mapToGPoly = function (p) {
		var b = this
		//my poly operations can only work with POSITIVE vertices
		//but box2d needs fixt vertices specified relative to a body
		//so this allows the body that the operation was based on to take responsibility
		//for converting them back
		//you can pass in the verts, or the gPoly itself!
		var vs = gpc.iP(p) ? p.vs() : p
		return _.m(vs, function (v) {
			v = V(v);
			return V(v.x - b.X(), v.y - b.Y())
		})
		//this returns [V,V,V...]
	}
}