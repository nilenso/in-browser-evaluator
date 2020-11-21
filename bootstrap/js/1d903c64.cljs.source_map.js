goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__22574){
var vec__22575 = p__22574;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22575,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22575,(1),null);
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
var vec__22578 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22578,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22578,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22578,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22578,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22578,(4),null);
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
var vec__22581 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22581,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22581,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22581,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22581,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22581,(4),null);
var vec__22584 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22584,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22584,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22584,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22584,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22584,(4),null);
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
var map__22587 = segmap;
var map__22587__$1 = (((((!((map__22587 == null))))?(((((map__22587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22587):map__22587);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22587__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22587__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22587__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22587__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22587__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__22590 = arguments.length;
switch (G__22590) {
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
var vec__22596 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__23525 = cljs.core.next(segs__$1);
var G__23526 = nrelseg;
var G__23527 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23525;
relseg__$1 = G__23526;
result__$1 = G__23527;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22596,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22596,(1),null);
var G__23528 = (gline + (1));
var G__23529 = cljs.core.next(lines__$1);
var G__23530 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23531 = result__$1;
gline = G__23528;
lines__$1 = G__23529;
relseg = G__23530;
result = G__23531;
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
var map__22600 = segmap;
var map__22600__$1 = (((((!((map__22600 == null))))?(((((map__22600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22600):map__22600);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22600__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22600__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22600__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22600__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22600__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__22599_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__22599_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__22603 = arguments.length;
switch (G__22603) {
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
var vec__22617 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__23533 = cljs.core.next(segs__$1);
var G__23534 = nrelseg;
var G__23535 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23533;
relseg__$1 = G__23534;
result__$1 = G__23535;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22617,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22617,(1),null);
var G__23536 = (gline + (1));
var G__23537 = cljs.core.next(lines__$1);
var G__23538 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23539 = result__$1;
gline = G__23536;
lines__$1 = G__23537;
relseg = G__23538;
result = G__23539;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__22620){
var vec__22621 = p__22620;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22621,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22621,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22621,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22621,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22621,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__22624){
var vec__22625 = p__22624;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22625,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22625,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22625,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22625,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22625,(4),null);
var seg = vec__22625;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__22628){
var vec__22629 = p__22628;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22629,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22629,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22629,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22629,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22629,(4),null);
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
var seq__22639 = cljs.core.seq(infos);
var chunk__22640 = null;
var count__22641 = (0);
var i__22642 = (0);
while(true){
if((i__22642 < count__22641)){
var info = chunk__22640.cljs$core$IIndexed$_nth$arity$2(null,i__22642);
var segv_23546 = info__GT_segv(info,source_idx,line,col);
var gline_23547 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23548 = cljs.core.count(cljs.core.deref(lines));
if((gline_23547 > (lc_23548 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22639,chunk__22640,count__22641,i__22642,segv_23546,gline_23547,lc_23548,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23547 - (lc_23548 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23546], null));
});})(seq__22639,chunk__22640,count__22641,i__22642,segv_23546,gline_23547,lc_23548,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22639,chunk__22640,count__22641,i__22642,segv_23546,gline_23547,lc_23548,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23547], null),cljs.core.conj,segv_23546);
});})(seq__22639,chunk__22640,count__22641,i__22642,segv_23546,gline_23547,lc_23548,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23552 = seq__22639;
var G__23553 = chunk__22640;
var G__23554 = count__22641;
var G__23555 = (i__22642 + (1));
seq__22639 = G__23552;
chunk__22640 = G__23553;
count__22641 = G__23554;
i__22642 = G__23555;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__22639);
if(temp__5735__auto__){
var seq__22639__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22639__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__22639__$1);
var G__23556 = cljs.core.chunk_rest(seq__22639__$1);
var G__23557 = c__4556__auto__;
var G__23558 = cljs.core.count(c__4556__auto__);
var G__23559 = (0);
seq__22639 = G__23556;
chunk__22640 = G__23557;
count__22641 = G__23558;
i__22642 = G__23559;
continue;
} else {
var info = cljs.core.first(seq__22639__$1);
var segv_23562 = info__GT_segv(info,source_idx,line,col);
var gline_23563 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23564 = cljs.core.count(cljs.core.deref(lines));
if((gline_23563 > (lc_23564 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22639,chunk__22640,count__22641,i__22642,segv_23562,gline_23563,lc_23564,info,seq__22639__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23563 - (lc_23564 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23562], null));
});})(seq__22639,chunk__22640,count__22641,i__22642,segv_23562,gline_23563,lc_23564,info,seq__22639__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22639,chunk__22640,count__22641,i__22642,segv_23562,gline_23563,lc_23564,info,seq__22639__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23563], null),cljs.core.conj,segv_23562);
});})(seq__22639,chunk__22640,count__22641,i__22642,segv_23562,gline_23563,lc_23564,info,seq__22639__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23566 = cljs.core.next(seq__22639__$1);
var G__23567 = null;
var G__23568 = (0);
var G__23569 = (0);
seq__22639 = G__23566;
chunk__22640 = G__23567;
count__22641 = G__23568;
i__22642 = G__23569;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__22643_23572 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__22644_23573 = null;
var count__22645_23574 = (0);
var i__22646_23575 = (0);
while(true){
if((i__22646_23575 < count__22645_23574)){
var vec__22844_23576 = chunk__22644_23573.cljs$core$IIndexed$_nth$arity$2(null,i__22646_23575);
var source_idx_23577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22844_23576,(0),null);
var vec__22847_23578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22844_23576,(1),null);
var __23579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22847_23578,(0),null);
var lines_23580__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22847_23578,(1),null);
var seq__22850_23581 = cljs.core.seq(lines_23580__$1);
var chunk__22851_23582 = null;
var count__22852_23583 = (0);
var i__22853_23584 = (0);
while(true){
if((i__22853_23584 < count__22852_23583)){
var vec__22902_23587 = chunk__22851_23582.cljs$core$IIndexed$_nth$arity$2(null,i__22853_23584);
var line_23588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22902_23587,(0),null);
var cols_23589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22902_23587,(1),null);
var seq__22905_23590 = cljs.core.seq(cols_23589);
var chunk__22906_23591 = null;
var count__22907_23592 = (0);
var i__22908_23593 = (0);
while(true){
if((i__22908_23593 < count__22907_23592)){
var vec__22919_23594 = chunk__22906_23591.cljs$core$IIndexed$_nth$arity$2(null,i__22908_23593);
var col_23595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22919_23594,(0),null);
var infos_23596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22919_23594,(1),null);
encode_cols(infos_23596,source_idx_23577,line_23588,col_23595);


