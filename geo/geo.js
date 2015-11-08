$L('box', 'polyCir', 'apps', 'bod', 'fixt', 'verts', 'hole', 'sub', 'dest', '_preApps')
pD.U = function () {
	var pD = this, g = G(arguments), uP
	if (b2d.iB(g.f)) {
		uP = pD.U(g[0].f())
		_.eR(g.f.fs(), function (f) {
			uP = pD.U(f)
		})
		return uP
	}
	return pD.union(M.p(g[0]))
}
pD.isPolyless = pD.hasNoPolys = function () {
	return !this.hasAtLeastOnePoly()
}
//f.dif does the math and returns the answer (vs)
//returns pD with array of pS's ( pD.m_List )
//you can pass in the verts, 
// or the gPoly itself! //what about a fxt?
pD.vs = function (fn) {
	var pD = this,
			g = G(arguments),
			o = g.F ? {fn: g.f} : {num: g.f, fn: g.s},
			vs = []
	_.t(pD.n(), function (i) {
		vs.push([pD.x(i), pD.y(i)])
	})
	vs = g.n ? b2d.sub(vs, o.num) :
			g.p ? b2d.add(vs, o.num) :
					vs
	if (o.fn) {
		_.e(vs, o.fn);
		return pD
	}
	return vs
}//pD.points =//used in MEET	
w.polD = function (x, y, p1, p2) {
	return this.pol(x, y, M.p(p1).D(p2))
}
b.vs = b.gPolyVerts = b.wV = function () {
	return this.pD().vs()
}
b.rotatedVerts = b.rV = function () {
	$l('b.rV')
	var b = this, r = M.tR(b.rt()),
			vs,
			r, x, y
	vs = _.m(b.vs(), function (v) {
		v = V(v)
		x = v.x * M.c(r) - v.y * M.s(r) + b.X()
		y = v.x * M.s(r) + v.y * M.c(r) + b.Y()
		return V(x, y)
	})
	return vs
	//this returns [V,V,V...]
} //b.vs????
//b.fsGp   fsToGPol...
// for each of my fxs, 
// turn them into gP's
// and then aggregate them all
// by unioning each reductively
// so it gets bigger and bigger..
b.pD = function () {
	var b = this,
	
	 f = b.f(), g = G(arguments), pD = $pD()
	
	
	if (!f) {
		return pD
	}
	// if the body has no freqkin fixts.. 
	// if its an infant body , massless? fixtureless
	pD = M.p(f)
	_.eR(b.fs(), function (f) {
		pD = pD.U(f)
	})
	return pD
}



pD.eachPol = pD.eachPoly = pD.eP = function (fn) {
	var pD = this, polys = []
	_.t(pD.nP(), function (i) {
		fn(pD.g(i), pD, i)
	})
	
}

pD._ps= pD._pols= pD._polys = function () {var pD=this
	var polys = []
	
	pD.eP(function (poly) {
		polys.push(poly)
	})
	
	return polys
}



b2d.tlNeg=b2d.reg = function (ps, b) {
	return _.m(ps, function (poly) {
		return poly.tlNeg(b)
	})
}

pD.ps =  pD.polys =  pD.hs = pD.pols = function () {
	var pD = this, g = G(arguments),o
	var ps = pD._ps()
	
	
			o = b2d.iB(g.f) ? {ps: b2d.tlNeg( ps, V(g.f)), fn: g.s} :
					g.N_ ? {ps: b2d.tlNeg(ps, V(g.f, g.s)), fn: g.t} :
					{fn: g.f}
	o.ps = o.ps || []
	
	if (!g.n) {o.ps = _.m(o.ps, M.p)}
	if (F(o.fn)) {_.e(o.ps, o.fn); return pD}
	
	return o.ps
} // used in MEET



