goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__22476){
var vec__22477 = p__22476;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22477,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22477,(1),null);
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
var vec__22484 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22484,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22484,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22484,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22484,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22484,(4),null);
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
var vec__22487 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22487,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22487,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22487,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22487,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22487,(4),null);
var vec__22490 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22490,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22490,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22490,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22490,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22490,(4),null);
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
var map__22493 = segmap;
var map__22493__$1 = (((((!((map__22493 == null))))?(((((map__22493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22493):map__22493);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22493__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22493__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22493__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22493__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22493__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var vec__22500 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__23333 = cljs.core.next(segs__$1);
var G__23334 = nrelseg;
var G__23335 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23333;
relseg__$1 = G__23334;
result__$1 = G__23335;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22500,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22500,(1),null);
var G__23336 = (gline + (1));
var G__23337 = cljs.core.next(lines__$1);
var G__23338 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23339 = result__$1;
gline = G__23336;
lines__$1 = G__23337;
relseg = G__23338;
result = G__23339;
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
var map__22514 = segmap;
var map__22514__$1 = (((((!((map__22514 == null))))?(((((map__22514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22514):map__22514);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22514__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22514__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22514__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22514__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22514__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__22510_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__22510_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__22523 = arguments.length;
switch (G__22523) {
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
var vec__22528 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__23357 = cljs.core.next(segs__$1);
var G__23358 = nrelseg;
var G__23359 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23357;
relseg__$1 = G__23358;
result__$1 = G__23359;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22528,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22528,(1),null);
var G__23360 = (gline + (1));
var G__23361 = cljs.core.next(lines__$1);
var G__23362 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23363 = result__$1;
gline = G__23360;
lines__$1 = G__23361;
relseg = G__23362;
result = G__23363;
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
var seq__22546 = cljs.core.seq(infos);
var chunk__22547 = null;
var count__22548 = (0);
var i__22549 = (0);
while(true){
if((i__22549 < count__22548)){
var info = chunk__22547.cljs$core$IIndexed$_nth$arity$2(null,i__22549);
var segv_23385 = info__GT_segv(info,source_idx,line,col);
var gline_23386 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23387 = cljs.core.count(cljs.core.deref(lines));
if((gline_23386 > (lc_23387 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22546,chunk__22547,count__22548,i__22549,segv_23385,gline_23386,lc_23387,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23386 - (lc_23387 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23385], null));
});})(seq__22546,chunk__22547,count__22548,i__22549,segv_23385,gline_23386,lc_23387,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22546,chunk__22547,count__22548,i__22549,segv_23385,gline_23386,lc_23387,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23386], null),cljs.core.conj,segv_23385);
});})(seq__22546,chunk__22547,count__22548,i__22549,segv_23385,gline_23386,lc_23387,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23390 = seq__22546;
var G__23391 = chunk__22547;
var G__23392 = count__22548;
var G__23393 = (i__22549 + (1));
seq__22546 = G__23390;
chunk__22547 = G__23391;
count__22548 = G__23392;
i__22549 = G__23393;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__22546);
if(temp__5735__auto__){
var seq__22546__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22546__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__22546__$1);
var G__23394 = cljs.core.chunk_rest(seq__22546__$1);
var G__23395 = c__4556__auto__;
var G__23396 = cljs.core.count(c__4556__auto__);
var G__23397 = (0);
seq__22546 = G__23394;
chunk__22547 = G__23395;
count__22548 = G__23396;
i__22549 = G__23397;
continue;
} else {
var info = cljs.core.first(seq__22546__$1);
var segv_23398 = info__GT_segv(info,source_idx,line,col);
var gline_23399 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23400 = cljs.core.count(cljs.core.deref(lines));
if((gline_23399 > (lc_23400 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22546,chunk__22547,count__22548,i__22549,segv_23398,gline_23399,lc_23400,info,seq__22546__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23399 - (lc_23400 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23398], null));
});})(seq__22546,chunk__22547,count__22548,i__22549,segv_23398,gline_23399,lc_23400,info,seq__22546__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22546,chunk__22547,count__22548,i__22549,segv_23398,gline_23399,lc_23400,info,seq__22546__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23399], null),cljs.core.conj,segv_23398);
});})(seq__22546,chunk__22547,count__22548,i__22549,segv_23398,gline_23399,lc_23400,info,seq__22546__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23409 = cljs.core.next(seq__22546__$1);
var G__23410 = null;
var G__23411 = (0);
var G__23412 = (0);
seq__22546 = G__23409;
chunk__22547 = G__23410;
count__22548 = G__23411;
i__22549 = G__23412;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__22556_23414 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__22557_23415 = null;
var count__22558_23416 = (0);
var i__22559_23417 = (0);
while(true){
if((i__22559_23417 < count__22558_23416)){
var vec__22769_23421 = chunk__22557_23415.cljs$core$IIndexed$_nth$arity$2(null,i__22559_23417);
var source_idx_23422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22769_23421,(0),null);
var vec__22772_23423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22769_23421,(1),null);
var __23424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22772_23423,(0),null);
var lines_23425__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22772_23423,(1),null);
var seq__22775_23426 = cljs.core.seq(lines_23425__$1);
var chunk__22776_23427 = null;
var count__22777_23428 = (0);
var i__22778_23429 = (0);
while(true){
if((i__22778_23429 < count__22777_23428)){
var vec__22827_23432 = chunk__22776_23427.cljs$core$IIndexed$_nth$arity$2(null,i__22778_23429);
var line_23433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22827_23432,(0),null);
var cols_23434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22827_23432,(1),null);
var seq__22830_23435 = cljs.core.seq(cols_23434);
var chunk__22831_23436 = null;
var count__22832_23437 = (0);
var i__22833_23438 = (0);
while(true){
if((i__22833_23438 < count__22832_23437)){
var vec__22840_23441 = chunk__22831_23436.cljs$core$IIndexed$_nth$arity$2(null,i__22833_23438);
var col_23442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22840_23441,(0),null);
var infos_23443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22840_23441,(1),null);
encode_cols(infos_23443,source_idx_23422,line_23433,col_23442);


