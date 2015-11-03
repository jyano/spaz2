b2d.p()
 
 
pJD.ax = pJD.axis = pJD.lAA = function () {
	var pJD = this, g = G(arguments),
			v = V(g[0], g[1])
	pJD.localAxisA.Set(v.x, v.y)
	pJD.localAxisA.Normalize()
	return pJD
}


pJD.refRot=pJD.refAng=pJD.rt = pJD.rA = pJD.ang = function (a) {
	var pJD = this
	if (N(a)) {pJD.referenceAngle = M.tR(a)}
	return pJD

}


pJ.lm = pJ.limits = function () {
	var pJ = this,
			g = G(arguments), v, l, u
	if (U(g[0])) {
		if (g.p) {
			pJ.EnableLimit(true);
			return pJ
		}
		else if (g.n) {
			pJ.EnableLimit(false);
			return pJ
		}
		else if (g.d) {
			pJ.lm(pJ.lm());
			return pJ
		}
		return pJ.m_enableLimit
	}
	v = V(g[0], g[1]).div()
	pJ.SetLimits(v.x, v.y) // ? pJ.SetLimits(l/30, (u+1)/30) ?
	if (g.N) {
		pJ.EnableLimit(true)
	}
	return pJ
}
pJ.maxMotForc=pJ.max = function (f) {
	var pJ = this
	if (U(f)) {
		return pJ.m_maxMotorForce
	}
	pJ.SetMaxMotorForce(f)
	return pJ
}

pJ.speed=pJ.motSpeed=pJ.sp = function (s) {
	var pJ = this
	if (U(s)) {
		return pJ.GetMotorSpeed()
	}
	pJ.SetMotorSpeed(s)
	return pJ
}

pJ.moFo=pJ.getMotForc=pJ.gMotForc=pJ.motForc=pJ.F = function (f) {
	var pJ = this
	if (U(f)) {
		return pJ.GetMotorForce()
	}
	//pJ -> apply a force f
	return pJ
}

pJ._eM = pJ.EnableMotor
pJ.eM=function(eM){
	this._eM(eM?true:false)
	return this
}

pJ.mt = function () {
	var pJ = this, g = G(arguments)
	if (N(g[0])) {
		pJ.SetMotorSpeed(g[0])
		pJ.SetMaxMotorForce(N(g[1], 1000))
		if (g.N) {
			pJ.EnableMotor(true)
		}
	}
	else if (g.n) {
		pJ.EnableMotor(false)
	}
	else if (g.p) {
		pJ.EnableMotor(true)
	}
	return pJ
}



pJ.uL = pJ.U = function (uL) {
	var j = this
	if (U(uL)) {
		return j.GetUpperLimit() * 30
	}
	j.lm(j.lL(), uL)
	return j
}
pJ.lL = pJ.L = function (l) {
	var j = this
	if (U(l)) {
		return j.GetLowerLimit() * 30
	}
	j.lm(l, j.U())
	return j
}
pJ.UL = function (u, l) {
	return this.U(u).L(l)
}
pJ.LU = function (l, u) {
	return this.L(l).U(u)
}
pJ.tl = pJ.val = pJ.tran = function (val) {
	return parseInt(this.GetJointTranslation() * 30)
}

pJ.limits=pJ.enLim=pJ.lm = function () {
	var j = this, g = G(arguments), o
	o = A(g[0]) ? {
		lL: g[0][0],
		uL: g[0][1]
	} :
	{lL: g[0], uL: g[1]}
	if (g[0] == 1) {
		j.EnableLimit(true);
		return
	}
	if (g[0] == 0) {
		j.EnableLimit(false);
		return
	}
	j.SetLimits(o.lL / 30, o.uL / 30)
	if (g.N) {
		j.EnableLimit(true)
	}
	return j
}

