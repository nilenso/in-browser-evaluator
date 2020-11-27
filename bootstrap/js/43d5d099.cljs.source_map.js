goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__22503){
var vec__22504 = p__22503;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22504,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22504,(1),null);
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
var vec__22507 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22507,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22507,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22507,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22507,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22507,(4),null);
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
var vec__22510 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22510,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22510,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22510,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22510,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22510,(4),null);
var vec__22513 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22513,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22513,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22513,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22513,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22513,(4),null);
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
var map__22516 = segmap;
var map__22516__$1 = (((((!((map__22516 == null))))?(((((map__22516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22516):map__22516);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22516__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22516__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22516__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22516__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22516__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__22519 = arguments.length;
switch (G__22519) {
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
var vec__22523 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__23427 = cljs.core.next(segs__$1);
var G__23428 = nrelseg;
var G__23429 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23427;
relseg__$1 = G__23428;
result__$1 = G__23429;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22523,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22523,(1),null);
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
var map__22527 = segmap;
var map__22527__$1 = (((((!((map__22527 == null))))?(((((map__22527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22527):map__22527);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22527__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22527__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22527__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22527__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22527__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__22526_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__22526_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__22534 = arguments.length;
switch (G__22534) {
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
var vec__22538 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__23455 = cljs.core.next(segs__$1);
var G__23456 = nrelseg;
var G__23457 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23455;
relseg__$1 = G__23456;
result__$1 = G__23457;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22538,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22538,(1),null);
var G__23458 = (gline + (1));
var G__23459 = cljs.core.next(lines__$1);
var G__23460 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23461 = result__$1;
gline = G__23458;
lines__$1 = G__23459;
relseg = G__23460;
result = G__23461;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__22541){
var vec__22542 = p__22541;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22542,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22542,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22542,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22542,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22542,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__22545){
var vec__22546 = p__22545;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22546,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22546,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22546,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22546,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22546,(4),null);
var seg = vec__22546;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__22571){
var vec__22572 = p__22571;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22572,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22572,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22572,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22572,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22572,(4),null);
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
var seq__22586 = cljs.core.seq(infos);
var chunk__22587 = null;
var count__22588 = (0);
var i__22589 = (0);
while(true){
if((i__22589 < count__22588)){
var info = chunk__22587.cljs$core$IIndexed$_nth$arity$2(null,i__22589);
var segv_23462 = info__GT_segv(info,source_idx,line,col);
var gline_23463 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23464 = cljs.core.count(cljs.core.deref(lines));
if((gline_23463 > (lc_23464 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22586,chunk__22587,count__22588,i__22589,segv_23462,gline_23463,lc_23464,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23463 - (lc_23464 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23462], null));
});})(seq__22586,chunk__22587,count__22588,i__22589,segv_23462,gline_23463,lc_23464,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22586,chunk__22587,count__22588,i__22589,segv_23462,gline_23463,lc_23464,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23463], null),cljs.core.conj,segv_23462);
});})(seq__22586,chunk__22587,count__22588,i__22589,segv_23462,gline_23463,lc_23464,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23478 = seq__22586;
var G__23479 = chunk__22587;
var G__23480 = count__22588;
var G__23481 = (i__22589 + (1));
seq__22586 = G__23478;
chunk__22587 = G__23479;
count__22588 = G__23480;
i__22589 = G__23481;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__22586);
if(temp__5735__auto__){
var seq__22586__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22586__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__22586__$1);
var G__23482 = cljs.core.chunk_rest(seq__22586__$1);
var G__23483 = c__4556__auto__;
var G__23484 = cljs.core.count(c__4556__auto__);
var G__23485 = (0);
seq__22586 = G__23482;
chunk__22587 = G__23483;
count__22588 = G__23484;
i__22589 = G__23485;
continue;
} else {
var info = cljs.core.first(seq__22586__$1);
var segv_23486 = info__GT_segv(info,source_idx,line,col);
var gline_23487 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23488 = cljs.core.count(cljs.core.deref(lines));
if((gline_23487 > (lc_23488 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22586,chunk__22587,count__22588,i__22589,segv_23486,gline_23487,lc_23488,info,seq__22586__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23487 - (lc_23488 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23486], null));
});})(seq__22586,chunk__22587,count__22588,i__22589,segv_23486,gline_23487,lc_23488,info,seq__22586__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22586,chunk__22587,count__22588,i__22589,segv_23486,gline_23487,lc_23488,info,seq__22586__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23487], null),cljs.core.conj,segv_23486);
});})(seq__22586,chunk__22587,count__22588,i__22589,segv_23486,gline_23487,lc_23488,info,seq__22586__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23489 = cljs.core.next(seq__22586__$1);
var G__23490 = null;
var G__23491 = (0);
var G__23492 = (0);
seq__22586 = G__23489;
chunk__22587 = G__23490;
count__22588 = G__23491;
i__22589 = G__23492;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__22605_23493 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__22606_23494 = null;
var count__22607_23495 = (0);
var i__22608_23496 = (0);
while(true){
if((i__22608_23496 < count__22607_23495)){
var vec__22819_23497 = chunk__22606_23494.cljs$core$IIndexed$_nth$arity$2(null,i__22608_23496);
var source_idx_23498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22819_23497,(0),null);
var vec__22822_23499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22819_23497,(1),null);
var __23500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22822_23499,(0),null);
var lines_23501__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22822_23499,(1),null);
var seq__22825_23502 = cljs.core.seq(lines_23501__$1);
var chunk__22826_23503 = null;
var count__22827_23504 = (0);
var i__22828_23505 = (0);
while(true){
if((i__22828_23505 < count__22827_23504)){
var vec__22867_23506 = chunk__22826_23503.cljs$core$IIndexed$_nth$arity$2(null,i__22828_23505);
var line_23507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22867_23506,(0),null);
var cols_23508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22867_23506,(1),null);
var seq__22870_23509 = cljs.core.seq(cols_23508);
var chunk__22871_23510 = null;
var count__22872_23511 = (0);
var i__22873_23512 = (0);
while(true){
if((i__22873_23512 < count__22872_23511)){
var vec__22880_23513 = chunk__22871_23510.cljs$core$IIndexed$_nth$arity$2(null,i__22873_23512);
var col_23514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22880_23513,(0),null);
var infos_23515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22880_23513,(1),null);
encode_cols(infos_23515,source_idx_23498,line_23507,col_23514);


