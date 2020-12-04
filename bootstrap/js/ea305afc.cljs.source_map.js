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
var G__23372 = cljs.core.next(segs__$1);
var G__23373 = nrelseg;
var G__23374 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23372;
relseg__$1 = G__23373;
result__$1 = G__23374;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22523,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22523,(1),null);
var G__23375 = (gline + (1));
var G__23376 = cljs.core.next(lines__$1);
var G__23377 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23378 = result__$1;
gline = G__23375;
lines__$1 = G__23376;
relseg = G__23377;
result = G__23378;
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
var G__23380 = cljs.core.next(segs__$1);
var G__23381 = nrelseg;
var G__23382 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23380;
relseg__$1 = G__23381;
result__$1 = G__23382;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22534,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22534,(1),null);
var G__23385 = (gline + (1));
var G__23386 = cljs.core.next(lines__$1);
var G__23387 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23388 = result__$1;
gline = G__23385;
lines__$1 = G__23386;
relseg = G__23387;
result = G__23388;
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
var segv_23399 = info__GT_segv(info,source_idx,line,col);
var gline_23400 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23401 = cljs.core.count(cljs.core.deref(lines));
if((gline_23400 > (lc_23401 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22552,chunk__22553,count__22554,i__22555,segv_23399,gline_23400,lc_23401,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23400 - (lc_23401 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23399], null));
});})(seq__22552,chunk__22553,count__22554,i__22555,segv_23399,gline_23400,lc_23401,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22552,chunk__22553,count__22554,i__22555,segv_23399,gline_23400,lc_23401,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23400], null),cljs.core.conj,segv_23399);
});})(seq__22552,chunk__22553,count__22554,i__22555,segv_23399,gline_23400,lc_23401,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23406 = seq__22552;
var G__23407 = chunk__22553;
var G__23408 = count__22554;
var G__23409 = (i__22555 + (1));
seq__22552 = G__23406;
chunk__22553 = G__23407;
count__22554 = G__23408;
i__22555 = G__23409;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__22552);
if(temp__5735__auto__){
var seq__22552__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22552__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__22552__$1);
var G__23414 = cljs.core.chunk_rest(seq__22552__$1);
var G__23415 = c__4556__auto__;
var G__23416 = cljs.core.count(c__4556__auto__);
var G__23417 = (0);
seq__22552 = G__23414;
chunk__22553 = G__23415;
count__22554 = G__23416;
i__22555 = G__23417;
continue;
} else {
var info = cljs.core.first(seq__22552__$1);
var segv_23418 = info__GT_segv(info,source_idx,line,col);
var gline_23419 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23420 = cljs.core.count(cljs.core.deref(lines));
if((gline_23419 > (lc_23420 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22552,chunk__22553,count__22554,i__22555,segv_23418,gline_23419,lc_23420,info,seq__22552__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23419 - (lc_23420 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23418], null));
});})(seq__22552,chunk__22553,count__22554,i__22555,segv_23418,gline_23419,lc_23420,info,seq__22552__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22552,chunk__22553,count__22554,i__22555,segv_23418,gline_23419,lc_23420,info,seq__22552__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23419], null),cljs.core.conj,segv_23418);
});})(seq__22552,chunk__22553,count__22554,i__22555,segv_23418,gline_23419,lc_23420,info,seq__22552__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23425 = cljs.core.next(seq__22552__$1);
var G__23426 = null;
var G__23427 = (0);
var G__23428 = (0);
seq__22552 = G__23425;
chunk__22553 = G__23426;
count__22554 = G__23427;
i__22555 = G__23428;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__22556_23429 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__22557_23430 = null;
var count__22558_23431 = (0);
var i__22559_23432 = (0);
while(true){
if((i__22559_23432 < count__22558_23431)){
var vec__22774_23434 = chunk__22557_23430.cljs$core$IIndexed$_nth$arity$2(null,i__22559_23432);
var source_idx_23435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22774_23434,(0),null);
var vec__22777_23436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22774_23434,(1),null);
var __23437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22777_23436,(0),null);
var lines_23438__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22777_23436,(1),null);
var seq__22780_23442 = cljs.core.seq(lines_23438__$1);
var chunk__22781_23443 = null;
var count__22782_23444 = (0);
var i__22783_23445 = (0);
while(true){
if((i__22783_23445 < count__22782_23444)){
var vec__22848_23446 = chunk__22781_23443.cljs$core$IIndexed$_nth$arity$2(null,i__22783_23445);
var line_23447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22848_23446,(0),null);
var cols_23448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22848_23446,(1),null);
var seq__22851_23451 = cljs.core.seq(cols_23448);
var chunk__22852_23452 = null;
var count__22853_23453 = (0);
var i__22854_23454 = (0);
while(true){
if((i__22854_23454 < count__22853_23453)){
var vec__22861_23455 = chunk__22852_23452.cljs$core$IIndexed$_nth$arity$2(null,i__22854_23454);
var col_23456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22861_23455,(0),null);
var infos_23457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22861_23455,(1),null);
encode_cols(infos_23457,source_idx_23435,line_23447,col_23456);


