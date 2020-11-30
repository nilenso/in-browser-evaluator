goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__22523){
var vec__22524 = p__22523;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22524,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22524,(1),null);
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
var vec__22533 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22533,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22533,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22533,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22533,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22533,(4),null);
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
var vec__22540 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22540,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22540,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22540,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22540,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22540,(4),null);
var vec__22543 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22543,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22543,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22543,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22543,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22543,(4),null);
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
var map__22550 = segmap;
var map__22550__$1 = (((((!((map__22550 == null))))?(((((map__22550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22550):map__22550);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22550__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22550__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22550__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22550__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22550__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__22553 = arguments.length;
switch (G__22553) {
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
var vec__22558 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__23580 = cljs.core.next(segs__$1);
var G__23581 = nrelseg;
var G__23582 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23580;
relseg__$1 = G__23581;
result__$1 = G__23582;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22558,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22558,(1),null);
var G__23583 = (gline + (1));
var G__23584 = cljs.core.next(lines__$1);
var G__23585 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23586 = result__$1;
gline = G__23583;
lines__$1 = G__23584;
relseg = G__23585;
result = G__23586;
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
var map__22564 = segmap;
var map__22564__$1 = (((((!((map__22564 == null))))?(((((map__22564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22564):map__22564);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22564__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22564__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22564__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22564__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22564__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__22563_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__22563_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__22568 = arguments.length;
switch (G__22568) {
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
var vec__22572 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__23588 = cljs.core.next(segs__$1);
var G__23589 = nrelseg;
var G__23590 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23588;
relseg__$1 = G__23589;
result__$1 = G__23590;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22572,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22572,(1),null);
var G__23591 = (gline + (1));
var G__23592 = cljs.core.next(lines__$1);
var G__23593 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23594 = result__$1;
gline = G__23591;
lines__$1 = G__23592;
relseg = G__23593;
result = G__23594;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__22575){
var vec__22578 = p__22575;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22578,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22578,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22578,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22578,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22578,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__22583){
var vec__22584 = p__22583;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22584,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22584,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22584,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22584,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22584,(4),null);
var seg = vec__22584;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__22587){
var vec__22588 = p__22587;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22588,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22588,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22588,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22588,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22588,(4),null);
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
var seq__22597 = cljs.core.seq(infos);
var chunk__22598 = null;
var count__22599 = (0);
var i__22600 = (0);
while(true){
if((i__22600 < count__22599)){
var info = chunk__22598.cljs$core$IIndexed$_nth$arity$2(null,i__22600);
var segv_23600 = info__GT_segv(info,source_idx,line,col);
var gline_23601 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23602 = cljs.core.count(cljs.core.deref(lines));
if((gline_23601 > (lc_23602 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22597,chunk__22598,count__22599,i__22600,segv_23600,gline_23601,lc_23602,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23601 - (lc_23602 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23600], null));
});})(seq__22597,chunk__22598,count__22599,i__22600,segv_23600,gline_23601,lc_23602,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22597,chunk__22598,count__22599,i__22600,segv_23600,gline_23601,lc_23602,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23601], null),cljs.core.conj,segv_23600);
});})(seq__22597,chunk__22598,count__22599,i__22600,segv_23600,gline_23601,lc_23602,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23603 = seq__22597;
var G__23604 = chunk__22598;
var G__23605 = count__22599;
var G__23606 = (i__22600 + (1));
seq__22597 = G__23603;
chunk__22598 = G__23604;
count__22599 = G__23605;
i__22600 = G__23606;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__22597);
if(temp__5735__auto__){
var seq__22597__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22597__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__22597__$1);
var G__23607 = cljs.core.chunk_rest(seq__22597__$1);
var G__23608 = c__4556__auto__;
var G__23609 = cljs.core.count(c__4556__auto__);
var G__23610 = (0);
seq__22597 = G__23607;
chunk__22598 = G__23608;
count__22599 = G__23609;
i__22600 = G__23610;
continue;
} else {
var info = cljs.core.first(seq__22597__$1);
var segv_23612 = info__GT_segv(info,source_idx,line,col);
var gline_23613 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23614 = cljs.core.count(cljs.core.deref(lines));
if((gline_23613 > (lc_23614 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22597,chunk__22598,count__22599,i__22600,segv_23612,gline_23613,lc_23614,info,seq__22597__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23613 - (lc_23614 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23612], null));
});})(seq__22597,chunk__22598,count__22599,i__22600,segv_23612,gline_23613,lc_23614,info,seq__22597__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22597,chunk__22598,count__22599,i__22600,segv_23612,gline_23613,lc_23614,info,seq__22597__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23613], null),cljs.core.conj,segv_23612);
});})(seq__22597,chunk__22598,count__22599,i__22600,segv_23612,gline_23613,lc_23614,info,seq__22597__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23619 = cljs.core.next(seq__22597__$1);
var G__23620 = null;
var G__23621 = (0);
var G__23622 = (0);
seq__22597 = G__23619;
chunk__22598 = G__23620;
count__22599 = G__23621;
i__22600 = G__23622;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__22603_23623 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__22604_23624 = null;
var count__22605_23625 = (0);
var i__22606_23626 = (0);
while(true){
if((i__22606_23626 < count__22605_23625)){
var vec__22808_23627 = chunk__22604_23624.cljs$core$IIndexed$_nth$arity$2(null,i__22606_23626);
var source_idx_23628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22808_23627,(0),null);
var vec__22811_23629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22808_23627,(1),null);
var __23630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22811_23629,(0),null);
var lines_23631__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22811_23629,(1),null);
var seq__22814_23632 = cljs.core.seq(lines_23631__$1);
var chunk__22815_23633 = null;
var count__22816_23634 = (0);
var i__22817_23635 = (0);
while(true){
if((i__22817_23635 < count__22816_23634)){
var vec__22867_23636 = chunk__22815_23633.cljs$core$IIndexed$_nth$arity$2(null,i__22817_23635);
var line_23637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22867_23636,(0),null);
var cols_23638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22867_23636,(1),null);
var seq__22870_23639 = cljs.core.seq(cols_23638);
var chunk__22871_23640 = null;
var count__22872_23641 = (0);
var i__22873_23642 = (0);
while(true){
if((i__22873_23642 < count__22872_23641)){
var vec__22880_23643 = chunk__22871_23640.cljs$core$IIndexed$_nth$arity$2(null,i__22873_23642);
var col_23644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22880_23643,(0),null);
var infos_23645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22880_23643,(1),null);
encode_cols(infos_23645,source_idx_23628,line_23637,col_23644);


