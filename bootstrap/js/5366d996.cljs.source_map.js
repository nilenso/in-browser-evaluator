goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__22783){
var vec__22784 = p__22783;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22784,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22784,(1),null);
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
var vec__22788 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22788,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22788,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22788,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22788,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22788,(4),null);
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
var vec__22795 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22795,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22795,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22795,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22795,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22795,(4),null);
var vec__22798 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22798,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22798,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22798,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22798,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22798,(4),null);
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
var map__22801 = segmap;
var map__22801__$1 = (((((!((map__22801 == null))))?(((((map__22801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22801):map__22801);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22801__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22801__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22801__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22801__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22801__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__22804 = arguments.length;
switch (G__22804) {
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
var vec__22810 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__24098 = cljs.core.next(segs__$1);
var G__24099 = nrelseg;
var G__24100 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__24098;
relseg__$1 = G__24099;
result__$1 = G__24100;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22810,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22810,(1),null);
var G__24101 = (gline + (1));
var G__24102 = cljs.core.next(lines__$1);
var G__24103 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__24104 = result__$1;
gline = G__24101;
lines__$1 = G__24102;
relseg = G__24103;
result = G__24104;
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
var map__22824 = segmap;
var map__22824__$1 = (((((!((map__22824 == null))))?(((((map__22824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22824):map__22824);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22824__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22824__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22824__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22824__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22824__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__22823_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__22823_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__22834 = arguments.length;
switch (G__22834) {
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
var vec__22848 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__24106 = cljs.core.next(segs__$1);
var G__24107 = nrelseg;
var G__24108 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__24106;
relseg__$1 = G__24107;
result__$1 = G__24108;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22848,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22848,(1),null);
var G__24109 = (gline + (1));
var G__24110 = cljs.core.next(lines__$1);
var G__24111 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__24112 = result__$1;
gline = G__24109;
lines__$1 = G__24110;
relseg = G__24111;
result = G__24112;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__22853){
var vec__22854 = p__22853;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22854,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22854,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22854,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22854,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22854,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__22857){
var vec__22858 = p__22857;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22858,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22858,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22858,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22858,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22858,(4),null);
var seg = vec__22858;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__22865){
var vec__22866 = p__22865;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22866,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22866,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22866,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22866,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22866,(4),null);
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
var seq__22909 = cljs.core.seq(infos);
var chunk__22910 = null;
var count__22911 = (0);
var i__22912 = (0);
while(true){
if((i__22912 < count__22911)){
var info = chunk__22910.cljs$core$IIndexed$_nth$arity$2(null,i__22912);
var segv_24113 = info__GT_segv(info,source_idx,line,col);
var gline_24114 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_24115 = cljs.core.count(cljs.core.deref(lines));
if((gline_24114 > (lc_24115 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22909,chunk__22910,count__22911,i__22912,segv_24113,gline_24114,lc_24115,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_24114 - (lc_24115 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_24113], null));
});})(seq__22909,chunk__22910,count__22911,i__22912,segv_24113,gline_24114,lc_24115,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22909,chunk__22910,count__22911,i__22912,segv_24113,gline_24114,lc_24115,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24114], null),cljs.core.conj,segv_24113);
});})(seq__22909,chunk__22910,count__22911,i__22912,segv_24113,gline_24114,lc_24115,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__24116 = seq__22909;
var G__24117 = chunk__22910;
var G__24118 = count__22911;
var G__24119 = (i__22912 + (1));
seq__22909 = G__24116;
chunk__22910 = G__24117;
count__22911 = G__24118;
i__22912 = G__24119;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__22909);
if(temp__5735__auto__){
var seq__22909__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22909__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__22909__$1);
var G__24120 = cljs.core.chunk_rest(seq__22909__$1);
var G__24121 = c__4556__auto__;
var G__24122 = cljs.core.count(c__4556__auto__);
var G__24123 = (0);
seq__22909 = G__24120;
chunk__22910 = G__24121;
count__22911 = G__24122;
i__22912 = G__24123;
continue;
} else {
var info = cljs.core.first(seq__22909__$1);
var segv_24124 = info__GT_segv(info,source_idx,line,col);
var gline_24125 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_24126 = cljs.core.count(cljs.core.deref(lines));
if((gline_24125 > (lc_24126 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22909,chunk__22910,count__22911,i__22912,segv_24124,gline_24125,lc_24126,info,seq__22909__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_24125 - (lc_24126 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_24124], null));
});})(seq__22909,chunk__22910,count__22911,i__22912,segv_24124,gline_24125,lc_24126,info,seq__22909__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22909,chunk__22910,count__22911,i__22912,segv_24124,gline_24125,lc_24126,info,seq__22909__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24125], null),cljs.core.conj,segv_24124);
});})(seq__22909,chunk__22910,count__22911,i__22912,segv_24124,gline_24125,lc_24126,info,seq__22909__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__24127 = cljs.core.next(seq__22909__$1);
var G__24128 = null;
var G__24129 = (0);
var G__24130 = (0);
seq__22909 = G__24127;
chunk__22910 = G__24128;
count__22911 = G__24129;
i__22912 = G__24130;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__22946_24131 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__22947_24132 = null;
var count__22948_24133 = (0);
var i__22949_24134 = (0);
while(true){
if((i__22949_24134 < count__22948_24133)){
var vec__23184_24135 = chunk__22947_24132.cljs$core$IIndexed$_nth$arity$2(null,i__22949_24134);
var source_idx_24136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23184_24135,(0),null);
var vec__23187_24137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23184_24135,(1),null);
var __24138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23187_24137,(0),null);
var lines_24139__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23187_24137,(1),null);
var seq__23190_24140 = cljs.core.seq(lines_24139__$1);
var chunk__23191_24141 = null;
var count__23192_24142 = (0);
var i__23193_24143 = (0);
while(true){
if((i__23193_24143 < count__23192_24142)){
var vec__23256_24144 = chunk__23191_24141.cljs$core$IIndexed$_nth$arity$2(null,i__23193_24143);
var line_24145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23256_24144,(0),null);
var cols_24146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23256_24144,(1),null);
var seq__23262_24147 = cljs.core.seq(cols_24146);
var chunk__23263_24148 = null;
var count__23264_24149 = (0);
var i__23265_24150 = (0);
while(true){
if((i__23265_24150 < count__23264_24149)){
var vec__23283_24151 = chunk__23263_24148.cljs$core$IIndexed$_nth$arity$2(null,i__23265_24150);
var col_24152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23283_24151,(0),null);
var infos_24153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23283_24151,(1),null);
encode_cols(infos_24153,source_idx_24136,line_24145,col_24152);


