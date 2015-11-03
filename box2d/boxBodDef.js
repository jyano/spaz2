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

///
bD.bul = bD.bull = bD.fR = function (iBu) {
	var bD = this
	if (U(iBu)) {
		return bD.bullet
	}
	bD.bullet = iBu;
	return bD
}
bD.inertia = function (inertia) {
	if (U(inertia)) {
		return this.insertiaScale
	}
	this.insertiaScale = inertia;
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