
function move(){
    MOVE=function(){z()
        d = $.div('b',100,100).A().drag()
        f = function(num){d.toR(num)}
        setInterval(f,100)}
    MOVEWARP=function(){z()
        d = $.div('b',100,100).A().drag()
        f = function(num){d.toR(num)}
        setInterval(f,100)}

}
function keyy(){INPUTKEYS=function(){
    z()

    input =  $.input().A()

    $.span('span ').C('y').A().id('spn')



    input.on('keypress', function(e){

        $('#spn').text(

            $('#spn').text() + e.which
        )
    })
        .on('keyup',function(e){
            if(e.which==13){
                $l('enter')
                $('body').C('*')
            }})
        .on('keydown', function(e){
            var key = e.which, //why these nums?
                result = (key>48  &&  key<57)||  ( key>96 && key<105) ||  (key == 8)
            $l('result: '+result)
        })


}

    INPUTUPDOWN  = function(){

        $.input().A()

        onTextInputKeyup(function(e){

            var dir =  (parseInt(e.which) == 38)? 'up'
                : (parseInt(e.which) == 40)? 'down'
                : 'neither'

            $l(dir)
        })

        function onTextInputKeyup(func){return $('input[type=text]').on('keyup', func)}
    }

    TESTWATCHKEYS=function(){z()
        $.test=true
        cjs.watchKeys()}
    TESTKEYBOARD=function(){z()

        cjs.watchKeys()

        b2.mW({debug:true})

        w.footListener()


        //  p = w.addMe().controlMe('standard')

        b=w.ba()

        b.bindSprite('guy')

        b.controlMe('basic')

    }
}
function ui(){
    UPPERVSLOWERLETTERS=function(){
        //cool!
        z()

        i = $.input().A()

        i.on('keydown keypress',
            function(e){
                $l(e.type+':'+ String.fromCharCode(e.which) +'('+ e.which +')')})
    }
    HIDEONKEYDOWN=function(){z()

        c = $.canvas('r', 500).A()

        c.hideOnKeyDown()


    }
    RESPONSIVEBOTPANEL=function(){z()


        $.div('red').P('f').X(0).css({

            bottom: 0,
            width: '50%',  height: '50%',
            'min-width' :110,
            'max-width' :318,

            opacity: 4

        }).A().A(
            $.img('me')
        )



        // call and then play with browser size


    }
    SLOWFADEAWAY=function self(opacity){   z()

        //makes a yellow square and black dot??


        c = $.canvas('y',500,500).A()

        c.circle(10,10,10)

        opacity = U(opacity) ? 0.2 : parseFloat(opacity) - 0.001

        c.opacity(opacity).fillStyle('red').fillRect()

        if(opacity < 1){
            setTimeout(function(){
                self(opacity)}, 30)
        }
    }
}
function alpha(){
    JOYSTICK=function(){W()//.P()
        $.joystick  =function(){
            $('#left').on('mousedown mouseover touchenter', function(e){K.left = true ;e.preventDefault()})
            $('#left').on('mouseup mouseout touchleave', function(){K.left = false})
            $('#jump').on('mousedown mouseover touchenter', function(){  K.up = true   })
            $('#jump').on('mouseup mouseout touchleave', function(){  K.up = false  })
            $('#right').on('mousedown mouseover touchenter', function(){ K.right = true})
            $('#right').on('mouseup mouseout touchleave', function(){K.right = false })}
        w.brick(200,400, 80,20)
        w.brick(300,200,80,20)
        $.joystick()
        p= w.p(100,100,'power')
        p.r(.8)

    }
}
function weak(){
    DIRTYBALLS=function(){W({  grav:0 })

        w.dirtyBall=function(x,y,stop1,stop2){
            return  this.gradBall(x, y, 60,'z','w',  stop1, stop2 )

        }

        w.gradBall(200,100,60,'z','w'  )
        w.dirtyBall(350,100,  0,  .9 )
        w.gradBall(500,100,60,'z','w',  0,  .6 )
        w.gradBall(650,100,60,'z','w',  0,  .3 )
        w.gradBall(800,100,60,'z','w',  0,  .1 )
        w.gradBall(350,300,60,'z','w',  .3,   1 )
        w.dirtyBall(500,300,  .6,   1 )
        w.dirtyBall(650,300,    .9,   1 )
        w.dirtyBall(800,300 ,  1,   1 )

    }
    RADIANTBALLS=function(){s=$St('a')
        b1=s.cannonBall(100,200)
        b2=s.basketBall(100,100)
        b3=s.beachBall(50,50)
        b3=s.snowBall(50,300)
    }
    SWITCHBALLWORKSBUTTOOCOMPLICATED=function(){w=b2d.W({  grav:0 })

        advanceN=function(n, dif){
            n += dif
            if(n>=1){n=.9; dif*= -1}
            if(n<=0){n=0; dif*= -1}
            return {n:n, dif:dif}}


        switchBall1=function(x,y){var  dif=.1,n1=0,n2= 0,
            b=w.ball(x,y, 60).bindSprite2( w.s.h(x,y) )

            I(function(){n2 = advanceN(n2); drawGrad()}, 100)
            function drawGrad(){
                b.sprite.rG(['r','y'],[n1, n2],  60 ).dc(0, 0, 60)}

            function advanceN(n2){

                n2 += dif
                if(n2>=1){n2=.9; dif*= -1}
                if(n2<=0){n2=0; dif*= -1}; return n2}

        }


        switchBall2=function(x, y){
            var   ball= w.ball(x,y, 60).bindSprite2( w.s.h(x,y) )



            ball.drawGrad = function(n1,n2 ){return this.sprite.rG(['r','y'],
                [n1, n2],  60 ).dc(0, 0, 60)}

            ball.animGrad1=function(){

                var that=this,
                    dif=.1,  n2=1,  n1=0

                I(function(){
                        var res = advanceN(n1, dif)

                        dif = res.dif

                        n1 = res.n

                        that.drawGrad(n1,n2)},

                    300)}


            ball.animGrad2=function(){

                var that=this,  dif=.1

                I(function(){
                        var res = advanceN(n1, dif)
                        dif = res.dif
                        n1 = res.n
                        that.drawGrad(n1)},
                    300)

            }


            ball.animGrad1()




        }




        switchBall1(100,100)


        switchBall2(300,100)



        w.s.back.linGrad('u','p')
        w.s.HUD.bm('me', function(bm){  me= bm.sXY(.3).XY(1150, 550).drag()  })




    }
}
function err(){
    QTX = function () {
        WQ(function () {
            i = w.i.qB('me', 0, 0, 3)
        })
    }
    CENH=function(){W()

        h.rec(100,100,100,100,'y')
        h.rec(200,200,100,100,'b')

        h.c('o').polyStar(300,100,
            50,5,0.6,-90)

        h.c('w','z')
            .roundRectComplex(400,300,
            300,300, 20,20,30,40 )

        h.cir(500,200,40,'b','x',10)
    }
    GRAPHTEST=function(){



        St(); img = $.i('me',function(){s.ct().h().bfS(img).ss(32).dr(20,20,920,360); _.each([

                function(){return $h(12,10)
                    .lf('b','g',130).dr(130)},

                function(){return $h(40, 10,'b',16)
                    .ls('r','w',70,140).de(70,140)},

                function(){return $h(80,80)
                    .C('b',8).rf('w','y',40).dc(40)} ,

                function(){return $h(12,10,18)
                    .bf(img, cjs.M(1) ).rs('b','g',30,130).dr(130)},






                function(){return $h(12,12,'g','r',8)
                    .rr(130,30)}, //w(h) and r


                function lt(){return $h().C('o')
                    .ss(16,'round','round')
                    .mt([40,10],[90,90],[90,140])},

                function star(){return $h(80,85,'y','b',3)
                    .pStr(0,0,80,5,.8,-95)},



                function hex(){return $h(80,40,'p')
                    .pStr(40,6).pStr(0,75,40,6).pStr(45,45,20,6)}


            ],

            function(cont,i){var W=155, H=155, P= 5, C=4 //pad, cols
                s.A(tile(cont()).XY(
                    42+(W+P)*(i%C),
                    42+(i/C|0)*(H+P)))})})[0]




        tile=createTile=function(x,y){var bg,til
            bg = $h().c('t').dr(0, 0, 155, 155).ef().op(.2)
            til = cjs.ct().A(bg)
            if(N(x)){  til.X(x) }
            if(N(y)){  til.Y(y)  }
            if(O(x)){ til.A(x) }

            return til}


    }
    TRIPLESTAGE= function(){w=b2d.W({  grav:0 })
        b = w.ball(500,300,60)
        b.bindSprite2( w.s.h(500,300)  )
        num = 0
        dif = .1
        shape = b.sprite
        shape.rG(['r','y'],[0, num], 60)
            .dc(0, 0, 60)
        w.s.HUD.bm('me', function(b){   b.XY(300).drag()   })
        w.s.back.bm('guy', function(b){   b.XY(200).drag()  })
        w.s.back.linGrad('b','z')
    }
    RADIANT=function(){W().P()

        p.lD(1).warp()

        $.space(
            function(){
                p.polyBul()}
        )

        badGuy=w.badGuy(
            400, 200).warp().den(.1)

        _.ev(.2, function(){
            w.s.pen('badGuy health: ' + badGuy.health)
        } )
    }
    SHADOW=function(){W().P()


        p.lD(1).warp()
        badGuy=w.badGuy(400, 200).d(.1).warp()
        _.in(1, function(){
            p.sprite.shad("y", 0, 150, 300)
            badGuy.sprite.shad('o', 40, 40, 40)
        })
        $.space(function(){
            p.polyBul()
        })
        _.ev(.2,function(){
            // w.s.pen('badGuy health: ' + badGuy.health)
        })
        $(w.s.back.canvas).C('p')
        s= w.s.back
        s.bm('me' , function(bm){
            bm.drag().shad('blue', 125,  125,  50)
                .XY(100,100).sXY(.6)
        })

        s.bm('guy', function(bm){
            bm.drag().shad('r', 100,100,10)
                .XY(300,200).sXY(.6)})
        s.bm('me' , function(bm){
            bm.drag().shad("z", 25, 25, 50)
                .XY(500,100).sXY(.6)
        })
    }
}
function alpha(){
    WHYQ = function () {
        cjs.Keys.l = cjs.Keys.left = false
        cjs.Keys.r = cjs.Keys.right = false
        cjs.Keys.u = cjs.Keys.up = false
        cjs.Keys.d = cjs.Keys.down = false

        $.kU('l', function () {
            if ($.test) {
                $l('left lifted')
            }
            cjs.Keys.l = cjs.Keys.left = false
        })

        $.kD('l', function () {
            if ($.test) {
                $l('left pressed')
            }
            cjs.Keys.l = cjs.Keys.left = true
            cjs.Keys.dir = 'left'
        })

        $.kD('l', function () {
            if ($.test) {
                $l('left pressed')
            }
            cjs.Keys.l = cjs.Keys.left = true
            cjs.Keys.dir = 'left'
        })

        $.kD('r', function () {
            if ($.test) {
                $l('right pressed')
            }
            cjs.Keys.r = cjs.Keys.right = true
            cjs.Keys.dir = 'right'
        })

        $.kU('r', function () {
            if ($.test) {
                $l('right lifted')
            }
            cjs.Keys.r = cjs.Keys.right = false
        })


        $.kD('u', function () {
            if ($.test) {
                $l('up pressed')
            }
            cjs.Keys.u = cjs.Keys.up = true
        })
        $.kU('u', function () {
            if ($.test) {
                $l('up lifted')
            }
            cjs.Keys.u = cjs.Keys.up = false
        })
        $.kD('d', function () {
            if ($.test) {
                $l('down pressed')
            }
            cjs.Keys.d = cjs.Keys.down = true
        })

        $.kU('d', function () {
            if ($.test) {
                $l('down lifted')
            }
            cjs.Keys.d = cjs.Keys.down = false
        })
    }

}

