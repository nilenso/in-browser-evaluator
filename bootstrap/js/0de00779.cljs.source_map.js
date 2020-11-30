goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__22493){
var vec__22494 = p__22493;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22494,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22494,(1),null);
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
var vec__22497 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22497,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22497,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22497,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22497,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22497,(4),null);
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
var vec__22500 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22500,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22500,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22500,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22500,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22500,(4),null);
var vec__22503 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22503,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22503,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22503,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22503,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22503,(4),null);
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
var map__22509 = segmap;
var map__22509__$1 = (((((!((map__22509 == null))))?(((((map__22509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22509):map__22509);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22509__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22509__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22509__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22509__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22509__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__22513 = arguments.length;
switch (G__22513) {
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
var G__23499 = cljs.core.next(segs__$1);
var G__23500 = nrelseg;
var G__23501 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23499;
relseg__$1 = G__23500;
result__$1 = G__23501;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22523,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22523,(1),null);
var G__23502 = (gline + (1));
var G__23503 = cljs.core.next(lines__$1);
var G__23504 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23505 = result__$1;
gline = G__23502;
lines__$1 = G__23503;
relseg = G__23504;
result = G__23505;
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
var G__22530 = arguments.length;
switch (G__22530) {
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
var vec__22534 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__23512 = cljs.core.next(segs__$1);
var G__23513 = nrelseg;
var G__23514 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23512;
relseg__$1 = G__23513;
result__$1 = G__23514;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22534,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22534,(1),null);
var G__23515 = (gline + (1));
var G__23516 = cljs.core.next(lines__$1);
var G__23517 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23518 = result__$1;
gline = G__23515;
lines__$1 = G__23516;
relseg = G__23517;
result = G__23518;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__22537){
var vec__22538 = p__22537;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22538,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22538,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22538,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22538,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22538,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__22541){
var vec__22542 = p__22541;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22542,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22542,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22542,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22542,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22542,(4),null);
var seg = vec__22542;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__22545){
var vec__22546 = p__22545;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22546,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22546,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22546,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22546,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22546,(4),null);
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
var seq__22552 = cljs.core.seq(infos);
var chunk__22553 = null;
var count__22554 = (0);
var i__22555 = (0);
while(true){
if((i__22555 < count__22554)){
var info = chunk__22553.cljs$core$IIndexed$_nth$arity$2(null,i__22555);
var segv_23556 = info__GT_segv(info,source_idx,line,col);
var gline_23557 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23558 = cljs.core.count(cljs.core.deref(lines));
if((gline_23557 > (lc_23558 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22552,chunk__22553,count__22554,i__22555,segv_23556,gline_23557,lc_23558,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23557 - (lc_23558 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23556], null));
});})(seq__22552,chunk__22553,count__22554,i__22555,segv_23556,gline_23557,lc_23558,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22552,chunk__22553,count__22554,i__22555,segv_23556,gline_23557,lc_23558,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23557], null),cljs.core.conj,segv_23556);
});})(seq__22552,chunk__22553,count__22554,i__22555,segv_23556,gline_23557,lc_23558,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23563 = seq__22552;
var G__23564 = chunk__22553;
var G__23565 = count__22554;
var G__23566 = (i__22555 + (1));
seq__22552 = G__23563;
chunk__22553 = G__23564;
count__22554 = G__23565;
i__22555 = G__23566;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__22552);
if(temp__5735__auto__){
var seq__22552__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22552__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__22552__$1);
var G__23567 = cljs.core.chunk_rest(seq__22552__$1);
var G__23568 = c__4556__auto__;
var G__23569 = cljs.core.count(c__4556__auto__);
var G__23570 = (0);
seq__22552 = G__23567;
chunk__22553 = G__23568;
count__22554 = G__23569;
i__22555 = G__23570;
continue;
} else {
var info = cljs.core.first(seq__22552__$1);
var segv_23573 = info__GT_segv(info,source_idx,line,col);
var gline_23574 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23575 = cljs.core.count(cljs.core.deref(lines));
if((gline_23574 > (lc_23575 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22552,chunk__22553,count__22554,i__22555,segv_23573,gline_23574,lc_23575,info,seq__22552__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23574 - (lc_23575 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23573], null));
});})(seq__22552,chunk__22553,count__22554,i__22555,segv_23573,gline_23574,lc_23575,info,seq__22552__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22552,chunk__22553,count__22554,i__22555,segv_23573,gline_23574,lc_23575,info,seq__22552__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23574], null),cljs.core.conj,segv_23573);
});})(seq__22552,chunk__22553,count__22554,i__22555,segv_23573,gline_23574,lc_23575,info,seq__22552__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23578 = cljs.core.next(seq__22552__$1);
var G__23579 = null;
var G__23580 = (0);
var G__23581 = (0);
seq__22552 = G__23578;
chunk__22553 = G__23579;
count__22554 = G__23580;
i__22555 = G__23581;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__22556_23582 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__22557_23583 = null;
var count__22558_23584 = (0);
var i__22559_23585 = (0);
while(true){
if((i__22559_23585 < count__22558_23584)){
var vec__22789_23588 = chunk__22557_23583.cljs$core$IIndexed$_nth$arity$2(null,i__22559_23585);
var source_idx_23589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22789_23588,(0),null);
var vec__22792_23590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22789_23588,(1),null);
var __23591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22792_23590,(0),null);
var lines_23592__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22792_23590,(1),null);
var seq__22795_23593 = cljs.core.seq(lines_23592__$1);
var chunk__22796_23594 = null;
var count__22797_23595 = (0);
var i__22798_23596 = (0);
while(true){
if((i__22798_23596 < count__22797_23595)){
var vec__22851_23597 = chunk__22796_23594.cljs$core$IIndexed$_nth$arity$2(null,i__22798_23596);
var line_23598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22851_23597,(0),null);
var cols_23599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22851_23597,(1),null);
var seq__22854_23600 = cljs.core.seq(cols_23599);
var chunk__22855_23601 = null;
var count__22856_23602 = (0);
var i__22857_23603 = (0);
while(true){
if((i__22857_23603 < count__22856_23602)){
var vec__22866_23604 = chunk__22855_23601.cljs$core$IIndexed$_nth$arity$2(null,i__22857_23603);
var col_23605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22866_23604,(0),null);
var infos_23606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22866_23604,(1),null);
encode_cols(infos_23606,source_idx_23589,line_23598,col_23605);


