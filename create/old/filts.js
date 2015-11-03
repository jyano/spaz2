// filters are only displayed when the display object is cached
// later, you can call updateCache() to update changes to your filters
cjs.Filter.prototype.b=function(){
    var bd = this.getBounds()
    bd.w=bd.width
    bd.h =bd.height
    return bd}
cM = cjs.ColorMatrix.prototype
cM.s = function(s){
    this.adjustSaturation(s)
    return this
}
cM.c = function(c){
    this.adjustContrast(c)
    return this
}
cM.ch = function(c){
    this.adjustHue(c)
    return this
}
cM.b = function(c){
    this.adjustBrightness(c)
    return this
}
$cM=function(){  return new cjs.ColorMatrix() }
i.fl=function(fl,i){
    this.filters= this.filters ||[]
    if(U(fl)){return _.l(this.filters)}
    if(N(fl)){return this.filters[fl]}
    if(O(fl)){this.filters.push(fl)}
    if(O(i)){this.ca(i)}
    return this
}
i.Fl=function(fl,i){
    this.filters= this.filters ||[]
    if(U(fl)){return _.l(this.filters)}
    if(N(fl)){return this.filters[fl]}
    if(O(fl)){this.filters.push(fl)}
    if(O(i)){this.ca(i)}
    return this
}

$cF=function(a,b,c,d,e,f,g,h){
    return new cjs.ColorFilter(a,b,c,d,e,f,g,h)}
$cMF=function(cM){return  new cjs.ColorMatrixFilter(  cM  )  }
$bF=function(a,b,c,d,e){
    return new cjs.BlurFilter(a,b,c,d,e)}
$aF=function(a,b,c,d,e){
    return new cjs.AlphaMaskFilter(a,b,c,d,e)
}

$aMF=function(a,b,c,d,e){return new cjs.AlphaMapFilter(a,b,c,d,e)}
i.cF = function(a,b,c,d,e,f,g,h){
    var cf= $cF(a,b,c,d,e,f,g,h)
    this.filters = this.filters || []
    this.filters.push(cf)
    return cf
}
i.bF = function(a,b,c,d,e,f,g,h){var bf
    bf = new cjs.BlurFilter(a,b,c,d,e,f,g,h)
    this.filters = this.filters || []
    this.filters.push(bf)
    return bf
}
i.aF = function(a,b,c,d,e,f,g,h){var bf

    bf= new cjs.AlphaMaskFilter(a,b,c,d,e,f,g,h)
    this.filters = this.filters || []
    this.filters.push(bf)
    return bf
}
i.aMF = function(a,b,c,d,e,f,g,h){
    var bf= new cjs.AlphaMapFilter(a,b,c,d,e,f,g,h)

    this.filters = this.filters || []
    this.filters.push(bf)

    return bf
}
i.cMF = function(cM){var cf= new cjs.ColorMatrixFilter(cM)

    this.filters = this.filters || []
    this.filters.push(cf)
    return cf

}

//scott says ibbobb is a jason game


FILS=function(){Q(function(){s= $St().t()

    i = Q.i('me')
    b = s.qB( 'me', .8, '+')

    /////////////////////////
    //b._(150,200,'+').fl($cF(.5, 0, 0, 1 ), i)

    cM = $cM()

    cM.adjustBrightness(-400)

    //cM.adjustHue(-180)


    cM.c(80)

    //cM.c(-100)



    b._(400,200,'+').fl($cMF(cM),i)  //zW




    ///////////////////////



    // b._(20,200,'+').fl($bF(64,0,1),i)


//<- s._(b, 189, 20).fl(zWF).ca(0, 0, i.width, i.height)// b._(189, 20).a2(s).fl(zWF).ca(0, 0, i.width, i.height)

    // s.h(10).mt(200, 0).lt(200, 400).mt(0, 200).lt(400, 200).Ds()



})}
BLF1=function(){
    /*This example demonstrates revealing an image using another image as the
     mask. The mask is created by drawing a
     shape, and then caching the shape to make an image with an alpha
     channel. It is then applied to the image as
     an mask using the <code>AlphaMaskFilter</code> filter. Another copy of
     */

    st = $St()

    var isDrawing
    $.i('me', function(img){//examples.hideDistractor();//cjs.Touch.enable(st)
        i=img[0]
        h = $H().a2(st)
        bm = new cjs.Bitmap(i)
        bl = new cjs.Bitmap(i)


        bl.filters = [
            new cjs.BlurFilter(24,24,2),
            new cjs.ColorMatrixFilter( new cjs.ColorMatrix(60) )
        ]

        bl.cache(0,0,960,400)
        //t.text = "Click and Drag to Reveal the Image.";
        st.A(bl, t, bm)
        updateCacheImage(false)
        st.A(cu = $H('r').dc(25))

        cu.cursor="pointer"

        st.enableMouseOver()

        st.on("stagemousedown",function(e) {
            oldPt = new cjs.Point(st.mouseX, st.mouseY);  oldMidPt = oldPt;  isDrawing = true;  })

        st.on("stagemouseup", function  (e){
            updateCacheImage(true);isDrawing = false})

        st.on("stagemousemove",function  (e) {var midPoint
            cu.x = st.mouseX;  cu.y = st.mouseY;
            if (!isDrawing) {st.u();return;}
            midPoint= new cjs.Point(oldPt.x+st.mouseX>>1, oldPt.y+st.mouseY>>1)
            h.graphics.ss(40, "round", "round")  //$l(midPoint.x+', '+midPoint.y+', '+oldPt.x + ',' + oldPt.y+', '+ oldMidPt.x + ', ' + oldMidPt.y)
            h.graphics.s("rgba(0,0,0,0.2)").mt(midPoint.x, midPoint.y).curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
            oldPt.x = st.mouseX; oldPt.y = st.mouseY;
            oldMidPt.x = midPoint.x; oldMidPt.y = midPoint.y;
            updateCacheImage(true)
        })
    })


    function updateCacheImage(upd){

        if (upd) {h.updateCache()}
        else {h.ca(0, 0, i.width, i.height)}
        mskF = new cjs.AlphaMaskFilter(st.cacheCanvas)
        bm.filters = [mskF]
        if (upd) {bm.ca(i)}
        else { bm.ca(i)}
        st.u()
    }
}


st.mX=function(){return this.mouseX}
st.mY=function(){return this.mouseY}
st.m = function(){
    return $Pt( this.mX(), this.mY() )
}


/*This example demonstrates revealing an image using another image as the
 mask. The mask is created by drawing a
 shape, and then caching the shape to make an image with an alpha
 channel. It is then applied to the image as
 an mask using the <code>AlphaMaskFilter</code> filter. Another copy of
 */

