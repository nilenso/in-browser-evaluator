goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__22522){
var vec__22524 = p__22522;
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
var vec__22531 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22531,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22531,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22531,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22531,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22531,(4),null);
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
var vec__22551 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22551,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22551,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22551,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22551,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22551,(4),null);
var vec__22554 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22554,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22554,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22554,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22554,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22554,(4),null);
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
var map__22563 = segmap;
var map__22563__$1 = (((((!((map__22563 == null))))?(((((map__22563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22563):map__22563);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22563__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22563__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22563__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22563__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22563__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__22566 = arguments.length;
switch (G__22566) {
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
var vec__22576 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
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
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22576,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22576,(1),null);
var G__23453 = (gline + (1));
var G__23454 = cljs.core.next(lines__$1);
var G__23455 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23456 = result__$1;
gline = G__23453;
lines__$1 = G__23454;
relseg = G__23455;
result = G__23456;
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
var map__22580 = segmap;
var map__22580__$1 = (((((!((map__22580 == null))))?(((((map__22580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22580):map__22580);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22580__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22580__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22580__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22580__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22580__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__22579_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__22579_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__22583 = arguments.length;
switch (G__22583) {
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
var vec__22598 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__23469 = cljs.core.next(segs__$1);
var G__23470 = nrelseg;
var G__23471 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23469;
relseg__$1 = G__23470;
result__$1 = G__23471;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22598,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22598,(1),null);
var G__23472 = (gline + (1));
var G__23473 = cljs.core.next(lines__$1);
var G__23474 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23475 = result__$1;
gline = G__23472;
lines__$1 = G__23473;
relseg = G__23474;
result = G__23475;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__22601){
var vec__22602 = p__22601;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22602,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22602,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22602,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22602,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22602,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__22605){
var vec__22606 = p__22605;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22606,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22606,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22606,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22606,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22606,(4),null);
var seg = vec__22606;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__22609){
var vec__22610 = p__22609;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22610,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22610,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22610,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22610,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22610,(4),null);
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
var seq__22622 = cljs.core.seq(infos);
var chunk__22623 = null;
var count__22624 = (0);
var i__22625 = (0);
while(true){
if((i__22625 < count__22624)){
var info = chunk__22623.cljs$core$IIndexed$_nth$arity$2(null,i__22625);
var segv_23476 = info__GT_segv(info,source_idx,line,col);
var gline_23477 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23478 = cljs.core.count(cljs.core.deref(lines));
if((gline_23477 > (lc_23478 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22622,chunk__22623,count__22624,i__22625,segv_23476,gline_23477,lc_23478,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23477 - (lc_23478 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23476], null));
});})(seq__22622,chunk__22623,count__22624,i__22625,segv_23476,gline_23477,lc_23478,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22622,chunk__22623,count__22624,i__22625,segv_23476,gline_23477,lc_23478,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23477], null),cljs.core.conj,segv_23476);
});})(seq__22622,chunk__22623,count__22624,i__22625,segv_23476,gline_23477,lc_23478,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23479 = seq__22622;
var G__23480 = chunk__22623;
var G__23481 = count__22624;
var G__23482 = (i__22625 + (1));
seq__22622 = G__23479;
chunk__22623 = G__23480;
count__22624 = G__23481;
i__22625 = G__23482;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__22622);
if(temp__5735__auto__){
var seq__22622__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22622__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__22622__$1);
var G__23485 = cljs.core.chunk_rest(seq__22622__$1);
var G__23486 = c__4556__auto__;
var G__23487 = cljs.core.count(c__4556__auto__);
var G__23488 = (0);
seq__22622 = G__23485;
chunk__22623 = G__23486;
count__22624 = G__23487;
i__22625 = G__23488;
continue;
} else {
var info = cljs.core.first(seq__22622__$1);
var segv_23491 = info__GT_segv(info,source_idx,line,col);
var gline_23492 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23493 = cljs.core.count(cljs.core.deref(lines));
if((gline_23492 > (lc_23493 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22622,chunk__22623,count__22624,i__22625,segv_23491,gline_23492,lc_23493,info,seq__22622__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23492 - (lc_23493 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23491], null));
});})(seq__22622,chunk__22623,count__22624,i__22625,segv_23491,gline_23492,lc_23493,info,seq__22622__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22622,chunk__22623,count__22624,i__22625,segv_23491,gline_23492,lc_23493,info,seq__22622__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23492], null),cljs.core.conj,segv_23491);
});})(seq__22622,chunk__22623,count__22624,i__22625,segv_23491,gline_23492,lc_23493,info,seq__22622__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23504 = cljs.core.next(seq__22622__$1);
var G__23505 = null;
var G__23506 = (0);
var G__23507 = (0);
seq__22622 = G__23504;
chunk__22623 = G__23505;
count__22624 = G__23506;
i__22625 = G__23507;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__22627_23508 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__22628_23509 = null;
var count__22629_23510 = (0);
var i__22630_23511 = (0);
while(true){
if((i__22630_23511 < count__22629_23510)){
var vec__22826_23512 = chunk__22628_23509.cljs$core$IIndexed$_nth$arity$2(null,i__22630_23511);
var source_idx_23513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22826_23512,(0),null);
var vec__22829_23514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22826_23512,(1),null);
var __23515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22829_23514,(0),null);
var lines_23516__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22829_23514,(1),null);
var seq__22832_23517 = cljs.core.seq(lines_23516__$1);
var chunk__22833_23518 = null;
var count__22834_23519 = (0);
var i__22835_23520 = (0);
while(true){
if((i__22835_23520 < count__22834_23519)){
var vec__22879_23521 = chunk__22833_23518.cljs$core$IIndexed$_nth$arity$2(null,i__22835_23520);
var line_23522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22879_23521,(0),null);
var cols_23523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22879_23521,(1),null);
var seq__22882_23526 = cljs.core.seq(cols_23523);
var chunk__22883_23527 = null;
var count__22884_23528 = (0);
var i__22885_23529 = (0);
while(true){
if((i__22885_23529 < count__22884_23528)){
var vec__22892_23530 = chunk__22883_23527.cljs$core$IIndexed$_nth$arity$2(null,i__22885_23529);
var col_23531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22892_23530,(0),null);
var infos_23532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22892_23530,(1),null);
encode_cols(infos_23532,source_idx_23513,line_23522,col_23531);


