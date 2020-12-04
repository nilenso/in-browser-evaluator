goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__22490){
var vec__22491 = p__22490;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22491,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22491,(1),null);
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
var vec__22504 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22504,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22504,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22504,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22504,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22504,(4),null);
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
var vec__22527 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
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
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22527,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22527,(1),null);
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
var map__22531 = segmap;
var map__22531__$1 = (((((!((map__22531 == null))))?(((((map__22531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22531):map__22531);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22531__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22531__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22531__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22531__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22531__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__22530_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__22530_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__22550 = arguments.length;
switch (G__22550) {
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
var vec__22563 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__23653 = cljs.core.next(segs__$1);
var G__23654 = nrelseg;
var G__23655 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23653;
relseg__$1 = G__23654;
result__$1 = G__23655;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22563,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22563,(1),null);
var G__23656 = (gline + (1));
var G__23657 = cljs.core.next(lines__$1);
var G__23658 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23659 = result__$1;
gline = G__23656;
lines__$1 = G__23657;
relseg = G__23658;
result = G__23659;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__22574){
var vec__22575 = p__22574;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22575,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22575,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22575,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22575,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22575,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__22579){
var vec__22580 = p__22579;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22580,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22580,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22580,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22580,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22580,(4),null);
var seg = vec__22580;
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
var segv_23660 = info__GT_segv(info,source_idx,line,col);
var gline_23661 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23662 = cljs.core.count(cljs.core.deref(lines));
if((gline_23661 > (lc_23662 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22597,chunk__22598,count__22599,i__22600,segv_23660,gline_23661,lc_23662,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23661 - (lc_23662 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23660], null));
});})(seq__22597,chunk__22598,count__22599,i__22600,segv_23660,gline_23661,lc_23662,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22597,chunk__22598,count__22599,i__22600,segv_23660,gline_23661,lc_23662,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23661], null),cljs.core.conj,segv_23660);
});})(seq__22597,chunk__22598,count__22599,i__22600,segv_23660,gline_23661,lc_23662,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23663 = seq__22597;
var G__23664 = chunk__22598;
var G__23665 = count__22599;
var G__23666 = (i__22600 + (1));
seq__22597 = G__23663;
chunk__22598 = G__23664;
count__22599 = G__23665;
i__22600 = G__23666;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__22597);
if(temp__5735__auto__){
var seq__22597__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22597__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__22597__$1);
var G__23695 = cljs.core.chunk_rest(seq__22597__$1);
var G__23696 = c__4556__auto__;
var G__23697 = cljs.core.count(c__4556__auto__);
var G__23698 = (0);
seq__22597 = G__23695;
chunk__22598 = G__23696;
count__22599 = G__23697;
i__22600 = G__23698;
continue;
} else {
var info = cljs.core.first(seq__22597__$1);
var segv_23699 = info__GT_segv(info,source_idx,line,col);
var gline_23700 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23701 = cljs.core.count(cljs.core.deref(lines));
if((gline_23700 > (lc_23701 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22597,chunk__22598,count__22599,i__22600,segv_23699,gline_23700,lc_23701,info,seq__22597__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23700 - (lc_23701 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23699], null));
});})(seq__22597,chunk__22598,count__22599,i__22600,segv_23699,gline_23700,lc_23701,info,seq__22597__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22597,chunk__22598,count__22599,i__22600,segv_23699,gline_23700,lc_23701,info,seq__22597__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23700], null),cljs.core.conj,segv_23699);
});})(seq__22597,chunk__22598,count__22599,i__22600,segv_23699,gline_23700,lc_23701,info,seq__22597__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23702 = cljs.core.next(seq__22597__$1);
var G__23703 = null;
var G__23704 = (0);
var G__23705 = (0);
seq__22597 = G__23702;
chunk__22598 = G__23703;
count__22599 = G__23704;
i__22600 = G__23705;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__22625_23706 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__22626_23707 = null;
var count__22627_23708 = (0);
var i__22628_23709 = (0);
while(true){
if((i__22628_23709 < count__22627_23708)){
var vec__22819_23710 = chunk__22626_23707.cljs$core$IIndexed$_nth$arity$2(null,i__22628_23709);
var source_idx_23711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22819_23710,(0),null);
var vec__22822_23712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22819_23710,(1),null);
var __23713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22822_23712,(0),null);
var lines_23714__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22822_23712,(1),null);
var seq__22825_23715 = cljs.core.seq(lines_23714__$1);
var chunk__22826_23716 = null;
var count__22827_23717 = (0);
var i__22828_23718 = (0);
while(true){
if((i__22828_23718 < count__22827_23717)){
var vec__22877_23719 = chunk__22826_23716.cljs$core$IIndexed$_nth$arity$2(null,i__22828_23718);
var line_23720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22877_23719,(0),null);
var cols_23721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22877_23719,(1),null);
var seq__22880_23722 = cljs.core.seq(cols_23721);
var chunk__22881_23723 = null;
var count__22882_23724 = (0);
var i__22883_23725 = (0);
while(true){
if((i__22883_23725 < count__22882_23724)){
var vec__22890_23726 = chunk__22881_23723.cljs$core$IIndexed$_nth$arity$2(null,i__22883_23725);
var col_23727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22890_23726,(0),null);
var infos_23728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22890_23726,(1),null);
encode_cols(infos_23728,source_idx_23711,line_23720,col_23727);