var G__23607 = seq__22854_23600;
var G__23608 = chunk__22855_23601;
var G__23609 = count__22856_23602;
var G__23610 = (i__22857_23603 + (1));
seq__22854_23600 = G__23607;
chunk__22855_23601 = G__23608;
count__22856_23602 = G__23609;
i__22857_23603 = G__23610;
continue;
} else {
var temp__5735__auto___23611 = cljs.core.seq(seq__22854_23600);
if(temp__5735__auto___23611){
var seq__22854_23612__$1 = temp__5735__auto___23611;
if(cljs.core.chunked_seq_QMARK_(seq__22854_23612__$1)){
var c__4556__auto___23613 = cljs.core.chunk_first(seq__22854_23612__$1);
var G__23614 = cljs.core.chunk_rest(seq__22854_23612__$1);
var G__23615 = c__4556__auto___23613;
var G__23616 = cljs.core.count(c__4556__auto___23613);
var G__23617 = (0);
seq__22854_23600 = G__23614;
chunk__22855_23601 = G__23615;
count__22856_23602 = G__23616;
i__22857_23603 = G__23617;
continue;
} else {
var vec__22872_23618 = cljs.core.first(seq__22854_23612__$1);
var col_23619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22872_23618,(0),null);
var infos_23620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22872_23618,(1),null);
encode_cols(infos_23620,source_idx_23589,line_23598,col_23619);


var G__23622 = cljs.core.next(seq__22854_23612__$1);
var G__23623 = null;
var G__23624 = (0);
var G__23625 = (0);
seq__22854_23600 = G__23622;
chunk__22855_23601 = G__23623;
count__22856_23602 = G__23624;
i__22857_23603 = G__23625;
continue;
}
} else {
}
}
break;
}


var G__23626 = seq__22795_23593;
var G__23627 = chunk__22796_23594;
var G__23628 = count__22797_23595;
var G__23629 = (i__22798_23596 + (1));
seq__22795_23593 = G__23626;
chunk__22796_23594 = G__23627;
count__22797_23595 = G__23628;
i__22798_23596 = G__23629;
continue;
} else {
var temp__5735__auto___23630 = cljs.core.seq(seq__22795_23593);
if(temp__5735__auto___23630){
var seq__22795_23631__$1 = temp__5735__auto___23630;
if(cljs.core.chunked_seq_QMARK_(seq__22795_23631__$1)){
var c__4556__auto___23632 = cljs.core.chunk_first(seq__22795_23631__$1);
var G__23633 = cljs.core.chunk_rest(seq__22795_23631__$1);
var G__23634 = c__4556__auto___23632;
var G__23635 = cljs.core.count(c__4556__auto___23632);
var G__23636 = (0);
seq__22795_23593 = G__23633;
chunk__22796_23594 = G__23634;
count__22797_23595 = G__23635;
i__22798_23596 = G__23636;
continue;
} else {
var vec__22875_23637 = cljs.core.first(seq__22795_23631__$1);
var line_23638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22875_23637,(0),null);
var cols_23639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22875_23637,(1),null);
var seq__22878_23655 = cljs.core.seq(cols_23639);
var chunk__22879_23656 = null;
var count__22880_23657 = (0);
var i__22881_23658 = (0);
while(true){
if((i__22881_23658 < count__22880_23657)){
var vec__22892_23662 = chunk__22879_23656.cljs$core$IIndexed$_nth$arity$2(null,i__22881_23658);
var col_23663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22892_23662,(0),null);
var infos_23664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22892_23662,(1),null);
encode_cols(infos_23664,source_idx_23589,line_23638,col_23663);


var G__23665 = seq__22878_23655;
var G__23666 = chunk__22879_23656;
var G__23667 = count__22880_23657;
var G__23668 = (i__22881_23658 + (1));
seq__22878_23655 = G__23665;
chunk__22879_23656 = G__23666;
count__22880_23657 = G__23667;
i__22881_23658 = G__23668;
continue;
} else {
var temp__5735__auto___23669__$1 = cljs.core.seq(seq__22878_23655);
if(temp__5735__auto___23669__$1){
var seq__22878_23670__$1 = temp__5735__auto___23669__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22878_23670__$1)){
var c__4556__auto___23671 = cljs.core.chunk_first(seq__22878_23670__$1);
var G__23672 = cljs.core.chunk_rest(seq__22878_23670__$1);
var G__23673 = c__4556__auto___23671;
var G__23674 = cljs.core.count(c__4556__auto___23671);
var G__23675 = (0);
seq__22878_23655 = G__23672;
chunk__22879_23656 = G__23673;
count__22880_23657 = G__23674;
i__22881_23658 = G__23675;
continue;
} else {
var vec__22896_23679 = cljs.core.first(seq__22878_23670__$1);
var col_23680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22896_23679,(0),null);
var infos_23681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22896_23679,(1),null);
encode_cols(infos_23681,source_idx_23589,line_23638,col_23680);


var G__23682 = cljs.core.next(seq__22878_23670__$1);
var G__23683 = null;
var G__23684 = (0);
var G__23685 = (0);
seq__22878_23655 = G__23682;
chunk__22879_23656 = G__23683;
count__22880_23657 = G__23684;
i__22881_23658 = G__23685;
continue;
}
} else {
}
}
break;
}


var G__23686 = cljs.core.next(seq__22795_23631__$1);
var G__23687 = null;
var G__23688 = (0);
var G__23689 = (0);
seq__22795_23593 = G__23686;
chunk__22796_23594 = G__23687;
count__22797_23595 = G__23688;
i__22798_23596 = G__23689;
continue;
}
} else {
}
}
break;
}


