$L('polyCir','verts')
 
 
 
 
//subtract from one vert
v.sub = v.s =function () {var v = this, g = G(arguments),o
	o = V(g.f, g.s)
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	return V(v.x - o.x, v.y - o.y)
}

//subtract from a whole bunch of verts and get back array
b2d.sub =  function (vs, p) {
	return _.m(vs, function (v) {
		return V(v).sub(p)
	})
} //b2d.ptsMinus = b2d.vertsMinus =
v.add = v.a = function () {
	var v = this, g = G(arguments) //if (g.t) {return _.m(g, function (g) {return v.add(g)})}
	var v1 = g.u ? V(1, 1) : V(g.f, g.s)
	return V(v.x + v1.x, v.y + v1.y)
}
b2d.add = function (vs, p) {
	return _.m(vs, function (v) {
		return V(v).add(p)
	})
}
pD.tlNeg = pD.reg =  function (x, y) {var pD=this
	
	var v= V(x, y)
	return M.p( b2d.sub( pD.vs(), v  ))
}// pD.tl2 = pD.translate =   pD.from = pD.cameFrom =pD.translateBackTo =pD.rel =

pD.tl    =  function (x, y) {
	var pD = this
	return M.p(b2d.add(pD.vs(), V(x, y)))
}//pD.tlAdd = pD.butHere = pD.to = pD.at = pD.ger =

pD.maybeTl = function (xy) {
	var pD = this
	return xy ? pD.tl(xy) : pD
}//= pD.maybeHere


$pol = $poly = function (pD, xy) {
	pD = S(pD) ? $vs[pD] : pD
	return $pD(pD).maybeTl(xy)
}










function polyCir() {
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
}
function verts() {
	$vs = {}
	$vs.expl = [[0, 100], [-100, 0], [0, -100], [100, 0]]
	$vs.witch = [[[-40, -20], [0, -100], [50, 25]]]
	$vs.CoolPlat = [['g', 50, 200], ['o', 200, 50], ['r', 100, 100]]
}
function _pre() {
	b2d.p();
	w.cleanup = function () {
		w.e(function (b) {
			if (!b.IsActive) {
			}
		})
	}
	w.withBul = w.withCollideBul = w.cxBul = function (k, fn) {
		var w = this
		this.b(function (cx) {
			cx.w('bul', k, fn)
		})
	}
	
	w.$$fall = function () {
		var w = this
		w.$$(function () {
			w.fall()
		})
		return w
	}
	w.fall = function () {
		return this.e(function (b) {
			b.dyn()
		})
	}
	TURTS = function () {
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
	gpc = gpcas;
	gpc.g = gpc.geometry;
	ps = gpc.g.PolySimple.prototype;
	pD = gpc.g.PolyDefault.prototype;
	h = cjs.Shape.prototype
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
