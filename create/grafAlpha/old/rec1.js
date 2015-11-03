b2d.p()
b2d.fD=function(){return new b2d.FixtureDef()}

//make polyShape (by box or arr) for a fD
b2d.pH=  b2d.polyH=function me(W,H,x,y,a){var g=G(arguments),

    p=new b2d.PolygonShape()

    if(g.N_){//| 50,200[[,200,60,45
        p.box(g.f,g.s,g.t,g[3],g[4])
    }
    else if(g.O_){//| [20,300],..
        $a(p,'arr', g)
        //-> g.a(p,'arr')
        // -> g.a(p.arr)
    }
    return p
}

b2d.oDef = function(o){o=o||{}
    o.x =  N(o.x,0)
    o.y =  N(o.y,0)
    o.a =  N(o.a,0)
    o.c = o.c || 'z'
    o.C = o.C || 'w'
    o.w =  N(o.w, 50)
    o.h =  N(o.h, 50)
    return o
}

//makes a fixtDef with a polyShape
b2d.rec= function (W, H, x, y, a, d) {
    //= b2d.polyFixt
    var g = G(arguments), r, f, o, v,
        p = new b2d.PolygonShape()


    if (g.OO_){
        v = _.m(g, function (v) {return V(v).div()})
        p.SetAsArray(v, v.length)
    }

    else {
        o = g.O ? g.f : {w: g.f, h: g.s, x: g.t, y: g[3], a: g[4], d: g[5]}
        b2d.oDef(o)//60?
        p.SetAsOrientedBox(o.w / 60, o.h / 60, V(o.x, o.y).div(), M.tR(o.a))
    }


    f = new b2d.Dynamics.b2FixtureDef()

    f.den(o.d || .5)
    if (g.n) {f.isSensor = true}
    f.shape = p

    return f

    /*

     //will set cols unless you pass in 0
     if(o.c==0){o.c=null}
     if(o.c==00){o.c=null;o.C=null}
     if(o.c=='*'){o.c=$r()}
     if(o.c=='**'){o.c=$r();o.C=$r()}

     o.c =o.c||'z'
     o.C =o.C||'w'
     o.l = _.tN(o.l,4)

     o.c1 = o.c1||'z'
     o.c2 = o.c2||'w'
     o.s1= _.tN(o.s1)
     o.s2= _.tN(o.s2,1)
     //
     o.x1 = _.tN(o.x1)
     o.y1 = _.tN(o.y1)
     o.x2 =_.tN(o.x2);
     o.y2 = N(o.y2)?o.y2:N(o.r)? o.r*2:100
     o.r1=_.tN(o.r1)
     o.r2=_.tN(o.r2,200)
     // o.i image
     //o.k kind
     // o.p  layer position


     //o.bm//o.bM
     //o.g gradient

     //o.m mass
     //o.t type
     // o.v = o.v || [] //verts
     //o.X
     //o.z clr
     */
}



b.rec = function (c, W, H, x, y, a) {var b = this, w = b.W(),
    g = G(arguments),

     fD, f, h, k, o, p

    if(g.A_){
        return b.rec.apply(b, g)}

    if(O(g.s)){
        g.e(function(g){b.rec(g)})
        return b
    }


    if (g.O_ ) {o=g.f}

    else {
        if (g.N_) {
            g.unshift(null)}

        o = {c:g.f,w:g.s}


        _.x(o, S(g[2])? {k: g[2]} :

                S(g[3]) ? {h: g[2], k: g[3]} :

                    S(g[4]) ? {h: g[2], x: g[3], k: g[4]} :
                        S(g[5]) ? {h: g[2], x: g[3], y: g[4], k: g[5]} :
                        {h: g[2], x: g[3], y: g[4], a: g[5], k:g[6]

                        })
    }

    b2d.oDef(o)



    fD = b2d.fD()

    fD.den(o.d || .5)


    p = new b2d.PolygonShape()


    p.SetAsOrientedBox(o.w / 60, o.h / 60, V(o.x, o.y).div(),
        M.tR(o.a))
    fD.shape = p

    if (o.s || g.n) {
        fD.isSensor = true;
        o.o = N(o.o, 0.8)
    }

    f = b.f(fD)



    f.K(o.k)


    if(o.c!=0){

        // f.g=w.g.h().rec(o)

        f.bS(
            w.g.rec(o) //<-this for bike (does rotation)
            // f.g= w.g.h().rec(o) //this for but: (does something important)
        )


        // f.bS(f.g)
    }


    return f
}




b._f= function(f,c){var b=this,g=G(arguments)
    if(g.u){return b.GetFixtureList()}
    f=b.CreateFixture(f)
    if(c){f.C(c)}
    return f}

b.ap=function(met,g){var b=this;
    return A(g)? b[met].apply(b,g): "'call()' coming soon"}

