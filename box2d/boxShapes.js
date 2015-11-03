b2d.Shape = b2d.Shapes.b2Shape
b2d.CS = b2d.CircleShape
b2d.FD = b2d.FixtureDef

bH = b2d.Shape.prototype

pH = b2d.PolygonShape.prototype

cH = b2d.CircleShape.prototype
cH.SLP = cH._sLP = function () {
	this.SetLocalPosition.apply(this, arguments)
	return this
}
cH.XY = cH.sLP = cH.lP = function (x, y) {
	return this.SLP(V(x, y).d())
}

$cH = function (rad, x, y) {
	rad = rad || 50
	var cH = new b2d.CS(rad / 30)
	if (N(x)) {
		cH.XY(x, y)
	}
	return cH
}

bH.vs = function () {
	return this.m_vertices
}

pH.oid = function () {
	return this.m_centroid
} //b2Vec2
pH.nos = function () {
	return this.m_normals
} //Array[4]?

//pH  m_type: 1

pH.n = pH.numVs = pH.vC = function () {
	return this.m_vertexCount
}
pH.SAOB = pH._box = function () {
	var pH = this
	pH.SetAsOrientedBox.apply(pH, arguments)
	return pH
}

//sAOB helps somewhat..
//1) the rt now specified in degreees
//2) center (as vec), now scaled to pixels
// 3) specify width and height, not half-width, half-height
//4) w/h also scaled to px,
// 5) you get defaults for zero rotation, zero location, and..
//    half-width, half-height (at 25)
pH.sAOB = function (hx, hy, cen, rt) {
	var pH = this
	rt = N(rt, 0)
	cen = cen || V(0, 0)
	hy = N(hy, 50) / 2  //beacuse half with/height
	hx = N(hx, 50) / 2
	var ang = M.tR(rt)
	pH.SAOB(hx / 30, hy / 30, cen.d(), ang)
	return pH
}
//  improved: center vec  able to take in numbers
pH.orBox = function (width, height, xOrV, y, rotation) {
	var g = G(arguments),
			o = {w: g.f, h: g.s}
	var ob = O(g.t) ?
	{x: g.t.x, y: g.t.y, r: g.fo} :
	{x: g.t, y: g.fo, r: g.fi}
	_.x(o, ob)
	var hx = o.w
	var hy = o.h
	var cen = V(o.x, o.y)
	var rt = o.r
	return this.sAOB(hx, hy, cen, rt)
}
// now has 3 sigs.. not just optionals (defaults)
// based on how MANY numbers you pass
// here are the sigs:
// w,h,x,y,rt
// w,h,rt
// rt (rare but cool to have for prototyping,
// for example: pH.oB(33) would default to 50,50,0,0,33
pH.oB = function (w, h, x, y, r) {
	var g = G(arguments), o
	gg = g.f
	o = g.O ? g.f :
			N(g.fo) ? {w: g.f, h: g.s, x: g.t, y: g.fo, rt: g.fi} :
					N(g.s) ? {w: g.f, h: g.s, rt: g.t} :
					{rt: g.f}
	return this.orBox(o.w, o.h, o.x, o.y, o.rt)
}
pH.box = function (o) { // tx uses!
	var pH = this, g = G(arguments), o
	o = g.O ? g.f :
			O(g.t) ? {w: g.f, h: g.s, x: g.t[0], y: g.t[1], rt: g.fo} :
				//			N(g.fo) ? {w: g.f, h: g.s, x: g.t, y: g.fo, rt: g.fi} :
			{w: g.f, h: g.s, rt: g.t}
	return pH.oB(o.w, o.h, o.x, o.y, o.rt)
}
pH.vs = pH.vsV = function () {
	var pH = this
	return _.m(pH.m_vertices, function (v) {
		v = v.m()
		v.x = $N(v.x.toFixed(0)) //-> parseInt
		v.y = $N(v.y.toFixed(0))
		return v
	})
}
pH.vsA = pH.pts = pH.vsArr = function () {
	var pH = this
	return _.m(pH.vs(), function (v) {
		return [v.x, v.y]
	})
}
function setAsArrVec() {
	pH.SAA = function () {
		var pH = this
		pH.SetAsArray.apply(pH, arguments)
		return pH
	}
	pH.arr = function (v) {
		var p = this
		v = _.m(v, function (v) {
			return V(v).d()
		})
		p.SAA(v, v.length)
		return p
	}
	pH.SAV = function () {
		var pH = this
		pH.SetAsVector.apply(pH, arguments)
		return pH
	}
	pH.asV = pH.setAsVec = function (v, sc) {
		sc = N(sc, 30)
		var pH = this //used by SepLib
		return pH.SAV(_.m(v, function (v) {
			return V(v).d(sc)
		}))
	}
};
setAsArrVec()
$pH = b2d.pH = function (W, H, x, y, a) {
	//makes a fixtDef with a polyShape
	//| 50,200[[,200,60,45
	//| [20,300],.. //-> g.a(p,'arr')// -> g.a(p.arr)
	var g = G(arguments)
	var pH = new b2d.PolygonShape()
	if (g.N_) {
		pH.box(g.f, g.s, g.t, g.fo, g.fi)
	} else if (g.OO_) {
		$a(pH, 'arr', g)
	}
	return pH
}
SAOB = function () {
	z()//W()
	pH = $pH()
	//pH.sAOB(30,200, V(0,0), 0)
	pH.oB(50, 50, 1000, 1000, 3)
	vsA = pH.vsA()
	$l(vsA)
}
//  b2Shape:  used for collision detection.  ( works even before shape in world) // CANNOT  reuse shapes.  has 2 Subclasses:	b2CircleShape, b2PolygonShape
//  GetType():int// Get the type of this shape. 
// You can use this to down cast to the concrete shape.
// Returns // int — the shape type.
//   Set(other:b2Shape):void//
// Assign the properties of anther shape to this
// other:b2Shape
bH.set = function (bod) {
	this.Set(bod);
	return this
}
//  Copy(): >> Cloned  shape
// ComputeMass(massData:b2MassData, density:Number):void// Compute the mass properties of this shape 
// using its dimensions and density. 
// The inertia tensor is computed about the local origin, not the centroid.
// massData:b2MassData — returns the mass data for this shape.// density:Number
bH.CAB = function (aabb, tf) {
	var bH = this
	bH.ComputeAABB(aabb, tf)
	return bH
}
bH.TP = function (tf, vec) {
	var bH = this
	return bH.TP(tf, vec)
}
bH.txP = function () {
	var bH = this, g = G(arguments), o
	o = N(g.s) ?  //g.N_? {vec:  V(g.f, g.s)}:
	{tf: g.f, vec: V(g.s, g.t)} :
	{tf: g.f, vec: g.s}
	return bH.TP(o.tf, o.vec.d())
}
bH.GT
bH.GetType
bH.C
bH.Copy
bH.AB = bH.CA = bH.CAB
bH.ComputeAABB
bH.CM
bH.ComputeMass
bH.TO = function (h, tf, h1, tf1) {
	return this.TestOverlap(h, tf, h1, tf1)
}
//  Possible return values for TestSegment:
// e_hitCollide  = 1, e_missCollide   = 0,
// e_startsInsideCollide  = -1 ( segment starting point, p1,   already inside shape)
bH.TP
bH.TestPoint
bH.RC
bH.RayCast
bH.TO
bH.TestOverlap
function submerged() {
	bH.CSA = function () {
		return this.ComputeSubmergedArea.apply(this, arguments)
	}
	bH.CSA(noVec, offsetNum, xf, cVec)//:Number
// Compute the volume and centroid of this shape intersected with a half plane
// ComputeSubmergedArea	()		 
// public function ComputeSubmergedArea(normal:b2Vec2,
// offset:Number, xf:b2Transform, c:b2Vec2):Number
// Parameters
// normal:b2Vec2 — the surface normal
// offset:Number — the surface offset along normal
// xf:b2Transform — the shape transform
// c:b2Vec2 — returns the centroid
// Returns// Number — the total volume less than offset along normal
}
//cH.GetRadius   // cH.SetRadius
pH.GNo = pH.GN = function () {
	return this.GetNormals()
}//:Vector  Get the edge normal vectors.