b.sum = function (b1) {
	return $UNI(this, b1).vs(this, '-')
}
b.cloneTo = b._cloneTo = b.polif = b.polEachFTo = function (b1) {
	this.fs(function (f) {
		f.cloneTo(b1)
	})
	return b1
}
b.clone = b.cloneNew = b.pClone = b.polyClone = function (x, y, rt) {
	var b = this
	x = N(x, b.X())
	y = N(y, b.Y())
	rt = N(rt, b.rt())
	var ty = b.ty()
	//make a new body at the right 'transform' (copying this body)
	var b1 = w.D(x, y).ty(ty).rt(rt)
	//then.. for each of this body's fixtures....
	// stamp it 'on' that damn body
	// when u are done.. it will be just like you !!!
	return b.cloneTo(b1)
}
b.copy = function (x, y) {
	return this.W().pol(x, y, this)
}
b.without = b.dif = function (o) {
	var b = this, g = G(arguments),
			f = b.f(), fs = b.fs(), p
	if (b.n() == 1) {
		return b.f().dif(o, '-')
	}
	p = $dif(b, o).reg(b)
	if (g.n) {
		if (b2d.iB(o) || b2d.iF(o)) {
			o.kill()
		}
		else {
			b.kill()
		}
	}
	return p
}
b.pos = function () {
	return this.tf().position.m()
}//used in MEET
b.killXY = b.KPos = b.KXY = function () {
	var b = this
	var xy = b.XY();
	b.kill();
	return xy
}


b.ps = function (fn) {var b = this
	var			arr = []
		var	p = b.uni()
			
	if (F(fn)) {
		p.ps(b, fn);
		return b
	}
	
	p.ps(b, function (v) {
		arr.push(v)
	})
	
	return arr
}


//b2d.hV = b2d.hasVerts = gpc.hV
f.area = f.A = function () {
	return M.p(this).getArea()
}
f.gPolyWorldVerts = f.tGP = function () {
	return $pD(this.wV())
}
// *** cloning *****
// f._clone  for some reason will let you 'stamp' in a specified body
f.vsA = function () {
	var f = this
	return _.m(f.vs(), function (v) {
		return [v.x, v.y]
	})
}
// f.polTo will get the verts from its shape..
// conver it to an array of arrs,
// and it will polif the specified body with that vsA
// b.polEachF will take a different body..
// and it will polif that body with EACH if its fs
f.cloneTo = f._clone = f.cloneoOn = f.polif = f.polTo = function (b) {
	var f = this
	if (f.isCir()) {
		var h = f.H()
		var x = h.m_p.x * 30
		var y = h.m_p.y * 30
		b.cir(h.rad(), x, y, $r())
	}
	else {
		b.pol({c: $r(), v: f.vs()})
		// alt??! b.pol( f.vsA() )
		// maybe both work???
	}
	return f
}
 f.polyDotWorVerts = f.dots = function () {
	var f = this;
	b2d.pD = b2d.polyDot = function (vs) {
		var t = 0
		vs = A(vs) ? vs : vs.wV
		w.dot('g', V(_.f(vs)))
		_.e(vs,
				function (v) {
					$.in(t, function () {
						w.dot(V(v))
					}, t)
					t += .1
				}
		)
		w.dot('r', V(_.l(vs)))
	}
	b2d.polyDot(f.wV())
	return f
}
f._vs = function () {
	var f = this
	var h = f.H()
	vs = h.m_vertices
	return _.m(vs, b2d.m)
}
//f.pts=
f.vs = function () {
	var f = this, b = f.B(), g = G(arguments)
	var fn = g.n ?
			function (a) {
				return a
			} : function (v) {
		return v.rt(b.rt())
	}
	return b2d.tA(_.m(f._vs(), fn))
}//f.points = f.verts = f.vertices =
 
