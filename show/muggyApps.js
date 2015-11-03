TWEENART = function (a) {
	//wMb makes bitmap mug and passes it to a callback
	//optionally? can pass a stage to append it to before the callback runs
	s = $St()
	s.mug(function (b) {
				b.XY(300);
				b.rC(); //centers it's reg point?
				SK(b)
				$Tw([b, 'l'], {sxy: .5}, [{sxy: .7}, 500], [{sxy: .5}, 500])
				s.mug(function (b) {
					b.XY(200);
					b.rC();
					b.WH(200);
					SL(b);
					$Tw([b, 'l'], {r: 0}, [{r: 360}, 1000])
					s.mug(function (b) {
						b.rC();
						b.XY(600);
						SC(b)
						$Tw([b, 'l'], {kxy: 0},
								[{kxy: 20}, 500],
								[{kxy: 0}, 500])
					})
				})
			},
			EDIT()
	)
}
$.fU= $.fileUpload =  function(lb, t){

    var fG =  $.d().K("form-group").A(
        $.lb(


            D(lb) ? lb :'upload file',

            'upl'


        ),//.K('control-label')//.fS(20),


        $.ip().ty('file').id('upl').n('avatar')
    )


    if(t){
        fG.A(
            $.p(t)//.K('help-block')
        )}

    return fG

}
UPLOAD=function(){

    f =  $.f([

        $.fU('').attr('name', 'avatar'),

        $.sm().val('ok')//.K("show")
    ])


    f.attr({

        method:'post',
        enctype: 'multipart/form-data',
        action: '/pic'
    })

    f.C('o') //$.pop(f, {title: 'upload a new pic'} ).dg()
}
UPLOADS=function(){


    $.fm()
    y = 80
    n=0
    $.eG('myPics',  function(p){
        $l('pic: ' + n++)
        $.picDiv(y).A(

            UpPic(p)

        )
        y+= 220
    })


    function UpPic(p){return $.sp().A(

        $.pic(p),
        $.delBt('/pic', p)

    )}

    /*
     $.G('myPics',  function(p){_.e(p, function(p){

     $l('pic: ' + n++)
     $.picDiv(y).A($.pic(p), $.delBt('/pic', p))
     y+= 220
     })

     })*/
}




EDIT = function () {

    st = $St('z', 400)

    ct = $.Ct().A(d = $.d(), st.canvas)

    $.eJ('/img', function (i) {

	    c = d.Can('o', 40, 40)
        
        c.fit( i.d )
        
        c.$(function () {
            st.bm(i.d, function (bm) {
                bm.rC(200, 200).XY(200,300).TR()
            })
        })
        c.mar(20).C('r')
        // d.A($.btX('/img', i, '-'))
    })


    $.$$(function () {
        $.po('/img', {d: st.du()}, $.rl)
    })
    d.C('b').al(.6).W(400).H(100)
    d.ov('scroll').css('overlflow-y', 'auto')

}
EDIT0 = function () {

    st = St(800)

    var imgHolder = $.d()

    CT(imgHolder, st).o('$$', sav(st, 'edit'))

    eaI(function (img) {

        imgHolder(
            $imageSizeFuncCan(
                img.d, 1, function () {
                    st.bm(img.d,

                        function (bm) {
                            //bm.rgc('+');
                            TR(bm);

                        }, '+')
                }
            )
        )

    })

    return st
}
EDIT1 = function () {

    st = St(800)

    var imgHolder = $.d()

    container = CT(imgHolder, st)

    container.o('$$', sav(st, 'edit'))

    eaI(function (img) {

        imgHolder.A(
            $.c('X', 100, 100).fit(img.d).click(function () {


                st.bm(img.d,

                    function (bm) {
                        bm.rCenter('+');
                        TR(bm)
                    })
            })
        )

    })

    return st
}
PROPBOX = function () {
    var imagesDiv = $.d()
    dA = $.dA('y', 200)($.sp('prop box'), $.hr(), $.sp('selected cutout:'))
    st = SuperStage(800)
    littleStage = SuperStage(80)
    dA(littleStage)
    CT(imagesDiv, st).o('$$', sav(st, 'edit'))
    eaI(function (image) {

        imagesDiv(
            xc(image.d, 1,

                function () {
                    st.bm(
                        image.d,

                        function (bm) {

                            TR(bm)


                            ///hmmm only clicks once?
                            //does this relate to the draggable st problem?
                            bm.$(function () {
                                $l('new selection')
                                b = bm
                                littleStage.ch('-')
                                clone = Do(bm.ob.clone())
                                littleStage.a(clone)

                                clone.xy(50).sxy(.1)
                            })


                        }


                        , '+')
                })
        )
    })

    return st
}
AVATAR = function () {
    z()
    //the challenge here is to make the st draggable but still usable, by dragging it by a wrapper div
    //  s=St(400)
    st = $.dragStage().t()
    //d = qq( st.ob.canvas )
    //d2=$.d().drg().w(500).h(500).c('o')
    //CT(d, st).o('$$',  sav(st,'avatar') )
    st.$$(function () {
        st.snap('avatar')
    })
    d = $.d('x', '+')
    $.Gj('img', function (i) {
        _.e(i, function (img) {
            d.A($.c(100, 100).A().fit(img.d).$(function () {
                st.bm(img.d, TR, '+')
            }))
        })
    })
    //d2( st )
}
PAINT = function () {

    _paintColor = 'blue'
    _paintSize = 10
    canvas = $.c('r', 400, 400).A().P('a', 100, 50)
    st = canvas.stage.t()
    shape = new cjs.Shape()
    st.mug(function (mug) {
        mug.sXY(.4)
        st.A(shape)
    })
    graphics = shape.graphics
    graphics.beginStroke('black')//.beginFill('yellow') <- cool effect!!
        .setStrokeStyle(4)//.moveTo(10,10).lineTo(111,111)
    st.on('stagemousedown', function (e) {
        graphics.beginStroke(_paintColor)
        st.on('stagemousemove', function (e) {
            graphics.lineTo(e.stageX, e.stageY)
        })
    })
    st.on('stagemouseup', function () {
        st.removeAllEventListeners('stagemousemove')
    })

    div = $.dK('controls')

    div.a2($('body'))

    colorPicker = $(' <input   type="color">')

    div.A(colorPicker, $.sp(10), $.sp(20), $.sp(30))

    colorPicker.on('input', function () {

        _paintColor = $l(colorPicker.val())
        graphics.beginStroke(_paintColor)
    })

    span=$('.controls span')
        if(span && F(span.$$)){span.$$(function () {
            graphics.setStrokeStyle(parseInt($(this).T()))
         })}
}