st.cc=function(){return this.cacheCanvas }
BLF=function(){$.i('me', function(img){iDr=0  //examples.hideDistractor();//cjs.Touch.enable(st)
    s = $St(); s.enableMouseOver()
    h = $H().a2(s)
    i=img[0]
    bm = $Bm(i)
    bl = $Bm(i)
    bl.Fl($bF(24,24,2), i)
    bl.Fl($cMF( $cM(60)), i)
    bl.ca(0,0,960,400)
    s.A(bl, bm)
    h.ca(i)
    bm.fl($aF(s.cc()),i);s.u()
    // s.A(cu = $H('r').dc(25));  cu.cursor = "pointer"
    s.MU(function(e){iDr=0
        h.ca(i)
        bm.fl( $aF(s), i)
        s.u()
    })
    s.MD(function(e){iDr = oM = o = s.m()})
    s.MM(function(e){var mP             //   cu.x = s.mX(); cu.y = s.mY()
        if (!iDr) {s.u();return}
        mP= $Pt( o.x + s.mX() >> 1, o.y + s.mY() >> 1 )
        h.ss(40, "round", "round")
            .C("rgba(0,0,0,0.2)")
            .mt(mP.x, mP.y).qt(o.x, o.y, oM.x, oM.y)
        o = s.m()
        oM = V(mP)
        h.ca(i)
        bm.fl(  $aF(s.cc()), i );
        s.u()
    })
})}

HGX=function(){W()
    h = w.i.h()
    h.graphics.ss(40, "round", "round")
    h.C("rgba(0,0,0,0.2)").mt(100, 100)
    h.graphics.curveTo(200,500,600,300)
}

BLF2=function(){

    var isDrawing

    st = $St()

    t = $T("Loading...")

    t.set({x:st.W()/2, y:st.H()-40})
    t.textAlign = "center"




    $.i('me', function(img){//examples.hideDistractor();//cjs.Touch.enable(st)


        i=img[0]

        h = $H().a2(st)

        bm = new cjs.Bitmap(i)
        bl = new cjs.Bitmap(i)
        bl.filters = [
            new cjs.BlurFilter(24,24,2),
            new cjs.ColorMatrixFilter( new cjs.ColorMatrix(60) )
        ]
        bl.cache(0, 0, 960, 400)
        t.text = "Click and Drag to Reveal the Image.";
        st.A(bl, t, bm)


        st.A(cu = $H('r').dc(25))
        cu.cursor="pointer"
        st.enableMouseOver()

        st.on("stagemousedown",function(e) {
            o = new cjs.Point(st.mouseX, st.mouseY)
            oM = o;
            isDrawing = true
        })

        st.on("stagemouseup", function  (e){   isDrawing = false})

        st.on("stagemousemove", function  (e) {var m
            cu.x = st.mouseX; cu.y = st.mouseY;

            if (!isDrawing) { st.u(); return }

            m = new cjs.Point(o.x+st.mouseX>>1, o.y+st.mouseY>>1)

            $l('draw')

            h.graphics.ss(40, "round", "round");
            h.graphics.s("rgba(0,0,0,0.2)")
            // h.graphics.mt(100, 100);h.graphics.curveTo(300, 300,700, 200)


            h.graphics.mt(m.x, m.y)
            h.graphics.curveTo(o.x, o.y, oM.x, oM.y)



            o.x = st.mouseX;  o.y = st.mouseY;  oM.x = m.x;   oM.y = m.y
        })






    })




}
GREY=function(){Q(function(){
    Q.b('me').a2($St().t())
        .fl( $cMF(   $cM().s(-100)    )  )
        .ca(0,0,1000,1000)
})
}

ALPH=function(){Q(function(){

    st = $St().t()
    me =  Q.b('me').a2(st).dg()

    h =  Q.b('guy').a2(st)//[0]//.a2(st).dg()

    h= $H()
    h.graphics.lf(["#000000", "rgba(0, 0, 0, 0)"],
        [0, 1], 0, 0, 100, 100)

    h.bf('guy')
    h.dr(0, 0, 100, 100);



    h.cache(0, 0, 100, 100)
    me.filters = [new cjs.AlphaMaskFilter(h.cacheCanvas)]
    me.cache(0,0,1000,1000)

})}

BLR=function(){Q(function(){
    st = $St().t()
    h = st.h(100,100,'r').cir(50)
    $.in(1, function(){
        h.cF(0,0,0,1,0,0,255,0)
        h.ca(-50,-50,100,150)
    })
    $.in(2, function(){f = h.bF(59, 59, 1)
        bd = f.b()
        h.ca(-50 + bd.x, -50 + bd.y, 100 + bd.w, 100 + bd.h )})
})}

REVEAL=function(){Q(function(){
    stage =$St().t()

    var isDrawing,
        drawingCanvas, oldPt, oldMidPt,
        displayCanvas,image, bitmap,maskFilter,
        cursor, text, blur;

//    examples.showDistractor();
    image = $.i('me', function(i){
        image = i[0]
        //  examples.hideDistractor();

        cjs.Touch.enable(stage);

        stage.enableMouseOver();
        stage.addEventListener("stagemousedown", handleMouseDown);
        stage.addEventListener("stagemouseup", handleMouseUp);
        stage.addEventListener("stagemousemove", handleMouseMove);

        drawingCanvas = new createjs.Shape();
        bitmap = new cjs.Bitmap(image);
        blur = new cjs.Bitmap(image);
        blur.filters = [new createjs.BlurFilter(24, 24, 2),
            new createjs.ColorMatrixFilter(new createjs.ColorMatrix(60))]
        blur.cache(0, 0, 960, 400);

        text.text = "Click and Drag to Reveal the Image.";

        stage.addChild(blur, text, bitmap);

        updateCacheImage(false)

        cursor = new createjs.Shape(new createjs.Graphics()
            .beginFill("#FFFFFF").drawCircle(0, 0, 25))

        cursor.cursor = "pointer"

        stage.addChild(cursor)

    })
    stage = new cjs.Stage("testCanvas")
    text = new cjs.Text("Loading...", "20px Arial", "#FFF")
    text.set({x: stage.canvas.width / 2, y: stage.canvas.height - 40})
    text.textAlign = "center"

    function handleMouseDown(event) {
        oldPt = new createjs.Point(stage.mouseX, stage.mouseY);
        oldMidPt = oldPt;
        isDrawing = true;
    }
    function handleMouseMove(event) {
        cursor.x = stage.mouseX;
        cursor.y = stage.mouseY;
        if (!isDrawing) {
            stage.update();
            return;
        }
        var midPoint = new createjs.Point(oldPt.x + stage.mouseX >> 1, oldPt.y + stage.mouseY >> 1);
        drawingCanvas.graphics.setStrokeStyle(40, "round", "round")
            .beginStroke("rgba(0,0,0,0.2)")
            .moveTo(midPoint.x, midPoint.y)
            .curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);
        oldPt.x = stage.mouseX;
        oldPt.y = stage.mouseY;
        oldMidPt.x = midPoint.x;
        oldMidPt.y = midPoint.y;
        updateCacheImage(true);
    }

    function handleMouseUp(event) {
        updateCacheImage(true);
        isDrawing = false;
    }

    function updateCacheImage(update) {
        if (update) {
            drawingCanvas.updateCache();
        } else {
            drawingCanvas.cache(0, 0, image.width, image.height);
        }
        maskFilter = new cjs.AlphaMaskFilter(drawingCanvas.cacheCanvas);
        bitmap.filters = [maskFilter]
        if (update) {bitmap.updateCache(0, 0, image.width, image.height)}
        else {bitmap.cache(0, 0, image.width, image.height)}
        stage.update()
    }
})}

