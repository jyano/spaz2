b2d = Box2D
b2d.Cm = b2d.Common
b2d.M = b2d.Math = b2d.Cm.Math
b2d.C = b2d.Collision
b2d.D = b2d.Dynamics


b2d.Hs = b2d.Shapes = b2d.C.Hs = b2d.C.Shapes

b2d.Cxs = b2d.D.Cxs = b2d.D.Contacts
b2d.Js = b2d.Joints = b2d.D.Joints
b2d.Cos = b2d.Controllers = b2d.D.Cos = b2d.D.Controllers

b2d.W = b2d.World = b2World = b2d.D.b2World
b2d.DD = b2d.DebugDraw = b2DebugDraw = b2d.D.b2DebugDraw
b2d.BD = b2d.bodyDef = b2BodyDef = b2d.D.b2BodyDef
b2d.FD = b2d.FixtureDef = b2FixtureDef = b2FixtureDef = b2d.D.b2FixtureDef
b2d.F = b2d.Fixture = b2d.D.Fixture = b2Fixture = b2d.D.b2Fixture
b2d.B = b2d.Body = b2d.D.Body = b2Body = b2d.D.b2Body
b2d.JD = b2d.jointDef = bJD = b2d.Js.b2JointDef
b2d.J = b2d.Joint = b2d.joint = bJ = b2d.Js.b2Joint
b2d.Cx = b2d.Contact = b2d.Cxs.b2Contact
b2d.AB = b2d.AABB = b2AABB = b2d.C.b2AABB
b2d.M2 = b2d.Mat22 = b2d.M.b2Mat22
b2d.M3 = b2d.Mat33 = b2d.M.b2Mat33

b2d.PJD=b2d.PrismaticJointDef = b2d.Js.b2PrismaticJointDef
b2d.RJD=b2d.RevoluteJointDef = b2d.Js.b2RevoluteJointDef
b2d.MJD = b2d.mouseJointDef = b2MouseJointDef = b2d.Js.b2MouseJointDef


b2d.RJ=b2d.RevoluteJoint = b2d.Js.b2RevoluteJoint
b2d.DJ=b2d.distanceJoint = bDJ = b2d.Js.b2DistanceJoint



b2d.massData = b2MassData = b2d.C.Hs.b2MassData
b2d.PolygonShape = b2PolygonShape = b2d.Hs.b2PolygonShape
b2d.CircleShape = b2CircleShape = b2d.Hs.b2CircleShape
b2d.Segment = b2d.C.b2Segment
b2d.AB = b2d.C.b2AABB
b2d.ControllerEdge = b2d.Cos.b2ControllerEdge
b2d.ConstantAccelController = b2d.Cos.b2ConstantAccelController
b2d.BuoyancyController = new b2d.Cos.b2BuoyancyController
$df.cF = function (o) {
	o = o || {}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.r = N(o.r, 60)
	o.d = N(o.d, 1)
	return o
}
b2d.p = function () {
	b2d.D = b2d.Dynamics
	aCo = b2d.Cos.b2ConstantAccelController.prototype
	b = b2d.Body.prototype
	bCo = b2d.Cos.b2BuoyancyController.prototype//bCo = b2d.BuoyancyController= b2d.Cos.b2BuoyancyController
	bD = b2d.BD.prototype
	cx = b2d.D.Contacts.b2Contact.prototype
	cxI = b2d.D.b2ContactImpulse.prototype
	ct = cjs.Container.prototype
	co = b2d.Cos.b2Controller.prototype
	c = HTMLCanvasElement.prototype
	cH = b2d.CircleShape.prototype
	dd = b2d.D.b2DebugDraw.prototype
	dJD = b2d.Joints.b2DistanceJointDef.prototype
	dJ = b2d.Joints.b2Joint.prototype
	eD = cjs.EventDispatcher.prototype
	f = b2d.Fixture.prototype
	fCo = b2d.Cos.b2ConstantForceController.prototype
	fd = fD = b2d.FixtureDef.prototype
	gCo = b2d.Cos.b2GravityController.prototype
	gx = cjs.Graphics.prototype
	h = cjs.Shape.prototype
	i = cjs.DisplayObject.prototype
	jD = b2d.Joints.b2JointDef.prototype
	j = b2d.Joints.b2Joint.prototype
	l = b2d.D.b2ContactListener.prototype
	mJ = b2d.Joints.b2MouseJoint.prototype
	mJD = b2d.Joints.b2MouseJointDef.prototype
	mc = cjs.MovieClip.prototype
	flDa = b2d.D.b2FilterData.prototype
	pH = b2d.PolygonShape.prototype
	pJ = b2d.Js.b2PrismaticJoint.prototype
	pJD = pd = b2d.Js.b2PrismaticJointDef.prototype
	pD = gpcas.geometry.PolyDefault.prototype//////////////////
	ps = gpcas.geometry.PolySimple.prototype/////////////////////////
	q = cjs.LoadQueue.prototype
	rJD = b2d.RevoluteJointDef.prototype
	rJ = b2d.RevoluteJoint.prototype
	st = s = cjs.Stage.prototype
	sS = ss = cjs.SpriteSheet.prototype
	sSB = cjs.SpriteSheetBuilder.prototype
	sp = s = cjs.Sprite.prototype
	tl = cjs.Timeline.prototype
	t = cjs.Text.prototype
	tCo = b2d.Cos.b2TensorDampingController.prototype
	tw = cjs.Tween.prototype
	v = b2d.Common.Math.b2Vec2.prototype
	w = b2d.World.prototype
	wJD = b2d.Js.b2WeldJointDef
	wJ = b2d.Js.b2WeldJoint
	x = ctx = xx = CanvasRenderingContext2D.prototype
	xGr = CanvasGradient.prototype
}
b2d.p()
b2d.cn = b2d.controls = {}
function b2dC() {
	b2d.C.b2Simplex
	b2d.C.b2Bound
	b2d.C.b2BoundValues
	b2d.C.b2ContactID
	b2d.C.b2ContactPoint
	b2d.C.b2Distance
	b2d.C.b2DistanceInput
	b2d.C.b2DistanceOutput
	b2d.C.b2DistanceProxy
	b2d.C.b2DynamicTree
	b2d.C.b2DynamicTreeNode
	b2d.C.b2DynamicTreePair
	b2d.C.b2RayCastInput
	b2d.C.b2RayCastOutput
};
b2dC()

