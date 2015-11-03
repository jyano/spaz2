j.lm = j.limits = j.setLimits = j.sL = function (a, b) {
	a = N(a) ? a : 20
	b = N(b) ? b : 180
	j.SetLimits(tRad(a), tRad(b))
	return j
}
j.enableLimits = j.enableLimit = j.eL = function (a) {
	this.EnableLimit(a ? true : false)
	return this
}
	