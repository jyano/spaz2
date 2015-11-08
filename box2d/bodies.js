$L('def')
function def(){

bD.XY = bD.p = bD.ps = bD.xy = function (x, y) {
	var bD = this, g = G(arguments), p
	if (g.u) {
		return bD.position.m()
	}
	p = V(g.f, g.s, '-')
	bD.position.Set(p.x, p.y)
	return bD
}
bD.X = function (x) {
	var bD = this, p = bD.XY()
	if (U(x)) {
		return p.x
	}
	return bD.XY(x, p.y)
}
bD.Y = function (y) {
	var bD = this, p = bD.XY()
	if (U(y)) {
		return p.y
	}
	return bD.XY(p.x, y)
}

bD.dyn = function () {
	return this.T(2)
}
bD.stat = function () {
	return this.T(0)
}
bD.kin = function () {
	return this.T(1)
}

bD.ty = bD.T = bD.typ = bD.kind = function (type) {
	if (U(type)) {
		return this.type
	}
	this.type = type
	return this
}
bD.lV = function (v) {
	var bD = this
	if (U(v)) {
		return pD.linearVelocity
	}
	pD.linearVelocity = v
	return pD
}
bD.aV = function (vel) {
	if (U(a)) {
		return this.angularVelocity
	}
	this.angularVelocity = vel
	return this
}

bD.rt = bD.rot = bD.ang = function (ang) {
	//The world angle of the body in radians.
//should fix
//use ang for box and rot for cjs?
	if (U(ang)) {
		return d.angle
	}
	this.angle = ang;
	return this
}

bD.lD = function (dm) {
	var bD = this
	if (U(dm)) {
		return bD.linearDamping
	}
	bD.linearDamping = dm
	return bD
}
bD.aD = function (damp) {
	if (U(damp)) {
		return this.angularDamping
	}
	this.angularDamping = damp;
	return this
}
bD.bul = bD.bull = bD.fR = function (iBu) {
	var bD = this
	if (U(iBu)) {
		return bD.bullet
	}
	bD.bullet = iBu;
	return bD
}

bD.inertia = function (ine) {
	if (U(ine)) {return this.insertiaScale}
	this.insertiaScale = ine
	return this
}

bD.fixedRot = bD.fR = function (isFixed) {
	if (U(isFixed)) {
		return this.fixedRotation
	}
	this.fixedRotation = isFixed;
	return this
}

	bD.act = bD.setActive = function (isActive) {
	this.active = isActive ? true : false
	return this
}
	
	bD.sleepy = bD.aS = function (canSleep) {
	this.allowSleep = canSleep ? true : false
	return this
}
}


