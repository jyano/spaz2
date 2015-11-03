cjs.Mc = function (a, b, c, d) {
    var mc = new cjs.MovieClip(a, b, c, d)
    return mc
}
mc=cjs.MovieClip.prototype
mc.auto = mc.aR = function (auto) {
    if (U(auto)) {
        return this.autoReset
    }
    this.autoReset = auto
    return this
}
mc.actions = mc.aE = function (enabled) {

    if (U(enabled)) {
        return this.actionsEnabled
    }

    this.actionsEnabled = enabled

    return this
}
mc.start = mc.startPos = mc.sP = function (a) {
    if (U(a)) {
        return this.startPosition
    }
    ;
    this.startPosition = a;
    return this
}
mc.p = mc.play = function (a, b) {
    if (this.setPaused) {
        this.setPaused(false)
    } else {
        this.play()
    }
    if (D(b)) {
        if (this.gotoAndPlay) {
            this.gotoAndPlay(a)
        }
        if (this.setPosition) {
            this.setPosition(a, b)
        }
        return this
    }
}
mc.s = mc.stop = function (a, b) {
    if (D(b)) {
        if (this.gotoAndStop) {
            this.gotoAndStop(a)
        }
        if (this.setPosition) {
            this.setPosition(a, b)
        }
        return this
    }
}
mc.mo = mc.__ = function (a) {
    if (U(a)) {
        return this.mode
    }
    this.mode = a;
    return this
}
mc.cL = function () {
    return this.getCurrentLabel()
}
mc.lb = function () {
    var g = G(arguments)
    return g.p ? this.getCurrentLabel() : this.getLabels()
}
mc.lp = function (a) { //loop
    if (U(a)) {
        return this.loop
    }
    this.loop = a
    return this
}
mc.aR = mc.auto = function (auto) {
    if (U(auto)) {
        return this.autoReset
    }
    this.autoReset = auto
    return this
}
mc.aE = function (en) {
    if (U(en)) {
        return this.actionsEnabled
    }
    this.actionsEnabled = en
    return this
}
cjs.Mc = function (a, b, c, d) {
    var mc = new cjs.MovieClip(a, b, c, d)
    return mc
}
cjs.mc = function (a, b, c, d) {
    var mc = new cjs.MovieClip(a, b, c, d)
    return mc
}
cjs.mc=function(a,b,c,d){
    var mc = new cjs.MovieClip(a,b,c,d)
    return mc}
mc.tl = function () {
    this.timeline.addTween.apply(this.timeline, arguments)

    return this
}
timeline()
function timeline(){
    cjs.tl=cjs.Tl = function(args){var tl = new cjs.Timeline()
        if(A(args)){

            tl.add(args)
        }
        return tl}
    tl = cjs.Timeline.prototype
    tl.A = tl.add = function (tw) {
        var tl = this
        if (A(tw)) {_.e(tw, function (tw) {tl.A(tw)})
            return tl
        }
        this.addTween.apply(this, arguments)
        return this
    }
    tl.remove = tl.xTw = tl.rm = function (tw) {
        this.removeTween(tw);
        return this
    }
    tl.currentLabel = tl.cL = function () {
        return this.getCurrentLabel()
    }
    tl.labels = tl.lb = function (a) {
        var t = this;
        if (U(a)) {
            return this.getLabels()
        }
        if (O(a)) {
            this.setLabels(a);
            return this
        }
        if (N(a) || S(a)) {
            return resolve(a)
        }
        return this
    }
    tl.lb = tl.labels = tl.cL = tl.currentLabel = function (a) {
        var g = G(arguments)
        if (U(a)) {
            return g.n ? this.getCurrentLabel() : this.getLabels()
        }
        if (O(a)) {
            this.setLabels(a);
            return this
        }
        if (N(a) || S(a)) {
            return resolve(a)
        }
        return this
    }
    mc.tl = function () {
        this.timeline.addTween.apply(this.timeline, arguments)

        return this
    }
}