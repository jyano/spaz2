
perfect(); needsFixin()


$Ms=function(ms){$.h1(ms)}


function perfect(){
    MDGET = function () {
        $.x('r').h1('tut');
        Md = $$M();
        md = Md({n: 'j'});
        $.h3('p: ' + md.g('n'))
    }
    
    EXTEV = function () {
        $.x('o', 'EXTEV')
        o = _.x({}, Bb.E)
        o.on('yo', function () {
            $.sp(G(arguments)).fS(50)
        })
        o.trigger('yo', 'a', 'b', 'c')
    }
    VIEW = function () {
                          $.x('b', 'viw')


                          Vw = $$V({
                              el: q = $.dA('g', 400, 400, 200, 200),
                              r: function () {
                                  var vw = this
                                  vw.A($.ul().fS(40).A('hello'))
                                  _.in(function () {
                                      vw.r()
                                  })
                              },
                              i: function () {
                                  this.r()
                              }
                          })
                          Vw2 = $$V({
                              r: function () {
                                  this.A(
                                      $.ul(['hello']).fZ(30)
                                  )
                              },
                              i: function () {
                                  this.r()
                              }
                          })

                          Vw()

                          $.bt('orange', function () {
                              d2 = $.d('O', 500, 500)
                              Vw2({el: d2})
                          })

                      }
    DEFAULT = function () {
                          $.x('n')
                          Md = $$M({
                              defaults: {n: 'j', a: 20, o: 'p'}
                          })
                          Vw = $$V({
                              t: 'li',
                              r: function () {
                                  this.$el.A('n: ' + this.g('n'))
                              },
                              i: function () {
                                  this.$el.A().C('r').col('b').fS(149);
                                  this.r()
                              }
                          })
                          md = Md()
                          vw = Vw({
                              m: md
                          })
                      }
    EVENTS = EVS = function () {
                          $.x('o', 'beauty')


                          q = $.d('r', 200).A($.h1('hello'), bt = $.bt('-------'))

                          Vw = $$V({
                              el: q, r: function () {
                                  $.C($r())
                              },
                              events: {
                                  'click button': function () {
                                      bt.C($r())
                                  },
                                  'dblclick': 'r',
                                  'mouseover': function () {
                                      q.C($r())
                                  }
                              }
                          })


                          Vw()
                      }
    CHANGE = function () {
                          Md = $$M()
                          Vw = $$V({
                              r: function () {
                                  return this.h(this.g('rx'))
                              },
                              i: function () {
                                  var vw = this;
                                  vw.r();
                                  vw.oC(function () {
                                      vw.r()
                                  })
                              }
                          })
                          $.x('x', 'bbv');
                          $('body').fS(30)
                          div = $.dA('o', 300, 400).XY(200, 200)
                          ip = $.ip()
                          $.bt('change', function () {
                              m.s('rx', ip.v())
                          })
                          m = Md({rx: 'antibiotic'})
                          Vw({
                              el: div,
                              m: m
                          })
                      }
    PEOPOP = function () {
                          $.x('x', 'bb view people')
                          peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]


                          Vw = $$V({
                              t: 'ul',
                              r: function () {
                                  var vw = this, q = vw.$el.E();
                                  _.e(vw.collection, function (p) {
                                      var li = $.li([p.n + '(' + p.a + ')'])
                                      q.A(li)
                                  });
                                  return this
                              },
                              i: function () {
                                  this.$el.C('y')
                              }

                          })
                          vw = Vw({cl: peep})  // alpha! <- vw= $.ulV({ i:function(){  },  r:function(){ } })({cl: peep})
                          $.A(vw.r().el)
                          _.in(function () {
                              peep.pop();
                              vw.r()
                          })

                      }
    DIVADD = function () {
        z()
        q = $.dI('d1', 'r', 500, 500)
        Vw = $$V({
            r: function () {
                q.A($.ul(['hello']))
            },
            initialize: function () {
                this.r()
            }
        })
        _.t(3, function () {
            Vw()
        }) // alpha! <-  q.V({r: function () { }, i: function () {  }})()
    }
    CLONADD = function () {
        $.x().h1('backcl');
        $.i('chicks').A()

        Cl = $$C({})

        cl = Cl().oA(function (s) {
            $l("new!!!!!! " + s.g('n'))
        }).A([{n: 'g1'}, {n: 'g2'}])
    }
    MDVW = function () {
        $.x('n')
        Md = $$M({d: {n: 'j', a: 20, o: 'p'}})
        Vw = $$V({
            t: 'li',
            _: 'some-per', k: 'per',

            r: function () {

                this.$el.A('n').A()
            },
            i: function () {
                this.r()
            }
        })

        md = Md()

        md.V = function (Vw, ob) {
            ob = ob || {}
            ob.m = this
            return Vw(ob)
        }
        md.V(Vw)
        _.in(2, function () {
            $.C('R');
            $l('- - --- - - - - ');
            md.l();
            $Ms(JSON.stringify(md.j()))
        })

    }
    BACKVALL = function () {
        z();
        $l('backvall')

        Md = $$M({
            defaults: {lame: true},
            validate: function (at) {
                $l('in validate')
                _at = at
                if (!at) {
                    return false
                }
                if (at.n == 'rigo') {
                    return "name can't be rigo!"
                }
            },
            i: function () {
                var t = this
                t.on('error', function (m, e) {
                    alert(3);
                    $l(e)

                })
                t.on('change:n', function (m, e) {
                    alert(3);
                    $l(e)
                })
            }
        })

        md = Md({n: "migo", a: 7})
        _.in(3, function () {
            $.C('r')
            md.oIv(function (m, er) {
                $Ms('...');
                $Ms('er: ' + er);
                $Ms('...')
            })
            md.s({n: 'rigo'}, {validate: true})
        })
    }
    CLLEN = function () {
        z();
        $Ms('CLLEN')

        Td = $$M({df: {tt: '', completed: false}});


        Md = $$M({
            d: {tt: '', completed: false}
        })

        Cl = $$C({
            md: Md
        })
        cl = Cl([Td({tt: 'Read', id: 2})]);


        $Ms('len 1?: ' + cl.length)

        TdsCl = $$C({md: Td})

        tds = TdsCl([
            a = Td({tt: 'Jam'}),
            b = Td({tt: 'Chin'})
        ])
        $Ms('len 2?: ' + tds.length)

        tds.A(c = Td({tt: 'Disn'}))

        $Ms('len 3?: ' + tds.length)

        tds.rm([a, b]);

        $Ms('len 1?: ' + tds.length)

        tds.rm(c);

        $Ms('len 0?: ' + tds.length)
    }
    BBRECS = BBSAMP = function () {
        $.x('b', 'bbsampp', '+')

        d = $.d()
        Rec = $$M()


        RecV = $$V({

            k: 'rec', e: {'click': 'move'},

            move: function () {
                this.q.css('left',
                    this.q.position().left + 10)
            },

            rr: function () {
                return this.sDims().sPos().sCol()
            },

            sDims: function () {
                this.q.WH(this.model.g('w'),
                    this.model.g('h'))
                return this
            },

            sPos: function () {
                this.q.ab().LR(
                    this.model.g('pos').x,
                    this.model.g('pos').y)
                return this
            },

            sCol: function () {
                this.q.C(this.model.g('C'))
                return this
            }
        })

        _.e([

            Rec({w: 100, h: 30, pos: {x: 300, y: 400}, C: 'o'}),
            Rec({w: 100, h: 20, pos: {x: 400, y: 400}, C: 'g'}),
            Rec({w: 100, h: 200, pos: {x: 0, y: 100}, C: 'y'})
        ], function (md) {
            RecV({model: md}).rr().$el.a2(d)
        })
    }
    CHANGECOL = function () {
        z()

        d = $.dA(400, 400, 300, 200)


        Md = $$M({

            promptColor: function () {
                this.s({
                    co: prompt('color:')
                })
            }
        })

        sb = Md()
        sb.on('change:co', function (mod, col, ops) {
            $l('new color!: ' + col);
            d.C(col)
        })


        sb.s({co: 'g'})
        _.in(2, function () {
            sb.promptColor()
        })
    }
    NNN = PER0 = function () {
        $.x('n')
        Per = $$M({d: {n: 'j', a: 20, o: 'p'}})
        PerV = $$V({
            t: 'li', k: 'per',
            r: function () {
                this.$el.A('n')
                this.$el.A()
            },
            i: function () {
                this.r()
            }
        })
        pV = PerV({m: p = Per()})
        _.ev(.5, function () {
            pV.r()
        })
    }
    TKZ = function () {
        $$$('TKZ');
        App = {Models: {}, Views: {}, Collections: {}}
        App.Models.Task = Backbone.Model.extend({})
        App.Views.Task = Backbone.View.extend({
            tagName: 'li',
            events: { //'click':' showAlert',

                'click .edit': 'editTask'
            },

            showAlert: function () {
                alert('you clicked me')
            },
            editTask: function () {//alert('you are edititing the task')

                newTaskTitle = prompt('what would you like to change the text to?', this.model.get('title'))

                this.model.set('title', newTaskTitle)
            },

            render: function () {
                this.$el.html(
                    this.model.get('title')
                )
                return this
            }

        })
        App.Collections.Tasks = Backbone.Collection.extend({model: App.Models.Task})
        App.Views.Tasks = Backbone.View.extend({
            initialize: function () {
                var view = this
                this.collection.on('all', function () {
                    view.render()
                })
            },
            tagName: 'ol',
            render: function () {
                this.$el.E()
                this.collection.each(this.addOne, this)
                return this
            },
            addOne: function (task) {
                var taskView = new App.Views.Task({model: task})
                this.$el.append(taskView.render().el)
            }
        })
        tasksCollection = tasks = new App.Collections.Tasks([{title: 'game', prior: 3},
            {title: 'store', prior: 5}, {title: 'haha', prior: 3}])
        tasksView = new App.Views.Tasks({collection: tasksCollection})
        tasksView.render()
        $.A(tasksView.el)
        $.bt('add', function () {
            tasksCollection.add([{title: 'yooo', prior: 4}])
        }).button()
    }
}