var G__23646 = seq__22870_23639;
var G__23647 = chunk__22871_23640;
var G__23648 = count__22872_23641;
var G__23649 = (i__22873_23642 + (1));
seq__22870_23639 = G__23646;
chunk__22871_23640 = G__23647;
count__22872_23641 = G__23648;
i__22873_23642 = G__23649;
continue;
} else {
var temp__5735__auto___23650 = cljs.core.seq(seq__22870_23639);
if(temp__5735__auto___23650){
var seq__22870_23651__$1 = temp__5735__auto___23650;
if(cljs.core.chunked_seq_QMARK_(seq__22870_23651__$1)){
var c__4556__auto___23652 = cljs.core.chunk_first(seq__22870_23651__$1);
var G__23653 = cljs.core.chunk_rest(seq__22870_23651__$1);
var G__23654 = c__4556__auto___23652;
var G__23655 = cljs.core.count(c__4556__auto___23652);
var G__23656 = (0);
seq__22870_23639 = G__23653;
chunk__22871_23640 = G__23654;
count__22872_23641 = G__23655;
i__22873_23642 = G__23656;
continue;
} else {
var vec__22883_23657 = cljs.core.first(seq__22870_23651__$1);
var col_23658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22883_23657,(0),null);
var infos_23659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22883_23657,(1),null);
encode_cols(infos_23659,source_idx_23628,line_23637,col_23658);


var G__23660 = cljs.core.next(seq__22870_23651__$1);
var G__23661 = null;
var G__23662 = (0);
var G__23663 = (0);
seq__22870_23639 = G__23660;
chunk__22871_23640 = G__23661;
count__22872_23641 = G__23662;
i__22873_23642 = G__23663;
continue;
}
} else {
}
}
break;
}


var G__23664 = seq__22814_23632;
var G__23665 = chunk__22815_23633;
var G__23666 = count__22816_23634;
var G__23667 = (i__22817_23635 + (1));
seq__22814_23632 = G__23664;
chunk__22815_23633 = G__23665;
count__22816_23634 = G__23666;
i__22817_23635 = G__23667;
continue;
} else {
var temp__5735__auto___23668 = cljs.core.seq(seq__22814_23632);
if(temp__5735__auto___23668){
var seq__22814_23669__$1 = temp__5735__auto___23668;
if(cljs.core.chunked_seq_QMARK_(seq__22814_23669__$1)){
var c__4556__auto___23670 = cljs.core.chunk_first(seq__22814_23669__$1);
var G__23671 = cljs.core.chunk_rest(seq__22814_23669__$1);
var G__23672 = c__4556__auto___23670;
var G__23673 = cljs.core.count(c__4556__auto___23670);
var G__23674 = (0);
seq__22814_23632 = G__23671;
chunk__22815_23633 = G__23672;
count__22816_23634 = G__23673;
i__22817_23635 = G__23674;
continue;
} else {
var vec__22886_23675 = cljs.core.first(seq__22814_23669__$1);
var line_23676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22886_23675,(0),null);
var cols_23677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22886_23675,(1),null);
var seq__22889_23678 = cljs.core.seq(cols_23677);
var chunk__22890_23679 = null;
var count__22891_23680 = (0);
var i__22892_23681 = (0);
while(true){
if((i__22892_23681 < count__22891_23680)){
var vec__22899_23682 = chunk__22890_23679.cljs$core$IIndexed$_nth$arity$2(null,i__22892_23681);
var col_23683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22899_23682,(0),null);
var infos_23684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22899_23682,(1),null);
encode_cols(infos_23684,source_idx_23628,line_23676,col_23683);


var G__23685 = seq__22889_23678;
var G__23686 = chunk__22890_23679;
var G__23687 = count__22891_23680;
var G__23688 = (i__22892_23681 + (1));
seq__22889_23678 = G__23685;
chunk__22890_23679 = G__23686;
count__22891_23680 = G__23687;
i__22892_23681 = G__23688;
continue;
} else {
var temp__5735__auto___23689__$1 = cljs.core.seq(seq__22889_23678);
if(temp__5735__auto___23689__$1){
var seq__22889_23690__$1 = temp__5735__auto___23689__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22889_23690__$1)){
var c__4556__auto___23691 = cljs.core.chunk_first(seq__22889_23690__$1);
var G__23692 = cljs.core.chunk_rest(seq__22889_23690__$1);
var G__23693 = c__4556__auto___23691;
var G__23694 = cljs.core.count(c__4556__auto___23691);
var G__23695 = (0);
seq__22889_23678 = G__23692;
chunk__22890_23679 = G__23693;
count__22891_23680 = G__23694;
i__22892_23681 = G__23695;
continue;
} else {
var vec__22903_23696 = cljs.core.first(seq__22889_23690__$1);
var col_23697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22903_23696,(0),null);
var infos_23698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22903_23696,(1),null);
encode_cols(infos_23698,source_idx_23628,line_23676,col_23697);


var G__23702 = cljs.core.next(seq__22889_23690__$1);
var G__23703 = null;
var G__23704 = (0);
var G__23705 = (0);
seq__22889_23678 = G__23702;
chunk__22890_23679 = G__23703;
count__22891_23680 = G__23704;
i__22892_23681 = G__23705;
continue;
}
} else {
}
}
break;
}