var G__23729 = seq__22880_23722;
var G__23730 = chunk__22881_23723;
var G__23731 = count__22882_23724;
var G__23732 = (i__22883_23725 + (1));
seq__22880_23722 = G__23729;
chunk__22881_23723 = G__23730;
count__22882_23724 = G__23731;
i__22883_23725 = G__23732;
continue;
} else {
var temp__5735__auto___23733 = cljs.core.seq(seq__22880_23722);
if(temp__5735__auto___23733){
var seq__22880_23734__$1 = temp__5735__auto___23733;
if(cljs.core.chunked_seq_QMARK_(seq__22880_23734__$1)){
var c__4556__auto___23735 = cljs.core.chunk_first(seq__22880_23734__$1);
var G__23736 = cljs.core.chunk_rest(seq__22880_23734__$1);
var G__23737 = c__4556__auto___23735;
var G__23738 = cljs.core.count(c__4556__auto___23735);
var G__23739 = (0);
seq__22880_23722 = G__23736;
chunk__22881_23723 = G__23737;
count__22882_23724 = G__23738;
i__22883_23725 = G__23739;
continue;
} else {
var vec__22893_23740 = cljs.core.first(seq__22880_23734__$1);
var col_23741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22893_23740,(0),null);
var infos_23742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22893_23740,(1),null);
encode_cols(infos_23742,source_idx_23711,line_23720,col_23741);


var G__23743 = cljs.core.next(seq__22880_23734__$1);
var G__23744 = null;
var G__23745 = (0);
var G__23746 = (0);
seq__22880_23722 = G__23743;
chunk__22881_23723 = G__23744;
count__22882_23724 = G__23745;
i__22883_23725 = G__23746;
continue;
}
} else {
}
}
break;
}


var G__23747 = seq__22825_23715;
var G__23748 = chunk__22826_23716;
var G__23749 = count__22827_23717;
var G__23750 = (i__22828_23718 + (1));
seq__22825_23715 = G__23747;
chunk__22826_23716 = G__23748;
count__22827_23717 = G__23749;
i__22828_23718 = G__23750;
continue;
} else {
var temp__5735__auto___23751 = cljs.core.seq(seq__22825_23715);
if(temp__5735__auto___23751){
var seq__22825_23752__$1 = temp__5735__auto___23751;
if(cljs.core.chunked_seq_QMARK_(seq__22825_23752__$1)){
var c__4556__auto___23753 = cljs.core.chunk_first(seq__22825_23752__$1);
var G__23754 = cljs.core.chunk_rest(seq__22825_23752__$1);
var G__23755 = c__4556__auto___23753;
var G__23756 = cljs.core.count(c__4556__auto___23753);
var G__23757 = (0);
seq__22825_23715 = G__23754;
chunk__22826_23716 = G__23755;
count__22827_23717 = G__23756;
i__22828_23718 = G__23757;
continue;
} else {
var vec__22896_23758 = cljs.core.first(seq__22825_23752__$1);
var line_23759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22896_23758,(0),null);
var cols_23760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22896_23758,(1),null);
var seq__22899_23761 = cljs.core.seq(cols_23760);
var chunk__22900_23762 = null;
var count__22901_23763 = (0);
var i__22902_23764 = (0);
while(true){
if((i__22902_23764 < count__22901_23763)){
var vec__22909_23765 = chunk__22900_23762.cljs$core$IIndexed$_nth$arity$2(null,i__22902_23764);
var col_23766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22909_23765,(0),null);
var infos_23767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22909_23765,(1),null);
encode_cols(infos_23767,source_idx_23711,line_23759,col_23766);


var G__23768 = seq__22899_23761;
var G__23769 = chunk__22900_23762;
var G__23770 = count__22901_23763;
var G__23771 = (i__22902_23764 + (1));
seq__22899_23761 = G__23768;
chunk__22900_23762 = G__23769;
count__22901_23763 = G__23770;
i__22902_23764 = G__23771;
continue;
} else {
var temp__5735__auto___23772__$1 = cljs.core.seq(seq__22899_23761);
if(temp__5735__auto___23772__$1){
var seq__22899_23773__$1 = temp__5735__auto___23772__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22899_23773__$1)){
var c__4556__auto___23774 = cljs.core.chunk_first(seq__22899_23773__$1);
var G__23775 = cljs.core.chunk_rest(seq__22899_23773__$1);
var G__23776 = c__4556__auto___23774;
var G__23777 = cljs.core.count(c__4556__auto___23774);
var G__23778 = (0);
seq__22899_23761 = G__23775;
chunk__22900_23762 = G__23776;
count__22901_23763 = G__23777;
i__22902_23764 = G__23778;
continue;
} else {
var vec__22912_23779 = cljs.core.first(seq__22899_23773__$1);
var col_23780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22912_23779,(0),null);
var infos_23781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22912_23779,(1),null);
encode_cols(infos_23781,source_idx_23711,line_23759,col_23780);


var G__23782 = cljs.core.next(seq__22899_23773__$1);
var G__23783 = null;
var G__23784 = (0);
var G__23785 = (0);
seq__22899_23761 = G__23782;
chunk__22900_23762 = G__23783;
count__22901_23763 = G__23784;
i__22902_23764 = G__23785;
continue;
}
} else {
}
}
break;
}


var G__23786 = cljs.core.next(seq__22825_23752__$1);
var G__23787 = null;
var G__23788 = (0);
var G__23789 = (0);
seq__22825_23715 = G__23786;
chunk__22826_23716 = G__23787;
count__22827_23717 = G__23788;
i__22828_23718 = G__23789;
continue;
}
} else {
}
}
break;
}