function needsFixin(){
        SHOWVW=NOROUTER = function () {$.x()
            V1 = $$V({
                i: function () {this.r()},
                r: function () {

                    this.$el.h(
                        this.model.get('Ms') + " from the View 1")
                    return this
                }
            })

            V2 = $$V({

                i: function () {
                    this.r();
                },
                r: function () {
                    this.$el.ht(this.model.g('Ms') + " from the View 2");
                    return this;
                }
            })
            V3 = $$V({
                i: function () {
                    this.render();
                },
                r: function () {
                    this.$el.html(this.model.get('Message') + " from the View 3");
                    return this;
                }
            })

            // Now we need a view that will contain the view
            // and render it whenever the user makes a choice on the screen.
            CtV = $$V({
                myChildV: null,
                r: function () {
                    this.h("Greeting Area");
                    this.A(
                        this.myChildV.$el);
                    return this;
                }
            })

            /*  Now lets create a simple div on the UI which will be used as el to this ContainerView.
             We will then position three buttons on the UI which will let the user to change the view.
             Below code shows the application setup that is creating the container view and the functions
             that will get invoked when the user selects the view from screen.
             */

            greet = V1({Ms: "Hello world"})

            cont = CtV({
                el: $("#AppContainer"),
                model: greet
            })

            v1 = null;v2 = null;v3 = null;
            function showView1() {
                if (view1 == null) {
                    view1 = new View1({model: greeting});
                }
                container.myChildView = view1;
                container.render();
            }
            function showView2() {
                if (view2 == null) {
                    view2 = new View2({model: greeting});
                }

                container.myChildView = view2;
                container.render();
            }
            function showView3() {
                if (view3 == null) {
                    view3 = new View3({model: greeting});
                }

                container.myChildView = view3;
                container.render();
            }


        }
        NORTR = function () {
            $.x(null, 'no router')

            v1 = 0
            v2 = 0
            v3 = 0

            dv = $.d('r', 100, 100).id('div')

            V1 = $$V({
                i: function () {
                    this.r()
                },

                r: function () {
                    //this.$el.ht(this.model.get('Ms') + " from the View 1" )
                    return this
                }
            })

            hi = V1({
                Ms: "Hello world"
            })

            $.bt('v1', function () {

                v1 = v1 || V1({m: hi})

                ct.chV = v1
                ct.r()

            })

            V2 = $$V({
                i: function () {
                    this.r()
                },
                r: function () {
                    this.$el.ht(
                        this.g('Ms') + " from the View 2"
                    );

                    return this
                }
            })


            //V3 = $$V({i: function () {this.r()}, r: function () {return this.h(this.g('Message') + " from " + this.g('view') )}})


            // Now we need a view that will contain the view
            // and render it
            // whenever the user makes a choice on the screen.

            CtV = $$V({
                chV: 0,
                r: function () {
                    this.h('Hi Area')
                    this.A(this.chV.$el)
                    return this
                }
            })


            /*

             ct = CtV({
             el:dv,
             model: hi
             })



             Now lets create a simple div on the UI which will be used as el to this ContainerView.
             We will then position three buttons on the UI which will let the user to change the view.
             Below code shows the application setup that is creating the container view and the functions
             that will get invoked when the user selects the view from screen.


             */


            $.bt('v2', function () {
                if (!v2) {
                    v2 = V2({model: hi})
                }
                ct.chV = v2
                ct.r()
            })
            $.bt('v3', function () {
                if (!v3) {
                    v3 = V3({model: hi})
                }
                ct.chV = v3
                ct.r()
            })


        }

    RESET = function () {
        z()


        //   Resetting/Refreshing Cls
        // Rather than adding or removing mds individually,
        // you might want to update entire cl at once.
        // Cl.set() takes array of mds and performs necessary
        // add, rm, and change operations required to update cl.

        TdsCl = $C({})

        TdsCl.A([
            {id: 1, tt: 'go to Jamaica.', completed: false},
            {id: 2, tt: 'go to China.', completed: false},
            {id: 3, tt: 'go to Disneyland.', completed: true}
        ])

        // we can listen for add/change/rm evs
        TdsCl.oA(function (m) {
            $l("Added " + m.g('tt'))
        })

        TdsCl.on("remove", function (m) {
            $l("Removed " + m.g('tt'))
        })
        TdsCl.on("change:completed", function (m) {
            $l("Completed " + m.g('tt'))
        })

        TdsCl.s([
            {id: 1, tt: 'go to Jamaica.', completed: true},
            {id: 2, tt: 'go to China.', completed: false},
            {id: 4, tt: 'go to Disney World.', completed: false}
        ])

        // Above logs:
        // Completed go to Jamaica.
        // Removed go to Disneyland.
        // Added go to Disney World.


        function more() {
            //  replace  entire cl  content
            TdsCl = $cl()
            // we can listen for reset evs
            TdsCl.on("reset", function () {
                $l("Cl reset.")
            })
            TdsCl.A([{
                tt: 'go to Jamaica.', completed: false
            }, {
                tt: 'go to China.',
                completed: false
            },
                {tt: 'go to Disneyland.', completed: true}]);
            $l('Cl size: ' + TdsCl.length); // Cl size: 3
            TdsCl.reset([{tt: 'go to Cuba.', completed: false}]);
            // Above logs 'Cl reset.'
            $l('Cl size: ' + TdsCl.length); // Cl size: 1
            // use reset with no arguments to clear outcl completely.
            //  This is handy when dynamically loading new page of results
            // where you want to blank out current page of results.
            myCl.reset()

            // -using Cl.reset() doesn’t fire  add | rm evs. reset event   fired instead
            // The reason you might want to use this is to perform super-optimized
            //rendering in extreme cases where individual evs are too expensive.


            td = $M()()

            tds = $Cl([td])()

                .on('reset', function (tds, ops) {  //    prev mds list avail in ops.prevMds
                    $l(ops.prevMds);
                    $l([td]);
                    $l(ops.prevMds[0] === td); // true

                })

            tds.reset([])


            // set()  SMART updates  cl with a list of md: new mds added, present mds merged, models not in list rmd

            Beat = $M({d: {job: 'mus'}})
            john = Beat({fN: 'John', lN: 'Lennon'});
            paul = Beat({fN: 'Paul', lN: 'McCartney'});
            george = Beat({fN: 'George', lN: 'Harrison'});
            ringo = Beat({fN: 'Ringo', lN: 'Starr'});

            theBeats = $Cl([john, paul, george, ringo]);// Create a cl using our mds

            pete = Beat({fN: 'Pete', lN: 'Best'});// Createseparate md for Pete Best

            theBeats.s([john, paul, george, pete]); // Update cl


            // Fires`rm` event for 'Ringo', and `add` event for 'Pete'.
            // Updates any of John, Paul and Georges's atts that may have
            // changed over years.
        }

    }


    INVALID = function () {
        $.x('x', 'valid')

        $l('---- VALIDD ------')
        Md = $$M({
            validate: function (at) {
                if (!at.n) {
                    return '!name'
                }
            }
        })
        md = Md({n: 'J'})
        md.oIv(function () {
            $Ms('INVALID !1 1!!!')
        })
        md.s({n: 'S'}, {validate: true})
        $l('n: ' + md.g('n'))
        md.unset('n')
        $l('n: ' + md.g('n'))
        md.s({n: 'S'}, {validate: true})
        md.unset('n', {validate: true})
        $l('n: ' + md.g('n'))
        function more() {
            p2 = Per({n: "qigo", a: 47})
            p3 = Per({n: "rigo", a: 7})
            $.bt('p2 validty', function () {
                $l('isValid: ' + p2.isValid())
            }) //  valid
            $.bt('p3 validty', function () {
                $l('isValid: ' + p3.isValid())
            }) //not valid
        }
    }
    VALID = TODOO = function () {
        $.x('x', 'valid')
        Todoo = $$M({

            i: function () {
                this.oIv(function (md, z) {
                    $l('err: ' + z)
                })
            },
            defaults: {completed: false},
            validate: function (at) {
                if (U(at.tt)) {
                    return "!tt"
                }
            }
        })
        todoo1 = Todoo()
        todoo1.s('completed', true, {validate: true})
        $l('completed: ' + todoo1.g('completed'))
        emptyTodoo = Todoo(null, {validate: true})
        $l('valErr: ' + emptyTodoo.validationError)

        //
        Td = $$M({df: {tt: '', completed: false}})
        // -add() and rm() accept  indiv mds | []      // { merge: true }  -> MERGE  dup mds, !ignore
        items = $cl().A([{id: 1, n: "Dog", a: 3}, {id: 2, n: "cat", a: 2}]).A([{
            id: 1,
            n: "Bear"
        }], {merge: true}).A([{id: 2, n: "lion"}])// merge: false
        $l(_.jS(items.toJSON())) // [{"id":1,"name":"Bear","age":3},{"id":2,"name":"cat","age":2}]
        //    to retriev a md from a cl, use Cl.get(), accepts single id:
        tds = TdsCl([td = Td({id: 2, tt: 'book'})])
        td2 = tds.g(2);
        $l(td2 === td) // true
        //   mds  passed by reference
        $l(tdCid === td); // true
        //Listening for evs
        //   can listen for add and rm evs which occur when mds are added/rmd from cl
        TdsCl = $cl()
        TdsCl.on("add", function (td) {
            $l("Gone " + td.g("tt") + " ?" + (td.g("completed") ? 'Y' : 'N'))
        })
        TdsCl.A([{tt: 'Jamai', completed: false}, {tt: 'DL', completed: true}])  // Gone Jamai? N    Gone DL? Y
        // can bind to change event to listen for changes to any of mds in cl
        TdsCl = $cl()
        TdsCl.on("change:tt", function (m) {
            $l("Nah! I " + m.g('tt'))
        })
        TdsCl.A([{tt: ' Jamaica.', completed: false, id: 3}])
        td = TdsCl.g(3)
        td.s('tt', 'go fishing')  //  Nah! I  go fishing
        Td = $M({df: {tt: '', completed: false}})
        td = Td().s({tt: 'Buy cookies', completed: true})
        td.on({
            'change:tt': ttChd = function () {
                $l('tt chd!')
            },
            'change:completed': sttChd = function () {
                $l('stt chd!')
            }
        })
        td.s({tt: 'groceries'})  // tt chd!
        // Use once, dont need to unbind   ev  listener

        TdCounter = _.x({cA: 0, cB: 0}, Bb.E)
        TdCounter.once('event', incrA = function () {
            TdCounter.cA += 1;
            TdCounter.trigger('event')
        })  // This triggering will not  produce any effect on counters
        TdCounter.once('event', incrB = function () {
            TdCounter.cB += 1
        })
        TdCounter.trigger('event')   // Trigger event for first time
        TdCounter.cA //1
        TdCounter.cB //1
        // counterA and counterB should only have been incred once.
        tds = $cl().A([{tt: '  Belgium.', completed: false}, {tt: ' China.', completed: false}, {
            tt: '  Aust',
            completed: true
        }])
        tds.forEach(function (md) {
            $l(md.g('tt'))
        }) //   Belgium.//   China. //   Austria.
        // sortBy()- sort a cl on spec attr, ex: sortByAlph
        tds.sortBy(function (td) {
            return td.g("tt").tLC()
        }).forEach(function (m) {
            $l(m.g('tt'))
        }) // go to Austria. // go to Belgium. // go to China.

        count = 1;
        $l(tds.map(function (md) {
            return count++ + ". " + md.g('tt')
        })) //1. go to Belgium. //2. go to China. //3. go to Austria.
        tds.max(function (m) {
            return m.id
        }).id;
        tds.min(function (m) {
            return m.id
        }).id
        //  pluck() extract  spec attr
        captions = tds.pluck('caption') // returns list of captions
        // filter()  ex: Filter by array of md IDs

        Tds = $Cl({
            md: Td, filterById: function (ids) {
                return this.mds.filter(function (c) {
                    return _.contains(ids, c.id)
                })
            }
        })
        //   indexOf() return index of particular item within cl
        tds = $C({})
        // any()  confirm  if any of  vals  incl  pass  iterator   truth  test
        tds.any(function (md) {
            return md.id === 100
        })
        tds.some(function (md) {
            return md.id === 100;
        })
        //  size() return cl size, tds.size() ~ tds.length;
        //  isEmpty()  determine whethercl is empty
        isEmpty = tds.isEmpty()
        //   groupBy() group cl into groups of like items, ex: create groups of completed and incomplete mds


        tds.A([{tt: 'Belgium.', completed: false}, {tt: 'China.', completed: false}, {
            tt: 'Austria.',
            completed: true
        }])

        byCompleted = tds.groupBy('completed');
        completed = $cl(byCompleted[true]);
        $l(completed.pluck('tt')) //  ["Aust"]
        //Underscore  operations  on  objects  are  avail as mets  on   Mds.


        //   pick()  extractset   of   atts   frommd
        Td = $$M({d: {tt: '', completed: false}})
        td = Td({tt: 'go to Austria.'});
        $l(td.pick('tt')) //  {tt: "go to Austria"}


        //  omit(), extract all atts from md, except those listed
        td = Td({tt: 'go to Austria.'});
        $l(td.omit('tt'))   //   {completed: false}

        // keys(), vals() -> lists of attr names, vals
        td = Td({tt: 'go to Austria.'});
        $l(td.keys())   //   ["tt", "completed"]
        $l(td.vals())  //  ["go to Austria.", false]


        // pairs() get  list  of atts as [key, val] pairs
        pairs = Td({tt: 'Aust'}).pairs();
        $l(pairs[0]); // ["tt", "Aust"]
        $l(pairs[1]) // ["completed", false]


        //  invert() creates ob where vals are keys, atts are vals
        Td({tt: 'go to Austria.'}).invert()  // {'go to Austria.': 'tt', 'false': 'completed'}


    }
    VALIDCOL = function () {
        $.x('b', 'people')

        Per = $M({
            i: function () {
                this.oIv(function (m, z) {
                    $l(z)
                })
            },
            defaults: {n: 'doe', a: 30, j: 'wrk'},
            validate: function (at) {
                if (at.a < 0) {
                    return 'a<0!'
                }
            },
            work: function () {
                return this.g('n') + ' is working'
            }
        })

        p = Per({n: 'y', a: 34})
        p.oIv(function (m, z) {
            $l('err: ' + z)
        })
        PerV = $V({
            t: 'li',
            k: 'person', x: 'some-person',

            i: function () {
                this.r()
            },

            //tp: _.tp("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
            r: function () {
                var v = this
                //this works, but doesnt use a template
                v.h(v.g('n') + ' ' + v.g('a') + ' ' + v.g('j'))
                v.h(v.tJ())
            }
        })
        pV = PerV({m: p})
        peepC = $Cl({m: Per})

        pC = peepC([{n: 'rigo', a: 29},
            {n: 'j', a: 2}, {n: 's', j: 'gx'}
        ])

        pC.add(p)
        pC.at(1)

        //pC.n('joejoe')

        pC.at(1)
        pC.s('name', 'joejoe')
        PeepV = $V({
            tn: 'ul',
            i: function () {
                $l('hi');
                $l(this.cl)
            },

            r: function () {
                var vw = this
                vw.eCl(function (p) {
                    var v, pV
                    $l(p.g('n'))
                    pV = PerV({m: p})
                    $l(pV.el)
                    vw.q.A(pV.el)
                }, this)
            }
        })
        pcv = PeepV({cl: pC})
        pcv.r()

        $.A(pcv.el)

        /*

         md.validate() checking attr vals  prior to setting them.

         By default occurs when md is persisted using save() or when set() is called if {vld:true}

         Should error be returned: An invalid event will be triggered, setting validationError property on md with val which is returned by this met.
         .save() will not continue and atts of md will not be modified on server.

         Note: atts object passed to validate fn reps what atts would be after completing current set() or save().
         This object is distinct from current atts of md  and from  pams passed to operation.

         Since it is created by shallow copy, it is not possible to change any Number, String, or Boolean attr of input within fn, but it is possible to change ats in nested objects.


         validation on init is possible but of limited use, as object being constructed is internally marked invalid but nevertheless passed back to caller


         */
    }
    SORT = function () {
        $.x('a', 'sort dont work')
        Chp = $$M()
        chps = $$C({m: Chp})()
        chps.comparator = function (a) {
            return a.tt
        }
        chps.add(Chp({p: 9, tt: "End_"}))
        chps.add(Chp({p: 1, tt: "Beg2_"}))
        chps.add(Chp({p: 5, tt: "Mid_"}))
        chps.add(Chp({p: 1, tt: "Beg_"}))
        $l(chps.pluck('tt'))
        chps.sort()
        $l(chps.pluck('tt'))
    }
    FRND = function () {
        $.x().h1('FRND')
        Frnd = $M({d: {lame: 1}})
        Frnd = $$M({
            d: {lame: true},
            i: function () {
                var t = this
                t.on('error', function (m, e) {
                    alert(3);
                    $l(e)
                })
                t.on('change:n',
                    function (m, e) {
                        alert(3);
                        $l(e)
                    })
            },
            v: function (at) {
                if (at.n == 'rigo') {
                    return "n cant be rigo!"
                }
            }
        })
        Frnds = $$C({m: Frnd})
        frnds = Frnds()
        f = Frnd({n: "paul", a: 7})
        p1 = frnds.A(f);
        f1 = Frnd({name: "Thomas", age: 67})
        f1 = Frnd({n: "Lul", a: 67})
        f1 = cl.A(f1)
        f2 = cl.A(f2)
        f2 = Frnd({game: 'jigo'})
        f2.s({name: "Rigo", age: 7})
        f2.s('mame', 'hah')
        frnds.A(f2);
        frnds.rm(f1)
        f1 = Frnd({n: "Lul", a: 67})
        f2 = Frnd({g: 'jigo'})
        f2.s({n: "Rigo", a: 7})
        f2.s('n', 'hah')

    }
    ITEMS = function () {
        z();
        Ap = {M: {}, V: {}, C: {}}
        $Ro = Router = $$R({
            R: {
                '': 'welcome',
                'itemlist': 'showItemList',
                'j': 'j'

            },
            welcome: function () {
                show('welcome')
            },
            j: function () {
            },
            showItemList: function () {
                show('show item list')
            }
        })
        r = router = $R()
        Ap.M.item = $$M({})
        i1 = Ap.M.item({n: 'jason', g: 'mason'})
        i1.oR('j', function () {
            show('j')
        })
        Bb.h.start({pushState: true})
    }


}
$$$=function(ms){
    z()
    $Ms(ms)
}
$.fn.V = function(ob){
    ob = ob || {};
    ob.el = this;
    return $V(ob)
}
      collApps()
 function collApps(){
     TASKER00 = function () {
         $.x('g', 'tasker');
         Ap = {M: {}, C: {}, V: {}}

         Ap.M.Tsk = $M()

         t1 = Ap.M.Tsk({t: 'store', pr: 4})
         t2 = Ap.M.Tsk({t: 'park', pr: 3})

         Ap.V.Tsk = $V({
             t: 'li',
             r: function () {
                 this.A(this.g('tt'));
                 return this
             }
         })
         tskV = Ap.V.Tsk({m: t1})


         Ap.C.Tsks = $Cl({m: Ap.M.Tsk})
         tsks = Ap.C.Tsks([{tt: 'hi'}, {tt: 'bye'}])


         Ap.V.Tsks = $V({
             t: 'li',
             r: function () {
                 var v = this
                 v.eCl(function (t) {
                     v.q.A(Ap.V.Tsk({m: t}).r().q)
                 })
                 this.q.A()
             }
         })

         tsksV = Ap.V.Tsks({cl: tsks})

         $.bt('r Ap.V.Tsks tsksV', function () {
             tsksV.r()
         })

         function alt() {
             TASKER0 = function () {
                 $.x()
                 Ap = {M: {}, C: {}, V: {}}

                 Ap.M.Task = Bb.M.e({})

                 t1 = Ap.M.Task.o({t: 'go  store', pr: 4})
                 t2 = Ap.M.Task.o({t: 'go park', pr: 3})

                 Ap.V.Tsk = Bb.V.e({
                     t: 'li',
                     rr: function () {
                         this.A(this.g('t'))
                         return this
                     }
                 })

                 taskView = Ap.V.Tsk.o({m: t1})
                 Ap.C.Tasks = Bb.C.e({m: Ap.M.Tsk})
                 tasks = Ap.C.Tasks.o([{t: 'hi'}, {t: 'bye'}])
                 Ap.V.Tasks = Bb.V.e({
                     t: 'li',
                     rr: function () {
                         var that = this
                         this.cl.each(
                             function (t) {

                                 var v = Ap.V.Task.o({m: t})
                                 that.$el.A(v.rr().el)
                             }, this)

                         this.el.A()
                     }
                 })

                 tasksV = Ap.V.Tasks.o({cl: tasks})
             }


             function oldSchol() {
                 BACKDEMO = function () {
                     z()


                     Temp('task', [

                         lb('Task: '),
                         tx().id('task_desc'),
                         bt('add task').id('btn')])


                     di('container').a()

                     bbR({


                         R: {
                             '': 'first',
                             'first': 'first',
                             'second': 'second'
                         },

                         first: function () {
                             $l('first')
                         },
                         second: function () {
                             new Task()
                             $l('second')
                         }

                     })()

                     bbH()


                     Task = bbV({

                         el: $('#container'),

                         i: function () {
                             this.r()
                         },

                         r: function () {
                             this.$el.html(temp('task'))
                         },

                         e: {'click button': 'add'},

                         add: function () {
                             alert(qiv('task_desc') + ' task added')
                         }

                     })

                 }

             }
         }
     }


     BBSORT00 = function () {
             $.x('a', 'sort dont work')
             chps = $Cl({m: Chp = $M()})()
             chps.comparator = function (a) {
                 return a.tt
             }
             chps.add(Chp({p: 9, tt: "End"}));
             chps.add(Chp({p: 5, tt: "Mid"}));
             chps.add(Chp({p: 1, tt: "Beg"}))
             $l(chps.pluck('tt'))
             chps.sort()
             $l(chps.pluck('tt'))
         }
         BBSORT0 = function () {
             Chp = $$M()
             chps = $$C({m: Chp})()
             chps.comparator = function (a) {
                 return a.tt
             } //$.x(a)
             chps.add(Chp({p: 9, tt: "End"}))
             chps.add(Chp({p: 5, tt: "Mid"}))
             chps.add(Chp({p: 1, tt: "Beg"}))
             $l(chps.pluck('tt'))
         }
         COUNTER0 = function () {
             z()
             Td = $$M({df: {tt: '', completed: false}})
             // -add() and rm() accept  indiv mds | []      // { merge: true }  -> MERGE  dup mds, !ignore
             items = $cl().A([{id: 1, n: "Dog", a: 3}, {id: 2, n: "cat", a: 2}]).A([{
                 id: 1,
                 n: "Bear"
             }], {merge: true}).A([{id: 2, n: "lion"}])// merge: false
             $l(_.jS(items.toJSON())) // [{"id":1,"name":"Bear","age":3},{"id":2,"name":"cat","age":2}]
             //    to retriev a md from a cl, use Cl.get(), accepts single id:
             tds = TdsCl([td = Td({id: 2, tt: 'book'})])
             td2 = tds.g(2);
             $l(td2 === td) // true
             //   mds  passed by reference
             $l(tdCid === td); // true
             //Listening for evs
             //   can listen for add and rm evs which occur when mds are added/rmd from cl
             TdsCl = $cl()
             TdsCl.on("add", function (td) {
                 $l("Gone " + td.g("tt") + " ?" + (td.g("completed") ? 'Y' : 'N'))
             })
             TdsCl.A([{tt: 'Jamai', completed: false}, {tt: 'DL', completed: true}])  // Gone Jamai? N    Gone DL? Y
             // can bind to change event to listen for changes to any of mds in cl
             TdsCl = $cl()
             TdsCl.on("change:tt", function (m) {
                 $l("Nah! I " + m.g('tt'))
             })
             TdsCl.A([{tt: ' Jamaica.', completed: false, id: 3}])
             td = TdsCl.g(3)
             td.s('tt', 'go fishing')  //  Nah! I  go fishing
             Td = $M({df: {tt: '', completed: false}})
             td = Td().s({tt: 'Buy cookies', completed: true})
             td.on({
                 'change:tt': ttChd = function () {
                     $l('tt chd!')
                 },
                 'change:completed': sttChd = function () {
                     $l('stt chd!')
                 }
             })
             td.s({tt: 'groceries'})  // tt chd!
             // Use once, dont need to unbind   ev  listener
             TdCounter = _.x({cA: 0, cB: 0}, Bb.E)
             TdCounter.once('event', incrA = function () {
                 TdCounter.cA += 1;
                 TdCounter.trigger('event')
             })  // This triggering will not  produce any effect on counters
             TdCounter.once('event', incrB = function () {
                 TdCounter.cB += 1
             })
             TdCounter.trigger('event')   // Trigger event for first time
             TdCounter.cA //1
             TdCounter.cB //1
             // counterA and counterB should only have been incred once.
         }
         INDEXSORT0 = function () {
             tds = $cl().A([{tt: '  Belgium.', completed: false}, {tt: ' China.', completed: false}, {
                 tt: '  Aust',
                 completed: true
             }])
             tds.forEach(function (md) {
                 $l(md.g('tt'))
             }) //   Belgium.//   China. //   Austria.
             // sortBy()- sort a cl on spec attr, ex: sortByAlph
             tds.sortBy(function (td) {
                 return td.g("tt").tLC()
             }).forEach(function (m) {
                 $l(m.g('tt'))
             }) // go to Austria. // go to Belgium. // go to China.
             count = 1;
             $l(tds.map(function (md) {
                 return count++ + ". " + md.g('tt')
             })) //1. go to Belgium. //2. go to China. //3. go to Austria.
             tds.max(function (m) {
                 return m.id
             }).id;
             tds.min(function (m) {
                 return m.id
             }).id
             //  pluck() extract  spec attr
             captions = tds.pluck('caption') // returns list of captions
             // filter()  ex: Filter by array of md IDs

             Tds = $Cl({
                 md: Td, filterById: function (ids) {
                     return this.mds.filter(function (c) {
                         return _.contains(ids, c.id)
                     })
                 }
             })
             //   indexOf() return index of particular item within cl

             peop = $cl()

             peop.comparator = function (a, b) {
                 return a.g('n') < b.g('n') ? -1 : 1
             }
             peop.A(tom = $m({n: 'T'})).A(rob = $m({n: 'R'})).A(tim = $m({n: 'T'}))
             peop.indexOf(rob)//0
             peop.indexOf(tom)//2
         }
         PLV0 = function () {
             $.x('o', 'hi')


             Per = Bb.M.e({d: {n: 'a', a: 20, o: 'p'}})

             p = Per.o({})
             p1 = Per.o({n: 'b'})
             p2 = {n: 'c'}
             PerV = Bb.V.e({
                 t: 'li',
                 x: 'some-per', k: 'per',

                 tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),

                 r: function () {
                     this.$el.A('fasdfsfasd')
                     _m = this.model
                     //    this.$el.A(this.tp(m  ))  // this.model.toJSON()
                 },

                 i: function () {
                     this.r()
                 }
             })

             PepC = Bb.C.e({m: Per})

             pV = PerV.o({m: p})
             pC = PepC.o()

             pC.add([p, p1, p2])

             PepV = Bb.V.e({
                 cl: PepC, el: ul = $.ul(),
                 i: function () {
                 },
                 r: function () {
                     ul = this.q.E()
                     this.j(function (md) {
                         PerV.o({m: md}, ul)
                     })
                 }
             })
             pCV = PepV.o({cl: pC})
             $.in(.2, function () {
                 pCV.r()
             }, '*')
             $.in(.4, function () {
                 pCV.r()
             }, '*')

         }
         BBCOL0 = function () {
             $.x()
             Per = $$M({})
             p1 = Per({n: 'j'})
             p2 = Per({n: 'y'})
             Pers = $$C({model: Per})
             pers = Pers([p1, p2])
         }
         FRND = function () {
             $.x().h1('backcl')

             Frnd = $M({d: {lame: 1}})
             f1 = Frnd({n: "Lul", a: 67})
             f2 = Frnd({g: 'jigo'})
             f2.s({n: "Rigo", a: 7})
             f2.s('n', 'hah')
             Per = $M({

                 d: {lame: true},

                 i: function () {
                     var t = this
                     t.on('error', function (m, e) {
                         alert(3);
                         $l(e)
                     })
                     t.on('change:n',
                         function (m, e) {
                             alert(3);
                             $l(e)
                         })
                 },

                 v: function (at) {
                     if (at.n == 'rigo') {
                         return "n cant be rigo!"
                     }
                 }

             })
             p = Per({n: "rigo", a: 7})
             cl = $Cl()()
             f1 = cl.A(f1)
             f2 = cl.A(f2)
             cl.rm(f1)
             Pers = $Cl({m: Per})
             pers = Pers()
             p1 = pers.add(p)
             pers.add(p2)
             pers.rm(p1)
         }
         PLV = function () {
             $.x('o', 'hi')


             Per = Bb.M.e({d: {n: 'a', a: 20, o: 'p'}})

             p = Per.o({})
             p1 = Per.o({n: 'b'})
             p2 = {n: 'c'}
             PerV = Bb.V.e({
                 t: 'li',
                 x: 'some-per', k: 'per',

                 tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),

                 r: function () {
                     this.$el.A('fasdfsfasd')
                     _m = this.model
                     //    this.$el.A(this.tp(m  ))  // this.model.toJSON()
                 },

                 i: function () {
                     this.r()
                 }
             })

             PepC = Bb.C.e({m: Per})

             pV = PerV.o({m: p})
             pC = PepC.o()

             pC.add([p, p1, p2])

             PepV = Bb.V.e({
                 cl: PepC, el: ul = $.ul(),
                 i: function () {
                 },
                 r: function () {
                     ul = this.q.E()
                     this.J(function (md) {
                         PerV.o({m: md}, ul)
                     })
                 }
             })
             pCV = PepV.o({cl: pC})
             $.in(.2, function () {
                 pCV.r()
             }, '*')
             $.in(.4, function () {
                 pCV.r()
             }, '*')

         }
         BCL = function () {
             $.x().h1('BCL')

             Bk = Bb.M.e({
                 d: {ID: '', n: ''}, id: "ID",
                 url: 'http://localhost:51377/api/Books'
             })

             BksC = Bb.C.e({m: Bk})

             cl1 = BksC.o()
             bk1 = Bk.o({ID: 1, n: "Bk 1"})
             bk2 = Bk.o({ID: 2, n: "Bk 2"})
             cl2 = BksC.o([bk1, bk2])
             bk3 = Bk.o({ID: 3, n: "Bk 3"})
             cl2.add(bk3)

             change = function () {
                 bk3 = new Bk({ID: 3, n: "Bk 3"})
                 cl2.add(bk3)
                 bk3_changed = Bk.o({ID: 3, n: "Changed Model"})
                 cl2.add(bk3_changed, {merge: true})
             }

             add = function () {
                 bk4 = Bk.o({ID: 4, n: "Bk 4"})
                 bk5 = Bk.o({ID: 5, n: "Bk 5"})
                 cl2.add([bk4, bk5])
             }

             addAt = function (n) {
                 bk0 = new Bk({ID: 0, n: "Bk 0"})
                 cl2.add(bk0, {at: n || 0})
             }

         }
         BBCOL = function () {
             $.x()

             Per = Bb.M.e({})
             p1 = Per.o({n: 'j'})
             p2 = Per.o({n: 'y'})

             Pers = Bb.C.e({model: Per})

             pers = Pers.o([p1, p2])
         }
         BBSORT = function () {

             Chp = Bb.M.e()
             chps = Bb.C.e({m: Chp}).o()
             chps.comparator = function (a) {
                 return a.tt
             } //$.x(a)
             chps.add(Chp.o({p: 9, tt: "End"}))
             chps.add(Chp.o({p: 5, tt: "Mid"}))
             chps.add(Chp.o({p: 1, tt: "Beg"}))
             $l(chps.pluck('tt'))
         }
         DIRTPAGE = function () {
             $.x()

             var newMsBox, newTopic, newMs, searchBox

             MsM = Bb.M.e({})
             MsC = Bb.C.e({m: 'MsM'})
             MsView = Bb.V.e({})
             MssView = Bb.V.e({})

             $.h1().A(
                 $.a('Dirtpage', '/wap/dirtpage/')
             ).A()
             $.dI('content')
             if (wappyPam) {

                 newMsBox = $.d().WH('auto').A(
                     $.h1('new ms'),
                     $.ip().K('form-control').id('newMs'),
                     $.bt('ok', function () {
                         var newMs = $('#newMs').v()
                         $.P('messages', {
                             tpc: wappyPam, ms: newMs
                         }, function () {
                             loadResults()
                         })
                     }))
                 $('#cont').A($.h1('the ' + wappyPam + ' page'),
                     newMsBox, $.dI('res'))
                 function loadRes() {
                     $.G('topics/' + wappyPam, function (msgs) {
                         $('#results').ht($.h5('len: ' + msgs.length))
                         _.e(msgs, function (ms) {
                             $('#res').A($.h6(ms.ms))
                         })
                     })
                 }

                 loadRes()
             }
             else {
                 newMsBox = $.d().WH('auto').A(
                     $.h1('new message'),
                     $.ip().K('form-control').id('newTopic'),
                     $.ip().K('form-control').id('newMs'),
                     $.bt('ok', function () {
                         newTopic = $('#newTopic').v()
                         newMs = $('#newMs').v()
                         $.P('msgs', {topic: newTopic, message: newMs}, function () {
                         })
                     })
                 )
                 searchBox = $.d().WH('auto').A(
                     $.h1('search'),
                     $.ip().K('form-control').id('searchInput'),
                     $.bt('ok', function () {
                         window.location = '/wap/dirtpage/' + $('#searchInput').v()
                         searchInput = $('#searchInput').v()
                         $.G('topics/' + searchInput, function (msgs) {
                             $('#res').ht($.h5('len: ' + msgs.length))
                             _.e(msgs, function (ms) {
                                 $('#res').A($.h6(ms.ms))
                             })
                         })
                     })
                 )
                 $.dI('res')
                 $('#cont').A(newMsBox, searchBox)
                 $.eG('msgs', function (ms) {
                     $('#res').A($.h2().A(
                             $.a('topic: ' + ms.topic, '/wap/dirtpage/' + ms.topic)),
                         $.h3('ms: ' + ms.ms)
                     )
                 })
             }
         }
         PEOPLE = function () {
             $l('people');
             z()
             Quiz0 = function (title) {

                 this.title = title

             }
             Person0 = function (o) {

                 this.name = o.name
                 this.age = o.age
                 this.job = o.job

                 //this.work=function(){}
             }
             Person0.prototype.work = function () {
                 return this.name + ' is working'
             }


             Person = bbM({
                 I: function () {
                 }, // this.oV(function(mod, err){$l(err)})
                 D: {name: 'john doe', age: 30, job: 'worker'},
                 V: function (ats) {
                     if (ats.age < 0) {
                         return 'age below zero, stupid!'
                     }
                 },
                 work: function () {
                     return this.g('name') + ' is working'
                 }
             })

             p = Person({name: 'yano', age: 34})

             p.oV(function (mod, z) {
                 $l(z)
             })

             personView = bbV({
                 t: 'li',
                 k: 'person',
                 i: 'some-person',

                 I: function () {
                     this.R()
                 },

                 T: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),

                 R: function () {
                     var t = this


                     //this works, but doesnt use a template
                     // t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))

                     t.H(t.T(t.J()))
                 }

             })

             v = personView({m: p})


             peopleCol = bbC({m: Person})

             //pC=new peopleCol()
             //pC.add(p)


             pC = peopleCol([

                 {name: 'rigo', age: 29},
                 {name: 'jan', age: 2},
                 {name: 'sal', job: 'graphics'}

             ])


             pC.at(1).s('name', 'joejoe')


             peopleView = bbV({

                 t: 'ul',

                 I: function () {
                     $l('hi')
                     $l(this.cl)
                 },


                 R: function () {//var t=this

                     this.cl.each(
                         function (person) {

                             //$l(person.get('name'))

                             var v = personView({m: person})

                             //$l(v.el)

                             this.$el.append(v.el)

                             //t.q( v.el  )

                         }, this)
                 }

             })


             pcv = peopleView({cl: pC})


             pcv.R()

             $b()(pcv.el)

             //$b()(pcv.q)


         }
         PEOPLE = function () {
             $l('people');
             z()
             Quiz0 = function (title) {

                 this.title = title

             }
             Person0 = function (o) {

                 this.name = o.name
                 this.age = o.age
                 this.job = o.job

                 //this.work=function(){}
             }
             Person0.prototype.work = function () {
                 return this.name + ' is working'
             }


             Person = bbM({
                 I: function () {
                 }, // this.oV(function(mod, err){$l(err)})
                 D: {name: 'john doe', age: 30, job: 'worker'},
                 V: function (ats) {
                     if (ats.age < 0) {
                         return 'age below zero, stupid!'
                     }
                 },
                 work: function () {
                     return this.g('name') + ' is working'
                 }
             })

             p = Person({name: 'yano', age: 34})

             p.oV(function (mod, err) {
                 $l(err)
             })

             personView = bbV({


                 t: 'li',
                 k: 'person',
                 i: 'some-person',

                 I: function () {
                     this.R()
                 },

                 T: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),

                 R: function () {
                     var t = this


                     //this works, but doesnt use a template
                     // t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))

                     t.H(t.T(t.J()))
                 }

             })

             v = personView({m: p})


             peopleCol = bbC({m: Person})

             //pC=new peopleCol()
             //pC.add(p)


             pC = peopleCol([

                 {name: 'rigo', age: 29},
                 {name: 'jan', age: 2},
                 {name: 'sal', job: 'graphics'}
             ])


             pC.at(1).s('name', 'joejoe')

             peopleView = bbV({

                 t: 'ul',

                 I: function () {
                     $l('hi')
                     $l(this.cl)
                 },


                 R: function () {//var t=this

                     this.cl.each(
                         function (person) {

                             //$l(person.get('name'))

                             var v = personView({m: person})

                             //$l(v.el)

                             this.$el.append(v.el)

                             //t.q( v.el  )

                         }, this)
                 }

             })


             pcv = peopleView({cl: pC})


             pcv.R()

             $b()(pcv.el)

             //$b()(pcv.q)


         }
         TASKS = function () {
             z()

             Ap = {M: {}, C: {}, V: {}}


             Ap.M.Task = bbM({})

             task1 = Ap.M.Task({
                 title: 'go to the store',
                 priority: 4
             })

             task2 = Ap.M.Task({
                 title: 'go to the park',
                 priority: 3
             })


             Ap.V.Task = bbV({
                 t: 'li',
                 R: function () {
                     return this.H(
                         this.g('title'))
                 }
             })


             taskView = Ap.V.Task({m: task})


             Ap.C.Tasks = bbC({m: Ap.M.Task})

             tasks = Ap.C.Tasks([
                 {title: 'hi'},
                 {title: 'bye'}])


             Ap.V.Tasks = bbV({
                 t: 'li',
                 R: function () {
                     this.cl.each(
                         function (t) {
                             var v = Ap.V.Task({m: t})
                             this.$el.append(v.el)
                         },

                         this)

                     $b()(this.el)
                 }
             })


             tasksV = Ap.V.Tasks({cl: tasks})


         }
         ITEMS = function () {
             z()


             Router = bbR({


                 R: {
                     '': 'welcome',

                     'itemlist': 'showItemList',
                     'j': 'j'

                 },

                 welcome: function () {
                     show('welcome')
                 },

                 j: function () {
                 },

                 showItemList: function () {
                     show('show item list')
                 }


             })

             router = Router()


             Ap = {
                 M: {}, V: {}, C: {}
             }


             Ap.M.item = bbM({})


             i1 = Ap.M.item({n: 'jason', g: 'mason'})

             i1.oR('j', function () {
                 show('j')
             })


             bbH()

         }
         TWEETS = function () {
         }
         AVAIL1 = function () {
             z()

             tx('new avail').id('newAvail').a()

             bt('ok', function () {
                 Ap.M.Avail({c: qiv('newAvail')}).save()
                 v.render()
             }).a()

             di('availsDiv').a()


             Ap = {M: {}, C: {}, V: {}, T: {}}

             Ap.T.Avail = function (model) {
                 return _d().w(400).h(100).M(20).c('g')(
                     h4(model.g('c')).id('avail').c('y', 'r'),
                     br(), sp('delete').id('deleteAvail'),
                     sp(' '), sp('edit').id('editAvail'),
                     sp(' '), cb2().id('selAvail')).q
             }

             Ap.M.Avail = bbM({urlRoot: '/avail'})

             Ap.C.Avails = bbC({model: Ap.M.Avail, url: '/avail'})


             Ap.V.Avail = bbV({

                 R: function () {
                     this.$el.append(Ap.T.Avail(this.model))
                     return this
                 },

                 events: {
                     'click #deleteAvail': 'deleteAvail',
                     'click #editAvail': 'editAvail',
                     'blur #avail': 'changeAvail'
                 },

                 changeAvail: function () {
                     qq(this.$el.find('#avail')).at('contenteditable', 'false')
                     var newAvail = this.$el.find('#avail').text()
                     this.model.s('c', newAvail)
                     this.model.save()
                 },

                 deleteAvail: function () {
                     this.model.destroy()
                     this.$el.remove()
                 },

                 editAvail: function () {
                     qq(this.$el.find('#avail')).at('contenteditable', 'true')
                 }

             })


             Ap.V.Avails = bbV({
                 el: '#availsDiv',
                 I: function () {
                     this.render()
                 },

                 R: function () {
                     var t = this

                     t.collection.fetch({

                         success: function () {

                             t.$el.html('')

                             t.$el.append("<h1>Avails List</h1>")

                             t.collection.each(function (m) {
                                 t.$el.append(Ap.V.Avail({model: m}).render().el)
                                 return t
                             }, t)

                         }
                     })
                 }
             })


             avs = Ap.C.Avails()

             v = Ap.V.Avails({collection: avs})//.render()

             avs.on('destroy', function (aa) {
                 $l('destroy!!!!')
             })


         }
         AVAIL = function () {
             z()

             tx('new avail').id('newAvail').a()


             bt('ok', function () {

                 var m = Ap.M.Avail({
                     c: qiv('newAvail')
                 })

                 m.save()

                 m.on('destroy', function () {
                     alert('i am the model and i was destroyed')

                 })

                 v.render()

             }).a()

             di('availsDiv').a()


             Ap = {M: {}, C: {}, V: {}, T: {}}

             Ap.T.Avail = function (model) {
                 return _d().w(400).h(100).M(20).c('g')(
                     h4(model.g('c')).id('avail').c('y', 'r'),

                     br(), sp('delete').id('deleteAvail'),
                     sp(' '), sp('edit').id('editAvail'),
                     sp(' '), cb2().id('selAvail')).q
             }


             Ap.M.Avail = bbM({urlRoot: '/avail'})

             Ap.C.Avails = bbC({model: Ap.M.Avail, url: '/avail'})

             Ap.V.Avail = bbV({

                 R: function () {
                     this.q(Ap.T.Avail(this.model))
                     return this
                 },


                 events: {

                     'click #deleteAvail': 'deleteAvail',
                     'click #editAvail': 'editAvail',
                     'blur #avail': 'changeAvail'
                 },


                 changeAvail: function () {
                     qq(this.$el.find('#avail')).cE(0)
                     var newAvail = this.$el.find('#avail').text()
                     this.model.s('c', newAvail)
                     this.model.save()
                 },


                 deleteAvail: function () {
                     this.model.destroy()
                     this.$el.remove()
                 },


                 editAvail: function () {

                     qq(this.$el.find('#avail')).cE(1)

                 }

             })


             Ap.V.Avails = bbV({

                 el: '#availsDiv',

                 I: function () {
                     this.render()
                 },

                 R: function () {
                     var t = this

                     t.collection.fetch({

                         success: function () {

                             t.q.H('')

                             t.q(h1('Avails List'))

                             t.e(
                                 function (m) {
                                     t.q(
                                         Ap.V.Avail({m: m}).r().el)
                                     return t
                                 }, t)

                         }
                     })
                 }
             })


             avs = Ap.C.Avails()


             avs.on('destroy',

                 function (j) {
                     alert('i am col and i was destroyed')

                     v.trigger('modelDeleted')

                 })


             v = Ap.V.Avails({cl: avs})


             v.on('modelDeleted', function () {
                 alert('modDel')
             })


             a = bbM({

                 defaults: {prop: 3},

                 test: function () {
                     console.log(this.get('prop'))
                 },


                 test2: function (a) {


                     console.log(
                         (function () {
                             return this.get('prop')
                         })()
                     )


                 },


                 happy: function (a) {

                     this.test2(a)
                 }

             })


             f = a()


         }
         BBSORT = function () {


             Chapter = Backbone.Model

             chapters = new Backbone.Collection

             chapters.comparator =
                 //'page'
                 function (a) {
                     return _z(a)
                 }

             chapters.add(
                 new Chapter({page: 9, title: "The End"}))


             chapters.add(
                 new Chapter({page: 5, title: "The Middle"}))


             chapters.add(
                 new Chapter({page: 1, title: "The Beginning"}))


             $l(chapters.pluck('title'))


         }
         BACKSET = function () {
             $.x()

             Sb = Sidebar = Bb.m.e({
                 ask: function () {
                     this.s({c: prompt("color?")})
                 }
             })
             sb = Sb.o()
             sb.on('change:c', function (md, c) {
                 $('body').C(c)
             })
             sb.set({c: 'b'})
             sb.ask()
             //right from ko site
             d = $.dA(400)

             Sid = Bb.M({
                 promptColor: function () {
                     this.s({
                         co: pr('color:')
                     })
                 }
             })

             sb = Sid()
             sb.on('change:co', function (md, c) {
                 d.C($l(c))
             })
             sb.C('w')
             sb.ask()
             Per = Bb.M.e({
                 i: function () {
                     alert("Welcome")
                 }
             })
             p = Per({})
             p.s({n: "mac", a: 67})
             $.dA(300).id('sb')
             Sidebar = Bb.M.e({
                 fn: function () {
                     return this.s({
                         c: prompt("c?")
                     })
                 }
             })
             Sidebar().oC('c', function (m, c) {
                 $('#sb').C(c)
             }).s({c: 'w'}).fn()

         }
         BBCL = function () {
             $.x().h1('backcl')
             bads = Bb.C.e().o().oA(function (s) {
                 alert("new baddie: " + s.g("n"))
             })
             bads.add([{n: "bad1"}, {n: "bad2"}])

             Frnd = Bb.M.e({d: {lame: 1}})
             f1 = Frnd.o({n: "Lul", a: 67})
             f2 = Frnd.o({g: 'jigo'})
             f2.s({n: "Rigo", a: 7})
             f2.s('n', 'hah')
             Per = Bb.M.e({
                 d: {lame: true},
                 i: function () {
                     var t = this
                     t.on('error', function (m, e) {
                         alert(3);
                         $l(e)
                     })
                     t.on('change:n',
                         function (m, e) {
                             alert(3);
                             $l(e)
                         })
                 },
                 v: function (at) {
                     if (at.n == 'rigo') {
                         return "n cant be rigo!"
                     }
                 }
             })
             p = Per.o({n: "rigo", a: 7})

             cl = Bb.C.e().o()
             f1 = cl.A(f1)
             f2 = cl.A(f2)
             cl.rm(f1)


             Pers = Bb.C.e({m: Per})
             pers = Pers.o()
             p1 = pers.add(p)
             pers.add(p2)
             pers.rm(p1)

         }
         BADS = function () {
             $.x().h1('backcl').i('chicks').A()

             bads = $Cl()()
             bads.oA(function (s) {
                 alert("new baddie: " + s.g("n"))
             })
             bads.add([{n: "bad1"}, {n: "bad2"}])


         }
         BACKCOL = function () {
             z()

             baddies = $C().oA(
                 function (s) {
                     alert("new baddie: " + s.g("n"))
                 })
             baddies.a([{n: "bad1"}, {n: "bad2"}])

         }
         BACKCOL = function () {
             z()

             baddies = bbC().oA(
                 function (s) {
                     alert("new baddie: " + s.g("n"))
                 })

             baddies.a([{n: "bad1"}, {n: "bad2"}])

         }
         BACKCOL2 = function () {
             Friend = bbM({
                 d: {lame: true}
             })
             f1 = Friend({name: "Thomas", age: 67})
             f2 = Friend({game: 'jigo'})
             f2.s({name: "Rigo", age: 7})
             f2.s('mame', 'hah')
             c = bbC()
             f1 = c.a(f1)
             f2 = c.a(f2)
             c.rm(f1)
         }
         BACKCOL2 = function () {

             Friend = bbM({
                 d: {lame: true}
             })

             f1 = Friend({name: "Thomas", age: 67})

             f2 = Friend({game: 'jigo'})

             f2.s({name: "Rigo", age: 7})

             f2.s('mame', 'hah')

             c = bbC()

             f1 = c.a(f1)

             f2 = c.a(f2)

             c.rm(f1)
         }
     function usesC$() {
             AVAIL = function () {
                 $.x('x');
                 Ap = {M: {}, C: {}, V: {}, T: {}}

                 Ap.T.Avail = function (model) {
                     return $.d('g', 400, 100).mar(20).A(
                         $.h4(model.g('c')).id('avail').C('y', 'r'),
                         $.br(), $.sp('delete').id('deleteAvail'),
                         $.sp(' '), $.sp('edit').id('editAvail'),
                         $.sp(' '), $.cb().id('selAvail'))
                 }
                 Ap.M.Avail = M$({urlRoot: '/avail'})
                 Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
                 Ap.V.Avail = Bb.V.e({

                     r: function () {
                         this.$el.A(Ap.T.Avail(this.model))
                         return this
                     },
                     ev: {
                         'click #deleteAvail': 'deleteAvail',
                         'click #editAvail': 'editAvail',
                         'blur #avail': 'changeAvail'
                     },
                     changeAvail: function () {
                         this.$el.fi('#avail').at('contenteditable', 'false')
                         newAvail = this.$el.fi('#avail').text()
                         this.model.s('c', newAvail)
                         this.model.save()
                     },
                     deleteAvail: function () {
                         this.model.destroy()
                         this.$el.rm()
                     },

                     editAvail: function () {
                         this.$el.fi('#avail').at('contenteditable', 'true')
                     }

                 })
                 Ap.V.Avails = Bb.V.e({
                     el: '#availsDiv',
                     I: function () {
                         this.render()
                     },
                     R: function () {
                         var t = this
                         t.collection.fetch({
                             success: function () {
                                 t.$el.html('')
                                 t.$el.A("<h1>Avails List</h1>")
                                 t.collection.each(function (m) {
                                     t.$el.A(Ap.V.Avail({model: m}).render().el)
                                     return t
                                 }, t)
                             }
                         })
                     }
                 })
                 //  avs=Ap.C.Avails()
                 //  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
                 $.ip('new avail').id('newAvail').A()

                 $.bt('ok', function () {
                     Ap.M.Avail({
                         c: $('#newAvail').v()
                     }).save()

                     v.render()

                 }).A()
                 $.dI('availsDiv')
                 $.ip('new avail').id('newAvail').A()
                 $.bt('ok', function () {
                     var m = Ap.M.Avail({
                         c: qiv('newAvail')
                     })
                     m.save()
                     m.on('destroy', function () {
                         alert('i am the model and i was destroyed')
                     })
                     v.render()
                 })
                 $.dI('availsDiv')


                 Ap.T.Avail = function (model) {
                     return $.d('g', 400, 100).mar(20).A(
                         $.h4(model.g('c')).id('avail').col('y', 'r'),
                         $.br(),
                         $.sp('delete').id('deleteAvail'),
                         $.sp(' '), $.sp('edit').id('editAvail'),
                         $.sp(' '), $.cb().id('selAvail')
                     )
                 }
                 Ap.M.Avail = Bb.M.e({urlRoot: '/avail'})
                 Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
                 Ap.V.Avail = Bb.V.e({

                     r: function () {
                         this.q(
                             Ap.T.Avail(this.model)
                         )
                         return this
                     },
                     ev: {
                         'click #deleteAvail': 'deleteAvail',
                         'click #editAvail': 'editAvail',
                         'blur #avail': 'changeAvail'
                     },
                     changeAvail: function () {
                         qq(this.$el.find('#avail')).cE(0)
                         var newAvail = this.$el.find('#avail').text()
                         this.model.s('c', newAvail)
                         this.model.save()
                     },

                     deleteAvail: function () {
                         this.model.destroy()
                         this.$el.remove()
                     },
                     editAvail: function () {

                         this.$el.find('#avail').cE(1)

                     }

                 })

                 Ap.V.Avails = Bb.V.e({
                     el: '#availsDiv',
                     i: function () {
                         this.render()
                     },
                     r: function () {
                         var t = this
                         t.collection.fetch({
                             success: function () {
                                 t.q.H('')

                                 t.q($.h1('Avails List'))

                                 t.e(
                                     function (m) {
                                         t.q(
                                             Ap.V.Avail({m: m}).r().el)
                                         return t
                                     }, t)

                             }
                         })
                     }
                 })
                 avs = Ap.C.Avails.o()

                 avs.on('destroy', function (j) {
                     alert('i am col and i was destroyed')
                     v.trigger('modelDeleted')
                 })

                 v = Ap.V.Avails.o({cl: avs})


                 v.on('modelDeleted', function () {
                     alert('modDel')
                 })

                 Bb.M.e({
                     d: {prop: 3},
                     test: function () {
                         $(this.get('prop'))
                     },
                     test2: function (a) {
                         $l('prop: ' + this.get('prop'))
                     },
                     happy: function (a) {
                         this.test2(a)
                     }
                 })


             }
             SWEET = function () {
                 $.x('x', 'bb view people')

                 Vw = $V({

                     el: $.ul(),

                     i: function () {

                         this.r().C$('init..')

                     },


                     r: function () {
                         var ul = this.q
                         this.ECl(function (p) {
                             ul.li(p.n, '(', p.a, ')')
                         })
                         return this
                     }
                 })


                 peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]

                 vw = Vw({cl: peep})

                 $.in(function () {
                     peep.pop();
                     vw.r()
                 })

                 BBVP1 = function () {
                     $.x('x', 'bb view people')


                     Vw = $.ulV({
                         i: function () {
                             this.q.C($r())
                         },
                         r: function () {
                             var el = this.q.E()
                             this.cl(function (p) {
                                 el.A($.li().A(p.n + '(' + p.a + ')'))
                             })
                             return this
                         }

                     })

                     vw = Vw({
                         cl: peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]

                     })

                     /*

                      $.A(vw.r().q)
                      $.in(function(){peep.pop(); vw.r()},'*')
                      */


                 }

             }
         }
     function unders() {
             USMETS0 = function () {
                 tds = $C({})
                 // any()  confirm  if any of  vals  incl  pass  iterator   truth  test
                 tds.any(function (md) {
                     return md.id === 100
                 })
                 tds.some(function (md) {
                     return md.id === 100;
                 })
                 //  size() return cl size, tds.size() ~ tds.length;
                 //  isEmpty()  determine whethercl is empty
                 isEmpty = tds.isEmpty()
                 //   groupBy() group cl into groups of like items, ex: create groups of completed and incomplete mds


                 tds.A([{tt: 'Belgium.', completed: false}, {tt: 'China.', completed: false}, {
                     tt: 'Austria.',
                     completed: true
                 }])

                 byCompleted = tds.groupBy('completed');
                 completed = $cl(byCompleted[true]);
                 $l(completed.pluck('tt')) //  ["Aust"]
                 //Underscore  operations  on  objects  are  avail as mets  on   Mds.


                 //   pick()  extractset   of   atts   frommd
                 Td = $$M({d: {tt: '', completed: false}})
                 td = Td({tt: 'go to Austria.'});
                 $l(td.pick('tt')) //  {tt: "go to Austria"}


                 //  omit(), extract all atts from md, except those listed
                 td = Td({tt: 'go to Austria.'});
                 $l(td.omit('tt'))   //   {completed: false}

                 // keys(), vals() -> lists of attr names, vals
                 td = Td({tt: 'go to Austria.'});
                 $l(td.keys())   //   ["tt", "completed"]
                 $l(td.vals())  //  ["go to Austria.", false]


                 // pairs() get  list  of atts as [key, val] pairs
                 pairs = Td({tt: 'Aust'}).pairs();
                 $l(pairs[0]); // ["tt", "Aust"]
                 $l(pairs[1]) // ["completed", false]


                 //  invert() creates ob where vals are keys, atts are vals
                 Td({tt: 'go to Austria.'}).invert()  // {'go to Austria.': 'tt', 'false': 'completed'}


             }
             CHAINABLE0 = function () {
                 //prob: us's arr manip  ops avail as Cl-mets, but cannot be directly chained (return arrays, !orig cl)
                 // sol: bb   supports  _.chain, which returns ob  w  us-arr-ops  attached as mets which return that ob
                 //chain starts chain, returns wrapper around cl's mds (wrapped arr)
                 //  The chain ends with call to val(), which  terminates chain and returns resulting array
                 Cl([{n: 'T', a: 5}, {n: 'I', a: 26}, {n: 'R', a: 55}]).chain()
                     .fl(function (i) {
                         return i.g('a') > 10
                     })
                     .m(function (i) {
                         return i.g('n')
                     })
                     .val() //['I','R']
                 // Some of bb- spec mets do return this, which means they can be chained as well:
                 $cl().A({n: 'J', a: 23}).A({n: 'H', a: 33}).A({n: 'S', a: 41}).pluck('n') //['J','H','S']
             }
         }

     AVAIL = function () {
         z()
         f = $M({
             defaults: {prop: 3},
             test: function () {
                 $l(this.get('prop'))
             },
             test2: function (a) {
                 var prop = this.get('prop')
                 $l('prop: ' + prop)
                 return prop
             },
             happy: function (a) {
                 this.test2(a)
             }
         })
         Ap.M.Avail = $$M({urlRoot: '/avail'})
         Ap.T.Avail = function (model) {
             return $.d('g', 400, 100).mar(20).A(
                 $.h4(model.g('c')).id('avail').col('y', 'r'),
                 $.br(),
                 $.sp('delete').id('deleteAvail'),
                 $.sp(' '), $.sp('edit').id('editAvail'),
                 $.sp(' '), $.cb().id('selAvail')
             )

         }
         Ap.V.Avail = $$V({
             r: function () {
                 this.$el.A(Ap.T.Avail(this.model))
                 return this
             },
             ev: {
                 'click #deleteAvail': 'deleteAvail',
                 'click #editAvail': 'editAvail',
                 'blur #avail': 'changeAvail'
             },
             changeAvail: function () {
                 this.$el.fi('#avail').at('contenteditable', 'false')
                 newAvail = this.$el.fi('#avail').text()
                 this.model.s('c', newAvail)
                 this.model.save()
             },
             deleteAvail: function () {
                 this.model.destroy()
                 this.$el.rm()
             },
             editAvail: function () {
                 this.$el.fi('#avail').at('contenteditable', 'true')
             }
         })
         Ap.C.Avails = $$C({model: Ap.M.Avail, url: '/avail'})
         avs = Ap.C.Avails()
         avs.on('destroy', function (j) {
             alert('i am col and i was destroyed')
             v.trigger('modelDeleted')
         })
         Ap.V.Avails = $$V({
             el: '#availsDiv',
             i: function () {
                 this.r()
             },
             r: function () {
                 var t = this;
                 t.collection.fetch({
                     success: function () {
                         t.q.H('');// t.$el.html('')
                         t.q(h1('Avails List')); //t.$el.A("<h1>Avails List</h1>")
                         t.collection.each(function (m) {
                             t.$el.A(Ap.V.Avail({model: m}).render().el)
                             return t
                         }, t)// t.e(function(m){t.q(Ap.V.Avail({m:m}).r().el ); return t}, t)
                     }
                 })
             }
         })
         v = Ap.V.Avails({
             collection: avs
         })//.render()
         //v=Ap.V.Avails({cl:avs})
         v.on('modelDeleted',
             function () {
                 alert('modDel')
             })
         $.ip('new avail').id('newAvail').A()
         $.bt('ok', function () {

             Ap.M.Avail({
                 c: $('#newAvail').v()
             }).save()

             m.on('destroy', function () {
                 alert('i am the model and i was destroyed')
             })

             v.render()
         }).A()
         $.dI('availsDiv')
     }
     SWEET = function () {
         $.x('x', 'bb view people')

         Bb.View.prototype.C$ = function (s) {
             this.$el.C$(s);
             return this
         }

         Vw = $V({
             el: ul = $.ul(),
             i: function () {
                 this.r().C$('init..')
             },
             r: function () {
                 var ul = this.q
                 this.ECl(function (p) {

                     ul.A(
                         $.li([p.n, '(', p.a, ')'])
                     )
                 })

                 return this
             }
         })

         peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
         vw = Vw({cl: peep})
         _.in(function () {
             peep.pop();
             vw.r()
         })
         BBVP1 = function () {
             $.x('x', 'bb view people')


             Vw = $.ulV({
                 i: function () {
                     this.q.C($r())
                 },
                 r: function () {
                     var el = this.q.E()
                     this.cl(function (p) {
                         el.A($.li().A(p.n + '(' + p.a + ')'))
                     })
                     return this
                 }

             })

             vw = Vw({
                 cl: peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]

             })

             /*

              $.A(vw.r().q)
              _.in(function(){peep.pop(); vw.r()},'*')
              */


         }
     }
     CHAINB = function () {
         //prob: us's arr manip  ops avail as Cl-mets, but cannot be directly chained (return arrays, !orig cl)
         // sol: bb   supports  _.chain,
         // which returns ob  w  us-arr-ops  attached as mets which return that ob
         //chain starts chain, returns wrapper around cl's mds (wrapped arr)
         //  The chain ends with call to val(),
         // which  terminates chain and returns resulting array

         cl = $$C()([{n: 'T', a: 5}, {n: 'I', a: 26}, {n: 'R', a: 55}])
             .chain().fl(function (i) {
                 return i.g('a') > 10
             })
             .m(function (i) {
                 return i.g('n')
             })
             .val() //['I','R']
         // Some of bb- spec mets do return this, which means they can be chained as well:

         cl().A({n: 'J', a: 23}).A({n: 'H', a: 33}).A({n: 'S', a: 41}).pluck('n') //['J','H','S']
     }
     DIRTPAGE = function () {
         $.x()
         var newMsBox, newTopic, newMs, searchBox

         MsM = $$M({})
         MsC = $$C({m: 'MsM'})
         MsView = $$V({})
         MssView = $$V({})
         $.h1().A(
             $.a('Dirtpage', '/wap/dirtpage/')
         ).A()
         $.dI('content')
         if (wappyPam) {

             newMsBox = $.d().WH('auto').A(
                 $.h1('new ms'),
                 $.ip().K('form-control').id('newMs'),
                 $.bt('ok', function () {
                     var newMs = $('#newMs').v()
                     $.P('messages', {
                         tpc: wappyPam, ms: newMs
                     }, function () {
                         loadResults()
                     })
                 }))
             $('#cont').A($.h1('the ' + wappyPam + ' page'),
                 newMsBox, $.dI('res'))

             $.g('topics/' + wappyPam, function (msgs) {
                 $('#results').ht($.h5('len: ' + msgs.length))
                 _.e(msgs, function (ms) {
                     $('#res').A($.h6(ms.ms))
                 })
             })
         }

         else {
             newMsBox = $.d().WH('auto').A(
                 $.h1('new message'),
                 $.ip().K('form-control').id('newTopic'),
                 $.ip().K('form-control').id('newMs'),
                 $.bt('ok', function () {
                     newTopic = $('#newTopic').v()
                     newMs = $('#newMs').v()
                     $.P('msgs', {topic: newTopic, message: newMs}, function () {
                     })
                 })
             )

             searchBox = $.d().WH('auto').A(
                 $.h1('search'),
                 $.ip().K('form-control').id('searchInput'),
                 $.bt('ok', function () {
                     window.location = '/wap/dirtpage/' + $('#searchInput').v()
                     searchInput = $('#searchInput').v()
                     $.G('topics/' + searchInput, function (msgs) {
                         $('#res').ht($.h5('len: ' + msgs.length))
                         _.e(msgs, function (ms) {
                             $('#res').A($.h6(ms.ms))
                         })
                     })
                 })
             )
             $.dI('res')
             $('#cont').A(newMsBox, searchBox)
             $.eG('msgs', function (ms) {

                 $('#res').A($.h2().A(
                         $.a('topic: ' + ms.topic, '/wap/dirtpage/' + ms.topic)),

                     $.h3('ms: ' + ms.ms)
                 )
             })
         }

     }
     FLCL = function () {
         $.x('r', 'filtering a cl:')

         /*
          FlV = Bb.V.x({
          ev: {'click #run': 'runFilter'},
          runFilter: function(e){e.pD();
          this.fl = {
          // ... get the filter info from the DOM
          }; this.rr()},
          rr: function(){// get the filtered list from the collection
          // iterate over the filtered list and render the results in to the html array
          // populate the DOM with the resulting HTML
          HT=[]
          _.e(this.cl.where(this.fl),
          function(item){HT.push(
          _.tp($('my-item-template').H())(item.tJ())
          )})

          this.$el.html(HT); return this }
          })*/


         Cl = $$C({
             i: function () {
             }
         })

         cl = Cl({})

         cl.add([
             {a: 'f', b: 's'},
             {a: 't', b: 's'},
             {a: 'f', b: 's'},
             {a: 's', b: 't'}
         ])
         res = cl.where({a: 'f', b: 's'})
         //http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
     }
     TASKER = function () {
         $.x()


         Ap.M.Task = $$M({})
         t1 = Ap.M.Task({t: 'go  store', pr: 4})
         t2 = Ap.M.Task({t: 'go park', pr: 3})

         Ap.V.Tsk = $$V({
             t: 'li',
             rr: function () {
                 this.A(this.g('t'))
                 return this
             }
         })

         taskView = Ap.V.Tsk({m: t1})
         Ap.C.Tasks = $$C({m: Ap.M.Tsk})
         tasks = Ap.C.Tasks([{t: 'hi'}, {t: 'bye'}])

         Ap.V.Tasks = $$V({
             t: 'li',
             rr: function () {
                 var that = this
                 this.cl.each(
                     function (t) {
                         var v = Ap.V.Task({m: t})
                         that.$el.A(v.rr().el)
                     }, this)
                 this.el.A()
             }
         })

         tasksV = Ap.V.Tasks({cl: tasks})
     }
     COLLEC = function () {
         $.x().h1('BCL')
         Bk = $$M({
             d: {ID: '', n: ''}, id: "ID",
             url: 'http://localhost:51377/api/Books'
         })

         BksC = $$C({m: Bk})
         cl1 = BksC()
         bk1 = Bko({ID: 1, n: "Bk 1"})
         bk2 = Bko({ID: 2, n: "Bk 2"})
         cl2 = BksC([bk1, bk2])
         bk3 = Bk({ID: 3, n: "Bk 3"})
         cl2.A(bk3)
         change = function () {
             bk3 = new Bk({ID: 3, n: "Bk 3"})
             cl2.add(bk3)
             bk3_changed = Bk.o({ID: 3, n: "Changed Model"})
             cl2.add(bk3_changed, {merge: true})
         }
         add = function () {
             bk4 = Bk.o({ID: 4, n: "Bk 4"})
             bk5 = Bk.o({ID: 5, n: "Bk 5"})
             cl2.add([bk4, bk5])
         }
         addAt = function (n) {
             bk0 = new Bk({ID: 0, n: "Bk 0"})
             cl2.add(bk0, {at: n || 0})
         }

     }
     PEOPLE = function () {
         $.x();
         mds();
         vws();
         cls();
         clVw()
         function mds() {
             Per = $$M({
                 i: function () {
                     //this.oV(function(mod, err){$l(err)})
                 },
                 d: {n: 'doe', a: 30, j: 'wrk'},
                 validate: function (ats) {
                     if (ats.age < 0) {
                         return 'a < 0!'
                     }
                 },
                 work: function () {
                     return this.g('n') + ' is working'
                 }
             })
             Person = $$M({
                 I: function () {
                 }, // this.oV(function(mod, err){$l(err)})
                 D: {name: 'john doe', age: 30, job: 'worker'},
                 V: function (ats) {
                     if (ats.age < 0) {
                         return 'age below zero, stupid!'
                     }
                 },
                 work: function () {
                     return this.g('name') + ' is working'
                 }
             })
             Person0 = function (o) {
                 this.name = o.name
                 this.age = o.age
                 this.job = o.job
                 //this.work=function(){}
             }
             Person0.prototype.work = function () {
                 return this.name + ' is working'
             }
             Per = $$M({d: {n: 'a', a: 20, o: 'p'}})

             Person = $$M({
                 I: function () {
                 }, // this.oV(function(mod, err){$l(err)})
                 D: {name: 'john doe', age: 30, job: 'worker'},
                 V: function (ats) {
                     if (ats.age < 0) {
                         return 'age below zero, stupid!'
                     }
                 },
                 work: function () {
                     return this.g('name') + ' is working'
                 }
             })
             Per = $$M({d: {n: 'a', a: 20, o: 'p'}})
             Per = $M({
                 d: {lame: true},
                 i: function () {
                     var t = this
                     t.on('error', function (m, e) {
                         alert(3);
                         $l(e)
                     })
                     t.on('change:n',
                         function (m, e) {
                             alert(3);
                             $l(e)
                         })
                 },
                 v: function (at) {
                     if (at.n == 'rigo') {
                         return "n cant be rigo!"
                     }
                 }

             })
             p = Per({n: "rigo", a: 7})
             p = Per({})
             p1 = Per({n: 'b'})
             p2 = {n: 'c'}
             Person0.prototype.work = function () {
                 return this.name + ' is working'
             }


             p = Person({name: 'yano', age: 34})
             p.oV(function (mod, err) {
                 $l(err)
             })
             p1 = Per({n: 'j'})
             p2 = Per({n: 'y'})
             p = Per({n: 'y', a: 34})
             p = Per({name: 'yano', age: 34})
             p.oIv(function (mod, z) {
                 $l(z)
             })

         }

         function vws() {
             PerV = $$V({
                 t: 'li',
                 x: 'some-per', k: 'per',

                 tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),

                 r: function () {
                     this.$el.A('fasdfsfasd')
                     _m = this.model
                     //    this.$el.A(this.tp(m  ))  // this.model.toJSON()
                 },

                 i: function () {
                     this.r()
                 }
             })
             PerV = $$V({
                 t: 'li',
                 x: 'some-per', k: 'per',

                 tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),

                 r: function () {
                     this.$el.A('fasdfsfasd')
                     _m = this.model
                     //    this.$el.A(this.tp(m  ))  // this.model.toJSON()
                 },

                 i: function () {
                     this.r()
                 }
             })
             PerV = $$V({
                 tn: 'li',
                 k: 'person', x: 'some-person',
                 i: function () {
                     this.r()
                 },
                 tp: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
                 r: function () {
                     var t = this, q = this.$el
                     //this works, but doesnt use a template
                     // t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))
                     q.html(q.text(t.j()))
                 }
             })
             personView = $$V({
                 t: 'li',
                 k: 'person',
                 i: 'some-person',
                 I: function () {
                     this.R()
                 },
                 T: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
                 R: function () {
                     var t = this


                     //this works, but doesnt use a template
                     // t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))

                     t.H(t.T(t.J()))
                 }
             })
             v = personView({m: p})
             v = pV = PerV({m: p})
         }

         function cls() {
             peopleCol = $$C({m: Person})
             PerC = $$C({m: Per})
             pC = PerC([
                 {n: 'rigo', a: 29},
                 {n: 'j', a: 2},
                 {n: 's', j: 'gx'}
             ])
             Pers = $$C({model: Per})
             pers = Pers([p1, p2])
             Pers = $$C({model: Per})
             pers = Pers([p1, p2])
             Pers = $Cl({m: Per})
             pers = Pers()
             p1 = pers.add(p)
             pers.add(p2)
             pers.rm(p1)
             pC = peopleCol([

                 {name: 'rigo', age: 29},
                 {name: 'jan', age: 2},
                 {name: 'sal', job: 'graphics'}

             ])
             pC.at(1).s('name', 'joejoe')
             pC.add(p)
             pC.at(1).n('joejoe')
             pC.at(1).s('name', 'joejoe')
             peop = $cl()
             peop.comparator = function (a, b) {
                 return a.g('n') < b.g('n') ? -1 : 1
             }
             peop.A(tom = $m({n: 'T'})).A(rob = $m({n: 'R'})).A(tim = $m({n: 'T'}))
             peop.indexOf(rob)//0
             peop.indexOf(tom)//2
             pC = PepC()

             peopleCol = $$C({m: Person})
             pC.A([p, p1, p2])
             pC = PepC()

             pC.A([p, p1, p2])


             PepC = $$C({m: Per})
             pC = peopleCol([

                 {name: 'rigo', age: 29},
                 {name: 'jan', age: 2},
                 {name: 'sal', job: 'graphics'}
             ])
             pC.at(1).s('name', 'joejoe')

         }

         function clVw() {
             peopleView = $$V({

                 t: 'ul',

                 I: function () {
                     $l('hi')
                     $l(this.cl)
                 },


                 R: function () {//var t=this

                     this.cl.each(
                         function (person) {

                             //$l(person.get('name'))

                             var v = personView({m: person})

                             //$l(v.el)

                             this.$el.append(v.el)

                             //t.q( v.el  )

                         }, this)
                 }

             })

             PerColV = $$V({
                 tn: 'ul',
                 i: function () {
                     $l('hi')
                     $l(this.cl)
                 },
                 r: function () {//var t=this
                     this.cl.each(function (p) {
                         var v, pV  //$l(p.g('n'))
                         pV = PerV.o({m: p}) //$l(pV.el)
                         this.$el.append(pV.el) //t.q( pV.el  )
                     }, this)
                 }

             })
             PepV = $$V({

                 cl: PepC, el: ul = $.ul(),
                 i: function () {
                 },
                 r: function () {
                     ul = this.$el.E()

                     this.j(function (md) {
                         PerV({m: md}, ul)
                     })
                 }
             })
             pCV = PepV({cl: pC})
             pCV = PerColV({cl: pC})
             pCV.r()
             $.A(pCV.el)//pC=new peopleCol() //pC.add(p)
             peopleView = $$V({

                 t: 'ul',

                 I: function () {
                     $l('hi')
                     $l(this.cl)
                 },


                 R: function () {//var t=this

                     this.cl.each(
                         function (person) {

                             //$l(person.get('name'))

                             var v = personView({m: person})

                             //$l(v.el)

                             this.$el.append(v.el)

                             //t.q( v.el  )

                         }, this)
                 }

             })
             PepV = $$V({
                 cl: PepC, el: ul = $.ul(),
                 i: function () {
                 },
                 r: function () {
                     ul = this.q.E()
                     this.J(function (md) {
                         PerV.o({m: md}, ul)
                     })
                 }
             })
             pCV = PepV({cl: pC})
             pcv = peopleView({cl: pC})
             pcv.R()
             peopleView = $$V({

                 t: 'ul',

                 I: function () {
                     $l('hi')
                     $l(this.cl)
                 },


                 R: function () {//var t=this

                     this.cl.each(
                         function (person) {

                             //$l(person.get('name'))

                             var v = personView({m: person})

                             //$l(v.el)

                             this.$el.append(v.el)

                             //t.q( v.el  )

                         }, this)
                 }

             })

         }

         _.in(.2, function () {
             pCV.r()
         }, '*')
         _.in(.4, function () {
             pCV.r()
         }, '*')
         _.in(.2, function () {
             pCV.r()
         })
         _.in(.4, function () {
             pCV.r()
         })
     }
     AP = TASK = function () {
         $.x('g', 'tasker');

         Temp('task', [
             $.lb('Task: '),
             $.ip().id('task_desc'),
             $.bt('add task').id('btn')
         ])


         Ap.M.Tsk = $$M({})
         tsk1 = Ap.M.Tsk({
             title: 'go to the store',
             priority: 4
         })
         tsk2 = Ap.M.Tsk({
             title: 'go to the park',
             priority: 3
         })


         TskV = Ap.V.Tsk = $$V({
             t: 'li',
             el: $('#container'),
             i: function () {
                 this.r()
             },
             r: function () {
                 this.$el.html(this.g('t'));
                 this.$el.html(temp('task'))
             },
             events: {'click button': 'add'},
             add: function () {
                 alert($('#task_desc') + ' task added')
             }
         })
         tskVw = Ap.V.Tsk({m: task1})


         Ap.C.Tsks = $$C({m: Ap.M.Tsk})
         tsks = Ap.C.Tasks([{t: 'hi'}, {t: 'bye'}, {title: 'hi'}, {title: 'bye'}])


         Ap.V.Tsks = $V({
             t: 'li',
             r: function () {
                 var that = this
                 //v.eCl(function (t) {that.q.A(Ap.V.Tsk({m: t}).r().q)})
                 this.cl.each(
                     function (t) {
                         var v = Ap.V.Task.o({m: t})
                         that.$el.A(v.rr().el)
                     }, this)
                 this.$el.A()
             }
         })
         tsksVw = Ap.V.Tsks({cl: tsks})


         $.bt('r Ap.V.Tsks tsksV', function () {
             tsksV.r()
         })
         $.d().id('container')
         r = $R({
             R: {
                 '': 'first',
                 'first': 'first',
                 'second': 'second'
             },
             first: function () {
                 $l('first')
             },
             second: function () {
                 new Task()
                 $l('second')
             }

         })
         Bb.h.start({pushState: true})
     }

 }
