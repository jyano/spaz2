j = b2d.J

j.eL = j.EL = function (eL) {
	this.EnableLimit(eL ? true : false)
	return this
}
j.l1 =function(){return this.eL(1)}
j.l0 = function () {
	return this.eL(0)
}

j.l = function () {
	return this.SL.apply(this, arguments).l1()
}

j.SL = function (a, b) {
	 this.SetLimits.apply(this, arguments)
	return this
}

