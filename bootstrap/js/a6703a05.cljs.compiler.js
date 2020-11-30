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
var map__24507 = s;
var map__24507__$1 = (((((!((map__24507 == null))))?(((((map__24507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24507):map__24507);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24507__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24507__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__24524 = info;
var map__24525 = G__24524;
var map__24525__$1 = (((((!((map__24525 == null))))?(((((map__24525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24525):map__24525);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24525__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__24524__$1 = G__24524;
while(true){
var d__$2 = d__$1;
var map__24529 = G__24524__$1;
var map__24529__$1 = (((((!((map__24529 == null))))?(((((map__24529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24529):map__24529);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24529__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__25356 = (d__$2 + (1));
var G__25357 = shadow__$1;
d__$1 = G__25356;
G__24524__$1 = G__25357;
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
var ms = (function (){var fexpr__24543 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11501,11501,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__24543.cljs$core$IFn$_invoke$arity$1 ? fexpr__24543.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__24543.call(null,ss__$3));
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
var G__24545 = cp;
switch (G__24545) {
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
var seq__24547_25360 = cljs.core.seq(s);
var chunk__24548_25361 = null;
var count__24549_25362 = (0);
var i__24550_25363 = (0);
while(true){
if((i__24550_25363 < count__24549_25362)){
var c_25364 = chunk__24548_25361.cljs$core$IIndexed$_nth$arity$2(null,i__24550_25363);
sb.append(cljs.compiler.escape_char(c_25364));


var G__25365 = seq__24547_25360;
var G__25366 = chunk__24548_25361;
var G__25367 = count__24549_25362;
var G__25368 = (i__24550_25363 + (1));
seq__24547_25360 = G__25365;
chunk__24548_25361 = G__25366;
count__24549_25362 = G__25367;
i__24550_25363 = G__25368;
continue;
} else {
var temp__5735__auto___25369 = cljs.core.seq(seq__24547_25360);
if(temp__5735__auto___25369){
var seq__24547_25370__$1 = temp__5735__auto___25369;
if(cljs.core.chunked_seq_QMARK_(seq__24547_25370__$1)){
var c__4556__auto___25371 = cljs.core.chunk_first(seq__24547_25370__$1);
var G__25372 = cljs.core.chunk_rest(seq__24547_25370__$1);
var G__25373 = c__4556__auto___25371;
var G__25374 = cljs.core.count(c__4556__auto___25371);
var G__25375 = (0);
seq__24547_25360 = G__25372;
chunk__24548_25361 = G__25373;
count__24549_25362 = G__25374;
i__24550_25363 = G__25375;
continue;
} else {
var c_25376 = cljs.core.first(seq__24547_25370__$1);
sb.append(cljs.compiler.escape_char(c_25376));


var G__25377 = cljs.core.next(seq__24547_25370__$1);
var G__25378 = null;
var G__25379 = (0);
var G__25380 = (0);
seq__24547_25360 = G__25377;
chunk__24548_25361 = G__25378;
count__24549_25362 = G__25379;
i__24550_25363 = G__25380;
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__24552 = cljs.core.get_global_hierarchy;
return (fexpr__24552.cljs$core$IFn$_invoke$arity$0 ? fexpr__24552.cljs$core$IFn$_invoke$arity$0() : fexpr__24552.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__24567_25381 = ast;
var map__24567_25382__$1 = (((((!((map__24567_25381 == null))))?(((((map__24567_25381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24567_25381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24567_25381):map__24567_25381);
var env_25383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24567_25382__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_25383))){
var map__24569_25384 = env_25383;
var map__24569_25385__$1 = (((((!((map__24569_25384 == null))))?(((((map__24569_25384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24569_25384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24569_25384):map__24569_25384);
var line_25386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24569_25385__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_25387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24569_25385__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__24571 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__24573 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__24572 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__24572.cljs$core$IFn$_invoke$arity$1 ? fexpr__24572.cljs$core$IFn$_invoke$arity$1(G__24573) : fexpr__24572.call(null,G__24573));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24571,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__24571;
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
var G__24583 = arguments.length;
switch (G__24583) {
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
var s_25392 = (function (){var G__24591 = a;
if((!(typeof a === 'string'))){
return G__24591.toString();
} else {
return G__24591;
}
})();
var temp__5739__auto___25393 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___25393 == null)){
} else {
var sm_data_25394 = temp__5739__auto___25393;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_25394,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__24575_SHARP_){
return (p1__24575_SHARP_ + s_25392.length);
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

var seq__24592 = cljs.core.seq(xs);
var chunk__24593 = null;
var count__24594 = (0);
var i__24595 = (0);
while(true){
if((i__24595 < count__24594)){
var x = chunk__24593.cljs$core$IIndexed$_nth$arity$2(null,i__24595);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__25395 = seq__24592;
var G__25396 = chunk__24593;
var G__25397 = count__24594;
var G__25398 = (i__24595 + (1));
seq__24592 = G__25395;
chunk__24593 = G__25396;
count__24594 = G__25397;
i__24595 = G__25398;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__24592);
if(temp__5735__auto__){
var seq__24592__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24592__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24592__$1);
var G__25399 = cljs.core.chunk_rest(seq__24592__$1);
var G__25400 = c__4556__auto__;
var G__25401 = cljs.core.count(c__4556__auto__);
var G__25402 = (0);
seq__24592 = G__25399;
chunk__24593 = G__25400;
count__24594 = G__25401;
i__24595 = G__25402;
continue;
} else {
var x = cljs.core.first(seq__24592__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__25403 = cljs.core.next(seq__24592__$1);
var G__25404 = null;
var G__25405 = (0);
var G__25406 = (0);
seq__24592 = G__25403;
chunk__24593 = G__25404;
count__24594 = G__25405;
i__24595 = G__25406;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq24577){
var G__24578 = cljs.core.first(seq24577);
var seq24577__$1 = cljs.core.next(seq24577);
var G__24579 = cljs.core.first(seq24577__$1);
var seq24577__$2 = cljs.core.next(seq24577__$1);
var G__24580 = cljs.core.first(seq24577__$2);
var seq24577__$3 = cljs.core.next(seq24577__$2);
var G__24581 = cljs.core.first(seq24577__$3);
var seq24577__$4 = cljs.core.next(seq24577__$3);
var G__24582 = cljs.core.first(seq24577__$4);
var seq24577__$5 = cljs.core.next(seq24577__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24578,G__24579,G__24580,G__24581,G__24582,seq24577__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__24601){
var map__24602 = p__24601;
var map__24602__$1 = (((((!((map__24602 == null))))?(((((map__24602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24602):map__24602);
var m = map__24602__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24602__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__24611 = arguments.length;
switch (G__24611) {
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq24605){
var G__24606 = cljs.core.first(seq24605);
var seq24605__$1 = cljs.core.next(seq24605);
var G__24607 = cljs.core.first(seq24605__$1);
var seq24605__$2 = cljs.core.next(seq24605__$1);
var G__24608 = cljs.core.first(seq24605__$2);
var seq24605__$3 = cljs.core.next(seq24605__$2);
var G__24609 = cljs.core.first(seq24605__$3);
var seq24605__$4 = cljs.core.next(seq24605__$3);
var G__24610 = cljs.core.first(seq24605__$4);
var seq24605__$5 = cljs.core.next(seq24605__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24606,G__24607,G__24608,G__24609,G__24610,seq24605__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24618_25432 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24619_25433 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24620_25434 = true;
var _STAR_print_fn_STAR__temp_val__24621_25435 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24620_25434);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24621_25435);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24619_25433);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24618_25432);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__24623 = cljs.core.get_global_hierarchy;
return (fexpr__24623.cljs$core$IFn$_invoke$arity$0 ? fexpr__24623.cljs$core$IFn$_invoke$arity$0() : fexpr__24623.call(null));
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
var vec__24624 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24624,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24624,(1),null);
var G__24627 = ns;
var G__24628 = name;
var G__24629 = (function (){
var G__24630 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__24630) : cljs.compiler.emit_constant.call(null,G__24630));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__24627,G__24628,G__24629) : cljs.compiler.emit_record_value.call(null,G__24627,G__24628,G__24629));
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
var vec__24644 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24644,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24644,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24644,(2),null);
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
var G__24666 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__24666) : x.call(null,G__24666));
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
var G__24669 = items;
var G__24670 = (function (p1__24668_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__24668_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__24669,G__24670) : cljs.compiler.emit_js_object.call(null,G__24669,G__24670));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__24688){
var map__24689 = p__24688;
var map__24689__$1 = (((((!((map__24689 == null))))?(((((map__24689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24689):map__24689);
var arg = map__24689__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24689__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24689__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24689__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24689__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));


var map__24691 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__24691__$1 = (((((!((map__24691 == null))))?(((((map__24691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24691):map__24691);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24691__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__24693){
var map__24694 = p__24693;
var map__24694__$1 = (((((!((map__24694 == null))))?(((((map__24694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24694):map__24694);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24694__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24694__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24694__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_((function (p1__24701_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__24701_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__24705 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__24705) : comma_sep.call(null,G__24705));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__24706 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__24706) : comma_sep.call(null,G__24706));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__24707){
var map__24708 = p__24707;
var map__24708__$1 = (((((!((map__24708 == null))))?(((((map__24708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24708):map__24708);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24708__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24708__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24708__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__24710){
var map__24711 = p__24710;
var map__24711__$1 = (((((!((map__24711 == null))))?(((((map__24711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24711):map__24711);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24711__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24711__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_((function (p1__24714_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__24714_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__24716 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__24716) : comma_sep.call(null,G__24716));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__24717){
var map__24718 = p__24717;
var map__24718__$1 = (((((!((map__24718 == null))))?(((((map__24718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24718):map__24718);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24718__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24718__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__24760 = cljs.analyzer.unwrap_quote(expr);
var map__24760__$1 = (((((!((map__24760 == null))))?(((((map__24760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24760):map__24760);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24760__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24760__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24760__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__24772){
var map__24773 = p__24772;
var map__24773__$1 = (((((!((map__24773 == null))))?(((((map__24773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24773):map__24773);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24773__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24773__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24773__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24773__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__24803_25478 = chunk__24779_25475.cljs$core$IIndexed$_nth$arity$2(null,i__24781_25477);
var map__24803_25479__$1 = (((((!((map__24803_25478 == null))))?(((((map__24803_25478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24803_25478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24803_25478):map__24803_25478);
var ts_25480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24803_25479__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__24804_25481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24803_25479__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__24804_25482__$1 = (((((!((map__24804_25481 == null))))?(((((map__24804_25481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24804_25481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24804_25481):map__24804_25481);
var then_25483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24804_25482__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__24807_25484 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_25480));
var chunk__24808_25485 = null;
var count__24809_25486 = (0);
var i__24810_25487 = (0);
while(true){
if((i__24810_25487 < count__24809_25486)){
var test_25488 = chunk__24808_25485.cljs$core$IIndexed$_nth$arity$2(null,i__24810_25487);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25488,":");


var G__25489 = seq__24807_25484;
var G__25490 = chunk__24808_25485;
var G__25491 = count__24809_25486;
var G__25492 = (i__24810_25487 + (1));
seq__24807_25484 = G__25489;
chunk__24808_25485 = G__25490;
count__24809_25486 = G__25491;
i__24810_25487 = G__25492;
continue;
} else {
var temp__5735__auto___25493 = cljs.core.seq(seq__24807_25484);
if(temp__5735__auto___25493){
var seq__24807_25494__$1 = temp__5735__auto___25493;
if(cljs.core.chunked_seq_QMARK_(seq__24807_25494__$1)){
var c__4556__auto___25495 = cljs.core.chunk_first(seq__24807_25494__$1);
var G__25496 = cljs.core.chunk_rest(seq__24807_25494__$1);
var G__25497 = c__4556__auto___25495;
var G__25498 = cljs.core.count(c__4556__auto___25495);
var G__25499 = (0);
seq__24807_25484 = G__25496;
chunk__24808_25485 = G__25497;
count__24809_25486 = G__25498;
i__24810_25487 = G__25499;
continue;
} else {
var test_25500 = cljs.core.first(seq__24807_25494__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25500,":");


var G__25501 = cljs.core.next(seq__24807_25494__$1);
var G__25502 = null;
var G__25503 = (0);
var G__25504 = (0);
seq__24807_25484 = G__25501;
chunk__24808_25485 = G__25502;
count__24809_25486 = G__25503;
i__24810_25487 = G__25504;
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
var map__24826_25516 = cljs.core.first(seq__24778_25510__$1);
var map__24826_25517__$1 = (((((!((map__24826_25516 == null))))?(((((map__24826_25516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24826_25516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24826_25516):map__24826_25516);
var ts_25518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24826_25517__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__24827_25519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24826_25517__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__24827_25520__$1 = (((((!((map__24827_25519 == null))))?(((((map__24827_25519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24827_25519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24827_25519):map__24827_25519);
var then_25521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24827_25520__$1,new cljs.core.Keyword(null,"then","then",460598070));
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
var vec__24893 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__24894 = cljs.core.seq(vec__24893);
var first__24895 = cljs.core.first(seq__24894);
var seq__24894__$1 = cljs.core.next(seq__24894);
var p = first__24895;
var first__24895__$1 = cljs.core.first(seq__24894__$1);
var seq__24894__$2 = cljs.core.next(seq__24894__$1);
var ts = first__24895__$1;
var first__24895__$2 = cljs.core.first(seq__24894__$2);
var seq__24894__$3 = cljs.core.next(seq__24894__$2);
var n = first__24895__$2;
var xs = seq__24894__$3;
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
var vec__24902 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__24903 = cljs.core.seq(vec__24902);
var first__24904 = cljs.core.first(seq__24903);
var seq__24903__$1 = cljs.core.next(seq__24903);
var p = first__24904;
var first__24904__$1 = cljs.core.first(seq__24903__$1);
var seq__24903__$2 = cljs.core.next(seq__24903__$1);
var ts = first__24904__$1;
var xs = seq__24903__$2;
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
var G__24912 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__24911 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__24911.cljs$core$IFn$_invoke$arity$1 ? fexpr__24911.cljs$core$IFn$_invoke$arity$1(G__24912) : fexpr__24911.call(null,G__24912));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__24915 = arguments.length;
switch (G__24915) {
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
var vec__24923 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24913_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__24913_SHARP_);
} else {
return p1__24913_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__24924 = cljs.core.seq(vec__24923);
var first__24925 = cljs.core.first(seq__24924);
var seq__24924__$1 = cljs.core.next(seq__24924);
var x = first__24925;
var ys = seq__24924__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__24926 = cljs.core.seq(ys);
var chunk__24927 = null;
var count__24928 = (0);
var i__24929 = (0);
while(true){
if((i__24929 < count__24928)){
var next_line = chunk__24927.cljs$core$IIndexed$_nth$arity$2(null,i__24929);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__25548 = seq__24926;
var G__25549 = chunk__24927;
var G__25550 = count__24928;
var G__25551 = (i__24929 + (1));
seq__24926 = G__25548;
chunk__24927 = G__25549;
count__24928 = G__25550;
i__24929 = G__25551;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__24926);
if(temp__5735__auto__){
var seq__24926__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24926__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24926__$1);
var G__25552 = cljs.core.chunk_rest(seq__24926__$1);
var G__25553 = c__4556__auto__;
var G__25554 = cljs.core.count(c__4556__auto__);
var G__25555 = (0);
seq__24926 = G__25552;
chunk__24927 = G__25553;
count__24928 = G__25554;
i__24929 = G__25555;
continue;
} else {
var next_line = cljs.core.first(seq__24926__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__25556 = cljs.core.next(seq__24926__$1);
var G__25557 = null;
var G__25558 = (0);
var G__25559 = (0);
seq__24926 = G__25556;
chunk__24927 = G__25557;
count__24928 = G__25558;
i__24929 = G__25559;
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

var seq__24939_25560 = cljs.core.seq(docs__$2);
var chunk__24940_25561 = null;
var count__24941_25562 = (0);
var i__24942_25563 = (0);
while(true){
if((i__24942_25563 < count__24941_25562)){
var e_25564 = chunk__24940_25561.cljs$core$IIndexed$_nth$arity$2(null,i__24942_25563);
if(cljs.core.truth_(e_25564)){
print_comment_lines(e_25564);
} else {
}


var G__25565 = seq__24939_25560;
var G__25566 = chunk__24940_25561;
var G__25567 = count__24941_25562;
var G__25568 = (i__24942_25563 + (1));
seq__24939_25560 = G__25565;
chunk__24940_25561 = G__25566;
count__24941_25562 = G__25567;
i__24942_25563 = G__25568;
continue;
} else {
var temp__5735__auto___25569 = cljs.core.seq(seq__24939_25560);
if(temp__5735__auto___25569){
var seq__24939_25570__$1 = temp__5735__auto___25569;
if(cljs.core.chunked_seq_QMARK_(seq__24939_25570__$1)){
var c__4556__auto___25571 = cljs.core.chunk_first(seq__24939_25570__$1);
var G__25572 = cljs.core.chunk_rest(seq__24939_25570__$1);
var G__25573 = c__4556__auto___25571;
var G__25574 = cljs.core.count(c__4556__auto___25571);
var G__25575 = (0);
seq__24939_25560 = G__25572;
chunk__24940_25561 = G__25573;
count__24941_25562 = G__25574;
i__24942_25563 = G__25575;
continue;
} else {
var e_25576 = cljs.core.first(seq__24939_25570__$1);
if(cljs.core.truth_(e_25576)){
print_comment_lines(e_25576);
} else {
}


var G__25577 = cljs.core.next(seq__24939_25570__$1);
var G__25578 = null;
var G__25579 = (0);
var G__25580 = (0);
seq__24939_25560 = G__25577;
chunk__24940_25561 = G__25578;
count__24941_25562 = G__25579;
i__24942_25563 = G__25580;
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
var and__4115__auto__ = cljs.core.some((function (p1__24944_SHARP_){
return goog.string.startsWith(p1__24944_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__24948){
var map__24949 = p__24948;
var map__24949__$1 = (((((!((map__24949 == null))))?(((((map__24949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24949):map__24949);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24949__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24949__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24949__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24949__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24949__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24949__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24949__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24949__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24949__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24949__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__24958){
var map__24959 = p__24958;
var map__24959__$1 = (((((!((map__24959 == null))))?(((((map__24959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24959):map__24959);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24959__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24959__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24959__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__24961_25581 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__24962_25582 = null;
var count__24966_25583 = (0);
var i__24968_25584 = (0);
while(true){
if((i__24968_25584 < count__24966_25583)){
var vec__24998_25585 = chunk__24962_25582.cljs$core$IIndexed$_nth$arity$2(null,i__24968_25584);
var i_25586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24998_25585,(0),null);
var param_25587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24998_25585,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_25587);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__25588 = seq__24961_25581;
var G__25589 = chunk__24962_25582;
var G__25590 = count__24966_25583;
var G__25591 = (i__24968_25584 + (1));
seq__24961_25581 = G__25588;
chunk__24962_25582 = G__25589;
count__24966_25583 = G__25590;
i__24968_25584 = G__25591;
continue;
} else {
var temp__5735__auto___25592 = cljs.core.seq(seq__24961_25581);
if(temp__5735__auto___25592){
var seq__24961_25593__$1 = temp__5735__auto___25592;
if(cljs.core.chunked_seq_QMARK_(seq__24961_25593__$1)){
var c__4556__auto___25594 = cljs.core.chunk_first(seq__24961_25593__$1);
var G__25595 = cljs.core.chunk_rest(seq__24961_25593__$1);
var G__25596 = c__4556__auto___25594;
var G__25597 = cljs.core.count(c__4556__auto___25594);
var G__25598 = (0);
seq__24961_25581 = G__25595;
chunk__24962_25582 = G__25596;
count__24966_25583 = G__25597;
i__24968_25584 = G__25598;
continue;
} else {
var vec__25001_25599 = cljs.core.first(seq__24961_25593__$1);
var i_25600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25001_25599,(0),null);
var param_25601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25001_25599,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_25601);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__25602 = cljs.core.next(seq__24961_25593__$1);
var G__25603 = null;
var G__25604 = (0);
var G__25605 = (0);
seq__24961_25581 = G__25602;
chunk__24962_25582 = G__25603;
count__24966_25583 = G__25604;
i__24968_25584 = G__25605;
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

var seq__25004_25606 = cljs.core.seq(params);
var chunk__25005_25607 = null;
var count__25006_25608 = (0);
var i__25007_25609 = (0);
while(true){
if((i__25007_25609 < count__25006_25608)){
var param_25610 = chunk__25005_25607.cljs$core$IIndexed$_nth$arity$2(null,i__25007_25609);
cljs.compiler.emit(param_25610);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25610,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25611 = seq__25004_25606;
var G__25612 = chunk__25005_25607;
var G__25613 = count__25006_25608;
var G__25614 = (i__25007_25609 + (1));
seq__25004_25606 = G__25611;
chunk__25005_25607 = G__25612;
count__25006_25608 = G__25613;
i__25007_25609 = G__25614;
continue;
} else {
var temp__5735__auto___25615 = cljs.core.seq(seq__25004_25606);
if(temp__5735__auto___25615){
var seq__25004_25616__$1 = temp__5735__auto___25615;
if(cljs.core.chunked_seq_QMARK_(seq__25004_25616__$1)){
var c__4556__auto___25617 = cljs.core.chunk_first(seq__25004_25616__$1);
var G__25618 = cljs.core.chunk_rest(seq__25004_25616__$1);
var G__25619 = c__4556__auto___25617;
var G__25620 = cljs.core.count(c__4556__auto___25617);
var G__25621 = (0);
seq__25004_25606 = G__25618;
chunk__25005_25607 = G__25619;
count__25006_25608 = G__25620;
i__25007_25609 = G__25621;
continue;
} else {
var param_25622 = cljs.core.first(seq__25004_25616__$1);
cljs.compiler.emit(param_25622);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25622,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25623 = cljs.core.next(seq__25004_25616__$1);
var G__25624 = null;
var G__25625 = (0);
var G__25626 = (0);
seq__25004_25606 = G__25623;
chunk__25005_25607 = G__25624;
count__25006_25608 = G__25625;
i__25007_25609 = G__25626;
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

var seq__25008_25627 = cljs.core.seq(params);
var chunk__25009_25628 = null;
var count__25010_25629 = (0);
var i__25011_25630 = (0);
while(true){
if((i__25011_25630 < count__25010_25629)){
var param_25631 = chunk__25009_25628.cljs$core$IIndexed$_nth$arity$2(null,i__25011_25630);
cljs.compiler.emit(param_25631);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25631,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25632 = seq__25008_25627;
var G__25633 = chunk__25009_25628;
var G__25634 = count__25010_25629;
var G__25635 = (i__25011_25630 + (1));
seq__25008_25627 = G__25632;
chunk__25009_25628 = G__25633;
count__25010_25629 = G__25634;
i__25011_25630 = G__25635;
continue;
} else {
var temp__5735__auto___25636 = cljs.core.seq(seq__25008_25627);
if(temp__5735__auto___25636){
var seq__25008_25637__$1 = temp__5735__auto___25636;
if(cljs.core.chunked_seq_QMARK_(seq__25008_25637__$1)){
var c__4556__auto___25638 = cljs.core.chunk_first(seq__25008_25637__$1);
var G__25639 = cljs.core.chunk_rest(seq__25008_25637__$1);
var G__25640 = c__4556__auto___25638;
var G__25641 = cljs.core.count(c__4556__auto___25638);
var G__25642 = (0);
seq__25008_25627 = G__25639;
chunk__25009_25628 = G__25640;
count__25010_25629 = G__25641;
i__25011_25630 = G__25642;
continue;
} else {
var param_25643 = cljs.core.first(seq__25008_25637__$1);
cljs.compiler.emit(param_25643);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25643,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25644 = cljs.core.next(seq__25008_25637__$1);
var G__25645 = null;
var G__25646 = (0);
var G__25647 = (0);
seq__25008_25627 = G__25644;
chunk__25009_25628 = G__25645;
count__25010_25629 = G__25646;
i__25011_25630 = G__25647;
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
var seq__25012 = cljs.core.seq(params);
var chunk__25013 = null;
var count__25014 = (0);
var i__25015 = (0);
while(true){
if((i__25015 < count__25014)){
var param = chunk__25013.cljs$core$IIndexed$_nth$arity$2(null,i__25015);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25648 = seq__25012;
var G__25649 = chunk__25013;
var G__25650 = count__25014;
var G__25651 = (i__25015 + (1));
seq__25012 = G__25648;
chunk__25013 = G__25649;
count__25014 = G__25650;
i__25015 = G__25651;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__25012);
if(temp__5735__auto__){
var seq__25012__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25012__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__25012__$1);
var G__25652 = cljs.core.chunk_rest(seq__25012__$1);
var G__25653 = c__4556__auto__;
var G__25654 = cljs.core.count(c__4556__auto__);
var G__25655 = (0);
seq__25012 = G__25652;
chunk__25013 = G__25653;
count__25014 = G__25654;
i__25015 = G__25655;
continue;
} else {
var param = cljs.core.first(seq__25012__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25656 = cljs.core.next(seq__25012__$1);
var G__25657 = null;
var G__25658 = (0);
var G__25659 = (0);
seq__25012 = G__25656;
chunk__25013 = G__25657;
count__25014 = G__25658;
i__25015 = G__25659;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__25028){
var map__25029 = p__25028;
var map__25029__$1 = (((((!((map__25029 == null))))?(((((map__25029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25029):map__25029);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25029__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25029__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25029__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25029__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25029__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25029__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__25033){
var map__25034 = p__25033;
var map__25034__$1 = (((((!((map__25034 == null))))?(((((map__25034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25034):map__25034);
var f = map__25034__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25034__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25034__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25034__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25034__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25034__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25034__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25034__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25034__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
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

var seq__25036_25663 = cljs.core.seq(params);
var chunk__25037_25664 = null;
var count__25038_25665 = (0);
var i__25039_25666 = (0);
while(true){
if((i__25039_25666 < count__25038_25665)){
var param_25667 = chunk__25037_25664.cljs$core$IIndexed$_nth$arity$2(null,i__25039_25666);
cljs.compiler.emit(param_25667);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25667,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25668 = seq__25036_25663;
var G__25669 = chunk__25037_25664;
var G__25670 = count__25038_25665;
var G__25671 = (i__25039_25666 + (1));
seq__25036_25663 = G__25668;
chunk__25037_25664 = G__25669;
count__25038_25665 = G__25670;
i__25039_25666 = G__25671;
continue;
} else {
var temp__5735__auto___25672 = cljs.core.seq(seq__25036_25663);
if(temp__5735__auto___25672){
var seq__25036_25673__$1 = temp__5735__auto___25672;
if(cljs.core.chunked_seq_QMARK_(seq__25036_25673__$1)){
var c__4556__auto___25674 = cljs.core.chunk_first(seq__25036_25673__$1);
var G__25675 = cljs.core.chunk_rest(seq__25036_25673__$1);
var G__25676 = c__4556__auto___25674;
var G__25677 = cljs.core.count(c__4556__auto___25674);
var G__25678 = (0);
seq__25036_25663 = G__25675;
chunk__25037_25664 = G__25676;
count__25038_25665 = G__25677;
i__25039_25666 = G__25678;
continue;
} else {
var param_25679 = cljs.core.first(seq__25036_25673__$1);
cljs.compiler.emit(param_25679);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25679,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25680 = cljs.core.next(seq__25036_25673__$1);
var G__25681 = null;
var G__25682 = (0);
var G__25683 = (0);
seq__25036_25663 = G__25680;
chunk__25037_25664 = G__25681;
count__25038_25665 = G__25682;
i__25039_25666 = G__25683;
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

var seq__25042_25685 = cljs.core.seq(params);
var chunk__25043_25686 = null;
var count__25044_25687 = (0);
var i__25045_25688 = (0);
while(true){
if((i__25045_25688 < count__25044_25687)){
var param_25689 = chunk__25043_25686.cljs$core$IIndexed$_nth$arity$2(null,i__25045_25688);
cljs.compiler.emit(param_25689);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25689,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25690 = seq__25042_25685;
var G__25691 = chunk__25043_25686;
var G__25692 = count__25044_25687;
var G__25693 = (i__25045_25688 + (1));
seq__25042_25685 = G__25690;
chunk__25043_25686 = G__25691;
count__25044_25687 = G__25692;
i__25045_25688 = G__25693;
continue;
} else {
var temp__5735__auto___25694 = cljs.core.seq(seq__25042_25685);
if(temp__5735__auto___25694){
var seq__25042_25695__$1 = temp__5735__auto___25694;
if(cljs.core.chunked_seq_QMARK_(seq__25042_25695__$1)){
var c__4556__auto___25696 = cljs.core.chunk_first(seq__25042_25695__$1);
var G__25697 = cljs.core.chunk_rest(seq__25042_25695__$1);
var G__25698 = c__4556__auto___25696;
var G__25699 = cljs.core.count(c__4556__auto___25696);
var G__25700 = (0);
seq__25042_25685 = G__25697;
chunk__25043_25686 = G__25698;
count__25044_25687 = G__25699;
i__25045_25688 = G__25700;
continue;
} else {
var param_25701 = cljs.core.first(seq__25042_25695__$1);
cljs.compiler.emit(param_25701);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25701,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25702 = cljs.core.next(seq__25042_25695__$1);
var G__25703 = null;
var G__25704 = (0);
var G__25705 = (0);
seq__25042_25685 = G__25702;
chunk__25043_25686 = G__25703;
count__25044_25687 = G__25704;
i__25045_25688 = G__25705;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__25049){
var map__25050 = p__25049;
var map__25050__$1 = (((((!((map__25050 == null))))?(((((map__25050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25050):map__25050);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25050__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25050__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25050__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25050__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25050__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25050__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25050__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25050__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25046_SHARP_){
var and__4115__auto__ = p1__25046_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__25046_SHARP_));
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
var ms_25710 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__25047_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__25047_SHARP_)));
}),cljs.core.seq(mmap_25709));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_25707," = null;");

var seq__25052_25711 = cljs.core.seq(ms_25710);
var chunk__25053_25712 = null;
var count__25054_25713 = (0);
var i__25055_25714 = (0);
while(true){
if((i__25055_25714 < count__25054_25713)){
var vec__25062_25715 = chunk__25053_25712.cljs$core$IIndexed$_nth$arity$2(null,i__25055_25714);
var n_25716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25062_25715,(0),null);
var meth_25717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25062_25715,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_25716," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25717))){
cljs.compiler.emit_variadic_fn_method(meth_25717);
} else {
cljs.compiler.emit_fn_method(meth_25717);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__25718 = seq__25052_25711;
var G__25719 = chunk__25053_25712;
var G__25720 = count__25054_25713;
var G__25721 = (i__25055_25714 + (1));
seq__25052_25711 = G__25718;
chunk__25053_25712 = G__25719;
count__25054_25713 = G__25720;
i__25055_25714 = G__25721;
continue;
} else {
var temp__5735__auto___25722 = cljs.core.seq(seq__25052_25711);
if(temp__5735__auto___25722){
var seq__25052_25723__$1 = temp__5735__auto___25722;
if(cljs.core.chunked_seq_QMARK_(seq__25052_25723__$1)){
var c__4556__auto___25724 = cljs.core.chunk_first(seq__25052_25723__$1);
var G__25725 = cljs.core.chunk_rest(seq__25052_25723__$1);
var G__25726 = c__4556__auto___25724;
var G__25727 = cljs.core.count(c__4556__auto___25724);
var G__25728 = (0);
seq__25052_25711 = G__25725;
chunk__25053_25712 = G__25726;
count__25054_25713 = G__25727;
i__25055_25714 = G__25728;
continue;
} else {
var vec__25065_25729 = cljs.core.first(seq__25052_25723__$1);
var n_25730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25065_25729,(0),null);
var meth_25731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25065_25729,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_25730," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25731))){
cljs.compiler.emit_variadic_fn_method(meth_25731);
} else {
cljs.compiler.emit_fn_method(meth_25731);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__25732 = cljs.core.next(seq__25052_25723__$1);
var G__25733 = null;
var G__25734 = (0);
var G__25735 = (0);
seq__25052_25711 = G__25732;
chunk__25053_25712 = G__25733;
count__25054_25713 = G__25734;
i__25055_25714 = G__25735;
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

var seq__25068_25736 = cljs.core.seq(ms_25710);
var chunk__25069_25737 = null;
var count__25070_25738 = (0);
var i__25071_25739 = (0);
while(true){
if((i__25071_25739 < count__25070_25738)){
var vec__25081_25740 = chunk__25069_25737.cljs$core$IIndexed$_nth$arity$2(null,i__25071_25739);
var n_25741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25081_25740,(0),null);
var meth_25742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25081_25740,(1),null);
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


var G__25746 = seq__25068_25736;
var G__25747 = chunk__25069_25737;
var G__25748 = count__25070_25738;
var G__25749 = (i__25071_25739 + (1));
seq__25068_25736 = G__25746;
chunk__25069_25737 = G__25747;
count__25070_25738 = G__25748;
i__25071_25739 = G__25749;
continue;
} else {
var temp__5735__auto___25750 = cljs.core.seq(seq__25068_25736);
if(temp__5735__auto___25750){
var seq__25068_25751__$1 = temp__5735__auto___25750;
if(cljs.core.chunked_seq_QMARK_(seq__25068_25751__$1)){
var c__4556__auto___25752 = cljs.core.chunk_first(seq__25068_25751__$1);
var G__25753 = cljs.core.chunk_rest(seq__25068_25751__$1);
var G__25754 = c__4556__auto___25752;
var G__25755 = cljs.core.count(c__4556__auto___25752);
var G__25756 = (0);
seq__25068_25736 = G__25753;
chunk__25069_25737 = G__25754;
count__25070_25738 = G__25755;
i__25071_25739 = G__25756;
continue;
} else {
var vec__25097_25757 = cljs.core.first(seq__25068_25751__$1);
var n_25758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25097_25757,(0),null);
var meth_25759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25097_25757,(1),null);
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


var G__25763 = cljs.core.next(seq__25068_25751__$1);
var G__25764 = null;
var G__25765 = (0);
var G__25766 = (0);
seq__25068_25736 = G__25763;
chunk__25069_25737 = G__25764;
count__25070_25738 = G__25765;
i__25071_25739 = G__25766;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25707,".cljs$lang$applyTo = ",cljs.core.some((function (p1__25048_SHARP_){
var vec__25106 = p1__25048_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25106,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25106,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_25710),".cljs$lang$applyTo;");
} else {
}

var seq__25109_25768 = cljs.core.seq(ms_25710);
var chunk__25110_25769 = null;
var count__25111_25770 = (0);
var i__25112_25771 = (0);
while(true){
if((i__25112_25771 < count__25111_25770)){
var vec__25119_25772 = chunk__25110_25769.cljs$core$IIndexed$_nth$arity$2(null,i__25112_25771);
var n_25773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25119_25772,(0),null);
var meth_25774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25119_25772,(1),null);
var c_25775 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25774));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25774))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25707,".cljs$core$IFn$_invoke$arity$variadic = ",n_25773,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_25707,".cljs$core$IFn$_invoke$arity$",c_25775," = ",n_25773,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__25776 = seq__25109_25768;
var G__25777 = chunk__25110_25769;
var G__25778 = count__25111_25770;
var G__25779 = (i__25112_25771 + (1));
seq__25109_25768 = G__25776;
chunk__25110_25769 = G__25777;
count__25111_25770 = G__25778;
i__25112_25771 = G__25779;
continue;
} else {
var temp__5735__auto___25780 = cljs.core.seq(seq__25109_25768);
if(temp__5735__auto___25780){
var seq__25109_25781__$1 = temp__5735__auto___25780;
if(cljs.core.chunked_seq_QMARK_(seq__25109_25781__$1)){
var c__4556__auto___25782 = cljs.core.chunk_first(seq__25109_25781__$1);
var G__25783 = cljs.core.chunk_rest(seq__25109_25781__$1);
var G__25784 = c__4556__auto___25782;
var G__25785 = cljs.core.count(c__4556__auto___25782);
var G__25786 = (0);
seq__25109_25768 = G__25783;
chunk__25110_25769 = G__25784;
count__25111_25770 = G__25785;
i__25112_25771 = G__25786;
continue;
} else {
var vec__25122_25787 = cljs.core.first(seq__25109_25781__$1);
var n_25788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25122_25787,(0),null);
var meth_25789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25122_25787,(1),null);
var c_25790 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25789));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25789))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25707,".cljs$core$IFn$_invoke$arity$variadic = ",n_25788,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_25707,".cljs$core$IFn$_invoke$arity$",c_25790," = ",n_25788,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__25791 = cljs.core.next(seq__25109_25781__$1);
var G__25792 = null;
var G__25793 = (0);
var G__25794 = (0);
seq__25109_25768 = G__25791;
chunk__25110_25769 = G__25792;
count__25111_25770 = G__25793;
i__25112_25771 = G__25794;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__25125){
var map__25126 = p__25125;
var map__25126__$1 = (((((!((map__25126 == null))))?(((((map__25126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25126):map__25126);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25126__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25126__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25126__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__25128_25795 = cljs.core.seq(statements);
var chunk__25129_25796 = null;
var count__25130_25797 = (0);
var i__25131_25798 = (0);
while(true){
if((i__25131_25798 < count__25130_25797)){
var s_25799 = chunk__25129_25796.cljs$core$IIndexed$_nth$arity$2(null,i__25131_25798);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_25799);


var G__25800 = seq__25128_25795;
var G__25801 = chunk__25129_25796;
var G__25802 = count__25130_25797;
var G__25803 = (i__25131_25798 + (1));
seq__25128_25795 = G__25800;
chunk__25129_25796 = G__25801;
count__25130_25797 = G__25802;
i__25131_25798 = G__25803;
continue;
} else {
var temp__5735__auto___25804 = cljs.core.seq(seq__25128_25795);
if(temp__5735__auto___25804){
var seq__25128_25805__$1 = temp__5735__auto___25804;
if(cljs.core.chunked_seq_QMARK_(seq__25128_25805__$1)){
var c__4556__auto___25806 = cljs.core.chunk_first(seq__25128_25805__$1);
var G__25807 = cljs.core.chunk_rest(seq__25128_25805__$1);
var G__25808 = c__4556__auto___25806;
var G__25809 = cljs.core.count(c__4556__auto___25806);
var G__25810 = (0);
seq__25128_25795 = G__25807;
chunk__25129_25796 = G__25808;
count__25130_25797 = G__25809;
i__25131_25798 = G__25810;
continue;
} else {
var s_25811 = cljs.core.first(seq__25128_25805__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_25811);


var G__25812 = cljs.core.next(seq__25128_25805__$1);
var G__25813 = null;
var G__25814 = (0);
var G__25815 = (0);
seq__25128_25795 = G__25812;
chunk__25129_25796 = G__25813;
count__25130_25797 = G__25814;
i__25131_25798 = G__25815;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__25132){
var map__25133 = p__25132;
var map__25133__$1 = (((((!((map__25133 == null))))?(((((map__25133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25133):map__25133);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25133__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25133__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25133__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25133__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25133__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__25135,is_loop){
var map__25136 = p__25135;
var map__25136__$1 = (((((!((map__25136 == null))))?(((((map__25136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25136):map__25136);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25136__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25136__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25136__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__25138_25816 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__25139_25817 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__25139_25817);

try{var seq__25142_25818 = cljs.core.seq(bindings);
var chunk__25143_25819 = null;
var count__25144_25820 = (0);
var i__25145_25821 = (0);
while(true){
if((i__25145_25821 < count__25144_25820)){
var map__25150_25822 = chunk__25143_25819.cljs$core$IIndexed$_nth$arity$2(null,i__25145_25821);
var map__25150_25823__$1 = (((((!((map__25150_25822 == null))))?(((((map__25150_25822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25150_25822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25150_25822):map__25150_25822);
var binding_25824 = map__25150_25823__$1;
var init_25825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25150_25823__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_25824);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_25825,";");


var G__25826 = seq__25142_25818;
var G__25827 = chunk__25143_25819;
var G__25828 = count__25144_25820;
var G__25829 = (i__25145_25821 + (1));
seq__25142_25818 = G__25826;
chunk__25143_25819 = G__25827;
count__25144_25820 = G__25828;
i__25145_25821 = G__25829;
continue;
} else {
var temp__5735__auto___25830 = cljs.core.seq(seq__25142_25818);
if(temp__5735__auto___25830){
var seq__25142_25831__$1 = temp__5735__auto___25830;
if(cljs.core.chunked_seq_QMARK_(seq__25142_25831__$1)){
var c__4556__auto___25832 = cljs.core.chunk_first(seq__25142_25831__$1);
var G__25833 = cljs.core.chunk_rest(seq__25142_25831__$1);
var G__25834 = c__4556__auto___25832;
var G__25835 = cljs.core.count(c__4556__auto___25832);
var G__25836 = (0);
seq__25142_25818 = G__25833;
chunk__25143_25819 = G__25834;
count__25144_25820 = G__25835;
i__25145_25821 = G__25836;
continue;
} else {
var map__25152_25837 = cljs.core.first(seq__25142_25831__$1);
var map__25152_25838__$1 = (((((!((map__25152_25837 == null))))?(((((map__25152_25837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25152_25837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25152_25837):map__25152_25837);
var binding_25839 = map__25152_25838__$1;
var init_25840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25152_25838__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_25839);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_25840,";");


var G__25841 = cljs.core.next(seq__25142_25831__$1);
var G__25842 = null;
var G__25843 = (0);
var G__25844 = (0);
seq__25142_25818 = G__25841;
chunk__25143_25819 = G__25842;
count__25144_25820 = G__25843;
i__25145_25821 = G__25844;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__25138_25816);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__25154){
var map__25155 = p__25154;
var map__25155__$1 = (((((!((map__25155 == null))))?(((((map__25155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25155):map__25155);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25155__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25155__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25155__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__25157){
var map__25158 = p__25157;
var map__25158__$1 = (((((!((map__25158 == null))))?(((((map__25158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25158):map__25158);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25158__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25158__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25158__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__25160_25851 = cljs.core.seq(bindings);
var chunk__25161_25852 = null;
var count__25162_25853 = (0);
var i__25163_25854 = (0);
while(true){
if((i__25163_25854 < count__25162_25853)){
var map__25168_25855 = chunk__25161_25852.cljs$core$IIndexed$_nth$arity$2(null,i__25163_25854);
var map__25168_25856__$1 = (((((!((map__25168_25855 == null))))?(((((map__25168_25855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25168_25855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25168_25855):map__25168_25855);
var binding_25857 = map__25168_25856__$1;
var init_25858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25168_25856__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_25857)," = ",init_25858,";");


var G__25859 = seq__25160_25851;
var G__25860 = chunk__25161_25852;
var G__25861 = count__25162_25853;
var G__25862 = (i__25163_25854 + (1));
seq__25160_25851 = G__25859;
chunk__25161_25852 = G__25860;
count__25162_25853 = G__25861;
i__25163_25854 = G__25862;
continue;
} else {
var temp__5735__auto___25863 = cljs.core.seq(seq__25160_25851);
if(temp__5735__auto___25863){
var seq__25160_25864__$1 = temp__5735__auto___25863;
if(cljs.core.chunked_seq_QMARK_(seq__25160_25864__$1)){
var c__4556__auto___25865 = cljs.core.chunk_first(seq__25160_25864__$1);
var G__25866 = cljs.core.chunk_rest(seq__25160_25864__$1);
var G__25867 = c__4556__auto___25865;
var G__25868 = cljs.core.count(c__4556__auto___25865);
var G__25869 = (0);
seq__25160_25851 = G__25866;
chunk__25161_25852 = G__25867;
count__25162_25853 = G__25868;
i__25163_25854 = G__25869;
continue;
} else {
var map__25170_25870 = cljs.core.first(seq__25160_25864__$1);
var map__25170_25871__$1 = (((((!((map__25170_25870 == null))))?(((((map__25170_25870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25170_25870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25170_25870):map__25170_25870);
var binding_25872 = map__25170_25871__$1;
var init_25873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25170_25871__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_25872)," = ",init_25873,";");


var G__25874 = cljs.core.next(seq__25160_25864__$1);
var G__25875 = null;
var G__25876 = (0);
var G__25877 = (0);
seq__25160_25851 = G__25874;
chunk__25161_25852 = G__25875;
count__25162_25853 = G__25876;
i__25163_25854 = G__25877;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__25174){
var map__25175 = p__25174;
var map__25175__$1 = (((((!((map__25175 == null))))?(((((map__25175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25175):map__25175);
var expr = map__25175__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25175__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25175__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25175__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
if(cljs.core.not((function (){var fexpr__25187 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__25187.cljs$core$IFn$_invoke$arity$1 ? fexpr__25187.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__25187.call(null,tag));
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
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__25189 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__25189.cljs$core$IFn$_invoke$arity$1 ? fexpr__25189.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__25189.call(null,first_arg_tag));
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
var vec__25177 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__25172_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25172_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__25173_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25173_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25177,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25177,(1),null);
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
var pimpl_25878 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_25878,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_25879 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_25879,args)),(((mfa_25879 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_25879,args)),"], 0))"], 0));
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
var G__25195 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__25194 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__25194.cljs$core$IFn$_invoke$arity$1 ? fexpr__25194.cljs$core$IFn$_invoke$arity$1(G__25195) : fexpr__25194.call(null,G__25195));
} else {
return and__4115__auto__;
}
})())){
var fprop_25885 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_25885," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_25885,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_25885," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_25885,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__25196){
var map__25197 = p__25196;
var map__25197__$1 = (((((!((map__25197 == null))))?(((((map__25197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25197):map__25197);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25197__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25197__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25197__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__25200){
var map__25201 = p__25200;
var map__25201__$1 = (((((!((map__25201 == null))))?(((((map__25201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25201):map__25201);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25201__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25201__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25201__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__25203 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__25203__$1 = (((((!((map__25203 == null))))?(((((map__25203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25203):map__25203);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25203__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25203__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__25204 = options;
var map__25204__$1 = (((((!((map__25204 == null))))?(((((map__25204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25204):map__25204);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25204__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25204__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25204__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__25205 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__25210 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__25210__$1 = (((((!((map__25210 == null))))?(((((map__25210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25210):map__25210);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25210__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25210__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25205,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25205,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__25212_25891 = cljs.core.seq(libs_to_load);
var chunk__25213_25892 = null;
var count__25214_25893 = (0);
var i__25215_25894 = (0);
while(true){
if((i__25215_25894 < count__25214_25893)){
var lib_25895 = chunk__25213_25892.cljs$core$IIndexed$_nth$arity$2(null,i__25215_25894);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_25895)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25895),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25895),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25895),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25895),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_25895,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25895),"');");
}

}
}
}


var G__25896 = seq__25212_25891;
var G__25897 = chunk__25213_25892;
var G__25898 = count__25214_25893;
var G__25899 = (i__25215_25894 + (1));
seq__25212_25891 = G__25896;
chunk__25213_25892 = G__25897;
count__25214_25893 = G__25898;
i__25215_25894 = G__25899;
continue;
} else {
var temp__5735__auto___25900 = cljs.core.seq(seq__25212_25891);
if(temp__5735__auto___25900){
var seq__25212_25901__$1 = temp__5735__auto___25900;
if(cljs.core.chunked_seq_QMARK_(seq__25212_25901__$1)){
var c__4556__auto___25902 = cljs.core.chunk_first(seq__25212_25901__$1);
var G__25903 = cljs.core.chunk_rest(seq__25212_25901__$1);
var G__25904 = c__4556__auto___25902;
var G__25905 = cljs.core.count(c__4556__auto___25902);
var G__25906 = (0);
seq__25212_25891 = G__25903;
chunk__25213_25892 = G__25904;
count__25214_25893 = G__25905;
i__25215_25894 = G__25906;
continue;
} else {
var lib_25907 = cljs.core.first(seq__25212_25901__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_25907)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25907),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25907),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25907),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25907),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_25907,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25907),"');");
}

}
}
}


var G__25908 = cljs.core.next(seq__25212_25901__$1);
var G__25909 = null;
var G__25910 = (0);
var G__25911 = (0);
seq__25212_25891 = G__25908;
chunk__25213_25892 = G__25909;
count__25214_25893 = G__25910;
i__25215_25894 = G__25911;
continue;
}
} else {
}
}
break;
}

var seq__25224_25912 = cljs.core.seq(node_libs);
var chunk__25225_25913 = null;
var count__25226_25914 = (0);
var i__25227_25915 = (0);
while(true){
if((i__25227_25915 < count__25226_25914)){
var lib_25916 = chunk__25225_25913.cljs$core$IIndexed$_nth$arity$2(null,i__25227_25915);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_25916)," = require('",lib_25916,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__25917 = seq__25224_25912;
var G__25918 = chunk__25225_25913;
var G__25919 = count__25226_25914;
var G__25920 = (i__25227_25915 + (1));
seq__25224_25912 = G__25917;
chunk__25225_25913 = G__25918;
count__25226_25914 = G__25919;
i__25227_25915 = G__25920;
continue;
} else {
var temp__5735__auto___25922 = cljs.core.seq(seq__25224_25912);
if(temp__5735__auto___25922){
var seq__25224_25923__$1 = temp__5735__auto___25922;
if(cljs.core.chunked_seq_QMARK_(seq__25224_25923__$1)){
var c__4556__auto___25924 = cljs.core.chunk_first(seq__25224_25923__$1);
var G__25925 = cljs.core.chunk_rest(seq__25224_25923__$1);
var G__25926 = c__4556__auto___25924;
var G__25927 = cljs.core.count(c__4556__auto___25924);
var G__25928 = (0);
seq__25224_25912 = G__25925;
chunk__25225_25913 = G__25926;
count__25226_25914 = G__25927;
i__25227_25915 = G__25928;
continue;
} else {
var lib_25931 = cljs.core.first(seq__25224_25923__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_25931)," = require('",lib_25931,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__25932 = cljs.core.next(seq__25224_25923__$1);
var G__25933 = null;
var G__25934 = (0);
var G__25935 = (0);
seq__25224_25912 = G__25932;
chunk__25225_25913 = G__25933;
count__25226_25914 = G__25934;
i__25227_25915 = G__25935;
continue;
}
} else {
}
}
break;
}

var seq__25228_25938 = cljs.core.seq(global_exports_libs);
var chunk__25229_25939 = null;
var count__25230_25940 = (0);
var i__25231_25941 = (0);
while(true){
if((i__25231_25941 < count__25230_25940)){
var lib_25942 = chunk__25229_25939.cljs$core$IIndexed$_nth$arity$2(null,i__25231_25941);
var map__25236_25943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_25942));
var map__25236_25944__$1 = (((((!((map__25236_25943 == null))))?(((((map__25236_25943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25236_25943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25236_25943):map__25236_25943);
var global_exports_25945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25236_25944__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_25945,lib_25942);


var G__25947 = seq__25228_25938;
var G__25948 = chunk__25229_25939;
var G__25949 = count__25230_25940;
var G__25950 = (i__25231_25941 + (1));
seq__25228_25938 = G__25947;
chunk__25229_25939 = G__25948;
count__25230_25940 = G__25949;
i__25231_25941 = G__25950;
continue;
} else {
var temp__5735__auto___25951 = cljs.core.seq(seq__25228_25938);
if(temp__5735__auto___25951){
var seq__25228_25952__$1 = temp__5735__auto___25951;
if(cljs.core.chunked_seq_QMARK_(seq__25228_25952__$1)){
var c__4556__auto___25953 = cljs.core.chunk_first(seq__25228_25952__$1);
var G__25954 = cljs.core.chunk_rest(seq__25228_25952__$1);
var G__25955 = c__4556__auto___25953;
var G__25956 = cljs.core.count(c__4556__auto___25953);
var G__25957 = (0);
seq__25228_25938 = G__25954;
chunk__25229_25939 = G__25955;
count__25230_25940 = G__25956;
i__25231_25941 = G__25957;
continue;
} else {
var lib_25960 = cljs.core.first(seq__25228_25952__$1);
var map__25238_25961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_25960));
var map__25238_25962__$1 = (((((!((map__25238_25961 == null))))?(((((map__25238_25961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25238_25961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25238_25961):map__25238_25961);
var global_exports_25963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25238_25962__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_25963,lib_25960);


var G__25966 = cljs.core.next(seq__25228_25952__$1);
var G__25967 = null;
var G__25968 = (0);
var G__25969 = (0);
seq__25228_25938 = G__25966;
chunk__25229_25939 = G__25967;
count__25230_25940 = G__25968;
i__25231_25941 = G__25969;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__25242){
var map__25243 = p__25242;
var map__25243__$1 = (((((!((map__25243 == null))))?(((((map__25243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25243):map__25243);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25243__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25243__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25243__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25243__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25243__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25243__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25243__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__25245){
var map__25246 = p__25245;
var map__25246__$1 = (((((!((map__25246 == null))))?(((((map__25246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25246):map__25246);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25246__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25246__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25246__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25246__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25246__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25246__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25246__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__25248){
var map__25249 = p__25248;
var map__25249__$1 = (((((!((map__25249 == null))))?(((((map__25249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25249):map__25249);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25249__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25249__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25249__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25249__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25249__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__25251_25973 = cljs.core.seq(protocols);
var chunk__25252_25974 = null;
var count__25253_25975 = (0);
var i__25254_25976 = (0);
while(true){
if((i__25254_25976 < count__25253_25975)){
var protocol_25977 = chunk__25252_25974.cljs$core$IIndexed$_nth$arity$2(null,i__25254_25976);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_25977)),"}");


var G__25978 = seq__25251_25973;
var G__25979 = chunk__25252_25974;
var G__25980 = count__25253_25975;
var G__25981 = (i__25254_25976 + (1));
seq__25251_25973 = G__25978;
chunk__25252_25974 = G__25979;
count__25253_25975 = G__25980;
i__25254_25976 = G__25981;
continue;
} else {
var temp__5735__auto___25982 = cljs.core.seq(seq__25251_25973);
if(temp__5735__auto___25982){
var seq__25251_25983__$1 = temp__5735__auto___25982;
if(cljs.core.chunked_seq_QMARK_(seq__25251_25983__$1)){
var c__4556__auto___25984 = cljs.core.chunk_first(seq__25251_25983__$1);
var G__25985 = cljs.core.chunk_rest(seq__25251_25983__$1);
var G__25986 = c__4556__auto___25984;
var G__25987 = cljs.core.count(c__4556__auto___25984);
var G__25988 = (0);
seq__25251_25973 = G__25985;
chunk__25252_25974 = G__25986;
count__25253_25975 = G__25987;
i__25254_25976 = G__25988;
continue;
} else {
var protocol_25989 = cljs.core.first(seq__25251_25983__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_25989)),"}");


var G__25990 = cljs.core.next(seq__25251_25983__$1);
var G__25991 = null;
var G__25992 = (0);
var G__25993 = (0);
seq__25251_25973 = G__25990;
chunk__25252_25974 = G__25991;
count__25253_25975 = G__25992;
i__25254_25976 = G__25993;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__25256_25994 = cljs.core.seq(fields__$1);
var chunk__25257_25995 = null;
var count__25258_25996 = (0);
var i__25259_25997 = (0);
while(true){
if((i__25259_25997 < count__25258_25996)){
var fld_25998 = chunk__25257_25995.cljs$core$IIndexed$_nth$arity$2(null,i__25259_25997);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_25998," = ",fld_25998,";");


var G__25999 = seq__25256_25994;
var G__26000 = chunk__25257_25995;
var G__26001 = count__25258_25996;
var G__26002 = (i__25259_25997 + (1));
seq__25256_25994 = G__25999;
chunk__25257_25995 = G__26000;
count__25258_25996 = G__26001;
i__25259_25997 = G__26002;
continue;
} else {
var temp__5735__auto___26003 = cljs.core.seq(seq__25256_25994);
if(temp__5735__auto___26003){
var seq__25256_26004__$1 = temp__5735__auto___26003;
if(cljs.core.chunked_seq_QMARK_(seq__25256_26004__$1)){
var c__4556__auto___26005 = cljs.core.chunk_first(seq__25256_26004__$1);
var G__26006 = cljs.core.chunk_rest(seq__25256_26004__$1);
var G__26007 = c__4556__auto___26005;
var G__26008 = cljs.core.count(c__4556__auto___26005);
var G__26009 = (0);
seq__25256_25994 = G__26006;
chunk__25257_25995 = G__26007;
count__25258_25996 = G__26008;
i__25259_25997 = G__26009;
continue;
} else {
var fld_26010 = cljs.core.first(seq__25256_26004__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_26010," = ",fld_26010,";");


var G__26011 = cljs.core.next(seq__25256_26004__$1);
var G__26012 = null;
var G__26013 = (0);
var G__26014 = (0);
seq__25256_25994 = G__26011;
chunk__25257_25995 = G__26012;
count__25258_25996 = G__26013;
i__25259_25997 = G__26014;
continue;
}
} else {
}
}
break;
}

var seq__25260_26015 = cljs.core.seq(pmasks);
var chunk__25261_26016 = null;
var count__25262_26017 = (0);
var i__25263_26018 = (0);
while(true){
if((i__25263_26018 < count__25262_26017)){
var vec__25270_26019 = chunk__25261_26016.cljs$core$IIndexed$_nth$arity$2(null,i__25263_26018);
var pno_26020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25270_26019,(0),null);
var pmask_26021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25270_26019,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_26020,"$ = ",pmask_26021,";");


var G__26022 = seq__25260_26015;
var G__26023 = chunk__25261_26016;
var G__26024 = count__25262_26017;
var G__26025 = (i__25263_26018 + (1));
seq__25260_26015 = G__26022;
chunk__25261_26016 = G__26023;
count__25262_26017 = G__26024;
i__25263_26018 = G__26025;
continue;
} else {
var temp__5735__auto___26026 = cljs.core.seq(seq__25260_26015);
if(temp__5735__auto___26026){
var seq__25260_26027__$1 = temp__5735__auto___26026;
if(cljs.core.chunked_seq_QMARK_(seq__25260_26027__$1)){
var c__4556__auto___26028 = cljs.core.chunk_first(seq__25260_26027__$1);
var G__26029 = cljs.core.chunk_rest(seq__25260_26027__$1);
var G__26030 = c__4556__auto___26028;
var G__26031 = cljs.core.count(c__4556__auto___26028);
var G__26032 = (0);
seq__25260_26015 = G__26029;
chunk__25261_26016 = G__26030;
count__25262_26017 = G__26031;
i__25263_26018 = G__26032;
continue;
} else {
var vec__25274_26033 = cljs.core.first(seq__25260_26027__$1);
var pno_26034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25274_26033,(0),null);
var pmask_26035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25274_26033,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_26034,"$ = ",pmask_26035,";");


var G__26036 = cljs.core.next(seq__25260_26027__$1);
var G__26037 = null;
var G__26038 = (0);
var G__26039 = (0);
seq__25260_26015 = G__26036;
chunk__25261_26016 = G__26037;
count__25262_26017 = G__26038;
i__25263_26018 = G__26039;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__25277){
var map__25278 = p__25277;
var map__25278__$1 = (((((!((map__25278 == null))))?(((((map__25278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25278):map__25278);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25278__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25278__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25278__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25278__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25278__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__25280_26040 = cljs.core.seq(protocols);
var chunk__25281_26041 = null;
var count__25282_26042 = (0);
var i__25283_26043 = (0);
while(true){
if((i__25283_26043 < count__25282_26042)){
var protocol_26044 = chunk__25281_26041.cljs$core$IIndexed$_nth$arity$2(null,i__25283_26043);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_26044)),"}");


var G__26045 = seq__25280_26040;
var G__26046 = chunk__25281_26041;
var G__26047 = count__25282_26042;
var G__26048 = (i__25283_26043 + (1));
seq__25280_26040 = G__26045;
chunk__25281_26041 = G__26046;
count__25282_26042 = G__26047;
i__25283_26043 = G__26048;
continue;
} else {
var temp__5735__auto___26049 = cljs.core.seq(seq__25280_26040);
if(temp__5735__auto___26049){
var seq__25280_26050__$1 = temp__5735__auto___26049;
if(cljs.core.chunked_seq_QMARK_(seq__25280_26050__$1)){
var c__4556__auto___26051 = cljs.core.chunk_first(seq__25280_26050__$1);
var G__26052 = cljs.core.chunk_rest(seq__25280_26050__$1);
var G__26053 = c__4556__auto___26051;
var G__26054 = cljs.core.count(c__4556__auto___26051);
var G__26055 = (0);
seq__25280_26040 = G__26052;
chunk__25281_26041 = G__26053;
count__25282_26042 = G__26054;
i__25283_26043 = G__26055;
continue;
} else {
var protocol_26056 = cljs.core.first(seq__25280_26050__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_26056)),"}");


var G__26057 = cljs.core.next(seq__25280_26050__$1);
var G__26058 = null;
var G__26059 = (0);
var G__26060 = (0);
seq__25280_26040 = G__26057;
chunk__25281_26041 = G__26058;
count__25282_26042 = G__26059;
i__25283_26043 = G__26060;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__25284_26061 = cljs.core.seq(fields__$1);
var chunk__25285_26062 = null;
var count__25286_26063 = (0);
var i__25287_26064 = (0);
while(true){
if((i__25287_26064 < count__25286_26063)){
var fld_26065 = chunk__25285_26062.cljs$core$IIndexed$_nth$arity$2(null,i__25287_26064);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_26065," = ",fld_26065,";");


var G__26066 = seq__25284_26061;
var G__26067 = chunk__25285_26062;
var G__26068 = count__25286_26063;
var G__26069 = (i__25287_26064 + (1));
seq__25284_26061 = G__26066;
chunk__25285_26062 = G__26067;
count__25286_26063 = G__26068;
i__25287_26064 = G__26069;
continue;
} else {
var temp__5735__auto___26070 = cljs.core.seq(seq__25284_26061);
if(temp__5735__auto___26070){
var seq__25284_26071__$1 = temp__5735__auto___26070;
if(cljs.core.chunked_seq_QMARK_(seq__25284_26071__$1)){
var c__4556__auto___26072 = cljs.core.chunk_first(seq__25284_26071__$1);
var G__26073 = cljs.core.chunk_rest(seq__25284_26071__$1);
var G__26074 = c__4556__auto___26072;
var G__26075 = cljs.core.count(c__4556__auto___26072);
var G__26076 = (0);
seq__25284_26061 = G__26073;
chunk__25285_26062 = G__26074;
count__25286_26063 = G__26075;
i__25287_26064 = G__26076;
continue;
} else {
var fld_26077 = cljs.core.first(seq__25284_26071__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_26077," = ",fld_26077,";");


var G__26078 = cljs.core.next(seq__25284_26071__$1);
var G__26079 = null;
var G__26080 = (0);
var G__26081 = (0);
seq__25284_26061 = G__26078;
chunk__25285_26062 = G__26079;
count__25286_26063 = G__26080;
i__25287_26064 = G__26081;
continue;
}
} else {
}
}
break;
}

var seq__25288_26082 = cljs.core.seq(pmasks);
var chunk__25289_26083 = null;
var count__25290_26084 = (0);
var i__25291_26085 = (0);
while(true){
if((i__25291_26085 < count__25290_26084)){
var vec__25298_26086 = chunk__25289_26083.cljs$core$IIndexed$_nth$arity$2(null,i__25291_26085);
var pno_26087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25298_26086,(0),null);
var pmask_26088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25298_26086,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_26087,"$ = ",pmask_26088,";");


var G__26089 = seq__25288_26082;
var G__26090 = chunk__25289_26083;
var G__26091 = count__25290_26084;
var G__26092 = (i__25291_26085 + (1));
seq__25288_26082 = G__26089;
chunk__25289_26083 = G__26090;
count__25290_26084 = G__26091;
i__25291_26085 = G__26092;
continue;
} else {
var temp__5735__auto___26093 = cljs.core.seq(seq__25288_26082);
if(temp__5735__auto___26093){
var seq__25288_26094__$1 = temp__5735__auto___26093;
if(cljs.core.chunked_seq_QMARK_(seq__25288_26094__$1)){
var c__4556__auto___26095 = cljs.core.chunk_first(seq__25288_26094__$1);
var G__26096 = cljs.core.chunk_rest(seq__25288_26094__$1);
var G__26097 = c__4556__auto___26095;
var G__26098 = cljs.core.count(c__4556__auto___26095);
var G__26099 = (0);
seq__25288_26082 = G__26096;
chunk__25289_26083 = G__26097;
count__25290_26084 = G__26098;
i__25291_26085 = G__26099;
continue;
} else {
var vec__25302_26100 = cljs.core.first(seq__25288_26094__$1);
var pno_26101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25302_26100,(0),null);
var pmask_26102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25302_26100,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_26101,"$ = ",pmask_26102,";");


var G__26103 = cljs.core.next(seq__25288_26094__$1);
var G__26104 = null;
var G__26105 = (0);
var G__26106 = (0);
seq__25288_26082 = G__26103;
chunk__25289_26083 = G__26104;
count__25290_26084 = G__26105;
i__25291_26085 = G__26106;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__25305){
var map__25306 = p__25305;
var map__25306__$1 = (((((!((map__25306 == null))))?(((((map__25306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25306):map__25306);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25306__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25306__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25306__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25306__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25306__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__25308){
var map__25309 = p__25308;
var map__25309__$1 = (((((!((map__25309 == null))))?(((((map__25309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25309):map__25309);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25309__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25309__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25309__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25309__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25309__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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

var seq__25315 = cljs.core.seq(table);
var chunk__25316 = null;
var count__25317 = (0);
var i__25318 = (0);
while(true){
if((i__25318 < count__25317)){
var vec__25333 = chunk__25316.cljs$core$IIndexed$_nth$arity$2(null,i__25318);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25333,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25333,(1),null);
var ns_26115 = cljs.core.namespace(sym);
var name_26116 = cljs.core.name(sym);
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


var G__26118 = seq__25315;
var G__26119 = chunk__25316;
var G__26120 = count__25317;
var G__26121 = (i__25318 + (1));
seq__25315 = G__26118;
chunk__25316 = G__26119;
count__25317 = G__26120;
i__25318 = G__26121;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__25315);
if(temp__5735__auto__){
var seq__25315__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25315__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__25315__$1);
var G__26122 = cljs.core.chunk_rest(seq__25315__$1);
var G__26123 = c__4556__auto__;
var G__26124 = cljs.core.count(c__4556__auto__);
var G__26125 = (0);
seq__25315 = G__26122;
chunk__25316 = G__26123;
count__25317 = G__26124;
i__25318 = G__26125;
continue;
} else {
var vec__25336 = cljs.core.first(seq__25315__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25336,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25336,(1),null);
var ns_26126 = cljs.core.namespace(sym);
var name_26127 = cljs.core.name(sym);
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


var G__26128 = cljs.core.next(seq__25315__$1);
var G__26129 = null;
var G__26130 = (0);
var G__26131 = (0);
seq__25315 = G__26128;
chunk__25316 = G__26129;
count__25317 = G__26130;
i__25318 = G__26131;
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
var G__25340 = arguments.length;
switch (G__25340) {
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
var k_26133 = cljs.core.first(ks);
var vec__25342_26134 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_26133);
var top_26135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25342_26134,(0),null);
var prefix_SINGLEQUOTE__26136 = vec__25342_26134;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_26133)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__26136) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_26135)) || (cljs.core.contains_QMARK_(known_externs,top_26135)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__26136)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_26135);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__26136)),";");
}
} else {
}

var m_26137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_26133);
if(cljs.core.empty_QMARK_(m_26137)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__26136,m_26137,top_level,known_externs);
}

var G__26138 = cljs.core.next(ks);
ks = G__26138;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);

