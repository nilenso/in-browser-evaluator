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
var vec__22513 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22513,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22513,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22513,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22513,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22513,(4),null);
var vec__22516 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22516,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22516,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22516,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22516,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22516,(4),null);
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
var map__22520 = segmap;
var map__22520__$1 = (((((!((map__22520 == null))))?(((((map__22520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22520):map__22520);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22520__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22520__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22520__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22520__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22520__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__22523 = arguments.length;
switch (G__22523) {
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
var vec__22548 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__23362 = cljs.core.next(segs__$1);
var G__23363 = nrelseg;
var G__23364 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23362;
relseg__$1 = G__23363;
result__$1 = G__23364;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22548,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22548,(1),null);
var G__23365 = (gline + (1));
var G__23366 = cljs.core.next(lines__$1);
var G__23367 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23368 = result__$1;
gline = G__23365;
lines__$1 = G__23366;
relseg = G__23367;
result = G__23368;
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
var map__22556 = segmap;
var map__22556__$1 = (((((!((map__22556 == null))))?(((((map__22556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22556):map__22556);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22556__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22556__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22556__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22556__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22556__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__22555_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__22555_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__22564 = arguments.length;
switch (G__22564) {
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
var vec__22579 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
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
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22579,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22579,(1),null);
var G__23383 = (gline + (1));
var G__23384 = cljs.core.next(lines__$1);
var G__23385 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23386 = result__$1;
gline = G__23383;
lines__$1 = G__23384;
relseg = G__23385;
result = G__23386;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__22582){
var vec__22583 = p__22582;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22583,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22583,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22583,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22583,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22583,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__22587){
var vec__22589 = p__22587;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22589,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22589,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22589,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22589,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22589,(4),null);
var seg = vec__22589;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__22592){
var vec__22593 = p__22592;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22593,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22593,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22593,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22593,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22593,(4),null);
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
var seq__22614 = cljs.core.seq(infos);
var chunk__22615 = null;
var count__22616 = (0);
var i__22617 = (0);
while(true){
if((i__22617 < count__22616)){
var info = chunk__22615.cljs$core$IIndexed$_nth$arity$2(null,i__22617);
var segv_23391 = info__GT_segv(info,source_idx,line,col);
var gline_23392 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23393 = cljs.core.count(cljs.core.deref(lines));
if((gline_23392 > (lc_23393 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22614,chunk__22615,count__22616,i__22617,segv_23391,gline_23392,lc_23393,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23392 - (lc_23393 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23391], null));
});})(seq__22614,chunk__22615,count__22616,i__22617,segv_23391,gline_23392,lc_23393,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22614,chunk__22615,count__22616,i__22617,segv_23391,gline_23392,lc_23393,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23392], null),cljs.core.conj,segv_23391);
});})(seq__22614,chunk__22615,count__22616,i__22617,segv_23391,gline_23392,lc_23393,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23394 = seq__22614;
var G__23395 = chunk__22615;
var G__23396 = count__22616;
var G__23397 = (i__22617 + (1));
seq__22614 = G__23394;
chunk__22615 = G__23395;
count__22616 = G__23396;
i__22617 = G__23397;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__22614);
if(temp__5735__auto__){
var seq__22614__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22614__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__22614__$1);
var G__23401 = cljs.core.chunk_rest(seq__22614__$1);
var G__23402 = c__4556__auto__;
var G__23403 = cljs.core.count(c__4556__auto__);
var G__23404 = (0);
seq__22614 = G__23401;
chunk__22615 = G__23402;
count__22616 = G__23403;
i__22617 = G__23404;
continue;
} else {
var info = cljs.core.first(seq__22614__$1);
var segv_23405 = info__GT_segv(info,source_idx,line,col);
var gline_23406 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23407 = cljs.core.count(cljs.core.deref(lines));
if((gline_23406 > (lc_23407 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22614,chunk__22615,count__22616,i__22617,segv_23405,gline_23406,lc_23407,info,seq__22614__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23406 - (lc_23407 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23405], null));
});})(seq__22614,chunk__22615,count__22616,i__22617,segv_23405,gline_23406,lc_23407,info,seq__22614__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22614,chunk__22615,count__22616,i__22617,segv_23405,gline_23406,lc_23407,info,seq__22614__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23406], null),cljs.core.conj,segv_23405);
});})(seq__22614,chunk__22615,count__22616,i__22617,segv_23405,gline_23406,lc_23407,info,seq__22614__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23409 = cljs.core.next(seq__22614__$1);
var G__23410 = null;
var G__23411 = (0);
var G__23412 = (0);
seq__22614 = G__23409;
chunk__22615 = G__23410;
count__22616 = G__23411;
i__22617 = G__23412;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__22629_23414 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__22630_23415 = null;
var count__22631_23416 = (0);
var i__22632_23417 = (0);
while(true){
if((i__22632_23417 < count__22631_23416)){
var vec__22824_23421 = chunk__22630_23415.cljs$core$IIndexed$_nth$arity$2(null,i__22632_23417);
var source_idx_23422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22824_23421,(0),null);
var vec__22827_23423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22824_23421,(1),null);
var __23424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22827_23423,(0),null);
var lines_23425__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22827_23423,(1),null);
var seq__22832_23426 = cljs.core.seq(lines_23425__$1);
var chunk__22833_23427 = null;
var count__22834_23428 = (0);
var i__22835_23429 = (0);
while(true){
if((i__22835_23429 < count__22834_23428)){
var vec__22874_23430 = chunk__22833_23427.cljs$core$IIndexed$_nth$arity$2(null,i__22835_23429);
var line_23431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22874_23430,(0),null);
var cols_23432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22874_23430,(1),null);
var seq__22877_23433 = cljs.core.seq(cols_23432);
var chunk__22878_23434 = null;
var count__22879_23435 = (0);
var i__22880_23436 = (0);
while(true){
if((i__22880_23436 < count__22879_23435)){
var vec__22890_23437 = chunk__22878_23434.cljs$core$IIndexed$_nth$arity$2(null,i__22880_23436);
var col_23438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22890_23437,(0),null);
var infos_23439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22890_23437,(1),null);
encode_cols(infos_23439,source_idx_23422,line_23431,col_23438);