function alph() {
	HULL = function () {
		z()
		c = $.c('y', 800, 400).id('canvas').A()
		window.onload = init
		function init() {
			var canvas = c[0],        // main canvas element
					fps = 10,                                        // drawing frames per second
					convex = new Convex(),                            // convex hull
					dots = []                                     // dots, which are not in the convex hull
			// adjust canvas proportions
			// canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight;
			// assign canvas context
			ctx = canvas.getContext("2d");
			setInterval(function () {
				
				// get a blank canvas //// clear
				ctx.clearRect(0, 0, ctx, canvas.width, ctx.canvas.height)
				// draw convex dots
				convex.draw()
				// draw dots
				dots.map(function (dot) {
					dot.draw()
				})
			}, 1000 / fps)
			// clicked on canvas
			c.click(function (evt) {
				var x = evt.clientX - canvas.getBoundingClientRect().left,
						y = evt.clientY - canvas.getBoundingClientRect().top
				// clear convex
				convex.dots = []
				// add dot
				dots.push(new Dot(new V(x, y)))
			})
			$.bt('draw convex', function () {
				// move dots to canvas
				dots.map(function (dot) {
					convex.addDot(dot)
				})
				// clear dots
				dots = []
			}).A()
		}
		
		var Dot = function (pos) {
			this.pos = pos
		}
		Dot.prototype = {
			draw: function () {
				ctx.beginPath();
				ctx.arc(this.pos.x, this.pos.y, 2, 0, Math.PI * 2);
				ctx.fill();
				ctx.closePath();
			}
		}
		Convex = function () {
			this.dots = []
		} // a convex hull
		Convex.prototype = {
			draw: function () {
				var _this = this, refDots;
				// loop through dots
				this.dots.map(function (el) {
					var dotAfter;
					// draw dot
					el.draw();
					refDots = _this.copyDots(_this.dots); // copy dots
					// remove el from reference dots
					for (var i = 0; i < refDots.length; i++) {
						if (refDots[i] != el) continue;
						refDots.splice(i, 1);
					}
					// get dot after this dot
					dotAfter = _this.getDotAfter(_this.dots, el);
					// draw direct line
					ctx.moveTo(el.pos.x, el.pos.y);
					ctx.lineTo(dotAfter.pos.x, dotAfter.pos.y);
					ctx.stroke();
				})
			},
			addDot: function (dot) {
				// the dot cannot be added, because it wouldn't be a convex anymore
				if (this.isDotInsideConvex(this.dots, dot)) return;
				// add dot intentionally
				this.dots.push(dot);
				// less than four dots are always a convex
				if (this.dots.length < 4) return;
				// remove dots, which are not in the convex (anymore)
				this.composeConvexHull();
			},
			composeConvexHull: function () {
				var refDots,        // all dots, except the one we are testing
						dot,            // the dot, supposed to be in the new convex
						newDots = [];    // dots, which are definitely part of the convex
				// loop dots
				for (var i = 0; i < this.dots.length; i++) {
					
					// reset dots reference
					refDots = this.copyDots(this.dots);
					// assig dot to the current index
					dot = refDots[i];
					// remove dot from refDots
					for (var h = 0; h < refDots.length; h++) {
						if (h != i) continue;
						refDots.splice(h, 1);
						break;
					}
					// the dot is not inside of the convex, therefore add it
					if (!this.isDotInsideConvex(refDots, dot)) {
						newDots.push(dot);
					}
				}
				// assign new convex
				this.dots = newDots;
			},
			/*
			 copy dots object
			 this is done due to call by reference
			 */
			copyDots: function (ref) {
				var dots = [];
				ref.map(function (dot) {
					dots.push(new Dot(new V(dot.pos.x, dot.pos.y)));
				});
				return dots;
			},
			isDotInsideConvex: function (convexDots, dot) {
				var dotBefore, dotAfter, sign;
				// at least three dots required for a convex
				if (convexDots.length < 3) return false;
				// the dot is definitely not inside the convex hull
				if (this.dotOutsideConvexRect(convexDots, dot)) return false;
				// assign dot before to the closest dot by the angle, which is negative
				dotBefore = this.getDotBefore(convexDots, dot);
				// assign dot after to the closest dot by the angle, which is positive
				dotAfter = this.getDotAfter(convexDots, dot);
				// dot on the inside of the line from dotBefore to dotAfter
				return dot.pos.getSide(dotBefore.pos, dotAfter.pos) == 1;
			},
			/*
			 is the dot outside of the convex rectangle?
			 */
			dotOutsideConvexRect: function (convexDots, dot) {
				var outside = [true, true, true, true];
				for (var i = 0; i < convexDots.length; i++) {
					if (convexDots[i].pos.x < dot.pos.x)
						outside[0] = false;
					if (convexDots[i].pos.x > dot.pos.x)
						outside[1] = false;
					if (convexDots[i].pos.y < dot.pos.y)
						outside[2] = false;
					if (convexDots[i].pos.y > dot.pos.y)
						outside[3] = false;
				}
				return outside[0] || outside[1] || outside[2] || outside[3];
			},
			/*
			 get middle position as vector from the bounding dots
			 */
			getCenter: function (dots) {
				var rect = {xMin: dots[0].pos.x, xMax: dots[0].pos.x, yMin: dots[0].pos.y, yMax: dots[0].pos.y};
				dots.map(function (dot) {
					if (dot.pos.x < rect.xMin) rect.xMin = dot.pos.x;
					if (dot.pos.x > rect.xMax) rect.xMax = dot.pos.x;
					if (dot.pos.y < rect.yMin) rect.yMin = dot.pos.y;
					if (dot.pos.y > rect.yMax) rect.yMax = dot.pos.y;
				});
				return new V((rect.xMin + rect.xMax) / 2, (rect.yMin + rect.yMax) / 2);
			},
			/*
			 get the closest dot before dot from dots
			 */
			getDotBefore: function (dots, dot) {
				var center, bgRad = -Math.PI * 2, dotBefore;
				center = this.getCenter(dots);
				dotRad = center.angleTo(dot.pos);
				dots.map(function (needleDot) {
					var needleRad = center.angleTo(needleDot.pos),
							refRad = needleRad - dotRad;
					if (refRad > 0) refRad = -(Math.PI * 2 - refRad);
					if (refRad <= bgRad) return;
					bgRad = refRad;
					dotBefore = needleDot;
				});
				return dotBefore;
			},
			/*
			 get the closest dot after dot from dots
			 */
			
			getDotAfter: function (dots, dot) {
				var center, smRad = Math.PI * 2, dotAfter
				center = this.getCenter(dots)
				dotRad = center.angleTo(dot.pos)
				dots.map(function (needleDot) {
					var needleRad = center.angleTo(needleDot.pos),
							refRad = needleRad - dotRad;
					if (refRad > 0) refRad = -(Math.PI * 2 - refRad)
					if (refRad >= smRad) return
					smRad = refRad
					dotAfter = needleDot
				})
				return dotAfter
			}
		}
		var V = function (x, y) {
			this.x = x
			this.y = y
		}
		V.prototype = {
			subtract: function (v) {
				return new V(this.x - v.x, this.y - v.y);
			},
			/*
			 this = center, v = destination
			 */
			angleTo: function (v) {
				var ref = this.subtract(v)
				return Math.atan2(ref.y, ref.x) + Math.PI
			},
			/*
			 0 = on line, 1 = inside, -1 = outside
			 */
			getSide: function (v1, v2) {
				return Math.sign((v2.x - v1.x) * (this.y - v1.y) - (v2.y - v1.y) * (this.x - v1.x))
			}
		}
	}
}
function points() {
	PDPS = function () {
		W(10).roof.kill()
		b = w.brick()
		p = M.p(b)
		p.ps(b, function (p) {
			w.D(300, 400).pol(p)
		})
		//w.i.dot(300, 400)
	}
}
function draw() {
	VS = function () {
		W()
		b = w.S(400, 200, 'r', 300, 200).rot(-20)//.dot()
		w.pDraw(b.P(), 50, 10).dot()
	}
}
 