b2d.Vec = b2d.Common.Math.b2Vec2
v = b2d.Vec.prototype
V = function (x, y, x2, y2) {
	var g = G(arguments),
			x = g.f, y = g.s, x2 = g.t, y2 = g.fo,
			v
	if (A(x)) {
		y2 = x[3]
		x2 = x[2]
		y = x[1]
		x = x[0]
	}
	if (N(y2)) {
		x = (x - x2) / 2
		y = (y - y2) / 2
	}
	else if (O(x)) {
		if (b2d.iF(O(x))) {
			x = x.B()
		}
		y = F(x.Y) ? x.Y() : x.y
		x = F(x.X) ? x.X() : x.x
	}
	x = N(x, 0)
	y = N(y, x)
	v = new b2d.Common.Math.b2Vec2(x, y)
	if (g.n || g.d) {
		v = v.d()
	}
	if (g.p || g.m) {
		v = v.m()
	}
	return v
}
_V = function (x, y, x2, y2) {
	var g = G(arguments)
	if (g.A_) {
		return _V.apply(null, g.f)
	}
	return N(g.t) ? {
		x: (g.f - g.t) / 2,
		y: (g.s - g.fo) / 2
	} : N(g.f) ? {x: g.f, y: g.s} : x
}
_vec = function (o, g) {
	var v = new b2d.Vec(o.x, o.y)
	if (g.n || g.d) {
		v = v.d()
	}
	if (g.p || g.m) {
		v = v.m()
	}
	return v
}
V = function (x, y, x2, y2) {
	var g = G(arguments),
			x = g.f, y = g.s, x2 = g.t, y2 = g.fo,
			v, o
	o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
	if (A(x)) {
		y2 = x[3]
		x2 = x[2]
		y = x[1]
		x = x[0]
		o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
	}
	if (N(y2)) {
		x = (x - x2) / 2
		y = (y - y2) / 2
		o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
	}
	else if (O(x)) {
		o = obX(x)
		x = o.x
		y = o.y
	}
	o.x = N0(o.x)
	o.y = N(o.y, o.x)
	return _vec({x: N0(x), y: N(y, x)}, g)
}
function obX(x) {
	if (b2d.iF(O(x))) {
		x = x.B()
	}
	var y = F(x.Y) ? x.Y() : x.y
	x = F(x.X) ? x.X() : x.x
	return {
		x: x,
		y: y
	}
}
V0 = function (x, y) {
	if (O(x)) {
		return V0(V(x).x, V(x).y)
	}
	return {x: N0(x), y: N0(y)}
}


 

v.A = function () {
	var v = this, g = G(arguments), v1
	if (A(g[0]) && U(g[1])) {
		_.e(g, function (g) {
			v1 = V(g)
			v.add(v1.x, v1.y)
		})
	}
	else {
		v1 = V(g)
		v.add(v1.x, v1.y)
	}
}
/*
 b2d.add=function(vs,p){

 return _.m(vs, function(v){

 return v.add(p)

 })
 }*/
 