var G__23440 = seq__22877_23433;
var G__23441 = chunk__22878_23434;
var G__23442 = count__22879_23435;
var G__23443 = (i__22880_23436 + (1));
seq__22877_23433 = G__23440;
chunk__22878_23434 = G__23441;
count__22879_23435 = G__23442;
i__22880_23436 = G__23443;
continue;
} else {
var temp__5735__auto___23444 = cljs.core.seq(seq__22877_23433);
if(temp__5735__auto___23444){
var seq__22877_23445__$1 = temp__5735__auto___23444;
if(cljs.core.chunked_seq_QMARK_(seq__22877_23445__$1)){
var c__4556__auto___23446 = cljs.core.chunk_first(seq__22877_23445__$1);
var G__23447 = cljs.core.chunk_rest(seq__22877_23445__$1);
var G__23448 = c__4556__auto___23446;
var G__23449 = cljs.core.count(c__4556__auto___23446);
var G__23450 = (0);
seq__22877_23433 = G__23447;
chunk__22878_23434 = G__23448;
count__22879_23435 = G__23449;
i__22880_23436 = G__23450;
continue;
} else {
var vec__22893_23451 = cljs.core.first(seq__22877_23445__$1);
var col_23452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22893_23451,(0),null);
var infos_23453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22893_23451,(1),null);
encode_cols(infos_23453,source_idx_23422,line_23431,col_23452);


var G__23454 = cljs.core.next(seq__22877_23445__$1);
var G__23455 = null;
var G__23456 = (0);
var G__23457 = (0);
seq__22877_23433 = G__23454;
chunk__22878_23434 = G__23455;
count__22879_23435 = G__23456;
i__22880_23436 = G__23457;
continue;
}
} else {
}
}
break;
}


var G__23458 = seq__22832_23426;
var G__23459 = chunk__22833_23427;
var G__23460 = count__22834_23428;
var G__23461 = (i__22835_23429 + (1));
seq__22832_23426 = G__23458;
chunk__22833_23427 = G__23459;
count__22834_23428 = G__23460;
i__22835_23429 = G__23461;
continue;
} else {
var temp__5735__auto___23462 = cljs.core.seq(seq__22832_23426);
if(temp__5735__auto___23462){
var seq__22832_23463__$1 = temp__5735__auto___23462;
if(cljs.core.chunked_seq_QMARK_(seq__22832_23463__$1)){
var c__4556__auto___23464 = cljs.core.chunk_first(seq__22832_23463__$1);
var G__23465 = cljs.core.chunk_rest(seq__22832_23463__$1);
var G__23466 = c__4556__auto___23464;
var G__23467 = cljs.core.count(c__4556__auto___23464);
var G__23468 = (0);
seq__22832_23426 = G__23465;
chunk__22833_23427 = G__23466;
count__22834_23428 = G__23467;
i__22835_23429 = G__23468;
continue;
} else {
var vec__22897_23469 = cljs.core.first(seq__22832_23463__$1);
var line_23470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22897_23469,(0),null);
var cols_23471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22897_23469,(1),null);
var seq__22901_23472 = cljs.core.seq(cols_23471);
var chunk__22902_23473 = null;
var count__22903_23474 = (0);
var i__22904_23475 = (0);
while(true){
if((i__22904_23475 < count__22903_23474)){
var vec__22911_23476 = chunk__22902_23473.cljs$core$IIndexed$_nth$arity$2(null,i__22904_23475);
var col_23477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22911_23476,(0),null);
var infos_23478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22911_23476,(1),null);
encode_cols(infos_23478,source_idx_23422,line_23470,col_23477);


var G__23479 = seq__22901_23472;
var G__23480 = chunk__22902_23473;
var G__23481 = count__22903_23474;
var G__23482 = (i__22904_23475 + (1));
seq__22901_23472 = G__23479;
chunk__22902_23473 = G__23480;
count__22903_23474 = G__23481;
i__22904_23475 = G__23482;
continue;
} else {
var temp__5735__auto___23483__$1 = cljs.core.seq(seq__22901_23472);
if(temp__5735__auto___23483__$1){
var seq__22901_23484__$1 = temp__5735__auto___23483__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22901_23484__$1)){
var c__4556__auto___23485 = cljs.core.chunk_first(seq__22901_23484__$1);
var G__23486 = cljs.core.chunk_rest(seq__22901_23484__$1);
var G__23487 = c__4556__auto___23485;
var G__23488 = cljs.core.count(c__4556__auto___23485);
var G__23489 = (0);
seq__22901_23472 = G__23486;
chunk__22902_23473 = G__23487;
count__22903_23474 = G__23488;
i__22904_23475 = G__23489;
continue;
} else {
var vec__22914_23490 = cljs.core.first(seq__22901_23484__$1);
var col_23491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22914_23490,(0),null);
var infos_23492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22914_23490,(1),null);
encode_cols(infos_23492,source_idx_23422,line_23470,col_23491);


var G__23493 = cljs.core.next(seq__22901_23484__$1);
var G__23494 = null;
var G__23495 = (0);
var G__23496 = (0);
seq__22901_23472 = G__23493;
chunk__22902_23473 = G__23494;
count__22903_23474 = G__23495;
i__22904_23475 = G__23496;
continue;
}
} else {
}
}
break;
}


var G__23497 = cljs.core.next(seq__22832_23463__$1);
var G__23498 = null;
var G__23499 = (0);
var G__23500 = (0);
seq__22832_23426 = G__23497;
chunk__22833_23427 = G__23498;
count__22834_23428 = G__23499;
i__22835_23429 = G__23500;
continue;
}
} else {
}
}
break;
}


