((function fn(){//     Underscore.js 1.8.3
    var root = this,previousUnderscore = root._, ArrayProto = Array.prototype, ObjProto = Object.prototype,
        FuncProto = Function.prototype,push = ArrayProto.push,   slice = ArrayProto.slice, toString = ObjProto.toString, hasOwnProperty   = ObjProto.hasOwnProperty,
        nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeBind = FuncProto.bind, nativeCreate = Object.create,
        Ctor = function(){}, _ = function(obj) {if (obj instanceof _) {return obj};if (!(this instanceof _)) {return new _(obj)}; this._wrapped = obj}
    root._=_; _.VERSION = '1.8.3';
    _.filter = _.select = function (obj, predicate, ctx) {
        var results = [];
        predicate = cb(predicate, ctx);
        _.each(obj, function (v, index, list) {
            if (predicate(v, index, list)) results.push(v);
        });
        return results;
    }
    _.rj = _.reject = function (obj, predicate, ctx) {
        return _.filter(obj, _.negate(cb(predicate)), ctx)
    }
    _.ev = _.every = _.all = function (obj, predicate, ctx) {
        predicate = cb(predicate, ctx);
        var keys = !isArrayLike(obj) && _.keys(obj),
            length = (keys || obj).length;
        for (var index = 0; index < length; index++) {
            var curKey = keys ? keys[index] : index;
            if (!predicate(obj[curKey], curKey, obj)) return false;
        }
        return true;
    };
    _.contains = _.includes = _.include = function (obj, item, fromIndex, guard) {
        if (!isArrayLike(obj)) obj = _.values(obj);
        if (typeof fromIndex != 'number' || guard) fromIndex = 0;
        return _.indexOf(obj, item, fromIndex) >= 0;
    };
    _.where = function (obj, attrs) {
        return _.filter(obj, _.matcher(attrs));
    };
    _.findWhere = function (obj, attrs) {
        return _.find(obj, _.matcher(attrs));
    };
    _.max = function (obj, iteratee, ctx) {
        var result = -Infinity, lastComputed = -Infinity,
            value, computed;
        if (iteratee == null && obj != null) {
            obj = isArrayLike(obj) ? obj : _.values(obj);
            for (var i = 0, length = obj.length; i < length; i++) {
                value = obj[i];
                if (value > result) {
                    result = value;
                }
            }
        } else {
            iteratee = cb(iteratee, ctx);
            _.each(obj, function (value, index, list) {
                computed = iteratee(value, index, list);
                if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
                    result = value;
                    lastComputed = computed;
                }
            });
        }
        return result;
    };
    _.min = function (obj, iteratee, ctx) {
        var result = Infinity, lastComputed = Infinity,
            value, computed;
        if (iteratee == null && obj != null) {
            obj = isArrayLike(obj) ? obj : _.values(obj);
            for (var i = 0, length = obj.length; i < length; i++) {
                value = obj[i];
                if (value < result) {
                    result = value;
                }
            }
        } else {
            iteratee = cb(iteratee, ctx);
            _.each(obj, function (value, index, list) {
                computed = iteratee(value, index, list);
                if (computed < lastComputed || computed === Infinity && result === Infinity) {
                    result = value;
                    lastComputed = computed;
                }
            });
        }
        return result;
    }
    _.shuffle = function (obj) {
        var set = isArrayLike(obj) ? obj : _.values(obj);
        var length = set.length;
        var shuffled = Array(length);
        for (var index = 0, rand; index < length; index++) {
            rand = _.random(0, index);
            if (rand !== index) shuffled[index] = shuffled[rand];
            shuffled[rand] = set[index];
        }
        return shuffled;
    };
    _.sample = function (obj, n, guard) {
        if (n == null || guard) {
            if (!isArrayLike(obj)) obj = _.values(obj);
            return obj[_.random(obj.length - 1)];
        }
        return _.shuffle(obj).slice(0, Math.max(0, n));
    };
    _.sortBy = function (obj, iteratee, ctx) {
        iteratee = cb(iteratee, ctx);
        return _.pluck(_.map(obj, function (value, index, list) {
            return {
                value: value,
                index: index,
                criteria: iteratee(value, index, list)
            };
        }).sort(function (left, right) {
            var a = left.criteria;
            var b = right.criteria;
            if (a !== b) {
                if (a > b || a === void 0) return 1;
                if (a < b || b === void 0) return -1;
            }
            return left.index - right.index;
        }), 'value');
    };
    _.toArray = function (obj) {
        if (!obj) return [];
        if (_.isArray(obj)) return slice.call(obj);
        if (isArrayLike(obj)) return _.map(obj, _.identity);
        return _.values(obj);
    };
    _.partition = function (obj, predicate, ctx) {
        predicate = cb(predicate, ctx);
        var pass = [], fail = [];
        _.each(obj, function (value, key, obj) {
            (predicate(value, key, obj) ? pass : fail).push(value);
        });
        return [pass, fail];
    };
    _.first = _.head = _.take = function (array, n, guard) {
        if (array == null) return void 0;
        if (n == null || guard) return array[0];
        return _.initial(array, array.length - n);
    };
    _.initial = function (array, n, guard) {
        return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
    };
    _.last = function (array, n, guard) {
        if (array == null) return void 0;
        if (n == null || guard) return array[array.length - 1];
        return _.rest(array, Math.max(0, array.length - n));
    };
    _.rest = _.tail = _.drop = function (array, n, guard) {
        return slice.call(array, n == null || guard ? 1 : n);
    };
    _.compact = function (array) {
        return _.filter(array, _.identity);
    };
    _.flatten = function (array, shallow) {
        return flatten(array, shallow, false);
    };
    _.without = function (array) {
        return _.difference(array, slice.call(arguments, 1));
    };
    _.uniq = _.unique = function (array, isSorted, iteratee, ctx) {
        if (!_.isBoolean(isSorted)) {
            ctx = iteratee;
            iteratee = isSorted;
            isSorted = false;
        }
        if (iteratee != null) iteratee = cb(iteratee, ctx);
        var result = [];
        var seen = [];
        for (var i = 0, length = getLength(array); i < length; i++) {
            var value = array[i],
                computed = iteratee ? iteratee(value, i, array) : value;
            if (isSorted) {
                if (!i || seen !== computed) result.push(value);
                seen = computed;
            } else if (iteratee) {
                if (!_.contains(seen, computed)) {
                    seen.push(computed);
                    result.push(value);
                }
            } else if (!_.contains(result, value)) {
                result.push(value);
            }
        }
        return result;
    };
    _.union = function () {
        return _.uniq(flatten(arguments, true, true));
    };
    _.intersection = function (array) {
        var result = [];
        var argsLength = arguments.length;
        for (var i = 0, length = getLength(array); i < length; i++) {
            var item = array[i];
            if (_.contains(result, item)) continue;
            for (var j = 1; j < argsLength; j++) {
                if (!_.contains(arguments[j], item)) break;
            }
            if (j === argsLength) result.push(item);
        }
        return result;
    };
    _.difference = function (array) {
        var rest = flatten(arguments, true, true, 1);
        return _.filter(array, function (value) {
            return !_.contains(rest, value);
        });
    };
    _.zip = function () {
        return _.unzip(arguments);
    };
    _.unzip = function (array) {
        var length = array && _.max(array, getLength).length || 0;
        var result = Array(length);

        for (var index = 0; index < length; index++) {
            result[index] = _.pluck(array, index);
        }
        return result;
    };
    _.object = function (list, values) {
        var result = {};
        for (var i = 0, length = getLength(list); i < length; i++) {
            if (values) {
                result[list[i]] = values[i];
            } else {
                result[list[i][0]] = list[i][1];
            }
        }
        return result;
    };
    _.sortedIndex = function (array, obj, iteratee, ctx) {
        iteratee = cb(iteratee, ctx, 1);
        var value = iteratee(obj);
        var low = 0, high = getLength(array);
        while (low < high) {
            var mid = Math.floor((low + high) / 2);
            if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
        }
        return low;
    };
    _.range = function (start, stop, step) {
        if (stop == null) {
            stop = start || 0;
            start = 0;
        }
        step = step || 1;

        var length = Math.max(Math.ceil((stop - start) / step), 0);
        var range = Array(length);

        for (var idx = 0; idx < length; idx++, start += step) {
            range[idx] = start;
        }

        return range;
    };
    _.partial = function (func) {
        var boundArgs = slice.call(arguments, 1);
        var bound = function () {
            var position = 0, length = boundArgs.length;
            var args = Array(length);
            for (var i = 0; i < length; i++) {
                args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
            }
            while (position < arguments.length) args.push(arguments[position++]);
            return executeBound(func, bound, this, this, args);
        };
        return bound;
    };
    _.bindAll = function (obj) {
        var i, length = arguments.length, key;
        if (length <= 1) throw new Error('bindAll must be passed function names');
        for (i = 1; i < length; i++) {
            key = arguments[i];
            obj[key] = _.bind(obj[key], obj);
        }
        return obj;
    };
    _.memoize = function (func, hasher) {
        var memoize = function (key) {
            var cache = memoize.cache;
            var address = '' + (hasher ? hasher.apply(this, arguments) : key);
            if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
            return cache[address];
        };
        memoize.cache = {};
        return memoize;
    };
    _.delay = function (func, wait) {
        var args = slice.call(arguments, 2);
        return setTimeout(function () {
            return func.apply(null, args);
        }, wait);
    };
    _.throttle = function (func, wait, options) {
        var ctx, args, result;
        var timeout = null;
        var previous = 0;
        if (!options) options = {};
        var later = function () {
            previous = options.leading === false ? 0 : _.now();
            timeout = null;
            result = func.apply(ctx, args);
            if (!timeout) ctx = args = null;
        };
        return function () {
            var now = _.now();
            if (!previous && options.leading === false) previous = now;
            var remaining = wait - (now - previous);
            ctx = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                previous = now;
                result = func.apply(ctx, args);
                if (!timeout) ctx = args = null;
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    };
    _.debounce = function (func, wait, immediate) {
        var timeout, args, ctx, timestamp, result;

        var later = function () {
            var last = _.now() - timestamp;

            if (last < wait && last >= 0) {
                timeout = setTimeout(later, wait - last);
            } else {
                timeout = null;
                if (!immediate) {
                    result = func.apply(ctx, args);
                    if (!timeout) ctx = args = null;
                }
            }
        };

        return function () {
            ctx = this;
            args = arguments;
            timestamp = _.now();
            var callNow = immediate && !timeout;
            if (!timeout) timeout = setTimeout(later, wait);
            if (callNow) {
                result = func.apply(ctx, args);
                ctx = args = null;
            }

            return result;
        };
    };
    _.wrap = function (func, wrapper) {
        return _.partial(wrapper, func);
    };
    _.negate = function (predicate) {
        return function () {
            return !predicate.apply(this, arguments);
        };
    };
    _.compose = function () {
        var args = arguments;
        var start = args.length - 1;
        return function () {
            var i = start;
            var result = args[start].apply(this, arguments);
            while (i--) result = args[i].call(this, result);
            return result;
        };
    };
    _.after = function (times, func) {
        return function () {
            if (--times < 1) {
                return func.apply(this, arguments);
            }
        };
    };
    _.before = function (times, func) {
        var memo;
        return function () {
            if (--times > 0) {
                memo = func.apply(this, arguments);
            }
            if (times <= 1) func = null;
            return memo;
        };
    };
    _.allKeys = function (obj) {
        if (!_.isObject(obj)) return [];
        var keys = [];
        for (var key in obj) keys.push(key);
        if (hasEnumBug) collectNonEnumProps(obj, keys);
        return keys;
    };
    _.values = function (obj) {
        var keys = _.keys(obj);
        var length = keys.length;
        var values = Array(length);
        for (var i = 0; i < length; i++) {
            values[i] = obj[keys[i]];
        }
        return values;
    };
    _.mapObject = function (obj, iteratee, ctx) {
        iteratee = cb(iteratee, ctx);
        var keys = _.keys(obj),
            length = keys.length,
            results = {},
            curKey;
        for (var index = 0; index < length; index++) {
            curKey = keys[index];
            results[curKey] = iteratee(obj[curKey], curKey, obj);
        }
        return results;
    };
    _.pairs = function (obj) {
        var keys = _.keys(obj);
        var length = keys.length;
        var pairs = Array(length);
        for (var i = 0; i < length; i++) {
            pairs[i] = [keys[i], obj[keys[i]]];
        }
        return pairs;
    };
    _.invert = function (obj) {
        var result = {};
        var keys = _.keys(obj);
        for (var i = 0, length = keys.length; i < length; i++) {
            result[obj[keys[i]]] = keys[i];
        }
        return result;
    };
    _.functions = _.methods = function (obj) {
        var names = [];
        for (var key in obj) {
            if (_.isFunction(obj[key])) names.push(key);
        }
        return names.sort();
    };
    _.findKey = function (obj, predicate, ctx) {
        predicate = cb(predicate, ctx);
        var keys = _.keys(obj), key;
        for (var i = 0, length = keys.length; i < length; i++) {
            key = keys[i];
            if (predicate(obj[key], key, obj)) return key;
        }
    };
    _.omit = function (obj, iteratee, ctx) {
        if (_.isFunction(iteratee)) {
            iteratee = _.negate(iteratee);
        } else {
            var keys = _.map(flatten(arguments, false, false, 1), String);
            iteratee = function (value, key) {
                return !_.contains(keys, key);
            };
        }
        return _.pick(obj, iteratee, ctx);
    };
    _.create = function (prototype, props) {
        var result = baseCreate(prototype);
        if (props) _.extendOwn(result, props);
        return result;
    };
    _.tap = function (obj, interceptor) {
        interceptor(obj);
        return obj;
    };
    _.isMatch = function (object, attrs) {
        var keys = _.keys(attrs), length = keys.length;
        if (object == null) return !length;
        var obj = Object(object);
        for (var i = 0; i < length; i++) {
            var key = keys[i];
            if (attrs[key] !== obj[key] || !(key in obj)) return false;
        }
        return true;
    };
    _.isElement = function (obj) {
        return !!(obj && obj.nodeType === 1);
    };
    _.isObject = function (obj) {
        var type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
    };
    _.isFinite = function (obj) {
        return isFinite(obj) && !isNaN(parseFloat(obj));
    };
    _.isNaN = function (obj) {
        return _.isNumber(obj) && obj !== +obj;
    };
    _.isBoolean = function (obj) {
        return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
    };
    _.isNull = function (obj) {
        return obj === null;
    };
    _.isUndefined = function (obj) {
        return obj === void 0;
    };
    _.noConflict = function () {
        root._ = previousUnderscore;
        return this;
    };
    _.identity = function (value) {
        return value;
    };
    _.constant = function (value) {
        return function () {
            return value;
        };
    };
    _.noop = function () {
    };
    _.propertyOf = function (obj) {
        return obj == null ? function () {
        } : function (key) {
            return obj[key];
        };
    };
    _.times = function (n, iteratee, ctx) {
        var accum = Array(Math.max(0, n));
        iteratee = optimizeCb(iteratee, ctx, 1);
        for (var i = 0; i < n; i++) accum[i] = iteratee(i);
        return accum;
    };
    _.random = function (min, max) {
        if (max == null) {
            max = min;
            min = 0;
        }
        return min + Math.floor(Math.random() * (max - min + 1));
    };
    _.chain = function (obj) {
        var instance = _(obj);
        instance._chain = true;
        return instance
    }
    _.pluck = function (obj, key) {
        return _.map(obj, _.property(key));
    }
    _.find = _.detect = function (ob, predicate, ctx) {
        var key;
        if (isArrayLike(ob)) {
            key = _.findIndex(ob, predicate, ctx);
        } else {
            key = _.findKey(ob, predicate, ctx);
        }
        if (key !== void 0 && key !== -1) return ob[key];
    }
    ////////// used by backbone: ///////////////
    _.z=  _.size = function (obj) { return (obj == null)?0:  isArrayLike(obj) ? obj.length : _.keys(obj).length }
    _.b=  _.bind = function (func, ctx) {
        if (nativeBind && func.bind === nativeBind) {return nativeBind.apply(func, slice.call(arguments, 1))}
        if (!_.isFunction(func)) {throw new TypeError('Bind must be called on a function')}
        var args = slice.call(arguments, 2);
        return  function () {
            return executeBound(func, bound, ctx, this, args.concat(slice.call(arguments))) }
    }
    _.iEq=_.isEqual = function (a, b) {return eq(a, b)}
    _.iE= _.isEmpty = function (obj) {
        if (obj == null) return true;
        if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
        return _.keys(obj).length === 0;
    }
    _.m = _.map = _.collect = function (obj, iteratee, ctx) {
        iteratee = cb(iteratee, ctx);
        var keys = !isArrayLike(obj) && _.keys(obj),
            length = (keys || obj).length,
            results = Array(length);
        for (var index = 0; index < length; index++) {
            var curKey = keys ? keys[index] : index;
            results[index] = iteratee(obj[curKey], curKey, obj);
        }
        return results;
    };
    _.h=  _.has = function (ob, key) {
        return ob != null && hasOwnProperty.call(ob, key)}
    _.mt =_.ma= _.matches =  _.matcher =  function (attrs) {
        attrs = _.extendOwn({}, attrs);
        return function (ob) {
            return _.isMatch(ob, attrs);
        };
    }
    _.it= _.iteratee = function (v, ctx){
        return cb(v, ctx, Infinity)
    }
    _.k=  _.keys = function (ob) {
        if (!_.isObject(ob)) return [];
        if (nativeKeys) return nativeKeys(ob);
        var keys = [];
        for (var key in ob) if (_.has(ob, key)) keys.push(key);
        if (hasEnumBug) collectNonEnumProps(ob, keys);
        return keys;
    };
    _.e = _.each = _.forEach = function (ob, iteratee, ctx) {
        iteratee = optimizeCb(iteratee, ctx);
        var i, length;
        if (isArrayLike(ob)) {
            for (i = 0, length = ob.length; i < length; i++) {
                iteratee(ob[i], i, ob);
            }
        } else {
            var keys = _.keys(ob);
            for (i = 0, length = keys.length; i < length; i++) {
                iteratee(ob[keys[i]], keys[i], ob);
            }
        }
        return ob;
    };
    _.iv= _.invoke = function (ob, method) {
        var args = slice.call(arguments, 2);
        var isFunc = _.isFunction(method);
        return _.map(ob, function (value) {
            var func = isFunc ? method : value[method];
            return func == null ? func : func.apply(value, args);
        });
    };
    _.pk= _.pick = function (ob, oiteratee, ctx) {
        var result = {},
            iteratee, keys;
        if (ob == null) return result;
        if (_.isFunction(oiteratee)) {
            keys = _.allKeys(ob);
            iteratee = optimizeCb(oiteratee, ctx);
        } else {
            keys = flatten(arguments, false, false, 1);
            iteratee = function (value, key, ob) {
                return key in ob;
            };
            ob = Object(ob);
        }
        for (var i = 0, length = keys.length; i < length; i++) {
            var key = keys[i];
            var value = ob[key];
            if (iteratee(value, key, ob)) result[key] = value;
        }
        return result;
    };
    _.clone = function (ob) {

        return !_.isObject(ob)? ob:
            _.isArray(ob) ? ob.slice() :
            _.extend({}, ob);
    }

    _.cl=function(ob){
        return _.clone(ob || {})
    }

        _.so =_.some = _.any = function (ob, pred, ctx) {
        pred = cb(pred, ctx);
        var keys = !isArrayLike(ob) && _.keys(ob),
            length = (keys || ob).length;
        for (var index = 0; index < length; index++) {
            var curKey = keys ? keys[index] : index;
            if (pred(ob[curKey], curKey, ob)) return true;
        }
        return false;
    }
    _.rs =_.result = function (ob, prop, fallback) {
        var v = (ob == null)? void 0 : ob[prop]
        if (v === void 0) {v = fallback}
        return _.isFunction(v) ? v.call(ob):v}
    _.uI= _.uniqueId = function (prefix) {var id = ++idCounter + '';return prefix?prefix+id:id}
    var optimizeCb = function(fn, ctx, argCount) {
        if (ctx === void 0) {return fn}
        switch (argCount == null ? 3 : argCount) {
            case 1: return function(v) {return fn.call(ctx,v) }
            case 2: return function(v, other) { return fn.call(ctx,v, other) }
            case 3: return function(v, ix, cl) { return fn.call(ctx, v, ix, cl) }
            case 4: return function(accumulator, v, ix, cl){ return fn.call(ctx, accumulator, v, ix, cl)}
        }
        return function() {return fn.apply(ctx, arguments)}
    }
    var cb = function(v, ctx, argCount) {return (v == null)?_.identity: _.isFunction(v)? optimizeCb(v, ctx, argCount): _.isObject(v)?_.matcher(v): _.property(v) }
    var createAssigner = function(keysFunc, undefinedOnly) {
        return function(obj) {
            var length = arguments.length;
            if (length < 2 || obj == null) return obj;
            for (var index = 1; index < length; index++) {
                var source = arguments[index],
                    keys = keysFunc(source),
                    l = keys.length;
                for (var i = 0; i < l; i++) {
                    var key = keys[i];
                    if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
                }
            }
            return obj;
        };
    };
    var baseCreate = function(prototype) {
        if (!_.isObject(prototype)) return {};
        if (nativeCreate) return nativeCreate(prototype);
        Ctor.prototype = prototype;
        var result = new Ctor;
        Ctor.prototype = null;
        return result;
    };
    var property = function(key) {
        return function(obj) {
            return obj == null ? void 0 : obj[key];
        };
    };
    var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
    var getLength = property('length');
    var isArrayLike = function(collection) {
        var length = getLength(collection);
        return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
    };
    var flatten = function(input, shallow, strict, startIndex) {
        var output = [], idx = 0;
        for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
            var value = input[i];
            if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
                if (!shallow) value = flatten(value, shallow, strict);
                var j = 0, len = value.length;
                output.length += len;
                while (j < len) {
                    output[idx++] = value[j++];
                }
            } else if (!strict) {
                output[idx++] = value;
            }
        }
        return output;
    };
    var executeBound = function(sourceFunc, boundFunc, ctx, callingContext, args) {
        if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(ctx, args);
        var self = baseCreate(sourceFunc.prototype);
        var result = sourceFunc.apply(self, args);
        if (_.isObject(result)) return result;
        return self;
    };
    var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
    var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
        'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
    var eq = function(a, b, aStack, bStack) {
        if (a === b) return a !== 0 || 1 / a === 1 / b;
        if (a == null || b == null) return a === b;
        if (a instanceof _) a = a._wrapped;
        if (b instanceof _) b = b._wrapped;
        var className = toString.call(a);
        if (className !== toString.call(b)) return false;
        switch (className) {
            case '[object RegExp]':
            case '[object String]':
                return '' + a === '' + b;
            case '[object Number]':
                if (+a !== +a) return +b !== +b;
                return +a === 0 ? 1 / +a === 1 / b : +a === +b;
            case '[object Date]':
            case '[object Boolean]':
                return +a === +b;
        }

        var areArrays = className === '[object Array]';
        if (!areArrays) {
            if (typeof a != 'object' || typeof b != 'object') return false;

            var aCtor = a.constructor, bCtor = b.constructor;
            if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                _.isFunction(bCtor) && bCtor instanceof bCtor)
                && ('constructor' in a && 'constructor' in b)) {
                return false;
            }
        }
        aStack = aStack || [];
        bStack = bStack || [];
        var length = aStack.length;
        while (length--) {
            if (aStack[length] === a) return bStack[length] === b;
        }

        aStack.push(a);
        bStack.push(b);

        if (areArrays) {
            length = a.length;
            if (length !== b.length) return false;
            while (length--) {
                if (!eq(a[length], b[length], aStack, bStack)) return false;
            }
        } else {
            var keys = _.keys(a), key;
            length = keys.length;
            if (_.keys(b).length !== length) return false;
            while (length--) {
                key = keys[length];
                if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
            }
        }
        aStack.pop();
        bStack.pop();
        return true;
    };
    var idCounter = 0, noMatch = /(.)^/;
    _.o=_.once = _.partial(_.before, 2);
    _.do=_.defer = _.partial(_.delay, _, 1);
    _.reduce = _.foldl = _.inject = createReduce(1);_.reduceRight = _.foldr = createReduce(-1);
    _.findIndex = createPredicateIndexFinder(1);_.findLastIndex = createPredicateIndexFinder(-1);
    _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);_.lastIndexOf = createIndexFinder(-1, _.findLastIndex);
    _.x= _.extend = createAssigner(_.allKeys);
    _.extendOwn = _.assign = createAssigner(_.keys);
    _.d= _.df=_.defaults = createAssigner(_.allKeys, true);
    _.isArray = nativeIsArray || function(obj) {
        return toString.call(obj) === '[object Array]';
    }
    _.e(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(n) {_['is' + n] = function(obj) {return toString.call(obj) === '[object ' + n + ']'}})
    if (!_.isArguments(arguments)) {_.isArguments = function(obj) {return _.has(obj, 'callee') }}
    if (typeof /./ != 'function' && typeof Int8Array != 'object') {_.isFunction = function(obj) {return typeof obj == 'function' || false}}
    _.property = property; _.now = Date.now || function() {
        return new Date().getTime();
    }
    var group = function (behavior) {return function (ob, iteratee, ctx) {         var result = {};iteratee = cb(iteratee, ctx);_.e(ob, function (value, index) {var key = iteratee(value, index, ob); behavior(result, value, key) }); return result } }
    _.groupBy = group(function (result, value, key) {if (_.has(result, key)) result[key].push(value); else result[key] = [value] })
    _.indexBy = group(function (result, value, key) {result[key] = value });
    _.countBy = group(function (result, value, key) {
        if (_.has(result, key)) result[key]++; else result[key] = 1 })

    var escapeMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '`': '&#x60;'
    },
        unescapeMap = _.invert(escapeMap),
        createEscaper = function (map) {
        var escaper = function (match) {
            return map[match];
        };
        var source = '(?:' + _.keys(map).join('|') + ')';
        var testRegexp = RegExp(source);
        var replaceRegexp = RegExp(source, 'g');
        return function (string) {
            string = string == null ? '' : '' + string;
            return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
        };
    }
    _.es=_.escape = createEscaper(escapeMap); _.unescape = createEscaper(unescapeMap)
    _.templateSettings = {
        evaluate    : /<%([\s\S]+?)%>/g,
        interpolate : /<%=([\s\S]+?)%>/g,
        escape      : /<%-([\s\S]+?)%>/g
    }
    var escaper = /\\|'|\r|\n|\u2028|\u2029/g, escapeChar = function(match) {
        var escapes = {
            "'":      "'",
            '\\':     '\\',
            '\r':     'r',
            '\n':     'n',
            '\u2028': 'u2028',
            '\u2029': 'u2029'
        };
        return '\\' + escapes[match]}
    _.template = function (text, settings, oldSettings) {
        if (!settings && oldSettings) settings = oldSettings;
        settings = _.defaults({}, settings, _.templateSettings);
        var matcher = RegExp([
            (settings.escape || noMatch).source,
            (settings.interpolate || noMatch).source,
            (settings.evaluate || noMatch).source
        ].join('|') + '|$', 'g'), index = 0, source = "__p+='";
        text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
            source += text.slice(index, offset).replace(escaper, escapeChar);
            index = offset + match.length;

            if (escape) {
                source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
            } else if (interpolate) {
                source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
            } else if (evaluate) {
                source += "';\n" + evaluate + "\n__p+='";
            }

            return match;
        });
        source += "';\n";if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';
        source = "var __t,__p='',__j=Array.prototype.join," +
        "print=function(){__p+=__j.call(arguments,'');};\n" +
        source + 'return __p;\n';try {
            var render = new Function(settings.variable || 'obj', '_', source);
        } catch (e) {
            e.source = source;
            throw e;
        }
        var template = function (data) {
            return render.call(this, data, _);
        };var argument = settings.variable || 'obj';
        template.source = 'function(' + argument + '){\n' + source + '}';return template;
    }
    _.prototype.value = function() { return this._wrapped }
    _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
    _.prototype.toString = function() { return '' + this._wrapped }
    var result = function(instance, ob) {
        return instance._chain ? _(ob).chain() : ob
    }
    _.e(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(n) {
        var method = ArrayProto[n];
        _.prototype[n] = function() {var ob = this._wrapped; method.apply(ob, arguments);
            if ((n === 'shift' || n === 'splice') && ob.length === 0) {delete ob[0]}
            return result(this, ob) } })
    _.e(['concat', 'join', 'slice'], function(n) {
        _.prototype[n] = function() {
            return result(this, ArrayProto[n].apply(this._wrapped, arguments))}
    })
    _.mixin = function(ob){
        _.e(_.functions(ob), function(n) {
            var fn = _[n] = ob[n];
            _.prototype[n] = function(){
                var args = [this._wrapped];
                push.apply(args, arguments)
                return result(this, fn.apply(_, args)) }
        })
    }
    _.mixin(_)
    function createPredicateIndexFinder(dir) {return function(array, predicate, ctx) {predicate = cb(predicate, ctx);
        var length = getLength(array);var index = dir > 0 ? 0 : length - 1;
        for (; index >= 0 && index < length; index += dir) {
            if (predicate(array[index], index, array)) return index;
        }
        return -1;};}
    function createIndexFinder(dir, predicateFind, sortedIndex) {return function(array, item, idx) {
        var i = 0, length = getLength(array);if (typeof idx == 'number') {
            if (dir > 0) {
                i = idx >= 0 ? idx : Math.max(idx + length, i);
            } else {
                length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
            }
        } else if (sortedIndex && idx && length) {
            idx = sortedIndex(array, item);
            return array[idx] === item ? idx : -1;
        }
        if (item !== item) {
            idx = predicateFind(slice.call(array, i, length), _.isNaN);
            return idx >= 0 ? idx + i : -1;
        }
        for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
            if (array[idx] === item) return idx;
        }
        return -1 } }
    function collectNonEnumProps(obj, keys) {var nonEnumIdx = nonEnumerableProps.length,
        constructor = obj.constructor,
        proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto,
        prop = 'constructor';
        if (_.has(obj, prop) && !_.contains(keys, prop)) {keys.push(prop)}
        while (nonEnumIdx--) {prop = nonEnumerableProps[nonEnumIdx];
            if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {keys.push(prop) }}}
    function createReduce(dir) {
        function iterator(obj, iteratee, memo, keys, index, length) {for (; index >= 0 && index < length; index += dir) {var curKey = keys ? keys[index] : index;
            memo = iteratee(memo, obj[curKey], curKey, obj) }; return memo;}
        return function(obj, iteratee, memo, ctx) {iteratee = optimizeCb(iteratee, ctx, 4);
            var keys = !isArrayLike(obj) && _.keys(obj), length = (keys || obj).length, index = dir > 0 ? 0 : length - 1;
            if (arguments.length < 3) {memo = obj[keys ? keys[index] : index];index += dir;}
            return iterator(obj, iteratee, memo, keys, index, length) } }


    _.iRE= _.isRegExp
})())