function alpha(){
    h.C2= function (C, l) {
        alert('h.C2')
        var h=this,gx=h.graphics,g=G(arguments)
        o=O(g[0]) ? g[0]
            :
        {C:[0], l:g[1]}
        gx.s(o.C?  oO('c',o.C): null)
        if(N(o.l)){h.l(o.l)}
        return h
    }
    h.copy=h.same=function(){
        alert('h.copy = h.same')
        return $h(this)
    }//******** here is the problem..
// gotta let h.poly also defer to rect (and circ?)
    h.sC=function(){
        alert('h.sC')
        var h=this,
            gx= h.graphics,
            g=G(arguments)
        gx.sC.apply(gx, g)
        return h
    }}


//fizAnim

RUN=function() {
    W().C('r');
    Q([{id: 'I', src: "/MonsterAIdle.png"}, {id: 'run', src: "/MonsterARun.png"}], q)
    function q(i) {w.C('g')
        ss0=  $SS({
            i: [Q.i('I')],
            f: {width: 64, height: 64, regX: 32, regY: 32},
            a: {I: [0, 10, "I", 4]}
        })
        i = w.D(400, 200, 'b', 10).fR().Sp(ss0,0,0,5,'+')
        ss = $SS({
            i: [Q.i('run')],
            f: {width: 64, height: 64, regX: 32, regY: 32},
            // create sprite.. and set the registration point (the point it will be positioned and rotated around)
            // to the center of the frame dimensions:
            // sprite.regX = sprite.spriteSheet.frameWidth/2 || 0//sprite.regY = sprite.spriteSheet.frameHeight/2 || 0
            // To slow down the animation loop of the sprite,
            // we set the frequency to 4 to slow down by a 4x factor
            a: {L: [0, 9, "R", 4]}
        })
        ss = ss.flp(true, false, false)
        sp = w.D(160,302,'r',10).Sp(ss).p("R").dr(90).f(10,'+')
        /*
         T.tx(function(){

         if (sp.x >= 800){sp.dr(-90).p("R")}
         if (sp.x < 100) {sp.dr(90).p("I")}
         if (sp.dr() == 90) {sp.x += sp.vX;sp.y += sp.vY}
         else {sp.x -= sp.vX;
         sp.y -= sp.vY}
         })}

         */
    }
}


