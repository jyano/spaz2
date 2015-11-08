gpc = gpcas
gpc.g = gpcas.geometry
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
pD.ePol = pS.ePol = pD.eI = pD.eIPol = pD.each = pD.e = function (fn) {
//this is great!!  it lets u look through all the inner polies of a complex (default) poly, a
//and run a  fn on them
// the function is passed the new poly, the index, and the total num of inner polies
	var pD = this
	var nIP = pD.nIP()
	_.t(nIP, function (n) {
		fn(pD.iPol(n), n, nIP)
	})
	return pD
}
pD.nPts = pS.nPts = pS.numPoints = pS.n = pS.num = pD.numPts = pD.numPoints = pD.n = pD.num = function getNumPoints() {
	return this.getNumPoints()
}
pS.A = ps.aPt = pD.A = pD.aPt = function (pts) {
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
pD.ePt = pS.vsArr = pD.vsArr = pS.ePt = pS.pts = pD.pts = pS.verts = pS.vs = pD.withVs = function (fn) {
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
function type() {
	ps.ty = ps.type = function () {
		return ('pS')
	}
	pD.ty = pD.type = function () {
		return ('pD')
	}
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
 
//
PolyDefault = gpcas.geometry.PolyDefault;
ArrayList = gpcas.util.ArrayList;
PolySimple = gpcas.geometry.PolySimple;
Clip = gpcas.geometry.Clip;
OperationType = gpcas.geometry.OperationType;
LmtTable = gpcas.geometry.LmtTable;
ScanBeamTreeEntries = gpcas.geometry.ScanBeamTreeEntries;
EdgeTable = gpcas.geometry.EdgeTable;
EdgeNode = gpcas.geometry.EdgeNode;
ScanBeamTree = gpcas.geometry.ScanBeamTree;
Rectangle = gpcas.geometry.Rectangle;
BundleState = gpcas.geometry.BundleState;
LmtNode = gpcas.geometry.LmtNode;
TopPolygonNode = gpcas.geometry.TopPolygonNode;
AetTree = gpcas.geometry.AetTree;
HState = gpcas.geometry.HState;
VertexType = gpcas.geometry.VertexType;
VertexNode = gpcas.geometry.VertexNode;
PolygonNode = gpcas.geometry.PolygonNode;
ItNodeTable = gpcas.geometry.ItNodeTable;
StNode = gpcas.geometry.StNode;
ItNode = gpcas.geometry.ItNode;
vs4 = [
	[131, 84], [224, 110], [174, 280], [120, 136], [60, 167],
]
cols2 = ['r', 'g', 'b', 'y']
col = "rgba(255, 0, 0, 0.1)"
cols = ["#91ab19", "#ab9119", "#e5ce35", "#ab1998"]
flatTri = [[400, 0], [800, 100], [120, 120]]
vs1 = [
	[61, 68],
	[145, 122],
	[186, 94],
	[224, 135],
	[204, 211],
	[105, 200],
	[141, 163],
	[48, 139],
	[74, 117]
];
vs2 = [
	[131, 84],
	[224, 110],
	[174, 180],
	[120, 136],
	[60, 167],
];
function verts() {
	$vs = {}
	$vs.expl = [[0, 100], [-100, 0], [0, -100], [100, 0]]
	$vs.witch = [[[-40, -20], [0, -100], [50, 25]]]
	$vs.CoolPlat = [['g', 50, 200], ['o', 200, 50], ['r', 100, 100]]
}