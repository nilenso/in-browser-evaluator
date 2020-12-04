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
var map__24589 = s;
var map__24589__$1 = (((((!((map__24589 == null))))?(((((map__24589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24589):map__24589);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24589__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24589__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__24592 = info;
var map__24593 = G__24592;
var map__24593__$1 = (((((!((map__24593 == null))))?(((((map__24593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24593):map__24593);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24593__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__24592__$1 = G__24592;
while(true){
var d__$2 = d__$1;
var map__24597 = G__24592__$1;
var map__24597__$1 = (((((!((map__24597 == null))))?(((((map__24597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24597):map__24597);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24597__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__25356 = (d__$2 + (1));
var G__25357 = shadow__$1;
d__$1 = G__25356;
G__24592__$1 = G__25357;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__24599){
var map__24600 = p__24599;
var map__24600__$1 = (((((!((map__24600 == null))))?(((((map__24600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24600):map__24600);
var name_var = map__24600__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24600__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24600__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__24602 = info;
var map__24602__$1 = (((((!((map__24602 == null))))?(((((map__24602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24602):map__24602);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24602__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24602__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__24612 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__24612) : cljs.compiler.munge.call(null,G__24612));
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
var G__24614 = arguments.length;
switch (G__24614) {
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
var ms = (function (){var fexpr__24621 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11501,11501,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__24621.cljs$core$IFn$_invoke$arity$1 ? fexpr__24621.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__24621.call(null,ss__$3));
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
var G__24624 = cp;
switch (G__24624) {
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
var seq__24625_25360 = cljs.core.seq(s);
var chunk__24626_25361 = null;
var count__24627_25362 = (0);
var i__24628_25363 = (0);
while(true){
if((i__24628_25363 < count__24627_25362)){
var c_25364 = chunk__24626_25361.cljs$core$IIndexed$_nth$arity$2(null,i__24628_25363);
sb.append(cljs.compiler.escape_char(c_25364));


var G__25365 = seq__24625_25360;
var G__25366 = chunk__24626_25361;
var G__25367 = count__24627_25362;
var G__25368 = (i__24628_25363 + (1));
seq__24625_25360 = G__25365;
chunk__24626_25361 = G__25366;
count__24627_25362 = G__25367;
i__24628_25363 = G__25368;
continue;
} else {
var temp__5735__auto___25369 = cljs.core.seq(seq__24625_25360);
if(temp__5735__auto___25369){
var seq__24625_25370__$1 = temp__5735__auto___25369;
if(cljs.core.chunked_seq_QMARK_(seq__24625_25370__$1)){
var c__4556__auto___25371 = cljs.core.chunk_first(seq__24625_25370__$1);
var G__25372 = cljs.core.chunk_rest(seq__24625_25370__$1);
var G__25373 = c__4556__auto___25371;
var G__25374 = cljs.core.count(c__4556__auto___25371);
var G__25375 = (0);
seq__24625_25360 = G__25372;
chunk__24626_25361 = G__25373;
count__24627_25362 = G__25374;
i__24628_25363 = G__25375;
continue;
} else {
var c_25376 = cljs.core.first(seq__24625_25370__$1);
sb.append(cljs.compiler.escape_char(c_25376));


var G__25377 = cljs.core.next(seq__24625_25370__$1);
var G__25378 = null;
var G__25379 = (0);
var G__25380 = (0);
seq__24625_25360 = G__25377;
chunk__24626_25361 = G__25378;
count__24627_25362 = G__25379;
i__24628_25363 = G__25380;
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__24629 = cljs.core.get_global_hierarchy;
return (fexpr__24629.cljs$core$IFn$_invoke$arity$0 ? fexpr__24629.cljs$core$IFn$_invoke$arity$0() : fexpr__24629.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__24630_25381 = ast;
var map__24630_25382__$1 = (((((!((map__24630_25381 == null))))?(((((map__24630_25381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24630_25381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24630_25381):map__24630_25381);
var env_25383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24630_25382__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_25383))){
var map__24632_25384 = env_25383;
var map__24632_25385__$1 = (((((!((map__24632_25384 == null))))?(((((map__24632_25384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24632_25384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24632_25384):map__24632_25384);
var line_25386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24632_25385__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_25387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24632_25385__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__24634 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__24636 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__24635 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__24635.cljs$core$IFn$_invoke$arity$1 ? fexpr__24635.cljs$core$IFn$_invoke$arity$1(G__24636) : fexpr__24635.call(null,G__24636));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24634,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__24634;
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
var G__24645 = arguments.length;
switch (G__24645) {
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
var s_25392 = (function (){var G__24646 = a;
if((!(typeof a === 'string'))){
return G__24646.toString();
} else {
return G__24646;
}
})();
var temp__5739__auto___25393 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___25393 == null)){
} else {
var sm_data_25394 = temp__5739__auto___25393;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_25394,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__24637_SHARP_){
return (p1__24637_SHARP_ + s_25392.length);
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

var seq__24647 = cljs.core.seq(xs);
var chunk__24648 = null;
var count__24649 = (0);
var i__24650 = (0);
while(true){
if((i__24650 < count__24649)){
var x = chunk__24648.cljs$core$IIndexed$_nth$arity$2(null,i__24650);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__25395 = seq__24647;
var G__25396 = chunk__24648;
var G__25397 = count__24649;
var G__25398 = (i__24650 + (1));
seq__24647 = G__25395;
chunk__24648 = G__25396;
count__24649 = G__25397;
i__24650 = G__25398;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__24647);
if(temp__5735__auto__){
var seq__24647__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24647__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24647__$1);
var G__25399 = cljs.core.chunk_rest(seq__24647__$1);
var G__25400 = c__4556__auto__;
var G__25401 = cljs.core.count(c__4556__auto__);
var G__25402 = (0);
seq__24647 = G__25399;
chunk__24648 = G__25400;
count__24649 = G__25401;
i__24650 = G__25402;
continue;
} else {
var x = cljs.core.first(seq__24647__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__25403 = cljs.core.next(seq__24647__$1);
var G__25404 = null;
var G__25405 = (0);
var G__25406 = (0);
seq__24647 = G__25403;
chunk__24648 = G__25404;
count__24649 = G__25405;
i__24650 = G__25406;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq24639){
var G__24640 = cljs.core.first(seq24639);
var seq24639__$1 = cljs.core.next(seq24639);
var G__24641 = cljs.core.first(seq24639__$1);
var seq24639__$2 = cljs.core.next(seq24639__$1);
var G__24642 = cljs.core.first(seq24639__$2);
var seq24639__$3 = cljs.core.next(seq24639__$2);
var G__24643 = cljs.core.first(seq24639__$3);
var seq24639__$4 = cljs.core.next(seq24639__$3);
var G__24644 = cljs.core.first(seq24639__$4);
var seq24639__$5 = cljs.core.next(seq24639__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24640,G__24641,G__24642,G__24643,G__24644,seq24639__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__24651){
var map__24652 = p__24651;
var map__24652__$1 = (((((!((map__24652 == null))))?(((((map__24652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24652):map__24652);
var m = map__24652__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24652__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__24661 = arguments.length;
switch (G__24661) {
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

var seq__24662_25411 = cljs.core.seq(xs);
var chunk__24663_25412 = null;
var count__24664_25413 = (0);
var i__24665_25414 = (0);
while(true){
if((i__24665_25414 < count__24664_25413)){
var x_25415 = chunk__24663_25412.cljs$core$IIndexed$_nth$arity$2(null,i__24665_25414);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_25415);


var G__25416 = seq__24662_25411;
var G__25417 = chunk__24663_25412;
var G__25418 = count__24664_25413;
var G__25419 = (i__24665_25414 + (1));
seq__24662_25411 = G__25416;
chunk__24663_25412 = G__25417;
count__24664_25413 = G__25418;
i__24665_25414 = G__25419;
continue;
} else {
var temp__5735__auto___25420 = cljs.core.seq(seq__24662_25411);
if(temp__5735__auto___25420){
var seq__24662_25421__$1 = temp__5735__auto___25420;
if(cljs.core.chunked_seq_QMARK_(seq__24662_25421__$1)){
var c__4556__auto___25422 = cljs.core.chunk_first(seq__24662_25421__$1);
var G__25423 = cljs.core.chunk_rest(seq__24662_25421__$1);
var G__25424 = c__4556__auto___25422;
var G__25425 = cljs.core.count(c__4556__auto___25422);
var G__25426 = (0);
seq__24662_25411 = G__25423;
chunk__24663_25412 = G__25424;
count__24664_25413 = G__25425;
i__24665_25414 = G__25426;
continue;
} else {
var x_25427 = cljs.core.first(seq__24662_25421__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_25427);


var G__25428 = cljs.core.next(seq__24662_25421__$1);
var G__25429 = null;
var G__25430 = (0);
var G__25431 = (0);
seq__24662_25411 = G__25428;
chunk__24663_25412 = G__25429;
count__24664_25413 = G__25430;
i__24665_25414 = G__25431;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq24655){
var G__24656 = cljs.core.first(seq24655);
var seq24655__$1 = cljs.core.next(seq24655);
var G__24657 = cljs.core.first(seq24655__$1);
var seq24655__$2 = cljs.core.next(seq24655__$1);
var G__24658 = cljs.core.first(seq24655__$2);
var seq24655__$3 = cljs.core.next(seq24655__$2);
var G__24659 = cljs.core.first(seq24655__$3);
var seq24655__$4 = cljs.core.next(seq24655__$3);
var G__24660 = cljs.core.first(seq24655__$4);
var seq24655__$5 = cljs.core.next(seq24655__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24656,G__24657,G__24658,G__24659,G__24660,seq24655__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24666_25432 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24667_25433 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24668_25434 = true;
var _STAR_print_fn_STAR__temp_val__24669_25435 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24668_25434);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24669_25435);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24667_25433);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24666_25432);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__24670 = cljs.core.get_global_hierarchy;
return (fexpr__24670.cljs$core$IFn$_invoke$arity$0 ? fexpr__24670.cljs$core$IFn$_invoke$arity$0() : fexpr__24670.call(null));
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
var vec__24671 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24671,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24671,(1),null);
var G__24674 = ns;
var G__24675 = name;
var G__24676 = (function (){
var G__24677 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__24677) : cljs.compiler.emit_constant.call(null,G__24677));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__24674,G__24675,G__24676) : cljs.compiler.emit_record_value.call(null,G__24674,G__24675,G__24676));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__24678 = cljs.core.keys(x);
var G__24679 = cljs.core.vals(x);
var G__24680 = cljs.compiler.emit_constants_comma_sep;
var G__24681 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__24678,G__24679,G__24680,G__24681) : cljs.compiler.emit_map.call(null,G__24678,G__24679,G__24680,G__24681));
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
var G__24685 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__24686 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__24685,G__24686) : cljs.compiler.emit_with_meta.call(null,G__24685,G__24686));
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
var vec__24687 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24687,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24687,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24687,(2),null);
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
var G__24690 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__24690) : x.call(null,G__24690));
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
var G__24691 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__24691) : x.call(null,G__24691));
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
var G__24693 = items;
var G__24694 = (function (p1__24692_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__24692_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__24693,G__24694) : cljs.compiler.emit_js_object.call(null,G__24693,G__24694));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__24696){
var map__24697 = p__24696;
var map__24697__$1 = (((((!((map__24697 == null))))?(((((map__24697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24697):map__24697);
var ast = map__24697__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24697__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24697__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24697__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__24699 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__24699__$1 = (((((!((map__24699 == null))))?(((((map__24699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24699):map__24699);
var cenv = map__24699__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24699__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__24701 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__24704 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__24704) : cljs.compiler.es5_GT__EQ_.call(null,G__24704));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__24701,cljs.analyzer.es5_allowed);
} else {
return G__24701;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__24705 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__24705,reserved);
} else {
return G__24705;
}
})();
var env__24583__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__24706_25459 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__24706_25460__$1 = (((G__24706_25459 instanceof cljs.core.Keyword))?G__24706_25459.fqn:null);
switch (G__24706_25460__$1) {
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__24714){
var map__24715 = p__24714;
var map__24715__$1 = (((((!((map__24715 == null))))?(((((map__24715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24715):map__24715);
var arg = map__24715__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24715__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24715__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24715__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24715__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));


var map__24717 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__24717__$1 = (((((!((map__24717 == null))))?(((((map__24717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24717):map__24717);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24717__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__24583__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__24719){
var map__24720 = p__24719;
var map__24720__$1 = (((((!((map__24720 == null))))?(((((map__24720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24720):map__24720);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24720__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24720__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24720__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__24583__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__24722_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__24722_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__24723 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__24723) : comma_sep.call(null,G__24723));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__24724 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__24724) : comma_sep.call(null,G__24724));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__24725){
var map__24726 = p__24725;
var map__24726__$1 = (((((!((map__24726 == null))))?(((((map__24726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24726):map__24726);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24726__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24726__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24726__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__24583__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__24733){
var map__24734 = p__24733;
var map__24734__$1 = (((((!((map__24734 == null))))?(((((map__24734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24734):map__24734);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24734__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24734__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__24583__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__24736_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__24736_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__24737 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__24737) : comma_sep.call(null,G__24737));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__24738){
var map__24739 = p__24738;
var map__24739__$1 = (((((!((map__24739 == null))))?(((((map__24739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24739):map__24739);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24739__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24739__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__24583__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5735__auto___25474 = cljs.core.seq(items);
if(temp__5735__auto___25474){
var items_25475__$1 = temp__5735__auto___25474;
var vec__24756_25476 = items_25475__$1;
var seq__24757_25477 = cljs.core.seq(vec__24756_25476);
var first__24758_25478 = cljs.core.first(seq__24757_25477);
var seq__24757_25479__$1 = cljs.core.next(seq__24757_25477);
var vec__24759_25480 = first__24758_25478;
var k_25481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24759_25480,(0),null);
var v_25482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24759_25480,(1),null);
var r_25483 = seq__24757_25479__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_25481),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_25482) : emit_js_object_val.call(null,v_25482)));

var seq__24762_25499 = cljs.core.seq(r_25483);
var chunk__24763_25500 = null;
var count__24764_25501 = (0);
var i__24765_25502 = (0);
while(true){
if((i__24765_25502 < count__24764_25501)){
var vec__24803_25505 = chunk__24763_25500.cljs$core$IIndexed$_nth$arity$2(null,i__24765_25502);
var k_25506__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24803_25505,(0),null);
var v_25507__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24803_25505,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_25506__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_25507__$1) : emit_js_object_val.call(null,v_25507__$1)));


var G__25512 = seq__24762_25499;
var G__25513 = chunk__24763_25500;
var G__25514 = count__24764_25501;
var G__25515 = (i__24765_25502 + (1));
seq__24762_25499 = G__25512;
chunk__24763_25500 = G__25513;
count__24764_25501 = G__25514;
i__24765_25502 = G__25515;
continue;
} else {
var temp__5735__auto___25516__$1 = cljs.core.seq(seq__24762_25499);
if(temp__5735__auto___25516__$1){
var seq__24762_25517__$1 = temp__5735__auto___25516__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24762_25517__$1)){
var c__4556__auto___25518 = cljs.core.chunk_first(seq__24762_25517__$1);
var G__25519 = cljs.core.chunk_rest(seq__24762_25517__$1);
var G__25520 = c__4556__auto___25518;
var G__25521 = cljs.core.count(c__4556__auto___25518);
var G__25522 = (0);
seq__24762_25499 = G__25519;
chunk__24763_25500 = G__25520;
count__24764_25501 = G__25521;
i__24765_25502 = G__25522;
continue;
} else {
var vec__24813_25523 = cljs.core.first(seq__24762_25517__$1);
var k_25524__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24813_25523,(0),null);
var v_25525__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24813_25523,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_25524__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_25525__$1) : emit_js_object_val.call(null,v_25525__$1)));


var G__25526 = cljs.core.next(seq__24762_25517__$1);
var G__25527 = null;
var G__25528 = (0);
var G__25529 = (0);
seq__24762_25499 = G__25526;
chunk__24763_25500 = G__25527;
count__24764_25501 = G__25528;
i__24765_25502 = G__25529;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__24816){
var map__24817 = p__24816;
var map__24817__$1 = (((((!((map__24817 == null))))?(((((map__24817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24817):map__24817);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24817__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24817__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24817__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__24583__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__24819){
var map__24820 = p__24819;
var map__24820__$1 = (((((!((map__24820 == null))))?(((((map__24820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24820):map__24820);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24820__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24820__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__24583__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__24822){
var map__24823 = p__24822;
var map__24823__$1 = (((((!((map__24823 == null))))?(((((map__24823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24823):map__24823);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24823__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__24825){
var map__24826 = p__24825;
var map__24826__$1 = (((((!((map__24826 == null))))?(((((map__24826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24826):map__24826);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24826__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24826__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__24583__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__24828 = cljs.analyzer.unwrap_quote(expr);
var map__24828__$1 = (((((!((map__24828 == null))))?(((((map__24828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24828):map__24828);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24828__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24828__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24828__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__24830 = cljs.analyzer.unwrap_quote(expr);
var map__24830__$1 = (((((!((map__24830 == null))))?(((((map__24830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24830):map__24830);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24830__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24830__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24830__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var or__4126__auto__ = (function (){var fexpr__24845 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__24845.cljs$core$IFn$_invoke$arity$1 ? fexpr__24845.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__24845.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__24846){
var map__24847 = p__24846;
var map__24847__$1 = (((((!((map__24847 == null))))?(((((map__24847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24847):map__24847);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24847__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24847__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24847__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24847__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24847__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__24849){
var map__24850 = p__24849;
var map__24850__$1 = (((((!((map__24850 == null))))?(((((map__24850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24850):map__24850);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24850__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24850__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24850__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24850__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__24852_25544 = cljs.core.seq(nodes);
var chunk__24853_25545 = null;
var count__24854_25546 = (0);
var i__24855_25547 = (0);
while(true){
if((i__24855_25547 < count__24854_25546)){
var map__24889_25548 = chunk__24853_25545.cljs$core$IIndexed$_nth$arity$2(null,i__24855_25547);
var map__24889_25549__$1 = (((((!((map__24889_25548 == null))))?(((((map__24889_25548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24889_25548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24889_25548):map__24889_25548);
var ts_25550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24889_25549__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__24890_25551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24889_25549__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__24890_25552__$1 = (((((!((map__24890_25551 == null))))?(((((map__24890_25551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24890_25551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24890_25551):map__24890_25551);
var then_25553 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24890_25552__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__24893_25554 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_25550));
var chunk__24894_25555 = null;
var count__24895_25556 = (0);
var i__24896_25557 = (0);
while(true){
if((i__24896_25557 < count__24895_25556)){
var test_25558 = chunk__24894_25555.cljs$core$IIndexed$_nth$arity$2(null,i__24896_25557);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25558,":");


var G__25559 = seq__24893_25554;
var G__25560 = chunk__24894_25555;
var G__25561 = count__24895_25556;
var G__25562 = (i__24896_25557 + (1));
seq__24893_25554 = G__25559;
chunk__24894_25555 = G__25560;
count__24895_25556 = G__25561;
i__24896_25557 = G__25562;
continue;
} else {
var temp__5735__auto___25563 = cljs.core.seq(seq__24893_25554);
if(temp__5735__auto___25563){
var seq__24893_25564__$1 = temp__5735__auto___25563;
if(cljs.core.chunked_seq_QMARK_(seq__24893_25564__$1)){
var c__4556__auto___25565 = cljs.core.chunk_first(seq__24893_25564__$1);
var G__25566 = cljs.core.chunk_rest(seq__24893_25564__$1);
var G__25567 = c__4556__auto___25565;
var G__25568 = cljs.core.count(c__4556__auto___25565);
var G__25569 = (0);
seq__24893_25554 = G__25566;
chunk__24894_25555 = G__25567;
count__24895_25556 = G__25568;
i__24896_25557 = G__25569;
continue;
} else {
var test_25570 = cljs.core.first(seq__24893_25564__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25570,":");


var G__25571 = cljs.core.next(seq__24893_25564__$1);
var G__25572 = null;
var G__25573 = (0);
var G__25574 = (0);
seq__24893_25554 = G__25571;
chunk__24894_25555 = G__25572;
count__24895_25556 = G__25573;
i__24896_25557 = G__25574;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_25553);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_25553);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__25575 = seq__24852_25544;
var G__25576 = chunk__24853_25545;
var G__25577 = count__24854_25546;
var G__25578 = (i__24855_25547 + (1));
seq__24852_25544 = G__25575;
chunk__24853_25545 = G__25576;
count__24854_25546 = G__25577;
i__24855_25547 = G__25578;
continue;
} else {
var temp__5735__auto___25579 = cljs.core.seq(seq__24852_25544);
if(temp__5735__auto___25579){
var seq__24852_25580__$1 = temp__5735__auto___25579;
if(cljs.core.chunked_seq_QMARK_(seq__24852_25580__$1)){
var c__4556__auto___25581 = cljs.core.chunk_first(seq__24852_25580__$1);
var G__25582 = cljs.core.chunk_rest(seq__24852_25580__$1);
var G__25583 = c__4556__auto___25581;
var G__25584 = cljs.core.count(c__4556__auto___25581);
var G__25585 = (0);
seq__24852_25544 = G__25582;
chunk__24853_25545 = G__25583;
count__24854_25546 = G__25584;
i__24855_25547 = G__25585;
continue;
} else {
var map__24897_25586 = cljs.core.first(seq__24852_25580__$1);
var map__24897_25587__$1 = (((((!((map__24897_25586 == null))))?(((((map__24897_25586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24897_25586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24897_25586):map__24897_25586);
var ts_25588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24897_25587__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__24898_25589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24897_25587__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__24898_25590__$1 = (((((!((map__24898_25589 == null))))?(((((map__24898_25589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24898_25589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24898_25589):map__24898_25589);
var then_25591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24898_25590__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__24903_25592 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_25588));
var chunk__24904_25593 = null;
var count__24905_25594 = (0);
var i__24906_25595 = (0);
while(true){
if((i__24906_25595 < count__24905_25594)){
var test_25596 = chunk__24904_25593.cljs$core$IIndexed$_nth$arity$2(null,i__24906_25595);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25596,":");


var G__25597 = seq__24903_25592;
var G__25598 = chunk__24904_25593;
var G__25599 = count__24905_25594;
var G__25600 = (i__24906_25595 + (1));
seq__24903_25592 = G__25597;
chunk__24904_25593 = G__25598;
count__24905_25594 = G__25599;
i__24906_25595 = G__25600;
continue;
} else {
var temp__5735__auto___25601__$1 = cljs.core.seq(seq__24903_25592);
if(temp__5735__auto___25601__$1){
var seq__24903_25603__$1 = temp__5735__auto___25601__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24903_25603__$1)){
var c__4556__auto___25604 = cljs.core.chunk_first(seq__24903_25603__$1);
var G__25605 = cljs.core.chunk_rest(seq__24903_25603__$1);
var G__25606 = c__4556__auto___25604;
var G__25607 = cljs.core.count(c__4556__auto___25604);
var G__25608 = (0);
seq__24903_25592 = G__25605;
chunk__24904_25593 = G__25606;
count__24905_25594 = G__25607;
i__24906_25595 = G__25608;
continue;
} else {
var test_25609 = cljs.core.first(seq__24903_25603__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25609,":");


var G__25610 = cljs.core.next(seq__24903_25603__$1);
var G__25611 = null;
var G__25612 = (0);
var G__25613 = (0);
seq__24903_25592 = G__25610;
chunk__24904_25593 = G__25611;
count__24905_25594 = G__25612;
i__24906_25595 = G__25613;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_25591);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_25591);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__25615 = cljs.core.next(seq__24852_25580__$1);
var G__25616 = null;
var G__25617 = (0);
var G__25618 = (0);
seq__24852_25544 = G__25615;
chunk__24853_25545 = G__25616;
count__24854_25546 = G__25617;
i__24855_25547 = G__25618;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__24907){
var map__24908 = p__24907;
var map__24908__$1 = (((((!((map__24908 == null))))?(((((map__24908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24908):map__24908);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24908__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24908__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__24913 = env;
var G__24914 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__24913,G__24914) : cljs.compiler.resolve_type.call(null,G__24913,G__24914));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__24915 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24915,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24915,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__24910_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__24910_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__24910_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__24918 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__24918,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__24918;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__24921 = env;
var G__24922 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__24921,G__24922) : cljs.compiler.resolve_type.call(null,G__24921,G__24922));
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
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24934_SHARP_){
return cljs.compiler.resolve_type(env,p1__24934_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__24949 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__24950 = cljs.core.seq(vec__24949);
var first__24951 = cljs.core.first(seq__24950);
var seq__24950__$1 = cljs.core.next(seq__24950);
var p = first__24951;
var first__24951__$1 = cljs.core.first(seq__24950__$1);
var seq__24950__$2 = cljs.core.next(seq__24950__$1);
var ts = first__24951__$1;
var first__24951__$2 = cljs.core.first(seq__24950__$2);
var seq__24950__$3 = cljs.core.next(seq__24950__$2);
var n = first__24951__$2;
var xs = seq__24950__$3;
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
var vec__24952 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__24953 = cljs.core.seq(vec__24952);
var first__24954 = cljs.core.first(seq__24953);
var seq__24953__$1 = cljs.core.next(seq__24953);
var p = first__24954;
var first__24954__$1 = cljs.core.first(seq__24953__$1);
var seq__24953__$2 = cljs.core.next(seq__24953__$1);
var ts = first__24954__$1;
var xs = seq__24953__$2;
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
var G__24961 = arguments.length;
switch (G__24961) {
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
var vec__24969 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24959_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__24959_SHARP_);
} else {
return p1__24959_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__24970 = cljs.core.seq(vec__24969);
var first__24971 = cljs.core.first(seq__24970);
var seq__24970__$1 = cljs.core.next(seq__24970);
var x = first__24971;
var ys = seq__24970__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__24972 = cljs.core.seq(ys);
var chunk__24973 = null;
var count__24974 = (0);
var i__24975 = (0);
while(true){
if((i__24975 < count__24974)){
var next_line = chunk__24973.cljs$core$IIndexed$_nth$arity$2(null,i__24975);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__25625 = seq__24972;
var G__25626 = chunk__24973;
var G__25627 = count__24974;
var G__25628 = (i__24975 + (1));
seq__24972 = G__25625;
chunk__24973 = G__25626;
count__24974 = G__25627;
i__24975 = G__25628;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__24972);
if(temp__5735__auto__){
var seq__24972__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24972__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24972__$1);
var G__25629 = cljs.core.chunk_rest(seq__24972__$1);
var G__25630 = c__4556__auto__;
var G__25631 = cljs.core.count(c__4556__auto__);
var G__25632 = (0);
seq__24972 = G__25629;
chunk__24973 = G__25630;
count__24974 = G__25631;
i__24975 = G__25632;
continue;
} else {
var next_line = cljs.core.first(seq__24972__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__25633 = cljs.core.next(seq__24972__$1);
var G__25634 = null;
var G__25635 = (0);
var G__25636 = (0);
seq__24972 = G__25633;
chunk__24973 = G__25634;
count__24974 = G__25635;
i__24975 = G__25636;
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

var seq__24976_25637 = cljs.core.seq(docs__$2);
var chunk__24977_25638 = null;
var count__24978_25639 = (0);
var i__24979_25640 = (0);
while(true){
if((i__24979_25640 < count__24978_25639)){
var e_25641 = chunk__24977_25638.cljs$core$IIndexed$_nth$arity$2(null,i__24979_25640);
if(cljs.core.truth_(e_25641)){
print_comment_lines(e_25641);
} else {
}


var G__25642 = seq__24976_25637;
var G__25643 = chunk__24977_25638;
var G__25644 = count__24978_25639;
var G__25645 = (i__24979_25640 + (1));
seq__24976_25637 = G__25642;
chunk__24977_25638 = G__25643;
count__24978_25639 = G__25644;
i__24979_25640 = G__25645;
continue;
} else {
var temp__5735__auto___25646 = cljs.core.seq(seq__24976_25637);
if(temp__5735__auto___25646){
var seq__24976_25647__$1 = temp__5735__auto___25646;
if(cljs.core.chunked_seq_QMARK_(seq__24976_25647__$1)){
var c__4556__auto___25649 = cljs.core.chunk_first(seq__24976_25647__$1);
var G__25650 = cljs.core.chunk_rest(seq__24976_25647__$1);
var G__25651 = c__4556__auto___25649;
var G__25652 = cljs.core.count(c__4556__auto___25649);
var G__25653 = (0);
seq__24976_25637 = G__25650;
chunk__24977_25638 = G__25651;
count__24978_25639 = G__25652;
i__24979_25640 = G__25653;
continue;
} else {
var e_25654 = cljs.core.first(seq__24976_25647__$1);
if(cljs.core.truth_(e_25654)){
print_comment_lines(e_25654);
} else {
}


var G__25658 = cljs.core.next(seq__24976_25647__$1);
var G__25659 = null;
var G__25660 = (0);
var G__25661 = (0);
seq__24976_25637 = G__25658;
chunk__24977_25638 = G__25659;
count__24978_25639 = G__25660;
i__24979_25640 = G__25661;
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
var and__4115__auto__ = cljs.core.some((function (p1__24981_SHARP_){
return goog.string.startsWith(p1__24981_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__24982){
var map__24983 = p__24982;
var map__24983__$1 = (((((!((map__24983 == null))))?(((((map__24983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24983):map__24983);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24983__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24983__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24983__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24983__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24983__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24983__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24983__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24983__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24983__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24983__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__24997){
var map__24998 = p__24997;
var map__24998__$1 = (((((!((map__24998 == null))))?(((((map__24998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24998):map__24998);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24998__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24998__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24998__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__25002_25663 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__25003_25664 = null;
var count__25004_25665 = (0);
var i__25005_25666 = (0);
while(true){
if((i__25005_25666 < count__25004_25665)){
var vec__25012_25667 = chunk__25003_25664.cljs$core$IIndexed$_nth$arity$2(null,i__25005_25666);
var i_25668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25012_25667,(0),null);
var param_25669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25012_25667,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_25669);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__25670 = seq__25002_25663;
var G__25671 = chunk__25003_25664;
var G__25672 = count__25004_25665;
var G__25673 = (i__25005_25666 + (1));
seq__25002_25663 = G__25670;
chunk__25003_25664 = G__25671;
count__25004_25665 = G__25672;
i__25005_25666 = G__25673;
continue;
} else {
var temp__5735__auto___25674 = cljs.core.seq(seq__25002_25663);
if(temp__5735__auto___25674){
var seq__25002_25675__$1 = temp__5735__auto___25674;
if(cljs.core.chunked_seq_QMARK_(seq__25002_25675__$1)){
var c__4556__auto___25676 = cljs.core.chunk_first(seq__25002_25675__$1);
var G__25677 = cljs.core.chunk_rest(seq__25002_25675__$1);
var G__25678 = c__4556__auto___25676;
var G__25679 = cljs.core.count(c__4556__auto___25676);
var G__25680 = (0);
seq__25002_25663 = G__25677;
chunk__25003_25664 = G__25678;
count__25004_25665 = G__25679;
i__25005_25666 = G__25680;
continue;
} else {
var vec__25015_25681 = cljs.core.first(seq__25002_25675__$1);
var i_25682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25015_25681,(0),null);
var param_25683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25015_25681,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_25683);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__25684 = cljs.core.next(seq__25002_25675__$1);
var G__25685 = null;
var G__25686 = (0);
var G__25687 = (0);
seq__25002_25663 = G__25684;
chunk__25003_25664 = G__25685;
count__25004_25665 = G__25686;
i__25005_25666 = G__25687;
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

var seq__25020_25688 = cljs.core.seq(params);
var chunk__25021_25689 = null;
var count__25022_25690 = (0);
var i__25023_25691 = (0);
while(true){
if((i__25023_25691 < count__25022_25690)){
var param_25692 = chunk__25021_25689.cljs$core$IIndexed$_nth$arity$2(null,i__25023_25691);
cljs.compiler.emit(param_25692);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25692,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25693 = seq__25020_25688;
var G__25694 = chunk__25021_25689;
var G__25695 = count__25022_25690;
var G__25696 = (i__25023_25691 + (1));
seq__25020_25688 = G__25693;
chunk__25021_25689 = G__25694;
count__25022_25690 = G__25695;
i__25023_25691 = G__25696;
continue;
} else {
var temp__5735__auto___25697 = cljs.core.seq(seq__25020_25688);
if(temp__5735__auto___25697){
var seq__25020_25698__$1 = temp__5735__auto___25697;
if(cljs.core.chunked_seq_QMARK_(seq__25020_25698__$1)){
var c__4556__auto___25699 = cljs.core.chunk_first(seq__25020_25698__$1);
var G__25700 = cljs.core.chunk_rest(seq__25020_25698__$1);
var G__25701 = c__4556__auto___25699;
var G__25702 = cljs.core.count(c__4556__auto___25699);
var G__25703 = (0);
seq__25020_25688 = G__25700;
chunk__25021_25689 = G__25701;
count__25022_25690 = G__25702;
i__25023_25691 = G__25703;
continue;
} else {
var param_25704 = cljs.core.first(seq__25020_25698__$1);
cljs.compiler.emit(param_25704);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25704,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25706 = cljs.core.next(seq__25020_25698__$1);
var G__25707 = null;
var G__25708 = (0);
var G__25709 = (0);
seq__25020_25688 = G__25706;
chunk__25021_25689 = G__25707;
count__25022_25690 = G__25708;
i__25023_25691 = G__25709;
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

var seq__25024_25711 = cljs.core.seq(params);
var chunk__25025_25712 = null;
var count__25026_25713 = (0);
var i__25027_25714 = (0);
while(true){
if((i__25027_25714 < count__25026_25713)){
var param_25715 = chunk__25025_25712.cljs$core$IIndexed$_nth$arity$2(null,i__25027_25714);
cljs.compiler.emit(param_25715);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25715,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25716 = seq__25024_25711;
var G__25717 = chunk__25025_25712;
var G__25718 = count__25026_25713;
var G__25719 = (i__25027_25714 + (1));
seq__25024_25711 = G__25716;
chunk__25025_25712 = G__25717;
count__25026_25713 = G__25718;
i__25027_25714 = G__25719;
continue;
} else {
var temp__5735__auto___25720 = cljs.core.seq(seq__25024_25711);
if(temp__5735__auto___25720){
var seq__25024_25721__$1 = temp__5735__auto___25720;
if(cljs.core.chunked_seq_QMARK_(seq__25024_25721__$1)){
var c__4556__auto___25722 = cljs.core.chunk_first(seq__25024_25721__$1);
var G__25723 = cljs.core.chunk_rest(seq__25024_25721__$1);
var G__25724 = c__4556__auto___25722;
var G__25725 = cljs.core.count(c__4556__auto___25722);
var G__25726 = (0);
seq__25024_25711 = G__25723;
chunk__25025_25712 = G__25724;
count__25026_25713 = G__25725;
i__25027_25714 = G__25726;
continue;
} else {
var param_25727 = cljs.core.first(seq__25024_25721__$1);
cljs.compiler.emit(param_25727);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25727,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25728 = cljs.core.next(seq__25024_25721__$1);
var G__25729 = null;
var G__25730 = (0);
var G__25731 = (0);
seq__25024_25711 = G__25728;
chunk__25025_25712 = G__25729;
count__25026_25713 = G__25730;
i__25027_25714 = G__25731;
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
var seq__25051 = cljs.core.seq(params);
var chunk__25052 = null;
var count__25053 = (0);
var i__25054 = (0);
while(true){
if((i__25054 < count__25053)){
var param = chunk__25052.cljs$core$IIndexed$_nth$arity$2(null,i__25054);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25734 = seq__25051;
var G__25735 = chunk__25052;
var G__25736 = count__25053;
var G__25737 = (i__25054 + (1));
seq__25051 = G__25734;
chunk__25052 = G__25735;
count__25053 = G__25736;
i__25054 = G__25737;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__25051);
if(temp__5735__auto__){
var seq__25051__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25051__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__25051__$1);
var G__25738 = cljs.core.chunk_rest(seq__25051__$1);
var G__25739 = c__4556__auto__;
var G__25740 = cljs.core.count(c__4556__auto__);
var G__25741 = (0);
seq__25051 = G__25738;
chunk__25052 = G__25739;
count__25053 = G__25740;
i__25054 = G__25741;
continue;
} else {
var param = cljs.core.first(seq__25051__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25743 = cljs.core.next(seq__25051__$1);
var G__25744 = null;
var G__25745 = (0);
var G__25746 = (0);
seq__25051 = G__25743;
chunk__25052 = G__25744;
count__25053 = G__25745;
i__25054 = G__25746;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__25056){
var map__25057 = p__25056;
var map__25057__$1 = (((((!((map__25057 == null))))?(((((map__25057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25057):map__25057);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25057__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25057__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25057__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25057__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25057__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25057__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__24583__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__25059){
var map__25060 = p__25059;
var map__25060__$1 = (((((!((map__25060 == null))))?(((((map__25060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25060):map__25060);
var f = map__25060__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25060__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25060__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25060__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25060__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25060__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25060__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25060__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25060__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__24583__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_25748__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_25749 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_25748__$1);
var delegate_name_25750 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_25749),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_25750," = function (");

var seq__25062_25751 = cljs.core.seq(params);
var chunk__25063_25752 = null;
var count__25064_25753 = (0);
var i__25065_25754 = (0);
while(true){
if((i__25065_25754 < count__25064_25753)){
var param_25755 = chunk__25063_25752.cljs$core$IIndexed$_nth$arity$2(null,i__25065_25754);
cljs.compiler.emit(param_25755);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25755,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25756 = seq__25062_25751;
var G__25757 = chunk__25063_25752;
var G__25758 = count__25064_25753;
var G__25759 = (i__25065_25754 + (1));
seq__25062_25751 = G__25756;
chunk__25063_25752 = G__25757;
count__25064_25753 = G__25758;
i__25065_25754 = G__25759;
continue;
} else {
var temp__5735__auto___25760 = cljs.core.seq(seq__25062_25751);
if(temp__5735__auto___25760){
var seq__25062_25761__$1 = temp__5735__auto___25760;
if(cljs.core.chunked_seq_QMARK_(seq__25062_25761__$1)){
var c__4556__auto___25762 = cljs.core.chunk_first(seq__25062_25761__$1);
var G__25763 = cljs.core.chunk_rest(seq__25062_25761__$1);
var G__25764 = c__4556__auto___25762;
var G__25765 = cljs.core.count(c__4556__auto___25762);
var G__25766 = (0);
seq__25062_25751 = G__25763;
chunk__25063_25752 = G__25764;
count__25064_25753 = G__25765;
i__25065_25754 = G__25766;
continue;
} else {
var param_25767 = cljs.core.first(seq__25062_25761__$1);
cljs.compiler.emit(param_25767);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25767,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25768 = cljs.core.next(seq__25062_25761__$1);
var G__25769 = null;
var G__25770 = (0);
var G__25771 = (0);
seq__25062_25751 = G__25768;
chunk__25063_25752 = G__25769;
count__25064_25753 = G__25770;
i__25065_25754 = G__25771;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_25749," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_25772 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_25772,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_25750,".call(this,");

var seq__25071_25773 = cljs.core.seq(params);
var chunk__25072_25774 = null;
var count__25073_25775 = (0);
var i__25074_25776 = (0);
while(true){
if((i__25074_25776 < count__25073_25775)){
var param_25777 = chunk__25072_25774.cljs$core$IIndexed$_nth$arity$2(null,i__25074_25776);
cljs.compiler.emit(param_25777);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25777,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25785 = seq__25071_25773;
var G__25786 = chunk__25072_25774;
var G__25787 = count__25073_25775;
var G__25788 = (i__25074_25776 + (1));
seq__25071_25773 = G__25785;
chunk__25072_25774 = G__25786;
count__25073_25775 = G__25787;
i__25074_25776 = G__25788;
continue;
} else {
var temp__5735__auto___25789 = cljs.core.seq(seq__25071_25773);
if(temp__5735__auto___25789){
var seq__25071_25790__$1 = temp__5735__auto___25789;
if(cljs.core.chunked_seq_QMARK_(seq__25071_25790__$1)){
var c__4556__auto___25791 = cljs.core.chunk_first(seq__25071_25790__$1);
var G__25792 = cljs.core.chunk_rest(seq__25071_25790__$1);
var G__25793 = c__4556__auto___25791;
var G__25794 = cljs.core.count(c__4556__auto___25791);
var G__25795 = (0);
seq__25071_25773 = G__25792;
chunk__25072_25774 = G__25793;
count__25073_25775 = G__25794;
i__25074_25776 = G__25795;
continue;
} else {
var param_25796 = cljs.core.first(seq__25071_25790__$1);
cljs.compiler.emit(param_25796);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25796,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25797 = cljs.core.next(seq__25071_25790__$1);
var G__25798 = null;
var G__25799 = (0);
var G__25800 = (0);
seq__25071_25773 = G__25797;
chunk__25072_25774 = G__25798;
count__25073_25775 = G__25799;
i__25074_25776 = G__25800;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25749,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_25749,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_25748__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25749,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_25750,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_25749,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__25088){
var map__25089 = p__25088;
var map__25089__$1 = (((((!((map__25089 == null))))?(((((map__25089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25089):map__25089);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25089__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25089__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25089__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25089__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25089__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25089__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25089__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25089__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25085_SHARP_){
var and__4115__auto__ = p1__25085_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__25085_SHARP_));
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
var name_25801__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_25802 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_25801__$1);
var maxparams_25803 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_25804 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_25802),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_25805 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__25086_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__25086_SHARP_)));
}),cljs.core.seq(mmap_25804));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_25802," = null;");

var seq__25092_25806 = cljs.core.seq(ms_25805);
var chunk__25093_25807 = null;
var count__25094_25808 = (0);
var i__25095_25809 = (0);
while(true){
if((i__25095_25809 < count__25094_25808)){
var vec__25102_25810 = chunk__25093_25807.cljs$core$IIndexed$_nth$arity$2(null,i__25095_25809);
var n_25811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25102_25810,(0),null);
var meth_25812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25102_25810,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_25811," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25812))){
cljs.compiler.emit_variadic_fn_method(meth_25812);
} else {
cljs.compiler.emit_fn_method(meth_25812);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__25813 = seq__25092_25806;
var G__25814 = chunk__25093_25807;
var G__25815 = count__25094_25808;
var G__25816 = (i__25095_25809 + (1));
seq__25092_25806 = G__25813;
chunk__25093_25807 = G__25814;
count__25094_25808 = G__25815;
i__25095_25809 = G__25816;
continue;
} else {
var temp__5735__auto___25817 = cljs.core.seq(seq__25092_25806);
if(temp__5735__auto___25817){
var seq__25092_25818__$1 = temp__5735__auto___25817;
if(cljs.core.chunked_seq_QMARK_(seq__25092_25818__$1)){
var c__4556__auto___25832 = cljs.core.chunk_first(seq__25092_25818__$1);
var G__25833 = cljs.core.chunk_rest(seq__25092_25818__$1);
var G__25834 = c__4556__auto___25832;
var G__25835 = cljs.core.count(c__4556__auto___25832);
var G__25836 = (0);
seq__25092_25806 = G__25833;
chunk__25093_25807 = G__25834;
count__25094_25808 = G__25835;
i__25095_25809 = G__25836;
continue;
} else {
var vec__25106_25837 = cljs.core.first(seq__25092_25818__$1);
var n_25838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25106_25837,(0),null);
var meth_25839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25106_25837,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_25838," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25839))){
cljs.compiler.emit_variadic_fn_method(meth_25839);
} else {
cljs.compiler.emit_fn_method(meth_25839);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__25840 = cljs.core.next(seq__25092_25818__$1);
var G__25841 = null;
var G__25842 = (0);
var G__25843 = (0);
seq__25092_25806 = G__25840;
chunk__25093_25807 = G__25841;
count__25094_25808 = G__25842;
i__25095_25809 = G__25843;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25802," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_25803),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_25803)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_25803));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__25109_25844 = cljs.core.seq(ms_25805);
var chunk__25110_25845 = null;
var count__25111_25846 = (0);
var i__25112_25847 = (0);
while(true){
if((i__25112_25847 < count__25111_25846)){
var vec__25120_25848 = chunk__25110_25845.cljs$core$IIndexed$_nth$arity$2(null,i__25112_25847);
var n_25849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25120_25848,(0),null);
var meth_25850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25120_25848,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25850))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_25851 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_25851," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_25852 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_25851," = new cljs.core.IndexedSeq(",a_25852,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_25849,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_25803)),(((cljs.core.count(maxparams_25803) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_25851,");"], 0));
} else {
var pcnt_25861 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25850));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_25861,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_25849,".call(this",(((pcnt_25861 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_25861,maxparams_25803)),null,(1),null)),(2),null))),");");
}


var G__25862 = seq__25109_25844;
var G__25863 = chunk__25110_25845;
var G__25864 = count__25111_25846;
var G__25865 = (i__25112_25847 + (1));
seq__25109_25844 = G__25862;
chunk__25110_25845 = G__25863;
count__25111_25846 = G__25864;
i__25112_25847 = G__25865;
continue;
} else {
var temp__5735__auto___25874 = cljs.core.seq(seq__25109_25844);
if(temp__5735__auto___25874){
var seq__25109_25875__$1 = temp__5735__auto___25874;
if(cljs.core.chunked_seq_QMARK_(seq__25109_25875__$1)){
var c__4556__auto___25876 = cljs.core.chunk_first(seq__25109_25875__$1);
var G__25877 = cljs.core.chunk_rest(seq__25109_25875__$1);
var G__25878 = c__4556__auto___25876;
var G__25879 = cljs.core.count(c__4556__auto___25876);
var G__25880 = (0);
seq__25109_25844 = G__25877;
chunk__25110_25845 = G__25878;
count__25111_25846 = G__25879;
i__25112_25847 = G__25880;
continue;
} else {
var vec__25123_25881 = cljs.core.first(seq__25109_25875__$1);
var n_25882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25123_25881,(0),null);
var meth_25883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25123_25881,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25883))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_25885 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_25885," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_25886 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_25885," = new cljs.core.IndexedSeq(",a_25886,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_25882,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_25803)),(((cljs.core.count(maxparams_25803) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_25885,");"], 0));
} else {
var pcnt_25888 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25883));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_25888,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_25882,".call(this",(((pcnt_25888 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_25888,maxparams_25803)),null,(1),null)),(2),null))),");");
}


var G__25909 = cljs.core.next(seq__25109_25875__$1);
var G__25910 = null;
var G__25911 = (0);
var G__25912 = (0);
seq__25109_25844 = G__25909;
chunk__25110_25845 = G__25910;
count__25111_25846 = G__25911;
i__25112_25847 = G__25912;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_25913 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_25805)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_25913,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25802,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25802,".cljs$lang$applyTo = ",cljs.core.some((function (p1__25087_SHARP_){
var vec__25126 = p1__25087_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25126,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25126,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_25805),".cljs$lang$applyTo;");
} else {
}

var seq__25129_25916 = cljs.core.seq(ms_25805);
var chunk__25130_25917 = null;
var count__25131_25918 = (0);
var i__25132_25919 = (0);
while(true){
if((i__25132_25919 < count__25131_25918)){
var vec__25139_25920 = chunk__25130_25917.cljs$core$IIndexed$_nth$arity$2(null,i__25132_25919);
var n_25921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25139_25920,(0),null);
var meth_25922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25139_25920,(1),null);
var c_25923 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25922));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25922))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25802,".cljs$core$IFn$_invoke$arity$variadic = ",n_25921,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_25802,".cljs$core$IFn$_invoke$arity$",c_25923," = ",n_25921,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__25926 = seq__25129_25916;
var G__25927 = chunk__25130_25917;
var G__25928 = count__25131_25918;
var G__25929 = (i__25132_25919 + (1));
seq__25129_25916 = G__25926;
chunk__25130_25917 = G__25927;
count__25131_25918 = G__25928;
i__25132_25919 = G__25929;
continue;
} else {
var temp__5735__auto___25930 = cljs.core.seq(seq__25129_25916);
if(temp__5735__auto___25930){
var seq__25129_25931__$1 = temp__5735__auto___25930;
if(cljs.core.chunked_seq_QMARK_(seq__25129_25931__$1)){
var c__4556__auto___25932 = cljs.core.chunk_first(seq__25129_25931__$1);
var G__25933 = cljs.core.chunk_rest(seq__25129_25931__$1);
var G__25934 = c__4556__auto___25932;
var G__25935 = cljs.core.count(c__4556__auto___25932);
var G__25936 = (0);
seq__25129_25916 = G__25933;
chunk__25130_25917 = G__25934;
count__25131_25918 = G__25935;
i__25132_25919 = G__25936;
continue;
} else {
var vec__25151_25937 = cljs.core.first(seq__25129_25931__$1);
var n_25938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25151_25937,(0),null);
var meth_25939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25151_25937,(1),null);
var c_25940 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25939));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25939))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25802,".cljs$core$IFn$_invoke$arity$variadic = ",n_25938,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_25802,".cljs$core$IFn$_invoke$arity$",c_25940," = ",n_25938,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__25941 = cljs.core.next(seq__25129_25931__$1);
var G__25942 = null;
var G__25943 = (0);
var G__25944 = (0);
seq__25129_25916 = G__25941;
chunk__25130_25917 = G__25942;
count__25131_25918 = G__25943;
i__25132_25919 = G__25944;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_25802,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__25154){
var map__25155 = p__25154;
var map__25155__$1 = (((((!((map__25155 == null))))?(((((map__25155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25155):map__25155);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25155__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25155__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25155__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__25157_25949 = cljs.core.seq(statements);
var chunk__25158_25950 = null;
var count__25159_25951 = (0);
var i__25160_25952 = (0);
while(true){
if((i__25160_25952 < count__25159_25951)){
var s_25953 = chunk__25158_25950.cljs$core$IIndexed$_nth$arity$2(null,i__25160_25952);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_25953);


var G__25955 = seq__25157_25949;
var G__25956 = chunk__25158_25950;
var G__25957 = count__25159_25951;
var G__25958 = (i__25160_25952 + (1));
seq__25157_25949 = G__25955;
chunk__25158_25950 = G__25956;
count__25159_25951 = G__25957;
i__25160_25952 = G__25958;
continue;
} else {
var temp__5735__auto___25960 = cljs.core.seq(seq__25157_25949);
if(temp__5735__auto___25960){
var seq__25157_25961__$1 = temp__5735__auto___25960;
if(cljs.core.chunked_seq_QMARK_(seq__25157_25961__$1)){
var c__4556__auto___25962 = cljs.core.chunk_first(seq__25157_25961__$1);
var G__25963 = cljs.core.chunk_rest(seq__25157_25961__$1);
var G__25964 = c__4556__auto___25962;
var G__25965 = cljs.core.count(c__4556__auto___25962);
var G__25966 = (0);
seq__25157_25949 = G__25963;
chunk__25158_25950 = G__25964;
count__25159_25951 = G__25965;
i__25160_25952 = G__25966;
continue;
} else {
var s_25967 = cljs.core.first(seq__25157_25961__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_25967);


var G__25968 = cljs.core.next(seq__25157_25961__$1);
var G__25969 = null;
var G__25970 = (0);
var G__25971 = (0);
seq__25157_25949 = G__25968;
chunk__25158_25950 = G__25969;
count__25159_25951 = G__25970;
i__25160_25952 = G__25971;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__25166){
var map__25167 = p__25166;
var map__25167__$1 = (((((!((map__25167 == null))))?(((((map__25167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25167):map__25167);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25167__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25167__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25167__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25167__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25167__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__25169,is_loop){
var map__25170 = p__25169;
var map__25170__$1 = (((((!((map__25170 == null))))?(((((map__25170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25170):map__25170);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25170__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25170__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25170__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__25172_25995 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__25173_25996 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__25173_25996);

try{var seq__25180_25997 = cljs.core.seq(bindings);
var chunk__25181_25998 = null;
var count__25182_25999 = (0);
var i__25183_26000 = (0);
while(true){
if((i__25183_26000 < count__25182_25999)){
var map__25188_26001 = chunk__25181_25998.cljs$core$IIndexed$_nth$arity$2(null,i__25183_26000);
var map__25188_26002__$1 = (((((!((map__25188_26001 == null))))?(((((map__25188_26001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25188_26001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25188_26001):map__25188_26001);
var binding_26003 = map__25188_26002__$1;
var init_26004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25188_26002__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_26003);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_26004,";");


var G__26005 = seq__25180_25997;
var G__26006 = chunk__25181_25998;
var G__26007 = count__25182_25999;
var G__26008 = (i__25183_26000 + (1));
seq__25180_25997 = G__26005;
chunk__25181_25998 = G__26006;
count__25182_25999 = G__26007;
i__25183_26000 = G__26008;
continue;
} else {
var temp__5735__auto___26009 = cljs.core.seq(seq__25180_25997);
if(temp__5735__auto___26009){
var seq__25180_26010__$1 = temp__5735__auto___26009;
if(cljs.core.chunked_seq_QMARK_(seq__25180_26010__$1)){
var c__4556__auto___26011 = cljs.core.chunk_first(seq__25180_26010__$1);
var G__26012 = cljs.core.chunk_rest(seq__25180_26010__$1);
var G__26013 = c__4556__auto___26011;
var G__26014 = cljs.core.count(c__4556__auto___26011);
var G__26015 = (0);
seq__25180_25997 = G__26012;
chunk__25181_25998 = G__26013;
count__25182_25999 = G__26014;
i__25183_26000 = G__26015;
continue;
} else {
var map__25190_26016 = cljs.core.first(seq__25180_26010__$1);
var map__25190_26017__$1 = (((((!((map__25190_26016 == null))))?(((((map__25190_26016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25190_26016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25190_26016):map__25190_26016);
var binding_26018 = map__25190_26017__$1;
var init_26019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25190_26017__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_26018);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_26019,";");


var G__26020 = cljs.core.next(seq__25180_26010__$1);
var G__26021 = null;
var G__26022 = (0);
var G__26023 = (0);
seq__25180_25997 = G__26020;
chunk__25181_25998 = G__26021;
count__25182_25999 = G__26022;
i__25183_26000 = G__26023;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__25172_25995);
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
var n__4613__auto___26024 = cljs.core.count(exprs);
var i_26025 = (0);
while(true){
if((i_26025 < n__4613__auto___26024)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_26025) : temps.call(null,i_26025))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_26025) : exprs.call(null,i_26025)),";");

var G__26033 = (i_26025 + (1));
i_26025 = G__26033;
continue;
} else {
}
break;
}

var n__4613__auto___26034 = cljs.core.count(exprs);
var i_26035 = (0);
while(true){
if((i_26035 < n__4613__auto___26034)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_26035) : params.call(null,i_26035)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_26035) : temps.call(null,i_26035)),";");

var G__26036 = (i_26035 + (1));
i_26035 = G__26036;
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

var seq__25198_26037 = cljs.core.seq(bindings);
var chunk__25199_26038 = null;
var count__25200_26039 = (0);
var i__25201_26040 = (0);
while(true){
if((i__25201_26040 < count__25200_26039)){
var map__25206_26041 = chunk__25199_26038.cljs$core$IIndexed$_nth$arity$2(null,i__25201_26040);
var map__25206_26042__$1 = (((((!((map__25206_26041 == null))))?(((((map__25206_26041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25206_26041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25206_26041):map__25206_26041);
var binding_26043 = map__25206_26042__$1;
var init_26044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25206_26042__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_26043)," = ",init_26044,";");


var G__26045 = seq__25198_26037;
var G__26046 = chunk__25199_26038;
var G__26047 = count__25200_26039;
var G__26048 = (i__25201_26040 + (1));
seq__25198_26037 = G__26045;
chunk__25199_26038 = G__26046;
count__25200_26039 = G__26047;
i__25201_26040 = G__26048;
continue;
} else {
var temp__5735__auto___26049 = cljs.core.seq(seq__25198_26037);
if(temp__5735__auto___26049){
var seq__25198_26050__$1 = temp__5735__auto___26049;
if(cljs.core.chunked_seq_QMARK_(seq__25198_26050__$1)){
var c__4556__auto___26051 = cljs.core.chunk_first(seq__25198_26050__$1);
var G__26052 = cljs.core.chunk_rest(seq__25198_26050__$1);
var G__26053 = c__4556__auto___26051;
var G__26054 = cljs.core.count(c__4556__auto___26051);
var G__26055 = (0);
seq__25198_26037 = G__26052;
chunk__25199_26038 = G__26053;
count__25200_26039 = G__26054;
i__25201_26040 = G__26055;
continue;
} else {
var map__25208_26056 = cljs.core.first(seq__25198_26050__$1);
var map__25208_26057__$1 = (((((!((map__25208_26056 == null))))?(((((map__25208_26056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25208_26056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25208_26056):map__25208_26056);
var binding_26058 = map__25208_26057__$1;
var init_26059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25208_26057__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_26058)," = ",init_26059,";");


var G__26060 = cljs.core.next(seq__25198_26050__$1);
var G__26061 = null;
var G__26062 = (0);
var G__26063 = (0);
seq__25198_26037 = G__26060;
chunk__25199_26038 = G__26061;
count__25200_26039 = G__26062;
i__25201_26040 = G__26063;
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
var env__24583__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
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
var pimpl_26103 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_26103,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_26106 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_26106,args)),(((mfa_26106 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_26106,args)),"], 0))"], 0));
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
var fprop_26111 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_26111," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_26111,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_26111," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_26111,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
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
var env__24583__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
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
var env__24583__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
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

var seq__25245_26164 = cljs.core.seq(libs_to_load);
var chunk__25246_26165 = null;
var count__25247_26166 = (0);
var i__25248_26167 = (0);
while(true){
if((i__25248_26167 < count__25247_26166)){
var lib_26168 = chunk__25246_26165.cljs$core$IIndexed$_nth$arity$2(null,i__25248_26167);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_26168)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_26168),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_26168),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_26168),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_26168),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_26168,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_26168),"');");
}

}
}
}


var G__26201 = seq__25245_26164;
var G__26202 = chunk__25246_26165;
var G__26203 = count__25247_26166;
var G__26204 = (i__25248_26167 + (1));
seq__25245_26164 = G__26201;
chunk__25246_26165 = G__26202;
count__25247_26166 = G__26203;
i__25248_26167 = G__26204;
continue;
} else {
var temp__5735__auto___26205 = cljs.core.seq(seq__25245_26164);
if(temp__5735__auto___26205){
var seq__25245_26206__$1 = temp__5735__auto___26205;
if(cljs.core.chunked_seq_QMARK_(seq__25245_26206__$1)){
var c__4556__auto___26207 = cljs.core.chunk_first(seq__25245_26206__$1);
var G__26208 = cljs.core.chunk_rest(seq__25245_26206__$1);
var G__26209 = c__4556__auto___26207;
var G__26210 = cljs.core.count(c__4556__auto___26207);
var G__26211 = (0);
seq__25245_26164 = G__26208;
chunk__25246_26165 = G__26209;
count__25247_26166 = G__26210;
i__25248_26167 = G__26211;
continue;
} else {
var lib_26216 = cljs.core.first(seq__25245_26206__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_26216)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_26216),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_26216),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_26216),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_26216),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_26216,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_26216),"');");
}

}
}
}


var G__26217 = cljs.core.next(seq__25245_26206__$1);
var G__26218 = null;
var G__26219 = (0);
var G__26220 = (0);
seq__25245_26164 = G__26217;
chunk__25246_26165 = G__26218;
count__25247_26166 = G__26219;
i__25248_26167 = G__26220;
continue;
}
} else {
}
}
break;
}

var seq__25249_26222 = cljs.core.seq(node_libs);
var chunk__25250_26223 = null;
var count__25251_26224 = (0);
var i__25252_26225 = (0);
while(true){
if((i__25252_26225 < count__25251_26224)){
var lib_26226 = chunk__25250_26223.cljs$core$IIndexed$_nth$arity$2(null,i__25252_26225);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_26226)," = require('",lib_26226,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__26231 = seq__25249_26222;
var G__26232 = chunk__25250_26223;
var G__26233 = count__25251_26224;
var G__26234 = (i__25252_26225 + (1));
seq__25249_26222 = G__26231;
chunk__25250_26223 = G__26232;
count__25251_26224 = G__26233;
i__25252_26225 = G__26234;
continue;
} else {
var temp__5735__auto___26235 = cljs.core.seq(seq__25249_26222);
if(temp__5735__auto___26235){
var seq__25249_26236__$1 = temp__5735__auto___26235;
if(cljs.core.chunked_seq_QMARK_(seq__25249_26236__$1)){
var c__4556__auto___26237 = cljs.core.chunk_first(seq__25249_26236__$1);
var G__26238 = cljs.core.chunk_rest(seq__25249_26236__$1);
var G__26239 = c__4556__auto___26237;
var G__26240 = cljs.core.count(c__4556__auto___26237);
var G__26241 = (0);
seq__25249_26222 = G__26238;
chunk__25250_26223 = G__26239;
count__25251_26224 = G__26240;
i__25252_26225 = G__26241;
continue;
} else {
var lib_26243 = cljs.core.first(seq__25249_26236__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_26243)," = require('",lib_26243,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__26244 = cljs.core.next(seq__25249_26236__$1);
var G__26245 = null;
var G__26246 = (0);
var G__26247 = (0);
seq__25249_26222 = G__26244;
chunk__25250_26223 = G__26245;
count__25251_26224 = G__26246;
i__25252_26225 = G__26247;
continue;
}
} else {
}
}
break;
}

var seq__25253_26248 = cljs.core.seq(global_exports_libs);
var chunk__25254_26249 = null;
var count__25255_26250 = (0);
var i__25256_26251 = (0);
while(true){
if((i__25256_26251 < count__25255_26250)){
var lib_26252 = chunk__25254_26249.cljs$core$IIndexed$_nth$arity$2(null,i__25256_26251);
var map__25261_26253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_26252));
var map__25261_26254__$1 = (((((!((map__25261_26253 == null))))?(((((map__25261_26253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25261_26253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25261_26253):map__25261_26253);
var global_exports_26255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25261_26254__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_26255,lib_26252);


var G__26258 = seq__25253_26248;
var G__26259 = chunk__25254_26249;
var G__26260 = count__25255_26250;
var G__26261 = (i__25256_26251 + (1));
seq__25253_26248 = G__26258;
chunk__25254_26249 = G__26259;
count__25255_26250 = G__26260;
i__25256_26251 = G__26261;
continue;
} else {
var temp__5735__auto___26262 = cljs.core.seq(seq__25253_26248);
if(temp__5735__auto___26262){
var seq__25253_26263__$1 = temp__5735__auto___26262;
if(cljs.core.chunked_seq_QMARK_(seq__25253_26263__$1)){
var c__4556__auto___26264 = cljs.core.chunk_first(seq__25253_26263__$1);
var G__26265 = cljs.core.chunk_rest(seq__25253_26263__$1);
var G__26266 = c__4556__auto___26264;
var G__26267 = cljs.core.count(c__4556__auto___26264);
var G__26268 = (0);
seq__25253_26248 = G__26265;
chunk__25254_26249 = G__26266;
count__25255_26250 = G__26267;
i__25256_26251 = G__26268;
continue;
} else {
var lib_26269 = cljs.core.first(seq__25253_26263__$1);
var map__25263_26270 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_26269));
var map__25263_26271__$1 = (((((!((map__25263_26270 == null))))?(((((map__25263_26270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25263_26270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25263_26270):map__25263_26270);
var global_exports_26272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25263_26271__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_26272,lib_26269);


var G__26273 = cljs.core.next(seq__25253_26263__$1);
var G__26274 = null;
var G__26275 = (0);
var G__26276 = (0);
seq__25253_26248 = G__26273;
chunk__25254_26249 = G__26274;
count__25255_26250 = G__26275;
i__25256_26251 = G__26276;
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

var seq__25274_26322 = cljs.core.seq(protocols);
var chunk__25275_26323 = null;
var count__25276_26324 = (0);
var i__25277_26325 = (0);
while(true){
if((i__25277_26325 < count__25276_26324)){
var protocol_26326 = chunk__25275_26323.cljs$core$IIndexed$_nth$arity$2(null,i__25277_26325);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_26326)),"}");


var G__26327 = seq__25274_26322;
var G__26328 = chunk__25275_26323;
var G__26329 = count__25276_26324;
var G__26330 = (i__25277_26325 + (1));
seq__25274_26322 = G__26327;
chunk__25275_26323 = G__26328;
count__25276_26324 = G__26329;
i__25277_26325 = G__26330;
continue;
} else {
var temp__5735__auto___26331 = cljs.core.seq(seq__25274_26322);
if(temp__5735__auto___26331){
var seq__25274_26332__$1 = temp__5735__auto___26331;
if(cljs.core.chunked_seq_QMARK_(seq__25274_26332__$1)){
var c__4556__auto___26333 = cljs.core.chunk_first(seq__25274_26332__$1);
var G__26334 = cljs.core.chunk_rest(seq__25274_26332__$1);
var G__26335 = c__4556__auto___26333;
var G__26336 = cljs.core.count(c__4556__auto___26333);
var G__26337 = (0);
seq__25274_26322 = G__26334;
chunk__25275_26323 = G__26335;
count__25276_26324 = G__26336;
i__25277_26325 = G__26337;
continue;
} else {
var protocol_26338 = cljs.core.first(seq__25274_26332__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_26338)),"}");


var G__26339 = cljs.core.next(seq__25274_26332__$1);
var G__26340 = null;
var G__26341 = (0);
var G__26342 = (0);
seq__25274_26322 = G__26339;
chunk__25275_26323 = G__26340;
count__25276_26324 = G__26341;
i__25277_26325 = G__26342;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__25278_26343 = cljs.core.seq(fields__$1);
var chunk__25279_26344 = null;
var count__25280_26345 = (0);
var i__25281_26346 = (0);
while(true){
if((i__25281_26346 < count__25280_26345)){
var fld_26347 = chunk__25279_26344.cljs$core$IIndexed$_nth$arity$2(null,i__25281_26346);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_26347," = ",fld_26347,";");


var G__26348 = seq__25278_26343;
var G__26349 = chunk__25279_26344;
var G__26350 = count__25280_26345;
var G__26351 = (i__25281_26346 + (1));
seq__25278_26343 = G__26348;
chunk__25279_26344 = G__26349;
count__25280_26345 = G__26350;
i__25281_26346 = G__26351;
continue;
} else {
var temp__5735__auto___26352 = cljs.core.seq(seq__25278_26343);
if(temp__5735__auto___26352){
var seq__25278_26353__$1 = temp__5735__auto___26352;
if(cljs.core.chunked_seq_QMARK_(seq__25278_26353__$1)){
var c__4556__auto___26354 = cljs.core.chunk_first(seq__25278_26353__$1);
var G__26355 = cljs.core.chunk_rest(seq__25278_26353__$1);
var G__26356 = c__4556__auto___26354;
var G__26357 = cljs.core.count(c__4556__auto___26354);
var G__26358 = (0);
seq__25278_26343 = G__26355;
chunk__25279_26344 = G__26356;
count__25280_26345 = G__26357;
i__25281_26346 = G__26358;
continue;
} else {
var fld_26359 = cljs.core.first(seq__25278_26353__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_26359," = ",fld_26359,";");


var G__26360 = cljs.core.next(seq__25278_26353__$1);
var G__26361 = null;
var G__26362 = (0);
var G__26363 = (0);
seq__25278_26343 = G__26360;
chunk__25279_26344 = G__26361;
count__25280_26345 = G__26362;
i__25281_26346 = G__26363;
continue;
}
} else {
}
}
break;
}

var seq__25282_26364 = cljs.core.seq(pmasks);
var chunk__25283_26365 = null;
var count__25284_26366 = (0);
var i__25285_26367 = (0);
while(true){
if((i__25285_26367 < count__25284_26366)){
var vec__25292_26370 = chunk__25283_26365.cljs$core$IIndexed$_nth$arity$2(null,i__25285_26367);
var pno_26371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25292_26370,(0),null);
var pmask_26372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25292_26370,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_26371,"$ = ",pmask_26372,";");


var G__26374 = seq__25282_26364;
var G__26375 = chunk__25283_26365;
var G__26376 = count__25284_26366;
var G__26377 = (i__25285_26367 + (1));
seq__25282_26364 = G__26374;
chunk__25283_26365 = G__26375;
count__25284_26366 = G__26376;
i__25285_26367 = G__26377;
continue;
} else {
var temp__5735__auto___26378 = cljs.core.seq(seq__25282_26364);
if(temp__5735__auto___26378){
var seq__25282_26379__$1 = temp__5735__auto___26378;
if(cljs.core.chunked_seq_QMARK_(seq__25282_26379__$1)){
var c__4556__auto___26381 = cljs.core.chunk_first(seq__25282_26379__$1);
var G__26382 = cljs.core.chunk_rest(seq__25282_26379__$1);
var G__26383 = c__4556__auto___26381;
var G__26384 = cljs.core.count(c__4556__auto___26381);
var G__26385 = (0);
seq__25282_26364 = G__26382;
chunk__25283_26365 = G__26383;
count__25284_26366 = G__26384;
i__25285_26367 = G__26385;
continue;
} else {
var vec__25295_26386 = cljs.core.first(seq__25282_26379__$1);
var pno_26387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25295_26386,(0),null);
var pmask_26388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25295_26386,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_26387,"$ = ",pmask_26388,";");


var G__26389 = cljs.core.next(seq__25282_26379__$1);
var G__26390 = null;
var G__26391 = (0);
var G__26392 = (0);
seq__25282_26364 = G__26389;
chunk__25283_26365 = G__26390;
count__25284_26366 = G__26391;
i__25285_26367 = G__26392;
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

var seq__25301_26417 = cljs.core.seq(protocols);
var chunk__25302_26418 = null;
var count__25303_26419 = (0);
var i__25304_26420 = (0);
while(true){
if((i__25304_26420 < count__25303_26419)){
var protocol_26421 = chunk__25302_26418.cljs$core$IIndexed$_nth$arity$2(null,i__25304_26420);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_26421)),"}");


var G__26422 = seq__25301_26417;
var G__26423 = chunk__25302_26418;
var G__26424 = count__25303_26419;
var G__26425 = (i__25304_26420 + (1));
seq__25301_26417 = G__26422;
chunk__25302_26418 = G__26423;
count__25303_26419 = G__26424;
i__25304_26420 = G__26425;
continue;
} else {
var temp__5735__auto___26446 = cljs.core.seq(seq__25301_26417);
if(temp__5735__auto___26446){
var seq__25301_26447__$1 = temp__5735__auto___26446;
if(cljs.core.chunked_seq_QMARK_(seq__25301_26447__$1)){
var c__4556__auto___26448 = cljs.core.chunk_first(seq__25301_26447__$1);
var G__26449 = cljs.core.chunk_rest(seq__25301_26447__$1);
var G__26450 = c__4556__auto___26448;
var G__26451 = cljs.core.count(c__4556__auto___26448);
var G__26452 = (0);
seq__25301_26417 = G__26449;
chunk__25302_26418 = G__26450;
count__25303_26419 = G__26451;
i__25304_26420 = G__26452;
continue;
} else {
var protocol_26453 = cljs.core.first(seq__25301_26447__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_26453)),"}");


var G__26454 = cljs.core.next(seq__25301_26447__$1);
var G__26455 = null;
var G__26456 = (0);
var G__26457 = (0);
seq__25301_26417 = G__26454;
chunk__25302_26418 = G__26455;
count__25303_26419 = G__26456;
i__25304_26420 = G__26457;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__25305_26458 = cljs.core.seq(fields__$1);
var chunk__25306_26459 = null;
var count__25307_26460 = (0);
var i__25308_26461 = (0);
while(true){
if((i__25308_26461 < count__25307_26460)){
var fld_26463 = chunk__25306_26459.cljs$core$IIndexed$_nth$arity$2(null,i__25308_26461);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_26463," = ",fld_26463,";");


var G__26464 = seq__25305_26458;
var G__26465 = chunk__25306_26459;
var G__26466 = count__25307_26460;
var G__26467 = (i__25308_26461 + (1));
seq__25305_26458 = G__26464;
chunk__25306_26459 = G__26465;
count__25307_26460 = G__26466;
i__25308_26461 = G__26467;
continue;
} else {
var temp__5735__auto___26468 = cljs.core.seq(seq__25305_26458);
if(temp__5735__auto___26468){
var seq__25305_26469__$1 = temp__5735__auto___26468;
if(cljs.core.chunked_seq_QMARK_(seq__25305_26469__$1)){
var c__4556__auto___26470 = cljs.core.chunk_first(seq__25305_26469__$1);
var G__26471 = cljs.core.chunk_rest(seq__25305_26469__$1);
var G__26472 = c__4556__auto___26470;
var G__26473 = cljs.core.count(c__4556__auto___26470);
var G__26474 = (0);
seq__25305_26458 = G__26471;
chunk__25306_26459 = G__26472;
count__25307_26460 = G__26473;
i__25308_26461 = G__26474;
continue;
} else {
var fld_26475 = cljs.core.first(seq__25305_26469__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_26475," = ",fld_26475,";");


var G__26476 = cljs.core.next(seq__25305_26469__$1);
var G__26477 = null;
var G__26478 = (0);
var G__26479 = (0);
seq__25305_26458 = G__26476;
chunk__25306_26459 = G__26477;
count__25307_26460 = G__26478;
i__25308_26461 = G__26479;
continue;
}
} else {
}
}
break;
}

var seq__25309_26480 = cljs.core.seq(pmasks);
var chunk__25310_26481 = null;
var count__25311_26482 = (0);
var i__25312_26483 = (0);
while(true){
if((i__25312_26483 < count__25311_26482)){
var vec__25319_26484 = chunk__25310_26481.cljs$core$IIndexed$_nth$arity$2(null,i__25312_26483);
var pno_26485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25319_26484,(0),null);
var pmask_26486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25319_26484,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_26485,"$ = ",pmask_26486,";");


var G__26487 = seq__25309_26480;
var G__26488 = chunk__25310_26481;
var G__26489 = count__25311_26482;
var G__26490 = (i__25312_26483 + (1));
seq__25309_26480 = G__26487;
chunk__25310_26481 = G__26488;
count__25311_26482 = G__26489;
i__25312_26483 = G__26490;
continue;
} else {
var temp__5735__auto___26491 = cljs.core.seq(seq__25309_26480);
if(temp__5735__auto___26491){
var seq__25309_26492__$1 = temp__5735__auto___26491;
if(cljs.core.chunked_seq_QMARK_(seq__25309_26492__$1)){
var c__4556__auto___26494 = cljs.core.chunk_first(seq__25309_26492__$1);
var G__26495 = cljs.core.chunk_rest(seq__25309_26492__$1);
var G__26496 = c__4556__auto___26494;
var G__26497 = cljs.core.count(c__4556__auto___26494);
var G__26498 = (0);
seq__25309_26480 = G__26495;
chunk__25310_26481 = G__26496;
count__25311_26482 = G__26497;
i__25312_26483 = G__26498;
continue;
} else {
var vec__25322_26500 = cljs.core.first(seq__25309_26492__$1);
var pno_26501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25322_26500,(0),null);
var pmask_26502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25322_26500,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_26501,"$ = ",pmask_26502,";");


var G__26503 = cljs.core.next(seq__25309_26492__$1);
var G__26504 = null;
var G__26505 = (0);
var G__26506 = (0);
seq__25309_26480 = G__26503;
chunk__25310_26481 = G__26504;
count__25311_26482 = G__26505;
i__25312_26483 = G__26506;
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
var env__24583__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
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
var env__24583__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24583__auto__))){
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
var ns_26509 = cljs.core.namespace(sym);
var name_26510 = cljs.core.name(sym);
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


var G__26511 = seq__25335;
var G__26512 = chunk__25336;
var G__26513 = count__25337;
var G__26514 = (i__25338 + (1));
seq__25335 = G__26511;
chunk__25336 = G__26512;
count__25337 = G__26513;
i__25338 = G__26514;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__25335);
if(temp__5735__auto__){
var seq__25335__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25335__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__25335__$1);
var G__26515 = cljs.core.chunk_rest(seq__25335__$1);
var G__26516 = c__4556__auto__;
var G__26517 = cljs.core.count(c__4556__auto__);
var G__26518 = (0);
seq__25335 = G__26515;
chunk__25336 = G__26516;
count__25337 = G__26517;
i__25338 = G__26518;
continue;
} else {
var vec__25348 = cljs.core.first(seq__25335__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25348,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25348,(1),null);
var ns_26520 = cljs.core.namespace(sym);
var name_26521 = cljs.core.name(sym);
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


var G__26524 = cljs.core.next(seq__25335__$1);
var G__26525 = null;
var G__26526 = (0);
var G__26527 = (0);
seq__25335 = G__26524;
chunk__25336 = G__26525;
count__25337 = G__26526;
i__25338 = G__26527;
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
var k_26529 = cljs.core.first(ks);
var vec__25353_26530 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_26529);
var top_26531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25353_26530,(0),null);
var prefix_SINGLEQUOTE__26532 = vec__25353_26530;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_26529)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__26532) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_26531)) || (cljs.core.contains_QMARK_(known_externs,top_26531)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__26532)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_26531);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__26532)),";");
}
} else {
}

var m_26533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_26529);
if(cljs.core.empty_QMARK_(m_26533)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__26532,m_26533,top_level,known_externs);
}

var G__26534 = cljs.core.next(ks);
ks = G__26534;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);

