b2d.p(); b2d.mini()
b.cx=function(fn){var b=this,c,next, n,ent// uses contact list //uses the OTHER way to check cxs !!!!!!
    if(U(fn)){return b.GetContactList()}
    if(!(c=b.cx())){$l('!');return}
    n=0
    c=c.contact
    while(cx){next = cx.GetNext()
        //////////////
        fn = _.b(fn,b)
        ent = b.of(  cx.a()  )?  cx.B():  cx.A()
        fn( ent, cx, n++ )
        /////////////
        cx = next}
}
function isBel(p,y){return p.Y()> pf.Y()-20}
b.sr=    b.sen=function(){var b=this,f= b.f(), g=G(arguments)
    if(g.d){return b.sen(!b.sen())}//b.sen('/')->toggle sen
    if(U(g[0])){return f.m_isSensor}
    f.m_isSensor= g[0]?true:false
    return b
}
//direction of collision normal:
//b2d.wM=  b2d.man= b2d.manifold= b2d.worldManifold= function(){return new b2d.Collision.b2WorldManifold}
//By convention in Box2d, the collision normal
// (for both the world manifold and the contact manifold) points from A to B -
//gets the linVel at time of collision!
// ALL 4 cx handlers
// give you a b2Contact pointer,
// so we have access to the same points and normal - see: begin
// PreSolve
// gives us a chance to change the characteristics of the contact
// before the collision response is calculated,
// or even to cancel the response altogether,
//  Here are the alterations you can make to the contact in PreSolve:
//  c.SetFriction( friction)  // persists for duration of contact
//  c.SetRestitution(  restitution)   //persists for duration of contact
//  c.SetEnabled( false )//SetEnabled(bool flag); //non-persistent - need to set every time step
// will disable the contact,
// meaning that the collision response that normally would have been applied will be skipped.
// You can use this to temporarily allow objects to pass through each other
// . A classic example of this is the one-way wall or platform,
// where the player is able to pass through an otherwise solid object,
// depending on various criteria that can only be checked at runtime,
// like the position of the player and which direction direction they are heading, etc.
// It's important to note that the contact will revert back to being enabled in the next time step,
// so if you want to disable contacts like this you'll need to call SetEnable(false) every time step.
//PostSolve
//with post, u get a second pam, which tells impulses(both norm and tang)
// we can find out what the collision response was.
w.collFill=function(){var w=this

    //l.P=  l.post=  function (fn) {this.PostSolve = fn; return this}
//l.b=  l.beg=  function (fn) {this.BeginContact = fn; return this}
//l.e=  l.end= function (fn) {this.EndContact = fn; return this}
//l.p=  l.pre=  function (fn) {this.PreSolve=fn;return this}
 b2d.L= b2d.listener = b2d.contactListener = function () {return new b2d.Dynamics.b2ContactListener}
//w.listen = w.setContactListener = w.sCL = w.SetContactListener

    w.bH=  w.beginHandlers = w.beginHandlers ||[]
    w.pH=  w.preHandlers = w.preHandlers ||[]
    w.PH=  w.postHandlers = w.postHandlers ||[]
    w.eH=  w.endHandlers = w.endHandlers ||[]
    w.ln= w.ln || new b2d.Dynamics.b2ContactListener
    w.ln.BeginContact = function(cx){_.e(w.bH, function(fn){  $.do(function(){fn(cx)})  })}
    w.ln.EndContact = function(cx){_.e(w.eH, function(fn){   $.in(0, function(){ fn( cx ) })   })}
    w.ln.PreSolve = function(cx){_.e(w.pH, function(fn){$.do(function(){fn(cx)})})}
    w.ln.PostSolve = function(cx, pam2){_.e(w.PH, function(fn){$.do(function(){fn(cx,pam2)})})}
    w.SetContactListener(  w.ln  )
    return w}



cx.A= function () {return this.GetFixtureA()}
cx.B= function () {return this.GetFixtureB()}
cx.a= function () {return this.A().B()}
cx.b= function () {return this.B().B()}


cx.includes = function (k, fn) {var cx=this, g=G(arguments),fA,fB
    fA=cx.A()
    fB=cx.B()

    if(!fn){
        return fA.of(k)?  [fA,fB] : fB.of(k)? [fB,fA] : null
    }


    //if fixA is 'of' k, then run fn with fixA as 'this' and pass in fixB, cx

    if (fA.of(k)){

        fixts(fA,fB)
    }

    else if (fB.of(k)) {fixts(fB,fA) }

    return cx


    function fixts(a,b){ _.b(fn, a)(b, cx)

    }




}