var G__23533 = seq__22882_23526;
var G__23534 = chunk__22883_23527;
var G__23535 = count__22884_23528;
var G__23536 = (i__22885_23529 + (1));
seq__22882_23526 = G__23533;
chunk__22883_23527 = G__23534;
count__22884_23528 = G__23535;
i__22885_23529 = G__23536;
continue;
} else {
var temp__5735__auto___23537 = cljs.core.seq(seq__22882_23526);
if(temp__5735__auto___23537){
var seq__22882_23538__$1 = temp__5735__auto___23537;
if(cljs.core.chunked_seq_QMARK_(seq__22882_23538__$1)){
var c__4556__auto___23552 = cljs.core.chunk_first(seq__22882_23538__$1);
var G__23553 = cljs.core.chunk_rest(seq__22882_23538__$1);
var G__23554 = c__4556__auto___23552;
var G__23555 = cljs.core.count(c__4556__auto___23552);
var G__23556 = (0);
seq__22882_23526 = G__23553;
chunk__22883_23527 = G__23554;
count__22884_23528 = G__23555;
i__22885_23529 = G__23556;
continue;
} else {
var vec__22896_23557 = cljs.core.first(seq__22882_23538__$1);
var col_23558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22896_23557,(0),null);
var infos_23559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22896_23557,(1),null);
encode_cols(infos_23559,source_idx_23513,line_23522,col_23558);


var G__23560 = cljs.core.next(seq__22882_23538__$1);
var G__23561 = null;
var G__23562 = (0);
var G__23563 = (0);
seq__22882_23526 = G__23560;
chunk__22883_23527 = G__23561;
count__22884_23528 = G__23562;
i__22885_23529 = G__23563;
continue;
}
} else {
}
}
break;
}


var G__23564 = seq__22832_23517;
var G__23565 = chunk__22833_23518;
var G__23566 = count__22834_23519;
var G__23567 = (i__22835_23520 + (1));
seq__22832_23517 = G__23564;
chunk__22833_23518 = G__23565;
count__22834_23519 = G__23566;
i__22835_23520 = G__23567;
continue;
} else {
var temp__5735__auto___23568 = cljs.core.seq(seq__22832_23517);
if(temp__5735__auto___23568){
var seq__22832_23569__$1 = temp__5735__auto___23568;
if(cljs.core.chunked_seq_QMARK_(seq__22832_23569__$1)){
var c__4556__auto___23570 = cljs.core.chunk_first(seq__22832_23569__$1);
var G__23571 = cljs.core.chunk_rest(seq__22832_23569__$1);
var G__23572 = c__4556__auto___23570;
var G__23573 = cljs.core.count(c__4556__auto___23570);
var G__23574 = (0);
seq__22832_23517 = G__23571;
chunk__22833_23518 = G__23572;
count__22834_23519 = G__23573;
i__22835_23520 = G__23574;
continue;
} else {
var vec__22900_23575 = cljs.core.first(seq__22832_23569__$1);
var line_23576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22900_23575,(0),null);
var cols_23577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22900_23575,(1),null);
var seq__22903_23578 = cljs.core.seq(cols_23577);
var chunk__22904_23579 = null;
var count__22905_23580 = (0);
var i__22906_23581 = (0);
while(true){
if((i__22906_23581 < count__22905_23580)){
var vec__22917_23582 = chunk__22904_23579.cljs$core$IIndexed$_nth$arity$2(null,i__22906_23581);
var col_23583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22917_23582,(0),null);
var infos_23584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22917_23582,(1),null);
encode_cols(infos_23584,source_idx_23513,line_23576,col_23583);


var G__23585 = seq__22903_23578;
var G__23586 = chunk__22904_23579;
var G__23587 = count__22905_23580;
var G__23588 = (i__22906_23581 + (1));
seq__22903_23578 = G__23585;
chunk__22904_23579 = G__23586;
count__22905_23580 = G__23587;
i__22906_23581 = G__23588;
continue;
} else {
var temp__5735__auto___23589__$1 = cljs.core.seq(seq__22903_23578);
if(temp__5735__auto___23589__$1){
var seq__22903_23590__$1 = temp__5735__auto___23589__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22903_23590__$1)){
var c__4556__auto___23592 = cljs.core.chunk_first(seq__22903_23590__$1);
var G__23593 = cljs.core.chunk_rest(seq__22903_23590__$1);
var G__23594 = c__4556__auto___23592;
var G__23595 = cljs.core.count(c__4556__auto___23592);
var G__23596 = (0);
seq__22903_23578 = G__23593;
chunk__22904_23579 = G__23594;
count__22905_23580 = G__23595;
i__22906_23581 = G__23596;
continue;
} else {
var vec__22920_23597 = cljs.core.first(seq__22903_23590__$1);
var col_23598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22920_23597,(0),null);
var infos_23599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22920_23597,(1),null);
encode_cols(infos_23599,source_idx_23513,line_23576,col_23598);


var G__23600 = cljs.core.next(seq__22903_23590__$1);
var G__23601 = null;
var G__23602 = (0);
var G__23603 = (0);
seq__22903_23578 = G__23600;
chunk__22904_23579 = G__23601;
count__22905_23580 = G__23602;
i__22906_23581 = G__23603;
continue;
}
} else {
}
}
break;
}


var G__23604 = cljs.core.next(seq__22832_23569__$1);
var G__23605 = null;
var G__23606 = (0);
var G__23607 = (0);
seq__22832_23517 = G__23604;
chunk__22833_23518 = G__23605;
count__22834_23519 = G__23606;
i__22835_23520 = G__23607;
continue;
}
} else {
}
}
break;
}


