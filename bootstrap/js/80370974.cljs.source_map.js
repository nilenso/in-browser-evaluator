goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__22496){
var vec__22497 = p__22496;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22497,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22497,(1),null);
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
var vec__22501 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22501,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22501,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22501,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22501,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22501,(4),null);
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
var vec__22504 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22504,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22504,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22504,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22504,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22504,(4),null);
var vec__22507 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22507,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22507,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22507,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22507,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22507,(4),null);
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
var map__22510 = segmap;
var map__22510__$1 = (((((!((map__22510 == null))))?(((((map__22510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22510):map__22510);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22510__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22510__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22510__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22510__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22510__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__23640 = cljs.core.next(segs__$1);
var G__23641 = nrelseg;
var G__23642 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23640;
relseg__$1 = G__23641;
result__$1 = G__23642;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22523,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22523,(1),null);
var G__23643 = (gline + (1));
var G__23644 = cljs.core.next(lines__$1);
var G__23645 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23646 = result__$1;
gline = G__23643;
lines__$1 = G__23644;
relseg = G__23645;
result = G__23646;
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
var G__23675 = cljs.core.next(segs__$1);
var G__23676 = nrelseg;
var G__23677 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23675;
relseg__$1 = G__23676;
result__$1 = G__23677;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22534,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22534,(1),null);
var G__23678 = (gline + (1));
var G__23679 = cljs.core.next(lines__$1);
var G__23680 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23681 = result__$1;
gline = G__23678;
lines__$1 = G__23679;
relseg = G__23680;
result = G__23681;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__22548){
var vec__22549 = p__22548;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22549,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22549,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22549,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22549,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22549,(4),null);
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
var seq__22572 = cljs.core.seq(infos);
var chunk__22573 = null;
var count__22574 = (0);
var i__22575 = (0);
while(true){
if((i__22575 < count__22574)){
var info = chunk__22573.cljs$core$IIndexed$_nth$arity$2(null,i__22575);
var segv_23717 = info__GT_segv(info,source_idx,line,col);
var gline_23718 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23719 = cljs.core.count(cljs.core.deref(lines));
if((gline_23718 > (lc_23719 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22572,chunk__22573,count__22574,i__22575,segv_23717,gline_23718,lc_23719,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23718 - (lc_23719 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23717], null));
});})(seq__22572,chunk__22573,count__22574,i__22575,segv_23717,gline_23718,lc_23719,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22572,chunk__22573,count__22574,i__22575,segv_23717,gline_23718,lc_23719,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23718], null),cljs.core.conj,segv_23717);
});})(seq__22572,chunk__22573,count__22574,i__22575,segv_23717,gline_23718,lc_23719,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23724 = seq__22572;
var G__23725 = chunk__22573;
var G__23726 = count__22574;
var G__23727 = (i__22575 + (1));
seq__22572 = G__23724;
chunk__22573 = G__23725;
count__22574 = G__23726;
i__22575 = G__23727;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__22572);
if(temp__5735__auto__){
var seq__22572__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22572__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__22572__$1);
var G__23728 = cljs.core.chunk_rest(seq__22572__$1);
var G__23729 = c__4556__auto__;
var G__23730 = cljs.core.count(c__4556__auto__);
var G__23731 = (0);
seq__22572 = G__23728;
chunk__22573 = G__23729;
count__22574 = G__23730;
i__22575 = G__23731;
continue;
} else {
var info = cljs.core.first(seq__22572__$1);
var segv_23732 = info__GT_segv(info,source_idx,line,col);
var gline_23733 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23734 = cljs.core.count(cljs.core.deref(lines));
if((gline_23733 > (lc_23734 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22572,chunk__22573,count__22574,i__22575,segv_23732,gline_23733,lc_23734,info,seq__22572__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23733 - (lc_23734 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23732], null));
});})(seq__22572,chunk__22573,count__22574,i__22575,segv_23732,gline_23733,lc_23734,info,seq__22572__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22572,chunk__22573,count__22574,i__22575,segv_23732,gline_23733,lc_23734,info,seq__22572__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23733], null),cljs.core.conj,segv_23732);
});})(seq__22572,chunk__22573,count__22574,i__22575,segv_23732,gline_23733,lc_23734,info,seq__22572__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23735 = cljs.core.next(seq__22572__$1);
var G__23736 = null;
var G__23737 = (0);
var G__23738 = (0);
seq__22572 = G__23735;
chunk__22573 = G__23736;
count__22574 = G__23737;
i__22575 = G__23738;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__22601_23739 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__22602_23740 = null;
var count__22603_23741 = (0);
var i__22604_23742 = (0);
while(true){
if((i__22604_23742 < count__22603_23741)){
var vec__22819_23743 = chunk__22602_23740.cljs$core$IIndexed$_nth$arity$2(null,i__22604_23742);
var source_idx_23744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22819_23743,(0),null);
var vec__22822_23745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22819_23743,(1),null);
var __23746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22822_23745,(0),null);
var lines_23747__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22822_23745,(1),null);
var seq__22825_23748 = cljs.core.seq(lines_23747__$1);
var chunk__22826_23749 = null;
var count__22827_23750 = (0);
var i__22828_23751 = (0);
while(true){
if((i__22828_23751 < count__22827_23750)){
var vec__22871_23752 = chunk__22826_23749.cljs$core$IIndexed$_nth$arity$2(null,i__22828_23751);
var line_23753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22871_23752,(0),null);
var cols_23754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22871_23752,(1),null);
var seq__22874_23755 = cljs.core.seq(cols_23754);
var chunk__22875_23756 = null;
var count__22876_23757 = (0);
var i__22877_23758 = (0);
while(true){
if((i__22877_23758 < count__22876_23757)){
var vec__22887_23759 = chunk__22875_23756.cljs$core$IIndexed$_nth$arity$2(null,i__22877_23758);
var col_23760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22887_23759,(0),null);
var infos_23761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22887_23759,(1),null);
encode_cols(infos_23761,source_idx_23744,line_23753,col_23760);


