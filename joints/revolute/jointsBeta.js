jd.refAng = jd.rA = function (a) {
	jd.referenceAngle = tRad(a);
	return this
}

jd.maxTorque = jd.mMT = function (a) {
	this.maxMotorTorque = a
	return this
}
jd.lowAng = jd.lA = function (a) {
	this.lowerAngle = tRad(a);
	return this
}
jd.upAng = jd.uA = function (a) {
	this.upperAngle = tRad(a);
	return this
}
jd.rat = jd.r = function (a) {
	this.ratio = a;
	return this
}
jd.axis = jd.lXA = function (a) {
	this.localAxisA = a;
	return this
}
jd.mot = jd.motor = function (speed, torque, enable) {
	this.speed(speed)
	this.maxTorque(N(torque) ? torque : 100)
	if (enable != '-') {
		this.enableMotor = true
	}
	return this
}
jd.limits = jd.lm = function (lowAng, upAng, enable) {
	this.lowAng(lowAng).upAng(upAng)
	if (enable != '-') {
		this.enableLimit = true
	}
	return this
}
j.refAng = j.rA = function (a) {
	j.referenceAngle = tRad(a);
	return j
}
j.maxTorque = j.mMT = function (a) {
	j.maxMotorTorque = a
	return j
}
j.lowAng = j.lA = function (a) {
	j.lowerAngle = tRad(a);
	return j
}
j.upAng = j.uA = function (a) {
	j.upperAngle = tRad(a);
	return j
}
j.rat = j.r = function (a) {
	j.ratio = a;
	return j
}
j.axis = j.lXA = function (a) {
	j.localAxisA = a;
	return j
}
j.damp = function (a) {
	if (U(a)) {
		return this.GetDampingRatio()
	}
	this.SetDampingRatio(a)
	return this
}
j.maxSpeed = j.maxMotorSpeed = j.mMS = function (a) {
	j.maxMotorSpeed = a
	return j
}
//motor rev
j.mt = j.motor = j.enableMotor = j.eM = function (a) {
	j.EnableMotor(a ? true : false)
	return j
}
j.speed = j.motorSpeed = j.mS = function (speed) {
	if (U(speed)) {
		return this.GetMotorSpeed()
	}
	this.SetMotorSpeed(speed)
	return this
}
j.torque = function (torq) {
	if (U(torq)) {
		return this.GetMotorTorque()
	}
	this.SetMaxMotorTorque(torq)
	return this
}
j.maxTorq = j.maxTorque = j.mMT = j.mT = function (a, b, c) {
	this.SetMaxMotorTorque(a, b, c);
	return this
}
// more lVW!
w.$(function (x, y) {
	v = b.lVW(x, y)
	w.dot('w', M.a(v.x), M.a(v.y))
	$l(v.x + ',' + v.y)
})
 
// can change collideConnected dynamically?  i think no.
//  then  could replace the joint with a new one dynaically!!!!!
// is it smart enough to know all its properties??? 
// it should be motor
 