w.prism = function (a, b, x, y, rot) {
	var w = this, jd, j
	jd = new b2d.Joints.b2PrismaticJointDef()
	a = A(a) ? a : [a]
	jd.bodyA = a[0]
	jd.localAnchorA = O(a[1]) ? a[1].div() : V(a[1], a[2], '-')
	b = A(b) ? b : [b]
	jd.bodyB = b[0]
	jd.localAnchorB = O(b[1]) ? b[1].div() : V(b[1], b[2], '-')
	jd.axis(x, y)
	jd.ang(O(x) ? y : rot)
	o = O(g[0] && !b2d.iB(g[0])) ? g[0]
			: _.x({b1: g[0], b2: g[0]},
			O(g[2]) ? {axis: g[2], a: g[3]} : {axis: V(g[2], g[3]), a: g[4]})
	g[0] = A(g[0]) ? g[0] : [g[0]]
	g[1] = A(g[1]) ? g[1] : [g[1]]
	o.A = g[0][0]
	o.aV = O(g[0][1]) ? g[0][1].div() : V(g[0][1], g[0][2], '-')
	o.B = g[1][0]
	o.bV = O(g[1][1]) ? g[1][1].div() : V(g[1][1], g[1][2], '-')
	jd.axis = V(g[2], g[3])
	jd.a = O(g[2]) ? g[3] : g[4]
	if (A(o.a)) {
		o.aV = V(o.a[1], o.a[2])
		o.a = o.a[0]
	}
	if (A(o.a)) {
		jd.bodyA = o.a[0]
		if (O(o.a[1])) {
			jd.localAnchorA = o.a[1]
		}
		else if (N(o.a[1])) {
			jd.localAnchorA = V(o.a[1], o.a[2], '-')
		}
	}
	else {
		jd.bodyA = o.a
	}
	jD.bodyA = o.a
	if (A(o.b)) {
		o.bV = V(o.b[1], o.b[2])
		o.b = o.b[0]
	}
	if (A(o.b)) {
		jd.bodyB = o.b[0]
		if (O(o.b[1])) {
			jd.localAnchorB = o.b[1]
		}
		else if (N(o.a[1])) {
			jd.localAnchorB = V(o.b[1], o.b[2], '-')
		}
	}
	else {
		jd.bodyB = o.b
	}
	jD.bodyB = o.b
	o.aV = o.aV || o.a.wC();
	jD.localAnchorA = o.aV.div()
	o.bV = o.bV || o.b.wC();
	jD.localAnchorB = o.bV.div()
	if (N(o.x)) {
		jd.ax(o.x, o.y).rA(o.a)
	}
	else if (O(o.x)) {
		jd.ax(x.x, x.y).rA(y)
	}
	jD.axis(o.ax)
	jD.rt(o.rA)
	return w.J(jd)
}
w.pJ = function () {
	var w = this, g = G(arguments), o, j,
			jd = new b2d.PrismaticJointDef
	o = b2d.iB(g.f) ?
	{a: g.f, b: g[1], ax: g[2], rA: g[3]} : g[0]
	jd.bodyA = o.a
	jd.bodyB = o.b
	o.aV = o.aV || [0, 0];
	jd.aV(o.aV)
	o.bV = o.bV || [0, 0];
	jd.bV(o.bV)
	o.ax = o.ax || [0, 1];
	jd.ax(o.ax)
	o.rA = o.rA || 0;
	jd.rA(o.rA)
	j = w.J(jd)
	if (o.lm) {
		j.lm(o.lm)
	}
	return j
}
w.Elv = function (x, y, H) {
	var w = this, elv, wire, j, speed = 10
	x = N(x, 400)
	j = w.pJ({
		a: wire = w.S(x, w.h - 200, 's', [[60, 60, '-']]).d(1).fr(1),
		b: elv = w.D(x + 100, w.h - 300, 'd', 200, 40).d(.1).K('elv'),
		lm: [-250, 100]
	}).mt(speed)
	elv.cl(
			_.debounce(reverse, 200, true)
	)
	function reverse() {
		j.mt(speed *= -1)
	}
}

ELV=function(){W()

	w.Elv()

}

w.elev = function (x, yy, H) {
	var w = this,
			y = w.h - yy,
			elv,
			speed = 5,
			wire, j
	j = w.pJ(
			wire = w.S(x, y - H / 2, 'w', [[100, H, '-']]),
			elv = w.S(x, y - 300, 'm', 30).r(3).K('elv').bS('sun'),
			V(0, 1)
	).lm(-H / 2, H / 2).mt(-100)
	elv.cl(_.th(function () {
		j.mt(speed *= -1)
	}, 200, {trailing: false}))
	elv.cl(function (p) {
		p.B().lV(0)
	})
}