var G__23762 = seq__22874_23755;
var G__23763 = chunk__22875_23756;
var G__23764 = count__22876_23757;
var G__23765 = (i__22877_23758 + (1));
seq__22874_23755 = G__23762;
chunk__22875_23756 = G__23763;
count__22876_23757 = G__23764;
i__22877_23758 = G__23765;
continue;
} else {
var temp__5735__auto___23766 = cljs.core.seq(seq__22874_23755);
if(temp__5735__auto___23766){
var seq__22874_23767__$1 = temp__5735__auto___23766;
if(cljs.core.chunked_seq_QMARK_(seq__22874_23767__$1)){
var c__4556__auto___23768 = cljs.core.chunk_first(seq__22874_23767__$1);
var G__23769 = cljs.core.chunk_rest(seq__22874_23767__$1);
var G__23770 = c__4556__auto___23768;
var G__23771 = cljs.core.count(c__4556__auto___23768);
var G__23772 = (0);
seq__22874_23755 = G__23769;
chunk__22875_23756 = G__23770;
count__22876_23757 = G__23771;
i__22877_23758 = G__23772;
continue;
} else {
var vec__22893_23773 = cljs.core.first(seq__22874_23767__$1);
var col_23774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22893_23773,(0),null);
var infos_23775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22893_23773,(1),null);
encode_cols(infos_23775,source_idx_23744,line_23753,col_23774);


var G__23776 = cljs.core.next(seq__22874_23767__$1);
var G__23777 = null;
var G__23778 = (0);
var G__23779 = (0);
seq__22874_23755 = G__23776;
chunk__22875_23756 = G__23777;
count__22876_23757 = G__23778;
i__22877_23758 = G__23779;
continue;
}
} else {
}
}
break;
}


var G__23785 = seq__22825_23748;
var G__23786 = chunk__22826_23749;
var G__23787 = count__22827_23750;
var G__23788 = (i__22828_23751 + (1));
seq__22825_23748 = G__23785;
chunk__22826_23749 = G__23786;
count__22827_23750 = G__23787;
i__22828_23751 = G__23788;
continue;
} else {
var temp__5735__auto___23789 = cljs.core.seq(seq__22825_23748);
if(temp__5735__auto___23789){
var seq__22825_23790__$1 = temp__5735__auto___23789;
if(cljs.core.chunked_seq_QMARK_(seq__22825_23790__$1)){
var c__4556__auto___23791 = cljs.core.chunk_first(seq__22825_23790__$1);
var G__23792 = cljs.core.chunk_rest(seq__22825_23790__$1);
var G__23793 = c__4556__auto___23791;
var G__23794 = cljs.core.count(c__4556__auto___23791);
var G__23795 = (0);
seq__22825_23748 = G__23792;
chunk__22826_23749 = G__23793;
count__22827_23750 = G__23794;
i__22828_23751 = G__23795;
continue;
} else {
var vec__22896_23796 = cljs.core.first(seq__22825_23790__$1);
var line_23797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22896_23796,(0),null);
var cols_23798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22896_23796,(1),null);
var seq__22899_23799 = cljs.core.seq(cols_23798);
var chunk__22900_23800 = null;
var count__22901_23801 = (0);
var i__22902_23802 = (0);
while(true){
if((i__22902_23802 < count__22901_23801)){
var vec__22911_23803 = chunk__22900_23800.cljs$core$IIndexed$_nth$arity$2(null,i__22902_23802);
var col_23804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22911_23803,(0),null);
var infos_23805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22911_23803,(1),null);
encode_cols(infos_23805,source_idx_23744,line_23797,col_23804);


var G__23806 = seq__22899_23799;
var G__23807 = chunk__22900_23800;
var G__23808 = count__22901_23801;
var G__23809 = (i__22902_23802 + (1));
seq__22899_23799 = G__23806;
chunk__22900_23800 = G__23807;
count__22901_23801 = G__23808;
i__22902_23802 = G__23809;
continue;
} else {
var temp__5735__auto___23810__$1 = cljs.core.seq(seq__22899_23799);
if(temp__5735__auto___23810__$1){
var seq__22899_23812__$1 = temp__5735__auto___23810__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22899_23812__$1)){
var c__4556__auto___23813 = cljs.core.chunk_first(seq__22899_23812__$1);
var G__23814 = cljs.core.chunk_rest(seq__22899_23812__$1);
var G__23815 = c__4556__auto___23813;
var G__23816 = cljs.core.count(c__4556__auto___23813);
var G__23817 = (0);
seq__22899_23799 = G__23814;
chunk__22900_23800 = G__23815;
count__22901_23801 = G__23816;
i__22902_23802 = G__23817;
continue;
} else {
var vec__22914_23818 = cljs.core.first(seq__22899_23812__$1);
var col_23819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22914_23818,(0),null);
var infos_23820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22914_23818,(1),null);
encode_cols(infos_23820,source_idx_23744,line_23797,col_23819);


var G__23821 = cljs.core.next(seq__22899_23812__$1);
var G__23822 = null;
var G__23823 = (0);
var G__23824 = (0);
seq__22899_23799 = G__23821;
chunk__22900_23800 = G__23822;
count__22901_23801 = G__23823;
i__22902_23802 = G__23824;
continue;
}
} else {
}
}
break;
}


var G__23826 = cljs.core.next(seq__22825_23790__$1);
var G__23827 = null;
var G__23828 = (0);
var G__23829 = (0);
seq__22825_23748 = G__23826;
chunk__22826_23749 = G__23827;
count__22827_23750 = G__23828;
i__22828_23751 = G__23829;
continue;
}
} else {
}
}
break;
}


