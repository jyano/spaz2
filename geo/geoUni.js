b.U = function () {
	var b = this, g = G(arguments)
	var pD = b.pD()
	g.e(function (arg) {
		pD = pD.U(arg)
	})
	return pD.tlNeg(b)
}
UNIF = function () {
	W()
	b = w.S(300, 400, [['b', 100, 40, 40, 40, 39]])
	x = w.S(300, 400, [['x', 30, 40]])
	vs = b.U(x.pD())
	w.pol(300, 300, vs)
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
	return p.tlNeg(b)
	//n= p.getNumInnerPoly()
	//to do now!
	//if it receives a body, i should uni all thatbody's fixs against it
	//dont worry about rebuilding the body first? hmm....
}
$UNI = function () {
	var g = G(arguments)
	if (g.A) {
		return g.ap($UNI)
	}// << return $a($UNI,g.f)
	var pD = M.p(g.f)
	g.eR(function (pol) {
		pD = pD.U(M.p(pol))
	})
	return pD
}
b.uni = function () {
	var b = this, g = G(arguments)
	var fs = b.fs()
	if (g.u) {
		return !g.n ? $UNI(fs).tlNeg(b) :
				$UNI(fs)
	}
	//unite with fixt or first-fixt(of body)
	if (O(g.f) && !F(g.s)) {
		return b.f().uni(b2d.tF(g.f))
	}
}
GER3 = function () {
	W().D(1050, 500).pol(
			w.S(900, 500, [
				['g', 30, 80],
				['b', 40, 50, 20, 0],
				['r', 50, 20, 50, 0, 20]]).uni()
	)
}
U1 = function () {
	W().D(230, 150).pol('y',
			w.S(200, 200, [['r', 50, 50], ['o', 10, 100]]).uni())
}
U2 = function () {
	W(0).D(800, 350).pol({c: 'y', v: w.S(1000, 300, $vs.CoolPlat).uni()})
	w.D(300, 390).pol({c: 'y', v: w.S(300, 100, $vs.CoolPlat).uni()})
}
U3 = function () {
	W().G(1000).roof.kill()
	RED = w.S(100, 400, 'r', $vs.witch).f()
	d = w.D(350, 400)
	d.pol(RED.uni(w.S(100, 340, 'y', 50, 50).f()))
	d.pol(RED.uni(w.S(150, 420, 'o', 50, 50).f()))
}
UNII = function () {
	W(50).Y()
	p1 = M.p(sqr)
	p2 = M.p(combo)
	pol1 = M.p(p1)
	pol = pol1.U(p2)
	p = w.pol(300, 300, pol)
	p1 = w.pol({x: 300, y: 200, v: pol1})
	p0 = w.pol({x: 300, y: 200, v: p1})
	p.XY(500, 200)
	w.polU(500, 200, p1, p2)
	w.polD(600, 200, p1, p2)
	b = w.S(520, 120, 'b', 50, 50)
	r = w.S(500, 100, 'r', 50, 50)
	w.polU(500, 200, b, r)
	d = w.S(500, 200)//.dot('y')
	f = d.pol({c: 'w', C: 'z', l: 5, v: b.sum(r)})
	f[0].C('z');
	f[2].C('o')//f is an ARRAY OF FIXTS!!!
}

///

GER = function () {
	W(30)
	b = w.S(500, 200, 'b', 100, 100)
	vs = b.U(
			w.D(600, 400, 'B', 100, 100).pD()
	)//.dot(w)
	//x=	$UNI(w.S(700, 200, 'x', 100, 100), w.D(750, 250, 'r', 100, 100))//.dot(w)
//	vs = b.U( x )
	w.pol(300, 200, vs)
}
GER1 = function () {
	W(30)
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
}

b2d.iG = b2d.iGP = b2d.isGPoly = function (a) {
	return O(a) && F(a.isHole)
}
w.polU = function (x, y, p1, p2) {
	//alert('w.polU')
	return this.pol(x, y, M.p(p1).U(p2))
}
pD.plus = function (x, y) {
	//alert('pD.plus')
	return M.p(_.m(this.vs(), function (v) {
		return V(v).add(x || 0, y || 0)
	}))
}
pD.U = function () {
	var pD = this, g = G(arguments), uP
	if (b2d.iB(g.f)) {
		uP = pD.U(g[0].f())
		_.eR(g.f.fs(), function (f) {
			uP = pD.U(f)
		})
		return uP
	}
	return pD.union(M.p(g[0]))
}
b.sum = function (b1) {
	return $UNI(this, b1).vs(this, '-')
}


SAUCERS = SAU=function () {
	W(0).roof.kill()
	b = w.S(300, 300, [['g', 30, 30], ['b', 100, 6], ['o', 100, 6, 0, 30]])
	//one way
	
	b1 = w.D(400, 300).vX(-10)
	
	_.e(b.p(), function (v) {
		b1.pol({x:300,y:399,c: 'r', v: v})
	})
	
	return
	//better way
	b1 = w.D(500, 500).vX(10)
	b.ps(function (v) {
		b1.pol({v: v})
	})
	//best way below.. next ex:
}


  BEST= function () {
	W(0).roof.kill()
	
	b = w.S(300, 300, [['g', 30, 30], ['b', 100, 6], ['o', 100, 6, 0, 30]])
	
	b.copy(500, 450)
	
	//b.vY(-10)
	  return
	  pD = $UNI(
			w.S(400, 280, 'y', 30, 30),
			w.S(420, 300, 'o', 30, 30),
			w.S(420, 300, 'g', 100, 6),
			w.S(420, 310, 'g', 100, 6, 0, 30))
	
				
	  p=pD.ps(420, 300)
	  w.$(function (o) {w.D(o.x, o.y).pol({v: p}).aV(2)})
}