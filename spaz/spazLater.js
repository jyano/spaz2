b._Sp = function (sp, o) {
	$l('b._Sp')
	this._gx(sp)
	sp.rC()
			.XY(o.x, o.y)
			.sXY(o.sX, o.sY).rt(o.r)
	return sp
}
b.Sp = function () {
	$l('b.Sp')
	var g = G(arguments), o,
			sp
	o = $df.xyr({sp: g.f, x: g.s, y: g.t, sX: g[3], sY: g[4], r: g[5]})
	o.sX = N(o.sX, 1);
	o.sY = N(o.sY, o.sX)
	o.sp = o.sp || Mummy
	sp = $Sp(o.sp)
	return b._Sp(sp, o)
}
f._bI = function (o) {
	alert('f._bI')
	this.gx.A(
			o.i.sXY(o.sc).XY(o.x, o.y)
					.rt(o.r).al(o.al)
	)
	return this
}
f.bI = function () {
	alert('f.bI')
	var f = this, b = f.B(), w = b.W(), g = G(arguments), o
	this.gx = this.gx || w.g.ct()
	o = cjs.iDO(g.f) ? {i: g.f} : g.O ? g.f :
	{i: g.f || 'me', sc: g.s, x: g.t, y: g[3], r: g[4], al: g[5]}
	if (S(o.i)) {
		o.i = Q.b(o.i)
	}
	o.sc = N(o.sc, ( cjs.iH(o.i) ? 1 : .4 ));
	if (!A(o.sc)) {
		o.sc = [o.sc, o.sc]
	}
	$df.xyr(o)
	o.al = N(o.al, 1)
	if (!g.n && !cjs.iH(o.i) && !cjs.iCt(o.i)) {
		o.i.rC()
	}
	return this._bI(o)
}
w.txC = function () {
	var w = this
	_.ev(2, function () {
		w.e(function (b) {
			b.fs(function (f) {
				f.C($r())
			})
		})
	})
}
b._gx = function (a) {
	alert('b._gx')
	this.gx = this.gx || w.gx.ct();
	if (a) {
		this.gx.A(a)
	}
	return this
}
f.initSp = function () {
	alert('initSp')
	this._sp = this._sp || [];
	this.SP = this.SP || [];
	this.sprites = this.sprites || []
	return this
}
b.fSp = function () {
	alert('b.fSp')
	return this.f().sprites[0]
}
b._bS = function (sprite, o) {
	alert('b._bS')
	var b = this, w = b.W()
	w.gx.A(sprite)
	T.t(function () {
		sprite
				.XY(b.X() + o.x, b.Y() + o.y)
				.rt(b.rt() + o.rt)
	})
}
/*
 ct.bm = ct.b = function () {
 var ct = this, g = G(arguments), bm,
 o = g.F_ ? {fn: g.s, sc: g.s} :
 g.N_ ? {sc: g.f, fn: g.s} :
 _.x(
 {i: g.f},
 N(g.s) ? {sc: g.s, fn: g.t} :
 {fn: g.s, sc: g.t}
 )
 o.sc = o.sc || 1
 $df.im(o)
 if (O(o.i)) {
 return ct.A($Bm(o.i))
 }//alert('ct.bm O(o.i)'); never alerted
 $.i(o.i, function (i) {
 bm = $Bm(i).a2(ct).sXY(o.sc)
 if (!g.n) {
 bm.rC()
 }
 if (g.p) {
 bm.drag()
 }
 if (o.fn) {
 o.fn(bm)
 }
 })
 return ct
 }

 */
// u might say xTHIS but not thisX? i dont know what i am talking about
/* TICKER
 paused : Indicates whether the ticker is currently paused.
 d       delta :  time since the last tick
 t       time : how much  since T  started
 r      runTime  : how much time has T been running for
 */
