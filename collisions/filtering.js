f.getFiltData=f.fil = f.fl = f.flDa = function () {
	var f = this, g = G(arguments)
	if (g.u) {
		return f.GetFilterData()
	}
	
	f.SetFilterData(g.f);
	return f
}
f.catBit=f.cat = function () {
	var f = this, g = G(arguments),
			flDa = f.flDa()
	if (g.u) {
		return flDa.categoryBits
	}
	flDa.categoryBits = g.f;
	f.flDa(flDa);
	return f
}
f.mskBit=f.msk = function (msk) {var f = this, g = G(arguments),
			flDa = f.flDa(), num//f.msk: pass it a single number, pass it an array of numbers and it will add them up for you
	if (g.u) {return flDa.maskBits}
	if (A(g.f)) {num = 0
		_.e(g.f, function (bits) {num += bits})
		g.f = num
	}
	flDa.maskBits = g.f
	f.flDa(flDa)
	return f
}
b.cat = function () {var b = this, g = G(arguments);
	if (g.u) {return b}
	b.fs(function (f) {f.cat(g.f)});
	return b
}
b.msk = function () {var b = this, g = G(arguments);
	b.fs(function (f) {f.msk(g.f)})
	return b
}
f.bit = function (cat, msk) {
	if (N(cat)) {this.cat(cat)}
	if (N(msk) || A(msk)) {this.msk(msk)}
	return this
}
b.bit = function (cat, msk) {
	if (N(cat)) {this.cat(cat)}
	if (N(msk) || A(msk)) {this.msk(msk)}
	return this
}
flDa.groupIX= flDa.grp = flDa.g = function (grp) {
	var flDa = this
	if (U(grp)) {
		return flDa.groupIndex
	}
	flDa.groupIndex = grp
	return flDa
}
f.groupIx=f.grp = function (grpIx) {
	var f = this, fl = f.GetFilterData()
	if (U(grpIx)) {
		return fl.groupIndex
	}
	fl.groupIndex = grpIx
	f.SetFilterData(fl)
	return f
	//get/set for groupIndex
}
fd.groupIx= fd.grp = fd.group = fd.index = fd.gI = function (a) {
	if (U(a)) {
		return this.filter.groupIndex
	}
	this.filter.groupIndex = a;
	return this
}
f.groupIx = f.grp = function (i) {
	var f = this, fl = f.fl()
	if (U(i)) {
		return fl.groupIndex
	}
	fl.groupIndex = i
	return this.fl(fl)
}
b.groupIX=b.grp = function (i) {

	if (U(i)) {
		return this.f().grp()
	}
	
	
	
	
	this.fs(function (f) {
		f.grp(i)
	})
	return this

}
b.groupIx=b.grp = function (grp) {

	var b = this
	 
	b.fs(function (f) {
		f.grp(grp)
	})
	
	return b

}
w.setContactFilt=w.cxFl = w.sCF = function () {
	var w = this, g = G(arguments)
	w.SetContactFilter.apply(w, g)
}

CAT = function () {
	W([800, 800], {g: 50}).C('z')
	//g=  w.D(600,600,'g',183,183).f().bit(4, [1,2] );
	// b=  w.D(600,600,'b',100).f().bit(2, [1,4] )
	w.t_.bit(1, [8])
	w.D(600, 200, 'w', 180).bit(1, [1]).r(.5)
	w.D(400, 0, 'g', 100).bit(2, [1, 2, 4, 8]).r(.8)
	w.D(300, 0, 'g', 183, 183).bit(2, [1, 2, 4, 8]).r(.8)
	_.t(38, function () {
		w.D(R(1100, 100), R(300, -2500), 'w', 20).bit(1, [1])
	})
	y = w.y(100, 100).rt(40).bit(8, [1, 2, 4])
/////////////////
	//together, same with walls
	// w.D(300,300,'o',183,183)//.grp(-3)
	// w.D(300,600,'o',100).cat(2)//.grp(-3)
	//w.D(600,600,'u',150).r(1).I(100,0).cat(0)
	//w.D(600,600,'b',80).bit(2,[1,4])
	//w.D(600,600,'p',60,90).bit(4,[1,2,4])
	// w.D(600,600,'r',183,183).bit(4,[1,2,4])
}
ROOM3D = BOUNCELAY = function () {
	W([800, 800], {g: 50}).C('z')
	//g=  w.D(600,600,'g',183,183).f().bit(4, [1,2] );
	// b=  w.D(600,600,'b',100).f().bit(2, [1,4] )
	w.t_.bit(1, [8])
	w.D(600, 200, 'w', 180).bit(1, [1]).r(.5)
	w.D(400, 0, 'g', 100).bit(2, [1, 2, 4, 8]).r(.8)
	w.D(300, 0, 'g', 183, 183).bit(2, [1, 2, 4, 8]).r(.8)
	_.t(38, function () {
		w.D(R(1100, 100), R(300, -2500), 'w', 20).bit(1, [1])
	})
	y = w.y(100, 100).rt(40).bit(8, [1, 2, 4])
/////////////////
	//together, same with walls
	// w.D(300,300,'o',183,183)//.grp(-3)
	// w.D(300,600,'o',100).cat(2)//.grp(-3)
	//w.D(600,600,'u',150).r(1).I(100,0).cat(0)
	//w.D(600,600,'b',80).bit(2,[1,4])
	//w.D(600,600,'p',60,90).bit(4,[1,2,4])
	// w.D(600,600,'r',183,183).bit(4,[1,2,4])
}