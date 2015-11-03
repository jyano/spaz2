b2d.p()
//shiffman video explanation: https://www.youtube.com/watch?v=4LYvltd07hk
//dist joint parameters:
//length: //this is rest length... (lengh if spring came to rest)
dJ.len = dJ.l = function (a) {
	var j = this, g = G(arguments),
			l = j.GetLength() * 30
	if (g.u) {
		return l
	}
	j.SetLength(
			_.upd(j, g.f, g) / 30)
	return j
}
//frequencyHrtz: speed/freq  of oscilliation, 	//simple harmonic motion // usually between 1-5
dJ.frq = dJ.freq = dJ.fq = function (fq) {
	if (U(fq)) {
		return this.GetFrequency()
	}
	this.SetFrequency(fq);
	return this
}
//dampingRatio: affects springiness but it's what causes a spring to come to rest // usually 0-1
dJ.dmpRat = dJ.dmp = dJ.damp = dJ.d = function (dR) {
	if (U(dR)) {
		return this.GetDampingRatio()
	}
	this.SetDampingRatio(dR);
	return this
}
// to make a completely rigid distance joint -> make freqHz = 0, dampingRatio = 1 (complete damping and no oscillation at all)
//video: 7min
//where do we put the joint?  could make 'connection' class  which wraps a joint..   // or a 'pair' class with two bods and the joints (and all related info)
b2d.DistanceJointDef = b2d.Joints.b2DistanceJointDef
b2d._dJtDf = function () {
	return new b2d.DistanceJointDef
}
b2d.dJt = b2d.dJ = function () {
	var g = G(arguments), jD, o
	o = {a: g.f, b: g.s}
	if (N(g.t)) {
		o.ancA = V(g.t, g[3])
		o.ancB = V(g[4], g[5])
	}
	if (O(g.t)) {
		o.ancA = V(g.t);
		o.ancB = V(g[3])
	}
	o.ancA = o.ancA || o.a.wC()
	o.ancB = o.ancB || o.b.wC()
	jD = b2d._dJtDf()
	jD.Initialize(o.a, o.b, o.ancA.d(), o.ancB.d())
	return jD
}


b2d.dJ = function () {
	$l('b2d.dJ')
	var g = G(arguments), 
	
	dJD = new b2d.DistanceJointDef
	
	dJD.i = function (a, b, aV, bV) {
		$l('dJD.i')
		var jd = this, 
		g = G(arguments), o
		o = g.O ? g.f : {a: g.f, b: g.s, aV: g.t, bV: g[3]}
		if (o.av) {
			o.aV = o.a.wC().add(o.av || V())
		}
		else {
			o.aV = o.aV || o.a.wC()
		}
		o.bV = o.bv ? o.b.wC().add(o.bv || V()) :
				o.b ? o.b.wC() : o.bV || null
		if (g.n) {
			$l('dJD.i g.n!!! whited out')
			/*
			 if(o.aV){
			 _aV = o.aV
			 o.aV = o.aV.d()
			 }
			 if(o.bV){o.bV = o.bV.d()}
			 */
		}
		jd.Initialize(o.a, o.b, o.aV, o.bV)/////////////////////////
		if (o.cl) {
			jd.cl(true)
		}
		return jd
	}
	
	if (g.f) {
		dJD.i(g.f, '-')
	}
	return dJD
}

w.dJt = w.dJ = function () {
	var w = this, g = G(arguments), jd, j, o
	o = g.O ? g.f : _.x({a: g.f, b: g.s},
			O(g[3]) ? {av: g.t, bv: g[3], l: g[4], f: g[5], d: g[6]} :
					O(g.t) ? {av: g.t, l: g[3], f: g[4], d: g[5]} :
					{l: g.t, f: g[3], d: g[4]})
	jd = b2d.dJ(o)
	if (o.cl) {
		jd.cl(1)
	}
	j = w.J(jd).fq(N(o.f, 0)).d(N(o.d, 0))
	if (N(o.l)) {
		j.l(o.l)
	}
	return j
}
b.dJt = b.dJ = function (nxB) {
	var b = this, w = b.W()
	w.dJ(b, nxB);
	return nxB
}
j.shrink = function () {
	var j = this
	j.len(0.97, '*')
	return j
}
 
DJJ = function () {W().Y()

	b2 = w.D(500, 300, 'w', 18, 450)
	b3= w.S(500, 200, 'r', 70)
	w.dJ(b3, b2)
	//w.dJ(b2, w.D(500, 300, 'g', 90))

}
 