var G__23608 = seq__22627_23508;
var G__23609 = chunk__22628_23509;
var G__23610 = count__22629_23510;
var G__23611 = (i__22630_23511 + (1));
seq__22627_23508 = G__23608;
chunk__22628_23509 = G__23609;
count__22629_23510 = G__23610;
i__22630_23511 = G__23611;
continue;
} else {
var temp__5735__auto___23612 = cljs.core.seq(seq__22627_23508);
if(temp__5735__auto___23612){
var seq__22627_23613__$1 = temp__5735__auto___23612;
if(cljs.core.chunked_seq_QMARK_(seq__22627_23613__$1)){
var c__4556__auto___23614 = cljs.core.chunk_first(seq__22627_23613__$1);
var G__23615 = cljs.core.chunk_rest(seq__22627_23613__$1);
var G__23616 = c__4556__auto___23614;
var G__23617 = cljs.core.count(c__4556__auto___23614);
var G__23618 = (0);
seq__22627_23508 = G__23615;
chunk__22628_23509 = G__23616;
count__22629_23510 = G__23617;
i__22630_23511 = G__23618;
continue;
} else {
var vec__22923_23619 = cljs.core.first(seq__22627_23613__$1);
var source_idx_23620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22923_23619,(0),null);
var vec__22926_23621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22923_23619,(1),null);
var __23622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22926_23621,(0),null);
var lines_23623__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22926_23621,(1),null);
var seq__22929_23624 = cljs.core.seq(lines_23623__$1);
var chunk__22930_23625 = null;
var count__22931_23626 = (0);
var i__22932_23627 = (0);
while(true){
if((i__22932_23627 < count__22931_23626)){
var vec__22975_23628 = chunk__22930_23625.cljs$core$IIndexed$_nth$arity$2(null,i__22932_23627);
var line_23629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22975_23628,(0),null);
var cols_23630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22975_23628,(1),null);
var seq__22978_23632 = cljs.core.seq(cols_23630);
var chunk__22979_23633 = null;
var count__22980_23634 = (0);
var i__22981_23635 = (0);
while(true){
if((i__22981_23635 < count__22980_23634)){
var vec__22989_23636 = chunk__22979_23633.cljs$core$IIndexed$_nth$arity$2(null,i__22981_23635);
var col_23637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22989_23636,(0),null);
var infos_23638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22989_23636,(1),null);
encode_cols(infos_23638,source_idx_23620,line_23629,col_23637);


var G__23639 = seq__22978_23632;
var G__23640 = chunk__22979_23633;
var G__23641 = count__22980_23634;
var G__23642 = (i__22981_23635 + (1));
seq__22978_23632 = G__23639;
chunk__22979_23633 = G__23640;
count__22980_23634 = G__23641;
i__22981_23635 = G__23642;
continue;
} else {
var temp__5735__auto___23643__$1 = cljs.core.seq(seq__22978_23632);
if(temp__5735__auto___23643__$1){
var seq__22978_23644__$1 = temp__5735__auto___23643__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22978_23644__$1)){
var c__4556__auto___23645 = cljs.core.chunk_first(seq__22978_23644__$1);
var G__23647 = cljs.core.chunk_rest(seq__22978_23644__$1);
var G__23648 = c__4556__auto___23645;
var G__23649 = cljs.core.count(c__4556__auto___23645);
var G__23650 = (0);
seq__22978_23632 = G__23647;
chunk__22979_23633 = G__23648;
count__22980_23634 = G__23649;
i__22981_23635 = G__23650;
continue;
} else {
var vec__22992_23654 = cljs.core.first(seq__22978_23644__$1);
var col_23655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22992_23654,(0),null);
var infos_23656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22992_23654,(1),null);
encode_cols(infos_23656,source_idx_23620,line_23629,col_23655);


var G__23657 = cljs.core.next(seq__22978_23644__$1);
var G__23658 = null;
var G__23659 = (0);
var G__23660 = (0);
seq__22978_23632 = G__23657;
chunk__22979_23633 = G__23658;
count__22980_23634 = G__23659;
i__22981_23635 = G__23660;
continue;
}
} else {
}
}
break;
}


var G__23661 = seq__22929_23624;
var G__23662 = chunk__22930_23625;
var G__23663 = count__22931_23626;
var G__23664 = (i__22932_23627 + (1));
seq__22929_23624 = G__23661;
chunk__22930_23625 = G__23662;
count__22931_23626 = G__23663;
i__22932_23627 = G__23664;
continue;
} else {
var temp__5735__auto___23668__$1 = cljs.core.seq(seq__22929_23624);
if(temp__5735__auto___23668__$1){
var seq__22929_23669__$1 = temp__5735__auto___23668__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22929_23669__$1)){
var c__4556__auto___23670 = cljs.core.chunk_first(seq__22929_23669__$1);
var G__23671 = cljs.core.chunk_rest(seq__22929_23669__$1);
var G__23672 = c__4556__auto___23670;
var G__23673 = cljs.core.count(c__4556__auto___23670);
var G__23674 = (0);
seq__22929_23624 = G__23671;
chunk__22930_23625 = G__23672;
count__22931_23626 = G__23673;
i__22932_23627 = G__23674;
continue;
} else {
var vec__22995_23684 = cljs.core.first(seq__22929_23669__$1);
var line_23685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22995_23684,(0),null);
var cols_23686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22995_23684,(1),null);
var seq__22998_23687 = cljs.core.seq(cols_23686);
var chunk__22999_23688 = null;
var count__23000_23689 = (0);
var i__23001_23690 = (0);
while(true){
if((i__23001_23690 < count__23000_23689)){
var vec__23008_23691 = chunk__22999_23688.cljs$core$IIndexed$_nth$arity$2(null,i__23001_23690);
var col_23692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23008_23691,(0),null);
var infos_23693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23008_23691,(1),null);
encode_cols(infos_23693,source_idx_23620,line_23685,col_23692);