var G__23833 = seq__22601_23739;
var G__23834 = chunk__22602_23740;
var G__23835 = count__22603_23741;
var G__23836 = (i__22604_23742 + (1));
seq__22601_23739 = G__23833;
chunk__22602_23740 = G__23834;
count__22603_23741 = G__23835;
i__22604_23742 = G__23836;
continue;
} else {
var temp__5735__auto___23837 = cljs.core.seq(seq__22601_23739);
if(temp__5735__auto___23837){
var seq__22601_23838__$1 = temp__5735__auto___23837;
if(cljs.core.chunked_seq_QMARK_(seq__22601_23838__$1)){
var c__4556__auto___23839 = cljs.core.chunk_first(seq__22601_23838__$1);
var G__23840 = cljs.core.chunk_rest(seq__22601_23838__$1);
var G__23841 = c__4556__auto___23839;
var G__23842 = cljs.core.count(c__4556__auto___23839);
var G__23843 = (0);
seq__22601_23739 = G__23840;
chunk__22602_23740 = G__23841;
count__22603_23741 = G__23842;
i__22604_23742 = G__23843;
continue;
} else {
var vec__22917_23844 = cljs.core.first(seq__22601_23838__$1);
var source_idx_23845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22917_23844,(0),null);
var vec__22920_23846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22917_23844,(1),null);
var __23847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22920_23846,(0),null);
var lines_23848__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22920_23846,(1),null);
var seq__22923_23849 = cljs.core.seq(lines_23848__$1);
var chunk__22924_23850 = null;
var count__22925_23851 = (0);
var i__22926_23852 = (0);
while(true){
if((i__22926_23852 < count__22925_23851)){
var vec__22978_23853 = chunk__22924_23850.cljs$core$IIndexed$_nth$arity$2(null,i__22926_23852);
var line_23854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22978_23853,(0),null);
var cols_23855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22978_23853,(1),null);
var seq__22981_23856 = cljs.core.seq(cols_23855);
var chunk__22982_23857 = null;
var count__22983_23858 = (0);
var i__22984_23859 = (0);
while(true){
if((i__22984_23859 < count__22983_23858)){
var vec__22991_23860 = chunk__22982_23857.cljs$core$IIndexed$_nth$arity$2(null,i__22984_23859);
var col_23861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22991_23860,(0),null);
var infos_23862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22991_23860,(1),null);
encode_cols(infos_23862,source_idx_23845,line_23854,col_23861);


var G__23863 = seq__22981_23856;
var G__23864 = chunk__22982_23857;
var G__23865 = count__22983_23858;
var G__23866 = (i__22984_23859 + (1));
seq__22981_23856 = G__23863;
chunk__22982_23857 = G__23864;
count__22983_23858 = G__23865;
i__22984_23859 = G__23866;
continue;
} else {
var temp__5735__auto___23867__$1 = cljs.core.seq(seq__22981_23856);
if(temp__5735__auto___23867__$1){
var seq__22981_23868__$1 = temp__5735__auto___23867__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22981_23868__$1)){
var c__4556__auto___23869 = cljs.core.chunk_first(seq__22981_23868__$1);
var G__23870 = cljs.core.chunk_rest(seq__22981_23868__$1);
var G__23871 = c__4556__auto___23869;
var G__23872 = cljs.core.count(c__4556__auto___23869);
var G__23873 = (0);
seq__22981_23856 = G__23870;
chunk__22982_23857 = G__23871;
count__22983_23858 = G__23872;
i__22984_23859 = G__23873;
continue;
} else {
var vec__22994_23874 = cljs.core.first(seq__22981_23868__$1);
var col_23875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22994_23874,(0),null);
var infos_23876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22994_23874,(1),null);
encode_cols(infos_23876,source_idx_23845,line_23854,col_23875);


var G__23877 = cljs.core.next(seq__22981_23868__$1);
var G__23878 = null;
var G__23879 = (0);
var G__23880 = (0);
seq__22981_23856 = G__23877;
chunk__22982_23857 = G__23878;
count__22983_23858 = G__23879;
i__22984_23859 = G__23880;
continue;
}
} else {
}
}
break;
}


var G__23881 = seq__22923_23849;
var G__23882 = chunk__22924_23850;
var G__23883 = count__22925_23851;
var G__23884 = (i__22926_23852 + (1));
seq__22923_23849 = G__23881;
chunk__22924_23850 = G__23882;
count__22925_23851 = G__23883;
i__22926_23852 = G__23884;
continue;
} else {
var temp__5735__auto___23885__$1 = cljs.core.seq(seq__22923_23849);
if(temp__5735__auto___23885__$1){
var seq__22923_23886__$1 = temp__5735__auto___23885__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22923_23886__$1)){
var c__4556__auto___23887 = cljs.core.chunk_first(seq__22923_23886__$1);
var G__23888 = cljs.core.chunk_rest(seq__22923_23886__$1);
var G__23889 = c__4556__auto___23887;
var G__23890 = cljs.core.count(c__4556__auto___23887);
var G__23891 = (0);
seq__22923_23849 = G__23888;
chunk__22924_23850 = G__23889;
count__22925_23851 = G__23890;
i__22926_23852 = G__23891;
continue;
} else {
var vec__22998_23904 = cljs.core.first(seq__22923_23886__$1);
var line_23905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22998_23904,(0),null);
var cols_23906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22998_23904,(1),null);
var seq__23001_23907 = cljs.core.seq(cols_23906);
var chunk__23002_23908 = null;
var count__23003_23909 = (0);
var i__23004_23910 = (0);
while(true){
if((i__23004_23910 < count__23003_23909)){
var vec__23011_23911 = chunk__23002_23908.cljs$core$IIndexed$_nth$arity$2(null,i__23004_23910);
var col_23912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23011_23911,(0),null);
var infos_23913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23011_23911,(1),null);
encode_cols(infos_23913,source_idx_23845,line_23905,col_23912);