var G__23597 = seq__22905_23590;
var G__23598 = chunk__22906_23591;
var G__23599 = count__22907_23592;
var G__23600 = (i__22908_23593 + (1));
seq__22905_23590 = G__23597;
chunk__22906_23591 = G__23598;
count__22907_23592 = G__23599;
i__22908_23593 = G__23600;
continue;
} else {
var temp__5735__auto___23601 = cljs.core.seq(seq__22905_23590);
if(temp__5735__auto___23601){
var seq__22905_23602__$1 = temp__5735__auto___23601;
if(cljs.core.chunked_seq_QMARK_(seq__22905_23602__$1)){
var c__4556__auto___23604 = cljs.core.chunk_first(seq__22905_23602__$1);
var G__23605 = cljs.core.chunk_rest(seq__22905_23602__$1);
var G__23606 = c__4556__auto___23604;
var G__23607 = cljs.core.count(c__4556__auto___23604);
var G__23608 = (0);
seq__22905_23590 = G__23605;
chunk__22906_23591 = G__23606;
count__22907_23592 = G__23607;
i__22908_23593 = G__23608;
continue;
} else {
var vec__22922_23612 = cljs.core.first(seq__22905_23602__$1);
var col_23613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22922_23612,(0),null);
var infos_23614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22922_23612,(1),null);
encode_cols(infos_23614,source_idx_23577,line_23588,col_23613);


var G__23615 = cljs.core.next(seq__22905_23602__$1);
var G__23616 = null;
var G__23617 = (0);
var G__23618 = (0);
seq__22905_23590 = G__23615;
chunk__22906_23591 = G__23616;
count__22907_23592 = G__23617;
i__22908_23593 = G__23618;
continue;
}
} else {
}
}
break;
}


var G__23619 = seq__22850_23581;
var G__23620 = chunk__22851_23582;
var G__23621 = count__22852_23583;
var G__23622 = (i__22853_23584 + (1));
seq__22850_23581 = G__23619;
chunk__22851_23582 = G__23620;
count__22852_23583 = G__23621;
i__22853_23584 = G__23622;
continue;
} else {
var temp__5735__auto___23625 = cljs.core.seq(seq__22850_23581);
if(temp__5735__auto___23625){
var seq__22850_23626__$1 = temp__5735__auto___23625;
if(cljs.core.chunked_seq_QMARK_(seq__22850_23626__$1)){
var c__4556__auto___23627 = cljs.core.chunk_first(seq__22850_23626__$1);
var G__23628 = cljs.core.chunk_rest(seq__22850_23626__$1);
var G__23629 = c__4556__auto___23627;
var G__23630 = cljs.core.count(c__4556__auto___23627);
var G__23631 = (0);
seq__22850_23581 = G__23628;
chunk__22851_23582 = G__23629;
count__22852_23583 = G__23630;
i__22853_23584 = G__23631;
continue;
} else {
var vec__22925_23632 = cljs.core.first(seq__22850_23626__$1);
var line_23633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22925_23632,(0),null);
var cols_23634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22925_23632,(1),null);
var seq__22928_23637 = cljs.core.seq(cols_23634);
var chunk__22929_23638 = null;
var count__22930_23639 = (0);
var i__22931_23640 = (0);
while(true){
if((i__22931_23640 < count__22930_23639)){
var vec__22938_23641 = chunk__22929_23638.cljs$core$IIndexed$_nth$arity$2(null,i__22931_23640);
var col_23642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22938_23641,(0),null);
var infos_23643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22938_23641,(1),null);
encode_cols(infos_23643,source_idx_23577,line_23633,col_23642);


var G__23644 = seq__22928_23637;
var G__23645 = chunk__22929_23638;
var G__23646 = count__22930_23639;
var G__23647 = (i__22931_23640 + (1));
seq__22928_23637 = G__23644;
chunk__22929_23638 = G__23645;
count__22930_23639 = G__23646;
i__22931_23640 = G__23647;
continue;
} else {
var temp__5735__auto___23648__$1 = cljs.core.seq(seq__22928_23637);
if(temp__5735__auto___23648__$1){
var seq__22928_23649__$1 = temp__5735__auto___23648__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22928_23649__$1)){
var c__4556__auto___23650 = cljs.core.chunk_first(seq__22928_23649__$1);
var G__23651 = cljs.core.chunk_rest(seq__22928_23649__$1);
var G__23652 = c__4556__auto___23650;
var G__23653 = cljs.core.count(c__4556__auto___23650);
var G__23654 = (0);
seq__22928_23637 = G__23651;
chunk__22929_23638 = G__23652;
count__22930_23639 = G__23653;
i__22931_23640 = G__23654;
continue;
} else {
var vec__22941_23655 = cljs.core.first(seq__22928_23649__$1);
var col_23656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22941_23655,(0),null);
var infos_23657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22941_23655,(1),null);
encode_cols(infos_23657,source_idx_23577,line_23633,col_23656);


var G__23658 = cljs.core.next(seq__22928_23649__$1);
var G__23659 = null;
var G__23660 = (0);
var G__23661 = (0);
seq__22928_23637 = G__23658;
chunk__22929_23638 = G__23659;
count__22930_23639 = G__23660;
i__22931_23640 = G__23661;
continue;
}
} else {
}
}
break;
}