var G__23700 = seq__22998_23687;
var G__23701 = chunk__22999_23688;
var G__23702 = count__23000_23689;
var G__23703 = (i__23001_23690 + (1));
seq__22998_23687 = G__23700;
chunk__22999_23688 = G__23701;
count__23000_23689 = G__23702;
i__23001_23690 = G__23703;
continue;
} else {
var temp__5735__auto___23704__$2 = cljs.core.seq(seq__22998_23687);
if(temp__5735__auto___23704__$2){
var seq__22998_23705__$1 = temp__5735__auto___23704__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22998_23705__$1)){
var c__4556__auto___23706 = cljs.core.chunk_first(seq__22998_23705__$1);
var G__23707 = cljs.core.chunk_rest(seq__22998_23705__$1);
var G__23708 = c__4556__auto___23706;
var G__23709 = cljs.core.count(c__4556__auto___23706);
var G__23710 = (0);
seq__22998_23687 = G__23707;
chunk__22999_23688 = G__23708;
count__23000_23689 = G__23709;
i__23001_23690 = G__23710;
continue;
} else {
var vec__23011_23712 = cljs.core.first(seq__22998_23705__$1);
var col_23713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23011_23712,(0),null);
var infos_23714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23011_23712,(1),null);
encode_cols(infos_23714,source_idx_23620,line_23685,col_23713);


var G__23719 = cljs.core.next(seq__22998_23705__$1);
var G__23720 = null;
var G__23721 = (0);
var G__23722 = (0);
seq__22998_23687 = G__23719;
chunk__22999_23688 = G__23720;
count__23000_23689 = G__23721;
i__23001_23690 = G__23722;
continue;
}
} else {
}
}
break;
}


var G__23724 = cljs.core.next(seq__22929_23669__$1);
var G__23725 = null;
var G__23726 = (0);
var G__23727 = (0);
seq__22929_23624 = G__23724;
chunk__22930_23625 = G__23725;
count__22931_23626 = G__23726;
i__22932_23627 = G__23727;
continue;
}
} else {
}
}
break;
}


var G__23728 = cljs.core.next(seq__22627_23613__$1);
var G__23729 = null;
var G__23730 = (0);
var G__23731 = (0);
seq__22627_23508 = G__23728;
chunk__22628_23509 = G__23729;
count__22629_23510 = G__23730;
i__22630_23511 = G__23731;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__23014 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
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
var G__23015 = G__23014;
goog.object.set(G__23015,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__23015;
} else {
return G__23014;
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
var G__23739 = cljs.core.next(col_map_seq);
var G__23740 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__23019,col,infos,vec__23016,line,col_map){
return (function (v,p__23022){
var map__23023 = p__23022;
var map__23023__$1 = (((((!((map__23023 == null))))?(((((map__23023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23023):map__23023);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23023__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23023__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__23019,col,infos,vec__23016,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__23739;
new_cols = G__23740;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__23746 = cljs.core.next(line_map_seq);
var G__23747 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__23746;
new_lines = G__23747;
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
var seq__23027_23750 = cljs.core.seq(reverse_map);
var chunk__23028_23751 = null;
var count__23029_23752 = (0);
var i__23030_23753 = (0);
while(true){
if((i__23030_23753 < count__23029_23752)){
var vec__23224_23754 = chunk__23028_23751.cljs$core$IIndexed$_nth$arity$2(null,i__23030_23753);
var line_23755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23224_23754,(0),null);
var columns_23756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23224_23754,(1),null);
var seq__23227_23757 = cljs.core.seq(columns_23756);
var chunk__23228_23758 = null;
var count__23229_23759 = (0);
var i__23230_23760 = (0);
while(true){
if((i__23230_23760 < count__23229_23759)){
var vec__23272_23763 = chunk__23228_23758.cljs$core$IIndexed$_nth$arity$2(null,i__23230_23760);
var column_23764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23272_23763,(0),null);
var column_info_23765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23272_23763,(1),null);
var seq__23275_23766 = cljs.core.seq(column_info_23765);
var chunk__23276_23767 = null;
var count__23277_23768 = (0);
var i__23278_23769 = (0);
while(true){
if((i__23278_23769 < count__23277_23768)){
var map__23292_23770 = chunk__23276_23767.cljs$core$IIndexed$_nth$arity$2(null,i__23278_23769);
var map__23292_23771__$1 = (((((!((map__23292_23770 == null))))?(((((map__23292_23770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23292_23770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23292_23770):map__23292_23770);
var gline_23772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23292_23771__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23292_23771__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23292_23771__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23772], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23275_23766,chunk__23276_23767,count__23277_23768,i__23278_23769,seq__23227_23757,chunk__23228_23758,count__23229_23759,i__23230_23760,seq__23027_23750,chunk__23028_23751,count__23029_23752,i__23030_23753,map__23292_23770,map__23292_23771__$1,gline_23772,gcol_23773,name_23774,vec__23272_23763,column_23764,column_info_23765,vec__23224_23754,line_23755,columns_23756,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23773], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23755,new cljs.core.Keyword(null,"col","col",-1959363084),column_23764,new cljs.core.Keyword(null,"name","name",1843675177),name_23774], null));
});})(seq__23275_23766,chunk__23276_23767,count__23277_23768,i__23278_23769,seq__23227_23757,chunk__23228_23758,count__23229_23759,i__23230_23760,seq__23027_23750,chunk__23028_23751,count__23029_23752,i__23030_23753,map__23292_23770,map__23292_23771__$1,gline_23772,gcol_23773,name_23774,vec__23272_23763,column_23764,column_info_23765,vec__23224_23754,line_23755,columns_23756,inverted))
,cljs.core.sorted_map()));


var G__23775 = seq__23275_23766;
var G__23776 = chunk__23276_23767;
var G__23777 = count__23277_23768;
var G__23778 = (i__23278_23769 + (1));
seq__23275_23766 = G__23775;
chunk__23276_23767 = G__23776;
count__23277_23768 = G__23777;
i__23278_23769 = G__23778;
continue;
} else {
var temp__5735__auto___23779 = cljs.core.seq(seq__23275_23766);
if(temp__5735__auto___23779){
var seq__23275_23780__$1 = temp__5735__auto___23779;
if(cljs.core.chunked_seq_QMARK_(seq__23275_23780__$1)){
var c__4556__auto___23781 = cljs.core.chunk_first(seq__23275_23780__$1);
var G__23782 = cljs.core.chunk_rest(seq__23275_23780__$1);
var G__23783 = c__4556__auto___23781;
var G__23784 = cljs.core.count(c__4556__auto___23781);
var G__23785 = (0);
seq__23275_23766 = G__23782;
chunk__23276_23767 = G__23783;
count__23277_23768 = G__23784;
i__23278_23769 = G__23785;
continue;
} else {
var map__23299_23786 = cljs.core.first(seq__23275_23780__$1);
var map__23299_23787__$1 = (((((!((map__23299_23786 == null))))?(((((map__23299_23786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23299_23786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23299_23786):map__23299_23786);
var gline_23788 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23299_23787__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23789 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23299_23787__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23790 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23299_23787__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23788], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23275_23766,chunk__23276_23767,count__23277_23768,i__23278_23769,seq__23227_23757,chunk__23228_23758,count__23229_23759,i__23230_23760,seq__23027_23750,chunk__23028_23751,count__23029_23752,i__23030_23753,map__23299_23786,map__23299_23787__$1,gline_23788,gcol_23789,name_23790,seq__23275_23780__$1,temp__5735__auto___23779,vec__23272_23763,column_23764,column_info_23765,vec__23224_23754,line_23755,columns_23756,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23789], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23755,new cljs.core.Keyword(null,"col","col",-1959363084),column_23764,new cljs.core.Keyword(null,"name","name",1843675177),name_23790], null));
});})(seq__23275_23766,chunk__23276_23767,count__23277_23768,i__23278_23769,seq__23227_23757,chunk__23228_23758,count__23229_23759,i__23230_23760,seq__23027_23750,chunk__23028_23751,count__23029_23752,i__23030_23753,map__23299_23786,map__23299_23787__$1,gline_23788,gcol_23789,name_23790,seq__23275_23780__$1,temp__5735__auto___23779,vec__23272_23763,column_23764,column_info_23765,vec__23224_23754,line_23755,columns_23756,inverted))
,cljs.core.sorted_map()));


var G__23791 = cljs.core.next(seq__23275_23780__$1);
var G__23792 = null;
var G__23793 = (0);
var G__23794 = (0);
seq__23275_23766 = G__23791;
chunk__23276_23767 = G__23792;
count__23277_23768 = G__23793;
i__23278_23769 = G__23794;
continue;
}
} else {
}
}
break;
}