EDITOR = function () {
    z()
    var r = '#0FF', size = 2, oX = 0, oY = 0, shape,
        st = $.dragStage(),
        imgHolder = $.d('y', '+')
    $.eG('img', function (i) {
        imgHolder($.imgSizeFnCan(
            i.d, 1, function () {
                st.bm(i.d, function (bm) {
                    SL(bm.sxy(.4))
                }, '+')
            }))
    })
    TextAdder2(st)
}
CUTOUTS=function(){
    $.bX=$.btX=function(){var g=G(arguments), o={url: g.f, data: g.s}
        return $.bt('X', function (){var bt=this
            $.aj({type: 'DELETE',
                url: o.url,
                data: o.data,
                success: function(){rmParOf(bt)
                    function rmParOf(bt){$(bt).pa().rm()}}})})}
    $.fm(); section1.A($.h4('click a pic to select it as your mug, or the x to delete it'))
    y = 80
    
    $.eJ('/img', function(img){var i
        i = $.i(img.d)
        i.WH(100,100)
        i.$(function(){ 
        $.po('/changeMug', {url: img.d}, function(){ i.selPic() }) })
        
        $.dA('b',100, 100, '+')
        .left(y).top(200)
        .K('pic')
        .A(i,  $.btX('/img', img) )
    
    
        y += 220
    
    
    })
}



TWEEN=function(a){
    st=$St(500,500)
    st.mug(function(bm){
        b = bm
        TR(bm)
        $Tw(
            [ bm, 'l' ],
            { x:0, sxy:.7, r:0 },
            [ {x:300,sxy:2.3,r:0}, 1000 ],
            [ {x:0,sxy:.7,r:-30,a:.5}, 3000 ]
        )
    })
    
    st.mug(function(bm){

        bm.TR()
        $Tw([bm,'l'],
            {x:0,sxy:.7,r:-2},
            [{x:300,sxy:2.3,r:0,a:.2,kx:60},3000],
            [{x:320,a:1,sxy:2,r:-1},1000],
            [{rx:100},1000],
            [{ry:100},1000],
            [{r:50,x:1400,y:300},3000],
            [{r:200,x:1000,y:200,sxy:1},3000],
            [{r:100,x:300, ky:-100},1000],
            [{rx:30,ry:30, r:150,x:500 },2000],
            [{rx:20,ry:50,r:100,x:500,kx:300 },2000],
            [{kxy:0,x:320,y:0,rxy:0,sxy:2,r:-1},3000])



    })

   
    
    $.A('hahaahah')

}

SUIT=function(st){
    alert('mugCont')
    qu= new cjs.LoadQueue().complete(onMug)
        .manifest([{id:"mug", src:"/myMug" }  ])

    cont= $Ct()
    cont.flame=function(){
        cont.desuit()
        cont.A(

            cont.suit = cjs.container().bm('flame', function(flame){  })
        )
    }
    cont.uni=function(){
        cont.desuit()
        cont.A(

            cont.suit= cjs.container().bm('uni', function(uni){
                uni.x(200).y(200)
                cont.mug.sxy(.2).x(300)

            }))}
    cont.guy=function(){cont.desuit()
        cont.A(

            cont.suit= cjs.container().bm('guy', function(guy){

                guy.spin()
                cont.spin()

            })
        )}
    cont.desuit=function(){
        cont.mug.sXY(1).XY(200)
        if(cont.suit){
            cont.suit.remove()
            cont.suit=null
        }
    }
    function onMug(){
        mug = qu.getResult("mug")
        // cont.bData( mug )//.rgc('+')
        cont.A( cont.mug = $Bm(mug))
    }
    return cont
}

SPACE = function () {
    St().bgI('/space.jpg').mug(function (m) {
        m.sXY(.2).dg().RT().SL()
    })
}


SOLAR = function () {

    i =  cjs.DisplayObject.prototype
    i.warpX = function (low, high, cush) {
        var ob = this,
            warp = M.warp(low, high, cush)
        cjs.t(function () {
            ob.x = warp(ob.x)
        })

        return ob
    }//wrx
    i.warpY = function (low, high, cush) {
        var ob = this,
            warp = Math.warp(low, high, cush)
        cjs.t(function () {
            ob.y = warp(ob.y)
        })
        return this
    }//wry
    i.warp = function (n) {
        n = n || 0
        var stage = this.getStage()
        this.warpX(0, stage.W(), n)
        this.warpY(0, stage.H(), n)
        return this
    }//wr


    i.go = i.startMoving = function (x, y) {

        if (x) {
            this.vX(x)
        }
        if (y) {
            this.vY(y)
        }
        var ob = this
        T.on('tick', function () {
            ob.X(ob.X() + (ob.vx || 0))
            ob.Y(ob.Y() + (ob.vy || 0))
        })
        return this


    }
    cjs.bulletHit = function (bu, inWhat) { //used in solar
        var res

        res = M.pointInCircle(bu.cX(), bu.cY(), {x: inWhat.x, y: inWhat.y, radius: inWhat.H() / 2})

        if (res == true) {
            $l('hit!')
        }

        return res
    }
    i.bounce = function (n) {
        n = N(n) ? n : 0
        var ob = this, st = this.st(), h = st.H(), w = st.W()
        cjs.t(
            function () {
                var x = ob.x, y = ob.y
                if (x > w - ob.W() - n || x < (n )) {
                    ob.vX('-')
                }
                if (y > h - ob.H() - n || y < (n )) {
                    ob.vY('-')
                }
            })
        return st
    }
    i.vX = function (a) {
        var g = G(arguments);
        a = g[0]

        if (g.p) {
            this.vx = this.vx + a;
            return this
        }

        else if (g.n) {
            if (N(a)) {
                this.vx = this.vx - a
            }

            else {
                this.vx = this.vx * -1
            }
            return this
        }
        else if (U(g[0])) {
            return this.vx
        }
        this.vx = a;
        return this
    }
    i.vY = function (a) {
        var g = G(arguments);
        a = g[0]
        if (g.p) {
            this.vy = this.vy + a;
            return this
        }
        else if (g.n) {
            if (N(a)) {
                this.vy = this.vy - a
            }
            else {
                this.vy = this.vy * -1
            }
            return this
        }
        else if (U(g[0])) {
            return this.vy
        }

        this.vy = a
        return this
    }
    i.vXY = function (x, y) {return this.vX(x).vY(y)}

    z();
    st = $St(1000, 500).bgI('/space.jpg')

    st.bm('guy', function (bm) {
        guy = bm
        bm.dg()
        bm.vXY(_.random(10) + 1, _.random(10) + 1).XY(_.random(800), _.random(600))
        bm.startMoving()
        bm.warp()
        st.bm('sun', 0.2, function (bm) {
            sun = bm
            bm.dg()

            bm.startMoving(4, 10)
            bm.warp()
            _.ev(.1, function () {
                if (cjs.bulletHit(sun, guy)) {
                    sun.sXY(sun.scaleX + .1, sun.scaleY + .1)
                    sun.vx += .2;
                    sun.vy += .2
                }
            })
        })
    })

    st.mug(0.4, function (bm) {
        bm.X(400).dg().bounce(0)
        bm.startMoving(10, 10)
    })


}
HIT = function () {
    St()

    st.mug(function (mug) {
        mug.dg()

        st.bm('flame', function (flame) {
            b = flame
            b.dg()

            b.sXY(.1)
                .rXY(flame.getBounds().width / 2, 500).XY(400, 400)

            //st.$$(  function(e){flame.x= e.rawX;  flame.y= e.rawY  })
            st.MD(function (e) {
                localCoords = mug.globalToLocal(e.rawX, e.rawY)
                hit = mug.hitTest(localCoords.x, localCoords.y)
                if ($l(hit)) {
                    $l('hit');
                    st.bgC('red')
                } //;$l( e.X+ ' '+ e.Y )
                else {
                    $l('no hit');
                    st.bgC('yellow')
                }
            })

            st.MM(function (e) {
                localCoords = mug.globalToLocal(b.x, b.y)
                hit = mug.hitTest(localCoords.x, localCoords.y)
                if (hit) {  //$l('HIT: '+ e.rawX+ ', '+ e.rawY);
                    st.bgC('red')
                }
                else {
                    $l('NO HIT');
                    st.bgC('yellow')
                }
            })
        })
    })
}

