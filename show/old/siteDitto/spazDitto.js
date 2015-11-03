M.lC=M.lineCenter
//
b2d.p()
i = cjs.DisplayObject.prototype
ct = cjs.Container.prototype
st = s = cjs.Stage.prototype
t=cjs.Text.prototype
h = cjs.Shape.prototype
ct=cjs.Container.prototype
s=cjs.Stage.prototype
h=cjs.Shape.prototype
ct=cjs.Container.prototype
h = cjs.Shape.prototype // gx = cjs.Graphics.prototype
h = cjs.Shape.prototype // gx = cjs.Graphics.prototype
ct = cjs.Container.prototype

ct.bm = ct.b = function() {var ct = this, g = G(arguments), bm,
     o = g.F_ ? {fn: g.s, sc: g.s} :
         g.N_ ? {sc: g.f, fn: g.s} :
             _.x({i: g.f}, N(g.s) ? {sc: g.s, fn: g.t} :
             {fn: g.s, sc: g.t})
    o.sc = o.sc || 1
    $df.im(o)
    if(O(o.i)) {return ct.A($Bm(o.i))}//alert('ct.bm O(o.i)'); never alerted
    $.i(o.i, function (i) {
        bm = $Bm(i[0]).a2(ct).sXY(o.sc)
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
f.initSp=function(){
    this._sp = this._sp || []; this.SP = this.SP || []; this.sprites = this.sprites || []
    return this
}
f.spritePush=function(j){
    this.sprites = f.sprites || []
    this.sprites.push(j)
    return this

}
f._bI=function(o){
    this.gx.A(
        o.i.sXY(o.sc).XY(o.x, o.y)
            .rt(o.r).al(o.al)
    )

    return this
}
f.bI = function () {var f = this, b = f.B(), w = b.W(), g = G(arguments), o
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
f._bS=function(o){var f=this, b= f.B(), w=b.W(),j
    $df.bsDF(o)
    j = o.j
    j.al( o.al )
    w.g.A(j)
    f.spritePush(j)
    b._bS(j, o)
    return this
}
f.ctSp=function(sp){var f=this
    sp.XY(f.pos().x, f.pos().y).rC()
    f.bS( $Ct().A(sp) )
    return this
}
f.bSQ=function(j){var f=this
    Q(function(){
        f.ctSp(Q.b(j))})
    return f}
f.bS=function(){
    //higher level.. can handle obs and Q-strings
    var f = this, b = f.B(), w = b.W(),g = G(arguments)
    return g.S_ ?  f.bSQ(g.f): f._bS(
        cjs.iDO(g.f) ? {j: g.f,
            rt: g.s,
            x: g.t,
            y: g[3],
            o: g[4]}:g.f
    )

}
b.fSp = function () {return this.f().sprites[0] }
b._bS=function(j,o){var b=this
    T.t(function(){
        j.XY(b.X() + o.x,
            b.Y() + o.y).rt(b.rt() + o.rt)})
}
b.bS = function () {var b = this, w = b.W(), g = G(arguments), o, i, a, sc //pass it a display object (which i guess implies its already loaded)


    o = cjs.iDO(g.f) ? {i: g.f, bm: g.f} : g.O ? g.f : {i: g.f, sc: g.s, x: g.t, y: g[3], r: g[4], al: g[5]}

    if (S(o.i)) {w.g.bm(o.i, function (bm) {b.bS(_.x(o, {i: bm, bm: bm})) })} //if not loaded, async loads and passes it back as a data object //next time, then, when loaded it can bypass async

    else {
        $df.xyr(o)
        $df.sc(o)
        $df.im(o)

        //they can pass in a formed shapeer
        if (cjs.hasDim(o.bm) && !g.n) {o.bm.rC()}//regCent //can not center things that dont have dimensions! // scale, position and place the bm in the ct (which is on the stage)
        o.bm.sXY(o.sc).XY(o.x, o.y).rt(o.r).al(o.al)

        this._gx(o.bm)
    }
    return this
}
cjs.hasDim=function(bm){
    return   !cjs.iH(bm) && !cjs.iCt(bm)
}
b._Sp=function(sp,o){

    this._gx(sp)

    sp.rC()
        .XY(o.x, o.y)
        .sXY(o.sX, o.sY).rt(o.r)
    return sp
}
b.Sp = function () {var g = G(arguments), o,
    sp


    o = $df.xyr({
        sp: g.f,
        x: g.s,
        y: g.t,
        sX: g[3],
        sY: g[4],
        r: g[5]
    })

    o.sX = N(o.sX, 1);
    o.sY = N(o.sY, o.sX)

    o.sp = o.sp || Mummy

    sp = $Sp(o.sp)
    return b._Sp(sp,o)

}
b.sp = function () {var b = this, g = G(arguments),

    ch

    if (b.gx && b.gx.children) {
        ch = g.p ? b.gx.children : g.n ? b.gx.children[0] : _.l(b.gx.children)
        if (g.u) {return ch}
        if (g.F_) {_.e(ch, g.f);return this}
    }
}
b.Bm = function (iS, x, y, sX, sY, rt) {
    var b = this, w = b.W(), g = G(arguments);
    b.gx = b.gx || w.g.ct()
    if (S(iS)) {
        this.gx.bm(iS, fn)
    }
    if (O(iS)) {
        fn(iS);
        return iS
    }
    return b

    function fn(bm){

        bm.rC()
            .XY(N(x, 0), N(y, 0))
            .sXY(N(sX, 1), N(sY, sX || 1))
            .rt(N(rt, 0))
    }

}
f.clrSp=function(){
    this.sprites = []
    this_sp = []
    this.SP = []
    return this
}
f.rmSp= function () {
    _.e(this.initSp().sprites, function(s){cjs.rmOb(s)})
    this.clrSp()
    return this
} //= f.xSp=f.Xx=f.rmSp
w._preKill= function(b) {
    if (b.sprite) {b.sprite.rm()}
    b.sprite = null
    if (b.sp()) {b.sp().rm()}
    b.fs(function (f) {f.rmSp()})

}
w._fPreKill=function(f){f.rmSp()}
w._D=function(o){
    return this.D(o.x, o.y, o.c, o.w, o.h)
}
w.bfR = function () {var w = this, g = G(arguments), b, h, o


    o = _.x({x: g.f, y: g.s},
        S(g.t) ? {i: g.t, w: g[3], h: g[4], c: g[5]} :
        {w: g.t, h: g[3], c: g[4]})
    o.i = o.i || 'sun'
    o.c = o.c || 'y' // can be removed

    b = w._D(o)

    h = w.g.h().al(.5)
    if (o.c) {h.c(o.c)}
    h.bf(o.i)
    h.rec(o.w, o.h)

    b.bS(h)
    return b
}
b2d.m=function(vs){ return _.m(vs, b2d.mult) }
b2d.tA=function(vs){return _.m(vs, function(v){return v.tA(v)})}
f.C = function () {

    var f = this,
        b = f.B(), w = b.W(), g = G(arguments), o, h
    o = g.O ? g.f : {c: g.f, C: g.s, l: g[2]}
    o.c = (o.c == '*') ? $r() : (o.c || 'b')
    o.C = o.C || o.c
    f.rmSp()

    h = f.iC() ?
        // if circle?
        w.s.h().cir(f.pX(), f.pY(), f.rad(), o.c, o.C, o.l) :
        // if poly
        w.s.h().pol(f.vs(), o.c, o.C, o.l)

    f.bS(h)

    b.i = h

    return f
}
f.vs =function(){var f=this, b=f.B(),g=G(arguments),
    vs=  b2d.m(  this.H().m_vertices   )
    if( g.p){
        b2d.rot=function(vs, b){return _.m(vs, function(v){
            return v.rot(b.rot())})}
        vs= b2d.rot(vs,b)
    }
    return b2d.tA(vs)
} //=f.rV
w.cen = w.cent = function () {
    var w = this, g = G(arguments),
        v = V(w.s.W() / 2, w.s.H() / 2)
    if (g.p) {
        w.dot(v)
    }
    return v
}

M.lC=M.lineCenter
b.wP = b.wPt = function (x, y) {

    var b = this
    return b.GetWorldPoint(V(x, y).div()).mult()
}

bods()
function bods(){
    b.__f=function(f){
        var b=this, g=G(arguments)
        if(g.u){ return b.GetFixtureList() }
        f = b.CreateFixture(f)
        return f
    }
    b._f= function(f,c){var b=this,g=G(arguments)
        if(g.u){ return b.GetFixtureList() }
        f = b.CreateFixture(f)
        if(c){f.C(c)}
        return f
    }
    b.cir= function(){var b=this,g=G(arguments), o= g.f, fd,  h,  f

        //if passed array, it assumes it is arguments for ONE cir
        if(g.A){return b.cir.apply(b, g.f)}

        //if you pass at least two objects, it makes multiple cirs and passes back b
        if(O(g.s)){
            g.e(function(c){b.cir(c)})
            return b
        }




        // can pass obj
        // can pass: c C [r] [x] [y]
        // can pass: c [r] [x] [y]
        // can pass: [r] [x] [y] [c] [C]

        o = g.O? g.f
            :S(g.s)?{c: g.f,C: g.s, r:g[2],x:g[3],y:g[4]}
            :S(g.f)?{c: g.f,r: g.s, x:g[2],y:g[3]}
            :{r: g.f,x: g.s,y:g[2],c:g[3],C:g[4]}

        o.al=  N(o.al, 1)

        o.x = N(o.x,0)
        o.y =  N(o.y,0)
        o.r =  N(o.r,40)
        o.b = o.rs= N(o.b, .5)
        o.f =  N(o.f,.5)
        o.d =  N(o.d,.5)
        o.s = D(o.s)? o.s: 0;
        if(g.n){o.s=1}

        fd = new b2d.FixtureDef
        fd.d(o.d).r(o.b).fr(o.f)
        fd.shape = new b2d.CircleShape(o.r/30)
        fd.shape.SetLocalPosition(V(o.x, o.y, '-'))
        fd.isSensor = o.s? true : g.n? true: false

        f = b.f(fd)
        f.K(o.k)

        if(o.c!=0){
            f.bS(

                f.g = w.g.h().cir(o)
            )
        }
        return f

    }
    b.f=function(){var b=this,g=G(arguments), o; if(g.u){return b._f()}

        if(g.S_){g.L--}
        if(g._S){g.L--}

        //PASS IN AN ARRAY OF FIXTS (AND OPTIONALLY A COLOR)
        if(g.A){
            g.e0(function(gg){b.ap('f', g.G(gg))})}//   [ [],[],fD,4,[] ]
        else if(g.SA){
            g.e1(function(f){//       'c',  [ [.,.],[.,.],fD ]
                if(b2d.iFD(f)){b._f(f, g.f)}
                else {
                    if(!S(_.f(f))){
                        f.unshift(g.f)}
                    b2d.iFD(f[1])? b._f(f[1],f[0]) : $a(b, 'f', f)
                }
            })
        }

        //PASS IN A FIXTURE DEF (AND OPTINALLY A COLOR)
        else if (b2d.iFD(g.f)){return b._f(g.f)}//(fD)
        else if (g.S_ && b2d.iFD(g.s)){b._f(g.s, g.f)}//('c', fD)

        //PASS IN NUMBERS OR VERTS, TO MAKE JUST ONE FIXT
        else if(O(g.s)){pol()}
        else if(g.L==1|| g.L==3){cir()}
        else {rec()}


        function cir(){
            o={c: g.f, r: g.s, x: g.t, y:g[3]}
            if(g.n){o.s=1}
            b.cir(o)
        }

        function rec(){
            o={c: g.f, w: g.s,  h: g.t, x:g[3], y:g[4], a:g[5]}
            if(g.n){o.s=1}
            b.rec(o).C(o.c)  // $a(b,'rec', g.g)

        }

        function pol(){
            b.pol(g.S_? {c:g.f, v:g.r}: {v:g})
            if(g.n){b.sen(1)}  //if (g.n) {o.s=1}
        }


        return b.d(1)


    }
    w.D=function(){var w=this, g=G(arguments,'k'),o,b

        if(g.u){return w.D(w.hW, w.hH)}

        o= g.O? g.f: g.O_? {p:g.f, f:g.r}:

        {p:[g.f,g.s],f:_.r(g,2)}

        b = w.cB( b2d.BD( o.p ) )

        b.K(g.k)

        $a(b, 'f', g.G( o.f ) )

        return b
    } //w.sp=w.ct=function(x,y){var w=this;return w.hud.ct(x||w.hW,y||w.hH).drag()}
    b.sep=function(verts,scale){var body=this
        if(!O(verts)){alert('o.v must be object  ---- delete this from b.sep '); return}

        if (b2d.iGP(verts)) {verts = verts.vs()}

        //needs array of verts.. or one vert (which is converted here to arr)
        _.e(O(verts[0][0])? verts: [verts], function (v) {
            b2d.sep(body,v, scale)
        })  //  'sep' each of the verts onto the body
        return this
    }
    b.pol = function(){var b = this, w = b.W(), g = G(arguments), o,
        n=b.n(), fs, h, numFixtsAdded, newFixts; if (g.u) {  return b  }


        //if passed verts:
        if( b2d.iGP(g.f) && U(g.s)) {
            return b.pol({v: g.f})  }
        //if passed color and verts:
        if(S(g.f) && b2d.iGP(g.s) && U(g.t)) {
            return b.pol({c: g.f, v: g.s})}
        if (b2d.iB(g.f)) {g.f.fs(b);return b}
        if (b2d.iF(g.f)) {g.f = g.f.vs()}


        o= g.A ? (
            // pass in ['r',[],[],[]]
            S(g.f[0]) ? {c: g.f[0], v: _.r(g.f)} :
                // pass in [[],[],[]]
            {v: g.f}
        ) :

            g.O ? g.f :
                !g.S_ ?  {v:g} : //pass in [],[]
                    _.x({c: g.f},
                        g.t ? {v: g.r} : // pass in 'r', [], []
                        {  v: g.s}   //pass in  {c:'r', v:[[],[],[]]}
                    )
        $df.h(o)

        b.sep(o.v)

        numFixtsAdded=b.n()-n
        newFixts = _.f(b.fs(), numFixtsAdded)
        _.e(newFixts, function dressFixture(f){
            f.d(o.d).r(o.b).fr(o.f)
            if (o.s) {f.m_isSensor = o.s ? true : false; f.sen(1) }
            f.K(o.k)
            f.C(o.c, o.C, o.l)
            if (o.lf) {
                f.bS(w.s.h().lf(o).lt(o.v)) }
            if (o.rf) {
                f.bS(w.s.h().rf(o).lt(o.v))  }
        })

        o.i = o.i || o.bf
        if (o.i){ h = w.g.h(); h.bV(o); b.bS(h) }
        return newFixts.length > 1 ? newFixts : newFixts[0]
    }
}

//from create
ct.d = ct.dot = function (c, x, y) {
    var ct = this, o, d, tw, g = G(arguments)

    if (b2d.isGPoly(g.f)) {

        _.e(g.f.vs(), function (v) {
            ct.dot(V(v))
        })

        return this
    }


    if (g.A) {

        _.e(c, function (G) {
            if (A(G)) {
                ct.dot.apply(ct, G)
            }
            else {
                ct.dot(G)
            }
        })

        return this
    }


    o = g.S_ ? (

        b2d.iB(g.s) ? {c: g.f, x: g.s.sX, y: g.s.sY} :
            O(g.s) ? {c: g.f, x: g.s.x, y: g.s.y} :
            {c: g.f, x: g.s, y: g.t}

    ) :
        b2d.iB(g.f) ? {x: g.f.sX, y: g.f.sY} :
            g.O_ ? {x: g.f.x, y: g.f.y} :
            {x: g.f, y: g.s}


    o.x = N(o.x, ct.W() / 2)
    o.y = N(o.y, ct.H() / 2)
    o.c = o.c || 'y'
    d = this.h(o.x, o.y).cir(8, o.c, 'z', 2).al(.7).drag()
    tw = d.twL([{sxy: 1.3}, 100], [{sxy: 1}, 100]).$()
    d.$$(function () {
        tw.$()
    })
    return d.K('dev dot')
}
i.dot = function () {
    var i = this
    i.getStage().dot(i.X(), i.Y())
    return i
}


shapz()
function shapz() {
    turtle2 = [['green', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]], ['yellow', [-60, -30], [-50, -60], [-20, -45], [-15, -35]], ['yellow', [-50, 10], [-50, -10], [-40, -10], [-40, 10]], ['yellow', [-10, 10], [-10, -10], [0, -10], [0, 10]]]

    dick = [
        [50, 300, 0, -100],
        [50, 100, 150],
        [50, -100, 150]
    ]
    guyInBed = [
        [30],
        [20, 30, 30],
        [100, 30]
    ]

    cjs.somePolyFixt = [
        [
            [-100, 0], [0, -100],
            [100, 0], [60, 50]]]
    cjs.compoundShape = [
        [50, 10],
        [60, 30, 0, 0, 40],
        [120, 30, 0, 0, 29],
        [60, 10, 0, 50, 60],
        [84, 10, 15, 80, -120]
    ]
    cjs.compoundShape2 = [
        [50, 10],
        [20, 20],
        [20, 10, 0, 0, 10],
        [40, 10, 50, 0, 45],
        [84, 10, 15, 80, -120],
        [60, 10, 0, 50, 60]
    ]
    cjs.compoundStar = [
        [10, 10],
        [20],
        [4, 80, 10, 30, 135],
        [4, 80, 0, 0, 45],
        [4, 80, 100, 0, 90],
        [4, 80, 0, 0, 180]
    ]

    v1 = [[-100, 0], [0, -100], [100, -50], [0, -50]]

    turtle = [
        ['green', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]]

        , ['yellow', [10, -10], [20, -30], [50, -15], [45, -5]]

        , ['yellow',

            [-50, 10], [-50, -10], [-40, -10], [-40, 10]
        ]

        , ['yellow',

            [-10, 10], [-10, -10], [0, -10], [0, 10]
        ]
    ]


    pin = [
        ['o', [-20, 20], [0, -80], [20, 20], [0, -40]],
        ['w', 8, 0, -75],
        ['w', 8, -20, 20],
        ['w', 8, 20, 20]
    ]
}

function more(){


    function alertIfUsed() {
        function createStuff(){
            $El = cjs.el = function (a) {
                a = $(a)[0]
                return new cjs.DOMElement(a)
            }
            ELM = function () {
                z()
                d = $.d('r', 400, 400).A($.ip()).drag()
                el = $El(d)
                s = $St('y').t()
                s.A(el)
                // tw(el, [{x:300,y:300},2000])
                // tw([el,'l'],[{r:360, sx:.5, sy:.5},8000],{r:0},[{r:360, sx:1, sy:1},8000])
            }
        }
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
            if (g.u) {return [
                i.x,
                i.y,
                i.scaleX,
                i.scaleY,
                i.rotation,
                i.skewX,
                i.skewY,
                i.regX,
                i.regY
            ]}
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

        cjs.rgb=function(r,g,b,a){
            alert('cjs.rgb')
            var str
            a = N(a)? a: 1
            str = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'
            return str
        }
        drawHalf=function(c,i){
            alert('drawHalf')
            c.dI(i, -i.width/2, -i.h/2)}
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
        $.joystick = function () {
            alert('joystick')
            $('#left').on('mousedown mouseover touchenter', function (e) {
                $.K.left = true;
                e.preventDefault()
            })
            $('#left').on('mouseup mouseout touchleave', function () {
                $.K.left = false
            })
            $('#jump').on('mousedown mouseover touchenter', function () {
                $.K.up = true
            })
            $('#jump').on('mouseup mouseout touchleave', function () {
                $.K.up = false
            })
            $('#right').on('mousedown mouseover touchenter', function () {
                $.K.right = true
            })
            $('#right').on('mouseup mouseout touchleave', function () {
                $.K.right = false
            })
        }
        $.fn.toR = $.fn.moveRight = function (num) {
            alert('toL')
            num = num || 20
            if (this.left() == 'auto') {
                this.left(0)
            }
            this.left(parseInt(this.left()) + num)
            return this
        }
        $.fn.toL = $.fn.moveLeft = function (num) {
            alert('toL')
            num = num || 20
            if (this.left() == 'auto') {
                this.left(0)
            }
            this.left(parseInt(this.left()) - num)
            return this
        }
        $.fn.toU = $.fn.moveDown = function (num) {
            alert('toL')
            num = num || 20
            if (this.top() == 'auto') {
                this.top(0)
            }
            this.top(this.top() - num)
            return this
        }
        $.fn.toD = $.fn.moveDown = function (num) {
            alert('toL')
            num = num || 20
            if (this.top() == 'auto') {
                this.top(0)
            }
            this.top(this.top() + num)
            return this
        }
    }
    i.warpX = function (lo, hi, cush) {
        alert('i.warpX')
        var i = this,
            wrp = M.wrp(lo, hi, cush)
        T.t(function () {
            i.x = wrp(i.x)
        })
        return i
    }

    i.warpY = function (lo, hi, cush) {
        alert('i.warpY')
        var i = this, wrp = M.wrp(lo, hi, cush)
        T.t(function () {
            i.y = wrp(i.y)
        })
        return i
    }

    i.warp = function (n) {
        var i = this, s = i.S(), n = n || 0
        i.warpX(0, s.W(), n)
        i.warpY(0, s.H(), n)
        return i
    }


}
i.tickX = function (fn) {
    var i = this
    T.t(function () {
        i.X(fn())
    })
    return i
}
i.tickY = function (fn) {
    var i = this
    T.t(function () {
        i.Y(fn())
    })
    return i
}
////

f.S = f.stg = function () {return this.W().s}
b.St = b.S = b.stg = function () {return this.W().s}

b.c= b.C = function (c) {
    this.fs(function (f) {
        f.C(c)
    })
    this._col = c
    return this
}
b._gx=function(a){
    this.gx = this.gx || w.g.ct();
    if(a){this.gx.A(a)}
    return this
}
b.$h = function () {
    var h = $H()
    this.bS(h)
    h.c.apply(h, G(arguments))
    return h
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

    $df.oDef(o)
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
f.dot=function(c){var f=this, w=f.B().W(),v

    v=f.cen()

    if(S(c)){w.dot(c,v)}
    else {w.dot(v)}

    return f
}
f.tP=  f.hit=f.testPoint=f.test=function(){
    var f=this,b=f.B(),w=b.W(),g=G(arguments),  v
    v = V(g.f, g.s)
    if(g.p){ w.dot(v) }
    return f.H().TestPoint(b.tf(), v.div())
    //is a point within the fixture // very accurate
}
b.dot= function(){var b=this,  w= b.W(),  g= G(arguments)
    g.N_? (
        g.p?
            T.t(function(){b.dot(g.f,g.s)}):
            w.d(b.wP(g.f,g.s)))
        :

        w.d(g.f||'y',  g.p? b.wC() : b )

    return b

}
w.killD=w.xD=function(){w.e(function(b){if(b.iD()){b.kill()}})}
w.pol = function () {
    var w = this, g = G(arguments), b, o
    if (g.A) {
        return $a(w, 'pol', g.f)
    }
    b2d.mini()
    if (g.OO) {
        g.e(function (g) {
            w.pol(g)
        })
        return w
    }



    // if(g.N_ && N(g.s) && O(g.t) &&U(g[3])){return w.D(g.f,g.s).pol(g.t)}

    else if (g.N_ && N(g.s) && O(g.t)) {
        b = w.D(g.f, g.s)
        // if(iB(g[2])){ g[2]= g[2].wV()} //M.p(g[2]).vs()
        _.e(g.t, function (p) {
            b.pol({v: p})
        })
        return g.m ? M.p(b) : b
    }
    o = g.O ? g.f :
        N(g.f) ? {x: g.f, y: g.s, p: g.t}
            : {p: g.f}

    o.x = N(o.x, w.hW)
    o.y = N(o.y, w.hH)
    o.p = M.p(o.p)

    b = w.D(o.x, o.y)

    if (g.P) {
        if (iB(o.p)) {
            o.p = M.p(o.p)
        }
        b.pol(o.p)
        return g.m ? M.p(b) : b
    }

    if (o.rg) {
        o.p.ps(o.rg, function (p) {
            b.pol(o)
        })
    }

    else {
        o.p.ps(function (p) {
            b.pol(o)
        })
    }

    return b.f()
}
w.cir = w.ball = w.ba = w.circ = function (x, y, r, c) {
    var w = this, g = G(arguments), b, o

    o = g.O ? g.f :

        N(g.s) ?

        {
            x: g.f, y: g.s,
            r: g.t,
            c: g[3]
        }
            :

        {r: g.f}


    o.x = N(o.x, w.hW)
    o.y = N(o.y, w.hH)
    o.r = N(o.r, 50)
    o.c = o.c || $r()

    b = w.D(o.x, o.y, o.c, o.r)

        .d(.5).fr(0).r(.5)

        .K('ball cir')

    if (g.n) {
        b.sen(true)
    }

    return b

}
w.bump = w.baa = function () {
    var w = this, g = G(arguments), b, o

    o = O(g[0]) ? g[0] : N(g[1]) ? {

        x: g[0],
        y: g[1],
        r: g[2]

    } : {r: g[0]}

    o.x = _.tN(o.x, w.hW)
    o.y = _.tN(o.y, w.hH)
    o.r = _.tN(o.r, 40)
    o.c = o.c || $r()

    b = w.S(o.x, o.y, o.c, o.r).K('bump').DFB(0.5, 0, 0.5)

    if (g.n) {
        b.sen(true)
    }
    return b
}
w.brick = w.bii = function (x, y, W, H) {
    var w = this, g = G(arguments), b, o
    o = O(g[0]) ? g[0] : N(g[1]) ? {
        x: g[0],
        y: g[1],
        w: g[2],
        h: g[3]
    } : {w: g[0]}

    o.x = _.tN(o.x, w.hW)
    o.y = _.tN(o.y, w.hH)
    o.w = _.tN(o.w, 40)
    o.h = _.tN(o.h, o.w)
    o.c = o.c || $r()

    b = w.S(o.x, o.y, o.c, o.w, o.h).K('brick').DFB(0.5, 0.5, 0)

    if (g.n) {
        b.sen(true)
    }
    return b
}
w.polyCirc = function (x, y, r, sides) {
    var w = this,
        b = w.D(x, y)

    b.pol({v: b2d.polyCirc(r, sides)})

    return b
}
w.sH = function (h) {var w = this
    if (U(h)) {return w.H * w.s.scaleY}
    w.s.scaleY = h / w.H
    return w}
w.sTW=w.sToW = function(x,y){var w=this, //works
    x=x/w.z - w.s.x/ w.z,
    y=y/w.z - w.s.y/w.z
    //w.dot(x,y,'*') // cool
    return {x: x  ,y: y}}
w.wTS=w.wToS=  function(x,y){var w=this,
    x=(x +w.s.x/w.z)*w.z,
    y=(y+ w.s.y/w.z)*w.z
    return {x:x, y:y}}
w.$h = function () {
    return this.i.h.apply(this.i, arguments)
} // h = $h().a2(s).rXY(100, 300).XY(100,300).drag()
//  h.rec( 'r','b',600, 200,  600, 200)
// h.rec( 'g',100, 100,  100, 20)
w.C = function (c) {
    var w = this
    w.bg.h().c(c || $r()).dr(0, 0, w.w, w.h)
    return w
}
w.lG=function(c,c2){var w=this,o
    o={c1:c2||'z', c2:c||'r', x1:0,y1:0,x2:0,y2:0}
    _.x(o,R()?(R()?{y2:w.h}:{x2:w.w}):
        R()?(R()?{x1:w.w,y1:w.h}:{x2:w.w,y2:w.h}):
            R()?{x1:w.w,y2:w.h}:{y1:w.h,x1:w.w})
    w.bg.h().lf(o).dr(0,0,w.w,w.h)
    w.bg.h(0, 0, $r()).dr(0, 0, w.w, w.h).al(.2)

    return w
}
w.warp = function () {
    var w = this
    w.eEv(function (b) {

        if (b.X() < 10) {
            b.X(w.W - 10)
        }
        if (b.X() > w.W - 10) {
            b.X(10)
        }
        if (b.Y() < 10) {
            b.Y(w.H - 10)
        }
        if (b.Y() > w.H - 10) {
            b.Y(10)
        }
    })

    return w
}
w.UI = function () {
    return $(this.i.canvas)
}
w._ = function(fn){Q(function(){fn(w)})}
w.tE=function(fn){var w=this
    T.t(function(){  w.e(fn)  })
    return this
} // TICKER !!!!!
w.bmR= w.bR= w.bfR=function(){var w=this, g=G(arguments), b, h,o
    o = S(g.t)? {x: g.f, y: g.s, i: g.t, w: g[3], h:g[4], c:g[5]} :
    {x: g.f, y: g.s,  w: g.t, h:g[3], c:g[4]}
    o.i = o.i || 'sun'
    o.c = o.c || 'y' // can be removed
    b =   w.D(o.x, o.y, o.c, o.w, o.h)
    h= w.g.h().al(.5)
    if(o.c){h.c(o.c)}
    h.bf(o.i)
    h.rec(o.w, o.h)
    b.bS(h)
    return b
}
w.xW = function () {//used in MIRROR
    this.e('wall', function (b) {
        b.kill()
    })
    return this
}
dev()
edge()
wall()
anim()
function mouse() {
    w.mm(logMXY)
    w.md(function (o) {

        logMXY(o)

        w.q(o.x, o.y, function (f) {

            //if(!f.iD()){return true}


            if (f.of(w.o.m)) {


                w.mj = w.mJ(f.B(), o.x, o.y)
            }


        })
    })
    //world mouse functions are great//they demonstrates md, q, m, and ofClass //but it has a real purpose too!//anytime mousedown..
    // because that implies there was a mouse up //so there should be no current mouse joint.. smart!
    w.mu(function () {
        if (w.mj) {
            w.j(w.mj);
            w.mj = 0
        }
    })


    function logMXY(e) {
        var p = w.sToW(e.X, e.Y);
        w.mx = p.x;
        w.my = p.y
    }
}
function keys(){

    $.kD('l',function(){
        if ($.test) {$l('left pressed')}
        $.K.l =  1
        $.K.L= 0
        $.K.dir = 'left'
    })
    $.kU('l',function(){if ($.test) { $l('left lifted') }
        $.K.l =   false
        $.K.l = 0;
        $.K.L = 1
    })
    $.kD('r',function(){if ($.test) {$l('right pressed')}

        $.K.r = 1
        $.K.dir = 'right'
        $.K.R = 0
    })
    $.kU('r',function(){if ($.test) {
        $l('right lifted')
    }
        $.K.r = 0;
        $.K.R = 1
    })
    $.kD('u',function(){if ($.test) {
        $l('up pressed')
    }

        $.K.u = 1;
        $.K.U = 0
    })
    $.kU('u',function(){if ($.test) {
        $l('up lifted')
    }

        $.K.u = 0;
        $.K.U = 1
    })
    $.kD('d',function(){if ($.test) {
        $l('down pressed')
    }
        $.K.d = 1;
        $.K.D = 0
    })
    $.kU('d',function(){if ($.test) {
        $l('down lifted')
    }

        $.K.d = 0;
        $.K.D = 1
    })
}

function dev(){

    w.d= w.dot=function(){var w=this,g=G(arguments), o

        if(g.S_){
            o =  N(g.s)?
            {c: g.f, x: g.s, y:g[2]} :
            {c: g.f, x:V(g.s).x, y:V(g[1]).y}
        }

        else {
            o= N(g.s)?
            {x:g.f, y:g.s} :

            {x:V(g.f).x, y:V(g.f).y}
        }


        if(g.m){
            w.dot(o.c,o.x,o.y,'-')
            w.dot(o.c,o.x,o.y,'/')
            w.dot(o.c,o.x,o.y,'+')
            w.dot(o.c,o.x,o.y) }

        else if(g.p){w.fg.dot(o.c,o.x,o.y)}
        else if(g.n){w.bg.dot(o.c,o.x,o.y)}
        else if(g.d){w.g.dot(o.c,o.x,o.y)}
        else {w.i.dot(o)}
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

    //dev
    w.dbCross = function (x, y) {
        var w = this, c = w.cen()
        x = N(x, c.x)
        y = N(y, c.y)

        w.dr('t', -10 + x, -140 + y, 20, 300, '-')
        w.dr('t', -150 + x, -10 + y, 300, 20, '-')
        w.dot('r', x, y)

        return w

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
            _.ev(N(n, .2), upd)
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
    w.flash = function () {
        var w = this, s = w.s
        s.flash.apply(s, arguments)
        return w
    }

    //write
    w.pop = function (t) {
        var w = this
        t = this.i.T(t || 'no text', 80, 'o', w.hW, 200)
        t.tw([{a: .5, sxy: .5}, 4000])
        _.in(4, function () {
            t.rm()
        })
        return this
    }
    w.pen = function (t, f, c) {
        var g = G(arguments), o
        if (this._T) {
            this._T.rm();
            this._T = null
        }

        o = {y: 100}

        o.x = g.n ? 200 : g.p ? this.W - 200 : this.hW

        this._T = this.i.T(t, f, c)
        this._T.XY(o.x, o.y)
        return this._T
    }
    w.chalk = function () {
        var w = this, g = G(arguments)
        w.i.chalk.apply(w.i, g)
        return w
    }
    w.show = function (fn) {
        var w = this, g = G(arguments)


        _.ev(.2, function () {

            w.pen(S(fn) ? window[fn] : fn())

        })

        return w

    }
}
function wall(){


    w.isWall=function(b){
        var w=this; return b == w.right || b == w.left || b == w.roof  || b == w.floor}
    w.clr  = function () {var w = this
        w.e(function (b) {if (!w.isWall(b)){b.kill()}})
        return w
    } //=w.wXx
    w._walls=function(o){var w=this
        if (o.w == '*') {sides();verSides()}
        if (o.w == '@') {w.warp(); return w }
        if (o.w == '_') { bot() }
        if (o.w == '~') { top() }
        if (o.w == '[') { left() }
        if (o.w == ']') {right()}
        if (o.w == 'U') {sides();bot()}
        if (o.w == 'A') {sides();top()}
        if (o.w == 'C') {verSides();left()}
        if (o.w == 'L') {left();bot()}
        if (o.w == '=') {verSides()}
        if (o.w == '|') {sides()}
        if (o.w == '->') {verSides();left();right1()}
        if (o.w == '<-') {verSides();left1();right()}
        if (o.w == '<->') {verSides();left1();right1() }
        if (o.w == 'r2') {verSides();left();right2()}
        if (o.w == 'l2') {verSides();left2();right()}
        function sides() {right();left()}
        function verSides() {top();bot()}
        function left() {w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h).K('wall side left'); w.l_.SetBullet(true)}
        function right() {w.r_ = w.right = w.S(w.w, w.h / 2, o.c, o.l * 2, w.h).K('wall side right'); w.r_.SetBullet(true)}
        function right2() {w.r_ = w.right = w.S(w.w, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')}
        function right1() {w.r1_ = w.right1 = w.S(w.w, 100, o.c, o.l * 2, 200);
            w.r2_ = w.right2 = w.S(w.w, w.h - 100, 'o', o.l * 2, 200).K('wall side right')}
        function left2() {w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')}
        function left1() {w.l1_ = w.left1 = w.S(0, 100, o.c, o.l * 2, 200);
            w.l2_ = w.left2 = w.S(0, w.h - 100, 'o', o.l * 2, 200).K('wall side right')}
        function top() {
            w.t_ = w.roof = w.S(w.w / 2, 0, 'o', w.w, o.l * 2).K('wall roof'); w.t_.SetBullet(true)}
        function bot() {
            w.b_ = w.floor = w.S(w.w / 2, w.h, o.c, w.w, o.l * 2).K('wall floor'); w.b_.SetBullet(true)}
    }
    w.walls = function () {var w = this, g = G(arguments), o
        if (g.f === 0) {return}
        w._walls(wallOp(g))
        function wallOp(g){
            var o =  g.A? {w: g.f[0], c: g.f[1]} : {w:g.f, c: g.s}
            o.c = o.c || 'o';
            o.w = o.w || '*';
            o.l = 40
            return o}
    }
}
function anim(){



    w.ps =  tw.pos
    w.iGP= tw.ignore

    w.th= w.thrust=function(c,x,y,r){
        return this.D(N(x,600), N(y,500), c|| 'b', N(r,40)).cn('thrust')
    }
    w.pack=  w.PackThruster= function(ani){
        var th = w.th(600, 500,'b',100).C("X").r(1).fR()
        th.Sp( Pack, 0, 0, .8 )
        return th.p( ani||'f1' )
    }

    b.p= b.play = function (a, b, c, d) {
        if(O(this.sp())){this.sp().p(a, b, c, d)}
        return this
    }
    b.s= b.stop=function (a, b, c, d) {
        if(O(this.sp())){ this.sp().s(a,b,c,d) }
        return this
    }


    //alert
    b.dr=function(dr){alert('b.dr')
        if(U(dr)){
            return this.direction}
        this.direction=dr; return this
    }

    i.dr=function(dr){alert('i.dr')
        if(U(dr)){return this.direction}
        this.direction=dr; return this
    }


    i.nm=function(dr){
        alret('i.nm')
        if(U(dr)){return this.name}
        this.name=dr; return this
    }
// Hit testing the screen width, otherwise our sprite would disappear //
// We've reached the right side of our screen
// We need to walk left now to go back to our initial position
//sS.addFlipped(true, false, false)// walk_h has been generated by addFlippedFrames and// contained the right facing animations
//T.f(40)
    ct.reset = function () {
        alert('ct.reset')
        this.St().removeAllChildren()
        T.removeAllListeners()
    }
//sprite.shadow = new createjs.Shadow("#454", 10, 15, 14)
//spriteUrl = "/assets/sprites/metalslug_mummy37x45.png"
//sprite always assumed to start facing right (and flipping it horizontqlly is the left) - so i must draw facing right


}
function edge(){
    w.edgAr = function(){
        var w=this,
            g=G(arguments),
            X=0,
            Y= 0,
            x =w.D(400, 400,'z', [ [50, 50,  '-']])//.den(10)
        _.e(g, function(e){

            e =  w.edgD(e[0], e[1], e[2], e[3])
            w.wed(e,x,V(g[0][0], g[0][1]))
        })


        return x
    }
    w.edgD = function(x1,y1,x2,y2){var w=this,
        l = w.l(x1,y1,x2,y2),
        e = w.D(0,0,b2d.edg(x1,y1,x2,y2)).d(1)
        e.bS(l) //bS2
        return e
    }
    w.edgs = function(){var w=this, g=G(arguments), X=0, Y= 0, x =w.D(X,Y, 'z', [[100,100, 400,400, '-']]), x2 =w.D(2000, 1200, 'z', [[400,400,  '-']])
        if(A(g[0])){
            //  b = w.D(g[0][0],g[0][1], 'w',20,  g[0][0],g[0][1] )
            //  w.weld(x,b)
            // X=g[0][0]
            // Y=g[0][1]
        }
        _.e(g, function(e){if(A(e)){e = w.edgD.apply(w,e)}
            w.wed(e,x)})//  w.weld(x2  , x)
        w.dot(300, 300)
        return x2
    }
    w.edgsD=function(ar){var w=this

        ar = ar || [V(),V(100,100)]

        i = V( ar.shift() )
        i2 = V( ar.shift() )

        w.edg(i.x, i.y, i2.x, i2.y)

        _.e(ar, function(v){

            i = i2
            i2 = V(v)
            w.edg(i.x, i.y, i2.x, i2.y)})
    }
    w.edg= function(x1,y1,x2,y2){var w=this
        // you would always want a single stat?
        w.l(x1, y1, x2, y2,'-')

        return w.S(0, 0, b2d.edg(x1,y1,x2,y2))
    }
    w.edgs=function(ar){var w=this,e
        ar = ar || []
        i = V( ar.shift() )
        i2 = V( ar.shift() )
        e = w.edg(i.x, i.y, i2.x, i2.y)
        _.e(ar, function(v){
            i = i2
            i2 = V(v)
            e.glu(  w.edg(i.x, i.y, i2.x, i2.y) )
        })
    }
}
function rarelyUsed(){  w.dance=function(){var w=this
    w.e(function(b){if(b.iD()){b.thr()}})//w.eD
    return w
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
    w.boxes = function () {var w = this,g=G(arguments)
        _.e(g, function (g) {w.box.apply(w,g)})
        return w}
    w.brcks= w.boxesStat = function () {var w = this,g=G(arguments)
        _.e(g, function (g) {w.brick.apply(w, g)})
        return w}

    w.ten = w.addTenBalls = function (n) {
        var w = this

        _.t(n || 10, function (i) {

            w.ball(100 + (i * 80), 200)
        })

        return w
    }
    w.hun = w.addHundBalls = function (n) {
        var w = this
        _.t(n || 100, function (i) {
            w.ball(100 + (i * 8), 50, 10)
        })
        return w
    }
}
W=b2d.W=function(){var g=G(arguments),o


    o = g.A_? _.x(g.s||{}, {W:g.f[0], H:g.f[1], wW:g.f[2], wH:g.f[3]}) :

        N(g.f) && U(g.s)? { g: g.f }:

            g.$N? {W:g.f,H:g.s, wW:g.t, wH:g[3]}:

                g.S? {w:g.f }: g.f || {} //W([], [{}]) //W(1000)//W(1200,600,[N],[N])//W('U')


    _w = o.w
    o.g = N(o.g) ? V(0, o.g) : O(o.g) ? V(o.g) : V(0, 10)
    o.sl = U(o.sl) ? true : o.sl
    w = new b2d.World(o.g, o.sl)
    if(o.xx!==0){z()}

    w.W = N(o.W,1200);
    w.w = N(o.wW, w.W);
    w.Ww = w.W/w.w;
    w.wW = w.w/w.W;

    w.hW = w.W/2;
    w.H = N(o.H,600);
    w.h = N(o.wH, w.H);
    w.Hh = w.H/ w.h;
    w.hH = w.h/ w.H;
    w.hH = w.H/2;

    w.mZ = w.hH > w.wW? w.hH : w.wW;
    w.mS = w.Ww > w.Hh ? w.Ww : w.Hh;
    w.z=  w.SCALE=1

    //handling
    w.bH=   []; w.pH=   []; w.PH=   []; w.eH=   []  //l.P=  l.post=  function (fn) {this.PostSolve = fn; return this}
//l.b=  l.beg=  function (fn) {this.BeginContact = fn; return this}
//l.e=  l.end= function (fn) {this.EndContact = fn; return this}
//l.p=  l.pre=  function (fn) {this.PreSolve=fn;return this}
//w.listen = w.setContactListener = w.sCL = w.SetContactListener
    b2d.L= b2d.listener = b2d.contactListener = function () {return new b2d.Dynamics.b2ContactListener}
    w.SetContactListener(_.x(w.ln=new b2d.Dynamics.b2ContactListener,{

        BeginContact : function(cx){_.e(w.bH, function(fn){
            _.in(0,function(){fn(cx)})  })},

        EndContact : function(cx){_.e(w.eH, function(fn){
            _.in(0,function(){ fn( cx ) })   })},

        PreSolve : function(cx, i){_.e(w.pH, function(fn){
            fn(cx,i)})},

        PostSolve : function(cx, pam2){_.e(w.PH, function(fn){
            _.in(0,function(){fn(cx,pam2)})})}

    }))
    //grpx
    w.I = $St('z', w.W, w.H ,0, 0)
    w.s= $St('X', w.W, w.H, 0, 0)//.aC(0)
    w.canvas = w.s.canvas; w.can= $(w.canvas); w.ctx = w.can.ctx('2d')
    w.bg= w.s.ct();w.g=  w.s.ct();w.fg= w.s.ct()
    w.i =  $St('X', w.W, w.H, 0, 0)
    if(o.i){ w.s.bm(o.i) }
    w.lG($r())
    if(o.aC==1){
        //w.i.aC(0)
        // if(g.O){; return w}
        // return g.u? w.i.aC(!w.i.aC()): g.s? w.i.aC(w):
    }

    w.walls(_w)
    keys()
    mouse()
    T.t(function(){
        if(w.mj){w.mj.tg(w.mx, w.my)}
        w.step(1/60)
        if(F(o.cb)){o.cb()}
        if(!T.iP()){ w.I.u(); w.s.u(); w.i.u()}
        //  w.DrawDebugData()
        w.e(function(b){
            b.wX = b.X();
            b.wY= b.Y()
            b.sX = w.wTS(b.wX, b.wY).x
            b.sY= w.wTS(b.wX, b.wY).y
            if(O(b.gx)){b.gx.XY(b.X(), b.Y()).rt(b.rt())}
        })
    })

    if(o.t!==0){
        w.t =  w._t = w._t || w.S(w.hW, w.hH, 'w', [[20,2,'-'] ]).r(.8) //trackee
        w.i.A( w.tSpr=  $Ct().XY(w.t.X(), w.t.Y()) ) //  w.tSpr.bm('guy', function(g){  g.sXY(.2)}) // w.tSpr.A(g)
        T.t(function(){
            if(F(w.t.cb)){w.t.cb()} else if(F(w.tCb)){w.tCb()}
            w.s.x = -w.sXCap( (w.t.X()-w.hW+ w.hW)*w.z - w.hW  )
            w.s.y = -w.sYCap( (w.t.Y()-w.hH+ w.hH)*w.z - w.hH  )
            if(w.t == w._t){w.t.XY(w.tSpr.X(), w.tSpr.Y()); w.s.rt(w.tSpr.rt())}
        })
    }

    w.o=o //w.stats()

    return w

}

$W=function(){
    W()
    w.y()
    w.p()
}
levs()
chars()
function levs() {
    w.ramps = function () {
        var w = this
        w.ramp(
            [400, 350, 200, 300, 100],
            [500, 350, 300, 300, 60],
            [600, 350, 200, 300, 100],
            [700, 350, 300, 300, 60],
            [800, 350, 200, 300, 100],
            [1000, 350, 300, 300, 60],
            [1030, 350, 200, 300, 100],
            [1200, 350, 300, 300, 60])
        return w
    }
    w.bricks = function () {
        var w = this, g = G(arguments)
        _.e(g, function (g) {
            w.S.apply(w, g)
        })
        return w
    }
    w.grid = function (grid, x, y, len, spacing) {
        var w = this, b
        var gridDrawer = function (x, y, len, spacing) {
                b = w.D(x, y)
                len = N(len, 30);
                spacing = N(spacing, 20)
                return function (x, y) {
                    b.rec(len, len, x * spacing, y * spacing).C('r').d(1).fr(0.5).r(.2)
                    return b
                }
            },
            drawWall = gridDrawer(x, y, len, spacing)
        _.t(grid.length, function (row) {
            _.t(grid[0].length, function (c) {
                if (grid[c][row]) {
                    drawWall(row, c)
                }
            })
        })
        return b.K('grid')
    }
    w.rR = w.randRects = function (ob) {
        var w = this, g = G(arguments),
            o = g.O ? g.f : {y: g.f, z: g.s}
        o.y = N(o.y, 0)
        o.z = N(o.z, 1)
        _.t(20,
            function (i) {
                w.S(R(1100, 20), R(150, 40 + o.y), $r(),
                    R(40, 15) * o.z, R(40, 15) * o.z).K('randomRect rR')
            })
        return w
    }
    w.plat = function me(x, y, W, H) {
        var w = this, g = G(arguments)
        if (A(g[0])) {
            _.e(g, function (g) {
                me.apply(w, g)
            })
            return w
        }

        x = _.tN(x, 60)
        y = _.tN(y, x)
        W = _.tN(W, 30)
        H = _.tN(H, W)
        return w.S(x, y, 's', W, H)
            .r(0.3)
            .fr(2)
            .K('plat')
    }
    w.clod = w.clouds = function (lX, y) {
        var w = this
        lX = N(lX, 100)
        y = N(y, 75)
        _.t(100, function () {
            w.S(R(400) + lX, y, $r(), R(30))
        })
        return w
    }
    w.rub = w.rubber = function (x, y, len) {
        var w = this, rub
        len = N(len, 200)
        x += len / 2
        return w.S(x, y).rec({
            w: len, h: 20, c: 'r', s: 1
        }).fr(.3).r(.7)
    }
    w.grass = function (x, y, len) {
        var w = this
        len = N(len, 200)
        x += len / 2
        return w.S(x, y, 'g', len, 20).fr(.3).r(.3)
    }
    w.ice = function (x, y, len) {
        var w = this
        len = N(len, 200)
        x += len / 2
        return w.S(x, y, 'w', len, 20).fr(0).r(0)
    }
    w.ramp = function me(x, y, W, H, a) {
        var w = this, g = G(arguments)

        if (A(g[0])) {
            _.e(g, function (g) {
                me.apply(w, g)
            })
            return w
        }

        o = O(g[0]) ? g[0] : {x: g[0], y: g[1], w: g[2], h: g[3], a: g[4]}
        o.x = N(o.x, 300)
        o.y = N(o.y, 300)
        o.w = N(o.w, 100)
        o.h = N(o.h, 100)
        o.a = N(o.h, 10)
        o.c = o.c || 'y'

        return w.S(o.x, o.y, o.c, o.w, o.h).rot(a).DFB(1, 0, 0)
    }
    w.goal = function (x, y) {
        w.S(x - 20, y - 15, 'y', 10, 40)
        w.S(x, y, 'y', 40, 10)
        w.S(x + 20, y - 15, 'y', 10, 40)

    }
    w.buck = w.sensorBucket = function (x, y, k) {
        var w = this, sens

        x = N(x, 320)
        y = N(y, 245)
        k = k || 'sensorBucket buck'

        w.S(x - 150, y - 15, 'r', 20, 200)
        w.S(x + 150, y - 15, 'r', 20, 200)
        w.S(x - 200, y - 120, 'r', 320, 20, 200, 200)

        return w.S(x, y, 'd', [[280, 170, '-']]).K(k)


    }
    w.coin = function (x, y) {
        var w = this, c

        x = _.tN(x, R(600))
        y = _.tN(y, R(300))


        c = w.D(x, y, 'y', 20).K('coin').bo(0).den(0).lD(0)

        c.I(R(15, -5), R(15, -5))
        c.warp()

        return c
    }
    w.me = function () {
        alert('real w.me in JFAL')
    }
    b.warp = function (p) {
        $l('b.warp')
        var b = this, w = b.W()
        cjs.t(function () {
            if (b.Y() < 0) {
                b.Y(w.H)
            }
            if (b.Y() > w.W) {
                b.Y(0)
            }
            if (b.X() < 0) {
                b.X(w.W)
            }
            if (b.X() > w.W) {
                b.X(0)
            }
        })
        return b
    }
    w.stars = function (n) {
        $l('w.stars')
        var w = this
        _.t(N(n, 30), function () {
            w.D(R(1000, -500), R(800, -400), 'w', 2).den(0).rest(2)
        })
        return w
    }
    w.tim = w.addTim = function (n) {
        $l('w.tim')
        var w = this
        if (U(n)) {

            return w.D(300, 300, 'w', 15).K('tim').bS('guy', .3)
        }
        _.t(n, function () {
            w.addTim()
        })
        return w
    }
	
	
	w.me = function (x, y, Z) {
		var w = this, p
		Z = N(Z, 4)
		p = w.D(x, y)
		p.cir({c: 'X', C: 'X', l: 0, r: 1})
		p.rec('X', Z * 12, Z * 22).K('head')
		p.rec('X', Z * 10, Z * 20, 0, Z * 10, '-').K('feet')
		p.rec('X', Z * 2, Z * 6, 0, -Z * 12, '-').K('hat')
		p.rec('X', Z * 8, Z * 2, Z * 8, 0, '-').K('right')
		p.rec(Z * 8, Z * 2, -Z * 8, 0, '-').K('left')
		p.d(1).r(0).fr(.1).fixRot()
		p.bS({
			i: 'me',
			sc: Z / 10
		})
		return p.K('p player')
	}
	
	
    scrolling()
    orbit()
    terr()

    function scrolling() {

        w.tr = w.track = function (t, cX, cY, bf) {
            var w = this
            //i can leave the world-centering in fw
            // can optionally filter it with scale itself
            //  has limits now!  and more..
            // tis is the ultimate!

            if (U(t)) {
                t = w._trackee
            }
            w.t = t
            cX = N(cX, w.W / 2)
            cY = N(cY, w.H / 2)  //option to set based on t's CURRENT X/Y?
            if (bf == '!') {

                T.t(function () {
                    var sX, sY

                    sX = w.z * (t.X() - cX)

                    sX = sX * 1 / ( 1 + w.hW / w.w )

                    sY = w.z * (t.Y() - cY)

                    sY = sY / (1 + w.hH / w.h)

                    w.sXY(sX, sY)
                })
            }
            else if (bf == '-') {
                T.t(function () {
                    w.s.x = (cX - t.X()) * w.z - w.W * (w.z / 2 - .5)
                    w.s.y = (cY - t.Y()) * w.z - w.H * (w.z / 2 - .5)
                })
            }
//w.S(cX,cY,'o',[ [40,400,'-']]) // w.dbCross(cX,cY) //  w.dot(cX,cY,'+')
            else if (O(bf)) {

                bf.x = N(bf.x) ? bf.x : w.w / 2
                bf.y = N(bf.y) ? bf.y : w.h / 2
                bf.w = N(bf.w) ? bf.w : 0
                bf.h = N(bf.h) ? bf.h : 0
                bf.mX = N(bf.mX) ? bf.mX : 1
                bf.mY = N(bf.mY) ? bf.mY : 1

                w.S(bf.x, bf.y, 'r', [[bf.w, bf.h, '-']])
                w.S(bf.x, bf.y, 'w', [[bf.w + 20, bf.h + 20, '-']])
                w.S(bf.x, bf.y, 'b', [[bf.w, w.h, '-']])
                w.S(bf.x, bf.y, 'b', [[w.w, bf.h, '-']])
                w.S(bf.x, bf.y, 'z', [[10, 10, '-']])  //sensor works but ony for rect (or at least not for circ)
                w.S(bf.x, bf.y, 'w', [[bf.w, bf.h, '-']]) //  w.dot(bf.x-bf.w/2, bf.y-bf.h/2  ,     '+')

                T.t(function () {
                    var sX, sY
                    // sX = (bf.x-w.hW)   + cjs.adj( (t.X()-bf.x),  bf.w/2)/w.z
                    sX = bf.x - w.hW + cjs.adj(t.X() - bf.x, bf.w / 2) * bf.mX /// bf.mX //scaling not needed?
                    sY = (bf.y - w.hH) + cjs.adj(t.Y() - bf.y, bf.h / 2) * bf.mX// /bf.mY
                    w.sXY(sX, sY)
                })
            }
            else {

                //each tick, literally just sets w.sXY() based on:
                // world dimensions, world zoom, and trackee position

                T.t(function () {
                    var dX, dY
                    //run pre-scroll hook cb's
                    if (F(w.t.cb)) {
                        w.t.cb()
                    }
                    if (w.track.cb && F(w.track.cb)) {
                        w.track.cb()
                    }
                    // if the designated trackee optionally has its own cb,
                    // that over rules the (also optional) 'w.track.cb' cb
                    dX = t.X() - cX
                    dY = t.Y() - cY
                    w.sX(w.z * w.hW + w.z * dX - w.hW)
                    w.sY(w.z * (w.hH + dY ) - w.hH)
                })
            }
            return w
        }
        w.sXY = function (x, y) {
            $l('sXY')
            if (U(x)) {
                return {}
            }
            this.sX(x)
            this.sY(y)
            return this
        }
        w.sXCap = function (s) {
            return cjs.cap(s, 0, this.w * this.z - this.W)
        }
        w.sX = function (x) {
            var w = this


            if (U(x)) {
                return -this.s.x
            }
            this.s.x = -this.sXCap(x)

            return w
        }
        w.sYCap = function (s) {
            return cjs.cap(s, 0, this.h * this.z - this.H)
        }
        w.sY = function (y) {
            var w = this

            if (U(y)) {
                return -w.s.y
            }
            w.s.y = -w.sYCap(y)
            return w

        }
        b.tr = b.track = function (x, y, z) {
            var b = this, w = b.W()
            w.track(b, x, y, z)
            return b
        }
        w.Z = function (s) {
            //get/set zoom.. ok cool :)
            var w = this
            if (U(s)) {
                return w.z
            }
            w.z = s == '-' ? w.mS : cjs.cap(s, w.mS)
            w.s.sXY(w.z)
            return w
        }
        b.centerScale = function (z) {
            var b = this, w = b.W()

            w.s.sXY(z)

            w.s.X(
                w.hW - (  (b.X() - w.hW) * z)
            )

            w.s.Y(w.hH - ((b.Y() - w.hH)) * z)

            return b

        }
        w.zoomOut = function () {
            var w = this //knows when to stop :)
            w.tCb = function () {
                w.Z(cjs.cap(w.z *= .98, w.mS))
            }
            return w
        }
        w.zoomIn = function () {
            var w = this
            w.tCb = function () {
                w.Z(cjs.cap(w.z *= 1.02, 0, 4))
            }
            return w
        }
        w.inout = function () {
            var w = this, // now it works!!!!
                s = 1,
                up = true

            w.t.cb = function () {
                if (up) {
                    if (s < 2) {
                        s += .2;
                    }
                    else {
                        up = false
                    }
                    w.Z(s)
                }

                else {
                    if (s > .8) {
                        s -= .2
                    }
                    else {
                        up = true
                    }
                    w.Z(s)
                }
            }

            return w
        }
        w.showOff = function () {
            var w = this
            zin()
            function zout() {
                w.zoomOut();
                _.in(10, zin)
            }

            function zin() {
                w.zoomIn();
                _.in(4, zout)
            }

            return w
        }
        w.pan = function (o) {
            var w = this, g = G(arguments), o = g[0],
                mZ = w.mZ,
                MZ = mZ * 3,
                z = w.mZ * 3, up = true,
                l
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
        w.tX = function (t) {
            var w = this
            if (U(t)) {
                return w.tSpr.X()
            }
            w.tSpr.X.apply(w.tSpr, arguments)
            return w
        }
        w.tY = function (t) {
            var w = this
            if (U(t)) {
                return w.tSpr.Y()
            }
            w.tSpr.Y.apply(w.tSpr, arguments)
            return w
        }
        w.tXY = function (x, y) {
            var w = this
            if (U(x)) {
                return {x: w.tX(), y: w.tY()}
            }

            y = N(y) ? y : x

            return w.tX(x).tY(y)
        }
        w.tRightLeft = function () {
            var w = this, left
            T.t(function () {
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
        refMakeWorldScrollCode = function () {

            alert('refMakeWorldScrollCode')
            w.t = w._t = w._t || w.S(w.hW, w.hH, 'w', [[20, 2, '-']]).r(.8) //trackee
            w.i.A(w.tSpr = $Ct().XY(w.t.X(), w.t.Y())) //  w.tSpr.bm('guy', function(g){  g.sXY(.2)}) // w.tSpr.A(g)


            T.t(function () {


                if (F(w.t.cb)) {
                    w.t.cb()
                } else if (F(w.tCb)) {
                    w.tCb()
                } // actually calls the callbacks
                // i see w.sXCap and w.sYCap.. i think they limit the scroll distances
                //distances are simply calculated and assigned right to **** w.s *****
                //so it moves the actual stage... (dont worry, not the canvas)
                w.s.x = -w.sXCap((w.t.X() - w.hW + w.hW) * w.z - w.hW)
                w.s.y = -w.sYCap((w.t.Y() - w.hH + w.hH) * w.z - w.hH)


                if (w.t == w._t) {// if the trackee is the generic one that world provided...
                    //have it bind to 'tSpr'.. some dumb tim graphic.. i think i can lose this part real soon
                    w.t.XY(
                        w.tSpr.X(),
                        w.tSpr.Y()
                    )
                    w.s.rot(w.tSpr.rot())

                }

            })


        }


        STREET = function () {

            W([1200, 600, 1400, 1200], {g: 300, t: 0})
            w.S(700, 1000, 'r', 800, 20)
            w.S(500, 800, 'g', 200, 20)
            w.S(900, 600, 'x', 200, 20)

            p = w.p(700, 600)
            w.fg.A(p.sp())

            w.track(p, 600, 400,
                {x: 700, y: 1000, w: 700, h: 600, mX: 1.5})
        }
        SPUFF = function () {

            W(800, 600, 800, 800).G(0)
            w.S(200, 500, 'g', 100, 100);
            w.S(500, 500, 'w', 100, 100);
            w.S(1000, 500, 'r', 100, 100);
            w.S(1500, 500, 'g', 100, 100)

            y = w.ship(100, 100).rt(200)

            w.track(y, 500, 500, {x: 1000, y: 1000, w: 400, h: 400})

            BUFFER = function () {


                W([1200, 600, 4800, 1600], {g: 0, t: 0})//.mark()//.dot(600,300,'*').dot(1200,600,'*')

                y = w.ship(100, 100).damp(1, 10).rot(90).lD(2).aD(2)
                    .rot(120)//.lV(1)

                w.bufFoll(y, 600, 300, {
                    x: 800, y: 300, mX: .8, mY: .8, w: 200, h: 200
                })


                // w.Z(.8)
            }

        }


        SLY = function () {
            W([1200, 600, 2400, 1000], {g: 300}).P()
            w.right.kill();
            w.left.kill()
            w.track(p, 300, 400, {
                x: 1200, y: 700,
                w: 800, h: 500,
                mX: 10, mY: 10
            })
        }
        SCROLLNOLIM = function () {
            W([1200, 600, 2400, 1200], {g: 0})
            w.S(1200, 300, 'r', 400, 100)
            w.S(1200, 600, 'w', [[100, 100, '-']])
            w.S(1200, 900, 'r', 400, 100)
            y = w.ship(100, 100).rot(120).damp(1, 10)

            w.Z(.8)

            w.track(y, 600, 300, '-')
            w.dragScale = function () {
                var w = this,
                    pX = 0, pY = 0, pmX, pmY, o = {}
                c = $(w.i.canvas)

                c.mousedown(function (e) {
                    o.Scl = w.z
                    o.Y = e.clientY
                })
                c.pressmove(function (e) {
                    var x = e.clientX,
                        y = e.clientY,
                        newSc = o.Scl + (o.Y - e.clientY) * .005

                    newSc = newSc > 5 ? 5 : newSc < .8 ? .8 : newSc
                    w.Z(newSc)

                })

                return this
            }


            w.dragScale()
        }//fix

        SHOWOFF = function () {
            W([1200, 600, 2400, 600], {g: 10})

            y = w.ship(50, 50).track()//.P(100,1000)

            w.S(400, 2500, 'r', 200, 100)
            w.S(800, 2300, 'z', 100, 100)
            w.S(1200, 2300, 'b', 300, 100)
            w.S(1600, 2300, 'z', 100, 100)
            w.S(2000, 2300, 'r', 200, 100)
            _.times(10, function (i) {
                w.D(100 + i * 100, 100, $r(), 35).den(.1)
            })
            w.showOff()

        }
        ZOOMSCALE = function () {

            W([1000, 1000], {
                g: 0, t: 0
            })

            w.dragX = function () {
                var w = this, d
                w.i.c.m({
                    mD: function (x) {
                        d = x - w.s.x
                    },
                    pM: function (x) {
                        w.s.x = x - d
                    }
                })
                return w
            }
            w.dragY = function () {
                var w = this, d
                w.i.c.m({
                    mD: function (x, y) {
                        d = y - w.s.y
                    },
                    pM: function (x, y) {
                        w.s.y = y - d
                    }
                })
                return w
            }
            w.drag = function () {
                return this.dragX().dragY()
            }


            // w.s.HUD.dot(500, 500)
            y = w.ship(100, 100).rot(200)
            w.S(500, 500, 'o', 200)
            w.S(500, 500, 'r', 10)
            w.S(200, 200, 'm', 40)
            w.S(800, 200, 'b', 60)
            w.S(800, 800, 'l', 80)
            w.S(200, 800, 'g', 100)

            //w.inout()
            w.drag()

            r = $.rg().A() //range
            r.abs(775, 500)
            r.css('transform', 'rotate(90deg)')
            r.W(500).val(0)
            T.t(function () {
                w.Z(r.val() / 25 + 1)
            })
        }


    }

    track()
    function track() {
        CUPBALL = function () {//should zoom in when near cup
            CUPS()
            b = w.D(w.W / 2, w.H / 2, 'w', [[10]]).r(.8).track()
            cjs.tick(function () {
                b.F(0, -20)
            })
            w.showOff()
        }
        TRACKEE = function () {

            W([1200, 600, 2400, 600], {g: 10})
            w.S(400, 2500, 'r', 200, 100)
            w.S(800, 2300, 'z', 100, 100)
            w.S(1200, 2300, 'b', 300, 100)
            w.S(1600, 2300, 'z', 100, 100)
            w.S(2000, 2300, 'r', 200, 100)
            _.times(10, function (i) {
                w.D(100 + i * 100, 100, $r(), 35).den(.1)
            })

            y = w.ship(50, 50).mid()
            y2 = w.ship(100, 300).C('x').rot(180)


            //i thought i may want t for timer/ticker.. but time has no x and y !
            //move the stage by manipulating the trackee x,y
            //these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?


            w.tRightLeft()

            w.showOff()


            setTimeout(function () {
                setInterval(function changeT() {
                    if (w.t == y2) {
                        w.C('b');
                        w.t = y
                    } else {
                        w.C('z');
                        w.t = y2
                    }
                }, 5000)
            }, 5000)


        }
        CAMFOLLOW = function () {
            W(500, 500, 1600, 1000).G(0)
            a = w.ship().C('b')
            b = w.ship(400, 400).C('o').track()
            I(5, function () {
                if (w.follA) {
                    b.track();
                    w.follA = 0
                }
                else {
                    a.track();
                    w.follA = 1
                }

            })


        }


        CB = TRACKEECB = function () {
            W([1200, 600, 2400, 1200], {g: 300})


            _.t(10, function (i) {
                w.D(100 + i * 100, 100, $r(), 35).d(.1)
            })

            w.Z('-')

            p = w.p(1175, 100)
            w.t = p // no need to call track?

            _.ev(1, function () {
                w.t.cb = function () {
                    w.Z(w.z + .001)
                }
            })

        }

    }

    auto()
    function auto() {
        AUTO = function () {
            w.left = function (n) {
                var w = this;
                n = N(n, 4)
                w.e(function (b) {
                    b.X(n, '-')
                })
            }

            b.byI = b.byImp = function (i) {
                var k = $.K
                if (k.right) {
                    this.I(i, 0)
                }
                else if (k.left) {
                    this.I(-i, 0)
                }
                return this
            }
            b.byV = b.byVel = function (v) {
                alert('b.byV')
                var k = $.K
                if (k.right) {
                    p.lV(v, 0)
                }
                else if (k.left) {
                    p.lV(-v, 0)
                }
                return this
            }

            W({g: 300, w: 0}).P(300, -300)

            w.plat = function (x, y, W, H) {
                var w = this//=brk=brick=
                x = N(x) ? x : 60;
                y = N(y) ? y : x
                W = N(W) ? W : 30;
                H = N(H) ? H : W
                return w.S(x, y, 'w', W, H).r(.3).K('plat')
            }


            w.plat(800, 500, 600, 100)
            w.plat(300, 530, 100, 100)
            w.plat(1400, 300, 600, 100)
            w.plat(1800, 500, 1000, 100)
            w.plat(1900, 200, 600, 100)

            w.p(300, -100)

            T.t(function () {

                w.left(4)

                if (p.Y() > 2000) {
                    p.XY(300, -300)
                } //comeback

                if (b2d.onG) {
                    if ($.K.u) {
                        p.jumping(180, 30)
                    }
                    else {
                        p.byVel(40)
                    }
                }

                else {

                    p.byImp(10)
                }

            })

            w.D(800, 100, 'r', 50, 50).bS('guy')
        }

    }

    function orbit() {

        _grid = [
            [1, 0, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 1],
            [1, 0, 1, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1]


        ]
        b.horizCenter = function () {
            var b = this;
            b.X(b.W().hW);
            return b
        }   //-> b.X('hC')//b.g=function(){ return this.f().g }
        CLOOT = CLICKSHOOT = function () {
            W({g: 0})

            p = w.me(800, 300).aD(10000)
            w.tim(7)

            w.b(function (cx) {
                cx.w('bul', 'tim', function (t) {
                    t.B().kill()
                })
                cx.w('bul', p, function () {
                    this.B().kill()
                })
                cx.w('tim', p, function () {
                    p.kill()
                })
            })


            $.click(function (e) {
                var x = e.pageX - p.X(), y = e.pageY - p.Y(),
                    rot = M.tD(M.atan(y / x)),
                    adj = x > 0 ? 90 : 270
                p.rot(rot + adj).I(x / 20, y / 20)
                w.bul(p.wP(0, -100), 10).I(x, y) //.bS({i:'sun', sc:.1})
            })


//to do:  maybe u only get 10 buls ever.. so u must chase them :) (only way to kill badguys)

        }
        TALK = function () {
            W({g: 0, w: 0})
            score = 0
            shots = 0

            p = w.me(500, 300).stat()


            _.t(100, function () {
                w.D(R(2200, -1000), R(1600, -1000), $r(), R(14, 8)).lD(2)
            })

            /*
             $.space(function(){//can double on on shots!!!
             setInterval(function(){
             p.shoot(); shots++ }, 200)
             })  //setTimeout(function(){$.pop(score).click(function(){window.location=window.location})}, 10000)
             */
            w.cl('ball', 'bullet', function () {
                // score++;  cx.destroy()

            })


            cjs.t(function () {
                p.XY(500, 300)
                if ($.K.left) {
                    p.rot(8, '-')
                }
                if ($.K.right) {
                    p.rot(8, '+')
                }
                if ($.K.up) {

                    w.e(function (b) {
                        if (
                            !b.of('bul') && !b.of('player')
                        ) {
                            b.I(p.vec(0, -100).div(-50))
                        }

                    })


                }

            })
        }
        SPAZE = SPACEMAZE = function () {
            W({
                g: 0
            })
            w.roof.kill()

            _.t(30, function () {
                w.D(R(1000, -500), R(800, -400), 'w', 2).d(0).r(2)
            })

            grid = w.grid(_grid, 100, -100, 14, 40)
            grid.aD(1)
            //p = w.p(220, 70, 1.5).aD(100).track()//.follow(300, 150)
            //p.cn('thrust')
//    p.fR(false)
            p = w.y()
            score = 100
            T.t(function () {

                grid.aV(.2)
                // w.i.pen(score)
            })
            w.b(function (cx) {
                if (cx.w('player', 'grid')) {
                    score--
                }
            })
        }

        SPOOM = function () {
            W({g: 0, w: 0})

            w.cen('+')

            w.s.rXY(w.hW, w.hH)

            star = w.S(200, 200, 'p', 100).den(1).bo(2)
            star.bS('earth', .13)


            p = w.p(200, 200, 2.5, 'thrust').d(.4)
            p.horizCenter()
            p.aD(8).lD(.8)


            w.dJ(p, star).freq(.15).damp(0).len(50)

            cjs.t(function () {
                trans(cjs.cap(300 / M.dist(star, p), .3, 2))
            })

            function trans(Z) {
                w.s.sXY(Z)
                w.s.XY(w.hW - (p.X() - w.hW) * Z,
                    w.hH - (p.Y() - w.hH) * Z)
            }
        }


        YO = SPOYO = SPACEYOYO = function () {
            W({g: 0, w: 0})
            w.stars()

            p = w.p()
            p.cn('t')

            star = w.sun(200, 200)

            _.in(function () {
                star.sp().sXY(1)
            })


            w.spg(p, star).fq(3).d(4)

        }


        SPACE = function () {
            var img
            W({g: 0, w: 0});


            s = w.s
            e = w.S(200, 200, 'p', 100).d(1).r(2)


            e.bS({i: 'earth', sc: .13})
            e.K('earth');


            eI = e.sp()

            p = w.p(200, 200, 2.5, 'thrust')
                .d(.4).aD(8).lD(.8)

            w.dJ({
                a: p, b: e, l: 50, f: 0.15,
                coll: 1
            })
            T.t(function () {
                var sp, dx = e.X() - p.X(), dy = e.Y() - p.Y(),
                    sc = cjs.cap(
                        300 / M.sqrt(dx * dx + dy * dy), .3, 2)
                s.XY(
                    300 - sc * (p.X() - 300),
                    150 - sc * (p.Y() - 150))
            })


        }//

    }

    function terr() {
        MEET = function () {
            W([1200, 600, 1200, 600], {g: 10})


            //  w.l(600,0,700,500)//hud


            //  w.l(1000,200, 100,900,'-') //red

            //  w.l(50,50,500,350,'/')

            //  w.l(200, 200, 500,500,'+')
            //  _.t(10, function(i){w.D(100+i*40,100).cir({r:35,lf:{c1:'*',c2:'*'}}).d(.1);w.D(100+i*40,100).cir({r:20,lf:1}).d(.1)})


            /*
             _.t(10, function(i){
             w.D(100+i*140,160).cir({r:50,

             rf:{
             c1:$r(),
             c2:$r(),
             }
             }).den(.1)})


             w.D(800, 300).cir({r:120,
             C:'y',   l:2,  bf:'me', ls:['y','x']//?
             }).den(.1)


             */
            //i thought i may want t for timer/ticker.. but time has no x and y !
            //move the stage by manipulating the trackee x,y
            //these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?


            //  y = w.ship(50,50 ).C('d').mid().track()


            y2 = w.y(100, 300)//.C('x').rot(180)


            //w.tRightLeft();//w.showOff()

            _.evx(5,
                function () {
                    if (w.t == y2) {
                        w.C('w');
                        w.t = y
                    }
                    else {
                        w.C('z');
                        w.t = y2
                    }
                })


            /* w.S(800,300,'r',200,800)
             .cl('bul',function(bu){
             this.sub( bu.B().exp(),'-')})


             w.S(200,300,'r',200,800).cl('bul',function(bu){bu=bu.B()
             var v=bu.pos()
             bu.kill()
             w.pol(v.x,v.y,
             M.p([[0,50],[-50,0],[0,-50],[50,0]])
             ).stat()})
             */
            //y.track()


            t = w.S(500, 300, 'g', 200, 800)

            t.cl(//'bul',
                function (bu) {
                    var v

                    bu = bu.B()

                    v = bu.XY()// v=bu.kill()

                    p = M.p([[0, 100], [-100, 0], [0, -100], [100, 0]]).ger(v)
                    w.rad(v.x, v.y, 15, function (f) {
                        f.sub(p)
                    })//t.fs(function(f){f.sub(p)})
                    t.fs(function (f) {
                        f.C($r())
                    })


                })


            /*
             //pol
             w.D(200,300).pol({
             v:[[0,100],[0,-100],[200,-150],[200,150]],
             c:'y',C:'w',l:5,
             bm:1})
             w.D(800,300).pol({
             v:[
             [[5,100],[0,-100],[200,-150],[200,150]],
             [[-50,50],[-50,-100],[450,-50],[450,50]]
             ],
             c:'b',C:'X',
             bm:1})



             b=w.D(100,300)
             pf = b.pol({s:1, C:'y',
             v:[[-200,-100],[0,-200],[100, -100]] })
             pfs =  b.pol({s:1, C: 'o',
             v: [  [-100, 0],  [0, -200],  [100, 20],    [0, -150] ]})


             cf = b.cir({k:'cir', r:100, x:200, y:-100, d:.2, b:.8, f:100, C:'x'})
             rf = b.rec({x:100, y:100,w:10,  h:100,   C:'x'})
             */


            /*
             //turtle
             turtle =[
             ['g', [0,0], [-50,-10], [-40,-20],[0,-40],[20,-10] ],
             ['y', [10,-10], [20,-30],[50,-15], [45,-5] ],
             ['y', [-50,10],[-50,-10],[-40,-10],[-40,10] ],
             ['y', [-10,10],[-10,-10],[0,-10],[0,10] ],
             ['x', 10, 55,-12],
             ['u', 30,40, 75,-12]]
             w.D(400, 280,turtle, '-')  //this changes the data object for future uses !!!
             w.D(600, 280, [
             ['g', [0,0], [-50,-10], [-40,-20],[0,-40],[20,-10] ],
             ['y', [10,-10], [20,-30],[50,-15], [45,-5] ],
             ['y', [-50,10],[-50,-10],[-40,-10],[-40,10] ],
             ['y', [-10,10],[-10,-10],[0,-10],[0,10] ],
             ['x', 10, 55,-12, '-'],
             ['u', 30,40, 75,-12 ,'-']])
             */
        }
        SEB = function () {
            W({g: 1})//w.show(function(){return b.num()})
            b = w.D(800, 300, 'r', 200, 800).stat().K('terr')
            y = w.y().lD(3).X(1100)
            p = w.p(200, 400).K('jason');
            //setTimeout(function () {p.sprite.sXY(.5)}, 1000)
            can = true
            w.b(function (cx) {
                var fixt, j, bull, terr, bX, bY, br
                if (fixt = cx.w('bul', 'terr')) {
                    bull = fixt[0].B()
                    terr = fixt[1].B()
                    bX = bull.X()
                    bY = bull.Y()
                    bull.kill()
                    if (can) {
                        can = false
                        // b.minusPolyCirc(bX, bY, 100, 7)
                        poly = M.p(_.m(b2d.pC(100, 7), function (v) {
                            return [v.x + b.X(), v.y + b.Y()]
                        }))
                        // verts = b.sub(poly)
                        br = w.pC(bX, bY, 100, 7)  // b.sub(br) // b.verts not working :(
                        b.sub(br, '-') // br.kill()
                        //  b.color('r')
                        can = true
                    }
                }
                else if (fixt = cx.w('jason', 'bul')) {
                    $l('bullet hit jason!!!!');
                    j = fixt[0].body();
                    //j.sprite.tween([{sxy:20, r:100}, 1000])
                }
            })
            f = function () {
                v = h.verts()
                v.unshift('b')
                v.unshift(200)
                v.unshift(200)
                w.B.apply(w, v)
            }
            killIfSmallx = function (f) {
                var area = f.area();
                if (area < 20) {
                    $l('too small: ' + area);
                    f.kill()
                }
            }

        }
        TERREASEL = function () {
            z()
            s = stage = $St(1600, 600).A()
            h = s.h()
            h.f('b').dc(200, 200, 10)
            h2 = s.h().X(700)
            h2.f('b').dc(0, 0, 10)
            tile = function (i, j) {
                return [V(-5 + i, 130 + j), V(-5 + i, 80 + j), V(45 + i, 80 + j), V(45 + i, 130 + j)]
            }   // lower left //upper left//upper right//lower right
            draw = function () {
                terr = []
                _.t(13, function (i) {
                    _.t(8, function (j) {
                        terr.push(tile(i * 50, j * 50))
                    })
                })
                h.drawPolygons(terr, 'b', 'r')
            }
            draw()
            t = M.p(terr[101])
            doExplosion = function (e) {
                v = V(e.stageX, e.stageY)
                exP = circ(v, 100)
                h.drawPolygon(exP, 'z')
                c = Math.p(exP) // for each existing terrain polygon, check the difference between the polygon itself and the
                // explosion polygon. This should be optimized in some way, checking only for terrain polygons
                // which are actually affected by the explosion.
                // Then we remove the terrain polygon from the array, and we add the resulting polygon(s) after
                // difference is calculated.
                iX = c.intersection(t)
                h2.drawPolygon(iX.verts())
                for (var i = terr.length - 1; i >= 0; i--) {
                    totalArea = 0
                }
            } // resultPolygons =   terr[i].intersection(exP)// terr.splice(i,1)// for (var j =0; j<resultPolygons.length; j++) {terr.push(resultPolygons[j])}
            circ = function (v, rad, prec) {
                prec = N(prec) ? prec : 20
                arr = [];
                ang = 2 * Math.PI / prec
                _.times(prec, function (i) {
                    pX = v.x + rad * Math.cos(ang * i)
                    pY = v.y + rad * Math.sin(ang * i)
                    arr.push(V(pX, pY))
                })
                return arr
            } // listeners: basically we destroy the terrain with a mouse click or a mouse drag
            // stage.on('mousedown', function(){stage.on('mousemove', doExplosion)})
            // stage.on('mouseup', function(){stage.off('mousemove', doExplosion)})
            stage.on('click', doExplosion)
            vv = [V(645, 480), V(595, 480), V(595, 430), V(645, 430)] //lower right//lower left//upper left//upper right
            h.drawPolygon(vv, 'z')
            vvv = [V(645, 380), V(595, 380), V(595, 372), V(617, 369), V(645, 373)]
            h.drawPolygon(vvv, 'z')
        }
        TERR = function () {
            W()

            explosion = function (x, y) {
                var c, b

                c = w.pC(x, y, 30, 5)

                b = b2d.sep(circ(V(0, 0), 30, 5)).XY(x, y)
                return {c: c, b: b}

            }

            sep = b2d.sep()
            terr = w.ter()
            w.dot(420, 200);
            w.dot(410, 210)
            t = terr[103]
            /*



             s = b2d.sep(t.b.f().vs()).stat()//.XY(100,100)
             exp = explosion(740, 395)
             M.p(exp.cir)

             dif = t.poly.D(exp.cir)

             t.b.f().kill()


             bb = b2d.sep(t.b, dif.vs()).stat().XY(0, 0)


             // setTimeout( function(){ t.bod.X(20) }, 2000)

             */
        }
        TER = function () {
            W().C('z')

            terr = w.ter()
            w.dot(420, 200);
            w.dot(410, 210)
            t = terr[103]

            fn = function (f) {
                f.B().kill()
            }
            o = {x1: 550, y1: 250, x2: 600, y2: 500, fn: fn}
            // w.Q(o)

            w.rad(550, 250, 35, fn)


        }
    }
}

function chars(){maro()
    yip()
    badG()

    function maro() {

        w.p = function (x, y, sc, cn) {
            var w = this, g = G(arguments),
                p
            sc = N(sc, 1)
            cn = cn || 'jump'
            p = w.D(x, y).fR()
            p.cn(cn)
            p.SetBullet(true)
            p.rec({c: 'r', l: 5, C: 'r', w: 22 * sc, h: 40 * sc}).d(5)
            p.rec({

                s: 1,
                w: 8 * sc, h: 8 * sc,
                x: 0,
                y: 20 * sc,

            }).K('feet').C('X')
            p.Bm('me', 0, 0, 0.25 * sc)
            // p.bS(   {i:'me', sc: .25*sc, x:-10,y:-110}  )
            if (g.p) {
                p.tr()
            }
            p.r(.4)
            p.lD(.5)
            return p
        }

        b.inAir = function () {
            var b = this, onG = false
            this.cxs(function (cx) {
                if (cx.IsTouching()) {
                    cx.w('feet',
                        function () {
                            if (this.of(b)) {
                                onG = true
                            }
                        })
                }
            })
            return !onG
        }


        b2d.cn.j = b2d.cn.jump = function (p) {

            /* p.vX(
             K.r?200 :
             K.l?-200 :0)
             if(K.u && p.onG){
             p.vY(-1000)
             }*/

            var m = p.mass()
            if (p.inAir()) {
                if ($.K.r) {
                    p.I(m / 2, 0)
                }
                else if ($.K.l) {
                    p.I(-m / 2, 0)
                }

                p.I(0, m * 3)
            }

            else {//on ground
                if ($.K.u) {//initiate a jump
                    if ($.K.r) {
                        p.lV(m, -m * 4)
                    }
                    else if ($.K.l) {
                        p.lV(-m, -m * 4)
                    }
                    else {
                        p.lV(0, -m * 8)
                    }
                }
                else {//not jumping, may be running
                    if ($.K.r) {
                        p.lV(m * 2, 0)
                    }
                    else if ($.K.l) {
                        p.lV(-m * 2, 0)
                    }
                    else {
                        p.lV(0, 0)
                    }
                }
            }

            if ($.K.d) {
                p.I(0, m * 3)
            }
        }
        w.P = function (x, y, sc) {
            var w = this,
                g = G(arguments)
            p = w.p(N(g.f, w.hW), N(g.s, w.H - 50), N(sc, 2))
            if (g.p) {
                p.tr()
            }
            return w
        }

        AUTOGAME = function () {
            W({w: 0, t: 0}).P()

            setup = function () {
                score = 0

                p.XY(350, 100)
                p.lV(0, 0)
                p.cn('j')
                p.d(.1).r(1).fr(0)
                w.s.XY(0, 0)
            }
            setup()

            T.t(function () {
                w.s.X(4, '-');
                if (p.relPos() < -100) {
                    setup()
                }
            })//.pen(score++)

            w.ramps()
        }
        MARIOS = function () {
            W().P().P().P()

        }
        HIDESEEK = function () {

            W([1200, 600, 1400, 1200], {g: 300, t: 0})
            w.S(700, 1000, 'r', 800, 20)
            w.S(500, 800, 'g', 200, 20)
            w.S(900, 600, 'x', 200, 20)

            p = w.p(700, 600)
            w.fg.A(p.sp())

            w.track(p, 600, 400,
                {x: 700, y: 1000, w: 700, h: 600, mX: 1.5})
        }

    }
    function yip() {
        w.bu = w.bul = function () {
            var w = this, g = G(arguments), o, bu
            o = g.O_ ?  //pass {x,y},rad  OR x,y,rad
            {x: g.f.x, y: g.f.y, r: g.s} :
                N(g.s) ? {x: g.f, y: g.s, r: g.t} :
                {r: g.f}

            bu = Bul(o.x, o.y).fr(0).d(.1).r(.5)
            bu.cl(onColl)
            return bu.lD(0).aD(0)
            function Bul(x, y, rad, c) {

                c = c || 'w'

                rad = N(rad, 8)
                var bu = w.D(x, y, c, rad).K('bul bu')

                bu.SetBullet(true)

                return bu
            }

            function onColl(f) {
                if (!g.n) {
                    this.xB()
                }
                if (g.p) {
                    if (O(f) && F(f.xB)) {
                        f.xB()
                    }
                }
            }
        }
        b.bu = b.bul = function () {
            var b = this, g = G(arguments)
            if (g.p) {
                b.SetSensor(true)
            }
            return b
        }
        b.sht = function () {
            var b = this, g = G(arguments),
                o = {k: g.f},
            //just above b
                bu = w.bu(
                    this.wP(0, -200)
                )
            bu.lV(b.vec().m(100))
            bu.d(.5).lD(0).fR()
            bu.K(o.k)
            return bu
        }
        b.shtSp = function (k) {
            var b = this
            $.space(function () {
                b.sht(k)
            })
            return b
        }
        b.cn = function (cn, o) {
            var b = this, w = b.W()
            //stop a current 'controls', if any
            if (F(b._cn)) {
                w.s.off('tick', b._cn)
            }
            if (U(cn)) {
                return
            }
            if (S(cn)) {
                cn = b2d.cn[cn]
            }
            if (F(cn)) {

                b._cn = w.s.t(
                    function () {
                        cn(b, o)
                    }
                )
            }
            return b
        }
        b2d.cn.thr = b2d.cn.thrust = b2d.cn.t = function (p, mult) {
            var vec
            mult = N(mult, 200)

            if ($.K.u) {
                vec = p.vec().m(mult)
                p.I(vec)
            }

            p.aV($.K.r ? 15 : $.K.l ? -15 : 0)
            //  $l('vec: '+ parseInt(vec.x) + ', '+ parseInt(vec.y))
        }
        w.y = w.ship = function () {

            var w = this, g = G(arguments), hS, side, ship, y, o
            o = g.O ? g.f :  //pass opOb
                //pass {c='y'}, x=100, y=100, sc=4
                g.S_ ? {c: g.f, x: g.s, y: g.t, sc: g[3]} :
                {x: g.f, y: g.s, sc: g.t}
            o.c = o.c || 'y';
            o.sc = N(o.sc, 4);
            o.x = N(o.x, 100);
            o.y = N(o.y, 100)


            y = makeShip(o.x, o.y, o.sc * 4, o.c)
            y.push = function (frc) {
                $l('y.push')
                var y = this, g = G(arguments)

                frc = N(g.f, 1)


                ev = .5
                if (g.p) {

                    _.ev(ev

                        , function () {
                            y.push(frc)
                        })
                }
                else {
                    y.I(y.vec().m(frc * 40))
                }

                return y
            }

            y.going = function () {
                var y = this,
                    lv = y.lV()
                return M.a(lv.x) > 0.5 || M.a(lv.y) > 0.5 || M.a(y.aV()) > 0.5
            }
            if (!g.n) {
                y.cn('thrust')
            }

            y.shtSp()

            if (g.p) {
                y.tr()
            }

            return y.K('ship yip y').aD(0).r(.8)

            function makeShip(x, y, hS, c) {
                var side = hS * 2, y
                y = w.D(x, y)
                y.pol(oO('c', c), [
                    [-hS, hS], [0, -side * 2], [hS, hS]
                ])
                y.fixedRot(false)
                y.SetBullet(true)
                return y
            }


        }
        w.Y = function () {
            var w = this, g = G(arguments)
            y = $a(w, 'y', g)
            if (g.p) {
                y.track()
            }
            return w
        }
        OBST = OBSTACLES = function () {
            W(10).Y()
            _.t(20, function () {
                w.S(R(500), R(500), $r(), 20)
            })
        }
        BIG = BIGSHIP = function () {
            W([1200, 600, 2400, 600], {g: 0})
            w.y({
                c: 'b',
                sc: 20
            }, '+')

        }
        COLSHIP = function () {
            W().G(1)//.C('z').pen('welcome to tensor (damping) controller - the timing here is amazing!')


            y = w.y()
            co = w.tCo()

            co.B(
                r = w.D(100, 100, 'r', 100).lV(10, 20).grp(-1).lD(.2),
                b = w.D(500, 500, 'b', 90).lV(-10, -20).grp(-1).lD(.2),
                y = w.D(300, 300, 'y', 70).lV(-10, -20).grp(-1).lD(.2)
            )

            o = w.D(300, 300, 'o', 70).lV(-10, -20).grp(-1).lD(.2)


            _.t(30, function () {
                var b = w.D(400, R(300, 100), 'o', 20)
                b.lV(10, 20).lD(0)

                b.lV(10, 20)
                b.f().grp(-1)
                co.B(b)
            })


            y.grp('-1')

            w.r_.cl(function (f) {
                f.C('b');
                co.xB(f)
            })
            l = w.m_controllerList.GetBodyList()
        }
        WAR = function () {
            W({g: 0})

            var n = 0, x = 150, Y = 150

            w.cl('bul', 'bad', function (bad) {
                this.B().kill();
                bad.B().kill()
            })

            _.t(15, function () {

                w.y($r(), x += 4, Y += 2, 3, '-')
                    .K('bad').rt(R(90))
                    .push(20, '+')
                    .shtEv(300, 'deathBall')
            })
        }
        b.vec = b.v = function () {
            var b = this, g = G(arguments), o, vec
            o = g.O ? g.f :
                g.s ? {x: g.f, y: g.s} : //this not error
                {y: g.f}

            vec = V(N(o.x, 0), N(o.y, -1))
            return b.GetWorldVector(vec)

        }//the current direction of that vector in world coordinates
        STUM = function () {
            W({g: 3})
            y = w.y(300, 400, 3, '-')

            _.ev(.1, function () {

                var v = y.vec(0, 1.5)
                v = V(
                    M.tD(v.x),
                    M.tD(v.y)
                )

                y.I(0, v.y / 5).rt(2, '+')

            })


            //arm
            b = w.S(300, 300, 20, 200)
            a = w.S(300, 300, [['b', 200, 50, 100, 0]])
            _.ev(.1, function () {
                a.rt(1, '+')
            })
        }

        b.tow = b.towards = function (x, y, sp) {
            $l('b.tow')
            var b = this, lV
            __sp = function (s) {
                s = N(s, 5)
                s = 11 - (  s > 10 ? 10 : s )
                s *= 20
                return s
            }
            sp = N(sp, 5)
            sp = 11 - (  sp > 10 ? 10 : sp )
            sp *= 20
            lV = V(x - b.X(), y - b.Y()).d(sp)
            return b.lV(lV)
            //if(isBody(x)){return self(x.X(), x.Y(), y)}
//move towards x,y (or body?)
            //more realistic to accelerate, via forces?

            //these just thrust and dont
//otherwise apply forces to neighbors.  but what if
//they 'SUCKED' instead of 'thrusted' ?
//is that the same as having a gravitational inwards force?
//  y = $ys(300, 200, 3).angDamp(0).linDamp(1)
        }
        b.rTow = function (y) {
            $l('b.rTow')
            var b = this,
                a = -M.tD(M.atan((y.X() - b.X()) / (y.Y() - b.Y())))
            if (y.Y() > b.Y()) {
                a += 180
            }
            b.rt(a)
            return b

        }
        TOW = TOWARD = function () {
            W({g: 0}).C('z').Y()

            ball = w.D(500, 300, 'r', 100)

            bY = w.y('b', 100, 200, 6, '-')


            bY.shtEv(.2)

            //y.aD(1).lD(1).r(0).fr(1).K('guy')


            T.t(function () {

                bY.tow(ball.X(), ball.Y(), 9)
                bY.rTow(y)
            })

            return
            _.t(5, function () {
                w.y('b', R(500, 50), R(500, 50))
            })

            w.b(function (cx) {
                cx.w('ship', 'bul', function (bul, cx) {
                    this.kill()
                })
            })
            w.D(200, 200, 'b', 80).d(1).K('bad')
            w.D(200, 200, 'r', 150, 150).d(1).K('bad')

            w.cl('bul', 'bad', function (b) {
                if (this.B()) {
                    this.B().kill()
                }
                if (b.B()) {
                    b.B().kill()
                }
            })

        }
        b.shtEv = function (ms, k) {
            var b = this //= b.shootOnInt
            _.ev(N(ms / 1000, 0.4), function () {
                if (b.IsActive()) {
                    b.sht(k)
                }
            })
            return b
        }

        TRAP = function () {

            W(0).C('r')
            co = w.tCo()

            y = w.y()
            rot = 45

            bg = w.y('b', 500, 300, '-')

            bg.shtEv()
            bg.stat()

            T.t(function () {
                bg.rTow(y)
            })

            _.t(3, function () {
                co.B(
                    w.y('z', R(500, 50), R(300, 50), '-').lV(10, 20).lD(0)
                    //  w.D(400,300, 'z',10,10)
                )
            })
        }
        STAB = function () {
            W({g: 0})
            w.S(200, 200, 'b', 50, 260)
            w.S(140, 200, 'd', 140, 50)


            co = w.tCo();
            _.t(10, function () {
                co.B(
                    w.D(R(1000, 100), 300, 'x', 30).lV(10, 20).lD(0))
            })

            hits = 0

            y = w.y().K('ship').lD(5)

            bg = w.y('b', 500, 300, '-').d(3).lD(2).K('bg').aD(.2)

            bg.rotTowards = function (y) {
                var b = this, a
                a = -M.tD(M.atan((y.X() - b.X()) / (y.Y() - b.Y())))
                if (y.Y() > b.Y()) {
                    a += 180
                }
                b.rt(R(40, a - 20))
            }

            _.ev(.5, function () {
                bg.aV(0);
                bg.rotTowards(y)
            })

            bg.push(50, '+')

            T.t(function () {
                _.t(20, function () {
                    bg.I()
                })
            })


            w.b(function (cx) {
                var i
                if (cx.w('ship', 'bg')) {

                    i = cx.m().m_points[0].m()

                    _.in(.1,
                        (
                        M.lD(V(i.x, i.y), V(y.X(), y.Y())) >
                        M.lD(V(i.x, i.y), V(bg.X(), bg.Y()))
                        ) ?
                            function () {
                                hits++;
                                w.C('g');
                                bg.XY(300, 300);
                                y.XY(700, 400)
                            }
                            :
                            function () {
                                w.C('p');
                                bg.XY(700, 400);
                                y.XY(100)
                            })
                }
            })
            //w.show(function(){return 'hits: '+ hits})
        }
    }
    function badG() {

        w.fireBall = function (x, y, vX, vY) {
            var v = 8
            if (vX == 'l') {
                vX = v;
                vY = 0
            }
            if (vX == 'r') {
                vX = -v;
                vY = 0
            }
            if (vX == 'u') {
                vX = 0;
                vY = -v
            }
            if (vX == 'd') {
                vX = 0;
                vY = v
            }
            if (vX == 'ul') {
                vX = v;
                vY = -v
            }
            if (vX == 'ur') {
                vX = -v;
                vY = -v
            }
            if (vX == 'dl') {
                vX = v;
                vY = v
            }
            if (vX == 'dr') {
                vX = -v;
                vY = v
            }
            vX = N(vX) ? vX : 0
            vY = N(vY) ? vY : 0

            return this.D(x, y, 'r', 18)//.bS('sun',.2)
                .lV(vX, vY)
        }
        w.zilla = function (x, y) {
            var w = this

            var z = w.S(x, y, 80, 140)  //make sensor?

                .fR()
                .bS('guy', [.8, 1])
                .moveInCircle('-')
                .cl('bul',
                function (bul) {
                    bul.B().kill()
                    z.hits++
                })


            z.hits = 0


            z.fireBalls = function () {
                var x = this.X(),
                    y = this.Y()
                w.fireBall(x + 50, y - 80, 'ul')
                w.fireBall(x + 50, y + 80, 'dl')
                w.fireBall(x - 50, y - 80, 'ur')
                w.fireBall(x - 50, y + 80, 'dr')
                w.fireBall(x, y - 80, 'u')
                w.fireBall(x, y + 80, 'd')
                w.fireBall(x - 50, y, 'r')
                w.fireBall(x + 50, y, 'l')
            }


            z.fireBallsAtInt = function (ms) {
                var z = this
                setInterval(function () {
                    z.fireBalls()
                }, ms)
                return this
            }


            return z
        }
        w.goomba = function (x, y) {
            x = _.tN(x, 300)
            y = _.tN(y, 100)
            return w.D(x, y, 'w', 30, 30).bS('guy').K('goomba')
        }
        w.bobom = function (x, y) {
            var w = this,
                bobom = w.D(x, y, 'd', [
                    [40, 'body'],
                    [40, 5, 30, 0, 'bobomSens', '-']])

            w.b(function (cx) {
                cx.w('bobomSens', function () {
                    this.B().kill()
                })
            })

            body = bobom.rec(20, 20).d(1).r(1)

            sen = bobom.rec({s: 1})

            sen.cl('player', function () {
                w.B().kill()
            })

            return bobom
        }
        w.gG = function (x, y) {
            var w = this,

                gG, core, shell, z


            z = 40


            gG = w.D(N(x, w.hW), N(y, w.hH)).K('gG')

            core = gG.cir({c: 'o', C: 'z', l: 10, r: 20}).K('core')

            shell = gG.rec({c: 'g', C: 'g', l: 5, w: z, h: z, s: 1, al: .5})

            core.cl('bul', function (bulF) {
                gG.lV(0).aV(0);
                z = 40;
            })

            _.ev(2, function () {
                z += 4

                if (shell) {
                    shell.kill()
                }

                shell = gG.rec({c: 'g', C: 'g', l: 5, w: z, h: z, s: 1, al: .5})

                //shell=gG.rec('g',z,z,'-')//.bS( shell.img=w.s.rec('g',z,z) )
                //w.back(sh)

            })


            return gG

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
        b.moveInCircle = function (rad, speed) {
            $l('b.moveInCircle')

            var g = G(arguments), rad = N(g[0]) ? g[0] : 100,
                speed = N(g[1]) ? g[1] : 2,
                toRad = Math.toRadians, cos = Math.cos, sin = Math.sin,
                b = this,
                ang = 0,
                x = b.X(),
                y = b.Y(),
                bX,
                bY

            T.t(function () {
                ang += toRad(speed)

                bX = rad * cos(ang)
                bY = rad * sin(ang)

                if (g.p) {
                    bY *= 2
                }
                if (g.n) {
                    bX *= 2
                }


                b.XY(bX + x, bY + y)
            })

            return this
        }

        GOOMBA = function () {
            W()


// could i automatically have body listen to their sens?
            w.ball().r(.3)
            workingGoomba = p = w.p(900, 450).cn('jump')
            p.my('hat', function () {
                p.bS('guy')
            })
            p.my('right');
            p.my('left')
            $.space(function () {

                if (p.my.right) {
                    p.I(100, -400)
                }
                if (p.my.left) {
                    p.I(-100, -400)
                }

            })


        }
        GG = function () {
            W({g: 0}).Y()

            w.gG(100, 100);
            w.gG(200, 200);
            w.gG(300, 300)

        }
        GREEN = function () {
            W({w: '@', g: 0})
            y = w.y(400, 200).K('pop')
            w.gG(400, 400)
        }
        COINWARP = function () {
            W({g: 0, w: 0}).Y()
            y.warp()

            score = 0
            badScore = 0
            // p = w.ship().K('player pop').warp()
            //p= w.p(100,100, 'thrust').Y(200).horizCenter().aD( 10000 ).lD(0).K('pop').warp()


            gg = w.gG(300, 300).warp()

            _.ev(8, function () {
                w.coin().sen(1)
            })
            /*
             w.beg(function(cx){var fixt
             cx.with('coin','player', function(){this.B().kill()
             score++})
             cx.with('coin','greenGuy', function(){
             this.B().kill()
             badScore++
             })
             })
             */
            // w.coll('coin','player', function(){this.B().kill(); score++})
            // w.coll('coin','gg', function(){this.B().kill();badScore++})
            /*
             // w.class('coin')
             //   .with('player', function(c){c.setDestroy();score++})
             // .with('greenGuy', function(c){c.setDestroy();badScore++})
             w.class('coin').with({
             player: function(){score++; return true},
             greenGuy: function(){badScore++; return true}
             })

             */
            _.ev(3, function () {
                w.pen(score + ' / ' + badScore)
            })

        }
        SUNZOOM = SPACEGRAVMACH = function () {
            W({g: 0, w: 0})

            w.thrustPlayer = function (x, y) {
                var w = this, p
                p = w.p(x, y, 2.5, 'thrust').lD(.8).aD(10000)
                return p
            }
            w.stars(10)
            w.s.rXY(600, 300)
            w.s.XY(600, 300)
            p = w.p().cn('thrust')
            sun = w.sun()

            _.in(.3, function () {
                //sun.sp().twL([{r:360},10000])
            })
            //preload to the rescue ??
            w.dJ({a: p, b: sun, cl: 1}).fq(10).d(10).l(10)


            green(400, 100);
            green(400, 200);
            green(200, 100);
            green(200, 200)
            function green(x, y, fq) {
                w.dJ({
                    a: w.gG(x, y),
                    b: sun,
                    cl: 1
                })
                    .fq(N(fq, 1)).d(0).l(15)
            }

            b2d.scaleFunc = function (b1, b2, max) {
                max = N(max, 2)
                M.sqr = function (a) {
                    return a * a
                }
                var dst = 150 / M.sqrt(
                        M.sqr(b1.X() - b2.X()) +
                        M.sqr(b1.Y() - b2.Y())
                    )
                return dst > max ? max : dst
            }

            T.t(function () {
                w.s.sXY(
                    b2d.scaleFunc(sun, p, 2))
                p.centerScale(b2d.scaleFunc(sun, p, 2))

            })

        }//

        ZIL = function () {
            W({g: 0, w: 0})
            health = 100

            y = w.ship().warp().cl(function () {
                health -= 5
            })


            z = w.zilla(600, 300).fireBallsAtInt(4000)


            w.show(function () {
                return 'health: ' + health + ', hits: ' + z.hits
            })
        }


    }
}

