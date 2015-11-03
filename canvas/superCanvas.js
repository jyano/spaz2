$.tEl=function(a,b,c){
    if(O(a)){
        a=O(a.e)?a.e:O(a.c)?a.c:a
        a=$(a)[0]
        if(_.isElement(a)){
            return a
        }
    }
}
$.tC=$.tCan=function(a){
    if(_.isObject(a=$.tEl(a)||a)){
        return a.canvas?a.canvas:
            s$(a.toString()).contains('Canvas')?Q(a)[0]:0
    }
}
$.iC=$.isCan=function(can){
    if(O(can)){
        return $(can)[0].constructor.name=="HTMLCanvasElement"
    }
}

$.fit=function(a,b,c){
    return $.c(c||'r',b||700,b||700).A()
    .fit(a||'me')
}

$.fn.Cv = $.fn.Can = function () {
    var c
    c = $.c.apply($, G(arguments))
    this.A(c)
    return c
}
$.c=$.can=function(c,width,h,x,y){
    var g=G(arguments),o,el
    o=g.S_?
    {c:g.f,w:g.s,h:g.t,x:g[3],y:g[4]}:
    {w:g.f,h:g.s,x:g.t,y:g[3]}
    o.w=o.w||1200
    o.h=o.h||600
    o.c=o.c||'x'
    el=$('<canvas>')
    el.attr({width:o.w,height:o.h})
    el.C(o.c)
    if(N(o.x)){
        el.abs(o.x,o.y)
    }
    if(g.p){
        el.drag()
    }
    el.A().al(.8)
    
    return superCanvas(el)
 
}
FLEXCAN=function(){z()
    
    

    c1 = $.c('r', 200,400)
    c2 = $.c('b', 50, 50)
    c4 = $.c('y', 100, 10)
    
    d = $.d().C('o')
    
    d.A(c1,c2,c4)
    
    
    d.css({
    
     'display': 'flex',
    'justify-items':'center'
    })

    
    $('canvas').attr({
    
    width:'auto',height:'auto'
    
    }).css({
    
        width: 'auto', height: 'auto',
        'flex-grow':1,
        'flex-shrink': 1
    
    })
    
    
    $('canvas').e(function(){
        
        $(this).ctx().jD('me')
    })
    
    

}

function superCanvas(el) {
    el = $(el)
    //to be called internally by $.c //works on FIRST canvas in jquery obj
    el.canvas = el[0]
    el.context = el.canvas.getContext('2d')
    if (O(window['cjs'])) {
        el.stage = new cjs.Stage(el.canvas) ///////////////////////////////
    }
    _superCanvas(el)
    return el

}

CANBOR=function(){

$CSS({canvas: {

B:'33px dashed red'
}})
__C()
    x.jD('me')
}

function _superCanvas(el) {
   
   el.cx=function(){
   return this[0].getContext('2d') 
   }
   
   
    el.W = function (width) {
        var args = G(arguments)
        width = args[0]
        if (U(width)) {
            return this.attr('width')
        }
        if (args.N) {
            var dataUrl = this.toDataURL()
        }
        this.attr('width', width)
        if (args.N) {
            this.fit(dataUrl)
        }
        return this
    }
    el.H = function (height) {
        var args = G(arguments)
        height = args[0]
        if (U(height)) {
            return this.attr('height')
        }
        if (args.N) {
            var dataUrl = this.toDataURL()
        }
        this.attr('height', height)
        if (args.N) {
            this.fit(dataUrl)
        }
        return this
    }
    el.WH = function (w, h) {
        if (U(w)) {
            var width = this.W(),
                height = this.H()
            return {
                width: width, w: width,
                height: height, h: height
            }
        }
        h = h || w
        return this.W(w).H(h)
    }
    el.Z = function (d) {
        d = d || 5;
        return this.WH(d * 100, d * 100)
    }
    el.osL=el.offsetLeft = el.l = function (theOffset) {
        if (!theOffset) {
            return offsetLeft(x.q)
        }
        return parseInt(theOffset - x.offsetLeft())
    };
    //  el.ox=function(){return x.q.q.offset().left}
    el.osT= el.offsetTop = el.t = function (y) {
        if (!y) {
            return offsetTop(y.q)
        }
        ;
        return parseInt(y - x.offsetTop())
    };
    //  el.oy=function(){return x.q.q.offset().top}
    el.cp=el.copy = function () {
        el.img.src(el.toDataURL())
        return el
    }
    el.ps=el.paste = function () {
        var g = G(arguments)
        if (g.N) {
            el.clearRect()
        }
        if (g.p) {
            el.fit(el.img)
        }
        else {
            el.draw(el.img.src())
        }
    }
    el.S=el.save = function () {
        el.context.save()
        return el
    }
    el.R=el.restore = function () {
        el.context.restore()
        return el
    }
    //dont mix up with element/jquery alpha
    //maybe opacity for element and alpha for canvas?
    el.al= el.globalAlpha = el.alpha = el.op = function (alpha) {
        if (U(alpha)) {
            return this.context.globalAlpha
        }
        this.context.globalAlpha = alpha
        return this
    }
    el.comp = el.globalCompositionOperation = el.gc = function (compOp) {
        if (U(compOp)) {
            return this.context.globalCompositeOperation
        }
        this.context.globalCompositeOperation = oO('g', compOp)
        return this
    }
    //normal prop (as methods)
    el.lW=el.lineWidth = function (w) {
        if (U(w)) {
            return el.context.lineWidth
        }
        el.context.lineWidth = w
        return el
    }
    el.lC=el.lineCap = function (w) {
        if (U(w)) {
            return el.context.lineCap
        }
        el.context.lineCap = w
        return el
    }
    el.lJ=el.lineJoin = function (w) {
        if (U(w)) {
            return el.context.lineJoin
        }
        el.context.lineJoin = w
        return el
    }
    el.URL = el.dataURL = el.toDataURL = function () {
        return el.canvas.toDataURL()
    }
    //wap specific
    el.snap = function (func) {
        pams = {
            d: el.toDataURL(),
            dats: el.dats
        }
        $.post('/img', pams, func)
    }
    el.img = $.img()
    el.img.src(el.toDataURL())
    el.dots = function () {
        el.copy()
        el.DOTS = []
        el.dats = []
        el.$(function (x, y) {
            x = parseInt(x)
            y = parseInt(y)
            el.cir(x, y)
            el.DOTS.push([x, y])
            el.dats.push(x)
            el.dats.push(y)
            el.line(el.DOTS)
        })
        
        el.$$(function (X, Y) {
            var du
            //el.C('X')
            el.off('click')
            el.closePath()  //el.paste() // el.copy()  //el.save()
            el.clear() //du = el.toDataURL()
            el.clip()
            el.paste() //el.fit(du)
        })
        return el
    }
    
    
    el.me = function me(n) {//randomly draw my face
        var g = G(arguments), n = g[0] || 200
        if (x.me.d) {
            clearInterval(x.me.d);
            x.me.d = false
        }
        else {
            x.me.d = I(function () {
                x.d($w['mug'] || 'me', _r(x.w() - 200), _r(x.w() - 200))
            }, n)
        }
        return x
    }
    el.me.shouldDrawMeId = false
    el.mugX = function (m) {
        qP('/mug', {u: m}, function (m) {
            x.fit(m)
        })
        return x
    }
    el.tick = function () {
        var ctx = this.ctx()
        ctx.tick.apply(ctx, arguments)
        return this
    }
    el.URL = el.dataURL = el.toDataURL = function () {
        return el.canvas.toDataURL()
    }
    superCanvasDraw(el)
    superCanvasGradient(el)
    superCanvasPixels(el)
    superCanvasText(el)
    superCanvasTransform(el)
    superCanvasPath(el)
    superCanvasEvents(el)
    superCanvasShadow(el)
    cv = el
    cv.drawMug = cv.me = function me(interval) {
        //randomly draw my face
        var that = this, g = G(arguments), args = g,
            interval = args[0] || 200
        if (that.drawMug.shouldDrawId) {
            clearInterval(that.drawMug.shouldDrawId)
            that.drawMug.shouldDrawId = false
        }
        else {
            that.drawMug.shouldDrawId = setInterval(function () {
                that.draw(window['mug'] || 'me', _.random(that.W() - 200), _.random(that.W() - 200))
            }, interval)
        }
        return this
    }
    cv.drawMug.shouldDrawId = false
    cv.fitMug = cv.mug = function (user) {
        var that = this
        $.post('/mug', {u: user}, function (userMug) {
            that.fit(userMug)
        })
        return this
    }
    cv.sun = function (a, b, s) {
        s = s || 1;
        this.rG(
            [[a || 0, b || a || 0], s * 100, s * 500],
            {'y': 0, 1: tCl('p', 0)},
            600,
            600
        )
    }
    cv.ball = function (b) {
        b = b || {}
        var dir = b.d || false,
            px = b.x || 100, py = b.y || 100, rad = b.r || 100,
            per = b.p || Math.PI * 2,
            ss = $r('c', b.s),
            fs = $r('c', b.f),
            lw = D(b.l) ? b.l : 4
        return x.com('b', ['a', px, py, rad, 0, per, dir], {f: fs, s: ss, w: lw}, 'f', 's')
    }
    cv.paperBag = function (x, y, width, height, blowX, blowY) {
        x = x || 100
        y = y || 100
        width = width || 100
        height = height || 100
        blowX = blowX || 100
        blowY = blowY || 100
        var lx, ly;
        this.ctx().strokeStyle = 'Red'
        this.ctx().beginPath();
        this.ctx().moveTo(x, y);
        this.ctx().quadraticCurveTo(x + width / 2 | 0, y + height * blowY | 0, x + width, y);
        this.ctx().quadraticCurveTo(x + width - width * blowX | 0, y + height / 2 | 0, x + width, y + height);
        this.ctx().quadraticCurveTo(x + width / 2 | 0, y + height - height * blowY | 0, x, y + height);
        this.ctx().quadraticCurveTo(x + width * blowX | 0, y + height / 2 | 0, x, y);
        return this
    }
    return el
}

