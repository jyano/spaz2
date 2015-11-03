cjs=createjs;
T = cjs.Ticker
T.t = cjs.t = cjs.tick = function (fn) {
    var g = G(arguments)
    if (g.F_) {
        if (!g.n) {
            fn()
        }
        return T.on('tick', fn) // T.addEventListener? return T?
    }
    return g.n ? T.t('+') - T.t() :
        Number((T.getTime(g.p ? false : true) / 1000).toFixed(2))
}
T.p = function () {
    T.setPaused(false);
    return T
}
T.P = T.s = function () {
    T.setPaused(true);
    return T
}
T.s = cjs.xL =function () {T.removeAllEventListeners()}
T.$ = function () {
    T.setPaused(T.getPaused() == false ? true : false)
    return T
}
T.i = function () {
    //indicates the target time (in ms) between ticks
    //default is 50 (20 fps)
    //Note: actual time between ticks may be more than specified,
    //  depending on CPU load. (but this property is ignored if the ticker is using the RAF timing mode)
    return T.interval
}
T.f = function (numTicks) {
    var g = G(arguments)  //numTicks:   optional: The number of previous ticks over which to measure the actual frames
// / ticks per second.Defaults to the number of ticks per second.
    if (N(numTicks)) {
        T.setFPS(numTicks);
        return T
    }
    return g.n ?
        T.getFPS() :
        T.getMeasuredFPS() //returns *ACTUAL* frames
    // / ticks per second//
    // Depending on performance,
    // this may differ from the target frames per second.
}
T.e = function (runTimePropReturnedInsteadOfTime) {
    //Similar to getTime(), but returns the time on the most recent tick event object.
// returns the time or runTime property from the most recent tick event or -1.
    T.getEventTime(runTimePropReturnedInsteadOfTime)//df: false ( If true, the runTime property will be returned instead of time  )
}
T.m = function (ticks) {
    return T.getMeasuredTickTime(ticks)
} //ticks: // optional The number of previous ticks over which to measure the average time spent in a tick.Defaults to the number of ticks per second.To get only the last tick's time, pass in 1.
z = function(fn){
    var g = G(arguments)
    if (g.F_) { T.t(fn) }
    else {
        $('body').empty()
    }
}

h = cjs.Shape.prototype
gx = cjs.Graphics.prototype
ob = i = cjs.DisplayObject.prototype
s = st = cjs.Stage.prototype
ct = cjs.Container.prototype
q = cjs.LoadQueue.prototype
t = cjs.Text.prototype

cjs.m2d = function (a, b, c, d, e, f) {
    if (U(c)) {return new cjs.Matrix2D(1, 0, 0, 1, N(a, 0), N(b, 0))}
    return new cjs.Matrix2D(N(a, 1), N(b, 0), N(c, 0), N(d, 1), N(e, 0), N(f, 0))
}
P = cjs.P = $Pt = cjs.Pt = function (x, y) {

    if (U(x)) {
        return new C$.Point}
    if (O(x) && O(y)) {
        return new C$.Point(x.x + y.mx() >> 1, x.y + y.my() >> 1)
    }
    if (O(x)) {
        return new cjs.Point(
            x.mx(),
            x.my()
        )
    }
    return new cjs.Point(x, y)
}
q = cjs.LoadQueue.prototype
q.f= q.l= function(fn){var q=this
    q.on("fileload", fn)
    return q}
q.c= function (fn) {var q=this
    if(F(fn)){ q.on("complete", fn) }
    return q
}
q.b=  q.bm =function(i, ct, x, y){
    var bm = $Bm( this.r(i) );
    if(ct){bm.a2(ct,x,y)}; return bm
}
q.i=  q.r= function(i){
    i  = this.getResult(i); i.w= i.width;i.h = i.height; return i}