var G__23790 = seq__22625_23706;
var G__23791 = chunk__22626_23707;
var G__23792 = count__22627_23708;
var G__23793 = (i__22628_23709 + (1));
seq__22625_23706 = G__23790;
chunk__22626_23707 = G__23791;
count__22627_23708 = G__23792;
i__22628_23709 = G__23793;
continue;
} else {
var temp__5735__auto___23794 = cljs.core.seq(seq__22625_23706);
if(temp__5735__auto___23794){
var seq__22625_23795__$1 = temp__5735__auto___23794;
if(cljs.core.chunked_seq_QMARK_(seq__22625_23795__$1)){
var c__4556__auto___23796 = cljs.core.chunk_first(seq__22625_23795__$1);
var G__23797 = cljs.core.chunk_rest(seq__22625_23795__$1);
var G__23798 = c__4556__auto___23796;
var G__23799 = cljs.core.count(c__4556__auto___23796);
var G__23800 = (0);
seq__22625_23706 = G__23797;
chunk__22626_23707 = G__23798;
count__22627_23708 = G__23799;
i__22628_23709 = G__23800;
continue;
} else {
var vec__22915_23801 = cljs.core.first(seq__22625_23795__$1);
var source_idx_23802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22915_23801,(0),null);
var vec__22918_23803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22915_23801,(1),null);
var __23804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22918_23803,(0),null);
var lines_23805__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22918_23803,(1),null);
var seq__22921_23806 = cljs.core.seq(lines_23805__$1);
var chunk__22922_23807 = null;
var count__22923_23808 = (0);
var i__22924_23809 = (0);
while(true){
if((i__22924_23809 < count__22923_23808)){
var vec__22970_23810 = chunk__22922_23807.cljs$core$IIndexed$_nth$arity$2(null,i__22924_23809);
var line_23811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22970_23810,(0),null);
var cols_23812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22970_23810,(1),null);
var seq__22973_23813 = cljs.core.seq(cols_23812);
var chunk__22974_23814 = null;
var count__22975_23815 = (0);
var i__22976_23816 = (0);
while(true){
if((i__22976_23816 < count__22975_23815)){
var vec__22983_23817 = chunk__22974_23814.cljs$core$IIndexed$_nth$arity$2(null,i__22976_23816);
var col_23818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22983_23817,(0),null);
var infos_23819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22983_23817,(1),null);
encode_cols(infos_23819,source_idx_23802,line_23811,col_23818);


var G__23841 = seq__22973_23813;
var G__23842 = chunk__22974_23814;
var G__23843 = count__22975_23815;
var G__23844 = (i__22976_23816 + (1));
seq__22973_23813 = G__23841;
chunk__22974_23814 = G__23842;
count__22975_23815 = G__23843;
i__22976_23816 = G__23844;
continue;
} else {
var temp__5735__auto___23845__$1 = cljs.core.seq(seq__22973_23813);
if(temp__5735__auto___23845__$1){
var seq__22973_23846__$1 = temp__5735__auto___23845__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22973_23846__$1)){
var c__4556__auto___23847 = cljs.core.chunk_first(seq__22973_23846__$1);
var G__23848 = cljs.core.chunk_rest(seq__22973_23846__$1);
var G__23849 = c__4556__auto___23847;
var G__23850 = cljs.core.count(c__4556__auto___23847);
var G__23851 = (0);
seq__22973_23813 = G__23848;
chunk__22974_23814 = G__23849;
count__22975_23815 = G__23850;
i__22976_23816 = G__23851;
continue;
} else {
var vec__22986_23852 = cljs.core.first(seq__22973_23846__$1);
var col_23853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22986_23852,(0),null);
var infos_23854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22986_23852,(1),null);
encode_cols(infos_23854,source_idx_23802,line_23811,col_23853);


var G__23855 = cljs.core.next(seq__22973_23846__$1);
var G__23856 = null;
var G__23857 = (0);
var G__23858 = (0);
seq__22973_23813 = G__23855;
chunk__22974_23814 = G__23856;
count__22975_23815 = G__23857;
i__22976_23816 = G__23858;
continue;
}
} else {
}
}
break;
}


var G__23859 = seq__22921_23806;
var G__23860 = chunk__22922_23807;
var G__23861 = count__22923_23808;
var G__23862 = (i__22924_23809 + (1));
seq__22921_23806 = G__23859;
chunk__22922_23807 = G__23860;
count__22923_23808 = G__23861;
i__22924_23809 = G__23862;
continue;
} else {
var temp__5735__auto___23863__$1 = cljs.core.seq(seq__22921_23806);
if(temp__5735__auto___23863__$1){
var seq__22921_23864__$1 = temp__5735__auto___23863__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22921_23864__$1)){
var c__4556__auto___23865 = cljs.core.chunk_first(seq__22921_23864__$1);
var G__23866 = cljs.core.chunk_rest(seq__22921_23864__$1);
var G__23867 = c__4556__auto___23865;
var G__23868 = cljs.core.count(c__4556__auto___23865);
var G__23869 = (0);
seq__22921_23806 = G__23866;
chunk__22922_23807 = G__23867;
count__22923_23808 = G__23868;
i__22924_23809 = G__23869;
continue;
} else {
var vec__22990_23870 = cljs.core.first(seq__22921_23864__$1);
var line_23871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22990_23870,(0),null);
var cols_23872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22990_23870,(1),null);
var seq__22993_23873 = cljs.core.seq(cols_23872);
var chunk__22994_23874 = null;
var count__22995_23875 = (0);
var i__22996_23876 = (0);
while(true){
if((i__22996_23876 < count__22995_23875)){
var vec__23003_23877 = chunk__22994_23874.cljs$core$IIndexed$_nth$arity$2(null,i__22996_23876);
var col_23878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23003_23877,(0),null);
var infos_23879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23003_23877,(1),null);
encode_cols(infos_23879,source_idx_23802,line_23871,col_23878);


