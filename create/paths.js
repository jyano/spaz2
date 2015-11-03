$load()

gx.pol=function(){}


//https://en.wikipedia.org/wiki/Form_follows_function
//answer: art follows fiz structure
//art follows form follows function? form is the art
//art/fiz ~ form/function

gx._lt=function(x, y){var gx=this, g=G(arguments),o
	o = {x: g.f, y: g.s}
	gx.lt(o.x, o.y)
	return gx
}


h.lt = h._lt = function(x,y){var h = this,gx= h.graphics, g = G(arguments)
	
	//A(a) && O(a[0])
	if(AO(g.f)){
		g.e(function(v){h.lt.apply(h, v)})
		return h
	}

	
	O(g.s)?
		g.e(function (pt) {h.lt(pt)}):
		gx.lt( V(x, y).x, V(x, y).y )
	
	
	
	return h
}






h._mt = function (x, y) {var g=G(arguments)
	var pt = V(g.f, g.s)
	this.graphics.mt(pt.x, pt.y)
	return this
}
h.mt = function(){var  g = G(arguments),o
	if(g.N ) {return  this._mt(g.f, g.s)}
	o = AO(g)?  {firPt: _.f(g.f), restPts: _.r(g.f), 							
	ox: g.s, oy: g.t}: {firPt: g.f, restPts: g.r}
	return  this._mt(
		o.firPt[0] + N(o.ox,0 ), 
		o.firPt[1] + N(o.oy, 0)
	).lt( M.os( o.restPts, o.ox, o.oy ) )
}




h.pol  = function () {var h = this, g = G(arguments),o;
	//O$ >>  O(o) && !F(o) && !A(o)
	o  = O$(g.f)? g.f:
			
			N(g.s) && N(g.t)?
			{  v: g.f, x: g.s, y: g.t,  c: g.fo, C: g.fi, l: g.si  }:
			{  v: g.f, c: g.s, C: g.t, l: g.fo  }
	
	o.v = M.os( o.v, o.x, o.y)
	o = oDef(o || {})
	h.ef().es().c(o)
	
	
	if (o.bf) {
		var bf = S(o.bf)? o.bf : 'me'
		h.bf(bf, function draw() {
			h.mt(o.v).cp()
		})} 
	
	else {
			h.lt(o.v)
			h.cp()
	}
	
	return h
}



HPL=function(){

	st =$St()

	h  = st.h('+').XY(0,0)
	
	
	h.pol({v:vs1, c:'r', C:'y', bf:'flame'})
	
	h.pol(vs1, 'r', 'y',30)
	
	h.pol(vs1, 200, 200,'r', 'y', 3)

}