var G__23458 = seq__22851_23451;
var G__23459 = chunk__22852_23452;
var G__23460 = count__22853_23453;
var G__23461 = (i__22854_23454 + (1));
seq__22851_23451 = G__23458;
chunk__22852_23452 = G__23459;
count__22853_23453 = G__23460;
i__22854_23454 = G__23461;
continue;
} else {
var temp__5735__auto___23462 = cljs.core.seq(seq__22851_23451);
if(temp__5735__auto___23462){
var seq__22851_23463__$1 = temp__5735__auto___23462;
if(cljs.core.chunked_seq_QMARK_(seq__22851_23463__$1)){
var c__4556__auto___23464 = cljs.core.chunk_first(seq__22851_23463__$1);
var G__23465 = cljs.core.chunk_rest(seq__22851_23463__$1);
var G__23466 = c__4556__auto___23464;
var G__23467 = cljs.core.count(c__4556__auto___23464);
var G__23468 = (0);
seq__22851_23451 = G__23465;
chunk__22852_23452 = G__23466;
count__22853_23453 = G__23467;
i__22854_23454 = G__23468;
continue;
} else {
var vec__22865_23469 = cljs.core.first(seq__22851_23463__$1);
var col_23470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22865_23469,(0),null);
var infos_23471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22865_23469,(1),null);
encode_cols(infos_23471,source_idx_23435,line_23447,col_23470);


var G__23472 = cljs.core.next(seq__22851_23463__$1);
var G__23473 = null;
var G__23474 = (0);
var G__23475 = (0);
seq__22851_23451 = G__23472;
chunk__22852_23452 = G__23473;
count__22853_23453 = G__23474;
i__22854_23454 = G__23475;
continue;
}
} else {
}
}
break;
}


var G__23476 = seq__22780_23442;
var G__23477 = chunk__22781_23443;
var G__23478 = count__22782_23444;
var G__23479 = (i__22783_23445 + (1));
seq__22780_23442 = G__23476;
chunk__22781_23443 = G__23477;
count__22782_23444 = G__23478;
i__22783_23445 = G__23479;
continue;
} else {
var temp__5735__auto___23480 = cljs.core.seq(seq__22780_23442);
if(temp__5735__auto___23480){
var seq__22780_23481__$1 = temp__5735__auto___23480;
if(cljs.core.chunked_seq_QMARK_(seq__22780_23481__$1)){
var c__4556__auto___23482 = cljs.core.chunk_first(seq__22780_23481__$1);
var G__23483 = cljs.core.chunk_rest(seq__22780_23481__$1);
var G__23484 = c__4556__auto___23482;
var G__23485 = cljs.core.count(c__4556__auto___23482);
var G__23486 = (0);
seq__22780_23442 = G__23483;
chunk__22781_23443 = G__23484;
count__22782_23444 = G__23485;
i__22783_23445 = G__23486;
continue;
} else {
var vec__22868_23487 = cljs.core.first(seq__22780_23481__$1);
var line_23488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22868_23487,(0),null);
var cols_23489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22868_23487,(1),null);
var seq__22871_23490 = cljs.core.seq(cols_23489);
var chunk__22872_23491 = null;
var count__22873_23492 = (0);
var i__22874_23493 = (0);
while(true){
if((i__22874_23493 < count__22873_23492)){
var vec__22881_23494 = chunk__22872_23491.cljs$core$IIndexed$_nth$arity$2(null,i__22874_23493);
var col_23495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22881_23494,(0),null);
var infos_23496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22881_23494,(1),null);
encode_cols(infos_23496,source_idx_23435,line_23488,col_23495);


var G__23497 = seq__22871_23490;
var G__23498 = chunk__22872_23491;
var G__23499 = count__22873_23492;
var G__23500 = (i__22874_23493 + (1));
seq__22871_23490 = G__23497;
chunk__22872_23491 = G__23498;
count__22873_23492 = G__23499;
i__22874_23493 = G__23500;
continue;
} else {
var temp__5735__auto___23501__$1 = cljs.core.seq(seq__22871_23490);
if(temp__5735__auto___23501__$1){
var seq__22871_23502__$1 = temp__5735__auto___23501__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22871_23502__$1)){
var c__4556__auto___23503 = cljs.core.chunk_first(seq__22871_23502__$1);
var G__23504 = cljs.core.chunk_rest(seq__22871_23502__$1);
var G__23505 = c__4556__auto___23503;
var G__23506 = cljs.core.count(c__4556__auto___23503);
var G__23507 = (0);
seq__22871_23490 = G__23504;
chunk__22872_23491 = G__23505;
count__22873_23492 = G__23506;
i__22874_23493 = G__23507;
continue;
} else {
var vec__22884_23508 = cljs.core.first(seq__22871_23502__$1);
var col_23509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22884_23508,(0),null);
var infos_23510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22884_23508,(1),null);
encode_cols(infos_23510,source_idx_23435,line_23488,col_23509);


var G__23511 = cljs.core.next(seq__22871_23502__$1);
var G__23512 = null;
var G__23513 = (0);
var G__23514 = (0);
seq__22871_23490 = G__23511;
chunk__22872_23491 = G__23512;
count__22873_23492 = G__23513;
i__22874_23493 = G__23514;
continue;
}
} else {
}
}
break;
}


var G__23515 = cljs.core.next(seq__22780_23481__$1);
var G__23516 = null;
var G__23517 = (0);
var G__23518 = (0);
seq__22780_23442 = G__23515;
chunk__22781_23443 = G__23516;
count__22782_23444 = G__23517;
i__22783_23445 = G__23518;
continue;
}
} else {
}
}
break;
}


