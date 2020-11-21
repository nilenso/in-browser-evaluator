goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__22571){
var vec__22572 = p__22571;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22572,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22572,(1),null);
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
var vec__22575 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22575,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22575,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22575,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22575,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22575,(4),null);
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
var vec__22583 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22583,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22583,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22583,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22583,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22583,(4),null);
var vec__22586 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22586,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22586,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22586,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22586,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22586,(4),null);
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
var map__22589 = segmap;
var map__22589__$1 = (((((!((map__22589 == null))))?(((((map__22589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22589):map__22589);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22589__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22589__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22589__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22589__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22589__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__22592 = arguments.length;
switch (G__22592) {
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
var vec__22599 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__23874 = cljs.core.next(segs__$1);
var G__23875 = nrelseg;
var G__23876 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23874;
relseg__$1 = G__23875;
result__$1 = G__23876;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22599,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22599,(1),null);
var G__23896 = (gline + (1));
var G__23897 = cljs.core.next(lines__$1);
var G__23898 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23899 = result__$1;
gline = G__23896;
lines__$1 = G__23897;
relseg = G__23898;
result = G__23899;
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
var map__22603 = segmap;
var map__22603__$1 = (((((!((map__22603 == null))))?(((((map__22603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22603):map__22603);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22603__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22603__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22603__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22603__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22603__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__22602_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__22602_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__22613 = arguments.length;
switch (G__22613) {
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
var G__23910 = cljs.core.next(segs__$1);
var G__23911 = nrelseg;
var G__23912 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23910;
relseg__$1 = G__23911;
result__$1 = G__23912;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22617,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22617,(1),null);
var G__23914 = (gline + (1));
var G__23915 = cljs.core.next(lines__$1);
var G__23916 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23917 = result__$1;
gline = G__23914;
lines__$1 = G__23915;
relseg = G__23916;
result = G__23917;
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
var vec__22629 = p__22624;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22629,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22629,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22629,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22629,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22629,(4),null);
var seg = vec__22629;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__22632){
var vec__22633 = p__22632;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22633,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22633,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22633,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22633,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22633,(4),null);
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
var segv_23925 = info__GT_segv(info,source_idx,line,col);
var gline_23926 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23927 = cljs.core.count(cljs.core.deref(lines));
if((gline_23926 > (lc_23927 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22639,chunk__22640,count__22641,i__22642,segv_23925,gline_23926,lc_23927,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23926 - (lc_23927 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23925], null));
});})(seq__22639,chunk__22640,count__22641,i__22642,segv_23925,gline_23926,lc_23927,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22639,chunk__22640,count__22641,i__22642,segv_23925,gline_23926,lc_23927,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23926], null),cljs.core.conj,segv_23925);
});})(seq__22639,chunk__22640,count__22641,i__22642,segv_23925,gline_23926,lc_23927,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23928 = seq__22639;
var G__23929 = chunk__22640;
var G__23930 = count__22641;
var G__23931 = (i__22642 + (1));
seq__22639 = G__23928;
chunk__22640 = G__23929;
count__22641 = G__23930;
i__22642 = G__23931;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__22639);
if(temp__5735__auto__){
var seq__22639__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22639__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__22639__$1);
var G__23932 = cljs.core.chunk_rest(seq__22639__$1);
var G__23933 = c__4556__auto__;
var G__23934 = cljs.core.count(c__4556__auto__);
var G__23935 = (0);
seq__22639 = G__23932;
chunk__22640 = G__23933;
count__22641 = G__23934;
i__22642 = G__23935;
continue;
} else {
var info = cljs.core.first(seq__22639__$1);
var segv_23937 = info__GT_segv(info,source_idx,line,col);
var gline_23938 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23939 = cljs.core.count(cljs.core.deref(lines));
if((gline_23938 > (lc_23939 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22639,chunk__22640,count__22641,i__22642,segv_23937,gline_23938,lc_23939,info,seq__22639__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23938 - (lc_23939 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23937], null));
});})(seq__22639,chunk__22640,count__22641,i__22642,segv_23937,gline_23938,lc_23939,info,seq__22639__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22639,chunk__22640,count__22641,i__22642,segv_23937,gline_23938,lc_23939,info,seq__22639__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23938], null),cljs.core.conj,segv_23937);
});})(seq__22639,chunk__22640,count__22641,i__22642,segv_23937,gline_23938,lc_23939,info,seq__22639__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23946 = cljs.core.next(seq__22639__$1);
var G__23947 = null;
var G__23948 = (0);
var G__23949 = (0);
seq__22639 = G__23946;
chunk__22640 = G__23947;
count__22641 = G__23948;
i__22642 = G__23949;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__22643_23950 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__22644_23951 = null;
var count__22645_23952 = (0);
var i__22646_23953 = (0);
while(true){
if((i__22646_23953 < count__22645_23952)){
var vec__22861_23956 = chunk__22644_23951.cljs$core$IIndexed$_nth$arity$2(null,i__22646_23953);
var source_idx_23957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22861_23956,(0),null);
var vec__22864_23958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22861_23956,(1),null);
var __23959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22864_23958,(0),null);
var lines_23960__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22864_23958,(1),null);
var seq__22867_23961 = cljs.core.seq(lines_23960__$1);
var chunk__22868_23962 = null;
var count__22869_23963 = (0);
var i__22870_23964 = (0);
while(true){
if((i__22870_23964 < count__22869_23963)){
var vec__22937_23965 = chunk__22868_23962.cljs$core$IIndexed$_nth$arity$2(null,i__22870_23964);
var line_23966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22937_23965,(0),null);
var cols_23967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22937_23965,(1),null);
var seq__22940_23968 = cljs.core.seq(cols_23967);
var chunk__22941_23969 = null;
var count__22942_23970 = (0);
var i__22943_23971 = (0);
while(true){
if((i__22943_23971 < count__22942_23970)){
var vec__22962_23972 = chunk__22941_23969.cljs$core$IIndexed$_nth$arity$2(null,i__22943_23971);
var col_23973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22962_23972,(0),null);
var infos_23974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22962_23972,(1),null);
encode_cols(infos_23974,source_idx_23957,line_23966,col_23973);