DJY = function () {
	W().Y()
	w.dJ(
			y.XY(200, 200),
			x = w.D(200, 220, 'r', 12))
	w.dJ(x, x = w.D(200, 250, 'r', 12))
	w.dJ(x, x = w.D(200, 280, 'b', 12))
	w.dJ(x, x = w.D(200, 320, 'g', 12))
	w.dJ(x, x = w.D(200, 360, 'u', 12))
	w.dJ(x, x = w.D(200, 420, 'g', 12))
	w.dJ(x, x = w.D(200, 500, 'u', 12))
}
DJ = function () {
	W([1400, 800], {g: 1000}).Y(500, 300);
	xx = w.S(1100, 40, 'x', 40)
	jj = w.dJ({
		a: xx,
		b: w.D(1050, 200, 'r', 20, 60),
		l: 200, cl: 1, coll: 1
	})
	kk = w.dJ(xx, w.D(1100, 200, 'y', 20, 60), 200)
	w.S(800, 40, 'o', 200, 100, '-', 'sen')  //can get triggered many many times?
	w.cl('sen',
			function () {
				jj.wind();
				kk.wind()
			}
	)
}

WANCA = WANCB = FIXEDROTATETHRUST = DROWNING = BALLANDCHAIN = DIST = DST = function () {
	W([600, 600, 600, 1200])
	b = w.D(300, 200, 'b', 150, 140).tr()
	x = w.D(200, 100, 'x', 20).cn('thrust').bS('me').aD(100).fR()
	jD = new b2d.Joints.b2DistanceJointDef
	wAncA = V(300, 200, '-')
	wAncB = V(200, 100, '-')
	jD.Initialize(x, b, wAncA, wAncB)  // dJD.collideConnected = true;
	j = w.J(jD)
}
BRIDE = DISTDOT = LOCDJ = LDJ = function () {
	W([2000, 1400], {})
	x = w.S(300, 400, 'r', 100, 100)
	//b = w.D(400,200, 'b' ,100, 50, 0, 0, 28).fR()
	b = w.y(400, 200, '+')
	j = w.dJ({a: x, b: b})
	_.ev(.2, function () {
		w.dot(j.GetAnchorA().m().x, j.GetAnchorA().m().y)
		w.dot(j.GetAnchorB().m().x, j.GetAnchorB().m().y)
	})
	j.fq(8)
	j.d(0)
	// w.dJ(x,b)
	w.dot('z', 1310, 400)
	w.brg(900, 500);
	_.in(3, function () {
		w.p(900, 100)
	})
}
TPL = SOFTPLAT = SPRING = ACROBAT = SPG = function () {
	W([2000, 1300], {g: 1000}).P(300, 320)
	// y.tr()
	// w.brg(860, 1060)
	//and more..
	// here i bind bodies with fixtures that are alredy out of line
	w.dJ(w.D(800, 100, 'y', 20),
			w.D(800, 150, 'o', b2d.pol(20, 20, 15, 15, 45)),
			30)
	w.dJ(
			w.D(900, 300, 'g', 20),
			w.D(910, 320, 'b', 20, 20),
			30)
	b1 = w.S(200, 200, 'y', 50)
	b11 = w.D(200, 200, 'x', 50, 50)
	w.dJ(b1, b11, 60)
	r = w.D(100, 100, 'r', 40)
	u = w.S(500, 300, 'u', 200, 100)
	j = w.dJ(u, r, V(100, 100)).l(50)
	w.dJ(u, w.D(300, 400, 'b', 20), V(-100, 100)).l(50)
	w.dJ(u, w.D(600, 300, 'g', 20), V(100, -100)).l(50)
	w.dJ({
		a: u,
		b: w.D(300, 400, 'o', 20),
		av: V(-100, -100),
		coll: 1, l: 50
	})
	p.tr().r(1)
	SoftPlat(300, 400)
	SoftPlat(500, 380)
	SoftPlat(700, 340)
	SoftPlat(900, 420)
	function SoftPlat(x, y) {
		x = N(x, 300);
		y = N(y, 60)
		w.dJ({
			a: w.S(x, y, 'z', 8, '-'),
			b: w.D(x, y, 'w', 100, 30).d(1).r(0).fR(),
			l: .1,
			f: 10
		}).d(.1)
	}
	
	w.tpl = function (x, r, fq, d) {
		var w = this, bouncer, j
		x = N(x, 290)
		r = N(r, 75)
		fq = N(fq, 6)
		d = N(d, 0)
		j = w.dJ(
				w.S(x, 1080, 'w', 20, 20),
				w.D(x, 1000, 'b', 200, 20)
						.fR().d(0).r(r).fr(0))
		j.l(115).fq(fq).d(d)
		w.S(x - 120, 1090, 'b', 40, 300).fr(0)
		w.S(x + 120, 1090, 'b', 40, 300).fr(0)
		return j
	}
	w.tpl(200, 0, 6)// not bouncy
	w.tpl(500, 1.2, 6)// too bouncy
	w.tpl(800, .75, 6)// mid bouncy, mid freq
	w.tpl(1100, .75, 2)//low freq
	w.tpl(1400, .75, 12)//high freq
	//_.ev(1,function () {p.I(0, -150)})
	//_.in(15, function(){w.addHundBalls()})
	//freq is SPEED of oscillation
	//damp is STRENGTH of oscillation
	// so bodies cant rotate if they dont have density???
}
REVJTVIN = VINE = VIN = function () {
	W(250).Y().P()
	w.trap(50)
	w.vine(200, 100, 15, 8)
	w.vine(210, 100, 25, 8)
	w.vine(220, 100, 25, 5)
	w.vine(260, 100, 3, 35).rJ(3, 20).rJ(3, 35)
	w.vine(300, 100, 30, 2)
	//blinds
	w.rJ(
			w.link1(600, 20, 3, '+').add(10),
			w.p(500, 200), '+')
	//ropey
	b = w.S(1100, 50, 'g', 60, 15).d(1)
	_.t(10, function (y) {
		w.rJ(
				b,
				b = w.D(1100, y * 20 + 80, 'w', 3, 15).d(1))
	})
	w.rJ(b,
			w.D(1100, 11 * 20 + 50, 'd', 20).d(1))
	p.cl('leaf', function (l) {
		w.jt = w.rJ(l.B(), p.XY(l.B()), R() ? '*' : null)
		$.space(function () {
			w.j(w.jt)
		})
	})
}
REVJTLEASH = LEASH = LSH = function () {
	W()
	p = w.p(300, 200)
	base = link(300, 20).stat()
	l = base.rJ(10)
	w.rJ(l, p.XY(l.X(), l.Y()))
	base = link(100, 20).stat()
	l = base.rJ(10)
	w.rJ(l, p.XY(l.X(), l.Y()))
	function link(x, y) {
		var l = w.rJ(x, y, '+')
		l.l = function (n) {
			var lk;
			n = N(n) ? n : 1
			_.t(n, function () {
				lk = link(l.X(), l.Y() + 10)
				r = w.rJ(l, lk)
				l = lk
			})
			return l
		}
		return l
	}
	
	/*
	
	 w.link2 = function(x,y){var w=this,b
	
	 b=w.rJ(x,y,'+')
	
	 b.l=function(n){var b=this, w=b.W()
	 _.t(N(n,1), function(){
	 w.rJ(b, b=w.l(b.X(),b.Y()+15))
	 })
	 return b}
	
	 return b
	
	 }
	
	 link3 = function(x,y){
	 var l= w.D(x,y,'y', 5, 10).d(4).r(2)
	 l.l= function(n){
	 _.t(N(n,1), function(){
	 l = link3(l.X(),l.Y()+20)})
	 return l}
	 return l}
	
	 link0=function(x,y){return w.D(x,y, 'w', 3, 15).d(1).fr(0).r(0)}
	
	 p2= w.p(1000,200)
	 base2 = w.link2(1000,20).stat()
	 l2 =  base2.rJ(10)
	 w.rJ(l2,p2)
	
	
	 w.$(function(){
	 base3 = link3(600,20).stat()
	 l3 =  base3.l(10)
	 })
	
	
	
	 w.floor.r(0)
	 prev = top = w.S(400,50,'g', 60,15)
	 _.t(10, function(i){var next
	 next=link(255,(i+1)*30)
	 prev = prev.rJ(next)})
	 //body.rev(body2) returns body2 !!!!!
	 w.rJ(prev, w.D(400, 330, 'd',20).d(1).r(0))
	
	
	
	
	 y = w.y(600,170).rot(265).stat()
	 w.cl('bu',function(f){
	 if(!f.of(y)){f.B().kill()}
	 })
	
	 */
}
//body.GetTransform()
//body.GetFixtureList().GetShape()
DJTSTRING = function () {
}
function bridge(){
DJTBRIDGE = function () {

//two bodies at ends must be static
}

};bridge()
function springs(){
	WSPG = function () {
		W([1400, 800], {g: 1000}).Y(500, 300);
		y.tr()
		w.S(400, 500, 'r', 4, 2000)
		w.dJ({
			a: w.D(200, 200, 'b', 50),
			b: w.D(300, 200, 'b', 60),
			l: 50, f: 3, d: .1,
			cl: 1
		})
		w.dJ({
			a: w.D(200, 200, 'd', 50, 50),
			b: w.D(300, 200, 'd', 60, 60),
			l: 50, f: 3, d: .1, cl: 1
		})
		w.dJ(w.D(200, 200, 'o', 50), w.D(300, 200, 'o', 40)).l(50).fq(3).d(.1)
		w.spg(w.S(200, 100, 'g', 10).sen(1), w.D(200, 250, 'b', 250, 10).K('rec')).fq(3).d(.1)
		oj = w.dJ(w.D(830, 700, 'o', 50).bS('me'), w.S(900, 0, 'o', 50, 50)).l(200).fq(5).d(.1)
		T.t(function () {
			if (oj.l() > 1) {
				oj.l(oj.l() - .002)
			}
		})
	}
	ACROBAT = SPG = function () {
		W()
		w.spg(
				w.S(500, 100, 'o', 10, '-'),
				w.D(500, 250, 'r', 250, 10).K('rec')
		).fq(3).d(1)
		w.spg(
				w.S(1200, 125, 'c', 10, '-'),
				w.D(1200, 275, 'r', 250, 10).K('rec')
		).fq(10).d(.5)
		w.dJ(
				w.D(600, 300, 'z', 30),
				w.S(900, 500, 'z', 50, 80, 0, 0, 20)
		).l(20).fq(5).d(.1)//.coll(false)
		w.dJ(
				w.D(130, 450, 'b', 30),
				w.S(130, 800)
		).l(120).fq(5).d(0)//.coll(true)
	}
	DJTMESH = function () {
	}

	SPRINGS = RAGDOLL = RAGD = RAG = function () {
		W({})
		w.spg(
				b1 = w.D(100, 100, 'b', 30),
				w.D(100, 200, 'r', 40))
		w.dJ(
				b2 = w.D(100, 400, 'g', 30, 30),
				w.D(100, 500, 'o', 40, 40)
		)
		p = w.me(500, 200)
		w.spg(b1, p)
		w.spg(b2, p)
	}
};springs()
/*
 jd.freq=  function(a){
 if(U(a)){return this.frequencyHz}
 this.frequencyHz=a;return this
 }
 jd.len=function(len){
 if(U(len)){return this.length*30}
 this.length=len/30
 return this}
 jd.damp = function(a){if(U(a)){return this.dampingRatio}
 this.dampingRatio=a;return this}

 */
