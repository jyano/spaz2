$L('boxBul', 'controls', 'spazBul', 'worVec', 'aiTrack')
function controls() {
	b.controls = b.cn = function (cn, o) {
		var b = this, w = b.W()
		//stop a current 'controls', if any
		if (F(b._cn)) {
			w.s.off('tick', b._cn)
		}
		if (U(cn)) {
			return
		}
		if (S(cn)) {
			cn = b2d.cn[cn]
		}
		if (F(cn)) {
			b._cn = w.s.t(
					function () {
						cn(b, o)
					}
			)
		}
		return b
	}
	b2d.cn.thr = b2d.cn.thrust = b2d.cn.t = function (p, mult) {
		var vec
		mult = N(mult, 200)
		if ($.K.u) {
			vec = p.vec().m(mult)
			p.I(vec)
		}
		p.aV($.K.r ? 15 : $.K.l ? -15 : 0)
		//  $l('vec: '+ parseInt(vec.x) + ', '+ parseInt(vec.y))
	}
}
function boxBul() {
	b.setBul = function (sB) {
		this.SetBullet(sB ? true : false);
		return this
	}
	b.makeBul = function () {
		return this.setBul(1)
	}
	w._bul = function (x, y, r, c) {
		return this.D(x, y, c || 'w', N(r, 8)).K('bul bu')
				.makeBul().fr(0).d(.1).bo(.5).lD(0).aD(0)
	}
}
function spazBul() {
	G.cir = function (g) {
		return g.O ? g.f : g.O_ ? {x: g.f.x, y: g.f.y, r: g.s} :
				N(g.s) ? {x: g.f, y: g.s, r: g.t} :
				{r: g.f}
	}
	w.bul = w.bu = function () {
		var w = this, g = G(arguments), o = G.cir(g)
		var bul = w._bul(o.x, o.y)
		if (g.d) {
			bul.cl(function () {
				this.B().kill()
			})
		}
		if (g.m) {
			bul.cl(function (f) {
				f.B().kill()
			})
		}
		return bul
		//instructions: can pass   {x,y,r} ||  {x,y},rad  ||  x,y,rad 
	}
}
function worVec() {
	b.gWV = function (vec, y) {
		vec = O(vec) ? vec : V(vec, y)
		return this.GetWorldVector(vec)
	}
	G.vec = function (g) {
		var o = g.O ? g.f : g.s ? {x: g.f, y: g.s} : //this not error
		{y: g.f}
		o.x = N0(o.x)
		o.y = N(o.y, -1)
		return o
	}
	b.vec = b.v = function () {
// the current direction of that vector in world coordinates
		var g = G(arguments)
		var vec = G.vec(g)
		return this.gWV(vec)
	}
	v.tD = function () {
		var v = this
		return V(M.tD(v.x), M.tD(v.y))
	}
	w.arm = function () {
		w.S(300, 300, 20, 200);
		var arm = w.S(300, 300, [['b', 200, 50, 100, 0]]);
		_.ev(.1, function () {
			arm.rt(1, '+')
		})
		return arm
	}
	STUM = BVEC = function () {
		W({g: 3})
		y = w.y(300, 400, 3, '-')
		_.ev(.1, function () {
			var vec = y.vec(0, 1.5).tD()
			y.I(0, vec.y / 5)
			y.rt(2, '+')
		})
		w.arm()
	}
}
function aiTrack() {
	b.minusMyXY = function (x, y) {
		return V(x - this.X(), y - this.Y())
	}
	v.bDif = v.bodDif = v.bodXYDif = function (bod) {
		return V(this.x - bod.X(), this.y - bod.Y())
	}
	b.vDif = function (v, y) {
		var vec = O(v) ? v : V(v, y)
		return V(vec.x - this.X(), vec.y - this.Y())
	}
	b.getGoAt = function () {
	}
	b.goAt = b.tow = b.towards = function (x, y, sp) {
		var lV = V(x - this.X(), y - this.Y())
		sp = N(sp, 5)
		lV.div(11 - (  sp > 10 ? 10 : sp ) * 20)
		this.lV(lV)
		return this
		//if(isBody(x)){return self(x.X(), x.Y(), y)}
//move towards x,y (or body?)
		//more realistic to accelerate, via forces?
		//these just thrust and dont
//otherwise apply forces to neighbors.  but what if
//they 'SUCKED' instead of 'thrusted' ?
//is that the same as having a gravitational inwards force?
//  y = $ys(300, 200, 3).angDamp(0).linDamp(1)
	}
	b.getRtAt = function (bod) {
		var rt = -M.tD(M.atan(bod.X() - this.X() / bod.Y() - this.Y()))
		if (bod.Y() > this.Y()) {
			rt += 180
		}
		return rt
	}
	b.rtAt = b.rotateTowards = b.rTow = function (bod) {
		this.rt(this.getRtAt(bod))
		return this
	}
	TOW = TOWARD = function () {
		W({g: 0}).C('z')
	}
	BIG = BIGSHIP = function () {
		W([1000, 800, 4000, 2000], {g: 0})
		r = w.y({c: 'r', sc: 20}).XY(300, 300)
		w.D(500, 300, 'r', 100)
		y = w.y('y', 100, 200, 6, '-').track()
		r.aD(1).lD(1).r(0).fr(1).K('guy')
		T.t(function () {
			y.goAt(r.X(), r.Y(), 9).rtAt(r)
		})
	}
	TRAP = function () {
		W(0).C('r')
		y = w.y()
		bg = w.y('b', 500, 300, '-')
		bg.shtEv(2000)
		bg.stat()
		T.t(function () {
			bg.rtAt(y)
		})
	}
}
b.shtEv = function (ms, k) {
	ms = N(ms / 1000, 0.4)
	var b = this //= b.shootOnInt
	_.ev(ms, function () {
		if (b.IsActive()) {
			b.sht(k)
		}
	})
	return b
}
b.shoot = b.sht = function (k) {
	var g = G(arguments)
	var bulXY = this.wP(0, -200) //action: shoots FROM just above b
	var bul = w.bul(bulXY)
	var bulLV = this.vec().m(100)//action: set speed
	bul.lV(bulLV).d(.5).lD(0).fR()
	if (k) {
		bul.K(k)
	}
	return bul
}
b.makeShooter = b.shootOnSpacebar = b.shtSp = function (k) {
	var b = this
	$.space(function () {
		b.shoot(k)
	})
	return b
}
b.pushEv = function (forc, ev) {
	var b = this
	forc = N(forc, this.vec().m(40))
	_.ev(N(ev, .5), function () {
		b.push(forc)
	})
	return this
}
b.push = function (forc) {
	$l('push')
	var g = G(arguments)
	return g.p ? this.pushEv() :
			this.I(this.vec().m(N(forc, 1) * 40))
}
b.isMoving = b.going = function () {
	$l('going')
	lv = this.lV()
	return M.abs(lv.x) > 0.5 ||
			M.abs(lv.y) > 0.5 ||
			M.abs(this.aV()) > 0.5
}
SHIP = function () {
	W(10).Y()
	_.t(20, function () {
		w.S(R(500), R(500), $r(), 20)
	})
}
WAR = function () {
	W({g: 0})
	var n = 0, x = 150, Y = 150
	w.cl('bul', 'bad', function (bad) {
		this.B().kill();
		bad.B().kill()
	})
	_.t(15, function () {
		w.y($r(), x += 4, Y += 2, 3, '-')
				.K('bad').rt(R(90))
				.push(20, '+')
				.shtEv(2000, 'deathBall')
	})
}
function tCont() {
	TCOYIP = function () {
		W().Y()
		co = w.tCo()
		_.t(3, function () {
			co.B(w.y('z', R(500, 50), R(300, 50), '-').lV(10, 20).lD(0))
		})
	}
}
GROUPTCO = COLSHIP = function () {
	W().G(1)//.C('z').pen('welcome to tensor (damping) controller - the timing here is amazing!')
	y = w.y()
	co = w.tCo()
	co.B(
			r = w.D(100, 100, 'r', 100).lV(10, 20).grp(-1).lD(.2),
			b = w.D(500, 500, 'b', 90).lV(-10, -20).grp(-1).lD(.2),
			y = w.D(300, 300, 'y', 70).lV(-10, -20).grp(-1).lD(.2)
	)
	o = w.D(300, 300, 'o', 70).lV(-10, -20).grp(-1).lD(.2)
	_.t(30, function () {
		var b = w.D(400, R(300, 100), 'o', 20)
		b.lV(10, 20).lD(0)
		b.lV(10, 20)
		b.f().grp(-1)
		co.B(b)
	})
	y.grp('-1')
	w.r_.cl(function (f) {
		f.C('b');
		co.xB(f)
	})
	l = w.m_controllerList.GetBodyList()
}
w.altBul = w.blackSquareBul = function () {
	return this.D(400, 300, 'z', 10, 10)
}
STAB = function () {
	W({g: 0})
	w.S(200, 200, 'b', 50, 260)
	w.S(140, 200, 'd', 140, 50)
	co = w.tCo();
	_.t(10, function () {
		co.B(
				w.D(R(1000, 100), 300, 'x', 30).lV(10, 20).lD(0))
	})
	hits = 0
	y = w.y().K('ship').lD(5)
	bg = w.y('b', 500, 300, '-').d(3).lD(2).K('bg').aD(.2)
	bg.rotTowards = function (y) {
		var b = this, a
		a = -M.tD(M.atan((y.X() - b.X()) / (y.Y() - b.Y())))
		if (y.Y() > b.Y()) {
			a += 180
		}
		b.rt(R(40, a - 20))
	}
	_.ev(.5, function () {
		bg.aV(0);
		bg.rotTowards(y)
	})
	bg.push(50, '+')
	T.t(function () {
		_.t(20, function () {
			bg.I()
		})
	})
	w.b(function (cx) {
		var i
		if (cx.w('ship', 'bg')) {
			i = cx.m().m_points[0].m()
			_.in(.1,
					(
					M.lD(V(i.x, i.y), V(y.X(), y.Y())) >
					M.lD(V(i.x, i.y), V(bg.X(), bg.Y()))
					) ?
							function () {
								hits++;
								w.C('g');
								bg.XY(300, 300);
								y.XY(700, 400)
							}
							:
							function () {
								w.C('p');
								bg.XY(700, 400);
								y.XY(100)
							})
		}
	})
	//w.show(function(){return 'hits: '+ hits})
}
w._ship = function (x, y, z, col) {
	z = N(z, 8)
	col = col || 'b'
	var bird = w.D(x, y).makeBul()
	var pol = [[-z, z], [0, -z * 4], [z, z]]
	bird.pol(col, pol)
	return bird
}
G.ship = function (g) {
	var o = g.O ? g.f :  //pass opOb
		//pass {c='y'}, x=100, y=100, sc=4
			g.S_ ? {c: g.f, x: g.s, y: g.t, sc: g[3]} :
			{x: g.f, y: g.s, sc: g.t}
	o.c = o.c || 'y';
	o.sc = N(o.sc, 4);
	o.x = N(o.x, 100);
	o.y = N(o.y, 100)
	return o
}
w.y = w.ship = function () {
	var w = this, g = G(arguments), o = G.ship(g)
	var y = w._ship(o.x, o.y, o.sc * 4, o.c)
			.aD(0).r(.8).K('ship yip y')
	if (!g.n) {
		y.cn('thrust')
	} else if (g.p) {
		y.tr()
	}
	y.shtSp()
	return y
}
w.Y = function () {
	var w = this, g = G(arguments)
	y = $a(w, 'y', g)
	if (g.p) {
		y.track()
	}
	return w
}
COLLIDE = BULLETS = BUL = function () {
	W({g: 0}).C('z')
	w.D(200, 200, 'b', 80).d(1).K('bad')
	w.D(200, 200, 'r', 150, 150).d(1).K('bad')
	_.t(5, function () {
		w.y('b', R(500, 50), R(500, 50))
	})
	w.b(function (cx) {
		cx.w('ship', 'bul', function (bul, cx) {
			this.kill()
		})
	})
	w.cl('bul', 'bad', function (b) {
		this.B() && this.B().kill()
		b.B() && b.B().kill()
	})
}
YIPPY = function () {
	_.ev(1, function () {
		W({g: 4})
		y = w.y(300, 400, 3, '-').rt(90)
		y1 = w.y(600, 400, 3, '-').rt(90)
		_.ev(1.5, function () {
			y.I(0, -.7).rt(4, '+')
			y1.I(4, 0).lV(0, -3).rt(4, '+')
		})
	})
	//ok this is crazy cool.. but something is wrong.
	// something is not getting reset,
	// because force gets bigger each time
}
BLUE = function () {
	W({g: 0})
	y = w.y('b', 200, 300, 6).aD(1).lD(1).r(0).fr(1).K('guy')
	_.t(5, function () {
		w.y(R(600, 50), 300, 3, '-').K('bad').rt(45)
				.push('+')
				.shtEv('badBul')
	})
	w.cl('badBul', function (f) {
		this.B().kill()
		//if(f.of('bad')){
		f.B().kill()
		//}
	})
}
 
