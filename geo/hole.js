function alpha() {
	pD.wV = function (x, y) {
		var pD = this
		pD.ePol(function wPol(pS, n) {
			pS.tlNeg(x, y)
		})
		return pD
	}
}
w.pD = w.polDyn = function (x, y, pD, wV) {
	var w = this
	var b = w.D(x, y)
	pD.ePol(function wPol(pS, n) {
		var vs = pS.wV(wV).vs()
		_.e(b.pol(pS.iH() ? vs.reverse() : vs), function (f) {
			if(pS.iH()) {
				f.C('o').al(.8)
				//f.SetSensor(true)
			 }
			else {
				f.C('w').al(.4)
			}
		})
	})
	return b
}
HOU = function () {
	W(600, 600).C('z').y()
	blue = w.pC(300, 300, 'b').stat().al(.5)
	red = w.pC(350, 300, 'r', 60, 6).stat().al(.5)
	b = w.pD(100, 300,
			blue.pD().U(red.pD()),
			blue
	).aV(6)
	// this is blue diff red.. so the outside of blue is left.. with a hole
}
HOU2 = function () {
	W(600, 600).C('z').y()
	blue = w.pC(300, 300, 'b').stat().al(.5)
	red = w.pC(450, 300, 'r', 60, 6).stat().al(.5)
	b = w.pD(100, 300,
			blue.pD().U(red.pD()),
			blue
	).aV(6)
	// this is blue diff red.. so the outside of blue is left.. with a hole
}
HOD = function () {W(600, 600).C('z')
	
	blue = w.pC(300, 300, 'b').stat().al(.5)
	red = w.pC(300, 300, 'r', 20).stat().rt(10).al(.5)
	w.pD(100, 300,
			blue.pD().D(  red.pD()  ),
			blue
	).aV(6)
	// this is blue diff red.. so the outside of blue is left.. with a hole
}
HOD1 = function () {
	W(600, 600).C('z').y()
	blue = w.pC(300, 300, 'b').stat().al(.5)
	red = w.pC(330, 300, 'r', 30).stat().rt(10).al(.5)
	
	w.pD(100, 300,
			blue.pD().D(red.pD()),
			blue
	).aV(6)
	// this is blue diff red.. so the outside of blue is left.. with a hole
}

HOX = function () {
	W(600, 600).C('z').y()
	green = w.pC(200, 300, 'g', 30, 6).stat().al(.5)
	blue = w.pC(380, 300, 'b',30).stat().al(.5)
	red = w.pC(320, 300, 'r', 60, 6).stat().al(.5)
	
	w.pD(500, 200, red.pD().X( blue.pD()) , red)
	w.pD(200, 200, red.pD().X(green.pD()), red)
	w.pD(500, 400, red.pD().U(blue.pD()), red)
	w.pD(200, 400, red.pD().U(green.pD()), red)
	// this is blue diff red.. so the outside of blue is left.. with a hole


}
HOI1 = function () {
	W(600, 600).C('z').y()
	blue = w.pC(300, 300, 'b').stat().al(.5)
	red = w.pC(350, 300, 'r', 60, 6).stat().al(.5)
	w.pD(100, 300,
			blue.pD().I(red.pD()),
			blue
	).aV(6)
	// this is blue diff red.. so the outside of blue is left.. with a hole
}

HOI = function () {W(600, 600).C('z')//.y()

	b = w.pCS(300, 300, 'b') 
	
	g = w.S(320, 270, 'g', 80,60)
	r = w.pCS(350, 350, 'r', 60)
	
	b = w.pD(100, 300, b.pD().I(g.pD()).I(r.pD()), b)
	b.cn('thrust')
	return b
}
 
w.pCS=function(){return this.pC.apply(this, arguments).stat().al(.3)}

CLONESCALE = CLSC = function(){
	 b = HOI().C('b')
	 c = b.clone(100,300).C('r')
}