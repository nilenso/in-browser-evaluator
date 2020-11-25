goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__22470){
var vec__22471 = p__22470;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22471,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22471,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__22475 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22475,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22475,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22475,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22475,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22475,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__5735__auto__)){
var name__$1 = temp__5735__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__22479 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22479,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22479,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22479,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22479,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22479,(4),null);
var vec__22482 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22482,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22482,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22482,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22482,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22482,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4126__auto__ = col;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__22487 = segmap;
var map__22487__$1 = (((((!((map__22487 == null))))?(((((map__22487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22487):map__22487);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22487__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22487__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22487__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22487__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22487__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__22496 = arguments.length;
switch (G__22496) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__22510 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__23414 = cljs.core.next(segs__$1);
var G__23415 = nrelseg;
var G__23416 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23414;
relseg__$1 = G__23415;
result__$1 = G__23416;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22510,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22510,(1),null);
var G__23430 = (gline + (1));
var G__23431 = cljs.core.next(lines__$1);
var G__23432 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23433 = result__$1;
gline = G__23430;
lines__$1 = G__23431;
relseg = G__23432;
result = G__23433;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2);

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__22517 = segmap;
var map__22517__$1 = (((((!((map__22517 == null))))?(((((map__22517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22517):map__22517);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22517__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22517__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22517__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22517__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22517__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__22516_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__22516_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__22520 = arguments.length;
switch (G__22520) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__22524 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__23435 = cljs.core.next(segs__$1);
var G__23436 = nrelseg;
var G__23437 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23435;
relseg__$1 = G__23436;
result__$1 = G__23437;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22524,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22524,(1),null);
var G__23438 = (gline + (1));
var G__23439 = cljs.core.next(lines__$1);
var G__23440 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23441 = result__$1;
gline = G__23438;
lines__$1 = G__23439;
relseg = G__23440;
result = G__23441;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode.cljs$lang$maxFixedArity = 2);

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__22531){
var vec__22532 = p__22531;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22532,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22532,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22532,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22532,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22532,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__22535){
var vec__22536 = p__22535;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22536,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22536,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22536,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22536,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22536,(4),null);
var seg = vec__22536;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__22539){
var vec__22540 = p__22539;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22540,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22540,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22540,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22540,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22540,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return lname;
}
})()], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
}),cljs.core.PersistentVector.EMPTY,cols));
}),cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5733__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
var idx = (function (){var temp__5733__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5733__auto____$1)){
var idx = temp__5733__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref(name_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});
var encode_cols = (function (infos,source_idx,line,col){
var seq__22549 = cljs.core.seq(infos);
var chunk__22550 = null;
var count__22551 = (0);
var i__22552 = (0);
while(true){
if((i__22552 < count__22551)){
var info = chunk__22550.cljs$core$IIndexed$_nth$arity$2(null,i__22552);
var segv_23460 = info__GT_segv(info,source_idx,line,col);
var gline_23461 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23462 = cljs.core.count(cljs.core.deref(lines));
if((gline_23461 > (lc_23462 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22549,chunk__22550,count__22551,i__22552,segv_23460,gline_23461,lc_23462,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23461 - (lc_23462 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23460], null));
});})(seq__22549,chunk__22550,count__22551,i__22552,segv_23460,gline_23461,lc_23462,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22549,chunk__22550,count__22551,i__22552,segv_23460,gline_23461,lc_23462,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23461], null),cljs.core.conj,segv_23460);
});})(seq__22549,chunk__22550,count__22551,i__22552,segv_23460,gline_23461,lc_23462,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23463 = seq__22549;
var G__23464 = chunk__22550;
var G__23465 = count__22551;
var G__23466 = (i__22552 + (1));
seq__22549 = G__23463;
chunk__22550 = G__23464;
count__22551 = G__23465;
i__22552 = G__23466;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__22549);
if(temp__5735__auto__){
var seq__22549__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22549__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__22549__$1);
var G__23467 = cljs.core.chunk_rest(seq__22549__$1);
var G__23468 = c__4556__auto__;
var G__23469 = cljs.core.count(c__4556__auto__);
var G__23470 = (0);
seq__22549 = G__23467;
chunk__22550 = G__23468;
count__22551 = G__23469;
i__22552 = G__23470;
continue;
} else {
var info = cljs.core.first(seq__22549__$1);
var segv_23471 = info__GT_segv(info,source_idx,line,col);
var gline_23472 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23473 = cljs.core.count(cljs.core.deref(lines));
if((gline_23472 > (lc_23473 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22549,chunk__22550,count__22551,i__22552,segv_23471,gline_23472,lc_23473,info,seq__22549__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23472 - (lc_23473 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23471], null));
});})(seq__22549,chunk__22550,count__22551,i__22552,segv_23471,gline_23472,lc_23473,info,seq__22549__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22549,chunk__22550,count__22551,i__22552,segv_23471,gline_23472,lc_23473,info,seq__22549__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23472], null),cljs.core.conj,segv_23471);
});})(seq__22549,chunk__22550,count__22551,i__22552,segv_23471,gline_23472,lc_23473,info,seq__22549__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23474 = cljs.core.next(seq__22549__$1);
var G__23475 = null;
var G__23476 = (0);
var G__23477 = (0);
seq__22549 = G__23474;
chunk__22550 = G__23475;
count__22551 = G__23476;
i__22552 = G__23477;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__22556_23478 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__22557_23479 = null;
var count__22558_23480 = (0);
var i__22559_23481 = (0);
while(true){
if((i__22559_23481 < count__22558_23480)){
var vec__22805_23482 = chunk__22557_23479.cljs$core$IIndexed$_nth$arity$2(null,i__22559_23481);
var source_idx_23483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22805_23482,(0),null);
var vec__22808_23484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22805_23482,(1),null);
var __23485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22808_23484,(0),null);
var lines_23486__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22808_23484,(1),null);
var seq__22811_23487 = cljs.core.seq(lines_23486__$1);
var chunk__22812_23488 = null;
var count__22813_23489 = (0);
var i__22814_23490 = (0);
while(true){
if((i__22814_23490 < count__22813_23489)){
var vec__22856_23491 = chunk__22812_23488.cljs$core$IIndexed$_nth$arity$2(null,i__22814_23490);
var line_23492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22856_23491,(0),null);
var cols_23493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22856_23491,(1),null);
var seq__22859_23494 = cljs.core.seq(cols_23493);
var chunk__22860_23495 = null;
var count__22861_23496 = (0);
var i__22862_23497 = (0);
while(true){
if((i__22862_23497 < count__22861_23496)){
var vec__22875_23498 = chunk__22860_23495.cljs$core$IIndexed$_nth$arity$2(null,i__22862_23497);
var col_23499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22875_23498,(0),null);
var infos_23500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22875_23498,(1),null);
encode_cols(infos_23500,source_idx_23483,line_23492,col_23499);