var G__23975 = seq__22940_23968;
var G__23976 = chunk__22941_23969;
var G__23977 = count__22942_23970;
var G__23978 = (i__22943_23971 + (1));
seq__22940_23968 = G__23975;
chunk__22941_23969 = G__23976;
count__22942_23970 = G__23977;
i__22943_23971 = G__23978;
continue;
} else {
var temp__5735__auto___23979 = cljs.core.seq(seq__22940_23968);
if(temp__5735__auto___23979){
var seq__22940_23980__$1 = temp__5735__auto___23979;
if(cljs.core.chunked_seq_QMARK_(seq__22940_23980__$1)){
var c__4556__auto___23981 = cljs.core.chunk_first(seq__22940_23980__$1);
var G__23982 = cljs.core.chunk_rest(seq__22940_23980__$1);
var G__23983 = c__4556__auto___23981;
var G__23984 = cljs.core.count(c__4556__auto___23981);
var G__23985 = (0);
seq__22940_23968 = G__23982;
chunk__22941_23969 = G__23983;
count__22942_23970 = G__23984;
i__22943_23971 = G__23985;
continue;
} else {
var vec__22965_23986 = cljs.core.first(seq__22940_23980__$1);
var col_23987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22965_23986,(0),null);
var infos_23988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22965_23986,(1),null);
encode_cols(infos_23988,source_idx_23957,line_23966,col_23987);


var G__23989 = cljs.core.next(seq__22940_23980__$1);
var G__23990 = null;
var G__23991 = (0);
var G__23992 = (0);
seq__22940_23968 = G__23989;
chunk__22941_23969 = G__23990;
count__22942_23970 = G__23991;
i__22943_23971 = G__23992;
continue;
}
} else {
}
}
break;
}


var G__24000 = seq__22867_23961;
var G__24001 = chunk__22868_23962;
var G__24002 = count__22869_23963;
var G__24003 = (i__22870_23964 + (1));
seq__22867_23961 = G__24000;
chunk__22868_23962 = G__24001;
count__22869_23963 = G__24002;
i__22870_23964 = G__24003;
continue;
} else {
var temp__5735__auto___24004 = cljs.core.seq(seq__22867_23961);
if(temp__5735__auto___24004){
var seq__22867_24006__$1 = temp__5735__auto___24004;
if(cljs.core.chunked_seq_QMARK_(seq__22867_24006__$1)){
var c__4556__auto___24007 = cljs.core.chunk_first(seq__22867_24006__$1);
var G__24009 = cljs.core.chunk_rest(seq__22867_24006__$1);
var G__24010 = c__4556__auto___24007;
var G__24011 = cljs.core.count(c__4556__auto___24007);
var G__24012 = (0);
seq__22867_23961 = G__24009;
chunk__22868_23962 = G__24010;
count__22869_23963 = G__24011;
i__22870_23964 = G__24012;
continue;
} else {
var vec__22968_24013 = cljs.core.first(seq__22867_24006__$1);
var line_24014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22968_24013,(0),null);
var cols_24015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22968_24013,(1),null);
var seq__22990_24016 = cljs.core.seq(cols_24015);
var chunk__22991_24017 = null;
var count__22992_24018 = (0);
var i__22993_24019 = (0);
while(true){
if((i__22993_24019 < count__22992_24018)){
var vec__23003_24020 = chunk__22991_24017.cljs$core$IIndexed$_nth$arity$2(null,i__22993_24019);
var col_24021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23003_24020,(0),null);
var infos_24022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23003_24020,(1),null);
encode_cols(infos_24022,source_idx_23957,line_24014,col_24021);


var G__24023 = seq__22990_24016;
var G__24024 = chunk__22991_24017;
var G__24025 = count__22992_24018;
var G__24026 = (i__22993_24019 + (1));
seq__22990_24016 = G__24023;
chunk__22991_24017 = G__24024;
count__22992_24018 = G__24025;
i__22993_24019 = G__24026;
continue;
} else {
var temp__5735__auto___24027__$1 = cljs.core.seq(seq__22990_24016);
if(temp__5735__auto___24027__$1){
var seq__22990_24028__$1 = temp__5735__auto___24027__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22990_24028__$1)){
var c__4556__auto___24029 = cljs.core.chunk_first(seq__22990_24028__$1);
var G__24030 = cljs.core.chunk_rest(seq__22990_24028__$1);
var G__24031 = c__4556__auto___24029;
var G__24032 = cljs.core.count(c__4556__auto___24029);
var G__24033 = (0);
seq__22990_24016 = G__24030;
chunk__22991_24017 = G__24031;
count__22992_24018 = G__24032;
i__22993_24019 = G__24033;
continue;
} else {
var vec__23007_24034 = cljs.core.first(seq__22990_24028__$1);
var col_24035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23007_24034,(0),null);
var infos_24036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23007_24034,(1),null);
encode_cols(infos_24036,source_idx_23957,line_24014,col_24035);


var G__24037 = cljs.core.next(seq__22990_24028__$1);
var G__24038 = null;
var G__24039 = (0);
var G__24040 = (0);
seq__22990_24016 = G__24037;
chunk__22991_24017 = G__24038;
count__22992_24018 = G__24039;
i__22993_24019 = G__24040;
continue;
}
} else {
}
}
break;
}


var G__24041 = cljs.core.next(seq__22867_24006__$1);
var G__24042 = null;
var G__24043 = (0);
var G__24044 = (0);
seq__22867_23961 = G__24041;
chunk__22868_23962 = G__24042;
count__22869_23963 = G__24043;
i__22870_23964 = G__24044;
continue;
}
} else {
}
}
break;
}