var G__23516 = seq__22870_23509;
var G__23517 = chunk__22871_23510;
var G__23518 = count__22872_23511;
var G__23519 = (i__22873_23512 + (1));
seq__22870_23509 = G__23516;
chunk__22871_23510 = G__23517;
count__22872_23511 = G__23518;
i__22873_23512 = G__23519;
continue;
} else {
var temp__5735__auto___23520 = cljs.core.seq(seq__22870_23509);
if(temp__5735__auto___23520){
var seq__22870_23521__$1 = temp__5735__auto___23520;
if(cljs.core.chunked_seq_QMARK_(seq__22870_23521__$1)){
var c__4556__auto___23522 = cljs.core.chunk_first(seq__22870_23521__$1);
var G__23523 = cljs.core.chunk_rest(seq__22870_23521__$1);
var G__23524 = c__4556__auto___23522;
var G__23525 = cljs.core.count(c__4556__auto___23522);
var G__23526 = (0);
seq__22870_23509 = G__23523;
chunk__22871_23510 = G__23524;
count__22872_23511 = G__23525;
i__22873_23512 = G__23526;
continue;
} else {
var vec__22883_23527 = cljs.core.first(seq__22870_23521__$1);
var col_23528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22883_23527,(0),null);
var infos_23529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22883_23527,(1),null);
encode_cols(infos_23529,source_idx_23498,line_23507,col_23528);


var G__23530 = cljs.core.next(seq__22870_23521__$1);
var G__23531 = null;
var G__23532 = (0);
var G__23533 = (0);
seq__22870_23509 = G__23530;
chunk__22871_23510 = G__23531;
count__22872_23511 = G__23532;
i__22873_23512 = G__23533;
continue;
}
} else {
}
}
break;
}


var G__23534 = seq__22825_23502;
var G__23535 = chunk__22826_23503;
var G__23536 = count__22827_23504;
var G__23537 = (i__22828_23505 + (1));
seq__22825_23502 = G__23534;
chunk__22826_23503 = G__23535;
count__22827_23504 = G__23536;
i__22828_23505 = G__23537;
continue;
} else {
var temp__5735__auto___23538 = cljs.core.seq(seq__22825_23502);
if(temp__5735__auto___23538){
var seq__22825_23539__$1 = temp__5735__auto___23538;
if(cljs.core.chunked_seq_QMARK_(seq__22825_23539__$1)){
var c__4556__auto___23540 = cljs.core.chunk_first(seq__22825_23539__$1);
var G__23541 = cljs.core.chunk_rest(seq__22825_23539__$1);
var G__23542 = c__4556__auto___23540;
var G__23543 = cljs.core.count(c__4556__auto___23540);
var G__23544 = (0);
seq__22825_23502 = G__23541;
chunk__22826_23503 = G__23542;
count__22827_23504 = G__23543;
i__22828_23505 = G__23544;
continue;
} else {
var vec__22886_23545 = cljs.core.first(seq__22825_23539__$1);
var line_23546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22886_23545,(0),null);
var cols_23547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22886_23545,(1),null);
var seq__22889_23548 = cljs.core.seq(cols_23547);
var chunk__22890_23549 = null;
var count__22891_23550 = (0);
var i__22892_23551 = (0);
while(true){
if((i__22892_23551 < count__22891_23550)){
var vec__22899_23552 = chunk__22890_23549.cljs$core$IIndexed$_nth$arity$2(null,i__22892_23551);
var col_23553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22899_23552,(0),null);
var infos_23554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22899_23552,(1),null);
encode_cols(infos_23554,source_idx_23498,line_23546,col_23553);


var G__23555 = seq__22889_23548;
var G__23556 = chunk__22890_23549;
var G__23557 = count__22891_23550;
var G__23558 = (i__22892_23551 + (1));
seq__22889_23548 = G__23555;
chunk__22890_23549 = G__23556;
count__22891_23550 = G__23557;
i__22892_23551 = G__23558;
continue;
} else {
var temp__5735__auto___23559__$1 = cljs.core.seq(seq__22889_23548);
if(temp__5735__auto___23559__$1){
var seq__22889_23560__$1 = temp__5735__auto___23559__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22889_23560__$1)){
var c__4556__auto___23561 = cljs.core.chunk_first(seq__22889_23560__$1);
var G__23562 = cljs.core.chunk_rest(seq__22889_23560__$1);
var G__23563 = c__4556__auto___23561;
var G__23564 = cljs.core.count(c__4556__auto___23561);
var G__23565 = (0);
seq__22889_23548 = G__23562;
chunk__22890_23549 = G__23563;
count__22891_23550 = G__23564;
i__22892_23551 = G__23565;
continue;
} else {
var vec__22902_23567 = cljs.core.first(seq__22889_23560__$1);
var col_23568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22902_23567,(0),null);
var infos_23569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22902_23567,(1),null);
encode_cols(infos_23569,source_idx_23498,line_23546,col_23568);


var G__23570 = cljs.core.next(seq__22889_23560__$1);
var G__23571 = null;
var G__23572 = (0);
var G__23573 = (0);
seq__22889_23548 = G__23570;
chunk__22890_23549 = G__23571;
count__22891_23550 = G__23572;
i__22892_23551 = G__23573;
continue;
}
} else {
}
}
break;
}


var G__23574 = cljs.core.next(seq__22825_23539__$1);
var G__23575 = null;
var G__23576 = (0);
var G__23577 = (0);
seq__22825_23502 = G__23574;
chunk__22826_23503 = G__23575;
count__22827_23504 = G__23576;
i__22828_23505 = G__23577;
continue;
}
} else {
}
}
break;
}


