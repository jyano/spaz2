//intro
/*

 Friction Joint

 The friction joint is used to simulate top-down friction between two objects.
 This can be useful for simulating both translational (directional) friction and angular (rotational) friction 
 between two joined objects. 

 The initial arguments are bodies A and B to join,
 followed by an x and y coordinate for the anchor point.
 local frictionJoint = physics.newJoint( "friction", bodyA, bodyB, anchor_x, anchor_y )
 Friction Values
 When creating a friction joint, 
 simulated friction can be applied via maximum force and torque values:
 frictionJoint.maxForce
 Number. The maximum directional friction which may be applied to the joined body.
 A higher value simulates higher friction.
 frictionJoint.maxTorque
 Number. The maximum rotational friction which may be applied to the joined body. 
 A higher value simulates higher friction.

 */


//friction def
/*
 Friction joint definition. More...

 #include <b2FrictionJoint.h>

 + Inheritance diagram for b2FrictionJointDef:
 + Collaboration diagram for b2FrictionJointDef:
 List of all members.

 Public Member Functions

 void 	Initialize (b2Body *bodyA, b2Body *bodyB, const b2Vec2 &anchor)
 Public Attributes

 b2Vec2 	localAnchorA
 The local anchor point relative to bodyA's origin. 
 b2Vec2 	localAnchorB
 The local anchor point relative to bodyB's origin. 
 float32 	maxForce
 The maximum friction force in N. 
 float32 	maxTorque
 The maximum friction torque in N-m. 
 Detailed Description

 Friction joint definition.

 Member Function Documentation

 void b2FrictionJointDef::Initialize	(	b2Body * 	bodyA,
 b2Body * 	bodyB,
 const b2Vec2 & 	anchor 
 )		
 Initialize the bodies, anchors, axis, and reference angle using the world anchor and world axis.

 Member Data Documentation

 b2Vec2 b2FrictionJointDef::localAnchorA
 The local anchor point relative to bodyA's origin.

 b2Vec2 b2FrictionJointDef::localAnchorB
 The local anchor point relative to bodyB's origin.

 float32 b2FrictionJointDef::maxForce
 The maximum friction force in N.

 float32 b2FrictionJointDef::maxTorque
 The maximum friction torque in N-m.
 */


