$load('curve','circle','defs', '_adv','lineTo')


h.dr = function () {
	var h = this, gx = h.graphics, g = G(arguments),
			o = g.O ? g.f : N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g[3]} : {w: g.f, h: g.s}
	o.x = N(o.x, 0);
	o.y = N(o.y, 0);
	o.w = N(o.w, 100);
	o.h = N(o.h, o.w)
	gx.dr(o.x, o.y, o.w, o.h)
	return h
}
h.dr2 = function (x, y, W, H) {
	var h = this, g = G(arguments), o
	if (g.OO_) {
		g.e(function (g) {
			h.dr2(g)
		});
		return h
	}
	o = g.O ? g.f :
			U(g.t) ? {w: g.f, h: g.s} :
			{x: g.f, y: g.s, w: g.t, h: g[3]}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, 50)
	o.h = N(o.h, o.w)
	h.dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
	return h
}
h.rec = function () {
	var h = this, g = G(arguments), o
	if (g.OO_) {
		g.e(function (g) {
			h.rec(g)
		});
		return h
	}
	o = g.O ? g.f :
			S(g.s) ? {c: g.f, C: g.s, x: g.t, y: g[3], w: g[4], h: g[5], l: g[6]} :
					g.S_ ? {c: g.f, x: g.s, y: g.t, w: g[3], h: g[4], l: g[5]} :
							N(g.t) ?
							{x: g.f, y: g.s, w: g.t, h: g[3], c: g[4], C: g[5], l: g[6]} :
							{w: g.f, h: g.s, c: g.t, C: g[3], l: g[4]}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, 50)
	o.h = N(o.h, o.w)
	if (o.i) {
		h.bf(o.i, function () {
			o.i = null;
			h.rec(o)
		})
		return h
	}
	if (o.c) {
		h.c(o)
	}
	if (o.lf) {
		h.lf({
			c1: o.c1 || 'z', c2: o.c2 || 'w',
			s1: 0, s2: 1,
			x: o.x - o.w / 2, y: o.y - o.h / 2,
			x2: o.x - o.w / 2, y2: o.y + o.h / 2
		})
	}
	h.dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
	return h
}
h.es = function () {
	var h = this, gx = h.graphics
	gx.es()
	return h
}
h.cp = function () {
	this.graphics.cp();
	return this
}
h.ef = function () {
	var h = this, gx = h.graphics
	gx.f()
	return h
}
function circle() {
	h._dc = function () {
		var h = this, gx = h.graphics, g = G(arguments),
				o = g.O ? g.f :
				{x: g.f, y: g.s, r: g.t}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.r = N(o.r, 50)
		gx.dc(o.x, o.y, o.r)
		return h
	}
	h.dc = function () {
		var h = this, gx = h.graphics,
				g = G(arguments), o
		if (g.A) {
			return $a(h, 'dc', g.f)
		}
		if (g.OO_) {
			return h.cirs(g)
		}
		o = g.O ? g.f :
				N(g.t) ? {x: g.f, y: g.s, r: g.t, c: g[3], C: g[4], l: g[5]} :
						N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g[3], l: g[2]} :
								N(g.f) ? {r: g.f, c: g.s, C: g.t, l: g[3]} : {c: g.f, C: g.s, l: g.t}
		if (o.c) {
			h.c(o.c)
		}
		if (o.C) {
			h.C(o.C)
		}
		if (N(o.l)) {
			h.l(o.l)
		}
		h.cp()
		h._dc(o)
		return h
	}
	h.cirs = function () {
		var h = this, g = G(arguments)
		g.e(function (c) {
			h.dc(c)
		})
		return this
	}
	cjs.cir = function () {
		var g = G(arguments), o, h
		o = g.O ? g.f :
				(N(g.t) && N(g.s)) ?
				{r: g.f, x: g.s, y: g.t, c: g[3], C: g[4], l: g[5]} :
						N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
								N(g.f) ? {r: g.f, c: g.s, C: g.t, l: g[3]} :
								{c: g.f, C: g.s, l: g.t}
		h = new cjs.Shape()
		o.r = N(o.r, 50)
		o.c = o.c || 'w'
		o.C = o.C || 'z'
		o.l = N(o.l, 4)
		h.dc(o.r, o.c, o.C, o.l)
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		if (N(o.x)) {
			h.regX = -o.x
		}
		if (N(o.y)) {
			h.regY = -o.y
		}
		h.alpha = N(o.al, 1)
		return h
	}
	h.cir = function () {
		var h = this, gx = h.graphics, g = G(arguments), o
		o = g.O ? g.f : N(g.t) ? {x: g.f, y: g.s, r: g.t, c: g[3], C: g[4], l: g[5]} :
				N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
						g.N_ ? {r: g.f, c: g.s, C: g.t, l: g[3]} :
						{c: g.f, C: g.s, l: g.t}
		h.c(o)
		if (o.bf) {
			if (N(o.bf)) {
				o.bm = 'me'
			}
			if (F(Q)) { //async
				h.bf(o.bf, function () {
					h.dc(o)
				})
			}
			else { //sync
				o.tf = o.tf || null;
				h.bf(o.bf, o.tf).dc(o)
			}
		}
		else {
			h.dc(o)
		}
		h.alpha = N(o.al, 1)
		return h
	}
	
	ct.cir = function () {
		
		var ct = this,g=G(arguments),
				h=this.h(), o
		
		
		
		o =  g.O ?  g.f :
				N(g.s)? {x: g.f,  y: g.s, r: g.t,  c:g[3] }:
				{r: g.f, c: g.s}
		o.y = N(o.y, 0);
		o.x = N(o.x, 0)
		o.r = N(o.r, 50)
		h.c(o.c)
		h.dc(o.x, o.y, o.r)
		return h
	}
	
	ct.cir=function(){
		var h=this.h()
		return h.cir.apply(h, arguments)
	}
	
}