var G__23578 = seq__22605_23493;
var G__23579 = chunk__22606_23494;
var G__23580 = count__22607_23495;
var G__23581 = (i__22608_23496 + (1));
seq__22605_23493 = G__23578;
chunk__22606_23494 = G__23579;
count__22607_23495 = G__23580;
i__22608_23496 = G__23581;
continue;
} else {
var temp__5735__auto___23582 = cljs.core.seq(seq__22605_23493);
if(temp__5735__auto___23582){
var seq__22605_23583__$1 = temp__5735__auto___23582;
if(cljs.core.chunked_seq_QMARK_(seq__22605_23583__$1)){
var c__4556__auto___23584 = cljs.core.chunk_first(seq__22605_23583__$1);
var G__23585 = cljs.core.chunk_rest(seq__22605_23583__$1);
var G__23586 = c__4556__auto___23584;
var G__23587 = cljs.core.count(c__4556__auto___23584);
var G__23588 = (0);
seq__22605_23493 = G__23585;
chunk__22606_23494 = G__23586;
count__22607_23495 = G__23587;
i__22608_23496 = G__23588;
continue;
} else {
var vec__22905_23589 = cljs.core.first(seq__22605_23583__$1);
var source_idx_23590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22905_23589,(0),null);
var vec__22908_23591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22905_23589,(1),null);
var __23592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22908_23591,(0),null);
var lines_23593__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22908_23591,(1),null);
var seq__22911_23594 = cljs.core.seq(lines_23593__$1);
var chunk__22912_23595 = null;
var count__22913_23596 = (0);
var i__22914_23597 = (0);
while(true){
if((i__22914_23597 < count__22913_23596)){
var vec__22953_23598 = chunk__22912_23595.cljs$core$IIndexed$_nth$arity$2(null,i__22914_23597);
var line_23599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22953_23598,(0),null);
var cols_23600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22953_23598,(1),null);
var seq__22956_23601 = cljs.core.seq(cols_23600);
var chunk__22957_23602 = null;
var count__22958_23603 = (0);
var i__22959_23604 = (0);
while(true){
if((i__22959_23604 < count__22958_23603)){
var vec__22966_23605 = chunk__22957_23602.cljs$core$IIndexed$_nth$arity$2(null,i__22959_23604);
var col_23606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22966_23605,(0),null);
var infos_23607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22966_23605,(1),null);
encode_cols(infos_23607,source_idx_23590,line_23599,col_23606);


var G__23608 = seq__22956_23601;
var G__23609 = chunk__22957_23602;
var G__23610 = count__22958_23603;
var G__23611 = (i__22959_23604 + (1));
seq__22956_23601 = G__23608;
chunk__22957_23602 = G__23609;
count__22958_23603 = G__23610;
i__22959_23604 = G__23611;
continue;
} else {
var temp__5735__auto___23612__$1 = cljs.core.seq(seq__22956_23601);
if(temp__5735__auto___23612__$1){
var seq__22956_23613__$1 = temp__5735__auto___23612__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22956_23613__$1)){
var c__4556__auto___23614 = cljs.core.chunk_first(seq__22956_23613__$1);
var G__23615 = cljs.core.chunk_rest(seq__22956_23613__$1);
var G__23616 = c__4556__auto___23614;
var G__23617 = cljs.core.count(c__4556__auto___23614);
var G__23618 = (0);
seq__22956_23601 = G__23615;
chunk__22957_23602 = G__23616;
count__22958_23603 = G__23617;
i__22959_23604 = G__23618;
continue;
} else {
var vec__22969_23619 = cljs.core.first(seq__22956_23613__$1);
var col_23620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22969_23619,(0),null);
var infos_23621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22969_23619,(1),null);
encode_cols(infos_23621,source_idx_23590,line_23599,col_23620);


var G__23622 = cljs.core.next(seq__22956_23613__$1);
var G__23623 = null;
var G__23624 = (0);
var G__23625 = (0);
seq__22956_23601 = G__23622;
chunk__22957_23602 = G__23623;
count__22958_23603 = G__23624;
i__22959_23604 = G__23625;
continue;
}
} else {
}
}
break;
}


var G__23626 = seq__22911_23594;
var G__23627 = chunk__22912_23595;
var G__23628 = count__22913_23596;
var G__23629 = (i__22914_23597 + (1));
seq__22911_23594 = G__23626;
chunk__22912_23595 = G__23627;
count__22913_23596 = G__23628;
i__22914_23597 = G__23629;
continue;
} else {
var temp__5735__auto___23630__$1 = cljs.core.seq(seq__22911_23594);
if(temp__5735__auto___23630__$1){
var seq__22911_23631__$1 = temp__5735__auto___23630__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22911_23631__$1)){
var c__4556__auto___23632 = cljs.core.chunk_first(seq__22911_23631__$1);
var G__23633 = cljs.core.chunk_rest(seq__22911_23631__$1);
var G__23634 = c__4556__auto___23632;
var G__23635 = cljs.core.count(c__4556__auto___23632);
var G__23636 = (0);
seq__22911_23594 = G__23633;
chunk__22912_23595 = G__23634;
count__22913_23596 = G__23635;
i__22914_23597 = G__23636;
continue;
} else {
var vec__22972_23637 = cljs.core.first(seq__22911_23631__$1);
var line_23638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22972_23637,(0),null);
var cols_23639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22972_23637,(1),null);
var seq__22975_23640 = cljs.core.seq(cols_23639);
var chunk__22976_23641 = null;
var count__22977_23642 = (0);
var i__22978_23643 = (0);
while(true){
if((i__22978_23643 < count__22977_23642)){
var vec__22990_23644 = chunk__22976_23641.cljs$core$IIndexed$_nth$arity$2(null,i__22978_23643);
var col_23645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22990_23644,(0),null);
var infos_23646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22990_23644,(1),null);
encode_cols(infos_23646,source_idx_23590,line_23638,col_23645);