var G__23446 = seq__22830_23435;
var G__23447 = chunk__22831_23436;
var G__23448 = count__22832_23437;
var G__23449 = (i__22833_23438 + (1));
seq__22830_23435 = G__23446;
chunk__22831_23436 = G__23447;
count__22832_23437 = G__23448;
i__22833_23438 = G__23449;
continue;
} else {
var temp__5735__auto___23450 = cljs.core.seq(seq__22830_23435);
if(temp__5735__auto___23450){
var seq__22830_23451__$1 = temp__5735__auto___23450;
if(cljs.core.chunked_seq_QMARK_(seq__22830_23451__$1)){
var c__4556__auto___23454 = cljs.core.chunk_first(seq__22830_23451__$1);
var G__23455 = cljs.core.chunk_rest(seq__22830_23451__$1);
var G__23456 = c__4556__auto___23454;
var G__23457 = cljs.core.count(c__4556__auto___23454);
var G__23458 = (0);
seq__22830_23435 = G__23455;
chunk__22831_23436 = G__23456;
count__22832_23437 = G__23457;
i__22833_23438 = G__23458;
continue;
} else {
var vec__22843_23461 = cljs.core.first(seq__22830_23451__$1);
var col_23462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22843_23461,(0),null);
var infos_23463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22843_23461,(1),null);
encode_cols(infos_23463,source_idx_23422,line_23433,col_23462);


var G__23464 = cljs.core.next(seq__22830_23451__$1);
var G__23465 = null;
var G__23466 = (0);
var G__23467 = (0);
seq__22830_23435 = G__23464;
chunk__22831_23436 = G__23465;
count__22832_23437 = G__23466;
i__22833_23438 = G__23467;
continue;
}
} else {
}
}
break;
}


var G__23468 = seq__22775_23426;
var G__23469 = chunk__22776_23427;
var G__23470 = count__22777_23428;
var G__23471 = (i__22778_23429 + (1));
seq__22775_23426 = G__23468;
chunk__22776_23427 = G__23469;
count__22777_23428 = G__23470;
i__22778_23429 = G__23471;
continue;
} else {
var temp__5735__auto___23472 = cljs.core.seq(seq__22775_23426);
if(temp__5735__auto___23472){
var seq__22775_23475__$1 = temp__5735__auto___23472;
if(cljs.core.chunked_seq_QMARK_(seq__22775_23475__$1)){
var c__4556__auto___23476 = cljs.core.chunk_first(seq__22775_23475__$1);
var G__23477 = cljs.core.chunk_rest(seq__22775_23475__$1);
var G__23478 = c__4556__auto___23476;
var G__23479 = cljs.core.count(c__4556__auto___23476);
var G__23480 = (0);
seq__22775_23426 = G__23477;
chunk__22776_23427 = G__23478;
count__22777_23428 = G__23479;
i__22778_23429 = G__23480;
continue;
} else {
var vec__22846_23481 = cljs.core.first(seq__22775_23475__$1);
var line_23482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22846_23481,(0),null);
var cols_23483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22846_23481,(1),null);
var seq__22849_23484 = cljs.core.seq(cols_23483);
var chunk__22850_23485 = null;
var count__22851_23486 = (0);
var i__22852_23487 = (0);
while(true){
if((i__22852_23487 < count__22851_23486)){
var vec__22859_23488 = chunk__22850_23485.cljs$core$IIndexed$_nth$arity$2(null,i__22852_23487);
var col_23489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22859_23488,(0),null);
var infos_23490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22859_23488,(1),null);
encode_cols(infos_23490,source_idx_23422,line_23482,col_23489);


var G__23492 = seq__22849_23484;
var G__23493 = chunk__22850_23485;
var G__23494 = count__22851_23486;
var G__23495 = (i__22852_23487 + (1));
seq__22849_23484 = G__23492;
chunk__22850_23485 = G__23493;
count__22851_23486 = G__23494;
i__22852_23487 = G__23495;
continue;
} else {
var temp__5735__auto___23499__$1 = cljs.core.seq(seq__22849_23484);
if(temp__5735__auto___23499__$1){
var seq__22849_23500__$1 = temp__5735__auto___23499__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22849_23500__$1)){
var c__4556__auto___23501 = cljs.core.chunk_first(seq__22849_23500__$1);
var G__23502 = cljs.core.chunk_rest(seq__22849_23500__$1);
var G__23503 = c__4556__auto___23501;
var G__23504 = cljs.core.count(c__4556__auto___23501);
var G__23505 = (0);
seq__22849_23484 = G__23502;
chunk__22850_23485 = G__23503;
count__22851_23486 = G__23504;
i__22852_23487 = G__23505;
continue;
} else {
var vec__22873_23529 = cljs.core.first(seq__22849_23500__$1);
var col_23530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22873_23529,(0),null);
var infos_23531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22873_23529,(1),null);
encode_cols(infos_23531,source_idx_23422,line_23482,col_23530);


var G__23532 = cljs.core.next(seq__22849_23500__$1);
var G__23533 = null;
var G__23534 = (0);
var G__23535 = (0);
seq__22849_23484 = G__23532;
chunk__22850_23485 = G__23533;
count__22851_23486 = G__23534;
i__22852_23487 = G__23535;
continue;
}
} else {
}
}
break;
}


var G__23536 = cljs.core.next(seq__22775_23475__$1);
var G__23537 = null;
var G__23538 = (0);
var G__23539 = (0);
seq__22775_23426 = G__23536;
chunk__22776_23427 = G__23537;
count__22777_23428 = G__23538;
i__22778_23429 = G__23539;
continue;
}
} else {
}
}
break;
}


