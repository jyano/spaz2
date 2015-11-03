// Joints between static and/or kinematic bodies are allowed, but have no effect and use some processing time.
b2d.p()
/*


 You can specify user data for any joint type 

 a you can provide a flag to prevent the attached bodies from colliding with each other. 
 This is actually the default behavior 
 and you must set the collideConnected Boolean to allow collision between to connected bodies.



 Many joint definitions require that you provide some geometric data. 

 Often a joint will be defined by anchor points. 
 These are points fixed in the attached bodies. 

 Box2D requires these points to be specified in local coordinates.
 This way the joint can be specified even when the current body transforms violate the joint constraint
 --- a common occurrence when a game is saved and reloaded. 


 Additionally, 
 some joint definitions need to know the default relative angle between the bodies. 
 This is necessary to constrain rotation correctly.


 many joints have initialization functions 
 that use the current body transforms
 to remove much of the work. 

 However, these initialization functions
 should usually only be used for prototyping. 

 Production code should define the geometry directly. 
 This will make joint behavior more robust.



 */
jD.A = function (a) {
	this.bodyA = a;
	return this
}
jD.B = function (b) {
	this.bodyB = b;
	return this
}
jD.AB = function (a, b) {
	return this.A(a).B(b)
}


jD._lAA = function (lAA) {
	this.localAnchorA = lAA;
	return this
}
jD._lAB = function (lAB) {
	this.localAnchorB = lAB;
	return this
}
jD.lAA = jD.aV =function (x, y) {
	if(U(x)){return this}
	var pt = V(x, y)
	this._lAA(  pt.div()  )
	return this
}
jD.lAB =jD.bV =  function (x, y) {
	if (U(x)) {
		return this
	}
	return this._lAB(V(x, y).div())
}


jD.init = jD.i = function () {
	$l('jD.init')
	this.Initialize.apply(this, arguments)
	return this
}
jD.colCon = jD.collConn = jD.cC = jD.cl = jD.coll = jD.collide = function (cC) {
	this.collideConnected = cC ? true : false;
	return this
}

j.init = j.i = function () {
	$l('j.init')
	this.Initialize.apply(this, G(arguments))
	return this
}
j.type = j.ty = j.T = function () {
	return this.GetType()
}
//j.a and j.b CANNOT 'set' the property.. is too late.. make new joint
j.ancA = j.a = function () {
	return this.GetAnchorA().mult()
}
j.ancB = j.b = function () {
	return this.GetAnchorB().mult()
}
j.bodA = j.A = function (a) {
	return this.GetBodyA()
}
j.bodB = j.B = function (a) {
	return this.GetBodyB()
}
j.W = function () {
	return this.A().W()
}//  this.GetBodyA().GetWorld()
j.destroy =j.ds =  function () {
	var j = this.W().DestroyJoint(this)
	this.destroyed = true
	return j
}
j.target = function (a, b) {
	var j = this
	j.SetTarget(V(a, b))
	return j
}//mouse
w.dsJt = w.dJ = w.j = w.destroyJoint = function (a) {
	var w = this
	w.DestroyJoint(a);
	return w
}
w.crJt = w.cJ = w.J = w.joint = w.createJoint = function (a) {
	var w = this,
			j = this.CreateJoint(a)
	return j
}
b.JtLs = b.jointList = b.jt = b.j = b.joint = function () {
	return this.GetJointList().joint
}
b.rmJts= b.destroyJoints = b.dsJts= b.destroyAllJoints = function () {
	var b = this,
			toDestroy = [], je = b.j()
	while (je) {
		toDestroy.push(je.joint)
		je = je.next
	}
	_.e(toDestroy, function (j) {
		w.DestroyJoint(j)
	})
	return this
}
w.colBalls = function () {
	var w = this
	r = w.D(300, 300, 'r', 12).DFB(1, 0.1, 1)
	b = w.D(400, 300, 'b', 12).DFB(1, 0.1, 1)
	y = w.D(500, 300, 'y', 12).DFB(1, 0.1, 1)
	g = w.D(600, 300, 'g', 12).DFB(1, 0.1, 1)
	p = w.D(700, 300, 'p', 12).DFB(1, 0.1, 1)
	o = w.D(800, 300, 'o', 12).DFB(1, 0.1, 1)
	return w
}

