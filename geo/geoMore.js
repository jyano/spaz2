function later() {
	w.vertsDOt = w.vDot = function (d) {
		var w = this
		w.dot('g', _.f(d))
		_.eR(d, function (v) {
			w.dot(v)
		})
		w.dot('r', _.l(d))
		return d
	}
	pD.dot1 = function () {
		var p = this
		p.vs(function (v) {
			w.dot('o', v)
		})
		return p
	}
	pD.dot = function (w) {
		var pD = this
		pD.vs(function (v) {
			w.dot('w', v[0], v[1])
		})
		return pD
	}
	b2d.hasAtLeastOnePolyX = b2d.hVSource = function (gP) {
		// if gP is a dP, then m_List is an array of (its inner) polySimples
		// [polySimp]
		//get just gets the index from the same (its own) array, hurray :)
		//as a bool tool, it checks to make sure that it has at least one polygon
		return gP.hasAtLeastOnePoly()
	}
	pD.minus = function (x, y) {
		var pD = this
		return M.p(
				_.m(pD.vs(), function (v) {
					return V(v).sub(x || 0, y || 0)
				})
		)
	}
	$dif = DIF = function () {
		$l('$dif DIF')
		$l('DIF')//not each of the ps?
		var g = G(arguments),
				p = M.p(g.f)
		g.eR(function (p1) {
			p = p.D(p1)
		})
		return p
	}
	h.drawPoly = h.drawPolygon = function (V, c, C, l) {
		alert('h drawPoly')
		var h = this, //h.drawConnectedLines =
				n = V.length
		h.c(c, C, l)
		_.e(V, function (v) {
			v.X = v.x
			v.Y = v.y
		})
		if (n >= 3) {
			h.mt(V[0]) //move to the FIRST//lineTo the REST
			_.in(n, function (i) {
				h.lt(V[i % n])
			})
		}
		//just a clever way to start from 1
		return h
	}
	h.drawPolys = h.drawPolygons = function (paths, C, c) {
		alert('h drawPolys')
		var h = this
		h.C(C)
		if (c) {
			h.c(c)
		}
		_.e(paths, function (p) {
			h.drawPolygon(p)
		})
		return h
	}
	b.reg = b.rel = b.toPositivePoints = b.mapToGPoly = function (p) {
		var b = this
		//my poly operations can only work with POSITIVE vertices
		//but box2d needs fixt vertices specified relative to a body
		//so this allows the body that the operation was based on to take responsibility
		//for converting them back
		//you can pass in the verts, or the gPoly itself!
		var vs = gpc.iP(p) ? p.vs() : p
		return _.m(vs, function (v) {
			v = V(v);
			return V(v.x - b.X(), v.y - b.Y())
		})
		//this returns [V,V,V...]
	}
}
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
old = function () {
	eachInner = function (p, fn) {
		var n = p.getNumInnerPoly()
		_.t(n, function (i) {
			fn(p.getInnerPoly(i), i, p, n)
		})
	}
	x.drawPolys = x.drawPs = function (pol, c, ox, oy) {
		var x = this
//this requires a gpcPoly
//if more than one poly produced, use multiple color to display
		pol.withVs(vs, function (i, vs, n) {
			x.drP(vs(), i ? cols2[i % n] : c, ox, oy)
		})
		return x
	}
	x.draw1p = function (vs, sC, holeDepr, ox, oy) {
		var x = this, g = G(arguments), o
		ox = N(ox, 0);
		oy = N(oy, 0)
		x.b().mt(vs[0][0] + ox, vs[0][1] + oy);
		x.lW(4).s(sC).f(col)
		//use pol instead?
		//var i;for (i = 1; i < _.z(vs); i++) {x.lt(vs[i][0] + ox, vs[i][1] + oy)}
		x.pol(vs, ox, oy)
		//x.cP().s().f()
		return x
	}
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
	function getY(i) {
		return this.getY(i)
	}
	
	function getX(i) {
		return this.getX(i)
	}
	
	function addPoints(pts) {
		var p = this
		pts = A(pts) ? pts : [pts]
		_.e(pts, function (pt) {
			p.addPoint(V(pt))
		})
		return p
	}
	
	function getNumPoints() {
		return this.getNumPoints()
	}
	
	function getNumInnerPoly() {
		var pD = this, n
		n = pD.getNumInnerPoly()
		return n
	}
}
function api() {
	function fSubRambling() {//otionally put a min size to allow it to be replaced
		//i guess if it's too small, don't bother
		//but calculating area could also be bottleneck?
		//f.sub uses f.dif and replaces itself on a body
		// with its (potentially) 'slimmer' self
		//lets begin:
		// we get the dif of the this and the thing we are subtracting from it...
		//here, body makes a new f from the dif (hence, it might be slimmer)
		//again... it is fixtizing the result of the gPol subtraction operation
		// it subtracted something from this... killed itself..
		// .. and now is adding a NEW fixture to replace itself..
		//but the new fixture is the difference result of subtracting something else, from it
		//so after that subtraction, it killed itself, and and now 
		// we are replacing the body that held that fixt, replaces it with the resutl
		// of the difference between it and another fixt
		//now that other thing that we subtracted from our fixt before it was killed and replaced..
		//..letst talk about that thing
		//we can optionally kill that thing too!!
		//it may have been a real manufactured body or fixt
		//... though there should be a better way than that!!! !!!! :=)(+
	}
} 