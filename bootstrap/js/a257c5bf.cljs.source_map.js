goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__22507){
var vec__22508 = p__22507;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22508,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22508,(1),null);
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
var vec__22511 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22511,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22511,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22511,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22511,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22511,(4),null);
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
var vec__22530 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22530,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22530,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22530,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22530,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22530,(4),null);
var vec__22533 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22533,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22533,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22533,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22533,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22533,(4),null);
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
var map__22536 = segmap;
var map__22536__$1 = (((((!((map__22536 == null))))?(((((map__22536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22536):map__22536);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22536__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22536__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22536__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22536__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22536__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__22539 = arguments.length;
switch (G__22539) {
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
var vec__22557 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__23678 = cljs.core.next(segs__$1);
var G__23679 = nrelseg;
var G__23680 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23678;
relseg__$1 = G__23679;
result__$1 = G__23680;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22557,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22557,(1),null);
var G__23688 = (gline + (1));
var G__23689 = cljs.core.next(lines__$1);
var G__23690 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23691 = result__$1;
gline = G__23688;
lines__$1 = G__23689;
relseg = G__23690;
result = G__23691;
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
var map__22561 = segmap;
var map__22561__$1 = (((((!((map__22561 == null))))?(((((map__22561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22561):map__22561);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22561__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22561__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22561__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22561__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22561__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__22560_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__22560_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__22565 = arguments.length;
switch (G__22565) {
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
var vec__22581 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__23702 = cljs.core.next(segs__$1);
var G__23703 = nrelseg;
var G__23704 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23702;
relseg__$1 = G__23703;
result__$1 = G__23704;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22581,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22581,(1),null);
var G__23708 = (gline + (1));
var G__23709 = cljs.core.next(lines__$1);
var G__23710 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23711 = result__$1;
gline = G__23708;
lines__$1 = G__23709;
relseg = G__23710;
result = G__23711;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__22585){
var vec__22587 = p__22585;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22587,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22587,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22587,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22587,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22587,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__22590){
var vec__22603 = p__22590;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22603,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22603,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22603,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22603,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22603,(4),null);
var seg = vec__22603;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__22608){
var vec__22609 = p__22608;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22609,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22609,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22609,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22609,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22609,(4),null);
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
var seq__22620 = cljs.core.seq(infos);
var chunk__22621 = null;
var count__22622 = (0);
var i__22623 = (0);
while(true){
if((i__22623 < count__22622)){
var info = chunk__22621.cljs$core$IIndexed$_nth$arity$2(null,i__22623);
var segv_23715 = info__GT_segv(info,source_idx,line,col);
var gline_23716 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23717 = cljs.core.count(cljs.core.deref(lines));
if((gline_23716 > (lc_23717 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22620,chunk__22621,count__22622,i__22623,segv_23715,gline_23716,lc_23717,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23716 - (lc_23717 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23715], null));
});})(seq__22620,chunk__22621,count__22622,i__22623,segv_23715,gline_23716,lc_23717,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22620,chunk__22621,count__22622,i__22623,segv_23715,gline_23716,lc_23717,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23716], null),cljs.core.conj,segv_23715);
});})(seq__22620,chunk__22621,count__22622,i__22623,segv_23715,gline_23716,lc_23717,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23718 = seq__22620;
var G__23719 = chunk__22621;
var G__23720 = count__22622;
var G__23721 = (i__22623 + (1));
seq__22620 = G__23718;
chunk__22621 = G__23719;
count__22622 = G__23720;
i__22623 = G__23721;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__22620);
if(temp__5735__auto__){
var seq__22620__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22620__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__22620__$1);
var G__23722 = cljs.core.chunk_rest(seq__22620__$1);
var G__23723 = c__4556__auto__;
var G__23724 = cljs.core.count(c__4556__auto__);
var G__23725 = (0);
seq__22620 = G__23722;
chunk__22621 = G__23723;
count__22622 = G__23724;
i__22623 = G__23725;
continue;
} else {
var info = cljs.core.first(seq__22620__$1);
var segv_23726 = info__GT_segv(info,source_idx,line,col);
var gline_23727 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23728 = cljs.core.count(cljs.core.deref(lines));
if((gline_23727 > (lc_23728 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22620,chunk__22621,count__22622,i__22623,segv_23726,gline_23727,lc_23728,info,seq__22620__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23727 - (lc_23728 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23726], null));
});})(seq__22620,chunk__22621,count__22622,i__22623,segv_23726,gline_23727,lc_23728,info,seq__22620__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22620,chunk__22621,count__22622,i__22623,segv_23726,gline_23727,lc_23728,info,seq__22620__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23727], null),cljs.core.conj,segv_23726);
});})(seq__22620,chunk__22621,count__22622,i__22623,segv_23726,gline_23727,lc_23728,info,seq__22620__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23729 = cljs.core.next(seq__22620__$1);
var G__23730 = null;
var G__23731 = (0);
var G__23732 = (0);
seq__22620 = G__23729;
chunk__22621 = G__23730;
count__22622 = G__23731;
i__22623 = G__23732;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__22633_23733 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__22637_23734 = null;
var count__22638_23735 = (0);
var i__22639_23736 = (0);
while(true){
if((i__22639_23736 < count__22638_23735)){
var vec__22844_23737 = chunk__22637_23734.cljs$core$IIndexed$_nth$arity$2(null,i__22639_23736);
var source_idx_23738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22844_23737,(0),null);
var vec__22847_23739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22844_23737,(1),null);
var __23740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22847_23739,(0),null);
var lines_23741__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22847_23739,(1),null);
var seq__22850_23742 = cljs.core.seq(lines_23741__$1);
var chunk__22851_23743 = null;
var count__22852_23744 = (0);
var i__22853_23745 = (0);
while(true){
if((i__22853_23745 < count__22852_23744)){
var vec__22902_23746 = chunk__22851_23743.cljs$core$IIndexed$_nth$arity$2(null,i__22853_23745);
var line_23747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22902_23746,(0),null);
var cols_23748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22902_23746,(1),null);
var seq__22905_23749 = cljs.core.seq(cols_23748);
var chunk__22906_23750 = null;
var count__22907_23751 = (0);
var i__22908_23752 = (0);
while(true){
if((i__22908_23752 < count__22907_23751)){
var vec__22919_23753 = chunk__22906_23750.cljs$core$IIndexed$_nth$arity$2(null,i__22908_23752);
var col_23754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22919_23753,(0),null);
var infos_23755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22919_23753,(1),null);
encode_cols(infos_23755,source_idx_23738,line_23747,col_23754);


