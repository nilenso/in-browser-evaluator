goog.provide('cljs.analyzer.macros$macros');
var ret__4785__auto___27796 = (function (){
cljs.analyzer.macros$macros.with_warning_handlers = (function cljs$analyzer$macros$macros$with_warning_handlers(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27797 = arguments.length;
var i__4737__auto___27798 = (0);
while(true){
if((i__4737__auto___27798 < len__4736__auto___27797)){
args__4742__auto__.push((arguments[i__4737__auto___27798]));

var G__27799 = (i__4737__auto___27798 + (1));
i__4737__auto___27798 = G__27799;
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
(cljs.analyzer.macros$macros.with_warning_handlers.cljs$lang$applyTo = (function (seq27755){
var G__27756 = cljs.core.first(seq27755);
var seq27755__$1 = cljs.core.next(seq27755);
var G__27757 = cljs.core.first(seq27755__$1);
var seq27755__$2 = cljs.core.next(seq27755__$1);
var G__27758 = cljs.core.first(seq27755__$2);
var seq27755__$3 = cljs.core.next(seq27755__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27756,G__27757,G__27758,seq27755__$3);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.with_warning_handlers.cljs$lang$macro = true);

var ret__4785__auto___27800 = (function (){
cljs.analyzer.macros$macros.no_warn = (function cljs$analyzer$macros$macros$no_warn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27801 = arguments.length;
var i__4737__auto___27802 = (0);
while(true){
if((i__4737__auto___27802 < len__4736__auto___27801)){
args__4742__auto__.push((arguments[i__4737__auto___27802]));

var G__27803 = (i__4737__auto___27802 + (1));
i__4737__auto___27802 = G__27803;
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
(cljs.analyzer.macros$macros.no_warn.cljs$lang$applyTo = (function (seq27765){
var G__27766 = cljs.core.first(seq27765);
var seq27765__$1 = cljs.core.next(seq27765);
var G__27767 = cljs.core.first(seq27765__$1);
var seq27765__$2 = cljs.core.next(seq27765__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27766,G__27767,seq27765__$2);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.no_warn.cljs$lang$macro = true);

var ret__4785__auto___27804 = (function (){
cljs.analyzer.macros$macros.with_core_macros = (function cljs$analyzer$macros$macros$with_core_macros(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27805 = arguments.length;
var i__4737__auto___27806 = (0);
while(true){
if((i__4737__auto___27806 < len__4736__auto___27805)){
args__4742__auto__.push((arguments[i__4737__auto___27806]));

var G__27807 = (i__4737__auto___27806 + (1));
i__4737__auto___27806 = G__27807;
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
(cljs.analyzer.macros$macros.with_core_macros.cljs$lang$applyTo = (function (seq27771){
var G__27772 = cljs.core.first(seq27771);
var seq27771__$1 = cljs.core.next(seq27771);
var G__27773 = cljs.core.first(seq27771__$1);
var seq27771__$2 = cljs.core.next(seq27771__$1);
var G__27774 = cljs.core.first(seq27771__$2);
var seq27771__$3 = cljs.core.next(seq27771__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27772,G__27773,G__27774,seq27771__$3);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.with_core_macros.cljs$lang$macro = true);

var ret__4785__auto___27808 = (function (){
cljs.analyzer.macros$macros.with_core_macros_file = (function cljs$analyzer$macros$macros$with_core_macros_file(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27809 = arguments.length;
var i__4737__auto___27810 = (0);
while(true){
if((i__4737__auto___27810 < len__4736__auto___27809)){
args__4742__auto__.push((arguments[i__4737__auto___27810]));

var G__27811 = (i__4737__auto___27810 + (1));
i__4737__auto___27810 = G__27811;
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
(cljs.analyzer.macros$macros.with_core_macros_file.cljs$lang$applyTo = (function (seq27775){
var G__27776 = cljs.core.first(seq27775);
var seq27775__$1 = cljs.core.next(seq27775);
var G__27777 = cljs.core.first(seq27775__$1);
var seq27775__$2 = cljs.core.next(seq27775__$1);
var G__27778 = cljs.core.first(seq27775__$2);
var seq27775__$3 = cljs.core.next(seq27775__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27776,G__27777,G__27778,seq27775__$3);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.with_core_macros_file.cljs$lang$macro = true);

var ret__4785__auto___27812 = (function (){
cljs.analyzer.macros$macros.wrapping_errors = (function cljs$analyzer$macros$macros$wrapping_errors(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27813 = arguments.length;
var i__4737__auto___27814 = (0);
while(true){
if((i__4737__auto___27814 < len__4736__auto___27813)){
args__4742__auto__.push((arguments[i__4737__auto___27814]));

var G__27815 = (i__4737__auto___27814 + (1));
i__4737__auto___27814 = G__27815;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.macros$macros.wrapping_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.analyzer.macros$macros.wrapping_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"err__27779__auto__","err__27779__auto__",1699087966,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","has-error-data?","cljs.analyzer/has-error-data?",-2145150806,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__27779__auto__","err__27779__auto__",1699087966,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__27779__auto__","err__27779__auto__",1699087966,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","analysis-error?","cljs.analyzer/analysis-error?",-1824961346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__27779__auto__","err__27779__auto__",1699087966,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","error-data","cljs.analyzer/error-data",-70583485,null),null,(1),null)),(new cljs.core.List(null,env,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"compilation","compilation",-1328774561),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__27779__auto__","err__27779__auto__",1699087966,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","error-data","cljs.analyzer/error-data",-70583485,null),null,(1),null)),(new cljs.core.List(null,env,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"compilation","compilation",-1328774561),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","error","cljs.analyzer/error",1575241885,null),null,(1),null)),(new cljs.core.List(null,env,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-message",".-message",-1827250821,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__27779__auto__","err__27779__auto__",1699087966,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__27779__auto__","err__27779__auto__",1699087966,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.analyzer.macros$macros.wrapping_errors.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.analyzer.macros$macros.wrapping_errors.cljs$lang$applyTo = (function (seq27780){
var G__27781 = cljs.core.first(seq27780);
var seq27780__$1 = cljs.core.next(seq27780);
var G__27782 = cljs.core.first(seq27780__$1);
var seq27780__$2 = cljs.core.next(seq27780__$1);
var G__27783 = cljs.core.first(seq27780__$2);
var seq27780__$3 = cljs.core.next(seq27780__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27781,G__27782,G__27783,seq27780__$3);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.wrapping_errors.cljs$lang$macro = true);

var ret__4785__auto___27816 = (function (){
cljs.analyzer.macros$macros.disallowing_recur = (function cljs$analyzer$macros$macros$disallowing_recur(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27817 = arguments.length;
var i__4737__auto___27818 = (0);
while(true){
if((i__4737__auto___27818 < len__4736__auto___27817)){
args__4742__auto__.push((arguments[i__4737__auto___27818]));

var G__27819 = (i__4737__auto___27818 + (1));
i__4737__auto___27818 = G__27819;
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
(cljs.analyzer.macros$macros.disallowing_recur.cljs$lang$applyTo = (function (seq27787){
var G__27788 = cljs.core.first(seq27787);
var seq27787__$1 = cljs.core.next(seq27787);
var G__27789 = cljs.core.first(seq27787__$1);
var seq27787__$2 = cljs.core.next(seq27787__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27788,G__27789,seq27787__$2);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.disallowing_recur.cljs$lang$macro = true);

var ret__4785__auto___27823 = (function (){
cljs.analyzer.macros$macros.allowing_redef = (function cljs$analyzer$macros$macros$allowing_redef(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27824 = arguments.length;
var i__4737__auto___27825 = (0);
while(true){
if((i__4737__auto___27825 < len__4736__auto___27824)){
args__4742__auto__.push((arguments[i__4737__auto___27825]));

var G__27826 = (i__4737__auto___27825 + (1));
i__4737__auto___27825 = G__27826;
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
(cljs.analyzer.macros$macros.allowing_redef.cljs$lang$applyTo = (function (seq27790){
var G__27791 = cljs.core.first(seq27790);
var seq27790__$1 = cljs.core.next(seq27790);
var G__27792 = cljs.core.first(seq27790__$1);
var seq27790__$2 = cljs.core.next(seq27790__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27791,G__27792,seq27790__$2);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.allowing_redef.cljs$lang$macro = true);

var ret__4785__auto___27827 = (function (){
cljs.analyzer.macros$macros.disallowing_ns_STAR_ = (function cljs$analyzer$macros$macros$disallowing_ns_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27828 = arguments.length;
var i__4737__auto___27829 = (0);
while(true){
if((i__4737__auto___27829 < len__4736__auto___27828)){
args__4742__auto__.push((arguments[i__4737__auto___27829]));

var G__27830 = (i__4737__auto___27829 + (1));
i__4737__auto___27829 = G__27830;
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
(cljs.analyzer.macros$macros.disallowing_ns_STAR_.cljs$lang$applyTo = (function (seq27793){
var G__27794 = cljs.core.first(seq27793);
var seq27793__$1 = cljs.core.next(seq27793);
var G__27795 = cljs.core.first(seq27793__$1);
var seq27793__$2 = cljs.core.next(seq27793__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27794,G__27795,seq27793__$2);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.disallowing_ns_STAR_.cljs$lang$macro = true);

