goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__22497){
var vec__22498 = p__22497;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22498,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22498,(1),null);
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
var G__23447 = cljs.core.next(segs__$1);
var G__23448 = nrelseg;
var G__23449 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23447;
relseg__$1 = G__23448;
result__$1 = G__23449;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22523,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22523,(1),null);
var G__23450 = (gline + (1));
var G__23451 = cljs.core.next(lines__$1);
var G__23452 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23453 = result__$1;
gline = G__23450;
lines__$1 = G__23451;
relseg = G__23452;
result = G__23453;
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
var vec__22538 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__23463 = cljs.core.next(segs__$1);
var G__23464 = nrelseg;
var G__23465 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23463;
relseg__$1 = G__23464;
result__$1 = G__23465;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22538,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22538,(1),null);
var G__23469 = (gline + (1));
var G__23470 = cljs.core.next(lines__$1);
var G__23471 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23472 = result__$1;
gline = G__23469;
lines__$1 = G__23470;
relseg = G__23471;
result = G__23472;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__22549){
var vec__22550 = p__22549;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22550,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22550,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22550,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22550,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22550,(4),null);
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
var seq__22569 = cljs.core.seq(infos);
var chunk__22570 = null;
var count__22571 = (0);
var i__22572 = (0);
while(true){
if((i__22572 < count__22571)){
var info = chunk__22570.cljs$core$IIndexed$_nth$arity$2(null,i__22572);
var segv_23475 = info__GT_segv(info,source_idx,line,col);
var gline_23476 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23477 = cljs.core.count(cljs.core.deref(lines));
if((gline_23476 > (lc_23477 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22569,chunk__22570,count__22571,i__22572,segv_23475,gline_23476,lc_23477,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23476 - (lc_23477 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23475], null));
});})(seq__22569,chunk__22570,count__22571,i__22572,segv_23475,gline_23476,lc_23477,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22569,chunk__22570,count__22571,i__22572,segv_23475,gline_23476,lc_23477,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23476], null),cljs.core.conj,segv_23475);
});})(seq__22569,chunk__22570,count__22571,i__22572,segv_23475,gline_23476,lc_23477,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23478 = seq__22569;
var G__23479 = chunk__22570;
var G__23480 = count__22571;
var G__23481 = (i__22572 + (1));
seq__22569 = G__23478;
chunk__22570 = G__23479;
count__22571 = G__23480;
i__22572 = G__23481;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__22569);
if(temp__5735__auto__){
var seq__22569__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22569__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__22569__$1);
var G__23482 = cljs.core.chunk_rest(seq__22569__$1);
var G__23483 = c__4556__auto__;
var G__23484 = cljs.core.count(c__4556__auto__);
var G__23485 = (0);
seq__22569 = G__23482;
chunk__22570 = G__23483;
count__22571 = G__23484;
i__22572 = G__23485;
continue;
} else {
var info = cljs.core.first(seq__22569__$1);
var segv_23486 = info__GT_segv(info,source_idx,line,col);
var gline_23487 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23488 = cljs.core.count(cljs.core.deref(lines));
if((gline_23487 > (lc_23488 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22569,chunk__22570,count__22571,i__22572,segv_23486,gline_23487,lc_23488,info,seq__22569__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23487 - (lc_23488 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23486], null));
});})(seq__22569,chunk__22570,count__22571,i__22572,segv_23486,gline_23487,lc_23488,info,seq__22569__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22569,chunk__22570,count__22571,i__22572,segv_23486,gline_23487,lc_23488,info,seq__22569__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23487], null),cljs.core.conj,segv_23486);
});})(seq__22569,chunk__22570,count__22571,i__22572,segv_23486,gline_23487,lc_23488,info,seq__22569__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23489 = cljs.core.next(seq__22569__$1);
var G__23490 = null;
var G__23491 = (0);
var G__23492 = (0);
seq__22569 = G__23489;
chunk__22570 = G__23490;
count__22571 = G__23491;
i__22572 = G__23492;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__22590_23493 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__22591_23494 = null;
var count__22592_23495 = (0);
var i__22593_23496 = (0);
while(true){
if((i__22593_23496 < count__22592_23495)){
var vec__22819_23497 = chunk__22591_23494.cljs$core$IIndexed$_nth$arity$2(null,i__22593_23496);
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
var vec__22877_23506 = chunk__22826_23503.cljs$core$IIndexed$_nth$arity$2(null,i__22828_23505);
var line_23507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22877_23506,(0),null);
var cols_23508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22877_23506,(1),null);
var seq__22880_23509 = cljs.core.seq(cols_23508);
var chunk__22881_23510 = null;
var count__22882_23511 = (0);
var i__22883_23512 = (0);
while(true){
if((i__22883_23512 < count__22882_23511)){
var vec__22890_23513 = chunk__22881_23510.cljs$core$IIndexed$_nth$arity$2(null,i__22883_23512);
var col_23514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22890_23513,(0),null);
var infos_23515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22890_23513,(1),null);
encode_cols(infos_23515,source_idx_23498,line_23507,col_23514);


var G__23516 = seq__22880_23509;
var G__23517 = chunk__22881_23510;
var G__23518 = count__22882_23511;
var G__23519 = (i__22883_23512 + (1));
seq__22880_23509 = G__23516;
chunk__22881_23510 = G__23517;
count__22882_23511 = G__23518;
i__22883_23512 = G__23519;
continue;
} else {
var temp__5735__auto___23520 = cljs.core.seq(seq__22880_23509);
if(temp__5735__auto___23520){
var seq__22880_23521__$1 = temp__5735__auto___23520;
if(cljs.core.chunked_seq_QMARK_(seq__22880_23521__$1)){
var c__4556__auto___23522 = cljs.core.chunk_first(seq__22880_23521__$1);
var G__23523 = cljs.core.chunk_rest(seq__22880_23521__$1);
var G__23524 = c__4556__auto___23522;
var G__23525 = cljs.core.count(c__4556__auto___23522);
var G__23526 = (0);
seq__22880_23509 = G__23523;
chunk__22881_23510 = G__23524;
count__22882_23511 = G__23525;
i__22883_23512 = G__23526;
continue;
} else {
var vec__22893_23527 = cljs.core.first(seq__22880_23521__$1);
var col_23528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22893_23527,(0),null);
var infos_23529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22893_23527,(1),null);
encode_cols(infos_23529,source_idx_23498,line_23507,col_23528);


var G__23530 = cljs.core.next(seq__22880_23521__$1);
var G__23531 = null;
var G__23532 = (0);
var G__23533 = (0);
seq__22880_23509 = G__23530;
chunk__22881_23510 = G__23531;
count__22882_23511 = G__23532;
i__22883_23512 = G__23533;
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
var vec__22896_23545 = cljs.core.first(seq__22825_23539__$1);
var line_23546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22896_23545,(0),null);
var cols_23547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22896_23545,(1),null);
var seq__22899_23548 = cljs.core.seq(cols_23547);
var chunk__22900_23549 = null;
var count__22901_23550 = (0);
var i__22902_23551 = (0);
while(true){
if((i__22902_23551 < count__22901_23550)){
var vec__22910_23552 = chunk__22900_23549.cljs$core$IIndexed$_nth$arity$2(null,i__22902_23551);
var col_23553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22910_23552,(0),null);
var infos_23554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22910_23552,(1),null);
encode_cols(infos_23554,source_idx_23498,line_23546,col_23553);