var G__23647 = seq__22975_23640;
var G__23648 = chunk__22976_23641;
var G__23649 = count__22977_23642;
var G__23650 = (i__22978_23643 + (1));
seq__22975_23640 = G__23647;
chunk__22976_23641 = G__23648;
count__22977_23642 = G__23649;
i__22978_23643 = G__23650;
continue;
} else {
var temp__5735__auto___23651__$2 = cljs.core.seq(seq__22975_23640);
if(temp__5735__auto___23651__$2){
var seq__22975_23652__$1 = temp__5735__auto___23651__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22975_23652__$1)){
var c__4556__auto___23653 = cljs.core.chunk_first(seq__22975_23652__$1);
var G__23654 = cljs.core.chunk_rest(seq__22975_23652__$1);
var G__23655 = c__4556__auto___23653;
var G__23656 = cljs.core.count(c__4556__auto___23653);
var G__23657 = (0);
seq__22975_23640 = G__23654;
chunk__22976_23641 = G__23655;
count__22977_23642 = G__23656;
i__22978_23643 = G__23657;
continue;
} else {
var vec__22993_23658 = cljs.core.first(seq__22975_23652__$1);
var col_23659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22993_23658,(0),null);
var infos_23660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22993_23658,(1),null);
encode_cols(infos_23660,source_idx_23590,line_23638,col_23659);


var G__23661 = cljs.core.next(seq__22975_23652__$1);
var G__23662 = null;
var G__23663 = (0);
var G__23664 = (0);
seq__22975_23640 = G__23661;
chunk__22976_23641 = G__23662;
count__22977_23642 = G__23663;
i__22978_23643 = G__23664;
continue;
}
} else {
}
}
break;
}


var G__23665 = cljs.core.next(seq__22911_23631__$1);
var G__23666 = null;
var G__23667 = (0);
var G__23668 = (0);
seq__22911_23594 = G__23665;
chunk__22912_23595 = G__23666;
count__22913_23596 = G__23667;
i__22914_23597 = G__23668;
continue;
}
} else {
}
}
break;
}


var G__23669 = cljs.core.next(seq__22605_23583__$1);
var G__23670 = null;
var G__23671 = (0);
var G__23672 = (0);
seq__22605_23493 = G__23669;
chunk__22606_23494 = G__23670;
count__22607_23495 = G__23671;
i__22608_23496 = G__23672;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__22996 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__22579_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22579_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__22580_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__22580_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22581_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__22581_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__22997 = G__22996;
goog.object.set(G__22997,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__22997;
} else {
return G__22996;
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
var vec__22998 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22998,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22998,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__23001 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23001,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23001,(1),null);
var G__23685 = cljs.core.next(col_map_seq);
var G__23686 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__23001,col,infos,vec__22998,line,col_map){
return (function (v,p__23004){
var map__23005 = p__23004;
var map__23005__$1 = (((((!((map__23005 == null))))?(((((map__23005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23005):map__23005);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23005__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23005__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__23001,col,infos,vec__22998,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__23685;
new_cols = G__23686;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__23687 = cljs.core.next(line_map_seq);
var G__23688 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__23687;
new_lines = G__23688;
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
var seq__23007_23689 = cljs.core.seq(reverse_map);
var chunk__23008_23690 = null;
var count__23009_23691 = (0);
var i__23010_23692 = (0);
while(true){
if((i__23010_23692 < count__23009_23691)){
var vec__23179_23693 = chunk__23008_23690.cljs$core$IIndexed$_nth$arity$2(null,i__23010_23692);
var line_23694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23179_23693,(0),null);
var columns_23695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23179_23693,(1),null);
var seq__23182_23696 = cljs.core.seq(columns_23695);
var chunk__23183_23697 = null;
var count__23184_23698 = (0);
var i__23185_23699 = (0);
while(true){
if((i__23185_23699 < count__23184_23698)){
var vec__23225_23700 = chunk__23183_23697.cljs$core$IIndexed$_nth$arity$2(null,i__23185_23699);
var column_23701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23225_23700,(0),null);
var column_info_23702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23225_23700,(1),null);
var seq__23228_23703 = cljs.core.seq(column_info_23702);
var chunk__23229_23704 = null;
var count__23230_23705 = (0);
var i__23231_23706 = (0);
while(true){
if((i__23231_23706 < count__23230_23705)){
var map__23236_23707 = chunk__23229_23704.cljs$core$IIndexed$_nth$arity$2(null,i__23231_23706);
var map__23236_23708__$1 = (((((!((map__23236_23707 == null))))?(((((map__23236_23707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23236_23707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23236_23707):map__23236_23707);
var gline_23709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23236_23708__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23236_23708__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23236_23708__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23709], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23228_23703,chunk__23229_23704,count__23230_23705,i__23231_23706,seq__23182_23696,chunk__23183_23697,count__23184_23698,i__23185_23699,seq__23007_23689,chunk__23008_23690,count__23009_23691,i__23010_23692,map__23236_23707,map__23236_23708__$1,gline_23709,gcol_23710,name_23711,vec__23225_23700,column_23701,column_info_23702,vec__23179_23693,line_23694,columns_23695,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23710], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23694,new cljs.core.Keyword(null,"col","col",-1959363084),column_23701,new cljs.core.Keyword(null,"name","name",1843675177),name_23711], null));
});})(seq__23228_23703,chunk__23229_23704,count__23230_23705,i__23231_23706,seq__23182_23696,chunk__23183_23697,count__23184_23698,i__23185_23699,seq__23007_23689,chunk__23008_23690,count__23009_23691,i__23010_23692,map__23236_23707,map__23236_23708__$1,gline_23709,gcol_23710,name_23711,vec__23225_23700,column_23701,column_info_23702,vec__23179_23693,line_23694,columns_23695,inverted))
,cljs.core.sorted_map()));


var G__23712 = seq__23228_23703;
var G__23713 = chunk__23229_23704;
var G__23714 = count__23230_23705;
var G__23715 = (i__23231_23706 + (1));
seq__23228_23703 = G__23712;
chunk__23229_23704 = G__23713;
count__23230_23705 = G__23714;
i__23231_23706 = G__23715;
continue;
} else {
var temp__5735__auto___23716 = cljs.core.seq(seq__23228_23703);
if(temp__5735__auto___23716){
var seq__23228_23717__$1 = temp__5735__auto___23716;
if(cljs.core.chunked_seq_QMARK_(seq__23228_23717__$1)){
var c__4556__auto___23718 = cljs.core.chunk_first(seq__23228_23717__$1);
var G__23719 = cljs.core.chunk_rest(seq__23228_23717__$1);
var G__23720 = c__4556__auto___23718;
var G__23721 = cljs.core.count(c__4556__auto___23718);
var G__23722 = (0);
seq__23228_23703 = G__23719;
chunk__23229_23704 = G__23720;
count__23230_23705 = G__23721;
i__23231_23706 = G__23722;
continue;
} else {
var map__23238_23723 = cljs.core.first(seq__23228_23717__$1);
var map__23238_23724__$1 = (((((!((map__23238_23723 == null))))?(((((map__23238_23723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23238_23723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23238_23723):map__23238_23723);
var gline_23725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23238_23724__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23238_23724__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23238_23724__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23725], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23228_23703,chunk__23229_23704,count__23230_23705,i__23231_23706,seq__23182_23696,chunk__23183_23697,count__23184_23698,i__23185_23699,seq__23007_23689,chunk__23008_23690,count__23009_23691,i__23010_23692,map__23238_23723,map__23238_23724__$1,gline_23725,gcol_23726,name_23727,seq__23228_23717__$1,temp__5735__auto___23716,vec__23225_23700,column_23701,column_info_23702,vec__23179_23693,line_23694,columns_23695,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23726], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23694,new cljs.core.Keyword(null,"col","col",-1959363084),column_23701,new cljs.core.Keyword(null,"name","name",1843675177),name_23727], null));
});})(seq__23228_23703,chunk__23229_23704,count__23230_23705,i__23231_23706,seq__23182_23696,chunk__23183_23697,count__23184_23698,i__23185_23699,seq__23007_23689,chunk__23008_23690,count__23009_23691,i__23010_23692,map__23238_23723,map__23238_23724__$1,gline_23725,gcol_23726,name_23727,seq__23228_23717__$1,temp__5735__auto___23716,vec__23225_23700,column_23701,column_info_23702,vec__23179_23693,line_23694,columns_23695,inverted))
,cljs.core.sorted_map()));


var G__23740 = cljs.core.next(seq__23228_23717__$1);
var G__23741 = null;
var G__23742 = (0);
var G__23743 = (0);
seq__23228_23703 = G__23740;
chunk__23229_23704 = G__23741;
count__23230_23705 = G__23742;
i__23231_23706 = G__23743;
continue;
}
} else {
}
}
break;
}