function hole() {
	HOL = function () {
		W();
		$l('hol')
		b = w.S(400, 400, 'r', 300, 300).f()
		b1 = w.S(400, 400, 'z', 100, 100).f()
		d = M.p(b).D(b1)
	}
	HOLE = function () {
		W(0)
		out = w.S(300, 300, 'b', 200, 200)
		inn = w.S(300, 300, 'c', 100, 100)
		out.dif(inn)
		inn.dyn()
	}
}
 
b._pol = function (v, c, i) {
	var b = this,
			newFs, spr
	newFs = b.sepNew(v, withF)
	if (i) {
		spr = w.gx.h()
		spr.bV({v: v})
		b.bS(spr)
	}
	return newFs
	function withF(f) {
		f.c(c || 'x')
		if (o.lf) {
			f.bS(w.st.h().lf(o).lt(o.v))
		}
		if (o.rf) {
			f.bS(w.st.h().rf(o).lt(o.v))
		}
	}
}
b.pol = function () {
	var b = this, w = b.W(), g = G(arguments), o
	var newFs
	if (g.u) {
		return b
	}
	if (b2d.iB(g.f)) {
		g.f.fs(b);
		return b
	}
	//if passed [[ color and ]] verts:
	o = S(g.f) && gpc.iP(g.s) ? {c: g.f, v: g.s} :
			gpc.iP(g.f) ? {v: g.f} :
					b2d.iF(g.f) ? {v: g.f.vs()} :
						// pass in  [[],[],[]]   or  ['r',[],[],[]]
							g.A && S(g.f[0]) ? {c: g.f[0], v: _.r(g.f)} : g.A ? {v: g.f} :
									g.O ? g.f : g.O_ ? {v: g} : //pass in [],[]
											g.t ? {c: g.f, v: g.r} : // pass in 'r', [], []
											{c: g.f, v: g.s}   //pass in  {c:'r', v:[[],[],[]]}
	_oo = o
	$df.h(o)
	o.i = o.i || o.bf
	//$l('check _o');
	_o = o
	newFs = b.sepNew(o.v, function (f) {
		f.set(o)
		f.c(o.c, o.C, o.l)
		if (o.lf) {
			f.bS(w.st.h().lf(o).lt(o.v))
		}
		if (o.rf) {
			f.bS(w.st.h().rf(o).lt(o.v))
		}
	})
	if (o.i) {
		__h = w.gx.h().bV(o)
		b.bS(__h)
	}
	return newFs
}
b.sep = function (verts, scale) {
	var body = this
	if (!O(verts)) {
	//	alert('o.v must be object');
		return
	}
	if (gpc.iP(verts)) {
		verts = verts.vs()
	}
	//needs array of verts.. or one vert (which is converted here to arr)
	_.e(O(verts[0][0]) ? verts : [verts], function (v) {
		b2d.sep(body, v, scale)
	})  //  'sep' each of the verts onto the body
	return this
}
b.sepNew = function (vs, fn) {
	//this proxies to b.sep.. but has two advantages
	//- it returns NEW fixtures formed in an array
	//- if u pass in a function, then it loops those fxs
	// //alt:if only one fixture added.. it is returned as a single fixture (not in array) ?
	var n = this.n(),
			b = this.sep(vs),
			numNewFs = b.n() - n,
			newFs = _.f(b.fs(), numNewFs)
	if (F(fn)) {
		_.e(newFs, fn)
	}
	return newFs
	//return newFs[1]? newFs: newFs[0]
}
w.pol = function () {
	var w = this, g = G(arguments), b, o
	if (g.A) {
		$l('w.pol g.A')
		return $a(w, 'pol', g.f)
	}
	if (g.OO) {
		$l('w.pol g.OO')
		g.e(function (g) {
			w.pol(g)
		})
		return w
	}
	// if(g.N_ && N(g.s) && O(g.t) &&U(g[3])){return w.D(g.f,g.s).pol(g.t)}
	if (g.N_ && N(g.s) && O(g.t)) {
		$l('w.pol g.N_ && N(g.s) && O(g.t)')
		b = w.D(g.f, g.s) // if(iB(g[2])){ g[2]= g[2].wV()} //M.p(g[2]).vs()
		_.e(g.t, function (p) {
			b.pol({v: p})
		})
		return g.m ? M.p(b) : b
	}
	$l('w.pol !(  g.N_ && N(g.s) && O(g.t)) ')
	o = g.O ? g.f :
			N(g.f) ? {x: g.f, y: g.s, p: g.t}
					: {p: g.f}
	o.x = N(o.x, w.hW)
	o.y = N(o.y, w.hH)
	o.p = M.p(o.p)
	b = w.D(o.x, o.y)
	if (!g.p) {
		$l('!g.p')
		if (b2d.iB(o.p)) {
			$l('w.pol b2d.iB(o.p)')
			o.p = M.p(o.p)
		}
		else {
			$l('w.pol ! (b2d.iB(o.p))')
		}
		_p = o.p
		$l('pre b')
		b.pol(o.p)
		$l('post b')
		if (g.m) {
			$l('g.m')
			b = M.p(b)
		}
		else {
			$l('!g.m')
		}
		return b
	}
	if (o.rg) {
		$l('o.rg')
		o.p.ps(o.rg, function (p) {
			b.pol(o)
		})
	}
	else {
		$l('!o.rg')
		o.p.ps(function (p) {
			b.pol(o)
		})
	}
	return b.f()
}
 
 
 
