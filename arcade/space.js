w.stars = function (n) {
	$l('w.stars')
	var w = this
	_.t(N(n, 30), function () {
		w.D(R(1000, -500), R(800, -400), 'w', 2).den(0).rest(2)
	})
	return w
}
SPOOM = function () {

	W({g: 0, w: 0}).C('z')
	
	w.stars()
	w.s.rXY(w.hW, w.hH)
	earth = star = w.D(200, 200).stat()
	earth.cir(100).den(1).bo(2)
	earth.bS('earth', .13)
	
	p = w.p(200, 200, 2.5, 'thrust').d(.4)
	
	p.horizCenter()
	
	p.aD(8).lD(.8)
	
	j=	w.dJ(p, earth,'-').freq(.15).damp(0).len(50)
	
	T.t(function () {
		trans(_.cap(300 / M.dist(star, p), .3, 2))
	})
	
	function trans(Z) {
		w.s.sXY(Z)
		w.s.XY(
				(w.hW - (p.X() - w.hW) * Z),
				(w.hH - (p.Y() - w.hH) * Z) + w.cen().y
		)
	}

}



ORBIT = function () {
	W({g: 0, w: 0})
	w.stars()
	p = w.p()
	p.cn('t')
	star = w.sun(200, 200)
	_.in(function () {
		star.sp().sXY(1)
	})
	w.spg(p, star).fq(3).d(4)
}
DJSPACE = function () {
	var img
	W({g: 0, w: 0});
	s = w.s
	e = w.S(200, 200, 'p', 100).d(1).r(2)
	e.bS({i: 'earth', sc: .13})
	e.K('earth');
	eI = e.sp()
	p = w.p(200, 200, 2.5, 'thrust')
			.d(.4).aD(8).lD(.8)
	w.dJ({
		a: p, b: e, l: 50, f: 0.15,
		coll: 1
	})
	T.t(function () {
		var sp, dx = e.X() - p.X(), dy = e.Y() - p.Y(),
				sc = _.cap(
						300 / M.sqrt(dx * dx + dy * dy), .3, 2)
		s.XY(
				300 - sc * (p.X() - 300),
				150 - sc * (p.Y() - 150))
	})
}//
SUNZOOM = SPACEGRAVMACH = function () {
	W({g: 0, w: 0})
	w.thrustPlayer = function (x, y) {
		var w = this, p
		p = w.p(x, y, 2.5, 'thrust').lD(.8).aD(10000)
		return p
	}
	w.stars(10)
	w.s.rXY(650, -200)
	
	w.s.XY(-200, 200)
	
	p = w.p().cn('thrust')
	sun = w.sun()
	_.in(.3, function () {
		//sun.sp().twL([{r:360},10000])
	})
	//preload to the rescue ??
	w.dJ({a: p, b: sun, cl: 1}).fq(10).d(10).l(10)
	green(400, 100);
	green(400, 200);
	green(200, 100);
	green(200, 200)
	function green(x, y, fq) {
		w.dJ({
			a: w.gG(x, y),
			b: sun,
			cl: 1
		})
				.fq(N(fq, 1)).d(0).l(15)
	}
	
	b2d.scaleFunc = function (b1, b2, max) {
		max = N(max, 2)
		M.sqr = function (a) {
			return a * a
		}
		var dst = 150 / M.sqrt(
						M.sqr(b1.X() - b2.X()) +
						M.sqr(b1.Y() - b2.Y())
				)
		return dst > max ? max : dst
	}
	T.t(function () {
		w.s.sXY(
				b2d.scaleFunc(sun, p, 2))
				

		p.centerScale(b2d.scaleFunc(sun, p, 2))


	})
}// 