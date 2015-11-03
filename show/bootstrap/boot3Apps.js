TABTX = function () {
	$.boot(
			$.navTabs(
					$.tab('Home', 'home').K('active'),
					$.tab('Profile', 'profile'),
					$.tab('Messages', 'messages'),
					$.tab('Settings', 'settings')
			).C('r'),
			$.tabContent(
					$.tabPane('home', '+').A(
							$.h1('home'),
							$.ipsum(6)
					),
					$.tabPane('profile').A(
							$.h1('profile'),
							$.ipsum(6)
					),
					$.tabPane('messages').A(
							$.h1('messages'),
							$.ipsum(6)
					),
					$.tabPane('settings').A(
							$.h1('settings'),
							$.ipsum(6)
					)
			).C('b')
	)
}
TAB1 = function () { // 'active-s' are mismatched on purpose :)
	$.boot(
			$.navTabs(
					$.tab('Home1', 'home1'),
					$.tab('Home', 'home').K('active'),
					$.tab('Profile', 'profile'),
					$.tab('Messages', 'messages')),
			$.tabContent(
					$.tabPane("home1", '+').C('b').A('home1'),
					$.tabPane('home').C('r').A('home'),
					$.tabPane("profile").C('y').A('profile'),
					$.tabPane("messages").C("g").A('messages'))
	)
	$('.nav-tabs a').click(function (e) {
		//    e.preventDefault();  $(this).tab('show')
	})
}
TAB2 = function () {
	z()
	var ul = $.ul().K('nav nav-tabs').A(
			$.liA('aaaa'),
			$.liA('bbbb').K('active'),
			$.liA('cccc'),
			$.liA('dddd')
	).C('b')
	var display = $.div('y', 300, 400).mar(20)
	var div = $.div('r').pad(30).A(ul, display).A().drag()
}
TAB3 = function () {
	z()
	$.navTabs().A(
			$.tab('Home'),
			$.tab('Profile').K('active'),
			$.tab('Messages')).A()
	$(function () {
		$('a').click(function () {
			$(this).tab('show')
		})
	})
}
TABAJAX = function () {
	$.boot(
			$.navTabs(
					$.tab('hello', function () {
						alert('hello')
					}),
					$.tab('goodbye', function () {
						$('#stuff').load('/')
					})
			),
			$.d().id('stuff')
	)
}
TABAJAX1 = function () {
	$.boot(
			$.navTabs(
					$.tab('hello', function () {
						alert('hello')
					}),
					$.tab('goodbye', function () {
						$('#stuff').load('/')
					})
			),
			$.d().id('stuff')
	)
}
TAB4 = function () {
	z()
	var tabBar = $.ul().K("nav nav-tabs")
	tabBar.A(
			$.tab('first', function () {
				alert('1')
			}),
			$.tab('second', function () {
				alert('2')
			}),
			$.tab('third', function () {
				alert('3')
			})
	).A()
}//navtabs=function(){return $.ul().K('nav nav-tabs')} //unnecessary
TAB5 = function () {
	z()
	var tabBar = $.tabs(
			['first', function () {
				$l('1')
				panel.E($.img('me'))
			}],
			['second', function () {
				$l('2')
			}],
			['third', function () {
				$l('3')
			}]
	).A()
}
TXTABACTION = function () {
	testTabs()
	$(function () {
		$('a[data-toggle="tab"]')
				.on('show.bs.tab', function (e) {
					ee = e
					$l('tabbed!')
					e.target // newly activated tab
					e.relatedTarget // previous active tab
				})
	})
}
TXTABACTION2 = function () {
	// for each tab, use 'on(show)', to automatically fetch/load?
}
TXPILLS = function () {
	$(function () {
		$.boot().A(
				$.well($.h1('welcome to pills')),
				n = $.navPills().A(
						$.pill('home'),
						$.pill('profile'),
						$.pill('messages', function () {
							$('body').C('r')
						})
				),
				$.dK("pill-content").A(
						$.pillPane('home').A('hoooome'),
						$.pillPane('profile').A('prooofile'),
						$.pillPane('messages').A('messsaaaages')
				)
		)
		//   $('a').each(function(){ $(this).attr('data-toggle', 'pill') })
	})
}
PILLS = function () {
	z()
	pills = $.ul().K("nav nav-pills").A(
			$.li().K('active').A($.a('home').toggle('tab')),
			$.li().A($.a('profile').K('profile')),
			$.li().A($.a('messages')))
	div = $.d('b', '+').WH('auto').pad(40)
	ch = $.d('y', 300).pad(40).mar(40)
	div.A(pills, ch)
	$('a').$(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})
	// $('a:first').tab('show')
	$('a.profile').on('shown.bs.tab', function (e) {
		ch.E()
		ch.A($.d().T('asfdasfdfasd'))
	})
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		e.target // activated tab
		e.relatedTarget // previous tab
	})
}
TN = function () {
	z()
	wrap = $.wrap
	$.boot(
			wrap('me'),
			wrap('guy'),
			wrap('chicks'),
			wrap('me'),
			wrap('guy'),
			wrap('chicks'),
			wrap('me'),
			wrap('guy'), wrap('chicks'),
			wrap('me'), wrap('guy'), wrap('chicks'),
			wrap('me'), wrap('guy'), wrap('chicks')
	)
}
EXTHUMB = function () {
	z()
	var wrap = function (img) {
		return $.dK("col-xs-4 col-sm-3 col-md-2 col-lg-1").A(
				$.a('').K('thumbnail').A(img)
		)
	}
	$.container().A(
			$.row(
					$.thumbnail().K("col-sm-6 col-md-2").A(
							$.img('me'),
							$.caption('Thumbnail label')
					),
					$.thumbnail().K("col-sm-6 col-md-2").A(
							$.img('guy'),
							$.caption('Thumbnail label')
					),
					$.thumbnail().K("col-sm-6 col-md-2").A(
							$.img('me'),
							$.caption('Thumbnail label')
					)
			)
	).A()
}
THUMNAILS = function () {
	z()
	// <div class="row">
	// <div class="col-xs-6 col-md-3">
	// <a id="" href="#" class="thumbnail">
	// <img src="/me.png">
	// </a>
	// </div>
	// </div>
	return $.container().A(
			$.row(
					$.dK("col-xs-6 col-md-3").A(
							$.a('').K("thumbnail").A($.img('me'))
					))
	).A()
}
TNCUSTCONTENT = function () {
	z()
	cont = $.container().C('r')
	thumbnail = $.thumbnail().C('g').A(
			$.p('first thing in green thumbnail'),
			$.img('me'),
			$.dK("caption").A(
					$.h3('Thumbnail label'),
					$.p('...'),
					$.p().A(
							$.bt('Button').K("btn btn-primary"),
							$.bt('Button').K("btn btn-default")))
	)
	cont.A($.row(
			$.dK("col-sm-6 col-md-4").A(
					$.p('before thumbnail'),
					thumbnail
			)
	))
	return cont.A()
}
JUMB = function () {
	$.boot(
			$.jumbo(
					'My first Bootstrap website!',
					$.p('This page will grow as we add more and more components from Bootstrap...')),
			$.paragraphs(
					'This is another paragraph',
					'This is a paragraph',
					'This is another paragraph')
	)
}
VOLUME = function () {
	r = $.R().W(600);
	outerDiv = $.d('y', 400, 200).A().dg().A(r);
	r.dg().A(
			$.d().id('booksDiv').K('col-md-6'),
			$.d().id('displayDiv').K('col-dm-6').A($.i('guy')));
	Book = function (title) {
		var b;
		b = $.d('b', 60, 60).K('book');
		b.A($.h4(title || 'book'));
		b.display = $.i('me').K('display').hd();
		return b
	};
	addBook = function (title) {
		var b;
		b = Book(title);
		$('#booksDiv').A(b);
		$('#displayDiv').A(b.display);
		$('.book').$(function () {
			$(this).id()
		});
		return b
	};
	a = addBook('a');
	b = addBook('b')
}
IMGRESPONSE = function () {
	$.boot(
			$.sm(3).A(
					$.well(
							$.imgResponsive('chicks')
					)
			)
	)
}
IMGRESPONSE1 = function () {
	$.boot(
			$.md(2).A(
					$.imgResponsive('me'),
					$.imgResponsive('chicks'),
					$.imgResponsive('me')
			)
	).C('r')
}
EXIMGS = function () {
	$.boot(
			$.imgCircle('chicks').C('y'),
			$.imgRounded('guy').C('y'),
			$.imgThumbnail('sun').C('y')
	)
}
function mixMedia() {
	exampleMixedMobileAndDesktop = function () {
		z()
		//The Bootstrap grid system has four classes: xs (phones), sm (tablets),
		// md (desktops), and lg (larger desktops).
		// These classes can be combinated to create more dynamic and flexible layouts.
		//  Tip: Each class scales up, so if you wish to set the same widths
		// for xs and sm, you only need to specify xs.
		cont = $.container().A()
		cont.A(
				$.row(
						$.div('r').K("col-xs-12 col-md-8").A('col-xs-12 .col-md-8'),
						$.div('b').K("col-xs-6 col-md-4").A('col-xs-6 col-md-4')
				),
				$.row(
						$.div('a').K("col-xs-6 col-md-4").A('.col-xs-6 .col-md-4'),
						$.div('b').K("col-xs-6 col-md-4").A('.col-xs-6 .col-md-4'),
						$.div('c').K("col-xs-6 col-md-4").A('.col-xs-6 .col-md-4')
				),
				$.row(
						$.div('g').K("col-xs-6").A('.col-xs-6'),
						$.div('o').K("col-xs-6").A('.col-xs-6')
				)
		)
	}
	exampleMixedMobileTabletAndDesktop = function () {
		z()
		// Note	Tip: Remember that grid columns should add up to twelve for a row. More than that, columns will stack no matter the viewport.
		cont = $.container().A()
		cont.A(
				$.row(
						$.div('r').K("col-xs-12 col-sm-6 col-lg-8").A($.span('.col-xs-12 .col-sm-6 .col-lg-8')),
						$.div('b').K("col-xs-6 col-lg-4").A($.span('.col-xs-6 .col-lg-4'))
				),
				$.row(
						$.div('n').K("col-xs-6 col-sm-4").A($.span('.col-xs-6 .col-sm-4')),
						$.div('g').K("col-xs-6 col-sm-4").A($.span('.col-xs-6 .col-sm-4')),
						$.div('o').K("col-xs-6 col-sm-4").A($.span('.col-xs-6 .col-sm-4'))
				)
		)
	}
	/*
	 The following table summarizes how the Bootstrap grid system works across multiple devices:
	 Extra small devices
	 Phones (<768px)	Small devices
	 Tablets (>=768px)	Medium devices
	 Desktops (>=992px)	Large devices
	 Desktops (>=1200px)
	 Grid behaviour	Horizontal at all times	Collapsed to start, horizontal above breakpoints	Collapsed to start, horizontal above breakpoints	Collapsed to start, horizontal above breakpoints
	 Container width	None (auto)	750px	970px	1170px
	 Class prefix	.col-xs-	.col-sm-	.col-md-	.col-lg-
	 Number of columns	12	12	12	12
	 Column width	Auto	~62px	~81px	~97px
	 Gutter width	30px (15px on each side of a column)	30px (15px on each side of a column)	30px (15px on each side of a column)	30px (15px on each side of a column)
	 Nestable	Yes	Yes	Yes	Yes
	 Offsets	Yes	Yes	Yes	Yes
	 Column ordering	Yes	Yes	Yes	Yes
	 ~97px
	 */
}
testRows = function () {
	z()
	$.row(
			$.colX(2, $.img('me')),
			$.colX(6, $.img('me')),
			$.colX(4, $.img('me'))
	).A()
}
testRows2 = function () {
	z()
	$.R().A(
			$.dK('col-xs-12 col-sm-6').A($.img('me')),
			$.dK('col-xs-6 col-lg-4').A($.img('me'))
	)
}
testRows3 = function () {
	z()
	$.R().A(
			$.dK('col-xs-6 col-sm-4').A($.img('me')),
			$.dK('col-xs-6 col-sm-4').A($.img('guy')).C('o'),
			$.dK('col-xs-6 col-sm-4').A($.img('sun'))
	).C('b')
}
testRows4 = function () {
	z()
	$.R().A(
			$.dK('col-xs-6 col-sm-4').A($.span('me')),
			$.dK('col-xs-6 col-sm-4').A($.span('guy')).C('o'),
			$.dK('col-xs-6 col-sm-4').A($.span('sun'))
	).C('b').A()
}
exampleStackedToHoriz = function () {
	z()
	cont = $.container().A(
			$.h1('Hello World!'),
			$.row(
					$.sm('red', 6).ipsumP(1, 2),
					$.sm('blue', 6).ipsumP(4)
			)
	).A()
}
exampleStackedToHorizFluid = function () {
	z()
	$.containerFluid().A(
			$.h1('Hello World!'),
			$.row(
					$.sm('red', 6).ipsumP(2, 1),
					$.sm('blue', 6).ipsumP(3)
			)
	).A()
}
example25Percent = function () {
	z()
	$.containerFluid().A(
			$.h1('Hello World!'),
			$.row(
					$.sm('r', 3).ipsumP(3),
					$.sm('b', 9).ipsumP(3)
			)
	).A()
}
exampleMedium = function () {
	z()
	//on xs, u get one column only
	//on small devices, u get two columns ( 25% / 75% )
	//but on medium, u get a 50/50 split
	$.containerFluid().A(
			$.h1('Hello World!'),
			$.row(
					$.div('r').sm(3).md(6).ipsumP(3),
					$.div('b').sm(9).md(6).ipsumP(4)
			)
	).A()
}
exampleLarge = function () {
	z()
	$.containerFluid().A(
			$.h1('Hello World!'),
			$.row(
					$.div('y').K("col-sm-3 col-md-6 col-lg-4").ipsumP(2, 2),
					$.div('y').K("col-sm-9 col-md-6 col-lg-8").ipsumP(1, 1, 1, 1)
			)
	).A()
}
exampleThreeEqualColumns = function () {
	z()
	//The following example shows how to get a three equal-width columns
	// starting at tablets and scaling to large desktops. On mobile phones, the columns will automatically stack:
	cont = $.container().A()
	cont.A(
			$.row(
					$.div('red').K("col-sm-4").A('.col-sm-4').ipsumP(1),
					$.div('blue').K("col-sm-4").A('.col-sm-4').ipsumP(2, 2),
					$.div('yellow').K("col-sm-4").A('.col-sm-4').ipsumP(3, 3, 3)
			)
	)
}
exampleThreeUnequalColumns = function () {
	z()
	// The following example shows how to get a three various-width columns
	// starting at tablets and scaling to large desktops:
	cont = $.container().A()
	cont.A(
			$.row(
					$.div('red').K("col-sm-3").A('.col-sm-3').ipsumP(1),
					$.div('blue').K("col-sm-6").A('.col-sm-6').ipsumP(2, 2),
					$.div('yellow').K("col-sm-3").A('.col-sm-3').ipsumP(3, 3, 3)
			)
	)
}
exampleTwoUnequalColumns = function () {
	z()
	cont = $.container().A()
	cont.A(
			// The following example shows how to get two various-width columns starting at tablets and scaling to large desktops:
			$.row(
					$.div('r').K('col-sm-4').A('.col-sm-4').ipsumP(10),
					$.div('y').K('col-sm-8').A('.col-sm-8').ipsumP(20)
			)
	)
}
exampleTwoColumnsWithTwoNestedColumns = function () {
	z()
	//The following example shows how to get two columns starting at tablets
	// and scaling to large desktops, with another two columns (equal widths) within the larger column (at mobile phones, these columns and their nested columns will stack):
	cont = $.container().A()
	cont.A(
			$.row(
					$.div('a').K("col-sm-8").A(
							$.span('.col-sm-8'),
							$.row(
									$.div('x').K("col-sm-6").A('.col-sm-6').ipsumP(5),
									$.div('z').K("col-sm-6").A('.col-sm-6').ipsumP(5)
							)
					),
					$.div('b').K("col-sm-4").A('.col-sm-4').ipsumP(5)
			)
	)
}
exampleClearFloats = function () {
	z()
	//(with the .clearfix class) at specific breakpoints to prevent strange wrapping with uneven content:
	cont = $.container().A()
	cont.A(
			$.row(
					$.div('g').K(' col-xs-6 col-sm-3').A(
							$.span('Column 1'),
							$.br(),
							$.span('Resize the browser window to see the effect.')
					),
					$.div('u').K("col-xs-6 col-sm-3").A($.span('Column 2')),
					//$.span('<!-- Add clearfix for only the required viewport -->'),
					$.div('o').K("clearfix visible-xs"),
					$.div('y').K("col-xs-6 col-sm-3").A($.span('Column 3')),
					$.div('b').K("col-xs-6 col-sm-3").A($.span('Column 4'))
			)
	)
}
exampleOffsettingColumns = function () {
	z()
	//Move columns to the right using .col-md-offset-* classes. These classes increase the left margin of a column by * columns:
	cont = $.container().A()
	cont.A(
			$.row(
					$.div('r').K('col-sm-5 col-md-6').A('col-sm-5 col-md-6').ipsumP(4),
					$.div('b').K('col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0').A(
							'col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0'
					).ipsumP(4)
			)
	)
}
examplePushAndPull = function () {
	z()
	//- Change Column Ordering
	//Change the order of the grid columns with .col-md-push-* and .col-md-pull-* classes:
	cont = $.container().A()
	cont.A(
			$.row(
					$.div('r').K("col-sm-4 col-sm-push-8").ipsumP(2, 2, 2),
					$.div('p').K("col-sm-8 col-sm-pull-4").ipsumP(22)
			)
	)
}