var G__23691 = seq__22556_23582;
var G__23692 = chunk__22557_23583;
var G__23694 = count__22558_23584;
var G__23695 = (i__22559_23585 + (1));
seq__22556_23582 = G__23691;
chunk__22557_23583 = G__23692;
count__22558_23584 = G__23694;
i__22559_23585 = G__23695;
continue;
} else {
var temp__5735__auto___23698 = cljs.core.seq(seq__22556_23582);
if(temp__5735__auto___23698){
var seq__22556_23699__$1 = temp__5735__auto___23698;
if(cljs.core.chunked_seq_QMARK_(seq__22556_23699__$1)){
var c__4556__auto___23700 = cljs.core.chunk_first(seq__22556_23699__$1);
var G__23701 = cljs.core.chunk_rest(seq__22556_23699__$1);
var G__23702 = c__4556__auto___23700;
var G__23703 = cljs.core.count(c__4556__auto___23700);
var G__23704 = (0);
seq__22556_23582 = G__23701;
chunk__22557_23583 = G__23702;
count__22558_23584 = G__23703;
i__22559_23585 = G__23704;
continue;
} else {
var vec__22899_23706 = cljs.core.first(seq__22556_23699__$1);
var source_idx_23707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22899_23706,(0),null);
var vec__22902_23708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22899_23706,(1),null);
var __23709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22902_23708,(0),null);
var lines_23710__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22902_23708,(1),null);
var seq__22905_23711 = cljs.core.seq(lines_23710__$1);
var chunk__22906_23712 = null;
var count__22907_23713 = (0);
var i__22908_23714 = (0);
while(true){
if((i__22908_23714 < count__22907_23713)){
var vec__22953_23715 = chunk__22906_23712.cljs$core$IIndexed$_nth$arity$2(null,i__22908_23714);
var line_23716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22953_23715,(0),null);
var cols_23717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22953_23715,(1),null);
var seq__22956_23718 = cljs.core.seq(cols_23717);
var chunk__22957_23719 = null;
var count__22958_23720 = (0);
var i__22959_23721 = (0);
while(true){
if((i__22959_23721 < count__22958_23720)){
var vec__22966_23722 = chunk__22957_23719.cljs$core$IIndexed$_nth$arity$2(null,i__22959_23721);
var col_23723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22966_23722,(0),null);
var infos_23724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22966_23722,(1),null);
encode_cols(infos_23724,source_idx_23707,line_23716,col_23723);


var G__23725 = seq__22956_23718;
var G__23726 = chunk__22957_23719;
var G__23727 = count__22958_23720;
var G__23728 = (i__22959_23721 + (1));
seq__22956_23718 = G__23725;
chunk__22957_23719 = G__23726;
count__22958_23720 = G__23727;
i__22959_23721 = G__23728;
continue;
} else {
var temp__5735__auto___23729__$1 = cljs.core.seq(seq__22956_23718);
if(temp__5735__auto___23729__$1){
var seq__22956_23732__$1 = temp__5735__auto___23729__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22956_23732__$1)){
var c__4556__auto___23733 = cljs.core.chunk_first(seq__22956_23732__$1);
var G__23734 = cljs.core.chunk_rest(seq__22956_23732__$1);
var G__23735 = c__4556__auto___23733;
var G__23736 = cljs.core.count(c__4556__auto___23733);
var G__23737 = (0);
seq__22956_23718 = G__23734;
chunk__22957_23719 = G__23735;
count__22958_23720 = G__23736;
i__22959_23721 = G__23737;
continue;
} else {
var vec__22969_23738 = cljs.core.first(seq__22956_23732__$1);
var col_23739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22969_23738,(0),null);
var infos_23740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22969_23738,(1),null);
encode_cols(infos_23740,source_idx_23707,line_23716,col_23739);


var G__23741 = cljs.core.next(seq__22956_23732__$1);
var G__23742 = null;
var G__23743 = (0);
var G__23744 = (0);
seq__22956_23718 = G__23741;
chunk__22957_23719 = G__23742;
count__22958_23720 = G__23743;
i__22959_23721 = G__23744;
continue;
}
} else {
}
}
break;
}


var G__23745 = seq__22905_23711;
var G__23746 = chunk__22906_23712;
var G__23747 = count__22907_23713;
var G__23748 = (i__22908_23714 + (1));
seq__22905_23711 = G__23745;
chunk__22906_23712 = G__23746;
count__22907_23713 = G__23747;
i__22908_23714 = G__23748;
continue;
} else {
var temp__5735__auto___23749__$1 = cljs.core.seq(seq__22905_23711);
if(temp__5735__auto___23749__$1){
var seq__22905_23750__$1 = temp__5735__auto___23749__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22905_23750__$1)){
var c__4556__auto___23751 = cljs.core.chunk_first(seq__22905_23750__$1);
var G__23752 = cljs.core.chunk_rest(seq__22905_23750__$1);
var G__23753 = c__4556__auto___23751;
var G__23754 = cljs.core.count(c__4556__auto___23751);
var G__23755 = (0);
seq__22905_23711 = G__23752;
chunk__22906_23712 = G__23753;
count__22907_23713 = G__23754;
i__22908_23714 = G__23755;
continue;
} else {
var vec__22972_23756 = cljs.core.first(seq__22905_23750__$1);
var line_23757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22972_23756,(0),null);
var cols_23758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22972_23756,(1),null);
var seq__22975_23759 = cljs.core.seq(cols_23758);
var chunk__22976_23760 = null;
var count__22977_23761 = (0);
var i__22978_23762 = (0);
while(true){
if((i__22978_23762 < count__22977_23761)){
var vec__22985_23763 = chunk__22976_23760.cljs$core$IIndexed$_nth$arity$2(null,i__22978_23762);
var col_23764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22985_23763,(0),null);
var infos_23765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22985_23763,(1),null);
encode_cols(infos_23765,source_idx_23707,line_23757,col_23764);