var G__23662 = cljs.core.next(seq__22850_23626__$1);
var G__23663 = null;
var G__23664 = (0);
var G__23665 = (0);
seq__22850_23581 = G__23662;
chunk__22851_23582 = G__23663;
count__22852_23583 = G__23664;
i__22853_23584 = G__23665;
continue;
}
} else {
}
}
break;
}


var G__23666 = seq__22643_23572;
var G__23667 = chunk__22644_23573;
var G__23668 = count__22645_23574;
var G__23669 = (i__22646_23575 + (1));
seq__22643_23572 = G__23666;
chunk__22644_23573 = G__23667;
count__22645_23574 = G__23668;
i__22646_23575 = G__23669;
continue;
} else {
var temp__5735__auto___23670 = cljs.core.seq(seq__22643_23572);
if(temp__5735__auto___23670){
var seq__22643_23671__$1 = temp__5735__auto___23670;
if(cljs.core.chunked_seq_QMARK_(seq__22643_23671__$1)){
var c__4556__auto___23672 = cljs.core.chunk_first(seq__22643_23671__$1);
var G__23673 = cljs.core.chunk_rest(seq__22643_23671__$1);
var G__23674 = c__4556__auto___23672;
var G__23675 = cljs.core.count(c__4556__auto___23672);
var G__23676 = (0);
seq__22643_23572 = G__23673;
chunk__22644_23573 = G__23674;
count__22645_23574 = G__23675;
i__22646_23575 = G__23676;
continue;
} else {
var vec__22944_23677 = cljs.core.first(seq__22643_23671__$1);
var source_idx_23678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22944_23677,(0),null);
var vec__22947_23679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22944_23677,(1),null);
var __23680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22947_23679,(0),null);
var lines_23681__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22947_23679,(1),null);
var seq__22950_23682 = cljs.core.seq(lines_23681__$1);
var chunk__22951_23683 = null;
var count__22952_23684 = (0);
var i__22953_23685 = (0);
while(true){
if((i__22953_23685 < count__22952_23684)){
var vec__22992_23686 = chunk__22951_23683.cljs$core$IIndexed$_nth$arity$2(null,i__22953_23685);
var line_23687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22992_23686,(0),null);
var cols_23688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22992_23686,(1),null);
var seq__22995_23689 = cljs.core.seq(cols_23688);
var chunk__22996_23690 = null;
var count__22997_23691 = (0);
var i__22998_23692 = (0);
while(true){
if((i__22998_23692 < count__22997_23691)){
var vec__23019_23693 = chunk__22996_23690.cljs$core$IIndexed$_nth$arity$2(null,i__22998_23692);
var col_23694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23019_23693,(0),null);
var infos_23695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23019_23693,(1),null);
encode_cols(infos_23695,source_idx_23678,line_23687,col_23694);


var G__23696 = seq__22995_23689;
var G__23697 = chunk__22996_23690;
var G__23698 = count__22997_23691;
var G__23699 = (i__22998_23692 + (1));
seq__22995_23689 = G__23696;
chunk__22996_23690 = G__23697;
count__22997_23691 = G__23698;
i__22998_23692 = G__23699;
continue;
} else {
var temp__5735__auto___23700__$1 = cljs.core.seq(seq__22995_23689);
if(temp__5735__auto___23700__$1){
var seq__22995_23701__$1 = temp__5735__auto___23700__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22995_23701__$1)){
var c__4556__auto___23702 = cljs.core.chunk_first(seq__22995_23701__$1);
var G__23703 = cljs.core.chunk_rest(seq__22995_23701__$1);
var G__23704 = c__4556__auto___23702;
var G__23705 = cljs.core.count(c__4556__auto___23702);
var G__23706 = (0);
seq__22995_23689 = G__23703;
chunk__22996_23690 = G__23704;
count__22997_23691 = G__23705;
i__22998_23692 = G__23706;
continue;
} else {
var vec__23025_23707 = cljs.core.first(seq__22995_23701__$1);
var col_23708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23025_23707,(0),null);
var infos_23709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23025_23707,(1),null);
encode_cols(infos_23709,source_idx_23678,line_23687,col_23708);


var G__23710 = cljs.core.next(seq__22995_23701__$1);
var G__23711 = null;
var G__23712 = (0);
var G__23713 = (0);
seq__22995_23689 = G__23710;
chunk__22996_23690 = G__23711;
count__22997_23691 = G__23712;
i__22998_23692 = G__23713;
continue;
}
} else {
}
}
break;
}


var G__23714 = seq__22950_23682;
var G__23715 = chunk__22951_23683;
var G__23716 = count__22952_23684;
var G__23717 = (i__22953_23685 + (1));
seq__22950_23682 = G__23714;
chunk__22951_23683 = G__23715;
count__22952_23684 = G__23716;
i__22953_23685 = G__23717;
continue;
} else {
var temp__5735__auto___23718__$1 = cljs.core.seq(seq__22950_23682);
if(temp__5735__auto___23718__$1){
var seq__22950_23719__$1 = temp__5735__auto___23718__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22950_23719__$1)){
var c__4556__auto___23720 = cljs.core.chunk_first(seq__22950_23719__$1);
var G__23721 = cljs.core.chunk_rest(seq__22950_23719__$1);
var G__23722 = c__4556__auto___23720;
var G__23723 = cljs.core.count(c__4556__auto___23720);
var G__23724 = (0);
seq__22950_23682 = G__23721;
chunk__22951_23683 = G__23722;
count__22952_23684 = G__23723;
i__22953_23685 = G__23724;
continue;
} else {
var vec__23037_23725 = cljs.core.first(seq__22950_23719__$1);
var line_23726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23037_23725,(0),null);
var cols_23727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23037_23725,(1),null);
var seq__23040_23728 = cljs.core.seq(cols_23727);
var chunk__23041_23729 = null;
var count__23042_23730 = (0);
var i__23043_23731 = (0);
while(true){
if((i__23043_23731 < count__23042_23730)){
var vec__23055_23732 = chunk__23041_23729.cljs$core$IIndexed$_nth$arity$2(null,i__23043_23731);
var col_23733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23055_23732,(0),null);
var infos_23734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23055_23732,(1),null);
encode_cols(infos_23734,source_idx_23678,line_23726,col_23733);


