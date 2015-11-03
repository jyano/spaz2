$load([

 
'core','ajax',  'evenz','atts','statt','sty', 'adv', 'anim','animApps'

])


function evenz(){
mous()
	function mous(){
		$.md=$.mousedown=function(fn){
			$('body').on('mousedown',fn);
			return this
		}
		$.mu=$.mouseup=function(fn){
			$('body').on('mouseup',fn);
			return this
		}
		$.mm=$.mousemove=function(fn){
			$('body').on('mousemove',fn);
			return this
		}
		$.oMD=function(fn){
			$.md(function(e){
				fn(e.clientX,e.clientY,e)
			})
			return $
		}
		$.oMU=function(fn){
			$.mu(function(e){
				fn(e.clientX,e.clientY,e)
			});
			return $
		}
		$.oMM=function(fn){
			$.mm(function(e){
				fn(e.clientX,e.clientY,e)
			});
			return $
		}
		$.fn.m=function(o){
			var e=this
			if(o.mD){
				e.mD(o.mD)
			}
			if(o.mU){
				e.mD(o.mU)
			}
			if(o.pM){
				e.pM(o.pM)
			}
			return e
		}
		$.fn.$=$.fn.click
		$.fn.hv=$.fn.hover
		$.fn.mD=function(l){
			var c=this
			c.mousedown(function(e){
				l(e.clientX,e.clientY)
			})
			return c
		}
		$.fn.mD=function(l){
			var c=this
			c.mousedown(function(e){
				l(e.clientX,e.clientY)
			})
			return c
		}
		$.fn.pM=function(l){
			var c=this
			c.pressmove(function(e){
				l(e.clientX,e.clientY)
			})
			return c
		}
		$.fn.pm=$.fn.pressmove=function(func){
			var mouse_pressed
			this.mousedown(function(){
				mouse_pressed=true
			})
			this.mouseup(function(){
				mouse_pressed=false
			})
			this.mousemove(function(e){
				if(mouse_pressed){
					func(e)
				}
			})
			return this
		}
		$.fn.mp=$.fn.mousePoint=function(e,scale){
			scale=N(scale)?scale:1
			return V(e.pageX/scale,e.pageY/scale)
		}
		$.fn.mU=function(l){
			var c=this
			c.mouseup(function(e){
				l(e.clientX,e.clientY)
			})
			return c
		}
		$.fn.pM=function(l){
			var c=this
			c.pressmove(function(e){
				l(e.clientX,e.clientY)
			})
			return c
		}
		$.fn.m=function(o){
			var e=this
			if(o.mD){
				e.mD(o.mD)
			}
			if(o.mU){
				e.mD(o.mU)
			}
			if(o.pM){
				e.pM(o.pM)
			}
			return e
		}
		$.tap=function(func){
			this('body').on('keydown mousedown',func);
			return this
		}
		$.$=function(f){
			return $(document).on('click',_v(f))
			/*
			 $.$=function(){
			 var b=$('html')
			 b.click.apply(b, arguments)
			 return $
			 }*/
		}
		$.$$=function(f){
			return $(document).on('dblclick',_v(f))
			//$.$$=function(a,b,c){$('body').$$(a,b,c); return this}
		}
		$.click=m$=function(f){
			return $(document).on('click',_v(f))
		}
		$.dblclick=m$$=function(f){
			return $(document).on('dblclick',_v(f))
		}
	}
	$.scroll=function(a){
		return $(window).scroll(a||function(){
			$('body').C('*')
		})
	}
	$.fn.xPrp=function(){
		this.on('mousedown',function(e){
			e.stopPropagation()
		})
		return this
	}
	$.wh=function(a,b){
		return D(b)?a.which==b:a.which
	}
	KEYOB=KEYOBJ={
		up:38,u:38,
		down:40,d:40,
		left:37,l:37,
		right:39,r:39,
		space:32,s:32,
		enter:13,e:13
	}
	$.kD=function self(key,fn){
		if(O(key)){
			_.e(key,function(fn,k){
				if(s$(k).isUpper()){
					$.kU(k.toLowerCase(),fn)
				}
				else{
					$.kD(k,fn)
				}
			})
			return
		}
		if(KEYOB[key]){
			key=KEYOB[key]
		}
		$('body').on('keydown',function(e){
			if(e.which==key){
				fn(e,$.K)
			}
		})
	}
	$.kU=function(key,funk){
		if(KEYOBJ[key]){
			key=KEYOBJ[key]
		}
		$('body').on('keyup',function(e){
			if(e.which==key){
				funk(e,$.K)
			}
		})
	}
	$.K={}
	$.space=function(fn){
		return $.kD('space',fn)
	}
	$.fn.dg=$.fn.drag=function(){
		this.A()
		this.each(function(){
			$(this).css('top',$(this).position().top)
			$(this).css('left',$(this).position().left)
		})
		this.P('a')
		this.on('mousedown',function(e){
			var el=$(this)
			var offset=el.offset(),
				deltaX=e.pageX-offset.left,
				deltaY=e.pageY-offset.top
			$('html').on('mousemove',function(e){
				var x=e.pageX-deltaX,
					y=e.pageY-deltaY
				el.left(x)
				el.top(y)
			}).on('mouseup',function(){
				$(this).off()
			})
		})
		//touchDrg(element)
		return this
	}
	$.fn.hv=$.fn.hover
	$.fn.fc=$.fn.focus
}
function core(){

	$.fn.e=$.fn.ea=$.fn.each
	$.fn.f=$.fn.fi=$.fn.find
	$q=function(e){
		if(!O(e)){return false}
		if(e.target){e=e.target}
		return $(e)
	}
	$.fn.hd=$.fn.hide
	$.fn.sh=$.fn.show
	$.fn.gg=$.fn.toggle
	$.fn.oh = function(){
		return this[0].outerHTML
	}
	$.fn.h=$.fn.ht=$.fn.html
	$.fn.t=$.fn.tx=$.fn.text
	
	
	$.fn.g = function (ix) {
	if(U(ix)){return this[0]}
		return this.eq(ix)
	}
	
	
	rels();kill();place()
	
	function rels(){
		$.fn.__=$.fn.pa=$.fn.pr=$.fn.parent
		$.fn.ch=function(){
			return this.children()
		}
		$.fn._=$.fn.closest
		$.fn.sib=function(){
			var g=G(arguments);
			return this.sib.apply(this.g)
		}
		$.fn.N=$.fn.next
	};
	function kill(){
		$.fn.r=$.fn.rm=$.fn.xx=function(){
			var e=this
			e.remove()
			return e
		}
		$.fn.fRm=function(a){
			return this.fi(a).rm()
		}
		$.fn.E=function(html){
			this.empty()
			if(S(html)){
				this.h(html)
			}
			else{
				G(arguments).e(function(q){
					this.A(q)
				})
			}
			return this
		}
	};
	function place(){
		$.fn.rp+$.fn.replace
		function pend(){
			$.fn.A=function(stuff){
				if(U(stuff)){
					$('body').append(this);
					return this
				}
				this.append.apply(this,arguments)
				return this
			}
			$.fn.a2=function(a){
				a.A(this);
				return this
			}
			$.fn.pp=function(a){
				this.pp(a);
				return this
			}
			$.fn.p2=$.fn.pp2=function(a){
				this.prependTo(a);
				return this
			}
		};
		pend()
		$.fn.iB=$.fn.insertBefore
		$.fn.iA=$.fn.insertAfter
		$.fn.wr=$.fn.wrap
	}
}
function statt(){
	$w=$.wi=function(){
		return $(window)
	}
	$.rz=function(fn){
		var g=G(arguments),wi=$.wi
		wi.rz(fn);
		if(g.p){
			fn()
		}
		return wi
	}
	$.bd=function(){
		var bd=$('body')
		return bd
	}
	$.A=function(){
		var g=G(arguments),
			bd=$('body')
		$.fn.A.apply(bd,g)
		return $
	}
	$.ct = $.cts = $.contains
	$.iI=function(i){
		if(O(i)){
			return S($(i)[0].src)
		}
	}
	
	
	$.src=function f(e){
		
		if(e.image){e=e.image}
		
		if($.tCan(e)){e=$.tCan(e)}
		
		if(e.src){e=e.src}
		
		if(e.toDataURL){
			e=_.tDU(e)
		}
	
			return s$(e).contains('data:')?e
			:S(e)?_.src(e)
			:0
	}
	
	
};