var G__23555 = seq__22899_23548;
var G__23556 = chunk__22900_23549;
var G__23557 = count__22901_23550;
var G__23558 = (i__22902_23551 + (1));
seq__22899_23548 = G__23555;
chunk__22900_23549 = G__23556;
count__22901_23550 = G__23557;
i__22902_23551 = G__23558;
continue;
} else {
var temp__5735__auto___23559__$1 = cljs.core.seq(seq__22899_23548);
if(temp__5735__auto___23559__$1){
var seq__22899_23560__$1 = temp__5735__auto___23559__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22899_23560__$1)){
var c__4556__auto___23561 = cljs.core.chunk_first(seq__22899_23560__$1);
var G__23562 = cljs.core.chunk_rest(seq__22899_23560__$1);
var G__23563 = c__4556__auto___23561;
var G__23564 = cljs.core.count(c__4556__auto___23561);
var G__23565 = (0);
seq__22899_23548 = G__23562;
chunk__22900_23549 = G__23563;
count__22901_23550 = G__23564;
i__22902_23551 = G__23565;
continue;
} else {
var vec__22914_23566 = cljs.core.first(seq__22899_23560__$1);
var col_23567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22914_23566,(0),null);
var infos_23568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22914_23566,(1),null);
encode_cols(infos_23568,source_idx_23498,line_23546,col_23567);


var G__23569 = cljs.core.next(seq__22899_23560__$1);
var G__23570 = null;
var G__23571 = (0);
var G__23572 = (0);
seq__22899_23548 = G__23569;
chunk__22900_23549 = G__23570;
count__22901_23550 = G__23571;
i__22902_23551 = G__23572;
continue;
}
} else {
}
}
break;
}


var G__23573 = cljs.core.next(seq__22825_23539__$1);
var G__23574 = null;
var G__23575 = (0);
var G__23576 = (0);
seq__22825_23502 = G__23573;
chunk__22826_23503 = G__23574;
count__22827_23504 = G__23575;
i__22828_23505 = G__23576;
continue;
}
} else {
}
}
break;
}


var G__23577 = seq__22590_23493;
var G__23578 = chunk__22591_23494;
var G__23579 = count__22592_23495;
var G__23580 = (i__22593_23496 + (1));
seq__22590_23493 = G__23577;
chunk__22591_23494 = G__23578;
count__22592_23495 = G__23579;
i__22593_23496 = G__23580;
continue;
} else {
var temp__5735__auto___23581 = cljs.core.seq(seq__22590_23493);
if(temp__5735__auto___23581){
var seq__22590_23582__$1 = temp__5735__auto___23581;
if(cljs.core.chunked_seq_QMARK_(seq__22590_23582__$1)){
var c__4556__auto___23583 = cljs.core.chunk_first(seq__22590_23582__$1);
var G__23585 = cljs.core.chunk_rest(seq__22590_23582__$1);
var G__23586 = c__4556__auto___23583;
var G__23587 = cljs.core.count(c__4556__auto___23583);
var G__23588 = (0);
seq__22590_23493 = G__23585;
chunk__22591_23494 = G__23586;
count__22592_23495 = G__23587;
i__22593_23496 = G__23588;
continue;
} else {
var vec__22917_23589 = cljs.core.first(seq__22590_23582__$1);
var source_idx_23590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22917_23589,(0),null);
var vec__22920_23591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22917_23589,(1),null);
var __23592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22920_23591,(0),null);
var lines_23593__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22920_23591,(1),null);
var seq__22923_23594 = cljs.core.seq(lines_23593__$1);
var chunk__22924_23595 = null;
var count__22925_23596 = (0);
var i__22926_23597 = (0);
while(true){
if((i__22926_23597 < count__22925_23596)){
var vec__22967_23598 = chunk__22924_23595.cljs$core$IIndexed$_nth$arity$2(null,i__22926_23597);
var line_23599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22967_23598,(0),null);
var cols_23600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22967_23598,(1),null);
var seq__22970_23601 = cljs.core.seq(cols_23600);
var chunk__22971_23602 = null;
var count__22972_23603 = (0);
var i__22973_23604 = (0);
while(true){
if((i__22973_23604 < count__22972_23603)){
var vec__22983_23605 = chunk__22971_23602.cljs$core$IIndexed$_nth$arity$2(null,i__22973_23604);
var col_23606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22983_23605,(0),null);
var infos_23607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22983_23605,(1),null);
encode_cols(infos_23607,source_idx_23590,line_23599,col_23606);


