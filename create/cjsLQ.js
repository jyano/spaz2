q = cjs.LoadQueue.prototype
q.m = q.mf = q.manifest = function () {
	// q.m:
// protosig:
// 'me',..
// {src:'me', id:'him'},..
// [ {src:*, id:*}, 'me',.. ]
	
	var g = G(arguments)
	
	if (g.u) {return this}
	
	var mf = _.m(g.A ? g.f : 
	g, function (i) {
		return S(i) ? 
		{src: _.src(i), id: i} :
		 i
	})
	
	
	this.loadManifest(mf)
	return this
}

q.c = q.complete = function (fn) {
	var q = this
	if (F(fn)) {
		q.on("complete", fn)
	}
	return q
}
q.dfF = cjs.handleFileLoad = function (e) {
	if (e.item.type == "image") {
		images[e.item.id] = e.result
	}
}
q.f = q.l = q.fl =q.fileload = function (fn) {
	var q = this
	q.on("fileload", fn)
	return q
}
q.i = q.r = function (i) {
	i = this.getResult(i);
	i.w = i.width;
	i.h = i.height;
	return i
}
q.$ = function (i) {
	return $(this.i(i))
}
q.b = q.bm = function (i, ct, x, y) {
	var bm = $Bm(this.i(i));
	if (ct) {
		bm.a2(ct, x, y)
	}
	;
	return bm
}

_MF = ['me', 'guy', 'chicks', 'sun', 'flame', 'earth']



Q=function(){var g=G(arguments),
		o= g.A_ || g.S_ ? {m: g.f, c: g.s, f: g.t} :
				g.F_? {c:g.f, f: g.s}:
						g.f
						
	o.m = o.m || _MF
	
	Q = (new cjs.LoadQueue)
	Q.ran=true
	if (o.f) {Q.f(o.f)}
	if (o.c) {
		Q.c(function (e) {
			o.c(function qFn(i) {
			return Q.i(i)}, e)
		})
	}
	
	
	if(o.m){Q.m(o.m)}
	
	return Q
}; Q.ran=false



//starts off as a fn (obviously)
//but ends up as an obj
// (can use his info to test if its been ran)
WQ = function () {
	alert('WQ')
	var g = G(arguments), o = F(g.t) ?
	{ob: g.f, fn0: g.s, fn: g.t} :
	{ob: g.f, fn: g.s}
	o.ob = o.ob || {}
	o.fn = o.fn || function (w) {}
	w = W(o.ob)
	if (o.fn0) {o.fn0(w)}
	Q(o.ob.I || _MF, function () {
		o.fn(w)
	})//
}