MFIL=function(){W()._(function(){
    b = $H()
    b.graphics
        .beginLinearGradientFill(["#000000",
            "rgba(0, 0, 0, 0)"], [0, 1], 0, 0, 100, 100)
    b.graphics.drawRect(0, 0, 100, 100);
    b.cache(0, 0, 100, 100);
    bm = w.i.qB("me")
    bm.filters = [
        new cjs.AlphaMaskFilter(b.cacheCanvas)
    ]
    bm.cache(0, 0, 100, 100);
})}


BI=function(){W()._(function(){
    b = w.D(600,300, 'r', 200,300).rt(10)
    f= b.f()

    f.bI('me')

})
}

SHT=function(){W(0)
    y= w.y(300,300,'-')
    y.aD(0).lD(20)
    y.fixedRot(false)
    y.SetAngularVelocity(10)
    z(function(){
        // y.ApplyTorque(100)
        if(K.r){
            y.SetAngularVelocity(15)
            // y.ApplyTorque(130)
        }
        else if(K.l){
            y.SetAngularVelocity(-15)
            // y.ApplyTorque(-130)
        }
        else {   y.SetAngularVelocity(0)}
    })
    // w.show(function(){return y.aV()})
}
THRUST = function(){W({ g:0//, i:'space.jpg'
})
    w.S(400, 200,'s', 40,40)
    p = w.p(300, 300, 'thrust')
    w.tim(3)
    w.b(function(cx){
        cx.w('bu', function(f){if(f.B()!=p){this.B().kill()}})
        cx.w('bu', 'tim', function(t){t.B().kill()})
    })
    $.space( function(){
        w.bu(p.wP(0,-100)).I(p.v(5,'*'))
    })

}


