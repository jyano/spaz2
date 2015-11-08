$L('box', 'pDProto', 'apps', 'bod', 'fixt', 'verts', '_preApps')
$UNI = function () {
	var g = G(arguments)
	if (g.A) {
		return g.ap($UNI)
	}//<<return $a($UNI,g.f)
	var p = M.p(g.f)
	g.eR(function (pol) {
		p = p.U(M.p(pol))
	})
	return p
}
w.polU = function (x, y, p1, p2) {
	return this.pol(x, y, M.p(p1).U(p2))
}
$DIF = function () {
	var g = G(arguments)
	if (g.A) {
		return g.ap($DIF)
	}
	var p = M.p(g.f)
	g.eR(function (pol) {
		p = p.D(M.p(pol))
	})
	return p
}
w.polD = function (x, y, p1, p2) {
	return this.pol(x, y, M.p(p1).D(p2))
}
function bod() {
	b.pDWo = b.gPolWo = function (gPol) {
		this.fs(function (f) {
			gPol = gPol.D(f)
		})
		return gPol
	}
	b.gPolyVerts = b.wV = function () {
		return this.pD().vs()
	}
	b.rotatedVerts = b.rV = function () {
		$l('b.rV')
		var b = this, r = M.tR(b.rt()),
				vs,
				r, x, y
		vs = _.m(b.vs(), function (v) {
			v = V(v)
			x = v.x * M.c(r) - v.y * M.s(r) + b.X()
			y = v.x * M.s(r) + v.y * M.c(r) + b.Y()
			return V(x, y)
		})
		return vs
		//this returns [V,V,V...]
	} //b.vs????
//b.fsGp   fsToGPol...
// for each of my fxs, 
// turn them into gP's
// and then aggregate them all
// by unioning each reductively
// so it gets bigger and bigger..
	b.fsGp = b.fsToGPol = b.polDefault = b.polDef = b.bolDf = b.pD = b.P = function () {
		var b = this,
				fs = b.fs()
		var f = _.f(fs)
		// if the body has no freqkin fixts.. 
		// if its an infant body , massless? fixtureless
		if (!f) {
			return $pD()
		}
		var p = M.p(f)
		_.eR(fs, function (f) {
			p = p.U(f)
		})
		return p//p.reg(b)
		//this returns a gPoly
	}
	b.uni = function () {
		var b = this, g = G(arguments), n, fs
		fs = b.fs()
		if (g.u) {
			return g.p ? $UNI(fs).reg(b) : $UNI(fs)
		}
		//unite with fixt or first-fixt(of body)
		if (O(g.f) && !F(g.s)) {
			return b.f().uni(b2d.tF(g.f))
		}
	}
	b.sum = function (b1) {
		return $uni(this, b1).vs(this, '-')
	}
	b.reg = b.rel = b.toPositivePoints = b.mapToGPoly = function (p) {
		$l('b.reg')
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
	b.ps = function (fn) {
		alert('b.ps sucks')
		var b = this,
				arr = [],
				p = b.uni()
		if (F(fn)) {
			p.ps(b, fn);
			return b
		}
		p.ps(b, function (v) {
			arr.push(v)
		})
		return arr
	}
	b.cloneTo = b._cloneTo = b.polif = b.polEachFTo = function (b1) {
		this.fs(function (f) {
			f.cloneTo(b1)
		})
		return b1
	}
	b.clone = b.cloneNew = b.pClone = b.polyClone = function (x, y, rt) {
		var b = this
		x = N(x, b.X())
		y = N(y, b.Y())
		rt = N(rt, b.rt())
		var ty = b.ty()
		//make a new body at the right 'transform' (copying this body)
		var b1 = w.D(x, y).ty(ty).rt(rt)
		//then.. for each of this body's fixtures....
		// stamp it 'on' that damn body
		// when u are done.. it will be just like you !!!
		return b.cloneTo(b1)
	}
	b.copy = function (x, y) {
		return this.W().pol(x, y, this)
	}
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
		vs = DIF(b, p).ps(b)
		//b.clear()
		b.pol(vs)
		return b
	}
	b.without = b.dif = function (o) {
		var b = this, g = G(arguments),
				f = b.f(), fs = b.fs(), p
		if (b.n() == 1) {
			return b.f().dif(o, '-')
		}
		p = $dif(b, o).reg(b)
		if (g.n) {
			if (b2d.iB(o) || b2d.iF(o)) {
				o.kill()
			}
			else {
				b.kill()
			}
		}
		return p
	}
	b.carveOutF = b.scrapeWithFxt = b.subFxt = b.subF = b._sub = function (f) {
		return this.fs(function (fxt) {
			fxt.sub(f)
		})
	}
	b.scrapeWith = b.subFrom = function (fromWhat) {
		this.fs(function (f) {
			fromWhat.sub(f)
		})
		return this
	}
	b.carveOutB = b.scrapeWithBod = b.subBod = b.subB = function (b) {
		return this.subFrom(b)
	} //below seems to work with bods and fixts, but why not gPolys?
	b.carveOut = function (pol) {
		var b = this, g = G(arguments)
		if (b2d.iF(pol)) {
			b.carveOutF(pol)
		}
		else if (b2d.iB(pol)) {
			b.carveOutB(pol)
		}
		if (g.n) {
			pol.kill()
		}
		return b
	}
	b.pos = function () {
		return this.tf().position.m()
	}//used in MEET
	
	b.scrape = b.sub = b.SCRAPE = function () {
		var b = this, g = G(arguments)
		g.e(function (pol) {
			b.carveOut(pol, g.o)
		})
		var col = g.f
		if (col !== 0) {
			b.C(col || b.c())
		}
		return b
	}
	 
	b.killXY = b.KPos = b.KXY = function () {
		var b = this
		var xy = b.XY();
		b.kill();
		return xy
	}
	
}


b.scrapeEachF = b.subAll = b.subPol = b.subPoly = b.subP = function (pol,xy) {
	return  this.fs(function (f) {
				f.scrapeWith(  xy? $pol(pol,xy) : pol  )})
	
}



b.subPolAtFxt = function (pol, f) {var b = this, g = G(arguments)
	var b1= g.n ? f.B().killXY() : f.B()
	b.scrapeEachF(pol, b1)
	return b
}



b.expl = function (c) {var b = this
	
	b.cl(function (f) {
		b.subPolAtFxt('expl', f, '-')
		if (c) {b.C(c === '*' ? $r() : c)}
	})
	
	return b
	
}




