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
var map__24470 = s;
var map__24470__$1 = (((((!((map__24470 == null))))?(((((map__24470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24470):map__24470);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24470__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24470__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__24473 = info;
var map__24474 = G__24473;
var map__24474__$1 = (((((!((map__24474 == null))))?(((((map__24474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24474):map__24474);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24474__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__24473__$1 = G__24473;
while(true){
var d__$2 = d__$1;
var map__24526 = G__24473__$1;
var map__24526__$1 = (((((!((map__24526 == null))))?(((((map__24526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24526):map__24526);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24526__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__25158 = (d__$2 + (1));
var G__25159 = shadow__$1;
d__$1 = G__25158;
G__24473__$1 = G__25159;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__24528){
var map__24529 = p__24528;
var map__24529__$1 = (((((!((map__24529 == null))))?(((((map__24529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24529):map__24529);
var name_var = map__24529__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24529__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24529__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__24531 = info;
var map__24531__$1 = (((((!((map__24531 == null))))?(((((map__24531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24531):map__24531);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24531__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24531__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__24533 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__24533) : cljs.compiler.munge.call(null,G__24533));
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
var seq__24541_25166 = cljs.core.seq(s);
var chunk__24542_25167 = null;
var count__24543_25168 = (0);
var i__24544_25169 = (0);
while(true){
if((i__24544_25169 < count__24543_25168)){
var c_25170 = chunk__24542_25167.cljs$core$IIndexed$_nth$arity$2(null,i__24544_25169);
sb.append(cljs.compiler.escape_char(c_25170));


var G__25171 = seq__24541_25166;
var G__25172 = chunk__24542_25167;
var G__25173 = count__24543_25168;
var G__25174 = (i__24544_25169 + (1));
seq__24541_25166 = G__25171;
chunk__24542_25167 = G__25172;
count__24543_25168 = G__25173;
i__24544_25169 = G__25174;
continue;
} else {
var temp__5735__auto___25175 = cljs.core.seq(seq__24541_25166);
if(temp__5735__auto___25175){
var seq__24541_25176__$1 = temp__5735__auto___25175;
if(cljs.core.chunked_seq_QMARK_(seq__24541_25176__$1)){
var c__4556__auto___25177 = cljs.core.chunk_first(seq__24541_25176__$1);
var G__25178 = cljs.core.chunk_rest(seq__24541_25176__$1);
var G__25179 = c__4556__auto___25177;
var G__25180 = cljs.core.count(c__4556__auto___25177);
var G__25181 = (0);
seq__24541_25166 = G__25178;
chunk__24542_25167 = G__25179;
count__24543_25168 = G__25180;
i__24544_25169 = G__25181;
continue;
} else {
var c_25182 = cljs.core.first(seq__24541_25176__$1);
sb.append(cljs.compiler.escape_char(c_25182));


var G__25183 = cljs.core.next(seq__24541_25176__$1);
var G__25184 = null;
var G__25185 = (0);
var G__25186 = (0);
seq__24541_25166 = G__25183;
chunk__24542_25167 = G__25184;
count__24543_25168 = G__25185;
i__24544_25169 = G__25186;
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
var map__24550_25187 = ast;
var map__24550_25188__$1 = (((((!((map__24550_25187 == null))))?(((((map__24550_25187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24550_25187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24550_25187):map__24550_25187);
var env_25189 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24550_25188__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_25189))){
var map__24552_25190 = env_25189;
var map__24552_25191__$1 = (((((!((map__24552_25190 == null))))?(((((map__24552_25190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24552_25190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24552_25190):map__24552_25190);
var line_25192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24552_25191__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_25193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24552_25191__$1,new cljs.core.Keyword(null,"column","column",2078222095));
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_25192 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_25193)?(column_25193 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
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
var len__4736__auto___25195 = arguments.length;
var i__4737__auto___25196 = (0);
while(true){
if((i__4737__auto___25196 < len__4736__auto___25195)){
args_arr__4757__auto__.push((arguments[i__4737__auto___25196]));

var G__25197 = (i__4737__auto___25196 + (1));
i__4737__auto___25196 = G__25197;
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
var s_25198 = (function (){var G__24569 = a;
if((!(typeof a === 'string'))){
return G__24569.toString();
} else {
return G__24569;
}
})();
var temp__5739__auto___25199 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___25199 == null)){
} else {
var sm_data_25200 = temp__5739__auto___25199;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_25200,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__24559_SHARP_){
return (p1__24559_SHARP_ + s_25198.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_25198], 0));

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

var seq__24587 = cljs.core.seq(xs);
var chunk__24588 = null;
var count__24589 = (0);
var i__24590 = (0);
while(true){
if((i__24590 < count__24589)){
var x = chunk__24588.cljs$core$IIndexed$_nth$arity$2(null,i__24590);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__25201 = seq__24587;
var G__25202 = chunk__24588;
var G__25203 = count__24589;
var G__25204 = (i__24590 + (1));
seq__24587 = G__25201;
chunk__24588 = G__25202;
count__24589 = G__25203;
i__24590 = G__25204;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__24587);
if(temp__5735__auto__){
var seq__24587__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24587__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24587__$1);
var G__25205 = cljs.core.chunk_rest(seq__24587__$1);
var G__25206 = c__4556__auto__;
var G__25207 = cljs.core.count(c__4556__auto__);
var G__25208 = (0);
seq__24587 = G__25205;
chunk__24588 = G__25206;
count__24589 = G__25207;
i__24590 = G__25208;
continue;
} else {
var x = cljs.core.first(seq__24587__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__25209 = cljs.core.next(seq__24587__$1);
var G__25210 = null;
var G__25211 = (0);
var G__25212 = (0);
seq__24587 = G__25209;
chunk__24588 = G__25210;
count__24589 = G__25211;
i__24590 = G__25212;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__24595){
var map__24596 = p__24595;
var map__24596__$1 = (((((!((map__24596 == null))))?(((((map__24596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24596):map__24596);
var m = map__24596__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24596__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
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
var len__4736__auto___25214 = arguments.length;
var i__4737__auto___25215 = (0);
while(true){
if((i__4737__auto___25215 < len__4736__auto___25214)){
args_arr__4757__auto__.push((arguments[i__4737__auto___25215]));

var G__25216 = (i__4737__auto___25215 + (1));
i__4737__auto___25215 = G__25216;
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

var seq__24612_25217 = cljs.core.seq(xs);
var chunk__24613_25218 = null;
var count__24614_25219 = (0);
var i__24615_25220 = (0);
while(true){
if((i__24615_25220 < count__24614_25219)){
var x_25221 = chunk__24613_25218.cljs$core$IIndexed$_nth$arity$2(null,i__24615_25220);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_25221);


var G__25222 = seq__24612_25217;
var G__25223 = chunk__24613_25218;
var G__25224 = count__24614_25219;
var G__25225 = (i__24615_25220 + (1));
seq__24612_25217 = G__25222;
chunk__24613_25218 = G__25223;
count__24614_25219 = G__25224;
i__24615_25220 = G__25225;
continue;
} else {
var temp__5735__auto___25226 = cljs.core.seq(seq__24612_25217);
if(temp__5735__auto___25226){
var seq__24612_25227__$1 = temp__5735__auto___25226;
if(cljs.core.chunked_seq_QMARK_(seq__24612_25227__$1)){
var c__4556__auto___25228 = cljs.core.chunk_first(seq__24612_25227__$1);
var G__25229 = cljs.core.chunk_rest(seq__24612_25227__$1);
var G__25230 = c__4556__auto___25228;
var G__25231 = cljs.core.count(c__4556__auto___25228);
var G__25232 = (0);
seq__24612_25217 = G__25229;
chunk__24613_25218 = G__25230;
count__24614_25219 = G__25231;
i__24615_25220 = G__25232;
continue;
} else {
var x_25233 = cljs.core.first(seq__24612_25227__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_25233);


var G__25234 = cljs.core.next(seq__24612_25227__$1);
var G__25235 = null;
var G__25236 = (0);
var G__25237 = (0);
seq__24612_25217 = G__25234;
chunk__24613_25218 = G__25235;
count__24614_25219 = G__25236;
i__24615_25220 = G__25237;
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
var _STAR_print_newline_STAR__orig_val__24616_25238 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24617_25239 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24618_25240 = true;
var _STAR_print_fn_STAR__temp_val__24619_25241 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24618_25240);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24619_25241);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24617_25239);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24616_25238);
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
var vec__24622 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24622,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24622,(1),null);
var G__24625 = ns;
var G__24626 = name;
var G__24627 = (function (){
var G__24628 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__24628) : cljs.compiler.emit_constant.call(null,G__24628));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__24625,G__24626,G__24627) : cljs.compiler.emit_record_value.call(null,G__24625,G__24626,G__24627));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__24629 = cljs.core.keys(x);
var G__24630 = cljs.core.vals(x);
var G__24631 = cljs.compiler.emit_constants_comma_sep;
var G__24632 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__24629,G__24630,G__24631,G__24632) : cljs.compiler.emit_map.call(null,G__24629,G__24630,G__24631,G__24632));
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
var G__24633 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__24634 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__24633,G__24634) : cljs.compiler.emit_with_meta.call(null,G__24633,G__24634));
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
var vec__24636 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24636,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24636,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24636,(2),null);
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
var reserved = (function (){var G__24654 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__24657 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__24657) : cljs.compiler.es5_GT__EQ_.call(null,G__24657));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__24654,cljs.analyzer.es5_allowed);
} else {
return G__24654;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__24658 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__24658,reserved);
} else {
return G__24658;
}
})();
var env__24464__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__24659_25262 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__24659_25263__$1 = (((G__24659_25262 instanceof cljs.core.Keyword))?G__24659_25262.fqn:null);
switch (G__24659_25263__$1) {
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__24667){
var map__24668 = p__24667;
var map__24668__$1 = (((((!((map__24668 == null))))?(((((map__24668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24668):map__24668);
var arg = map__24668__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24668__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24668__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24668__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24668__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));


var map__24670 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__24670__$1 = (((((!((map__24670 == null))))?(((((map__24670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24670):map__24670);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24670__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__24464__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__24672){
var map__24673 = p__24672;
var map__24673__$1 = (((((!((map__24673 == null))))?(((((map__24673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24673):map__24673);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24673__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24673__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24673__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__24464__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__24675_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__24675_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__24676 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__24676) : comma_sep.call(null,G__24676));
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
var env__24464__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__24681){
var map__24682 = p__24681;
var map__24682__$1 = (((((!((map__24682 == null))))?(((((map__24682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24682):map__24682);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24682__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24682__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__24464__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__24686_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__24686_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
var env__24464__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5735__auto___25285 = cljs.core.seq(items);
if(temp__5735__auto___25285){
var items_25286__$1 = temp__5735__auto___25285;
var vec__24705_25287 = items_25286__$1;
var seq__24706_25288 = cljs.core.seq(vec__24705_25287);
var first__24707_25289 = cljs.core.first(seq__24706_25288);
var seq__24706_25290__$1 = cljs.core.next(seq__24706_25288);
var vec__24708_25291 = first__24707_25289;
var k_25292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24708_25291,(0),null);
var v_25293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24708_25291,(1),null);
var r_25294 = seq__24706_25290__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_25292),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_25293) : emit_js_object_val.call(null,v_25293)));

var seq__24711_25295 = cljs.core.seq(r_25294);
var chunk__24712_25296 = null;
var count__24713_25297 = (0);
var i__24714_25298 = (0);
while(true){
if((i__24714_25298 < count__24713_25297)){
var vec__24721_25299 = chunk__24712_25296.cljs$core$IIndexed$_nth$arity$2(null,i__24714_25298);
var k_25300__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24721_25299,(0),null);
var v_25301__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24721_25299,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_25300__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_25301__$1) : emit_js_object_val.call(null,v_25301__$1)));


var G__25302 = seq__24711_25295;
var G__25303 = chunk__24712_25296;
var G__25304 = count__24713_25297;
var G__25305 = (i__24714_25298 + (1));
seq__24711_25295 = G__25302;
chunk__24712_25296 = G__25303;
count__24713_25297 = G__25304;
i__24714_25298 = G__25305;
continue;
} else {
var temp__5735__auto___25306__$1 = cljs.core.seq(seq__24711_25295);
if(temp__5735__auto___25306__$1){
var seq__24711_25307__$1 = temp__5735__auto___25306__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24711_25307__$1)){
var c__4556__auto___25308 = cljs.core.chunk_first(seq__24711_25307__$1);
var G__25309 = cljs.core.chunk_rest(seq__24711_25307__$1);
var G__25310 = c__4556__auto___25308;
var G__25311 = cljs.core.count(c__4556__auto___25308);
var G__25312 = (0);
seq__24711_25295 = G__25309;
chunk__24712_25296 = G__25310;
count__24713_25297 = G__25311;
i__24714_25298 = G__25312;
continue;
} else {
var vec__24724_25313 = cljs.core.first(seq__24711_25307__$1);
var k_25314__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24724_25313,(0),null);
var v_25315__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24724_25313,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_25314__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_25315__$1) : emit_js_object_val.call(null,v_25315__$1)));


var G__25316 = cljs.core.next(seq__24711_25307__$1);
var G__25317 = null;
var G__25318 = (0);
var G__25319 = (0);
seq__24711_25295 = G__25316;
chunk__24712_25296 = G__25317;
count__24713_25297 = G__25318;
i__24714_25298 = G__25319;
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
var env__24464__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
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
var env__24464__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
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
var env__24464__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
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
var map__24742 = cljs.analyzer.unwrap_quote(expr);
var map__24742__$1 = (((((!((map__24742 == null))))?(((((map__24742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24742):map__24742);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24742__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24742__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24742__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var or__4126__auto__ = (function (){var fexpr__24745 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__24745.cljs$core$IFn$_invoke$arity$1 ? fexpr__24745.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__24745.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__24746){
var map__24747 = p__24746;
var map__24747__$1 = (((((!((map__24747 == null))))?(((((map__24747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24747):map__24747);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24747__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24747__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24747__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24747__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24747__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__24749){
var map__24750 = p__24749;
var map__24750__$1 = (((((!((map__24750 == null))))?(((((map__24750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24750):map__24750);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24750__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24750__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24750__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24750__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__24752_25338 = cljs.core.seq(nodes);
var chunk__24753_25339 = null;
var count__24754_25340 = (0);
var i__24755_25341 = (0);
while(true){
if((i__24755_25341 < count__24754_25340)){
var map__24776_25342 = chunk__24753_25339.cljs$core$IIndexed$_nth$arity$2(null,i__24755_25341);
var map__24776_25343__$1 = (((((!((map__24776_25342 == null))))?(((((map__24776_25342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24776_25342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24776_25342):map__24776_25342);
var ts_25344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24776_25343__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__24777_25345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24776_25343__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__24777_25346__$1 = (((((!((map__24777_25345 == null))))?(((((map__24777_25345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24777_25345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24777_25345):map__24777_25345);
var then_25347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24777_25346__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__24780_25348 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_25344));
var chunk__24781_25349 = null;
var count__24782_25350 = (0);
var i__24783_25351 = (0);
while(true){
if((i__24783_25351 < count__24782_25350)){
var test_25352 = chunk__24781_25349.cljs$core$IIndexed$_nth$arity$2(null,i__24783_25351);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25352,":");


var G__25353 = seq__24780_25348;
var G__25354 = chunk__24781_25349;
var G__25355 = count__24782_25350;
var G__25356 = (i__24783_25351 + (1));
seq__24780_25348 = G__25353;
chunk__24781_25349 = G__25354;
count__24782_25350 = G__25355;
i__24783_25351 = G__25356;
continue;
} else {
var temp__5735__auto___25357 = cljs.core.seq(seq__24780_25348);
if(temp__5735__auto___25357){
var seq__24780_25358__$1 = temp__5735__auto___25357;
if(cljs.core.chunked_seq_QMARK_(seq__24780_25358__$1)){
var c__4556__auto___25359 = cljs.core.chunk_first(seq__24780_25358__$1);
var G__25360 = cljs.core.chunk_rest(seq__24780_25358__$1);
var G__25361 = c__4556__auto___25359;
var G__25362 = cljs.core.count(c__4556__auto___25359);
var G__25363 = (0);
seq__24780_25348 = G__25360;
chunk__24781_25349 = G__25361;
count__24782_25350 = G__25362;
i__24783_25351 = G__25363;
continue;
} else {
var test_25364 = cljs.core.first(seq__24780_25358__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25364,":");


var G__25365 = cljs.core.next(seq__24780_25358__$1);
var G__25366 = null;
var G__25367 = (0);
var G__25368 = (0);
seq__24780_25348 = G__25365;
chunk__24781_25349 = G__25366;
count__24782_25350 = G__25367;
i__24783_25351 = G__25368;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_25347);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_25347);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__25387 = seq__24752_25338;
var G__25388 = chunk__24753_25339;
var G__25389 = count__24754_25340;
var G__25390 = (i__24755_25341 + (1));
seq__24752_25338 = G__25387;
chunk__24753_25339 = G__25388;
count__24754_25340 = G__25389;
i__24755_25341 = G__25390;
continue;
} else {
var temp__5735__auto___25391 = cljs.core.seq(seq__24752_25338);
if(temp__5735__auto___25391){
var seq__24752_25392__$1 = temp__5735__auto___25391;
if(cljs.core.chunked_seq_QMARK_(seq__24752_25392__$1)){
var c__4556__auto___25393 = cljs.core.chunk_first(seq__24752_25392__$1);
var G__25394 = cljs.core.chunk_rest(seq__24752_25392__$1);
var G__25395 = c__4556__auto___25393;
var G__25396 = cljs.core.count(c__4556__auto___25393);
var G__25397 = (0);
seq__24752_25338 = G__25394;
chunk__24753_25339 = G__25395;
count__24754_25340 = G__25396;
i__24755_25341 = G__25397;
continue;
} else {
var map__24784_25398 = cljs.core.first(seq__24752_25392__$1);
var map__24784_25399__$1 = (((((!((map__24784_25398 == null))))?(((((map__24784_25398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24784_25398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24784_25398):map__24784_25398);
var ts_25400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24784_25399__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__24785_25401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24784_25399__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__24785_25402__$1 = (((((!((map__24785_25401 == null))))?(((((map__24785_25401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24785_25401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24785_25401):map__24785_25401);
var then_25403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24785_25402__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__24788_25404 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_25400));
var chunk__24789_25405 = null;
var count__24790_25406 = (0);
var i__24791_25407 = (0);
while(true){
if((i__24791_25407 < count__24790_25406)){
var test_25408 = chunk__24789_25405.cljs$core$IIndexed$_nth$arity$2(null,i__24791_25407);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25408,":");


var G__25409 = seq__24788_25404;
var G__25410 = chunk__24789_25405;
var G__25411 = count__24790_25406;
var G__25412 = (i__24791_25407 + (1));
seq__24788_25404 = G__25409;
chunk__24789_25405 = G__25410;
count__24790_25406 = G__25411;
i__24791_25407 = G__25412;
continue;
} else {
var temp__5735__auto___25413__$1 = cljs.core.seq(seq__24788_25404);
if(temp__5735__auto___25413__$1){
var seq__24788_25414__$1 = temp__5735__auto___25413__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24788_25414__$1)){
var c__4556__auto___25415 = cljs.core.chunk_first(seq__24788_25414__$1);
var G__25416 = cljs.core.chunk_rest(seq__24788_25414__$1);
var G__25417 = c__4556__auto___25415;
var G__25418 = cljs.core.count(c__4556__auto___25415);
var G__25419 = (0);
seq__24788_25404 = G__25416;
chunk__24789_25405 = G__25417;
count__24790_25406 = G__25418;
i__24791_25407 = G__25419;
continue;
} else {
var test_25420 = cljs.core.first(seq__24788_25414__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_25420,":");


var G__25421 = cljs.core.next(seq__24788_25414__$1);
var G__25422 = null;
var G__25423 = (0);
var G__25424 = (0);
seq__24788_25404 = G__25421;
chunk__24789_25405 = G__25422;
count__24790_25406 = G__25423;
i__24791_25407 = G__25424;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_25403);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_25403);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__25425 = cljs.core.next(seq__24752_25392__$1);
var G__25426 = null;
var G__25427 = (0);
var G__25428 = (0);
seq__24752_25338 = G__25425;
chunk__24753_25339 = G__25426;
count__24754_25340 = G__25427;
i__24755_25341 = G__25428;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__24792){
var map__24793 = p__24792;
var map__24793__$1 = (((((!((map__24793 == null))))?(((((map__24793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24793):map__24793);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24793__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24793__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__24798 = env;
var G__24799 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__24798,G__24799) : cljs.compiler.resolve_type.call(null,G__24798,G__24799));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__24800 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24800,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24800,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__24795_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__24795_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__24795_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__24803 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__24803,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__24803;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__24806 = env;
var G__24807 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__24806,G__24807) : cljs.compiler.resolve_type.call(null,G__24806,G__24807));
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
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24808_SHARP_){
return cljs.compiler.resolve_type(env,p1__24808_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__24809 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__24810 = cljs.core.seq(vec__24809);
var first__24811 = cljs.core.first(seq__24810);
var seq__24810__$1 = cljs.core.next(seq__24810);
var p = first__24811;
var first__24811__$1 = cljs.core.first(seq__24810__$1);
var seq__24810__$2 = cljs.core.next(seq__24810__$1);
var ts = first__24811__$1;
var first__24811__$2 = cljs.core.first(seq__24810__$2);
var seq__24810__$3 = cljs.core.next(seq__24810__$2);
var n = first__24811__$2;
var xs = seq__24810__$3;
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
var vec__24812 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__24813 = cljs.core.seq(vec__24812);
var first__24814 = cljs.core.first(seq__24813);
var seq__24813__$1 = cljs.core.next(seq__24813);
var p = first__24814;
var first__24814__$1 = cljs.core.first(seq__24813__$1);
var seq__24813__$2 = cljs.core.next(seq__24813__$1);
var ts = first__24814__$1;
var xs = seq__24813__$2;
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
var G__24816 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__24815 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__24815.cljs$core$IFn$_invoke$arity$1 ? fexpr__24815.cljs$core$IFn$_invoke$arity$1(G__24816) : fexpr__24815.call(null,G__24816));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__24819 = arguments.length;
switch (G__24819) {
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
var vec__24827 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24817_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__24817_SHARP_);
} else {
return p1__24817_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__24828 = cljs.core.seq(vec__24827);
var first__24829 = cljs.core.first(seq__24828);
var seq__24828__$1 = cljs.core.next(seq__24828);
var x = first__24829;
var ys = seq__24828__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__24830 = cljs.core.seq(ys);
var chunk__24831 = null;
var count__24832 = (0);
var i__24833 = (0);
while(true){
if((i__24833 < count__24832)){
var next_line = chunk__24831.cljs$core$IIndexed$_nth$arity$2(null,i__24833);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__25443 = seq__24830;
var G__25444 = chunk__24831;
var G__25445 = count__24832;
var G__25446 = (i__24833 + (1));
seq__24830 = G__25443;
chunk__24831 = G__25444;
count__24832 = G__25445;
i__24833 = G__25446;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__24830);
if(temp__5735__auto__){
var seq__24830__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24830__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24830__$1);
var G__25447 = cljs.core.chunk_rest(seq__24830__$1);
var G__25448 = c__4556__auto__;
var G__25449 = cljs.core.count(c__4556__auto__);
var G__25450 = (0);
seq__24830 = G__25447;
chunk__24831 = G__25448;
count__24832 = G__25449;
i__24833 = G__25450;
continue;
} else {
var next_line = cljs.core.first(seq__24830__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__25451 = cljs.core.next(seq__24830__$1);
var G__25452 = null;
var G__25453 = (0);
var G__25454 = (0);
seq__24830 = G__25451;
chunk__24831 = G__25452;
count__24832 = G__25453;
i__24833 = G__25454;
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

var seq__24834_25455 = cljs.core.seq(docs__$2);
var chunk__24835_25456 = null;
var count__24836_25457 = (0);
var i__24837_25458 = (0);
while(true){
if((i__24837_25458 < count__24836_25457)){
var e_25459 = chunk__24835_25456.cljs$core$IIndexed$_nth$arity$2(null,i__24837_25458);
if(cljs.core.truth_(e_25459)){
print_comment_lines(e_25459);
} else {
}


var G__25460 = seq__24834_25455;
var G__25461 = chunk__24835_25456;
var G__25462 = count__24836_25457;
var G__25463 = (i__24837_25458 + (1));
seq__24834_25455 = G__25460;
chunk__24835_25456 = G__25461;
count__24836_25457 = G__25462;
i__24837_25458 = G__25463;
continue;
} else {
var temp__5735__auto___25464 = cljs.core.seq(seq__24834_25455);
if(temp__5735__auto___25464){
var seq__24834_25465__$1 = temp__5735__auto___25464;
if(cljs.core.chunked_seq_QMARK_(seq__24834_25465__$1)){
var c__4556__auto___25466 = cljs.core.chunk_first(seq__24834_25465__$1);
var G__25467 = cljs.core.chunk_rest(seq__24834_25465__$1);
var G__25468 = c__4556__auto___25466;
var G__25469 = cljs.core.count(c__4556__auto___25466);
var G__25470 = (0);
seq__24834_25455 = G__25467;
chunk__24835_25456 = G__25468;
count__24836_25457 = G__25469;
i__24837_25458 = G__25470;
continue;
} else {
var e_25471 = cljs.core.first(seq__24834_25465__$1);
if(cljs.core.truth_(e_25471)){
print_comment_lines(e_25471);
} else {
}


var G__25472 = cljs.core.next(seq__24834_25465__$1);
var G__25473 = null;
var G__25474 = (0);
var G__25475 = (0);
seq__24834_25455 = G__25472;
chunk__24835_25456 = G__25473;
count__24836_25457 = G__25474;
i__24837_25458 = G__25475;
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
var and__4115__auto__ = cljs.core.some((function (p1__24839_SHARP_){
return goog.string.startsWith(p1__24839_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__24840){
var map__24841 = p__24840;
var map__24841__$1 = (((((!((map__24841 == null))))?(((((map__24841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24841):map__24841);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24841__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24841__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24841__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24841__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24841__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24841__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24841__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24841__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24841__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24841__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__24843){
var map__24844 = p__24843;
var map__24844__$1 = (((((!((map__24844 == null))))?(((((map__24844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24844):map__24844);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24844__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24844__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24844__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__24846_25501 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__24847_25502 = null;
var count__24848_25503 = (0);
var i__24849_25504 = (0);
while(true){
if((i__24849_25504 < count__24848_25503)){
var vec__24856_25505 = chunk__24847_25502.cljs$core$IIndexed$_nth$arity$2(null,i__24849_25504);
var i_25506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24856_25505,(0),null);
var param_25507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24856_25505,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_25507);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__25508 = seq__24846_25501;
var G__25509 = chunk__24847_25502;
var G__25510 = count__24848_25503;
var G__25511 = (i__24849_25504 + (1));
seq__24846_25501 = G__25508;
chunk__24847_25502 = G__25509;
count__24848_25503 = G__25510;
i__24849_25504 = G__25511;
continue;
} else {
var temp__5735__auto___25512 = cljs.core.seq(seq__24846_25501);
if(temp__5735__auto___25512){
var seq__24846_25513__$1 = temp__5735__auto___25512;
if(cljs.core.chunked_seq_QMARK_(seq__24846_25513__$1)){
var c__4556__auto___25514 = cljs.core.chunk_first(seq__24846_25513__$1);
var G__25515 = cljs.core.chunk_rest(seq__24846_25513__$1);
var G__25516 = c__4556__auto___25514;
var G__25517 = cljs.core.count(c__4556__auto___25514);
var G__25518 = (0);
seq__24846_25501 = G__25515;
chunk__24847_25502 = G__25516;
count__24848_25503 = G__25517;
i__24849_25504 = G__25518;
continue;
} else {
var vec__24859_25519 = cljs.core.first(seq__24846_25513__$1);
var i_25520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24859_25519,(0),null);
var param_25521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24859_25519,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_25521);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__25522 = cljs.core.next(seq__24846_25513__$1);
var G__25523 = null;
var G__25524 = (0);
var G__25525 = (0);
seq__24846_25501 = G__25522;
chunk__24847_25502 = G__25523;
count__24848_25503 = G__25524;
i__24849_25504 = G__25525;
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

var seq__24862_25526 = cljs.core.seq(params);
var chunk__24863_25527 = null;
var count__24864_25528 = (0);
var i__24865_25529 = (0);
while(true){
if((i__24865_25529 < count__24864_25528)){
var param_25530 = chunk__24863_25527.cljs$core$IIndexed$_nth$arity$2(null,i__24865_25529);
cljs.compiler.emit(param_25530);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25530,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25531 = seq__24862_25526;
var G__25532 = chunk__24863_25527;
var G__25533 = count__24864_25528;
var G__25534 = (i__24865_25529 + (1));
seq__24862_25526 = G__25531;
chunk__24863_25527 = G__25532;
count__24864_25528 = G__25533;
i__24865_25529 = G__25534;
continue;
} else {
var temp__5735__auto___25535 = cljs.core.seq(seq__24862_25526);
if(temp__5735__auto___25535){
var seq__24862_25536__$1 = temp__5735__auto___25535;
if(cljs.core.chunked_seq_QMARK_(seq__24862_25536__$1)){
var c__4556__auto___25537 = cljs.core.chunk_first(seq__24862_25536__$1);
var G__25538 = cljs.core.chunk_rest(seq__24862_25536__$1);
var G__25539 = c__4556__auto___25537;
var G__25540 = cljs.core.count(c__4556__auto___25537);
var G__25541 = (0);
seq__24862_25526 = G__25538;
chunk__24863_25527 = G__25539;
count__24864_25528 = G__25540;
i__24865_25529 = G__25541;
continue;
} else {
var param_25542 = cljs.core.first(seq__24862_25536__$1);
cljs.compiler.emit(param_25542);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25542,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25543 = cljs.core.next(seq__24862_25536__$1);
var G__25544 = null;
var G__25545 = (0);
var G__25546 = (0);
seq__24862_25526 = G__25543;
chunk__24863_25527 = G__25544;
count__24864_25528 = G__25545;
i__24865_25529 = G__25546;
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

var seq__24866_25547 = cljs.core.seq(params);
var chunk__24867_25548 = null;
var count__24868_25549 = (0);
var i__24869_25550 = (0);
while(true){
if((i__24869_25550 < count__24868_25549)){
var param_25551 = chunk__24867_25548.cljs$core$IIndexed$_nth$arity$2(null,i__24869_25550);
cljs.compiler.emit(param_25551);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25551,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25552 = seq__24866_25547;
var G__25553 = chunk__24867_25548;
var G__25554 = count__24868_25549;
var G__25555 = (i__24869_25550 + (1));
seq__24866_25547 = G__25552;
chunk__24867_25548 = G__25553;
count__24868_25549 = G__25554;
i__24869_25550 = G__25555;
continue;
} else {
var temp__5735__auto___25556 = cljs.core.seq(seq__24866_25547);
if(temp__5735__auto___25556){
var seq__24866_25573__$1 = temp__5735__auto___25556;
if(cljs.core.chunked_seq_QMARK_(seq__24866_25573__$1)){
var c__4556__auto___25574 = cljs.core.chunk_first(seq__24866_25573__$1);
var G__25575 = cljs.core.chunk_rest(seq__24866_25573__$1);
var G__25576 = c__4556__auto___25574;
var G__25577 = cljs.core.count(c__4556__auto___25574);
var G__25578 = (0);
seq__24866_25547 = G__25575;
chunk__24867_25548 = G__25576;
count__24868_25549 = G__25577;
i__24869_25550 = G__25578;
continue;
} else {
var param_25579 = cljs.core.first(seq__24866_25573__$1);
cljs.compiler.emit(param_25579);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25579,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25580 = cljs.core.next(seq__24866_25573__$1);
var G__25581 = null;
var G__25582 = (0);
var G__25583 = (0);
seq__24866_25547 = G__25580;
chunk__24867_25548 = G__25581;
count__24868_25549 = G__25582;
i__24869_25550 = G__25583;
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
var seq__24870 = cljs.core.seq(params);
var chunk__24871 = null;
var count__24872 = (0);
var i__24873 = (0);
while(true){
if((i__24873 < count__24872)){
var param = chunk__24871.cljs$core$IIndexed$_nth$arity$2(null,i__24873);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25584 = seq__24870;
var G__25585 = chunk__24871;
var G__25586 = count__24872;
var G__25587 = (i__24873 + (1));
seq__24870 = G__25584;
chunk__24871 = G__25585;
count__24872 = G__25586;
i__24873 = G__25587;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__24870);
if(temp__5735__auto__){
var seq__24870__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24870__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24870__$1);
var G__25588 = cljs.core.chunk_rest(seq__24870__$1);
var G__25589 = c__4556__auto__;
var G__25590 = cljs.core.count(c__4556__auto__);
var G__25591 = (0);
seq__24870 = G__25588;
chunk__24871 = G__25589;
count__24872 = G__25590;
i__24873 = G__25591;
continue;
} else {
var param = cljs.core.first(seq__24870__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25592 = cljs.core.next(seq__24870__$1);
var G__25593 = null;
var G__25594 = (0);
var G__25595 = (0);
seq__24870 = G__25592;
chunk__24871 = G__25593;
count__24872 = G__25594;
i__24873 = G__25595;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__24874){
var map__24875 = p__24874;
var map__24875__$1 = (((((!((map__24875 == null))))?(((((map__24875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24875):map__24875);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24875__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24875__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24875__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24875__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24875__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24875__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__24464__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__24877){
var map__24878 = p__24877;
var map__24878__$1 = (((((!((map__24878 == null))))?(((((map__24878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24878):map__24878);
var f = map__24878__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24878__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24878__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24878__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24878__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24878__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24878__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24878__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24878__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__24464__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_25596__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_25597 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_25596__$1);
var delegate_name_25598 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_25597),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_25598," = function (");

var seq__24880_25599 = cljs.core.seq(params);
var chunk__24881_25600 = null;
var count__24882_25601 = (0);
var i__24883_25602 = (0);
while(true){
if((i__24883_25602 < count__24882_25601)){
var param_25603 = chunk__24881_25600.cljs$core$IIndexed$_nth$arity$2(null,i__24883_25602);
cljs.compiler.emit(param_25603);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25603,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25604 = seq__24880_25599;
var G__25605 = chunk__24881_25600;
var G__25606 = count__24882_25601;
var G__25607 = (i__24883_25602 + (1));
seq__24880_25599 = G__25604;
chunk__24881_25600 = G__25605;
count__24882_25601 = G__25606;
i__24883_25602 = G__25607;
continue;
} else {
var temp__5735__auto___25608 = cljs.core.seq(seq__24880_25599);
if(temp__5735__auto___25608){
var seq__24880_25609__$1 = temp__5735__auto___25608;
if(cljs.core.chunked_seq_QMARK_(seq__24880_25609__$1)){
var c__4556__auto___25610 = cljs.core.chunk_first(seq__24880_25609__$1);
var G__25611 = cljs.core.chunk_rest(seq__24880_25609__$1);
var G__25612 = c__4556__auto___25610;
var G__25613 = cljs.core.count(c__4556__auto___25610);
var G__25614 = (0);
seq__24880_25599 = G__25611;
chunk__24881_25600 = G__25612;
count__24882_25601 = G__25613;
i__24883_25602 = G__25614;
continue;
} else {
var param_25615 = cljs.core.first(seq__24880_25609__$1);
cljs.compiler.emit(param_25615);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25615,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25616 = cljs.core.next(seq__24880_25609__$1);
var G__25617 = null;
var G__25618 = (0);
var G__25619 = (0);
seq__24880_25599 = G__25616;
chunk__24881_25600 = G__25617;
count__24882_25601 = G__25618;
i__24883_25602 = G__25619;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_25597," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_25620 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_25620,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_25598,".call(this,");

var seq__24892_25621 = cljs.core.seq(params);
var chunk__24893_25622 = null;
var count__24894_25623 = (0);
var i__24895_25624 = (0);
while(true){
if((i__24895_25624 < count__24894_25623)){
var param_25625 = chunk__24893_25622.cljs$core$IIndexed$_nth$arity$2(null,i__24895_25624);
cljs.compiler.emit(param_25625);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25625,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25626 = seq__24892_25621;
var G__25627 = chunk__24893_25622;
var G__25628 = count__24894_25623;
var G__25629 = (i__24895_25624 + (1));
seq__24892_25621 = G__25626;
chunk__24893_25622 = G__25627;
count__24894_25623 = G__25628;
i__24895_25624 = G__25629;
continue;
} else {
var temp__5735__auto___25630 = cljs.core.seq(seq__24892_25621);
if(temp__5735__auto___25630){
var seq__24892_25631__$1 = temp__5735__auto___25630;
if(cljs.core.chunked_seq_QMARK_(seq__24892_25631__$1)){
var c__4556__auto___25632 = cljs.core.chunk_first(seq__24892_25631__$1);
var G__25633 = cljs.core.chunk_rest(seq__24892_25631__$1);
var G__25634 = c__4556__auto___25632;
var G__25635 = cljs.core.count(c__4556__auto___25632);
var G__25636 = (0);
seq__24892_25621 = G__25633;
chunk__24893_25622 = G__25634;
count__24894_25623 = G__25635;
i__24895_25624 = G__25636;
continue;
} else {
var param_25637 = cljs.core.first(seq__24892_25631__$1);
cljs.compiler.emit(param_25637);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25637,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25638 = cljs.core.next(seq__24892_25631__$1);
var G__25639 = null;
var G__25640 = (0);
var G__25641 = (0);
seq__24892_25621 = G__25638;
chunk__24893_25622 = G__25639;
count__24894_25623 = G__25640;
i__24895_25624 = G__25641;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25597,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_25597,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_25596__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25597,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_25598,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_25597,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__24899){
var map__24900 = p__24899;
var map__24900__$1 = (((((!((map__24900 == null))))?(((((map__24900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24900):map__24900);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24900__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24900__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24900__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24900__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24900__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24900__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24900__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24900__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24896_SHARP_){
var and__4115__auto__ = p1__24896_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__24896_SHARP_));
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
var name_25644__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_25645 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_25644__$1);
var maxparams_25646 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_25647 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_25645),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_25648 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__24897_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__24897_SHARP_)));
}),cljs.core.seq(mmap_25647));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_25645," = null;");

var seq__24902_25649 = cljs.core.seq(ms_25648);
var chunk__24903_25650 = null;
var count__24904_25651 = (0);
var i__24905_25652 = (0);
while(true){
if((i__24905_25652 < count__24904_25651)){
var vec__24912_25653 = chunk__24903_25650.cljs$core$IIndexed$_nth$arity$2(null,i__24905_25652);
var n_25654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24912_25653,(0),null);
var meth_25655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24912_25653,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_25654," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25655))){
cljs.compiler.emit_variadic_fn_method(meth_25655);
} else {
cljs.compiler.emit_fn_method(meth_25655);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__25656 = seq__24902_25649;
var G__25657 = chunk__24903_25650;
var G__25658 = count__24904_25651;
var G__25659 = (i__24905_25652 + (1));
seq__24902_25649 = G__25656;
chunk__24903_25650 = G__25657;
count__24904_25651 = G__25658;
i__24905_25652 = G__25659;
continue;
} else {
var temp__5735__auto___25660 = cljs.core.seq(seq__24902_25649);
if(temp__5735__auto___25660){
var seq__24902_25661__$1 = temp__5735__auto___25660;
if(cljs.core.chunked_seq_QMARK_(seq__24902_25661__$1)){
var c__4556__auto___25662 = cljs.core.chunk_first(seq__24902_25661__$1);
var G__25663 = cljs.core.chunk_rest(seq__24902_25661__$1);
var G__25664 = c__4556__auto___25662;
var G__25665 = cljs.core.count(c__4556__auto___25662);
var G__25666 = (0);
seq__24902_25649 = G__25663;
chunk__24903_25650 = G__25664;
count__24904_25651 = G__25665;
i__24905_25652 = G__25666;
continue;
} else {
var vec__24915_25667 = cljs.core.first(seq__24902_25661__$1);
var n_25668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24915_25667,(0),null);
var meth_25669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24915_25667,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_25668," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25669))){
cljs.compiler.emit_variadic_fn_method(meth_25669);
} else {
cljs.compiler.emit_fn_method(meth_25669);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__25670 = cljs.core.next(seq__24902_25661__$1);
var G__25671 = null;
var G__25672 = (0);
var G__25673 = (0);
seq__24902_25649 = G__25670;
chunk__24903_25650 = G__25671;
count__24904_25651 = G__25672;
i__24905_25652 = G__25673;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25645," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_25646),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_25646)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_25646));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__24918_25674 = cljs.core.seq(ms_25648);
var chunk__24919_25675 = null;
var count__24920_25676 = (0);
var i__24921_25677 = (0);
while(true){
if((i__24921_25677 < count__24920_25676)){
var vec__24928_25678 = chunk__24919_25675.cljs$core$IIndexed$_nth$arity$2(null,i__24921_25677);
var n_25679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24928_25678,(0),null);
var meth_25680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24928_25678,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25680))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_25681 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_25681," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_25682 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_25681," = new cljs.core.IndexedSeq(",a_25682,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_25679,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_25646)),(((cljs.core.count(maxparams_25646) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_25681,");"], 0));
} else {
var pcnt_25683 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25680));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_25683,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_25679,".call(this",(((pcnt_25683 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_25683,maxparams_25646)),null,(1),null)),(2),null))),");");
}


var G__25684 = seq__24918_25674;
var G__25685 = chunk__24919_25675;
var G__25686 = count__24920_25676;
var G__25687 = (i__24921_25677 + (1));
seq__24918_25674 = G__25684;
chunk__24919_25675 = G__25685;
count__24920_25676 = G__25686;
i__24921_25677 = G__25687;
continue;
} else {
var temp__5735__auto___25688 = cljs.core.seq(seq__24918_25674);
if(temp__5735__auto___25688){
var seq__24918_25689__$1 = temp__5735__auto___25688;
if(cljs.core.chunked_seq_QMARK_(seq__24918_25689__$1)){
var c__4556__auto___25690 = cljs.core.chunk_first(seq__24918_25689__$1);
var G__25691 = cljs.core.chunk_rest(seq__24918_25689__$1);
var G__25692 = c__4556__auto___25690;
var G__25693 = cljs.core.count(c__4556__auto___25690);
var G__25694 = (0);
seq__24918_25674 = G__25691;
chunk__24919_25675 = G__25692;
count__24920_25676 = G__25693;
i__24921_25677 = G__25694;
continue;
} else {
var vec__24931_25695 = cljs.core.first(seq__24918_25689__$1);
var n_25696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24931_25695,(0),null);
var meth_25697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24931_25695,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25697))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_25698 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_25698," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_25699 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_25698," = new cljs.core.IndexedSeq(",a_25699,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_25696,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_25646)),(((cljs.core.count(maxparams_25646) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_25698,");"], 0));
} else {
var pcnt_25716 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25697));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_25716,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_25696,".call(this",(((pcnt_25716 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_25716,maxparams_25646)),null,(1),null)),(2),null))),");");
}


var G__25721 = cljs.core.next(seq__24918_25689__$1);
var G__25722 = null;
var G__25723 = (0);
var G__25724 = (0);
seq__24918_25674 = G__25721;
chunk__24919_25675 = G__25722;
count__24920_25676 = G__25723;
i__24921_25677 = G__25724;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_25726 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_25648)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_25726,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25645,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25645,".cljs$lang$applyTo = ",cljs.core.some((function (p1__24898_SHARP_){
var vec__24934 = p1__24898_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24934,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24934,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_25648),".cljs$lang$applyTo;");
} else {
}

var seq__24937_25728 = cljs.core.seq(ms_25648);
var chunk__24938_25729 = null;
var count__24939_25730 = (0);
var i__24940_25731 = (0);
while(true){
if((i__24940_25731 < count__24939_25730)){
var vec__24947_25732 = chunk__24938_25729.cljs$core$IIndexed$_nth$arity$2(null,i__24940_25731);
var n_25733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24947_25732,(0),null);
var meth_25734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24947_25732,(1),null);
var c_25735 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25734));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25734))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25645,".cljs$core$IFn$_invoke$arity$variadic = ",n_25733,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_25645,".cljs$core$IFn$_invoke$arity$",c_25735," = ",n_25733,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__25736 = seq__24937_25728;
var G__25737 = chunk__24938_25729;
var G__25738 = count__24939_25730;
var G__25739 = (i__24940_25731 + (1));
seq__24937_25728 = G__25736;
chunk__24938_25729 = G__25737;
count__24939_25730 = G__25738;
i__24940_25731 = G__25739;
continue;
} else {
var temp__5735__auto___25740 = cljs.core.seq(seq__24937_25728);
if(temp__5735__auto___25740){
var seq__24937_25741__$1 = temp__5735__auto___25740;
if(cljs.core.chunked_seq_QMARK_(seq__24937_25741__$1)){
var c__4556__auto___25742 = cljs.core.chunk_first(seq__24937_25741__$1);
var G__25743 = cljs.core.chunk_rest(seq__24937_25741__$1);
var G__25744 = c__4556__auto___25742;
var G__25745 = cljs.core.count(c__4556__auto___25742);
var G__25746 = (0);
seq__24937_25728 = G__25743;
chunk__24938_25729 = G__25744;
count__24939_25730 = G__25745;
i__24940_25731 = G__25746;
continue;
} else {
var vec__24950_25747 = cljs.core.first(seq__24937_25741__$1);
var n_25748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24950_25747,(0),null);
var meth_25749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24950_25747,(1),null);
var c_25750 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25749));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25749))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25645,".cljs$core$IFn$_invoke$arity$variadic = ",n_25748,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_25645,".cljs$core$IFn$_invoke$arity$",c_25750," = ",n_25748,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__25751 = cljs.core.next(seq__24937_25741__$1);
var G__25752 = null;
var G__25753 = (0);
var G__25754 = (0);
seq__24937_25728 = G__25751;
chunk__24938_25729 = G__25752;
count__24939_25730 = G__25753;
i__24940_25731 = G__25754;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_25645,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__24954){
var map__24955 = p__24954;
var map__24955__$1 = (((((!((map__24955 == null))))?(((((map__24955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24955):map__24955);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24955__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24955__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24955__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__24958_25755 = cljs.core.seq(statements);
var chunk__24959_25756 = null;
var count__24960_25757 = (0);
var i__24961_25758 = (0);
while(true){
if((i__24961_25758 < count__24960_25757)){
var s_25759 = chunk__24959_25756.cljs$core$IIndexed$_nth$arity$2(null,i__24961_25758);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_25759);


var G__25760 = seq__24958_25755;
var G__25761 = chunk__24959_25756;
var G__25762 = count__24960_25757;
var G__25763 = (i__24961_25758 + (1));
seq__24958_25755 = G__25760;
chunk__24959_25756 = G__25761;
count__24960_25757 = G__25762;
i__24961_25758 = G__25763;
continue;
} else {
var temp__5735__auto___25764 = cljs.core.seq(seq__24958_25755);
if(temp__5735__auto___25764){
var seq__24958_25765__$1 = temp__5735__auto___25764;
if(cljs.core.chunked_seq_QMARK_(seq__24958_25765__$1)){
var c__4556__auto___25766 = cljs.core.chunk_first(seq__24958_25765__$1);
var G__25767 = cljs.core.chunk_rest(seq__24958_25765__$1);
var G__25768 = c__4556__auto___25766;
var G__25769 = cljs.core.count(c__4556__auto___25766);
var G__25770 = (0);
seq__24958_25755 = G__25767;
chunk__24959_25756 = G__25768;
count__24960_25757 = G__25769;
i__24961_25758 = G__25770;
continue;
} else {
var s_25771 = cljs.core.first(seq__24958_25765__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_25771);


var G__25773 = cljs.core.next(seq__24958_25765__$1);
var G__25774 = null;
var G__25775 = (0);
var G__25776 = (0);
seq__24958_25755 = G__25773;
chunk__24959_25756 = G__25774;
count__24960_25757 = G__25775;
i__24961_25758 = G__25776;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__24962){
var map__24963 = p__24962;
var map__24963__$1 = (((((!((map__24963 == null))))?(((((map__24963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24963):map__24963);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24963__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24963__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24963__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24963__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24963__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__24965,is_loop){
var map__24966 = p__24965;
var map__24966__$1 = (((((!((map__24966 == null))))?(((((map__24966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24966):map__24966);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24966__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24966__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24966__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__24968_25778 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__24969_25779 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__24969_25779);

try{var seq__24970_25780 = cljs.core.seq(bindings);
var chunk__24971_25781 = null;
var count__24972_25782 = (0);
var i__24973_25783 = (0);
while(true){
if((i__24973_25783 < count__24972_25782)){
var map__24982_25784 = chunk__24971_25781.cljs$core$IIndexed$_nth$arity$2(null,i__24973_25783);
var map__24982_25785__$1 = (((((!((map__24982_25784 == null))))?(((((map__24982_25784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24982_25784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24982_25784):map__24982_25784);
var binding_25786 = map__24982_25785__$1;
var init_25787 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24982_25785__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_25786);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_25787,";");


var G__25788 = seq__24970_25780;
var G__25789 = chunk__24971_25781;
var G__25790 = count__24972_25782;
var G__25791 = (i__24973_25783 + (1));
seq__24970_25780 = G__25788;
chunk__24971_25781 = G__25789;
count__24972_25782 = G__25790;
i__24973_25783 = G__25791;
continue;
} else {
var temp__5735__auto___25792 = cljs.core.seq(seq__24970_25780);
if(temp__5735__auto___25792){
var seq__24970_25793__$1 = temp__5735__auto___25792;
if(cljs.core.chunked_seq_QMARK_(seq__24970_25793__$1)){
var c__4556__auto___25794 = cljs.core.chunk_first(seq__24970_25793__$1);
var G__25795 = cljs.core.chunk_rest(seq__24970_25793__$1);
var G__25796 = c__4556__auto___25794;
var G__25797 = cljs.core.count(c__4556__auto___25794);
var G__25798 = (0);
seq__24970_25780 = G__25795;
chunk__24971_25781 = G__25796;
count__24972_25782 = G__25797;
i__24973_25783 = G__25798;
continue;
} else {
var map__24984_25799 = cljs.core.first(seq__24970_25793__$1);
var map__24984_25800__$1 = (((((!((map__24984_25799 == null))))?(((((map__24984_25799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24984_25799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24984_25799):map__24984_25799);
var binding_25801 = map__24984_25800__$1;
var init_25802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24984_25800__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_25801);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_25802,";");


var G__25803 = cljs.core.next(seq__24970_25793__$1);
var G__25804 = null;
var G__25805 = (0);
var G__25806 = (0);
seq__24970_25780 = G__25803;
chunk__24971_25781 = G__25804;
count__24972_25782 = G__25805;
i__24973_25783 = G__25806;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__24968_25778);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__24986){
var map__24987 = p__24986;
var map__24987__$1 = (((((!((map__24987 == null))))?(((((map__24987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24987):map__24987);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24987__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24987__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24987__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___25807 = cljs.core.count(exprs);
var i_25808 = (0);
while(true){
if((i_25808 < n__4613__auto___25807)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_25808) : temps.call(null,i_25808))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_25808) : exprs.call(null,i_25808)),";");

var G__25809 = (i_25808 + (1));
i_25808 = G__25809;
continue;
} else {
}
break;
}

var n__4613__auto___25810 = cljs.core.count(exprs);
var i_25811 = (0);
while(true){
if((i_25811 < n__4613__auto___25810)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_25811) : params.call(null,i_25811)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_25811) : temps.call(null,i_25811)),";");

var G__25812 = (i_25811 + (1));
i_25811 = G__25812;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__24989){
var map__24990 = p__24989;
var map__24990__$1 = (((((!((map__24990 == null))))?(((((map__24990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24990):map__24990);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24990__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24990__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24990__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__24992_25813 = cljs.core.seq(bindings);
var chunk__24993_25814 = null;
var count__24994_25815 = (0);
var i__24995_25816 = (0);
while(true){
if((i__24995_25816 < count__24994_25815)){
var map__25001_25817 = chunk__24993_25814.cljs$core$IIndexed$_nth$arity$2(null,i__24995_25816);
var map__25001_25818__$1 = (((((!((map__25001_25817 == null))))?(((((map__25001_25817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25001_25817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25001_25817):map__25001_25817);
var binding_25819 = map__25001_25818__$1;
var init_25820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25001_25818__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_25819)," = ",init_25820,";");


var G__25821 = seq__24992_25813;
var G__25822 = chunk__24993_25814;
var G__25823 = count__24994_25815;
var G__25824 = (i__24995_25816 + (1));
seq__24992_25813 = G__25821;
chunk__24993_25814 = G__25822;
count__24994_25815 = G__25823;
i__24995_25816 = G__25824;
continue;
} else {
var temp__5735__auto___25825 = cljs.core.seq(seq__24992_25813);
if(temp__5735__auto___25825){
var seq__24992_25826__$1 = temp__5735__auto___25825;
if(cljs.core.chunked_seq_QMARK_(seq__24992_25826__$1)){
var c__4556__auto___25827 = cljs.core.chunk_first(seq__24992_25826__$1);
var G__25828 = cljs.core.chunk_rest(seq__24992_25826__$1);
var G__25829 = c__4556__auto___25827;
var G__25830 = cljs.core.count(c__4556__auto___25827);
var G__25831 = (0);
seq__24992_25813 = G__25828;
chunk__24993_25814 = G__25829;
count__24994_25815 = G__25830;
i__24995_25816 = G__25831;
continue;
} else {
var map__25003_25832 = cljs.core.first(seq__24992_25826__$1);
var map__25003_25833__$1 = (((((!((map__25003_25832 == null))))?(((((map__25003_25832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25003_25832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25003_25832):map__25003_25832);
var binding_25834 = map__25003_25833__$1;
var init_25835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25003_25833__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_25834)," = ",init_25835,";");


var G__25836 = cljs.core.next(seq__24992_25826__$1);
var G__25837 = null;
var G__25838 = (0);
var G__25839 = (0);
seq__24992_25813 = G__25836;
chunk__24993_25814 = G__25837;
count__24994_25815 = G__25838;
i__24995_25816 = G__25839;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__25007){
var map__25008 = p__25007;
var map__25008__$1 = (((((!((map__25008 == null))))?(((((map__25008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25008):map__25008);
var expr = map__25008__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25008__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25008__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25008__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
if(cljs.core.not((function (){var fexpr__25021 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__25021.cljs$core$IFn$_invoke$arity$1 ? fexpr__25021.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__25021.call(null,tag));
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
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__25023 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__25023.cljs$core$IFn$_invoke$arity$1 ? fexpr__25023.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__25023.call(null,first_arg_tag));
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
var vec__25010 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__25005_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25005_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__25006_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25006_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25010,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25010,(1),null);
var env__24464__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
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
var pimpl_25840 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_25840,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_25841 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_25841,args)),(((mfa_25841 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_25841,args)),"], 0))"], 0));
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
var G__25025 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__25024 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__25024.cljs$core$IFn$_invoke$arity$1 ? fexpr__25024.cljs$core$IFn$_invoke$arity$1(G__25025) : fexpr__25024.call(null,G__25025));
} else {
return and__4115__auto__;
}
})())){
var fprop_25842 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_25842," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_25842,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_25842," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_25842,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__25026){
var map__25027 = p__25026;
var map__25027__$1 = (((((!((map__25027 == null))))?(((((map__25027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25027):map__25027);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25027__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25027__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25027__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__24464__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__25029){
var map__25030 = p__25029;
var map__25030__$1 = (((((!((map__25030 == null))))?(((((map__25030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25030):map__25030);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25030__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25030__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25030__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__24464__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
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
var map__25032 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__25032__$1 = (((((!((map__25032 == null))))?(((((map__25032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25032):map__25032);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25032__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25032__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__25033 = options;
var map__25033__$1 = (((((!((map__25033 == null))))?(((((map__25033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25033):map__25033);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25033__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25033__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25033__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__25034 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__25039 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__25039__$1 = (((((!((map__25039 == null))))?(((((map__25039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25039):map__25039);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25039__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25039__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25034,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25034,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__25041_25843 = cljs.core.seq(libs_to_load);
var chunk__25042_25844 = null;
var count__25043_25845 = (0);
var i__25044_25846 = (0);
while(true){
if((i__25044_25846 < count__25043_25845)){
var lib_25847 = chunk__25042_25844.cljs$core$IIndexed$_nth$arity$2(null,i__25044_25846);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_25847)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25847),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25847),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25847),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25847),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_25847,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25847),"');");
}

}
}
}


var G__25848 = seq__25041_25843;
var G__25849 = chunk__25042_25844;
var G__25850 = count__25043_25845;
var G__25851 = (i__25044_25846 + (1));
seq__25041_25843 = G__25848;
chunk__25042_25844 = G__25849;
count__25043_25845 = G__25850;
i__25044_25846 = G__25851;
continue;
} else {
var temp__5735__auto___25852 = cljs.core.seq(seq__25041_25843);
if(temp__5735__auto___25852){
var seq__25041_25853__$1 = temp__5735__auto___25852;
if(cljs.core.chunked_seq_QMARK_(seq__25041_25853__$1)){
var c__4556__auto___25854 = cljs.core.chunk_first(seq__25041_25853__$1);
var G__25855 = cljs.core.chunk_rest(seq__25041_25853__$1);
var G__25856 = c__4556__auto___25854;
var G__25857 = cljs.core.count(c__4556__auto___25854);
var G__25858 = (0);
seq__25041_25843 = G__25855;
chunk__25042_25844 = G__25856;
count__25043_25845 = G__25857;
i__25044_25846 = G__25858;
continue;
} else {
var lib_25859 = cljs.core.first(seq__25041_25853__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_25859)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25859),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25859),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25859),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25859),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_25859,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25859),"');");
}

}
}
}


var G__25860 = cljs.core.next(seq__25041_25853__$1);
var G__25861 = null;
var G__25862 = (0);
var G__25863 = (0);
seq__25041_25843 = G__25860;
chunk__25042_25844 = G__25861;
count__25043_25845 = G__25862;
i__25044_25846 = G__25863;
continue;
}
} else {
}
}
break;
}

var seq__25045_25864 = cljs.core.seq(node_libs);
var chunk__25046_25865 = null;
var count__25047_25866 = (0);
var i__25048_25867 = (0);
while(true){
if((i__25048_25867 < count__25047_25866)){
var lib_25868 = chunk__25046_25865.cljs$core$IIndexed$_nth$arity$2(null,i__25048_25867);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_25868)," = require('",lib_25868,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__25869 = seq__25045_25864;
var G__25870 = chunk__25046_25865;
var G__25871 = count__25047_25866;
var G__25872 = (i__25048_25867 + (1));
seq__25045_25864 = G__25869;
chunk__25046_25865 = G__25870;
count__25047_25866 = G__25871;
i__25048_25867 = G__25872;
continue;
} else {
var temp__5735__auto___25876 = cljs.core.seq(seq__25045_25864);
if(temp__5735__auto___25876){
var seq__25045_25877__$1 = temp__5735__auto___25876;
if(cljs.core.chunked_seq_QMARK_(seq__25045_25877__$1)){
var c__4556__auto___25878 = cljs.core.chunk_first(seq__25045_25877__$1);
var G__25879 = cljs.core.chunk_rest(seq__25045_25877__$1);
var G__25880 = c__4556__auto___25878;
var G__25881 = cljs.core.count(c__4556__auto___25878);
var G__25882 = (0);
seq__25045_25864 = G__25879;
chunk__25046_25865 = G__25880;
count__25047_25866 = G__25881;
i__25048_25867 = G__25882;
continue;
} else {
var lib_25883 = cljs.core.first(seq__25045_25877__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_25883)," = require('",lib_25883,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__25884 = cljs.core.next(seq__25045_25877__$1);
var G__25885 = null;
var G__25886 = (0);
var G__25887 = (0);
seq__25045_25864 = G__25884;
chunk__25046_25865 = G__25885;
count__25047_25866 = G__25886;
i__25048_25867 = G__25887;
continue;
}
} else {
}
}
break;
}

var seq__25049_25888 = cljs.core.seq(global_exports_libs);
var chunk__25050_25889 = null;
var count__25051_25890 = (0);
var i__25052_25891 = (0);
while(true){
if((i__25052_25891 < count__25051_25890)){
var lib_25893 = chunk__25050_25889.cljs$core$IIndexed$_nth$arity$2(null,i__25052_25891);
var map__25057_25894 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_25893));
var map__25057_25895__$1 = (((((!((map__25057_25894 == null))))?(((((map__25057_25894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25057_25894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25057_25894):map__25057_25894);
var global_exports_25896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25057_25895__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_25896,lib_25893);


var G__25898 = seq__25049_25888;
var G__25899 = chunk__25050_25889;
var G__25900 = count__25051_25890;
var G__25901 = (i__25052_25891 + (1));
seq__25049_25888 = G__25898;
chunk__25050_25889 = G__25899;
count__25051_25890 = G__25900;
i__25052_25891 = G__25901;
continue;
} else {
var temp__5735__auto___25902 = cljs.core.seq(seq__25049_25888);
if(temp__5735__auto___25902){
var seq__25049_25903__$1 = temp__5735__auto___25902;
if(cljs.core.chunked_seq_QMARK_(seq__25049_25903__$1)){
var c__4556__auto___25904 = cljs.core.chunk_first(seq__25049_25903__$1);
var G__25905 = cljs.core.chunk_rest(seq__25049_25903__$1);
var G__25906 = c__4556__auto___25904;
var G__25907 = cljs.core.count(c__4556__auto___25904);
var G__25908 = (0);
seq__25049_25888 = G__25905;
chunk__25050_25889 = G__25906;
count__25051_25890 = G__25907;
i__25052_25891 = G__25908;
continue;
} else {
var lib_25909 = cljs.core.first(seq__25049_25903__$1);
var map__25059_25910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_25909));
var map__25059_25911__$1 = (((((!((map__25059_25910 == null))))?(((((map__25059_25910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25059_25910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25059_25910):map__25059_25910);
var global_exports_25912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25059_25911__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_25912,lib_25909);


var G__25913 = cljs.core.next(seq__25049_25903__$1);
var G__25914 = null;
var G__25915 = (0);
var G__25916 = (0);
seq__25049_25888 = G__25913;
chunk__25050_25889 = G__25914;
count__25051_25890 = G__25915;
i__25052_25891 = G__25916;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__25061){
var map__25062 = p__25061;
var map__25062__$1 = (((((!((map__25062 == null))))?(((((map__25062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25062):map__25062);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25062__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25062__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25062__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25062__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25062__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25062__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25062__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__25064){
var map__25065 = p__25064;
var map__25065__$1 = (((((!((map__25065 == null))))?(((((map__25065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25065):map__25065);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25065__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25065__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25065__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25065__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25065__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25065__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25065__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__25067){
var map__25068 = p__25067;
var map__25068__$1 = (((((!((map__25068 == null))))?(((((map__25068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25068):map__25068);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25068__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25068__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25068__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25068__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25068__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__25070_25917 = cljs.core.seq(protocols);
var chunk__25071_25918 = null;
var count__25072_25919 = (0);
var i__25073_25920 = (0);
while(true){
if((i__25073_25920 < count__25072_25919)){
var protocol_25921 = chunk__25071_25918.cljs$core$IIndexed$_nth$arity$2(null,i__25073_25920);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_25921)),"}");


var G__25922 = seq__25070_25917;
var G__25923 = chunk__25071_25918;
var G__25924 = count__25072_25919;
var G__25925 = (i__25073_25920 + (1));
seq__25070_25917 = G__25922;
chunk__25071_25918 = G__25923;
count__25072_25919 = G__25924;
i__25073_25920 = G__25925;
continue;
} else {
var temp__5735__auto___25926 = cljs.core.seq(seq__25070_25917);
if(temp__5735__auto___25926){
var seq__25070_25927__$1 = temp__5735__auto___25926;
if(cljs.core.chunked_seq_QMARK_(seq__25070_25927__$1)){
var c__4556__auto___25928 = cljs.core.chunk_first(seq__25070_25927__$1);
var G__25929 = cljs.core.chunk_rest(seq__25070_25927__$1);
var G__25930 = c__4556__auto___25928;
var G__25931 = cljs.core.count(c__4556__auto___25928);
var G__25932 = (0);
seq__25070_25917 = G__25929;
chunk__25071_25918 = G__25930;
count__25072_25919 = G__25931;
i__25073_25920 = G__25932;
continue;
} else {
var protocol_25933 = cljs.core.first(seq__25070_25927__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_25933)),"}");


var G__25934 = cljs.core.next(seq__25070_25927__$1);
var G__25935 = null;
var G__25936 = (0);
var G__25937 = (0);
seq__25070_25917 = G__25934;
chunk__25071_25918 = G__25935;
count__25072_25919 = G__25936;
i__25073_25920 = G__25937;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__25074_25938 = cljs.core.seq(fields__$1);
var chunk__25075_25939 = null;
var count__25076_25940 = (0);
var i__25077_25941 = (0);
while(true){
if((i__25077_25941 < count__25076_25940)){
var fld_25942 = chunk__25075_25939.cljs$core$IIndexed$_nth$arity$2(null,i__25077_25941);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_25942," = ",fld_25942,";");


var G__25943 = seq__25074_25938;
var G__25944 = chunk__25075_25939;
var G__25945 = count__25076_25940;
var G__25946 = (i__25077_25941 + (1));
seq__25074_25938 = G__25943;
chunk__25075_25939 = G__25944;
count__25076_25940 = G__25945;
i__25077_25941 = G__25946;
continue;
} else {
var temp__5735__auto___25947 = cljs.core.seq(seq__25074_25938);
if(temp__5735__auto___25947){
var seq__25074_25948__$1 = temp__5735__auto___25947;
if(cljs.core.chunked_seq_QMARK_(seq__25074_25948__$1)){
var c__4556__auto___25949 = cljs.core.chunk_first(seq__25074_25948__$1);
var G__25950 = cljs.core.chunk_rest(seq__25074_25948__$1);
var G__25951 = c__4556__auto___25949;
var G__25952 = cljs.core.count(c__4556__auto___25949);
var G__25953 = (0);
seq__25074_25938 = G__25950;
chunk__25075_25939 = G__25951;
count__25076_25940 = G__25952;
i__25077_25941 = G__25953;
continue;
} else {
var fld_25954 = cljs.core.first(seq__25074_25948__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_25954," = ",fld_25954,";");


var G__25955 = cljs.core.next(seq__25074_25948__$1);
var G__25956 = null;
var G__25957 = (0);
var G__25958 = (0);
seq__25074_25938 = G__25955;
chunk__25075_25939 = G__25956;
count__25076_25940 = G__25957;
i__25077_25941 = G__25958;
continue;
}
} else {
}
}
break;
}

var seq__25081_25959 = cljs.core.seq(pmasks);
var chunk__25082_25960 = null;
var count__25083_25961 = (0);
var i__25084_25962 = (0);
while(true){
if((i__25084_25962 < count__25083_25961)){
var vec__25091_25963 = chunk__25082_25960.cljs$core$IIndexed$_nth$arity$2(null,i__25084_25962);
var pno_25964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25091_25963,(0),null);
var pmask_25965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25091_25963,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_25964,"$ = ",pmask_25965,";");


var G__25966 = seq__25081_25959;
var G__25967 = chunk__25082_25960;
var G__25968 = count__25083_25961;
var G__25969 = (i__25084_25962 + (1));
seq__25081_25959 = G__25966;
chunk__25082_25960 = G__25967;
count__25083_25961 = G__25968;
i__25084_25962 = G__25969;
continue;
} else {
var temp__5735__auto___25970 = cljs.core.seq(seq__25081_25959);
if(temp__5735__auto___25970){
var seq__25081_25979__$1 = temp__5735__auto___25970;
if(cljs.core.chunked_seq_QMARK_(seq__25081_25979__$1)){
var c__4556__auto___25980 = cljs.core.chunk_first(seq__25081_25979__$1);
var G__25981 = cljs.core.chunk_rest(seq__25081_25979__$1);
var G__25982 = c__4556__auto___25980;
var G__25983 = cljs.core.count(c__4556__auto___25980);
var G__25984 = (0);
seq__25081_25959 = G__25981;
chunk__25082_25960 = G__25982;
count__25083_25961 = G__25983;
i__25084_25962 = G__25984;
continue;
} else {
var vec__25094_25985 = cljs.core.first(seq__25081_25979__$1);
var pno_25986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25094_25985,(0),null);
var pmask_25987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25094_25985,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_25986,"$ = ",pmask_25987,";");


var G__25988 = cljs.core.next(seq__25081_25979__$1);
var G__25989 = null;
var G__25990 = (0);
var G__25991 = (0);
seq__25081_25959 = G__25988;
chunk__25082_25960 = G__25989;
count__25083_25961 = G__25990;
i__25084_25962 = G__25991;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__25097){
var map__25098 = p__25097;
var map__25098__$1 = (((((!((map__25098 == null))))?(((((map__25098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25098):map__25098);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25098__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25098__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25098__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25098__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25098__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__25100_25994 = cljs.core.seq(protocols);
var chunk__25101_25995 = null;
var count__25102_25996 = (0);
var i__25103_25997 = (0);
while(true){
if((i__25103_25997 < count__25102_25996)){
var protocol_25998 = chunk__25101_25995.cljs$core$IIndexed$_nth$arity$2(null,i__25103_25997);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_25998)),"}");


var G__25999 = seq__25100_25994;
var G__26000 = chunk__25101_25995;
var G__26001 = count__25102_25996;
var G__26002 = (i__25103_25997 + (1));
seq__25100_25994 = G__25999;
chunk__25101_25995 = G__26000;
count__25102_25996 = G__26001;
i__25103_25997 = G__26002;
continue;
} else {
var temp__5735__auto___26003 = cljs.core.seq(seq__25100_25994);
if(temp__5735__auto___26003){
var seq__25100_26004__$1 = temp__5735__auto___26003;
if(cljs.core.chunked_seq_QMARK_(seq__25100_26004__$1)){
var c__4556__auto___26005 = cljs.core.chunk_first(seq__25100_26004__$1);
var G__26006 = cljs.core.chunk_rest(seq__25100_26004__$1);
var G__26007 = c__4556__auto___26005;
var G__26008 = cljs.core.count(c__4556__auto___26005);
var G__26009 = (0);
seq__25100_25994 = G__26006;
chunk__25101_25995 = G__26007;
count__25102_25996 = G__26008;
i__25103_25997 = G__26009;
continue;
} else {
var protocol_26010 = cljs.core.first(seq__25100_26004__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_26010)),"}");


var G__26011 = cljs.core.next(seq__25100_26004__$1);
var G__26012 = null;
var G__26013 = (0);
var G__26014 = (0);
seq__25100_25994 = G__26011;
chunk__25101_25995 = G__26012;
count__25102_25996 = G__26013;
i__25103_25997 = G__26014;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__25104_26015 = cljs.core.seq(fields__$1);
var chunk__25105_26016 = null;
var count__25106_26017 = (0);
var i__25107_26018 = (0);
while(true){
if((i__25107_26018 < count__25106_26017)){
var fld_26019 = chunk__25105_26016.cljs$core$IIndexed$_nth$arity$2(null,i__25107_26018);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_26019," = ",fld_26019,";");


var G__26020 = seq__25104_26015;
var G__26021 = chunk__25105_26016;
var G__26022 = count__25106_26017;
var G__26023 = (i__25107_26018 + (1));
seq__25104_26015 = G__26020;
chunk__25105_26016 = G__26021;
count__25106_26017 = G__26022;
i__25107_26018 = G__26023;
continue;
} else {
var temp__5735__auto___26024 = cljs.core.seq(seq__25104_26015);
if(temp__5735__auto___26024){
var seq__25104_26025__$1 = temp__5735__auto___26024;
if(cljs.core.chunked_seq_QMARK_(seq__25104_26025__$1)){
var c__4556__auto___26026 = cljs.core.chunk_first(seq__25104_26025__$1);
var G__26027 = cljs.core.chunk_rest(seq__25104_26025__$1);
var G__26028 = c__4556__auto___26026;
var G__26029 = cljs.core.count(c__4556__auto___26026);
var G__26030 = (0);
seq__25104_26015 = G__26027;
chunk__25105_26016 = G__26028;
count__25106_26017 = G__26029;
i__25107_26018 = G__26030;
continue;
} else {
var fld_26031 = cljs.core.first(seq__25104_26025__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_26031," = ",fld_26031,";");


var G__26032 = cljs.core.next(seq__25104_26025__$1);
var G__26033 = null;
var G__26034 = (0);
var G__26035 = (0);
seq__25104_26015 = G__26032;
chunk__25105_26016 = G__26033;
count__25106_26017 = G__26034;
i__25107_26018 = G__26035;
continue;
}
} else {
}
}
break;
}

var seq__25108_26036 = cljs.core.seq(pmasks);
var chunk__25109_26037 = null;
var count__25110_26038 = (0);
var i__25111_26039 = (0);
while(true){
if((i__25111_26039 < count__25110_26038)){
var vec__25118_26040 = chunk__25109_26037.cljs$core$IIndexed$_nth$arity$2(null,i__25111_26039);
var pno_26041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25118_26040,(0),null);
var pmask_26042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25118_26040,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_26041,"$ = ",pmask_26042,";");


var G__26044 = seq__25108_26036;
var G__26045 = chunk__25109_26037;
var G__26046 = count__25110_26038;
var G__26047 = (i__25111_26039 + (1));
seq__25108_26036 = G__26044;
chunk__25109_26037 = G__26045;
count__25110_26038 = G__26046;
i__25111_26039 = G__26047;
continue;
} else {
var temp__5735__auto___26048 = cljs.core.seq(seq__25108_26036);
if(temp__5735__auto___26048){
var seq__25108_26049__$1 = temp__5735__auto___26048;
if(cljs.core.chunked_seq_QMARK_(seq__25108_26049__$1)){
var c__4556__auto___26050 = cljs.core.chunk_first(seq__25108_26049__$1);
var G__26051 = cljs.core.chunk_rest(seq__25108_26049__$1);
var G__26052 = c__4556__auto___26050;
var G__26053 = cljs.core.count(c__4556__auto___26050);
var G__26054 = (0);
seq__25108_26036 = G__26051;
chunk__25109_26037 = G__26052;
count__25110_26038 = G__26053;
i__25111_26039 = G__26054;
continue;
} else {
var vec__25121_26055 = cljs.core.first(seq__25108_26049__$1);
var pno_26056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25121_26055,(0),null);
var pmask_26057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25121_26055,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_26056,"$ = ",pmask_26057,";");


var G__26058 = cljs.core.next(seq__25108_26049__$1);
var G__26059 = null;
var G__26060 = (0);
var G__26061 = (0);
seq__25108_26036 = G__26058;
chunk__25109_26037 = G__26059;
count__25110_26038 = G__26060;
i__25111_26039 = G__26061;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__25124){
var map__25125 = p__25124;
var map__25125__$1 = (((((!((map__25125 == null))))?(((((map__25125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25125):map__25125);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25125__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25125__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25125__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25125__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25125__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__24464__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__25127){
var map__25128 = p__25127;
var map__25128__$1 = (((((!((map__25128 == null))))?(((((map__25128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25128):map__25128);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25128__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25128__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25128__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25128__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25128__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4115__auto__ = code;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__4115__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__24464__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__24464__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__25134 = cljs.core.seq(table);
var chunk__25135 = null;
var count__25136 = (0);
var i__25137 = (0);
while(true){
if((i__25137 < count__25136)){
var vec__25144 = chunk__25135.cljs$core$IIndexed$_nth$arity$2(null,i__25137);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25144,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25144,(1),null);
var ns_26062 = cljs.core.namespace(sym);
var name_26063 = cljs.core.name(sym);
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


var G__26065 = seq__25134;
var G__26066 = chunk__25135;
var G__26067 = count__25136;
var G__26068 = (i__25137 + (1));
seq__25134 = G__26065;
chunk__25135 = G__26066;
count__25136 = G__26067;
i__25137 = G__26068;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__25134);
if(temp__5735__auto__){
var seq__25134__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25134__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__25134__$1);
var G__26069 = cljs.core.chunk_rest(seq__25134__$1);
var G__26070 = c__4556__auto__;
var G__26071 = cljs.core.count(c__4556__auto__);
var G__26072 = (0);
seq__25134 = G__26069;
chunk__25135 = G__26070;
count__25136 = G__26071;
i__25137 = G__26072;
continue;
} else {
var vec__25147 = cljs.core.first(seq__25134__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25147,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25147,(1),null);
var ns_26073 = cljs.core.namespace(sym);
var name_26074 = cljs.core.name(sym);
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


var G__26075 = cljs.core.next(seq__25134__$1);
var G__26076 = null;
var G__26077 = (0);
var G__26078 = (0);
seq__25134 = G__26075;
chunk__25135 = G__26076;
count__25136 = G__26077;
i__25137 = G__26078;
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
var k_26080 = cljs.core.first(ks);
var vec__25155_26081 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_26080);
var top_26082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25155_26081,(0),null);
var prefix_SINGLEQUOTE__26083 = vec__25155_26081;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_26080)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__26083) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_26082)) || (cljs.core.contains_QMARK_(known_externs,top_26082)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__26083)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_26082);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__26083)),";");
}
} else {
}

var m_26084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_26080);
if(cljs.core.empty_QMARK_(m_26084)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__26083,m_26084,top_level,known_externs);
}

var G__26085 = cljs.core.next(ks);
ks = G__26085;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);