var G__23501 = seq__22629_23414;
var G__23502 = chunk__22630_23415;
var G__23503 = count__22631_23416;
var G__23504 = (i__22632_23417 + (1));
seq__22629_23414 = G__23501;
chunk__22630_23415 = G__23502;
count__22631_23416 = G__23503;
i__22632_23417 = G__23504;
continue;
} else {
var temp__5735__auto___23505 = cljs.core.seq(seq__22629_23414);
if(temp__5735__auto___23505){
var seq__22629_23506__$1 = temp__5735__auto___23505;
if(cljs.core.chunked_seq_QMARK_(seq__22629_23506__$1)){
var c__4556__auto___23507 = cljs.core.chunk_first(seq__22629_23506__$1);
var G__23508 = cljs.core.chunk_rest(seq__22629_23506__$1);
var G__23509 = c__4556__auto___23507;
var G__23510 = cljs.core.count(c__4556__auto___23507);
var G__23511 = (0);
seq__22629_23414 = G__23508;
chunk__22630_23415 = G__23509;
count__22631_23416 = G__23510;
i__22632_23417 = G__23511;
continue;
} else {
var vec__22917_23512 = cljs.core.first(seq__22629_23506__$1);
var source_idx_23513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22917_23512,(0),null);
var vec__22920_23514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22917_23512,(1),null);
var __23515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22920_23514,(0),null);
var lines_23516__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22920_23514,(1),null);
var seq__22923_23517 = cljs.core.seq(lines_23516__$1);
var chunk__22924_23518 = null;
var count__22925_23519 = (0);
var i__22926_23520 = (0);
while(true){
if((i__22926_23520 < count__22925_23519)){
var vec__22967_23521 = chunk__22924_23518.cljs$core$IIndexed$_nth$arity$2(null,i__22926_23520);
var line_23522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22967_23521,(0),null);
var cols_23523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22967_23521,(1),null);
var seq__22970_23524 = cljs.core.seq(cols_23523);
var chunk__22971_23525 = null;
var count__22972_23526 = (0);
var i__22973_23527 = (0);
while(true){
if((i__22973_23527 < count__22972_23526)){
var vec__22984_23528 = chunk__22971_23525.cljs$core$IIndexed$_nth$arity$2(null,i__22973_23527);
var col_23529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22984_23528,(0),null);
var infos_23530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22984_23528,(1),null);
encode_cols(infos_23530,source_idx_23513,line_23522,col_23529);


var G__23533 = seq__22970_23524;
var G__23534 = chunk__22971_23525;
var G__23535 = count__22972_23526;
var G__23536 = (i__22973_23527 + (1));
seq__22970_23524 = G__23533;
chunk__22971_23525 = G__23534;
count__22972_23526 = G__23535;
i__22973_23527 = G__23536;
continue;
} else {
var temp__5735__auto___23539__$1 = cljs.core.seq(seq__22970_23524);
if(temp__5735__auto___23539__$1){
var seq__22970_23540__$1 = temp__5735__auto___23539__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22970_23540__$1)){
var c__4556__auto___23543 = cljs.core.chunk_first(seq__22970_23540__$1);
var G__23546 = cljs.core.chunk_rest(seq__22970_23540__$1);
var G__23547 = c__4556__auto___23543;
var G__23548 = cljs.core.count(c__4556__auto___23543);
var G__23549 = (0);
seq__22970_23524 = G__23546;
chunk__22971_23525 = G__23547;
count__22972_23526 = G__23548;
i__22973_23527 = G__23549;
continue;
} else {
var vec__22987_23550 = cljs.core.first(seq__22970_23540__$1);
var col_23551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22987_23550,(0),null);
var infos_23552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22987_23550,(1),null);
encode_cols(infos_23552,source_idx_23513,line_23522,col_23551);


var G__23555 = cljs.core.next(seq__22970_23540__$1);
var G__23556 = null;
var G__23557 = (0);
var G__23558 = (0);
seq__22970_23524 = G__23555;
chunk__22971_23525 = G__23556;
count__22972_23526 = G__23557;
i__22973_23527 = G__23558;
continue;
}
} else {
}
}
break;
}


var G__23559 = seq__22923_23517;
var G__23560 = chunk__22924_23518;
var G__23561 = count__22925_23519;
var G__23562 = (i__22926_23520 + (1));
seq__22923_23517 = G__23559;
chunk__22924_23518 = G__23560;
count__22925_23519 = G__23561;
i__22926_23520 = G__23562;
continue;
} else {
var temp__5735__auto___23565__$1 = cljs.core.seq(seq__22923_23517);
if(temp__5735__auto___23565__$1){
var seq__22923_23566__$1 = temp__5735__auto___23565__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22923_23566__$1)){
var c__4556__auto___23568 = cljs.core.chunk_first(seq__22923_23566__$1);
var G__23569 = cljs.core.chunk_rest(seq__22923_23566__$1);
var G__23570 = c__4556__auto___23568;
var G__23571 = cljs.core.count(c__4556__auto___23568);
var G__23572 = (0);
seq__22923_23517 = G__23569;
chunk__22924_23518 = G__23570;
count__22925_23519 = G__23571;
i__22926_23520 = G__23572;
continue;
} else {
var vec__22990_23576 = cljs.core.first(seq__22923_23566__$1);
var line_23577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22990_23576,(0),null);
var cols_23578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22990_23576,(1),null);
var seq__22993_23579 = cljs.core.seq(cols_23578);
var chunk__22994_23580 = null;
var count__22995_23581 = (0);
var i__22996_23582 = (0);
while(true){
if((i__22996_23582 < count__22995_23581)){
var vec__23007_23583 = chunk__22994_23580.cljs$core$IIndexed$_nth$arity$2(null,i__22996_23582);
var col_23584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23007_23583,(0),null);
var infos_23585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23007_23583,(1),null);
encode_cols(infos_23585,source_idx_23513,line_23577,col_23584);