var G__23540 = seq__22556_23414;
var G__23541 = chunk__22557_23415;
var G__23542 = count__22558_23416;
var G__23543 = (i__22559_23417 + (1));
seq__22556_23414 = G__23540;
chunk__22557_23415 = G__23541;
count__22558_23416 = G__23542;
i__22559_23417 = G__23543;
continue;
} else {
var temp__5735__auto___23544 = cljs.core.seq(seq__22556_23414);
if(temp__5735__auto___23544){
var seq__22556_23545__$1 = temp__5735__auto___23544;
if(cljs.core.chunked_seq_QMARK_(seq__22556_23545__$1)){
var c__4556__auto___23546 = cljs.core.chunk_first(seq__22556_23545__$1);
var G__23547 = cljs.core.chunk_rest(seq__22556_23545__$1);
var G__23548 = c__4556__auto___23546;
var G__23549 = cljs.core.count(c__4556__auto___23546);
var G__23550 = (0);
seq__22556_23414 = G__23547;
chunk__22557_23415 = G__23548;
count__22558_23416 = G__23549;
i__22559_23417 = G__23550;
continue;
} else {
var vec__22876_23551 = cljs.core.first(seq__22556_23545__$1);
var source_idx_23552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22876_23551,(0),null);
var vec__22879_23553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22876_23551,(1),null);
var __23554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22879_23553,(0),null);
var lines_23555__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22879_23553,(1),null);
var seq__22882_23559 = cljs.core.seq(lines_23555__$1);
var chunk__22883_23560 = null;
var count__22884_23561 = (0);
var i__22885_23562 = (0);
while(true){
if((i__22885_23562 < count__22884_23561)){
var vec__22937_23564 = chunk__22883_23560.cljs$core$IIndexed$_nth$arity$2(null,i__22885_23562);
var line_23565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22937_23564,(0),null);
var cols_23566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22937_23564,(1),null);
var seq__22940_23567 = cljs.core.seq(cols_23566);
var chunk__22941_23568 = null;
var count__22942_23569 = (0);
var i__22943_23570 = (0);
while(true){
if((i__22943_23570 < count__22942_23569)){
var vec__22950_23571 = chunk__22941_23568.cljs$core$IIndexed$_nth$arity$2(null,i__22943_23570);
var col_23572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22950_23571,(0),null);
var infos_23573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22950_23571,(1),null);
encode_cols(infos_23573,source_idx_23552,line_23565,col_23572);


var G__23574 = seq__22940_23567;
var G__23575 = chunk__22941_23568;
var G__23576 = count__22942_23569;
var G__23577 = (i__22943_23570 + (1));
seq__22940_23567 = G__23574;
chunk__22941_23568 = G__23575;
count__22942_23569 = G__23576;
i__22943_23570 = G__23577;
continue;
} else {
var temp__5735__auto___23578__$1 = cljs.core.seq(seq__22940_23567);
if(temp__5735__auto___23578__$1){
var seq__22940_23579__$1 = temp__5735__auto___23578__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22940_23579__$1)){
var c__4556__auto___23580 = cljs.core.chunk_first(seq__22940_23579__$1);
var G__23581 = cljs.core.chunk_rest(seq__22940_23579__$1);
var G__23582 = c__4556__auto___23580;
var G__23583 = cljs.core.count(c__4556__auto___23580);
var G__23584 = (0);
seq__22940_23567 = G__23581;
chunk__22941_23568 = G__23582;
count__22942_23569 = G__23583;
i__22943_23570 = G__23584;
continue;
} else {
var vec__22953_23586 = cljs.core.first(seq__22940_23579__$1);
var col_23587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22953_23586,(0),null);
var infos_23588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22953_23586,(1),null);
encode_cols(infos_23588,source_idx_23552,line_23565,col_23587);


var G__23589 = cljs.core.next(seq__22940_23579__$1);
var G__23590 = null;
var G__23591 = (0);
var G__23592 = (0);
seq__22940_23567 = G__23589;
chunk__22941_23568 = G__23590;
count__22942_23569 = G__23591;
i__22943_23570 = G__23592;
continue;
}
} else {
}
}
break;
}


var G__23593 = seq__22882_23559;
var G__23594 = chunk__22883_23560;
var G__23595 = count__22884_23561;
var G__23596 = (i__22885_23562 + (1));
seq__22882_23559 = G__23593;
chunk__22883_23560 = G__23594;
count__22884_23561 = G__23595;
i__22885_23562 = G__23596;
continue;
} else {
var temp__5735__auto___23597__$1 = cljs.core.seq(seq__22882_23559);
if(temp__5735__auto___23597__$1){
var seq__22882_23598__$1 = temp__5735__auto___23597__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22882_23598__$1)){
var c__4556__auto___23601 = cljs.core.chunk_first(seq__22882_23598__$1);
var G__23602 = cljs.core.chunk_rest(seq__22882_23598__$1);
var G__23603 = c__4556__auto___23601;
var G__23604 = cljs.core.count(c__4556__auto___23601);
var G__23605 = (0);
seq__22882_23559 = G__23602;
chunk__22883_23560 = G__23603;
count__22884_23561 = G__23604;
i__22885_23562 = G__23605;
continue;
} else {
var vec__22956_23607 = cljs.core.first(seq__22882_23598__$1);
var line_23608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22956_23607,(0),null);
var cols_23610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22956_23607,(1),null);
var seq__22959_23611 = cljs.core.seq(cols_23610);
var chunk__22960_23612 = null;
var count__22961_23613 = (0);
var i__22962_23614 = (0);
while(true){
if((i__22962_23614 < count__22961_23613)){
var vec__22974_23615 = chunk__22960_23612.cljs$core$IIndexed$_nth$arity$2(null,i__22962_23614);
var col_23616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22974_23615,(0),null);
var infos_23617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22974_23615,(1),null);
encode_cols(infos_23617,source_idx_23552,line_23608,col_23616);


