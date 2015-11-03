b2d.p()

    fD.K = fD.addClass = function (clas) {
        if (U(clas)) {
            return this.getClass()
        }

        this.classes = this.classes || []
        this.classes.push(clas)
        return this
    }
    fD.getClasses = fD.getClass = function () {
        var g = G(arguments), classes

        this.classes = this.classes || []

        classes = this.classes.join(' ')
        if (g.p) {
            classes += ' : ' + this.body().getClasses()
        }


        return classes
    }
    fD.D = fD.data = function (data) {
        if (U(data)) {
            return this.userData
        }
        this.userData = data;
        return this
    }




b.K=b.addClass=b.getClass=b.getClasses=function(k){var b=this,g=G(arguments)
    b.classes=b.classes||[]
    b.ks=b.ks||[]

    if(O(k)){

        b.K(k.k)
        return b
    }

    if(U(k)){
        return b.classes.join(' ') //b.ks.join(' ')
    }
    g.eS(function(k){
        _.e(k.trim().split(' '),function(k){k=k.trim()
            if(k && !b.hasClass(k)){b.classes.push(k)} })//ks
    })

    return b
}









b.is=b.of=b.has=b.hasClass=b.ofClass=b.hasClasses=function me(k){
    var b=this, g=G(arguments), hasClass; b.classes=b.classes||[]
    if(A(k)){return me.apply(b,k)}
    if(!k){return true}
    if(b2d.isBody(k)){return b==k}
    _.e(g, function(k){if(!k||_.contains(b.classes, k.trim())){hasClass=true}})
    return hasClass
}

f.K = f.addClass=function(k){var f = this, g=G(arguments), fn
        f.classes = f.classes || []

    if(O(k)){

        f.K(k.k)
        return f
    }

    f.getClasses=f.getClass = function(){var f=this, g = G(arguments), ks
        f.classes = f.classes || []
        ks = f.classes.join(' ')
        if (g.p) {ks += ' : ' + f.B().K()}
        return ks
    }
    if(U(k)){return f.getClasses()}
    /*
    if(F(k)){
        fn = _.b(k,f)
        f.K(fn(f.getClasses()))
        return f}
    */
    _.e(g,function(k){
            if(S(k)){
                _.e(k.trim().split(' '),
                    function(k){k=k.trim()
                        if(k&&!f.has(k)){
                            f.classes.push(k)
                        }})}})
        return f
}

f.has=f.hasClass = f.hasClasses = function(k){var f=this, g=G(arguments),
    hasClass

    f.classes = f.classes || []
    if(!k){return true}
    if(A(k)){g=k}
    _.e(g, function(k){
        if(! k|| _.contains(f.classes, k.trim())){
            hasClass=true}
    })

    return hasClass

}





f.is=f.of=function(a){var f=this, b=f.B(), g=G(arguments)
    f.is = function(k){var f=this
        return S(k)? f.has(k) : f==k
    }


    f.ofClass = function(k){var f=this,
        b=f.B(),
        g=G(arguments)
        return f.is(k) || b.is(k)
    }


    return U(a)? true
        : S(a)? f.ofClass(a)
        : (f==a || (g.N? b==a: false) )

}
 