var G__23588 = seq__22993_23579;
var G__23589 = chunk__22994_23580;
var G__23590 = count__22995_23581;
var G__23591 = (i__22996_23582 + (1));
seq__22993_23579 = G__23588;
chunk__22994_23580 = G__23589;
count__22995_23581 = G__23590;
i__22996_23582 = G__23591;
continue;
} else {
var temp__5735__auto___23592__$2 = cljs.core.seq(seq__22993_23579);
if(temp__5735__auto___23592__$2){
var seq__22993_23593__$1 = temp__5735__auto___23592__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22993_23593__$1)){
var c__4556__auto___23594 = cljs.core.chunk_first(seq__22993_23593__$1);
var G__23595 = cljs.core.chunk_rest(seq__22993_23593__$1);
var G__23596 = c__4556__auto___23594;
var G__23597 = cljs.core.count(c__4556__auto___23594);
var G__23598 = (0);
seq__22993_23579 = G__23595;
chunk__22994_23580 = G__23596;
count__22995_23581 = G__23597;
i__22996_23582 = G__23598;
continue;
} else {
var vec__23010_23599 = cljs.core.first(seq__22993_23593__$1);
var col_23600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23010_23599,(0),null);
var infos_23601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23010_23599,(1),null);
encode_cols(infos_23601,source_idx_23513,line_23577,col_23600);


var G__23602 = cljs.core.next(seq__22993_23593__$1);
var G__23603 = null;
var G__23604 = (0);
var G__23605 = (0);
seq__22993_23579 = G__23602;
chunk__22994_23580 = G__23603;
count__22995_23581 = G__23604;
i__22996_23582 = G__23605;
continue;
}
} else {
}
}
break;
}


var G__23606 = cljs.core.next(seq__22923_23566__$1);
var G__23607 = null;
var G__23608 = (0);
var G__23609 = (0);
seq__22923_23517 = G__23606;
chunk__22924_23518 = G__23607;
count__22925_23519 = G__23608;
i__22926_23520 = G__23609;
continue;
}
} else {
}
}
break;
}


var G__23610 = cljs.core.next(seq__22629_23506__$1);
var G__23611 = null;
var G__23612 = (0);
var G__23613 = (0);
seq__22629_23414 = G__23610;
chunk__22630_23415 = G__23611;
count__22631_23416 = G__23612;
i__22632_23417 = G__23613;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__23013 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__22607_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22607_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__22608_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__22608_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22609_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__22609_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__23015 = G__23013;
goog.object.set(G__23015,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__23015;
} else {
return G__23013;
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
var vec__23016 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23016,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23016,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__23019 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23019,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23019,(1),null);
var G__23614 = cljs.core.next(col_map_seq);
var G__23615 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__23019,col,infos,vec__23016,line,col_map){
return (function (v,p__23022){
var map__23023 = p__23022;
var map__23023__$1 = (((((!((map__23023 == null))))?(((((map__23023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23023):map__23023);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23023__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23023__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__23019,col,infos,vec__23016,line,col_map))
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
var seq__23025_23618 = cljs.core.seq(reverse_map);
var chunk__23026_23619 = null;
var count__23027_23620 = (0);
var i__23028_23621 = (0);
while(true){
if((i__23028_23621 < count__23027_23620)){
var vec__23179_23622 = chunk__23026_23619.cljs$core$IIndexed$_nth$arity$2(null,i__23028_23621);
var line_23623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23179_23622,(0),null);
var columns_23624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23179_23622,(1),null);
var seq__23182_23625 = cljs.core.seq(columns_23624);
var chunk__23183_23626 = null;
var count__23184_23627 = (0);
var i__23185_23628 = (0);
while(true){
if((i__23185_23628 < count__23184_23627)){
var vec__23219_23629 = chunk__23183_23626.cljs$core$IIndexed$_nth$arity$2(null,i__23185_23628);
var column_23630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23219_23629,(0),null);
var column_info_23631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23219_23629,(1),null);
var seq__23222_23632 = cljs.core.seq(column_info_23631);
var chunk__23223_23633 = null;
var count__23224_23634 = (0);
var i__23225_23635 = (0);
while(true){
if((i__23225_23635 < count__23224_23634)){
var map__23230_23636 = chunk__23223_23633.cljs$core$IIndexed$_nth$arity$2(null,i__23225_23635);
var map__23230_23637__$1 = (((((!((map__23230_23636 == null))))?(((((map__23230_23636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23230_23636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23230_23636):map__23230_23636);
var gline_23638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23230_23637__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23230_23637__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23230_23637__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23638], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23222_23632,chunk__23223_23633,count__23224_23634,i__23225_23635,seq__23182_23625,chunk__23183_23626,count__23184_23627,i__23185_23628,seq__23025_23618,chunk__23026_23619,count__23027_23620,i__23028_23621,map__23230_23636,map__23230_23637__$1,gline_23638,gcol_23639,name_23640,vec__23219_23629,column_23630,column_info_23631,vec__23179_23622,line_23623,columns_23624,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23639], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23623,new cljs.core.Keyword(null,"col","col",-1959363084),column_23630,new cljs.core.Keyword(null,"name","name",1843675177),name_23640], null));
});})(seq__23222_23632,chunk__23223_23633,count__23224_23634,i__23225_23635,seq__23182_23625,chunk__23183_23626,count__23184_23627,i__23185_23628,seq__23025_23618,chunk__23026_23619,count__23027_23620,i__23028_23621,map__23230_23636,map__23230_23637__$1,gline_23638,gcol_23639,name_23640,vec__23219_23629,column_23630,column_info_23631,vec__23179_23622,line_23623,columns_23624,inverted))
,cljs.core.sorted_map()));


var G__23641 = seq__23222_23632;
var G__23642 = chunk__23223_23633;
var G__23643 = count__23224_23634;
var G__23644 = (i__23225_23635 + (1));
seq__23222_23632 = G__23641;
chunk__23223_23633 = G__23642;
count__23224_23634 = G__23643;
i__23225_23635 = G__23644;
continue;
} else {
var temp__5735__auto___23645 = cljs.core.seq(seq__23222_23632);
if(temp__5735__auto___23645){
var seq__23222_23646__$1 = temp__5735__auto___23645;
if(cljs.core.chunked_seq_QMARK_(seq__23222_23646__$1)){
var c__4556__auto___23647 = cljs.core.chunk_first(seq__23222_23646__$1);
var G__23648 = cljs.core.chunk_rest(seq__23222_23646__$1);
var G__23649 = c__4556__auto___23647;
var G__23650 = cljs.core.count(c__4556__auto___23647);
var G__23651 = (0);
seq__23222_23632 = G__23648;
chunk__23223_23633 = G__23649;
count__23224_23634 = G__23650;
i__23225_23635 = G__23651;
continue;
} else {
var map__23241_23652 = cljs.core.first(seq__23222_23646__$1);
var map__23241_23653__$1 = (((((!((map__23241_23652 == null))))?(((((map__23241_23652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23241_23652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23241_23652):map__23241_23652);
var gline_23654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23241_23653__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23241_23653__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23241_23653__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23654], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23222_23632,chunk__23223_23633,count__23224_23634,i__23225_23635,seq__23182_23625,chunk__23183_23626,count__23184_23627,i__23185_23628,seq__23025_23618,chunk__23026_23619,count__23027_23620,i__23028_23621,map__23241_23652,map__23241_23653__$1,gline_23654,gcol_23655,name_23656,seq__23222_23646__$1,temp__5735__auto___23645,vec__23219_23629,column_23630,column_info_23631,vec__23179_23622,line_23623,columns_23624,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23655], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23623,new cljs.core.Keyword(null,"col","col",-1959363084),column_23630,new cljs.core.Keyword(null,"name","name",1843675177),name_23656], null));
});})(seq__23222_23632,chunk__23223_23633,count__23224_23634,i__23225_23635,seq__23182_23625,chunk__23183_23626,count__23184_23627,i__23185_23628,seq__23025_23618,chunk__23026_23619,count__23027_23620,i__23028_23621,map__23241_23652,map__23241_23653__$1,gline_23654,gcol_23655,name_23656,seq__23222_23646__$1,temp__5735__auto___23645,vec__23219_23629,column_23630,column_info_23631,vec__23179_23622,line_23623,columns_23624,inverted))
,cljs.core.sorted_map()));