TXC = function () {
     __C()
    c.dr('me')
    c.paperBag()
} //uses paper bag! ?
function superCanvasGradient(gradient) {
    addColorStop = function rc(gradient, stop, color) {

        // pass only a gradient -> function with gradient curried
        // add a color stop to a gradient
        if (U(stop)) {
            return _.partial(rc, gradient)
        }
        gradient.addColorStop(stop, oO('c', color))
        return gradient
    }
    superCanvasGradient = function (el) {
        CanvasGradient.prototype.stop = function (num, col) {
            var that = this
            if (N(num)) {
                this.addColorStop(num, oO('c', col))
            }
            if (A(num)) {
                _.each(arguments, function (arg) {
                    that.stop(arg[0], arg[1])
                })
            }
            return this
        }
        el.linearGradient = el.lG = el.createLinearGradient = function (a, b, c, d) {
            a = a || 0
            b = b || 0
            c = c || this.W()
            d = d || this.H()
            return SuperGradient(this.context.createLinearGradient(a, b, c, d))
        }
        el.linGradBlackToWhite = function () {
            grd = this.linearGradient(0, 0, this.W(), 0)
            grd.stop(0, "black").stop(1, "white")
            this.fillStyle(grd)
            this.fillRect()
        }
        el.linGradDiagnal = function (grd) {
            grd = grd || this.lG()
            grd.stop(0, 'r')
            grd.stop(.1, 'r')
            grd.stop(.15, 'b')
            grd.stop(.2, 'r')
            grd.stop(.5, 'y')
            grd.stop(1, 'b')
            this.fillStyle(grd)
            this.fillRect()
            return this
        }
        el.radialGradient = el.rG = el.createRadialGradient = function rg() {
            var g = G(arguments)
            g[0] = g[0] || 200
            g[1] = g[1] || 200
            g[2] = g[2] || 100
            g[3] = g[3] || 250
            g[4] = g[4] || 250
            g[5] = g[5] || 800
            return this.context.createRadialGradient(g[0], g[1], g[2], g[3], g[4], g[5])
        }
        el.radGradSample = function () {
            var grd = this.rG()
            addColorStop(grd, 0, 'r')
            addColorStop(grd, .15, 'b')
            addColorStop(grd, .2, 'r')
            addColorStop(grd, .5, 'y')
            addColorStop(grd, 1, 'b')
            this.fillStyle(grd)
            this.fillRect()
            return this
        }
        el.growingSun = function () {
            var that = this
            var a = 0,
                b = 1000,
                grd
            var func = function () {
                a += 1
                b -= 2
                grd = that.rG(200, 200, a, 290, 270, b)
                grd.addColorStop(.1, 'Yellow')
                grd.addColorStop(.3, 'Red')
                grd.addColorStop(1, 'Violet')
                //  gradient = x.grad( [200, 200, a, 290, 270, b],  { y: .1, r: .3,  V:1 } )
                that.fillStyle(grd)
                that.fillRect()
            }
            setInterval(func, 100)
        }
        el.pattern = el.createPattern = function (im, pat) {
            //im = im || $.img('me')[0]
            var pattern = this.context.createPattern(im, pat || 'repeat')
            return pattern
        }
        el.testPattern = function () {
            var that = this
            $.img('me', function (img) {
                var pattern = that.pattern(img[0], 'repeat')
                that.fillStyle(pattern).fillRect()
            })
        }
    }
    gradient.stop = function (stop, color) {
        addColorStop(gradient, stop, color);
        return gradient
    }
    gradient.stops = function (stopObject) {
        _.e(stopObject,
            function (v, k) {
                var o = S(v) ? {k: k, v: v} : {k: v, v: k}
                addColorStop(gradient, o.k, $r('c', o.v))
            })
    }
    return gradient
}

