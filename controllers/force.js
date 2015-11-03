FCO = function () {
	W({w: 'r2', g: 0}).C('e')
//.pen('blue has constForce(1,0)  red has constAcc(1,0)')
	//aCo=w.aCo(1,0).B(w.D(100,300,'x', 20 ).d(1), w.D(100,400, 'x',40 ).d(1))
	//w.aCo(0,1).B(w.D(300,100, 'x', 20).d(1), w.D(400,100, 'x', 40).d(1))
	w.p(100, 100)
	fCo = w.fCo(2, 0).B(
			w.D(100, 100, 'b', 60).d(1).lD(10),
			b = w.D(100, 200, 'b', 40).d(1).lD(10),
			b = w.D(100, 200, 'b', 100).d(1).lD(10))
	w.fCo(0, 2).B(
			w.D(100, 100, 'g', 60).d(1).lD(10),
			w.D(200, 100, 'g', 40).d(1).lD(10),
			w.D(200, 100, 'g', 100).d(1).lD(10))
	w.$$(function () {
		w.C('d')
		w.e(function (b) {
			b.xCo()
		})
	})
}
