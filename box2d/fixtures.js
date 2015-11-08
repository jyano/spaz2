fD.fr = fD.f = fD.frc = fD.fric = function (f) {
	var fD = this
	if (U(f)) {
		return this.friction
	}
	fD.friction = f
	return fD
}

fD.de=fD.d = fD.den = function (d) {
	var fD = this
	if (U(d)) {
		return fD.density
	}
	fD.density = d;
	return fD
}
fD.re=fD.r = fD.bo = fD.rst = fD.rest = function (r) {
	var fD = this
	if (U(r)) {
		return fD.restitution
	}
	fD.restitution = r;
	return fD
}
f.re = f.r = f.bo = f.rest = function (rest) {
	if (U(rest)) {
		return this.GetRestitution()
	}
	this.SetRestitution(rest);
	return this
}
f.fr = f.f = f.fric = function (fric) {
	if (U(fric)) {
		return this.GetFriction()
	}
	this.SetFriction(fric);
	return this
}
f.de = f.d = f.den = function (den) {
	if (U(den)) {
		return this.GetDensity()
	}
	this.SetDensity(den)
	this.body().ResetMassData()
	return this
}

f.GN=f.N = f.next = function () {
	return this.GetNext()
}
f.B = f.body = function () {
	return this.GetBody()
}
///


fD.sen = fD.sensor = fD.iS = function (isSensor) {
	if (U(isSensor)) {
		return this.isSensor
	}
	this.isSensor = isSensor ? true : false
	return this
}

 
f.kill = function () {
	var f = this, b = f.B(), w = b.W()
	if (!f) {
		return
	}
	if (w._fPreKill) {
		w._fPreKill(f)
	}
	if (b) {
		b.rmF(f)
	}
}//= f.xx = f.remove
f.killB = f.kB = f.xB = f.xX = f.XX = function () {
	if (this && this.B()) {
		this.B().kill()
	}
}

f.sen = function (s) {
	var f = this
	if (U(s)) {
		return f.IsSensor()
	}
	if (s == '/') {
		s = f.SetSensor(!f.IsSensor())
	}
	else {
		f.SetSensor(s ? true : false)
	}
	return f
}

f.rt = f.rot = function (rot, g) {
	return this.B().rot(rot, g)
}
f.lV = function () {
	var f = this, b = f.B(), g = G(arguments)
	b.lV.apply(b, g)
	return f
}
f.stat = function () {
	var b = this.B();
	b.stat.apply(b, arguments);
	return this
}
f.dyn = function () {
	var b = this.B();
	b.dyn.apply(b, arguments);
	return this
}
f.kin = function () {
	var b = this.B();
	b.kin.apply(b, arguments);
	return this
}

f.W = function () {
	return this.B().W()
}
f.iSt = f.iS = function () {
	return this.B().iS()
}
f.iDy =f.iD = function () {
	return this.B().iD()
}
f.iKi = f.iK = function () {
	return this.B().iK()
}

f.isBType = f.isType = function (t) {
	var f = this
	if (t) {
		return f.bType() == t
	}
}

f.bType = function () {
	return this.B().GetType()
}


f.$ = function (fn) {
	var f = this, b = f.B(), w = b.W()
	
	w.$(function (o) {
		w.q(o.x, o.y, function (fx) {
		//w.q is hack
			if (f == fx) {
				_.b(fn, f)(o)
			}
		})
	})
	
	return f
}


