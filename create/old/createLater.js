



function later(){

    cjs.stop = function () {
        alert('cjs.stop')
        cjs.Ticker.removeAllEventListeners()

    }
    tickX = function (e) {
        alert('tickX')
        j.Y(e.delta / 1000 * 100, '-')
    }
    timeStamp2 = function (s, j, pxPerSec) {
        alert('timeStamp2')
        var fn = function (s, e) {

            if (!N(j.ts)) {
                j.ts = 0;
                j.lts = e.ts
            }

            else {
                j.ts = e.ts - j.lts;
                j.lts = e.ts

                j.y((j.ts / 1000) * pxPerSec, '-')
            }
        }
        return s.t(fn)
    }

    cjs.tick2 = function (func) {
        alert('cjs.tick2')
        cjs.Ticker.addEventListener('tick', func)
        return cjs.Ticker
    }
    cjs.stopListening = function () {
        alert('cjs.stopListening')
        cjs.Ticker.removeAllEventListeners()
    }
    function toSpaz(){
        ct = cjs.Container.prototype

        ///WARNING ..USED B2D.ISGPOLY TO MAKE DOT
        ct.dot = function (c, x, y) {
            var that = this,
                s = this,
                dot,
                tween

            if (b2d.isGPoly(c)) {
                _.each(c.verts(), function (v) {
                    s.dot(V(v))
                })
                return this
            }

            if (A(c)) {

                _.each(c,
                    function (G) {
                        if (A(G)) {
                            s.dot.apply(s, G)
                        }
                        else {
                            s.dot(G)
                        }
                    })

                return
            }

            if (!S(c)) {
                y = x;
                x = c;
                c = 'y'
            }

            if (O(x)) {
                y = x.y;
                x = x.x
            }

            x = N(x) ? x : s.W() / 2
            y = N(y) ? y : s.H() / 2

            //dot = s.circ(x,y, 6,  oO('c', c)).drag()//.opacity(.4)

            //dot = s.h(x,y).circ(0,0, 6,  oO('c', c)).drag()//.opacity(.4)

            dot = s.h(x, y).circ(8, c, c).drag()

            tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()

            dot.$$(function () {
                tween.toggle()
            })

            dot.N('dot')

            return s
        }

    }
    cjs.chalk = function (t, c) {
        if (O(t)) {t = 'x: ' + t.x + ', ' + 'y: ' + t.y}
        return new J.Text(t, "26px Arial", oO('c', c || 'white')).XY(50, 50)
    }
    ct.squareDot=function(color, x, y){var squareDot, tween
        if(!S(color)){y=x; x=color; color='orange'}
        if(O(x)){y= x.y;x= x.x  }
        x= N(x)? x:300
        y= N(y)? y:300
        __squareDot = squareDot = J.rect(20, 20, oO('c', color))//.opacity(.4)
        this.A(squareDot.XY(x, y)//.drag()
        )
        //tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()

        // dot.$$(function(){tween.toggle()})

        return this}
    ct.chalk=function(){
        var height = 50,
            that=this,
            text

        _.each(arguments, function(arg){

            text = J.chalk(arg).Y(height).X(50 - that.X())
            height+=40
            that.A(text)

        })


        return text}
    ct.pen = function self(arg){

        var that=this


        if(O(self.text)){
            self.text.remove()
        }

        self.text = J.chalk(arg).Y(50).X(50 - that.X())

        that.A(self.text)


        return self.text}

//alert

    bmp()
    function bmp(){
        SuperBitmap = SuperBitmapSync = bm = function (img, stage) {
            alert('SuperBitmap')
            var superBitmap = Do(new cjs.Bitmap(src(img)))

            if (O(stage)) {
                stage.a(superBitmap)
            }

            return superBitmap
        }
        SuperBitmapAsync = function (i, fn) {
            alert('SuperBitmapAsync')
//source obj can be:
// Image|HTMLCanvasElement|HTMLVideoElement
// |String URIto an image file to load and use.
//If it is a URI, a new Image object will be constructed and assigned to the .image property.
            i = i[0]
            if (O(i) && S(i.d)) {
                i = i.d
            }
            $.i(i, function (img) {
                bm = $Bm(img)
                if (F(fn)) {
                    fn(bm)
                }
                if (S(fn)) {
                    $w[fn] = bm
                }
            })

            return i
        }
        cjs.BmSync = function (i, st) {
            alert('BmSync')
            var bm = $Bm(src(i[0]))

            if (O(st)) {
                st.A(bm)
            }

            return bm
        }
        cjs.Bm = $bitmapAsync = Bm = function (img, fn) {
            alert('cjs.Bm $bitmanpAsync Bm')
//source obj can be:
// Image|HTMLCanvasElement|HTMLVideoElement
// |String URIto an image file to load and use.
//If it is a URI, a new Image object will be constructed and assigned to the .image property.
            if (O(img) && S(img.d)) {
                img = img.d
            }
            $.i(img, function (i) {
                bm = $Bm(i)
                if (F(fn)) {
                    fn(bm)
                }
                if (S(fn)) {
                    $w[fn] = bm
                }
            })
            return img
        }
    }
    $.colorPicker = $.ColorPicker = function () {
        alert('$.colorPicker')
        z()

        colorPicker = $(' <input id="color" name="color" type="color">').appendTo($('body'))

        colorPicker.change(function () {
            $l(colorPicker.val())
        })

    }
    cjs.toColor = toColor = tCl = function (n1, n2, n3, n4) {
        alert('cjs.toColor')
        return n2 ? "rgba(" + n1 + "," + n2 + "," + "" + n3 + "," + (n4 || 1) + ")"
            :
            $r('c', n1)
    }


    //obPhysics()
    function obPhysics() {
//easel physics.. ugh

        ob.accelerate = function () {
            return this.vX(this.ax || 0, '+').vY(this.ay || 0, '+')
        }
        ob.jerk = function () {
            return this.aX(this.jx || 0, '+').aY(this.jy || 0, '+')
        }


        ob.brake = function () {
            this.vx = this.vy = 0
        }
        ob.toR = p.moveRight = function (num) {
            num = num || 20
            this.X(num, '+')
            return this
        }
        ob.toL = p.moveLeft = function (num) {
            num = num || 20
            this.X(num, '-')
            return this
        }
        ob.toU = p.moveDown = function (num) {
            num = num || 20
            this.Y(num, '-')
            return this
        }
        ob.toD = p.moveDown = function (num) {
            num = num || 20

            this.Y(num, '+')
            return this
        }
        ob.keyControls = function (num) {
            var args = G(arguments),
                ob = this

            if (args.P) {
                $.kD('left', function () {
                    ob.toL(num)
                })
                $.kD('right', function () {
                    ob.toR(num)
                })
            }

            if (args.N) {
                $.kD('up', function () {
                    ob.toU(num)
                })
                $.kD('down', function () {
                    ob.toD(num)
                })
            }
        }
        ob.shootBullet = function () {
            shooter = this
            st = shooter.st()
            bu = cjs.cir(8, 'w').XY(shooter).a2(st)
            bu.startMoving((shooter.vx || 1) * 1.5, (shooter.vy || 1) * 1.5)

        }
        ob.hitByBullet = ob.isPointInMyRectBounds = function () {
            var ob = this, g = G(arguments),

                bu = g[0],
                didHit = M.pointInRectangle(bu.cX(), bu.cY(), {x: ob.cX(), y: ob.cY(), w: ob.W(), h: ob.H()})
            if (g.n && didHit) {
                ob.rm()
            }
            return didHit
        }
//chick for hits and remove if a hit
        ob.killAllIAmHitting = function () {
            var ob = this,
                stage = this.getStage()

            _.each(stage.children, function (obj) {

                if (ob != obj) {

                    obj.hitByBullet(ob, '-')

                }
            })

        }
        ob.makeMeAKiller = function () {
            var ob = this
            cjs.tick(function () {
                ob.killAllIAmHitting()
            })
            return this
        }

    }


    sav = function (st, a) {
        return function () {
            alert('sav')
            st.sv(a)
        }
    }
    function maybe() {

        cjs.HSL = function (a, b, c) {
            if (U(a)) {
                return HSL(M.rand() * 360, 100, 50)
            }
            return cjs.Graphics.getHSL(a, b, c)
        }
        eventDisp()
        function eventDisp() {
            p = cjs.EventDispatcher.prototype
            p.init = function () {
                this.initialize.apply(this, arguments)
                return this
            }
        }

    }


    old=function(){
        cjs.circle2 = function (r, z, x, y) {
            gx = new cjs.Graphics()
            if (!S(r)) {
                return cjs.circle2('red', r, z, x)
            }
            z = _.tN(z, 32)
            x = _.tN(x, 100)
            y = _.tN(y, 100)
            gx.ss(z / 8).f(r, 'black').dc(z)
            return cjs.h(gx).XY(x, y)
        }
        cjs.circle3 = function (x, y, r, c, C) {

            var h = cjs.shape()
            if (O(x)) {
                return cjs.circle3(x.x, x.y, x.r, x.c, x.C)
            }

            x = _.tN(x)
            y = _.tN(y)
            r = _.tN(r, 8)

            h.cir(x, y, r, c || 'w', C || 'z')
            SL(h)
            return h
        }
      
      
        cjs.box = function (w, h, fc, sc) {

            w = w || 200

            h = h || w

            var b = rct(
                0 - w / 2, 0 - h / 2, w, h, fc, sc
            )

            b.wr = w / 2

            b.hr = h / 2

            b.wd = w

            b.hd = h


            b.top = b.T = function (a) {
                if (U(a)) {
                    return b.y() - b.hr
                }

                b.y(a + b.hr)

                return b
            }

            b.bottom = b.B = function (a) {

                if (U(a)) {
                    return b.y() + b.hr
                }


                b.y(a - b.hr)

                return b
            }

            b.left = b.L = function (a) {

                if (U(a)) {
                    return b.x() - b.wr
                }

                b.x(a + b.wr)

                return b
            }

            b.right = b.R = function (a) {

                if (U(a)) {
                    return b.x() + b.wr
                }
                b.x(a - b.wr);
                return b
            }

            b.fall = function () {
                b.t(function () {
                    if (b.F) {
                        b.y(40, '+')
                    }  //****
                    if (ballBox(b, r)) {
                        b.F = 0
                    }
                })
            }

            return b
        }
        cjs.ballBox = function (bl, bx, buff) {
            buff = buff || 100
            var b = bl.bottom() >= bx.top() && bl.top() <= bx.top() + buff &&
                bl.x() >= bx.left() && bl.x() <= bx.right()
            if (b) {
                bl.bottom(bx.top())
            }
            return b
        }
        cjs.ball = function (r, c, C) {//canon

            var b = cjs.circle(0, 0, r, c, C)

            b.d = r + r

            b.T = function (a) {
                if (U(a)) {
                    return b.y() - b.r
                }
                b.y(a + b.r);
                return b
            }

            b.B = function (a) {

                if (U(a)) {
                    return b.y() + b.r
                }

                b.y(a - b.r)

                return b
            }


            b.L = function (a) {
                if (U(a)) {
                    return b.x() - b.r
                }
                b.x(a + b.r);
                return b
            }
            b.R = function (a) {
                if (U(a)) {
                    return b.x() + b.r
                }
                b.x(a - b.r);
                return b
            }
            b.F = 1
            b.fall = function (r) {
                b.t(function () {
                    if (r) {
                        if (ballBox(b, r)) {
                            b.F = 0
                        } else {
                            b.F = 1
                        }
                    }
                    if (b.F) {
                        b.y(10, '+')
                    }
                })
            }

            return b
        }
    }
    
    
    cjs.M = function (rot) {
        alert('cjs.M')
        var m = new cjs.Matrix2D()
        if (N(rot)) {m.rotate(rot)}
        return m}
    $Tc=function(a,f,c,x,y){alert('$Tc')
        var t= $T(a,f,c,x,y)
        t.tA('center')
        return t
    }
    ct.art = function (x, y, c, C) {
        alert('ct.art')
        var g = G(arguments), ct = this, h
        if (U(x)) {
            alert('must at LEAST define x');
            return
        }
        if (!N(x)) {
            alert('x not a number! but must be, lah');
            return
        }

        y = N(g[1]) ? g[1] : x
        c = S(g[2]) ? oO('c', g[2]) : null
        C = S(g[2]) ? oO('c', g[3]) : c
        h = cjs.h(x, y, c, C).a2(ct)
        if (g.p) {
            h.drag()
        }
        return h
    }
    st.trDr = function () {alert('st.trDr')
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
    st.du = function () {
        alert('st.du')
        return this.canvas.toDataURL()
    }
    st.snap = function (f) {
        alert('st.snap')
        var st = this
        $.P('img', {d: st.toDataURL()})//, dats: o.x.dats
        $.in(1, f)
        return st
    }
    cjs.mXY = function (o, s) {
        alert('cjs.mXY')
        xy(o, s.mx(), s.my())
        return o
    } //mxy
    ct.bData = function (data) {
        alert('ct.bData')
        return J.bm($.i().src($.parseJSON(data))).a2(this)
    }
    ct.bData = function (data) {
        alert('ct.bData')
        return J.bm($.i().src($.parseJSON(data))).a2(this)
    }
    st.snap = function (f) {alert('st.snap')
        var st = this
        $.P('img', {d: st.toDataURL()})//, dats: o.x.dats
        $.in(1, f)
        return st
    }
    st.trDr = function () {
        alert('st.trDr')
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
    ct.st = function(){
        alert('ct.st')
        return this.getStage() }//ct.st = function () {return this.stage}
}
cjs.Keys = function(o){
    alert('cjs.Keys')
    if(O(o)){
        if(F(o.u)){
            cjs.tick(function(){if(cjs.Keys.u){ o.u(cjs.Keys.u) } })}
        if(F(o.d)){
            cjs.tick(function(){
                if(cjs.Keys.d){ o.d(cjs.Keys.d) } })
        }
        if(F(o.l)){
            cjs.tick(function(){
                if(cjs.Keys.l){
                    o.l(cjs.Keys.l)
                } })}
        if(F(o.r)){
            cjs.tick(function(){if(cjs.Keys.r){
                o.r(cjs.Keys.r)
            } })
        }
    }
}
cjs.watchKeys=function(){
    alert('cjs.watchKeys')
    cjs.Keys.l = cjs.Keys.left = false
    cjs.Keys.r = cjs.Keys.right = false
    cjs.Keys.u = cjs.Keys.up = false
    cjs.Keys.d = cjs.Keys.down = false
    $.kD('l',function(){
        if($.test){$l('left pressed')}
        cjs.Keys.l = cjs.Keys.left = true
        cjs.Keys.dir = 'left'})
    $.kU('l',function(){if($.test){$l('left lifted')}
        cjs.Keys.l = cjs.Keys.left = false
    })
    $.kD('r',function(){if($.test){$l('right pressed')}
        cjs.Keys.r = cjs.Keys.right = true
        cjs.Keys.dir = 'right'})
    $.kU('r',function(){if($.test){$l('right lifted')}
        cjs.Keys.r = cjs.Keys.right = false
    })
    $.kD('u',function(){if($.test){$l('up pressed')}
        cjs.Keys.u = cjs.Keys.up = true
    })
    $.kU('u',function(){if($.test){$l('up lifted')}
        cjs.Keys.u = cjs.Keys.up = false
    })
    $.kD('d',function(){if($.test){$l('down pressed')}
        cjs.Keys.d = cjs.Keys.down = true
    })
    $.kU('d',function(){
        if($.test){$l('down lifted')}
        cjs.Keys.d = cjs.Keys.down = false
    })
}
TESTWATCHKEYS=function(){z()
    $.test=true
    cjs.watchKeys()
}
KEYWATCH = function(){
    J=cjs
    $.test=true
    J.Keys.l = J.Keys.left = false
    J.Keys.r = J.Keys.right = false
    J.Keys.u = J.Keys.up = false
    J.Keys.d = J.Keys.down = false
    $.kU('l',function(){
        if($.test){$l('left lifted')}
        J.Keys.l = J.Keys.left = false
    })
    $.kD('l',function(){
        if($.test){$l('left pressed')}
        J.Keys.l = J.Keys.left = true
        J.Keys.dir = 'left'})
    $.kD('l',function(){
        if($.test){$l('left pressed')}
        J.Keys.l = J.Keys.left = true
        J.Keys.dir = 'left'})
    $.kD('r',function(){if($.test){$l('right pressed')}
        J.Keys.r = J.Keys.right = true
        J.Keys.dir = 'right'})
    $.kU('r',function(){if($.test){$l('right lifted')}
        J.Keys.r = J.Keys.right = false
    })
    $.kD('u',function(){if($.test){$l('up pressed')}
        J.Keys.u = J.Keys.up = true
    })
    $.kU('u',function(){if($.test){$l('up lifted')}
        J.Keys.u = J.Keys.up = false
    })
    $.kD('d',function(){if($.test){$l('down pressed')}
        J.Keys.d = J.Keys.down = true})
    $.kU('d',function(){if($.test){$l('down lifted')}
        J.Keys.d = J.Keys.down = false
    })
}






function notGood(){


    RR=ROUNDREC = function () {
        St()
        h.c('b', 'r', 5).dc(100, 100, 100)
        h.dr(300, 200, 100, 50)
        h.dr2(500, 200, 100, 50)
        h.rr2(500, 200, 100, 50, 50)
        h.de2(500, 200, 100, 50)

        /*
         s.dot(100, 100)
         s.dot(300, 200)
         s.dot(500, 200)
         s.dot(500, 200)
         s.dot(500, 200)
         */
    }
}
function old(){
    h.rectx = function (x, y, W, H, c, C) {
        var h = this


        var o = {
            x: x, y: y, w: W, h: H, c: c, C: C
        }

        return h.c(o).dr2(o.x, o.y, o.w, o.h)

    }

    h.dr2x = function (x, y, W, H) {
        var h = this


        if (U(W)) {
            W = x;
            H = y;
            x = 0;
            y = 0
        }

        h.dr(-W / 2 + x, -H / 2 + y, W, H)


        return h
    }// s.B = function(x,y){return this.ct(x,y).drag() }
}
//alert
cjs.rect2 = function self(width, height, x, y, fc, sc) {
    alert('cjs.rect2')
    width = width || 100
    height = height || width

    x = N(x) ? x : 0;
    y = N(y) ? y : 0
    fc = fc || 'green'
    sc = sc || 'white'

    halfwidth = width / 2
    halfheight = height / 2
    var h = new createjs.Shape()

    h.graphics.f(fc).s(sc)
        .mt(-halfwidth + x, -halfheight + y)
        .lt(-halfwidth + x, halfheight + y)
        .lt(halfwidth + x, halfheight + y)
        .lt(halfwidth + x, -halfheight + y)
        .lt(-halfwidth + x, -halfheight + y)

    return h
}
cjs.rect = function self(width, height, fc, sc) {

    alert('cjs.rect')
    width = width || 100
    height = height || width
    fc = fc || 'green'
    sc = sc || 'white'

    halfwidth = width / 2
    halfheight = height / 2
    var h = new cjs.Shape()

    h.graphics.f(fc).s(sc)
        .mt(-halfwidth, -halfheight)
        .lt(-halfwidth, halfheight).lt(halfwidth, halfheight)
        .lt(halfwidth, -halfheight).lt(-halfwidth, -halfheight)

    return h
}

cjs.RECT = function (c, W, H, x, y, a) {
    alert('cjs.RECT')
    var g = G(arguments), ct = cjs.ct(), h, o;
    if (O(c)) {
        o = c
    } else if (S(c)) {
        o = {c: c, w: W, h: H, x: x, y: y, a: a}
    }
    o =  oDef(o)


    h = ct.h(o.x, o.y).c(o.c, o.C, o.l).rot(o.a)
    if (o.bm) {
        h.bm('me', function () {
            h.dr2(o.x, o.y, o.w, o.h)
        });
        return h
    }
    if (o.rg) {
        h.rg(o.c, o.C)
    }
    if (o.lg) {
        h.lg(o.c, o.C)
    }
    h.dr2(o.x, o.y, o.w, o.h)

    return h
}
cjs.isShape = function (h) {
    alert('cjs.isShape')
    return O(h) && h.graphics
}
cjs.graphics = function (a) {
    alert('cjs.graphics')
    return new cjs.Graphics(a)}
cjs.isCont = function (cont) {
    alert('isCont')
    if (O(cont)) {
        if (cont.addContainer) {
            return true
        }
        else {
            return false
        }
    }
}
h.rGx = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
    alert('h.radGrad')
    var args = _.toArray(arguments), circs, len

    cols = _.map(cols,
        function (col) {
            return oO('c', col)
        })


    circs = _.rest([1, 2, 3, 4, 5], 2)
    len = circs.len  //use switch!

    x1 = 0;
    y1 = 0;
    r1 = 0;
    x2 = 0;
    y2 = 0;
    r2 = 50

    if (len == 1) {
        r2 = circs[0]
    }

    else if (len == 2) {
        r1 = circs[0];
        r2 = circs[1]

    }

    else if (len == 3) {
        x1 = x2 = circs[0]
        y1 = y1 = circs[1]
        r2 = circs[2]
    }

    else if (len == 4) {
        x1 = x2 = circs[0]
        y1 = y1 = circs[1]
        r1 = circs[2]
        r2 = circs[3]
    }

    else if (len == 5) {
        x1 = circs[0];
        y1 = circs[1];
        x2 = circs[2];
        y2 = circs[3]
        r2 = circs[4]
    }

    else if (len == 6) {
        x1 = circs[0];
        y1 = circs[1];
        x2 = circs[2];
        y2 = circs[3]
        r1 = circs[4];
        r2 = circs[5]
    }

    this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)

    return this
}
h.lGx = h.linGrad = function () {

    alert('h.linGrad')
    var args = _.toArray(arguments)

    args[0] = _.map(args[0], function (col) {
        return oO('c', col)
    })

    this.graphics.beginLinearGradientFill.apply(
        this.graphics, args)
    return this
}
h.C2 = function (C, l) {
    alert('h.C2')
    var h = this, gx = h.graphics, g = G(arguments)
    o = O(g[0]) ? g[0]
        :
    {C: [0], l: g[1]}
    gx.s(o.C ? oO('c', o.C) : null)
    if (N(o.l)) {
        h.l(o.l)
    }
    return h

}