var G__23519 = seq__22556_23429;
var G__23520 = chunk__22557_23430;
var G__23521 = count__22558_23431;
var G__23522 = (i__22559_23432 + (1));
seq__22556_23429 = G__23519;
chunk__22557_23430 = G__23520;
count__22558_23431 = G__23521;
i__22559_23432 = G__23522;
continue;
} else {
var temp__5735__auto___23523 = cljs.core.seq(seq__22556_23429);
if(temp__5735__auto___23523){
var seq__22556_23524__$1 = temp__5735__auto___23523;
if(cljs.core.chunked_seq_QMARK_(seq__22556_23524__$1)){
var c__4556__auto___23525 = cljs.core.chunk_first(seq__22556_23524__$1);
var G__23526 = cljs.core.chunk_rest(seq__22556_23524__$1);
var G__23527 = c__4556__auto___23525;
var G__23528 = cljs.core.count(c__4556__auto___23525);
var G__23529 = (0);
seq__22556_23429 = G__23526;
chunk__22557_23430 = G__23527;
count__22558_23431 = G__23528;
i__22559_23432 = G__23529;
continue;
} else {
var vec__22887_23530 = cljs.core.first(seq__22556_23524__$1);
var source_idx_23531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22887_23530,(0),null);
var vec__22890_23532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22887_23530,(1),null);
var __23533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22890_23532,(0),null);
var lines_23534__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22890_23532,(1),null);
var seq__22893_23535 = cljs.core.seq(lines_23534__$1);
var chunk__22894_23536 = null;
var count__22895_23537 = (0);
var i__22896_23538 = (0);
while(true){
if((i__22896_23538 < count__22895_23537)){
var vec__22940_23539 = chunk__22894_23536.cljs$core$IIndexed$_nth$arity$2(null,i__22896_23538);
var line_23540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22940_23539,(0),null);
var cols_23541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22940_23539,(1),null);
var seq__22943_23542 = cljs.core.seq(cols_23541);
var chunk__22944_23543 = null;
var count__22945_23544 = (0);
var i__22946_23545 = (0);
while(true){
if((i__22946_23545 < count__22945_23544)){
var vec__22953_23546 = chunk__22944_23543.cljs$core$IIndexed$_nth$arity$2(null,i__22946_23545);
var col_23547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22953_23546,(0),null);
var infos_23548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22953_23546,(1),null);
encode_cols(infos_23548,source_idx_23531,line_23540,col_23547);


var G__23549 = seq__22943_23542;
var G__23550 = chunk__22944_23543;
var G__23551 = count__22945_23544;
var G__23552 = (i__22946_23545 + (1));
seq__22943_23542 = G__23549;
chunk__22944_23543 = G__23550;
count__22945_23544 = G__23551;
i__22946_23545 = G__23552;
continue;
} else {
var temp__5735__auto___23553__$1 = cljs.core.seq(seq__22943_23542);
if(temp__5735__auto___23553__$1){
var seq__22943_23554__$1 = temp__5735__auto___23553__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22943_23554__$1)){
var c__4556__auto___23555 = cljs.core.chunk_first(seq__22943_23554__$1);
var G__23556 = cljs.core.chunk_rest(seq__22943_23554__$1);
var G__23557 = c__4556__auto___23555;
var G__23558 = cljs.core.count(c__4556__auto___23555);
var G__23559 = (0);
seq__22943_23542 = G__23556;
chunk__22944_23543 = G__23557;
count__22945_23544 = G__23558;
i__22946_23545 = G__23559;
continue;
} else {
var vec__22956_23560 = cljs.core.first(seq__22943_23554__$1);
var col_23561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22956_23560,(0),null);
var infos_23562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22956_23560,(1),null);
encode_cols(infos_23562,source_idx_23531,line_23540,col_23561);


var G__23563 = cljs.core.next(seq__22943_23554__$1);
var G__23564 = null;
var G__23565 = (0);
var G__23566 = (0);
seq__22943_23542 = G__23563;
chunk__22944_23543 = G__23564;
count__22945_23544 = G__23565;
i__22946_23545 = G__23566;
continue;
}
} else {
}
}
break;
}


var G__23567 = seq__22893_23535;
var G__23568 = chunk__22894_23536;
var G__23569 = count__22895_23537;
var G__23570 = (i__22896_23538 + (1));
seq__22893_23535 = G__23567;
chunk__22894_23536 = G__23568;
count__22895_23537 = G__23569;
i__22896_23538 = G__23570;
continue;
} else {
var temp__5735__auto___23571__$1 = cljs.core.seq(seq__22893_23535);
if(temp__5735__auto___23571__$1){
var seq__22893_23572__$1 = temp__5735__auto___23571__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22893_23572__$1)){
var c__4556__auto___23573 = cljs.core.chunk_first(seq__22893_23572__$1);
var G__23574 = cljs.core.chunk_rest(seq__22893_23572__$1);
var G__23575 = c__4556__auto___23573;
var G__23576 = cljs.core.count(c__4556__auto___23573);
var G__23577 = (0);
seq__22893_23535 = G__23574;
chunk__22894_23536 = G__23575;
count__22895_23537 = G__23576;
i__22896_23538 = G__23577;
continue;
} else {
var vec__22959_23578 = cljs.core.first(seq__22893_23572__$1);
var line_23579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22959_23578,(0),null);
var cols_23580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22959_23578,(1),null);
var seq__22962_23581 = cljs.core.seq(cols_23580);
var chunk__22963_23582 = null;
var count__22964_23583 = (0);
var i__22965_23584 = (0);
while(true){
if((i__22965_23584 < count__22964_23583)){
var vec__22972_23585 = chunk__22963_23582.cljs$core$IIndexed$_nth$arity$2(null,i__22965_23584);
var col_23586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22972_23585,(0),null);
var infos_23587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22972_23585,(1),null);
encode_cols(infos_23587,source_idx_23531,line_23579,col_23586);