b.f=function(){var b=this,g=G(arguments), o,
    ag=g[0],
    l= g.L,
    FD=b2d.iFD
    if(g.u){return b._f()}
    if(g.S_){l--}
    if(g._S){l--}
    //

    if(g.A){g.e0(function(gg){b.ap('f', g.G(gg))})}//   [ [],[],fD,4,[] ]
    else if(g.SA){g.e1(function(f){//       'c',  [ [.,.],[.,.],fD ]
        if(FD(f)){b._f(f,g.f)} //err?
        else {
            if(!g.S_){f.unshift(g.f)}
            if(FD(f.s)){b._f(f.s,f.f)}
            else {b.ap('f', f)}
        }
    })}

    else if (FD(g.f)){return b._f(g[0])}//(fD)
    else if (g.S_ && FD(g.s)){ b._f(g[1], g[0]) }//('c', fD)

    else if(O(g.s)){
        o=g.S_?{c:g.f,v:g.r}:{v:g}//if (g.n) {o.s=1}
        b.pol(o)
        if(g.n){b.sen(1)}}//pol
    else if(l==1||l==3){
        o={c:g[0], r:g[1], x:g[2], y:g[3]}
        if(g.n){o.s=1}
        b.cir(o)}//cir
    else {b.ap('rec',g.g)}//rec

    return b
}




w.D=function(){var w=this, g=G(arguments),k,o,b

    if(S(_.l(g))){k=g.pop()}
    if(N(g[0])){
        o={b:V(g[0],g[1]),f:_.r(g,2),k:k}}
    else if(O(g[0])){
        o={b:V(g[0]),f:_.r(g),k:k}
    }

    o.b=b2d.D(o.b)

    b=w.CreateBody(o.b)

    if(g.n){o.f.push('-')}

    
    b.f.apply(b, o.f)

    b.K(o.k)

    return b
}







h.dr = function () {
    var h = this, gx = h.graphics, g = G(arguments), o
    o = N(g[2]) ? {x: g[0], y: g[1], w: g[2], h: g[3]} :
        N(g[0]) ? {w: g[0], h: g[1]} : O(g[0]) ? g[0] : {}

    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    o.w = N(o.w, 100)
    o.h = N(o.h, o.w)
    gx.dr(o.x, o.y, o.w, o.h)
    return h
}
h.rec = function (c, C, x, y, w, H, l) {var h = this, g = G(arguments), o
    o = g.O?g.f:
        S(g.s)? {c: g.f, C: g.s, x: g.t, y: g[3], w: g[4], h: g[5], l: g[6]} :
            g.S_? {c: g.f, x: g.s, y: g.t, w: g[3], h: g[4], l: g[5]} :
            {x: g.f, y: g.s, w: g.t, h: g[3], c: g[4], C: g[5]}
    h.c(o)
    if (o.i) {
        h.bf(o.i, function(){h.dr2(o)})
        return h}
    if (o.lf) {
        h.lf({
            c: o.c || 'z',
            C: o.C || 'w',
            s: 0,
            S: 1,
            x: o.x - o.w / 2,
            y: o.y - o.h / 2,
            X: o.x - o.w / 2,
            Y: o.y + o.h / 2
        })}
    h.mt([o.x - o.w / 2, o.y + o.h / 2], [o.x - o.w / 2, o.y - o.h / 2], [o.x + o.w / 2, o.y - o.h / 2], [o.x + o.w / 2, o.y + o.h / 2])
    return h
}
ct.rec=function(){var ct=this,g=G(arguments),o,ct2,h
    o=g.S_ ?{c:g.f,w:g.s,h:g.t,x:g[3],y:g[4],a:g[5]}:
        g.N_?{w:g.f,h:g.s,x:g.t,y:g[3],a:g[4]}:
            g.f
    o.x =  N(o.x,0)
    o.y =  N(o.y,0)
    o.a =  N(o.a,0)
    o.c = o.c || 'z'
    o.C = o.C || 'w'
    o.w =  N(o.w, 50)
    o.h =  N(o.h, 50)
    ct2=ct.ct()
    h=ct2.h().XY(o.x,o.y).rot(o.a)
    h.c(o.c,o.C,o.l)
    if (o.rg) {h.rg(o.c, o.C)}
    if (o.lg) {h.lg(o.c, o.C)}
    if(N(o.o)){h.op(o.o)};if(N(o.al)){h.al(o.o)}

    if (o.bm) {h.bm('me', function(){h.dr2(o.w, o.h)})}
    else {h.dr2(o.w, o.h)}

    return ct2
}

DR2=function(){W()

    h=s.h(480,270).drag()

    h.C('z',2).lf({x:-100, c1:'r',c2:'y'})
        .dr2({w:300,h:100,x:0,y:-100},
        {w:100, h:300})

    s.h(180,270).drag()
        .lf({c1:'r', c2:'y', x1:-100}).dr2(
        {w:300,h:100,x:0,y:-100},
        {w:100, h:300})
}

REC=function(){W()

    ct = s.ct(600, 300)
    ct.rec({ w:400,h:400, c:'r',C:'o',l:10,a:-5 })
    ct.rec({ w:100,h:200, c:'b',C:'w',l:20,a:20, rg:1 })
    h = ct.rec({w: 100, h:200,
        a:20, c: 'b', C:'w', l: 20, bf:1}).X(100)
    $.in(3, function(){h.X(0)}) //notice how gradient is seen behind the bm!!!

    ct1= s.ct(1000,300).drag()

    ct1.rec({w:400, h:200,
        c:'r', C:'o',
        l:10, a:-5})

    ct1.rec({w:200, h:400,
        c:'r', C:'o',
        l:10,
        a:5})

}