b.n = b.num = b.count = function () {
	return this.m_fixtureCount
}
b.GN = b.N = b.next = b.gN = function () {
	return this.GetNext()
}
b.X = function (x) {
	var g = G(arguments),
			pos = this.XY()
	if (U(x = g.f)) {
		return pos.x
	}
	this.XY(
			_.upd(pos.x, x, g), pos.y
	)
	return this
}
b.Y = function (y) {
	var b = this,
			g = G(arguments),
			pos = b.XY()
	if (g.u) {
		return pos.y
	}
	this.XY(pos.x,
			_.upd(pos.y, y, g))
	return this
}
b.XY = function (x, y) {
	var b = this, g = G(arguments),
			newPos, pos
	if (x === '*') {
		x = R(10)
	}
	if (y === '*') {
		y = R(10)
	}
	if (g.u) {
		pos = b.GetPosition()
		return pos.m().tF(0)
	} //used to parseInt.. necessary?
	if (b2d.iB(x)) {
		y = x.Y()
		x = x.X()
	}
	y = N(y) ? y : x
	newPos = V(x / 30, y / 30)
	this.SetPosition(newPos)
	return this
}
b.de = b.d = b.den = function (d) {
	var b = this
	if (U(d)) {
		return b.f().GetDensity()
	}
	b.fs(function (f) {
		f.SetDensity(d)
	})
	b.ResetMassData()
	return b
}
b.fr = b.fric = function (fr) {
	var b = this
	if (U(fr)) {
		return b.f().GetFriction()
	}
	b.fs(function (f) {
		f.SetFriction(fr)
	})
	return b
}
b.re = b.r = b.bo = b.rest = function (r) {
	var b = this
	if (U(r)) {
		return b.f().GetRestitution()
	}
	b.fs(function (f) {
		f.SetRestitution(r)
	})
	return b
}
b.lD = b.linDamp = function (damp) {
	if (U(damp)) {
		return this.GetLinearDamping()
	}
	this.SetLinearDamping(damp)
	return this
}
b.aD = b.angDamp = function () {
	var b = this, g = G(arguments),
			d = g[0]
	if (U(d)) {
		return b.GetAngularDamping()
	}
	if (d == '++') {
		d = 10000
	}
	b.SetAngularDamping(d)
	return b
}
b.rt = b.rot = function (angle, ms) {
	var b = this, g = G(arguments), r = g[0], ms = g[1],
			a = Math.toDegrees(b.GetAngle()) //currAng
	if (U(r)) {
		return a
	}
	if (N(ms)) {
		b.stop = I(function () {
			b.rot(r, '+')
		}, ms)
	}
	else {
		b.SetAngle(M.toRadians(g.p ? a + r : g.n ? a - r : g.m ? a * r : g.d ? a / r : r))
	}
	return b
}
b.iD = function () {
	return this.GetType() == 2
}
b.iK = function () {
	return this.GetType() == 1
}
b.iS = function () {
	return this.GetType() == 0
}
b.H = function () {
	return this.f().H()
}
b.dyn = function (resumeVel) {
	var b = this
	b.type(2)
	if (resumeVel == b && O(b._linVel)) {
		b.lV(b._linVel)
	}
	b._linVel = null
	return b
}
b.stat = function () {
	var b = this,
			v = b.lV()
//huh??? oh can get/set type of body
	b._linVel = V(v.x, v.y)
	b.type(0)
	return b
}
b.kin = function () {
	return this.type(1)
}
b.W = function () {
	return this.GetWorld()
}
b.I = function me(i, v, v2) {
	var b = this, g = G(arguments), o
	//apply impulse. pass impulse as two nums, or obj //and pass in location, defaults to body center
	if (g.A) {
		return b.I.apply(b, g.f)
	}
	o = N(g.s) ? {i: V(g.f, g.s), v: g.t} : {i: g.f, v: g.s}
	o.i = o.i || b.v().d(40)
	o.v = o.v || b.wC()
	b.ApplyImpulse(o.i, o.v.div())
	return b
}
b.F = function () {
	//apply force. pass impulse as two nums, or obj
// and pass in location, defaults to body center
	var b = this, g = G(arguments), o
	o = N(g[1]) ? {f: V(g[0], g[1]), wP: g[2]}
			: {f: V(g[0]), wP: g[1]}
	o.wP = o.wP || b.wC()
	b.ApplyForce(o.f, o.wP)
	if (g.p) {
		cjs.t(function () {
			b.ApplyForce(o.f, o.wP)
		})
	}
	return b
}
////
b.fs = b.e = function (fn) {
	var b = this, g = G(arguments),
			fl = b.f(), fn = g.f, arr = []
	while (fl) {
		arr.push(fl);
		fl = fl.GetNext()
	}
	if (N(fn)) {
		return arr[fn]
	}
	if (F(fn)) {
		_.e(arr, fn);
		return b
	}
	if (b2d.iB(fn)) {
		b.fs(function (f) {
			fn.pol(f)
		})
		return fn
	}
	return arr
	/*
	 if (g.p) {//order by biggest
	 arr = arr.sort(function (a, b) {return b.area() - a.area() }) }
	 if (g.n) {//order by smallest
	 arr = arr.sort(function (a, b) {return a.area() - b.area()}) }
	 */
}
b.wC = function () {
	var b = this,
			w = b.W(), g = G(arguments)
	//gives {x,y}, but of its CENTER-OF-MASS
	if (g.p) {
		return b.XY(w.hW, w.hH)
	}
	return b.GetWorldCenter().m()
}
b.kill = b.xx = b.destroy = function () {
	var b = this, w = b.W()
	b.SetActive(false)
	if (w._preKill) {
		w._preKill(b)
	}
	b.W().DestroyBody(b)
	return b.pos()
}
$load('bodDef', 'obvious', 'wake', 'fixRot','fixDef','fixts','bods')

 
b.wake = b.wakeUp = function () {
	this.SetAwake(true);
	return this
}
b.awake = function () {
	var g = G(arguments)
	this.SetAwake(g.n ? false : true)
	return this
}
b.sleep = function () {
	this.SetAwake(false);
	return this
}
b.fixedRot = b.sFR = b.fR = function (bool) {
	this.SetFixedRotation(bool ? true : false)
	return this
}
b.fR = b.fixRot = function () {
	return this.fixedRot(true)
}
b.FR = function () {
	return this.fixedRot(false)
}