function superCanvasPixels(el) {
    el.gD = el.getData = function (x, y, w, h) {
        //historic.. dont delete ! data = x('G', X, Y, w, h).res
        var g = G(arguments),
            x = g[0] || 0,
            y = g[1] || 0,
            w = g[2] || this.W(),
            h = g[3] || this.H(),
            data = this.context.getImageData(x, y, w, h)
        // data.h = data.height
        // data.w = data.width
        // data.d = data.data
        return data
    }
    
    el.pD = el.putData = function (data, x, y) {
        x = x || 0
        y = y || 0
        this.context.putImageData(data, x, y)
        return this
    }
    el.gP = el.getPut = function (a, x, y) {
        var g = G(arguments),
            a = g[0],
            x = g[1],
            y = g[2],
            data = this.gD.apply(this.context, a)
        if (g.n) {
            this.clear()
        }
        return x.pD(data, x, y)
    }
    el.pixelsNegative = function () {
        var imgData = this.gD(),  //gD(0,0, this.W(), this.H())
            data = imgData.data
        for (var i = 0; i < data.length; i += 4) {
            data[i] = 255 - data[i];
            data[i + 1] = 255 - data[i + 1]
            data[i + 2] = 255 - data[i + 2]
            data[i + 3] = 255
        }
        this.pD(imgData) //  this.pD(data,0,0)
    }
    el.pixelsInvert = function () {
        var imgData = this.gD(),
            data = imgData.data
        for (var i = 0; i < data.length; i += 4) {
            data[i] = 225 - data[i];
            data[i + 1] = 225 - data[i + 1]
            data[i + 2] = 225 - data[i + 2]
        }
        this.pD(imgData)
    }
    el.pixelsGrayscale = function () {
        var imgData = this.gD(),
            data = imgData.data
        for (var i = 0; i < data.length; i += 4) {
            var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            data[i] = avg
            data[i + 1] = avg
            data[i + 2] = avg
        }
        this.pD(imgData) //  this.pD(data,0,0)
    }
    el.pixelsFade = function () {
        var imgData = this.gD(),
            data = imgData.data
        for (var i = 7; i < _.size(data); i += 4) {
            data[i] = 90
        }
        this.pD(imgData)
        return el
    }
}

function superCanvasTransform(el) {
    //give scale cos(rads), skew:sin(rads)  ??
    el.norm = function () {
        el.context.scale(this.W() / 10, this.H() / 10)
        return this
    }
    
    el.scale = el.sc = function (X, Y) {
        var g = G(arguments),
            X = g[0] || 1, Y = g[1] || X
        x.x.scale(X, Y)
    }
    
    
    el.translate = el.tr = function (X, Y) {
        var g = G(arguments),
            X = g[0] || 1, Y = g[1] || X
        x.x.translate(X, Y)
    }
    
    
    el.rotate = el.rt = function (r) {
        var g = G(arguments),
            r = g[0] || 1
        //r=pi(-6)*r
        //x.fr(0,0,1,1)
        //x({f:$r('c')
        x.x.rotate(r)
    }
    
    
    el.transform = el.tf = function rc(a, c, e, b, d, f) {
        var g = G(arguments)
        if (g.p) {
            return rc(2, 0, 0, 2, 0, 0)
        }
        return x('t', a, c, e, b, d, f)
    }
    
    el.setTransform = el.stf = function rc(a, c, e, b, d, f) {
        var g = G(arguments)
        if (g.p) {
            return rc(2, 0, 0, 2, 0, 0)
        }
        
        return x('st', a, c, e, b, d, f)
    }
    
    return el
}


