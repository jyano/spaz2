// *** cloning *****
// f._clone  for some reason will let you 'stamp' in a specified body
f.cloneTo = f._clone = f.cloneoOn = f.polif = f.polTo = function (b) {
// f.polTo will get the verts from its shape..
// conver it to an array of arrs,
// and it will polif the specified body with that vsA
// b.polEachF will take a different body..
// and it will polif that body with EACH if its fs
	var f = this
	if (f.isCir()) {
		var h = f.H()
		var x = h.m_p.x * 30
		var y = h.m_p.y * 30
		b.cir(h.rad(), x, y, $r())
	}
	else {
		b.pol({c: $r(), v: f.vs()})
		// alt??! b.pol( f.vsA() )
		// maybe both work???
	}
	return f
}
b.cloneTo = b._cloneTo = b.polif = b.polEachFTo = function (b1) {
	this.fs(function (f) {
		f.cloneTo(b1)
	})
	return b1
}
b.clone = b.cloneNew = b.pClone = b.polyClone = function (x, y, rt) {
	var b = this
	x = N(x, b.X())
	y = N(y, b.Y())
	rt = N(rt, b.rt())
	var ty = b.ty()
	//make a new body at the right 'transform' (copying this body)
	var b1 = w.D(x, y).ty(ty).rt(rt)
	//then.. for each of this body's fixtures....
	// stamp it 'on' that damn body
	// when u are done.. it will be just like you !!!
	return b.cloneTo(b1)
}
w.pol = function () {
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
		b.pol({v: g.t})
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
w.pol = function () {
	var w = this, g = G(arguments), o
	var v = V(g.f, g.s)
	var b = w.D(v.x, v.y)
	b.pol({v: g.t})
	return b
}
b.copy = function (x, y) {
	var b = this, w = b.W()
	return w.pol(x, y, b)
}

