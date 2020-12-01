goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__22672){
var vec__22673 = p__22672;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22673,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22673,(1),null);
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
var vec__22691 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22691,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22691,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22691,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22691,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22691,(4),null);
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
var vec__22698 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22698,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22698,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22698,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22698,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22698,(4),null);
var vec__22701 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22701,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22701,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22701,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22701,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22701,(4),null);
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
var map__22709 = segmap;
var map__22709__$1 = (((((!((map__22709 == null))))?(((((map__22709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22709):map__22709);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22709__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22709__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22709__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22709__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22709__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__22717 = arguments.length;
switch (G__22717) {
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
var vec__22732 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__23934 = cljs.core.next(segs__$1);
var G__23935 = nrelseg;
var G__23936 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23934;
relseg__$1 = G__23935;
result__$1 = G__23936;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22732,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22732,(1),null);
var G__23937 = (gline + (1));
var G__23938 = cljs.core.next(lines__$1);
var G__23939 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23940 = result__$1;
gline = G__23937;
lines__$1 = G__23938;
relseg = G__23939;
result = G__23940;
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
var map__22741 = segmap;
var map__22741__$1 = (((((!((map__22741 == null))))?(((((map__22741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22741):map__22741);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22741__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22741__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22741__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22741__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22741__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__22740_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__22740_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__22744 = arguments.length;
switch (G__22744) {
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
var vec__22748 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__23942 = cljs.core.next(segs__$1);
var G__23943 = nrelseg;
var G__23944 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23942;
relseg__$1 = G__23943;
result__$1 = G__23944;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22748,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22748,(1),null);
var G__23945 = (gline + (1));
var G__23946 = cljs.core.next(lines__$1);
var G__23947 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23948 = result__$1;
gline = G__23945;
lines__$1 = G__23946;
relseg = G__23947;
result = G__23948;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__22757){
var vec__22758 = p__22757;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22758,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22758,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22758,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22758,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22758,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__22767){
var vec__22768 = p__22767;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22768,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22768,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22768,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22768,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22768,(4),null);
var seg = vec__22768;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__22771){
var vec__22772 = p__22771;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22772,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22772,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22772,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22772,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22772,(4),null);
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
var seq__22796 = cljs.core.seq(infos);
var chunk__22797 = null;
var count__22798 = (0);
var i__22799 = (0);
while(true){
if((i__22799 < count__22798)){
var info = chunk__22797.cljs$core$IIndexed$_nth$arity$2(null,i__22799);
var segv_23950 = info__GT_segv(info,source_idx,line,col);
var gline_23951 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23952 = cljs.core.count(cljs.core.deref(lines));
if((gline_23951 > (lc_23952 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22796,chunk__22797,count__22798,i__22799,segv_23950,gline_23951,lc_23952,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23951 - (lc_23952 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23950], null));
});})(seq__22796,chunk__22797,count__22798,i__22799,segv_23950,gline_23951,lc_23952,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22796,chunk__22797,count__22798,i__22799,segv_23950,gline_23951,lc_23952,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23951], null),cljs.core.conj,segv_23950);
});})(seq__22796,chunk__22797,count__22798,i__22799,segv_23950,gline_23951,lc_23952,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23953 = seq__22796;
var G__23954 = chunk__22797;
var G__23955 = count__22798;
var G__23956 = (i__22799 + (1));
seq__22796 = G__23953;
chunk__22797 = G__23954;
count__22798 = G__23955;
i__22799 = G__23956;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__22796);
if(temp__5735__auto__){
var seq__22796__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22796__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__22796__$1);
var G__23957 = cljs.core.chunk_rest(seq__22796__$1);
var G__23958 = c__4556__auto__;
var G__23959 = cljs.core.count(c__4556__auto__);
var G__23960 = (0);
seq__22796 = G__23957;
chunk__22797 = G__23958;
count__22798 = G__23959;
i__22799 = G__23960;
continue;
} else {
var info = cljs.core.first(seq__22796__$1);
var segv_23961 = info__GT_segv(info,source_idx,line,col);
var gline_23962 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23963 = cljs.core.count(cljs.core.deref(lines));
if((gline_23962 > (lc_23963 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22796,chunk__22797,count__22798,i__22799,segv_23961,gline_23962,lc_23963,info,seq__22796__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23962 - (lc_23963 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23961], null));
});})(seq__22796,chunk__22797,count__22798,i__22799,segv_23961,gline_23962,lc_23963,info,seq__22796__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22796,chunk__22797,count__22798,i__22799,segv_23961,gline_23962,lc_23963,info,seq__22796__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23962], null),cljs.core.conj,segv_23961);
});})(seq__22796,chunk__22797,count__22798,i__22799,segv_23961,gline_23962,lc_23963,info,seq__22796__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23964 = cljs.core.next(seq__22796__$1);
var G__23965 = null;
var G__23966 = (0);
var G__23967 = (0);
seq__22796 = G__23964;
chunk__22797 = G__23965;
count__22798 = G__23966;
i__22799 = G__23967;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__22826_23968 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__22827_23969 = null;
var count__22828_23970 = (0);
var i__22829_23971 = (0);
while(true){
if((i__22829_23971 < count__22828_23970)){
var vec__23091_23972 = chunk__22827_23969.cljs$core$IIndexed$_nth$arity$2(null,i__22829_23971);
var source_idx_23973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23091_23972,(0),null);
var vec__23094_23974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23091_23972,(1),null);
var __23975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23094_23974,(0),null);
var lines_23976__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23094_23974,(1),null);
var seq__23097_23979 = cljs.core.seq(lines_23976__$1);
var chunk__23098_23980 = null;
var count__23099_23981 = (0);
var i__23100_23982 = (0);
while(true){
if((i__23100_23982 < count__23099_23981)){
var vec__23172_23983 = chunk__23098_23980.cljs$core$IIndexed$_nth$arity$2(null,i__23100_23982);
var line_23984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23172_23983,(0),null);
var cols_23985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23172_23983,(1),null);
var seq__23175_23986 = cljs.core.seq(cols_23985);
var chunk__23176_23987 = null;
var count__23177_23988 = (0);
var i__23178_23989 = (0);
while(true){
if((i__23178_23989 < count__23177_23988)){
var vec__23190_23990 = chunk__23176_23987.cljs$core$IIndexed$_nth$arity$2(null,i__23178_23989);
var col_23991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23190_23990,(0),null);
var infos_23992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23190_23990,(1),null);
encode_cols(infos_23992,source_idx_23973,line_23984,col_23991);


