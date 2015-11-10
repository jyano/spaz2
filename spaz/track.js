//i can leave the world-centering in fw
// can optionally filter it with scale itself
//  has limits now!  and more..
// tis is the ultimate!

w._track = function (t, cX, cY) {var w = this

	//run pre-scroll hook cb's

	if ( F(w.t.cb) ) { w.t.cb() }
	
	if ( w.track.cb && F(w.track.cb) ) {w.track.cb()}

	
	// if the designated trackee optionally has its own cb,
	// that over rules the (also optional) 'w.track.cb' cb
	
	w.sX(w.z * w.hW + w.z * ( t.X() - cX) - w.hW)
	w.sY(w.z * (w.hH + t.Y() - cY ) - w.hH)

	return w


	//each tick, literally just sets w.sXY() based on:
	// world dimensions, world zoom, and trackee position
	// $t(this)?

}






w.sBuf=function(bf){var w=this

	bf.x = N(bf.x) ? bf.x : w.w / 2
	bf.y = N(bf.y) ? bf.y : w.h / 2
	
	bf.w = N(bf.w) ? bf.w : 0
	bf.h = N(bf.h) ? bf.h : 0
	
	bf.mX = N(bf.mX) ? bf.mX : 1
	bf.mY = N(bf.mY) ? bf.mY : 1
	
	return bf
}
fromMakeWorld()
function fromMakeWorld(){
	w.idealStX = function () {var w = this;
		return w.t.X() * w.z - w.hW
	}
	
	w.idealStY = function () {var w = this;
		return w.t.Y() * w.z - w.hH
	}
	
	
	
	w.dfTrackee = function () {
		//the 'trackee' is just a small white static sensor  top middle square !
		var w = this;
		return w.S(w.hW, w.hH, 'w', [[20, 2, '-']]).r(.8)
	}
	w.usingDfTrackee = w.hasDfTrackee = function () {
		return this.trackee == this._trackee
	}
	TKEE= function(){W({t:0})
		$l('look up top.. for a white centered square')
		_.in(function(){
			w.dfTrackee()
		})
		
	}
	
	w.trackeeSetup = function () {var w = this
		
		var dfTrackee = w.dfTrackee()
		w._trackee = w._t = dfTrackee
		w.trackee = w.t = dfTrackee
		
		w.i.A(w.trackeesSprite = w.tSpr = w.spriteForTrackee() )
		
		$t(function () {
		
				w.handleTrakeeOnTick().translateStageRelToTrackee()
				if (w.usingDfTrackee()) {
				
					w.translateTrackeeToSprite =   function () {var w = this
						w.trackee.XY(  w.tSpr.X(), w.tSpr.Y() );
						w.st.rt(  w.tSpr.rt()  )
						return w
					}
					
					w.translateTrackeeToSprite()}
		})
		
		return w
	}
	
	
	w.translateStageToTrackee =   function (x,y) {var w = this; w.st.x = -x; w.st.y = -y; return w}
	w.translateStageRelToTrackee = w.stToTrackee = function () {var w=this
		return w.translateStageToTrackee(w.sXCap(w.idealStX()), w.sYCap(w.idealStY()  ))
	}
	
	
	w.handleTrakeeOnTick = w.runTkCb = function () {
		var w = this
		if (F(w.trackee.cb)) {w.trackee.cb()}
		else if (F(w.tCb)) {w.tCb()}
		return w
	}
 
}


w.trackNeg = function (t,cX,cY) {
 
	var w = this
	$t(function ( ) {
		w.st.x = (cX - t.X()) * w.z - w.W * (w.z / 2 - .5)
		w.st.y = (cY - t.Y()) * w.z - w.H * (w.z / 2 - .5)
	})
	return w
}
w.bufExcl = function (t,cX,cY) {var w = this
	$t(function () {
		 
		var sX = w.z * (t.X() - cX)
		sX = sX * 1 / ( 1 + w.hW / w.w )
		var sY = w.z * (t.Y() - cY)
		sY = sY / (1 + w.hH / w.h)
		w.sXY(sX, sY)
	})
	return w
}
w.tr = w.track = function (t, cX, cY, bf) {var w = this, g=G(arguments)
	w.t = t = g.u? w._trackee: t
	cX = N(cX, w.W / 2); 
	cY = N(cY, w.H / 2)
	if (O(bf)) {w.bufPol(w.sBuf(bf))
		
		$t(function () {
			w.sXY(
			 bf.x - w.hW   +   _.adj(t.X() - bf.x, bf.w / 2)   * bf.mX ,
			 bf.y - w.hH   +   _.adj(t.Y() - bf.y, bf.h / 2)   * bf.mX
			 )
		})
		
		return w
	}
	//option to set based on t's CURRENT X/Y?
	return bf == '-'? w.trackNeg(t, cX,cY):
			(bf == '!')?  w.bufExcl(t, cX, cY):
			 w._track(t,cX,cY)   //w.S(cX,cY,'o',[ [40,400,'-']]) // w.dbCross(cX,cY) //  w.dot(cX,cY,'+')
}