function curve(){
	h.arc = h._a = function (x, y, r, startA, endA, aCW) {
		var h = this, gx = h.graphics
		/*
		 Draws an arc defined by the radius, startAngle and endAngle arguments, centered at the position (x, y).
		 For example, to draw a full circle with a radius of 20 centered at (100, 100):
		 arc(100, 100, 20, 0, Math.PI*2)
		 */
		h.arc(x, y, r, startA, endA, aCW)
		return h
	}
	h.arc2 = h._a2 = function (x, y, X, Y, r) {
		var h = this, gx = h.graphics
//Draws an arc with the specified control points and radius.
		gx.arcTo(x, y, X, Y, r)
		return h
	}
	h.bz = h.bez = h.bt = h._bt = function (cp1x, cp1y, cp2x, cp2y, x, y) {
		var h = this,
				gx = h.graphics
		gx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
		return h
	}
	h._qt = function (cpx, cpy, x, y) {
		var h = this, gx = h.graphics
		gx.quadraticCurveTo(cpx, cpy, x, y)
		return h
	}
	h.qt = function (a, b, c, d, e, f) {
		var h = this, gx = h.graphics
		if (O(a)) {
			a = V(a)
			b = V(b)
			gx.qt(a.x, a.y, b.x, b.y)
		}
		else {
			gx.qt(a, b, c, d, e, f)
		}
		return h
	}
	h.de = h.ell = function () {
		var h = this,
				gx = h.graphics,
				g = G(arguments),
				o = N(g[2]) ? {x: g.f, y: g[1], w: g[2], h: g[3]} :
						N(g.f) ? {w: g.f, h: g[1]} :
								O(g.f) ? g.f : {}
		o.x = _.tN(o.x)
		o.y = _.tN(o.y)
		o.w = _.tN(o.w, 100)
		o.h = _.tN(o.h, o.w)
		gx.drawEllipse(o.x, o.y, o.w, o.h)
		return h
	}
	h.de2 = function (x, y, W, H, r) {
		var h = this
		h.de(-W / 2 + x, -H / 2 + y, W, H, r)
		return h
	}
	h._rr=function(){
		this.graphics.rr.apply(this.graphics, arguments)
		return this
	}
	h.rr = function () {
		var h = this,
				gx = h.graphics,
				g = G(arguments),
				o = N(g[3]) ? {x: g.f, y: g[1], w: g[2], h: g[3], r: g[4]} :
						N(g[1]) ? {w: g.f, r: g[1]} :
								N(g.f) ? {w: g.f, h: g[1], r: g[2]} :
										O(g.f) ? g.f : {}
		
		o.x =  N(o.x, 0)
		o.y =  N(o.y, 0)
		o.w =  N(o.w, 100)
		o.h =  N(o.h, o.w)
		
		return h._rr(o.x, o.y, o.w, o.h, o.r)
	}
	h.rr2 = function (x, y, W, H, r) {
		var h = this
		h.rr(-W / 2 + x, -H / 2 + y, W, H, r)
		return h
	}
	h.rc = h.roundRectComplex = function () {
		var h = this, gx = h.graphics
		gx.drawRoundRectComplex.apply(gx, arguments)
		return h
	}
}




h.z = h.clr = function () {
	this.graphics.clear();
	return this
}
h.same = function () {
	return $h(this)
} // h.copy=
AO = function (a) {
	return A(a) && O(a[0])
}




function lineTo(){
}