q.$= function(i){return $(this.i(i))}
q.m = q.mf= function(){var q=this, g=G(arguments), _mf, mf
    // q.m:
// protosig:
//
// 'me',..
//
// {src:'me', id:'him'},..
//
// [ {src:*, id:*}, 'me',.. ]

    if(g.u){return q}
    _mf = g.A ? g.f : g
    mf = _.m(_mf,  function(item){
        return S(item)? {src: _.src(item),id:item} : item
    })
    q.loadManifest( mf )
    return q
}
Q=function(){  var g=G(arguments),  o
    //starts off as a fn (obviously)
    //but ends up as an obj
    // (can use his info to test if its been ran)
    o=g.F? {c:g.f}:  {m:g.f,c:g.s}
    o.m = o.m || _MF
    Q=(new cjs.LoadQueue).c(o.c).m(o.m)
}
WQ = function(){var g = G(arguments), o
    o = _.x({ob:g.f||{}},
        F(g.t)?{fn0: g.s, fn: g.t}: {fn: g.s})
    o.fn = o.fn || function(){}
    w = W(o.ob)
    if (o.fn0) {o.fn0(w)}
    Q(o.ob.I||_MF , function(){o.fn(w)})
}
i.X = function (x, dur) {
    var i = this, g = G(arguments)
    if (U(x)) {
        return i.x
    }
    i.x = g.p ? i.x + x
        : g.n ? i.x - x
        : g.m ? i.x * x
        : g.d ? i.x / x
        : x

    return i
    //if (N(dur)) {tw([i], [{x: x}, dur]); return i}
}
i.Y = function (y, dur) {
    var i = this, g = G(arguments)
    if (U(y)) {
        return this.y
    }
    if (g.p) {
        y = this.y + y
    }
    else if (g.n) {
        y = this.y - y
    }
    else if (g.m) {
        y = this.y * y
    }
    else if (g.d) {
        y = this.y / y
    }


    if (N(dur)) {
        tw([this], [{y: y}, duration])
    }

    else {
        this.y = y
    }
    return this
}
i.XY = function (x, y) {
    var i = this, g = G(arguments), v
    if (g.u) {
        return {x: i.x, y: i.y}
    }
    v = V(g.f, g.s)
    x = v.x
    y = N(v.y, v.x)
    return i.X(x).Y(y)
}
i.W = function (a) {
    var i = this
    if (U(a)) {
        return i.getBounds().width * i.scaleX
    }

    i.sX(i.scaleX * a / i.W())

    return i
}
i.H = function (a) {
    var i = this

    if (U(a)) {
        return this.getBounds().height * this.scaleY
    }

    this.sY(this.scaleY * a / this.H())

    return this

}
i.WH = function (w, h) {
    var i = this
    return this.W(w).H(h || w)
}
i.sX = function (n) {
    var i = this
    if (U(n)) {
        return i.scaleX
    }
    i.scaleX = n
    return i
}
i.sY = function (n) {
    var i = this
    if (U(n)) {
        return i.scaleY
    }
    i.scaleY = n
    return i
}
i.sXY = function (x, y) {

    var i = this,
        g = G(arguments), v

    if (U(g[0])) {
        return i
        return {x: i.sX(), y: i.sY()}
    }

    v = V(g[0], g[1])
    x = _.tN(v.x)
    y = _.tN(v.y, v.x)
    i.sX(x)
    i.sY(y)
    return i
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
        x = _.tN(g[0]),
        y = _.tN(g[1], x)
    return i.rX(x).rY(y)
}
i.kX = function (skewX) {
    if (U(skewX)) {
        return this.skewX
    }
    this.skewX = skewX;
    return this
}
i.kY = function (skewY) {
    if (U(skewY)) {
        return this.skewY
    }
    this.skewY = skewY;
    return this
}
i.kXY = function (x, y) {

    y = N(y) ? y : x

    return this.kX(x).kY(y)
}
i.rt = function () {
    var i = this, g = G(arguments), a = g[0]
    if (g.p) {
        return i.rT(i.rotation + _.tN(a, 1))
    }
    if (g.n) {
        return i.rT(i.rotation - _.tN(a, 1))
    }
    if (U(a)) {
        return i.rotation
    }
    i.rotation = a
    return i
}
i.cX = function (a) {
    var i = this
    if (U(a)) {
        return i.x + i.W() / 2
    }
    return i.X(a - i.W() / 2)
}
i.cY = function (a) {
    var i = this,
        hH = i.H() / 2
    return U(a) ? i.y + hH : i.Y(a - hH)
}
i.dg = i.drag = function () {
    var i = this;
    SL(i);
    return i
} // ~ scroll
i.$ = function (fn) {
    return this.on('click', fn)
}
i.$$ = function (fn) {
    return this.on('dblclick', fn)
}

i.n = function (name) {
    if (U(name)) {return this.name}
    this.name = name; return this}
