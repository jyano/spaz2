$load()

x = CanvasRenderingContext2D.prototype
//this can take array of verts OR a gpcPoly
x.drP = x.drawP = function (vs, c, hole, ox, oy) {var x = this, g = G(arguments), o, i
	o = A(g.f)||gpc.iP(g.f)?  {
		
		
		vs: g.f, ss: g.s,  fs: g.t, ox: g[3], oy: g[4]
	}:
			
			
			g.O ? g.f : {}
	
	$l('drP')
	if(gpc.iP(o.vs)){o.vs = o.vs.vs()}
	o.fs = S(o.fs)? o.fs: o.fs? 'w': 'p'
	o.ss = o.ss || 'b'
	o.l = N(o.l, 20)
	x.lW(o.l).s(o.ss).f(o.fs)
			.pol(o.vs, o.ox, o.oy)
	return x
}
//this requires a gpcPoly
x.drawPs = function (pol, c, ox, oy) {
//if more than one poly produced, use multiple color to display
	var x = this, n,p
	_.t(n = pol.nP(), function (i) {
		pol.g(i)
		if (i) {
			c = ['r', 'g', 'b', 'y'][i % n] }
		x.drP(p.vs(), c, p.iH(), ox, oy)
	})
	return x
}


PXX = function () {
	cx = $.cx()
	Q('me', function () {
		cx.d(Q.i('me'), 0, 0)
		
		
		cx.pol([
			[400, 0], [800, 100] , [120, 120]
		])
		
	})
}
PXC = function () {
	cx = $.cx()
	cx.drP( [[400, 0], [800, 100], [120, 120]],'r','v')
}

GPM = function () {
	$.h1('blue op red')
	x = $.cx()
	$.d([
		$.bt('diff', function () {
			setup()
			drawP(p1.difference(p2), 'g', 0, 150)
		}),
		$.bt('inter', function () {
			setup()
			drawP(p1.intersection(p2), 'g', 0, 150)
		}),
		$.bt('uni', function () {
			setup()
			drawP(p1.union(p2), 'g', 0, 150)
		}),
		$.bt('xor', function () {
			setup()
			drawP(p1.xor(p2), 'g', 0, 150)
		})
	])
	
	function setup() {
		x.cR();
		drawP(p1, "blue", 0, -30);
		drawP(p2, "red", 0, -30)
	}
	
	
	drawP = function (p, sC, ox, oy) {var num = p.nP()
		_.t(num, function (i) {var pol = p.gIP(i), vs = []
			_.t(pol.n(), function (i) {vs.push([pol.gX(i), pol.gY(i)]);})
			if (i == 0) {draw1p(vs, oO('c', sC), pol.iH(), ox, oy)}
			else {draw1p(vs, ["#91ab19", "#ab9119", "#e5ce35", "#ab1998"][i % num], pol.iH(), ox, oy)}
			
		})
		
	}
	
	
	draw1p = function (vs, sC, hole, ox, oy) {
		
		var i;
		
		ox = N(ox, 0);
		oy = N(oy, 0)
		
		x.b().mt(vs[0][0] + ox, vs[0][1] + oy);
		
		for (i = 1; i < _.z(vs); i++) {x.lt(vs[i][0] + ox, vs[i][1] + oy)}
		
		x.lW(4).s(sC).f("rgba(255, 0, 0, 0.1)")
		
		if (hole) {
			alert('hole')
			x.f("z")
		}
		
		x.cP().s().f()
	}
	
	
	
	p1 = $pD(vs1)
	p2 = $pD(vs2)
	setup()
}
HOLEY =   function () {
	vs2 = [
		
		
		[131, 84], [224, 110], [174, 280], [120, 136], [60, 167],
	
	
	]
	$.h1('holey - blue op red')
	x = $.cx()
	p1 = $pD(vs1)
	p2 = $pD(vs2)
	$.d([ Bt( 'diff', p1.D(p2) ), Bt('inter',   p1.I(p2) ), Bt('uni',  p1.U(p2) ), Bt('xor',  p1.X(p2) ) ])
	function setup() {
		x.cR();
		drawP(p1, "b", 0, -30);
		drawP(p2, "r", 0, -30)
	}
	function Bt(tx, p) {
		return $.bt(tx, function () {
			setup();
			drawP(p, 'g', 0, 150)
		})
	}
	function drawP(pol, sC, ox, oy) {var n
		_.t(n = pol.nP(), draw)
		function draw(i) {var p = pol.gIP(i)
			draw1p( p.pts(), col(i, n), p.iH(), N(ox, 0), N(oy, 0)) }
		function col(i){return i==0?sC:['G','n','o','v'][i%n]}
	}
	function draw1p(vs, sC, hole, ox, oy) {
	
	var v0= _.f(vs), i;
		
		ox=N(ox,0)
		oy=N(oy,0)
		x.b().mt(v0[0]+ox,v0[1]+oy)
		_.e(_.r(vs), function(v){
			x.lt(v[0]+ox, v[1]+oy)
		})
		x.lW(4).s(oO('c',sC)).f(rgba({r:255},.1))
		if (hole) { alert('hole'); x.f("z") }
		x.cP().s().f()
	}
	setup()
}





