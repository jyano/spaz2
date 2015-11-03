function flxApps(){
	BASIS=function(){
		$.x('o','basis')
		// http://jsfiddle.net/jakub_g/s5jAB/
		// Both items have flex-basis: 200px defined.
		// In 'equilibrium situation' they'll get those widths exactly.
		$CSS(
			{
				d:{B:$CSS.bor('v')},_ct:{ds:'$',P:10,C:'y'},_ch:{P:10,M:10,c:'w'},
				_ch1:{$:'8 1 600px',C:'u'},// If there's more space, the first one grows 5x faster than the second.
				_ch2:{ds:'$','flex-wrap':true,$:'1 2 400px',C:'g'} // If there's less space, the second one shrinks 3x faster than the first.
			}
		)
		$.d(
			[
				$.d([$.h3('Child One'),$.p('Lorem ipsum'),$.p('dolor sit amet'),$.p('This is a bit longer line')]).K('ch ch1'),
				d=$.d(
					[
						'Two'
					]
				).K('ch ch2')
			]
		).K('ct')
		_.t(
			20,function(){
				d.A(
					$.d($r(),40,40).K('ch1')
				)
			}
		)
		$CSS()
	}
	FB=function(){
		$.x('o','flex')
		$CSS(
			{
				_ct:{
					ds:'$',
					//  define  flow dir
					// and
					// if we allow the items to wrap
					//  Remember this is the same as:
					$d:'row',
					$w:'wrap',
					//      'flex-flow' : 'row wrap',
					// Then we define how is distributed the remaining space
					flJC:'space-around'
				}
			}
		)
	}
	GRAIL=function(){
		$.bd().E();
		$CSS(
			{
				bd:{f:'24px Helvetica',C:'a',c:'b'},
				'header, footer':{
					ds:'b',
					M:4,
					P:5,nh:100,
					B:$CSS.bor('r'),
					borR:'7pt',
					C:'b'
				},
				$main:{
					nh:800,M:0,P:0,
					ds:'$',flD:'row'
				},
				'$main > article':{
					M:4,P:5,B:$CSS.bor('p'),borR:'7pt',C:'g',
					_:2,$:'3 1 50%'
				},
				'$main > nav':{
					M:4,P:5,B:$CSS.bor(),borR:'7pt',C:'o',
					_:'-1',$:'1 6 30%'
				},
				'$main > aside':{
					M:4,P:5,B:$CSS.bor('g'),borR:'7pt',C:'x',
					_:'3',$:'1 6 20%'
				},
				"@media all and (max-width:640px)":$CSS.rules(
					{
						"#main, #page":{flD:"column"},
						"#main>article, #main>nav, #main>aside":{_:'0'},
						"#main>nav, #main>aside,  header,  footer":{nh:50,mh:50}
					}
				)
			}
		)
		$.hdr('header').A()
		$.d(
			[
				$.ac('article'),
				$.nv().A('nav'),
				$.as('aside')
			]
		).id('main')
		$.ftr().A('footer').A()
		$CSS();
		old=function(){
			GRAIL1=function(){
				$.bd().E()
				$CSS(
					{
						body:{font:'24px Helvetica',C:'a',c:'b'},
						$main:{nh:800,mar:0,pad:0,ds:'flex','flex-flow':'row'},
						'$main > article':{mar:4,pad:5,bor:'1px solid pink',borR:'7pt',C:'g',flex:'3 1 60%',order:2},
						'$main > nav':{mar:4,pad:5,bor:'1px solid black',borR:'7pt',C:'o',flex:'1 6 20%',order:'1'},
						'$main > aside':{mar:4,pad:5,bor:'1px solid green',borR:'7pt',C:'x',flex:'1 6 20%',order:'3'},
						'header, footer':{ds:'b',mar:4,pad:5,nh:100,bor:'1px solid red',borR:'7pt',C:'b'},
						/* '@media all and (max-width: 640px)':  {
	
						 '#main, #page': '{flex-direction: column;}',
						 '#main > article, #main > nav, #main > aside':  '{order: 0;}',
						 '#main > nav, #main > aside, header, footer': '{min-height:50px; max-height:50px;}'
						 }
	
						 */
						
						
						
						
						
						
						/// change below to one string!!!
					}
				)
				$.hd(
					$CSS.sty(
						"@media all and (max-width:640px)"
						+"{ "
						+"#main, #page {flex-direction: column;}"
						+"#main>article, #main>nav, #main>aside {order: 0;}"
						+"#main>nav, #main>aside, header, footer {min-height: 50px; max-height: 50px;}"
						+"}"
					)
				)
				//reduc
				//http://dev.w3.org/csswg/css-conditional-3/
				$('<header>header</header> ').A()
				$.d([$('<article>article</article>   <nav>nav</nav>    <aside>aside</aside>')]).id('main')
				$('<footer>footer</footer>').A()
				$CSS()
			}
			GRAIL11=function(){
				$.bd().E()
				$CSS(
					{
						body:{font:'24px Helvetica',C:'a',c:'b'},
						$main:{nh:800,mar:0,pad:0,ds:'flex','flex-flow':'row'},
						'$main > article':{mar:4,pad:5,bor:'1px solid pink',borR:'7pt',C:'g',flex:'3 1 60%',order:2},
						'$main > nav':{mar:4,pad:5,bor:'1px solid black',borR:'7pt',C:'o',flex:'1 6 20%',order:'1'},
						'$main > aside':{mar:4,pad:5,bor:'1px solid green',borR:'7pt',C:'x',flex:'1 6 20%',order:'3'},
						'header, footer':{ds:'b',mar:4,pad:5,nh:100,bor:'1px solid red',borR:'7pt',C:'b'},
						/* '@media all and (max-width: 640px)':  {
	
						 '#main, #page': '{flex-direction: column;}',
						 '#main > article, #main > nav, #main > aside':  '{order: 0;}',
						 '#main > nav, #main > aside, header, footer': '{min-height:50px; max-height:50px;}'
						 }
	
						 */
						
						
						
						
						
						
						/// change below to one string!!!
					}
				)
				$.hd(
					$CSS.sty(
						"@media all and (max-width:640px)"+
						$CSS.rules(
							$CSS.rule("#main, #page","{flex-direction: column;}"),
							$CSS.rule("#main>article, #main>nav, #main>aside","{order: 0;}"),
							$CSS.rule("#main>nav, #main>aside, header, footer","{min-height: 50px; max-height: 50px;}")
						)
					)
				)
				//reduc
				//http://dev.w3.org/csswg/css-conditional-3/
				$('<header>header</header> ').A()
				$.d([$('<article>article</article>   <nav>nav</nav>    <aside>aside</aside>')]).id('main')
				$('<footer>footer</footer>').A()
				$CSS()
			}
			GRAIL111=function(){
				$.bd().E()
				$CSS(
					{
						body:{font:'24px Helvetica',C:'a',c:'b'},
						$main:{nh:800,mar:0,pad:0,ds:'flex','flex-flow':'row'},
						'$main > article':{mar:4,pad:5,bor:'1px solid pink',borR:'7pt',C:'g',flex:'3 1 60%',order:2},
						'$main > nav':{mar:4,pad:5,bor:'1px solid black',borR:'7pt',C:'o',flex:'1 6 20%',order:'1'},
						'$main > aside':{mar:4,pad:5,bor:'1px solid green',borR:'7pt',C:'x',flex:'1 6 20%',order:'3'},
						'header, footer':{ds:'b',mar:4,pad:5,nh:100,bor:'1px solid red',borR:'7pt',C:'b'},
						"@media all and (max-width:640px)":$CSS.rules(
							$CSS.rule("#main, #page","{flex-direction: column;}"),
							$CSS.rule("#main>article, #main>nav, #main>aside","{order: 0;}"),
							$CSS.rule("#main>nav, #main>aside, header, footer","{min-height: 50px; max-height: 50px;}")
						)
					}
				)
				//reduc
				//http://dev.w3.org/csswg/css-conditional-3/
				$('<header>header</header> ').A()
				$.d([$('<article>article</article>   <nav>nav</nav>    <aside>aside</aside>')]).id('main')
				$('<footer>footer</footer>').A()
				$CSS()
			}
			GRAIL1111=function(){
				$.bd().E()
				$CSS(
					{
						body:{font:'24px Helvetica',C:'a',c:'b'},
						$main:{nh:800,mar:0,pad:0,ds:'flex','flex-flow':'row'},
						'$main > article':{mar:4,pad:5,bor:'1px solid pink',borR:'7pt',C:'g',flex:'3 1 60%',order:2},
						'$main > nav':{mar:4,pad:5,bor:'1px solid black',borR:'7pt',C:'o',flex:'1 6 20%',order:'1'},
						'$main > aside':{mar:4,pad:5,bor:'1px solid green',borR:'7pt',C:'x',flex:'1 6 20%',order:'3'},
						'header, footer':{ds:'b',mar:4,pad:5,nh:100,bor:'1px solid red',borR:'7pt',C:'b'},
						"@media all and (max-width:640px)":$CSS.rules(
							{
								"#main, #page":"{flex-direction: column;}",
								"#main>article, #main>nav, #main>aside":"{order: 0;}",
								"#main>nav, #main>aside, header, footer":"{min-height: 50px; max-height: 50px;}"
							}
						)
					}
				)
				//reduc
				//http://dev.w3.org/csswg/css-conditional-3/
				$('<header>header</header> ').A()
				$.d([$('<article>article</article>   <nav>nav</nav>    <aside>aside</aside>')]).id('main')
				$('<footer>footer</footer>').A()
				$CSS()
			}
		} //http://dev.w3.org/csswg/css-conditional-3/
	}
	GRAIL=function(){
		$.bd().E();
		$CSS(
			{
				bd:{f:'24px Helvetica',C:'a',c:'b'},
				'header, footer':{
					ds:'b',
					M:4,
					P:5,nh:100,
					B:['r'],
					borR:'7pt',
					C:'b'
				},
				$main:{
					nh:800,M:0,P:0,
					ds:'$',flD:'row'
				},
				'$main > article':{
					M:4,P:5,B:['p'],rd:'7pt',C:'g',
					_:2,$:'3 1 50%'
				},
				'$main > nav':{
					M:4,P:5,B:[],rd:'7pt',C:'o',_:'-1',
					$:'1 6 30%'//, mx: {hi:[], fds:['fds','fsd','fsd'] }
				},
				'$main > aside':{M:4,P:5,B:['g'],rd:'7pt',C:'x',_:'3',$:'1 6 20%'},
				"@media all and (max-width:640px)":$CSS.rules(
					{
						"#main, #page":{flD:"column"},
						"#main>article, #main>nav, #main>aside":{_:'0'},
						"#main>nav, #main>aside,  header,  footer":{nh:50,mh:50}
					}
				)
			}
		)
		$.hdr('header').A()
		$.d(
			[
				$.ac('article'),
				$.nv().A('nav'),
				$.as('aside')
			]
		).id('main')
		$.ftr().A('footer').A()
	}
	GRAIL=function(){
		$.bd().E();
		$CSS(
			{
				bd:{f:'24px Helvetica',C:'a',c:'b'},
				'header, footer':{
					ds:'b',
					M:4,
					P:5,nh:100,
					B:['r'],
					rd:10,
					C:'b'
				},
				$main:{
					nh:800,M:0,P:0,
					ds:'$',flD:'row'
				},
				'$main > article':{
					M:4,P:5,B:['p'],
					rd:100,
					C:'g',
					_:2,$:'3 1 50%'
				},
				'$main > nav':{
					M:4,P:5,B:[],rd:10,
					C:'o',
					_:'-1',$:'1 6 30%'//, mx: {hi:[], fds:['fds','fsd','fsd'] }
				},
				'$main > aside':{M:4,P:5,B:['g'],rd:'7pt',C:'x',_:'3',$:'1 6 20%'},
				"@media all and (max-width:640px)":$CSS.rules(
					{
						"#main, #page":{flD:"column"},
						"#main>article, #main>nav, #main>aside":{_:'0'},
						"#main>nav, #main>aside,  header,  footer":{nh:50,mh:50}
					}
				)
			}
		)
		$.hdr('header').A()
		$.d(
			[
				$.ac('article'),
				$.nv().A('nav'),
				$.as('aside')
			]
		).id('main')
		$.ftr().A('footer').A()
	}
	GME=function(){
		$.x('y','gme');
		$CSS(
			{
				'html, body':{w:'100%',h:'100%',M:0,P:0},
				'body.box':{ds:$,flD:'column'},
				'body > *':{P:'.5em'},
				header:{C:'b'},
				article:{C:'r',$:1},
				footer:{C:'g'},
				'header.cnt':{'-moz-column-count':3},
				'header:not(.cnt)':{'-moz-column-width':100}
			}
		)
		$.hdr().A('Click',$.br(),'to change',$.br(),'header {column-…}').A()
		$.ac().A('Click',$.br(),'to',$.br(),'change',$.br(),'body {display: …}').A()
		$.ftr().A()
		$("header").$(
			function(){
				$(this).toggleClass("cnt");
				logClass();
			}
		);
		$("article").$(
			function(){
				$.bd().toggleClass("box");
				logClass()
			}
		)
		logClass()
		function logClass(){
			var logTxt="Header: "
			if($("header").hasClass("cnt")){
				logTxt+="column-count"
			}else{
				logTxt+="column-width"
			}
			logTxt+="; Body: ";
			if($("body").hasClass("box")){
				logTxt+="flex-box"
			}
			else{
				logTxt+="block"
			}
			$("footer").text(logTxt)
		}
	}
	function later(){
		//http://jsfiddle.net/flyingsheep/gmeqm/
		//http://jsfiddle.net/3zLRJ/4/    //http://stackoverflow.com/questions/11451638/drag-re-sizable-2-column-layout
		//reduc
		function jqUIFlex(){
			FLEX=function(){
				$.x('g','flex1')
				$CSS(
					{
						_flCt:{
							ds:'flex',flD:'row',flW:'wrap',
							flJC:'space-between'
						},
						_flCt1:{
							ds:'flex',flD:'row',flW:'wrap',
							flJC:'space-around'
						}
					}
				)
				$.d('b',400,500).K('flCt').A(
					$.d('y',40,150),$.d('z',200,50),$.d('r',40,150),
					$.d('y',40,150),$.d('z',200,50),$.d('r',40,150)
				).dgb()
				$.d('B',400,500).K('flCt').A(
					$.d('y',40,150),$.d('z',200,50),$.d('r',140,150),
					$.d('y',40,150),$.d('z',300,50),$.d('r',40,50)
				).dgb()
				$.d('w',400,500).K('flCt1').A(
					$.d('y',40,150),$.d('z',1000,50),$.d('r',140,150),
					$.d('y',40,150),$.d('z',10,50),$.d('r',40,50)
				).dgb()
				$.d('p',400,500).K('flCt1').A(
					$.d('y',40,150),$.d('z',300,50),$.d('r',140,150),
					$.d('y',40,150),$.d('z',200,50),$.d('r',40,50)
				).dgb()
			}
		}
	}
}
function notSureMore(){
	
	//http://jsfiddle.net/flyingsheep/gmeqm/
	//http://jsfiddle.net/3zLRJ/4/    //http://stackoverflow.com/questions/11451638/drag-re-sizable-2-column-layout
	o={
		'flex-direction':'row',
		'flex-wrap':'wrap',
		'justify-content':'space-around',
		'align-items':'stretch','align-content':'stretch'
	}
	i=['flex-grow','flex-shrink','flex-basis']
	// Flex-grow is just a declaration of the items' size, but unlike pixels or ems,
	// it refers to the item's size relative to the other flex items in the container.
	// Go ahead and click the gear on any of the flex items and adjust their flex-grow value to see what I mean.
	// "flex-shrink"   specs how much the flex item will shrink
	// relative to other flex items in the flex container
	// when the space on a row has been filled.
	//Finally we come to "flex-basis", which is a very important one.
	// It's a lot like "min-width", but for flex items only.
	// Basically it says, "make this item fill the space it has and shrink as much as it needs to...
	// buuuut the smallest it can be is "X pixels or ems".
	o={
		$A:'align-self',
		$B:'basis',
		$C:'align-content',
		$D:'direction',
		$:'flex',$F:'flex',
		$G:'grow',
		$I:'align-items',
		$J:'justify-content',
		$O:'order',
		$S:'shrink',
		$W:'wrap'
	}
	/*
	
	
	
	Web/CSS/align-content The CSS align-content property aligns a flex container's lines within the flex container when there ...
	Web/CSS/align-items The CSS align-items property aligns flex items of the current flex line the same way as ...
	Web/CSS/align-self The align-self CSS property aligns flex items of the current flex line overriding the align-items ...
		Web/CSS/CSS_Flexible_Box_Layout CSS Flexible is a module of CSS that defines a multi-column layout, allowing to express how content ...
		Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes The CSS3 Flexible Box, or flexbox, is a layout mode providing for the arrangement of elements on a ...
		Web/CSS/CSS_Flexible_Box_Layout/Using_flexbox_to_lay_out_web_applications Using flexbox can help you design compelling layouts in web applications that scale better from ...
		Web/CSS/flex The flex CSS property is a shorthand property specifying the ability of a flex item to alter its ...
		Web/CSS/flex-basis The flex-basis CSS property specifies the flex basis which is the initial main size of a flex item. ...
		Web/CSS/flex-direction The flex-direction CSS property specifies how flex items are placed in the flex container defining ...
		Web/CSS/flex-flow The flex-flow CSS property is a shorthand property for flex-direction and flex-wrap individual ...
		Web/CSS/flex-grow The flex-grow CSS property specifies the flex grow factor of a flex item. It specifies what amount ...
		Web/CSS/flex-shrink The flex-shrink CSS property specifies the flex shrink factor of a flex item.
		Web/CSS/flex-wrap The CSS flex-wrap property specifies whether flex items are forced into a single line or can be ...
		Web/CSS/justify-content The CSS justify-content property defines how the browser distributes space between and around flex ...
		Web/CSS/order The CSS order property specifies the order used to lay out flex items in their flex container. ...
	
	
		*/
 
		GRAIL=function(){
			$.bd().E()
			o={
				bd:{f:'24px Helvetica',C:'a',c:'b'},
				'header, footer':{C:'x',d:'b',M:4,P:5,h_:100,B:['bor','r'],bRd:'7pt'},
				$main:{h_:800,M:0,P:0,d:'$',$D:'r'},
				'$main > article':{M:4,P:5,B:['bor','p'],bRd:'7pt',C:'g',_:2,$:'3 1 50%'},
				'$main > nav':{C:'o',M:4,P:5,B:['bor','g'],bRd:'7pt',$:'1 6 30%',$O:-1},
				'$main > aside':{M:4,P:5,B:['bor','g'],bRd:'7pt',C:'x',$:'1 6 20%',$O:3},
				"@media all and (max-width:640px)":$subRules(
					{
						"#main, #page":{$D:'c'},
						"#main>article, #main>nav, #main>aside":{$O:0},
						"#main>nav, #main>aside,  header,  footer":{h_:50,_h:50}
					}
				)
			}
			$CSS(o)
			$('<header> heeeeader!!! </header>').A() //$.hdr('header').A()
			$.d(
				[
					$.ac('article'),
					$.nv().A('nav'),
					$.as('aside')
				]
			).id('main')
			$.ftr().A('footer').A()
		}
		FLEX=function(){
			$.x('g','flex')
			$CSS(
				{
					_sB:{d:'$',$D:'r',$W:'w',$J:'sB'},
					_sA:{d:'$',$D:'r',$W:'w',$J:'sA'}
				}
			)
			d=$.d(
				[
					$.d('b',400,500).K('sB').A(
						$.d('y',40,150),
						$.d('z',200,50),
						$.d('r',40,150),
						$.d('y',40,150),
						$.d('z',200,50),
						$.d('r',40,150)
					),
					$.d('B',400,500).K('sB').A(
						$.d('y',40,150),$.d('z',200,50),$.d('r',140,150),
						$.d('y',40,150),$.d('z',300,50),$.d('r',40,50)
					),
					$.i('me'),
					$.d('w',400,500).K('sA').A(
						$.d('y',40,150),$.d('z',1000,50),$.d('r',140,150),
						$.d('y',40,150),$.d('z',10,50),$.d('r',40,50)
					),
					$.d('p',400,500).K('sA').A(
						$.d('y',40,150),$.d('z',300,50),$.d('r',140,150),
						$.d('y',40,150),$.d('z',200,50),$.d('r',40,50)
					)
				]
			)
			d.css(
				{
					'display':'flex',
					'justify-content':'space-between'
				}
			)
		}
		BASIS=function(){
			$.x('o','basis')
			// http://jsfiddle.net/jakub_g/s5jAB/
			// Both items have flex-basis: 200px defined.
			// In 'equilibrium situation' they'll get those widths exactly.
			$CSS(
				{
					_ch:{c:'w',P:10,M:10},
					_ct:{
						C:'y',P:10,
						d:'$'
					},
					_ch1:{
						C:"u",
						$:'8 1 600px'
					},// If there's more space, the first one grows 5x faster than the second.
					_ch2:{
						C:'g',
						d:'$',$:'1 2 400px',$W:'w'
					}, // If there's less space, the second one shrinks 3x faster than the first.
					d:{B:['bor','b']}
				}
			)
			$.d(
				[
					$.d(
						[
							$.h3('Child One'),
							$.p('Lorem ipsum'),$.p('dolor sit amet'),
							$.p(
								'This is a bit longer lineThis is a bit longer lineThis is a bit longer'+
								' lineThis is a bit longer lineThis is a bit longer lineThis is a bit longer'+
								' lineThis is a bit longer lineThis is a bit longer lineThis is a bit longer lineThis '+
								'is a bit longer lineThis is a bit longer lineThis is a bit longer line'
							)
						]
					).K('ch ch1'),
					d=$.d(
						[
							'Two'
						]
					).K('ch ch2')
				]
			).K('ct')
			_.t(
				20,function(){
					d.A($.d($r(),40,40).K('ch1'))
				}
			)
			$CSS()
			/*
			
					 div { border:8px solid Blue; }
					 .ct { display:flex; padding:10px; background-color:Yellow; }
					 .ch { padding:10px; margin:10px; color:White; }
					 .ch1 { flex:8 1 600px; background-color:Purple; }
					 .ch2 { display:flex; flex-wrap:true; flex:1 2 400px; background-color:green; }
			
			
			
					 */
		}
		FLEXCT=function(){
			z()
			$CSS(
				{
					'.flex-container':{
						display:'flex','flex-direction':'row',
						$W:'w','justify-content':'space-around',
						'align-content':'flex-start','align-items':'stretch'
					},
					'.flex-items-default':{
						width:'300px',height:'250px',
						'flex-grow':0,'flex-shrink':0,'flex-basis':0
					},
					'.flex-item-1':{width:'100px',height:'100px','flex-grow':1,'flex-shrink':0,'flex-basis':'98%'},
					'.flex-item-2':{
						width:'100px',height:'100px',
						'flex-grow':1,'flex-shrink':0,'flex-basis':'200px'
					},
					'.flex-item-3':{
						width:'100px',height:'100px',
						'flex-grow':1,'flex-shrink':0,
						'flex-basis':'200px'
					},
					'.flex-item-4':{
						width:'100px',height:'100px',
						'flex-grow':1,'flex-shrink':0,
						'flex-basis':'200px'
					},
					'.flex-item-5':{
						width:'100px',height:'100px',
						'flex-grow':1,'flex-shrink':0,'flex-basis':'98%'
					}
				}
			)
			d=$.dK('flex-container').A(
				Item(1),Item(2),Item(3),Item(4),Item(5)
			)
			function Item(n){
				return $.dK('.flex-item-'+(n||1)).A(
					$.i('me')
				).css({margin:20}).C('b')
			}
		}
		function notSure(){
			GME=function(){
				$.x('y','gme');
				$CSS(
					{
						'html, body':{w:'100%',h:'100%',M:0,P:0},
						'body.box':{d:$,flD:'column'},
						'body > *':{P:'.5em'},
						header:{C:'b'},
						article:{C:'r',$:1},
						footer:{C:'g'},
						'header.cnt':{'-moz-column-count':3},
						'header:not(.cnt)':{'-moz-column-width':100}
					}
				)
				$.hdr().A(
					'Click',$.br(),'to change',$.br(),
					'header {column-…}'
				).A()
				$.ac().A(
					'Click',
					$.br(),
					'to',$.br(),'change',$.br(),'body {display: …}'
				).A()
				$.ftr().A()
				$("header").$(
					function(){
						$(this).toggleClass("cnt");
						logClass();
					}
				);
				$("article").$(
					function(){
						$.bd().toggleClass("box");
						logClass()
					}
				)
				logClass()
				function logClass(){
					var logTxt="Header: "
					if($("header").hasClass("cnt")){
						logTxt+="column-count"
					}else{
						logTxt+="column-width"
					}
					logTxt+="; Body: ";
					if($("body").hasClass("box")){
						logTxt+="flex-box"
					}
					else{
						logTxt+="block"
					}
					$("footer").text(logTxt)
				}
			}
			FB=function(){
				$.x('o','flex')
				$CSS(
					{
						_ct:{
							d:'$',
							//  define  flow dir
							// and
							// if we allow the items to wrap
							//  Remember this is the same as:
							$D:'r',
							$W:'w',
							//      'flex-flow' : 'row wrap',
							// Then we define how is distributed the remaining space
							flJC:'space-around'
						}
					}
				)
			}
		}
		
		HOLY=function(){
			z()
			//en.wikipedia.org/wiki/Holy_Grail_(web_design)) is a classic CSS problem with various solutions presented over time. If you're unfamiliar with the history of the Holy Grail layout, this [A List Apart article](http://alistapart.com/article/holygrail) offers a pretty good summary and links to a few of the more well-known solutions.
			//At its core, the Holy Grail Layout is a page with a header,
			//    footer, and three columns.
			// The center column contains the main content
			// , and the left and right columns contain supplemental content like ads or navigation.
			//
			//    Most CSS solutions to this problem aim to meet a few goals:
			//    - They should have a fluid center with fixed-width sidebars.
			//- The center column (main content) should appear first in the HTML source.
			//- All columns should be the same height, regardless of which column is actually the tallest.
			//- They should require minimal markup.
			//- The footer should "stick" to the bottom of the page when content is sparse.
			$.bd().K('HolyGrail').A(
				$('<header>'),
				$.d().K('HolyGrail-body').A(
					$('<main>').K('HolyGrail-content'),
					$('<nav>').K('HolyGrail-nav'),
					$('<aside>').K('HolyGrail-ads')
				),
				$('<footer>')
			//  Getting the center content row to stretch and the footer to stick to the bottom is solved
			// with the same technique shown in the [Sticky Footer](../sticky-footer/) example.
			// The only difference is the center row of the Holy Grail layout (`.HolyGrail-body`)
			// needs to be `display:flex` in order to properly arrange its children.
			$CSS(
				{
					_HolyGrail:{display:'flex','min-height':'100vh','flex-direction':'column'},
					'_HolyGrail-body':{display:'flex',flex:1},
					//Styling three equal-height columns with a fluid center and fixed-width sidebars is just as easy:
					'.HolyGrail-content':{flex:1},
					'.HolyGrail-nav, .HolyGrail-ads':{flex:'0 0 12em'},/* 12em is the width of the columns */
					'.HolyGrail-nav':{order:-1}  /* put the nav on the left */
					
					//<aside class="Notice"><strong>Note:</strong>&nbsp; the CSS required to make this demo work cross-browser is slightly different from the CSS shown in the examples above, which assume a fully spec-compliant browser. See the <a href="https://github.com/philipwalton/solved-by-flexbox/blob/master/assets/css/components/holy-grail.css">comments in the source</a> for more details.</aside>
					//  example:  responsive, mobile-first.
					// mobile-first and mobile-friendly version of the Holy Grail layout is easy:
					// make the center section `flex-direction:
					// column` by default and then `flex-direction:row` for larger screens.
					// You can also resize this browser window to see it in action.
					'.HolyGrail,.HolyGrail-body':{display:'flex','flex-direction':'column'},
					'.HolyGrail-nav':{order:-1},
					'@media (min-width: 768px)':{
						'.HolyGrail-body':{'flex-direction':row,flex:1},
						'.HolyGrail-content':{flex:1},
						'.HolyGrail-nav, .HolyGrail-ads':{flex:'0 0 12em'}
					}
				}
			)
			//github.com/philipwalton/solved-by-flexbox/blob/master/assets/css/components/holy-grail.css) for the `HolyGrail` component used in this demo on Github.
		}
	 
}