var G__23744 = seq__23182_23696;
var G__23745 = chunk__23183_23697;
var G__23746 = count__23184_23698;
var G__23747 = (i__23185_23699 + (1));
seq__23182_23696 = G__23744;
chunk__23183_23697 = G__23745;
count__23184_23698 = G__23746;
i__23185_23699 = G__23747;
continue;
} else {
var temp__5735__auto___23748 = cljs.core.seq(seq__23182_23696);
if(temp__5735__auto___23748){
var seq__23182_23749__$1 = temp__5735__auto___23748;
if(cljs.core.chunked_seq_QMARK_(seq__23182_23749__$1)){
var c__4556__auto___23750 = cljs.core.chunk_first(seq__23182_23749__$1);
var G__23751 = cljs.core.chunk_rest(seq__23182_23749__$1);
var G__23752 = c__4556__auto___23750;
var G__23753 = cljs.core.count(c__4556__auto___23750);
var G__23754 = (0);
seq__23182_23696 = G__23751;
chunk__23183_23697 = G__23752;
count__23184_23698 = G__23753;
i__23185_23699 = G__23754;
continue;
} else {
var vec__23248_23755 = cljs.core.first(seq__23182_23749__$1);
var column_23756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23248_23755,(0),null);
var column_info_23757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23248_23755,(1),null);
var seq__23251_23758 = cljs.core.seq(column_info_23757);
var chunk__23252_23759 = null;
var count__23253_23760 = (0);
var i__23254_23761 = (0);
while(true){
if((i__23254_23761 < count__23253_23760)){
var map__23259_23762 = chunk__23252_23759.cljs$core$IIndexed$_nth$arity$2(null,i__23254_23761);
var map__23259_23763__$1 = (((((!((map__23259_23762 == null))))?(((((map__23259_23762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23259_23762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23259_23762):map__23259_23762);
var gline_23764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23259_23763__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23259_23763__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23259_23763__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23764], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23251_23758,chunk__23252_23759,count__23253_23760,i__23254_23761,seq__23182_23696,chunk__23183_23697,count__23184_23698,i__23185_23699,seq__23007_23689,chunk__23008_23690,count__23009_23691,i__23010_23692,map__23259_23762,map__23259_23763__$1,gline_23764,gcol_23765,name_23766,vec__23248_23755,column_23756,column_info_23757,seq__23182_23749__$1,temp__5735__auto___23748,vec__23179_23693,line_23694,columns_23695,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23765], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23694,new cljs.core.Keyword(null,"col","col",-1959363084),column_23756,new cljs.core.Keyword(null,"name","name",1843675177),name_23766], null));
});})(seq__23251_23758,chunk__23252_23759,count__23253_23760,i__23254_23761,seq__23182_23696,chunk__23183_23697,count__23184_23698,i__23185_23699,seq__23007_23689,chunk__23008_23690,count__23009_23691,i__23010_23692,map__23259_23762,map__23259_23763__$1,gline_23764,gcol_23765,name_23766,vec__23248_23755,column_23756,column_info_23757,seq__23182_23749__$1,temp__5735__auto___23748,vec__23179_23693,line_23694,columns_23695,inverted))
,cljs.core.sorted_map()));


