$L()
mJD.setTarg = function (x, y) {
	var v = V(x, y)
	this.target = v.d()
	return this
}
mJD.getTarg = function () {
	return this.target.m()
}
mJD.targ = mJD.tg = function (x, y) {
	return U(x) ? this.getTarg() : this.setTarg(x, y)
}
mJD.dmpRat = function (dR) {
	this.dampingRatio = dR
	return this
}
mJD.frq= mJD.freq = function (fq) {
	this.frequency =fq
	return this
}
mJD.mxFo = mJD.mF = function (mF) {
	this.maxForce = mF
	return this
}
$mJtD = $mJt = function (a, b) {
	if (w.log) {
		$l('mJt')
	}
	var jt = new b2d.MouseJointDef
	jt.bodyA = a
	jt.bodyB = b
	return jt
}

////
mJ.setTarg = function (x, y) {
	var v = V(x, y)
	this.SetTarget(v.d())
	return this
}
mJ.getTarg = function () {
	return this.GetTarget().m()
}
mJ.targ = mJ.tg = function (x, y) {
	return U(x) ? this.getTarg() : this.setTarg(x, y)
}
mJ.dampRat = mJ.dmpRat = function (dR) {
	if (U(dR)) {
		return this.GetDampingRatio()
	}
	this.SetDampingRatio(dR)
	return this
}
mJ.mxFo = function (fo) {
	if (U(fo)) {
		return this.GetMaxForce()
	}
	this.SetMaxForce(fo)
	return this
}

mJ.frq = mJ.freq = mJ.frequency = function (hz) {
	if (U(hz)) {return this.GetFrequency()}
	this.SetFrequency(hz)
	return this
}

w._mJ = function (bod, x, y) {
	var mj = $mJtD(this.ground(), bod)
	if (N(x)) {
		mj.targ(x, y)
	}
	return mj
}
w.mJ = function () {
	var w = this, g = G(arguments), o
	o = g.O ? g.f : {b: g.f, x: g.s, y: g.t, dR: g.fo, mF: g.fi, fq: g.si}
	o.dR = N0(o.dR)
	o.mF = N(o.mF, 5000000) //md.maxForce = 1000 * o.b.GetMass()
	var md = w._mJ(o.b, o.x, o.y)
	md.dmpRat(o.dR).mxFo(o.mF)
	
	
	if (N(g.si)) {
	
		md.freq( g.si )
	}
	
	return w.J(md)
}


// world mouse down vs canvas mouse down!!! // canvas mouse down just uses $.oMD
WBF = function () {
	W()
	w.log = 1
	w.D(500, 300).f([['b', 100]])
	b = w.D(400, 300)
	//b.f('r', 100,'-')
	b.f([
		['r', 100, '-']
	])
}
function _pre() {
	w.ground = function () {
		return this.GetGroundBody()
	}
	b2d.MouseJointDef = b2d.Joints.b2MouseJointDef
	b2d.MouseJoint = b2d.Joints.b2MouseJoint
	mJD = b2d.MouseJointDef.prototype
	mJ = b2d.MouseJoint.prototype
}
function alpha() {

//if (this.log) {$l('w.mJ')};  make function class with logging?  wrap all my functions...
	mJ.ancA = function () {
		return this.GetAnchorA()
	}
	mJ.ancB = function () {
		return this.GetAnchorB()
		// this.m_bodyB.GetWorldPoint(this.m_localAnchor)
	}
	mJ.getImp = function () {
		return this.m_impulse
	}
	mJ.getMass = function () {
		return this.m_mass
	}
	mJ.reacFo = function (fo) {
		if (U(fo)) {
			return GetReactionForce()
		}
		this.SetReactionForce(fo)
		return this
	}
	mJ.getBeta = function () {
		return this.m_beta
	}
	mJ.getGamma = function () {
		return this.m_gamma
	}
}