var G__23588 = seq__22962_23581;
var G__23589 = chunk__22963_23582;
var G__23590 = count__22964_23583;
var G__23591 = (i__22965_23584 + (1));
seq__22962_23581 = G__23588;
chunk__22963_23582 = G__23589;
count__22964_23583 = G__23590;
i__22965_23584 = G__23591;
continue;
} else {
var temp__5735__auto___23592__$2 = cljs.core.seq(seq__22962_23581);
if(temp__5735__auto___23592__$2){
var seq__22962_23593__$1 = temp__5735__auto___23592__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22962_23593__$1)){
var c__4556__auto___23594 = cljs.core.chunk_first(seq__22962_23593__$1);
var G__23595 = cljs.core.chunk_rest(seq__22962_23593__$1);
var G__23596 = c__4556__auto___23594;
var G__23597 = cljs.core.count(c__4556__auto___23594);
var G__23598 = (0);
seq__22962_23581 = G__23595;
chunk__22963_23582 = G__23596;
count__22964_23583 = G__23597;
i__22965_23584 = G__23598;
continue;
} else {
var vec__22975_23599 = cljs.core.first(seq__22962_23593__$1);
var col_23600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22975_23599,(0),null);
var infos_23601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22975_23599,(1),null);
encode_cols(infos_23601,source_idx_23531,line_23579,col_23600);


var G__23602 = cljs.core.next(seq__22962_23593__$1);
var G__23603 = null;
var G__23604 = (0);
var G__23605 = (0);
seq__22962_23581 = G__23602;
chunk__22963_23582 = G__23603;
count__22964_23583 = G__23604;
i__22965_23584 = G__23605;
continue;
}
} else {
}
}
break;
}


var G__23606 = cljs.core.next(seq__22893_23572__$1);
var G__23607 = null;
var G__23608 = (0);
var G__23609 = (0);
seq__22893_23535 = G__23606;
chunk__22894_23536 = G__23607;
count__22895_23537 = G__23608;
i__22896_23538 = G__23609;
continue;
}
} else {
}
}
break;
}


var G__23610 = cljs.core.next(seq__22556_23524__$1);
var G__23611 = null;
var G__23612 = (0);
var G__23613 = (0);
seq__22556_23429 = G__23610;
chunk__22557_23430 = G__23611;
count__22558_23431 = G__23612;
i__22559_23432 = G__23613;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__22978 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
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
var G__22981 = G__22978;
goog.object.set(G__22981,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__22981;
} else {
return G__22978;
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
var G__23614 = cljs.core.next(col_map_seq);
var G__23615 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__22985,col,infos,vec__22982,line,col_map){
return (function (v,p__22992){
var map__22993 = p__22992;
var map__22993__$1 = (((((!((map__22993 == null))))?(((((map__22993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22993):map__22993);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22993__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22993__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__22985,col,infos,vec__22982,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__23614;
new_cols = G__23615;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__23616 = cljs.core.next(line_map_seq);
var G__23617 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__23616;
new_lines = G__23617;
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
var seq__22995_23618 = cljs.core.seq(reverse_map);
var chunk__22996_23619 = null;
var count__22997_23620 = (0);
var i__22998_23621 = (0);
while(true){
if((i__22998_23621 < count__22997_23620)){
var vec__23172_23622 = chunk__22996_23619.cljs$core$IIndexed$_nth$arity$2(null,i__22998_23621);
var line_23623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23172_23622,(0),null);
var columns_23624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23172_23622,(1),null);
var seq__23175_23626 = cljs.core.seq(columns_23624);
var chunk__23176_23627 = null;
var count__23177_23628 = (0);
var i__23178_23629 = (0);
while(true){
if((i__23178_23629 < count__23177_23628)){
var vec__23216_23633 = chunk__23176_23627.cljs$core$IIndexed$_nth$arity$2(null,i__23178_23629);
var column_23634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23216_23633,(0),null);
var column_info_23635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23216_23633,(1),null);
var seq__23219_23636 = cljs.core.seq(column_info_23635);
var chunk__23220_23637 = null;
var count__23221_23638 = (0);
var i__23222_23639 = (0);
while(true){
if((i__23222_23639 < count__23221_23638)){
var map__23230_23640 = chunk__23220_23637.cljs$core$IIndexed$_nth$arity$2(null,i__23222_23639);
var map__23230_23641__$1 = (((((!((map__23230_23640 == null))))?(((((map__23230_23640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23230_23640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23230_23640):map__23230_23640);
var gline_23642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23230_23641__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23230_23641__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23230_23641__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23642], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23219_23636,chunk__23220_23637,count__23221_23638,i__23222_23639,seq__23175_23626,chunk__23176_23627,count__23177_23628,i__23178_23629,seq__22995_23618,chunk__22996_23619,count__22997_23620,i__22998_23621,map__23230_23640,map__23230_23641__$1,gline_23642,gcol_23643,name_23644,vec__23216_23633,column_23634,column_info_23635,vec__23172_23622,line_23623,columns_23624,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23643], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23623,new cljs.core.Keyword(null,"col","col",-1959363084),column_23634,new cljs.core.Keyword(null,"name","name",1843675177),name_23644], null));
});})(seq__23219_23636,chunk__23220_23637,count__23221_23638,i__23222_23639,seq__23175_23626,chunk__23176_23627,count__23177_23628,i__23178_23629,seq__22995_23618,chunk__22996_23619,count__22997_23620,i__22998_23621,map__23230_23640,map__23230_23641__$1,gline_23642,gcol_23643,name_23644,vec__23216_23633,column_23634,column_info_23635,vec__23172_23622,line_23623,columns_23624,inverted))
,cljs.core.sorted_map()));


var G__23653 = seq__23219_23636;
var G__23654 = chunk__23220_23637;
var G__23655 = count__23221_23638;
var G__23656 = (i__23222_23639 + (1));
seq__23219_23636 = G__23653;
chunk__23220_23637 = G__23654;
count__23221_23638 = G__23655;
i__23222_23639 = G__23656;
continue;
} else {
var temp__5735__auto___23657 = cljs.core.seq(seq__23219_23636);
if(temp__5735__auto___23657){
var seq__23219_23658__$1 = temp__5735__auto___23657;
if(cljs.core.chunked_seq_QMARK_(seq__23219_23658__$1)){
var c__4556__auto___23659 = cljs.core.chunk_first(seq__23219_23658__$1);
var G__23660 = cljs.core.chunk_rest(seq__23219_23658__$1);
var G__23661 = c__4556__auto___23659;
var G__23662 = cljs.core.count(c__4556__auto___23659);
var G__23663 = (0);
seq__23219_23636 = G__23660;
chunk__23220_23637 = G__23661;
count__23221_23638 = G__23662;
i__23222_23639 = G__23663;
continue;
} else {
var map__23232_23664 = cljs.core.first(seq__23219_23658__$1);
var map__23232_23665__$1 = (((((!((map__23232_23664 == null))))?(((((map__23232_23664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23232_23664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23232_23664):map__23232_23664);
var gline_23666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23232_23665__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23232_23665__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23232_23665__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23666], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23219_23636,chunk__23220_23637,count__23221_23638,i__23222_23639,seq__23175_23626,chunk__23176_23627,count__23177_23628,i__23178_23629,seq__22995_23618,chunk__22996_23619,count__22997_23620,i__22998_23621,map__23232_23664,map__23232_23665__$1,gline_23666,gcol_23667,name_23668,seq__23219_23658__$1,temp__5735__auto___23657,vec__23216_23633,column_23634,column_info_23635,vec__23172_23622,line_23623,columns_23624,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23667], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23623,new cljs.core.Keyword(null,"col","col",-1959363084),column_23634,new cljs.core.Keyword(null,"name","name",1843675177),name_23668], null));
});})(seq__23219_23636,chunk__23220_23637,count__23221_23638,i__23222_23639,seq__23175_23626,chunk__23176_23627,count__23177_23628,i__23178_23629,seq__22995_23618,chunk__22996_23619,count__22997_23620,i__22998_23621,map__23232_23664,map__23232_23665__$1,gline_23666,gcol_23667,name_23668,seq__23219_23658__$1,temp__5735__auto___23657,vec__23216_23633,column_23634,column_info_23635,vec__23172_23622,line_23623,columns_23624,inverted))
,cljs.core.sorted_map()));


var G__23669 = cljs.core.next(seq__23219_23658__$1);
var G__23670 = null;
var G__23671 = (0);
var G__23672 = (0);
seq__23219_23636 = G__23669;
chunk__23220_23637 = G__23670;
count__23221_23638 = G__23671;
i__23222_23639 = G__23672;
continue;
}
} else {
}
}
break;
}