var G__24154 = seq__23262_24147;
var G__24155 = chunk__23263_24148;
var G__24156 = count__23264_24149;
var G__24157 = (i__23265_24150 + (1));
seq__23262_24147 = G__24154;
chunk__23263_24148 = G__24155;
count__23264_24149 = G__24156;
i__23265_24150 = G__24157;
continue;
} else {
var temp__5735__auto___24158 = cljs.core.seq(seq__23262_24147);
if(temp__5735__auto___24158){
var seq__23262_24159__$1 = temp__5735__auto___24158;
if(cljs.core.chunked_seq_QMARK_(seq__23262_24159__$1)){
var c__4556__auto___24160 = cljs.core.chunk_first(seq__23262_24159__$1);
var G__24161 = cljs.core.chunk_rest(seq__23262_24159__$1);
var G__24162 = c__4556__auto___24160;
var G__24163 = cljs.core.count(c__4556__auto___24160);
var G__24164 = (0);
seq__23262_24147 = G__24161;
chunk__23263_24148 = G__24162;
count__23264_24149 = G__24163;
i__23265_24150 = G__24164;
continue;
} else {
var vec__23286_24165 = cljs.core.first(seq__23262_24159__$1);
var col_24166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23286_24165,(0),null);
var infos_24167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23286_24165,(1),null);
encode_cols(infos_24167,source_idx_24136,line_24145,col_24166);


var G__24168 = cljs.core.next(seq__23262_24159__$1);
var G__24169 = null;
var G__24170 = (0);
var G__24171 = (0);
seq__23262_24147 = G__24168;
chunk__23263_24148 = G__24169;
count__23264_24149 = G__24170;
i__23265_24150 = G__24171;
continue;
}
} else {
}
}
break;
}


var G__24172 = seq__23190_24140;
var G__24173 = chunk__23191_24141;
var G__24174 = count__23192_24142;
var G__24175 = (i__23193_24143 + (1));
seq__23190_24140 = G__24172;
chunk__23191_24141 = G__24173;
count__23192_24142 = G__24174;
i__23193_24143 = G__24175;
continue;
} else {
var temp__5735__auto___24176 = cljs.core.seq(seq__23190_24140);
if(temp__5735__auto___24176){
var seq__23190_24177__$1 = temp__5735__auto___24176;
if(cljs.core.chunked_seq_QMARK_(seq__23190_24177__$1)){
var c__4556__auto___24178 = cljs.core.chunk_first(seq__23190_24177__$1);
var G__24179 = cljs.core.chunk_rest(seq__23190_24177__$1);
var G__24180 = c__4556__auto___24178;
var G__24181 = cljs.core.count(c__4556__auto___24178);
var G__24182 = (0);
seq__23190_24140 = G__24179;
chunk__23191_24141 = G__24180;
count__23192_24142 = G__24181;
i__23193_24143 = G__24182;
continue;
} else {
var vec__23296_24183 = cljs.core.first(seq__23190_24177__$1);
var line_24184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23296_24183,(0),null);
var cols_24185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23296_24183,(1),null);
var seq__23299_24186 = cljs.core.seq(cols_24185);
var chunk__23300_24187 = null;
var count__23301_24188 = (0);
var i__23302_24189 = (0);
while(true){
if((i__23302_24189 < count__23301_24188)){
var vec__23326_24191 = chunk__23300_24187.cljs$core$IIndexed$_nth$arity$2(null,i__23302_24189);
var col_24192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23326_24191,(0),null);
var infos_24193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23326_24191,(1),null);
encode_cols(infos_24193,source_idx_24136,line_24184,col_24192);


var G__24194 = seq__23299_24186;
var G__24195 = chunk__23300_24187;
var G__24196 = count__23301_24188;
var G__24197 = (i__23302_24189 + (1));
seq__23299_24186 = G__24194;
chunk__23300_24187 = G__24195;
count__23301_24188 = G__24196;
i__23302_24189 = G__24197;
continue;
} else {
var temp__5735__auto___24198__$1 = cljs.core.seq(seq__23299_24186);
if(temp__5735__auto___24198__$1){
var seq__23299_24199__$1 = temp__5735__auto___24198__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23299_24199__$1)){
var c__4556__auto___24200 = cljs.core.chunk_first(seq__23299_24199__$1);
var G__24201 = cljs.core.chunk_rest(seq__23299_24199__$1);
var G__24202 = c__4556__auto___24200;
var G__24203 = cljs.core.count(c__4556__auto___24200);
var G__24204 = (0);
seq__23299_24186 = G__24201;
chunk__23300_24187 = G__24202;
count__23301_24188 = G__24203;
i__23302_24189 = G__24204;
continue;
} else {
var vec__23333_24205 = cljs.core.first(seq__23299_24199__$1);
var col_24206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23333_24205,(0),null);
var infos_24207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23333_24205,(1),null);
encode_cols(infos_24207,source_idx_24136,line_24184,col_24206);


var G__24208 = cljs.core.next(seq__23299_24199__$1);
var G__24209 = null;
var G__24210 = (0);
var G__24211 = (0);
seq__23299_24186 = G__24208;
chunk__23300_24187 = G__24209;
count__23301_24188 = G__24210;
i__23302_24189 = G__24211;
continue;
}
} else {
}
}
break;
}