var G__23880 = seq__22993_23873;
var G__23881 = chunk__22994_23874;
var G__23882 = count__22995_23875;
var G__23883 = (i__22996_23876 + (1));
seq__22993_23873 = G__23880;
chunk__22994_23874 = G__23881;
count__22995_23875 = G__23882;
i__22996_23876 = G__23883;
continue;
} else {
var temp__5735__auto___23884__$2 = cljs.core.seq(seq__22993_23873);
if(temp__5735__auto___23884__$2){
var seq__22993_23885__$1 = temp__5735__auto___23884__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22993_23885__$1)){
var c__4556__auto___23886 = cljs.core.chunk_first(seq__22993_23885__$1);
var G__23887 = cljs.core.chunk_rest(seq__22993_23885__$1);
var G__23888 = c__4556__auto___23886;
var G__23889 = cljs.core.count(c__4556__auto___23886);
var G__23890 = (0);
seq__22993_23873 = G__23887;
chunk__22994_23874 = G__23888;
count__22995_23875 = G__23889;
i__22996_23876 = G__23890;
continue;
} else {
var vec__23006_23891 = cljs.core.first(seq__22993_23885__$1);
var col_23892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23006_23891,(0),null);
var infos_23893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23006_23891,(1),null);
encode_cols(infos_23893,source_idx_23802,line_23871,col_23892);


var G__23894 = cljs.core.next(seq__22993_23885__$1);
var G__23895 = null;
var G__23896 = (0);
var G__23897 = (0);
seq__22993_23873 = G__23894;
chunk__22994_23874 = G__23895;
count__22995_23875 = G__23896;
i__22996_23876 = G__23897;
continue;
}
} else {
}
}
break;
}


var G__23898 = cljs.core.next(seq__22921_23864__$1);
var G__23899 = null;
var G__23900 = (0);
var G__23901 = (0);
seq__22921_23806 = G__23898;
chunk__22922_23807 = G__23899;
count__22923_23808 = G__23900;
i__22924_23809 = G__23901;
continue;
}
} else {
}
}
break;
}


var G__23902 = cljs.core.next(seq__22625_23795__$1);
var G__23903 = null;
var G__23904 = (0);
var G__23905 = (0);
seq__22625_23706 = G__23902;
chunk__22626_23707 = G__23903;
count__22627_23708 = G__23904;
i__22628_23709 = G__23905;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__23009 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__22594_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22594_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__22595_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__22595_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22596_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__22596_SHARP_);
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
var G__23906 = cljs.core.next(col_map_seq);
var G__23907 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__23019,col,infos,vec__23016,line,col_map){
return (function (v,p__23022){
var map__23023 = p__23022;
var map__23023__$1 = (((((!((map__23023 == null))))?(((((map__23023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23023):map__23023);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23023__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23023__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__23019,col,infos,vec__23016,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__23906;
new_cols = G__23907;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__23908 = cljs.core.next(line_map_seq);
var G__23909 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__23908;
new_lines = G__23909;
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
var seq__23026_23910 = cljs.core.seq(reverse_map);
var chunk__23027_23911 = null;
var count__23028_23912 = (0);
var i__23029_23913 = (0);
while(true){
if((i__23029_23913 < count__23028_23912)){
var vec__23325_23914 = chunk__23027_23911.cljs$core$IIndexed$_nth$arity$2(null,i__23029_23913);
var line_23915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23325_23914,(0),null);
var columns_23916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23325_23914,(1),null);
var seq__23329_23929 = cljs.core.seq(columns_23916);
var chunk__23330_23930 = null;
var count__23331_23931 = (0);
var i__23332_23932 = (0);
while(true){
if((i__23332_23932 < count__23331_23931)){
var vec__23363_23933 = chunk__23330_23930.cljs$core$IIndexed$_nth$arity$2(null,i__23332_23932);
var column_23934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23363_23933,(0),null);
var column_info_23935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23363_23933,(1),null);
var seq__23366_23936 = cljs.core.seq(column_info_23935);
var chunk__23367_23937 = null;
var count__23368_23938 = (0);
var i__23369_23939 = (0);
while(true){
if((i__23369_23939 < count__23368_23938)){
var map__23381_23940 = chunk__23367_23937.cljs$core$IIndexed$_nth$arity$2(null,i__23369_23939);
var map__23381_23941__$1 = (((((!((map__23381_23940 == null))))?(((((map__23381_23940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23381_23940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23381_23940):map__23381_23940);
var gline_23942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23381_23941__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23381_23941__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23381_23941__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23942], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23366_23936,chunk__23367_23937,count__23368_23938,i__23369_23939,seq__23329_23929,chunk__23330_23930,count__23331_23931,i__23332_23932,seq__23026_23910,chunk__23027_23911,count__23028_23912,i__23029_23913,map__23381_23940,map__23381_23941__$1,gline_23942,gcol_23943,name_23944,vec__23363_23933,column_23934,column_info_23935,vec__23325_23914,line_23915,columns_23916,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23943], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23915,new cljs.core.Keyword(null,"col","col",-1959363084),column_23934,new cljs.core.Keyword(null,"name","name",1843675177),name_23944], null));
});})(seq__23366_23936,chunk__23367_23937,count__23368_23938,i__23369_23939,seq__23329_23929,chunk__23330_23930,count__23331_23931,i__23332_23932,seq__23026_23910,chunk__23027_23911,count__23028_23912,i__23029_23913,map__23381_23940,map__23381_23941__$1,gline_23942,gcol_23943,name_23944,vec__23363_23933,column_23934,column_info_23935,vec__23325_23914,line_23915,columns_23916,inverted))
,cljs.core.sorted_map()));


var G__23945 = seq__23366_23936;
var G__23946 = chunk__23367_23937;
var G__23947 = count__23368_23938;
var G__23948 = (i__23369_23939 + (1));
seq__23366_23936 = G__23945;
chunk__23367_23937 = G__23946;
count__23368_23938 = G__23947;
i__23369_23939 = G__23948;
continue;
} else {
var temp__5735__auto___23949 = cljs.core.seq(seq__23366_23936);
if(temp__5735__auto___23949){
var seq__23366_23950__$1 = temp__5735__auto___23949;
if(cljs.core.chunked_seq_QMARK_(seq__23366_23950__$1)){
var c__4556__auto___23951 = cljs.core.chunk_first(seq__23366_23950__$1);
var G__23952 = cljs.core.chunk_rest(seq__23366_23950__$1);
var G__23953 = c__4556__auto___23951;
var G__23954 = cljs.core.count(c__4556__auto___23951);
var G__23955 = (0);
seq__23366_23936 = G__23952;
chunk__23367_23937 = G__23953;
count__23368_23938 = G__23954;
i__23369_23939 = G__23955;
continue;
} else {
var map__23383_23956 = cljs.core.first(seq__23366_23950__$1);
var map__23383_23957__$1 = (((((!((map__23383_23956 == null))))?(((((map__23383_23956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23383_23956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23383_23956):map__23383_23956);
var gline_23958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23383_23957__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23383_23957__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23383_23957__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23958], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23366_23936,chunk__23367_23937,count__23368_23938,i__23369_23939,seq__23329_23929,chunk__23330_23930,count__23331_23931,i__23332_23932,seq__23026_23910,chunk__23027_23911,count__23028_23912,i__23029_23913,map__23383_23956,map__23383_23957__$1,gline_23958,gcol_23959,name_23960,seq__23366_23950__$1,temp__5735__auto___23949,vec__23363_23933,column_23934,column_info_23935,vec__23325_23914,line_23915,columns_23916,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23959], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23915,new cljs.core.Keyword(null,"col","col",-1959363084),column_23934,new cljs.core.Keyword(null,"name","name",1843675177),name_23960], null));
});})(seq__23366_23936,chunk__23367_23937,count__23368_23938,i__23369_23939,seq__23329_23929,chunk__23330_23930,count__23331_23931,i__23332_23932,seq__23026_23910,chunk__23027_23911,count__23028_23912,i__23029_23913,map__23383_23956,map__23383_23957__$1,gline_23958,gcol_23959,name_23960,seq__23366_23950__$1,temp__5735__auto___23949,vec__23363_23933,column_23934,column_info_23935,vec__23325_23914,line_23915,columns_23916,inverted))
,cljs.core.sorted_map()));


var G__23961 = cljs.core.next(seq__23366_23950__$1);
var G__23962 = null;
var G__23963 = (0);
var G__23964 = (0);
seq__23366_23936 = G__23961;
chunk__23367_23937 = G__23962;
count__23368_23938 = G__23963;
i__23369_23939 = G__23964;
continue;
}
} else {
}
}
break;
}


