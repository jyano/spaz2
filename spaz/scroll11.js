$L('scale','wTSpr','zom')



	w.cap = function (s, a, b) {
		subScDif = function (a, x, z) {return a - x + a / z}
		return zeroToMax(s,  a * this.z - b)
		function zeroToMax(s, max) {return _.cap(s, 0, max)}
	}

	w.stXCap = w.sXCap = function (s) {
		var w = this, g = G(arguments)
		return _.cap(s, 0, w.w * w.z - w.W)
	}
	w.stYCap = w.sYCap = function (s) {
		var w = this, g = G(arguments)
		return _.cap(s, 0, w.h * w.z - w.H)
	}
	w._stX = function (x) {var w = this, g = G(arguments)
		if (g.u) {return g.n? -w.st.x: w.st.x}
		w.st.x = g.n? -x:x
		return w
	}
	
	w.stX = w.sX = function (x) {
		var w = this, g = G(arguments)
		if (g.u) {return -w.st.x}
		w.st.x = -w.stXCap(x)
		return w
	}
	w.stY =	w.sY = function (y) {var w = this, g = G(arguments)
		if (U(y)) {return -w.st.y}
		w.st.y = -w.stYCap(y)
		return w
	}
	
	w.sXY = function () {
		var w = this, g = G(arguments)
		//if (g.u) {return {}}
		w.sX(g.f)
		w.sY(g.s)
		return w
	}
b.cenSc = b.centerScale = function (z) {
	var b = this, w = b.W(), st = w.st
	st.sXY(z)
	st.X(
			w.hW - (  (b.X() - w.hW) * z)
	)
	st.Y(
			w.hH - (  (b.Y() - w.hH)) * z
	)
	return b
}



w.pan = function (o) {
	var w = this, g = G(arguments), o = g[0]
	
	
	var		mZ = w.mZ,
			MZ = mZ * 3,
			z = w.mZ * 3,
			 up = true
			 
			 
			var l
			
	if (g.m) {
		l = function () {
			up = z > w.mZ * 3 ? false :
					z < w.mZ ? true :
							up
			z *= up ? 1.01 : .9
			w.Z(z / w.mZ)
		}
	}
	
	else {
		l = function () {
			up = z > w.mZ * 3 ? false : z < mZ ? true : up
			z += up ? .03 : -.03
			w.Z(z / w.mZ)
		}
	}
	
	w.track.cb = l
	return w
}