UNIVERSE = function () {

    $addGuy = function (un) {
        $mug(un, function (bm) {
            bm = new cjs.Bitmap(bm)
            uni.A(bm);
            $GUYS.push({

                un: un,

                bm: bm.rC().XY(600).sXY(.4)
            }) // bitmap.o('$$', function(bm){   bm.XX(); k.emit('X', _username) })
        })
    }
    $getGuy = function (un) {

        var targetGuy = false //  finds a guy({un, bm}) in $GUYS array from a un ( rets false if he aint there) //alpha: can accept ob received on guyUpdates ({un, x, y})//can pass the string or also an ob with 'un' property
        if (O(un)) {
            un = un.un
        }

        _.e($GUYS, function (guy) {
            if (un == guy.un) {
                targetGuy = guy
            }
        })
        return targetGuy
    }
    $getGuyNotMe = function (un) {
        var guy = $getGuy(un)
        if (guy && guy.un != _username) {
            return guy
        }
    }
    $Bub = function (t, x, y) {
        var g = G(arguments), ct = $Ct()
        text = g[0] || 'hi!';
        x = g[1] || yourBm.x;
        y = g[2] || yourBm.y
        uni.A(ct);
        
        ct.h().cir({c:'w', r:120, x:x - 250, y:y - 250, r1:50})
        ct.h().cir({c:'b', r:30, x:x - 120, y:y - 120, r1:30})
        ct.h().cir({c:'g', r:20, x:x - 80, y:y - 80})

	    
       ct.text = function (t, f, c, x, y) {
            var ct = this, o, cX, st = this.getStage()

            cX = st.cen().x

            o = (N(x) && U(y)) ? {y: x, x: cX} :
                U(x) ? {x: cX, y: 100} : {t: t, f: f, c: c, x: x, y: y}

            var t = cjs.T(o.t, o.f, o.c, o.x, o.y)
            ct.A(t)
            return t
        }
        ct.text(t, "20px Arial", "blue", x - 300, y - 300)


        $Tw(ct, [{a: 0, sxy: .1, x: x - 250, y: y - 250}, 20000])
        _.in(10, function () {
            ct.rm()
        })
        if (g.p) {
            k.emit('bub', {
                t: t,
                x: x,
                y: y,
                u: _username
            })
        }
        return ct
    }
    z();
    n = 0;
    
    $GUYS = []
    
    k.on('bub', function (bub) {
        var guy;
        if (guy = $getGuy(bub.u)) {
            $Bub(bub.t, bub.x, bub.y)
        }
    })
    
    k.on('updateGuy', function (user) {
        var guy
        if (user && (guy = $getGuyNotMe(user.un))) {
            guy.bm.XY(user.x, user.y)
        }
    })
    
    
    k.on('inviteAccepted', function (invite) {
        if (_username == invite.from) {
            $addGuy(invite.toWho)
        }
    })
    
    
    k.on('newInvite', function (d) {
        var popD, pop, title, ya, na;
        if (_username != d.toWho) {
            return
        }
        title = $.h1('chat with ' + d.from + '?')
        ya = $.bt('ya', function () {
            pop.modal('hide')
            $addGuy(d.from)
            k.emit('acceptInvite', {from: d.from, toWho: _username})
        })
        na = $.bt('na', function () {
            pop.modal('hide')
        })
        popD = $.d()
        pop = $.pop(popD)
        $mug(d.from, function (mug) {
            popD.A($.i(mug).WH(200, 200), title, ya, na)
        })
    })
    
    uni = $St(1000, 800);
    
    uni.bgI(R(2) ? '/beach.jpg' :
            R(4) ? '/space.jpg' :
                '/chicks.png')

    uni.mug(function (b) {
        if (O(b)) {
            yourBm = b.dg().rC().XY(600).sXY(.4)
        }
        $GUYS.push({un: _username, bm: yourBm})
        b.$$(function () {
            b.rm();
            k.emit('X', _username)
        })
        page = $.d('b', 1000, 'auto').A($.br(3))
        page.A(chatMessageInputTextBox = $.ip('...', 'tx').id('textinput'),
            chatSendButton = $.bt('send', function () {
                $Bub($('#textinput').V(), '+')
            }))
        $.eG('users', function (user) {
        
            if (user.mug) {
            
                var mugInviteBt = $.i(user.mug).WH(100)
        
                mugInviteBt.$(function () {
                    k.em('sendInvite', {from: _username, toWho: user.un})
                });
        
                page.A(mugInviteBt)
            }
        })
        _.ev(.1, function () {
            k.em('myUpdate', {un: _username, x: yourBm.x, y: yourBm.y})
        })
    })
    
    
}



