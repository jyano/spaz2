$L()
b.diffX = function (b1) {
	return this.wC().x - b1.wC().x
}
b.diffY = function (b1) {
	return this.wC().y - b1.wC().y
}
w.rJ = function () {var w = this, g = G(arguments), o
	
	o = b2d.iB(g.f) ? {a: g.f, b: g.s} : g.f
	 
	//if (g.p) {g.s.XY(g.f)}
	
	var jD = $rJD(o.a, o.b)

	if (N(g.fo)) {
		 
		jD.lAA(g.t, g.fo)
		if (N(g.si)) {
			jD.lAB(g.fi, g.si)
		}
	}
	else if (O(g.fo)) {
		 
		jD.lAA(g.fo)
		if (O(g.fi)) {
			jD.lAB(g.fi)
		}
	}
	else {
		jD.aV(o.b.diffX(o.a), o.b.diffY(o.a))
	}
	
	//if (g.m) {jD.cl(true)}
	return w.J(jD)
}
w.rJ_ = function (a, b) {
	var w = this
	var j = w.rJ.apply(w, arguments)
	return j.B()
}
b.rJ_ = function (b1) {
	var b = this, w = b.W()
	return w.rJ_(b, b1)
}
b.addLk = function (gap, fn) {
	var b = this, w = b.W()
	var b1= fn( b.X(), b.Y() ).Y(  N(gap, 10),'+' )
	return b.rJ_(b1)
}
b.addLks = function (n, gap, lkFn) {
	var b = this, w = b.W()
	var l = b
	_.tValue(n, function () {
		return l = l.addLk(gap, lkFn)
	})
	return l
}
w.Chain = function (gap, lkFn) {
	return function (x, y, n) {
		var lk = lkFn(x, y).stat()
		return lk.addLks(n, gap, lkFn)
	}
}
VRV = function () {W()
	ys = $arr(3, function () {
		return w.y(300, R(100, 100))
	})
	lk = w.zBrk(400, 300).lks(8, 15)

	w.Chain(10, $lkFn.pearl)(100, 120, 19)
	cir = $lkFn.cir
	w.rJ_(w.rJ_(w.rJ_(w.rJ_(cir(600, 100).stat(), cir(600, 120)),				
			cir(600, 140)), cir(600, 160)), cir(600, 200))
	_.in(5, function () {
		_.e(ys, function (y) {
			y.rJ(lk)
		})
	})
}
KLL = function () {
	W().G(0)
	w.hook({x: 200, y: 100, numLks: 10, h: 10, space: 20}, '/')
	w.hook({x: 400, y: 100, numLks: 10, h: 10, space: 0}, '/')
	$.rulers()
}

b.lks = function (y, n) {
	var b = this
	y = N(y, 8)
	
	_.t1(n, function () {
	
		b = w.rJ_(
				b,
				$lkFn.red(b.X(), b.Y()).Y(y, '+') )
	
	})
	
	return b
}
w.link1 = function () {
	var w = this, g = G(arguments)
	var b = w.rJ(g.f, g.s, '*')
	if (g.p || g.d) {
		b.stat()
	}
	if (N(g.t)) {
		b.add(g.t)
	}
	return b
}
w.vine = function (x, y, n, m) {
	n = N(n, 10)
	return this.rJ(x, y, n, '/').rJ(n, m).K('leaf')
}
w.trap = function (x, y) {
	var w = this
	x = N(x, 300);
	y = N(y, 50)
	w.vine(x, 100, 5)
	w.vine(x + 20, y, 6)
	w.vine(x + 40, y, 10)
	w.vine(x + 60, y, 10)
	w.vine(x + 80, y, 6)
	w.vine(x + 90, y, 4)
	return w
}
w.hookBall = function (x, y) {
	return this.D(x, y, 'b', 20).DFB(1, 0, 1.1)
}
w.hookLink = function (x, y, ht) {
	ht = N(ht, 15)
	return this.D(x, y, 'y', 3, ht).DFB(1, 0, 0)
}
w.hook = function () {
	var w = this, g = G(arguments), o, lk
	o = g.O ? g.f : {x: g.f, y: g.s, numLks: g.t, h: g.fo, space: g.fi}
	o.space = N(o.space, 20)
	lk = w.hookLink(o.x, o.y, o.h)
	if (g.d) {
		lk.stat()
	}
	_.t(o.numLks - 1, function (i) {
		lk = lk.hook(
				o.x,
				lk.Y() + o.h + o.space,
				o.h)
	})
	w.rJ(lk, w.hookBall(o.x, o.numLks * (o.h + o.space) + o.y))
	//hook 
// pass x , y, num links
//l = l.hook(  w.hookLink(x, i * 30 + y)  )
//w.rJ( l,  l = w.hookLink(x,i * 30 + y) )
}
w.rJt = function () {
	var w = this
	var x = l.X()
	var y = l.Y() + 10
	var bod = w.D(x, y, 'w', 4)
	bod.de(3000)
	var jt = w.rJ(l, bod)
	l = bod
	return jt
}
b.rJ = function () {
	var b = this, w = b.W(), g = G(arguments), o, n
	o = {b1: b2d.tB(g.f), yOff: g.s}
	return o.b1 ?
			w.rJ_(b, o.b1.XY(b.X(), b.Y())) :
			b.lks(g.s, g.f)
}
b.chainLink = function (yOffset) {
	yOffset = N(yOffset, 24)
	var b = this, w = b.W()
	return w.rJ(b.X(), b.Y() + yOffset, '*')
}
b.add = function (n) {
	var b = this
	_.t(N(n, 1), function () {
		w.rJ(b, b = b.chainLink())
	})
	return b
}
b.hook = function (x, y, ht) {
	var b = this, w = b.W()
	var lk = O(x) ? x : w.hookLink(x, y, ht)
	j = w.rJ(b, lk)
	//$l('l: '+ j.l())
	return lk
}
b.go = function (b1) {
	return this.XY(b1.X(), b1.Y())
}
 
function _pre() {
	$arr = function (n, fn) {
		var arr = []
		_.t(n, function (i) {
			arr.push(fn(i, arr))
		})
		return arr
	}
	_.t1 = function () {
		var g = G(arguments)
		var o = g.N_ ? {n: g.f, fn: g.s} : {fn: g.f}
		_.t(N(o.n, 1), o.fn)
		return _
	}
	w.zBrk = function (x, y) {
		return this.S(x, y, 'z', 50, 50)
	}
	_.tValue = function (n, fn) {
		var res
		_.t(n, function (n, i) {
			res = fn(n, i)
		})
		return res
	}
	$lkFn = {}
	$lkFn.w = $lkFn.white = $lkFn.pearl = function (x, y) {
		return w.D(x, y, 'b', 8).d(300)
	}
	$lkFn.r = $lkFn.red = function (x, y) {
		return w.D(x, y, 'r', 4, 20).de(4).bo(2)
	}
	$lkFn._ = $lkFn.cir = function (x, y) {
		return w.D(x, y, $r(), 10)
	}
//b1 = function (x, y) {return w.D(x, y, 'y', 10, 10).de(1).bo(.5)}
//b2 = function (x, y) {return w.D(x, y, $r(), 50, 15)}
}
function more(){
	b.rJHere = function (b1) {
		return this.rJ(b1.go(this))
	}
	w.chain = function (x, y, gap, lkFn, n) {
		var w = this
		var Chain = w.Chain(gap, lkFn)
		return Chain(x, y, n)
	}
}