$PT()
i._=function(x,y){var g=G(arguments), o, cl

    o= g.O_ ? {i: g.f, x: g.s, y: g.t}:
    { x: g.f, y: g.s}

    cl =  o.i?
        o.i._().a2(this) :
        this.clone().a2( this.P() )

    if(N(o.x)){cl.X(o.x)}
    if(N(o.y)){cl.Y(o.y)}

    if(g.p){cl.dg()}
    return cl
}
i.ca=function(a,b,c,d,e){
    if(O(a)){this.ca(0, 0, a.width, a.height)
        return this
    }
    this.cache(a,b,c,d,e)
    return this
}

st.MU=function(fn){
    this.on("stagemouseup", fn)
    return this}
st.MD=function(fn){
    this.on("stagemousedown", fn)
    return this}
st.MM=function(fn){
    this.on("stagemousemove", fn)
    return this}
h.ss=function(){var g=G(arguments)
    this.graphics.ss.apply(this.graphics, g)

    return this
}
$Pt=function(x,y){
    return new cjs.Point(x,y)
}

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
})}
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
REVEAL=function(){Q(function(){stage =$St().t()

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