var G__23993 = seq__23175_23986;
var G__23994 = chunk__23176_23987;
var G__23995 = count__23177_23988;
var G__23996 = (i__23178_23989 + (1));
seq__23175_23986 = G__23993;
chunk__23176_23987 = G__23994;
count__23177_23988 = G__23995;
i__23178_23989 = G__23996;
continue;
} else {
var temp__5735__auto___23997 = cljs.core.seq(seq__23175_23986);
if(temp__5735__auto___23997){
var seq__23175_23998__$1 = temp__5735__auto___23997;
if(cljs.core.chunked_seq_QMARK_(seq__23175_23998__$1)){
var c__4556__auto___23999 = cljs.core.chunk_first(seq__23175_23998__$1);
var G__24000 = cljs.core.chunk_rest(seq__23175_23998__$1);
var G__24001 = c__4556__auto___23999;
var G__24002 = cljs.core.count(c__4556__auto___23999);
var G__24003 = (0);
seq__23175_23986 = G__24000;
chunk__23176_23987 = G__24001;
count__23177_23988 = G__24002;
i__23178_23989 = G__24003;
continue;
} else {
var vec__23198_24004 = cljs.core.first(seq__23175_23998__$1);
var col_24005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23198_24004,(0),null);
var infos_24006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23198_24004,(1),null);
encode_cols(infos_24006,source_idx_23973,line_23984,col_24005);


var G__24007 = cljs.core.next(seq__23175_23998__$1);
var G__24008 = null;
var G__24009 = (0);
var G__24010 = (0);
seq__23175_23986 = G__24007;
chunk__23176_23987 = G__24008;
count__23177_23988 = G__24009;
i__23178_23989 = G__24010;
continue;
}
} else {
}
}
break;
}


var G__24011 = seq__23097_23979;
var G__24012 = chunk__23098_23980;
var G__24013 = count__23099_23981;
var G__24014 = (i__23100_23982 + (1));
seq__23097_23979 = G__24011;
chunk__23098_23980 = G__24012;
count__23099_23981 = G__24013;
i__23100_23982 = G__24014;
continue;
} else {
var temp__5735__auto___24015 = cljs.core.seq(seq__23097_23979);
if(temp__5735__auto___24015){
var seq__23097_24016__$1 = temp__5735__auto___24015;
if(cljs.core.chunked_seq_QMARK_(seq__23097_24016__$1)){
var c__4556__auto___24017 = cljs.core.chunk_first(seq__23097_24016__$1);
var G__24018 = cljs.core.chunk_rest(seq__23097_24016__$1);
var G__24019 = c__4556__auto___24017;
var G__24020 = cljs.core.count(c__4556__auto___24017);
var G__24021 = (0);
seq__23097_23979 = G__24018;
chunk__23098_23980 = G__24019;
count__23099_23981 = G__24020;
i__23100_23982 = G__24021;
continue;
} else {
var vec__23201_24022 = cljs.core.first(seq__23097_24016__$1);
var line_24023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23201_24022,(0),null);
var cols_24024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23201_24022,(1),null);
var seq__23204_24025 = cljs.core.seq(cols_24024);
var chunk__23205_24026 = null;
var count__23206_24027 = (0);
var i__23207_24028 = (0);
while(true){
if((i__23207_24028 < count__23206_24027)){
var vec__23231_24029 = chunk__23205_24026.cljs$core$IIndexed$_nth$arity$2(null,i__23207_24028);
var col_24030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23231_24029,(0),null);
var infos_24031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23231_24029,(1),null);
encode_cols(infos_24031,source_idx_23973,line_24023,col_24030);


var G__24032 = seq__23204_24025;
var G__24033 = chunk__23205_24026;
var G__24034 = count__23206_24027;
var G__24035 = (i__23207_24028 + (1));
seq__23204_24025 = G__24032;
chunk__23205_24026 = G__24033;
count__23206_24027 = G__24034;
i__23207_24028 = G__24035;
continue;
} else {
var temp__5735__auto___24036__$1 = cljs.core.seq(seq__23204_24025);
if(temp__5735__auto___24036__$1){
var seq__23204_24037__$1 = temp__5735__auto___24036__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23204_24037__$1)){
var c__4556__auto___24038 = cljs.core.chunk_first(seq__23204_24037__$1);
var G__24039 = cljs.core.chunk_rest(seq__23204_24037__$1);
var G__24040 = c__4556__auto___24038;
var G__24041 = cljs.core.count(c__4556__auto___24038);
var G__24042 = (0);
seq__23204_24025 = G__24039;
chunk__23205_24026 = G__24040;
count__23206_24027 = G__24041;
i__23207_24028 = G__24042;
continue;
} else {
var vec__23236_24043 = cljs.core.first(seq__23204_24037__$1);
var col_24044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23236_24043,(0),null);
var infos_24045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23236_24043,(1),null);
encode_cols(infos_24045,source_idx_23973,line_24023,col_24044);


var G__24046 = cljs.core.next(seq__23204_24037__$1);
var G__24047 = null;
var G__24048 = (0);
var G__24049 = (0);
seq__23204_24025 = G__24046;
chunk__23205_24026 = G__24047;
count__23206_24027 = G__24048;
i__23207_24028 = G__24049;
continue;
}
} else {
}
}
break;
}


