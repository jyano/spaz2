

//linVelFromWorPt()
b.lVW = function () {
	var b = this, g = G(arguments);
	return b.GetLinearVelocityFromWorldPoint(V(g.f, g.s))
}   // return  b.GetLinearVelocityFromWorldPoint(V(g.f, g.s).d()).m()
LVW = function () {
	W([2000, 1500, 2000, 1500]).G(200).C('b');
	var b1, b2
	// y and remote control fireball
	var y = w.y(300, 100, '+')
	farMoon = w.D(600, 100, 'y', 150).K('b').r(1.2).lV(200, 0).cn('thrust').fR()
	nearMoon = w.D(400, 200, 'y', 100)
	$t(function () {
	
		var lV = y.lVW(y.X(), y.Y()).mult(20)
		nearMoon.lV(lV.x, lV.y)
	})
	
	p = w.p(900, 400).cn('jump')
	p.cl(_.mo(function () {
		w.D(300, 100, 'r', 5)
	}))
	sun = r1 = w.S(600, 300, 'r', 30, '-').K('r').bS('sun')
	sun.cl(function (f, cx) {
		var pt = cx.cen(), v1 = b.lVW(pt), v2 = r1.lVW(pt)
		w.D(630, 350, 'r', 10).I(v1.x - v2.x, v1.y - v2.y)
	})
}

cx.fnAB=function(fn){
	var cx=this
	_.b(fn, cx.A())(cx.B(), cx)
	return cx
}
cx.fnBA = function (fn) {
	var cx = this
	_.b(fn, cx.B())(cx.A(), cx)
	return cx
}
cx.kFn=function(k,fn){
	var cx=this
	if (cx.A().of(k)) {cx.fnAB(fn) }  
	else if (cx.B().of(k)) {cx.fnBA(fn)}  
}
cx.AB=function(){var cx=this

	return [cx.A(), cx.B(), cx]
}
cx.BA=function(){var cx=this
		return [cx.B(), cx.A(), cx]
	
}
cx.includes = cx.ic = function () {var cx = this, g = G(arguments)
	var o = {k : g.f, fn: g.s}
	
	if (o.fn) {
	
		if (cx.A().of(o.k)) {cx.fnAB(o.fn) } //_.b(o.fn, cx.A())(cx.B(), cx)
		else if (cx.B().of(o.k)) {cx.fnBA(o.fn) } //  _.b(o.fn, cx.B())(cx.A(), cx)
		return cx
	}
	
	//if this fixture 'of' that string(kind),fixt,or body
	//if so always passed back an array with the first mentioned selector in the [0] pos

	return cx.A().of(o.k) ? cx.AB(): cx.B().of(o.k) ? cx.BA(): false //[cx.A(), cx.B(), cx] : //[cx.B(), cx.A(), cx] :
	
	//if fixA is 'of' k, then run fn with fixA as 'this' and pass in fixB, cx
}

PROTOSIG = INC=function(){W()


	//cx.inc protosig
	 //     str    :  str,fn   :   obj   :   obj,fn
	
	var fisherman1 = w.p()
	
	 w.b(function(cx){
	 
	 
		 cx.ic(fisherman1, function(fish){
			 
			 this.eat(fish.B( ))
			 
		 })
		 
		 var oneWasFisherman1 = cx.ic(fisherman1);
		 
		 if(oneWasFisherman1){$l('the fish is: ' + Fisherman1[1])}
		 
		 cx.ic('fish', function(fisherman){  this.swimTo( fisherman.B( ))  })
	 
		 var oneWasFish = cx.ic('fish'); 
		 
		 if(oneWasFish){
			 $l('the fish is: '+oneWasFish[0])
		 }
	 
	 })
	 
	 
}


