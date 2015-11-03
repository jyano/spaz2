b2d.LnJtD = b2d.Joints.b2LineJointDef

b2d.LnJt = b2d.Joints.b2LineJoint 

LJT = function () {
	W({g:0})
	b = w.D(300, 400)
	b.rec(40, 90)
	b.rt(-10).bo(.5)//.fixRot()
	
	b1 = w.D(400, 300).stat()
	b1.rec(60, 80)
	b1.rt(45)
	
	frJ = new b2d.LnJtD
	
	frJ.bodyA = b
	frJ.bodyB = b1
	j = w.CreateJoint(frJ)
	j.SetMaxMotorForce(1000)
	j.SetMotorSpeed(100000)
	//j.EnableMotor(true)

 
	j.EnableLimit(true)
	j.SetLimits(-3, 14)
	 
}