var G__23914 = seq__23001_23907;
var G__23915 = chunk__23002_23908;
var G__23916 = count__23003_23909;
var G__23917 = (i__23004_23910 + (1));
seq__23001_23907 = G__23914;
chunk__23002_23908 = G__23915;
count__23003_23909 = G__23916;
i__23004_23910 = G__23917;
continue;
} else {
var temp__5735__auto___23918__$2 = cljs.core.seq(seq__23001_23907);
if(temp__5735__auto___23918__$2){
var seq__23001_23919__$1 = temp__5735__auto___23918__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23001_23919__$1)){
var c__4556__auto___23920 = cljs.core.chunk_first(seq__23001_23919__$1);
var G__23921 = cljs.core.chunk_rest(seq__23001_23919__$1);
var G__23922 = c__4556__auto___23920;
var G__23923 = cljs.core.count(c__4556__auto___23920);
var G__23924 = (0);
seq__23001_23907 = G__23921;
chunk__23002_23908 = G__23922;
count__23003_23909 = G__23923;
i__23004_23910 = G__23924;
continue;
} else {
var vec__23017_23925 = cljs.core.first(seq__23001_23919__$1);
var col_23926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23017_23925,(0),null);
var infos_23927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23017_23925,(1),null);
encode_cols(infos_23927,source_idx_23845,line_23905,col_23926);


var G__23928 = cljs.core.next(seq__23001_23919__$1);
var G__23929 = null;
var G__23930 = (0);
var G__23931 = (0);
seq__23001_23907 = G__23928;
chunk__23002_23908 = G__23929;
count__23003_23909 = G__23930;
i__23004_23910 = G__23931;
continue;
}
} else {
}
}
break;
}


var G__23932 = cljs.core.next(seq__22923_23886__$1);
var G__23933 = null;
var G__23934 = (0);
var G__23935 = (0);
seq__22923_23849 = G__23932;
chunk__22924_23850 = G__23933;
count__22925_23851 = G__23934;
i__22926_23852 = G__23935;
continue;
}
} else {
}
}
break;
}


var G__23936 = cljs.core.next(seq__22601_23838__$1);
var G__23937 = null;
var G__23938 = (0);
var G__23939 = (0);
seq__22601_23739 = G__23936;
chunk__22602_23740 = G__23937;
count__22603_23741 = G__23938;
i__22604_23742 = G__23939;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__23023 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__22553_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22553_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__22554_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__22554_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22555_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__22555_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__23024 = G__23023;
goog.object.set(G__23024,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__23024;
} else {
return G__23023;
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
var vec__23025 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23025,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23025,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__23031 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23031,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23031,(1),null);
var G__23945 = cljs.core.next(col_map_seq);
var G__23946 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__23031,col,infos,vec__23025,line,col_map){
return (function (v,p__23034){
var map__23035 = p__23034;
var map__23035__$1 = (((((!((map__23035 == null))))?(((((map__23035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23035):map__23035);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23035__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23035__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__23031,col,infos,vec__23025,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__23945;
new_cols = G__23946;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__23947 = cljs.core.next(line_map_seq);
var G__23948 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__23947;
new_lines = G__23948;
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
var seq__23037_23949 = cljs.core.seq(reverse_map);
var chunk__23038_23950 = null;
var count__23039_23951 = (0);
var i__23040_23952 = (0);
while(true){
if((i__23040_23952 < count__23039_23951)){
var vec__23357_23953 = chunk__23038_23950.cljs$core$IIndexed$_nth$arity$2(null,i__23040_23952);
var line_23954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23357_23953,(0),null);
var columns_23955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23357_23953,(1),null);
var seq__23360_23956 = cljs.core.seq(columns_23955);
var chunk__23361_23957 = null;
var count__23362_23958 = (0);
var i__23363_23959 = (0);
while(true){
if((i__23363_23959 < count__23362_23958)){
var vec__23438_23960 = chunk__23361_23957.cljs$core$IIndexed$_nth$arity$2(null,i__23363_23959);
var column_23961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23438_23960,(0),null);
var column_info_23962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23438_23960,(1),null);
var seq__23441_23963 = cljs.core.seq(column_info_23962);
var chunk__23442_23964 = null;
var count__23443_23965 = (0);
var i__23444_23966 = (0);
while(true){
if((i__23444_23966 < count__23443_23965)){
var map__23458_23967 = chunk__23442_23964.cljs$core$IIndexed$_nth$arity$2(null,i__23444_23966);
var map__23458_23968__$1 = (((((!((map__23458_23967 == null))))?(((((map__23458_23967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23458_23967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23458_23967):map__23458_23967);
var gline_23969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23458_23968__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23458_23968__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23458_23968__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23969], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23441_23963,chunk__23442_23964,count__23443_23965,i__23444_23966,seq__23360_23956,chunk__23361_23957,count__23362_23958,i__23363_23959,seq__23037_23949,chunk__23038_23950,count__23039_23951,i__23040_23952,map__23458_23967,map__23458_23968__$1,gline_23969,gcol_23970,name_23971,vec__23438_23960,column_23961,column_info_23962,vec__23357_23953,line_23954,columns_23955,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23970], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23954,new cljs.core.Keyword(null,"col","col",-1959363084),column_23961,new cljs.core.Keyword(null,"name","name",1843675177),name_23971], null));
});})(seq__23441_23963,chunk__23442_23964,count__23443_23965,i__23444_23966,seq__23360_23956,chunk__23361_23957,count__23362_23958,i__23363_23959,seq__23037_23949,chunk__23038_23950,count__23039_23951,i__23040_23952,map__23458_23967,map__23458_23968__$1,gline_23969,gcol_23970,name_23971,vec__23438_23960,column_23961,column_info_23962,vec__23357_23953,line_23954,columns_23955,inverted))
,cljs.core.sorted_map()));


var G__23982 = seq__23441_23963;
var G__23983 = chunk__23442_23964;
var G__23984 = count__23443_23965;
var G__23985 = (i__23444_23966 + (1));
seq__23441_23963 = G__23982;
chunk__23442_23964 = G__23983;
count__23443_23965 = G__23984;
i__23444_23966 = G__23985;
continue;
} else {
var temp__5735__auto___23986 = cljs.core.seq(seq__23441_23963);
if(temp__5735__auto___23986){
var seq__23441_23987__$1 = temp__5735__auto___23986;
if(cljs.core.chunked_seq_QMARK_(seq__23441_23987__$1)){
var c__4556__auto___23988 = cljs.core.chunk_first(seq__23441_23987__$1);
var G__23989 = cljs.core.chunk_rest(seq__23441_23987__$1);
var G__23990 = c__4556__auto___23988;
var G__23991 = cljs.core.count(c__4556__auto___23988);
var G__23992 = (0);
seq__23441_23963 = G__23989;
chunk__23442_23964 = G__23990;
count__23443_23965 = G__23991;
i__23444_23966 = G__23992;
continue;
} else {
var map__23464_24001 = cljs.core.first(seq__23441_23987__$1);
var map__23464_24002__$1 = (((((!((map__23464_24001 == null))))?(((((map__23464_24001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23464_24001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23464_24001):map__23464_24001);
var gline_24003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23464_24002__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23464_24002__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23464_24002__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24003], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23441_23963,chunk__23442_23964,count__23443_23965,i__23444_23966,seq__23360_23956,chunk__23361_23957,count__23362_23958,i__23363_23959,seq__23037_23949,chunk__23038_23950,count__23039_23951,i__23040_23952,map__23464_24001,map__23464_24002__$1,gline_24003,gcol_24004,name_24005,seq__23441_23987__$1,temp__5735__auto___23986,vec__23438_23960,column_23961,column_info_23962,vec__23357_23953,line_23954,columns_23955,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24004], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23954,new cljs.core.Keyword(null,"col","col",-1959363084),column_23961,new cljs.core.Keyword(null,"name","name",1843675177),name_24005], null));
});})(seq__23441_23963,chunk__23442_23964,count__23443_23965,i__23444_23966,seq__23360_23956,chunk__23361_23957,count__23362_23958,i__23363_23959,seq__23037_23949,chunk__23038_23950,count__23039_23951,i__23040_23952,map__23464_24001,map__23464_24002__$1,gline_24003,gcol_24004,name_24005,seq__23441_23987__$1,temp__5735__auto___23986,vec__23438_23960,column_23961,column_info_23962,vec__23357_23953,line_23954,columns_23955,inverted))
,cljs.core.sorted_map()));


var G__24007 = cljs.core.next(seq__23441_23987__$1);
var G__24008 = null;
var G__24009 = (0);
var G__24010 = (0);
seq__23441_23963 = G__24007;
chunk__23442_23964 = G__24008;
count__23443_23965 = G__24009;
i__23444_23966 = G__24010;
continue;
}
} else {
}
}
break;
}