var G__24045 = seq__22643_23950;
var G__24046 = chunk__22644_23951;
var G__24047 = count__22645_23952;
var G__24048 = (i__22646_23953 + (1));
seq__22643_23950 = G__24045;
chunk__22644_23951 = G__24046;
count__22645_23952 = G__24047;
i__22646_23953 = G__24048;
continue;
} else {
var temp__5735__auto___24049 = cljs.core.seq(seq__22643_23950);
if(temp__5735__auto___24049){
var seq__22643_24050__$1 = temp__5735__auto___24049;
if(cljs.core.chunked_seq_QMARK_(seq__22643_24050__$1)){
var c__4556__auto___24051 = cljs.core.chunk_first(seq__22643_24050__$1);
var G__24052 = cljs.core.chunk_rest(seq__22643_24050__$1);
var G__24053 = c__4556__auto___24051;
var G__24054 = cljs.core.count(c__4556__auto___24051);
var G__24055 = (0);
seq__22643_23950 = G__24052;
chunk__22644_23951 = G__24053;
count__22645_23952 = G__24054;
i__22646_23953 = G__24055;
continue;
} else {
var vec__23014_24056 = cljs.core.first(seq__22643_24050__$1);
var source_idx_24057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23014_24056,(0),null);
var vec__23017_24058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23014_24056,(1),null);
var __24059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23017_24058,(0),null);
var lines_24060__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23017_24058,(1),null);
var seq__23020_24063 = cljs.core.seq(lines_24060__$1);
var chunk__23021_24064 = null;
var count__23022_24065 = (0);
var i__23023_24066 = (0);
while(true){
if((i__23023_24066 < count__23022_24065)){
var vec__23133_24067 = chunk__23021_24064.cljs$core$IIndexed$_nth$arity$2(null,i__23023_24066);
var line_24068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23133_24067,(0),null);
var cols_24069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23133_24067,(1),null);
var seq__23136_24070 = cljs.core.seq(cols_24069);
var chunk__23137_24071 = null;
var count__23138_24072 = (0);
var i__23139_24073 = (0);
while(true){
if((i__23139_24073 < count__23138_24072)){
var vec__23146_24074 = chunk__23137_24071.cljs$core$IIndexed$_nth$arity$2(null,i__23139_24073);
var col_24075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23146_24074,(0),null);
var infos_24076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23146_24074,(1),null);
encode_cols(infos_24076,source_idx_24057,line_24068,col_24075);


var G__24077 = seq__23136_24070;
var G__24078 = chunk__23137_24071;
var G__24079 = count__23138_24072;
var G__24080 = (i__23139_24073 + (1));
seq__23136_24070 = G__24077;
chunk__23137_24071 = G__24078;
count__23138_24072 = G__24079;
i__23139_24073 = G__24080;
continue;
} else {
var temp__5735__auto___24082__$1 = cljs.core.seq(seq__23136_24070);
if(temp__5735__auto___24082__$1){
var seq__23136_24083__$1 = temp__5735__auto___24082__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23136_24083__$1)){
var c__4556__auto___24087 = cljs.core.chunk_first(seq__23136_24083__$1);
var G__24088 = cljs.core.chunk_rest(seq__23136_24083__$1);
var G__24089 = c__4556__auto___24087;
var G__24090 = cljs.core.count(c__4556__auto___24087);
var G__24091 = (0);
seq__23136_24070 = G__24088;
chunk__23137_24071 = G__24089;
count__23138_24072 = G__24090;
i__23139_24073 = G__24091;
continue;
} else {
var vec__23149_24092 = cljs.core.first(seq__23136_24083__$1);
var col_24093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23149_24092,(0),null);
var infos_24094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23149_24092,(1),null);
encode_cols(infos_24094,source_idx_24057,line_24068,col_24093);


var G__24095 = cljs.core.next(seq__23136_24083__$1);
var G__24096 = null;
var G__24097 = (0);
var G__24098 = (0);
seq__23136_24070 = G__24095;
chunk__23137_24071 = G__24096;
count__23138_24072 = G__24097;
i__23139_24073 = G__24098;
continue;
}
} else {
}
}
break;
}


var G__24099 = seq__23020_24063;
var G__24100 = chunk__23021_24064;
var G__24101 = count__23022_24065;
var G__24102 = (i__23023_24066 + (1));
seq__23020_24063 = G__24099;
chunk__23021_24064 = G__24100;
count__23022_24065 = G__24101;
i__23023_24066 = G__24102;
continue;
} else {
var temp__5735__auto___24103__$1 = cljs.core.seq(seq__23020_24063);
if(temp__5735__auto___24103__$1){
var seq__23020_24104__$1 = temp__5735__auto___24103__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23020_24104__$1)){
var c__4556__auto___24105 = cljs.core.chunk_first(seq__23020_24104__$1);
var G__24106 = cljs.core.chunk_rest(seq__23020_24104__$1);
var G__24107 = c__4556__auto___24105;
var G__24108 = cljs.core.count(c__4556__auto___24105);
var G__24109 = (0);
seq__23020_24063 = G__24106;
chunk__23021_24064 = G__24107;
count__23022_24065 = G__24108;
i__23023_24066 = G__24109;
continue;
} else {
var vec__23152_24110 = cljs.core.first(seq__23020_24104__$1);
var line_24111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23152_24110,(0),null);
var cols_24112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23152_24110,(1),null);
var seq__23155_24113 = cljs.core.seq(cols_24112);
var chunk__23156_24114 = null;
var count__23157_24115 = (0);
var i__23158_24116 = (0);
while(true){
if((i__23158_24116 < count__23157_24115)){
var vec__23165_24117 = chunk__23156_24114.cljs$core$IIndexed$_nth$arity$2(null,i__23158_24116);
var col_24118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23165_24117,(0),null);
var infos_24119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23165_24117,(1),null);
encode_cols(infos_24119,source_idx_24057,line_24111,col_24118);


