dd.cx = dd.spr = dd.i = dd.sprite = function (spr) {
	var dd = this  //it is looking for  a context?
	if (U(spr)) {
		return dd.GetSprite()
	}
	dd.SetSprite(spr)
	return dd
}
dd.sc = dd.dS = dd.scale = dd.drawScale = function (sc) {
	var dd = this
	if (U(sc)) {
		return dd.GetDrawScale()
	}
	dd.SetDrawScale(sc)
	return dd
}
dd.fA = dd.alpha = dd.fillAlpha = function (a) {
	var dd = this
	if (U(a)) {
		return dd.GetFillAlpha()
	}
	dd.SetFillAlpha(a)
	return dd
}
dd.lT = dd.line = dd.lineThickness = function (lt) {
	var dd = this
	if (U(lt)) {
		return dd.GetLineThickness()
	}
	dd.SetLineThickness(lt);
	return dd
}
dd.fl = dd.flags = function (flags) {
	var dd = this, DD = b2DebugDraw
	if (U(flags)) {
		return dd.GetFlags()
	}
	if (flags == '*') {
		flags = DD.e_shapeBit //| DD.e_jointBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit | DD.e_controllerBit
	}
	dd.SetFlags(flags)
	return dd
}
w.sDD = function (dbD) {
	this.SetDebugDraw(dbD);
	return this
}
$dD = b2d.debugDraw = function () {
	var g = G(arguments), o, dbD = new b2DebugDraw()
	var DD = b2DebugDraw
	//var flags= DD.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
	var flags = b2DebugDraw.e_shapeBit// | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
	o = {cx: g.f, sc: g.s, fl: g.t, al: g[4], l: g[3]}
	if ($.iC(o.cx)) {
		o.cx = $(o.cx).ctx()
	}
	o.sc = N(o.sc, 30)
	o.fl = o.fl || flags
	o.l = N(o.l, 20)
	o.al = N(o.al, .95)
	if (o.cx) {
		dbD.sprite(o.cx)
	}
	if (o.sc) {
		dbD.scale(o.sc)
	}
	dbD.flags(o.fl)
	dbD.alpha(N(o.al, 0.5))
	return _dbD = dbD
}
w.dbD = w.bug = function () {
	var w = this, g = G(arguments)
	// this.scale = dd.scale()
	w.sDD($dD.apply(null, g))
	return w
}
w.dDD = function () {
	this.DrawDebugData()
	return this
}