var G__23608 = seq__22970_23601;
var G__23609 = chunk__22971_23602;
var G__23610 = count__22972_23603;
var G__23611 = (i__22973_23604 + (1));
seq__22970_23601 = G__23608;
chunk__22971_23602 = G__23609;
count__22972_23603 = G__23610;
i__22973_23604 = G__23611;
continue;
} else {
var temp__5735__auto___23612__$1 = cljs.core.seq(seq__22970_23601);
if(temp__5735__auto___23612__$1){
var seq__22970_23613__$1 = temp__5735__auto___23612__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22970_23613__$1)){
var c__4556__auto___23614 = cljs.core.chunk_first(seq__22970_23613__$1);
var G__23615 = cljs.core.chunk_rest(seq__22970_23613__$1);
var G__23616 = c__4556__auto___23614;
var G__23617 = cljs.core.count(c__4556__auto___23614);
var G__23618 = (0);
seq__22970_23601 = G__23615;
chunk__22971_23602 = G__23616;
count__22972_23603 = G__23617;
i__22973_23604 = G__23618;
continue;
} else {
var vec__22987_23619 = cljs.core.first(seq__22970_23613__$1);
var col_23620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22987_23619,(0),null);
var infos_23621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22987_23619,(1),null);
encode_cols(infos_23621,source_idx_23590,line_23599,col_23620);


var G__23622 = cljs.core.next(seq__22970_23613__$1);
var G__23623 = null;
var G__23624 = (0);
var G__23625 = (0);
seq__22970_23601 = G__23622;
chunk__22971_23602 = G__23623;
count__22972_23603 = G__23624;
i__22973_23604 = G__23625;
continue;
}
} else {
}
}
break;
}


var G__23626 = seq__22923_23594;
var G__23627 = chunk__22924_23595;
var G__23628 = count__22925_23596;
var G__23629 = (i__22926_23597 + (1));
seq__22923_23594 = G__23626;
chunk__22924_23595 = G__23627;
count__22925_23596 = G__23628;
i__22926_23597 = G__23629;
continue;
} else {
var temp__5735__auto___23630__$1 = cljs.core.seq(seq__22923_23594);
if(temp__5735__auto___23630__$1){
var seq__22923_23631__$1 = temp__5735__auto___23630__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22923_23631__$1)){
var c__4556__auto___23632 = cljs.core.chunk_first(seq__22923_23631__$1);
var G__23633 = cljs.core.chunk_rest(seq__22923_23631__$1);
var G__23634 = c__4556__auto___23632;
var G__23635 = cljs.core.count(c__4556__auto___23632);
var G__23636 = (0);
seq__22923_23594 = G__23633;
chunk__22924_23595 = G__23634;
count__22925_23596 = G__23635;
i__22926_23597 = G__23636;
continue;
} else {
var vec__22990_23637 = cljs.core.first(seq__22923_23631__$1);
var line_23638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22990_23637,(0),null);
var cols_23639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22990_23637,(1),null);
var seq__22993_23640 = cljs.core.seq(cols_23639);
var chunk__22994_23641 = null;
var count__22995_23642 = (0);
var i__22996_23643 = (0);
while(true){
if((i__22996_23643 < count__22995_23642)){
var vec__23003_23644 = chunk__22994_23641.cljs$core$IIndexed$_nth$arity$2(null,i__22996_23643);
var col_23645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23003_23644,(0),null);
var infos_23646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23003_23644,(1),null);
encode_cols(infos_23646,source_idx_23590,line_23638,col_23645);


var G__23647 = seq__22993_23640;
var G__23648 = chunk__22994_23641;
var G__23649 = count__22995_23642;
var G__23650 = (i__22996_23643 + (1));
seq__22993_23640 = G__23647;
chunk__22994_23641 = G__23648;
count__22995_23642 = G__23649;
i__22996_23643 = G__23650;
continue;
} else {
var temp__5735__auto___23651__$2 = cljs.core.seq(seq__22993_23640);
if(temp__5735__auto___23651__$2){
var seq__22993_23652__$1 = temp__5735__auto___23651__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22993_23652__$1)){
var c__4556__auto___23653 = cljs.core.chunk_first(seq__22993_23652__$1);
var G__23654 = cljs.core.chunk_rest(seq__22993_23652__$1);
var G__23655 = c__4556__auto___23653;
var G__23656 = cljs.core.count(c__4556__auto___23653);
var G__23657 = (0);
seq__22993_23640 = G__23654;
chunk__22994_23641 = G__23655;
count__22995_23642 = G__23656;
i__22996_23643 = G__23657;
continue;
} else {
var vec__23006_23658 = cljs.core.first(seq__22993_23652__$1);
var col_23659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23006_23658,(0),null);
var infos_23660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23006_23658,(1),null);
encode_cols(infos_23660,source_idx_23590,line_23638,col_23659);


