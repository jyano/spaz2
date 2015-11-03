$load()
ps.getPoly=ps.gIP = ps.g = function (n) {
	return this.getInnerPoly(n || 0)
}//GETS ITSELF? //useless?
ps.numInnerPolygons = ps.numPolys = ps.nP = getNumInnerPoly //WILL ALWAYS RETURN 1.. useless
ps.iH = function () {
	return this.isHole()
} //can't be!!! useless
/////

ps.x= ps.gX = getX; 
ps.y= ps.gY = getY

ps.A = ps.aPt =   addPoints
ps.verts=ps.vs= function(){var p=this,vs=[]
    _.t(p.n(), function(i){
	    vs.push([p.x(i), p.y(i)])
    })
    return vs
}
ps.numPoints = ps.n = ps.num = getNumPoints
ps.type=ps.ty=function(){return ('pS')}
pD.type=pD.ty=function(){return ('pD')}
////
pD.x= pD.gX = getX;//used?redundant?
pD.y =pD.gY = getY//redundant reduant (ref:above) was a joke
pD.getPoly=pD.gIP = pD.g = function (n) {return this.getInnerPoly(n || 0)}
pD.numPolys= pD.nP = getNumInnerPoly
pD.numPts = pD.numPoints=pD.n = pD.num = getNumPoints
pD.A = pD.aPt = addPoints
pD.iH = function () {
	return this.isHole()
}
pD.hH=pD.hasHole= function(){var pD=this,  h
    pD.ps(function(p){if(p.isHole()){h=true}})
    return h
}
pD.eachPolys = pD.each=pD.e = function (fn) {

//this is great!!  it lets u look through all the inner polies of a complex (default) poly, a
//and run a  fn on them
// the function is passed the new poly, the index, and the total num of inner polies
	var pD = this, n = pD.nP()
	_.t(n, function (i) {
		var p = pD.gIP(i)
		fn(p, i, n)
	})
	return pD
}
pD.I = pD.intersection
pD.X = pD.xor
pD.U=function(p){var pD = this, g = G(arguments)
	g.e(function (pol) {
		pD = pD.union( gpc.p(pol) )
	})
	
	return pD
}
pD.D = function () {var pD = this, 
	g = G(arguments)
	g.e(function (pol) {
		pD = pD.difference( gpc.p(pol) )
	})
	return pD
}
$pD= gpc.pD= gpc.p = function(pts){

//make new polyDefault
//can add points to it

	if( gpc.iP(pts) ) {return pts}
	
	//if (S(pts)){ pts = $vs[pts] }
	
	//ok so if it is already a gPoly, just return it..
//but if not (it is points).. so make a new gPoly (default) and return it
	var p = new gpc.geometry.PolyDefault
	
	if(pts) {p.A(pts) }
	
	return p

}

function getY(i) {
	return this.getY(i)
}
function getX(i) {
	return this.getX(i)
}
function addPoints(pts) {
	var p = this
	pts = A(pts) ? pts : [pts]
	_.e(pts, function (pt) {
		p.addPoint(V(pt))
	})
	return p
}
function getNumPoints() {
	return this.getNumPoints()
}
function getNumInnerPoly() {
	var pD = this, n
	n = pD.getNumInnerPoly()
	return n
}

function _pre(){
	gpc = gpcas
	gpc.g = gpcas.geometry
	ps = gpc.g.PolySimple.prototype
	pD = gpc.g.PolyDefault.prototype
	gpc.iP = function (a) {
		return O(a) && F(a.isHole)
	}
}