// is body.Isactive??
//alt way to handle explosion sub
//w.rad(bulletX, bulletY, 15, function (terrainFxt) {terrainFxt.sub( explosionPol )})
function verts() {
	MEET = function () {
		W([1200, 600, 1800, 600], {g: 10})
		y2 = w.y(100, 300).C('x').rot(180)
		t = ter = w.S(500, 300, 'g', 200, 800).cl(function (buF) {
			var bu = buF.B(), xy = bu.XY()
			bu.kill()
			pol = gpc.p($vs.expl).ger(xy)
			t.fs(function (f) {
				f.sub(pol)
			})
			t.C('r')
		})
		//alt way to handle explosion sub
		//w.rad(bulletX, bulletY, 15, function (terrainFxt) {terrainFxt.sub( explosionPol )})
	}
}
function box() {
	b2d.recVerts = b2d.recPoints = b2d.recPts = b2d.recV = function (x, y, w, h) {
		var hW = w / 2, hH = h / 2
		return [[x - hW, y - hH], [x + hW, y - hH],
			[x + hW, y + hH], [x - hW, y + hH]]
	}
	b2d.tF = b2d.toFxt = function (f) {
		return b2d.iB(f) ? f.f() : f
	}
	b2d.iG = b2d.iGP = b2d.isGPoly = function (a) {
		return O(a) && F(a.isHole)
	}
	b2d.miniX = function () {
		iF = b2d.iF;
		iB = b2d.iB;
		iP = b2d.iGP
		pD = function () {
			return new PolyDefault()
		}
	}
	b2d.divPoints = b2d.divPts = b2d.vs = function () {
		var g = G(arguments)
		//all this does is to 'scale down' a series of points
		//can pass in pts naked OR in an array
		return _.m(
				g.s ? g : //passed in verts ([],[],[])
						g.f,
				b2d.div
		) //passed an array [[],[],[]]
		//b2d.div <- function div(v){return V(v).div()}	
	}
	b2d.overlapping = b2d.ol = function (b1, b2) {
		//alert('b2d.ol overlapping')
		var v1 = M.p(b1),//wont work yet
				v2 = M.p(b2)
		var p = v1.union(v2)
		return !(_.isEqual(p.vs(), v1.vs()) ||
		_.isEqual(p.vs(), v2.vs()))
	}
}
M.p = b2d.gpcPD = function () {
	//it expects worldVerts....
//it works with worldVerts...
//it was designed   with
//that in
//mind
	var g = G(arguments), p, b, fs, vs
	if (b2d.iGP(g.f)) {
		return g.f
	}
	if (b2d.iB(g.f)) {
		vs = g.f.wV()
		_.eR(g.f.fs(), function (v) {
			vs = vs.uni(v)
		})
	}
	else {
		vs = b2d.iF(g.f) ? g.f.wV() :
				g.f
	}
	return $pD(vs)
}
f.scrapeBodWith = f.subFromBod = function (b) {
	b.fs(function (f) {
		f.sub(b)
	})
}
w.polU = function (x, y, p1, p2) {
	//alert('w.polU')
	return this.pol(x, y, M.p(p1).U(p2))
}
pD.plus = function (x, y) {
	//alert('pD.plus')
	return M.p(_.m(this.vs(), function (v) {
		return V(v).add(x || 0, y || 0)
	}))
}
 