var G__23661 = cljs.core.next(seq__22993_23652__$1);
var G__23662 = null;
var G__23663 = (0);
var G__23664 = (0);
seq__22993_23640 = G__23661;
chunk__22994_23641 = G__23662;
count__22995_23642 = G__23663;
i__22996_23643 = G__23664;
continue;
}
} else {
}
}
break;
}


var G__23665 = cljs.core.next(seq__22923_23631__$1);
var G__23666 = null;
var G__23667 = (0);
var G__23668 = (0);
seq__22923_23594 = G__23665;
chunk__22924_23595 = G__23666;
count__22925_23596 = G__23667;
i__22926_23597 = G__23668;
continue;
}
} else {
}
}
break;
}


var G__23669 = cljs.core.next(seq__22590_23582__$1);
var G__23670 = null;
var G__23671 = (0);
var G__23672 = (0);
seq__22590_23493 = G__23669;
chunk__22591_23494 = G__23670;
count__22592_23495 = G__23671;
i__22593_23496 = G__23672;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__23009 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__22566_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22566_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__22567_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__22567_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22568_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__22568_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__23010 = G__23009;
goog.object.set(G__23010,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__23010;
} else {
return G__23009;
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
var vec__23011 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23011,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23011,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__23014 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23014,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23014,(1),null);
var G__23673 = cljs.core.next(col_map_seq);
var G__23674 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__23014,col,infos,vec__23011,line,col_map){
return (function (v,p__23017){
var map__23018 = p__23017;
var map__23018__$1 = (((((!((map__23018 == null))))?(((((map__23018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23018):map__23018);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23018__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23018__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__23014,col,infos,vec__23011,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__23673;
new_cols = G__23674;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__23675 = cljs.core.next(line_map_seq);
var G__23676 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__23675;
new_lines = G__23676;
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
var seq__23021_23677 = cljs.core.seq(reverse_map);
var chunk__23022_23678 = null;
var count__23023_23679 = (0);
var i__23024_23680 = (0);
while(true){
if((i__23024_23680 < count__23023_23679)){
var vec__23188_23681 = chunk__23022_23678.cljs$core$IIndexed$_nth$arity$2(null,i__23024_23680);
var line_23682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23188_23681,(0),null);
var columns_23683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23188_23681,(1),null);
var seq__23191_23684 = cljs.core.seq(columns_23683);
var chunk__23192_23685 = null;
var count__23193_23686 = (0);
var i__23194_23687 = (0);
while(true){
if((i__23194_23687 < count__23193_23686)){
var vec__23259_23688 = chunk__23192_23685.cljs$core$IIndexed$_nth$arity$2(null,i__23194_23687);
var column_23689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23259_23688,(0),null);
var column_info_23690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23259_23688,(1),null);
var seq__23262_23691 = cljs.core.seq(column_info_23690);
var chunk__23263_23692 = null;
var count__23264_23693 = (0);
var i__23265_23694 = (0);
while(true){
if((i__23265_23694 < count__23264_23693)){
var map__23285_23695 = chunk__23263_23692.cljs$core$IIndexed$_nth$arity$2(null,i__23265_23694);
var map__23285_23696__$1 = (((((!((map__23285_23695 == null))))?(((((map__23285_23695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23285_23695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23285_23695):map__23285_23695);
var gline_23697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23285_23696__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23285_23696__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23285_23696__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23697], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23262_23691,chunk__23263_23692,count__23264_23693,i__23265_23694,seq__23191_23684,chunk__23192_23685,count__23193_23686,i__23194_23687,seq__23021_23677,chunk__23022_23678,count__23023_23679,i__23024_23680,map__23285_23695,map__23285_23696__$1,gline_23697,gcol_23698,name_23699,vec__23259_23688,column_23689,column_info_23690,vec__23188_23681,line_23682,columns_23683,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23698], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23682,new cljs.core.Keyword(null,"col","col",-1959363084),column_23689,new cljs.core.Keyword(null,"name","name",1843675177),name_23699], null));
});})(seq__23262_23691,chunk__23263_23692,count__23264_23693,i__23265_23694,seq__23191_23684,chunk__23192_23685,count__23193_23686,i__23194_23687,seq__23021_23677,chunk__23022_23678,count__23023_23679,i__23024_23680,map__23285_23695,map__23285_23696__$1,gline_23697,gcol_23698,name_23699,vec__23259_23688,column_23689,column_info_23690,vec__23188_23681,line_23682,columns_23683,inverted))
,cljs.core.sorted_map()));


var G__23700 = seq__23262_23691;
var G__23701 = chunk__23263_23692;
var G__23702 = count__23264_23693;
var G__23703 = (i__23265_23694 + (1));
seq__23262_23691 = G__23700;
chunk__23263_23692 = G__23701;
count__23264_23693 = G__23702;
i__23265_23694 = G__23703;
continue;
} else {
var temp__5735__auto___23704 = cljs.core.seq(seq__23262_23691);
if(temp__5735__auto___23704){
var seq__23262_23705__$1 = temp__5735__auto___23704;
if(cljs.core.chunked_seq_QMARK_(seq__23262_23705__$1)){
var c__4556__auto___23706 = cljs.core.chunk_first(seq__23262_23705__$1);
var G__23707 = cljs.core.chunk_rest(seq__23262_23705__$1);
var G__23708 = c__4556__auto___23706;
var G__23709 = cljs.core.count(c__4556__auto___23706);
var G__23710 = (0);
seq__23262_23691 = G__23707;
chunk__23263_23692 = G__23708;
count__23264_23693 = G__23709;
i__23265_23694 = G__23710;
continue;
} else {
var map__23291_23711 = cljs.core.first(seq__23262_23705__$1);
var map__23291_23712__$1 = (((((!((map__23291_23711 == null))))?(((((map__23291_23711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23291_23711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23291_23711):map__23291_23711);
var gline_23713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23291_23712__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23291_23712__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23291_23712__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23713], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23262_23691,chunk__23263_23692,count__23264_23693,i__23265_23694,seq__23191_23684,chunk__23192_23685,count__23193_23686,i__23194_23687,seq__23021_23677,chunk__23022_23678,count__23023_23679,i__23024_23680,map__23291_23711,map__23291_23712__$1,gline_23713,gcol_23714,name_23715,seq__23262_23705__$1,temp__5735__auto___23704,vec__23259_23688,column_23689,column_info_23690,vec__23188_23681,line_23682,columns_23683,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23714], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23682,new cljs.core.Keyword(null,"col","col",-1959363084),column_23689,new cljs.core.Keyword(null,"name","name",1843675177),name_23715], null));
});})(seq__23262_23691,chunk__23263_23692,count__23264_23693,i__23265_23694,seq__23191_23684,chunk__23192_23685,count__23193_23686,i__23194_23687,seq__23021_23677,chunk__23022_23678,count__23023_23679,i__23024_23680,map__23291_23711,map__23291_23712__$1,gline_23713,gcol_23714,name_23715,seq__23262_23705__$1,temp__5735__auto___23704,vec__23259_23688,column_23689,column_info_23690,vec__23188_23681,line_23682,columns_23683,inverted))
,cljs.core.sorted_map()));


var G__23716 = cljs.core.next(seq__23262_23705__$1);
var G__23717 = null;
var G__23718 = (0);
var G__23719 = (0);
seq__23262_23691 = G__23716;
chunk__23263_23692 = G__23717;
count__23264_23693 = G__23718;
i__23265_23694 = G__23719;
continue;
}
} else {
}
}
break;
}