var G__23756 = seq__22905_23749;
var G__23757 = chunk__22906_23750;
var G__23758 = count__22907_23751;
var G__23759 = (i__22908_23752 + (1));
seq__22905_23749 = G__23756;
chunk__22906_23750 = G__23757;
count__22907_23751 = G__23758;
i__22908_23752 = G__23759;
continue;
} else {
var temp__5735__auto___23760 = cljs.core.seq(seq__22905_23749);
if(temp__5735__auto___23760){
var seq__22905_23761__$1 = temp__5735__auto___23760;
if(cljs.core.chunked_seq_QMARK_(seq__22905_23761__$1)){
var c__4556__auto___23762 = cljs.core.chunk_first(seq__22905_23761__$1);
var G__23763 = cljs.core.chunk_rest(seq__22905_23761__$1);
var G__23764 = c__4556__auto___23762;
var G__23765 = cljs.core.count(c__4556__auto___23762);
var G__23766 = (0);
seq__22905_23749 = G__23763;
chunk__22906_23750 = G__23764;
count__22907_23751 = G__23765;
i__22908_23752 = G__23766;
continue;
} else {
var vec__22922_23767 = cljs.core.first(seq__22905_23761__$1);
var col_23768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22922_23767,(0),null);
var infos_23769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22922_23767,(1),null);
encode_cols(infos_23769,source_idx_23738,line_23747,col_23768);


var G__23770 = cljs.core.next(seq__22905_23761__$1);
var G__23771 = null;
var G__23772 = (0);
var G__23773 = (0);
seq__22905_23749 = G__23770;
chunk__22906_23750 = G__23771;
count__22907_23751 = G__23772;
i__22908_23752 = G__23773;
continue;
}
} else {
}
}
break;
}


var G__23777 = seq__22850_23742;
var G__23778 = chunk__22851_23743;
var G__23779 = count__22852_23744;
var G__23780 = (i__22853_23745 + (1));
seq__22850_23742 = G__23777;
chunk__22851_23743 = G__23778;
count__22852_23744 = G__23779;
i__22853_23745 = G__23780;
continue;
} else {
var temp__5735__auto___23781 = cljs.core.seq(seq__22850_23742);
if(temp__5735__auto___23781){
var seq__22850_23782__$1 = temp__5735__auto___23781;
if(cljs.core.chunked_seq_QMARK_(seq__22850_23782__$1)){
var c__4556__auto___23784 = cljs.core.chunk_first(seq__22850_23782__$1);
var G__23786 = cljs.core.chunk_rest(seq__22850_23782__$1);
var G__23787 = c__4556__auto___23784;
var G__23788 = cljs.core.count(c__4556__auto___23784);
var G__23789 = (0);
seq__22850_23742 = G__23786;
chunk__22851_23743 = G__23787;
count__22852_23744 = G__23788;
i__22853_23745 = G__23789;
continue;
} else {
var vec__22925_23791 = cljs.core.first(seq__22850_23782__$1);
var line_23792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22925_23791,(0),null);
var cols_23793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22925_23791,(1),null);
var seq__22928_23794 = cljs.core.seq(cols_23793);
var chunk__22929_23795 = null;
var count__22930_23796 = (0);
var i__22931_23797 = (0);
while(true){
if((i__22931_23797 < count__22930_23796)){
var vec__22938_23798 = chunk__22929_23795.cljs$core$IIndexed$_nth$arity$2(null,i__22931_23797);
var col_23799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22938_23798,(0),null);
var infos_23800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22938_23798,(1),null);
encode_cols(infos_23800,source_idx_23738,line_23792,col_23799);


var G__23801 = seq__22928_23794;
var G__23802 = chunk__22929_23795;
var G__23803 = count__22930_23796;
var G__23804 = (i__22931_23797 + (1));
seq__22928_23794 = G__23801;
chunk__22929_23795 = G__23802;
count__22930_23796 = G__23803;
i__22931_23797 = G__23804;
continue;
} else {
var temp__5735__auto___23805__$1 = cljs.core.seq(seq__22928_23794);
if(temp__5735__auto___23805__$1){
var seq__22928_23806__$1 = temp__5735__auto___23805__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22928_23806__$1)){
var c__4556__auto___23807 = cljs.core.chunk_first(seq__22928_23806__$1);
var G__23808 = cljs.core.chunk_rest(seq__22928_23806__$1);
var G__23809 = c__4556__auto___23807;
var G__23810 = cljs.core.count(c__4556__auto___23807);
var G__23811 = (0);
seq__22928_23794 = G__23808;
chunk__22929_23795 = G__23809;
count__22930_23796 = G__23810;
i__22931_23797 = G__23811;
continue;
} else {
var vec__22941_23812 = cljs.core.first(seq__22928_23806__$1);
var col_23813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22941_23812,(0),null);
var infos_23814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22941_23812,(1),null);
encode_cols(infos_23814,source_idx_23738,line_23792,col_23813);


var G__23815 = cljs.core.next(seq__22928_23806__$1);
var G__23816 = null;
var G__23817 = (0);
var G__23818 = (0);
seq__22928_23794 = G__23815;
chunk__22929_23795 = G__23816;
count__22930_23796 = G__23817;
i__22931_23797 = G__23818;
continue;
}
} else {
}
}
break;
}