var G__23707 = cljs.core.next(seq__22814_23669__$1);
var G__23708 = null;
var G__23709 = (0);
var G__23710 = (0);
seq__22814_23632 = G__23707;
chunk__22815_23633 = G__23708;
count__22816_23634 = G__23709;
i__22817_23635 = G__23710;
continue;
}
} else {
}
}
break;
}


var G__23711 = seq__22603_23623;
var G__23712 = chunk__22604_23624;
var G__23713 = count__22605_23625;
var G__23714 = (i__22606_23626 + (1));
seq__22603_23623 = G__23711;
chunk__22604_23624 = G__23712;
count__22605_23625 = G__23713;
i__22606_23626 = G__23714;
continue;
} else {
var temp__5735__auto___23715 = cljs.core.seq(seq__22603_23623);
if(temp__5735__auto___23715){
var seq__22603_23716__$1 = temp__5735__auto___23715;
if(cljs.core.chunked_seq_QMARK_(seq__22603_23716__$1)){
var c__4556__auto___23717 = cljs.core.chunk_first(seq__22603_23716__$1);
var G__23718 = cljs.core.chunk_rest(seq__22603_23716__$1);
var G__23719 = c__4556__auto___23717;
var G__23720 = cljs.core.count(c__4556__auto___23717);
var G__23721 = (0);
seq__22603_23623 = G__23718;
chunk__22604_23624 = G__23719;
count__22605_23625 = G__23720;
i__22606_23626 = G__23721;
continue;
} else {
var vec__22919_23722 = cljs.core.first(seq__22603_23716__$1);
var source_idx_23723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22919_23722,(0),null);
var vec__22922_23724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22919_23722,(1),null);
var __23725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22922_23724,(0),null);
var lines_23726__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22922_23724,(1),null);
var seq__22925_23727 = cljs.core.seq(lines_23726__$1);
var chunk__22926_23728 = null;
var count__22927_23729 = (0);
var i__22928_23730 = (0);
while(true){
if((i__22928_23730 < count__22927_23729)){
var vec__22979_23732 = chunk__22926_23728.cljs$core$IIndexed$_nth$arity$2(null,i__22928_23730);
var line_23733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22979_23732,(0),null);
var cols_23734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22979_23732,(1),null);
var seq__22982_23738 = cljs.core.seq(cols_23734);
var chunk__22983_23739 = null;
var count__22984_23740 = (0);
var i__22985_23741 = (0);
while(true){
if((i__22985_23741 < count__22984_23740)){
var vec__22993_23742 = chunk__22983_23739.cljs$core$IIndexed$_nth$arity$2(null,i__22985_23741);
var col_23743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22993_23742,(0),null);
var infos_23744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22993_23742,(1),null);
encode_cols(infos_23744,source_idx_23723,line_23733,col_23743);


var G__23745 = seq__22982_23738;
var G__23746 = chunk__22983_23739;
var G__23747 = count__22984_23740;
var G__23748 = (i__22985_23741 + (1));
seq__22982_23738 = G__23745;
chunk__22983_23739 = G__23746;
count__22984_23740 = G__23747;
i__22985_23741 = G__23748;
continue;
} else {
var temp__5735__auto___23749__$1 = cljs.core.seq(seq__22982_23738);
if(temp__5735__auto___23749__$1){
var seq__22982_23750__$1 = temp__5735__auto___23749__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22982_23750__$1)){
var c__4556__auto___23751 = cljs.core.chunk_first(seq__22982_23750__$1);
var G__23752 = cljs.core.chunk_rest(seq__22982_23750__$1);
var G__23753 = c__4556__auto___23751;
var G__23754 = cljs.core.count(c__4556__auto___23751);
var G__23755 = (0);
seq__22982_23738 = G__23752;
chunk__22983_23739 = G__23753;
count__22984_23740 = G__23754;
i__22985_23741 = G__23755;
continue;
} else {
var vec__22996_23757 = cljs.core.first(seq__22982_23750__$1);
var col_23758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22996_23757,(0),null);
var infos_23759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22996_23757,(1),null);
encode_cols(infos_23759,source_idx_23723,line_23733,col_23758);


var G__23760 = cljs.core.next(seq__22982_23750__$1);
var G__23761 = null;
var G__23762 = (0);
var G__23763 = (0);
seq__22982_23738 = G__23760;
chunk__22983_23739 = G__23761;
count__22984_23740 = G__23762;
i__22985_23741 = G__23763;
continue;
}
} else {
}
}
break;
}


var G__23764 = seq__22925_23727;
var G__23765 = chunk__22926_23728;
var G__23766 = count__22927_23729;
var G__23767 = (i__22928_23730 + (1));
seq__22925_23727 = G__23764;
chunk__22926_23728 = G__23765;
count__22927_23729 = G__23766;
i__22928_23730 = G__23767;
continue;
} else {
var temp__5735__auto___23769__$1 = cljs.core.seq(seq__22925_23727);
if(temp__5735__auto___23769__$1){
var seq__22925_23770__$1 = temp__5735__auto___23769__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22925_23770__$1)){
var c__4556__auto___23771 = cljs.core.chunk_first(seq__22925_23770__$1);
var G__23775 = cljs.core.chunk_rest(seq__22925_23770__$1);
var G__23776 = c__4556__auto___23771;
var G__23777 = cljs.core.count(c__4556__auto___23771);
var G__23778 = (0);
seq__22925_23727 = G__23775;
chunk__22926_23728 = G__23776;
count__22927_23729 = G__23777;
i__22928_23730 = G__23778;
continue;
} else {
var vec__22999_23779 = cljs.core.first(seq__22925_23770__$1);
var line_23780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22999_23779,(0),null);
var cols_23781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22999_23779,(1),null);
var seq__23002_23784 = cljs.core.seq(cols_23781);
var chunk__23003_23785 = null;
var count__23004_23786 = (0);
var i__23005_23787 = (0);
while(true){
if((i__23005_23787 < count__23004_23786)){
var vec__23012_23788 = chunk__23003_23785.cljs$core$IIndexed$_nth$arity$2(null,i__23005_23787);
var col_23789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23012_23788,(0),null);
var infos_23790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23012_23788,(1),null);
encode_cols(infos_23790,source_idx_23723,line_23780,col_23789);