var G__23735 = seq__23040_23728;
var G__23736 = chunk__23041_23729;
var G__23737 = count__23042_23730;
var G__23738 = (i__23043_23731 + (1));
seq__23040_23728 = G__23735;
chunk__23041_23729 = G__23736;
count__23042_23730 = G__23737;
i__23043_23731 = G__23738;
continue;
} else {
var temp__5735__auto___23739__$2 = cljs.core.seq(seq__23040_23728);
if(temp__5735__auto___23739__$2){
var seq__23040_23740__$1 = temp__5735__auto___23739__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23040_23740__$1)){
var c__4556__auto___23741 = cljs.core.chunk_first(seq__23040_23740__$1);
var G__23742 = cljs.core.chunk_rest(seq__23040_23740__$1);
var G__23743 = c__4556__auto___23741;
var G__23744 = cljs.core.count(c__4556__auto___23741);
var G__23745 = (0);
seq__23040_23728 = G__23742;
chunk__23041_23729 = G__23743;
count__23042_23730 = G__23744;
i__23043_23731 = G__23745;
continue;
} else {
var vec__23060_23746 = cljs.core.first(seq__23040_23740__$1);
var col_23747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23060_23746,(0),null);
var infos_23749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23060_23746,(1),null);
encode_cols(infos_23749,source_idx_23678,line_23726,col_23747);


var G__23751 = cljs.core.next(seq__23040_23740__$1);
var G__23752 = null;
var G__23753 = (0);
var G__23754 = (0);
seq__23040_23728 = G__23751;
chunk__23041_23729 = G__23752;
count__23042_23730 = G__23753;
i__23043_23731 = G__23754;
continue;
}
} else {
}
}
break;
}


var G__23755 = cljs.core.next(seq__22950_23719__$1);
var G__23756 = null;
var G__23757 = (0);
var G__23758 = (0);
seq__22950_23682 = G__23755;
chunk__22951_23683 = G__23756;
count__22952_23684 = G__23757;
i__22953_23685 = G__23758;
continue;
}
} else {
}
}
break;
}


var G__23759 = cljs.core.next(seq__22643_23671__$1);
var G__23760 = null;
var G__23761 = (0);
var G__23762 = (0);
seq__22643_23572 = G__23759;
chunk__22644_23573 = G__23760;
count__22645_23574 = G__23761;
i__22646_23575 = G__23762;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__23064 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__22636_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22636_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__22637_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__22637_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22638_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__22638_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__23066 = G__23064;
goog.object.set(G__23066,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__23066;
} else {
return G__23064;
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
var vec__23067 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23067,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23067,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__23070 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23070,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23070,(1),null);
var G__23764 = cljs.core.next(col_map_seq);
var G__23765 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__23070,col,infos,vec__23067,line,col_map){
return (function (v,p__23073){
var map__23074 = p__23073;
var map__23074__$1 = (((((!((map__23074 == null))))?(((((map__23074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23074):map__23074);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23074__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23074__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__23070,col,infos,vec__23067,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__23764;
new_cols = G__23765;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__23769 = cljs.core.next(line_map_seq);
var G__23770 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__23769;
new_lines = G__23770;
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
var seq__23089_23771 = cljs.core.seq(reverse_map);
var chunk__23090_23772 = null;
var count__23091_23773 = (0);
var i__23092_23774 = (0);
while(true){
if((i__23092_23774 < count__23091_23773)){
var vec__23325_23775 = chunk__23090_23772.cljs$core$IIndexed$_nth$arity$2(null,i__23092_23774);
var line_23776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23325_23775,(0),null);
var columns_23777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23325_23775,(1),null);
var seq__23328_23778 = cljs.core.seq(columns_23777);
var chunk__23329_23779 = null;
var count__23330_23780 = (0);
var i__23331_23781 = (0);
while(true){
if((i__23331_23781 < count__23330_23780)){
var vec__23363_23782 = chunk__23329_23779.cljs$core$IIndexed$_nth$arity$2(null,i__23331_23781);
var column_23783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23363_23782,(0),null);
var column_info_23784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23363_23782,(1),null);
var seq__23366_23785 = cljs.core.seq(column_info_23784);
var chunk__23367_23786 = null;
var count__23368_23787 = (0);
var i__23369_23788 = (0);
while(true){
if((i__23369_23788 < count__23368_23787)){
var map__23374_23789 = chunk__23367_23786.cljs$core$IIndexed$_nth$arity$2(null,i__23369_23788);
var map__23374_23790__$1 = (((((!((map__23374_23789 == null))))?(((((map__23374_23789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23374_23789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23374_23789):map__23374_23789);
var gline_23791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23374_23790__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23374_23790__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23374_23790__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23791], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23366_23785,chunk__23367_23786,count__23368_23787,i__23369_23788,seq__23328_23778,chunk__23329_23779,count__23330_23780,i__23331_23781,seq__23089_23771,chunk__23090_23772,count__23091_23773,i__23092_23774,map__23374_23789,map__23374_23790__$1,gline_23791,gcol_23792,name_23793,vec__23363_23782,column_23783,column_info_23784,vec__23325_23775,line_23776,columns_23777,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23792], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23776,new cljs.core.Keyword(null,"col","col",-1959363084),column_23783,new cljs.core.Keyword(null,"name","name",1843675177),name_23793], null));
});})(seq__23366_23785,chunk__23367_23786,count__23368_23787,i__23369_23788,seq__23328_23778,chunk__23329_23779,count__23330_23780,i__23331_23781,seq__23089_23771,chunk__23090_23772,count__23091_23773,i__23092_23774,map__23374_23789,map__23374_23790__$1,gline_23791,gcol_23792,name_23793,vec__23363_23782,column_23783,column_info_23784,vec__23325_23775,line_23776,columns_23777,inverted))
,cljs.core.sorted_map()));


var G__23797 = seq__23366_23785;
var G__23798 = chunk__23367_23786;
var G__23799 = count__23368_23787;
var G__23800 = (i__23369_23788 + (1));
seq__23366_23785 = G__23797;
chunk__23367_23786 = G__23798;
count__23368_23787 = G__23799;
i__23369_23788 = G__23800;
continue;
} else {
var temp__5735__auto___23801 = cljs.core.seq(seq__23366_23785);
if(temp__5735__auto___23801){
var seq__23366_23802__$1 = temp__5735__auto___23801;
if(cljs.core.chunked_seq_QMARK_(seq__23366_23802__$1)){
var c__4556__auto___23803 = cljs.core.chunk_first(seq__23366_23802__$1);
var G__23804 = cljs.core.chunk_rest(seq__23366_23802__$1);
var G__23805 = c__4556__auto___23803;
var G__23806 = cljs.core.count(c__4556__auto___23803);
var G__23807 = (0);
seq__23366_23785 = G__23804;
chunk__23367_23786 = G__23805;
count__23368_23787 = G__23806;
i__23369_23788 = G__23807;
continue;
} else {
var map__23376_23808 = cljs.core.first(seq__23366_23802__$1);
var map__23376_23809__$1 = (((((!((map__23376_23808 == null))))?(((((map__23376_23808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23376_23808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23376_23808):map__23376_23808);
var gline_23810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23376_23809__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23811 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23376_23809__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23376_23809__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23810], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23366_23785,chunk__23367_23786,count__23368_23787,i__23369_23788,seq__23328_23778,chunk__23329_23779,count__23330_23780,i__23331_23781,seq__23089_23771,chunk__23090_23772,count__23091_23773,i__23092_23774,map__23376_23808,map__23376_23809__$1,gline_23810,gcol_23811,name_23812,seq__23366_23802__$1,temp__5735__auto___23801,vec__23363_23782,column_23783,column_info_23784,vec__23325_23775,line_23776,columns_23777,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23811], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23776,new cljs.core.Keyword(null,"col","col",-1959363084),column_23783,new cljs.core.Keyword(null,"name","name",1843675177),name_23812], null));
});})(seq__23366_23785,chunk__23367_23786,count__23368_23787,i__23369_23788,seq__23328_23778,chunk__23329_23779,count__23330_23780,i__23331_23781,seq__23089_23771,chunk__23090_23772,count__23091_23773,i__23092_23774,map__23376_23808,map__23376_23809__$1,gline_23810,gcol_23811,name_23812,seq__23366_23802__$1,temp__5735__auto___23801,vec__23363_23782,column_23783,column_info_23784,vec__23325_23775,line_23776,columns_23777,inverted))
,cljs.core.sorted_map()));


var G__23813 = cljs.core.next(seq__23366_23802__$1);
var G__23814 = null;
var G__23815 = (0);
var G__23816 = (0);
seq__23366_23785 = G__23813;
chunk__23367_23786 = G__23814;
count__23368_23787 = G__23815;
i__23369_23788 = G__23816;
continue;
}
} else {
}
}
break;
}