var G__23625 = seq__22959_23611;
var G__23626 = chunk__22960_23612;
var G__23627 = count__22961_23613;
var G__23628 = (i__22962_23614 + (1));
seq__22959_23611 = G__23625;
chunk__22960_23612 = G__23626;
count__22961_23613 = G__23627;
i__22962_23614 = G__23628;
continue;
} else {
var temp__5735__auto___23629__$2 = cljs.core.seq(seq__22959_23611);
if(temp__5735__auto___23629__$2){
var seq__22959_23632__$1 = temp__5735__auto___23629__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22959_23632__$1)){
var c__4556__auto___23633 = cljs.core.chunk_first(seq__22959_23632__$1);
var G__23634 = cljs.core.chunk_rest(seq__22959_23632__$1);
var G__23635 = c__4556__auto___23633;
var G__23636 = cljs.core.count(c__4556__auto___23633);
var G__23637 = (0);
seq__22959_23611 = G__23634;
chunk__22960_23612 = G__23635;
count__22961_23613 = G__23636;
i__22962_23614 = G__23637;
continue;
} else {
var vec__22977_23640 = cljs.core.first(seq__22959_23632__$1);
var col_23641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22977_23640,(0),null);
var infos_23642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22977_23640,(1),null);
encode_cols(infos_23642,source_idx_23552,line_23608,col_23641);


var G__23645 = cljs.core.next(seq__22959_23632__$1);
var G__23646 = null;
var G__23647 = (0);
var G__23648 = (0);
seq__22959_23611 = G__23645;
chunk__22960_23612 = G__23646;
count__22961_23613 = G__23647;
i__22962_23614 = G__23648;
continue;
}
} else {
}
}
break;
}


var G__23649 = cljs.core.next(seq__22882_23598__$1);
var G__23650 = null;
var G__23651 = (0);
var G__23652 = (0);
seq__22882_23559 = G__23649;
chunk__22883_23560 = G__23650;
count__22884_23561 = G__23651;
i__22885_23562 = G__23652;
continue;
}
} else {
}
}
break;
}


var G__23655 = cljs.core.next(seq__22556_23545__$1);
var G__23656 = null;
var G__23657 = (0);
var G__23658 = (0);
seq__22556_23414 = G__23655;
chunk__22557_23415 = G__23656;
count__22558_23416 = G__23657;
i__22559_23417 = G__23658;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__22980 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__22543_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22543_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__22544_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__22544_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22545_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__22545_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__22981 = G__22980;
goog.object.set(G__22981,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__22981;
} else {
return G__22980;
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
var vec__22982 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22982,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22982,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__22985 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22985,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22985,(1),null);
var G__23659 = cljs.core.next(col_map_seq);
var G__23660 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__22985,col,infos,vec__22982,line,col_map){
return (function (v,p__22988){
var map__22989 = p__22988;
var map__22989__$1 = (((((!((map__22989 == null))))?(((((map__22989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22989):map__22989);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22989__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22989__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__22985,col,infos,vec__22982,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__23659;
new_cols = G__23660;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__23661 = cljs.core.next(line_map_seq);
var G__23662 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__23661;
new_lines = G__23662;
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
var seq__22991_23663 = cljs.core.seq(reverse_map);
var chunk__22992_23664 = null;
var count__22993_23665 = (0);
var i__22994_23666 = (0);
while(true){
if((i__22994_23666 < count__22993_23665)){
var vec__23144_23667 = chunk__22992_23664.cljs$core$IIndexed$_nth$arity$2(null,i__22994_23666);
var line_23668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23144_23667,(0),null);
var columns_23669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23144_23667,(1),null);
var seq__23147_23670 = cljs.core.seq(columns_23669);
var chunk__23148_23671 = null;
var count__23149_23672 = (0);
var i__23150_23673 = (0);
while(true){
if((i__23150_23673 < count__23149_23672)){
var vec__23202_23687 = chunk__23148_23671.cljs$core$IIndexed$_nth$arity$2(null,i__23150_23673);
var column_23688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23202_23687,(0),null);
var column_info_23689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23202_23687,(1),null);
var seq__23205_23690 = cljs.core.seq(column_info_23689);
var chunk__23206_23691 = null;
var count__23207_23692 = (0);
var i__23208_23693 = (0);
while(true){
if((i__23208_23693 < count__23207_23692)){
var map__23213_23694 = chunk__23206_23691.cljs$core$IIndexed$_nth$arity$2(null,i__23208_23693);
var map__23213_23695__$1 = (((((!((map__23213_23694 == null))))?(((((map__23213_23694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23213_23694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23213_23694):map__23213_23694);
var gline_23696 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23213_23695__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23213_23695__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23213_23695__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23696], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23205_23690,chunk__23206_23691,count__23207_23692,i__23208_23693,seq__23147_23670,chunk__23148_23671,count__23149_23672,i__23150_23673,seq__22991_23663,chunk__22992_23664,count__22993_23665,i__22994_23666,map__23213_23694,map__23213_23695__$1,gline_23696,gcol_23697,name_23698,vec__23202_23687,column_23688,column_info_23689,vec__23144_23667,line_23668,columns_23669,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23697], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23668,new cljs.core.Keyword(null,"col","col",-1959363084),column_23688,new cljs.core.Keyword(null,"name","name",1843675177),name_23698], null));
});})(seq__23205_23690,chunk__23206_23691,count__23207_23692,i__23208_23693,seq__23147_23670,chunk__23148_23671,count__23149_23672,i__23150_23673,seq__22991_23663,chunk__22992_23664,count__22993_23665,i__22994_23666,map__23213_23694,map__23213_23695__$1,gline_23696,gcol_23697,name_23698,vec__23202_23687,column_23688,column_info_23689,vec__23144_23667,line_23668,columns_23669,inverted))
,cljs.core.sorted_map()));


var G__23700 = seq__23205_23690;
var G__23701 = chunk__23206_23691;
var G__23702 = count__23207_23692;
var G__23703 = (i__23208_23693 + (1));
seq__23205_23690 = G__23700;
chunk__23206_23691 = G__23701;
count__23207_23692 = G__23702;
i__23208_23693 = G__23703;
continue;
} else {
var temp__5735__auto___23704 = cljs.core.seq(seq__23205_23690);
if(temp__5735__auto___23704){
var seq__23205_23705__$1 = temp__5735__auto___23704;
if(cljs.core.chunked_seq_QMARK_(seq__23205_23705__$1)){
var c__4556__auto___23706 = cljs.core.chunk_first(seq__23205_23705__$1);
var G__23707 = cljs.core.chunk_rest(seq__23205_23705__$1);
var G__23708 = c__4556__auto___23706;
var G__23709 = cljs.core.count(c__4556__auto___23706);
var G__23710 = (0);
seq__23205_23690 = G__23707;
chunk__23206_23691 = G__23708;
count__23207_23692 = G__23709;
i__23208_23693 = G__23710;
continue;
} else {
var map__23215_23711 = cljs.core.first(seq__23205_23705__$1);
var map__23215_23712__$1 = (((((!((map__23215_23711 == null))))?(((((map__23215_23711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23215_23711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23215_23711):map__23215_23711);
var gline_23713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23215_23712__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23215_23712__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23215_23712__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23713], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23205_23690,chunk__23206_23691,count__23207_23692,i__23208_23693,seq__23147_23670,chunk__23148_23671,count__23149_23672,i__23150_23673,seq__22991_23663,chunk__22992_23664,count__22993_23665,i__22994_23666,map__23215_23711,map__23215_23712__$1,gline_23713,gcol_23714,name_23715,seq__23205_23705__$1,temp__5735__auto___23704,vec__23202_23687,column_23688,column_info_23689,vec__23144_23667,line_23668,columns_23669,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23714], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23668,new cljs.core.Keyword(null,"col","col",-1959363084),column_23688,new cljs.core.Keyword(null,"name","name",1843675177),name_23715], null));
});})(seq__23205_23690,chunk__23206_23691,count__23207_23692,i__23208_23693,seq__23147_23670,chunk__23148_23671,count__23149_23672,i__23150_23673,seq__22991_23663,chunk__22992_23664,count__22993_23665,i__22994_23666,map__23215_23711,map__23215_23712__$1,gline_23713,gcol_23714,name_23715,seq__23205_23705__$1,temp__5735__auto___23704,vec__23202_23687,column_23688,column_info_23689,vec__23144_23667,line_23668,columns_23669,inverted))
,cljs.core.sorted_map()));


var G__23716 = cljs.core.next(seq__23205_23705__$1);
var G__23717 = null;
var G__23718 = (0);
var G__23719 = (0);
seq__23205_23690 = G__23716;
chunk__23206_23691 = G__23717;
count__23207_23692 = G__23718;
i__23208_23693 = G__23719;
continue;
}
} else {
}
}
break;
}