var G__24213 = cljs.core.next(seq__23190_24177__$1);
var G__24214 = null;
var G__24216 = (0);
var G__24217 = (0);
seq__23190_24140 = G__24213;
chunk__23191_24141 = G__24214;
count__23192_24142 = G__24216;
i__23193_24143 = G__24217;
continue;
}
} else {
}
}
break;
}


var G__24218 = seq__22946_24131;
var G__24219 = chunk__22947_24132;
var G__24220 = count__22948_24133;
var G__24221 = (i__22949_24134 + (1));
seq__22946_24131 = G__24218;
chunk__22947_24132 = G__24219;
count__22948_24133 = G__24220;
i__22949_24134 = G__24221;
continue;
} else {
var temp__5735__auto___24222 = cljs.core.seq(seq__22946_24131);
if(temp__5735__auto___24222){
var seq__22946_24223__$1 = temp__5735__auto___24222;
if(cljs.core.chunked_seq_QMARK_(seq__22946_24223__$1)){
var c__4556__auto___24224 = cljs.core.chunk_first(seq__22946_24223__$1);
var G__24225 = cljs.core.chunk_rest(seq__22946_24223__$1);
var G__24226 = c__4556__auto___24224;
var G__24227 = cljs.core.count(c__4556__auto___24224);
var G__24228 = (0);
seq__22946_24131 = G__24225;
chunk__22947_24132 = G__24226;
count__22948_24133 = G__24227;
i__22949_24134 = G__24228;
continue;
} else {
var vec__23336_24229 = cljs.core.first(seq__22946_24223__$1);
var source_idx_24230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23336_24229,(0),null);
var vec__23339_24231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23336_24229,(1),null);
var __24232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23339_24231,(0),null);
var lines_24233__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23339_24231,(1),null);
var seq__23342_24234 = cljs.core.seq(lines_24233__$1);
var chunk__23343_24235 = null;
var count__23344_24236 = (0);
var i__23345_24237 = (0);
while(true){
if((i__23345_24237 < count__23344_24236)){
var vec__23384_24238 = chunk__23343_24235.cljs$core$IIndexed$_nth$arity$2(null,i__23345_24237);
var line_24239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23384_24238,(0),null);
var cols_24240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23384_24238,(1),null);
var seq__23387_24241 = cljs.core.seq(cols_24240);
var chunk__23388_24242 = null;
var count__23389_24243 = (0);
var i__23390_24244 = (0);
while(true){
if((i__23390_24244 < count__23389_24243)){
var vec__23402_24246 = chunk__23388_24242.cljs$core$IIndexed$_nth$arity$2(null,i__23390_24244);
var col_24247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23402_24246,(0),null);
var infos_24248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23402_24246,(1),null);
encode_cols(infos_24248,source_idx_24230,line_24239,col_24247);


var G__24249 = seq__23387_24241;
var G__24250 = chunk__23388_24242;
var G__24251 = count__23389_24243;
var G__24252 = (i__23390_24244 + (1));
seq__23387_24241 = G__24249;
chunk__23388_24242 = G__24250;
count__23389_24243 = G__24251;
i__23390_24244 = G__24252;
continue;
} else {
var temp__5735__auto___24253__$1 = cljs.core.seq(seq__23387_24241);
if(temp__5735__auto___24253__$1){
var seq__23387_24254__$1 = temp__5735__auto___24253__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23387_24254__$1)){
var c__4556__auto___24255 = cljs.core.chunk_first(seq__23387_24254__$1);
var G__24256 = cljs.core.chunk_rest(seq__23387_24254__$1);
var G__24257 = c__4556__auto___24255;
var G__24258 = cljs.core.count(c__4556__auto___24255);
var G__24259 = (0);
seq__23387_24241 = G__24256;
chunk__23388_24242 = G__24257;
count__23389_24243 = G__24258;
i__23390_24244 = G__24259;
continue;
} else {
var vec__23405_24260 = cljs.core.first(seq__23387_24254__$1);
var col_24261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23405_24260,(0),null);
var infos_24262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23405_24260,(1),null);
encode_cols(infos_24262,source_idx_24230,line_24239,col_24261);


var G__24263 = cljs.core.next(seq__23387_24254__$1);
var G__24264 = null;
var G__24265 = (0);
var G__24266 = (0);
seq__23387_24241 = G__24263;
chunk__23388_24242 = G__24264;
count__23389_24243 = G__24265;
i__23390_24244 = G__24266;
continue;
}
} else {
}
}
break;
}


var G__24267 = seq__23342_24234;
var G__24268 = chunk__23343_24235;
var G__24269 = count__23344_24236;
var G__24270 = (i__23345_24237 + (1));
seq__23342_24234 = G__24267;
chunk__23343_24235 = G__24268;
count__23344_24236 = G__24269;
i__23345_24237 = G__24270;
continue;
} else {
var temp__5735__auto___24271__$1 = cljs.core.seq(seq__23342_24234);
if(temp__5735__auto___24271__$1){
var seq__23342_24272__$1 = temp__5735__auto___24271__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23342_24272__$1)){
var c__4556__auto___24273 = cljs.core.chunk_first(seq__23342_24272__$1);
var G__24274 = cljs.core.chunk_rest(seq__23342_24272__$1);
var G__24275 = c__4556__auto___24273;
var G__24276 = cljs.core.count(c__4556__auto___24273);
var G__24277 = (0);
seq__23342_24234 = G__24274;
chunk__23343_24235 = G__24275;
count__23344_24236 = G__24276;
i__23345_24237 = G__24277;
continue;
} else {
var vec__23408_24278 = cljs.core.first(seq__23342_24272__$1);
var line_24279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23408_24278,(0),null);
var cols_24280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23408_24278,(1),null);
var seq__23411_24281 = cljs.core.seq(cols_24280);
var chunk__23412_24282 = null;
var count__23413_24283 = (0);
var i__23414_24284 = (0);
while(true){
if((i__23414_24284 < count__23413_24283)){
var vec__23421_24285 = chunk__23412_24282.cljs$core$IIndexed$_nth$arity$2(null,i__23414_24284);
var col_24286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23421_24285,(0),null);
var infos_24287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23421_24285,(1),null);
encode_cols(infos_24287,source_idx_24230,line_24279,col_24286);


