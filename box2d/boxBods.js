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

 