CHAT = function () {

    $CHATS = {}
    k.on('ChatRmMs', function (d) {
        if ($CHATS[d.rm]) {
            $CHATS[d.rm].write(d.un + ': ' + d.ms)
        }
    })
    k.on('rmUd', function (d) {
        if ($CHATS[d.rm]) {
            $CHATS[d.rm].updateUsersDiv(d.users)
        }
    })
    chatMenu$ = $.d('g', 200, 200, '+').dg().left(400).WH('auto').pad(10)
    chatMenu$.A($.ChatBt('general'), $.ChatBt('fun'), $.ChatBt('sexy'),
        inputMs = $.ip().K('form-control'),
        $.bt('private room', function () {
            $.chat(inputMs.v())
        }).mar(40))
}
USERS = function () {

    d = $.Ct().A(
        $.R(),
        $.h1('users'),
        $.d('y').id('ct').A('users will go here via ajax in a moment...', $.br(2))
    ).C('r')


    //i = 0

    $.G('users', function (u) {
        d.E();
        _.e(u, function (u) { //$l(u.username + '-' + i++)

            d.A(
                $.dK("col-xs-6 col-sm-3 col-md-2 col-lg-2").A($.user(u))
            )

        })
    })

}
PACK = function(){
    stage = $St(800)
    //stage.op(.7)
    sprite = $sprite(Pack).XY( 200, 260 ).sXY(1.2).drag()
    stage.A(sprite)
    //.rgc()
    sprite.framerate=6
    sprite.play()
}