var G__23817 = seq__23328_23778;
var G__23818 = chunk__23329_23779;
var G__23819 = count__23330_23780;
var G__23820 = (i__23331_23781 + (1));
seq__23328_23778 = G__23817;
chunk__23329_23779 = G__23818;
count__23330_23780 = G__23819;
i__23331_23781 = G__23820;
continue;
} else {
var temp__5735__auto___23821 = cljs.core.seq(seq__23328_23778);
if(temp__5735__auto___23821){
var seq__23328_23822__$1 = temp__5735__auto___23821;
if(cljs.core.chunked_seq_QMARK_(seq__23328_23822__$1)){
var c__4556__auto___23823 = cljs.core.chunk_first(seq__23328_23822__$1);
var G__23824 = cljs.core.chunk_rest(seq__23328_23822__$1);
var G__23825 = c__4556__auto___23823;
var G__23826 = cljs.core.count(c__4556__auto___23823);
var G__23827 = (0);
seq__23328_23778 = G__23824;
chunk__23329_23779 = G__23825;
count__23330_23780 = G__23826;
i__23331_23781 = G__23827;
continue;
} else {
var vec__23378_23828 = cljs.core.first(seq__23328_23822__$1);
var column_23829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23378_23828,(0),null);
var column_info_23830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23378_23828,(1),null);
var seq__23381_23831 = cljs.core.seq(column_info_23830);
var chunk__23382_23832 = null;
var count__23383_23833 = (0);
var i__23384_23834 = (0);
while(true){
if((i__23384_23834 < count__23383_23833)){
var map__23396_23835 = chunk__23382_23832.cljs$core$IIndexed$_nth$arity$2(null,i__23384_23834);
var map__23396_23836__$1 = (((((!((map__23396_23835 == null))))?(((((map__23396_23835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23396_23835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23396_23835):map__23396_23835);
var gline_23837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23396_23836__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23396_23836__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23396_23836__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23837], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23381_23831,chunk__23382_23832,count__23383_23833,i__23384_23834,seq__23328_23778,chunk__23329_23779,count__23330_23780,i__23331_23781,seq__23089_23771,chunk__23090_23772,count__23091_23773,i__23092_23774,map__23396_23835,map__23396_23836__$1,gline_23837,gcol_23838,name_23839,vec__23378_23828,column_23829,column_info_23830,seq__23328_23822__$1,temp__5735__auto___23821,vec__23325_23775,line_23776,columns_23777,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23838], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23776,new cljs.core.Keyword(null,"col","col",-1959363084),column_23829,new cljs.core.Keyword(null,"name","name",1843675177),name_23839], null));
});})(seq__23381_23831,chunk__23382_23832,count__23383_23833,i__23384_23834,seq__23328_23778,chunk__23329_23779,count__23330_23780,i__23331_23781,seq__23089_23771,chunk__23090_23772,count__23091_23773,i__23092_23774,map__23396_23835,map__23396_23836__$1,gline_23837,gcol_23838,name_23839,vec__23378_23828,column_23829,column_info_23830,seq__23328_23822__$1,temp__5735__auto___23821,vec__23325_23775,line_23776,columns_23777,inverted))
,cljs.core.sorted_map()));


