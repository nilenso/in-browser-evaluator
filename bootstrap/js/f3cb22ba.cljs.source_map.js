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
var vec__22507 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22507,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22507,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22507,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22507,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22507,(4),null);
var vec__22510 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22510,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22510,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22510,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22510,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22510,(4),null);
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
var map__22513 = segmap;
var map__22513__$1 = (((((!((map__22513 == null))))?(((((map__22513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22513):map__22513);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22513__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22513__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22513__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22513__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22513__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__22516 = arguments.length;
switch (G__22516) {
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
var G__23301 = cljs.core.next(segs__$1);
var G__23302 = nrelseg;
var G__23303 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23301;
relseg__$1 = G__23302;
result__$1 = G__23303;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22523,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22523,(1),null);
var G__23304 = (gline + (1));
var G__23305 = cljs.core.next(lines__$1);
var G__23306 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23307 = result__$1;
gline = G__23304;
lines__$1 = G__23305;
relseg = G__23306;
result = G__23307;
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
var G__23310 = cljs.core.next(segs__$1);
var G__23311 = nrelseg;
var G__23312 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23310;
relseg__$1 = G__23311;
result__$1 = G__23312;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22534,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22534,(1),null);
var G__23313 = (gline + (1));
var G__23314 = cljs.core.next(lines__$1);
var G__23315 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23316 = result__$1;
gline = G__23313;
lines__$1 = G__23314;
relseg = G__23315;
result = G__23316;
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
var seq__22556 = cljs.core.seq(infos);
var chunk__22557 = null;
var count__22558 = (0);
var i__22559 = (0);
while(true){
if((i__22559 < count__22558)){
var info = chunk__22557.cljs$core$IIndexed$_nth$arity$2(null,i__22559);
var segv_23317 = info__GT_segv(info,source_idx,line,col);
var gline_23318 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23319 = cljs.core.count(cljs.core.deref(lines));
if((gline_23318 > (lc_23319 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22556,chunk__22557,count__22558,i__22559,segv_23317,gline_23318,lc_23319,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23318 - (lc_23319 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23317], null));
});})(seq__22556,chunk__22557,count__22558,i__22559,segv_23317,gline_23318,lc_23319,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22556,chunk__22557,count__22558,i__22559,segv_23317,gline_23318,lc_23319,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23318], null),cljs.core.conj,segv_23317);
});})(seq__22556,chunk__22557,count__22558,i__22559,segv_23317,gline_23318,lc_23319,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23320 = seq__22556;
var G__23321 = chunk__22557;
var G__23322 = count__22558;
var G__23323 = (i__22559 + (1));
seq__22556 = G__23320;
chunk__22557 = G__23321;
count__22558 = G__23322;
i__22559 = G__23323;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__22556);
if(temp__5735__auto__){
var seq__22556__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22556__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__22556__$1);
var G__23324 = cljs.core.chunk_rest(seq__22556__$1);
var G__23325 = c__4556__auto__;
var G__23326 = cljs.core.count(c__4556__auto__);
var G__23327 = (0);
seq__22556 = G__23324;
chunk__22557 = G__23325;
count__22558 = G__23326;
i__22559 = G__23327;
continue;
} else {
var info = cljs.core.first(seq__22556__$1);
var segv_23328 = info__GT_segv(info,source_idx,line,col);
var gline_23329 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23330 = cljs.core.count(cljs.core.deref(lines));
if((gline_23329 > (lc_23330 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22556,chunk__22557,count__22558,i__22559,segv_23328,gline_23329,lc_23330,info,seq__22556__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23329 - (lc_23330 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23328], null));
});})(seq__22556,chunk__22557,count__22558,i__22559,segv_23328,gline_23329,lc_23330,info,seq__22556__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22556,chunk__22557,count__22558,i__22559,segv_23328,gline_23329,lc_23330,info,seq__22556__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23329], null),cljs.core.conj,segv_23328);
});})(seq__22556,chunk__22557,count__22558,i__22559,segv_23328,gline_23329,lc_23330,info,seq__22556__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23336 = cljs.core.next(seq__22556__$1);
var G__23337 = null;
var G__23338 = (0);
var G__23339 = (0);
seq__22556 = G__23336;
chunk__22557 = G__23337;
count__22558 = G__23338;
i__22559 = G__23339;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__22564_23340 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__22565_23341 = null;
var count__22566_23342 = (0);
var i__22567_23343 = (0);
while(true){
if((i__22567_23343 < count__22566_23342)){
var vec__22779_23344 = chunk__22565_23341.cljs$core$IIndexed$_nth$arity$2(null,i__22567_23343);
var source_idx_23345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22779_23344,(0),null);
var vec__22782_23346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22779_23344,(1),null);
var __23347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22782_23346,(0),null);
var lines_23348__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22782_23346,(1),null);
var seq__22785_23349 = cljs.core.seq(lines_23348__$1);
var chunk__22786_23350 = null;
var count__22787_23351 = (0);
var i__22788_23352 = (0);
while(true){
if((i__22788_23352 < count__22787_23351)){
var vec__22838_23353 = chunk__22786_23350.cljs$core$IIndexed$_nth$arity$2(null,i__22788_23352);
var line_23354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22838_23353,(0),null);
var cols_23355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22838_23353,(1),null);
var seq__22841_23356 = cljs.core.seq(cols_23355);
var chunk__22842_23357 = null;
var count__22843_23358 = (0);
var i__22844_23359 = (0);
while(true){
if((i__22844_23359 < count__22843_23358)){
var vec__22851_23360 = chunk__22842_23357.cljs$core$IIndexed$_nth$arity$2(null,i__22844_23359);
var col_23361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22851_23360,(0),null);
var infos_23362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22851_23360,(1),null);
encode_cols(infos_23362,source_idx_23345,line_23354,col_23361);