function pastServer(){
            RESTPERSIST0 = function () {

                //RESTful Persistence
                //Thus far, all of our example data has been created in  bw. For most single page apps, mds are derived fromdata store residing onserver.
                //This is area in which bb dramatically simplifies code you need to write to perform RESTful synchronization withserver throughsimple API on its mds and cls.
// Fetching mds from server
// Cls.fetch() retrieves set of mds from server in form ofJSON array by sending HTTP GET request to URL spec by cl’s url property (which may befunction).
// When this data is received,set() will be executed to update cl.

                Td = $M({df: {tt: '', completed: false}})
                TdsCl = $Cl({md: Td, url: '/tds'})
                tds = TdsCl();
                tds.fetch(); // sends HTTP GET to /tds


            }
            SAVEMDTOSERVER = function () {


                // bb can retrieve entire cl of mds from server at once, but updates to mds are performed individually using md’s save() met.
                //  When save() is called on a md that was fetched from server, it constructs a URL by appending md’s id to cl’s URL and sends HTTP PUT to server.

                // If md is new instance that was created in  bw (i.e. it doesn’t have id) then HTTP POST is sent to cl’s URL. Cls.create() can be used to createnew md, add it to cl,  and send it to server insingle met call.


                Td = $M({df: {tt: '', completed: false}});

                TdsCl = $Cl({md: Td, url: '/tds'});

                tds = TdsCl();
                tds.fetch();

                td2 = tds.g(2);
                td2.s('tt', 'go fishing');
                td2.S(); // sends HTTP PUT to /tds/2


                tds.create({tt: 'Try out code samples'}); // sends HTTP POST to /tds and adds to cl
//     As mentioned earlier,md’s validate() met is called automatically by save() and will trigger invalid event on md if validation fails.

                //  Deleting mds from server

                //  A md can be rmd from containing cl and server by calling its destroy() met. Unlike Cl.rm() which only rmsmd fromcl, Md.destroy() will also send HTTP DELETE to cl’s URL.

                Td = $M({df: {tt: '', completed: false}});

                TdsCl = $Cl({md: Td, url: '/tds'});

                tds = TdsCl();
                tds.fetch();
                td2 = tds.g(2)

                td2.destroy(); // sends HTTP DELETE to /tds/2 and rms from cl
                // Calling destroy onMd will return false if md isNew:

                td = new Bb.Md();
                $l(td.destroy())  // false
                // Options

                // Each RESTful API met accepts a variety of ops.
                //  Most importantly, all mets accept success and error cbs which can be used
                //  to custize handling of server responses.

                //  Specifying {patch: true} option to Md.save() will cause it to use HTTP PATCH to send only changed atts (i.e. partial updates) to server
                //  instead of entire md; i.e. md.save(attrs, {patch: true}):

                // Save partial using PATCH
                md.clear().set({id: 1, a: 1, b: 2, c: 3, d: 4});
                md.save();
                md.save({b: 2, d: 4}, {patch: true});
                $l(this.syncArgs.met);
                // 'patch'
                // Similarly, passing {reset: true} option to Cl.fetch() will result in cl being updated using reset() rather than set().


            }
            CID0 = function () {

// to uniquely identify mds  use:

// id --- unique identifier (int|S, e.g.,UUID) -can be used to fetch md from cl
//Internally, Bb.Cl contains [md] enumerated by md.id, if md insts have one.
// When cl.g(id) is called, arr checked for existence of md inst  with corresp  id.

// cid--- (client id), auto-gen-d at md creation -can be used to fetch md from cl,
// helpful when you don’t have true id (   not (or not yet) saving it to db  )
// tdCid = tds.g(td2.cid)

//  idAttribute( df=id)----  identifying attr name of md returned from server (i.e. id in your db).
//  -tells bb which data field from server should be used  to populate id property (think of it as a mapper).
// if your server sets unique attr on your md named “userId” then you would set idAttribute to “userId” in your md definition.
//  The val of md’s idAttribute should be set by server when md is saved. -shouldn’t need to set it manually, unless further control is required.


            }
            AVAILSRV = function () {
                $.x('x');
                Ap = {M: {}, C: {}, V: {}, T: {}}
                M$ = function (ob) {
                    ob = O(ob) ? ob : {}
                    var Md, md
                    Md = bb._M(ob)
                    md = new Md(ob)
                    return md

                }

                Ap.T.Avail = function (model) {
                    return $.d('g', 400, 100).mar(20).A(
                        $.h4(model.g('c')).id('avail').C('y', 'r'),
                        $.br(), $.sp('delete').id('deleteAvail'),
                        $.sp(' '), $.sp('edit').id('editAvail'),
                        $.sp(' '), $.cb().id('selAvail'))
                }
                Ap.M.Avail = M$({urlRoot: '/avail'})
                Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
                Ap.V.Avail = bb.V.e({

                    r: function () {
                        this.$el.A(Ap.T.Avail(this.model))
                        return this
                    },
                    ev: {
                        'click #deleteAvail': 'deleteAvail',
                        'click #editAvail': 'editAvail',
                        'blur #avail': 'changeAvail'
                    },
                    changeAvail: function () {
                        this.$el.fi('#avail').at('contenteditable', 'false')
                        newAvail = this.$el.fi('#avail').text()
                        this.model.s('c', newAvail)
                        this.model.save()
                    },
                    deleteAvail: function () {
                        this.model.destroy()
                        this.$el.rm()
                    },

                    editAvail: function () {
                        this.$el.fi('#avail').at('contenteditable', 'true')
                    }

                })
                Ap.V.Avails = bb.V.e({
                    el: '#availsDiv',
                    I: function () {
                        this.render()
                    },
                    R: function () {
                        var t = this
                        t.collection.fetch({
                            success: function () {
                                t.$el.html('')
                                t.$el.A("<h1>Avails List</h1>")
                                t.collection.each(function (m) {
                                    t.$el.A(Ap.V.Avail({model: m}).render().el)
                                    return t
                                }, t)
                            }
                        })
                    }
                })
                //  avs=Ap.C.Avails()
                //  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
                $.ip('new avail').id('newAvail').A()

                $.bt('ok', function () {
                    Ap.M.Avail({
                        c: $('#newAvail').v()
                    }).save()

                    v.render()

                }).A()
                $.dI('availsDiv')
                $.ip('new avail').id('newAvail').A()
                $.bt('ok', function () {
                    var m = Ap.M.Avail({
                        c: qiv('newAvail')
                    })
                    m.save()
                    m.on('destroy', function () {
                        alert('i am the model and i was destroyed')
                    })
                    v.render()
                })
                $.dI('availsDiv')


                Ap.T.Avail = function (model) {
                    return $.d('g', 400, 100).mar(20).A(
                        $.h4(model.g('c')).id('avail').col('y', 'r'),
                        $.br(),
                        $.sp('delete').id('deleteAvail'),
                        $.sp(' '), $.sp('edit').id('editAvail'),
                        $.sp(' '), $.cb().id('selAvail')
                    )
                }
                Ap.M.Avail = bb.M.e({urlRoot: '/avail'})
                Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
                Ap.V.Avail = bb.V.e({

                    r: function () {
                        this.q(
                            Ap.T.Avail(this.model)
                        )
                        return this
                    },
                    ev: {
                        'click #deleteAvail': 'deleteAvail',
                        'click #editAvail': 'editAvail',
                        'blur #avail': 'changeAvail'
                    },
                    changeAvail: function () {
                        qq(this.$el.find('#avail')).cE(0)
                        var newAvail = this.$el.find('#avail').text()
                        this.model.s('c', newAvail)
                        this.model.save()
                    },

                    deleteAvail: function () {
                        this.model.destroy()
                        this.$el.remove()
                    },
                    editAvail: function () {

                        this.$el.find('#avail').cE(1)

                    }

                })

                Ap.V.Avails = bb.V.e({
                    el: '#availsDiv',
                    i: function () {
                        this.render()
                    },
                    r: function () {
                        var t = this
                        t.collection.fetch({
                            success: function () {
                                t.q.H('')

                                t.q($.h1('Avails List'))

                                t.e(
                                    function (m) {
                                        t.q(
                                            Ap.V.Avail({m: m}).r().el)
                                        return t
                                    }, t)

                            }
                        })
                    }
                })
                avs = Ap.C.Avails.o()

                avs.on('destroy', function (j) {
                    alert('i am col and i was destroyed')
                    v.trigger('modelDeleted')
                })

                v = Ap.V.Avails.o({cl: avs})


                v.on('modelDeleted', function () {
                    alert('modDel')
                })

                bb.M.e({
                    d: {prop: 3},
                    test: function () {
                        $(this.get('prop'))
                    },
                    test2: function (a) {
                        $l('prop: ' + this.get('prop'))
                    },
                    happy: function (a) {
                        this.test2(a)
                    }
                })


            }
            DIRTPAGESRV = function () {
                $.x()

                var newMsBox, newTopic, newMs, searchBox

                MsM = bb.M.e({})
                MsC = bb.C.e({m: 'MsM'})
                MsView = bb.V.e({})
                MssView = bb.V.e({})

                $.h1().A(
                    $.a('Dirtpage', '/wap/dirtpage/')
                ).A()
                $.dI('content')
                if (wappyPam) {

                    newMsBox = $.d().WH('auto').A(
                        $.h1('new ms'),
                        $.ip().K('form-control').id('newMs'),
                        $.bt('ok', function () {
                            var newMs = $('#newMs').v()
                            $.P('messages', {
                                tpc: wappyPam, ms: newMs
                            }, function () {
                                loadResults()
                            })
                        }))
                    $('#cont').A($.h1('the ' + wappyPam + ' page'),
                        newMsBox, $.dI('res'))
                    function loadRes() {
                        $.G('topics/' + wappyPam, function (msgs) {
                            $('#results').ht($.h5('len: ' + msgs.length))
                            _.e(msgs, function (ms) {
                                $('#res').A($.h6(ms.ms))
                            })
                        })
                    }

                    loadRes()
                }
                else {
                    newMsBox = $.d().WH('auto').A(
                        $.h1('new message'),
                        $.ip().K('form-control').id('newTopic'),
                        $.ip().K('form-control').id('newMs'),
                        $.bt('ok', function () {
                            newTopic = $('#newTopic').v()
                            newMs = $('#newMs').v()
                            $.P('msgs', {topic: newTopic, message: newMs}, function () {
                            })
                        })
                    )
                    searchBox = $.d().WH('auto').A(
                        $.h1('search'),
                        $.ip().K('form-control').id('searchInput'),
                        $.bt('ok', function () {
                            window.location = '/wap/dirtpage/' + $('#searchInput').v()
                            searchInput = $('#searchInput').v()
                            $.G('topics/' + searchInput, function (msgs) {
                                $('#res').ht($.h5('len: ' + msgs.length))
                                _.e(msgs, function (ms) {
                                    $('#res').A($.h6(ms.ms))
                                })
                            })
                        })
                    )
                    $.dI('res')
                    $('#cont').A(newMsBox, searchBox)
                    $.eG('msgs', function (ms) {
                        $('#res').A($.h2().A(
                                $.a('topic: ' + ms.topic, '/wap/dirtpage/' + ms.topic)),
                            $.h3('ms: ' + ms.ms)
                        )
                    })
                }
            }
            FETCH = EVTSAVE = function () {

                m = bb.M.x({
                    n: 'j'
                })


                Don = $M({
                    //defaults
                    d: {n: null, sprink: 0, cream: 0},
                    //u? url?
                    u: function () {
                        return '/dn/' + this.id || ''
                    }
                })

                bc = bostonCream = Don({n: 'Bos', cream: 1})
                bc.s({sprink: 1}).S()  //save

                Dons = $Cl({m: Don, url: "/dn"})
                dons = Dons()
                dons.fetch() //f F
                dons.at(0)  // a -> gets donuts by index.
                dons.get(0) // g   -> gets donuts by id.
                dons.each(function (d) { // e
                    $l(d.get("name"))
                })
                dons.select(function (d) {//sl
                    return d.get("name").length > 2
                })// Select donuts with names longer than 2
                dons.map(function (d) {//m
                    return d.get("name")
                })
                Shop = $m({
                    i: function () {
                        this.dons = Dons()
                        this.dons.url = 'shops/' + this.id + "/dn"
                    }, df: {n: "z"}
                })

                Shop.oA(function (dn) { //on ? alert added?
                    alert("added " + dn.g('n'))
                })

                lem = Shop.dons.A({
                    n: "Lem"
                })

                //////

            }
            OBJECT = function () {
                $.fm()

                s1.A('your objects', $.br(2), t = $.ip(),
                    $.bt('new object', function () {
                        $.P('newObj',
                            {t: t.V()})
                    }))
                $.eG('objs', function (o) {

                    s1.A($.h2(o.t).$(function () {
                        s2.E($.h1(o.t), tt = $.ip(),
                            $.bt('new sub-object', function () {
                                $.P('newObj', {t: tt.V()})
                            }))
                    }))
                    _.e(o.i, function (i) {
                        s1.A(h3(i))
                    })
                })
            }
            BBEXT = function () {
                // https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
            }
            LIBBOOK = function () {
                /*



                 Exercise 2: Book Lib - Your First RESTful bb.js App

                 While our first app gave usgood taste of how bb.js apps are made, most real-world apps will want to communicate withback-end of some sort.
                 Let’s reinforce what we have already learned with another example,
                 but this time we will also createRESTful API for our app to talk to.

                 In this exercise, we will build lib app for managing digital books using bb. For each book, we will store tt, author, date of release,
                 and some keywords. We’ll also showpicture of cover.

                 Setting up
                 First, we need to createfolder structure for our project. To keep front-end and back-end separate, we will createfolder called site for our client in project root.
                 Within it, we will create css, img, and js directories.

                 As with last example, we will split our JavaScript files by their function, so under js directory create folders named lib, mds, cls, and views.
                 Your directory hierarchy should look like this:

                 site/
                 css/
                 img/
                 js/
                 cls/
                 lib/
                 mds/
                 views/
                 Download bb, Underscore, and jQ libraries and copy them to your js/lib folder. We needplaceholder image for book covers. Save this image to your site/img folder:


                 Just like before we need to load all of our dependencies in site/index.html file:

                 <!DOCTYPE html>
                 <html lang="en">
                 <head>
                 <meta charset="UTF-8"/>
                 <tt>bb.js Lib</tt>
                 <link rel="stylesheet" href="css/screen.css">
                 </head>
                 <body>
                 <script src="js/lib/jquery.min.js"></script>
                 <script src="js/lib/underscore-min.js"></script>
                 <script src="js/lib/backbone-min.js"></script>
                 <script src="js/mds/book.js"></script>
                 <script src="js/cls/lib.js"></script>
                 <script src="js/views/book.js"></script>
                 <script src="js/views/lib.js"></script>
                 <script src="js/app.js"></script>
                 </body>
                 </html>
                 We should also add in HTML for user interface. We’ll wantform for addingnew book, so add following immediately inside body el:

                 <div id="books">
                 <form id="addBook" action="#">
                 <div>
                 <label for="coverImage">CoverImage: </label><input id="coverImage" type="file" />
                 <label for="tt">Title: </label><input id="tt" type="text" />
                 <label for="author">Author: </label><input id="author" type="text" />
                 <label for="releaseDate">Release date: </label><input id="releaseDate" type="text" />
                 <label for="keywords">Keywords: </label><input id="keywords" type="text" />
                 <bt id="add">Add</bt>
                 </div>
                 </form>
                 </div>
                 and we’ll needtp for displaying each book which should be placed before script tags:

                 <script id="bookTp" type="text/tp">
                 <img src="<%= coverImage %>"/>
                 <ul>
                 <li><%= tt %></li>
                 <li><%= author %></li>
                 <li><%= releaseDate %></li>
                 <li><%= keywords %></li>
                 </ul>

                 <bt class="delete">Delete</bt>
                 </script>
                 To see what this will look like with some data in it, go ahead and addmanually filled-in book to books div.

                 <div class="bookContainer">
                 <img src="img/placeholder.png"/>
                 <ul>
                 <li>Title</li>
                 <li>Author</li>
                 <li>Release Date</li>
                 <li>Keywords</li>
                 </ul>

                 <bt class="delete">Delete</bt>
                 </div>
                 Open this file in bw and it should look something like this:


                 Not so great. This is notCSS tutorial, but we still need to do some formatting. Createfile named screen.css in your site/css folder:

                 body {
                 background-color: #eee;
                 }

                 .bookContainer {
                 outline: 1px solid #aaa;
                 width: 350px;
                 height: 130px;
                 background-color: #fff;
                 float: left;
                 margin: 5px;
                 }

                 .bookContainer img {
                 float: left;
                 margin: 10px;
                 }

                 .bookContainer ul {
                 list-style-type: none;
                 margin-bottom: 0;
                 }

                 .bookContainer bt {
                 float: right;
                 margin: 10px;
                 }

                 #addBook label {
                 width: 100px;
                 margin-right: 10px;
                 text-align: right;
                 line-height: 25px;
                 }

                 #addBook label, #addBook input {
                 display: block;
                 margin-bottom: 10px;
                 float: left;
                 }

                 #addBook label[for="tt"], #addBook label[for="releaseDate"] {
                 clear: both;
                 }

                 #addBook bt {
                 display: block;
                 margin: 5px 20px 10px 10px;
                 float: right;
                 clear: both;
                 }

                 #addBook div {
                 width: 550px;
                 }

                 #addBook div:after {
                 content: "";
                 display: block;
                 height: 0;
                 visibility: hidden;
                 clear: both;
                 font-size: 0;
                 line-height: 0;
                 }
                 Now it looksbit better:


                 So this is what we want final result to look like, but with more books. Go ahead and copy bookContainer divfew more times if you would like to see what it looks like.
                 Now, we are ready to start developing actual app.

                 Creating Md, Cl, Vws, and App
                 First, we’ll needmd ofbook andcl to hold list. These are both very simple, with md only declaring some defaults:

                 // site/js/mds/book.js

                 app = app || {};

                 app.Book = bb.Md.x({
                 df: {
                 coverImage: 'img/placeholder.png',
                 tt: 'No tt',
                 author: 'Unknown',
                 releaseDate: 'Unknown',
                 keywords: 'None'
                 }
                 });
                 // site/js/cls/lib.js

                 app = app || {};

                 app.Lib = bb.Cl.x({
                 md: app.Book
                 });
                 Next, in order to display books we’ll needview:

                 // site/js/views/book.js

                 app = app || {};

                 app.BookVw = bb.V.x({
                 tagName: 'div',
                 k: 'bookContainer',
                 tp: _.tp( $( '#bookTp' ).h() ),

                 r: function() {
                 //this.el is what we defined in tagName. use $el to get access to jQ h() function
                 this.$el.h( this.tp( this.md.atts ) );

                 return this;
                 }
                 });
                 We’ll also needview for list itself:

                 // site/js/views/lib.js

                 app = app || {};

                 app.LibVw = bb.V.x({
                 el: '#books',

                 i: function( initialBooks ) {
                 this.cl = new app.Lib( initialBooks );
                 this.r();
                 },

                 // render lib by rendering each book in its cl
                 r: function() {
                 this.cl.each(function( item ) {
                 this.renderBook( item );
                 }, this );
                 },

                 // renderbook by creatingBookVw and appending the
                 // el it renders to lib's el
                 renderBook: function( item ) {
                 bookVw = new app.BookVw({
                 md: item
                 });
                 this.$el.A( bookVw.r().el );
                 }
                 });
                 Note that in init function, we accept array of data that we pass to app.Lib constructor. We’ll use this to populate our cl
                 with some sample data so that we can see everything is working correctly. Finally, we have entry point for our code, along with sample data:

                 // site/js/app.js

                 app = app || {};

                 $(function() {
                 books = [
                 { tt: 'JavaScript: The Good Parts', author: 'Douglas Crockford', releaseDate: '2008', keywords: 'JavaScript Programming' },
                 { tt: 'The Little Book on CoffeeScript', author: 'Alex MacCaw', releaseDate: '2012', keywords: 'CoffeeScript Programming' },
                 { tt: 'Scala for Impatient', author: 'Cay S. Horstmann', releaseDate: '2012', keywords: 'Scala Programming' },
                 { tt: 'American Psycho', author: 'Bret Easton Ellis', releaseDate: '1991', keywords: 'Novel Splatter' },
                 { tt: 'Eloquent JavaScript', author: 'Marijn Haverbeke', releaseDate: '2011', keywords: 'JavaScript Programming' }
                 ];

                 new app.LibVw( books );
                 });
                 Our app just passes sample data tonew instance of app.LibVw that it creates. Since init() constructor in LibVw invokes view’s r() met,
                 all books in lib will be displayed. Since we are passing our entry point ascb to jQ (in form of its $ alias), function will execute when DOM is ready.

                 If you view index.html in bw, you should see something like this:


                 This iscomplete bb app, though it doesn’t yet do anything interesting.

                 Wiring in interface
                 Now, we’ll add some functionality to useless form at top and delete bts on each book.

                 Adding mds
                 When user clicks add bt, we want to take data in form and use it to createnew md. In LibVw, we need to add event handler for click event:

                 evs:{
                 'click #add':'addBook'
                 },

                 addBook: function( e ) {
                 e.preventDefault();

                 formData = {};

                 $( '#addBook div' ).children( 'input' ).each( function( i, el ) {
                 if( $( el ).val() != '' )
                 {
                 formData[ el.id ] = $( el ).val();
                 }
                 });

                 this.cl.add( new app.Book( formData ) );
                 },
                 We select all input els of form that haveval and iterate over them using jQ’s each. Since we used same names for ids in our form as keys on our Book md,
                 we can simply store them directly in formData object. We then createnew Book from data and add it to cl. We skip fields withoutval so that defaults will be applied.

                 bb passes event object asparameter to event-handling function. This is useful for us in this case since we don’t want form to actually submit and reload page.
                 Addingcall to preventDefault on event in addBook function takes care of this for us.

                 Now, we just need to make view render again whennew md is added. To do this, we put

                 this.l2( this.cl, 'add', this.renderBook );
                 in init function of LibVw.

                 Now, you should be ready to take app forspin.


                 You may notice that file input for cover image isn’t working, but that is left as exercise to reader.

                 Removing mds
                 Next, we need to wire up delete bt. Set up event handler in BookVw:

                 evs: {
                 'click .delete': 'deleteBook'
                 },

                 deleteBook: function() {
                 //Delete md
                 this.md.destroy();

                 //Delete view
                 this.rm();
                 },
                 You should now be able to add and rm books from lib.

                 Creating back-end
                 Now, we need to makesmall detour and set upserver withREST api. Since this isJavaScript book, we will use JavaScript to create server using node.js.
                 If you are more comfortable in setting upREST server in another language, this is API you need to conform to:

                 url             HTTP Method  Operation
                 /api/books      GET          Get array of all books
                 /api/books/:id  GET          Get book with id of :id
                 /api/books      POST         Addnew book and return book with id attr added
                 /api/books/:id  PUT          Update book with id of :id
                 /api/books/:id  DELETE       Delete book with id of :id
                 The outline for this section looks like this:

                 Install node.js, npm, and MongoDB
                 Install node modules
                 Createsimple web server
                 Connect to db
                 Create REST API
                 Install node.js, npm, and MongoDB
                 Download and install node.js from nodejs.org. The node package manager (npm) will be installed as well.

                 Download, install, and run MongoDB from mongodb.org (you need Mongo to be running to store data inMongo db).
                 There are detailed installation guides on website.

                 Install node modules
                 Createfile called package.json in root of your project. It should look like

                 {
                 "name": "backbone-lib",
                 "version": "0.0.1",
                 "description": "A simple lib app using bb",
                 "dependencies": {
                 "express": "~3.1.0",
                 "path": "~0.4.9",
                 "mongoose": "~3.5.5",
                 "body-parser": "~1.9.1"
                 }
                 }
                 Amongst other things, this file tells npm what dependencies are for our project. On command line, from root of your project, type:

                 npm install
                 You should see npm fetch dependencies that we listed in our package.json and save them withinfolder called node_modules.

                 Your folder structure should look something like this:

                 node_modules/
                 .bin/
                 body-parser/
                 express/
                 mongoose/
                 path/
                 site/
                 css/
                 img/
                 js/
                 index.html
                 package.json
                 Createsimple web server
                 Createfile named server.js in project root containing following code:

                 // Module dependencies.
                 app_root = __dirname,
                 express = require( 'express' ), //Web framework
                 bodyParser = require('body-parser'), //Parser for reading request body
                 path = require( 'path' ), //Utilities for dealing with file paths
                 mongoose = require( 'mongoose' ); //MongoDB integration

                 //Create server
                 app = express();

                 //Where to serve static content
                 app.use( express.static( path.join( app_root, 'site') ) );
                 app.use(bodyParser());

                 //Start server
                 port = 4711;

                 app.listen( port, function() {
                 $l( 'Express server listening on port %d in %s mode', port, app.settings.env );
                 });
                 We start off by loading modules required for this project: Express for creating HTTP server, Path for dealing with file paths,
                 and mongoose for connecting with db. We then create Express server and configure it using anonymous function. This ispretty standard configuration
                 and for our app we don’t actually need metOverride part. It is used for issuing PUT and DELETE HTTP requests directly fromform,
                 since forms normally only support GET and POST. Finally, we start server by running listen function. The port number used, in this case 4711,
                 could be any free port on your system. I simply used 4711 since it is unlikely to have been used by anything else. We are now ready to run our first server:

                 node server.js
                 If you open bw on http://localhost:4711 you should see something like this:


                 This is where we left off in Part 2, but we are now running onserver instead of directly from files. Great job! We can now start defining routes (URLs)
                 that server should react to. This will be our REST API. Routes are defined by using app followed by one of HTTP verbs get, put, post, and delete, which corresponds to
                 Create, Read, Update and Delete. Let us go back to server.js and definesimple route:

                 // Routes
                 app.get( '/api', function( request, response ) {
                 response.send( 'Lib API is running' );
                 });
                 The get function takesURL as first parameter andfunction as second. The function will be called with request and response objects.
                 Now, you can restart node and go to our spec URL:


                 Connect to db
                 Fantastic. Now, since we want to store our data in MongoDB, we need to defineschema. Add this to server.js:

                 //Connect to db
                 mongoose.connect( 'mongodb://localhost/lib_db' );

                 //Schemas
                 Book = new mongoose.Schema({
                 tt: String,
                 author: String,
                 releaseDate: Date
                 });

                 //Mds
                 BookMd = mongoose.md( 'Book', Book );

                 // Configure server
                 app.configure( function() {
                 //parses request body and populates request.body
                 app.use( express.bodyParser() );

                 //checks request.body for HTTP met overrides
                 app.use( express.metOverride() );

                 //perform route lookup based on url and HTTP met
                 app.use( app.router );

                 //Where to serve static content
                 app.use( express.static( path.join( app_root, 'site') ) );

                 //Show all errors in development
                 app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
                 });
                 As you can see, schema definitions are quite straight forward. They can be more advanced, but this will do for us. I also extractedmd (BookMd) from Mongo.
                 This is what we will be working with. Next up, we defineGET operation for REST API that will return all books:

                 //Getlist of all books
                 app.get( '/api/books', function( request, response ) {
                 return BookMd.find( function( err, books ) {
                 if( !err ) {
                 return response.send( books );
                 } else {
                 return $l( err );
                 }
                 });
                 });
                 The find function of Md is defined like this: function find (conditions, fields, ops, cb) – but since we wantfunction that returns all books we only need cb parameter.
                 The cb will be called with error object and array of found objects. If there was no error, we return array of objects to client using send function of response object.
                 Otherwise, we log error to console.

                 To test our API, we need to dolittle typing inJavaScript console. Restart node and go to localhost:4711 in your  bw. Open up JavaScript console.
                 If you are using Google Chrome, go to Vw->Developer->JavaScript Console. If you are using Firefox, install Firebug and go to Vw->Firebug.
                 Most other  bws will havesimilar console. In console type following:

                 jQ.get( '/api/books/', function( data, textStatus, jqXHR ) {
                 $l( 'Get response:' );
                 console.dir( data );
                 $l( textStatus );
                 console.dir( jqXHR );
                 });
                 …and press enter and you should get something like this:


                 Here I used jQ to make call to our REST API, since it was already loaded on page.
                 returned array is obviously empty, since we have not put anything into db yet. Let’s go and createPOST route that enables adding new items in server.js:

                 //Insertnew book
                 app.post( '/api/books', function( request, response ) {
                 book = new BookMd({
                 tt: request.body.tt,
                 author: request.body.author,
                 releaseDate: request.body.releaseDate
                 });

                 return book.save( function( err ) {
                 if( !err ) {
                 $l( 'created' );
                 return response.send( book );
                 } else {
                 $l( err );
                 }
                 });
                 });
                 We start by creatingnew BookMd, passing object with tt, author, and releaseDate atts. The data are collected from request.body.
                 This means that anyone calling this operation in API needs to supplyJSON object containing tt, author, and releaseDate atts.
                 Actually, caller can omit any or all atts since we have not made any of them mandatory.

                 We then call save function on BookMd passing incb in same way as with prev get route. Finally, we return saved BookMd.
                 The reason we return BookMd and not just “success” or similar string is that when BookMd is saved it will get _id attr from MongoDB,
                 which client needs when updating or deleting spec book. Let’s try it out again. Restart node and go back to console and type:

                 jQ.post( '/api/books', {
                 'tt': 'JavaScript good parts',
                 'author': 'Douglas Crockford',
                 'releaseDate': new Date( 2008, 4, 1 ).getTime()
                 }, function(data, textStatus, jqXHR) {
                 $l( 'Post response:' );
                 console.dir( data );
                 $l( textStatus );
                 console.dir( jqXHR );
                 });
                 ..and then

                 jQ.get( '/api/books/', function( data, textStatus, jqXHR ) {
                 $l( 'Get response:' );
                 console.dir( data );
                 $l( textStatus );
                 console.dir( jqXHR );
                 });

                 You should now getone-el array back from our server. You may wonder about this line:

                 'releaseDate': new Date(2008, 4, 1).getTime()
                 MongoDB expects dates in UNIX time format (milliseconds from start of Jan 1st 1970 UTC), so we have to convert dates before posting.
                 The object we get back, however, containsJavaScript Date object. Also note _id attr of returned object.


                 Let’s move on to creatingGET request that retrievessingle book in server.js:


                 //Getsingle book by id
                 app.get( '/api/books/:id', function( request, response ) {
                 return BookMd.findById( request.params.id, function( err, book ) {
                 if( !err ) {            return response.send( book ) }
                 else {            return $l( err )  }  })});

                 Here, we use colon notation (:id) to tell Express that this part of route is dynamic. We also use findById function on BookMd to getsingle result.
                 If you restart node, you can getsingle book by adding id prevly returned to URL like this:

                 jQ.get( '/api/books/4f95a8cb1baa9b8a1b000006', function( data, textStatus, jqXHR ) {
                 $l( 'Get response:' );
                 console.dir( data );
                 $l( textStatus );
                 console.dir( jqXHR );
                 });
                 Let’s create PUT (update) function next:

                 //Updatebook
                 app.put( '/api/books/:id', function( request, response ) {
                 $l( 'Updating book ' + request.body.tt );
                 return BookMd.findById( request.params.id, function( err, book ) {
                 book.tt = request.body.tt;
                 book.author = request.body.author;
                 book.releaseDate = request.body.releaseDate;

                 return book.save( function( err ) {
                 if( !err ) {
                 $l( 'book updated' );
                 return response.send( book );
                 } else {
                 $l( err );
                 }
                 });
                 });
                 })


                 This islittle bigr than prev ones, but is also pretty straight forward – we findbook by id, update its pops, save it, and send it back to client.

                 To test this, we need to use more general jQ ajax function. Again, in these examples, you will need to replace id property with one that matches item in your own db:

                 jQ.ajax({
                 url: '/api/books/4f95a8cb1baa9b8a1b000006',
                 type: 'PUT',
                 data: {
                 'tt': 'JavaScript The good parts',
                 'author': 'The Legendary Douglas Crockford',
                 'releaseDate': new Date( 2008, 4, 1 ).getTime()
                 },
                 success: function( data, textStatus, jqXHR ) {
                 $l( 'Put response:' );
                 console.dir( data );
                 $l( textStatus );
                 console.dir( jqXHR );
                 }
                 });
                 Finally, we create delete route:

                 //Deletebook
                 app.delete( '/api/books/:id', function( request, response ) {
                 $l( 'Deleting book with id: ' + request.params.id );
                 return BookMd.findById( request.params.id, function( err, book ) {
                 return book.rm( function( err ) {
                 if( !err ) {
                 $l( 'Book rmd' );
                 return response.send( '' );
                 } else {
                 $l( err );
                 }
                 });
                 });
                 });
                 …and try it out:

                 jQ.ajax({
                 url: '/api/books/4f95a5251baa9b8a1b000001',
                 type: 'DELETE',
                 success: function( data, textStatus, jqXHR ) {
                 $l( 'Delete response:' );
                 console.dir( data );
                 $l( textStatus );
                 console.dir( jqXHR );
                 }
                 });
                 So now our REST API is complete – we have support for all four HTTP verbs. What’s next? Well, until now I have left out keywords part of our books.
                 This isbit more complicated sincebook could have several keywords and we don’t want to rep them asstring, but rather array of strings.
                 To do that, we need another schema. AddKeywords schema right above our Book schema:

                 //Schemas
                 Keywords = new mongoose.Schema({
                 keyword: String
                 });
                 To addsub schema to existing schema, we use brackets notation like so:

                 Book = new mongoose.Schema({
                 tt: String,
                 author: String,
                 releaseDate: Date,
                 keywords: [ Keywords ]                       *
                 });
                 Also update POST and PUT:

                 //Insertnew book
                 app.post( '/api/books', function( request, response ) {
                 book = new BookMd({
                 tt: request.body.tt,
                 author: request.body.author,
                 releaseDate: request.body.releaseDate,
                 keywords: request.body.keywords       *
                 });
                 book.save( function( err ) {
                 if( !err ) {
                 $l( 'created' );
                 return response.send( book );
                 } else {
                 return $l( err );
                 }
                 });
                 });

                 //Updatebook
                 app.put( '/api/books/:id', function( request, response ) {
                 $l( 'Updating book ' + request.body.tt );
                 return BookMd.findById( request.params.id, function( err, book ) {
                 book.tt = request.body.tt;
                 book.author = request.body.author;
                 book.releaseDate = request.body.releaseDate;
                 book.keywords = request.body.keywords; *

                 return book.save( function( err ) {
                 if( !err ) {
                 $l( 'book updated' );
                 } else {
                 $l( err );
                 }
                 return response.send( book );
                 });
                 });
                 });
                 There we are, that should be all we need, now we can try it out in console:

                 jQ.post( '/api/books', {
                 'tt': 'Secrets of JavaScript Ninja',
                 'author': 'John Resig',
                 'releaseDate': new Date( 2008, 3, 12 ).getTime(),
                 'keywords':[
                 { 'keyword': 'JavaScript' },
                 { 'keyword': 'Reference' }
                 ]
                 }, function( data, textStatus, jqXHR ) {
                 $l( 'Post response:' );
                 console.dir( data );
                 $l( textStatus );
                 console.dir( jqXHR );
                 });
                 You now havefully functional REST server that we can hook into from our front-end.

                 Talking to server
                 In this part, we will cover connecting our bb app to server through REST API.

                 As we mentioned in chapter 3 bb Basics, we can retrieve mds fromserver using cl.fetch() by setting cl.url to be URL of API endpoint. Let’s update Lib cl to do that now:

                 app = app || {};

                 app.Lib = bb.Cl.x({
                 md: app.Book,
                 url: '/api/books'     *
                 });
                 This results in default impl of bb.sync assuming that API looks like this:

                 url             HTTP Method  Operation
                 /api/books      GET          Get array of all books
                 /api/books/:id  GET          Get book with id of :id
                 /api/books      POST         Addnew book and return book with id attr added
                 /api/books/:id  PUT          Update book with id of :id
                 /api/books/:id  DELETE       Delete book with id of :id
                 To have our app retrieve Book mds from server on page load, we need to update LibVw.
                 The bb documentation recommends inserting all mds when page is generated on server side,
                 rather than fetching them from client side once page is loaded. Since this chapter is trying to give youmore complete picture of how to communicate withserver,
                 we will go ahead and ignore that recommendation. Go to LibVw declaration and update init function as follows:

                 i: function() {                    // UPDATED
                 this.cl = new app.Lib();    // UPDATED
                 this.cl.fetch({reset: true});   *
                 this.r();

                 this.l2( this.cl, 'add', this.renderBook );
                 this.l2( this.cl, 'reset', this.render ); *
                 },
                 Now that we are populating our Lib from db using this.cl.fetch(), init() function no longer takesset of sample data as argument and doesn’t pass anything to app.Lib constructor.
                 You can now rm sample data from site/js/app.js, which should reduce it tosingle statement which creates LibVw:

                 // site/js/app.js

                 app = app || {};

                 $(function() {
                 new app.LibVw();  // UPDATED
                 });
                 We have also addedlistener on reset event. We need to do this since mds are fetched asynchronously after page is rendered. When fetch completes,
                 bb fires reset event, as requested by reset: true option, and our listener re-renders view. If you reload page now, you should see all books that are stored on server:


                 As you can see, date and keywords lookbit weird. The date delivered from server is converted intoJavaScript Date object and when applied to underscore tp,
                 it will use toString() function to display it. There isn’t very good support for formatting dates in JavaScript so we will use dateFormat jQ plugin to fix this.
                 Go ahead and download it from here and put it in your site/js/lib folder. Update book tp so that date is displayed with:

                 <li><%= $.format.date( new Date( releaseDate ), 'MMMM yyyy' ) %></li>
                 and addscript el for plugin

                 <script src="js/lib/jquery-dateFormat-1.0.js"></script>
                 Now, date on page should lookbit better. How about keywords? Since we are receiving keywords in array we need to execute some code that generatesstring of separated keywords.
                 To do that, we can omit equals character in tp tag which will let us execute code that doesn’t display anything:

                 <li><% _.e( keywords, function( keyobj ) {%> <%= keyobj.keyword %><% } ); %></li>
                 Here I iterate over keywords array using Underscore each function and print out every single keyword. Note that I display keyword using <%= tag.
                 This will display keywords with spaces between them.

                 Reloading page again should look quite decent:


                 Now go ahead and deletebook and then reload page: Tadaa! deleted book is back! Not cool, why is this?
                 This happens because when we get BookMds from server they have _id attr (notice underscore),
                 but bb expects id attr (no underscore). Since no id attr is present, bb sees this md as new and deletingnew md doesn’t need any synchronization.

                 To fix this, we can use parse function of bb.Md. The parse function lets you edit server response before it is passed to Md constructor. Addparse met to Book md:

                 parse: function( response ) {
                 response.id = response._id;
                 return response;
                 }
                 Simply copy val of _id to needed id attr. If you reload page, you will see that mds are actually deleted on server when you press delete bt.

                 Another, simpler way of making bb recognize id as its unique identifier is to set idAttribute of md toid.

                 If you now try to addnew book using form, you’ll notice that it issimilar story to delete – mds won’t get persisted on server.
                 This is because bb.Cl.add doesn’t automatically sync, but it is easy to fix. In LibVw, we find in views/lib.js change line reading:

                 this.cl.add( new Book( formData ) );
                 …to:

                 this.cl.create( formData );
                 Now, newly created books will get persisted. Actually, they probably won’t if you enterdate. The server expectsdate in UNIX timestamp format (milliseconds since Jan 1, 1970).
                 Also, any keywords you enter won’t be stored since server expects array of objects with attr ‘keyword’.

                 We’ll start by fixing date issue. We don’t really want users to manually enterdate in spec format, so we’ll use standard datepicker from jQ UI.
                 Go ahead and createcust jQ UI download containing datepicker from here. Add css theme to site/css/ and JavaScript to site/js/lib. Link to them in index.html:

                 <link rel="stylesheet" href="css/cupertino/jquery-ui-1.10.0.cust.css">
                 “cupertino” is name of style I chose when downloading jQ UI.

                 The JavaScript file must be loaded after jQ.

                 <script src="js/lib/jquery.min.js"></script>
                 <script src="js/lib/jquery-ui-1.10.0.cust.min.js"></script>
                 Now in app.js, binddatepicker to our releaseDate field:

                 app = app || {};

                 $(function() {
                 $( '#releaseDate' ).datepicker();
                 new app.LibVw();
                 });
                 You should now be able to pickdate when clicking in releaseDate field:


                 Finally, we have to make sure that form input is properly transformed into our storage format. Change addBook function in LibVw to:

                 addBook: function( e ) {
                 e.preventDefault();

                 formData = {};

                 $( '#addBook div' ).children( 'input' ).each( function( i, el ) {
                 if( $( el ).val() != '' )
                 {
                 if( el.id === 'keywords' ) {
                 formData[ el.id ] = [];
                 _.e( $( el ).val().split( ' ' ), function( keyword ) {
                 formData[ el.id ].push({ 'keyword': keyword });
                 });
                 } else if( el.id === 'releaseDate' ) {
                 formData[ el.id ] = $( '#releaseDate' ).datepicker( 'getDate' ).getTime();
                 } else {
                 formData[ el.id ] = $( el ).val();
                 }
                 }
                 // Clear input field val
                 $( el ).val('');
                 });

                 this.cl.create( formData );
                 },
                 Our change adds two checks to form input fields. First, we’re checking if current el is keywords input field,
                 in which case we’re splitting string on each space and creating array of keyword objects.

                 Then we’re checking if current el is releaseDate input field, in which case we’re calling datePicker(“getDate”) which returnsDate object.
                 We then use getTime function on that to get time in milliseconds.

                 Now, you should be able to add new books with bothrelease date and keywords!


                 Summary
                 In this chapter, we made our app persistent by binding it toserver usingREST API.
                 We also looked at some problems that might occur when serializing and deserializing data and their sols.
                 We looked at dateFormat and datepicker jQ plugins and how to do some more advanced things in our Underscore tps. The code is avail here.

                 */
            }
            AVAIL = function () {
                $.x('x');
                Ap = {M: {}, C: {}, V: {}, T: {}}

                Ap.T.Avail = function (model) {
                    return $.d('g', 400, 100).mar(20).A(
                        $.h4(model.g('c')).id('avail').C('y', 'r'),
                        $.br(), $.sp('delete').id('deleteAvail'),
                        $.sp(' '), $.sp('edit').id('editAvail'),
                        $.sp(' '), $.cb().id('selAvail'))
                }
                Ap.M.Avail = M$({urlRoot: '/avail'})
                Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
                Ap.V.Avail = Bb.V.e({

                    r: function () {
                        this.$el.A(Ap.T.Avail(this.model))
                        return this
                    },
                    ev: {
                        'click #deleteAvail': 'deleteAvail',
                        'click #editAvail': 'editAvail',
                        'blur #avail': 'changeAvail'
                    },
                    changeAvail: function () {
                        this.$el.fi('#avail').at('contenteditable', 'false')
                        newAvail = this.$el.fi('#avail').text()
                        this.model.s('c', newAvail)
                        this.model.save()
                    },
                    deleteAvail: function () {
                        this.model.destroy()
                        this.$el.rm()
                    },

                    editAvail: function () {
                        this.$el.fi('#avail').at('contenteditable', 'true')
                    }

                })
                Ap.V.Avails = Bb.V.e({
                    el: '#availsDiv',
                    I: function () {
                        this.render()
                    },
                    R: function () {
                        var t = this
                        t.collection.fetch({
                            success: function () {
                                t.$el.html('')
                                t.$el.A("<h1>Avails List</h1>")
                                t.collection.each(function (m) {
                                    t.$el.A(Ap.V.Avail({model: m}).render().el)
                                    return t
                                }, t)
                            }
                        })
                    }
                })
                //  avs=Ap.C.Avails()
                //  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
                $.ip('new avail').id('newAvail').A()

                $.bt('ok', function () {
                    Ap.M.Avail({
                        c: $('#newAvail').v()
                    }).save()

                    v.render()

                }).A()
                $.dI('availsDiv')
                $.ip('new avail').id('newAvail').A()
                $.bt('ok', function () {
                    var m = Ap.M.Avail({
                        c: qiv('newAvail')
                    })
                    m.save()
                    m.on('destroy', function () {
                        alert('i am the model and i was destroyed')
                    })
                    v.render()
                })
                $.dI('availsDiv')


                Ap.T.Avail = function (model) {
                    return $.d('g', 400, 100).mar(20).A(
                        $.h4(model.g('c')).id('avail').col('y', 'r'),
                        $.br(),
                        $.sp('delete').id('deleteAvail'),
                        $.sp(' '), $.sp('edit').id('editAvail'),
                        $.sp(' '), $.cb().id('selAvail')
                    )
                }
                Ap.M.Avail = Bb.M.e({urlRoot: '/avail'})
                Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
                Ap.V.Avail = Bb.V.e({

                    r: function () {
                        this.q(
                            Ap.T.Avail(this.model)
                        )
                        return this
                    },
                    ev: {
                        'click #deleteAvail': 'deleteAvail',
                        'click #editAvail': 'editAvail',
                        'blur #avail': 'changeAvail'
                    },
                    changeAvail: function () {
                        qq(this.$el.find('#avail')).cE(0)
                        var newAvail = this.$el.find('#avail').text()
                        this.model.s('c', newAvail)
                        this.model.save()
                    },

                    deleteAvail: function () {
                        this.model.destroy()
                        this.$el.remove()
                    },
                    editAvail: function () {

                        this.$el.find('#avail').cE(1)

                    }

                })

                Ap.V.Avails = Bb.V.e({
                    el: '#availsDiv',
                    i: function () {
                        this.render()
                    },
                    r: function () {
                        var t = this
                        t.collection.fetch({
                            success: function () {
                                t.q.H('')

                                t.q($.h1('Avails List'))

                                t.e(
                                    function (m) {
                                        t.q(
                                            Ap.V.Avail({m: m}).r().el)
                                        return t
                                    }, t)

                            }
                        })
                    }
                })
                avs = Ap.C.Avails.o()

                avs.on('destroy', function (j) {
                    alert('i am col and i was destroyed')
                    v.trigger('modelDeleted')
                })

                v = Ap.V.Avails.o({cl: avs})


                v.on('modelDeleted', function () {
                    alert('modDel')
                })

                Bb.M.e({
                    d: {prop: 3},
                    test: function () {
                        $(this.get('prop'))
                    },
                    test2: function (a) {
                        $l('prop: ' + this.get('prop'))
                    },
                    happy: function (a) {
                        this.test2(a)
                    }
                })


            }
            DIRTPAGE = function () {
                $.x()

                var newMsBox, newTopic, newMs, searchBox

                MsM = Bb.M.e({})
                MsC = Bb.C.e({m: 'MsM'})
                MsView = Bb.V.e({})
                MssView = Bb.V.e({})

                $.h1().A(
                    $.a('Dirtpage', '/wap/dirtpage/')
                ).A()
                $.dI('content')
                if (wappyPam) {

                    newMsBox = $.d().WH('auto').A(
                        $.h1('new ms'),
                        $.ip().K('form-control').id('newMs'),
                        $.bt('ok', function () {
                            var newMs = $('#newMs').v()
                            $.P('messages', {
                                tpc: wappyPam, ms: newMs
                            }, function () {
                                loadResults()
                            })
                        }))
                    $('#cont').A($.h1('the ' + wappyPam + ' page'),
                        newMsBox, $.dI('res'))
                    function loadRes() {
                        $.G('topics/' + wappyPam, function (msgs) {
                            $('#results').ht($.h5('len: ' + msgs.length))
                            _.e(msgs, function (ms) {
                                $('#res').A($.h6(ms.ms))
                            })
                        })
                    }

                    loadRes()
                }
                else {
                    newMsBox = $.d().WH('auto').A(
                        $.h1('new message'),
                        $.ip().K('form-control').id('newTopic'),
                        $.ip().K('form-control').id('newMs'),
                        $.bt('ok', function () {
                            newTopic = $('#newTopic').v()
                            newMs = $('#newMs').v()
                            $.P('msgs', {topic: newTopic, message: newMs}, function () {
                            })
                        })
                    )
                    searchBox = $.d().WH('auto').A(
                        $.h1('search'),
                        $.ip().K('form-control').id('searchInput'),
                        $.bt('ok', function () {
                            window.location = '/wap/dirtpage/' + $('#searchInput').v()
                            searchInput = $('#searchInput').v()
                            $.G('topics/' + searchInput, function (msgs) {
                                $('#res').ht($.h5('len: ' + msgs.length))
                                _.e(msgs, function (ms) {
                                    $('#res').A($.h6(ms.ms))
                                })
                            })
                        })
                    )
                    $.dI('res')
                    $('#cont').A(newMsBox, searchBox)
                    $.eG('msgs', function (ms) {
                        $('#res').A($.h2().A(
                                $.a('topic: ' + ms.topic, '/wap/dirtpage/' + ms.topic)),
                            $.h3('ms: ' + ms.ms)
                        )
                    })
                }
            }
            FETCH = EVTSAVE = function () {
                m = Bb.M.e({n: 'j'})
                Don = Bb.M.e({
                    d: {n: null, sprink: 0, cream: 0},
                    u: function () {
                        return this.id ? '/dn/' + this.id : '/dn'
                    }
                })
                bc = bostonCream = Don.o({n: 'Bos', cream: 1})
                bc.s({sprink: 1}).S() //save
                Dons = Bb.C.e({m: Don, url: "/dn"})
                dons = Dons.o()
                dons.fetch()
                // donuts.at(0); -> gets donuts by index.
                // donuts.get(0); -> gets donuts by id.
                // donuts.each(function(d){$l(d.get("name"))})
                // donuts.select(function(d){return d.get("name").length>2})// Select donuts with names longer than 2
                // donuts.map(function(d){return d.get("name")})
                Shop = Bb.M.e({

                    i: function () {
                        this.dons = Dons()
                        this.dons.url = 'shops/' + this.id + "/dn"
                    },
                    df: {n: "z"}
                }).o()
                Shop.oA(function (dn) {
                    alert("added " + dn.g('n'))
                })
                lem = Shop.dons.A({n: "Lem"})
                ev = Bb.E()
                ev.b("fun:had", function () {
                    alert("wee!")
                })
                ev.tr("fun:had")  //it'll alert "wee!"
            }
            MODDONUT = function () {
                m = bbM({n: 'j'})
                Donut = bbM({

                    d: {
                        n: null,
                        sparkles: false,
                        cream_filled: false
                    },

                    u: function () {
                        var t = this
                        return t.id ? '/donuts/' + t.id : '/donuts'
                    }

                })
                bostonCream = Donut({
                    n: 'Boston Cream',
                    cream_filled: true
                })
                bostonCream.s({sprinkles: true})
                bostonCream.S() //save
                Donuts = bbC({

                    m: Donut,

                    url: "/donuts"

                })
                donuts = Donuts()
                donuts.fetch()// donuts.at(0); -> gets donuts by index.
                // donuts.get(0); -> gets donuts by id.
                // donuts.each(function(d){$l(d.get("name"))})
                // donuts.select(function(d){return d.get("name").length>2})// Select donuts with names longer than 2
                // donuts.map(function(d){return d.get("name")})
                DonutShop = bbM({

                    defaults: {n: "Untitled"},

                    initialize: function () {
                        var t = this

                        t.donuts = Donuts()
                        t.donuts.url = 'donut_shops/' + t.id + "/donuts"
                    }
                })
                donutShop.oA(function (donut) {
                    alert("added " + donut.get("name"))
                })
                lemonFilled = donutShop.donuts.a({
                    n: "Lemon Filled"
                })
                a = Eve()
                a.o("fun:had", function () {
                    alert("wee!")
                });

                a.e("fun:had")//it'll alert "wee!"


            }
            FETCH = EVTSAVE = function () {

                m = Bb.M.x({
                    n: 'j'
                })


                Don = $M({
                    //defaults
                    d: {n: null, sprink: 0, cream: 0},
                    //u? url?
                    u: function () {
                        return '/dn/' + this.id || ''
                    }
                })

                bc = bostonCream = Don({n: 'Bos', cream: 1})
                bc.s({sprink: 1}).S()  //save

                Dons = $Cl({m: Don, url: "/dn"})

                dons = Dons()
                dons.fetch() //f F


                dons.at(0)  // a -> gets donuts by index.
                dons.get(0) // g   -> gets donuts by id.
                dons.each(function (d) { // e
                    $l(d.get("name"))
                })


                dons.select(function (d) {//sl
                    return d.get("name").length > 2
                })// Select donuts with names longer than 2

                dons.map(function (d) {//m
                    return d.get("name")
                })


                Shop = $m({
                    i: function () {
                        this.dons = Dons()
                        this.dons.url = 'shops/' + this.id + "/dn"
                    }, df: {n: "z"}
                })

                Shop.oA(function (dn) { //on ? alert added?
                    alert("added " + dn.g('n'))
                })

                lem = Shop.dons.A({
                    n: "Lem"
                })

                //////

            }
            MOD = function () {

                m = bbM({n: 'j'})


                Donut = bbM({

                    d: {
                        n: null,
                        sparkles: false,
                        cream_filled: false
                    },

                    u: function () {
                        var t = this
                        return t.id ? '/donuts/' + t.id : '/donuts'
                    }

                })


                bostonCream = Donut({
                    n: 'Boston Cream',
                    cream_filled: true
                })


                bostonCream.s({sprinkles: true})

                bostonCream.S() //save

                Donuts = bbC({

                    m: Donut,

                    url: "/donuts"

                })

                donuts = Donuts()

                donuts.fetch()// donuts.at(0); -> gets donuts by index.
                // donuts.get(0); -> gets donuts by id.
                // donuts.each(function(d){$l(d.get("name"))})
                // donuts.select(function(d){return d.get("name").length>2})// Select donuts with names longer than 2
                // donuts.map(function(d){return d.get("name")})

                DonutShop = bbM({

                    defaults: {n: "Untitled"},

                    initialize: function () {
                        var t = this

                        t.donuts = Donuts()
                        t.donuts.url = 'donut_shops/' + t.id + "/donuts"
                    }
                })

                donutShop.oA(function (donut) {
                    alert("added " + donut.get("name"))
                })


                lemonFilled = donutShop.donuts.a({
                    n: "Lemon Filled"
                })


                a = Eve()

                a.o("fun:had", function () {
                    alert("wee!")
                });

                a.e("fun:had")//it'll alert "wee!"


            }
            OSYNC = function () {
                $.x('x', 'osync')
                Bb.sync = function (met, md) {
                    $l(met + ': ' + _.jS(md))
                    md.s('id', 1)
                }
                bk = new Bb.M({
                    tt: "The Rough Riders",
                    au: "Theodore Roosevelt"
                })
                bk.S()
                bk.S({au: "Teddy"})
                // save accepts success and error cbs in the options hash,
                // which will be passed the args (md, resp, ops).
                // If a server-side validation fails, return a non-200 HTTP response code,
                // along with an error response in text or JSON.
                bk.save("au", "F.D.R.", {
                    error: function () {
                        $l('error')
                    },
                    success: function () {
                        $l('success')
                    }
                })
            }
            function learnBbSynd() {
                /*



                 bb’s Sync API
                 We prevly discussed how bb supports RESTful persistence via its fetch() and create() mets on Cls and save(), and destroy() mets on Mds.
                 Now we are going to takecloser look at bb’s sync met which underlies these operations.

                 The bb.sync met is integral part of bb.js. It assumesjQ-like $.ajax() met, so HTTP pams are organized based on jQ’s API.
                 Since some legacy servers may not support JSON-formatted requests and HTTP PUT and DELETE operations,
                 bb can be configured to emulate these capabilities using two configuration vars shown below with their default vals:

                 bb.emulateHTTP = false; // set to true if server cannot handle HTTP PUT or HTTP DELETE
                 bb.emulateJSON = false; // set to true if server cannot handle app/json requests
                 The inline bb.emulateHTTP option should be set to true if extended HTTP mets are not supported by server.
                 The bb.emulateJSON option should be set to true if server does not understand MIME type for JSON.


                 Lib = bb.Cl.x({ url : fn() { return '/lib'}})

                 // Define atts for our md
                 attrs = {
                 tt  : "The Tempest",
                 author : "Bill Shakespeare",
                 length : 123
                 };

                 // Createnew Lib instance
                 lib = new Lib;

                 // Createnew instance ofmd within our cl
                 lib.create(attrs, {wait: false});

                 // Update with just emulateHTTP
                 lib.first().save({id: '2-the-tempest', author: 'Tim Shakespeare'}, {
                 emulateHTTP: true
                 });

                 // Check ajaxSettings being used for our request
                 $l(this.ajaxSettings.url === '/lib/2-the-tempest'); // true
                 $l(this.ajaxSettings.type === 'POST'); // true
                 $l(this.ajaxSettings.contentType === 'app/json'); // true

                 // Parse data for request to confirm it is as expected
                 data = JSON.parse(this.ajaxSettings.data);
                 $l(data.id === '2-the-tempest');  // true
                 $l(data.author === 'Tim Shakespeare'); // true
                 $l(data.length === 123); // true
                 Similarly, we could just update using emulateJSON:

                 lib.first().save({id: '2-the-tempest', author: 'Tim Shakespeare'}, {
                 emulateJSON: true
                 });

                 $l(this.ajaxSettings.url === '/lib/2-the-tempest'); // true
                 $l(this.ajaxSettings.type === 'PUT'); // true
                 $l(this.ajaxSettings.contentType ==='app/x-www-form-urlencoded'); // true

                 data = JSON.parse(this.ajaxSettings.data.md);
                 $l(data.id === '2-the-tempest');
                 $l(data.author ==='Tim Shakespeare');
                 $l(data.length === 123);
                 bb.sync is called every time bb tries to read, save, or delete mds. It uses jQ or Zepto’s $.ajax() impls to make these RESTful requests, however this can be overridden as per your needs.

                 Overriding bb.sync

                 The sync fn may be overridden globally as bb.sync, or atfiner-grained level, by addingsync fn tobb cl or to individual md.

                 Since all persistence is handled by bb.sync fn, alternative persistence layer can be used by simply overriding bb.sync withfn that has same signature:

                 bb.sync = fn(met, md, ops) {
                 };
                 The metMap below is used by standard sync impl to map met parameter to HTTP operation and illustrates type of action required by each met argument:

                 metMap = {
                 'create': 'POST',
                 'update': 'PUT',
                 'patch':  'PATCH',
                 'delete': 'DELETE',
                 'read':   'GET'
                 };
                 If we wanted to replace standard sync impl with one that simply logged calls to sync, we could do this:

                 id_counter = 1;
                 bb.sync = fn(met, md) {
                 $l("I've been passed " + met + " with " + _.jS(md));
                 if(met === 'create'){ md.set('id', id_counter++); }
                 };
                 Note that we assignunique id to any created mds.

                 The bb.sync met is intended to be overridden to support other persistence backends.
                 The built-in met is tailored tocertain breed of RESTful JSON APIs - bb was originally extracted fromRuby on Rails app, which uses HTTP mets like PUT in same way.

                 The sync met is called with three pams:

                 met: One of create, update, patch, delete, or read
                 md: The bb md object
                 ops: May include success and error mets
                 Implementingnew sync met can use following pattern:

                 bb.sync = fn(met, md, ops) {

                 fn success(result) {
                 // Handle successful results from MyAPI
                 if (ops.success) {
                 ops.success(result);
                 }
                 }

                 fn error(result) {
                 // Handle error results from MyAPI
                 if (ops.error) {
                 ops.error(result);
                 }
                 }

                 ops || (ops = {});

                 switch (met) {
                 case 'create':
                 return MyAPI.create(md, success, error);

                 case 'update':
                 return MyAPI.update(md, success, error);

                 case 'patch':
                 return MyAPI.patch(md, success, error);

                 case 'delete':
                 return MyAPI.destroy(md, success, error);

                 case 'read':
                 if (md.cid) {
                 return MyAPI.find(md, success, error);
                 } else {
                 return MyAPI.findAll(md, success, error);
                 }
                 }
                 };
                 This pattern delegates API calls tonew object (MyAPI), which could bebb-style class that supports evs.
                 This can be safely tested separately, and potentially used with libraries other than bb.

                 There are quitefew sync impls out there. The following examples are all avail on GitHub:

                 bb localStorage: persists to  bw’s local storage
                 bb offline: supports working offline
                 bb Redis: uses Redis key-val store
                 backbone-parse: integrates bb with Parse.com
                 backbone-websql: stores data to WebSQL
                 bb Caching Sync: uses local storage as cache for other sync impls
                 Dependencies
                 The official bb.js documentation states:

                 bb’s only hard dependency is either Underscore.js ( >= 1.4.3) or Lo-Dash. For RESTful persistence, history support via bb.Rt and DOM manipulation with bb.Vw, include json2.js,
                 and either jQ ( >= 1.7.0) or Zepto.
                 What this translates to is that if you require working with anything beyond mds, you will need to includeDOM manipulation lib
                 such as jQ or Zepto. Underscore is primarily used for its utility mets (which bb relies upon heavily) and json2.js for legacy  bw JSON support if bb.sync is used.

                 */

            }


        }
