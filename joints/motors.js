/*

 Joint motors can be used in many ways. You can use motors to control position 
 by specifying a joint velocity that is proportional to the difference between the actual and desired position. 
 
 
 You can also use motors to simulate joint friction: set the joint velocity to zero and provide a small, 
 but significant maximum motor force/torque. 
 Then the motor will attempt to keep the joint from moving until the load becomes too strong.
 */
j.enabMot = function (a) {
	this.EnableMotor(a);
	return this
}
j.mot = function (speed, maxForce) {
	if (speed == '-') {
		this.EnableMotor(false);
		return this
	}
	speed = N(speed) ? speed : 100
	maxForce = N(maxForce) ? maxForce : 10000000
	this.enabMot(true).maxForce(maxForce).speed(speed)
}
j.maxForce = j.mMF = j.mF = function (a, b, c) {
	this.SetMaxMotorForce(a, b, c);
	return this
}
 