var G__23819 = cljs.core.next(seq__22850_23782__$1);
var G__23820 = null;
var G__23821 = (0);
var G__23822 = (0);
seq__22850_23742 = G__23819;
chunk__22851_23743 = G__23820;
count__22852_23744 = G__23821;
i__22853_23745 = G__23822;
continue;
}
} else {
}
}
break;
}


var G__23823 = seq__22633_23733;
var G__23824 = chunk__22637_23734;
var G__23825 = count__22638_23735;
var G__23826 = (i__22639_23736 + (1));
seq__22633_23733 = G__23823;
chunk__22637_23734 = G__23824;
count__22638_23735 = G__23825;
i__22639_23736 = G__23826;
continue;
} else {
var temp__5735__auto___23827 = cljs.core.seq(seq__22633_23733);
if(temp__5735__auto___23827){
var seq__22633_23828__$1 = temp__5735__auto___23827;
if(cljs.core.chunked_seq_QMARK_(seq__22633_23828__$1)){
var c__4556__auto___23829 = cljs.core.chunk_first(seq__22633_23828__$1);
var G__23830 = cljs.core.chunk_rest(seq__22633_23828__$1);
var G__23831 = c__4556__auto___23829;
var G__23832 = cljs.core.count(c__4556__auto___23829);
var G__23833 = (0);
seq__22633_23733 = G__23830;
chunk__22637_23734 = G__23831;
count__22638_23735 = G__23832;
i__22639_23736 = G__23833;
continue;
} else {
var vec__22944_23834 = cljs.core.first(seq__22633_23828__$1);
var source_idx_23835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22944_23834,(0),null);
var vec__22947_23836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22944_23834,(1),null);
var __23837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22947_23836,(0),null);
var lines_23838__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22947_23836,(1),null);
var seq__22950_23839 = cljs.core.seq(lines_23838__$1);
var chunk__22951_23840 = null;
var count__22952_23841 = (0);
var i__22953_23842 = (0);
while(true){
if((i__22953_23842 < count__22952_23841)){
var vec__23004_23843 = chunk__22951_23840.cljs$core$IIndexed$_nth$arity$2(null,i__22953_23842);
var line_23844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23004_23843,(0),null);
var cols_23845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23004_23843,(1),null);
var seq__23007_23846 = cljs.core.seq(cols_23845);
var chunk__23008_23847 = null;
var count__23009_23848 = (0);
var i__23010_23849 = (0);
while(true){
if((i__23010_23849 < count__23009_23848)){
var vec__23019_23850 = chunk__23008_23847.cljs$core$IIndexed$_nth$arity$2(null,i__23010_23849);
var col_23851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23019_23850,(0),null);
var infos_23852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23019_23850,(1),null);
encode_cols(infos_23852,source_idx_23835,line_23844,col_23851);


var G__23853 = seq__23007_23846;
var G__23854 = chunk__23008_23847;
var G__23855 = count__23009_23848;
var G__23856 = (i__23010_23849 + (1));
seq__23007_23846 = G__23853;
chunk__23008_23847 = G__23854;
count__23009_23848 = G__23855;
i__23010_23849 = G__23856;
continue;
} else {
var temp__5735__auto___23857__$1 = cljs.core.seq(seq__23007_23846);
if(temp__5735__auto___23857__$1){
var seq__23007_23858__$1 = temp__5735__auto___23857__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23007_23858__$1)){
var c__4556__auto___23859 = cljs.core.chunk_first(seq__23007_23858__$1);
var G__23860 = cljs.core.chunk_rest(seq__23007_23858__$1);
var G__23861 = c__4556__auto___23859;
var G__23862 = cljs.core.count(c__4556__auto___23859);
var G__23863 = (0);
seq__23007_23846 = G__23860;
chunk__23008_23847 = G__23861;
count__23009_23848 = G__23862;
i__23010_23849 = G__23863;
continue;
} else {
var vec__23022_23864 = cljs.core.first(seq__23007_23858__$1);
var col_23865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23022_23864,(0),null);
var infos_23866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23022_23864,(1),null);
encode_cols(infos_23866,source_idx_23835,line_23844,col_23865);


var G__23867 = cljs.core.next(seq__23007_23858__$1);
var G__23868 = null;
var G__23869 = (0);
var G__23870 = (0);
seq__23007_23846 = G__23867;
chunk__23008_23847 = G__23868;
count__23009_23848 = G__23869;
i__23010_23849 = G__23870;
continue;
}
} else {
}
}
break;
}


var G__23871 = seq__22950_23839;
var G__23872 = chunk__22951_23840;
var G__23873 = count__22952_23841;
var G__23874 = (i__22953_23842 + (1));
seq__22950_23839 = G__23871;
chunk__22951_23840 = G__23872;
count__22952_23841 = G__23873;
i__22953_23842 = G__23874;
continue;
} else {
var temp__5735__auto___23875__$1 = cljs.core.seq(seq__22950_23839);
if(temp__5735__auto___23875__$1){
var seq__22950_23876__$1 = temp__5735__auto___23875__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22950_23876__$1)){
var c__4556__auto___23877 = cljs.core.chunk_first(seq__22950_23876__$1);
var G__23878 = cljs.core.chunk_rest(seq__22950_23876__$1);
var G__23879 = c__4556__auto___23877;
var G__23880 = cljs.core.count(c__4556__auto___23877);
var G__23881 = (0);
seq__22950_23839 = G__23878;
chunk__22951_23840 = G__23879;
count__22952_23841 = G__23880;
i__22953_23842 = G__23881;
continue;
} else {
var vec__23032_23882 = cljs.core.first(seq__22950_23876__$1);
var line_23883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23032_23882,(0),null);
var cols_23884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23032_23882,(1),null);
var seq__23037_23885 = cljs.core.seq(cols_23884);
var chunk__23038_23886 = null;
var count__23039_23887 = (0);
var i__23040_23888 = (0);
while(true){
if((i__23040_23888 < count__23039_23887)){
var vec__23071_23889 = chunk__23038_23886.cljs$core$IIndexed$_nth$arity$2(null,i__23040_23888);
var col_23890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23071_23889,(0),null);
var infos_23891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23071_23889,(1),null);
encode_cols(infos_23891,source_idx_23835,line_23883,col_23890);


