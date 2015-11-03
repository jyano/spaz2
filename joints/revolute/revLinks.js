w.vine = function (x, y, n, m) {

	n=N(n,10)
	
	return this.rJ(x,y,n,'/').rJ(n,m).K('leaf')
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
w.link1 = function self(x, y, n) {
	var g = G(arguments),
			b = w.rJ(x, y, '*')
	b.add = function (n) {
		var b = this
		_.t(N(n, 1), function () {
			var nB
			nB = w.rJ(b.X(), b.Y() + 24, '*')
			w.rJ(b, b = nB)
		})
		return b
	}
	if (g.p) {
		b.stat()
	}
	if (N(g[2])) {
		b.add(g[2])
	}
	return b
}
//shrink = function(){_.e(ropeJoints, function(j){j.shrink()})}
//marionette game?  


w.vertRopeFact= w.verticalRopeFactory=function(x, radius, colorDf){
$l('rf')
	var w=this
	//  u must specify location, which is just x
	// and optionally, a radius
	radius = N(radius, 10)
	return function (y, color) {
	
		var g=G(arguments), bod
		// u must specify location, which is just y
		// and optionally, a color
		color = color || colorDf || $r()
		bod = w.D(x, y, color, radius)
		if(g.n || g.d){bod.stat()}
		return bod
	}
	
}
VERTREVROPE = VRR= function () {W({m: 0, g: 0}).Y()
	lk = w.vertRopeFac(600)// previously: function Link(y){return w.D(600,y,$r(),10)}
	b =  lk(100,'/')
	l =  lk(120)
	w.rJ(b,l)
	w.rJ(l,l = lk(140))
	w.rJ(l,l = lk(160))
	w.rJ(l,l = lk(200))
}




REVROPE = PEARLS = RRP = RVP = function () {
	W(300).C('z')
 	link = w.S(100, 120, 'z', 20, 20)
	js = []
	_.t(19, function () {
		js.push(
				w.rJ(
						link,
						link = w.D(
								link.X(),
								link.Y() + 10, 'w', 3).d(3000)))
	})
	link.rJ(w.p().cn('jump'))
	j = js[3]
}
REVROPEALT = RVO = function () {
	W()
	w.S(600, 300, 'z', 50, 50).rJ(25).C('z').rJ(w.y(300, 300).cn('thrust'))
	p = w.p(300, 200).cn('thrust').r(2)
	base = Link(300, 20, 10)//.stat()
	link = base.rJ(10)
	w.rJ(link, p.XY(link.X(), link.Y()))
	base = Link(100, 20).stat();
	l = base.rJ(10);
	w.rJ(l, p.XY(l.X(), l.Y()))
}
REVROPEREDUCED=RVP = function () {W(300).C('z').P(); p1= w.p()
	  
	 
	 l =  w.S(100, 120, 'o', 20, 20)
	
	
	js = []
	 _.t(20, function(){js.push(rJt())})
	 l.rJ(p)
	 j = js[3]
	 
	 function rJt(){
		 var x = l.X()
		 var y = l.Y() + 10
		 var bod = w.D(x, y, 'w',  4)
		 bod.den(3000)
		 var jt =  w.rJ(l, bod)
		 l = bod
		 return jt
	 }
	 
	 
	 
}



//not working... freezes actually
//tries to call rJ right of a joint ???!
REDROPE = RED=function () {
	W([1200, 600], {g: 0})
	  anchor = w.S(600,300,'z',50,50)
	  anchor.rJ(15).C('z').rJ(w.y(300,100).cn('thrust'))
}
REDROPEALT = RRAA= function(){
	W([1200, 600], {g: 0})
	w.S(200, 100, 'z', 50, 50)
			.rJ(200, 150, 'b', 30)//.rJ(200, 180, 'r', 30).rJ(200, 260, 'o', 10)
	
}