var G__23767 = seq__23251_23758;
var G__23768 = chunk__23252_23759;
var G__23769 = count__23253_23760;
var G__23770 = (i__23254_23761 + (1));
seq__23251_23758 = G__23767;
chunk__23252_23759 = G__23768;
count__23253_23760 = G__23769;
i__23254_23761 = G__23770;
continue;
} else {
var temp__5735__auto___23771__$1 = cljs.core.seq(seq__23251_23758);
if(temp__5735__auto___23771__$1){
var seq__23251_23772__$1 = temp__5735__auto___23771__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23251_23772__$1)){
var c__4556__auto___23773 = cljs.core.chunk_first(seq__23251_23772__$1);
var G__23774 = cljs.core.chunk_rest(seq__23251_23772__$1);
var G__23775 = c__4556__auto___23773;
var G__23776 = cljs.core.count(c__4556__auto___23773);
var G__23777 = (0);
seq__23251_23758 = G__23774;
chunk__23252_23759 = G__23775;
count__23253_23760 = G__23776;
i__23254_23761 = G__23777;
continue;
} else {
var map__23261_23778 = cljs.core.first(seq__23251_23772__$1);
var map__23261_23779__$1 = (((((!((map__23261_23778 == null))))?(((((map__23261_23778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23261_23778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23261_23778):map__23261_23778);
var gline_23780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23261_23779__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23261_23779__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23261_23779__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23780], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23251_23758,chunk__23252_23759,count__23253_23760,i__23254_23761,seq__23182_23696,chunk__23183_23697,count__23184_23698,i__23185_23699,seq__23007_23689,chunk__23008_23690,count__23009_23691,i__23010_23692,map__23261_23778,map__23261_23779__$1,gline_23780,gcol_23781,name_23782,seq__23251_23772__$1,temp__5735__auto___23771__$1,vec__23248_23755,column_23756,column_info_23757,seq__23182_23749__$1,temp__5735__auto___23748,vec__23179_23693,line_23694,columns_23695,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23781], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23694,new cljs.core.Keyword(null,"col","col",-1959363084),column_23756,new cljs.core.Keyword(null,"name","name",1843675177),name_23782], null));
});})(seq__23251_23758,chunk__23252_23759,count__23253_23760,i__23254_23761,seq__23182_23696,chunk__23183_23697,count__23184_23698,i__23185_23699,seq__23007_23689,chunk__23008_23690,count__23009_23691,i__23010_23692,map__23261_23778,map__23261_23779__$1,gline_23780,gcol_23781,name_23782,seq__23251_23772__$1,temp__5735__auto___23771__$1,vec__23248_23755,column_23756,column_info_23757,seq__23182_23749__$1,temp__5735__auto___23748,vec__23179_23693,line_23694,columns_23695,inverted))
,cljs.core.sorted_map()));


var G__23783 = cljs.core.next(seq__23251_23772__$1);
var G__23784 = null;
var G__23785 = (0);
var G__23786 = (0);
seq__23251_23758 = G__23783;
chunk__23252_23759 = G__23784;
count__23253_23760 = G__23785;
i__23254_23761 = G__23786;
continue;
}
} else {
}
}
break;
}


var G__23787 = cljs.core.next(seq__23182_23749__$1);
var G__23788 = null;
var G__23789 = (0);
var G__23790 = (0);
seq__23182_23696 = G__23787;
chunk__23183_23697 = G__23788;
count__23184_23698 = G__23789;
i__23185_23699 = G__23790;
continue;
}
} else {
}
}
break;
}


var G__23791 = seq__23007_23689;
var G__23792 = chunk__23008_23690;
var G__23793 = count__23009_23691;
var G__23794 = (i__23010_23692 + (1));
seq__23007_23689 = G__23791;
chunk__23008_23690 = G__23792;
count__23009_23691 = G__23793;
i__23010_23692 = G__23794;
continue;
} else {
var temp__5735__auto___23795 = cljs.core.seq(seq__23007_23689);
if(temp__5735__auto___23795){
var seq__23007_23796__$1 = temp__5735__auto___23795;
if(cljs.core.chunked_seq_QMARK_(seq__23007_23796__$1)){
var c__4556__auto___23797 = cljs.core.chunk_first(seq__23007_23796__$1);
var G__23798 = cljs.core.chunk_rest(seq__23007_23796__$1);
var G__23799 = c__4556__auto___23797;
var G__23800 = cljs.core.count(c__4556__auto___23797);
var G__23801 = (0);
seq__23007_23689 = G__23798;
chunk__23008_23690 = G__23799;
count__23009_23691 = G__23800;
i__23010_23692 = G__23801;
continue;
} else {
var vec__23276_23802 = cljs.core.first(seq__23007_23796__$1);
var line_23803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23276_23802,(0),null);
var columns_23804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23276_23802,(1),null);
var seq__23279_23805 = cljs.core.seq(columns_23804);
var chunk__23280_23806 = null;
var count__23281_23807 = (0);
var i__23282_23808 = (0);
while(true){
if((i__23282_23808 < count__23281_23807)){
var vec__23322_23809 = chunk__23280_23806.cljs$core$IIndexed$_nth$arity$2(null,i__23282_23808);
var column_23810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23322_23809,(0),null);
var column_info_23811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23322_23809,(1),null);
var seq__23325_23812 = cljs.core.seq(column_info_23811);
var chunk__23326_23813 = null;
var count__23327_23814 = (0);
var i__23328_23815 = (0);
while(true){
if((i__23328_23815 < count__23327_23814)){
var map__23333_23816 = chunk__23326_23813.cljs$core$IIndexed$_nth$arity$2(null,i__23328_23815);
var map__23333_23817__$1 = (((((!((map__23333_23816 == null))))?(((((map__23333_23816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23333_23816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23333_23816):map__23333_23816);
var gline_23818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23333_23817__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23333_23817__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23333_23817__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23818], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23325_23812,chunk__23326_23813,count__23327_23814,i__23328_23815,seq__23279_23805,chunk__23280_23806,count__23281_23807,i__23282_23808,seq__23007_23689,chunk__23008_23690,count__23009_23691,i__23010_23692,map__23333_23816,map__23333_23817__$1,gline_23818,gcol_23819,name_23820,vec__23322_23809,column_23810,column_info_23811,vec__23276_23802,line_23803,columns_23804,seq__23007_23796__$1,temp__5735__auto___23795,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23819], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23803,new cljs.core.Keyword(null,"col","col",-1959363084),column_23810,new cljs.core.Keyword(null,"name","name",1843675177),name_23820], null));
});})(seq__23325_23812,chunk__23326_23813,count__23327_23814,i__23328_23815,seq__23279_23805,chunk__23280_23806,count__23281_23807,i__23282_23808,seq__23007_23689,chunk__23008_23690,count__23009_23691,i__23010_23692,map__23333_23816,map__23333_23817__$1,gline_23818,gcol_23819,name_23820,vec__23322_23809,column_23810,column_info_23811,vec__23276_23802,line_23803,columns_23804,seq__23007_23796__$1,temp__5735__auto___23795,inverted))
,cljs.core.sorted_map()));


