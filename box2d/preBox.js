b2d = Box2D
b2d.Cm = b2d.Common
b2d.M = b2d.Math = b2d.Cm.Math
b2d.C = b2d.Collision
b2d.Hs = b2d.Shapes = b2d.C.Hs = b2d.C.Shapes
b2d.D = b2d.Dynamics
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
