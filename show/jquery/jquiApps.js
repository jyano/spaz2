function comm(){
DIAL=function(){
    $.dlg = function (msg) {
        var dlg=$("#response-dialog")
        if(!dlg[0]){
            dlg=$.d().at({
                title:"Messaage",
                id:"response-dialog"
            })
        }
        dlg.html(msg).dialog({
            autoOpen: true,
            width: 400,  modal: true,
            closeOnEscape: true,
            buttons:  { Ok: function () {dlg .dialog("close")}  }
        })
    }

    $l('dial')
    $.x(null, 'dialog')

    $.d([
        $.p('This is the default dialog which is useful for displaying information'),
        $.p('dialog window can be moved, resized and closed with the x icon')]).id('dialog').at('title', 'Basic dialog')

    $("#dialog" ).dialog()


    $.dlg('dialog 1')

    _.in(3, function(){
        $.dlg('dialog 2')
        $.dlg('dialog 3')
        $.dlg('dialog 4')
    })


}
TIP=function(){z()

    $.p([

        $.a('text goes here: ').ti('description, yo'),
        $.ip().ti('little help..')
    ])//.tooltip()

    $( document ).tooltip()

}
    PROG = function () {
        z();

        $.d().id('progressbar')

        $("#progressbar").progressbar({
            value: false
        })
    }

}
    