var G__23501 = seq__22859_23494;
var G__23502 = chunk__22860_23495;
var G__23503 = count__22861_23496;
var G__23504 = (i__22862_23497 + (1));
seq__22859_23494 = G__23501;
chunk__22860_23495 = G__23502;
count__22861_23496 = G__23503;
i__22862_23497 = G__23504;
continue;
} else {
var temp__5735__auto___23505 = cljs.core.seq(seq__22859_23494);
if(temp__5735__auto___23505){
var seq__22859_23506__$1 = temp__5735__auto___23505;
if(cljs.core.chunked_seq_QMARK_(seq__22859_23506__$1)){
var c__4556__auto___23507 = cljs.core.chunk_first(seq__22859_23506__$1);
var G__23508 = cljs.core.chunk_rest(seq__22859_23506__$1);
var G__23509 = c__4556__auto___23507;
var G__23510 = cljs.core.count(c__4556__auto___23507);
var G__23511 = (0);
seq__22859_23494 = G__23508;
chunk__22860_23495 = G__23509;
count__22861_23496 = G__23510;
i__22862_23497 = G__23511;
continue;
} else {
var vec__22878_23512 = cljs.core.first(seq__22859_23506__$1);
var col_23513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22878_23512,(0),null);
var infos_23514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22878_23512,(1),null);
encode_cols(infos_23514,source_idx_23483,line_23492,col_23513);


var G__23515 = cljs.core.next(seq__22859_23506__$1);
var G__23516 = null;
var G__23517 = (0);
var G__23518 = (0);
seq__22859_23494 = G__23515;
chunk__22860_23495 = G__23516;
count__22861_23496 = G__23517;
i__22862_23497 = G__23518;
continue;
}
} else {
}
}
break;
}


var G__23529 = seq__22811_23487;
var G__23530 = chunk__22812_23488;
var G__23531 = count__22813_23489;
var G__23532 = (i__22814_23490 + (1));
seq__22811_23487 = G__23529;
chunk__22812_23488 = G__23530;
count__22813_23489 = G__23531;
i__22814_23490 = G__23532;
continue;
} else {
var temp__5735__auto___23533 = cljs.core.seq(seq__22811_23487);
if(temp__5735__auto___23533){
var seq__22811_23534__$1 = temp__5735__auto___23533;
if(cljs.core.chunked_seq_QMARK_(seq__22811_23534__$1)){
var c__4556__auto___23535 = cljs.core.chunk_first(seq__22811_23534__$1);
var G__23536 = cljs.core.chunk_rest(seq__22811_23534__$1);
var G__23537 = c__4556__auto___23535;
var G__23538 = cljs.core.count(c__4556__auto___23535);
var G__23539 = (0);
seq__22811_23487 = G__23536;
chunk__22812_23488 = G__23537;
count__22813_23489 = G__23538;
i__22814_23490 = G__23539;
continue;
} else {
var vec__22881_23540 = cljs.core.first(seq__22811_23534__$1);
var line_23541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22881_23540,(0),null);
var cols_23542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22881_23540,(1),null);
var seq__22884_23543 = cljs.core.seq(cols_23542);
var chunk__22885_23544 = null;
var count__22886_23545 = (0);
var i__22887_23546 = (0);
while(true){
if((i__22887_23546 < count__22886_23545)){
var vec__22894_23547 = chunk__22885_23544.cljs$core$IIndexed$_nth$arity$2(null,i__22887_23546);
var col_23548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22894_23547,(0),null);
var infos_23549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22894_23547,(1),null);
encode_cols(infos_23549,source_idx_23483,line_23541,col_23548);


var G__23550 = seq__22884_23543;
var G__23551 = chunk__22885_23544;
var G__23552 = count__22886_23545;
var G__23553 = (i__22887_23546 + (1));
seq__22884_23543 = G__23550;
chunk__22885_23544 = G__23551;
count__22886_23545 = G__23552;
i__22887_23546 = G__23553;
continue;
} else {
var temp__5735__auto___23554__$1 = cljs.core.seq(seq__22884_23543);
if(temp__5735__auto___23554__$1){
var seq__22884_23555__$1 = temp__5735__auto___23554__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22884_23555__$1)){
var c__4556__auto___23556 = cljs.core.chunk_first(seq__22884_23555__$1);
var G__23557 = cljs.core.chunk_rest(seq__22884_23555__$1);
var G__23558 = c__4556__auto___23556;
var G__23559 = cljs.core.count(c__4556__auto___23556);
var G__23560 = (0);
seq__22884_23543 = G__23557;
chunk__22885_23544 = G__23558;
count__22886_23545 = G__23559;
i__22887_23546 = G__23560;
continue;
} else {
var vec__22897_23561 = cljs.core.first(seq__22884_23555__$1);
var col_23562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22897_23561,(0),null);
var infos_23563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22897_23561,(1),null);
encode_cols(infos_23563,source_idx_23483,line_23541,col_23562);


var G__23564 = cljs.core.next(seq__22884_23555__$1);
var G__23565 = null;
var G__23566 = (0);
var G__23567 = (0);
seq__22884_23543 = G__23564;
chunk__22885_23544 = G__23565;
count__22886_23545 = G__23566;
i__22887_23546 = G__23567;
continue;
}
} else {
}
}
break;
}


