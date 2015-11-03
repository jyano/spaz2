b2d.p()
df.b = function () {
    var g = G(arguments), o
    o = g.A ? {hs: g.f} : g.f || {}
    o.hs = o.hs || []
    o.i = o.i || 'me'
    return o
}
df.h = function (o) {
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
}
b2d.oDef = function (o) {
    o = o || {}
    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    o.a = N(o.a, 0)
    o.w = N(o.w, 50)
    o.h = N(o.h, 50)
    o.c = o.c || 'z'
    o.C = o.C || 'w'
    return o
}
b.rec = function (c, W, H, x, y, a) {
    var b = this, w = b.W(), g = G(arguments, 'k'),
        o, fD, p, f
    if (g.OO_) {
        g.e(function (g) {
            b.rec(g)
        });
        return b
    }
    if (g.A) {
        return $a(b, 'rec', g)
    }
    if (g.O) {
        o = g.f
    }
    else {
        if (N(g.f)) {
            g.ush('z')
        }
        o = {c: g[0], w: g[1], h: g[2], x: g[3], y: g[4], a: g[5]}
    }
    b2d.oDef(o)
    o.k = o.k || g.k
    fD = b2d.fD(b2d.pH().box(o))
    if (o.s || g.n) {
        fD.isSensor = true;
        o.al = N(o.al, 0.8)
    }
    fD.d(o.d || .5)
    f = b.f(fD)
    f.K(o)
    if (o.c !== 0) {
        // f.g=w.g.h().rec(o)
        if (g.p) {
            f.g = w.g.h().rec(o)
        }//  f.g= w.g.h().rec(o) //this for but: (does something important)
        else {
            f.g = w.g.rec(o)//(o.w, o.h, o.c, o.C, o.l)
            f.bS(f.g)
        }  //,  o.a, o.x, o.y, o.al  //<-this for bike (does rotation)
        // f.bS(f.g)
    }
    return f
}
cjs.iCt = function (ct) {
//haha only a ct can impl addContainer( ha! //MOMENT OF BRILLIANCE
    return O(ct) && ct.addContainer
}
cjs.M = function (a) {
    var m = new cjs.Matrix2D()
    if (N(a)) {
        m.rotate(a)
    }
    return m
}
cjs.Gx = cjs.gx = function (a) {
    return new cjs.Graphics(a)
}
cjs.rulers = function () {
    $.d('b', 100, 100).al(.3).dg()
    $.d('r', 100, 300).al(.3).dg()
}
cjs.iH = function (h) {
    return O(h) && h.graphics
}
cir = function () {
    $H = $h = function () {
        var g = G(arguments),
            h = new cjs.Shape(), //if (cjs.iH(x)) {return new cjs.Shape(x.graphics)}
//pass in your own obj to use 'o.i/o.bf' or 'o.lf' or 'o.rf'
            o = g.O ? g.f :
                g.N_ ? ( N(g[3]) ? // 'c-C-l' pattern
                {x: g.f, y: g.s, C: g.t, l: g[3]} : {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} ) :
                    // 'c-C-l' pattern
                    N(g.s) ? {C: g.f, l: g.s} :
                    {c: g.f, C: g.s, l: g.t}
        h.XY(N(o.x, 0), N(o.y, 0))
        h.c(o.c || 'z', o.C || 'w', o.l || 8)
        if (o.C) {
            h.C(o.C)
        }
        if (N(o.l)) {
            h.l(o.l)
        }
        if (g.p) {
            h.dg()
        }
        return h
    }
    h.dc = function (x, y, r) {
        var h = this, gx = h.graphics, g = G(arguments), o
        h.cp() // i kinda like how it stroke-connects my cirs
        if (g.A) {
            return $a(h, 'dc', g.f)
        }
        if (g.OO_) {
            g.e(function (c) {
                h.dc(c)
            })
            return h
        }
        o = g.O ? g.f : g.$ ? {r: g.f} : {x: g.f, y: g.s, r: g.t}
        gx.dc(N(o.x, 0), N(o.y, 0), N(o.r, 50))
        return h
    }
    $Cir = function () {
        var g = G(arguments),
            o = g.S_ ? {c: g.f, x: g.s, y: g.t, r: g[3]} : {x: g.f, y: g.s, r: g.t}
        return $H(o.c, o.x, o.y).dc(o.r)
    }
    h.cir = function () {
        var h = this, gx = h.graphics, g = G(arguments), o
        //h.ef().es()
        //if (g.O_ && A(g.s)) {_.e(g.s, function(c){h.cir(_.x(c, g.f))}); return h }
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
            if (F(Q)) {
                h.bf(o.bf, function () {
                    h.dc(o)
                })
            }
            else {
                o.tf = o.tf || null
                h.bf(o.bf, o.tf).dc(o)
            }
        }
        else {
            h.dc(o)
        }
        h.alpha = N(o.al, 1)
        return h
    }
    ct.cir = function (c, r, x, y) {
        var g = G(arguments)
        alert('ct.cir')
        return $Cir(c, r, x, y).a2(this)
    }
    BMC = function () {
        W()._(function () {
            h = w.i.h(0, 0, '+')
                .cir({r: 150, bf: 'me'})
                .cir({x: 500, y: 200, r: 100, bf: 'me'})
        })
    }
    CHICKBALLS = function () {
        W(1200, 1200)._(function () {
            _.t(14, function () {
                w.D(R(1100, 50), R(1100, 50))
                    .cir({bf: 'chicks', r: 120})
            })
        })
    }
};
cir()
b.$h = function () {
    var h = $H()
    this.bS(h)
    h.c.apply(h, G(arguments))
    return h
}
HAIRBALLS = function () {
    W(400, 400)._(function () {

        //cjs.rulers()
        _.t(8, function () {
            var b = w.D(R(100, 50), R(100, 50), 'b', 10)
            b.$h('x', 'x', 1189).c('x', 'x', 200)
                .bf('sun', [0, .6, 10, 10, -40, 200])
                .cir(10)
            // <- b.C({c:'x', al:.4} )
        })
        $.d('b', 100, 100, 100, 100).drag()
    })
}
COOLBALLS = function () {
    W(400, 400).C('w')._(function () {
        //cjs.rulers()
        _.t(8, function () {
            var b = w.D(R(100, 50), R(100, 50), 'b', 50)
            b.$h('x', 'X', 1)
                .c('x', 'X', 1)
                .bf('sun', [0, .9, 1, 1, -40, 2])
                .cir(50)
        })
    })
}
//!!!!
CANVASBMFILLBALLS = function () {
    W(400, 400).C('w')._(function () {
        //cjs.rulers()
        w.p(0, 0, 10).stat()
        _.t(8, function () {
            w.D(R(100, 50), R(100, 50), 'b', 30)
        })
        w.$$(function () {
            _.t(8, function () {
                var b = w.D(R(100, 50), R(100, 50), 'b', 30)
                b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
            })
        })
        w.i.T(200, 100, '$$ me')
    })
}
CANTFBALLS2 = function () {
    W([400, 400], {w: 'U'}).C('w')._(function () {
        //cjs.rulers()
        w.p(0, 0, 10).stat()
        _.t(8, function () {
            w.D(R(100, 50), R(100, 50), 'b', 30)
        })
        $.ev(3, function () {
            var b = w.D(200, 200, 'b', 80)
            b.$h('x', 'X', 1).c('x', 'X', 1).bf(
                w.s.cv0,
                cjs.m2d(
                    .6, .1, .1, .6, -40, 180
                )
            ).cir(80)
        })
    })
}
TEXTBALLS = function () {
    W([400, 400], {}).C('w')._(function () {
        b = w.D(200, 200, 'b', 80)
        b.gx = b.gx || w.g.ct()
        b.gx.qB('chicks').rC().sXY(.1).Y(30)
        nice = w.i.T(0, 140, 'nice', 100, 'o')
        b.bS(nice)
    })
}
cjs.m2d = function (a, b, c, d, e, f) {
    if (U(c)) {
        return new cjs.Matrix2D(1, 0, 0, 1, N(a, 0), N(b, 0))
    }
    return new cjs.Matrix2D(
        N(a, 1),
        N(b, 0),
        N(c, 0),
        N(d, 1),
        N(e, 0),
        N(f, 0)
    )
}
MAT2D = function () {
    /*
     a Scales the drawing horizontally
     b Skew the the drawing horizontally
     c Skew the the drawing vertically
     d Scales the drawing vertically
     e Moves the the drawing horizontally
     f Moves the the drawing vertically
     */
}
h.pol = function (V, c, C, l) {
    var h = this, g = G(arguments), o
    //array must come first b/c its an obj
    o = A(g.f) ? {v: g.f, c: g.s, C: g.t, l: g[3]} : O(g.f) ? g.f : {}
    b2d.oDef(o)
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
h.col = h.fs = function () {
    var h = this, gx = h.graphics, g = G(arguments)
    gx.fs.apply(gx, g)
    return h
}
h.z = h.clr = function () {
    this.graphics.clear();
    return this
}
h.c = h.f = function (c, C, l) {
    var h = this, gx = h.graphics, g = G(arguments), o
    o = g.O ? g.f : g.m ? {c: '*'} : g.f == '**' ? {c: '**'} : g.f == '***' ? {c: '***'} :
        g.u ? {c: 'z', C: 'w', l: 6} :
            // 'c-C-l'
            N(g.s) ? {c: g.f, l: g.s} : g.N_ ? {l: g.f, C: g.s} : {c: g.f, C: g.s, l: g.t}
    if (A(o.c)) {
        if (N(o.c[1])) {
            o.l = o.c[1];
            o.c = o.c[0]
        }
        else if (N(o.c[0])) {
            o.l = o.c[0];
            o.C = o.c[1]
        }
        else {
            o.l = o.c[2];
            o.C = o.c[1];
            o.c = o.c[0]
        }
    }
    if (A(o.C)) {
        o.l = o.C[1];
        o.C = o.C[0]
    }
    if (o.c == 0) {
        gx.f(null);
        o.c = 'X'
    }
    if (o.C == 0) {
        gx.s(null);
        o.C = 'X'
    }
    if (o.c == 00) {
        gx.f(null);
        gx.s(null);
        o.c = 'X';
        o.C = 'X'
    }
    if (o.c == '*') {
        o.c = $r()
    }
    if (o.C == '*') {
        o.C = $r()
    }
    if (o.c == '**') {
        o.c = $r();
        o.C = $r()
    }
    if (o.c == '***') {
        o.c = $r();
        o.C = $r();
        o.l = R(20)
    }
    if (S(o.c)) {
        gx.f(oO('c', o.c))
    }
    if (S(o.C)) {
        gx.s(oO('c', o.C))
    }
    if (N(o.l)) {
        h.l(o.l)
    }
    if (o.lf) {
        o.lf = O(o.lf) ? o.lf : {}
        if (o.r) {
            o.r = N(o.r, 0)
            o.x = N(o.x, 0)
            o.y = N(o.y, 0)
            o.lf.x1 = N(o.lf.X1) ? o.lf.X1 : N(o.lf.x1, 0) + o.x - o.r
            o.lf.y1 = N(o.lf.Y1) ? o.lf.Y1 : N(o.lf.y1, 0) + o.y - o.r
            o.lf.x2 = N(o.lf.X2) ? o.lf.X2 : N(o.lf.x2, 0) + o.x - o.r
            o.lf.y2 = N(o.lf.Y2) ? o.lf.Y2 : N(o.lf.y2, 0) + o.y + o.r
        }
        /*
         $l('r: ' + o.r)
         $l('x: ' + o.x)
         $l('y: ' + o.y)
         $l('x1: '+ o.lf.x1)
         $l('y1: '+ o.lf.y1)
         $l('x2: '+ o.lf.x2)
         $l('y2: '+ o.lf.y2)

         */
        h.lf(o.lf)
    }
    if (o.rf) {
        o.rf = O(o.rf) ? o.rf : {}
        o.c = [2, 'z']
        if (o.r) {
            o.rf.x1 = N(o.rf.X1) ? o.rf.X1 : _.tN(o.rf.x1) + o.x
            o.rf.y1 = N(o.rf.Y1) ? o.rf.Y1 : _.tN(o.rf.y1) + o.y
            o.rf.x2 = N(o.rf.X2) ? o.rf.X2 : _.tN(o.rf.x2) + o.x + 20
            o.rf.y2 = N(o.rf.Y2) ? o.rf.Y2 : _.tN(o.rf.y2) + o.y + 20
            o.rf.r2 = N(o.rf.R2) ? o.rf.R2 : _.tN(o.rf.r2) + o.r
        }
        h.rf(o.rf)
    }
    if (o.ls) {
        o.ls = O(o.ls) ? o.ls : {}
        if (o.r) {
            o.ls.x1 = _.tN(o.ls.x1) + o.x - o.r
            o.ls.y1 = _.tN(o.ls.y1) + o.y - o.r
            o.ls.x2 = _.tN(o.ls.x2) + o.x - o.r
            o.ls.y2 = _.tN(o.ls.y2) + o.y + o.r
        }
        h.ls(o.ls)
    }
    if (o.rs) {
        o.rs = O(o.rs) ? o.rs : {}
        if (o.r) {
            o.rs.x1 = _.tN(o.rs.x1) + o.x
            o.rs.y1 = _.tN(o.rs.y1) + o.y
            o.rs.x2 = _.tN(o.rs.x2) + o.x
            o.rs.y2 = _.tN(o.rs.y2) + o.y
            o.rs.r2 = _.tN(o.rs.r2) + o.r
        }
        h.rs(o.rs)
    }
    if (o.bs) {
        h.bs(o.bs)
    }
    if (o.bf) {
        h.bf(o.bf)
    }
    return h
}
h.C = h.s = function (C, l) {
    var h = this, gx = h.graphics
    gx.s(oO('c', C))
    if (N(l)) {
        h.l(l)
    }
    return h
}
h.l = h.ss = function (l, b, c) {
    var h = this, gx = h.graphics;
    gx.ss(l || 1, b, c)
    return h
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
h.es = function () {
    var h = this, gx = h.graphics
    gx.es()
    return h
}
h.cp = function () {
    this.graphics.cp();
    return this
}
h.lt = function (x, y) {
    var h = this, gx = h.graphics, v
    if (A(x) && O(x[0])) {
        return h.lt.apply(h, x)
    }
    if (N(x)) {
        gx.lt(x, y);
        return h
    }
    _.e(arguments, function (v) {
        v = V(v)
        h.lt(v.x, v.y)
    })
    return h
}
h.mt = function (x, y) {
    var h = this,
        gx = h.graphics, g = arguments, x = g[0], y = g[1], v
    if (A(g[0]) && O(g[0][0])) {
        _.e(g, function (v) {
            h.mt.apply(h, v)
        });
        return h
    }
    if (N(x)) {
        v = V(x, y);
        gx.mt(v.x, v.y)
    }
    else {
        v = V(_.f(g))
        h.mt(v.x, v.y)
        _.e(_.r(g), function (v) {
            v = V(v)
            h.lt(v.x, v.y)
        })
    }
    return h
}
// BITMAP FILL  !!!!!!
h.bf = function () {
    var h = this, gx = h.graphics, g = G(arguments), tf
    if (!F(Q)) {
        if (A(g.s)) {
            g.s = cjs.m2d.apply(cjs, g.s)
        }
        tf = g.s || cjs.m2d(R(500), R(300))
        if (S(g.f)) {
            gx.bf(Q.i(g.f), null, tf)
        }
        else if (O(g.f)) {
            gx.bf(g.f, null, tf)
        }
        return h
    }
    if (S(g.f)) {
        $.i(g.f, function (i) {
            gx.bf(i[0])
            if (F(g.s)) {
                g.s(h)
            }
        })
    }
    else if (g.O_ && A(g.f.hs)) {
        $.i(g.f.i || 'me', function (i) {
            gx.bf(i[0])
            if (F(g.s)) {
                _.e(g.f.hs, g.s)
            }
        })
    }
    else {
        gx.bf(g.f, null, g.s)
    }
    //h.ef()
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
h.bC = function (o) {
    var h = this;
    return h.bf(o, function (h1) {
        h.dc(h1)
    })
}
//calls bitmap fill and lets it load up the bitmap (my face)
//then passes in a function to be called once the image has finished loading
//in this case, the function draws a rectangle (and the bitmap is automatically used as the fill)
h.bfR = h.bmR = h.bR = function (o) {
    var h = this;
    if (F(Q)) {
        h.bf(o, function (h1) {
            h.rec(h1)
        })
        return h
    }
    /*

     h.bmR1= function(o){var h=this;
     o=df.b(o)
     $.i(o.i,
     function(i){_.e(o.hs,
     function(g){
     h.bf(i[0])
     h.rec(g)
     h.ef() })
     })
     return
     }
     */
    h.bf(o.bf)
    h.rec(o.hs)
    _.e(o.hs, function (r) {
        w.rec(r.w, r.h)
    })
    return h
}
BMF1 = function () {
    W()
    //h.bC
    w.i.h(50, 200, '+')
        .bC({hs: [{r: 80}, {r: 50, x: 100}, {r: 100, x: 400}]})
    //h.bf
    w.i.h(800, 100, '+')
        .bf('me', function (h) {
            h.dc([80], [90, 0, 68])
        })
    //h.bV
    w.D(200, 300).pol({
        v: [[0, 100], [0, -100], [200, -150], [200, 150]],
        c: 'y', C: 'w', l: 5,
        bm: 1
    })
    /*
     b =   w.D(600,300, 'r', 100,300)
     h= w.i.h().bR({hs:[{w:100,h:300}]})
     b.bS(h)
     */
    w.bmR(600, 300, 'b', 100, 300)
    w.bmR(300, 300, 100, 300)
    w.i.h(350, 150, '+')
        .pol({v: v1, bf: 'me'})
    w.D(950, -200)
        .pol({c: 'o', C: 'z', l: 25, bm: 1, v: v1})
    w.D(500, 200)
        .pol({v: [[-100, 0], [0, -100], [100, -50], [0, -50]], c: 'y', C: 'r', l: 5, bm: 1})
    //h.bV //w.pol
    w.pol(400, 500, [[-100, 0], [0, -100], [100, -50], [0, -50]])
    w.bg.bm('me', 6.2, function (bm) {
        bm.X(500)
    })
}
BMF = function () {
    W()._(function () {

        //h.bC
        w.i.h(50, 200, '+')
            .bf('chicks')
            .dc({r: 80}, {r: 50, x: 100}, {r: 100, x: 400})
        //h.bf
        w.i.h(800, 100, '+')
            .bf('guy')
            .dc([80], [90, 0, 68])
        //h.bV
        w.D(200, 300).pol({
            v: [[0, 100], [0, -100], [200, -150], [200, 150]], // c: 'y',C: 'w',l: 5,
            bf: 'guy'
        })
        b = w.D(600, 300, 'r', 400, 300)
        h = w.bg.h().al(.5)
        h.bf('sun')
        h.rec({w: 400, h: 300})
        b.bS(h)
        w.bfR(600, 300, 'guy', 100, 100, 'X')
        w.bfR(300, 300, 'sun', 100, 100, 'z')
        w.bfR(300, 300, 'chicks', 100, 100)
        w.D(500, 400).pol({
            v: [[-100, 0], [0, -400], [100, -50], [0, -50]],
            c: 'z', C: 'r', l: 5,
            bf: 'sun'
        })
        //w.i.h(350, 150, '+').pol({v: v1, bf: 'me'})
        w.D(550, 200).pol({
            c: 'o', C: 'z', l: 25,
            bf: 'chicks',
            v: [[-100, 0], [0, -200], [100, -50], [0, -50]]
        })
        //h.bV //w.pol
        w.D(400, 500).pol({v: [[-100, 0], [0, -100], [100, -50], [0, -50]]})
        w.bg.Bm('me').sXY(6.2).X(500).al(.2)
    })
}
BFREC = function () {
    W()
    w.i.h(200, 300).dg()
        .bf('me',
        function (h) {
            h.rec({w: 500, h: 200})
        })
    w.i.h().dg().bf('me',
        function (h) {
            h.rec({w: 500, h: 200})
            w.D(600, 300, 'b', 500, 200).bS(h)
        })
}
POL = function () {
    W()
    w.D(500, 400, [-100, 0], [0, -100], [100, 50], [0, -70])
    w.D(500, 430).pol('r', [[-100, 0], [0, -20], [40, 50]])
}
ct.h = function () {
    var ct = this,
        h = $H.apply($H, arguments)
    ct.A(h)
    return h
}
w.$h = function () {
    return this.i.h.apply(this.i, arguments)
}
// h = $h().a2(s).rXY(100, 300).XY(100,300).drag()
//  h.rec( 'r','b',600, 200,  600, 200)
// h.rec( 'g',100, 100,  100, 20)
h.rec = function () {
    var h = this, g = G(arguments), o
    if (g.OO_) {
        g.e(function (g) {
            h.rec(g)
        });
        return h
    }
    o = g.O ? g.f :
        S(g.s) ? {c: g.f, C: g.s, x: g.t, y: g[3], w: g[4], h: g[5], l: g[6]} :
            g.S_ ? {c: g.f, x: g.s, y: g.t, w: g[3], h: g[4], l: g[5]} :
                N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g[3], c: g[4], C: g[5], l: g[6]} :
                {w: g.f, h: g.s, c: g.t, C: g[3], l: g[4]}
    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    o.w = N(o.w, 50)
    o.h = N(o.h, o.w)
    if (o.i) {
        h.bf(o.i, function () {
            o.i = null
            h.rec(o)
        })
        return h
    }
    if (o.c) {
        h.c(o)
    }
    if (o.lf) {
        h.lf({
            c1: o.c1 || 'z', c2: o.c2 || 'w',
            s1: 0, s2: 1,
            x: o.x - o.w / 2, y: o.y - o.h / 2, x2: o.x - o.w / 2, y2: o.y + o.h / 2
        })
    }
    h.dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
    return h
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
h.dr = function () {
    var h = this, gx = h.graphics, g = G(arguments),
        o = g.O ? g.f :
            N(g.t) ?
            {x: g.f, y: g.s, w: g.t, h: g[3]} :
            {w: g.f, h: g.s}
    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    o.w = N(o.w, 100);
    o.h = N(o.h, o.w)
    gx.dr(o.x, o.y, o.w, o.h)
    return h
}
b.pol = function () {
    var b = this, w = b.W(), g = G(arguments), fs, n, arr, o, vs
    b2d.mini()
    //-> {c:'r', v:[[],[],[]]} //pass in {c:'r', v:[[],[],[]]} //pass in [[],[],[]] //pass in ['r',[],[],[]]
    // b.fs(function(f){b1.pol(f.rV())})//g[0].ps(function(v){b.pol(v)})// else {_.e(g[0], function(v){b.pol(v)})}
    if (g.u) {
        return b
    }
    if (iP(g.f) && U(g.s)) {
        return b.pol({v: g.f})
    }
    if (S(g.f) && iP(g.s) && U(g.t)) {
        return b.pol({c: g.f, v: g.s})
    }
    if (iF(g.f)) {
        g.f = g.f.rV()
    }
    else if (iB(g.f)) {
        g.f.fs(b);
        return b
    }
    if (g.A) {
        o = S(g.f[0]) ?
        {c: g.f[0], v: _.r(g.f)} :
        {v: g.f}
    }
    else {
        o = g.O ? g.f :
            g.S_ ?
                (g.t ?
                {c: g.f, v: g.r} :
                {c: g.f, v: g.s}) :
            {v: g}
    }
    o = df.h(o)
    if (iP(o.v)) {
        o.v = o.v.vs()
    }
    n = b.n()
    if (O(o.v[0][0])) {
        _.e(o.v, function (v) {
            b2d.sep(b, v)
        })
    }

    //pass in 2 or more objs->
    else {
        b2d.sep(b, o.v);
        o.v = [o.v]
    }
    //pass in one object
    //->  ['r', [],[],[] ]//->  [[],[],[]]
    //pass in color and loose verts//->'r',[],[],[]//->  'r', [[],[],[]]
    //just pass in loose verts//-> [],[],[]
    //same two as above but also nested in wrapper array.. so just ONE pam
    //if (o.X) {b.clear()}
    //the NEW fixts
    fs = _.f(b.fs(), b.n() - n) //each of only the NEW fixts
    _.e(fs, function (f) {
        f.d(o.d).r(o.b).fr(o.f)
        if (o.s) {
            f.m_isSensor = o.s ? true : false
            f.sen(1)
        }
        f.K(o.k)
        f.C(o.c, o.C, o.l)
        if (o.lf) {
            f.bS(w.s.h().lf(o).lt(o.v))
        }
        if (o.rf) {
            f.bS(w.s.h().rf(o).lt(o.v))
        }
    })
    o.i = o.i || o.bf
    if (o.i) {
        h = w.g.h()
        h.bV(o)
        b.bS(h)
    }
    //b.cir('y', 10);b.cir('z', 6)
    return fs.length > 1 ? fs : fs[0]
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
grad = function () {
    b2d.grad = function (o) {
        o = o || {}
        o.c1 = oO('c', o.c1 || 'z')
        o.c2 = oO('c', o.c2 || 'w')
        o.s1 = N(o.s1)
        o.s2 = N(o.s2, 1)
        o.x1 = N(o.x1)
        o.y1 = N(o.y1)
        return o
    }
    cjs.lg = h.lg = function () {
        var g = G(arguments), o//h=this, gx=h.graphics,
        if (g.A) {
            return cjs.lg.apply(null, g.f)
        }
        o = g.O ? g.f :
            _.x({c1: g.f, c2: g.s},
                N(g[5]) ? {x1: g[2], y1: g[3], x2: g[4], y2: g[5]}
                    : N(g[4]) ? {y1: g[2], x2: g[3], y2: g[4]}
                    : N(g[3]) ? {x2: g[2], y2: g[3]} : {y2: g[2]})
        o.c1 = oO('c', o.c1 || 'z');
        o.c2 = oO('c', o.c2 || 'w')
        o.s1 = N(o.s1, 0);
        o.s2 = N(o.s2, 1)
        o.x1 = N(o.x1, 0);
        o.y1 = N(o.y1, 0)
        o.x2 = N(o.x2, 0)
        o.y2 = N(o.y2) ? o.y2 : N(o.r) ? o.r * 2 : 100
        return o
    }
    h.lf = function () {
        var h = this, gx = h.graphics, g = G(arguments), o
        o = cjs.lg(g)
        gx.lf([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
        return h
    }
    h.rg = function (o) {
        var h = this, g = G(arguments),
            gx = h.graphics,
            o
        if (A(g[0]) && A(g[1])) {
            gx.rf(
                [oO('c', g[0][0]), oO('c', g[0][1])], g[1], g[2], g[3], g[4], g[5], g[6], g[7]
            )
            return h
        }
        o = O(g[0]) ? g[0] :
            S(g[1]) ? _.x({c1: g[0], c2: g[1]},
                N(g[7]) ?
                {x1: g[2], y1: g[3], r1: g[4], x2: g[5], y2: g[6], r2: g[7]}
                    : N(g[5]) ?
                {x2: g[2], y2: g[3], r1: g[4], r2: g[5]}
                    : N(g[4]) ?
                {x2: g[2], r1: g[3], r2: g[4]}
                    : N(g[3]) ?
                {r1: g[2], r2: g[3]}
                    :
                {r2: g[2]})
                : S(g[0]) ?
            {c2: g[0]}
                : {}
        b2d.grad(o)
        o.x2 = N(o.x2, o.x1)
        o.y2 = N(o.y2, o.y1)
        o.r1 = N(o.r1, 1);
        o.r2 = N(o.r2, 100)
        return o
    }
    h.ls = function me() {
        var h = this, gx = h.graphics, g = G(arguments), o
        if (A(g[0])) {
            return me.apply(h, g[0])
        }
        o = h.lg.apply(h, g)
        gx.ls([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
        return h
    }
    h.rf = function me() {
        var h = this, gx = h.graphics, g = G(arguments), o
        if (A(g[0])) {
            return me.apply(h, g[0])
        }
        o = h.rg.apply(h, g)
        gx.rf(
            [o.c1, o.c2],
            [o.s1, o.s2],
            o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
        return h
    }
    h.rs = function me() {
        var h = this, gx = h.graphics, g = G(arguments), o
        if (A(g[0])) {
            return me.apply(h, g[0])
        }
        o = h.rg.apply(h, g)
        gx.rs([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
        return h
    }
    w.lG = function (c, c2) {
        var w = this, o
        o = {c1: c2 || 'z', c2: c || 'r', x1: 0, y1: 0, x2: 0, y2: 0}
        _.x(o, R() ? (R() ? {y2: w.h} : {x2: w.w}) :
            R() ? (R() ? {x1: w.w, y1: w.h} : {x2: w.w, y2: w.h}) :
                R() ? {x1: w.w, y2: w.h} : {y1: w.h, x1: w.w})
        w.bg.h().lf(o).dr(0, 0, w.w, w.h)
        w.bg.h(0, 0, $r()).dr(0, 0, w.w, w.h).al(.2)
        return w
    }
    b2d.p()
    s.cannonBall = function (x, y) {
        var s = this, h
        h = s.h(x, y)
        h.rf('a', 'z', 18).dc(18).ef()
        return h
    }
    s.basketBall = function (x, y) {
        var s = this
        return this.h(x, y).rf('w', 'o', 18).dc(18).ef()
    }
    s.beachBall = function (x, y) {
        var s = this
        return s.h(x, y)
            .rf('b', 'r', 18).dc(18).ef()
    }
    s.snowBall = function (x, y) {
        var s = this
        return s.h(x, y).rf('a', 'w', 18).dc(18).ef()
    }
    w.badGuy = function (x, y) {
        var that = this, w = this
        b = w.D(x, y, 'd', 60).K('badGuy').bS(
            w.s.h(x, y)
        )
        b.draw = function (frame) {
            var b = this
            b.sp().rf(['r', 'g'],
                [frame[0], frame[1]], 60).dc(60)
        }
        b.h = b.health = 100
        b.cl(function () {
            b.h--
        })
        funcId = I(function () {
            b.draw(frameByHealth(b))
            if (b.h <= 0) {
                clearInterval(funcId);
                b.kill()
            }
            function frameByHealth(b) {
                if (b.h < 0) {
                    b.h = 0
                }
                if (b.h > 100) {
                    b.h = 100
                }
                if (b.h < 50) {
                    return [1 - ((b.h / 50)), 1]
                }
                else {
                    return [0, 1 - ((b.h - 50) / 50)]
                }
            }
        }, 300)
        return b
    }
    RADIANTBALLS = function () {
        s = cjs.S('a')
        b1 = s.cannonBall(100, 200)
        b2 = s.basketBall(100, 100)
        b3 = s.beachBall(50, 50)
        b3 = s.snowBall(50, 300)
    }
    DIRTYBALLS = function () {
        W({grav: 0})
        w.dirtyBall = function (x, y, stop1, stop2) {
            return this.gradBall(x, y, 60, 'z', 'w', stop1, stop2)
        }
        w.gradBall(200, 100, 60, 'z', 'w')
        w.dirtyBall(350, 100, 0, .9)
        w.gradBall(500, 100, 60, 'z', 'w', 0, .6)
        w.gradBall(650, 100, 60, 'z', 'w', 0, .3)
        w.gradBall(800, 100, 60, 'z', 'w', 0, .1)
        w.gradBall(350, 300, 60, 'z', 'w', .3, 1)
        w.dirtyBall(500, 300, .6, 1)
        w.dirtyBall(650, 300, .9, 1)
        w.dirtyBall(800, 300, 1, 1)
    }
    STATUSBALL = function () {
        W({grav: 0})
        b = w.D(500, 300, 'r', 60).bS(w.s.shape(500, 300))
        num = 0
        dif = .1
        shape = b.sprite
        shape.rG(['r', 'y'], [0, num],
            0, 0, 0, 0, 0, 60)
            .dc(0, 0, 60)
        $.ev(.1, function () {
            num += dif
            if (num >= 1) {
                num = .9;
                dif = -.1
            }
            if (num <= 0) {
                dif = .1
            }
            shape.rf(['r', 'y'], [0, num],
                0, 0, 0, 0, 0, 60)
                .dc(0, 0, 60)
        })
    }
    SWITCHBALL = function () {
        W({g: 0})
        b = w.D(500, 300, 'r', 60)
        b.bS(
            w.s.h(500, 300)
        )
        b.draw = function (frame) {
            var b = this
            b.sp().rf(
                ['r', 'y'], [frame[0], frame[1]],
                0, 0, 0, 0, 0, 60
            ).dc(60)
        }
        frames = [
            [0, .1],
            [0, .3],
            [0, .6],
            [0, .9],
            [0, 1],
            [.3, 1],
            [.6, 1],
            [.9, 1],
            [1, 1]]
        curr = 0
        $.ev(1, function () {
            b.draw(frames [curr])
            curr++
            if (curr == 9) {
                curr = 0
            }
        })
    }
    HEALTHBALL = function () {
        W({g: 0})
        w.badGuy(500, 300)
    }
    SWITCHBALLWORKSBUTTOOCOMPLICATED = function () {
        w = b2d.W({grav: 0})
        advanceN = function (n, dif) {
            n += dif
            if (n >= 1) {
                n = .9;
                dif *= -1
            }
            if (n <= 0) {
                n = 0;
                dif *= -1
            }
            return {n: n, dif: dif}
        }
        switchBall1 = function (x, y) {
            var dif = .1, n1 = 0, n2 = 0,
                b = w.ball(x, y, 60).bindSprite2(w.s.shape(x, y))
            I(function () {
                n2 = advanceN(n2);
                drawGrad()
            }, 100)
            function drawGrad() {
                b.sprite.rG(['r', 'y'], [n1, n2], 60).dc(0, 0, 60)
            }

            function advanceN(n2) {
                n2 += dif
                if (n2 >= 1) {
                    n2 = .9;
                    dif *= -1
                }
                if (n2 <= 0) {
                    n2 = 0;
                    dif *= -1
                }
                ;
                return n2
            }
        }
        switchBall2 = function (x, y) {
            var ball = w.ball(x, y, 60).bindSprite2(w.s.shape(x, y))
            ball.drawGrad = function (n1, n2) {
                return this.sprite.rG(['r', 'y'],
                    [n1, n2], 60).dc(0, 0, 60)
            }
            ball.animGrad1 = function () {
                var that = this,
                    dif = .1, n2 = 1, n1 = 0
                I(function () {
                        var res = advanceN(n1, dif)
                        dif = res.dif
                        n1 = res.n
                        that.drawGrad(n1, n2)
                    },
                    300)
            }
            ball.animGrad2 = function () {
                var that = this, dif = .1
                I(function () {
                        var res = advanceN(n1, dif)
                        dif = res.dif
                        n1 = res.n
                        that.drawGrad(n1)
                    },
                    300)
            }
            ball.animGrad1()
        }
        switchBall1(100, 100)
        switchBall2(300, 100)
        w.s.back.linGrad('u', 'p')
        w.s.HUD.bm('me', function (bm) {
            me = bm.sXY(.3).XY(1150, 550).drag()
        })
    }
    TRIPLESTAGE = function () {
        w = b2d.W({grav: 0})
        b = w.ball(500, 300, 60)
        b.bindSprite2(w.s.shape(500, 300))
        num = 0
        dif = .1
        shape = b.sprite
        shape.rG(['r', 'y'], [0, num], 60)
            .dc(0, 0, 60)
        w.s.HUD.bm('me', function (b) {
            b.XY(300).drag()
        })
        w.s.back.bm('guy', function (b) {
            b.XY(200).drag()
        })
        w.s.back.linGrad('b', 'z')
    }
    RADIANT = function () {
        W().P()
        p.lD(1).warp()
        $.space(
            function () {
                p.polyBul()
            }
        )
        badGuy = w.badGuy(
            400, 200).warp().den(.1)
        $.ev(.2, function () {
            w.s.pen('badGuy health: ' + badGuy.health)
        })
    }
};
grad()
cjs.iT = function (t) {
    if (O(t)) {
        return (t.textBaseline)
    }
}
ct.cX = function () {
    return this.St().cen().x
}
ct.cY = function () {
    return this.St().cen().y
}
b.C = function (c) {
    this.fs(function (f) {
        f.C(c)
    })
    this._col = c
    return this
}
f.C = function () {
    var f = this, b = f.B(), w = b.W(), g = G(arguments), o,
        h
    o = g.O ? g.f :
    {c: g.f, C: g.s, l: g[2]}
    o.c = (o.c == '*') ? $r() : (o.c || 'b')
    o.C = o.C || o.c
    f.removeSprites()
    h = f.iC() ?
        // if circle?
        w.s.h().cir(f.pX(), f.pY(), f.rad(), o.c, o.C, o.l) :
        // if poly
        w.s.h().pol(f.rV(), o.c, o.C, o.l)
    f.bS(h)
    b.i = h
    return f
}
f.bS = function () {
    var f = this, b = f.B(), w = b.W(), s = f.S(), g = G(arguments), o, j
    if (g.S_) {
        Q(function () {
            var bm = Q.b(g.f)
            f.bS(
                $Ct().A(
                    bm.XY(f.pos().x, f.pos().y).rC())
            )
        })
        return f
    }
    o = cjs.iDO(g.f) ?
    {j: g.f, rt: g.s, x: g.t, y: g[3], o: g[4]} : g.O ? g.f : {}
    f.sprites = f.sprites || []
    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    o.rt = N(o.rt, 0)
    o.o = N(o.o, 1)
    o.al = N(o.al, 1)
    j = o.j.al(o.al)
    w.g.A(j)
    f.sprites.push(j)
    T.t(function () {
        j.XY(b.X() + o.x, b.Y() + o.y)
        j.rt(b.rt() + o.rt)
    })
    return f
}
BS = function () {
    W()._(function () {
        x = w.D(600, 300, 'x', 200, 100)
        f = x.cir({r: 100, x: 300, c: 'r'})
        me = Q.b('me').rC()
        f.bS(me, 0, f.pX(), f.pY())
    })
}
w.txC = function () {
    var w = this
    $.ev(2, function () {
        w.e(function (b) {
            b.fs(function (f) {
                f.C($r())
            })
        })
    })
}
w.sH = function (h) {
    var w = this
    if (U(h)) {
        return w.H * w.s.scaleY
    }
    w.s.scaleY = h / w.H
    return w
}
b.St = b.S = b.stg = function () {
    return this.W().s
}
f.S = f.stg = function () {
    return this.W().s
}
w.C = function (c) {
    var w = this
    w.bg.h().c(c || $r()).dr(0, 0, w.w, w.h)
    return w
}
w.l = w.dl = function () {
    var w = this, g = G(arguments), o, i
    o = S(g[0]) ?
    {c: g[0], x1: g[1], y1: g[2], x2: g[3], y2: g[4]}
        :
    {x1: g[0], y1: g[1], x2: g[2], y2: g[3]}
    i = g.p ? w.fg : g.n ? w.bg : g.d ? w.g : w.i
    o.c = o.c || (g.p ? 'p' : g.n ? 'r' : g.d ? 'd' : 'b')
    return i.h()
        .c(10, o.c)
        .mt(o.x1, o.y1)
        .lt(o.x2, o.y2).K('dev line')
}
w.dr = function (c, x, y, W, h) {
    var w = this, g = G(arguments), o
    o = g.S_ ? {c: g[0], x: g[1], y: g[2], w: g[3], h: g[4]}
        : {x: g[0], y: g[1], w: g[2], h: g[3]}
    _.x(o, g.p ? {g: w.fg, c: o.c || 'p'} :
        g.n ? {g: w.bg, c: o.c || 'r'} :
        {g: w.hud, c: o.c || 'b'})
    o.g.h().rec(o)
}
w.dbCross = function (x, y) {
    var w = this, c = w.cen()
    x = N(x, c.x)
    y = N(y, c.y)
    w.dr('t', -10 + x, -140 + y, 20, 300, '-')
    w.dr('t', -150 + x, -10 + y, 300, 20, '-')
    w.dot('r', x, y)
    return w
}
b.horizCenter = function () {
    var b = this
    //-> b.X('hC')
    b.X(b.W().hW)
    return b
}
//b.g=function(){ return this.f().g }
i.dot = function () {
    var i = this
    i.getStage().dot(i.X(), i.Y())
    return i
}
i.flash = function () {
    var i = this
    i.opacity(0)
    $.in(.3, function () {
        i.opacity(1)
    })
    return i
}
w.stats = function (n) {
    var w = this
    _d = $.d(400, 600, w.W, 0, '+').A($.h1('stats'))
    w.mdq(function (fx) {
        _f = _d._fix = fx;
        _b = _f.B()
    })
    if (n == 0) {
        z(upd)
    }
    else {
        $.ev(N(n, .2), upd)
    }
    return w
    function upd() {
        var f, b;
        if (_d._fix) {
            f = _d._fix
            b = f.B()
            _d.T(
                'ty: ' + (b.iD() ? 'dyn' : 'stat'),
                'x: ' + b.X(),
                'y: ' + b.Y(),
                'fK: ' + f.K(), 'bK: ' + b.K(),
                'sen: ' + f.sen(),
                'd: ' + f.d(),
                'fr: ' + f.fr(),
                'r: ' + f.r(),
                'bMass:' + parseInt(f.B().mass()),
                'bNum:' + f.B().n()
            )
        }
    }
}
w.devGrid = function () {
    var w = this
    _.t(12, function (i) {
        w.l(i * 200, 0, i * 200, w.h)
        w.l(i * 200, 0, i * 200, w.h, '-')
        w.l(0, i * 200, w.w, i * 200)
        w.l(0, i * 200, w.w, i * 200, '-')
    })
    return w
}
ct.C = ct.backgroundColor = function (c) {
    var ct = this
    $(ct.canvas).C(c)
    return ct
}
COL = function () {
    W();
    b = w.S(600, 300, 'w', 200);
    $.in(function () {
        b.dyn().f().C('z')
    })
}
DEV = function () {
    W([1200, 600, 1400, 800], {g: 50, t: 0}).stats()
    //  w.dr(100, 100, 100, 100, '-')
    //  w.dr(100, 200, 100, 100, '+')
    w.dl('r', 0, 100, 5000, 5000, '-')
    w.dl('p', 0, 200, 5000, 2000)
    w.dl('b', 0, 300, 5000, 3000, '+')
    wh = w.S(400, 350, 'w', [[300, 220, '-']])
    or = w.S(400, 200, 'o', 300, 50)
    pi = w.S(400, 500, 'x', 300, 50)
    y = w.ship(150, 200).damp(1, 10).rot(90).lD(0).rot(120).lV(1);
    w.track(y, 600, 300, '!')
    b = w.D(700, 200, 'b', 100)
    me = w.me()
}
w.flash = function () {
    var w = this, s = w.s
    s.flash.apply(s, arguments)
    return w
}
filters = function () {
    BlurFilter = blF = function (bx, by, q) {
        return new createjs.BlurFilter(bx, by, q)
    }
    AlphaMaskFilter = aMF = function (mask) {
        return new createjs.AlphaMaskFilter(mask)
    }
    forMaskFilter = trx = function (n) {
        var g = G(arguments),
            a = []
        //for making mask filter
        if (g.n) {
            return 'rgba(0,0,0,' + g[0] || 0 + ')'
        }
        _.each(g, function (n) {
            a.push(trx(n, '-'))
        })
        return a
    }
    cjs.blurFilter = function (x, y, c) {
        return new cjs.BlurFilter(x, y, c)
    }
//T$ = cjs.Ticker  //dep
    ColorFilter = clF = function (a, b, c, d, e, f, g) {
        return new createjs.ColorFilter(a, b, c, d, e, f, g)
    }
    ColorMatrixFilter = clMF = function (m) {
        return new createjs.ColorMatrixFilter(m)
    }
    ColorMatrix = CM = function () {
        var c = new createjs.ColorMatrix()
        c.b = c.adjustBrightness
        c.c = c.adjustColor
        c.C = c.adjustContrast
        c.h = c.adjustHue
        c.s = c.adjustSaturation
        c.cl = c.clone
        c.cc = c.concat
        c.m = c.copyMatrix
        c.r = c.reset
        c.A = c.toArray
        c.S = c.toString
        return c
    }
    BLUR = blr = function () {
        wMb(function (b) {
            var ag = 0, rg = 100, sp = 0.04
            z()
            s = St(500).drg().a().c('x').a(b.xy(100).cc())
            tt(function (e) {
                v = sin(ag += sp) * rg
                b.cc('+').fl([blF(v, v, 2)])
                s.u(e)
            })
        })
    }
    MASK = msk = function () {
        sss = function () {
            var args = G(arguments)
            z()
            stage = SuperStage(600).a()
            if (args.f) {
                stage.a(args.f)
                _.each(args.r,
                    function (arg) {
                        if (F(arg)) {
                            arg(args.f)
                        }
                    })
            }
            return stage
        }
        wMb(function (b) {
            sss(b, TR)
            b.fl([
                aMF(
                    Gx().lf(
                        trx(1, 0), [0, 1], 0, 0, 200, 200
                    ).dr0(400).H().cc(400).cc('*')
                )
            ]).cc(400)
        })
    }
    COLOR = clr = function (r) {
        var ag = 0, rg = 100, sp = 0.04
        wMb(function (b) {
            z();
            s = St(500).drg().a().c('X').a(b.xy(100))
            b.cc().fl([r == 'g' ? clF(.3, 1, .3, 1, 0, 0, 0, 0)
                : r == 'b' ? clF(.3, .3, 1, 1, 0, 0, 0, 0)
                : r == 'r' ? clF(1, .1, 1, 1, 0, 0, 0, 0)
                : r == 'rg' ? clF(1, 1, .1, 1, 1, 1, 20, 0)
                : clF(1, .1, 1, 1, 0, 0, 0, 0)]).cc('+')
        })
    }
    COLORMATRIX = cmx = function () {
        var g = G(arguments);
        g[0] = g[0] || 'a'
        wMb(function (b) {
                b.xy(100).cc();
                _e(g, function (mf) {
                    b.clMF(mf, '+')
                })
            },
            St(500).drg().a().c('X'))
    }
    BLURFILT = function () {
        z()
        stage = createjs.stage('black', 800).tick().A()
        shape = new createjs.Shape().XY(100)
        stage.A(shape)
        shape.graphics.f("red").dc(0, 0, 50)
        var blurFilter = new createjs.BlurFilter(50, 50, 10)
        shape.filters = [blurFilter]
        var bounds = blurFilter.getBounds()
        shape.cache(-50 + bounds.x, -50 + bounds.y, 100 + bounds.width, 100 + bounds.height)
        shape.startMoving()
        shape.vx = 1
        shape.vy = 1
    }
    BLURFILT2 = function () {
        z()
        stage = createjs.stage('black', 800).tick().A()
        stage.bm('me',
            function (bm) {
                var blurFilter = new createjs.BlurFilter(5, 10)
                bm.filters = [blurFilter]
                var bounds = blurFilter.getBounds()
                bm.cache(-50 + bounds.x, -50 + bounds.y, 400 + bounds.width, 400 + bounds.height)
            }
        )
    }
    BLURFILT3 = function () {
        z()
        $l('welcome to BLUFILTER3')
        $l('here we will attempt an animated blur filter')
        stage = createjs.stage('black', 800).tick().A()
        stage.bm('me',
            function (bm) {
                bm.XY(100, 300).drag()
                var blurFilter = $blurFilter(5, 10)
                bm.filters = [blurFilter]
                var bounds = blurFilter.getBounds()
                bm.cache(-50 + bounds.x, -50 + bounds.y, 400 + bounds.width, 400 + bounds.height)
                var blurAmount = 0,
                    blurMultiple = 40,
                    speed = 0.06
                createjs.Ticker.on('tick', function () {
                    $l('tick')
                    var blur = Math.sin(blurAmount += speed) * blurMultiple;
                    bm.filters = [$blurFilter(blur, blur, 2)]
                    bm.updateCache()
                })
            })
    }
};
filters()
//cjs.chalk=function(t,c){if(O(t)){alert('check code'); t='x: '+t.x+', '+'y: '+ t.y}; return cjs.T(t,"26px Arial", c||"w").XY(550,150)}
/*
 w.i.bm('me', function(bm){
 bm.XY(300).sXY(.2)
 w.i.dot(300,300)
 })*/
SHADOW = function () {
    W().P()
    p.lD(1).warp()
    badGuy = w.badGuy(400, 200).d(.1).warp()
    $.in(1, function () {
        p.sprite.shad("y", 0, 150, 300)
        badGuy.sprite.shad('o', 40, 40, 40)
    })
    $.space(function () {
        p.polyBul()
    })
    $.ev(.2, function () {
        // w.s.pen('badGuy health: ' + badGuy.health)
    })
    $(w.s.back.canvas).C('p')
    s = w.s.back
    s.bm('me', function (bm) {
        bm.drag().shad('blue', 125, 125, 50)
            .XY(100, 100).sXY(.6)
    })
    s.bm('guy', function (bm) {
        bm.drag().shad('r', 100, 100, 10)
            .XY(300, 200).sXY(.6)
    })
    s.bm('me', function (bm) {
        bm.drag().shad("z", 25, 25, 50)
            .XY(500, 100).sXY(.6)
    })
}
more = function () {
    cjs.dia = function self(width, height, fc, sc) {
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
    CENH = function () {
        W()
        h.rec(100, 100, 100, 100, 'y')
        h.rec(200, 200, 100, 100, 'b')
        h.c('o').polyStar(300, 100,
            50, 5, 0.6, -90)
        h.c('w', 'z')
            .roundRectComplex(400, 300,
            300, 300, 20, 20, 30, 40)
        h.cir(500, 200, 40, 'b', 'x', 10)
    }
    OVS = function () {
        St()
        h = s.h(40, 10, 'b', 16).drag()
        h.c({C: ['o', 5], lf: {c1: 'g', c2: 'r', x2: 100, y2: 400}}).de(100, 400)
        h.c({
            C: 'b',
            lf: {c1: 'g', c2: 'r', x2: 400, y2: 100}
        }).de(400, 100)
        h.l(30).lf({c1: 'b', c2: 'y', x1: 100, y1: 100, x2: 500, y2: 400})
            .de(100, 200, 500, 300)
        h.ls('r', 'w', 300, 100, 400, 140).de(300, 0, 300, 500)
    }
    GRAPHTEST = function () {
        St();
        img = $.img('me', function () {
            s.ct().h().bmS(img).ss(32).dr(20, 20, 920, 360);
            _.each([
                    function () {
                        return $h(12, 10)
                            .lf('b', 'g', 130).dr(130)
                    },
                    function () {
                        return $h(40, 10, 'b', 16)
                            .ls('r', 'w', 70, 140).de(70, 140)
                    },
                    function () {
                        return $h(80, 80)
                            .C('b', 8).rf('w', 'y', 40).dc(40)
                    },
                    function () {
                        return $h(12, 10, 18)
                            .bf(img, cjs.M(1)).rs('b', 'g', 30, 130).dr(130)
                    },
                    function () {
                        return $h(12, 12, 'g', 'r', 8)
                            .rr(130, 30)
                    }, //w(h) and r
                    function lt() {
                        return $h().C('o')
                            .ss(16, 'round', 'round')
                            .mt([40, 10], [90, 90], [90, 140])
                    },
                    function star() {
                        return $h(80, 85, 'y', 'b', 3)
                            .pStr(0, 0, 80, 5, .8, -95)
                    },
                    function hex() {
                        return $h(80, 40, 'p')
                            .pStr(40, 6).pStr(0, 75, 40, 6).pStr(45, 45, 20, 6)
                    }
                ],
                function (cont, i) {
                    var W = 155, H = 155, P = 5, C = 4 //pad, cols
                    s.A(tile(cont()).XY(
                        42 + (W + P) * (i % C),
                        42 + (i / C | 0) * (H + P)))
                })
        })[0]
        tile = createTile = function (x, y) {
            var bg, til
            bg = $h().c('t').dr(0, 0, 155, 155).ef().op(.2)
            til = cjs.ct().A(bg)
            if (N(x)) {
                til.X(x)
            }
            if (N(y)) {
                til.Y(y)
            }
            if (O(x)) {
                til.A(x)
            }
            return til
        }
    }
    // s.B = function(x,y){return this.ct(x,y).drag() }
    /*
     $a1=function(ob, g, c){

     ob.apply(c||ob,  g)

     }


     $a = function(gx, met, g){

     gx[met].apply(gx, g)

     }


     $a(gx, 'dc',  N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )

     gx.dc.apply(gx, N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )

     gx.app=function(met,g){var gx=this

     gx.dc.apply(gx, N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )

     }
     */
    h.C2 = function (C, l) {
        var h = this, gx = h.graphics, g = G(arguments)
        o = O(g[0]) ? g[0]
            :
        {C: [0], l: g[1]}
        gx.s(o.C ? oO('c', o.C) : null)
        if (N(o.l)) {
            h.l(o.l)
        }
        return h
    }
    //******** here is the problem.. gotta let h.poly also defer to rect (and circ?)
    h.rc = h.roundRectComplex = function () {
        var h = this, gx = h.graphics
        gx.drawRoundRectComplex.apply(gx, arguments)
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
    ROUNDREC = function () {
        St()
        h.c('b', 'r', 5).dc(100, 100, 100)
        h.dr(300, 200, 100, 50)
        h.dr2(500, 200, 100, 50)
        h.rr2(500, 200, 100, 50, 50)
        h.de2(500, 200, 100, 50)
        s.dot(100, 100)
        s.dot(300, 200)
        s.dot(500, 200)
        s.dot(500, 200)
        s.dot(500, 200)
    }
    h.drawPolygon = function (V, c, C, l) {
        var h = this, //h.drawConnectedLines =
            n = V.length
        h.c(c, C, l)
        _.e(V, function (v) {
            v.X = v.x
            v.Y = v.y
        })
        if (n >= 3) {
            h.mt(V[0]) //move to the FIRST//lineTo the REST
            $.in(n, function (i) {
                h.lt(V[i % n])
            })
        }
        //just a clever way to start from 1
        return h
    }
    h.bez = h.bt = function (x, y, r, startA, endA, aCW) {
        var h = this, gx = h.graphics
        h.bezierCurveTo(x, y, r, startA, endA, aCW)
        return h
    }
    h.qt = function (x, y, r, startA, endA, aCW) {
        var h = this, gx = h.graphics
        gx.quadraticCurveTo(x, y, r, startA, endA, aCW)
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
    b2d.cov = function (x, y, c, C, l, l2) {
        var g = G(arguments), x = g[0], y = g[1], c = g[2], C = g[3], l = g[4], l2 = g[5],
            o = N(c) ? {x: x, y: y, a: c, c: C, C: l, l: l2}
                : N(x) ? {x: x, y: y, c: c, C: C, l: l}
                : x,
            h = new cjs.Shape()
        b2d.oDef(o)
        h.XY(o.x, o.y).rot(o.a).c(o.c, o.C, o.l)
        if (o.d) {
            h.drag()
        }
        return h
    }
    h.sC = function () {
        var h = this, gx = h.graphics, g = G(arguments)
        gx.sC.apply(gx, g)
        return h
    }
    //b2d.colMap=function(C){return _.map(C,function(c){return oO('c',c)})}
    cjs.RECTx = function (c, W, H, x, y, a) {
        var g = G(arguments), ct = cjs.ct(), h, o;
        if (O(c)) {
            o = c
        } else if (S(c)) {
            o = {c: c, w: W, h: H, x: x, y: y, a: a}
        }
        o = b2d.oDef(o)
        h = ct.h(o.x, o.y).c(o.c, o.C, o.l).rot(o.a)
        if (o.bm) {
            h.bm('me', function () {
                h.dr2(o.x, o.y, o.w, o.h)
            });
            return h
        }
        if (o.rg) {
            h.rg(o.c, o.C)
        }
        if (o.lg) {
            h.lg(o.c, o.C)
        }
        h.dr2(o.x, o.y, o.w, o.h)
        cjs.recx = cjs.rectx = function self(wd, ht, c, C) {
            var h, hW, hH
            wd = _.tN(wd, 100)
            ht = _.tN(ht, wd)
            hW = wd / 2
            hH = ht / 2
            h = $h().c(c || 'g', C || 'w').mt(-hW, -hH)
                .lt(-hW, hH).lt(hW, hH).lt(hW, -hH).lt(-hW, -hH)
            return h
        }
        ct.artx = function (x, y, c, C) {
            var g = G(arguments), ct = this, h
            y = N(g[1]) ? g[1] : x
            c = S(g[2]) ? oO('c', g[2]) : null
            C = S(g[2]) ? oO('c', g[3]) : c
            h = $h(x, y, c, C).a2(ct)
            if (g.p) {
                h.drag()
            }
            return h
        }
        return h
    }
};
more()
//third wheel, wagon hitch
old = function () {
}