cx.between = function (k1,k2,fn) {

    var cx=this, fA=cx.A(),  fB=cx.B()

    return fA.of(k1) && fB.of(k2) ?  fixts(fA, fB)

        :   fA.of(k2) && fB.of(k1)?  fixts(fB, fA)

        : null


    function fixts(a,b){ return fn ? (_.b(fn,a)(b,cx)||cx) : [a,b,cx] }

}





cx.w=  cx.with=function(){


    var cx=this, g=G(arguments)

        if(  F(g[1]) || U(g[1])  ){
            return   cx.includes(g[0],g[1])}
        return cx.between(g[0],g[1],g[2])

}
w.b=w.beg=w.begin=function(k,k2,fn){var w=this,  g=G(arguments)
    //ADDS one or more handlers to beginHandlers array
    //most common use, usually just need one func.
    // would i ever need more?

    //if first pam is a fn, it assumes 1 or more fns
    //it just puts each item into bH arr
    if(g.F_){ g.e(function (fn) {
        w.bH.push(fn)})}

    else if (F(g.t)){
        w.bH.push(function(cx){
            if(cx.w(g.f, g.s)){
                g.t( cx )}})
    }
    else if(F(g.f)){
        w.bH.push(function(cx){if( cx.w(k) ){k2(cx)}})
    }
    return w

}
w.end=function(k,k2,fn){
    var w=this,g=G(arguments),eH= w.endHandlers
    if (F(k)) {_.e(g,function(fn){eH.push(fn)})}
    else if(F(k2)){fn=k2; eH.push(function(cx){
        if(cx.with(k)){fn(cx)}})}
    else if(F(fn)){eH.push(function (cx) {
        if(cx.with(k,k2)){fn(cx)}})}
    return w}
w.pre=function(){var w = this,g=G(arguments)

    g.e(function (fn) {w.preHandlers.push(fn)})
    return w

}
w.po=w.post=function(){var w=this,g=G(arguments)
    _.e(g,function(fn){w.postHandlers.push(fn)})
    return w}


cx.T=cx.t=cx.type=  function () {var cx=this
        return cx.rM().m_type
    }
cx.N= cx.next= cx.gN = function () {
        return this.GetNext()

    }//Get the next contact in the world's contact list.
cx.bC= cx.bCo = cx.bindCo = cx.bindController = function (k) {
        var cx = this,g=G(arguments), f

        //if any fixt collides with a certain kind
        //switch to the controller with that name

        _.e(g,
            function (k) {
                cx.with(k,
                    function(){
                        this.switchTo(window[k])})})
    }
cx.m=   cx.wM = cx.man = cx.worMan = cx.worldManifold = function () {var cx=this,m
    m=new b2d.Collision.b2WorldManifold
    cx.GetWorldManifold(m)
    return m
}
cx.cen=cx.point=cx.V=function(){var cx = this
    return cx.m().m_points[0].m()
}
cx.nr= cx.norm = function () {var cx=this
    return cx.m().m_normal.toFixed(2)} //norm is just the dir to quickest separate the overlapping shapes
//  If you want to know the actual direction that these two corners impacted at, you can use:
// v1 = b1.GetLinearVelocityFromWorldPoint( cx.cen() )
//  v2 = b2.GetLinearVelocityFromWorldPoint( cx.cen() )
//  impactV = v1 - v2
//cx.vA=  function(){var cx=this; return cx.lV(cx.a())}
//cx.vB=  function(){var cx=this;return cx.lV(cx.b())}
cx.en=function (a) {var cx=this
    if(U(a)){return cx.IsEnabled()}
    cx.SetEnabled(a ? true : false);
    return cx} // Enable/disable this this.//
// This can be used inside the pre-solve contact listener.
// The contact is only disabled for the current time step
// (or sub-step in continuous collision).
cx.cont=  cx.continuous = cx.iC = function () {var cx=this
    return cx.IsContinuous()
} //Does this contact generate TOI events for continuous simulation
cx.sen = function () {var cx = this, g = G(arguments)
    if(U(g[0])){return cx.IsSensor()}
    cx.SetSensor(g[0] ? true : false)
    return cx
}
cx.tch= cx.touching = cx.iT = function () {var cx=this
    return cx.IsTouching()
}


f.cl=  f.coll = function(k,fn){var f=this
        //ultimate func for FIXTURE COLL
        // you can specify what happens when a fixture hits:
        //ANYTHING
        // body/fixt of certain kind
        // specific fixt
        // specific body
        //but it its callback ALWAYS passed back the other fixt that was actually hit
        // and 'this' is set to THIS fixt within the cb
        //should cover class AND fixt AND body cases!!!

        if(F(k)){ fn=k; k='' }

        fn = _.b(fn,f)

        w.b(function(cx){var fA=cx.A(), fB=cx.B()
            if(f.of(fA) && fB.of(k)){fn(fB, cx)}
            if(f.of(fB) && fA.of(k)){fn(fA, cx)}})
        return f
    }
