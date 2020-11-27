goog.provide('cljs.compiler');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv((function (xs,ns,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.compiler.get_first_ns_segment(ns))){
return cljs.core.reduced(needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__24469 = s;
var map__24469__$1 = (((((!((map__24469 == null))))?(((((map__24469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24469):map__24469);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24469__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24469__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__24472 = info;
var map__24473 = G__24472;
var map__24473__$1 = (((((!((map__24473 == null))))?(((((map__24473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24473):map__24473);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24473__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__24472__$1 = G__24472;
while(true){
var d__$2 = d__$1;
var map__24477 = G__24472__$1;
var map__24477__$1 = (((((!((map__24477 == null))))?(((((map__24477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24477):map__24477);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24477__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__25356 = (d__$2 + (1));
var G__25357 = shadow__$1;
d__$1 = G__25356;
G__24472__$1 = G__25357;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__24479){
var map__24480 = p__24479;
var map__24480__$1 = (((((!((map__24480 == null))))?(((((map__24480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24480):map__24480);
var name_var = map__24480__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24480__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24480__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__24482 = info;
var map__24482__$1 = (((((!((map__24482 == null))))?(((((map__24482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24482):map__24482);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24482__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24482__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__24484 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__24484) : cljs.compiler.munge.call(null,G__24484));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__24486 = arguments.length;
switch (G__24486) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
}));

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = (function (){var fexpr__24487 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11501,11501,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__24487.cljs$core$IFn$_invoke$arity$1 ? fexpr__24487.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__24487.call(null,ss__$3));
})();
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
}));

(cljs.compiler.munge.cljs$lang$maxFixedArity = 2);

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__24488 = cp;
switch (G__24488) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return ["\\u",pad,cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__24538_25360 = cljs.core.seq(s);
var chunk__24539_25361 = null;
var count__24540_25362 = (0);
var i__24541_25363 = (0);
while(true){
if((i__24541_25363 < count__24540_25362)){
var c_25364 = chunk__24539_25361.cljs$core$IIndexed$_nth$arity$2(null,i__24541_25363);
sb.append(cljs.compiler.escape_char(c_25364));


var G__25365 = seq__24538_25360;
var G__25366 = chunk__24539_25361;
var G__25367 = count__24540_25362;
var G__25368 = (i__24541_25363 + (1));
seq__24538_25360 = G__25365;
chunk__24539_25361 = G__25366;
count__24540_25362 = G__25367;
i__24541_25363 = G__25368;
continue;
} else {
var temp__5735__auto___25369 = cljs.core.seq(seq__24538_25360);
if(temp__5735__auto___25369){
var seq__24538_25370__$1 = temp__5735__auto___25369;
if(cljs.core.chunked_seq_QMARK_(seq__24538_25370__$1)){
var c__4556__auto___25371 = cljs.core.chunk_first(seq__24538_25370__$1);
var G__25372 = cljs.core.chunk_rest(seq__24538_25370__$1);
var G__25373 = c__4556__auto___25371;
var G__25374 = cljs.core.count(c__4556__auto___25371);
var G__25375 = (0);
seq__24538_25360 = G__25372;
chunk__24539_25361 = G__25373;
count__24540_25362 = G__25374;
i__24541_25363 = G__25375;
continue;
} else {
var c_25376 = cljs.core.first(seq__24538_25370__$1);
sb.append(cljs.compiler.escape_char(c_25376));


var G__25377 = cljs.core.next(seq__24538_25370__$1);
var G__25378 = null;
var G__25379 = (0);
var G__25380 = (0);
seq__24538_25360 = G__25377;
chunk__24539_25361 = G__25378;
count__24540_25362 = G__25379;
i__24541_25363 = G__25380;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
cljs.compiler.emit_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__24545 = cljs.core.get_global_hierarchy;
return (fexpr__24545.cljs$core$IFn$_invoke$arity$0 ? fexpr__24545.cljs$core$IFn$_invoke$arity$0() : fexpr__24545.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__24546_25381 = ast;
var map__24546_25382__$1 = (((((!((map__24546_25381 == null))))?(((((map__24546_25381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24546_25381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24546_25381):map__24546_25381);
var env_25383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24546_25382__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_25383))){
var map__24548_25384 = env_25383;
var map__24548_25385__$1 = (((((!((map__24548_25384 == null))))?(((((map__24548_25384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24548_25384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24548_25384):map__24548_25384);
var line_25386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24548_25385__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_25387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24548_25385__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__24550 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__24552 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__24551 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__24551.cljs$core$IFn$_invoke$arity$1 ? fexpr__24551.cljs$core$IFn$_invoke$arity$1(G__24552) : fexpr__24551.call(null,G__24552));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24550,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__24550;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_25386 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_25387)?(column_25387 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}));
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__24561 = arguments.length;
switch (G__24561) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___25389 = arguments.length;
var i__4737__auto___25390 = (0);
while(true){
if((i__4737__auto___25390 < len__4736__auto___25389)){
args_arr__4757__auto__.push((arguments[i__4737__auto___25390]));

var G__25391 = (i__4737__auto___25390 + (1));
i__4737__auto___25390 = G__25391;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(a)){
cljs.compiler.emit(a);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(a)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,a);
} else {
if(goog.isFunction(a)){
(a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null));
} else {
var s_25392 = (function (){var G__24566 = a;
if((!(typeof a === 'string'))){
return G__24566.toString();
} else {
return G__24566;
}
})();
var temp__5739__auto___25393 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___25393 == null)){
} else {
var sm_data_25394 = temp__5739__auto___25393;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_25394,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__24553_SHARP_){
return (p1__24553_SHARP_ + s_25392.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_25392], 0));

}
}
}
}

return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__24568 = cljs.core.seq(xs);
var chunk__24569 = null;
var count__24570 = (0);
var i__24571 = (0);
while(true){
if((i__24571 < count__24570)){
var x = chunk__24569.cljs$core$IIndexed$_nth$arity$2(null,i__24571);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__25395 = seq__24568;
var G__25396 = chunk__24569;
var G__25397 = count__24570;
var G__25398 = (i__24571 + (1));
seq__24568 = G__25395;
chunk__24569 = G__25396;
count__24570 = G__25397;
i__24571 = G__25398;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__24568);
if(temp__5735__auto__){
var seq__24568__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24568__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24568__$1);
var G__25399 = cljs.core.chunk_rest(seq__24568__$1);
var G__25400 = c__4556__auto__;
var G__25401 = cljs.core.count(c__4556__auto__);
var G__25402 = (0);
seq__24568 = G__25399;
chunk__24569 = G__25400;
count__24570 = G__25401;
i__24571 = G__25402;
continue;
} else {
var x = cljs.core.first(seq__24568__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__25403 = cljs.core.next(seq__24568__$1);
var G__25404 = null;
var G__25405 = (0);
var G__25406 = (0);
seq__24568 = G__25403;
chunk__24569 = G__25404;
count__24570 = G__25405;
i__24571 = G__25406;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq24555){
var G__24556 = cljs.core.first(seq24555);
var seq24555__$1 = cljs.core.next(seq24555);
var G__24557 = cljs.core.first(seq24555__$1);
var seq24555__$2 = cljs.core.next(seq24555__$1);
var G__24558 = cljs.core.first(seq24555__$2);
var seq24555__$3 = cljs.core.next(seq24555__$2);
var G__24559 = cljs.core.first(seq24555__$3);
var seq24555__$4 = cljs.core.next(seq24555__$3);
var G__24560 = cljs.core.first(seq24555__$4);
var seq24555__$5 = cljs.core.next(seq24555__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24556,G__24557,G__24558,G__24559,G__24560,seq24555__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__24590){
var map__24591 = p__24590;
var map__24591__$1 = (((((!((map__24591 == null))))?(((((map__24591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24591):map__24591);
var m = map__24591__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24591__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__24601 = arguments.length;
switch (G__24601) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___25408 = arguments.length;
var i__4737__auto___25409 = (0);
while(true){
if((i__4737__auto___25409 < len__4736__auto___25408)){
args_arr__4757__auto__.push((arguments[i__4737__auto___25409]));

var G__25410 = (i__4737__auto___25409 + (1));
i__4737__auto___25409 = G__25410;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__24612_25411 = cljs.core.seq(xs);
var chunk__24613_25412 = null;
var count__24614_25413 = (0);
var i__24615_25414 = (0);
while(true){
if((i__24615_25414 < count__24614_25413)){
var x_25415 = chunk__24613_25412.cljs$core$IIndexed$_nth$arity$2(null,i__24615_25414);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_25415);


var G__25416 = seq__24612_25411;
var G__25417 = chunk__24613_25412;
var G__25418 = count__24614_25413;
var G__25419 = (i__24615_25414 + (1));
seq__24612_25411 = G__25416;
chunk__24613_25412 = G__25417;
count__24614_25413 = G__25418;
i__24615_25414 = G__25419;
continue;
} else {
var temp__5735__auto___25420 = cljs.core.seq(seq__24612_25411);
if(temp__5735__auto___25420){
var seq__24612_25421__$1 = temp__5735__auto___25420;
if(cljs.core.chunked_seq_QMARK_(seq__24612_25421__$1)){
var c__4556__auto___25422 = cljs.core.chunk_first(seq__24612_25421__$1);
var G__25423 = cljs.core.chunk_rest(seq__24612_25421__$1);
var G__25424 = c__4556__auto___25422;
var G__25425 = cljs.core.count(c__4556__auto___25422);
var G__25426 = (0);
seq__24612_25411 = G__25423;
chunk__24613_25412 = G__25424;
count__24614_25413 = G__25425;
i__24615_25414 = G__25426;
continue;
} else {
var x_25427 = cljs.core.first(seq__24612_25421__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_25427);


var G__25428 = cljs.core.next(seq__24612_25421__$1);
var G__25429 = null;
var G__25430 = (0);
var G__25431 = (0);
seq__24612_25411 = G__25428;
chunk__24613_25412 = G__25429;
count__24614_25413 = G__25430;
i__24615_25414 = G__25431;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln();
}));

/** @this {Function} */
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq24595){
var G__24596 = cljs.core.first(seq24595);
var seq24595__$1 = cljs.core.next(seq24595);
var G__24597 = cljs.core.first(seq24595__$1);
var seq24595__$2 = cljs.core.next(seq24595__$1);
var G__24598 = cljs.core.first(seq24595__$2);
var seq24595__$3 = cljs.core.next(seq24595__$2);
var G__24599 = cljs.core.first(seq24595__$3);
var seq24595__$4 = cljs.core.next(seq24595__$3);
var G__24600 = cljs.core.first(seq24595__$4);
var seq24595__$5 = cljs.core.next(seq24595__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24596,G__24597,G__24598,G__24599,G__24600,seq24595__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24617_25432 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24618_25433 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24619_25434 = true;
var _STAR_print_fn_STAR__temp_val__24620_25435 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24619_25434);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24620_25435);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24618_25433);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24617_25432);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__24621 = cljs.core.get_global_hierarchy;
return (fexpr__24621.cljs$core$IFn$_invoke$arity$0 ? fexpr__24621.cljs$core$IFn$_invoke$arity$0() : fexpr__24621.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_(x)){
return (cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.core.record_QMARK_(x)){
var vec__24623 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24623,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24623,(1),null);
var G__24626 = ns;
var G__24627 = name;
var G__24628 = (function (){
var G__24629 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__24629) : cljs.compiler.emit_constant.call(null,G__24629));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__24626,G__24627,G__24628) : cljs.compiler.emit_record_value.call(null,G__24626,G__24627,G__24628));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__24631 = cljs.core.keys(x);
var G__24632 = cljs.core.vals(x);
var G__24633 = cljs.compiler.emit_constants_comma_sep;
var G__24634 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__24631,G__24632,G__24633,G__24634) : cljs.compiler.emit_map.call(null,G__24631,G__24632,G__24633,G__24634));
} else {
if(cljs.analyzer.cljs_vector_QMARK_(x)){
return (cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.analyzer.cljs_set_QMARK_(x)){
return (cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3(x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_) : cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_));
} else {
return cljs.compiler.emit_constant_STAR_.cljs$core$IFn$_invoke$arity$1(x);

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta(cljs.core.meta(v));
if((!((cljs.core.seq(m) == null)))){
var G__24635 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__24636 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__24635,G__24636) : cljs.compiler.emit_with_meta.call(null,G__24635,G__24636));
} else {
return cljs.compiler.emit_constant_no_meta(v);
}
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("null");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("NaN");
} else {
if(cljs.core.not(isFinite(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(",x,")");

}
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x)));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(x)?"true":"false"));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(new RegExp(\"\"))");
} else {
var vec__24663 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24663,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24663,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24663,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Keyword(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant((cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(kw));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Symbol(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(symstr);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(sym));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(null);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__5733__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
var G__24667 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__24667) : x.call(null,G__24667));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var temp__5733__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
var G__24672 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__24672) : x.call(null,G__24672));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,m){
if(cljs.core.even_QMARK_(i)){
return cljs.compiler.emit_constant(m);
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(m);
}
}),cljs.compiler.comma_sep(cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("new Date(",date.getTime(),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_(items)){
var G__24674 = items;
var G__24675 = (function (p1__24673_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__24673_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__24674,G__24675) : cljs.compiler.emit_js_object.call(null,G__24674,G__24675));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__24677){
var map__24678 = p__24677;
var map__24678__$1 = (((((!((map__24678 == null))))?(((((map__24678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24678):map__24678);
var ast = map__24678__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24678__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24678__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24678__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__24680 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__24680__$1 = (((((!((map__24680 == null))))?(((((map__24680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24680):map__24680);
var cenv = map__24680__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24680__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4126__auto__ = js_module_name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ast));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__24682 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__24685 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__24685) : cljs.compiler.es5_GT__EQ_.call(null,G__24685));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__24682,cljs.analyzer.es5_allowed);
} else {
return G__24682;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__24686 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__24686,reserved);
} else {
return G__24686;
}
})();
var env__24463__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__24687_25436 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__24687_25437__$1 = (((G__24687_25436 instanceof cljs.core.Keyword))?G__24687_25436.fqn:null);
switch (G__24687_25437__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace(var_name))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"].",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default",cljs.core.name(var_name));
} else {
return and__4115__auto__;
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);
}

break;
default:
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);

}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__24696){
var map__24697 = p__24696;
var map__24697__$1 = (((((!((map__24697 == null))))?(((((map__24697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24697):map__24697);
var arg = map__24697__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24697__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24697__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24697__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24697__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));


var map__24699 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__24699__$1 = (((((!((map__24699 == null))))?(((((map__24699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24699):map__24699);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24699__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__24463__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__24701){
var map__24702 = p__24701;
var map__24702__$1 = (((((!((map__24702 == null))))?(((((map__24702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24702):map__24702);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24702__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24702__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24702__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__24463__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__24704_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__24704_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__24711 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__24711) : comma_sep.call(null,G__24711));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__24712 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__24712) : comma_sep.call(null,G__24712));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__24713){
var map__24714 = p__24713;
var map__24714__$1 = (((((!((map__24714 == null))))?(((((map__24714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24714):map__24714);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24714__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24714__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24714__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__24463__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.list(",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count(items);
if((cnt < (32))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentVector.fromArray([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], true)");
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__24718){
var map__24719 = p__24718;
var map__24719__$1 = (((((!((map__24719 == null))))?(((((map__24719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24719):map__24719);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24719__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24719__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__24463__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__24721_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__24721_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__24722 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__24722) : comma_sep.call(null,G__24722));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__24723){
var map__24724 = p__24723;
var map__24724__$1 = (((((!((map__24724 == null))))?(((((map__24724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24724):map__24724);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24724__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24724__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__24463__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5735__auto___25439 = cljs.core.seq(items);
if(temp__5735__auto___25439){
var items_25440__$1 = temp__5735__auto___25439;
var vec__24726_25441 = items_25440__$1;
var seq__24727_25442 = cljs.core.seq(vec__24726_25441);
var first__24728_25443 = cljs.core.first(seq__24727_25442);
var seq__24727_25444__$1 = cljs.core.next(seq__24727_25442);
var vec__24729_25445 = first__24728_25443;
var k_25446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24729_25445,(0),null);
var v_25447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24729_25445,(1),null);
var r_25448 = seq__24727_25444__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_25446),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_25447) : emit_js_object_val.call(null,v_25447)));

var seq__24732_25449 = cljs.core.seq(r_25448);
var chunk__24733_25450 = null;
var count__24734_25451 = (0);
var i__24735_25452 = (0);
while(true){
if((i__24735_25452 < count__24734_25451)){
var vec__24742_25453 = chunk__24733_25450.cljs$core$IIndexed$_nth$arity$2(null,i__24735_25452);
var k_25454__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24742_25453,(0),null);
var v_25455__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24742_25453,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_25454__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_25455__$1) : emit_js_object_val.call(null,v_25455__$1)));


var G__25456 = seq__24732_25449;
var G__25457 = chunk__24733_25450;
var G__25458 = count__24734_25451;
var G__25459 = (i__24735_25452 + (1));
seq__24732_25449 = G__25456;
chunk__24733_25450 = G__25457;
count__24734_25451 = G__25458;
i__24735_25452 = G__25459;
continue;
} else {
var temp__5735__auto___25460__$1 = cljs.core.seq(seq__24732_25449);
if(temp__5735__auto___25460__$1){
var seq__24732_25461__$1 = temp__5735__auto___25460__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24732_25461__$1)){
var c__4556__auto___25462 = cljs.core.chunk_first(seq__24732_25461__$1);
var G__25463 = cljs.core.chunk_rest(seq__24732_25461__$1);
var G__25464 = c__4556__auto___25462;
var G__25465 = cljs.core.count(c__4556__auto___25462);
var G__25466 = (0);
seq__24732_25449 = G__25463;
chunk__24733_25450 = G__25464;
count__24734_25451 = G__25465;
i__24735_25452 = G__25466;
continue;
} else {
var vec__24745_25467 = cljs.core.first(seq__24732_25461__$1);
var k_25468__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24745_25467,(0),null);
var v_25469__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24745_25467,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_25468__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_25469__$1) : emit_js_object_val.call(null,v_25469__$1)));


var G__25470 = cljs.core.next(seq__24732_25461__$1);
var G__25471 = null;
var G__25472 = (0);
var G__25473 = (0);
seq__24732_25449 = G__25470;
chunk__24733_25450 = G__25471;
count__24734_25451 = G__25472;
i__24735_25452 = G__25473;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"]");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__24748){
var map__24749 = p__24748;
var map__24749__$1 = (((((!((map__24749 == null))))?(((((map__24749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24749):map__24749);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24749__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24749__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24749__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__24463__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__24751){
var map__24752 = p__24751;
var map__24752__$1 = (((((!((map__24752 == null))))?(((((map__24752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24752):map__24752);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24752__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24752__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__24463__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__24754){
var map__24755 = p__24754;
var map__24755__$1 = (((((!((map__24755 == null))))?(((((map__24755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24755):map__24755);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24755__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__24757){
var map__24758 = p__24757;
var map__24758__$1 = (((((!((map__24758 == null))))?(((((map__24758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24758):map__24758);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24758__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24758__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__24463__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__24763 = cljs.analyzer.unwrap_quote(expr);
var map__24763__$1 = (((((!((map__24763 == null))))?(((((map__24763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24763):map__24763);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24763__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24763__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24763__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842)))?(function (){var and__4115__auto__ = form;
if(cljs.core.truth_(and__4115__auto__)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4115__auto__;
}
})():false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if((!((const_expr == null)))){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null,const_expr));
} else {
return false;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__24765 = cljs.analyzer.unwrap_quote(expr);
var map__24765__$1 = (((((!((map__24765 == null))))?(((((map__24765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24765):map__24765);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24765__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24765__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24765__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
if((!((const_expr == null)))){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_.call(null,const_expr));
} else {
return false;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__4126__auto__ = (function (){var fexpr__24768 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__24768.cljs$core$IFn$_invoke$arity$1 ? fexpr__24768.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__24768.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__24769){
var map__24770 = p__24769;
var map__24770__$1 = (((((!((map__24770 == null))))?(((((map__24770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24770):map__24770);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24770__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24770__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24770__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24770__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24770__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__4126__auto__ = unchecked;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(else$);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",((checked)?"cljs.core.truth_":null),"(",test,")?",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(",test,"){");
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(then,"} else {");

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(else$,"}");
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__24775){
var map__24776 = p__24775;
var map__24776__$1 = (((((!((map__24776 == null))))?(((((map__24776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24776):map__24776);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24776__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24776__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24776__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24776__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function(){");
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",gs,";");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("switch (",v,") {");

var seq__24778_25474 = cljs.core.seq(nodes);
var chunk__24779_25475 = null;
var count__24780_25476 = (0);
var i__24781_25477 = (0);
while(true){
if((i__24781_25477 < count__24780_25476)){
var map__24802_25478 = chunk__24779_25475.cljs$core$IIndexed$_nth$arity$2(null,i__24781_25477);
var map__24802_25479__$1 = (((((!((map__24802_25478 == null))))?(((((map__24802_25478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24802_25478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24802_25478):map__24802_25478);
var ts_25480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24802_25479__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__24803_25481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24802_25479__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__24803_25482__$1 = (((((!((map__24803_25481 == null))))?(((((map__24803_25481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24803_25481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24803_25481):map__24803_25481);
var then_25483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24803_25482__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__24806_25484 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_25480));
var chunk__24807_25485 = null;
var count__24808_25486 = (0);
var i__24809_25487 = (0);
while(true){
if((i__24809_25487 < count__24808_25486)){
var test_25488 = chunk__24807_25485.cljs$core$IIndexed$_nth$arity$2(null,i__24809_25487);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25488,":");


var G__25489 = seq__24806_25484;
var G__25490 = chunk__24807_25485;
var G__25491 = count__24808_25486;
var G__25492 = (i__24809_25487 + (1));
seq__24806_25484 = G__25489;
chunk__24807_25485 = G__25490;
count__24808_25486 = G__25491;
i__24809_25487 = G__25492;
continue;
} else {
var temp__5735__auto___25493 = cljs.core.seq(seq__24806_25484);
if(temp__5735__auto___25493){
var seq__24806_25494__$1 = temp__5735__auto___25493;
if(cljs.core.chunked_seq_QMARK_(seq__24806_25494__$1)){
var c__4556__auto___25495 = cljs.core.chunk_first(seq__24806_25494__$1);
var G__25496 = cljs.core.chunk_rest(seq__24806_25494__$1);
var G__25497 = c__4556__auto___25495;
var G__25498 = cljs.core.count(c__4556__auto___25495);
var G__25499 = (0);
seq__24806_25484 = G__25496;
chunk__24807_25485 = G__25497;
count__24808_25486 = G__25498;
i__24809_25487 = G__25499;
continue;
} else {
var test_25500 = cljs.core.first(seq__24806_25494__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25500,":");


var G__25501 = cljs.core.next(seq__24806_25494__$1);
var G__25502 = null;
var G__25503 = (0);
var G__25504 = (0);
seq__24806_25484 = G__25501;
chunk__24807_25485 = G__25502;
count__24808_25486 = G__25503;
i__24809_25487 = G__25504;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_25483);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_25483);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__25505 = seq__24778_25474;
var G__25506 = chunk__24779_25475;
var G__25507 = count__24780_25476;
var G__25508 = (i__24781_25477 + (1));
seq__24778_25474 = G__25505;
chunk__24779_25475 = G__25506;
count__24780_25476 = G__25507;
i__24781_25477 = G__25508;
continue;
} else {
var temp__5735__auto___25509 = cljs.core.seq(seq__24778_25474);
if(temp__5735__auto___25509){
var seq__24778_25510__$1 = temp__5735__auto___25509;
if(cljs.core.chunked_seq_QMARK_(seq__24778_25510__$1)){
var c__4556__auto___25511 = cljs.core.chunk_first(seq__24778_25510__$1);
var G__25512 = cljs.core.chunk_rest(seq__24778_25510__$1);
var G__25513 = c__4556__auto___25511;
var G__25514 = cljs.core.count(c__4556__auto___25511);
var G__25515 = (0);
seq__24778_25474 = G__25512;
chunk__24779_25475 = G__25513;
count__24780_25476 = G__25514;
i__24781_25477 = G__25515;
continue;
} else {
var map__24830_25516 = cljs.core.first(seq__24778_25510__$1);
var map__24830_25517__$1 = (((((!((map__24830_25516 == null))))?(((((map__24830_25516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24830_25516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24830_25516):map__24830_25516);
var ts_25518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24830_25517__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__24831_25519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24830_25517__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__24831_25520__$1 = (((((!((map__24831_25519 == null))))?(((((map__24831_25519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24831_25519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24831_25519):map__24831_25519);
var then_25521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24831_25520__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__24834_25522 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_25518));
var chunk__24835_25523 = null;
var count__24836_25524 = (0);
var i__24837_25525 = (0);
while(true){
if((i__24837_25525 < count__24836_25524)){
var test_25526 = chunk__24835_25523.cljs$core$IIndexed$_nth$arity$2(null,i__24837_25525);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25526,":");


var G__25527 = seq__24834_25522;
var G__25528 = chunk__24835_25523;
var G__25529 = count__24836_25524;
var G__25530 = (i__24837_25525 + (1));
seq__24834_25522 = G__25527;
chunk__24835_25523 = G__25528;
count__24836_25524 = G__25529;
i__24837_25525 = G__25530;
continue;
} else {
var temp__5735__auto___25531__$1 = cljs.core.seq(seq__24834_25522);
if(temp__5735__auto___25531__$1){
var seq__24834_25532__$1 = temp__5735__auto___25531__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24834_25532__$1)){
var c__4556__auto___25533 = cljs.core.chunk_first(seq__24834_25532__$1);
var G__25534 = cljs.core.chunk_rest(seq__24834_25532__$1);
var G__25535 = c__4556__auto___25533;
var G__25536 = cljs.core.count(c__4556__auto___25533);
var G__25537 = (0);
seq__24834_25522 = G__25534;
chunk__24835_25523 = G__25535;
count__24836_25524 = G__25536;
i__24837_25525 = G__25537;
continue;
} else {
var test_25538 = cljs.core.first(seq__24834_25532__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25538,":");


var G__25539 = cljs.core.next(seq__24834_25532__$1);
var G__25540 = null;
var G__25541 = (0);
var G__25542 = (0);
seq__24834_25522 = G__25539;
chunk__24835_25523 = G__25540;
count__24836_25524 = G__25541;
i__24837_25525 = G__25542;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_25521);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_25521);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__25543 = cljs.core.next(seq__24778_25510__$1);
var G__25544 = null;
var G__25545 = (0);
var G__25546 = (0);
seq__24778_25474 = G__25543;
chunk__24779_25475 = G__25544;
count__24780_25476 = G__25545;
i__24781_25477 = G__25546;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",default$);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(default$);
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",gs,";})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__24876){
var map__24877 = p__24876;
var map__24877__$1 = (((((!((map__24877 == null))))?(((((map__24877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24877):map__24877);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24877__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24877__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__24882 = env;
var G__24883 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__24882,G__24883) : cljs.compiler.resolve_type.call(null,G__24882,G__24883));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__24884 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24884,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24884,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__24879_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__24879_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__24879_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__24887 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__24887,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__24887;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__24890 = env;
var G__24891 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__24890,G__24891) : cljs.compiler.resolve_type.call(null,G__24890,G__24891));
})()),"="].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24892_SHARP_){
return cljs.compiler.resolve_type(env,p1__24892_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__24905 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__24906 = cljs.core.seq(vec__24905);
var first__24907 = cljs.core.first(seq__24906);
var seq__24906__$1 = cljs.core.next(seq__24906);
var p = first__24907;
var first__24907__$1 = cljs.core.first(seq__24906__$1);
var seq__24906__$2 = cljs.core.next(seq__24906__$1);
var ts = first__24907__$1;
var first__24907__$2 = cljs.core.first(seq__24906__$2);
var seq__24906__$3 = cljs.core.next(seq__24906__$2);
var n = first__24907__$2;
var xs = seq__24906__$3;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
}
})():false))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__24938 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__24939 = cljs.core.seq(vec__24938);
var first__24940 = cljs.core.first(seq__24939);
var seq__24939__$1 = cljs.core.next(seq__24939);
var p = first__24940;
var first__24940__$1 = cljs.core.first(seq__24939__$1);
var seq__24939__$2 = cljs.core.next(seq__24939__$1);
var ts = first__24940__$1;
var xs = seq__24939__$2;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
}
})():false))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
var G__24956 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__24955 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__24955.cljs$core$IFn$_invoke$arity$1 ? fexpr__24955.cljs$core$IFn$_invoke$arity$1(G__24956) : fexpr__24955.call(null,G__24956));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__24959 = arguments.length;
switch (G__24959) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
}));

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = (function cljs$compiler$print_comment_lines(e){
var vec__24985 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24957_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__24957_SHARP_);
} else {
return p1__24957_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__24986 = cljs.core.seq(vec__24985);
var first__24987 = cljs.core.first(seq__24986);
var seq__24986__$1 = cljs.core.next(seq__24986);
var x = first__24987;
var ys = seq__24986__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__24988 = cljs.core.seq(ys);
var chunk__24989 = null;
var count__24990 = (0);
var i__24991 = (0);
while(true){
if((i__24991 < count__24990)){
var next_line = chunk__24989.cljs$core$IIndexed$_nth$arity$2(null,i__24991);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__25548 = seq__24988;
var G__25549 = chunk__24989;
var G__25550 = count__24990;
var G__25551 = (i__24991 + (1));
seq__24988 = G__25548;
chunk__24989 = G__25549;
count__24990 = G__25550;
i__24991 = G__25551;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__24988);
if(temp__5735__auto__){
var seq__24988__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24988__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24988__$1);
var G__25552 = cljs.core.chunk_rest(seq__24988__$1);
var G__25553 = c__4556__auto__;
var G__25554 = cljs.core.count(c__4556__auto__);
var G__25555 = (0);
seq__24988 = G__25552;
chunk__24989 = G__25553;
count__24990 = G__25554;
i__24991 = G__25555;
continue;
} else {
var next_line = cljs.core.first(seq__24988__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__25556 = cljs.core.next(seq__24988__$1);
var G__25557 = null;
var G__25558 = (0);
var G__25559 = (0);
seq__24988 = G__25556;
chunk__24989 = G__25557;
count__24990 = G__25558;
i__24991 = G__25559;
continue;
}
} else {
return null;
}
}
break;
}
});
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

var seq__24997_25560 = cljs.core.seq(docs__$2);
var chunk__24998_25561 = null;
var count__24999_25562 = (0);
var i__25000_25563 = (0);
while(true){
if((i__25000_25563 < count__24999_25562)){
var e_25564 = chunk__24998_25561.cljs$core$IIndexed$_nth$arity$2(null,i__25000_25563);
if(cljs.core.truth_(e_25564)){
print_comment_lines(e_25564);
} else {
}


var G__25565 = seq__24997_25560;
var G__25566 = chunk__24998_25561;
var G__25567 = count__24999_25562;
var G__25568 = (i__25000_25563 + (1));
seq__24997_25560 = G__25565;
chunk__24998_25561 = G__25566;
count__24999_25562 = G__25567;
i__25000_25563 = G__25568;
continue;
} else {
var temp__5735__auto___25569 = cljs.core.seq(seq__24997_25560);
if(temp__5735__auto___25569){
var seq__24997_25570__$1 = temp__5735__auto___25569;
if(cljs.core.chunked_seq_QMARK_(seq__24997_25570__$1)){
var c__4556__auto___25571 = cljs.core.chunk_first(seq__24997_25570__$1);
var G__25572 = cljs.core.chunk_rest(seq__24997_25570__$1);
var G__25573 = c__4556__auto___25571;
var G__25574 = cljs.core.count(c__4556__auto___25571);
var G__25575 = (0);
seq__24997_25560 = G__25572;
chunk__24998_25561 = G__25573;
count__24999_25562 = G__25574;
i__25000_25563 = G__25575;
continue;
} else {
var e_25576 = cljs.core.first(seq__24997_25570__$1);
if(cljs.core.truth_(e_25576)){
print_comment_lines(e_25576);
} else {
}


var G__25577 = cljs.core.next(seq__24997_25570__$1);
var G__25578 = null;
var G__25579 = (0);
var G__25580 = (0);
seq__24997_25560 = G__25577;
chunk__24998_25561 = G__25578;
count__24999_25562 = G__25579;
i__25000_25563 = G__25580;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" */");
} else {
return null;
}
}));

(cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3);

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4115__auto__ = cljs.core.some((function (p1__25002_SHARP_){
return goog.string.startsWith(p1__25002_SHARP_,"@define");
}),jsdoc);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = opts;
if(cljs.core.truth_(and__4115__auto____$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478))){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_(define)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return false;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__25022){
var map__25023 = p__25022;
var map__25023__$1 = (((((!((map__25023 == null))))?(((((map__25023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25023):map__25023);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25023__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25023__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25023__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25023__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25023__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25023__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25023__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25023__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25023__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25023__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4126__auto__ = init;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(goog_define)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["@define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog_define),"}"].join('')], null):null),jsdoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)], 0)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(" = ",(function (){var temp__5733__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__5733__auto__)){
var define = temp__5733__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("; return (");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast], 0)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");})()");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(")");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return test;
} else {
return and__4115__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__25025){
var map__25026 = p__25025;
var map__25026__$1 = (((((!((map__25026 == null))))?(((((map__25026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25026):map__25026);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25026__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25026__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25026__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__25028_25581 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__25029_25582 = null;
var count__25030_25583 = (0);
var i__25031_25584 = (0);
while(true){
if((i__25031_25584 < count__25030_25583)){
var vec__25038_25585 = chunk__25029_25582.cljs$core$IIndexed$_nth$arity$2(null,i__25031_25584);
var i_25586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25038_25585,(0),null);
var param_25587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25038_25585,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_25587);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__25588 = seq__25028_25581;
var G__25589 = chunk__25029_25582;
var G__25590 = count__25030_25583;
var G__25591 = (i__25031_25584 + (1));
seq__25028_25581 = G__25588;
chunk__25029_25582 = G__25589;
count__25030_25583 = G__25590;
i__25031_25584 = G__25591;
continue;
} else {
var temp__5735__auto___25592 = cljs.core.seq(seq__25028_25581);
if(temp__5735__auto___25592){
var seq__25028_25593__$1 = temp__5735__auto___25592;
if(cljs.core.chunked_seq_QMARK_(seq__25028_25593__$1)){
var c__4556__auto___25594 = cljs.core.chunk_first(seq__25028_25593__$1);
var G__25595 = cljs.core.chunk_rest(seq__25028_25593__$1);
var G__25596 = c__4556__auto___25594;
var G__25597 = cljs.core.count(c__4556__auto___25594);
var G__25598 = (0);
seq__25028_25581 = G__25595;
chunk__25029_25582 = G__25596;
count__25030_25583 = G__25597;
i__25031_25584 = G__25598;
continue;
} else {
var vec__25041_25599 = cljs.core.first(seq__25028_25593__$1);
var i_25600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25041_25599,(0),null);
var param_25601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25041_25599,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_25601);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__25602 = cljs.core.next(seq__25028_25593__$1);
var G__25603 = null;
var G__25604 = (0);
var G__25605 = (0);
seq__25028_25581 = G__25602;
chunk__25029_25582 = G__25603;
count__25030_25583 = G__25604;
i__25031_25584 = G__25605;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.first(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.rest(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__25044_25606 = cljs.core.seq(params);
var chunk__25045_25607 = null;
var count__25046_25608 = (0);
var i__25047_25609 = (0);
while(true){
if((i__25047_25609 < count__25046_25608)){
var param_25610 = chunk__25045_25607.cljs$core$IIndexed$_nth$arity$2(null,i__25047_25609);
cljs.compiler.emit(param_25610);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25610,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25611 = seq__25044_25606;
var G__25612 = chunk__25045_25607;
var G__25613 = count__25046_25608;
var G__25614 = (i__25047_25609 + (1));
seq__25044_25606 = G__25611;
chunk__25045_25607 = G__25612;
count__25046_25608 = G__25613;
i__25047_25609 = G__25614;
continue;
} else {
var temp__5735__auto___25615 = cljs.core.seq(seq__25044_25606);
if(temp__5735__auto___25615){
var seq__25044_25616__$1 = temp__5735__auto___25615;
if(cljs.core.chunked_seq_QMARK_(seq__25044_25616__$1)){
var c__4556__auto___25617 = cljs.core.chunk_first(seq__25044_25616__$1);
var G__25618 = cljs.core.chunk_rest(seq__25044_25616__$1);
var G__25619 = c__4556__auto___25617;
var G__25620 = cljs.core.count(c__4556__auto___25617);
var G__25621 = (0);
seq__25044_25606 = G__25618;
chunk__25045_25607 = G__25619;
count__25046_25608 = G__25620;
i__25047_25609 = G__25621;
continue;
} else {
var param_25622 = cljs.core.first(seq__25044_25616__$1);
cljs.compiler.emit(param_25622);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25622,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25623 = cljs.core.next(seq__25044_25616__$1);
var G__25624 = null;
var G__25625 = (0);
var G__25626 = (0);
seq__25044_25606 = G__25623;
chunk__25045_25607 = G__25624;
count__25046_25608 = G__25625;
i__25047_25609 = G__25626;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.seq(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__25053_25627 = cljs.core.seq(params);
var chunk__25054_25628 = null;
var count__25055_25629 = (0);
var i__25056_25630 = (0);
while(true){
if((i__25056_25630 < count__25055_25629)){
var param_25631 = chunk__25054_25628.cljs$core$IIndexed$_nth$arity$2(null,i__25056_25630);
cljs.compiler.emit(param_25631);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25631,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25632 = seq__25053_25627;
var G__25633 = chunk__25054_25628;
var G__25634 = count__25055_25629;
var G__25635 = (i__25056_25630 + (1));
seq__25053_25627 = G__25632;
chunk__25054_25628 = G__25633;
count__25055_25629 = G__25634;
i__25056_25630 = G__25635;
continue;
} else {
var temp__5735__auto___25636 = cljs.core.seq(seq__25053_25627);
if(temp__5735__auto___25636){
var seq__25053_25637__$1 = temp__5735__auto___25636;
if(cljs.core.chunked_seq_QMARK_(seq__25053_25637__$1)){
var c__4556__auto___25638 = cljs.core.chunk_first(seq__25053_25637__$1);
var G__25639 = cljs.core.chunk_rest(seq__25053_25637__$1);
var G__25640 = c__4556__auto___25638;
var G__25641 = cljs.core.count(c__4556__auto___25638);
var G__25642 = (0);
seq__25053_25627 = G__25639;
chunk__25054_25628 = G__25640;
count__25055_25629 = G__25641;
i__25056_25630 = G__25642;
continue;
} else {
var param_25643 = cljs.core.first(seq__25053_25637__$1);
cljs.compiler.emit(param_25643);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25643,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25644 = cljs.core.next(seq__25053_25637__$1);
var G__25645 = null;
var G__25646 = (0);
var G__25647 = (0);
seq__25053_25627 = G__25644;
chunk__25054_25628 = G__25645;
count__25055_25629 = G__25646;
i__25056_25630 = G__25647;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__25057 = cljs.core.seq(params);
var chunk__25058 = null;
var count__25059 = (0);
var i__25060 = (0);
while(true){
if((i__25060 < count__25059)){
var param = chunk__25058.cljs$core$IIndexed$_nth$arity$2(null,i__25060);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25648 = seq__25057;
var G__25649 = chunk__25058;
var G__25650 = count__25059;
var G__25651 = (i__25060 + (1));
seq__25057 = G__25648;
chunk__25058 = G__25649;
count__25059 = G__25650;
i__25060 = G__25651;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__25057);
if(temp__5735__auto__){
var seq__25057__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25057__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__25057__$1);
var G__25652 = cljs.core.chunk_rest(seq__25057__$1);
var G__25653 = c__4556__auto__;
var G__25654 = cljs.core.count(c__4556__auto__);
var G__25655 = (0);
seq__25057 = G__25652;
chunk__25058 = G__25653;
count__25059 = G__25654;
i__25060 = G__25655;
continue;
} else {
var param = cljs.core.first(seq__25057__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25656 = cljs.core.next(seq__25057__$1);
var G__25657 = null;
var G__25658 = (0);
var G__25659 = (0);
seq__25057 = G__25656;
chunk__25058 = G__25657;
count__25059 = G__25658;
i__25060 = G__25659;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__25071){
var map__25072 = p__25071;
var map__25072__$1 = (((((!((map__25072 == null))))?(((((map__25072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25072):map__25072);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25072__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25072__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25072__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25072__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25072__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25072__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__24463__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"(");

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("var ",i," = 0, ",a," = new Array(arguments.length -  ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("while (",i," < ",a,".length) {",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__25074){
var map__25075 = p__25074;
var map__25075__$1 = (((((!((map__25075 == null))))?(((((map__25075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25075):map__25075);
var f = map__25075__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25075__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25075__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25075__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25075__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25075__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25075__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25075__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25075__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__24463__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_25660__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_25661 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_25660__$1);
var delegate_name_25662 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_25661),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_25662," = function (");

var seq__25078_25663 = cljs.core.seq(params);
var chunk__25079_25664 = null;
var count__25080_25665 = (0);
var i__25081_25666 = (0);
while(true){
if((i__25081_25666 < count__25080_25665)){
var param_25667 = chunk__25079_25664.cljs$core$IIndexed$_nth$arity$2(null,i__25081_25666);
cljs.compiler.emit(param_25667);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25667,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25668 = seq__25078_25663;
var G__25669 = chunk__25079_25664;
var G__25670 = count__25080_25665;
var G__25671 = (i__25081_25666 + (1));
seq__25078_25663 = G__25668;
chunk__25079_25664 = G__25669;
count__25080_25665 = G__25670;
i__25081_25666 = G__25671;
continue;
} else {
var temp__5735__auto___25672 = cljs.core.seq(seq__25078_25663);
if(temp__5735__auto___25672){
var seq__25078_25673__$1 = temp__5735__auto___25672;
if(cljs.core.chunked_seq_QMARK_(seq__25078_25673__$1)){
var c__4556__auto___25674 = cljs.core.chunk_first(seq__25078_25673__$1);
var G__25675 = cljs.core.chunk_rest(seq__25078_25673__$1);
var G__25676 = c__4556__auto___25674;
var G__25677 = cljs.core.count(c__4556__auto___25674);
var G__25678 = (0);
seq__25078_25663 = G__25675;
chunk__25079_25664 = G__25676;
count__25080_25665 = G__25677;
i__25081_25666 = G__25678;
continue;
} else {
var param_25679 = cljs.core.first(seq__25078_25673__$1);
cljs.compiler.emit(param_25679);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25679,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25680 = cljs.core.next(seq__25078_25673__$1);
var G__25681 = null;
var G__25682 = (0);
var G__25683 = (0);
seq__25078_25663 = G__25680;
chunk__25079_25664 = G__25681;
count__25080_25665 = G__25682;
i__25081_25666 = G__25683;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_25661," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_25684 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_25684,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_25662,".call(this,");

var seq__25083_25685 = cljs.core.seq(params);
var chunk__25084_25686 = null;
var count__25085_25687 = (0);
var i__25086_25688 = (0);
while(true){
if((i__25086_25688 < count__25085_25687)){
var param_25689 = chunk__25084_25686.cljs$core$IIndexed$_nth$arity$2(null,i__25086_25688);
cljs.compiler.emit(param_25689);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25689,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25690 = seq__25083_25685;
var G__25691 = chunk__25084_25686;
var G__25692 = count__25085_25687;
var G__25693 = (i__25086_25688 + (1));
seq__25083_25685 = G__25690;
chunk__25084_25686 = G__25691;
count__25085_25687 = G__25692;
i__25086_25688 = G__25693;
continue;
} else {
var temp__5735__auto___25694 = cljs.core.seq(seq__25083_25685);
if(temp__5735__auto___25694){
var seq__25083_25695__$1 = temp__5735__auto___25694;
if(cljs.core.chunked_seq_QMARK_(seq__25083_25695__$1)){
var c__4556__auto___25696 = cljs.core.chunk_first(seq__25083_25695__$1);
var G__25697 = cljs.core.chunk_rest(seq__25083_25695__$1);
var G__25698 = c__4556__auto___25696;
var G__25699 = cljs.core.count(c__4556__auto___25696);
var G__25700 = (0);
seq__25083_25685 = G__25697;
chunk__25084_25686 = G__25698;
count__25085_25687 = G__25699;
i__25086_25688 = G__25700;
continue;
} else {
var param_25701 = cljs.core.first(seq__25083_25695__$1);
cljs.compiler.emit(param_25701);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25701,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25702 = cljs.core.next(seq__25083_25695__$1);
var G__25703 = null;
var G__25704 = (0);
var G__25705 = (0);
seq__25083_25685 = G__25702;
chunk__25084_25686 = G__25703;
count__25085_25687 = G__25704;
i__25086_25688 = G__25705;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25661,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_25661,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_25660__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25661,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_25662,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_25661,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__25091){
var map__25092 = p__25091;
var map__25092__$1 = (((((!((map__25092 == null))))?(((((map__25092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25092):map__25092);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25092__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25092__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25092__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25092__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25092__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25092__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25092__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25092__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25087_SHARP_){
var and__4115__auto__ = p1__25087_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__25087_SHARP_));
} else {
return and__4115__auto__;
}
}),recur_frames)], 0));
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(recur_params,(cljs.core.truth_((function (){var or__4126__auto__ = in_loop;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.seq(recur_params);
}
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loop_lets], 0)):null))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_25706__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_25707 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_25706__$1);
var maxparams_25708 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_25709 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_25707),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_25710 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__25088_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__25088_SHARP_)));
}),cljs.core.seq(mmap_25709));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_25707," = null;");

var seq__25094_25711 = cljs.core.seq(ms_25710);
var chunk__25095_25712 = null;
var count__25096_25713 = (0);
var i__25097_25714 = (0);
while(true){
if((i__25097_25714 < count__25096_25713)){
var vec__25104_25715 = chunk__25095_25712.cljs$core$IIndexed$_nth$arity$2(null,i__25097_25714);
var n_25716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25104_25715,(0),null);
var meth_25717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25104_25715,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_25716," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25717))){
cljs.compiler.emit_variadic_fn_method(meth_25717);
} else {
cljs.compiler.emit_fn_method(meth_25717);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__25718 = seq__25094_25711;
var G__25719 = chunk__25095_25712;
var G__25720 = count__25096_25713;
var G__25721 = (i__25097_25714 + (1));
seq__25094_25711 = G__25718;
chunk__25095_25712 = G__25719;
count__25096_25713 = G__25720;
i__25097_25714 = G__25721;
continue;
} else {
var temp__5735__auto___25722 = cljs.core.seq(seq__25094_25711);
if(temp__5735__auto___25722){
var seq__25094_25723__$1 = temp__5735__auto___25722;
if(cljs.core.chunked_seq_QMARK_(seq__25094_25723__$1)){
var c__4556__auto___25724 = cljs.core.chunk_first(seq__25094_25723__$1);
var G__25725 = cljs.core.chunk_rest(seq__25094_25723__$1);
var G__25726 = c__4556__auto___25724;
var G__25727 = cljs.core.count(c__4556__auto___25724);
var G__25728 = (0);
seq__25094_25711 = G__25725;
chunk__25095_25712 = G__25726;
count__25096_25713 = G__25727;
i__25097_25714 = G__25728;
continue;
} else {
var vec__25107_25729 = cljs.core.first(seq__25094_25723__$1);
var n_25730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25107_25729,(0),null);
var meth_25731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25107_25729,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_25730," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25731))){
cljs.compiler.emit_variadic_fn_method(meth_25731);
} else {
cljs.compiler.emit_fn_method(meth_25731);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__25732 = cljs.core.next(seq__25094_25723__$1);
var G__25733 = null;
var G__25734 = (0);
var G__25735 = (0);
seq__25094_25711 = G__25732;
chunk__25095_25712 = G__25733;
count__25096_25713 = G__25734;
i__25097_25714 = G__25735;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25707," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_25708),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_25708)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_25708));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__25110_25736 = cljs.core.seq(ms_25710);
var chunk__25111_25737 = null;
var count__25112_25738 = (0);
var i__25113_25739 = (0);
while(true){
if((i__25113_25739 < count__25112_25738)){
var vec__25131_25740 = chunk__25111_25737.cljs$core$IIndexed$_nth$arity$2(null,i__25113_25739);
var n_25741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25131_25740,(0),null);
var meth_25742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25131_25740,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25742))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_25743 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_25743," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_25744 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_25743," = new cljs.core.IndexedSeq(",a_25744,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_25741,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_25708)),(((cljs.core.count(maxparams_25708) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_25743,");"], 0));
} else {
var pcnt_25745 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25742));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_25745,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_25741,".call(this",(((pcnt_25745 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_25745,maxparams_25708)),null,(1),null)),(2),null))),");");
}


var G__25746 = seq__25110_25736;
var G__25747 = chunk__25111_25737;
var G__25748 = count__25112_25738;
var G__25749 = (i__25113_25739 + (1));
seq__25110_25736 = G__25746;
chunk__25111_25737 = G__25747;
count__25112_25738 = G__25748;
i__25113_25739 = G__25749;
continue;
} else {
var temp__5735__auto___25750 = cljs.core.seq(seq__25110_25736);
if(temp__5735__auto___25750){
var seq__25110_25751__$1 = temp__5735__auto___25750;
if(cljs.core.chunked_seq_QMARK_(seq__25110_25751__$1)){
var c__4556__auto___25752 = cljs.core.chunk_first(seq__25110_25751__$1);
var G__25753 = cljs.core.chunk_rest(seq__25110_25751__$1);
var G__25754 = c__4556__auto___25752;
var G__25755 = cljs.core.count(c__4556__auto___25752);
var G__25756 = (0);
seq__25110_25736 = G__25753;
chunk__25111_25737 = G__25754;
count__25112_25738 = G__25755;
i__25113_25739 = G__25756;
continue;
} else {
var vec__25143_25757 = cljs.core.first(seq__25110_25751__$1);
var n_25758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25143_25757,(0),null);
var meth_25759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25143_25757,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25759))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_25760 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_25760," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_25761 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_25760," = new cljs.core.IndexedSeq(",a_25761,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_25758,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_25708)),(((cljs.core.count(maxparams_25708) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_25760,");"], 0));
} else {
var pcnt_25762 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25759));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_25762,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_25758,".call(this",(((pcnt_25762 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_25762,maxparams_25708)),null,(1),null)),(2),null))),");");
}


var G__25763 = cljs.core.next(seq__25110_25751__$1);
var G__25764 = null;
var G__25765 = (0);
var G__25766 = (0);
seq__25110_25736 = G__25763;
chunk__25111_25737 = G__25764;
count__25112_25738 = G__25765;
i__25113_25739 = G__25766;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_25767 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_25710)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_25767,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25707,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25707,".cljs$lang$applyTo = ",cljs.core.some((function (p1__25090_SHARP_){
var vec__25146 = p1__25090_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25146,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25146,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_25710),".cljs$lang$applyTo;");
} else {
}

var seq__25149_25768 = cljs.core.seq(ms_25710);
var chunk__25150_25769 = null;
var count__25151_25770 = (0);
var i__25152_25771 = (0);
while(true){
if((i__25152_25771 < count__25151_25770)){
var vec__25159_25772 = chunk__25150_25769.cljs$core$IIndexed$_nth$arity$2(null,i__25152_25771);
var n_25773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25159_25772,(0),null);
var meth_25774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25159_25772,(1),null);
var c_25775 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25774));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25774))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25707,".cljs$core$IFn$_invoke$arity$variadic = ",n_25773,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_25707,".cljs$core$IFn$_invoke$arity$",c_25775," = ",n_25773,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__25776 = seq__25149_25768;
var G__25777 = chunk__25150_25769;
var G__25778 = count__25151_25770;
var G__25779 = (i__25152_25771 + (1));
seq__25149_25768 = G__25776;
chunk__25150_25769 = G__25777;
count__25151_25770 = G__25778;
i__25152_25771 = G__25779;
continue;
} else {
var temp__5735__auto___25780 = cljs.core.seq(seq__25149_25768);
if(temp__5735__auto___25780){
var seq__25149_25781__$1 = temp__5735__auto___25780;
if(cljs.core.chunked_seq_QMARK_(seq__25149_25781__$1)){
var c__4556__auto___25782 = cljs.core.chunk_first(seq__25149_25781__$1);
var G__25783 = cljs.core.chunk_rest(seq__25149_25781__$1);
var G__25784 = c__4556__auto___25782;
var G__25785 = cljs.core.count(c__4556__auto___25782);
var G__25786 = (0);
seq__25149_25768 = G__25783;
chunk__25150_25769 = G__25784;
count__25151_25770 = G__25785;
i__25152_25771 = G__25786;
continue;
} else {
var vec__25162_25787 = cljs.core.first(seq__25149_25781__$1);
var n_25788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25162_25787,(0),null);
var meth_25789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25162_25787,(1),null);
var c_25790 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25789));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25789))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25707,".cljs$core$IFn$_invoke$arity$variadic = ",n_25788,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_25707,".cljs$core$IFn$_invoke$arity$",c_25790," = ",n_25788,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__25791 = cljs.core.next(seq__25149_25781__$1);
var G__25792 = null;
var G__25793 = (0);
var G__25794 = (0);
seq__25149_25768 = G__25791;
chunk__25150_25769 = G__25792;
count__25151_25770 = G__25793;
i__25152_25771 = G__25794;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_25707,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__25165){
var map__25166 = p__25165;
var map__25166__$1 = (((((!((map__25166 == null))))?(((((map__25166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25166):map__25166);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25166__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25166__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25166__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__25168_25795 = cljs.core.seq(statements);
var chunk__25169_25796 = null;
var count__25170_25797 = (0);
var i__25171_25798 = (0);
while(true){
if((i__25171_25798 < count__25170_25797)){
var s_25799 = chunk__25169_25796.cljs$core$IIndexed$_nth$arity$2(null,i__25171_25798);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_25799);


var G__25800 = seq__25168_25795;
var G__25801 = chunk__25169_25796;
var G__25802 = count__25170_25797;
var G__25803 = (i__25171_25798 + (1));
seq__25168_25795 = G__25800;
chunk__25169_25796 = G__25801;
count__25170_25797 = G__25802;
i__25171_25798 = G__25803;
continue;
} else {
var temp__5735__auto___25804 = cljs.core.seq(seq__25168_25795);
if(temp__5735__auto___25804){
var seq__25168_25805__$1 = temp__5735__auto___25804;
if(cljs.core.chunked_seq_QMARK_(seq__25168_25805__$1)){
var c__4556__auto___25806 = cljs.core.chunk_first(seq__25168_25805__$1);
var G__25807 = cljs.core.chunk_rest(seq__25168_25805__$1);
var G__25808 = c__4556__auto___25806;
var G__25809 = cljs.core.count(c__4556__auto___25806);
var G__25810 = (0);
seq__25168_25795 = G__25807;
chunk__25169_25796 = G__25808;
count__25170_25797 = G__25809;
i__25171_25798 = G__25810;
continue;
} else {
var s_25811 = cljs.core.first(seq__25168_25805__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_25811);


var G__25812 = cljs.core.next(seq__25168_25805__$1);
var G__25813 = null;
var G__25814 = (0);
var G__25815 = (0);
seq__25168_25795 = G__25812;
chunk__25169_25796 = G__25813;
count__25170_25797 = G__25814;
i__25171_25798 = G__25815;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__25172){
var map__25173 = p__25172;
var map__25173__$1 = (((((!((map__25173 == null))))?(((((map__25173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25173):map__25173);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25173__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25173__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25173__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25173__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25173__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__25175,is_loop){
var map__25176 = p__25175;
var map__25176__$1 = (((((!((map__25176 == null))))?(((((map__25176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25176):map__25176);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25176__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25176__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25176__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__25178_25816 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__25179_25817 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__25179_25817);

try{var seq__25180_25818 = cljs.core.seq(bindings);
var chunk__25181_25819 = null;
var count__25182_25820 = (0);
var i__25183_25821 = (0);
while(true){
if((i__25183_25821 < count__25182_25820)){
var map__25188_25822 = chunk__25181_25819.cljs$core$IIndexed$_nth$arity$2(null,i__25183_25821);
var map__25188_25823__$1 = (((((!((map__25188_25822 == null))))?(((((map__25188_25822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25188_25822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25188_25822):map__25188_25822);
var binding_25824 = map__25188_25823__$1;
var init_25825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25188_25823__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_25824);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_25825,";");


var G__25826 = seq__25180_25818;
var G__25827 = chunk__25181_25819;
var G__25828 = count__25182_25820;
var G__25829 = (i__25183_25821 + (1));
seq__25180_25818 = G__25826;
chunk__25181_25819 = G__25827;
count__25182_25820 = G__25828;
i__25183_25821 = G__25829;
continue;
} else {
var temp__5735__auto___25830 = cljs.core.seq(seq__25180_25818);
if(temp__5735__auto___25830){
var seq__25180_25831__$1 = temp__5735__auto___25830;
if(cljs.core.chunked_seq_QMARK_(seq__25180_25831__$1)){
var c__4556__auto___25832 = cljs.core.chunk_first(seq__25180_25831__$1);
var G__25833 = cljs.core.chunk_rest(seq__25180_25831__$1);
var G__25834 = c__4556__auto___25832;
var G__25835 = cljs.core.count(c__4556__auto___25832);
var G__25836 = (0);
seq__25180_25818 = G__25833;
chunk__25181_25819 = G__25834;
count__25182_25820 = G__25835;
i__25183_25821 = G__25836;
continue;
} else {
var map__25190_25837 = cljs.core.first(seq__25180_25831__$1);
var map__25190_25838__$1 = (((((!((map__25190_25837 == null))))?(((((map__25190_25837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25190_25837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25190_25837):map__25190_25837);
var binding_25839 = map__25190_25838__$1;
var init_25840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25190_25838__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_25839);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_25840,";");


var G__25841 = cljs.core.next(seq__25180_25831__$1);
var G__25842 = null;
var G__25843 = (0);
var G__25844 = (0);
seq__25180_25818 = G__25841;
chunk__25181_25819 = G__25842;
count__25182_25820 = G__25843;
i__25183_25821 = G__25844;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__25178_25816);
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__25192){
var map__25193 = p__25192;
var map__25193__$1 = (((((!((map__25193 == null))))?(((((map__25193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25193):map__25193);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25193__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25193__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25193__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___25845 = cljs.core.count(exprs);
var i_25846 = (0);
while(true){
if((i_25846 < n__4613__auto___25845)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_25846) : temps.call(null,i_25846))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_25846) : exprs.call(null,i_25846)),";");

var G__25847 = (i_25846 + (1));
i_25846 = G__25847;
continue;
} else {
}
break;
}

var n__4613__auto___25848 = cljs.core.count(exprs);
var i_25849 = (0);
while(true){
if((i_25849 < n__4613__auto___25848)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_25849) : params.call(null,i_25849)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_25849) : temps.call(null,i_25849)),";");

var G__25850 = (i_25849 + (1));
i_25849 = G__25850;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__25195){
var map__25196 = p__25195;
var map__25196__$1 = (((((!((map__25196 == null))))?(((((map__25196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25196):map__25196);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25196__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25196__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25196__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__25198_25851 = cljs.core.seq(bindings);
var chunk__25199_25852 = null;
var count__25200_25853 = (0);
var i__25201_25854 = (0);
while(true){
if((i__25201_25854 < count__25200_25853)){
var map__25206_25855 = chunk__25199_25852.cljs$core$IIndexed$_nth$arity$2(null,i__25201_25854);
var map__25206_25856__$1 = (((((!((map__25206_25855 == null))))?(((((map__25206_25855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25206_25855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25206_25855):map__25206_25855);
var binding_25857 = map__25206_25856__$1;
var init_25858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25206_25856__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_25857)," = ",init_25858,";");


var G__25859 = seq__25198_25851;
var G__25860 = chunk__25199_25852;
var G__25861 = count__25200_25853;
var G__25862 = (i__25201_25854 + (1));
seq__25198_25851 = G__25859;
chunk__25199_25852 = G__25860;
count__25200_25853 = G__25861;
i__25201_25854 = G__25862;
continue;
} else {
var temp__5735__auto___25863 = cljs.core.seq(seq__25198_25851);
if(temp__5735__auto___25863){
var seq__25198_25864__$1 = temp__5735__auto___25863;
if(cljs.core.chunked_seq_QMARK_(seq__25198_25864__$1)){
var c__4556__auto___25865 = cljs.core.chunk_first(seq__25198_25864__$1);
var G__25866 = cljs.core.chunk_rest(seq__25198_25864__$1);
var G__25867 = c__4556__auto___25865;
var G__25868 = cljs.core.count(c__4556__auto___25865);
var G__25869 = (0);
seq__25198_25851 = G__25866;
chunk__25199_25852 = G__25867;
count__25200_25853 = G__25868;
i__25201_25854 = G__25869;
continue;
} else {
var map__25208_25870 = cljs.core.first(seq__25198_25864__$1);
var map__25208_25871__$1 = (((((!((map__25208_25870 == null))))?(((((map__25208_25870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25208_25870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25208_25870):map__25208_25870);
var binding_25872 = map__25208_25871__$1;
var init_25873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25208_25871__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_25872)," = ",init_25873,";");


var G__25876 = cljs.core.next(seq__25198_25864__$1);
var G__25877 = null;
var G__25878 = (0);
var G__25879 = (0);
seq__25198_25851 = G__25876;
chunk__25199_25852 = G__25877;
count__25200_25853 = G__25878;
i__25201_25854 = G__25879;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__25212){
var map__25213 = p__25212;
var map__25213__$1 = (((((!((map__25213 == null))))?(((((map__25213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25213):map__25213);
var expr = map__25213__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25213__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25213__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25213__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info))){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return false;
}
} else {
return and__4115__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4115__auto__ = protocol;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = tag;
if(cljs.core.truth_(and__4115__auto____$1)){
var or__4126__auto__ = (function (){var and__4115__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = protocol;
if(cljs.core.truth_(and__4115__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto____$2 = (function (){var or__4126__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4115__auto____$2)){
var or__4126__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
if((!(cljs.core.set_QMARK_(tag)))){
if(cljs.core.not((function (){var fexpr__25225 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__25225.cljs$core$IFn$_invoke$arity$1 ? fexpr__25225.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__25225.call(null,tag));
})())){
var temp__5735__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tag,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true)));
if(cljs.core.truth_(temp__5735__auto__)){
var ps = temp__5735__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return false;
}
} else {
return false;
}
}
} else {
return and__4115__auto____$2;
}
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})();
var first_arg_tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var opt_not_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_arg_tag,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__25227 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__25227.cljs$core$IFn$_invoke$arity$1 ? fexpr__25227.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__25227.call(null,first_arg_tag));
})())));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var ftag = cljs.analyzer.infer_tag(env,f);
var js_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null));
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"foreign","foreign",990521149).cljs$core$IFn$_invoke$arity$1(info);
}
}
})();
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var temp__5735__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5735__auto__)){
var ns_str = temp__5735__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),ftag);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote(f);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__25215 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (arity > mfa);
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__25210_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25210_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__25211_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25211_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25215,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25215,(1),null);
var env__24463__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(!(",cljs.core.first(args),"))");
} else {
if(opt_count_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("((",cljs.core.first(args),").length)");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_25893 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_25893,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_25894 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_25894,args)),(((mfa_25894 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_25894,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = js_QMARK_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,"(",cljs.compiler.comma_sep(args),")");
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
var G__25229 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__25228 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__25228.cljs$core$IFn$_invoke$arity$1 ? fexpr__25228.cljs$core$IFn$_invoke$arity$1(G__25229) : fexpr__25228.call(null,G__25229));
} else {
return and__4115__auto__;
}
})())){
var fprop_25896 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_25896," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_25896,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_25896," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_25896,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")");
}

}
}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__25230){
var map__25231 = p__25230;
var map__25231__$1 = (((((!((map__25231 == null))))?(((((map__25231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25231):map__25231);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25231__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25231__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25231__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__24463__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__25233){
var map__25234 = p__25233;
var map__25234__$1 = (((((!((map__25234 == null))))?(((((map__25234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25234):map__25234);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25234__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25234__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25234__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__24463__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib)," = goog.global",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name((function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.name(lib));
}
})()),/\./))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__25236 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__25236__$1 = (((((!((map__25236 == null))))?(((((map__25236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25236):map__25236);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25236__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25236__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__25237 = options;
var map__25237__$1 = (((((!((map__25237 == null))))?(((((map__25237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25237):map__25237);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25237__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25237__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25237__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__25238 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__25243 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__25243__$1 = (((((!((map__25243 == null))))?(((((map__25243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25243):map__25243);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25243__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25243__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25238,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25238,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__25245_25906 = cljs.core.seq(libs_to_load);
var chunk__25246_25907 = null;
var count__25247_25908 = (0);
var i__25248_25909 = (0);
while(true){
if((i__25248_25909 < count__25247_25908)){
var lib_25910 = chunk__25246_25907.cljs$core$IIndexed$_nth$arity$2(null,i__25248_25909);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_25910)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25910),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25910),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25910),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25910),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_25910,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25910),"');");
}

}
}
}


var G__25921 = seq__25245_25906;
var G__25922 = chunk__25246_25907;
var G__25923 = count__25247_25908;
var G__25924 = (i__25248_25909 + (1));
seq__25245_25906 = G__25921;
chunk__25246_25907 = G__25922;
count__25247_25908 = G__25923;
i__25248_25909 = G__25924;
continue;
} else {
var temp__5735__auto___25926 = cljs.core.seq(seq__25245_25906);
if(temp__5735__auto___25926){
var seq__25245_25927__$1 = temp__5735__auto___25926;
if(cljs.core.chunked_seq_QMARK_(seq__25245_25927__$1)){
var c__4556__auto___25928 = cljs.core.chunk_first(seq__25245_25927__$1);
var G__25929 = cljs.core.chunk_rest(seq__25245_25927__$1);
var G__25930 = c__4556__auto___25928;
var G__25931 = cljs.core.count(c__4556__auto___25928);
var G__25932 = (0);
seq__25245_25906 = G__25929;
chunk__25246_25907 = G__25930;
count__25247_25908 = G__25931;
i__25248_25909 = G__25932;
continue;
} else {
var lib_25934 = cljs.core.first(seq__25245_25927__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_25934)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25934),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25934),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25934),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25934),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_25934,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25934),"');");
}

}
}
}


var G__25936 = cljs.core.next(seq__25245_25927__$1);
var G__25937 = null;
var G__25938 = (0);
var G__25939 = (0);
seq__25245_25906 = G__25936;
chunk__25246_25907 = G__25937;
count__25247_25908 = G__25938;
i__25248_25909 = G__25939;
continue;
}
} else {
}
}
break;
}

var seq__25249_25940 = cljs.core.seq(node_libs);
var chunk__25250_25941 = null;
var count__25251_25942 = (0);
var i__25252_25943 = (0);
while(true){
if((i__25252_25943 < count__25251_25942)){
var lib_25944 = chunk__25250_25941.cljs$core$IIndexed$_nth$arity$2(null,i__25252_25943);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_25944)," = require('",lib_25944,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__25945 = seq__25249_25940;
var G__25946 = chunk__25250_25941;
var G__25947 = count__25251_25942;
var G__25948 = (i__25252_25943 + (1));
seq__25249_25940 = G__25945;
chunk__25250_25941 = G__25946;
count__25251_25942 = G__25947;
i__25252_25943 = G__25948;
continue;
} else {
var temp__5735__auto___25950 = cljs.core.seq(seq__25249_25940);
if(temp__5735__auto___25950){
var seq__25249_25954__$1 = temp__5735__auto___25950;
if(cljs.core.chunked_seq_QMARK_(seq__25249_25954__$1)){
var c__4556__auto___25955 = cljs.core.chunk_first(seq__25249_25954__$1);
var G__25956 = cljs.core.chunk_rest(seq__25249_25954__$1);
var G__25957 = c__4556__auto___25955;
var G__25958 = cljs.core.count(c__4556__auto___25955);
var G__25959 = (0);
seq__25249_25940 = G__25956;
chunk__25250_25941 = G__25957;
count__25251_25942 = G__25958;
i__25252_25943 = G__25959;
continue;
} else {
var lib_25960 = cljs.core.first(seq__25249_25954__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_25960)," = require('",lib_25960,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__25961 = cljs.core.next(seq__25249_25954__$1);
var G__25962 = null;
var G__25963 = (0);
var G__25964 = (0);
seq__25249_25940 = G__25961;
chunk__25250_25941 = G__25962;
count__25251_25942 = G__25963;
i__25252_25943 = G__25964;
continue;
}
} else {
}
}
break;
}

var seq__25253_25966 = cljs.core.seq(global_exports_libs);
var chunk__25254_25967 = null;
var count__25255_25968 = (0);
var i__25256_25969 = (0);
while(true){
if((i__25256_25969 < count__25255_25968)){
var lib_25973 = chunk__25254_25967.cljs$core$IIndexed$_nth$arity$2(null,i__25256_25969);
var map__25261_25974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_25973));
var map__25261_25975__$1 = (((((!((map__25261_25974 == null))))?(((((map__25261_25974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25261_25974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25261_25974):map__25261_25974);
var global_exports_25976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25261_25975__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_25976,lib_25973);


var G__25977 = seq__25253_25966;
var G__25978 = chunk__25254_25967;
var G__25979 = count__25255_25968;
var G__25980 = (i__25256_25969 + (1));
seq__25253_25966 = G__25977;
chunk__25254_25967 = G__25978;
count__25255_25968 = G__25979;
i__25256_25969 = G__25980;
continue;
} else {
var temp__5735__auto___25981 = cljs.core.seq(seq__25253_25966);
if(temp__5735__auto___25981){
var seq__25253_25982__$1 = temp__5735__auto___25981;
if(cljs.core.chunked_seq_QMARK_(seq__25253_25982__$1)){
var c__4556__auto___25983 = cljs.core.chunk_first(seq__25253_25982__$1);
var G__25984 = cljs.core.chunk_rest(seq__25253_25982__$1);
var G__25985 = c__4556__auto___25983;
var G__25986 = cljs.core.count(c__4556__auto___25983);
var G__25987 = (0);
seq__25253_25966 = G__25984;
chunk__25254_25967 = G__25985;
count__25255_25968 = G__25986;
i__25256_25969 = G__25987;
continue;
} else {
var lib_25988 = cljs.core.first(seq__25253_25982__$1);
var map__25263_25989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_25988));
var map__25263_25990__$1 = (((((!((map__25263_25989 == null))))?(((((map__25263_25989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25263_25989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25263_25989):map__25263_25989);
var global_exports_25991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25263_25990__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_25991,lib_25988);


var G__25996 = cljs.core.next(seq__25253_25982__$1);
var G__25997 = null;
var G__25998 = (0);
var G__25999 = (0);
seq__25253_25966 = G__25996;
chunk__25254_25967 = G__25997;
count__25255_25968 = G__25998;
i__25256_25969 = G__25999;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__25265){
var map__25266 = p__25265;
var map__25266__$1 = (((((!((map__25266 == null))))?(((((map__25266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25266):map__25266);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25266__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25266__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25266__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25266__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25266__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25266__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25266__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__25268){
var map__25269 = p__25268;
var map__25269__$1 = (((((!((map__25269 == null))))?(((((map__25269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25269):map__25269);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25269__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25269__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25269__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25269__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25269__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25269__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25269__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__25271){
var map__25272 = p__25271;
var map__25272__$1 = (((((!((map__25272 == null))))?(((((map__25272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25272):map__25272);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25272__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25272__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25272__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25272__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25272__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__25274_26008 = cljs.core.seq(protocols);
var chunk__25275_26009 = null;
var count__25276_26010 = (0);
var i__25277_26011 = (0);
while(true){
if((i__25277_26011 < count__25276_26010)){
var protocol_26012 = chunk__25275_26009.cljs$core$IIndexed$_nth$arity$2(null,i__25277_26011);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_26012)),"}");


var G__26014 = seq__25274_26008;
var G__26015 = chunk__25275_26009;
var G__26016 = count__25276_26010;
var G__26017 = (i__25277_26011 + (1));
seq__25274_26008 = G__26014;
chunk__25275_26009 = G__26015;
count__25276_26010 = G__26016;
i__25277_26011 = G__26017;
continue;
} else {
var temp__5735__auto___26018 = cljs.core.seq(seq__25274_26008);
if(temp__5735__auto___26018){
var seq__25274_26019__$1 = temp__5735__auto___26018;
if(cljs.core.chunked_seq_QMARK_(seq__25274_26019__$1)){
var c__4556__auto___26020 = cljs.core.chunk_first(seq__25274_26019__$1);
var G__26021 = cljs.core.chunk_rest(seq__25274_26019__$1);
var G__26022 = c__4556__auto___26020;
var G__26023 = cljs.core.count(c__4556__auto___26020);
var G__26024 = (0);
seq__25274_26008 = G__26021;
chunk__25275_26009 = G__26022;
count__25276_26010 = G__26023;
i__25277_26011 = G__26024;
continue;
} else {
var protocol_26025 = cljs.core.first(seq__25274_26019__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_26025)),"}");


var G__26026 = cljs.core.next(seq__25274_26019__$1);
var G__26027 = null;
var G__26028 = (0);
var G__26029 = (0);
seq__25274_26008 = G__26026;
chunk__25275_26009 = G__26027;
count__25276_26010 = G__26028;
i__25277_26011 = G__26029;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__25278_26030 = cljs.core.seq(fields__$1);
var chunk__25279_26031 = null;
var count__25280_26032 = (0);
var i__25281_26033 = (0);
while(true){
if((i__25281_26033 < count__25280_26032)){
var fld_26034 = chunk__25279_26031.cljs$core$IIndexed$_nth$arity$2(null,i__25281_26033);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_26034," = ",fld_26034,";");


var G__26035 = seq__25278_26030;
var G__26036 = chunk__25279_26031;
var G__26037 = count__25280_26032;
var G__26038 = (i__25281_26033 + (1));
seq__25278_26030 = G__26035;
chunk__25279_26031 = G__26036;
count__25280_26032 = G__26037;
i__25281_26033 = G__26038;
continue;
} else {
var temp__5735__auto___26039 = cljs.core.seq(seq__25278_26030);
if(temp__5735__auto___26039){
var seq__25278_26040__$1 = temp__5735__auto___26039;
if(cljs.core.chunked_seq_QMARK_(seq__25278_26040__$1)){
var c__4556__auto___26041 = cljs.core.chunk_first(seq__25278_26040__$1);
var G__26042 = cljs.core.chunk_rest(seq__25278_26040__$1);
var G__26043 = c__4556__auto___26041;
var G__26044 = cljs.core.count(c__4556__auto___26041);
var G__26045 = (0);
seq__25278_26030 = G__26042;
chunk__25279_26031 = G__26043;
count__25280_26032 = G__26044;
i__25281_26033 = G__26045;
continue;
} else {
var fld_26063 = cljs.core.first(seq__25278_26040__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_26063," = ",fld_26063,";");


var G__26064 = cljs.core.next(seq__25278_26040__$1);
var G__26065 = null;
var G__26066 = (0);
var G__26067 = (0);
seq__25278_26030 = G__26064;
chunk__25279_26031 = G__26065;
count__25280_26032 = G__26066;
i__25281_26033 = G__26067;
continue;
}
} else {
}
}
break;
}

var seq__25282_26068 = cljs.core.seq(pmasks);
var chunk__25283_26069 = null;
var count__25284_26070 = (0);
var i__25285_26071 = (0);
while(true){
if((i__25285_26071 < count__25284_26070)){
var vec__25292_26073 = chunk__25283_26069.cljs$core$IIndexed$_nth$arity$2(null,i__25285_26071);
var pno_26074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25292_26073,(0),null);
var pmask_26075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25292_26073,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_26074,"$ = ",pmask_26075,";");


var G__26076 = seq__25282_26068;
var G__26077 = chunk__25283_26069;
var G__26078 = count__25284_26070;
var G__26079 = (i__25285_26071 + (1));
seq__25282_26068 = G__26076;
chunk__25283_26069 = G__26077;
count__25284_26070 = G__26078;
i__25285_26071 = G__26079;
continue;
} else {
var temp__5735__auto___26080 = cljs.core.seq(seq__25282_26068);
if(temp__5735__auto___26080){
var seq__25282_26081__$1 = temp__5735__auto___26080;
if(cljs.core.chunked_seq_QMARK_(seq__25282_26081__$1)){
var c__4556__auto___26082 = cljs.core.chunk_first(seq__25282_26081__$1);
var G__26083 = cljs.core.chunk_rest(seq__25282_26081__$1);
var G__26084 = c__4556__auto___26082;
var G__26085 = cljs.core.count(c__4556__auto___26082);
var G__26086 = (0);
seq__25282_26068 = G__26083;
chunk__25283_26069 = G__26084;
count__25284_26070 = G__26085;
i__25285_26071 = G__26086;
continue;
} else {
var vec__25295_26087 = cljs.core.first(seq__25282_26081__$1);
var pno_26088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25295_26087,(0),null);
var pmask_26089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25295_26087,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_26088,"$ = ",pmask_26089,";");


var G__26090 = cljs.core.next(seq__25282_26081__$1);
var G__26091 = null;
var G__26092 = (0);
var G__26093 = (0);
seq__25282_26068 = G__26090;
chunk__25283_26069 = G__26091;
count__25284_26070 = G__26092;
i__25285_26071 = G__26093;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__25298){
var map__25299 = p__25298;
var map__25299__$1 = (((((!((map__25299 == null))))?(((((map__25299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25299):map__25299);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25299__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25299__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25299__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25299__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25299__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__25301_26094 = cljs.core.seq(protocols);
var chunk__25302_26095 = null;
var count__25303_26096 = (0);
var i__25304_26097 = (0);
while(true){
if((i__25304_26097 < count__25303_26096)){
var protocol_26098 = chunk__25302_26095.cljs$core$IIndexed$_nth$arity$2(null,i__25304_26097);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_26098)),"}");


var G__26099 = seq__25301_26094;
var G__26100 = chunk__25302_26095;
var G__26101 = count__25303_26096;
var G__26102 = (i__25304_26097 + (1));
seq__25301_26094 = G__26099;
chunk__25302_26095 = G__26100;
count__25303_26096 = G__26101;
i__25304_26097 = G__26102;
continue;
} else {
var temp__5735__auto___26103 = cljs.core.seq(seq__25301_26094);
if(temp__5735__auto___26103){
var seq__25301_26105__$1 = temp__5735__auto___26103;
if(cljs.core.chunked_seq_QMARK_(seq__25301_26105__$1)){
var c__4556__auto___26106 = cljs.core.chunk_first(seq__25301_26105__$1);
var G__26107 = cljs.core.chunk_rest(seq__25301_26105__$1);
var G__26108 = c__4556__auto___26106;
var G__26109 = cljs.core.count(c__4556__auto___26106);
var G__26110 = (0);
seq__25301_26094 = G__26107;
chunk__25302_26095 = G__26108;
count__25303_26096 = G__26109;
i__25304_26097 = G__26110;
continue;
} else {
var protocol_26114 = cljs.core.first(seq__25301_26105__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_26114)),"}");


var G__26115 = cljs.core.next(seq__25301_26105__$1);
var G__26116 = null;
var G__26117 = (0);
var G__26118 = (0);
seq__25301_26094 = G__26115;
chunk__25302_26095 = G__26116;
count__25303_26096 = G__26117;
i__25304_26097 = G__26118;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__25305_26119 = cljs.core.seq(fields__$1);
var chunk__25306_26120 = null;
var count__25307_26121 = (0);
var i__25308_26122 = (0);
while(true){
if((i__25308_26122 < count__25307_26121)){
var fld_26123 = chunk__25306_26120.cljs$core$IIndexed$_nth$arity$2(null,i__25308_26122);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_26123," = ",fld_26123,";");


var G__26124 = seq__25305_26119;
var G__26125 = chunk__25306_26120;
var G__26126 = count__25307_26121;
var G__26127 = (i__25308_26122 + (1));
seq__25305_26119 = G__26124;
chunk__25306_26120 = G__26125;
count__25307_26121 = G__26126;
i__25308_26122 = G__26127;
continue;
} else {
var temp__5735__auto___26128 = cljs.core.seq(seq__25305_26119);
if(temp__5735__auto___26128){
var seq__25305_26129__$1 = temp__5735__auto___26128;
if(cljs.core.chunked_seq_QMARK_(seq__25305_26129__$1)){
var c__4556__auto___26130 = cljs.core.chunk_first(seq__25305_26129__$1);
var G__26131 = cljs.core.chunk_rest(seq__25305_26129__$1);
var G__26132 = c__4556__auto___26130;
var G__26133 = cljs.core.count(c__4556__auto___26130);
var G__26134 = (0);
seq__25305_26119 = G__26131;
chunk__25306_26120 = G__26132;
count__25307_26121 = G__26133;
i__25308_26122 = G__26134;
continue;
} else {
var fld_26135 = cljs.core.first(seq__25305_26129__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_26135," = ",fld_26135,";");


var G__26136 = cljs.core.next(seq__25305_26129__$1);
var G__26137 = null;
var G__26138 = (0);
var G__26139 = (0);
seq__25305_26119 = G__26136;
chunk__25306_26120 = G__26137;
count__25307_26121 = G__26138;
i__25308_26122 = G__26139;
continue;
}
} else {
}
}
break;
}

var seq__25309_26140 = cljs.core.seq(pmasks);
var chunk__25310_26141 = null;
var count__25311_26142 = (0);
var i__25312_26143 = (0);
while(true){
if((i__25312_26143 < count__25311_26142)){
var vec__25319_26144 = chunk__25310_26141.cljs$core$IIndexed$_nth$arity$2(null,i__25312_26143);
var pno_26145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25319_26144,(0),null);
var pmask_26146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25319_26144,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_26145,"$ = ",pmask_26146,";");


var G__26148 = seq__25309_26140;
var G__26149 = chunk__25310_26141;
var G__26150 = count__25311_26142;
var G__26151 = (i__25312_26143 + (1));
seq__25309_26140 = G__26148;
chunk__25310_26141 = G__26149;
count__25311_26142 = G__26150;
i__25312_26143 = G__26151;
continue;
} else {
var temp__5735__auto___26152 = cljs.core.seq(seq__25309_26140);
if(temp__5735__auto___26152){
var seq__25309_26153__$1 = temp__5735__auto___26152;
if(cljs.core.chunked_seq_QMARK_(seq__25309_26153__$1)){
var c__4556__auto___26154 = cljs.core.chunk_first(seq__25309_26153__$1);
var G__26155 = cljs.core.chunk_rest(seq__25309_26153__$1);
var G__26156 = c__4556__auto___26154;
var G__26157 = cljs.core.count(c__4556__auto___26154);
var G__26158 = (0);
seq__25309_26140 = G__26155;
chunk__25310_26141 = G__26156;
count__25311_26142 = G__26157;
i__25312_26143 = G__26158;
continue;
} else {
var vec__25322_26159 = cljs.core.first(seq__25309_26153__$1);
var pno_26160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25322_26159,(0),null);
var pmask_26161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25322_26159,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_26160,"$ = ",pmask_26161,";");


var G__26162 = cljs.core.next(seq__25309_26153__$1);
var G__26163 = null;
var G__26164 = (0);
var G__26165 = (0);
seq__25309_26140 = G__26162;
chunk__25310_26141 = G__26163;
count__25311_26142 = G__26164;
i__25312_26143 = G__26165;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__25325){
var map__25326 = p__25325;
var map__25326__$1 = (((((!((map__25326 == null))))?(((((map__25326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25326):map__25326);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25326__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25326__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25326__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25326__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25326__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__24463__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__25328){
var map__25329 = p__25328;
var map__25329__$1 = (((((!((map__25329 == null))))?(((((map__25329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25329):map__25329);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25329__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25329__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25329__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25329__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25329__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4115__auto__ = code;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__4115__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__24463__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__25335 = cljs.core.seq(table);
var chunk__25336 = null;
var count__25337 = (0);
var i__25338 = (0);
while(true){
if((i__25338 < count__25337)){
var vec__25345 = chunk__25336.cljs$core$IIndexed$_nth$arity$2(null,i__25338);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25345,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25345,(1),null);
var ns_26166 = cljs.core.namespace(sym);
var name_26167 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__26168 = seq__25335;
var G__26169 = chunk__25336;
var G__26170 = count__25337;
var G__26171 = (i__25338 + (1));
seq__25335 = G__26168;
chunk__25336 = G__26169;
count__25337 = G__26170;
i__25338 = G__26171;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__25335);
if(temp__5735__auto__){
var seq__25335__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25335__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__25335__$1);
var G__26172 = cljs.core.chunk_rest(seq__25335__$1);
var G__26173 = c__4556__auto__;
var G__26174 = cljs.core.count(c__4556__auto__);
var G__26175 = (0);
seq__25335 = G__26172;
chunk__25336 = G__26173;
count__25337 = G__26174;
i__25338 = G__26175;
continue;
} else {
var vec__25348 = cljs.core.first(seq__25335__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25348,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25348,(1),null);
var ns_26176 = cljs.core.namespace(sym);
var name_26177 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__26178 = cljs.core.next(seq__25335__$1);
var G__26179 = null;
var G__26180 = (0);
var G__26181 = (0);
seq__25335 = G__26178;
chunk__25336 = G__26179;
count__25337 = G__26180;
i__25338 = G__26181;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__25352 = arguments.length;
switch (G__25352) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.analyzer.get_externs():null));
}));

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_26183 = cljs.core.first(ks);
var vec__25353_26184 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_26183);
var top_26185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25353_26184,(0),null);
var prefix_SINGLEQUOTE__26186 = vec__25353_26184;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_26183)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__26186) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_26185)) || (cljs.core.contains_QMARK_(known_externs,top_26185)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__26186)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_26185);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__26186)),";");
}
} else {
}

var m_26189 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_26183);
if(cljs.core.empty_QMARK_(m_26189)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__26186,m_26189,top_level,known_externs);
}

var G__26190 = cljs.core.next(ks);
ks = G__26190;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);