var G__23720 = seq__23147_23670;
var G__23721 = chunk__23148_23671;
var G__23722 = count__23149_23672;
var G__23723 = (i__23150_23673 + (1));
seq__23147_23670 = G__23720;
chunk__23148_23671 = G__23721;
count__23149_23672 = G__23722;
i__23150_23673 = G__23723;
continue;
} else {
var temp__5735__auto___23724 = cljs.core.seq(seq__23147_23670);
if(temp__5735__auto___23724){
var seq__23147_23725__$1 = temp__5735__auto___23724;
if(cljs.core.chunked_seq_QMARK_(seq__23147_23725__$1)){
var c__4556__auto___23726 = cljs.core.chunk_first(seq__23147_23725__$1);
var G__23727 = cljs.core.chunk_rest(seq__23147_23725__$1);
var G__23728 = c__4556__auto___23726;
var G__23729 = cljs.core.count(c__4556__auto___23726);
var G__23730 = (0);
seq__23147_23670 = G__23727;
chunk__23148_23671 = G__23728;
count__23149_23672 = G__23729;
i__23150_23673 = G__23730;
continue;
} else {
var vec__23217_23731 = cljs.core.first(seq__23147_23725__$1);
var column_23732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23217_23731,(0),null);
var column_info_23733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23217_23731,(1),null);
var seq__23220_23734 = cljs.core.seq(column_info_23733);
var chunk__23221_23735 = null;
var count__23222_23736 = (0);
var i__23223_23737 = (0);
while(true){
if((i__23223_23737 < count__23222_23736)){
var map__23228_23750 = chunk__23221_23735.cljs$core$IIndexed$_nth$arity$2(null,i__23223_23737);
var map__23228_23751__$1 = (((((!((map__23228_23750 == null))))?(((((map__23228_23750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23228_23750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23228_23750):map__23228_23750);
var gline_23752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23228_23751__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23228_23751__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23228_23751__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23752], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23220_23734,chunk__23221_23735,count__23222_23736,i__23223_23737,seq__23147_23670,chunk__23148_23671,count__23149_23672,i__23150_23673,seq__22991_23663,chunk__22992_23664,count__22993_23665,i__22994_23666,map__23228_23750,map__23228_23751__$1,gline_23752,gcol_23753,name_23754,vec__23217_23731,column_23732,column_info_23733,seq__23147_23725__$1,temp__5735__auto___23724,vec__23144_23667,line_23668,columns_23669,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23753], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23668,new cljs.core.Keyword(null,"col","col",-1959363084),column_23732,new cljs.core.Keyword(null,"name","name",1843675177),name_23754], null));
});})(seq__23220_23734,chunk__23221_23735,count__23222_23736,i__23223_23737,seq__23147_23670,chunk__23148_23671,count__23149_23672,i__23150_23673,seq__22991_23663,chunk__22992_23664,count__22993_23665,i__22994_23666,map__23228_23750,map__23228_23751__$1,gline_23752,gcol_23753,name_23754,vec__23217_23731,column_23732,column_info_23733,seq__23147_23725__$1,temp__5735__auto___23724,vec__23144_23667,line_23668,columns_23669,inverted))
,cljs.core.sorted_map()));