var G__23795 = seq__23227_23757;
var G__23796 = chunk__23228_23758;
var G__23797 = count__23229_23759;
var G__23798 = (i__23230_23760 + (1));
seq__23227_23757 = G__23795;
chunk__23228_23758 = G__23796;
count__23229_23759 = G__23797;
i__23230_23760 = G__23798;
continue;
} else {
var temp__5735__auto___23799 = cljs.core.seq(seq__23227_23757);
if(temp__5735__auto___23799){
var seq__23227_23801__$1 = temp__5735__auto___23799;
if(cljs.core.chunked_seq_QMARK_(seq__23227_23801__$1)){
var c__4556__auto___23802 = cljs.core.chunk_first(seq__23227_23801__$1);
var G__23803 = cljs.core.chunk_rest(seq__23227_23801__$1);
var G__23804 = c__4556__auto___23802;
var G__23805 = cljs.core.count(c__4556__auto___23802);
var G__23806 = (0);
seq__23227_23757 = G__23803;
chunk__23228_23758 = G__23804;
count__23229_23759 = G__23805;
i__23230_23760 = G__23806;
continue;
} else {
var vec__23311_23807 = cljs.core.first(seq__23227_23801__$1);
var column_23808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23311_23807,(0),null);
var column_info_23809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23311_23807,(1),null);
var seq__23315_23812 = cljs.core.seq(column_info_23809);
var chunk__23316_23813 = null;
var count__23317_23814 = (0);
var i__23318_23815 = (0);
while(true){
if((i__23318_23815 < count__23317_23814)){
var map__23328_23816 = chunk__23316_23813.cljs$core$IIndexed$_nth$arity$2(null,i__23318_23815);
var map__23328_23817__$1 = (((((!((map__23328_23816 == null))))?(((((map__23328_23816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23328_23816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23328_23816):map__23328_23816);
var gline_23818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23328_23817__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23328_23817__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23328_23817__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23818], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23315_23812,chunk__23316_23813,count__23317_23814,i__23318_23815,seq__23227_23757,chunk__23228_23758,count__23229_23759,i__23230_23760,seq__23027_23750,chunk__23028_23751,count__23029_23752,i__23030_23753,map__23328_23816,map__23328_23817__$1,gline_23818,gcol_23819,name_23820,vec__23311_23807,column_23808,column_info_23809,seq__23227_23801__$1,temp__5735__auto___23799,vec__23224_23754,line_23755,columns_23756,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23819], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23755,new cljs.core.Keyword(null,"col","col",-1959363084),column_23808,new cljs.core.Keyword(null,"name","name",1843675177),name_23820], null));
});})(seq__23315_23812,chunk__23316_23813,count__23317_23814,i__23318_23815,seq__23227_23757,chunk__23228_23758,count__23229_23759,i__23230_23760,seq__23027_23750,chunk__23028_23751,count__23029_23752,i__23030_23753,map__23328_23816,map__23328_23817__$1,gline_23818,gcol_23819,name_23820,vec__23311_23807,column_23808,column_info_23809,seq__23227_23801__$1,temp__5735__auto___23799,vec__23224_23754,line_23755,columns_23756,inverted))
,cljs.core.sorted_map()));