var G__24050 = cljs.core.next(seq__23097_24016__$1);
var G__24051 = null;
var G__24052 = (0);
var G__24053 = (0);
seq__23097_23979 = G__24050;
chunk__23098_23980 = G__24051;
count__23099_23981 = G__24052;
i__23100_23982 = G__24053;
continue;
}
} else {
}
}
break;
}


var G__24054 = seq__22826_23968;
var G__24055 = chunk__22827_23969;
var G__24056 = count__22828_23970;
var G__24057 = (i__22829_23971 + (1));
seq__22826_23968 = G__24054;
chunk__22827_23969 = G__24055;
count__22828_23970 = G__24056;
i__22829_23971 = G__24057;
continue;
} else {
var temp__5735__auto___24058 = cljs.core.seq(seq__22826_23968);
if(temp__5735__auto___24058){
var seq__22826_24059__$1 = temp__5735__auto___24058;
if(cljs.core.chunked_seq_QMARK_(seq__22826_24059__$1)){
var c__4556__auto___24060 = cljs.core.chunk_first(seq__22826_24059__$1);
var G__24061 = cljs.core.chunk_rest(seq__22826_24059__$1);
var G__24062 = c__4556__auto___24060;
var G__24063 = cljs.core.count(c__4556__auto___24060);
var G__24064 = (0);
seq__22826_23968 = G__24061;
chunk__22827_23969 = G__24062;
count__22828_23970 = G__24063;
i__22829_23971 = G__24064;
continue;
} else {
var vec__23239_24065 = cljs.core.first(seq__22826_24059__$1);
var source_idx_24066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23239_24065,(0),null);
var vec__23242_24067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23239_24065,(1),null);
var __24068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23242_24067,(0),null);
var lines_24069__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23242_24067,(1),null);
var seq__23245_24070 = cljs.core.seq(lines_24069__$1);
var chunk__23246_24071 = null;
var count__23247_24072 = (0);
var i__23248_24073 = (0);
while(true){
if((i__23248_24073 < count__23247_24072)){
var vec__23312_24074 = chunk__23246_24071.cljs$core$IIndexed$_nth$arity$2(null,i__23248_24073);
var line_24075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23312_24074,(0),null);
var cols_24076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23312_24074,(1),null);
var seq__23315_24077 = cljs.core.seq(cols_24076);
var chunk__23316_24078 = null;
var count__23317_24079 = (0);
var i__23318_24080 = (0);
while(true){
if((i__23318_24080 < count__23317_24079)){
var vec__23331_24081 = chunk__23316_24078.cljs$core$IIndexed$_nth$arity$2(null,i__23318_24080);
var col_24082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23331_24081,(0),null);
var infos_24083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23331_24081,(1),null);
encode_cols(infos_24083,source_idx_24066,line_24075,col_24082);


var G__24084 = seq__23315_24077;
var G__24085 = chunk__23316_24078;
var G__24086 = count__23317_24079;
var G__24087 = (i__23318_24080 + (1));
seq__23315_24077 = G__24084;
chunk__23316_24078 = G__24085;
count__23317_24079 = G__24086;
i__23318_24080 = G__24087;
continue;
} else {
var temp__5735__auto___24088__$1 = cljs.core.seq(seq__23315_24077);
if(temp__5735__auto___24088__$1){
var seq__23315_24089__$1 = temp__5735__auto___24088__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23315_24089__$1)){
var c__4556__auto___24090 = cljs.core.chunk_first(seq__23315_24089__$1);
var G__24096 = cljs.core.chunk_rest(seq__23315_24089__$1);
var G__24097 = c__4556__auto___24090;
var G__24098 = cljs.core.count(c__4556__auto___24090);
var G__24099 = (0);
seq__23315_24077 = G__24096;
chunk__23316_24078 = G__24097;
count__23317_24079 = G__24098;
i__23318_24080 = G__24099;
continue;
} else {
var vec__23334_24100 = cljs.core.first(seq__23315_24089__$1);
var col_24101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23334_24100,(0),null);
var infos_24102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23334_24100,(1),null);
encode_cols(infos_24102,source_idx_24066,line_24075,col_24101);


var G__24103 = cljs.core.next(seq__23315_24089__$1);
var G__24104 = null;
var G__24105 = (0);
var G__24106 = (0);
seq__23315_24077 = G__24103;
chunk__23316_24078 = G__24104;
count__23317_24079 = G__24105;
i__23318_24080 = G__24106;
continue;
}
} else {
}
}
break;
}


var G__24107 = seq__23245_24070;
var G__24108 = chunk__23246_24071;
var G__24109 = count__23247_24072;
var G__24110 = (i__23248_24073 + (1));
seq__23245_24070 = G__24107;
chunk__23246_24071 = G__24108;
count__23247_24072 = G__24109;
i__23248_24073 = G__24110;
continue;
} else {
var temp__5735__auto___24111__$1 = cljs.core.seq(seq__23245_24070);
if(temp__5735__auto___24111__$1){
var seq__23245_24112__$1 = temp__5735__auto___24111__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23245_24112__$1)){
var c__4556__auto___24113 = cljs.core.chunk_first(seq__23245_24112__$1);
var G__24114 = cljs.core.chunk_rest(seq__23245_24112__$1);
var G__24115 = c__4556__auto___24113;
var G__24116 = cljs.core.count(c__4556__auto___24113);
var G__24117 = (0);
seq__23245_24070 = G__24114;
chunk__23246_24071 = G__24115;
count__23247_24072 = G__24116;
i__23248_24073 = G__24117;
continue;
} else {
var vec__23337_24118 = cljs.core.first(seq__23245_24112__$1);
var line_24119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23337_24118,(0),null);
var cols_24120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23337_24118,(1),null);
var seq__23340_24121 = cljs.core.seq(cols_24120);
var chunk__23341_24122 = null;
var count__23342_24123 = (0);
var i__23343_24124 = (0);
while(true){
if((i__23343_24124 < count__23342_24123)){
var vec__23350_24125 = chunk__23341_24122.cljs$core$IIndexed$_nth$arity$2(null,i__23343_24124);
var col_24126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23350_24125,(0),null);
var infos_24127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23350_24125,(1),null);
encode_cols(infos_24127,source_idx_24066,line_24119,col_24126);


