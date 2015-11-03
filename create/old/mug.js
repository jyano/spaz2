function muggy() {
    s.snap = function (f) {
        $.post('/img', {
            d: this.toDataURL()//, dats: o.x.dats
        })
        sec(f)
        return this
    }

    $mugTest = function () {
        z();
        s = cjs.stage(800, 800).A()
        s.mug(function (mug) {
            m = mug
        })
    }


    ct.bData = function (data) {

        var bm = cjs.bm($.img().src($.parseJSON(data)))
        this.A(
            bm
        )

        return bm
    }
// **** works!!!!

    ct.mug = function (sc, fn) {
        var ct = this
        $.get('/myMug', function (m) {
            ct.bm(m, sc, fn)
        })
        return ct
    }


}