var G__23823 = seq__23315_23812;
var G__23824 = chunk__23316_23813;
var G__23825 = count__23317_23814;
var G__23826 = (i__23318_23815 + (1));
seq__23315_23812 = G__23823;
chunk__23316_23813 = G__23824;
count__23317_23814 = G__23825;
i__23318_23815 = G__23826;
continue;
} else {
var temp__5735__auto___23828__$1 = cljs.core.seq(seq__23315_23812);
if(temp__5735__auto___23828__$1){
var seq__23315_23832__$1 = temp__5735__auto___23828__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23315_23832__$1)){
var c__4556__auto___23833 = cljs.core.chunk_first(seq__23315_23832__$1);
var G__23834 = cljs.core.chunk_rest(seq__23315_23832__$1);
var G__23835 = c__4556__auto___23833;
var G__23836 = cljs.core.count(c__4556__auto___23833);
var G__23837 = (0);
seq__23315_23812 = G__23834;
chunk__23316_23813 = G__23835;
count__23317_23814 = G__23836;
i__23318_23815 = G__23837;
continue;
} else {
var map__23330_23838 = cljs.core.first(seq__23315_23832__$1);
var map__23330_23839__$1 = (((((!((map__23330_23838 == null))))?(((((map__23330_23838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23330_23838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23330_23838):map__23330_23838);
var gline_23840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23330_23839__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23330_23839__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23842 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23330_23839__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23840], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23315_23812,chunk__23316_23813,count__23317_23814,i__23318_23815,seq__23227_23757,chunk__23228_23758,count__23229_23759,i__23230_23760,seq__23027_23750,chunk__23028_23751,count__23029_23752,i__23030_23753,map__23330_23838,map__23330_23839__$1,gline_23840,gcol_23841,name_23842,seq__23315_23832__$1,temp__5735__auto___23828__$1,vec__23311_23807,column_23808,column_info_23809,seq__23227_23801__$1,temp__5735__auto___23799,vec__23224_23754,line_23755,columns_23756,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23841], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23755,new cljs.core.Keyword(null,"col","col",-1959363084),column_23808,new cljs.core.Keyword(null,"name","name",1843675177),name_23842], null));
});})(seq__23315_23812,chunk__23316_23813,count__23317_23814,i__23318_23815,seq__23227_23757,chunk__23228_23758,count__23229_23759,i__23230_23760,seq__23027_23750,chunk__23028_23751,count__23029_23752,i__23030_23753,map__23330_23838,map__23330_23839__$1,gline_23840,gcol_23841,name_23842,seq__23315_23832__$1,temp__5735__auto___23828__$1,vec__23311_23807,column_23808,column_info_23809,seq__23227_23801__$1,temp__5735__auto___23799,vec__23224_23754,line_23755,columns_23756,inverted))
,cljs.core.sorted_map()));


var G__23847 = cljs.core.next(seq__23315_23832__$1);
var G__23848 = null;
var G__23849 = (0);
var G__23850 = (0);
seq__23315_23812 = G__23847;
chunk__23316_23813 = G__23848;
count__23317_23814 = G__23849;
i__23318_23815 = G__23850;
continue;
}
} else {
}
}
break;
}


var G__23853 = cljs.core.next(seq__23227_23801__$1);
var G__23854 = null;
var G__23855 = (0);
var G__23856 = (0);
seq__23227_23757 = G__23853;
chunk__23228_23758 = G__23854;
count__23229_23759 = G__23855;
i__23230_23760 = G__23856;
continue;
}
} else {
}
}
break;
}


var G__23857 = seq__23027_23750;
var G__23858 = chunk__23028_23751;
var G__23859 = count__23029_23752;
var G__23860 = (i__23030_23753 + (1));
seq__23027_23750 = G__23857;
chunk__23028_23751 = G__23858;
count__23029_23752 = G__23859;
i__23030_23753 = G__23860;
continue;
} else {
var temp__5735__auto___23861 = cljs.core.seq(seq__23027_23750);
if(temp__5735__auto___23861){
var seq__23027_23862__$1 = temp__5735__auto___23861;
if(cljs.core.chunked_seq_QMARK_(seq__23027_23862__$1)){
var c__4556__auto___23863 = cljs.core.chunk_first(seq__23027_23862__$1);
var G__23864 = cljs.core.chunk_rest(seq__23027_23862__$1);
var G__23865 = c__4556__auto___23863;
var G__23866 = cljs.core.count(c__4556__auto___23863);
var G__23867 = (0);
seq__23027_23750 = G__23864;
chunk__23028_23751 = G__23865;
count__23029_23752 = G__23866;
i__23030_23753 = G__23867;
continue;
} else {
var vec__23332_23868 = cljs.core.first(seq__23027_23862__$1);
var line_23869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23332_23868,(0),null);
var columns_23870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23332_23868,(1),null);
var seq__23335_23871 = cljs.core.seq(columns_23870);
var chunk__23336_23872 = null;
var count__23337_23873 = (0);
var i__23338_23874 = (0);
while(true){
if((i__23338_23874 < count__23337_23873)){
var vec__23392_23875 = chunk__23336_23872.cljs$core$IIndexed$_nth$arity$2(null,i__23338_23874);
var column_23876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23392_23875,(0),null);
var column_info_23877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23392_23875,(1),null);
var seq__23395_23878 = cljs.core.seq(column_info_23877);
var chunk__23396_23879 = null;
var count__23397_23880 = (0);
var i__23398_23881 = (0);
while(true){
if((i__23398_23881 < count__23397_23880)){
var map__23412_23882 = chunk__23396_23879.cljs$core$IIndexed$_nth$arity$2(null,i__23398_23881);
var map__23412_23883__$1 = (((((!((map__23412_23882 == null))))?(((((map__23412_23882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23412_23882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23412_23882):map__23412_23882);
var gline_23884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23412_23883__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23412_23883__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23412_23883__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23884], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23395_23878,chunk__23396_23879,count__23397_23880,i__23398_23881,seq__23335_23871,chunk__23336_23872,count__23337_23873,i__23338_23874,seq__23027_23750,chunk__23028_23751,count__23029_23752,i__23030_23753,map__23412_23882,map__23412_23883__$1,gline_23884,gcol_23885,name_23886,vec__23392_23875,column_23876,column_info_23877,vec__23332_23868,line_23869,columns_23870,seq__23027_23862__$1,temp__5735__auto___23861,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23885], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23869,new cljs.core.Keyword(null,"col","col",-1959363084),column_23876,new cljs.core.Keyword(null,"name","name",1843675177),name_23886], null));
});})(seq__23395_23878,chunk__23396_23879,count__23397_23880,i__23398_23881,seq__23335_23871,chunk__23336_23872,count__23337_23873,i__23338_23874,seq__23027_23750,chunk__23028_23751,count__23029_23752,i__23030_23753,map__23412_23882,map__23412_23883__$1,gline_23884,gcol_23885,name_23886,vec__23392_23875,column_23876,column_info_23877,vec__23332_23868,line_23869,columns_23870,seq__23027_23862__$1,temp__5735__auto___23861,inverted))
,cljs.core.sorted_map()));