f.hasAllClasses = function(clas){
    if (U(clas) || clas == '') {
        return false
    }

    var body = this, anyYes = null, anyNo = null

    _.each(arguments, function (clas) {


        if (body.hasClass(clas)) {
            anyYes = true
        }

        else if (!body.hasClass(clas)) {
            anyNo = true
        }


    })

    return (anyYes && !anyNo)


}




    f.classCount = function () {
        if (!A(this.classes)) {
            return 0
        }
        return this.classes.length

    }
    f.removeClass=function(clas){
        var ix
        this.classes = this.classes || []
        if (S(clas)) {

            if (this.hasClass(clas)) {

                ix = this.classes.indexOf(clas)

                this.classes[ix] = null

                this.classes = _.compact(this.classes)


            }


        }
        return this
    }
    f.near= function (what) {
        var body = this.GetBody()
        //return (this.K()==what) || (body.K()==what)
        // if has sibling fixture that matches, return IT!
        return false

    }


    f.D = f.data = function (data) {
        if (U(data)) {
            return this.GetUserData()
        }
        this.SetUserData(data);
        return this
    }

    /*
     b.D=b.data=function(d){var b=this
     if(U(d)){return b.GetUserData()}
     b.SetUserData(d); return b}
     b.classCount=function(){var b=this
     if(!A(b.classes)){return 0}
     return b.classes.length
     }


     b.toggleClass=function(k){var b=this
     if(U(k)||k==''){return false}
     if(b.hasClass(k)){b.removeClass(k)}
     else {b.addClass(k)}
     return b}


     b.removeClass=function(k){var b=this, ix; b.classes=b.classes||[]
     if(S(k) && b.hasClass(k)){
     ix = b.classes.indexOf(k)
     b.classes[ix] = null
     b.classes = _.compact(b.classes)}
     return b}
     b.not = b.notAny = function (k) {
     //this is an AND: ALL MUST BE FALSE
     var b=this, not = true
     _.e(k, function(k){if(b.is(k)){not=false}})
     return not
     }


     b.contains=function(k){var b=this
     var fs=b.fixts(), contains=false
     _.e(fs,function(f){
     if(f.hasClass(k)){contains=true}})
     return contains
     }


     b.hasAllClasses=function(k){
     if(U(k)||k==''){return false}
     var b=this, anyYes = null, anyNo = null
     _.e(arguments, function(k){
     if(b.hasClass(k)){anyYes=true}
     else if(!b.hasClass(k)){anyNo=true}})
     return (anyYes && !anyNo)
     }
     */
    f.toggleClass=function(clas){
        if (U(clas) || clas == '') {
            return false
        }

        if (this.hasClass(clas)) {
            this.removeClass(clas)
        } else {
            this.addClass(clas)
        }

        return this
    }





TAG=function(){W({g:0})
    w.pop('i like how the ball bounces')

    w.show(function(){ return y.K()})

    y = w.ship(100,100)

    _.t(10,function(){

        w.D(600,300,'b',40).r(.8).lD(.1).K('ball')
    })

    w.with('ball', function(f2){var vel  //$l('oth: ' + other.K() + ' - ' + other.B().K())
        var f=this

        if(f2.of('ship')){
            w.e(function(b){
                if(b.isStat() &&  b.of('ball') ){
                    b.dyn(true)
                    b.C('b')}
            })
        }

        if(f2.of('bul')){

            f.C('r'); f.B().stat()

        }})

    //ship, 10 balls,
}

/*
_.ct= function(arr, str){var g=G(arguments)
    if(!arr||!str){return}
    if(S(str) && !g.n){str=str.trim()}
    return _.contains(_.tA(arr), str)}
_.eS=function(str,fn){
    _.e(_.tA(str),function(str){
        if(str=S(str)&&str.trim()){fn(str)}
    })}

_.e=function(arr,fn){_.each(_.tA(arr),fn)}

_.tA=function(arr){
    return S(arr)? arr.trim().split(' '):
        O(arr)? _.toArray(arr):
            [arr]
}



_.m=function(arr,fn){return _.map(_.tA(arr),fn)}



_.iU=function(s){if(S(s)){return  s$(s).isUpper()}}

b2d.k=function(fb,k){fb.ks= fb.ks||[]
    if(U(k)){return fb.ks.join(' ')+'|'+  (b2d.iF(fb)?fb.B().K():'')}
    if(O(k) && !A(k)){fb.K(k.k);return fb}
    _.eS(k, function(k){if(!fb.of(k)){fb.ks.push(k)}})
    return fb}


b2d.of=function(fb,k){var of;
    if(U(k)){return 1}

    _.e(k, function(k){
        if(b2d.iF(fb)){
            of=fb.B().of(k)}
        if(!k||fb==k||_.ct(fb.ks, k)){of=1}
    })

    return of

}



f.K =function(k){return b2d.k(this,k)}

b.K =function(k){return b2d.k(this, k)}

f.of=function(k){return b2d.of(this,k)}
b.of=function(k){return b2d.of(this, k)}

    */