var G__23673 = seq__23175_23626;
var G__23674 = chunk__23176_23627;
var G__23675 = count__23177_23628;
var G__23676 = (i__23178_23629 + (1));
seq__23175_23626 = G__23673;
chunk__23176_23627 = G__23674;
count__23177_23628 = G__23675;
i__23178_23629 = G__23676;
continue;
} else {
var temp__5735__auto___23677 = cljs.core.seq(seq__23175_23626);
if(temp__5735__auto___23677){
var seq__23175_23678__$1 = temp__5735__auto___23677;
if(cljs.core.chunked_seq_QMARK_(seq__23175_23678__$1)){
var c__4556__auto___23679 = cljs.core.chunk_first(seq__23175_23678__$1);
var G__23680 = cljs.core.chunk_rest(seq__23175_23678__$1);
var G__23681 = c__4556__auto___23679;
var G__23682 = cljs.core.count(c__4556__auto___23679);
var G__23683 = (0);
seq__23175_23626 = G__23680;
chunk__23176_23627 = G__23681;
count__23177_23628 = G__23682;
i__23178_23629 = G__23683;
continue;
} else {
var vec__23234_23684 = cljs.core.first(seq__23175_23678__$1);
var column_23685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23234_23684,(0),null);
var column_info_23686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23234_23684,(1),null);
var seq__23237_23687 = cljs.core.seq(column_info_23686);
var chunk__23238_23688 = null;
var count__23239_23689 = (0);
var i__23240_23690 = (0);
while(true){
if((i__23240_23690 < count__23239_23689)){
var map__23254_23691 = chunk__23238_23688.cljs$core$IIndexed$_nth$arity$2(null,i__23240_23690);
var map__23254_23692__$1 = (((((!((map__23254_23691 == null))))?(((((map__23254_23691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23254_23691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23254_23691):map__23254_23691);
var gline_23693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23254_23692__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23254_23692__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23254_23692__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23693], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23237_23687,chunk__23238_23688,count__23239_23689,i__23240_23690,seq__23175_23626,chunk__23176_23627,count__23177_23628,i__23178_23629,seq__22995_23618,chunk__22996_23619,count__22997_23620,i__22998_23621,map__23254_23691,map__23254_23692__$1,gline_23693,gcol_23694,name_23695,vec__23234_23684,column_23685,column_info_23686,seq__23175_23678__$1,temp__5735__auto___23677,vec__23172_23622,line_23623,columns_23624,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23694], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23623,new cljs.core.Keyword(null,"col","col",-1959363084),column_23685,new cljs.core.Keyword(null,"name","name",1843675177),name_23695], null));
});})(seq__23237_23687,chunk__23238_23688,count__23239_23689,i__23240_23690,seq__23175_23626,chunk__23176_23627,count__23177_23628,i__23178_23629,seq__22995_23618,chunk__22996_23619,count__22997_23620,i__22998_23621,map__23254_23691,map__23254_23692__$1,gline_23693,gcol_23694,name_23695,vec__23234_23684,column_23685,column_info_23686,seq__23175_23678__$1,temp__5735__auto___23677,vec__23172_23622,line_23623,columns_23624,inverted))
,cljs.core.sorted_map()));