var G__23965 = seq__23329_23929;
var G__23966 = chunk__23330_23930;
var G__23967 = count__23331_23931;
var G__23968 = (i__23332_23932 + (1));
seq__23329_23929 = G__23965;
chunk__23330_23930 = G__23966;
count__23331_23931 = G__23967;
i__23332_23932 = G__23968;
continue;
} else {
var temp__5735__auto___23969 = cljs.core.seq(seq__23329_23929);
if(temp__5735__auto___23969){
var seq__23329_23970__$1 = temp__5735__auto___23969;
if(cljs.core.chunked_seq_QMARK_(seq__23329_23970__$1)){
var c__4556__auto___23971 = cljs.core.chunk_first(seq__23329_23970__$1);
var G__23972 = cljs.core.chunk_rest(seq__23329_23970__$1);
var G__23973 = c__4556__auto___23971;
var G__23974 = cljs.core.count(c__4556__auto___23971);
var G__23975 = (0);
seq__23329_23929 = G__23972;
chunk__23330_23930 = G__23973;
count__23331_23931 = G__23974;
i__23332_23932 = G__23975;
continue;
} else {
var vec__23402_23976 = cljs.core.first(seq__23329_23970__$1);
var column_23977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23402_23976,(0),null);
var column_info_23978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23402_23976,(1),null);
var seq__23407_23979 = cljs.core.seq(column_info_23978);
var chunk__23408_23980 = null;
var count__23409_23981 = (0);
var i__23410_23982 = (0);
while(true){
if((i__23410_23982 < count__23409_23981)){
var map__23418_23983 = chunk__23408_23980.cljs$core$IIndexed$_nth$arity$2(null,i__23410_23982);
var map__23418_23984__$1 = (((((!((map__23418_23983 == null))))?(((((map__23418_23983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23418_23983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23418_23983):map__23418_23983);
var gline_23985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23418_23984__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23418_23984__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23418_23984__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23985], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23407_23979,chunk__23408_23980,count__23409_23981,i__23410_23982,seq__23329_23929,chunk__23330_23930,count__23331_23931,i__23332_23932,seq__23026_23910,chunk__23027_23911,count__23028_23912,i__23029_23913,map__23418_23983,map__23418_23984__$1,gline_23985,gcol_23986,name_23987,vec__23402_23976,column_23977,column_info_23978,seq__23329_23970__$1,temp__5735__auto___23969,vec__23325_23914,line_23915,columns_23916,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23986], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23915,new cljs.core.Keyword(null,"col","col",-1959363084),column_23977,new cljs.core.Keyword(null,"name","name",1843675177),name_23987], null));
});})(seq__23407_23979,chunk__23408_23980,count__23409_23981,i__23410_23982,seq__23329_23929,chunk__23330_23930,count__23331_23931,i__23332_23932,seq__23026_23910,chunk__23027_23911,count__23028_23912,i__23029_23913,map__23418_23983,map__23418_23984__$1,gline_23985,gcol_23986,name_23987,vec__23402_23976,column_23977,column_info_23978,seq__23329_23970__$1,temp__5735__auto___23969,vec__23325_23914,line_23915,columns_23916,inverted))
,cljs.core.sorted_map()));