var G__24128 = seq__23340_24121;
var G__24129 = chunk__23341_24122;
var G__24130 = count__23342_24123;
var G__24131 = (i__23343_24124 + (1));
seq__23340_24121 = G__24128;
chunk__23341_24122 = G__24129;
count__23342_24123 = G__24130;
i__23343_24124 = G__24131;
continue;
} else {
var temp__5735__auto___24132__$2 = cljs.core.seq(seq__23340_24121);
if(temp__5735__auto___24132__$2){
var seq__23340_24133__$1 = temp__5735__auto___24132__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23340_24133__$1)){
var c__4556__auto___24134 = cljs.core.chunk_first(seq__23340_24133__$1);
var G__24135 = cljs.core.chunk_rest(seq__23340_24133__$1);
var G__24136 = c__4556__auto___24134;
var G__24137 = cljs.core.count(c__4556__auto___24134);
var G__24138 = (0);
seq__23340_24121 = G__24135;
chunk__23341_24122 = G__24136;
count__23342_24123 = G__24137;
i__23343_24124 = G__24138;
continue;
} else {
var vec__23353_24139 = cljs.core.first(seq__23340_24133__$1);
var col_24140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23353_24139,(0),null);
var infos_24141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23353_24139,(1),null);
encode_cols(infos_24141,source_idx_24066,line_24119,col_24140);


var G__24142 = cljs.core.next(seq__23340_24133__$1);
var G__24143 = null;
var G__24144 = (0);
var G__24145 = (0);
seq__23340_24121 = G__24142;
chunk__23341_24122 = G__24143;
count__23342_24123 = G__24144;
i__23343_24124 = G__24145;
continue;
}
} else {
}
}
break;
}


var G__24146 = cljs.core.next(seq__23245_24112__$1);
var G__24147 = null;
var G__24148 = (0);
var G__24149 = (0);
seq__23245_24070 = G__24146;
chunk__23246_24071 = G__24147;
count__23247_24072 = G__24148;
i__23248_24073 = G__24149;
continue;
}
} else {
}
}
break;
}


var G__24150 = cljs.core.next(seq__22826_24059__$1);
var G__24151 = null;
var G__24152 = (0);
var G__24153 = (0);
seq__22826_23968 = G__24150;
chunk__22827_23969 = G__24151;
count__22828_23970 = G__24152;
i__22829_23971 = G__24153;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__23373 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__22779_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22779_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__22780_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__22780_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22781_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__22781_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__23384 = G__23373;
goog.object.set(G__23384,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__23384;
} else {
return G__23373;
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
var vec__23391 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23391,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23391,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__23394 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23394,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23394,(1),null);
var G__24154 = cljs.core.next(col_map_seq);
var G__24155 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__23394,col,infos,vec__23391,line,col_map){
return (function (v,p__23397){
var map__23398 = p__23397;
var map__23398__$1 = (((((!((map__23398 == null))))?(((((map__23398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23398):map__23398);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23398__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23398__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__23394,col,infos,vec__23391,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__24154;
new_cols = G__24155;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__24163 = cljs.core.next(line_map_seq);
var G__24164 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__24163;
new_lines = G__24164;
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
var seq__23405_24165 = cljs.core.seq(reverse_map);
var chunk__23406_24166 = null;
var count__23407_24167 = (0);
var i__23408_24168 = (0);
while(true){
if((i__23408_24168 < count__23407_24167)){
var vec__23581_24169 = chunk__23406_24166.cljs$core$IIndexed$_nth$arity$2(null,i__23408_24168);
var line_24170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23581_24169,(0),null);
var columns_24171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23581_24169,(1),null);
var seq__23600_24172 = cljs.core.seq(columns_24171);
var chunk__23601_24173 = null;
var count__23602_24174 = (0);
var i__23603_24175 = (0);
while(true){
if((i__23603_24175 < count__23602_24174)){
var vec__23663_24176 = chunk__23601_24173.cljs$core$IIndexed$_nth$arity$2(null,i__23603_24175);
var column_24177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23663_24176,(0),null);
var column_info_24178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23663_24176,(1),null);
var seq__23666_24179 = cljs.core.seq(column_info_24178);
var chunk__23667_24180 = null;
var count__23668_24181 = (0);
var i__23669_24182 = (0);
while(true){
if((i__23669_24182 < count__23668_24181)){
var map__23678_24183 = chunk__23667_24180.cljs$core$IIndexed$_nth$arity$2(null,i__23669_24182);
var map__23678_24184__$1 = (((((!((map__23678_24183 == null))))?(((((map__23678_24183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23678_24183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23678_24183):map__23678_24183);
var gline_24185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23678_24184__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23678_24184__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23678_24184__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24185], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23666_24179,chunk__23667_24180,count__23668_24181,i__23669_24182,seq__23600_24172,chunk__23601_24173,count__23602_24174,i__23603_24175,seq__23405_24165,chunk__23406_24166,count__23407_24167,i__23408_24168,map__23678_24183,map__23678_24184__$1,gline_24185,gcol_24186,name_24187,vec__23663_24176,column_24177,column_info_24178,vec__23581_24169,line_24170,columns_24171,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24186], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24170,new cljs.core.Keyword(null,"col","col",-1959363084),column_24177,new cljs.core.Keyword(null,"name","name",1843675177),name_24187], null));
});})(seq__23666_24179,chunk__23667_24180,count__23668_24181,i__23669_24182,seq__23600_24172,chunk__23601_24173,count__23602_24174,i__23603_24175,seq__23405_24165,chunk__23406_24166,count__23407_24167,i__23408_24168,map__23678_24183,map__23678_24184__$1,gline_24185,gcol_24186,name_24187,vec__23663_24176,column_24177,column_info_24178,vec__23581_24169,line_24170,columns_24171,inverted))
,cljs.core.sorted_map()));


var G__24188 = seq__23666_24179;
var G__24189 = chunk__23667_24180;
var G__24190 = count__23668_24181;
var G__24191 = (i__23669_24182 + (1));
seq__23666_24179 = G__24188;
chunk__23667_24180 = G__24189;
count__23668_24181 = G__24190;
i__23669_24182 = G__24191;
continue;
} else {
var temp__5735__auto___24192 = cljs.core.seq(seq__23666_24179);
if(temp__5735__auto___24192){
var seq__23666_24193__$1 = temp__5735__auto___24192;
if(cljs.core.chunked_seq_QMARK_(seq__23666_24193__$1)){
var c__4556__auto___24194 = cljs.core.chunk_first(seq__23666_24193__$1);
var G__24195 = cljs.core.chunk_rest(seq__23666_24193__$1);
var G__24196 = c__4556__auto___24194;
var G__24197 = cljs.core.count(c__4556__auto___24194);
var G__24198 = (0);
seq__23666_24179 = G__24195;
chunk__23667_24180 = G__24196;
count__23668_24181 = G__24197;
i__23669_24182 = G__24198;
continue;
} else {
var map__23709_24199 = cljs.core.first(seq__23666_24193__$1);
var map__23709_24200__$1 = (((((!((map__23709_24199 == null))))?(((((map__23709_24199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23709_24199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23709_24199):map__23709_24199);
var gline_24201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23709_24200__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23709_24200__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24203 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23709_24200__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24201], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23666_24179,chunk__23667_24180,count__23668_24181,i__23669_24182,seq__23600_24172,chunk__23601_24173,count__23602_24174,i__23603_24175,seq__23405_24165,chunk__23406_24166,count__23407_24167,i__23408_24168,map__23709_24199,map__23709_24200__$1,gline_24201,gcol_24202,name_24203,seq__23666_24193__$1,temp__5735__auto___24192,vec__23663_24176,column_24177,column_info_24178,vec__23581_24169,line_24170,columns_24171,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24202], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24170,new cljs.core.Keyword(null,"col","col",-1959363084),column_24177,new cljs.core.Keyword(null,"name","name",1843675177),name_24203], null));
});})(seq__23666_24179,chunk__23667_24180,count__23668_24181,i__23669_24182,seq__23600_24172,chunk__23601_24173,count__23602_24174,i__23603_24175,seq__23405_24165,chunk__23406_24166,count__23407_24167,i__23408_24168,map__23709_24199,map__23709_24200__$1,gline_24201,gcol_24202,name_24203,seq__23666_24193__$1,temp__5735__auto___24192,vec__23663_24176,column_24177,column_info_24178,vec__23581_24169,line_24170,columns_24171,inverted))
,cljs.core.sorted_map()));


var G__24204 = cljs.core.next(seq__23666_24193__$1);
var G__24205 = null;
var G__24206 = (0);
var G__24207 = (0);
seq__23666_24179 = G__24204;
chunk__23667_24180 = G__24205;
count__23668_24181 = G__24206;
i__23669_24182 = G__24207;
continue;
}
} else {
}
}
break;
}


