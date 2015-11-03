META = function () {
	W([800, 600], {w: 'L'}).C('w')._(function () {
		$.rulers()
		//initial me
		p = w.p(200, 200, 5).stat()
		//initial balls
		_.t(5, function Ball() {
			w.D(R(200, 50), R(-100), $r(), 30)
		})
		_.ev(3, MetaBall)
	})
	function MetaBall() {
		var b = w.D(400, 400, 'b', 80)
		b.$h('x', 'X', 1).c('x', 'X', 1).bf(
				w.s.cv0,
				cjs.m2d(.6, .1, .1, .6, -40, 180)
		).cir(80)
	}
}