b.tr = b.track = function (x, y, z) {
	var b = this, w = b.W()
	w.track(b, x, y, z)
	return b
}
CUPBALL = CPB=function () {

//purpose: shows 'track'-ing a  body
//purpose2: demonstrates 'showOff
//should zoom in when near cup
	CUPS()
	w.showOff().D(w.W / 2, w.H / 2, 'w', [[10]]).re(.8).lV(100).track()
	
}

CAMFOLLOW = CMF = function () {W(500, 500, 1600, 1000).G(0)
	a = w.y().C('b')
	b = w.y(400, 400).C('o').track()
	
	
	_.ev(5, function () {
		if (w.follA) {b.track(); w.follA = 0}
		else {a.track(); w.follA = 1}
	})
}


w.balls=function(){
var w=this
	_.t(10, function (i) {
		w.D(100 + i * 100, 100, $r(), 35).de(.1)
	})
return w
}
TRACKEE = TRK=function () {
	 
	 
	w.balls()
	
	y = w.ship(50, 50).mid()
	y2 = w.ship(100, 300).C('x').rot(180)
	//i thought i may want t for timer/ticker.. but time has no x and y !
	//move the stage by manipulating the trackee x,y
	//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
	w.tRightLeft()
	w.showOff()
	_.in(5, function () {
		_.ev(5, function changeT() {
			if (w.t == y2) {w.C('b');w.t = y}
			else {w.C('z');w.t = y2 }
		} )
	})
}




CB = TRACKEECB = function () {
	W([1200, 600, 2400, 1200], {g: 300}).balls()
	w.Z('-')
	w.t = p = w.p(1175, 100) // no need to call track?
	_.ev(1, function () {
	
		w.t.cb = function () {
			w.Z(w.z + .001)
		}
	})
}
CHANGETRACKEE = KEE = function () {
	W([600, 600, 1200, 600])
	//i thought i may want t for timer/ticker.. but time has no x and y !
	//move the stage by manipulating the trackee x,y
	//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
	//  y = w.ship(50,50 ).C('d').mid().track()
	
	y2 = w.y(100, 300).C('x')
	
	y = w.y(100, 300).C('u')
	
	_.ev(1, function () {
			
				if (w.t == y2) {w.C('z');w.t = y}
				
				else {w.C('w'); w.t = y2}
			
		
	})

	
	
	
}
function log() {
 
	w.spriteForTrackee = w.TrackeeSpr = function () {
		$l('w.spriteForTrackee')
		var w = this
		return $Ct().XY(w.t.X(), w.t.Y())  //  w.tSpr.bm('guy', function(g){  g.sXY(.2)}) // w.tSpr.A(g)
	}
	w.bufPol = function (bf) {
		var w = this
		$l('w.bufPol=')
		return w
		w.S(bf.x, bf.y, 'r', [[bf.w, bf.h, '-']])
		w.S(bf.x, bf.y, 'w', [[bf.w + 20, bf.h + 20, '-']])
		w.S(bf.x, bf.y, 'b', [[bf.w, w.h, '-']])
		w.S(bf.x, bf.y, 'b', [[w.w, bf.h, '-']])
		w.S(bf.x, bf.y, 'z', [[10, 10, '-']])  //sensor works but ony for rect (or at least not for circ)
		w.S(bf.x, bf.y, 'w', [[bf.w, bf.h, '-']]) //  w.dot(bf.x-bf.w/2, bf.y-bf.h/2  ,     '+')
		return w
	}
}
log() 