var G__23887 = seq__23395_23878;
var G__23888 = chunk__23396_23879;
var G__23889 = count__23397_23880;
var G__23890 = (i__23398_23881 + (1));
seq__23395_23878 = G__23887;
chunk__23396_23879 = G__23888;
count__23397_23880 = G__23889;
i__23398_23881 = G__23890;
continue;
} else {
var temp__5735__auto___23891__$1 = cljs.core.seq(seq__23395_23878);
if(temp__5735__auto___23891__$1){
var seq__23395_23892__$1 = temp__5735__auto___23891__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23395_23892__$1)){
var c__4556__auto___23893 = cljs.core.chunk_first(seq__23395_23892__$1);
var G__23894 = cljs.core.chunk_rest(seq__23395_23892__$1);
var G__23895 = c__4556__auto___23893;
var G__23896 = cljs.core.count(c__4556__auto___23893);
var G__23897 = (0);
seq__23395_23878 = G__23894;
chunk__23396_23879 = G__23895;
count__23397_23880 = G__23896;
i__23398_23881 = G__23897;
continue;
} else {
var map__23417_23898 = cljs.core.first(seq__23395_23892__$1);
var map__23417_23899__$1 = (((((!((map__23417_23898 == null))))?(((((map__23417_23898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23417_23898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23417_23898):map__23417_23898);
var gline_23900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23417_23899__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23417_23899__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23417_23899__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23900], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23395_23878,chunk__23396_23879,count__23397_23880,i__23398_23881,seq__23335_23871,chunk__23336_23872,count__23337_23873,i__23338_23874,seq__23027_23750,chunk__23028_23751,count__23029_23752,i__23030_23753,map__23417_23898,map__23417_23899__$1,gline_23900,gcol_23901,name_23902,seq__23395_23892__$1,temp__5735__auto___23891__$1,vec__23392_23875,column_23876,column_info_23877,vec__23332_23868,line_23869,columns_23870,seq__23027_23862__$1,temp__5735__auto___23861,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23901], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23869,new cljs.core.Keyword(null,"col","col",-1959363084),column_23876,new cljs.core.Keyword(null,"name","name",1843675177),name_23902], null));
});})(seq__23395_23878,chunk__23396_23879,count__23397_23880,i__23398_23881,seq__23335_23871,chunk__23336_23872,count__23337_23873,i__23338_23874,seq__23027_23750,chunk__23028_23751,count__23029_23752,i__23030_23753,map__23417_23898,map__23417_23899__$1,gline_23900,gcol_23901,name_23902,seq__23395_23892__$1,temp__5735__auto___23891__$1,vec__23392_23875,column_23876,column_info_23877,vec__23332_23868,line_23869,columns_23870,seq__23027_23862__$1,temp__5735__auto___23861,inverted))
,cljs.core.sorted_map()));


var G__23903 = cljs.core.next(seq__23395_23892__$1);
var G__23904 = null;
var G__23905 = (0);
var G__23906 = (0);
seq__23395_23878 = G__23903;
chunk__23396_23879 = G__23904;
count__23397_23880 = G__23905;
i__23398_23881 = G__23906;
continue;
}
} else {
}
}
break;
}