var G__23755 = seq__23220_23734;
var G__23756 = chunk__23221_23735;
var G__23757 = count__23222_23736;
var G__23758 = (i__23223_23737 + (1));
seq__23220_23734 = G__23755;
chunk__23221_23735 = G__23756;
count__23222_23736 = G__23757;
i__23223_23737 = G__23758;
continue;
} else {
var temp__5735__auto___23759__$1 = cljs.core.seq(seq__23220_23734);
if(temp__5735__auto___23759__$1){
var seq__23220_23760__$1 = temp__5735__auto___23759__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23220_23760__$1)){
var c__4556__auto___23761 = cljs.core.chunk_first(seq__23220_23760__$1);
var G__23762 = cljs.core.chunk_rest(seq__23220_23760__$1);
var G__23763 = c__4556__auto___23761;
var G__23764 = cljs.core.count(c__4556__auto___23761);
var G__23765 = (0);
seq__23220_23734 = G__23762;
chunk__23221_23735 = G__23763;
count__23222_23736 = G__23764;
i__23223_23737 = G__23765;
continue;
} else {
var map__23230_23766 = cljs.core.first(seq__23220_23760__$1);
var map__23230_23767__$1 = (((((!((map__23230_23766 == null))))?(((((map__23230_23766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23230_23766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23230_23766):map__23230_23766);
var gline_23768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23230_23767__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23769 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23230_23767__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23770 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23230_23767__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23768], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23220_23734,chunk__23221_23735,count__23222_23736,i__23223_23737,seq__23147_23670,chunk__23148_23671,count__23149_23672,i__23150_23673,seq__22991_23663,chunk__22992_23664,count__22993_23665,i__22994_23666,map__23230_23766,map__23230_23767__$1,gline_23768,gcol_23769,name_23770,seq__23220_23760__$1,temp__5735__auto___23759__$1,vec__23217_23731,column_23732,column_info_23733,seq__23147_23725__$1,temp__5735__auto___23724,vec__23144_23667,line_23668,columns_23669,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23769], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23668,new cljs.core.Keyword(null,"col","col",-1959363084),column_23732,new cljs.core.Keyword(null,"name","name",1843675177),name_23770], null));
});})(seq__23220_23734,chunk__23221_23735,count__23222_23736,i__23223_23737,seq__23147_23670,chunk__23148_23671,count__23149_23672,i__23150_23673,seq__22991_23663,chunk__22992_23664,count__22993_23665,i__22994_23666,map__23230_23766,map__23230_23767__$1,gline_23768,gcol_23769,name_23770,seq__23220_23760__$1,temp__5735__auto___23759__$1,vec__23217_23731,column_23732,column_info_23733,seq__23147_23725__$1,temp__5735__auto___23724,vec__23144_23667,line_23668,columns_23669,inverted))
,cljs.core.sorted_map()));


var G__23773 = cljs.core.next(seq__23220_23760__$1);
var G__23774 = null;
var G__23775 = (0);
var G__23776 = (0);
seq__23220_23734 = G__23773;
chunk__23221_23735 = G__23774;
count__23222_23736 = G__23775;
i__23223_23737 = G__23776;
continue;
}
} else {
}
}
break;
}


var G__23779 = cljs.core.next(seq__23147_23725__$1);
var G__23780 = null;
var G__23781 = (0);
var G__23782 = (0);
seq__23147_23670 = G__23779;
chunk__23148_23671 = G__23780;
count__23149_23672 = G__23781;
i__23150_23673 = G__23782;
continue;
}
} else {
}
}
break;
}


var G__23783 = seq__22991_23663;
var G__23784 = chunk__22992_23664;
var G__23785 = count__22993_23665;
var G__23786 = (i__22994_23666 + (1));
seq__22991_23663 = G__23783;
chunk__22992_23664 = G__23784;
count__22993_23665 = G__23785;
i__22994_23666 = G__23786;
continue;
} else {
var temp__5735__auto___23787 = cljs.core.seq(seq__22991_23663);
if(temp__5735__auto___23787){
var seq__22991_23788__$1 = temp__5735__auto___23787;
if(cljs.core.chunked_seq_QMARK_(seq__22991_23788__$1)){
var c__4556__auto___23789 = cljs.core.chunk_first(seq__22991_23788__$1);
var G__23790 = cljs.core.chunk_rest(seq__22991_23788__$1);
var G__23791 = c__4556__auto___23789;
var G__23792 = cljs.core.count(c__4556__auto___23789);
var G__23793 = (0);
seq__22991_23663 = G__23790;
chunk__22992_23664 = G__23791;
count__22993_23665 = G__23792;
i__22994_23666 = G__23793;
continue;
} else {
var vec__23232_23794 = cljs.core.first(seq__22991_23788__$1);
var line_23795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23232_23794,(0),null);
var columns_23796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23232_23794,(1),null);
var seq__23235_23797 = cljs.core.seq(columns_23796);
var chunk__23236_23798 = null;
var count__23237_23799 = (0);
var i__23238_23800 = (0);
while(true){
if((i__23238_23800 < count__23237_23799)){
var vec__23283_23801 = chunk__23236_23798.cljs$core$IIndexed$_nth$arity$2(null,i__23238_23800);
var column_23802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23283_23801,(0),null);
var column_info_23803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23283_23801,(1),null);
var seq__23286_23804 = cljs.core.seq(column_info_23803);
var chunk__23287_23805 = null;
var count__23288_23806 = (0);
var i__23289_23807 = (0);
while(true){
if((i__23289_23807 < count__23288_23806)){
var map__23297_23808 = chunk__23287_23805.cljs$core$IIndexed$_nth$arity$2(null,i__23289_23807);
var map__23297_23809__$1 = (((((!((map__23297_23808 == null))))?(((((map__23297_23808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23297_23808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23297_23808):map__23297_23808);
var gline_23810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23297_23809__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23811 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23297_23809__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23297_23809__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23810], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23286_23804,chunk__23287_23805,count__23288_23806,i__23289_23807,seq__23235_23797,chunk__23236_23798,count__23237_23799,i__23238_23800,seq__22991_23663,chunk__22992_23664,count__22993_23665,i__22994_23666,map__23297_23808,map__23297_23809__$1,gline_23810,gcol_23811,name_23812,vec__23283_23801,column_23802,column_info_23803,vec__23232_23794,line_23795,columns_23796,seq__22991_23788__$1,temp__5735__auto___23787,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23811], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23795,new cljs.core.Keyword(null,"col","col",-1959363084),column_23802,new cljs.core.Keyword(null,"name","name",1843675177),name_23812], null));
});})(seq__23286_23804,chunk__23287_23805,count__23288_23806,i__23289_23807,seq__23235_23797,chunk__23236_23798,count__23237_23799,i__23238_23800,seq__22991_23663,chunk__22992_23664,count__22993_23665,i__22994_23666,map__23297_23808,map__23297_23809__$1,gline_23810,gcol_23811,name_23812,vec__23283_23801,column_23802,column_info_23803,vec__23232_23794,line_23795,columns_23796,seq__22991_23788__$1,temp__5735__auto___23787,inverted))
,cljs.core.sorted_map()));