var G__24208 = seq__23600_24172;
var G__24209 = chunk__23601_24173;
var G__24210 = count__23602_24174;
var G__24211 = (i__23603_24175 + (1));
seq__23600_24172 = G__24208;
chunk__23601_24173 = G__24209;
count__23602_24174 = G__24210;
i__23603_24175 = G__24211;
continue;
} else {
var temp__5735__auto___24212 = cljs.core.seq(seq__23600_24172);
if(temp__5735__auto___24212){
var seq__23600_24213__$1 = temp__5735__auto___24212;
if(cljs.core.chunked_seq_QMARK_(seq__23600_24213__$1)){
var c__4556__auto___24214 = cljs.core.chunk_first(seq__23600_24213__$1);
var G__24215 = cljs.core.chunk_rest(seq__23600_24213__$1);
var G__24216 = c__4556__auto___24214;
var G__24217 = cljs.core.count(c__4556__auto___24214);
var G__24218 = (0);
seq__23600_24172 = G__24215;
chunk__23601_24173 = G__24216;
count__23602_24174 = G__24217;
i__23603_24175 = G__24218;
continue;
} else {
var vec__23715_24219 = cljs.core.first(seq__23600_24213__$1);
var column_24220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23715_24219,(0),null);
var column_info_24221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23715_24219,(1),null);
var seq__23719_24222 = cljs.core.seq(column_info_24221);
var chunk__23720_24223 = null;
var count__23721_24224 = (0);
var i__23722_24225 = (0);
while(true){
if((i__23722_24225 < count__23721_24224)){
var map__23751_24234 = chunk__23720_24223.cljs$core$IIndexed$_nth$arity$2(null,i__23722_24225);
var map__23751_24235__$1 = (((((!((map__23751_24234 == null))))?(((((map__23751_24234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23751_24234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23751_24234):map__23751_24234);
var gline_24236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23751_24235__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23751_24235__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23751_24235__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24236], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23719_24222,chunk__23720_24223,count__23721_24224,i__23722_24225,seq__23600_24172,chunk__23601_24173,count__23602_24174,i__23603_24175,seq__23405_24165,chunk__23406_24166,count__23407_24167,i__23408_24168,map__23751_24234,map__23751_24235__$1,gline_24236,gcol_24237,name_24238,vec__23715_24219,column_24220,column_info_24221,seq__23600_24213__$1,temp__5735__auto___24212,vec__23581_24169,line_24170,columns_24171,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24237], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24170,new cljs.core.Keyword(null,"col","col",-1959363084),column_24220,new cljs.core.Keyword(null,"name","name",1843675177),name_24238], null));
});})(seq__23719_24222,chunk__23720_24223,count__23721_24224,i__23722_24225,seq__23600_24172,chunk__23601_24173,count__23602_24174,i__23603_24175,seq__23405_24165,chunk__23406_24166,count__23407_24167,i__23408_24168,map__23751_24234,map__23751_24235__$1,gline_24236,gcol_24237,name_24238,vec__23715_24219,column_24220,column_info_24221,seq__23600_24213__$1,temp__5735__auto___24212,vec__23581_24169,line_24170,columns_24171,inverted))
,cljs.core.sorted_map()));