var G__23363 = seq__22841_23356;
var G__23364 = chunk__22842_23357;
var G__23365 = count__22843_23358;
var G__23366 = (i__22844_23359 + (1));
seq__22841_23356 = G__23363;
chunk__22842_23357 = G__23364;
count__22843_23358 = G__23365;
i__22844_23359 = G__23366;
continue;
} else {
var temp__5735__auto___23367 = cljs.core.seq(seq__22841_23356);
if(temp__5735__auto___23367){
var seq__22841_23368__$1 = temp__5735__auto___23367;
if(cljs.core.chunked_seq_QMARK_(seq__22841_23368__$1)){
var c__4556__auto___23369 = cljs.core.chunk_first(seq__22841_23368__$1);
var G__23370 = cljs.core.chunk_rest(seq__22841_23368__$1);
var G__23371 = c__4556__auto___23369;
var G__23372 = cljs.core.count(c__4556__auto___23369);
var G__23373 = (0);
seq__22841_23356 = G__23370;
chunk__22842_23357 = G__23371;
count__22843_23358 = G__23372;
i__22844_23359 = G__23373;
continue;
} else {
var vec__22854_23374 = cljs.core.first(seq__22841_23368__$1);
var col_23375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22854_23374,(0),null);
var infos_23376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22854_23374,(1),null);
encode_cols(infos_23376,source_idx_23345,line_23354,col_23375);


var G__23384 = cljs.core.next(seq__22841_23368__$1);
var G__23385 = null;
var G__23386 = (0);
var G__23387 = (0);
seq__22841_23356 = G__23384;
chunk__22842_23357 = G__23385;
count__22843_23358 = G__23386;
i__22844_23359 = G__23387;
continue;
}
} else {
}
}
break;
}


var G__23388 = seq__22785_23349;
var G__23389 = chunk__22786_23350;
var G__23390 = count__22787_23351;
var G__23391 = (i__22788_23352 + (1));
seq__22785_23349 = G__23388;
chunk__22786_23350 = G__23389;
count__22787_23351 = G__23390;
i__22788_23352 = G__23391;
continue;
} else {
var temp__5735__auto___23392 = cljs.core.seq(seq__22785_23349);
if(temp__5735__auto___23392){
var seq__22785_23393__$1 = temp__5735__auto___23392;
if(cljs.core.chunked_seq_QMARK_(seq__22785_23393__$1)){
var c__4556__auto___23394 = cljs.core.chunk_first(seq__22785_23393__$1);
var G__23395 = cljs.core.chunk_rest(seq__22785_23393__$1);
var G__23396 = c__4556__auto___23394;
var G__23397 = cljs.core.count(c__4556__auto___23394);
var G__23398 = (0);
seq__22785_23349 = G__23395;
chunk__22786_23350 = G__23396;
count__22787_23351 = G__23397;
i__22788_23352 = G__23398;
continue;
} else {
var vec__22857_23399 = cljs.core.first(seq__22785_23393__$1);
var line_23400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22857_23399,(0),null);
var cols_23401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22857_23399,(1),null);
var seq__22860_23402 = cljs.core.seq(cols_23401);
var chunk__22861_23403 = null;
var count__22862_23404 = (0);
var i__22863_23405 = (0);
while(true){
if((i__22863_23405 < count__22862_23404)){
var vec__22870_23406 = chunk__22861_23403.cljs$core$IIndexed$_nth$arity$2(null,i__22863_23405);
var col_23407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22870_23406,(0),null);
var infos_23408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22870_23406,(1),null);
encode_cols(infos_23408,source_idx_23345,line_23400,col_23407);


var G__23409 = seq__22860_23402;
var G__23410 = chunk__22861_23403;
var G__23411 = count__22862_23404;
var G__23412 = (i__22863_23405 + (1));
seq__22860_23402 = G__23409;
chunk__22861_23403 = G__23410;
count__22862_23404 = G__23411;
i__22863_23405 = G__23412;
continue;
} else {
var temp__5735__auto___23413__$1 = cljs.core.seq(seq__22860_23402);
if(temp__5735__auto___23413__$1){
var seq__22860_23414__$1 = temp__5735__auto___23413__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22860_23414__$1)){
var c__4556__auto___23415 = cljs.core.chunk_first(seq__22860_23414__$1);
var G__23416 = cljs.core.chunk_rest(seq__22860_23414__$1);
var G__23417 = c__4556__auto___23415;
var G__23418 = cljs.core.count(c__4556__auto___23415);
var G__23419 = (0);
seq__22860_23402 = G__23416;
chunk__22861_23403 = G__23417;
count__22862_23404 = G__23418;
i__22863_23405 = G__23419;
continue;
} else {
var vec__22878_23420 = cljs.core.first(seq__22860_23414__$1);
var col_23421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22878_23420,(0),null);
var infos_23422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22878_23420,(1),null);
encode_cols(infos_23422,source_idx_23345,line_23400,col_23421);


var G__23423 = cljs.core.next(seq__22860_23414__$1);
var G__23424 = null;
var G__23425 = (0);
var G__23426 = (0);
seq__22860_23402 = G__23423;
chunk__22861_23403 = G__23424;
count__22862_23404 = G__23425;
i__22863_23405 = G__23426;
continue;
}
} else {
}
}
break;
}


var G__23427 = cljs.core.next(seq__22785_23393__$1);
var G__23428 = null;
var G__23429 = (0);
var G__23430 = (0);
seq__22785_23349 = G__23427;
chunk__22786_23350 = G__23428;
count__22787_23351 = G__23429;
i__22788_23352 = G__23430;
continue;
}
} else {
}
}
break;
}