i.tf = function () {
	var i = this, g = G(arguments)
	if (U(g.f)) {
		return [
			i.x,
			i.y,
			i.scaleX,
			i.scaleY,
			i.rotation,
			i.skewX,
			i.skewY,
			i.regX,
			i.regY
		]
	}
	if (O(g.f) && F(g.f.getTransform)) {
		g.f = g.f.getTransform()
	}
	i.setTransform.apply(i, A(g.f) ? g.f : g)
	return i
}
SIR = function () {
	$.C('b')
	$S({
		body: {fZ: 40, c: 'o'},
		canvas: {M: 20}
	})
	$.h1('SIR')
	st = new cjs.Stage($.c(600, 300)[0]).t()
	st.A(new cjs.Text('h.dc', '50px Arial', 'white').X(400))
	h = $H().a2(st)
	h.dc()
	h.dc(36)
	h.dc(18, 'o')
	h.dc(200, 100)
	h.dc(300, 100, 20, 'r')
	h.dc(300, 200, 20)
	//
	st2 = new cjs.Stage($.c(600, 300)[0]).t()
	st2.A(new cjs.Text('h.cirs', '50px Arial', 'white').X(400))
	st2.A($H().cirs({}, {x: 300, c: 'b'}, {y: 200, C: 'o'}))
	//
	st1 = new cjs.Stage($.c(600, 300)[0]).t()
	st1.A(new cjs.Text('cjs.cir', '50px Arial', 'white').X(400))
	st1.A(cjs.cir(300, 'g'))
	st1.A(cjs.cir(140, 220, 20, 'o').dc())
	st1.A(cjs.cir('r').XY(220, 200))
	st3 = new cjs.Stage($.c(600, 300)[0]).t()
	st3.A(new cjs.Text('cjs.cirs', '50px Arial', 'white').X(400))
	st3.A(
			$H().cirs({}, {x: 300, c: 'b'}, {y: 200, C: 'o'})
	)
}
TSIR = function () {
	$.C('b')
	$S({
		body: {fZ: 40, c: 'o'},
		canvas: {M: 20}
	})
	$.h1('SIR')
	st = new cjs.Stage($.c(600, 300)[0]).t()
	st.A(new cjs.Text('h.dc', '50px Arial', 'white').X(400))
	h = $H().a2(st)
	h.dc()
}


function defs() {
	
	 
	
	oDef = function (o) {
		o = o || {}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.a = N(o.a, 0)
		o.c = o.c || 'z'
		o.C = o.C || 'w'
		o.w = N(o.w, 50)
		o.h = N(o.h, 50)
		return o
	}
}






function _adv() {
	h.pStr = h.dp = h.polyStar = function (x, y, r, sides, ptSiz, ang) {
		var h = this, gx = h.graphics,
				g = G(arguments), o //,  x=g.f,  y=g[1], r=g[2],  sides=g[3], ptSiz=g[4], ang=g[5]
		o = N(g[3]) ? {
			x: g.f, y: g[1], r: g[2], s: g[3], p: g[4], a: g[5]
		} :
				N(g.f) ? {r: g.f, s: g[1], p: g[2], a: g[3]} :
						O(g.f) ? g.f : {}
		o.a = N(o.a, 0);
		o.x = N(o.x, 0);
		o.y = N(o.y, 0)
		o.p = _.cap(o.p, 0, .99)
		gx.drawPolyStar(o.x, o.y, o.r, o.s, o.p, o.a)
		return h
	}
	h.drawPolygons = function (paths, C, c) {
		var h = this
		h.C(C);
		if (c) {
			h.c(c)
		}
		_.e(paths, function (p) {
			h.drawPolygon(p)
		})
		return h
	}
	cjs.diamond = function self(w, h, fc, sc) {
		var h = $H(),
				gx = h.graphics
		sc = sc || 'white'
		w = w || 100
		h = h || w
		hW = w / 2
		hH = h / 2
		gx.f(fc || 'green').s(sc || 'white')
		gx.mt(0, -hH).lt(-hW, 0).lt(0, hH).lt(hW, 0).lt(0, -hH)
		return h
	}
}

function _pre() {
	$H = $h = function () {
		var g = G(arguments), h = new cjs.Shape(),
		//if (cjs.iH(x)) {return new cjs.Shape(x.graphics)}
//pass in your own obj to use 'o.i/o.bf' or 'o.lf' or 'o.rf'
				o = g.O ? g.f :
						g.N_ ? ( N(g[3]) ? // 'c-C-l' pattern
						{x: g.f, y: g.s, C: g.t, l: g[3]} : {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} ) :
							// 'c-C-l' pattern
								N(g.s) ? {C: g.f, l: g.s} :
								{c: g.f, C: g.s, l: g.t}
		_h = h
		h.XY(N(o.x, 0), N(o.y, 0))
		h.c(o.c || 'z', o.C || 'w', o.l || 8)
		if (o.C) {
			h.C(o.C)
		}
		if (N(o.l)) {
			h.l(o.l)
		}
		if (g.p) {
		
			h.dg()
		}
		
		return h
	}
	cjs.iH = function (h) {
		return O(h) && h.graphics
	}
	ct.h = function () {
		var ct = this,
				h = $H.apply($H, arguments)
		ct.A(h)
		return h
	}
	
	h = cjs.Shape.prototype
	//alert
	$Cir = function () {
		alert('$Cir')
		var g = G(arguments), o
		o = g.S_ ? {c: g.f, x: g.s, y: g.t, r: g[3]} : {x: g.f, y: g.s, r: g.t}
		return $H(o.c, o.x, o.y).dc(o.r)
	}
}