var G__23696 = seq__23237_23687;
var G__23697 = chunk__23238_23688;
var G__23698 = count__23239_23689;
var G__23699 = (i__23240_23690 + (1));
seq__23237_23687 = G__23696;
chunk__23238_23688 = G__23697;
count__23239_23689 = G__23698;
i__23240_23690 = G__23699;
continue;
} else {
var temp__5735__auto___23700__$1 = cljs.core.seq(seq__23237_23687);
if(temp__5735__auto___23700__$1){
var seq__23237_23701__$1 = temp__5735__auto___23700__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23237_23701__$1)){
var c__4556__auto___23702 = cljs.core.chunk_first(seq__23237_23701__$1);
var G__23703 = cljs.core.chunk_rest(seq__23237_23701__$1);
var G__23704 = c__4556__auto___23702;
var G__23705 = cljs.core.count(c__4556__auto___23702);
var G__23706 = (0);
seq__23237_23687 = G__23703;
chunk__23238_23688 = G__23704;
count__23239_23689 = G__23705;
i__23240_23690 = G__23706;
continue;
} else {
var map__23256_23707 = cljs.core.first(seq__23237_23701__$1);
var map__23256_23708__$1 = (((((!((map__23256_23707 == null))))?(((((map__23256_23707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23256_23707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23256_23707):map__23256_23707);
var gline_23709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23256_23708__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23256_23708__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23256_23708__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23709], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23237_23687,chunk__23238_23688,count__23239_23689,i__23240_23690,seq__23175_23626,chunk__23176_23627,count__23177_23628,i__23178_23629,seq__22995_23618,chunk__22996_23619,count__22997_23620,i__22998_23621,map__23256_23707,map__23256_23708__$1,gline_23709,gcol_23710,name_23711,seq__23237_23701__$1,temp__5735__auto___23700__$1,vec__23234_23684,column_23685,column_info_23686,seq__23175_23678__$1,temp__5735__auto___23677,vec__23172_23622,line_23623,columns_23624,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23710], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23623,new cljs.core.Keyword(null,"col","col",-1959363084),column_23685,new cljs.core.Keyword(null,"name","name",1843675177),name_23711], null));
});})(seq__23237_23687,chunk__23238_23688,count__23239_23689,i__23240_23690,seq__23175_23626,chunk__23176_23627,count__23177_23628,i__23178_23629,seq__22995_23618,chunk__22996_23619,count__22997_23620,i__22998_23621,map__23256_23707,map__23256_23708__$1,gline_23709,gcol_23710,name_23711,seq__23237_23701__$1,temp__5735__auto___23700__$1,vec__23234_23684,column_23685,column_info_23686,seq__23175_23678__$1,temp__5735__auto___23677,vec__23172_23622,line_23623,columns_23624,inverted))
,cljs.core.sorted_map()));


var G__23720 = cljs.core.next(seq__23237_23701__$1);
var G__23721 = null;
var G__23722 = (0);
var G__23723 = (0);
seq__23237_23687 = G__23720;
chunk__23238_23688 = G__23721;
count__23239_23689 = G__23722;
i__23240_23690 = G__23723;
continue;
}
} else {
}
}
break;
}


var G__23724 = cljs.core.next(seq__23175_23678__$1);
var G__23725 = null;
var G__23726 = (0);
var G__23727 = (0);
seq__23175_23626 = G__23724;
chunk__23176_23627 = G__23725;
count__23177_23628 = G__23726;
i__23178_23629 = G__23727;
continue;
}
} else {
}
}
break;
}


var G__23729 = seq__22995_23618;
var G__23730 = chunk__22996_23619;
var G__23731 = count__22997_23620;
var G__23732 = (i__22998_23621 + (1));
seq__22995_23618 = G__23729;
chunk__22996_23619 = G__23730;
count__22997_23620 = G__23731;
i__22998_23621 = G__23732;
continue;
} else {
var temp__5735__auto___23733 = cljs.core.seq(seq__22995_23618);
if(temp__5735__auto___23733){
var seq__22995_23734__$1 = temp__5735__auto___23733;
if(cljs.core.chunked_seq_QMARK_(seq__22995_23734__$1)){
var c__4556__auto___23735 = cljs.core.chunk_first(seq__22995_23734__$1);
var G__23736 = cljs.core.chunk_rest(seq__22995_23734__$1);
var G__23737 = c__4556__auto___23735;
var G__23738 = cljs.core.count(c__4556__auto___23735);
var G__23739 = (0);
seq__22995_23618 = G__23736;
chunk__22996_23619 = G__23737;
count__22997_23620 = G__23738;
i__22998_23621 = G__23739;
continue;
} else {
var vec__23258_23740 = cljs.core.first(seq__22995_23734__$1);
var line_23741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23258_23740,(0),null);
var columns_23742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23258_23740,(1),null);
var seq__23261_23743 = cljs.core.seq(columns_23742);
var chunk__23262_23744 = null;
var count__23263_23745 = (0);
var i__23264_23746 = (0);
while(true){
if((i__23264_23746 < count__23263_23745)){
var vec__23326_23747 = chunk__23262_23744.cljs$core$IIndexed$_nth$arity$2(null,i__23264_23746);
var column_23748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23326_23747,(0),null);
var column_info_23749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23326_23747,(1),null);
var seq__23329_23750 = cljs.core.seq(column_info_23749);
var chunk__23330_23751 = null;
var count__23331_23752 = (0);
var i__23332_23753 = (0);
while(true){
if((i__23332_23753 < count__23331_23752)){
var map__23337_23754 = chunk__23330_23751.cljs$core$IIndexed$_nth$arity$2(null,i__23332_23753);
var map__23337_23755__$1 = (((((!((map__23337_23754 == null))))?(((((map__23337_23754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23337_23754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23337_23754):map__23337_23754);
var gline_23756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23337_23755__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23337_23755__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23758 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23337_23755__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23756], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23329_23750,chunk__23330_23751,count__23331_23752,i__23332_23753,seq__23261_23743,chunk__23262_23744,count__23263_23745,i__23264_23746,seq__22995_23618,chunk__22996_23619,count__22997_23620,i__22998_23621,map__23337_23754,map__23337_23755__$1,gline_23756,gcol_23757,name_23758,vec__23326_23747,column_23748,column_info_23749,vec__23258_23740,line_23741,columns_23742,seq__22995_23734__$1,temp__5735__auto___23733,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23757], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23741,new cljs.core.Keyword(null,"col","col",-1959363084),column_23748,new cljs.core.Keyword(null,"name","name",1843675177),name_23758], null));
});})(seq__23329_23750,chunk__23330_23751,count__23331_23752,i__23332_23753,seq__23261_23743,chunk__23262_23744,count__23263_23745,i__23264_23746,seq__22995_23618,chunk__22996_23619,count__22997_23620,i__22998_23621,map__23337_23754,map__23337_23755__$1,gline_23756,gcol_23757,name_23758,vec__23326_23747,column_23748,column_info_23749,vec__23258_23740,line_23741,columns_23742,seq__22995_23734__$1,temp__5735__auto___23733,inverted))
,cljs.core.sorted_map()));


