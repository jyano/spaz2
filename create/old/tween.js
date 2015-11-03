cjs.Tween.g = cjs.Tween.get
$Tw = cjs.Tw = function (a, b) { // EaselTween=tw=
    var displayObject = a
    tweenGet = function (a) {//twg=
        //this returns tween-get on a display obj
        //you can optionally pass an array (ob, op1, op2..)
        return A(a) ? cjs.Tween.get(a[0],
            tweenPops.apply(this, _.r(a)))
            : cjs.Tween.get(a)
    }
    tweenPops = function () {//twp =
        var args = G(arguments),

            o = {}

        args.e(function (arg) {
            if (arg == 'l') {
                o.loop = true
            }
            if (arg == 't') {
                o.useTicks = true
            }
            if (arg == 'i') {
                o.ignoreGlobalPause = true
            }
            if (arg == 'o') {
                o.override = true
            }
            if (arg == 'p') {
                o.paused = true
            }
            if (N(arg)) {
                o.position = arg
            }
            if (F(arg)) {
                o.onChange = arg
            }
        })
        return o
    }
    if (U(b)) {
        return tweenGet(displayObject)
    }
    //first arg passed to twg, and then rest of args are 'to' pams
    var g = G(arguments)
    displayObject = tweenGet(g[0])
    _.e(g.r, function (b) {
        //can pass obj, time ,ease
        if (A(b)) {
            if (b[2]) {
                displayObject = displayObject.to(cjs.ww(b[0]), b[1], $Ea(b[2]))
            }
            //can pass obj, time
            else if (b[1]) {
                //can set pops to another obj??
                if (O(b[1])) {
                    displayObject = displayObject.set(cjs.ww(b[0]), b[1])
                }
                else {
                    displayObject = displayObject.to(cjs.ww(b[0]), b[1])
                }
            }
            else {
                displayObject = displayObject.tick(a[0])
            }
        }
//can pass a function and it will run when it's its turn
        else if (F(b)) {
            displayObject = displayObject.call(b, [])
        }
        //make it wait, optionally pass in true! ?
        else if (N(b)) {
            if (b < 0) {
                // TELLING IT NOT TO UPDATE OTHER TWEEN PROPERTIES DURING THE WAIT (if mult tweens on same target)
                displayObject = displayObject.wait(b * -1, true)
            }
            else {
                displayObject = displayObject.wait(b)
            }
        }
        //for playing/stopping?
        else if (O(b) && b.length == 1) {
            if (b.p) {
                displayObject = displayObject.play(b.p)
            }
            else if (b.s) {
                displayObject = displayObject.stop(b.s)
            }
        }
        else {
            displayObject = displayObject.to(cjs.ww(b))
        }
    })
    return Tw(displayObject)
    function Tw(tween) {
        var g = G(arguments), w = tween
        //w.target
        //use when returned
        // w.play  = w.P=w.p=function(){ w.setPaused(false);return w}
        // w.stop  = w.S=w.s=function(){ w.setPaused(true);return w}
        //use in queue

        return w
    }
}
cjs.ww =  function (o) {
    var w = {}
    if (N(o.x)) {
        w.x = o.x
    }
    if (N(o.y)) {
        w.y = o.y
    }
    if (N(o.xy)) {
        w.x = w.y = o.xy
    }
    if (N(o.sx)) {
        w.scaleX = o.sx
    }
    if (N(o.sy)) {
        w.scaleY = o.sy
    }
    if (N(o.sxy)) {
        w.scaleX = w.scaleY = o.sxy
    }
    if (N(o.s)) {
        w.scaleX = w.scaleY = o.s
    }
    if (N(o.kx)) {
        w.skewX = o.kx
    }
    if (N(o.ky)) {
        w.skewY = o.ky
    }
    if (N(o.kxy)) {
        w.skewX = w.skewY = o.kxy
    }
    if (N(o.k)) {
        w.skewX = w.skewY = o.k
    }
    if (N(o.r)) {
        w.rotation = o.r
    }
    if (N(o.a)) {
        w.alpha = o.a
    }
    if (N(o.rx)) {
        w.regX = o.rx
    }
    if (N(o.ry)) {
        w.regY = o.ry
    }
    if (N(o.rxy)) {
        w.regX = w.regY = o.rxy
    }
    if (N(o.gy)) {
        w.regY = o.ry
    }
    if (N(o.gxy)) {
        w.regX = w.regY = o.rxy
    }
    if (N(o.g)) {
        w.regX = w.regY = o.g
    }
    if (o.v == 0) {
        w.visible = false
    }
    if (o.v == 1) {
        w.visible = true
    }
    return w
}
tw = cjs.Tween.prototype
tw = cjs.Tween.prototype
tw.t = tw.then = function (tw, a, b) {
    return this.to(cjs.ww(tw), a, b)
}
tw.pos = function(a,b){

    //get or set position of tween (in time in ms)// see w.dr
    if( U(a) ){return w.position}
    if(b=='n'){b= cjs.Tween.NONE}//0
    if(b=='l'){b= cjs.Tween.LOOP}//1 default
    if(b=='r'){b= cjs.Tween.REVERSE}//2
    tw.setPosition( a, acm(b) )
    //default is loop, can use r|n
    return w}