var G__24121 = seq__23155_24113;
var G__24122 = chunk__23156_24114;
var G__24123 = count__23157_24115;
var G__24124 = (i__23158_24116 + (1));
seq__23155_24113 = G__24121;
chunk__23156_24114 = G__24122;
count__23157_24115 = G__24123;
i__23158_24116 = G__24124;
continue;
} else {
var temp__5735__auto___24125__$2 = cljs.core.seq(seq__23155_24113);
if(temp__5735__auto___24125__$2){
var seq__23155_24126__$1 = temp__5735__auto___24125__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23155_24126__$1)){
var c__4556__auto___24127 = cljs.core.chunk_first(seq__23155_24126__$1);
var G__24128 = cljs.core.chunk_rest(seq__23155_24126__$1);
var G__24129 = c__4556__auto___24127;
var G__24130 = cljs.core.count(c__4556__auto___24127);
var G__24131 = (0);
seq__23155_24113 = G__24128;
chunk__23156_24114 = G__24129;
count__23157_24115 = G__24130;
i__23158_24116 = G__24131;
continue;
} else {
var vec__23168_24132 = cljs.core.first(seq__23155_24126__$1);
var col_24133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23168_24132,(0),null);
var infos_24134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23168_24132,(1),null);
encode_cols(infos_24134,source_idx_24057,line_24111,col_24133);


var G__24135 = cljs.core.next(seq__23155_24126__$1);
var G__24136 = null;
var G__24137 = (0);
var G__24138 = (0);
seq__23155_24113 = G__24135;
chunk__23156_24114 = G__24136;
count__23157_24115 = G__24137;
i__23158_24116 = G__24138;
continue;
}
} else {
}
}
break;
}


var G__24139 = cljs.core.next(seq__23020_24104__$1);
var G__24140 = null;
var G__24141 = (0);
var G__24142 = (0);
seq__23020_24063 = G__24139;
chunk__23021_24064 = G__24140;
count__23022_24065 = G__24141;
i__23023_24066 = G__24142;
continue;
}
} else {
}
}
break;
}


var G__24143 = cljs.core.next(seq__22643_24050__$1);
var G__24144 = null;
var G__24145 = (0);
var G__24146 = (0);
seq__22643_23950 = G__24143;
chunk__22644_23951 = G__24144;
count__22645_23952 = G__24145;
i__22646_23953 = G__24146;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__23171 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
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
var G__23172 = G__23171;
goog.object.set(G__23172,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__23172;
} else {
return G__23171;
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
var vec__23173 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23173,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23173,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__23176 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23176,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23176,(1),null);
var G__24147 = cljs.core.next(col_map_seq);
var G__24148 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__23176,col,infos,vec__23173,line,col_map){
return (function (v,p__23185){
var map__23186 = p__23185;
var map__23186__$1 = (((((!((map__23186 == null))))?(((((map__23186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23186):map__23186);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23186__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23186__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__23176,col,infos,vec__23173,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__24147;
new_cols = G__24148;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__24151 = cljs.core.next(line_map_seq);
var G__24152 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__24151;
new_lines = G__24152;
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
var seq__23188_24156 = cljs.core.seq(reverse_map);
var chunk__23189_24157 = null;
var count__23190_24158 = (0);
var i__23191_24159 = (0);
while(true){
if((i__23191_24159 < count__23190_24158)){
var vec__23505_24160 = chunk__23189_24157.cljs$core$IIndexed$_nth$arity$2(null,i__23191_24159);
var line_24161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23505_24160,(0),null);
var columns_24162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23505_24160,(1),null);
var seq__23508_24163 = cljs.core.seq(columns_24162);
var chunk__23509_24164 = null;
var count__23510_24165 = (0);
var i__23511_24166 = (0);
while(true){
if((i__23511_24166 < count__23510_24165)){
var vec__23569_24167 = chunk__23509_24164.cljs$core$IIndexed$_nth$arity$2(null,i__23511_24166);
var column_24168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23569_24167,(0),null);
var column_info_24169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23569_24167,(1),null);
var seq__23572_24170 = cljs.core.seq(column_info_24169);
var chunk__23573_24171 = null;
var count__23574_24172 = (0);
var i__23575_24173 = (0);
while(true){
if((i__23575_24173 < count__23574_24172)){
var map__23598_24174 = chunk__23573_24171.cljs$core$IIndexed$_nth$arity$2(null,i__23575_24173);
var map__23598_24175__$1 = (((((!((map__23598_24174 == null))))?(((((map__23598_24174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23598_24174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23598_24174):map__23598_24174);
var gline_24176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23598_24175__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23598_24175__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23598_24175__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24176], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23572_24170,chunk__23573_24171,count__23574_24172,i__23575_24173,seq__23508_24163,chunk__23509_24164,count__23510_24165,i__23511_24166,seq__23188_24156,chunk__23189_24157,count__23190_24158,i__23191_24159,map__23598_24174,map__23598_24175__$1,gline_24176,gcol_24177,name_24178,vec__23569_24167,column_24168,column_info_24169,vec__23505_24160,line_24161,columns_24162,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24177], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24161,new cljs.core.Keyword(null,"col","col",-1959363084),column_24168,new cljs.core.Keyword(null,"name","name",1843675177),name_24178], null));
});})(seq__23572_24170,chunk__23573_24171,count__23574_24172,i__23575_24173,seq__23508_24163,chunk__23509_24164,count__23510_24165,i__23511_24166,seq__23188_24156,chunk__23189_24157,count__23190_24158,i__23191_24159,map__23598_24174,map__23598_24175__$1,gline_24176,gcol_24177,name_24178,vec__23569_24167,column_24168,column_info_24169,vec__23505_24160,line_24161,columns_24162,inverted))
,cljs.core.sorted_map()));


var G__24184 = seq__23572_24170;
var G__24185 = chunk__23573_24171;
var G__24186 = count__23574_24172;
var G__24187 = (i__23575_24173 + (1));
seq__23572_24170 = G__24184;
chunk__23573_24171 = G__24185;
count__23574_24172 = G__24186;
i__23575_24173 = G__24187;
continue;
} else {
var temp__5735__auto___24188 = cljs.core.seq(seq__23572_24170);
if(temp__5735__auto___24188){
var seq__23572_24189__$1 = temp__5735__auto___24188;
if(cljs.core.chunked_seq_QMARK_(seq__23572_24189__$1)){
var c__4556__auto___24190 = cljs.core.chunk_first(seq__23572_24189__$1);
var G__24191 = cljs.core.chunk_rest(seq__23572_24189__$1);
var G__24192 = c__4556__auto___24190;
var G__24193 = cljs.core.count(c__4556__auto___24190);
var G__24194 = (0);
seq__23572_24170 = G__24191;
chunk__23573_24171 = G__24192;
count__23574_24172 = G__24193;
i__23575_24173 = G__24194;
continue;
} else {
var map__23622_24195 = cljs.core.first(seq__23572_24189__$1);
var map__23622_24196__$1 = (((((!((map__23622_24195 == null))))?(((((map__23622_24195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23622_24195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23622_24195):map__23622_24195);
var gline_24197 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23622_24196__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23622_24196__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23622_24196__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24197], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23572_24170,chunk__23573_24171,count__23574_24172,i__23575_24173,seq__23508_24163,chunk__23509_24164,count__23510_24165,i__23511_24166,seq__23188_24156,chunk__23189_24157,count__23190_24158,i__23191_24159,map__23622_24195,map__23622_24196__$1,gline_24197,gcol_24198,name_24199,seq__23572_24189__$1,temp__5735__auto___24188,vec__23569_24167,column_24168,column_info_24169,vec__23505_24160,line_24161,columns_24162,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24198], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24161,new cljs.core.Keyword(null,"col","col",-1959363084),column_24168,new cljs.core.Keyword(null,"name","name",1843675177),name_24199], null));
});})(seq__23572_24170,chunk__23573_24171,count__23574_24172,i__23575_24173,seq__23508_24163,chunk__23509_24164,count__23510_24165,i__23511_24166,seq__23188_24156,chunk__23189_24157,count__23190_24158,i__23191_24159,map__23622_24195,map__23622_24196__$1,gline_24197,gcol_24198,name_24199,seq__23572_24189__$1,temp__5735__auto___24188,vec__23569_24167,column_24168,column_info_24169,vec__23505_24160,line_24161,columns_24162,inverted))
,cljs.core.sorted_map()));


var G__24202 = cljs.core.next(seq__23572_24189__$1);
var G__24203 = null;
var G__24204 = (0);
var G__24205 = (0);
seq__23572_24170 = G__24202;
chunk__23573_24171 = G__24203;
count__23574_24172 = G__24204;
i__23575_24173 = G__24205;
continue;
}
} else {
}
}
break;
}