function err() {
	SPOLL = function () {
		W({g: 0, w: 0});
		Q(function () {
			s = w.s
			e = w.S(200, 200, 'p', 100)
					.d(1).r(2)
					.bS({i: q.b('sun'), sc: .13})
					.K('earth');
			eI = e.ch()
			// p= w.player(200,200,2.5, 'thrust').d(.4).aD(8).lD(.8)
			p = w.D(200, 200).cn('thrust').Bm('me', 0, 0, 0.25 * sc)
			w.dJ({a: p, b: e, l: 50, f: 100.15, cl: 1})
			T.t(function () {
				var sp,
						dx = e.X() - p.X(),
						dy = e.Y() - p.Y(),
						sc = cjs.cap(300 /
						M.sqrt(dx * dx + dy * dy), .3, 2)
				s.X(300 - sc * (p.X() - 300))
				s.Y(150 - sc * (p.Y() - 150))
			})
		})
	}
}
/* overlap??
 http://www.box2d.org/manual.html - also has other stuff
 b2Transform xfA = …, xfB = …;

 bool overlap = b2TestOverlap(shapeA, indexA, shapeB, indexB, xfA, xfB);
 */
function sports() {
	MARBLES = function () {
		W().Y()
		w.dJ(
				y.XY(200, 200),
				x = w.D(200, 220, 'r', 12))
		w.dJ(x, x = w.D(200, 250, 'r', 12))
		w.dJ(x, x = w.D(200, 280, 'b', 12))
		w.dJ(x, x = w.D(200, 320, 'g', 12))
		w.dJ(x, x = w.D(200, 360, 'u', 12))
		w.dJ(x, x = w.D(200, 420, 'g', 12))
		w.dJ(x, x = w.D(200, 500, 'u', 12))
	}
}