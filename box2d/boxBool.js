b2d.tB = b2d.toBody = function (b) {
	return b2d.iB(b) ? b :
			b2d.iF(b) ? b.B() :
					null
}
b2d.iV = b2d.isV = function (v) {
	if (v) {
		return v.constructor.name == "b2Vec2"
	}
}
b2d.iH = function (h) {
	var typ
	if (O(h)) {
		typ = h.constructor.name
		return (typ == "b2PolygonShape") || (typ == "b2CircleShape") || (typ == "b2AShape")
	}
}
b2d.iBD = b2d.isBDef = function (bd) {
	return O(bd) && F(bd.b2BodyDef)
}
b2d.iB = b2d.isB = b2d.isBody = function (b) {
	if (O(b)) {
		return b.constructor.name == 'b2Body'
	}
}
b2d.iFD = b2d.isFD = function (fD) {
	return O(fD) && fD.b2FixtureDef
}
b2d.iF = function (f) {
	if (!f) {
		return false
	}
	return f.constructor.name == "b2Fixture"
}