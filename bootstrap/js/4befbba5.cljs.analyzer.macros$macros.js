goog.provide('cljs.analyzer.macros$macros');
var ret__4785__auto___27896 = (function (){
cljs.analyzer.macros$macros.with_warning_handlers = (function cljs$analyzer$macros$macros$with_warning_handlers(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27897 = arguments.length;
var i__4737__auto___27898 = (0);
while(true){
if((i__4737__auto___27898 < len__4736__auto___27897)){
args__4742__auto__.push((arguments[i__4737__auto___27898]));

var G__27899 = (i__4737__auto___27898 + (1));
i__4737__auto___27898 = G__27899;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.macros$macros.with_warning_handlers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.analyzer.macros$macros.with_warning_handlers.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,handlers,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-warning-handlers*","cljs.analyzer/*cljs-warning-handlers*",882579751,null),null,(1),null)),(new cljs.core.List(null,handlers,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(cljs.analyzer.macros$macros.with_warning_handlers.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.analyzer.macros$macros.with_warning_handlers.cljs$lang$applyTo = (function (seq27823){
var G__27824 = cljs.core.first(seq27823);
var seq27823__$1 = cljs.core.next(seq27823);
var G__27825 = cljs.core.first(seq27823__$1);
var seq27823__$2 = cljs.core.next(seq27823__$1);
var G__27826 = cljs.core.first(seq27823__$2);
var seq27823__$3 = cljs.core.next(seq27823__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27824,G__27825,G__27826,seq27823__$3);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.with_warning_handlers.cljs$lang$macro = true);

var ret__4785__auto___27900 = (function (){
cljs.analyzer.macros$macros.no_warn = (function cljs$analyzer$macros$macros$no_warn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27901 = arguments.length;
var i__4737__auto___27902 = (0);
while(true){
if((i__4737__auto___27902 < len__4736__auto___27901)){
args__4742__auto__.push((arguments[i__4737__auto___27902]));

var G__27903 = (i__4737__auto___27902 + (1));
i__4737__auto___27902 = G__27903;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.analyzer.macros$macros.no_warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.analyzer.macros$macros.no_warn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-warnings*","cljs.analyzer/*cljs-warnings*",-289667730,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","keys","cljs.core/keys",-927561820,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-warnings*","cljs.analyzer/*cljs-warnings*",-289667730,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",-89455077,null),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(cljs.analyzer.macros$macros.no_warn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.analyzer.macros$macros.no_warn.cljs$lang$applyTo = (function (seq27830){
var G__27831 = cljs.core.first(seq27830);
var seq27830__$1 = cljs.core.next(seq27830);
var G__27832 = cljs.core.first(seq27830__$1);
var seq27830__$2 = cljs.core.next(seq27830__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27831,G__27832,seq27830__$2);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.no_warn.cljs$lang$macro = true);

var ret__4785__auto___27904 = (function (){
cljs.analyzer.macros$macros.with_core_macros = (function cljs$analyzer$macros$macros$with_core_macros(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27905 = arguments.length;
var i__4737__auto___27906 = (0);
while(true){
if((i__4737__auto___27906 < len__4736__auto___27905)){
args__4742__auto__.push((arguments[i__4737__auto___27906]));

var G__27907 = (i__4737__auto___27906 + (1));
i__4737__auto___27906 = G__27907;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.macros$macros.with_core_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.analyzer.macros$macros.with_core_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,path,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-macros-path*","cljs.analyzer/*cljs-macros-path*",-1737616995,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,path,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reset!","cljs.core/reset!",657404621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","-cljs-macros-loaded","cljs.analyzer/-cljs-macros-loaded",1918493478,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-macros-path*","cljs.analyzer/*cljs-macros-path*",-1737616995,null),null,(1),null)),(new cljs.core.List(null,path,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(cljs.analyzer.macros$macros.with_core_macros.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.analyzer.macros$macros.with_core_macros.cljs$lang$applyTo = (function (seq27841){
var G__27842 = cljs.core.first(seq27841);
var seq27841__$1 = cljs.core.next(seq27841);
var G__27843 = cljs.core.first(seq27841__$1);
var seq27841__$2 = cljs.core.next(seq27841__$1);
var G__27844 = cljs.core.first(seq27841__$2);
var seq27841__$3 = cljs.core.next(seq27841__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27842,G__27843,G__27844,seq27841__$3);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.with_core_macros.cljs$lang$macro = true);

var ret__4785__auto___27908 = (function (){
cljs.analyzer.macros$macros.with_core_macros_file = (function cljs$analyzer$macros$macros$with_core_macros_file(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27909 = arguments.length;
var i__4737__auto___27910 = (0);
while(true){
if((i__4737__auto___27910 < len__4736__auto___27909)){
args__4742__auto__.push((arguments[i__4737__auto___27910]));

var G__27911 = (i__4737__auto___27910 + (1));
i__4737__auto___27910 = G__27911;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.macros$macros.with_core_macros_file.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.analyzer.macros$macros.with_core_macros_file.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,path,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-macros-path*","cljs.analyzer/*cljs-macros-path*",-1737616995,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,path,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reset!","cljs.core/reset!",657404621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","-cljs-macros-loaded","cljs.analyzer/-cljs-macros-loaded",1918493478,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-macros-path*","cljs.analyzer/*cljs-macros-path*",-1737616995,null),null,(1),null)),(new cljs.core.List(null,path,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-macros-is-classpath*","cljs.analyzer/*cljs-macros-is-classpath*",1674023778,null),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(cljs.analyzer.macros$macros.with_core_macros_file.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.analyzer.macros$macros.with_core_macros_file.cljs$lang$applyTo = (function (seq27845){
var G__27846 = cljs.core.first(seq27845);
var seq27845__$1 = cljs.core.next(seq27845);
var G__27847 = cljs.core.first(seq27845__$1);
var seq27845__$2 = cljs.core.next(seq27845__$1);
var G__27848 = cljs.core.first(seq27845__$2);
var seq27845__$3 = cljs.core.next(seq27845__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27846,G__27847,G__27848,seq27845__$3);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.with_core_macros_file.cljs$lang$macro = true);

var ret__4785__auto___27912 = (function (){
cljs.analyzer.macros$macros.wrapping_errors = (function cljs$analyzer$macros$macros$wrapping_errors(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27913 = arguments.length;
var i__4737__auto___27914 = (0);
while(true){
if((i__4737__auto___27914 < len__4736__auto___27913)){
args__4742__auto__.push((arguments[i__4737__auto___27914]));

var G__27915 = (i__4737__auto___27914 + (1));
i__4737__auto___27914 = G__27915;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.macros$macros.wrapping_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.analyzer.macros$macros.wrapping_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"err__27863__auto__","err__27863__auto__",-1265343318,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","has-error-data?","cljs.analyzer/has-error-data?",-2145150806,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__27863__auto__","err__27863__auto__",-1265343318,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__27863__auto__","err__27863__auto__",-1265343318,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","analysis-error?","cljs.analyzer/analysis-error?",-1824961346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__27863__auto__","err__27863__auto__",-1265343318,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","error-data","cljs.analyzer/error-data",-70583485,null),null,(1),null)),(new cljs.core.List(null,env,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"compilation","compilation",-1328774561),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__27863__auto__","err__27863__auto__",-1265343318,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","error-data","cljs.analyzer/error-data",-70583485,null),null,(1),null)),(new cljs.core.List(null,env,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"compilation","compilation",-1328774561),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","error","cljs.analyzer/error",1575241885,null),null,(1),null)),(new cljs.core.List(null,env,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-message",".-message",-1827250821,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__27863__auto__","err__27863__auto__",-1265343318,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__27863__auto__","err__27863__auto__",-1265343318,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.analyzer.macros$macros.wrapping_errors.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.analyzer.macros$macros.wrapping_errors.cljs$lang$applyTo = (function (seq27864){
var G__27865 = cljs.core.first(seq27864);
var seq27864__$1 = cljs.core.next(seq27864);
var G__27866 = cljs.core.first(seq27864__$1);
var seq27864__$2 = cljs.core.next(seq27864__$1);
var G__27867 = cljs.core.first(seq27864__$2);
var seq27864__$3 = cljs.core.next(seq27864__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27865,G__27866,G__27867,seq27864__$3);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.wrapping_errors.cljs$lang$macro = true);

var ret__4785__auto___27921 = (function (){
cljs.analyzer.macros$macros.disallowing_recur = (function cljs$analyzer$macros$macros$disallowing_recur(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27922 = arguments.length;
var i__4737__auto___27923 = (0);
while(true){
if((i__4737__auto___27923 < len__4736__auto___27922)){
args__4742__auto__.push((arguments[i__4737__auto___27923]));

var G__27924 = (i__4737__auto___27923 + (1));
i__4737__auto___27923 = G__27924;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.analyzer.macros$macros.disallowing_recur.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.analyzer.macros$macros.disallowing_recur.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*recur-frames*","cljs.analyzer/*recur-frames*",-431441741,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*recur-frames*","cljs.analyzer/*recur-frames*",-431441741,null),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(cljs.analyzer.macros$macros.disallowing_recur.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.analyzer.macros$macros.disallowing_recur.cljs$lang$applyTo = (function (seq27881){
var G__27882 = cljs.core.first(seq27881);
var seq27881__$1 = cljs.core.next(seq27881);
var G__27883 = cljs.core.first(seq27881__$1);
var seq27881__$2 = cljs.core.next(seq27881__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27882,G__27883,seq27881__$2);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.disallowing_recur.cljs$lang$macro = true);

var ret__4785__auto___27925 = (function (){
cljs.analyzer.macros$macros.allowing_redef = (function cljs$analyzer$macros$macros$allowing_redef(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27926 = arguments.length;
var i__4737__auto___27927 = (0);
while(true){
if((i__4737__auto___27927 < len__4736__auto___27926)){
args__4742__auto__.push((arguments[i__4737__auto___27927]));

var G__27928 = (i__4737__auto___27927 + (1));
i__4737__auto___27927 = G__27928;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.analyzer.macros$macros.allowing_redef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.analyzer.macros$macros.allowing_redef.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*allow-redef*","cljs.analyzer/*allow-redef*",-501091249,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(cljs.analyzer.macros$macros.allowing_redef.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.analyzer.macros$macros.allowing_redef.cljs$lang$applyTo = (function (seq27885){
var G__27886 = cljs.core.first(seq27885);
var seq27885__$1 = cljs.core.next(seq27885);
var G__27887 = cljs.core.first(seq27885__$1);
var seq27885__$2 = cljs.core.next(seq27885__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27886,G__27887,seq27885__$2);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.allowing_redef.cljs$lang$macro = true);

var ret__4785__auto___27929 = (function (){
cljs.analyzer.macros$macros.disallowing_ns_STAR_ = (function cljs$analyzer$macros$macros$disallowing_ns_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27930 = arguments.length;
var i__4737__auto___27931 = (0);
while(true){
if((i__4737__auto___27931 < len__4736__auto___27930)){
args__4742__auto__.push((arguments[i__4737__auto___27931]));

var G__27932 = (i__4737__auto___27931 + (1));
i__4737__auto___27931 = G__27932;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.analyzer.macros$macros.disallowing_ns_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.analyzer.macros$macros.disallowing_ns_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*allow-ns*","cljs.analyzer/*allow-ns*",-141648458,null),null,(1),null)),(new cljs.core.List(null,false,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(cljs.analyzer.macros$macros.disallowing_ns_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.analyzer.macros$macros.disallowing_ns_STAR_.cljs$lang$applyTo = (function (seq27890){
var G__27891 = cljs.core.first(seq27890);
var seq27890__$1 = cljs.core.next(seq27890);
var G__27892 = cljs.core.first(seq27890__$1);
var seq27890__$2 = cljs.core.next(seq27890__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27891,G__27892,seq27890__$2);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.disallowing_ns_STAR_.cljs$lang$macro = true);

