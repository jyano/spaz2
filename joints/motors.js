$L()
j.eM =j.EM=  function (eM) {this.EnableMotor(eM ? true : false);
	return this
}
j.m1=function(){return this.eM(1)}
j.m0 = function () {return this.eM(1)}

j.GMS=function(){return this.GetMotorSpeed}
j.SMS = function (sp) {this.SetMotorSpeed(sp)
	return this
}
j.sp = pJ.mSp =   function (sp) {var pJ = this
	return  U(sp)?
		  pJ.GMS():
	pJ.SMS(sp)
}

j.m = function () {
	return this.mt.apply(this, arguments).m1()
}

j.s = function () {
	return this.sp.apply(this, arguments).m1()
}

CONTROLPOS = function () {
// You can use motors to control position 
 //by specifying a joint velocity that is proportional to the difference
 // between the actual and desired position. 
}
SIMJOINTFRIC=function(){
//You can also use motors to simulate joint friction:
 // set the joint velocity to zero and provide a small, 
 //but significant maximum motor force/torque. 
 //Then the motor will attempt to keep the joint from moving 
 // until the load becomes too strong.
 }

function _pre(){
 
}
