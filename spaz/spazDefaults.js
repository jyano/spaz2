cirDfs = function (o) {
	o = o || {}
	//with object...
	o.al = N(o.al, 1)
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.r = N(o.r, 50)
	o.b = N(o.b, .5)
	o.f = N(o.f, .5)
	o.d = N(o.d, .5)
	o.s = D(o.s) ? o.s : 0;
	return o
}
 