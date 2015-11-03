$load( 'tran','text')
 
	ct.cX = function () {
		return this.St().cen().x
	}
	ct.cY = function () {
		return this.St().cen().y
	}
	ct.t = ct.oT = ct.tick = function (fn) {
		var g = G(arguments)
		if (F(fn)) {
			if (!g.n) {
				fn()
			}
			return this.on('tick', fn)
		}
		else {
			T.on('tick', this);
			return this
		}
	}
	ct.xT = function (fn) {
		this.off('tick', fn)
		return this
	}
	ct.bm = function () {
		var ct = this, g = G(arguments), o, bm
		o = g.F_ ? {fn: g.s, sc: g.s} :
				g.N_ ? {sc: g.f, fn: g.s} :
						_.x({i: g.f},
								N(g.s) ? {sc: g.s, fn: g.t} :
								{fn: g.s, sc: g.t})
		//fn,sc  //sc,fn //i,sc,fn  //i,fn,sc
		o.sc = o.sc || 1;
		o.i = o.i || 'me';
		o.al = N(o.al, 1)
		o.fn = o.fn || function () {
		}
		if (_.iDU(o.i)) {
			o.i = $.i(o.i)
		}
		if (O(o.i)) {
			o.fn($Bm(o.i).a2(ct))
			return ct
		}
		$.i(o.i, function (i) {
			bm = $Bm(i).a2(ct).sXY(o.sc)
			if (!g.n) {
				bm.rC()
			}
			//if (g.p) {bm.drag()}; if (g.d) {bm.XY(-1000)}
			o.fn(bm)
		})
		return ct
	}
	
	ct.mc = function (x, y) {
		var ct = this, g = G(arguments), mc
		mc = cjs.MovieClip.apply(cjs, g)
		this.A(mc).XY(N(x, 100), N(y, 100))
		return mc
	}
	ct.chalk = function () {
		var ct = this, g = G(arguments),
				h = 0
		g.e(function (t) {
			ct.T(t, 26, 'w', 475, h += 35)
		})
		return this
	}
	ct.T = ct.Tx = function () {
		var ct = this, g = G(arguments), o, t
		o = g.O ? g.f :
				
				g.N_ ? {x: g.f, y: g.s, t: g.t, f: g[3], c: g[4]} :
						N(g.s) ? {t: g.f, x: g.s, y: g.t, f: g[3]} :
								_.x({t: g.f, f: g.s, c: g.t},
										N(g[3]) && N([4]) ? {x: g[3], y: g[4]} :
										{y: g[3]})
		o.f = N(o.f) ? o.f + 'px Arial' : o.f
		o.f = o.f || '50px Arial'
		o.c = oO('c', o.c || 'y')
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.t = String(o.t)
		t = $T(o.t, o.f, o.c).XY(o.x, o.y).a2(this).drag()
		if (g.n) {
			t.regX = t.W() / 2
		}
		t.bl('middle')
		if (g.p) {
			t.bl('alphabetic')
		}
		if (!g.n) {
			t.rX(t.mW() / 2)
		}
		return t
		//o.x = N(o.x, this.St().cen().x)
		/* if(g.p){
		 tO = cjs.T(g.f, 'y', '40px Arial')
		 if(N(g[3])){ tO.XY(g[3], g[4]) }
		 return tO
		 }*/
		
		old = function () {
			ct.T = ct.Tx = ct.text = function (t, f, c, x, y) {
				var ct = this, o, cX
				
				
				st = this.getStage()
				cX = st.cen().x
				
				o = (N(x) && U(y)) ? {y: x, x: cX} :
						U(x) ? {x: cX, y: 100} :
						{t: t, f: f, c: c, x: x, y: y}
				
				var t = cjs.T(o.t, o.f, o.c, o.x, o.y)
				ct.A(t)
				return t
			}
			
		}
	}

	ct.Ct = function () {
		this.ct.apply(this, arguments)
		return this
	}
	ct.Bm = function () {
		this.bm.apply(this, arguments)
		return this
	}

	ct.rec = function () {
		var ct = this, g = G(arguments), o, ct2, h
		if (g.OO_) {
			g.e(this, 'rec');
			return this
		} //it doesnt know that's this! (scope talk)
		o = g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4], rt: g[5]} :
				g.N_ ? {w: g.f, h: g.s, x: g.t, y: g[3], rt: g[4]} : g.f
		o.al = N(o.al, 1)
		o.rt = N(o.rt, 0)
		o.c = o.c || 'z';
		o.C = o.C || 'w'
		ct2 = ct.ct();
		h = ct2.h(o.x, o.y);
		h.rt(o.rt);
		h.c(o).al(o.al)
		if (o.lf) {
			h.lf(o)
		} else if (o.rf) {
			h.rf(o)
		}
		if (o.bm) {
			h.bR({i: 'me', hs: [o]})
		}
		else {
			h.rec(o.w, o.h)
		}
		if (g.p) {
			ct.drag()
		}
		return ct2
	}
	
	
	