var G__23431 = seq__22564_23340;
var G__23432 = chunk__22565_23341;
var G__23433 = count__22566_23342;
var G__23434 = (i__22567_23343 + (1));
seq__22564_23340 = G__23431;
chunk__22565_23341 = G__23432;
count__22566_23342 = G__23433;
i__22567_23343 = G__23434;
continue;
} else {
var temp__5735__auto___23435 = cljs.core.seq(seq__22564_23340);
if(temp__5735__auto___23435){
var seq__22564_23436__$1 = temp__5735__auto___23435;
if(cljs.core.chunked_seq_QMARK_(seq__22564_23436__$1)){
var c__4556__auto___23437 = cljs.core.chunk_first(seq__22564_23436__$1);
var G__23438 = cljs.core.chunk_rest(seq__22564_23436__$1);
var G__23439 = c__4556__auto___23437;
var G__23440 = cljs.core.count(c__4556__auto___23437);
var G__23441 = (0);
seq__22564_23340 = G__23438;
chunk__22565_23341 = G__23439;
count__22566_23342 = G__23440;
i__22567_23343 = G__23441;
continue;
} else {
var vec__22881_23442 = cljs.core.first(seq__22564_23436__$1);
var source_idx_23443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22881_23442,(0),null);
var vec__22884_23444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22881_23442,(1),null);
var __23445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22884_23444,(0),null);
var lines_23446__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22884_23444,(1),null);
var seq__22887_23447 = cljs.core.seq(lines_23446__$1);
var chunk__22888_23448 = null;
var count__22889_23449 = (0);
var i__22890_23450 = (0);
while(true){
if((i__22890_23450 < count__22889_23449)){
var vec__22934_23451 = chunk__22888_23448.cljs$core$IIndexed$_nth$arity$2(null,i__22890_23450);
var line_23452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22934_23451,(0),null);
var cols_23453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22934_23451,(1),null);
var seq__22937_23454 = cljs.core.seq(cols_23453);
var chunk__22938_23455 = null;
var count__22939_23456 = (0);
var i__22940_23457 = (0);
while(true){
if((i__22940_23457 < count__22939_23456)){
var vec__22947_23458 = chunk__22938_23455.cljs$core$IIndexed$_nth$arity$2(null,i__22940_23457);
var col_23459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22947_23458,(0),null);
var infos_23460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22947_23458,(1),null);
encode_cols(infos_23460,source_idx_23443,line_23452,col_23459);


var G__23461 = seq__22937_23454;
var G__23462 = chunk__22938_23455;
var G__23463 = count__22939_23456;
var G__23464 = (i__22940_23457 + (1));
seq__22937_23454 = G__23461;
chunk__22938_23455 = G__23462;
count__22939_23456 = G__23463;
i__22940_23457 = G__23464;
continue;
} else {
var temp__5735__auto___23465__$1 = cljs.core.seq(seq__22937_23454);
if(temp__5735__auto___23465__$1){
var seq__22937_23466__$1 = temp__5735__auto___23465__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22937_23466__$1)){
var c__4556__auto___23467 = cljs.core.chunk_first(seq__22937_23466__$1);
var G__23468 = cljs.core.chunk_rest(seq__22937_23466__$1);
var G__23469 = c__4556__auto___23467;
var G__23470 = cljs.core.count(c__4556__auto___23467);
var G__23471 = (0);
seq__22937_23454 = G__23468;
chunk__22938_23455 = G__23469;
count__22939_23456 = G__23470;
i__22940_23457 = G__23471;
continue;
} else {
var vec__22950_23472 = cljs.core.first(seq__22937_23466__$1);
var col_23473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22950_23472,(0),null);
var infos_23474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22950_23472,(1),null);
encode_cols(infos_23474,source_idx_23443,line_23452,col_23473);


var G__23475 = cljs.core.next(seq__22937_23466__$1);
var G__23476 = null;
var G__23477 = (0);
var G__23478 = (0);
seq__22937_23454 = G__23475;
chunk__22938_23455 = G__23476;
count__22939_23456 = G__23477;
i__22940_23457 = G__23478;
continue;
}
} else {
}
}
break;
}


var G__23479 = seq__22887_23447;
var G__23480 = chunk__22888_23448;
var G__23481 = count__22889_23449;
var G__23482 = (i__22890_23450 + (1));
seq__22887_23447 = G__23479;
chunk__22888_23448 = G__23480;
count__22889_23449 = G__23481;
i__22890_23450 = G__23482;
continue;
} else {
var temp__5735__auto___23483__$1 = cljs.core.seq(seq__22887_23447);
if(temp__5735__auto___23483__$1){
var seq__22887_23484__$1 = temp__5735__auto___23483__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22887_23484__$1)){
var c__4556__auto___23485 = cljs.core.chunk_first(seq__22887_23484__$1);
var G__23486 = cljs.core.chunk_rest(seq__22887_23484__$1);
var G__23487 = c__4556__auto___23485;
var G__23488 = cljs.core.count(c__4556__auto___23485);
var G__23489 = (0);
seq__22887_23447 = G__23486;
chunk__22888_23448 = G__23487;
count__22889_23449 = G__23488;
i__22890_23450 = G__23489;
continue;
} else {
var vec__22953_23490 = cljs.core.first(seq__22887_23484__$1);
var line_23491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22953_23490,(0),null);
var cols_23492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22953_23490,(1),null);
var seq__22956_23493 = cljs.core.seq(cols_23492);
var chunk__22957_23494 = null;
var count__22958_23495 = (0);
var i__22959_23496 = (0);
while(true){
if((i__22959_23496 < count__22958_23495)){
var vec__22966_23497 = chunk__22957_23494.cljs$core$IIndexed$_nth$arity$2(null,i__22959_23496);
var col_23498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22966_23497,(0),null);
var infos_23499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22966_23497,(1),null);
encode_cols(infos_23499,source_idx_23443,line_23491,col_23498);