ELEVS = function () {
	W([1200, 600, 2400, 1200], {g: 400})
	w.p(100, 300, '+')
	w.elev(300, 100, 300)
	w.elev(600, 100, 500)
	w.elev(900, 300, 400)
	w.elev(200, 500, 300)
	w.elev(400, 800, 200)
	w.elev(600, 600, 500)
	w.elev(750, 700, 300)
	w.elev(900, 900, 300)
}
BUMPER = function () {
	W().P(800)
	j1 = w.pJ(w.D(200, 500, 'z', 60).K('ride'),
			w.S(200, 500, 's', 40, 150).K('cart'))//.lm(-30, 60).speed(-100).motor(1).maxForce(1000)
			.lm(-30, 60).mt(-10)//.speed(-100).maxForce(1000)
	j2 = w.pJ(w.D(400, 500, 'z', 110).K('ride'),
			w.S(400, 500, 's', 40, 300).K('cart'))
			.lm(-30, 60).mt(10)//.speed(-100).maxForce(1000)
	w.pJ(
			w.D(600, 500, 'z', 80).K('ride'),
			w.S(600, 500, 's', 40, 250).K('cart')
	).lm(-30, 60).mt(-100)//.speed(-100).maxForce(1000)
	w.b(function (cx) {
		cx.w('cart', function () {
			w.e(function (b) {
				if (b.of('ride')) {
					b.I(0, -1000)
				}
			})
		})
	})
}

 //// OLD //////

	PRISM0 = function () {
		W(5)
		p = w.player(500, 200, 'thrust').den(1).fric(1)
		j = w.pJ({
			a: w.S(400, 300, 's', 40, 40).den(1).fric(1),
			aV: [-30, 2],
			b: w.D(500, 200, 'd', 200, 40).den(1).K('box'),
			ax: V(1, -2),
			rA: 45
		})
		speed = 10
		j.mt(speed)
		w.beg(function (cx) {
			cx.with('box',
					function () {
						speed *= -1
					})
			j.mt(speed)
		})
	}
	//jd.mS(-100000).lT(-12).uT(12.5).eL(true).eM(true).mMF(10)//works
	b2d.pJ = function (b1, b2, lXA, lAA, lAB, rA) {//b2d.prismaticJointDef = PrismaticJointDef = prJt=
		var j = new b2d.Joints.b2PrismaticJointDef()
		j.mt = function (a, b, c) {
			j.mS(a)
			j.mMF(N(b) ? b : 100)
			if (c != '-') {
				j.eM(1)
			}
			return j
		}
		j.lm = function (lT, uT, enableLimit) {
			j.lT(lT).uT(uT)
			if (enableLimit != '-') {
				j.eL(true)
			}
			return j
		}
		if (D(b1)) {
			j.A(b1)
		}
		if (D(b2)) {
			j.B(b2)
		}
		//local direction A ? the angle of the actual slider joint
		j.lXA(D(lXA) ? lXA : V(0, 1))
		//local axis A
		j.lAA(D(d) ? lAA : b1.worldCenter())
		//local axis B
		j.lAB(D(e) ? lAB : b2.worldCenter())
		// something with rotation
		if (D(rA)) {
			j.rA(rA)
		}
		return j
	}
	w.Prism = function (a, b, c, d, e, f, g, h) {
		return this.J(b2d.pJ(a, b, c, d, e, f, g, h))
	}
	w.elevx = function (x) {
		var elev = {}
		elev.plat = this.rect(x, 100, 100, 10).den(1).K('elev')
				.coll(function () {
					elev.flip()
				})
				.collWithKind('player', function (p) {
					p.linVel(0)
				})
		elev.base = this.brickSensor(x, 150, 1, 100).den(1).fric(100)
		elev.j = this.prism(elev.plat, elev.base, V(0, 1))
		elev.speed = 2
		elev.j.mt(elev.speed)
		elev.flip = _.throttle(function () {
			this.j.mt(this.speed *= -1)
		}, 200, {trailing: false})
		return elev
	}
 
/*
 enableLimit - whether the joint limits will be active
 lowerTranslation - position of the lower limit
 upperTranslation - position of the upper limit

 enableMotor	- whether
the
joint
motor
will
be
active
motorSpeed - the
target
speed
of
the
joint
motor
maxMotorForce - the
maximum
allowable
force
the
motor
can
use
* /
JointGetJointTranslation=function() {
	var axis = this.m_bodyA.GetWorldVector(this.m_localXAxis1),
			p1 = this.m_bodyA.GetWorldPoint(this.m_localAnchor1),
			p2 = this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
	return axis.x * (p2.x - p1.x) + axis.y * (p2.y - p1.y)
}//box2d source
/*

 pJD.maxForce= j.mMF=function(a){var j=this
 j.maxMotorForce = a; return j
 }


 pJD.speed=j.mS=function(a){this.motorSpeed = a; return this}
 pJD.motor=j.eM=function(a){
 this.enableMotor = a?true:false; return this}
 pJD.maxSpeed =j.mMS=function(a){ this.maxMotorSpeed=a; return this }



 pJD.lowTrans=j.lT=function(a){
 this.lowerTranslation=a;return this}
 pJD.upTrans=j.uT=function(a){
 this.upperTranslation=a;
 return this}

 pJD.lm=function(a){ this.enableLimit=a?true:false;return this}

 -----


 pJ.speed = function (speed) {//j.mS
 this.SetMotorSpeed(speed)
 return this
 }



 */
 