var G__23766 = seq__22975_23759;
var G__23767 = chunk__22976_23760;
var G__23768 = count__22977_23761;
var G__23769 = (i__22978_23762 + (1));
seq__22975_23759 = G__23766;
chunk__22976_23760 = G__23767;
count__22977_23761 = G__23768;
i__22978_23762 = G__23769;
continue;
} else {
var temp__5735__auto___23770__$2 = cljs.core.seq(seq__22975_23759);
if(temp__5735__auto___23770__$2){
var seq__22975_23771__$1 = temp__5735__auto___23770__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22975_23771__$1)){
var c__4556__auto___23772 = cljs.core.chunk_first(seq__22975_23771__$1);
var G__23773 = cljs.core.chunk_rest(seq__22975_23771__$1);
var G__23774 = c__4556__auto___23772;
var G__23775 = cljs.core.count(c__4556__auto___23772);
var G__23776 = (0);
seq__22975_23759 = G__23773;
chunk__22976_23760 = G__23774;
count__22977_23761 = G__23775;
i__22978_23762 = G__23776;
continue;
} else {
var vec__22995_23777 = cljs.core.first(seq__22975_23771__$1);
var col_23778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22995_23777,(0),null);
var infos_23779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22995_23777,(1),null);
encode_cols(infos_23779,source_idx_23707,line_23757,col_23778);


var G__23780 = cljs.core.next(seq__22975_23771__$1);
var G__23781 = null;
var G__23782 = (0);
var G__23783 = (0);
seq__22975_23759 = G__23780;
chunk__22976_23760 = G__23781;
count__22977_23761 = G__23782;
i__22978_23762 = G__23783;
continue;
}
} else {
}
}
break;
}


var G__23784 = cljs.core.next(seq__22905_23750__$1);
var G__23785 = null;
var G__23786 = (0);
var G__23787 = (0);
seq__22905_23711 = G__23784;
chunk__22906_23712 = G__23785;
count__22907_23713 = G__23786;
i__22908_23714 = G__23787;
continue;
}
} else {
}
}
break;
}


var G__23789 = cljs.core.next(seq__22556_23699__$1);
var G__23790 = null;
var G__23791 = (0);
var G__23792 = (0);
seq__22556_23582 = G__23789;
chunk__22557_23583 = G__23790;
count__22558_23584 = G__23791;
i__22559_23585 = G__23792;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__22998 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__22549_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22549_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__22550_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__22550_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22551_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__22551_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__22999 = G__22998;
goog.object.set(G__22999,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__22999;
} else {
return G__22998;
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
var vec__23000 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23000,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23000,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__23003 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23003,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23003,(1),null);
var G__23821 = cljs.core.next(col_map_seq);
var G__23822 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__23003,col,infos,vec__23000,line,col_map){
return (function (v,p__23006){
var map__23007 = p__23006;
var map__23007__$1 = (((((!((map__23007 == null))))?(((((map__23007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23007):map__23007);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23007__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23007__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__23003,col,infos,vec__23000,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__23821;
new_cols = G__23822;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__23823 = cljs.core.next(line_map_seq);
var G__23824 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__23823;
new_lines = G__23824;
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
var seq__23009_23825 = cljs.core.seq(reverse_map);
var chunk__23010_23826 = null;
var count__23011_23827 = (0);
var i__23012_23828 = (0);
while(true){
if((i__23012_23828 < count__23011_23827)){
var vec__23166_23829 = chunk__23010_23826.cljs$core$IIndexed$_nth$arity$2(null,i__23012_23828);
var line_23830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23166_23829,(0),null);
var columns_23831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23166_23829,(1),null);
var seq__23169_23832 = cljs.core.seq(columns_23831);
var chunk__23170_23833 = null;
var count__23171_23834 = (0);
var i__23172_23835 = (0);
while(true){
if((i__23172_23835 < count__23171_23834)){
var vec__23216_23836 = chunk__23170_23833.cljs$core$IIndexed$_nth$arity$2(null,i__23172_23835);
var column_23837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23216_23836,(0),null);
var column_info_23838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23216_23836,(1),null);
var seq__23219_23839 = cljs.core.seq(column_info_23838);
var chunk__23220_23840 = null;
var count__23221_23841 = (0);
var i__23222_23842 = (0);
while(true){
if((i__23222_23842 < count__23221_23841)){
var map__23227_23843 = chunk__23220_23840.cljs$core$IIndexed$_nth$arity$2(null,i__23222_23842);
var map__23227_23844__$1 = (((((!((map__23227_23843 == null))))?(((((map__23227_23843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23227_23843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23227_23843):map__23227_23843);
var gline_23845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23227_23844__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23227_23844__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23847 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23227_23844__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23845], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23219_23839,chunk__23220_23840,count__23221_23841,i__23222_23842,seq__23169_23832,chunk__23170_23833,count__23171_23834,i__23172_23835,seq__23009_23825,chunk__23010_23826,count__23011_23827,i__23012_23828,map__23227_23843,map__23227_23844__$1,gline_23845,gcol_23846,name_23847,vec__23216_23836,column_23837,column_info_23838,vec__23166_23829,line_23830,columns_23831,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23846], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23830,new cljs.core.Keyword(null,"col","col",-1959363084),column_23837,new cljs.core.Keyword(null,"name","name",1843675177),name_23847], null));
});})(seq__23219_23839,chunk__23220_23840,count__23221_23841,i__23222_23842,seq__23169_23832,chunk__23170_23833,count__23171_23834,i__23172_23835,seq__23009_23825,chunk__23010_23826,count__23011_23827,i__23012_23828,map__23227_23843,map__23227_23844__$1,gline_23845,gcol_23846,name_23847,vec__23216_23836,column_23837,column_info_23838,vec__23166_23829,line_23830,columns_23831,inverted))
,cljs.core.sorted_map()));


var G__23848 = seq__23219_23839;
var G__23849 = chunk__23220_23840;
var G__23850 = count__23221_23841;
var G__23851 = (i__23222_23842 + (1));
seq__23219_23839 = G__23848;
chunk__23220_23840 = G__23849;
count__23221_23841 = G__23850;
i__23222_23842 = G__23851;
continue;
} else {
var temp__5735__auto___23852 = cljs.core.seq(seq__23219_23839);
if(temp__5735__auto___23852){
var seq__23219_23853__$1 = temp__5735__auto___23852;
if(cljs.core.chunked_seq_QMARK_(seq__23219_23853__$1)){
var c__4556__auto___23854 = cljs.core.chunk_first(seq__23219_23853__$1);
var G__23855 = cljs.core.chunk_rest(seq__23219_23853__$1);
var G__23856 = c__4556__auto___23854;
var G__23857 = cljs.core.count(c__4556__auto___23854);
var G__23858 = (0);
seq__23219_23839 = G__23855;
chunk__23220_23840 = G__23856;
count__23221_23841 = G__23857;
i__23222_23842 = G__23858;
continue;
} else {
var map__23229_23859 = cljs.core.first(seq__23219_23853__$1);
var map__23229_23860__$1 = (((((!((map__23229_23859 == null))))?(((((map__23229_23859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23229_23859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23229_23859):map__23229_23859);
var gline_23861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23229_23860__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23229_23860__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23229_23860__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23861], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23219_23839,chunk__23220_23840,count__23221_23841,i__23222_23842,seq__23169_23832,chunk__23170_23833,count__23171_23834,i__23172_23835,seq__23009_23825,chunk__23010_23826,count__23011_23827,i__23012_23828,map__23229_23859,map__23229_23860__$1,gline_23861,gcol_23862,name_23863,seq__23219_23853__$1,temp__5735__auto___23852,vec__23216_23836,column_23837,column_info_23838,vec__23166_23829,line_23830,columns_23831,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23862], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23830,new cljs.core.Keyword(null,"col","col",-1959363084),column_23837,new cljs.core.Keyword(null,"name","name",1843675177),name_23863], null));
});})(seq__23219_23839,chunk__23220_23840,count__23221_23841,i__23222_23842,seq__23169_23832,chunk__23170_23833,count__23171_23834,i__23172_23835,seq__23009_23825,chunk__23010_23826,count__23011_23827,i__23012_23828,map__23229_23859,map__23229_23860__$1,gline_23861,gcol_23862,name_23863,seq__23219_23853__$1,temp__5735__auto___23852,vec__23216_23836,column_23837,column_info_23838,vec__23166_23829,line_23830,columns_23831,inverted))
,cljs.core.sorted_map()));


var G__23864 = cljs.core.next(seq__23219_23853__$1);
var G__23865 = null;
var G__23866 = (0);
var G__23867 = (0);
seq__23219_23839 = G__23864;
chunk__23220_23840 = G__23865;
count__23221_23841 = G__23866;
i__23222_23842 = G__23867;
continue;
}
} else {
}
}
break;
}