pH.GSV = function (vec) {return this.GetSupportVertex(vec)}
// GetSupport(d:b2Vec2):int //Get the supporting vertex index in the given direction.//>>b2Vec2

fD.H = function (h) {
	var fD = this
	if (U(h)) {
		return fD.shape
	}
	fD.shape = h
	return fD
}

$fD = b2d.fD = b2d.f = function () {
	var g = G(arguments)
	var fD = new b2d.FD
	if (g.n) {
		fD.isSensor = true
	}
	if (O(g.f)) {
		fD.shape = g.f
		if (g.s) {//only cir?
			fD.shape.XY(g.s, g.t)
			// do i want that to override?
			// i mean, shapes have their own XY that may 
			// have been already set by the client
			// alternative?  i could offset?
		}
	}
	return fD
}

$cF = $cir = $cFD = b2d._cir = b2d.cFD = function () {
	var g = G(arguments)//r,x,y
	var cH = $cH(g.f)
	var fD = $fD(cH, g.s, g.t)
	return fD
}

//= b2d.cH
//by default box2d allows ONLY MAX EIGHT VERTICES
//can change df val:  b2_maxPolygonVertices
b2d.cir = function () {
	var g = G(arguments)
	var o = G.boxCir(g)
	var cH = $cH(o.r, o.x, o.y)
	var fD = $fD(cH, g.o)
	fD.den(o.d)
	return fD
}