function ajax(){

	$.g=$.G=function(){
		var g=G(arguments),o;
		if(U(g[1])){
			return _.p($.G,g[0])
		}
		o=F(g[1])?{p:g[0],fn:g[1]}:
		{p:g[0],d:g[1],fn:g[2]};
		$.get(S.eL(o.p),o.d||{},
			function(d){
				o.fn=o.fn||function(){
					return 'boo ya!'
				};
				o.fn(d)
			})
	}
	$.eG=function(){
		var g=G(arguments),o;
		if(U(g[1])){
			return _.p($.eG,g[0])
		}
		o=F(g[1])?{p:g[0],fn:g[1]}:
		{p:g[0],d:g[1],fn:g[2]};
		$.G(o.p,o.d||{},
			function(dd){
				_.e(dd,function(d){
					o.fn(d)
				})
			});
		return $
	}
	$.txG=function(url){
		$.get('/'+url,function(aa){
			a=aa
		})
	}
	
	$.j=$.gJ=$.Gj=function(){
		var g=G(arguments),o;
		if(U(g[1])){
			return _.p($.Gj,g[0])
		}
		o=F(g[1])?{p:g[0],fn:g[1]}:{p:g[0],d:g[1],fn:g[2]};
		o.fn=o.fn||function(){
			return 'boo ya!'
		};
		$.getJSON(
			S.eL(o.p),
			o.d||{},
			function(d){
				o.fn(d)
			});
		return $
	}
	
	$.eJ=$.eGj=function(){
		var g=G(arguments),o;
		if(U(g[1])){
			return _.p($.eJ,g[0])
		}
		o=F(g[1])?
		{p:g[0],fn:g[1]}:{p:g[0],d:g[1],fn:g[2]};
		$.Gj(o.p,o.d||{},function(dd){
			_.e(dd,function(d){
				o.fn(d)
			})
		});
		return $
	}
	$.po=$.P=function(){
		var g=G(arguments),o;
		o=F(g[1])?{p:g[0],fn:g[1]}:{p:g[0],d:g[1],fn:g[2]};
		o.d=U(o.d)?{}:O(o.d)?o.d:{data:o.d};
		o.fn=o.fn||function(){
			return 'boo ya!'
		};
		$.post(S.eL(o.p),o.d,function(d){
			o.fn(o.d,o)
		});
		return $
	}
	$.eP=$.ePo=function(){
		var g=G(arguments);
		if(U(g[1])){
			return _.p($.eP,g[0])
		}
		o=F(g[1])?{p:g[0],fn:g[1]}:{p:g[0],d:g[1],fn:g[2]};
		$.P(o.u,o.d||{},function(dd){
			_.e(dd,function(d){
				o.fn(d)
			})
		});
		return $
	}
	$.aj=function(ob){
		return $.ajax(ob)
	}
	$.XML=function(){
		alert('$.XML!');
		return new XMLHttpRequest()
	}
};
function atts(){
	$.fn.at=$.fn.attr
	
	$.fn.i = $.fn.sr=$.fn.src=function(a){
		if(U(a)){
			return this.attr('src')
		}
		this.attr('src', $.src(a))
		return this
	}
	  

	$.fn.n=function(name){
		if(U(name)){return this.attr('name')}
		this.attr('name',name);
		return this
	}
	$.fn.ml=$.fn.mlt=function(m){
		return this.at('multiple',true)
	}
	$.fn.ph=$.fn.placeholder=function(forWhat){
		return this.attr('placeholder',forWhat)
	}
	$.fn.ck=$.fn.chk=function(){
		this.at('checked',true)
	}
	$.fn.ty=$.fn.type=function(type){
		if(U(type)){
			return this.attr('type')
		}
		this.attr('type',type);
		return this
	}
	$.fn.id=function(id){
		if(U(id)){
			return this.attr('id')
		}
		;
		this.attr('id',id);
		return this
	}
	
	$.fn.hr=$.fn.hf=$.fn.href=function(href){
		if(U(href)){return this.attr('href')}
		this.attr('href',href);
		return this
	}
	
	
	
	$.fn.fr=$.fn.for=function(forWhat){
		return this.attr('for',forWhat)
	}
	$.fn.ro=$.fn.role=function(role){
		if(U(role)){
			return this.attr('role')
		}
		this.attr('role',role)
		return this
	}
	$.fn.v=$.fn.V=function(newVal){
		var g=G(arguments)
		if(U(newVal)){
			var v=this.val()
			if(g.n){this.val('')}
			return v
		}
		this.val(newVal);
		return this
	}
	$.fn.tt=$.fn.ti=function(a){
		this.at('title',a)
		return this
	}
	$.fn.d=$.fn.da=$.fn.data
}
function adv(){
layout()
	function layout(){
		$.x=function(c,t){
			var g=G(arguments),bd=$.bd()
			bd.empty()
			if(g.O_){
				$CSS(g.f)
				if(g.s){
					$.h1(g.s);
					$.hr().A()
				}
				bd.C(g.t||$r())
			}
			else{
				bd.C(c||$r())
				if(t){
					bd.A($.h1(t))
				}
			}
			if(g.p){ bd.A($.hr()) }
			return $
		}
		$.h=function(){
			var g=G(arguments),o
			bd=$.bd()
			bd.empty()
			bd.C($r())
			o=g.S_?{t:g.f,s:g.s}:{s:g.f}
			if(o.s){
				$CSS(o.s)
			}
			if(o.t){
				$.h1(o.t);
				$.hr().A()
			}
			return $
		}
		$.s=function(css,c,tx){
			$CSS(css)
			$.x(c,tx)
			return $
		}
		_z=function z(a,b,c){
			return U(b)?_.size(a)
				:N(b)?_z(a)==b
				:_z(a)==_z(b)
		}
		
		z=function(fn){$('body').empty()}

       
	}
	$.rulers=function(){
		$.d('b',100,100).al(.3).dg()
		$.d('r',100,300).al(.3).dg()
	}
	$.dg=$.dragFrame=function(d){
		var oD
		oD=$.d('y').pad(20).drag()
		d=d||$.d('r').mar(20)
		d.xPrp().a2(oD)
		d.oD=oD
		oD.XY(40,40)
		return oD
	}
}