b.sen = function (s) {
	var b = this
	b.fs(function (f) {
		f.sen(s)
	})
	return b
}
b.DFR = b.DFB = function (d, f, r) {
	return this.den(d).fric(f).rest(r)
}
b.DBF = function (d, r, f) {
	var b = this
	b.den(d)
	if (N(r)) {
		this.rest(r)
	}
	if (N(f)) {
		b.fric(f)
	}
	return b
}
 
b.aV = b.angVel = function (vel) {
	if (U(vel)) {
		return this.GetAngularVelocity()
	}
	this.SetAngularVelocity(vel)
	return this
}
b.lV = function () {
	var b = this, g = G(arguments),
			v = b.GetLinearVelocity(), o, lV
	// can pass in V | x,y
	// or if u pass JUST x, it will set ONLY x, keeping y UNTOUCHED
	//(same as vX) .. but why? eh.. can be better, if u already hav vX, no need to default to it
	if (g.u) {
		return v
	}
	lV = U(g[1]) ? V(g[0], v.y) : V(g[0], g[1])
	b.SetLinearVelocity(lV)
	return b.wakeUp()
}
b.vX = function (x) {
	var b = this, g = G(arguments),
			v = b.lV()
	if (g.u) {
		return v.x
	}
	b.lV(x, v.y)
	return b
}
b.vY = function (y) {
	var b = this
	if (U(y)) {
		return b.lV().y
	}
	return b.lV(b.lV().x, y)
}

b.damp = function (l, a) {
	l = N(l) ? l : 1000
	a = N(a) ? a : l
	this.lD(l).aD(a)
	return this
}


 

b.ap = function (met, g) {
	var b = this;
	
	return b[met].apply(b, g)
}

  
b.mid=function(){var b=this, w= b.W()
    return b.XY(
        w.w/2,
        w.h/2
    )
}
b.tf =b.transform=function(tf){var b=this
    if(U(tf)){return b.GetTransform() }
    b.SetTransform(tf)
    return b}