var G__23892 = seq__23037_23885;
var G__23893 = chunk__23038_23886;
var G__23894 = count__23039_23887;
var G__23895 = (i__23040_23888 + (1));
seq__23037_23885 = G__23892;
chunk__23038_23886 = G__23893;
count__23039_23887 = G__23894;
i__23040_23888 = G__23895;
continue;
} else {
var temp__5735__auto___23896__$2 = cljs.core.seq(seq__23037_23885);
if(temp__5735__auto___23896__$2){
var seq__23037_23897__$1 = temp__5735__auto___23896__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23037_23897__$1)){
var c__4556__auto___23898 = cljs.core.chunk_first(seq__23037_23897__$1);
var G__23899 = cljs.core.chunk_rest(seq__23037_23897__$1);
var G__23900 = c__4556__auto___23898;
var G__23901 = cljs.core.count(c__4556__auto___23898);
var G__23902 = (0);
seq__23037_23885 = G__23899;
chunk__23038_23886 = G__23900;
count__23039_23887 = G__23901;
i__23040_23888 = G__23902;
continue;
} else {
var vec__23075_23903 = cljs.core.first(seq__23037_23897__$1);
var col_23904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23075_23903,(0),null);
var infos_23905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23075_23903,(1),null);
encode_cols(infos_23905,source_idx_23835,line_23883,col_23904);


var G__23906 = cljs.core.next(seq__23037_23897__$1);
var G__23907 = null;
var G__23908 = (0);
var G__23909 = (0);
seq__23037_23885 = G__23906;
chunk__23038_23886 = G__23907;
count__23039_23887 = G__23908;
i__23040_23888 = G__23909;
continue;
}
} else {
}
}
break;
}


var G__23910 = cljs.core.next(seq__22950_23876__$1);
var G__23911 = null;
var G__23912 = (0);
var G__23913 = (0);
seq__22950_23839 = G__23910;
chunk__22951_23840 = G__23911;
count__22952_23841 = G__23912;
i__22953_23842 = G__23913;
continue;
}
} else {
}
}
break;
}


var G__23914 = cljs.core.next(seq__22633_23828__$1);
var G__23915 = null;
var G__23916 = (0);
var G__23917 = (0);
seq__22633_23733 = G__23914;
chunk__22637_23734 = G__23915;
count__22638_23735 = G__23916;
i__22639_23736 = G__23917;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__23078 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__22613_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22613_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__22614_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__22614_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22615_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__22615_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__23081 = G__23078;
goog.object.set(G__23081,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__23081;
} else {
return G__23078;
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
var vec__23090 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23090,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23090,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__23093 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23093,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23093,(1),null);
var G__23923 = cljs.core.next(col_map_seq);
var G__23924 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__23093,col,infos,vec__23090,line,col_map){
return (function (v,p__23096){
var map__23097 = p__23096;
var map__23097__$1 = (((((!((map__23097 == null))))?(((((map__23097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23097):map__23097);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23097__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23097__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__23093,col,infos,vec__23090,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__23923;
new_cols = G__23924;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__23925 = cljs.core.next(line_map_seq);
var G__23926 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__23925;
new_lines = G__23926;
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
var seq__23099_23927 = cljs.core.seq(reverse_map);
var chunk__23100_23928 = null;
var count__23101_23929 = (0);
var i__23102_23930 = (0);
while(true){
if((i__23102_23930 < count__23101_23929)){
var vec__23364_23931 = chunk__23100_23928.cljs$core$IIndexed$_nth$arity$2(null,i__23102_23930);
var line_23932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23364_23931,(0),null);
var columns_23933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23364_23931,(1),null);
var seq__23368_23934 = cljs.core.seq(columns_23933);
var chunk__23369_23935 = null;
var count__23370_23936 = (0);
var i__23371_23937 = (0);
while(true){
if((i__23371_23937 < count__23370_23936)){
var vec__23468_23938 = chunk__23369_23935.cljs$core$IIndexed$_nth$arity$2(null,i__23371_23937);
var column_23939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23468_23938,(0),null);
var column_info_23940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23468_23938,(1),null);
var seq__23471_23941 = cljs.core.seq(column_info_23940);
var chunk__23472_23942 = null;
var count__23473_23943 = (0);
var i__23474_23944 = (0);
while(true){
if((i__23474_23944 < count__23473_23943)){
var map__23491_23945 = chunk__23472_23942.cljs$core$IIndexed$_nth$arity$2(null,i__23474_23944);
var map__23491_23946__$1 = (((((!((map__23491_23945 == null))))?(((((map__23491_23945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23491_23945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23491_23945):map__23491_23945);
var gline_23947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23491_23946__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23491_23946__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23491_23946__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23947], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23471_23941,chunk__23472_23942,count__23473_23943,i__23474_23944,seq__23368_23934,chunk__23369_23935,count__23370_23936,i__23371_23937,seq__23099_23927,chunk__23100_23928,count__23101_23929,i__23102_23930,map__23491_23945,map__23491_23946__$1,gline_23947,gcol_23948,name_23949,vec__23468_23938,column_23939,column_info_23940,vec__23364_23931,line_23932,columns_23933,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23948], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23932,new cljs.core.Keyword(null,"col","col",-1959363084),column_23939,new cljs.core.Keyword(null,"name","name",1843675177),name_23949], null));
});})(seq__23471_23941,chunk__23472_23942,count__23473_23943,i__23474_23944,seq__23368_23934,chunk__23369_23935,count__23370_23936,i__23371_23937,seq__23099_23927,chunk__23100_23928,count__23101_23929,i__23102_23930,map__23491_23945,map__23491_23946__$1,gline_23947,gcol_23948,name_23949,vec__23468_23938,column_23939,column_info_23940,vec__23364_23931,line_23932,columns_23933,inverted))
,cljs.core.sorted_map()));


var G__23950 = seq__23471_23941;
var G__23951 = chunk__23472_23942;
var G__23952 = count__23473_23943;
var G__23953 = (i__23474_23944 + (1));
seq__23471_23941 = G__23950;
chunk__23472_23942 = G__23951;
count__23473_23943 = G__23952;
i__23474_23944 = G__23953;
continue;
} else {
var temp__5735__auto___23954 = cljs.core.seq(seq__23471_23941);
if(temp__5735__auto___23954){
var seq__23471_23955__$1 = temp__5735__auto___23954;
if(cljs.core.chunked_seq_QMARK_(seq__23471_23955__$1)){
var c__4556__auto___23956 = cljs.core.chunk_first(seq__23471_23955__$1);
var G__23957 = cljs.core.chunk_rest(seq__23471_23955__$1);
var G__23958 = c__4556__auto___23956;
var G__23959 = cljs.core.count(c__4556__auto___23956);
var G__23960 = (0);
seq__23471_23941 = G__23957;
chunk__23472_23942 = G__23958;
count__23473_23943 = G__23959;
i__23474_23944 = G__23960;
continue;
} else {
var map__23495_23961 = cljs.core.first(seq__23471_23955__$1);
var map__23495_23962__$1 = (((((!((map__23495_23961 == null))))?(((((map__23495_23961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23495_23961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23495_23961):map__23495_23961);
var gline_23963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23495_23962__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23495_23962__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23495_23962__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23963], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23471_23941,chunk__23472_23942,count__23473_23943,i__23474_23944,seq__23368_23934,chunk__23369_23935,count__23370_23936,i__23371_23937,seq__23099_23927,chunk__23100_23928,count__23101_23929,i__23102_23930,map__23495_23961,map__23495_23962__$1,gline_23963,gcol_23964,name_23965,seq__23471_23955__$1,temp__5735__auto___23954,vec__23468_23938,column_23939,column_info_23940,vec__23364_23931,line_23932,columns_23933,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23964], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23932,new cljs.core.Keyword(null,"col","col",-1959363084),column_23939,new cljs.core.Keyword(null,"name","name",1843675177),name_23965], null));
});})(seq__23471_23941,chunk__23472_23942,count__23473_23943,i__23474_23944,seq__23368_23934,chunk__23369_23935,count__23370_23936,i__23371_23937,seq__23099_23927,chunk__23100_23928,count__23101_23929,i__23102_23930,map__23495_23961,map__23495_23962__$1,gline_23963,gcol_23964,name_23965,seq__23471_23955__$1,temp__5735__auto___23954,vec__23468_23938,column_23939,column_info_23940,vec__23364_23931,line_23932,columns_23933,inverted))
,cljs.core.sorted_map()));


var G__23966 = cljs.core.next(seq__23471_23955__$1);
var G__23967 = null;
var G__23968 = (0);
var G__23969 = (0);
seq__23471_23941 = G__23966;
chunk__23472_23942 = G__23967;
count__23473_23943 = G__23968;
i__23474_23944 = G__23969;
continue;
}
} else {
}
}
break;
}


