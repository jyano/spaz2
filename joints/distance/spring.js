
w.spg = function (a, b) {
	var w = this;
	a = a || w.D(150, 150, 'b', 50)
	b = b || w.S(180, 150, 'w', 50, 50)
	return w.dJ({a: a, b: b, l: 1, f: 2})
}

w.brg = function (x, y) {
	var w = this, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10
	x = N(x, 400);
	y = N(y, 100)
	FIRST = w.S(x, y, 10)
	LAST = w.S(x + 700, y, 'b', 10)
	b2 = wood()
	b3 = wood()
	b4 = wood()
	b5 = wood()
	b6 = wood()
	b7 = wood()
	b8 = wood()
	b9 = wood()
	_.e([
				[FIRST, b2],
				[b2, b3], [b3, b4], [b4, b5], [b5, b6], [b6, b7], [b7, b8], [b8, b9],
				[b9, LAST]
			],
			function (p) {
				w.dJ({
					a: p[0], b: p[1],
					l: 6, f: 5,
					coll: 1
				})
			})
	function wood() {
		return w.D(100, 100, 'd', 90, 60).d(1).fixRot()
	}
}

j.wU = j.wu = j.wind = function () {
	var j = this, wound
	cjs.t(function () {
		var l, m
		m = wound ? 1.01 : .99
		l = j.l() * m
		j.l(l * m)
		if (l < 5) {
			wound = 1
		}
		if (l > 200) {
			wound = 0
		}
	})
}

//default freq is 0.  but thats like freq 10000000
//freq is tightness.  the default (0) is all the way tight.
//if u want to start to loosen it.  change from 0 to a very high number!
//try 50.. then u will see that it budges just a little.
//ok.. now keep going down..
// eventually it is too loose to fight against gravity
// hahaha then its just flat and usesless
// ok all this assumed a default damp of 0.
// now set the freq to a good oscillation (3 or 4)
// then play with the damp
// damp is like a tightner on your looseness
// it makes you less stretchy?
// just leave damp at 0 for now, and play with freq
//game:: he autojumps.  u jump to give him a double jump!

  
b.ch = function (n) {
	if (this.gx) {
		return this.gx.children[N(n, 0)]
	}
}

//w.l(0,0,w.W,w.H); w.l(w.W,0,0,w.H,'+')
// game:: density:  if u want to fit in here.. u will have to lower yourself a bit to our level..
// you see, compared to you, we a really quite dense. Not dense as in stupid, but as in, we have a high mass to volume ratio.
//  In otherwords, we can't jump!  It's a grave grave situation.
// Don't get me wrong, not grave as in bad, but grave, as in, it relates to gravity.  Additionally, it's quite bad.
// ok so freq is how much strngth u need to pull it??
// as freq gets low.. u can pull it farther away
// its the strength of the spring
// dont ever set a dJ().len(0)
//location pams are optional,
// and be default to their center points
// note: if you passe them in,
// pass them as relative(local to body) coords
//BOX2D requires them as WORLD points
// - for some reason..
// (but i think my way has more use cases)
//pass coll:true -> 'collideConnected=true'
  