var G__23500 = seq__22956_23493;
var G__23501 = chunk__22957_23494;
var G__23502 = count__22958_23495;
var G__23503 = (i__22959_23496 + (1));
seq__22956_23493 = G__23500;
chunk__22957_23494 = G__23501;
count__22958_23495 = G__23502;
i__22959_23496 = G__23503;
continue;
} else {
var temp__5735__auto___23504__$2 = cljs.core.seq(seq__22956_23493);
if(temp__5735__auto___23504__$2){
var seq__22956_23505__$1 = temp__5735__auto___23504__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22956_23505__$1)){
var c__4556__auto___23506 = cljs.core.chunk_first(seq__22956_23505__$1);
var G__23507 = cljs.core.chunk_rest(seq__22956_23505__$1);
var G__23508 = c__4556__auto___23506;
var G__23509 = cljs.core.count(c__4556__auto___23506);
var G__23510 = (0);
seq__22956_23493 = G__23507;
chunk__22957_23494 = G__23508;
count__22958_23495 = G__23509;
i__22959_23496 = G__23510;
continue;
} else {
var vec__22969_23511 = cljs.core.first(seq__22956_23505__$1);
var col_23512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22969_23511,(0),null);
var infos_23513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22969_23511,(1),null);
encode_cols(infos_23513,source_idx_23443,line_23491,col_23512);


var G__23514 = cljs.core.next(seq__22956_23505__$1);
var G__23515 = null;
var G__23516 = (0);
var G__23517 = (0);
seq__22956_23493 = G__23514;
chunk__22957_23494 = G__23515;
count__22958_23495 = G__23516;
i__22959_23496 = G__23517;
continue;
}
} else {
}
}
break;
}


var G__23518 = cljs.core.next(seq__22887_23484__$1);
var G__23519 = null;
var G__23520 = (0);
var G__23521 = (0);
seq__22887_23447 = G__23518;
chunk__22888_23448 = G__23519;
count__22889_23449 = G__23520;
i__22890_23450 = G__23521;
continue;
}
} else {
}
}
break;
}


var G__23522 = cljs.core.next(seq__22564_23436__$1);
var G__23523 = null;
var G__23524 = (0);
var G__23525 = (0);
seq__22564_23340 = G__23522;
chunk__22565_23341 = G__23523;
count__22566_23342 = G__23524;
i__22567_23343 = G__23525;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__22973 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__22549_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22549_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__22550_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__22550_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22555_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__22555_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__22976 = G__22973;
goog.object.set(G__22976,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__22976;
} else {
return G__22973;
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
var vec__22977 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22977,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22977,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__22980 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22980,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22980,(1),null);
var G__23526 = cljs.core.next(col_map_seq);
var G__23527 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__22980,col,infos,vec__22977,line,col_map){
return (function (v,p__22983){
var map__22984 = p__22983;
var map__22984__$1 = (((((!((map__22984 == null))))?(((((map__22984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22984):map__22984);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22984__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22984__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__22980,col,infos,vec__22977,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__23526;
new_cols = G__23527;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__23528 = cljs.core.next(line_map_seq);
var G__23529 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__23528;
new_lines = G__23529;
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
var seq__22986_23530 = cljs.core.seq(reverse_map);
var chunk__22987_23531 = null;
var count__22988_23532 = (0);
var i__22989_23533 = (0);
while(true){
if((i__22989_23533 < count__22988_23532)){
var vec__23140_23534 = chunk__22987_23531.cljs$core$IIndexed$_nth$arity$2(null,i__22989_23533);
var line_23535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23140_23534,(0),null);
var columns_23536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23140_23534,(1),null);
var seq__23143_23537 = cljs.core.seq(columns_23536);
var chunk__23144_23538 = null;
var count__23145_23539 = (0);
var i__23146_23540 = (0);
while(true){
if((i__23146_23540 < count__23145_23539)){
var vec__23177_23541 = chunk__23144_23538.cljs$core$IIndexed$_nth$arity$2(null,i__23146_23540);
var column_23542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23177_23541,(0),null);
var column_info_23543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23177_23541,(1),null);
var seq__23180_23544 = cljs.core.seq(column_info_23543);
var chunk__23181_23545 = null;
var count__23182_23546 = (0);
var i__23183_23547 = (0);
while(true){
if((i__23183_23547 < count__23182_23546)){
var map__23188_23548 = chunk__23181_23545.cljs$core$IIndexed$_nth$arity$2(null,i__23183_23547);
var map__23188_23549__$1 = (((((!((map__23188_23548 == null))))?(((((map__23188_23548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23188_23548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23188_23548):map__23188_23548);
var gline_23550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23188_23549__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23188_23549__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23188_23549__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23550], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23180_23544,chunk__23181_23545,count__23182_23546,i__23183_23547,seq__23143_23537,chunk__23144_23538,count__23145_23539,i__23146_23540,seq__22986_23530,chunk__22987_23531,count__22988_23532,i__22989_23533,map__23188_23548,map__23188_23549__$1,gline_23550,gcol_23551,name_23552,vec__23177_23541,column_23542,column_info_23543,vec__23140_23534,line_23535,columns_23536,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23551], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23535,new cljs.core.Keyword(null,"col","col",-1959363084),column_23542,new cljs.core.Keyword(null,"name","name",1843675177),name_23552], null));
});})(seq__23180_23544,chunk__23181_23545,count__23182_23546,i__23183_23547,seq__23143_23537,chunk__23144_23538,count__23145_23539,i__23146_23540,seq__22986_23530,chunk__22987_23531,count__22988_23532,i__22989_23533,map__23188_23548,map__23188_23549__$1,gline_23550,gcol_23551,name_23552,vec__23177_23541,column_23542,column_info_23543,vec__23140_23534,line_23535,columns_23536,inverted))
,cljs.core.sorted_map()));


var G__23553 = seq__23180_23544;
var G__23554 = chunk__23181_23545;
var G__23555 = count__23182_23546;
var G__23556 = (i__23183_23547 + (1));
seq__23180_23544 = G__23553;
chunk__23181_23545 = G__23554;
count__23182_23546 = G__23555;
i__23183_23547 = G__23556;
continue;
} else {
var temp__5735__auto___23557 = cljs.core.seq(seq__23180_23544);
if(temp__5735__auto___23557){
var seq__23180_23558__$1 = temp__5735__auto___23557;
if(cljs.core.chunked_seq_QMARK_(seq__23180_23558__$1)){
var c__4556__auto___23559 = cljs.core.chunk_first(seq__23180_23558__$1);
var G__23560 = cljs.core.chunk_rest(seq__23180_23558__$1);
var G__23561 = c__4556__auto___23559;
var G__23562 = cljs.core.count(c__4556__auto___23559);
var G__23563 = (0);
seq__23180_23544 = G__23560;
chunk__23181_23545 = G__23561;
count__23182_23546 = G__23562;
i__23183_23547 = G__23563;
continue;
} else {
var map__23190_23564 = cljs.core.first(seq__23180_23558__$1);
var map__23190_23565__$1 = (((((!((map__23190_23564 == null))))?(((((map__23190_23564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23190_23564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23190_23564):map__23190_23564);
var gline_23566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23190_23565__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23190_23565__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23190_23565__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23566], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23180_23544,chunk__23181_23545,count__23182_23546,i__23183_23547,seq__23143_23537,chunk__23144_23538,count__23145_23539,i__23146_23540,seq__22986_23530,chunk__22987_23531,count__22988_23532,i__22989_23533,map__23190_23564,map__23190_23565__$1,gline_23566,gcol_23567,name_23568,seq__23180_23558__$1,temp__5735__auto___23557,vec__23177_23541,column_23542,column_info_23543,vec__23140_23534,line_23535,columns_23536,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23567], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23535,new cljs.core.Keyword(null,"col","col",-1959363084),column_23542,new cljs.core.Keyword(null,"name","name",1843675177),name_23568], null));
});})(seq__23180_23544,chunk__23181_23545,count__23182_23546,i__23183_23547,seq__23143_23537,chunk__23144_23538,count__23145_23539,i__23146_23540,seq__22986_23530,chunk__22987_23531,count__22988_23532,i__22989_23533,map__23190_23564,map__23190_23565__$1,gline_23566,gcol_23567,name_23568,seq__23180_23558__$1,temp__5735__auto___23557,vec__23177_23541,column_23542,column_info_23543,vec__23140_23534,line_23535,columns_23536,inverted))
,cljs.core.sorted_map()));


var G__23578 = cljs.core.next(seq__23180_23558__$1);
var G__23579 = null;
var G__23580 = (0);
var G__23581 = (0);
seq__23180_23544 = G__23578;
chunk__23181_23545 = G__23579;
count__23182_23546 = G__23580;
i__23183_23547 = G__23581;
continue;
}
} else {
}
}
break;
}