var G__23970 = seq__23368_23934;
var G__23971 = chunk__23369_23935;
var G__23972 = count__23370_23936;
var G__23973 = (i__23371_23937 + (1));
seq__23368_23934 = G__23970;
chunk__23369_23935 = G__23971;
count__23370_23936 = G__23972;
i__23371_23937 = G__23973;
continue;
} else {
var temp__5735__auto___23974 = cljs.core.seq(seq__23368_23934);
if(temp__5735__auto___23974){
var seq__23368_23975__$1 = temp__5735__auto___23974;
if(cljs.core.chunked_seq_QMARK_(seq__23368_23975__$1)){
var c__4556__auto___23976 = cljs.core.chunk_first(seq__23368_23975__$1);
var G__23977 = cljs.core.chunk_rest(seq__23368_23975__$1);
var G__23978 = c__4556__auto___23976;
var G__23979 = cljs.core.count(c__4556__auto___23976);
var G__23980 = (0);
seq__23368_23934 = G__23977;
chunk__23369_23935 = G__23978;
count__23370_23936 = G__23979;
i__23371_23937 = G__23980;
continue;
} else {
var vec__23499_23981 = cljs.core.first(seq__23368_23975__$1);
var column_23982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23499_23981,(0),null);
var column_info_23983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23499_23981,(1),null);
var seq__23505_23984 = cljs.core.seq(column_info_23983);
var chunk__23506_23985 = null;
var count__23507_23986 = (0);
var i__23508_23987 = (0);
while(true){
if((i__23508_23987 < count__23507_23986)){
var map__23531_23988 = chunk__23506_23985.cljs$core$IIndexed$_nth$arity$2(null,i__23508_23987);
var map__23531_23989__$1 = (((((!((map__23531_23988 == null))))?(((((map__23531_23988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23531_23988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23531_23988):map__23531_23988);
var gline_23990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23531_23989__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23531_23989__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23531_23989__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23990], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23505_23984,chunk__23506_23985,count__23507_23986,i__23508_23987,seq__23368_23934,chunk__23369_23935,count__23370_23936,i__23371_23937,seq__23099_23927,chunk__23100_23928,count__23101_23929,i__23102_23930,map__23531_23988,map__23531_23989__$1,gline_23990,gcol_23991,name_23992,vec__23499_23981,column_23982,column_info_23983,seq__23368_23975__$1,temp__5735__auto___23974,vec__23364_23931,line_23932,columns_23933,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23991], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23932,new cljs.core.Keyword(null,"col","col",-1959363084),column_23982,new cljs.core.Keyword(null,"name","name",1843675177),name_23992], null));
});})(seq__23505_23984,chunk__23506_23985,count__23507_23986,i__23508_23987,seq__23368_23934,chunk__23369_23935,count__23370_23936,i__23371_23937,seq__23099_23927,chunk__23100_23928,count__23101_23929,i__23102_23930,map__23531_23988,map__23531_23989__$1,gline_23990,gcol_23991,name_23992,vec__23499_23981,column_23982,column_info_23983,seq__23368_23975__$1,temp__5735__auto___23974,vec__23364_23931,line_23932,columns_23933,inverted))
,cljs.core.sorted_map()));