function alpha(){
	//$.fn.sz=function(sz){return this.at('size',sz)}
	$.fn.fCt=function(str){return this.fi(":contains("+str+")")}
	$.fn.getPosition=$.fn.getTotalOffset=function(){
		alert('$.fn.getPosition')
		var e=this,x=0,y=0
		while($.tEl(e)&&e.tagName){
			y+=e.offsetTop
			x+=e.offsetLeft
			if(isBodyElement(e)){
				e=0
			}
			e=e.offsetParent||e
		}
		return {x:x,y:y}
	}//just gets the TOTAL offset of ANY element
	$.fn.osP=function(){return this.offsetParent}
	$t=function(a,b){
		if(b2d.test){
			var g=G(arguments),a=g[0],b=g[1],str
			if(D(b)){
				str='||'
				_.e(g,function(s){
					str+=' '+s.toString()+' |'
				})
				str+='|'
			}
			else{
				str=a.toString()
			}
			alert(str)
		}
		return a
	}
	function ipsum(){
		$.ips=function(len){
			len=len||1;
			var str='';
			_.t(len,function(){
				str=str+'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. '
			});
			return str
		}
		$.ipsP=function(len){
			return $.p().A($.ipsum(len))
		}
		ips1='dolor sit amet, consectetuer adipi nibh euismod tincidunt ut laoreet dolore magna aliquam'+
		'erat volutpat. Ut wisi enim ad mini corper suscipit lobortis nisl ut a commodo consequat.'
		ips2='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam'+
		'erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo'+
		'consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat'+
		'nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore'+
		'te feugait nulla facilisi.'
		ips3='Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper'+
		'suscipit lobortis nisl ut aliquip ex ea commodo consequat.'+
		'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,'+
		'vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan'+
		'et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue'+
		'duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,'+
		'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt'+
		'ut laoreet dolore magna aliquam erat volutpat.'
		$.fn.ipsum=function(){
			var that=this
			_.each(arguments,function(num){
				that.A($.ipsum(num))
			})
			return this
		}
		$.fn.ipsumP=function(){
			var that=this
			_.each(arguments,function(num){
				that.A($.ipsumP(num))
			})
			return this
		}
		$.fn.ips=$.fn.ipsum=function(){
			var that=this
			_.each(arguments,function(num){
				that.A($.ipsum(num))
			})
			return this
		}
		$.fn.ipsumP=function(){
			var el=this
			_.e(arguments,function(num){
				el.A($.ipsumP(num))
			})
			return el
		}
	}
	$.toColor=function(n1,n2,n3,n4){
		return n2?"rgba("+n1+","+n2+","+""+n3+","+(n4||1)+")":$r('c',n1)
	}
	$.fn.Z=function(w,h){
		return this.W(w).H(h||w)
	}
	$.fn.oH= $.fn.outerHeight
	
}
function scripts(){
	$.scr=function(scr,fn){return $.getScript(scr,fn)}
	$.getMultiScripts=function(arr,path){
		var _arr=$.map(arr,function(scr){return $.getScript((path||"")+scr)})
		//_arr.push($.Deferred(function( deferred ){$( deferred.resolve )}))
		return $.when.apply($,_arr)
	}
	SCRIPTS=_.map([
		"socket.io/socket.io","string",'bb','bbmn','ko','mel','gq','objects','defaultMug','spriteSheets',
		'core','jqueryplugins','html','boot','ui','can','sys','images','event','socket','ranky','routeTests','nav','api','j3','display','animate','imagine','work','tween','universe','create','easel','displayObject','shape','text','mobile','animation','sprites','bitmap','toolkit','stage','filt','draw','solve','playgame','users','share','chat','messages','knock','bbtemps','backbone1','people','mar','backbone','angu'
		
		// ,'melon','gquery','ph','phaser0','phaser','ninja', 'ph2','bx','b2dbasics','b2dutils', 'invaders','three', 'iso', 'boxWorld','boxWorldMore','walls', 'makeworld', 'b2dSensors','playerWorld', 'boxRev','weld','prism','coll','gamey','pong','easelbox','joints','wheel',
		// 'emitter','p2fiddle','ragdoll','p2constraints','unigame',
		//  'tilemapping','launcher','fullgames','p2physics', 'controls','orbs',
		//  'shooter','boxBody','talkjs','mario','squares','edges','boxgame','boxDebug','boxFixt', 'boxShapes','player','pinball', 'examples'
	],function(js){return "/"+js+".js"})
	// _.each(SCRIPTS, function(scr){$.scr(scr)})
	/*
	 dfr = $.getMultiScripts(SCRIPTS)
	 dfr.done(function(){alert('done')})
	 .always(function(){
	 alert('always')
	 $.scr('app')
	 })
	 .fail(function(){alert('fail')})
	 */
	GSCR=function(){
		$.scr=function(scr,fn){return $.getScript(scr,fn)}
		$.getMultiScripts=function(arr,path){
			var _arr=$.map(arr,function(scr){return $.getScript((path||"")+scr)})
			//_arr.push($.Deferred(function( deferred ){$( deferred.resolve )}))
			return $.when.apply($,_arr)
		}
		$.scr("https://code.jquery.com/color/jquery.color.js",function(a,b,c){
			console.log(a+b+c)
			d=c
			$l('got script')
			$.$(function(){$.j({C:"z"},1).in(.5).j({C:'r'},1).in(.5).j({C:"y"},1)})
		})
		dfr=$.Deferred(function(dfrd){
			d=dfrd
			// $(dfrd.resolve)
		})
		testx=100
		$.when(
			$.scr("/boxSprite.js"),
			$.scr("/easel.js")
		).done(function(){$l(testx)})
	}
}
 

 
LJQFN=function(){
	z()
	css={}
	css.redDivs={
		div:{
			C:'v',c:'p',
			M:20,P:40,h:420
		},
		span:{
			C:'x'
		}
	}
	css.big={div:{fZ:100}}
	$CSS(css.redDivs)
	$CSS(css.big)
	d=$.d().A('hello').A($.sp('why not span'))
	$.d().A('nice day')
	$.d().A('see ya')
	$('div').e(
		function(){
			console.log('this:',this)
		}
	)
	p=$('span').p()//.C('z')
	//r=	$('body').f('div').C("b")//.r()
}
$.iQ = function (o) {
	return O(o) && F(o.ajaxStart)
}
$.iO$ = function (o) {
	return O$(o) && !$.iQ(o)
}

$al = function (er) {
	alert(er)
	return false
}