MOTORS = function () {
	W().P().P().P().Y()
	w.rJ(
			w.D(800, 300, 'r', 20, 300),
			w.D(800, 300, [['b', 100], ['y', 50, 10, 100, 0]])
	).mt(10)
	dir = 10
	car = w.S(300, 300, 'r', 200, 20)
	b = w.D(250, 300, 'b', 40).d(5).bS('me')
	j = w.rJ(b, car)//.mt(10)
	b2 = w.D(350, 300, 'b', 40).d(5)
	b2.bS('me')
	j1 = w.rJ(b2,
			car).mt(10)
	w.$(function () {
		dir *= -1
		j.mt(dir)
		j1.mt(dir)
	})
	_.ev(1, function () {
		w.D(300, 500, 'y', 20)
	})
}
WAGON = function () {
	W([1200, 600, 4000, 600], {}).P()
	p.d(.2).track().cl(function () {
		p.onGround = true
	})
	x = w.D(600, 300, 'r', 300, 50).d(2).fr(3)
	wh = w.D(500, 320)
	wh.cir({r: 20, lf: 'x'})
	w.rJ(x, wh)
	wh = w.D(550, 320)
	wh.cir({r: 20, lf: 'x'})
	w.rJ(x, wh)
	wh = w.D(600, 320)
	wh.cir({r: 20, lf: 'x'})
	w.rJ(x, wh)
	wh = w.D(650, 320)
	wh.cir({r: 20, lf: 'x'})
	w.rJ(x, wh)
	wh = w.D(700, 320)
	wh.cir({r: 20, lf: 'x'})
	w.rJ(x, wh)
}
STAND = function () {
	W([600, 1000, 600, 1200], {}).P('+')
	//y= w.ship(500,200)
	dir = 12
	car = w.D(300, 300, 'r', 200, 45)
	w1 = w.rJ(
			wheel(250, 300),
			car
	).mt(10)
	w2 = w.rJ(
			wheel(350, 300), car
	).mt(10)
	car3 = w.D(500, 300, 'r', 200, 45)
	w.rJ(wheel(450, 300), car3).mt(-10)
	w.rJ(wheel(550, 300), car3)
	car3 = w.D(700, 300, 'r', 200, 45)
	w.rJ(wheel(650, 300), car3).mt(-10)
	w.rJ(wheel(750, 300), car3).mt(-10)
	function wheel(x, y) {
		pC = [b2d.pC(45, 10)]
		return w.D(x, y, 'b', pC).d(5)
	}
	
	w.$(function () {
		dir *= -1
		w1.mt(dir)
		w2.mt(dir)
	})
}
WHEEL = function () {
	W([1200, 600, 2400, 600], {g: 50}).P()
	p.track()
	yy = w.y().aD(5000)//.fixRot()
	dir = 12
	pC = [b2d.pC(45, 10)]
	car = w.D(300, 300, 'r', 200, 45).fr(5)
	w.rJ(
			wheel(250, 300),
			car, 0, 0, 100, 0
	).mt(-10)
	w.rJ(
			wheel(250, 300),
			car, 0, 0, -100, 0)
	/*
	 car= w.D(800,300, 'r', 200,45).fr(5)
	 w.rJ(
	 wheel(850, 300),
	 car,0,0,100,0
	 )
	 w.rJ(
	 wheel(850, 300),
	 car,0,0,-100,0).mt(10)
	
	 */
	function wheel(x, y) {
		return w.D(x, y, 'b', pC).d(5)
	}
}
TANK = function () {
	W({g: 0}).P()
	g = V(0, 1000)
	dir = 12
	car = w.S(300, 300, 'r', 100, 5)
	w1 = w.rJ(
			w.D(250, 300, 'b',
					[b2d.pC(45, 10)]).d(5), car)//.mt(10)
	w2 = w.rJ(
			w.D(350, 300, 'b', [b2d.pC(45, 10)]).d(5), car)//.mt(10)
	/*
	 w.$(function(){
	 dir*=-1
	 w1.mt(dir)
	 w2.mt(dir)
	 g = V(-g.x,-g.y)
	
	 })
	
	 cjs.t(function(){
	 car.F( g )
	 })
	 w.right.cl(function(){g=V(-1000,0)})
	 w.left.cl(function(){g=V(1000,0)})
	 w.roof.cl(function(){g=V(0,-1000)})
	 w.floor.cl(function(){g=V(0,1000)})
	 */
}
WALLWHEELS = function () {
	W(0).Y()
	x = w.S(600, 300, 'r', 500, 500, '-')
	wh = w.pWh({
		x: 450,
		y: 50,
		c: 'z',
		r: 50,
		n: 9
	})
	w.rJ(x, wh, 50, -100)
	wh = w.pWh({
		x: 450, y: 50,
		c: 'b',
		r: 50,
		n: 5
	})
	w.rJ(x, wh, 0, 100)  //  x.rev(wh,0,100)
	wh = w.wh({
		x: 450,
		y: 50,
		c: 'z',
		r: 50,
		n: 9
	})
	w.rJ(x, wh, -150, -50)
	/*
	 x.wheel(0,0)
	
	 x.wheel({
	 x:450, y:50,
	 c:'b',
	 r:50,
	 n:5
	 })
	 */
}
BOOTCAN = function () {
	W({g: 0})
	w.rJ(w.S(300, 600, 'a', 200),
			w.D(300, 400, 'b', 100, 100))
	b = w.D(270, 500, 'o', 40).r(.5)
	r = w.S(300, 300, 'g', 100, 20).d(.1).damp(1000, 1000).rt(100).dyn()
	r.rec('g', 20, 40, 60, -20)
	cjs.t(function () {
		b.F(0, 400)
	})
}