cx.between = cx.bw = function () {
	var cx = this,
			g = G(arguments),
	// bw(k,k1)  or  bw(k,k1,fn)
			a = cx.A(), b = cx.B()
	if (F(g.t)) {
		if (a.of(g.f) && b.of(g.s)) {
			g.t.apply(a, [b, cx])
		}
		else if (b.of(g.f) && a.of(g.s)) {
			g.t.apply(b, [a, cx])
		}
		return cx
	}
	return cx.A().of(g.f) && cx.B().of(g.s) ? [cx.A(), cx.B(), cx] :
			cx.B().of(g.f) && cx.A().of(g.s) ? [cx.B(), cx.A(), cx] :
					false
}
cx.with = cx.includesBetween = cx.w = function () {var cx = this, g = G(arguments)
	
	// (k/o)  : (k/o,  fn)  //  (k/o,  k1/o)  :   (k/o,k1/o, fn)
	//if you have a second pam,, but its not a function
	

	
	
	return g.s && !F(g.s) ?
			cx.bw(g.f, g.s, g.t) :
			cx.ic(g.f, g.s)
}
cx.worMan=cx.getWorMan = cx.getWorFold=cx.m = function () {
	var cx = this, m = new b2d.Collision.b2WorldManifold
	cx.GetWorldManifold(m);
	return m
}
cx.pt = cx.cen = function () {
	return V(this.pX(), this.pY())
}
cx.pX = function () {
	return parseInt(this.m().m_points[0].m().x)
}
cx.pY = function () {

	return parseInt(this.m().m_points[0].m().y)
}
cx.lP = function (b) {
	return b.lP(  this.pX(), this.pY()  )
}
cx.norm=cx.n = function (n) {
	return this.m().m_normal.toFixed(2).m(N(n, 1))
}
cx.normX=cx.nX = function (n) {
	return this.n(n).x
}
cx.normY=cx.nY = function (n) {
	return this.n(n).y
}
w.tanFuture=cx.t = function () {
}//what about tangent?
//presolve
cx.setEn=cx.setEnab=cx.e = cx.en = function (a) {
	var cx = this
	if (U(a)) {
		return cx.IsEnabled()
	}
	cx.SetEnabled(a ? true : false);
	return cx
}
cx.getNx=cx.N = function () {
	return this.GetNext()
}
cx.getMan=cx.getFold=cx.ty = cx.T = function () {
	return this.GetManifold().m_type
}
cx.fA= cx.getFxtA=cx.A = function () {return this.GetFixtureA()}
cx.fA= cx.getFxtB=cx.B = function () {return this.GetFixtureB()}
cx.bA= cx.getBodA=cx.a = function () {return this.A().B()}
cx.bA= cx.getBodB=cx.b = function () {return this.B().B()}
cx.isCont=cx.isContin= cx.c = cx.cont = cx.continuous = cx.iC = function () {
	var cx = this
	return cx.IsContinuous()
} //Does this contact generate TOI events for continuous simulation
cx.isSen=cx.iS = cx.s = cx.sen = function () {
	var cx = this, g = G(arguments)
	if (g.u) {
		return cx.IsSensor()
	}
	cx.SetSensor(g.f ? true : false)
	return cx
}
cx.isTouch=cx.doesTouch=cx.iT = cx.tch = cx.touching = cx.iT = function () {
	return this.IsTouching()
}
PRESOLVE = function () {
	W([1200, 600, 1200, 2000], {g: -1000}).stats().P(600, 1800)
	
	w.G(-100)
	var b1, b2
	plat([300, 300], [900, 600], [300, 900], [300, 1000], [1000, 1200], [500, 1500])
	pf = plat(900, 1800)
	// PreSolve
// gives us a chance to change the characteristics of the contact
// before the collision response is calculated,
// or even to cancel the response altogether,
//  Here are the alterations you can make to the contact in PreSolve:
//  cx.SetFriction( friction)  // persists for duration of contact
//  cx.SetRestitution(  restitution)   //persists for duration of contact
//  cx.SetEnabled( false )//SetEnabled(bool flag); //non-persistent - need to set every time step
// will disable the contact,
// meaning that the collision response that normally would have been applied will be skipped.
// You can use this to temporarily allow objects to pass through each other
// . A classic example of this is the one-way wall or platform,
// where the player is able to pass through an otherwise solid object,
// depending on various criteria that can only be checked at runtime,
// like the position of the player and which direction direction they are heading, etc.
// It's important to note that the contact will revert back to being enabled in the next time step,
// so if you want to disable contacts like this you'll need to call SetEnable(false) every time step.
// The contact is only disabled for the current time step
// (or sub-step in continuous collision).
	function plat(x, y) {
		var g = G(arguments)
		if (g.O_) {
			g.e(function (g) {
				plat(g[0], g[1])
			});
			return
		}
		return w.S(x, y, 'o', 500, 40).K('pf')
	}
	
	p.K('p').tr()//.cl(_.mo(function(){w.D(p.X(), p.Y()-150,'w',5,5,0,0,45)}))
	p.cl(w._t, //when player coll roof,
			function () {
				w.C('z');
				w.G(1000)
			})
	//one way wall
	w.pre('pf', function (f, cx) {
		if (p.Y() - this.B().Y() > 10) {
			cx.en(0)
		}
	})
}
//point:
CXPT = function () {

$l('CXPT')
	
	W().randRects().Y() //only works on NON-sensors?

	y.stat()

	w.y(100, 100)
	
	w.b(function (cx) {
	
		w.i.dot(
		
		$r(), 
		
		cx.pt().x, 
		
		cx.pt().y
		
		
		)
	})

}