function inputs(){
    DATEPICK = function () {
        $.x('b', 'jqui')

        $.d().id("datepicker")
        $("#datepicker").datepicker()
        function alt() {
            $.p('Date: ').A($.ip().id('dtp'))
            $('#dtp').dtp()
            d = $.d('b', 400, 400).A(ip = $.ip('date').datepicker()).pad(20)
        }
    }

    RBUI= BUTSET=RADIOBTUI= function(){z()
    /*
     $.f([$.fs([$.lg('Favorite jQuery Project'),
     $.dI('radio',[
     $.lb('Sizzle','sizzle'),  $.rb('project', 'sizzle'),
     $.lb('QUnitz','qunit'),  $.rb('project', 'qunit','+'),
     $.lb('Color','color'), $.rb('project', 'color')
     ])
     ])])
     */

    $.dI('radio',[
        $.lb('Sizzle','sizzle'),  $.rb('project', 'sizzle'),
        $.lb('Qunitz','color'),   $.rb('project', 'color'),
        $.lb('Color','qunit'),  $.rb('project', 'qunit','+')
    ])
    $( "#radio" ).buttonset()

}
SLIDER=RANGEUI= function(){z(); $CSS({_slider:{M:12}}); $.dI('slider').slider()}
    NUMSPINN = function () {


        $.ip().A().C('o').spinner()


    }


    UIBUT = function () {
        z()

        $.C('o')
        $.sp('span btb').button()
        $.a('a btb').button()
        $.bt('button label')
        $("button").button()
        $.d('r', 50, 60)
        $.d('b', 70, 50).button()
        $('<div>').A().A('hello').WH(70, 50).button()
        $('<div>').A().A('hello').WH(70, 50).H(200).css({
            borderColor: 'blue',
            borderStyle: 'dashed',
            borderWidth: 200
        })
    }//

    CBW1 = function () {
        z()

        $.widget("app.checkbox", {

            _create: function () {

                // Call the default widget constructor first.
                this._super();

                // Hide the HTML checkbox, then insert our button.
                this.element.addClass("ui-helper-hidden-accessible");
                this.button = $("<button/>").insertAfter(this.element);

                // Configure the button by adding our widget class,
                // setting some default text, default icons, and such.
                // The create event handler removes the title attribute,
                // because we don't need it.
                this.button.addClass("ui-checkbox")
                    .text("checkbox")
                    .button({
                        text: false,
                        icons: {
                            primary: "ui-icon-blank"
                        },
                        create: function (e, ui) {
                            $(this).removeAttr("title");
                        }
                    });

                // Listen for click events on the button we just inserted and
                // toggle the checked state of our hidden checkbox.
                this._on(this.button, {
                    click: function (e) {
                        this.element.prop("checked", !this.element.is(":checked"));
                        this.refresh();
                    }
                });

                // Update the checked state of the button, depending on the
                // initial checked state of the checkbox.
                this.refresh();

            },

            _destroy: function () {

                // Standard widget cleanup.
                this._super();

                // Display the HTML checkbox and remove the button.
                this.element.removeClass("ui-helper-hidden-accessible");
                this.button.button("destroy").remove();

            },

            refresh: function () {
                // Set the button icon based on the state of the checkbox.
                this.button.button("option", "icons", {
                    primary: this.element.is(":checked") ?
                        "ui-icon-check" : "ui-icon-blank"
                });

            }

        });
        s = $('<span>').A(
            $('<div>').A(
                $.cb().id('sm'),
                $.lb('Small', 'check').K('ui-widget')
            ),

            $('<div>').A(
                $.cb().id('md'),
                $.lb('Medium', 'check').K('ui-widget')
            ),

            $('<div>').A(
                $.cb().id('lg'),
                $.lb('Large', 'check').K('ui-widget'))
        ).A()

        $("input[type='checkbox']").checkbox();

    }

    CBW = function () {
        z()

        html = '<div> <input id="sm" type="checkbox"/> <label for="check" class="ui-widget">Small</label> </div> <div> <input id="md" type="checkbox"/> <label for="check" class="ui-widget">Medium</label> </div> <div> <input id="lg" type="checkbox"/> <label for="check" class="ui-widget">Large</label> </div>'

        $(html).A()


        $.widget("app.checkbox", {

            _create: function () {

                // Call the default widget constructor first.
                this._super();

                // Hide the HTML checkbox, then insert our button.
                this.element.addClass("ui-helper-hidden-accessible");
                this.button = $("<button/>").insertAfter(this.element);

                // Configure the button by adding our widget class,
                // setting some default text, default icons, and such.
                // The create event handler removes the title attribute,
                // because we don't need it.
                this.button.addClass("ui-checkbox")
                    .text("checkbox")
                    .button({
                        text: false,
                        icons: {
                            primary: "ui-icon-blank"
                        },
                        create: function (e, ui) {
                            $(this).removeAttr("title");
                        }
                    });

                // Listen for click events on the button we just inserted and
                // toggle the checked state of our hidden checkbox.
                this._on(this.button, {
                    click: function (e) {
                        this.element.prop("checked", !this.element.is(":checked"));
                        this.refresh();
                    }
                });

                // Update the checked state of the button, depending on the
                // initial checked state of the checkbox.
                this.refresh();

            },

            _destroy: function () {

                // Standard widget cleanup.
                this._super();

                // Display the HTML checkbox and remove the button.
                this.element.removeClass("ui-helper-hidden-accessible");
                this.button.button("destroy").remove();

            },

            refresh: function () {
                // Set the button icon based on the state of the checkbox.
                this.button.button("option", "icons", {
                    primary: this.element.is(":checked") ?
                        "ui-icon-check" : "ui-icon-blank"
                });

            }

        });

        // Create three checkbox instances.
        $(function () {
            $("input[type='checkbox']").checkbox();
        });

    }


}
function navig(){

    UISLMENU = USM = function () {
        $.x()
        $.fn.slM = function () {
            var g = G(arguments)
            this.selectmenu.apply(this, g)
            return this
        }
        $CSS({


            fieldset: {B: 0},
            label: {d: 'b', M: '30px 0 0 0'},
            select: {w: 200},

            _overflow: {h: 200}

        })

        $.d([$.f().at('action', '#').A($('<fieldset>').A(
            $.lb('select a speed').for('speed'),
            $.sl().id('speed').n('speed').A(
                $.op('slower'), $.op('slow'),
                $.op('medium').at('selected', 'selected'),
                $.op('fast'), $.op('faster')),
            $.lb('Select a file').for('files'),
            $.sl().n('files').id('files').A(
                $.og("Scripts").A(
                    $.op('jquery', 'jquery'),
                    $.op('ui.juqery.jus', 'jqueryui')),
                $.og("Other files").A(
                    $.op('some unknown file', 'somefile'),
                    $.op('Some other file w long option text', 'someotherfile'))),
            $.lb('Select a number').for('number'),
            $.sl().n('number').id('number').A(
                $.op('1'), $.op('2').at('selected', "selected"),
                $.op('3'), $.op('4'), $.op('5'), $.op('6'), $.op('7'),
                $.op('8'), $.op('9'), $.op('10'),
                $.op('11'), $.op('12'), $.op('13'), $.op('14'),
                $.op('15'), $.op('16'), $.op('17'), $.op('18'),
                $.op('19')
            )))]).K('demo')
        $("#speed").selectmenu()
        $("#files").selectmenu()
        $("#number").selectmenu().selectmenu("menuWidget").K("overflow")
    }
MENU=function(){z(); $CSS({'.ui-menu': { w: 150 }})
    $.ul([
        $.li(['Hockey']),
        $.li(['Football', $.ul([
            $.li('Iain Hume'),
            $.li('Del Piero'),
            $.li('David James')])]),
        $.li(['Cricket', $.ul([
            $.li('Sachin'),
            $.li('Ganguly'),
            $.li('Dravid'),
            $.li('yano')
        ])]).A(),
        $.li(['KickBoxing']).K('ui-state-disabled'),
        $.li(['Tennis', $.ul([$.li().A('Patrick Rafter')])])
    ]).id('menu')
    $( "#menu" ).menu()
}



UITAB=function(){z()
    $.d([

        $.ul([ $('<li><a href="#fragment-1"><span>One</span></a></li>'),
            $(' <li><a href="#fragment-2"><span>Two</span></a></li>'),
            $('<li><a href="#fragment-3"><span>Three</span></a></li>')
        ]),

        $.dI('fragment-1').A(
            $('<p>First tab is active by default:</p> <pre><code>$( "#tabs" ).tabs(); </code></pre>')),

        $.dI('fragment-2').A(l1),
        $.dI('fragment-3').A(l2)

    ]).tabs()


}
    AUTOCP = function () {
        $.x('x', 'autocp')

        availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure",
            "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java",
            "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"]


        $.d([

            $.lb('Tags:').for('tags'), $.ip().id('tags')

        ]).K('ui-widget')


        $(function () {
            $("#tags").autocomplete({source: availableTags})
        })

        function other() {
            AUTOCOMP = function () {
                z()

                $.lb('Select a programming language: ', "autocomplete")


                $.ip().id("autocomplete")

                tags = ["c++", "java", "php", "coldfusion", "javascript", "asp", "ruby"];
                $("#autocomplete").autocomplete({
                    source: function (request, response) {
                        var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
                        response($.grep(tags, function (item) {
                            return matcher.test(item);
                        }));
                    }
                })
            }
        }

    }
    ACCORD = ACC = function () {
        z()
        ul = $.ul([
            $.li('List item 1'),
            $.li('List item 2'),
            $.li('List item 3')
        ])
        $.d([
            $.h3('Section 1'), $.d([$.p(l1)]),
            $.h3('Section 2'), $.d([$.p(l2)]),
            $.h3('Section 3'), $.d([$.p(l1), ul])
        ]).accordion()
    }
    }
    

