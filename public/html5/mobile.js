
//prevent iphone/ipad default scrolling

$(function(){

    $('body').on('touchmove', function(e){ e.preventDefault() })


})

MOBILECENTER=function(){
    z()
    $('body').C('u')
    d = $.div('o', 400, 200).A().drag().pad( 20 ).A(
        dd = $.div( 'u',  200 , 100 ).xCenter(),
        $.div( 'g',  100 , 80).xCenter( )
    ).P('r')}


MOBILETIPS=function(){

    z()

    $('body').C('u')

    $.div('b', 10, 10).drag()
    $.div('b', 10, 10).drag()
    $.div('b', 10, 10).drag()


    d = $.div('o', 400, 200).A().drag().pad( 20 )

    d.A(  $.h3( 'mobile tips').C( 'x' , 'w' )  )

    d.A(  $.h4( 'tip1:  First and foremost, screen sizes can vary greatly between different device categories as can screen resolutions and aspect ratios ').C( 'x', 't' )  )

    d.A(  $.h4( 'tip2:  If you want your HTML5 games to work well on mobile devices, you should make sure they either support multiple resolutions or don’t exceed the WVGA frame size of 800x480.').C( 'x', 't' )  )

    d.A(  $.h4( 'tip3: ').C( 'x' , 't' )  )

    d1 = $.div('p', 400, 200).A().drag().pad( 20 )

    d1.A(  $.h3( 'mobile devices  zoom and pan -  counterproductive for games. term them off with: viewport meta tag' ).C( 'x' , 'w' )  )

    d1.A(  $.h4(   "ex: cause your game’s viewport to occupy all of the available horizontal screen real estate.").C( 'x', 't' )  )

    d1.A(  $.h4(  "ex: cause your game’s viewport to occupy all of the available horizontal screen real estate.").C( 'x', 't' )  )

    d1.A(  $.h4( '<meta name="Viewport"content="width=device-width; user-scaleable=no; initial-scale=1.0" />').C( 'x' , 't' )  )

    d1.A(  $.h4(    '[ user-scaleable = no ] ->  disables pinch-zooming'  ).C( 'x' , 't' )  )

    d2 = $.div('g', 400, 200).A().drag().pad( 20 )

    d2.A(  $.h3( 'mobile tips').C( 'x' , 'w' )  )

    d2.A(  $.h4( 'tip1: ').C( 'x', 't' )  )

    d2.A(  $.h4( 'tip2: ').C( 'x', 't' )  )

    d2.A(  $.h4( 'tip3: ').C( 'x' , 't' )  )


}



H1=function(){
    z()

    rule = "h1 {  font-size: 40px;  margin-bottom: 20px;  margin-left: 20px; }"

    $.addStyle(rule)
    // HTML5.CSSRule(rule)
    $.h1('this is a big font').A()

}

H12=function(){
    z()


    rule = "h1 {  font-size: 22px; margin: bottom 10px;  @media (min-width:@screen-tablet) {font-size: 40px;   margin-bottom: 20px;   margin-left: 20px; } }"

    addStyle(rule)

    $h1('this is a small font').A()

}
BREAK=function(){z()


    addStyle( "h1 { @media (min-width:400px) {font-size: 10px;} }" )
    addStyle( "h1 { @media (max-width:400px) {font-size: 20px;} }" )
    // addStyle( "h1 { @media (min-width:1281px) {font-size: 40px;} }" )

    $.h1('afsdfdsasdf').A()
}
BREAK2=function(){


    // @media screen and (min-width: 600px) { .sixhundredminwidthclass {  width: 30%;  float: right;  } }

    //  @media screen and (max-width: 600px) {.sixhundredmaxwidth {  clear: both; font-size: 1.3em; } }

}
BREAK3=function(){z()
//works

    $.addStyle(

        "@media all and (min-width: 960px) { body {font-size: 80px;}  }",
        "@media all and (max-width: 959px) and (min-width: 600px) {body{font-size: 40px;}}",
        "@media all and (max-width: 599px) and (min-width: 320px) {body{font-size: 20px;}}"
    )

    $.addStyle(

        "@media all and (min-width: 960px) { body {color:blue;}  }",
        "@media all and (max-width: 959px) and (min-width: 600px) {body{color:red;}}",
        "@media all and (max-width: 599px) and (min-width: 320px) {body{color:yellow;}}"
    )


    $.span('fasd').A()

    $.h1('fasd').A() //doesnt respond
}





touchDrg=function(element){

    var q= $b( qq(element).q ).css({ position: 'absolute' }).on('touchstart',

        function(e){ $l('touchstart')

            var offset = $(this).offset(),
                deltaX = e.originalEvent.touches[0].pageX- offset.left,
                deltaY = e.originalEvent.touches[0].pageY - offset.top


            $l(deltaX + ' : ' + deltaY)

            $('html').on( 'touchmove' , function( e ){ $l('touchmove')

                q.css({ left: e.originalEvent.touches[0].pageX - deltaX , top: e.originalEvent.touches[0].pageY - deltaY }) })
                .on( 'touchend' , function(){ $l('touchstop'); $(this).off() })

        })

    return qq(element)

}
TOUCHSTART=function(){

    z()

    div = $.div('red', 100,200).A()

    touchDrg( div )
}
EASELTOUCH=function(){z()

    stage = cjs.stage(500).tick().A()

    //this lets it work on apple !!
    createjs.Touch.enable( stage  )

    stage.bm('me', SL)
    stage.bm('me', SL)
    stage.bm('me', SL)
    stage.bm('me', SL)
    stage.bm('me', SL)

    $.div('red',10000,10).A()

}




MOBILEHEADERS=function(){



}

//prevent iphone/ipad default scrolling
$(function(){
    $('body').on('touchmove', function(e){ e.preventDefault() })
})

MOBILECENTER=function(){$.x()
    $('body').C('u')
    d = $.d('o', 400, 200).A().drag().pad( 20 ).A(
        dd = $.d( 'u',  200 , 100 ).xCenter(),
        $.d( 'g',  100 , 80).xCenter( )
    ).P('r')
}