var G__23988 = seq__23407_23979;
var G__23989 = chunk__23408_23980;
var G__23990 = count__23409_23981;
var G__23991 = (i__23410_23982 + (1));
seq__23407_23979 = G__23988;
chunk__23408_23980 = G__23989;
count__23409_23981 = G__23990;
i__23410_23982 = G__23991;
continue;
} else {
var temp__5735__auto___23992__$1 = cljs.core.seq(seq__23407_23979);
if(temp__5735__auto___23992__$1){
var seq__23407_23993__$1 = temp__5735__auto___23992__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23407_23993__$1)){
var c__4556__auto___23994 = cljs.core.chunk_first(seq__23407_23993__$1);
var G__23995 = cljs.core.chunk_rest(seq__23407_23993__$1);
var G__23996 = c__4556__auto___23994;
var G__23997 = cljs.core.count(c__4556__auto___23994);
var G__23998 = (0);
seq__23407_23979 = G__23995;
chunk__23408_23980 = G__23996;
count__23409_23981 = G__23997;
i__23410_23982 = G__23998;
continue;
} else {
var map__23420_23999 = cljs.core.first(seq__23407_23993__$1);
var map__23420_24000__$1 = (((((!((map__23420_23999 == null))))?(((((map__23420_23999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23420_23999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23420_23999):map__23420_23999);
var gline_24001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23420_24000__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23420_24000__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23420_24000__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24001], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23407_23979,chunk__23408_23980,count__23409_23981,i__23410_23982,seq__23329_23929,chunk__23330_23930,count__23331_23931,i__23332_23932,seq__23026_23910,chunk__23027_23911,count__23028_23912,i__23029_23913,map__23420_23999,map__23420_24000__$1,gline_24001,gcol_24002,name_24003,seq__23407_23993__$1,temp__5735__auto___23992__$1,vec__23402_23976,column_23977,column_info_23978,seq__23329_23970__$1,temp__5735__auto___23969,vec__23325_23914,line_23915,columns_23916,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24002], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23915,new cljs.core.Keyword(null,"col","col",-1959363084),column_23977,new cljs.core.Keyword(null,"name","name",1843675177),name_24003], null));
});})(seq__23407_23979,chunk__23408_23980,count__23409_23981,i__23410_23982,seq__23329_23929,chunk__23330_23930,count__23331_23931,i__23332_23932,seq__23026_23910,chunk__23027_23911,count__23028_23912,i__23029_23913,map__23420_23999,map__23420_24000__$1,gline_24001,gcol_24002,name_24003,seq__23407_23993__$1,temp__5735__auto___23992__$1,vec__23402_23976,column_23977,column_info_23978,seq__23329_23970__$1,temp__5735__auto___23969,vec__23325_23914,line_23915,columns_23916,inverted))
,cljs.core.sorted_map()));


var G__24005 = cljs.core.next(seq__23407_23993__$1);
var G__24006 = null;
var G__24007 = (0);
var G__24008 = (0);
seq__23407_23979 = G__24005;
chunk__23408_23980 = G__24006;
count__23409_23981 = G__24007;
i__23410_23982 = G__24008;
continue;
}
} else {
}
}
break;
}


var G__24009 = cljs.core.next(seq__23329_23970__$1);
var G__24010 = null;
var G__24011 = (0);
var G__24012 = (0);
seq__23329_23929 = G__24009;
chunk__23330_23930 = G__24010;
count__23331_23931 = G__24011;
i__23332_23932 = G__24012;
continue;
}
} else {
}
}
break;
}


var G__24013 = seq__23026_23910;
var G__24014 = chunk__23027_23911;
var G__24015 = count__23028_23912;
var G__24016 = (i__23029_23913 + (1));
seq__23026_23910 = G__24013;
chunk__23027_23911 = G__24014;
count__23028_23912 = G__24015;
i__23029_23913 = G__24016;
continue;
} else {
var temp__5735__auto___24018 = cljs.core.seq(seq__23026_23910);
if(temp__5735__auto___24018){
var seq__23026_24019__$1 = temp__5735__auto___24018;
if(cljs.core.chunked_seq_QMARK_(seq__23026_24019__$1)){
var c__4556__auto___24023 = cljs.core.chunk_first(seq__23026_24019__$1);
var G__24024 = cljs.core.chunk_rest(seq__23026_24019__$1);
var G__24025 = c__4556__auto___24023;
var G__24026 = cljs.core.count(c__4556__auto___24023);
var G__24027 = (0);
seq__23026_23910 = G__24024;
chunk__23027_23911 = G__24025;
count__23028_23912 = G__24026;
i__23029_23913 = G__24027;
continue;
} else {
var vec__23436_24028 = cljs.core.first(seq__23026_24019__$1);
var line_24029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23436_24028,(0),null);
var columns_24030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23436_24028,(1),null);
var seq__23439_24031 = cljs.core.seq(columns_24030);
var chunk__23440_24032 = null;
var count__23441_24033 = (0);
var i__23442_24034 = (0);
while(true){
if((i__23442_24034 < count__23441_24033)){
var vec__23547_24035 = chunk__23440_24032.cljs$core$IIndexed$_nth$arity$2(null,i__23442_24034);
var column_24036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23547_24035,(0),null);
var column_info_24037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23547_24035,(1),null);
var seq__23550_24038 = cljs.core.seq(column_info_24037);
var chunk__23551_24039 = null;
var count__23552_24040 = (0);
var i__23553_24041 = (0);
while(true){
if((i__23553_24041 < count__23552_24040)){
var map__23561_24042 = chunk__23551_24039.cljs$core$IIndexed$_nth$arity$2(null,i__23553_24041);
var map__23561_24043__$1 = (((((!((map__23561_24042 == null))))?(((((map__23561_24042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23561_24042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23561_24042):map__23561_24042);
var gline_24044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23561_24043__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23561_24043__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23561_24043__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24044], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23550_24038,chunk__23551_24039,count__23552_24040,i__23553_24041,seq__23439_24031,chunk__23440_24032,count__23441_24033,i__23442_24034,seq__23026_23910,chunk__23027_23911,count__23028_23912,i__23029_23913,map__23561_24042,map__23561_24043__$1,gline_24044,gcol_24045,name_24046,vec__23547_24035,column_24036,column_info_24037,vec__23436_24028,line_24029,columns_24030,seq__23026_24019__$1,temp__5735__auto___24018,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24045], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24029,new cljs.core.Keyword(null,"col","col",-1959363084),column_24036,new cljs.core.Keyword(null,"name","name",1843675177),name_24046], null));
});})(seq__23550_24038,chunk__23551_24039,count__23552_24040,i__23553_24041,seq__23439_24031,chunk__23440_24032,count__23441_24033,i__23442_24034,seq__23026_23910,chunk__23027_23911,count__23028_23912,i__23029_23913,map__23561_24042,map__23561_24043__$1,gline_24044,gcol_24045,name_24046,vec__23547_24035,column_24036,column_info_24037,vec__23436_24028,line_24029,columns_24030,seq__23026_24019__$1,temp__5735__auto___24018,inverted))
,cljs.core.sorted_map()));


