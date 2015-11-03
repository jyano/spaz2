

$ls=function(k,v0){
    if(D(v0)){ $ls.s(k,v0)  }
    return function self(v){
        if(U(v)){return $ls.g(k)}
        $ls.s(k,v)
        return self}
}



$ls._=localStorage
$ls.s=function(k,v){
    $ls._.setItem(k, v)
    return $ls
}
$ls.g=function(k){

    return $ls._.getItem(k)

}
$ls.r=$ls.rm=function(k){
    var vOld = $ls._.getItem(k)
    $ls._.removeItem(k)
    return vOld
}
$ls.l=$ls.L=function(){
    return $ls._.length
}
$ls.x=$ls.clr=function(){
    $ls._.clear()
    return $ls
}

LCS=function(){$.x('r','localStorage')

    $ls.s('food', 'zebra')


  //  j = $ls('jason'); j('eats')

   // j = $ls('jason')('eats')
    j = $ls('jason', 'eats')
    $.h1(   'i didnt know that jason '+
        j()+' '+$ls.g('food')+'!'    )
}

ssS=sessionStorage
sR=function(a){var i=ssS.getItem(a); ssS.removeItem(a); return i}
sS=function(a,b){ssS.setItem(a,b); return ssS}
sG=function(a){return ssS.getItem(a)}
sL=function(){return ssS.length}
sX=function(){ssS.clear();return ssS}



saveFromLocStor=function(){

        i = ta().id('input')

        i.q.value=localStorage
                .getItem('myText')||''

        i.o('u',function(){
            localStorage.setItem('mytext',
                i.value)
        },false)
    }




readDatFromOtherPageLoc=function(){
        //put windows side by side and watch one update the other
        i=qi('input')
        I(function(){

            i.q.value=localStorage.getItem('myText')||''
        },50) }




saveFromSesStor=function(){

    i = ta().id('input')

    i.q.value = sessionStorage.getItem('myText') || ''

    i.o('u', function(){

        sessionStorage

        .setItem('mytext', i.value)

    }, false)



}



JQLS1=function() {
    $.x('o', 'jqls')
    $.d([  $.h3('Pending')

        /*
         ,  $.d([

         $.dK('task-header').A('Sample Header'),

         $.d([  '25/06/1992'  ]).K('task-date'),

         $.d(['Lorem Ipsum Dolor Sit Amet']).K('task-desc')


         ]).K('td-task')
         */


    ]).id('pending').K('task-list')
    $.d([ $.h3('In Progress')  ]).id('inProgress').K('task-list')
    $.d([ $.h3('Completed') ]).id('completed').K('task-list')
    $.d([


        $.h3('Add a task'),


        $.f([

            $.ip().ph('Title'),

            $.ta().ph('Description'),

            $.ip().ph('Due Date (dd/mm/yyyy)').datepicker(),

            $.bt('Add Task').K('btn btn-primary')

        ]).C('u').id('td-form'),


        $.bt('Clear Data').K('btn btn-primary'),


        $.d(['Drag Here to Delete']).id('delete-div')




    ]).K('task-list')




    // {

    // width:250; // float:left;
    // mar:0;
    // background-color:gray;
    // min-height:240;
    // border-radius:10;
    // padding-bottom:15;

    // }



    $CSS({


        '.task-list': {
            w: '250px', float: 'left',
            mar: '0px', C: 'gray',  'min-height': '240px',
            'border-radius': '10px',   'padding-bottom': '15px'
        },

        h3: {'text-align': 'center'},

        '.task-list input, .task-list textarea': {w: '240px', mar: '1px 5px'},

        '.task-list input': {h: '30px'},
        '.task-list input[type="button"]': {w: '100px', mar: '5px'},

        '.td-task': {'border-radius': '5px', C: 'g', w: '230px', mar: '5px', pad: '5px'},

        '.td-task > .task-header': {'font-weight': 'bold'},
        '.td-task >.task-date': {'font-size': 'small', 'font-style': 'italic'},
        '.td-task > .task-desc': {'font-size': 'smaller'},


        '#delete-div': {
            C:'b',    bor:'3px dotted #000',    mar:'10px',    h: '75px',
            'line-height': '75px',   'text-align': 'center' }




    })
    //<style type="text/css"> h3{text-align:center;  }</style>

    $l($('head').oh())
    /*
     codes = { "1" : "#pending",  "2" : "#inProgress",  "3" : "#completed"}

     El=function(o){var q
     if(q=$(codes[o.code])){

     wrapper= $.dI('task-'+o.id).K('td-task').at('data', o.id)


     wrapper.A(
     $.d(o.tt).K('task-header'),
     $.d(o.date).K('task-date'),
     $.d(o.desc).K('task-desc')
     ).a2(q)}

     }

     addItem = function(dat){
     ips = $('#td-form :input')
     if(ips.length!=4){return}
     if(!tt){return $l("Title empty!")}
     El(dat[id=_.gT()]={ id:id,
     code: "1",
     tt: ips[0].value, date:ips[2].value,  desc:ips[1].value})
     ips[0].value= ips[1].value= ips[2].value = ''
     $ls.s('tdData', _.jS(dat))}

     rmEl = function(o){ $('#task-'+o.id).rm() }




     exEl = El({code: "1",  id: "123",
     tt: "My Uber Important Task", date: "5/2/2014",
     desc: "I have to do a lot of steps to implement this task!"})



     wrapper.dgb({
     start: function() {  $(  '#delete-div').show()},
     stop: function() {  $(   '#delete-div').hide()}})

     $ls.s("tdData",_.jS(data=_.jP($ls.g("tdData"))))

     $('.td-task').dgg()
     $.each(codes, function(k,v){$(v).dpb({//on drop !!!
     drop: function(ev, ui) {
     el = ui.helper
     css_id = el.attr("id")
     id= css_id.replace(ops.taskId,'')
     ob = data[  id   ]
     rmEl(  ob   )
     ob.code = k
     El(ob)
     data[id] = ob
     $ls.s("tdData", _.jS(data))
     $('#delete-div').hide()}})})


     $('#delete-div').dpb({
     drop: function(ev, ui) {
     el = ui.helper
     css_id = el.attr('id')
     id = css_id.replace(op.taskId, '')
     o = data[id]
     rmEl(o )
     delete data[id]
     $ls.s("tdData", _.jS(data))
     $('#delete-div').hide() }})

     */
    data = _.jP($ls.g("tdData")) || {}
    codes = {   "1" : "#pending",  "2" : "#inProgress",   "3" : "#completed"     }
    options ={}

    td={add : function(){
        var ips = $('#td-form :input'),
            id,   title,
            desc,   date,
            tempData
        if (ips.length !== 4) {return}
        title = ips[0].value
        desc = ips[1].value
        date = ips[2].value
        if (!title) {return  $.dlg("!Title")   }
        id = _.gT()
        tempData = {
            id : id, code: "1", title: title,
            date: date, desc: desc
        }

        data[id] = tempData
        $ls.s("tdData", _.jS(data))
        genEl(tempData)
        ips[0].value = "";ips[1].value = "";ips[2].value = ""

    },

        clear :function () {data={}
            $ls.s('tdData', _.jS(data))
            $('.td-task').rm() }



    }

    genEl = function(pams){
        $l('genEl')
        var parent = $(codes[pams.code]),
            wrapper
        if (!pams.code || !parent) {  $l('!parent'); return   }


        wrapper = $.d()
        wrapper.at({class: 'td-task', id: 'task-' + pams.id, data: pams.id })
            .a2(parent)

        $.d().at( {class: 'task-header', text: pams.title }).a2(wrapper)
        $.d().at({class: 'task-date', text: pams.date}).a2(wrapper)
        $.d().at({class: 'task-desc', text: pams.desc}).a2(wrapper)

        wrapper.draggable({
            start: function() {$("#" + 'delete-div').show()},
            stop: function() {$("#" + 'delete-div').hide()},
            revert: "invalid", revertDuration : 200})
    }



    rmEl = function(pams){ $('#task-'+pams.id).rm() }



    $.each(data, function (index, pams) {genEl(pams)})

    /*genEl({
     id: "123",
     code: "1",
     title: "asd",
     date: "22/12/2013",
     desc: "Blah Blah"
     });*/  /*rmEl({
     id: "123",
     code: "1",
     title: "asd",
     date: "22/12/2013",
     desc: "Blah Blah"
     });*/

    // Adding drop function to each category of task and del div

    $.each(codes,    function (index, value) {  $(value).droppable({

        drop: function (event, ui) {
            var element = ui.helper,
                css_id = element.attr("id"),
                id = css_id.replace('task-', ""),
                object = data[id]
            rmEl(object)
            object.code = index
            genEl(object)
            data[id] = object
            $ls.s("tdData", _.jS(data))
            $('#delete-div').hide()}})})
    $('#delete-div').droppable({
        drop: function(event, ui) {
            var element = ui.helper,
                css_id = element.attr("id"),
                id = css_id.replace('task-', ""),
                object = data[id];

            // Removing old element
            rmEl(object);

            // Updating local storage
            delete data[id];
            $ls.s("tdData", _.jS(data));

            // Hiding Delete Area
            $("#" + 'delete-div').hide();
        }
    })







}
dfx = {
    tdTask: "td-task",
    tdHeader: "task-header",
    tdDate: "task-date", tdDesc: "task-desc",
    taskId: "task-", formId: "td-form",
    dataAttribute: "data",
    delDiv: 'delete-div'
}
// http://www.sitepoint.com/building-list-jquery-local-storage/