HDL = function () {
	__St()
	h.dl(50, 50, 200, 200)
	h.dl(V(300, 500), [500, 200])
}
CLT1 = function () {
	__St();
	h.dg()
	h.lt(100, 100)
	h.lt(150, 190)
	h.lt(300, 300)
	h.lt(350, 390)
	if (R()) {
		h.cp()
	}
}
CLT = function () {
	__St();
	h.dg()
	h.mt(240, 210)
	h.lt(450, 410)
	h.lt(600, 500)
	h.lt(500, 500)
	h.cp()
}
CLT = function () {
	__St()
	h.mt(240, 210)
	//h.lt([450, 410],[600, 500], [500, 500])
	//h.lt([[450, 410], [600, 500], [500, 500]])
	//h.lt( V(450, 410), V(600, 500), V(500, 500))
	h.lt([V(450, 410), V(600, 500), V(500, 500)])
	h.cp()
}
CJGPC = CJG = function () {
	$.h1('easel gpc');
	st = $St();
	h = st.h()
	p1 = $pD(vs1);
	p2 = $pD(vs2)
	Bt('diff', 'D');
	Bt('inter', 'I');
	Bt('uni', 'U');
	Bt('xor', 'X')
	setup()
	function drawP(pol, sC, ox, oy) {
		pol.e(function (p, i, n) {
			var col = oO('c', i == 0 ? sC : ['G', 'n', 'o', 'v'][i % n])
			h.f(p.iH() ? 'z' : rgba({r: 255}, .1)).l(4).s(col)
			h.vs(p.pts(), ox, oy)
					.cp().s().f()
		})
	}
	
	function setup() {
		h.clr(400, 400);
		drawP(p1, "b", 0, -30);
		drawP(p2, "r", 0, -30)
	}
	
	function Bt(tx, op) {
		return $.bt(tx, function () {
			var p = p1[op](p2)
			setup();
			drawP(p, 'g', 0, 150)
		})
	}
}
CJG2 = function () {
	__St()
	bts()
	setup()
	function drawP(pD, sC, ox, oy) {
		pD.e(function (innerPoly, i, n) {
			var col = oO('c', i == 0 ? sC : ['G', 'n', 'o', 'v'][i % n])
			h.f(innerPoly.iH() ? 'z' : rgba({r: 255}, .1))
					.l(4).s(col)
					.vs(innerPoly.pts(), ox, oy).cp()
					.f().s()
		})
	}
	
	function setup() {
		h.clr(400, 400);
		drawP(p1, "b", 0, -30);
		drawP(p2, "r", 0, -30)
	}
	
	function bts() {
		Bt('diff', 'D');
		Bt('inter', 'I');
		Bt('uni', 'U');
		Bt('xor', 'X')
		function Bt(tx, op) {
			return $.bt(tx, function () {
				var p = p1[op](p2)
				setup();
				drawP(p, 'g', 0, 150)
			})
		}
	}
}
CJG1 = function () {
	__St()
	bts()
	setup()
	function drawP(pD, sC, ox, oy) {
		pD.e(function (innerPoly, i, n) {
			var sCol = oO('c', i == 0 ? sC : ['G', 'n', 'o', 'v'][i % n]),
			fCol= innerPoly.iH() ? 'z' : rgba({r: 255}, .1),
			v= innerPoly.pts()
			h.c(fCol, sCol, 4).mt(v, ox, oy)
			//h.pol(v, ox, oy, fCol, sCol, 4)
			 h.cp();h.f().s()
	 	})
	}
	
	
	
	function setup() {
		h.clr(400, 400);
		drawP(p1, "b", 0, -30);
		drawP(p2, "r", 0, -30)
	}

	
	function bts() {
		Bt('diff', 'D');
		Bt('inter', 'I');
		Bt('uni', 'U');
		Bt('xor', 'X')
		function Bt(tx, op) {
			return $.bt(tx, function () {
				var p = p1[op](p2)
				setup();
				drawP(p, 'g', 0, 150)
			})
		}
	}
}
CPOL = function () {
	__St()
	vs = [V(240, 210), V(450, 410), V(600, 500), V(500, 500)]
	//h.lt([450, 410],[600, 500], [500, 500])
	//h.lt([[450, 410], [600, 500], [500, 500]])
	//h.lt( V(450, 410), V(600, 500), V(500, 500))
	h.pol({
	
		c: 'r',
		C: 'b',
		l: 20,
		v: vs
	})

}


h.dl = h.ln = h.line = function () {
	var h = this, g = G(arguments), o
	o = g.N_ ?
	{x1: g.f, y1: g.s, x2: g.t, y2: g[3]} :
	{x1: g.f.x, y1: g.f.y, x2: g.s.x, y2: g.s.y}
	this.mt(o.x1, o.y1).lt(o.x2, o.y2)
	return this
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
 
}
//toAlert:
gx.fancyLt = gx.poly = function (vs, f, s, w) {
	alert('gx.fancyLt = gx.poly')
	var gx = this, g = G(arguments), o
	o = AA(g.f) ? {vs: g.f, cCL: [g.s, g.t, g[3]]} : {vs: g}
	if (o.cCL) {
		gx.cCL.apply(gx, o.cCL)
	}
	_.e(o.vs, function (v) {
		gx.lt(v[0], v[1])
	})
	gx.cp()
	return this
}
//alpha:
h.$vs = function (polVs, ox, oy) {
	if (gpc.iP(polVs)) {
		polVs = polVs.vs()
	}
	return this.vs(polVs, ox, oy)
}
old = function () {
	h.vs1 = function () {
		var h = this, g = G(arguments), o;
		$l('h.vs')
		o = {v: g.f, ox: g.s, oy: g.t}
		o.ox = N(o.ox, 0)
		o.oy = N(o.oy, 0)
		h.mt(
				_.f(o.v)[0] + o.ox,
				_.f(o.v)[1] + o.oy
		)
		_.eR(o.v, function (v) {
			h.lt(v[0] + o.ox, v[1] + o.oy)
		})
		return h
		//  takes [pt,pt..] and draws it.. with optional offsets..
		//used by (but NOT  dependent on) gPoly 
	}
	h.vs = function (vs, x, y) {
		return this.mt(M.os(vs, x, y))
		//  takes [pt,pt..] and draws it.. with optional offsets..
		//used by (but NOT  dependent on) gPoly 
	}
}