var G__23826 = seq__23286_23804;
var G__23827 = chunk__23287_23805;
var G__23828 = count__23288_23806;
var G__23829 = (i__23289_23807 + (1));
seq__23286_23804 = G__23826;
chunk__23287_23805 = G__23827;
count__23288_23806 = G__23828;
i__23289_23807 = G__23829;
continue;
} else {
var temp__5735__auto___23830__$1 = cljs.core.seq(seq__23286_23804);
if(temp__5735__auto___23830__$1){
var seq__23286_23831__$1 = temp__5735__auto___23830__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23286_23831__$1)){
var c__4556__auto___23832 = cljs.core.chunk_first(seq__23286_23831__$1);
var G__23833 = cljs.core.chunk_rest(seq__23286_23831__$1);
var G__23834 = c__4556__auto___23832;
var G__23835 = cljs.core.count(c__4556__auto___23832);
var G__23836 = (0);
seq__23286_23804 = G__23833;
chunk__23287_23805 = G__23834;
count__23288_23806 = G__23835;
i__23289_23807 = G__23836;
continue;
} else {
var map__23299_23837 = cljs.core.first(seq__23286_23831__$1);
var map__23299_23838__$1 = (((((!((map__23299_23837 == null))))?(((((map__23299_23837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23299_23837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23299_23837):map__23299_23837);
var gline_23839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23299_23838__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23299_23838__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23299_23838__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23839], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23286_23804,chunk__23287_23805,count__23288_23806,i__23289_23807,seq__23235_23797,chunk__23236_23798,count__23237_23799,i__23238_23800,seq__22991_23663,chunk__22992_23664,count__22993_23665,i__22994_23666,map__23299_23837,map__23299_23838__$1,gline_23839,gcol_23840,name_23841,seq__23286_23831__$1,temp__5735__auto___23830__$1,vec__23283_23801,column_23802,column_info_23803,vec__23232_23794,line_23795,columns_23796,seq__22991_23788__$1,temp__5735__auto___23787,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23840], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23795,new cljs.core.Keyword(null,"col","col",-1959363084),column_23802,new cljs.core.Keyword(null,"name","name",1843675177),name_23841], null));
});})(seq__23286_23804,chunk__23287_23805,count__23288_23806,i__23289_23807,seq__23235_23797,chunk__23236_23798,count__23237_23799,i__23238_23800,seq__22991_23663,chunk__22992_23664,count__22993_23665,i__22994_23666,map__23299_23837,map__23299_23838__$1,gline_23839,gcol_23840,name_23841,seq__23286_23831__$1,temp__5735__auto___23830__$1,vec__23283_23801,column_23802,column_info_23803,vec__23232_23794,line_23795,columns_23796,seq__22991_23788__$1,temp__5735__auto___23787,inverted))
,cljs.core.sorted_map()));


var G__23843 = cljs.core.next(seq__23286_23831__$1);
var G__23844 = null;
var G__23845 = (0);
var G__23846 = (0);
seq__23286_23804 = G__23843;
chunk__23287_23805 = G__23844;
count__23288_23806 = G__23845;
i__23289_23807 = G__23846;
continue;
}
} else {
}
}
break;
}