var G__23791 = seq__23002_23784;
var G__23792 = chunk__23003_23785;
var G__23793 = count__23004_23786;
var G__23794 = (i__23005_23787 + (1));
seq__23002_23784 = G__23791;
chunk__23003_23785 = G__23792;
count__23004_23786 = G__23793;
i__23005_23787 = G__23794;
continue;
} else {
var temp__5735__auto___23797__$2 = cljs.core.seq(seq__23002_23784);
if(temp__5735__auto___23797__$2){
var seq__23002_23798__$1 = temp__5735__auto___23797__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23002_23798__$1)){
var c__4556__auto___23799 = cljs.core.chunk_first(seq__23002_23798__$1);
var G__23800 = cljs.core.chunk_rest(seq__23002_23798__$1);
var G__23801 = c__4556__auto___23799;
var G__23802 = cljs.core.count(c__4556__auto___23799);
var G__23803 = (0);
seq__23002_23784 = G__23800;
chunk__23003_23785 = G__23801;
count__23004_23786 = G__23802;
i__23005_23787 = G__23803;
continue;
} else {
var vec__23015_23804 = cljs.core.first(seq__23002_23798__$1);
var col_23805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23015_23804,(0),null);
var infos_23806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23015_23804,(1),null);
encode_cols(infos_23806,source_idx_23723,line_23780,col_23805);


var G__23807 = cljs.core.next(seq__23002_23798__$1);
var G__23808 = null;
var G__23809 = (0);
var G__23810 = (0);
seq__23002_23784 = G__23807;
chunk__23003_23785 = G__23808;
count__23004_23786 = G__23809;
i__23005_23787 = G__23810;
continue;
}
} else {
}
}
break;
}


var G__23811 = cljs.core.next(seq__22925_23770__$1);
var G__23812 = null;
var G__23813 = (0);
var G__23814 = (0);
seq__22925_23727 = G__23811;
chunk__22926_23728 = G__23812;
count__22927_23729 = G__23813;
i__22928_23730 = G__23814;
continue;
}
} else {
}
}
break;
}


var G__23815 = cljs.core.next(seq__22603_23716__$1);
var G__23816 = null;
var G__23817 = (0);
var G__23818 = (0);
seq__22603_23623 = G__23815;
chunk__22604_23624 = G__23816;
count__22605_23625 = G__23817;
i__22606_23626 = G__23818;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__23018 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__22591_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22591_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__22592_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__22592_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22593_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__22593_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__23019 = G__23018;
goog.object.set(G__23019,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__23019;
} else {
return G__23018;
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
var vec__23021 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23021,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23021,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__23025 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23025,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23025,(1),null);
var G__23819 = cljs.core.next(col_map_seq);
var G__23820 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__23025,col,infos,vec__23021,line,col_map){
return (function (v,p__23028){
var map__23029 = p__23028;
var map__23029__$1 = (((((!((map__23029 == null))))?(((((map__23029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23029):map__23029);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23029__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23029__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__23025,col,infos,vec__23021,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__23819;
new_cols = G__23820;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__23821 = cljs.core.next(line_map_seq);
var G__23822 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__23821;
new_lines = G__23822;
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
var seq__23031_23823 = cljs.core.seq(reverse_map);
var chunk__23032_23824 = null;
var count__23033_23825 = (0);
var i__23034_23826 = (0);
while(true){
if((i__23034_23826 < count__23033_23825)){
var vec__23288_23827 = chunk__23032_23824.cljs$core$IIndexed$_nth$arity$2(null,i__23034_23826);
var line_23828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23288_23827,(0),null);
var columns_23829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23288_23827,(1),null);
var seq__23291_23830 = cljs.core.seq(columns_23829);
var chunk__23292_23831 = null;
var count__23293_23832 = (0);
var i__23294_23833 = (0);
while(true){
if((i__23294_23833 < count__23293_23832)){
var vec__23375_23834 = chunk__23292_23831.cljs$core$IIndexed$_nth$arity$2(null,i__23294_23833);
var column_23835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23375_23834,(0),null);
var column_info_23836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23375_23834,(1),null);
var seq__23378_23837 = cljs.core.seq(column_info_23836);
var chunk__23379_23838 = null;
var count__23380_23839 = (0);
var i__23381_23840 = (0);
while(true){
if((i__23381_23840 < count__23380_23839)){
var map__23403_23841 = chunk__23379_23838.cljs$core$IIndexed$_nth$arity$2(null,i__23381_23840);
var map__23403_23842__$1 = (((((!((map__23403_23841 == null))))?(((((map__23403_23841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23403_23841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23403_23841):map__23403_23841);
var gline_23843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23403_23842__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23403_23842__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23403_23842__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23843], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23378_23837,chunk__23379_23838,count__23380_23839,i__23381_23840,seq__23291_23830,chunk__23292_23831,count__23293_23832,i__23294_23833,seq__23031_23823,chunk__23032_23824,count__23033_23825,i__23034_23826,map__23403_23841,map__23403_23842__$1,gline_23843,gcol_23844,name_23845,vec__23375_23834,column_23835,column_info_23836,vec__23288_23827,line_23828,columns_23829,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23844], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23828,new cljs.core.Keyword(null,"col","col",-1959363084),column_23835,new cljs.core.Keyword(null,"name","name",1843675177),name_23845], null));
});})(seq__23378_23837,chunk__23379_23838,count__23380_23839,i__23381_23840,seq__23291_23830,chunk__23292_23831,count__23293_23832,i__23294_23833,seq__23031_23823,chunk__23032_23824,count__23033_23825,i__23034_23826,map__23403_23841,map__23403_23842__$1,gline_23843,gcol_23844,name_23845,vec__23375_23834,column_23835,column_info_23836,vec__23288_23827,line_23828,columns_23829,inverted))
,cljs.core.sorted_map()));


var G__23846 = seq__23378_23837;
var G__23847 = chunk__23379_23838;
var G__23848 = count__23380_23839;
var G__23849 = (i__23381_23840 + (1));
seq__23378_23837 = G__23846;
chunk__23379_23838 = G__23847;
count__23380_23839 = G__23848;
i__23381_23840 = G__23849;
continue;
} else {
var temp__5735__auto___23850 = cljs.core.seq(seq__23378_23837);
if(temp__5735__auto___23850){
var seq__23378_23851__$1 = temp__5735__auto___23850;
if(cljs.core.chunked_seq_QMARK_(seq__23378_23851__$1)){
var c__4556__auto___23852 = cljs.core.chunk_first(seq__23378_23851__$1);
var G__23853 = cljs.core.chunk_rest(seq__23378_23851__$1);
var G__23854 = c__4556__auto___23852;
var G__23855 = cljs.core.count(c__4556__auto___23852);
var G__23856 = (0);
seq__23378_23837 = G__23853;
chunk__23379_23838 = G__23854;
count__23380_23839 = G__23855;
i__23381_23840 = G__23856;
continue;
} else {
var map__23406_23857 = cljs.core.first(seq__23378_23851__$1);
var map__23406_23858__$1 = (((((!((map__23406_23857 == null))))?(((((map__23406_23857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23406_23857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23406_23857):map__23406_23857);
var gline_23859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23406_23858__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23406_23858__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23406_23858__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23859], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23378_23837,chunk__23379_23838,count__23380_23839,i__23381_23840,seq__23291_23830,chunk__23292_23831,count__23293_23832,i__23294_23833,seq__23031_23823,chunk__23032_23824,count__23033_23825,i__23034_23826,map__23406_23857,map__23406_23858__$1,gline_23859,gcol_23860,name_23861,seq__23378_23851__$1,temp__5735__auto___23850,vec__23375_23834,column_23835,column_info_23836,vec__23288_23827,line_23828,columns_23829,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23860], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23828,new cljs.core.Keyword(null,"col","col",-1959363084),column_23835,new cljs.core.Keyword(null,"name","name",1843675177),name_23861], null));
});})(seq__23378_23837,chunk__23379_23838,count__23380_23839,i__23381_23840,seq__23291_23830,chunk__23292_23831,count__23293_23832,i__23294_23833,seq__23031_23823,chunk__23032_23824,count__23033_23825,i__23034_23826,map__23406_23857,map__23406_23858__$1,gline_23859,gcol_23860,name_23861,seq__23378_23851__$1,temp__5735__auto___23850,vec__23375_23834,column_23835,column_info_23836,vec__23288_23827,line_23828,columns_23829,inverted))
,cljs.core.sorted_map()));


var G__23862 = cljs.core.next(seq__23378_23851__$1);
var G__23863 = null;
var G__23864 = (0);
var G__23865 = (0);
seq__23378_23837 = G__23862;
chunk__23379_23838 = G__23863;
count__23380_23839 = G__23864;
i__23381_23840 = G__23865;
continue;
}
} else {
}
}
break;
}