tw.toggle = function () {

    var isPaused = this._paused

    if (isPaused) {
        this.setPaused(false)
    }

    else {
        this.setPaused(true)
    }

    return this

}
tw.dur = tw.dr = function (a) {//total time duration
    //get time of tween in ms
    //duration:read only

    if (U(a)) {
        return this.duration
    }
}
tw.ignore = function (a) {
    if (U(a)) {
        return this.ignoreGlobalPause
    }
    this.ignoreGlobalPause = a ? true : false;
    return this
}
tw.lp = tw.setLoop = function (a) {
    if (U(a)) {
        return this.loop
    }
    this.loop = a ? true : false
    return this
}
tw.$=   function(){var isPaused = this._paused
    if(isPaused){this.setPaused(false)}
    else{this.setPaused(true)}
    return this
}
i=cjs.DisplayObject.prototype
i.tw = function () {var i=this, g = G(arguments), tw
    g.unshift(i)
   tw=  _tw =  $Tw.apply(null, g)
    return tw
}
i.twL = function () {var g = G(arguments), tw,i=this

    g.unshift([this, 'l'])
    return tw = _tw = $Tw.apply(i, g)
}
i.sp = i.spin = function () {
    this.twL([{r: 360}, 4000]);
    return this
}
i.grow = function () {
    this.tw([{sxy: 10}, 10000])
    return this
}
$Ea = cjs.Ea = cjs.ease = function (e) {return cjs.Ease[oO('E', e)]} //Ea =

twns()
function twns() {
    _TW = tweens = {}
    _TW.rpunch = function (arm) {//arm=arm|| c1.g('arm')

        return $Tw(arm,
            [{r: 100, sx: -1}, 800],
            [{r: -20, sx: -2, sy: 2}, 400, 'eO'],
            [{r: 0, sy: 1, sx: -.8}, 200])
    }
    _TW.lpunch = function (lf) {
        return $Tw(lf,

            [{r: 10, s: 1}, 800],

            [{r: -140, s: 2.5}, 600, 'eO'],

            [{s: .8, r: 0}, 1600])

    }
    _TW.shakeY = function (a) {

        // EaselTween(  a,  [  {r:180, y:200, sxy:.5},  500  ]  )

        $Tw(
            [a, 'l'],
            [{y: -10}, 500],
            [{y: 10}, 500],
            [{y: -10}, 500]
        )

        return a
    }
    _TW.shakeX = function (a) {
        return $Tw(
            a,
            [
                {r: 180, y: 200, sxy: .5}, 500
            ]
        ).then(
            [a, 'l'],
            [{x: -20}, 50],
            [{x: 20}, 50],
            [{x: -20}, 50]
        )
    }
    _TW.rott = function (a) {
        return $Tw(
            a,

            [{r: 180, y: 200, sxy: .5}, 500]
        )
    }
    _TW.prod1 = function (a) {
        return $Tw(
            a,
            {x: -100, y: 200},
            [{x: 10, s: .5, y: -200}, 500],
            [{x: 100, s: 1.2, y: 200, a: .5}, 10000, 'eO'],
            {a: 0})
    }
    _TW.prod2 = function (a) {

        return $Tw(
            a,
            {x: 100, y: 200},
            [{x: 10, s: .5, y: 200}, 500],
            [{x: -100, s: 1.2, y: 200, a: .5}, 10000, 'eO'],
            {a: 0}
        )
    }
}

old=function(){
    //w.psv=function(){ return w.passive}
//Read-only. Indicates the tween's current position is within a passive wait.

    tw.tkXXX=function(a){
        this.tick(a);
        return this
    }}