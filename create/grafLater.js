
$.St = function () {alert('$.St')
    z()
    s = $St().t()
    s.bm('me', function (bb) {
        b = bb.drag()
    })
    return s
}



function dispObwillNeed(){


}
function disObAlpha(){

    i.shootBullet = function () {alert('i.shootbullet')
        shooter = this
        s = stage = shooter.stg()

        bullet = cjs.circ(8, 'w').XY(shooter).a2(s)

        bullet.startMoving(
            (shooter.vx || 1) * 1.5, (shooter.vy || 1) * 1.5
        )

    }
    i.hitByBullet = i.isPointInMyRectBounds = function (bullet) {alert('i.hitByBullet')
        var args = G(arguments), bullet = args[0],

            didHit = M.pointInRectangle(
                bullet.cX(), bullet.cY(),
                {
                    x: this.cX(),
                    y: this.cY(),
                    w: this.W(),
                    h: this.H()
                }
            )
        if (args.n) {
            if (didHit) {
                this.rm()
            }

        }
        return didHit

    }

    i.killAllIAmHitting = function () {
        var i = this,
            stage = i.St()
        _.e(stage.children, function (obj) {
            if (i != obj) {
                obj.hitByBullet(i, '-')
            }
        })

    }
    i.makeMeAKiller = function () {
        var i = this
        cjs.tick(function () {
            i.killAllIAmHitting()
        })
        return this
    }
    i.bounce = function (n) {
        var i = this,
            stage = i.getStage(),
            h = stage.H(),
            w = stage.W()
        n = N(n, 0)
        T.t(
            function () {
                var x = i.x, y = i.y
                if (x > w - i.W() - n || x < (n )) {
                    i.vX('-')
                }
                if (y > h - i.H() - n || y < (n )) {
                    i.vY('-')
                }
            })
        return i
    }
    i.startMoving = function (x, y) {
        var i = this, vx, vy
        if (x) {
            i.vX(x)
        }
        if (y) {
            i.vY(y)
        }
        vx = i.vx || 0
        vy = i.vy || 0
        T.t(function () {
            i.X(vx, '+').Y(vy, '+')
        })
        return i
    }
    i.toR = i.moveRight = function (num) {
        num = num || 20
        this.X(num, '+')
        return this
    }
    i.toL = i.moveLeft = function (num) {
        num = num || 20
        this.X(num, '-')
        return this
    }
    i.toU = i.moveDown = function (num) {
        num = num || 20
        this.Y(num, '-')
        return this
    }
    i.toD = i.moveDown = function (num) {
        num = num || 20

        this.Y(num, '+')
        return this
    }
    i.keyControls = function (num) {
        var args = G(arguments), i = this
        if (args.P) {
            $.kD('left', function () {
                i.toL(num)
            })
            $.kD('right', function () {
                i.toR(num)
            })
        }
        if (args.N) {
            $.kD('up', function () {
                i.toU(num)
            })
            $.kD('down', function () {
                i.toD(num)
            })
        }
    }

}


