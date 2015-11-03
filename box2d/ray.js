b2d.C = b2d.Collision

w.RC=function(fn,p1,p2){
	var w=this
	w.RayCast(fn,p1,p2)
	return w
}

w._rC = function (fn, v1, v2) {var w = this
	return w.RC(fn, V(v1).d(), V(v2).d())
}

w.rC = function () {

	var g=G(arguments),o
	
	
	if(N(g.t)){
	$l('Ng.t')
		o =  {v1: V(g.f, g.s), v2: V(g.t, g.fo), fn: g.fi} 
	}
	
	
	else { o = {v1: g.f, v2: g.s, fn: g.t} }

	
	return this._rC(o.fn, o.v1, o.v2)
}

w.ray = function () {

	$l('ray')
	var w = this, g = G(arguments), o
	o = g.S_ ?
	
	{k: g.f, x: g.s, y: g.t, x1: g.fo, y1: g.fi, fn: g.si} :
	{x: g.f, y: g.s, x1: g.t, y1: g.fo, fn: g.fi}
	
	var arr = [];
	
	w.rC(o.x, o.y, o.x1, o.y1, function (f) {
		if (f.of(o.k)) {arr.push(f)}
		
	})
		
	if (!o.fn) {return arr}
	g.p ? o.fn(_.f(arr)) : g.n ? o.fn(_.l(arr)) : _.e(arr, o.fn)
	return w  //2do: use 'G' to scrape off 'k' manually (g = w.G('k', arguments)
}
// RayCast(rayCastOutput,rayCastInput, tf)
// Cast a ray against this shape
// .// output — the ray-cast results.
// input:b2RayCastInput — the ray-cast input parameters.
// transform:b2Transform — the transform to be applied to the shape.
w.RCO=w.rC1 = function () {
	var w = this
	w.RayCastOne
}
w.RCA=w.rCA = function () {
	var w = this
	w.RayCastAll
}

 
f.rC = function () {
	var inp = new b2d.RCI(V(), V(430, 450).d())
	return this.RC(inp)
}

RAY = function () { W().C('z')
	w.S(200, 200, 'f', 100);
	w.S(500, 500, 'l', 160, 60)
	rs = w.ray(0, 0, 800, 800)
	_.in(function () {
		w.ray(0, 0, 500, 500, function (f) {  f.C('g') })
		w.ray(0, 0, 500, 500, function (f) { f.B().bS('me')  }, '-')
		w.ray(0, 0, 500, 500, function (f) { f.B().bS('sun') }, '+')
	})
}

RC = function () {W();
	var p1, p2, d, l

	w.me(400, 100);

	w.S(200, 200, 'r', 400, 20)

	w.$(function (v) {

		if (!p1) {
			p1 = v;
			return
		}
		
		if (!p2) {
			p2 = v
		} else {
			p1 = p2;
			p2 = v
		}
		
		w.i.e(function (c) {
			if (c.of('dot') || c.of('line')) {
				c.rm()
			}
			// if( c.K() == 'dot' || c.K()=='line' ){c.rm()}
		})
		
		
		w.d('b', p1);
		w.d('r', p2);
		w.l(p1.x, p1.y, p2.x, p2.y).K('line')
		
		w.ray(p1,p2, function (f) {
			$l('ray hit')
			_f = f
			
			f.C('w')
			
		})


	})

}

////

b2d.RCI = b2d.RayCastInput = b2d.C.b2RayCastInput
b2d.RCO = b2d.RayCastOutput = b2d.C.b2RayCastOutput
b2d.Segment = b2d.C.b2Segment
$Sg=b2d.Seg = function (x, y, x1, y1) {
	return new b2d.Segment(V(x, y), V(x1, y1))
}
b2d.rCIp = function (x, y, x1, y1, maxFrac) {
	maxFrac = N(maxFrac, 1)
	return new b2d.RCI(V(x, y, '-'), V(x1, y1, '-'), maxFrac)
}
b2d.rCOp = function (nX, nY, maxFrac) {
	maxFrac = N(maxFrac, 1)
	op = new b2d.RCO(maxFrac, V(nX, nY))
	op.maxFraction = 1
	return op
}
IMPR = function () {W({g: 0, w: 0}).Y()


	w.D(200, 235, 'b', 10).lV(20, 0).d(10)
	w.D(900, 200, 'r', 100, 100).rt(45)
	r = w.D(1100, 500, 'r', [[80], [20, 300]]).d(.1)
	r.$(function () {
		this.B().I(-1000, -2000)
	})
	f = r.f()
	w.i.dot(856, 240)
	s = $Sg(0, 0, 1200, 600)
	s1 = $Sg(1200, 0, 0, 600)
	lArr = 'the shape world transform'
	

	// nl = '2Vec2 — returns the hit fraction.'
	 // You can use this to compute the contact point
	 // p = (1 - lambda) segment.p1 + lambda segment.p2.
	// sg = ''//segment:b2Segment — returns the normal at the contact point.
	// If there is no intersection, the normal is not set.
	 
	   maxLam = 1000000//:Number — defines the begin and end point of the ray cast.
	
	  s.TestSegment(lArr, nl, s1, maxLam )
	
	ip = b2d.rCIp(0, 0, 1200, 600)
//	op = b2d.rCOp(1, 2)
//	res = f.rC(op, ip)

}