function filter(){
    BlurFilter = blF=function(bx,by,q){
        return new createjs.BlurFilter(bx,by,q)
    }
    AlphaMaskFilter = aMF=function(mask){
        return new createjs.AlphaMaskFilter(mask)
    }
    forMaskFilter = trx = function(n){
        var g=G(arguments),
            a=[]

        //for making mask filter
        if(g.n){
            return 'rgba(0,0,0,' +  g[0]||0  + ')'   }

        _.each(g,function(n){
            a.push(trx(n,'-'))})

        return a
    }
    cjs.blurFilter = function(x,y,c){return new cjs.BlurFilter(x,y,c)}
//T$ = cjs.Ticker  //dep
    ColorFilter = clF=function(a,b,c,d,e,f,g){return new createjs.ColorFilter(a,b,c,d,e,f,g)}
    ColorMatrixFilter = clMF=function(m){return new createjs.ColorMatrixFilter(m)}
    ColorMatrix = CM=function(){
        var c=new createjs.ColorMatrix()
        c.b=c.adjustBrightness
        c.c=c.adjustColor
        c.C=c.adjustContrast
        c.h=c.adjustHue
        c.s=c.adjustSaturation
        c.cl=c.clone
        c.cc=c.concat
        c.m=c.copyMatrix
        c.r=c.reset
        c.A=c.toArray
        c.S=c.toString
        return c}
    function filterTests(){


        BMC=function(){W()._(function() {
            h = w.i.h(0,0,'+')
                .cir({r: 150, bf: 'me'})
                .cir({x: 500, y: 200, r: 100, bf: 'me'})
        })}

        BLUR = blr=function(){

            wMb(function(b){

                var ag=0,rg=100,sp=0.04

                z()

                s=St(500).drg().a().c('x').a(b.xy(100).cc())

                tt(function(e){v=sin(ag+=sp)*rg
                    b.cc('+').fl([blF(v,v,2)])
                    s.u(e)})
            })
        }
        MASK = msk=function(){

            sss=function(){var args=G(arguments)

                z()


                stage = SuperStage(600).a()


                if(args.f){

                    stage.a(args.f)

                    _.each(args.r,
                        function(arg){

                            if( F(arg) ){ arg(args.f) }

                        })
                }

                return stage}



            wMb(function(b){

                sss(b, TR)


                b.fl([

                    aMF(
                        Gx().lf(
                            trx(1,0),[0,1],0,0,200,200
                        ).dr0(400).H().cc(400).cc('*')
                    )

                ]).cc(400)})

        }
        COLOR = clr=function(r){var ag=0,rg=100,sp=0.04

            wMb(function(b){z();

                s=St(500).drg().a().c('X').a(b.xy(100))
                b.cc().fl([r=='g'? clF(.3,1,.3,1,0,0,0,0)
                    :r=='b'? clF(.3,.3,1,1,0,0,0,0)
                    :r=='r'? clF(1,.1,1,1,0,0,0,0)
                    :r=='rg'? clF(1,1,.1,1,1,1,20,0)
                    :clF(1,.1,1,1,0,0,0,0)]).cc('+')
            })
        }
        COLORMATRIX = cmx=function(){

            var g=G(arguments);
            g[0]=g[0]||'a'

            wMb(function(b){b.xy(100).cc();
                    _e(g,function(mf){b.clMF(mf,'+')})},

                St(500).drg().a().c('X') )
        }
        BLURFILT=function(){z()

            stage = createjs.stage('black', 800).tick().A()
            shape = new createjs.Shape().XY(100)

            stage.A(shape)

            shape.graphics.f("red").dc(0,0,50)

            var blurFilter = new createjs.BlurFilter(50, 50, 10)

            shape.filters = [blurFilter]

            var bounds = blurFilter.getBounds()

            shape.cache(-50+bounds.x, -50+bounds.y, 100+bounds.width, 100+bounds.height)

            shape.startMoving()
            shape.vx = 1
            shape.vy = 1
        }
        BLURFILT2=function(){z()

            stage = createjs.stage('black', 800).tick().A()



            stage.bm('me',

                function(bm){

                    var blurFilter = new createjs.BlurFilter(5, 10)

                    bm.filters = [blurFilter]

                    var bounds = blurFilter.getBounds()

                    bm.cache(-50+bounds.x, -50+bounds.y, 400+bounds.width, 400+bounds.height)


                }
            )




        }
        BLURFILT3=function(){z()

            $l('welcome to BLUFILTER3')
            $l('here we will attempt an animated blur filter')

            stage = createjs.stage('black', 800).tick().A()

            stage.bm('me',

                function(bm){ bm.XY(100,300).drag()

                    var blurFilter = $blurFilter(5, 10)

                    bm.filters =  [ blurFilter ]

                    var bounds = blurFilter.getBounds()

                    bm.cache(-50+bounds.x, -50+bounds.y, 400+bounds.width, 400+bounds.height)

                    var blurAmount=0,

                        blurMultiple=40,

                        speed=0.06

                    createjs.Ticker.on('tick', function(){
                        $l('tick')

                        var blur = Math.sin(blurAmount += speed) * blurMultiple;
                        bm.filters = [$blurFilter(blur, blur, 2)]
                        bm.updateCache()

                    })


                })


















        }

    }

}

cjs.testCanvas = function () {
    return $.d().A($.c(960, 400).id("testCanvas"))
}
i=cjs.DisplayObject.prototype
i.fl = function () {
    var ob = this, g = G(arguments), i
    if (A(g[0])) {
        return ob.fl.apply(ob, g[0])
    }
    ob.filters = ob.filters || []
    _.e(g, function (fl) {
        ob.filters.push(fl)
    })
    if (!g.n) {
        i = ob.image;
        this.ca(0, 0, i.width, i.height)
    }
    return ob
}
i.fl2 = function () {
    var ob = this, g = G(arguments)
    ob.filters = []
    ob.filters = ob.filters || []
    _.e(g, function (fl) {
        ob.filters.push(fl)
    })
    if (!g.n) {
        i = ob.image;
        this.ca(0, 0, i.width, i.height)
    }
    return ob
}
i.aF = function (h) {
    var ob = this
    ob.fl($AF(h))
    return ob
}
i.aF2 = function (h) {
    var ob = this
    this.fl2($AF(h))
    return ob
}
$BF= $Bf= $FB= $FlB= $Bfl= $bF= function(){var g=G(arguments),fl,o
    o = {x:g[0], y:g[1], q:g[2]}
    o.y = N(o.y)? o.y : o.x
    o.q = o.q||1

    fl= new cjs.BlurFilter(o.x, o.y, o.q)
    return fl
}