SPANFOCUS= FOC = function () {
    $.x()

    $.sp('Some Span').id("my-span").at('tabindex', "0")
    $.sp('Some Span1').id("my-span1")//.at('tabindex',"0")
    $.sp('Some Span2').id("my-span2").at('tabindex', "0")
    document.getElementById('my-span').focus()
    document.getElementById('my-span2').focus()
}
 
function userInt(){
     HIGHLIGHT = HLT = function () {

         $.h({
             p: {C: 'y', w: 200, B: '1px solid green'},
             d: {C: 'r', w: 100, h: 100}
         })//  df HL col is yellow.// simp  syntax to use   effect :   se.ef( "hgl", {args}, spd ) // hgl col= "#ffff99".    mode  of the effect =show | hide
         $.dK('target')
         $.bt('Highlight: ', function () {
             $(".target").ef("highlight",
                 {color: "#669966"}, 3000)
         })
     }


     SAMPLER = EFFECTS = EFS = function () {
         $.x('x')

         $CSS({
             _toggler: {w: 500, h: 200, p: 'r'},
             $button: {pad: '.5em 1em', 'text-decoration': 'none'},
             $ef: {w: 240, h: 135, pad: '0.4em', p: 'r'},
             '$ef h3': {mar: 0, pad: '0.4em', 'text-align': 'center'},
             '_ui-efs-transfer': {bor: '2px dotted gray'}
         })

         $.d([
             $.d([
                 $.h3('Effect').K('ui-widget-header ui-corner-all'),
                 $.p('afsdfsdfsa fasdsafdas fdsdfa')
             ]).id('ef').K("ui-widget-content ui-corner-all")

         ]).K('toggler')


         sl = $.sl().n('efs').id('efTypes')
         _.e(['efs', 'blind', 'bounce', 'clip', 'drop', 'explode', 'fade', 'fold',
                 'highlight', 'puff', 'pulsate', 'scale', 'shake', 'size', 'slide', 'transfer'],
             function (a) {
                 sl.A($.op(a))
             })

         $.bt('Run Effect', runEf).id("button").K("ui-state-default ui-corner-all")
         function runEf() {
             $l('runEf')
             var selEf = $("#efTypes").val()
             op = ( selEf === "scale" ) ? {percent: 0} :
                 ( selEf === "transfer" ) ? {to: "#button", className: "ui-efs-transfer"} :
                     ( selEf === "size" ) ? {to: {width: 200, height: 60}} : {}
             $("#ef").effect(selEf, op, 500, cb)
             function cb() {
                 _.in(function () {
                     $("#ef").removeAttr("style").hide().fadeIn()
                 })
             }

             $("#button").$(function () {
                 runEf();
                 return false
             })
         }


     }

     HIDESHOWNICE=HIDE = function () {



    $.s({

        p: {C: '#bca', w: 200, bor: '1px solid green'},

        div: {w: 100, h: 100, C: 'r'}
    })


    $.p('$')
    $.bt('hd').id('hd')
    $.bt('sh').id('sh')
    d = $.dK('tg')

    $('#hd').$(function () {
        d.hd('sl', {d: 'r'}, 500)
    })

    $('#sh').$(function () {
        d.sh('sl', {d: 'd'}, 2000)
    })


}
OVERLAY =FADEIN=FIN= function () {
    $.h({

        bd: {B: 0,M: 0},
        '_ui-widget-overlay': {
            bg: 'repeat-x scroll 50% 50% #AAA', al: '0.3'},
        '_ui-widget-overlay': {
            h: '100%', l: 0,
            ps: 'a', t: 0, w: '100%'}
    })
    ovL = $.dK("ui-overlay",[
        $.dK("ui-widget-overlay")]).hd().fI()
    $.rz(function () {
        ovL.WH($(document).W(),$(document).H()).hd().fI()
    })

}
DGB = function () {
    $.s({$dgb: {w: 100, h: 100, C: 'r'}} ,'o', 'dgb')
    $.dI('dgb', ['Drag me']).dgb()
}
DPB = function () {
    $.x('b', 'dpb')
    $CSS({
        $dgb: {C: 'r', w: 100, h: 100},
        $dpb: {
            p: 'a',
            C: 'o', c: 'b',
            l: 250, t: 0, w: 400, h: 400,
            pad: 10
        }
    })
    dp = $.d(['Drop here']).id('dpb')
    dg = $.d(['Drag me']).id('dgb')
    $("#dgb").dgb()
    $("#dpb").dpb({
        drop: function () {
            dp.C($r()).A(dg.XY(0, 0))
        }
    })
}
 }


