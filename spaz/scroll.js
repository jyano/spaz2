w.tr = w.track = function (t, cX, cY, bf) {
	var w = this
	//i can leave the world-centering in fw
	// can optionally filter it with scale itself
	//  has limits now!  and more..
	// tis is the ultimate!
	if (U(t)) {
		t = w._trackee
	}
	w.t = t
	cX = N(cX, w.W / 2)
	cY = N(cY, w.H / 2)  //option to set based on t's CURRENT X/Y?
	if (bf == '!') {
		T.t(function () {
			var sX, sY
			sX = w.z * (t.X() - cX)
			sX = sX * 1 / ( 1 + w.hW / w.w )
			sY = w.z * (t.Y() - cY)
			sY = sY / (1 + w.hH / w.h)
			w.sXY(sX, sY)
		})
	}
	else if (bf == '-') {
		T.t(function () {
			w.s.x = (cX - t.X()) * w.z - w.W * (w.z / 2 - .5)
			w.s.y = (cY - t.Y()) * w.z - w.H * (w.z / 2 - .5)
		})
	}
//w.S(cX,cY,'o',[ [40,400,'-']]) // w.dbCross(cX,cY) //  w.dot(cX,cY,'+')
	else if (O(bf)) {
		bf.x = N(bf.x) ? bf.x : w.w / 2
		bf.y = N(bf.y) ? bf.y : w.h / 2
		bf.w = N(bf.w) ? bf.w : 0
		bf.h = N(bf.h) ? bf.h : 0
		bf.mX = N(bf.mX) ? bf.mX : 1
		bf.mY = N(bf.mY) ? bf.mY : 1
		w.S(bf.x, bf.y, 'r', [[bf.w, bf.h, '-']])
		w.S(bf.x, bf.y, 'w', [[bf.w + 20, bf.h + 20, '-']])
		w.S(bf.x, bf.y, 'b', [[bf.w, w.h, '-']])
		w.S(bf.x, bf.y, 'b', [[w.w, bf.h, '-']])
		w.S(bf.x, bf.y, 'z', [[10, 10, '-']])  //sensor works but ony for rect (or at least not for circ)
		w.S(bf.x, bf.y, 'w', [[bf.w, bf.h, '-']]) //  w.dot(bf.x-bf.w/2, bf.y-bf.h/2  ,     '+')
		T.t(function () {
			var sX, sY
			// sX = (bf.x-w.hW)   + _.adj( (t.X()-bf.x),  bf.w/2)/w.z
			sX = bf.x - w.hW + _.adj(t.X() - bf.x, bf.w / 2) * bf.mX /// bf.mX //scaling not needed?
			sY = (bf.y - w.hH) + _.adj(t.Y() - bf.y, bf.h / 2) * bf.mX// /bf.mY
			w.sXY(sX, sY)
		})
	}
	else {
		
		//each tick, literally just sets w.sXY() based on:
		// world dimensions, world zoom, and trackee position
		T.t(function () {
			var dX, dY
			//run pre-scroll hook cb's
			if (F(w.t.cb)) {
				w.t.cb()
			}
			if (w.track.cb && F(w.track.cb)) {
				w.track.cb()
			}
			// if the designated trackee optionally has its own cb,
			// that over rules the (also optional) 'w.track.cb' cb
			dX = t.X() - cX
			dY = t.Y() - cY
			w.sX(w.z * w.hW + w.z * dX - w.hW)
			w.sY(w.z * (w.hH + dY ) - w.hH)
		})
	}
	return w
}
w.sXY = function (x, y) {
	if (U(x)) {
		return {}
	}
	this.sX(x)
	this.sY(y)
	return this
}
w.sXCap = function (s) {
	return _.cap(s, 0, this.w * this.z - this.W)
}
w.sX = function (x) {
	var w = this
	if (U(x)) {
		return -this.s.x
	}
	this.s.x = -this.sXCap(x)
	return w
}
w.sYCap = function (s) {
	return _.cap(s, 0, this.h * this.z - this.H)
}
w.sY = function (y) {
	var w = this
	if (U(y)) {
		return -w.s.y
	}
	w.s.y = -w.sYCap(y)
	return w
}
b.tr = b.track = function (x, y, z) {
	var b = this, w = b.W()
	w.track(b, x, y, z)
	return b
}
w.Z = function (s) {
	//get/set zoom.. ok cool :)
	var w = this
	if (U(s)) {
		return w.z
	}
	w.z = s == '-' ? w.mS : _.cap(s, w.mS)
	w.s.sXY(w.z)
	return w
}
b.centerScale = function (z) {
	var b = this, w = b.W()
	w.s.sXY(z)
	w.s.X(
			w.hW - (  (b.X() - w.hW) * z)
	)
	w.s.Y(w.hH - ((b.Y() - w.hH)) * z)
	return b
}
w.zoomOut = function () {
	var w = this //knows when to stop :)
	w.tCb = function () {
		w.Z(_.cap(w.z *= .98, w.mS))
	}
	return w
}
w.zoomIn = function () {
	var w = this
	w.tCb = function () {
		w.Z(_.cap(w.z *= 1.02, 0, 4))
	}
	return w
}
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
w.pan = function (o) {
	var w = this, g = G(arguments), o = g[0],
			mZ = w.mZ,
			MZ = mZ * 3,
			z = w.mZ * 3, up = true,
			l
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
w.tX = function (t) {
	var w = this
	if (U(t)) {
		return w.tSpr.X()
	}
	w.tSpr.X.apply(w.tSpr, arguments)
	return w
}
w.tY = function (t) {
	var w = this
	if (U(t)) {
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
		_.times(10, function (i) {
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
 
AUTO =AUTOSCROLL= function () {
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
 