var G__23568 = cljs.core.next(seq__22811_23534__$1);
var G__23569 = null;
var G__23570 = (0);
var G__23571 = (0);
seq__22811_23487 = G__23568;
chunk__22812_23488 = G__23569;
count__22813_23489 = G__23570;
i__22814_23490 = G__23571;
continue;
}
} else {
}
}
break;
}


var G__23572 = seq__22556_23478;
var G__23573 = chunk__22557_23479;
var G__23574 = count__22558_23480;
var G__23575 = (i__22559_23481 + (1));
seq__22556_23478 = G__23572;
chunk__22557_23479 = G__23573;
count__22558_23480 = G__23574;
i__22559_23481 = G__23575;
continue;
} else {
var temp__5735__auto___23576 = cljs.core.seq(seq__22556_23478);
if(temp__5735__auto___23576){
var seq__22556_23577__$1 = temp__5735__auto___23576;
if(cljs.core.chunked_seq_QMARK_(seq__22556_23577__$1)){
var c__4556__auto___23578 = cljs.core.chunk_first(seq__22556_23577__$1);
var G__23579 = cljs.core.chunk_rest(seq__22556_23577__$1);
var G__23580 = c__4556__auto___23578;
var G__23581 = cljs.core.count(c__4556__auto___23578);
var G__23582 = (0);
seq__22556_23478 = G__23579;
chunk__22557_23479 = G__23580;
count__22558_23480 = G__23581;
i__22559_23481 = G__23582;
continue;
} else {
var vec__22903_23583 = cljs.core.first(seq__22556_23577__$1);
var source_idx_23584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22903_23583,(0),null);
var vec__22906_23585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22903_23583,(1),null);
var __23586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22906_23585,(0),null);
var lines_23587__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22906_23585,(1),null);
var seq__22909_23588 = cljs.core.seq(lines_23587__$1);
var chunk__22910_23589 = null;
var count__22911_23590 = (0);
var i__22912_23591 = (0);
while(true){
if((i__22912_23591 < count__22911_23590)){
var vec__22953_23592 = chunk__22910_23589.cljs$core$IIndexed$_nth$arity$2(null,i__22912_23591);
var line_23593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22953_23592,(0),null);
var cols_23594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22953_23592,(1),null);
var seq__22956_23595 = cljs.core.seq(cols_23594);
var chunk__22957_23596 = null;
var count__22958_23597 = (0);
var i__22959_23598 = (0);
while(true){
if((i__22959_23598 < count__22958_23597)){
var vec__22966_23599 = chunk__22957_23596.cljs$core$IIndexed$_nth$arity$2(null,i__22959_23598);
var col_23600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22966_23599,(0),null);
var infos_23601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22966_23599,(1),null);
encode_cols(infos_23601,source_idx_23584,line_23593,col_23600);


var G__23602 = seq__22956_23595;
var G__23603 = chunk__22957_23596;
var G__23604 = count__22958_23597;
var G__23605 = (i__22959_23598 + (1));
seq__22956_23595 = G__23602;
chunk__22957_23596 = G__23603;
count__22958_23597 = G__23604;
i__22959_23598 = G__23605;
continue;
} else {
var temp__5735__auto___23606__$1 = cljs.core.seq(seq__22956_23595);
if(temp__5735__auto___23606__$1){
var seq__22956_23607__$1 = temp__5735__auto___23606__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22956_23607__$1)){
var c__4556__auto___23608 = cljs.core.chunk_first(seq__22956_23607__$1);
var G__23609 = cljs.core.chunk_rest(seq__22956_23607__$1);
var G__23610 = c__4556__auto___23608;
var G__23611 = cljs.core.count(c__4556__auto___23608);
var G__23612 = (0);
seq__22956_23595 = G__23609;
chunk__22957_23596 = G__23610;
count__22958_23597 = G__23611;
i__22959_23598 = G__23612;
continue;
} else {
var vec__22969_23613 = cljs.core.first(seq__22956_23607__$1);
var col_23614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22969_23613,(0),null);
var infos_23615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22969_23613,(1),null);
encode_cols(infos_23615,source_idx_23584,line_23593,col_23614);


var G__23616 = cljs.core.next(seq__22956_23607__$1);
var G__23617 = null;
var G__23618 = (0);
var G__23619 = (0);
seq__22956_23595 = G__23616;
chunk__22957_23596 = G__23617;
count__22958_23597 = G__23618;
i__22959_23598 = G__23619;
continue;
}
} else {
}
}
break;
}


var G__23620 = seq__22909_23588;
var G__23621 = chunk__22910_23589;
var G__23622 = count__22911_23590;
var G__23623 = (i__22912_23591 + (1));
seq__22909_23588 = G__23620;
chunk__22910_23589 = G__23621;
count__22911_23590 = G__23622;
i__22912_23591 = G__23623;
continue;
} else {
var temp__5735__auto___23624__$1 = cljs.core.seq(seq__22909_23588);
if(temp__5735__auto___23624__$1){
var seq__22909_23625__$1 = temp__5735__auto___23624__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22909_23625__$1)){
var c__4556__auto___23626 = cljs.core.chunk_first(seq__22909_23625__$1);
var G__23627 = cljs.core.chunk_rest(seq__22909_23625__$1);
var G__23628 = c__4556__auto___23626;
var G__23629 = cljs.core.count(c__4556__auto___23626);
var G__23630 = (0);
seq__22909_23588 = G__23627;
chunk__22910_23589 = G__23628;
count__22911_23590 = G__23629;
i__22912_23591 = G__23630;
continue;
} else {
var vec__22972_23631 = cljs.core.first(seq__22909_23625__$1);
var line_23632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22972_23631,(0),null);
var cols_23633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22972_23631,(1),null);
var seq__22975_23634 = cljs.core.seq(cols_23633);
var chunk__22976_23635 = null;
var count__22977_23636 = (0);
var i__22978_23637 = (0);
while(true){
if((i__22978_23637 < count__22977_23636)){
var vec__22985_23638 = chunk__22976_23635.cljs$core$IIndexed$_nth$arity$2(null,i__22978_23637);
var col_23639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22985_23638,(0),null);
var infos_23640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22985_23638,(1),null);
encode_cols(infos_23640,source_idx_23584,line_23632,col_23639);