f.cl=    f.col= f.coll = function(k,fn){var f=this
    //ultimate func for FIXTURE COLL
    // you can specify what happens when a fixture hits:
    //ANYTHING
    // body/fixt of certain kind
    // specific fixt
    // specific body
    //but it its callback ALWAYS passed back the other fixt that was actually hit
    // and 'this' is set to THIS fixt within the cb
    //should cover class AND fixt AND body cases!!!

    if(F(k)){ fn=k; k='' }

    fn = _.b(fn,f)

    w.b(function(cx){var fA=cx.A(), fB=cx.B()

        if(f.of(fA) && fB.of(k)){fn(fB, cx)}

        if(f.of(fB) && fA.of(k)){fn(fA, cx)}

    })

    return f
}
b.cl=   b.col= b.coll =  function(k,fn){var b=this, w=b.W()    //merged these 2, but the the fixt 'coll' met is more complete/flexible  //b.collWithKind =
    // if body collides with ANYTHING
    // if body collides with body/fixt of specific kind
    // if body collides with specific body
    // if body collides with specific fixt
    // but always pass fixt into the cb
    if(F(k)){fn=k;k=''} //if clas NOT passed in
    w.beg(function(cx){var fA=cx.A(),fB=cx.B(),bA=cx.a(),bB=cx.b()
        if(b.is(bA) && fB.of(k)){_.b(fn,fA)(fB,cx)}
        if(b.is(bB) && fA.of(k)){_.b(fn,fB)(fA,cx)}})
    return b}
w.cl=     w.w=w.k=w.on= w.with= w.collWith=function(){
    var w=this, g=G(arguments)
    w.b(function(cx){
        cx.w(g[0], g[1], g[2])
    })

    return w}



b.pre=function(){var b=this,w= b.W(),g=G(arguments)
    w.pre(function(cx) {
        cx.w(b, g[0], g[1], g[2])
    })

}