var G__23840 = seq__23381_23831;
var G__23841 = chunk__23382_23832;
var G__23842 = count__23383_23833;
var G__23843 = (i__23384_23834 + (1));
seq__23381_23831 = G__23840;
chunk__23382_23832 = G__23841;
count__23383_23833 = G__23842;
i__23384_23834 = G__23843;
continue;
} else {
var temp__5735__auto___23844__$1 = cljs.core.seq(seq__23381_23831);
if(temp__5735__auto___23844__$1){
var seq__23381_23845__$1 = temp__5735__auto___23844__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23381_23845__$1)){
var c__4556__auto___23846 = cljs.core.chunk_first(seq__23381_23845__$1);
var G__23847 = cljs.core.chunk_rest(seq__23381_23845__$1);
var G__23848 = c__4556__auto___23846;
var G__23849 = cljs.core.count(c__4556__auto___23846);
var G__23850 = (0);
seq__23381_23831 = G__23847;
chunk__23382_23832 = G__23848;
count__23383_23833 = G__23849;
i__23384_23834 = G__23850;
continue;
} else {
var map__23401_23851 = cljs.core.first(seq__23381_23845__$1);
var map__23401_23852__$1 = (((((!((map__23401_23851 == null))))?(((((map__23401_23851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23401_23851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23401_23851):map__23401_23851);
var gline_23853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23401_23852__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23854 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23401_23852__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23855 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23401_23852__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23853], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23381_23831,chunk__23382_23832,count__23383_23833,i__23384_23834,seq__23328_23778,chunk__23329_23779,count__23330_23780,i__23331_23781,seq__23089_23771,chunk__23090_23772,count__23091_23773,i__23092_23774,map__23401_23851,map__23401_23852__$1,gline_23853,gcol_23854,name_23855,seq__23381_23845__$1,temp__5735__auto___23844__$1,vec__23378_23828,column_23829,column_info_23830,seq__23328_23822__$1,temp__5735__auto___23821,vec__23325_23775,line_23776,columns_23777,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23854], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23776,new cljs.core.Keyword(null,"col","col",-1959363084),column_23829,new cljs.core.Keyword(null,"name","name",1843675177),name_23855], null));
});})(seq__23381_23831,chunk__23382_23832,count__23383_23833,i__23384_23834,seq__23328_23778,chunk__23329_23779,count__23330_23780,i__23331_23781,seq__23089_23771,chunk__23090_23772,count__23091_23773,i__23092_23774,map__23401_23851,map__23401_23852__$1,gline_23853,gcol_23854,name_23855,seq__23381_23845__$1,temp__5735__auto___23844__$1,vec__23378_23828,column_23829,column_info_23830,seq__23328_23822__$1,temp__5735__auto___23821,vec__23325_23775,line_23776,columns_23777,inverted))
,cljs.core.sorted_map()));


var G__23856 = cljs.core.next(seq__23381_23845__$1);
var G__23857 = null;
var G__23858 = (0);
var G__23859 = (0);
seq__23381_23831 = G__23856;
chunk__23382_23832 = G__23857;
count__23383_23833 = G__23858;
i__23384_23834 = G__23859;
continue;
}
} else {
}
}
break;
}


var G__23860 = cljs.core.next(seq__23328_23822__$1);
var G__23861 = null;
var G__23862 = (0);
var G__23863 = (0);
seq__23328_23778 = G__23860;
chunk__23329_23779 = G__23861;
count__23330_23780 = G__23862;
i__23331_23781 = G__23863;
continue;
}
} else {
}
}
break;
}


var G__23864 = seq__23089_23771;
var G__23865 = chunk__23090_23772;
var G__23866 = count__23091_23773;
var G__23867 = (i__23092_23774 + (1));
seq__23089_23771 = G__23864;
chunk__23090_23772 = G__23865;
count__23091_23773 = G__23866;
i__23092_23774 = G__23867;
continue;
} else {
var temp__5735__auto___23868 = cljs.core.seq(seq__23089_23771);
if(temp__5735__auto___23868){
var seq__23089_23869__$1 = temp__5735__auto___23868;
if(cljs.core.chunked_seq_QMARK_(seq__23089_23869__$1)){
var c__4556__auto___23870 = cljs.core.chunk_first(seq__23089_23869__$1);
var G__23871 = cljs.core.chunk_rest(seq__23089_23869__$1);
var G__23872 = c__4556__auto___23870;
var G__23873 = cljs.core.count(c__4556__auto___23870);
var G__23874 = (0);
seq__23089_23771 = G__23871;
chunk__23090_23772 = G__23872;
count__23091_23773 = G__23873;
i__23092_23774 = G__23874;
continue;
} else {
var vec__23422_23875 = cljs.core.first(seq__23089_23869__$1);
var line_23876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23422_23875,(0),null);
var columns_23877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23422_23875,(1),null);
var seq__23425_23878 = cljs.core.seq(columns_23877);
var chunk__23426_23879 = null;
var count__23427_23880 = (0);
var i__23428_23881 = (0);
while(true){
if((i__23428_23881 < count__23427_23880)){
var vec__23469_23882 = chunk__23426_23879.cljs$core$IIndexed$_nth$arity$2(null,i__23428_23881);
var column_23883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23469_23882,(0),null);
var column_info_23884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23469_23882,(1),null);
var seq__23472_23885 = cljs.core.seq(column_info_23884);
var chunk__23473_23886 = null;
var count__23474_23887 = (0);
var i__23475_23888 = (0);
while(true){
if((i__23475_23888 < count__23474_23887)){
var map__23484_23889 = chunk__23473_23886.cljs$core$IIndexed$_nth$arity$2(null,i__23475_23888);
var map__23484_23890__$1 = (((((!((map__23484_23889 == null))))?(((((map__23484_23889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23484_23889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23484_23889):map__23484_23889);
var gline_23891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23484_23890__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23484_23890__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23484_23890__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23891], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23472_23885,chunk__23473_23886,count__23474_23887,i__23475_23888,seq__23425_23878,chunk__23426_23879,count__23427_23880,i__23428_23881,seq__23089_23771,chunk__23090_23772,count__23091_23773,i__23092_23774,map__23484_23889,map__23484_23890__$1,gline_23891,gcol_23892,name_23893,vec__23469_23882,column_23883,column_info_23884,vec__23422_23875,line_23876,columns_23877,seq__23089_23869__$1,temp__5735__auto___23868,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23892], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23876,new cljs.core.Keyword(null,"col","col",-1959363084),column_23883,new cljs.core.Keyword(null,"name","name",1843675177),name_23893], null));
});})(seq__23472_23885,chunk__23473_23886,count__23474_23887,i__23475_23888,seq__23425_23878,chunk__23426_23879,count__23427_23880,i__23428_23881,seq__23089_23771,chunk__23090_23772,count__23091_23773,i__23092_23774,map__23484_23889,map__23484_23890__$1,gline_23891,gcol_23892,name_23893,vec__23469_23882,column_23883,column_info_23884,vec__23422_23875,line_23876,columns_23877,seq__23089_23869__$1,temp__5735__auto___23868,inverted))
,cljs.core.sorted_map()));