var G__23641 = seq__22975_23634;
var G__23642 = chunk__22976_23635;
var G__23643 = count__22977_23636;
var G__23644 = (i__22978_23637 + (1));
seq__22975_23634 = G__23641;
chunk__22976_23635 = G__23642;
count__22977_23636 = G__23643;
i__22978_23637 = G__23644;
continue;
} else {
var temp__5735__auto___23645__$2 = cljs.core.seq(seq__22975_23634);
if(temp__5735__auto___23645__$2){
var seq__22975_23646__$1 = temp__5735__auto___23645__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22975_23646__$1)){
var c__4556__auto___23647 = cljs.core.chunk_first(seq__22975_23646__$1);
var G__23648 = cljs.core.chunk_rest(seq__22975_23646__$1);
var G__23649 = c__4556__auto___23647;
var G__23650 = cljs.core.count(c__4556__auto___23647);
var G__23651 = (0);
seq__22975_23634 = G__23648;
chunk__22976_23635 = G__23649;
count__22977_23636 = G__23650;
i__22978_23637 = G__23651;
continue;
} else {
var vec__22988_23652 = cljs.core.first(seq__22975_23646__$1);
var col_23653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22988_23652,(0),null);
var infos_23654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22988_23652,(1),null);
encode_cols(infos_23654,source_idx_23584,line_23632,col_23653);


var G__23655 = cljs.core.next(seq__22975_23646__$1);
var G__23656 = null;
var G__23657 = (0);
var G__23658 = (0);
seq__22975_23634 = G__23655;
chunk__22976_23635 = G__23656;
count__22977_23636 = G__23657;
i__22978_23637 = G__23658;
continue;
}
} else {
}
}
break;
}


var G__23659 = cljs.core.next(seq__22909_23625__$1);
var G__23660 = null;
var G__23661 = (0);
var G__23662 = (0);
seq__22909_23588 = G__23659;
chunk__22910_23589 = G__23660;
count__22911_23590 = G__23661;
i__22912_23591 = G__23662;
continue;
}
} else {
}
}
break;
}


var G__23664 = cljs.core.next(seq__22556_23577__$1);
var G__23665 = null;
var G__23666 = (0);
var G__23667 = (0);
seq__22556_23478 = G__23664;
chunk__22557_23479 = G__23665;
count__22558_23480 = G__23666;
i__22559_23481 = G__23667;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__22991 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__22543_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22543_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__22547_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__22547_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22548_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__22548_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__22992 = G__22991;
goog.object.set(G__22992,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__22992;
} else {
return G__22991;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__22993 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22993,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22993,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__22996 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22996,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22996,(1),null);
var G__23672 = cljs.core.next(col_map_seq);
var G__23673 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__22996,col,infos,vec__22993,line,col_map){
return (function (v,p__22999){
var map__23000 = p__22999;
var map__23000__$1 = (((((!((map__23000 == null))))?(((((map__23000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23000):map__23000);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23000__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23000__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__22996,col,infos,vec__22993,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__23672;
new_cols = G__23673;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__23674 = cljs.core.next(line_map_seq);
var G__23675 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__23674;
new_lines = G__23675;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
var seq__23002_23676 = cljs.core.seq(reverse_map);
var chunk__23003_23677 = null;
var count__23004_23678 = (0);
var i__23005_23679 = (0);
while(true){
if((i__23005_23679 < count__23004_23678)){
var vec__23165_23680 = chunk__23003_23677.cljs$core$IIndexed$_nth$arity$2(null,i__23005_23679);
var line_23681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23165_23680,(0),null);
var columns_23682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23165_23680,(1),null);
var seq__23168_23683 = cljs.core.seq(columns_23682);
var chunk__23169_23684 = null;
var count__23170_23685 = (0);
var i__23171_23686 = (0);
while(true){
if((i__23171_23686 < count__23170_23685)){
var vec__23206_23687 = chunk__23169_23684.cljs$core$IIndexed$_nth$arity$2(null,i__23171_23686);
var column_23688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23206_23687,(0),null);
var column_info_23689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23206_23687,(1),null);
var seq__23209_23690 = cljs.core.seq(column_info_23689);
var chunk__23210_23691 = null;
var count__23211_23692 = (0);
var i__23212_23693 = (0);
while(true){
if((i__23212_23693 < count__23211_23692)){
var map__23217_23694 = chunk__23210_23691.cljs$core$IIndexed$_nth$arity$2(null,i__23212_23693);
var map__23217_23695__$1 = (((((!((map__23217_23694 == null))))?(((((map__23217_23694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23217_23694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23217_23694):map__23217_23694);
var gline_23696 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23217_23695__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23217_23695__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23217_23695__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23696], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23209_23690,chunk__23210_23691,count__23211_23692,i__23212_23693,seq__23168_23683,chunk__23169_23684,count__23170_23685,i__23171_23686,seq__23002_23676,chunk__23003_23677,count__23004_23678,i__23005_23679,map__23217_23694,map__23217_23695__$1,gline_23696,gcol_23697,name_23698,vec__23206_23687,column_23688,column_info_23689,vec__23165_23680,line_23681,columns_23682,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23697], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23681,new cljs.core.Keyword(null,"col","col",-1959363084),column_23688,new cljs.core.Keyword(null,"name","name",1843675177),name_23698], null));
});})(seq__23209_23690,chunk__23210_23691,count__23211_23692,i__23212_23693,seq__23168_23683,chunk__23169_23684,count__23170_23685,i__23171_23686,seq__23002_23676,chunk__23003_23677,count__23004_23678,i__23005_23679,map__23217_23694,map__23217_23695__$1,gline_23696,gcol_23697,name_23698,vec__23206_23687,column_23688,column_info_23689,vec__23165_23680,line_23681,columns_23682,inverted))
,cljs.core.sorted_map()));


var G__23700 = seq__23209_23690;
var G__23701 = chunk__23210_23691;
var G__23702 = count__23211_23692;
var G__23703 = (i__23212_23693 + (1));
seq__23209_23690 = G__23700;
chunk__23210_23691 = G__23701;
count__23211_23692 = G__23702;
i__23212_23693 = G__23703;
continue;
} else {
var temp__5735__auto___23704 = cljs.core.seq(seq__23209_23690);
if(temp__5735__auto___23704){
var seq__23209_23705__$1 = temp__5735__auto___23704;
if(cljs.core.chunked_seq_QMARK_(seq__23209_23705__$1)){
var c__4556__auto___23706 = cljs.core.chunk_first(seq__23209_23705__$1);
var G__23707 = cljs.core.chunk_rest(seq__23209_23705__$1);
var G__23708 = c__4556__auto___23706;
var G__23709 = cljs.core.count(c__4556__auto___23706);
var G__23710 = (0);
seq__23209_23690 = G__23707;
chunk__23210_23691 = G__23708;
count__23211_23692 = G__23709;
i__23212_23693 = G__23710;
continue;
} else {
var map__23225_23711 = cljs.core.first(seq__23209_23705__$1);
var map__23225_23712__$1 = (((((!((map__23225_23711 == null))))?(((((map__23225_23711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23225_23711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23225_23711):map__23225_23711);
var gline_23713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23225_23712__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23225_23712__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23225_23712__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23713], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23209_23690,chunk__23210_23691,count__23211_23692,i__23212_23693,seq__23168_23683,chunk__23169_23684,count__23170_23685,i__23171_23686,seq__23002_23676,chunk__23003_23677,count__23004_23678,i__23005_23679,map__23225_23711,map__23225_23712__$1,gline_23713,gcol_23714,name_23715,seq__23209_23705__$1,temp__5735__auto___23704,vec__23206_23687,column_23688,column_info_23689,vec__23165_23680,line_23681,columns_23682,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23714], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23681,new cljs.core.Keyword(null,"col","col",-1959363084),column_23688,new cljs.core.Keyword(null,"name","name",1843675177),name_23715], null));
});})(seq__23209_23690,chunk__23210_23691,count__23211_23692,i__23212_23693,seq__23168_23683,chunk__23169_23684,count__23170_23685,i__23171_23686,seq__23002_23676,chunk__23003_23677,count__23004_23678,i__23005_23679,map__23225_23711,map__23225_23712__$1,gline_23713,gcol_23714,name_23715,seq__23209_23705__$1,temp__5735__auto___23704,vec__23206_23687,column_23688,column_info_23689,vec__23165_23680,line_23681,columns_23682,inverted))
,cljs.core.sorted_map()));


var G__23716 = cljs.core.next(seq__23209_23705__$1);
var G__23717 = null;
var G__23718 = (0);
var G__23719 = (0);
seq__23209_23690 = G__23716;
chunk__23210_23691 = G__23717;
count__23211_23692 = G__23718;
i__23212_23693 = G__23719;
continue;
}
} else {
}
}
break;
}