var G__23866 = seq__23291_23830;
var G__23867 = chunk__23292_23831;
var G__23868 = count__23293_23832;
var G__23869 = (i__23294_23833 + (1));
seq__23291_23830 = G__23866;
chunk__23292_23831 = G__23867;
count__23293_23832 = G__23868;
i__23294_23833 = G__23869;
continue;
} else {
var temp__5735__auto___23870 = cljs.core.seq(seq__23291_23830);
if(temp__5735__auto___23870){
var seq__23291_23871__$1 = temp__5735__auto___23870;
if(cljs.core.chunked_seq_QMARK_(seq__23291_23871__$1)){
var c__4556__auto___23872 = cljs.core.chunk_first(seq__23291_23871__$1);
var G__23873 = cljs.core.chunk_rest(seq__23291_23871__$1);
var G__23874 = c__4556__auto___23872;
var G__23875 = cljs.core.count(c__4556__auto___23872);
var G__23876 = (0);
seq__23291_23830 = G__23873;
chunk__23292_23831 = G__23874;
count__23293_23832 = G__23875;
i__23294_23833 = G__23876;
continue;
} else {
var vec__23409_23877 = cljs.core.first(seq__23291_23871__$1);
var column_23878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23409_23877,(0),null);
var column_info_23879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23409_23877,(1),null);
var seq__23412_23880 = cljs.core.seq(column_info_23879);
var chunk__23413_23881 = null;
var count__23414_23882 = (0);
var i__23415_23883 = (0);
while(true){
if((i__23415_23883 < count__23414_23882)){
var map__23448_23884 = chunk__23413_23881.cljs$core$IIndexed$_nth$arity$2(null,i__23415_23883);
var map__23448_23885__$1 = (((((!((map__23448_23884 == null))))?(((((map__23448_23884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23448_23884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23448_23884):map__23448_23884);
var gline_23886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23448_23885__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23448_23885__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23448_23885__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23886], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23412_23880,chunk__23413_23881,count__23414_23882,i__23415_23883,seq__23291_23830,chunk__23292_23831,count__23293_23832,i__23294_23833,seq__23031_23823,chunk__23032_23824,count__23033_23825,i__23034_23826,map__23448_23884,map__23448_23885__$1,gline_23886,gcol_23887,name_23888,vec__23409_23877,column_23878,column_info_23879,seq__23291_23871__$1,temp__5735__auto___23870,vec__23288_23827,line_23828,columns_23829,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23887], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23828,new cljs.core.Keyword(null,"col","col",-1959363084),column_23878,new cljs.core.Keyword(null,"name","name",1843675177),name_23888], null));
});})(seq__23412_23880,chunk__23413_23881,count__23414_23882,i__23415_23883,seq__23291_23830,chunk__23292_23831,count__23293_23832,i__23294_23833,seq__23031_23823,chunk__23032_23824,count__23033_23825,i__23034_23826,map__23448_23884,map__23448_23885__$1,gline_23886,gcol_23887,name_23888,vec__23409_23877,column_23878,column_info_23879,seq__23291_23871__$1,temp__5735__auto___23870,vec__23288_23827,line_23828,columns_23829,inverted))
,cljs.core.sorted_map()));