var G__24206 = seq__23508_24163;
var G__24207 = chunk__23509_24164;
var G__24208 = count__23510_24165;
var G__24209 = (i__23511_24166 + (1));
seq__23508_24163 = G__24206;
chunk__23509_24164 = G__24207;
count__23510_24165 = G__24208;
i__23511_24166 = G__24209;
continue;
} else {
var temp__5735__auto___24210 = cljs.core.seq(seq__23508_24163);
if(temp__5735__auto___24210){
var seq__23508_24211__$1 = temp__5735__auto___24210;
if(cljs.core.chunked_seq_QMARK_(seq__23508_24211__$1)){
var c__4556__auto___24212 = cljs.core.chunk_first(seq__23508_24211__$1);
var G__24213 = cljs.core.chunk_rest(seq__23508_24211__$1);
var G__24214 = c__4556__auto___24212;
var G__24215 = cljs.core.count(c__4556__auto___24212);
var G__24216 = (0);
seq__23508_24163 = G__24213;
chunk__23509_24164 = G__24214;
count__23510_24165 = G__24215;
i__23511_24166 = G__24216;
continue;
} else {
var vec__23628_24217 = cljs.core.first(seq__23508_24211__$1);
var column_24218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23628_24217,(0),null);
var column_info_24219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23628_24217,(1),null);
var seq__23631_24222 = cljs.core.seq(column_info_24219);
var chunk__23632_24223 = null;
var count__23633_24224 = (0);
var i__23634_24225 = (0);
while(true){
if((i__23634_24225 < count__23633_24224)){
var map__23639_24226 = chunk__23632_24223.cljs$core$IIndexed$_nth$arity$2(null,i__23634_24225);
var map__23639_24227__$1 = (((((!((map__23639_24226 == null))))?(((((map__23639_24226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23639_24226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23639_24226):map__23639_24226);
var gline_24228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23639_24227__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23639_24227__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23639_24227__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24228], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23631_24222,chunk__23632_24223,count__23633_24224,i__23634_24225,seq__23508_24163,chunk__23509_24164,count__23510_24165,i__23511_24166,seq__23188_24156,chunk__23189_24157,count__23190_24158,i__23191_24159,map__23639_24226,map__23639_24227__$1,gline_24228,gcol_24229,name_24230,vec__23628_24217,column_24218,column_info_24219,seq__23508_24211__$1,temp__5735__auto___24210,vec__23505_24160,line_24161,columns_24162,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24229], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24161,new cljs.core.Keyword(null,"col","col",-1959363084),column_24218,new cljs.core.Keyword(null,"name","name",1843675177),name_24230], null));
});})(seq__23631_24222,chunk__23632_24223,count__23633_24224,i__23634_24225,seq__23508_24163,chunk__23509_24164,count__23510_24165,i__23511_24166,seq__23188_24156,chunk__23189_24157,count__23190_24158,i__23191_24159,map__23639_24226,map__23639_24227__$1,gline_24228,gcol_24229,name_24230,vec__23628_24217,column_24218,column_info_24219,seq__23508_24211__$1,temp__5735__auto___24210,vec__23505_24160,line_24161,columns_24162,inverted))
,cljs.core.sorted_map()));