var G__23720 = seq__23168_23683;
var G__23721 = chunk__23169_23684;
var G__23722 = count__23170_23685;
var G__23723 = (i__23171_23686 + (1));
seq__23168_23683 = G__23720;
chunk__23169_23684 = G__23721;
count__23170_23685 = G__23722;
i__23171_23686 = G__23723;
continue;
} else {
var temp__5735__auto___23724 = cljs.core.seq(seq__23168_23683);
if(temp__5735__auto___23724){
var seq__23168_23725__$1 = temp__5735__auto___23724;
if(cljs.core.chunked_seq_QMARK_(seq__23168_23725__$1)){
var c__4556__auto___23726 = cljs.core.chunk_first(seq__23168_23725__$1);
var G__23727 = cljs.core.chunk_rest(seq__23168_23725__$1);
var G__23728 = c__4556__auto___23726;
var G__23729 = cljs.core.count(c__4556__auto___23726);
var G__23730 = (0);
seq__23168_23683 = G__23727;
chunk__23169_23684 = G__23728;
count__23170_23685 = G__23729;
i__23171_23686 = G__23730;
continue;
} else {
var vec__23227_23731 = cljs.core.first(seq__23168_23725__$1);
var column_23732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23227_23731,(0),null);
var column_info_23733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23227_23731,(1),null);
var seq__23230_23734 = cljs.core.seq(column_info_23733);
var chunk__23231_23736 = null;
var count__23232_23737 = (0);
var i__23233_23738 = (0);
while(true){
if((i__23233_23738 < count__23232_23737)){
var map__23242_23740 = chunk__23231_23736.cljs$core$IIndexed$_nth$arity$2(null,i__23233_23738);
var map__23242_23741__$1 = (((((!((map__23242_23740 == null))))?(((((map__23242_23740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23242_23740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23242_23740):map__23242_23740);
var gline_23742 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23242_23741__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23242_23741__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23242_23741__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23742], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23230_23734,chunk__23231_23736,count__23232_23737,i__23233_23738,seq__23168_23683,chunk__23169_23684,count__23170_23685,i__23171_23686,seq__23002_23676,chunk__23003_23677,count__23004_23678,i__23005_23679,map__23242_23740,map__23242_23741__$1,gline_23742,gcol_23743,name_23744,vec__23227_23731,column_23732,column_info_23733,seq__23168_23725__$1,temp__5735__auto___23724,vec__23165_23680,line_23681,columns_23682,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23743], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23681,new cljs.core.Keyword(null,"col","col",-1959363084),column_23732,new cljs.core.Keyword(null,"name","name",1843675177),name_23744], null));
});})(seq__23230_23734,chunk__23231_23736,count__23232_23737,i__23233_23738,seq__23168_23683,chunk__23169_23684,count__23170_23685,i__23171_23686,seq__23002_23676,chunk__23003_23677,count__23004_23678,i__23005_23679,map__23242_23740,map__23242_23741__$1,gline_23742,gcol_23743,name_23744,vec__23227_23731,column_23732,column_info_23733,seq__23168_23725__$1,temp__5735__auto___23724,vec__23165_23680,line_23681,columns_23682,inverted))
,cljs.core.sorted_map()));