b.lC=   function(){var b=this,w=b.W(),g=G(arguments)
    //gives {x,y}, but of its CENTER-OF-MASS
    if(g.p){return b.XY(w.hW, w.hH) }
    return b.GetLocalCenter().m()
}
b.rmF =    function (f) {
    if(f){this.DestroyFixture(f)}
    else {this.fs(function (f) {this.rmF(f)  })}
    return this
} //= b.xF=  b.Xx=  b.Xf =b.E =  b.clr = b.empty = b.clear
b.hit= b.h=function (x, y, dot) {
    var b = this,
        w = b.W(),
        g=G(arguments),hit=false
    if (g.p) {w.dot(x, y)}
    b.fs(function (f) {
        if (f.hit(x, y)) { hit = true }
    })
    return hit
}
b.$=function(fn){var b=this, w=b.W()

    w.$(function(o){

        w.q(o.x, o.y, function(f){
            if(f.of(b)){ _.b(fn,f)(o) }
        })
    })

    return b

}
b.$$=function(fn){var b=this, w=b.W()
    w.$$(function(o){w.q(o.x, o.y, function(f){

        if(f.of(b)){ _.b(fn, f)(o)}
    })
    })
    return b
}
b.CF = b.cF = function (fD) {
	return this.CreateFixture(fD)
}
b.SP = b.sP = function (x, y) {
	var v = V(x, y)
	this.SetPosition(V(v.x / 30, v.y / 30))
	return this
}
w.S = function () {
	var w = this, g = G(arguments), bD, b, fs, k, o//,D=b2d.D
	if (S(_.l(g))) {
		k = g.pop()
	}
	//here, we just have two options..
	// we can pass in x and y as numbers..
	// or as an object
	// the rest (non-position-related) args form an array of fixtures
	o = g.N_ ? {
		b: V(g.f, g.s),
		f: _.r(g, 2)
	} : {
		b: V(g.f),
		f: _.r(g)
	}
	o.b = b2d.S(o.b)
	if (k) {
		o.k = k
	}
	b = w.cB(o.b)
	if (g.n) {
		o.f.push('-')
	}
	b.f.apply(b, o.f)
	if (o.k) {
		b.K(o.k)
	}
	return b
}
function WSAlpha() {
	//array of multiple fixtures
	if (g.A) {//alert('see w.D'); $l('mult')
		_.e(o.f, function (f) {
			if (g.n) {
				b.f(f, '-')
			}
			else {
				b.f(f)
			}
		})
		if (o.k) {
			b.K(o.k)
		}
		return b
	}
}
//ab = b2d.AB(100 / 30, 100 / 30, 500 / 30, 500 / 30)
//FIXTURE CREATION
b.A = function (fD) {
	this.cF(fD);
	return this
}
fD.DBF = function (d, bo, fr) {
	this.d(N(d, 1))
	this.bo(N(bo, .9))
	this.fr(N(fr, .5))
	return this
}
function spazzy() {
	ADD = function () {
		W().P()
		b = w.brick().C('r')
		p = M.p(b)
		//v=p.vs()
		//p.reg(b)
		w.S(100, 0).pol('z', M.p(b))
		_.in(function () {
			// w.S(0,0).pol('y',v)
		})
		//v1= v.add(400,500)
	}
};
spazzy()
SABB = function () {
	w = $bW().sDD($dD($.c('z', 1800, 1500))) //the_circle = new b2CircleDef()
	_.ev(.1, function () {
		w.go(1 / 5, '+')
	})
	cir = w.dB(220, 60)
	cir.A($cir(60).DBF(1, .7, .4))
	box = w.dB(300, 400)
	box.A($rec(100, 100).DBF(1, .7, .4))
	w.dB(500, 1000).A(
			$rec(1200, 100)).stat()
}
$dJt = function (a, b) {
	var jd = new b2d.DistanceJointDef
	jd.bodyA = a
	jd.bodyB = b
	return jd
}
BOXDISTJOINT = BDJ = function () {
	w = $bW().sDD($dD($.c('z', 1800, 1500))) //the_circle = new b2CircleDef()
	_.ev(.1, function () {
		w.go(1 / 5, '+')
	})
	w.dB(500, 1000).A($rec(1200, 100)).stat()
	b = w.dB(210, 230)
	b.A($cir(70).DBF(1, .3, .4))
	r = w.dB(200, 60)
	r.A($rec(100, 200))
	r.den(1)
	jd = $dJt(b, r)
	w.CreateJoint(jd)
}
ORBOX = function () {
	cir = w.dB(320, 360).stat()
	cir.A($cir(60).DBF(1, .7, .4))
	cir.A(
			$rec(10, 500, 0, 0, 50)
	)
}
 