var G__24047 = seq__23550_24038;
var G__24048 = chunk__23551_24039;
var G__24049 = count__23552_24040;
var G__24050 = (i__23553_24041 + (1));
seq__23550_24038 = G__24047;
chunk__23551_24039 = G__24048;
count__23552_24040 = G__24049;
i__23553_24041 = G__24050;
continue;
} else {
var temp__5735__auto___24051__$1 = cljs.core.seq(seq__23550_24038);
if(temp__5735__auto___24051__$1){
var seq__23550_24052__$1 = temp__5735__auto___24051__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23550_24052__$1)){
var c__4556__auto___24053 = cljs.core.chunk_first(seq__23550_24052__$1);
var G__24054 = cljs.core.chunk_rest(seq__23550_24052__$1);
var G__24055 = c__4556__auto___24053;
var G__24056 = cljs.core.count(c__4556__auto___24053);
var G__24057 = (0);
seq__23550_24038 = G__24054;
chunk__23551_24039 = G__24055;
count__23552_24040 = G__24056;
i__23553_24041 = G__24057;
continue;
} else {
var map__23572_24058 = cljs.core.first(seq__23550_24052__$1);
var map__23572_24059__$1 = (((((!((map__23572_24058 == null))))?(((((map__23572_24058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23572_24058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23572_24058):map__23572_24058);
var gline_24060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23572_24059__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23572_24059__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24062 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23572_24059__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24060], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23550_24038,chunk__23551_24039,count__23552_24040,i__23553_24041,seq__23439_24031,chunk__23440_24032,count__23441_24033,i__23442_24034,seq__23026_23910,chunk__23027_23911,count__23028_23912,i__23029_23913,map__23572_24058,map__23572_24059__$1,gline_24060,gcol_24061,name_24062,seq__23550_24052__$1,temp__5735__auto___24051__$1,vec__23547_24035,column_24036,column_info_24037,vec__23436_24028,line_24029,columns_24030,seq__23026_24019__$1,temp__5735__auto___24018,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24061], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24029,new cljs.core.Keyword(null,"col","col",-1959363084),column_24036,new cljs.core.Keyword(null,"name","name",1843675177),name_24062], null));
});})(seq__23550_24038,chunk__23551_24039,count__23552_24040,i__23553_24041,seq__23439_24031,chunk__23440_24032,count__23441_24033,i__23442_24034,seq__23026_23910,chunk__23027_23911,count__23028_23912,i__23029_23913,map__23572_24058,map__23572_24059__$1,gline_24060,gcol_24061,name_24062,seq__23550_24052__$1,temp__5735__auto___24051__$1,vec__23547_24035,column_24036,column_info_24037,vec__23436_24028,line_24029,columns_24030,seq__23026_24019__$1,temp__5735__auto___24018,inverted))
,cljs.core.sorted_map()));


var G__24063 = cljs.core.next(seq__23550_24052__$1);
var G__24064 = null;
var G__24065 = (0);
var G__24066 = (0);
seq__23550_24038 = G__24063;
chunk__23551_24039 = G__24064;
count__23552_24040 = G__24065;
i__23553_24041 = G__24066;
continue;
}
} else {
}
}
break;
}


