b._pol=function(v,c,i){

	var b=this,
	newFs,spr
	
	newFs = b.sepNew( v, withF)
	if (i) {
		spr= w.gx.h()
		spr.bV({v: v})
		b.bS(spr)
	}
	return newFs
	
	function withF(f) {
		f.c(c||'x')
		if (o.lf) {f.bS(w.st.h().lf(o).lt(o.v))}
		if (o.rf) {f.bS(w.st.h().rf(o).lt(o.v))}
	}
}



b.pol = function () {var b = this, w = b.W(), g = G(arguments), o
	var newFs
	if (g.u) {return b}
	
	
	if (b2d.iB(g.f)) {
		g.f.fs(b);
		return b
	}
	 
	//if passed [[ color and ]] verts:
	o = S(g.f) && gpc.iP(g.s) ? {c: g.f, v: g.s} :
	
			gpc.iP(g.f) ? {v: g.f} :
			
				b2d.iF(g.f) ? {v: g.f.vs()} :
					// pass in  [[],[],[]]   or  ['r',[],[],[]]
						g.A && S(g.f[0]) ? {c: g.f[0], v: _.r(g.f)} : g.A ? {v: g.f} :
								
								g.O ? g.f : g.O_ ? {v: g} : //pass in [],[]
										g.t ? {c: g.f, v: g.r} : // pass in 'r', [], []
										
										{c: g.f, v: g.s}   //pass in  {c:'r', v:[[],[],[]]}
	
	
	_oo= o
	
	
	$df.h(o)
	
	o.i = o.i || o.bf
	//$l('check _o');
	 _o = o
	newFs = b.sepNew(o.v, function (f) {
		f.set(o)
		f.c(o.c, o.C, o.l)
		if (o.lf) {f.bS(w.st.h().lf(o).lt(o.v))}
		if (o.rf) {f.bS(w.st.h().rf(o).lt(o.v))}
	})
	
	if (o.i) {
	
		__h = w.gx.h().bV(o)
		b.bS(__h)
	}
	return newFs
	
}







b.sep = function (verts, scale) {
	var body = this
	if (!O(verts)) {
		alert('o.v must be object');
		return
	}
	if (gpc.iP(verts)) {
		verts = verts.vs()
	}
	//needs array of verts.. or one vert (which is converted here to arr)
	_.e(O(verts[0][0]) ? verts : [verts], function (v) {
		b2d.sep(body, v, scale)
	})  //  'sep' each of the verts onto the body
	return this
}
b.sepNew = function (vs, fn) {
	//this proxies to b.sep.. but has two advantages
	//- it returns NEW fixtures formed in an array
	//- if u pass in a function, then it loops those fxs
	// //alt:if only one fixture added.. it is returned as a single fixture (not in array) ?
	var n = this.n(),
			b = this.sep(vs),
			numNewFs = b.n() - n,
			newFs = _.f(b.fs(), numNewFs)
	if (F(fn)) {
		_.e(newFs, fn)
	}
	return newFs
	//return newFs[1]? newFs: newFs[0]
}
w.pol = function () {
	alert('-- w.pol --');
	var w = this, g = G(arguments), b, o
	if (g.A) {
		$l('w.pol g.A')
		return $a(w, 'pol', g.f)
	}
	if (g.OO) {
		$l('w.pol g.OO')
		g.e(function (g) {
			w.pol(g)
		})
		return w
	}
	// if(g.N_ && N(g.s) && O(g.t) &&U(g[3])){return w.D(g.f,g.s).pol(g.t)}
	if (g.N_ && N(g.s) && O(g.t)) {
		$l('w.pol g.N_ && N(g.s) && O(g.t)')
		b = w.D(g.f, g.s) // if(iB(g[2])){ g[2]= g[2].wV()} //M.p(g[2]).vs()
		_.e(g.t, function (p) {
			b.pol({v: p})
		})
		return g.m ? M.p(b) : b
	}
	$l('w.pol !(  g.N_ && N(g.s) && O(g.t)) ')
	o = g.O ? g.f :
			N(g.f) ? {x: g.f, y: g.s, p: g.t}
					: {p: g.f}
	o.x = N(o.x, w.hW)
	o.y = N(o.y, w.hH)
	o.p = M.p(o.p)
	b = w.D(o.x, o.y)
	if (!g.p) {
		$l('!g.p')
		if (b2d.iB(o.p)) {
			$l('w.pol b2d.iB(o.p)')
			o.p = M.p(o.p)
		}
		else {
			$l('w.pol ! (b2d.iB(o.p))')
		}
		_p = o.p
		$l('pre b')
		b.pol(o.p)
		$l('post b')
		if (g.m) {
			$l('g.m')
			b = M.p(b)
		}
		else {
			$l('!g.m')
		}
		return b
	}
	if (o.rg) {
		$l('o.rg')
		o.p.ps(o.rg, function (p) {
			b.pol(o)
		})
	}
	else {
		$l('!o.rg')
		o.p.ps(function (p) {
			b.pol(o)
		})
	}
	return b.f()
}


BPL = function () {
	W()
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
	]
	
	
	w.D(200, 200).pol(vs1) 
}


 
BPOL = function () {W()
	
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
	]
	
	w.D(200, 400).pol(vs1)
	w.D(800, 400).pol($pD(vs1))
	w.D(800, 400).pol('o', $pD(vs1))
	w.D(500, 400).pol({vs: vs1, c: 'r'})
	w.D(800, 400).pol({vs: $pD(vs1), c: 'b'})

}