var G__23763 = seq__23329_23750;
var G__23764 = chunk__23330_23751;
var G__23765 = count__23331_23752;
var G__23766 = (i__23332_23753 + (1));
seq__23329_23750 = G__23763;
chunk__23330_23751 = G__23764;
count__23331_23752 = G__23765;
i__23332_23753 = G__23766;
continue;
} else {
var temp__5735__auto___23768__$1 = cljs.core.seq(seq__23329_23750);
if(temp__5735__auto___23768__$1){
var seq__23329_23769__$1 = temp__5735__auto___23768__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23329_23769__$1)){
var c__4556__auto___23770 = cljs.core.chunk_first(seq__23329_23769__$1);
var G__23771 = cljs.core.chunk_rest(seq__23329_23769__$1);
var G__23772 = c__4556__auto___23770;
var G__23773 = cljs.core.count(c__4556__auto___23770);
var G__23774 = (0);
seq__23329_23750 = G__23771;
chunk__23330_23751 = G__23772;
count__23331_23752 = G__23773;
i__23332_23753 = G__23774;
continue;
} else {
var map__23339_23775 = cljs.core.first(seq__23329_23769__$1);
var map__23339_23776__$1 = (((((!((map__23339_23775 == null))))?(((((map__23339_23775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23339_23775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23339_23775):map__23339_23775);
var gline_23777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23339_23776__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23339_23776__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23339_23776__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23777], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23329_23750,chunk__23330_23751,count__23331_23752,i__23332_23753,seq__23261_23743,chunk__23262_23744,count__23263_23745,i__23264_23746,seq__22995_23618,chunk__22996_23619,count__22997_23620,i__22998_23621,map__23339_23775,map__23339_23776__$1,gline_23777,gcol_23778,name_23779,seq__23329_23769__$1,temp__5735__auto___23768__$1,vec__23326_23747,column_23748,column_info_23749,vec__23258_23740,line_23741,columns_23742,seq__22995_23734__$1,temp__5735__auto___23733,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23778], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23741,new cljs.core.Keyword(null,"col","col",-1959363084),column_23748,new cljs.core.Keyword(null,"name","name",1843675177),name_23779], null));
});})(seq__23329_23750,chunk__23330_23751,count__23331_23752,i__23332_23753,seq__23261_23743,chunk__23262_23744,count__23263_23745,i__23264_23746,seq__22995_23618,chunk__22996_23619,count__22997_23620,i__22998_23621,map__23339_23775,map__23339_23776__$1,gline_23777,gcol_23778,name_23779,seq__23329_23769__$1,temp__5735__auto___23768__$1,vec__23326_23747,column_23748,column_info_23749,vec__23258_23740,line_23741,columns_23742,seq__22995_23734__$1,temp__5735__auto___23733,inverted))
,cljs.core.sorted_map()));


var G__23780 = cljs.core.next(seq__23329_23769__$1);
var G__23781 = null;
var G__23782 = (0);
var G__23783 = (0);
seq__23329_23750 = G__23780;
chunk__23330_23751 = G__23781;
count__23331_23752 = G__23782;
i__23332_23753 = G__23783;
continue;
}
} else {
}
}
break;
}