var G__23882 = seq__23169_23832;
var G__23883 = chunk__23170_23833;
var G__23884 = count__23171_23834;
var G__23885 = (i__23172_23835 + (1));
seq__23169_23832 = G__23882;
chunk__23170_23833 = G__23883;
count__23171_23834 = G__23884;
i__23172_23835 = G__23885;
continue;
} else {
var temp__5735__auto___23886 = cljs.core.seq(seq__23169_23832);
if(temp__5735__auto___23886){
var seq__23169_23887__$1 = temp__5735__auto___23886;
if(cljs.core.chunked_seq_QMARK_(seq__23169_23887__$1)){
var c__4556__auto___23888 = cljs.core.chunk_first(seq__23169_23887__$1);
var G__23889 = cljs.core.chunk_rest(seq__23169_23887__$1);
var G__23890 = c__4556__auto___23888;
var G__23891 = cljs.core.count(c__4556__auto___23888);
var G__23892 = (0);
seq__23169_23832 = G__23889;
chunk__23170_23833 = G__23890;
count__23171_23834 = G__23891;
i__23172_23835 = G__23892;
continue;
} else {
var vec__23240_23893 = cljs.core.first(seq__23169_23887__$1);
var column_23894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23240_23893,(0),null);
var column_info_23895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23240_23893,(1),null);
var seq__23243_23896 = cljs.core.seq(column_info_23895);
var chunk__23244_23897 = null;
var count__23245_23898 = (0);
var i__23246_23899 = (0);
while(true){
if((i__23246_23899 < count__23245_23898)){
var map__23259_23900 = chunk__23244_23897.cljs$core$IIndexed$_nth$arity$2(null,i__23246_23899);
var map__23259_23901__$1 = (((((!((map__23259_23900 == null))))?(((((map__23259_23900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23259_23900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23259_23900):map__23259_23900);
var gline_23902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23259_23901__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23259_23901__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23259_23901__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23902], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23243_23896,chunk__23244_23897,count__23245_23898,i__23246_23899,seq__23169_23832,chunk__23170_23833,count__23171_23834,i__23172_23835,seq__23009_23825,chunk__23010_23826,count__23011_23827,i__23012_23828,map__23259_23900,map__23259_23901__$1,gline_23902,gcol_23903,name_23904,vec__23240_23893,column_23894,column_info_23895,seq__23169_23887__$1,temp__5735__auto___23886,vec__23166_23829,line_23830,columns_23831,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23903], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23830,new cljs.core.Keyword(null,"col","col",-1959363084),column_23894,new cljs.core.Keyword(null,"name","name",1843675177),name_23904], null));
});})(seq__23243_23896,chunk__23244_23897,count__23245_23898,i__23246_23899,seq__23169_23832,chunk__23170_23833,count__23171_23834,i__23172_23835,seq__23009_23825,chunk__23010_23826,count__23011_23827,i__23012_23828,map__23259_23900,map__23259_23901__$1,gline_23902,gcol_23903,name_23904,vec__23240_23893,column_23894,column_info_23895,seq__23169_23887__$1,temp__5735__auto___23886,vec__23166_23829,line_23830,columns_23831,inverted))
,cljs.core.sorted_map()));