SPRBALLS=function(){
    W(400,400).C('w')._(function(){
        //cjs.rulers()
        w.p(0,0,10).stat()
        _.t(8, function(){w.D(R(100,50),R(100,50),'b',30)})
        w.$$(function(){
            _.t(8, function(){
                var b= w.D(R(100,50),R(100,50),'b',30)
                b.$h('x','X',1).c('x','X', 1).bf(w.s.cv0).cir(30)
            })
        })
        w.i.T(200,100, '$$ me')
    })}

PL=function (cn) {W();  df= cn||
'slide'
    //'jumper'
    cn = _pam.toLowerCase() || df
    p = w.p(400, 400, 4, cn)
}
WORLD = function () {W(0)

    b = w.D(100, 100, 'r', 50)
    b1 = w.D(100, 200, 'b', 40)

    // w.grav(-10);setInterval(function(){w.grav('flip') }, 2000)

    w.AddController
    w.CreateController
    w.DestroyController
    w.GetGroundBody
    w.GetProxyCount
    w.SetDestructionListener
    w.SetBroadPhase
    w.SetWarmStarting
    w.SetContinuousPhysics
    w.IsLocked

    // proxies - represents an AABB in the broad-phase collision algorithm. Each b2Shape has a proxy.
    //  pair - a record created when two proxies overlap.
    //  manifold - the set of contact points for two convex shapes.


    w.locked = function () {
        return b2World.e_locked != 2
    }

    w.m_island
    w.m_flags


}
BADDIES=function(){W(); w.goomba(); w.bobom(200,200)}
MOVCIR=function(){w=b2d.W({g:0})


    w.dot(300,300); w.dot(600,300); w.dot(900,300)

//rad,speed

    w.D(300,300,50,100).moveInCircle('+') //high oval

    w.D(600,300,50,100).moveInCircle()
    w.D(900,300,100,50).moveInCircle('-') //long oval




}


//err
ZILSCR=function(){w=b2d.W({g:0,w:0}).db()
    health=100
    y = w.ship().cl(function(){
        health-=5
    }) // insert message passing here!
    z = w.zilla(600, 300).fireBallsAtInt(4000)
    //w.follow(y)
    y.cam()
    w.show(function(){return 'health: '+ health + ', hits: ' + z.hits})

}