function err(){
    HIGHLIGHTFADE= HGHLT = function () {
        $.h({

            _gg: {
                C: 'o', w: 100, h: 100}})

        // ?? hides or shows an el  by ang its bgC 1st // bgC ="#ffff99"


        d = $('<div>').A().A('Click to tog ').K('gg')
        $.$(function () {
            $l('$.$')
            $("#gg").toggle("highlight")
        })


    }
    DRAGGY=function(){$.x('o', 'draggy')
        $.d('r', 500, 500).K('sel')
        $('.sel').dgb({
            delay: 1000,
            distance: 100,
            helper: "clone",
            addClasses: false,
            snapMode: "inner",
            grid: [ 50, 20 ],
            snap:true
        })


    }
    APP2=function(){

        k=$('.k')

        k.dgb({appendTo: "body"})
        k.dgb({  helper: "clone"   })

    }
    TABSELIX = function () {
        $.h({
            ip: {bor: '1px solid #000'}, d: {pad: 5}
        })
        $.d([
            'no tabindex'
        ])
        $.d([$.ip().tIx(5, '+tIx')
        ])
        $.d([$.ip().tIx(5, '+tIx')
        ])
        $.d(['-tIx',
            $.ip().tIx(-1, '-tIx')
        ])

        $(":tabbable").bdC("red")
    }
    MENU1=function(){z()

        $CSS({
            '.ui-menu' : {
                width: 200,
                C:'r'
            }

        })


        $.ul().A(
            $.li('Item 1'),
            $.li('Item 2'),
            $.li().A(
                'Item 3',
                $.li('Item 3-1'),
                $.li('Item 3-2'),
                $.li('Item 3-3'),
                $.li('Item 3-4'),
                $.li('Item 3-5')),
            $.li('Item 4'),
            $.li('Item 5')
        ).id("menu")
        $( "#menu" ).menu()
    }
    JUSTREDDIV=IXSTAT = function () {
        $.x()
        k = $.d('r', 500, 200)
        // to clb bT-like elS. Applies clb df ct stys to el
        // and its ch t, lks, and icons.
        k.K('.ui-state-default')
        //   on mv to clb bt-oid. Applies "clickable hover" ct stys
        // to an element and its child text, links, and icons.
        k.K('.ui-state-hover')
        //  on kb fcs to clb btoids. Applies "clickable focus"
        // ct stys  to el and its child text, links, and icons.
        k.K('.ui-state-focus')
        //   on md to clb btoids. Applies "clickable active" cot stysto an el
        // and its ch t, lks, and icons.
        k.K('.ui-state-active')
    }
    DATESCR=function(){$.x('b','jqui')
    ('<link rel="stylesheet" href="/jquery-ui.min.css">').A()
    ('<script src="/jquery-ui.min.js">').A()
        d = $.d('b',400,400).A(
            ip= $.ip('date').datepicker()
        ).pad(20)
    }
    DROP=function(){
        $CSS({   $dgb: {w: 100, h:50, pad: '0.5em', fl:'l',
            mar:'22px 5px 10px 0'},
            $dpb: {w:130, h:90, pad:'0.5em' , mar:10, fl:'l'},
            div: {w:400, h:300, C:'r',c:'y'} ,


            $dgb2 :{w:100, h:50,pad:'0.5em',mar:'0px 5px 10px 0'},

            '#dpb2,#dpb3,#dpb4,#dpb5': {w:12,h:90,pad:'0.5em',fl:'l',mar:10}

        })
        $.d().id('dgb').K('ui-widget-content').A($.p('Drag me'))
        $.d().id('dpb').K('ui-widget-header').A($.p('here'))
        $("#dgb").dgb()
        $("#dpb").dpb()
        Dpb(2,'Drag me to my target','ui-widget-content')
        Dpb(2,'here');
        Dpb(3,"dsbld !drop");Dpb(4,'tol toch');
        Dpb(5,'tol fit')
        $("#dgb2").dgb()
        $("#dpb2").dpb({drop: function( ev, ui ) {$(this).K("ui-state-highlight").find("p").html("Dpd")}})
        $( "#dpb3" ).dpb({disabled:"true", drop: function(ev,ui){$(this)
            .K("ui-state-highlight").find("p").html("Dpd")}})
        $( "#dpb4" ).dpb({tolerance: 'touch', drop: function(ev, ui){
            $(this).K("ui-state-highlight").find("p").html("Dpd w tch")}})
        $( "#dpb5" ).dpb({tolerance: 'fit', drop: function( ev, ui ) {
            $( this ).K( "ui-state-highlight" )
                .find("p").html("Dpd whn fulfit" )}})
        function Dpb (id,pT,k){k=k||"ui-widget-header"

            return $.d().id('dpb'+id).K(k).A($.p(pT))
        }

    }
    CRAZYWEIRD=POSI=function(){$.h({
        $par :{
            C:'b',ta:'c', w:'60%',ht:40,
            mar:'10px auto',pad:5, bor:'1px solid #777'
        },
        _psb:{
            p:'a', ds:'b',
            r:0,b:0,C:'r', ta:'c'
        },
        $psb1:{w:75, h:75},
        $psb2:{w:120, h:40},
        'select,input':{mL:15 }
    })


        $.d([$.p('This is the ps par el')]).id('par')
        $.dK('psb').id("psb1")
        $.p('to ps')

        $.d([ $.p('to ps2')]).K('psb','psb2')
        $.d().mgT(75).pad(20),  'ps...'
        $.d().pdB(20)

        $.b().A('my:')

        $.sl('my_hz', 'left', 'center', 'right')
        $.sl("my_vrt", 'top', 'center','bottom')

        $.d().pdB(20)

        $.p().A('at:')
        $.sl("at_hz", 'left','center','right')
        $.sl("at_vrt", 'top', 'center', 'bottom')



        $.d([

            $.b().A('cl:'),
            $.sl('cl_vrt','flip','flit','flipfit','none'),
            $.sl('cl_hz','flip','flit','flipfit','none')

        ]).pdB(200)


        $("select, input").bind("click keyup change", ps)
        $("#par").dgb({drag: ps})
        $(".psb").al(.5)

        ps()
        function ps() {
            $( ".psb" ).ps({
                of:$("#par"),
                my:$("#my_hz").v()+$("#my_vrt").v(),
                at:$("#at_hz").v()+$("#at_vrt").v(),
                collision: $( "#cl_hz" ).v() + $( "#cl_vrt" ).v()
            })}

    }
    BLANK=LAYOUTHELP = function () {

        k = $('.k')
        k.K('ui-helper-hidden')//  Hides content visually  and from assistive technologies, such as screen readers.
        k.K('ui-helper-hidden-accessible')// Hides cont
        k.K('.ui-helper-reset')// A basic style reset for DOM nodes. Resets pad, mar, t-dec, ls-sty
        k.K('.ui-helper-clearfix')// Appls float, wrapg pops to par els
        k.K('.ui-front')// z-ix to mang  stackg  of mult wids on screen.  See  stacking ELS
        k.K('.ui-widget')// outer ct of all wids. Appls fo-fam  and fZ to wids
        k.K('.ui-widget-header')// : appl2  hdr conts. Appls hdr cont sty to el and its ch t,lks, and icons.
        k.K('.ui-widget-content')
        // : appl2 cont cts. // Appls cont-ct stys to el and its ch t, lks, and icons.
        // (can be appld to par  or sib  of hdr).
    }
    NOTWORKING=ICONN = function () {
        $.x('y', 'icon')
        $.sp('helllloooo1')
        $.sp('helllloooo2')
            .K("ui-icon ui-icon-arrowthick-1-n")

        k = $.d('k', 500, 500)
        k.K('ui-icon ui-icon-triangle-1-e')

        /*
         Base class to be applied to an icon element.
         Sets dimensions to a 16px square
         block,
         hides inner text,
         sets background image to
         "content" state sprite image.

         Note: ui-icon class will be given    different sprite background image
         depending on its parent container.

         For example,
         a ui-icon element
         within a ui-state-default container
         will get colored according to
         the ui-state-default's icon color.
         Icon types

         After declaring a ui-icon class,
         you can follow up with a second class
         describing the type of icon.
         Icon classes generally follow a syntax


         */
        //  .ui-icon-{icon type}-{icon sub description}-{direction}.
//             For example, a single triangle icon pointing to the right
        //    .ui-icon-triangle-1-e
        //  ThemeRoller provides
        // full set of CSS framework icons  in  prev col
        //  Hv over them to see the class name.
    }


    NOTHINGATALL=VLAYSHAD = function () {

        k = $('.k')
        k.K('ui-widget-overlay')

        /*

         Applies 100% width & height dimensions to an overlay screen,
         along with background color/texture, and screen opacity.
         k.K('ui-widget-shadow')
         appy to vlay widg shad els
         Applies bg    c/texture, cust cor rad, al,
         top/left ofs and shd "thickness".
         Thickness is appld via pad  all sides of shad  that
         set to mat  the dims of the overlay el .
         Offsets are appld via t and l  margs  (can be pos  or neg ).
         */



        // https://www.packtpub.com/books/content/jquery-ui-themes-states-cues-overlays-and-shadows

    }

    ITHINKNOTHING=CORRAD = function () {
        $.x('o')
        $.d('d', 500, 500)
        k = $.d('d', 500, 500)
        /*   k.K('.ui-corner-tl') // corner-radius to top left corner of element.
         k.K('.ui-corner-tr')// t r cor
         k.K('.ui-corner-bl')//to bt l corn
         k.K('.ui-corner-br')// bt r cor
         k.K('.ui-corner-top')//o both t cors
         k.K('.ui-corner-bottom')//both bt cors
         k.K('.ui-corner-right')// both r cors
         k.K('.ui-corner-left')// both left cors
         k.K('.ui-corner-all')//all 4 cors
         */
    }
    STUCKLOGINFORM= UICT = function () {
        $.h()
//http://www.phpeveryday.com/articles/jQuery-UI-Using-The-Framework-Classes-P986.html
        num = 3
        if (num == 1) {

            $.dK("ui-widget").A(
                $.dK("ui-widget-header ui-corner-top").A(
                    $.h2('his is a ui-widget-header container')),
                $.dK("ui-widget-content ui-corner-bottom").A(
                    $.p('This is a ui-widget-content container')))


            $.dK("ui-widget").A(
                $.dK("ui-state-default ui-state-active ui-corner-all").A(
                    $.a('clickable and selected')),
                $.d([
                    $.a('clickable but not selected')
                ]).K("ui-state-default ui-corner-all"))
        }
        $('.ui-state-default a').hv(function () {
            $(this).parent().K("ui-state-hover")
        }, function () {
            $(this).parent().xK("ui-state-hover")
        })
        if (num == 2) {
            $.dK("ui-widget").A(
                $.dK("ui-state-default ui-state-active ui-corner-all").A(
                    $.dK("ui-icon ui-icon-circle-plus"), $.a('clb, seld')),
                $.dK("ui-state-default ui-corner-all").A(
                    $.dK("ui-icon ui-icon-circle-plus"),
                    $.a('clb, !selected')))

            $(".ui-state-default a").hv(function () {
                    $(this).pa().K("ui-state-hover")
                },
                function () {
                    $(this).pa().xK("ui-state-hover")
                })
        }
        if (num == 3) {


            $CSS({


                '_ui-form': {w: 470, mar: '0 auto'},
                '_ui-form _ui-widget-header h2': {margin: '10px 0 10px 20px'},
                '_ui-form _ui-widget-content': {padding: 20},
                '_ui-form label, _ui-form input, _ui-form _ui-state-error,_ui-form _ui-icon, _ui-form _ui-state-error p': {fl: 'l'},
                '_ui-form label, _ui-state-error p': {fz: 12, pad: '10px 10px 0 0'},
                '_ui-form _ui-state-error': {pad: 4},
                '_ui-form _ui-state-error p': {'font-weight': 'bold', pT: 5},
                '_ui-form _ui-state-error _ui-icon': {mar: '5px 3px 0 4px'}
            })


            $.dK("ui-widget ui-form").A(
                $.dK("ui-widget-header ui-corner-all").A(
                    $.h2('Login Form')),
                $.dK("ui-widget-content ui-corner-all").A(
                    $.f().K('ui-helper-clearfix').A(
                        $.lb('Username').K("ui-helper-reset"),
                        $.d("ui-state-error ui-corner-all").A(
                            $.ip(), $.dK("ui-icon ui-icon-alert"),
                            $.p('Required field')
                                .K("ui-helper-reset ui-state-error-text")))))


        }
        // <link rel="stylesheet" type="text/css" href="css/ui.form.css">


//http://www.w3.org/TR/html4/strict.dtd">

    }
    LOOKSLIKEHIGHLIGHT= DOESNOTHING=INTX=function(){$.x()
        $CSS({
            $d:{C:'r'}
        })
        k =$('.k')
        // to highlighted/selected els
        // Applies "highlight" ct sty to an el and
        // its ch text, links, and icons.
        k.K('.ui-state-highlight')
        // appl to z msg ct eles. Applies z ct stys to   el
        // and its ch text, links, and icons.
        k.K('.ui-state-error')
        //  appls just z t  c  w/o bg. Can be used on f-lbs, appls z icon c  to ch  icons.
        k.K('.ui-state-error-text')
        //// Appl dimmed al to dsabld UI els,  (adjunct, to an already-styled el)
        k.K('.ui-state-disabled')
        //    apl2 priority-1 bt when need bt hier
        k.K('.ui-priority-primary')
        k.K('.ui-priority-secondary')
        //: Class to be applied to a priority-2 button in situations where button hierarchy is needed.


        j=  $('<div>').A($.h3('hello'))
            .id('d').WH(100, 100).A()
            .K('.ui-state-highlight')


        $.d('r', 100, 100).A($.h3('hello'))




    }
    BROKENMENUMAYBE=HLFDL=function(){$.x('b', 'hlfdl')


        $.d(['z1']).K('error')
        $.d(['z2']).K('error')
        $.d(['hl1']).K('highlight')
        $.d(['hl2']).K('highlight')

        //   http://jsfiddle.net/774wH/


        function errorHighlight(e, type, icon) {
            if (!icon) {
                if (type === 'highlight') {
                    icon = 'ui-icon-info';
                } else {
                    icon = 'ui-icon-alert';
                }
            }
            return e.each(function () {
                $(this).addClass('ui-widget');
                var h = '<div class="ui-state-' + type + ' ui-corner-all" style="padding:0 .7em;">';
                h += '<p>';
                h += '<span class="ui-icon ' + icon + '" style="float:left;margin-right: .3em;"></span>';
                h += $(this).text();
                h += '</p>';
                h += '</div>';

                $(this).html(h);
            });
        }

//error dialog
        (function ($) {
            $.fn.error = function () {
                errorHighlight(this, 'error');
            };
        })(jQuery);

//highlight (alert) dialog
        (function ($) {
            $.fn.highlight = function () {
                errorHighlight(this, 'highlight');
            };
        })(jQuery);

        $('.error').error()
        $('.highlight').highlight()

    }
}

