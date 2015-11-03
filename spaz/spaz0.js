 
 
b.polBu = b.polyBul = function () {
	alert('b.polBu polyBul')
	var b = this, w = b.W(), v, pt, bu
	v = b.vec(-20)
	pt = b.wP(0, -50)
	bu = w.polBu(pt.x, pt.y, 4, 4, 'w').d(1).lD(0).lV(v)
	return bu.K('polBu')
}

b2d.cn.sl = b2d.cn.slidey = function (p) {
	alert('slidy')
	var k = $.K
	if (p.onG) {
		if (k.u) {
			if (k.r) {
				p.I(20, -60)
			}
			else if (k.l) {
				p.I(-20, -60)
			}
			else {
				p.I(0, -100)
			}
		}
		else {
			if (k.l) {
				p.dir(0);
				p.I(-20, 0)
			}
			if (k.r) {
				p.dir(1);
				p.I(20, 0)
			}
		}
	}
	else {
		if (k.l) {
			p.dir(0);
			p.I(-10, 0)
		}
		if (k.r) {
			p.dir(1);
			p.I(10, 0)
		}
	}
	/*
	
	 p.I(p.onG&&k.u ? V(0, -70)
	
	 : k.r ? V(30, 0)
	 : k.l ? V(-30, 0)
	 : V(0, 0)  )*/
	return p
}
b2d.cn.h = b2d.cn.hop = function (p) {
	alert('hop')
	var k = $.K
	if (p.onGround) {
		if (k.l) {
			p.I(-30, -120)
		}
		if (k.r) {
			p.I(30, -120)
		}
	}
	else {
		if (k.d) {
			p.I(0, 20)
		}
	}
}
b2d.cn.power = function (p) {
	alert('power')
	var K = $.K
	if (K.u) {
		p.I(0, -45)
	}
	if (K.l) {
		p.I(-20, 0)
	}
	if (K.r) {
		p.I(20, 0)
	}
}
b2d.cn.powX = function (p) {
	alert('powX')
	var K = $.K
	if (K.u) {
		p.I(0, -4500)
	}
	if (K.l) {
		p.I(-2000, 0)
	}
	if (K.r) {
		p.I(2000, 0)
	}
	if (K.d) {
		p.I(0, 4500)
	}
}
b.diffx = b.difx = function (x, y) {
	alert('b.diffx difx')
	var b = this// compare with DIF  - achtung!
	return {
		x: x - b.X(),
		y: y - b.Y()
	}
}
w.p1 = w.player1 = function (x, y, sc, cn) {
	alert('w.p1 player1')
	var w = this, g = G(arguments), p,
			o = g.S_ ?
			{cn: g.f} :
					N(g.t) ? {x: g.f, y: g.s, sc: g.t, cn: g[3]} :
					{x: g.f, y: g.s, cn: g.t}
	o.x = N(o.x, w.hW)
	o.y = N(o.y, w.hH)
	o.sc = N(o.sc, 4)
	p = w.me(o.x, o.y, o.sc)
	if (g.p) {
		p.track()
	}
	p.cn(o.cn)
	p.speed = 40
	p._dir = 'r'
	p.dir = function (d) {
		var p = this
		if (U(d)) {
			return p._dir
		}
		p._dir = d;
		return p
	}
	p.moveInDir = function () {
		var p = this, g = G(arguments)
		if (g.n) {
			return p.move(-p.speed)
		}
		//n = _.tN(g[0], p.speed)// ?
		if (p.dir()) {
			p.I(3, 0)
		} else {
			p.I(-3, 0)
		}
		return p
	}
	p.SetBullet(true)
	w.cl('feet',
			function (f) {
				if (!f.sen()) {
					p.onG = 1
				}
			}
	)
	w.end(function (cx) {
		cx.w('feet', function (f) {
			if (!f.sen()) {
				p.onG = 0
			}
		})
	})
	$.testJump = 1
	if ($.testJump) {
		T.t(function () {
			if (p.onG) {
				$l('onG')
			}
			else {
				$l('in air')
			}
		})
		w.show(function () {
			return p.onG
		})
	}
	T.t(function () {
		p.I(0, 500)
	})
	return p
}
b.jumping = function (y, x) {
	alert('b.jumping')
	var b = this, k = $.K
	if (k.u) {
		if (k.r) {
			b.lV(x, -(y - x))
		}
		else if (k.l) {
			b.lV(-x, -(y - x))
		}
		else {
			b.lV(0, -y)
		}
	}
	return b
}
b.arrowMove = function () {
	alert('b.arrowMove')
	var b = this
	$.key({
		l: function () {
			b.dir('l').move()
		},
		r: function () {
			b.dir('r').move()
		},
		u: function () {
			if (b.dir() == 'l') {
				b.I(5, -12)
			}
			else if (b.dir() == 'r') {
				b.I(-5, -12)
			}
		}
	})
	return b
}
b.pWarping = function () {
	alert('b.pWarping')
	var p = this, b = this
	cjs.t(function () {
		if (p.Y() < 0) {
			p.Y(300)
		}
		if (p.Y() > 300) {
			p.Y(0)
		}
		if (p.X() < 0) {
			p.X(600)
		}
		if (p.X() > 600) {
			p.X(0)
		}
	})
	return b
}
//w.left and w.up move all objects in world
//i think only used in 1 game (talk?)
//end allert
w.up = function (n) {
	alert('w.up')
	var w = this;
	n = N(n, 4)
	w.e(function (b) {
		b.Y(n, '-')
	})
}//=w.vert
b.thr = function () {
	alert('b.thr')
	this.cn('thrust')
}
b2d.cn.jet = function (p) {
	alert('jet')
	var k = $.K, vec = p.GetWorldVector(V(0, -100))
	p.fixRot()
	if (k.left) {
		p.rot(8, '-').I(0, -5)
	}
	if (k.right) {
		p.rot(8, '+').I(0, -5)
	}
	p.I(
			k.up ? vec.div(1) : k.down ? vec.div(-100) : V(0, 0)
	)
}
 
 