 $L()
 
pD.vs = function (fn) {var pD = this, g = G(arguments), o
	o= g.F ? {fn: g.f} : {n: g.f, fn: g.s}
	vs = g.n ? b2d.sub(pD.pts(), o.n) :
			g.p ? b2d.add(pD.pts(), o.n) :
					pD.pts()
					
	if (o.fn) {_.e(vs, o.fn); return pD }
	return vs
	//pD.points =//used in MEET	
}
pD.wV=pS.wV = pS.tlNeg = pS.reg = pS.toRelativePoints = pS.mapToBoxWorld = function (b) {
	var p = this, g = G(arguments), o
	var vs = p.vs(), b
	//you can pass in the verts,
	// or the gPoly itself!                 //what about a f?
	o = V(g.f, g.s)
	return M.p(vs = _.m(vs, function (v) {
		return V(v).sub(o.x, o.y)
	}))
}
 
 f._vs = function () {
	 var f = this
	 var h = f.H()
	 vs = h.m_vertices
	 return _.m(vs, b2d.m)
 }
 
 f.vs = function () {var f = this, b = f.B(), g = G(arguments)
	 /*
	  b2d.tA source :
	  function(vs) {
	  return _.m(vs, function (v) { return [v.x, v.y]  })
	  }
	
	  v.tA:function () { return [v.x, v.y] }
	  */
	 return b2d.tA(_.m(f._vs(), function (v) {
				 return g.n ? v : v.rt(b.rt())
	 }))
	 
 }//f.points = f.verts = f.vertices =

 
 f.vsA = function () {
	 var f = this
	 return _.m(f.vs(), function (v) {
		 v=V(v)
		 return [v.x, v.y]
	 })
 } 
 f.wV = function () {
	var f = this, b = f.B()
	return b2d.tA(b2d.add(
			f.vs(), V(b.X(), b.Y())
	))
}
 FVS=function(){W()
 
	 b= w.D(300,300,'r', [[80, 40, 0,0,3]])
 
	 f= b.f()
	 //f1 = b.cir(20)
  
	 f.vs()
 }
 f.tGP = f.gPolyWorldVerts =function () {
	return $pD(this.wV())
}
b.points = b.ps = function (fn) {
	var b = this
	var arr = []
	var pD = b.uni()
	if (F(fn)) {
		pD.ePol(fn);
		return b
	}
	return pD.pts()
}

b.wV =b.vs  =  function () {
	return this.pD().vs()
}//= b.gPolyVerts
 
 b.rtVs = b.rV =function () {$l('b.rV')
	var b = this, r = M.tR(b.rt()), vs, r, x, y
	vs = _.m(b.vs(), function (v) {
		v = V(v)
		x = v.x * M.c(r) - v.y * M.s(r) + b.X()
		y = v.x * M.s(r) + v.y * M.c(r) + b.Y()
		return V(x, y)
	})
	return vs
	//this returns [V,V,V...]
} //b.vs????
//b.fsGp   fsToGPol...
// for each of my fxs, 
// turn them into gP's
// and then aggregate them all
// by unioning each reductively
// so it gets bigger and bigger..


function _pre(){
	b2d.divPoints = b2d.divPts = b2d.vs = function () {
		var g = G(arguments)
		//all this does is to 'scale down' a series of points
		//can pass in pts naked OR in an array
		return _.m(
				g.s ? g : //passed in verts ([],[],[])
						g.f,
				b2d.div
		) //passed an array [[],[],[]]
		//b2d.div <- function div(v){return V(v).div()}	
	}}
 alpha = function () {
	 b2d.recVerts = b2d.recPoints = b2d.recPts = b2d.recV = function (x, y, w, h) {
		 var hW = w / 2, hH = h / 2
		 return [[x - hW, y - hH], [x + hW, y - hH],
			 [x + hW, y + hH], [x - hW, y + hH]]
	 }
	 f.polyDotWorVerts = f.dots = function () {
		 var f = this;
		 b2d.pD = b2d.polyDot = function (vs) {
			 var t = 0
			 vs = A(vs) ? vs : vs.wV
			 w.dot('g', V(_.f(vs)))
			 _.e(vs,
					 function (v) {
						 $.in(t, function () {
							 w.dot(V(v))
						 }, t)
						 t += .1
					 }
			 )
			 w.dot('r', V(_.l(vs)))
		 }
		 b2d.polyDot(f.wV())
		 return f
	 }
	 f.area = f.A = function () {
		 return M.p(this).getArea()
	 }
 }
 
 /*
 source:

  b.pD = function () {
  var b = this, f = b.f(), g = G(arguments), pD = $pD()
  if (!f) { return pD  }
  // if the body has no freqkin fixts.. 
  // if its an infant body , massless? fixtureless
  pD = M.p(f)
  _.eR(b.fs(), function (f) {
  pD = pD.U(f)
  })
  return pD
  }
  
  */
 M.p = b2d.gpcPD = function () {
	 //it expects worldVerts....
//it works with worldVerts...
//it was designed   with
//that in
//mind
	 var g = G(arguments), p, b, fs, vs
	 if (b2d.iGP(g.f)) {
		 return g.f
	 }
	 if (b2d.iB(g.f)) {
		 vs = g.f.wV()
		 _.eR(g.f.fs(), function (v) {
			 vs = vs.uni(v)
		 })
	 }
	 else {
		 vs = b2d.iF(g.f) ? g.f.wV() :
				 g.f
	 }
	 return $pD(vs)
 }