var G__23907 = seq__23335_23871;
var G__23908 = chunk__23336_23872;
var G__23909 = count__23337_23873;
var G__23910 = (i__23338_23874 + (1));
seq__23335_23871 = G__23907;
chunk__23336_23872 = G__23908;
count__23337_23873 = G__23909;
i__23338_23874 = G__23910;
continue;
} else {
var temp__5735__auto___23911__$1 = cljs.core.seq(seq__23335_23871);
if(temp__5735__auto___23911__$1){
var seq__23335_23912__$1 = temp__5735__auto___23911__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23335_23912__$1)){
var c__4556__auto___23913 = cljs.core.chunk_first(seq__23335_23912__$1);
var G__23914 = cljs.core.chunk_rest(seq__23335_23912__$1);
var G__23915 = c__4556__auto___23913;
var G__23916 = cljs.core.count(c__4556__auto___23913);
var G__23917 = (0);
seq__23335_23871 = G__23914;
chunk__23336_23872 = G__23915;
count__23337_23873 = G__23916;
i__23338_23874 = G__23917;
continue;
} else {
var vec__23419_23918 = cljs.core.first(seq__23335_23912__$1);
var column_23919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23419_23918,(0),null);
var column_info_23920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23419_23918,(1),null);
var seq__23422_23921 = cljs.core.seq(column_info_23920);
var chunk__23423_23922 = null;
var count__23424_23923 = (0);
var i__23425_23924 = (0);
while(true){
if((i__23425_23924 < count__23424_23923)){
var map__23430_23925 = chunk__23423_23922.cljs$core$IIndexed$_nth$arity$2(null,i__23425_23924);
var map__23430_23926__$1 = (((((!((map__23430_23925 == null))))?(((((map__23430_23925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23430_23925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23430_23925):map__23430_23925);
var gline_23927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23430_23926__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23430_23926__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23430_23926__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23927], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23422_23921,chunk__23423_23922,count__23424_23923,i__23425_23924,seq__23335_23871,chunk__23336_23872,count__23337_23873,i__23338_23874,seq__23027_23750,chunk__23028_23751,count__23029_23752,i__23030_23753,map__23430_23925,map__23430_23926__$1,gline_23927,gcol_23928,name_23929,vec__23419_23918,column_23919,column_info_23920,seq__23335_23912__$1,temp__5735__auto___23911__$1,vec__23332_23868,line_23869,columns_23870,seq__23027_23862__$1,temp__5735__auto___23861,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23928], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23869,new cljs.core.Keyword(null,"col","col",-1959363084),column_23919,new cljs.core.Keyword(null,"name","name",1843675177),name_23929], null));
});})(seq__23422_23921,chunk__23423_23922,count__23424_23923,i__23425_23924,seq__23335_23871,chunk__23336_23872,count__23337_23873,i__23338_23874,seq__23027_23750,chunk__23028_23751,count__23029_23752,i__23030_23753,map__23430_23925,map__23430_23926__$1,gline_23927,gcol_23928,name_23929,vec__23419_23918,column_23919,column_info_23920,seq__23335_23912__$1,temp__5735__auto___23911__$1,vec__23332_23868,line_23869,columns_23870,seq__23027_23862__$1,temp__5735__auto___23861,inverted))
,cljs.core.sorted_map()));


var G__23930 = seq__23422_23921;
var G__23931 = chunk__23423_23922;
var G__23932 = count__23424_23923;
var G__23933 = (i__23425_23924 + (1));
seq__23422_23921 = G__23930;
chunk__23423_23922 = G__23931;
count__23424_23923 = G__23932;
i__23425_23924 = G__23933;
continue;
} else {
var temp__5735__auto___23934__$2 = cljs.core.seq(seq__23422_23921);
if(temp__5735__auto___23934__$2){
var seq__23422_23935__$1 = temp__5735__auto___23934__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23422_23935__$1)){
var c__4556__auto___23936 = cljs.core.chunk_first(seq__23422_23935__$1);
var G__23937 = cljs.core.chunk_rest(seq__23422_23935__$1);
var G__23938 = c__4556__auto___23936;
var G__23939 = cljs.core.count(c__4556__auto___23936);
var G__23940 = (0);
seq__23422_23921 = G__23937;
chunk__23423_23922 = G__23938;
count__23424_23923 = G__23939;
i__23425_23924 = G__23940;
continue;
} else {
var map__23432_23942 = cljs.core.first(seq__23422_23935__$1);
var map__23432_23943__$1 = (((((!((map__23432_23942 == null))))?(((((map__23432_23942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23432_23942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23432_23942):map__23432_23942);
var gline_23944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23432_23943__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23432_23943__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23432_23943__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23944], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23422_23921,chunk__23423_23922,count__23424_23923,i__23425_23924,seq__23335_23871,chunk__23336_23872,count__23337_23873,i__23338_23874,seq__23027_23750,chunk__23028_23751,count__23029_23752,i__23030_23753,map__23432_23942,map__23432_23943__$1,gline_23944,gcol_23945,name_23946,seq__23422_23935__$1,temp__5735__auto___23934__$2,vec__23419_23918,column_23919,column_info_23920,seq__23335_23912__$1,temp__5735__auto___23911__$1,vec__23332_23868,line_23869,columns_23870,seq__23027_23862__$1,temp__5735__auto___23861,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23945], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23869,new cljs.core.Keyword(null,"col","col",-1959363084),column_23919,new cljs.core.Keyword(null,"name","name",1843675177),name_23946], null));
});})(seq__23422_23921,chunk__23423_23922,count__23424_23923,i__23425_23924,seq__23335_23871,chunk__23336_23872,count__23337_23873,i__23338_23874,seq__23027_23750,chunk__23028_23751,count__23029_23752,i__23030_23753,map__23432_23942,map__23432_23943__$1,gline_23944,gcol_23945,name_23946,seq__23422_23935__$1,temp__5735__auto___23934__$2,vec__23419_23918,column_23919,column_info_23920,seq__23335_23912__$1,temp__5735__auto___23911__$1,vec__23332_23868,line_23869,columns_23870,seq__23027_23862__$1,temp__5735__auto___23861,inverted))
,cljs.core.sorted_map()));


var G__23950 = cljs.core.next(seq__23422_23935__$1);
var G__23951 = null;
var G__23952 = (0);
var G__23953 = (0);
seq__23422_23921 = G__23950;
chunk__23423_23922 = G__23951;
count__23424_23923 = G__23952;
i__23425_23924 = G__23953;
continue;
}
} else {
}
}
break;
}


var G__23954 = cljs.core.next(seq__23335_23912__$1);
var G__23955 = null;
var G__23956 = (0);
var G__23957 = (0);
seq__23335_23871 = G__23954;
chunk__23336_23872 = G__23955;
count__23337_23873 = G__23956;
i__23338_23874 = G__23957;
continue;
}
} else {
}
}
break;
}


var G__23958 = cljs.core.next(seq__23027_23862__$1);
var G__23959 = null;
var G__23960 = (0);
var G__23961 = (0);
seq__23027_23750 = G__23958;
chunk__23028_23751 = G__23959;
count__23029_23752 = G__23960;
i__23030_23753 = G__23961;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