var G__23720 = seq__23191_23684;
var G__23721 = chunk__23192_23685;
var G__23722 = count__23193_23686;
var G__23723 = (i__23194_23687 + (1));
seq__23191_23684 = G__23720;
chunk__23192_23685 = G__23721;
count__23193_23686 = G__23722;
i__23194_23687 = G__23723;
continue;
} else {
var temp__5735__auto___23724 = cljs.core.seq(seq__23191_23684);
if(temp__5735__auto___23724){
var seq__23191_23725__$1 = temp__5735__auto___23724;
if(cljs.core.chunked_seq_QMARK_(seq__23191_23725__$1)){
var c__4556__auto___23726 = cljs.core.chunk_first(seq__23191_23725__$1);
var G__23727 = cljs.core.chunk_rest(seq__23191_23725__$1);
var G__23728 = c__4556__auto___23726;
var G__23729 = cljs.core.count(c__4556__auto___23726);
var G__23730 = (0);
seq__23191_23684 = G__23727;
chunk__23192_23685 = G__23728;
count__23193_23686 = G__23729;
i__23194_23687 = G__23730;
continue;
} else {
var vec__23319_23731 = cljs.core.first(seq__23191_23725__$1);
var column_23732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23319_23731,(0),null);
var column_info_23733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23319_23731,(1),null);
var seq__23322_23734 = cljs.core.seq(column_info_23733);
var chunk__23323_23735 = null;
var count__23324_23736 = (0);
var i__23325_23737 = (0);
while(true){
if((i__23325_23737 < count__23324_23736)){
var map__23338_23738 = chunk__23323_23735.cljs$core$IIndexed$_nth$arity$2(null,i__23325_23737);
var map__23338_23739__$1 = (((((!((map__23338_23738 == null))))?(((((map__23338_23738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23338_23738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23338_23738):map__23338_23738);
var gline_23740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23338_23739__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23741 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23338_23739__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23742 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23338_23739__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23740], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23322_23734,chunk__23323_23735,count__23324_23736,i__23325_23737,seq__23191_23684,chunk__23192_23685,count__23193_23686,i__23194_23687,seq__23021_23677,chunk__23022_23678,count__23023_23679,i__23024_23680,map__23338_23738,map__23338_23739__$1,gline_23740,gcol_23741,name_23742,vec__23319_23731,column_23732,column_info_23733,seq__23191_23725__$1,temp__5735__auto___23724,vec__23188_23681,line_23682,columns_23683,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23741], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23682,new cljs.core.Keyword(null,"col","col",-1959363084),column_23732,new cljs.core.Keyword(null,"name","name",1843675177),name_23742], null));
});})(seq__23322_23734,chunk__23323_23735,count__23324_23736,i__23325_23737,seq__23191_23684,chunk__23192_23685,count__23193_23686,i__23194_23687,seq__23021_23677,chunk__23022_23678,count__23023_23679,i__23024_23680,map__23338_23738,map__23338_23739__$1,gline_23740,gcol_23741,name_23742,vec__23319_23731,column_23732,column_info_23733,seq__23191_23725__$1,temp__5735__auto___23724,vec__23188_23681,line_23682,columns_23683,inverted))
,cljs.core.sorted_map()));