var G__23993 = seq__23505_23984;
var G__23994 = chunk__23506_23985;
var G__23995 = count__23507_23986;
var G__23996 = (i__23508_23987 + (1));
seq__23505_23984 = G__23993;
chunk__23506_23985 = G__23994;
count__23507_23986 = G__23995;
i__23508_23987 = G__23996;
continue;
} else {
var temp__5735__auto___23997__$1 = cljs.core.seq(seq__23505_23984);
if(temp__5735__auto___23997__$1){
var seq__23505_23998__$1 = temp__5735__auto___23997__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23505_23998__$1)){
var c__4556__auto___23999 = cljs.core.chunk_first(seq__23505_23998__$1);
var G__24000 = cljs.core.chunk_rest(seq__23505_23998__$1);
var G__24001 = c__4556__auto___23999;
var G__24002 = cljs.core.count(c__4556__auto___23999);
var G__24003 = (0);
seq__23505_23984 = G__24000;
chunk__23506_23985 = G__24001;
count__23507_23986 = G__24002;
i__23508_23987 = G__24003;
continue;
} else {
var map__23537_24004 = cljs.core.first(seq__23505_23998__$1);
var map__23537_24005__$1 = (((((!((map__23537_24004 == null))))?(((((map__23537_24004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23537_24004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23537_24004):map__23537_24004);
var gline_24006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23537_24005__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23537_24005__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23537_24005__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24006], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23505_23984,chunk__23506_23985,count__23507_23986,i__23508_23987,seq__23368_23934,chunk__23369_23935,count__23370_23936,i__23371_23937,seq__23099_23927,chunk__23100_23928,count__23101_23929,i__23102_23930,map__23537_24004,map__23537_24005__$1,gline_24006,gcol_24007,name_24008,seq__23505_23998__$1,temp__5735__auto___23997__$1,vec__23499_23981,column_23982,column_info_23983,seq__23368_23975__$1,temp__5735__auto___23974,vec__23364_23931,line_23932,columns_23933,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24007], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23932,new cljs.core.Keyword(null,"col","col",-1959363084),column_23982,new cljs.core.Keyword(null,"name","name",1843675177),name_24008], null));
});})(seq__23505_23984,chunk__23506_23985,count__23507_23986,i__23508_23987,seq__23368_23934,chunk__23369_23935,count__23370_23936,i__23371_23937,seq__23099_23927,chunk__23100_23928,count__23101_23929,i__23102_23930,map__23537_24004,map__23537_24005__$1,gline_24006,gcol_24007,name_24008,seq__23505_23998__$1,temp__5735__auto___23997__$1,vec__23499_23981,column_23982,column_info_23983,seq__23368_23975__$1,temp__5735__auto___23974,vec__23364_23931,line_23932,columns_23933,inverted))
,cljs.core.sorted_map()));


var G__24009 = cljs.core.next(seq__23505_23998__$1);
var G__24010 = null;
var G__24011 = (0);
var G__24012 = (0);
seq__23505_23984 = G__24009;
chunk__23506_23985 = G__24010;
count__23507_23986 = G__24011;
i__23508_23987 = G__24012;
continue;
}
} else {
}
}
break;
}


var G__24013 = cljs.core.next(seq__23368_23975__$1);
var G__24014 = null;
var G__24015 = (0);
var G__24016 = (0);
seq__23368_23934 = G__24013;
chunk__23369_23935 = G__24014;
count__23370_23936 = G__24015;
i__23371_23937 = G__24016;
continue;
}
} else {
}
}
break;
}


var G__24017 = seq__23099_23927;
var G__24018 = chunk__23100_23928;
var G__24019 = count__23101_23929;
var G__24020 = (i__23102_23930 + (1));
seq__23099_23927 = G__24017;
chunk__23100_23928 = G__24018;
count__23101_23929 = G__24019;
i__23102_23930 = G__24020;
continue;
} else {
var temp__5735__auto___24021 = cljs.core.seq(seq__23099_23927);
if(temp__5735__auto___24021){
var seq__23099_24022__$1 = temp__5735__auto___24021;
if(cljs.core.chunked_seq_QMARK_(seq__23099_24022__$1)){
var c__4556__auto___24023 = cljs.core.chunk_first(seq__23099_24022__$1);
var G__24024 = cljs.core.chunk_rest(seq__23099_24022__$1);
var G__24025 = c__4556__auto___24023;
var G__24026 = cljs.core.count(c__4556__auto___24023);
var G__24027 = (0);
seq__23099_23927 = G__24024;
chunk__23100_23928 = G__24025;
count__23101_23929 = G__24026;
i__23102_23930 = G__24027;
continue;
} else {
var vec__23553_24028 = cljs.core.first(seq__23099_24022__$1);
var line_24029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23553_24028,(0),null);
var columns_24030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23553_24028,(1),null);
var seq__23556_24031 = cljs.core.seq(columns_24030);
var chunk__23557_24032 = null;
var count__23558_24033 = (0);
var i__23559_24034 = (0);
while(true){
if((i__23559_24034 < count__23558_24033)){
var vec__23609_24040 = chunk__23557_24032.cljs$core$IIndexed$_nth$arity$2(null,i__23559_24034);
var column_24041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23609_24040,(0),null);
var column_info_24042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23609_24040,(1),null);
var seq__23612_24043 = cljs.core.seq(column_info_24042);
var chunk__23613_24044 = null;
var count__23614_24045 = (0);
var i__23615_24046 = (0);
while(true){
if((i__23615_24046 < count__23614_24045)){
var map__23636_24047 = chunk__23613_24044.cljs$core$IIndexed$_nth$arity$2(null,i__23615_24046);
var map__23636_24048__$1 = (((((!((map__23636_24047 == null))))?(((((map__23636_24047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23636_24047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23636_24047):map__23636_24047);
var gline_24049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23636_24048__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23636_24048__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24051 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23636_24048__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24049], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23612_24043,chunk__23613_24044,count__23614_24045,i__23615_24046,seq__23556_24031,chunk__23557_24032,count__23558_24033,i__23559_24034,seq__23099_23927,chunk__23100_23928,count__23101_23929,i__23102_23930,map__23636_24047,map__23636_24048__$1,gline_24049,gcol_24050,name_24051,vec__23609_24040,column_24041,column_info_24042,vec__23553_24028,line_24029,columns_24030,seq__23099_24022__$1,temp__5735__auto___24021,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24050], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24029,new cljs.core.Keyword(null,"col","col",-1959363084),column_24041,new cljs.core.Keyword(null,"name","name",1843675177),name_24051], null));
});})(seq__23612_24043,chunk__23613_24044,count__23614_24045,i__23615_24046,seq__23556_24031,chunk__23557_24032,count__23558_24033,i__23559_24034,seq__23099_23927,chunk__23100_23928,count__23101_23929,i__23102_23930,map__23636_24047,map__23636_24048__$1,gline_24049,gcol_24050,name_24051,vec__23609_24040,column_24041,column_info_24042,vec__23553_24028,line_24029,columns_24030,seq__23099_24022__$1,temp__5735__auto___24021,inverted))
,cljs.core.sorted_map()));