var G__23582 = seq__23143_23537;
var G__23583 = chunk__23144_23538;
var G__23584 = count__23145_23539;
var G__23585 = (i__23146_23540 + (1));
seq__23143_23537 = G__23582;
chunk__23144_23538 = G__23583;
count__23145_23539 = G__23584;
i__23146_23540 = G__23585;
continue;
} else {
var temp__5735__auto___23586 = cljs.core.seq(seq__23143_23537);
if(temp__5735__auto___23586){
var seq__23143_23587__$1 = temp__5735__auto___23586;
if(cljs.core.chunked_seq_QMARK_(seq__23143_23587__$1)){
var c__4556__auto___23588 = cljs.core.chunk_first(seq__23143_23587__$1);
var G__23589 = cljs.core.chunk_rest(seq__23143_23587__$1);
var G__23590 = c__4556__auto___23588;
var G__23591 = cljs.core.count(c__4556__auto___23588);
var G__23592 = (0);
seq__23143_23537 = G__23589;
chunk__23144_23538 = G__23590;
count__23145_23539 = G__23591;
i__23146_23540 = G__23592;
continue;
} else {
var vec__23192_23593 = cljs.core.first(seq__23143_23587__$1);
var column_23594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23192_23593,(0),null);
var column_info_23595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23192_23593,(1),null);
var seq__23195_23596 = cljs.core.seq(column_info_23595);
var chunk__23196_23597 = null;
var count__23197_23598 = (0);
var i__23198_23599 = (0);
while(true){
if((i__23198_23599 < count__23197_23598)){
var map__23208_23600 = chunk__23196_23597.cljs$core$IIndexed$_nth$arity$2(null,i__23198_23599);
var map__23208_23601__$1 = (((((!((map__23208_23600 == null))))?(((((map__23208_23600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23208_23600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23208_23600):map__23208_23600);
var gline_23602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23208_23601__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23208_23601__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23208_23601__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23602], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23195_23596,chunk__23196_23597,count__23197_23598,i__23198_23599,seq__23143_23537,chunk__23144_23538,count__23145_23539,i__23146_23540,seq__22986_23530,chunk__22987_23531,count__22988_23532,i__22989_23533,map__23208_23600,map__23208_23601__$1,gline_23602,gcol_23603,name_23604,vec__23192_23593,column_23594,column_info_23595,seq__23143_23587__$1,temp__5735__auto___23586,vec__23140_23534,line_23535,columns_23536,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23603], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23535,new cljs.core.Keyword(null,"col","col",-1959363084),column_23594,new cljs.core.Keyword(null,"name","name",1843675177),name_23604], null));
});})(seq__23195_23596,chunk__23196_23597,count__23197_23598,i__23198_23599,seq__23143_23537,chunk__23144_23538,count__23145_23539,i__23146_23540,seq__22986_23530,chunk__22987_23531,count__22988_23532,i__22989_23533,map__23208_23600,map__23208_23601__$1,gline_23602,gcol_23603,name_23604,vec__23192_23593,column_23594,column_info_23595,seq__23143_23587__$1,temp__5735__auto___23586,vec__23140_23534,line_23535,columns_23536,inverted))
,cljs.core.sorted_map()));