var G__23743 = seq__23322_23734;
var G__23744 = chunk__23323_23735;
var G__23745 = count__23324_23736;
var G__23746 = (i__23325_23737 + (1));
seq__23322_23734 = G__23743;
chunk__23323_23735 = G__23744;
count__23324_23736 = G__23745;
i__23325_23737 = G__23746;
continue;
} else {
var temp__5735__auto___23747__$1 = cljs.core.seq(seq__23322_23734);
if(temp__5735__auto___23747__$1){
var seq__23322_23748__$1 = temp__5735__auto___23747__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23322_23748__$1)){
var c__4556__auto___23749 = cljs.core.chunk_first(seq__23322_23748__$1);
var G__23750 = cljs.core.chunk_rest(seq__23322_23748__$1);
var G__23751 = c__4556__auto___23749;
var G__23752 = cljs.core.count(c__4556__auto___23749);
var G__23753 = (0);
seq__23322_23734 = G__23750;
chunk__23323_23735 = G__23751;
count__23324_23736 = G__23752;
i__23325_23737 = G__23753;
continue;
} else {
var map__23344_23756 = cljs.core.first(seq__23322_23748__$1);
var map__23344_23757__$1 = (((((!((map__23344_23756 == null))))?(((((map__23344_23756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23344_23756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23344_23756):map__23344_23756);
var gline_23758 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23344_23757__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23344_23757__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23344_23757__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23758], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23322_23734,chunk__23323_23735,count__23324_23736,i__23325_23737,seq__23191_23684,chunk__23192_23685,count__23193_23686,i__23194_23687,seq__23021_23677,chunk__23022_23678,count__23023_23679,i__23024_23680,map__23344_23756,map__23344_23757__$1,gline_23758,gcol_23759,name_23760,seq__23322_23748__$1,temp__5735__auto___23747__$1,vec__23319_23731,column_23732,column_info_23733,seq__23191_23725__$1,temp__5735__auto___23724,vec__23188_23681,line_23682,columns_23683,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23759], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23682,new cljs.core.Keyword(null,"col","col",-1959363084),column_23732,new cljs.core.Keyword(null,"name","name",1843675177),name_23760], null));
});})(seq__23322_23734,chunk__23323_23735,count__23324_23736,i__23325_23737,seq__23191_23684,chunk__23192_23685,count__23193_23686,i__23194_23687,seq__23021_23677,chunk__23022_23678,count__23023_23679,i__23024_23680,map__23344_23756,map__23344_23757__$1,gline_23758,gcol_23759,name_23760,seq__23322_23748__$1,temp__5735__auto___23747__$1,vec__23319_23731,column_23732,column_info_23733,seq__23191_23725__$1,temp__5735__auto___23724,vec__23188_23681,line_23682,columns_23683,inverted))
,cljs.core.sorted_map()));


var G__23766 = cljs.core.next(seq__23322_23748__$1);
var G__23767 = null;
var G__23768 = (0);
var G__23769 = (0);
seq__23322_23734 = G__23766;
chunk__23323_23735 = G__23767;
count__23324_23736 = G__23768;
i__23325_23737 = G__23769;
continue;
}
} else {
}
}
break;
}


var G__23770 = cljs.core.next(seq__23191_23725__$1);
var G__23771 = null;
var G__23772 = (0);
var G__23773 = (0);
seq__23191_23684 = G__23770;
chunk__23192_23685 = G__23771;
count__23193_23686 = G__23772;
i__23194_23687 = G__23773;
continue;
}
} else {
}
}
break;
}


var G__23774 = seq__23021_23677;
var G__23775 = chunk__23022_23678;
var G__23776 = count__23023_23679;
var G__23777 = (i__23024_23680 + (1));
seq__23021_23677 = G__23774;
chunk__23022_23678 = G__23775;
count__23023_23679 = G__23776;
i__23024_23680 = G__23777;
continue;
} else {
var temp__5735__auto___23778 = cljs.core.seq(seq__23021_23677);
if(temp__5735__auto___23778){
var seq__23021_23779__$1 = temp__5735__auto___23778;
if(cljs.core.chunked_seq_QMARK_(seq__23021_23779__$1)){
var c__4556__auto___23780 = cljs.core.chunk_first(seq__23021_23779__$1);
var G__23781 = cljs.core.chunk_rest(seq__23021_23779__$1);
var G__23782 = c__4556__auto___23780;
var G__23783 = cljs.core.count(c__4556__auto___23780);
var G__23784 = (0);
seq__23021_23677 = G__23781;
chunk__23022_23678 = G__23782;
count__23023_23679 = G__23783;
i__23024_23680 = G__23784;
continue;
} else {
var vec__23346_23785 = cljs.core.first(seq__23021_23779__$1);
var line_23786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23346_23785,(0),null);
var columns_23787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23346_23785,(1),null);
var seq__23349_23788 = cljs.core.seq(columns_23787);
var chunk__23350_23789 = null;
var count__23351_23790 = (0);
var i__23352_23791 = (0);
while(true){
if((i__23352_23791 < count__23351_23790)){
var vec__23396_23792 = chunk__23350_23789.cljs$core$IIndexed$_nth$arity$2(null,i__23352_23791);
var column_23793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23396_23792,(0),null);
var column_info_23794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23396_23792,(1),null);
var seq__23399_23795 = cljs.core.seq(column_info_23794);
var chunk__23400_23796 = null;
var count__23401_23797 = (0);
var i__23402_23798 = (0);
while(true){
if((i__23402_23798 < count__23401_23797)){
var map__23412_23799 = chunk__23400_23796.cljs$core$IIndexed$_nth$arity$2(null,i__23402_23798);
var map__23412_23800__$1 = (((((!((map__23412_23799 == null))))?(((((map__23412_23799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23412_23799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23412_23799):map__23412_23799);
var gline_23801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23412_23800__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23412_23800__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23412_23800__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23801], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23399_23795,chunk__23400_23796,count__23401_23797,i__23402_23798,seq__23349_23788,chunk__23350_23789,count__23351_23790,i__23352_23791,seq__23021_23677,chunk__23022_23678,count__23023_23679,i__23024_23680,map__23412_23799,map__23412_23800__$1,gline_23801,gcol_23802,name_23803,vec__23396_23792,column_23793,column_info_23794,vec__23346_23785,line_23786,columns_23787,seq__23021_23779__$1,temp__5735__auto___23778,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23802], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23786,new cljs.core.Keyword(null,"col","col",-1959363084),column_23793,new cljs.core.Keyword(null,"name","name",1843675177),name_23803], null));
});})(seq__23399_23795,chunk__23400_23796,count__23401_23797,i__23402_23798,seq__23349_23788,chunk__23350_23789,count__23351_23790,i__23352_23791,seq__23021_23677,chunk__23022_23678,count__23023_23679,i__23024_23680,map__23412_23799,map__23412_23800__$1,gline_23801,gcol_23802,name_23803,vec__23396_23792,column_23793,column_info_23794,vec__23346_23785,line_23786,columns_23787,seq__23021_23779__$1,temp__5735__auto___23778,inverted))
,cljs.core.sorted_map()));