var G__23891 = seq__23412_23880;
var G__23892 = chunk__23413_23881;
var G__23893 = count__23414_23882;
var G__23894 = (i__23415_23883 + (1));
seq__23412_23880 = G__23891;
chunk__23413_23881 = G__23892;
count__23414_23882 = G__23893;
i__23415_23883 = G__23894;
continue;
} else {
var temp__5735__auto___23895__$1 = cljs.core.seq(seq__23412_23880);
if(temp__5735__auto___23895__$1){
var seq__23412_23896__$1 = temp__5735__auto___23895__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23412_23896__$1)){
var c__4556__auto___23897 = cljs.core.chunk_first(seq__23412_23896__$1);
var G__23898 = cljs.core.chunk_rest(seq__23412_23896__$1);
var G__23899 = c__4556__auto___23897;
var G__23900 = cljs.core.count(c__4556__auto___23897);
var G__23901 = (0);
seq__23412_23880 = G__23898;
chunk__23413_23881 = G__23899;
count__23414_23882 = G__23900;
i__23415_23883 = G__23901;
continue;
} else {
var map__23455_23902 = cljs.core.first(seq__23412_23896__$1);
var map__23455_23903__$1 = (((((!((map__23455_23902 == null))))?(((((map__23455_23902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23455_23902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23455_23902):map__23455_23902);
var gline_23904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23455_23903__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23455_23903__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23906 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23455_23903__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23904], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23412_23880,chunk__23413_23881,count__23414_23882,i__23415_23883,seq__23291_23830,chunk__23292_23831,count__23293_23832,i__23294_23833,seq__23031_23823,chunk__23032_23824,count__23033_23825,i__23034_23826,map__23455_23902,map__23455_23903__$1,gline_23904,gcol_23905,name_23906,seq__23412_23896__$1,temp__5735__auto___23895__$1,vec__23409_23877,column_23878,column_info_23879,seq__23291_23871__$1,temp__5735__auto___23870,vec__23288_23827,line_23828,columns_23829,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23905], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23828,new cljs.core.Keyword(null,"col","col",-1959363084),column_23878,new cljs.core.Keyword(null,"name","name",1843675177),name_23906], null));
});})(seq__23412_23880,chunk__23413_23881,count__23414_23882,i__23415_23883,seq__23291_23830,chunk__23292_23831,count__23293_23832,i__23294_23833,seq__23031_23823,chunk__23032_23824,count__23033_23825,i__23034_23826,map__23455_23902,map__23455_23903__$1,gline_23904,gcol_23905,name_23906,seq__23412_23896__$1,temp__5735__auto___23895__$1,vec__23409_23877,column_23878,column_info_23879,seq__23291_23871__$1,temp__5735__auto___23870,vec__23288_23827,line_23828,columns_23829,inverted))
,cljs.core.sorted_map()));


var G__23911 = cljs.core.next(seq__23412_23896__$1);
var G__23912 = null;
var G__23913 = (0);
var G__23914 = (0);
seq__23412_23880 = G__23911;
chunk__23413_23881 = G__23912;
count__23414_23882 = G__23913;
i__23415_23883 = G__23914;
continue;
}
} else {
}
}
break;
}


var G__23915 = cljs.core.next(seq__23291_23871__$1);
var G__23916 = null;
var G__23917 = (0);
var G__23918 = (0);
seq__23291_23830 = G__23915;
chunk__23292_23831 = G__23916;
count__23293_23832 = G__23917;
i__23294_23833 = G__23918;
continue;
}
} else {
}
}
break;
}


var G__23919 = seq__23031_23823;
var G__23920 = chunk__23032_23824;
var G__23921 = count__23033_23825;
var G__23922 = (i__23034_23826 + (1));
seq__23031_23823 = G__23919;
chunk__23032_23824 = G__23920;
count__23033_23825 = G__23921;
i__23034_23826 = G__23922;
continue;
} else {
var temp__5735__auto___23926 = cljs.core.seq(seq__23031_23823);
if(temp__5735__auto___23926){
var seq__23031_23927__$1 = temp__5735__auto___23926;
if(cljs.core.chunked_seq_QMARK_(seq__23031_23927__$1)){
var c__4556__auto___23928 = cljs.core.chunk_first(seq__23031_23927__$1);
var G__23929 = cljs.core.chunk_rest(seq__23031_23927__$1);
var G__23930 = c__4556__auto___23928;
var G__23931 = cljs.core.count(c__4556__auto___23928);
var G__23932 = (0);
seq__23031_23823 = G__23929;
chunk__23032_23824 = G__23930;
count__23033_23825 = G__23931;
i__23034_23826 = G__23932;
continue;
} else {
var vec__23466_23933 = cljs.core.first(seq__23031_23927__$1);
var line_23934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23466_23933,(0),null);
var columns_23935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23466_23933,(1),null);
var seq__23486_23938 = cljs.core.seq(columns_23935);
var chunk__23487_23939 = null;
var count__23488_23940 = (0);
var i__23489_23941 = (0);
while(true){
if((i__23489_23941 < count__23488_23940)){
var vec__23527_23944 = chunk__23487_23939.cljs$core$IIndexed$_nth$arity$2(null,i__23489_23941);
var column_23945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23527_23944,(0),null);
var column_info_23946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23527_23944,(1),null);
var seq__23530_23947 = cljs.core.seq(column_info_23946);
var chunk__23531_23948 = null;
var count__23532_23949 = (0);
var i__23533_23950 = (0);
while(true){
if((i__23533_23950 < count__23532_23949)){
var map__23538_23951 = chunk__23531_23948.cljs$core$IIndexed$_nth$arity$2(null,i__23533_23950);
var map__23538_23952__$1 = (((((!((map__23538_23951 == null))))?(((((map__23538_23951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23538_23951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23538_23951):map__23538_23951);
var gline_23953 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23538_23952__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23538_23952__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23538_23952__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23953], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23530_23947,chunk__23531_23948,count__23532_23949,i__23533_23950,seq__23486_23938,chunk__23487_23939,count__23488_23940,i__23489_23941,seq__23031_23823,chunk__23032_23824,count__23033_23825,i__23034_23826,map__23538_23951,map__23538_23952__$1,gline_23953,gcol_23954,name_23955,vec__23527_23944,column_23945,column_info_23946,vec__23466_23933,line_23934,columns_23935,seq__23031_23927__$1,temp__5735__auto___23926,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23954], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23934,new cljs.core.Keyword(null,"col","col",-1959363084),column_23945,new cljs.core.Keyword(null,"name","name",1843675177),name_23955], null));
});})(seq__23530_23947,chunk__23531_23948,count__23532_23949,i__23533_23950,seq__23486_23938,chunk__23487_23939,count__23488_23940,i__23489_23941,seq__23031_23823,chunk__23032_23824,count__23033_23825,i__23034_23826,map__23538_23951,map__23538_23952__$1,gline_23953,gcol_23954,name_23955,vec__23527_23944,column_23945,column_info_23946,vec__23466_23933,line_23934,columns_23935,seq__23031_23927__$1,temp__5735__auto___23926,inverted))
,cljs.core.sorted_map()));