var G__23750 = seq__23230_23734;
var G__23751 = chunk__23231_23736;
var G__23752 = count__23232_23737;
var G__23753 = (i__23233_23738 + (1));
seq__23230_23734 = G__23750;
chunk__23231_23736 = G__23751;
count__23232_23737 = G__23752;
i__23233_23738 = G__23753;
continue;
} else {
var temp__5735__auto___23754__$1 = cljs.core.seq(seq__23230_23734);
if(temp__5735__auto___23754__$1){
var seq__23230_23755__$1 = temp__5735__auto___23754__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23230_23755__$1)){
var c__4556__auto___23756 = cljs.core.chunk_first(seq__23230_23755__$1);
var G__23757 = cljs.core.chunk_rest(seq__23230_23755__$1);
var G__23758 = c__4556__auto___23756;
var G__23759 = cljs.core.count(c__4556__auto___23756);
var G__23760 = (0);
seq__23230_23734 = G__23757;
chunk__23231_23736 = G__23758;
count__23232_23737 = G__23759;
i__23233_23738 = G__23760;
continue;
} else {
var map__23244_23768 = cljs.core.first(seq__23230_23755__$1);
var map__23244_23769__$1 = (((((!((map__23244_23768 == null))))?(((((map__23244_23768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23244_23768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23244_23768):map__23244_23768);
var gline_23770 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23244_23769__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23244_23769__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23244_23769__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23770], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23230_23734,chunk__23231_23736,count__23232_23737,i__23233_23738,seq__23168_23683,chunk__23169_23684,count__23170_23685,i__23171_23686,seq__23002_23676,chunk__23003_23677,count__23004_23678,i__23005_23679,map__23244_23768,map__23244_23769__$1,gline_23770,gcol_23771,name_23772,seq__23230_23755__$1,temp__5735__auto___23754__$1,vec__23227_23731,column_23732,column_info_23733,seq__23168_23725__$1,temp__5735__auto___23724,vec__23165_23680,line_23681,columns_23682,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23771], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23681,new cljs.core.Keyword(null,"col","col",-1959363084),column_23732,new cljs.core.Keyword(null,"name","name",1843675177),name_23772], null));
});})(seq__23230_23734,chunk__23231_23736,count__23232_23737,i__23233_23738,seq__23168_23683,chunk__23169_23684,count__23170_23685,i__23171_23686,seq__23002_23676,chunk__23003_23677,count__23004_23678,i__23005_23679,map__23244_23768,map__23244_23769__$1,gline_23770,gcol_23771,name_23772,seq__23230_23755__$1,temp__5735__auto___23754__$1,vec__23227_23731,column_23732,column_info_23733,seq__23168_23725__$1,temp__5735__auto___23724,vec__23165_23680,line_23681,columns_23682,inverted))
,cljs.core.sorted_map()));


var G__23775 = cljs.core.next(seq__23230_23755__$1);
var G__23776 = null;
var G__23777 = (0);
var G__23778 = (0);
seq__23230_23734 = G__23775;
chunk__23231_23736 = G__23776;
count__23232_23737 = G__23777;
i__23233_23738 = G__23778;
continue;
}
} else {
}
}
break;
}


var G__23779 = cljs.core.next(seq__23168_23725__$1);
var G__23780 = null;
var G__23781 = (0);
var G__23782 = (0);
seq__23168_23683 = G__23779;
chunk__23169_23684 = G__23780;
count__23170_23685 = G__23781;
i__23171_23686 = G__23782;
continue;
}
} else {
}
}
break;
}


var G__23783 = seq__23002_23676;
var G__23784 = chunk__23003_23677;
var G__23785 = count__23004_23678;
var G__23786 = (i__23005_23679 + (1));
seq__23002_23676 = G__23783;
chunk__23003_23677 = G__23784;
count__23004_23678 = G__23785;
i__23005_23679 = G__23786;
continue;
} else {
var temp__5735__auto___23787 = cljs.core.seq(seq__23002_23676);
if(temp__5735__auto___23787){
var seq__23002_23788__$1 = temp__5735__auto___23787;
if(cljs.core.chunked_seq_QMARK_(seq__23002_23788__$1)){
var c__4556__auto___23791 = cljs.core.chunk_first(seq__23002_23788__$1);
var G__23792 = cljs.core.chunk_rest(seq__23002_23788__$1);
var G__23793 = c__4556__auto___23791;
var G__23794 = cljs.core.count(c__4556__auto___23791);
var G__23795 = (0);
seq__23002_23676 = G__23792;
chunk__23003_23677 = G__23793;
count__23004_23678 = G__23794;
i__23005_23679 = G__23795;
continue;
} else {
var vec__23246_23802 = cljs.core.first(seq__23002_23788__$1);
var line_23803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23246_23802,(0),null);
var columns_23804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23246_23802,(1),null);
var seq__23249_23805 = cljs.core.seq(columns_23804);
var chunk__23250_23806 = null;
var count__23251_23807 = (0);
var i__23252_23808 = (0);
while(true){
if((i__23252_23808 < count__23251_23807)){
var vec__23317_23809 = chunk__23250_23806.cljs$core$IIndexed$_nth$arity$2(null,i__23252_23808);
var column_23810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23317_23809,(0),null);
var column_info_23811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23317_23809,(1),null);
var seq__23321_23812 = cljs.core.seq(column_info_23811);
var chunk__23322_23813 = null;
var count__23323_23814 = (0);
var i__23324_23815 = (0);
while(true){
if((i__23324_23815 < count__23323_23814)){
var map__23352_23816 = chunk__23322_23813.cljs$core$IIndexed$_nth$arity$2(null,i__23324_23815);
var map__23352_23817__$1 = (((((!((map__23352_23816 == null))))?(((((map__23352_23816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23352_23816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23352_23816):map__23352_23816);
var gline_23818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23352_23817__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23352_23817__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23352_23817__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23818], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23321_23812,chunk__23322_23813,count__23323_23814,i__23324_23815,seq__23249_23805,chunk__23250_23806,count__23251_23807,i__23252_23808,seq__23002_23676,chunk__23003_23677,count__23004_23678,i__23005_23679,map__23352_23816,map__23352_23817__$1,gline_23818,gcol_23819,name_23820,vec__23317_23809,column_23810,column_info_23811,vec__23246_23802,line_23803,columns_23804,seq__23002_23788__$1,temp__5735__auto___23787,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23819], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23803,new cljs.core.Keyword(null,"col","col",-1959363084),column_23810,new cljs.core.Keyword(null,"name","name",1843675177),name_23820], null));
});})(seq__23321_23812,chunk__23322_23813,count__23323_23814,i__23324_23815,seq__23249_23805,chunk__23250_23806,count__23251_23807,i__23252_23808,seq__23002_23676,chunk__23003_23677,count__23004_23678,i__23005_23679,map__23352_23816,map__23352_23817__$1,gline_23818,gcol_23819,name_23820,vec__23317_23809,column_23810,column_info_23811,vec__23246_23802,line_23803,columns_23804,seq__23002_23788__$1,temp__5735__auto___23787,inverted))
,cljs.core.sorted_map()));