var G__23657 = cljs.core.next(seq__23222_23646__$1);
var G__23658 = null;
var G__23659 = (0);
var G__23660 = (0);
seq__23222_23632 = G__23657;
chunk__23223_23633 = G__23658;
count__23224_23634 = G__23659;
i__23225_23635 = G__23660;
continue;
}
} else {
}
}
break;
}


var G__23661 = seq__23182_23625;
var G__23662 = chunk__23183_23626;
var G__23663 = count__23184_23627;
var G__23664 = (i__23185_23628 + (1));
seq__23182_23625 = G__23661;
chunk__23183_23626 = G__23662;
count__23184_23627 = G__23663;
i__23185_23628 = G__23664;
continue;
} else {
var temp__5735__auto___23666 = cljs.core.seq(seq__23182_23625);
if(temp__5735__auto___23666){
var seq__23182_23667__$1 = temp__5735__auto___23666;
if(cljs.core.chunked_seq_QMARK_(seq__23182_23667__$1)){
var c__4556__auto___23671 = cljs.core.chunk_first(seq__23182_23667__$1);
var G__23672 = cljs.core.chunk_rest(seq__23182_23667__$1);
var G__23673 = c__4556__auto___23671;
var G__23674 = cljs.core.count(c__4556__auto___23671);
var G__23675 = (0);
seq__23182_23625 = G__23672;
chunk__23183_23626 = G__23673;
count__23184_23627 = G__23674;
i__23185_23628 = G__23675;
continue;
} else {
var vec__23245_23676 = cljs.core.first(seq__23182_23667__$1);
var column_23677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23245_23676,(0),null);
var column_info_23678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23245_23676,(1),null);
var seq__23248_23679 = cljs.core.seq(column_info_23678);
var chunk__23249_23680 = null;
var count__23250_23681 = (0);
var i__23251_23682 = (0);
while(true){
if((i__23251_23682 < count__23250_23681)){
var map__23256_23685 = chunk__23249_23680.cljs$core$IIndexed$_nth$arity$2(null,i__23251_23682);
var map__23256_23686__$1 = (((((!((map__23256_23685 == null))))?(((((map__23256_23685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23256_23685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23256_23685):map__23256_23685);
var gline_23687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23256_23686__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23256_23686__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23256_23686__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23687], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23248_23679,chunk__23249_23680,count__23250_23681,i__23251_23682,seq__23182_23625,chunk__23183_23626,count__23184_23627,i__23185_23628,seq__23025_23618,chunk__23026_23619,count__23027_23620,i__23028_23621,map__23256_23685,map__23256_23686__$1,gline_23687,gcol_23688,name_23689,vec__23245_23676,column_23677,column_info_23678,seq__23182_23667__$1,temp__5735__auto___23666,vec__23179_23622,line_23623,columns_23624,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23688], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23623,new cljs.core.Keyword(null,"col","col",-1959363084),column_23677,new cljs.core.Keyword(null,"name","name",1843675177),name_23689], null));
});})(seq__23248_23679,chunk__23249_23680,count__23250_23681,i__23251_23682,seq__23182_23625,chunk__23183_23626,count__23184_23627,i__23185_23628,seq__23025_23618,chunk__23026_23619,count__23027_23620,i__23028_23621,map__23256_23685,map__23256_23686__$1,gline_23687,gcol_23688,name_23689,vec__23245_23676,column_23677,column_info_23678,seq__23182_23667__$1,temp__5735__auto___23666,vec__23179_23622,line_23623,columns_23624,inverted))
,cljs.core.sorted_map()));