JQLS=function() {
    $.x('o', 'jqls')



    $.d([  $.h3('Pending')

        /*
         ,  $.d([
         $.dK('task-header').A('Sample Header'),
         $.d([  '25/06/1992'  ]).K('task-date'),
         $.d(['Lorem Ipsum Dolor Sit Amet']).K('task-desc')
         ]).K('td-task')
         */

    ]).id('pending').K('task-list')
    $.d([ $.h3('In Progress')  ]).id('inProgress').K('task-list')
    $.d([ $.h3('Completed') ]).id('completed').K('task-list')
    $.d([
        $.h3('Add a task'),
        $.f([
            $.ip().ph('Title'),
            $.ta().ph('Description'),
            $.ip().ph('Due Date (dd/mm/yyyy)').datepicker(),
            $.bt('Add Task').K('btn btn-primary')
        ]).C('u').id('td-form'),
        $.bt('Clear Data').K('btn btn-primary'),
        $.d(['Drag Here to Delete']).id('delete-div')




    ]).K('task-list')




    // {

    // width:250; // float:left;
    // mar:0;
    // background-color:gray;
    // min-height:240;
    // border-radius:10;
    // padding-bottom:15;

    // }



    $CSS({


        '.task-list': {
            w: '250px', float: 'left',
            mar: '0px', C: 'gray',  'min-height': '240px',
            'border-radius': '10px',   'padding-bottom': '15px'
        },

        h3: {'text-align': 'center'},

        '.task-list input, .task-list textarea': {w: '240px', mar: '1px 5px'},

        '.task-list input': {h: '30px'},
        '.task-list input[type="button"]': {w: '100px', mar: '5px'},

        '.td-task': {'border-radius': '5px', C: 'g', w: '230px', mar: '5px', pad: '5px'},

        '.td-task > .task-header': {'font-weight': 'bold'},
        '.td-task >.task-date': {'font-size': 'small', 'font-style': 'italic'},
        '.td-task > .task-desc': {'font-size': 'smaller'},


        '#delete-div': {
            C:'b',    bor:'3px dotted #000',    mar:'10px',    h: '75px',
            'line-height': '75px',   'text-align': 'center' }




    })
    //<style type="text/css"> h3{text-align:center;  }</style>

    $l($('head').oh())

    data = _.jP($ls.g("tdData")) || {}
    codes = {   "1" : "#pending",  "2" : "#inProgress",   "3" : "#completed"     }
    options ={}

    td={add : function(){
        var ips = $('#td-form :input'),
            id,   title,
            desc,   date,
            tempData
        if (ips.length !== 4) {return}
        title = ips[0].value
        desc = ips[1].value
        date = ips[2].value
        if (!title) {return  $.dlg("!Title")   }
        id = _.gT()
        tempData = {
            id : id, code: "1", title: title,
            date: date, desc: desc
        }

        data[id] = tempData
        $ls.s("tdData", _.jS(data))
        genEl(tempData)
        ips[0].value = "";ips[1].value = "";ips[2].value = ""

    },

        clear :function () {data={}
            $ls.s('tdData', _.jS(data))
            $('.td-task').rm() }



    }



    genEl = function(pams){$l('genEl')
        pams=pams||{}
        var parent
        if (!pams.code) {$l('!pams.code'); return;}
        parent= $(codes[pams.code]), wrapper;
        if (!parent) {$l('!parent'); return}
        wrapper = $.d()
            .at({class: 'td-task',   id:'task-'+pams.id,    data: pams.id}).a2(parent)
        $.d().at( {class: 'task-header', text: pams.title }).a2(wrapper);
        $.d().at({class: 'task-date', text: pams.date}).a2(wrapper)
        $.d({class: 'task-desc', text: pams.desc}).a2(wrapper)
        wrapper.draggable({
            start: function() {$("#" + 'delete-div').show()},
            stop: function() {$("#" + 'delete-div').hide()},
            revert: "invalid", revertDuration : 200})}


    rmEl = function(pams){ $('#task-'+pams.id).rm() }
    $.each(data, function (index, pams) {genEl(pams)})

    /*genEl({
     id: "123", code: "1",
     title: "asd",   date: "22/12/2013",  desc: "Blah Blah"     });*/


    /*rmEl({      id: "123",
     code: "1",  title: "asd",
     date: "22/12/2013",
     desc: "Blah Blah"
     });*/


    // Adding drop function to each category of task and del div
    $.each({   "1" : "#pending",  "2" : "#inProgress",   "3" : "#completed"     },


        function (index, value) {

            $(value).droppable({
                drop: function (event, ui) {
                    var element = ui.helper,
                        css_id = element.attr('id'),
                        id = css_id.replace('task-', ''),
                        object = data[id]
                    rmEl(object)
                    object.code = index
                    genEl(object)
                    data[id] = object

                    $ls.s("tdData", _.jS(data))
                    $('#delete-div').hide()}


            })})



    $('#delete-div').droppable({

        drop: function(event, ui) {
            var element = ui.helper,
                css_id = element.attr("id"),
                id = css_id.replace('task-', ""),
                object = data[id];

            // Removing old element
            rmEl(object);

            // Updating local storage
            delete data[id];
            $ls.s("tdData", _.jS(data));

            // Hiding Delete Area
            $("#" + 'delete-div').hide();
        }
    })



}


