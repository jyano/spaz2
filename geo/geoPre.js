b2d.p();
h = cjs.Shape.prototype
w.cleanup = function () {
	w.e(function (b) {
		if (!b.IsActive) {
		}
	})
}
w.withBul = w.withCollideBul = w.cxBul = function (k, fn) {
	var w = this
	this.b(function (cx) {
		cx.w('bul', k, fn)
	})
}
w.$$fall = function () {
	var w = this
	w.$$(function () {
		w.fall()
	})
	return w
}
w.fall = function () {
	return this.e(function (b) {
		b.dyn()
	})
}

TURTS = function () {
	W()
	//pol
	w.D(200, 300).pol({
		v: [[0, 100], [0, -100], [200, -150], [200, 150]],
		c: 'y', C: 'w', l: 5,
		bm: 1
	})
	w.D(800, 300).pol({
		v: [
			[[5, 100], [0, -100], [200, -150], [200, 150]],
			[[-50, 50], [-50, -100], [450, -50], [450, 50]]
		],
		c: 'b', C: 'X',
		bm: 1
	})
	b = w.D(100, 300)
	pf = b.pol({
		s: 1, C: 'y',
		v: [[-200, -100], [0, -200], [100, -100]]
	})
	pfs = b.pol({
		s: 1, C: 'o',
		v: [[-100, 0], [0, -200], [100, 20], [0, -150]]
	})
	cf = b.cir({k: 'cir', r: 100, x: 200, y: -100, d: .2, b: .8, f: 100, C: 'x'})
	rf = b.rec({x: 100, y: 100, w: 10, h: 100, C: 'x'})
	//turtle
	turtle = [
		['g', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]],
		['y', [10, -10], [20, -30], [50, -15], [45, -5]],
		['y', [-50, 10], [-50, -10], [-40, -10], [-40, 10]],
		['y', [-10, 10], [-10, -10], [0, -10], [0, 10]],
		['x', 10, 55, -12],
		['u', 30, 40, 75, -12]]
	w.D(400, 280, turtle, '-')  //this changes the data object for future uses !!!
	w.D(600, 280, [
		['g', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]],
		['y', [10, -10], [20, -30], [50, -15], [45, -5]],
		['y', [-50, 10], [-50, -10], [-40, -10], [-40, 10]],
		['y', [-10, 10], [-10, -10], [0, -10], [0, 10]],
		['x', 10, 55, -12, '-'],
		['u', 30, 40, 75, -12, '-']])
}
 
 
DIMS = function () {
	W([600, 400, 1400, 400], {g: 10})
	y = w.y(100, 200).tr()
	//	w.i.dot(300, 400)
//	w.i.dot(300, 200)
//$l(t.cen())
	wd = w.i.W();
	$l('w.i.W() : ' + wd)
	ht = w.i.H();
	$l('w.i.H() : ' + ht)
}
$L('polyCir','verts')
//subtract from one vert
v.sub = v.s =function () {var v = this, g = G(arguments),o
	o = V(g.f, g.s)
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	return V(v.x - o.x, v.y - o.y)
}

//subtract from a whole bunch of verts and get back array
b2d.sub =  function (vs, p) {
	return _.m(vs, function (v) {
		return V(v).sub(p)
	})
} //b2d.ptsMinus = b2d.vertsMinus =
v.add = v.a = function () {
	var v = this, g = G(arguments) //if (g.t) {return _.m(g, function (g) {return v.add(g)})}
	var v1 = g.u ? V(1, 1) : V(g.f, g.s)
	return V(v.x + v1.x, v.y + v1.y)
}
b2d.add = function (vs, p) {
	return _.m(vs, function (v) {
		return V(v).add(p)
	})
}
pD.tlNeg = pD.reg =  function (x, y) {var pD=this
	
	var v= V(x, y)
	return M.p( b2d.sub( pD.vs(), v  ))
}// pD.tl2 = pD.translate =   pD.from = pD.cameFrom =pD.translateBackTo =pD.rel =
pD.tl    =  function (x, y) {
	var pD = this
	return M.p(b2d.add(pD.vs(), V(x, y)))
}//pD.tlAdd = pD.butHere = pD.to = pD.at = pD.ger =
pD.maybeTl = function (xy) {
	var pD = this
	return xy ? pD.tl(xy) : pD
}//= pD.maybeHere

$pol = $poly = function (pD, xy) {
	pD = S(pD) ? $vs[pD] : pD
	return $pD(pD).maybeTl(xy)
}
Cols = ['r', 'g', 'o', 'B'];
cols2 = ['r', 'g', 'b', 'y']
col = "rgba(255, 0, 0, 0.1)"
cols = ["#91ab19", "#ab9119", "#e5ce35", "#ab1998"]
gpc.ops = ['difference', 'intersection', 'union', 'xor']
function verts() {
	$vs = {}
	$vs.expl = [[0, 100], [-100, 0], [0, -100], [100, 0]]
	$vs.witch = [[[-40, -20], [0, -100], [50, 25]]]
	$vs.CoolPlat = [['g', 50, 200], ['o', 200, 50], ['r', 100, 100]]
	sqr = [[-50, 50], [-50, -50], [50, -50], [50, 50]]
	combo = [[-100, 0], [-100, -100], [0, -100], [0, 0], [-98, 2]]
	flatTri = [[400, 0], [800, 100], [120, 120]]
	vs1 = [
		[61, 68],
		[145, 122],
		[186, 94],
		[224, 135],
		[204, 211],
		[105, 200],
		[141, 163],
		[48, 139],
		[74, 117]
	];
	vs2 = [
		[131, 84],
		[224, 110],
		[174, 180],
		[120, 136],
		[60, 167],
	];
	vs3 = [
		[190, 140],
		[170, 180],
		[160, 160]
	]
	vs4 = [
		[131, 84], [224, 110], [174, 280], [120, 136], [60, 167],
	]
}