function superCanvasText(el){
    el.font = function (font){
        this.context.font = HTML5.font(font)
        return this
    }
    el.strokeText = function (t, X, Y) {
        var g = G(arguments),
            t = g[0],
            X = g[1] || 100,
            Y = g[2] || X
        this.context.strokeText(t, X, Y)
        return this
    }
    el.fillText = function (t, X, Y) {
        var g = G(arguments),
            t = g[0],
            X = g[1] || 100,
            Y = g[2] || X
        if (g.p) {
            this.tx(t, X, Y, '-')
            this.tx(t, X, Y)
        }
        else this.context.fillText(t, X, Y)
        return this
    }
    el.measureText = el.measure = function (t) {
        return this.context.measureText(t)
    }
    el.textWidth = function (t) {
        return parseInt(this.measureText(t).width)
    }
    el.centerHorizontalText = function (text, height) {
        this.fillText(text,
            this.W() / 2 - this.textWidth(text) / 2,
            height
        )
        return this
    }
}
function superCanvasDraw(el) {
    mug();drawImage();crop();scaleIm()
    function drawImage(){
    //this just a simple proxy to drawImage // dont use?
    el.drawImage = el.dI = function () {
        var el = this, g = G(arguments)
        g[1] = N(g[1]) ? g[1] : 0
        g[2] = N(g[2]) ? g[2] : 0
        $(el)[0].getContext('2d').drawImage.apply(
            $(el)[0].getContext('2d'), g
        )
    }
    //this will create the image (from string), and then draw it
    el.dr= el.draw = function () {
    $l('el.dr')
        var el = this, g = G(arguments)
        $.i(g.f, function (i) {
            g[0] = i
            __g=g
            el.dI.apply(el, g)
        })
    }
	    
    el.fit = function f(i, x, y) {var el = this//$l('fit: - el.W():' + el.W())
        i = i || 'me'
        x = x || 0
        y = y || 0
        el.draw(i, x, y, el.W(), el.H())
        //el.draw(img, X, Y, el.width(), el.height())
        return el
    }
    
    el.dC = function f(i, x, y) {
        var that = this
        i = i || 'me'
        x = x || 100
        y = y || 100
        if (U(x)) {//draw img in center of can
            $.img(i, function (i) {
                that.draw(i, (that.W() / 2) - (i.W() / 2), (that.H() / 2) - (i.H() / 2))
            })
        }
        else {//draw it by specifying location of its center
            y = y || x
            $.img(i, function (i) {
                that.draw(i, x - i.W() / 2, y - i.H() / 2)
            })
        }
        return this
    }
    //draw it where u say, but as if its reg point was its center
    el.drawRegCenter = el.dC2 = function f(i, x, y) {
        var that = this
        $.img(i, function (i) {
            that.draw(i, (that.W() / 2) - (i.W() / 2), (that.H() / 2) - (i.H() / 2))
        })
        return this
    }
    el.Cd = function (a, x, y) {
        var that = this
        a = a || 'me'
        x = x || 100
        y = y || 100
        $.img(a,
            function (img) {
                that.drawImage(
                    img.src,
                    x - img.W() / 2,
                    y - img.H() / 2
                )
            })
    }
    }
    function mug(){
    el.drawMug = el.me = function me(interval) {
        //randomly draw my face
        var that = this, g = G(arguments), args = g,
            interval = args[0] || 200
        if (that.drawMug.shouldDrawId) {
            clearInterval(that.drawMug.shouldDrawId)
            that.drawMug.shouldDrawId = false
        }
        else {
            that.drawMug.shouldDrawId = setInterval(function () {
                that.draw(window['mug'] || 'me', _.random(that.W() - 200), _.random(that.W() - 200))
            }, interval)
        }
        return this
    }
    el.drawMug.shouldDrawId = false
    el.fitMug = el.mug = function (user) {
        var that = this
        $.post('/mug', {u: user}, function (userMug) {
            that.fit(userMug)
        })
        return this
    }
    }
    function crop(){
    el.crop = function rc(x1, y1, x2, y2) {
        var el = this
        if (A(x1)) {
            return rc(x1[0], x1[1], x1[2] - x1[0], x1[3] - x1[1])
        }
        el.draw(
            el[0].toDataURL(),
            x1, y1, x2, y2,
            0, 0, this.W(), this.H()
        )
        return this
    }
    el.crop = function rc(x1, y1, x2, y2) {
        if (A(x1)) {
            return rc(
                x1[0], x1[1],
                x1[2] - x1[0],
                x1[3] - x1[1]
            )
        }
        this.context.drawImage(x, x1, y1, x2, y2, 0, 0, this.W(), this.H())
        return this
    }
    }
    function scaleIm(){
    el.scaleImCen = function (img, s) {
        var w = this.W(), h = this.H(), s = s || 1
        this.draw(img,
            w * s / -2 + w / 2,
            h * s / -2 + h / 2//+ w/2
            ,
            w * s,
            h * s)
    }
    el.scaleImCenSpiralMe = function () {
        var scaleNum = 1,
            that = this
        _.times(100, function () {
            that.scaleImCen('me', scaleNum)
            scaleNum *= .9
        })
    }
    el.scaleImCenSpiral = function () {
        var scaleNum = 1,
            that = this
        _.times(100, function () {
            that.scaleImCen('me', scaleNum)
            scaleNum *= .9
        })
    }}
    return this
}
function superCanvasPath(el) {
    
 
    el.f= el.fS =   el.fs = el.fill = function (c) {
       if(U(c)) {el.context.fill()}
       else {el.context.fillStyle = oO('c', c)}
        return el
    }
    el.s = el.stroke = el.sS = function (c) {
        var el = this
        if (U(c)) {
            el.context.stroke()
        }
        else {
            el.context.strokeStyle = oO('c', c)
        }
        return el
    }//ss
    el.fsl = function (fS, sS, l) {
        this.context.f(fS)
        if (sS) {
            this.context.s(sS)
        }
        if (N(l)) {
            this.context.l(l)
        }
        return this
    }
    el.cP=el.closePath = function () {
        el.context.closePath()
        return el
    }
    el.bP=el.beginPath = el.begin = function (x, y) {
        el.context.beginPath()
        if (N(x)) {
            el.moveTo(x, y)
        }
        if (A(x)) {
            el.moveTo(x[0], x[1])
        }
        return el
    }
    el.mT=el.moveTo = function (x, y) {
        el.context.moveTo(x, y)
        return el
    }
    el.lT=el.lineTo = function (x, y) {
        if (A(x)) {
            _.e(arguments,
                function (x) {
                    el.lineTo(x[0], x[1])
                })
        }
        el.context.lineTo(x, y)
        return el
    }
    el.cl=el.clip = function () {
        el.context.clip()
        return el
    }
    el.fR= el.fillRect = el.fr = function (a, b, c, d) {
        a = a || 0
        b = b || 0
        c = c || el.W()
        d = d || el.H()
        el.context.fillRect(a, b, c, d)
        return this
    }
    el.fillRect = el.fr = function (a, b, c, d) {
        a = a || 0
        b = b || 0
        c = c || this.W()
        d = d || this.H()
        this.context.fillRect(a, b, c, d)
        return this
    }
    el.colorFillRect = el.cfr = function (a) {
        var args = G(arguments)
        this.save()
        this.fillStyle = a
        this.fillRect(0, 0, this.W(), this.H())
        this.restore()
        return this
    }
    el.roundRect = function (X, y, width, height, radius) {
        el = this.context
        el.beginPath()
        el.moveTo(X + radius, y);
        el.lineTo(X + width - radius, y);
        el.quadraticCurveTo(X + width, y, X + width, y + radius);
        el.lineTo(X + width, y + height - radius);
        el.quadraticCurveTo(X + width, y + height, X + width - radius, y + height);
        el.lineTo(X + radius, y + height);
        el.quadraticCurveTo(X, y + height, X, y + height - radius);
        el.lineTo(X, y + radius);
        el.quadraticCurveTo(X, y, X + radius, y);
        el.closePath();
        el.fill()
        return el
    }
    el.roundRect.test = function () {
        el.roundRect(100, 100, 200, 400, 20)
    }
    //clear screen [+ fill with color || run fx]
    el.clr= el.clear = el.clearRect = function (a, b, c, d) {
        if (S(a)) {
            el.fillStyle(a);
            return el.fillRect()
        }
        a = a || 0
        b = b || 0
        c = c || el.W()
        d = d || el.H()
        el.context.clearRect(a, b, c, d)
        // if(F(a)){a()}
        return el
    }
    el.hL= el.horizontalLine = el.lnh = function (X, Y, l) {
        var g = G(arguments), X = g[0], Y = g[1], l = g[2],
            X2 = g.p ? X + l : g.n ? X - l : l
        return x.ln(X, Y, X2, Y)
    }
    
    el.vL= el.verticalLine = el.lnv = function (X, Y, len) {
        var g = G(arguments),
            X = g[0],
            Y = g[1],
            len = g[2],
            Y2 = g.p ? Y + len
                : g.n ? Y - len
                : len
        return x.ln(X, Y, X, Y2)
    }
   
   curves();drawLine();
   function curves(){
    
    el.arc = function (a, b, c, d, e, f, g) {
        el.context.arc(a, b, c, d, e, f, g)
        return el
    }
    
    el.arcTo = el.a2 = function a2(X) {
        var g = G(arguments)
        if (A(X)) {
            return _a(a2(x), X)
        }
        this.arcTox([0] || 50, g[1] || 40, g[2] || 100, g[3] || 100, g[4] || 30)
        this.stroke()
        return this
    }
    el.bezierCurveTo = function (a, b, c, d, e, f, g) {
        this.context.quadraticCurveTo(a, b, c, d, e, f, g)
        return this
    }
    el.quadraticCurveTo = function (a, b, c, d, e, f, g) {
        this.context.quadraticCurveTo(a, b, c, d, e, f, g)
        return el
    }
    el.curveTo = function (a, b, c, d, e, f, g) {
        if (N(e)) {
            return this.bezierCurveTo(a, b, c, d, e, f)
        }
        else return this.quadraticCurveTo(a, b, c, d, e, f, g)
    }
    
       
       
    el.cir = function (X, Y, R, fs, ss) {
        var g = G(arguments),
        X = g[0] || 200, Y = g[1] || 200, r = g[2] || 1,
        fs = g[3], 
        ss = g[4]
        el.bP()
        el.arc(X, Y, r, 0, 7, false)
        el.fS(fs)
        el.sS(ss)
        el.s().f()
        return el
    }
   }
   
    
   
   function drawLine(){
   //draw line ( [x,y],[x,y] || x,y,x,y )
    //draw multiple unconnected lines ( [[],[]],[[],[]] || [],[] )
    //fresh start
    el.ln = el.line = function rc(p) {
        var args = G(arguments), p = args[0]
        if (N(args[0])) {
            el.begin(args[0], args[1])
            el.lineTo(args[2], args[3])
            el.stroke()
            return el
        }
        if (A(args[0]) && N(args[0][0])) {
            el.begin(args.f)
            _.e(args.r, function (p) {
                el.lineTo(p[0], p[1])
            })
            el.stroke()
            return el
        }
        if (AA(p)) {
            _.e(args,
                function (p) {
                    el.line.apply(null, p)
                })
        }
        el.stroke()
        return el
    }
    el.fitEx = function () {
        this.ln([0, 0], [this.W(), this.H()], [0, this.W()], [this.H(), 0])
    }
    el.sun = function (a, b, s) {
        s = s || 1;
        this.rG([[a || 0, b || a || 0],
                s * 100, s * 500],
            {'y': 0, 1: tCl('p', 0)},
            600, 600)
    }
    el.ball = function (b) {
        b = b || {}
        var dir = b.d || false,
            px = b.x || 100, py = b.y || 100, rad = b.r || 100,
            per = b.p || Math.PI * 2,
            ss = $r('c', b.s),
            fs = $r('c', b.f),
            lw = D(b.l) ? b.l : 4
        return x.com(
            'b', ['a', px, py, rad, 0, per, dir],
            {f: fs, s: ss, w: lw}, 'f', 's')
    }
    el.pointInPath = el.pip = function (c, a, b) {
        return this.context.isPointInPath(a, b)
    }
    el.paperBag = function (x, y, width, height, blowX, blowY) {
        x = x || 100
        y = y || 100
        width = width || 100
        height = height || 100
        blowX = blowX || 100
        blowY = blowY || 100
        var lx, ly;
        this.beginPath();
        this.moveTo(x, y);
        this.quadraticCurveTo(x + width / 2 | 0, y + height * blowY | 0, x + width, y);
        this.quadraticCurveTo(x + width - width * blowX | 0, y + height / 2 | 0, x + width, y + height);
        this.quadraticCurveTo(x + width / 2 | 0, y + height - height * blowY | 0, x, y + height);
        this.quadraticCurveTo(x + width * blowX | 0, y + height / 2 | 0, x, y);
        return this
    }
    
   }
    return el
}
function superCanvasEvents(el){

    el.$ = function (func) {
        el.click(function (e) {
            func(e.pageX - $(this).offset().left,
                e.pageY - $(this).offset().top)
        })
    }
    el.$$ = function (func) {
        el.dblclick(function (e) {
            func(e.pageX - $(this).offset().left,
                e.pageY - $(this).offset().top)
        })
    }
    el.over = el.MV = function (func) {
        el.mouseover(function (e) {
            func(e.pageX - $(this).offset().left,
                e.pageY - $(this).offset().top)
        })
    }
    el.out = el.MO = function (func) {
        el.mouseout(function (e) {
            func(e.pageX - $(this).offset().left,
                e.pageY - $(this).offset().top)
        })
    }
    el.enter = el.ME = function (func) {
        el.mouseenter(function (e) {
            func(e.pageX - $(this).offset().left,
                e.pageY - $(this).offset().top)
        })
    }
    el.leave = el.ML = function (func) {
        el.mouseleave(function (e) {
            func(e.pageX - $(this).offset().left,
                e.pageY - $(this).offset().top)
        })
    }
    el.up = el.MU = function (func) {
        el.mouseup(function (e) {
            func(e.pageX - $(this).offset().left,
                e.pageY - $(this).offset().top)
        })
    }
    el.move = el.MM = function (func) {
        el.mousemove(function (e) {
            func(e.pageX - $(this).offset().left,
                e.pageY - $(this).offset().top)
        })
    }
    el.down = el.MD = function (func) {
        el.mousedown(function (e) {
            func(e.pageX - $(this).offset().left,
                e.pageY - $(this).offset().top)
        })
    }
}
function superCanvasShadow(el){
    
 el.shC=  el.shdC = el.shadowColor = function (color) {
        if (U(color)) {
            return this.context.shadowColor
        }
        this.context.shadowColor = oO('c', color)
        return this
    }
el.shB=    el.shdB=  el.shadowBlur = function (blurNumber) {
        if (U(blurNumber)) {
            return this.context.shadowBlur
        }
        this.context.shadowBlur = blurNumber
        return this
    }
 el.shX=  el.shdX=   el.shadowOffsetX = function (offsetX) {
        if (U(offsetX)) {
            return this.context.shadowOffsetX
        }
        this.context.shadowOffsetX = offsetX
        return this
    }
  el.shY=  el.shdY=   el.shadowOffsetY = function (offsetY) {
        if (U(offsetY)) {
            return this.context.shadowOffsetY
        }
        this.context.shadowOffsetY = offsetY
        return this
    }
    el.shd=  el.shadow = function (color, x, y, num) {
        el.shadowColor(color)
        el.shadowOffsetX(x).shadowOffsetY(y)
        el.shadowBlur(num)
        return el
    }
}
old=function(){
    $.C = function () {
        z();
        c = $.c('y').drag()
        x = c.ctx()
        return c
    }
    //C =    function(a){if(_.isObject(a= E(a)||a)){return a.canvas? a.canvas  : s$(a.toString() ).contains('Canvas') ? Q(a)[0]:0}}
    function jqCropGuide() {
        /**
         * Displays a given image in the callee canvas (or child canvas) element,
         * then overlays a crop guide and attempts to execute a callback with
         * the image crop guide coordinates.
         *
         * @public
         * @function cropGuide
         *
         */
        (function ($) {
            $.fn.cropGuide = function (Options) {
                /**
                 * Initialise defaults to missing Options.
                 *
                 * @private
                 * @property    Options
                 * @type        Object
                 */
                var Options = $.extend({
                    width: null,
                    height: null,
                    ratio: 1,
                    onMouseUp: null,
                    minimumCropGuideWidth: 200,
                    minimumCropGuideHeight: 200,
                    returnDataUnits: 'pixels',
                    cropPointRadius: 7
                }, Options);
                /**
                 * Initialise some constants for use
                 * throughout the plugin.
                 *
                 * @private
                 * @property    Constants
                 * @type        Object
                 */
                var Constants = {
                    MOUSE_STATE_UP: 'up',
                    MOUSE_STATE_DOWN: 'down',
                    CROP_POINT_TOP_LEFT: 'nwse',
                    CROP_POINT_TOP_RIGHT: 'nesw',
                    CROP_POINT_BOTTOM_LEFT: 'swne',
                    CROP_POINT_BOTTOM_RIGHT: 'senw',
                };
                return $(this).each(function () {
                    var that = $(this)
                        , image = new Image()
                        , imageLoaded = false
                        , canvas = null
                        , canvasWidth = null
                        , canvasHeight = null
                        , context = null
                        , mouseState = Constants.MOUSE_STATE_UP
                        , objects = {}
                        , cursorStyleMappings = {}
                        , selectedCropGuidePoint = null
                        , lastMouseUpCursorPosition = null
                        , selectedCropGuidePointTimer = null
                        , activityIndicatorInterval = null
                        , activityIndicatorStart = new Date();
                    /**
                     * Crop guide point objects, used to store info
                     * about each crop guide point in the objects list.
                     *
                     * @private
                     * @method  CropGuidePoint
                     * @void
                     */
                    var CropGuidePoint = function (name, x, y) {
                        var radius = Options.cropPointRadius;
                        // Accessors.
                        this.getX = function () {
                            return x;
                        };
                        this.getY = function () {
                            return y;
                        };
                        this.getRadius = function () {
                            return radius;
                        };
                        this.getName = function () {
                            return name;
                        };
                        // Set the X or Y explicitly.
                        this.setX = function (newX) {
                            x = newX;
                        };
                        this.setY = function (newY) {
                            y = newY;
                        };
                        // Move the X or Y a certain amount.
                        this.moveX = function (xAmount) {
                            x += xAmount;
                        };
                        this.moveY = function (yAmount) {
                            y += yAmount;
                        };
                        // Draw this object to canvas.
                        this.draw = function () {
                            context.beginPath();
                            context.arc(x, y, radius, 0, 2 * Math.PI);
                            context.globalAlpha = 1;
                            context.fillStyle = '#fff';
                            context.lineWidth = 3;
                            context.strokeStyle = '#000';
                            context.fill();
                            context.stroke();
                        };
                    };
                    /**
                     * Clears everything from the canvas, ready to redraw.
                     *
                     * @private
                     * @method  clearCanvas
                     * @void
                     */
                    var clearCanvas = function () {
                        context.clearRect(0, 0, canvas.width, canvas.height);
                    };
                    /**
                     * Returns the cursor coordinates on the canvas
                     * using a given event object.
                     *
                     * @private
                     * @method  getCursorCoordinates
                     * @param   (Object)  e
                     * @return  Object
                     */
                    var getCursorCoordinates = function (e) {
                        var offset = canvas.offset();
                        return {
                            x: e.pageX - offset.left,
                            y: e.pageY - offset.top
                        };
                    };
                    /**
                     * Test to see if the cursor has collided with any
                     * of the crop points.
                     *
                     * @private
                     * @method  checkForCropPointCollision
                     * @param   (Object)  e
                     * @return  Boolean
                     */
                    var checkForCropPointCollision = function (e) {
                        var collided = false
                            , cursorCoordinates = getCursorCoordinates(e);
                        for (var i in objects) {
                            if (Math.abs(objects[i].getX() - cursorCoordinates.x) < (objects[i].getRadius())) {
                                var dx = cursorCoordinates.x - objects[i].getX()
                                    , dy = cursorCoordinates.y - objects[i].getY()
                                    , angle = Math.atan2(dy, dx)
                                    , cx1 = objects[i].getRadius() * Math.cos(angle) + objects[i].getX()
                                    , cy1 = objects[i].getRadius() * Math.sin(angle) + objects[i].getY()
                                    , cx2 = cx1 - (objects[i].getRadius() * 2) * Math.cos(angle)
                                    , cy2 = cy1 - (objects[i].getRadius() * 2) * Math.sin(angle);
                                var xHit = false
                                    , yHit = false;
                                if (cx1 > cx2 && cursorCoordinates.x <= cx1 && cursorCoordinates.x >= cx2) {
                                    xHit = true;
                                } else if (cursorCoordinates.x >= cx1 && cursorCoordinates.x <= cx2) {
                                    xHit = true;
                                }
                                if (cy1 > cy2 && cursorCoordinates.y <= cy1 && cursorCoordinates.y >= cy2) {
                                    yHit = true;
                                } else if (cursorCoordinates.y >= cy1 && cursorCoordinates.y <= cy2) {
                                    yHit = true;
                                }
                                if (xHit && yHit) {
                                    clearTimeout(selectedCropGuidePointTimer);
                                    selectedCropGuidePoint = objects[i].getName();
                                    collided = true;
                                    break;
                                }
                            }
                        }
                        return collided;
                    };
                    /**
                     * Checks to see if the cursor has entered the
                     * rop area (inside the crop guide).
                     *
                     * @private
                     * @method  checkForCropAreaCollision
                     * @param   (Object)  e
                     * @return  Boolean
                     */
                    var checkForCropAreaCollision = function (e) {
                        var collided = false
                            , cursorCoordinates = getCursorCoordinates(e);
                        if (
                            cursorCoordinates.x > objects[Constants.CROP_POINT_TOP_LEFT].getX() &&
                            cursorCoordinates.x < objects[Constants.CROP_POINT_BOTTOM_RIGHT].getX() &&
                            cursorCoordinates.y > objects[Constants.CROP_POINT_TOP_LEFT].getY() &&
                            cursorCoordinates.y < objects[Constants.CROP_POINT_BOTTOM_RIGHT].getY()) {
                            collided = true;
                        }
                        return collided;
                    };
                    /**
                     * Returns the top, left, width, and height
                     * dimensions of the current crop guide area in pixels.
                     *
                     * @private
                     * @method  getCropAreaPixelDimensions
                     * @return  Object
                     */
                    var getCropAreaPixelDimensions = function () {
                        return {
                            x: objects[Constants.CROP_POINT_TOP_LEFT].getX(),
                            y: objects[Constants.CROP_POINT_TOP_LEFT].getY(),
                            width: objects[Constants.CROP_POINT_TOP_RIGHT].getX() - objects[Constants.CROP_POINT_TOP_LEFT].getX(),
                            height: objects[Constants.CROP_POINT_BOTTOM_LEFT].getY() - objects[Constants.CROP_POINT_TOP_LEFT].getY()
                        };
                    };
                    /**
                     * Returns the top, left, width, and height
                     * dimensions of the current crop guide area in percent.
                     *
                     * @private
                     * @method  getCropAreaPercentDimensions
                     * @return  Object
                     */
                    var getCropAreaPercentDimensions = function () {
                        return {
                            x: (objects[Constants.CROP_POINT_TOP_LEFT].getX() / context.canvas.width) * 100,
                            y: (objects[Constants.CROP_POINT_TOP_LEFT].getY() / context.canvas.height) * 100,
                            width: (objects[Constants.CROP_POINT_TOP_RIGHT].getX() - objects[Constants.CROP_POINT_TOP_LEFT].getX()) / context.canvas.width * 100,
                            height: (objects[Constants.CROP_POINT_BOTTOM_LEFT].getY() - objects[Constants.CROP_POINT_TOP_LEFT].getY()) / context.canvas.height * 100
                        };
                    };
                    /**
                     * Constrains given dimensions to the set ratio.
                     *
                     * @private
                     * @method  ratioConstrainDimensions
                     * @param   (Object)    dimensions
                     * @return  Object
                     */
                    var ratioConstrainDimensions = function (dimensions) {
                        if (typeof dimensions.x !== 'undefined' && typeof dimensions.y !== 'undefined') {
                            if (dimensions.y < dimensions.x) {
                                dimensions.x = dimensions.y * Options.ratio;
                            } else {
                                dimensions.y = dimensions.x / Options.ratio;
                            }
                        }
                        return dimensions;
                    };
                    /**
                     * Handles the user mousedown event, triggered on the
                     * canvas element.
                     *
                     * @private
                     * @method  handleMouseDownEvent
                     * @param   (Object)  e
                     * @void
                     */
                    var handleMouseDownEvent = function (e) {
                        e.preventDefault();
                        // Set mouse state.
                        mouseState = Constants.MOUSE_STATE_DOWN;
                        if (checkForCropPointCollision(e)) {
                            document.body.style.cursor = cursorStyleMappings[selectedCropGuidePoint];
                        }
                        lastMouseUpCursorPosition = getCursorCoordinates(e);
                    };
                    /**
                     * Handles the user mouseup event, triggered on the
                     * canvas element.
                     *
                     * @private
                     * @method  handleMouseUpEvent
                     * @param   (Object)  e
                     * @void
                     */
                    var handleMouseUpEvent = function (e) {
                        e.preventDefault();
                        // Set mouse state.
                        mouseState = Constants.MOUSE_STATE_UP;
                        document.body.style.cursor = 'default';
                        selectedCropGuidePoint = null;
                        lastMouseUpCursorPosition = null;
                        // Send out the dimensions via the callback onMouseUp.
                        if (typeof Options.onMouseUp === 'function') {
                            switch (Options.returnDataUnits) {
                                case 'percent':
                                    Options.onMouseUp(getCropAreaPercentDimensions());
                                    break;
                                case 'pixels':
                                default:
                                    Options.onMouseUp(getCropAreaPixelDimensions());
                                    break;
                            }
                        }
                    };
                    /**
                     * Test to see if the resize that is about to
                     * happen will leave the canvas.
                     *
                     * @private
                     * @method  willGuideAreaBeInCanvas
                     * @param   (Object)  distance
                     * @return  Boolean
                     */
                    var willGuideAreaBeInCanvas = function (distance, move) {
                        var willGuideAreaBeInCanvas = true
                            , move = (typeof move === 'undefined') ? false : move
                            , checkPoints = [];
                        if (move) {
                            for (var i in objects) {
                                checkPoints.push({
                                    x: objects[i].getX() + distance.x,
                                    y: objects[i].getY() + distance.y
                                });
                            }
                        } else {
                            checkPoints = [
                                {
                                    x: objects[Constants.CROP_POINT_TOP_LEFT].getX() + distance.x,
                                    y: objects[Constants.CROP_POINT_TOP_LEFT].getY() + distance.y
                                },
                                {
                                    x: objects[Constants.CROP_POINT_TOP_RIGHT].getX() - distance.x,
                                    y: objects[Constants.CROP_POINT_TOP_RIGHT].getY() + distance.y
                                },
                                {
                                    x: objects[Constants.CROP_POINT_BOTTOM_LEFT].getX() + distance.x,
                                    y: objects[Constants.CROP_POINT_BOTTOM_LEFT].getY() - distance.y
                                },
                                {
                                    x: objects[Constants.CROP_POINT_BOTTOM_RIGHT].getX() - distance.x,
                                    y: objects[Constants.CROP_POINT_BOTTOM_RIGHT].getY() - distance.y
                                }
                            ];
                        }
                        // Test all the next check points are within the canvas bounds.
                        for (var i = 0, len = checkPoints.length; i < len; i++) {
                            if (checkPoints[i].x < 0 || checkPoints[i].x >= context.canvas.width) {
                                willGuideAreaBeInCanvas = false;
                                break;
                            } else if (checkPoints[i].y < 0 || checkPoints[i].y >= context.canvas.height) {
                                willGuideAreaBeInCanvas = false;
                                break;
                            }
                        }
                        return willGuideAreaBeInCanvas;
                    };
                    /**
                     * Test to see if the resize that is about to happen can
                     * happen without breaking the minimum size or leaving the canvas.
                     *
                     * @private
                     * @method  canResizeCropGuideArea
                     * @param   (Object)  distance
                     * @return  Boolean
                     */
                    var canResizeCropGuideArea = function (distance) {
                        var canResizeCropGuideArea = false
                            , cropArea = getCropAreaPixelDimensions();
                        // Check if the guide is already at the minimum size.
                        if (typeof distance !== 'undefined' && distance.x && distance.y) {
                            if (distance.x <= 0 || (distance.x > 0 && cropArea.width > Options.minimumCropGuideWidth)) {
                                canResizeCropGuideArea = true;
                            }
                            if (distance.y <= 0 || (distance.y > 0 && cropArea.height > Options.minimumCropGuideHeight)) {
                                canResizeCropGuideArea = true;
                            }
                        }
                        // Check that the guide is within the canvas.
                        if (!willGuideAreaBeInCanvas(distance)) {
                            canResizeCropGuideArea = false;
                        }
                        return canResizeCropGuideArea;
                    };
                    /**
                     * Handles the user mousemove event, triggered on the
                     * canvas element.
                     *
                     * @private
                     * @method  handleMouseMoveEvent
                     * @param   (Object)  e
                     * @void
                     */
                    var handleMouseMoveEvent = function (e) {
                        e.preventDefault();
                        if (mouseState !== Constants.MOUSE_STATE_DOWN) {
                            document.body.style.cursor = 'default';
                        }
                        var insideCropArea = checkForCropAreaCollision(e);
                        if (checkForCropPointCollision(e)) {
                            clearTimeout(selectedCropGuidePointTimer);
                            lastMouseUpCursorPosition = null;
                            document.body.style.cursor = cursorStyleMappings[selectedCropGuidePoint];
                        } else {
                            selectedCropGuidePointTimer = setTimeout(function () {
                                selectedCropGuidePoint = null;
                            }, 600);
                        }
                        if (insideCropArea && selectedCropGuidePoint === null) {
                            document.body.style.cursor = 'all-scroll';
                        }
                        // Only action mousemove events where the mouseState is MOUSE_STATE_DOWN.
                        if (mouseState === Constants.MOUSE_STATE_DOWN) {
                            var cursorCoordinates = getCursorCoordinates(e)
                                , distance = null;
                            if (selectedCropGuidePoint !== null) {
                                switch (selectedCropGuidePoint) {
                                    case Constants.CROP_POINT_TOP_LEFT:
                                        distance = ratioConstrainDimensions({
                                            x: cursorCoordinates.x - objects[selectedCropGuidePoint].getX(),
                                            y: cursorCoordinates.y - objects[selectedCropGuidePoint].getY()
                                        });
                                        break;
                                    case Constants.CROP_POINT_TOP_RIGHT:
                                        distance = ratioConstrainDimensions({
                                            x: objects[selectedCropGuidePoint].getX() - cursorCoordinates.x,
                                            y: cursorCoordinates.y - objects[selectedCropGuidePoint].getY()
                                        });
                                        break;
                                    case Constants.CROP_POINT_BOTTOM_RIGHT:
                                        distance = ratioConstrainDimensions({
                                            x: objects[Constants.CROP_POINT_TOP_RIGHT].getX() - cursorCoordinates.x,
                                            y: objects[selectedCropGuidePoint].getY() - cursorCoordinates.y
                                        });
                                        break;
                                    case Constants.CROP_POINT_BOTTOM_LEFT:
                                        distance = ratioConstrainDimensions({
                                            x: cursorCoordinates.x - objects[Constants.CROP_POINT_BOTTOM_LEFT].getX(),
                                            y: objects[Constants.CROP_POINT_BOTTOM_LEFT].getY() - cursorCoordinates.y
                                        });
                                        break;
                                }
                                if (distance !== null && canResizeCropGuideArea(distance)) {
                                    objects[Constants.CROP_POINT_TOP_LEFT].moveX(distance.x);
                                    objects[Constants.CROP_POINT_TOP_LEFT].moveY(distance.y);
                                    objects[Constants.CROP_POINT_TOP_RIGHT].moveX(-distance.x);
                                    objects[Constants.CROP_POINT_TOP_RIGHT].moveY(distance.y);
                                    objects[Constants.CROP_POINT_BOTTOM_LEFT].moveX(distance.x);
                                    objects[Constants.CROP_POINT_BOTTOM_LEFT].moveY(-distance.y);
                                    objects[Constants.CROP_POINT_BOTTOM_RIGHT].moveX(-distance.x);
                                    objects[Constants.CROP_POINT_BOTTOM_RIGHT].moveY(-distance.y);
                                }
                            } else if (insideCropArea) {
                                if (lastMouseUpCursorPosition !== null) {
                                    var distance = {
                                        x: cursorCoordinates.x - lastMouseUpCursorPosition.x,
                                        y: cursorCoordinates.y - lastMouseUpCursorPosition.y
                                    };
                                    if (willGuideAreaBeInCanvas(distance, true)) {
                                        for (var i in objects) {
                                            objects[i].moveX(distance.x);
                                            objects[i].moveY(distance.y);
                                        }
                                    }
                                }
                                lastMouseUpCursorPosition = cursorCoordinates;
                            }
                            redrawObjects();
                        }
                    };
                    /**
                     * Binds all teh events that are needed on the canvas element.
                     *
                     * @private
                     * @method  bindCanvasEvents
                     * @void
                     */
                    var bindCanvasEvents = function () {
                        canvas.on('mousedown', handleMouseDownEvent);
                        canvas.on('mouseup', handleMouseUpEvent);
                        canvas.on('mouseleave', handleMouseUpEvent);
                        canvas.on('mousemove', handleMouseMoveEvent);
                    };
                    /**
                     * Draws the rect overlay under the crop control points.
                     *
                     * @private
                     * @method  drawCropGuideRect
                     * @param   (Integer)   x
                     * @param   (Integer)   y
                     * @param   (Integer)   w
                     * @param   (Integer)   h
                     * @void
                     */
                    var drawCropGuideRect = function (x, y, w, h) {
                        context.lineWidth = 3;
                        context.strokeStyle = '#000';
                        context.strokeRect(x, y, w, h);
                        context.lineWidth = 0;
                        context.globalAlpha = 0.5;
                        context.fillStyle = "#000";
                        // Craete the translucent background around the crop area with four rects (top, left, right, bottom).
                        context.fillRect(0, 0, context.canvas.width, y);
                        context.fillRect(0, y - 0.1, x, context.canvas.height + h);
                        context.fillRect(x + w, y - 0.1, context.canvas.width - (x + w), context.canvas.height + h);
                        context.fillRect(x, y + h, w, context.canvas.height - (y + h));
                    };
                    /**
                     * Draws the original image to the canvas element.
                     *
                     * @private
                     * @method  doImageDraw
                     * @param   (Function)  callback
                     * @void
                     */
                    var doImageDraw = function (callback) {
                        canvas.attr({width: image.width, height: image.height});
                        context.drawImage(image, 0, 0);
                        if (typeof callback === 'function') {
                            callback();
                        }
                    }
                    /**
                     * Wrapper for doImageDraw, loads the original image
                     * only if needed so we are not loading it up everytime
                     * which delays the callback.
                     *
                     * @private
                     * @method  drawOriginalImage
                     * @param   (Function)  callback
                     * @void
                     */
                    var drawOriginalImage = function (callback) {
                        clearCanvas();
                        if (that.is('img') && !imageLoaded) {
                            imageLoaded = true;
                            image.onload = function () {
                                clearInterval(activityIndicatorInterval);
                                activityIndicatorInterval = null;
                                doImageDraw(callback);
                            };
                            image.src = that.attr('src');
                        } else {
                            doImageDraw(callback);
                        }
                    };
                    /**
                     * Overlays the crop guide to the original image.
                     *
                     * @private
                     * @method  drawCropGuide
                     * @void
                     */
                    var drawCropGuide = function () {
                        var targetWidth = context.canvas.width
                            , targetHeight = context.canvas.height;
                        if (context.canvas.height < context.canvas.width) {
                            targetWidth = context.canvas.height * Options.ratio;
                        } else {
                            targetHeight = context.canvas.width / Options.ratio;
                        }
                        // Make sure that the inital guide doesn't leave the canvas.
                        if (targetWidth > context.canvas.width) {
                            targetWidth = context.canvas.width;
                            targetHeight = targetWidth / Options.ratio;
                        }
                        if (targetHeight > context.canvas.height) {
                            targetHeight = context.canvas.height;
                            targetWidth = targetHeight * Options.ratio;
                        }
                        var leftX = (context.canvas.width - targetWidth) / 2
                            , rightX = targetWidth + (context.canvas.width - targetWidth) / 2
                            , topY = (context.canvas.height - targetHeight) / 2
                            , bottomY = targetHeight + (context.canvas.height - targetHeight) / 2;
                        var points = {};
                        points[Constants.CROP_POINT_TOP_LEFT] = {x: leftX, y: topY};
                        points[Constants.CROP_POINT_TOP_RIGHT] = {x: rightX, y: topY};
                        points[Constants.CROP_POINT_BOTTOM_LEFT] = {x: leftX, y: bottomY};
                        points[Constants.CROP_POINT_BOTTOM_RIGHT] = {x: rightX, y: bottomY};
                        drawCropGuideRect(leftX, topY, targetWidth, targetHeight);
                        for (var key in points) {
                            var cropGuidePoint = new CropGuidePoint(key, points[key].x, points[key].y);
                            cropGuidePoint.draw();
                            objects[cropGuidePoint.getName()] = cropGuidePoint;
                        }
                    };
                    /**
                     * Redraws all objects to the canvas.
                     *
                     * @private
                     * @method  redrawObjects
                     * @void
                     */
                    var redrawObjects = function () {
                        drawOriginalImage(function () {
                            drawCropGuideRect(
                                objects[Constants.CROP_POINT_TOP_LEFT].getX(),
                                objects[Constants.CROP_POINT_TOP_LEFT].getY(),
                                objects[Constants.CROP_POINT_TOP_RIGHT].getX() - objects[Constants.CROP_POINT_TOP_LEFT].getX(),
                                objects[Constants.CROP_POINT_BOTTOM_LEFT].getY() - objects[Constants.CROP_POINT_TOP_LEFT].getY()
                            );
                            for (var i in objects) {
                                objects[i].draw();
                            }
                        });
                    };
                    /**
                     * Draws an activity indicator on the canvas.
                     *
                     * @private
                     * @method  drawActivityIndicator
                     * @void
                     */
                    var drawActivityIndicator = function () {
                        var lines = 16
                            , rotation = parseInt(((new Date() - activityIndicatorStart) / 1000) * lines) / lines;
                        context.save();
                        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
                        context.translate(context.canvas.width / 2, context.canvas.height / 2);
                        context.rotate(Math.PI * 2 * rotation);
                        for (var i = 0; i < lines; i++) {
                            context.beginPath();
                            context.rotate(Math.PI * 2 / lines);
                            context.moveTo(context.canvas.width / 40, 0);
                            context.lineTo(context.canvas.width / 15, 0);
                            context.lineWidth = context.canvas.width / 200;
                            context.strokeStyle = "rgba(0, 0, 0, " + i / lines + ")";
                            context.stroke();
                        }
                        context.restore();
                    };
                    /**
                     * Validates the Options, then draws the original
                     * image and binds the canvas events.
                     *
                     * @private
                     * @method  init
                     * @void
                     */
                    var init = function () {
                        cursorStyleMappings[Constants.CROP_POINT_TOP_LEFT] = 'nwse-resize';
                        cursorStyleMappings[Constants.CROP_POINT_TOP_RIGHT] = 'nesw-resize';
                        cursorStyleMappings[Constants.CROP_POINT_BOTTOM_LEFT] = 'nesw-resize';
                        cursorStyleMappings[Constants.CROP_POINT_BOTTOM_RIGHT] = 'nwse-resize';
                        // Initialise the canvas and grab the context.
                        canvas = $('<canvas />');
                        canvas.attr('width', (Options.width !== null) ? Options.width : that.attr('width'));
                        canvas.attr('height', (Options.height !== null) ? Options.height : that.attr('height'));
                        context = canvas[0].getContext('2d');
                        that.after(canvas);
                        that.remove();
                        activityIndicatorInterval = setInterval(drawActivityIndicator, 1000 / 30);
                        // Draw the original image, draw the crop guide, then bind events.
                        drawOriginalImage(function () {
                            drawCropGuide();
                            bindCanvasEvents();
                        });
                    };
                    // Plugin entry point.
                    if (that.is('img')) {
                        init();
                    }
                });
            };
        })(jQuery);
// Not part of the plugin, just an example usage.
        $('img').cropGuide({
            ratio: 1,
            returnDataUnits: 'percent',
            onMouseUp: function (cropDimensions) {
                $('#crop-info').val("x: " + cropDimensions.x + "\ny: " + cropDimensions.y + "\nw: " + cropDimensions.width + "\nh: " + cropDimensions.height);
            }
        });
    }
}