var G__23784 = seq__23261_23743;
var G__23785 = chunk__23262_23744;
var G__23786 = count__23263_23745;
var G__23787 = (i__23264_23746 + (1));
seq__23261_23743 = G__23784;
chunk__23262_23744 = G__23785;
count__23263_23745 = G__23786;
i__23264_23746 = G__23787;
continue;
} else {
var temp__5735__auto___23788__$1 = cljs.core.seq(seq__23261_23743);
if(temp__5735__auto___23788__$1){
var seq__23261_23789__$1 = temp__5735__auto___23788__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23261_23789__$1)){
var c__4556__auto___23790 = cljs.core.chunk_first(seq__23261_23789__$1);
var G__23791 = cljs.core.chunk_rest(seq__23261_23789__$1);
var G__23792 = c__4556__auto___23790;
var G__23793 = cljs.core.count(c__4556__auto___23790);
var G__23794 = (0);
seq__23261_23743 = G__23791;
chunk__23262_23744 = G__23792;
count__23263_23745 = G__23793;
i__23264_23746 = G__23794;
continue;
} else {
var vec__23341_23795 = cljs.core.first(seq__23261_23789__$1);
var column_23796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23341_23795,(0),null);
var column_info_23797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23341_23795,(1),null);
var seq__23344_23798 = cljs.core.seq(column_info_23797);
var chunk__23345_23799 = null;
var count__23346_23800 = (0);
var i__23347_23801 = (0);
while(true){
if((i__23347_23801 < count__23346_23800)){
var map__23357_23802 = chunk__23345_23799.cljs$core$IIndexed$_nth$arity$2(null,i__23347_23801);
var map__23357_23803__$1 = (((((!((map__23357_23802 == null))))?(((((map__23357_23802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23357_23802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23357_23802):map__23357_23802);
var gline_23804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23357_23803__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23357_23803__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23357_23803__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23804], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23344_23798,chunk__23345_23799,count__23346_23800,i__23347_23801,seq__23261_23743,chunk__23262_23744,count__23263_23745,i__23264_23746,seq__22995_23618,chunk__22996_23619,count__22997_23620,i__22998_23621,map__23357_23802,map__23357_23803__$1,gline_23804,gcol_23805,name_23806,vec__23341_23795,column_23796,column_info_23797,seq__23261_23789__$1,temp__5735__auto___23788__$1,vec__23258_23740,line_23741,columns_23742,seq__22995_23734__$1,temp__5735__auto___23733,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23805], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23741,new cljs.core.Keyword(null,"col","col",-1959363084),column_23796,new cljs.core.Keyword(null,"name","name",1843675177),name_23806], null));
});})(seq__23344_23798,chunk__23345_23799,count__23346_23800,i__23347_23801,seq__23261_23743,chunk__23262_23744,count__23263_23745,i__23264_23746,seq__22995_23618,chunk__22996_23619,count__22997_23620,i__22998_23621,map__23357_23802,map__23357_23803__$1,gline_23804,gcol_23805,name_23806,vec__23341_23795,column_23796,column_info_23797,seq__23261_23789__$1,temp__5735__auto___23788__$1,vec__23258_23740,line_23741,columns_23742,seq__22995_23734__$1,temp__5735__auto___23733,inverted))
,cljs.core.sorted_map()));


var G__23807 = seq__23344_23798;
var G__23808 = chunk__23345_23799;
var G__23809 = count__23346_23800;
var G__23810 = (i__23347_23801 + (1));
seq__23344_23798 = G__23807;
chunk__23345_23799 = G__23808;
count__23346_23800 = G__23809;
i__23347_23801 = G__23810;
continue;
} else {
var temp__5735__auto___23811__$2 = cljs.core.seq(seq__23344_23798);
if(temp__5735__auto___23811__$2){
var seq__23344_23812__$1 = temp__5735__auto___23811__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23344_23812__$1)){
var c__4556__auto___23813 = cljs.core.chunk_first(seq__23344_23812__$1);
var G__23814 = cljs.core.chunk_rest(seq__23344_23812__$1);
var G__23815 = c__4556__auto___23813;
var G__23816 = cljs.core.count(c__4556__auto___23813);
var G__23817 = (0);
seq__23344_23798 = G__23814;
chunk__23345_23799 = G__23815;
count__23346_23800 = G__23816;
i__23347_23801 = G__23817;
continue;
} else {
var map__23367_23818 = cljs.core.first(seq__23344_23812__$1);
var map__23367_23819__$1 = (((((!((map__23367_23818 == null))))?(((((map__23367_23818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23367_23818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23367_23818):map__23367_23818);
var gline_23820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23367_23819__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23367_23819__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23367_23819__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23820], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23344_23798,chunk__23345_23799,count__23346_23800,i__23347_23801,seq__23261_23743,chunk__23262_23744,count__23263_23745,i__23264_23746,seq__22995_23618,chunk__22996_23619,count__22997_23620,i__22998_23621,map__23367_23818,map__23367_23819__$1,gline_23820,gcol_23821,name_23822,seq__23344_23812__$1,temp__5735__auto___23811__$2,vec__23341_23795,column_23796,column_info_23797,seq__23261_23789__$1,temp__5735__auto___23788__$1,vec__23258_23740,line_23741,columns_23742,seq__22995_23734__$1,temp__5735__auto___23733,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23821], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23741,new cljs.core.Keyword(null,"col","col",-1959363084),column_23796,new cljs.core.Keyword(null,"name","name",1843675177),name_23822], null));
});})(seq__23344_23798,chunk__23345_23799,count__23346_23800,i__23347_23801,seq__23261_23743,chunk__23262_23744,count__23263_23745,i__23264_23746,seq__22995_23618,chunk__22996_23619,count__22997_23620,i__22998_23621,map__23367_23818,map__23367_23819__$1,gline_23820,gcol_23821,name_23822,seq__23344_23812__$1,temp__5735__auto___23811__$2,vec__23341_23795,column_23796,column_info_23797,seq__23261_23789__$1,temp__5735__auto___23788__$1,vec__23258_23740,line_23741,columns_23742,seq__22995_23734__$1,temp__5735__auto___23733,inverted))
,cljs.core.sorted_map()));


var G__23823 = cljs.core.next(seq__23344_23812__$1);
var G__23824 = null;
var G__23825 = (0);
var G__23826 = (0);
seq__23344_23798 = G__23823;
chunk__23345_23799 = G__23824;
count__23346_23800 = G__23825;
i__23347_23801 = G__23826;
continue;
}
} else {
}
}
break;
}


var G__23827 = cljs.core.next(seq__23261_23789__$1);
var G__23828 = null;
var G__23829 = (0);
var G__23830 = (0);
seq__23261_23743 = G__23827;
chunk__23262_23744 = G__23828;
count__23263_23745 = G__23829;
i__23264_23746 = G__23830;
continue;
}
} else {
}
}
break;
}


var G__23831 = cljs.core.next(seq__22995_23734__$1);
var G__23832 = null;
var G__23833 = (0);
var G__23834 = (0);
seq__22995_23618 = G__23831;
chunk__22996_23619 = G__23832;
count__22997_23620 = G__23833;
i__22998_23621 = G__23834;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