var G__24067 = seq__23439_24031;
var G__24068 = chunk__23440_24032;
var G__24069 = count__23441_24033;
var G__24070 = (i__23442_24034 + (1));
seq__23439_24031 = G__24067;
chunk__23440_24032 = G__24068;
count__23441_24033 = G__24069;
i__23442_24034 = G__24070;
continue;
} else {
var temp__5735__auto___24071__$1 = cljs.core.seq(seq__23439_24031);
if(temp__5735__auto___24071__$1){
var seq__23439_24072__$1 = temp__5735__auto___24071__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23439_24072__$1)){
var c__4556__auto___24073 = cljs.core.chunk_first(seq__23439_24072__$1);
var G__24074 = cljs.core.chunk_rest(seq__23439_24072__$1);
var G__24075 = c__4556__auto___24073;
var G__24076 = cljs.core.count(c__4556__auto___24073);
var G__24077 = (0);
seq__23439_24031 = G__24074;
chunk__23440_24032 = G__24075;
count__23441_24033 = G__24076;
i__23442_24034 = G__24077;
continue;
} else {
var vec__23591_24078 = cljs.core.first(seq__23439_24072__$1);
var column_24079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23591_24078,(0),null);
var column_info_24080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23591_24078,(1),null);
var seq__23595_24081 = cljs.core.seq(column_info_24080);
var chunk__23596_24082 = null;
var count__23597_24083 = (0);
var i__23598_24084 = (0);
while(true){
if((i__23598_24084 < count__23597_24083)){
var map__23625_24085 = chunk__23596_24082.cljs$core$IIndexed$_nth$arity$2(null,i__23598_24084);
var map__23625_24086__$1 = (((((!((map__23625_24085 == null))))?(((((map__23625_24085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23625_24085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23625_24085):map__23625_24085);
var gline_24087 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23625_24086__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23625_24086__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23625_24086__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24087], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23595_24081,chunk__23596_24082,count__23597_24083,i__23598_24084,seq__23439_24031,chunk__23440_24032,count__23441_24033,i__23442_24034,seq__23026_23910,chunk__23027_23911,count__23028_23912,i__23029_23913,map__23625_24085,map__23625_24086__$1,gline_24087,gcol_24088,name_24089,vec__23591_24078,column_24079,column_info_24080,seq__23439_24072__$1,temp__5735__auto___24071__$1,vec__23436_24028,line_24029,columns_24030,seq__23026_24019__$1,temp__5735__auto___24018,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24088], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24029,new cljs.core.Keyword(null,"col","col",-1959363084),column_24079,new cljs.core.Keyword(null,"name","name",1843675177),name_24089], null));
});})(seq__23595_24081,chunk__23596_24082,count__23597_24083,i__23598_24084,seq__23439_24031,chunk__23440_24032,count__23441_24033,i__23442_24034,seq__23026_23910,chunk__23027_23911,count__23028_23912,i__23029_23913,map__23625_24085,map__23625_24086__$1,gline_24087,gcol_24088,name_24089,vec__23591_24078,column_24079,column_info_24080,seq__23439_24072__$1,temp__5735__auto___24071__$1,vec__23436_24028,line_24029,columns_24030,seq__23026_24019__$1,temp__5735__auto___24018,inverted))
,cljs.core.sorted_map()));


var G__24090 = seq__23595_24081;
var G__24091 = chunk__23596_24082;
var G__24092 = count__23597_24083;
var G__24093 = (i__23598_24084 + (1));
seq__23595_24081 = G__24090;
chunk__23596_24082 = G__24091;
count__23597_24083 = G__24092;
i__23598_24084 = G__24093;
continue;
} else {
var temp__5735__auto___24094__$2 = cljs.core.seq(seq__23595_24081);
if(temp__5735__auto___24094__$2){
var seq__23595_24095__$1 = temp__5735__auto___24094__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23595_24095__$1)){
var c__4556__auto___24096 = cljs.core.chunk_first(seq__23595_24095__$1);
var G__24097 = cljs.core.chunk_rest(seq__23595_24095__$1);
var G__24098 = c__4556__auto___24096;
var G__24099 = cljs.core.count(c__4556__auto___24096);
var G__24100 = (0);
seq__23595_24081 = G__24097;
chunk__23596_24082 = G__24098;
count__23597_24083 = G__24099;
i__23598_24084 = G__24100;
continue;
} else {
var map__23630_24101 = cljs.core.first(seq__23595_24095__$1);
var map__23630_24102__$1 = (((((!((map__23630_24101 == null))))?(((((map__23630_24101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23630_24101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23630_24101):map__23630_24101);
var gline_24103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23630_24102__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23630_24102__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23630_24102__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24103], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23595_24081,chunk__23596_24082,count__23597_24083,i__23598_24084,seq__23439_24031,chunk__23440_24032,count__23441_24033,i__23442_24034,seq__23026_23910,chunk__23027_23911,count__23028_23912,i__23029_23913,map__23630_24101,map__23630_24102__$1,gline_24103,gcol_24104,name_24105,seq__23595_24095__$1,temp__5735__auto___24094__$2,vec__23591_24078,column_24079,column_info_24080,seq__23439_24072__$1,temp__5735__auto___24071__$1,vec__23436_24028,line_24029,columns_24030,seq__23026_24019__$1,temp__5735__auto___24018,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24104], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24029,new cljs.core.Keyword(null,"col","col",-1959363084),column_24079,new cljs.core.Keyword(null,"name","name",1843675177),name_24105], null));
});})(seq__23595_24081,chunk__23596_24082,count__23597_24083,i__23598_24084,seq__23439_24031,chunk__23440_24032,count__23441_24033,i__23442_24034,seq__23026_23910,chunk__23027_23911,count__23028_23912,i__23029_23913,map__23630_24101,map__23630_24102__$1,gline_24103,gcol_24104,name_24105,seq__23595_24095__$1,temp__5735__auto___24094__$2,vec__23591_24078,column_24079,column_info_24080,seq__23439_24072__$1,temp__5735__auto___24071__$1,vec__23436_24028,line_24029,columns_24030,seq__23026_24019__$1,temp__5735__auto___24018,inverted))
,cljs.core.sorted_map()));


var G__24106 = cljs.core.next(seq__23595_24095__$1);
var G__24107 = null;
var G__24108 = (0);
var G__24109 = (0);
seq__23595_24081 = G__24106;
chunk__23596_24082 = G__24107;
count__23597_24083 = G__24108;
i__23598_24084 = G__24109;
continue;
}
} else {
}
}
break;
}


var G__24110 = cljs.core.next(seq__23439_24072__$1);
var G__24111 = null;
var G__24112 = (0);
var G__24113 = (0);
seq__23439_24031 = G__24110;
chunk__23440_24032 = G__24111;
count__23441_24033 = G__24112;
i__23442_24034 = G__24113;
continue;
}
} else {
}
}
break;
}


var G__24114 = cljs.core.next(seq__23026_24019__$1);
var G__24115 = null;
var G__24116 = (0);
var G__24117 = (0);
seq__23026_23910 = G__24114;
chunk__23027_23911 = G__24115;
count__23028_23912 = G__24116;
i__23029_23913 = G__24117;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