var G__24063 = seq__23612_24043;
var G__24064 = chunk__23613_24044;
var G__24065 = count__23614_24045;
var G__24066 = (i__23615_24046 + (1));
seq__23612_24043 = G__24063;
chunk__23613_24044 = G__24064;
count__23614_24045 = G__24065;
i__23615_24046 = G__24066;
continue;
} else {
var temp__5735__auto___24067__$1 = cljs.core.seq(seq__23612_24043);
if(temp__5735__auto___24067__$1){
var seq__23612_24068__$1 = temp__5735__auto___24067__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23612_24068__$1)){
var c__4556__auto___24069 = cljs.core.chunk_first(seq__23612_24068__$1);
var G__24070 = cljs.core.chunk_rest(seq__23612_24068__$1);
var G__24071 = c__4556__auto___24069;
var G__24072 = cljs.core.count(c__4556__auto___24069);
var G__24073 = (0);
seq__23612_24043 = G__24070;
chunk__23613_24044 = G__24071;
count__23614_24045 = G__24072;
i__23615_24046 = G__24073;
continue;
} else {
var map__23638_24074 = cljs.core.first(seq__23612_24068__$1);
var map__23638_24075__$1 = (((((!((map__23638_24074 == null))))?(((((map__23638_24074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23638_24074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23638_24074):map__23638_24074);
var gline_24076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23638_24075__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23638_24075__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23638_24075__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24076], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23612_24043,chunk__23613_24044,count__23614_24045,i__23615_24046,seq__23556_24031,chunk__23557_24032,count__23558_24033,i__23559_24034,seq__23099_23927,chunk__23100_23928,count__23101_23929,i__23102_23930,map__23638_24074,map__23638_24075__$1,gline_24076,gcol_24077,name_24078,seq__23612_24068__$1,temp__5735__auto___24067__$1,vec__23609_24040,column_24041,column_info_24042,vec__23553_24028,line_24029,columns_24030,seq__23099_24022__$1,temp__5735__auto___24021,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24077], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24029,new cljs.core.Keyword(null,"col","col",-1959363084),column_24041,new cljs.core.Keyword(null,"name","name",1843675177),name_24078], null));
});})(seq__23612_24043,chunk__23613_24044,count__23614_24045,i__23615_24046,seq__23556_24031,chunk__23557_24032,count__23558_24033,i__23559_24034,seq__23099_23927,chunk__23100_23928,count__23101_23929,i__23102_23930,map__23638_24074,map__23638_24075__$1,gline_24076,gcol_24077,name_24078,seq__23612_24068__$1,temp__5735__auto___24067__$1,vec__23609_24040,column_24041,column_info_24042,vec__23553_24028,line_24029,columns_24030,seq__23099_24022__$1,temp__5735__auto___24021,inverted))
,cljs.core.sorted_map()));


var G__24080 = cljs.core.next(seq__23612_24068__$1);
var G__24081 = null;
var G__24082 = (0);
var G__24083 = (0);
seq__23612_24043 = G__24080;
chunk__23613_24044 = G__24081;
count__23614_24045 = G__24082;
i__23615_24046 = G__24083;
continue;
}
} else {
}
}
break;
}