var G__23905 = seq__23243_23896;
var G__23906 = chunk__23244_23897;
var G__23907 = count__23245_23898;
var G__23908 = (i__23246_23899 + (1));
seq__23243_23896 = G__23905;
chunk__23244_23897 = G__23906;
count__23245_23898 = G__23907;
i__23246_23899 = G__23908;
continue;
} else {
var temp__5735__auto___23909__$1 = cljs.core.seq(seq__23243_23896);
if(temp__5735__auto___23909__$1){
var seq__23243_23910__$1 = temp__5735__auto___23909__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23243_23910__$1)){
var c__4556__auto___23911 = cljs.core.chunk_first(seq__23243_23910__$1);
var G__23912 = cljs.core.chunk_rest(seq__23243_23910__$1);
var G__23913 = c__4556__auto___23911;
var G__23914 = cljs.core.count(c__4556__auto___23911);
var G__23915 = (0);
seq__23243_23896 = G__23912;
chunk__23244_23897 = G__23913;
count__23245_23898 = G__23914;
i__23246_23899 = G__23915;
continue;
} else {
var map__23274_23916 = cljs.core.first(seq__23243_23910__$1);
var map__23274_23917__$1 = (((((!((map__23274_23916 == null))))?(((((map__23274_23916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23274_23916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23274_23916):map__23274_23916);
var gline_23918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23274_23917__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23274_23917__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23274_23917__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23918], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23243_23896,chunk__23244_23897,count__23245_23898,i__23246_23899,seq__23169_23832,chunk__23170_23833,count__23171_23834,i__23172_23835,seq__23009_23825,chunk__23010_23826,count__23011_23827,i__23012_23828,map__23274_23916,map__23274_23917__$1,gline_23918,gcol_23919,name_23920,seq__23243_23910__$1,temp__5735__auto___23909__$1,vec__23240_23893,column_23894,column_info_23895,seq__23169_23887__$1,temp__5735__auto___23886,vec__23166_23829,line_23830,columns_23831,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23919], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23830,new cljs.core.Keyword(null,"col","col",-1959363084),column_23894,new cljs.core.Keyword(null,"name","name",1843675177),name_23920], null));
});})(seq__23243_23896,chunk__23244_23897,count__23245_23898,i__23246_23899,seq__23169_23832,chunk__23170_23833,count__23171_23834,i__23172_23835,seq__23009_23825,chunk__23010_23826,count__23011_23827,i__23012_23828,map__23274_23916,map__23274_23917__$1,gline_23918,gcol_23919,name_23920,seq__23243_23910__$1,temp__5735__auto___23909__$1,vec__23240_23893,column_23894,column_info_23895,seq__23169_23887__$1,temp__5735__auto___23886,vec__23166_23829,line_23830,columns_23831,inverted))
,cljs.core.sorted_map()));


var G__23921 = cljs.core.next(seq__23243_23910__$1);
var G__23922 = null;
var G__23923 = (0);
var G__23924 = (0);
seq__23243_23896 = G__23921;
chunk__23244_23897 = G__23922;
count__23245_23898 = G__23923;
i__23246_23899 = G__23924;
continue;
}
} else {
}
}
break;
}


var G__23925 = cljs.core.next(seq__23169_23887__$1);
var G__23926 = null;
var G__23927 = (0);
var G__23928 = (0);
seq__23169_23832 = G__23925;
chunk__23170_23833 = G__23926;
count__23171_23834 = G__23927;
i__23172_23835 = G__23928;
continue;
}
} else {
}
}
break;
}


var G__23929 = seq__23009_23825;
var G__23930 = chunk__23010_23826;
var G__23931 = count__23011_23827;
var G__23932 = (i__23012_23828 + (1));
seq__23009_23825 = G__23929;
chunk__23010_23826 = G__23930;
count__23011_23827 = G__23931;
i__23012_23828 = G__23932;
continue;
} else {
var temp__5735__auto___23933 = cljs.core.seq(seq__23009_23825);
if(temp__5735__auto___23933){
var seq__23009_23934__$1 = temp__5735__auto___23933;
if(cljs.core.chunked_seq_QMARK_(seq__23009_23934__$1)){
var c__4556__auto___23935 = cljs.core.chunk_first(seq__23009_23934__$1);
var G__23936 = cljs.core.chunk_rest(seq__23009_23934__$1);
var G__23937 = c__4556__auto___23935;
var G__23938 = cljs.core.count(c__4556__auto___23935);
var G__23939 = (0);
seq__23009_23825 = G__23936;
chunk__23010_23826 = G__23937;
count__23011_23827 = G__23938;
i__23012_23828 = G__23939;
continue;
} else {
var vec__23279_23940 = cljs.core.first(seq__23009_23934__$1);
var line_23941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23279_23940,(0),null);
var columns_23942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23279_23940,(1),null);
var seq__23282_23943 = cljs.core.seq(columns_23942);
var chunk__23283_23944 = null;
var count__23284_23945 = (0);
var i__23285_23946 = (0);
while(true){
if((i__23285_23946 < count__23284_23945)){
var vec__23404_23947 = chunk__23283_23944.cljs$core$IIndexed$_nth$arity$2(null,i__23285_23946);
var column_23948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23404_23947,(0),null);
var column_info_23949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23404_23947,(1),null);
var seq__23407_23950 = cljs.core.seq(column_info_23949);
var chunk__23408_23951 = null;
var count__23409_23952 = (0);
var i__23410_23953 = (0);
while(true){
if((i__23410_23953 < count__23409_23952)){
var map__23427_23954 = chunk__23408_23951.cljs$core$IIndexed$_nth$arity$2(null,i__23410_23953);
var map__23427_23955__$1 = (((((!((map__23427_23954 == null))))?(((((map__23427_23954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23427_23954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23427_23954):map__23427_23954);
var gline_23956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23427_23955__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23427_23955__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23427_23955__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23956], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23407_23950,chunk__23408_23951,count__23409_23952,i__23410_23953,seq__23282_23943,chunk__23283_23944,count__23284_23945,i__23285_23946,seq__23009_23825,chunk__23010_23826,count__23011_23827,i__23012_23828,map__23427_23954,map__23427_23955__$1,gline_23956,gcol_23957,name_23958,vec__23404_23947,column_23948,column_info_23949,vec__23279_23940,line_23941,columns_23942,seq__23009_23934__$1,temp__5735__auto___23933,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23957], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23941,new cljs.core.Keyword(null,"col","col",-1959363084),column_23948,new cljs.core.Keyword(null,"name","name",1843675177),name_23958], null));
});})(seq__23407_23950,chunk__23408_23951,count__23409_23952,i__23410_23953,seq__23282_23943,chunk__23283_23944,count__23284_23945,i__23285_23946,seq__23009_23825,chunk__23010_23826,count__23011_23827,i__23012_23828,map__23427_23954,map__23427_23955__$1,gline_23956,gcol_23957,name_23958,vec__23404_23947,column_23948,column_info_23949,vec__23279_23940,line_23941,columns_23942,seq__23009_23934__$1,temp__5735__auto___23933,inverted))
,cljs.core.sorted_map()));