var G__24011 = seq__23360_23956;
var G__24012 = chunk__23361_23957;
var G__24013 = count__23362_23958;
var G__24014 = (i__23363_23959 + (1));
seq__23360_23956 = G__24011;
chunk__23361_23957 = G__24012;
count__23362_23958 = G__24013;
i__23363_23959 = G__24014;
continue;
} else {
var temp__5735__auto___24015 = cljs.core.seq(seq__23360_23956);
if(temp__5735__auto___24015){
var seq__23360_24016__$1 = temp__5735__auto___24015;
if(cljs.core.chunked_seq_QMARK_(seq__23360_24016__$1)){
var c__4556__auto___24017 = cljs.core.chunk_first(seq__23360_24016__$1);
var G__24018 = cljs.core.chunk_rest(seq__23360_24016__$1);
var G__24019 = c__4556__auto___24017;
var G__24020 = cljs.core.count(c__4556__auto___24017);
var G__24021 = (0);
seq__23360_23956 = G__24018;
chunk__23361_23957 = G__24019;
count__23362_23958 = G__24020;
i__23363_23959 = G__24021;
continue;
} else {
var vec__23466_24022 = cljs.core.first(seq__23360_24016__$1);
var column_24023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23466_24022,(0),null);
var column_info_24024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23466_24022,(1),null);
var seq__23469_24025 = cljs.core.seq(column_info_24024);
var chunk__23470_24026 = null;
var count__23471_24027 = (0);
var i__23472_24028 = (0);
while(true){
if((i__23472_24028 < count__23471_24027)){
var map__23479_24029 = chunk__23470_24026.cljs$core$IIndexed$_nth$arity$2(null,i__23472_24028);
var map__23479_24030__$1 = (((((!((map__23479_24029 == null))))?(((((map__23479_24029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23479_24029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23479_24029):map__23479_24029);
var gline_24031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23479_24030__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23479_24030__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23479_24030__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24031], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23469_24025,chunk__23470_24026,count__23471_24027,i__23472_24028,seq__23360_23956,chunk__23361_23957,count__23362_23958,i__23363_23959,seq__23037_23949,chunk__23038_23950,count__23039_23951,i__23040_23952,map__23479_24029,map__23479_24030__$1,gline_24031,gcol_24032,name_24033,vec__23466_24022,column_24023,column_info_24024,seq__23360_24016__$1,temp__5735__auto___24015,vec__23357_23953,line_23954,columns_23955,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24032], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23954,new cljs.core.Keyword(null,"col","col",-1959363084),column_24023,new cljs.core.Keyword(null,"name","name",1843675177),name_24033], null));
});})(seq__23469_24025,chunk__23470_24026,count__23471_24027,i__23472_24028,seq__23360_23956,chunk__23361_23957,count__23362_23958,i__23363_23959,seq__23037_23949,chunk__23038_23950,count__23039_23951,i__23040_23952,map__23479_24029,map__23479_24030__$1,gline_24031,gcol_24032,name_24033,vec__23466_24022,column_24023,column_info_24024,seq__23360_24016__$1,temp__5735__auto___24015,vec__23357_23953,line_23954,columns_23955,inverted))
,cljs.core.sorted_map()));