var G__24239 = seq__23631_24222;
var G__24240 = chunk__23632_24223;
var G__24241 = count__23633_24224;
var G__24242 = (i__23634_24225 + (1));
seq__23631_24222 = G__24239;
chunk__23632_24223 = G__24240;
count__23633_24224 = G__24241;
i__23634_24225 = G__24242;
continue;
} else {
var temp__5735__auto___24243__$1 = cljs.core.seq(seq__23631_24222);
if(temp__5735__auto___24243__$1){
var seq__23631_24244__$1 = temp__5735__auto___24243__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23631_24244__$1)){
var c__4556__auto___24245 = cljs.core.chunk_first(seq__23631_24244__$1);
var G__24246 = cljs.core.chunk_rest(seq__23631_24244__$1);
var G__24247 = c__4556__auto___24245;
var G__24248 = cljs.core.count(c__4556__auto___24245);
var G__24249 = (0);
seq__23631_24222 = G__24246;
chunk__23632_24223 = G__24247;
count__23633_24224 = G__24248;
i__23634_24225 = G__24249;
continue;
} else {
var map__23646_24250 = cljs.core.first(seq__23631_24244__$1);
var map__23646_24251__$1 = (((((!((map__23646_24250 == null))))?(((((map__23646_24250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23646_24250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23646_24250):map__23646_24250);
var gline_24252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23646_24251__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23646_24251__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23646_24251__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24252], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23631_24222,chunk__23632_24223,count__23633_24224,i__23634_24225,seq__23508_24163,chunk__23509_24164,count__23510_24165,i__23511_24166,seq__23188_24156,chunk__23189_24157,count__23190_24158,i__23191_24159,map__23646_24250,map__23646_24251__$1,gline_24252,gcol_24253,name_24254,seq__23631_24244__$1,temp__5735__auto___24243__$1,vec__23628_24217,column_24218,column_info_24219,seq__23508_24211__$1,temp__5735__auto___24210,vec__23505_24160,line_24161,columns_24162,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24253], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24161,new cljs.core.Keyword(null,"col","col",-1959363084),column_24218,new cljs.core.Keyword(null,"name","name",1843675177),name_24254], null));
});})(seq__23631_24222,chunk__23632_24223,count__23633_24224,i__23634_24225,seq__23508_24163,chunk__23509_24164,count__23510_24165,i__23511_24166,seq__23188_24156,chunk__23189_24157,count__23190_24158,i__23191_24159,map__23646_24250,map__23646_24251__$1,gline_24252,gcol_24253,name_24254,seq__23631_24244__$1,temp__5735__auto___24243__$1,vec__23628_24217,column_24218,column_info_24219,seq__23508_24211__$1,temp__5735__auto___24210,vec__23505_24160,line_24161,columns_24162,inverted))
,cljs.core.sorted_map()));


var G__24255 = cljs.core.next(seq__23631_24244__$1);
var G__24256 = null;
var G__24257 = (0);
var G__24258 = (0);
seq__23631_24222 = G__24255;
chunk__23632_24223 = G__24256;
count__23633_24224 = G__24257;
i__23634_24225 = G__24258;
continue;
}
} else {
}
}
break;
}


var G__24259 = cljs.core.next(seq__23508_24211__$1);
var G__24260 = null;
var G__24261 = (0);
var G__24262 = (0);
seq__23508_24163 = G__24259;
chunk__23509_24164 = G__24260;
count__23510_24165 = G__24261;
i__23511_24166 = G__24262;
continue;
}
} else {
}
}
break;
}


var G__24263 = seq__23188_24156;
var G__24264 = chunk__23189_24157;
var G__24265 = count__23190_24158;
var G__24266 = (i__23191_24159 + (1));
seq__23188_24156 = G__24263;
chunk__23189_24157 = G__24264;
count__23190_24158 = G__24265;
i__23191_24159 = G__24266;
continue;
} else {
var temp__5735__auto___24267 = cljs.core.seq(seq__23188_24156);
if(temp__5735__auto___24267){
var seq__23188_24268__$1 = temp__5735__auto___24267;
if(cljs.core.chunked_seq_QMARK_(seq__23188_24268__$1)){
var c__4556__auto___24269 = cljs.core.chunk_first(seq__23188_24268__$1);
var G__24270 = cljs.core.chunk_rest(seq__23188_24268__$1);
var G__24271 = c__4556__auto___24269;
var G__24272 = cljs.core.count(c__4556__auto___24269);
var G__24273 = (0);
seq__23188_24156 = G__24270;
chunk__23189_24157 = G__24271;
count__23190_24158 = G__24272;
i__23191_24159 = G__24273;
continue;
} else {
var vec__23648_24274 = cljs.core.first(seq__23188_24268__$1);
var line_24275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23648_24274,(0),null);
var columns_24276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23648_24274,(1),null);
var seq__23654_24277 = cljs.core.seq(columns_24276);
var chunk__23655_24278 = null;
var count__23659_24279 = (0);
var i__23660_24280 = (0);
while(true){
if((i__23660_24280 < count__23659_24279)){
var vec__23731_24281 = chunk__23655_24278.cljs$core$IIndexed$_nth$arity$2(null,i__23660_24280);
var column_24282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23731_24281,(0),null);
var column_info_24283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23731_24281,(1),null);
var seq__23734_24284 = cljs.core.seq(column_info_24283);
var chunk__23735_24285 = null;
var count__23736_24286 = (0);
var i__23737_24287 = (0);
while(true){
if((i__23737_24287 < count__23736_24286)){
var map__23764_24288 = chunk__23735_24285.cljs$core$IIndexed$_nth$arity$2(null,i__23737_24287);
var map__23764_24289__$1 = (((((!((map__23764_24288 == null))))?(((((map__23764_24288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23764_24288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23764_24288):map__23764_24288);
var gline_24290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23764_24289__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23764_24289__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23764_24289__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24290], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23734_24284,chunk__23735_24285,count__23736_24286,i__23737_24287,seq__23654_24277,chunk__23655_24278,count__23659_24279,i__23660_24280,seq__23188_24156,chunk__23189_24157,count__23190_24158,i__23191_24159,map__23764_24288,map__23764_24289__$1,gline_24290,gcol_24291,name_24292,vec__23731_24281,column_24282,column_info_24283,vec__23648_24274,line_24275,columns_24276,seq__23188_24268__$1,temp__5735__auto___24267,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24291], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24275,new cljs.core.Keyword(null,"col","col",-1959363084),column_24282,new cljs.core.Keyword(null,"name","name",1843675177),name_24292], null));
});})(seq__23734_24284,chunk__23735_24285,count__23736_24286,i__23737_24287,seq__23654_24277,chunk__23655_24278,count__23659_24279,i__23660_24280,seq__23188_24156,chunk__23189_24157,count__23190_24158,i__23191_24159,map__23764_24288,map__23764_24289__$1,gline_24290,gcol_24291,name_24292,vec__23731_24281,column_24282,column_info_24283,vec__23648_24274,line_24275,columns_24276,seq__23188_24268__$1,temp__5735__auto___24267,inverted))
,cljs.core.sorted_map()));