BOD=function(){z()
    s = $St(800, 800).A(
        b1=Bod1(),
        b2=Bod2().XY(300),
        cyc=Cycle( 500) ,
        f = Flame( 200)
    )


    function Cycle(x,y,rt){


        ct= $Ct().mug(function(mug){mug.sXY(.4)
            ct.bm('uni', function(b){
                b.sX(-.8).XY(-20,200).rXY(240,80)
                b.n('uni')
                cjs.TR(mug, ct)
                cjs.RT(b, ct)
            })})

        if(N(x)){ct.X(x)}
        if(N(y)){ct.Y(y)}
        if(N(rt)){ct.rt(rt)}
        return ct
    }
    function Flame(x,y){var c
        c= $Ct().dg()
        c.bm('flame', function(b){
            tweens.shakeY(b)
            c.mug(function(b){
                b.rC()
                tweens.shakeX( tweens.rott(b) )
                c.bm('flame', tweens.shakeX)
            })

            c.$$(function(){
                c.bm('flame', function(b){tweens.prod1(b.sXY(.2))})
                c.bm('flame', function(b){tweens.prod2(b.sXY(.2))})
            })
        })
        if(N(x)){c.X(x)}
        if(N(y)){c.Y(y)}
        return c}
    function Bod1(){

        var  outerCont = $Ct().dg()

        var  innerCont= $Ct()


        outerCont.A( innerCont )

        outerCont.mug(

            function(m){
                m.sXY(.4)

                cjs.bindSlide(m, outerCont)


                outerCont.bm('arm', function(b){
                    b.name = 'arm'
                    b.sX(-.8).XY(140,100).rXY(200,80)
                    cjs.bindRotate(b)
                    b.$$(function(){  tweens.rpunch(b)  })
                })


                innerCont.XY(40, 120).rXY(40, 100)
                innerCont.bm('uparm', function(b){
                    b.sX(.8).XY(80,180).rXY(200, 80)
                    cjs.bindRotate(b, innerCont)
                })
                innerCont.bm('forearm',  function(b){
                    b.name='lf'
                    b.XY(-100,140).sX(.8).rXY(20,120)
                    cjs.bindRotate(b)
                    innerCont.$$(  function(){tweens.lpunch(b)})
                })})

        return b=outerCont



    }
    function Bod2(x,y){

        var c1=$Ct(), cL=$Ct()

        c1.mug(function(m){   SL(m.sXY(.4), c1) })

        c1.bm('arm',function(b){  b.sX(-.8).X(140).Y(100).rX(200).rY(80)
            RT(b); b.$$( function(){tweens.rpunch(b)})})

        cL.bm('uparm', function(b){
            RT(b, cL)
            b.sX(.8).XY(80,180).rXY(200,80)
            cL.$$(function(){tweens.lpunch(cL)})
            cL.XY(140,100).rXY(100, 100)})
        cL.bm('forearm', function(b){ b.name = ('lf')
            b.sX(.8).XY(-100, 140).rXY(20,120)
            RT(b)})
        return c1.A(cL)
    }

}
moree()
function moree(){
    INDEXX = function () {
        z()
        s = $.dragStage().bm('me', function (bm) {
            b = bm
            SL(b)

            _.t(10, function () {
                s.bm('guy', SL)
            })

            s.ch(b, 3)
        })
    }
    CARD = function () {

        var t = 100, d


        card = function (a, b) {
            d = $.dA('y', 300)//.cen()
            d.$$(function () {
                d.rm()
            })
            if (O(a)) {
                d.A($.h3(a.u || 'anon'), $.i(a.m || 'me'))
            }
            else {
                d.A($.h3(a || 'anon'), $.i(b || 'me'))
            }
            d.WH(200)
        }

        cards = function () {

            $.get('/users', function (u) {
                _.e(u, function (u) {
                    $.P('/getImageById', u.m, function (mug) {
                        d = $.dA('r', '+').lt(t)
                        d.A($.h2(u.u), $.i(mug).WH(200, 300))
                        t += 20
                    })
                })
            })
        }
    }
    SELECTED = function () {

        selected=function(bm){

            SL(bm)
            bm.$(function(){
                cjs.Tween.removeAllTweens()
                bitmap=bm
                cjs.scaleShake(bm.dO)
            })
        }

        TextAdder=function(stage){

            var f= $.f().a().C('x').P(10).W(300).dg()

            f.A(
                $.ip().id('text'),
                $.bt('for text',   function(){var  _text,theText,val = $l( $('#text').val()  )
                    $('#text').val('')
                    _t = $T(val,'w', 30, 100, 10)
                    t=  $Ct().A( _t )
                    t.dO = _t
                    SL(t)
                    st.A(t)
                    selected(t)
                }))

            return f
        }
        TextAdder2=function(stage){

            var form= $.f().C('x').P(10).W(300).dg()

            form(

                $textInput().id('text'),

                $.bt(  'for text',   function(){
                    var val = $l( $('#text').val()  )

                    $('#text').val('')

                    var theText= EaselText(val,'w', 30, 100, 10)
                    SL(theText)


                    stage.a( theText )


                }))

            return form }

        z()
        st = $.dragStage()
        st.bm('coin', function (bm) {
            coin = bm;
            SL(coin)
            selected(bm)

        })
        st.bm('sun', function (bm) {

            sun = bm;
            SL(bm)
            selected(bm)

        })
        TextAdder(st)
        st.bm('me', function (bm) {

            me = bitmap = bm
            SL(bm)
            bm.rgc('+')
            cjs.scaleShake(bm)
            //rotateShake(bm)
            selected(bm)
            st.bm('flame', function (bm) {
                flame = bm;
                SL(bm);
                selected(bm)
            })
            st.bm('guy', function (bm) {
                guy = bm;
                SL(bm);
                selected(bm)
            })

        })
        d = $.d('y', '+')
        loadImagesDiv = function () {
            d.E()
            $.eG('img', function (img) {
                d.A(
                    $.imageSizeFuncCan(
                        img.d, 1, function () {
                            st.bm(img.d, function (bm) {
                                SL(bm.sXY(.4));
                                bm.rgc('+');
                                selected(bm)
                            })
                        })
                )
            })
        }

        loadImagesDiv()
        d = $.dA('y', 500).A(
            $.bt('freeze', cjs.Tween.removeAllTweens),
            $.bt('right', function () {
                bm.x(bm.x() + 10)
            }),
            $.bt('left', function () {
                bm.x(bm.x() - 10)
            }),
            $.bt('up', function () {
                bm.y(bm.y() - 10)
            }),
            $.bt('down', function () {
                bm.y(bm.y() + 10)
            }),
            $.br(),
            //fix
            $.bt('bigger', function () {
                bm.sXY(1.1, '*')
            }),
            $.bt('smaller', function () {
                bm.sXY(.9, '*')
            }),
            //
            $.bt('wider', function () {
                bm.sx(bm.sx() * 1.1)
            }),
            $.bt('thinner', function () {
                bm.sx(bm.sx() * .9)
            }),
            $.bt('taller', function () {
                bm.sy(bm.sy() * 1.1)
            }),
            $.bt('shorter', function () {
                bm.sy(bm.sy() * .9)
            }), $.br(),
            $.bt('CW', function () {
                bm.rt(bm.rt() + 10)
            }),
            $.bt('CCW', function () {
                bm.rt(bm.rt() - 10)
            }),
            $.br(),

            $.bt('get index', function () {

                pop('index: ' + st.ix(bm))

            }),


            $.bt('set index to 3', function () {

                st.ix(bm, 3)
                pop('index: ' + st.ix(bm))

            }),


            $.bt('z-up', function () {

                st.ix(bm, st.ix(bm) + 1)

            }),

            $.bt('z-down', function () {
                st.ix(bm, st.ix(bm) - 1)
            }),

            $.bt('remove', function () {

                st.rm(bm)

            }),
            $.bt('clone', function () {
                st.A($Ct().A(bm.ob.clone()))
            }), $.br(),
            $.bt('save', function () {
                st.sv(function () {
                    loadImagesDiv()
                })
            }),
            $.bt('paint', function () {
                stagePainter(st)
            }),
            $.bt('', function () {
            })
        )


    }
    TRANSFORM = function () {
        $.fm()

        s=$St()

        s.mug(function (b) {
            st = s
            b.XY(0, 0)
            b.rgc('+')
            TR(b)

            s.mug(function (b) {
                b.XY(50, 50).rgc('+');
                TR(b)
            })
            /*
             wMb(function (b) {
             b.XY(100, 100).rgc('+');
             TR(b)
             }, s)
             wMb(function (b) {
             b.XY(200, 200).rgc('+');
             TR(b)
             }, s)
             wMb(function (b) {
             b.XY(300, 300).rgc('+');
             TR(b)
             }, s)
             wMb(function (b) {
             b.XY(400, 400).rgc('+');
             TR(b)
             }, s)
             wMb(function (b) {
             b.XY(150, 150).rgc('+');
             TR(b)
             }, s)
             wMb(function (b) {
             b.XY(250, 250).rgc('+');
             TR(b)
             }, s)
             wMb(function (b) {
             b.XY(350, 350).rgc('+');
             TR(b)
             }, s)
             */

        }, '-')


        s1.A($.bt('rotate', function () {
                s.ch('-')
                s.mug( function (b) {s.M(50); //b=Do(bj(b))
                    RT(b.XY(400))
                    s.mug(function (b) {
                            b.XY(300).al(.5)
                            RT(b, '-')
                        }
                    )
                    s.mug(function (b) {
                        KK(b.XY(200).sXY(1.4), '+')
                    })
                    s.mug(function (b) {
                            KK(b.XY(100).sXY(.6))
                        }
                    )
                })
            }), $.br(2),



            $.bt('skew', function () {

                s.ch('-')

                s.mug(function (b) {
                    s.mug(function (b) {
                        SK(b.XY(300).rgc('+').sXY(1.5))
                        s.W(2000).H(2000)
                    })
                    //b.XY(500,400).rgc('+').sXY(1.5);RT(b);SK(b)
                })
            }), $.br(2),
            $.bt('register', function () {

                s.rm()

                s.mug(function (b) {
                    TR(b);
                    rg1(b);
                    reggy(b)
                })

                s.mug(function (b) {
                    TR(b);
                    b.rgc();
                    rg1(b);
                    reggy(b)
                })
            }),
            $.br(2))
    }
    SHOWCASE = function () {
        $.fm()
        s2.A(
            $.sp('pics!').id('pics')
        )
        s2.A(x = $.c('y', 500, 500))
        //x.q.cen()
        $.eG('img', function (v) {
            $.c().fit(v.d, 1)

            x.X()
            url$ = v.d
            x.fit(v.d)

            $('#pics').A(x)

        })
        s2.A(
            $.br(2), $.lb('caption'),
            cap$ = $.ip().W(500)
        )
        s1($.br(2), $.lb('category'),
            cat$ = $.ip().W(200), $.br(2),
            $.bt('post', function () {
                o = {t: cat$.V(), c: cap$.V(), du: url$}
                $.P('pst', o, function () {
                    $.pop('posted')
                })
            }), $.br(2),

            $.bt('make a showcase', function () {
            }), $.br(2),
            $.bt('submit to ranky', function () {
            }), $.br(2)
        )

    }
    CHAN = function () {
        $CHAN={}
        $.btEm = function (t, toEmit) {
            return $.bt(t, function () {
                k.em(toEmit || t)
            })
        } //a button that emits!
        $.dA().A(
            $.btEm('msg', 'chat'),
            $.bt('room', function () {
                Y.chan('chat', function () {
                    $l('chat')
                }).on('al', pop)
            })
        )//.lt(300)
        k.on('newChat', function (d) {
            CH.bc(d.n + ': ' + d.m)
        })
        k.on('youChat', function (d) {
            CH.s(d.n + ': ' + d.m)
        })

    }
    POSTS = function () {
        $.fm()

        s1.A(
            dd = $.inputBox({
                boxTitle: 'new post',
                url: '/pst',
                btT: 'post',
                func: function () {
                    Y.run('home')
                },
                inputType: 'textAndTextArea'
            }),


            $.h2('attach:'),


            $.bt('pic', function () {

                m = $.pop(ps = $.d().A($.h3('pic select')))
                $.getJSON('/img', function (pics) {

                    _.e(pics, function (p) {
                        ps.A($.i(p.d).WH(40, 40).$(function () {
                            attached.E($.i(p.d).WH(20, 20))
                            m.modal('hide')
                        }))
                    })
                })
            }),

            attached = $.d().A()
        )


        tab2 = [

            'buds',

            function () {
                TABS.E($.h1('bud posts'))
            }

        ]


        tab1 = ['all',

            function () {

                TABS.E($.h1('public posts'))

                $.eG('/psts',

                    function (i) {

                        $.blp(i, TABS, '-')

                    })

            }
        ]


        tab3 = $.tab('user', function () {
            u = $w['from'] || 'a'


            s1.E(
                $.sp('topics: '))

            TABS.E(
                $.h1('user ' + u + ' blog'))


            $.eG('/pstu', {u: u}, function (i) {
                $.blp(i, TABS, '+')
            })
        })


        tab4 = $.tab('topic', function () {
            TOPIC = $w['topic'] || 'fantasy'
            TABS.E(h1('posts on ' + TOPIC + ' topic'))
            $.eG('/pstt', {t: TOPIC}, function (i) {
                blp(i, TABS, '/')
            })
        })

        tab5 = ['yours',

            function () {

                TABS.E($.h1('your posts'))

                $.eG('/pst', function (i) {
                    $.blp(i, TABS, '+')
                })

            }]


        s2.A(
            t = $.tabs(tab1, tab2, tab3, tab4, tab5))

        t.load()

    }
    PROFILE = function () {
        $.boot = function () {
            z();

            var r = $.R()
            _.e(arguments, function (g) {
                r.A(g)
            })
            return ct = $.Ct().A(r)
        }

        $.boot(
            $.h1('you got a profile?'),
            $.d().id('content'),
            f = $.f().C('r').WH(400).A(
                $.d().A(
                    $.lb('about me'),
                    $.ta().id('aboutMe')),
                $.d().A(
                    $.lb('i enjoy'),
                    $.ip().id('iEnjoy')),
                $.d().A(
                    $.lb('i seek'),
                    $.ip().id('iSeek')),
                $.sm('save profile'),
                $.bt('undo', function () {
                    if (p) {
                        $('#aboutMe').val(p.aboutMe)
                        $('#iEnjoy').val(p.iEnjoy)
                        $('#iSeek').val(p.iSeek)
                    }
                }),
                $.bt('clearr', function () {
                    $('input').val('')
                    $('#iEnjoy').val('')
                    $('#iSeek').val('')
                })
            ))

        $.P('getMyProfile', function (pf) {


            if (pf) {
                $l('found profile -> _pf')
                _pf = pf
                $('#aboutMe').v(pf.aboutMe)
                $('#iEnjoy').v(pf.iEnjoy)
                $('#iSeek').v(pf.iSeek)
            }

            else {
                $l('no profile found')
            }

        })


        $('form').submit(function (e) {
            e.preventDefault()

            var data = {
                aboutMe: $('#aboutMe').v(),
                iEnjoy: $('#iEnjoy').v(),
                iSeek: $('#iSeek').v()
            }

            $.P('myprofile', data, function () {

                $l('P(mypf)')
                $.P('getMyProfile', function (pf) {
                    _pf = pf
                    $l('getMyProfile -> _pf')
                })
                $l('form data submited..')
            })

        })


    }
    USER = function (a) {
        $.fm()
        //problem: click on a user.. creates a NEW USER?

        if (U(username = _pam || a)) {
            $l('username undefined.  default to -> a');
            username = 'a'
        }


        $.G('user/' + username, function (u) {
            s1.A(
                $.h1(u.username),
                $.i(u.mug).WH(100),
                $.h4(u.status),
                statusSpan = $.sp(),
                i = $.i(),
                messageTextarea = $.ta().C('w', 'z')
                // $chatButton( _pam,  messageTextarea)
            )
        })

        tab1 = $.tab('profile', function () {
            TABS.E();
            $.pf(_pam, TABS)
        })

        tab2 = $.tab('pics', function () {
            TABS.E().A('hahaha')
            $.eG('images/' + _pam, function (i) {
                TABS.A($.i(i.d).WH(100))
            })
        })


        tab3 = $.tab('blog', function () {
            TABS.E()
            $.eG('/pstu', {u: username}, function (i) {
                $.blp(i, TABS, '+')
            })
        })


        /*
         tab4= $.tab('buds',function(){ TABS.E() })
         tab5= $.tab('groups',function(){ TABS.E() })


         tab6= $.tab('email', function(){
         //TABS.E( messageTextarea=$textarea().c('w','z'),btMail(messageTextarea,u)  )
         from = _pam
         var messageTextarea = $.textarea()
         _$username = window['from'] || 'b'

         TABS.E()(
         $.h1('convo with '+u),
         $.h1('Messages'), $.br())
         $.eG('gMsgW', { u: _$username }, function( m ){var c
         c = $.c('X', 100)
         $.P('mug', {u: m.fr}, function(mug){ c.fit(mug) })
         TABS.A(
         $.R().A(
         $.Cl(2,c),
         $.Cl(10,
         $.h6('from: ' + m.fr),
         $.h4($.dt( m.dt ).dt()).K('pull-right'),
         $.h5(m.m))
         ),
         $.hr()
         )})
         TABS.A(
         messageTextarea,
         $.bt('new message', function(){$.P('sMsg' , {m: messageTextarea.V(), to: from})}), $.br(2))
         })
         */
        tabs = $.tabs(tab1, tab2, tab3//,tab4,tab5,tab6

        )


        s2.A(tabs)

        tabs.load()

    }
    STATUS = function () {
        $.fm()

        s1.A(
            $.h1('status'),
            $.ip().id('statusInput'),
            $.bt('update', function () {
                $.P('status',
                    {text: $('#statusInput').v()}, function () {
                        $l('status updated')
                    })
            }))
    }
    MESSAGES = function () {
        $.fm()  //is TABS never set? -- its the content holder for the panes!!
        tab1 = ['received', function () {
            TABS.E($.h1('Messages'), $.br())
            $.eG('gMsg', function (m) {
                TABS.A(
                    $.R().A(
                        //c1 = function(m){return cx().bc('-').Z(1).mug(m)}
                        $.Cl(2, $.c('X', 100, 100).mug(m.fr)),
                        $.Cl(10, $.bt(m.fr, function () {
                                from = m.fr;
                                tab3.load()
                            }),
                            $.h4(dtt(m.dt)).K('pull-right'),
                            $.h5(m.m))
                    ),
                    $.hr()
                )
            })
        }, '*']
        tab2 = ['sent', function () {
            TABS.E(
                $.h1('Messages'),
                $.br())

            $.eG('/MsgS', function (m) {
                mm = m;
                var ms = $('<textarea>'),
                    c = $.c('X', 100, 100)
                $.P('mug', {u: m.to}, function (mug) {
                    c.fit(mug)
                })
                TABS.A($.R().A($.Cl(2, c),
                    $.Cl(10,
                        $.bt('to: ' + m.to, function () {
                            from = m.to;
                            tab3.load()
                        }),
                        $.h4(dt(m.dt).dt()).K('pull-right'),
                        $.h5(m.m)
                    )), $.hr())
            })
        }]
        tab3 = $.tab('convo', function () {
            var ms = $.ip()
            u = window['from'] || 'b'
            TABS.E($.h1('convo with ' + u), $.h1('Messages'), $.br())

            $.eG('gMsgW', {u: u}, function (m) {

                var c = $.c('X', 100, 100)
                $.P('mug', {u: m.fr}, function (m) {
                    c.fit(m)
                })
                TABS.A($.R().A(
                        $.Cl(2, c),
                        $.Cl(10,
                            $.h6('from: ' + m.fr),
                            $.h4(dt(m.dt).dt()).K('pull-right'),
                            $.h5(m.m))),
                    $.hr()
                )
            })
            TABS.A(ms, $.bt('new message', function () {
                $.P('sMsg', {m: ms.V(), to: from})
            }), $.br(2))
        })
        tab4 = ['requests', function () {
            TABS.E($.h1('Buddy requests'), $.br())
            //buddy requests
            $.eG('gRq', function (msg) {
                TABS.A($.d().A(
                    $.h6('from ' + msg.fr + ' on ' + msg.dt),
                    $.h5(msg.m),
                    $.bt('accept', function () {
                        $.P('yRq', {u: msg.fr})
                    }),
                    $.bt('deny'),
                    $.hr()
                ))
            })
        }]
        s2.A(t = $.tabs(tab1, tab2, tab3, tab4))
        t.load()
    }
    SORTY = function () {
        $.fm()
        /*
         s1.A(
         $.h1('your sorts'),
         $.d().WH('auto').A($.h1('new sort'), textInputSpan('post','/srt') ),
         $.h4('recent: ')
         )
         */
        $.eG('/srt', function (t) {
            d1.A($.bt(t.t, function () {
                sorty(t.t)
            }), $.br(2))
        })
        s2.A($.i('me'))
    }
    MANIFEST = function () {
        s = cjs.S()


        Q(['me', 'guy'], function (q) {


            s.A(me = q.bm('me'))

            s.A(guy = q.bm('guy'))


            guy.drag()

        })


    }
    MUGTX = function () {
        z()
        $.h1('testing myMug ...').A()
        $.get('/myMug', function (data) {
            z()
            $.h1('in callback..').A()
            $.img(data).A().C('black').drag()
        })
    }
    MUGBYUNTX = function (username) {
        z()
        username = username || 'ss'
        $.h1('testing mugByUsername ...').A()
        $.get('/mugByUsername/' + username, function (data) {
            z()


            $.h1('in callback..').A()

            $.img(data).A().C('black').drag()

        })
    }
    DFMGTX = function () {
        z()
        $.i(defaultMug).A()
    }
    CHANGEMUGTX = function () {
        //it automatically changes your userMug to the defaultMug
        $.post('/changeMug', {url: defaultMug},
            function () {
                z()
                TWEEN()
            })
    }
    FMTX = FORMATTX = function () {
        z()
        $.fm()
        s1.A($.imgResponsive('chicks'))
        s2.A($.i('me'), $.i('guy'))
    }
    PROMOTE = function () {
        z()

        cjs.utils()

        function ClassA(name) {
            this.name = name
        }

        ClassA.prototype.greet = function () {
            return "Hello " + this.name
        } //a = new ClassA('john')

        function ClassB(name, punctuation) {

            this.ClassA_constructor(name)

            this.punctuation = punctuation
        }

        cjs.extend(ClassB, ClassA)


        ClassB.prototype.greet = function () {

            return this.ClassA_greet() + this.punctuation

        }

        cjs.promote(ClassB, "ClassA")

        b = new ClassB("World", "!?!")

        $l(b.greet())  // Hello World!?!


    }
    TWOSTAGES = function () {
        z()


        $.hdr().K("EaselJS").A(
            $.h1('nextStage'),
            $.p("This is an example")).A()


        c1 = $.c('y', 540, 260).id('canvasOne').P('a').top(0)
            .right(0).bor('1px solid grey').A() // background: 'none',

        c2 = $.c('o', 540, 260).id('canvasTwo').P('a').left(0).bottom(0).bor('1px solid grey').A()// background: 'none'
        $.div(960, 400).K("canvasDiv").P('relative').A(c1, c2).A()

        bottomStage = stageSetup("canvasOne", handleEvt).N("bottomStage").eMO().A(makeSquare(30, 95, "red", handleEvt))
        //bottomStage.enableDOMEvents(false);	// you can set this if the bottom stage is completely covered by the top stage, to reduce the number of active event listeners.
        bottomStage.text = new cjs.Text("", "15px monospace", "#111").XY(195, 30).lineH(16.7).a2(bottomStage)


        topStage = stageSetup("canvasTwo", handleEvt)
            .N("topStage").eMO()
            .A(makeSquare(375, 30, "pink", handleEvt))
            .next(bottomStage)

        topStage.text = new cjs.Text("", "15px monospace", "#111").XY(30).lineH(16.7).a2(topStage)


        function stageSetup(canvasName, handler) {
            s = stage = new cjs.Stage(canvasName).tick()
            //stage.addEventListener("stagemousemove", handler);	// too noisy
            _.each(["stagemousedown", "stagemouseup", "mouseleave", "mouseenter"], function (ev) {
                s.on(ev, handler)
            })
            s.log = []
            return s
        }

        function makeSquare(x, y, color, handler) {
            var shape = cjs.shape().N('square').XY(x, y)
            shape.graphics.f(color).dr(0, 0, 135, 135)

            var cont = cjs.ct().N('container').A(shape)
            _.each(["mouseover", "mouseout", "dblclick", "click"], function (ev) {
                cont.on(ev, handler)
            })
            cont.cursor = "pointer"
            return cont
        }

        function handleEvt(evt) {
            var target = evt.target,
                stage = target.getStage(),
                log = stage.log

            log.push(evt.type + " on " + target.name + " x:" + evt.stageX.toFixed(0)
            + " y:" + evt.stageY.toFixed(0))

            while (log.length > 12) {
                log.shift()
            }

            stage.text.text = log.join("\n")
            if (evt.type == "mouseover") {
                target.alpha = 0.5
            }
            if (evt.type == "mouseout") {
                target.alpha = 1
            }
        }


    }
    TRANSF = function () {
        stage = St()

        degToRad = Math.PI / 180;


        //cjs.sharedCode()
        // cjs.utils()

        cjs.slider()


        stage.enableMouseOver();
        //cjs.Touch.enable(stage);
        stage.mouseMoveOutside = true;

        var img = new Image()
        img.onload = handleImageLoad;
        img.src = "/chicks.png";


        function handleImageLoad(evt) {

            var img = evt.target, imgWidth = img.width, imgHeight = img.height, sliceCount = 6;

            sliceWidth = imgWidth / sliceCount;
            sliceContainer = $Ct()
            sliceContainer.x = st.canvas.width / 2;

            for (var i = 0; i < sliceCount; i++) {
                var slice = $Bm(img)
                slice.sourceRect = new cjs.Rectangle(sliceWidth * i, 0, sliceWidth, imgHeight);
                slice.cache(0, 0, sliceWidth, imgHeight);
                slice.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix())];
                sliceContainer.A(slice);
            }

            slider = new Slider(0, 50, 200, 50).set({x: 20, y: 330, value: 25});
            slider.on("change", handleSliderChange, this);

            st.A(sliceContainer, slider);
            updateEffect(slider.value);
        }

        function handleSliderChange(evt) {
            updateEffect(evt.target.value);
        }

        function updateEffect(value) {
            var l = sliceContainer.getNumChildren();

            for (var i = 0; i < l; i++) {
                var slice = sliceContainer.getChildAt(i);
                slice.y = M.sin(value * degToRad) * -sliceWidth / 2;
                if (i % 2) {
                    slice.skewY = value
                }
                else {
                    slice.skewY = -value;
                    slice.y -= sliceWidth * M.sin(slice.skewY * degToRad);
                }
                slice.x = sliceWidth * (i - l / 2) * M.cos(slice.skewY * degToRad);
                slice.filters[0].matrix//.setColor(Math.sin(slice.skewY * degToRad) * -80);
                slice.ca()
            }

            st.u();
        }
    }
    DISTRACT = function () {
        z()



        $.d().A($.c(960, 400).id("testCanvas"))

        cjs.sharedCode()
        cjs.utils()
        cjs.slider()
        examples.showDistractor()
        st = new cjs.Stage("testCanvas")

    }
