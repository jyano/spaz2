$pC = function (rad, numVxs) {
	var g = G(arguments) 

	
	  rad = N(rad, 50)
	 numVxs = N(numVxs, 5)
	var ang = 2 * M.PI / numVxs
	var vxs = []
	//alpha: _.arr = function(){var g=G(arguments), arr=[]}
	_.t(numVxs, function (vx) {
		  vx = V(
				M.cos(ang * vx) * rad,
				M.sin(ang * vx) * rad)
		vxs.push(g.p ? vx : [vx.x, vx.y])
	})
	//returns an arr of rel verts
	return vxs
}
b.pC = function () {var b = this, g = G(arguments), o
	o = g.O ? g.f :
			g.S_ ? {col: g.f, rad: g.s, num: g.t}
					: {rad: g.f, num: g.s}
	o.col = o.col || 'v'
	b.pol($pC(o.rad, o.num))
	return b.C(o.col)
}
f.pC = function (n) {var f = this, g = G(arguments)
	var pC = f
	if(f.isCir() ) {pC  =  $pC(f.rad(), N(n, 10))  }
	if(g.n){return pC}
	return  M.p( pC )
}

PC = BPC = FPC = function () {
	W({w: 0}).C('o')
	_.fnEv(.5,
			function penta() {
				w.S(200, 300).pC('r', 60, 5)
				w.S(400, 300).pC('b', 80, 10)
			},
			function polDeca() {
				w.pC(700, 300, 'y', 120, 15)
				w.S(600, 500).pol(
						w.S(800, 500, 'w', 50).f().pC(10, '*')
				)
			})
} 


$L()
w.pC = function ( ) {
		var w = this, g = G(arguments), o
 	if(g.O){return w.D(g.f.x, g.f.y).pC(g.f)}
	var b = w.D(g.f, g.s)
	b.pC.apply(b, _.r(g, 2))
	return b
}
WPC=function(){W().C('w')
	w.pC(300, 300, 'b', 120,5)
	w.pC(300, 300, 'r', 120, 4)
	w.pC(300, 300, 'x', 120, 3)
	w.pC(300, 300, 'x', 120, 2)
}

b.minusPolyCirc = b.mPC = function (x, y, r, sides) {
		var b = this, pC, p
		pC = $pC(r, sides)
		p = _.m(pC, function (v) {
			v = V(v)
			return [v.x + x, v.y + y]
		})
		vs = $DIF(b, p).ps(b)
		//b.clear()
		b.pol(vs)
		return b
	}
PCD = function () {
	W(600,600).C('y').$$fall()
	blue = b = victim = w.pC(300, 300, 'b' ).stat().al(.5)
	vic = victim.pD()
	
	red = r= bullet = w.pC(290, 330,'r' ).stat().rt(10).al(.5)
	 
	
	bul = bullet.pD() 
	
	res = vic.difference(bul)
	res2 = bul.difference(vic)
	vs = res.tlNeg(bullet).vs()
	vs2 = res.tlNeg(victim).vs()
	
	_.inx(2, function(){
		victim.kill()
		bullet.kill()
		
		w.pol(300, 400, vs2).C('b').stat()
		w.pol(300, 400, vs).C('r')//.stat()
	})
	
	 
}
PCI = function () {
	W(600, 600).C('y').$$fall()
	blue =  victim = w.pC(300, 300, 'b').stat().al(.5)
	vic = victim.pD()
	red =   bullet = w.pC(290, 330, 'r').stat().rt(10).al(.5)
	bul = bullet.pD()
	
	u = vic.union(bul)
	d = vic.difference(bul)
	i = vic.intersection(bul)
	x = vic.xor(bul) 
	
	_.in(.2, function () {
		victim.al(.3) 
		bullet.al(.3)
	 	dif()
		int()
		uni()
		xorT()
		xorB()
 	})
	
	function dif() {
		var vs0 = d.tlNeg(blue).vs()
		var b = w.S(100, 300)
		b.pol(vs0)
		b.C('b')
		b.fs(function(f){f.al(.5)})
		_.in(function(){b.dyn()})
	}
	
	function int() {
		var vs1 =  i.tlNeg(blue).vs()
		var b = w.S(100, 300)
		b.pol(vs1)
		b.C('r').al(.5)
		_.in(function () {
			b.dyn()
		})
	}
	
	function uni() {
		var vs1 = u.tlNeg(blue).vs()
		var b = w.S(300, 100)
		b.pol(vs1)
		b.C('g') 
		b.fs(function (f) {
			f.al(.5)
		})
		_.in(function () {
			b.dyn()
		})
	}
	

	function xorT() {
		var vs1 = x.getPoly(1).tlNeg(blue).vs()
		var b = w.S(400, 300)
		b.pol(vs1)
		b.C('a')
		b.fs(function (f) {
			f.al(.5)
		})
		_.inx(function () {
			b.dyn()
		})
	}
	
	function xorB() {
		var vs1 = x.tlNeg(blue).vs()
		var b = w.S(400, 300)
		b.pol(vs1)
		b.C('a')
		b.fs(function (f) {
			f.al(.5)
		})
		_.inx(function () {
			b.dyn()
		})
	}
}
PCH = function () {

	W(600, 600).C('y').$$fall()
	blue = victim = w.pC(300, 300, 'b').stat().al(.5)
	vic = victim.pD()
	red = bullet = w.pC(300, 300, 'r', 30).stat().rt(10).al(.5)
	bul = bullet.pD()
	d = vic.difference(bul)
	
	hol = d.g(1)
	ho = hol.tlNeg(blue)
	vs = ho.vs()
	
	//blue.kill()
	//red.kill()
	
	b = w.S(100, 300)
	b.pol(vs.reverse())
	
	b.C('z')
	
	_.in(function () {
		b.fs(function (f) { f.al(.5) })
		//b.dyn()
	})
}


function _pre() {
	_.run = function () {
		var g = G(arguments)
		return g.F_ ? g.f.apply(null, g.r) : false
	}
	_.fnEv = function () {
		var g = G(arguments)
		var secs = g.N_ ? g.shift() : 1
		_.run(g.shift())
		_.ev(secs, function () {
			_.run(g.shift())
		})
	}
}
function _post(){
	w.pC__ = function () {
		return this.S(830, 270).pC('z', 80, 10)
	}
}