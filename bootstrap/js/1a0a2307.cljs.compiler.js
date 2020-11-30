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
var map__24521 = s;
var map__24521__$1 = (((((!((map__24521 == null))))?(((((map__24521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24521):map__24521);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24521__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24521__$1,new cljs.core.Keyword(null,"info","info",-317069002));
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
var G__25292 = (d__$2 + (1));
var G__25293 = shadow__$1;
d__$1 = G__25292;
G__24524__$1 = G__25293;
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
var G__24541 = arguments.length;
switch (G__24541) {
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
var G__24544 = cp;
switch (G__24544) {
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
var seq__24545_25298 = cljs.core.seq(s);
var chunk__24546_25299 = null;
var count__24547_25300 = (0);
var i__24548_25301 = (0);
while(true){
if((i__24548_25301 < count__24547_25300)){
var c_25302 = chunk__24546_25299.cljs$core$IIndexed$_nth$arity$2(null,i__24548_25301);
sb.append(cljs.compiler.escape_char(c_25302));


var G__25303 = seq__24545_25298;
var G__25304 = chunk__24546_25299;
var G__25305 = count__24547_25300;
var G__25306 = (i__24548_25301 + (1));
seq__24545_25298 = G__25303;
chunk__24546_25299 = G__25304;
count__24547_25300 = G__25305;
i__24548_25301 = G__25306;
continue;
} else {
var temp__5735__auto___25307 = cljs.core.seq(seq__24545_25298);
if(temp__5735__auto___25307){
var seq__24545_25308__$1 = temp__5735__auto___25307;
if(cljs.core.chunked_seq_QMARK_(seq__24545_25308__$1)){
var c__4556__auto___25309 = cljs.core.chunk_first(seq__24545_25308__$1);
var G__25310 = cljs.core.chunk_rest(seq__24545_25308__$1);
var G__25311 = c__4556__auto___25309;
var G__25312 = cljs.core.count(c__4556__auto___25309);
var G__25313 = (0);
seq__24545_25298 = G__25310;
chunk__24546_25299 = G__25311;
count__24547_25300 = G__25312;
i__24548_25301 = G__25313;
continue;
} else {
var c_25314 = cljs.core.first(seq__24545_25308__$1);
sb.append(cljs.compiler.escape_char(c_25314));


var G__25315 = cljs.core.next(seq__24545_25308__$1);
var G__25316 = null;
var G__25317 = (0);
var G__25318 = (0);
seq__24545_25298 = G__25315;
chunk__24546_25299 = G__25316;
count__24547_25300 = G__25317;
i__24548_25301 = G__25318;
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__24550 = cljs.core.get_global_hierarchy;
return (fexpr__24550.cljs$core$IFn$_invoke$arity$0 ? fexpr__24550.cljs$core$IFn$_invoke$arity$0() : fexpr__24550.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__24551_25319 = ast;
var map__24551_25320__$1 = (((((!((map__24551_25319 == null))))?(((((map__24551_25319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24551_25319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24551_25319):map__24551_25319);
var env_25321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24551_25320__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_25321))){
var map__24553_25322 = env_25321;
var map__24553_25323__$1 = (((((!((map__24553_25322 == null))))?(((((map__24553_25322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24553_25322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24553_25322):map__24553_25322);
var line_25324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24553_25323__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_25325 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24553_25323__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__24555 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__24557 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__24556 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__24556.cljs$core$IFn$_invoke$arity$1 ? fexpr__24556.cljs$core$IFn$_invoke$arity$1(G__24557) : fexpr__24556.call(null,G__24557));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24555,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__24555;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_25324 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_25325)?(column_25325 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
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
var G__24567 = arguments.length;
switch (G__24567) {
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
var len__4736__auto___25347 = arguments.length;
var i__4737__auto___25348 = (0);
while(true){
if((i__4737__auto___25348 < len__4736__auto___25347)){
args_arr__4757__auto__.push((arguments[i__4737__auto___25348]));

var G__25349 = (i__4737__auto___25348 + (1));
i__4737__auto___25348 = G__25349;
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
var s_25352 = (function (){var G__24568 = a;
if((!(typeof a === 'string'))){
return G__24568.toString();
} else {
return G__24568;
}
})();
var temp__5739__auto___25353 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___25353 == null)){
} else {
var sm_data_25354 = temp__5739__auto___25353;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_25354,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__24558_SHARP_){
return (p1__24558_SHARP_ + s_25352.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_25352], 0));

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

var seq__24584 = cljs.core.seq(xs);
var chunk__24585 = null;
var count__24586 = (0);
var i__24587 = (0);
while(true){
if((i__24587 < count__24586)){
var x = chunk__24585.cljs$core$IIndexed$_nth$arity$2(null,i__24587);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__25355 = seq__24584;
var G__25356 = chunk__24585;
var G__25357 = count__24586;
var G__25358 = (i__24587 + (1));
seq__24584 = G__25355;
chunk__24585 = G__25356;
count__24586 = G__25357;
i__24587 = G__25358;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__24584);
if(temp__5735__auto__){
var seq__24584__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24584__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24584__$1);
var G__25359 = cljs.core.chunk_rest(seq__24584__$1);
var G__25360 = c__4556__auto__;
var G__25361 = cljs.core.count(c__4556__auto__);
var G__25362 = (0);
seq__24584 = G__25359;
chunk__24585 = G__25360;
count__24586 = G__25361;
i__24587 = G__25362;
continue;
} else {
var x = cljs.core.first(seq__24584__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__25363 = cljs.core.next(seq__24584__$1);
var G__25364 = null;
var G__25365 = (0);
var G__25366 = (0);
seq__24584 = G__25363;
chunk__24585 = G__25364;
count__24586 = G__25365;
i__24587 = G__25366;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq24561){
var G__24562 = cljs.core.first(seq24561);
var seq24561__$1 = cljs.core.next(seq24561);
var G__24563 = cljs.core.first(seq24561__$1);
var seq24561__$2 = cljs.core.next(seq24561__$1);
var G__24564 = cljs.core.first(seq24561__$2);
var seq24561__$3 = cljs.core.next(seq24561__$2);
var G__24565 = cljs.core.first(seq24561__$3);
var seq24561__$4 = cljs.core.next(seq24561__$3);
var G__24566 = cljs.core.first(seq24561__$4);
var seq24561__$5 = cljs.core.next(seq24561__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24562,G__24563,G__24564,G__24565,G__24566,seq24561__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__24591){
var map__24592 = p__24591;
var map__24592__$1 = (((((!((map__24592 == null))))?(((((map__24592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24592):map__24592);
var m = map__24592__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24592__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
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
var len__4736__auto___25370 = arguments.length;
var i__4737__auto___25371 = (0);
while(true){
if((i__4737__auto___25371 < len__4736__auto___25370)){
args_arr__4757__auto__.push((arguments[i__4737__auto___25371]));

var G__25372 = (i__4737__auto___25371 + (1));
i__4737__auto___25371 = G__25372;
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

var seq__24612_25373 = cljs.core.seq(xs);
var chunk__24613_25374 = null;
var count__24614_25375 = (0);
var i__24615_25376 = (0);
while(true){
if((i__24615_25376 < count__24614_25375)){
var x_25377 = chunk__24613_25374.cljs$core$IIndexed$_nth$arity$2(null,i__24615_25376);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_25377);


var G__25378 = seq__24612_25373;
var G__25379 = chunk__24613_25374;
var G__25380 = count__24614_25375;
var G__25381 = (i__24615_25376 + (1));
seq__24612_25373 = G__25378;
chunk__24613_25374 = G__25379;
count__24614_25375 = G__25380;
i__24615_25376 = G__25381;
continue;
} else {
var temp__5735__auto___25382 = cljs.core.seq(seq__24612_25373);
if(temp__5735__auto___25382){
var seq__24612_25383__$1 = temp__5735__auto___25382;
if(cljs.core.chunked_seq_QMARK_(seq__24612_25383__$1)){
var c__4556__auto___25384 = cljs.core.chunk_first(seq__24612_25383__$1);
var G__25385 = cljs.core.chunk_rest(seq__24612_25383__$1);
var G__25386 = c__4556__auto___25384;
var G__25387 = cljs.core.count(c__4556__auto___25384);
var G__25388 = (0);
seq__24612_25373 = G__25385;
chunk__24613_25374 = G__25386;
count__24614_25375 = G__25387;
i__24615_25376 = G__25388;
continue;
} else {
var x_25389 = cljs.core.first(seq__24612_25383__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_25389);


var G__25390 = cljs.core.next(seq__24612_25383__$1);
var G__25391 = null;
var G__25392 = (0);
var G__25393 = (0);
seq__24612_25373 = G__25390;
chunk__24613_25374 = G__25391;
count__24614_25375 = G__25392;
i__24615_25376 = G__25393;
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
var _STAR_print_newline_STAR__orig_val__24616_25394 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24617_25395 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24618_25396 = true;
var _STAR_print_fn_STAR__temp_val__24619_25397 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24618_25396);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24619_25397);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24617_25395);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24616_25394);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__24620 = cljs.core.get_global_hierarchy;
return (fexpr__24620.cljs$core$IFn$_invoke$arity$0 ? fexpr__24620.cljs$core$IFn$_invoke$arity$0() : fexpr__24620.call(null));
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
var vec__24621 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24621,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24621,(1),null);
var G__24624 = ns;
var G__24625 = name;
var G__24626 = (function (){
var G__24627 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__24627) : cljs.compiler.emit_constant.call(null,G__24627));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__24624,G__24625,G__24626) : cljs.compiler.emit_record_value.call(null,G__24624,G__24625,G__24626));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__24628 = cljs.core.keys(x);
var G__24629 = cljs.core.vals(x);
var G__24630 = cljs.compiler.emit_constants_comma_sep;
var G__24631 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__24628,G__24629,G__24630,G__24631) : cljs.compiler.emit_map.call(null,G__24628,G__24629,G__24630,G__24631));
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
var G__24632 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__24633 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__24632,G__24633) : cljs.compiler.emit_with_meta.call(null,G__24632,G__24633));
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
var vec__24635 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24635,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24635,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24635,(2),null);
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
var G__24639 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__24639) : x.call(null,G__24639));
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
var G__24640 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__24640) : x.call(null,G__24640));
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
var G__24643 = items;
var G__24644 = (function (p1__24641_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__24641_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__24643,G__24644) : cljs.compiler.emit_js_object.call(null,G__24643,G__24644));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__24646){
var map__24647 = p__24646;
var map__24647__$1 = (((((!((map__24647 == null))))?(((((map__24647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24647):map__24647);
var ast = map__24647__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24647__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24647__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24647__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__24649 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__24649__$1 = (((((!((map__24649 == null))))?(((((map__24649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24649):map__24649);
var cenv = map__24649__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24649__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__24651 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__24654 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__24654) : cljs.compiler.es5_GT__EQ_.call(null,G__24654));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__24651,cljs.analyzer.es5_allowed);
} else {
return G__24651;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__24655 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__24655,reserved);
} else {
return G__24655;
}
})();
var env__24463__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__24656_25403 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__24656_25404__$1 = (((G__24656_25403 instanceof cljs.core.Keyword))?G__24656_25403.fqn:null);
switch (G__24656_25404__$1) {
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__24657){
var map__24658 = p__24657;
var map__24658__$1 = (((((!((map__24658 == null))))?(((((map__24658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24658):map__24658);
var arg = map__24658__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24658__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24658__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24658__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24658__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));


var map__24663 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__24663__$1 = (((((!((map__24663 == null))))?(((((map__24663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24663):map__24663);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24663__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__24665){
var map__24666 = p__24665;
var map__24666__$1 = (((((!((map__24666 == null))))?(((((map__24666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24666):map__24666);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24666__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24666__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24666__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_((function (p1__24668_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__24668_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__24673 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__24673) : comma_sep.call(null,G__24673));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__24677 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__24677) : comma_sep.call(null,G__24677));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__24678){
var map__24679 = p__24678;
var map__24679__$1 = (((((!((map__24679 == null))))?(((((map__24679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24679):map__24679);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24679__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24679__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24679__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__24697){
var map__24698 = p__24697;
var map__24698__$1 = (((((!((map__24698 == null))))?(((((map__24698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24698):map__24698);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24698__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24698__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_((function (p1__24700_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__24700_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__24701 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__24701) : comma_sep.call(null,G__24701));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__24702){
var map__24703 = p__24702;
var map__24703__$1 = (((((!((map__24703 == null))))?(((((map__24703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24703):map__24703);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24703__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24703__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var temp__5735__auto___25406 = cljs.core.seq(items);
if(temp__5735__auto___25406){
var items_25407__$1 = temp__5735__auto___25406;
var vec__24707_25408 = items_25407__$1;
var seq__24708_25409 = cljs.core.seq(vec__24707_25408);
var first__24709_25410 = cljs.core.first(seq__24708_25409);
var seq__24708_25411__$1 = cljs.core.next(seq__24708_25409);
var vec__24710_25412 = first__24709_25410;
var k_25413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24710_25412,(0),null);
var v_25414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24710_25412,(1),null);
var r_25415 = seq__24708_25411__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_25413),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_25414) : emit_js_object_val.call(null,v_25414)));

var seq__24713_25416 = cljs.core.seq(r_25415);
var chunk__24714_25417 = null;
var count__24715_25418 = (0);
var i__24716_25419 = (0);
while(true){
if((i__24716_25419 < count__24715_25418)){
var vec__24723_25420 = chunk__24714_25417.cljs$core$IIndexed$_nth$arity$2(null,i__24716_25419);
var k_25421__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24723_25420,(0),null);
var v_25422__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24723_25420,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_25421__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_25422__$1) : emit_js_object_val.call(null,v_25422__$1)));


var G__25423 = seq__24713_25416;
var G__25424 = chunk__24714_25417;
var G__25425 = count__24715_25418;
var G__25426 = (i__24716_25419 + (1));
seq__24713_25416 = G__25423;
chunk__24714_25417 = G__25424;
count__24715_25418 = G__25425;
i__24716_25419 = G__25426;
continue;
} else {
var temp__5735__auto___25427__$1 = cljs.core.seq(seq__24713_25416);
if(temp__5735__auto___25427__$1){
var seq__24713_25428__$1 = temp__5735__auto___25427__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24713_25428__$1)){
var c__4556__auto___25429 = cljs.core.chunk_first(seq__24713_25428__$1);
var G__25430 = cljs.core.chunk_rest(seq__24713_25428__$1);
var G__25431 = c__4556__auto___25429;
var G__25432 = cljs.core.count(c__4556__auto___25429);
var G__25433 = (0);
seq__24713_25416 = G__25430;
chunk__24714_25417 = G__25431;
count__24715_25418 = G__25432;
i__24716_25419 = G__25433;
continue;
} else {
var vec__24726_25434 = cljs.core.first(seq__24713_25428__$1);
var k_25435__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24726_25434,(0),null);
var v_25436__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24726_25434,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_25435__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_25436__$1) : emit_js_object_val.call(null,v_25436__$1)));


var G__25437 = cljs.core.next(seq__24713_25428__$1);
var G__25438 = null;
var G__25439 = (0);
var G__25440 = (0);
seq__24713_25416 = G__25437;
chunk__24714_25417 = G__25438;
count__24715_25418 = G__25439;
i__24716_25419 = G__25440;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__24729){
var map__24730 = p__24729;
var map__24730__$1 = (((((!((map__24730 == null))))?(((((map__24730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24730):map__24730);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24730__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24730__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24730__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__24735){
var map__24736 = p__24735;
var map__24736__$1 = (((((!((map__24736 == null))))?(((((map__24736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24736):map__24736);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24736__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24736__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__24738){
var map__24739 = p__24738;
var map__24739__$1 = (((((!((map__24739 == null))))?(((((map__24739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24739):map__24739);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24739__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__24741){
var map__24742 = p__24741;
var map__24742__$1 = (((((!((map__24742 == null))))?(((((map__24742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24742):map__24742);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24742__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24742__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__24744 = cljs.analyzer.unwrap_quote(expr);
var map__24744__$1 = (((((!((map__24744 == null))))?(((((map__24744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24744):map__24744);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24744__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24744__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24744__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__24746 = cljs.analyzer.unwrap_quote(expr);
var map__24746__$1 = (((((!((map__24746 == null))))?(((((map__24746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24746):map__24746);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24746__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24746__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24746__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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

var seq__24756_25449 = cljs.core.seq(nodes);
var chunk__24757_25450 = null;
var count__24758_25451 = (0);
var i__24759_25452 = (0);
while(true){
if((i__24759_25452 < count__24758_25451)){
var map__24784_25453 = chunk__24757_25450.cljs$core$IIndexed$_nth$arity$2(null,i__24759_25452);
var map__24784_25454__$1 = (((((!((map__24784_25453 == null))))?(((((map__24784_25453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24784_25453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24784_25453):map__24784_25453);
var ts_25455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24784_25454__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__24785_25456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24784_25454__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__24785_25457__$1 = (((((!((map__24785_25456 == null))))?(((((map__24785_25456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24785_25456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24785_25456):map__24785_25456);
var then_25458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24785_25457__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__24788_25459 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_25455));
var chunk__24789_25460 = null;
var count__24790_25461 = (0);
var i__24791_25462 = (0);
while(true){
if((i__24791_25462 < count__24790_25461)){
var test_25463 = chunk__24789_25460.cljs$core$IIndexed$_nth$arity$2(null,i__24791_25462);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25463,":");


var G__25464 = seq__24788_25459;
var G__25465 = chunk__24789_25460;
var G__25466 = count__24790_25461;
var G__25467 = (i__24791_25462 + (1));
seq__24788_25459 = G__25464;
chunk__24789_25460 = G__25465;
count__24790_25461 = G__25466;
i__24791_25462 = G__25467;
continue;
} else {
var temp__5735__auto___25468 = cljs.core.seq(seq__24788_25459);
if(temp__5735__auto___25468){
var seq__24788_25469__$1 = temp__5735__auto___25468;
if(cljs.core.chunked_seq_QMARK_(seq__24788_25469__$1)){
var c__4556__auto___25470 = cljs.core.chunk_first(seq__24788_25469__$1);
var G__25471 = cljs.core.chunk_rest(seq__24788_25469__$1);
var G__25472 = c__4556__auto___25470;
var G__25473 = cljs.core.count(c__4556__auto___25470);
var G__25474 = (0);
seq__24788_25459 = G__25471;
chunk__24789_25460 = G__25472;
count__24790_25461 = G__25473;
i__24791_25462 = G__25474;
continue;
} else {
var test_25475 = cljs.core.first(seq__24788_25469__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25475,":");


var G__25476 = cljs.core.next(seq__24788_25469__$1);
var G__25477 = null;
var G__25478 = (0);
var G__25479 = (0);
seq__24788_25459 = G__25476;
chunk__24789_25460 = G__25477;
count__24790_25461 = G__25478;
i__24791_25462 = G__25479;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_25458);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_25458);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__25482 = seq__24756_25449;
var G__25483 = chunk__24757_25450;
var G__25484 = count__24758_25451;
var G__25485 = (i__24759_25452 + (1));
seq__24756_25449 = G__25482;
chunk__24757_25450 = G__25483;
count__24758_25451 = G__25484;
i__24759_25452 = G__25485;
continue;
} else {
var temp__5735__auto___25486 = cljs.core.seq(seq__24756_25449);
if(temp__5735__auto___25486){
var seq__24756_25487__$1 = temp__5735__auto___25486;
if(cljs.core.chunked_seq_QMARK_(seq__24756_25487__$1)){
var c__4556__auto___25488 = cljs.core.chunk_first(seq__24756_25487__$1);
var G__25489 = cljs.core.chunk_rest(seq__24756_25487__$1);
var G__25490 = c__4556__auto___25488;
var G__25491 = cljs.core.count(c__4556__auto___25488);
var G__25492 = (0);
seq__24756_25449 = G__25489;
chunk__24757_25450 = G__25490;
count__24758_25451 = G__25491;
i__24759_25452 = G__25492;
continue;
} else {
var map__24792_25493 = cljs.core.first(seq__24756_25487__$1);
var map__24792_25494__$1 = (((((!((map__24792_25493 == null))))?(((((map__24792_25493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24792_25493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24792_25493):map__24792_25493);
var ts_25495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24792_25494__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__24793_25496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24792_25494__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__24793_25497__$1 = (((((!((map__24793_25496 == null))))?(((((map__24793_25496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24793_25496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24793_25496):map__24793_25496);
var then_25498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24793_25497__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__24796_25499 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_25495));
var chunk__24797_25500 = null;
var count__24798_25501 = (0);
var i__24799_25502 = (0);
while(true){
if((i__24799_25502 < count__24798_25501)){
var test_25503 = chunk__24797_25500.cljs$core$IIndexed$_nth$arity$2(null,i__24799_25502);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25503,":");


var G__25504 = seq__24796_25499;
var G__25505 = chunk__24797_25500;
var G__25506 = count__24798_25501;
var G__25507 = (i__24799_25502 + (1));
seq__24796_25499 = G__25504;
chunk__24797_25500 = G__25505;
count__24798_25501 = G__25506;
i__24799_25502 = G__25507;
continue;
} else {
var temp__5735__auto___25508__$1 = cljs.core.seq(seq__24796_25499);
if(temp__5735__auto___25508__$1){
var seq__24796_25509__$1 = temp__5735__auto___25508__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24796_25509__$1)){
var c__4556__auto___25510 = cljs.core.chunk_first(seq__24796_25509__$1);
var G__25511 = cljs.core.chunk_rest(seq__24796_25509__$1);
var G__25512 = c__4556__auto___25510;
var G__25513 = cljs.core.count(c__4556__auto___25510);
var G__25514 = (0);
seq__24796_25499 = G__25511;
chunk__24797_25500 = G__25512;
count__24798_25501 = G__25513;
i__24799_25502 = G__25514;
continue;
} else {
var test_25515 = cljs.core.first(seq__24796_25509__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25515,":");


var G__25516 = cljs.core.next(seq__24796_25509__$1);
var G__25517 = null;
var G__25518 = (0);
var G__25519 = (0);
seq__24796_25499 = G__25516;
chunk__24797_25500 = G__25517;
count__24798_25501 = G__25518;
i__24799_25502 = G__25519;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_25498);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_25498);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__25520 = cljs.core.next(seq__24756_25487__$1);
var G__25521 = null;
var G__25522 = (0);
var G__25523 = (0);
seq__24756_25449 = G__25520;
chunk__24757_25450 = G__25521;
count__24758_25451 = G__25522;
i__24759_25452 = G__25523;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__24801){
var map__24803 = p__24801;
var map__24803__$1 = (((((!((map__24803 == null))))?(((((map__24803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24803):map__24803);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24803__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24803__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__24808 = env;
var G__24809 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__24808,G__24809) : cljs.compiler.resolve_type.call(null,G__24808,G__24809));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__24812 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24812,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24812,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__24805_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__24805_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__24805_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__24817 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__24817,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__24817;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__24820 = env;
var G__24821 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__24820,G__24821) : cljs.compiler.resolve_type.call(null,G__24820,G__24821));
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
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24822_SHARP_){
return cljs.compiler.resolve_type(env,p1__24822_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__24823 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__24824 = cljs.core.seq(vec__24823);
var first__24825 = cljs.core.first(seq__24824);
var seq__24824__$1 = cljs.core.next(seq__24824);
var p = first__24825;
var first__24825__$1 = cljs.core.first(seq__24824__$1);
var seq__24824__$2 = cljs.core.next(seq__24824__$1);
var ts = first__24825__$1;
var first__24825__$2 = cljs.core.first(seq__24824__$2);
var seq__24824__$3 = cljs.core.next(seq__24824__$2);
var n = first__24825__$2;
var xs = seq__24824__$3;
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
var vec__24826 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__24827 = cljs.core.seq(vec__24826);
var first__24828 = cljs.core.first(seq__24827);
var seq__24827__$1 = cljs.core.next(seq__24827);
var p = first__24828;
var first__24828__$1 = cljs.core.first(seq__24827__$1);
var seq__24827__$2 = cljs.core.next(seq__24827__$1);
var ts = first__24828__$1;
var xs = seq__24827__$2;
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
var G__24830 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__24829 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__24829.cljs$core$IFn$_invoke$arity$1 ? fexpr__24829.cljs$core$IFn$_invoke$arity$1(G__24830) : fexpr__24829.call(null,G__24830));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__24833 = arguments.length;
switch (G__24833) {
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
var vec__24841 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24831_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__24831_SHARP_);
} else {
return p1__24831_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__24842 = cljs.core.seq(vec__24841);
var first__24843 = cljs.core.first(seq__24842);
var seq__24842__$1 = cljs.core.next(seq__24842);
var x = first__24843;
var ys = seq__24842__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__24844 = cljs.core.seq(ys);
var chunk__24845 = null;
var count__24846 = (0);
var i__24847 = (0);
while(true){
if((i__24847 < count__24846)){
var next_line = chunk__24845.cljs$core$IIndexed$_nth$arity$2(null,i__24847);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__25527 = seq__24844;
var G__25528 = chunk__24845;
var G__25529 = count__24846;
var G__25530 = (i__24847 + (1));
seq__24844 = G__25527;
chunk__24845 = G__25528;
count__24846 = G__25529;
i__24847 = G__25530;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__24844);
if(temp__5735__auto__){
var seq__24844__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24844__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24844__$1);
var G__25531 = cljs.core.chunk_rest(seq__24844__$1);
var G__25532 = c__4556__auto__;
var G__25533 = cljs.core.count(c__4556__auto__);
var G__25534 = (0);
seq__24844 = G__25531;
chunk__24845 = G__25532;
count__24846 = G__25533;
i__24847 = G__25534;
continue;
} else {
var next_line = cljs.core.first(seq__24844__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__25535 = cljs.core.next(seq__24844__$1);
var G__25536 = null;
var G__25537 = (0);
var G__25538 = (0);
seq__24844 = G__25535;
chunk__24845 = G__25536;
count__24846 = G__25537;
i__24847 = G__25538;
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

var seq__24848_25539 = cljs.core.seq(docs__$2);
var chunk__24849_25540 = null;
var count__24850_25541 = (0);
var i__24851_25542 = (0);
while(true){
if((i__24851_25542 < count__24850_25541)){
var e_25543 = chunk__24849_25540.cljs$core$IIndexed$_nth$arity$2(null,i__24851_25542);
if(cljs.core.truth_(e_25543)){
print_comment_lines(e_25543);
} else {
}


var G__25544 = seq__24848_25539;
var G__25545 = chunk__24849_25540;
var G__25546 = count__24850_25541;
var G__25547 = (i__24851_25542 + (1));
seq__24848_25539 = G__25544;
chunk__24849_25540 = G__25545;
count__24850_25541 = G__25546;
i__24851_25542 = G__25547;
continue;
} else {
var temp__5735__auto___25548 = cljs.core.seq(seq__24848_25539);
if(temp__5735__auto___25548){
var seq__24848_25549__$1 = temp__5735__auto___25548;
if(cljs.core.chunked_seq_QMARK_(seq__24848_25549__$1)){
var c__4556__auto___25550 = cljs.core.chunk_first(seq__24848_25549__$1);
var G__25551 = cljs.core.chunk_rest(seq__24848_25549__$1);
var G__25552 = c__4556__auto___25550;
var G__25553 = cljs.core.count(c__4556__auto___25550);
var G__25554 = (0);
seq__24848_25539 = G__25551;
chunk__24849_25540 = G__25552;
count__24850_25541 = G__25553;
i__24851_25542 = G__25554;
continue;
} else {
var e_25555 = cljs.core.first(seq__24848_25549__$1);
if(cljs.core.truth_(e_25555)){
print_comment_lines(e_25555);
} else {
}


var G__25556 = cljs.core.next(seq__24848_25549__$1);
var G__25557 = null;
var G__25558 = (0);
var G__25559 = (0);
seq__24848_25539 = G__25556;
chunk__24849_25540 = G__25557;
count__24850_25541 = G__25558;
i__24851_25542 = G__25559;
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
var and__4115__auto__ = cljs.core.some((function (p1__24853_SHARP_){
return goog.string.startsWith(p1__24853_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__24856){
var map__24857 = p__24856;
var map__24857__$1 = (((((!((map__24857 == null))))?(((((map__24857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24857):map__24857);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24857__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24857__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24857__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24857__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24857__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24857__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24857__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24857__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24857__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24857__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__24859){
var map__24860 = p__24859;
var map__24860__$1 = (((((!((map__24860 == null))))?(((((map__24860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24860):map__24860);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24860__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24860__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24860__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__24862_25561 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__24863_25562 = null;
var count__24864_25563 = (0);
var i__24865_25564 = (0);
while(true){
if((i__24865_25564 < count__24864_25563)){
var vec__24872_25565 = chunk__24863_25562.cljs$core$IIndexed$_nth$arity$2(null,i__24865_25564);
var i_25566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24872_25565,(0),null);
var param_25567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24872_25565,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_25567);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__25568 = seq__24862_25561;
var G__25569 = chunk__24863_25562;
var G__25570 = count__24864_25563;
var G__25571 = (i__24865_25564 + (1));
seq__24862_25561 = G__25568;
chunk__24863_25562 = G__25569;
count__24864_25563 = G__25570;
i__24865_25564 = G__25571;
continue;
} else {
var temp__5735__auto___25572 = cljs.core.seq(seq__24862_25561);
if(temp__5735__auto___25572){
var seq__24862_25573__$1 = temp__5735__auto___25572;
if(cljs.core.chunked_seq_QMARK_(seq__24862_25573__$1)){
var c__4556__auto___25574 = cljs.core.chunk_first(seq__24862_25573__$1);
var G__25575 = cljs.core.chunk_rest(seq__24862_25573__$1);
var G__25576 = c__4556__auto___25574;
var G__25577 = cljs.core.count(c__4556__auto___25574);
var G__25578 = (0);
seq__24862_25561 = G__25575;
chunk__24863_25562 = G__25576;
count__24864_25563 = G__25577;
i__24865_25564 = G__25578;
continue;
} else {
var vec__24875_25579 = cljs.core.first(seq__24862_25573__$1);
var i_25580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24875_25579,(0),null);
var param_25581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24875_25579,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_25581);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__25582 = cljs.core.next(seq__24862_25573__$1);
var G__25583 = null;
var G__25584 = (0);
var G__25585 = (0);
seq__24862_25561 = G__25582;
chunk__24863_25562 = G__25583;
count__24864_25563 = G__25584;
i__24865_25564 = G__25585;
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

var seq__24878_25586 = cljs.core.seq(params);
var chunk__24879_25587 = null;
var count__24880_25588 = (0);
var i__24881_25589 = (0);
while(true){
if((i__24881_25589 < count__24880_25588)){
var param_25590 = chunk__24879_25587.cljs$core$IIndexed$_nth$arity$2(null,i__24881_25589);
cljs.compiler.emit(param_25590);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25590,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25591 = seq__24878_25586;
var G__25592 = chunk__24879_25587;
var G__25593 = count__24880_25588;
var G__25594 = (i__24881_25589 + (1));
seq__24878_25586 = G__25591;
chunk__24879_25587 = G__25592;
count__24880_25588 = G__25593;
i__24881_25589 = G__25594;
continue;
} else {
var temp__5735__auto___25595 = cljs.core.seq(seq__24878_25586);
if(temp__5735__auto___25595){
var seq__24878_25596__$1 = temp__5735__auto___25595;
if(cljs.core.chunked_seq_QMARK_(seq__24878_25596__$1)){
var c__4556__auto___25597 = cljs.core.chunk_first(seq__24878_25596__$1);
var G__25598 = cljs.core.chunk_rest(seq__24878_25596__$1);
var G__25599 = c__4556__auto___25597;
var G__25600 = cljs.core.count(c__4556__auto___25597);
var G__25601 = (0);
seq__24878_25586 = G__25598;
chunk__24879_25587 = G__25599;
count__24880_25588 = G__25600;
i__24881_25589 = G__25601;
continue;
} else {
var param_25602 = cljs.core.first(seq__24878_25596__$1);
cljs.compiler.emit(param_25602);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25602,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25603 = cljs.core.next(seq__24878_25596__$1);
var G__25604 = null;
var G__25605 = (0);
var G__25606 = (0);
seq__24878_25586 = G__25603;
chunk__24879_25587 = G__25604;
count__24880_25588 = G__25605;
i__24881_25589 = G__25606;
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

var seq__24882_25607 = cljs.core.seq(params);
var chunk__24883_25608 = null;
var count__24884_25609 = (0);
var i__24885_25610 = (0);
while(true){
if((i__24885_25610 < count__24884_25609)){
var param_25611 = chunk__24883_25608.cljs$core$IIndexed$_nth$arity$2(null,i__24885_25610);
cljs.compiler.emit(param_25611);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25611,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25612 = seq__24882_25607;
var G__25613 = chunk__24883_25608;
var G__25614 = count__24884_25609;
var G__25615 = (i__24885_25610 + (1));
seq__24882_25607 = G__25612;
chunk__24883_25608 = G__25613;
count__24884_25609 = G__25614;
i__24885_25610 = G__25615;
continue;
} else {
var temp__5735__auto___25616 = cljs.core.seq(seq__24882_25607);
if(temp__5735__auto___25616){
var seq__24882_25617__$1 = temp__5735__auto___25616;
if(cljs.core.chunked_seq_QMARK_(seq__24882_25617__$1)){
var c__4556__auto___25618 = cljs.core.chunk_first(seq__24882_25617__$1);
var G__25619 = cljs.core.chunk_rest(seq__24882_25617__$1);
var G__25620 = c__4556__auto___25618;
var G__25621 = cljs.core.count(c__4556__auto___25618);
var G__25622 = (0);
seq__24882_25607 = G__25619;
chunk__24883_25608 = G__25620;
count__24884_25609 = G__25621;
i__24885_25610 = G__25622;
continue;
} else {
var param_25623 = cljs.core.first(seq__24882_25617__$1);
cljs.compiler.emit(param_25623);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25623,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25624 = cljs.core.next(seq__24882_25617__$1);
var G__25625 = null;
var G__25626 = (0);
var G__25627 = (0);
seq__24882_25607 = G__25624;
chunk__24883_25608 = G__25625;
count__24884_25609 = G__25626;
i__24885_25610 = G__25627;
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
var seq__24886 = cljs.core.seq(params);
var chunk__24887 = null;
var count__24888 = (0);
var i__24889 = (0);
while(true){
if((i__24889 < count__24888)){
var param = chunk__24887.cljs$core$IIndexed$_nth$arity$2(null,i__24889);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25628 = seq__24886;
var G__25629 = chunk__24887;
var G__25630 = count__24888;
var G__25631 = (i__24889 + (1));
seq__24886 = G__25628;
chunk__24887 = G__25629;
count__24888 = G__25630;
i__24889 = G__25631;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__24886);
if(temp__5735__auto__){
var seq__24886__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24886__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24886__$1);
var G__25632 = cljs.core.chunk_rest(seq__24886__$1);
var G__25633 = c__4556__auto__;
var G__25634 = cljs.core.count(c__4556__auto__);
var G__25635 = (0);
seq__24886 = G__25632;
chunk__24887 = G__25633;
count__24888 = G__25634;
i__24889 = G__25635;
continue;
} else {
var param = cljs.core.first(seq__24886__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25636 = cljs.core.next(seq__24886__$1);
var G__25637 = null;
var G__25638 = (0);
var G__25639 = (0);
seq__24886 = G__25636;
chunk__24887 = G__25637;
count__24888 = G__25638;
i__24889 = G__25639;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__24890){
var map__24891 = p__24890;
var map__24891__$1 = (((((!((map__24891 == null))))?(((((map__24891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24891):map__24891);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24891__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24891__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24891__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24891__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24891__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24891__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__24896){
var map__24897 = p__24896;
var map__24897__$1 = (((((!((map__24897 == null))))?(((((map__24897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24897):map__24897);
var f = map__24897__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24897__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24897__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24897__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24897__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24897__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24897__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24897__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24897__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__24463__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_25640__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_25641 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_25640__$1);
var delegate_name_25642 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_25641),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_25642," = function (");

var seq__24899_25643 = cljs.core.seq(params);
var chunk__24900_25644 = null;
var count__24901_25645 = (0);
var i__24902_25646 = (0);
while(true){
if((i__24902_25646 < count__24901_25645)){
var param_25647 = chunk__24900_25644.cljs$core$IIndexed$_nth$arity$2(null,i__24902_25646);
cljs.compiler.emit(param_25647);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25647,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25648 = seq__24899_25643;
var G__25649 = chunk__24900_25644;
var G__25650 = count__24901_25645;
var G__25651 = (i__24902_25646 + (1));
seq__24899_25643 = G__25648;
chunk__24900_25644 = G__25649;
count__24901_25645 = G__25650;
i__24902_25646 = G__25651;
continue;
} else {
var temp__5735__auto___25652 = cljs.core.seq(seq__24899_25643);
if(temp__5735__auto___25652){
var seq__24899_25653__$1 = temp__5735__auto___25652;
if(cljs.core.chunked_seq_QMARK_(seq__24899_25653__$1)){
var c__4556__auto___25654 = cljs.core.chunk_first(seq__24899_25653__$1);
var G__25655 = cljs.core.chunk_rest(seq__24899_25653__$1);
var G__25656 = c__4556__auto___25654;
var G__25657 = cljs.core.count(c__4556__auto___25654);
var G__25658 = (0);
seq__24899_25643 = G__25655;
chunk__24900_25644 = G__25656;
count__24901_25645 = G__25657;
i__24902_25646 = G__25658;
continue;
} else {
var param_25659 = cljs.core.first(seq__24899_25653__$1);
cljs.compiler.emit(param_25659);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25659,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25660 = cljs.core.next(seq__24899_25653__$1);
var G__25661 = null;
var G__25662 = (0);
var G__25663 = (0);
seq__24899_25643 = G__25660;
chunk__24900_25644 = G__25661;
count__24901_25645 = G__25662;
i__24902_25646 = G__25663;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_25641," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_25664 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_25664,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_25642,".call(this,");

var seq__24903_25665 = cljs.core.seq(params);
var chunk__24904_25666 = null;
var count__24905_25667 = (0);
var i__24906_25668 = (0);
while(true){
if((i__24906_25668 < count__24905_25667)){
var param_25669 = chunk__24904_25666.cljs$core$IIndexed$_nth$arity$2(null,i__24906_25668);
cljs.compiler.emit(param_25669);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25669,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25670 = seq__24903_25665;
var G__25671 = chunk__24904_25666;
var G__25672 = count__24905_25667;
var G__25673 = (i__24906_25668 + (1));
seq__24903_25665 = G__25670;
chunk__24904_25666 = G__25671;
count__24905_25667 = G__25672;
i__24906_25668 = G__25673;
continue;
} else {
var temp__5735__auto___25674 = cljs.core.seq(seq__24903_25665);
if(temp__5735__auto___25674){
var seq__24903_25675__$1 = temp__5735__auto___25674;
if(cljs.core.chunked_seq_QMARK_(seq__24903_25675__$1)){
var c__4556__auto___25676 = cljs.core.chunk_first(seq__24903_25675__$1);
var G__25677 = cljs.core.chunk_rest(seq__24903_25675__$1);
var G__25678 = c__4556__auto___25676;
var G__25679 = cljs.core.count(c__4556__auto___25676);
var G__25680 = (0);
seq__24903_25665 = G__25677;
chunk__24904_25666 = G__25678;
count__24905_25667 = G__25679;
i__24906_25668 = G__25680;
continue;
} else {
var param_25681 = cljs.core.first(seq__24903_25675__$1);
cljs.compiler.emit(param_25681);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25681,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25682 = cljs.core.next(seq__24903_25675__$1);
var G__25683 = null;
var G__25684 = (0);
var G__25685 = (0);
seq__24903_25665 = G__25682;
chunk__24904_25666 = G__25683;
count__24905_25667 = G__25684;
i__24906_25668 = G__25685;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25641,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_25641,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_25640__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25641,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_25642,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_25641,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__24910){
var map__24911 = p__24910;
var map__24911__$1 = (((((!((map__24911 == null))))?(((((map__24911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24911):map__24911);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24911__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24911__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24911__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24911__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24911__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24911__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24911__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24911__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24907_SHARP_){
var and__4115__auto__ = p1__24907_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__24907_SHARP_));
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
var name_25686__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_25687 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_25686__$1);
var maxparams_25688 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_25689 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_25687),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_25690 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__24908_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__24908_SHARP_)));
}),cljs.core.seq(mmap_25689));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_25687," = null;");

var seq__24913_25691 = cljs.core.seq(ms_25690);
var chunk__24914_25692 = null;
var count__24915_25693 = (0);
var i__24916_25694 = (0);
while(true){
if((i__24916_25694 < count__24915_25693)){
var vec__24923_25695 = chunk__24914_25692.cljs$core$IIndexed$_nth$arity$2(null,i__24916_25694);
var n_25696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24923_25695,(0),null);
var meth_25697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24923_25695,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_25696," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25697))){
cljs.compiler.emit_variadic_fn_method(meth_25697);
} else {
cljs.compiler.emit_fn_method(meth_25697);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__25698 = seq__24913_25691;
var G__25699 = chunk__24914_25692;
var G__25700 = count__24915_25693;
var G__25701 = (i__24916_25694 + (1));
seq__24913_25691 = G__25698;
chunk__24914_25692 = G__25699;
count__24915_25693 = G__25700;
i__24916_25694 = G__25701;
continue;
} else {
var temp__5735__auto___25702 = cljs.core.seq(seq__24913_25691);
if(temp__5735__auto___25702){
var seq__24913_25703__$1 = temp__5735__auto___25702;
if(cljs.core.chunked_seq_QMARK_(seq__24913_25703__$1)){
var c__4556__auto___25704 = cljs.core.chunk_first(seq__24913_25703__$1);
var G__25705 = cljs.core.chunk_rest(seq__24913_25703__$1);
var G__25706 = c__4556__auto___25704;
var G__25707 = cljs.core.count(c__4556__auto___25704);
var G__25708 = (0);
seq__24913_25691 = G__25705;
chunk__24914_25692 = G__25706;
count__24915_25693 = G__25707;
i__24916_25694 = G__25708;
continue;
} else {
var vec__24926_25709 = cljs.core.first(seq__24913_25703__$1);
var n_25710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24926_25709,(0),null);
var meth_25711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24926_25709,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_25710," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25711))){
cljs.compiler.emit_variadic_fn_method(meth_25711);
} else {
cljs.compiler.emit_fn_method(meth_25711);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__25712 = cljs.core.next(seq__24913_25703__$1);
var G__25713 = null;
var G__25714 = (0);
var G__25715 = (0);
seq__24913_25691 = G__25712;
chunk__24914_25692 = G__25713;
count__24915_25693 = G__25714;
i__24916_25694 = G__25715;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25687," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_25688),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_25688)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_25688));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__24929_25716 = cljs.core.seq(ms_25690);
var chunk__24930_25717 = null;
var count__24931_25718 = (0);
var i__24932_25719 = (0);
while(true){
if((i__24932_25719 < count__24931_25718)){
var vec__24939_25720 = chunk__24930_25717.cljs$core$IIndexed$_nth$arity$2(null,i__24932_25719);
var n_25721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24939_25720,(0),null);
var meth_25722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24939_25720,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25722))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_25723 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_25723," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_25724 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_25723," = new cljs.core.IndexedSeq(",a_25724,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_25721,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_25688)),(((cljs.core.count(maxparams_25688) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_25723,");"], 0));
} else {
var pcnt_25725 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25722));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_25725,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_25721,".call(this",(((pcnt_25725 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_25725,maxparams_25688)),null,(1),null)),(2),null))),");");
}


var G__25726 = seq__24929_25716;
var G__25727 = chunk__24930_25717;
var G__25728 = count__24931_25718;
var G__25729 = (i__24932_25719 + (1));
seq__24929_25716 = G__25726;
chunk__24930_25717 = G__25727;
count__24931_25718 = G__25728;
i__24932_25719 = G__25729;
continue;
} else {
var temp__5735__auto___25730 = cljs.core.seq(seq__24929_25716);
if(temp__5735__auto___25730){
var seq__24929_25731__$1 = temp__5735__auto___25730;
if(cljs.core.chunked_seq_QMARK_(seq__24929_25731__$1)){
var c__4556__auto___25732 = cljs.core.chunk_first(seq__24929_25731__$1);
var G__25733 = cljs.core.chunk_rest(seq__24929_25731__$1);
var G__25734 = c__4556__auto___25732;
var G__25735 = cljs.core.count(c__4556__auto___25732);
var G__25736 = (0);
seq__24929_25716 = G__25733;
chunk__24930_25717 = G__25734;
count__24931_25718 = G__25735;
i__24932_25719 = G__25736;
continue;
} else {
var vec__24942_25737 = cljs.core.first(seq__24929_25731__$1);
var n_25738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24942_25737,(0),null);
var meth_25739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24942_25737,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25739))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_25740 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_25740," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_25741 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_25740," = new cljs.core.IndexedSeq(",a_25741,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_25738,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_25688)),(((cljs.core.count(maxparams_25688) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_25740,");"], 0));
} else {
var pcnt_25742 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25739));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_25742,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_25738,".call(this",(((pcnt_25742 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_25742,maxparams_25688)),null,(1),null)),(2),null))),");");
}


var G__25743 = cljs.core.next(seq__24929_25731__$1);
var G__25744 = null;
var G__25745 = (0);
var G__25746 = (0);
seq__24929_25716 = G__25743;
chunk__24930_25717 = G__25744;
count__24931_25718 = G__25745;
i__24932_25719 = G__25746;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_25747 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_25690)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_25747,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25687,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25687,".cljs$lang$applyTo = ",cljs.core.some((function (p1__24909_SHARP_){
var vec__24945 = p1__24909_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24945,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24945,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_25690),".cljs$lang$applyTo;");
} else {
}

var seq__24948_25749 = cljs.core.seq(ms_25690);
var chunk__24949_25750 = null;
var count__24950_25751 = (0);
var i__24951_25752 = (0);
while(true){
if((i__24951_25752 < count__24950_25751)){
var vec__24958_25759 = chunk__24949_25750.cljs$core$IIndexed$_nth$arity$2(null,i__24951_25752);
var n_25760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24958_25759,(0),null);
var meth_25761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24958_25759,(1),null);
var c_25762 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25761));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25761))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25687,".cljs$core$IFn$_invoke$arity$variadic = ",n_25760,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_25687,".cljs$core$IFn$_invoke$arity$",c_25762," = ",n_25760,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__25764 = seq__24948_25749;
var G__25765 = chunk__24949_25750;
var G__25766 = count__24950_25751;
var G__25767 = (i__24951_25752 + (1));
seq__24948_25749 = G__25764;
chunk__24949_25750 = G__25765;
count__24950_25751 = G__25766;
i__24951_25752 = G__25767;
continue;
} else {
var temp__5735__auto___25768 = cljs.core.seq(seq__24948_25749);
if(temp__5735__auto___25768){
var seq__24948_25769__$1 = temp__5735__auto___25768;
if(cljs.core.chunked_seq_QMARK_(seq__24948_25769__$1)){
var c__4556__auto___25770 = cljs.core.chunk_first(seq__24948_25769__$1);
var G__25771 = cljs.core.chunk_rest(seq__24948_25769__$1);
var G__25772 = c__4556__auto___25770;
var G__25773 = cljs.core.count(c__4556__auto___25770);
var G__25774 = (0);
seq__24948_25749 = G__25771;
chunk__24949_25750 = G__25772;
count__24950_25751 = G__25773;
i__24951_25752 = G__25774;
continue;
} else {
var vec__24961_25775 = cljs.core.first(seq__24948_25769__$1);
var n_25776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24961_25775,(0),null);
var meth_25777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24961_25775,(1),null);
var c_25778 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25777));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25777))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25687,".cljs$core$IFn$_invoke$arity$variadic = ",n_25776,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_25687,".cljs$core$IFn$_invoke$arity$",c_25778," = ",n_25776,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__25779 = cljs.core.next(seq__24948_25769__$1);
var G__25780 = null;
var G__25781 = (0);
var G__25782 = (0);
seq__24948_25749 = G__25779;
chunk__24949_25750 = G__25780;
count__24950_25751 = G__25781;
i__24951_25752 = G__25782;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_25687,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__24964){
var map__24965 = p__24964;
var map__24965__$1 = (((((!((map__24965 == null))))?(((((map__24965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24965):map__24965);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24965__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24965__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24965__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__24967_25783 = cljs.core.seq(statements);
var chunk__24968_25784 = null;
var count__24969_25785 = (0);
var i__24970_25786 = (0);
while(true){
if((i__24970_25786 < count__24969_25785)){
var s_25787 = chunk__24968_25784.cljs$core$IIndexed$_nth$arity$2(null,i__24970_25786);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_25787);


var G__25788 = seq__24967_25783;
var G__25789 = chunk__24968_25784;
var G__25790 = count__24969_25785;
var G__25791 = (i__24970_25786 + (1));
seq__24967_25783 = G__25788;
chunk__24968_25784 = G__25789;
count__24969_25785 = G__25790;
i__24970_25786 = G__25791;
continue;
} else {
var temp__5735__auto___25792 = cljs.core.seq(seq__24967_25783);
if(temp__5735__auto___25792){
var seq__24967_25793__$1 = temp__5735__auto___25792;
if(cljs.core.chunked_seq_QMARK_(seq__24967_25793__$1)){
var c__4556__auto___25794 = cljs.core.chunk_first(seq__24967_25793__$1);
var G__25795 = cljs.core.chunk_rest(seq__24967_25793__$1);
var G__25796 = c__4556__auto___25794;
var G__25797 = cljs.core.count(c__4556__auto___25794);
var G__25798 = (0);
seq__24967_25783 = G__25795;
chunk__24968_25784 = G__25796;
count__24969_25785 = G__25797;
i__24970_25786 = G__25798;
continue;
} else {
var s_25799 = cljs.core.first(seq__24967_25793__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_25799);


var G__25800 = cljs.core.next(seq__24967_25793__$1);
var G__25801 = null;
var G__25802 = (0);
var G__25803 = (0);
seq__24967_25783 = G__25800;
chunk__24968_25784 = G__25801;
count__24969_25785 = G__25802;
i__24970_25786 = G__25803;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__24971){
var map__24972 = p__24971;
var map__24972__$1 = (((((!((map__24972 == null))))?(((((map__24972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24972):map__24972);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24972__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24972__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24972__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24972__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24972__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__24977,is_loop){
var map__24978 = p__24977;
var map__24978__$1 = (((((!((map__24978 == null))))?(((((map__24978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24978):map__24978);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24978__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24978__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24978__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__24980_25804 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__24981_25805 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__24981_25805);

try{var seq__24982_25806 = cljs.core.seq(bindings);
var chunk__24983_25807 = null;
var count__24984_25808 = (0);
var i__24985_25809 = (0);
while(true){
if((i__24985_25809 < count__24984_25808)){
var map__24994_25810 = chunk__24983_25807.cljs$core$IIndexed$_nth$arity$2(null,i__24985_25809);
var map__24994_25811__$1 = (((((!((map__24994_25810 == null))))?(((((map__24994_25810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24994_25810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24994_25810):map__24994_25810);
var binding_25812 = map__24994_25811__$1;
var init_25813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24994_25811__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_25812);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_25813,";");


var G__25814 = seq__24982_25806;
var G__25815 = chunk__24983_25807;
var G__25816 = count__24984_25808;
var G__25817 = (i__24985_25809 + (1));
seq__24982_25806 = G__25814;
chunk__24983_25807 = G__25815;
count__24984_25808 = G__25816;
i__24985_25809 = G__25817;
continue;
} else {
var temp__5735__auto___25818 = cljs.core.seq(seq__24982_25806);
if(temp__5735__auto___25818){
var seq__24982_25819__$1 = temp__5735__auto___25818;
if(cljs.core.chunked_seq_QMARK_(seq__24982_25819__$1)){
var c__4556__auto___25820 = cljs.core.chunk_first(seq__24982_25819__$1);
var G__25821 = cljs.core.chunk_rest(seq__24982_25819__$1);
var G__25822 = c__4556__auto___25820;
var G__25823 = cljs.core.count(c__4556__auto___25820);
var G__25824 = (0);
seq__24982_25806 = G__25821;
chunk__24983_25807 = G__25822;
count__24984_25808 = G__25823;
i__24985_25809 = G__25824;
continue;
} else {
var map__24996_25825 = cljs.core.first(seq__24982_25819__$1);
var map__24996_25826__$1 = (((((!((map__24996_25825 == null))))?(((((map__24996_25825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24996_25825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24996_25825):map__24996_25825);
var binding_25827 = map__24996_25826__$1;
var init_25828 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24996_25826__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_25827);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_25828,";");


var G__25830 = cljs.core.next(seq__24982_25819__$1);
var G__25831 = null;
var G__25832 = (0);
var G__25833 = (0);
seq__24982_25806 = G__25830;
chunk__24983_25807 = G__25831;
count__24984_25808 = G__25832;
i__24985_25809 = G__25833;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__24980_25804);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__24998){
var map__24999 = p__24998;
var map__24999__$1 = (((((!((map__24999 == null))))?(((((map__24999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24999):map__24999);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24999__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24999__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24999__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___25834 = cljs.core.count(exprs);
var i_25835 = (0);
while(true){
if((i_25835 < n__4613__auto___25834)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_25835) : temps.call(null,i_25835))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_25835) : exprs.call(null,i_25835)),";");

var G__25836 = (i_25835 + (1));
i_25835 = G__25836;
continue;
} else {
}
break;
}

var n__4613__auto___25837 = cljs.core.count(exprs);
var i_25838 = (0);
while(true){
if((i_25838 < n__4613__auto___25837)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_25838) : params.call(null,i_25838)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_25838) : temps.call(null,i_25838)),";");

var G__25839 = (i_25838 + (1));
i_25838 = G__25839;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__25001){
var map__25002 = p__25001;
var map__25002__$1 = (((((!((map__25002 == null))))?(((((map__25002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25002):map__25002);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25002__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25002__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25002__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__25004_25840 = cljs.core.seq(bindings);
var chunk__25005_25841 = null;
var count__25006_25842 = (0);
var i__25007_25843 = (0);
while(true){
if((i__25007_25843 < count__25006_25842)){
var map__25012_25844 = chunk__25005_25841.cljs$core$IIndexed$_nth$arity$2(null,i__25007_25843);
var map__25012_25845__$1 = (((((!((map__25012_25844 == null))))?(((((map__25012_25844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25012_25844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25012_25844):map__25012_25844);
var binding_25846 = map__25012_25845__$1;
var init_25847 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25012_25845__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_25846)," = ",init_25847,";");


var G__25848 = seq__25004_25840;
var G__25849 = chunk__25005_25841;
var G__25850 = count__25006_25842;
var G__25851 = (i__25007_25843 + (1));
seq__25004_25840 = G__25848;
chunk__25005_25841 = G__25849;
count__25006_25842 = G__25850;
i__25007_25843 = G__25851;
continue;
} else {
var temp__5735__auto___25852 = cljs.core.seq(seq__25004_25840);
if(temp__5735__auto___25852){
var seq__25004_25853__$1 = temp__5735__auto___25852;
if(cljs.core.chunked_seq_QMARK_(seq__25004_25853__$1)){
var c__4556__auto___25854 = cljs.core.chunk_first(seq__25004_25853__$1);
var G__25855 = cljs.core.chunk_rest(seq__25004_25853__$1);
var G__25856 = c__4556__auto___25854;
var G__25857 = cljs.core.count(c__4556__auto___25854);
var G__25858 = (0);
seq__25004_25840 = G__25855;
chunk__25005_25841 = G__25856;
count__25006_25842 = G__25857;
i__25007_25843 = G__25858;
continue;
} else {
var map__25014_25859 = cljs.core.first(seq__25004_25853__$1);
var map__25014_25860__$1 = (((((!((map__25014_25859 == null))))?(((((map__25014_25859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25014_25859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25014_25859):map__25014_25859);
var binding_25861 = map__25014_25860__$1;
var init_25862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25014_25860__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_25861)," = ",init_25862,";");


var G__25863 = cljs.core.next(seq__25004_25853__$1);
var G__25864 = null;
var G__25865 = (0);
var G__25866 = (0);
seq__25004_25840 = G__25863;
chunk__25005_25841 = G__25864;
count__25006_25842 = G__25865;
i__25007_25843 = G__25866;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__25018){
var map__25019 = p__25018;
var map__25019__$1 = (((((!((map__25019 == null))))?(((((map__25019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25019):map__25019);
var expr = map__25019__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25019__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25019__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25019__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
if(cljs.core.not((function (){var fexpr__25031 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__25031.cljs$core$IFn$_invoke$arity$1 ? fexpr__25031.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__25031.call(null,tag));
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
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__25033 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__25033.cljs$core$IFn$_invoke$arity$1 ? fexpr__25033.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__25033.call(null,first_arg_tag));
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
var vec__25021 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__25016_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25016_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__25017_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25017_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25021,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25021,(1),null);
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
var pimpl_25872 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_25872,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_25873 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_25873,args)),(((mfa_25873 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_25873,args)),"], 0))"], 0));
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
var G__25050 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__25049 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__25049.cljs$core$IFn$_invoke$arity$1 ? fexpr__25049.cljs$core$IFn$_invoke$arity$1(G__25050) : fexpr__25049.call(null,G__25050));
} else {
return and__4115__auto__;
}
})())){
var fprop_25874 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_25874," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_25874,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_25874," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_25874,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__25051){
var map__25052 = p__25051;
var map__25052__$1 = (((((!((map__25052 == null))))?(((((map__25052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25052):map__25052);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25052__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25052__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25052__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__25054){
var map__25055 = p__25054;
var map__25055__$1 = (((((!((map__25055 == null))))?(((((map__25055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25055):map__25055);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25055__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25055__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25055__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__25075 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__25075__$1 = (((((!((map__25075 == null))))?(((((map__25075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25075):map__25075);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25075__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25075__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__25076 = options;
var map__25076__$1 = (((((!((map__25076 == null))))?(((((map__25076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25076):map__25076);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25076__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25076__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25076__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__25077 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__25082 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__25082__$1 = (((((!((map__25082 == null))))?(((((map__25082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25082):map__25082);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25082__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25082__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25077,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25077,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__25095_25881 = cljs.core.seq(libs_to_load);
var chunk__25096_25882 = null;
var count__25097_25883 = (0);
var i__25098_25884 = (0);
while(true){
if((i__25098_25884 < count__25097_25883)){
var lib_25885 = chunk__25096_25882.cljs$core$IIndexed$_nth$arity$2(null,i__25098_25884);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_25885)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25885),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25885),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25885),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25885),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_25885,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25885),"');");
}

}
}
}


var G__25886 = seq__25095_25881;
var G__25887 = chunk__25096_25882;
var G__25888 = count__25097_25883;
var G__25889 = (i__25098_25884 + (1));
seq__25095_25881 = G__25886;
chunk__25096_25882 = G__25887;
count__25097_25883 = G__25888;
i__25098_25884 = G__25889;
continue;
} else {
var temp__5735__auto___25890 = cljs.core.seq(seq__25095_25881);
if(temp__5735__auto___25890){
var seq__25095_25891__$1 = temp__5735__auto___25890;
if(cljs.core.chunked_seq_QMARK_(seq__25095_25891__$1)){
var c__4556__auto___25892 = cljs.core.chunk_first(seq__25095_25891__$1);
var G__25893 = cljs.core.chunk_rest(seq__25095_25891__$1);
var G__25894 = c__4556__auto___25892;
var G__25895 = cljs.core.count(c__4556__auto___25892);
var G__25896 = (0);
seq__25095_25881 = G__25893;
chunk__25096_25882 = G__25894;
count__25097_25883 = G__25895;
i__25098_25884 = G__25896;
continue;
} else {
var lib_25897 = cljs.core.first(seq__25095_25891__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_25897)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25897),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25897),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25897),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25897),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_25897,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25897),"');");
}

}
}
}


var G__25898 = cljs.core.next(seq__25095_25891__$1);
var G__25899 = null;
var G__25900 = (0);
var G__25901 = (0);
seq__25095_25881 = G__25898;
chunk__25096_25882 = G__25899;
count__25097_25883 = G__25900;
i__25098_25884 = G__25901;
continue;
}
} else {
}
}
break;
}

var seq__25113_25902 = cljs.core.seq(node_libs);
var chunk__25114_25903 = null;
var count__25115_25904 = (0);
var i__25116_25905 = (0);
while(true){
if((i__25116_25905 < count__25115_25904)){
var lib_25906 = chunk__25114_25903.cljs$core$IIndexed$_nth$arity$2(null,i__25116_25905);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_25906)," = require('",lib_25906,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__25907 = seq__25113_25902;
var G__25908 = chunk__25114_25903;
var G__25909 = count__25115_25904;
var G__25910 = (i__25116_25905 + (1));
seq__25113_25902 = G__25907;
chunk__25114_25903 = G__25908;
count__25115_25904 = G__25909;
i__25116_25905 = G__25910;
continue;
} else {
var temp__5735__auto___25911 = cljs.core.seq(seq__25113_25902);
if(temp__5735__auto___25911){
var seq__25113_25912__$1 = temp__5735__auto___25911;
if(cljs.core.chunked_seq_QMARK_(seq__25113_25912__$1)){
var c__4556__auto___25913 = cljs.core.chunk_first(seq__25113_25912__$1);
var G__25914 = cljs.core.chunk_rest(seq__25113_25912__$1);
var G__25915 = c__4556__auto___25913;
var G__25916 = cljs.core.count(c__4556__auto___25913);
var G__25917 = (0);
seq__25113_25902 = G__25914;
chunk__25114_25903 = G__25915;
count__25115_25904 = G__25916;
i__25116_25905 = G__25917;
continue;
} else {
var lib_25918 = cljs.core.first(seq__25113_25912__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_25918)," = require('",lib_25918,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__25919 = cljs.core.next(seq__25113_25912__$1);
var G__25920 = null;
var G__25921 = (0);
var G__25922 = (0);
seq__25113_25902 = G__25919;
chunk__25114_25903 = G__25920;
count__25115_25904 = G__25921;
i__25116_25905 = G__25922;
continue;
}
} else {
}
}
break;
}

var seq__25117_25923 = cljs.core.seq(global_exports_libs);
var chunk__25118_25924 = null;
var count__25119_25925 = (0);
var i__25120_25926 = (0);
while(true){
if((i__25120_25926 < count__25119_25925)){
var lib_25927 = chunk__25118_25924.cljs$core$IIndexed$_nth$arity$2(null,i__25120_25926);
var map__25128_25928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_25927));
var map__25128_25929__$1 = (((((!((map__25128_25928 == null))))?(((((map__25128_25928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25128_25928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25128_25928):map__25128_25928);
var global_exports_25930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25128_25929__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_25930,lib_25927);


var G__25931 = seq__25117_25923;
var G__25932 = chunk__25118_25924;
var G__25933 = count__25119_25925;
var G__25934 = (i__25120_25926 + (1));
seq__25117_25923 = G__25931;
chunk__25118_25924 = G__25932;
count__25119_25925 = G__25933;
i__25120_25926 = G__25934;
continue;
} else {
var temp__5735__auto___25935 = cljs.core.seq(seq__25117_25923);
if(temp__5735__auto___25935){
var seq__25117_25936__$1 = temp__5735__auto___25935;
if(cljs.core.chunked_seq_QMARK_(seq__25117_25936__$1)){
var c__4556__auto___25937 = cljs.core.chunk_first(seq__25117_25936__$1);
var G__25938 = cljs.core.chunk_rest(seq__25117_25936__$1);
var G__25939 = c__4556__auto___25937;
var G__25940 = cljs.core.count(c__4556__auto___25937);
var G__25941 = (0);
seq__25117_25923 = G__25938;
chunk__25118_25924 = G__25939;
count__25119_25925 = G__25940;
i__25120_25926 = G__25941;
continue;
} else {
var lib_25942 = cljs.core.first(seq__25117_25936__$1);
var map__25130_25943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_25942));
var map__25130_25944__$1 = (((((!((map__25130_25943 == null))))?(((((map__25130_25943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25130_25943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25130_25943):map__25130_25943);
var global_exports_25945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25130_25944__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_25945,lib_25942);


var G__25946 = cljs.core.next(seq__25117_25936__$1);
var G__25947 = null;
var G__25948 = (0);
var G__25949 = (0);
seq__25117_25923 = G__25946;
chunk__25118_25924 = G__25947;
count__25119_25925 = G__25948;
i__25120_25926 = G__25949;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__25132){
var map__25133 = p__25132;
var map__25133__$1 = (((((!((map__25133 == null))))?(((((map__25133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25133):map__25133);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25133__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25133__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25133__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25133__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25133__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25133__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25133__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__25141){
var map__25145 = p__25141;
var map__25145__$1 = (((((!((map__25145 == null))))?(((((map__25145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25145):map__25145);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25145__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25145__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25145__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25145__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25145__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25145__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25145__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__25147){
var map__25151 = p__25147;
var map__25151__$1 = (((((!((map__25151 == null))))?(((((map__25151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25151):map__25151);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25151__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25151__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25151__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25151__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25151__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__25167_25950 = cljs.core.seq(protocols);
var chunk__25168_25951 = null;
var count__25169_25952 = (0);
var i__25170_25953 = (0);
while(true){
if((i__25170_25953 < count__25169_25952)){
var protocol_25954 = chunk__25168_25951.cljs$core$IIndexed$_nth$arity$2(null,i__25170_25953);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_25954)),"}");


var G__25955 = seq__25167_25950;
var G__25956 = chunk__25168_25951;
var G__25957 = count__25169_25952;
var G__25958 = (i__25170_25953 + (1));
seq__25167_25950 = G__25955;
chunk__25168_25951 = G__25956;
count__25169_25952 = G__25957;
i__25170_25953 = G__25958;
continue;
} else {
var temp__5735__auto___25959 = cljs.core.seq(seq__25167_25950);
if(temp__5735__auto___25959){
var seq__25167_25960__$1 = temp__5735__auto___25959;
if(cljs.core.chunked_seq_QMARK_(seq__25167_25960__$1)){
var c__4556__auto___25961 = cljs.core.chunk_first(seq__25167_25960__$1);
var G__25962 = cljs.core.chunk_rest(seq__25167_25960__$1);
var G__25963 = c__4556__auto___25961;
var G__25964 = cljs.core.count(c__4556__auto___25961);
var G__25965 = (0);
seq__25167_25950 = G__25962;
chunk__25168_25951 = G__25963;
count__25169_25952 = G__25964;
i__25170_25953 = G__25965;
continue;
} else {
var protocol_25966 = cljs.core.first(seq__25167_25960__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_25966)),"}");


var G__25967 = cljs.core.next(seq__25167_25960__$1);
var G__25968 = null;
var G__25969 = (0);
var G__25970 = (0);
seq__25167_25950 = G__25967;
chunk__25168_25951 = G__25968;
count__25169_25952 = G__25969;
i__25170_25953 = G__25970;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__25171_25971 = cljs.core.seq(fields__$1);
var chunk__25172_25972 = null;
var count__25173_25973 = (0);
var i__25174_25974 = (0);
while(true){
if((i__25174_25974 < count__25173_25973)){
var fld_25975 = chunk__25172_25972.cljs$core$IIndexed$_nth$arity$2(null,i__25174_25974);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_25975," = ",fld_25975,";");


var G__25976 = seq__25171_25971;
var G__25977 = chunk__25172_25972;
var G__25978 = count__25173_25973;
var G__25979 = (i__25174_25974 + (1));
seq__25171_25971 = G__25976;
chunk__25172_25972 = G__25977;
count__25173_25973 = G__25978;
i__25174_25974 = G__25979;
continue;
} else {
var temp__5735__auto___25980 = cljs.core.seq(seq__25171_25971);
if(temp__5735__auto___25980){
var seq__25171_25981__$1 = temp__5735__auto___25980;
if(cljs.core.chunked_seq_QMARK_(seq__25171_25981__$1)){
var c__4556__auto___25982 = cljs.core.chunk_first(seq__25171_25981__$1);
var G__25983 = cljs.core.chunk_rest(seq__25171_25981__$1);
var G__25984 = c__4556__auto___25982;
var G__25985 = cljs.core.count(c__4556__auto___25982);
var G__25986 = (0);
seq__25171_25971 = G__25983;
chunk__25172_25972 = G__25984;
count__25173_25973 = G__25985;
i__25174_25974 = G__25986;
continue;
} else {
var fld_25987 = cljs.core.first(seq__25171_25981__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_25987," = ",fld_25987,";");


var G__25988 = cljs.core.next(seq__25171_25981__$1);
var G__25989 = null;
var G__25990 = (0);
var G__25991 = (0);
seq__25171_25971 = G__25988;
chunk__25172_25972 = G__25989;
count__25173_25973 = G__25990;
i__25174_25974 = G__25991;
continue;
}
} else {
}
}
break;
}

var seq__25175_25992 = cljs.core.seq(pmasks);
var chunk__25176_25993 = null;
var count__25177_25994 = (0);
var i__25178_25995 = (0);
while(true){
if((i__25178_25995 < count__25177_25994)){
var vec__25185_25996 = chunk__25176_25993.cljs$core$IIndexed$_nth$arity$2(null,i__25178_25995);
var pno_25997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25185_25996,(0),null);
var pmask_25998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25185_25996,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_25997,"$ = ",pmask_25998,";");


var G__25999 = seq__25175_25992;
var G__26000 = chunk__25176_25993;
var G__26001 = count__25177_25994;
var G__26002 = (i__25178_25995 + (1));
seq__25175_25992 = G__25999;
chunk__25176_25993 = G__26000;
count__25177_25994 = G__26001;
i__25178_25995 = G__26002;
continue;
} else {
var temp__5735__auto___26003 = cljs.core.seq(seq__25175_25992);
if(temp__5735__auto___26003){
var seq__25175_26004__$1 = temp__5735__auto___26003;
if(cljs.core.chunked_seq_QMARK_(seq__25175_26004__$1)){
var c__4556__auto___26005 = cljs.core.chunk_first(seq__25175_26004__$1);
var G__26006 = cljs.core.chunk_rest(seq__25175_26004__$1);
var G__26007 = c__4556__auto___26005;
var G__26008 = cljs.core.count(c__4556__auto___26005);
var G__26009 = (0);
seq__25175_25992 = G__26006;
chunk__25176_25993 = G__26007;
count__25177_25994 = G__26008;
i__25178_25995 = G__26009;
continue;
} else {
var vec__25188_26010 = cljs.core.first(seq__25175_26004__$1);
var pno_26011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25188_26010,(0),null);
var pmask_26012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25188_26010,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_26011,"$ = ",pmask_26012,";");


var G__26013 = cljs.core.next(seq__25175_26004__$1);
var G__26014 = null;
var G__26015 = (0);
var G__26016 = (0);
seq__25175_25992 = G__26013;
chunk__25176_25993 = G__26014;
count__25177_25994 = G__26015;
i__25178_25995 = G__26016;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__25193){
var map__25194 = p__25193;
var map__25194__$1 = (((((!((map__25194 == null))))?(((((map__25194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25194):map__25194);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25194__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25194__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25194__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25194__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25194__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__25196_26017 = cljs.core.seq(protocols);
var chunk__25197_26018 = null;
var count__25198_26019 = (0);
var i__25199_26020 = (0);
while(true){
if((i__25199_26020 < count__25198_26019)){
var protocol_26021 = chunk__25197_26018.cljs$core$IIndexed$_nth$arity$2(null,i__25199_26020);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_26021)),"}");


var G__26022 = seq__25196_26017;
var G__26023 = chunk__25197_26018;
var G__26024 = count__25198_26019;
var G__26025 = (i__25199_26020 + (1));
seq__25196_26017 = G__26022;
chunk__25197_26018 = G__26023;
count__25198_26019 = G__26024;
i__25199_26020 = G__26025;
continue;
} else {
var temp__5735__auto___26026 = cljs.core.seq(seq__25196_26017);
if(temp__5735__auto___26026){
var seq__25196_26027__$1 = temp__5735__auto___26026;
if(cljs.core.chunked_seq_QMARK_(seq__25196_26027__$1)){
var c__4556__auto___26028 = cljs.core.chunk_first(seq__25196_26027__$1);
var G__26029 = cljs.core.chunk_rest(seq__25196_26027__$1);
var G__26030 = c__4556__auto___26028;
var G__26031 = cljs.core.count(c__4556__auto___26028);
var G__26032 = (0);
seq__25196_26017 = G__26029;
chunk__25197_26018 = G__26030;
count__25198_26019 = G__26031;
i__25199_26020 = G__26032;
continue;
} else {
var protocol_26033 = cljs.core.first(seq__25196_26027__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_26033)),"}");


var G__26034 = cljs.core.next(seq__25196_26027__$1);
var G__26035 = null;
var G__26036 = (0);
var G__26037 = (0);
seq__25196_26017 = G__26034;
chunk__25197_26018 = G__26035;
count__25198_26019 = G__26036;
i__25199_26020 = G__26037;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__25225_26038 = cljs.core.seq(fields__$1);
var chunk__25226_26039 = null;
var count__25227_26040 = (0);
var i__25228_26041 = (0);
while(true){
if((i__25228_26041 < count__25227_26040)){
var fld_26042 = chunk__25226_26039.cljs$core$IIndexed$_nth$arity$2(null,i__25228_26041);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_26042," = ",fld_26042,";");


var G__26043 = seq__25225_26038;
var G__26044 = chunk__25226_26039;
var G__26045 = count__25227_26040;
var G__26046 = (i__25228_26041 + (1));
seq__25225_26038 = G__26043;
chunk__25226_26039 = G__26044;
count__25227_26040 = G__26045;
i__25228_26041 = G__26046;
continue;
} else {
var temp__5735__auto___26047 = cljs.core.seq(seq__25225_26038);
if(temp__5735__auto___26047){
var seq__25225_26048__$1 = temp__5735__auto___26047;
if(cljs.core.chunked_seq_QMARK_(seq__25225_26048__$1)){
var c__4556__auto___26049 = cljs.core.chunk_first(seq__25225_26048__$1);
var G__26050 = cljs.core.chunk_rest(seq__25225_26048__$1);
var G__26051 = c__4556__auto___26049;
var G__26052 = cljs.core.count(c__4556__auto___26049);
var G__26053 = (0);
seq__25225_26038 = G__26050;
chunk__25226_26039 = G__26051;
count__25227_26040 = G__26052;
i__25228_26041 = G__26053;
continue;
} else {
var fld_26054 = cljs.core.first(seq__25225_26048__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_26054," = ",fld_26054,";");


var G__26055 = cljs.core.next(seq__25225_26048__$1);
var G__26056 = null;
var G__26057 = (0);
var G__26058 = (0);
seq__25225_26038 = G__26055;
chunk__25226_26039 = G__26056;
count__25227_26040 = G__26057;
i__25228_26041 = G__26058;
continue;
}
} else {
}
}
break;
}

var seq__25229_26059 = cljs.core.seq(pmasks);
var chunk__25230_26060 = null;
var count__25231_26061 = (0);
var i__25232_26062 = (0);
while(true){
if((i__25232_26062 < count__25231_26061)){
var vec__25239_26063 = chunk__25230_26060.cljs$core$IIndexed$_nth$arity$2(null,i__25232_26062);
var pno_26064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25239_26063,(0),null);
var pmask_26065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25239_26063,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_26064,"$ = ",pmask_26065,";");


var G__26066 = seq__25229_26059;
var G__26067 = chunk__25230_26060;
var G__26068 = count__25231_26061;
var G__26069 = (i__25232_26062 + (1));
seq__25229_26059 = G__26066;
chunk__25230_26060 = G__26067;
count__25231_26061 = G__26068;
i__25232_26062 = G__26069;
continue;
} else {
var temp__5735__auto___26070 = cljs.core.seq(seq__25229_26059);
if(temp__5735__auto___26070){
var seq__25229_26071__$1 = temp__5735__auto___26070;
if(cljs.core.chunked_seq_QMARK_(seq__25229_26071__$1)){
var c__4556__auto___26072 = cljs.core.chunk_first(seq__25229_26071__$1);
var G__26073 = cljs.core.chunk_rest(seq__25229_26071__$1);
var G__26074 = c__4556__auto___26072;
var G__26075 = cljs.core.count(c__4556__auto___26072);
var G__26076 = (0);
seq__25229_26059 = G__26073;
chunk__25230_26060 = G__26074;
count__25231_26061 = G__26075;
i__25232_26062 = G__26076;
continue;
} else {
var vec__25242_26077 = cljs.core.first(seq__25229_26071__$1);
var pno_26078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25242_26077,(0),null);
var pmask_26079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25242_26077,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_26078,"$ = ",pmask_26079,";");


var G__26080 = cljs.core.next(seq__25229_26071__$1);
var G__26081 = null;
var G__26082 = (0);
var G__26083 = (0);
seq__25229_26059 = G__26080;
chunk__25230_26060 = G__26081;
count__25231_26061 = G__26082;
i__25232_26062 = G__26083;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__25245){
var map__25246 = p__25245;
var map__25246__$1 = (((((!((map__25246 == null))))?(((((map__25246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25246):map__25246);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25246__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25246__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25246__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25246__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25246__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__25248){
var map__25249 = p__25248;
var map__25249__$1 = (((((!((map__25249 == null))))?(((((map__25249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25249):map__25249);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25249__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25249__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25249__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25249__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25249__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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

var seq__25265 = cljs.core.seq(table);
var chunk__25266 = null;
var count__25267 = (0);
var i__25268 = (0);
while(true){
if((i__25268 < count__25267)){
var vec__25275 = chunk__25266.cljs$core$IIndexed$_nth$arity$2(null,i__25268);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25275,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25275,(1),null);
var ns_26084 = cljs.core.namespace(sym);
var name_26085 = cljs.core.name(sym);
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


var G__26086 = seq__25265;
var G__26087 = chunk__25266;
var G__26088 = count__25267;
var G__26089 = (i__25268 + (1));
seq__25265 = G__26086;
chunk__25266 = G__26087;
count__25267 = G__26088;
i__25268 = G__26089;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__25265);
if(temp__5735__auto__){
var seq__25265__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25265__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__25265__$1);
var G__26090 = cljs.core.chunk_rest(seq__25265__$1);
var G__26091 = c__4556__auto__;
var G__26092 = cljs.core.count(c__4556__auto__);
var G__26093 = (0);
seq__25265 = G__26090;
chunk__25266 = G__26091;
count__25267 = G__26092;
i__25268 = G__26093;
continue;
} else {
var vec__25278 = cljs.core.first(seq__25265__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25278,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25278,(1),null);
var ns_26094 = cljs.core.namespace(sym);
var name_26095 = cljs.core.name(sym);
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


var G__26096 = cljs.core.next(seq__25265__$1);
var G__26097 = null;
var G__26098 = (0);
var G__26099 = (0);
seq__25265 = G__26096;
chunk__25266 = G__26097;
count__25267 = G__26098;
i__25268 = G__26099;
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
var G__25282 = arguments.length;
switch (G__25282) {
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
var k_26101 = cljs.core.first(ks);
var vec__25287_26102 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_26101);
var top_26103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25287_26102,(0),null);
var prefix_SINGLEQUOTE__26104 = vec__25287_26102;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_26101)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__26104) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_26103)) || (cljs.core.contains_QMARK_(known_externs,top_26103)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__26104)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_26103);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__26104)),";");
}
} else {
}

var m_26105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_26101);
if(cljs.core.empty_QMARK_(m_26105)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__26104,m_26105,top_level,known_externs);
}

var G__26106 = cljs.core.next(ks);
ks = G__26106;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);

