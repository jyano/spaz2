w.Chain = function (fn) {
	var w = this
	var chain = {
		JS: [],
		NS: []
	}
	chain.eJ = function (fn) {
		_.e(this.JS, fn)
		return this
	}
	chain.eN = function (fn) {
		_.e(this.NS, fn)
		return this
	}
	chain.f = function (fq) {
		return this.eJ(function (j) {
			j.fq(fq)
		})
	}
	chain.d = function (d) {
		return this.eJ(function (j) {
			j.d(d)
		})
	}
	chain.l = function (l) {
		return this.eJ(function (j) {
			j.l(l)
		})
	}
	chain.j = function () {
		var g = G(arguments)
		var j = w.J($a(b2d.dJ, g))
		this.JS.push(j)
		return j
	}
	chain.J = function (o) {
		var j = this.j(o.a, o.b)
		if (N(o.f)) {
			j.fq(o.f)
		}
		if (N(o.d)) {
			j.d(o.d)
		}
		if (N(o.l)) {
			j.l(o.l)
		}
		return j
	}
	return chain
}

CHAIN = DISTROPE = ROPE = ROP = function () {
	W([1000, 600], {})
	//p.lD(2).fR()//.r(1.6)
	// p.stat()
	chain = w.Chain()
	p = w.p(300, 300, 2);
	v0 = w.S(200, 100, 'r', 15).d(15)
	v1 = w.D(300, 150, 'y', 15).d(15)
	v2 = w.D(200, 200, 'g', 15).d(15)
	
	chain.j(v0, v1)//.fq(20).d(0)
	return

	chain.j(v1, v2)//.fq(20).d(0)
	chain.j(p, v2, p.X(), p.Y() - 40, v2.X(), v2.Y())//.fq(30).d(1)
	// T.t(function(){  p.F(0,20)  })
	// _.e(js, function(j){ j.l(40).fq(12).d(3)  })
	// p.F(0,100,'+')
	// chain.d(0).f(60)
	chain.d(.4).f(12).l(40)
}
