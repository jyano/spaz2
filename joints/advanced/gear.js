w.Gear = function (a, b, c) {
	return world.createJoint(Gear(a, b, c))
	function Gear(bA, bB, ratio) {
		var gearJoint = new b2d.Joints.b2GearJointDef()
		gearJoint.joint1 = bA
		gearJoint.joint2 = bB
		gearJoint.bodyA = bA.GetBodyA()
		gearJoint.bodyB = bB.GetBodyA()
		gearJoint.ratio = N(ratio) ? ratio : 1
		return gearJoint
	}
}
DEMOGEAR = GEAR=function () {
	W()
	
	
	w.Gear(
			
			
			w.rJ(
					w.S(100, 220).cir(40),
					w.D(100, 220).rec( 100, 20).C('b')
			),
			
				
						
			
			w.rJ(
					w.S(250, 220).cir(20),
					w.D(250, 220).rec( 100, 20).C('g')
			), 
			
			
			.5
					
	
	
	)




}


 