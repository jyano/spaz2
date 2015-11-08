f._of=function(k){var f=this,b=this.B(), res
	if(O(k)){return f==k}
	if( S(k) ){
		k= k.trim()
		f._K = f._K || []
		if(_.ct(f._K, k)){return true}
	}
	return b.of(k)
}//new, not yet used
f.has = function(k){ return !k || _.ct(this._K || [], k.trim()) }//not used, new
f.got = f.mat= f.matches= function(k){return k && this.has(k)}//not used, new
f.of = function (k) {var f=this,b= f.B()//if (!f) {return false}
	if (!k) {return true}
	return f == k || (S(k) && f.has(k)) ||  b.of(k)
}
f.is = function (k) {
	return k && this.of(k)
} //if(g.A){_.e(g.f, function(k){f.K(k)}); return f}
f.aK=function(k){var f=this
	f._K = f._K || []
	if (S(k) && !f.of(k)) {f._K.push(k)}
	return f
}
f.gK=function(){
	var f=this
	f._K = f._K || []
	return f._K.join(' ')
}
_.eW = function (str, fn) { //meach(in a string) With
	var arr = _.compact(_.m(str.trim().split(' '),
			function (str) {
				return str.trim()
			}))
	if (fn) {
		_.e(arr, function (str) {
			fn(str)
		})
	}
	return arr
}

f.K = function () {var f = this, g = G(arguments);
	f._K = f._K || []
	if (g.u) { return f.gK() }
	if (g.O && g.f.k){ f.aK( g.f.k )}
	else if (g.S_){
		_.eW(g.f, function (k) {
			f.aK(k)
		})}
	return f
 
}
b.of = function (k) {
	if (b2d.iF(k)) {
		k = k.B()
	}
	return !k || _.ct(this._K, k) || this == k
}
b.is = function (k) {
	return k && this.of(k)
}
b.K = function () {
	var b = this, g = G(arguments);
	this._K = this._K || []
	if (g.u) {
		return this._K.join(' ')
	}
	if (g.O) {
		this.K(g.f.k);
		return this
	}
	_.eW(g.f, function (k) {
		if (!b.of(k)) {
			b._K.push(k)
		}
	})
	return this
}
fD.D = fD.data = function (data) {
	if (U(data)) {
		return this.userData
	}
	this.userData = data;
	return this
}
fD.K = function (k) {
	var fD = this
	if (U(clas)) {
		return fD.getClass()
	}
	fD.classes = fD.classes || []
	fD.classes.push(clas)
	return fD
}
fD.getClasses = fD.getClass = function () {
	var g = G(arguments), fD = this, classes
	fD._K = fD._K || []
	ks = fD.classes.join(' ')
	if (g.p) {
		ks += ' : ' + fD.body().getClasses()
	}
	return ks
}