var G__23823 = seq__23321_23812;
var G__23824 = chunk__23322_23813;
var G__23825 = count__23323_23814;
var G__23826 = (i__23324_23815 + (1));
seq__23321_23812 = G__23823;
chunk__23322_23813 = G__23824;
count__23323_23814 = G__23825;
i__23324_23815 = G__23826;
continue;
} else {
var temp__5735__auto___23827__$1 = cljs.core.seq(seq__23321_23812);
if(temp__5735__auto___23827__$1){
var seq__23321_23828__$1 = temp__5735__auto___23827__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23321_23828__$1)){
var c__4556__auto___23832 = cljs.core.chunk_first(seq__23321_23828__$1);
var G__23833 = cljs.core.chunk_rest(seq__23321_23828__$1);
var G__23834 = c__4556__auto___23832;
var G__23835 = cljs.core.count(c__4556__auto___23832);
var G__23836 = (0);
seq__23321_23812 = G__23833;
chunk__23322_23813 = G__23834;
count__23323_23814 = G__23835;
i__23324_23815 = G__23836;
continue;
} else {
var map__23354_23837 = cljs.core.first(seq__23321_23828__$1);
var map__23354_23838__$1 = (((((!((map__23354_23837 == null))))?(((((map__23354_23837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23354_23837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23354_23837):map__23354_23837);
var gline_23839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23354_23838__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23354_23838__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23354_23838__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23839], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23321_23812,chunk__23322_23813,count__23323_23814,i__23324_23815,seq__23249_23805,chunk__23250_23806,count__23251_23807,i__23252_23808,seq__23002_23676,chunk__23003_23677,count__23004_23678,i__23005_23679,map__23354_23837,map__23354_23838__$1,gline_23839,gcol_23840,name_23841,seq__23321_23828__$1,temp__5735__auto___23827__$1,vec__23317_23809,column_23810,column_info_23811,vec__23246_23802,line_23803,columns_23804,seq__23002_23788__$1,temp__5735__auto___23787,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23840], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23803,new cljs.core.Keyword(null,"col","col",-1959363084),column_23810,new cljs.core.Keyword(null,"name","name",1843675177),name_23841], null));
});})(seq__23321_23812,chunk__23322_23813,count__23323_23814,i__23324_23815,seq__23249_23805,chunk__23250_23806,count__23251_23807,i__23252_23808,seq__23002_23676,chunk__23003_23677,count__23004_23678,i__23005_23679,map__23354_23837,map__23354_23838__$1,gline_23839,gcol_23840,name_23841,seq__23321_23828__$1,temp__5735__auto___23827__$1,vec__23317_23809,column_23810,column_info_23811,vec__23246_23802,line_23803,columns_23804,seq__23002_23788__$1,temp__5735__auto___23787,inverted))
,cljs.core.sorted_map()));


var G__23842 = cljs.core.next(seq__23321_23828__$1);
var G__23843 = null;
var G__23844 = (0);
var G__23845 = (0);
seq__23321_23812 = G__23842;
chunk__23322_23813 = G__23843;
count__23323_23814 = G__23844;
i__23324_23815 = G__23845;
continue;
}
} else {
}
}
break;
}