LCXPT = function () {
	W([3000, 1000], {g: 0, t: 0})
	//<- var lP=cx.lP(b) //b.lP( cx.pX(), cx.pY() )
	b = w.D(300, 400, 'b', 200, 200).cn('thrust').K('sqr')
	r = w.D(300, 400, 'r', 200, 200).cn('thrust').K('sqr')
	b.SetBullet(true)
	w.b(function (cx) {
		cx.w(
				'sqr',
				function () {
					if (!cx.w('bruise')) {
						b.cir({c: 'z', r: 15, x: cx.lP(b).x, y: cx.lP(b).y})
								.K('bruise')
					}
				}
		)
	})
	CRAZY = function () {
		W({g: 0}).randRects();
		b = w.D(300, 400, 'r', 200, 200).cn('thrust')
		w.b(function (cx) {
			w.dot($r(), cx.p())
			lP = b.lP(cx.p())
			b.cir({c: 'z', r: 15, x: lP.x, y: lP.y})
		})
	}
}
PAINTBALL = function () {
	W().randRects().Y() //only works on NON-sensors?
	y.stat()
	w.y(100, 100)
	w.b(function (cx) {
		w.i.dot($r(), cx.pt().x, cx.pt().y)
	})
}
BUB = SPRINK = BUBBLEPOP = function () {
	W({W: 2000, g: 0}).Y();
	_.t(10, function () {
		w.D(800, 200, 'r', 20).K('r')
	})
	w.S(50, 550, 'o', 200);  //w.S(800,300,'z', 80)
	b = w.S(300, 0, 'o', 200, 300).K('r')
	r = w.D(300, 300, 'r', 80).K('b')
	// dot both upper and lower bounds of AABB of both fixts
	w.cl(function (f, cx) {
		var ab, lb, up
		ab = f.GetAABB();
		lb = ab.lowerBound;
		ub = ab.upperBound
		w.i.dot('w', ub.x * 30, ub.y * 30);
		w.dot('p', lb.x * 30, lb.y * 30)
		ab = this.GetAABB();
		lb = ab.lowerBound;
		ub = ab.upperBound
		w.i.dot('w', ub.x * 30, ub.y * 30);
		w.dot('p', lb.x * 30, lb.y * 30)
		f.dot('g')
		this.dot('r')   //dot center of both fixts
		w.i.dot('y', M.lC(f.cen(), this.cen()))   //dot center of their centers
		cx.w(b, col)
		cx.w('b', 'r', col);
		cx.w(b, r, col);
		cx.w('b', r, col)
	})
	w.end(function (cx) {
		cx.w('b', col)
	})
	function col(f) {
		this.C($r())
	}
	
	//2do:draw line to connect these pts..
	// w.chalk('center of the two fixtures not necessarily  same as the cX pt. (can only represent col center if fSs are sSAME size... maybe halfway btwen this and the actual contact point would be nice')
}  //M.lC is not a function
BRUISE = CORNERBATTLE = function () {
	W([3000, 1000], {g: 0, t: 0})
	//<- var lP=cx.lP(b) //b.lP( cx.pX(), cx.pY() )
	w.p()
	w.p()
	w.p()
	w.p()
	w.p()
	
	b = w.D(300, 400, 'b', 200, 200).cn('thrust').K('sqr')
	
	b.bS('sun')
	 
	
	
	r = w.D(300, 400, 'r', 200, 200).cn('thrust').K('sqr')
	
	
	b.SetBullet(true)
	w.b(function (cx) {
		cx.w(
				'sqr',
				function () {
					if (!cx.w('bruise')) {
						b.cir({c: 'z', r: 15, x: cx.lP(b).x, y: cx.lP(b).y})
								.K('bruise')
					}
				}
		)
	})
	CRAZY = function () {
		W({g: 0}).randRects();
		b = w.D(300, 400, 'r', 200, 200).cn('thrust')
		w.b(function (cx) {
			w.dot($r(), cx.p())
			lP = b.lP(cx.p())
			b.cir({c: 'z', r: 15, x: lP.x, y: lP.y})
		})
	}
}
w.b = w.bg = w.beg = function () {
	var w = this, g = G(arguments), o, fn;
	if (g.u) {
		return this.GetBodyList()
	} /// polymorphism here??? wow.. super cryptic!!!!
	//ADDS one or more handlers to beginHandlers array
	//most common use, usually just need one func.
	// would i ever need more?lVWs
	//it just puts each item into bH arr
	fn = F(g.t) ? function (cx) {
		if (cx.w(g.f, g.s)) {
			g.t(cx)
		}
	} :
			F(g.s) ? function (cx) {
				if (cx.w(g.f)) {
					g.s(cx)
				}
			} :
					g.f //fn=$.mo(.2,fn)
	w.bH.push(fn)
	return w
}
w.end = function () {
	var w = this, g = G(arguments)
	if (g.F_) {
		g.e(function (fn) {
			w.eH.push(fn)
		})
	}
	else if (F(g.s)) {
		w.eH.push(function (cx) {
			cx.w(g.f, g.s)
		})
	}
	else if (F(g.t)) {
		w.eH.push(function (cx) {
			cx.w(g.f, g.s, g.t)
		})
	}
	return w
}
w._pre = function (fn) {
	var w = this, g = G(arguments)
	//fn = $.mo(.2,fn )
	w.pH.push(fn)
	return w
}
w.pre = function () {
	var w = this, g = G(arguments), o, fn
	//this good
	//fn=$.mo(.2,fn) //this will break it!!
	return w._pre(
			F(g.t) ?
					function (cx, i) {
						if (cx.w(g.f, g.s)) {
							g.t(cx)
						}
					} :
					F(g.s) ?
							function (cx, i) {
								cx.w(g.f, function (f) {
									_.b(g.s, this)(f, cx, i)
								})
							} :
							g.f
	)
}
w.post = w.po = function () {
	var w = this, g = G(arguments)
	g.e(function (fn) {
		w.PH.push(
				function (cx, I) {
					var i = _.m(I.normalImpulses, M.fl)[0],
							t = _.m(I.tangentImpulses, M.fl)[0]
					return fn(
							cx, i, t)
				})
	})
	return w
}
w.cl = function () {
	var w = this, g = G(arguments)
	if (g.F) {
		w.b(function (cx) {
			_.b(g.f, cx.A())(cx.B(), cx)
		})
	}
	else {
		w.b(function (cx) {
			cx.w(g.f, g.s, g.t)
		})
	}
	return w
}
b.end = function () {
	var b = this, w = b.W(), g = G(arguments), o
	o = F(g.s) ? {k: g.f, fn: g.s} : {fn: g.f}
	o.k ? w.end(b, o.k, o.fn) : w.end(b, o.fn)
	return b
}
b.pre = function () {
	var b = this, w = b.W(), g = G(arguments)
	w.pre(function (cx) {
		cx.w(b, g.f, g.s, g.t)
	})
}
f.cl = f.collide = function (k, fn) {
	var f = this
	//ultimate func for FIXTURE COLL
// you can specify what happens when a fixture hits:
//ANYTHING
// body/fixt of certain kind
// specific fixt
// specific body
//but it its callback ALWAYS passed back the other fixt that was actually hit
// and 'this' is set to THIS fixt within the cb
//should cover class AND fixt AND body cases!!!
	if (F(k)) {
		fn = k;
		k = ''
	}
	fn = _.b(fn, f)
	w.b(function (cx) {
		var fA = cx.A(), fB = cx.B()
		if (f.of(fA) && fB.of(k)) {
			fn(fB, cx)
		}
		if (f.of(fB) && fA.of(k)) {
			fn(fA, cx)
		}
	})
	return f
}
b.cl = b.b = b.collide = function () {
	var b = this, w = b.W(), g = G(arguments), o
	// if body collides with ANYTHING
	// if body collides with body/fixt of specific kind
	// if body collides with specific body
	// if body collides with specific fixt
	// but always pass fixt into the cb
	if (F(g.f) && F(g.s)) {
		this.cl(g.f)
		w.end(b, g.s)
		return b
	}
	o = g.F_ ? {fn: g.f, k: ''} : {k: g.f, fn: g.s}
	w.b(function (cx) {
		var fA = cx.A(), fB = cx.B()
		if (b.of(cx.a()) && fB.of(o.k)) {
			if (o.fn) {
				_.b(o.fn, fA)(fB, cx);
				return w
			}
			return [fA, fB, cx]
		}
		else if (b.of(cx.b()) && fA.of(o.k)) {
			if (o.fn) {
				_.b(o.fn, fB)(fA, cx);
				return w
			}
			return [fB, fA, cx]
		}
	})
	return b
}
b.isSen = b.sr = b.sen = function () {
	var b = this, f = b.f(), g = G(arguments)
	if (g.d) {
		return b.sen(!b.sen())
	}//b.sen('/')->toggle sen
	if (U(g[0])) {
		return f.m_isSensor
	}
	f.m_isSensor = g[0] ? true : false
	return b
}
NORMAL = function () {
	W({W: 1500, H: 1200, g: 0}).C('b')
	y = w.D(100, 100, 'w', 40).fR().cn('thrust').bS('me')
	y.cir('y', 50)
	y.cl(w.S(300, 300, 'g', 50),
			function (f, cx) {
				w.D(600, 300, 'g', 20).K('g').I(-cx.nX(300), cx.nY(300))
			})
	y.cl(w.S(900, 300, 'o', 50), function (f, cx) {
		w.D(600, 300, 'o', 20).K('o')
				.I(-cx.nX(300), cx.nY(300))
	})
	y1 = w.D(300, 300, 'w', 10).fR().cn('thrust').bS('me').I(20, 20)
	y1.cir('y', 40).r(.8)
	Ball = _.mo(.5, function (n) {
		w.D(600, 200, 'o', 5).bit(0)
				.K('o').r(.9).I(n.x, n.y)
	})
	w.D(600, 300, 'o', 70).r(.8)
			.cl(function (f, cx) {
				if (cx.nX() || cx.nY()) {
					if (O(cx) && F(cx.n)) {
						Ball(cx.n(10000))
					}
				}
			})
	/*
	 //just copies lV
	 b=w.D(500,300,'b',50).d(1).K('b')
	 r = w.D(700,300,'r', 80).d(1)
	 w.b( function(cx){ cx.w('b', function(f){
	 if(cx.a().of('b')){r.lV(cx.lV(cx.a()))}
	 else {r.lV( cx.lV(cx.b()))}})})
	 */
//w.pop('me absorbs energy of tims collision!'); $.in(4, function(){w.pop('gets actual v of bA')}); $.in(8, function(){w.pop('at moment of col!')})
//normalImpulse is the magnitude of the correcting impulse applied to push the two bodies apart when they collide.
// This is in the direction of the contact normal.
	NL0 = function () {
		W({W: 900, H: 600, g: 0, w: '|'}).C('b')
		y = w.D(100, 100, 'w', 40)
		y.fR().cn('thrust').warp().bS('me').cir('g', 50)
		w.S(200, 300, 'g', 100).cl(function (f, cx) {
			w.D(600, 300, 'g', 20).I(-cx.nX(300),
					cx.nY(300))
		})
	}
	NL = function () {
		W({W: 1200, H: 600, g: 0, w: '|'}).C('b')
		y = w.D(100, 100, 'w', 40).fR().cn('thrust').warp().bS('me')
		y.cir('y', 50)
		y.cl(w.S(300, 300, 'g', 100), function (f, cx) {
			w.D(300, 300, 'g', 20).I(-cx.no(300).x, cx.no(300).y)
		})
		y.cl(w.S(900, 300, 'o', 100), function (f, cx) {
			w.D(900, 300, 'o', 20).I(-cx.no(300).x, cx.no(300).y)
		})
		y.cl(w.S(600, 300, 'w', 60, '-'), function (f, cx) {
			w.D(600, 300, 'z', 20, '-').K('w').I(cx.no(300).x, cx.no(300).y)
		})
	}
}
SICK = BBALL = MOONSOCCER = function () {
	W({W: 1500, H: 1200, g: 0, w: ''}).C('b')
	y = w.D(100, 100, 'w', 40).fR().cn('thrust').bS('me')
	y.cir('y', 50)
	greenBall = w.S(300, 300, 'g', 50)
	y.cl(
			greenBall,
			function (f, cx) {
				var bullet = w.D(600, 300, 'g', 20)
				bullet.K('g').I(
						-cx.nX(300),
						cx.nY(300)
				)
			}
	)
	y.cl(
			w.S(900, 300, 'o', 50), function (f, cx) {
				w.D(600, 300, 'o', 20).K('o').I(-cx.nX(300), cx.nY(300))
			})
	y.warp()
}
//y1 = w.D(300, 300, 'w', 10).fR().cn('thrust').bS('me').I(20, 20)
//y1.cir('y', 40).r(.8)
/*	Ball = _.m(.5, function (n) {
 w.D(600, 200, 'o', 5).bit(0)
 .K('o').r(.9).I(n.x, n.y)
 })
 w.D(600, 300, 'o', 70).r(.8)
 .cl(function (f, cx) {
 if (cx.nX() || cx.nY()) {
 if (O(cx) && F(cx.n)) {
 Ball(cx.n(10000))
 }
 }
 })
 /*
 //just copies lV
 b=w.D(500,300,'b',50).d(1).K('b')
 r = w.D(700,300,'r', 80).d(1)
 w.b( function(cx){ cx.w('b', function(f){
 if(cx.a().of('b')){r.lV(cx.lV(cx.a()))}
 else {r.lV( cx.lV(cx.b()))}})})
 */
