//$.fn.J= $.fn.animate

function style() {
        $.addStyle = function () {
            _.each(arguments, function (rule) {

                $('<style>' + rule + '</style>').A()
            })


        }
        $.CSSReset = function () {
            $.CSSRule({
                '*': {m: 0, p: 0},  //css reset
                'html,body': {h: '100%', w: '100%'},
                canvas: {d: 'b'}
            })
        }
        /*
         testPlugin=function(){ z()

         d = $.div('r' ).WH( 100 ).A().A( 'abc' )

         e = $.div().WH( 100 ).col( 'r' ).A().A( 'abc' )

         f = $.div('r').WH( 100 ).col( 'b' ).A().A( 'abc' )

         g = $.div( 'b' , 500 , 500 ).A() }

         FRIDGEMAGNETS=function(){z()

         word = function(text, c1, c2){

         var s= $.span(text).C(c1, c2).A().drag()

         return s}


         w=word('hello', 'b', 'g')

         word('sicko', 'g', 'b')

         word('why, i oughta..', 'p', 'x')

         word('it was raining..', 'j', 'k')

         word('who ya gonna call?', 'h', 'i')
         word('dag nabit!', 'f', 'g')

         word('i like', 'd', 'e')
         word('tomorrow', 'a', 'c')

         word('me', 'r', 'b')

         }

         testCan = function(){
         z()
         c= $.canvas('o', 500, 500).A()


         //c.save().lineWidth(30).setStrokeColor('r').lineTo([[100,100],[150,110]]).stroke().restore().lineTo([[200,100],[200,600]]).stroke()

         // c.roundRect(100,50,100,100,50).stroke()//.fill()

         //c.line(10,10,50,500).stroke()

         c.line([
         [[100,100],[200,200],[140,900]]
         // ,  [[150,150],[250,250], [20,300]]
         ]).stroke()

         //c.line([100,100],[200,200],[150,150],[250,250] ).stroke()
         //c.line( [350,50],[25,25],  [450,10],[20,550]).stroke()
         }


         VOLUMEx=function(){

         outerDiv = $.div('y', 400, 200 ).A().drag()

         r=$.row().W(600)

         r.A( $.div().id('booksDiv').addClass('col-md-6').A() )

         r.A( $.div().id('displayDiv').addClass('col-dm-6').A(   $.img('guy')  )    )

         r.A().drag()

         Book=function(title){

         var book = $.div().A( $('<h4>').text( title||'book') ).H(60).C('b').addClass('book')

         book.display = $.img('me').hide().addClass('display')

         return book}
         addBook=function(title){

         var book=Book(title)

         $('#booksDiv').A( book )

         $('#displayDiv').A(   book.display      )

         $('.book').click(   function(){

         $(this).id()

         })

         return book
         }
         a=addBook('a')
         b=addBook('b')
         }


         //mongoError: kill mongod processess!!!!  ps ax | grep mongod
         (function ($) {
         "use strict";
         // jQuery('form').serializeJSON()
         $.fn.serializeJSON = function (options) {
         var serializedObject, formAsArray, keys, value, f, opts;
         f = $.serializeJSON;
         formAsArray = this.serializeArray(); // array of objects {name, value}
         opts = f.optsWithDefaults(options); // calculate values for options {parseNumbers, parseBoolens, parseNulls}
         serializedObject = {};
         $.each(formAsArray, function (i, input) {
         keys = f.splitInputNameIntoKeysArray(input.name); // "some[deep][key]" => ['some', 'deep', 'key']
         value = f.parseValue(input.value, opts); // string, number, boolean or null
         if (opts.parseWithFunction) value = opts.parseWithFunction(value); // allow for custom parsing
         f.deepSet(serializedObject, keys, value, opts);
         });
         return serializedObject;
         }

         // Use $.serializeJSON as namespace for the auxiliar functions
         // and to define defaults
         $.serializeJSON = {
         defaultOptions: {
         parseNumbers: false, // convert values like "1", "-2.33" to 1, -2.33
         parseBooleans: false, // convert "true", "false" to true, false
         parseNulls: false, // convert "null" to null
         parseAll: false, // all of the above
         parseWithFunction: null, // to use custom parser, use a function like: function (val) => parsed_val
         useIntKeysAsArrayIndex: false // name="foo[2]" value="v" => {foo: [null, null, "v"]}, instead of {foo: ["2": "v"]}
         },

         // Merge options with defaults to get {parseNumbers, parseBoolens, parseNulls, useIntKeysAsArrayIndex}
         optsWithDefaults: function(options) {
         var f, parseAll;
         if (options == null) options = {}; // arg default value = {}
         f = $.serializeJSON;
         parseAll = f.optWithDefaults('parseAll', options);
         return {
         parseNumbers: parseAll || f.optWithDefaults('parseNumbers', options),
         parseBooleans: parseAll || f.optWithDefaults('parseBooleans', options),
         parseNulls: parseAll || f.optWithDefaults('parseNulls', options),
         parseWithFunction: f.optWithDefaults('parseWithFunction', options),
         useIntKeysAsArrayIndex: f.optWithDefaults('useIntKeysAsArrayIndex', options)
         }
         },
         optWithDefaults: function(key, options) {
         return (options[key] !== false) && (options[key] || $.serializeJSON.defaultOptions[key]);
         },

         // Convert the string to a number, boolean or null, depending on the enable option and the string format.

         parseValue: function(str, opts) {
         var value, f;
         f = $.serializeJSON;
         if (opts.parseNumbers && f.isNumeric(str)) return Number(str); // number
         if (opts.parseBooleans && (str === "true" || str === "false")) return str === "true"; // boolean
         if (opts.parseNulls && str == "null") return null; // null
         return str; // otherwise, keep same string
         },
         isObject: function(obj) { return obj === Object(obj); }, // is this variable an object?

         isUndefined: function(obj) { return obj === void 0; }, // safe check for undefined values
         isValidArrayIndex: function(val) { return /^[0-9]+$/.test(String(val)); }, // 1,2,3,4 ... are valid array indexes

         isNumeric: function(obj) { return obj - parseFloat(obj) >= 0; }, // taken from jQuery.isNumeric implementation. Not using jQuery.isNumeric to support old jQuery and Zepto versions
         // Split the input name in programatically readable keys
         // "foo" => ['foo']
         // "[foo]" => ['foo']
         // "foo[inn][bar]" => ['foo', 'inn', 'bar']
         // "foo[inn][arr][0]" => ['foo', 'inn', 'arr', '0']
         // "arr[][val]" => ['arr', '', 'val']
         splitInputNameIntoKeysArray: function (name) {
         var keys, last, f;
         f = $.serializeJSON;
         if (f.isUndefined(name)) { throw new Error("ArgumentError: param 'name' expected to be a string, found undefined"); }
         keys = $.map(name.split('['), function (key) {
         last = key[key.length - 1];
         return last === ']' ? key.substring(0, key.length - 1) : key;
         });
         if (keys[0] === '') { keys.shift(); } // "[foo][inn]" should be same as "foo[inn]"
         return keys;
         },
         // Set a value in an object or array, using multiple keys to set in a nested object or array:
         //
         // deepSet(obj, ['foo'], v) // obj['foo'] = v
         // deepSet(obj, ['foo', 'inn'], v) // obj['foo']['inn'] = v // Create the inner obj['foo'] object, if needed
         // deepSet(obj, ['foo', 'inn', '123'], v) // obj['foo']['arr']['123'] = v //
         //
         // deepSet(obj, ['0'], v) // obj['0'] = v
         // deepSet(arr, ['0'], v, {useIntKeysAsArrayIndex: true}) // arr[0] = v
         // deepSet(arr, [''], v) // arr.push(v)
         // deepSet(obj, ['arr', ''], v) // obj['arr'].push(v)
         //
         // arr = [];
         // deepSet(arr, ['', v] // arr => [v]
         // deepSet(arr, ['', 'foo'], v) // arr => [v, {foo: v}]
         // deepSet(arr, ['', 'bar'], v) // arr => [v, {foo: v, bar: v}]
         // deepSet(arr, ['', 'bar'], v) // arr => [v, {foo: v, bar: v}, {bar: v}]
         //
         deepSet: function (o, keys, value, opts) {
         var key, nextKey, tail, lastIdx, lastVal, f;
         if (opts == null) opts = {};
         f = $.serializeJSON;
         if (f.isUndefined(o)) { throw new Error("ArgumentError: param 'o' expected to be an object or array, found undefined"); }
         if (!keys || keys.length === 0) { throw new Error("ArgumentError: param 'keys' expected to be an array with least one element"); }
         key = keys[0];
         // Only one key, then it's not a deepSet, just assign the value.
         if (keys.length === 1) {
         if (key === '') {
         o.push(value); // '' is used to push values into the array (assume o is an array)
         } else {
         o[key] = value; // other keys can be used as object keys or array indexes
         }
         // With more keys is a deepSet. Apply recursively.
         } else {
         nextKey = keys[1];
         // '' is used to push values into the array,
         // with nextKey, set the value into the same object, in object[nextKey].
         // Covers the case of ['', 'foo'] and ['', 'var'] to push the object {foo, var}, and the case of nested arrays.
         if (key === '') {
         lastIdx = o.length - 1; // asume o is array
         lastVal = o[lastIdx];
         if (f.isObject(lastVal) && (f.isUndefined(lastVal[nextKey]) || keys.length > 2)) { // if nextKey is not present in the last object element, or there are more keys to deep set
         key = lastIdx; // then set the new value in the same object element
         } else {
         key = lastIdx + 1; // otherwise, point to set the next index in the array
         }
         }
         // o[key] defaults to object or array, depending if nextKey is an array index (int or '') or an object key (string)
         if (f.isUndefined(o[key])) {
         if (nextKey === '') { // '' is used to push values into the array.
         o[key] = []
         } else if (opts.useIntKeysAsArrayIndex && f.isValidArrayIndex(nextKey)) { // if 1, 2, 3 ... then use an array, where nextKey is the index
         o[key] = []
         } else { // for anything else, use an object, where nextKey is going to be the attribute name
         o[key] = {}
         }
         }
         // Recursively set the inner object

         tail = keys.slice(1)

         f.deepSet(o[key], tail, value, opts)
         }
         }
         }}(window.jQuery || window.Zepto || window.$))
         $.tree=function(){z();var s=200

         d = $.div().K('container')(

         $.p().K('tree_controls')(
         $.a('expand all').K('expand_all'),
         $.a('collapse all').K('collapse_all')
         )).A()


         quas="<li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li>"

         ter="<li><a href='#' class='tree_trigger'> &nbsp;</a> Ter <ul>"+quas+"</ul></li>"

         sec="<li><a href='#' class='tree_trigger'> &nbsp;</a> Sec"+ter+"</ul></li>"


         pri="<ul class='tree'><li><a href='#' class='tree_trigger'> &nbsp;</a> Pri <ul class='tree_expanded'>"+sec+ "</ul></li></ul>"




         q =  $(pri)

         //d(q)


         if(_.size($('ul.tree')) ){

         $('p.tree_controls a.expand_all, p.tree_controls a.collapse_all').click(function(){

         if($(this).hasClass('expand_all')){$l('ex_all')
         $(this).parent('p').next('ul').find('a.tree_trigger').K('trigger_expanded')
         return false}

         else {$l('!ex_all')

         $(this).parent('p').next('ul').find('a.tree_trigger')

         .removeClass('trigger_expanded').end()

         .find('ul').removeClass('tree_expanded')}

         this.blur();return false

         })


         $(document).on('click',function(){
         if( $(this).hasClass('tree_trigger')){
         if($(this).next('ul').is(':hidden')){
         $(this).K('trigger_expanded').next('ul').K('tree_expanded')}
         else {$(this).removeClass('trigger_expanded').next('ul').removeClass('tree_expanded')}
         this.blur()
         return false
         }})


         $('ul.tree li:last-child').K('last')

         $('ul.tree_expanded').prev('a').K('trigger_expanded')

         }



         }
         $.notAnimated = notAnim=function(a){return a.filter(':not(:animated)')} //selector
         testNotAnimated=function(){z()

         var s=1000,
         m=function(n){return {marginLeft:n} },
         n=0

         d = $.div().id('test').A().A( y= $.can('x', 40).K('box'))

         d2 = $.div().id('debug').A()


         $('#test').click(function(){

         notAnim( $('.box') ).animate(  {marginLeft:-10},   s,

         function(){
         $('#debug').A( $.p( 'start..'   +  n++    ) )
         })

         .animate({marginLeft:10},s)
         .animate({marginLeft:-10},s)
         .animate({marginLeft:10},s)
         .animate({marginLeft:-10},s)
         .animate({marginLeft:-10},s)
         .animate({marginLeft:0},s,
         function(){$('#debug').A( $.p('fin') )})})
         }
         $.coolSelector = function(){z()

         // rather than worry about synchronization between each panel
         //we will take last li in ul.k(panels) and position it to top right
         //of ul - this way,  when he sum width of all the panels occasionally
         //adds to greater than 100 percent of the ul as they animate..
         //the last li never breaks to the next line

         var s=200


         theDiv = $.div().K('container').A(

         $.div().K('panels').A(
         $.span('1'), $.span('2'), $.span('3'), $.span('4'), $.span('5')),

         $.div().K('panels').A(
         $.span('A'), $.span('B'), $.span('C'), $.span('D'), $.span('E'))

         ).A()

         $('span').css({width:'100px',fontSize:'40px'})

         if( $('div.panels').length ){


         $('div.panels span:last-child').addClass('last')

         $('div.panels span').hover(

         function(){$(this).stop().animate({width:'110px',fontSize:'50px'},s)
         .siblings('span').stop().animate({width:'90px',fontSize:'30px'})},

         function(){
         $(this).stop().animate({width:'90px',fontSize:'30px'})
         })
         }

         }
         $.hoverBox = function(){z()

         d = $.div('orange', 500,500).id('test').A().drag()

         y = $.can('pink', 400).K('box').hide()

         d.A(y)

         $('#test').hover(function(){
         $('.box').stop().fadeTo(200,1)
         },
         function(){
         $('.box').stop().fadeTo(200,0)})

         }
         FLASH=function(){z()


         timeline = $.divA().WH('auto').drag()

         timeline.A(
         $.canvas('blue', 500, 500),
         $.br()
         )

         _.times(24, function(x){

         timeline.A(

         $.div('red', 100, 100).css({display:'inline-block'}).H((x*10) +100)

         )

         })





         }
         jQueryUI=function(){z()

         ('<link rel="stylesheet" href="/jquery-ui.min.css">').A()
         ('<script src="/jquery-ui.min.js">').A()


         input = $.textInput('date').A().datepicker()

         d = $.div('b',400,400).A().A(input).pad(20).A()

         }
         jQueryAnimation=function(){z()


         setBackgroundImage = q.bi = function(url){//set background image

         var toUrl =function(url){
         return 'url("'+ src(url) +'")'}
         q.backgroundImage(toUrl(url))

         return q}


         bp=q.positionBackgroundImage=function(x,y){
         var g=G(arguments),x=g[0],y=g[1]
         x=N(x)?x:0
         y=N(y)?y:0
         q.css({backgroundPos:x+'px '+y+'px'})
         return q}

         fr=q.setFrame= function(n,w){
         if(O(n)){q.bp(n.n,n.w)}
         else{q.bp(n*w)}
         return q}

         anf= q.animateFrames=function(n,w){
         var c=0
         n=n||10
         w=w||20
         setInterval(function(){
         q.setFrame(c,w)
         c= (c+1) % n},1000)}




         a= $.divA()
         .backgroundImage('chicks')
         .anf()

         anim=function(o){
         o=o||{}

         return {
         u:o.u||'chicks',
         n:o.n||1,
         w:o.w||64,
         r:o.r||60,
         c:o.c||0,
         l:o.l||false}}

         an=function(q,a){
         if(q.han){
         clearInterval(q.han)}

         if(a.u){
         q.bi(a.u)}

         if(a.n>1){

         q.han=setInterval(function(){
         a.c++
         if(!a.l && a.c>a.n ){
         clearInterval(q.han);
         q.han=false}
         else { a.c %= a.n }
         q.setFrame(a) },

         a.r)}}
         };
         //this is actually the 'lettering' plugin
         (function($){
         function injector(t, splitter, klass, after) {
         var text = t.text()
         , a = text.split(splitter)
         , inject = '';
         if (a.length) {
         $(a).each(function(i, item) {
         inject += '<span class="'+klass+(i+1)+'" aria-hidden="true">'+item+'</span>'+after;
         });
         t.attr('aria-label',text)
         .empty()
         .append(inject)

         }
         }


         var methods = {
         init : function() {

         return this.each(function() {
         injector($(this), '', 'char', '');
         });

         },

         words : function() {

         return this.each(function() {
         injector($(this), ' ', 'word', ' ');
         });

         },

         lines : function() {

         return this.each(function() {
         var r = "eefec303079ad17405c889e092e105b0";
         // Because it's hard to split a <br/> tag consistently across browsers,
         // (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
         // (of the word "split").  If you're trying to use this plugin on that
         // md5 hash string, it will fail because you're being ridiculous.
         injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
         });

         }
         };

         $.fn.lettering = function( method ) {
         // Method calling logic
         if ( method && methods[method] ) {
         return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
         } else if ( method === 'letters' || ! method ) {
         return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
         }
         $.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
         return this;
         };

         })(jQuery)
         LETTERING=function(){z()

         span = $.span( 'hello' ).A()

         span.lettering() // wrap <span class="charx"/ > around each character within header

         $spans = span.find( 'span' )

         $('.dropped span').css({transition: 'all 0.3s ease-in'})


         }
         FALLING=function(){z()
         //this goes in css

         $header2 = $.span('hello').A()

         $header2.lettering() // wrap <span class="charx"/ > around each character within header

         $spans = $header2.find('span')

         delay = 0

         $header2.on('click', function(){


         $spans.each(function(){
         $(this).css({transitionDelay: delay+'s'}) // apply sequential trans delay to each character

         delay += 0.1
         })


         $header2.K('dropped') // Add "dropped" class to header to apply transition

         setTimeout(function(){ // reset header code

         $spans.each(

         function(){

         $(this).css({
         transitionDelay: '0ms'
         })

         })



         // set transition delay to 0 so when 'dropped' class is removed,
         // letter appears instantly

         $header2.removeClass('dropped') // remove class at the "end" to reset header.

         delay = 0

         }, 1800) // 1800 is just rough estimate of time transition will finish, not the best way

         })

         }
         //
         MARGINAUTO=function(){z()

         outer = $.div( 'b', 500, 500).A()
         outer.A(  inner = $.div( 'r', 100, 100) )
         inner.mar('auto')
         outer.mar('auto')
         }
         */
//dH=function(a){qq(a).h($(document).height())}
    }
