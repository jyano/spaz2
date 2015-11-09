b.sep = function (vs, scl) {
	var b = this
	if (!O(vs)) {
		//	alert('o.v must be object');
		return
	}
	if (gpc.iP(vs)) {
		vs = vs.vs()
	}
	//needs array of vs.. or one vert (which is converted here to arr)
	_.e(O(vs[0][0]) ? vs : [vs], function (v) {
		b2d.sep(b, v, scl)
	})  //  'sep' each of the vs onto the b
	
	
	return b
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