var G__23898 = seq__23472_23885;
var G__23899 = chunk__23473_23886;
var G__23900 = count__23474_23887;
var G__23901 = (i__23475_23888 + (1));
seq__23472_23885 = G__23898;
chunk__23473_23886 = G__23899;
count__23474_23887 = G__23900;
i__23475_23888 = G__23901;
continue;
} else {
var temp__5735__auto___23902__$1 = cljs.core.seq(seq__23472_23885);
if(temp__5735__auto___23902__$1){
var seq__23472_23903__$1 = temp__5735__auto___23902__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23472_23903__$1)){
var c__4556__auto___23904 = cljs.core.chunk_first(seq__23472_23903__$1);
var G__23905 = cljs.core.chunk_rest(seq__23472_23903__$1);
var G__23906 = c__4556__auto___23904;
var G__23907 = cljs.core.count(c__4556__auto___23904);
var G__23908 = (0);
seq__23472_23885 = G__23905;
chunk__23473_23886 = G__23906;
count__23474_23887 = G__23907;
i__23475_23888 = G__23908;
continue;
} else {
var map__23486_23909 = cljs.core.first(seq__23472_23903__$1);
var map__23486_23910__$1 = (((((!((map__23486_23909 == null))))?(((((map__23486_23909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23486_23909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23486_23909):map__23486_23909);
var gline_23911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23486_23910__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23486_23910__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23913 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23486_23910__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23911], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23472_23885,chunk__23473_23886,count__23474_23887,i__23475_23888,seq__23425_23878,chunk__23426_23879,count__23427_23880,i__23428_23881,seq__23089_23771,chunk__23090_23772,count__23091_23773,i__23092_23774,map__23486_23909,map__23486_23910__$1,gline_23911,gcol_23912,name_23913,seq__23472_23903__$1,temp__5735__auto___23902__$1,vec__23469_23882,column_23883,column_info_23884,vec__23422_23875,line_23876,columns_23877,seq__23089_23869__$1,temp__5735__auto___23868,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23912], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23876,new cljs.core.Keyword(null,"col","col",-1959363084),column_23883,new cljs.core.Keyword(null,"name","name",1843675177),name_23913], null));
});})(seq__23472_23885,chunk__23473_23886,count__23474_23887,i__23475_23888,seq__23425_23878,chunk__23426_23879,count__23427_23880,i__23428_23881,seq__23089_23771,chunk__23090_23772,count__23091_23773,i__23092_23774,map__23486_23909,map__23486_23910__$1,gline_23911,gcol_23912,name_23913,seq__23472_23903__$1,temp__5735__auto___23902__$1,vec__23469_23882,column_23883,column_info_23884,vec__23422_23875,line_23876,columns_23877,seq__23089_23869__$1,temp__5735__auto___23868,inverted))
,cljs.core.sorted_map()));


var G__23918 = cljs.core.next(seq__23472_23903__$1);
var G__23919 = null;
var G__23920 = (0);
var G__23921 = (0);
seq__23472_23885 = G__23918;
chunk__23473_23886 = G__23919;
count__23474_23887 = G__23920;
i__23475_23888 = G__23921;
continue;
}
} else {
}
}
break;
}


