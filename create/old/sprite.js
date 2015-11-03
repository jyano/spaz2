sheet()
spr()
builder()
function sheet() {

    sS = ss = cjs.SpriteSheet.prototype
    sS.flp = sS.addFlipped = function (a, b, c) {

        cjs.SpriteSheetUtils.addFlippedFrames(this, a || true, b || false, c || false)
        return this
    }
    cjs.sSU = cjs.SpriteSheetUtils
    $SS = function (ss) {
        ss.images = ss.images || ss.i
        ss.animations = ss.animations || ss.a
        ss.frames = ss.frames || ss.f
        ss.framerate = ss.framerate || ss.r
        ss = new cjs.SpriteSheet(ss)
        //fix source (needs a '/')
        //ss.images[ 0 ] = _.ensureSlash( ss.images[0] )
        //set next to false, on all anims
        // _.e(ss.animations, function(an){an.next = false})
        //to do: parse it! (get rid of unnecessary json strings in keys)
        return ss
    }
    cjs.spriteSheet   =function(a){return new cjs.SpriteSheet(a)}
    cjs.parseZoe=function(sprObj){


        //fix source (needs a '/')
        sprObj.images[ 0 ] = S.eL( sprObj.images[0] )

        //set next to false, on all anims
        //_.e(sprObj.animations, function(anim){anim.next = false})


        //to do: parse it! (get rid of unnecessary json strings in keys)


        return sprObj}
}
function spr() {
    sp= cjs.Sprite.prototype

    $Sp=   function(ss,x,y){var g=G(arguments), sp
        //call a spritesheet by name
        if(S(ss)){ ss = cjs._sp[ ss ] }
        //it if it is a ss lit, it makes it into a ss
        //make a sprite
        sp = new cjs.Sprite(ss.images||ss.i? $SS(ss) : ss )
        sp.ss = sp.spriteSheet
        sp.XY( N(x,0), N(y,0) )
        return sp
    }
    sp.p = function (an) {
        var sp = this
        if (U(an)) {
            sp.play()
        }
        else {
            sp.gotoAndPlay(an)
        }
        return sp
    }
    sp.s = sp.P = function (an) {
        var sp = this
        if (U(an)) {
            sp.stop()
        }
        else {
            sp.gotoAndStop(an)
        }
        return sp
    }
    sp.N = function (n) {
        this.advance(n);
        return this
    }
    sp.as = function () {

        return this.spriteSheet.getAnimations()
    }
    sp.a = function () {
        return this.currentAnimation
    }
    sp.f = function (f) {
        var g = G(arguments)
        if (U(f)) {
            return g.p ? this.currentFrame : this.currentAnimationFrame
        }
        if (g.p) {
            this.currentFrame = f
        }
        else {
            this.currentAnimationFrame = f
        }
        return this
    }
    sp.r = _.gS(sp, 'framerate')
    sp.e = function (fn) {
        fn = fn || function () {
            n = N(window['n'], 0);
            $l('frame! ' + n++)
        }
        this.on('animationend', fn)
        return this
    }
    sp.p = function (what) {
        if (U(what)) {
            this.play()
        }
        else {
            this.gotoAndPlay(what)
        }
        return this
    }
    sp.s = sp.P = function (what) {
        if (U(what)) {
            this.stop()
        }
        else {
            this.gotoAndStop(what)
        }
        ;
        return this
    }
    sp.skip = sp.adv = function (num) {
        this.advance(num);
        return this
    }
    sp.cA = sp.cAn = sp.currAnim = function () {
        return this.currentAnimation
    }
    sp.cAF = currAnimFrame = function () {
        return this.currentAnimationFrame
    }
    sp.cF = sp.cFr = sp.currFrame = function () {
        return this.currentFrame
    }
    sp.fR = sp.rate = function (rate) {
        if (U(rate)) {
            return this.framerate
        }
        this.framerate = rate
        return this
    }
    sp.end = function (func) {
        func = func || function () {
            n = N(window['n']) ? n : 0
            $l('frame! ' + n++)
        }
        this.on('animationend', func)
        return this
    }

    $Sp = function (ss, x, y) {
        var g = G(arguments), sp
        //call a spritesheet by name
        if (S(ss)) {
            ss = cjs._sp[ss]
        }
        //it if it is a ss lit, it makes it into a ss
        //make a sprite
        sp = new cjs.Sprite(ss.images || ss.i ? $SS(ss) : ss)
        sp.ss = sp.spriteSheet
        sp.XY(N(x, 0), N(y, 0))
        return sp
    }
    sp.p = function (an) {
        var sp = this
        if (U(an)) {
            sp.play()
        }
        else {
            sp.gotoAndPlay(an)
        }
        return sp
    }
    sp.s = s.P = function (an) {
        var sp = this
        if (U(an)) {
            sp.stop()
        }
        else {
            sp.gotoAndStop(an)
        }
        return sp
    }
    sp.N = function (n) {
        this.advance(n);
        return this
    }
    sp.as = function () {

        return this.spriteSheet.getAnimations()
    }
    sp.a = function () {
        return this.currentAnimation
    }
    sp.f = function (f) {
        var g = G(arguments)
        if (U(f)) {
            return g.p ? this.currentFrame : this.currentAnimationFrame
        }
        if (g.p) {
            this.currentFrame = f
        }
        else {
            this.currentAnimationFrame = f
        }
        return this
    }
    sp.r = _.gS(sp, 'framerate')
    sp.e = function (fn) {
        fn = fn || function () {
            n = N(window['n'], 0);
            $l('frame! ' + n++)
        }
        this.on('animationend', fn)
        return this
    }

    s = cjs.Sprite.prototype
    s.p = function (what) {
        if (U(what)) {
            this.play()
        }
        else {
            this.gotoAndPlay(what)
        }
        return this
    }
    s.s = s.P = function (what) {
        if (U(what)) {
            this.stop()
        }
        else {
            this.gotoAndStop(what)
        }
        ;
        return this
    }
    s.skip = s.adv = function (num) {
        this.advance(num);
        return this
    }
    s.cA = s.cAn = s.currAnim = function () {
        return this.currentAnimation
    }
    s.cAF = currAnimFrame = function () {
        return this.currentAnimationFrame
    }
    s.cF = s.cFr = s.currFrame = function () {
        return this.currentFrame
    }
    s.fR = s.rate = function (rate) {
        if (U(rate)) {
            return this.framerate
        }
        this.framerate = rate
        return this
    }
    s.end = function (func) {
        func = func || function () {
            n = N(window['n']) ? n : 0
            $l('frame! ' + n++)
        }
        this.on('animationend', func)
        return this
    }


    cjs.sprite=$sprite=function(spriteSheet){
//EaselSprite= J$=

        if(spriteSheet.images){

            spriteSheet=cjs.parseZoe(spriteSheet)
            spriteSheet=new cjs.SpriteSheet(spriteSheet)
        }


        return new cjs.Sprite( spriteSheet )

    }
    cjs.sprite100 = function(a){

        var spr = cjs.sprite(a)
        spr.rXY(50)
            .opacity(.8)
        return spr}
    cjs.sprite=$sprite=function(spriteSheet){
//EaselSprite= J$=

        if(spriteSheet.images){

            spriteSheet=cjs.parseZoe(spriteSheet)
            spriteSheet=new cjs.SpriteSheet(spriteSheet)
        }


        return new cjs.Sprite( spriteSheet )

    }
    cjs.sprite100 = function(a){

        var spr = cjs.sprite(a)
        spr.rXY(50)
            .opacity(.8)
        return spr}



    meSprite = function () {
        return $Sp($SS).XY(10).drag()
    }
}
function builder(){

    b =   sSB = cjs.SpriteSheetBuilder.prototype


    cjs.builder = cjs.spriteSheetBuilder = cjs.sSB = cjs.ssB = cjs.ssb = function(mc){

        ssb = new createjs.SpriteSheetBuilder()
        if(mc){ssb.A(mc)}

        return ssb}


    b.Z = function (sc) {

        if (U(sc)) {
            return this.scale
        }
        this.scale = sc;
        return this
    }
    b.maxW = function (sc) {
        if (U(sc)) {
            return this.maxWidth
        }
        this.maxWidth = sc;
        return this
    }
    b.A = function (mc) {
        this.addMovieClip(mc)
        return this
    }
    b.complete = function (func) {
        this.on("complete", func)
        return this
    }
    b.async = function (funcNum, num) {
        if (F(funcNum)) {
            this.complete(funcNum)
            this.buildAsync(num)
        }

        else {
            this.buildAsync(funcNum)
        }


        return this
    }

    sSB=  cjs.SpriteSheetBuilder.prototype
    sSB.Z = function (sc) {
        if (U(sc)) {return this.scale}
        this.scale = sc;
        return this
    }
    sSB.maxW = function (sc) {
        if (U(sc)) {
            return this.maxWidth
        }
        this.maxWidth = sc;
        return this
    }
    sSB.A = function (mc) {
        this.addMovieClip(mc)
        return this
    }
    sSB.complete = function (func) {
        this.on("complete", func)
        return this
    }
    sSB.async = function (funcNum, num) {
        if (F(funcNum)) {
            this.complete(funcNum)
            this.buildAsync(num)
        }

        else {
            this.buildAsync(funcNum)
        }


        return this
    }
    cjs.sSB= cjs.builder = cjs.spriteSheetBuilder =   cjs.ssB = cjs.ssb = function (mc) {

        var sSB = new cjs.SpriteSheetBuilder()
        if (mc) { sSB.A(mc) }
        return sSB
    }
    sSB.Z = function (sc) {
        if (U(sc)) {
            return this.scale
        }
        this.scale = sc;
        return this
    }
    sSB.maxW = function (sc) {
        if (U(sc)) {
            return this.maxWidth
        }
        this.maxWidth = sc;
        return this
    }
    sSB.A = function (mc) {
        this.addMovieClip(mc)
        return this
    }
    sSB.complete = function (func) {
        this.on("complete", func)
        return this
    }
    sSB.async = function (funcNum, num) {
        if (F(funcNum)) {
            this.complete(funcNum)
            this.buildAsync(num)
        }

        else {
            this.buildAsync(funcNum)
        }


        return this
    }
    cjs.sSB = cjs.builder = cjs.spriteSheetBuilder = cjs.ssB = cjs.ssb = function (mc) {

        var sSB = new cjs.SpriteSheetBuilder()
        if (mc) {
            sSB.A(mc)
        }
        return sSB
    }

}
cjs.sSU = cjs.SpriteSheetUtils