cjs.iDO= function(i){return O(i)&&F(i.getStage)} //cjs.isOb = function (s) {return O(s) && s.parent}
i.al = function (al) {
    var i = this
    if (U(al)) {
        return i.alpha
    }
    i.alpha = al;
    return i
}
i.a2 = function (ct, x, y) {
    ct.A(this)
    if (N(x)) {
        this.X(x)
    }
    if (N(y)) {this.Y(y)}
    return this}
i.of = function (k) {
    this._K = this._K || []
    return !k || this == k || _.ct(this._K, k)
}
i.K = function () {
    var i = this, g = G(arguments)
    this._K = this._K || []
    if (g.u) {
        return this._K.join(' ')
    }
    if (g.O) {
        this._K(g.f.k);
        return this
    }
    _.eW(g.f, function (k) {


        if (!i.of(k)) {
            i._K.push(k)
        }


    })
    return this
}//i.of=function(k){return this.K()==k || this.K()==''}
i.rm = function () {
    var i = this
    if (O(i) && O(i.parent)) {
        i.parent.removeChild(i)
    }

    return i
} //cant delete 'remove' quite yet
cjs.iH = function (h) {return O(h) && h.graphics}
cjs.iCt = function (ct) {
//haha only a ct can impl addContainer( ha! //MOMENT OF BRILLIANCE
    return O(ct) && ct.addContainer
}

st.MD = function (fn) {
    return this.on('stagemousedown', fn)
}
st.MM = function (fn) {
    return this.on('stagemousemove', fn)
}
st.MU = function (fn) {
    return this.on('stagemouseup', fn)
}
st.mO = function () {
    var g = G(arguments), st = this
    if (U(g[0]) || g[0]) {
        st.enableMouseOver(N(g[0]) ? g[0] : true)
    }
    else {
        st.enableMouseOver(false)
    }
    return st
}
st.W = function (a) {
    if (U(a)) {
        return this.canvas.width
    }
    this.canvas.width = a;
    return this}
st.H = function (a) {
    if (U(a)) {
        return this.canvas.height
    }
    this.canvas.height = a;
    return this
}
st.WH = function (w, h) {
    var st = this;
    if (U(w)) {
        return V(st.W(), st.H())
    }
    if (N(w)) {
        st.W(w)
    }
    if (N(h)) {
        st.H(h)
    }
    ;
    return st
}

st.N = st.next = function (next) {
    if (U(next)) {
        return this.nextStage
    }
    this.nextStage = next;
    return this
}
st.du = function () {
    alert('st.du')
    return this.canvas.toDataURL()
}

ct.A = function () {var ct = this, g = G(arguments), $b = $('body')
    if (g.u && ct.St()) {
        $b.A(
            ct.St().canvas
        )
    }
    else if (g.N_) {
        $b.A( ct.St().canvas ).abs(g.f, g.s)
    }

    else {
        _.e(g, function (g) {
            ct.addChild(g)
        })
    }
    return ct
}

ct.u = function () {
    this.update();
    return this
}

ct.st = ct.St= ct.S= function(){
    return this.getStage()
}//ct.st = function () {return this.stage}