var G__24239 = seq__23719_24222;
var G__24240 = chunk__23720_24223;
var G__24241 = count__23721_24224;
var G__24242 = (i__23722_24225 + (1));
seq__23719_24222 = G__24239;
chunk__23720_24223 = G__24240;
count__23721_24224 = G__24241;
i__23722_24225 = G__24242;
continue;
} else {
var temp__5735__auto___24243__$1 = cljs.core.seq(seq__23719_24222);
if(temp__5735__auto___24243__$1){
var seq__23719_24244__$1 = temp__5735__auto___24243__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23719_24244__$1)){
var c__4556__auto___24245 = cljs.core.chunk_first(seq__23719_24244__$1);
var G__24246 = cljs.core.chunk_rest(seq__23719_24244__$1);
var G__24247 = c__4556__auto___24245;
var G__24248 = cljs.core.count(c__4556__auto___24245);
var G__24249 = (0);
seq__23719_24222 = G__24246;
chunk__23720_24223 = G__24247;
count__23721_24224 = G__24248;
i__23722_24225 = G__24249;
continue;
} else {
var map__23757_24250 = cljs.core.first(seq__23719_24244__$1);
var map__23757_24251__$1 = (((((!((map__23757_24250 == null))))?(((((map__23757_24250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23757_24250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23757_24250):map__23757_24250);
var gline_24252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23757_24251__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23757_24251__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23757_24251__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24252], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23719_24222,chunk__23720_24223,count__23721_24224,i__23722_24225,seq__23600_24172,chunk__23601_24173,count__23602_24174,i__23603_24175,seq__23405_24165,chunk__23406_24166,count__23407_24167,i__23408_24168,map__23757_24250,map__23757_24251__$1,gline_24252,gcol_24253,name_24254,seq__23719_24244__$1,temp__5735__auto___24243__$1,vec__23715_24219,column_24220,column_info_24221,seq__23600_24213__$1,temp__5735__auto___24212,vec__23581_24169,line_24170,columns_24171,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24253], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24170,new cljs.core.Keyword(null,"col","col",-1959363084),column_24220,new cljs.core.Keyword(null,"name","name",1843675177),name_24254], null));
});})(seq__23719_24222,chunk__23720_24223,count__23721_24224,i__23722_24225,seq__23600_24172,chunk__23601_24173,count__23602_24174,i__23603_24175,seq__23405_24165,chunk__23406_24166,count__23407_24167,i__23408_24168,map__23757_24250,map__23757_24251__$1,gline_24252,gcol_24253,name_24254,seq__23719_24244__$1,temp__5735__auto___24243__$1,vec__23715_24219,column_24220,column_info_24221,seq__23600_24213__$1,temp__5735__auto___24212,vec__23581_24169,line_24170,columns_24171,inverted))
,cljs.core.sorted_map()));


var G__24255 = cljs.core.next(seq__23719_24244__$1);
var G__24256 = null;
var G__24257 = (0);
var G__24258 = (0);
seq__23719_24222 = G__24255;
chunk__23720_24223 = G__24256;
count__23721_24224 = G__24257;
i__23722_24225 = G__24258;
continue;
}
} else {
}
}
break;
}


var G__24259 = cljs.core.next(seq__23600_24213__$1);
var G__24260 = null;
var G__24261 = (0);
var G__24262 = (0);
seq__23600_24172 = G__24259;
chunk__23601_24173 = G__24260;
count__23602_24174 = G__24261;
i__23603_24175 = G__24262;
continue;
}
} else {
}
}
break;
}


var G__24263 = seq__23405_24165;
var G__24264 = chunk__23406_24166;
var G__24265 = count__23407_24167;
var G__24266 = (i__23408_24168 + (1));
seq__23405_24165 = G__24263;
chunk__23406_24166 = G__24264;
count__23407_24167 = G__24265;
i__23408_24168 = G__24266;
continue;
} else {
var temp__5735__auto___24267 = cljs.core.seq(seq__23405_24165);
if(temp__5735__auto___24267){
var seq__23405_24268__$1 = temp__5735__auto___24267;
if(cljs.core.chunked_seq_QMARK_(seq__23405_24268__$1)){
var c__4556__auto___24269 = cljs.core.chunk_first(seq__23405_24268__$1);
var G__24270 = cljs.core.chunk_rest(seq__23405_24268__$1);
var G__24271 = c__4556__auto___24269;
var G__24272 = cljs.core.count(c__4556__auto___24269);
var G__24273 = (0);
seq__23405_24165 = G__24270;
chunk__23406_24166 = G__24271;
count__23407_24167 = G__24272;
i__23408_24168 = G__24273;
continue;
} else {
var vec__23774_24274 = cljs.core.first(seq__23405_24268__$1);
var line_24275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23774_24274,(0),null);
var columns_24276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23774_24274,(1),null);
var seq__23778_24277 = cljs.core.seq(columns_24276);
var chunk__23779_24278 = null;
var count__23780_24279 = (0);
var i__23781_24280 = (0);
while(true){
if((i__23781_24280 < count__23780_24279)){
var vec__23872_24281 = chunk__23779_24278.cljs$core$IIndexed$_nth$arity$2(null,i__23781_24280);
var column_24282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23872_24281,(0),null);
var column_info_24283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23872_24281,(1),null);
var seq__23875_24284 = cljs.core.seq(column_info_24283);
var chunk__23876_24285 = null;
var count__23877_24286 = (0);
var i__23878_24287 = (0);
while(true){
if((i__23878_24287 < count__23877_24286)){
var map__23890_24288 = chunk__23876_24285.cljs$core$IIndexed$_nth$arity$2(null,i__23878_24287);
var map__23890_24289__$1 = (((((!((map__23890_24288 == null))))?(((((map__23890_24288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23890_24288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23890_24288):map__23890_24288);
var gline_24290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23890_24289__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23890_24289__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23890_24289__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24290], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23875_24284,chunk__23876_24285,count__23877_24286,i__23878_24287,seq__23778_24277,chunk__23779_24278,count__23780_24279,i__23781_24280,seq__23405_24165,chunk__23406_24166,count__23407_24167,i__23408_24168,map__23890_24288,map__23890_24289__$1,gline_24290,gcol_24291,name_24292,vec__23872_24281,column_24282,column_info_24283,vec__23774_24274,line_24275,columns_24276,seq__23405_24268__$1,temp__5735__auto___24267,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24291], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24275,new cljs.core.Keyword(null,"col","col",-1959363084),column_24282,new cljs.core.Keyword(null,"name","name",1843675177),name_24292], null));
});})(seq__23875_24284,chunk__23876_24285,count__23877_24286,i__23878_24287,seq__23778_24277,chunk__23779_24278,count__23780_24279,i__23781_24280,seq__23405_24165,chunk__23406_24166,count__23407_24167,i__23408_24168,map__23890_24288,map__23890_24289__$1,gline_24290,gcol_24291,name_24292,vec__23872_24281,column_24282,column_info_24283,vec__23774_24274,line_24275,columns_24276,seq__23405_24268__$1,temp__5735__auto___24267,inverted))
,cljs.core.sorted_map()));


