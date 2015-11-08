/*

 b.aI=function(sc){var b=this;
 b.i(b.v().m(N(sc,100))
 return b}
 //ApplyLinearImpulse(forceDirection, body->GetPosition(), true);

 */
//f.getType = f.gT = function(someType){var b=this.B(), t=b.GetType(); return  D(someType)?(someType==t):t}
b2d.AHx = b2d.AShapex = function (pam, p2) {//dep .. use polyH
	var ag, arr, h
	ag = (p2) ? arguments : pam
	arr = _.m(ag, function (v) {
		return V(v).div()
	})
	h = b2d.pH()
	h.arr(arr)
	return h
}
pH.arr = function () {
	var pH = this
	var v = b2d.verts.apply(null, arguments)
	pH.SetAsArray(v, v.length)
	return pH
}
//make polyShape (by box or arr) for a fD
b2d.pH = b2d.polyH = function me(W, H, x, y, a) {
	var g = G(arguments),
			p = new b2d.PolygonShape()
	if (g.N_) {//| 50,200[[,200,60,45
		p.box(g.f, g.s, g.t, g[3], g[4])
	}
	else if (g.O_) {//| [20,300],..
		$a(p, 'arr', g)
		//-> g.a(p,'arr')
		// -> g.a(p.arr)
	}
	return p
}
pH.set = function () {
	var pH = this, g = G(arguments)
	if (N(g[0])) {
		pH.box(g[0], g[1], g[2], g[3], g[4])
	}
	else if (O(g[0])) {
		pH.arr.apply(pH, g)
	}
	return pH
}
w.gB = function () {
	$l('w.gB')
	return this.GetGroundBody()
}
w.cF = w.clear = function () {
	$l('clear')
	var w = this
	w.ClearForces();
	return w
}
function alpha() {
	b2d.Common.Math.b2Transform.prototype.toArr = function () {
		alert('b2d.Common.Math.b2Transform.prototype.toArr')
		var tf = this,
				pos = tf.position,
				R = tf.R,
				col1 = R.col1,
				col2 = R.col2
		return [pos.x, pos.y, col1.x, col1.y, col2.x, col2.y]
	}
}
//hmm.. fixt doesnt have a rel loc.. its shape does
//what if u want to change 'shape' of shape, but keep its rel loc?
b2d.pollute = function () {
	alert('b2d.pollute')
	b2Vec2 = Box2D.Common.Math.b2Vec2
	b2AABB = Box2D.Collision.b2AABB
	b2BodyDef = Box2D.Dynamics.b2BodyDef
	b2Body = Box2D.Dynamics.b2Body
	b2FixtureDef = Box2D.Dynamics.b2FixtureDef
	b2Fixture = Box2D.Dynamics.b2Fixture
	b2World = Box2D.Dynamics.b2World
	b2MassData = Box2D.Collision.Shapes.b2MassData
	b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
	b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
	b2DebugDraw = Box2D.Dynamics.b2DebugDraw
	b2MouseJointDef = Box2D.Dynamics.Joints.b2MouseJointDef
	b2Shape = Box2D.Collision.Shapes.b2Shape
	b2Joint = Box2D.Dynamics.Joints.b2Joint
	b2Settings = Box2D.Common.b2Settings
}
sB = b2Body.b2_staticBody
dB = b2Body.b2_dynamicBody
shB = b2d.DebugDraw.e_shapeBit
jB = b2d.DebugDraw.e_jointBit
//cv = el = $.fn
//divide by 30 to get meters
//all bx-obs have reg at center
//fixture: shape, friction, density[1], restitution
//body: x,y,type
//shape.setasbox(w,h)    .. again, divide values by 30
//debug.setsprite(canvas), .setdrawscale(30)
//debug.setflags(what to draw :: shapeBit||jointBit)
//world.setDebugDraw(debug)
//world.drawDebugdata
//worldstep(time(keep in sync with easel),
// vel iterations?(calcs forces - higher is more accurate but more intensive),
//  pos iterations  //can set both to 10
// )
//world clearforces
//static body for ground, dynamic for objs
 