var G__24294 = seq__23734_24284;
var G__24295 = chunk__23735_24285;
var G__24296 = count__23736_24286;
var G__24297 = (i__23737_24287 + (1));
seq__23734_24284 = G__24294;
chunk__23735_24285 = G__24295;
count__23736_24286 = G__24296;
i__23737_24287 = G__24297;
continue;
} else {
var temp__5735__auto___24298__$1 = cljs.core.seq(seq__23734_24284);
if(temp__5735__auto___24298__$1){
var seq__23734_24299__$1 = temp__5735__auto___24298__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23734_24299__$1)){
var c__4556__auto___24300 = cljs.core.chunk_first(seq__23734_24299__$1);
var G__24301 = cljs.core.chunk_rest(seq__23734_24299__$1);
var G__24302 = c__4556__auto___24300;
var G__24303 = cljs.core.count(c__4556__auto___24300);
var G__24304 = (0);
seq__23734_24284 = G__24301;
chunk__23735_24285 = G__24302;
count__23736_24286 = G__24303;
i__23737_24287 = G__24304;
continue;
} else {
var map__23770_24305 = cljs.core.first(seq__23734_24299__$1);
var map__23770_24306__$1 = (((((!((map__23770_24305 == null))))?(((((map__23770_24305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23770_24305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23770_24305):map__23770_24305);
var gline_24307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23770_24306__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23770_24306__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23770_24306__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24307], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23734_24284,chunk__23735_24285,count__23736_24286,i__23737_24287,seq__23654_24277,chunk__23655_24278,count__23659_24279,i__23660_24280,seq__23188_24156,chunk__23189_24157,count__23190_24158,i__23191_24159,map__23770_24305,map__23770_24306__$1,gline_24307,gcol_24308,name_24309,seq__23734_24299__$1,temp__5735__auto___24298__$1,vec__23731_24281,column_24282,column_info_24283,vec__23648_24274,line_24275,columns_24276,seq__23188_24268__$1,temp__5735__auto___24267,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24308], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24275,new cljs.core.Keyword(null,"col","col",-1959363084),column_24282,new cljs.core.Keyword(null,"name","name",1843675177),name_24309], null));
});})(seq__23734_24284,chunk__23735_24285,count__23736_24286,i__23737_24287,seq__23654_24277,chunk__23655_24278,count__23659_24279,i__23660_24280,seq__23188_24156,chunk__23189_24157,count__23190_24158,i__23191_24159,map__23770_24305,map__23770_24306__$1,gline_24307,gcol_24308,name_24309,seq__23734_24299__$1,temp__5735__auto___24298__$1,vec__23731_24281,column_24282,column_info_24283,vec__23648_24274,line_24275,columns_24276,seq__23188_24268__$1,temp__5735__auto___24267,inverted))
,cljs.core.sorted_map()));


var G__24319 = cljs.core.next(seq__23734_24299__$1);
var G__24320 = null;
var G__24321 = (0);
var G__24322 = (0);
seq__23734_24284 = G__24319;
chunk__23735_24285 = G__24320;
count__23736_24286 = G__24321;
i__23737_24287 = G__24322;
continue;
}
} else {
}
}
break;
}