var G__24288 = seq__23411_24281;
var G__24289 = chunk__23412_24282;
var G__24290 = count__23413_24283;
var G__24291 = (i__23414_24284 + (1));
seq__23411_24281 = G__24288;
chunk__23412_24282 = G__24289;
count__23413_24283 = G__24290;
i__23414_24284 = G__24291;
continue;
} else {
var temp__5735__auto___24292__$2 = cljs.core.seq(seq__23411_24281);
if(temp__5735__auto___24292__$2){
var seq__23411_24293__$1 = temp__5735__auto___24292__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23411_24293__$1)){
var c__4556__auto___24294 = cljs.core.chunk_first(seq__23411_24293__$1);
var G__24295 = cljs.core.chunk_rest(seq__23411_24293__$1);
var G__24296 = c__4556__auto___24294;
var G__24297 = cljs.core.count(c__4556__auto___24294);
var G__24298 = (0);
seq__23411_24281 = G__24295;
chunk__23412_24282 = G__24296;
count__23413_24283 = G__24297;
i__23414_24284 = G__24298;
continue;
} else {
var vec__23424_24299 = cljs.core.first(seq__23411_24293__$1);
var col_24300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23424_24299,(0),null);
var infos_24301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23424_24299,(1),null);
encode_cols(infos_24301,source_idx_24230,line_24279,col_24300);


var G__24302 = cljs.core.next(seq__23411_24293__$1);
var G__24303 = null;
var G__24304 = (0);
var G__24305 = (0);
seq__23411_24281 = G__24302;
chunk__23412_24282 = G__24303;
count__23413_24283 = G__24304;
i__23414_24284 = G__24305;
continue;
}
} else {
}
}
break;
}


var G__24306 = cljs.core.next(seq__23342_24272__$1);
var G__24307 = null;
var G__24308 = (0);
var G__24309 = (0);
seq__23342_24234 = G__24306;
chunk__23343_24235 = G__24307;
count__23344_24236 = G__24308;
i__23345_24237 = G__24309;
continue;
}
} else {
}
}
break;
}


var G__24310 = cljs.core.next(seq__22946_24223__$1);
var G__24311 = null;
var G__24312 = (0);
var G__24313 = (0);
seq__22946_24131 = G__24310;
chunk__22947_24132 = G__24311;
count__22948_24133 = G__24312;
i__22949_24134 = G__24313;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__23427 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__22897_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22897_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__22898_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__22898_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22899_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__22899_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__23433 = G__23427;
goog.object.set(G__23433,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__23433;
} else {
return G__23427;
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
var vec__23434 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23434,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23434,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__23437 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23437,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23437,(1),null);
var G__24314 = cljs.core.next(col_map_seq);
var G__24315 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__23437,col,infos,vec__23434,line,col_map){
return (function (v,p__23440){
var map__23441 = p__23440;
var map__23441__$1 = (((((!((map__23441 == null))))?(((((map__23441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23441):map__23441);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23441__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23441__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__23437,col,infos,vec__23434,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__24314;
new_cols = G__24315;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__24316 = cljs.core.next(line_map_seq);
var G__24317 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__24316;
new_lines = G__24317;
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
var seq__23443_24318 = cljs.core.seq(reverse_map);
var chunk__23444_24319 = null;
var count__23445_24320 = (0);
var i__23446_24321 = (0);
while(true){
if((i__23446_24321 < count__23445_24320)){
var vec__23800_24322 = chunk__23444_24319.cljs$core$IIndexed$_nth$arity$2(null,i__23446_24321);
var line_24323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23800_24322,(0),null);
var columns_24324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23800_24322,(1),null);
var seq__23803_24325 = cljs.core.seq(columns_24324);
var chunk__23804_24326 = null;
var count__23805_24327 = (0);
var i__23806_24328 = (0);
while(true){
if((i__23806_24328 < count__23805_24327)){
var vec__23860_24329 = chunk__23804_24326.cljs$core$IIndexed$_nth$arity$2(null,i__23806_24328);
var column_24330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23860_24329,(0),null);
var column_info_24331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23860_24329,(1),null);
var seq__23863_24332 = cljs.core.seq(column_info_24331);
var chunk__23864_24333 = null;
var count__23865_24334 = (0);
var i__23866_24335 = (0);
while(true){
if((i__23866_24335 < count__23865_24334)){
var map__23883_24336 = chunk__23864_24333.cljs$core$IIndexed$_nth$arity$2(null,i__23866_24335);
var map__23883_24337__$1 = (((((!((map__23883_24336 == null))))?(((((map__23883_24336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23883_24336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23883_24336):map__23883_24336);
var gline_24338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23883_24337__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23883_24337__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23883_24337__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24338], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23863_24332,chunk__23864_24333,count__23865_24334,i__23866_24335,seq__23803_24325,chunk__23804_24326,count__23805_24327,i__23806_24328,seq__23443_24318,chunk__23444_24319,count__23445_24320,i__23446_24321,map__23883_24336,map__23883_24337__$1,gline_24338,gcol_24339,name_24340,vec__23860_24329,column_24330,column_info_24331,vec__23800_24322,line_24323,columns_24324,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24339], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24323,new cljs.core.Keyword(null,"col","col",-1959363084),column_24330,new cljs.core.Keyword(null,"name","name",1843675177),name_24340], null));
});})(seq__23863_24332,chunk__23864_24333,count__23865_24334,i__23866_24335,seq__23803_24325,chunk__23804_24326,count__23805_24327,i__23806_24328,seq__23443_24318,chunk__23444_24319,count__23445_24320,i__23446_24321,map__23883_24336,map__23883_24337__$1,gline_24338,gcol_24339,name_24340,vec__23860_24329,column_24330,column_info_24331,vec__23800_24322,line_24323,columns_24324,inverted))
,cljs.core.sorted_map()));


var G__24341 = seq__23863_24332;
var G__24342 = chunk__23864_24333;
var G__24343 = count__23865_24334;
var G__24344 = (i__23866_24335 + (1));
seq__23863_24332 = G__24341;
chunk__23864_24333 = G__24342;
count__23865_24334 = G__24343;
i__23866_24335 = G__24344;
continue;
} else {
var temp__5735__auto___24346 = cljs.core.seq(seq__23863_24332);
if(temp__5735__auto___24346){
var seq__23863_24347__$1 = temp__5735__auto___24346;
if(cljs.core.chunked_seq_QMARK_(seq__23863_24347__$1)){
var c__4556__auto___24348 = cljs.core.chunk_first(seq__23863_24347__$1);
var G__24349 = cljs.core.chunk_rest(seq__23863_24347__$1);
var G__24350 = c__4556__auto___24348;
var G__24351 = cljs.core.count(c__4556__auto___24348);
var G__24352 = (0);
seq__23863_24332 = G__24349;
chunk__23864_24333 = G__24350;
count__23865_24334 = G__24351;
i__23866_24335 = G__24352;
continue;
} else {
var map__23887_24353 = cljs.core.first(seq__23863_24347__$1);
var map__23887_24354__$1 = (((((!((map__23887_24353 == null))))?(((((map__23887_24353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23887_24353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23887_24353):map__23887_24353);
var gline_24355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23887_24354__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23887_24354__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23887_24354__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24355], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23863_24332,chunk__23864_24333,count__23865_24334,i__23866_24335,seq__23803_24325,chunk__23804_24326,count__23805_24327,i__23806_24328,seq__23443_24318,chunk__23444_24319,count__23445_24320,i__23446_24321,map__23887_24353,map__23887_24354__$1,gline_24355,gcol_24356,name_24357,seq__23863_24347__$1,temp__5735__auto___24346,vec__23860_24329,column_24330,column_info_24331,vec__23800_24322,line_24323,columns_24324,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24356], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24323,new cljs.core.Keyword(null,"col","col",-1959363084),column_24330,new cljs.core.Keyword(null,"name","name",1843675177),name_24357], null));
});})(seq__23863_24332,chunk__23864_24333,count__23865_24334,i__23866_24335,seq__23803_24325,chunk__23804_24326,count__23805_24327,i__23806_24328,seq__23443_24318,chunk__23444_24319,count__23445_24320,i__23446_24321,map__23887_24353,map__23887_24354__$1,gline_24355,gcol_24356,name_24357,seq__23863_24347__$1,temp__5735__auto___24346,vec__23860_24329,column_24330,column_info_24331,vec__23800_24322,line_24323,columns_24324,inverted))
,cljs.core.sorted_map()));


var G__24359 = cljs.core.next(seq__23863_24347__$1);
var G__24360 = null;
var G__24361 = (0);
var G__24362 = (0);
seq__23863_24332 = G__24359;
chunk__23864_24333 = G__24360;
count__23865_24334 = G__24361;
i__23866_24335 = G__24362;
continue;
}
} else {
}
}
break;
}