w.md1 = function (fn) {
	return this.md(function (a, b, c) {
		if (self.used) {
			return
		}
		fn(a, b, c)
		self.used = 1
	})
}//
MOREDFF = function () {
	W({w: 0})
	y = w.S(500, 100, 'y', [[100, 100], [100, 100, 0, 0, 45]]).rot(20)
	g = w.S(550, 150, 'g', [[100, 100], [100, 100, 0, 0, 45]])
	y1 = w.S(700, 100, 'y', [[100, 100], [100, 100, 0, 0, 45]]).rot(20)
	g1 = w.S(750, 150, 'g', [[100, 100], [100, 100, 0, 0, 45]])
	w.md1(function () {
		g.sub(y)
		g.dyn()
		y1.sub(g1)
		y1.dyn()
	})
}
DFF1 = function () {
	W()
	var white = w.S(700, 400, 'w', 100, 100),
			red = w.S(700, 400),
			f = red.pol({
				c: 'r', o: .2,
				v: [[-100, 10], [-80, -40], [0, -200], [100, -60]]
			}),
			yellow = w.S(930, 300, 'y', [[100, 100], [100, 100, 0, 0, 45]]),
			green = w.S(1030, 400, 'g', 200, 200)
	w.md(function () {
		white.sub(red, '-')
		red.dyn()
		green.sub(yellow, '-').dyn().lV(-60, -10)
	})
	recV = function () {
		w.pol(400, 300,
				w.S(200, 350, 'b',
						[-80, 10], [0, -150],
						[100, 100]).dif(
						b2d.recV(280, 420, 100, 100)))
	};
	//recV()
}
SUB = function () {
	W(20).Y();
	y.rot(90).XY(20, 50)
	face = w.S(300, 400, 'b', 100, 100)
	hat = w.S(300, 400, 'w', [
		[[-100, 10], [-80, -40], [0, -200], [100, 0]],
		[20, 50]
	])
	redRec = w.S(900, 350, 'r', 200, 100)
	blueBody = w.S(1000, 300)
	fixt1 = blueBody.rec({c: 'b', w: 100, h: 100})
	fixt2 = blueBody.rec({c: 'b', w: 100, h: 100, x: 30, y: 30})
	_.in(2, function () {
		face.f().sub(hat, '-')
		redRec.f().sub(blueBody, '-')
		redRec.C('r')
	})
	a = w.S(140, 140, 100, 100).rot(20)
	b = w.S(100, 100, 100, 100).rot(45)
	d = w.S(650, 420, 'b', 100, 100)
	b9 = w.S(610, 380, [
		['b', 40, 70, 20, -20],
		['o', 40, 70, -20, 20, '-']
	]).rot(-20)
	fs = b9.fs()
	_.in(3, function () {
		w.S(720, 400).pol(d.sub(b9, '-'))
	})
	//does not keep color!
	c = w.S(450, 300, 'w', 100, 100)
	c.minusPolyCirc(550, 300, 100, 20)
}