var G__23805 = seq__23399_23795;
var G__23806 = chunk__23400_23796;
var G__23807 = count__23401_23797;
var G__23808 = (i__23402_23798 + (1));
seq__23399_23795 = G__23805;
chunk__23400_23796 = G__23806;
count__23401_23797 = G__23807;
i__23402_23798 = G__23808;
continue;
} else {
var temp__5735__auto___23809__$1 = cljs.core.seq(seq__23399_23795);
if(temp__5735__auto___23809__$1){
var seq__23399_23810__$1 = temp__5735__auto___23809__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23399_23810__$1)){
var c__4556__auto___23811 = cljs.core.chunk_first(seq__23399_23810__$1);
var G__23812 = cljs.core.chunk_rest(seq__23399_23810__$1);
var G__23813 = c__4556__auto___23811;
var G__23814 = cljs.core.count(c__4556__auto___23811);
var G__23815 = (0);
seq__23399_23795 = G__23812;
chunk__23400_23796 = G__23813;
count__23401_23797 = G__23814;
i__23402_23798 = G__23815;
continue;
} else {
var map__23417_23816 = cljs.core.first(seq__23399_23810__$1);
var map__23417_23817__$1 = (((((!((map__23417_23816 == null))))?(((((map__23417_23816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23417_23816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23417_23816):map__23417_23816);
var gline_23818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23417_23817__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23417_23817__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23417_23817__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23818], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23399_23795,chunk__23400_23796,count__23401_23797,i__23402_23798,seq__23349_23788,chunk__23350_23789,count__23351_23790,i__23352_23791,seq__23021_23677,chunk__23022_23678,count__23023_23679,i__23024_23680,map__23417_23816,map__23417_23817__$1,gline_23818,gcol_23819,name_23820,seq__23399_23810__$1,temp__5735__auto___23809__$1,vec__23396_23792,column_23793,column_info_23794,vec__23346_23785,line_23786,columns_23787,seq__23021_23779__$1,temp__5735__auto___23778,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23819], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23786,new cljs.core.Keyword(null,"col","col",-1959363084),column_23793,new cljs.core.Keyword(null,"name","name",1843675177),name_23820], null));
});})(seq__23399_23795,chunk__23400_23796,count__23401_23797,i__23402_23798,seq__23349_23788,chunk__23350_23789,count__23351_23790,i__23352_23791,seq__23021_23677,chunk__23022_23678,count__23023_23679,i__23024_23680,map__23417_23816,map__23417_23817__$1,gline_23818,gcol_23819,name_23820,seq__23399_23810__$1,temp__5735__auto___23809__$1,vec__23396_23792,column_23793,column_info_23794,vec__23346_23785,line_23786,columns_23787,seq__23021_23779__$1,temp__5735__auto___23778,inverted))
,cljs.core.sorted_map()));


var G__23821 = cljs.core.next(seq__23399_23810__$1);
var G__23822 = null;
var G__23823 = (0);
var G__23824 = (0);
seq__23399_23795 = G__23821;
chunk__23400_23796 = G__23822;
count__23401_23797 = G__23823;
i__23402_23798 = G__23824;
continue;
}
} else {
}
}
break;
}