//friction joint
/*

 b2FrictionJoint Class Reference
 #include <b2FrictionJoint.h>

 + Inheritance diagram for b2FrictionJoint:
 + Collaboration diagram for b2FrictionJoint:
 List of all members.

 Public Member Functions

 b2Vec2 	GetAnchorA () const
 Get the anchor point on bodyA in world coordinates. 
 b2Vec2 	GetAnchorB () const
 Get the anchor point on bodyB in world coordinates. 
 b2Vec2 	GetReactionForce (float32 inv_dt) const
 Get the reaction force on bodyB at the joint anchor in Newtons. 
 float32 	GetReactionTorque (float32 inv_dt) const
 Get the reaction torque on bodyB in N*m. 
 const b2Vec2 & 	GetLocalAnchorA () const
 The local anchor point relative to bodyA's origin. 
 const b2Vec2 & 	GetLocalAnchorB () const
 The local anchor point relative to bodyB's origin. 
 void 	SetMaxForce (float32 force)
 Set the maximum friction force in N. 
 float32 	GetMaxForce () const
 Get the maximum friction force in N. 
 void 	SetMaxTorque (float32 torque)
 Set the maximum friction torque in N*m. 
 float32 	GetMaxTorque () const
 Get the maximum friction torque in N*m. 
 void 	Dump ()
 Dump joint to dmLog. 
 Protected Member Functions

 b2FrictionJoint (const b2FrictionJointDef *def)
 void 	InitVelocityConstraints (const b2SolverData &data)
 void 	SolveVelocityConstraints (const b2SolverData &data)
 bool 	SolvePositionConstraints (const b2SolverData &data)
 Protected Attributes

 b2Vec2 	m_localAnchorA
 b2Vec2 	m_localAnchorB
 b2Vec2 	m_linearImpulse
 float32 	m_angularImpulse
 float32 	m_maxForce
 float32 	m_maxTorque
 int32 	m_indexA
 int32 	m_indexB
 b2Vec2 	m_rA
 b2Vec2 	m_rB
 b2Vec2 	m_localCenterA
 b2Vec2 	m_localCenterB
 float32 	m_invMassA
 float32 	m_invMassB
 float32 	m_invIA
 float32 	m_invIB
 b2Mat22 	m_linearMass
 float32 	m_angularMass
 Friends

 class 	b2Joint
 Detailed Description

 Friction joint. This is used for top-down friction. It provides 2D translational friction and angular friction.

 Member Function Documentation

 void b2FrictionJoint::Dump	(		)	[virtual]
 Dump joint to dmLog.

 Reimplemented from b2Joint.

 b2Vec2 b2FrictionJoint::GetAnchorA	(		)	const [virtual]
 Get the anchor point on bodyA in world coordinates.

 Implements b2Joint.

 b2Vec2 b2FrictionJoint::GetAnchorB	(		)	const [virtual]
 Get the anchor point on bodyB in world coordinates.

 Implements b2Joint.

 const b2Vec2& b2FrictionJoint::GetLocalAnchorA	(		)	const [inline]
 The local anchor point relative to bodyA's origin.

 const b2Vec2& b2FrictionJoint::GetLocalAnchorB	(		)	const [inline]
 The local anchor point relative to bodyB's origin.

 float32 b2FrictionJoint::GetMaxForce	(		)	const
 Get the maximum friction force in N.

 float32 b2FrictionJoint::GetMaxTorque	(		)	const
 Get the maximum friction torque in N*m.

 b2Vec2 b2FrictionJoint::GetReactionForce	(	float32 	inv_dt	)	const [virtual]
 Get the reaction force on bodyB at the joint anchor in Newtons.

 Implements b2Joint.

 float32 b2FrictionJoint::GetReactionTorque	(	float32 	inv_dt	)	const [virtual]
 Get the reaction torque on bodyB in N*m.

 Implements b2Joint.

 void b2FrictionJoint::SetMaxForce	(	float32 	force	)	
 Set the maximum friction force in N.

 void b2FrictionJoint::SetMaxTorque	(	float32 	torque	)	
 Set the maximum friction torque in N*m.
 */
/*

 Package	Box2D.Dynamics.Joints
 Class	public class b2FrictionJoint
 Inheritance	b2FrictionJoint Inheritance b2Joint
 Source	b2FrictionJoint.as
 Friction joint. This is used for top-down friction. It provides 2D translational friction and angular friction.
 See also

 b2FrictionJointDef

 Public Properties
 Property	Defined by
 m_angularMass : Number
 b2FrictionJoint
 m_linearMass : b2Mat22
 b2FrictionJoint
 Public Methods
 Show Inherited Public Methods
 Method	Defined by

 GetAnchorA():b2Vec2
 Get the anchor point on bodyA in world coordinates.
 b2FrictionJoint

 GetAnchorB():b2Vec2
 Get the anchor point on bodyB in world coordinates.
 b2FrictionJoint

 GetMaxForce():Number
 b2FrictionJoint

 GetMaxTorque():Number
 b2FrictionJoint

 GetReactionForce(inv_dt:Number):b2Vec2
 Get the reaction force on body2 at the joint anchor in Newtons.
 b2FrictionJoint

 GetReactionTorque(inv_dt:Number):Number
 Get the reaction torque on body2 in N.
 b2FrictionJoint

 SetMaxForce(force:Number):void
 b2FrictionJoint

 SetMaxTorque(torque:Number):void
 b2FrictionJoint
 Property detail
 m_angularMass	property
 public var m_angularMass:Number
 m_linearMass	property	 
 public var m_linearMass:b2Mat22
 Method detail
 GetAnchorA	()	method
 public override function GetAnchorA():b2Vec2
 Get the anchor point on bodyA in world coordinates.

 Returns
 b2Vec2
 GetAnchorB	()	method	 
 public override function GetAnchorB():b2Vec2
 Get the anchor point on bodyB in world coordinates.

 Returns
 b2Vec2
 GetMaxForce	()	method	 
 public function GetMaxForce():Number
 Returns
 Number
 GetMaxTorque	()	method	 
 public function GetMaxTorque():Number
 Returns
 Number
 GetReactionForce	()	method	 
 public override function GetReactionForce(inv_dt:Number):b2Vec2
 Get the reaction force on body2 at the joint anchor in Newtons.

 Parameters
 inv_dt:Number
 Returns
 b2Vec2
 GetReactionTorque	()	method	 
 public override function GetReactionTorque(inv_dt:Number):Number
 Get the reaction torque on body2 in N.

 Parameters
 inv_dt:Number
 Returns
 Number
 SetMaxForce	()	method	 
 public function SetMaxForce(force:Number):voidParameters
 force:Number
 SetMaxTorque	()	method	 
 public function SetMaxTorque(torque:Number):voidParameters
 torque:Number

 */