h.dcWorking = function (x, y, r) {
    var h = this, gx = h.graphics

    if (N(r)) {
        gx.dc(x, y, r)
    }

    else if (N(y)) {
        gx.dc(x, y, 100)
    }

    else if (N(x)) {
        gx.dc(0, 0, x)
    }
    else {
        gx.dc(0, 0, 100)
    }

    return h
}
h.rrx = function (x, y, W, H, r) {
    var h = this, gx = h.graphics
    gx.drawRoundRect(x, y, W, H, r)
    return h
}
h.dex = h.ellx = function (x, y, W, H) {
    var h = this, gx = h.graphics

    gx.drawEllipse(x, y, W, H)

    return h
}
h.drx = function (x, y, W, H) {
    var h = this, gx = h.graphics
    if (N(H)) {
        gx.dr(x, y, W, H)
    }
    else if (N(W)) {
        gx.dr(x, y, W, W)
    }
    else if (N(y)) {
        gx.dr(0, 0, x, y)
    }
    else if (N(x)) {
        gx.dr(0, 0, x, x)
    }
    else {
        gx.dr(0, 0, 100, 100)
    }
    return h
}

h.drawPolygonYesNo = function (V, c, C, l) {
    var h = this, //h.drawConnectedLines =

        n = V.length

    h.c(c, C, l)

    _.each(V, function (v) {

        v.X = v.x
        v.Y = v.y

    })

    if (n >= 3) {
        h.mt(V[0]) //move to the FIRST//lineTo the REST

        T(n, function (i) {
            h.lt(V[i % n])
        })
    } //just a clever way to start from 1

    return h
} // h.cir=  function(r,x,y,c,C){var h = this, gx = h.graphics; return N(x) ?  h.c(c,C).dc(x,y,r) : h.c(x,y).dc(r)  }