var G__24363 = seq__23803_24325;
var G__24364 = chunk__23804_24326;
var G__24365 = count__23805_24327;
var G__24366 = (i__23806_24328 + (1));
seq__23803_24325 = G__24363;
chunk__23804_24326 = G__24364;
count__23805_24327 = G__24365;
i__23806_24328 = G__24366;
continue;
} else {
var temp__5735__auto___24367 = cljs.core.seq(seq__23803_24325);
if(temp__5735__auto___24367){
var seq__23803_24368__$1 = temp__5735__auto___24367;
if(cljs.core.chunked_seq_QMARK_(seq__23803_24368__$1)){
var c__4556__auto___24369 = cljs.core.chunk_first(seq__23803_24368__$1);
var G__24370 = cljs.core.chunk_rest(seq__23803_24368__$1);
var G__24371 = c__4556__auto___24369;
var G__24372 = cljs.core.count(c__4556__auto___24369);
var G__24373 = (0);
seq__23803_24325 = G__24370;
chunk__23804_24326 = G__24371;
count__23805_24327 = G__24372;
i__23806_24328 = G__24373;
continue;
} else {
var vec__23893_24374 = cljs.core.first(seq__23803_24368__$1);
var column_24375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23893_24374,(0),null);
var column_info_24376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23893_24374,(1),null);
var seq__23896_24377 = cljs.core.seq(column_info_24376);
var chunk__23897_24378 = null;
var count__23898_24379 = (0);
var i__23899_24380 = (0);
while(true){
if((i__23899_24380 < count__23898_24379)){
var map__23931_24381 = chunk__23897_24378.cljs$core$IIndexed$_nth$arity$2(null,i__23899_24380);
var map__23931_24382__$1 = (((((!((map__23931_24381 == null))))?(((((map__23931_24381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23931_24381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23931_24381):map__23931_24381);
var gline_24383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23931_24382__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23931_24382__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23931_24382__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24383], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23896_24377,chunk__23897_24378,count__23898_24379,i__23899_24380,seq__23803_24325,chunk__23804_24326,count__23805_24327,i__23806_24328,seq__23443_24318,chunk__23444_24319,count__23445_24320,i__23446_24321,map__23931_24381,map__23931_24382__$1,gline_24383,gcol_24384,name_24385,vec__23893_24374,column_24375,column_info_24376,seq__23803_24368__$1,temp__5735__auto___24367,vec__23800_24322,line_24323,columns_24324,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24384], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24323,new cljs.core.Keyword(null,"col","col",-1959363084),column_24375,new cljs.core.Keyword(null,"name","name",1843675177),name_24385], null));
});})(seq__23896_24377,chunk__23897_24378,count__23898_24379,i__23899_24380,seq__23803_24325,chunk__23804_24326,count__23805_24327,i__23806_24328,seq__23443_24318,chunk__23444_24319,count__23445_24320,i__23446_24321,map__23931_24381,map__23931_24382__$1,gline_24383,gcol_24384,name_24385,vec__23893_24374,column_24375,column_info_24376,seq__23803_24368__$1,temp__5735__auto___24367,vec__23800_24322,line_24323,columns_24324,inverted))
,cljs.core.sorted_map()));