b2d.FrJtD=b2d.Joints.b2FrictionJointDef

b2d.FrJt = b2d.Joints.b2FrictionJoint 


FRJ = FRICTIONJOINT = FRJT = function () {W()
	b=w.D(300, 400)
	b.rec(40, 90)
	b.rt(-10)
	b1=w.D(400, 600)
	b1.rec(60, 80)
	b1.rt(45)
	frJ= new b2d.FrJtD
	frJ.bodyA = b
	frJ.bodyB = b1
	
	j = w.CreateJoint(frJ)
	j.SetMaxTorque(100000000)
	j.SetMaxTorque(1000000)

}
FRICJ = function () {
	w = b2d.W({g: 0})
	y = w.ship().XY(200, 200)
	w.right.kill();
	w.left.kill();
	y.warp2()
	//  Set the two anchor points to zero so the friction doesn't have any direction.
	frictionJoint = new b2d.Joints.b2FrictionJointDef()
	frictionJoint.localAnchorA = V(0, 0)
	frictionJoint.localAnchorB = V(0, 0)
	frictionJoint.bodyA = y//w.ball(100,100,50)
	frictionJoint.bodyB = b = w.ball(200, 200, 240).warp2()
	// 1200,400)//ASquareAsLargeAsTheAreaYouNeedFrictionIn
	frictionJoint.maxForce = 42.5; //This the most force the joint will apply to your object.
	// The faster its moving the more force applied
	frictionJoint.maxTorque = 0//4365; //Set to 0 to prevent rotation
	w.CreateJoint(frictionJoint)
	frictionJoint = new b2d.Joints.b2FrictionJointDef()
	frictionJoint.localAnchorA = V(0, 0)
	frictionJoint.localAnchorB = V(0, 0)
	frictionJoint.bodyA = y//w.ball(100,100,50)
	frictionJoint.bodyB = b2 = w.ball(200, 200, 40).warp2()
	// 1200,400)//ASquareAsLargeAsTheAreaYouNeedFrictionIn
	frictionJoint.maxForce = 42.5; //This the most force the joint will apply to your object.
	// The faster its moving the more force applied
	frictionJoint.maxTorque = 0//4365; //Set to 0 to prevent rotation
	w.CreateJoint(frictionJoint)
	w.ball(400, 500, 40)
	w.show(function () {
		return 'linVelX: ' + y.linVel().x.toFixed(0)
	})
	/*
	
	 How to add friction joint and which anchor point i have to set to zero?? –  Diken Sep 5 '12 at 7:05
	
	 Unlike surface friction between solids, air friction (drag) depends on the speed of the object, squared.
	
	 An easy way to model friction and drag
	
	 F(friction) = -k;
	 F(drag) = speed * speed * -k;
	 Both forces act in the opposite direction to the velocity of the object.
	
	 Notice that surface friction is a constant whereas air friction (drag) must be modified each frame according to the object speed (length of velocity vector)
	 */
}
 