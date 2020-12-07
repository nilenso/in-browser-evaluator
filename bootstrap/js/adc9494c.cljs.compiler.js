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
var G__25155 = (d__$2 + (1));
var G__25156 = shadow__$1;
d__$1 = G__25155;
G__24472__$1 = G__25156;
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
var G__24499 = arguments.length;
switch (G__24499) {
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
var ms = (function (){var fexpr__24500 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11501,11501,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__24500.cljs$core$IFn$_invoke$arity$1 ? fexpr__24500.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__24500.call(null,ss__$3));
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
var G__24501 = cp;
switch (G__24501) {
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
var seq__24541_25159 = cljs.core.seq(s);
var chunk__24542_25160 = null;
var count__24543_25161 = (0);
var i__24544_25162 = (0);
while(true){
if((i__24544_25162 < count__24543_25161)){
var c_25163 = chunk__24542_25160.cljs$core$IIndexed$_nth$arity$2(null,i__24544_25162);
sb.append(cljs.compiler.escape_char(c_25163));


var G__25164 = seq__24541_25159;
var G__25165 = chunk__24542_25160;
var G__25166 = count__24543_25161;
var G__25167 = (i__24544_25162 + (1));
seq__24541_25159 = G__25164;
chunk__24542_25160 = G__25165;
count__24543_25161 = G__25166;
i__24544_25162 = G__25167;
continue;
} else {
var temp__5735__auto___25168 = cljs.core.seq(seq__24541_25159);
if(temp__5735__auto___25168){
var seq__24541_25169__$1 = temp__5735__auto___25168;
if(cljs.core.chunked_seq_QMARK_(seq__24541_25169__$1)){
var c__4556__auto___25170 = cljs.core.chunk_first(seq__24541_25169__$1);
var G__25171 = cljs.core.chunk_rest(seq__24541_25169__$1);
var G__25172 = c__4556__auto___25170;
var G__25173 = cljs.core.count(c__4556__auto___25170);
var G__25174 = (0);
seq__24541_25159 = G__25171;
chunk__24542_25160 = G__25172;
count__24543_25161 = G__25173;
i__24544_25162 = G__25174;
continue;
} else {
var c_25175 = cljs.core.first(seq__24541_25169__$1);
sb.append(cljs.compiler.escape_char(c_25175));


var G__25176 = cljs.core.next(seq__24541_25169__$1);
var G__25177 = null;
var G__25178 = (0);
var G__25179 = (0);
seq__24541_25159 = G__25176;
chunk__24542_25160 = G__25177;
count__24543_25161 = G__25178;
i__24544_25162 = G__25179;
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
var map__24546_25180 = ast;
var map__24546_25181__$1 = (((((!((map__24546_25180 == null))))?(((((map__24546_25180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24546_25180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24546_25180):map__24546_25180);
var env_25182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24546_25181__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_25182))){
var map__24548_25183 = env_25182;
var map__24548_25184__$1 = (((((!((map__24548_25183 == null))))?(((((map__24548_25183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24548_25183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24548_25183):map__24548_25183);
var line_25185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24548_25184__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_25186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24548_25184__$1,new cljs.core.Keyword(null,"column","column",2078222095));
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_25185 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_25186)?(column_25186 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
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
var len__4736__auto___25188 = arguments.length;
var i__4737__auto___25189 = (0);
while(true){
if((i__4737__auto___25189 < len__4736__auto___25188)){
args_arr__4757__auto__.push((arguments[i__4737__auto___25189]));

var G__25193 = (i__4737__auto___25189 + (1));
i__4737__auto___25189 = G__25193;
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
var s_25194 = (function (){var G__24562 = a;
if((!(typeof a === 'string'))){
return G__24562.toString();
} else {
return G__24562;
}
})();
var temp__5739__auto___25195 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___25195 == null)){
} else {
var sm_data_25196 = temp__5739__auto___25195;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_25196,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__24553_SHARP_){
return (p1__24553_SHARP_ + s_25194.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_25194], 0));

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

var seq__24563 = cljs.core.seq(xs);
var chunk__24564 = null;
var count__24565 = (0);
var i__24566 = (0);
while(true){
if((i__24566 < count__24565)){
var x = chunk__24564.cljs$core$IIndexed$_nth$arity$2(null,i__24566);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__25197 = seq__24563;
var G__25198 = chunk__24564;
var G__25199 = count__24565;
var G__25200 = (i__24566 + (1));
seq__24563 = G__25197;
chunk__24564 = G__25198;
count__24565 = G__25199;
i__24566 = G__25200;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__24563);
if(temp__5735__auto__){
var seq__24563__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24563__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24563__$1);
var G__25201 = cljs.core.chunk_rest(seq__24563__$1);
var G__25202 = c__4556__auto__;
var G__25203 = cljs.core.count(c__4556__auto__);
var G__25204 = (0);
seq__24563 = G__25201;
chunk__24564 = G__25202;
count__24565 = G__25203;
i__24566 = G__25204;
continue;
} else {
var x = cljs.core.first(seq__24563__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__25205 = cljs.core.next(seq__24563__$1);
var G__25206 = null;
var G__25207 = (0);
var G__25208 = (0);
seq__24563 = G__25205;
chunk__24564 = G__25206;
count__24565 = G__25207;
i__24566 = G__25208;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__24567){
var map__24568 = p__24567;
var map__24568__$1 = (((((!((map__24568 == null))))?(((((map__24568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24568):map__24568);
var m = map__24568__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24568__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__24577 = arguments.length;
switch (G__24577) {
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
var len__4736__auto___25210 = arguments.length;
var i__4737__auto___25211 = (0);
while(true){
if((i__4737__auto___25211 < len__4736__auto___25210)){
args_arr__4757__auto__.push((arguments[i__4737__auto___25211]));

var G__25212 = (i__4737__auto___25211 + (1));
i__4737__auto___25211 = G__25212;
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

var seq__24581_25213 = cljs.core.seq(xs);
var chunk__24582_25214 = null;
var count__24583_25215 = (0);
var i__24584_25216 = (0);
while(true){
if((i__24584_25216 < count__24583_25215)){
var x_25217 = chunk__24582_25214.cljs$core$IIndexed$_nth$arity$2(null,i__24584_25216);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_25217);


var G__25218 = seq__24581_25213;
var G__25219 = chunk__24582_25214;
var G__25220 = count__24583_25215;
var G__25221 = (i__24584_25216 + (1));
seq__24581_25213 = G__25218;
chunk__24582_25214 = G__25219;
count__24583_25215 = G__25220;
i__24584_25216 = G__25221;
continue;
} else {
var temp__5735__auto___25222 = cljs.core.seq(seq__24581_25213);
if(temp__5735__auto___25222){
var seq__24581_25223__$1 = temp__5735__auto___25222;
if(cljs.core.chunked_seq_QMARK_(seq__24581_25223__$1)){
var c__4556__auto___25224 = cljs.core.chunk_first(seq__24581_25223__$1);
var G__25225 = cljs.core.chunk_rest(seq__24581_25223__$1);
var G__25226 = c__4556__auto___25224;
var G__25227 = cljs.core.count(c__4556__auto___25224);
var G__25228 = (0);
seq__24581_25213 = G__25225;
chunk__24582_25214 = G__25226;
count__24583_25215 = G__25227;
i__24584_25216 = G__25228;
continue;
} else {
var x_25229 = cljs.core.first(seq__24581_25223__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_25229);


var G__25230 = cljs.core.next(seq__24581_25223__$1);
var G__25231 = null;
var G__25232 = (0);
var G__25233 = (0);
seq__24581_25213 = G__25230;
chunk__24582_25214 = G__25231;
count__24583_25215 = G__25232;
i__24584_25216 = G__25233;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq24571){
var G__24572 = cljs.core.first(seq24571);
var seq24571__$1 = cljs.core.next(seq24571);
var G__24573 = cljs.core.first(seq24571__$1);
var seq24571__$2 = cljs.core.next(seq24571__$1);
var G__24574 = cljs.core.first(seq24571__$2);
var seq24571__$3 = cljs.core.next(seq24571__$2);
var G__24575 = cljs.core.first(seq24571__$3);
var seq24571__$4 = cljs.core.next(seq24571__$3);
var G__24576 = cljs.core.first(seq24571__$4);
var seq24571__$5 = cljs.core.next(seq24571__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24572,G__24573,G__24574,G__24575,G__24576,seq24571__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24585_25234 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24586_25235 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24587_25236 = true;
var _STAR_print_fn_STAR__temp_val__24588_25237 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24587_25236);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24588_25237);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24586_25235);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24585_25234);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__24589 = cljs.core.get_global_hierarchy;
return (fexpr__24589.cljs$core$IFn$_invoke$arity$0 ? fexpr__24589.cljs$core$IFn$_invoke$arity$0() : fexpr__24589.call(null));
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
var vec__24590 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24590,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24590,(1),null);
var G__24594 = ns;
var G__24595 = name;
var G__24596 = (function (){
var G__24597 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__24597) : cljs.compiler.emit_constant.call(null,G__24597));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__24594,G__24595,G__24596) : cljs.compiler.emit_record_value.call(null,G__24594,G__24595,G__24596));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__24598 = cljs.core.keys(x);
var G__24599 = cljs.core.vals(x);
var G__24600 = cljs.compiler.emit_constants_comma_sep;
var G__24601 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__24598,G__24599,G__24600,G__24601) : cljs.compiler.emit_map.call(null,G__24598,G__24599,G__24600,G__24601));
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
var G__24602 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__24603 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__24602,G__24603) : cljs.compiler.emit_with_meta.call(null,G__24602,G__24603));
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
var vec__24604 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24604,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24604,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24604,(2),null);
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
var G__24608 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__24608) : x.call(null,G__24608));
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
var G__24610 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__24610) : x.call(null,G__24610));
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
var G__24612 = items;
var G__24613 = (function (p1__24611_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__24611_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__24612,G__24613) : cljs.compiler.emit_js_object.call(null,G__24612,G__24613));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__24615){
var map__24616 = p__24615;
var map__24616__$1 = (((((!((map__24616 == null))))?(((((map__24616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24616):map__24616);
var ast = map__24616__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24616__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24616__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24616__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__24618 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__24618__$1 = (((((!((map__24618 == null))))?(((((map__24618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24618):map__24618);
var cenv = map__24618__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24618__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__24620 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__24623 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__24623) : cljs.compiler.es5_GT__EQ_.call(null,G__24623));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__24620,cljs.analyzer.es5_allowed);
} else {
return G__24620;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__24624 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__24624,reserved);
} else {
return G__24624;
}
})();
var env__24463__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__24625_25242 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__24625_25243__$1 = (((G__24625_25242 instanceof cljs.core.Keyword))?G__24625_25242.fqn:null);
switch (G__24625_25243__$1) {
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__24626){
var map__24627 = p__24626;
var map__24627__$1 = (((((!((map__24627 == null))))?(((((map__24627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24627):map__24627);
var arg = map__24627__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24627__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24627__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24627__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24627__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));


var map__24629 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__24629__$1 = (((((!((map__24629 == null))))?(((((map__24629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24629):map__24629);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24629__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__24631){
var map__24632 = p__24631;
var map__24632__$1 = (((((!((map__24632 == null))))?(((((map__24632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24632):map__24632);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24632__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24632__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24632__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_((function (p1__24635_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__24635_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__24648 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__24648) : comma_sep.call(null,G__24648));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__24649 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__24649) : comma_sep.call(null,G__24649));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__24651){
var map__24652 = p__24651;
var map__24652__$1 = (((((!((map__24652 == null))))?(((((map__24652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24652):map__24652);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24652__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24652__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24652__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__24655){
var map__24656 = p__24655;
var map__24656__$1 = (((((!((map__24656 == null))))?(((((map__24656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24656):map__24656);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24656__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24656__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_((function (p1__24658_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__24658_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__24659 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__24659) : comma_sep.call(null,G__24659));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__24660){
var map__24661 = p__24660;
var map__24661__$1 = (((((!((map__24661 == null))))?(((((map__24661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24661):map__24661);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24661__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24661__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var temp__5735__auto___25246 = cljs.core.seq(items);
if(temp__5735__auto___25246){
var items_25247__$1 = temp__5735__auto___25246;
var vec__24663_25248 = items_25247__$1;
var seq__24664_25249 = cljs.core.seq(vec__24663_25248);
var first__24665_25250 = cljs.core.first(seq__24664_25249);
var seq__24664_25251__$1 = cljs.core.next(seq__24664_25249);
var vec__24666_25252 = first__24665_25250;
var k_25253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24666_25252,(0),null);
var v_25254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24666_25252,(1),null);
var r_25255 = seq__24664_25251__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_25253),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_25254) : emit_js_object_val.call(null,v_25254)));

var seq__24669_25256 = cljs.core.seq(r_25255);
var chunk__24670_25257 = null;
var count__24671_25258 = (0);
var i__24672_25259 = (0);
while(true){
if((i__24672_25259 < count__24671_25258)){
var vec__24679_25260 = chunk__24670_25257.cljs$core$IIndexed$_nth$arity$2(null,i__24672_25259);
var k_25261__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24679_25260,(0),null);
var v_25262__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24679_25260,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_25261__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_25262__$1) : emit_js_object_val.call(null,v_25262__$1)));


var G__25263 = seq__24669_25256;
var G__25264 = chunk__24670_25257;
var G__25265 = count__24671_25258;
var G__25266 = (i__24672_25259 + (1));
seq__24669_25256 = G__25263;
chunk__24670_25257 = G__25264;
count__24671_25258 = G__25265;
i__24672_25259 = G__25266;
continue;
} else {
var temp__5735__auto___25267__$1 = cljs.core.seq(seq__24669_25256);
if(temp__5735__auto___25267__$1){
var seq__24669_25268__$1 = temp__5735__auto___25267__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24669_25268__$1)){
var c__4556__auto___25269 = cljs.core.chunk_first(seq__24669_25268__$1);
var G__25270 = cljs.core.chunk_rest(seq__24669_25268__$1);
var G__25271 = c__4556__auto___25269;
var G__25272 = cljs.core.count(c__4556__auto___25269);
var G__25273 = (0);
seq__24669_25256 = G__25270;
chunk__24670_25257 = G__25271;
count__24671_25258 = G__25272;
i__24672_25259 = G__25273;
continue;
} else {
var vec__24683_25274 = cljs.core.first(seq__24669_25268__$1);
var k_25275__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24683_25274,(0),null);
var v_25276__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24683_25274,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_25275__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_25276__$1) : emit_js_object_val.call(null,v_25276__$1)));


var G__25277 = cljs.core.next(seq__24669_25268__$1);
var G__25278 = null;
var G__25279 = (0);
var G__25280 = (0);
seq__24669_25256 = G__25277;
chunk__24670_25257 = G__25278;
count__24671_25258 = G__25279;
i__24672_25259 = G__25280;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__24686){
var map__24687 = p__24686;
var map__24687__$1 = (((((!((map__24687 == null))))?(((((map__24687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24687):map__24687);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24687__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24687__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24687__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__24691){
var map__24692 = p__24691;
var map__24692__$1 = (((((!((map__24692 == null))))?(((((map__24692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24692):map__24692);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24692__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24692__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__24694){
var map__24695 = p__24694;
var map__24695__$1 = (((((!((map__24695 == null))))?(((((map__24695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24695):map__24695);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24695__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__24697){
var map__24698 = p__24697;
var map__24698__$1 = (((((!((map__24698 == null))))?(((((map__24698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24698):map__24698);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24698__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24698__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__24700 = cljs.analyzer.unwrap_quote(expr);
var map__24700__$1 = (((((!((map__24700 == null))))?(((((map__24700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24700):map__24700);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24700__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24700__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24700__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__24702 = cljs.analyzer.unwrap_quote(expr);
var map__24702__$1 = (((((!((map__24702 == null))))?(((((map__24702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24702):map__24702);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24702__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24702__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24702__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var or__4126__auto__ = (function (){var fexpr__24709 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__24709.cljs$core$IFn$_invoke$arity$1 ? fexpr__24709.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__24709.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__24710){
var map__24711 = p__24710;
var map__24711__$1 = (((((!((map__24711 == null))))?(((((map__24711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24711):map__24711);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24711__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24711__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24711__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24711__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24711__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__24714){
var map__24715 = p__24714;
var map__24715__$1 = (((((!((map__24715 == null))))?(((((map__24715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24715):map__24715);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24715__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24715__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24715__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24715__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__24717_25300 = cljs.core.seq(nodes);
var chunk__24718_25301 = null;
var count__24719_25302 = (0);
var i__24720_25303 = (0);
while(true){
if((i__24720_25303 < count__24719_25302)){
var map__24737_25304 = chunk__24718_25301.cljs$core$IIndexed$_nth$arity$2(null,i__24720_25303);
var map__24737_25305__$1 = (((((!((map__24737_25304 == null))))?(((((map__24737_25304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24737_25304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24737_25304):map__24737_25304);
var ts_25306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24737_25305__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__24738_25307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24737_25305__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__24738_25308__$1 = (((((!((map__24738_25307 == null))))?(((((map__24738_25307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24738_25307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24738_25307):map__24738_25307);
var then_25309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24738_25308__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__24745_25318 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_25306));
var chunk__24746_25319 = null;
var count__24747_25320 = (0);
var i__24748_25321 = (0);
while(true){
if((i__24748_25321 < count__24747_25320)){
var test_25322 = chunk__24746_25319.cljs$core$IIndexed$_nth$arity$2(null,i__24748_25321);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25322,":");


var G__25327 = seq__24745_25318;
var G__25328 = chunk__24746_25319;
var G__25329 = count__24747_25320;
var G__25330 = (i__24748_25321 + (1));
seq__24745_25318 = G__25327;
chunk__24746_25319 = G__25328;
count__24747_25320 = G__25329;
i__24748_25321 = G__25330;
continue;
} else {
var temp__5735__auto___25331 = cljs.core.seq(seq__24745_25318);
if(temp__5735__auto___25331){
var seq__24745_25332__$1 = temp__5735__auto___25331;
if(cljs.core.chunked_seq_QMARK_(seq__24745_25332__$1)){
var c__4556__auto___25334 = cljs.core.chunk_first(seq__24745_25332__$1);
var G__25335 = cljs.core.chunk_rest(seq__24745_25332__$1);
var G__25336 = c__4556__auto___25334;
var G__25337 = cljs.core.count(c__4556__auto___25334);
var G__25338 = (0);
seq__24745_25318 = G__25335;
chunk__24746_25319 = G__25336;
count__24747_25320 = G__25337;
i__24748_25321 = G__25338;
continue;
} else {
var test_25339 = cljs.core.first(seq__24745_25332__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25339,":");


var G__25340 = cljs.core.next(seq__24745_25332__$1);
var G__25341 = null;
var G__25342 = (0);
var G__25343 = (0);
seq__24745_25318 = G__25340;
chunk__24746_25319 = G__25341;
count__24747_25320 = G__25342;
i__24748_25321 = G__25343;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_25309);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_25309);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__25348 = seq__24717_25300;
var G__25349 = chunk__24718_25301;
var G__25350 = count__24719_25302;
var G__25351 = (i__24720_25303 + (1));
seq__24717_25300 = G__25348;
chunk__24718_25301 = G__25349;
count__24719_25302 = G__25350;
i__24720_25303 = G__25351;
continue;
} else {
var temp__5735__auto___25355 = cljs.core.seq(seq__24717_25300);
if(temp__5735__auto___25355){
var seq__24717_25356__$1 = temp__5735__auto___25355;
if(cljs.core.chunked_seq_QMARK_(seq__24717_25356__$1)){
var c__4556__auto___25357 = cljs.core.chunk_first(seq__24717_25356__$1);
var G__25358 = cljs.core.chunk_rest(seq__24717_25356__$1);
var G__25359 = c__4556__auto___25357;
var G__25360 = cljs.core.count(c__4556__auto___25357);
var G__25361 = (0);
seq__24717_25300 = G__25358;
chunk__24718_25301 = G__25359;
count__24719_25302 = G__25360;
i__24720_25303 = G__25361;
continue;
} else {
var map__24750_25362 = cljs.core.first(seq__24717_25356__$1);
var map__24750_25363__$1 = (((((!((map__24750_25362 == null))))?(((((map__24750_25362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24750_25362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24750_25362):map__24750_25362);
var ts_25364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24750_25363__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__24751_25365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24750_25363__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__24751_25366__$1 = (((((!((map__24751_25365 == null))))?(((((map__24751_25365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24751_25365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24751_25365):map__24751_25365);
var then_25367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24751_25366__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__24754_25386 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_25364));
var chunk__24755_25387 = null;
var count__24756_25388 = (0);
var i__24757_25389 = (0);
while(true){
if((i__24757_25389 < count__24756_25388)){
var test_25390 = chunk__24755_25387.cljs$core$IIndexed$_nth$arity$2(null,i__24757_25389);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25390,":");


var G__25391 = seq__24754_25386;
var G__25392 = chunk__24755_25387;
var G__25393 = count__24756_25388;
var G__25394 = (i__24757_25389 + (1));
seq__24754_25386 = G__25391;
chunk__24755_25387 = G__25392;
count__24756_25388 = G__25393;
i__24757_25389 = G__25394;
continue;
} else {
var temp__5735__auto___25395__$1 = cljs.core.seq(seq__24754_25386);
if(temp__5735__auto___25395__$1){
var seq__24754_25396__$1 = temp__5735__auto___25395__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24754_25396__$1)){
var c__4556__auto___25397 = cljs.core.chunk_first(seq__24754_25396__$1);
var G__25398 = cljs.core.chunk_rest(seq__24754_25396__$1);
var G__25399 = c__4556__auto___25397;
var G__25400 = cljs.core.count(c__4556__auto___25397);
var G__25401 = (0);
seq__24754_25386 = G__25398;
chunk__24755_25387 = G__25399;
count__24756_25388 = G__25400;
i__24757_25389 = G__25401;
continue;
} else {
var test_25402 = cljs.core.first(seq__24754_25396__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25402,":");


var G__25403 = cljs.core.next(seq__24754_25396__$1);
var G__25404 = null;
var G__25405 = (0);
var G__25406 = (0);
seq__24754_25386 = G__25403;
chunk__24755_25387 = G__25404;
count__24756_25388 = G__25405;
i__24757_25389 = G__25406;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_25367);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_25367);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__25407 = cljs.core.next(seq__24717_25356__$1);
var G__25408 = null;
var G__25409 = (0);
var G__25410 = (0);
seq__24717_25300 = G__25407;
chunk__24718_25301 = G__25408;
count__24719_25302 = G__25409;
i__24720_25303 = G__25410;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__24758){
var map__24759 = p__24758;
var map__24759__$1 = (((((!((map__24759 == null))))?(((((map__24759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24759):map__24759);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24759__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24759__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__24764 = env;
var G__24765 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__24764,G__24765) : cljs.compiler.resolve_type.call(null,G__24764,G__24765));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__24766 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24766,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24766,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__24761_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__24761_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__24761_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__24769 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__24769,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__24769;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__24772 = env;
var G__24773 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__24772,G__24773) : cljs.compiler.resolve_type.call(null,G__24772,G__24773));
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
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24774_SHARP_){
return cljs.compiler.resolve_type(env,p1__24774_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__24775 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__24776 = cljs.core.seq(vec__24775);
var first__24777 = cljs.core.first(seq__24776);
var seq__24776__$1 = cljs.core.next(seq__24776);
var p = first__24777;
var first__24777__$1 = cljs.core.first(seq__24776__$1);
var seq__24776__$2 = cljs.core.next(seq__24776__$1);
var ts = first__24777__$1;
var first__24777__$2 = cljs.core.first(seq__24776__$2);
var seq__24776__$3 = cljs.core.next(seq__24776__$2);
var n = first__24777__$2;
var xs = seq__24776__$3;
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
var vec__24778 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__24779 = cljs.core.seq(vec__24778);
var first__24780 = cljs.core.first(seq__24779);
var seq__24779__$1 = cljs.core.next(seq__24779);
var p = first__24780;
var first__24780__$1 = cljs.core.first(seq__24779__$1);
var seq__24779__$2 = cljs.core.next(seq__24779__$1);
var ts = first__24780__$1;
var xs = seq__24779__$2;
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
var G__24782 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__24781 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__24781.cljs$core$IFn$_invoke$arity$1 ? fexpr__24781.cljs$core$IFn$_invoke$arity$1(G__24782) : fexpr__24781.call(null,G__24782));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__24787 = arguments.length;
switch (G__24787) {
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
var vec__24796 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24783_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__24783_SHARP_);
} else {
return p1__24783_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__24797 = cljs.core.seq(vec__24796);
var first__24798 = cljs.core.first(seq__24797);
var seq__24797__$1 = cljs.core.next(seq__24797);
var x = first__24798;
var ys = seq__24797__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__24799 = cljs.core.seq(ys);
var chunk__24800 = null;
var count__24801 = (0);
var i__24802 = (0);
while(true){
if((i__24802 < count__24801)){
var next_line = chunk__24800.cljs$core$IIndexed$_nth$arity$2(null,i__24802);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__25470 = seq__24799;
var G__25471 = chunk__24800;
var G__25472 = count__24801;
var G__25473 = (i__24802 + (1));
seq__24799 = G__25470;
chunk__24800 = G__25471;
count__24801 = G__25472;
i__24802 = G__25473;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__24799);
if(temp__5735__auto__){
var seq__24799__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24799__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24799__$1);
var G__25474 = cljs.core.chunk_rest(seq__24799__$1);
var G__25475 = c__4556__auto__;
var G__25476 = cljs.core.count(c__4556__auto__);
var G__25477 = (0);
seq__24799 = G__25474;
chunk__24800 = G__25475;
count__24801 = G__25476;
i__24802 = G__25477;
continue;
} else {
var next_line = cljs.core.first(seq__24799__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__25478 = cljs.core.next(seq__24799__$1);
var G__25479 = null;
var G__25480 = (0);
var G__25481 = (0);
seq__24799 = G__25478;
chunk__24800 = G__25479;
count__24801 = G__25480;
i__24802 = G__25481;
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

var seq__24806_25482 = cljs.core.seq(docs__$2);
var chunk__24807_25483 = null;
var count__24808_25484 = (0);
var i__24809_25485 = (0);
while(true){
if((i__24809_25485 < count__24808_25484)){
var e_25486 = chunk__24807_25483.cljs$core$IIndexed$_nth$arity$2(null,i__24809_25485);
if(cljs.core.truth_(e_25486)){
print_comment_lines(e_25486);
} else {
}


var G__25487 = seq__24806_25482;
var G__25488 = chunk__24807_25483;
var G__25489 = count__24808_25484;
var G__25490 = (i__24809_25485 + (1));
seq__24806_25482 = G__25487;
chunk__24807_25483 = G__25488;
count__24808_25484 = G__25489;
i__24809_25485 = G__25490;
continue;
} else {
var temp__5735__auto___25491 = cljs.core.seq(seq__24806_25482);
if(temp__5735__auto___25491){
var seq__24806_25492__$1 = temp__5735__auto___25491;
if(cljs.core.chunked_seq_QMARK_(seq__24806_25492__$1)){
var c__4556__auto___25493 = cljs.core.chunk_first(seq__24806_25492__$1);
var G__25494 = cljs.core.chunk_rest(seq__24806_25492__$1);
var G__25495 = c__4556__auto___25493;
var G__25496 = cljs.core.count(c__4556__auto___25493);
var G__25497 = (0);
seq__24806_25482 = G__25494;
chunk__24807_25483 = G__25495;
count__24808_25484 = G__25496;
i__24809_25485 = G__25497;
continue;
} else {
var e_25498 = cljs.core.first(seq__24806_25492__$1);
if(cljs.core.truth_(e_25498)){
print_comment_lines(e_25498);
} else {
}


var G__25499 = cljs.core.next(seq__24806_25492__$1);
var G__25500 = null;
var G__25501 = (0);
var G__25502 = (0);
seq__24806_25482 = G__25499;
chunk__24807_25483 = G__25500;
count__24808_25484 = G__25501;
i__24809_25485 = G__25502;
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
var and__4115__auto__ = cljs.core.some((function (p1__24815_SHARP_){
return goog.string.startsWith(p1__24815_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__24819){
var map__24820 = p__24819;
var map__24820__$1 = (((((!((map__24820 == null))))?(((((map__24820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24820):map__24820);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24820__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24820__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24820__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24820__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24820__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24820__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24820__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24820__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24820__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24820__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__24822){
var map__24823 = p__24822;
var map__24823__$1 = (((((!((map__24823 == null))))?(((((map__24823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24823):map__24823);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24823__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24823__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24823__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__24827_25517 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__24828_25518 = null;
var count__24829_25519 = (0);
var i__24830_25520 = (0);
while(true){
if((i__24830_25520 < count__24829_25519)){
var vec__24851_25521 = chunk__24828_25518.cljs$core$IIndexed$_nth$arity$2(null,i__24830_25520);
var i_25522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24851_25521,(0),null);
var param_25523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24851_25521,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_25523);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__25524 = seq__24827_25517;
var G__25525 = chunk__24828_25518;
var G__25526 = count__24829_25519;
var G__25527 = (i__24830_25520 + (1));
seq__24827_25517 = G__25524;
chunk__24828_25518 = G__25525;
count__24829_25519 = G__25526;
i__24830_25520 = G__25527;
continue;
} else {
var temp__5735__auto___25528 = cljs.core.seq(seq__24827_25517);
if(temp__5735__auto___25528){
var seq__24827_25529__$1 = temp__5735__auto___25528;
if(cljs.core.chunked_seq_QMARK_(seq__24827_25529__$1)){
var c__4556__auto___25530 = cljs.core.chunk_first(seq__24827_25529__$1);
var G__25531 = cljs.core.chunk_rest(seq__24827_25529__$1);
var G__25532 = c__4556__auto___25530;
var G__25533 = cljs.core.count(c__4556__auto___25530);
var G__25534 = (0);
seq__24827_25517 = G__25531;
chunk__24828_25518 = G__25532;
count__24829_25519 = G__25533;
i__24830_25520 = G__25534;
continue;
} else {
var vec__24854_25535 = cljs.core.first(seq__24827_25529__$1);
var i_25536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24854_25535,(0),null);
var param_25537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24854_25535,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_25537);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__25540 = cljs.core.next(seq__24827_25529__$1);
var G__25541 = null;
var G__25542 = (0);
var G__25543 = (0);
seq__24827_25517 = G__25540;
chunk__24828_25518 = G__25541;
count__24829_25519 = G__25542;
i__24830_25520 = G__25543;
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

var seq__24857_25544 = cljs.core.seq(params);
var chunk__24858_25545 = null;
var count__24859_25546 = (0);
var i__24860_25547 = (0);
while(true){
if((i__24860_25547 < count__24859_25546)){
var param_25548 = chunk__24858_25545.cljs$core$IIndexed$_nth$arity$2(null,i__24860_25547);
cljs.compiler.emit(param_25548);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25548,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25549 = seq__24857_25544;
var G__25550 = chunk__24858_25545;
var G__25551 = count__24859_25546;
var G__25552 = (i__24860_25547 + (1));
seq__24857_25544 = G__25549;
chunk__24858_25545 = G__25550;
count__24859_25546 = G__25551;
i__24860_25547 = G__25552;
continue;
} else {
var temp__5735__auto___25553 = cljs.core.seq(seq__24857_25544);
if(temp__5735__auto___25553){
var seq__24857_25554__$1 = temp__5735__auto___25553;
if(cljs.core.chunked_seq_QMARK_(seq__24857_25554__$1)){
var c__4556__auto___25555 = cljs.core.chunk_first(seq__24857_25554__$1);
var G__25556 = cljs.core.chunk_rest(seq__24857_25554__$1);
var G__25557 = c__4556__auto___25555;
var G__25558 = cljs.core.count(c__4556__auto___25555);
var G__25559 = (0);
seq__24857_25544 = G__25556;
chunk__24858_25545 = G__25557;
count__24859_25546 = G__25558;
i__24860_25547 = G__25559;
continue;
} else {
var param_25560 = cljs.core.first(seq__24857_25554__$1);
cljs.compiler.emit(param_25560);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25560,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25561 = cljs.core.next(seq__24857_25554__$1);
var G__25562 = null;
var G__25563 = (0);
var G__25564 = (0);
seq__24857_25544 = G__25561;
chunk__24858_25545 = G__25562;
count__24859_25546 = G__25563;
i__24860_25547 = G__25564;
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

var seq__24861_25567 = cljs.core.seq(params);
var chunk__24862_25568 = null;
var count__24863_25569 = (0);
var i__24864_25570 = (0);
while(true){
if((i__24864_25570 < count__24863_25569)){
var param_25572 = chunk__24862_25568.cljs$core$IIndexed$_nth$arity$2(null,i__24864_25570);
cljs.compiler.emit(param_25572);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25572,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25573 = seq__24861_25567;
var G__25574 = chunk__24862_25568;
var G__25575 = count__24863_25569;
var G__25576 = (i__24864_25570 + (1));
seq__24861_25567 = G__25573;
chunk__24862_25568 = G__25574;
count__24863_25569 = G__25575;
i__24864_25570 = G__25576;
continue;
} else {
var temp__5735__auto___25577 = cljs.core.seq(seq__24861_25567);
if(temp__5735__auto___25577){
var seq__24861_25578__$1 = temp__5735__auto___25577;
if(cljs.core.chunked_seq_QMARK_(seq__24861_25578__$1)){
var c__4556__auto___25579 = cljs.core.chunk_first(seq__24861_25578__$1);
var G__25581 = cljs.core.chunk_rest(seq__24861_25578__$1);
var G__25582 = c__4556__auto___25579;
var G__25583 = cljs.core.count(c__4556__auto___25579);
var G__25584 = (0);
seq__24861_25567 = G__25581;
chunk__24862_25568 = G__25582;
count__24863_25569 = G__25583;
i__24864_25570 = G__25584;
continue;
} else {
var param_25589 = cljs.core.first(seq__24861_25578__$1);
cljs.compiler.emit(param_25589);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25589,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25590 = cljs.core.next(seq__24861_25578__$1);
var G__25591 = null;
var G__25592 = (0);
var G__25593 = (0);
seq__24861_25567 = G__25590;
chunk__24862_25568 = G__25591;
count__24863_25569 = G__25592;
i__24864_25570 = G__25593;
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
var seq__24865 = cljs.core.seq(params);
var chunk__24866 = null;
var count__24867 = (0);
var i__24868 = (0);
while(true){
if((i__24868 < count__24867)){
var param = chunk__24866.cljs$core$IIndexed$_nth$arity$2(null,i__24868);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25601 = seq__24865;
var G__25602 = chunk__24866;
var G__25603 = count__24867;
var G__25604 = (i__24868 + (1));
seq__24865 = G__25601;
chunk__24866 = G__25602;
count__24867 = G__25603;
i__24868 = G__25604;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__24865);
if(temp__5735__auto__){
var seq__24865__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24865__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24865__$1);
var G__25605 = cljs.core.chunk_rest(seq__24865__$1);
var G__25606 = c__4556__auto__;
var G__25607 = cljs.core.count(c__4556__auto__);
var G__25608 = (0);
seq__24865 = G__25605;
chunk__24866 = G__25606;
count__24867 = G__25607;
i__24868 = G__25608;
continue;
} else {
var param = cljs.core.first(seq__24865__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25610 = cljs.core.next(seq__24865__$1);
var G__25611 = null;
var G__25612 = (0);
var G__25613 = (0);
seq__24865 = G__25610;
chunk__24866 = G__25611;
count__24867 = G__25612;
i__24868 = G__25613;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__24869){
var map__24870 = p__24869;
var map__24870__$1 = (((((!((map__24870 == null))))?(((((map__24870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24870):map__24870);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24870__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24870__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24870__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24870__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24870__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24870__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__24872){
var map__24873 = p__24872;
var map__24873__$1 = (((((!((map__24873 == null))))?(((((map__24873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24873):map__24873);
var f = map__24873__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24873__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24873__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24873__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24873__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24873__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24873__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24873__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24873__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__24463__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_25622__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_25623 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_25622__$1);
var delegate_name_25624 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_25623),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_25624," = function (");

var seq__24875_25625 = cljs.core.seq(params);
var chunk__24876_25626 = null;
var count__24877_25627 = (0);
var i__24878_25628 = (0);
while(true){
if((i__24878_25628 < count__24877_25627)){
var param_25629 = chunk__24876_25626.cljs$core$IIndexed$_nth$arity$2(null,i__24878_25628);
cljs.compiler.emit(param_25629);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25629,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25630 = seq__24875_25625;
var G__25631 = chunk__24876_25626;
var G__25632 = count__24877_25627;
var G__25633 = (i__24878_25628 + (1));
seq__24875_25625 = G__25630;
chunk__24876_25626 = G__25631;
count__24877_25627 = G__25632;
i__24878_25628 = G__25633;
continue;
} else {
var temp__5735__auto___25634 = cljs.core.seq(seq__24875_25625);
if(temp__5735__auto___25634){
var seq__24875_25635__$1 = temp__5735__auto___25634;
if(cljs.core.chunked_seq_QMARK_(seq__24875_25635__$1)){
var c__4556__auto___25636 = cljs.core.chunk_first(seq__24875_25635__$1);
var G__25637 = cljs.core.chunk_rest(seq__24875_25635__$1);
var G__25638 = c__4556__auto___25636;
var G__25639 = cljs.core.count(c__4556__auto___25636);
var G__25640 = (0);
seq__24875_25625 = G__25637;
chunk__24876_25626 = G__25638;
count__24877_25627 = G__25639;
i__24878_25628 = G__25640;
continue;
} else {
var param_25641 = cljs.core.first(seq__24875_25635__$1);
cljs.compiler.emit(param_25641);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25641,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25642 = cljs.core.next(seq__24875_25635__$1);
var G__25643 = null;
var G__25644 = (0);
var G__25645 = (0);
seq__24875_25625 = G__25642;
chunk__24876_25626 = G__25643;
count__24877_25627 = G__25644;
i__24878_25628 = G__25645;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_25623," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_25646 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_25646,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_25624,".call(this,");

var seq__24879_25647 = cljs.core.seq(params);
var chunk__24880_25648 = null;
var count__24881_25649 = (0);
var i__24882_25650 = (0);
while(true){
if((i__24882_25650 < count__24881_25649)){
var param_25651 = chunk__24880_25648.cljs$core$IIndexed$_nth$arity$2(null,i__24882_25650);
cljs.compiler.emit(param_25651);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25651,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25652 = seq__24879_25647;
var G__25653 = chunk__24880_25648;
var G__25654 = count__24881_25649;
var G__25655 = (i__24882_25650 + (1));
seq__24879_25647 = G__25652;
chunk__24880_25648 = G__25653;
count__24881_25649 = G__25654;
i__24882_25650 = G__25655;
continue;
} else {
var temp__5735__auto___25656 = cljs.core.seq(seq__24879_25647);
if(temp__5735__auto___25656){
var seq__24879_25657__$1 = temp__5735__auto___25656;
if(cljs.core.chunked_seq_QMARK_(seq__24879_25657__$1)){
var c__4556__auto___25658 = cljs.core.chunk_first(seq__24879_25657__$1);
var G__25659 = cljs.core.chunk_rest(seq__24879_25657__$1);
var G__25660 = c__4556__auto___25658;
var G__25661 = cljs.core.count(c__4556__auto___25658);
var G__25662 = (0);
seq__24879_25647 = G__25659;
chunk__24880_25648 = G__25660;
count__24881_25649 = G__25661;
i__24882_25650 = G__25662;
continue;
} else {
var param_25663 = cljs.core.first(seq__24879_25657__$1);
cljs.compiler.emit(param_25663);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25663,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25664 = cljs.core.next(seq__24879_25657__$1);
var G__25665 = null;
var G__25666 = (0);
var G__25667 = (0);
seq__24879_25647 = G__25664;
chunk__24880_25648 = G__25665;
count__24881_25649 = G__25666;
i__24882_25650 = G__25667;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25623,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_25623,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_25622__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25623,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_25624,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_25623,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24463__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__24887){
var map__24888 = p__24887;
var map__24888__$1 = (((((!((map__24888 == null))))?(((((map__24888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24888):map__24888);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24888__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24888__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24888__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24888__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24888__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24888__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24888__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24888__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24884_SHARP_){
var and__4115__auto__ = p1__24884_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__24884_SHARP_));
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
var name_25673__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_25674 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_25673__$1);
var maxparams_25675 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_25676 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_25674),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_25677 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__24885_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__24885_SHARP_)));
}),cljs.core.seq(mmap_25676));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_25674," = null;");

var seq__24890_25678 = cljs.core.seq(ms_25677);
var chunk__24891_25679 = null;
var count__24892_25680 = (0);
var i__24893_25681 = (0);
while(true){
if((i__24893_25681 < count__24892_25680)){
var vec__24900_25682 = chunk__24891_25679.cljs$core$IIndexed$_nth$arity$2(null,i__24893_25681);
var n_25683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24900_25682,(0),null);
var meth_25684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24900_25682,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_25683," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25684))){
cljs.compiler.emit_variadic_fn_method(meth_25684);
} else {
cljs.compiler.emit_fn_method(meth_25684);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__25685 = seq__24890_25678;
var G__25686 = chunk__24891_25679;
var G__25687 = count__24892_25680;
var G__25688 = (i__24893_25681 + (1));
seq__24890_25678 = G__25685;
chunk__24891_25679 = G__25686;
count__24892_25680 = G__25687;
i__24893_25681 = G__25688;
continue;
} else {
var temp__5735__auto___25689 = cljs.core.seq(seq__24890_25678);
if(temp__5735__auto___25689){
var seq__24890_25690__$1 = temp__5735__auto___25689;
if(cljs.core.chunked_seq_QMARK_(seq__24890_25690__$1)){
var c__4556__auto___25691 = cljs.core.chunk_first(seq__24890_25690__$1);
var G__25692 = cljs.core.chunk_rest(seq__24890_25690__$1);
var G__25693 = c__4556__auto___25691;
var G__25694 = cljs.core.count(c__4556__auto___25691);
var G__25695 = (0);
seq__24890_25678 = G__25692;
chunk__24891_25679 = G__25693;
count__24892_25680 = G__25694;
i__24893_25681 = G__25695;
continue;
} else {
var vec__24906_25696 = cljs.core.first(seq__24890_25690__$1);
var n_25697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24906_25696,(0),null);
var meth_25698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24906_25696,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_25697," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25698))){
cljs.compiler.emit_variadic_fn_method(meth_25698);
} else {
cljs.compiler.emit_fn_method(meth_25698);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__25699 = cljs.core.next(seq__24890_25690__$1);
var G__25700 = null;
var G__25701 = (0);
var G__25702 = (0);
seq__24890_25678 = G__25699;
chunk__24891_25679 = G__25700;
count__24892_25680 = G__25701;
i__24893_25681 = G__25702;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25674," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_25675),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_25675)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_25675));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__24910_25703 = cljs.core.seq(ms_25677);
var chunk__24911_25704 = null;
var count__24912_25705 = (0);
var i__24913_25706 = (0);
while(true){
if((i__24913_25706 < count__24912_25705)){
var vec__24920_25707 = chunk__24911_25704.cljs$core$IIndexed$_nth$arity$2(null,i__24913_25706);
var n_25708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24920_25707,(0),null);
var meth_25709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24920_25707,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25709))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_25710 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_25710," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_25711 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_25710," = new cljs.core.IndexedSeq(",a_25711,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_25708,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_25675)),(((cljs.core.count(maxparams_25675) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_25710,");"], 0));
} else {
var pcnt_25712 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25709));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_25712,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_25708,".call(this",(((pcnt_25712 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_25712,maxparams_25675)),null,(1),null)),(2),null))),");");
}


var G__25713 = seq__24910_25703;
var G__25714 = chunk__24911_25704;
var G__25715 = count__24912_25705;
var G__25716 = (i__24913_25706 + (1));
seq__24910_25703 = G__25713;
chunk__24911_25704 = G__25714;
count__24912_25705 = G__25715;
i__24913_25706 = G__25716;
continue;
} else {
var temp__5735__auto___25717 = cljs.core.seq(seq__24910_25703);
if(temp__5735__auto___25717){
var seq__24910_25718__$1 = temp__5735__auto___25717;
if(cljs.core.chunked_seq_QMARK_(seq__24910_25718__$1)){
var c__4556__auto___25719 = cljs.core.chunk_first(seq__24910_25718__$1);
var G__25720 = cljs.core.chunk_rest(seq__24910_25718__$1);
var G__25721 = c__4556__auto___25719;
var G__25722 = cljs.core.count(c__4556__auto___25719);
var G__25723 = (0);
seq__24910_25703 = G__25720;
chunk__24911_25704 = G__25721;
count__24912_25705 = G__25722;
i__24913_25706 = G__25723;
continue;
} else {
var vec__24923_25724 = cljs.core.first(seq__24910_25718__$1);
var n_25725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24923_25724,(0),null);
var meth_25726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24923_25724,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25726))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_25727 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_25727," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_25728 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_25727," = new cljs.core.IndexedSeq(",a_25728,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_25725,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_25675)),(((cljs.core.count(maxparams_25675) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_25727,");"], 0));
} else {
var pcnt_25729 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25726));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_25729,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_25725,".call(this",(((pcnt_25729 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_25729,maxparams_25675)),null,(1),null)),(2),null))),");");
}


var G__25730 = cljs.core.next(seq__24910_25718__$1);
var G__25731 = null;
var G__25732 = (0);
var G__25733 = (0);
seq__24910_25703 = G__25730;
chunk__24911_25704 = G__25731;
count__24912_25705 = G__25732;
i__24913_25706 = G__25733;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_25734 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_25677)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_25734,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25674,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25674,".cljs$lang$applyTo = ",cljs.core.some((function (p1__24886_SHARP_){
var vec__24926 = p1__24886_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24926,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24926,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_25677),".cljs$lang$applyTo;");
} else {
}

var seq__24929_25735 = cljs.core.seq(ms_25677);
var chunk__24930_25736 = null;
var count__24931_25737 = (0);
var i__24932_25738 = (0);
while(true){
if((i__24932_25738 < count__24931_25737)){
var vec__24939_25739 = chunk__24930_25736.cljs$core$IIndexed$_nth$arity$2(null,i__24932_25738);
var n_25740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24939_25739,(0),null);
var meth_25741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24939_25739,(1),null);
var c_25742 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25741));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25741))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25674,".cljs$core$IFn$_invoke$arity$variadic = ",n_25740,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_25674,".cljs$core$IFn$_invoke$arity$",c_25742," = ",n_25740,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__25743 = seq__24929_25735;
var G__25744 = chunk__24930_25736;
var G__25745 = count__24931_25737;
var G__25746 = (i__24932_25738 + (1));
seq__24929_25735 = G__25743;
chunk__24930_25736 = G__25744;
count__24931_25737 = G__25745;
i__24932_25738 = G__25746;
continue;
} else {
var temp__5735__auto___25747 = cljs.core.seq(seq__24929_25735);
if(temp__5735__auto___25747){
var seq__24929_25748__$1 = temp__5735__auto___25747;
if(cljs.core.chunked_seq_QMARK_(seq__24929_25748__$1)){
var c__4556__auto___25749 = cljs.core.chunk_first(seq__24929_25748__$1);
var G__25750 = cljs.core.chunk_rest(seq__24929_25748__$1);
var G__25751 = c__4556__auto___25749;
var G__25752 = cljs.core.count(c__4556__auto___25749);
var G__25753 = (0);
seq__24929_25735 = G__25750;
chunk__24930_25736 = G__25751;
count__24931_25737 = G__25752;
i__24932_25738 = G__25753;
continue;
} else {
var vec__24942_25754 = cljs.core.first(seq__24929_25748__$1);
var n_25755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24942_25754,(0),null);
var meth_25756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24942_25754,(1),null);
var c_25757 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25756));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25756))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25674,".cljs$core$IFn$_invoke$arity$variadic = ",n_25755,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_25674,".cljs$core$IFn$_invoke$arity$",c_25757," = ",n_25755,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__25758 = cljs.core.next(seq__24929_25748__$1);
var G__25759 = null;
var G__25760 = (0);
var G__25761 = (0);
seq__24929_25735 = G__25758;
chunk__24930_25736 = G__25759;
count__24931_25737 = G__25760;
i__24932_25738 = G__25761;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_25674,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__24945){
var map__24946 = p__24945;
var map__24946__$1 = (((((!((map__24946 == null))))?(((((map__24946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24946):map__24946);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24946__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24946__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24946__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__24948_25762 = cljs.core.seq(statements);
var chunk__24949_25763 = null;
var count__24950_25764 = (0);
var i__24951_25765 = (0);
while(true){
if((i__24951_25765 < count__24950_25764)){
var s_25766 = chunk__24949_25763.cljs$core$IIndexed$_nth$arity$2(null,i__24951_25765);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_25766);


var G__25767 = seq__24948_25762;
var G__25768 = chunk__24949_25763;
var G__25769 = count__24950_25764;
var G__25770 = (i__24951_25765 + (1));
seq__24948_25762 = G__25767;
chunk__24949_25763 = G__25768;
count__24950_25764 = G__25769;
i__24951_25765 = G__25770;
continue;
} else {
var temp__5735__auto___25771 = cljs.core.seq(seq__24948_25762);
if(temp__5735__auto___25771){
var seq__24948_25772__$1 = temp__5735__auto___25771;
if(cljs.core.chunked_seq_QMARK_(seq__24948_25772__$1)){
var c__4556__auto___25773 = cljs.core.chunk_first(seq__24948_25772__$1);
var G__25774 = cljs.core.chunk_rest(seq__24948_25772__$1);
var G__25775 = c__4556__auto___25773;
var G__25776 = cljs.core.count(c__4556__auto___25773);
var G__25777 = (0);
seq__24948_25762 = G__25774;
chunk__24949_25763 = G__25775;
count__24950_25764 = G__25776;
i__24951_25765 = G__25777;
continue;
} else {
var s_25778 = cljs.core.first(seq__24948_25772__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_25778);


var G__25779 = cljs.core.next(seq__24948_25772__$1);
var G__25780 = null;
var G__25781 = (0);
var G__25782 = (0);
seq__24948_25762 = G__25779;
chunk__24949_25763 = G__25780;
count__24950_25764 = G__25781;
i__24951_25765 = G__25782;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__24952){
var map__24953 = p__24952;
var map__24953__$1 = (((((!((map__24953 == null))))?(((((map__24953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24953):map__24953);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24953__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24953__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24953__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24953__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24953__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__24955,is_loop){
var map__24956 = p__24955;
var map__24956__$1 = (((((!((map__24956 == null))))?(((((map__24956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24956):map__24956);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24956__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24956__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24956__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__24958_25793 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__24959_25794 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__24959_25794);

try{var seq__24960_25795 = cljs.core.seq(bindings);
var chunk__24961_25796 = null;
var count__24962_25797 = (0);
var i__24963_25798 = (0);
while(true){
if((i__24963_25798 < count__24962_25797)){
var map__24968_25799 = chunk__24961_25796.cljs$core$IIndexed$_nth$arity$2(null,i__24963_25798);
var map__24968_25800__$1 = (((((!((map__24968_25799 == null))))?(((((map__24968_25799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24968_25799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24968_25799):map__24968_25799);
var binding_25801 = map__24968_25800__$1;
var init_25802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24968_25800__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_25801);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_25802,";");


var G__25803 = seq__24960_25795;
var G__25804 = chunk__24961_25796;
var G__25805 = count__24962_25797;
var G__25806 = (i__24963_25798 + (1));
seq__24960_25795 = G__25803;
chunk__24961_25796 = G__25804;
count__24962_25797 = G__25805;
i__24963_25798 = G__25806;
continue;
} else {
var temp__5735__auto___25807 = cljs.core.seq(seq__24960_25795);
if(temp__5735__auto___25807){
var seq__24960_25808__$1 = temp__5735__auto___25807;
if(cljs.core.chunked_seq_QMARK_(seq__24960_25808__$1)){
var c__4556__auto___25809 = cljs.core.chunk_first(seq__24960_25808__$1);
var G__25810 = cljs.core.chunk_rest(seq__24960_25808__$1);
var G__25811 = c__4556__auto___25809;
var G__25812 = cljs.core.count(c__4556__auto___25809);
var G__25813 = (0);
seq__24960_25795 = G__25810;
chunk__24961_25796 = G__25811;
count__24962_25797 = G__25812;
i__24963_25798 = G__25813;
continue;
} else {
var map__24970_25814 = cljs.core.first(seq__24960_25808__$1);
var map__24970_25815__$1 = (((((!((map__24970_25814 == null))))?(((((map__24970_25814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24970_25814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24970_25814):map__24970_25814);
var binding_25816 = map__24970_25815__$1;
var init_25817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24970_25815__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_25816);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_25817,";");


var G__25818 = cljs.core.next(seq__24960_25808__$1);
var G__25819 = null;
var G__25820 = (0);
var G__25821 = (0);
seq__24960_25795 = G__25818;
chunk__24961_25796 = G__25819;
count__24962_25797 = G__25820;
i__24963_25798 = G__25821;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__24958_25793);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__24972){
var map__24973 = p__24972;
var map__24973__$1 = (((((!((map__24973 == null))))?(((((map__24973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24973):map__24973);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24973__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24973__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24973__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___25822 = cljs.core.count(exprs);
var i_25823 = (0);
while(true){
if((i_25823 < n__4613__auto___25822)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_25823) : temps.call(null,i_25823))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_25823) : exprs.call(null,i_25823)),";");

var G__25824 = (i_25823 + (1));
i_25823 = G__25824;
continue;
} else {
}
break;
}

var n__4613__auto___25825 = cljs.core.count(exprs);
var i_25826 = (0);
while(true){
if((i_25826 < n__4613__auto___25825)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_25826) : params.call(null,i_25826)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_25826) : temps.call(null,i_25826)),";");

var G__25827 = (i_25826 + (1));
i_25826 = G__25827;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__24975){
var map__24976 = p__24975;
var map__24976__$1 = (((((!((map__24976 == null))))?(((((map__24976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24976):map__24976);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24976__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24976__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24976__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__24978_25828 = cljs.core.seq(bindings);
var chunk__24979_25829 = null;
var count__24980_25830 = (0);
var i__24981_25831 = (0);
while(true){
if((i__24981_25831 < count__24980_25830)){
var map__24986_25832 = chunk__24979_25829.cljs$core$IIndexed$_nth$arity$2(null,i__24981_25831);
var map__24986_25833__$1 = (((((!((map__24986_25832 == null))))?(((((map__24986_25832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24986_25832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24986_25832):map__24986_25832);
var binding_25834 = map__24986_25833__$1;
var init_25835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24986_25833__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_25834)," = ",init_25835,";");


var G__25837 = seq__24978_25828;
var G__25838 = chunk__24979_25829;
var G__25839 = count__24980_25830;
var G__25840 = (i__24981_25831 + (1));
seq__24978_25828 = G__25837;
chunk__24979_25829 = G__25838;
count__24980_25830 = G__25839;
i__24981_25831 = G__25840;
continue;
} else {
var temp__5735__auto___25841 = cljs.core.seq(seq__24978_25828);
if(temp__5735__auto___25841){
var seq__24978_25842__$1 = temp__5735__auto___25841;
if(cljs.core.chunked_seq_QMARK_(seq__24978_25842__$1)){
var c__4556__auto___25843 = cljs.core.chunk_first(seq__24978_25842__$1);
var G__25844 = cljs.core.chunk_rest(seq__24978_25842__$1);
var G__25845 = c__4556__auto___25843;
var G__25846 = cljs.core.count(c__4556__auto___25843);
var G__25847 = (0);
seq__24978_25828 = G__25844;
chunk__24979_25829 = G__25845;
count__24980_25830 = G__25846;
i__24981_25831 = G__25847;
continue;
} else {
var map__24988_25848 = cljs.core.first(seq__24978_25842__$1);
var map__24988_25849__$1 = (((((!((map__24988_25848 == null))))?(((((map__24988_25848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24988_25848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24988_25848):map__24988_25848);
var binding_25850 = map__24988_25849__$1;
var init_25851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24988_25849__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_25850)," = ",init_25851,";");


var G__25852 = cljs.core.next(seq__24978_25842__$1);
var G__25853 = null;
var G__25854 = (0);
var G__25855 = (0);
seq__24978_25828 = G__25852;
chunk__24979_25829 = G__25853;
count__24980_25830 = G__25854;
i__24981_25831 = G__25855;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__24992){
var map__24993 = p__24992;
var map__24993__$1 = (((((!((map__24993 == null))))?(((((map__24993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24993):map__24993);
var expr = map__24993__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24993__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24993__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24993__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
if(cljs.core.not((function (){var fexpr__25005 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__25005.cljs$core$IFn$_invoke$arity$1 ? fexpr__25005.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__25005.call(null,tag));
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
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__25007 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__25007.cljs$core$IFn$_invoke$arity$1 ? fexpr__25007.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__25007.call(null,first_arg_tag));
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
var vec__24995 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__24990_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24990_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__24991_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24991_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24995,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24995,(1),null);
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
var pimpl_25856 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_25856,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_25857 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_25857,args)),(((mfa_25857 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_25857,args)),"], 0))"], 0));
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
var G__25017 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__25016 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__25016.cljs$core$IFn$_invoke$arity$1 ? fexpr__25016.cljs$core$IFn$_invoke$arity$1(G__25017) : fexpr__25016.call(null,G__25017));
} else {
return and__4115__auto__;
}
})())){
var fprop_25858 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_25858," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_25858,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_25858," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_25858,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__25018){
var map__25019 = p__25018;
var map__25019__$1 = (((((!((map__25019 == null))))?(((((map__25019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25019):map__25019);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25019__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25019__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25019__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__25021){
var map__25022 = p__25021;
var map__25022__$1 = (((((!((map__25022 == null))))?(((((map__25022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25022):map__25022);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25022__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25022__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25022__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__25024 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__25024__$1 = (((((!((map__25024 == null))))?(((((map__25024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25024):map__25024);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25024__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25024__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__25025 = options;
var map__25025__$1 = (((((!((map__25025 == null))))?(((((map__25025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25025):map__25025);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25025__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25025__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25025__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__25026 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__25031 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__25031__$1 = (((((!((map__25031 == null))))?(((((map__25031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25031):map__25031);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25031__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25031__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25026,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25026,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__25033_25860 = cljs.core.seq(libs_to_load);
var chunk__25034_25861 = null;
var count__25035_25862 = (0);
var i__25036_25863 = (0);
while(true){
if((i__25036_25863 < count__25035_25862)){
var lib_25864 = chunk__25034_25861.cljs$core$IIndexed$_nth$arity$2(null,i__25036_25863);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_25864)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25864),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25864),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25864),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25864),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_25864,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25864),"');");
}

}
}
}


var G__25865 = seq__25033_25860;
var G__25866 = chunk__25034_25861;
var G__25867 = count__25035_25862;
var G__25868 = (i__25036_25863 + (1));
seq__25033_25860 = G__25865;
chunk__25034_25861 = G__25866;
count__25035_25862 = G__25867;
i__25036_25863 = G__25868;
continue;
} else {
var temp__5735__auto___25869 = cljs.core.seq(seq__25033_25860);
if(temp__5735__auto___25869){
var seq__25033_25870__$1 = temp__5735__auto___25869;
if(cljs.core.chunked_seq_QMARK_(seq__25033_25870__$1)){
var c__4556__auto___25871 = cljs.core.chunk_first(seq__25033_25870__$1);
var G__25872 = cljs.core.chunk_rest(seq__25033_25870__$1);
var G__25873 = c__4556__auto___25871;
var G__25874 = cljs.core.count(c__4556__auto___25871);
var G__25875 = (0);
seq__25033_25860 = G__25872;
chunk__25034_25861 = G__25873;
count__25035_25862 = G__25874;
i__25036_25863 = G__25875;
continue;
} else {
var lib_25876 = cljs.core.first(seq__25033_25870__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_25876)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25876),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25876),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25876),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25876),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_25876,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25876),"');");
}

}
}
}


var G__25877 = cljs.core.next(seq__25033_25870__$1);
var G__25878 = null;
var G__25879 = (0);
var G__25880 = (0);
seq__25033_25860 = G__25877;
chunk__25034_25861 = G__25878;
count__25035_25862 = G__25879;
i__25036_25863 = G__25880;
continue;
}
} else {
}
}
break;
}

var seq__25037_25881 = cljs.core.seq(node_libs);
var chunk__25038_25882 = null;
var count__25039_25883 = (0);
var i__25040_25884 = (0);
while(true){
if((i__25040_25884 < count__25039_25883)){
var lib_25885 = chunk__25038_25882.cljs$core$IIndexed$_nth$arity$2(null,i__25040_25884);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_25885)," = require('",lib_25885,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__25886 = seq__25037_25881;
var G__25887 = chunk__25038_25882;
var G__25888 = count__25039_25883;
var G__25889 = (i__25040_25884 + (1));
seq__25037_25881 = G__25886;
chunk__25038_25882 = G__25887;
count__25039_25883 = G__25888;
i__25040_25884 = G__25889;
continue;
} else {
var temp__5735__auto___25890 = cljs.core.seq(seq__25037_25881);
if(temp__5735__auto___25890){
var seq__25037_25891__$1 = temp__5735__auto___25890;
if(cljs.core.chunked_seq_QMARK_(seq__25037_25891__$1)){
var c__4556__auto___25892 = cljs.core.chunk_first(seq__25037_25891__$1);
var G__25893 = cljs.core.chunk_rest(seq__25037_25891__$1);
var G__25894 = c__4556__auto___25892;
var G__25895 = cljs.core.count(c__4556__auto___25892);
var G__25896 = (0);
seq__25037_25881 = G__25893;
chunk__25038_25882 = G__25894;
count__25039_25883 = G__25895;
i__25040_25884 = G__25896;
continue;
} else {
var lib_25897 = cljs.core.first(seq__25037_25891__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_25897)," = require('",lib_25897,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__25898 = cljs.core.next(seq__25037_25891__$1);
var G__25899 = null;
var G__25900 = (0);
var G__25901 = (0);
seq__25037_25881 = G__25898;
chunk__25038_25882 = G__25899;
count__25039_25883 = G__25900;
i__25040_25884 = G__25901;
continue;
}
} else {
}
}
break;
}

var seq__25041_25902 = cljs.core.seq(global_exports_libs);
var chunk__25042_25903 = null;
var count__25043_25904 = (0);
var i__25044_25905 = (0);
while(true){
if((i__25044_25905 < count__25043_25904)){
var lib_25906 = chunk__25042_25903.cljs$core$IIndexed$_nth$arity$2(null,i__25044_25905);
var map__25049_25907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_25906));
var map__25049_25908__$1 = (((((!((map__25049_25907 == null))))?(((((map__25049_25907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25049_25907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25049_25907):map__25049_25907);
var global_exports_25909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25049_25908__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_25909,lib_25906);


var G__25910 = seq__25041_25902;
var G__25911 = chunk__25042_25903;
var G__25912 = count__25043_25904;
var G__25913 = (i__25044_25905 + (1));
seq__25041_25902 = G__25910;
chunk__25042_25903 = G__25911;
count__25043_25904 = G__25912;
i__25044_25905 = G__25913;
continue;
} else {
var temp__5735__auto___25914 = cljs.core.seq(seq__25041_25902);
if(temp__5735__auto___25914){
var seq__25041_25915__$1 = temp__5735__auto___25914;
if(cljs.core.chunked_seq_QMARK_(seq__25041_25915__$1)){
var c__4556__auto___25916 = cljs.core.chunk_first(seq__25041_25915__$1);
var G__25917 = cljs.core.chunk_rest(seq__25041_25915__$1);
var G__25918 = c__4556__auto___25916;
var G__25919 = cljs.core.count(c__4556__auto___25916);
var G__25920 = (0);
seq__25041_25902 = G__25917;
chunk__25042_25903 = G__25918;
count__25043_25904 = G__25919;
i__25044_25905 = G__25920;
continue;
} else {
var lib_25921 = cljs.core.first(seq__25041_25915__$1);
var map__25051_25922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_25921));
var map__25051_25923__$1 = (((((!((map__25051_25922 == null))))?(((((map__25051_25922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25051_25922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25051_25922):map__25051_25922);
var global_exports_25924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25051_25923__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_25924,lib_25921);


var G__25925 = cljs.core.next(seq__25041_25915__$1);
var G__25926 = null;
var G__25927 = (0);
var G__25928 = (0);
seq__25041_25902 = G__25925;
chunk__25042_25903 = G__25926;
count__25043_25904 = G__25927;
i__25044_25905 = G__25928;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__25053){
var map__25054 = p__25053;
var map__25054__$1 = (((((!((map__25054 == null))))?(((((map__25054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25054):map__25054);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25054__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25054__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25054__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25054__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25054__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25054__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25054__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__25057){
var map__25058 = p__25057;
var map__25058__$1 = (((((!((map__25058 == null))))?(((((map__25058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25058):map__25058);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25058__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25058__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25058__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25058__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25058__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25058__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25058__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__25061){
var map__25062 = p__25061;
var map__25062__$1 = (((((!((map__25062 == null))))?(((((map__25062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25062):map__25062);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25062__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25062__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25062__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25062__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25062__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__25064_25930 = cljs.core.seq(protocols);
var chunk__25065_25931 = null;
var count__25066_25932 = (0);
var i__25067_25933 = (0);
while(true){
if((i__25067_25933 < count__25066_25932)){
var protocol_25934 = chunk__25065_25931.cljs$core$IIndexed$_nth$arity$2(null,i__25067_25933);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_25934)),"}");


var G__25935 = seq__25064_25930;
var G__25936 = chunk__25065_25931;
var G__25937 = count__25066_25932;
var G__25938 = (i__25067_25933 + (1));
seq__25064_25930 = G__25935;
chunk__25065_25931 = G__25936;
count__25066_25932 = G__25937;
i__25067_25933 = G__25938;
continue;
} else {
var temp__5735__auto___25939 = cljs.core.seq(seq__25064_25930);
if(temp__5735__auto___25939){
var seq__25064_25940__$1 = temp__5735__auto___25939;
if(cljs.core.chunked_seq_QMARK_(seq__25064_25940__$1)){
var c__4556__auto___25941 = cljs.core.chunk_first(seq__25064_25940__$1);
var G__25942 = cljs.core.chunk_rest(seq__25064_25940__$1);
var G__25943 = c__4556__auto___25941;
var G__25944 = cljs.core.count(c__4556__auto___25941);
var G__25945 = (0);
seq__25064_25930 = G__25942;
chunk__25065_25931 = G__25943;
count__25066_25932 = G__25944;
i__25067_25933 = G__25945;
continue;
} else {
var protocol_25946 = cljs.core.first(seq__25064_25940__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_25946)),"}");


var G__25947 = cljs.core.next(seq__25064_25940__$1);
var G__25948 = null;
var G__25949 = (0);
var G__25950 = (0);
seq__25064_25930 = G__25947;
chunk__25065_25931 = G__25948;
count__25066_25932 = G__25949;
i__25067_25933 = G__25950;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__25068_25951 = cljs.core.seq(fields__$1);
var chunk__25069_25952 = null;
var count__25070_25953 = (0);
var i__25071_25954 = (0);
while(true){
if((i__25071_25954 < count__25070_25953)){
var fld_25955 = chunk__25069_25952.cljs$core$IIndexed$_nth$arity$2(null,i__25071_25954);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_25955," = ",fld_25955,";");


var G__25956 = seq__25068_25951;
var G__25957 = chunk__25069_25952;
var G__25958 = count__25070_25953;
var G__25959 = (i__25071_25954 + (1));
seq__25068_25951 = G__25956;
chunk__25069_25952 = G__25957;
count__25070_25953 = G__25958;
i__25071_25954 = G__25959;
continue;
} else {
var temp__5735__auto___25960 = cljs.core.seq(seq__25068_25951);
if(temp__5735__auto___25960){
var seq__25068_25961__$1 = temp__5735__auto___25960;
if(cljs.core.chunked_seq_QMARK_(seq__25068_25961__$1)){
var c__4556__auto___25962 = cljs.core.chunk_first(seq__25068_25961__$1);
var G__25963 = cljs.core.chunk_rest(seq__25068_25961__$1);
var G__25964 = c__4556__auto___25962;
var G__25965 = cljs.core.count(c__4556__auto___25962);
var G__25966 = (0);
seq__25068_25951 = G__25963;
chunk__25069_25952 = G__25964;
count__25070_25953 = G__25965;
i__25071_25954 = G__25966;
continue;
} else {
var fld_25967 = cljs.core.first(seq__25068_25961__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_25967," = ",fld_25967,";");


var G__25968 = cljs.core.next(seq__25068_25961__$1);
var G__25969 = null;
var G__25970 = (0);
var G__25971 = (0);
seq__25068_25951 = G__25968;
chunk__25069_25952 = G__25969;
count__25070_25953 = G__25970;
i__25071_25954 = G__25971;
continue;
}
} else {
}
}
break;
}

var seq__25072_25972 = cljs.core.seq(pmasks);
var chunk__25073_25973 = null;
var count__25074_25974 = (0);
var i__25075_25975 = (0);
while(true){
if((i__25075_25975 < count__25074_25974)){
var vec__25082_25976 = chunk__25073_25973.cljs$core$IIndexed$_nth$arity$2(null,i__25075_25975);
var pno_25977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25082_25976,(0),null);
var pmask_25978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25082_25976,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_25977,"$ = ",pmask_25978,";");


var G__25979 = seq__25072_25972;
var G__25980 = chunk__25073_25973;
var G__25981 = count__25074_25974;
var G__25982 = (i__25075_25975 + (1));
seq__25072_25972 = G__25979;
chunk__25073_25973 = G__25980;
count__25074_25974 = G__25981;
i__25075_25975 = G__25982;
continue;
} else {
var temp__5735__auto___25983 = cljs.core.seq(seq__25072_25972);
if(temp__5735__auto___25983){
var seq__25072_25984__$1 = temp__5735__auto___25983;
if(cljs.core.chunked_seq_QMARK_(seq__25072_25984__$1)){
var c__4556__auto___25985 = cljs.core.chunk_first(seq__25072_25984__$1);
var G__25986 = cljs.core.chunk_rest(seq__25072_25984__$1);
var G__25987 = c__4556__auto___25985;
var G__25988 = cljs.core.count(c__4556__auto___25985);
var G__25989 = (0);
seq__25072_25972 = G__25986;
chunk__25073_25973 = G__25987;
count__25074_25974 = G__25988;
i__25075_25975 = G__25989;
continue;
} else {
var vec__25085_25990 = cljs.core.first(seq__25072_25984__$1);
var pno_25991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25085_25990,(0),null);
var pmask_25992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25085_25990,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_25991,"$ = ",pmask_25992,";");


var G__25993 = cljs.core.next(seq__25072_25984__$1);
var G__25994 = null;
var G__25995 = (0);
var G__25996 = (0);
seq__25072_25972 = G__25993;
chunk__25073_25973 = G__25994;
count__25074_25974 = G__25995;
i__25075_25975 = G__25996;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__25090){
var map__25092 = p__25090;
var map__25092__$1 = (((((!((map__25092 == null))))?(((((map__25092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25092):map__25092);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25092__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25092__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25092__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25092__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25092__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__25095_25997 = cljs.core.seq(protocols);
var chunk__25096_25998 = null;
var count__25097_25999 = (0);
var i__25098_26000 = (0);
while(true){
if((i__25098_26000 < count__25097_25999)){
var protocol_26001 = chunk__25096_25998.cljs$core$IIndexed$_nth$arity$2(null,i__25098_26000);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_26001)),"}");


var G__26002 = seq__25095_25997;
var G__26003 = chunk__25096_25998;
var G__26004 = count__25097_25999;
var G__26005 = (i__25098_26000 + (1));
seq__25095_25997 = G__26002;
chunk__25096_25998 = G__26003;
count__25097_25999 = G__26004;
i__25098_26000 = G__26005;
continue;
} else {
var temp__5735__auto___26006 = cljs.core.seq(seq__25095_25997);
if(temp__5735__auto___26006){
var seq__25095_26007__$1 = temp__5735__auto___26006;
if(cljs.core.chunked_seq_QMARK_(seq__25095_26007__$1)){
var c__4556__auto___26008 = cljs.core.chunk_first(seq__25095_26007__$1);
var G__26009 = cljs.core.chunk_rest(seq__25095_26007__$1);
var G__26010 = c__4556__auto___26008;
var G__26011 = cljs.core.count(c__4556__auto___26008);
var G__26012 = (0);
seq__25095_25997 = G__26009;
chunk__25096_25998 = G__26010;
count__25097_25999 = G__26011;
i__25098_26000 = G__26012;
continue;
} else {
var protocol_26013 = cljs.core.first(seq__25095_26007__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_26013)),"}");


var G__26014 = cljs.core.next(seq__25095_26007__$1);
var G__26015 = null;
var G__26016 = (0);
var G__26017 = (0);
seq__25095_25997 = G__26014;
chunk__25096_25998 = G__26015;
count__25097_25999 = G__26016;
i__25098_26000 = G__26017;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__25099_26018 = cljs.core.seq(fields__$1);
var chunk__25100_26019 = null;
var count__25101_26020 = (0);
var i__25102_26021 = (0);
while(true){
if((i__25102_26021 < count__25101_26020)){
var fld_26022 = chunk__25100_26019.cljs$core$IIndexed$_nth$arity$2(null,i__25102_26021);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_26022," = ",fld_26022,";");


var G__26023 = seq__25099_26018;
var G__26024 = chunk__25100_26019;
var G__26025 = count__25101_26020;
var G__26026 = (i__25102_26021 + (1));
seq__25099_26018 = G__26023;
chunk__25100_26019 = G__26024;
count__25101_26020 = G__26025;
i__25102_26021 = G__26026;
continue;
} else {
var temp__5735__auto___26027 = cljs.core.seq(seq__25099_26018);
if(temp__5735__auto___26027){
var seq__25099_26028__$1 = temp__5735__auto___26027;
if(cljs.core.chunked_seq_QMARK_(seq__25099_26028__$1)){
var c__4556__auto___26029 = cljs.core.chunk_first(seq__25099_26028__$1);
var G__26030 = cljs.core.chunk_rest(seq__25099_26028__$1);
var G__26031 = c__4556__auto___26029;
var G__26032 = cljs.core.count(c__4556__auto___26029);
var G__26033 = (0);
seq__25099_26018 = G__26030;
chunk__25100_26019 = G__26031;
count__25101_26020 = G__26032;
i__25102_26021 = G__26033;
continue;
} else {
var fld_26034 = cljs.core.first(seq__25099_26028__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_26034," = ",fld_26034,";");


var G__26035 = cljs.core.next(seq__25099_26028__$1);
var G__26036 = null;
var G__26037 = (0);
var G__26038 = (0);
seq__25099_26018 = G__26035;
chunk__25100_26019 = G__26036;
count__25101_26020 = G__26037;
i__25102_26021 = G__26038;
continue;
}
} else {
}
}
break;
}

var seq__25103_26039 = cljs.core.seq(pmasks);
var chunk__25104_26040 = null;
var count__25105_26041 = (0);
var i__25106_26042 = (0);
while(true){
if((i__25106_26042 < count__25105_26041)){
var vec__25113_26043 = chunk__25104_26040.cljs$core$IIndexed$_nth$arity$2(null,i__25106_26042);
var pno_26044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25113_26043,(0),null);
var pmask_26045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25113_26043,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_26044,"$ = ",pmask_26045,";");


var G__26046 = seq__25103_26039;
var G__26047 = chunk__25104_26040;
var G__26048 = count__25105_26041;
var G__26049 = (i__25106_26042 + (1));
seq__25103_26039 = G__26046;
chunk__25104_26040 = G__26047;
count__25105_26041 = G__26048;
i__25106_26042 = G__26049;
continue;
} else {
var temp__5735__auto___26050 = cljs.core.seq(seq__25103_26039);
if(temp__5735__auto___26050){
var seq__25103_26051__$1 = temp__5735__auto___26050;
if(cljs.core.chunked_seq_QMARK_(seq__25103_26051__$1)){
var c__4556__auto___26052 = cljs.core.chunk_first(seq__25103_26051__$1);
var G__26053 = cljs.core.chunk_rest(seq__25103_26051__$1);
var G__26054 = c__4556__auto___26052;
var G__26055 = cljs.core.count(c__4556__auto___26052);
var G__26056 = (0);
seq__25103_26039 = G__26053;
chunk__25104_26040 = G__26054;
count__25105_26041 = G__26055;
i__25106_26042 = G__26056;
continue;
} else {
var vec__25116_26057 = cljs.core.first(seq__25103_26051__$1);
var pno_26058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25116_26057,(0),null);
var pmask_26059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25116_26057,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_26058,"$ = ",pmask_26059,";");


var G__26060 = cljs.core.next(seq__25103_26051__$1);
var G__26061 = null;
var G__26062 = (0);
var G__26063 = (0);
seq__25103_26039 = G__26060;
chunk__25104_26040 = G__26061;
count__25105_26041 = G__26062;
i__25106_26042 = G__26063;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__25119){
var map__25120 = p__25119;
var map__25120__$1 = (((((!((map__25120 == null))))?(((((map__25120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25120):map__25120);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25120__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25120__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25120__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25120__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25120__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__25122){
var map__25123 = p__25122;
var map__25123__$1 = (((((!((map__25123 == null))))?(((((map__25123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25123):map__25123);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25123__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25123__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25123__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25123__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25123__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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

var seq__25131 = cljs.core.seq(table);
var chunk__25132 = null;
var count__25133 = (0);
var i__25134 = (0);
while(true){
if((i__25134 < count__25133)){
var vec__25141 = chunk__25132.cljs$core$IIndexed$_nth$arity$2(null,i__25134);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25141,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25141,(1),null);
var ns_26064 = cljs.core.namespace(sym);
var name_26065 = cljs.core.name(sym);
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


var G__26066 = seq__25131;
var G__26067 = chunk__25132;
var G__26068 = count__25133;
var G__26069 = (i__25134 + (1));
seq__25131 = G__26066;
chunk__25132 = G__26067;
count__25133 = G__26068;
i__25134 = G__26069;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__25131);
if(temp__5735__auto__){
var seq__25131__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25131__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__25131__$1);
var G__26070 = cljs.core.chunk_rest(seq__25131__$1);
var G__26071 = c__4556__auto__;
var G__26072 = cljs.core.count(c__4556__auto__);
var G__26073 = (0);
seq__25131 = G__26070;
chunk__25132 = G__26071;
count__25133 = G__26072;
i__25134 = G__26073;
continue;
} else {
var vec__25144 = cljs.core.first(seq__25131__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25144,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25144,(1),null);
var ns_26074 = cljs.core.namespace(sym);
var name_26075 = cljs.core.name(sym);
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


var G__26076 = cljs.core.next(seq__25131__$1);
var G__26077 = null;
var G__26078 = (0);
var G__26079 = (0);
seq__25131 = G__26076;
chunk__25132 = G__26077;
count__25133 = G__26078;
i__25134 = G__26079;
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
var G__25151 = arguments.length;
switch (G__25151) {
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
var k_26081 = cljs.core.first(ks);
var vec__25152_26082 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_26081);
var top_26083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25152_26082,(0),null);
var prefix_SINGLEQUOTE__26084 = vec__25152_26082;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_26081)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__26084) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_26083)) || (cljs.core.contains_QMARK_(known_externs,top_26083)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__26084)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_26083);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__26084)),";");
}
} else {
}

var m_26085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_26081);
if(cljs.core.empty_QMARK_(m_26085)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__26084,m_26085,top_level,known_externs);
}

var G__26086 = cljs.core.next(ks);
ks = G__26086;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);