var G__24084 = seq__23556_24031;
var G__24085 = chunk__23557_24032;
var G__24086 = count__23558_24033;
var G__24087 = (i__23559_24034 + (1));
seq__23556_24031 = G__24084;
chunk__23557_24032 = G__24085;
count__23558_24033 = G__24086;
i__23559_24034 = G__24087;
continue;
} else {
var temp__5735__auto___24088__$1 = cljs.core.seq(seq__23556_24031);
if(temp__5735__auto___24088__$1){
var seq__23556_24089__$1 = temp__5735__auto___24088__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23556_24089__$1)){
var c__4556__auto___24090 = cljs.core.chunk_first(seq__23556_24089__$1);
var G__24091 = cljs.core.chunk_rest(seq__23556_24089__$1);
var G__24092 = c__4556__auto___24090;
var G__24093 = cljs.core.count(c__4556__auto___24090);
var G__24094 = (0);
seq__23556_24031 = G__24091;
chunk__23557_24032 = G__24092;
count__23558_24033 = G__24093;
i__23559_24034 = G__24094;
continue;
} else {
var vec__23640_24095 = cljs.core.first(seq__23556_24089__$1);
var column_24096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23640_24095,(0),null);
var column_info_24097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23640_24095,(1),null);
var seq__23643_24098 = cljs.core.seq(column_info_24097);
var chunk__23644_24099 = null;
var count__23645_24100 = (0);
var i__23646_24101 = (0);
while(true){
if((i__23646_24101 < count__23645_24100)){
var map__23673_24103 = chunk__23644_24099.cljs$core$IIndexed$_nth$arity$2(null,i__23646_24101);
var map__23673_24104__$1 = (((((!((map__23673_24103 == null))))?(((((map__23673_24103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23673_24103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23673_24103):map__23673_24103);
var gline_24105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23673_24104__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23673_24104__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23673_24104__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24105], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23643_24098,chunk__23644_24099,count__23645_24100,i__23646_24101,seq__23556_24031,chunk__23557_24032,count__23558_24033,i__23559_24034,seq__23099_23927,chunk__23100_23928,count__23101_23929,i__23102_23930,map__23673_24103,map__23673_24104__$1,gline_24105,gcol_24106,name_24107,vec__23640_24095,column_24096,column_info_24097,seq__23556_24089__$1,temp__5735__auto___24088__$1,vec__23553_24028,line_24029,columns_24030,seq__23099_24022__$1,temp__5735__auto___24021,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24106], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24029,new cljs.core.Keyword(null,"col","col",-1959363084),column_24096,new cljs.core.Keyword(null,"name","name",1843675177),name_24107], null));
});})(seq__23643_24098,chunk__23644_24099,count__23645_24100,i__23646_24101,seq__23556_24031,chunk__23557_24032,count__23558_24033,i__23559_24034,seq__23099_23927,chunk__23100_23928,count__23101_23929,i__23102_23930,map__23673_24103,map__23673_24104__$1,gline_24105,gcol_24106,name_24107,vec__23640_24095,column_24096,column_info_24097,seq__23556_24089__$1,temp__5735__auto___24088__$1,vec__23553_24028,line_24029,columns_24030,seq__23099_24022__$1,temp__5735__auto___24021,inverted))
,cljs.core.sorted_map()));


var G__24130 = seq__23643_24098;
var G__24131 = chunk__23644_24099;
var G__24132 = count__23645_24100;
var G__24133 = (i__23646_24101 + (1));
seq__23643_24098 = G__24130;
chunk__23644_24099 = G__24131;
count__23645_24100 = G__24132;
i__23646_24101 = G__24133;
continue;
} else {
var temp__5735__auto___24134__$2 = cljs.core.seq(seq__23643_24098);
if(temp__5735__auto___24134__$2){
var seq__23643_24135__$1 = temp__5735__auto___24134__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23643_24135__$1)){
var c__4556__auto___24136 = cljs.core.chunk_first(seq__23643_24135__$1);
var G__24137 = cljs.core.chunk_rest(seq__23643_24135__$1);
var G__24138 = c__4556__auto___24136;
var G__24139 = cljs.core.count(c__4556__auto___24136);
var G__24140 = (0);
seq__23643_24098 = G__24137;
chunk__23644_24099 = G__24138;
count__23645_24100 = G__24139;
i__23646_24101 = G__24140;
continue;
} else {
var map__23675_24141 = cljs.core.first(seq__23643_24135__$1);
var map__23675_24142__$1 = (((((!((map__23675_24141 == null))))?(((((map__23675_24141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23675_24141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23675_24141):map__23675_24141);
var gline_24143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23675_24142__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23675_24142__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23675_24142__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24143], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23643_24098,chunk__23644_24099,count__23645_24100,i__23646_24101,seq__23556_24031,chunk__23557_24032,count__23558_24033,i__23559_24034,seq__23099_23927,chunk__23100_23928,count__23101_23929,i__23102_23930,map__23675_24141,map__23675_24142__$1,gline_24143,gcol_24144,name_24145,seq__23643_24135__$1,temp__5735__auto___24134__$2,vec__23640_24095,column_24096,column_info_24097,seq__23556_24089__$1,temp__5735__auto___24088__$1,vec__23553_24028,line_24029,columns_24030,seq__23099_24022__$1,temp__5735__auto___24021,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24144], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24029,new cljs.core.Keyword(null,"col","col",-1959363084),column_24096,new cljs.core.Keyword(null,"name","name",1843675177),name_24145], null));
});})(seq__23643_24098,chunk__23644_24099,count__23645_24100,i__23646_24101,seq__23556_24031,chunk__23557_24032,count__23558_24033,i__23559_24034,seq__23099_23927,chunk__23100_23928,count__23101_23929,i__23102_23930,map__23675_24141,map__23675_24142__$1,gline_24143,gcol_24144,name_24145,seq__23643_24135__$1,temp__5735__auto___24134__$2,vec__23640_24095,column_24096,column_info_24097,seq__23556_24089__$1,temp__5735__auto___24088__$1,vec__23553_24028,line_24029,columns_24030,seq__23099_24022__$1,temp__5735__auto___24021,inverted))
,cljs.core.sorted_map()));


var G__24153 = cljs.core.next(seq__23643_24135__$1);
var G__24154 = null;
var G__24155 = (0);
var G__24156 = (0);
seq__23643_24098 = G__24153;
chunk__23644_24099 = G__24154;
count__23645_24100 = G__24155;
i__23646_24101 = G__24156;
continue;
}
} else {
}
}
break;
}


var G__24157 = cljs.core.next(seq__23556_24089__$1);
var G__24158 = null;
var G__24159 = (0);
var G__24160 = (0);
seq__23556_24031 = G__24157;
chunk__23557_24032 = G__24158;
count__23558_24033 = G__24159;
i__23559_24034 = G__24160;
continue;
}
} else {
}
}
break;
}


var G__24161 = cljs.core.next(seq__23099_24022__$1);
var G__24162 = null;
var G__24163 = (0);
var G__24164 = (0);
seq__23099_23927 = G__24161;
chunk__23100_23928 = G__24162;
count__23101_23929 = G__24163;
i__23102_23930 = G__24164;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
