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
var map__24529 = G__24472__$1;
var map__24529__$1 = (((((!((map__24529 == null))))?(((((map__24529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24529):map__24529);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24529__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__24531){
var map__24532 = p__24531;
var map__24532__$1 = (((((!((map__24532 == null))))?(((((map__24532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24532):map__24532);
var name_var = map__24532__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24532__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24532__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__24534 = info;
var map__24534__$1 = (((((!((map__24534 == null))))?(((((map__24534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24534):map__24534);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24534__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24534__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__24536 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__24536) : cljs.compiler.munge.call(null,G__24536));
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
var G__24538 = arguments.length;
switch (G__24538) {
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
var ms = (function (){var fexpr__24539 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11501,11501,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__24539.cljs$core$IFn$_invoke$arity$1 ? fexpr__24539.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__24539.call(null,ss__$3));
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
var G__24540 = cp;
switch (G__24540) {
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
var seq__24541_25360 = cljs.core.seq(s);
var chunk__24542_25361 = null;
var count__24543_25362 = (0);
var i__24544_25363 = (0);
while(true){
if((i__24544_25363 < count__24543_25362)){
var c_25364 = chunk__24542_25361.cljs$core$IIndexed$_nth$arity$2(null,i__24544_25363);
sb.append(cljs.compiler.escape_char(c_25364));


var G__25365 = seq__24541_25360;
var G__25366 = chunk__24542_25361;
var G__25367 = count__24543_25362;
var G__25368 = (i__24544_25363 + (1));
seq__24541_25360 = G__25365;
chunk__24542_25361 = G__25366;
count__24543_25362 = G__25367;
i__24544_25363 = G__25368;
continue;
} else {
var temp__5735__auto___25369 = cljs.core.seq(seq__24541_25360);
if(temp__5735__auto___25369){
var seq__24541_25370__$1 = temp__5735__auto___25369;
if(cljs.core.chunked_seq_QMARK_(seq__24541_25370__$1)){
var c__4556__auto___25371 = cljs.core.chunk_first(seq__24541_25370__$1);
var G__25372 = cljs.core.chunk_rest(seq__24541_25370__$1);
var G__25373 = c__4556__auto___25371;
var G__25374 = cljs.core.count(c__4556__auto___25371);
var G__25375 = (0);
seq__24541_25360 = G__25372;
chunk__24542_25361 = G__25373;
count__24543_25362 = G__25374;
i__24544_25363 = G__25375;
continue;
} else {
var c_25376 = cljs.core.first(seq__24541_25370__$1);
sb.append(cljs.compiler.escape_char(c_25376));


var G__25377 = cljs.core.next(seq__24541_25370__$1);
var G__25378 = null;
var G__25379 = (0);
var G__25380 = (0);
seq__24541_25360 = G__25377;
chunk__24542_25361 = G__25378;
count__24543_25362 = G__25379;
i__24544_25363 = G__25380;
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
var G__24564 = arguments.length;
switch (G__24564) {
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
var s_25392 = (function (){var G__24565 = a;
if((!(typeof a === 'string'))){
return G__24565.toString();
} else {
return G__24565;
}
})();
var temp__5739__auto___25393 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___25393 == null)){
} else {
var sm_data_25394 = temp__5739__auto___25393;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_25394,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__24556_SHARP_){
return (p1__24556_SHARP_ + s_25392.length);
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

var seq__24569 = cljs.core.seq(xs);
var chunk__24570 = null;
var count__24571 = (0);
var i__24572 = (0);
while(true){
if((i__24572 < count__24571)){
var x = chunk__24570.cljs$core$IIndexed$_nth$arity$2(null,i__24572);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__25395 = seq__24569;
var G__25396 = chunk__24570;
var G__25397 = count__24571;
var G__25398 = (i__24572 + (1));
seq__24569 = G__25395;
chunk__24570 = G__25396;
count__24571 = G__25397;
i__24572 = G__25398;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__24569);
if(temp__5735__auto__){
var seq__24569__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24569__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24569__$1);
var G__25399 = cljs.core.chunk_rest(seq__24569__$1);
var G__25400 = c__4556__auto__;
var G__25401 = cljs.core.count(c__4556__auto__);
var G__25402 = (0);
seq__24569 = G__25399;
chunk__24570 = G__25400;
count__24571 = G__25401;
i__24572 = G__25402;
continue;
} else {
var x = cljs.core.first(seq__24569__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__25403 = cljs.core.next(seq__24569__$1);
var G__25404 = null;
var G__25405 = (0);
var G__25406 = (0);
seq__24569 = G__25403;
chunk__24570 = G__25404;
count__24571 = G__25405;
i__24572 = G__25406;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq24558){
var G__24559 = cljs.core.first(seq24558);
var seq24558__$1 = cljs.core.next(seq24558);
var G__24560 = cljs.core.first(seq24558__$1);
var seq24558__$2 = cljs.core.next(seq24558__$1);
var G__24561 = cljs.core.first(seq24558__$2);
var seq24558__$3 = cljs.core.next(seq24558__$2);
var G__24562 = cljs.core.first(seq24558__$3);
var seq24558__$4 = cljs.core.next(seq24558__$3);
var G__24563 = cljs.core.first(seq24558__$4);
var seq24558__$5 = cljs.core.next(seq24558__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24559,G__24560,G__24561,G__24562,G__24563,seq24558__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__24573){
var map__24574 = p__24573;
var map__24574__$1 = (((((!((map__24574 == null))))?(((((map__24574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24574):map__24574);
var m = map__24574__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24574__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__24596 = arguments.length;
switch (G__24596) {
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

var seq__24597_25411 = cljs.core.seq(xs);
var chunk__24598_25412 = null;
var count__24599_25413 = (0);
var i__24600_25414 = (0);
while(true){
if((i__24600_25414 < count__24599_25413)){
var x_25415 = chunk__24598_25412.cljs$core$IIndexed$_nth$arity$2(null,i__24600_25414);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_25415);


var G__25416 = seq__24597_25411;
var G__25417 = chunk__24598_25412;
var G__25418 = count__24599_25413;
var G__25419 = (i__24600_25414 + (1));
seq__24597_25411 = G__25416;
chunk__24598_25412 = G__25417;
count__24599_25413 = G__25418;
i__24600_25414 = G__25419;
continue;
} else {
var temp__5735__auto___25420 = cljs.core.seq(seq__24597_25411);
if(temp__5735__auto___25420){
var seq__24597_25421__$1 = temp__5735__auto___25420;
if(cljs.core.chunked_seq_QMARK_(seq__24597_25421__$1)){
var c__4556__auto___25422 = cljs.core.chunk_first(seq__24597_25421__$1);
var G__25423 = cljs.core.chunk_rest(seq__24597_25421__$1);
var G__25424 = c__4556__auto___25422;
var G__25425 = cljs.core.count(c__4556__auto___25422);
var G__25426 = (0);
seq__24597_25411 = G__25423;
chunk__24598_25412 = G__25424;
count__24599_25413 = G__25425;
i__24600_25414 = G__25426;
continue;
} else {
var x_25427 = cljs.core.first(seq__24597_25421__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_25427);


var G__25428 = cljs.core.next(seq__24597_25421__$1);
var G__25429 = null;
var G__25430 = (0);
var G__25431 = (0);
seq__24597_25411 = G__25428;
chunk__24598_25412 = G__25429;
count__24599_25413 = G__25430;
i__24600_25414 = G__25431;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq24590){
var G__24591 = cljs.core.first(seq24590);
var seq24590__$1 = cljs.core.next(seq24590);
var G__24592 = cljs.core.first(seq24590__$1);
var seq24590__$2 = cljs.core.next(seq24590__$1);
var G__24593 = cljs.core.first(seq24590__$2);
var seq24590__$3 = cljs.core.next(seq24590__$2);
var G__24594 = cljs.core.first(seq24590__$3);
var seq24590__$4 = cljs.core.next(seq24590__$3);
var G__24595 = cljs.core.first(seq24590__$4);
var seq24590__$5 = cljs.core.next(seq24590__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24591,G__24592,G__24593,G__24594,G__24595,seq24590__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24603_25432 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24604_25433 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24605_25434 = true;
var _STAR_print_fn_STAR__temp_val__24606_25435 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24605_25434);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24606_25435);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24604_25433);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24603_25432);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__24607 = cljs.core.get_global_hierarchy;
return (fexpr__24607.cljs$core$IFn$_invoke$arity$0 ? fexpr__24607.cljs$core$IFn$_invoke$arity$0() : fexpr__24607.call(null));
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
var vec__24608 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24608,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24608,(1),null);
var G__24611 = ns;
var G__24612 = name;
var G__24613 = (function (){
var G__24614 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__24614) : cljs.compiler.emit_constant.call(null,G__24614));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__24611,G__24612,G__24613) : cljs.compiler.emit_record_value.call(null,G__24611,G__24612,G__24613));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__24616 = cljs.core.keys(x);
var G__24617 = cljs.core.vals(x);
var G__24618 = cljs.compiler.emit_constants_comma_sep;
var G__24619 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__24616,G__24617,G__24618,G__24619) : cljs.compiler.emit_map.call(null,G__24616,G__24617,G__24618,G__24619));
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
var G__24620 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__24621 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__24620,G__24621) : cljs.compiler.emit_with_meta.call(null,G__24620,G__24621));
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
var vec__24622 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24622,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24622,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24622,(2),null);
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
var G__24627 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__24627) : x.call(null,G__24627));
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
var G__24628 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__24628) : x.call(null,G__24628));
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
var G__24630 = items;
var G__24631 = (function (p1__24629_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__24629_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__24630,G__24631) : cljs.compiler.emit_js_object.call(null,G__24630,G__24631));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__24633){
var map__24634 = p__24633;
var map__24634__$1 = (((((!((map__24634 == null))))?(((((map__24634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24634):map__24634);
var ast = map__24634__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24634__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24634__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24634__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__24636 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__24636__$1 = (((((!((map__24636 == null))))?(((((map__24636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24636):map__24636);
var cenv = map__24636__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24636__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__24638 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__24641 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__24641) : cljs.compiler.es5_GT__EQ_.call(null,G__24641));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__24638,cljs.analyzer.es5_allowed);
} else {
return G__24638;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__24642 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__24642,reserved);
} else {
return G__24642;
}
})();
var env__24463__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__24653_25436 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__24653_25437__$1 = (((G__24653_25436 instanceof cljs.core.Keyword))?G__24653_25436.fqn:null);
switch (G__24653_25437__$1) {
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__24654){
var map__24655 = p__24654;
var map__24655__$1 = (((((!((map__24655 == null))))?(((((map__24655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24655):map__24655);
var arg = map__24655__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24655__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24655__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24655__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24655__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));


var map__24658 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__24658__$1 = (((((!((map__24658 == null))))?(((((map__24658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24658):map__24658);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24658__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__24660){
var map__24661 = p__24660;
var map__24661__$1 = (((((!((map__24661 == null))))?(((((map__24661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24661):map__24661);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24661__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24661__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24661__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_((function (p1__24664_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__24664_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__24666 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__24666) : comma_sep.call(null,G__24666));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__24667 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__24667) : comma_sep.call(null,G__24667));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__24668){
var map__24669 = p__24668;
var map__24669__$1 = (((((!((map__24669 == null))))?(((((map__24669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24669):map__24669);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24669__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24669__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24669__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__24674){
var map__24675 = p__24674;
var map__24675__$1 = (((((!((map__24675 == null))))?(((((map__24675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24675):map__24675);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24675__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24675__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_((function (p1__24677_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__24677_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__24678 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__24678) : comma_sep.call(null,G__24678));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__24679){
var map__24680 = p__24679;
var map__24680__$1 = (((((!((map__24680 == null))))?(((((map__24680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24680):map__24680);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24680__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24680__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__24691_25441 = items_25440__$1;
var seq__24692_25442 = cljs.core.seq(vec__24691_25441);
var first__24693_25443 = cljs.core.first(seq__24692_25442);
var seq__24692_25444__$1 = cljs.core.next(seq__24692_25442);
var vec__24694_25445 = first__24693_25443;
var k_25446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24694_25445,(0),null);
var v_25447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24694_25445,(1),null);
var r_25448 = seq__24692_25444__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_25446),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_25447) : emit_js_object_val.call(null,v_25447)));

var seq__24697_25464 = cljs.core.seq(r_25448);
var chunk__24698_25465 = null;
var count__24699_25466 = (0);
var i__24700_25467 = (0);
while(true){
if((i__24700_25467 < count__24699_25466)){
var vec__24707_25468 = chunk__24698_25465.cljs$core$IIndexed$_nth$arity$2(null,i__24700_25467);
var k_25469__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24707_25468,(0),null);
var v_25470__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24707_25468,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_25469__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_25470__$1) : emit_js_object_val.call(null,v_25470__$1)));


var G__25471 = seq__24697_25464;
var G__25472 = chunk__24698_25465;
var G__25473 = count__24699_25466;
var G__25474 = (i__24700_25467 + (1));
seq__24697_25464 = G__25471;
chunk__24698_25465 = G__25472;
count__24699_25466 = G__25473;
i__24700_25467 = G__25474;
continue;
} else {
var temp__5735__auto___25475__$1 = cljs.core.seq(seq__24697_25464);
if(temp__5735__auto___25475__$1){
var seq__24697_25476__$1 = temp__5735__auto___25475__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24697_25476__$1)){
var c__4556__auto___25477 = cljs.core.chunk_first(seq__24697_25476__$1);
var G__25478 = cljs.core.chunk_rest(seq__24697_25476__$1);
var G__25479 = c__4556__auto___25477;
var G__25480 = cljs.core.count(c__4556__auto___25477);
var G__25481 = (0);
seq__24697_25464 = G__25478;
chunk__24698_25465 = G__25479;
count__24699_25466 = G__25480;
i__24700_25467 = G__25481;
continue;
} else {
var vec__24710_25482 = cljs.core.first(seq__24697_25476__$1);
var k_25483__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24710_25482,(0),null);
var v_25484__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24710_25482,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_25483__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_25484__$1) : emit_js_object_val.call(null,v_25484__$1)));


var G__25485 = cljs.core.next(seq__24697_25476__$1);
var G__25486 = null;
var G__25487 = (0);
var G__25488 = (0);
seq__24697_25464 = G__25485;
chunk__24698_25465 = G__25486;
count__24699_25466 = G__25487;
i__24700_25467 = G__25488;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__24727){
var map__24728 = p__24727;
var map__24728__$1 = (((((!((map__24728 == null))))?(((((map__24728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24728):map__24728);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24728__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24728__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24728__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__24730){
var map__24731 = p__24730;
var map__24731__$1 = (((((!((map__24731 == null))))?(((((map__24731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24731):map__24731);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24731__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24731__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__24733){
var map__24734 = p__24733;
var map__24734__$1 = (((((!((map__24734 == null))))?(((((map__24734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24734):map__24734);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24734__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__24736){
var map__24737 = p__24736;
var map__24737__$1 = (((((!((map__24737 == null))))?(((((map__24737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24737):map__24737);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24737__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24737__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__24739 = cljs.analyzer.unwrap_quote(expr);
var map__24739__$1 = (((((!((map__24739 == null))))?(((((map__24739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24739):map__24739);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24739__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24739__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24739__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__24741 = cljs.analyzer.unwrap_quote(expr);
var map__24741__$1 = (((((!((map__24741 == null))))?(((((map__24741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24741):map__24741);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24741__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24741__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24741__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var or__4126__auto__ = (function (){var fexpr__24749 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__24749.cljs$core$IFn$_invoke$arity$1 ? fexpr__24749.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__24749.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__24750){
var map__24751 = p__24750;
var map__24751__$1 = (((((!((map__24751 == null))))?(((((map__24751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24751):map__24751);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24751__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24751__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24751__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24751__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24751__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__24753){
var map__24754 = p__24753;
var map__24754__$1 = (((((!((map__24754 == null))))?(((((map__24754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24754):map__24754);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24754__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24754__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24754__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24754__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__24756_25497 = cljs.core.seq(nodes);
var chunk__24757_25498 = null;
var count__24758_25499 = (0);
var i__24759_25500 = (0);
while(true){
if((i__24759_25500 < count__24758_25499)){
var map__24784_25501 = chunk__24757_25498.cljs$core$IIndexed$_nth$arity$2(null,i__24759_25500);
var map__24784_25502__$1 = (((((!((map__24784_25501 == null))))?(((((map__24784_25501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24784_25501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24784_25501):map__24784_25501);
var ts_25503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24784_25502__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__24785_25504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24784_25502__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__24785_25505__$1 = (((((!((map__24785_25504 == null))))?(((((map__24785_25504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24785_25504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24785_25504):map__24785_25504);
var then_25506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24785_25505__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__24789_25507 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_25503));
var chunk__24790_25508 = null;
var count__24791_25509 = (0);
var i__24792_25510 = (0);
while(true){
if((i__24792_25510 < count__24791_25509)){
var test_25511 = chunk__24790_25508.cljs$core$IIndexed$_nth$arity$2(null,i__24792_25510);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25511,":");


var G__25512 = seq__24789_25507;
var G__25513 = chunk__24790_25508;
var G__25514 = count__24791_25509;
var G__25515 = (i__24792_25510 + (1));
seq__24789_25507 = G__25512;
chunk__24790_25508 = G__25513;
count__24791_25509 = G__25514;
i__24792_25510 = G__25515;
continue;
} else {
var temp__5735__auto___25516 = cljs.core.seq(seq__24789_25507);
if(temp__5735__auto___25516){
var seq__24789_25517__$1 = temp__5735__auto___25516;
if(cljs.core.chunked_seq_QMARK_(seq__24789_25517__$1)){
var c__4556__auto___25518 = cljs.core.chunk_first(seq__24789_25517__$1);
var G__25519 = cljs.core.chunk_rest(seq__24789_25517__$1);
var G__25520 = c__4556__auto___25518;
var G__25521 = cljs.core.count(c__4556__auto___25518);
var G__25522 = (0);
seq__24789_25507 = G__25519;
chunk__24790_25508 = G__25520;
count__24791_25509 = G__25521;
i__24792_25510 = G__25522;
continue;
} else {
var test_25523 = cljs.core.first(seq__24789_25517__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25523,":");


var G__25524 = cljs.core.next(seq__24789_25517__$1);
var G__25525 = null;
var G__25526 = (0);
var G__25527 = (0);
seq__24789_25507 = G__25524;
chunk__24790_25508 = G__25525;
count__24791_25509 = G__25526;
i__24792_25510 = G__25527;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_25506);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_25506);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__25528 = seq__24756_25497;
var G__25529 = chunk__24757_25498;
var G__25530 = count__24758_25499;
var G__25531 = (i__24759_25500 + (1));
seq__24756_25497 = G__25528;
chunk__24757_25498 = G__25529;
count__24758_25499 = G__25530;
i__24759_25500 = G__25531;
continue;
} else {
var temp__5735__auto___25532 = cljs.core.seq(seq__24756_25497);
if(temp__5735__auto___25532){
var seq__24756_25533__$1 = temp__5735__auto___25532;
if(cljs.core.chunked_seq_QMARK_(seq__24756_25533__$1)){
var c__4556__auto___25534 = cljs.core.chunk_first(seq__24756_25533__$1);
var G__25535 = cljs.core.chunk_rest(seq__24756_25533__$1);
var G__25536 = c__4556__auto___25534;
var G__25537 = cljs.core.count(c__4556__auto___25534);
var G__25538 = (0);
seq__24756_25497 = G__25535;
chunk__24757_25498 = G__25536;
count__24758_25499 = G__25537;
i__24759_25500 = G__25538;
continue;
} else {
var map__24794_25539 = cljs.core.first(seq__24756_25533__$1);
var map__24794_25540__$1 = (((((!((map__24794_25539 == null))))?(((((map__24794_25539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24794_25539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24794_25539):map__24794_25539);
var ts_25541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24794_25540__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__24795_25542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24794_25540__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__24795_25543__$1 = (((((!((map__24795_25542 == null))))?(((((map__24795_25542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24795_25542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24795_25542):map__24795_25542);
var then_25544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24795_25543__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__24800_25545 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_25541));
var chunk__24801_25546 = null;
var count__24802_25547 = (0);
var i__24803_25548 = (0);
while(true){
if((i__24803_25548 < count__24802_25547)){
var test_25551 = chunk__24801_25546.cljs$core$IIndexed$_nth$arity$2(null,i__24803_25548);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25551,":");


var G__25552 = seq__24800_25545;
var G__25553 = chunk__24801_25546;
var G__25554 = count__24802_25547;
var G__25555 = (i__24803_25548 + (1));
seq__24800_25545 = G__25552;
chunk__24801_25546 = G__25553;
count__24802_25547 = G__25554;
i__24803_25548 = G__25555;
continue;
} else {
var temp__5735__auto___25556__$1 = cljs.core.seq(seq__24800_25545);
if(temp__5735__auto___25556__$1){
var seq__24800_25557__$1 = temp__5735__auto___25556__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24800_25557__$1)){
var c__4556__auto___25558 = cljs.core.chunk_first(seq__24800_25557__$1);
var G__25559 = cljs.core.chunk_rest(seq__24800_25557__$1);
var G__25560 = c__4556__auto___25558;
var G__25561 = cljs.core.count(c__4556__auto___25558);
var G__25562 = (0);
seq__24800_25545 = G__25559;
chunk__24801_25546 = G__25560;
count__24802_25547 = G__25561;
i__24803_25548 = G__25562;
continue;
} else {
var test_25563 = cljs.core.first(seq__24800_25557__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25563,":");


var G__25565 = cljs.core.next(seq__24800_25557__$1);
var G__25566 = null;
var G__25567 = (0);
var G__25568 = (0);
seq__24800_25545 = G__25565;
chunk__24801_25546 = G__25566;
count__24802_25547 = G__25567;
i__24803_25548 = G__25568;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_25544);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_25544);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__25571 = cljs.core.next(seq__24756_25533__$1);
var G__25572 = null;
var G__25573 = (0);
var G__25574 = (0);
seq__24756_25497 = G__25571;
chunk__24757_25498 = G__25572;
count__24758_25499 = G__25573;
i__24759_25500 = G__25574;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__24806){
var map__24807 = p__24806;
var map__24807__$1 = (((((!((map__24807 == null))))?(((((map__24807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24807):map__24807);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24807__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24807__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__24814 = env;
var G__24815 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__24814,G__24815) : cljs.compiler.resolve_type.call(null,G__24814,G__24815));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__24816 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24816,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24816,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__24811_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__24811_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__24811_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__24819 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__24819,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__24819;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__24822 = env;
var G__24823 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__24822,G__24823) : cljs.compiler.resolve_type.call(null,G__24822,G__24823));
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
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24824_SHARP_){
return cljs.compiler.resolve_type(env,p1__24824_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__24825 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__24826 = cljs.core.seq(vec__24825);
var first__24827 = cljs.core.first(seq__24826);
var seq__24826__$1 = cljs.core.next(seq__24826);
var p = first__24827;
var first__24827__$1 = cljs.core.first(seq__24826__$1);
var seq__24826__$2 = cljs.core.next(seq__24826__$1);
var ts = first__24827__$1;
var first__24827__$2 = cljs.core.first(seq__24826__$2);
var seq__24826__$3 = cljs.core.next(seq__24826__$2);
var n = first__24827__$2;
var xs = seq__24826__$3;
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
var vec__24831 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__24832 = cljs.core.seq(vec__24831);
var first__24833 = cljs.core.first(seq__24832);
var seq__24832__$1 = cljs.core.next(seq__24832);
var p = first__24833;
var first__24833__$1 = cljs.core.first(seq__24832__$1);
var seq__24832__$2 = cljs.core.next(seq__24832__$1);
var ts = first__24833__$1;
var xs = seq__24832__$2;
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
var G__24835 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__24834 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__24834.cljs$core$IFn$_invoke$arity$1 ? fexpr__24834.cljs$core$IFn$_invoke$arity$1(G__24835) : fexpr__24834.call(null,G__24835));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__24838 = arguments.length;
switch (G__24838) {
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
var vec__24846 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24836_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__24836_SHARP_);
} else {
return p1__24836_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__24847 = cljs.core.seq(vec__24846);
var first__24848 = cljs.core.first(seq__24847);
var seq__24847__$1 = cljs.core.next(seq__24847);
var x = first__24848;
var ys = seq__24847__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__24849 = cljs.core.seq(ys);
var chunk__24850 = null;
var count__24851 = (0);
var i__24852 = (0);
while(true){
if((i__24852 < count__24851)){
var next_line = chunk__24850.cljs$core$IIndexed$_nth$arity$2(null,i__24852);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__25604 = seq__24849;
var G__25605 = chunk__24850;
var G__25606 = count__24851;
var G__25607 = (i__24852 + (1));
seq__24849 = G__25604;
chunk__24850 = G__25605;
count__24851 = G__25606;
i__24852 = G__25607;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__24849);
if(temp__5735__auto__){
var seq__24849__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24849__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24849__$1);
var G__25609 = cljs.core.chunk_rest(seq__24849__$1);
var G__25610 = c__4556__auto__;
var G__25611 = cljs.core.count(c__4556__auto__);
var G__25612 = (0);
seq__24849 = G__25609;
chunk__24850 = G__25610;
count__24851 = G__25611;
i__24852 = G__25612;
continue;
} else {
var next_line = cljs.core.first(seq__24849__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__25613 = cljs.core.next(seq__24849__$1);
var G__25614 = null;
var G__25615 = (0);
var G__25616 = (0);
seq__24849 = G__25613;
chunk__24850 = G__25614;
count__24851 = G__25615;
i__24852 = G__25616;
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

var seq__24856_25617 = cljs.core.seq(docs__$2);
var chunk__24857_25618 = null;
var count__24858_25619 = (0);
var i__24859_25620 = (0);
while(true){
if((i__24859_25620 < count__24858_25619)){
var e_25621 = chunk__24857_25618.cljs$core$IIndexed$_nth$arity$2(null,i__24859_25620);
if(cljs.core.truth_(e_25621)){
print_comment_lines(e_25621);
} else {
}


var G__25622 = seq__24856_25617;
var G__25623 = chunk__24857_25618;
var G__25624 = count__24858_25619;
var G__25625 = (i__24859_25620 + (1));
seq__24856_25617 = G__25622;
chunk__24857_25618 = G__25623;
count__24858_25619 = G__25624;
i__24859_25620 = G__25625;
continue;
} else {
var temp__5735__auto___25626 = cljs.core.seq(seq__24856_25617);
if(temp__5735__auto___25626){
var seq__24856_25627__$1 = temp__5735__auto___25626;
if(cljs.core.chunked_seq_QMARK_(seq__24856_25627__$1)){
var c__4556__auto___25628 = cljs.core.chunk_first(seq__24856_25627__$1);
var G__25629 = cljs.core.chunk_rest(seq__24856_25627__$1);
var G__25630 = c__4556__auto___25628;
var G__25631 = cljs.core.count(c__4556__auto___25628);
var G__25632 = (0);
seq__24856_25617 = G__25629;
chunk__24857_25618 = G__25630;
count__24858_25619 = G__25631;
i__24859_25620 = G__25632;
continue;
} else {
var e_25633 = cljs.core.first(seq__24856_25627__$1);
if(cljs.core.truth_(e_25633)){
print_comment_lines(e_25633);
} else {
}


var G__25634 = cljs.core.next(seq__24856_25627__$1);
var G__25635 = null;
var G__25636 = (0);
var G__25637 = (0);
seq__24856_25617 = G__25634;
chunk__24857_25618 = G__25635;
count__24858_25619 = G__25636;
i__24859_25620 = G__25637;
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
var and__4115__auto__ = cljs.core.some((function (p1__24861_SHARP_){
return goog.string.startsWith(p1__24861_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__24866){
var map__24867 = p__24866;
var map__24867__$1 = (((((!((map__24867 == null))))?(((((map__24867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24867):map__24867);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24867__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24867__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24867__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24867__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24867__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24867__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24867__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24867__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24867__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24867__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__24869){
var map__24870 = p__24869;
var map__24870__$1 = (((((!((map__24870 == null))))?(((((map__24870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24870):map__24870);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24870__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24870__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24870__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__24872_25652 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__24873_25653 = null;
var count__24874_25654 = (0);
var i__24875_25655 = (0);
while(true){
if((i__24875_25655 < count__24874_25654)){
var vec__24887_25656 = chunk__24873_25653.cljs$core$IIndexed$_nth$arity$2(null,i__24875_25655);
var i_25657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24887_25656,(0),null);
var param_25658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24887_25656,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_25658);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__25661 = seq__24872_25652;
var G__25662 = chunk__24873_25653;
var G__25663 = count__24874_25654;
var G__25664 = (i__24875_25655 + (1));
seq__24872_25652 = G__25661;
chunk__24873_25653 = G__25662;
count__24874_25654 = G__25663;
i__24875_25655 = G__25664;
continue;
} else {
var temp__5735__auto___25665 = cljs.core.seq(seq__24872_25652);
if(temp__5735__auto___25665){
var seq__24872_25666__$1 = temp__5735__auto___25665;
if(cljs.core.chunked_seq_QMARK_(seq__24872_25666__$1)){
var c__4556__auto___25667 = cljs.core.chunk_first(seq__24872_25666__$1);
var G__25668 = cljs.core.chunk_rest(seq__24872_25666__$1);
var G__25669 = c__4556__auto___25667;
var G__25670 = cljs.core.count(c__4556__auto___25667);
var G__25671 = (0);
seq__24872_25652 = G__25668;
chunk__24873_25653 = G__25669;
count__24874_25654 = G__25670;
i__24875_25655 = G__25671;
continue;
} else {
var vec__24890_25672 = cljs.core.first(seq__24872_25666__$1);
var i_25673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24890_25672,(0),null);
var param_25674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24890_25672,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_25674);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__25675 = cljs.core.next(seq__24872_25666__$1);
var G__25676 = null;
var G__25677 = (0);
var G__25678 = (0);
seq__24872_25652 = G__25675;
chunk__24873_25653 = G__25676;
count__24874_25654 = G__25677;
i__24875_25655 = G__25678;
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

var seq__24893_25679 = cljs.core.seq(params);
var chunk__24894_25680 = null;
var count__24895_25681 = (0);
var i__24896_25682 = (0);
while(true){
if((i__24896_25682 < count__24895_25681)){
var param_25683 = chunk__24894_25680.cljs$core$IIndexed$_nth$arity$2(null,i__24896_25682);
cljs.compiler.emit(param_25683);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25683,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25684 = seq__24893_25679;
var G__25685 = chunk__24894_25680;
var G__25686 = count__24895_25681;
var G__25687 = (i__24896_25682 + (1));
seq__24893_25679 = G__25684;
chunk__24894_25680 = G__25685;
count__24895_25681 = G__25686;
i__24896_25682 = G__25687;
continue;
} else {
var temp__5735__auto___25688 = cljs.core.seq(seq__24893_25679);
if(temp__5735__auto___25688){
var seq__24893_25689__$1 = temp__5735__auto___25688;
if(cljs.core.chunked_seq_QMARK_(seq__24893_25689__$1)){
var c__4556__auto___25690 = cljs.core.chunk_first(seq__24893_25689__$1);
var G__25691 = cljs.core.chunk_rest(seq__24893_25689__$1);
var G__25692 = c__4556__auto___25690;
var G__25693 = cljs.core.count(c__4556__auto___25690);
var G__25694 = (0);
seq__24893_25679 = G__25691;
chunk__24894_25680 = G__25692;
count__24895_25681 = G__25693;
i__24896_25682 = G__25694;
continue;
} else {
var param_25695 = cljs.core.first(seq__24893_25689__$1);
cljs.compiler.emit(param_25695);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25695,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25696 = cljs.core.next(seq__24893_25689__$1);
var G__25697 = null;
var G__25698 = (0);
var G__25699 = (0);
seq__24893_25679 = G__25696;
chunk__24894_25680 = G__25697;
count__24895_25681 = G__25698;
i__24896_25682 = G__25699;
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

var seq__24903_25700 = cljs.core.seq(params);
var chunk__24904_25701 = null;
var count__24905_25702 = (0);
var i__24906_25703 = (0);
while(true){
if((i__24906_25703 < count__24905_25702)){
var param_25704 = chunk__24904_25701.cljs$core$IIndexed$_nth$arity$2(null,i__24906_25703);
cljs.compiler.emit(param_25704);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25704,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25705 = seq__24903_25700;
var G__25706 = chunk__24904_25701;
var G__25707 = count__24905_25702;
var G__25708 = (i__24906_25703 + (1));
seq__24903_25700 = G__25705;
chunk__24904_25701 = G__25706;
count__24905_25702 = G__25707;
i__24906_25703 = G__25708;
continue;
} else {
var temp__5735__auto___25709 = cljs.core.seq(seq__24903_25700);
if(temp__5735__auto___25709){
var seq__24903_25710__$1 = temp__5735__auto___25709;
if(cljs.core.chunked_seq_QMARK_(seq__24903_25710__$1)){
var c__4556__auto___25711 = cljs.core.chunk_first(seq__24903_25710__$1);
var G__25712 = cljs.core.chunk_rest(seq__24903_25710__$1);
var G__25713 = c__4556__auto___25711;
var G__25714 = cljs.core.count(c__4556__auto___25711);
var G__25715 = (0);
seq__24903_25700 = G__25712;
chunk__24904_25701 = G__25713;
count__24905_25702 = G__25714;
i__24906_25703 = G__25715;
continue;
} else {
var param_25716 = cljs.core.first(seq__24903_25710__$1);
cljs.compiler.emit(param_25716);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25716,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25717 = cljs.core.next(seq__24903_25710__$1);
var G__25718 = null;
var G__25719 = (0);
var G__25720 = (0);
seq__24903_25700 = G__25717;
chunk__24904_25701 = G__25718;
count__24905_25702 = G__25719;
i__24906_25703 = G__25720;
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
var seq__24916 = cljs.core.seq(params);
var chunk__24917 = null;
var count__24918 = (0);
var i__24919 = (0);
while(true){
if((i__24919 < count__24918)){
var param = chunk__24917.cljs$core$IIndexed$_nth$arity$2(null,i__24919);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25721 = seq__24916;
var G__25722 = chunk__24917;
var G__25723 = count__24918;
var G__25724 = (i__24919 + (1));
seq__24916 = G__25721;
chunk__24917 = G__25722;
count__24918 = G__25723;
i__24919 = G__25724;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__24916);
if(temp__5735__auto__){
var seq__24916__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24916__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24916__$1);
var G__25726 = cljs.core.chunk_rest(seq__24916__$1);
var G__25727 = c__4556__auto__;
var G__25728 = cljs.core.count(c__4556__auto__);
var G__25729 = (0);
seq__24916 = G__25726;
chunk__24917 = G__25727;
count__24918 = G__25728;
i__24919 = G__25729;
continue;
} else {
var param = cljs.core.first(seq__24916__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25731 = cljs.core.next(seq__24916__$1);
var G__25732 = null;
var G__25733 = (0);
var G__25734 = (0);
seq__24916 = G__25731;
chunk__24917 = G__25732;
count__24918 = G__25733;
i__24919 = G__25734;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__24958){
var map__24959 = p__24958;
var map__24959__$1 = (((((!((map__24959 == null))))?(((((map__24959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24959):map__24959);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24959__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24959__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24959__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24959__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24959__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24959__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__24990){
var map__24991 = p__24990;
var map__24991__$1 = (((((!((map__24991 == null))))?(((((map__24991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24991):map__24991);
var f = map__24991__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24991__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24991__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24991__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24991__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24991__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24991__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24991__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24991__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__24463__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_25737__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_25738 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_25737__$1);
var delegate_name_25739 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_25738),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_25739," = function (");

var seq__24993_25741 = cljs.core.seq(params);
var chunk__24994_25742 = null;
var count__24995_25743 = (0);
var i__24996_25744 = (0);
while(true){
if((i__24996_25744 < count__24995_25743)){
var param_25748 = chunk__24994_25742.cljs$core$IIndexed$_nth$arity$2(null,i__24996_25744);
cljs.compiler.emit(param_25748);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25748,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25749 = seq__24993_25741;
var G__25750 = chunk__24994_25742;
var G__25751 = count__24995_25743;
var G__25752 = (i__24996_25744 + (1));
seq__24993_25741 = G__25749;
chunk__24994_25742 = G__25750;
count__24995_25743 = G__25751;
i__24996_25744 = G__25752;
continue;
} else {
var temp__5735__auto___25753 = cljs.core.seq(seq__24993_25741);
if(temp__5735__auto___25753){
var seq__24993_25754__$1 = temp__5735__auto___25753;
if(cljs.core.chunked_seq_QMARK_(seq__24993_25754__$1)){
var c__4556__auto___25755 = cljs.core.chunk_first(seq__24993_25754__$1);
var G__25756 = cljs.core.chunk_rest(seq__24993_25754__$1);
var G__25757 = c__4556__auto___25755;
var G__25758 = cljs.core.count(c__4556__auto___25755);
var G__25759 = (0);
seq__24993_25741 = G__25756;
chunk__24994_25742 = G__25757;
count__24995_25743 = G__25758;
i__24996_25744 = G__25759;
continue;
} else {
var param_25760 = cljs.core.first(seq__24993_25754__$1);
cljs.compiler.emit(param_25760);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25760,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25761 = cljs.core.next(seq__24993_25754__$1);
var G__25762 = null;
var G__25763 = (0);
var G__25764 = (0);
seq__24993_25741 = G__25761;
chunk__24994_25742 = G__25762;
count__24995_25743 = G__25763;
i__24996_25744 = G__25764;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_25738," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_25765 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_25765,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_25739,".call(this,");

var seq__25026_25766 = cljs.core.seq(params);
var chunk__25027_25767 = null;
var count__25028_25768 = (0);
var i__25029_25769 = (0);
while(true){
if((i__25029_25769 < count__25028_25768)){
var param_25770 = chunk__25027_25767.cljs$core$IIndexed$_nth$arity$2(null,i__25029_25769);
cljs.compiler.emit(param_25770);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25770,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25771 = seq__25026_25766;
var G__25772 = chunk__25027_25767;
var G__25773 = count__25028_25768;
var G__25774 = (i__25029_25769 + (1));
seq__25026_25766 = G__25771;
chunk__25027_25767 = G__25772;
count__25028_25768 = G__25773;
i__25029_25769 = G__25774;
continue;
} else {
var temp__5735__auto___25775 = cljs.core.seq(seq__25026_25766);
if(temp__5735__auto___25775){
var seq__25026_25776__$1 = temp__5735__auto___25775;
if(cljs.core.chunked_seq_QMARK_(seq__25026_25776__$1)){
var c__4556__auto___25777 = cljs.core.chunk_first(seq__25026_25776__$1);
var G__25778 = cljs.core.chunk_rest(seq__25026_25776__$1);
var G__25779 = c__4556__auto___25777;
var G__25780 = cljs.core.count(c__4556__auto___25777);
var G__25781 = (0);
seq__25026_25766 = G__25778;
chunk__25027_25767 = G__25779;
count__25028_25768 = G__25780;
i__25029_25769 = G__25781;
continue;
} else {
var param_25782 = cljs.core.first(seq__25026_25776__$1);
cljs.compiler.emit(param_25782);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25782,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25783 = cljs.core.next(seq__25026_25776__$1);
var G__25784 = null;
var G__25785 = (0);
var G__25786 = (0);
seq__25026_25766 = G__25783;
chunk__25027_25767 = G__25784;
count__25028_25768 = G__25785;
i__25029_25769 = G__25786;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25738,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_25738,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_25737__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25738,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_25739,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_25738,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__25047){
var map__25048 = p__25047;
var map__25048__$1 = (((((!((map__25048 == null))))?(((((map__25048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25048):map__25048);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25048__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25048__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25048__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25048__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25048__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25048__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25048__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25048__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25044_SHARP_){
var and__4115__auto__ = p1__25044_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__25044_SHARP_));
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
var name_25793__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_25794 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_25793__$1);
var maxparams_25795 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_25796 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_25794),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_25797 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__25045_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__25045_SHARP_)));
}),cljs.core.seq(mmap_25796));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_25794," = null;");

var seq__25074_25798 = cljs.core.seq(ms_25797);
var chunk__25075_25799 = null;
var count__25076_25800 = (0);
var i__25077_25801 = (0);
while(true){
if((i__25077_25801 < count__25076_25800)){
var vec__25084_25802 = chunk__25075_25799.cljs$core$IIndexed$_nth$arity$2(null,i__25077_25801);
var n_25803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25084_25802,(0),null);
var meth_25804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25084_25802,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_25803," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25804))){
cljs.compiler.emit_variadic_fn_method(meth_25804);
} else {
cljs.compiler.emit_fn_method(meth_25804);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__25805 = seq__25074_25798;
var G__25806 = chunk__25075_25799;
var G__25807 = count__25076_25800;
var G__25808 = (i__25077_25801 + (1));
seq__25074_25798 = G__25805;
chunk__25075_25799 = G__25806;
count__25076_25800 = G__25807;
i__25077_25801 = G__25808;
continue;
} else {
var temp__5735__auto___25809 = cljs.core.seq(seq__25074_25798);
if(temp__5735__auto___25809){
var seq__25074_25810__$1 = temp__5735__auto___25809;
if(cljs.core.chunked_seq_QMARK_(seq__25074_25810__$1)){
var c__4556__auto___25811 = cljs.core.chunk_first(seq__25074_25810__$1);
var G__25812 = cljs.core.chunk_rest(seq__25074_25810__$1);
var G__25813 = c__4556__auto___25811;
var G__25814 = cljs.core.count(c__4556__auto___25811);
var G__25815 = (0);
seq__25074_25798 = G__25812;
chunk__25075_25799 = G__25813;
count__25076_25800 = G__25814;
i__25077_25801 = G__25815;
continue;
} else {
var vec__25087_25816 = cljs.core.first(seq__25074_25810__$1);
var n_25817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25087_25816,(0),null);
var meth_25818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25087_25816,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_25817," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25818))){
cljs.compiler.emit_variadic_fn_method(meth_25818);
} else {
cljs.compiler.emit_fn_method(meth_25818);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__25819 = cljs.core.next(seq__25074_25810__$1);
var G__25820 = null;
var G__25821 = (0);
var G__25822 = (0);
seq__25074_25798 = G__25819;
chunk__25075_25799 = G__25820;
count__25076_25800 = G__25821;
i__25077_25801 = G__25822;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25794," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_25795),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_25795)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_25795));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__25092_25823 = cljs.core.seq(ms_25797);
var chunk__25093_25824 = null;
var count__25094_25825 = (0);
var i__25095_25826 = (0);
while(true){
if((i__25095_25826 < count__25094_25825)){
var vec__25102_25827 = chunk__25093_25824.cljs$core$IIndexed$_nth$arity$2(null,i__25095_25826);
var n_25828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25102_25827,(0),null);
var meth_25829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25102_25827,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25829))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_25830 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_25830," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_25831 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_25830," = new cljs.core.IndexedSeq(",a_25831,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_25828,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_25795)),(((cljs.core.count(maxparams_25795) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_25830,");"], 0));
} else {
var pcnt_25832 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25829));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_25832,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_25828,".call(this",(((pcnt_25832 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_25832,maxparams_25795)),null,(1),null)),(2),null))),");");
}


var G__25833 = seq__25092_25823;
var G__25834 = chunk__25093_25824;
var G__25835 = count__25094_25825;
var G__25836 = (i__25095_25826 + (1));
seq__25092_25823 = G__25833;
chunk__25093_25824 = G__25834;
count__25094_25825 = G__25835;
i__25095_25826 = G__25836;
continue;
} else {
var temp__5735__auto___25837 = cljs.core.seq(seq__25092_25823);
if(temp__5735__auto___25837){
var seq__25092_25838__$1 = temp__5735__auto___25837;
if(cljs.core.chunked_seq_QMARK_(seq__25092_25838__$1)){
var c__4556__auto___25839 = cljs.core.chunk_first(seq__25092_25838__$1);
var G__25840 = cljs.core.chunk_rest(seq__25092_25838__$1);
var G__25841 = c__4556__auto___25839;
var G__25842 = cljs.core.count(c__4556__auto___25839);
var G__25843 = (0);
seq__25092_25823 = G__25840;
chunk__25093_25824 = G__25841;
count__25094_25825 = G__25842;
i__25095_25826 = G__25843;
continue;
} else {
var vec__25105_25844 = cljs.core.first(seq__25092_25838__$1);
var n_25845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25105_25844,(0),null);
var meth_25846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25105_25844,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25846))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_25847 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_25847," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_25853 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_25847," = new cljs.core.IndexedSeq(",a_25853,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_25845,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_25795)),(((cljs.core.count(maxparams_25795) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_25847,");"], 0));
} else {
var pcnt_25854 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25846));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_25854,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_25845,".call(this",(((pcnt_25854 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_25854,maxparams_25795)),null,(1),null)),(2),null))),");");
}


var G__25855 = cljs.core.next(seq__25092_25838__$1);
var G__25856 = null;
var G__25857 = (0);
var G__25858 = (0);
seq__25092_25823 = G__25855;
chunk__25093_25824 = G__25856;
count__25094_25825 = G__25857;
i__25095_25826 = G__25858;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_25859 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_25797)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_25859,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25794,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25794,".cljs$lang$applyTo = ",cljs.core.some((function (p1__25046_SHARP_){
var vec__25108 = p1__25046_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25108,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25108,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_25797),".cljs$lang$applyTo;");
} else {
}

var seq__25111_25860 = cljs.core.seq(ms_25797);
var chunk__25112_25861 = null;
var count__25113_25862 = (0);
var i__25114_25863 = (0);
while(true){
if((i__25114_25863 < count__25113_25862)){
var vec__25126_25864 = chunk__25112_25861.cljs$core$IIndexed$_nth$arity$2(null,i__25114_25863);
var n_25865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25126_25864,(0),null);
var meth_25866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25126_25864,(1),null);
var c_25867 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25866));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25866))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25794,".cljs$core$IFn$_invoke$arity$variadic = ",n_25865,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_25794,".cljs$core$IFn$_invoke$arity$",c_25867," = ",n_25865,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__25868 = seq__25111_25860;
var G__25869 = chunk__25112_25861;
var G__25870 = count__25113_25862;
var G__25871 = (i__25114_25863 + (1));
seq__25111_25860 = G__25868;
chunk__25112_25861 = G__25869;
count__25113_25862 = G__25870;
i__25114_25863 = G__25871;
continue;
} else {
var temp__5735__auto___25872 = cljs.core.seq(seq__25111_25860);
if(temp__5735__auto___25872){
var seq__25111_25873__$1 = temp__5735__auto___25872;
if(cljs.core.chunked_seq_QMARK_(seq__25111_25873__$1)){
var c__4556__auto___25874 = cljs.core.chunk_first(seq__25111_25873__$1);
var G__25875 = cljs.core.chunk_rest(seq__25111_25873__$1);
var G__25876 = c__4556__auto___25874;
var G__25877 = cljs.core.count(c__4556__auto___25874);
var G__25878 = (0);
seq__25111_25860 = G__25875;
chunk__25112_25861 = G__25876;
count__25113_25862 = G__25877;
i__25114_25863 = G__25878;
continue;
} else {
var vec__25129_25879 = cljs.core.first(seq__25111_25873__$1);
var n_25880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25129_25879,(0),null);
var meth_25881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25129_25879,(1),null);
var c_25882 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25881));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25881))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25794,".cljs$core$IFn$_invoke$arity$variadic = ",n_25880,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_25794,".cljs$core$IFn$_invoke$arity$",c_25882," = ",n_25880,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__25883 = cljs.core.next(seq__25111_25873__$1);
var G__25884 = null;
var G__25885 = (0);
var G__25886 = (0);
seq__25111_25860 = G__25883;
chunk__25112_25861 = G__25884;
count__25113_25862 = G__25885;
i__25114_25863 = G__25886;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_25794,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__25132){
var map__25133 = p__25132;
var map__25133__$1 = (((((!((map__25133 == null))))?(((((map__25133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25133):map__25133);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25133__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25133__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25133__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__25135_25887 = cljs.core.seq(statements);
var chunk__25136_25888 = null;
var count__25137_25889 = (0);
var i__25138_25890 = (0);
while(true){
if((i__25138_25890 < count__25137_25889)){
var s_25891 = chunk__25136_25888.cljs$core$IIndexed$_nth$arity$2(null,i__25138_25890);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_25891);


var G__25892 = seq__25135_25887;
var G__25893 = chunk__25136_25888;
var G__25894 = count__25137_25889;
var G__25895 = (i__25138_25890 + (1));
seq__25135_25887 = G__25892;
chunk__25136_25888 = G__25893;
count__25137_25889 = G__25894;
i__25138_25890 = G__25895;
continue;
} else {
var temp__5735__auto___25896 = cljs.core.seq(seq__25135_25887);
if(temp__5735__auto___25896){
var seq__25135_25897__$1 = temp__5735__auto___25896;
if(cljs.core.chunked_seq_QMARK_(seq__25135_25897__$1)){
var c__4556__auto___25898 = cljs.core.chunk_first(seq__25135_25897__$1);
var G__25899 = cljs.core.chunk_rest(seq__25135_25897__$1);
var G__25900 = c__4556__auto___25898;
var G__25901 = cljs.core.count(c__4556__auto___25898);
var G__25902 = (0);
seq__25135_25887 = G__25899;
chunk__25136_25888 = G__25900;
count__25137_25889 = G__25901;
i__25138_25890 = G__25902;
continue;
} else {
var s_25903 = cljs.core.first(seq__25135_25897__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_25903);


var G__25904 = cljs.core.next(seq__25135_25897__$1);
var G__25905 = null;
var G__25906 = (0);
var G__25907 = (0);
seq__25135_25887 = G__25904;
chunk__25136_25888 = G__25905;
count__25137_25889 = G__25906;
i__25138_25890 = G__25907;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__25139){
var map__25140 = p__25139;
var map__25140__$1 = (((((!((map__25140 == null))))?(((((map__25140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25140):map__25140);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25140__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25140__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25140__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25140__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25140__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__25150,is_loop){
var map__25151 = p__25150;
var map__25151__$1 = (((((!((map__25151 == null))))?(((((map__25151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25151):map__25151);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25151__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25151__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25151__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__25155_25924 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__25156_25925 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__25156_25925);

try{var seq__25157_25926 = cljs.core.seq(bindings);
var chunk__25158_25927 = null;
var count__25159_25928 = (0);
var i__25160_25929 = (0);
while(true){
if((i__25160_25929 < count__25159_25928)){
var map__25166_25930 = chunk__25158_25927.cljs$core$IIndexed$_nth$arity$2(null,i__25160_25929);
var map__25166_25931__$1 = (((((!((map__25166_25930 == null))))?(((((map__25166_25930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25166_25930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25166_25930):map__25166_25930);
var binding_25932 = map__25166_25931__$1;
var init_25933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25166_25931__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_25932);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_25933,";");


var G__25934 = seq__25157_25926;
var G__25935 = chunk__25158_25927;
var G__25936 = count__25159_25928;
var G__25937 = (i__25160_25929 + (1));
seq__25157_25926 = G__25934;
chunk__25158_25927 = G__25935;
count__25159_25928 = G__25936;
i__25160_25929 = G__25937;
continue;
} else {
var temp__5735__auto___25938 = cljs.core.seq(seq__25157_25926);
if(temp__5735__auto___25938){
var seq__25157_25939__$1 = temp__5735__auto___25938;
if(cljs.core.chunked_seq_QMARK_(seq__25157_25939__$1)){
var c__4556__auto___25940 = cljs.core.chunk_first(seq__25157_25939__$1);
var G__25941 = cljs.core.chunk_rest(seq__25157_25939__$1);
var G__25942 = c__4556__auto___25940;
var G__25943 = cljs.core.count(c__4556__auto___25940);
var G__25944 = (0);
seq__25157_25926 = G__25941;
chunk__25158_25927 = G__25942;
count__25159_25928 = G__25943;
i__25160_25929 = G__25944;
continue;
} else {
var map__25168_25945 = cljs.core.first(seq__25157_25939__$1);
var map__25168_25946__$1 = (((((!((map__25168_25945 == null))))?(((((map__25168_25945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25168_25945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25168_25945):map__25168_25945);
var binding_25947 = map__25168_25946__$1;
var init_25948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25168_25946__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_25947);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_25948,";");


var G__25949 = cljs.core.next(seq__25157_25939__$1);
var G__25950 = null;
var G__25951 = (0);
var G__25952 = (0);
seq__25157_25926 = G__25949;
chunk__25158_25927 = G__25950;
count__25159_25928 = G__25951;
i__25160_25929 = G__25952;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__25155_25924);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__25170){
var map__25172 = p__25170;
var map__25172__$1 = (((((!((map__25172 == null))))?(((((map__25172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25172):map__25172);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25172__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25172__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25172__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___25953 = cljs.core.count(exprs);
var i_25954 = (0);
while(true){
if((i_25954 < n__4613__auto___25953)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_25954) : temps.call(null,i_25954))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_25954) : exprs.call(null,i_25954)),";");

var G__25955 = (i_25954 + (1));
i_25954 = G__25955;
continue;
} else {
}
break;
}

var n__4613__auto___25956 = cljs.core.count(exprs);
var i_25957 = (0);
while(true){
if((i_25957 < n__4613__auto___25956)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_25957) : params.call(null,i_25957)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_25957) : temps.call(null,i_25957)),";");

var G__25958 = (i_25957 + (1));
i_25957 = G__25958;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__25174){
var map__25175 = p__25174;
var map__25175__$1 = (((((!((map__25175 == null))))?(((((map__25175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25175):map__25175);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25175__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25175__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25175__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__25178_25967 = cljs.core.seq(bindings);
var chunk__25179_25968 = null;
var count__25180_25969 = (0);
var i__25181_25970 = (0);
while(true){
if((i__25181_25970 < count__25180_25969)){
var map__25186_25971 = chunk__25179_25968.cljs$core$IIndexed$_nth$arity$2(null,i__25181_25970);
var map__25186_25972__$1 = (((((!((map__25186_25971 == null))))?(((((map__25186_25971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25186_25971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25186_25971):map__25186_25971);
var binding_25973 = map__25186_25972__$1;
var init_25974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25186_25972__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_25973)," = ",init_25974,";");


var G__25975 = seq__25178_25967;
var G__25976 = chunk__25179_25968;
var G__25977 = count__25180_25969;
var G__25978 = (i__25181_25970 + (1));
seq__25178_25967 = G__25975;
chunk__25179_25968 = G__25976;
count__25180_25969 = G__25977;
i__25181_25970 = G__25978;
continue;
} else {
var temp__5735__auto___25979 = cljs.core.seq(seq__25178_25967);
if(temp__5735__auto___25979){
var seq__25178_25980__$1 = temp__5735__auto___25979;
if(cljs.core.chunked_seq_QMARK_(seq__25178_25980__$1)){
var c__4556__auto___25981 = cljs.core.chunk_first(seq__25178_25980__$1);
var G__25982 = cljs.core.chunk_rest(seq__25178_25980__$1);
var G__25983 = c__4556__auto___25981;
var G__25984 = cljs.core.count(c__4556__auto___25981);
var G__25985 = (0);
seq__25178_25967 = G__25982;
chunk__25179_25968 = G__25983;
count__25180_25969 = G__25984;
i__25181_25970 = G__25985;
continue;
} else {
var map__25188_25994 = cljs.core.first(seq__25178_25980__$1);
var map__25188_25995__$1 = (((((!((map__25188_25994 == null))))?(((((map__25188_25994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25188_25994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25188_25994):map__25188_25994);
var binding_25996 = map__25188_25995__$1;
var init_25997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25188_25995__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_25996)," = ",init_25997,";");


var G__25999 = cljs.core.next(seq__25178_25980__$1);
var G__26000 = null;
var G__26001 = (0);
var G__26002 = (0);
seq__25178_25967 = G__25999;
chunk__25179_25968 = G__26000;
count__25180_25969 = G__26001;
i__25181_25970 = G__26002;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__25192){
var map__25193 = p__25192;
var map__25193__$1 = (((((!((map__25193 == null))))?(((((map__25193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25193):map__25193);
var expr = map__25193__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25193__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25193__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25193__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
if(cljs.core.not((function (){var fexpr__25214 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__25214.cljs$core$IFn$_invoke$arity$1 ? fexpr__25214.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__25214.call(null,tag));
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
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__25216 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__25216.cljs$core$IFn$_invoke$arity$1 ? fexpr__25216.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__25216.call(null,first_arg_tag));
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
var vec__25195 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__25190_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25190_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__25191_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25191_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25195,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25195,(1),null);
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
var pimpl_26008 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_26008,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_26012 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_26012,args)),(((mfa_26012 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_26012,args)),"], 0))"], 0));
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
var fprop_26017 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_26017," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_26017,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_26017," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_26017,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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

var seq__25245_26018 = cljs.core.seq(libs_to_load);
var chunk__25246_26019 = null;
var count__25247_26020 = (0);
var i__25248_26021 = (0);
while(true){
if((i__25248_26021 < count__25247_26020)){
var lib_26022 = chunk__25246_26019.cljs$core$IIndexed$_nth$arity$2(null,i__25248_26021);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_26022)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_26022),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_26022),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_26022),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_26022),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_26022,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_26022),"');");
}

}
}
}


var G__26023 = seq__25245_26018;
var G__26024 = chunk__25246_26019;
var G__26025 = count__25247_26020;
var G__26026 = (i__25248_26021 + (1));
seq__25245_26018 = G__26023;
chunk__25246_26019 = G__26024;
count__25247_26020 = G__26025;
i__25248_26021 = G__26026;
continue;
} else {
var temp__5735__auto___26027 = cljs.core.seq(seq__25245_26018);
if(temp__5735__auto___26027){
var seq__25245_26028__$1 = temp__5735__auto___26027;
if(cljs.core.chunked_seq_QMARK_(seq__25245_26028__$1)){
var c__4556__auto___26029 = cljs.core.chunk_first(seq__25245_26028__$1);
var G__26030 = cljs.core.chunk_rest(seq__25245_26028__$1);
var G__26031 = c__4556__auto___26029;
var G__26032 = cljs.core.count(c__4556__auto___26029);
var G__26033 = (0);
seq__25245_26018 = G__26030;
chunk__25246_26019 = G__26031;
count__25247_26020 = G__26032;
i__25248_26021 = G__26033;
continue;
} else {
var lib_26034 = cljs.core.first(seq__25245_26028__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_26034)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_26034),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_26034),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_26034),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_26034),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_26034,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_26034),"');");
}

}
}
}


var G__26038 = cljs.core.next(seq__25245_26028__$1);
var G__26039 = null;
var G__26040 = (0);
var G__26041 = (0);
seq__25245_26018 = G__26038;
chunk__25246_26019 = G__26039;
count__25247_26020 = G__26040;
i__25248_26021 = G__26041;
continue;
}
} else {
}
}
break;
}

var seq__25249_26042 = cljs.core.seq(node_libs);
var chunk__25250_26043 = null;
var count__25251_26044 = (0);
var i__25252_26045 = (0);
while(true){
if((i__25252_26045 < count__25251_26044)){
var lib_26046 = chunk__25250_26043.cljs$core$IIndexed$_nth$arity$2(null,i__25252_26045);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_26046)," = require('",lib_26046,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__26047 = seq__25249_26042;
var G__26048 = chunk__25250_26043;
var G__26049 = count__25251_26044;
var G__26050 = (i__25252_26045 + (1));
seq__25249_26042 = G__26047;
chunk__25250_26043 = G__26048;
count__25251_26044 = G__26049;
i__25252_26045 = G__26050;
continue;
} else {
var temp__5735__auto___26052 = cljs.core.seq(seq__25249_26042);
if(temp__5735__auto___26052){
var seq__25249_26056__$1 = temp__5735__auto___26052;
if(cljs.core.chunked_seq_QMARK_(seq__25249_26056__$1)){
var c__4556__auto___26057 = cljs.core.chunk_first(seq__25249_26056__$1);
var G__26059 = cljs.core.chunk_rest(seq__25249_26056__$1);
var G__26060 = c__4556__auto___26057;
var G__26061 = cljs.core.count(c__4556__auto___26057);
var G__26062 = (0);
seq__25249_26042 = G__26059;
chunk__25250_26043 = G__26060;
count__25251_26044 = G__26061;
i__25252_26045 = G__26062;
continue;
} else {
var lib_26064 = cljs.core.first(seq__25249_26056__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_26064)," = require('",lib_26064,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__26065 = cljs.core.next(seq__25249_26056__$1);
var G__26066 = null;
var G__26067 = (0);
var G__26068 = (0);
seq__25249_26042 = G__26065;
chunk__25250_26043 = G__26066;
count__25251_26044 = G__26067;
i__25252_26045 = G__26068;
continue;
}
} else {
}
}
break;
}

var seq__25253_26069 = cljs.core.seq(global_exports_libs);
var chunk__25254_26070 = null;
var count__25255_26071 = (0);
var i__25256_26072 = (0);
while(true){
if((i__25256_26072 < count__25255_26071)){
var lib_26073 = chunk__25254_26070.cljs$core$IIndexed$_nth$arity$2(null,i__25256_26072);
var map__25261_26074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_26073));
var map__25261_26075__$1 = (((((!((map__25261_26074 == null))))?(((((map__25261_26074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25261_26074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25261_26074):map__25261_26074);
var global_exports_26076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25261_26075__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_26076,lib_26073);


var G__26077 = seq__25253_26069;
var G__26078 = chunk__25254_26070;
var G__26079 = count__25255_26071;
var G__26080 = (i__25256_26072 + (1));
seq__25253_26069 = G__26077;
chunk__25254_26070 = G__26078;
count__25255_26071 = G__26079;
i__25256_26072 = G__26080;
continue;
} else {
var temp__5735__auto___26081 = cljs.core.seq(seq__25253_26069);
if(temp__5735__auto___26081){
var seq__25253_26082__$1 = temp__5735__auto___26081;
if(cljs.core.chunked_seq_QMARK_(seq__25253_26082__$1)){
var c__4556__auto___26083 = cljs.core.chunk_first(seq__25253_26082__$1);
var G__26084 = cljs.core.chunk_rest(seq__25253_26082__$1);
var G__26085 = c__4556__auto___26083;
var G__26086 = cljs.core.count(c__4556__auto___26083);
var G__26087 = (0);
seq__25253_26069 = G__26084;
chunk__25254_26070 = G__26085;
count__25255_26071 = G__26086;
i__25256_26072 = G__26087;
continue;
} else {
var lib_26088 = cljs.core.first(seq__25253_26082__$1);
var map__25263_26089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_26088));
var map__25263_26090__$1 = (((((!((map__25263_26089 == null))))?(((((map__25263_26089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25263_26089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25263_26089):map__25263_26089);
var global_exports_26091 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25263_26090__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_26091,lib_26088);


var G__26094 = cljs.core.next(seq__25253_26082__$1);
var G__26095 = null;
var G__26096 = (0);
var G__26097 = (0);
seq__25253_26069 = G__26094;
chunk__25254_26070 = G__26095;
count__25255_26071 = G__26096;
i__25256_26072 = G__26097;
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

var seq__25274_26100 = cljs.core.seq(protocols);
var chunk__25275_26101 = null;
var count__25276_26102 = (0);
var i__25277_26103 = (0);
while(true){
if((i__25277_26103 < count__25276_26102)){
var protocol_26104 = chunk__25275_26101.cljs$core$IIndexed$_nth$arity$2(null,i__25277_26103);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_26104)),"}");


var G__26105 = seq__25274_26100;
var G__26106 = chunk__25275_26101;
var G__26107 = count__25276_26102;
var G__26108 = (i__25277_26103 + (1));
seq__25274_26100 = G__26105;
chunk__25275_26101 = G__26106;
count__25276_26102 = G__26107;
i__25277_26103 = G__26108;
continue;
} else {
var temp__5735__auto___26109 = cljs.core.seq(seq__25274_26100);
if(temp__5735__auto___26109){
var seq__25274_26110__$1 = temp__5735__auto___26109;
if(cljs.core.chunked_seq_QMARK_(seq__25274_26110__$1)){
var c__4556__auto___26111 = cljs.core.chunk_first(seq__25274_26110__$1);
var G__26112 = cljs.core.chunk_rest(seq__25274_26110__$1);
var G__26113 = c__4556__auto___26111;
var G__26114 = cljs.core.count(c__4556__auto___26111);
var G__26115 = (0);
seq__25274_26100 = G__26112;
chunk__25275_26101 = G__26113;
count__25276_26102 = G__26114;
i__25277_26103 = G__26115;
continue;
} else {
var protocol_26116 = cljs.core.first(seq__25274_26110__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_26116)),"}");


var G__26117 = cljs.core.next(seq__25274_26110__$1);
var G__26118 = null;
var G__26119 = (0);
var G__26120 = (0);
seq__25274_26100 = G__26117;
chunk__25275_26101 = G__26118;
count__25276_26102 = G__26119;
i__25277_26103 = G__26120;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__25278_26121 = cljs.core.seq(fields__$1);
var chunk__25279_26122 = null;
var count__25280_26123 = (0);
var i__25281_26124 = (0);
while(true){
if((i__25281_26124 < count__25280_26123)){
var fld_26125 = chunk__25279_26122.cljs$core$IIndexed$_nth$arity$2(null,i__25281_26124);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_26125," = ",fld_26125,";");


var G__26126 = seq__25278_26121;
var G__26127 = chunk__25279_26122;
var G__26128 = count__25280_26123;
var G__26129 = (i__25281_26124 + (1));
seq__25278_26121 = G__26126;
chunk__25279_26122 = G__26127;
count__25280_26123 = G__26128;
i__25281_26124 = G__26129;
continue;
} else {
var temp__5735__auto___26130 = cljs.core.seq(seq__25278_26121);
if(temp__5735__auto___26130){
var seq__25278_26131__$1 = temp__5735__auto___26130;
if(cljs.core.chunked_seq_QMARK_(seq__25278_26131__$1)){
var c__4556__auto___26132 = cljs.core.chunk_first(seq__25278_26131__$1);
var G__26133 = cljs.core.chunk_rest(seq__25278_26131__$1);
var G__26134 = c__4556__auto___26132;
var G__26135 = cljs.core.count(c__4556__auto___26132);
var G__26136 = (0);
seq__25278_26121 = G__26133;
chunk__25279_26122 = G__26134;
count__25280_26123 = G__26135;
i__25281_26124 = G__26136;
continue;
} else {
var fld_26137 = cljs.core.first(seq__25278_26131__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_26137," = ",fld_26137,";");


var G__26138 = cljs.core.next(seq__25278_26131__$1);
var G__26139 = null;
var G__26140 = (0);
var G__26141 = (0);
seq__25278_26121 = G__26138;
chunk__25279_26122 = G__26139;
count__25280_26123 = G__26140;
i__25281_26124 = G__26141;
continue;
}
} else {
}
}
break;
}

var seq__25282_26142 = cljs.core.seq(pmasks);
var chunk__25283_26143 = null;
var count__25284_26144 = (0);
var i__25285_26145 = (0);
while(true){
if((i__25285_26145 < count__25284_26144)){
var vec__25292_26146 = chunk__25283_26143.cljs$core$IIndexed$_nth$arity$2(null,i__25285_26145);
var pno_26147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25292_26146,(0),null);
var pmask_26148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25292_26146,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_26147,"$ = ",pmask_26148,";");


var G__26149 = seq__25282_26142;
var G__26150 = chunk__25283_26143;
var G__26151 = count__25284_26144;
var G__26152 = (i__25285_26145 + (1));
seq__25282_26142 = G__26149;
chunk__25283_26143 = G__26150;
count__25284_26144 = G__26151;
i__25285_26145 = G__26152;
continue;
} else {
var temp__5735__auto___26153 = cljs.core.seq(seq__25282_26142);
if(temp__5735__auto___26153){
var seq__25282_26154__$1 = temp__5735__auto___26153;
if(cljs.core.chunked_seq_QMARK_(seq__25282_26154__$1)){
var c__4556__auto___26155 = cljs.core.chunk_first(seq__25282_26154__$1);
var G__26156 = cljs.core.chunk_rest(seq__25282_26154__$1);
var G__26157 = c__4556__auto___26155;
var G__26158 = cljs.core.count(c__4556__auto___26155);
var G__26159 = (0);
seq__25282_26142 = G__26156;
chunk__25283_26143 = G__26157;
count__25284_26144 = G__26158;
i__25285_26145 = G__26159;
continue;
} else {
var vec__25295_26160 = cljs.core.first(seq__25282_26154__$1);
var pno_26161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25295_26160,(0),null);
var pmask_26162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25295_26160,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_26161,"$ = ",pmask_26162,";");


var G__26163 = cljs.core.next(seq__25282_26154__$1);
var G__26164 = null;
var G__26165 = (0);
var G__26166 = (0);
seq__25282_26142 = G__26163;
chunk__25283_26143 = G__26164;
count__25284_26144 = G__26165;
i__25285_26145 = G__26166;
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

var seq__25301_26167 = cljs.core.seq(protocols);
var chunk__25302_26168 = null;
var count__25303_26169 = (0);
var i__25304_26170 = (0);
while(true){
if((i__25304_26170 < count__25303_26169)){
var protocol_26171 = chunk__25302_26168.cljs$core$IIndexed$_nth$arity$2(null,i__25304_26170);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_26171)),"}");


var G__26172 = seq__25301_26167;
var G__26173 = chunk__25302_26168;
var G__26174 = count__25303_26169;
var G__26175 = (i__25304_26170 + (1));
seq__25301_26167 = G__26172;
chunk__25302_26168 = G__26173;
count__25303_26169 = G__26174;
i__25304_26170 = G__26175;
continue;
} else {
var temp__5735__auto___26176 = cljs.core.seq(seq__25301_26167);
if(temp__5735__auto___26176){
var seq__25301_26177__$1 = temp__5735__auto___26176;
if(cljs.core.chunked_seq_QMARK_(seq__25301_26177__$1)){
var c__4556__auto___26178 = cljs.core.chunk_first(seq__25301_26177__$1);
var G__26179 = cljs.core.chunk_rest(seq__25301_26177__$1);
var G__26180 = c__4556__auto___26178;
var G__26181 = cljs.core.count(c__4556__auto___26178);
var G__26182 = (0);
seq__25301_26167 = G__26179;
chunk__25302_26168 = G__26180;
count__25303_26169 = G__26181;
i__25304_26170 = G__26182;
continue;
} else {
var protocol_26183 = cljs.core.first(seq__25301_26177__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_26183)),"}");


var G__26184 = cljs.core.next(seq__25301_26177__$1);
var G__26185 = null;
var G__26186 = (0);
var G__26187 = (0);
seq__25301_26167 = G__26184;
chunk__25302_26168 = G__26185;
count__25303_26169 = G__26186;
i__25304_26170 = G__26187;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__25305_26188 = cljs.core.seq(fields__$1);
var chunk__25306_26189 = null;
var count__25307_26190 = (0);
var i__25308_26191 = (0);
while(true){
if((i__25308_26191 < count__25307_26190)){
var fld_26192 = chunk__25306_26189.cljs$core$IIndexed$_nth$arity$2(null,i__25308_26191);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_26192," = ",fld_26192,";");


var G__26193 = seq__25305_26188;
var G__26194 = chunk__25306_26189;
var G__26195 = count__25307_26190;
var G__26196 = (i__25308_26191 + (1));
seq__25305_26188 = G__26193;
chunk__25306_26189 = G__26194;
count__25307_26190 = G__26195;
i__25308_26191 = G__26196;
continue;
} else {
var temp__5735__auto___26197 = cljs.core.seq(seq__25305_26188);
if(temp__5735__auto___26197){
var seq__25305_26198__$1 = temp__5735__auto___26197;
if(cljs.core.chunked_seq_QMARK_(seq__25305_26198__$1)){
var c__4556__auto___26199 = cljs.core.chunk_first(seq__25305_26198__$1);
var G__26200 = cljs.core.chunk_rest(seq__25305_26198__$1);
var G__26201 = c__4556__auto___26199;
var G__26202 = cljs.core.count(c__4556__auto___26199);
var G__26203 = (0);
seq__25305_26188 = G__26200;
chunk__25306_26189 = G__26201;
count__25307_26190 = G__26202;
i__25308_26191 = G__26203;
continue;
} else {
var fld_26204 = cljs.core.first(seq__25305_26198__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_26204," = ",fld_26204,";");


var G__26205 = cljs.core.next(seq__25305_26198__$1);
var G__26206 = null;
var G__26207 = (0);
var G__26208 = (0);
seq__25305_26188 = G__26205;
chunk__25306_26189 = G__26206;
count__25307_26190 = G__26207;
i__25308_26191 = G__26208;
continue;
}
} else {
}
}
break;
}

var seq__25309_26209 = cljs.core.seq(pmasks);
var chunk__25310_26210 = null;
var count__25311_26211 = (0);
var i__25312_26212 = (0);
while(true){
if((i__25312_26212 < count__25311_26211)){
var vec__25319_26213 = chunk__25310_26210.cljs$core$IIndexed$_nth$arity$2(null,i__25312_26212);
var pno_26214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25319_26213,(0),null);
var pmask_26215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25319_26213,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_26214,"$ = ",pmask_26215,";");


var G__26216 = seq__25309_26209;
var G__26217 = chunk__25310_26210;
var G__26218 = count__25311_26211;
var G__26219 = (i__25312_26212 + (1));
seq__25309_26209 = G__26216;
chunk__25310_26210 = G__26217;
count__25311_26211 = G__26218;
i__25312_26212 = G__26219;
continue;
} else {
var temp__5735__auto___26221 = cljs.core.seq(seq__25309_26209);
if(temp__5735__auto___26221){
var seq__25309_26222__$1 = temp__5735__auto___26221;
if(cljs.core.chunked_seq_QMARK_(seq__25309_26222__$1)){
var c__4556__auto___26224 = cljs.core.chunk_first(seq__25309_26222__$1);
var G__26226 = cljs.core.chunk_rest(seq__25309_26222__$1);
var G__26227 = c__4556__auto___26224;
var G__26228 = cljs.core.count(c__4556__auto___26224);
var G__26229 = (0);
seq__25309_26209 = G__26226;
chunk__25310_26210 = G__26227;
count__25311_26211 = G__26228;
i__25312_26212 = G__26229;
continue;
} else {
var vec__25322_26230 = cljs.core.first(seq__25309_26222__$1);
var pno_26231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25322_26230,(0),null);
var pmask_26232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25322_26230,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_26231,"$ = ",pmask_26232,";");


var G__26233 = cljs.core.next(seq__25309_26222__$1);
var G__26234 = null;
var G__26235 = (0);
var G__26236 = (0);
seq__25309_26209 = G__26233;
chunk__25310_26210 = G__26234;
count__25311_26211 = G__26235;
i__25312_26212 = G__26236;
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
var ns_26244 = cljs.core.namespace(sym);
var name_26245 = cljs.core.name(sym);
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


var G__26246 = seq__25335;
var G__26247 = chunk__25336;
var G__26248 = count__25337;
var G__26249 = (i__25338 + (1));
seq__25335 = G__26246;
chunk__25336 = G__26247;
count__25337 = G__26248;
i__25338 = G__26249;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__25335);
if(temp__5735__auto__){
var seq__25335__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25335__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__25335__$1);
var G__26250 = cljs.core.chunk_rest(seq__25335__$1);
var G__26251 = c__4556__auto__;
var G__26252 = cljs.core.count(c__4556__auto__);
var G__26253 = (0);
seq__25335 = G__26250;
chunk__25336 = G__26251;
count__25337 = G__26252;
i__25338 = G__26253;
continue;
} else {
var vec__25348 = cljs.core.first(seq__25335__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25348,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25348,(1),null);
var ns_26254 = cljs.core.namespace(sym);
var name_26255 = cljs.core.name(sym);
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


var G__26256 = cljs.core.next(seq__25335__$1);
var G__26257 = null;
var G__26258 = (0);
var G__26259 = (0);
seq__25335 = G__26256;
chunk__25336 = G__26257;
count__25337 = G__26258;
i__25338 = G__26259;
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
var k_26261 = cljs.core.first(ks);
var vec__25353_26262 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_26261);
var top_26263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25353_26262,(0),null);
var prefix_SINGLEQUOTE__26264 = vec__25353_26262;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_26261)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__26264) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_26263)) || (cljs.core.contains_QMARK_(known_externs,top_26263)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__26264)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_26263);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__26264)),";");
}
} else {
}

var m_26265 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_26261);
if(cljs.core.empty_QMARK_(m_26265)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__26264,m_26265,top_level,known_externs);
}

var G__26266 = cljs.core.next(ks);
ks = G__26266;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);

