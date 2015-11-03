b2d.p()




ct.d= ct.dot=function(c, x, y){var ct=this, o, dot, tw, g=G(arguments)
    if(b2d.isGPoly(g.f)){
        _.e(g.f.vs(),
            function(v){ct.dot(V(v))})
        return this
    }

    if(g.A){
        _.e(c,function(G){
            if(A(G)){
                ct.dot.apply(ct, G)}
            else {ct.dot(G)} })
        return this
    }

    o=g.O? g.f : g.S_? {c:g.f, x:g.s, y: g.t}:{x:g.f,y:g.s}
    o.x= N(o.x, ct.W()/2)
    o.y= N(o.y, ct.H()/2)
    dot= this.h(o.x, o.y)
        .cir(8,  o.c, 'p'||o.c, 2)
        .al(.7).drag()
    tw=dot.twL( [{sxy:1.3},100], [{sxy:1},100]).$()
    dot.$$(function(){ tw.$() })

    return dot.K('dev dot')

}




//w.i.dot( cx.pt().x, ct.pt().y )

//fail
//  w.i.dot('y', v)  //  w.i.dot(  v)  //  w.dot(  v)

//works:  w.dot('r', v)

w.d= w.dot=function(){var w=this,g=G(arguments), o

    if(g.S_){
        o =  N(g.s)?
        {c: g.f, x: g.s, y:g[2]} :
        {c: g.f, x:V(g.s).x, y:V(g[1]).y}
    }

    else {o= N(g.s)?  {x:g.f, y:g.s} : {x:V(g.f).x,y:V(g.s).y}}


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
b.dot= function(x,y){//b.dot() // dots the center of mass, not xy ??!!!

    var b=this,  w= b.W(), s= b.stg(),  g= G(arguments)


    if(N(x)){
        w.dot(b.wP(x,y))
        if(g.p){
            T.t(function(){
                w.dot(b.wP(x,y))
            })}
        return b
    }

    c = oO('c', g[0]||'y')
    if(g.p){ w.dot(c, b.cen()) }
    else { w.dot(c, b.X(),b.Y()) }
    return b
}
f.dot=function(c){var f=this, w=f.B().W(),v

    v=f.cen()

    if(S(c)){w.dot(c,v)}
    else {w.dot(v)}

    return f
}







f.$=function(fn){var f=this, b=f.B(), w=b.W()

    w.$(function(o){
        w.q(o.x, o.y, function(fx){
            if(f==fx){  _.b(fn,f)(o) }
        })
    })
    return f
}
b.$=function(fn){var b=this, w=b.W()

    w.$(function(o){

        w.q(o.x, o.y, function(f){
            if(f.of(b)){ _.b(fn,f)(o) }
        })
    })

    return b

}
b.$$=function(fn){var b=this, w=b.W()
    w.$$(function(o){w.q(o.x, o.y, function(f){

            if(f.of(b)){ _.b(fn, f)(o)}
        })
    })
    return b
}
$.mousedown=function(fn){$('body').on('mousedown', fn); return $}
$.oMD=function(fn){return $.mousedown(function(e){fn(e.clientX, e.clientY, e)})}
w.md= function(fn){var w=this
    w.i.c.mousedown(function(e){
        var o={x:w.mx, y:w.my, X: e.clientX, Y: e.clientY, e:e}
        w.q(w.mx, w.my, function(f){if(f){ o.f=f;  o.b=f.B() }})
        fn(o)})
    return w
}
$.mouseup=function(fn){$('body').on('mouseup', fn); return $}
$.oMU = function (fn) {return $.mouseup(function (e) { fn(e.clientX, e.clientY, e) })}
w.mu= function(fn){var w=this
    w.UI().mouseup(function(e){fn({x:w.mx, y:w.my, e:e})})
    return w}
$.mousemove=function(fn){$('body').on('mousemove', fn); return $}
$.oMM=function(fn){return $.mousemove(function(e){fn(e.clientX, e.clientY, e)})}
w.mm= function(fn){var w=this, g=G(arguments)
    $.mousemove(function(e){
        var o={x:w.mx, y:w.my, X:e.clientX, Y:e.clientY, e:e}
        fn(o)
    })
    return w
}
w.$$=function(fn){var w=this
    w.UI().dblclick(function(e){fn({x:w.mx, y:w.my, e:e})})
    return w}


b2d.AB=function(x1,y1,x2,y2){var g=G(arguments)

    var g=G(arguments), ab


    ab = new b2d.Collision.b2AABB

    if(g.p){

        ab.lowerBound.Set(x1, y1)
        ab.upperBound.Set(x2, y2)

    }
    else {


        if(U(g[2])){
            ab.lowerBound.Set(    g[0]/30-0.01,  g[1]/30-0.01   )
            ab.upperBound.Set(    g[0]/30+0.01,  g[1]/30+0.01     )
        }

        else {
            ab.lowerBound.Set(g[0]/30, g[1]/30)
            ab.upperBound.Set(g[2]/30, g[3]/30)
        }
    }


    return ab
}
b2d.mJ=function(body, tX,tY){
    if(O(tX)){tY=tX.y;tX=tX.x}
    var md = new b2d.Joints.b2MouseJointDef
    md.bodyA = w.GetGroundBody()
    md.bodyB = body
    md.target = V(tX, tY)
    md.collideConnected = true
    md.maxForce = 1000 * body.GetMass()
    md.dampingRatio = 0
    return md}
b.hit= b.h=function (x, y, dot) {var b = this, w = b.W(), g=G(arguments)

    hit

    if (g.p) {w.dot(x, y)}

    b.fs(function (f) {

        if (f.hit(x, y)) { hit = true }

    })

    return hit
}
f.tP=  f.hit=f.testPoint=f.test=function(){var f=this,b=f.B(),w=b.W(),g=G(arguments),  v

    v = V(g.f, g.s)

    if(g.p){ w.dot(v) }

    return f.H().TestPoint(
        b.tf(),
        v.div()
    )

     //is a point within the fixture // very accurate

}
mJ.tg=function(x,y){
    if (U(x)) {return this.GetTarget().m()}
    this.SetTarget(V(x, y).div())
    return this
}
     // world mouse down vs canvas mouse down!!! // canvas mouse down just uses $.oMD
w.Q=function(){var w = this, g=G(arguments),o
    o = g.O? g.f:
        g.S_ && N(g.s)? {k: g.f, x: g.s, y: g.t, fn:g[3]} :
            g.S_ && O(g.s)? {k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
                g.F_? _.x({fn:g.f, n:0}, O(g.s)? {x1:g.s.x, y1:g.s.y} : {x1:g.s, y1: g.t, x2:g[3], y2:g[4]}) :
                    g.O_? {x1: g.f.x,  y1: g.f.y, fn:g.s} :
                    {x1:g.f, x2:g.s,fn:g.t}

    o.n = 0

    w.QueryAABB(
        function(f){var res; o.n++
            res = o.fn(f, f.B(), o.n)
            if(res!==false){ return true} },
        b2d.AB( o.x1, o.y1, o.x2, o.y2 )
    )
    return w
}
//but it makes a rectangle not square
w.rad=function(x,y,r,fn){return this.Q({   x1: x-r,  y1:y-r,     x2: x+r,  y2:y+r,    fn: fn    })}
w.q=function(){var w=this,g=G(arguments),o,fx

    o= g.S_ && N(g.s)? {k: g.f, x: g.s, y: g.t, fn:g[3]} :
            g.S_ && O(g.s)? {k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
                g.N_ ? {x: g.f, y: g.s, fn: g.t, k:g[3]} :
                    g.A_? {x: g.f[0], y:g.f[1], fn: g.s, k: g.t} :
                    {x: g.f.x, y: g.f.y, fn: g.s, k: g.t}

    w.QueryAABB(
        function(f){
            if (f && f.of(o.k) && f.tP(o.x, o.y) ){ fx = f; return }
            return true },
        b2d.AB(o.x, o.y)
    )

    if(fx){ if(F(o.fn)){ _.b(o.fn,fx)(fx); return w } return fx }

}
w.tE=function(fn){var w=this
    T.t(function(){  w.e(fn)  })
    return this}
w.e= w.each= function(){var w=this, g=G(arguments), o,
    bs=w.GetBodyList(),
    k,
    b,arr

    o = g.S_? {k:g.f, fn:g.s}: {fn:g.f}

    if(g.u){ alert('w.e') }


    arr=[]

    while(bs){b=bs;  bs=bs.N()
        if(b.of(o.k)){  arr.push(b) }
    }

    _.e(arr, function(b){  o.fn(b)  })

    return w
}
w.$=function(fn){var w=this
    w.UI().click(function(e){fn({x:w.mx, y:w.my, e:e})})
    return w
}
w.e$=function( ){var g=G(arguments),o
    o=  F(g.s) ? {k: g.f, fn: g.s} : {fn: g.f}
    this.e(function(b){ if(b.of(o.k)){b.$(o.fn)} })
    return this
}
fD.K =   function (k) {var fD=this
    if (U(clas)) {return fD.getClass()}
    fD.classes = fD.classes || []
    fD.classes.push(clas)
    return fD
}
fD.getClasses = fD.getClass = function () {var g = G(arguments), fD=this, classes
    fD._K = fD._K|| []
    ks = fD.classes.join(' ')
    if (g.p) {ks += ' : ' + fD.body().getClasses()}
    return ks}
_.eW=function(str, fn){

    var _gf = str.trim().split(' ')


    _.e(_gf,

    function(str){

        str = str.trim()

       // $l('str: '+ str)
        if(str) {
            fn( str.trim() )
        }
    }

    )

}
b.K= function(){var b=this,g=G(arguments);
    this._K = this._K || []
    if(g.u){return this._K.join(' ')}
    if(g.O){this.K(g.f.k); return this}
    _.eW(g.f, function(k){ if(!b.of(k)){b._K.push(k)}})
    return this
}
f.K =  function(){var f=this, g=G(arguments);
    this._K=this._K||[]
    if(g.u){return (this._K).join(' ')}
    if(g.O){this.K(g.f.k); return this}
    _.eW(g.f, function(k){ if( !f.of(k)){ f._K.push(k)} })
    return this
}
_.ct = function(arr, item){

    arr = arr || []

    if(S(item)){item=item.trim()}

    return _.contains(arr, item)

}
b.of=function(k){

    if( b2d.iF(k) ){ k = k.B() }

    return !k ||  _.ct(this._K, k) || this == k

}
b.is=function(k){
    return k && this.of(k)
}
f.of=function(k){

    if(!this){return false}


    if(!k){return true}

    return this==k ||
        (S(k) && _.contains(this._K||[], k.trim()))
        ||
        (this.B() && this.B().of(k))


}
f.is=function(k){return k && this.of(k)}
//if(g.A){_.e(g.f, function(k){f.K(k)}); return f}
w.mJ = function(){var w=this, g=G(arguments), o, j,

    mJD = new b2d.Joints.b2MouseJointDef

    dR=0
    mF=50000000

    o={

        a:w.GetGroundBody(),

        b:g.f, x:g.s, y:g.t,

        dR: N(g[3], dR),

        mF: N(g[4], mF),

        cl: g.N? true : false

    }


    mJD.bodyA = o.a
    mJD.bodyB = o.b

    mJD.target = V(o.x, o.y,'-')
    mJD.dampingRatio = o.dR
    mJD.maxForce = o.mF
    mJD.collideConnected = o.cl

    return w.J(mJD)
}
w.mdq = function(fn){var w=this

    w.md(function(e){ w.q(e.x,e.y,function(f){ fn(f,e) })})

    return this
}
ray=function(){
    IMP=function(){W({g:0, w:0}).Y()

        // y.rt(90).XY(200,240)

        w.D(200,235,'b',10).lV(20,0).d(10)

        w.D(900, 200,'r', 100,100).rt(45)



        r =   w.D(1100,500,'r', [ [80], [20,300] ]).d(.1)

        r.$(function(){
            this.B().I(100,-2000)
        })

        f= r.f()
        w.i.dot(856, 240)

        /*
         s = b2d.Seg(0,0,1200, 600)
         s1 = b2d.Seg(1200,0, 0, 600)
         lArr =  'the shape world transform'
         nl = '2Vec2 — returns the hit fraction.'
         // You can use this to compute the contact point
         // p = (1 - lambda) segment.p1 + lambda segment.p2.
         sg = ''//segment:b2Segment — returns the normal at the contact point. If there is no intersection, the normal is not set.
         maxLam = 1000000//:Number — defines the begin and end point of the ray cast.
         s.TestSegment(lArr, nl, s1, maxLam )
         */



        ip = b2d.rCIp( 0,0,1200,600 )


        op = b2d.rCOp(1,2)

        res = f.rC( op,ip     )



    }
    w.ray=function(){var w=this, g=G(arguments), o, arr

        o = g.S_ ? {k:g.f, x:g.s, y:g.t, x1:g[3], y1:g[4], fn:g[5]}:{x:g.f, y:g.s, x1:g.t, y1:g[3], fn:g[4]}

        arr=[]; w.RayCast(function(f){if(f.of(o.k)){arr.push(f)}},V(o.x,o.y,'-'),V(o.x1,o.y1,'-'))

        if(!o.fn){return arr}

        if (g.p){o.fn( _.f(arr)) }

        else if (g.n){o.fn( _.l(arr) )}

        else {_.e(arr, function(f){ o.fn(f) })}

        return w  //2do: use 'G' to scrape off 'k' manually (g = w.G('k', arguments)
    }
    RAY=function(){W().C('z')
        w.S(200,200, 'f', 100);
        w.S(500,500, 'l', 160, 60)
        rs =  w.ray(0, 0, 800, 800 )
        $.in(  function(){

            w.ray(0, 0, 500, 500, function(f){   f.C('g')  })
            w.ray(0,0,500,500,    function(f){f.B().bS('me')}, '-')
            w.ray(0, 0, 500, 500, function(f){f.B().bS('sun')}, '+')

        })
    }
//RayCast(fn, startV, endV)  -> undefined
//Ray-cast the world for all fixtures in the path of the ray.
//Your callback Controls whether you get the closest point, any point, or n-points
//The ray-cast ignores shapes that contain the starting point
//fn -> function Callback(f, initInterNormV, normAtInterFracPtV, fracLenAlongRayInterN)
//Callback should return the new length of the ray as a fraction of the original length.
// By returning 0, you immediately terminate.
// By returning 1, you continue wiht the original ray.
// By returning the current fraction, you proceed to find the closest point.
//RayCastAll(v1, v2) -> v
//RayCastOne(v1, v2) -> f
// w.RayCast(b2RayCastOutput* output,  const b2RayCastInput& input)
//raycast input
//   The ray extends from p1 to p1 + maxFraction * (p2 - p1).
//    b2RayCastInput= {V1, V2, maxFraction}
// The points V1 and V2 are used to define a direction for the ray,
//  and the maxFraction specifies how far along the ray should be checked
// for an intersection.
// The following image may make this clearer
// . A maxFraction of 1 simply means the segment from p1 to p2, which in this case would not intersect the shape, but a maxFraction of 2 would. Raycasting And here is what a b2RayCastOutput contains:
// Ray-cast output data. The ray hits at p1 + fraction * (p2 - p1), where p1 and p2
// come from b2RayCastInput.
// b2RayCastOutput={normal,  fraction }
    /*
     If the ray does intersect the shape,
     b2Fixture::RayCast will return true and we can look in the output
     struct to find the actual fraction of the intersect point,
     and the normal of the fixture 'surface' at that point: Raycasting

     Now we need a ray to cast against these shapes. Let's make a ray starting from the center of the screen and going outward, and rotating slowly around. The only state we need to keep for this is the current angle, so instead of making a special class for it, we'll just keep a variable at global scope.
     */

    w.rC1=function(){var w=this
        w.RayCastOne
    }
    w.rCA=function(){var w=this
        w.RayCastAll
    }
    w.rC=function(fn,v1,v2){var w=this

        return w.RayCast( fn,  V(v1).div(), V(v2).div() )
    }
    w._rC =  function(v1,v2,fn){var w=this

        return w.RayCast( fn,  V(v1).div(), V(v2).div() )
    }
    RC=function(){W(); var p1,p2, d,l
        w.me(400,100); w.S(200, 200,'r', 400,20)
        w.$(function(v){
            if(!p1){p1=v; return} if(!p2){p2=v} else {p1=p2;p2=v}

            w.i.e(function(c){
                if( c.of('dot') || c.of('line') ){c.rm()}
               // if( c.K() == 'dot' || c.K()=='line' ){c.rm()}
            })
            w.d('b', p1); w.d('r', p2); w.l( p1.x , p1.y , p2.x,  p2.y).K('line')
            w.rC(function(f){  f.B().dot()  }, p1, p2)
        })
    }
    f.AB = function(){

        var ab = this.GetAABB()


        return {
            l: ab.lowerBound.m(),
            u: ab.upperBound.m()
        }

    }
    f.rC=function(){
        var inp, res

        i = inp = new b2d.Collision.b2RayCastInput( V(0,0,'-'),  V(430,450,'-') )


        res = this.RayCast( inp )

        return res
    }
    b2d.Seg=function(x,y,x1, y1){
        seg = new b2d.Collision.b2Segment( V(x,y ), V(x1,y1 )  )
        return seg
    }
    b2d.rCIp = function(x,y,x1,y1,maxFrac){
        maxFrac=N(maxFrac,1)
        return new b2d.Collision.b2RayCastInput(V(x,y,'-'), V(x1,y1,'-'), maxFrac)

    }
    b2d.rCOp = function(nX, nY, maxFrac){

        maxFrac = N(maxFrac,1)


        op =  new b2d.Collision.b2RayCastOutput(
            maxFrac, V(nX, nY)
        )

        op.maxFraction= 1

        return op

    }
};ray()


QUERY=function(){W().Y()


    w.S(200,300,'b',100).$(function(){this.C('***')})
    w.S(200,500, 'g', 100).K('g')
        .cir({x:100,  r:80, c:'r'})
        .$(function(){this.C('w')})

    w.e('g', function(b){b.$$(function(){
        this.B().C('z')
        this.C('w')})
    })

    w.e$(function(o){this.C('y')
        $l('mass: '+this.B().mass().toFixed(3))})

    w.$(function(o){w.ball({x:o.x, y:o.y, r:8})})
    w.$$(function(o){w.S(o.x, o.y, 'x',[[20,10  ]])})
    w.S(600,400,'b',100,300);w.dot(600,300)
    $.in(function(){
        w.q(600,300,function(f){
        f.C('r')})})

    w.D(1100,500,'o',80).d(.1).$(function(){
        this.B().I(100,-2000)
    })


    w.S(800,400,[['b', 100],['o',200,100]]).f().$(
        function(){ this.kill()  }
    )

}
CHEM = function(){W({ w: 0//, g:50
})


    w.rR(  0, 3 )
    w.rR(  100,  3 )
    w.rR(  100,  3 )
    w.rR(  200,  3 )
    w.rR(  300,  3 )
    w.rR(  400,  3 )


    w.Q(function(f){ f.B().kill() }, 550,250,650,350 )

    w.Q(function(f){ f.B().kill() }, 350,  50,    450, 150 )

    w.Q(function(f){ f.B().kill() }, 850,  50, 950, 150 )


    y = w.y(600,300).K('y')

    $.ev(1, function(){

        w.cir(R(20,400), 80,12,'r').K('r')
        w.rec(R(20,900), 100, 24,24,'b').K('b')
    })




    w.cl('bul', function(f){var b= f.B()
        this.B().kill()
        if(b!=y){b.kill()}})


    w.cl('r','b', function(){
        y.stat()
        w.e(function(b){if(b!=y){b.kill()}})
        alert('you win!')
    })



    y.cl('r', lose)
    y.cl('b', lose)
    function lose() {
        //w.pen('you lose')
        y.stat()
        w.e(function (b) {if (b != y){b.kill()}})
        $.in(self)
    }


}
STACK=function(){W({m:'ball',w:0})
    w.S(500,600,'y',1000, 20)
    b =  w.D(500,200, 'o', 40).K('ball')
    w.boxesStat([350, 260, 880, 30])
    w.D(310,120,'t',60,60)
    w.D(320,120,'t',60,60)
    w.D(340,120,'t',60,60)
    w.D(350,120,'t',60,60)
    w.D(370,120,'t',60,60)
    w.D(380,120,'t',60,60)
    w.D(550,120,'t',60,60)
    w.D(570,120,'t',60,60)
    w.D(580,120,'t',60,60)
    w.S( 1000,400,'x',200,200)
    w.S( 1200,200,'x',200,200)
}
MJ = function (){W([1200, 600, 2400, 600], {g: 10, m: 'm'  }).Y('+')

    w.D(100, 200, 'y', 150, 100).K('imp')
    w.D(500, 400, 'y', 50, 100).K('imp')
    w.D(300, 400, 'r', 50, 50);
    w.D(800, 400, 'r', 50, 50);
    w.D(1200, 400, 'r', 50, 50);
    w.D(1600, 400, 'b', 100, 100).K('m')

    w.e$('imp', function(){this.B().I(0,-50)})  // w.e('imp', function(b){b.$(function(){ this.B().I(0,-50) }) })
}
later=function(){
    $.touchstart=function(func){

        $('body').on('touchstart', func)
        return this}
    $.touchend=function(func){

        $('body').on('touchend', func)
        return this}


    /*
     return U(a)? true
     : S(a)? f.ofClass(a)
     : (f==a || (g.N? b==a: false) )

     }*/


    f.hasAllClasses = function(clas){
        if (U(clas) || clas == '') {
            return false
        }

        var body = this, anyYes = null, anyNo = null

        _.each(arguments, function (clas) {


            if (body.hasClass(clas)) {
                anyYes = true
            }

            else if (!body.hasClass(clas)) {
                anyNo = true
            }


        })

        return (anyYes && !anyNo)


    }
    f.classCount = function () {
        if (!A(this.classes)) {
            return 0
        }
        return this.classes.length

    }
    f.removeClass=function(clas){
        var ix
        this.classes = this.classes || []
        if (S(clas)) {

            if (this.hasClass(clas)) {

                ix = this.classes.indexOf(clas)

                this.classes[ix] = null

                this.classes = _.compact(this.classes)


            }


        }
        return this
    }
    f.near= function (what) {
        var body = this.GetBody()
        //return (this.K()==what) || (body.K()==what)
        // if has sibling fixture that matches, return IT!
        return false

    }
    f.D = f.data = function (data) {
        if (U(data)) {
            return this.GetUserData()
        }
        this.SetUserData(data);
        return this
    }

    /*
     b.D=b.data=function(d){var b=this
     if(U(d)){return b.GetUserData()}
     b.SetUserData(d); return b}
     b.classCount=function(){var b=this
     if(!A(b.classes)){return 0}
     return b.classes.length
     }


     b.toggleClass=function(k){var b=this
     if(U(k)||k==''){return false}
     if(b.hasClass(k)){b.removeClass(k)}
     else {b.addClass(k)}
     return b}


     b.removeClass=function(k){var b=this, ix; b.classes=b.classes||[]
     if(S(k) && b.hasClass(k)){
     ix = b.classes.indexOf(k)
     b.classes[ix] = null
     b.classes = _.compact(b.classes)}
     return b}
     b.not = b.notAny = function (k) {
     //this is an AND: ALL MUST BE FALSE
     var b=this, not = true
     _.e(k, function(k){if(b.is(k)){not=false}})
     return not
     }


     b.contains=function(k){var b=this
     var fs=b.fixts(), contains=false
     _.e(fs,function(f){
     if(f.hasClass(k)){contains=true}})
     return contains
     }


     b.hasAllClasses=function(k){
     if(U(k)||k==''){return false}
     var b=this, anyYes = null, anyNo = null
     _.e(arguments, function(k){
     if(b.hasClass(k)){anyYes=true}
     else if(!b.hasClass(k)){anyNo=true}})
     return (anyYes && !anyNo)
     }
     */
    f.toggleClass=function(clas){
        if (U(clas) || clas == '') {
            return false
        }

        if (this.hasClass(clas)) {
            this.removeClass(clas)
        } else {
            this.addClass(clas)
        }

        return this
    }


    TAG=function(){W({g:0})
        w.pop('i like how the ball bounces')

        w.show(function(){ return y.K()})

        y = w.ship(100,100)

        _.t(10,function(){

            w.D(600,300,'b',40).r(.8).lD(.1).K('ball')
        })

        w.with('ball', function(f2){var vel  //$l('oth: ' + other.K() + ' - ' + other.B().K())
            var f=this

            if(f2.of('ship')){
                w.e(function(b){
                    if(b.isStat() &&  b.of('ball') ){
                        b.dyn(true)
                        b.C('b')}
                })
            }

            if(f2.of('bul')){

                f.C('r'); f.B().stat()

            }})

        //ship, 10 balls,
    }

    /*
     _.ct= function(arr, str){var g=G(arguments)
     if(!arr||!str){return}
     if(S(str) && !g.n){str=str.trim()}
     return _.contains(_.tA(arr), str)}
     _.eS=function(str,fn){
     _.e(_.tA(str),function(str){
     if(str=S(str)&&str.trim()){fn(str)}
     })}

     _.e=function(arr,fn){_.each(_.tA(arr),fn)}

     _.tA=function(arr){
     return S(arr)? arr.trim().split(' '):
     O(arr)? _.toArray(arr):
     [arr]
     }



     _.m=function(arr,fn){return _.map(_.tA(arr),fn)}



     _.iU=function(s){if(S(s)){return  s$(s).isUpper()}}

     b2d.k=function(fb,k){fb.ks= fb.ks||[]
     if(U(k)){return fb.ks.join(' ')+'|'+  (b2d.iF(fb)?fb.B().K():'')}
     if(O(k) && !A(k)){fb.K(k.k);return fb}
     _.eS(k, function(k){if(!fb.of(k)){fb.ks.push(k)}})
     return fb}


     b2d.of=function(fb,k){var of;
     if(U(k)){return 1}

     _.e(k, function(k){
     if(b2d.iF(fb)){
     of=fb.B().of(k)}
     if(!k||fb==k||_.ct(fb.ks, k)){of=1}
     })

     return of

     }



     f.K =function(k){return b2d.k(this,k)}

     b.K =function(k){return b2d.k(this, k)}

     f.of=function(k){return b2d.of(this,k)}
     b.of=function(k){return b2d.of(this, k)}

     */
    SLING=function(){W(50)
        tf = null
        b = w.D(100, 100, 'b', 100, 200 )
        p = w.S(200, 200,'s', 100, 150 ).rot(20)
        p.rec('o', 50, 50, 50, 50, 20)
        f = p.f()
        h = f.H()


        hit = f.tP( p.transform(), V(200, 200)  ) // true

        hit2 = f.hit(200, 200, true)
        startpoint={}
        slingshot = $h().a2( s )

        onMouseDown=function(e){
            if(ball.hitTestPoint(e.x, e.y)){
                mouseJoint = w.J(
                    b2d.createMouseJointDef(
                        w.ground, //?
                        ball.body,
                        e.x, e.y, 100000))
                startpoint.x = e.x
                startpoint.y = e.y
            }
        }

        onMouseMove=function(event){
            if(mouseJoint !=null){
                mouseJoint.setTarget(event.x, event.y)
                slingshot.clear()
                slingshot.setLineStyle(5, 0xff0000, 1)
                slingshot.beginPath()
                slingshot.mt(self.startpoint.x, self.startpoint.y)
                slingshot.lt(event.x, event.y)
                slingshot.ep()
            }
        }
        onMouseUp=function(event){
            if (mouseJoint != null){
                w.dJ( mouseJoint)
                mouseJoint = null
                slingshot.clear()
                strength = 1
                xVect = ( startpoint.x-event.x)*strength
                yVect = ( startpoint.y-event.y)*strength
                ball.body.applyLinearImpulse(  xVect,   yVect, ball.getX(), ball.getY())
            }}

    }

}
fD.D = fD.data = function (data) {
    if (U(data)) {return this.userData}
    this.userData = data;
    return this
}
old=function(){

    jointDef=function() {
        jd = b2d.Joints.b2MouseJointDef.prototype
        jd.sT = function (a, b) {
            var jd = this//=j.tS=    j.tg=j.tgS=j.ts=
            j.target.Set(a, b)
            return jd
        }
        jd.cC = jd.clC = jd.clCn = jd.cc = function (a) {
            var jd = this
            j.collideConnected = a ? true : false
            return jd
        }
        jd.mF = jd.mf = function (a) {
            var jd = this
            j.maxForce = a;
            return jd
        }
        jd.A = function (a) {
            var jd = this
            j.bodyA = a
            return jd
        }
        jd.B = function (b) {
            var jd = this
            jd.bodyB = b
            return jd
        }
    }; jointDef()
    w.mJ=function(o){var w=this
        if(o.m==0){return w}

        o=o||{}

        $.M()
        cjs.tick(function(){if(w.mj){w.mj.tg(_) }})
        $.oMU(function(){ w.MJ() })
        $.oMD(function(x,y){w.XY(x,y,
            function(f){if(f.ofClass(o.m)){w.mj = w.mJ(f.body(), _ )}
            })})

        return w}


    w.eB=w.each=w.eachBody=function(l,uD){var w=this,
        bs = w.GetBodyList(),
        k,
        b

        //can pass a cb to be run on EACH body
        //can also pass a uD to restrict cb to
        //run only on bodies with that uD

        if(S(l)){k=l; l=uD} else {k=uD}

        while(bs){
            b  = bs
            bs = bs.next()
            if(b.has(k)){l(b)}
        }

        return w}
    w.$$x=function(fn){var w=this
        w.UI().dblclick(function(e){

            fn(e.pageX, e.pageY)

        })
        return w
    }



    w.mouseJAt = function (p, k) {
        var w = this, mj
        if (N(p)) {  p = V(p, k)  }
        w.XY(p.x, p.y, function (f) {  mj = f.B().mouseJoint(p) })//, k
        return mj}


}
