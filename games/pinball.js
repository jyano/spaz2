w.flips = w.flippers = function (x, y, x2, y2) {
	if (U(y2)) {
		y2 = y
	}
	if (U(x2)) {
		x2 = x + 230
	}
	var lf = w.lFlip(x, y),
			rf = w.rFlip(x2, y2)
	var flip = function flip() {
		lf.flip();
		rf.flip();
		return flip
	}
	flip.left = lf
	flip.right = rf
	return flip
}
LFLIP = function () {
	W()
	w.lFlip(600, 300)
}
FLIP = function () {
	W()
	f1 = w.flippers(100, 430)
	f2 = w.flippers(100, 230)
	f3 = w.flippers(300, 130)
	flip = function () {
		f1();
		f2();
		f3()
	}
}
w.rFlip = w.rightFlipper = function (x, y) {
	var w = this
	var rightJoint = w.S(x, y, 'r', 20),
			rightFlip = w.D(x, y, 'b', 100, 25).DBF(1, .5, 0),
			flipper = w.rJ(
					rightJoint, rightFlip, 0, 0, 40, 0
			).lm(-70, 30)
	flipper.flip = function () {
		rightFlip.I(-1000, 0)
	}
	return flipper
}
w.lFlip = w.leftFlipper = function (x, y) {
	var w = this
	var fl = w.D(x, y, 'b', 100, 25).DBF(1, .5, 0),
			flipper = w.rJ(
					w.S(x, y, 'r', 20), fl,
					0, 0, 40, 0
			).lm(150, 250)
	flipper.flip = function () {
		fl.I(1000, 0)
	}
	return flipper
} 