gpc = gpcas
gpc.g = gpcas.geometry
PolyDefault = gpc.g.PolyDefault;
ArrayList = gpc.util.ArrayList;
PolySimple = gpc.g.PolySimple;
Clip = gpc.g.Clip;
OperationType = gpc.g.OperationType;
LmtTable = gpc.g.LmtTable;
ScanBeamTreeEntries = gpc.g.ScanBeamTreeEntries;
EdgeTable = gpc.g.EdgeTable;
EdgeNode = gpc.g.EdgeNode;
ScanBeamTree = gpc.g.ScanBeamTree;
Rectangle = gpc.g.Rectangle;
BundleState = gpc.g.BundleState;
LmtNode = gpc.g.LmtNode;
TopPolygonNode = gpc.g.TopPolygonNode;
AetTree = gpc.g.AetTree;
HState = gpc.g.HState;
VertexType = gpc.g.VertexType;
VertexNode = gpc.g.VertexNode;
PolygonNode = gpc.g.PolygonNode;
ItNodeTable = gpc.g.ItNodeTable;
StNode = gpc.g.StNode;
ItNode = gpc.g.ItNode;
gpc.PS = gpc.g.PolySimple
gpc.PD = gpc.g.PolyDefault
pS = ps = gpc.PS.prototype
pD = gpc.PD.prototype

$L('type', 'hole', 'points', 'xy', 'ops')
pD.nPol = pS.nPol = pD.nIP = pS.nIP = ps.numInnerPolygons = ps.numPolys = ps.nP = pD.numPolys = pD.nP = function getNumInnerPoly() {
	return this.getNumInnerPoly()
}
gpc.isPol = gpc.iP = function (a) {
	return O(a) && F(a.isHole)
}
pD.iPol = pD.iP = pD.getPoly = pD.gIP = pD.g = function (n) {
	return this.getInnerPoly(n || 0)
}
pD.polies = pD.ePol = pS.ePol = pD.eIPol = pD.each = pD.e = pD.eP = function (fn) {
	var pD = this,
			polys = []
	_.t(pD.nIP(), function (pol) {
		polys.push(pD.g(pol))
	})
	if (F(fn)) {
		_.e(polys, fn);
		return pD
	}//_.t(pD.nIP(), function (i) {fn(pD.g(i), pD, i)})
	//_.t(pD.nIP(), function (n) {fn(pD.iPol(n), n, nIP)})
	return polys
}
pD.ePt = pS.vsArr = pD.vsArr = pS.ePt = pS.pts = pD.pts = pS.vs = pS.pts = pS.vs = function (fn) {
	var pS = this
	var vs = []
	_.t(pS.nPts(), function (pt) {
		vs.push(pS.pt(pt))
	})
	if (F(fn)) {
		_.e(vs, function (v, i) {
			fn(v, i, vs)
		});
		return pS
	}
	return vs
}
pD.nPts = pS.nPts = pS.n = pD.n = function getNumPoints() {
	return this.getNumPoints()
}
pS.A = pD.A = ps.aPt = pD.aPt = function (pts) {
	var pS = this
	pts = A(pts) ? pts : [pts]
	_.e(pts, function (pt) {
		pS.addPoint(V(pt))
	})
	return pS
}
pS.x = ps.gX = pD.x = pD.gX = function getX(i) {
	return this.getX(i)
}//used?redundant?
pS.y = ps.gY = pD.y = pD.gY = function getY(i) {
	return this.getY(i)
}//redundant reduant (ref:above) was a joke
pS.pt = pD.pt = function (i) {
	var pS = this
	return [pS.gX(i), pS.gY(i)]
}
function type() {
	ps.ty = ps.type = function () {
		return ('pS')}
	pD.ty = pD.type = function () {
		return ('pD')
	}
	gpc.iD = function (pol) {
		return gpc.isPol(pol) && pol.ty == 'pD'
	}

	gpc.iS= function(pol){return gpc.isPol(pol) && pol.ty=='pS'}
}
function ops() {
	pD.U = function (p) {
		var pD = this, g = G(arguments)
		g.e(function (pol) {
			pD = pD.union(gpc.p(pol))
		})
		return pD
	}
	pD.D = function () {
		var pD = this,
				g = G(arguments)
		g.e(function (pol) {
			pD = pD.difference(gpc.p(pol))
		})
		return pD
	}
	pD.I = pD.intersection
	pD.X = pD.xor
}
function hole() {
	ps.iHo = ps.iH = function () {
		return this.isHole()
	} //can't be!!! useless
	pD.iHo = pD.iH = function () {
		return this.isHole()
	}
	pD.hH = pD.hasHole = function () {
		var pD = this, h
		pD.ps(function (p) {
			if (p.isHole()) {
				h = true
			}
		})
		return h
	}
}
function useless() {
	ps.getPoly = ps.gIP = ps.g = function (n) {
		return this.getInnerPoly(n || 0)
		//GETS ITSELF? //useless?
	}
}


 

pD.hasAtLeastOnePoly = function () {
	return this.m_List.get(0)
}
 
$pD = gpc.pD = gpc.p = function (pts) {
	
	//make new polyDefault
	//can add points to it
	if (gpc.isPol(pts)) {
		return pts
	}
	//if (S(pts)){ pts = $vs[pts] }
	//ok so if it is already a gPoly, just return it..
//but if not (it is points).. so make a new gPoly (default) and return it
	var pD = new gpc.PD
	return pts ? pD.A(pts) : pD
}
pD._dif = function (pol) {
	return this.difference(pol)
}
pD.dif = function (pol) {
	return this._dif( $pD(pol) )
}
extra()
function extra(){
	pD.ifHasPol = function () {
		var pD = this
		if (pD.hasAtLeastOnePoly()) {
			return pD
		}
	}
	pD.bigEnough = function () {
		return this.getArea() > 2000
	}
	pD.tooSmall = function () {
		return !this.bigEnough()
	}
}