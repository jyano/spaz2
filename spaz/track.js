log()
function log() {
	w.bufExcl = function (t, cX, cY) {
		var w = this
		$l('w.bufExcl')
		$t(function () {
			var sX = w.z * (t.X() - cX)
			sX = sX * 1 / ( 1 + w.hW / w.w )
			var sY = w.z * (t.Y() - cY)
			sY = sY / (1 + w.hH / w.h)
			w.sXY(sX, sY)
		})
		return w
	}
	w.balls = function () {
		var w = this
		_.t(10, function (i) {
			w.D(100 + i * 100, 100, $r(), 35).de(.1)
		})
		return w
	}
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
	w.pan = function (o) {
		$l('w.pan')
		var w = this, g = G(arguments), o = g[0]
		var mZ = w.mZ,
				MZ = mZ * 3,
				z = w.mZ * 3,
				up = true
		var l
		if (g.m) {
			l = function () {
				up = z > w.mZ * 3 ? false :
						z < w.mZ ? true :
								up
				z *= up ? 1.01 : .9
				w.Z(z / w.mZ)
			}
		}
		else {
			l = function () {
				up = z > w.mZ * 3 ? false : z < mZ ? true : up
				z += up ? .03 : -.03
				w.Z(z / w.mZ)
			}
		}
		w.track.cb = l
		return w
	}
	b.cenSc = b.centerScale = function (z) {
		$l('b.cenSc = b.centerScale')
		var b = this, w = b.W(), st = w.st
		st.sXY(z)
		st.X(w.hW - (  (b.X() - w.hW) * z))
		st.Y(w.hH - (  (b.Y() - w.hH)) * z)
		return b
	}
	function alertt() {
		b.cam = function (x, y) {
			alert('b.cam')
			var b = this, s = b.stg()
			s.XY(b.diff(x, y))
			return b
		}
		b.follow = function (x, y) {
			alert('b.follow')
			var b = this
			cjs.t(function () {
				if (O(b.sprite)) {
					b.cam(x, y)
				}
			})
			return b
		}
	}
	
	w.tRightLeft = function () {
		$l('w.tRightLeft')
		var w = this, left
		$t(function () {
			if (!left) {
				w.tX(10, '+')
				if (w.tX() > 2000) {
					left = 1
				}
			}
			else {
				w.tX(10, '-')
				if (w.tX() < 400) {
					left = 0
				}
			}
		})
		return w
	}
}