ONEWAY=function () {W([1200, 600, 1200, 2000], {}).stats()
    .P(600, 1800).ball()


    w.D(300,100,'y',10)

    w.b(

        _.th(function(){w.D(300,100,'r',5)},

            500

        )

    )


    p.tr()
    var b1,b2
    w.b(
        b= w.D(500, 300, 'w', 50),
        function () {
            if(b2){b2=null; b2.kill()}
            b1= w.S(R(1000, 50), R(500, 50), 'y', 500).r(.8)

        })

    w.end(b,
        function () {


            if(b1){b1=null; b2.kill()}
            b2= w.S(R(1000, 50), R(500, 50), 'x', 500).r(.8)


        })




    /*
     plat(300, 300);plat(900, 600);plat(300, 900);plat(300, 1000);plat(1000, 1200);plat(500, 1400);
     function plat(x,y){return w.S(x,y,'o', 500, 40).K('pf')}
     pf = plat(900, 1700)

     w.pre(function(cx){
     //$!!! cx.w(b, 'b', fn)
     cx.w(p, 'pf', function(pf){

     if(isBel(p,y)){cx.en(0)}
     })
     //$ pre, if(cx.w('b'))
     if(!cx.w('wall')){
     // if(isBel(p,y)){cx.en(0)}
     }}
     )

     */

}
POST = function(){W()//only breaks at high impulse

    //what works: w.post

    b=w.D(600,300,'r',30).K('ball')

    //

    w.post(function (cx, I){
        if(I.nX()>200){  w.D(600,300,'r',30)   }   // $l('n:'+I.tX()+','+I.tY()+'|t:'+I.nX()+','+I.nY()) //second arg! //we can get the 'normal vector' of the contact btwn fixtures

    })

}
KING1=function(){W({g:12 }).Y()


    w.S(200,250,'r',400,20);
    w.S(400,250,'w',20,40)


    _.t(10, function(){

        w.D(100,100,'z',10).K('ball')
        w.D(200,100,'w',10)

    })

    _.t(3, function(){

        w.me(900,100,5).fR().my('feet', function(){this.lV(-2,-10)})
        w.me(700,100,5).fR().my('feet', function(){this.lV(2,-10)})

    })

    y.wl(

        w.S(600,200).K('vor').cir({s:1,c:'z',r:140,o:.2,C:'z',l:20}),
        function(){w.e('ball',function(b){b.tow(600,200)})}
    )


}
NORM=function(){W({g:0})

    //$ b.cl

    r=   w.S(300,300,'x',40)
    b= w.D(300,300,'b',40)


    r.cl(function(f, cx){

        var r1= w.D(600,300,'x',30).K('r')
        r1.I( cx.norm() )
    })




    /*

     b.cl(function(f,cx){
     var b1= w.D(600,300,'b',30)
     b1.I(cx.norm())

     })
     */

    // w.show(function(){return 'norm: '+ n.x.toFixed(1) + ', ' + n.y.toFixed(1)   })

}
ENERGY=function(){W({g:1})


    b=w.D(500,300,'b',50).d(1).K('b')

    r = w.D(700,300,'r', 80).d(1)


    w.b( function(cx){ cx.w('b', function(f){



        if(cx.a().of('b')){

            r.lV(

                cx.lV(cx.a())

            )
        }




        else {  r.lV( cx.lV(cx.b()))  }


    })

    })

    w.pop('me absorbs energy of tims collision!')

    $.in(4, function(){w.pop('gets actual v of bA')})

    $.in(8, function(){w.pop('at moment of col!')})

}
CXCN=function(){W() // w.chalk('so finding the actual contact point aint hard after all..')
    _.t(5, function(){  w.D(200,400,$r(),120)  })
    w.S(200,500,'r',200,50)
    w.b(function(cx){var pt=cx.cen();  w.dot(pt.x, pt.y)  })
}
WWW=function(){W({g:20 }).Y() //w.chalk('box goes up on coll with vortex, and right AFTER', 'ball goes up with continued pressure')

    w.plat(400,500,40,20).K('pf')
    w.D(500, 200, 'z',30).K('z')
    w.D(440,100,'y',50).K('ball dot')
    w.S(1000,200).cir({
        r:500,
        c:'w',C:'o',l:10,o:0.2,
        s:1
    }).K('vor')

    y.f().grp(-1)
    y.warp().wn('vor', function(){x.vY(-20)}, function(){x.vX(8)}).wl(function(){

        $l('aha')

    })

    b=w.D(100,100,'b',40).grp(-1).warp()
    x=w.D(50,100,'x',60,60).grp(-1).warp()
    w.wn('z', function () {$l('beg')}, function () {$l('end')})
    w.cl('pf', 'ball', function(){w.D(300,20,'w',40,40).K('box')})
    w.cl('pf', 'box', function(){w.D(300, 20,'b',40).K('ball')})
    w.cl('dot', function(cx){ this.B().dot() })
    w.wl('ship','vor', function(){ b.vY(-20) })

}
FREEZE=function(){W(10).C('z').Y()


    _.t(10, function(){
        w.D(100,100,'r',20).K('b')
    })

    b=w.S(400,300,'s',20).K('b')


    y.cl('b', function(f){var x, y,c

        x = f.B().X();
        y = f.B().Y()

        c = f.of('side')? 'x':'y'

        w.dot(c, x, y) //   if(f!==y){  f.D().dot('r') } else {   f.D().dot('w')  }
    })


}

w.wn=   w.whe= w.when = function(){var w=this, g=G(arguments),o


    o = F(g[0]) ? {b:g[0],e:g[1]}
        : F(g[1]) ? {k:g[0],b:g[1],e:g[2]}
        : {k:g[0], k2:g[1], b:g[2], e:g[3]}

    //when b,[e]  k,b,[e]  k,k2,b,[e]

    if(o.k2){

        w.b(o.k, o.k2, o.b);

        if(o.e){w.end(o.k,o.k2,o.e)}
    }

    else if(o.k){

        w.b(o.k, o.b); if(o.e){w.end(o.k,o.e)}
    }
    else {
        w.b(o.b); if(o.e){w.end(o.e)}}
    return w

}
w.wl=   w.whi= w.while = function (k, k2, fn) {var w = this, push


    if (F(fn)) {

        w.wn(k, k2,
            function() {push = true},
            function () {push = false})

        z(function () {if (push) {fn()}})
    }


    else if (F(k2)) {

        w.wn(k,   function() {push = true}, function () {push = false});
        z(function () {if (push) {k2()}})
    }




    return w



}
b.wl=    b.whi=b.while=function(k,fn){var b=this,w=b.W()

    w.wl(b,k,fn)

    return b
}
b.wn=   b.whe= b.when=function(k, oB,oE){var b=this,
    w=b.W()
    w.when(b, k, oB,oE)
    return b}