//to use bootstrap with jqui!!!
//http://www.ryadel.com/2015/01/03/using-jquery-ui-bootstrap-togheter-web-page/
// http://api.jqueryui.com/jQ.widget.bridge/



FID=function(){z()



    $.wg("jy.simp", {
        options: {text: ""},
        _setOption: function (k, v) {
            if(k === "text") {
                this.element.text(v)
            }
            this._trigger("change")
        }
    })
    a = $.a('Hello World')
        .simp().on("simpchange", function(){
            //p.html( a.simp("option", "text"))
        })

    // p = $.p()

    $.bt('Change Text',function(){
        a.simp("option", "text", "new text")
    }).button()



}
COLORANIM = CANIM = function () {
    $.x()
    $CSS(
        {
            $el: {
                C: '#aaa', c: '#006', fZ: 25,
                tA: 'c', P: '1em'
            }
        }
    )
    $.d().id('el').A('-color anim-')
    $.bt('anim!', function () {
            $("#el").an({
                c: 'g',
                C: "rgb(20,20,20)"
            })
        }
    )
    /*
     Color Animation
     jQuery UI effects core adds the ability to animate color properties using rgb(), rgba(), 
     hex values, or even color names such as "aqua". Simply include the jQuery UI effects core file and .animate() will gain support for colors.

     The following properties are supported:

     backgroundColor
     borderBottomColor
     borderLeftColor
     borderRightColor
     borderTopColor
     color
     columnRuleColor
     outlineColor
     textDecorationColor
     textEmphasisColor
     Support for color animation comes from the jQuery Color plugin. The Color plugin provides several functions for working with colors. For full documentation, please see the jQuery Color documentation.
     Class Animations
     While there are use cases for directly animating individual color properties, it is often a better approach to contain the styles in a class. jQuery UI provides a few methods which will animate the addition or removal of a CSS class, specifically .addClass(), .removeClass(), .toggleClass(), and .switchClass(). These methods will automatically determine which properties need to change and apply the appropriate animations.

     link
     */
}