var G__23922 = seq__23425_23878;
var G__23923 = chunk__23426_23879;
var G__23924 = count__23427_23880;
var G__23925 = (i__23428_23881 + (1));
seq__23425_23878 = G__23922;
chunk__23426_23879 = G__23923;
count__23427_23880 = G__23924;
i__23428_23881 = G__23925;
continue;
} else {
var temp__5735__auto___23926__$1 = cljs.core.seq(seq__23425_23878);
if(temp__5735__auto___23926__$1){
var seq__23425_23927__$1 = temp__5735__auto___23926__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23425_23927__$1)){
var c__4556__auto___23928 = cljs.core.chunk_first(seq__23425_23927__$1);
var G__23930 = cljs.core.chunk_rest(seq__23425_23927__$1);
var G__23931 = c__4556__auto___23928;
var G__23932 = cljs.core.count(c__4556__auto___23928);
var G__23933 = (0);
seq__23425_23878 = G__23930;
chunk__23426_23879 = G__23931;
count__23427_23880 = G__23932;
i__23428_23881 = G__23933;
continue;
} else {
var vec__23488_23934 = cljs.core.first(seq__23425_23927__$1);
var column_23935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23488_23934,(0),null);
var column_info_23936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23488_23934,(1),null);
var seq__23491_23940 = cljs.core.seq(column_info_23936);
var chunk__23492_23941 = null;
var count__23493_23942 = (0);
var i__23494_23943 = (0);
while(true){
if((i__23494_23943 < count__23493_23942)){
var map__23499_23944 = chunk__23492_23941.cljs$core$IIndexed$_nth$arity$2(null,i__23494_23943);
var map__23499_23945__$1 = (((((!((map__23499_23944 == null))))?(((((map__23499_23944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23499_23944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23499_23944):map__23499_23944);
var gline_23946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23499_23945__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23499_23945__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23499_23945__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23946], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23491_23940,chunk__23492_23941,count__23493_23942,i__23494_23943,seq__23425_23878,chunk__23426_23879,count__23427_23880,i__23428_23881,seq__23089_23771,chunk__23090_23772,count__23091_23773,i__23092_23774,map__23499_23944,map__23499_23945__$1,gline_23946,gcol_23947,name_23948,vec__23488_23934,column_23935,column_info_23936,seq__23425_23927__$1,temp__5735__auto___23926__$1,vec__23422_23875,line_23876,columns_23877,seq__23089_23869__$1,temp__5735__auto___23868,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23947], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23876,new cljs.core.Keyword(null,"col","col",-1959363084),column_23935,new cljs.core.Keyword(null,"name","name",1843675177),name_23948], null));
});})(seq__23491_23940,chunk__23492_23941,count__23493_23942,i__23494_23943,seq__23425_23878,chunk__23426_23879,count__23427_23880,i__23428_23881,seq__23089_23771,chunk__23090_23772,count__23091_23773,i__23092_23774,map__23499_23944,map__23499_23945__$1,gline_23946,gcol_23947,name_23948,vec__23488_23934,column_23935,column_info_23936,seq__23425_23927__$1,temp__5735__auto___23926__$1,vec__23422_23875,line_23876,columns_23877,seq__23089_23869__$1,temp__5735__auto___23868,inverted))
,cljs.core.sorted_map()));


var G__23949 = seq__23491_23940;
var G__23950 = chunk__23492_23941;
var G__23951 = count__23493_23942;
var G__23952 = (i__23494_23943 + (1));
seq__23491_23940 = G__23949;
chunk__23492_23941 = G__23950;
count__23493_23942 = G__23951;
i__23494_23943 = G__23952;
continue;
} else {
var temp__5735__auto___23953__$2 = cljs.core.seq(seq__23491_23940);
if(temp__5735__auto___23953__$2){
var seq__23491_23954__$1 = temp__5735__auto___23953__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23491_23954__$1)){
var c__4556__auto___23955 = cljs.core.chunk_first(seq__23491_23954__$1);
var G__23956 = cljs.core.chunk_rest(seq__23491_23954__$1);
var G__23957 = c__4556__auto___23955;
var G__23958 = cljs.core.count(c__4556__auto___23955);
var G__23959 = (0);
seq__23491_23940 = G__23956;
chunk__23492_23941 = G__23957;
count__23493_23942 = G__23958;
i__23494_23943 = G__23959;
continue;
} else {
var map__23501_23960 = cljs.core.first(seq__23491_23954__$1);
var map__23501_23961__$1 = (((((!((map__23501_23960 == null))))?(((((map__23501_23960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23501_23960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23501_23960):map__23501_23960);
var gline_23962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23501_23961__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23501_23961__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23501_23961__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23962], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23491_23940,chunk__23492_23941,count__23493_23942,i__23494_23943,seq__23425_23878,chunk__23426_23879,count__23427_23880,i__23428_23881,seq__23089_23771,chunk__23090_23772,count__23091_23773,i__23092_23774,map__23501_23960,map__23501_23961__$1,gline_23962,gcol_23963,name_23964,seq__23491_23954__$1,temp__5735__auto___23953__$2,vec__23488_23934,column_23935,column_info_23936,seq__23425_23927__$1,temp__5735__auto___23926__$1,vec__23422_23875,line_23876,columns_23877,seq__23089_23869__$1,temp__5735__auto___23868,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23963], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23876,new cljs.core.Keyword(null,"col","col",-1959363084),column_23935,new cljs.core.Keyword(null,"name","name",1843675177),name_23964], null));
});})(seq__23491_23940,chunk__23492_23941,count__23493_23942,i__23494_23943,seq__23425_23878,chunk__23426_23879,count__23427_23880,i__23428_23881,seq__23089_23771,chunk__23090_23772,count__23091_23773,i__23092_23774,map__23501_23960,map__23501_23961__$1,gline_23962,gcol_23963,name_23964,seq__23491_23954__$1,temp__5735__auto___23953__$2,vec__23488_23934,column_23935,column_info_23936,seq__23425_23927__$1,temp__5735__auto___23926__$1,vec__23422_23875,line_23876,columns_23877,seq__23089_23869__$1,temp__5735__auto___23868,inverted))
,cljs.core.sorted_map()));


var G__23965 = cljs.core.next(seq__23491_23954__$1);
var G__23966 = null;
var G__23967 = (0);
var G__23968 = (0);
seq__23491_23940 = G__23965;
chunk__23492_23941 = G__23966;
count__23493_23942 = G__23967;
i__23494_23943 = G__23968;
continue;
}
} else {
}
}
break;
}


var G__23969 = cljs.core.next(seq__23425_23927__$1);
var G__23970 = null;
var G__23971 = (0);
var G__23972 = (0);
seq__23425_23878 = G__23969;
chunk__23426_23879 = G__23970;
count__23427_23880 = G__23971;
i__23428_23881 = G__23972;
continue;
}
} else {
}
}
break;
}


var G__23973 = cljs.core.next(seq__23089_23869__$1);
var G__23974 = null;
var G__23975 = (0);
var G__23976 = (0);
seq__23089_23771 = G__23973;
chunk__23090_23772 = G__23974;
count__23091_23773 = G__23975;
i__23092_23774 = G__23976;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