var G__23826 = seq__23325_23812;
var G__23827 = chunk__23326_23813;
var G__23828 = count__23327_23814;
var G__23829 = (i__23328_23815 + (1));
seq__23325_23812 = G__23826;
chunk__23326_23813 = G__23827;
count__23327_23814 = G__23828;
i__23328_23815 = G__23829;
continue;
} else {
var temp__5735__auto___23830__$1 = cljs.core.seq(seq__23325_23812);
if(temp__5735__auto___23830__$1){
var seq__23325_23831__$1 = temp__5735__auto___23830__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23325_23831__$1)){
var c__4556__auto___23832 = cljs.core.chunk_first(seq__23325_23831__$1);
var G__23833 = cljs.core.chunk_rest(seq__23325_23831__$1);
var G__23834 = c__4556__auto___23832;
var G__23835 = cljs.core.count(c__4556__auto___23832);
var G__23836 = (0);
seq__23325_23812 = G__23833;
chunk__23326_23813 = G__23834;
count__23327_23814 = G__23835;
i__23328_23815 = G__23836;
continue;
} else {
var map__23344_23837 = cljs.core.first(seq__23325_23831__$1);
var map__23344_23838__$1 = (((((!((map__23344_23837 == null))))?(((((map__23344_23837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23344_23837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23344_23837):map__23344_23837);
var gline_23839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23344_23838__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23344_23838__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23344_23838__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23839], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23325_23812,chunk__23326_23813,count__23327_23814,i__23328_23815,seq__23279_23805,chunk__23280_23806,count__23281_23807,i__23282_23808,seq__23007_23689,chunk__23008_23690,count__23009_23691,i__23010_23692,map__23344_23837,map__23344_23838__$1,gline_23839,gcol_23840,name_23841,seq__23325_23831__$1,temp__5735__auto___23830__$1,vec__23322_23809,column_23810,column_info_23811,vec__23276_23802,line_23803,columns_23804,seq__23007_23796__$1,temp__5735__auto___23795,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23840], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23803,new cljs.core.Keyword(null,"col","col",-1959363084),column_23810,new cljs.core.Keyword(null,"name","name",1843675177),name_23841], null));
});})(seq__23325_23812,chunk__23326_23813,count__23327_23814,i__23328_23815,seq__23279_23805,chunk__23280_23806,count__23281_23807,i__23282_23808,seq__23007_23689,chunk__23008_23690,count__23009_23691,i__23010_23692,map__23344_23837,map__23344_23838__$1,gline_23839,gcol_23840,name_23841,seq__23325_23831__$1,temp__5735__auto___23830__$1,vec__23322_23809,column_23810,column_info_23811,vec__23276_23802,line_23803,columns_23804,seq__23007_23796__$1,temp__5735__auto___23795,inverted))
,cljs.core.sorted_map()));


var G__23856 = cljs.core.next(seq__23325_23831__$1);
var G__23857 = null;
var G__23858 = (0);
var G__23859 = (0);
seq__23325_23812 = G__23856;
chunk__23326_23813 = G__23857;
count__23327_23814 = G__23858;
i__23328_23815 = G__23859;
continue;
}
} else {
}
}
break;
}


