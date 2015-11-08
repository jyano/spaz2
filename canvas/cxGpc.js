x = CanvasRenderingContext2D.prototype
x.pol = function (vs, ox, oy) {
	var x = this;
	ox = N(ox, 0);
	oy = N(oy, 0)
	x.b()
	x.mt(_.f(vs)[0] + ox, _.f(vs)[1] + oy)
	_.e(_.r(vs), function (v) {
		x.lt(v[0] + ox, v[1] + oy)
	})
	return x.cp().s().f()
}
x.setup = function () {
	var x = this
	x.cR();
	x.drawPD(p1, "b", 0, -30);
	x.drawPD(p2, "r", 0, -30)
	return x
}
x.gpc = function (vs1, vs2) {
	var x = this
	$.h1('blue op red')
	x = $.cx()
	$opButs()
	p1 = $pD(vs1)
	p2 = $pD(vs2)
	x.setup()
	function $opButs() {
		function Buts() {
			var d = $.d()
			G(arguments).e(function (op) {
				d.A(But(op))
			})
		}
		
		function But(op) {
			return $.bt(op, function () {
				var pD = p1[op](p2)
				x.setup().drawPD(pD, 'g', 0, 150)
			})
		}
		
		Buts('difference', 'intersection', 'union', 'xor')
	}
	
	return x
}
x.drawPS = function () {
	var x = this, g = G(arguments), o// can take array of verts OR a gpcPoly
	o = gpc.iP(g.f) ? {vs: g.f.vs(), ss: g.s, fs: g.t, ox: g[3], oy: g[4]} :
			A(g.f) ? {vs: g.f, ss: g.s, fs: g.t, ox: g[3], oy: g[4]} :
					g.O ? g.f : {}
	return x.lW(N(o.l, 12))
			.s(o.ss || 'b')
			.f(S(o.fs) ? o.fs : o.fs ? 'w' : 'p')
			.pol(o.vs, o.ox, o.oy)
}
x.drawPD = function (pD, sC, ox, oy) {
	var x = this
	pD.eIPol(function (iPol, n, nIP) {
		var col = n ? cols[n % nIP] : oO('c', sC)
		var pol = iPol.vsArr()
		var hoCol = iPol.iH() ? 'z' : null
		x.drawPS(pol, col, hoCol, ox, oy)
	})
	return x
}
PXC = function () {
	$.cx().drawPS(flatTri, 'r', 'v')
}
GPM = function () {

	//vs2 = vs3
	x.gpc(vs1, vs2)
}
HOLEY = function () {
	x.gpc(vs1, vs4)
}
PXX = function () {
	Q('me', function () {
		$.cx().d(Q.i('me')).pol(flatTri)
	})
}
GGG = function () {
	draw = function (p, c, ox, oy) {
		$l('draw')
		ox = N(ox, 0)
		oy = N(oy, -30)
		c = c || 'B'
		vsA = function (iPol) {
			_.ari = _.arialize = function (n, fn) {
				var vs = []
				_.t(n, function (i) {
					vs.push(fn(i, vs, n, fn))
				})
				return vs;
			}
			return _.ari(iPol.getNumPoints(), function (i) {
				return iPol.pt(i)
			})
		}
		p.eIPol(function (p_, i, p, n) {
			var col = i ? Cols[i % n] : c
			$l(' -isHole #' + i + ': ' + p_.isHole())
			x.drawPolSimp(
					vsA(p_),
					col,
					p_.isHole(),
					ox, oy
			)
		})
	}
//$l('n: '+n)//if more than one poly produced, use multiple color to display
	p1 = $pD(vs1);
	p2 = $pD(vs2)
	x = $.c('w', 400, 400).ctx();
	x.drawPolSimp = function (vs, sC, hole, ox, oy) {
		var x = this
		ox = N0(ox);
		oy = N0(oy)
		x.f(hole ? "z" : "rgba(50, 50, 50, 0.1)").s(sC).l(2)
		x.b().mt(vs[0][0] + ox, vs[0][1] + oy)
		x.lt(_.m(_.r(vs), function (v) {
			return [v[0] + ox, v[1] + oy]
		}))
		x.cp().s().f()
	}
	$(x.cv()).C('y')
	draw(p1);
	draw(p2, 'r')
	_.e(gpc.ops, function (op) {
		$.bt(op, function () {
			x.clearRect(0, 0, 400, 400);
			draw(p1);
			draw(p2, "z");
			draw(p1[op](p2), "b", 0, 150)
		})
	})
	p = p1.difference(p2)
	pp = p2.difference(p1)
}
GPC = ERR=function () {
	v1 = [[61, 68], [145, 122], [186, 94], [224, 135], [204, 211],
		[105, 200], [141, 163], [48, 139], [74, 117]]
	v2 = [[131, 84], [224, 110], [174, 180], [120, 136], [60, 167]]
	p1 = M.p(v1)
	p2 = M.p(v2)
	x0 = $.can('b', 300, 200).A().ctx()
	x0.drawPs(p1, 'b', 0, -30)
	x0.drawPs(p2, 'r', 0, -30)
	$.br().A()
	xx = $.can('y', 300, 400).A().ctx()
	_.e(['D', 'I', 'U', 'X'], function (o) {
		$.bt(o, function () {
			xx.clearRect(0, 0, 400, 400)
			xx.drawPs(p1[o](p2), 'g', 0, 150)
		}).A()
	})
}
VS = function () {
	W()
	b = w.S(400, 200, 'r', 300, 200).rot(-20)//.dot()
	w.pDraw(b.P(), 50, 10).dot()
}
 
	HOL =  HOLE = function () {
		W(0)
		b = w.S(400, 400, 'r', 300, 300).f()
		b1 = w.S(400, 400, 'z', 100, 100).f()
		d = M.p(b).D(b1)
		out = w.S(300, 300, 'b', 200, 200)
		inn = w.S(300, 300, 'c', 100, 100)
		out.dif(inn)
		inn.dyn()
	}
 