CUPBALL = function () {//should zoom in when near cup
	CUPS()
	b = w.D(w.W / 2, w.H / 2, 'w', [[10]]).r(.8).track()
	cjs.tick(function () {
		b.F(0, -20)
	})
	w.showOff()
}
TRACKEE = function () {
	W([1200, 600, 2400, 600], {g: 10})
	w.S(400, 2500, 'r', 200, 100)
	w.S(800, 2300, 'z', 100, 100)
	w.S(1200, 2300, 'b', 300, 100)
	w.S(1600, 2300, 'z', 100, 100)
	w.S(2000, 2300, 'r', 200, 100)
	_.times(10, function (i) {
		w.D(100 + i * 100, 100, $r(), 35).den(.1)
	})
	y = w.ship(50, 50).mid()
	y2 = w.ship(100, 300).C('x').rot(180)
	//i thought i may want t for timer/ticker.. but time has no x and y !
	//move the stage by manipulating the trackee x,y
	//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
	w.tRightLeft()
	w.showOff()
	setTimeout(function () {
		setInterval(function changeT() {
			if (w.t == y2) {
				w.C('b');
				w.t = y
			} else {
				w.C('z');
				w.t = y2
			}
		}, 5000)
	}, 5000)
}
CAMFOLLOW = function () {
	W(500, 500, 1600, 1000).G(0)
	a = w.ship().C('b')
	b = w.ship(400, 400).C('o').track()
	I(5, function () {
		if (w.follA) {
			b.track();
			w.follA = 0
		}
		else {
			a.track();
			w.follA = 1
		}
	})
}
CB = TRACKEECB = function () {
	W([1200, 600, 2400, 1200], {g: 300})
	_.t(10, function (i) {
		w.D(100 + i * 100, 100, $r(), 35).d(.1)
	})
	w.Z('-')
	p = w.p(1175, 100)
	w.t = p // no need to call track?
	_.ev(1, function () {
		w.t.cb = function () {
			w.Z(w.z + .001)
		}
	})
}
CHANGETRACKEE = KEE = function () {
	W([600, 600, 1200, 600])
	//i thought i may want t for timer/ticker.. but time has no x and y !
	//move the stage by manipulating the trackee x,y
	//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
	//  y = w.ship(50,50 ).C('d').mid().track()
	y2 = w.y(100, 300).C('x')
	y = w.y(100, 300).C('u')
	_.ev(1,
			function () {
				if (w.t == y2) {
					w.C('x');
					w.t = y
				}
				else {
					w.C('u');
					w.t = y2
				}
			})
}