function templApps(){
    // extending Bb? -> https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views

    TP = function () {
        $.x().A(
            a = _.tp("<div>hello:<%=n%></div>")({n: 'moe'}),
            b = _.tp('<b><%-tag%></b>', {tag: '<script>'}), // <%- vs <%= ?
            c = _.tp(
                '<%_.e(peep,function(name){%>' +
                '<li>' + '<%=name%>' + '</li>' +
                '<%})%>'
                , {peep: ['moe', 'curly', 'larry']})
        )

    }
    TMP = function () {
        $.x('r');
        $V({
            t: 'li', x: 'some-per', k: 'per',
            tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),
            r: function () {
                this.A().A(this.tp(this.model.toJSON()))
            },
            i: function () {
                $l(this.model);
                this.r()
            }
        })({m: Per = $M({d: {n: 'j', a: 20, o: 'p'}})()})
    }

    TMPWORKS = function () {
        $.x('b')

        data = {n: 'j', a: 20, o: 'p'}
        $V({
            t: 'li', i: function () {
                $l(this.model)
                this.r()
            },

            r: function () {
                this.A().A(
                    $.h1(this.tp(this.model.toJSON())))
            },

            tp: tp = _.tp(
                '<%=n%> ( ((( (((( -  -<%=a%>-  - )))) )) ) - <%=o%>'
            ),


            x: 'some-per',
            k: 'per'

        })({
            m: Per = $M()(data)//=== M({df:data})()
        })

    }
    TMP = function () {
        $.x('r');

        data = {n: 'j', a: 20, o: 'p'}
        $V({
            t: 'li',
            i: function () {
                $l(this.model);
                this.r()
            },
            r: function () {
                this.A().A(this.tp(this.model.toJSON()))
            },
            tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),
            x: 'some-per',
            k: 'per'
        })({
                m: Per = $M({
                    d: data
                })()
            }
        )
    }
    PLV = function () {
        $.x('o', 'hi');
        $l('PLV')

        Per = $M({//name, age, occ
            d: {n: 'a', a: 20, o: 'p'}
        })

        p0 = Per()
        p1 = Per({n: 'b'})
        p2 = {n: 'c'}

        PerV = $V({
            t: 'li',
            x: 'some-per',  // id
            i: function () {
                this.r()
            }, //??
            r: function () {
                this.q.A('fasdfsfasd')

                this.q.A(
                    this.tp(
                        this.model
                    )
                )

            },


            k: 'per',   // className
            tp: tp = _.tp('fo real? <%= n %> (<%= a %>) - <%= o %>'),
        })


        pV = PerV({m: p0})
        PepC = $Cl({m: Per})
        pC = PepC()
        pC.add([p0, p1, p2])
        PepV = $V({
            cl: PepC,
            el: ul = $.ul(),
            r: function () {
                ul = this.q.E()
                this.J(function (md) {
                    PerV({m: md}, ul)
                })
            }
        })
        pCV = PepV({cl: pC})


        $.in(.2, function () {
            pCV.r()
        }, '*')


        $.in(.4, function () {
            pCV.r()
        }, '*')


    }
    BBVTdArr = [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]

    BBVT = function () {
        $.x('x', 'bb view and template');
        listTp();
        m = $M()({d: BBVTdArr})
        $.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')
        Vw = $V({
            q: '#ct',
            i: function (op) {
                $l(op.blOp);
                this.tp = $('#list-tp').children()
            },
            r: rFn,
            ev: {'click button': 'r'}
        })
        v = Vw({m: m, blOp: 'emp!'})
    }
    BBVT = function () {
        $.x('x', 'bb view and template');
        listTp();
        m = $M()({d: BBVTdArr})


        $.d('y').id('ct').A(
            $.bt('Load', function () {
                v.r()
            }),
            $.ul().id('list'))


        Vw = $V({
            q: '#ct',

            i: function (op) {
                $l(op.blOp);

                this.tp = $('#list-tp')
                    .children()
            },

            r: rFn2,


            events: {'click button': 'r'}

        })


        v = Vw({zm: m, blOp: 'emp!'})

    }
    TP = function () {
        $.x().A(
            a = _.tp("<div>hello:<%=n%></div>")({n: 'moe'}),

            b = _.tp('<b><%-tag%></b>', {tag: '<script>'}),
            // <%- vs <%= ?


            c = _.tp(
                '<%_.e(peep,function(name){%>' +
                '<li>' + '<%=name%>' + '</li>' +
                '<%})%>'
                , {peep: ['moe', 'curly', 'larry']}
            )
        )
    }
    TP = function () {
        z()

        c1 = tp("hello: <%= name %>", {name: 'moe'})

        c1b = tp("hello: <%= name %>")({name: 'moe'})

        c2 = tp(
            "<% _e(people, function(name){%>  " +
            "<li>  " +
            "<%= name %>  " +
            "</li>  " +
            "<% }) %>",

            {people: ['moe', 'curly', 'larry']}
        )

        c3 = tp("<b>  <%- tag %>  </b>", {tag: '<script>'})  // <%- vs <%= ?

        $b()(c2)

    }

    TP = function () {
        z()

        c1 = tp("hello: <%= name %>", {name: 'moe'})

        c1b = tp("hello: <%= name %>")({name: 'moe'})

        c2 = tp(
            "<% _e(people, function(name){%>  " +
            "<li>  " +
            "<%= name %>  " +
            "</li>  " +
            "<% }) %>",

            {people: ['moe', 'curly', 'larry']}
        )

        c3 = tp("<b>  <%- tag %>  </b>", {tag: '<script>'})  // <%- vs <%= ?

        $b()(c2)

    }
    CATZ = function () {
        z()


        //tempScr('cat', [thead()(tr().k('header')(  th()('Name') )  ), tbody()]).a()


        //tempScr('cats', [td()("<%= name =>")]).a()

        //Temp('cat1', [thead()(tr().k('header')(  th()('Name') )  ), tbody()]).a()

        //Temp('cats1', [td()( "<%= name =>" )]).a()


        d = _d().w(500).h(500).c('y').id('content').a()

        MyApp = new Backbone.Marionette.Application()

        MyApp.addRegions({mainRegion: "#content"})


        AngryCat = Backbone.Model.extend({

            rankUp: function () {
                this.set({
                    rank: this.get('rank') - 1
                })
            },

            rankDown: function () {
                this.set({
                    rank: this.get('rank') + 1
                })
            }

            //,  defaults:{rank:0}
        })


        AngryCats = Backbone.Collection.extend({

            model: AngryCat,

            initialize: function (cats) {
                var rank = 1


                // _.each(cats, function(cat){ cat.set('rank', rank); ++rank })

                var self = this;

                MyApp.on('rank:up', function (cat) {
                    console.log('rank up');

                    if (cat.get('rank') === 1) {
                        // can't increase rank of top-ranked cat
                        return true
                    }

                    self.rankUp(cat)
                    self.sort()
                    self.trigger('reset')

                })
                MyApp.on('rank:down', function (cat) {
                    console.log('rank down');

                    if (cat.get('rank') === self.size()) {
                        // can't decrease rank of lowest ranked cat
                        return true
                    }

                    self.rankDown(cat)
                    self.sort()
                    self.trigger('reset')

                })
            },


            rankUp: function (cat) {
                // find the cat we're going to swap ranks with

                var rankToSwap = cat.get('rank') - 1
                var otherCat = this.at(rankToSwap - 1)

                // swap ranks
                cat.rankUp()
                otherCat.rankDown()
            },
            rankDown: function (cat) {
                // find the cat we're going to swap ranks with
                var rankToSwap = cat.get('rank') + 1;
                var otherCat = this.at(rankToSwap - 1);
                // swap ranks
                cat.rankDown();
                otherCat.rankUp()
            },
            comparator: function (cat) {
                return cat.get('rank')
            }
        })


        AngryCatView = Backbone.Marionette.ItemView.extend({

            template: "#cat_template",
            tagName: 'tr',
            className: 'angry_cat',

            events: {
                'click .rank_up': 'rankUp',
                'click .rank_down': 'rankDown'
            },


            rankUp: function () {
                MyApp.trigger('rank:up', this.model);
                console.log('trigger rank up')
            },


            rankDown: function () {
                MyApp.trigger('rank:down', this.model);
                console.log('trigger rank down')
            }


        })


        AngryCatsView = Backbone.Marionette.CompositeView.extend({

            tagName: "table",
            id: "angry_cats",
            className: "table-striped table-bordered",

            template: "#cats_template",

            itemView: AngryCatView,

            appendHtml: function (collectionView, itemView) {
                collectionView.$("tbody").append(itemView.el)
            }

        })


        MyApp.addInitializer(
            function (options) {

                angryCatsView = new AngryCatsView({collection: options.cats})


                MyApp.mainRegion.show(angryCatsView)

            })


        MyApp.start({

            cats: new AngryCats([
                {name: 'Wet Cat', img: '/me.png', rank: 1},
                {name: 'Bitey Cat', img: '/guy.png', rank: 2},
                {name: 'Surprised Cat', img: '/chicks.png', rank: 3}
            ])

        })


    }
    CATZ = function () {
        z()


        //tempScr('cat', [thead()(tr().k('header')(  th()('Name') )  ), tbody()]).a()


        //tempScr('cats', [td()("<%= name =>")]).a()

        //Temp('cat1', [thead()(tr().k('header')(  th()('Name') )  ), tbody()]).a()

        //Temp('cats1', [td()( "<%= name =>" )]).a()


        d = _d().w(500).h(500).c('y').id('content').a()

        MyApp = new Backbone.Marionette.Application()

        MyApp.addRegions({mainRegion: "#content"})


        AngryCat = Backbone.Model.extend({

            rankUp: function () {
                this.set({
                    rank: this.get('rank') - 1
                })
            },

            rankDown: function () {
                this.set({
                    rank: this.get('rank') + 1
                })
            }

            //,  defaults:{rank:0}
        })


        AngryCats = Backbone.Collection.extend({

            model: AngryCat,

            initialize: function (cats) {
                var rank = 1


                // _.each(cats, function(cat){ cat.set('rank', rank); ++rank })

                var self = this;

                MyApp.on('rank:up', function (cat) {
                    console.log('rank up');

                    if (cat.get('rank') === 1) {
                        // can't increase rank of top-ranked cat
                        return true
                    }

                    self.rankUp(cat)
                    self.sort()
                    self.trigger('reset')

                })
                MyApp.on('rank:down', function (cat) {
                    console.log('rank down');

                    if (cat.get('rank') === self.size()) {
                        // can't decrease rank of lowest ranked cat
                        return true
                    }

                    self.rankDown(cat)
                    self.sort()
                    self.trigger('reset')

                })
            },


            rankUp: function (cat) {
                // find the cat we're going to swap ranks with

                var rankToSwap = cat.get('rank') - 1
                var otherCat = this.at(rankToSwap - 1)

                // swap ranks
                cat.rankUp()
                otherCat.rankDown()
            },
            rankDown: function (cat) {
                // find the cat we're going to swap ranks with
                var rankToSwap = cat.get('rank') + 1;
                var otherCat = this.at(rankToSwap - 1);
                // swap ranks
                cat.rankDown();
                otherCat.rankUp()
            },
            comparator: function (cat) {
                return cat.get('rank')
            }
        })


        AngryCatView = Backbone.Marionette.ItemView.extend({

            template: "#cat_template",
            tagName: 'tr',
            className: 'angry_cat',

            events: {
                'click .rank_up': 'rankUp',
                'click .rank_down': 'rankDown'
            },


            rankUp: function () {
                MyApp.trigger('rank:up', this.model);
                console.log('trigger rank up')
            },


            rankDown: function () {
                MyApp.trigger('rank:down', this.model);
                console.log('trigger rank down')
            }


        })


        AngryCatsView = Backbone.Marionette.CompositeView.extend({

            tagName: "table",
            id: "angry_cats",
            className: "table-striped table-bordered",

            template: "#cats_template",

            itemView: AngryCatView,

            appendHtml: function (collectionView, itemView) {
                collectionView.$("tbody").append(itemView.el)
            }

        })


        MyApp.addInitializer(
            function (options) {

                angryCatsView = new AngryCatsView({collection: options.cats})


                MyApp.mainRegion.show(angryCatsView)

            })


        MyApp.start({

            cats: new AngryCats([
                {name: 'Wet Cat', img: '/me.png', rank: 1},
                {name: 'Bitey Cat', img: '/guy.png', rank: 2},
                {name: 'Surprised Cat', img: '/chicks.png', rank: 3}
            ])

        })


    }
    TP = function () {
        $.x().A(
            a = _.tp("<div>hello:<%=n%></div>")({n: 'moe'}),
            b = _.tp('<b><%-tag%></b>', {tag: '<script>'}), // <%- vs <%= ?
            c = _.tp(
                '<%_.e(peep,function(name){%>' +
                '<li>' + '<%=name%>' + '</li>' +
                '<%})%>'
                , {peep: ['moe', 'curly', 'larry']})
        )

    }
    TMP = function () {
        $.x('r');
        $V({
            t: 'li', x: 'some-per', k: 'per',
            tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),
            r: function () {
                this.A().A(this.tp(this.model.toJSON()))
            },
            i: function () {
                $l(this.model);
                this.r()
            }
        })({m: Per = $M({d: {n: 'j', a: 20, o: 'p'}})()})
    }
    BBVT = function () {
        $.x('x', 'bb view and template');
        md = new Bb.M({d: [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]})


        $.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')

        $.dI('list-tp', [$.la()]).C('o')


        Vw = Bb.V.e({
            el: '#ct',
            i: function (op) {
                $l(op.blOp);
                this.tp = $('#list-tp').children()
            },
            rr: function () {
                var da, tp;
                $l('rr: ' + this.model.get('d')[0].h);//$.c('b').ab(300,300)
                da = this.model.get('d')
                tp = this.tp, ul = this.$el.find('ul')
                _.e(da, function (da) {
                    ul.A(tp.clone()
                        .find('a').hr('href', da.h).T(da.t).end())
                })
            },
            ev: {'click button': 'rr'}
        })
        vw = new Vw({blOp: 'empty!', model: md})
        return vw

    }
    BBVT = function () {
        $.x('x', 'bb view and template');


        $.dI('ct', [
                $.bt('Load'),
                $.ul().id('list')
            ]
        ).C('y')

        $.dI('list-tp', [$.la()]).C('o')


        v = $V({

            q: '#ct',

            events: {'click button': 'r'},

            r: function () {
                var da, tp, ul
                $l('RENDER')
                /*
                 $l('rr: '+ this.model.get('d')[0].h )
                 //$.c('b').ab(300,300)
                 da=this.model.get('d')
                 tp=this.tp
                 ul= this.$el.find('ul')
                 _.e(da, function(da){ul.A(tp.clone()
                 .find('a').hr('href', da.h)
                 .T(da.t).end())})
                 */
            },
            i: function (op) {
                $l(op.blOp)
                this.tp = $('#list-tp').children()
            }
        })({

            blOp: 'empty!',

            m: m = $M()({
                d: [
                    {t: 'a.com', h: 'a.com'},
                    {t: 'b.com', h: 'b.com'},
                    {t: 'c.com', h: 'c.com'}
                ]
            })

        })

    }
    BACKDEMO = function () {
        z()


        Temp('task', [

            lb('Task: '),
            tx().id('task_desc'),
            bt('add task').id('btn')])


        di('container').a()

        bbR({


            R: {
                '': 'first',
                'first': 'first',
                'second': 'second'
            },

            first: function () {
                $l('first')
            },
            second: function () {
                new Task()
                $l('second')
            }

        })()

        bbH()


        Task = bbV({

            el: $('#container'),

            i: function () {
                this.r()
            },

            r: function () {
                this.$el.html(temp('task'))
            },

            e: {'click button': 'add'},

            add: function () {
                alert(qiv('task_desc') + ' task added')
            }

        })


    }
    function vwTp() {
        BBVT1 = function () {
            $.x('x', 'bb view and template');
            md = new Bb.M({d: [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]})


            $.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')

            $.dI('list-tp', [$.la()]).C('o')


            Vw = Bb.V.e({
                el: '#ct',
                i: function (op) {
                    $l(op.blOp);
                    this.tp = $('#list-tp').children()
                },
                rr: function () {
                    var da, tp;
                    $l('rr: ' + this.model.get('d')[0].h);//$.c('b').ab(300,300)
                    da = this.model.get('d')
                    tp = this.tp, ul = this.$el.find('ul')
                    _.e(da, function (da) {
                        ul.A(tp.clone()
                            .find('a').hr('href', da.h).T(da.t).end())
                    })
                },
                ev: {'click button': 'rr'}
            })
            vw = new Vw({blOp: 'empty!', model: md})
            return vw

        }
        BBVT = function () {
            $.x('x', 'bb view and template');


            $.dI('ct', [
                    $.bt('Load'),
                    $.ul().id('list')
                ]
            ).C('y')

            $.dI('list-tp', [$.la()]).C('o')


            v = $V({

                q: '#ct',

                events: {'click button': 'r'},

                r: function () {
                    var da, tp, ul
                    $l('RENDER')
                    /*
                     $l('rr: '+ this.model.get('d')[0].h )
                     //$.c('b').ab(300,300)
                     da=this.model.get('d')
                     tp=this.tp
                     ul= this.$el.find('ul')
                     _.e(da, function(da){ul.A(tp.clone()
                     .find('a').hr('href', da.h)
                     .T(da.t).end())})
                     */
                },
                i: function (op) {
                    $l(op.blOp)
                    this.tp = $('#list-tp').children()
                }
            })({

                blOp: 'empty!',

                m: m = $M()({
                    d: [
                        {t: 'a.com', h: 'a.com'},
                        {t: 'b.com', h: 'b.com'},
                        {t: 'c.com', h: 'c.com'}
                    ]
                })

            })

        }
    }

    function clTp() {


        FLCL00 = function () {
            $.x('r', 'filtering a cl:')
            /*
             FlV = Bb.V.e({
             ev: {'click #run': 'runFilter'},
             runFilter: function(e){e.pD();
             this.fl = {
             // ... get the filter info from the DOM
             }; this.rr()},
             rr: function(){// get the filtered list from the collection
             // iterate over the filtered list and render the results in to the html array
             // populate the DOM with the resulting HTML
             HT=[]
             _.e(this.cl.where(this.fl),
             function(item){HT.push(
             _.tp($('my-item-template').H())(item.tJ())
             )})
             this.$el.html(HT); return this }
             })*/
            Cl = $$C({
                i: function () {
                }
            })
            cl = Cl({})


            /*
             cl.add([{a: 'f', b: 's'},
             {a: 't', b: 's'},
             {a:'f', b: 's'},
             {a: 's', b:'t'}
             ])


             res = cl.where({a:'f',b:'s'})
             */
            //http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
        }
        FLCL0 = function () {
            $.x('r', 'filtering a cl, but tp missing?!')
            // ... get the filter info from the DOM
            // get the filtered list from the collection
            // iterate over the filtered list and render the results in to the html array
            // populate the DOM with the resulting HTML

            FlV = $V({
                ev: {'click #run': 'runFilter'},
                runFilter: function (e) {
                    e.pD();
                    this.fl = {};
                    this.r()
                },
                r: function () {
                    HT = [];
                    _.e(this.cl.where(this.fl),
                        function (item) {
                            HT.push(_.tp($('my-item-template').H())(item.tJ()))
                        })
                    this.q.h(HT);
                    return this
                }
            })

            Cl = $$C({
                i: function () {
                    $l('fuck')
                }
            })
            cl = Cl()
            cl.add([{a: 'f', b: 's'}, {a: 't', b: 's'}, {a: 'f', b: 's'}, {a: 's', b: 't'}])
            res = cl.where({a: 'f', b: 's'})
            _.e(res, function (q) {
                var j = q.tJ();
                $.h1(j.a + ' !@@@##@ ' + j.b)
            })
//http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection

        }
        PEOPL = function () {
            $.x()
            Per = $$M({
                i: function () {
                    //this.oV(function(mod, err){$l(err)})
                },
                d: {n: 'doe', a: 30, j: 'wrk'},
                validate: function (ats) {
                    if (ats.age < 0) {
                        return 'a < 0!'
                    }
                },
                work: function () {
                    return this.g('n') + ' is working'
                }
            })
            p = Per({n: 'y', a: 34}) //p.oV(function (mod, z) {$l(z)})
            PerV = $$V({
                tn: 'li',
                k: 'person', x: 'some-person',
                i: function () {
                    this.r()
                },
                tp: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
                r: function () {
                    var t = this
                    //this works, but doesnt use a template
                    // t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))
                    t.H(
                        t.T(
                            t.j()
                        )
                    )
                }
            })
            pV = PerV({m: p})
            peepC = $$C({m: Per})
            pC = peepC([
                {n: 'rigo', a: 29},
                {n: 'j', a: 2},
                {n: 's', j: 'gx'}
            ])
            pC.add(p)
            pC.at(1).n('joejoe')
            pC.at(1).s('name', 'joejoe')
            PeepV = $$V({
                tn: 'ul', i: function () {
                    $l('hi')
                    $l(this.cl)
                }, r: function () {//var t=this
                    this.cl.each(function (p) {
                        var v, pV  //$l(p.g('n'))
                        pV = PerV.o({m: p}) //$l(pV.el)
                        this.$el.append(pV.el) //t.q( pV.el  )
                    }, this)
                }
            })
            pcv = PeepV({cl: pC})
            pcv.r()
            $.A(pcv.el)
        }
    }

    function rtrTp() {
        BACKDEMO0 = function () {
            $.x().d('yoo hoo').id('cont')

            Temp = function (i, h) {
                var s = ''
                return _.tp($('#' + i).html(), h || {})
                if (A(h)) {
                    _.e(h, function (h) {
                        s += h.oh()
                    })
                }
                s = "<script type='text/template'>" + s + "</script>"
                return $(s).id(i).A()
            }

            $R({
                rt: {'': 'f', 'f': 'f', 's': 's'},
                f: function () {
                    $l('fir')
                }, s: function () {
                    $l('sec')
                },
                task: function () {
                    t = new Task();
                    $l('t = new Task')
                }
            }, '+')


            Temp('task', [
                $.lb('Task: '),
                $.ip().id('task_desc'),
                $.bt('add task').id('btn')])

            Tsk = $V({
                el: $('#cont'),
                i: function () {
                    this.r()
                },
                r: function () {
                    this.$el.ht(Temp('task'))
                },
                e: {'click button': 'add'},
                add: function () {
                    alert($('#task_desc').v() + ' task added')
                }
            })
        }

        BACKDEMO1 = function () {
            $.x().d('yoo hoo').id('cont')


            $R({
                rt: {
                    '': 'f', 'f': 'f', 's': 's',
                    '/wap/items/q': q
                },

                q: function () {
                    alert('q')
                },
                f: function () {
                    $l('fir')
                },
                s: function () {
                    $l('sec')
                },

                task: function () {
                    t = new Task();
                    $l('t = new Task')
                }

            })


            Temp = function (i, h) {
                var s = ''

                return _.tp(
                    $('#' + i).html(), h || {}
                )

                if (A(h)) {
                    _.e(h, function (h) {
                        s += h.oh()
                    })

                }


                _str = "<script type='text/template'>" + _str + "</script>"


                str = $(s)

                return $(s).id(i).A()

            }


            /*


             Temp('task', [

             $.lb('Task: '),
             $.ip().id('task_desc'),
             $.bt('add task').id('btn')
             ])


             Tsk=$V({el: $('#cont'),

             i: function(){this.r()},
             r: function(){this.$el.ht( Temp('task') )},
             e: {'click button': 'add'},
             add: function(){alert( $('#task_desc').v() + ' task added')}

             })
             */

            $.bt('sfad', function () {
                r.n('/wap/items/q')
            })
        }
        BACKDEMO = function () {
            $.x()

            Temp = function (i, h) {
                var s = ''
                return _.tp($('#' + i).html(), h || {})
                if (A(h)) {
                    _.e(h, function (h) {
                        s += h.oh()
                    })
                }
                s = "<script type='text/template'>" + s + "</script>"
                return $(s).id(i).A()
            }

            Temp('task', [
                $.lb('Task: '),
                $.ip().id('task_desc'),
                $.bt('add task').id('btn')])

            $.dI('cont')

            $$R({
                rt: {
                    '': 'f',
                    'f': 'f',
                    's': 's'
                },
                f: function () {
                    $l('fir')
                },
                s: function () {
                    new Task()
                    $l('sec')
                }
            })

            Tsk = Bb.V.e({
                el: $('#cont'),
                i: function () {
                    this.r()
                },
                r: function () {
                    this.$el.ht(Temp('task'))
                },
                e: {'click button': 'add'},
                add: function () {
                    alert($('#task_desc').v() + ' task added')
                }
            })
        }
    }
}
function book(){


    BOOK = function () {
        $.fm()
        toBook = function () {
            Y.run('book')
        }
        s1.A(
            $.h1('BOOK').$(toBook),
            bookName = $.ip(),
            $.bt('new book', function () {
                $.P('newBook', {name: bookName.V()},
                    toBook)
            }),
            $.hr())

        $.Gj('books', function (bks) {
            s1.A($.h3('books:'))
            _.e(bks, function (bk) {
                s1.A($.sp().C('x').$(function () {
                        $.P('delBook', {book: bk._id}, toBook)
                    }),
                    $.bt(bk.name, function () {
                        s2.A($.h2('CHAPTER: ' + bk.name),
                            chapterTitleInput = $.ip(),
                            $.bt('new chapter',
                                function () {
                                    $.P('newChapter', {
                                        chapterTitle: chapterTitleInput.V(),
                                        book: bk._id
                                    }, function () {
                                        chapterView(bk, c)
                                    })
                                }), $.hr())
                        $.eGj('chapters', {book: bk._id}, function (ch) {
                            s2.A($.bt(ch.title, function () {
                                chapterView(bk, ch)
                            }), $.br(2))
                        })
                    }), $.br(2))
            })
        })


        chapterView = function (b, c) {
            s2.E();
            s1.E();
            s1.A($.h1('BOOK').$(toBook))
            $.Gj('chapters', {book: bk._id}, function (chapters) {
                s1.A($.h3('chapters:'))
                s2.A($.h3('pages:'))
                _.e(chapters, function (ch) {
                    s1.A($.sp('x').$(function () {
                            $.P('delChapter', {chapter: ch._id}, function () {
                                chapterView(bk, ch)
                            })
                        }),
                        $.bt(ch.title, function () {
                            chapterView(bk, ch)
                        }), $.br(2))
                })
            })
            s2.A($.h1('chapter: ' + ch.title))
            s2.A(pageNameInput = $.ip(),
                $.bt('new page', function () {
                    $.P('newPage', {
                        pageName: pageNameInput.V(), chapter: ch._id
                    })
                }), $.hr())
            $.eGj('/pages', {chapter: ch._id}, function (pg) {
                s2.A($.bt(pg.name, function () {
                    pageView(bk, ch, pg)
                }), $.br(2))
            })
        }
    }
    BOOK = function () {
        $.fm()
        toBook = function () {
            Y.run('book')
        }
        s1.A(
            $.h1('BOOK').$(toBook),
            bookName = $.ip(),
            $.bt('new book', function () {
                $.P('newBook', {name: bookName.V()},
                    toBook)
            }),
            $.hr())

        $.Gj('books', function (bks) {
            s1.A($.h3('books:'))
            _.e(bks, function (bk) {
                s1.A($.sp().C('x').$(function () {
                        $.P('delBook', {book: bk._id}, toBook)
                    }),
                    $.bt(bk.name, function () {
                        s2.A($.h2('CHAPTER: ' + bk.name),
                            chapterTitleInput = $.ip(),
                            $.bt('new chapter',
                                function () {
                                    $.P('newChapter', {
                                        chapterTitle: chapterTitleInput.V(),
                                        book: bk._id
                                    }, function () {
                                        chapterView(bk, c)
                                    })
                                }), $.hr())
                        $.eGj('chapters', {book: bk._id}, function (ch) {
                            s2.A($.bt(ch.title, function () {
                                chapterView(bk, ch)
                            }), $.br(2))
                        })
                    }), $.br(2))
            })
        })


        chapterView = function (b, c) {
            s2.E();
            s1.E();
            s1.A($.h1('BOOK').$(toBook))
            $.Gj('chapters', {book: bk._id}, function (chapters) {
                s1.A($.h3('chapters:'))
                s2.A($.h3('pages:'))
                _.e(chapters, function (ch) {
                    s1.A($.sp('x').$(function () {
                            $.P('delChapter', {chapter: ch._id}, function () {
                                chapterView(bk, ch)
                            })
                        }),
                        $.bt(ch.title, function () {
                            chapterView(bk, ch)
                        }), $.br(2))
                })
            })
            s2.A($.h1('chapter: ' + ch.title))
            s2.A(pageNameInput = $.ip(),
                $.bt('new page', function () {
                    $.P('newPage', {
                        pageName: pageNameInput.V(), chapter: ch._id
                    })
                }), $.hr())
            $.eGj('/pages', {chapter: ch._id}, function (pg) {
                s2.A($.bt(pg.name, function () {
                    pageView(bk, ch, pg)
                }), $.br(2))
            })
        }
    }
    pageView = function (bk, ch, pg) {
        s1.E();
        s2.E()
        s1.A($.h1('BOOK').$(ldr('book')))
        s1.A($.h1('CHAPTER ' + ch.title).$(function () {
            chapterView(book, ch)
        }))
        $.Gj('/pages', {chapter: ch._id},
            function (pgs) {
                s1.A($.h3('pages'))
                _.e(pgs, function (pg) {
                    s1.A($.bt(pg.name, function () {
                            sectionView(ch)
                        }), $.br(2)
                    )
                })
            })
        s2.A($.h1('page: ' + pg.name))
        $.eGj('/sections', {book: bk._id, chapter: ch._id, page: pg._id},
            function (sc) {
                s2.A($.bt(sc.section, function () {
                        sectionView(bk, ch, pg)
                    }), $.br(2)
                )
            })
    }
    pageView = function (bk, ch, pg) {
        s1.E();
        s2.E()
        s1.A($.h1('BOOK').$(ldr('book')))
        s1.A($.h1('CHAPTER ' + ch.title).$(function () {
            chapterView(book, ch)
        }))
        $.Gj('/pages', {chapter: ch._id},
            function (pgs) {
                s1.A($.h3('pages'))
                _.e(pgs, function (pg) {
                    s1.A($.bt(pg.name, function () {
                            sectionView(ch)
                        }), $.br(2)
                    )
                })
            })
        s2.A($.h1('page: ' + pg.name))
        $.eGj('/sections', {book: bk._id, chapter: ch._id, page: pg._id},
            function (sc) {
                s2.A($.bt(sc.section, function () {
                        sectionView(bk, ch, pg)
                    }), $.br(2)
                )
            })
    }
    OBJECT = function () {
        $.fm()
        s1.A('your objects', $.br(2), t = $.ip(),
            $.bt('new object', function () {
                $.P('newObj',
                    {t: t.V()})
            }))
        $.eG('objs', function (o) {

            s1.A($.h2(o.t).$(function () {
                s2.E($.h1(o.t), tt = $.ip(),
                    $.bt('new sub-object', function () {
                        $.P('newObj', {t: tt.V()})
                    }))
            }))
            _.e(o.i, function (i) {
                s1.A(h3(i))
            })
        })

    }
   /* BOOKVW = function () {
        $.dI('td)
        TdVw = $V({
            t: 'li',

            e: {
                'click .toggle': 'toggleCompleted',
                'dblclick label': 'edit',
                'keypress .edit': 'updateOnEnter',
                'click .destroy': 'clear',
                'blur .edit': 'close'
            },


            Item: function (o) {
                return $.d([$.cb().id('td_complete').at('checked', o.completed ? 'checked' : ''), o.tt])
            },


            i: function (ops) {
                this.ops = ops || {};
                this.model.on('change', _.b(this.r, this))
            }, //  access passed ops inyour view


            // Re-render tt of td item.
            r: function () {
                var v = this
                v.q.h(this.Item(this.md.J())) // this.md.atts ?
                v.input = v.$('.edit')
                return v
            },

            edit: function () {
            },    // executed when td label is double clicked
            close: function () {
            },  // executed when td loses focus
            updateOnEnter: function (e) {
            } // executed on each keypress when in td edit mode, but we'll wait for enter to get in action
        })
        ListVw = $V({
            r: function () {
                // Assume our md exposes items we will display in our list
                _.e(this.g('items'), function (i) {
                    // Createnew instance of ItemVw, passing it spec md item
                    // The itemVw's DOM el is appended after it
                    // has been rendered. Here, 'return this' is helpful
                    // as itemVw renders its md. Later, we ask for its output ("el")
                    this.A(TdVw({md: i}).r().q)
                }, this)
            }
        })
        tdVw = new TdVw()
        // log reference toDOM el that corresponds to view instance
        $l(tdVw.el); // logs <li></li>
    }*/
    
    BCL = function () {
        $.x().h1('BCL but whats up wit dose funcs?')


        BksC = $Cl({
            m: Bk = $M({
                d: {n: '', g: 'fun'},
                url: 'http://localhost:51377/api/Books'
            }),
            d: {pizzaTopping: 'pepperoni'}
        })


        cl1 = BksC()
        cl1.A([Bk({n: "Bk 1"}), {}, {}, Bk({n: "Bk 2"})])
        cl2 = BksC([bk1 = Bk({ID: 1, n: "Bk 1"}), bk2 = Bk({ID: 2, n: "Bk 2"})])
        cl2.A(bk3 = Bk({ID: 3, n: "Bk 3"}))

        add = function () {
            $l('add')
            cl2.A([
                bk4 = Bk({ID: 4, n: "Bk 4"}),
                bk5 = Bk({ID: 5, n: "Bk 5"})
            ])
        }

        add()
        addAt = function (n) {

            cl2.add(bk0 = Bk({n: "Bk 0"}), {at: n || 0})
        }
        change = function () {
            bk3 = Bk({ID: 3, n: "Bk 3"})
            cl2.add(bk3)
            bk3_changed = Bk({ID: 3, n: "Changed Model"})
            cl2.add(bk3_changed, {merge: true})
        }
    }
    BCL = function () {
        $.x().h1('BCL')
        Bk = Bb.M.e({
            d: {ID: '', n: ''},
            id: "ID",
            url: 'http://localhost:51377/api/Books'
        })
        BksC = Bb.C.e({m: Bk})
        cl1 = BksC.o()
        bk1 = Bk.o({ID: 1, n: "Bk 1"})
        bk2 = Bk.o({ID: 2, n: "Bk 2"})
        cl2 = BksC.o([bk1, bk2])
        bk3 = Bk.o({ID: 3, n: "Bk 3"})
        cl2.add(bk3)
        change = function () {
            bk3 = new Bk({ID: 3, n: "Bk 3"})
            cl2.add(bk3)
            bk3_changed = Bk.o({ID: 3, n: "Changed Model"})
            cl2.add(bk3_changed, {merge: true})
        }
        add = function () {
            bk4 = Bk.o({ID: 4, n: "Bk 4"})
            bk5 = Bk.o({ID: 5, n: "Bk 5"})
            cl2.add([bk4, bk5])
        }
        addAt = function (n) {
            bk0 = new Bk({ID: 0, n: "Bk 0"})
            cl2.add(
                bk0, {at: n || 0}
            )
        }

    }
    MODCHANGE = function () {
        $.x()
        Bk = $M({

            d: {ID: "", n: ""},
            i: function () {
                var bk = this;
                $l('init..')


                this.on('change', function () {
                    alert('change')
                    if (bk.hasChanged('ID')) {
                        alert('ID changed')
                    }
                    if (bk.hasChanged('n')) {
                        alert('n changed')
                    }

                })
            },

            showAlert: function () {
                alert('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
            }
        })
        bk = Bk({ID: 1, n: "a"})    // ChildBook = Bk.extend({})
    }
    MODCHANGE = function () {
        $.x()

        Bk = Bb.M.e({

            d: {ID: "", n: ""},
            initiate: function () {

                $l('init..')

                var that = this

                this.on('change', function () {
                    alert('change')
                    if (that.hasChanged('ID')) {
                        alert('ID changed')
                    }
                    if (that.hasChanged('n')) {
                        alert('n changed')
                    }
                })
            },

            showAlert: function () {
                alert('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
            }

        })
        // ChildBook = Bk.extend({})
        bk = Bk.o({ID: 1, n: "a"})
    }
    MODCHANGE = function () {
        $.x('x', 'modchange')
        Bk = $M({
            d: {ID: "ooooo", n: ""},
            i: function () {
                var bk = this;
                $l('init..')


                bk.$(function () {
                    $l('change')
                    g = G(arguments)
                    o = g[1]
                    m = g[0]

                    if (bk.hC('ID')) {
                        $l('ID changed')
                    }
                    // if(bk.hC('n')){$l('n changed') }
                    bk.hC('n', function () {
                        $l('n changed')
                    })
                })
            },
            show: function () {
                $l('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
            }
        })
        bk = Bk({ID: 1, n: "a"})
        bk.s({r: 'a'}, {a: 1, b: 2, c: 3})
        _.in(function () {
            bk.s('n', 'z', {a: 1, b: 2, c: 3})
            _.in(function () {
                bk.s({n: 'rfds'}, {a: 1, b: 2, c: 3})
            }, '*')

        }, '*')
    }
    BBSORT = function () {


        Chapter = Backbone.Model

        chapters = new Backbone.Collection

        chapters.comparator =
            //'page'
            function (a) {
                return _z(a)
            }

        chapters.add(
            new Chapter({page: 9, title: "The End"}))


        chapters.add(
            new Chapter({page: 5, title: "The Middle"}))


        chapters.add(
            new Chapter({page: 1, title: "The Beginning"}))


        $l(chapters.pluck('title'))


    }
}

function bbLocalStore(){

    LSTD = function () {
        $.x();
        $Ms('BBlS')
        Td = Bb.M.x({

            df: function () {
                return {
                    title: "empty td...",
                    order: Tds.nextOrder(),
                    done: false
                }
            },
            initialize: function () {
                if (!this.g("title")) {
                    this.s({title: this.df().title})
                }
            },
            toggle: function () {
                this.sv({done: !this.g("done")})
            }
        })
        TdList = Bb.C.x({
            model: Todo,
            localStorage: new Bb.LocalStorage("td-bb"),
            done: function () {
                return this.fl(function (td) {
                    return td.g('done')
                })
            },
            remaining: function () {
                return this.wo.apply(this, this.done())
            },

            nextOrder: function () {
                if (!_.z(this)) {
                    return 1
                }
                return this.la().g('order') + 1
            },

            comparator: function (td) {
                return td.g('order')
            }
        })
        Tds = new TdList
        TdVw = Bb.V.x({
            tagName: "li", //template: _.template($('#item-template').html()),
            events: {
                "click .toggle": "toggleDone",
                "dblclick .view": "edit", "click a.destroy": "clear",
                "keypress .edit": "updateOnEnter", "blur .edit": "close"
            },
            initialize: function () {
                var vw = this, md = vw.model
                vw.l2(md, 'change', vw.r)
                vw.l2(md, 'destroy', vw.rm)
            },
            r: function () {
                var vw = this, md = vw.model, q = vw.$el
                q.html(vw.template(md.J()))


                q.tK('done', md.g('done')) //

                vw.ip = vw.$('.edit')
                return vw
            },
            toggleDone: function () {
                this.model.toggle()
            },
            edit: function () {
                this.$el.k("editing");
                this.ip.fc()
            },
            close: function () {
                var vw = this, md = vw.model
                var v = vw.ip.v();
                if (!v) {
                    vw.clear()
                }
                else {
                    md.sv({title: v});
                    vw.$el.rK("editing")
                }
            },
            updateOnEnter: function (e) {
                if (e.keyCode == 13) {
                    this.close()
                }
            },
            clear: function () {
                this.ds()
            }

        })
        AppVw = Bb.V.x({
            el: $("#todoapp"),
            // statsTemplate: _.template($('#stats-template').html()), // Our template for the line of statistics at the bottom of the app.
            events: {
                "keypress #new-todo": "createOnEnter",
                "click #clear-completed": "clearCompleted",
                "click #toggle-all": "toggleAllComplete"
            },

            initialize: function () {
                var vw = this
                vw.ip = vw.$("#new-todo");
                vw.allCb = vw.$("#toggle-all")[0];
                vw.l2(Tds, 'add', vw.addOne);
                vw.l2(Tds, 'reset', vw.addAll);
                vw.l2(Tds, 'all', vw.render)
                vw.footer = vw.$('footer');
                vw.main = $('#main');
                Tds.fe()
            },

            render: function () {
                var vw = this,
                    done = _.z(Tds.done()),
                    remaining = _.z(Tds.remaining())
                if (_.z(Tds)) {
                    vw.main.sh();
                    vw.footer.sh()
                    vw.footer.html(vw.statsTemplate({done: done, remaining: remaining}))
                }

                else {
                    vw.main.hd();
                    vw.footer.hd()
                }

                if (!this.allCb) {
                    $l('!this.allCb')
                }
                else {
                    this.allCb.checked = !remaining
                }
            },

            addOne: function (td) {
                var vw = new TdVw({model: td})
                this.$("#todo-list").A(vw.r().el)
            },
            addAll: function () {
                Tds.each(this.addOne, this)
            },
            createOnEnter: function (e) {
                if (e.keyCode != 13) {
                    return
                }
                if (!this.ip.v()) {
                    return
                }
                ;
                Tds.cr({title: this.ip.v()});
                this.ip.v('')
            },
            clearCompleted: function () {
                _.iv(Tds.done(), 'destroy');
                return false;
            },
            toggleAllComplete: function () {
                Tds.each(function (td) {
                    td.sv({'done': this.allCb.checked})
                })
            }

        })
        App = new AppVw


    }


    BABY = function () {
        z()


        m = new Bb.M({})

        $d(m)
    }

    MINLS = function () {
        z()  //Minimal Bb.localStorage example


        //THE MODEL AND THE COLLECTION
        //In order to use Bb.localStorage to save a model
        // we also need a collection.
        // The `localStorage` property of the collection
        // needs to be set to a new Bb.LocalStorage object
        // with an identifier for the collection
        // that is used when reading or writing the model values to LocalStorage.


        //The defaults function of the model
        // returns an object with a content property
        // that makes it easy to identify when the model was added to the collection
        // and if it's new or has been fetched from local storage.

        //ADDING AND SAVING NOTE MODELS
        //Bb collections have a fetch method that retrieves models from the server or,
        // in this case, local storage.
        //Before calling save on the model we need to add it to the collection,
        // otherwise Bb would attempt to use an Http request to store it on a server.


        Note = Bb.M.x({
            defaults: function () {
                return {
                    content: "Note created on " + new Date().toISOString()
                }
            }
        })

        NoteCollection = Bb.C.x({
            model: Note,
            localStorage: new Bb.LocalStorage("choose-some-identifier")
        })

        myNotes = new NoteCollection()
        myNotes.fetch();
        note1 = new Note();
        myNotes.add(note1);
        note1.sv()

        myNotes.models.forEach(function (md) {
            $l("Md in cl: " + md.g("content"))
        })


    }

    LS1 = function () {
        z();
        $Ms('LS1')


        bksArr = [
            {title: 'yaba daba', author: 'wanda'},
            {title: 'clawface', author: 'deez nuts'},
            {title: 'under the knee', author: 'p .qu rstly'}
        ]
        Bks = Bb.C.x({
            model: Bb.M,
            localStorage: new Bb.LocalStorage('bks')
        })
        bks = new Bks(bksArr)

        Dude = Bb.M

        d = new Dude()
        d1 = Dude.c
        //bks.save()


    }
    function more(){
        bbLocStorPLUG = function () {
            (function (root, factory) {
                if (typeof exports === 'object' && typeof require === 'function') {
                    module.exports = factory(require("backbone"));
                } else if (typeof define === "function" && define.amd) {
                    // AMD. Register as an anonymous module.
                    define(["backbone"], function (bb) {
                        // Use global variables if the locals are undefined.
                        return factory(bb || root.bb);
                    });
                } else {
                    factory(bb);
                }
            }(this, function (bb) {
// A simple module to replace `bb.sync` with *localStorage*-based
// persistence. Models are given GUIDS, and saved into a JSON object. Simple
// as that.

// Generate four random hex digits.
                function S4() {
                    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
                };

// Generate a pseudo-GUID by concatenating random hexadecimal.
                function guid() {
                    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
                };

                function isObject(item) {
                    return item === Object(item);
                }

                function contains(array, item) {
                    var i = array.length;
                    while (i--) if (array[i] === item) return true;
                    return false;
                }

                function extend(obj, props) {
                    for (var key in props) obj[key] = props[key]
                    return obj;
                }

                function result(object, property) {
                    if (object == null) return void 0;
                    var value = object[property];
                    return (typeof value === 'function') ? object[property]() : value;
                }

// Our Store is represented by a single JS object in *localStorage*. Create it
// with a meaningful name, like the name you'd give a table.
// window.Store is deprectated, use bb.LocalStorage instead
                bb.LocalStorage = window.Store = function (name, serializer) {
                    if (!this.localStorage) {
                        throw "bb.localStorage: Environment does not support localStorage."
                    }
                    this.name = name;
                    this.serializer = serializer || {
                        serialize: function (item) {
                            return isObject(item) ? JSON.stringify(item) : item;
                        },
                        // fix for "illegal access" error on Android when JSON.parse is passed null
                        deserialize: function (data) {
                            return data && JSON.parse(data);
                        }
                    };
                    var store = this.localStorage().getItem(this.name);
                    this.records = (store && store.split(",")) || [];
                };

                extend(bb.LocalStorage.prototype, {

                    // Save the current state of the **Store** to *localStorage*.
                    save: function () {
                        this.localStorage().setItem(this.name, this.records.join(","));
                    },

                    // Add a model, giving it a (hopefully)-unique GUID, if it doesn't already
                    // have an id of it's own.
                    create: function (model) {

                        if (!model.id && model.id !== 0) {
                            model.id = guid()
                            model.set(model.idAttribute, model.id)

                        }

                        this.localStorage().setItem(this._itemName(model.id),
                            this.serializer.serialize(model))
                        this.records.push(model.id.toString())
                        this.save();
                        return this.find(model)
                    },

                    // Update a model by replacing its copy in `this.data`.
                    update: function (model) {
                        this.localStorage().setItem(this._itemName(model.id),
                            this.serializer.serialize(model))
                        var modelId = model.id.toString()
                        if (!contains(this.records, modelId)) {
                            this.records.push(modelId)
                            this.save()
                        }
                        return this.find(model)
                    },

                    // Retrieve a model from `this.data` by id.
                    find: function (model) {
                        return this.serializer.deserialize(
                            this.localStorage().getItem(this._itemName(model.id)))
                    },

                    // Return the array of all models currently in storage.
                    findAll: function () {
                        var result = []
                        for (var i = 0, id, data; i < this.records.length; i++) {
                            id = this.records[i]
                            data = this.serializer.deserialize(this.localStorage().getItem(this._itemName(id)));
                            if (data != null) result.push(data)
                        }
                        return result
                    },

                    // Delete a model from `this.data`, returning it.
                    destroy: function (model) {
                        this.localStorage().removeItem(this._itemName(model.id));
                        var modelId = model.id.toString();
                        for (var i = 0, id; i < this.records.length; i++) {
                            if (this.records[i] === modelId) {
                                this.records.splice(i, 1);
                            }
                        }
                        this.save();
                        return model;
                    },

                    localStorage: function () {
                        return localStorage;
                    },

                    // Clear localStorage for specific collection.
                    _clear: function () {
                        var local = this.localStorage(),
                            itemRe = new RegExp("^" + this.name + "-");

                        // Remove id-tracking item (e.g., "foo").
                        local.removeItem(this.name);

                        // Match all data items (e.g., "foo-ID") and remove.
                        for (var k in local) {
                            if (itemRe.test(k)) {
                                local.removeItem(k);
                            }
                        }

                        this.records.length = 0;
                    },

                    // Size of localStorage.
                    _storageSize: function () {
                        return this.localStorage().length;
                    },

                    _itemName: function (id) {
                        return this.name + "-" + id;
                    }

                })

// localSync delegate to the model or collection's
// *localStorage* property, which should be an instance of `Store`.
// window.Store.sync and bb.localSync is deprecated, use bb.LocalStorage.sync instead
                bb.LocalStorage.sync = window.Store.sync = bb.localSync = function (method, model, options) {
                    var store = result(model, 'localStorage') || result(model.collection, 'localStorage');

                    var resp, errorMessage;
                    //If $ is having Deferred - use it.
                    var syncDfd = bb.$ ?
                        (bb.$.Deferred && bb.$.Deferred()) :
                        (bb.Deferred && bb.Deferred());

                    try {

                        switch (method) {
                            case "read":
                                resp = model.id != undefined ? store.find(model) : store.findAll();
                                break;
                            case "create":
                                resp = store.create(model);
                                break;
                            case "update":
                                resp = store.update(model);
                                break;
                            case "delete":
                                resp = store.destroy(model);
                                break;
                        }

                    } catch (error) {
                        if (error.code === 22 && store._storageSize() === 0)
                            errorMessage = "Private browsing is unsupported";
                        else
                            errorMessage = error.message;
                    }

                    if (resp) {
                        if (options && options.success) {
                            if (bb.VERSION === "0.9.10") {
                                options.success(model, resp, options);
                            } else {
                                options.success(resp);
                            }
                        }
                        if (syncDfd) {
                            syncDfd.resolve(resp);
                        }

                    } else {
                        errorMessage = errorMessage ? errorMessage
                            : "Record Not Found";

                        if (options && options.error)
                            if (bb.VERSION === "0.9.10") {
                                options.error(model, errorMessage, options);
                            } else {
                                options.error(errorMessage);
                            }

                        if (syncDfd)
                            syncDfd.reject(errorMessage);
                    }

                    // add compatibility with $.ajax
                    // always execute callback for success and error
                    if (options && options.complete) options.complete(resp);

                    return syncDfd && syncDfd.promise();
                };

                bb.ajaxSync = bb.sync

                bb.getSyncMethod = function (model, options) {
                    forceAjaxSync = options && options.ajaxSync
                    if (!forceAjaxSync && (result(model, 'localStorage') ||
                        result(model.collection, 'localStorage'))) {
                        return bb.localSync
                    }
                    return bb.ajaxSync
                }
// Override 'bb.sync' to default to localSync,
// the original 'bb.sync' is still available in 'bb.ajaxSync'

                bb.sync = function (met, md, op) {
                    return bb.getSyncMethod(md, op).apply(this, [met, md, op])
                }
                return bb.LocalStorage
            }))

        }
        BBLS = function () {
            $.x()
            bbLocStorPLUG()
            Cl = bb.C.e({
                localStorage: new bb.LocalStorage('clN')
            })
        }

        bbLocStorPLUG = function () {


            (function (root, factory) {
                if (typeof exports === 'object' && typeof require === 'function') {
                    module.exports = factory(require("backbone"));
                } else if (typeof define === "function" && define.amd) {
                    // AMD. Register as an anonymous module.
                    define(["backbone"], function (Backbone) {
                        // Use global variables if the locals are undefined.
                        return factory(Backbone || root.Backbone);
                    });
                } else {
                    factory(Backbone);
                }
            }(this, function (Backbone) {
// A simple module to replace `Backbone.sync` with *localStorage*-based
// persistence. Models are given GUIDS, and saved into a JSON object. Simple
// as that.

// Generate four random hex digits.
                function S4() {
                    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
                };

// Generate a pseudo-GUID by concatenating random hexadecimal.
                function guid() {
                    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
                };

                function isObject(item) {
                    return item === Object(item);
                }

                function contains(array, item) {
                    var i = array.length;
                    while (i--) if (array[i] === item) return true;
                    return false;
                }

                function extend(obj, props) {
                    for (var key in props) obj[key] = props[key]
                    return obj;
                }

                function result(object, property) {
                    if (object == null) return void 0;
                    var value = object[property];
                    return (typeof value === 'function') ? object[property]() : value;
                }

// Our Store is represented by a single JS object in *localStorage*. Create it
// with a meaningful name, like the name you'd give a table.
// window.Store is deprectated, use Backbone.LocalStorage instead
                Backbone.LocalStorage = window.Store = function (name, serializer) {
                    if (!this.localStorage) {
                        throw "Backbone.localStorage: Environment does not support localStorage."
                    }
                    this.name = name;
                    this.serializer = serializer || {
                        serialize: function (item) {
                            return isObject(item) ? JSON.stringify(item) : item;
                        },
                        // fix for "illegal access" error on Android when JSON.parse is passed null
                        deserialize: function (data) {
                            return data && JSON.parse(data);
                        }
                    };
                    var store = this.localStorage().getItem(this.name);
                    this.records = (store && store.split(",")) || [];
                };

                extend(Backbone.LocalStorage.prototype, {

                    // Save the current state of the **Store** to *localStorage*.
                    save: function () {
                        this.localStorage().setItem(this.name, this.records.join(","));
                    },

                    // Add a model, giving it a (hopefully)-unique GUID, if it doesn't already
                    // have an id of it's own.
                    create: function (model) {
                        if (!model.id && model.id !== 0) {
                            model.id = guid();
                            model.set(model.idAttribute, model.id);
                        }
                        this.localStorage().setItem(this._itemName(model.id), this.serializer.serialize(model));
                        this.records.push(model.id.toString());
                        this.save();
                        return this.find(model);
                    },

                    // Update a model by replacing its copy in `this.data`.
                    update: function (model) {
                        this.localStorage().setItem(this._itemName(model.id), this.serializer.serialize(model));
                        var modelId = model.id.toString();
                        if (!contains(this.records, modelId)) {
                            this.records.push(modelId);
                            this.save();
                        }
                        return this.find(model);
                    },

                    // Retrieve a model from `this.data` by id.
                    find: function (model) {
                        return this.serializer.deserialize(this.localStorage().getItem(this._itemName(model.id)));
                    },

                    // Return the array of all models currently in storage.
                    findAll: function () {
                        var result = [];
                        for (var i = 0, id, data; i < this.records.length; i++) {
                            id = this.records[i];
                            data = this.serializer.deserialize(this.localStorage().getItem(this._itemName(id)));
                            if (data != null) result.push(data);
                        }
                        return result;
                    },

                    // Delete a model from `this.data`, returning it.
                    destroy: function (model) {
                        this.localStorage().removeItem(this._itemName(model.id));
                        var modelId = model.id.toString();
                        for (var i = 0, id; i < this.records.length; i++) {
                            if (this.records[i] === modelId) {
                                this.records.splice(i, 1);
                            }
                        }
                        this.save();
                        return model;
                    },

                    localStorage: function () {
                        return localStorage;
                    },

                    // Clear localStorage for specific collection.
                    _clear: function () {
                        var local = this.localStorage(),
                            itemRe = new RegExp("^" + this.name + "-");

                        // Remove id-tracking item (e.g., "foo").
                        local.removeItem(this.name);

                        // Match all data items (e.g., "foo-ID") and remove.
                        for (var k in local) {
                            if (itemRe.test(k)) {
                                local.removeItem(k);
                            }
                        }

                        this.records.length = 0;
                    },

                    // Size of localStorage.
                    _storageSize: function () {
                        return this.localStorage().length;
                    },

                    _itemName: function (id) {
                        return this.name + "-" + id;
                    }

                });

// localSync delegate to the model or collection's
// *localStorage* property, which should be an instance of `Store`.
// window.Store.sync and Backbone.localSync is deprecated, use Backbone.LocalStorage.sync instead
                Backbone.LocalStorage.sync = window.Store.sync = Backbone.localSync = function (method, model, options) {
                    var store = result(model, 'localStorage') || result(model.collection, 'localStorage');

                    var resp, errorMessage;
                    //If $ is having Deferred - use it.
                    var syncDfd = Backbone.$ ?
                        (Backbone.$.Deferred && Backbone.$.Deferred()) :
                        (Backbone.Deferred && Backbone.Deferred());

                    try {

                        switch (method) {
                            case "read":
                                resp = model.id != undefined ? store.find(model) : store.findAll();
                                break;
                            case "create":
                                resp = store.create(model);
                                break;
                            case "update":
                                resp = store.update(model);
                                break;
                            case "delete":
                                resp = store.destroy(model);
                                break;
                        }

                    } catch (error) {
                        if (error.code === 22 && store._storageSize() === 0)
                            errorMessage = "Private browsing is unsupported";
                        else
                            errorMessage = error.message;
                    }

                    if (resp) {
                        if (options && options.success) {
                            if (Backbone.VERSION === "0.9.10") {
                                options.success(model, resp, options);
                            } else {
                                options.success(resp);
                            }
                        }
                        if (syncDfd) {
                            syncDfd.resolve(resp);
                        }

                    } else {
                        errorMessage = errorMessage ? errorMessage
                            : "Record Not Found";

                        if (options && options.error)
                            if (Backbone.VERSION === "0.9.10") {
                                options.error(model, errorMessage, options);
                            } else {
                                options.error(errorMessage);
                            }

                        if (syncDfd)
                            syncDfd.reject(errorMessage);
                    }

                    // add compatibility with $.ajax
                    // always execute callback for success and error
                    if (options && options.complete) options.complete(resp);

                    return syncDfd && syncDfd.promise();
                };

                Backbone.ajaxSync = Backbone.sync;

                Backbone.getSyncMethod = function (model, options) {
                    var forceAjaxSync = options && options.ajaxSync;

                    if (!forceAjaxSync && (result(model, 'localStorage') || result(model.collection, 'localStorage'))) {
                        return Backbone.localSync;
                    }

                    return Backbone.ajaxSync;
                };

// Override 'Backbone.sync' to default to localSync,
// the original 'Backbone.sync' is still available in 'Backbone.ajaxSync'
                Backbone.sync = function (method, model, options) {
                    return Backbone.getSyncMethod(model, options).apply(this, [method, model, options]);
                };

                return Backbone.LocalStorage;
            }));
        }
        BBLS = function () {
            $.x()

            bbLocStorPLUG()


            Cl = bb.C.e({
                localStorage: new bb.LocalStorage('clN')

            })


        }

    }
}
function routApps(){
    ROUTEE = function () {
        $.x();
        $l('routee')
        r = $$R({
            routes: {
                '*x': 'd'
            },
            d: function (a) {
                $l('dddddddddddddddddddd')
                $l('d:' + a)
            },
            e: function (a) {
                $l('e:' + a)
            }
        })()
        // r.o('d',function(a){$l('d:'+ a)}); r.o('e',function(a){$l('e:'+a)})

        Bb.h.start()

        _.in(2, function () {
            Bb.h.navigate('d', {trigger: true})
        })

    }
    NOPUSHSTATE = VID0 = function () {
        z();
        FirstVw = Bb.V.x({
            initialize: function () {
                this.render()
            },
            render: function () {
                var first = $.d().rm().A(
                    $.lb().A('My 1st View'), $.br(),
                    $.a().hr('#sec').A('Go to 2nd View')
                ).oh();

                this.$el.html(first)
            }
        })
        SecVw = Bb.V.x({
            initialize: function () {
                this.render()
            },
            render: function () {
                var sec = $.d().rm()
                    .A($.lb().A('My 2nd View'), $.br(), $.a()
                        .hr('#first').A('Go to 1st View'))
                    .oh()
                this.$el.html(sec)
            }
        })
        $('body').C('o').css('font-size', 80)
        $.d().id('ct')
        $$R({
            r: {'': 'pg1', 'first': 'pg1', 'sec': 'pg2'},
            pg1: function () {
                new FirstVw({el: $('#ct')})
            },
            pg2: function () {
                new SecVw({el: $('#ct')})
            }
        })()
        Bb.h.start(
            //{pushState:true}
        )
    }
    STILLNOPUSH = VID1 = function () {
        z();
        $('body').C('o').css('font-size', 80)
        $.d().id('ct')
        $$R({
            r: {
                ':post/:id': 'pam',
                '*post': 'splat',
                'post/*id': 'splatMustBeLast'
            },
            pam: function (post, id) {
                $l('fnPam: ' + post + ', id# ' + id)
            },
            splat: function () {
                alert('1')
            },
            splatMustBeLast: function () {
                alert('2')
            }
        })()
        Bb.h.start({pushState: true})
    }
//WORKS (above):
    VID00 = function () {

        $FirstVw = Bb.V.x({
            initialize: function () {
                this.render()
            },
            render: function () {
                var first = $.d().rm().A(
                    $.lb().A('My 1st View'), $.br(),
                    $.a().hr('sec').A('Go to 2nd View')
                ).oh();

                this.$el.html(first)
            }
        })
        $SecVw = Bb.V.x({
            initialize: function () {
                this.render()
            },
            render: function () {
                var sec = $.d().rm()
                    .A($.lb().A('My 2nd View'), $.br(), $.a()
                        .hr('first').A('Go to 1st View'))
                    .oh()
                this.$el.html(sec)
            }
        })
        z();
        $('body').C('o').css('font-size', 80)
        $.d().id('ct')


        $$R({
            r: {
                '': 'pg1',
                'first': 'pg1',
                'sec': 'pg2'
            },
            pg1: function () {
                new $FirstVw({el: $('#ct')})
            },
            pg2: function () {
                new $SecVw({el: $('#ct')})
            }

        })()

        Bb.h.start(
            //{pushState:true}
        )
    }  //push state not working???
    SHOWVW = NORTR = function () {
        $.x()
        V1 = $$V({

            i: function () {
                this.r()
            },
            r: function () {
                this.$el.ht(this.model.get('Ms') + " from the View 1")
                return this
            }
        })
        V2 = $$V({

            i: function () {
                this.r();
            },

            r: function () {
                this.$el.ht(this.model.g('Ms') + " from the View 2");
                return this;
            }
        })
        V3 = $$V({
            i: function () {
                this.render();
            },
            r: function () {
                this.$el.html(this.model.get('Message') + " from the View 3");
                return this;
            }
        })

        // Now we need a view that will contain the view
        // and render it whenever the user makes a choice on the screen.
        CtV = $$V({
            myChildV: null,
            r: function () {
                this.$el.ht("Greeting Area");
                this.$el.A(this.myChildV.$el);
                return this;
            }
        })

        /*  Now lets create a simple div on the UI which will be used as el to this ContainerView.
         We will then position three buttons on the UI which will let the user to change the view.
         Below code shows the application setup that is creating the container view and the functions
         that will get invoked when the user selects the view from screen.
         */

        greet = V1({
            Ms: "Hello world"
        })
        cont = CtV({
            el: $("#AppContainer"),
            model: greet
        })
        v1 = null;
        v2 = null;
        v3 = null;
        function showView1() {
            if (view1 == null) {
                view1 = new View1({model: greeting});
            }
            container.myChildView = view1;
            container.render();
        }

        function showView2() {
            if (view2 == null) {
                view2 = new View2({model: greeting});
            }

            container.myChildView = view2;
            container.render();
        }

        function showView3() {
            if (view3 == null) {
                view3 = new View3({model: greeting});
            }

            container.myChildView = view3;
            container.render();
        }
    }
    NORTR0 = function () {
        $.x(null, 'no router');
        v1 = v2 = v3 = 0
        $.d('r', 100, 100).id('div')

        // ha.. this is just 'no router'
        V1 = $V({
            i: function () {
                this.r()
            }, r: function () {

                //this.$el.ht(this.model.get('Ms') + " from the View 1" )

                return this
            }
        })

        V2 = $V({
            i: function () {
                this.r()
            },
            r: function () {
                this.$el.ht(this.model.g('Ms') + " from the View 2");
                return this
            }
        })
        V3 = $V({
            i: function () {
                this.render()
            },
            r: function () {
                this.$el.html(this.model.get('Message') + " from the View 3")
                return this
            }
        })


        // Now we need a view that will contain the view
        // and render it
        // whenever the user makes a choice on the screen.

        CtV = $V({
            chV: 0,
            render: function () {
                this.$el.ht('Hi Area').A(
                    this.chV.$el
                )
                return this
            }
        })

        hi = V1({Ms: "Hello world"})

        ct = CtV({
            el: $("#div"),
            model: hi
        })


        /*
         Now lets create a simple div on the UI which will be used as el to this ContainerView.
         We will then position three buttons on the UI which will let the user to change the view.
         Below code shows the application setup that is creating the container view and the functions
         that will get invoked when the user selects the view from screen.
         */


        $.bt('v1', function () {
                if (!v1) {
                    v1 = V1({model: hi})
                }
                ct.chV = v1
                ct.render()
            }
        )

        $.bt('v2', function () {
            if (!v2) {
                v2 = V2({model: hi})
            }
            ct.chV = v2
            ct.render()
        })


        $.bt('v3', function () {
            if (!v3) {
                v3 = V3({model: hi})
            }
            ct.chV = v3
            ct.render()
        })

    }
    RTPAMS = function () {
        z();
        $.x().A('rtpams hahahahhahaha')

        r = $$R({

            routes: {
                "*x": "d",
                '': 'home',
                'view': 'v',
                'new': 'nn',
                ':id': 'en',
                'posts/:id': 'gPo',
                '*acts': 'dfR',
                'download/*path': 'dlF',
                ':route/:action': 'ldV'
            },
            home: function () {
                $l('home')
            },
            v: function () {
                $l('image')
            },
            nn: function () {
            },
            en: function (id) {
                $l('id:' + id)
            }
        })()


        r.oR('dfR', alert)
        r.oR('gPo', function (id) {
            alert('gPo# ' + id)
        })
        r.oR('gPo', function () {
            alert(3)
        }) //both routes fire!
        r.oR('dlF', alert)
        r.oR('ldV', function (rt, ac) {
            alert(rt + '_' + ac)
        })
        // H$()  // or Bb.h.s({pushState: true})


        // r.oR('dfR', alert)
        r.on('route:gPo', function (id) {
            alert('gPo# ' + id)
        })
        r.oR('gPo', function () {
            alert(3)
        }) //both routes fire!
        //r.oR('dlF', alert)
        r.oR('ldV', function (rt, ac) {
            alert(rt + '_' + ac)
        })
        Bb.h.start({pushState: true})
        r.o('dfR', $l)
        r.o('gPo', function (id) {
            $l('gPo# ' + id)
        })
        r.o('gPo', function () {
            $l(3)
        }) //both routes fire!
        r.o('dlF', $l)
        r.o('ldV', function (rt, ac) {
            $l(rt + '_' + ac)
        })
        r.oR('d', function (a) {
            alert(a)
            $l('d:' + a)
        })//#hello -> 'hello'

        r.oR('e', function (a) {
            alert(a)
            $l('e:' + a)
        })//#e -> 'e' (could do '/#/e')
        r.oR('d', function (a) {
            alert(a)
        })//#hello -> 'hello'
        r.oR('e', function (a) {
            alert(a)
        })//#e -> 'e' (could do '/#/e')

        w.h.start() // H$()

        _.in(2, function () {
            Bb.h.navigate('d', {trigger: true})
        })
        _.in(2, function () {
            Bb.h.navigate('d', {trigger: true})
        })


    }
    ITEMZ = function () {
        $.x();
        Ap = {M: {}, V: {}, C: {}}
        Ap.M.Item = $$M({})
        $$R({
            routes: {
                '': 'welcome',
                'itemlist': 'showItemList',
                'j': 'j',
                '': 'welcome',
                'wap/items': 'welcome1',
                'wap/items/itemlist': 'showItemList',
                'wap/items/j': 'j'
            },

            welcome: function () {
                $.bd().E().A($.h1('welcome'))

            },
            j: function () {
                $l('asdfjfsdafsdf')
            },
            showItemList: function () {
                $.bd().E().A($.h1('show item list'))

            }

        })()
        i1 = Ap.M.Item({n: 'jason', g: 'mason'})
        i1.oR('j', function () {
            $.bd().E().A($.h1('j'))
        })
        i1 = Ap.M.Item({n: 'jason', g: 'mason'})
        r.A('/wap/items/j', function () {
            $.bd().E().A(
                $.h1('j')
            )
        })
        r.A('/wap/items/q', function () {
            $.bd().E().A($.h1('q'))

        })
        Bb.h.start({pushState: true})
        $.bt('add', function () {
            r.n('/wap/items/itemlist')
        })
        $.bt('add1', function () {
            $.A($.h1('k'))
            r.n('/wap/items/j')
        })
        $.bt('add', function () {
            r.n('/itemlist')

        })
    }
    RTR0 = function () {
        $.x('y');
        $CSS({h1: {'font-size': 100}})
        r = $$R({
            rt: {
                '': 'index',
                'wap/rtr/images/:id': 'image',
                view: 'viewImage'
            },
            image: function (id) {
                _.t(10, function () {
                    $l($r() + '-id: ' + id)
                })
                $.bd().C('z')
            },
            h: function () {
                alert('you are viewing home page')
            },
            x: function () {
                alert('you are viewing index')
            },
            viewImage: function () {
                alert('you are viewing an image')
            }
        })()


        Bb.h.start({pushState: true})

        _.in(3, function () {
            r.n('55c24c8f4198473b0d000004.png')
        })


        //looks for clicks on any anchor els where
        //href starts with '/' (no domain) and stop
        //bw from nv to it

        $.a().A($.h1('afsd'))

        $('body').on('click', 'a[href^="/"]', function (ev) {
            ev.preventDefault()
            r.n($(this).attr('href', {trigger: true}))
        })


    }
    RTENAV = function () {
        z()
        Rt = $$R({
            routes: {
                'po/:id': 'gp',
                '*a': 'dr'
            },
            dr: function (a) {
                al(a)
            },
            gp: function (id) {
                al('Get post ' + id)
            }
        })
        r = Rt()
        r.A('mvc/rnav/j', function () {
            alert('!')
        })
        Bb.h.s({pushState: true})
        $.bt('hi', function () {
            r.n('po/2', {t: 1})
        }).a()
        $.bt('hi', function () {
            rt.n('po/2')
        })
        $.bt('hi1', function () {
            rt.n('po/4')
        })
        $.bt('hiiiii', function () {
            r.navigate('mvc/rnavv/j', {trigger: true})
        })
    }
    AHREF = RTR1 = function () {
        $.x('b')

        $R({
            routes: {
                '': 'index',
                'wap/rtr/images/:id': 'image',
                view: 'viewImage'
            },
            h: function () {
                $l('you are viewing home page')
            },
            x: function () {
                $l('you are viewing index')
            },
            image: function (id) {
                $l('image===')
                _.t(10, function () {
                    $l($r() + '-id: ' + id)
                });
                $.bd().C('z')
            },
            viewImage: function () {
                $l('you are viewing an image')
            }
        })
        _.in(function () {
            $l('......')
            r.n('/wap/rtr/images/32903290239032902390')
        })
        //looks for clicks on any anchor els where
        //href starts with '/' (no domain) and stop
        //bw from nv to it
        $.bd().on('click', 'a[href^="/"]', function (ev) {
            $l('wow')
            ev.preventDefault()
            r.n($(this).attr('href', {trigger: true}))
        })
    }
    RTPAMS = function () {
        $.x().A('hahahahhahaha')
        r = $$R({
            routes: {
                '': 'home',

                'view': 'v',
                'new': 'nn',
                ':id': 'en',
                'posts/:id': 'gPo',
                '*acts': 'dfR', 'download/*path': 'dlF',
                ':route/:action': 'ldV'
            },
            home: function () {
                $l('home')
            },
            v: function () {
                $l('image')
            },
            nn: function () {
            },
            en: function (id) {
                $l('id:' + id)
            }
        })()
        r.oR('dfR', $l)
        r.oR('gPo', function (id) {
            $l('gPo# ' + id)
        })
        r.oR('gPo', function () {
            $l(3)
        }) //both routes fire!
        r.oR('dlF', $l)
        r.oR('ldV', function (rt, ac) {
            $l(rt + '_' + ac)
        })
    }


    function roap() {
        $l('bbRoApps2');
        $Fn = function (name, fn) {
            window[name] = fn;
            return fn
        }
        $RoApp = function (name, fn) {
            $Fn(name, function () {

                z();
                header(name);
                fn();
                startRtr(name)

                function header(name) {
                    $.d().A($.d().A('this is a RoApp').fS(75).col('r'),
                        $.sp().A(name).fS(100).col('x').C('o'))
                }

                function startRtr(name) {
                    Bb.h.start({pushState: true, root: "/mvc/" + name + "/"})
                }
            })
        }

        $RoApp('ROAP1', function () {
            ro = $R({
                r: {
                    hello: 'hi',
                    goodbye: function () {
                        $.C('o')
                    }
                },
                _: function () {
                    $.C('p')
                },
                hi: function () {
                    $.C('g');
                    alert('well hi there!')
                }
            })
            $.bt('index', function () {
                ro.n('')
            })
            $.bt('hello', function () {
                ro.n('hello')
            })
            $.bt('goodbye', function () {
                ro.n('goodbye')
            })
        })
        $RoApp('ROAP2', function () {
            ro = $R({
                r: {
                    hello: 'hi',
                    goodbye: function () {
                        $.C('o')
                    }
                },
                _: function () {
                    $.C('p')
                },
                hi: function () {
                    $.C('g');
                    alert('well hi there!')
                }
            })
            $.bt('index', function () {
                ro.n('')
            })
            $.bt('hello', function () {
                ro.n('hello')
            })
            $.bt('goodbye', function () {
                ro.n('goodbye')
            })
        })

//notes:  '':'_', (handled by _$$R now, instead) (see _$$R api)


    }
}
function routApps2(){

    $Fn = function (name, fn) {
        window[name] = fn;
        return fn
    }
    $RoApp = function (name, fn) {

        $Fn(name, function () {
            name = _.tU(name)
            $l('name: ' + name)

            Ap = {M: {}, V: {}, C: {}}
            z();

            header(name);
            d = $.d().id('ct').fS(40)
            fn();

            startRtr(name)

            function header(name) {
                $.d().A(
                    $.sp().A('this is RoApp: ').fS(75).col('r'),
                    $.sp().A(name)
                        .fS(100).col('x').C('o'),
                    $.d('B').H(8).W('auto')
                )
            }

            function startRtr(name) {
                Bb.h.start({
                    pushState: true,
                    root: "/mvc/" + name + "/"
                })
            }
        })
    }
    $RoApp('ROAP', function () {
        $R({
            r: {
                hello: 'hi',
                goodbye: function () {
                    $.C('o')
                }
            },

            _: function () {
                $l('indexxxxx')
                $.C('p')
            }, //index
            hi: function () {
                $.C('g');
                alert('well hi there!')
            },
            d: function () {
                $.C('z')
                $.A(
                    $.sp('d e f a u l t')
                        .fS(30).C('g').col('w')
                )
            } //default
        })
        $.bt('index', function () {
            r.n('')
        })
        $.bt('hello', function () {
            r.n('hello')
        })
        $.bt('goodbye', function () {
            r.n('goodbye')
        })
        $.bt('default', function () {
            r.n('asfd/afsd')
        })
    })
    $RoApp('TWOVWS', function () {
        FirstVw = $$V({
            i: function () {
                this.r()
            },
            r: function () {
                this.$el.E().A($.d().A(
                    $.sp('My 1st View').fS(60),
                    $.bt('Go to 2nd View', function (e) {
                        $l('clicked "go to 2nd View" anchor')
                        r.n('sec')
                    }).C('y')))
            }
        })
        SecVw = $$V({
            i: function () {
                this.r()
            },
            r: function () {
                this.$el.E().A($.d().A(
                    $.bt('Go to 1st View', function (e) {
                        $l('clicked "go to 1st View" anchor')
                        r.n('first')
                    }).C('o'),
                    $.sp('My 2nd View').fS(50)
                ))
            }
        })
        r = $R({

            r: {
                '': 'pg1',
                'first': 'pg1',
                'sec': 'pg2'
            },

            pg1: function () {

                $l('in pg1')

                FirstVw({
                    el: $('#ct')
                })
            },


            pg2: function () {
                $l('in pg2')
                SecVw({el: $('#ct')})
            }
        })
    })
    HOWDYPAM = function () {
        z()


        d = $.d()
        $R({
            r: {

                'cool/:name': 'welcome',
                'image/:id': 'image',
                'items': 'items',
                'items/:item': 'item',
                'itemlist': 'showItemList'
            },

            welcome: function (name) {
                var greet = 'howdy, ' + name + '!'
                d.h(greet)
                $l(greet)
                //$.bd().E().A($.h1('welcome'))
            },

            items: function () {
                $.bd().E().A($.h1('show item list'))
            },
            item: function (item) {
                $.bd().E().A($.h1('show item: ' + item))
            },

            image: function (id) {
                $l('image===')
                _.t(10, function () {
                    $l($r() + '-id: ' + id)
                })
                $.bd().C('z')
            },

            _: function () {
                $l('you are viewing index')
            }

        })

        // _.in(2,function(){ r.n('cool/jason') })

        _.in(5, function () {
            $l('-> img')

            r.n('image/55c24c8f4198473b0d000004.png', {trigger: true})

        })


        $.bt('add', function () {
            r.n('items')
        })

        $.bt('add1', function () {
            $.A($.h1('k'))
            r.n('items/j')
        })

        Bb.h.start({pushState: true})
    }
    $RoApp('ROUTEE', function () {
        $.x();
        $l('routee')
        $R({
            r: {

                ':post/:id': 'pam',
                'post/*id': 'splatMustBeLast',
                '*post': 'splat'

            },


            pam: function (post, id) {
                $l('Get post ' + id)
                $l('fnPam: ' + post + ', id# ' + id)
            },
            splat: function () {
                alert('1')
            },
            splatMustBeLast: function () {
                alert('2')
            },
            d: function (a) {
                $l('ddddddddd:' + a)
            },
            e: function (a) {
                $l('eeeeeeeee:' + a)
            }
        })
        r.A('rnav/j', function () {
            alert('!')
        })
        $.bt('hi', function () {
            r.n('po/2', {t: 1})
        }).a()
        $.bt('hi', function () {
            rt.n('po/2')
        })
        $.bt('hi1', function () {
            rt.n('po/4')
        })
        $.bt('hiiiii', function () {
            r.n('mvc/rnavv/j', {trigger: true})
        })


        $.a('home', '/mvc/routee')
        _.in(2, function () {
            r.n('d')
        })
        function alpha() {
            function anchorClickBlocker() {
                //looks for clicks on any anchor els where
                //href starts with '/' (no domain) and stop
                //bw from nv to it

                $.bd().on('click', 'a[href^="/"]', function (ev) {
                    $l('wow')
                    ev.preventDefault()
                    r.n($(this).attr('href', {trigger: true}))
                })


//looks for clicks on any anchor els where
//href starts with '/' (no domain) and stop
//bw from nv to it
                $('body').on('click', 'a[href^="/"]', function (ev) {
                    ev.preventDefault()
                    r.n($(this).attr('href'))
                })


            }

            $.a().A($.h1('afsd'))
            anchorClickBlocker()

        }
    })
}
function notes(){
    server = {
        d: 2,
        n: 2,
        docs: {
            1: {text: 'this is a doc', id: 1}
        },
        notes: {
            1: {1: {text: 'note'}, 2: {text: 'another note'}}
        },
        get: {
            '/docs': function (q, p) {
                var res = []
                for (var doc in docs) {

                    if (docs.hasOwnProperty(doc)) {
                        res.push(docs[doc])
                    }
                }
                p.json(res)
            },
            '/docs/:did/notes': function (q, p) {
                var res = [], n = notes[q.params.id]
                for (var note in n) {
                    if (n.hasOwnProperty(note)) {
                        res.push(n[notes])
                    }
                }
            }
        },
        post: {
            '/docs': function (q, p) {
                var doc = q.body
                doc.id = d++
                docs.doc.id = doc
                p.json(doc)
            },
            '/docs/:did/notes': function (q, p) {
                var note = q.body, id = q.params.id
                note.id = n++
                if (!notes[id]) {
                    notes[id] = {}
                }
                notes[id][notes.id] = note
                p.json(note)
            }
        },
        put: {
            'docs/:id': function (q, p) {
                docs[q.params.id] = q.body
                p.json(q.body)
            },
            'docs/:did/notes:nid': function (q, p) {
                notes[q.params.id][q.params.nid] = q.body
                p.json(q.body)
            }
        }
    }


    Note = Bb.M.x({})


    Notes = Bb.C.x({

        m: Note,

        i: function (mds, op) {

            this.doc = op.doc


        },

        u: function () {
            return this.doc.url() + '/notes'
        }


    })
    Doc = Bb.M.x({

        i: function (op) {
            this.notes = new Notes([], {doc: this})
        },


        addNote: function (tx) {

            this.notes.create({
                text: tx
            })
        }


    })
    Docs = Bb.C.x({
        m: Doc, u: '/documents',

        i: function () {

            this.on('reset', this.getNotes, this)
        },

        getNotes: function () {
            this.each(function (doc) {
                doc.notes = new Notes([], {doc: doc})
                doc.notes.fetch()
            })

        }
    })

    ds = new Docs()
    ds.fetch()
}

function gall(){
    _vw = function (o) {
        o = o || {}
        if (F(o.i)) {
            o.initialize = o.i
        }

        if (o.q) {
            o.el = q
        }
        return o
    }


    Bb = Backbone
    Bb.Model.prototype.j = function () {
        return this.toJSON()
    }
    Bb.Collection.prototype.j = function () {
        return this.toJSON()
    }
    Bb.M = Bb.Model;
    Bb.M.x = Bb.M.extend
    Bb.C = Bb.Collection;
    Bb.C.x = Bb.C.extend
    Bb.V = Bb.View;
    Bb.V.x = Bb.V.extend
    Bb.M.prototype.idAttribute = '_id'
    Blog = Bb.M.x({defaults: {author: '', title: '', url: ''}})
    Blogs = Bb.C.x({model: Blog, url: 'http://localhost/api/blogs'})


    GAL = IMAGEGALLERY = function () {
        z();
        function addEdit() {

        }

        function imgLs() {

        }

        function imgGal() {

            ImgGal = {

                init: function (o) {
                    //get list of images rendered at top
                    this.imgs = o.imgs;
                    ImgGal.ImgLs.init()
                    //to get the addEdit Img on screen .. so that whenever you // load the  (add fresh?) it goes to the add image view
                    ImgGal.ImgLs.show(o.imgs)
                    ImgGal.AddEditImg.init()
                    //init this img view which handles displaying images when we click on them
                    ImgGal.AddEditImg.addNewImg()
                    ImgGal.ImgVwr.init()
                }

            }


            function showImg() {

                ImgGal.ImgVwr = {
                    init: function () {
                        this.$main = $('#main')
                    },

                    show: function (imgM) {
                        this.$main.A(
                            new Img_({
                                model: imgM
                            }).r().$el
                        )
                    }
                }


                Img_ = Bb.v(_vw({
                    i: function () {
                        this.$main = $('#main')

                        this.showImgTp = function (img) {
                            var i = $.i('img')
                            return $.d().A(i)
                        }
                    },

                    r: function () {
                        var els = this.$main.A(
                            this.showImgTp(this.model))
                        this.$el.A(els)
                        return this
                    }

                }))


            }


        }


        $Ms('Image Gallery')

        $.a('video', 'https://www.youtube.com/watch?v=VERQEr-bVTs')


    }

}
function direc(){

    dirData = [
        {ID: '1', fN: 'jason', lN: 'sad', par: 'mom', p: '239-2394', e: 'fasfsd@sd.com'},
        {ID: '2', fN: 'frank', lN: 'fad', par: 'sfad', p: '239-2394', e: 'fas@sd.com'},
        {ID: '3', fN: 'fred', lN: 'fuckman', par: 'dad', p: '239-2394', e: 'fadss@sd.com'},
        {ID: '4', fN: 'rigo', lN: 'sadman', par: '', p: '239-2394', e: 'fas@sd.com'},
        {ID: '5', fN: 'jan', lN: 'fsmanad', par: 'mom', p: '239-2394', e: 'fas@sd.com'},
        {ID: '6', fN: 'paul', lN: 'fsamand', par: 'dad', p: '239-2394', e: 'fas@sd.com'},
        {ID: '7', fN: 'steve', lN: 'fsmanad', par: 'mom', p: '239-2394', e: 'rfas@sd.com'},
        {ID: '8', fN: 'scott', lN: 'manfsad', par: 'sfad', p: '239-2394', e: 'afas@sd.com'},
        {ID: '9', fN: 'chad', lN: 'fsadman', par: '', p: '239-2394', e: 'afas@sd.com'},
        {ID: '10', fN: 'greg', lN: 'fsadman', par: '', p: '239-2394', e: 'jas@sd.com'}
    ]


    CssOb = {
        '.details': {
            display: 'none'
        },

        '.active': {
            C: 'r'
        },
        body: {
            C: 'z', c: 'w'
        },
        'a.filter': {C: 'b', c: 'y', P: '5px 10px', M: '5px', 'border-radius': '3px', 'text-decoration': 'none'},
        'a.filter:hover': {C: 'y', c: 'b', P: '5px 10px', M: '5px', 'border-radius': '3px', 'text-decoration': 'none'},

        'div#wrapper': {
            display: 'flex',
            'flex-direction': 'column',
            'align-items': 'center'
        },

        'div.tools': {
            display: 'flex',
            'flex-direction': 'column',
            'align-items': 'center'
        },

        'input#searchBox': {c: 'z'}


    }

    DIRECATMIN19 = function () {

        z();
        $CSS(CssOb);

        app = {
            m: {}, v: {}, r: {}, c: {}
        }

        app.i = function () {
            direc = new app.v.People(
                dirData
            )
        }


        app.m.Person = Bb.Model.extend({

            defaults: {ID: '', fN: '', lN: '', par: '', p: '', e: ''},

            initialize: function () {
                this.set('type', this.get('par') ? 'student' : 'parent')
            }
        })


        app.c.People = Bb.C.x({
            model: app.m.Person,
            comparator: function (per) {
                return per.get('lN')
            }
        })


        app.v.Person = Bb.V.x({
            events: {

                'click .list-header': 'showDetails'
            },

            showDetails: function (e) {

                var q = $(e.target)
                q.toggleClass('active')
                q.siblings('.details').slideToggle('fast')
            },

            tagName: 'li',
            attributes: function () {
                return {class: 'person ' + this.model.get('type')}
            },
            tp: function (o) {

                return $('<h3>').A(
                    $.sp(o.fN + ' ' + o.lN + ' ( ' + o.type + ' )').K('list-header'),
                    $.dK('details', [
                        'phone: ' + o.p, $.br(),
                        'email: ', $.a(o.e)
                    ])
                )
            },

            r: function () {

                ob = this.model

                j = ob.toJSON()
                $l('render:' + j)
                this.A(
                    this.tp(j)
                )

                return this
            }
        })


        app.v.People = Bb.V.x({
            el: '#wrapper',

            r: function () {
                var vw = this,
                    q;
                $('#listing').empty()

                _.e(this.cl.models, function (da) {

                    vw.renderPerson(da)

                }, vw)

                return this
            },

            renderPerson: function (per) {


                var newPer = new app.v.Person({

                    model: per
                })
                $('#listing').A(newPer.r().el)
            },

            initialize: function (data) {

                this.cl = new app.c.People(data);

                this.r()
            }

        })


        $.dI('wrapper', [

            $('<h1>').A('games directory').col('o'),

            $.dK('tools', [

                $('<h4>').col('g').A('search:'), $.br(),
                $('<input>').id('searchBox'), $.br(),
                $('<h5>').col('y').A('Filter:'), $.dI('filter'),
                $.dI('count')
            ]),

            $.ulI('listing', [])


        ])

        app.i(dirData)

    }


    DIREC = function () {
        z();
        $CSS(CssOb);

        app = {m: {}, v: {}, r: {}, c: {}}

        app.r.Rtr = Bb.R.x({
            routes: {

                'filter/:type': 'urlFilter'
            },

            urlFilter: function (type) {
                direc.filterType = type
                direc.trigger('change:filterType')
            }

        })


        app.i = function () {
            direc = new app.v.People(dirData)

            rtr = new app.r.Rtr()
            Bb.h.start()
        }


        app.m.Person = Bb.Model.extend({
            defaults: {ID: '', fN: '', lN: '', par: '', p: '', e: ''},
            initialize: function () {
                this.set('type', this.get('par') ? 'student' : 'parent')
            }
        })

        app.c.People = Bb.C.x({
            model: app.m.Person,
            comparator: function (per) {
                return per.get('lN')
            }
        })
        app.v.Person = Bb.V.x({
            events: {

                'click .list-header': 'showDetails'
            },

            showDetails: function (e) {

                var q = $(e.target)
                q.toggleClass('active')
                q.siblings('.details').slideToggle('fast')
            },

            tagName: 'li',
            attributes: function () {
                return {class: 'person ' + this.model.get('type')}
            },
            tp: function (o) {

                return $('<h3>').A(
                    $.sp(o.fN + ' ' + o.lN + ' ( ' + o.type + ' )').K('list-header'),
                    $.dK('details', [
                        'phone: ' + o.p, $.br(),
                        'email: ', $.a(o.e)
                    ])
                )
            },

            r: function () {

                ob = this.model

                j = ob.toJSON()
                $l('render:' + j)
                this.A(
                    this.tp(j)
                )

                return this
            }
        })
        app.v.People = Bb.V.x({

            events: {

                'keyup #searchBox': 'searchFilter'

            },

            getTypes: function () {
            },
            searchFilter: function () {


            },
            filterBySearch: function () {


            },
            filterByType: function () {


            },


            createFilters: function () {
            },
            setFilter: function () {
            },

            el: '#wrapper',

            r: function () {
                var vw = this,
                    q;
                $('#listing').empty()

                _.e(this.cl.models, function (da) {

                    vw.renderPerson(da)

                }, vw)

                return this
            },

            renderPerson: function (per) {


                var newPer = new app.v.Person({

                    model: per
                })
                $('#listing').A(newPer.r().el)
            },

            initialize: function (data) {

                this.cl = new app.c.People(data);

                this.r()
            }

        })


        $.dI('wrapper', [

            $('<h1>').A('games directory').col('o'),

            $.dK('tools', [

                $('<h4>').col('g').A('search:'), $.br(),
                $('<input>').id('searchBox'), $.br(),
                $('<h5>').col('y').A('Filter:'), $.dI('filter'),
                $.dI('count')
            ]),

            $.ulI('listing', [])


        ])
        app.i(dirData)

    }


    function pre() {
        _vw = function (o) {
            o = o || {}
            if (F(o.i)) {
                o.initialize = o.i
            }

            if (o.q) {
                o.el = q
            }
            return o
        }

        $MS = function (ms, cHeader, cBody) {
            z()
            var m = $Ms(ms)

            if (S(cHeader)) {
                m.C(cHeader)
            }
            if (S(cBody)) {
                $.C(cBody)
            }
            return $
        }

        $.ipI = function (id, arr) {
            var q = $.ip().id(id)
            if (A(arr)) {
                _.e(arr, function (qq) {
                    q.A(qq)
                })
            }
            else if (arr) {
                q.A(arr)
            }
            return q
        }

        $.ulI = function (id, arr) {
            var q = $.ul().id(id)
            if (A(arr)) {
                _.e(arr, function (qq) {
                    q.A(qq)
                })
            }
            else if (arr) {
                q.A(arr)
            }
            return q
        }

    }

    pre()

}
function bfRoll(){
    tp = {
        ix: function (vw) {
            var recs = this.recs//, o=vw.model.attributes

            return $.sp().A(
                $.h2('There are ' + vw.count() + ' recs'),
                $.dK('recs')
            )
        }
    }


    Roll = {}
    Roll.Rec = Bb.M.x({})

    Roll.Recs = Bb.C.x({

        localStorage: new Store('recs')

    })


    Roll.Ix = Bb.V.x({
        tp: 'ix',
        initialize: function () {
            $l('ix')
            this.recs = new Roll.Recs()
            this.recs.on('all', this.render, this)
            this.recs.fetch()
            this.recs.on('all', this.r, this)
        },
        r: function () {
            this.$el.html(tp[this.tp](this))
            var form = new Roll.Ix.Form()
            this.$('.recs').A(form.r().el)
            return this
        },
        count: function () {
            return _.z(this.recs)
        }
    })


    Roll.Ix.Form = Bb.V.x({
        tagName: 'form',

        initialize: function () {
            $l('Ix.Form')
            this.r()
        },

        r: function () {
            this.$el.A($.h1('afssafsafsfsdfsd'))
            return this
        }
    })


    Roll.Rt = Bb.R.x({

        initialize: function (o) {
            $l('rt')
            this.q = o.q
        },

        routes: {'': '_'},

        _: function () {
            $l('_')

            var vw = new Roll.Ix()
            this.q.E().A(vw.r().el)

        }
    })


    Roll.boot = function (ctDv) {

        new Roll.Rt({

            q: ctDv

        })

        Bb.h.start()
    }


    ROLL = function () {
        z();
        $Ms('BFROLL')

        $l('------------------- ROLL ----------------------')

        ctDv = $.dK('ct', [

            $.h1('Recs'),
            $.p().A($.a('intro')),
            $.dI('roll', [])

        ])
        Roll.boot(ctDv)

    }


}