//w.pop('me absorbs energy of tims collision!'); _.in(4, function(){w.pop('gets actual v of bA')}); _.in(8, function(){w.pop('at moment of col!')})
//normalImpulse is the magnitude of the correcting impulse applied to push the two bodies apart when they collide.
// This is in the direction of the contact normal.
NL0 = function () {
	W({W: 900, H: 600, g: 0, w: '|'}).C('b')
	y = w.D(100, 100, 'w', 40)
	y.fR().cn('thrust').warp().bS('me')
	y.cir('g', 50)
	b = w.S(200, 300, 'g', 100)
	b.cl(function (f, cx) {
		var b1 = w.D(600, 300, 'g', 20)
		b1.I(-cx.nX(300), cx.nY(300))
	})
}
NL = function () {
	W({W: 1200, H: 600, g: 0, w: '|'}).C('b')
	y = w.D(100, 100, 'w', 40).fR().cn('thrust').warp().bS('me')
	y.cir('y', 50)
	y.cl(w.S(300, 300, 'g', 100), function (f, cx) {
		w.D(300, 300, 'g', 20).I(-cx.no(300).x, cx.no(300).y)
	})
	y.cl(w.S(900, 300, 'o', 100), function (f, cx) {
		w.D(900, 300, 'o', 20).I(-cx.no(300).x, cx.no(300).y)
	})
	y.cl(w.S(600, 300, 'w', 60, '-'), function (f, cx) {
		w.D(600, 300, 'z', 20, '-').K('w').I(cx.no(300).x, cx.no(300).y)
	})
}
POSTSOLVE = function () {
	W([1200, 600], {
		g: 10//g:50//,w:'='
	})
	// I want the dir of the tangent and its ratio to the impulse part!!!
	//PostSolve
//with post, u get a second pam, which tells impulses(both norm and tang)
// we can find out what the collision response was.
//b2d.wM=  b2d.man= b2d.manifold= b2d.worldManifold= function(){return new b2d.Collision.b2WorldManifold}
//direction of collision normal:
//By convention in Box2d, the collision normal
// (for both the world manifold and the contact manifold) points from A to B -
//gets the linVel at time of collision!
	w.b_.fr(100000000000)
	w.S(100, 100, $r(), 800, 100, 0, 0, -20).fr(100000)
	y = w.y(140, 400, '+').r(.6).fr(1000000).lD(1).aD(10000000)//'++'
	w.D(200, 200, 'b', 20).r(1)
	w.D(900, 200, 'r', 100).r(1)
	//JASON YANOFSKI LISTEN TO YOU:
	//OK SO THIS IS IMPORTANT OR U WILL WASTE TIME AND FUCK THINGS UP
	// THE WHOLE 'FIRST' THING IS NOT NECESSARY ANYMORE BECAUSE WE ARE NOT CONCERNED WITH
	// THAT PARTICULAR FUNCTANILTY IN THIS PARTICULAR FUNCTION
	//BUT YOU MAY HAVE REASON TO WANT TO
	//'GET SPECIFICALLY THE first ONLY VALUE FROM ONE COLLISION (FIRST TIME POSTSOLVE IS EVER CALLED ON THAT COLL OBJ)
	imp = 0;
	tang = 0;
	sum = 0
	w.po(function (cx, i, t) {
		imp = i;
		tang = t
		if (first && M.avg(i + t) > 5) {
			sum = M.avg(i + t)
			first = 0
		}
	})
	w.b(function () {
		first = 1
	})
	w.show(function () {
		return imp + ' + ' + tang + ' = ' + sum
	})
// $l('i:'+i+' t:'+t+' sum:'+(M.avg(i)+ M.avg(t)) + ' prod:'+M.avg((i*t)))
// tangentImpulse is the magnitude of the impulse applied to simulate friction between
// the two colliding fixtures, and this is perpendicular to the contact normal.
//   You can put these together to get the overall impulse applied.
// I'm not sure which way the tangent faces in relation to the normal
// but in 2D there are only two possibilities.
	w.D(400, 200, 'y', 50).d(.1).lV(10)
	w.D(200, 500, 'r', 40).d(1)
	w.D(200, 500, 'b', 25).d(100)
	w.D(800, 200, 'p', 10).d(1000).lV(-10)
}
POST = SMASHOUT = function () {
	W([1200, 600], {
		g: 10//g:50//,w:'='
	})
	// I want the dir of the tangent and its ratio to the impulse part!!!
	//PostSolve
//with post, u get a second pam, which tells impulses(both norm and tang)
// we can find out what the collision response was.
//b2d.wM=  b2d.man= b2d.manifold= b2d.worldManifold= function(){return new b2d.Collision.b2WorldManifold}
//direction of collision normal:
//By convention in Box2d, the collision normal
// (for both the world manifold and the contact manifold) points from A to B -
//gets the linVel at time of collision!
	w.b_.fr(100000000000)
	w.S(100, 100, $r(), 800, 100, 0, 0, -20).fr(100000)
	y = w.y(140, 400, '+').r(.6).fr(1000000).lD(1).aD(10000000)//'++'
	w.D(200, 200, 'b', 20).r(1)
	w.D(900, 200, 'r', 100).r(1)
	//JASON YANOFSKI LISTEN TO YOU:
	//OK SO THIS IS IMPORTANT OR U WILL WASTE TIME AND FUCK THINGS UP
	// THE WHOLE 'FIRST' THING IS NOT NECESSARY ANYMORE BECAUSE WE ARE NOT CONCERNED WITH
	// THAT PARTICULAR FUNCTANILTY IN THIS PARTICULAR FUNCTION
	//BUT YOU MAY HAVE REASON TO WANT TO
	//'GET SPECIFICALLY THE first ONLY VALUE FROM ONE COLLISION (FIRST TIME POSTSOLVE IS EVER CALLED ON THAT COLL OBJ)
	imp = 0;
	tang = 0;
	sum = 0
	w.po(function (cx, i, t) {
		imp = i;
		tang = t
		if (first && M.avg(i + t) > 5) {
			sum = M.avg(i + t)
			first = 0
		}
	})
	w.b(function () {
		first = 1
	})
	w.show(function () {
		return imp + ' + ' + tang + ' = ' + sum
	})
// $l('i:'+i+' t:'+t+' sum:'+(M.avg(i)+ M.avg(t)) + ' prod:'+M.avg((i*t)))
// tangentImpulse is the magnitude of the impulse applied to simulate friction between
// the two colliding fixtures, and this is perpendicular to the contact normal.
//   You can put these together to get the overall impulse applied.
// I'm not sure which way the tangent faces in relation to the normal
// but in 2D there are only two possibilities.
	w.D(400, 200, 'y', 50).d(.1).lV(10)
	w.D(200, 500, 'r', 40).d(1)
	w.D(200, 500, 'b', 25).d(100)
	w.D(800, 200, 'p', 10).d(1000).lV(-10)
}
ERR = LCNOTFUNC = PT = function () {
	W({W: 2000, g: 0}).Y();
	_.t(10, function () {
		w.D(800, 200, 'r', 20).K('r')
	})
	w.S(50, 550, 'o', 200);  //w.S(800,300,'z', 80)
	b = w.S(300, 0, 'o', 200, 300).K('r')
	r = w.D(300, 300, 'r', 80).K('b')
	// dot both upper and lower bounds of AABB of both fixts
	w.cl(function (f, cx) {
		var ab, lb, up
		ab = f.GetAABB();
		lb = ab.lowerBound;
		ub = ab.upperBound
		w.i.dot('w', ub.x * 30, ub.y * 30);
		w.dot('p', lb.x * 30, lb.y * 30)
		ab = this.GetAABB();
		lb = ab.lowerBound;
		ub = ab.upperBound
		w.i.dot('w', ub.x * 30, ub.y * 30);
		w.dot('p', lb.x * 30, lb.y * 30)
		f.dot('g')
		this.dot('r')   //dot center of both fixts
		w.i.dot('y', M.lC(f.cen(), this.cen()))   //dot center of their centers
		cx.w(b, col)
		cx.w('b', 'r', col);
		cx.w(b, r, col);
		cx.w('b', r, col)
	})
	w.end(function (cx) {
		cx.w('b', col)
	})
	function col(f) {
		this.C($r())
	}
	
	//2do:draw line to connect these pts..
	// w.chalk('center of the two fixtures not necessarily  same as the cX pt. (can only represent col center if fSs are sSAME size... maybe halfway btwen this and the actual contact point would be nice')
}