var G__23611 = seq__23195_23596;
var G__23612 = chunk__23196_23597;
var G__23613 = count__23197_23598;
var G__23614 = (i__23198_23599 + (1));
seq__23195_23596 = G__23611;
chunk__23196_23597 = G__23612;
count__23197_23598 = G__23613;
i__23198_23599 = G__23614;
continue;
} else {
var temp__5735__auto___23616__$1 = cljs.core.seq(seq__23195_23596);
if(temp__5735__auto___23616__$1){
var seq__23195_23617__$1 = temp__5735__auto___23616__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23195_23617__$1)){
var c__4556__auto___23619 = cljs.core.chunk_first(seq__23195_23617__$1);
var G__23620 = cljs.core.chunk_rest(seq__23195_23617__$1);
var G__23621 = c__4556__auto___23619;
var G__23622 = cljs.core.count(c__4556__auto___23619);
var G__23623 = (0);
seq__23195_23596 = G__23620;
chunk__23196_23597 = G__23621;
count__23197_23598 = G__23622;
i__23198_23599 = G__23623;
continue;
} else {
var map__23210_23624 = cljs.core.first(seq__23195_23617__$1);
var map__23210_23625__$1 = (((((!((map__23210_23624 == null))))?(((((map__23210_23624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23210_23624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23210_23624):map__23210_23624);
var gline_23626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23210_23625__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23210_23625__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23210_23625__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23626], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23195_23596,chunk__23196_23597,count__23197_23598,i__23198_23599,seq__23143_23537,chunk__23144_23538,count__23145_23539,i__23146_23540,seq__22986_23530,chunk__22987_23531,count__22988_23532,i__22989_23533,map__23210_23624,map__23210_23625__$1,gline_23626,gcol_23627,name_23628,seq__23195_23617__$1,temp__5735__auto___23616__$1,vec__23192_23593,column_23594,column_info_23595,seq__23143_23587__$1,temp__5735__auto___23586,vec__23140_23534,line_23535,columns_23536,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23627], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23535,new cljs.core.Keyword(null,"col","col",-1959363084),column_23594,new cljs.core.Keyword(null,"name","name",1843675177),name_23628], null));
});})(seq__23195_23596,chunk__23196_23597,count__23197_23598,i__23198_23599,seq__23143_23537,chunk__23144_23538,count__23145_23539,i__23146_23540,seq__22986_23530,chunk__22987_23531,count__22988_23532,i__22989_23533,map__23210_23624,map__23210_23625__$1,gline_23626,gcol_23627,name_23628,seq__23195_23617__$1,temp__5735__auto___23616__$1,vec__23192_23593,column_23594,column_info_23595,seq__23143_23587__$1,temp__5735__auto___23586,vec__23140_23534,line_23535,columns_23536,inverted))
,cljs.core.sorted_map()));


var G__23642 = cljs.core.next(seq__23195_23617__$1);
var G__23643 = null;
var G__23644 = (0);
var G__23645 = (0);
seq__23195_23596 = G__23642;
chunk__23196_23597 = G__23643;
count__23197_23598 = G__23644;
i__23198_23599 = G__23645;
continue;
}
} else {
}
}
break;
}


var G__23646 = cljs.core.next(seq__23143_23587__$1);
var G__23647 = null;
var G__23648 = (0);
var G__23649 = (0);
seq__23143_23537 = G__23646;
chunk__23144_23538 = G__23647;
count__23145_23539 = G__23648;
i__23146_23540 = G__23649;
continue;
}
} else {
}
}
break;
}


var G__23650 = seq__22986_23530;
var G__23651 = chunk__22987_23531;
var G__23652 = count__22988_23532;
var G__23653 = (i__22989_23533 + (1));
seq__22986_23530 = G__23650;
chunk__22987_23531 = G__23651;
count__22988_23532 = G__23652;
i__22989_23533 = G__23653;
continue;
} else {
var temp__5735__auto___23654 = cljs.core.seq(seq__22986_23530);
if(temp__5735__auto___23654){
var seq__22986_23655__$1 = temp__5735__auto___23654;
if(cljs.core.chunked_seq_QMARK_(seq__22986_23655__$1)){
var c__4556__auto___23656 = cljs.core.chunk_first(seq__22986_23655__$1);
var G__23657 = cljs.core.chunk_rest(seq__22986_23655__$1);
var G__23658 = c__4556__auto___23656;
var G__23659 = cljs.core.count(c__4556__auto___23656);
var G__23660 = (0);
seq__22986_23530 = G__23657;
chunk__22987_23531 = G__23658;
count__22988_23532 = G__23659;
i__22989_23533 = G__23660;
continue;
} else {
var vec__23214_23661 = cljs.core.first(seq__22986_23655__$1);
var line_23662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23214_23661,(0),null);
var columns_23663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23214_23661,(1),null);
var seq__23217_23665 = cljs.core.seq(columns_23663);
var chunk__23218_23666 = null;
var count__23219_23667 = (0);
var i__23220_23668 = (0);
while(true){
if((i__23220_23668 < count__23219_23667)){
var vec__23262_23669 = chunk__23218_23666.cljs$core$IIndexed$_nth$arity$2(null,i__23220_23668);
var column_23670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23262_23669,(0),null);
var column_info_23671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23262_23669,(1),null);
var seq__23265_23672 = cljs.core.seq(column_info_23671);
var chunk__23266_23673 = null;
var count__23267_23674 = (0);
var i__23268_23675 = (0);
while(true){
if((i__23268_23675 < count__23267_23674)){
var map__23273_23676 = chunk__23266_23673.cljs$core$IIndexed$_nth$arity$2(null,i__23268_23675);
var map__23273_23677__$1 = (((((!((map__23273_23676 == null))))?(((((map__23273_23676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23273_23676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23273_23676):map__23273_23676);
var gline_23678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23273_23677__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23273_23677__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23273_23677__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23678], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23265_23672,chunk__23266_23673,count__23267_23674,i__23268_23675,seq__23217_23665,chunk__23218_23666,count__23219_23667,i__23220_23668,seq__22986_23530,chunk__22987_23531,count__22988_23532,i__22989_23533,map__23273_23676,map__23273_23677__$1,gline_23678,gcol_23679,name_23680,vec__23262_23669,column_23670,column_info_23671,vec__23214_23661,line_23662,columns_23663,seq__22986_23655__$1,temp__5735__auto___23654,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23679], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23662,new cljs.core.Keyword(null,"col","col",-1959363084),column_23670,new cljs.core.Keyword(null,"name","name",1843675177),name_23680], null));
});})(seq__23265_23672,chunk__23266_23673,count__23267_23674,i__23268_23675,seq__23217_23665,chunk__23218_23666,count__23219_23667,i__23220_23668,seq__22986_23530,chunk__22987_23531,count__22988_23532,i__22989_23533,map__23273_23676,map__23273_23677__$1,gline_23678,gcol_23679,name_23680,vec__23262_23669,column_23670,column_info_23671,vec__23214_23661,line_23662,columns_23663,seq__22986_23655__$1,temp__5735__auto___23654,inverted))
,cljs.core.sorted_map()));