var G__23701 = seq__23248_23679;
var G__23702 = chunk__23249_23680;
var G__23703 = count__23250_23681;
var G__23704 = (i__23251_23682 + (1));
seq__23248_23679 = G__23701;
chunk__23249_23680 = G__23702;
count__23250_23681 = G__23703;
i__23251_23682 = G__23704;
continue;
} else {
var temp__5735__auto___23708__$1 = cljs.core.seq(seq__23248_23679);
if(temp__5735__auto___23708__$1){
var seq__23248_23709__$1 = temp__5735__auto___23708__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23248_23709__$1)){
var c__4556__auto___23710 = cljs.core.chunk_first(seq__23248_23709__$1);
var G__23712 = cljs.core.chunk_rest(seq__23248_23709__$1);
var G__23713 = c__4556__auto___23710;
var G__23714 = cljs.core.count(c__4556__auto___23710);
var G__23715 = (0);
seq__23248_23679 = G__23712;
chunk__23249_23680 = G__23713;
count__23250_23681 = G__23714;
i__23251_23682 = G__23715;
continue;
} else {
var map__23258_23716 = cljs.core.first(seq__23248_23709__$1);
var map__23258_23717__$1 = (((((!((map__23258_23716 == null))))?(((((map__23258_23716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23258_23716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23258_23716):map__23258_23716);
var gline_23718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23258_23717__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23258_23717__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23258_23717__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23718], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23248_23679,chunk__23249_23680,count__23250_23681,i__23251_23682,seq__23182_23625,chunk__23183_23626,count__23184_23627,i__23185_23628,seq__23025_23618,chunk__23026_23619,count__23027_23620,i__23028_23621,map__23258_23716,map__23258_23717__$1,gline_23718,gcol_23719,name_23720,seq__23248_23709__$1,temp__5735__auto___23708__$1,vec__23245_23676,column_23677,column_info_23678,seq__23182_23667__$1,temp__5735__auto___23666,vec__23179_23622,line_23623,columns_23624,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23719], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23623,new cljs.core.Keyword(null,"col","col",-1959363084),column_23677,new cljs.core.Keyword(null,"name","name",1843675177),name_23720], null));
});})(seq__23248_23679,chunk__23249_23680,count__23250_23681,i__23251_23682,seq__23182_23625,chunk__23183_23626,count__23184_23627,i__23185_23628,seq__23025_23618,chunk__23026_23619,count__23027_23620,i__23028_23621,map__23258_23716,map__23258_23717__$1,gline_23718,gcol_23719,name_23720,seq__23248_23709__$1,temp__5735__auto___23708__$1,vec__23245_23676,column_23677,column_info_23678,seq__23182_23667__$1,temp__5735__auto___23666,vec__23179_23622,line_23623,columns_23624,inverted))
,cljs.core.sorted_map()));


var G__23721 = cljs.core.next(seq__23248_23709__$1);
var G__23722 = null;
var G__23723 = (0);
var G__23724 = (0);
seq__23248_23679 = G__23721;
chunk__23249_23680 = G__23722;
count__23250_23681 = G__23723;
i__23251_23682 = G__23724;
continue;
}
} else {
}
}
break;
}


var G__23725 = cljs.core.next(seq__23182_23667__$1);
var G__23726 = null;
var G__23727 = (0);
var G__23728 = (0);
seq__23182_23625 = G__23725;
chunk__23183_23626 = G__23726;
count__23184_23627 = G__23727;
i__23185_23628 = G__23728;
continue;
}
} else {
}
}
break;
}


var G__23729 = seq__23025_23618;
var G__23730 = chunk__23026_23619;
var G__23731 = count__23027_23620;
var G__23732 = (i__23028_23621 + (1));
seq__23025_23618 = G__23729;
chunk__23026_23619 = G__23730;
count__23027_23620 = G__23731;
i__23028_23621 = G__23732;
continue;
} else {
var temp__5735__auto___23733 = cljs.core.seq(seq__23025_23618);
if(temp__5735__auto___23733){
var seq__23025_23734__$1 = temp__5735__auto___23733;
if(cljs.core.chunked_seq_QMARK_(seq__23025_23734__$1)){
var c__4556__auto___23735 = cljs.core.chunk_first(seq__23025_23734__$1);
var G__23736 = cljs.core.chunk_rest(seq__23025_23734__$1);
var G__23737 = c__4556__auto___23735;
var G__23738 = cljs.core.count(c__4556__auto___23735);
var G__23739 = (0);
seq__23025_23618 = G__23736;
chunk__23026_23619 = G__23737;
count__23027_23620 = G__23738;
i__23028_23621 = G__23739;
continue;
} else {
var vec__23260_23740 = cljs.core.first(seq__23025_23734__$1);
var line_23741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23260_23740,(0),null);
var columns_23742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23260_23740,(1),null);
var seq__23263_23743 = cljs.core.seq(columns_23742);
var chunk__23264_23744 = null;
var count__23265_23745 = (0);
var i__23266_23746 = (0);
while(true){
if((i__23266_23746 < count__23265_23745)){
var vec__23318_23747 = chunk__23264_23744.cljs$core$IIndexed$_nth$arity$2(null,i__23266_23746);
var column_23748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23318_23747,(0),null);
var column_info_23749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23318_23747,(1),null);
var seq__23321_23750 = cljs.core.seq(column_info_23749);
var chunk__23322_23751 = null;
var count__23323_23752 = (0);
var i__23324_23753 = (0);
while(true){
if((i__23324_23753 < count__23323_23752)){
var map__23329_23754 = chunk__23322_23751.cljs$core$IIndexed$_nth$arity$2(null,i__23324_23753);
var map__23329_23755__$1 = (((((!((map__23329_23754 == null))))?(((((map__23329_23754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23329_23754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23329_23754):map__23329_23754);
var gline_23756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23329_23755__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23329_23755__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23758 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23329_23755__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23756], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23321_23750,chunk__23322_23751,count__23323_23752,i__23324_23753,seq__23263_23743,chunk__23264_23744,count__23265_23745,i__23266_23746,seq__23025_23618,chunk__23026_23619,count__23027_23620,i__23028_23621,map__23329_23754,map__23329_23755__$1,gline_23756,gcol_23757,name_23758,vec__23318_23747,column_23748,column_info_23749,vec__23260_23740,line_23741,columns_23742,seq__23025_23734__$1,temp__5735__auto___23733,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23757], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23741,new cljs.core.Keyword(null,"col","col",-1959363084),column_23748,new cljs.core.Keyword(null,"name","name",1843675177),name_23758], null));
});})(seq__23321_23750,chunk__23322_23751,count__23323_23752,i__23324_23753,seq__23263_23743,chunk__23264_23744,count__23265_23745,i__23266_23746,seq__23025_23618,chunk__23026_23619,count__23027_23620,i__23028_23621,map__23329_23754,map__23329_23755__$1,gline_23756,gcol_23757,name_23758,vec__23318_23747,column_23748,column_info_23749,vec__23260_23740,line_23741,columns_23742,seq__23025_23734__$1,temp__5735__auto___23733,inverted))
,cljs.core.sorted_map()));