function ditto(){
	ssS=sessionStorage
	sR=function(a){
		var i=ssS.getItem(a)
		ssS.removeItem(a)
		return i
	}
	sS=function(a,b){
		ssS.setItem(a,b);
		return ssS
	}
	sG=function(a){return ssS.getItem(a)}
	sL=function(){return ssS.length}
	sX=function(){
		ssS.clear();
		return ssS
	}
	lcS=localStorage
	lR=function(a){
		var i=lcS.getItem(a)
		lcS.removeItem(a)
		return i
	}
	lS=function(a,b){
		lcS.setItem(a,b);
		return lcS
	}
	lG=function(a){return lcS.getItem(a)}
	lL=function(){return lcS.length}
	lX=function(){
		lcS.clear();
		return lcS
	}
	$ls=function(k,v0){
		if(D(v0)){
			$ls.s(k,v0)
		}
		return function self(v){
			if(U(v)){
				return $ls.g(k)
			}
			$ls.s(k,v)
			return self
		}
	}
	$ls._=localStorage
	$ls.s=function(k,v){
		$ls._.setItem(k,v)
		return $ls
	}
	$ls.g=function(k){
		return $ls._.getItem(k)
	}
	$ls.r=$ls.rm=function(k){
		var vOld=$ls._.getItem(k)
		$ls._.removeItem(k)
		return vOld
	}
	$ls.l=$ls.L=function(){
		return $ls._.length
	}
	$ls.x=$ls.clr=function(){
		$ls._.clear()
		return $ls
	}
	saveFromLocStor=function(){
		i=ta().id('input')
		i.q.value=localStorage
			.getItem('myText')||''
		i.o(
			'u',function(){
				localStorage.setItem(
					'mytext',
					i.value
				)
			},false
		)
	}
	readDatFromOtherPageLoc=function(){
		//put windows side by side and watch one update the other
		i=qi('input')
		I(
			function(){
				i.q.value=localStorage.getItem('myText')||''
			},50
		)
	}
	saveFromSesStor=function(){
		i=ta().id('input')
		i.q.value=sessionStorage.getItem('myText')||''
		i.o(
			'u',function(){
				sessionStorage
					.setItem('mytext',i.value)
			},false
		)
	}
	bbLocStorPLUG=function(){
		(function(root,factory){
			if(typeof exports==='object'&&typeof require==='function'){
				module.exports=factory(require("backbone"));
			}else
				if(typeof define==="function"&&define.amd){
					// AMD. Register as an anonymous module.
					define(
						["backbone"],function(bb){
							// Use global variables if the locals are undefined.
							return factory(bb||root.bb);
						}
					);
				}else{
					factory(bb);
				}
		}(
			this,function(bb){
				// A simple module to replace `bb.sync` with *localStorage*-based
				// persistence. Models are given GUIDS, and saved into a JSON object. Simple
				// as that.
				// Generate four random hex digits.
				function S4(){
					return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
				};
				// Generate a pseudo-GUID by concatenating random hexadecimal.
				function guid(){
					return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
				}
				
				function isObject(item){
					return item===Object(item);
				}
				
				function contains(array,item){
					var i=array.length;
					while(i--) if(array[i]===item) return true;
					return false;
				}
				
				function extend(obj,props){
					for(var key in props) obj[key]=props[key]
					return obj;
				}
				
				function result(object,property){
					if(object==null) return void 0;
					var value=object[property];
					return (typeof value==='function')?object[property]():value;
				}
				
				// Our Store is represented by a single JS object in *localStorage*. Create it
				// with a meaningful name, like the name you'd give a table.
				// window.Store is deprectated, use bb.LocalStorage instead
				bb.LocalStorage=window.Store=function(name,serializer){
					if(!this.localStorage){
						throw "bb.localStorage: Environment does not support localStorage."
					}
					this.name=name;
					this.serializer=serializer||{
						serialize:function(item){
							return isObject(item)?JSON.stringify(item):item;
						},
						// fix for "illegal access" error on Android when JSON.parse is passed null
						deserialize:function(data){
							return data&&JSON.parse(data);
						}
					};
					var store=this.localStorage().getItem(this.name);
					this.records=(store&&store.split(","))||[];
				};
				extend(
					bb.LocalStorage.prototype,{
						// Save the current state of the **Store** to *localStorage*.
						save:function(){
							this.localStorage().setItem(this.name,this.records.join(","));
						},
						// Add a model, giving it a (hopefully)-unique GUID, if it doesn't already
						// have an id of it's own.
						create:function(model){
							if(!model.id&&model.id!==0){
								model.id=guid()
								model.set(model.idAttribute,model.id)
							}
							this.localStorage().setItem(
								this._itemName(model.id),
								this.serializer.serialize(model)
							)
							this.records.push(model.id.toString())
							this.save();
							return this.find(model)
						},
						// Update a model by replacing its copy in `this.data`.
						update:function(model){
							this.localStorage().setItem(
								this._itemName(model.id),
								this.serializer.serialize(model)
							)
							var modelId=model.id.toString()
							if(!contains(this.records,modelId)){
								this.records.push(modelId)
								this.save()
							}
							return this.find(model)
						},
						// Retrieve a model from `this.data` by id.
						find:function(model){
							return this.serializer.deserialize(
								this.localStorage().getItem(this._itemName(model.id))
							)
						},
						// Return the array of all models currently in storage.
						findAll:function(){
							var result=[]
							for(var i=0,id,data; i<this.records.length; i++){
								id=this.records[i]
								data=this.serializer.deserialize(this.localStorage().getItem(this._itemName(id)));
								if(data!=null) result.push(data)
							}
							return result
						},
						// Delete a model from `this.data`, returning it.
						destroy:function(model){
							this.localStorage().removeItem(this._itemName(model.id));
							var modelId=model.id.toString();
							for(var i=0,id; i<this.records.length; i++){
								if(this.records[i]===modelId){
									this.records.splice(i,1);
								}
							}
							this.save();
							return model;
						},
						localStorage:function(){
							return localStorage;
						},
						// Clear localStorage for specific collection.
						_clear:function(){
							var local=this.localStorage(),
								itemRe=new RegExp("^"+this.name+"-");
							// Remove id-tracking item (e.g., "foo").
							local.removeItem(this.name);
							// Match all data items (e.g., "foo-ID") and remove.
							for(var k in local){
								if(itemRe.test(k)){
									local.removeItem(k);
								}
							}
							this.records.length=0;
						},
						// Size of localStorage.
						_storageSize:function(){
							return this.localStorage().length;
						},
						_itemName:function(id){
							return this.name+"-"+id;
						}
					}
				)
				// localSync delegate to the model or collection's
				// *localStorage* property, which should be an instance of `Store`.
				// window.Store.sync and bb.localSync is deprecated, use bb.LocalStorage.sync instead
				bb.LocalStorage.sync=window.Store.sync=bb.localSync=function(method,model,options){
					var store=result(model,'localStorage')||result(model.collection,'localStorage');
					var resp,errorMessage;
					//If $ is having Deferred - use it.
					var syncDfd=bb.$?
								(bb.$.Deferred&&bb.$.Deferred()):
								(bb.Deferred&&bb.Deferred());
					try{
						switch(method){
							case "read":
								resp=model.id!=undefined?store.find(model):store.findAll();
								break;
							case "create":
								resp=store.create(model);
								break;
							case "update":
								resp=store.update(model);
								break;
							case "delete":
								resp=store.destroy(model);
								break;
						}
					}catch(error){
						if(error.code===22&&store._storageSize()===0)
							errorMessage="Private browsing is unsupported";
						else
							errorMessage=error.message;
					}
					if(resp){
						if(options&&options.success){
							if(bb.VERSION==="0.9.10"){
								options.success(model,resp,options);
							}else{
								options.success(resp);
							}
						}
						if(syncDfd){
							syncDfd.resolve(resp);
						}
					}else{
						errorMessage=errorMessage?errorMessage
							:"Record Not Found";
						if(options&&options.error)
							if(bb.VERSION==="0.9.10"){
								options.error(model,errorMessage,options);
							}else{
								options.error(errorMessage);
							}
						if(syncDfd)
							syncDfd.reject(errorMessage);
					}
					// add compatibility with $.ajax
					// always execute callback for success and error
					if(options&&options.complete) options.complete(resp);
					return syncDfd&&syncDfd.promise();
				};
				bb.ajaxSync=bb.sync
				bb.getSyncMethod=function(model,options){
					forceAjaxSync=options&&options.ajaxSync
					if(!forceAjaxSync&&(result(model,'localStorage')||
						result(model.collection,'localStorage'))){
						return bb.localSync
					}
					return bb.ajaxSync
				}
				// Override 'bb.sync' to default to localSync,
				// the original 'bb.sync' is still available in 'bb.ajaxSync'
				bb.sync=function(met,md,op){
					return bb.getSyncMethod(md,op).apply(this,[met,md,op])
				}
				return bb.LocalStorage
			}
		))
	}
	BBLS=function(){
		$.x()
		bbLocStorPLUG()
		Cl=bb.C.e(
			{
				localStorage:new bb.LocalStorage('clN')
			}
		)
	}
	function sessStore(){
		ssS=sessionStorage
		sR=function(a){
			var i=ssS.getItem(a);
			ssS.removeItem(a);
			return i
		}
		sS=function(a,b){
			ssS.setItem(a,b);
			return ssS
		}
		sG=function(a){
			return ssS.getItem(a)
		}
		sL=function(){
			return ssS.length
		}
		sX=function(){
			ssS.clear();
			return ssS
		}
	}
	
	function locApps(){
		JQLS1=function(){
			$.x('o','jqls')
			$.d(
				[
					$.h3('Pending')
					
					/*
					 ,  $.d([
		
					 $.dK('task-header').A('Sample Header'),
		
					 $.d([  '25/06/1992'  ]).K('task-date'),
		
					 $.d(['Lorem Ipsum Dolor Sit Amet']).K('task-desc')
		
		
					 ]).K('td-task')
					 */
				]
			).id('pending').K('task-list')
			$.d([$.h3('In Progress')]).id('inProgress').K('task-list')
			$.d([$.h3('Completed')]).id('completed').K('task-list')
			$.d(
				[
					$.h3('Add a task'),
					$.f(
						[
							$.ip().ph('Title'),
							$.ta().ph('Description'),
							$.ip().ph('Due Date (dd/mm/yyyy)').datepicker(),
							$.bt('Add Task').K('btn btn-primary')
						]
					).C('u').id('td-form'),
					$.bt('Clear Data').K('btn btn-primary'),
					$.d(['Drag Here to Delete']).id('delete-div')
				]
			).K('task-list')
			// {
			// width:250; // float:left;
			// mar:0;
			// background-color:gray;
			// min-height:240;
			// border-radius:10;
			// padding-bottom:15;
			// }
			$CSS(
				{
					'.task-list':{
						w:'250px',float:'left',
						mar:'0px',C:'gray','min-height':'240px',
						'border-radius':'10px','padding-bottom':'15px'
					},
					h3:{'text-align':'center'},
					'.task-list input, .task-list textarea':{w:'240px',mar:'1px 5px'},
					'.task-list input':{h:'30px'},
					'.task-list input[type="button"]':{w:'100px',mar:'5px'},
					'.td-task':{'border-radius':'5px',C:'g',w:'230px',mar:'5px',pad:'5px'},
					'.td-task > .task-header':{'font-weight':'bold'},
					'.td-task >.task-date':{'font-size':'small','font-style':'italic'},
					'.td-task > .task-desc':{'font-size':'smaller'},
					'#delete-div':{
						C:'b',bor:'3px dotted #000',mar:'10px',h:'75px',
						'line-height':'75px','text-align':'center'
					}
				}
			)
			//<style type="text/css"> h3{text-align:center;  }</style>
			$l($('head').oh())
			/*
			 codes = { "1" : "#pending",  "2" : "#inProgress",  "3" : "#completed"}
	
			 El=function(o){var q
			 if(q=$(codes[o.code])){
	
			 wrapper= $.dI('task-'+o.id).K('td-task').at('data', o.id)
	
	
			 wrapper.A(
			 $.d(o.tt).K('task-header'),
			 $.d(o.date).K('task-date'),
			 $.d(o.desc).K('task-desc')
			 ).a2(q)}
	
			 }
	
			 addItem = function(dat){
			 ips = $('#td-form :input')
			 if(ips.length!=4){return}
			 if(!tt){return $l("Title empty!")}
			 El(dat[id=_.gT()]={ id:id,
			 code: "1",
			 tt: ips[0].value, date:ips[2].value,  desc:ips[1].value})
			 ips[0].value= ips[1].value= ips[2].value = ''
			 $ls.s('tdData', _.jS(dat))}
	
			 rmEl = function(o){ $('#task-'+o.id).rm() }
	
	
	
	
			 exEl = El({code: "1",  id: "123",
			 tt: "My Uber Important Task", date: "5/2/2014",
			 desc: "I have to do a lot of steps to implement this task!"})
	
	
	
			 wrapper.dgb({
			 start: function() {  $(  '#delete-div').show()},
			 stop: function() {  $(   '#delete-div').hide()}})
	
			 $ls.s("tdData",_.jS(data=_.jP($ls.g("tdData"))))
	
			 $('.td-task').dgg()
			 $.each(codes, function(k,v){$(v).dpb({//on drop !!!
			 drop: function(ev, ui) {
			 el = ui.helper
			 css_id = el.attr("id")
			 id= css_id.replace(ops.taskId,'')
			 ob = data[  id   ]
			 rmEl(  ob   )
			 ob.code = k
			 El(ob)
			 data[id] = ob
			 $ls.s("tdData", _.jS(data))
			 $('#delete-div').hide()}})})
	
	
			 $('#delete-div').dpb({
			 drop: function(ev, ui) {
			 el = ui.helper
			 css_id = el.attr('id')
			 id = css_id.replace(op.taskId, '')
			 o = data[id]
			 rmEl(o )
			 delete data[id]
			 $ls.s("tdData", _.jS(data))
			 $('#delete-div').hide() }})
	
			 */
			data=_.jP($ls.g("tdData"))||{}
			codes={"1":"#pending","2":"#inProgress","3":"#completed"}
			options={}
			td={
				add:function(){
					var ips=$('#td-form :input'),
						id,title,
						desc,date,
						tempData
					if(ips.length!==4){
						return
					}
					title=ips[0].value
					desc=ips[1].value
					date=ips[2].value
					if(!title){
						return $.dlg("!Title")
					}
					id=_.gT()
					tempData={
						id:id,code:"1",title:title,
						date:date,desc:desc
					}
					data[id]=tempData
					$ls.s("tdData",_.jS(data))
					genEl(tempData)
					ips[0].value="";
					ips[1].value="";
					ips[2].value=""
				},
				clear:function(){
					data={}
					$ls.s('tdData',_.jS(data))
					$('.td-task').rm()
				}
			}
			genEl=function(pams){
				$l('genEl')
				var parent=$(codes[pams.code]),
					wrapper
				if(!pams.code|| !parent){
					$l('!parent');
					return
				}
				wrapper=$.d()
				wrapper.at({class:'td-task',id:'task-'+pams.id,data:pams.id})
					.a2(parent)
				$.d().at({class:'task-header',text:pams.title}).a2(wrapper)
				$.d().at({class:'task-date',text:pams.date}).a2(wrapper)
				$.d().at({class:'task-desc',text:pams.desc}).a2(wrapper)
				wrapper.draggable(
					{
						start:function(){
							$("#"+'delete-div').show()
						},
						stop:function(){
							$("#"+'delete-div').hide()
						},
						revert:"invalid",revertDuration:200
					}
				)
			}
			rmEl=function(pams){
				$('#task-'+pams.id).rm()
			}
			$.each(
				data,function(index,pams){
					genEl(pams)
				}
			)
			/*genEl({
			 id: "123",
			 code: "1",
			 title: "asd",
			 date: "22/12/2013",
			 desc: "Blah Blah"
			 });*/
			/*rmEl({
			 id: "123",
			 code: "1",
			 title: "asd",
			 date: "22/12/2013",
			 desc: "Blah Blah"
			 });*/
			// Adding drop function to each category of task and del div
			$.each(
				codes,function(index,value){
					$(value).droppable(
						{
							drop:function(event,ui){
								var element=ui.helper,
									css_id=element.attr("id"),
									id=css_id.replace('task-',""),
									object=data[id]
								rmEl(object)
								object.code=index
								genEl(object)
								data[id]=object
								$ls.s("tdData",_.jS(data))
								$('#delete-div').hide()
							}
						}
					)
				}
			)
			$('#delete-div').droppable(
				{
					drop:function(event,ui){
						var element=ui.helper,
							css_id=element.attr("id"),
							id=css_id.replace('task-',""),
							object=data[id];
						// Removing old element
						rmEl(object);
						// Updating local storage
						delete data[id];
						$ls.s("tdData",_.jS(data));
						// Hiding Delete Area
						$("#"+'delete-div').hide();
					}
				}
			)
		}
		LCS=function(){
			$.x('r','localStorage')
			$ls.s('food','zebra')
			//  j = $ls('jason'); j('eats')
			// j = $ls('jason')('eats')
			j=$ls('jason','eats')
			$.h1(
				'i didnt know that jason '+
				j()+' '+$ls.g('food')+'!'
			)
		}
		JQLS=function(){
			$.x('o','jqls')
			$.d(
				[
					$.h3('Pending')
					
					/*
					 ,  $.d([
					 $.dK('task-header').A('Sample Header'),
					 $.d([  '25/06/1992'  ]).K('task-date'),
					 $.d(['Lorem Ipsum Dolor Sit Amet']).K('task-desc')
					 ]).K('td-task')
					 */
				]
			).id('pending').K('task-list')
			$.d([$.h3('In Progress')]).id('inProgress').K('task-list')
			$.d([$.h3('Completed')]).id('completed').K('task-list')
			$.d(
				[
					$.h3('Add a task'),
					$.f(
						[
							$.ip().ph('Title'),
							$.ta().ph('Description'),
							$.ip().ph('Due Date (dd/mm/yyyy)').datepicker(),
							$.bt('Add Task').K('btn btn-primary')
						]
					).C('u').id('td-form'),
					$.bt('Clear Data').K('btn btn-primary'),
					$.d(['Drag Here to Delete']).id('delete-div')
				]
			).K('task-list')
			// {
			// width:250; // float:left;
			// mar:0;
			// background-color:gray;
			// min-height:240;
			// border-radius:10;
			// padding-bottom:15;
			// }
			$CSS(
				{
					'.task-list':{
						w:'250px',float:'left',
						mar:'0px',C:'gray','min-height':'240px',
						'border-radius':'10px','padding-bottom':'15px'
					},
					h3:{'text-align':'center'},
					'.task-list input, .task-list textarea':{w:'240px',mar:'1px 5px'},
					'.task-list input':{h:'30px'},
					'.task-list input[type="button"]':{w:'100px',mar:'5px'},
					'.td-task':{'border-radius':'5px',C:'g',w:'230px',mar:'5px',pad:'5px'},
					'.td-task > .task-header':{'font-weight':'bold'},
					'.td-task >.task-date':{'font-size':'small','font-style':'italic'},
					'.td-task > .task-desc':{'font-size':'smaller'},
					'#delete-div':{
						C:'b',bor:'3px dotted #000',mar:'10px',h:'75px',
						'line-height':'75px','text-align':'center'
					}
				}
			)
			//<style type="text/css"> h3{text-align:center;  }</style>
			$l($('head').oh())
			data=_.jP($ls.g("tdData"))||{}
			codes={"1":"#pending","2":"#inProgress","3":"#completed"}
			options={}
			td={
				add:function(){
					var ips=$('#td-form :input'),
						id,title,
						desc,date,
						tempData
					if(ips.length!==4){
						return
					}
					title=ips[0].value
					desc=ips[1].value
					date=ips[2].value
					if(!title){
						return $.dlg("!Title")
					}
					id=_.gT()
					tempData={
						id:id,code:"1",title:title,
						date:date,desc:desc
					}
					data[id]=tempData
					$ls.s("tdData",_.jS(data))
					genEl(tempData)
					ips[0].value="";
					ips[1].value="";
					ips[2].value=""
				},
				clear:function(){
					data={}
					$ls.s('tdData',_.jS(data))
					$('.td-task').rm()
				}
			}
			genEl=function(pams){
				$l('genEl')
				pams=pams||{}
				var parent
				if(!pams.code){
					$l('!pams.code');
					return;
				}
				parent=$(codes[pams.code]), wrapper;
				if(!parent){
					$l('!parent');
					return
				}
				wrapper=$.d()
					.at({class:'td-task',id:'task-'+pams.id,data:pams.id}).a2(parent)
				$.d().at({class:'task-header',text:pams.title}).a2(wrapper);
				$.d().at({class:'task-date',text:pams.date}).a2(wrapper)
				$.d({class:'task-desc',text:pams.desc}).a2(wrapper)
				wrapper.draggable(
					{
						start:function(){
							$("#"+'delete-div').show()
						},
						stop:function(){
							$("#"+'delete-div').hide()
						},
						revert:"invalid",revertDuration:200
					}
				)
			}
			rmEl=function(pams){
				$('#task-'+pams.id).rm()
			}
			$.each(
				data,function(index,pams){
					genEl(pams)
				}
			)
			/*genEl({
			 id: "123", code: "1",
			 title: "asd",   date: "22/12/2013",  desc: "Blah Blah"     });*/
			/*rmEl({      id: "123",
			 code: "1",  title: "asd",
			 date: "22/12/2013",
			 desc: "Blah Blah"
			 });*/
			// Adding drop function to each category of task and del div
			$.each(
				{"1":"#pending","2":"#inProgress","3":"#completed"},
				function(index,value){
					$(value).droppable(
						{
							drop:function(event,ui){
								var element=ui.helper,
									css_id=element.attr('id'),
									id=css_id.replace('task-',''),
									object=data[id]
								rmEl(object)
								object.code=index
								genEl(object)
								data[id]=object
								$ls.s("tdData",_.jS(data))
								$('#delete-div').hide()
							}
						}
					)
				}
			)
			$('#delete-div').droppable(
				{
					drop:function(event,ui){
						var element=ui.helper,
							css_id=element.attr("id"),
							id=css_id.replace('task-',""),
							object=data[id];
						// Removing old element
						rmEl(object);
						// Updating local storage
						delete data[id];
						$ls.s("tdData",_.jS(data));
						// Hiding Delete Area
						$("#"+'delete-div').hide();
					}
				}
			)
		}
		BBTODOS=function(){
			dfx={
				tdTask:"td-task",
				tdHeader:"task-header",
				tdDate:"task-date",
				tdDesc:"task-desc",
				taskId:"task-",
				formId:"td-form",
				dataAttribute:"data",
				delDiv:'delete-div'
			}
			// uses constructor function to make class
			bb.lS=bb.LocalStorage=function(n){
				var ls=this
				ls.n=n
				ls.d=( $ls.g(n)&&$ls.g(n).split(',') )||[]
			}
			_.x(
				bb.lS.prototype,{
					s:function(){ $ls.s(this.n,this.d.join(',')) },  // Save the cur state of the lS
					c:function(m){
						if(!m.id){
							m.id=guid();
							m.set(m.idAttribute,m.id)
						}
						$ls.s(this.n+"-"+m.id,_.jS(m))
						this.d.push(m.id.tS())
						this.s();
						return this.f(m)
					},   // Add a md, giving it a (hopefully)-unique GUID, if it doesn't already// have an id of it's own.
					u:function(m){
						$ls.s(this.n+"-"+m.id,_.jS(m))
						if(!_.ic(this.d,m.id.tS())){
							this.d.push(m.id.tS());
							this.s()
						}
						return this.f(m)
					}, // Update a md by replacing its copy in `this.d`.
					f:function(m){return this.j($ls.g(this.n+"-"+m.id))},  // Retrieve a m from `this.d` by id.
					a:function(){return _(this.d).chain().m(function(id){return this.j($ls.g(this.n+'_'+id))},this).cp().v()}, // Ret [ stored mds ]
					x:function(m){
						if(m.isNew()){
							return false
						}
						;
						$ls.rm(this.n+"-"+m.id)
						this.d=_.rj(this.d,function(id){ return id===m.id.tS() })
						this.s();
						return m
					},  // Delete a md from `this.data`, returning it.
					localStorage:function(){ return localStorage },
					j:function(d){ return d&&_.jP(d) } // fix for "illegal access" error on Android when JSON.parse is passed null
				}
			)
			bb.lS.sync=Store.sync=bb.localSync=function(method,m,options){
				// localSync delegate to the md or collection's
				// *localStorage* property, which should be an instance of `Store`.
				// window.Store.sync and Backbone.localSync is deprectated, use Backbone.LocalStorage.sync instead
				d=m.localStorage||m.collection.localStorage;
				syncDfd=$.Deferred&&$.Deferred()
				//If $ is having Deferred - use it.
				try{
					switch(method){
						case "read":
							resp=D(m.id)?d.find(m):d.findAll();
							break;
						case "create":
							resp=d.c(m);
							break;
						case "update":
							resp=d.u(m);
							break;
						case "delete":
							resp=d.d(m);
							break;
					}
				}
				catch(z){
					zMsg=(z.code===DOMException.QUOTA_EXCEEDED_ERR&&localStorage.length===0)?"Private browsing is unsupported":z.message
				}
				if(resp){
					if(op&&op.success){
					}
					if(bb.VERSION==="0.9.10"){
						options.success(m,resp,options)
					}
					else{
						op.success(resp)
					}
					if(syncDfd){
						syncDfd.resolve(resp)
					}
				}
				else{
					errorMessage=errorMessage?errorMessage:"Record Not Found";
					if(options&&options.error)
						
						if(Backbone.VERSION==="0.9.10"){
							options.error(m,errorMessage,options)
						}
						else{
							options.error(errorMessage)
						}
					if(syncDfd){
						syncDfd.reject(errorMessage)
					}
				}
				// add compatibility with $.ajax
				// always execute callback for success and error
				if(options&&options.complete){
					options.complete(resp)
				}
				return syncDfd&&syncDfd.promise()
			}
			bb.getSyncMethod=function(m){
				return (m.localStorage||(m.collection&&m.collection.localStorage))?
					   bb.localSync:bb.ajaxSync
			}
			bb.ajaxSync=bb.sync
			bb.sync=function(met,m,op){
				// Override bb.sync  to default to localSync   (orig   bb.sync still avail  in bb.ajaxSync)
				return bb.getSyncMethod(m).apply(bb,[met,m,op])
			}
			$.x('x','todos');
			$.dI('instructions').A('Double-click to edit a todo.')//  http://jgn.me/     demo uses simp  [lS adapter](backbone-localstorage.html) to persist bb  mds within your bw  // Load the app when DOM ready
			$.dI('todoapp').A(
				$("<header>").A($.h1('todos'),$.ip().id('new-todo').at({placeholder:"What needs to be done?"})),
				$('<section>').id('main').A($.cb().id('toggle-all'),$.lb('Mark all as complete').for('toggle-all'),$.ul().id('todo-list')),
				$('<footer>').A($.a('Clear completed').id('clear-completed'),$.dI("todo-count"))
			)
			// <script type="text/template" id="stats-template">
			if(o.done){
				$.a().id("clear-completed").A('Clear'+o.done+'completed'+o.done==1?'item':'items')
			}
			$.d([$.b().A(o.remaining),o.remaining==1?'item':'items','left']).K('td-count') //  </script>
			Td=$M(
				{
					d:function(){ return {tt:'empty..',ord:tdL.nOrd(),done:false}},i:function(){
					if(!this.g('tt')){
						this.s({tt:this.df().tt})
					}
				},gg:function(){this.s({done:!this.g('done')}) }
				}
			)
			TdVw=$V(
				{
					t:'li',
					tp:function(o){
						return $.d(
							[
								$.d(
									[
										$.cb().K('toggle').at('checked',o.done?'checked':false),
										$.lb(o.tt),$.a().K('destroy')
									]
								).K('view'),
								$.ip().v(o.tt).K('edit')
							]
						)
					},
					r:function(){
						var v=this
						this.q.h(this.tp(this.model.J()));
						this.q.ggK('done',this.g('done'));
						this.ip=this.$('.edit');
						return this
					}, // Re-render the titles of the toodo item.
					e:{"click .toggle":"toggleDone","dblclick .view":"edit","click a.destroy":"clear","keypress .edit":"updateOnEnter","blur .edit":"close"},
					i:function(){
						var vw=this;
						vw.l2(vw.md,'change',vw.r);
						vw.l2(vw.md,'destroy',vw.rm)
					},  //tdV listens for md changes, re-rendering. // Since there's  a 1x1 corr btwn a td/tdV   we set a direct ref  on the md for convenience
					ggDone:function(){ this.md.gg() },   // Toggle the `"done"` state of the md.
					ed:function(){
						this.q.K("editing");
						this.ip.focus()
					}, // Switch this view into `"editing"` mode, displaying the input field.
					close:function(){
						var v=this.ip.v();
						if(!v){
							this.clear()
						}else{
							this.md.s({tt:v});
							this.q.xK("editing")
						}
					},// Close the `"editing"` mode, saving changes to the toddo.
					updOnEnter:function(e){
						if(e.keyCode==13){
							this.close()
						}
					}, // If you hit `enter`, we're through editing the item.
					clr:function(){this.md.destroy()}
				}
			)// Rm item, destroy  md.
			TdLs=$Cl(
				{
					m:Td, // todos cl backed by lS, !remote-server.
					lS:new bb.LS('tds-bb'), // Save   under the `"todos-backbone"` nspace.
					done:function(){ return this.fl(function(td){return td.g('done') }) }, // Filter down the ls of all finished tds
					remain:function(){return this.wo.apply(this,this.done())}, // Filter down the ls to only unfinished tds    //without
					nOrd:function(){ return !this.length?1:this.last().g('ord')+1}, //   gens the next order num   for new items
					compor:function(td){ return td.g('ord') }// tds sorted by orig insert ord  // tds kept sorted in seq ord  // desp being saved by unord GUID in db
				}
			);
			tdL=TdLs()
			ApVw=$V(
				{// ApVw is top-lvl// Instead of geng new el,// bind to the existing skel  of // the Ap  already present in the HT
					q:$('#tdapp'),statsTp:_.tp($('#stats-template').h()), // Our tp for the ln of stats  at   bottom of the app.
					e:{"keypress #new-todo":"createOnEnter","$ #clear-completed":"clearCompleted","$ #toggle-all":"toggleAllComplete"},// Delegated events for:// creating new items, clearing completed ones.
					i:function(){
						var vw=this// At init we bind to relv evs on Todos`cl, when items addd/chd. Kick things off by // loading any preexisting todos that might be saved in lS
						vw.ip=$("#new-td");
						vw.aCb=$("#gg-a")[0];
						vw.main=$('#main');
						vw.ftr=vw.$('ftr')
						vw.l2(TdL,'add',vw.A1);
						vw.l2(TdL,'reset',vw.Aa);
						vw.l2(TdL,'all',vw.r);
						TdL.fet()
					},
					r:function(){// Re-rendering the App just means refreshing the statistics -- the rest // of the app doesn't change.
						var done=TdL.done().length,remain=TdL.remain().length;
						if(TdL.length){
							this.main.show();
							this.ftr.show();
							this.ftr.h(this.statsTp({done:done,remain:remain}))
						}else{
							this.main.hd();
							this.ftr.hd()
						}
						this.aCb.checked= !remain
					},
					a1:function(td){ $("#td-ls").A(TdVw({md:td}).r().q)},  // Add a single td i  to the ls // by cr  a vw for it, and appending its el  to the `<ul>`.
					aA:function(){ TdL.e(this.A1,this)},
					crOnEnter:function(e){
						if(e.keyCode!=13){
							return
						}
						;
						if(!this.ip.v()){
							return
						}
						;
						tdL.cr({tt:this.ip.v()});
						this.ip.v('')
					},// Add a i in  **TdL** cl tog // If you hit ret  in the main ip field, cr // new ** td ** md,// persisting it to lS.
					clrCompleted:function(){
						_.iv(TdL.done(),'destroy');
						return false
					}, // Clear all done toodo items, destroying their mds.
					ggAllDone:function(){
						var done=this.aCb.checked;
						TdL.e(function(td){td.s({'done':done})})
					}
				}
			);
			Ap=ApVw()
			function S4(){
				var s4=1+M.random();
				s4=(s4*0x10000)|0;
				s4=s4.toString(16).substring(1);
				return s4
			}   // Gen  four rand  hex digits
			function guid(){return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4())}
			
			// Generate a pseudo-GUID by concatenating random hexadecimal.
			// Our Store is rep by a single JS object in *localStorage*.
			// Create it with a meaningful n, like the n you'd give a table.
		}
	}
	
	// http://www.sitepoint.com/building-list-jquery-local-storage/
}