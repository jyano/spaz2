TX= function(){

    W( {W:2000, H:1000, wW:4000, wH:2000, g:1000})
        .Z(.1).G(10)
        ._(onReady)

}

function onReady(w){ //, m: 'm'

	//snow()
	
    w.$$(function(){ w.showOff() })

    _.t(10, function (i) {w.S(   R(5000), 1000+R(500), 'r', R(250,50),  R(60, 15)).K('rr')})
	
    y = w.y(2600,1500,6).K('p')

    p = w.p(2200, w.h-300, 3).K('p')

     bike = x = Bike().K('p')


     but = b = Butterfly().aD(1000000).r(0).XY(500,200).K('p');
 
    _.in(1, function(){
        but.cn('thrust', 500)
    })

	pol=Pol()


    but.XY(pol.X(), pol.Y())

    distJoint= j= w.dJ(but, pol ).l(600).fq(55).d(.1)
	flub= Flub()
	r = w.D(300, 400, 'r', 250).r(.5).cl('p', function(f){

        if(f.B()== w.t){  }

        else {

            r.C($r())
            w.C($r())

            w.y( r.X(), 400 ).C('b')

            //  f.B().track()

        }


        w.bg.bm('earth')
    })
	destWall = t=DestWall()
    curtain = w.i.h(-300,-200,'+')
        .bf('me')
        .rec(  {w:150,h:500}, {w:150,h:500,x:200}, {w:150,h:500,x:400}, {w:150,h:500,x:600} )
    y.track()
    _.in(1,function(){
        w.C('z')
    })





}




function Pol(){

var pol,

    verts=[
            [[5, 100], [0, -100], [200, -150], [200, 150]],
            [[-50, 50], [-50, -100], [450, -50], [450, 50]]
    ]
    pol =w.D(2500, 300)
    
    
    pol.pol({
        v: verts,
    
        c: {c: 'r', C: 'y', l: 10}, bf: 'me'
    
    })

    return pol
    //right now b.pol returns an array of the fixts added..
}




function Flub() {

    //flub is my face on a circle
    //it warps.. but mid screen.. so gotta fix i.warp
 var   flub =   w.D(3500, 160).K('flub').K('m').K('p')
    flub.cir({r: 120, rf: {c1: 'r', c2: 'g'}},
        {r: 100, C: 'y', l: 2, bf: 'chicks'})
    flub.r(5).fr(1).lD(5)
    flub.fR().cn('pow')
    flub.bS('me', .4)
    flub.warp()
    return flub
}

function Player(){var p = w.p(200,400,5).cn('j')
    w.S(100, w.h-100, 'r', R(70,150),  R(30,15)).K('rr')
    w.S(100, w.h-400, 'r', R(70,150),  R(30,15)).K('rr')

    _.t(10, function (i) {

        w.S(   R(5000), 1000+R(500),
            'r', R(250,50),  R(60, 15)).K('rr')
    })


    p.webs=[]
    p.canW=1
    p.wb=p.web=function(K){
        return p.Web(p.X(),p.Y()-100, K)
    }
    p.iCn=function(){return p.webs && _.fW(p.webs,{cn:1})}
    p.shR=function(){var f=p.sw('-'); w.D(p.X()+80, p.Y()-20, 'w', 6).I( 2- f/50 , 0 - f/40);return p}

    p.shL=p.shootLeft=function(){
        var f=p.sw('-'); w.D(p.X()+80, p.Y()-20, 'w', 6).I( 2+ f/50, 0+f/40); return p
    }

    p.lWeb=function(){return _.l(_.wh(p.webs,{cn:1}))}
    p.detach=function(){if(p.iCn()){p.lWeb().die()};return p}
    $.kD({l: function(){p.lV(-40, 0)}, r: function(){p.lV(40, 0)},
        u: function(){if(p.webs[0]){_.l(p.webs).die()}},
        d: function(){if(!p.iCn()){ p.web().b.I(0, -100000) }}})
    w.b(function (cx) {cx.w('wbB', 'rr', function(f){var web= _.fW(p.webs,{b:this.B()}); if(!web.cn){web.attach(f.B())}})})
    return p

}

function Butterfly(){
    //BLUE BUTTERFLY

    var  b = w.D(500, 800,[  [300,100],   [100,200]]  ).C('z')//.track()

    b.i.rec('r', 'z',0,-45,20,150,'+')//gun
    b.i.rec('y','z', 0,0,300,100,'+') //wings
    b.i.rec('o','z', 0,20,320,10,'+')//stripes
    b.i.rec('o', 'z',0,-20,320,10,'+')
    b.i.rec('b','z', 0,0,100,200,'+')//top

    b.i.al(.9)




    return b

}
function snow() {

/*
//a little square snow
    _.ev(5, function () {

      var b=   w.D(
            R(1000), -300, $r()
        )//.g()
           // b.al(.9)
            b.rec('w', 'z', 0, 0, 180, 180) 
    })
*/


}


function Bike(){
    car = w.D(2300, 300, 'r', [[200, 20], [20, 165, -50, -50, 45], [20, 165, 50, -50, -45]])
    dir = 12
    car.fr(5)
    car.track()

    j = w.rJ(
        wh = wheel(2250, 300).C('b'), car, 0, 0, 100, 0)

    wh.bS('me')
    w.rJ(
        wh2 = wheel(2250, 300, 50, 10).C('g'), car, 0, 0, -100, 0)
    w.rJ(
        wh3 = wheel(2250, 300, 25, 6).C('y').aD(10), car, 0, 0, 0, -100)


    wh2.bS('me')
    wh3.bS('me')

    T.t(function () {
        var K = $.K

        if (K.u) {
            wh.ApplyTorque(150000)
            wh3.ApplyTorque(-50000)
        }

        if (K.r) {
            wh.ApplyTorque(150000)
            wh3.ApplyTorque(15000)
        }

        if (K.l) {
            wh.ApplyTorque(-50000)
        }

        if (K.d) {
            wh2.ApplyTorque(-50000)
            wh3.ApplyTorque(150000)
        }
    })



    function wheel(x, y, r, n) {
        r = N(r, 80)
        n = N(n, 15)
        pC = [b2d.pC(r, n)]
        return w.D(x, y, 'w', pC).d(5)
    }

    return car
}
function DestWall(){


    var  t=w.S(3000, 1450,'x',300,900)

    t.cl('bul', function(bu){var v,p

        bu=bu.B()

        v=bu.XY()
        bu.kill()
        // v=bu.kill()
        p=M.p([[0,100],[-100,0],[0,-100],[100,0]]  ).ger(v)
        w.rad(v.x, v.y, 15,function(f){f.sub(p)})//t.fs(function(f){f.sub(p)})
        t.fs(function(f){f.C($r())})
    })


    return t
}

 