var G__23693 = seq__23265_23672;
var G__23694 = chunk__23266_23673;
var G__23695 = count__23267_23674;
var G__23696 = (i__23268_23675 + (1));
seq__23265_23672 = G__23693;
chunk__23266_23673 = G__23694;
count__23267_23674 = G__23695;
i__23268_23675 = G__23696;
continue;
} else {
var temp__5735__auto___23697__$1 = cljs.core.seq(seq__23265_23672);
if(temp__5735__auto___23697__$1){
var seq__23265_23698__$1 = temp__5735__auto___23697__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23265_23698__$1)){
var c__4556__auto___23699 = cljs.core.chunk_first(seq__23265_23698__$1);
var G__23700 = cljs.core.chunk_rest(seq__23265_23698__$1);
var G__23701 = c__4556__auto___23699;
var G__23702 = cljs.core.count(c__4556__auto___23699);
var G__23703 = (0);
seq__23265_23672 = G__23700;
chunk__23266_23673 = G__23701;
count__23267_23674 = G__23702;
i__23268_23675 = G__23703;
continue;
} else {
var map__23275_23704 = cljs.core.first(seq__23265_23698__$1);
var map__23275_23705__$1 = (((((!((map__23275_23704 == null))))?(((((map__23275_23704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23275_23704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23275_23704):map__23275_23704);
var gline_23706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23275_23705__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23275_23705__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23275_23705__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23706], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23265_23672,chunk__23266_23673,count__23267_23674,i__23268_23675,seq__23217_23665,chunk__23218_23666,count__23219_23667,i__23220_23668,seq__22986_23530,chunk__22987_23531,count__22988_23532,i__22989_23533,map__23275_23704,map__23275_23705__$1,gline_23706,gcol_23707,name_23708,seq__23265_23698__$1,temp__5735__auto___23697__$1,vec__23262_23669,column_23670,column_info_23671,vec__23214_23661,line_23662,columns_23663,seq__22986_23655__$1,temp__5735__auto___23654,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23707], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23662,new cljs.core.Keyword(null,"col","col",-1959363084),column_23670,new cljs.core.Keyword(null,"name","name",1843675177),name_23708], null));
});})(seq__23265_23672,chunk__23266_23673,count__23267_23674,i__23268_23675,seq__23217_23665,chunk__23218_23666,count__23219_23667,i__23220_23668,seq__22986_23530,chunk__22987_23531,count__22988_23532,i__22989_23533,map__23275_23704,map__23275_23705__$1,gline_23706,gcol_23707,name_23708,seq__23265_23698__$1,temp__5735__auto___23697__$1,vec__23262_23669,column_23670,column_info_23671,vec__23214_23661,line_23662,columns_23663,seq__22986_23655__$1,temp__5735__auto___23654,inverted))
,cljs.core.sorted_map()));


var G__23709 = cljs.core.next(seq__23265_23698__$1);
var G__23710 = null;
var G__23711 = (0);
var G__23712 = (0);
seq__23265_23672 = G__23709;
chunk__23266_23673 = G__23710;
count__23267_23674 = G__23711;
i__23268_23675 = G__23712;
continue;
}
} else {
}
}
break;
}