v.tF = v.f = v.dec = v.toFixed = function (n) {
	var v = this
	n = N(n, 1)
	return V(
			Number(v.x.toFixed(n)),
			Number(v.y.toFixed(n))
	)
}
v.r = v.rt = v.rot = function (rot) {
	var x = this.x, y = this.y,
			rot = Math.toRadians(rot),
			cos = Math.cos, sin = Math.sin
	return V(
			x * cos(rot) - y * sin(rot),
			x * sin(rot) + y * cos(rot)
	).dec(3)
}
v.tA = function () {
	return [this.x, this.y]
}
b2d.xy = function (o) {
	if (b2d.iF(O(o.x))) {
		o.x = o.x.B()
	}
	if (O(o.x)) {
		o.x = F(o.x.X) ? o.x.X() : o.x.x
	}
	if (O(o.y)) {
		o.y = F(o.x.Y) ? o.x.Y() : o.x.y
	}
	return o
}
v.m = v.mult = function (n) {
	n = N(n, 30)
	var v = this
	v = _.clone(v)
	v.Multiply(n)
	return v
}
v.d = v.div = function (n) {
	return this.mult(1 / N(n, 30))
}
b2d.m = b2d.mult = function (v) {
	return V(v).m()
}
b2d.d = b2d.div = function (v) {
	return V(v).d()
}
b2d.mat22 = function (v1, v2) {
	var m = new b2d.Mat22()
	m.SetVV(v1, v2)
	return m
}
b2d.tf = function (v1, v2, v3) {
	if (U(v1)) {
		return new b2d.Math.b2Transform()
	}
	if (A(v1)) {
		return b2d.tf(
				V(v1[0], v1[1]),
				V(v1[2], v1[3]),
				V(v1[4], v1[5]))
	}
	var tf = new b2d.Math.b2Transform(v1, b2d.mat22(v2, v3))
	return tf
}
b2d.C = b2d.Collision
 
b2d.d = b2d.div = function (v) {
	return V(v).d()
}
b2d.mat22 = function (v1, v2) {
	var m = new b2d.Mat22()
	m.SetVV(v1, v2)
	return m
}
b2d.tf = function (v1, v2, v3) {
	if (U(v1)) {
		return new b2d.Math.b2Transform()
	}
	if (A(v1)) {
		return b2d.tf(
				V(v1[0], v1[1]),
				V(v1[2], v1[3]),
				V(v1[4], v1[5]))
	}
	var tf = new b2d.Math.b2Transform(v1, b2d.mat22(v2, v3))
	return tf
}
$bD = function (x, y) {
	var v = V(x, y)
	var bD = new b2d.BD()
	bD.XY(N(v.x, 0), N(v.y, 0))
	return bD.dyn()
}
$dB = function (x, y) {
	return $bD(x, y).dyn()
}//$dBD =   b2d.bD =   b2d.dBD =
$sB = $sBD = b2d.S = b2d.sB = b2d.stat = function (x, y) {
	return $bD(x, y).stat()
}//
$kB = $kBD = b2d.kD = function (x, y) {
	return $bD(x, y).T(1)
}
toBoth()
function toBoth() {
	_.inEv = w.inEv = function (n1, n2, fn) {
		_.in(n1, function () {
			_.ev(n2, function () {
				fn()
			})
		})
	}
	_.evIn = w.evIn = function (n1, n2, fn) {
		_.ev(n1, function () {
			_.in(n2, function () {
				fn()
			})
		})
	}
}
ab = b2AABB.prototype
ab.lB = ab._lB = function (x, y) {
	this.lowerBound.Set(x, y)
	return this
}
ab.uB = ab._uB = function (x, y) {
	this.upperBound.Set(x, y)
	return this
}
ab.lUB = function () {
	var ab = this, g = G(arguments),
			o = {
				x1: g.f, y1: g.s,
				x2: g.t, y2: g.fo
			}
	if (g.n) {
		o.x1 /= 30;
		o.y1 /= 30;
		o.x2 /= 30;
		o.y2 /= 30
	}
	ab.lB(o.x1, o.y1)
	ab.uB(o.x2, o.y2)
	return ab
}
ab.pt = function (x, y) {
	var g = G(arguments)
	return this.lUB(
			alg(x, '-'), alg(y, '-'), alg(x), alg(y)
	)
	function alg() {
		var g = G(arguments)
		return g.f / 30 + (g.n ? -.01 : .01)
	}
}
$AB = b2d.AB = function () {
	var g = G(arguments), ab = new b2d.Collision.b2AABB
	if (g.p) {
		ab.lUB(g.f, g.s, g.t, g.f)
	}
	else if (U(g.t)) {
		ab.pt(g.f, g.s)
	}			//ab.lUB(g.f/30 - 0.01, g.s/30 - 0.01, g.f/30 + 0.01, g.s/30 + 0.01)
	else {
		ab.lUB(g.f, g.s, g.t, g.fo, '-')
	}
	return ab
}
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