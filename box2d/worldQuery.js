w.bd = w.GBL= w.GBdL=w.bs = w.bL = function () {
	return this.GetBodyList()
}    //can be result of w.b if g.u//= w.getBodyList
//


f.tP = f.hit = f.testPoint = f.test = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments), v
	v = V(g.f, g.s)
	if (g.p) {w.dot(v)}
	
	return f.H().TestPoint(  b.tf(), v.d() )
	//is a WORLD point within the fixture // very accurate
}

w.QPt = function (fn, p) {
	this.QueryPoint(fn, p)
	return this
} //= w._qPoint


w.qPoint = function () {
	var w = this, g = G(arguments), o
	o = g.N_ ? {v: V(g.f, g.s), fn: g.t} : {v: g.f, fn: g.s}
	return w.QPt(function (f) {
		return o.fn(f, f.B(), f.B().W())
	}, o.v.d())
}
worldIter()
toBoth()
AABBqu()
 
f.AB = function () {
	var ab = this.GetAABB()
	return {
		l: ab.lowerBound.m(),
		u: ab.upperBound.m()
	}
}
w.circleStat=function(x,y,r){
	var cir = w.sB(x,y)
	cir.A( $cir( N(r, 50) ) )
	return cir
}
w.circle = function (x, y, r) {
	var cir = w.dB(x, y)
	
	cir.A( $cir(N(r, 50)) )
	
	return cir
}



FSEL=function(){

	box(function(){



})
	w.circleStat(420, 400, 150)
	w.circleStat(300,400,50)
	
	w.circleStat(400, 550, 50)

	n=0
	
	 
	
	w.qPoint(300, 400, function (f, b, w) {
				$l("hit" + n++)
				//b.kill()
			//	w.mj = w.mJ(b, o.x, o.y)
				//return true
			})
 }
CLICKKILL = function () {
	box(function () {
	})
	
	w.circle (420, 400, 150)
	w.circleStat(300, 400, 50)
	w.circleStat(400, 550, 50)
	w.circleStat(500, 550, 50)
	w.circleStat(550, 550, 50)
 
 
	
	cv.click(function (e) {
		e.preventDefault();
		cvPos = cv.position()
		cvPos.x = cvPos.left
		cvPos.y = cvPos.top
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		$l('mousex '+ mouse.x)
		
		w.qPoint(mouse.x, mouse.y, function (f, b, w) {
		 
			 b.kill()
			//	w.mj = w.mJ(b, o.x, o.y)
			//return true
		})
		
		return false
	})
}
FSEL = function () {
	n = 0
	box(function () {
		//$l('tick-'+ n++)
		if (w.mj) {
			w.mj.tg(mouse.x, mouse.y)
		}
	})
	w.mouse = {x: 0, y: 0}
	w.circle(420, 400, 150)
	w.circleStat(300, 400, 50)
	w.circleStat(400, 550, 50)
	w.circleStat(500, 550, 50)
	w.circleStat(550, 550, 50)
	cvPos = cv.position()
	cvPos.x = cvPos.left
	cvPos.y = cvPos.top
	cv.click(function (e) {
		e.preventDefault();
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		w.qPoint(mouse.x, mouse.y, function (f, b, w) {
			w.mj = w.mJ(b, mouse.x, mouse.y)
		})
		return false
	})
	cv.mousemove(function (e) {
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		w.mouse = mouse
	})
	cv.mouseup(function () {
		w.mj = null
	})
}
FSEL = function () {
	
	box(function () {
		if(w.mj){
			var targ= w.mj.targ()
			$l('mouse joint target: ' +targ.x + ', '+ targ.y)
			w.mj.targ(mouseX, mouseY)
		}
		else {$l('no mouse joint')}
	})
	
	
	w.G(0)
	b=w.circle(420, 400, 150)
	w.circle(300, 400, 50)
	w.circleStat(400, 550, 50)
	w.circleStat(500, 550, 50)
	w.circleStat(550, 550, 50)
	cvPos = cv.position()
	cvPos.x = cvPos.left
	cvPos.y = cvPos.top
	
	cv.mousedown(function (e) {
		e.preventDefault();
	
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		w.qPoint(mouse.x, mouse.y, function (f, b, w) {
			
			var mj =  w.mJ(b, mouse.x, mouse.y,.1, 50000, 1000)
			
			
			mj.frq(120)
			
			mj.dmpRat(.01)
			
			mj.mxFo(100000)
			fq = mj.frq()
			$l( fq  )
			
			w.mj = mj		
		})
		
		return false
	})
	
	cv.dblclick(function(e){
	
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		w.qPoint(mouse.x, mouse.y, function ( f) {
			f.B().kill()
		})
 
	})
	
	cv.mousemove(function(e){
	 
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		mouseX = mouse.x
		mouseY = mouse.y
		 
	})
	
	
	cv.mouseup(function(){
		w.DestroyJoint(w.mj)
		w.mj=null
	})
	
}