b.my=   function(k, fn){var b=this, w=b.W()

    if(F(fn)){
        w.b(function(cx){cx.w(b,
            function(f){
                if(this.of(k)){
                    _.b(fn,this)(f,cx)}})})}
    else {w.when(b,
        function(){ b.my[k] = 1},
        function(){ b.my[k] = 0})}
    return b
}  //so trig is to specify a sp body on what to do when one of its own fixts of a certain k has a col
WHEN=function(){W('A').G(1)



    r = w.S(500,300, 'r', 500,300,'-').K('r')


    y = w.y(1100,300)

    //work
    y.cl(function(){ w.D(600,300,$r(), 22)   })

    y.lD(30)
    // y.cl('r', function(){w.C('q') })

    //dont work
    //y.cl(r, function(){w.C('q') })
    //w.cl(y, function(){ w.C('z')    })

}
KING=function(){W({g:12 }).Y()


    w.S(200,250,'r',900,20);
    w.S(400,250,'w',20,40)


    _.t(10, function(){

        w.D(100,100,'z',10).K('ball')
        w.D(200,100,'w',10)

    })

    _.t(3, function(){

        w.me(900,100,5).fR().my('feet', function(){this.lV(-2,-10)})
        w.me(700,100,5).fR().my('feet', function(){this.lV(2,-10)})

    })

    vor= w.S(600,200).K('vor')

    vor.cir({s:1,c:'z',r:340,o:.2,C:'z',l:20})

    y.wl(vor, function(){
        alert('y.wl(vor,fn)')
        w.e('ball',function(b){b.tow(600,200)})
    })


}


//linVel from worldPt
b.lVW=  b.linVelWor=function(){var b=this, g=G(arguments),
        v = V(g[0],g[1]),
        vel
        if(g.m){vel= b.GetLinearVelocityFromWorldPoint( v.div() ).mult()}
        else {vel = b.GetLinearVelocityFromWorldPoint(v)}
        return vel.dec(2)

}
//helper shortcut
cx.lV=   cx.linVel=function(b){ return b.lVW(this.cen())  }
//linVel from LocalPoint.. i think not used
b.lVL=   b.linVelLoc=function(v, y){v = V(v,y);return this.GetLinearVelocityFromLocalPoint( v.div() ).mult().dec(2)}//usecase?
VEL=function(){W({g:0}).Y()
    b = w.ball()
    r = w.S(300,300,'r', 30).K('r')
     w.cl('r', function(other, cx){
         var  pt=cx.cen(),    v1=b.lVW(pt),    v2=b1.lVW(pt)
         w.D(600,300,'r',10).I(   v1.x-v2.x,  v1.y-v2.y)
     })

}
NOTSUREVEL=function(){W({g:0}).Y()

        b = w.ball()
        b1 = w.ball(300,300)
        w.b(function(cx){var p, v1, v2, temp,i
            cx.w(b,b1,function(b1, cx){var b=this
                pt = cx.cen()
                v1 = b.lVW(pt); v2 = b1.lVW(pt)

                temp= w.D(600,300,'r',10);$.in(.5,function(){temp.kill()})


                i = temp.I(v1.x-v2.x, v1.y-v2.y)


            })


        })



}
GHOSTS=function(){W({g:2});

    b = w.D(100,100,'b',50).d(1);

    r =  w.ball(400, 400,'r', 80).d(1)

    z(function(){ var v = b.lVW( b ).div(10);  r.lV(  v  )    })  // set b2's linVel to b's linWorVel (scaled down by 20) // $l(b.lV());   //b3= w.ball(100,100,10); $l('vel: ' + b3.lV().x); $l('velW: ' + b3.lVW().x); $l('velL: ' + b3.lVL().x)

}
CENPTS=function(){W(0).C('z')

    //technically.. this is all depped by cx.cen
    w.bump(50,550, 200)
    w.bump(800,300,80)
    w.brick(750,300,150,100)

    w.ball(300,300, 80)

    w.beg(function(cx){var a=cx.A(),b=cx.B()
        markAABB(a); markAABB(b) // dot both upper and lower bounds of AABB of both fixts
        a.dot('g'); b.dot('r')  //dot center of both fixts
        w.dot('y',M.lC(a.cen(),b.cen()))//dot center of their centers
        //2do:draw line to connect these pts..
    })

    w.chalk('here you can clearly see that the center of the two fixtures',
        'is not necessarily the same as the contact point,',
        'and can only represent collision center if fixtures are similar size.',
        '..perhaps halfway between this and the actual contact point would be nice')

    function markAABB(f){
        ab = f.GetAABB()
        lb = ab.lowerBound
        up = ab.upperBound
        lx =   lb.x* 30
        ly =  lb.y * 30
        ux =  up.x* 30
        uy =   up.y* 30
        dx = ux - lx
        dy = uy - ly
        w.dot('w', ux, uy)
        w.dot('p', lx, ly)
    }

}

cxI.n= cxI.nI=function(n){var I=this,
    nI= _.m(I.normalImpulses, M.fl)
    return N(n)?nI[n]:nI}