SENSUB = function () {
	W(0).Y()
	r = w.D(600, 350, 'r', 400, 200).grp(-1)
	b = w.D(1000, 300, [['b', 100, 100], ['b', 100, 100, 30, 30]]).grp(-1)
	w.$$(function () {
		r.fs(function (f) {
			f.sub(b)
		})
		r.grp(-1)
		b.kill()
		r.C('r')
		b = w.D(1000, 300, [['b', 100, 100], ['b', 100, 100, 30, 30]]).grp(-1)
	})
}
SUBCOL = function () {
	W(0)
	/*
	 b=w.S(300,300,'b',300,200).c('b')
	
	 r=w.S(200,400,'r',300,200).c('r')
	
	 y=w.S(240,200,'y',200,300,0,0,100).c('y')
	
	
	 _.in(function(){
	
	 y.sub(b)//.C( y.c() )
	
	 b.kill()
	
	 //b.sub(b1,'-').C('b')
	 })
	 */
	fn = function () {
		var b, p, b1
		b = w.D(900, 200, [
			['p', 200, 100], ['b', 100, 200]])
		b1 = w.D(900, 400)
		$DIF(b.fs(1), b.fs(0)).ps(b, function (p) {
			b1.pol(p)
		})
	};
	fn()
}
DFFF = function () {
	W(10)
	w.S(900, 450, 'r', 250, 200).f().sub(w.D(850, 460, 'w', 200, 100, 0, 0, -20).f())
	b = w.S(1100, 100, 'r', 100, 100)
	b1 = w.S(1050, 120, 'b', 100, 40)
	w.$$(function () {
		w.D(500, 100).pol('r',
				b.f().dif(b1.f(), '-')
		)
		b.kill()
		b1.kill()
	})
	fn = function () {
		var b = w.S(100, 100, 'r', 100, 100),
				b1 = w.S(130, 100, 'b', 100, 80)
		_.in(function () {
			b.sub(b1, '-')
		})
	}//;fn()
	fn = function () {
		var b = w.S(300, 100, 'r', 100, 100),
				b1 = w.S(330, 100, 'b', 100, 80)
		w.$$(function () {
			w.D(300, 200).pol(b.f().dif(b1, '-'))
		})
	};//fn()
	fn = function () {
		var b, o, p
		b = w.S(200, 400, 'b', [-80, -40], [0, -200], [100, 50])
		o = w.S(280, 420, 'o', 100, 100)
		p = b.dif(o)
		w.D(300, 300).pol(p)
		w.dot(300, 300)
	}//;fn()
	fn = function () {
		white = w.S(700, 400, 'w', 100, 100)
		red = w.S(700, 400)
		f = red.pol({
			c: 'r',
			v: [[-100, 10], [-80, -40],
				[0, -200], [100, -60]]
		})
		yellow = w.S(930, 300, 'y', [
			[100, 100],
			[100, 100, 0, 0, 45]])
		yel = yellow.pD().reg(yellow)
		green = w.S(1030, 400, 'g', 200, 200)
		w.md1(function () {
			red.sub(white, '-').dyn().lV(-60, -10)
			yellow.sub(green).dyn().lV(-60, -10)
			w.$(function () {
				yellow.lV(-60, -10)
			})
			_.in(2, function () {
				green.sub(w.S(930, 300).pol(yel))
			})
		})
	};//fn()
}