var G__24040 = seq__23469_24025;
var G__24041 = chunk__23470_24026;
var G__24042 = count__23471_24027;
var G__24043 = (i__23472_24028 + (1));
seq__23469_24025 = G__24040;
chunk__23470_24026 = G__24041;
count__23471_24027 = G__24042;
i__23472_24028 = G__24043;
continue;
} else {
var temp__5735__auto___24044__$1 = cljs.core.seq(seq__23469_24025);
if(temp__5735__auto___24044__$1){
var seq__23469_24045__$1 = temp__5735__auto___24044__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23469_24045__$1)){
var c__4556__auto___24046 = cljs.core.chunk_first(seq__23469_24045__$1);
var G__24047 = cljs.core.chunk_rest(seq__23469_24045__$1);
var G__24048 = c__4556__auto___24046;
var G__24049 = cljs.core.count(c__4556__auto___24046);
var G__24050 = (0);
seq__23469_24025 = G__24047;
chunk__23470_24026 = G__24048;
count__23471_24027 = G__24049;
i__23472_24028 = G__24050;
continue;
} else {
var map__23481_24054 = cljs.core.first(seq__23469_24045__$1);
var map__23481_24055__$1 = (((((!((map__23481_24054 == null))))?(((((map__23481_24054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23481_24054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23481_24054):map__23481_24054);
var gline_24056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23481_24055__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23481_24055__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23481_24055__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24056], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23469_24025,chunk__23470_24026,count__23471_24027,i__23472_24028,seq__23360_23956,chunk__23361_23957,count__23362_23958,i__23363_23959,seq__23037_23949,chunk__23038_23950,count__23039_23951,i__23040_23952,map__23481_24054,map__23481_24055__$1,gline_24056,gcol_24057,name_24058,seq__23469_24045__$1,temp__5735__auto___24044__$1,vec__23466_24022,column_24023,column_info_24024,seq__23360_24016__$1,temp__5735__auto___24015,vec__23357_23953,line_23954,columns_23955,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24057], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23954,new cljs.core.Keyword(null,"col","col",-1959363084),column_24023,new cljs.core.Keyword(null,"name","name",1843675177),name_24058], null));
});})(seq__23469_24025,chunk__23470_24026,count__23471_24027,i__23472_24028,seq__23360_23956,chunk__23361_23957,count__23362_23958,i__23363_23959,seq__23037_23949,chunk__23038_23950,count__23039_23951,i__23040_23952,map__23481_24054,map__23481_24055__$1,gline_24056,gcol_24057,name_24058,seq__23469_24045__$1,temp__5735__auto___24044__$1,vec__23466_24022,column_24023,column_info_24024,seq__23360_24016__$1,temp__5735__auto___24015,vec__23357_23953,line_23954,columns_23955,inverted))
,cljs.core.sorted_map()));


var G__24060 = cljs.core.next(seq__23469_24045__$1);
var G__24061 = null;
var G__24062 = (0);
var G__24063 = (0);
seq__23469_24025 = G__24060;
chunk__23470_24026 = G__24061;
count__23471_24027 = G__24062;
i__23472_24028 = G__24063;
continue;
}
} else {
}
}
break;
}


var G__24064 = cljs.core.next(seq__23360_24016__$1);
var G__24065 = null;
var G__24066 = (0);
var G__24067 = (0);
seq__23360_23956 = G__24064;
chunk__23361_23957 = G__24065;
count__23362_23958 = G__24066;
i__23363_23959 = G__24067;
continue;
}
} else {
}
}
break;
}


var G__24068 = seq__23037_23949;
var G__24069 = chunk__23038_23950;
var G__24070 = count__23039_23951;
var G__24071 = (i__23040_23952 + (1));
seq__23037_23949 = G__24068;
chunk__23038_23950 = G__24069;
count__23039_23951 = G__24070;
i__23040_23952 = G__24071;
continue;
} else {
var temp__5735__auto___24072 = cljs.core.seq(seq__23037_23949);
if(temp__5735__auto___24072){
var seq__23037_24073__$1 = temp__5735__auto___24072;
if(cljs.core.chunked_seq_QMARK_(seq__23037_24073__$1)){
var c__4556__auto___24074 = cljs.core.chunk_first(seq__23037_24073__$1);
var G__24075 = cljs.core.chunk_rest(seq__23037_24073__$1);
var G__24076 = c__4556__auto___24074;
var G__24077 = cljs.core.count(c__4556__auto___24074);
var G__24078 = (0);
seq__23037_23949 = G__24075;
chunk__23038_23950 = G__24076;
count__23039_23951 = G__24077;
i__23040_23952 = G__24078;
continue;
} else {
var vec__23487_24089 = cljs.core.first(seq__23037_24073__$1);
var line_24090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23487_24089,(0),null);
var columns_24091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23487_24089,(1),null);
var seq__23490_24092 = cljs.core.seq(columns_24091);
var chunk__23491_24093 = null;
var count__23492_24094 = (0);
var i__23493_24095 = (0);
while(true){
if((i__23493_24095 < count__23492_24094)){
var vec__23531_24099 = chunk__23491_24093.cljs$core$IIndexed$_nth$arity$2(null,i__23493_24095);
var column_24100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23531_24099,(0),null);
var column_info_24101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23531_24099,(1),null);
var seq__23534_24102 = cljs.core.seq(column_info_24101);
var chunk__23535_24103 = null;
var count__23536_24104 = (0);
var i__23537_24105 = (0);
while(true){
if((i__23537_24105 < count__23536_24104)){
var map__23550_24106 = chunk__23535_24103.cljs$core$IIndexed$_nth$arity$2(null,i__23537_24105);
var map__23550_24107__$1 = (((((!((map__23550_24106 == null))))?(((((map__23550_24106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23550_24106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23550_24106):map__23550_24106);
var gline_24108 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23550_24107__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23550_24107__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23550_24107__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24108], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23534_24102,chunk__23535_24103,count__23536_24104,i__23537_24105,seq__23490_24092,chunk__23491_24093,count__23492_24094,i__23493_24095,seq__23037_23949,chunk__23038_23950,count__23039_23951,i__23040_23952,map__23550_24106,map__23550_24107__$1,gline_24108,gcol_24109,name_24110,vec__23531_24099,column_24100,column_info_24101,vec__23487_24089,line_24090,columns_24091,seq__23037_24073__$1,temp__5735__auto___24072,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24109], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24090,new cljs.core.Keyword(null,"col","col",-1959363084),column_24100,new cljs.core.Keyword(null,"name","name",1843675177),name_24110], null));
});})(seq__23534_24102,chunk__23535_24103,count__23536_24104,i__23537_24105,seq__23490_24092,chunk__23491_24093,count__23492_24094,i__23493_24095,seq__23037_23949,chunk__23038_23950,count__23039_23951,i__23040_23952,map__23550_24106,map__23550_24107__$1,gline_24108,gcol_24109,name_24110,vec__23531_24099,column_24100,column_info_24101,vec__23487_24089,line_24090,columns_24091,seq__23037_24073__$1,temp__5735__auto___24072,inverted))
,cljs.core.sorted_map()));