/*
 // returns   The average time spent in a tick in milliseconds.
 //This can vary significantly from the value provided by getMeasuredFPS because it only measures the time spent
 // within the tick execution stack.
 Example 1: With a target FPS of 20, getMeasuredFPS()
 returns 20fps, which indicates an average of 50ms between the end of one tick and the end of the next.
 However, getMeasuredTickTime() returns 15ms.
 This indicates i there may be up to 35ms of "idle" time between the end of one tick and the start of the next.

 Example 2: With a target FPS of 30, getFPS() returns 10fps,
 which indicates an average of 100ms between the end of one tick and the end of the next. However,
 getMeasuredTickTime() returns 20ms.
 This would indicate i something other than the tick is using ~80ms
 (another script, DOM rendering, etc).

 */
//w.sp=w.ct=function(x,y){var w=this;return w.hud.ct(x||w.hW,y||w.hH).drag()}
/*
 f.clrSp = function () {
 //$l('clrSp')
 this.sprites = []; //this_sp = []; this.SP = []
 return this
 }
 */
i.bB = i.bindBody = function (b) {
	alert('i.bindBody i.bB')
	var i = this
	cjs.t(function () {
		b.X(i.X())
		b.Y(i.Y())
		b.rt(i.rt())
	})
	return i
}
i.tf = function () {
	alert('i.tf')
	var i = this, g = G(arguments)
	if (g.u) {
		return [
			i.x,
			i.y,
			i.scaleX,
			i.scaleY,
			i.rotation,
			i.skewX,
			i.skewY,
			i.regX,
			i.regY
		]
	}
	if (O(g[0]) && F(g[0].getTransform)) {
		g[0] = g[0].getTransform()
	}
	i.setTransform.apply(i, A(g[0]) ? g[0] : g)
	return i
}
i.getTransform = function () {
	alert('i.getTransform')
	var ob = this
	return [
		ob.x, ob.y, ob.scaleX, ob.scaleY,
		ob.rotation, ob.skewX, ob.skewY,
		ob.regX, ob.regY
	]
}
i.cu = i.bM = function (cu) {
	alert('i.cu i.bM')
	var ob = this,
			st = ob.st()
	CUob = {
		d: 'default', n: 'none', h: 'help',
		p: 'pointer', ch: 'crosshair',
		P: 'progress', w: 'wait',
		t: 'text',
		m: 'move', g: 'grab', c: 'copy',
		cm: 'context-menu',
		C: 'cell',
		N: 'not-allowed', v: 'not-allowed',
		z: 'zoom-in'
	}
	if (U(cu)) {
		st.MM(function () {
			ob.x = st.m().x;
			ob.y = st.m().y
		})
	}
	else if (S(cu)) {
		ob.cursor = CUob[cu] ? CUob[cu] : cu
	}
	return ob
}
cjs.rgb = function (r, g, b, a) {
	alert('cjs.rgb')
	var str
	a = N(a) ? a : 1
	str = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'
	return str
}
drawHalf = function (c, i) {
	alert('drawHalf')
	c.dI(i, -i.width / 2, -i.h / 2)
}
drag = drg = function (element) {
	alert('drag')
	var q = $b(qq(element).q)
			.css({position: 'absolute'})
			.on('mousedown', function (e) {
				var offset = $(this).offset(),
						deltaX = e.pageX - offset.left, deltaY = e.pageY - offset.top
				$('html').on('mousemove', function (e) {
					q.css({left: e.pageX - deltaX, top: e.pageY - deltaY})
				})
						.on('mouseup', function () {
							$(this).off()
						})
			})
	touchDrg(element)
	return qq(element)
}
$.fn.hideOnKeyDown = function (a) {
	alert('$.fn.hideOnKeyDown ')
	var that = this
	$('body').keydown(function (ev) {
		e = ev
		$l(e.which)
		if (e.which == 40) {
			that.hide()
		}
		if (e.which == 38) {
			that.show()
		}
	})
}
$.fn.T = function () {
	alert('$.fn.T')
	var d = this, g = G(arguments)
	d.E()
	g.e(function (str) {
		d.A($.h3(str))
	})
	return d
}