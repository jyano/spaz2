b2d.Vec = b2d.Common.Math.b2Vec2

v = b2d.Vec.prototype

V = function (x, y, x2, y2) {
	var g = G(arguments),
			x = g.f, y = g.s, x2 = g.t, y2 = g.fo,
			v
	if (A(x)) {
		y2 = x[3]
		x2 = x[2]
		y = x[1]
		x = x[0]
	}
	if (N(y2)) {
		x = (x - x2) / 2
		y = (y - y2) / 2
	}
	else if (O(x)) {
		if (b2d.iF(O(x))) {
			x = x.B()
		}
		y = F(x.Y) ? x.Y() : x.y
		x = F(x.X) ? x.X() : x.x
	}
	x = N(x, 0)
	y = N(y, x)
	v = new b2d.Common.Math.b2Vec2(x, y)
	if (g.n || g.d) {
		v = v.d()
	}
	if (g.p || g.m) {
		v = v.m()
	}
	return v
}
_V = function (x, y, x2, y2) {
	var g = G(arguments)
	if (g.A_) {
		return _V.apply(null, g.f)
	}
	return N(g.t) ? {
		x: (g.f - g.t) / 2,
		y: (g.s - g.fo) / 2
	} : N(g.f) ? {x: g.f, y: g.s} : x
}
_vec = function (o, g) {
	var v = new b2d.Vec(o.x, o.y)
	if (g.n || g.d) {
		v = v.d()
	}
	if (g.p || g.m) {
		v = v.m()
	}
	return v
}
V = function (x, y, x2, y2) {


	var g = G(arguments),
			x = g.f, y = g.s, x2 = g.t, y2 = g.fo,
			v,o
			
	
	o= {x: g.f, y: g.s, x2: g.t, y2: g.fo}
			
	if (A(x)) {
	
		y2 = x[3]
		x2 = x[2]
		y = x[1]
		x = x[0]
		o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
	}
	
	if (N(y2)) {
	
		x = (x - x2) / 2
		y = (y - y2) / 2
		o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
	}
	
	
	else if (O(x)) {
		o=	obX(x)
		x=o.x
		y=o.y
	}
	
	
	o.x = N0(o.x)
	o.y = N(o.y, o.x)
	
	
	return _vec({ x: N0(x), y: N(y, x) }, g)
}
function obX(x) {
	if (b2d.iF(O(x))) {
		x = x.B()
	}
	var y = F(x.Y) ? x.Y() : x.y
	x = F(x.X) ? x.X() : x.x
	return {
		x: x,
		y: y
	}
}
V0 = function (x, y) {
	if (O(x)) {
		return V0(V(x).x, V(x).y)
	}
	return {x: N0(x), y: N0(y)}
}


v.add = v.a = function () {
	var v = this, g = G(arguments), v1
	if (g[2]) {
		return _.m(g, function (g) {
			return v.add(g)
		})
	}
	v1 = g.u ? V(1, 1) : V(g.f, g[1])
	return V(
			v.x + v1.x,
			v.y + v1.y
	)
}
v.A = function () {
	var v = this, g = G(arguments), v1
	if (A(g[0]) && U(g[1])) {
		_.e(g, function (g) {
			v1 = V(g)
			v.add(v1.x, v1.y)
		})
	}
	else {
		v1 = V(g)
		v.add(v1.x, v1.y)
	}
}
/*
 b2d.add=function(vs,p){

 return _.m(vs, function(v){

 return v.add(p)

 })
 }*/
v.s = v.sub = function () {
	var v = this, g = G(arguments),
			o = V(g[0], g[1])
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	return V(v.x - o.x, v.y - o.y)
}
v.tF = v.f = v.dec = v.toFixed = function (n) {
	var v = this
	n = N(n, 1)
	return V(
			Number(v.x.toFixed(n)),
			Number(v.y.toFixed(n))
	)
}
v.r = v.rt = v.rot = function (rot) {
	var x = this.x, y = this.y,
			rot = Math.toRadians(rot),
			cos = Math.cos, sin = Math.sin
	return V(
			x * cos(rot) - y * sin(rot),
			x * sin(rot) + y * cos(rot)
	).dec(3)
}
v.tA = function () {
	return [this.x, this.y]
}

b2d.xy = function (o) {
	if (b2d.iF(O(o.x))) {
		o.x = o.x.B()
	}
	if (O(o.x)) {
		o.x = F(o.x.X) ? o.x.X() : o.x.x
	}
	if (O(o.y)) {
		o.y = F(o.x.Y) ? o.x.Y() : o.x.y
	}
	return o
}

v.m = v.mult = function (n) {
	n = N(n, 30)
	var v=this
	v = _.clone(v)
	v.Multiply(n)
	return v
}
v.d = v.div = function (n) {
	return this.mult(1 / N(n, 30))
}
b2d.m=b2d.mult = function (v) {
	return V(v).m()
}
b2d.d=b2d.div = function (v) {
	return V(v).d()
}




b2d.mat22 = function (v1, v2) {
	var m = new b2d.Mat22()
	m.SetVV(v1, v2)
	return m
}
b2d.tf = function (v1, v2, v3) {
	if (U(v1)) {
		return new b2d.Math.b2Transform()
	}
	if (A(v1)) {
		return b2d.tf(
				V(v1[0], v1[1]),
				V(v1[2], v1[3]),
				V(v1[4], v1[5]))
	}
	var tf = new b2d.Math.b2Transform(v1, b2d.mat22(v2, v3))
	return tf
}
 