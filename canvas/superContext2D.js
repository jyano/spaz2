$load(
    'globalComp', 'dimTrans', 'drawImage', 'colGrads',
     'ctxText','saveRestorePixel','lineProps','arcc','rectt',
     'drawText','drawPath'
)
function dimTrans(){
    x.H = function () {return this.canvas.height}
    x.W = function () {return this.canvas.width}
    x.Z = function () {
        this.scale.apply(this, arguments)
        return this
    }
    x.tl =  function (tX, tY, rt, sX, sY) {// this.translate.apply(this, arguments)
        this.translate(tX, tY)
        if (N(rt)) {this.rt(rt)}
        if (N(sX)) {this.sc(sX, sY)}
        return this
    }
    x.sc = function (x, y) {
        y = N(y, x)
        this.scale(x, y);
        return this
    }
    x.sX=function(x){return this.sc(x,1)}
    x.sY = function (y) {
        return this.sc(1, y)
    }
    x.rt = function (n) {
        this.rotate(M.tR(n));
        return this
    }
	x.tf = function () {
		this.transform.apply(this, arguments)
		return this
	}
	x.sT =  x.sTf = function () {
    this.setTransform.apply(this, arguments)
    return this
    
    }


}


function saveRestorePixel() {
    x.S = function () {
        this.save();
        return this
    }
    x.R = function () {
        this.restore();
        return this
    }
    x._ = x.temp = function (fn) {
        this.S();
        _.b(fn, this)();
        return this.R()
    
    
}
    x.cD = function () {
        this.createImageData()
        return this
    }
    x.gD = function () {
        var g = G(arguments), o, d
        o = {x: g.f, y: g.s, w: g.t, h: g[3]}
        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.w = N(o.w, this.W())
        o.h = N(o.h, this.H())
        d = this.getImageData(o.x, o.y, o.w, o.h)
        d.h = d.height
        d.w = d.width
        d.d = d.data
        return d
    }
    x.pD = function (d, x, y) {
        this.putImageData(d, N(x, 0), N(y, 0))
        return this
    }
}
function drawPath(){

   
    x.beg= x.bP = x.b = function () {var g = G(arguments)
        this.beginPath()
        if (g.u) {return this}
        
        if (g.N_) {this.mt(g.f, g.s)
            if (g.t) {this.c(g.t, g[3], g[4])}}
        else {this.c.apply(this, g)}
        return this
    }
    
    x.mt= function () {
        var x = this, g = G(arguments)
        if (g.A_) {
            x.mt(g.f[0], g.f[1])
            g.eR(function (pt) {
                x.lt(pt[0], pt[1])
            })
        }
        else {
            x.moveTo(N(g.f, 0), N(g.s, 0))
            if (N(g.t)) {
                x.lt(g.t, g[3])
            }
        }
        return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
    }
    x.lt= function () {
        var g = G(arguments), x = this
        if (g.A_ && A(g.f[0])) {
            x.lt.apply(x, g.f)
        }
        else if (O(g.s)) {
            g.e(function (pt) {
                x.lt(pt[0], pt[1])
            })
        }
        else {
            x.lineTo(g.f, g.s)
        }
        return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
    }
	x.pol= function (vs, ox, oy) {
		var x = this, i
		ox = N(ox, 0);
		oy = N(oy, 0)
		x.b().mt(_.f(vs)[0] + ox, _.f(vs)[1] + oy)
		_.e(_.r(vs), function (v) {
			x.lt(v[0] + ox, v[1] + oy)
		})
		return x.cp().s().f()
	}
	


   
   x.x = x.cP= x.cp = function () {
        this.closePath();
        return this
    }
    
    clip=  x.cl = function () {
        this.clip();
        return this
    }
    isInPoint=   x.iP = function (x, y) {
        return this.isPointInPath(x, y)
    }
}