var G__24293 = seq__23875_24284;
var G__24294 = chunk__23876_24285;
var G__24295 = count__23877_24286;
var G__24296 = (i__23878_24287 + (1));
seq__23875_24284 = G__24293;
chunk__23876_24285 = G__24294;
count__23877_24286 = G__24295;
i__23878_24287 = G__24296;
continue;
} else {
var temp__5735__auto___24297__$1 = cljs.core.seq(seq__23875_24284);
if(temp__5735__auto___24297__$1){
var seq__23875_24298__$1 = temp__5735__auto___24297__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23875_24298__$1)){
var c__4556__auto___24299 = cljs.core.chunk_first(seq__23875_24298__$1);
var G__24300 = cljs.core.chunk_rest(seq__23875_24298__$1);
var G__24301 = c__4556__auto___24299;
var G__24302 = cljs.core.count(c__4556__auto___24299);
var G__24303 = (0);
seq__23875_24284 = G__24300;
chunk__23876_24285 = G__24301;
count__23877_24286 = G__24302;
i__23878_24287 = G__24303;
continue;
} else {
var map__23892_24304 = cljs.core.first(seq__23875_24298__$1);
var map__23892_24305__$1 = (((((!((map__23892_24304 == null))))?(((((map__23892_24304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23892_24304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23892_24304):map__23892_24304);
var gline_24306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23892_24305__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23892_24305__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23892_24305__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24306], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23875_24284,chunk__23876_24285,count__23877_24286,i__23878_24287,seq__23778_24277,chunk__23779_24278,count__23780_24279,i__23781_24280,seq__23405_24165,chunk__23406_24166,count__23407_24167,i__23408_24168,map__23892_24304,map__23892_24305__$1,gline_24306,gcol_24307,name_24308,seq__23875_24298__$1,temp__5735__auto___24297__$1,vec__23872_24281,column_24282,column_info_24283,vec__23774_24274,line_24275,columns_24276,seq__23405_24268__$1,temp__5735__auto___24267,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24307], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24275,new cljs.core.Keyword(null,"col","col",-1959363084),column_24282,new cljs.core.Keyword(null,"name","name",1843675177),name_24308], null));
});})(seq__23875_24284,chunk__23876_24285,count__23877_24286,i__23878_24287,seq__23778_24277,chunk__23779_24278,count__23780_24279,i__23781_24280,seq__23405_24165,chunk__23406_24166,count__23407_24167,i__23408_24168,map__23892_24304,map__23892_24305__$1,gline_24306,gcol_24307,name_24308,seq__23875_24298__$1,temp__5735__auto___24297__$1,vec__23872_24281,column_24282,column_info_24283,vec__23774_24274,line_24275,columns_24276,seq__23405_24268__$1,temp__5735__auto___24267,inverted))
,cljs.core.sorted_map()));


var G__24309 = cljs.core.next(seq__23875_24298__$1);
var G__24310 = null;
var G__24311 = (0);
var G__24312 = (0);
seq__23875_24284 = G__24309;
chunk__23876_24285 = G__24310;
count__23877_24286 = G__24311;
i__23878_24287 = G__24312;
continue;
}
} else {
}
}
break;
}