ct.poly = function () {var ct = this, h = ct.h(), g = G(arguments)
	h.pol.apply(h, arguments)
	return !g.p ? h : h.drag()
}
	

	ct.pol = function () {var ct = this, h = ct.h(), g = G(arguments)
	
	
	if (N(g.f)) {
		h.XY(  g.shift(), g.shift() )
	}
		    
	var h = $a(h, 'pol', g)
	return !g.p? h : h.drag()

}

function tran(){
	cjs.bindSlide = SL = function () {
		var g = G(arguments),
				b = g[0],
				b2 = g[1] || b
		
		return b.on('mousedown',
				function (e) {
					var bx = b2.x - e.rawX,
							by = b2.y - e.rawY
					b.on('pressmove', function (e) {
						
						if (g.P) {
							b2.x = bx + e.rawX
						}
						
						//if (g.N) {
						b2.y = by + e.rawY
						//}
					})
					
				})
	}
	
	cjs.LS= cjs.bindReverseSlide =  function (b, b2) {
		var g = G(arguments),
				b = g[0],
				
				b2 = g[1],
				d = oE('d'),
				pm = oE('pm'),
				b2 = b2 || b
		
		return b.on(d, function (e) {
			var bx = b2.x + e.rawX, by = b2.y + e.rawY
			
			b.on(pm, function (e) {
				
				if (g.P) {
					b2.x = bx - e.rawX
				}
				if (g.N) {
					b2.y = by - e.rawY
				}
				
			})
		})
	}
	cjs.reggy =   function (o, s) {
		
		s = s || o.parent
		
		s.bm('me', function (b) {
			
			b.W(40).H(40)
			
			I(function () {
				b.XY(o.x + o.regX, o.y + o.regY)
			}, 100)
			
		})
		
		
	}
	cjs.KK= cjs.bindSlideAndRotate =  function (b, b2) {
		
		var g = G(arguments), b = g[0],
				b2 = g[1] || b
		cjs.bindSlide(b);
		cjs.bindRotate(b, b2)
		if (g.p) {
			
			b.rgc('+')
		}
		
		if (g.N) {
			//    reggy(b,b2)
		}
	}
	cjs.RK= cjs.bindRotateThenSkew =  function (b, b2, m) {
		var g = G(arguments), b = g[0], b2 = g[1],
				d = oE('d'),
				pm = oE('pm'),
				b2 = b2 || b,
				m = g[2] || 'RT'
		
		
		//if(g.p){var s=St('y',1000)
		//    _t(b||5,function(i){s.a().bm(
		//        function(bm){bm.xy(i*50);TR(bm)})});return s}
		
		if (m == 'RT') {
			RT(b, b2);
			m = 'SK'
		}
		
		else if (m == 'SK') {
			SK(b, b2);
			m = 'RT'
		}
		
		return b.on(oE('pu'),
				function (e) {
					Do(b).O();
					RK(b, b2, m)
				})
	}
	cjs.LS = cjs.bindReverseSlide = LS = function (b, b2) {
		var g = G(arguments),
				b = g[0],
				
				b2 = g[1],
				d = oE('d'),
				pm = oE('pm'),
				b2 = b2 || b
		
		return b.on(d, function (e) {
			var bx = b2.x + e.rawX, by = b2.y + e.rawY
			
			b.on(pm, function (e) {
				
				if (g.P) {
					b2.x = bx - e.rawX
				}
				if (g.N) {
					b2.y = by - e.rawY
				}
				
			})
		})
	}
	cjs.RT = cjs.bindRotate = RT = function (b, b2) {
		//b = what the control is
		//b2 what it should control (default = itself!)
		//if(g.p){  //b.rgc( '+' )   }
		
		var g = G(arguments), b = g[0], b2 = g[1] || b
		
		return b.on('mousedown', function (e) {
			var X = e.rawX, Y = e.rawY, r = b2.rotation
			b.on('pressmove', function (e) {
				b2.rotation = r - (   (e.rawY - Y) / 500   ) - (   e.rawX - X  )
			})
		})
	}
	cjs.RT2 = cjs.bindRotate2 = RTT = function (b, b2) {
		
		
		//b = what the control is
		//b2 what it should control (default = itself!)
		
		
		var g = G(arguments), b = g[0], b2 = g[1] || b
		
		
		if (g.p) {  // b.rgc( '+' )
		}
		
		return b.on('mousedown',
				
				function (e) {
					
					var X = e.rawX, Y = e.rawY, r = b2.rotation
					
					b.on('pressmove', function (e) {
						
						
						b2.rotation = r + (   (e.rawY - Y) / 500   ) + (   e.rawX - X  )
						
						
					})
				})
		
	}
	cjs.SC = cjs.bindScale = SC = function (b, b2) {
		var g = G(arguments), b = g[0], b2 = g[1],
				d = oE('d'), pm = oE('pm'), b2 = b2 || b,
				cp = function (n) {
					return n < .2 ? .2 : n > 2 ? 2 : n
				}
		
		return b.on(d,
				
				function (e) {
					var X = e.rawX, Y = e.rawY,
							sx = b2.scaleX,
							sy = b2.scaleY
					
					b.on(pm,
							
							function (e) {
								if (g.n) {
									b2.sXY(cp(sx + (
											(e.rawX - X) / 200)),
											cp(sy - ((e.rawX - X) / 200))
									)
									
								}
								
								else if (g.p) {
									cXY(b2, sx + ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
									cXY(b2, sy - ((e.rawY - Y) / 50)), sx + ((e.rawX - X) / 50)
								}
								
								else {
									b2.sXY(sx - ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
								}
							})
				}
		)
	}
	cjs.SK = cjs.bindSkew = SK = function (b) {
		var g = G(arguments), b = g[0], b2 = g[1], d = oE('d'), pm = oE('pm'), b2 = b2 || b
		
		return b.on(d,
				function (e) {
					var X = e.rawX, Y = e.rawY
					b.on(pm, function (e) {
						
						
						b2.kXY(
								(e.rawY - Y) * .5, (e.rawX - X) * .5
						)
						
					})
				})
	}
	cjs.TR = cjs.bindTransform = TR = function TR(b, b2, m) {
		var g = G(arguments),
				b = g[0], b2 = g[1], b2 = b2 || b, m = g[2] || 'SL'
		if (m == 'SL') {
			cjs.SL(b, b2);
			m = 'SC'
		}
		else if (m == 'SC') {
			cjs.SC(b, b2);
			m = 'RT'
		}
		else if (m == 'RT') {
			cjs.RT(b, b2);
			m = 'SL'
		}
		return b.on('pressup', function (e) {
			b.removeAllEventListeners();
			TR(b, b2, m)
		})
	}
	
	i.rX = function () {
		var i = this, g = G(arguments), rX = g[0]
		if (U(rX)) {
			return i.regX
		}
		i.regX = g.p ? i.regX + rX : rX
		return i
	}
	i.rY = function () {
		var i = this, g = G(arguments), rY = g[0]
		if (g.p) {
			i.Y(i.y + (rY - i.regY))
		}
		if (U(rY)) {
			return i.regY
		}
		i.regY = rY
		return i
	}
	i.rXY = function () {
		var i = this, g = G(arguments),
				x = N(g.f, 0),
				y = N(g.s, x)
		return i.rX(x).rY(y)
	}
	i.rC = function () {
		var i = this, g = G(arguments), x, y, hW, hH
		x = i.W() / 2
		hW = x
		y = i.H() / 2
		hH = y
		return (g.p) ? i.rX(hW, '+').rY(hH, '+') :
				i.rXY(hW, hH)
	}
	i.RT = function () {
		var i = this;
		cjs.RT(i);
		return i
	}
	
	i.grow = function () {
		$Tw(this, [{sxy: 10}, 10000]);
		return this
	}
	i.TR = function () {
		cjs.TR(this);
		return this
	}
 
	cjs.SL = function (b, b2) {
		
		var g = G(arguments),
				
				b = g[0], b2 = g[1] || b
		
		return b.on('mousedown',
				
				function (e) {
					var bx = b2.x - e.rawX, by = b2.y - e.rawY
					
					b.on('pressmove', function (e) {
						
						if (!g.p) {
							b2.x = bx + e.rawX
						}
						if (!g.n) {
							b2.y = by + e.rawY
						}
					})
				}
		)
		
	}
	cjs.SC = function (b, b2) {
		var g = G(arguments), b = g[0], b2 = g[1],
				d = oE('d'), pm = oE('pm'), b2 = b2 || b,
				cp = function (n) {
					return n < .2 ? .2 : n > 2 ? 2 : n
				}
		return b.on(d,
				function (e) {
					var X = e.rawX, Y = e.rawY,
							sx = b2.scaleX,
							sy = b2.scaleY
					
					b.on(pm,
							
							function (e) {
								if (g.n) {
									b2.sXY(cp(sx + (
											(e.rawX - X) / 200)),
											cp(sy - ((e.rawX - X) / 200))
									)
									
								}
								
								else if (g.p) {
									cXY(b2, sx + ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
									cXY(b2, sy - ((e.rawY - Y) / 50)), sx + ((e.rawX - X) / 50)
								}
								
								else {
									b2.sXY(sx - ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
								}
							})
				}
		)
	}
	cjs.RT = function (b, b2) {//b = what the control is //b2 what it should control (default = itself!)
		var g = G(arguments), b = g[0], b2 = g[1] || b
		if (g.p) {
			alert('g.p')
			b.rgc('+')
		}
		return b.on('mousedown', function (e) {
			var X = e.rawX, Y = e.rawY, r = b2.rotation
			b.on('pressmove', function (e) {
				
				
				b2.rotation = r + (   (e.rawY - Y) / 500   ) + (   e.rawX - X  )
				
				
			})
		})
	}
	cjs.TR = function TR(b, b2, m) {
		var g = G(arguments),
				b = g[0], b2 = g[1], b2 = b2 || b, m = g[2] || 'SL'
		if (m == 'SL') {
			cjs.SL(b, b2);
			m = 'SC'
		}
		else if (m == 'SC') {
			cjs.SC(b, b2);
			m = 'RT'
		}
		else if (m == 'RT') {
			cjs.RT(b, b2);
			m = 'SL'
		}
		return b.on('pressup', function (e) {
			b.removeAllEventListeners();
			TR(b, b2, m)
		})
	}
	
	
	cjs.reggy = reggy = function (o, s) {
		
		s = s || o.parent
		
		s.bm('me', function (b) {
			
			b.W(40).H(40)
			
			I(function () {
				b.XY(o.x + o.regX, o.y + o.regY)
			}, 100)
			
		})
		
		
	}
	cjs.KK = cjs.bindSlideAndRotate = KK = function (b, b2) {
		
		var g = G(arguments), b = g[0], b2 = g[1] || b
		cjs.SL(b);
		cjs.RT(b, b2)
		if (g.p) {
			
			b.rgc('+')
		}
		
		if (g.N) {
			//    reggy(b,b2)
		}
	}
	cjs.RK = cjs.bindRotateThenSkew = RK = function (b, b2, m) {
		var g = G(arguments), b = g[0], b2 = g[1],
				d = oE('d'),
				pm = oE('pm'),
				b2 = b2 || b,
				m = g[2] || 'RT'
		
		
		//if(g.p){var s=St('y',1000)
		//    _t(b||5,function(i){s.a().bm(
		//        function(bm){bm.xy(i*50);TR(bm)})});return s}
		
		if (m == 'RT') {
			RT(b, b2);
			m = 'SK'
		}
		
		else if (m == 'SK') {
			SK(b, b2);
			m = 'RT'
		}
		
		return b.on(oE('pu'),
				function (e) {
					Do(b).O();
					RK(b, b2, m)
				})
	}
	testImgRegCenter = function () {
		mockStage()
		s.bm('me', function (bm) {
			b1 = bm
			bm.spin().drag()
		})
		
		s.bm('me', function (bm) {
			b2 = bm
			bm.sXY(0.5, 0.3).spin().drag()
		})
		
		s.A(c = cjs.circle(4).XY(200))
		
	}
	
	
	cjs.rtSh = cjs.rotateShake = function (bm) {
		$Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
	}
	cjs.scSh = cjs.scaleShake = function (bm) {
		$Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
		
	}
	
	
	i.grow = function(){
		
		$Tw(this, [{sxy:10},10000]); return this
	}
	i.RT = function(){RT(this);return this}
	i.TR = function(){TR(this);return this}
	
	i.dg=i.drag=i.SL = function(){
		cjs.SL(this);
		return this
	}
}
function text() {
	cjs.iT = function (t) {
		if (O(t)) {
			return (t.textBaseline)
		}
	}
	$T = function (a, f, c, x, y) {
		var t
		if (N(f)) {
			f = String(f) + "px Arial"
		}
		if (S(c)) {
			c = oO('c', c)
		}
		t = new cjs.Text(a, f, c)
		if (O(x)) {
			if (F(x.cen)) {
				x = x.cen()
			}
			y = x.y
			x = x.x
		}
		if (N(x)) {
			t.X(x)
		}
		if (N(y)) {
			t.Y(y)
		}
		return t
	}
	$T = function (a, b, c, d, e) {
		var g = G(arguments), o, t
		return new cjs.Text(a, b, c, d, e)
		o = g.O ? g.f :
		{t: g.f, f: g.s, c: g.t, x: g[3], y: g[4]}
		o.f = N(o.f) ? o.f + 'px Arial' : o.f
		o.f = o.f || '50px Arial'
		o.c = o.c || 'y'
		o.x = N(o.x, 600)
		o.y = N(o.y, 100)
		t = new cjs.Text(o.t, o.f, o.c)
		t.XY(o.x, o.y).drag()
		if (g.n) {
			t.regX = t.W() / 2
		}
		if (g.p) {
			t.bl('alphabetic')
		}
		return t.bl('middle')
	}
	cjs.T = cjs.Tx = function (text, font, color, x, y) {
		x = N(x) ? x : 600
		y = N(y) ? y : 100
//var g=G(arguments); if(g.N){text.bl( 'alphabetic' )}   //if(g.p){ TR(text) }
		if (N(font)) {
			font = font + 'px Arial'
		}
		font = font || '50px Arial'
		color = color || 'y'
		textOb = new createjs.Text(text, font, oO('c', color))
		textOb.regX = textOb.W() / 2
		textOb.XY(x, y)
		return textOb
	}
	cjs.niceText = function (text, x, y) {
		var t = cjs.text(text, 'yellow', '40px Arial')
		if (N(x)) {
			t.XY(x, y)
		}
		return t.drag()
	}
	t.lW = _.gS('linewidth')
	t.lH = _.gS('lineHeight') //o.lineHeight = this.lineHeight || this.getMeasuredLineHeight();
	t.lWH = function (w, h) {
		return this.lW(w).lH(N(h, w))
	}
	
	
	t.tA = function(a){
		$l('tA')
		if(U(a)){
		}
		this.textAlign = (a)
		return this
	}
	
	
	t.bl = function (bl) {
		var g = G(arguments)
		if (g.p) {
			bl = 'bottom'
		}
		if (g.n) {
			bl = 'top'
		}
		if (bl === '') {
			bl = 'middle'
		}
		if (U(bl)) {
			return this.textBaseline
		}
		this.textBaseline = bl
		return this
	}
	t.ol = _.gS(t, 'outline')
	t.mW = function () {
		return this.getMeasuredWidth()
	}
	t.lineH = t.lH = function (lH) {
		if (U(lH)) {
			return this.lineHeight
		}
		this.lineHeight = lH
		return this
	}
	t.lineW = t.lW = function (lW) {
		if (U(lW)) {
			return this.lineWidth
		}
		this.lineWidth = lW
		return this
	}
	t.lWH = function (w, h) {
		if (U(h)) {
			h = w
		}
		;
		return this.lW(w).lH(h)
	}
	t.align = t.textA = t.tA = function (textAlign) {
		if (U(textAlign)) {
			return this.textAlign
		}
		this.textAlign = textAlign
		return this
	}
	t.baseline = t.textB = t.tB = function (textBaseline) {
		if (U(textBaseline)) {
			return this.textBaseline
		}
		this.textBaseline = textBaseline
		return this
	}
	t.outL = t.oL = function (outline) {
		if (U(outline)) {
			return this.outline
		}
		this.outline = outline
		return this
	}
}
function alpha(){
	i.flash = function () {
		var i = this
		i.al(0)
		$.in(.3, function () {
			i.al(1)
		})
		return i
	}
	i.rZero = function (a) {
		var i = this, g = G(arguments), x = i.W() / 2, y = i.H() / 2
		if (g.p) {
			i.rX(0, '+').rY(0, '+')
		}//i.X(a, i.regX()-a, '+')
		else {
			i.rXY(0, 0)
		}
		return i
	}//
	tw.Plugin =function(a,b){
		var g=G(arguments),a=g[0],b=g[1]
		if(U(a)){ return g.p? w.pluginData.data: w.pluginData}
		if(U(b)){ w.pluginData=a;return w}
		w.pluginData[a]=b
		return w
	}
}
function uselessWithExample() {
	h.bC = function (o) {
		var h = this;
		return h.bf(o, function (h1) {
			h.dc(h1)
		})
	}//uselsess!
	HBC = function () {
		st = $St().t()
		st.h(300, 200).bC('me')
	}
}