var G__24117 = seq__23534_24102;
var G__24118 = chunk__23535_24103;
var G__24119 = count__23536_24104;
var G__24120 = (i__23537_24105 + (1));
seq__23534_24102 = G__24117;
chunk__23535_24103 = G__24118;
count__23536_24104 = G__24119;
i__23537_24105 = G__24120;
continue;
} else {
var temp__5735__auto___24121__$1 = cljs.core.seq(seq__23534_24102);
if(temp__5735__auto___24121__$1){
var seq__23534_24122__$1 = temp__5735__auto___24121__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23534_24122__$1)){
var c__4556__auto___24123 = cljs.core.chunk_first(seq__23534_24122__$1);
var G__24124 = cljs.core.chunk_rest(seq__23534_24122__$1);
var G__24125 = c__4556__auto___24123;
var G__24126 = cljs.core.count(c__4556__auto___24123);
var G__24127 = (0);
seq__23534_24102 = G__24124;
chunk__23535_24103 = G__24125;
count__23536_24104 = G__24126;
i__23537_24105 = G__24127;
continue;
} else {
var map__23572_24128 = cljs.core.first(seq__23534_24122__$1);
var map__23572_24129__$1 = (((((!((map__23572_24128 == null))))?(((((map__23572_24128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23572_24128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23572_24128):map__23572_24128);
var gline_24130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23572_24129__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23572_24129__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23572_24129__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24130], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23534_24102,chunk__23535_24103,count__23536_24104,i__23537_24105,seq__23490_24092,chunk__23491_24093,count__23492_24094,i__23493_24095,seq__23037_23949,chunk__23038_23950,count__23039_23951,i__23040_23952,map__23572_24128,map__23572_24129__$1,gline_24130,gcol_24131,name_24132,seq__23534_24122__$1,temp__5735__auto___24121__$1,vec__23531_24099,column_24100,column_info_24101,vec__23487_24089,line_24090,columns_24091,seq__23037_24073__$1,temp__5735__auto___24072,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24131], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24090,new cljs.core.Keyword(null,"col","col",-1959363084),column_24100,new cljs.core.Keyword(null,"name","name",1843675177),name_24132], null));
});})(seq__23534_24102,chunk__23535_24103,count__23536_24104,i__23537_24105,seq__23490_24092,chunk__23491_24093,count__23492_24094,i__23493_24095,seq__23037_23949,chunk__23038_23950,count__23039_23951,i__23040_23952,map__23572_24128,map__23572_24129__$1,gline_24130,gcol_24131,name_24132,seq__23534_24122__$1,temp__5735__auto___24121__$1,vec__23531_24099,column_24100,column_info_24101,vec__23487_24089,line_24090,columns_24091,seq__23037_24073__$1,temp__5735__auto___24072,inverted))
,cljs.core.sorted_map()));


var G__24133 = cljs.core.next(seq__23534_24122__$1);
var G__24134 = null;
var G__24135 = (0);
var G__24136 = (0);
seq__23534_24102 = G__24133;
chunk__23535_24103 = G__24134;
count__23536_24104 = G__24135;
i__23537_24105 = G__24136;
continue;
}
} else {
}
}
break;
}