var G__24313 = seq__23778_24277;
var G__24314 = chunk__23779_24278;
var G__24315 = count__23780_24279;
var G__24316 = (i__23781_24280 + (1));
seq__23778_24277 = G__24313;
chunk__23779_24278 = G__24314;
count__23780_24279 = G__24315;
i__23781_24280 = G__24316;
continue;
} else {
var temp__5735__auto___24317__$1 = cljs.core.seq(seq__23778_24277);
if(temp__5735__auto___24317__$1){
var seq__23778_24318__$1 = temp__5735__auto___24317__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23778_24318__$1)){
var c__4556__auto___24319 = cljs.core.chunk_first(seq__23778_24318__$1);
var G__24320 = cljs.core.chunk_rest(seq__23778_24318__$1);
var G__24321 = c__4556__auto___24319;
var G__24322 = cljs.core.count(c__4556__auto___24319);
var G__24323 = (0);
seq__23778_24277 = G__24320;
chunk__23779_24278 = G__24321;
count__23780_24279 = G__24322;
i__23781_24280 = G__24323;
continue;
} else {
var vec__23894_24324 = cljs.core.first(seq__23778_24318__$1);
var column_24325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23894_24324,(0),null);
var column_info_24326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23894_24324,(1),null);
var seq__23897_24327 = cljs.core.seq(column_info_24326);
var chunk__23898_24328 = null;
var count__23899_24329 = (0);
var i__23900_24330 = (0);
while(true){
if((i__23900_24330 < count__23899_24329)){
var map__23916_24331 = chunk__23898_24328.cljs$core$IIndexed$_nth$arity$2(null,i__23900_24330);
var map__23916_24332__$1 = (((((!((map__23916_24331 == null))))?(((((map__23916_24331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23916_24331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23916_24331):map__23916_24331);
var gline_24333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23916_24332__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23916_24332__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23916_24332__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24333], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23897_24327,chunk__23898_24328,count__23899_24329,i__23900_24330,seq__23778_24277,chunk__23779_24278,count__23780_24279,i__23781_24280,seq__23405_24165,chunk__23406_24166,count__23407_24167,i__23408_24168,map__23916_24331,map__23916_24332__$1,gline_24333,gcol_24334,name_24335,vec__23894_24324,column_24325,column_info_24326,seq__23778_24318__$1,temp__5735__auto___24317__$1,vec__23774_24274,line_24275,columns_24276,seq__23405_24268__$1,temp__5735__auto___24267,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24334], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24275,new cljs.core.Keyword(null,"col","col",-1959363084),column_24325,new cljs.core.Keyword(null,"name","name",1843675177),name_24335], null));
});})(seq__23897_24327,chunk__23898_24328,count__23899_24329,i__23900_24330,seq__23778_24277,chunk__23779_24278,count__23780_24279,i__23781_24280,seq__23405_24165,chunk__23406_24166,count__23407_24167,i__23408_24168,map__23916_24331,map__23916_24332__$1,gline_24333,gcol_24334,name_24335,vec__23894_24324,column_24325,column_info_24326,seq__23778_24318__$1,temp__5735__auto___24317__$1,vec__23774_24274,line_24275,columns_24276,seq__23405_24268__$1,temp__5735__auto___24267,inverted))
,cljs.core.sorted_map()));


var G__24336 = seq__23897_24327;
var G__24337 = chunk__23898_24328;
var G__24338 = count__23899_24329;
var G__24339 = (i__23900_24330 + (1));
seq__23897_24327 = G__24336;
chunk__23898_24328 = G__24337;
count__23899_24329 = G__24338;
i__23900_24330 = G__24339;
continue;
} else {
var temp__5735__auto___24340__$2 = cljs.core.seq(seq__23897_24327);
if(temp__5735__auto___24340__$2){
var seq__23897_24342__$1 = temp__5735__auto___24340__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23897_24342__$1)){
var c__4556__auto___24343 = cljs.core.chunk_first(seq__23897_24342__$1);
var G__24345 = cljs.core.chunk_rest(seq__23897_24342__$1);
var G__24346 = c__4556__auto___24343;
var G__24347 = cljs.core.count(c__4556__auto___24343);
var G__24348 = (0);
seq__23897_24327 = G__24345;
chunk__23898_24328 = G__24346;
count__23899_24329 = G__24347;
i__23900_24330 = G__24348;
continue;
} else {
var map__23918_24349 = cljs.core.first(seq__23897_24342__$1);
var map__23918_24350__$1 = (((((!((map__23918_24349 == null))))?(((((map__23918_24349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23918_24349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23918_24349):map__23918_24349);
var gline_24351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23918_24350__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23918_24350__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23918_24350__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24351], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23897_24327,chunk__23898_24328,count__23899_24329,i__23900_24330,seq__23778_24277,chunk__23779_24278,count__23780_24279,i__23781_24280,seq__23405_24165,chunk__23406_24166,count__23407_24167,i__23408_24168,map__23918_24349,map__23918_24350__$1,gline_24351,gcol_24352,name_24353,seq__23897_24342__$1,temp__5735__auto___24340__$2,vec__23894_24324,column_24325,column_info_24326,seq__23778_24318__$1,temp__5735__auto___24317__$1,vec__23774_24274,line_24275,columns_24276,seq__23405_24268__$1,temp__5735__auto___24267,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24352], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24275,new cljs.core.Keyword(null,"col","col",-1959363084),column_24325,new cljs.core.Keyword(null,"name","name",1843675177),name_24353], null));
});})(seq__23897_24327,chunk__23898_24328,count__23899_24329,i__23900_24330,seq__23778_24277,chunk__23779_24278,count__23780_24279,i__23781_24280,seq__23405_24165,chunk__23406_24166,count__23407_24167,i__23408_24168,map__23918_24349,map__23918_24350__$1,gline_24351,gcol_24352,name_24353,seq__23897_24342__$1,temp__5735__auto___24340__$2,vec__23894_24324,column_24325,column_info_24326,seq__23778_24318__$1,temp__5735__auto___24317__$1,vec__23774_24274,line_24275,columns_24276,seq__23405_24268__$1,temp__5735__auto___24267,inverted))
,cljs.core.sorted_map()));


var G__24363 = cljs.core.next(seq__23897_24342__$1);
var G__24364 = null;
var G__24365 = (0);
var G__24366 = (0);
seq__23897_24327 = G__24363;
chunk__23898_24328 = G__24364;
count__23899_24329 = G__24365;
i__23900_24330 = G__24366;
continue;
}
} else {
}
}
break;
}


var G__24367 = cljs.core.next(seq__23778_24318__$1);
var G__24368 = null;
var G__24369 = (0);
var G__24370 = (0);
seq__23778_24277 = G__24367;
chunk__23779_24278 = G__24368;
count__23780_24279 = G__24369;
i__23781_24280 = G__24370;
continue;
}
} else {
}
}
break;
}


var G__24371 = cljs.core.next(seq__23405_24268__$1);
var G__24372 = null;
var G__24373 = (0);
var G__24374 = (0);
seq__23405_24165 = G__24371;
chunk__23406_24166 = G__24372;
count__23407_24167 = G__24373;
i__23408_24168 = G__24374;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