f.H = function (h) {
//should let user specify dimensions of shape, 
// not just have to pass formed shape in
	if (U(h)) {
		return this.GetShape()
	}
	this.m_shape = h
	// it DOES WORK! 
	return this
	// but is this much different than 
	// just replacing the fixt?
}
// m_radius: 0.005
// m_vertices: Array[4]
G.boxCir = function (g) {
	return $df.cF(g.O ? g.f : {x: g.f, y: g.s, r: g.t, d: g.fo})
}
b2d.tA = function (vs) {
	return _.m(vs, function (v) {
		return v.tA(v)
	})
}
$ba = $xyr = $xyR = function () {
	var b = w.dB(545, 195)
	b.A(fD = b2d.cFD(50).DBF())
	return b
}
fD.vrt = fD.verts = function () {
	var h = this.H()
	var vs = h.vs()
	return [vs[0].m(), vs[1].m(), vs[2].m(), vs[3].m()]
}
b2d.m = function (vs) {
	return _.m(vs, b2d.mult)
}
f.rad = function () {
	return this.H().m_radius * 30
}
b._r = function (n) {
	n = N(n, 100)
	h = this.f().H()
	if (h.SetRadius) h.SetRadius(n / 30)
}
f.cen = f.mid = f.cent = f.center = function () {
	//center point of its BOUNDING BOX
	var f = this, b = f.B(), w = b.W(), g = G(arguments),
			bd = f.GetAABB(),
			v = M.lC(bd.lowerBound, bd.upperBound).mult()
	if (g.p) {
		w.dot(v)
	}
	return v
}

//if you want to understand oriented boxes, understand this:
//http://www.box2dflash.org/docs/2.0.2/manual#Shapes
$rF = $rec = $pFD = $pF = function (wd, ht, x, y, rt) {
	var rec = $pH(wd, ht, x, y, rt)
	return $fD(rec)
}
fD.asBox = function (a, b) {
	this.shape.SetAsBox(a / 30, b / 30)
	return this
}
fD._sAOB = function (a, b, p, aa) {
	this.shape.SetAsOrientedBox(a, b, p, aa)
	return this
}
fD.asOrBox = function (a, b, p, aa) {
	return this._sAOB(a / 30, b / 30, p, aa)
}
fD.box = fD.sAB = function (a, b, p, A) {
	if (!p) {
		this.shape.SetAsBox(a / 30, b / 30)
	}
	else {
		this.shape.SetAsOrientedBox(a / 30, b / 30, p, A)
	}
	return this
}

b2d.pol = function () {
	return b2d.fD($a(b2d.pH, arguments))
			.d(1).fr(0).r(0)
}
b2d.rec = function () {
	var g = G(arguments), r, fD, o, v, p = b2d.pH()
	if (g.OO_) {
		p.arr(g)
	}  //b2d.cant make multiple recs at once anyway.. so this must mean VERTS!
	else {
		o = g.O ? g.f :
		{w: g.f, h: g.s, x: g.t, y: g[3], a: g[4], d: g[5]}
		p.box(o)
	}
	fD = b2d.fD(p).d(N(o.d, .5))
	if (g.n) {
		fD.isSensor = true
	}
	return fD
	/*
	 //will set cols unless you pass in 0
	 if(o.c==0){o.c=null}
	 if(o.c==00){o.c=null;o.C=null}
	 if(o.c=='*'){o.c=$r()}
	 if(o.c=='**'){o.c=$r();o.C=$r()}
	 o.c =o.c||'z'
	 o.C =o.C||'w'
	 o.l = _.tN(o.l,4)
	 o.c1 = o.c1||'z'
	 o.c2 = o.c2||'w'
	 o.s1= _.tN(o.s1)
	 o.s2= _.tN(o.s2,1)
	 //
	 o.x1 = _.tN(o.x1)
	 o.y1 = _.tN(o.y1)
	 o.x2 =_.tN(o.x2);
	 o.y2 = N(o.y2)?o.y2:N(o.r)? o.r*2:100
	 o.r1=_.tN(o.r1)
	 o.r2=_.tN(o.r2,200)
	 // o.i image
	 //o.k kind
	 // o.p  layer position
	
	
	 //o.bm//o.bM
	 //o.g gradient
	
	 //o.m mass
	 //o.t type
	 // o.v = o.v || [] //verts
	 //o.X
	 //o.z clr
	 */
}
$bi = $XYR = function () {
	var b = w.sB(545, 595)
	return b.A(b2d.cFD(150).DBF())
}
function fuk() {
	f.iC = f.isCir = function () {
		return this.H() && this.H().m_type == 0
	}
	f.xy = f.XY = f.pos = function () {
		var f = this;
		if (!f.isCir()) {
			return V(0, 0)
		}
		var h = f.H()
		return V(h.m_p.x, h.m_p.y).m()
	}
	f.x = f.X = f.pX = function () {
		return this.XY().x
	}
	f.y = f.Y = f.pY = function () {
		return this.XY().y
	}
	f.hT = f.hType = function () {
		return this.H() && this.H().m_type
	}
};
fuk()

function bFuk(){
b.rad = function () {
	return this.f().rad()
}
}
//body's mass
b.mass = function (m) {
	if (U(m)) {
		return ( this.GetMass() * 900 ) / 100
	}
}

//body's type
b.ty = b.type = b.T = b.t = function (a) {
	var b = this
	if (U(a)) {
		return b.GetType()
	}
	b.SetType(a)
	return b
}