//awesome:
    WINDING = function () {
        cjs.Shape.prototype.same = function () {

            return $h(this)
        } //h.copy
        cjs.manifest = function (func) {

            var q = cjs.loadQueue()

            q.complete(
                function () {

                    func(function (getResult) {
                        return q.getResult(getResult)
                    })
                })

                .manifest([{
                    id: "chicks", src: "/chicks.png"
                },
                    {id: "me", src: "/me.png"},
                    {id: "guy", src: "/guy.png"},
                    {id: "sun", src: "/sun.png"}])
        }
        z()
        cjs.worldsMostInterestingShape = function () {
            var h = cjs.shape()
            h.graphics.f("pink").dr(20, 20, 450, 360)
                .arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
                .arc(330, 240, 110, 0, Math.PI * 2, true).closePath()

            return h
        }
        cjs.manifest(function (q) {
            $.hdr().A($.h1('grahics winding')).A()
            $.d().A($.c(960, 400)
                .id("testCanvas"))
            st = s = stage = $St(["testCanvas"])
            h = shape = cjs.worldsMostInterestingShape().a2(stage).drag()
            cjs.bm = function (img) {
                var g = G(arguments), img = g[0],
                    bm = new cjs.Bitmap(img)
                if (g.N) {
                    bm.rC()
                }
                return bm
            } //warning: can't yet change to $Bm!!
            bm = cjs.bm(q("chicks"), '-')
                .a2(s).X(470).drag()
            bm.mask = h.same().X(470)
        })

    } //Uncaught TypeError: Cannot read property 'image' of undefined
    POPSPIN = function () {
        z()
        angle = 0
        img = $.img('me', handleImageLoad)[0]
        function stop() {
            cjs.Ticker.removeEventListener("tick", tick)
        }

        function handleImageLoad() {
            canvas = $.c('p', 960, 400).id("testCanvas").A()
            stage = $St(canvas)
            stage.autoClear = true;

            bmp = new cjs.Bitmap(img)
                .rXY(img.width >> 1, img.height >> 1)
                .XY(canvas.W() >> 1, canvas.H() >> 1).sXY(0.1)
            stage.A(bmp).update();
            cjs.Ticker.timingMode = cjs.Ticker.RAF
            cjs.tick(tick)
        }

        function tick(event) {
            angle += 0.01
            var value = Math.sin(angle) * 360
            bmp.rt(value).sXY(value / 360)
            stage.update(event)
        }
    }
}

//uses mug?
SPRITE = function (sprite) {
    sprite = $sprite(sprite || SS).XY(10).dg()
    stage = $St('o', 400).dg()//.op(.7),
    stage.A(sprite)
    controls = {
        jump: function () {
            sprite.gotoAndPlay('jump')
        },
        explode: function () {
            sprite.gotoAndPlay('explode')
        },
        spin: function () {
            sprite.gotoAndPlay('spin')
        },
        stop: function () {
            sprite.stop()
        },
        play: function () {
            sprite.play()
        }
    }
    $.d('y', 460, 89).css({
        position: 'absolute',
        top: 200, left: 300,
        padding: 20, opacity: .9
    }).dg().A(
        $.sp(' '),
        $.bt('spin', function () {
            controls.spin()
        }), $.sp(' '),
        $.bt('jump', function () {
            controls.jump()
        }), $.sp(' '),
        $.bt('explode', function () {
            controls.explode()
        }), $.sp(' '),
        $.bt('play', function () {
            controls.play()
        }), $.sp(' '),
        $.bt('stop', function () {
            controls.stop()
        }), $.sp(' '),
        $.bt('meta', function () {
            SPRITE()
        })
    )
    s = sprite
    return controls
}
 