var G__23713 = seq__23217_23665;
var G__23714 = chunk__23218_23666;
var G__23715 = count__23219_23667;
var G__23716 = (i__23220_23668 + (1));
seq__23217_23665 = G__23713;
chunk__23218_23666 = G__23714;
count__23219_23667 = G__23715;
i__23220_23668 = G__23716;
continue;
} else {
var temp__5735__auto___23717__$1 = cljs.core.seq(seq__23217_23665);
if(temp__5735__auto___23717__$1){
var seq__23217_23718__$1 = temp__5735__auto___23717__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23217_23718__$1)){
var c__4556__auto___23719 = cljs.core.chunk_first(seq__23217_23718__$1);
var G__23720 = cljs.core.chunk_rest(seq__23217_23718__$1);
var G__23721 = c__4556__auto___23719;
var G__23722 = cljs.core.count(c__4556__auto___23719);
var G__23723 = (0);
seq__23217_23665 = G__23720;
chunk__23218_23666 = G__23721;
count__23219_23667 = G__23722;
i__23220_23668 = G__23723;
continue;
} else {
var vec__23279_23724 = cljs.core.first(seq__23217_23718__$1);
var column_23725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23279_23724,(0),null);
var column_info_23726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23279_23724,(1),null);
var seq__23282_23727 = cljs.core.seq(column_info_23726);
var chunk__23283_23728 = null;
var count__23284_23729 = (0);
var i__23285_23730 = (0);
while(true){
if((i__23285_23730 < count__23284_23729)){
var map__23295_23731 = chunk__23283_23728.cljs$core$IIndexed$_nth$arity$2(null,i__23285_23730);
var map__23295_23732__$1 = (((((!((map__23295_23731 == null))))?(((((map__23295_23731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23295_23731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23295_23731):map__23295_23731);
var gline_23733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23295_23732__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23295_23732__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23295_23732__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23733], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23282_23727,chunk__23283_23728,count__23284_23729,i__23285_23730,seq__23217_23665,chunk__23218_23666,count__23219_23667,i__23220_23668,seq__22986_23530,chunk__22987_23531,count__22988_23532,i__22989_23533,map__23295_23731,map__23295_23732__$1,gline_23733,gcol_23734,name_23735,vec__23279_23724,column_23725,column_info_23726,seq__23217_23718__$1,temp__5735__auto___23717__$1,vec__23214_23661,line_23662,columns_23663,seq__22986_23655__$1,temp__5735__auto___23654,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23734], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23662,new cljs.core.Keyword(null,"col","col",-1959363084),column_23725,new cljs.core.Keyword(null,"name","name",1843675177),name_23735], null));
});})(seq__23282_23727,chunk__23283_23728,count__23284_23729,i__23285_23730,seq__23217_23665,chunk__23218_23666,count__23219_23667,i__23220_23668,seq__22986_23530,chunk__22987_23531,count__22988_23532,i__22989_23533,map__23295_23731,map__23295_23732__$1,gline_23733,gcol_23734,name_23735,vec__23279_23724,column_23725,column_info_23726,seq__23217_23718__$1,temp__5735__auto___23717__$1,vec__23214_23661,line_23662,columns_23663,seq__22986_23655__$1,temp__5735__auto___23654,inverted))
,cljs.core.sorted_map()));


var G__23736 = seq__23282_23727;
var G__23737 = chunk__23283_23728;
var G__23738 = count__23284_23729;
var G__23739 = (i__23285_23730 + (1));
seq__23282_23727 = G__23736;
chunk__23283_23728 = G__23737;
count__23284_23729 = G__23738;
i__23285_23730 = G__23739;
continue;
} else {
var temp__5735__auto___23740__$2 = cljs.core.seq(seq__23282_23727);
if(temp__5735__auto___23740__$2){
var seq__23282_23741__$1 = temp__5735__auto___23740__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23282_23741__$1)){
var c__4556__auto___23742 = cljs.core.chunk_first(seq__23282_23741__$1);
var G__23758 = cljs.core.chunk_rest(seq__23282_23741__$1);
var G__23759 = c__4556__auto___23742;
var G__23760 = cljs.core.count(c__4556__auto___23742);
var G__23761 = (0);
seq__23282_23727 = G__23758;
chunk__23283_23728 = G__23759;
count__23284_23729 = G__23760;
i__23285_23730 = G__23761;
continue;
} else {
var map__23297_23762 = cljs.core.first(seq__23282_23741__$1);
var map__23297_23763__$1 = (((((!((map__23297_23762 == null))))?(((((map__23297_23762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23297_23762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23297_23762):map__23297_23762);
var gline_23764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23297_23763__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23297_23763__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23297_23763__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23764], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23282_23727,chunk__23283_23728,count__23284_23729,i__23285_23730,seq__23217_23665,chunk__23218_23666,count__23219_23667,i__23220_23668,seq__22986_23530,chunk__22987_23531,count__22988_23532,i__22989_23533,map__23297_23762,map__23297_23763__$1,gline_23764,gcol_23765,name_23766,seq__23282_23741__$1,temp__5735__auto___23740__$2,vec__23279_23724,column_23725,column_info_23726,seq__23217_23718__$1,temp__5735__auto___23717__$1,vec__23214_23661,line_23662,columns_23663,seq__22986_23655__$1,temp__5735__auto___23654,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23765], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23662,new cljs.core.Keyword(null,"col","col",-1959363084),column_23725,new cljs.core.Keyword(null,"name","name",1843675177),name_23766], null));
});})(seq__23282_23727,chunk__23283_23728,count__23284_23729,i__23285_23730,seq__23217_23665,chunk__23218_23666,count__23219_23667,i__23220_23668,seq__22986_23530,chunk__22987_23531,count__22988_23532,i__22989_23533,map__23297_23762,map__23297_23763__$1,gline_23764,gcol_23765,name_23766,seq__23282_23741__$1,temp__5735__auto___23740__$2,vec__23279_23724,column_23725,column_info_23726,seq__23217_23718__$1,temp__5735__auto___23717__$1,vec__23214_23661,line_23662,columns_23663,seq__22986_23655__$1,temp__5735__auto___23654,inverted))
,cljs.core.sorted_map()));


var G__23767 = cljs.core.next(seq__23282_23741__$1);
var G__23768 = null;
var G__23769 = (0);
var G__23770 = (0);
seq__23282_23727 = G__23767;
chunk__23283_23728 = G__23768;
count__23284_23729 = G__23769;
i__23285_23730 = G__23770;
continue;
}
} else {
}
}
break;
}


var G__23771 = cljs.core.next(seq__23217_23718__$1);
var G__23772 = null;
var G__23773 = (0);
var G__23774 = (0);
seq__23217_23665 = G__23771;
chunk__23218_23666 = G__23772;
count__23219_23667 = G__23773;
i__23220_23668 = G__23774;
continue;
}
} else {
}
}
break;
}


var G__23775 = cljs.core.next(seq__22986_23655__$1);
var G__23776 = null;
var G__23777 = (0);
var G__23778 = (0);
seq__22986_23530 = G__23775;
chunk__22987_23531 = G__23776;
count__22988_23532 = G__23777;
i__22989_23533 = G__23778;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
