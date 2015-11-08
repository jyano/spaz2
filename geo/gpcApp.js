$L()

x.drawPolSimp = function (vs, sC, hole, ox, oy) {

	
	
	
	

	var x = this
	ox = N0(ox);
	oy = N0(oy)
	
	x.f( hole ? "z" : "rgba(50, 50, 50, 0.1)").s(sC).l(2)
	
	
	x.b().mt(vs[0][0] + ox, vs[0][1] + oy)
	
	x.lt(_.m(_.r(vs), function (v) {
		return [v[0] + ox, v[1] + oy]
	}))
	
	x.cp().s().f()
}
 
pD.eachInner=function(fn){
	var pD=this
	fn()
	return pD
}
 
draw = function (p, c, ox, oy) {
	$l('draw')
	ox = N(ox, 0)
	oy = N(oy, -30)
	c = c || 'B'
	
	eachInner(p, function (p_, i, p, n) {
	
		var col = i ? Cols[i % n] : c
		$l(' -isHole #' +i +': ' + p_.isHole())
		x.drawPolSimp(
		
				vsA(p_),
				
				col,
				
				p_.isHole(),
				ox, oy
				
		)
	})
	

}
 
//$l('n: '+n)//if more than one poly produced, use multiple color to display
GGG = function () {
	p1 = $pD(vs1);
	p2 = $pD(vs2)
	x = $.c('w', 400, 400).ctx();
	$(x.cv()).C('y')
	
	draw(p1);
	draw(p2, 'r')
	_.e(gpc.ops, function (op) {
		$.bt(op, function () {
			x.clearRect(0, 0, 400, 400);
			draw(p1);
			draw(p2, "z");
			
			draw( p1[op](p2), "b", 0, 150)
		})
	})

	
	p = p1.difference(p2)
	
	pp = p2.difference(p1)
}

function _pre() {
	_.ari = _.arialize = function (n, fn) {
		var vs = []
		_.t(n, function (i) {
			vs.push(fn(i, vs, n, fn))
		})
		return vs;
	}
	vsA = function (innerPol) {
		return _.ari(innerPol.getNumPoints(), function (i) {
			return [innerPol.getX(i), innerPol.getY(i)]
		})
	}
	eachInner = function (p, fn) {
		var n = p.getNumInnerPoly()
		_.t(n, function (i) {
			fn(p.getInnerPoly(i), i, p, n)
		})
	}
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
	
	vs3 = [
	 
		[190, 140],
		
		[170, 180],
		
		[160, 160] 
	]
	
	if(R()){
	vs2=vs3
	}
	
	Cols = ['r', 'g', 'o', 'B'];
	gpc.ops = ['difference', 'intersection', 'union', 'xor']
}

 