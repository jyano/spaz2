MEETY = function () {
	W([600, 400, 1400, 400], {g: 10}).y(100, 200).tr()
	w.S(500, 300, 'o', 200, 800).expl('*')
}


b.expl = function (c) {var b = this
	b.cl(function (f) {
		b.subF('expl', f.B().killXY())
		if (c) {b.C(c === '*' ? $r() : c)}
	})
	return b
}



pD.hasAtLeastOnePoly = function () {
	return this.m_List.get(0)
}
pD.ifHasPol = function () {
	var pD = this
	if (pD.hasAtLeastOnePoly()) {
		return pD
	}
}
pD.bigEnough = function () {
	return this.getArea() > 2000
}
pD.tooSmall = function () {
	return !this.bigEnough()
}
pD._dif = function (pol) {
	return this.difference(pol)
}
pD.dif = function (pol) {
	return this._dif(gpc.p(pol))
}
pD._D = function (pol) {
	var pD = this
	return b2d.iB(pol) ? pol.difPol(pD) :
			pD.dif(pol)
}
pD.D = function () {
	var pD = this
	G(arguments).e(function (pol) {
		pD = pD._D(pol)
	})
	return pD
}
f.wV = function () {
	var f = this, b = f.B()
	return b2d.tA(b2d.add(
			f.vs(), V(b.X(), b.Y())))
} 
f.dif = function () {
	var f = this, g = G(arguments)
	var pD = f.tGP()
	g.e(function (v) {
		pD = pD.D(v)
	})
	pD = pD.tlNeg(f.B())
	if(g.n){f.kill()}
	return   pD.ifHasPol() 
}
f.sub = function (f1) {var f = this, b = f.B(), g = G(arguments)
	var pD  = f.dif(f1, '-')   //   kill THIS f
	if (g.n) {f1.kill()}
	if (g.p) {f1.dyn()}
	if (  pD.bigEnough()  || g.m) {b.pol(pD)}
	return f
}


b.subF = function (f1, xy) {
	return this.fs(function (f) {f.sub($pol(f1, xy))})
}
b.subB = function (b1) {
	return this.fs(function (f) {
		b1.sub(f)
	})
}
b.sub1 = function (pol) {
	var b = this, g = G(arguments)
	if (b2d.iF(pol)) {
		b.subF(pol)
	}
	else if (b2d.iB(pol)) {
		b.subB(pol)
	}
	if (g.n) {
		pol.kill()
	}
	return b
}
b.sub = function () {var b = this, g = G(arguments)

	g.e(function (pol) {
		b.sub1(pol, g.o)
	})
	
	
	if (g.f !== 0) {
	//	b.C(g.f || b.c())
	}
	return b
}
 
 
 
 
b.difPol = b.scrapeMeWithPol = b.pDWo = b.gPolWo = function (dP) {
	var b = this
	b.fs(function (f) {
		dP = dP.D(f)
	})
	return dP
}
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
function api(){
	function fSubRambling() {//otionally put a min size to allow it to be replaced
		//i guess if it's too small, don't bother
		//but calculating area could also be bottleneck?
		//f.sub uses f.dif and replaces itself on a body
		// with its (potentially) 'slimmer' self
		//lets begin:
		// we get the dif of the this and the thing we are subtracting from it...
		//here, body makes a new f from the dif (hence, it might be slimmer)
		//again... it is fixtizing the result of the gPol subtraction operation
		// it subtracted something from this... killed itself..
		// .. and now is adding a NEW fixture to replace itself..
		//but the new fixture is the difference result of subtracting something else, from it
		//so after that subtraction, it killed itself, and and now 
		// we are replacing the body that held that fixt, replaces it with the resutl
		// of the difference between it and another fixt
		//now that other thing that we subtracted from our fixt before it was killed and replaced..
		//..letst talk about that thing
		//we can optionally kill that thing too!!
		//it may have been a real manufactured body or fixt
		//... though there should be a better way than that!!! !!!! :=)(+
	}}
f.uni = function () {
	var f = this,
			b = f.B(), g = G(arguments), p, n
	
	//can handle a fixt OR a body!
	//-> [f]
	
	if (g.A) {return $a(f, 'uni', g.f)}
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
U1 = function () {
	W().D(230, 150).pol('y',
	 w.S(200, 200, [['r', 50, 50], ['o', 10, 100]]).uni())
}
b.uni = function () {var b = this, g = G(arguments)
	  
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
U2 = function () {
	W(0).D(800, 350).pol({c: 'y', v: w.S(1000, 300, $vs.CoolPlat).uni( )})
	w.D(300, 390).pol({c: 'y', v: w.S(300, 100, $vs.CoolPlat).uni( )})
}
U3 = function () {
	W().G(1000).roof.kill()
	RED = w.S(100, 400, 'r', $vs.witch).f()
	d = w.D(350, 400)
	d.pol(RED.uni(w.S(100, 340, 'y', 50, 50).f()))
	d.pol(RED.uni(w.S(150, 420, 'o', 50, 50).f()))
}
