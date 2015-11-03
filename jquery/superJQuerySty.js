$load(
'sCss','backg','color',
'boxDims','text','placement'
)

function placement() {

$.fn.dp=$.fn.display=function(display){
	if(U(display)){
		return this.css('display')
	}
	this.css('display',display);
	return this
}
$.fn.ov=$.fn.overflow=function(overflow){
	if(U(overflow)){
		return this.css('overflow')
	}
	this.css('overflow',overflow);
	return this
}
$.fn.P=$.fn.p=function(pos,x,y){
	var e=this,g=G(arguments)
	if(g.u){
		return e.css('position')
	}
	e.css('position',oO('p',pos))
	if(N(g.s)){
		e.X(g.s)
	}
	if(g.t){
		e.Y(g.t)
	}
	return e
}
$.fn.ab=$.fn.abs=function(x,y){
	var e=this
	return e.P('a',x,y)
}
$.fn.float=function(float){
	if(U(float)){
		return this.css('float')
	}
	this.css('float',float);
	return this
}
    function flex() {
        $.fn.fl = function () {
            this.css('display', 'flex')
            return this
        }
        $.fn.$J = function (a) {
            this.css('justify-content', a)
            return this
        }
        $.fn.$I = function (a) {
            this.css('align-items', a)
            return this
        }
        $.fn.$C = function (a) {
            this.css('align-content', a)
            return this
        }
    }
flex()
    function xyz() {
        $.fn.os = function () {
            var os = this.offset()
            return os
        }
        $.fn.zi = $.fn.zIndex = function (z) {
            if (U(z)) {
                return this.css('z-index')
            }
            this.css('z-index', z);
            return this
        }
        $.fn.X = function (l) {
            var q = this, g = G(arguments)
            if (N(l)) {
                q.css(
                    'left',
                    g.p ? q.X() + l :
                        l
                )
                return q
            }
            l = q.css('left')
            return l == 'auto' ? 'auto' : parseInt(l)
            /*
             $.fn.X = $.fn.left = function (left) {
             if (N(left)) {
             return this.css('left', left)
             }
             var left = this.css('left')
             if (left == 'auto') {
             return 'auto'
             }
             return parseInt(left)
             }
             */
        }
        $.fn.Y = $.fn.top = function (top) {
            if (N(top)) {
                return this.css('top', top)
            }
            var top = this.css('top')
            if (top == 'auto') {
                return 'auto'
            }
            return parseInt(top)
            /*
             $.fn.Y = $.fn.top = function (top) {
             if (N(top)) {
             return this.css('top', top)
             }
             var top = this.css('top')
             if (top == 'auto') {
             return 'auto'
             }
             return parseInt(top)
             }
             */
        } //$.fn.t
        $.fn.XY = function (x, y) {
            x = N(x) ? x : 0
            if (U(y)) {
                y = x
            }
            return this.X(x).Y(y)
            /*
             $.fn.XY = function (x, y) {
             x = N(x) ? x : 0
             if (U(y)) {
             y = x
             }
             return this.X(x).Y(y)
             }
             */
        }
        $.fn.L = $.fn.l = $.fn.left = function (l) {
            var q = this, g = G(arguments)
            if (N(l)) {
                q.css('left', l)
                return q
            }
            l = q.css('left')
            return l == 'auto' ? 'auto' : q.position().left
            function old() {
                $.fn.L = function (n) {
                    if (U(n)) {
                        return this.css('left')
                    }
                    this.css('left', n)
                    return this
                }
            }
        }
        $.fn.R = $.fn.rit = function (right) {
            if (U(right)) {
                return this.css('right')
            }
            this.css('right', right)
            return this
        }
        $.fn.LR = function (l, r) {
            var q = this
            if (O(l)) {
                r = l.r;
                l = l.l
            }
            if (N(l)) {
                q.L(l)
            }
            if (N(r)) {
                q.R(r)
            }
            return q
        }
        $.fn.bot = $.fn.B = function (bottom) {
            if (U(bottom)) {
                return this.css('bottom')
            }
            this.css('bottom', bottom)
            return this
        }
    }
    xyz()
    }