MOBILETIPS=function(){

    $.x()

    $('body').C('u')

    $.d('b', 10, 10).drag()
    $.d('b', 10, 10).drag()
    $.d('b', 10, 10).drag()


    d = $.d('o', 400, 200).A().drag().pad( 20 )

    d.A(  $.h3( 'mobile tips').C( 'x' , 'w' )  )

    d.A(  $.h4( 'tip1:  First and foremost, screen sizes can vary greatly between different device categories as can screen resolutions and aspect ratios ').C( 'x', 't' )  )

    d.A(  $.h4( 'tip2:  If you want your HTML5 games to work well on mobile devices, you should make sure they either support multiple resolutions or don’t exceed the WVGA frame size of 800x480.').C( 'x', 't' )  )

    d.A(  $.h4( 'tip3: ').C( 'x' , 't' )  )

    d1 = $.d('p', 400, 200).A().drag().pad( 20 )

    d1.A(  $.h3( 'mobile devices  zoom and pan -  counterproductive for games. term them off with: viewport meta tag' ).C( 'x' , 'w' )  )

    d1.A(  $.h4(   "ex: cause your game’s viewport to occupy all of the available horizontal screen real estate.").C( 'x', 't' )  )

    d1.A(  $.h4(  "ex: cause your game’s viewport to occupy all of the available horizontal screen real estate.").C( 'x', 't' )  )

    d1.A(  $.h4( '<meta name="Viewport"content="width=device-width; user-scaleable=no; initial-scale=1.0" />').C( 'x' , 't' )  )

    d1.A(  $.h4(    '[ user-scaleable = no ] ->  disables pinch-zooming'  ).C( 'x' , 't' )  )

    d2 = $.d('g', 400, 200).A().drag().pad( 20 )

    d2.A(  $.h3( 'mobile tips').C( 'x' , 'w' )  )

    d2.A(  $.h4( 'tip1: ').C( 'x', 't' )  )

    d2.A(  $.h4( 'tip2: ').C( 'x', 't' )  )

    d2.A(  $.h4( 'tip3: ').C( 'x' , 't' )  )


}
H1=function(){
    z()

    rule = "h1 {  font-size: 40px;  margin-bottom: 20px;  margin-left: 20px; }"

    $.addStyle(rule)
    // HTML5.CSSRule(rule)
    $.h1('this is a big font').A()

}
H12=function(){
    z()


    rule = "h1 {  font-size: 22px; margin: bottom 10px;  @media (min-width:@screen-tablet) {font-size: 40px;   margin-bottom: 20px;   margin-left: 20px; } }"

    addStyle(rule)

    $h1('this is a small font').A()

}
BREAK=function(){z()


    addStyle( "h1 { @media (min-width:400px) {font-size: 10px;} }" )
    addStyle( "h1 { @media (max-width:400px) {font-size: 20px;} }" )
    // addStyle( "h1 { @media (min-width:1281px) {font-size: 40px;} }" )

    $.h1('afsdfdsasdf').A()
}
BREAK2=function(){


    // @media screen and (min-width: 600px) { .sixhundredminwidthclass {  width: 30%;  float: right;  } }

    //  @media screen and (max-width: 600px) {.sixhundredmaxwidth {  clear: both; font-size: 1.3em; } }

}
BREAK3=function(){z()
//works

    $.addStyle(

        "@media all and (min-width: 960px) { body {font-size: 80px;}  }",
        "@media all and (max-width: 959px) and (min-width: 600px) {body{font-size: 40px;}}",
        "@media all and (max-width: 599px) and (min-width: 320px) {body{font-size: 20px;}}"
    )

    $.addStyle(

        "@media all and (min-width: 960px) { body {color:blue;}  }",
        "@media all and (max-width: 959px) and (min-width: 600px) {body{color:red;}}",
        "@media all and (max-width: 599px) and (min-width: 320px) {body{color:yellow;}}"
    )


    $.span('fasd').A()

    $.h1('fasd').A() //doesnt respond
}

touchDrg=function(element){

    var q= $b( qq(element).q ).css({ position: 'absolute' })
        .on('touchstart',
        function(e){ $l('touchstart')
            var offset = $(this).offset(),
                deltaX = e.originalEvent.touches[0].pageX- offset.left,
                deltaY = e.originalEvent.touches[0].pageY - offset.top
            $l(deltaX + ' : ' + deltaY)
            $('html').on( 'touchmove' , function( e ){ $l('touchmove')

                q.css({ left: e.originalEvent.touches[0].pageX - deltaX , top: e.originalEvent.touches[0].pageY - deltaY }) })
                .on( 'touchend' , function(){ $l('touchstop'); $(this).off() })

        })
    return  $(element)

}

TOUCHSTART=function(){$.x('x')
    div = $.d('red', 100,200).A()
    touchDrg( div )
}

EASELTOUCH=function(){z()

    stage = cjs.stage(500).tick().A()

    //this lets it work on apple !!
    cjs.Touch.enable( stage  )

    stage.bm('me', SL)
    stage.bm('me', SL)
    stage.bm('me', SL)
    stage.bm('me', SL)
    stage.bm('me', SL)

    $.d('red',10000,10).A()

}


MOBILEHEADERS=function(){}
bootMobile()
media()
function bootMobile(){

    $.xs = $.phones = function self(color, num) {
        if (N(color)) {
            return self(null, color)
        }
        var div = $.d()
        if (color) {
            div.C(color)
        }
        div.K('col-xs-' + num)
        return div
    }
    $.sml = $.tablets = function self(color, num) {
        if (N(color)) {
            return self(null, color)
        }
        var div = $.d()
        if (color) {
            div.C(color)
        }
        div.K('col-sm-' + num)
        return div
    }
    $.md = $.desktops = function self(color, num) {
        if (N(color)) {
            return self(null, color)
        }
        var div = $.d()
        if (color) {
            div.C(color)
        }
        div.K('col-md-' + num)
        return div
    }
    $.lg = $.largeDesktops = function (c, num) {
        if (N(c)) {
            return $.lg(null, c)
        }
        var d = $.dK('col-lg-' + num)
        if (c) {
            d.C(c)
        }
        return d
    }

}

function media(){
    MED=function(){
        /*



         @media screen and (min-width:600px) {        nav { float: left; width: 25%; }        section { margin-left: 25%; }      }

         @media screen and (max-width:599px) {        nav li { display: inline;  }          }




         */
    }
    VIEWPORT=function(){

        // <meta name="viewport" content="initial-scale=1">
        // http://webdesign.tutsplus.com/articles/quick-tip-dont-forget-the-viewport-meta-tag--webdesign-5972
        //http://blog.javierusobiaga.com/stop-using-the-viewport-tag-until-you-know-ho

    }
    $CSS.mx.bpLarge=function(cont){
        return ['@media only screen and (max-width: 400px)', cont
        ]}
    $CSS.mx.bpMid=function(cont){
        return ['@media only screen and (max-width: 600px)', cont
        ]}
    $CSS.mx.bpSmall=function(cont){
        return ['@media only screen and (max-width: 800px)', cont
        ]}


}


//prevent iphone/ipad default scrolling

$(function(){

    $('body').on('touchmove', function(e){ e.preventDefault() })


})

MOBILECENTER=function(){
    z()
    $('body').C('u')
    d = $.div('o', 400, 200).A().drag().pad( 20 ).A(
        dd = $.div( 'u',  200 , 100 ).xCenter(),
        $.div( 'g',  100 , 80).xCenter( )
    ).P('r')}