var G__23970 = seq__23407_23950;
var G__23971 = chunk__23408_23951;
var G__23972 = count__23409_23952;
var G__23973 = (i__23410_23953 + (1));
seq__23407_23950 = G__23970;
chunk__23408_23951 = G__23971;
count__23409_23952 = G__23972;
i__23410_23953 = G__23973;
continue;
} else {
var temp__5735__auto___23974__$1 = cljs.core.seq(seq__23407_23950);
if(temp__5735__auto___23974__$1){
var seq__23407_23975__$1 = temp__5735__auto___23974__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23407_23975__$1)){
var c__4556__auto___23976 = cljs.core.chunk_first(seq__23407_23975__$1);
var G__23977 = cljs.core.chunk_rest(seq__23407_23975__$1);
var G__23978 = c__4556__auto___23976;
var G__23979 = cljs.core.count(c__4556__auto___23976);
var G__23980 = (0);
seq__23407_23950 = G__23977;
chunk__23408_23951 = G__23978;
count__23409_23952 = G__23979;
i__23410_23953 = G__23980;
continue;
} else {
var map__23442_23981 = cljs.core.first(seq__23407_23975__$1);
var map__23442_23982__$1 = (((((!((map__23442_23981 == null))))?(((((map__23442_23981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23442_23981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23442_23981):map__23442_23981);
var gline_23983 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23442_23982__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23442_23982__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23442_23982__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23983], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23407_23950,chunk__23408_23951,count__23409_23952,i__23410_23953,seq__23282_23943,chunk__23283_23944,count__23284_23945,i__23285_23946,seq__23009_23825,chunk__23010_23826,count__23011_23827,i__23012_23828,map__23442_23981,map__23442_23982__$1,gline_23983,gcol_23984,name_23985,seq__23407_23975__$1,temp__5735__auto___23974__$1,vec__23404_23947,column_23948,column_info_23949,vec__23279_23940,line_23941,columns_23942,seq__23009_23934__$1,temp__5735__auto___23933,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23984], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23941,new cljs.core.Keyword(null,"col","col",-1959363084),column_23948,new cljs.core.Keyword(null,"name","name",1843675177),name_23985], null));
});})(seq__23407_23950,chunk__23408_23951,count__23409_23952,i__23410_23953,seq__23282_23943,chunk__23283_23944,count__23284_23945,i__23285_23946,seq__23009_23825,chunk__23010_23826,count__23011_23827,i__23012_23828,map__23442_23981,map__23442_23982__$1,gline_23983,gcol_23984,name_23985,seq__23407_23975__$1,temp__5735__auto___23974__$1,vec__23404_23947,column_23948,column_info_23949,vec__23279_23940,line_23941,columns_23942,seq__23009_23934__$1,temp__5735__auto___23933,inverted))
,cljs.core.sorted_map()));


var G__23986 = cljs.core.next(seq__23407_23975__$1);
var G__23987 = null;
var G__23988 = (0);
var G__23989 = (0);
seq__23407_23950 = G__23986;
chunk__23408_23951 = G__23987;
count__23409_23952 = G__23988;
i__23410_23953 = G__23989;
continue;
}
} else {
}
}
break;
}