var G__24386 = seq__23896_24377;
var G__24387 = chunk__23897_24378;
var G__24388 = count__23898_24379;
var G__24389 = (i__23899_24380 + (1));
seq__23896_24377 = G__24386;
chunk__23897_24378 = G__24387;
count__23898_24379 = G__24388;
i__23899_24380 = G__24389;
continue;
} else {
var temp__5735__auto___24390__$1 = cljs.core.seq(seq__23896_24377);
if(temp__5735__auto___24390__$1){
var seq__23896_24391__$1 = temp__5735__auto___24390__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23896_24391__$1)){
var c__4556__auto___24392 = cljs.core.chunk_first(seq__23896_24391__$1);
var G__24393 = cljs.core.chunk_rest(seq__23896_24391__$1);
var G__24394 = c__4556__auto___24392;
var G__24395 = cljs.core.count(c__4556__auto___24392);
var G__24396 = (0);
seq__23896_24377 = G__24393;
chunk__23897_24378 = G__24394;
count__23898_24379 = G__24395;
i__23899_24380 = G__24396;
continue;
} else {
var map__23935_24397 = cljs.core.first(seq__23896_24391__$1);
var map__23935_24398__$1 = (((((!((map__23935_24397 == null))))?(((((map__23935_24397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23935_24397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23935_24397):map__23935_24397);
var gline_24399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23935_24398__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23935_24398__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23935_24398__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24399], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23896_24377,chunk__23897_24378,count__23898_24379,i__23899_24380,seq__23803_24325,chunk__23804_24326,count__23805_24327,i__23806_24328,seq__23443_24318,chunk__23444_24319,count__23445_24320,i__23446_24321,map__23935_24397,map__23935_24398__$1,gline_24399,gcol_24400,name_24401,seq__23896_24391__$1,temp__5735__auto___24390__$1,vec__23893_24374,column_24375,column_info_24376,seq__23803_24368__$1,temp__5735__auto___24367,vec__23800_24322,line_24323,columns_24324,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24400], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24323,new cljs.core.Keyword(null,"col","col",-1959363084),column_24375,new cljs.core.Keyword(null,"name","name",1843675177),name_24401], null));
});})(seq__23896_24377,chunk__23897_24378,count__23898_24379,i__23899_24380,seq__23803_24325,chunk__23804_24326,count__23805_24327,i__23806_24328,seq__23443_24318,chunk__23444_24319,count__23445_24320,i__23446_24321,map__23935_24397,map__23935_24398__$1,gline_24399,gcol_24400,name_24401,seq__23896_24391__$1,temp__5735__auto___24390__$1,vec__23893_24374,column_24375,column_info_24376,seq__23803_24368__$1,temp__5735__auto___24367,vec__23800_24322,line_24323,columns_24324,inverted))
,cljs.core.sorted_map()));


var G__24402 = cljs.core.next(seq__23896_24391__$1);
var G__24403 = null;
var G__24404 = (0);
var G__24405 = (0);
seq__23896_24377 = G__24402;
chunk__23897_24378 = G__24403;
count__23898_24379 = G__24404;
i__23899_24380 = G__24405;
continue;
}
} else {
}
}
break;
}


var G__24406 = cljs.core.next(seq__23803_24368__$1);
var G__24407 = null;
var G__24408 = (0);
var G__24409 = (0);
seq__23803_24325 = G__24406;
chunk__23804_24326 = G__24407;
count__23805_24327 = G__24408;
i__23806_24328 = G__24409;
continue;
}
} else {
}
}
break;
}


var G__24410 = seq__23443_24318;
var G__24411 = chunk__23444_24319;
var G__24412 = count__23445_24320;
var G__24413 = (i__23446_24321 + (1));
seq__23443_24318 = G__24410;
chunk__23444_24319 = G__24411;
count__23445_24320 = G__24412;
i__23446_24321 = G__24413;
continue;
} else {
var temp__5735__auto___24414 = cljs.core.seq(seq__23443_24318);
if(temp__5735__auto___24414){
var seq__23443_24415__$1 = temp__5735__auto___24414;
if(cljs.core.chunked_seq_QMARK_(seq__23443_24415__$1)){
var c__4556__auto___24416 = cljs.core.chunk_first(seq__23443_24415__$1);
var G__24417 = cljs.core.chunk_rest(seq__23443_24415__$1);
var G__24418 = c__4556__auto___24416;
var G__24419 = cljs.core.count(c__4556__auto___24416);
var G__24420 = (0);
seq__23443_24318 = G__24417;
chunk__23444_24319 = G__24418;
count__23445_24320 = G__24419;
i__23446_24321 = G__24420;
continue;
} else {
var vec__23938_24421 = cljs.core.first(seq__23443_24415__$1);
var line_24422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23938_24421,(0),null);
var columns_24423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23938_24421,(1),null);
var seq__23941_24424 = cljs.core.seq(columns_24423);
var chunk__23942_24425 = null;
var count__23943_24426 = (0);
var i__23944_24427 = (0);
while(true){
if((i__23944_24427 < count__23943_24426)){
var vec__24015_24428 = chunk__23942_24425.cljs$core$IIndexed$_nth$arity$2(null,i__23944_24427);
var column_24429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24015_24428,(0),null);
var column_info_24430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24015_24428,(1),null);
var seq__24018_24431 = cljs.core.seq(column_info_24430);
var chunk__24019_24432 = null;
var count__24020_24433 = (0);
var i__24021_24434 = (0);
while(true){
if((i__24021_24434 < count__24020_24433)){
var map__24026_24435 = chunk__24019_24432.cljs$core$IIndexed$_nth$arity$2(null,i__24021_24434);
var map__24026_24436__$1 = (((((!((map__24026_24435 == null))))?(((((map__24026_24435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24026_24435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24026_24435):map__24026_24435);
var gline_24437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24026_24436__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24026_24436__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24026_24436__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24437], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__24018_24431,chunk__24019_24432,count__24020_24433,i__24021_24434,seq__23941_24424,chunk__23942_24425,count__23943_24426,i__23944_24427,seq__23443_24318,chunk__23444_24319,count__23445_24320,i__23446_24321,map__24026_24435,map__24026_24436__$1,gline_24437,gcol_24438,name_24439,vec__24015_24428,column_24429,column_info_24430,vec__23938_24421,line_24422,columns_24423,seq__23443_24415__$1,temp__5735__auto___24414,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24438], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24422,new cljs.core.Keyword(null,"col","col",-1959363084),column_24429,new cljs.core.Keyword(null,"name","name",1843675177),name_24439], null));
});})(seq__24018_24431,chunk__24019_24432,count__24020_24433,i__24021_24434,seq__23941_24424,chunk__23942_24425,count__23943_24426,i__23944_24427,seq__23443_24318,chunk__23444_24319,count__23445_24320,i__23446_24321,map__24026_24435,map__24026_24436__$1,gline_24437,gcol_24438,name_24439,vec__24015_24428,column_24429,column_info_24430,vec__23938_24421,line_24422,columns_24423,seq__23443_24415__$1,temp__5735__auto___24414,inverted))
,cljs.core.sorted_map()));