MOBILETIPS=function(){

    z()

    $('body').C('u')

    $.div('b', 10, 10).drag()
    $.div('b', 10, 10).drag()
    $.div('b', 10, 10).drag()


    d = $.div('o', 400, 200).A().drag().pad( 20 )

    d.A(  $.h3( 'mobile tips').C( 'x' , 'w' )  )

    d.A(  $.h4( 'tip1:  First and foremost, screen sizes can vary greatly between different device categories as can screen resolutions and aspect ratios ').C( 'x', 't' )  )

    d.A(  $.h4( 'tip2:  If you want your HTML5 games to work well on mobile devices, you should make sure they either support multiple resolutions or don’t exceed the WVGA frame size of 800x480.').C( 'x', 't' )  )

    d.A(  $.h4( 'tip3: ').C( 'x' , 't' )  )

    d1 = $.div('p', 400, 200).A().drag().pad( 20 )

    d1.A(  $.h3( 'mobile devices  zoom and pan -  counterproductive for games. term them off with: viewport meta tag' ).C( 'x' , 'w' )  )

    d1.A(  $.h4(   "ex: cause your game’s viewport to occupy all of the available horizontal screen real estate.").C( 'x', 't' )  )

    d1.A(  $.h4(  "ex: cause your game’s viewport to occupy all of the available horizontal screen real estate.").C( 'x', 't' )  )

    d1.A(  $.h4( '<meta name="Viewport"content="width=device-width; user-scaleable=no; initial-scale=1.0" />').C( 'x' , 't' )  )

    d1.A(  $.h4(    '[ user-scaleable = no ] ->  disables pinch-zooming'  ).C( 'x' , 't' )  )

    d2 = $.div('g', 400, 200).A().drag().pad( 20 )

    d2.A(  $.h3( 'mobile tips').C( 'x' , 'w' )  )

    d2.A(  $.h4( 'tip1: ').C( 'x', 't' )  )

    d2.A(  $.h4( 'tip2: ').C( 'x', 't' )  )

    d2.A(  $.h4( 'tip3: ').C( 'x' , 't' )  )


}



H1=function(){
    z()

    rule = "h1 {  font-size: 40px;  margin-bottom: 20px;  margin-left: 20px; }"

    $.addStyle(rule)
    // HTML5.CSSRule(rule)
    $.h1('this is a big font').A()

}

H12=function(){
    z()


    rule = "h1 {  font-size: 22px; margin: bottom 10px;  @media (min-width:@screen-tablet) {font-size: 40px;   margin-bottom: 20px;   margin-left: 20px; } }"

    addStyle(rule)

    $h1('this is a small font').A()

}
BREAK=function(){z()


    addStyle( "h1 { @media (min-width:400px) {font-size: 10px;} }" )
    addStyle( "h1 { @media (max-width:400px) {font-size: 20px;} }" )
    // addStyle( "h1 { @media (min-width:1281px) {font-size: 40px;} }" )

    $.h1('afsdfdsasdf').A()
}
BREAK2=function(){


    // @media screen and (min-width: 600px) { .sixhundredminwidthclass {  width: 30%;  float: right;  } }

    //  @media screen and (max-width: 600px) {.sixhundredmaxwidth {  clear: both; font-size: 1.3em; } }

}
BREAK3=function(){z()
//works

    $.addStyle(

        "@media all and (min-width: 960px) { body {font-size: 80px;}  }",
        "@media all and (max-width: 959px) and (min-width: 600px) {body{font-size: 40px;}}",
        "@media all and (max-width: 599px) and (min-width: 320px) {body{font-size: 20px;}}"
    )

    $.addStyle(

        "@media all and (min-width: 960px) { body {color:blue;}  }",
        "@media all and (max-width: 959px) and (min-width: 600px) {body{color:red;}}",
        "@media all and (max-width: 599px) and (min-width: 320px) {body{color:yellow;}}"
    )


    $.span('fasd').A()

    $.h1('fasd').A() //doesnt respond
}





touchDrg=function(element){

    var q= $b( qq(element).q ).css({ position: 'absolute' }).on('touchstart',

        function(e){ $l('touchstart')

            var offset = $(this).offset(),
                deltaX = e.originalEvent.touches[0].pageX- offset.left,
                deltaY = e.originalEvent.touches[0].pageY - offset.top


            $l(deltaX + ' : ' + deltaY)

            $('html').on( 'touchmove' , function( e ){ $l('touchmove')

                q.css({ left: e.originalEvent.touches[0].pageX - deltaX , top: e.originalEvent.touches[0].pageY - deltaY }) })
                .on( 'touchend' , function(){ $l('touchstop'); $(this).off() })

        })

    return qq(element)

}
TOUCHSTART=function(){

    z()

    div = $.div('red', 100,200).A()

    touchDrg( div )
}
EASELTOUCH=function(){z()

    stage = cjs.stage(500).tick().A()

    //this lets it work on apple !!
    createjs.Touch.enable( stage  )

    stage.bm('me', SL)
    stage.bm('me', SL)
    stage.bm('me', SL)
    stage.bm('me', SL)
    stage.bm('me', SL)

    $.div('red',10000,10).A()

}




MOBILEHEADERS=function(){



}


function dittoMaybe(){//prevent iphone/ipad default scrolling
    $(function(){
        $('body').on('touchmove', function(e){ e.preventDefault() })
    })

    MOBILECENTER=function(){$.x()
        $('body').C('u')
        d = $.d('o', 400, 200).A().drag().pad( 20 ).A(
            dd = $.d( 'u',  200 , 100 ).xCenter(),
            $.d( 'g',  100 , 80).xCenter( )
        ).P('r')
    }


    MOBILETIPS=function(){

        $.x()

        $('body').C('u')

        $.d('b', 10, 10).drag()
        $.d('b', 10, 10).drag()
        $.d('b', 10, 10).drag()


        d = $.d('o', 400, 200).A().drag().pad( 20 )

        d.A(  $.h3( 'mobile tips').C( 'x' , 'w' )  )

        d.A(  $.h4( 'tip1:  First and foremost, screen sizes can vary greatly between different device categories as can screen resolutions and aspect ratios ').C( 'x', 't' )  )

        d.A(  $.h4( 'tip2:  If you want your HTML5 games to work well on mobile devices, you should make sure they either support multiple resolutions or don’t exceed the WVGA frame size of 800x480.').C( 'x', 't' )  )

        d.A(  $.h4( 'tip3: ').C( 'x' , 't' )  )

        d1 = $.d('p', 400, 200).A().drag().pad( 20 )

        d1.A(  $.h3( 'mobile devices  zoom and pan -  counterproductive for games. term them off with: viewport meta tag' ).C( 'x' , 'w' )  )

        d1.A(  $.h4(   "ex: cause your game’s viewport to occupy all of the available horizontal screen real estate.").C( 'x', 't' )  )

        d1.A(  $.h4(  "ex: cause your game’s viewport to occupy all of the available horizontal screen real estate.").C( 'x', 't' )  )

        d1.A(  $.h4( '<meta name="Viewport"content="width=device-width; user-scaleable=no; initial-scale=1.0" />').C( 'x' , 't' )  )

        d1.A(  $.h4(    '[ user-scaleable = no ] ->  disables pinch-zooming'  ).C( 'x' , 't' )  )

        d2 = $.d('g', 400, 200).A().drag().pad( 20 )

        d2.A(  $.h3( 'mobile tips').C( 'x' , 'w' )  )

        d2.A(  $.h4( 'tip1: ').C( 'x', 't' )  )

        d2.A(  $.h4( 'tip2: ').C( 'x', 't' )  )

        d2.A(  $.h4( 'tip3: ').C( 'x' , 't' )  )


    }
    H1=function(){
        z()

        rule = "h1 {  font-size: 40px;  margin-bottom: 20px;  margin-left: 20px; }"

        $.addStyle(rule)
        // HTML5.CSSRule(rule)
        $.h1('this is a big font').A()

    }
    H12=function(){
        z()


        rule = "h1 {  font-size: 22px; margin: bottom 10px;  @media (min-width:@screen-tablet) {font-size: 40px;   margin-bottom: 20px;   margin-left: 20px; } }"

        addStyle(rule)

        $h1('this is a small font').A()

    }
    BREAK=function(){z()


        addStyle( "h1 { @media (min-width:400px) {font-size: 10px;} }" )
        addStyle( "h1 { @media (max-width:400px) {font-size: 20px;} }" )
        // addStyle( "h1 { @media (min-width:1281px) {font-size: 40px;} }" )

        $.h1('afsdfdsasdf').A()
    }
    BREAK2=function(){


        // @media screen and (min-width: 600px) { .sixhundredminwidthclass {  width: 30%;  float: right;  } }

        //  @media screen and (max-width: 600px) {.sixhundredmaxwidth {  clear: both; font-size: 1.3em; } }

    }
    BREAK3=function(){z()
//works

        $.addStyle(

            "@media all and (min-width: 960px) { body {font-size: 80px;}  }",
            "@media all and (max-width: 959px) and (min-width: 600px) {body{font-size: 40px;}}",
            "@media all and (max-width: 599px) and (min-width: 320px) {body{font-size: 20px;}}"
        )

        $.addStyle(

            "@media all and (min-width: 960px) { body {color:blue;}  }",
            "@media all and (max-width: 959px) and (min-width: 600px) {body{color:red;}}",
            "@media all and (max-width: 599px) and (min-width: 320px) {body{color:yellow;}}"
        )


        $.span('fasd').A()

        $.h1('fasd').A() //doesnt respond
    }

    touchDrg=function(element){

        var q= $b( qq(element).q ).css({ position: 'absolute' })
            .on('touchstart',
            function(e){ $l('touchstart')
                var offset = $(this).offset(),
                    deltaX = e.originalEvent.touches[0].pageX- offset.left,
                    deltaY = e.originalEvent.touches[0].pageY - offset.top
                $l(deltaX + ' : ' + deltaY)
                $('html').on( 'touchmove' , function( e ){ $l('touchmove')

                    q.css({ left: e.originalEvent.touches[0].pageX - deltaX , top: e.originalEvent.touches[0].pageY - deltaY }) })
                    .on( 'touchend' , function(){ $l('touchstop'); $(this).off() })

            })
        return  $(element)

    }

    TOUCHSTART=function(){$.x('x')
        div = $.d('red', 100,200).A()
        touchDrg( div )
    }

    EASELTOUCH=function(){z()

        stage = cjs.stage(500).tick().A()

        //this lets it work on apple !!
        cjs.Touch.enable( stage  )

        stage.bm('me', SL)
        stage.bm('me', SL)
        stage.bm('me', SL)
        stage.bm('me', SL)
        stage.bm('me', SL)

        $.d('red',10000,10).A()

    }


    MOBILEHEADERS=function(){}
}