var G__23759 = seq__23321_23750;
var G__23760 = chunk__23322_23751;
var G__23761 = count__23323_23752;
var G__23762 = (i__23324_23753 + (1));
seq__23321_23750 = G__23759;
chunk__23322_23751 = G__23760;
count__23323_23752 = G__23761;
i__23324_23753 = G__23762;
continue;
} else {
var temp__5735__auto___23763__$1 = cljs.core.seq(seq__23321_23750);
if(temp__5735__auto___23763__$1){
var seq__23321_23764__$1 = temp__5735__auto___23763__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23321_23764__$1)){
var c__4556__auto___23765 = cljs.core.chunk_first(seq__23321_23764__$1);
var G__23766 = cljs.core.chunk_rest(seq__23321_23764__$1);
var G__23767 = c__4556__auto___23765;
var G__23768 = cljs.core.count(c__4556__auto___23765);
var G__23769 = (0);
seq__23321_23750 = G__23766;
chunk__23322_23751 = G__23767;
count__23323_23752 = G__23768;
i__23324_23753 = G__23769;
continue;
} else {
var map__23331_23770 = cljs.core.first(seq__23321_23764__$1);
var map__23331_23771__$1 = (((((!((map__23331_23770 == null))))?(((((map__23331_23770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23331_23770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23331_23770):map__23331_23770);
var gline_23772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23331_23771__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23331_23771__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23331_23771__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23772], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23321_23750,chunk__23322_23751,count__23323_23752,i__23324_23753,seq__23263_23743,chunk__23264_23744,count__23265_23745,i__23266_23746,seq__23025_23618,chunk__23026_23619,count__23027_23620,i__23028_23621,map__23331_23770,map__23331_23771__$1,gline_23772,gcol_23773,name_23774,seq__23321_23764__$1,temp__5735__auto___23763__$1,vec__23318_23747,column_23748,column_info_23749,vec__23260_23740,line_23741,columns_23742,seq__23025_23734__$1,temp__5735__auto___23733,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23773], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23741,new cljs.core.Keyword(null,"col","col",-1959363084),column_23748,new cljs.core.Keyword(null,"name","name",1843675177),name_23774], null));
});})(seq__23321_23750,chunk__23322_23751,count__23323_23752,i__23324_23753,seq__23263_23743,chunk__23264_23744,count__23265_23745,i__23266_23746,seq__23025_23618,chunk__23026_23619,count__23027_23620,i__23028_23621,map__23331_23770,map__23331_23771__$1,gline_23772,gcol_23773,name_23774,seq__23321_23764__$1,temp__5735__auto___23763__$1,vec__23318_23747,column_23748,column_info_23749,vec__23260_23740,line_23741,columns_23742,seq__23025_23734__$1,temp__5735__auto___23733,inverted))
,cljs.core.sorted_map()));


var G__23775 = cljs.core.next(seq__23321_23764__$1);
var G__23776 = null;
var G__23777 = (0);
var G__23778 = (0);
seq__23321_23750 = G__23775;
chunk__23322_23751 = G__23776;
count__23323_23752 = G__23777;
i__23324_23753 = G__23778;
continue;
}
} else {
}
}
break;
}


