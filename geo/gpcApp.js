$L()

x.drawPolSimp = function (vs, sC, hole, ox, oy) {

	
	
	
	

	var x = this
	ox = N0(ox);
	oy = N0(oy)
	
	x.f( hole ? "z" : "rgba(50, 50, 50, 0.1)").s(sC).l(2)
	
	
	x.b().mt(vs[0][0] + ox, vs[0][1] + oy)
	
	x.lt(_.m(_.r(vs), function (v) {
		return [v[0] + ox, v[1] + oy]
	}))
	
	x.cp().s().f()
}
 
pD.eachInner=function(fn){
	var pD=this
	fn()
	return pD
}
 
draw = function (p, c, ox, oy) {
	$l('draw')
	ox = N(ox, 0)
	oy = N(oy, -30)
	c = c || 'B'
	
	eachInner(p, function (p_, i, p, n) {
	
		var col = i ? Cols[i % n] : c
		$l(' -isHole #' +i +': ' + p_.isHole())
		x.drawPolSimp(
		
				vsA(p_),
				
				col,
				
				p_.isHole(),
				ox, oy
				
		)
	})
	

}
 
//$l('n: '+n)//if more than one poly produced, use multiple color to display
GGG = function () {
	p1 = $pD(vs1);
	p2 = $pD(vs2)
	x = $.c('w', 400, 400).ctx();
	$(x.cv()).C('y')
	
	draw(p1);
	draw(p2, 'r')
	_.e(gpc.ops, function (op) {
		$.bt(op, function () {
			x.clearRect(0, 0, 400, 400);
			draw(p1);
			draw(p2, "z");
			
			draw( p1[op](p2), "b", 0, 150)
		})
	})

	
	p = p1.difference(p2)
	
	pp = p2.difference(p1)
}

