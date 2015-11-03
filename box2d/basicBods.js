w.CBd = w.CB = w.cB = function (bD) {
	var b = this.CreateBody(bD)
	return b
}

$bD = function (x, y) {
	var v, bD
	v = V(x, y)
	bD = new b2BodyDef()
	bD.XY(
			N(v.x, 0),
			N(v.y, 0)
	)
 
	return bD.dyn()
}

$dBD =   b2d.bD =   b2d.dBD =  function (x, y) {
	var v, bD
	v = V(x, y)
	
	bD = new b2BodyDef()
	
	bD.XY(
	
			N(v.x, 0),
			N(v.y, 0)
	)
	
	bD.dyn()
	
	return bD
}
$sBD = b2d.S = b2d.sB = b2d.stat = function (x, y) {
	return $dBD(x, y).stat()
}
$kBD = b2d.kD = function (x, y) {
	return $dBD(x, y).T(1)
}



w.dB = function (x, y) {
	return this.CB( $dBD(x, y) )
}

w.sB = function (x, y) {
	return this.CBd( $sBD(x, y))
}

w.kB = function (x, y) {
	return this.CBd($kBD(x, y))
}
w.rmB= w.removeBod = w.xB = w.Xx = w.Xb = function (b) {
	var w = this
	if (U(b)) {w.e(function (b) { w.rmB(b) }) }
	else { w.DestroyBody(b) }
	return w
}

BOX1 = function () {
	c = $.c('y', 1800, 1500)
	x = c.ctx()
	$.i('me', function (i) {
		x.drawImage(i, 0, 0)
	})
	
	var DD = b2DebugDraw; //dbD=  //	dbD.SetSprite(x); //  dbD.SetDrawScale(30); //	dbD.SetLineThickness(20) //	dbD.SetFillAlpha(1)// dbD.flag( b2DebugDraw.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit )
	
	
	w = $bW().sDD( $dD(x, 30) )
	
	//.fl( b2DebugDraw.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit )
	
	
	$bi()
	
	b = $ba()
	$l(w.numBods())
	T.t(function () {
	
		w.DrawDebugData()
		w.step(1 / 20, 10, 8)
		ps = b.GetPosition()
		//$l(ps.x * 30 + ', ' + ps.y * 30)
	
	})
}
BOX = function () {
	w = $bW().sDD($dD($.c('z', 1800, 1500)))
	_.ev(.1, function () { w.go(1 / 5, '+') })
	$bi()
	_.ev(2, function () {$ba() })
	$l('bodyCOunt:' + w.numBods())
}
 
 