var G__24137 = seq__23490_24092;
var G__24138 = chunk__23491_24093;
var G__24139 = count__23492_24094;
var G__24140 = (i__23493_24095 + (1));
seq__23490_24092 = G__24137;
chunk__23491_24093 = G__24138;
count__23492_24094 = G__24139;
i__23493_24095 = G__24140;
continue;
} else {
var temp__5735__auto___24141__$1 = cljs.core.seq(seq__23490_24092);
if(temp__5735__auto___24141__$1){
var seq__23490_24142__$1 = temp__5735__auto___24141__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23490_24142__$1)){
var c__4556__auto___24143 = cljs.core.chunk_first(seq__23490_24142__$1);
var G__24144 = cljs.core.chunk_rest(seq__23490_24142__$1);
var G__24145 = c__4556__auto___24143;
var G__24146 = cljs.core.count(c__4556__auto___24143);
var G__24147 = (0);
seq__23490_24092 = G__24144;
chunk__23491_24093 = G__24145;
count__23492_24094 = G__24146;
i__23493_24095 = G__24147;
continue;
} else {
var vec__23577_24148 = cljs.core.first(seq__23490_24142__$1);
var column_24149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23577_24148,(0),null);
var column_info_24150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23577_24148,(1),null);
var seq__23580_24153 = cljs.core.seq(column_info_24150);
var chunk__23581_24154 = null;
var count__23582_24155 = (0);
var i__23583_24156 = (0);
while(true){
if((i__23583_24156 < count__23582_24155)){
var map__23616_24157 = chunk__23581_24154.cljs$core$IIndexed$_nth$arity$2(null,i__23583_24156);
var map__23616_24158__$1 = (((((!((map__23616_24157 == null))))?(((((map__23616_24157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23616_24157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23616_24157):map__23616_24157);
var gline_24159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23616_24158__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23616_24158__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23616_24158__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24159], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23580_24153,chunk__23581_24154,count__23582_24155,i__23583_24156,seq__23490_24092,chunk__23491_24093,count__23492_24094,i__23493_24095,seq__23037_23949,chunk__23038_23950,count__23039_23951,i__23040_23952,map__23616_24157,map__23616_24158__$1,gline_24159,gcol_24160,name_24161,vec__23577_24148,column_24149,column_info_24150,seq__23490_24142__$1,temp__5735__auto___24141__$1,vec__23487_24089,line_24090,columns_24091,seq__23037_24073__$1,temp__5735__auto___24072,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24160], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24090,new cljs.core.Keyword(null,"col","col",-1959363084),column_24149,new cljs.core.Keyword(null,"name","name",1843675177),name_24161], null));
});})(seq__23580_24153,chunk__23581_24154,count__23582_24155,i__23583_24156,seq__23490_24092,chunk__23491_24093,count__23492_24094,i__23493_24095,seq__23037_23949,chunk__23038_23950,count__23039_23951,i__23040_23952,map__23616_24157,map__23616_24158__$1,gline_24159,gcol_24160,name_24161,vec__23577_24148,column_24149,column_info_24150,seq__23490_24142__$1,temp__5735__auto___24141__$1,vec__23487_24089,line_24090,columns_24091,seq__23037_24073__$1,temp__5735__auto___24072,inverted))
,cljs.core.sorted_map()));


var G__24166 = seq__23580_24153;
var G__24167 = chunk__23581_24154;
var G__24168 = count__23582_24155;
var G__24169 = (i__23583_24156 + (1));
seq__23580_24153 = G__24166;
chunk__23581_24154 = G__24167;
count__23582_24155 = G__24168;
i__23583_24156 = G__24169;
continue;
} else {
var temp__5735__auto___24171__$2 = cljs.core.seq(seq__23580_24153);
if(temp__5735__auto___24171__$2){
var seq__23580_24172__$1 = temp__5735__auto___24171__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23580_24172__$1)){
var c__4556__auto___24173 = cljs.core.chunk_first(seq__23580_24172__$1);
var G__24174 = cljs.core.chunk_rest(seq__23580_24172__$1);
var G__24175 = c__4556__auto___24173;
var G__24176 = cljs.core.count(c__4556__auto___24173);
var G__24177 = (0);
seq__23580_24153 = G__24174;
chunk__23581_24154 = G__24175;
count__23582_24155 = G__24176;
i__23583_24156 = G__24177;
continue;
} else {
var map__23621_24178 = cljs.core.first(seq__23580_24172__$1);
var map__23621_24179__$1 = (((((!((map__23621_24178 == null))))?(((((map__23621_24178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23621_24178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23621_24178):map__23621_24178);
var gline_24180 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23621_24179__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23621_24179__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23621_24179__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24180], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23580_24153,chunk__23581_24154,count__23582_24155,i__23583_24156,seq__23490_24092,chunk__23491_24093,count__23492_24094,i__23493_24095,seq__23037_23949,chunk__23038_23950,count__23039_23951,i__23040_23952,map__23621_24178,map__23621_24179__$1,gline_24180,gcol_24181,name_24182,seq__23580_24172__$1,temp__5735__auto___24171__$2,vec__23577_24148,column_24149,column_info_24150,seq__23490_24142__$1,temp__5735__auto___24141__$1,vec__23487_24089,line_24090,columns_24091,seq__23037_24073__$1,temp__5735__auto___24072,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24181], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24090,new cljs.core.Keyword(null,"col","col",-1959363084),column_24149,new cljs.core.Keyword(null,"name","name",1843675177),name_24182], null));
});})(seq__23580_24153,chunk__23581_24154,count__23582_24155,i__23583_24156,seq__23490_24092,chunk__23491_24093,count__23492_24094,i__23493_24095,seq__23037_23949,chunk__23038_23950,count__23039_23951,i__23040_23952,map__23621_24178,map__23621_24179__$1,gline_24180,gcol_24181,name_24182,seq__23580_24172__$1,temp__5735__auto___24171__$2,vec__23577_24148,column_24149,column_info_24150,seq__23490_24142__$1,temp__5735__auto___24141__$1,vec__23487_24089,line_24090,columns_24091,seq__23037_24073__$1,temp__5735__auto___24072,inverted))
,cljs.core.sorted_map()));


var G__24188 = cljs.core.next(seq__23580_24172__$1);
var G__24189 = null;
var G__24190 = (0);
var G__24191 = (0);
seq__23580_24153 = G__24188;
chunk__23581_24154 = G__24189;
count__23582_24155 = G__24190;
i__23583_24156 = G__24191;
continue;
}
} else {
}
}
break;
}


var G__24193 = cljs.core.next(seq__23490_24142__$1);
var G__24194 = null;
var G__24195 = (0);
var G__24196 = (0);
seq__23490_24092 = G__24193;
chunk__23491_24093 = G__24194;
count__23492_24094 = G__24195;
i__23493_24095 = G__24196;
continue;
}
} else {
}
}
break;
}


var G__24197 = cljs.core.next(seq__23037_24073__$1);
var G__24198 = null;
var G__24199 = (0);
var G__24200 = (0);
seq__23037_23949 = G__24197;
chunk__23038_23950 = G__24198;
count__23039_23951 = G__24199;
i__23040_23952 = G__24200;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