var G__23847 = seq__23235_23797;
var G__23848 = chunk__23236_23798;
var G__23849 = count__23237_23799;
var G__23850 = (i__23238_23800 + (1));
seq__23235_23797 = G__23847;
chunk__23236_23798 = G__23848;
count__23237_23799 = G__23849;
i__23238_23800 = G__23850;
continue;
} else {
var temp__5735__auto___23851__$1 = cljs.core.seq(seq__23235_23797);
if(temp__5735__auto___23851__$1){
var seq__23235_23852__$1 = temp__5735__auto___23851__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23235_23852__$1)){
var c__4556__auto___23853 = cljs.core.chunk_first(seq__23235_23852__$1);
var G__23854 = cljs.core.chunk_rest(seq__23235_23852__$1);
var G__23855 = c__4556__auto___23853;
var G__23856 = cljs.core.count(c__4556__auto___23853);
var G__23857 = (0);
seq__23235_23797 = G__23854;
chunk__23236_23798 = G__23855;
count__23237_23799 = G__23856;
i__23238_23800 = G__23857;
continue;
} else {
var vec__23301_23858 = cljs.core.first(seq__23235_23852__$1);
var column_23859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23301_23858,(0),null);
var column_info_23860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23301_23858,(1),null);
var seq__23304_23861 = cljs.core.seq(column_info_23860);
var chunk__23305_23862 = null;
var count__23306_23863 = (0);
var i__23307_23864 = (0);
while(true){
if((i__23307_23864 < count__23306_23863)){
var map__23321_23865 = chunk__23305_23862.cljs$core$IIndexed$_nth$arity$2(null,i__23307_23864);
var map__23321_23866__$1 = (((((!((map__23321_23865 == null))))?(((((map__23321_23865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23321_23865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23321_23865):map__23321_23865);
var gline_23867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23321_23866__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23321_23866__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23321_23866__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23867], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23304_23861,chunk__23305_23862,count__23306_23863,i__23307_23864,seq__23235_23797,chunk__23236_23798,count__23237_23799,i__23238_23800,seq__22991_23663,chunk__22992_23664,count__22993_23665,i__22994_23666,map__23321_23865,map__23321_23866__$1,gline_23867,gcol_23868,name_23869,vec__23301_23858,column_23859,column_info_23860,seq__23235_23852__$1,temp__5735__auto___23851__$1,vec__23232_23794,line_23795,columns_23796,seq__22991_23788__$1,temp__5735__auto___23787,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23868], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23795,new cljs.core.Keyword(null,"col","col",-1959363084),column_23859,new cljs.core.Keyword(null,"name","name",1843675177),name_23869], null));
});})(seq__23304_23861,chunk__23305_23862,count__23306_23863,i__23307_23864,seq__23235_23797,chunk__23236_23798,count__23237_23799,i__23238_23800,seq__22991_23663,chunk__22992_23664,count__22993_23665,i__22994_23666,map__23321_23865,map__23321_23866__$1,gline_23867,gcol_23868,name_23869,vec__23301_23858,column_23859,column_info_23860,seq__23235_23852__$1,temp__5735__auto___23851__$1,vec__23232_23794,line_23795,columns_23796,seq__22991_23788__$1,temp__5735__auto___23787,inverted))
,cljs.core.sorted_map()));


var G__23878 = seq__23304_23861;
var G__23879 = chunk__23305_23862;
var G__23880 = count__23306_23863;
var G__23881 = (i__23307_23864 + (1));
seq__23304_23861 = G__23878;
chunk__23305_23862 = G__23879;
count__23306_23863 = G__23880;
i__23307_23864 = G__23881;
continue;
} else {
var temp__5735__auto___23882__$2 = cljs.core.seq(seq__23304_23861);
if(temp__5735__auto___23882__$2){
var seq__23304_23883__$1 = temp__5735__auto___23882__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23304_23883__$1)){
var c__4556__auto___23884 = cljs.core.chunk_first(seq__23304_23883__$1);
var G__23885 = cljs.core.chunk_rest(seq__23304_23883__$1);
var G__23886 = c__4556__auto___23884;
var G__23887 = cljs.core.count(c__4556__auto___23884);
var G__23888 = (0);
seq__23304_23861 = G__23885;
chunk__23305_23862 = G__23886;
count__23306_23863 = G__23887;
i__23307_23864 = G__23888;
continue;
} else {
var map__23323_23889 = cljs.core.first(seq__23304_23883__$1);
var map__23323_23890__$1 = (((((!((map__23323_23889 == null))))?(((((map__23323_23889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23323_23889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23323_23889):map__23323_23889);
var gline_23891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23323_23890__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23323_23890__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23323_23890__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23891], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23304_23861,chunk__23305_23862,count__23306_23863,i__23307_23864,seq__23235_23797,chunk__23236_23798,count__23237_23799,i__23238_23800,seq__22991_23663,chunk__22992_23664,count__22993_23665,i__22994_23666,map__23323_23889,map__23323_23890__$1,gline_23891,gcol_23892,name_23893,seq__23304_23883__$1,temp__5735__auto___23882__$2,vec__23301_23858,column_23859,column_info_23860,seq__23235_23852__$1,temp__5735__auto___23851__$1,vec__23232_23794,line_23795,columns_23796,seq__22991_23788__$1,temp__5735__auto___23787,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23892], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23795,new cljs.core.Keyword(null,"col","col",-1959363084),column_23859,new cljs.core.Keyword(null,"name","name",1843675177),name_23893], null));
});})(seq__23304_23861,chunk__23305_23862,count__23306_23863,i__23307_23864,seq__23235_23797,chunk__23236_23798,count__23237_23799,i__23238_23800,seq__22991_23663,chunk__22992_23664,count__22993_23665,i__22994_23666,map__23323_23889,map__23323_23890__$1,gline_23891,gcol_23892,name_23893,seq__23304_23883__$1,temp__5735__auto___23882__$2,vec__23301_23858,column_23859,column_info_23860,seq__23235_23852__$1,temp__5735__auto___23851__$1,vec__23232_23794,line_23795,columns_23796,seq__22991_23788__$1,temp__5735__auto___23787,inverted))
,cljs.core.sorted_map()));


var G__23894 = cljs.core.next(seq__23304_23883__$1);
var G__23895 = null;
var G__23896 = (0);
var G__23897 = (0);
seq__23304_23861 = G__23894;
chunk__23305_23862 = G__23895;
count__23306_23863 = G__23896;
i__23307_23864 = G__23897;
continue;
}
} else {
}
}
break;
}


var G__23898 = cljs.core.next(seq__23235_23852__$1);
var G__23899 = null;
var G__23900 = (0);
var G__23901 = (0);
seq__23235_23797 = G__23898;
chunk__23236_23798 = G__23899;
count__23237_23799 = G__23900;
i__23238_23800 = G__23901;
continue;
}
} else {
}
}
break;
}


var G__23902 = cljs.core.next(seq__22991_23788__$1);
var G__23903 = null;
var G__23904 = (0);
var G__23905 = (0);
seq__22991_23663 = G__23902;
chunk__22992_23664 = G__23903;
count__22993_23665 = G__23904;
i__22994_23666 = G__23905;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