$AF= $Af= $aF=function(a,b,c,d,e){var fl

    if(O(a) && a.cacheCanvas ){
        a= a.cacheCanvas
    }

    fl= new cjs.AlphaMaskFilter(a,b,c,d,e)



    return fl



    forMaskFilter= function trx(n){var g=G(arguments), a
        a=[]
        //for making mask filter
        if(g.n){
            return 'rgba(0,0,0,' +  g[0]||0  + ')' }
        _.e(g,function(n){
            a.push(trx(n,'-'))
        })
        return a
    }
}
$CMF= $CmF= $cMF=function(a,b,c,d){
    if(!O(a)){ a = $CM(a,b,c,d) }
    return new cjs.ColorMatrixFilter(a)
}
$CM= $Cm= $cM=function(a,b,c,d,e){var m
    m=new cjs.ColorMatrix(a,b,c,d,e)
    m.b=m.adjustBrightness
    m.c=m.adjustColor
    m.C=m.adjustContrast
    m.h=m.adjustHue
    m.s=m.adjustSaturation
    m.cl=m.clone
    m.cc=m.concat
    m.m=m.copyMatrix
    m.r=m.reset
    m.A=m.toArray
    m.S=m.toString
    return m
}

BLUR =  function(){

    s= $St(500).dg()


    s.mug(function(b){

        var ag=0,rg=100,sp=0.04
        z()

        s.C('x')
        b.XY(100)
        b.cc()
        T.on('tick', function(e){
            v=M.sin(ag+=sp)*rg
            b.cc('+').fl([blF(v,v,2)])
            s.u(e)
        })
    })
}

MASK =  function(){  wMb(function(b){

    z()


    st = $St(600).A(b.TR())
    b.fl(
        $aF(
            $Gx().lf(
                trx(1,0),[0,1],0,0,200,200
            ).dr0(400).H().cc(400).cc('*')

        )

    )


    b.cc(400)




})}
COLOR = clr=function(r){var ag=0,rg=100,sp=0.04
    wMb(function(b){z();
        s=St(500).dg().a().c('X').a(b.XY(100))
        b.cc()
        b.fl(
            [r=='g'? $cMF(.3,1,.3,1,0,0,0,0)
                :r=='b'? $cMF(.3,.3,1,1,0,0,0,0)
                :r=='r'? $cMF(1,.1,1,1,0,0,0,0)
                :r=='rg'? $cMF(1,1,.1,1,1,1,20,0)
                : $cMF(1,.1,1,1,0,0,0,0)]
        )
        b.cc('+')
    })

}
COLORMATRIX =  function(){var g=G(arguments);

    g[0]=g[0]||'a'

    wMb(function(b){
            b.XY(100).cc();
            _.e(g,function(mf){b.clMF(mf,'+')})},
        St(500).dg().A().C('X') )
}
BLURFILT=function(){z()

    st =  $St('z', 800)

    h=  $H().XY(100).a2(st).f('r').dc(50)

    fl = h.fl($bF(50, 50, 10))

    bd = fl.getBounds()

    h.ca(-50+bd.x, -50+bd.y, 100+bd.width, 100+bd.height)


    /*
     h.startMoving()
     h.vx = 1
     h.vy = 1
     */

}
BLURFILT2=function(){z()

    stage = cjs.stage('black', 800).tick().A()



    stage.bm('me',

        function(bm){

            var blurFilter = new cjs.BlurFilter(5, 10)

            bm.filters = [blurFilter]

            var bounds = blurFilter.getBounds()

            bm.cache(-50+bounds.x, -50+bounds.y, 400+bounds.width, 400+bounds.height)


        }
    )




}
BLURFILT3=function(){z()

    $l('welcome to BLUFILTER3')
    $l('here we will attempt an animated blur filter')

    st= stage = $St('z', 800)

    var blurAmount=0, blurMultiple=40, speed=0.06

    st.bm('me',

        function(bm){ bm.XY(100,300).dg()


            bF = $bF(5, 10)

            bm.filters =  [ bF ]

            bd= bounds = bF.getBounds()

            bm.cache(-50+bd.x, -50+bd.y, 400+bd.width, 400+bd.height)


            cjs.Ticker.on('tick', function(){


                blur = M.sin(blurAmount += speed) * blurMultiple;

                bm.filters = [$bF(blur, blur, 2)]

                bm.ca()

            })


        })}
ALPHAMASKREVEALWORKS=function(){z(); cjs.testCanvas()
    var isDrawing
    cjs.sharedCode()
    //var stage,isDrawing,drawingCanvas,oldPt,oldMidPt,displayCanvas, image,bitmap, maskFilter, cursor, text,blur
    examples.showDistractor()
    i = image = new Image();
    i.onload = handleComplete
    i.src = "/chicks.png"
    st=stage = new cjs.Stage("testCanvas")
    t=text = new cjs.Text("Loading...", "20px Arial", "#FFF")
    t.set({x: st.canvas.width / 2, y: st.canvas.height - 40});
    t.textAlign = "center"
    function handleComplete() {
        examples.hideDistractor()
        cjs.Touch.enable(stage);
        stage.enableMouseOver();
        stage.addEventListener("stagemousedown", handleMouseDown);
        stage.addEventListener("stagemouseup", handleMouseUp);
        stage.addEventListener("stagemousemove", handleMouseMove);
        drawingCanvas = new cjs.Shape()
        bitmap = new cjs.Bitmap(image)

        blur = new cjs.Bitmap(image)
        blur.filters = [new cjs.BlurFilter(24, 24, 2), new cjs.ColorMatrixFilter(new cjs.ColorMatrix(60))];
        blur.cache(0, 0, 960, 400)

        text.text = "Click and Drag to Reveal the Image.";
        stage.addChild(blur, text, bitmap);
        updateCacheImage(false);

        cursor = new cjs.Shape(new cjs.Graphics().beginFill("#FFFFFF").drawCircle(0, 0, 25));
        cursor.cursor = "pointer";

        stage.addChild(cursor);
    }
    function handleMouseDown(event) {
        oldPt = new cjs.Point(stage.mouseX, stage.mouseY);
        oldMidPt = oldPt;
        isDrawing = true;
    }
    function handleMouseMove(event) {
        cursor.x = stage.mouseX;
        cursor.y = stage.mouseY;

        if (!isDrawing) {
            stage.update();
            return;
        }

        var midPoint = new cjs.Point(oldPt.x + stage.mouseX >> 1, oldPt.y + stage.mouseY >> 1);

        drawingCanvas.graphics.setStrokeStyle(40, "round", "round")
            .beginStroke("rgba(0,0,0,0.2)")
            .moveTo(midPoint.x, midPoint.y)
            .curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);

        oldPt.x = stage.mouseX;
        oldPt.y = stage.mouseY;

        oldMidPt.x = midPoint.x;
        oldMidPt.y = midPoint.y;

        updateCacheImage(true);
    }
    function handleMouseUp(event) {
        updateCacheImage(true);
        isDrawing = false;
    }
    function updateCacheImage(update) {
        if (update) {
            drawingCanvas.ca()
        } else {
            drawingCanvas.ca(0, 0, image.width, image.height);
        }

        maskFilter = new cjs.AlphaMaskFilter(drawingCanvas.cacheCanvas);

        bitmap.filters = [maskFilter];
        if (update) {
            bitmap.updateCache(0, 0, image.width, image.height);
        } else {
            bitmap.cache(0, 0, image.width, image.height);
        }

        stage.update();
    }
}