function fixt() {
	f.scrapeBodWith = f.subFromBod = function (b) {
		b.fs(function (f) {
			f.sub(b)
		})
	}
	f.wV = function () {
		var f = this
		return b2d.tA(
				b2d.add(f.vs(), f.B())
		)
	}//used in MEET
//b2d.hV = b2d.hasVerts = gpc.hV
	f.area = f.A = function () {
		return M.p(this).getArea()
	}
	f.gPolyWorldVerts = f.tGP = function () {
		return $pD(this.wV())
	}
// *** cloning *****
// f._clone  for some reason will let you 'stamp' in a specified body
	f.vsA = function () {
		var f = this
		return _.m(f.vs(), function (v) {
			return [v.x, v.y]
		})
	}
// f.polTo will get the verts from its shape..
// conver it to an array of arrs,
// and it will polif the specified body with that vsA
// b.polEachF will take a different body..
// and it will polif that body with EACH if its fs
	f.cloneTo = f._clone = f.cloneoOn = f.polif = f.polTo = function (b) {
		var f = this
		if (f.isCir()) {
			var h = f.H()
			var x = h.m_p.x * 30
			var y = h.m_p.y * 30
			b.cir(h.rad(), x, y, $r())
		}
		else {
			b.pol({c: $r(), v: f.vs()})
			// alt??! b.pol( f.vsA() )
			// maybe both work???
		}
		return f
	}
	f.uni = function () {
		var f = this,
				b = f.B(), g = G(arguments), p, n
		//can handle a fixt OR a body!
		//-> [f]
		if (g.A) {
			return $a(f, 'uni', g.f)
		}
		p = M.p(f).U(g.f)
		g.eR(function (f) {
			p = p.U(f)
		})
		return p.reg(b)
		//n= p.getNumInnerPoly()
		//to do now!
		//if it receives a body, i should uni all thatbody's fixs against it
		//dont worry about rebuilding the body first? hmm....
	}
	f.polCir = f.pC = function (n) {
		var f = this, g = G(arguments), pC
		pC = f.iC() ? b2d.pC(f.rad(), N(n, 10))
				: f
		return g.m ? M.p(pC) : pC
	}
	f.polyDotWorVerts = f.dots = function () {
		var f = this;
		b2d.pD = b2d.polyDot = function (vs) {
			var t = 0
			vs = A(vs) ? vs : vs.wV
			w.dot('g', V(_.f(vs)))
			_.e(vs,
					function (v) {
						$.in(t, function () {
							w.dot(V(v))
						}, t)
						t += .1
					}
			)
			w.dot('r', V(_.l(vs)))
		}
		b2d.polyDot(f.wV())
		return f
	}
	f._vs = function () {
		var f = this
		var h = f.H()
		vs = h.m_vertices
		return _.m(vs, b2d.m)
	}
//f.pts=
	f.points = f.verts = f.vertices = f.vs = function () {
		var f = this, b = f.B(), g = G(arguments)
		var fn = g.n ?
				function (a) {
					return a
				} :
				function (v) {
					_v = v
					return v.rt(b.rt())
				}
		var vs = _.m(
				f._vs(),
				fn
		)
		return b2d.tA(vs)
	}
	f.dif = function () {
		var f = this, b = f.B(), g = G(arguments),
				pD = this.tGP()
		g.e(function (ob) {
			pD = b2d.iB(ob) ? ob.gPolWo(pD)
					: pD.D(ob)
		})
		if (!pD.hasAtLeastOnePoly()) {
			return $l('f.dif')
		}
		return pD.reg(f).reg(g.n ? b : f)
	}
	f.difKill = function (what) {
		var f = this,
				difdFxt = f.dif(what, '-') //vs is f minus something
		f.kill() //then f goes away
		return difdFxt
		//difdFxt = f.dif(g.f, '-') //vs is f minus something
		//f.kill() //then f goes away
	}
	f.scrape = f.scrapeWith = f.sub = function (what) {
		var f = this, b = f.B(), g = G(arguments), what = g.f, difdFxt
		//f.sub uses f.dif and replaces itself on a body
		// with its (potentially) 'slimmer' self
		//lets begin:
		// we get the dif of the this and the thing we are subtracting from it...
		// then we kill THIS fixt
		difdFxt = f.difKill(what)
		//otionally put a min size to allow it to be replaced
		//i guess if it's too small, don't bother
		//but calculating area could also be bottleneck?
		if (!bigEnough(difdFxt)) {
			return
		}
		//here, body makes a new f from the dif (hence, it might be slimmer)
		//again... it is fixtizing the result of the gPol subtraction operation
		// it subtracted something from this... killed itself..
		// .. and now is adding a NEW fixture to replace itself..
		//but the new fixture is the difference result of subtracting something else, from it
		//so after that subtraction, it killed itself, and and now 
		// we are replacing the body that held that fixt, replaces it with the resutl
		// of the difference between it and another fixt
		b.pol(difdFxt)
		//now that other thing that we subtracted from our fixt before it was killed and replaced..
		//..letst talk about that thing
		//we can optionally kill that thing too!!
		//it may have been a real manufactured body or fixt
		//... though there should be a better way than that!!! !!!! :=)(+
		if (g.n) {
			what.kill()
		}
		//and  aparently we can also optionally dynamize it!
		if (g.p) {
			what.dyn()
		}
		return f
		function bigEnough(f) {
			return M.p(f).getArea() > 2000
		}
	}
}
function pDProto() {
	pD.A = pD.addPoints = function (pts) {
		var p = this
		alert('pd.A problem.. only handles arrs')
		if (A(pts)) {
			_.e(pts, function (pt) {
				p.addPoint(V(pt))
			})
		}
		return p
	}
	pD.polygons = pD.pol = function (b) {
		alert('pD.pol')
		var p = this
		p = M.p([[0, 50], [-50, 0], [0, -50], [50, 0]])
		// w.pol(v.x, v.y, p) -> p.pol(w,v)?
		p.ps(b, function (p) {
			b.pol(p)
		})
		return p
	}
	pD.U = function () {
		var pD = this, g = G(arguments),
				uP
		if (b2d.iB(g.f)) {
			uP = pD.U(g[0].f())
			_.eR(g.f.fs(), function (f) {
				uP = pD.U(f)
			})
			return uP
		}
		return pD.union(M.p(g[0]))
	}
	pD.dot = function () {
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
	pD.plus = function (x, y) {
		return M.p(_.m(this.vs(), function (v) {
			return V(v).add(x || 0, y || 0)
		}))
	}
	pD.hasAtLeastOnePoly = function () {
		return this.m_List.get(0)
	}
	pD.isPolyless = pD.hasNoPolys = function () {
		return !this.hasAtLeastOnePoly()
	}
	pD.D = function () {
		var pD = this
		G(arguments).e(function (polOrBod) {
			pD = b2d.iB(polOrBod) ? polOrBod.pDWo(pD) :
					pD.difference(gpc.p(polOrBod))
		})
		return pD
	}
//f.dif does the math and returns the answer (vs)
//returns pD with array of pS's ( pD.m_List )
	pD.translate = pD.translateBackTo = pD.from = pD.cameFrom = pD.reg = pD.rel = function (x, y) {
		var vs = this.vs()
		var pD = b2d.sub(vs, V(x, y))
		return M.p(pD)
		v.translate = function (vs) {
			var x = this.x
			var y = this.y
			var pD = b2d.sub(vs, V(x, y))
//v= V(100,100).tranlate( vs  )
		}
		pD = V(x, y).translate(vs)
	}
//you can pass in the verts, 
// or the gPoly itself! //what about a fxt?
	pD.points = pD.vs = function (fn) {
		var pD = this,
				g = G(arguments),
				o = g.F ? {fn: g.f} : {num: g.f, fn: g.s},
				vs = []
		_.t(pD.n(), function (i) {
			vs.push([pD.x(i), pD.y(i)])
		})
		vs = g.n ? b2d.sub(vs, o.num) :
				g.p ? b2d.add(vs, o.num) :
						vs
		if (o.fn) {
			_.e(vs, o.fn);
			return pD
		}
		return vs
	}//used in MEET
	pD.butHere = pD.to = pD.at = pD.ger = function (x, y) {
		return this.reg(-V(x, y).x, -V(x, y).y)
	}
	pD.maybeHere = function (xy) {
		var pD = this
		return xy ? pD.butHere(xy) : pD
	}
}
ps.ptsArr = ps.ptsArray = ps.verts = ps.pts = ps.vs = function () {
	var p = this,
			vs = []
	_.t(p.n(), function (i) {
		vs.push([p.x(i), p.y(i)])
	})
	return vs
}
ps.reg = ps.toRelativePoints = ps.mapToBoxWorld = function (b) {
	$l('ps.reg')
	var p = this, g = G(arguments),
			vs = p.vs(), b, o
	//you can pass in the verts,
	// or the gPoly itself!                 //what about a f?
	o = V(g.f, g.s)
	return M.p(vs = _.m(vs, function (v) {
		return V(v).sub(o.x, o.y)
	}))
}
 
MEETY = function () {
	W([600, 400, 1400, 400], {g: 10}).y(100, 200).tr()
	w.S(500, 300, 'o', 200, 800).expl('*')
}

CIRPOL = CIRP = PC = function () {
	W()
	w.S(700, 100).pC('d', 60, 5)
	w.S(530, 170).pC('d', 80, 10)
	w.pC(325, 155, 'd', 120, 15)
	w.S(100, 110).pol(w.S(100, 100, 'w', 50).f().pC(10, '*'))
	redRect = w.S(960, 280, 'r', 200, 100)
	p = w.S(830, 270).pC('z', 80, 10)
			.dif(
			redRect,
			'-')
	w.D(1000, 100).pol(p)
	w.$$(function () {
		w.e(function (b) {
			b.dyn()
		})
	})
}
POLS = function () {
	W(50)
	p1 = M.p([[-50, 50], [-50, -50], [50, -50], [50, 50]])
	p2 = M.p([[-100, 0], [-100, -100], [0, -100], [0, 0], [-98, 2]])
	w.D(300, 300).pol({v: p1.U(p2)})
	w.D(300, 300).pol({v: p1.D(p2)})
	w.D(300, 300).pol({v: p1.I(p2)})
	w.D(300, 300).pol({v: p1.X(p2)})
	w.pol(300, 300, p2)
	w.polS([300, 300, p1], [300, 300, p2])
	w.pol([500, 200, p1.U(p2)],
			[600, 200, p1.D(p2)],
			[700, 200, p1.I(p2)],
			[800, 200, p1.X(p2)])
}
STAMP = function () {
	W({w: 'U', g: 50})
	soda = w.S(300, 300, 'b', 300, 200).c('b')
	r = w.S(200, 400, 'r', 300, 200).c('r')
	y = w.S(240, 200, 'y', 200, 300, 0, 0, 100).c('y')
	_.in(1, function () {
		soda.sub(y, '-')
		soda.f().C('o')
		f = soda.f()
	})
	soda.kill()
	_.in(3, function () {
		DIF(f, r.f())
				.ps(soda, function (p) {
					soda.pol(p)
				})
	})
	w.D(800, 100).pol('g', w.D(800, 300, 'r', 100, 20))
	cross = w.D(600, 300, 'z', [
		['r', 100, 20],
		['b', 80, 30, 0, 0, 80]
	])
	cross = cross.uni().reg(cross)
	w.$(function (o) {
		w.D(o.x, o.y).pol(cross)
		w.pol(o.x, o.y, soda)
		o.f.kill()
		r.kill()
		soda.dyn()
	})
} // w.S(...).c NOT FUNC
SAUCERS = function () {
	W(0)
	b = w.S(300, 300, [['g', 30, 30], ['b', 100, 6], ['o', 100, 6, 0, 30]])
	//one way
	b1 = w.D(700, 300).vX(-10)
	ps = b.ps();
	_.e(ps, function (v) {
		b1.pol({c: 'r', v: v})
	})
	//better way
	b1 = w.D(500, 500).vX(10)
	b.ps(function (v) {
		b1.pol({v: v})
	})
	//best way
	b.copy(500, 450).vY(-10)
	p = $UNI(
			w.S(400, 280, 'y', 30, 30),
			w.S(420, 300, 'o', 30, 30),
			w.S(420, 300, 'g', 100, 6),
			w.S(420, 310, 'g', 100, 6, 0, 30))
			.ps(420, 300)
	w.$(function (o) {
		w.D(o.x, o.y).pol({v: p}).aV(2)
	})
}
GPC = function () {
	v1 = [[61, 68], [145, 122], [186, 94], [224, 135], [204, 211],
		[105, 200], [141, 163], [48, 139], [74, 117]]
	v2 = [[131, 84], [224, 110], [174, 180], [120, 136], [60, 167]]
	p1 = M.p(v1)
	p2 = M.p(v2)
	x0 = $.can('b', 300, 200).A().ctx()
	x0.drawPs(p1, 'b', 0, -30)
	x0.drawPs(p2, 'r', 0, -30)
	$.br().A()
	xx = $.can('y', 300, 400).A().ctx()
	_.e(['D', 'I', 'U', 'X'], function (o) {
		$.bt(o, function () {
			xx.clearRect(0, 0, 400, 400)
			xx.drawPs(p1[o](p2), 'g', 0, 150)
		}).A()
	})
}
GER = function () {
	W(30)
	$UNI(
			w.S(500, 200, 'b', 100, 100),
			w.S(600, 400, 'd', 100, 100)
	)//.dot(w)
	$UNI(
			w.S(700, 200, 'o', 100, 100),
			w.S(750, 250, 'g', 100, 100)
	)//.dot(w)
	$UNI(
			w.S(900, 200, 'r', 100, 100),
			w.S(1000, 200, 'b', 100, 100)
	)//.dot(w)
	w.D(1000, 350).pol({
		c: 'x',
		v: w.S(1000, 450, [
			['o', 60, 60, 100, 0],
			['r', [[-20, 0], [0, -50], [100, 10]]],
			['g', 20, 100, 50, -50]
		]).uni()
	})
	w.D(1050, 500).pol(w.S(900, 500, [
		['g', 30, 80],
		['b', 40, 50, 20, 0],
		['r', 50, 20, 50, 0, 20]]).uni())
}
UNII = function () {
	W(50).Y()
	p0 = w.pol({v: p1})
	//pol1 = M.p(p1)
	// p1 = w.pol({v: pol1})
//	pol = pol1.U(p2)
//	p = w.pol( pol  )
	//p.XY(500,200) 
	//w.polU(500, 200, p1, p2)
	//w.polD(600, 200, p1, p2)
//	b = w.S(520, 120, 'b', 50, 50)
	//r = w.S(500, 100, 'r', 50, 50)
	//	w.polU(500, 200, b, r)
	//	d = w.S(500,200)//.dot('y')
	//f = d.pol({c:'w',C:'z',l:5,v:b.sum(r)})  //f[0].C('z');f[2].C('o')//f is an ARRAY OF FIXTS!!!
}
GERN = function () {
	W({g: 0}).Y()
	w.p(200, 200)
	ter = w.S(400, 400, 'g', 300, 300).K('ter')
	w.cxBul('ter', function (tFx) {
		var bu = this.B()
		_.in(1, function () {
			var exp = w.S(bu.X(), bu.Y(), 'g', 100, 100).K('ter')
			t.sub(exp)
			_.in(10, function () {
				exp.kill()
			})
		})
	})
}
SUB = function () {
	W(20).Y();
	y.rot(90).XY(20, 50)
	face = w.S(300, 400, 'b', 100, 100)
	hat = w.S(300, 400, 'w', [
		[[-100, 10], [-80, -40], [0, -200], [100, 0]],
		[20, 50]
	])
	redRec = w.S(900, 350, 'r', 200, 100)
	blueBody = w.S(1000, 300)
	fixt1 = blueBody.rec({c: 'b', w: 100, h: 100})
	fixt2 = blueBody.rec({c: 'b', w: 100, h: 100, x: 30, y: 30})
	_.in(2, function () {
		face.f().sub(hat, '-')
		redRec.f().sub(blueBody, '-')
		redRec.C('r')
	})
	a = w.S(140, 140, 100, 100).rot(20)
	b = w.S(100, 100, 100, 100).rot(45)
	d = w.S(650, 420, 'b', 100, 100)
	b9 = w.S(610, 380, [
		['b', 40, 70, 20, -20],
		['o', 40, 70, -20, 20, '-']
	]).rot(-20)
	fs = b9.fs()
	_.in(3, function () {
		w.S(720, 400).pol(d.sub(b9, '-'))
	})
	//does not keep color!
	c = w.S(450, 300, 'w', 100, 100)
	c.minusPolyCirc(550, 300, 100, 20)
}
SENSUB = function () {
	W(0).Y()
	r = w.D(600, 350, 'r', 400, 200).grp(-1)
	b = w.D(1000, 300, [['b', 100, 100], ['b', 100, 100, 30, 30]]).grp(-1)
	w.$$(function () {
		r.fs(function (f) {
			f.sub(b)
		})
		r.grp(-1)
		b.kill()
		r.C('r')
		b = w.D(1000, 300, [['b', 100, 100], ['b', 100, 100, 30, 30]]).grp(-1)
	})
}
SUBCOL = function () {
	W(0)
	/*
	 b=w.S(300,300,'b',300,200).c('b')
	
	 r=w.S(200,400,'r',300,200).c('r')
	
	 y=w.S(240,200,'y',200,300,0,0,100).c('y')
	
	
	 _.in(function(){
	
	 y.sub(b)//.C( y.c() )
	
	 b.kill()
	
	 //b.sub(b1,'-').C('b')
	 })
	 */
	fn = function () {
		var b, p, b1
		b = w.D(900, 200, [
			['p', 200, 100], ['b', 100, 200]])
		b1 = w.D(900, 400)
		DIF(b.fs(1), b.fs(0)).ps(b, function (p) {
			b1.pol(p)
		})
	};
	fn()
}
DFFF = function () {
	W(10)
	w.S(900, 450, 'r', 250, 200).f().sub(w.D(850, 460, 'w', 200, 100, 0, 0, -20).f())
	b = w.S(1100, 100, 'r', 100, 100)
	b1 = w.S(1050, 120, 'b', 100, 40)
	w.$$(function () {
		w.D(500, 100).pol('r',
				b.f().dif(b1.f(), '-')
		)
		b.kill()
		b1.kill()
	})
	fn = function () {
		var b = w.S(100, 100, 'r', 100, 100),
				b1 = w.S(130, 100, 'b', 100, 80)
		_.in(function () {
			b.sub(b1, '-')
		})
	}//;fn()
	fn = function () {
		var b = w.S(300, 100, 'r', 100, 100),
				b1 = w.S(330, 100, 'b', 100, 80)
		w.$$(function () {
			w.D(300, 200).pol(b.f().dif(b1, '-'))
		})
	};//fn()
	fn = function () {
		var b, o, p
		b = w.S(200, 400, 'b', [-80, -40], [0, -200], [100, 50])
		o = w.S(280, 420, 'o', 100, 100)
		p = b.dif(o)
		w.D(300, 300).pol(p)
		w.dot(300, 300)
	}//;fn()
	fn = function () {
		white = w.S(700, 400, 'w', 100, 100)
		red = w.S(700, 400)
		f = red.pol({
			c: 'r',
			v: [[-100, 10], [-80, -40],
				[0, -200], [100, -60]]
		})
		yellow = w.S(930, 300, 'y', [
			[100, 100],
			[100, 100, 0, 0, 45]])
		yel = yellow.pD().reg(yellow)
		green = w.S(1030, 400, 'g', 200, 200)
		w.md1(function () {
			red.sub(white, '-').dyn().lV(-60, -10)
			yellow.sub(green).dyn().lV(-60, -10)
			w.$(function () {
				yellow.lV(-60, -10)
			})
			_.in(2, function () {
				green.sub(w.S(930, 300).pol(yel))
			})
		})
	};//fn()
}
HULL = function () {
	z()
	c = $.c('y', 800, 400).id('canvas').A()
	window.onload = init
	function init() {
		var canvas = c[0],        // main canvas element
				fps = 10,                                        // drawing frames per second
				convex = new Convex(),                            // convex hull
				dots = []                                     // dots, which are not in the convex hull
		// adjust canvas proportions
		// canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight;
		// assign canvas context
		ctx = canvas.getContext("2d");
		setInterval(function () {
			
			// get a blank canvas //// clear
			ctx.clearRect(0, 0, ctx, canvas.width, ctx.canvas.height)
			// draw convex dots
			convex.draw()
			// draw dots
			dots.map(function (dot) {
				dot.draw()
			})
		}, 1000 / fps)
		// clicked on canvas
		c.click(function (evt) {
			var x = evt.clientX - canvas.getBoundingClientRect().left,
					y = evt.clientY - canvas.getBoundingClientRect().top
			// clear convex
			convex.dots = []
			// add dot
			dots.push(new Dot(new V(x, y)))
		})
		$.bt('draw convex', function () {
			// move dots to canvas
			dots.map(function (dot) {
				convex.addDot(dot)
			})
			// clear dots
			dots = []
		}).A()
	}
	
	var Dot = function (pos) {
		this.pos = pos
	}
	Dot.prototype = {
		draw: function () {
			ctx.beginPath();
			ctx.arc(this.pos.x, this.pos.y, 2, 0, Math.PI * 2);
			ctx.fill();
			ctx.closePath();
		}
	}
	Convex = function () {
		this.dots = []
	} // a convex hull
	Convex.prototype = {
		draw: function () {
			var _this = this, refDots;
			// loop through dots
			this.dots.map(function (el) {
				var dotAfter;
				// draw dot
				el.draw();
				refDots = _this.copyDots(_this.dots); // copy dots
				// remove el from reference dots
				for (var i = 0; i < refDots.length; i++) {
					if (refDots[i] != el) continue;
					refDots.splice(i, 1);
				}
				// get dot after this dot
				dotAfter = _this.getDotAfter(_this.dots, el);
				// draw direct line
				ctx.moveTo(el.pos.x, el.pos.y);
				ctx.lineTo(dotAfter.pos.x, dotAfter.pos.y);
				ctx.stroke();
			})
		},
		addDot: function (dot) {
			// the dot cannot be added, because it wouldn't be a convex anymore
			if (this.isDotInsideConvex(this.dots, dot)) return;
			// add dot intentionally
			this.dots.push(dot);
			// less than four dots are always a convex
			if (this.dots.length < 4) return;
			// remove dots, which are not in the convex (anymore)
			this.composeConvexHull();
		},
		composeConvexHull: function () {
			var refDots,        // all dots, except the one we are testing
					dot,            // the dot, supposed to be in the new convex
					newDots = [];    // dots, which are definitely part of the convex
			// loop dots
			for (var i = 0; i < this.dots.length; i++) {
				
				// reset dots reference
				refDots = this.copyDots(this.dots);
				// assig dot to the current index
				dot = refDots[i];
				// remove dot from refDots
				for (var h = 0; h < refDots.length; h++) {
					if (h != i) continue;
					refDots.splice(h, 1);
					break;
				}
				// the dot is not inside of the convex, therefore add it
				if (!this.isDotInsideConvex(refDots, dot)) {
					newDots.push(dot);
				}
			}
			// assign new convex
			this.dots = newDots;
		},
		/*
		 copy dots object
		 this is done due to call by reference
		 */
		copyDots: function (ref) {
			var dots = [];
			ref.map(function (dot) {
				dots.push(new Dot(new V(dot.pos.x, dot.pos.y)));
			});
			return dots;
		},
		isDotInsideConvex: function (convexDots, dot) {
			var dotBefore, dotAfter, sign;
			// at least three dots required for a convex
			if (convexDots.length < 3) return false;
			// the dot is definitely not inside the convex hull
			if (this.dotOutsideConvexRect(convexDots, dot)) return false;
			// assign dot before to the closest dot by the angle, which is negative
			dotBefore = this.getDotBefore(convexDots, dot);
			// assign dot after to the closest dot by the angle, which is positive
			dotAfter = this.getDotAfter(convexDots, dot);
			// dot on the inside of the line from dotBefore to dotAfter
			return dot.pos.getSide(dotBefore.pos, dotAfter.pos) == 1;
		},
		/*
		 is the dot outside of the convex rectangle?
		 */
		dotOutsideConvexRect: function (convexDots, dot) {
			var outside = [true, true, true, true];
			for (var i = 0; i < convexDots.length; i++) {
				if (convexDots[i].pos.x < dot.pos.x)
					outside[0] = false;
				if (convexDots[i].pos.x > dot.pos.x)
					outside[1] = false;
				if (convexDots[i].pos.y < dot.pos.y)
					outside[2] = false;
				if (convexDots[i].pos.y > dot.pos.y)
					outside[3] = false;
			}
			return outside[0] || outside[1] || outside[2] || outside[3];
		},
		/*
		 get middle position as vector from the bounding dots
		 */
		getCenter: function (dots) {
			var rect = {xMin: dots[0].pos.x, xMax: dots[0].pos.x, yMin: dots[0].pos.y, yMax: dots[0].pos.y};
			dots.map(function (dot) {
				if (dot.pos.x < rect.xMin) rect.xMin = dot.pos.x;
				if (dot.pos.x > rect.xMax) rect.xMax = dot.pos.x;
				if (dot.pos.y < rect.yMin) rect.yMin = dot.pos.y;
				if (dot.pos.y > rect.yMax) rect.yMax = dot.pos.y;
			});
			return new V((rect.xMin + rect.xMax) / 2, (rect.yMin + rect.yMax) / 2);
		},
		/*
		 get the closest dot before dot from dots
		 */
		getDotBefore: function (dots, dot) {
			var center, bgRad = -Math.PI * 2, dotBefore;
			center = this.getCenter(dots);
			dotRad = center.angleTo(dot.pos);
			dots.map(function (needleDot) {
				var needleRad = center.angleTo(needleDot.pos),
						refRad = needleRad - dotRad;
				if (refRad > 0) refRad = -(Math.PI * 2 - refRad);
				if (refRad <= bgRad) return;
				bgRad = refRad;
				dotBefore = needleDot;
			});
			return dotBefore;
		},
		/*
		 get the closest dot after dot from dots
		 */
		
		getDotAfter: function (dots, dot) {
			var center, smRad = Math.PI * 2, dotAfter
			center = this.getCenter(dots)
			dotRad = center.angleTo(dot.pos)
			dots.map(function (needleDot) {
				var needleRad = center.angleTo(needleDot.pos),
						refRad = needleRad - dotRad;
				if (refRad > 0) refRad = -(Math.PI * 2 - refRad)
				if (refRad >= smRad) return
				smRad = refRad
				dotAfter = needleDot
			})
			return dotAfter
		}
	}
	var V = function (x, y) {
		this.x = x
		this.y = y
	}
	V.prototype = {
		subtract: function (v) {
			return new V(this.x - v.x, this.y - v.y);
		},
		/*
		 this = center, v = destination
		 */
		angleTo: function (v) {
			var ref = this.subtract(v)
			return Math.atan2(ref.y, ref.x) + Math.PI
		},
		/*
		 0 = on line, 1 = inside, -1 = outside
		 */
		getSide: function (v1, v2) {
			return Math.sign((v2.x - v1.x) * (this.y - v1.y) - (v2.y - v1.y) * (this.x - v1.x))
		}
	}
}
PDPS = function () {
	W()
	b = w.brick()
	p = M.p(b)
	p.ps(b, function (p) {
		w.D(300, 400).pol(p).stat()
	})
	w.i.dot(300, 400)
}
VS = function () {
	W()
	b = w.S(400, 200, 'r', 300, 200).rot(-20)//.dot()
	w.pDraw(b.P(), 50, 10).dot()
}
HOL = function () {
	W();
	$l('hol')
	b = w.S(400, 400, 'r', 300, 300).f()
	b1 = w.S(400, 400, 'z', 100, 100).f()
	d = M.p(b).D(b1)
}
HOLE = function () {
	W(0)
	out = w.S(300, 300, 'b', 200, 200)
	inn = w.S(300, 300, 'c', 100, 100)
	out.dif(inn)
	inn.dyn()
}
WALLZ = function () {
	W(10).Y()
	x = w.S(900, 450, 'r', 250, 200)
	bb = w.S(w.w, w.h / 2, 'w', 200, 100)
	w.r_.sub(bb)
	w.r_.C('o')
	bb.kill()
	b = w.S(1200, 300, 'p', 200, 100)
	b1 = w.S(1200, 300)
	DIF(w.r_.f(), b.f())
			.ps(b, function (p) {
				b1.pol(p)
			})
	b.kill()
}
w.md1 = function (fn) {
	return this.md(function (a, b, c) {
		if (self.used) {
			return
		}
		fn(a, b, c)
		self.used = 1
	})
}//
MOREDFF = function () {
	W({w: 0})
	y = w.S(500, 100, 'y', [[100, 100], [100, 100, 0, 0, 45]]).rot(20)
	g = w.S(550, 150, 'g', [[100, 100], [100, 100, 0, 0, 45]])
	y1 = w.S(700, 100, 'y', [[100, 100], [100, 100, 0, 0, 45]]).rot(20)
	g1 = w.S(750, 150, 'g', [[100, 100], [100, 100, 0, 0, 45]])
	w.md1(function () {
		g.sub(y)
		g.dyn()
		y1.sub(g1)
		y1.dyn()
	})
}
DFF1 = function () {
	W()
	var white = w.S(700, 400, 'w', 100, 100),
			red = w.S(700, 400),
			f = red.pol({
				c: 'r', o: .2,
				v: [[-100, 10], [-80, -40], [0, -200], [100, -60]]
			}),
			yellow = w.S(930, 300, 'y', [[100, 100], [100, 100, 0, 0, 45]]),
			green = w.S(1030, 400, 'g', 200, 200)
	w.md(function () {
		white.sub(red, '-')
		red.dyn()
		green.sub(yellow, '-').dyn().lV(-60, -10)
	})
	recV = function () {
		w.pol(400, 300,
				w.S(200, 350, 'b',
						[-80, 10], [0, -150],
						[100, 100]).dif(
						b2d.recV(280, 420, 100, 100)))
	};
	//recV()
}
DES = function () {
	W(0)
	b = w.S(300, 300, 'b', 300, 200).c('b')
	r = w.S(200, 400, 'r', 300, 200).c('r')
	y = w.S(240, 200, 'y', 200, 300, 0, 0, 100).c('y')
	cB = circ = w.D(700, 200)
	cF = circ.pC(50, 10).C('o')
	u1 = cB.uni()
	u = _.m(u1.vs(), function (v) {
		v = V(v)
		return [v.x + cB.X(), v.y + cB.Y()]
	})
	w.pol(600, 300, [u]).C('y')
	_.in(function () {
		b.sub(y, '-');
		b.f().C('r').kill()
	})
	_.in(function () {
		newBod = w.D(600, 100)
		r.ps(function (v) {
			newBod.pol('d', v)
		})
	})
	f = b.f()
	p = DIF(f, r.f())
	p.ps(b, function (p) {
		b.pol(p)
	})
	f.kill()
	r.kill()
	circ.dyn().sub(rect)
	rect.sub(u)
	rect.dyn()
	pC.dyn()
}
MEETMORE = function () {
	W()
	y2 = w.y(400, 300).C('x').rot(180)
	w.S(200, 300, 'b', 200, 800).cl('bul', function (bulletFxt) {
		var bulletBody = bulletFxt.B(),
				bulPos = bulletBody.pos(),
				bulX = bulPos.x,
				bulY = bulPos.y
		bulletBody.kill()
		gPol = gpc.p([[0, 50], [-50, 0], [0, -50], [50, 0]])
		var pol = w.S(bulX, bulY),
				polFxt = pol.pol(gPol)
	})
	w.S(800, 300, 'r', 200, 800).cl('bul', function (bu) {
		this.sub(bu.B().exp(), '-')
	})
}
MEETS = function () {
	W()
	//pol
	w.D(200, 300).pol({
		v: [[0, 100], [0, -100], [200, -150], [200, 150]],
		c: 'y', C: 'w', l: 5,
		bm: 1
	})
	w.D(800, 300).pol({
		v: [
			[[5, 100], [0, -100], [200, -150], [200, 150]],
			[[-50, 50], [-50, -100], [450, -50], [450, 50]]
		],
		c: 'b', C: 'X',
		bm: 1
	})
	b = w.D(100, 300)
	pf = b.pol({
		s: 1, C: 'y',
		v: [[-200, -100], [0, -200], [100, -100]]
	})
	pfs = b.pol({
		s: 1, C: 'o',
		v: [[-100, 0], [0, -200], [100, 20], [0, -150]]
	})
	cf = b.cir({k: 'cir', r: 100, x: 200, y: -100, d: .2, b: .8, f: 100, C: 'x'})
	rf = b.rec({x: 100, y: 100, w: 10, h: 100, C: 'x'})
	//turtle
	turtle = [
		['g', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]],
		['y', [10, -10], [20, -30], [50, -15], [45, -5]],
		['y', [-50, 10], [-50, -10], [-40, -10], [-40, 10]],
		['y', [-10, 10], [-10, -10], [0, -10], [0, 10]],
		['x', 10, 55, -12],
		['u', 30, 40, 75, -12]]
	w.D(400, 280, turtle, '-')  //this changes the data object for future uses !!!
	w.D(600, 280, [
		['g', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]],
		['y', [10, -10], [20, -30], [50, -15], [45, -5]],
		['y', [-50, 10], [-50, -10], [-40, -10], [-40, 10]],
		['y', [-10, 10], [-10, -10], [0, -10], [0, 10]],
		['x', 10, 55, -12, '-'],
		['u', 30, 40, 75, -12, '-']])
}
SEB = function () {
	W({g: 1})//w.show(function(){return b.num()})
	b = w.D(800, 300, 'r', 200, 800).stat().K('terr')
	y = w.y().lD(3).X(1100)
	p = w.p(200, 400).K('jason');
	//setTimeout(function () {p.sprite.sXY(.5)}, 1000)
	can = true
	w.b(function (cx) {
		var fixt, j, bull, terr, bX, bY, br
		if (fixt = cx.w('bul', 'terr')) {
			bull = fixt[0].B()
			terr = fixt[1].B()
			bX = bull.X()
			bY = bull.Y()
			bull.kill()
			if (can) {
				can = false
				b.minusPolyCirc(bX, bY, 100, 7)
				poly = M.p(_.m(b2d.pC(100, 7), function (v) {
					return [v.x + b.X(), v.y + b.Y()]
				}))
				verts = b.sub(poly)
				br = w.pC(bX, bY, 100, 7)  // b.sub(br) // b.verts not working :(
				b.sub(br, '-') // br.kill()
				//  b.color('r')
				can = true
			}
		}
		else if (fixt = cx.w('jason', 'bul')) {
			$l('bullet hit jason!!!!');
			j = fixt[0].body();
			j.sprite.tw([{sxy: 20, r: 100}, 1000])
		}
	})
	f = function () {
		v = h.verts()
		v.unshift('b')
		v.unshift(200)
		v.unshift(200)
		w.B.apply(w, v)
	}
	killIfSmallx = function (f) {
		var area = f.area();
		if (area < 20) {
			$l('too small: ' + area);
			f.kill()
		}
	}
}
TERREASEL = TEE = function () {
	z()
	s = stage = $St(1600, 600).A()
	h = s.h()
	h.f('b').dc(200, 200, 10)
	h2 = s.h().X(700)
	h2.f('b').dc(0, 0, 10)
	tile = function (i, j) {
		return [V(-5 + i, 130 + j), V(-5 + i, 80 + j), V(45 + i, 80 + j), V(45 + i, 130 + j)]
	}   // lower left //upper left//upper right//lower right
	draw = function () {
		terr = []
		_.t(13, function (i) {
			_.t(8, function (j) {
				terr.push(tile(i * 50, j * 50))
			})
		})
		h.drawPolygons(terr, 'b', 'r')
	}
	draw()
	t = M.p(terr[101])
	doExplosion = function (e) {
		v = V(e.stageX, e.stageY)
		exP = circ(v, 100)
		h.drawPolygon(exP, 'z')
		c = Math.p(exP) // for each existing terrain polygon, check the difference between the polygon itself and the
		// explosion polygon. This should be optimized in some way, checking only for terrain polygons
		// which are actually affected by the explosion.
		// Then we remove the terrain polygon from the array, and we add the resulting polygon(s) after
		// difference is calculated.
		iX = c.intersection(t)
		h2.drawPolygon(iX.verts())
		for (var i = terr.length - 1; i >= 0; i--) {
			totalArea = 0
		}
	} // resultPolygons =   terr[i].intersection(exP)// terr.splice(i,1)// for (var j =0; j<resultPolygons.length; j++) {terr.push(resultPolygons[j])}
	circ = function (v, rad, prec) {
		prec = N(prec) ? prec : 20
		arr = [];
		ang = 2 * Math.PI / prec
		_.times(prec, function (i) {
			pX = v.x + rad * Math.cos(ang * i)
			pY = v.y + rad * Math.sin(ang * i)
			arr.push(V(pX, pY))
		})
		return arr
	} // listeners: basically we destroy the terrain with a mouse click or a mouse drag
	// stage.on('mousedown', function(){stage.on('mousemove', doExplosion)})
	// stage.on('mouseup', function(){stage.off('mousemove', doExplosion)})
	stage.on('click', doExplosion)
	vv = [V(645, 480), V(595, 480), V(595, 430), V(645, 430)] //lower right//lower left//upper left//upper right
	h.drawPolygon(vv, 'z')
	vvv = [V(645, 380), V(595, 380), V(595, 372), V(617, 369), V(645, 373)]
	h.drawPolygon(vvv, 'z')
}
TERR = function () {
	W()
	explosion = function (x, y) {
		var c, b
		c = w.pC(x, y, 30, 5)
		b = b2d.sep(circ(V(0, 0), 30, 5)).XY(x, y)
		return {c: c, b: b}
	}
	sep = b2d.sep()
	terr = w.ter()
	w.dot(420, 200);
	w.dot(410, 210)
	t = terr[103]
	/*
	
	
	
	 s = b2d.sep(t.b.f().vs()).stat()//.XY(100,100)
	 exp = explosion(740, 395)
	 M.p(exp.cir)
	
	 dif = t.poly.D(exp.cir)
	
	 t.b.f().kill()
	
	
	 bb = b2d.sep(t.b, dif.vs()).stat().XY(0, 0)
	
	
	 // setTimeout( function(){ t.bod.X(20) }, 2000)
	
	 */
}
TER = function () {
	W().C('z')
	terr = w.ter()
	w.dot(420, 200);
	w.dot(410, 210)
	t = terr[103]
	fn = function (f) {
		f.B().kill()
	}
	o = {x1: 550, y1: 250, x2: 600, y2: 500, fn: fn}
	// w.Q(o)
	w.rad(550, 250, 35, fn)
}
w.cleanup = function () {
	w.e(function (b) {
		if (!b.IsActive) {
		}
	})
}
// is body.Isactive??
//alt way to handle explosion sub
//w.rad(bulletX, bulletY, 15, function (terrainFxt) {terrainFxt.sub( explosionPol )})
function _preApps() {
	union()
	function union() {
		U1 = function () {
			W().D(230, 150).pol('y', w.S(200, 200, [['r', 50, 50], ['o', 10, 100]]).uni())
		}
		U2 = function () {
			W(0).D(800, 350).pol({c: 'y', v: w.S(1000, 300, $vs.CoolPlat).uni('+')})
			w.D(300, 390).pol({c: 'y', v: w.S(300, 100, $vs.CoolPlat).uni('+')})
		}
		U3 = function () {
			W().G(1000).roof.kill()
			RED = w.S(100, 400, 'r', $vs.witch).f()
			d = w.D(350, 400)
			d.pol(RED.uni(w.S(100, 340, 'y', 50, 50).f()))
			d.pol(RED.uni(w.S(150, 420, 'o', 50, 50).f()))
		}
	}
	
	DIMS = function () {
		W([600, 400, 1400, 400], {g: 10})
		y = w.y(100, 200).tr()
		//	w.i.dot(300, 400)
//	w.i.dot(300, 200)
//$l(t.cen())
		wd = w.i.W();
		$l('w.i.W() : ' + wd)
		ht = w.i.H();
		$l('w.i.H() : ' + ht)
	}
}
function verts() {
	$vs = {}
	$vs.expl = [[0, 100], [-100, 0], [0, -100], [100, 0]]
	$vs.witch = [[[-40, -20], [0, -100], [50, 25]]]
	$vs.CoolPlat = [['g', 50, 200], ['o', 200, 50], ['r', 100, 100]]
	$pol = $poly = function (pol, xy) {
		pol = S(pol) ? $vs[pol] : pol
		return $pD(pol).maybeHere(xy)
	}
	MEET = function () {
		W([1200, 600, 1800, 600], {g: 10})
		y2 = w.y(100, 300).C('x').rot(180)
		t = ter = w.S(500, 300, 'g', 200, 800).cl(function (buF) {
			var bu = buF.B(), xy = bu.XY()
			bu.kill()
			pol = gpc.p($vs.expl).ger(xy)
			t.fs(function (f) {
				f.sub(pol)
			})
			t.C('r')
		})
		//alt way to handle explosion sub
		//w.rad(bulletX, bulletY, 15, function (terrainFxt) {terrainFxt.sub( explosionPol )})
	}
}
function later() {
	b.explosion = b.exp = function () {//alert('b.exp is random!')
		var b = this, xy
		xy = b.pos()
		b.kill()
//	return R() ? b2d.sep(b2d.pC(20, 7)).XY(xy) : w.D(xy.x, xy.y).rec( 60, 60).rot(45)
		return w.D(xy.x, xy.y).rec(60, 60).rot(45)
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
	w.vertsDOt = w.vDot = function (d) {
		var w = this
		w.dot('g', _.f(d))
		_.eR(d, function (v) {
			w.dot(v)
		})
		w.dot('r', _.l(d))
		return d
	}
	w.ps = function (x, y, p) {
		alert('w.ps is high level')
		p.ps(this.D(x, y), function (p) {
			b1.pol(p)
		})
	}
	w.polS = function () {
		alert('you found w.polS');
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
	b2d.reg = function (ps, b) {
		$l('b2d.reg')
		return _.m(ps, function (poly) {
			return poly.reg(b)
		})
	}
//gpc.hV = gpc.hPt = gpc.hasVertex = function (gP) {return gP.m_List.get(0)  }//used in MEET
	pD.eachPol = pD.eachPoly = pD.eP = function (fn) {
		var pD = this, polys = []
		_.t(pD.nP(), function (i) {
			fn(pD.g(i), pD, i)
		})
	}
	pD._polys = function () {
		var polys = []
		this.eP(function (poly) {
			polys.push(poly)
		})
		return polys
	}
	pD.polygons = pD.polys = pD.ps = pD.hs = pD.pols = function () {
		$l('pD.polys')
		var pD = this, g = G(arguments),
				o = b2d.iB(g.f) ? {
					polys: b2d.reg(this._polys(), g.f),
					fn: g.s
				} :
						g.N_ ? {
							polys: b2d.reg(this._polys(), V(g.f, g.s)),
							fn: g.t
						} :
						{fn: g.f}
		if (g.p) {
			o.polys = _.m(o.polys, M.p)
		}
		if (F(o.fn)) {
			_.e(o.polys, o.fn);
			return this
		}
		;
		return o.polys
	} // used in MEET
	function oldDIf() {
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
	}
}
function box() {
	b2d.recVerts = b2d.recPoints = b2d.recPts = b2d.recV = function (x, y, w, h) {
		var hW = w / 2, hH = h / 2
		return [[x - hW, y - hH], [x + hW, y - hH],
			[x + hW, y + hH], [x - hW, y + hH]]
	}
	b2d.ptsMinus = b2d.vertsMinus = b2d.sub = function (vs, p) {
		return _.m(vs, function (v) {
			return V(v).sub(p)
		})
	}
	b2d.tF = b2d.toFxt = function (f) {
		return b2d.iB(f) ? f.f() : f
	}
	b2d.iG = b2d.iGP = b2d.isGPoly = function (a) {
		return O(a) && F(a.isHole)
	}
	b2d.miniX = function () {
		iF = b2d.iF;
		iB = b2d.iB;
		iP = b2d.iGP
		pD = function () {
			return new PolyDefault()
		}
	}
	b2d.divPoints = b2d.divPts = b2d.vs = function () {
		var g = G(arguments)
		//all this does is to 'scale down' a series of points
		//can pass in pts naked OR in an array
		return _.m(
				g.s ? g : //passed in verts ([],[],[])
						g.f,
				b2d.div
		) //passed an array [[],[],[]]
		//b2d.div <- function div(v){return V(v).div()}	
	}
	b2d.overlapping = b2d.ol = function (b1, b2) {
		alert('b2d.ol overlapping')
		var v1 = M.p(b1),//wont work yet
				v2 = M.p(b2)
		var p = v1.union(v2)
		return !(_.isEqual(p.vs(), v1.vs()) ||
		_.isEqual(p.vs(), v2.vs()))
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
	b2d.add = function (vs, p) {
		return _.m(vs, function (v) {
			return V(v).add(p)
		})
	}
}
M.p = b2d.gpcPD = function () {
	//it expects worldVerts....
//it works with worldVerts...
//it was designed   with
//that in
//mind
	var g = G(arguments), p, b, fs, vs
	if (b2d.iGP(g.f)) {
		return g.f
	}
	if (b2d.iB(g.f)) {
		vs = g.f.wV()
		_.eR(g.f.fs(), function (v) {
			vs = vs.uni(v)
		})
	}
	else {
		vs = b2d.iF(g.f) ? g.f.wV() :
				g.f
	}
	return $pD(vs)
}
 function _pre() {
	b2d.p();
	gpc = gpcas;
	gpc.g = gpc.geometry;
	ps = gpc.g.PolySimple.prototype;
	pD = gpc.g.PolyDefault.prototype;
	h = cjs.Shape.prototype
	w.polCir = w.pC = function (x, y, pC0, pC1, pC2) {
		var w = this, g = G(arguments), o
		if (g.O) {
			o = g[0]
			return w.D(o.x, o.y).pC(o)
		}
		return w.D(x, y).pC(pC0, pC1, pC2)
	}
	w.withBul = w.withCollideBul = w.cxBul = function (k, fn) {
		var w = this
		this.b(function (cx) {
			cx.w('bul', k, fn)
		})
	}
}