ct.W = function (w) {
    var can = this.St().canvas
    if (U(w)) {
        return can.width
    }
    can.width = w
    return this
}
ct.H = function (w) {
    var can = this.getStage().canvas
    if (U(w)) {
        return can.height
    }
    can.height = w
    return this
}
ct.xCh = ct.removeAll = function () {
    this.e(function (ch) {
        ch.rm()
    });
    return this
}
ct.N = function (n) {
    var s = this;
    if (U(n)) {return s.nextStage}
    s.nextStage = n;
    return s
}
ct.ch = ct.e = ct.ix = function (fn, n) {
    var ct = this, CH
    if (N(n)) {
        ct.setChildIndex(fn, n);
        return ct
    }
    CH = []
    _.e(ct.children, function (ch) {
        CH.push(ch)
    })
    if (U(fn)) {
        return CH
    }
    _.e(CH, function (ch) {
        fn(ch)
    })
    return ct

    old = function () {
        i.ix = function (n) {
            var i = this, g = G(arguments)
            if (g.u) {
                return
            }
            i.P().setChildIndex(i, n)
            return i
        }

    }
}
ct.C = ct.bgC = function (c) {
    var ct = this
    $(ct.canvas).C(c)
    return ct
}
ct.cen = ct.pt = function () {
    return V(this.W() / 2, this.H() / 2)
}
ct.bgI = ct.bg= function (i) {
    var ct = this
    ct.bm(i, function (b) {
        ct.ch(b, 0)
    })
    return ct

}
ct.eMO = function (en) {
    this.enableMouseOver(en ? true : false);
    return this
}
ct.qB = ct.bQ = function (name, x, y, sX, sY, rt) {
    var b, g = G(arguments)
    b = Q.b(name)
        .XY(N(x, 0), N(y, 0))
        .sXY(N(sX, 1), N(sY, sX || 1))
        .rt(N(rt, 0))
    if (!g.n) {
        b.rC()
    }
    if (g.p) {
        b.drag()
    }
    this.A(b);
    return b
}
ct.au = function (au) {
    this.autoClear = au ? true : false;
    return this
}
ct.noAuCl = function () {
    this.autoClear = false;
    return this
}
ct.clr =   ct.E = function () {
    return this.e(function (i) {i.rm()
    })
}
ct.Cv = function () {return this.St().canvas}
t.T = function (text) {
    if (U(text)) {
        return this.text
    }
    this.text = text
    return this
}
t.F = t.fo = function (f) {
    if (U(f)) {
        return this.font
    }
    this.font = N(f) ? f + 'px Arial' : f
    return this
}
t.C = t.col = function (color) {


    if (U(color)) {
        return this.color
    }

    this.color = oO('c', color)

    return this
}