function zom() {


	w.Z = function () {var w = this, g = G(arguments)
		if (g.u) {return w.z}
	
		w.z = g.n ? w.mS : _.cap(g.f, w.mS)
		
		w.st.sXY( w.z )
		
		return w // get/set zoom.. ok cool :)
	}
	
	
	
	
	w.zoomOut = function () {
		var w = this //knows when to stop :)
		w.tCb =  function  () {
			w.Z( _.cap( w.z *= .98, w.mS ))
		}
		
		return w
	}
	w.zoomIn = function () {
		var w = this
		w.tCb = fn
		function fn() {
			w.Z(_.cap(w.z *= 1.02, 0, 4))
		}
		
		return w
	}
}
function wTSpr() {
	w.tX = function (t) {
		var w = this, g = G(arguments)
		if (g.u) {
			return w.tSpr.X()
		}
		w.tSpr.X.apply(w.tSpr, arguments)
		return w
	}
	w.tY = function (t) {
		var w = this, g = G(arguments)
		if (g.u) {
			return w.tSpr.Y()
		}
		w.tSpr.Y.apply(w.tSpr, arguments)
		return w
	}
	w.tXY = function (x, y) {
		var w = this
		if (U(x)) {
			return {x: w.tX(), y: w.tY()}
		}
		y = N(y) ? y : x
		return w.tX(x).tY(y)
	}
}
function _post() {
	STREET = function () {
		W([1200, 600, 1400, 1200], {g: 300, t: 0})
		w.S(700, 1000, 'r', 800, 20)
		w.S(500, 800, 'g', 200, 20)
		w.S(900, 600, 'x', 200, 20)
		p = w.p(700, 600)
		w.fg.A(p.sp())
		w.track(p, 600, 400,
				{x: 700, y: 1000, w: 700, h: 600, mX: 1.5})
	}
	SPUFF = function () {
		W(800, 600, 800, 800).G(0)
		w.S(200, 500, 'g', 100, 100);
		w.S(500, 500, 'w', 100, 100);
		w.S(1000, 500, 'r', 100, 100);
		w.S(1500, 500, 'g', 100, 100)
		y = w.ship(100, 100).rt(200)
		w.track(y, 500, 500, {x: 1000, y: 1000, w: 400, h: 400})
		BUFFER = function () {
			W([1200, 600, 4800, 1600], {g: 0, t: 0})//.mark()//.dot(600,300,'*').dot(1200,600,'*')
			y = w.ship(100, 100).damp(1, 10).rot(90).lD(2).aD(2)
					.rot(120)//.lV(1)
			w.bufFoll(y, 600, 300, {
				x: 800, y: 300, mX: .8, mY: .8, w: 200, h: 200
			})
			// w.Z(.8)
		}
	}
	SLY = function () {
		W([1200, 600, 2400, 1000], {g: 300}).P()
		w.right.kill();
		w.left.kill()
		w.track(p, 300, 400, {
			x: 1200, y: 700,
			w: 800, h: 500,
			mX: 10, mY: 10
		})
	}
	SCROLLNOLIM = function () {
		W([1200, 600, 2400, 1200], {g: 0})
		w.S(1200, 300, 'r', 400, 100)
		w.S(1200, 600, 'w', [[100, 100, '-']])
		w.S(1200, 900, 'r', 400, 100)
		y = w.ship(100, 100).rot(120).damp(1, 10)
		w.Z(.8)
		w.track(y, 600, 300, '-')
		w.dragScale = function () {
			var w = this,
					pX = 0, pY = 0, pmX, pmY, o = {}
			c = $(w.i.canvas)
			c.mousedown(function (e) {
				o.Scl = w.z
				o.Y = e.clientY
			})
			c.pressmove(function (e) {
				var x = e.clientX,
						y = e.clientY,
						newSc = o.Scl + (o.Y - e.clientY) * .005
				newSc = newSc > 5 ? 5 : newSc < .8 ? .8 : newSc
				w.Z(newSc)
			})
			return this
		}
		w.dragScale()
	}//fix
	SHOWOFF = function () {
		W([1200, 600, 2400, 600], {g: 10})
		y = w.ship(50, 50).track()//.P(100,1000)
		w.S(400, 2500, 'r', 200, 100)
		w.S(800, 2300, 'z', 100, 100)
		w.S(1200, 2300, 'b', 300, 100)
		w.S(1600, 2300, 'z', 100, 100)
		w.S(2000, 2300, 'r', 200, 100)
		_.t(10, function (i) {
			w.D(100 + i * 100, 100, $r(), 35).den(.1)
		})
		w.showOff()
	}
	ZOOMSCALE = function () {
		W([1000, 1000], {
			g: 0, t: 0
		})
		w.dragX = function () {
			var w = this, d
			w.i.c.m({
				mD: function (x) {
					d = x - w.s.x
				},
				pM: function (x) {
					w.s.x = x - d
				}
			})
			return w
		}
		w.dragY = function () {
			var w = this, d
			w.i.c.m({
				mD: function (x, y) {
					d = y - w.s.y
				},
				pM: function (x, y) {
					w.s.y = y - d
				}
			})
			return w
		}
		w.drag = function () {
			return this.dragX().dragY()
		}
		// w.s.HUD.dot(500, 500)
		y = w.ship(100, 100).rot(200)
		w.S(500, 500, 'o', 200)
		w.S(500, 500, 'r', 10)
		w.S(200, 200, 'm', 40)
		w.S(800, 200, 'b', 60)
		w.S(800, 800, 'l', 80)
		w.S(200, 800, 'g', 100)
		//w.inout()
		w.drag()
		r = $.rg().A() //range
		r.abs(775, 500)
		r.css('transform', 'rotate(90deg)')
		r.W(500).val(0)
		T.t(function () {
			w.Z(r.val() / 25 + 1)
		})
	}
	AUTO = AUTOSCROLL = function () {
		w.left = function (n) {
			var w = this;
			n = N(n, 4)
			w.e(function (b) {
				b.X(n, '-')
			})
		}
		b.byI = b.byImp = function (i) {
			var k = $.K
			if (k.right) {
				this.I(i, 0)
			}
			else if (k.left) {
				this.I(-i, 0)
			}
			return this
		}
		b.byV = b.byVel = function (v) {
			alert('b.byV')
			var k = $.K
			if (k.right) {
				p.lV(v, 0)
			}
			else if (k.left) {
				p.lV(-v, 0)
			}
			return this
		}
		W({g: 300, w: 0}).P(300, -300)
		w.plat = function (x, y, W, H) {
			var w = this//=brk=brick=
			x = N(x) ? x : 60;
			y = N(y) ? y : x
			W = N(W) ? W : 30;
			H = N(H) ? H : W
			return w.S(x, y, 'w', W, H).r(.3).K('plat')
		}
		w.plat(800, 500, 600, 100)
		w.plat(300, 530, 100, 100)
		w.plat(1400, 300, 600, 100)
		w.plat(1800, 500, 1000, 100)
		w.plat(1900, 200, 600, 100)
		w.p(300, -100)
		T.t(function () {
			w.left(4)
			if (p.Y() > 2000) {
				p.XY(300, -300)
			} //comeback
			if (b2d.onG) {
				if ($.K.u) {
					p.jumping(180, 30)
				}
				else {
					p.byVel(40)
				}
			}
			else {
				p.byImp(10)
			}
		})
		w.D(800, 100, 'r', 50, 50).bS('guy')
	}
	//alert
	b.cam = function (x, y) {
		alert('b.cam')
		var b = this, s = b.stg()
		s.XY(b.diff(x, y))
		return b
	}
	b.follow = function (x, y) {
		alert('b.follow')
		var b = this
		cjs.t(function () {
			if (O(b.sprite)) {
				b.cam(x, y)
			}
		})
		return b
	}
	//adv
	w.inout = function () {
		var w = this, // now it works!!!!
				s = 1,
				up = true
		w.t.cb = function () {
			if (up) {
				if (s < 2) {
					s += .2;
				}
				else {
					up = false
				}
				w.Z(s)
			}
			else {
				if (s > .8) {
					s -= .2
				}
				else {
					up = true
				}
				w.Z(s)
			}
		}
		return w
	}
	w.showOff = function () {
		var w = this
		zin()
		function zout() {
			w.zoomOut();
			_.in(10, zin)
		}
		
		function zin() {
			w.zoomIn();
			_.in(4, zout)
		}
		
		return w
	}
	w.tRightLeft = function () {
		var w = this, left
		T.t(function () {
			if (!left) {
				w.tX(10, '+')
				if (w.tX() > 2000) {
					left = 1
				}
			}
			else {
				w.tX(10, '-')
				if (w.tX() < 400) {
					left = 0
				}
			}
		})
		return w
	}
}