function rulesX(){
        $.CSS = HTML5.CSS = ss=function ss(q,b,c){

            if(U(b)){return $l(_p(ss,q))}

            var s=function(a,b,c){

                if(U(c)){return $l(a.css(oO('s',b)))
                }

                a.css(oO('s',b), $o(b,c,'R'))

                $l(s(a,b) )

                return q
            }


            q=Q(q)
            return  A(b)? _r(b,function(m,k){
                return _s(m,k,ss(q,k))},{})
                :O(b)? $p('s',q,b,s)
                :s(q,b,c)

        }
        $.attrs = HTML5.attrs = aa=function aa(q,b,c){q=Q(q)
            var  att=function(q,b,c){q=Q(q)
                if(U(c)){return q.attr(oO('a',b))}
                return q.attr(oO('a',b),$o(b,c,'R'))}
            return  U(b)? _p(aa,q)
                :A(b)? _r(b,function(m,k){
                return _s(m,k,aa(q,k))},{})
                :O(b)? $p('a',q,b,att)
                :att(q,b,c)}
        $.props = HTML5.props = pp=function pp(q,b,c){
            q=Q(q)

            var rop=function(q,b,c){
                q=Q(q)

                if(U(c)){return q.prop( oO('o', b) )}
                return q.prop(oO('o',b),
                    $o(b,c,'R'))}

            return U(b)? _p(HTML5.props,q)
                :A(b)? _r(b,function(m,k){
                return _s(m,k,HTML5.props(q,k))},{})
                :O(b)? $p('o',q,b,rop)
                :rop(q,b,c)

            //ex:  val=function(type, key){return HTML5.props(type,'v',key)}
            //ex:  typ=function(type, key){return HTML5.props(type,'t',key)}

        }  //changed p -> o (oO)
        $.class = HTML5.class = kl=function(q){q=qq(q)
            return function kl(k,j){

                var g=G(arguments)
                if(U(k)){return q.at('k')}
                if(g.p){return q.q.hasClass( oO('k',k) )}
                if(k==='-'){q.q.removeClass( oO('k',j) )}
                else if(g.n){q.at('k', oO('k',k) )  }
                else {_e(_S(k,' '),function(k){
                    q.q.addClass (oO('k',k))})}
                $l(kl())
                return kl}}
        $.font = HTML5.font =$f=FO=function(a,b){

            if(O(a)){return ss(oB(b),{fz:a||50})}
            a=N(a)?_S(a):U(a)?'':a

            var px=function(a){return a+'px'},
                F='fantasy',W='normal',S='normal',Z=px(100)

            _e(a.split(' '),function(p){
                if(M(p[0])){p=p.split('/')
                    Z=px(p[0])+((p[1])?'/'+px(p[1]):'')}
                F=Oo('ff',p)||F
                W=Oo('fw',p)||W
                S=Oo('fs',p)||S})

            return [W,S,Z,F].join(' ')}
        $.outline = HTML5.outline = OL=function OL(o,o2,o3){if(Oo('c',o)){o={c:o,w:o2,s:o3}}
            if(S(o)){o=o.split(' ')
                return $l(_j([$r('c',o[0]),_p(oO('ow',o[1]||5)),
                    oO('os',o[2]||'-') ]))}
            if(N(o)){o={w:o}};
            o=ob(o)
            return $l(_j([$r('c',o.c),N(o.w)?_p(o.w):$r('ow',o.w),
                $r('os',o.s)]))}
        $.qs = HTML5.qs = qs=function f(a,b){

            var o = {},

                s = function( o, a, b ){

                    o [ oO ( 's' , a ) ]  = oO( a , b , 'R' )

                    return o }

            if( S( a ) ){ s( o , a , b ) }

            else{

                _.each( a , function( v , k ) { s ( o , k , v ) } ) }

            return o

        }
        $.CSSRule = HTML5.CSSRule = CSSRule = setRule = uu=function f( a, b ){
            var sy, cl ,rl


            style = sy=function(style){   return "<style type='text/css'>" + style + "</style>"   }

            theRule  =rl = function f(a,b){

                var style=''

                if(O(a)){   _.each(   qs(a), function(v,k){  style += f(k, v)   })

                    return style}

                return  a + ':' +  b  + '; '  }

            createRule = function(a,b){

                var rule = function(clas, css){ return '.' +  clas  +  '{' + css|| '' + '}'  }

                return hd( style( rule(a, b) ))

            }



            if( O(a) ){ _.each( a, function(v, k){ f(k,v) }) }

            createRule( a, theRule(b) )

        }

    }