function alpha(){
    function easPhys(){
        i.move = function () {
            return this.X(this.vx || 0, '+').Y(this.vy || 0, '+')
        }
        i.accelerate = function () {
            return this.vX(this.ax || 0, '+').vY(this.ay || 0, '+')
        }
        i.jerk = function () {
            return this.aX(this.jx || 0, '+').aY(this.jy || 0, '+')
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
        i.vXY = function (x, y) {
            return this.vX(x).vY(y)
        }
        i.aX = function (a) {
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
        i.aY = function (a) {
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
        i.jX = function (a) {
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
        i.jY = function (a) {
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
        i.brake = function () {
            this.vx = this.vy = 0
        }
    }

}




function alpha() {
    oC = function (c) {
        return oO('c', c)
    }
    oK = function (a) {
        return oO('k', a)
    }
    oT = function (a) {
        return oO('t', a)
    }
    oE = function (a) {
        return oO('e', a)
    }
    oI = function (a) {
        return oO('i', a)
    }
    oS = function (a) {
        return oO('s', a)
    }
    $o = function o(a, b, c) {
        return _.isUndefined(b) ? _p(o, a) : G(arguments).N ? oO(a, b, c) : Oo(a, b, c)
    }
    oQ = function (f, m) {
        $(function () {
            Q(m || mf, f)
        })
    }
}

old=function(){
    ct.bmR=   function(i,fn){var ct=this,bm
        alert('ct.bmR')
        $.i(i, function(i){
            bm = $Bm( i[0] ).a2(ct)
            bm.rXY(
                bm.W()/2,
                bm.H()/2
            )
            if(fn){ fn(bm) }
        })
        return ct
    }
}

//to shape -> ct.circle = function(x,y,r,c){var ct=this;ct.A(cjs.circle(x,y,r,c));return ct}

// 'P' is avaible.  potition?  (M is taken by Math, but mouse needs something)


old=function(){

    q.mf = q.manifest = function () {var q=this,g=G(arguments)
        q.loadManifest(cjs.mf.apply(null, g))
        return q}
    cjs.lQDep= cjs.lqDep=cjs.loadQueueDep=function(mf,fn){
        var q = new cjs.LoadQueue(true)
        if(A(mf)){q.loadManifest(cjs.mf.apply(null, mf))}
        if(F(fn)){q.complete(function () {fn(function (i) {return q.getResult(i)})})}
        return q}
    cjs.mfDep = cjs.manifestDep = function(a){var g=G(arguments), mf=[]
        _.e(g, function (v) {
            mf.push({
                src: cjs.src(v),
                id: v})})
        return mf
    }

    //cjs.handleFileLoad = function (e) {if (e.item.type == "image") {images[e.item.id] = e.result}}
//cjs.makeManifest = cjs.makeMan=function(a) {return cjs.manifest.apply(null, _.m(a.images, function (i) {return Graphics.fromSource(i)}))}

    QDep=function(i,fn){
        q=cjs.lQ(),
            mf=[]
        _.e(i,function(v) {mf.push({src: cjs.src(v), id: v})})
        q.mf(mf)
        q.c(function(){fn(q)})
        return q}

    tickX=function(e){j.Y(e.delta/1000*100,'-' )}
    timeStamp2 = function(s, j, pxPerSec){
        var fn=function(s,e){
            if(!N(j.ts)){j.ts=0;j.lts=e.ts}
            else{j.ts= e.ts-j.lts;j.lts=e.ts
                j.y((j.ts/1000) * pxPerSec,'-')  }}
        return s.t(fn)}
}
old=function(){

// s.B = function(x,y){return this.ct(x,y).drag() }
    /*
     $a1=function(ob, g, c){

     ob.apply(c||ob,  g)

     }


     $a = function(gx, met, g){

     gx[met].apply(gx, g)

     }


     $a(gx, 'dc',  N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )

     gx.dc.apply(gx, N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )

     gx.app=function(met,g){var gx=this

     gx.dc.apply(gx, N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )

     }
     */


    cjs.RECTx= function(c, W, H, x, y, a){var  g=G(arguments),    ct = cjs.ct(), h, o; if(O(c)){o=c} else if(S(c)){o={ c:c, w:W, h:H, x:x, y:y, a:a } }
        o = b2d.oDef(o)
        h = ct.h(o.x, o.y).c(o.c, o.C, o.l).rot( o.a )
        if(o.bm){h.bm('me', function(){h.dr2(o.x, o.y, o.w, o.h)}); return h}
        if(o.rg){h.rg(o.c,o.C)}
        if(o.lg){h.lg(o.c,o.C)}
        h.dr2(o.x, o.y, o.w, o.h)
        cjs.recx=cjs.rectx= function self(wd, ht, c, C){var h,hW,hH
            wd=_.tN(wd,100)
            ht=_.tN(ht,wd)
            hW=wd/2
            hH=ht/2
            h=$h().c(c||'g',C||'w').mt(-hW,-hH)
                .lt(-hW,hH).lt(hW,hH).lt(hW,-hH).lt(-hW,-hH)
            return h
        }
        ct.artx = function(x,y,c,C){var g=G(arguments),ct=this,h

            y= N(g[1])?g[1]:x
            c= S(g[2])?oO('c',g[2]):null
            C= S(g[2])?oO('c',g[3]):c

            h = $h(x,y,c,C).a2(ct)

            if(g.p){h.drag()}
            return h}
        return h}

//b2d.colMap=function(C){return _.map(C,function(c){return oO('c',c)})}
//cjs.chalk=function(t,c){if(O(t)){alert('check code'); t='x: '+t.x+', '+'y: '+ t.y}; return cjs.T(t,"26px Arial", c||"w").XY(550,150)}
    /*
     w.i.bm('me', function(bm){
     bm.XY(300).sXY(.2)
     w.i.dot(300,300)
     })*/
//third wheel, wagon hitch



}

function utils() {
    Utils = {}
    Utils.isNested = isArrayWhoseFirstObjIsAlsoAnArray = Utils.isDataUrl = Du = function (a) {
        return s$(a).contains('data:')
    }
    Utils.asElement =  E
    Utils.apply = _a = function (a, b, c, d, e) {//_.isUndefined(a)? qq('a')
        return F(a) ? a.apply(c || a, b)
            : S(a) ? a.split(b || '/').pop()// after('/')

            : 0//:a.animate(b,c,d,e)//
    }
    Utils.URL = _u = function (a) {

        url = function (a) {
            return 'url("' + a + '")'
        }

        return url(a)
        //return _.isUndefined(a)? qq('ul'): url(a)

    }
    Utils.func = _v = function (a) {
        return S(a) ?
            function () {
                Function(a)()
            }
            : F(a) ? a : F(a.value) ? a.value() : a.value
    }

    Graphics = window['Graphics'] || {}
    Graphics.getCanvas = C
    Utils.chompRight = chompRight = function (a, b) {
        return s$(a).chompRight(b).s
    }
    Utils.ensureRight = ensureRight = function (a, b) {
        return

        s$(a).ensureRight(b).s
    }
    Range = function (a, b) {
        var g = G(arguments)

        return N(b) ? _.range(a, b)

            : g.P ? _.range(a)

            : _.range(1, (a || 10) + 1)

    }
//should be dep? 'fsa'.toUpperCase()
    Utils.toUpperCase = toUpperCase = uC = function (a) {
        return S(a) ? a.toUpperCase()
            : A(a) ? _.map(a, function (a) {
            return uC(a)
        }) : a
    }
    Utils.isUpper = isUpper = Uc = function (a) {
        if (S(a)) { //for safety?
            return s$(a).isUpper()
        }
    }
    lC = function (a) {
        return S(a) ? a.toLowerCase()
            : A(a) ? _.m(a, function (a) {
            return lC(a)
        }) : a
    }
    Lc = function (a) {
        if (S(a)) {
            return s$(a).isLower()
        }
    }
    _.props = Utils.props = $p = function p(i, t, kK, vf, f) {
//get: index thing key //set: index thing key value [function] //setOb: index thing ob [function]
        if (O(kK)) {
            _.each(kK, function (v, k) {
                p(i, t, k, v, vf)
            })
        }                   //setOb

        if (U(kK)) {
            return _p(p, i, t)
        }
        if (vf == "*") {
            return p(i, t, kK, $r(kK))
        } // set it randomly?!
        else if (U(vf)) {
            return t[oO(i, kK)]
        }   //get
        else {
            f = f || _s  //function(t,k,v){t[k]=v}  //set
            f(t, oO(i, kK), oO(kK, vf, 'R'))
        }
        return t
    }
    _.methods = Utils.methods = $m = function f(i, x, m, g) { //=met
        if (U(i)) {
            return
        }
        if (U(x)) {
            return _p(f, i)
        }
        if (U(m)) {
            return _p(f, i, x)
        }// if(U(g)){return _p(f,i,x,m)}
        if (!A(g)) {
            return _a(f, [i, x, m, _r(arguments, 3)])
        }//met('x',  c.x, 'd',  [i,0,0]     )//met('x',  c.x, 'd',   i,0,0   )
        return _a(x[oO(i, m)], g, x) || x
    }
    nN = function (w) {
        return Boolean(Number(w))
    }//M=
    Nn = _.isNan
    J = function (a, b, c) {
        if (S(a)) {
            return $.getJSON(a, b, c)
        }
        ;
        return JSON.stringify(a)
    }
    isWindow = function (a) {
        if (O(a)) {
            if (s$(a).contains('Window') ||
                s$(a[0]).contains('Window')) {
                return window
            }
        }
    }

}
function yano() {
    Yano.func = function () {
        $('body').C('*')
    }
    Yano.interval = 1000
    Yano.intervalID = null
//when you call this straight:
//it checks if a Y-func is currently running (by seeing if Y.intervalID is set)
//if it is, it clears the Y-func.. (and then unsets the Y.intervalID)
// if func not running, it does setInterval, saving the returned # as Y.intervalID
// if you pass in a neg, it will only toggle(turn) off
// if you pass in a pos, it will only toggle(turn) on
    Yano.toggleFunc = function self(func, interval) {
        var args = G(arguments),
            func = args[0],
            interval = args[1]


        if (Yano.intervalID) {
            if (args.P) {
                clearInterval(Yano.intervalID)
                Yano.intervalID = null
            }
        }
        else {
            if (args.N) {
                Yano.intervalID = setInterval(Yano.func, Yano.interval)
            }
        }
    } //rat
    Yano.setToggleFunc = function (func, interval) {
        if (func) {
            Yano.intervalFunc = func
        }
        if (interval) {
            Yano.interval = interval
        }
        Yano.setIntervalID = setInterval(Yano.intervalFunc, Yano.interval)
        return Yano.toggleFunc
    }
//random
    Yano.random = Yano.rand = $r = function (a, b) {
        a = a || 'c'; //cannot be 'color' ?? only abr??
        var values = _.values(oO(a))
        return Oo(a, b) || values[_.random(_.size(values) - 1)]
    }

}

function alpha(){
    T = function(times,func){
        var timeout
        if(N(times)){

            return _.t(times, function(i){
                func(i+1)
            })

        }
        if(F(times)){
            timeout=N(func)?func:100
            func=times
        }
        return setTimeout(func,timeout)
    }
    $.in = function () {
        var g = G(arguments), o, n = 1,
            ret

        if (N(g[0])) {
            o = {s: g[0], fn: _.r(g)}
        }

        else {
            o = {s: 1, fn: g}
        }
        _.e(o.fn, function (fn) {
            var s = o.s * n
            ret = setTimeout(_v(fn), s * 1000)
            n++
        })
        return ret
    }

    $.T = function (a, b) {
        return setTimeout(_v(a), b)
    }


}
bad=function(){

    //xP=function(a){return Utils.props('X', X(a))}
//xM=function(a){return Utils.methods('x', X(a))}
//tf=function(){n=1;t=true;T(function(){t=false},1000);I(function(){if(t==true){co();n=n+1}else{$l(n)}},1)}


    $.inASec=function(func){return setTimeout(func, 1000)}
    cjs.waitFor=function(time){time=N(time)?time:1000
        cjs.wait = true
        setTimeout(function(){cjs.wait = false}, time)}
    Qx=function Q(a){
        if(!O(a)){return}
        if(s$(a.toString()).contains('Window')||a[0]
            && s$( a[0].toString()).contains('Window')){
            return $(window)}
        return a.name === 'q'? Q(a.q)
            :E(a)? $(E(a))
            :0

    }





//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

//Object.prototype.__C = function(){ return this.constructor.name }

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////
////////////////////////////////////////////////////////





    gT = withGetTest = function(url){
        $.get('/'+url, function(aa){a=aa})
    }


    vkl=function(a){
        return new Function("v","k","l","l[k]=" + a)
    }
    $.sec=function(f){return setTimeout(f,1000)}
    oO.V = values=function(a){if(S(a)){ a=oO(a) };return _.values(a)}

    scaleXandYBy = scl=function(v,a){
        v.x*=a;
        v.y*=a;
        return v
    }

//??? sub=function(a,b){return a.o('s',b)}


    _lX=function(a,b){

        if(F(b)){$(a).load(b);return a}
        return _.l(a,b)

    }
    _mX = function (a, b, c) {
        return F(b) ? _.m(a, b, c)
            : A(a) ? _.min(a) : function (z) {
            return z * a
        }}

    _hX=function _h(a,b,c){
        if(O(b)){return _h(b.toString(), a)}
        if(S(a)){ return s$(a).contains(b,c)}
        if(O(a)){
            if(U(b)){
                return a.height?(F(a.height)?a.height():a.height):F(a.h)?a.h():N(a.h)?a.h:false}
            if(N(b)){
                if(F(a.height)){a.height(b);return a}
                if(N(a.height)){a.height=b;return a}
                if(F(a.h)){a.h(b);return a}
                if(N(a.h)){a.h=b;return a}}
            return A(a)? _.contains(a,b): _.has(a,b)}
        if(U(a)){

            return qq($('html'))

        }
    }





    _IX=function(a,b){return U(a)?new Image()
        : U(b)? _.invert(a)
        : _a(_.intersection, arguments)

    }


    IX=function(a,b){if(N(b)){return setInterval(_v(a),b)}
        if(_h('Image', E(a))){return E(a)}}

    _wX=function(a,b){
        if(O(a)){
            var w=function(a,b){if(_.isUndefined(b)){return a.width}
                a.width=b;return a}
            if(U(b)){return F(w(a))?a.width():w(a)?w(a):F(a.w)?a.w():a.w}
            if(F(w(a))){a.width(b)}
            else if(w(a)){w(a,b)}
            else if(F(a.w)){a.w(b)}
            else {a.w=b}

            return a}}




//fCC=function(a){ return String.fromCharCode(a) }




//qx = function(a){return xx(qi(a))}


//ddd=function(){return (d=_d().c('y').Z().a())}
//ccc=function(){return (c=$b($c()).drg())}

//test functions
//fA=function(a){return function(){alert(a)}}
//fL=function(a){return function(){$l(a)}}
//a3=function(){alert(3)}
//a4=function(){alert(4)}
//al=function(a){a=a||':)';alert(a);return a}

    H=function(a){
        var oH=function(a){
            if(O(a=a||$(window))){return Q(a).outerHeight()}}
        a=a||$(window);return N(a)? W()/a:oH(Q(a))}

//logic
    df=function(a,b){
        a=ob(a)
        return G(arguments).p? D(a, oO(b||''+'D'))
            :D(a)?a :b}



//cL=function(a){console.log(a);return a}

    ll=function(a,b){
        if(S(b)){console.log(a+': '+b)}
        else {
            $l(a+' ->')
            $l(b)}
        return b}
    _iX=function(a,b){

        return U(a)? qq('i'):

            A(a)? _.i(a,b): pI(a)
    }


    //is=function(a){return function(b){return b===a}}
//_.io$=function(a,b,c){return a.indexOf(b,(c<0?c+_z(a):c))}



//_j=function(a,b){return(a||[]).join(b||' ')}
//K=function(a,b,c){return N(a)? I(b, a*1000): N(b)? I(a, b): _.keys(a)}


//graphics
    onReady =_k = function(a){return O(a) && a.complete}



    obX=function(o){ // ************
        var g=G(arguments);
        return !O(o)? {}
            :g.p? o.clone()
            :o}



    _s=function s(a,b,c){

        var g=G(arguments)

        if(D(g[1])){a[b]=c;return a}

        if(U(a)){return qq('s')}

        return src(a)
    }



    iW = function(a){if(O(a=a||$$w)){return Q(a).innerWidth()}}
    iH = function(a){if(O(a=a||$$w)){return Q(a).innerHeight()}}


    $t = function(a, b){if(b2d.test){
        var g=G(arguments),
            a=g[0],
            b=g[1],str




        if(D(b)){

            str='||'
            _.e(g, function(s){
                str+=  ' '  + s.toString() + ' |'
            })

            str += '|'
        }

        else {
            str = a.toString()
        }


        $l(str)



    }; return a}



    Wx=function(a){var g=G(arguments)
        var oW=function(a){if(_.isObject(a=a||$(window))){
            return Q(a).outerWidth()}}
        a=a||$(window);
        return N(a)?W()/a:oW(Q(a))
    }


//just returns toDataUrl() on an object, safe
    tU=function(a){
        if(
            O(a) && F(a.toDataURL) ){
            return a.toDataURL() }


//tU=function(s){return  S(s)?sJ:tU(s)? tU(s)
// :s.u? s.u():iI(s)? s.src
// : s.image?s.image.src:0} //s/c/C/i/b->s sync
    }

    tDU=function(a){return a.toDataURL()}


    _W=function(a,b){

        if(U(b)){return a.which}
        return a.which==b
    } //_.without



    RX=function(a,b){

        var g=G(arguments)

        return( S(a) && S(b) )? (
            g.N? s$(a).ensureRight(b).s

                : s$(a).chompRight(b).s    )

            : N(b)? _.range(a, b)

            : N(a)? (g.P? _.range(a):  _.range(1,(a||10)+1)   )

            : new XMLHttpRequest()

    }
    _S = function (a, b) {
        return b ? String(a).split(b) : a.toString()
    }
    _r = function r(a, b, c, d) {

        return U(a) ? rnd()
            : (F(b) && D(c)) ? _.reduce(a, b, c)
            : (F(a) && D(c)) ? _.reduceRight(a, c, b)
            : (F(a) || F(b)) ? r(c, a, b)
            : N(a) ? _.random(a, b, c)
            : S(a) ? a.replace(b || '#', c || '')
            : _.rest(a, b)
    }
    ok = function (a) {
        return a || 'ok'
    }

    _P=function(a,b,c){
        return  S(a)?JSON.parse(a,b)
            :$(a).prepend(b,c)}

    P=function(a){
        return O(a)&&!F(a)&&!A(a)&&!(E(a))}


    _p=function(a,b,c){

        if(U(a)){return qq('p')}

        return(c===0)?function(c,d){  return a(c,b,d)}
            :F(a)? _a(_.partial, arguments)

            :O(a)?(G(arguments).N?$(a).parents(f)

            :$(a).parent(f))

            :S(b)?(S(a,b)?a:b+a)

            :nN(a)?a+'px'

            :a
    }









    _b=function(a,b,c){
        return U(a)? qq($('body'))//--
            :F(a)?_.b(a,b,c)//
            :S(a)?   a.split(b||'.')[0] //before('.')
            :_.bindAll(a,b,c)//
    }



    _e=function e(p,q,w){
        var eW=function (a,b){return l$(a,_z(b))==b}

        if(U(p)){return qq('li')}
        if(U(q)){return p.empty()}
        if(F(p)){p=O(p)}
        return (S(p) && S(q))? eW(p,q)
            :S(q)? e(p,function(v,k){eval(q)}, w)
            :_.e(p,q,w)
    }

    _F = function (a) {
        if (A(a)) {
            return _.flatten(a)
        }
    }
    _f = function (a, b, c) {

        return U(a) ? qq('f') // need to deprecate this

            : F(b) ? _.find(a, b, c)

            : _.f(a, b)

    }


    _g = function (a) {
        if (_.isArray(a)) {
            a = _.f(a)
        }
        return F(a) ? a
            : O(a) ? (a.target ? a.target : Q(a)[0])
            : a
    }


    _C = function (a, b) {
        return U(a) ? _c()[0]
            : A(a) ? _.compact(a)//dep
            : a.connect(b)
    }


    _c = function (a, b) {

        if (N(a)) {
            clearInterval(a)
        }
        return U(a) ? qq('c').k('can')
            .at({w: 100, h: 100})
            : b ? (A(a) ? a : [a]).concat(b)
            : O(a) ? a.children()
            : 0
    }

    _t = function me(a, b, c) {
        return U(a) ? qq('t')
            : N(a) ? _.t(a, _v(b), c)
            : D(b) ? $(a).text(b)
            : S(a) ? me(_b(), a)
            : $(a).text()
    }

    tA = function (a) {
        return O(a) ? _.toArray(a) : [a]
    }


}


function edu() {
    MAT2D = function () {
        /*
         a Scales the drawing horizontally
         b Skew the the drawing horizontally
         c Skew the the drawing vertically
         d Scales the drawing vertically
         e Moves the the drawing horizontally
         f Moves the the drawing vertically
         */

    }
}
touchEnable = function (s) {
    cjs.Touch.enable(s);
    return s
}//important for ipad//move this onto stage itself
