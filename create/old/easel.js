
cjs.diamond = function self(width, height, fc, sc) {
    fc = fc || 'green'
    sc = sc || 'white'
    width = width || 100
    height = height || width
    halfwidth = width / 2
    halfheight = height / 2
    var h = new createjs.Shape()
    h.graphics.f(fc).s(sc)
        .mt(0, -halfheight)
        .lt(-halfwidth, 0).lt(0, halfheight)
        .lt(halfwidth, 0).lt(0, -halfheight)
    return h
}


$df = {
    bsDF: function (o) {
        o = o || {}
        o.x = N(o.x, 0);
        o.y = N(o.y, 0);
        o.rt = N(o.rt, 0);
        o.al = N(o.al, 1)
        return o
    },
    xyr: function (o) {
        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.r = N(o.r, 0)
        return o
    },
    im: function (o) {
        o.i = o.i || 'me';
        o.al = N(o.al, 1)
    },
    sc: function (o) {
        o.sc = N(o.sc, ( cjs.iH(o.i) ? 1 : .4 ));
        if (!A(o.sc)) {
            o.sc = [o.sc, o.sc]
        }
        ;
        return o
    },
    b: function () {
        var g = G(arguments), o
        o = g.A ? {hs: g.f} : g.f || {}
        o.hs = o.hs || []
        o.i = o.i || 'me'
        return o
    },
    h: function (o) {
        o = o || {}
        if (U(o.v)) {
            o.v = [[-100, 50], [0, -50], [100, 0]]
        }
        //o.v= _.m(o.v, function(v){v=V(v);return [v.x,v.y]})
        o.c = o.c || 'p'
        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.a = _.tN(o.a)
        o.r = N(o.r, 40)
        o.w = N(o.w, 50)
        o.h = N(o.h, o.w || 100)
        o.d = N(o.d, 0.5)
        o.b = N(o.b, 0.5)
        o.f = N(o.f, 0.5)
        o.s = D(o.s) ? o.s : 0
        o.o = N(o.o, 1)
        o.q = D(q) ? o.q : true
        return o
    },
    rec: function (o) {
        o.al = N(o.al, 1)
        o.c = o.c || 'z'
        o.C = o.C || 'w'
        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.a = N(o.a, 0)
        o.w = N(o.w, 50)
        o.h = N(o.h, 50)
        return o
    },
    cov: function (x, y, c, C, l, l2) {

        alert('b2d.cov')
        var g = G(arguments), x = g[0], y = g[1], c = g[2], C = g[3], l = g[4], l2 = g[5],

            o = N(c) ? {x: x, y: y, a: c, c: C, C: l, l: l2}
                : N(x) ? {x: x, y: y, c: c, C: C, l: l}
                : x,
            h = new cjs.Shape()

        df.oDef(o)

        h.XY(o.x, o.y).rot(o.a).c(o.c, o.C, o.l)

        if (o.d) {
            h.drag()
        }

        return h
    },
    oDef: function (o) {
        o = o || {}
        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.a = N(o.a, 0)
        o.w = N(o.w, 50)
        o.h = N(o.h, 50)
        o.r = N(o.r, 50)
        o.c = o.c || 'z'
        o.C = o.C || 'w'
        return o
    },
    grad: function (o) {

        o = o || {}
        o.c1 = oO('c', o.c1 || 'z')
        o.c2 = oO('c', o.c2 || 'w')
        o.s1 = N(o.s1)
        o.s2 = N(o.s2, 1)
        o.x1 = N(o.x1)
        o.y1 = N(o.y1)
        return o
    }
}
oDef = function (o) {
    o = o || {}
    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    o.a = N(o.a, 0)
    o.c = o.c || 'z'
    o.C = o.C || 'w'
    o.w = N(o.w, 50)
    o.h = N(o.h, 50)
    return o
}
$Cir = function () {
    var g = G(arguments), o
    o = g.S_ ? {c: g.f, x: g.s, y: g.t, r: g[3]} : {x: g.f, y: g.s, r: g.t}
    return $H(o.c, o.x, o.y).dc(o.r)

}


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

    var ct = this, g = G(arguments), o, bmp

    o = N(g.s) ?
    {i: g.f, sc: g.s, fn: g.t} :
    {i: g.f, fn: g.s}
    o.sc = N(o.sc) ? o.sc : 1

    if (_.iDU(o.i)) {
        o.i = $.i(o.i)
    }


    if (O(o.i)) {
        bmp = $Bm(o.i).a2(ct)
        if (o.fn) {
            o.fn(bmp)
        }
        return ct
    }
    $.i(o.i, function (e, i) {
        bmp = $Bm(i)
        bmp.a2(ct)
        bmp.rC()
        bmp.sXY(o.sc).a2(ct)
        //bm.XY( that.W()/2, that.H()/2 )
        // works with stage i guess.. but fucks with 'container' - cant check bounds
        if (g.n) {
            bmp.XY(-1000)
        }
        if (o.fn) {
            o.fn(bmp)
        }
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
ct.poly = function () {
    var ct = this // ?
    var h = ct.shape()
    h.poly.apply(h, arguments)
    return h
}


ct.Ct = function () {
    this.ct.apply(this, arguments)
    return this
}
ct.Bm = function () {
    this.bm.apply(this, arguments)
    return this
}


ct.pol = function () {
    var ct = this, g = G(arguments), p,

        h = ct.h()

    if (N(g.f)) {
        h.XY(
            g.shift(),
            g.shift())
    }
    p = $a(h, 'pol', g)
    if (g.p) {
        p.drag()
    }
    return p
}


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
t.tA = _.gS('textAlign')
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

h.cir = function () {
    var h = this, gx = h.graphics, g = G(arguments), o
    o = g.O ? g.f :
        N(g.t) ? {x: g.f, y: g.s, r: g.t, c: g[3], C: g[4], l: g[5]} :
            N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
                g.N_ ? {r: g.f, c: g.s, C: g.t, l: g[3]} :
                {c: g.f, C: g.s, l: g.t}
    h.c(o)
    if (o.bf) {
        if (N(o.bf)) {
            o.bm = 'me'
        }

        if (F(Q)) { //async
            h.bf(o.bf, function () {
                h.dc(o)
            })
        }
        else { //sync
            o.tf = o.tf || null;
            h.bf(o.bf, o.tf).dc(o)
        }
    }

    else {
        h.dc(o)
    }
    h.alpha = N(o.al, 1)
    return h

}
h.poly = function (V, c, C, l) {

//*** this is s.poly.. not h.poly !
    var h = this, g = G(arguments),
        o = A(g[0]) ? {v: g[0], c: g[1], C: g[2], l: g[3]}//array must come first b/c its an obj
            : O(g[0]) ? g[0] : {}
    //?
    oDef(o);
    h.ef().es() // ???
    //?
    h.c(o)
    if (o.bf) {
        h.bf('me', function () {
            h.lt(o.v).cp()
        })
    }
    else {
        h.lt(o.v).cp()
    }
    return h
}
h.pStr = h.dp = h.polyStar = function (x, y, r, sides, ptSiz, ang) {
    var h = this, gx = h.graphics,

        g = G(arguments), o //,  x=g[0],  y=g[1], r=g[2],  sides=g[3], ptSiz=g[4], ang=g[5]
    o = N(g[3]) ? {
        x: g[0], y: g[1], r: g[2], s: g[3], p: g[4], a: g[5]
    } :

        N(g[0]) ? {r: g[0], s: g[1], p: g[2], a: g[3]} :

            O(g[0]) ? g[0] : {}

    o.a = _.tN(o.a)
    o.x = _.tN(o.x)
    o.y = _.tN(o.y)
    o.p = _.cap(o.p, 0, .99)

    gx.drawPolyStar(o.x, o.y, o.r, o.s, o.p, o.a)
    return h
}
h.drawPolygons = function (paths, C, c) {
    var h = this
    h.C(C)
    if (c) {
        h.c(c)
    }
    _.each(paths, function (p) {
        h.drawPolygon(p)
    })
    return h
}

h.qt = function (a, b, c, d, e, f) {
    var h = this, gx = h.graphics
    if (O(a)) {
        a = V(a)
        b = V(b)
        gx.qt(a.x, a.y, b.x, b.y)
    }


    else {
        gx.qt(a, b, c, d, e, f)
    }
    return h
}
h.quad = h.qt = function (x, y, r, startA, endA, aCW) {
    var h = this, gx = h.graphics
    h.quadraticCurveTo(x, y, r, startA, endA, aCW)
    return h
}
h.cur = function (a, b, c, d, e, f, g, h) {

    if (O(a)) {
        return this.cur(a.x, a.y, b.x, b.y, c.x, c.y)
    }
    return this.mt(a, b).qt(c, d, e, f, g, h)
}
h.bmCir = function (o) {
    var h = this
    o = o || {}
    o.i = o.i || 'me'
    o.circs = o.circs || []
    $.img(o.i, function (i) {
        i = i[0]
        _.each(o.circs, function (c) {
            h.bf(i)
            h.dc(c)
            h.ef()
        })
    })
    return h
}
h.bmV = function (o) {
    var h = this
    o = o || {}
    o.i = o.i || 'me'

    $.img(o.i, function (i) {
        i = i[0]
        _.e(o.v, function (v) {

            h.bf(i)
            h.lt(v)
            h.ef().cp()

        })
    })

    return h
}

h.bV = function (o) {
    var h = this, g = G(arguments), o
    o = g.A ? {hs: g.f} : g.f || {}
    o.hs = o.hs || []
    o.i = o.i || 'me'
    if (F(Q)) {
        $.i(o.i, function (i) {
            h.bf(i[0])
            _.e(o.v, function (v) {
                h.lt(v)
            })//
            h.cp()
            h.ef()
        })
        return h
    }
    h.bf(o.i)
    _.e(o.v, function (v) {
        h.lt(v)
    })

    return h

}
h.dr2 = function (x, y, W, H) {
    var h = this, g = G(arguments), o

    if (g.OO_) {
        g.e(function (g) {
            h.dr2(g)
        });
        return h
    }

    o = g.O ? g.f :
        U(g.t) ? {w: g.f, h: g.s} :
        {x: g.f, y: g.s, w: g.t, h: g[3]}

    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    o.w = N(o.w, 50)
    o.h = N(o.h, o.w)
    h.dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
    return h

}
h.pStr = h.dp = h.polyStar = function (x, y, r, sides, ptSiz, ang) {
    var h = this, gx = h.graphics,

        g = G(arguments), o //,  x=g[0],  y=g[1], r=g[2],  sides=g[3], ptSiz=g[4], ang=g[5]

    o = N(g[3]) ? {
        x: g[0], y: g[1], r: g[2], s: g[3], p: g[4], a: g[5]
    } :

        N(g[0]) ? {r: g[0], s: g[1], p: g[2], a: g[3]} :

            O(g[0]) ? g[0] : {}

    o.a = _.tN(o.a)
    o.x = _.tN(o.x)
    o.y = _.tN(o.y)
    o.p = cjs.cap(o.p, 0, .99)

    gx.drawPolyStar(o.x, o.y, o.r, o.s, o.p, o.a)
    return h
}
h.qt = function (x, y, r, startA, endA, aCW) {
    var h = this, gx = h.graphics
    gx.quadraticCurveTo(x, y, r, startA, endA, aCW)
    return h
}
h._dc = function (o) {
    var h = this, gx = h.graphics, g = G(arguments)
    gx.dc(N(o.x, 0), N(o.y, 0), N(o.r, 50))
    return h
}
h.cirs = function (g) {
    var h = this
    g.e(function (c) {
        h.dc(c)
    });
    return this
}


h.bC = function (o) {
    var h = this;
    return h.bf(o, function (h1) {
        h.dc(h1)
    })
}//calls bitmap fill and lets it load up the bitmap (my face)
//then passes in a function to be called once the image has finished loading
//in this case, the function draws a rectangle (and the bitmap is automatically used as the fill)
h.dc = function (x, y, r) {
    var h = this, gx = h.graphics, g = G(arguments), o
    h.cp()
    if (g.A) {
        return $a(h, 'dc', g.f)
    }
    if (g.OO_) {
        return h.cirs(g)
    }
    o = g.O ? g.f : g.$ ? {r: g.f} : {x: g.f, y: g.s, r: g.t}
    return h._dc(o)
}

h.pol = function (V, c, C, l) {
    var h = this, g = G(arguments), o

    //array must come first b/c its an obj
    o = A(g.f) ?
    {v: g.f, c: g.s, C: g.t, l: g[3]} : O(g.f) ? g.f : {}
    $df.oDef(o)
    h.ef().es()
    h.c(o)
    if (o.bf) {
        h.bf('me', function () {
            h.lt(o.v).cp()
        })
    }
    else {
        h.lt(o.v).cp()
    }
    return h
}
h.es = function () {
    var h = this, gx = h.graphics
    gx.es()
    return h
}
h.cp = function () {
    this.graphics.cp();
    return this
}
h.bs = function (i) {
    var h = this;
    h.graphics.bs(i);
    return h
}
h.ef = function () {
    var h = this, gx = h.graphics
    gx.f()
    return h
}
h.rc = h.roundRectComplex = function () {
    var h = this, gx = h.graphics
    gx.drawRoundRectComplex.apply(gx, arguments)
    return h
}
h.de = h.ell = function () {
    var h = this,
        gx = h.graphics,
        g = G(arguments),
        o = N(g[2]) ? {x: g[0], y: g[1], w: g[2], h: g[3]} :
            N(g[0]) ? {w: g[0], h: g[1]} :
                O(g[0]) ? g[0] : {}
    o.x = _.tN(o.x)
    o.y = _.tN(o.y)
    o.w = _.tN(o.w, 100)
    o.h = _.tN(o.h, o.w)
    gx.drawEllipse(o.x, o.y, o.w, o.h)
    return h
}
h.de2 = function (x, y, W, H, r) {
    var h = this
    h.de(-W / 2 + x, -H / 2 + y, W, H, r)
    return h
}
h.rr = function () {
    var h = this,
        gx = h.graphics,
        g = G(arguments),

        o = N(g[3]) ? {x: g[0], y: g[1], w: g[2], h: g[3], r: g[4]} :
            N(g[1]) ? {w: g[0], r: g[1]} :
                N(g[0]) ? {w: g[0], h: g[1], r: g[2]} :
                    O(g[0]) ? g[0] : {}


    o.x = _.tN(o.x)
    o.y = _.tN(o.y)
    o.w = _.tN(o.w, 100)
    o.h = _.tN(o.h, o.w)

    gx.drawRoundRect(o.x, o.y, o.w, o.h, o.r)
    return h
}
h.rr2 = function (x, y, W, H, r) {
    var h = this
    h.rr(-W / 2 + x, -H / 2 + y, W, H, r)
    return h
}
h.bez = h.bt = function (x, y, r, startA, endA, aCW) {
    var h = this, gx = h.graphics
    h.bezierCurveTo(x, y, r, startA, endA, aCW)
    return h
}
h.arc = function (x, y, r, startA, endA, aCW) {
    var h = this, gx = h.graphics
    /*
     Draws an arc defined by the radius, startAngle and endAngle arguments, centered at the position (x, y).
     For example, to draw a full circle with a radius of 20 centered at (100, 100):
     arc(100, 100, 20, 0, Math.PI*2)
     */

    h.arc(x, y, r, startA, endA, aCW)

    return h
}
h.arc2 = function (x, y, X, Y, r) {
    var h = this, gx = h.graphics
//Draws an arc with the specified control points and radius.
    gx.arcTo(x, y, X, Y, r)
    return h
}

i.tf=  function(){var i=this,g=G(arguments)

    if(U(g[0])){return [
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
    if( O(g[0]) && F(g[0].getTransform)){
        g[0]= g[0].getTransform()}
    i.setTransform.apply(  i, A(g[0]) ? g[0] : g)
    return i
}
h.dr= function () {
    var h = this, gx = h.graphics, g = G(arguments),
        o = g.O ? g.f : N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g[3]} : {w: g.f, h: g.s}
    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    o.w = N(o.w, 100);
    o.h = N(o.h, o.w)
    gx.dr(o.x, o.y, o.w, o.h)
    return h
}
h.rec= function () {

    var h = this, g = G(arguments), o
    if (g.OO_) {g.e(function (g) {h.rec(g)}); return h }

    o = g.O ? g.f :
        S(g.s) ? {c: g.f, C: g.s, x: g.t, y: g[3], w: g[4], h: g[5], l: g[6]} :
            g.S_ ? {c: g.f, x: g.s, y: g.t, w: g[3], h: g[4], l: g[5]} :
                N(g.t) ?
                {x: g.f, y: g.s, w: g.t, h: g[3], c: g[4], C: g[5], l: g[6]} :
                {w: g.f, h: g.s, c: g.t, C: g[3], l: g[4]}
    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    o.w = N(o.w, 50)
    o.h = N(o.h, o.w)
    if (o.i) {
        h.bf(o.i, function () {o.i = null; h.rec(o)})
        return h
    }
    if (o.c) {h.c(o)}
    if(o.lf){
        h.lf({
            c1: o.c1 || 'z', c2: o.c2 || 'w',
            s1: 0, s2: 1,
            x: o.x - o.w / 2, y: o.y - o.h / 2,
            x2: o.x - o.w / 2, y2: o.y + o.h / 2
        })
    }
    h.dr(-o.w/2+o.x, -o.h/2+o.y, o.w, o.h)
    return h
}
h._bf=function(){
    $l('h._bf')
    var h = this, gx = h.graphics, g = G(arguments),

        tf

    if (A(g.s)) {
        g.s = cjs.m2d.apply(cjs, g.s)}

    tf = g.s || cjs.m2d(R(500), R(300))

    if (S(g.f)) {
        $l('h._bf: str')
        gx.bf(Q.i(g.f), null, tf)}

    else if (O(g.f)) {
        $l('h._bf: obj')
        gx.bf(g.f, null, tf)
    }

    else {
        $l('h._bf: ?')
    }

    return h

}
h.bf= function (){$l('h.bf')
    var h = this,
        gx = h.graphics, g=G(arguments),img, tf

    if (!F(Q)) {
        $l('h.bf: !F(Q)')
        ///// $l('!F(Q)') !!! only this gets logged
        return this._bf.apply(this,g)
    }

    else {
        if (g.S_) {    $l('yes F(Q)')
            $.i(g.f, function (i) {
                gx.bf(i[0])
                if (F(g.s)) {
                    g.s(h)
                }
            })
        }

        //if object with an 'hs' property
        else if (g.O_ && A(g.f.hs)){
            $l('g.O_ && A(g.f.hs)')
            img=g.f.i || 'me'
            $.i(img, function (i) {
                gx.bf(i[0])
                if (F(g.s)) {
                    _.e(g.f.hs, g.s)
                }
            })
        }
        else { $l('..else')

            gx.bf(g.f, null, g.s)
        }
        return h //h.ef()
    }


}  // BITMAP FILL  !!!!!!
//bitmap fill rec
h.bR=function (o){var h = this;


    if (F(Q)){
        h.bf(o, function (h1) {
            h.rec(h1)
        })
    }

    else {

        alert('h.bR not preloaded?')
        h.bf(o.bf)
        h.rec(o.hs)
        _.e(o.hs, function (r) {
            w.rec(r.w, r.h)
        })
    }

    return h
    //= h.bfR = h.bmR
}

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
i.dg = i.drag = i.SL = function () {
    SL(this);
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
    SL(this);
    return this
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