cxI.t= cxI.tI = function (n) {var I=this,
    tI= _.m(I.tangentImpulses, M.fl)
    return N(n)?tI[n]:tI}
cxI.nX = function(){var I=this;return  I.nI(0)}
cxI.nY = function(){var I=this;return  I.nI(1)}
cxI.tX=function(){var I=this; return  I.tI(0)}
cxI.tY=function(){var I=this; return  I.tI(1)}


later=function(){

    old=function(){
        HAT = function () {W()
// could i automatically have body listen to their sens?
            w.ball().r(.3)
            p = w.me(400,150,5)
            p.my('hat',function(){p.bS('guy')})
            p.my('right');
            p.my('left')
            $.space(function(){
                if(p.trg.right){p.I(100,-400)}
                if(p.trg.left){ p.I(-100,-400)}
            })
        }

        CONTACTS=function(){W()

            var centerFx = b2d.cir(80).K('center')

            b= w.D(500,300,'r',[
                centerFx,
                b2d.rec(60,90,0,40,10).sen(1).K('sen1')
            ]).aV(100)
            //wow!  no friction?? ..b and floor both hav fr .2!

            w.D(700,300,'p',[
                centerFx,
                b2d.cir(100).sen(1).K('sen2')

            ]).aV(100)

            w.col('s1','s2',

                function(){ w.D(100,100,'w', 100) })

            w.b(function(cx){
                if(cx.w('s1','s2')){
                    w.flag('new')
                }}) //w.on('new', function(){w.ball()})

        }

        THROTTLE=function(){W()
            b = w.ball(300,300, 100)
            b1 = w.brick(300,500)
            time = 0

            $.ev(1,function(){time++})

            cjs.t(function(){
                if(w.flagged('moveBrick')){
                    b1.X( 20 , '+' )}})

            lastTime=0
            change = 0

            w.b(function(cx){
                if(cx.w('brick')){
                    if(lastTime!=time){
                        lastTime=time;
                        w.flag('moveBrick')
                    }}})}
        b.when1=function(){var b=this, w=b.W(),ob={}
            ob.cxs=function(k,fn){
                w.beg(k,fn)
                return { after: function(fn){w.end(k,fn)} }}
            return ob
        }



        rM=function(){
            cx.rM=cx.manifold=cx.gM=function(){var cx = this; return cx.GetManifold()}
            cx.lN = cx.localPlaneNormal = cx.lPN = function () {
                var cx = this
                return cx.rM().m_localPlaneNormal
            }
            cx.lP = cx.localPoint = function () {var cx = this; return cx.rM().m_localPoint
            }
            cx.n = cx.pointCount = cx.pC = function () {var cx = this
                return cx.rM().m_pointCount
            }
            cx.ps = cx.points = cx.p = function () {var cx = this
                return cx.rM().m_points
            }
        }; //rM()
        PRE = function () {W()
            w.D(200, 300, 'r', 50)
            STATE={}
            cjs.t(function (){
                if (STATE.newBall) {w.D(200, 300, 'b', 50)}
                STATE.newBall = false})
            w.pre(function (cx, mf) {c = cx;m = mf})
            //second pam is really info about previous collision manfest?  may be usesless?!!!!
        }

        cx.cen= cx.mid=  cx.center= function (){var cx=this
            return M.lC(
                cx.A().cen(),
                cx.B().cen())}

        /*
         w.when = function(k, k2, oB, oE){var w=this,g=G(arguments)


         //instructions:
         //

         if (F(g[0])){

         oE=k2; oB=k
         w.beg(g[1])
         if (g[2]) { w.end(g[]) }
         }


         else if (F(what2)) {
         eFn = bFn
         bFn = what2
         w.beg(what, oB)
         if (eFunc) { w.end(what, eFn) }}

         else if (F(oB)){
         w.beg(what, what2, bFn)
         if (eFn) {w.end(what, what2, eFn)}}



         return w

         }*/

        //cx.excludes=function(u){return !this.includes(u)}
        /*
         cx.destroy = cx.destroyBoth = function () {
         this.a().setDestroy()
         this.b().setDestroy()
         return this
         }

         cx.destroyIf = function (kind) {
         this.a().setDestroyIf(kind);
         this.b().setDestroyIf(kind)
         }

         cx.destroyOtherIf = function (k) {
         var a = this.a(), b = this.b()
         if (a.is(k)) {
         b.setDestroy()
         }
         else if (b.is(k)) {
         a.setDestroy()
         }

         }

         */
        w.collx= function(k1, k2, fn){
            var w=this,
                n=k1+k2,
                cx

            if(F(k2)){return w.collideAny(k1,k2)}

            else {
                w.beg(function(cx){
                    if(cx.with(k1,k2)){ w.flag(n, cx) }
                })

                cjs.t(function(){ if(cx=w.flagged(n)){fn(cx)} })
            }

        }
        w.classx=function(k){var w=this,
            ob={class:k,  k:k,  world:w, w:w}
            ob.with=ob.collWith=function(k,fn){var ob=this
                if(O(k)){
                    _.e(k, function(fn,k){
                        ob.with(k,fn)})}
                else {w.with(w.class, k, fn)}
                return w}
            return ob}

        w.collideAny = function(a, fn){var w=this
            w.beg(a, function(cx){
                $.do(function(){fn(cx)})})
            return w}

        w.flagx = function (flag, val) {var w=this
            w.flags = w.flags || {}
            if (U(val)) {val = true}
            w.flags[flag] = val
            return w
        }

        w.flaggedx = function (flag) {var w=this, wasFlagged

            w.flags = w.flags || {}

            wasFlagged = w.flags[flag]

            if(wasFlagged){w.flags[flag] = false}

            return wasFlagged

        }
        w.onx = function (onWhat, fn){var w=this, val


            //this lets you specify a function to be run,
//immediately whenever a specific flag is set
//(and it is passed the value)

            //interesting default !!!!!!!
            //func=func||function(val){val()}

            cjs.t(function(){

                val=w.flagged(onWhat)

                if(val){ fn(val) }

            })


            return w

        }


        b2d.superManifold =  function(m){//used????
            m.lPN = m.m_localPlaneNormal
            m.lP=m.m_localPoint
            m.pC=m.m_pointCount
            m.p=m.m_points
            m.t=m.m_type
            return m}

        function SuperImpulses(impulses){
            impulses.n= impulses.nI=function(){return impulses.normalImpulses}
            impulses.t= impulses.tI=function(){return impulses.tangentImpulses}
            return impulses}

//do any of these get used? i think filterData does
        b2d.manager = b2d.contactManager = b2d.cM=function(){//used?
            var m= new BXD.b2ContactManager
            m.c= m.cl= m.Collide
            m.a= m.aP=m.AddPair
            m.f= m.fNC= m.FindNewContacts
            m.d= m.ds= m.Destroy
            return m
        }
        b2d.cxFilt = b2d.filter =   function(){//used?
            var f=new b2d.b2ContactFilter
            f.rC =f.RayCollide
            f.sC =f.ShouldCollide
            return f
        }
        b2d.neither = function(b1, b2){//d~data
            return {
                is: function(d){
                    return !b1.is(d) && !b2.is(d)}
            }
        }
        b2d.either = function(b1, b2){
            return {is: function(d){
                return b1.is(d) || b2.is(d)}}}
        b2d.either1 = function(ob1,ob2, is1,is2){
            return (ob1.is(is1) && ob2.is(is2))||
                (ob1.is(is2) && ob2.is(is1))}

        //Array.prototype.sen=function(k){var arr=this; arr.isSensor=k||true; return arr}
    }


///////
///////  lVW
///////


//from tx:
    /*
     w.l(1000,200,100,900,'-')
     w.l (600,0,700,500)
     w.l(200,200,500,500,'+')
     w.dr(350,260, 200,200,'-')
     w.dr( 500,240, 160,160,'+')
     w.dr( 400,200, 100,100)
     b= w.D(100, 200, 'y', 150, 100).d(.5).$(function(){this.B().I(0,-50)})
     w.D(500, 400, 'y', 50, 100).d(.5).$(function(){this.B().I(0,-50)})
     */


    bits=function(){


        f.grp =  function(grpIx) {var f = this,
            fl = f.GetFilterData()
            if ( U(grpIx) ) { return fl.groupIndex }
            fl.groupIndex = grpIx
            f.SetFilterData(fl)
            return f //get/set for groupIndex
        }
        fd.grp = fd.group = fd.index = fd.gI = function (a) {
            if (U(a)) {
                return this.filter.groupIndex
            }
            this.filter.groupIndex = a;
            return this
        }
        fd.cat = fd.category = fd.cB = function (cB) {
            var fd = this
            if (U(cB)) {
                return fd.filter.categoryBits
            }
            fd.filter.categoryBits = cB
            return fd
        }
        fd.msk =   function (mB) {var fd=this,
            fl=fd.filter,n
            if(U(mB)){return fl.maskBits}
            if(A(mB)){
                n=0
                _.e(mB, function(b){n+=b})
                mB=n}
            fl.maskBits = mB
            return fd
        }
        fd.bit =  function (cat, msk) {var fd=this
            fd.cat(cat).msk(msk)
            return fd
        }






        w.sCF=w.setContactFilter=w.SetContactFilter

        cx.fl=cx.filtering = cx.fFF = function(){var cx=this//whats the point?
            cx.FlagForFiltering()
            return cx
        }// Flag this contact for filtering.
// Filtering will occur the next time step.

        b2d.fl=  b2d.filt =b2d.filterData =  function(){
            var d = new b2d.Dynamics.b2FilterData

            d.gI=function(a){
                if(U(a)){return d.groupIndex}
                d.groupIndex=a; return d}

            d.cat=function(a){
                if(U(a)){return d.categoryBits}
                d.categoryBits=a; return d}

            d.mask=function(a){
                if(U(a)){  return d.maskBits}
                d.maskBits=a; return d}

            return d}


        f.fil=function(d){var f=this
            if(U(d)){return f.GetFilterData() }
            f.SetFilterData(d)
            return f}
        f.grp =  function(i) {var f=this,fl=f.fil()
            if (U(i)) { return fl.groupIndex }
            fl.groupIndex = i
            return f.fil(fl)
        }
        f.cat =  function(cB) {var f=this,
            d = f.fil()
            if (U(cB)) { return d.categoryBits }
            d.categoryBits= cB
            return f.fil(d)  //get/set for groupIndex
        }
        f.msk =  function (m) {var f=this,
            fl=f.fil(),n
            if(U(m)){return fl.maskBits}

            if(A(m)){
                n=0
                _.e(m, function(b){n+=b})
                m=n}

            fl.maskBits = m
            return f.fil(fl)
        }
        f.bit=function (cat, msk) {var f=this
            f.cat(cat).msk(msk)
            return f}
        b.bit=function (cat, msk) {var b=this
            b.cat(cat).msk(msk)
            return b}
        b.grp = function(i){var b=this
            if (U(i)) {return b.f().grp()}
            b.fs(function(f){ f.grp(i) })
            return b}
        b.cat=function(cat){
            var b=this
            b.fs(function(f){
                f.cat(cat)
            })
            return b
        }
        b.grp=function(grp){
            var b=this
            b.fs(function(f){
                f.grp(grp)
            })
            return b
        }
        b.msk=function(m){
            var b=this
            b.fs(function(f){f.msk(m)})
            return b
        }




        GRP=function(){W(30).Y();w.pop('b and r')

            w.right.grp(-1)
            y.grp(-1)
            w.D(600,400,'r',30).grp(-1)
            w.D(600,400,'r',40).grp(-1)
            w.D(600,400,'r',50).grp(-1)

            w.D(600,400,'b',50,50).grp(-2)
            w.D(600,400,'b',60,60).grp(-2)
            w.D(600,400,'b',70,70).grp(-2)


        }

        CAT=function(){W(40)
            b=w.D(300,300,'b',200).r(1).I(100,0)
            $.in(1, function(){w.pop('catbits=0');b.cat(0)})
            w.D(400,300,'b',80).cat(2).grp(-3)
            w.D(400,300,'g',60,90,0,40,10).grp(-3)
            w.D(300,300,'r',80).bit(2,[1,4])
            w.D(300,300,'y',60,90,0,40,10).bit(8,[1,2])
        }

        BIT=function(){W(2)

            w.D(300,300,'r',80).bit(2,[1,4])
            w.D(400,30,'b',80).bit(2,[1,4])
            w.D(300,300,'y',60,90).bit(4,[1,2,4])
            w.D(400,300,'g',60,90).bit(4,[1,2,4])
            w.pop('cirs are ghosts to each other')
        }

        FIL=function(){W(0).Y()

            w.D(700, 200, 'o', [
                [40],
                b2d.cir(5).bit(1,2), //cat is 1, but will only collide with 2's
                b2d.cir(10, 100, 100, '-'),
                ['w', b2d.cir(10, 100, -100) ],
                b2d.rec(10,300,'-') , //sets as sensor
                ['b', b2d.rec(300, 10)],
                [ 'w',[100,0], [150, -100], [200, 20]  ],
                [[200,0], [250,-100], [300,20], 'arr'],['p', 50]
            ])
            b = w.D(300, 400, 'r', [
                b2d.rec(200,100),
                ['g', b2d.cir(40,100,100).K('excited'), 'oook'],
                [5, 100, 200, 0, 'orgasmic excited']
            ])
            /*
             f = b.f().K('happy')  //apparently b.fixt is LIFO
             f.W().dot('b')
             $l('f is f: ' + f.is(f))
             $l('f is happy: ' + f.is('happy'))
             f.N().K('excited')// bug: k not getting communicated above (in the b def func)
             $l('f.N is excited: ' + f.N().is('excited'))
             $l('f is orgasmic: ' + f.is('orgasmic'))
             */


        }




    };bits()

}