function _pre() {

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
	PolyDefault = gpcas.geometry.PolyDefault;
	ArrayList = gpcas.util.ArrayList;
	PolySimple = gpcas.geometry.PolySimple;
	Clip = gpcas.geometry.Clip;
	OperationType = gpcas.geometry.OperationType;
	LmtTable = gpcas.geometry.LmtTable;
	ScanBeamTreeEntries = gpcas.geometry.ScanBeamTreeEntries;
	EdgeTable = gpcas.geometry.EdgeTable;
	EdgeNode = gpcas.geometry.EdgeNode;
	ScanBeamTree = gpcas.geometry.ScanBeamTree;
	Rectangle = gpcas.geometry.Rectangle;
	BundleState = gpcas.geometry.BundleState;
	LmtNode = gpcas.geometry.LmtNode;
	TopPolygonNode = gpcas.geometry.TopPolygonNode;
	AetTree = gpcas.geometry.AetTree;
	HState = gpcas.geometry.HState;
	VertexType = gpcas.geometry.VertexType;
	VertexNode = gpcas.geometry.VertexNode;
	PolygonNode = gpcas.geometry.PolygonNode;
	ItNodeTable = gpcas.geometry.ItNodeTable;
	StNode = gpcas.geometry.StNode;
	ItNode = gpcas.geometry.ItNode;
	_.pu = function (arr) {
		var g = G(arguments),
				arr = g.f
		g.eR(function (it) {
			arr.push(it)
		})
		return arr
	}
	ps.pt = pD.pt = function (i) {
		var pol = this
		return [pol.gX(i), pol.gY(i)]
	}
	ps.pts = pD.pts = function () {
		var pol = this, vs = []
		_.t(pol.n(), function (i) {
			_.pu(vs, pol.pt(i))
		})
		return vs
	}
}
old = function () {
	GPD = function () {
		cx = $.cx()
		vs = [[400, 0], [800, 100], [120, 120]]
		gp = $pD()
		gp.A(vs)
		gp.A([[120, 120]])
		gp.A([[140, 100]])
		vs = gp.vs()
		cx.drP(vs, 'o', 'v')
	}
	GPP = function () {
		cx = $.cx()
		vs = [[400, 0], [800, 100], [120, 120]]
		gp = $pD()
		gp.A(vs)
		gp.A([[120, 120]])
		gp.A([[140, 100]])
		vs = gp.vs()
		cx.drP(vs, 'o', 'v')
	}
	GPCMAIN = function () {
		$.h1('blue op red')
		x = $.cx()
		$.d([
			$.bt('diff', function () {
				setup()
				drawP(p1.difference(p2), 'g', 0, 150)
			}),
			$.bt('inter', function () {
				setup()
				drawP(p1.intersection(p2), 'g', 0, 150)
			}),
			$.bt('uni', function () {
				setup()
				drawP(p1.union(p2), 'g', 0, 150)
			}),
			$.bt('xor', function () {
				setup()
				drawP(p1.xor(p2), 'g', 0, 150)
			})
		])
		function setup() {
			x.cR();
			drawP(p1, "blue", 0, -30);
			drawP(p2, "red", 0, -30)
		}
		
		drawP = function (p, sC, ox, oy) {
			var num = p.nP()
			_.t(num, function (i) {
				var pol = p.getInnerPoly(i),
						vs = []
				_.t(pol.n(), function (i) {
					vs.push([pol.getX(i), pol.getY(i)]);
				})
				if (i == 0) {
					draw1p(vs, oO('c', sC), pol.iH(), ox, oy);
				}
				else {
					draw1p(vs, ["#91ab19", "#ab9119", "#e5ce35", "#ab1998"][i % num], pol.iH(), ox, oy);
				}
			})
		}
		draw1p = function (vs, sC, hole, ox, oy) {
			var i;
			ox = N(ox, 0);
			oy = N(oy, 0)
			x.b().mt(vs[0][0] + ox, vs[0][1] + oy);
			for (i = 1; i < _.z(vs); i++) {
				x.lt(vs[i][0] + ox, vs[i][1] + oy)
			}
			x.lW(4).s(sC).f("rgba(255, 0, 0, 0.1)")
			if (hole == true) {
				x.f("#ffffff")
			}
			x.cP().s().f()
		}
		drawP(p1 = $pD(vs1), "blue", 0, -30);
		drawP(p2 = $pD(vs2), "red", 0, -30);
	}
	
	x.drawP = function (vs, sc, hole, ox, oy) {
		alert('drawP')
		ox = N(ox) ? ox : 0;
		oy = N(oy) ? oy : 0
		var x = this, i
		x.bP().mt(vs[0][0] + ox, vs[0][1] + oy)
		for (i = 1; i < vs.length; i++) {
			x.lt(vs[i][0] + ox, vs[i][1] + oy)
		}
		x.lineWidth = 2
		x.ss(sc || 'b').fs((hole == true) ? 'w' : 'p')
		return x.cP().s().f()
	}
}