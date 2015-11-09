 
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
	STAMP = function () {
		W({w: 'U', g: 50})
		soda = w.S(300, 300, 'b', 300, 200)//.c('b')
		r = w.S(200, 400, 'r', 300, 200)//.c('r')
		y = w.S(240, 200, 'y', 200, 300, 0, 0, 100)//.c('y')
		_.in(1, function () {
			soda.sub(y) //, '-')
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
	w.destructableBricks = w.ter = function () {
		var w = this, ter = []
		_.t(13, function (i) {
			_.t(8, function (j) {
				var b = w.brick(i * 25 + 420, j * 25 + 200, 20, 20)
				ter.push({
					b: b,
					vs: b.f().vs(),
					p: M.p([
						V(i * 25 + 410, j * 25 + 210),
						V(i * 25 + 410, j * 25 + 190),
						V(i * 25 + 430, j * 25 + 190),
						V(i * 25 + 430, j * 25 + 210)
					])
				})
			})
		})
		return ter
	}
	f.scrapeBodWith = f.subFromBod = function (b) {
		b.fs(function (f) {
			f.sub(b)
		})
	}
	DF8 = function () {
		W({w: 0})
		y = w.S(500, 100, 'y', [[100, 100], [100, 100, 0, 0, 45]]).rt(20)
		ggg = w.S(550, 150, 'g', [[100, 100], [100, 100, 0, 0, 45]])
		y1 = w.S(700, 100, 'y', [[100, 100], [100, 100, 0, 0, 45]]).rt(20)
		g1 = w.S(750, 150, 'g', [[100, 100], [100, 100, 0, 0, 45]])
		w.md1 = w.mouseDownOnce = function (fn) {
			return this.md(function (a, b, c) {
				if (self.used) {
					return
				}
				fn(a, b, c)
				self.used = 1
			})
		}
		w.md1(function () {
			ggg.subB(y.killXY())
			ggg.dyn()
			y1.sub(g1)
			y1.dyn()
		})
	}
	DF1 = function () {
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
	f.dif = function () {var f = this, g = G(arguments)

		var pD = f.tGP()
		
		g.e(function (v) {
			pD = pD.D(v)
		})
		
		pD = pD.tlNeg(f.B())

		if (g.n) {f.kill()}
		return pD.ifHasPol()
	}
	b.dif = b.without = function (o) {var b = this, g = G(arguments)
	
	
		var f = b.f(), fs = b.fs() 
		if (b.count() == 1) {return b.f().dif(o, '-')
		}
		
		if (g.n) {
			if (b2d.iB(o) || b2d.iF(o)) {o.kill()}
			else {b.kill()}
		}
		
		
		return $DIF(b, o).tlNeg(b)
	}
	pD._D = function (pol) {
		var pD = this
		return b2d.iB(pol) ? pol.difPol(pD) :
				pD.dif(pol)
	}
	pD.D = function () {
		var pD = this
		G(arguments).e(function (pol) {
			pD = pD._D(pol)
		})
		return pD
	}
	f.sub = function (f1) {
		var f = this, b = f.B(), g = G(arguments)
		var pD = f.dif(f1, '-')   //   kill THIS f
		if (g.n) {
			f1.kill()
		}
		if (g.p) {
			f1.dyn()
		}
		if (pD.bigEnough() || g.m) {
			b.pol(pD)
		}
		return f
	}
	
	b.subF = function (f1, x,y) {
		var b=this
		var v= V(x, y)
		
		b.fs(function (f) {
			 f.sub( $pol(f1, v)  )
		})
		
		
		return b
	}
	
	
	/*
	source:
	 pD.maybeTl = function (xy) {
	 var pD = this
	 return xy ? pD.tl(xy) : pD
	 }//= pD.maybeHere
	
	 $pol = $poly = function (pD, xy) {
	 pD = S(pD) ? $vs[pD] : pD
	 return $pD(pD).maybeTl(xy)
	 }
	
	 $pD = gpc.pD = gpc.p = function (pts) {
	
	 //make new polyDefault
	 //can add points to it
	 if (gpc.isPol(pts)) {
	 return pts
	 }
	 //if (S(pts)){ pts = $vs[pts] }
	 //ok so if it is already a gPoly, just return it..
	 //but if not (it is points).. so make a new gPoly (default) and return it
	 var pD = new gpc.PD
	 return pts ? pD.A(pts) : pD
	 }
	
	 M.p = b2d.gpcPD = function () {
	 //it expects worldVerts....
	 //it works with worldVerts...
	 //it was designed   with
	 //that in
	 //mind 
	 var g = G(arguments), p, b, fs, vs
	 if (b2d.iGP(g.f)) { return g.f	 }
	 if (b2d.iB(g.f)) {
	 vs = g.f.wV() 
	_.eR(g.f.fs(), function (v) { vs = vs.uni(v)	 })	 }
	 else {	 vs = b2d.iF(g.f) ? g.f.wV() : g.f	 }
	 return $pD(vs)
	 }
	 
	 
	 */

	b.subB = function (b1) {
		return this.fs(function (f) {
			b1.sub(f)
		})
	}
	b.sub1 = function (pD) {
		var b = this, g = G(arguments)
		if (b2d.iF(pD)) {
			b.subF(pD)
		}
		else if (b2d.iB(pD)) {
			b.subB(pD)
		}
		if (g.n) {
			pD.kill()
		}
		return b
	}
	b.sub = function () {
		var b = this, g = G(arguments)
		g.e(function (pD) {
			b.sub1(pD, g.o)
		})
		if (g.f !== 0) {
			//	b.C(g.f || b.c())
		}
		return b
	}
	
	b.cutPol = b.difFromPol = b.difPol = b.subMe = b.scrapeMeWithPol = b.pDWo = b.gPolWo = function (pD) {
		var b = this
		b.fs(function (f) {
			pD = pD.D(f)
		})
		return pD
	}
	//f.dif does the math and returns the answer (vs)
//returns pD with array of pS's ( pD.m_List )
//you can pass in the verts, 
// or the gPoly itself! //what about a fxt?
	w.polD = function (x, y, p1, p2) {
		return this.pol(x, y, M.p(p1).D(p2))
	}
	$DIF = function () {
		var g = G(arguments)
		if (g.A) {return g.ap($DIF)}
	
			var p = M.p(g.f)
		g.eR(function (pol) {
			p = p.D(M.p(pol))
		})
		return p
	}
	
	DIFA = function () {
		W()
		b = w.S(300, 400, [['b', 100, 40, 40, 40, 39]])
		x = w.S(300, 400, [['x', 30, 40]])
		b.D = function () {
			var b = this, g = G(arguments)
			var pD = b.pD()
			g.e(function (arg) {
				pD = pD.D(arg)
			})
			return pD.tlNeg(b)
		}
		//vs = b.pD().D( x.pD() ).tlNeg(b)
		vs = b.D(x.pD())
		w.pol(300, 300, vs)
	}
	MEETY = function () {
		W([600, 400, 1400, 400], {g: 10}).y(100, 200).tr()
		w.S(500, 300, 'o', 200, 800).expl('*')
	}
	
	b.expl = function (c) {

// is body.Isactive??
//alt way to handle explosion sub
//w.rad(bulletX, bulletY, 15, function (terrainFxt) {terrainFxt.sub( explosionPol )})
		var b = this
		var victim = b
		
		victim.cl(function (f) {
			var bulletF = f, bulletB = f.B()
			victim.subF('expl', bulletB.killXY())
			if (c) {victim.C(c === '*' ? $r() : c)}
		})
		
		return b
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
	