function _pre() {
	_.ari = _.arialize = function (n, fn) {
		var vs = []
		_.t(n, function (i) {
			vs.push(fn(i, vs, n, fn))
		})
		return vs;
	}
	vsA = function (innerPol) {
		return _.ari(innerPol.getNumPoints(), function (i) {
			return [innerPol.getX(i), innerPol.getY(i)]
		})
	}
	eachInner = function (p, fn) {
		var n = p.getNumInnerPoly()
		_.t(n, function (i) {
			fn(p.getInnerPoly(i), i, p, n)
		})
	}
	PolyDefault = gpc.g.PolyDefault;
	ArrayList = gpc.util.ArrayList;
	PolySimple = gpc.g.PolySimple;
	Clip = gpc.g.Clip;
	OperationType = gpc.g.OperationType;
	LmtTable = gpc.g.LmtTable;
	ScanBeamTreeEntries = gpc.g.ScanBeamTreeEntries;
	EdgeTable = gpc.g.EdgeTable;
	EdgeNode = gpc.g.EdgeNode;
	ScanBeamTree = gpc.g.ScanBeamTree;
	Rectangle = gpc.g.Rectangle;
	BundleState = gpc.g.BundleState;
	LmtNode = gpc.g.LmtNode;
	TopPolygonNode = gpc.g.TopPolygonNode;
	AetTree = gpc.g.AetTree;
	HState = gpc.g.HState;
	VertexType = gpc.g.VertexType;
	VertexNode = gpc.g.VertexNode;
	PolygonNode = gpc.g.PolygonNode;
	ItNodeTable = gpc.g.ItNodeTable;
	StNode = gpc.g.StNode;
	ItNode = gpc.g.ItNode;
	
	
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
	
	if(R()){
	vs2=vs3
	}
	
	Cols = ['r', 'g', 'o', 'B'];
	gpc.ops = ['difference', 'intersection', 'union', 'xor']
}
sqr = [[-50, 50], [-50, -50], [50, -50], [50, 50]]
combo = [[-100, 0], [-100, -100], [0, -100], [0, 0], [-98, 2]]
POLS = function () {
	W(50).C('w')
	p1 = M.p(sqr)
	p2 = M.p(combo)
	w.D(300, 300).pol({v: p1.U(p2)})
	w.D(300, 300).pol({v: p1.D(p2)})
}
POL1 = function () {
	W(50).C('w')
	p1 = M.p(sqr)
	p2 = M.p(combo)
	w.D(300, 300).pol({v: p1.I(p2)})
	w.D(300, 300).pol({v: p1.X(p2)})
	return
	w.pol(300, 300, p2)
	w.polS([300, 300, p1], [300, 300, p2])
	w.pol([500, 200, p1.U(p2)],
			[600, 200, p1.D(p2)],
			[700, 200, p1.I(p2)],
			[800, 200, p1.X(p2)])
}
STAMP = function () {
	W({w: 'U', g: 50})
	soda = w.S(300, 300, 'b', 300, 200)//.c('b')
	r = w.S(200, 400, 'r', 300, 200)//.c('r')
	y = w.S(240, 200, 'y', 200, 300, 0, 0, 100)//.c('y')
	_.in(1, function () {
		soda.sub(y)//, '-')
		//soda.f().C('o')
		//f = soda.f()
	})
	return
	soda.kill()
	_.in(3, function () {
		$DIF(f, r.f())
				.ps(soda, function (p) {
					soda.pol(p)
				})
	})
	w.D(800, 100).pol('g', w.D(800, 300, 'r', 100, 20))
	cross = w.D(600, 300, 'z', [
		['r', 100, 20],
		['b', 80, 30, 0, 0, 80]
	])
	cross = cross.uni().reg(cross)
	w.$(function (o) {
		w.D(o.x, o.y).pol(cross)
		w.pol(o.x, o.y, soda)
		o.f.kill()
		r.kill()
		soda.dyn()
	})
} // w.S(...).c NOT FUNC
SAUCERS = function () {
	W(0)
	b = w.S(300, 300, [['g', 30, 30], ['b', 100, 6], ['o', 100, 6, 0, 30]])
	//one way
	b1 = w.D(700, 300).vX(-10)
	ps = b.ps();
	_.e(ps, function (v) {
		b1.pol({c: 'r', v: v})
	})
	//better way
	b1 = w.D(500, 500).vX(10)
	b.ps(function (v) {
		b1.pol({v: v})
	})
	//best way
	b.copy(500, 450).vY(-10)
	p = $UNI(
			w.S(400, 280, 'y', 30, 30),
			w.S(420, 300, 'o', 30, 30),
			w.S(420, 300, 'g', 100, 6),
			w.S(420, 310, 'g', 100, 6, 0, 30))
			.ps(420, 300)
	w.$(function (o) {
		w.D(o.x, o.y).pol({v: p}).aV(2)
	})
}
GPC = function () {
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
GER = function () {
	W(30)
	$UNI(
			w.S(500, 200, 'b', 100, 100),
			w.S(600, 400, 'd', 100, 100)
	)//.dot(w)
	$UNI(
			w.S(700, 200, 'o', 100, 100),
			w.S(750, 250, 'g', 100, 100)
	)//.dot(w)
}
GER1 = function () {
	W(30)
	$UNI(
			w.S(900, 200, 'r', 100, 100),
			w.S(1000, 200, 'b', 100, 100)
	)//.dot(w)
	w.D(1000, 350).pol({
		c: 'x',
		v: w.S(1000, 450, [
			['o', 60, 60, 100, 0],
			['r', [[-20, 0], [0, -50], [100, 10]]],
			['g', 20, 100, 50, -50]
		]).uni()
	})
	w.D(1050, 500).pol(w.S(900, 500, [
		['g', 30, 80],
		['b', 40, 50, 20, 0],
		['r', 50, 20, 50, 0, 20]]).uni())
}
UNII = function () {
	W(50).Y()
	p0 = w.pol({v: p1})
	//pol1 = M.p(p1)
	// p1 = w.pol({v: pol1})
//	pol = pol1.U(p2)
//	p = w.pol( pol  )
	//p.XY(500,200) 
	//w.polU(500, 200, p1, p2)
	//w.polD(600, 200, p1, p2)
//	b = w.S(520, 120, 'b', 50, 50)
	//r = w.S(500, 100, 'r', 50, 50)
	//	w.polU(500, 200, b, r)
	//	d = w.S(500,200)//.dot('y')
	//f = d.pol({c:'w',C:'z',l:5,v:b.sum(r)})  //f[0].C('z');f[2].C('o')//f is an ARRAY OF FIXTS!!!
}
GERN = function () {
	W({g: 0}).Y()
	w.p(200, 200)
	ter = w.S(400, 400, 'g', 300, 300).K('ter')
	w.cxBul('ter', function (tFx) {
		var bu = this.B()
		_.in(1, function () {
			var exp = w.S(bu.X(), bu.Y(), 'g', 100, 100).K('ter')
			t.sub(exp)
			_.in(10, function () {
				exp.kill()
			})
		})
	})
}
WALLZ = function () {
	W(10).Y()
	x = w.S(900, 450, 'r', 250, 200)
	bb = w.S(w.w, w.h / 2, 'w', 200, 400)
	return
	w.right.scrape(bb)
	w.r_.C('o')
	bb.kill()
	b = w.S(1200, 300, 'p', 200, 100)
	b1 = w.S(1200, 300)
	return
	$DIF(w.r_.f(), b.f())
			.ps(b, function (p) {
				b1.pol(p)
			})
	b.kill()
}
BPL = function () {
	W()
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
	]
	w.D(200, 200).pol(vs1)
}
BPOL = function () {
	W()
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
	]
	w.D(200, 400).pol(vs1)
	w.D(800, 400).pol($pD(vs1))
	w.D(800, 400).pol('o', $pD(vs1))
	w.D(500, 400).pol({vs: vs1, c: 'r'})
	w.D(800, 400).pol({vs: $pD(vs1), c: 'b'})
}
DES = function () {
	W(0)
	b = w.S(300, 300, 'b', 300, 200).c('b')
	r = w.S(200, 400, 'r', 300, 200).c('r')
	y = w.S(240, 200, 'y', 200, 300, 0, 0, 100).c('y')
	cB = circ = w.D(700, 200)
	cF = circ.pC(50, 10).C('o')
	u1 = cB.uni()
	u = _.m(u1.vs(), function (v) {
		v = V(v)
		return [v.x + cB.X(), v.y + cB.Y()]
	})
	w.pol(600, 300, [u]).C('y')
	_.in(function () {
		b.sub(y, '-');
		//b.f().C('r').kill()
	})
	return
	_.in(function () {
		newBod = w.D(600, 100)
		r.ps(function (v) {
			newBod.pol('d', v)
		})
	})
	f = b.f()
	p = $DIF(f, r.f())
	p.ps(b, function (p) {
		b.pol(p)
	})
	f.kill()
	r.kill()
	circ.dyn().sub(rect)
	rect.sub(u)
	rect.dyn()
	pC.dyn()
}
MEETMORE = function () {
	b.explosion = b.exp = function () {//alert('b.exp is random!')
		var b = this, xy
		xy = b.pos()
		b.kill()
//	return R() ? b2d.sep(b2d.pC(20, 7)).XY(xy) : w.D(xy.x, xy.y).rec( 60, 60).rot(45)
		return w.D(xy.x, xy.y).rec(60, 60).rot(45)
	}
	W()
	y2 = w.y(400, 300).C('x').rot(180)
	w.S(200, 300, 'b', 200, 800).cl('bul', function (bulletFxt) {
		var bulletBody = bulletFxt.B(),
				bulPos = bulletBody.pos(),
				bulX = bulPos.x,
				bulY = bulPos.y
		bulletBody.kill()
		gPol = gpc.p([[0, 50], [-50, 0], [0, -50], [50, 0]])
		var pol = w.S(bulX, bulY),
				polFxt = pol.pol(gPol)
	})
	w.S(800, 300, 'r', 200, 800).cl('bul', function (bu) {
		this.sub(bu.B().exp(), '-')
	})
}
SEB = function () {
	W({g: 1})//w.show(function(){return b.num()})
	b = w.D(800, 300, 'r', 200, 800).stat().K('terr')
	y = w.y().lD(3).X(1100)
	p = w.p(200, 400).K('jason');
	//setTimeout(function () {p.sprite.sXY(.5)}, 1000)
	can = true
	w.b(function (cx) {
		var fixt, j, bull, terr, bX, bY, br
		if (fixt = cx.w('bul', 'terr')) {
			bull = fixt[0].B()
			terr = fixt[1].B()
			bX = bull.X()
			bY = bull.Y()
			bull.kill()
			if (can) {
				can = false
				b.minusPolyCirc(bX, bY, 100, 7)
				poly = M.p(_.m(b2d.pC(100, 7), function (v) {
					return [v.x + b.X(), v.y + b.Y()]
				}))
				verts = b.sub(poly)
				br = w.pC(bX, bY, 100, 7)  // b.sub(br) // b.verts not working :(
				b.sub(br, '-') // br.kill()
				//  b.color('r')
				can = true
			}
		}
		else if (fixt = cx.w('jason', 'bul')) {
			$l('bullet hit jason!!!!');
			j = fixt[0].body();
			j.sprite.tw([{sxy: 20, r: 100}, 1000])
		}
	})
	f = function () {
		v = h.verts()
		v.unshift('b')
		v.unshift(200)
		v.unshift(200)
		w.B.apply(w, v)
	}
	killIfSmallx = function (f) {
		var area = f.area();
		if (area < 20) {
			$l('too small: ' + area);
			f.kill()
		}
	}
}
TERREASEL = TEE = function () {
	z()
	s = stage = $St(1600, 600).A()
	h = s.h()
	h.f('b').dc(200, 200, 10)
	h2 = s.h().X(700)
	h2.f('b').dc(0, 0, 10)
	tile = function (i, j) {
		return [V(-5 + i, 130 + j), V(-5 + i, 80 + j), V(45 + i, 80 + j), V(45 + i, 130 + j)]
	}   // lower left //upper left//upper right//lower right
	draw = function () {
		terr = []
		_.t(13, function (i) {
			_.t(8, function (j) {
				terr.push(tile(i * 50, j * 50))
			})
		})
		h.drawPolygons(terr, 'b', 'r')
	}
	draw()
	t = M.p(terr[101])
	doExplosion = function (e) {
		v = V(e.stageX, e.stageY)
		exP = circ(v, 100)
		h.drawPolygon(exP, 'z')
		c = Math.p(exP) // for each existing terrain polygon, check the difference between the polygon itself and the
		// explosion polygon. This should be optimized in some way, checking only for terrain polygons
		// which are actually affected by the explosion.
		// Then we remove the terrain polygon from the array, and we add the resulting polygon(s) after
		// difference is calculated.
		iX = c.intersection(t)
		h2.drawPolygon(iX.verts())
		for (var i = terr.length - 1; i >= 0; i--) {
			totalArea = 0
		}
	} // resultPolygons =   terr[i].intersection(exP)// terr.splice(i,1)// for (var j =0; j<resultPolygons.length; j++) {terr.push(resultPolygons[j])}
	circ = function (v, rad, prec) {
		prec = N(prec) ? prec : 20
		arr = [];
		ang = 2 * Math.PI / prec
		_.times(prec, function (i) {
			pX = v.x + rad * Math.cos(ang * i)
			pY = v.y + rad * Math.sin(ang * i)
			arr.push(V(pX, pY))
		})
		return arr
	} // listeners: basically we destroy the terrain with a mouse click or a mouse drag
	// stage.on('mousedown', function(){stage.on('mousemove', doExplosion)})
	// stage.on('mouseup', function(){stage.off('mousemove', doExplosion)})
	stage.on('click', doExplosion)
	vv = [V(645, 480), V(595, 480), V(595, 430), V(645, 430)] //lower right//lower left//upper left//upper right
	h.drawPolygon(vv, 'z')
	vvv = [V(645, 380), V(595, 380), V(595, 372), V(617, 369), V(645, 373)]
	h.drawPolygon(vvv, 'z')
}
TERR = function () {
	W()
	explosion = function (x, y) {
		var c, b
		c = w.pC(x, y, 30, 5)
		b = b2d.sep(circ(V(0, 0), 30, 5)).XY(x, y)
		return {c: c, b: b}
	}
	sep = b2d.sep()
	terr = w.ter()
	w.dot(420, 200);
	w.dot(410, 210)
	t = terr[103]
	/*
	
	
	
	 s = b2d.sep(t.b.f().vs()).stat()//.XY(100,100)
	 exp = explosion(740, 395)
	 M.p(exp.cir)
	
	 dif = t.poly.D(exp.cir)
	
	 t.b.f().kill()
	
	
	 bb = b2d.sep(t.b, dif.vs()).stat().XY(0, 0)
	
	
	 // setTimeout( function(){ t.bod.X(20) }, 2000)
	
	 */
}
TER = function () {
	W().C('z')
	terr = w.ter()
	w.dot(420, 200);
	w.dot(410, 210)
	t = terr[103]
	fn = function (f) {
		f.B().kill()
	}
	o = {x1: 550, y1: 250, x2: 600, y2: 500, fn: fn}
	// w.Q(o)
	w.rad(550, 250, 35, fn)
}