function dittoFoSho(){
	
	//prevent iphone/ipad default scrolling
	$(
		function(){
			$('body').on('touchmove',function(e){ e.preventDefault() })
		}
	)
	MOBILECENTER=function(){
		z()
		$('body').C('u')
		d=$.div('o',400,200).A().drag().pad(20).A(
			dd=$.div('u',200,100).xCenter(),
			$.div('g',100,80).xCenter()
		).P('r')
	}
	MOBILETIPS=function(){
		z()
		$('body').C('u')
		$.div('b',10,10).drag()
		$.div('b',10,10).drag()
		$.div('b',10,10).drag()
		d=$.div('o',400,200).A().drag().pad(20)
		d.A($.h3('mobile tips').C('x','w'))
		d.A($.h4('tip1:  First and foremost, screen sizes can vary greatly between different device categories as can screen resolutions and aspect ratios ').C('x','t'))
		d.A($.h4('tip2:  If you want your HTML5 games to work well on mobile devices, you should make sure they either support multiple resolutions or don’t exceed the WVGA frame size of 800x480.').C('x','t'))
		d.A($.h4('tip3: ').C('x','t'))
		d1=$.div('p',400,200).A().drag().pad(20)
		d1.A($.h3('mobile devices  zoom and pan -  counterproductive for games. term them off with: viewport meta tag').C('x','w'))
		d1.A($.h4("ex: cause your game’s viewport to occupy all of the available horizontal screen real estate.").C('x','t'))
		d1.A($.h4("ex: cause your game’s viewport to occupy all of the available horizontal screen real estate.").C('x','t'))
		d1.A($.h4('<meta name="Viewport"content="width=device-width; user-scaleable=no; initial-scale=1.0" />').C('x','t'))
		d1.A($.h4('[ user-scaleable = no ] ->  disables pinch-zooming').C('x','t'))
		d2=$.div('g',400,200).A().drag().pad(20)
		d2.A($.h3('mobile tips').C('x','w'))
		d2.A($.h4('tip1: ').C('x','t'))
		d2.A($.h4('tip2: ').C('x','t'))
		d2.A($.h4('tip3: ').C('x','t'))
	}
	H1=function(){
		z()
		rule="h1 {  font-size: 40px;  margin-bottom: 20px;  margin-left: 20px; }"
		$.addStyle(rule)
		// HTML5.CSSRule(rule)
		$.h1('this is a big font').A()
	}
	H12=function(){
		z()
		rule="h1 {  font-size: 22px; margin: bottom 10px;  @media (min-width:@screen-tablet) {font-size: 40px;   margin-bottom: 20px;   margin-left: 20px; } }"
		addStyle(rule)
		$h1('this is a small font').A()
	}
	BREAK=function(){
		z()
		addStyle("h1 { @media (min-width:400px) {font-size: 10px;} }")
		addStyle("h1 { @media (max-width:400px) {font-size: 20px;} }")
		// addStyle( "h1 { @media (min-width:1281px) {font-size: 40px;} }" )
		$.h1('afsdfdsasdf').A()
	}
	BREAK2=function(){
		
		
		// @media screen and (min-width: 600px) { .sixhundredminwidthclass {  width: 30%;  float: right;  } }
		//  @media screen and (max-width: 600px) {.sixhundredmaxwidth {  clear: both; font-size: 1.3em; } }
	}
	BREAK3=function(){
		z()
		//works
		$.addStyle(
			"@media all and (min-width: 960px) { body {font-size: 80px;}  }",
			"@media all and (max-width: 959px) and (min-width: 600px) {body{font-size: 40px;}}",
			"@media all and (max-width: 599px) and (min-width: 320px) {body{font-size: 20px;}}"
		)
		$.addStyle(
			"@media all and (min-width: 960px) { body {color:blue;}  }",
			"@media all and (max-width: 959px) and (min-width: 600px) {body{color:red;}}",
			"@media all and (max-width: 599px) and (min-width: 320px) {body{color:yellow;}}"
		)
		$.span('fasd').A()
		$.h1('fasd').A() //doesnt respond
	}
	touchDrg=function(element){
		var q=$b(qq(element).q).css({position:'absolute'}).on(
			'touchstart',
			function(e){
				$l('touchstart')
				var offset=$(this).offset(),
					deltaX=e.originalEvent.touches[0].pageX-offset.left,
					deltaY=e.originalEvent.touches[0].pageY-offset.top
				$l(deltaX+' : '+deltaY)
				$('html').on(
					'touchmove',function(e){
						$l('touchmove')
						q.css({left:e.originalEvent.touches[0].pageX-deltaX,top:e.originalEvent.touches[0].pageY-deltaY})
					}
				)
					.on(
					'touchend',function(){
						$l('touchstop');
						$(this).off()
					}
				)
			}
		)
		return qq(element)
	}
	TOUCHSTART=function(){
		z()
		div=$.div('red',100,200).A()
		touchDrg(div)
	}
	EASELTOUCH=function(){
		z()
		stage=cjs.stage(500).tick().A()
		//this lets it work on apple !!
		createjs.Touch.enable(stage)
		stage.bm('me',SL)
		stage.bm('me',SL)
		stage.bm('me',SL)
		stage.bm('me',SL)
		stage.bm('me',SL)
		$.div('red',10000,10).A()
	}
	MOBILEHEADERS=function(){
	}
	//prevent iphone/ipad default scrolling
	$(
		function(){
			$('body').on('touchmove',function(e){ e.preventDefault() })
		}
	)
	MOBILECENTER=function(){
		$.x()
		$('body').C('u')
		d=$.d('o',400,200).A().drag().pad(20).A(
			dd=$.d('u',200,100).xCenter(),
			$.d('g',100,80).xCenter()
		).P('r')
	}
	MOBILETIPS=function(){
		$.x()
		$('body').C('u')
		$.d('b',10,10).drag()
		$.d('b',10,10).drag()
		$.d('b',10,10).drag()
		d=$.d('o',400,200).A().drag().pad(20)
		d.A($.h3('mobile tips').C('x','w'))
		d.A($.h4('tip1:  First and foremost, screen sizes can vary greatly between different device categories as can screen resolutions and aspect ratios ').C('x','t'))
		d.A($.h4('tip2:  If you want your HTML5 games to work well on mobile devices, you should make sure they either support multiple resolutions or don’t exceed the WVGA frame size of 800x480.').C('x','t'))
		d.A($.h4('tip3: ').C('x','t'))
		d1=$.d('p',400,200).A().drag().pad(20)
		d1.A($.h3('mobile devices  zoom and pan -  counterproductive for games. term them off with: viewport meta tag').C('x','w'))
		d1.A($.h4("ex: cause your game’s viewport to occupy all of the available horizontal screen real estate.").C('x','t'))
		d1.A($.h4("ex: cause your game’s viewport to occupy all of the available horizontal screen real estate.").C('x','t'))
		d1.A($.h4('<meta name="Viewport"content="width=device-width; user-scaleable=no; initial-scale=1.0" />').C('x','t'))
		d1.A($.h4('[ user-scaleable = no ] ->  disables pinch-zooming').C('x','t'))
		d2=$.d('g',400,200).A().drag().pad(20)
		d2.A($.h3('mobile tips').C('x','w'))
		d2.A($.h4('tip1: ').C('x','t'))
		d2.A($.h4('tip2: ').C('x','t'))
		d2.A($.h4('tip3: ').C('x','t'))
	}
	H1=function(){
		z()
		rule="h1 {  font-size: 40px;  margin-bottom: 20px;  margin-left: 20px; }"
		$.addStyle(rule)
		// HTML5.CSSRule(rule)
		$.h1('this is a big font').A()
	}
	H12=function(){
		z()
		rule="h1 {  font-size: 22px; margin: bottom 10px;  @media (min-width:@screen-tablet) {font-size: 40px;   margin-bottom: 20px;   margin-left: 20px; } }"
		addStyle(rule)
		$h1('this is a small font').A()
	}
	BREAK=function(){
		z()
		addStyle("h1 { @media (min-width:400px) {font-size: 10px;} }")
		addStyle("h1 { @media (max-width:400px) {font-size: 20px;} }")
		// addStyle( "h1 { @media (min-width:1281px) {font-size: 40px;} }" )
		$.h1('afsdfdsasdf').A()
	}
	BREAK2=function(){
		
		
		// @media screen and (min-width: 600px) { .sixhundredminwidthclass {  width: 30%;  float: right;  } }
		//  @media screen and (max-width: 600px) {.sixhundredmaxwidth {  clear: both; font-size: 1.3em; } }
	}
	BREAK3=function(){
		z()
		//works
		$.addStyle(
			"@media all and (min-width: 960px) { body {font-size: 80px;}  }",
			"@media all and (max-width: 959px) and (min-width: 600px) {body{font-size: 40px;}}",
			"@media all and (max-width: 599px) and (min-width: 320px) {body{font-size: 20px;}}"
		)
		$.addStyle(
			"@media all and (min-width: 960px) { body {color:blue;}  }",
			"@media all and (max-width: 959px) and (min-width: 600px) {body{color:red;}}",
			"@media all and (max-width: 599px) and (min-width: 320px) {body{color:yellow;}}"
		)
		$.span('fasd').A()
		$.h1('fasd').A() //doesnt respond
	}
	touchDrg=function(element){
		var q=$b(qq(element).q).css({position:'absolute'})
			.on(
			'touchstart',
			function(e){
				$l('touchstart')
				var offset=$(this).offset(),
					deltaX=e.originalEvent.touches[0].pageX-offset.left,
					deltaY=e.originalEvent.touches[0].pageY-offset.top
				$l(deltaX+' : '+deltaY)
				$('html').on(
					'touchmove',function(e){
						$l('touchmove')
						q.css({left:e.originalEvent.touches[0].pageX-deltaX,top:e.originalEvent.touches[0].pageY-deltaY})
					}
				)
					.on(
					'touchend',function(){
						$l('touchstop');
						$(this).off()
					}
				)
			}
		)
		return $(element)
	}
	TOUCHSTART=function(){
		$.x('x')
		div=$.d('red',100,200).A()
		touchDrg(div)
	}
	EASELTOUCH=function(){
		z()
		stage=cjs.stage(500).tick().A()
		//this lets it work on apple !!
		cjs.Touch.enable(stage)
		stage.bm('me',SL)
		stage.bm('me',SL)
		stage.bm('me',SL)
		stage.bm('me',SL)
		stage.bm('me',SL)
		$.d('red',10000,10).A()
	}
	MOBILEHEADERS=function(){}
	bootMobile()
	media()
	function bootMobile(){
		$.xs=$.phones=function self(color,num){
			if(N(color)){
				return self(null,color)
			}
			var div=$.d()
			if(color){
				div.C(color)
			}
			div.K('col-xs-'+num)
			return div
		}
		$.sml=$.tablets=function self(color,num){
			if(N(color)){
				return self(null,color)
			}
			var div=$.d()
			if(color){
				div.C(color)
			}
			div.K('col-sm-'+num)
			return div
		}
		$.md=$.desktops=function self(color,num){
			if(N(color)){
				return self(null,color)
			}
			var div=$.d()
			if(color){
				div.C(color)
			}
			div.K('col-md-'+num)
			return div
		}
		$.lg=$.largeDesktops=function(c,num){
			if(N(c)){
				return $.lg(null,c)
			}
			var d=$.dK('col-lg-'+num)
			if(c){
				d.C(c)
			}
			return d
		}
	}
	
	function media(){
		MED=function(){
			/*
	
	
	
			 @media screen and (min-width:600px) {        nav { float: left; width: 25%; }        section { margin-left: 25%; }      }
	
			 @media screen and (max-width:599px) {        nav li { display: inline;  }          }
	
	
	
	
			 */
		}
		VIEWPORT=function(){
			
			// <meta name="viewport" content="initial-scale=1">
			// http://webdesign.tutsplus.com/articles/quick-tip-dont-forget-the-viewport-meta-tag--webdesign-5972
			//http://blog.javierusobiaga.com/stop-using-the-viewport-tag-until-you-know-ho
		}
		$CSS.mx.bpLarge=function(cont){
			return [
				'@media only screen and (max-width: 400px)',cont
			]
		}
		$CSS.mx.bpMid=function(cont){
			return [
				'@media only screen and (max-width: 600px)',cont
			]
		}
		$CSS.mx.bpSmall=function(cont){
			return [
				'@media only screen and (max-width: 800px)',cont
			]
		}
	}
	
	//prevent iphone/ipad default scrolling
	$(
		function(){
			$('body').on('touchmove',function(e){ e.preventDefault() })
		}
	)
	MOBILECENTER=function(){
		z()
		$('body').C('u')
		d=$.div('o',400,200).A().drag().pad(20).A(
			dd=$.div('u',200,100).xCenter(),
			$.div('g',100,80).xCenter()
		).P('r')
	}
	MOBILETIPS=function(){
		z()
		$('body').C('u')
		$.div('b',10,10).drag()
		$.div('b',10,10).drag()
		$.div('b',10,10).drag()
		d=$.div('o',400,200).A().drag().pad(20)
		d.A($.h3('mobile tips').C('x','w'))
		d.A($.h4('tip1:  First and foremost, screen sizes can vary greatly between different device categories as can screen resolutions and aspect ratios ').C('x','t'))
		d.A($.h4('tip2:  If you want your HTML5 games to work well on mobile devices, you should make sure they either support multiple resolutions or don’t exceed the WVGA frame size of 800x480.').C('x','t'))
		d.A($.h4('tip3: ').C('x','t'))
		d1=$.div('p',400,200).A().drag().pad(20)
		d1.A($.h3('mobile devices  zoom and pan -  counterproductive for games. term them off with: viewport meta tag').C('x','w'))
		d1.A($.h4("ex: cause your game’s viewport to occupy all of the available horizontal screen real estate.").C('x','t'))
		d1.A($.h4("ex: cause your game’s viewport to occupy all of the available horizontal screen real estate.").C('x','t'))
		d1.A($.h4('<meta name="Viewport"content="width=device-width; user-scaleable=no; initial-scale=1.0" />').C('x','t'))
		d1.A($.h4('[ user-scaleable = no ] ->  disables pinch-zooming').C('x','t'))
		d2=$.div('g',400,200).A().drag().pad(20)
		d2.A($.h3('mobile tips').C('x','w'))
		d2.A($.h4('tip1: ').C('x','t'))
		d2.A($.h4('tip2: ').C('x','t'))
		d2.A($.h4('tip3: ').C('x','t'))
	}
	H1=function(){
		z()
		rule="h1 {  font-size: 40px;  margin-bottom: 20px;  margin-left: 20px; }"
		$.addStyle(rule)
		// HTML5.CSSRule(rule)
		$.h1('this is a big font').A()
	}
	H12=function(){
		z()
		rule="h1 {  font-size: 22px; margin: bottom 10px;  @media (min-width:@screen-tablet) {font-size: 40px;   margin-bottom: 20px;   margin-left: 20px; } }"
		addStyle(rule)
		$h1('this is a small font').A()
	}
	BREAK=function(){
		z()
		addStyle("h1 { @media (min-width:400px) {font-size: 10px;} }")
		addStyle("h1 { @media (max-width:400px) {font-size: 20px;} }")
		// addStyle( "h1 { @media (min-width:1281px) {font-size: 40px;} }" )
		$.h1('afsdfdsasdf').A()
	}
	BREAK2=function(){
		
		
		// @media screen and (min-width: 600px) { .sixhundredminwidthclass {  width: 30%;  float: right;  } }
		//  @media screen and (max-width: 600px) {.sixhundredmaxwidth {  clear: both; font-size: 1.3em; } }
	}
	BREAK3=function(){
		z()
		//works
		$.addStyle(
			"@media all and (min-width: 960px) { body {font-size: 80px;}  }",
			"@media all and (max-width: 959px) and (min-width: 600px) {body{font-size: 40px;}}",
			"@media all and (max-width: 599px) and (min-width: 320px) {body{font-size: 20px;}}"
		)
		$.addStyle(
			"@media all and (min-width: 960px) { body {color:blue;}  }",
			"@media all and (max-width: 959px) and (min-width: 600px) {body{color:red;}}",
			"@media all and (max-width: 599px) and (min-width: 320px) {body{color:yellow;}}"
		)
		$.span('fasd').A()
		$.h1('fasd').A() //doesnt respond
	}
	touchDrg=function(element){
		var q=$b(qq(element).q).css({position:'absolute'}).on(
			'touchstart',
			function(e){
				$l('touchstart')
				var offset=$(this).offset(),
					deltaX=e.originalEvent.touches[0].pageX-offset.left,
					deltaY=e.originalEvent.touches[0].pageY-offset.top
				$l(deltaX+' : '+deltaY)
				$('html').on(
					'touchmove',function(e){
						$l('touchmove')
						q.css({left:e.originalEvent.touches[0].pageX-deltaX,top:e.originalEvent.touches[0].pageY-deltaY})
					}
				)
					.on(
					'touchend',function(){
						$l('touchstop');
						$(this).off()
					}
				)
			}
		)
		return qq(element)
	}
	TOUCHSTART=function(){
		z()
		div=$.div('red',100,200).A()
		touchDrg(div)
	}
	EASELTOUCH=function(){
		z()
		stage=cjs.stage(500).tick().A()
		//this lets it work on apple !!
		createjs.Touch.enable(stage)
		stage.bm('me',SL)
		stage.bm('me',SL)
		stage.bm('me',SL)
		stage.bm('me',SL)
		stage.bm('me',SL)
		$.div('red',10000,10).A()
	}
	MOBILEHEADERS=function(){
	}
	function dittoMaybe(){//prevent iphone/ipad default scrolling
		$(
			function(){
				$('body').on('touchmove',function(e){ e.preventDefault() })
			}
		)
		MOBILECENTER=function(){
			$.x()
			$('body').C('u')
			d=$.d('o',400,200).A().drag().pad(20).A(
				dd=$.d('u',200,100).xCenter(),
				$.d('g',100,80).xCenter()
			).P('r')
		}
		MOBILETIPS=function(){
			$.x()
			$('body').C('u')
			$.d('b',10,10).drag()
			$.d('b',10,10).drag()
			$.d('b',10,10).drag()
			d=$.d('o',400,200).A().drag().pad(20)
			d.A($.h3('mobile tips').C('x','w'))
			d.A($.h4('tip1:  First and foremost, screen sizes can vary greatly between different device categories as can screen resolutions and aspect ratios ').C('x','t'))
			d.A($.h4('tip2:  If you want your HTML5 games to work well on mobile devices, you should make sure they either support multiple resolutions or don’t exceed the WVGA frame size of 800x480.').C('x','t'))
			d.A($.h4('tip3: ').C('x','t'))
			d1=$.d('p',400,200).A().drag().pad(20)
			d1.A($.h3('mobile devices  zoom and pan -  counterproductive for games. term them off with: viewport meta tag').C('x','w'))
			d1.A($.h4("ex: cause your game’s viewport to occupy all of the available horizontal screen real estate.").C('x','t'))
			d1.A($.h4("ex: cause your game’s viewport to occupy all of the available horizontal screen real estate.").C('x','t'))
			d1.A($.h4('<meta name="Viewport"content="width=device-width; user-scaleable=no; initial-scale=1.0" />').C('x','t'))
			d1.A($.h4('[ user-scaleable = no ] ->  disables pinch-zooming').C('x','t'))
			d2=$.d('g',400,200).A().drag().pad(20)
			d2.A($.h3('mobile tips').C('x','w'))
			d2.A($.h4('tip1: ').C('x','t'))
			d2.A($.h4('tip2: ').C('x','t'))
			d2.A($.h4('tip3: ').C('x','t'))
		}
		H1=function(){
			z()
			rule="h1 {  font-size: 40px;  margin-bottom: 20px;  margin-left: 20px; }"
			$.addStyle(rule)
			// HTML5.CSSRule(rule)
			$.h1('this is a big font').A()
		}
		H12=function(){
			z()
			rule="h1 {  font-size: 22px; margin: bottom 10px;  @media (min-width:@screen-tablet) {font-size: 40px;   margin-bottom: 20px;   margin-left: 20px; } }"
			addStyle(rule)
			$h1('this is a small font').A()
		}
		BREAK=function(){
			z()
			addStyle("h1 { @media (min-width:400px) {font-size: 10px;} }")
			addStyle("h1 { @media (max-width:400px) {font-size: 20px;} }")
			// addStyle( "h1 { @media (min-width:1281px) {font-size: 40px;} }" )
			$.h1('afsdfdsasdf').A()
		}
		BREAK2=function(){
			
			
			// @media screen and (min-width: 600px) { .sixhundredminwidthclass {  width: 30%;  float: right;  } }
			//  @media screen and (max-width: 600px) {.sixhundredmaxwidth {  clear: both; font-size: 1.3em; } }
		}
		BREAK3=function(){
			z()
			//works
			$.addStyle(
				"@media all and (min-width: 960px) { body {font-size: 80px;}  }",
				"@media all and (max-width: 959px) and (min-width: 600px) {body{font-size: 40px;}}",
				"@media all and (max-width: 599px) and (min-width: 320px) {body{font-size: 20px;}}"
			)
			$.addStyle(
				"@media all and (min-width: 960px) { body {color:blue;}  }",
				"@media all and (max-width: 959px) and (min-width: 600px) {body{color:red;}}",
				"@media all and (max-width: 599px) and (min-width: 320px) {body{color:yellow;}}"
			)
			$.span('fasd').A()
			$.h1('fasd').A() //doesnt respond
		}
		touchDrg=function(element){
			var q=$b(qq(element).q).css({position:'absolute'})
				.on(
				'touchstart',
				function(e){
					$l('touchstart')
					var offset=$(this).offset(),
						deltaX=e.originalEvent.touches[0].pageX-offset.left,
						deltaY=e.originalEvent.touches[0].pageY-offset.top
					$l(deltaX+' : '+deltaY)
					$('html').on(
						'touchmove',function(e){
							$l('touchmove')
							q.css({left:e.originalEvent.touches[0].pageX-deltaX,top:e.originalEvent.touches[0].pageY-deltaY})
						}
					)
						.on(
						'touchend',function(){
							$l('touchstop');
							$(this).off()
						}
					)
				}
			)
			return $(element)
		}
		TOUCHSTART=function(){
			$.x('x')
			div=$.d('red',100,200).A()
			touchDrg(div)
		}
		EASELTOUCH=function(){
			z()
			stage=cjs.stage(500).tick().A()
			//this lets it work on apple !!
			cjs.Touch.enable(stage)
			stage.bm('me',SL)
			stage.bm('me',SL)
			stage.bm('me',SL)
			stage.bm('me',SL)
			stage.bm('me',SL)
			$.d('red',10000,10).A()
		}
		MOBILEHEADERS=function(){}
	}
	
	function media(){
		MED=function(){
			
			
			
			/*
	
	
	
			 @media screen and (min-width:600px) {        nav { float: left; width: 25%; }        section { margin-left: 25%; }      }
	
			 @media screen and (max-width:599px) {        nav li { display: inline;  }          }
	
	
	
	
			 */
		}
		CSSold=function(){
			SRU=function(){
				$.x('y','css')
				_.ru=function(){
					var g=G(arguments),ss
					ss=document.styleSheets[0]
					if(ss.insertRule){
						ss.insertRule(g.f+g.s,ss.cssRules.length||0)
					}
					else
						if(ss.addRule){
							ss.addRule(g.f,g.s,-1)
						}
					return ss
				}
				//$.hdS( css = "<link rel='stylesheet' href='/css/masterBlaster.css' type='text/css' media='screen'>" )
				$.d(400,50).K('cssClass').pad(20).A(
					ip=$.ip('date'),$.p('pargraph').A($.sp('hifds'))
				)
				//ip= $.ip('date').datepicker()
				//d1= $.dI('div', 'o', 400, 50).A($.sp('hifds'))
				// $.d().K('abc').A('this is a div')
				// $.d(500, 50).K('dd').A('this is a div')
				style=document.createElement('style')
				style.type='text/css'
				rule='.cssClass {color: #F00;}'
				style.innerHTML=rule
				$('head').A(style)
				rl1='{ display:none; }'
				_.ru('.abc','{background-color: white;color: orange}')
				_.ru('.abc','{color: white; background-color: green;}')
				_.ru('.dd','{background-color: white;color: orange}')
				$.ru('p','color:Orange')
			}
			CSS=function(){
				$.x()
				$.dK('cssClass',400,250).pad(20).A(
					ip=$.ip('date'),
					$.p('p').A($.sp('hifds'))
				).K('cssClass')
				$Ss(
					'.cssClass'+
					'{'+$Ru.dec('color','blue')
					+$Ru.dec('background-color','red')
					+'}'
				)
			};
			CSS.old=function(){
				CSS=function(){
					$.x(null,'adds .cssClass.. see for yourself')
					ru='.cssClass{color:#F00;}';
					ru1='{display:none;}'
					$.d(400,50).K('cssClass').pad(20).A(
						ip=$.ip('date'),$.p('pargraph').A($.sp('hifds'))
					)
					style=document.createElement('style');
					style.type='text/css'
					style.innerHTML=ru
					$('head').A(style)
					$l($.hd().oh())
				}
				CSS=function(){
					$.x()
					ru='.cssClass{color:#F00;}'
					$.d(400,50).K('cssClass').pad(20).A(
						ip=$.ip('date'),
						$.p('pargraph').A($.sp('hifds'))
					)
					style=document.createElement('style');
					style.type='text/css'
					style.innerHTML=ru
					$('head').A(style)
					$l($.hd().oh())
				}
				CSS=function(){
					$.x()
					ru='.cssClass{color:#F00;}'
					$.d(400,50).K('cssClass').pad(20).A(
						ip=$.ip('date'),
						$.p('pargraph').A($.sp('hifds'))
					)
					style=$El('style')
					style.type='text/css'
					style.innerHTML=ru
					$.hd(style)
					$l($.hd().oh())
				}
				CSS=function(){
					$.x()
					$.d(400,50).K('cssClass').pad(20).A(
						ip=$.ip('date'),
						$.p('pargraph')
							.A($.sp('hifds'))
					)
					sty=$Sty(ru='.cssClass{color:#F00;}')
					$.hd(sty)
					$l($.hd().oh())
				}
				CSS=function(){
					$.x()
					$.dK('cssClass',400,250).pad(20).A(
						ip=$.ip('date'),
						$.p('p').A(
							$.sp('hifds')
						)
					).K('cssClass')
					$Ss('.cssClass{color:yellow;background-color:green;}')
					$l($.hd())
					$l($.hd().oh())
					$l('-')
					$l(ip)
					$l(ip.oh())
				}
			}
			CSS=function(){
				$.x('sBr')
				$.dK(
					'class',
					400,250
				).pad(20).A(
					ip=$.ip('date'),
					$.p('p').A($.sp('hifds'))
				)
				decBlk=$Ru.decBlk(
					$Ru.dec('color','blue'),
					$Ru.dec('background-color','magenta')
				)
				$Ss('.class'+decBlk)
				$.in(
					function(){
						h=$('head')
						$l(h.oh())
						$l(ch=h.children)
						c=h.children()
						l=_.l(c)
						q=$(l)
						$l(
							'!!! -> '+q.oh()+' -> '+q.text()
						)
					}
				)
			}
			CSS=function(){
				$.x('sBr')
				$.dK(
					'class',
					400,250
				).pad(20).A(
					ip=$.ip('date'),
					$.p('p').A($.sp('hifds'))
				)
				decBlk=$Ru.decBlk(
					$Ru.dec('color','blue'),
					$Ru.dec('background-color','magenta')
				)
				$Ss('.class'+decBlk)
				$.in(
					function(){
						h=$('head')
						$l(h.oh())
						$l(ch=h.children)
						c=h.children()
						l=_.l(c)
						q=$(l)
						$l(
							'!!! -> '+q.oh()+' -> '+q.text()
						)
					}
				)
			}
			CSS=function(){
				$.x('wh')
				$.dK('k',400,250).pad(20).A(
					$.ip('date'),
					$.p('p').A($.sp('this should NOT be nonsense, mister j'))
				)
				$Ru._rule=function(sel,decs,dec2){
					var g=G(arguments)
					if(dec2){
						decs=g.r
					}
					else
						if(!A(decs)){
							decs=[decs]
						}
					return sel+this.decBlk.apply(this,decs)
				}
				$Sty(
					$Ru._rule(
						'.k',
						$Ru.dec('color','blue'),
						$Ru.dec('background-color','magenta')
					)
				)
			}
			CSS=function(){
				$.x('ct')
				$.bt('afdsfadsfdfds')
				$.dK('k',400,250).pad(20).A(
					$.ip('date'),
					$.p('p').A($.sp('this should NOT be nonsense, mister j'))
				)
				$Ru.rule(
					{sel:'.k','c':'b','C':'tq'},
					{sel:'button','c':'w','C':'z',w:'30px',h:'50px'}
				)
			}
		}
		VIEWPORT=function(){
			
			// <meta name="viewport" content="initial-scale=1">
			// http://webdesign.tutsplus.com/articles/quick-tip-dont-forget-the-viewport-meta-tag--webdesign-5972
			//http://blog.javierusobiaga.com/stop-using-the-viewport-tag-until-you-know-ho
		}
		$CSS.mx.bpLarge=function(cont){
			return [
				'@media only screen and (max-width: 400px)',cont
			]
		}
		$CSS.mx.bpMid=function(cont){
			return [
				'@media only screen and (max-width: 600px)',cont
			]
		}
		$CSS.mx.bpSmall=function(cont){
			return [
				'@media only screen and (max-width: 800px)',cont
			]
		}
	}
	
	function touch(){
		TOMAKETOUCHWORKAGAIN=function(){
			
			/*
	
			 //  w._mouseJoint = null //  w._mouseIsDown = false
	
			 w.mouseJoints()
	
			 $.touchstart(function(e){
	
			 w._mouseIsDown = true
	
			 recordMouseCoords(e)
			 $.touchmove(recordMouseCoords)
			 function recordMouseCoords(e){
			 var touch = e.originalEvent.touches[0]
			 mX = (touch.clientX-w.x)/30
			 mY = (touch.clientY-w.y)/30
			 }
	
	
			 }).touchend( function(){w._mouseIsDown = false})
	
	
	
			 setInterval(function(){//handleMouseJoints()
			 w.draw(1/60)
			 if(F(ops.cb)){ops.cb()}
			 w.stage.update()
			 }, 1000/60) */
		}
		function hammer(){
			HAMMER=function(){
				z()
				d=$divA().w(100).h(100).c('r').a().id('hammerdrag')
				var hammertime=new Hammer(d.el,{})
				// hammertime.on('pan', function(ev) {   console.log(ev);  d.left(d.left()+1  ) })
				hammertime.on(
					'panright',function(ev){
						// alert('pan')
						console.log(ev);
						d.left(
							d.left()+1
						)
					}
				)
				hammertime.on(
					'panleft',function(ev){
						// alert('pan')
						console.log(ev);
						d.left(
							d.left()-1
						)
					}
				)
			}
			HAMMER1=function(){
				z()
				d=$div().w(100).h(100).c('r').a().id('hammerdrag')
				var hammertime=new Hammer(d.el,{})
				hammertime.on(
					'pan',function(ev){
						alert('pan')
						console.log(ev);
					}
				)
				hammertime.get('pan').set({direction:Hammer.DIRECTION_ALL});
				c=$can().a()
				c.can.addEventListener(
					'touchmove',function(ev){
						$l('touchmove')
						e=ev
					}
				)
				Hammer(c.can).on(
					'drag',function(){
						alert('drag')
					}
				)
				hammertime=new Hammer(c.can,{})
				hammertime.on(
					'pan',function(ev){
						c.x(c.x()+10)
						console.log(ev)
					}
				)
				//By default it adds a set of tap, doubletap, press, horizontal pan and swipe, and the multi-touch pinch and rotate recognizers. The pinch and rotate recognizers are disabled by default because they would make the element blocking, but you can enable them by calling:
				hammertime.get('pinch').set({enable:true});
				hammertime.get('rotate').set({enable:true});
				hammertime.on(
					'pinch',function(ev){
						alert('pinch')
					}
				)
				ctx=c.can.getContext('2d')
			}
		}
		
		function ipad(){
			//J.Touch.enable(st);
			touchEnable=function(s){//important for ipad
				//move this onto stage itself
				cjs.Touch.enable(s);
				return s
			}
		}
	}
}