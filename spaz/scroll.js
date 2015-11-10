$L('stageXY', 'trackee', 'zom', 'bufferOb', 'trackNeg','autoscroll','log')

function zom() {
	w.getZ = function () {
		return w.z
	}
	w._setZ = function (z) {
		var w = this, g = G(arguments)
		w.z = z
		w.st.sXY(w.z)
		return w
	}
	w.setZ = function () {
		var w = this, g = G(arguments)
		return w._setZ(g.n ? w.mS : _.cap(g.f, w.mS))
	}
	w.Z = function () {var w = this, g = G(arguments)
		return g.u ? w.getZ() : w.setZ(g.f)
		//
		//if (g.u) {return w.z}
		//w.z = g.n ? w.mS : _.cap(g.f, w.mS)
		//w.st.sXY( w.z )
		//return w // get/set zoom.. ok cool :)
	}
	
	
	w.setTrackeeCallback=function(fn){this.tCb = fn; return this}
	
	w.zoomOut = function () {var w = this
		//knows when to stop :)
		w.setTrackeeCallback(function () {
			w.Z(_.cap(w.z *= .98, w.mS))
		})
		return w
	}
	
	
	
	w.zoomIn = function () {
		var w = this
		w.tCb = function () {
			w.Z(
					_.cap(w.z *= 1.02, 0, 4)
			)
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
	w.manyBalls = function () {
		var w = this
		w.S(400, 2500, 'r', 200, 100)
		w.S(800, 2300, 'z', 100, 100)
		w.S(1200, 2300, 'b', 300, 100)
		w.S(1600, 2300, 'z', 100, 100)
		w.S(2000, 2300, 'r', 200, 100)
		return w
	}
	
	SHOWOFF = SHO = function () {
		W([1200, 600, 2400, 600], {g: 10}).manyBalls()
			_.t(10, function (i) {
			w.D(100 + i * 100, 100, $r(), 35).den(.1)
		})
		w.showOff().ship(50, 50).track()//.P(100,1000)
	}
}



function trackee() {
	
	
	w.trackeeX = w.tX = function (t) {
		var w = this, g = G(arguments)
		if (g.u) {
			return w.tSpr.X()
		}
		w.tSpr.X.apply(w.tSpr, arguments)
		return w
	}
	w.trackeeY = w.tY = function (t) {
		var w = this, g = G(arguments)
		if (g.u) {
			return w.tSpr.Y()
		}
		w.tSpr.Y.apply(w.tSpr, arguments)
		return w
	}
	w.trackeeXY = w.tXY = function (x, y) {
		var w = this
		if (U(x)) {
			return {x: w.tX(), y: w.tY()}
		}
		y = N(y) ? y : x
		return w.tX(x).tY(y)
	}
}
function stageXY(){


 
w.stXCap = w.sXCap = function (s) {
	var w = this, g = G(arguments)
	return _.cap(s, 0, w.w * w.z - w.W)
}
w.stYCap = w.sYCap = function (s) {
	var w = this, g = G(arguments)
	return _.cap(s, 0, w.h * w.z - w.H)
}

w._stX = function (x) {
	var w = this, g = G(arguments)
	if (g.u) {
		return g.n ? -w.st.x : w.st.x
	}
	w.st.x = g.n ? -x : x
	return w
}

w.stX = w.sX = function (x) {
	var w = this, g = G(arguments)
	if (g.u) {
		return -w.st.x
	}
	w.st.x = -w.stXCap(x)
	return w
}
w.stY = w.sY = function (y) {
	var w = this, g = G(arguments)
	if (U(y)) {
		return -w.st.y
	}
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

}

w.drag = function () {
	w.dragX = function () {
		var w = this
		var d
		w.i.c.m({
			mD: function (x) {
				d = x - w.st.x
			},
			pM: function (x) {
				w.st.x = x - d
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
	return this.dragX().dragY()
}


function bufferOb() {
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
	SPUFF1 = function () {
		W(800, 600, 800, 800).G(100)
		w.S(200, 500, 'g', 100, 100);
		w.S(500, 500, 'w', 100, 100);
		w.S(1000, 500, 'r', 100, 100);
		w.S(1500, 500, 'g', 100, 100)
		y = w.y(100, 100).rt(200)
		bfOb = {x: 1000, y: 1000, w: 400, h: 400}
		w.track(y//, 500, 500, bfOb
		)
	}
	BUFFER = function () {
		W([1200, 600, 4800, 1600], {g: 0, t: 0})//.mark()//.dot(600,300,'*').dot(1200,600,'*')
		y = w.ship(100, 100).damp(1, 10).rot(90).lD(2).aD(2)
				.rot(120)//.lV(1)
		//w.bufFoll(y, 600, 300, {x: 800, y: 300, mX: .8, mY: .8, w: 200, h: 200})
		// w.Z(.8)
	}
}
function trackNeg() {
	w.dragScale = function () {
		var w = this
		var pX = 0, pY = 0, pmX, pmY, o = {}
		var c = $(w.i.canvas)
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
	W.TEMPLE = function () {
		W([1200, 600, 2400, 1200], {g: 0})
		w.S(1200, 300, 'r', 400, 100)
		w.S(1200, 600, 'w', [[100, 100, '-']])
		w.S(1200, 900, 'r', 400, 100)
		return w
	}
	DRAGSCALE = SCROLLNOLIM = SNL = function () {
		W.TEMPLE().Z(.8).dragScale()
				.y(100, 100).track(600, 300, '-')
	}
}
function autoscroll() {
	function help() {
		w.guy = function () {
			return this.D(800, 100, 'r', 50, 50).bS('guy')
		}
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
		w.plat = function (x, y, W, H) {
			var w = this//=brk=brick=
			x = N(x) ? x : 60;
			y = N(y) ? y : x
			W = N(W) ? W : 30;
			H = N(H) ? H : W
			return w.S(x, y, 'w', W, H).r(.3).K('plat')
		}
		w.fivePlats = function () {
			var w = this
			w.plat(800, 500, 600, 100)
			w.plat(300, 530, 100, 100)
			w.plat(1400, 300, 600, 100)
			w.plat(1800, 500, 1000, 100)
			w.plat(1900, 200, 600, 100)
			return w
		}
		W.PLATS = function () {
			return W({g: 300, w: 0}).P(300, -300).fivePlats().p(300, -100)
		}
		b.playMe = function () {
			var p = this
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
			return p
		}
	}
	
	help()
	AUTO = AUTOSCROLL = function () {
		W.PLATS()
		$t(function () {
			w.left(4)
			p.playMe()
			w.guy()
		})
	}
}

STREET1 = function () {
	W([1200, 600, 1400, 1200], {
		g: 300//, t: 0
	})
	w.S(700, 1000, 'r', 800, 20)
	w.S(500, 800, 'g', 200, 20)
	w.S(900, 600, 'x', 200, 20)
	p = w.p(700, 600)
	//	w.fg.A(p.sp())
	w.track(p, 600, 400, {
		x: 700, y: 1000,
		w: 700, h: 600,
		mX: 1.5
	})
}

NOTKE = ZOOMSCALE = ZSC = function () {
	W([1000, 1000], {g: 0, t: 0}).jukeBox().y(100, 100).rt(200)
	w.drag()
	r = $.tallRange()
	zoom = function () {
		return r.val() / 25 + 1
	}
	$t(function () {
		w.Z(zoom())
	})
}

function _pre() {
	w.jukeBox = function () {
		var w = this
		w.S(500, 500, 'o', 200)
		w.S(500, 500, 'r', 10)
		w.S(200, 200, 'm', 40)
		w.S(800, 200, 'b', 60)
		w.S(800, 800, 'l', 80)
		w.S(200, 800, 'g', 100)
		return w
	}
	w.cap = function (s, a, b) {
		subScDif = function (a, x, z) {
			return a - x + a / z
		}
		return zeroToMax(s, a * this.z - b)
		function zeroToMax(s, max) {
			return _.cap(s, 0, max)
		}
	}
	$.tallRange = function () {
		var r = $.rg().W(500).A() //range
		r.abs(775, 500)
		r.css('transform', 'rotate(90deg)')
		return r.val(0)
	}
}
function log(){
	w.pan = function (o) {
		$l('w.pan')
		var w = this, g = G(arguments), o = g[0]
		var mZ = w.mZ,
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
	b.cenSc = b.centerScale = function (z) {
		$l('b.cenSc = b.centerScale')
		var b = this, w = b.W(), st = w.st
		st.sXY(z)
		st.X(w.hW - (  (b.X() - w.hW) * z))
		st.Y(w.hH - (  (b.Y() - w.hH)) * z)
		return b
	}
	function alertt() {
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
	}
	w.tRightLeft = function () {
		$l('w.tRightLeft')
		var w = this, left
		$t(function () {
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
	}}
 