$Gx=cjs.Gx = cjs.gx = function (a) {return new cjs.Graphics(a)}
gx.poly = function (verts, f, s, width) {
    var that = this
    //  _.each(arguments,function(vert){that.lt(vert[0],vert[1])});this.cp()
    if (N(verts[0])) {
        _.each(arguments, function (vert) {
            that.lt(vert[0], vert[1])
        });
        this.cp()
    }
    else {
        this.fs(f, s, width)
        _.each(verts, function (vert) {
            that.lt(vert[0], vert[1])
        });
        this.cp()
    }
    return this
}
gx.fC = gx.fs = function (c, C, l) {
    var gx = this
    gx.f(oO('c', c || 'z'))
    gx.s(oO('c', C || null))
    gx.ss(N(l) ? l : 2)
    return gx
}
gx.sC = function (s, w) {
    var gx = this
    w = N(w) ? w : 2
    s = O(s) ? s : oO('c', s || null)
    gx.s(s)
    gx.ss(w)
    return gx
}
h.col = h.fs = function () {
    var h = this, gx = h.graphics, g = G(arguments)
    gx.fs.apply(gx, g)
    return h
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

    $df.grad(o)

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
_MF = ['me', 'guy', 'chicks', 'sun', 'flame', 'earth']
h.z = h.clr = function () {
    this.graphics.clear();
    return this
}
h.same = function () {return $h(this)} // h.copy=
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
h.dl = h.line = function () {
    var g = G(arguments), o
    o = N(g[0]) ? {x1: g[0], y1: g[1], x2: g[2], y2: g[3]} :
    {x1: g[0].x, y1: g[0].y, x2: g[1].x, y2: g[1].y}
    this.mt(o.x1, o.y1).lt(o.x2, o.y2)
    return this
}
$H = $h = function () {
    var g = G(arguments), h = new cjs.Shape(),


    //if (cjs.iH(x)) {return new cjs.Shape(x.graphics)}
//pass in your own obj to use 'o.i/o.bf' or 'o.lf' or 'o.rf'
        o = g.O ? g.f :
            g.N_ ? ( N(g[3]) ? // 'c-C-l' pattern
            {x: g.f, y: g.s, C: g.t, l: g[3]} : {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} ) :
                // 'c-C-l' pattern
                N(g.s) ? {C: g.f, l: g.s} :
                {c: g.f, C: g.s, l: g.t}

    _h=h
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
$Ct = function (a) {
    return new cjs.Container(a)
}
ct.h = function () {
    var ct = this,
        h = $H.apply($H, arguments)
    ct.A(h)
    return h
}
ct.ct = function (x, y) {
    var ct = this,
        g = G(arguments), ct1 = $Ct()
    o = g.F_ ? {fn: g.f} : {x: g.f, y: g.s}
    ct.A(ct1)
    if (o.fn) {
        o.fn(ct1, ct)
    }
    else if (N(o.x)) {
        ct1.XY(o.x, o.y)
    }
    if (g.p) {
        cjs.bindSlide(ct1)
    }
    return ct1
}
cjs.lq = function (mf, func) {


    var q = new cjs.LoadQueue(true)

    if (A(mf)) {
        q.loadManifest(cjs.mf.apply(null, mf))
    }

    if (F(func)) {
        q.complete(function () {
            func(function (img) {
                return q.getResult(img)
            })
        })
    }
    return q
} //cjs.loadQueue =
i.hT = i.test = function (x, y) {
    var i = this
    if (cjs.iDO(x)) {
        return i.hT(i.gTL(x))
    }
    if (O(x)) {
        y = x.y;
        x = x.x
    }
    return i.hitTest(x, y)
}
i.gL = i.gTL = function (x, y) {
    var i = this
    if (O(x)) {
        y = x.y;
        x = x.x
    }
    return i.globalToLocal(x, y)
}
i.uM = function () {
    var i = this, s = i.St()
    if (s.mouseInBounds) {
        var pt = i.gTL(s.mouseX, s.mouseY)
        return i.hT(pt)
    }
}
i.cC = i.cc = function () {
    return this.cacheCanvas
}
i.ca = function () {
    var ob = this,
        st = ob.St(),
        g = G(arguments), o, op, i
    if (O(ob.image && !g.n && !g.p)) {
        ob.cache($(ob.image)[0])
    }
    if (ob.cacheCanvas && !g.p && (U(g[0]) || S(g[0]) || g.n)) {
        op = g[0];
        ob.updateCache(op);
        return ob
    }
    o = O(g[0]) ? {i: g[0], x: g[1], y: [2]} : N(g[2]) ? {x: g[0], y: g[1], w: g[2], h: g[3]} : N(g[1]) ? {
        w: g[0],
        h: g[1]
    } : {}
    if (O(o.i)) {
        o.i = o.i.image ? o.i.image : $(o.i)[0];
        if (!g.n) {
            if (ob.image) {
                ob = ob.image
            }
            ob = $(ob)[0]
            ob.cache(0, 0, ob.width, ob.height)
        }
    }
    o.x = N(o.x) ? o.x : 0;
    o.y = N(o.y) ? o.y : 0
    o.w = N(o.w) ? o.w : O(o.i) ? o.i.width : N(o.h) ? o.h : st ? st.W() : 0
    o.h = N(o.h) ? o.h : O(o.i) ? o.i.height : st ? st.H() : 0
    ob.cache(o.x, o.y, o.w, o.h)
    return ob
}
cjs.rmOb = function (ob) {

    if (cjs.iDO(ob)) {
        ob.rm()
    }
}
i.shad = function (color, x, y, blur) {
    cjs.shad = function (color, x, y, blur) {
        alert('cjs.shad')
        if (color == '-') {
            return new cjs.Shadow(null, 0, 0, 0)
        }
        color = S(color) ? color : 'a'
        blur = N(blur) ? blur : 10
        x = N(x) ? x : 0
        y = N(y) ? y : 0
        var shad = new cjs.Shadow(oO('c', color), x, y, blur)
        return shad
    }// = cjs.shadow

    var shadow = cjs.shad(color, x, y, blur)
    this.shadow = shadow
    return this
}
i.St = i.S = i.st = function (){return this.getStage()}
i.pa= i.P = function (){return this.parent}
i.hd = function () {
    this.visible = false;
    return this
}
i.sib = function () {return this.P().ch()}
i.rC =  function () {
    var i = this, g = G(arguments), x, y, hW, hH

    x = i.W() / 2
    hW = x
    y = i.H() / 2

    hH = y

    return (g.p) ?
        i.rX(hW, '+').rY(hH, '+') :
        i.rXY(hW, hH)
}
i.bd = i.bounds = function (a, b, c, d) {
    var i = this

    this.nominalBounds = new cjs.Rectangle(a, b, c, d)

    return this

}
i.toFront = function () {
    return this.ix(this.sib().length - 1)
}
i.belowStg = function () {
    return this.y > this.St().H()
}
i.in = i.within = i.inStage = function () {
    var ob = this,
        st = ob.st(),
        g = G(arguments),
        x = ob.x,
        y = ob.y,
        w = st.W() - 100,
        h = st.H() - 100,

        inn = x > 0 && x < w && y > 0 && y < h

    if (g.n) {
        if (!inn) {
            ob.rm()
        }
    }

    return inn
}
i.within = i.inStage = function () {
    var i = this, g = G(arguments), s = i.S(), wthnS

    wthnS = i.x > 0 && i.y > 0

    && i.x < (s.W() - 100) && i.y < ( s.H() - 100 )

    if (g.n && !wthnS) {
        s.rm()
    }

    return wthnS
}
comp()
function comp(){
    i.o=function(o){this.compositeOperation = o;return this}
    i.Ds= i.dO=function(){
        this.o('destination-out'); return this}
    i.dS= i.dI=function(){return this.o('destination-in')}
    i.sD= i.sI=function(){this.o('source-in'); return this }
    i.Sd= i.sO=function(){this.o('source-out'); return this } // why use this ??x.sd = x.sV= function(){ this.o('source-over'); return this }
    i.ds= i.dV= function(){ this.o('destination-over'); return this }
    i.SD= i.sT= i.sA= function(){ this.o('source-atop'); return this }
    i.DS= i.dT= i.dA= function(){ this.o('destination-atop'); return this }
    i.li=function(){ this.o('lighter'); return this }
    i.co=function(){ this.o('copy'); return this }
    i.xo=function(){ this.o('xor'); return this }
}
$Bm=  function(bm){var g=G(arguments)
    bm=  new cjs.Bitmap(bm)
    if(g.p){ bm.drag() }
    return bm
}
$St = function(){var st, g = G(arguments), cv
    st = St(cv = g.A ? canById(g.f) : O(g.f) ? canEl(g.f) : newCan(g))
    st.cv = st.c = st.can = $(st.canvas)
    st.cv0 = st.cv[0]
    st.xc = st.cv0.getContext('2d')
    st.A(); if (g.p) {st.t()}//.t()
    function canById(a){return a[0]}
    function canEl(a){
        //can pass it a canvas OR a $canvas object
        return $(a)[0]}
    function newCan(g){
        return  $.c(g.f || 'p', g.s || 1200, g.t || 600, g[3], g[4])[0]}
    return st
    function St(cv){
        var s= new cjs.Stage(cv)
        return s
    }
}
St = function () {z(); var g = G(arguments)
    st = s = $St(g[0] || 'p', 1200, 600)
    h = $h(0, 0).a2(s)
    if (g.p) {
        SL(h)
    }
    return s
}
st.ab = st.abs = function (x, y) {
    this.can.abs(x, y);
    return this
}
st.trDr = function (){
    var st = this
    st._md = 0
    st.MD(function () {
        st._md = 1
    })
    st.MU(function () {
        st._md = 0
    })
    return this
}
st.Bm = function (i) {
    return $Bm(i).a2(this)
}
mou()
balls()
st.hW = function () {
    return this.W() / 2
}
st.hH = function () {
    return this.H() / 2
}
function mou() {
    st.m = function (ob) {
        //uses Point
        var st = this
        if (U(ob)) {
            return cjs.P(st.mouseX, st.mouseY)
        }
        if (O(ob)) {
            if (ob.d) {
                st.MD(ob.d)
            }
            ;
            if (ob.u) {
                st.MU(ob.u)
            }
            ;
            if (ob.m) {
                st.MM(ob.m)
            }
        }
        return st
    }
    st.mx = st.mX = function () {
        return this.m().x
    }
    st.my = st.mY = function () {
        return this.m().y
    }
}
function balls(){
    s.cannonBall=function(x,y){var s=this,h
        h=s.h(x,y)
        h.rf('a', 'z',18 ).dc(18).ef()
        return h}
    s.basketBall=function(x,y){var s=this
        return this.h(x,y).rf('w', 'o',18 ).dc(18).ef()
    }
    s.beachBall=function(x,y){var s=this
        return s.h(x,y)
            .rf('b','r',18).dc(18).ef()
    }
    s.snowBall=function(x,y){var s=this
        return s.h(x,y).rf('a','w',18).dc(18).ef()
    }}
i.rgc = function () {
    var i = this, g = G(arguments), x = i.W() / 2, y = i.H() / 2
    return (g[0] === 0) ?
        i.rXY(0, 0, (g.p ? '+' : null))
        : i.rXY(x, y, (g.p ? '+' : null))
}//