var G__23990 = seq__23282_23943;
var G__23991 = chunk__23283_23944;
var G__23992 = count__23284_23945;
var G__23993 = (i__23285_23946 + (1));
seq__23282_23943 = G__23990;
chunk__23283_23944 = G__23991;
count__23284_23945 = G__23992;
i__23285_23946 = G__23993;
continue;
} else {
var temp__5735__auto___23994__$1 = cljs.core.seq(seq__23282_23943);
if(temp__5735__auto___23994__$1){
var seq__23282_23995__$1 = temp__5735__auto___23994__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23282_23995__$1)){
var c__4556__auto___23996 = cljs.core.chunk_first(seq__23282_23995__$1);
var G__23997 = cljs.core.chunk_rest(seq__23282_23995__$1);
var G__23998 = c__4556__auto___23996;
var G__23999 = cljs.core.count(c__4556__auto___23996);
var G__24000 = (0);
seq__23282_23943 = G__23997;
chunk__23283_23944 = G__23998;
count__23284_23945 = G__23999;
i__23285_23946 = G__24000;
continue;
} else {
var vec__23444_24001 = cljs.core.first(seq__23282_23995__$1);
var column_24002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23444_24001,(0),null);
var column_info_24003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23444_24001,(1),null);
var seq__23447_24004 = cljs.core.seq(column_info_24003);
var chunk__23448_24005 = null;
var count__23449_24006 = (0);
var i__23450_24007 = (0);
while(true){
if((i__23450_24007 < count__23449_24006)){
var map__23456_24008 = chunk__23448_24005.cljs$core$IIndexed$_nth$arity$2(null,i__23450_24007);
var map__23456_24009__$1 = (((((!((map__23456_24008 == null))))?(((((map__23456_24008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23456_24008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23456_24008):map__23456_24008);
var gline_24010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23456_24009__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23456_24009__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23456_24009__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24010], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23447_24004,chunk__23448_24005,count__23449_24006,i__23450_24007,seq__23282_23943,chunk__23283_23944,count__23284_23945,i__23285_23946,seq__23009_23825,chunk__23010_23826,count__23011_23827,i__23012_23828,map__23456_24008,map__23456_24009__$1,gline_24010,gcol_24011,name_24012,vec__23444_24001,column_24002,column_info_24003,seq__23282_23995__$1,temp__5735__auto___23994__$1,vec__23279_23940,line_23941,columns_23942,seq__23009_23934__$1,temp__5735__auto___23933,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24011], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23941,new cljs.core.Keyword(null,"col","col",-1959363084),column_24002,new cljs.core.Keyword(null,"name","name",1843675177),name_24012], null));
});})(seq__23447_24004,chunk__23448_24005,count__23449_24006,i__23450_24007,seq__23282_23943,chunk__23283_23944,count__23284_23945,i__23285_23946,seq__23009_23825,chunk__23010_23826,count__23011_23827,i__23012_23828,map__23456_24008,map__23456_24009__$1,gline_24010,gcol_24011,name_24012,vec__23444_24001,column_24002,column_info_24003,seq__23282_23995__$1,temp__5735__auto___23994__$1,vec__23279_23940,line_23941,columns_23942,seq__23009_23934__$1,temp__5735__auto___23933,inverted))
,cljs.core.sorted_map()));


var G__24013 = seq__23447_24004;
var G__24014 = chunk__23448_24005;
var G__24015 = count__23449_24006;
var G__24016 = (i__23450_24007 + (1));
seq__23447_24004 = G__24013;
chunk__23448_24005 = G__24014;
count__23449_24006 = G__24015;
i__23450_24007 = G__24016;
continue;
} else {
var temp__5735__auto___24017__$2 = cljs.core.seq(seq__23447_24004);
if(temp__5735__auto___24017__$2){
var seq__23447_24018__$1 = temp__5735__auto___24017__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23447_24018__$1)){
var c__4556__auto___24019 = cljs.core.chunk_first(seq__23447_24018__$1);
var G__24020 = cljs.core.chunk_rest(seq__23447_24018__$1);
var G__24021 = c__4556__auto___24019;
var G__24022 = cljs.core.count(c__4556__auto___24019);
var G__24023 = (0);
seq__23447_24004 = G__24020;
chunk__23448_24005 = G__24021;
count__23449_24006 = G__24022;
i__23450_24007 = G__24023;
continue;
} else {
var map__23465_24024 = cljs.core.first(seq__23447_24018__$1);
var map__23465_24025__$1 = (((((!((map__23465_24024 == null))))?(((((map__23465_24024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23465_24024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23465_24024):map__23465_24024);
var gline_24026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23465_24025__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23465_24025__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23465_24025__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24026], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23447_24004,chunk__23448_24005,count__23449_24006,i__23450_24007,seq__23282_23943,chunk__23283_23944,count__23284_23945,i__23285_23946,seq__23009_23825,chunk__23010_23826,count__23011_23827,i__23012_23828,map__23465_24024,map__23465_24025__$1,gline_24026,gcol_24027,name_24028,seq__23447_24018__$1,temp__5735__auto___24017__$2,vec__23444_24001,column_24002,column_info_24003,seq__23282_23995__$1,temp__5735__auto___23994__$1,vec__23279_23940,line_23941,columns_23942,seq__23009_23934__$1,temp__5735__auto___23933,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24027], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23941,new cljs.core.Keyword(null,"col","col",-1959363084),column_24002,new cljs.core.Keyword(null,"name","name",1843675177),name_24028], null));
});})(seq__23447_24004,chunk__23448_24005,count__23449_24006,i__23450_24007,seq__23282_23943,chunk__23283_23944,count__23284_23945,i__23285_23946,seq__23009_23825,chunk__23010_23826,count__23011_23827,i__23012_23828,map__23465_24024,map__23465_24025__$1,gline_24026,gcol_24027,name_24028,seq__23447_24018__$1,temp__5735__auto___24017__$2,vec__23444_24001,column_24002,column_info_24003,seq__23282_23995__$1,temp__5735__auto___23994__$1,vec__23279_23940,line_23941,columns_23942,seq__23009_23934__$1,temp__5735__auto___23933,inverted))
,cljs.core.sorted_map()));


var G__24035 = cljs.core.next(seq__23447_24018__$1);
var G__24036 = null;
var G__24037 = (0);
var G__24038 = (0);
seq__23447_24004 = G__24035;
chunk__23448_24005 = G__24036;
count__23449_24006 = G__24037;
i__23450_24007 = G__24038;
continue;
}
} else {
}
}
break;
}


var G__24039 = cljs.core.next(seq__23282_23995__$1);
var G__24040 = null;
var G__24041 = (0);
var G__24042 = (0);
seq__23282_23943 = G__24039;
chunk__23283_23944 = G__24040;
count__23284_23945 = G__24041;
i__23285_23946 = G__24042;
continue;
}
} else {
}
}
break;
}


var G__24043 = cljs.core.next(seq__23009_23934__$1);
var G__24044 = null;
var G__24045 = (0);
var G__24046 = (0);
seq__23009_23825 = G__24043;
chunk__23010_23826 = G__24044;
count__23011_23827 = G__24045;
i__23012_23828 = G__24046;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