var G__23860 = seq__23279_23805;
var G__23861 = chunk__23280_23806;
var G__23862 = count__23281_23807;
var G__23863 = (i__23282_23808 + (1));
seq__23279_23805 = G__23860;
chunk__23280_23806 = G__23861;
count__23281_23807 = G__23862;
i__23282_23808 = G__23863;
continue;
} else {
var temp__5735__auto___23864__$1 = cljs.core.seq(seq__23279_23805);
if(temp__5735__auto___23864__$1){
var seq__23279_23865__$1 = temp__5735__auto___23864__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23279_23865__$1)){
var c__4556__auto___23866 = cljs.core.chunk_first(seq__23279_23865__$1);
var G__23867 = cljs.core.chunk_rest(seq__23279_23865__$1);
var G__23868 = c__4556__auto___23866;
var G__23869 = cljs.core.count(c__4556__auto___23866);
var G__23870 = (0);
seq__23279_23805 = G__23867;
chunk__23280_23806 = G__23868;
count__23281_23807 = G__23869;
i__23282_23808 = G__23870;
continue;
} else {
var vec__23346_23871 = cljs.core.first(seq__23279_23865__$1);
var column_23872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23346_23871,(0),null);
var column_info_23873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23346_23871,(1),null);
var seq__23349_23874 = cljs.core.seq(column_info_23873);
var chunk__23350_23875 = null;
var count__23351_23876 = (0);
var i__23352_23877 = (0);
while(true){
if((i__23352_23877 < count__23351_23876)){
var map__23367_23878 = chunk__23350_23875.cljs$core$IIndexed$_nth$arity$2(null,i__23352_23877);
var map__23367_23879__$1 = (((((!((map__23367_23878 == null))))?(((((map__23367_23878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23367_23878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23367_23878):map__23367_23878);
var gline_23880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23367_23879__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23367_23879__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23367_23879__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23880], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23349_23874,chunk__23350_23875,count__23351_23876,i__23352_23877,seq__23279_23805,chunk__23280_23806,count__23281_23807,i__23282_23808,seq__23007_23689,chunk__23008_23690,count__23009_23691,i__23010_23692,map__23367_23878,map__23367_23879__$1,gline_23880,gcol_23881,name_23882,vec__23346_23871,column_23872,column_info_23873,seq__23279_23865__$1,temp__5735__auto___23864__$1,vec__23276_23802,line_23803,columns_23804,seq__23007_23796__$1,temp__5735__auto___23795,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23881], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23803,new cljs.core.Keyword(null,"col","col",-1959363084),column_23872,new cljs.core.Keyword(null,"name","name",1843675177),name_23882], null));
});})(seq__23349_23874,chunk__23350_23875,count__23351_23876,i__23352_23877,seq__23279_23805,chunk__23280_23806,count__23281_23807,i__23282_23808,seq__23007_23689,chunk__23008_23690,count__23009_23691,i__23010_23692,map__23367_23878,map__23367_23879__$1,gline_23880,gcol_23881,name_23882,vec__23346_23871,column_23872,column_info_23873,seq__23279_23865__$1,temp__5735__auto___23864__$1,vec__23276_23802,line_23803,columns_23804,seq__23007_23796__$1,temp__5735__auto___23795,inverted))
,cljs.core.sorted_map()));


var G__23883 = seq__23349_23874;
var G__23884 = chunk__23350_23875;
var G__23885 = count__23351_23876;
var G__23886 = (i__23352_23877 + (1));
seq__23349_23874 = G__23883;
chunk__23350_23875 = G__23884;
count__23351_23876 = G__23885;
i__23352_23877 = G__23886;
continue;
} else {
var temp__5735__auto___23887__$2 = cljs.core.seq(seq__23349_23874);
if(temp__5735__auto___23887__$2){
var seq__23349_23888__$1 = temp__5735__auto___23887__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23349_23888__$1)){
var c__4556__auto___23889 = cljs.core.chunk_first(seq__23349_23888__$1);
var G__23890 = cljs.core.chunk_rest(seq__23349_23888__$1);
var G__23891 = c__4556__auto___23889;
var G__23892 = cljs.core.count(c__4556__auto___23889);
var G__23893 = (0);
seq__23349_23874 = G__23890;
chunk__23350_23875 = G__23891;
count__23351_23876 = G__23892;
i__23352_23877 = G__23893;
continue;
} else {
var map__23369_23894 = cljs.core.first(seq__23349_23888__$1);
var map__23369_23895__$1 = (((((!((map__23369_23894 == null))))?(((((map__23369_23894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23369_23894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23369_23894):map__23369_23894);
var gline_23896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23369_23895__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23369_23895__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23369_23895__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23896], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23349_23874,chunk__23350_23875,count__23351_23876,i__23352_23877,seq__23279_23805,chunk__23280_23806,count__23281_23807,i__23282_23808,seq__23007_23689,chunk__23008_23690,count__23009_23691,i__23010_23692,map__23369_23894,map__23369_23895__$1,gline_23896,gcol_23897,name_23898,seq__23349_23888__$1,temp__5735__auto___23887__$2,vec__23346_23871,column_23872,column_info_23873,seq__23279_23865__$1,temp__5735__auto___23864__$1,vec__23276_23802,line_23803,columns_23804,seq__23007_23796__$1,temp__5735__auto___23795,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23897], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23803,new cljs.core.Keyword(null,"col","col",-1959363084),column_23872,new cljs.core.Keyword(null,"name","name",1843675177),name_23898], null));
});})(seq__23349_23874,chunk__23350_23875,count__23351_23876,i__23352_23877,seq__23279_23805,chunk__23280_23806,count__23281_23807,i__23282_23808,seq__23007_23689,chunk__23008_23690,count__23009_23691,i__23010_23692,map__23369_23894,map__23369_23895__$1,gline_23896,gcol_23897,name_23898,seq__23349_23888__$1,temp__5735__auto___23887__$2,vec__23346_23871,column_23872,column_info_23873,seq__23279_23865__$1,temp__5735__auto___23864__$1,vec__23276_23802,line_23803,columns_23804,seq__23007_23796__$1,temp__5735__auto___23795,inverted))
,cljs.core.sorted_map()));


var G__23899 = cljs.core.next(seq__23349_23888__$1);
var G__23900 = null;
var G__23901 = (0);
var G__23902 = (0);
seq__23349_23874 = G__23899;
chunk__23350_23875 = G__23900;
count__23351_23876 = G__23901;
i__23352_23877 = G__23902;
continue;
}
} else {
}
}
break;
}


var G__23903 = cljs.core.next(seq__23279_23865__$1);
var G__23904 = null;
var G__23905 = (0);
var G__23906 = (0);
seq__23279_23805 = G__23903;
chunk__23280_23806 = G__23904;
count__23281_23807 = G__23905;
i__23282_23808 = G__23906;
continue;
}
} else {
}
}
break;
}


var G__23907 = cljs.core.next(seq__23007_23796__$1);
var G__23908 = null;
var G__23909 = (0);
var G__23910 = (0);
seq__23007_23689 = G__23907;
chunk__23008_23690 = G__23908;
count__23009_23691 = G__23909;
i__23010_23692 = G__23910;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