var G__24440 = seq__24018_24431;
var G__24441 = chunk__24019_24432;
var G__24442 = count__24020_24433;
var G__24443 = (i__24021_24434 + (1));
seq__24018_24431 = G__24440;
chunk__24019_24432 = G__24441;
count__24020_24433 = G__24442;
i__24021_24434 = G__24443;
continue;
} else {
var temp__5735__auto___24444__$1 = cljs.core.seq(seq__24018_24431);
if(temp__5735__auto___24444__$1){
var seq__24018_24445__$1 = temp__5735__auto___24444__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24018_24445__$1)){
var c__4556__auto___24446 = cljs.core.chunk_first(seq__24018_24445__$1);
var G__24447 = cljs.core.chunk_rest(seq__24018_24445__$1);
var G__24448 = c__4556__auto___24446;
var G__24449 = cljs.core.count(c__4556__auto___24446);
var G__24450 = (0);
seq__24018_24431 = G__24447;
chunk__24019_24432 = G__24448;
count__24020_24433 = G__24449;
i__24021_24434 = G__24450;
continue;
} else {
var map__24028_24451 = cljs.core.first(seq__24018_24445__$1);
var map__24028_24452__$1 = (((((!((map__24028_24451 == null))))?(((((map__24028_24451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24028_24451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24028_24451):map__24028_24451);
var gline_24453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24028_24452__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24028_24452__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24028_24452__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24453], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__24018_24431,chunk__24019_24432,count__24020_24433,i__24021_24434,seq__23941_24424,chunk__23942_24425,count__23943_24426,i__23944_24427,seq__23443_24318,chunk__23444_24319,count__23445_24320,i__23446_24321,map__24028_24451,map__24028_24452__$1,gline_24453,gcol_24454,name_24455,seq__24018_24445__$1,temp__5735__auto___24444__$1,vec__24015_24428,column_24429,column_info_24430,vec__23938_24421,line_24422,columns_24423,seq__23443_24415__$1,temp__5735__auto___24414,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24454], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24422,new cljs.core.Keyword(null,"col","col",-1959363084),column_24429,new cljs.core.Keyword(null,"name","name",1843675177),name_24455], null));
});})(seq__24018_24431,chunk__24019_24432,count__24020_24433,i__24021_24434,seq__23941_24424,chunk__23942_24425,count__23943_24426,i__23944_24427,seq__23443_24318,chunk__23444_24319,count__23445_24320,i__23446_24321,map__24028_24451,map__24028_24452__$1,gline_24453,gcol_24454,name_24455,seq__24018_24445__$1,temp__5735__auto___24444__$1,vec__24015_24428,column_24429,column_info_24430,vec__23938_24421,line_24422,columns_24423,seq__23443_24415__$1,temp__5735__auto___24414,inverted))
,cljs.core.sorted_map()));


var G__24456 = cljs.core.next(seq__24018_24445__$1);
var G__24457 = null;
var G__24458 = (0);
var G__24459 = (0);
seq__24018_24431 = G__24456;
chunk__24019_24432 = G__24457;
count__24020_24433 = G__24458;
i__24021_24434 = G__24459;
continue;
}
} else {
}
}
break;
}