function boxDims(){
 
function wh() {
    $.fn.ouH = $.fn.outerHeight
    $.fn.W = function (w) {
        return w ? this.width(w) : this.width()
    }
    $.fn.H = function (h) {
        return h ? this.height(h) : this.height()
    }
    $.fn.WH = function (w, h) {
        h = h || w;
        return this.W(w).H(h)
    }
    $.fn.MW = $.fn.maxW = function (a) {
        return this.css('max-width', a)
    }
    $.fn.mW = $.fn.minW = function (a) {
        return this.css('min-width', a)
    }
    $.fn.mH = $.fn.minH = function (a) {
        return this.css('min-height', a)
    }
    $.fn.maxH = function (a) {
        return this.css('max-height', a)
    }
}
function mar() {
    $.fn.mgT = function (a) {
        return this.css("margin-top", a || 0)
    }
    $.mar = function () {
        var g = G(arguments), o
        o = N(g[3]) ? g.f + 'px ' + g.s + 'px ' + g.t + 'px ' + g[3] + 'px' :
            N(g.t) ? g.f + 'px ' + g.s + 'px ' + g.t + 'px ' + g.f + 'px' :
                N(g.s) ? g.f + 'px ' + g.s + 'px ' + g.s + 'px ' + g.f + 'px' :
                    N(g.f) ? g.f + 'px ' + g.f + 'px ' + g.f + 'px ' + g.f + 'px' :
                        '10px 10px 10px 10px'
        return o
    }
    $.fn.mar = function (margin) {
        if (U(margin)) {
            return this.css('margin')
        }
        this.css('margin', margin);
        return this
    }
    $.fn.marBottom = function (margin) {
        if (U(margin)) {
            return this.css('marginBottom')
        }
        this.css('marginBottom', margin);
        return this
    }
    $.fn.marTop = function (margin) {
        if (U(margin)) {
            return this.css('marginTop')
        }
        this.css('marginTop', margin);
        return this
    }
    $.fn.marLeft = function (margin) {
        if (U(margin)) {
            return this.css('marginLeft')
        }
        this.css('marginLeft', margin);
        return this
    }
    $.fn.marRight = function (margin) {
        if (U(margin)) {
            return this.css('marginRight')
        }
        this.css('marginRight', margin);
        return this
    }
    $.fn.marHor = function (a) {
        return this.marLeft(a).marRight(a)
    }
    $.fn.marVer = function (a) {
        return this.marTop(a).marBottom(a)
    }
    $.fn.mar = function (margin) {
        if (U(margin)) {
            return this.css('margin')
        }
        this.css('margin', margin);
        return this
    }
    $.fn.mB = $.fn.marBottom = function (margin) {
        if (U(margin)) {
            return this.css('marginBottom')
        }
        this.css('marginBottom', margin);
        return this
    }
    $.fn.mT = $.fn.marTop = function (margin) {
        if (U(margin)) {
            return this.css('marginTop')
        }
        this.css('marginTop', margin);
        return this
    }
    $.fn.mL = $.fn.marLeft = function (margin) {
        if (U(margin)) {
            return this.css('marginLeft')
        }
        this.css('marginLeft', margin);
        return this
    }
    $.fn.mR = $.fn.marRight = function (margin) {
        if (U(margin)) {
            return this.css('marginRight')
        }
        this.css('marginRight', margin);
        return this
    }
    $.fn.mH = $.fn.marHor = function (a) {
        return this.marLeft(a).marRight(a)
    }
    $.fn.mV = $.fn.marVer = function (a) {
        return this.marTop(a).marBottom(a)
    }
    MARGINAUTO = function () {
        z()
        o = outer = $.div('b', 500, 500).A()
        o.A(i = inner = $.div('r', 100, 100))
        i.mar('auto')
        o.mar('auto')
    }


}
function pad() {
    $.fn.pdB = function (a) {
        return this.css("padding-bottom", a || 0)
    }
    $.fn.pad = function (a) {
        return this.css("padding", a || 0)
    }
    $.fn.pad = function (padding) {
        if (U(padding)) {
            return this.css('padding')
        }
        this.css('padding', padding);
        return this
    }
    $.fn.padTop = function (padding) {
        if (U(padding)) {
            return this.css('paddingTop')
        }
        this.css('paddingTop', padding);
        return this
    }
    $.fn.padBottom = function (padding) {
        if (U(padding)) {
            return this.css('paddingBottom')
        }
        this.css('paddingBottom', padding);
        return this
    }
    $.fn.padLeft = function (padding) {
        if (U(padding)) {
            return this.css('paddingLeft')
        }
        this.css('paddingLeft', padding);
        return this
    }
    $.fn.padRight = function (padding) {
        if (U(padding)) {
            return this.css('paddingRight')
        }
        this.css('paddingRight', padding);
        return this
    }
    $.fn.padHor = function (a) {
        return this.padLeft(a).padRight(a)
    }
    $.fn.padVer = function (a) {
        return this.padTop(a).padBottom(a)
    }
    $.fn.pad = function (padding) {
        if (U(padding)) {
            return this.css('padding')
        }
        this.css('padding', padding);
        return this
    }
    $.fn.pT = $.fn.padTop = function (padding) {
        if (U(padding)) {
            return this.css('paddingTop')
        }
        this.css('paddingTop', padding);
        return this
    }
    $.fn.pB = $.fn.padBottom = function (padding) {
        if (U(padding)) {
            return this.css('paddingBottom')
        }
        this.css('paddingBottom', padding);
        return this
    }
    $.fn.pL = $.fn.padLeft = function (padding) {
        if (U(padding)) {
            return this.css('paddingLeft')
        }
        this.css('paddingLeft', padding);
        return this
    }
    $.fn.pR = $.fn.padRight = function (padding) {
        if (U(padding)) {
            return this.css('paddingRight')
        }
        this.css('paddingRight', padding);
        return this
    }
    $.fn.pH = $.fn.padHor = function (a) {
        return this.padLeft(a).padRight(a)
    }
    $.fn.pV = $.fn.padVer = function (a) {
        return this.padTop(a).padBottom(a)
    }
}
function bor() {
    $.fn.bdC = function (a) {
        return this.css("border-color", oO('c', a || 'r'))
    }
    $.fn.borderStyle = function (style) {
        this.css('border-style', style)
        return this
    }
    $.fn.borderColor = function (c) {
        this.css('border-color', oO('c', c))
        return this
    }
    $.fn.borderWidth = function (w) {
        this.css('border-width', w)
        return this
    }
    $.fn.bor = function (border) {
        if (U(border)) {
            return this.css('border')
        }
        this.css('border', border);
        return this
    }
    $.fn.bS = $.fn.borderStyle = function (style) {
        this.css('border-style', style)
        return this
    }
    $.fn.bdC = $.fn.borderColor = function (c) {
        this.css('border-color', oO('c', c))
        return this
    }
    $.fn.bW = $.fn.borderWidth = function (w) {
        this.css('border-width', w)
        return this
    }
    $.fn.bor = function (border) {
        if (U(border)) {
            return this.css('border')
        }
        this.css('border', border);
        return this
    }

    $.Ol = $.outline = function OL() {
        var g = G(arguments), o, ol
        o = g.N_ ? {w: g.f} :
            Oo('c', o) ? {c: g.f, w: g.s, s: g.t} : {w: g.f, s: g.s}
        /*
         if(S(g.f)){
         o= g.f.split(' ')
         ol= _.j([
         $r('c',o[0]),  oO('ow',o[1]||5) +'px',
         oO('os',o[2]||'-') ])
         $l(ol)
         return ol}
         ol=  _.j([
         $r('c',o.c),
         N(o.w)? o.w+'px'$r('ow',o.w),
         $r('os',o.s)
         ])*/
        //$l( ol )
        return ol
    }


}
wh();mar();pad();bor()
}
function sCss() {
    $.fn.s = $.fn.css
    $.qs = function f(sty, styVal) {
        var o = {}
        if (S(sty)) {
            addSty(o, sty, styVal)
        }
        else {
            _.e(
                sty, function (styVal, sty) {
                    addSty(o, sty, styVal)
                }
            )
        }
        return o
        function addSty(o, a, b) {
            if (N(b) && M.abs(b) > 10) {
                b = String(b) + 'px'
            }
            o[oO('s', a)] = oO(a, b, 'R')
            return o
        }
    }
    $.fn.ss = function () {
        var g = G(arguments),
            qs = $.qs(g.f)
        g.f = qs
        this.css.apply(this, g)
        return this
    }
    $.fn.k = $.fn.K = function () {
        $.fn.addClass.apply(this, arguments);
        return this
    }
    $.fn.tK = $.fn.ggK = $.fn.toggleClass
    $.fn.rK = $.fn.rmK = $.fn.xK = $.fn.removeClass


}
function color() {
    $.fn.al = function (z) {
        if (U(z)) {
            return this.css('opacity')
        }
        this.css('opacity', z)
        return this
    }

    $.C = function (Col, col) {
        var bd = $('body')
        bd.C(Col)
        if (col) {
            bd.col(col)
        }
        return $
    }
    $.fn.col = function (col) {
        return this.css('color', oO('c', col))
    }
    $.fn.C = function (col, c2) {
        if (c2) {
            return this.C(col).col(c2)
        }
        if (col == '*') {
            col = Yano.random()
        }
        return this.css('backgroundColor', oO('c', col))
    }


}
function backg() {
    $.fn.bg = $.fn.bgI = function (url) {//set background image
        this.bgI('url("' + $.src(url) + '")');
        return this
    }
    $.fn.bg = function (bg) {
        if (U(bg)) {
            return this.css('background')
        }
        this.css('background', bg)
        return this
    }
    $.fn.bgP = function (bg) {
        if (U(bg)) {
            return this.css('backgroundPosition')
        }
        this.css('backgroundPosition', bg)
        return this
    }
    $.fn.pBgI = $.fn.bp = function (x, y) {
        var g = G(arguments), x = g[0], y = g[1];
        x = N(x) ? x : 0;
        y = N(y) ? y : 0;
        this.css({backgroundPos: x + 'px ' + y + 'px'});
        return this
    }
}
function text() {
    $.fn.T = function () {
        var g = G(arguments)
        this.text.apply(this, g)
        return this
    }
    $.fn.fZ = $.fn.fS = $.fn.fontSize = function (z) {
        this.css('font-size', z)
        return this
    }
    $.fn.tA = $.fn.textAlign = function (z) {
        this.css('text-align', z)
        return this
    }
    $.Fo = $.font = $f = function (a, b) {
        var g = G(arguments)
        if (O(a)) {
            return ss(
                oB(b), {fz: a || 50}
            )
        }
        a = N(a) ? _S(a) : U(a) ? '' : a;
        var F = 'fantasy', W = 'normal', S = 'normal', Z = px(100);
        _.e(
            a.split(' '), function (p) {
                if (M(p[0])) {
                    p = p.split('/')
                    Z = p[0] + 'px' + p[1] ? '/' + p[1] + 'px' : ''
                }
                F = Oo('ff', p) || F
                W = Oo('fw', p) || W
                S = Oo('fs', p) || S
            }
        )
        return [W, S, Z, F].join(' ')
    }
    $.fn.T0 = function () {
        var d = this,
            g = G(arguments)
        d.E()
        g.e(
            function (str) {
                d.A(
                    $.h3(str)
                )
            }
        )
        return d
    }
}