var G__23956 = seq__23530_23947;
var G__23957 = chunk__23531_23948;
var G__23958 = count__23532_23949;
var G__23959 = (i__23533_23950 + (1));
seq__23530_23947 = G__23956;
chunk__23531_23948 = G__23957;
count__23532_23949 = G__23958;
i__23533_23950 = G__23959;
continue;
} else {
var temp__5735__auto___23960__$1 = cljs.core.seq(seq__23530_23947);
if(temp__5735__auto___23960__$1){
var seq__23530_23961__$1 = temp__5735__auto___23960__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23530_23961__$1)){
var c__4556__auto___23962 = cljs.core.chunk_first(seq__23530_23961__$1);
var G__23963 = cljs.core.chunk_rest(seq__23530_23961__$1);
var G__23964 = c__4556__auto___23962;
var G__23965 = cljs.core.count(c__4556__auto___23962);
var G__23966 = (0);
seq__23530_23947 = G__23963;
chunk__23531_23948 = G__23964;
count__23532_23949 = G__23965;
i__23533_23950 = G__23966;
continue;
} else {
var map__23540_23967 = cljs.core.first(seq__23530_23961__$1);
var map__23540_23968__$1 = (((((!((map__23540_23967 == null))))?(((((map__23540_23967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23540_23967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23540_23967):map__23540_23967);
var gline_23969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23540_23968__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23540_23968__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23540_23968__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23969], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23530_23947,chunk__23531_23948,count__23532_23949,i__23533_23950,seq__23486_23938,chunk__23487_23939,count__23488_23940,i__23489_23941,seq__23031_23823,chunk__23032_23824,count__23033_23825,i__23034_23826,map__23540_23967,map__23540_23968__$1,gline_23969,gcol_23970,name_23971,seq__23530_23961__$1,temp__5735__auto___23960__$1,vec__23527_23944,column_23945,column_info_23946,vec__23466_23933,line_23934,columns_23935,seq__23031_23927__$1,temp__5735__auto___23926,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23970], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23934,new cljs.core.Keyword(null,"col","col",-1959363084),column_23945,new cljs.core.Keyword(null,"name","name",1843675177),name_23971], null));
});})(seq__23530_23947,chunk__23531_23948,count__23532_23949,i__23533_23950,seq__23486_23938,chunk__23487_23939,count__23488_23940,i__23489_23941,seq__23031_23823,chunk__23032_23824,count__23033_23825,i__23034_23826,map__23540_23967,map__23540_23968__$1,gline_23969,gcol_23970,name_23971,seq__23530_23961__$1,temp__5735__auto___23960__$1,vec__23527_23944,column_23945,column_info_23946,vec__23466_23933,line_23934,columns_23935,seq__23031_23927__$1,temp__5735__auto___23926,inverted))
,cljs.core.sorted_map()));


var G__23972 = cljs.core.next(seq__23530_23961__$1);
var G__23973 = null;
var G__23974 = (0);
var G__23975 = (0);
seq__23530_23947 = G__23972;
chunk__23531_23948 = G__23973;
count__23532_23949 = G__23974;
i__23533_23950 = G__23975;
continue;
}
} else {
}
}
break;
}