ALPHAMASKREVEAL1=function(){z();

    var isDrawing = false

    cjs.testCanvas()
    cjs.sharedCode()


    i = $.i("/chicks.png", handleComplete)[0]
    st=  new cjs.Stage("testCanvas")


    t=  new cjs.Text("Loading...", "20px Arial", "#FFF")
    t.set({x: st.canvas.width / 2, y: st.canvas.height - 40});
    t.textAlign = "center"


    function handleComplete() {

        cjs.Touch.enable(st);

        st.mO()
        st.MD(handleMouseDown)
        st.MU(handleMouseUp)
        st.MM(handleMouseMove)


        drawingCanvas = new cjs.Shape()
        bm = $Bm(i)
        bl = $Bm(i)
        bl.filters = [new cjs.BlurFilter(24, 24, 2), new cjs.ColorMatrixFilter(new cjs.ColorMatrix(60))];
        bl.ca(0, 0, 960, 400)

        t.text = "Click and Drag to Reveal the Image.";

        st.A(bl, t, bm)

        updateCacheImage(false)

        cu=  new cjs.Shape(new cjs.Graphics().beginFill("#FFFFFF").drawCircle(0, 0, 25));
        cu.cursor = "pointer";
        st.A(cu)
    }

    function handleMouseDown() {
        oldPt = new cjs.Point(st.mouseX, st.mouseY);
        oldMidPt = oldPt;
        isDrawing = true;
    }

    function handleMouseMove() { var midPoint
        cu.x = st.mouseX;
        cu.y = st.mouseY;
        if (!isDrawing) {
            st.u(); return}
        midPoint = new cjs.Point(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1);
        gx= drawingCanvas.graphics
        gx.ss(40, "round", "round")
        gx.s("rgba(0,0,0,0.2)")
        gx.mt(midPoint.x, midPoint.y)
        gx.qt(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
        oldPt.x = st.mouseX;
        oldPt.y = st.mouseY;
        oldMidPt.x = midPoint.x;
        oldMidPt.y = midPoint.y;
        updateCacheImage(true);
    }

    function handleMouseUp(event) {
        updateCacheImage(true);
        isDrawing = false;
    }

    function updateCacheImage(upd) {

        if (upd) {drawingCanvas.ca()}
        else {drawingCanvas.ca(0, 0, i.width, i.height)}

        maskFilter = new cjs.AlphaMaskFilter(drawingCanvas.cacheCanvas);
        bm.filters = [maskFilter]

        if (upd) {bm.ca(0, 0, i.width, i.height);}

        else {bm.ca(0, 0, i.width, i.height)}

        st.u()
    }

}
ALPHAMASKREVEAL0=function(){z(); var isDrawing

    cjs.testCanvas()
    cjs.sharedCode()


    i = $.i("/chicks.png", handleComplete)[0]
    st=  new cjs.Stage("testCanvas")


    t=  new cjs.Text("Loading...", "20px Arial", "#FFF")
    t.set({x: st.canvas.width / 2, y: st.canvas.height - 40})
    t.textAlign = "center"
    t.text = "Click and Drag to Reveal the Image.";


    function handleComplete() {cjs.Touch.enable(st);

        st.mO()
        st.MD(  function  () {oldPt = new cjs.Point(st.mouseX, st.mouseY);oldMidPt = oldPt; isDrawing = true;})
        st.MU(function(){updateCacheImage(true); isDrawing = false})
        st.MM( function() { var midPoint
            cu.x = st.mouseX;cu.y = st.mouseY;
            if (!isDrawing) {st.u(); return}
            midPoint = new cjs.Point(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1);
            h.graphics
                .ss(40, "round", "round").s("rgba(0,0,0,0.2)")
                .mt(midPoint.x, midPoint.y).qt(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
            oldPt.x = st.mouseX;oldPt.y = st.mouseY;
            oldMidPt.x = midPoint.x;oldMidPt.y = midPoint.y;
            updateCacheImage(true);
        })


        h = $H()

        st.A(
            bl= $Bm(i).fl( $bF(24, 24, 2), $cMF($cM(60)) ).ca(0, 0, 960, 400),
            t,
            bm= $Bm(i)
        )

        updateCacheImage(false)
        cu= $H( $Gx().f("#FFFFFF").dc(0, 0, 25)).cu("pointer")
        st.A(cu)
    }




    function updateCacheImage(upd) {
        if (upd) {h.ca()} else {h.ca(i)}
        bm.filters = [$aF(h.cacheCanvas)]
        if (upd) {bm.ca(0, 0, i.width, i.height);}
        else {bm.ca(i)}
        st.u()
    }

}
ALPHAMASKREVEAL00=function(){z(); var isDrawing

    i = $.i('chicks', function(){
        cjs.sharedCode()
        st = $St(800)  //cjs.Touch.enable(st);
        st.mO()


        st.MD(  function(){
            _pt= oldPt = cjs.Pt(st.mouseX, st.mouseY);
            _mPt= oldMidPt = oldPt
        })
        st.MU(uCaI)
        st.MM( function(){
            cu.x = st.mouseX; cu.y = st.mouseY;

            midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1);

            h.graphics.ss(40, "round", "round").s("rgba(0,0,0,0.2)")
                .mt(midPoint.x, midPoint.y)
                .qt(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)

            oldPt.x = st.mouseX; oldPt.y = st.mouseY;
            oldMidPt.x = midPoint.x; oldMidPt.y = midPoint.y;
            uCaI()

        })
        h = $H()
        st.A(
            bl= $Bm(i).fl( $bF(24, 24, 2), $cMF($cM(60)) ).ca(0, 0, 960, 400),
            bm= $Bm(i)
        )
        uCaI()
        cu = $H( $Gx().f("#FFFFFF").dc(0, 0, 25)).cu("pointer").a2(st)
    })

    i=i[0]

    function uCaI(upd) {
        h.ca(i)
        bm.fl( $aF(h.cacheCanvas), '-').ca(i)
        st.u()
    }

}
ALPHAMASKREVEAL000=function(){z()

    var _pt, _mPt
    i = $.i('chicks', function(img){

        _i =img

        bl= $Bm(i)
        bl.fl( $bF(24,24,2), $cMF($cM(60)) )
        bl.ca(960, 400)


        st = $St(800).mO(1).A(bl, bm= $Bm(i))
        h = $H()
        uCaI()
        cu = $H().a2(st).f("#FFFFFF").dc(25).cu("pointer")

        st.MD(function(){

            _pt = $Pt(st.mouseX, st.mouseY)
            _mPt = _pt
        })

        st.MU(uCaI)

        st.MM( function(){

            _pt = $Pt(st.mouseX, st.mouseY)

            cu.x = st.mouseX;
            cu.y = st.mouseY;

            mPt = $Pt(_pt.x + st.mouseX >> 1, _pt.y + st.mouseY >> 1);
            h.ss(50).s("rgba(0,0,0,0.2)").mt(mPt.x, mPt.y).qt(_pt, _mPt)
            _pt = V( st.mouseX,st.mouseY)

            _mPt.x = mPt.x; _mPt.y = mPt.y;
            uCaI()
        })
    })



    i=i[0]

    function uCaI(upd){
        h.ca(i)
        bm.fl($aF(h),'-').ca(i)
    }


}
ALPHAMASKREVEAL=function(){z()

    var _pt, _mPt
    i = $.i('chicks', function(img){

        _i =img

        bl= $Bm(i)
        bl.fl( $bF(24,24,2), $cMF($cM(60)) )
        bl.ca(960, 400)


        st = $St(800).mO(1).A(bl, bm= $Bm(i))
        h = $H().ss(50,'round','round')
        uCaI()
        cu = $H().a2(st).f("#FFFFFF").dc(25).cu("pointer")

        st.MD(function(){
            _pt = st.m()
            _mPt = _pt
        })

        st.MU(uCaI)

        st.MM( function(){   cu.XY( st.m() )
            _pt = st.m()
            mPt = $Pt(
                (_pt.x+st.m().x)   >> 1,
                (_pt.y+st.m().y)   >> 1
            )
            h.s('rgba(0,0,0,0.2)').mt(mPt.x, mPt.y).qt(_pt, _mPt)
            uCaI()
            _mPt=V(mPt)
        })



    })



    i=i[0]

    function uCaI(upd){
        h.ca(i)
        bm.fl($aF(h),'-').ca(i)
    }


}
ALPHAMASKREVEALNOCU1=function(){$.i('chicks', function(i){z()

    var   _mPt

    st = $St(800).mO(1)
    i = i[0]


    h = $H().s('rgba(0,0,0,0.2)')
        .ss(50,'round','round')
        .ca(i)

    bl = st.Bm(i).fl( $bF(24,24,2), $cMF($cM(60)) ).ca(960,400)
    bm = st.Bm(i).fl( $aF(h), '-').ca(i)

    st.MD(function(){_pt = st.m(); _mPt = _pt})

    st.MU(function(){h.ca(i); bm.fl($aF(h),'-').ca(i)
        _mPt=null
    })

    st.MM( function(){
        if(!_mPt){return }
        _pt = st.m()

        mPt = $Pt((_pt.x + st.mx())   >> 1, (_pt.y + st.my())   >> 1)
        bm.fl(h.mt(mPt.x, mPt.y).qt(_pt, _mPt).ca(i).aF(),'-').ca(i)

        _mPt = V(mPt)
    })


})}
ALPHAMASKREVEALNOCU=function(){$.i('chicks', function(i){z()
    i = i[0]
    var   _mPt
    st = $St(800).mO(1)
    h = $H().s('rgba(0,0,0,0.2)')
    h.ss(50,'round','round').ca(i)
    bl  = $Bm( i )
    bl.a2(st)
    bF=$bF(24,24,2)
    cMF=$cMF($cM(60))
    bl.fl(bF, cMF)
    bl.ca(960,400)

    bm = st.Bm(i).fl( h.aF(), '-').ca(i)

    st.MD(function(){ _mPt =_pt = st.m() })
    st.MU(function(){h.ca(i); bm.fl($aF(h),'-').ca(i); _mPt=null})
    st.MM( function(){

        if(!_mPt){return }
        _pt = st.m()

        mPt = $Pt((_pt.x + st.mx())   >> 1, (_pt.y + st.my())   >> 1)

        h.mt(mPt.x, mPt.y).qt(_pt, _mPt)
        h.ca(i)

        bm.fl(h.aF(), '-')
        bm.ca(i)

        _mPt = V(mPt)

    })



})}
SCRATCHOFF=function(){z();
    var   _mPt

    st = $St(1000).mO(1)
    st.bm('chicks', function(bm){

        h = $H().s(.3)
        h.ss(45, 'r','round').ca(bm.image)
        bF=$bF(24,24,2)
        cMF=$cMF($cM(60))
        bm.fl( h.aF(), '-').ca(i)
        st.MD(function(){

            _mPt = _pt = st.m()

        })
        st.MU(function(){
            h.ca(i); bm.fl($aF(h),'-').ca(i); _mPt=null
        })


        st.MM( function(){
            if(!_mPt){return}
            _pt = st.m()

            mx = _pt.x
            my = _pt.y


            mPt = $Pt(
                M.av(_pt.x, mx),
                M.av(_pt.y, my)
            )


            h.mt(mPt.x, mPt.y).qt(_pt, _mPt).ca(i)
            bm.fl(h.aF(), '-').ca(i)

            _mPt = V(mPt)
        })



    })




}
BRUSH=BLOTCHY=function(){z();
    var   _mPt

    st = $St(1000)

    st.mO(1)
    h = $h().a2(st)
    h.ss('o', 40, 's', 'bevel', 1)

    st.bm('chicks', function(bm){
        // _i= i = i[0]
        bm.al(.2)
        st.A(bm)
        st.MD(function(){_mPt = _pt = st.m()})
        st.MU(function(){ _mPt=null})
        st.MM( function(){if(!_mPt){return}
            _pt = st.m()
            mx = _pt.x
            my = _pt.y

            mPt = $Pt(M.av(_pt.x, mx), M.av(_pt.y, my))
            h.mt(mPt.x, mPt.y).qt(_pt, _mPt)
            _mPt = V(mPt)
        })
    })

}
Q21=function(){z();
    var   pt

    st = $St(1000).mO(1)
    h = st.h().ss('g', 40, 's', 'b', 1)

    st.MD(function(){
        pt =   st.m()
    })

    st.MU(function(){
        pt = 0
    })


    st.MM(function(){if(pt){

        _pt = st.m(); mx = _pt.x; my = _pt.y


        mPt = $Pt(M.av(_pt.x, _pt.x), M.av(_pt.y, _pt.y))

        h.mt(mPt.x, mPt.y).qt(_pt, pt)

        pt = V(mPt)

    }})

    $.i('chicks', function(i){st.Bm(i[0]).al(.2)})
}

ALF1 =function(){z(); cjs.testCanvas()
    var isDrawing
    cjs.sharedCode()
    //var stage,isDrawing,drawingCanvas,oldPt,oldMidPt,displayCanvas, image,bitmap, maskFilter, cursor, text,blur
    examples.showDistractor()
    i = image = new Image();
    i.onload = handleComplete
    i.src = "/chicks.png"
    st=stage = new cjs.Stage("testCanvas")

    function handleComplete(){
        examples.hideDistractor()
        cjs.Touch.enable(st);

        st.enableMouseOver();
        st.MD( handleMouseDown);
        st.MU(  handleMouseUp);
        st.MM( handleMouseMove);

        h =  $H().ss(40, "round", "round").C("rgba(0,0,0,0.2)")

        t = new cjs.Text('Drag to Reveal!!', "20px Arial", "#FFF"); t.set({x: st.canvas.width / 2, y: st.canvas.height - 40}); t.textAlign = "center"

        st.A( bl= $Bm(i), t,  b= $Bm(i)  ) //x=0, y=0, quality=1


        bl.filters = [$FlB(20,0), new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-20,20,500,-80))  ]//   ,new cjs.BlurFilter(24, 24, 2)
        bl.ca()

        updateCacheImage(false)
        cu= $H().f("#FFFFFF").dc(  25)
        cu.cursor = "pointer"
        st.A(cu)
    }


    function handleMouseDown() {isDrawing = true; oldPt = st.m(); oldMidPt = oldPt;}
    function handleMouseMove() {
        var midPoint
        cu.x = st.mouseX;  cu.y = st.mouseY;
        if (!isDrawing) {return st.u()}
        midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
        h.cur(midPoint.x, midPoint.y, oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
        oldPt.x = st.mouseX;oldPt.y = st.mouseY;
        oldMidPt.x = midPoint.x;oldMidPt.y = midPoint.y;
        updateCacheImage(true);
    }
    function handleMouseUp() {updateCacheImage(true); isDrawing = false}
    function updateCacheImage(update) {//update the shape's cache
        if (update) { h.ca(i)} else { h.ca(i)}//make a new alphaFilter from the shape's cache
        //apply the filter to the bitmap
        b.filters = [$aF(h.cC())]// update the bitmap's cache, to apply its filter
        if (update) {b.ca()} else {b.ca()}//update the st
        st.u()}

}
ALF11=function(){z();
    cjs.testCanvas()
    var isDrawing
    cjs.sharedCode()
    examples.showDistractor()
    st=new cjs.Stage("testCanvas")

    i = new Image()
    i.onload =  function(){
        examples.hideDistractor()
        cjs.Touch.enable(st)
        st.enableMouseOver()
        st.MD(function () {isDrawing = true; oldPt = st.m(); oldMidPt = oldPt;});
        st.MU(function () {updateCacheImage(true); isDrawing = false});
        st.MM(function() {var midPoint
            cu.x = st.mouseX;  cu.y = st.mouseY;
            if (!isDrawing) {return st.u()}
            midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
            h.cur(midPoint.x, midPoint.y, oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
            oldPt.x = st.mouseX;oldPt.y = st.mouseY;
            oldMidPt.x = midPoint.x;oldMidPt.y = midPoint.y;
            updateCacheImage(true)})
        h =  $H().ss(40, "round", "round").C("rgba(0,0,0,0.2)")
        t = new cjs.Text('Drag to Reveal!!', "20px Arial", "#FFF"); t.set({x: st.canvas.width / 2, y: st.canvas.height - 40}); t.textAlign = "center"
        st.A( bl= $Bm(i), t,  b= $Bm(i)  )
        bl.filters = [$FlB(20,0), new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-20,20,500,-80))  ]//   ,new cjs.BlurFilter(24, 24, 2)
        bl.ca()
        updateCacheImage(false)
        cu= st.h().f("#FFFFFF").dc(  25).cu('pointer')
    }

    i.src = "/chicks.png"
    function updateCacheImage(update) {
        if (update) { h.ca(i)} else { h.ca(i)}
        b.filters = [$aF(h.cC())]
        if (update) {b.ca()} else {b.ca()}
        st.u()}
}
ALF=function(){$.i('chicks',function(e,i){St()//cjs.Touch.enable(st)  //st.mO(1) !!!
    var isDrawing



    h =  $H().ss(40, "round", "round").C("rgba(0,0,0,0.2)")

    st.A(
        bl= $Bm(i._),
        t= $T('Drag to Reveal!!', "20px Arial", "#FFF").XY(st.W()/2, st.H()-40).tA("center"),
        b= $Bm(i._)

    )

    bl.filters = [$FlB(20,0), new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-20,20,500,-80))  ]//   ,new cjs.BlurFilter(24, 24, 2)

    bl.ca()

    updateCacheImage(false)

    cu= st.h().f("#FFFFFF").dc(  25).cu('pointer')



    st.MD(function () {isDrawing = true; oldPt = st.m(); oldMidPt = oldPt;});
    st.MU(function () {updateCacheImage(true); isDrawing = false});
    st.MM(function() {var midPoint
        cu.x = st.mouseX;  cu.y = st.mouseY;
        if (!isDrawing) {return st.u()}
        midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
        h.cur(midPoint.x, midPoint.y, oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
        oldPt.x = st.mouseX;oldPt.y = st.mouseY;
        oldMidPt.x = midPoint.x;oldMidPt.y = midPoint.y;
        updateCacheImage(true)})
    function updateCacheImage(update) {
        if (update) { h.ca(i._)} else { h.ca(i._)}
        b.filters = [$aF(h.cC())]
        if (update) {b.ca()} else {b.ca()}
        st.u()
    }


})}
ERASEFL1=function(){$.i('chicks',function(e,i){St()//cjs.Touch.enable(st)  //st.mO(1) !!!
    var isDrawing
    st.A(
        $Bm(i).fl($FB(20,0), $CMF(-20,20,500,-80)), $T('Drag to Reveal!!', "20px Arial", "#FFF", st.W()/2, st.H()-40).tA("center"),
        b= $Bm(i).aF2(h=$H().ss(40,'r','r').C(.9).ca(i))
    )
    st.trDr()
    st.MD(function () {  oldPt = st.m(); oldMidPt = oldPt;});
    st.MU(function () {  b.fl2($AF(h.ca(i))).ca() })
    st.MM(function() {var midPoint
        if (!st._dr) {return st.u()}
        midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
        h.cur(midPoint.x, midPoint.y, oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
        oldPt.x = st.mouseX;oldPt.y = st.mouseY;
        oldMidPt.x = midPoint.x;oldMidPt.y = midPoint.y;
        b.fl2($AF(h.ca(i))).ca()
    })
    //cursor
    st.h().f("#FFFFFF").dc(25).cu('pointer').bM()
})}
ERASEFL11=function(){$.i('chicks',function(e,i){St().trDr().A(

    $Bm(i).fl($FB(20,0), $CMF(-20,20,500,-80)), $T('Drag to Reveal!!', "20px Arial", "#FFF", st.W()/2, st.H()-40).tA("center"),

    b= $Bm(i).aF2(h=$H().ss(40,'r','r').C(.9).ca(i))

).m({

        d:function () {  oldPt = st.m(); oldMidPt = oldPt;},

        u:function () {  b.fl2($AF(h.ca(i))).ca() },

        m:function() {var midPoint
            if (!st._dr) {return st.u()}
            midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
            h.cur(midPoint.x, midPoint.y, oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
            oldPt.x = st.mouseX;oldPt.y = st.mouseY;
            oldMidPt.x = midPoint.x;oldMidPt.y = midPoint.y;
            b.fl2($AF(h.ca(i))).ca()}

    }).h().f("#FFFFFF").dc(25).cu('pointer').bM()



})}
ERASEDOT=function(){$.i('chicks',function(e,i){St()

    st.enableMouseOver=true


    st.trDr().A(
        $Bm(i).fl($FB(20,0), $CMF(-20,20,500,-80)), $T('Drag to Reveal!!', "20px Arial", "#FFF", st.W()/2, st.H()-40).tA("center"),
        b= $Bm(i).aF2(h=$H().ss(40,'r','r').C(.9).ca(i))
    )
    st.m({
        d: function(){ oldPt = st.m(); oldMidPt = oldPt;},
        u: function(){ b.fl2($AF(h.ca(i))).ca() },
        m: function(){var midPoint
            if(!st._dr){return st.u()}

            midPoint = M.av(oldPt,st.m()),  h.cur(midPoint, oldPt, oldMidPt )
            oldPt = st.m()
            oldMidPt.x = V(midPoint)
            b.aF2(h.ca(i)).ca()}
    })

    cu = st.h('w').dc(25).cu('N')//.bM()
})
}
ERASEFL111=function(){$.i('chicks',function(e,i){St()
    st.enableMouseOver=true
    st.trDr().A(
        $Bm(i).fl($FB(20,0), $CMF(-20,20,500,-80)), $T('Drag to Reveal!!', "20px Arial", "#FFF", st.W()/2, st.H()-40).tA("center"),
        b= $Bm(i).aF2(h=$H().ss(40,'r','r').C(.9).ca(i))
    )
    cu = st.h('w').dc(25).cu('N').bM()
    st.m({
        u: function(){ b.fl2($AF(h.ca(i))).ca() },
        d: function(){mt = st.m()},
        m: function(){if(st._dr){b.aF2(h.dl(mt,  mt =st.m()).ca(i)).ca()}}
    })
})}
ERASEFLWORKS=function(){$.i('chicks',function(e,i){St().trDr()

    //invisible ink!!!
    //so u constantly re-update the top layer's filter
    //it is an alpha filter so it only shows where u painted
    //so it starts of invisible
    //you can 'draw the layer' on

    h=$H().ss(40,'r','r').C(.9).ca(i)
    b= $Bm(i).aF2(h)

    st.A(
        $Bm(i).al(.2).fl($FB(40), $CMF(20,-20,80, 10),$FB(40)),
        $T('Drag to Reveal!!', "20px Arial", "#FFF", st.W()/2, st.H()-40).tA("center"),
        b)

    st.m({
        u: function(){
            b.fl2($AF(h.ca(i))).ca() },
        d: function(){m = st.m()},
        m: function(){
            if(st._dr){
                h.dl(m, st.m()).ca(i)
                b.aF2(h).ca()
                m = st.m()
            }}
    })

})}
ERASEFL=function(){$.i('chicks',function(e,i){St().trDr()
    var m
    //invisible ink!!!
    //so u constantly re-update the top layer's filter
    //it is an alpha filter so it only shows where u painted
    //so it starts of invisible
    //you can 'draw the layer' on
    st.A(
        $Bm({
            i:i,
            fl:[$CMF(20,-20,80,10),$FB(40)],
            al:.2
        }),
        $Tc('Smudge!', 100, 'r', st),
        b=$Bm({
            i:i,
            aF2:  h = $H().ss(40,'r','r').C(.9).ca(i)
        })
    )
    st.m({
        u: function(){
            b.fl2(
                $AF( h.ca() )
            ).ca()
        },
        d: function(){m = st.m()},
        m: function(){
            if(st._md){
                h.dl(m||st.m(), st.m()).ca()
                b.aF2(h).ca()
                m = st.m()
            }}
    })


})}
FILTERS=function(){
    cM = $CM()
    cM.adjustHue(80)
    cM.adjustSaturation(40)
    cM.adjustBrightness(40)
    cM.adjustContrast(-60)

    s = $.c(1000).A().stage.t()

    s.mug(  function(b){

        b.XY(200, 200).SL()
        b.cache(-200, -200, b.W(), b.H())
        b.filters =  [ $CMF(cM) ]
        b.updateCache()
        //cjs.bindSlide(b)


    })


    s.mug(function(b){
        b.XY(-100,-50)
        b.cc()
        b.clMF('a','+')
        b.clMF('w','+')
        cjs.bindSlide(b)
    })

    s.mug(function(b){b.XY(400,0).cc()
        SL(b)
        b.fl([aMF(Gx().lf(trx(1,0),[0,1],0,0,300,300)
            .dr0(400).H().cc(400).cc('*'))
        ]).cc(400)})
    s.mug(function(b){
        b.XY(100,300).cc();SL(b)
        b.cc().fl([ clF(.3,1,.3,1,0,0,0,0) ]).cc('+')
    })
    s.mug(function(b){
        var ag=0,rg=20,sp=0.04;
        b.XY(500,300).cc();
        SL(b)
        //this has gotta just mean 'on tick'
        tt(function(e){
            v=M.sin(ag+=sp)*rg;
            b.cc('+').fl([blF(v,v,2)])
        })})

}


function cool(){
    Q2=function(){St().mO(1)
        h = st.h().ss('g', 40, 's', 'b', 1)
        st.bm('chicks', function(b){b.XY(500,300).al(.2)})
        pt=0
        st.MD(function(){pt = st.m()})
        st.MU(function(){pt = 0})
        st.MM(function(){if(pt){h.line(pt, pt=st.m())}})
    }
}
cool()