var G__23846 = seq__23249_23805;
var G__23847 = chunk__23250_23806;
var G__23848 = count__23251_23807;
var G__23849 = (i__23252_23808 + (1));
seq__23249_23805 = G__23846;
chunk__23250_23806 = G__23847;
count__23251_23807 = G__23848;
i__23252_23808 = G__23849;
continue;
} else {
var temp__5735__auto___23850__$1 = cljs.core.seq(seq__23249_23805);
if(temp__5735__auto___23850__$1){
var seq__23249_23851__$1 = temp__5735__auto___23850__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23249_23851__$1)){
var c__4556__auto___23852 = cljs.core.chunk_first(seq__23249_23851__$1);
var G__23853 = cljs.core.chunk_rest(seq__23249_23851__$1);
var G__23854 = c__4556__auto___23852;
var G__23855 = cljs.core.count(c__4556__auto___23852);
var G__23856 = (0);
seq__23249_23805 = G__23853;
chunk__23250_23806 = G__23854;
count__23251_23807 = G__23855;
i__23252_23808 = G__23856;
continue;
} else {
var vec__23356_23857 = cljs.core.first(seq__23249_23851__$1);
var column_23858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23356_23857,(0),null);
var column_info_23859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23356_23857,(1),null);
var seq__23359_23860 = cljs.core.seq(column_info_23859);
var chunk__23360_23861 = null;
var count__23361_23862 = (0);
var i__23362_23863 = (0);
while(true){
if((i__23362_23863 < count__23361_23862)){
var map__23389_23864 = chunk__23360_23861.cljs$core$IIndexed$_nth$arity$2(null,i__23362_23863);
var map__23389_23865__$1 = (((((!((map__23389_23864 == null))))?(((((map__23389_23864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23389_23864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23389_23864):map__23389_23864);
var gline_23866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23389_23865__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23389_23865__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23389_23865__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23866], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23359_23860,chunk__23360_23861,count__23361_23862,i__23362_23863,seq__23249_23805,chunk__23250_23806,count__23251_23807,i__23252_23808,seq__23002_23676,chunk__23003_23677,count__23004_23678,i__23005_23679,map__23389_23864,map__23389_23865__$1,gline_23866,gcol_23867,name_23868,vec__23356_23857,column_23858,column_info_23859,seq__23249_23851__$1,temp__5735__auto___23850__$1,vec__23246_23802,line_23803,columns_23804,seq__23002_23788__$1,temp__5735__auto___23787,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23867], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23803,new cljs.core.Keyword(null,"col","col",-1959363084),column_23858,new cljs.core.Keyword(null,"name","name",1843675177),name_23868], null));
});})(seq__23359_23860,chunk__23360_23861,count__23361_23862,i__23362_23863,seq__23249_23805,chunk__23250_23806,count__23251_23807,i__23252_23808,seq__23002_23676,chunk__23003_23677,count__23004_23678,i__23005_23679,map__23389_23864,map__23389_23865__$1,gline_23866,gcol_23867,name_23868,vec__23356_23857,column_23858,column_info_23859,seq__23249_23851__$1,temp__5735__auto___23850__$1,vec__23246_23802,line_23803,columns_23804,seq__23002_23788__$1,temp__5735__auto___23787,inverted))
,cljs.core.sorted_map()));


var G__23871 = seq__23359_23860;
var G__23872 = chunk__23360_23861;
var G__23873 = count__23361_23862;
var G__23874 = (i__23362_23863 + (1));
seq__23359_23860 = G__23871;
chunk__23360_23861 = G__23872;
count__23361_23862 = G__23873;
i__23362_23863 = G__23874;
continue;
} else {
var temp__5735__auto___23875__$2 = cljs.core.seq(seq__23359_23860);
if(temp__5735__auto___23875__$2){
var seq__23359_23876__$1 = temp__5735__auto___23875__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23359_23876__$1)){
var c__4556__auto___23877 = cljs.core.chunk_first(seq__23359_23876__$1);
var G__23878 = cljs.core.chunk_rest(seq__23359_23876__$1);
var G__23879 = c__4556__auto___23877;
var G__23880 = cljs.core.count(c__4556__auto___23877);
var G__23881 = (0);
seq__23359_23860 = G__23878;
chunk__23360_23861 = G__23879;
count__23361_23862 = G__23880;
i__23362_23863 = G__23881;
continue;
} else {
var map__23391_23882 = cljs.core.first(seq__23359_23876__$1);
var map__23391_23883__$1 = (((((!((map__23391_23882 == null))))?(((((map__23391_23882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23391_23882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23391_23882):map__23391_23882);
var gline_23884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23391_23883__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23391_23883__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23391_23883__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23884], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23359_23860,chunk__23360_23861,count__23361_23862,i__23362_23863,seq__23249_23805,chunk__23250_23806,count__23251_23807,i__23252_23808,seq__23002_23676,chunk__23003_23677,count__23004_23678,i__23005_23679,map__23391_23882,map__23391_23883__$1,gline_23884,gcol_23885,name_23886,seq__23359_23876__$1,temp__5735__auto___23875__$2,vec__23356_23857,column_23858,column_info_23859,seq__23249_23851__$1,temp__5735__auto___23850__$1,vec__23246_23802,line_23803,columns_23804,seq__23002_23788__$1,temp__5735__auto___23787,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23885], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23803,new cljs.core.Keyword(null,"col","col",-1959363084),column_23858,new cljs.core.Keyword(null,"name","name",1843675177),name_23886], null));
});})(seq__23359_23860,chunk__23360_23861,count__23361_23862,i__23362_23863,seq__23249_23805,chunk__23250_23806,count__23251_23807,i__23252_23808,seq__23002_23676,chunk__23003_23677,count__23004_23678,i__23005_23679,map__23391_23882,map__23391_23883__$1,gline_23884,gcol_23885,name_23886,seq__23359_23876__$1,temp__5735__auto___23875__$2,vec__23356_23857,column_23858,column_info_23859,seq__23249_23851__$1,temp__5735__auto___23850__$1,vec__23246_23802,line_23803,columns_23804,seq__23002_23788__$1,temp__5735__auto___23787,inverted))
,cljs.core.sorted_map()));


var G__23887 = cljs.core.next(seq__23359_23876__$1);
var G__23888 = null;
var G__23889 = (0);
var G__23890 = (0);
seq__23359_23860 = G__23887;
chunk__23360_23861 = G__23888;
count__23361_23862 = G__23889;
i__23362_23863 = G__23890;
continue;
}
} else {
}
}
break;
}


var G__23891 = cljs.core.next(seq__23249_23851__$1);
var G__23892 = null;
var G__23893 = (0);
var G__23894 = (0);
seq__23249_23805 = G__23891;
chunk__23250_23806 = G__23892;
count__23251_23807 = G__23893;
i__23252_23808 = G__23894;
continue;
}
} else {
}
}
break;
}


var G__23895 = cljs.core.next(seq__23002_23788__$1);
var G__23896 = null;
var G__23897 = (0);
var G__23898 = (0);
seq__23002_23676 = G__23895;
chunk__23003_23677 = G__23896;
count__23004_23678 = G__23897;
i__23005_23679 = G__23898;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