var G__23779 = seq__23263_23743;
var G__23780 = chunk__23264_23744;
var G__23781 = count__23265_23745;
var G__23782 = (i__23266_23746 + (1));
seq__23263_23743 = G__23779;
chunk__23264_23744 = G__23780;
count__23265_23745 = G__23781;
i__23266_23746 = G__23782;
continue;
} else {
var temp__5735__auto___23783__$1 = cljs.core.seq(seq__23263_23743);
if(temp__5735__auto___23783__$1){
var seq__23263_23784__$1 = temp__5735__auto___23783__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23263_23784__$1)){
var c__4556__auto___23785 = cljs.core.chunk_first(seq__23263_23784__$1);
var G__23786 = cljs.core.chunk_rest(seq__23263_23784__$1);
var G__23787 = c__4556__auto___23785;
var G__23788 = cljs.core.count(c__4556__auto___23785);
var G__23789 = (0);
seq__23263_23743 = G__23786;
chunk__23264_23744 = G__23787;
count__23265_23745 = G__23788;
i__23266_23746 = G__23789;
continue;
} else {
var vec__23333_23790 = cljs.core.first(seq__23263_23784__$1);
var column_23791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23333_23790,(0),null);
var column_info_23792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23333_23790,(1),null);
var seq__23336_23793 = cljs.core.seq(column_info_23792);
var chunk__23337_23794 = null;
var count__23338_23795 = (0);
var i__23339_23796 = (0);
while(true){
if((i__23339_23796 < count__23338_23795)){
var map__23352_23797 = chunk__23337_23794.cljs$core$IIndexed$_nth$arity$2(null,i__23339_23796);
var map__23352_23798__$1 = (((((!((map__23352_23797 == null))))?(((((map__23352_23797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23352_23797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23352_23797):map__23352_23797);
var gline_23799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23352_23798__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23352_23798__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23352_23798__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23799], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23336_23793,chunk__23337_23794,count__23338_23795,i__23339_23796,seq__23263_23743,chunk__23264_23744,count__23265_23745,i__23266_23746,seq__23025_23618,chunk__23026_23619,count__23027_23620,i__23028_23621,map__23352_23797,map__23352_23798__$1,gline_23799,gcol_23800,name_23801,vec__23333_23790,column_23791,column_info_23792,seq__23263_23784__$1,temp__5735__auto___23783__$1,vec__23260_23740,line_23741,columns_23742,seq__23025_23734__$1,temp__5735__auto___23733,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23800], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23741,new cljs.core.Keyword(null,"col","col",-1959363084),column_23791,new cljs.core.Keyword(null,"name","name",1843675177),name_23801], null));
});})(seq__23336_23793,chunk__23337_23794,count__23338_23795,i__23339_23796,seq__23263_23743,chunk__23264_23744,count__23265_23745,i__23266_23746,seq__23025_23618,chunk__23026_23619,count__23027_23620,i__23028_23621,map__23352_23797,map__23352_23798__$1,gline_23799,gcol_23800,name_23801,vec__23333_23790,column_23791,column_info_23792,seq__23263_23784__$1,temp__5735__auto___23783__$1,vec__23260_23740,line_23741,columns_23742,seq__23025_23734__$1,temp__5735__auto___23733,inverted))
,cljs.core.sorted_map()));


var G__23806 = seq__23336_23793;
var G__23807 = chunk__23337_23794;
var G__23808 = count__23338_23795;
var G__23809 = (i__23339_23796 + (1));
seq__23336_23793 = G__23806;
chunk__23337_23794 = G__23807;
count__23338_23795 = G__23808;
i__23339_23796 = G__23809;
continue;
} else {
var temp__5735__auto___23810__$2 = cljs.core.seq(seq__23336_23793);
if(temp__5735__auto___23810__$2){
var seq__23336_23811__$1 = temp__5735__auto___23810__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23336_23811__$1)){
var c__4556__auto___23812 = cljs.core.chunk_first(seq__23336_23811__$1);
var G__23813 = cljs.core.chunk_rest(seq__23336_23811__$1);
var G__23814 = c__4556__auto___23812;
var G__23815 = cljs.core.count(c__4556__auto___23812);
var G__23816 = (0);
seq__23336_23793 = G__23813;
chunk__23337_23794 = G__23814;
count__23338_23795 = G__23815;
i__23339_23796 = G__23816;
continue;
} else {
var map__23354_23818 = cljs.core.first(seq__23336_23811__$1);
var map__23354_23819__$1 = (((((!((map__23354_23818 == null))))?(((((map__23354_23818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23354_23818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23354_23818):map__23354_23818);
var gline_23820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23354_23819__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23354_23819__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23354_23819__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23820], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23336_23793,chunk__23337_23794,count__23338_23795,i__23339_23796,seq__23263_23743,chunk__23264_23744,count__23265_23745,i__23266_23746,seq__23025_23618,chunk__23026_23619,count__23027_23620,i__23028_23621,map__23354_23818,map__23354_23819__$1,gline_23820,gcol_23821,name_23822,seq__23336_23811__$1,temp__5735__auto___23810__$2,vec__23333_23790,column_23791,column_info_23792,seq__23263_23784__$1,temp__5735__auto___23783__$1,vec__23260_23740,line_23741,columns_23742,seq__23025_23734__$1,temp__5735__auto___23733,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23821], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23741,new cljs.core.Keyword(null,"col","col",-1959363084),column_23791,new cljs.core.Keyword(null,"name","name",1843675177),name_23822], null));
});})(seq__23336_23793,chunk__23337_23794,count__23338_23795,i__23339_23796,seq__23263_23743,chunk__23264_23744,count__23265_23745,i__23266_23746,seq__23025_23618,chunk__23026_23619,count__23027_23620,i__23028_23621,map__23354_23818,map__23354_23819__$1,gline_23820,gcol_23821,name_23822,seq__23336_23811__$1,temp__5735__auto___23810__$2,vec__23333_23790,column_23791,column_info_23792,seq__23263_23784__$1,temp__5735__auto___23783__$1,vec__23260_23740,line_23741,columns_23742,seq__23025_23734__$1,temp__5735__auto___23733,inverted))
,cljs.core.sorted_map()));


var G__23827 = cljs.core.next(seq__23336_23811__$1);
var G__23828 = null;
var G__23829 = (0);
var G__23830 = (0);
seq__23336_23793 = G__23827;
chunk__23337_23794 = G__23828;
count__23338_23795 = G__23829;
i__23339_23796 = G__23830;
continue;
}
} else {
}
}
break;
}


var G__23831 = cljs.core.next(seq__23263_23784__$1);
var G__23832 = null;
var G__23833 = (0);
var G__23834 = (0);
seq__23263_23743 = G__23831;
chunk__23264_23744 = G__23832;
count__23265_23745 = G__23833;
i__23266_23746 = G__23834;
continue;
}
} else {
}
}
break;
}


var G__23835 = cljs.core.next(seq__23025_23734__$1);
var G__23836 = null;
var G__23837 = (0);
var G__23838 = (0);
seq__23025_23618 = G__23835;
chunk__23026_23619 = G__23836;
count__23027_23620 = G__23837;
i__23028_23621 = G__23838;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