var G__24460 = seq__23941_24424;
var G__24461 = chunk__23942_24425;
var G__24462 = count__23943_24426;
var G__24463 = (i__23944_24427 + (1));
seq__23941_24424 = G__24460;
chunk__23942_24425 = G__24461;
count__23943_24426 = G__24462;
i__23944_24427 = G__24463;
continue;
} else {
var temp__5735__auto___24465__$1 = cljs.core.seq(seq__23941_24424);
if(temp__5735__auto___24465__$1){
var seq__23941_24466__$1 = temp__5735__auto___24465__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23941_24466__$1)){
var c__4556__auto___24467 = cljs.core.chunk_first(seq__23941_24466__$1);
var G__24468 = cljs.core.chunk_rest(seq__23941_24466__$1);
var G__24469 = c__4556__auto___24467;
var G__24470 = cljs.core.count(c__4556__auto___24467);
var G__24471 = (0);
seq__23941_24424 = G__24468;
chunk__23942_24425 = G__24469;
count__23943_24426 = G__24470;
i__23944_24427 = G__24471;
continue;
} else {
var vec__24030_24472 = cljs.core.first(seq__23941_24466__$1);
var column_24473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24030_24472,(0),null);
var column_info_24474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24030_24472,(1),null);
var seq__24033_24475 = cljs.core.seq(column_info_24474);
var chunk__24034_24476 = null;
var count__24035_24477 = (0);
var i__24036_24478 = (0);
while(true){
if((i__24036_24478 < count__24035_24477)){
var map__24042_24479 = chunk__24034_24476.cljs$core$IIndexed$_nth$arity$2(null,i__24036_24478);
var map__24042_24480__$1 = (((((!((map__24042_24479 == null))))?(((((map__24042_24479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24042_24479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24042_24479):map__24042_24479);
var gline_24481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24042_24480__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24042_24480__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24042_24480__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24481], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__24033_24475,chunk__24034_24476,count__24035_24477,i__24036_24478,seq__23941_24424,chunk__23942_24425,count__23943_24426,i__23944_24427,seq__23443_24318,chunk__23444_24319,count__23445_24320,i__23446_24321,map__24042_24479,map__24042_24480__$1,gline_24481,gcol_24482,name_24483,vec__24030_24472,column_24473,column_info_24474,seq__23941_24466__$1,temp__5735__auto___24465__$1,vec__23938_24421,line_24422,columns_24423,seq__23443_24415__$1,temp__5735__auto___24414,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24482], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24422,new cljs.core.Keyword(null,"col","col",-1959363084),column_24473,new cljs.core.Keyword(null,"name","name",1843675177),name_24483], null));
});})(seq__24033_24475,chunk__24034_24476,count__24035_24477,i__24036_24478,seq__23941_24424,chunk__23942_24425,count__23943_24426,i__23944_24427,seq__23443_24318,chunk__23444_24319,count__23445_24320,i__23446_24321,map__24042_24479,map__24042_24480__$1,gline_24481,gcol_24482,name_24483,vec__24030_24472,column_24473,column_info_24474,seq__23941_24466__$1,temp__5735__auto___24465__$1,vec__23938_24421,line_24422,columns_24423,seq__23443_24415__$1,temp__5735__auto___24414,inverted))
,cljs.core.sorted_map()));


var G__24492 = seq__24033_24475;
var G__24493 = chunk__24034_24476;
var G__24494 = count__24035_24477;
var G__24495 = (i__24036_24478 + (1));
seq__24033_24475 = G__24492;
chunk__24034_24476 = G__24493;
count__24035_24477 = G__24494;
i__24036_24478 = G__24495;
continue;
} else {
var temp__5735__auto___24496__$2 = cljs.core.seq(seq__24033_24475);
if(temp__5735__auto___24496__$2){
var seq__24033_24497__$1 = temp__5735__auto___24496__$2;
if(cljs.core.chunked_seq_QMARK_(seq__24033_24497__$1)){
var c__4556__auto___24502 = cljs.core.chunk_first(seq__24033_24497__$1);
var G__24503 = cljs.core.chunk_rest(seq__24033_24497__$1);
var G__24504 = c__4556__auto___24502;
var G__24505 = cljs.core.count(c__4556__auto___24502);
var G__24506 = (0);
seq__24033_24475 = G__24503;
chunk__24034_24476 = G__24504;
count__24035_24477 = G__24505;
i__24036_24478 = G__24506;
continue;
} else {
var map__24046_24507 = cljs.core.first(seq__24033_24497__$1);
var map__24046_24508__$1 = (((((!((map__24046_24507 == null))))?(((((map__24046_24507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24046_24507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24046_24507):map__24046_24507);
var gline_24509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24046_24508__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24046_24508__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24046_24508__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24509], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__24033_24475,chunk__24034_24476,count__24035_24477,i__24036_24478,seq__23941_24424,chunk__23942_24425,count__23943_24426,i__23944_24427,seq__23443_24318,chunk__23444_24319,count__23445_24320,i__23446_24321,map__24046_24507,map__24046_24508__$1,gline_24509,gcol_24510,name_24511,seq__24033_24497__$1,temp__5735__auto___24496__$2,vec__24030_24472,column_24473,column_info_24474,seq__23941_24466__$1,temp__5735__auto___24465__$1,vec__23938_24421,line_24422,columns_24423,seq__23443_24415__$1,temp__5735__auto___24414,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24510], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24422,new cljs.core.Keyword(null,"col","col",-1959363084),column_24473,new cljs.core.Keyword(null,"name","name",1843675177),name_24511], null));
});})(seq__24033_24475,chunk__24034_24476,count__24035_24477,i__24036_24478,seq__23941_24424,chunk__23942_24425,count__23943_24426,i__23944_24427,seq__23443_24318,chunk__23444_24319,count__23445_24320,i__23446_24321,map__24046_24507,map__24046_24508__$1,gline_24509,gcol_24510,name_24511,seq__24033_24497__$1,temp__5735__auto___24496__$2,vec__24030_24472,column_24473,column_info_24474,seq__23941_24466__$1,temp__5735__auto___24465__$1,vec__23938_24421,line_24422,columns_24423,seq__23443_24415__$1,temp__5735__auto___24414,inverted))
,cljs.core.sorted_map()));


var G__24513 = cljs.core.next(seq__24033_24497__$1);
var G__24514 = null;
var G__24515 = (0);
var G__24516 = (0);
seq__24033_24475 = G__24513;
chunk__24034_24476 = G__24514;
count__24035_24477 = G__24515;
i__24036_24478 = G__24516;
continue;
}
} else {
}
}
break;
}


var G__24517 = cljs.core.next(seq__23941_24466__$1);
var G__24518 = null;
var G__24519 = (0);
var G__24520 = (0);
seq__23941_24424 = G__24517;
chunk__23942_24425 = G__24518;
count__23943_24426 = G__24519;
i__23944_24427 = G__24520;
continue;
}
} else {
}
}
break;
}


var G__24522 = cljs.core.next(seq__23443_24415__$1);
var G__24523 = null;
var G__24524 = (0);
var G__24525 = (0);
seq__23443_24318 = G__24522;
chunk__23444_24319 = G__24523;
count__23445_24320 = G__24524;
i__23446_24321 = G__24525;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