var G__23976 = seq__23486_23938;
var G__23977 = chunk__23487_23939;
var G__23978 = count__23488_23940;
var G__23979 = (i__23489_23941 + (1));
seq__23486_23938 = G__23976;
chunk__23487_23939 = G__23977;
count__23488_23940 = G__23978;
i__23489_23941 = G__23979;
continue;
} else {
var temp__5735__auto___23980__$1 = cljs.core.seq(seq__23486_23938);
if(temp__5735__auto___23980__$1){
var seq__23486_23981__$1 = temp__5735__auto___23980__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23486_23981__$1)){
var c__4556__auto___23982 = cljs.core.chunk_first(seq__23486_23981__$1);
var G__23983 = cljs.core.chunk_rest(seq__23486_23981__$1);
var G__23984 = c__4556__auto___23982;
var G__23985 = cljs.core.count(c__4556__auto___23982);
var G__23986 = (0);
seq__23486_23938 = G__23983;
chunk__23487_23939 = G__23984;
count__23488_23940 = G__23985;
i__23489_23941 = G__23986;
continue;
} else {
var vec__23542_23987 = cljs.core.first(seq__23486_23981__$1);
var column_23988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23542_23987,(0),null);
var column_info_23989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23542_23987,(1),null);
var seq__23545_23990 = cljs.core.seq(column_info_23989);
var chunk__23546_23991 = null;
var count__23547_23992 = (0);
var i__23548_23993 = (0);
while(true){
if((i__23548_23993 < count__23547_23992)){
var map__23557_23994 = chunk__23546_23991.cljs$core$IIndexed$_nth$arity$2(null,i__23548_23993);
var map__23557_23995__$1 = (((((!((map__23557_23994 == null))))?(((((map__23557_23994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23557_23994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23557_23994):map__23557_23994);
var gline_23996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23557_23995__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23557_23995__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23557_23995__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23996], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23545_23990,chunk__23546_23991,count__23547_23992,i__23548_23993,seq__23486_23938,chunk__23487_23939,count__23488_23940,i__23489_23941,seq__23031_23823,chunk__23032_23824,count__23033_23825,i__23034_23826,map__23557_23994,map__23557_23995__$1,gline_23996,gcol_23997,name_23998,vec__23542_23987,column_23988,column_info_23989,seq__23486_23981__$1,temp__5735__auto___23980__$1,vec__23466_23933,line_23934,columns_23935,seq__23031_23927__$1,temp__5735__auto___23926,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23997], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23934,new cljs.core.Keyword(null,"col","col",-1959363084),column_23988,new cljs.core.Keyword(null,"name","name",1843675177),name_23998], null));
});})(seq__23545_23990,chunk__23546_23991,count__23547_23992,i__23548_23993,seq__23486_23938,chunk__23487_23939,count__23488_23940,i__23489_23941,seq__23031_23823,chunk__23032_23824,count__23033_23825,i__23034_23826,map__23557_23994,map__23557_23995__$1,gline_23996,gcol_23997,name_23998,vec__23542_23987,column_23988,column_info_23989,seq__23486_23981__$1,temp__5735__auto___23980__$1,vec__23466_23933,line_23934,columns_23935,seq__23031_23927__$1,temp__5735__auto___23926,inverted))
,cljs.core.sorted_map()));


var G__23999 = seq__23545_23990;
var G__24000 = chunk__23546_23991;
var G__24001 = count__23547_23992;
var G__24002 = (i__23548_23993 + (1));
seq__23545_23990 = G__23999;
chunk__23546_23991 = G__24000;
count__23547_23992 = G__24001;
i__23548_23993 = G__24002;
continue;
} else {
var temp__5735__auto___24003__$2 = cljs.core.seq(seq__23545_23990);
if(temp__5735__auto___24003__$2){
var seq__23545_24004__$1 = temp__5735__auto___24003__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23545_24004__$1)){
var c__4556__auto___24005 = cljs.core.chunk_first(seq__23545_24004__$1);
var G__24006 = cljs.core.chunk_rest(seq__23545_24004__$1);
var G__24007 = c__4556__auto___24005;
var G__24008 = cljs.core.count(c__4556__auto___24005);
var G__24009 = (0);
seq__23545_23990 = G__24006;
chunk__23546_23991 = G__24007;
count__23547_23992 = G__24008;
i__23548_23993 = G__24009;
continue;
} else {
var map__23563_24010 = cljs.core.first(seq__23545_24004__$1);
var map__23563_24011__$1 = (((((!((map__23563_24010 == null))))?(((((map__23563_24010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23563_24010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23563_24010):map__23563_24010);
var gline_24012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23563_24011__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24013 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23563_24011__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24014 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23563_24011__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24012], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23545_23990,chunk__23546_23991,count__23547_23992,i__23548_23993,seq__23486_23938,chunk__23487_23939,count__23488_23940,i__23489_23941,seq__23031_23823,chunk__23032_23824,count__23033_23825,i__23034_23826,map__23563_24010,map__23563_24011__$1,gline_24012,gcol_24013,name_24014,seq__23545_24004__$1,temp__5735__auto___24003__$2,vec__23542_23987,column_23988,column_info_23989,seq__23486_23981__$1,temp__5735__auto___23980__$1,vec__23466_23933,line_23934,columns_23935,seq__23031_23927__$1,temp__5735__auto___23926,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24013], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23934,new cljs.core.Keyword(null,"col","col",-1959363084),column_23988,new cljs.core.Keyword(null,"name","name",1843675177),name_24014], null));
});})(seq__23545_23990,chunk__23546_23991,count__23547_23992,i__23548_23993,seq__23486_23938,chunk__23487_23939,count__23488_23940,i__23489_23941,seq__23031_23823,chunk__23032_23824,count__23033_23825,i__23034_23826,map__23563_24010,map__23563_24011__$1,gline_24012,gcol_24013,name_24014,seq__23545_24004__$1,temp__5735__auto___24003__$2,vec__23542_23987,column_23988,column_info_23989,seq__23486_23981__$1,temp__5735__auto___23980__$1,vec__23466_23933,line_23934,columns_23935,seq__23031_23927__$1,temp__5735__auto___23926,inverted))
,cljs.core.sorted_map()));


var G__24016 = cljs.core.next(seq__23545_24004__$1);
var G__24017 = null;
var G__24018 = (0);
var G__24019 = (0);
seq__23545_23990 = G__24016;
chunk__23546_23991 = G__24017;
count__23547_23992 = G__24018;
i__23548_23993 = G__24019;
continue;
}
} else {
}
}
break;
}


var G__24020 = cljs.core.next(seq__23486_23981__$1);
var G__24021 = null;
var G__24022 = (0);
var G__24023 = (0);
seq__23486_23938 = G__24020;
chunk__23487_23939 = G__24021;
count__23488_23940 = G__24022;
i__23489_23941 = G__24023;
continue;
}
} else {
}
}
break;
}


var G__24024 = cljs.core.next(seq__23031_23927__$1);
var G__24025 = null;
var G__24026 = (0);
var G__24027 = (0);
seq__23031_23823 = G__24024;
chunk__23032_23824 = G__24025;
count__23033_23825 = G__24026;
i__23034_23826 = G__24027;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