function boot() {
    $.fn.xs = function (num) {

        return this.K('col-xs-' + num)

    }
    $.fn.sm = function (num) {

        return this.K('col-sm-' + num)

    }
    $.fn.md = function (num) {

        return this.K('col-md-' + num)

    }
    $.fn.lg = function (num) {

        return this.K('col-lg-' + num)

    }
}
function trans(){
    $.fn.trans=function(transform){
        $l('transform')
        return this.css({transform: transform})}
    testCSSRotate=function(){z()

        //works

        $.h1('css transform: rotate').A()

        d = $.div('x', null, 200).A()
        //   d.css({transform: 'translateY(300px) rotateZ(120deg)'})

        d.trans('translateY(300px) rotateZ(120deg)')

    }
    testCSSScal=function(){z()


        $.h1('css transform: scale').A()

        i= $.img('me').A()

        // d = $.div('r', null, 200,200).A()


        $.img('me').A().transform( 'scaleX(2)' )
        $.img('me').A().transform( 'scaleY(2)' )

        $.img('me').A().transform( 'scaleZ(2)' ) //does nothing?!


        $.img('me').A().transform( 'rotate3d(100,100,100,100)' )

    }

}







function dateTime(){


//dep
    $.dateTime = $.date = dateTime = dt = function (a) {
        var d = new Date(a)
        d.y = d.getFullYear
        d.d = d.getDate
        d.D = d.getDay
        d.M = d.getMinutes
        d.m = d.getMonth
        d.date = function () {
            return d.d() + '/' + d.m() + '/' + d.y()
        }
        d.time = function () {
            return d.h() + ':' + d.M()
        }
        d.dt = function () {
            return d.date() + ' ' + d.time()
        }
        d.ms = d.getMilliseconds
        d.h = d.getUTCHours
        d.s = d.getSeconds
        //d.tm= d.getTime
        //d.gto= d.getTimezoneOffset
        d.udt = d.getUTCDate
        d.gud = d.getUTCDay
        d.ufy = d.getUTCFullYear
        d.gh = d.getHours
        d.gms = d.getUTCMilliseconds
        d.um = d.getUTCMinutes
        d.um = d.getUTCMonth
        d.us = d.getUTCSeconds
        return d
    }
    $.dateAndTime = dtt = function (a) {
        var datetime = new Date(a)
        return datetime.date() + ' ' + datetime.time()
    }

}
test=function(){
    testRule=function(){
        z()
        $.div('b',400,400).A().A( $.span('hifds') )


        $.CSSRule('div', 'color:Orange')


    }
    testStyle=function(){//WORKS

        $.div('b',400,400).A().A( $.span('hifds')).id('div')

        var style = document.createElement('style');

        style.type = 'text/css';

        var rule = '.cssClass { color: #F00; }'

        style.innerHTML = rule

        $( 'head' ).append(style)

//////

        $( '#div' ).K( 'cssClass' )



    }

}
apps=function(){

    DEBOUNCE=function(){W()

        s=0
        u=0
        d=0
        l=0
        r=0


        b= w.S(600, 300, 'b', 100)

        $.space(_.debounce(function(){$l('space ' + s++)}, 1000))

        $.kD('u', _.debounce(function(){$l('up '+u++)}, 1000, true))



    }


}