function arcc() {
    arc = x.a = function () {
        var g = G(arguments), x = this,
            o = N(g.s) ? {x: g.f, y: g.s, r: g.t, rt1: g[3], rt2: g[4]} :
            {r: g.f}
        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.r = N(o.r, 50)
        o.rt1 = N(o.rt1, 0)
        o.rt2 = N(o.rt2, 360)
        o.ccw = g.n ? true : false
        this.arc(o.x, o.y, o.r, M.tR(o.rt1), M.tR(o.rt2), o.ccw)
        return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
    }
    arc2 = x.at = function () {
        var g = G(arguments), o
        o = {x1: g.f, y1: g.s, x2: g.t, y2: g[3], r: g[4]}
        this.arcTo(o.x1, o.y1, o.x2, o.y2, o.r)
        return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
    }
    quadratic = x.qt = function () {
        this.quadraticCurveTo();
        return this
    }
}
function lineProps(){
    lineWidth = x.l = x.lW = function (n) {
        var g = G(arguments)
        if (g.N) {
            this.lineWidth = n;
            return this
        }
        return this.lt(g.f, g.s) 
    }
    lineCap = x.lC = function (c) {
        var g = G(arguments);
        if(c=='r'){c='round'}
        else if (c == 'r') {c = 'square'}
        else if (c == 'b') {c = 'but'}
        this.lineCap = c
        return this
    }
    lineJoin = x.lJ = function (n) {
        var g = G(arguments);
        if (g.N) {
            this.lineJoin = n;
            return this
        }
    }
}
function rectt() {

    x.fr = x.fR  =function (x, y, w, h) {var g = G(arguments), o
        
        o = N(g[3])? {x: g.f, y: g.s, w: g.t, h: g[3]} :
        N(g.t) ?  {x: g.f, y: g.s, w: g.t, h: g.t} :
        {w: g.f, h: g.s}
        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.w = N(o.w, this.W())
        o.h = N(o.h, this.H())
        this.fillRect(o.x, o.y, o.w, o.h)
        return this
    }
    x.fr2=  x.fR2= function (x, y, w, h) {
        var g = G(arguments), o
        o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
            N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
            {w: g.f, h: g.s}
        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.w = N(o.w, this.W())
        o.h = N(o.h, this.H())
        
        this.fillRect(o.x- o.w/2, o.y- o.h/2, o.w, o.h)
        
        return this
    }
    x.sR = x.sr =   function (x, y, w, h) {
        var g = G(arguments), o
        o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
            N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
            {w: g.f, h: g.s}
        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.w = N(o.w, this.W())
        o.h = N(o.h, this.H())
        this.strokeRect(o.x, o.y, o.w, o.h)
        return this
    }
    x.sr2 = function (x, y, w, h) {
        var g = G(arguments), o
        o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
            N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
            {w: g.f, h: g.s}
        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.w = N(o.w, this.W())
        o.h = N(o.h, this.H())
        this.strokeRect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
        return this
    }
    x.cR = x.clR=  function (x, y, w, h) {
        var g = G(arguments), o
        o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
            N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
            {w: g.f, h: g.s}
        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.w = N(o.w, this.W())
        o.h = N(o.h, this.H())
        this.clearRect(o.x, o.y, o.w, o.h)
        return this
    }
    x.cr2 = x.cR2 = function (x, y, w, h) {
        var g = G(arguments), o
        o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
            N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
            {w: g.f, h: g.s}
        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.w = N(o.w, this.W())
        o.h = N(o.h, this.H())
        this.clearRect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
        return this
    }
    x.r =  function (x, y, w, h) {
        var g = G(arguments), o
        o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
            N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
            {w: g.f, h: g.s}
        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.w = N(o.w, this.W())
        o.h = N(o.h, this.H())
        this.rect(o.x, o.y, o.w, o.h)
        return this
    }
    x.r2 = function (x, y, w, h) {
        var g = G(arguments), o
        o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
            N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
            {w: g.f, h: g.s}
        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.w = N(o.w, this.W())
        o.h = N(o.h, this.H())
        this.rect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
        return this
    }
}
x.jD=function(img, p1, p2,p3,p4){var x=this, 
i = new Image
    $(i).load(function(i){
    
    D(p4)? x.drawImage(i.target, p1 , p2 ,p3,p4):
        D(p3)? x.drawImage(i.target, p1, p2, p3, p3):
        x.drawImage(   i.target,     p1||0, p2||0)
     
    })
    
    
    i.src = _.src(img)
    return i
}
x.cv=function(){return this.canvas}
x.u = function () {return this.cv().toDataURL()}
function globalComp(){
    globalCompOp = x.o = x.op = x.cO = function (o) {
        this.globalCompositeOperation = o;
        return this
    }
    x.Ds = x.dO = function () {
        this.o('destination-out');
        return this
    }
    x.dS = x.dI = function () {
        return this.o('destination-in')
    }
    x.sD = x.sI = function () {
        this.o('source-in');
        return this
    }
    x.Sd = x.sO = function () {
        this.o('source-out');
        return this
    } // why use this ??x.sd = x.sV= function(){ this.o('source-over'); return this }
    x.ds = x.dV = function () {
        this.o('destination-over');
        return this
    }
    x.SD = x.sT = x.sA = function () {
        this.o('source-atop');
        return this
    }
    x.DS = x.dT = x.dA = function () {
        this.o('destination-atop');
        return this
    }
    x.li = function () {
        this.o('lighter');
        return this
    }
    x.co = function () {
        this.o('copy');
        return this
    }
    x.xo = function () {
        this.o('xor');
        return this
    }
};
function colGrads(){
    x.f = x.fS = x.c = x.fs = function (c, C, l) {
        var g = G(arguments)
        if (g.u) {
            this.fill()
            if (g.p) {
                this.s()
            }
            return this
        }
        this.fillStyle = oO('c', c)
        if (C) {
            this.C(C)
        }
        if (N(l)) {
            this.l(l)
        }
        return this
    }
    x.s = x.C = x.ss = function () {
        var g = G(arguments), o
        if (g.u) {
            this.stroke();
            if (g.p) {
                this.f()
            }
            ;
            return this
        }
        o = g.N_ ?
        {l: g.f} :
        {C: g.f, l: g.s}
        if (o.C) {
            this.strokeStyle = oO('c', o.C)
        }
        if (N(o.l)) {
            this.l(o.l)
        }
        return this
    }
    x.al = function (al) {
        this.globalAlpha = al;
        return this
    }
    x.lG = x.linGrad = function (a, b, c, d) {
        return this.createLinearGradient(a, b, c, d)
    }
    x.rG = x.radGrad = function (a, b, c, d, e, f) {
        return this.createRadialGradient(a, b, c, d, e, f)
    }
    x.lg = function () {
        var ctx = this, g = G(arguments), o, gr
        o = g.O ? g.f : N(g.t) ? {x1: g.f, y1: g.s, x2: g.t, y2: g[3]} : {x2: g.f, y2: g.s}
        o.x1 = N(o.x1, 0)
        o.y1 = N(o.y1, 0)
        o.x2 = N(o.x2, 0)
        o.y2 = N(o.y2, 0)
        gr = ctx.createLinearGradient(o.x1, o.y1, o.x2, o.y2)
        if (o.cS) {
            gr.cS(o.cS)
            ctx.c(gr);
            return ctx
        }
        return gr
    }
    gr = CanvasGradient.prototype
    gr.cS = gr.s = gr.c = function (n, c) {
        var g = G(arguments), gr = this
        if (g.O) {
            _.e(g.f, function (n, c) {
                gr.cS(n, c)
            })
        }
        else {
            this.addColorStop(n, oO('c', c))
        }
        return this
    }
    x.lf = x.lG = ctx.lGr = ctx.linGrad = function (a, b, c, d) {
        return this.createLinearGradient(a, b, c, d)
    }
    x.rf = x.rG = ctx.rGr = ctx.radGrad = function (a, b, c, d, e, f) {
        return this.createRadialGradient(a, b, c, d, e, f)
    }
    x.pt = x.Pt = function () {
        return this.createPattern()
    }
};
function drawText() {
    x.F = function () {
        var g = G(arguments), o
        o = {f: g.f}
        if (g.N_) {
            o.f += 'px ' + (g.n ? 'Verdana' : 'Georgia')
        }
        this.font = o.f
        return this
    }
    
    x.ft = x.fT = function (x, y, t) {var g = G(arguments)
        if (g.N_) {
            this.fillText(g.t, g.f, g.s)
        }
        else {
            this.fillText(g.t, x.W() / 2, 200)
        }
    }
    
    x.mL = function () {
    } //x.T( ['r'],  [20 | '20px verdana], 'afsdsafd', [x, y] )
    
    
    x.t =  x.T = function () {
        var g = G(arguments), x = this, o, t
    
        o = g.S ? {t: g.f, x: g.t, y: g[3]} : // ONLY a str (so not to be confused with color)
            S(g.t) ? {c: g.f, f: g.s, t: g.t, x: g[3], y: g[4]} :
                g.N_ ? {f: g.f, t: g.s, x: g.t, y: g[3]} :
                    S(g.s) ? {c: g.f, t: g.s, x: g.t, y: g[3]} :
                    {t: g.f, x: g.s, y: g.t}
        o.x = N(o.x, x.W() / 2)
        o.y = N(o.y, 200)
        if (o.c) {
            x.c(o.c, o.c)
        }
        if (o.f) {
            g.n ? 
            x.F(o.f, '-') : 
            x.F(o.f)
        }
        x.fillText(o.t, o.x, o.y)
        return x
    }
    x.tA = function () {
    }
    x.tB = x.Bl = function () {
    }
  
   
}
old=function(){
 x.$ = function () {return $(this.cv())}
 x.D = function () {return this.s().f()}
}
function _pre() {
    x = ctx = CanvasRenderingContext2D.prototype
    xGr = CanvasGradient.prototype
    $.fn.ctx = function () {
        return this[0].getContext('2d')
    }
}
function toTick(){
x.cjsTick = x.tick = function (func) {
    var x = this
    cjs.tick(function () {
        x.temp(func)
    })
    return this
}
tempDrawOnTickerTick = x.t = function (fn) {
    var x = this;
    T.t(function () {
        x.temp(fn)
    });
    return this
}

}
DRAWIMAGE  = function () {$.C('b')
$CSS({
div:{
C:'r', P:10, M:10, B:10,

}, 
canvas: {outline: 'dashed yellow 20px'}
})
    
    d= $.d().A(
    c = $('<canvas>').at({width:900, height:400}))
    x = c.ctx()
     i = new Image()
     i.src = '/guy.png'
    $(i).load(function(){
        x.drawImage(i, 100, 100)
    })
    $.i('me', function(i){
        x.drawImage(i.target,400,100,500,200)
    })
    $.i('chicks', function (e,i) {
        x.drawImage(i[0], 400, 100, 300, 300)
    })
 
}
FILLSTY=function(){__C()
    x.f('g').r(20,20,400,400).f()
    x.s('b').r(120, 120, 100, 100).s()
}
LINETO = function () {__C()
    
    
    x.l(60).s('r').b().l(120, 120).l(100, 100)
    .lt(1000, 10).lt(200, 100).l(100, 400).s()
    
    x.s('b').b().lt(
    [20, 120], [100, 10], [170, 130],
     [300, 10], [-120, -120], [150, 400]
        ).s()


}
GCOMP=XORSTAMP= function(){__C()
    x.fit('chicks')
    x.xo()
  
   c.$(function(xx, yy){
       
       $.i('me', function(e,i){
       
           x.drawImage(
           i[0], 
               
               xx-($(i).W()/2), yy-($(i).H()/2)
           )
       
       })
       
    })

}
x._d = function (i, p2, p3, p4, p5) {
    var g = G(arguments), o
    var x = this
    if (g.S_ && g.f.length < 10000) {
        if (O(window['Q'])) {
            g[0] = Q.i(g[0])
        }
        else {
            return $.i(g[0], function (e, i) {
                $l('in $.i in x._d')
                x._d(i[0], p2, p3, p4, p5)
            })
        }
    }
    if (g[0] == this) {
        g[0] = g[0].cv()
    }
    g[1] = N(g[1], 0)
    g[2] = N(g[2], 0)
    this.drawImage.apply(this, g)
    return this
}
x.d = function (i,p2,p3,p4,p5) {
    var g = G(arguments), o
    o = {i: g.f, x: g.s, y: g.t}
    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    if (O(o.i)) {
        this.drawImage($(o.i)[0], o.x, o.y)
        return this
    }
    if (S(o.i)) {
        if (O(window['Q'])) {
            o.i = Q.i(o.i)
        }
        else {
          
          $.i(g[0], function (e, i) {
                $l('in $.i in x._d')
                x._d(i[0], p2, p3, p4, p5)
            })
        
        return this
        }
    }
    if (o.i.width) {
        o.x = o.x - o.i.width / 2
        o.y = o.y - o.i.height / 2
    }
    this._d(o.i, o.x, o.y)
}
function preloads(){
    x.Cd = function (i, x, y) {
        var ctx = this
        x = N(x, 100)
        y = N(y, 100)
        i = Q.i(i || 'me')
        ctx.d(i, x - i.W() / 2, y - i.H() / 2)
        return ctx
    }
x.scImCen = function (i, s, x, y) {
    if (S(i) && i.length < 100) {
        i = Q.i(i)
    }
    x = N(x, 0)
    y = N(y, 0)
    var w = this.W(),
     h = this.H(), 
     s = s || 1
    this.d(i, w * s / -2 + w / 2, h * s / -2 + h / 2, w * s, h * s)
}

x.scaleImCenSpiralMe = function () {
    var scaleNum = 1,
        that = this
    _.t(100, function () {
        that.scaleImCen('me', scaleNum)
        scaleNum *= .9
    })
}
x.scaleImCenSpiral = function () {
    var scaleNum = 1, that = this
    _.t(100, function () {
        that.scaleImCen('me', scaleNum)
        scaleNum *= .9
    })
}
}
x.dC = function f(i, x, y) {
    var that = this
    i = i || 'me'
    x = x || 100
    y = y || 100
    if (U(x)) {//draw img in center of can
        $.i(i, function (i) {
            that.draw(i, (that.W() / 2) - (i.W() / 2), (that.H() / 2) - (i.H() / 2))
        })
    }
    else {//draw it by specifying location of its center
        y = y || x
        $.i(i, function (i) {
            that.dr(i, x - i.W() / 2, y - i.H() / 2)
        })
    }
    return this
} //draw it where u say, but as if its reg point was its center
x.drawRegCenter = function f(i, x, y) {
    var that = this
    $.i(i, function (e,i) {
        that.draw(i[0], 
        (that.W() / 2) - (i.W() / 2),
         (that.H() / 2) - (i.H() / 2))
    })
    return this
}
x.fit = function f(i, x, y) {
    i = i || 'me'
    x = N(x, 0)
    y = N(y, 0)
    this.d(i, x, y, this.W(), this.H())
    return cv
}
x.W=function(){
return this.cv().width}
x.H=function(){
return this.cv().height}
x.cr = function (x1, y1, x2, y2) {
    var ctx = this,
    cv=ctx.cv(),
    i = this.u()
    
    if (A(x1)) {
        return this.crop(
            x1[0], x1[1], x1[2] - x1[0], x1[3] - x1[1]
        )
    }
    this.d(i, x1, y1, x2, y2, 0, 0, $(cv).W(),$(cv).H())
    return cv
}
CANTEXT=function(){

__C()
    
    x.t('hello', 100,100)

}
CANCROP=function(){


__C()

    x.d("me")
    x.cr()
}
DRAWAPP=function(){__C()
    
    c.W(window.innerWidth)
    c.H(window.innerHeight)
    
    function draw(){
    x.s('r').f('o')
    x.fR(400,300,100, 220)
    x.f('b').fR(0, 0, 100, 220)
    x.f('r').fr2(0, 0, 100, 220)
    x.jD('me', 400, 500)
   // x.jD('me', 200, 400,800,300)
    }
    
    draw()
    
    _.in(function(){
        x.S()
        x.rt(10)
        draw()
        x.R()
        _.in(function () {
            x.S() 
        x.tl(200,200);draw()
            x.R()
            x.tl(20, 20);
            draw()
            
        })
    
    })


}
DRAWN=function(){__C()
    
    x.s('u').l(6).lC('round')
    

}
function shadow(){
SDW=function(){__C()

    x.xShadow = 3
    x.yShadow = 3
    x.shadowBlur = 10
    x.shadowStyle = 'red'
   
   x.r(188, 40, 200, 100).f('r')
    .shC('#999').shB(20).shX(15).shY(15).f() 
    
}
x.shC = function (c) {
    this.shadowColor = oO('c', c)
    return this
}
x.shX = function (c) {
    this.shadowOffsetX = c
    return this
}
x.shY = function (c) {
    this.shadowOffsetY = c
    return this
}
x.shB = function (c) {
    this.shadowBlur = c
    return this
}
}
CANNTX=function(){__C()
    
    x.setFont('Helsinki 23px')
    x.f('b').fillText('haffasfsf', 400, 500)

}
RAWPX=function(){
    __C()
    i= new Image()
    $(i).load(function(e){
    x.drawImage(e.target, 0, 0)
    d=x.getImageData(0,0,200,200)
    for (var i = 0; i < d.data.length; i += 4) {
        d.data[i] = 255 - d.data[i];
        d.data[i + 1] = 255 - d.data[i + 1];
        d.data[i + 2] = 255 - d.data[i + 2];
        d.data[i + 3] = 255;
    }
        x.putImageData(d, 0, 0);
    })
    i.src = _.src('me')
}