var G__23825 = seq__23349_23788;
var G__23826 = chunk__23350_23789;
var G__23827 = count__23351_23790;
var G__23828 = (i__23352_23791 + (1));
seq__23349_23788 = G__23825;
chunk__23350_23789 = G__23826;
count__23351_23790 = G__23827;
i__23352_23791 = G__23828;
continue;
} else {
var temp__5735__auto___23829__$1 = cljs.core.seq(seq__23349_23788);
if(temp__5735__auto___23829__$1){
var seq__23349_23830__$1 = temp__5735__auto___23829__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23349_23830__$1)){
var c__4556__auto___23831 = cljs.core.chunk_first(seq__23349_23830__$1);
var G__23832 = cljs.core.chunk_rest(seq__23349_23830__$1);
var G__23833 = c__4556__auto___23831;
var G__23834 = cljs.core.count(c__4556__auto___23831);
var G__23835 = (0);
seq__23349_23788 = G__23832;
chunk__23350_23789 = G__23833;
count__23351_23790 = G__23834;
i__23352_23791 = G__23835;
continue;
} else {
var vec__23423_23836 = cljs.core.first(seq__23349_23830__$1);
var column_23837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23423_23836,(0),null);
var column_info_23838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23423_23836,(1),null);
var seq__23426_23839 = cljs.core.seq(column_info_23838);
var chunk__23427_23840 = null;
var count__23428_23841 = (0);
var i__23429_23842 = (0);
while(true){
if((i__23429_23842 < count__23428_23841)){
var map__23434_23843 = chunk__23427_23840.cljs$core$IIndexed$_nth$arity$2(null,i__23429_23842);
var map__23434_23844__$1 = (((((!((map__23434_23843 == null))))?(((((map__23434_23843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23434_23843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23434_23843):map__23434_23843);
var gline_23845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23434_23844__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23434_23844__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23847 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23434_23844__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23845], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23426_23839,chunk__23427_23840,count__23428_23841,i__23429_23842,seq__23349_23788,chunk__23350_23789,count__23351_23790,i__23352_23791,seq__23021_23677,chunk__23022_23678,count__23023_23679,i__23024_23680,map__23434_23843,map__23434_23844__$1,gline_23845,gcol_23846,name_23847,vec__23423_23836,column_23837,column_info_23838,seq__23349_23830__$1,temp__5735__auto___23829__$1,vec__23346_23785,line_23786,columns_23787,seq__23021_23779__$1,temp__5735__auto___23778,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23846], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23786,new cljs.core.Keyword(null,"col","col",-1959363084),column_23837,new cljs.core.Keyword(null,"name","name",1843675177),name_23847], null));
});})(seq__23426_23839,chunk__23427_23840,count__23428_23841,i__23429_23842,seq__23349_23788,chunk__23350_23789,count__23351_23790,i__23352_23791,seq__23021_23677,chunk__23022_23678,count__23023_23679,i__23024_23680,map__23434_23843,map__23434_23844__$1,gline_23845,gcol_23846,name_23847,vec__23423_23836,column_23837,column_info_23838,seq__23349_23830__$1,temp__5735__auto___23829__$1,vec__23346_23785,line_23786,columns_23787,seq__23021_23779__$1,temp__5735__auto___23778,inverted))
,cljs.core.sorted_map()));


var G__23848 = seq__23426_23839;
var G__23849 = chunk__23427_23840;
var G__23850 = count__23428_23841;
var G__23851 = (i__23429_23842 + (1));
seq__23426_23839 = G__23848;
chunk__23427_23840 = G__23849;
count__23428_23841 = G__23850;
i__23429_23842 = G__23851;
continue;
} else {
var temp__5735__auto___23852__$2 = cljs.core.seq(seq__23426_23839);
if(temp__5735__auto___23852__$2){
var seq__23426_23853__$1 = temp__5735__auto___23852__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23426_23853__$1)){
var c__4556__auto___23854 = cljs.core.chunk_first(seq__23426_23853__$1);
var G__23855 = cljs.core.chunk_rest(seq__23426_23853__$1);
var G__23856 = c__4556__auto___23854;
var G__23857 = cljs.core.count(c__4556__auto___23854);
var G__23858 = (0);
seq__23426_23839 = G__23855;
chunk__23427_23840 = G__23856;
count__23428_23841 = G__23857;
i__23429_23842 = G__23858;
continue;
} else {
var map__23442_23859 = cljs.core.first(seq__23426_23853__$1);
var map__23442_23860__$1 = (((((!((map__23442_23859 == null))))?(((((map__23442_23859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23442_23859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23442_23859):map__23442_23859);
var gline_23861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23442_23860__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23442_23860__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23442_23860__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23861], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23426_23839,chunk__23427_23840,count__23428_23841,i__23429_23842,seq__23349_23788,chunk__23350_23789,count__23351_23790,i__23352_23791,seq__23021_23677,chunk__23022_23678,count__23023_23679,i__23024_23680,map__23442_23859,map__23442_23860__$1,gline_23861,gcol_23862,name_23863,seq__23426_23853__$1,temp__5735__auto___23852__$2,vec__23423_23836,column_23837,column_info_23838,seq__23349_23830__$1,temp__5735__auto___23829__$1,vec__23346_23785,line_23786,columns_23787,seq__23021_23779__$1,temp__5735__auto___23778,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23862], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23786,new cljs.core.Keyword(null,"col","col",-1959363084),column_23837,new cljs.core.Keyword(null,"name","name",1843675177),name_23863], null));
});})(seq__23426_23839,chunk__23427_23840,count__23428_23841,i__23429_23842,seq__23349_23788,chunk__23350_23789,count__23351_23790,i__23352_23791,seq__23021_23677,chunk__23022_23678,count__23023_23679,i__23024_23680,map__23442_23859,map__23442_23860__$1,gline_23861,gcol_23862,name_23863,seq__23426_23853__$1,temp__5735__auto___23852__$2,vec__23423_23836,column_23837,column_info_23838,seq__23349_23830__$1,temp__5735__auto___23829__$1,vec__23346_23785,line_23786,columns_23787,seq__23021_23779__$1,temp__5735__auto___23778,inverted))
,cljs.core.sorted_map()));


var G__23864 = cljs.core.next(seq__23426_23853__$1);
var G__23865 = null;
var G__23866 = (0);
var G__23867 = (0);
seq__23426_23839 = G__23864;
chunk__23427_23840 = G__23865;
count__23428_23841 = G__23866;
i__23429_23842 = G__23867;
continue;
}
} else {
}
}
break;
}


var G__23868 = cljs.core.next(seq__23349_23830__$1);
var G__23869 = null;
var G__23870 = (0);
var G__23871 = (0);
seq__23349_23788 = G__23868;
chunk__23350_23789 = G__23869;
count__23351_23790 = G__23870;
i__23352_23791 = G__23871;
continue;
}
} else {
}
}
break;
}


var G__23872 = cljs.core.next(seq__23021_23779__$1);
var G__23873 = null;
var G__23874 = (0);
var G__23875 = (0);
seq__23021_23677 = G__23872;
chunk__23022_23678 = G__23873;
count__23023_23679 = G__23874;
i__23024_23680 = G__23875;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
