$L('slide', 'trackee', 'zom', 'bufferOb', 'trackNeg','autoscroll' ,'track', 'fromMakeWorld')
function slide() {

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
}
function zom() {

	w.getZ = function () {return w.z}
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
function trackNeg() {
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
	NOTKE = ZOOMSCALE = ZSC = function () {
		W([1000, 1000], {g: 0, t: 0}).jukeBox().y(100, 100).rt(200)
		w.drag()
		r = $.tallRange()
		$t(function () {
			zoom = function () {
				return r.val() / 25 + 1
			}
			w.Z(zoom())
		})
	}
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
function bufferOb() {
	STREET1 = ST1 = function () {
		W([1200, 600, 1400, 1200], {
			g: 300//, t: 0
		})
		w.S(700, 1000, 'r', 800, 20)
		w.S(500, 800, 'g', 200, 20)
		w.S(900, 600, 'x', 200, 20)
		p = w.p(700, 600)
		//	w.fg.A(p.sp())
		p.track(600, 400, {
			x: 700, mX: 1.5,
			y: 1000,
			w: 700, h: 600
		})
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
function _pre() {
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
function track() {
	
	w._track = function (t, cX, cY) {
		var w = this
		//run pre-scroll hook cb's
		if (F(w.t.cb)) {
			w.t.cb()
		}
		if (w.track.cb && F(w.track.cb)) {
			w.track.cb()
		}
		// if the designated trackee optionally has its own cb,
		// that over rules the (also optional) 'w.track.cb' cb
		w.sX(w.z * w.hW + w.z * ( t.X() - cX) - w.hW)
		w.sY(w.z * (w.hH + t.Y() - cY ) - w.hH)
		return w
		//each tick, literally just sets w.sXY() based on:
		// world dimensions, world zoom, and trackee position
		// $t(this)?
	}
	w.sBuf = function (bf) {
		var w = this
		bf.x = N(bf.x) ? bf.x : w.w / 2
		bf.y = N(bf.y) ? bf.y : w.h / 2
		bf.w = N(bf.w) ? bf.w : 0
		bf.h = N(bf.h) ? bf.h : 0
		bf.mX = N(bf.mX) ? bf.mX : 1
		bf.mY = N(bf.mY) ? bf.mY : 1
		return bf
	}
	w.trackNeg = function (t, cX, cY) {
		var w = this
		$t(function () {
			w.st.x = (cX - t.X()) * w.z - w.W * (w.z / 2 - .5)
			w.st.y = (cY - t.Y()) * w.z - w.H * (w.z / 2 - .5)
		})
		return w
	}
	w.tr = w.track = function (t, cX, cY, bf) {
		var w = this, g = G(arguments)
		w.t = t = g.u ? w._trackee : t
		cX = N(cX, w.W / 2);
		cY = N(cY, w.H / 2)
		if (O(bf)) {
			w.bufPol(w.sBuf(bf))
			$t(function () {
				w.sXY(
						bf.x - w.hW + _.adj(t.X() - bf.x, bf.w / 2) * bf.mX,
						bf.y - w.hH + _.adj(t.Y() - bf.y, bf.h / 2) * bf.mX
				)
			})
			return w
		}
		//option to set based on t's CURRENT X/Y?
		return bf == '-' ? w.trackNeg(t, cX, cY) :
				(bf == '!') ? w.bufExcl(t, cX, cY) :
						w._track(t, cX, cY)   //w.S(cX,cY,'o',[ [40,400,'-']]) // w.dbCross(cX,cY) //  w.dot(cX,cY,'+')
	}
	b.tr = b.track = function (x, y, z) {
		var b = this, w = b.W()
		w.track(b, x, y, z)
		return b
	}
	CUPBALL = CPB = function () {

//purpose: shows 'track'-ing a  body
//purpose2: demonstrates 'showOff
//should zoom in when near cup
		CUPS()
		w.showOff().D(w.W / 2, w.H / 2, 'w', [[10]]).re(.8).lV(100).track()
	}
	CAMFOLLOW = CMF = function () {
		W(500, 500, 1600, 1000).G(0)
		a = w.y().C('b')
		b = w.y(400, 400).C('o').track()
		_.ev(5, function () {
			if (w.follA) {
				b.track();
				w.follA = 0
			}
			else {
				a.track();
				w.follA = 1
			}
		})
	}
	TRACKEE = TRK = function () {
		w.balls()
		y = w.ship(50, 50).mid()
		y2 = w.ship(100, 300).C('x').rot(180)
		//i thought i may want t for timer/ticker.. but time has no x and y !
		//move the stage by manipulating the trackee x,y
		//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
		w.tRightLeft()
		w.showOff()
		_.in(5, function () {
			_.ev(5, function changeT() {
				if (w.t == y2) {
					w.C('b');
					w.t = y
				}
				else {
					w.C('z');
					w.t = y2
				}
			})
		})
	}
	CB = TRACKEECB = function () {
		W([1200, 600, 2400, 1200], {g: 300}).balls()
		w.Z('-')
		w.t = p = w.p(1175, 100) // no need to call track?
		_.ev(1, function () {
			w.t.cb = function () {
				w.Z(w.z + .001)
			}
		})
	}
	CHANGETRACKEE = KEE = function () {
		W([600, 600, 1200, 600])
		//i thought i may want t for timer/ticker.. but time has no x and y !
		//move the stage by manipulating the trackee x,y
		//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
		//  y = w.ship(50,50 ).C('d').mid().track()
		y2 = w.y(100, 300).C('x')
		y = w.y(100, 300).C('u')
		_.ev(1, function () {
			if (w.t == y2) {
				w.C('z');
				w.t = y
			}
			else {
				w.C('w');
				w.t = y2
			}
		})
	}
 
	
	
	
	//i can leave the world-centering in fw
// can optionally filter it with scale itself
//  has limits now!  and more..
// tis is the ultimate!
}
function fromMakeWorld() {
	w.idealStX = function () {
		var w = this;
		return w.t.X() * w.z - w.hW
	}
	w.idealStY = function () {
		var w = this;
		return w.t.Y() * w.z - w.hH
	}
	w.dfTrackee = function () {
		//the 'trackee' is just a small white static sensor  top middle square !
		var w = this;
		return w.S(w.hW, w.hH, 'w', [[20, 2, '-']]).r(.8)
	}
	w.usingDfTrackee = w.hasDfTrackee = function () {
		return this.trackee == this._trackee
	}
	TKEE = function () {
		W({t: 0})
		$l('look up top.. for a white centered square')
		_.in(function () {
			w.dfTrackee()
		})
	}
	w.trackeeSetup = function () {
		var w = this
		var dfTrackee = w.dfTrackee()
		w._trackee = w._t = dfTrackee
		w.trackee = w.t = dfTrackee
		w.i.A(w.trackeesSprite = w.tSpr = w.spriteForTrackee())
		$t(function () {
			w.handleTrakeeOnTick().translateStageRelToTrackee()
			if (w.usingDfTrackee()) {
				w.translateTrackeeToSprite = function () {
					var w = this
					w.trackee.XY(w.tSpr.X(), w.tSpr.Y());
					w.st.rt(w.tSpr.rt())
					return w
				}
				w.translateTrackeeToSprite()
			}
		})
		return w
	}
	w.translateStageToTrackee = function (x, y) {
		var w = this;
		w.st.x = -x;
		w.st.y = -y;
		return w
	}
	w.translateStageRelToTrackee = w.stToTrackee = function () {
		var w = this
		return w.translateStageToTrackee(w.sXCap(w.idealStX()), w.sYCap(w.idealStY()))
	}
	w.handleTrakeeOnTick = w.runTkCb = function () {
		var w = this
		if (F(w.trackee.cb)) {
			w.trackee.cb()
		}
		else if (F(w.tCb)) {
			w.tCb()
		}
		return w
	}
}