var G__24323 = seq__23654_24277;
var G__24324 = chunk__23655_24278;
var G__24325 = count__23659_24279;
var G__24326 = (i__23660_24280 + (1));
seq__23654_24277 = G__24323;
chunk__23655_24278 = G__24324;
count__23659_24279 = G__24325;
i__23660_24280 = G__24326;
continue;
} else {
var temp__5735__auto___24327__$1 = cljs.core.seq(seq__23654_24277);
if(temp__5735__auto___24327__$1){
var seq__23654_24328__$1 = temp__5735__auto___24327__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23654_24328__$1)){
var c__4556__auto___24329 = cljs.core.chunk_first(seq__23654_24328__$1);
var G__24330 = cljs.core.chunk_rest(seq__23654_24328__$1);
var G__24331 = c__4556__auto___24329;
var G__24332 = cljs.core.count(c__4556__auto___24329);
var G__24333 = (0);
seq__23654_24277 = G__24330;
chunk__23655_24278 = G__24331;
count__23659_24279 = G__24332;
i__23660_24280 = G__24333;
continue;
} else {
var vec__23798_24335 = cljs.core.first(seq__23654_24328__$1);
var column_24336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23798_24335,(0),null);
var column_info_24337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23798_24335,(1),null);
var seq__23801_24338 = cljs.core.seq(column_info_24337);
var chunk__23802_24339 = null;
var count__23803_24340 = (0);
var i__23804_24341 = (0);
while(true){
if((i__23804_24341 < count__23803_24340)){
var map__23818_24342 = chunk__23802_24339.cljs$core$IIndexed$_nth$arity$2(null,i__23804_24341);
var map__23818_24343__$1 = (((((!((map__23818_24342 == null))))?(((((map__23818_24342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23818_24342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23818_24342):map__23818_24342);
var gline_24344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23818_24343__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23818_24343__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23818_24343__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24344], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23801_24338,chunk__23802_24339,count__23803_24340,i__23804_24341,seq__23654_24277,chunk__23655_24278,count__23659_24279,i__23660_24280,seq__23188_24156,chunk__23189_24157,count__23190_24158,i__23191_24159,map__23818_24342,map__23818_24343__$1,gline_24344,gcol_24345,name_24346,vec__23798_24335,column_24336,column_info_24337,seq__23654_24328__$1,temp__5735__auto___24327__$1,vec__23648_24274,line_24275,columns_24276,seq__23188_24268__$1,temp__5735__auto___24267,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24345], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24275,new cljs.core.Keyword(null,"col","col",-1959363084),column_24336,new cljs.core.Keyword(null,"name","name",1843675177),name_24346], null));
});})(seq__23801_24338,chunk__23802_24339,count__23803_24340,i__23804_24341,seq__23654_24277,chunk__23655_24278,count__23659_24279,i__23660_24280,seq__23188_24156,chunk__23189_24157,count__23190_24158,i__23191_24159,map__23818_24342,map__23818_24343__$1,gline_24344,gcol_24345,name_24346,vec__23798_24335,column_24336,column_info_24337,seq__23654_24328__$1,temp__5735__auto___24327__$1,vec__23648_24274,line_24275,columns_24276,seq__23188_24268__$1,temp__5735__auto___24267,inverted))
,cljs.core.sorted_map()));


var G__24347 = seq__23801_24338;
var G__24348 = chunk__23802_24339;
var G__24349 = count__23803_24340;
var G__24350 = (i__23804_24341 + (1));
seq__23801_24338 = G__24347;
chunk__23802_24339 = G__24348;
count__23803_24340 = G__24349;
i__23804_24341 = G__24350;
continue;
} else {
var temp__5735__auto___24352__$2 = cljs.core.seq(seq__23801_24338);
if(temp__5735__auto___24352__$2){
var seq__23801_24353__$1 = temp__5735__auto___24352__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23801_24353__$1)){
var c__4556__auto___24354 = cljs.core.chunk_first(seq__23801_24353__$1);
var G__24355 = cljs.core.chunk_rest(seq__23801_24353__$1);
var G__24356 = c__4556__auto___24354;
var G__24357 = cljs.core.count(c__4556__auto___24354);
var G__24358 = (0);
seq__23801_24338 = G__24355;
chunk__23802_24339 = G__24356;
count__23803_24340 = G__24357;
i__23804_24341 = G__24358;
continue;
} else {
var map__23824_24359 = cljs.core.first(seq__23801_24353__$1);
var map__23824_24360__$1 = (((((!((map__23824_24359 == null))))?(((((map__23824_24359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23824_24359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23824_24359):map__23824_24359);
var gline_24361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23824_24360__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23824_24360__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23824_24360__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24361], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23801_24338,chunk__23802_24339,count__23803_24340,i__23804_24341,seq__23654_24277,chunk__23655_24278,count__23659_24279,i__23660_24280,seq__23188_24156,chunk__23189_24157,count__23190_24158,i__23191_24159,map__23824_24359,map__23824_24360__$1,gline_24361,gcol_24362,name_24363,seq__23801_24353__$1,temp__5735__auto___24352__$2,vec__23798_24335,column_24336,column_info_24337,seq__23654_24328__$1,temp__5735__auto___24327__$1,vec__23648_24274,line_24275,columns_24276,seq__23188_24268__$1,temp__5735__auto___24267,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24362], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24275,new cljs.core.Keyword(null,"col","col",-1959363084),column_24336,new cljs.core.Keyword(null,"name","name",1843675177),name_24363], null));
});})(seq__23801_24338,chunk__23802_24339,count__23803_24340,i__23804_24341,seq__23654_24277,chunk__23655_24278,count__23659_24279,i__23660_24280,seq__23188_24156,chunk__23189_24157,count__23190_24158,i__23191_24159,map__23824_24359,map__23824_24360__$1,gline_24361,gcol_24362,name_24363,seq__23801_24353__$1,temp__5735__auto___24352__$2,vec__23798_24335,column_24336,column_info_24337,seq__23654_24328__$1,temp__5735__auto___24327__$1,vec__23648_24274,line_24275,columns_24276,seq__23188_24268__$1,temp__5735__auto___24267,inverted))
,cljs.core.sorted_map()));


var G__24364 = cljs.core.next(seq__23801_24353__$1);
var G__24365 = null;
var G__24366 = (0);
var G__24367 = (0);
seq__23801_24338 = G__24364;
chunk__23802_24339 = G__24365;
count__23803_24340 = G__24366;
i__23804_24341 = G__24367;
continue;
}
} else {
}
}
break;
}


var G__24381 = cljs.core.next(seq__23654_24328__$1);
var G__24382 = null;
var G__24383 = (0);
var G__24384 = (0);
seq__23654_24277 = G__24381;
chunk__23655_24278 = G__24382;
count__23659_24279 = G__24383;
i__23660_24280 = G__24384;
continue;
}
} else {
}
}
break;
}


var G__24386 = cljs.core.next(seq__23188_24268__$1);
var G__24387 = null;
var G__24388 = (0);
var G__24389 = (0);
seq__23188_24156 = G__24386;
chunk__23189_24157 = G__24387;
count__23190_24158 = G__24388;
i__23191_24159 = G__24389;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