FSEL0 = function () {

	box0(function () {
		if (w.mj) {
			$l('yes')
		} else {
			$l('no')
		}
	})


	w.circle(420, 400, 150)
	w.circleStat(300, 400, 50)
	w.circleStat(400, 550, 50)
	w.circleStat(500, 550, 50)
	w.circleStat(550, 550, 50)
	cvPos = cv.position()
	cvPos.x = cvPos.left
	cvPos.y = cvPos.top
	cv.mousedown(function (e) {
		e.preventDefault();
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		w.qPoint(mouse.x, mouse.y, function (f, b, w) {
			w.mj = w.mJ(b, mouse.x, mouse.y)
		})
		return false
	})
	cv.mousemove(function (e) {
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		if (w.mj) {
			w.mj.tg(mouse.x, mouse.y)
		}
	})
	cv.mouseup(function () {
		w.mj = null
	})
}
function mousey(){
w.mm(function (o) {
	w.logMXY(o)
})

w.md(function (o) {
	
	//this only goes off once when pushed and held down
	// anytime mousedown..
	// because that implies there was a mouse up 
	// so there should be no current mouse joint.. smart!
	w.logMXY(o)
	w.q(o.x, o.y, function (f) {
		//if(!f.iD()){return true}
		if (f.of(w.o.m)) {
			var b = f.B()
			w.mj = w.mJ(b, o.x, o.y)
		}
	})
})

w.mu(function () {
	// DESTROY WORLD MOUSE JOINT
	if (w.mj) {
		w.j(w.mj);
		w.mj = null
	}
})
}
function AABBqu() {
	ab = b2AABB.prototype
	ab.lB = ab._lB = function (x, y) {
		this.lowerBound.Set(x, y)
		return this
	}
	ab.uB = ab._uB = function (x, y) {
		this.upperBound.Set(x, y)
		return this
	}
	ab.lUB = function () {
		var ab = this, g = G(arguments),
				o = {
					x1: g.f, y1: g.s,
					x2: g.t, y2: g.fo
				}
		if (g.n) {
			o.x1 /= 30;
			o.y1 /= 30;
			o.x2 /= 30;
			o.y2 /= 30
		}
		ab.lB(o.x1, o.y1)
		ab.uB(o.x2, o.y2)
		return ab
	}
	ab.pt = function (x, y) {
		var g = G(arguments)
		return this.lUB(
				alg(x, '-'), alg(y, '-'), alg(x), alg(y)
		)
		function alg() {
			var g = G(arguments)
			return g.f / 30 + (g.n ? -.01 : .01)
		}
	}
	$AB = b2d.AB = function () {
		var g = G(arguments), ab = new b2d.Collision.b2AABB
		if (g.p) {
			ab.lUB(g.f, g.s, g.t, g.f)
		}
		else if (U(g.t)) {
			ab.pt(g.f, g.s)
		}			//ab.lUB(g.f/30 - 0.01, g.s/30 - 0.01, g.f/30 + 0.01, g.s/30 + 0.01)
		else {
			ab.lUB(g.f, g.s, g.t, g.fo, '-')
		}
		return ab
	}
	w.qA = function (fn, ab) {
		this.QueryAABB(fn, ab);
		return this
	}
//this is HACK//
	w.q =w.qPt =  w.qP = w.queryPt = w.query = function () {
		var w = this, g = G(arguments), o,
				fx
		o = g.S_ && N(g.s) ?
		{k: g.f, x: g.s, y: g.t, fn: g.fo} :
				g.S_ && O(g.s) ?
				{k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
						g.N_ ? {x: g.f, y: g.s, fn: g.t, k: g.fo} :
								g.A_ ?
								{x: g.f[0], y: g.f[1], fn: g.s, k: g.t} :
								{x: g.f.x, y: g.f.y, fn: g.s, k: g.t}
		var fn = function (f) {
			if (!f) {
				alert('w.query !this(f)')
			}
			if (f.of(o.k) && f.tP(o.x, o.y)) {
				fx = f;
				return false
			}
			return true
		}
		w.qA(fn, $AB(o.x, o.y))
		if (!fx) {
			return false
		}
		if (F(o.fn)) {
			_.b(o.fn, fx)(fx);
			return w
		}
		return fx
	}
//END HACK//
	w.Q = function () {
		$l('w.Q')
		var w = this, g = G(arguments), o, fx
		o = g.O ? g.f :
				g.S_ && N(g.s) ?
				{k: g.f, x: g.s, y: g.t, fn: g.fo} :
						g.S_ && O(g.s) ? {k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
								g.F_ && O(g.s) ? {fn: g.f, x1: g.s.x, y1: g.s.y} :
										g.F_ ? {fn: g.f, x1: g.s, y1: g.t, x2: g.fo, y2: g.fi} :
												g.O_ ? {x1: g.f.x, y1: g.f.y, fn: g.s} :
												{x1: g.f, x2: g.s, fn: g.t}
		o.n = 0
		w.qA(qAFn, $AB(o.x1, o.y1, o.x2, o.y2))
		function qAFn(f) {
			o.n++
			$l('w.Q qAFn' + o.n)
			if (o.fn(f, f.B(), o.n) !== false) {
				return true
			}
		}
		
		return w
		//but it makes a rectangle not square ??
	}//w.QUERY =
	w.rad = function (x, y, r, fn) {
		return this.Q({
			x1: x - r,
			y1: y - r,
			x2: x + r,
			y2: y + r,
			fn: fn
		})
	}
}
function worldIter() {
	w.eEv = w.eachEvery = function (fn) {
		var w = this
		$t(function () {
			w.bds(fn)
		})
		return w
	}
	w.bds = w.e = w.each = function () {
		var w = this, g = G(arguments), o,
				bs = w.GetBodyList(), k, b, arr
		o = g.S_ ? {k: g.f, fn: g.s} : {fn: g.f}
		if (g.u) {
			alert('w.e')
		}
		arr = []
		while (bs) {
			b = bs;
			bs = bs.N()
			if (b.of(o.k)) {
				arr.push(b)
			}
		}
		_.e(arr, function (b) {
			o.fn(b)
		})
		return w
	}
}
function toBoth() {
	_.inEv = w.inEv = function (n1, n2, fn) {
		_.in(n1, function () {
			_.ev(n2, function () {
				fn()
			})
		})
	}
	_.evIn = w.evIn = function (n1, n2, fn) {
		_.ev(n1, function () {
			_.in(n2, function () {
				fn()
			})
		})
	}
}
