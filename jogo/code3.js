gdjs.FasesCode = {};
gdjs.FasesCode.localVariables = [];
gdjs.FasesCode.GDA_9595joystickObjects1_1final = [];

gdjs.FasesCode.GDA_9595joystickObjects2_1final = [];

gdjs.FasesCode.GDBT_9595LeaderBoardObjects2_1final = [];

gdjs.FasesCode.GDOBJ_9595FasesObjects1_1final = [];

gdjs.FasesCode.forEachIndex2 = 0;

gdjs.FasesCode.forEachObjects2 = [];

gdjs.FasesCode.forEachTemporary2 = null;

gdjs.FasesCode.forEachTotalCount2 = 0;

gdjs.FasesCode.GDBGObjects1= [];
gdjs.FasesCode.GDBGObjects2= [];
gdjs.FasesCode.GDBGObjects3= [];
gdjs.FasesCode.GDBGObjects4= [];
gdjs.FasesCode.GDBT_9595OkObjects1= [];
gdjs.FasesCode.GDBT_9595OkObjects2= [];
gdjs.FasesCode.GDBT_9595OkObjects3= [];
gdjs.FasesCode.GDBT_9595OkObjects4= [];
gdjs.FasesCode.GDBG_9595AguaparadaObjects1= [];
gdjs.FasesCode.GDBG_9595AguaparadaObjects2= [];
gdjs.FasesCode.GDBG_9595AguaparadaObjects3= [];
gdjs.FasesCode.GDBG_9595AguaparadaObjects4= [];
gdjs.FasesCode.GDOBJ_9595FasesObjects1= [];
gdjs.FasesCode.GDOBJ_9595FasesObjects2= [];
gdjs.FasesCode.GDOBJ_9595FasesObjects3= [];
gdjs.FasesCode.GDOBJ_9595FasesObjects4= [];
gdjs.FasesCode.GDTXT_9595FasesObjects1= [];
gdjs.FasesCode.GDTXT_9595FasesObjects2= [];
gdjs.FasesCode.GDTXT_9595FasesObjects3= [];
gdjs.FasesCode.GDTXT_9595FasesObjects4= [];
gdjs.FasesCode.GDHUD_9595MoedaObjects1= [];
gdjs.FasesCode.GDHUD_9595MoedaObjects2= [];
gdjs.FasesCode.GDHUD_9595MoedaObjects3= [];
gdjs.FasesCode.GDHUD_9595MoedaObjects4= [];
gdjs.FasesCode.GDTXT_9595HUD_9595MoedasObjects1= [];
gdjs.FasesCode.GDTXT_9595HUD_9595MoedasObjects2= [];
gdjs.FasesCode.GDTXT_9595HUD_9595MoedasObjects3= [];
gdjs.FasesCode.GDTXT_9595HUD_9595MoedasObjects4= [];
gdjs.FasesCode.GDBT_9595LeaderBoardObjects1= [];
gdjs.FasesCode.GDBT_9595LeaderBoardObjects2= [];
gdjs.FasesCode.GDBT_9595LeaderBoardObjects3= [];
gdjs.FasesCode.GDBT_9595LeaderBoardObjects4= [];
gdjs.FasesCode.GDA_9595joystickObjects1= [];
gdjs.FasesCode.GDA_9595joystickObjects2= [];
gdjs.FasesCode.GDA_9595joystickObjects3= [];
gdjs.FasesCode.GDA_9595joystickObjects4= [];


gdjs.FasesCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{/* Unknown object - skipped. */}}

}


};gdjs.FasesCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{/* Unknown object - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{/* Unknown object - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{/* Unknown object - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{/* Unknown object - skipped. */}}

}


};gdjs.FasesCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("HUD_Moeda"), gdjs.FasesCode.GDHUD_9595MoedaObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FasesCode.GDHUD_9595MoedaObjects3.length;i<l;++i) {
    if ( gdjs.FasesCode.GDHUD_9595MoedaObjects3[i].getBehavior("Animation").getAnimationIndex() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.FasesCode.GDHUD_9595MoedaObjects3[k] = gdjs.FasesCode.GDHUD_9595MoedaObjects3[i];
        ++k;
    }
}
gdjs.FasesCode.GDHUD_9595MoedaObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FasesCode.GDHUD_9595MoedaObjects3 */
{for(var i = 0, len = gdjs.FasesCode.GDHUD_9595MoedaObjects3.length ;i < len;++i) {
    gdjs.FasesCode.GDHUD_9595MoedaObjects3[i].getBehavior("Animation").setAnimationIndex(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HUD_Moeda"), gdjs.FasesCode.GDHUD_9595MoedaObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FasesCode.GDHUD_9595MoedaObjects3.length;i<l;++i) {
    if ( gdjs.FasesCode.GDHUD_9595MoedaObjects3[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.FasesCode.GDHUD_9595MoedaObjects3[k] = gdjs.FasesCode.GDHUD_9595MoedaObjects3[i];
        ++k;
    }
}
gdjs.FasesCode.GDHUD_9595MoedaObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FasesCode.GDHUD_9595MoedaObjects3.length;i<l;++i) {
    if ( gdjs.FasesCode.GDHUD_9595MoedaObjects3[i].getBehavior("Animation").getAnimationIndex() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.FasesCode.GDHUD_9595MoedaObjects3[k] = gdjs.FasesCode.GDHUD_9595MoedaObjects3[i];
        ++k;
    }
}
gdjs.FasesCode.GDHUD_9595MoedaObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.FasesCode.GDHUD_9595MoedaObjects3 */
{for(var i = 0, len = gdjs.FasesCode.GDHUD_9595MoedaObjects3.length ;i < len;++i) {
    gdjs.FasesCode.GDHUD_9595MoedaObjects3[i].getBehavior("Animation").setAnimationIndex(0);
}
}{for(var i = 0, len = gdjs.FasesCode.GDHUD_9595MoedaObjects3.length ;i < len;++i) {
    gdjs.FasesCode.GDHUD_9595MoedaObjects3[i].returnVariable(gdjs.FasesCode.GDHUD_9595MoedaObjects3[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HUD_Moeda"), gdjs.FasesCode.GDHUD_9595MoedaObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FasesCode.GDHUD_9595MoedaObjects3.length;i<l;++i) {
    if ( gdjs.FasesCode.GDHUD_9595MoedaObjects3[i].getBehavior("Animation").getAnimationIndex() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.FasesCode.GDHUD_9595MoedaObjects3[k] = gdjs.FasesCode.GDHUD_9595MoedaObjects3[i];
        ++k;
    }
}
gdjs.FasesCode.GDHUD_9595MoedaObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FasesCode.GDHUD_9595MoedaObjects3.length;i<l;++i) {
    if ( gdjs.FasesCode.GDHUD_9595MoedaObjects3[i].getVariableNumber(gdjs.FasesCode.GDHUD_9595MoedaObjects3[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.FasesCode.GDHUD_9595MoedaObjects3[k] = gdjs.FasesCode.GDHUD_9595MoedaObjects3[i];
        ++k;
    }
}
gdjs.FasesCode.GDHUD_9595MoedaObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.FasesCode.GDHUD_9595MoedaObjects3 */
{for(var i = 0, len = gdjs.FasesCode.GDHUD_9595MoedaObjects3.length ;i < len;++i) {
    gdjs.FasesCode.GDHUD_9595MoedaObjects3[i].getBehavior("Animation").setAnimationIndex(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HUD_Moeda"), gdjs.FasesCode.GDHUD_9595MoedaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FasesCode.GDHUD_9595MoedaObjects2.length;i<l;++i) {
    if ( gdjs.FasesCode.GDHUD_9595MoedaObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.FasesCode.GDHUD_9595MoedaObjects2[k] = gdjs.FasesCode.GDHUD_9595MoedaObjects2[i];
        ++k;
    }
}
gdjs.FasesCode.GDHUD_9595MoedaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FasesCode.GDHUD_9595MoedaObjects2.length;i<l;++i) {
    if ( gdjs.FasesCode.GDHUD_9595MoedaObjects2[i].getBehavior("Animation").getAnimationIndex() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.FasesCode.GDHUD_9595MoedaObjects2[k] = gdjs.FasesCode.GDHUD_9595MoedaObjects2[i];
        ++k;
    }
}
gdjs.FasesCode.GDHUD_9595MoedaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FasesCode.GDHUD_9595MoedaObjects2.length;i<l;++i) {
    if ( gdjs.FasesCode.GDHUD_9595MoedaObjects2[i].getVariableNumber(gdjs.FasesCode.GDHUD_9595MoedaObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.FasesCode.GDHUD_9595MoedaObjects2[k] = gdjs.FasesCode.GDHUD_9595MoedaObjects2[i];
        ++k;
    }
}
gdjs.FasesCode.GDHUD_9595MoedaObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.FasesCode.GDHUD_9595MoedaObjects2 */
{for(var i = 0, len = gdjs.FasesCode.GDHUD_9595MoedaObjects2.length ;i < len;++i) {
    gdjs.FasesCode.GDHUD_9595MoedaObjects2[i].getBehavior("Animation").setAnimationIndex(0);
}
}}

}


};gdjs.FasesCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "anim_moedas", gdjs.randomFloatInRange(5, 13), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.FasesCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown object - skipped. */}
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


};gdjs.FasesCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimeScale(runtimeScene) != 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 1, "Cross", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
/* Unknown object - skipped. */if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
/* Unknown object - skipped. */if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
}
}
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


};gdjs.FasesCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.func(runtimeScene, "anim_fase", 0.01, 185, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repetition.func(runtimeScene, "anim_fase", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 185;
}
if (isConditionTrue_0) {
{gdjs.evtsExt__RepeatEveryXSeconds__DeleteTimer.func(runtimeScene, "anim_fase", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(2);
}}

}


};gdjs.FasesCode.asyncCallback13916948 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FasesCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(3);
}gdjs.FasesCode.localVariables.length = 0;
}
gdjs.FasesCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FasesCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.FasesCode.asyncCallback13916948(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FasesCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{/* Unknown object - skipped. */}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}}

}


};gdjs.FasesCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), true, false);
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), false, false);
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
if (isConditionTrue_0) {

{ //Subevents
gdjs.FasesCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13916876);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.FasesCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.func(runtimeScene, "anim_fase2", 0.01, 185, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repetition.func(runtimeScene, "anim_fase2", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 185;
}
if (isConditionTrue_0) {
{gdjs.evtsExt__RepeatEveryXSeconds__DeleteTimer.func(runtimeScene, "anim_fase", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__RepeatEveryXSeconds__DeleteTimer.func(runtimeScene, "anim_fase2", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.FasesCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.FasesCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) <= 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TXT_HUD_Moedas"), gdjs.FasesCode.GDTXT_9595HUD_9595MoedasObjects2);
{for(var i = 0, len = gdjs.FasesCode.GDTXT_9595HUD_9595MoedasObjects2.length ;i < len;++i) {
    gdjs.FasesCode.GDTXT_9595HUD_9595MoedasObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
}{for(var i = 0, len = gdjs.FasesCode.GDTXT_9595HUD_9595MoedasObjects2.length ;i < len;++i) {
    gdjs.FasesCode.GDTXT_9595HUD_9595MoedasObjects2[i].setTextAlignment("right");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) >= 1000;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TXT_HUD_Moedas"), gdjs.FasesCode.GDTXT_9595HUD_9595MoedasObjects2);
{for(var i = 0, len = gdjs.FasesCode.GDTXT_9595HUD_9595MoedasObjects2.length ;i < len;++i) {
    gdjs.FasesCode.GDTXT_9595HUD_9595MoedasObjects2[i].setTextAlignment("right");
}
}{for(var i = 0, len = gdjs.FasesCode.GDTXT_9595HUD_9595MoedasObjects2.length ;i < len;++i) {
    gdjs.FasesCode.GDTXT_9595HUD_9595MoedasObjects2[i].getBehavior("Text").setText(gdjs.evtTools.string.strAt(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), 0) + "." + gdjs.evtTools.string.strAt(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), 1) + "k");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TXT_HUD_Moedas"), gdjs.FasesCode.GDTXT_9595HUD_9595MoedasObjects2);
{for(var i = 0, len = gdjs.FasesCode.GDTXT_9595HUD_9595MoedasObjects2.length ;i < len;++i) {
    gdjs.FasesCode.GDTXT_9595HUD_9595MoedasObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
}{for(var i = 0, len = gdjs.FasesCode.GDTXT_9595HUD_9595MoedasObjects2.length ;i < len;++i) {
    gdjs.FasesCode.GDTXT_9595HUD_9595MoedasObjects2[i].setTextAlignment("left");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) >= 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TXT_HUD_Moedas"), gdjs.FasesCode.GDTXT_9595HUD_9595MoedasObjects1);
{for(var i = 0, len = gdjs.FasesCode.GDTXT_9595HUD_9595MoedasObjects1.length ;i < len;++i) {
    gdjs.FasesCode.GDTXT_9595HUD_9595MoedasObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
}{for(var i = 0, len = gdjs.FasesCode.GDTXT_9595HUD_9595MoedasObjects1.length ;i < len;++i) {
    gdjs.FasesCode.GDTXT_9595HUD_9595MoedasObjects1[i].setTextAlignment("right");
}
}}

}


};gdjs.FasesCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) <= 10;
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 10;
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 100;
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 1000;
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


};gdjs.FasesCode.mapOfGDgdjs_9546FasesCode_9546GDOBJ_95959595FasesObjects3Objects = Hashtable.newFrom({"OBJ_Fases": gdjs.FasesCode.GDOBJ_9595FasesObjects3});
gdjs.FasesCode.mapOfGDgdjs_9546FasesCode_9546GDTXT_95959595FasesObjects3Objects = Hashtable.newFrom({"TXT_Fases": gdjs.FasesCode.GDTXT_9595FasesObjects3});
gdjs.FasesCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("OBJ_Fases"), gdjs.FasesCode.GDOBJ_9595FasesObjects3);
gdjs.copyArray(gdjs.FasesCode.GDTXT_9595FasesObjects2, gdjs.FasesCode.GDTXT_9595FasesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FasesCode.GDOBJ_9595FasesObjects3.length;i<l;++i) {
    if ( gdjs.FasesCode.GDOBJ_9595FasesObjects3[i].getVariableNumber(gdjs.FasesCode.GDOBJ_9595FasesObjects3[i].getVariables().getFromIndex(0)) == ((gdjs.FasesCode.GDTXT_9595FasesObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.FasesCode.GDTXT_9595FasesObjects3[0].getVariables()).getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.FasesCode.GDOBJ_9595FasesObjects3[k] = gdjs.FasesCode.GDOBJ_9595FasesObjects3[i];
        ++k;
    }
}
gdjs.FasesCode.GDOBJ_9595FasesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FasesCode.mapOfGDgdjs_9546FasesCode_9546GDOBJ_95959595FasesObjects3Objects, gdjs.FasesCode.mapOfGDgdjs_9546FasesCode_9546GDTXT_95959595FasesObjects3Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.FasesCode.GDOBJ_9595FasesObjects3 */
/* Reuse gdjs.FasesCode.GDTXT_9595FasesObjects3 */
{for(var i = 0, len = gdjs.FasesCode.GDTXT_9595FasesObjects3.length ;i < len;++i) {
    gdjs.FasesCode.GDTXT_9595FasesObjects3[i].getBehavior("Text").setText(((gdjs.FasesCode.GDOBJ_9595FasesObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.FasesCode.GDOBJ_9595FasesObjects3[0].getVariables()).getFromIndex(0).getAsString());
}
}}

}


};gdjs.FasesCode.mapOfGDgdjs_9546FasesCode_9546GDOBJ_95959595FasesObjects1Objects = Hashtable.newFrom({"OBJ_Fases": gdjs.FasesCode.GDOBJ_9595FasesObjects1});
gdjs.FasesCode.mapOfGDgdjs_9546FasesCode_9546GDA_95959595joystickObjects2Objects = Hashtable.newFrom({"A_joystick": gdjs.FasesCode.GDA_9595joystickObjects2});
gdjs.FasesCode.mapOfGDgdjs_9546FasesCode_9546GDOBJ_95959595FasesObjects2Objects = Hashtable.newFrom({"OBJ_Fases": gdjs.FasesCode.GDOBJ_9595FasesObjects2});
gdjs.FasesCode.mapOfGDgdjs_9546FasesCode_9546GDOBJ_95959595FasesObjects2Objects = Hashtable.newFrom({"OBJ_Fases": gdjs.FasesCode.GDOBJ_9595FasesObjects2});
gdjs.FasesCode.mapOfGDgdjs_9546FasesCode_9546GDTXT_95959595FasesObjects1Objects = Hashtable.newFrom({"TXT_Fases": gdjs.FasesCode.GDTXT_9595FasesObjects1});
gdjs.FasesCode.mapOfGDgdjs_9546FasesCode_9546GDOBJ_95959595FasesObjects1Objects = Hashtable.newFrom({"OBJ_Fases": gdjs.FasesCode.GDOBJ_9595FasesObjects1});
gdjs.FasesCode.mapOfGDgdjs_9546FasesCode_9546GDTXT_95959595FasesObjects1Objects = Hashtable.newFrom({"TXT_Fases": gdjs.FasesCode.GDTXT_9595FasesObjects1});
gdjs.FasesCode.mapOfGDgdjs_9546FasesCode_9546GDOBJ_95959595FasesObjects1Objects = Hashtable.newFrom({"OBJ_Fases": gdjs.FasesCode.GDOBJ_9595FasesObjects1});
gdjs.FasesCode.mapOfGDgdjs_9546FasesCode_9546GDA_95959595joystickObjects3Objects = Hashtable.newFrom({"A_joystick": gdjs.FasesCode.GDA_9595joystickObjects3});
gdjs.FasesCode.mapOfGDgdjs_9546FasesCode_9546GDBT_95959595LeaderBoardObjects3Objects = Hashtable.newFrom({"BT_LeaderBoard": gdjs.FasesCode.GDBT_9595LeaderBoardObjects3});
gdjs.FasesCode.mapOfGDgdjs_9546FasesCode_9546GDBT_95959595LeaderBoardObjects3Objects = Hashtable.newFrom({"BT_LeaderBoard": gdjs.FasesCode.GDBT_9595LeaderBoardObjects3});
gdjs.FasesCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "LeaderboardSave", 5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) != "";
}
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "942e6d4e-849c-4d7b-b7a1-578d7c595628", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(3)));
}}

}


{

gdjs.FasesCode.GDA_9595joystickObjects2.length = 0;

gdjs.FasesCode.GDBT_9595LeaderBoardObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) != "";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.FasesCode.GDA_9595joystickObjects2_1final.length = 0;
gdjs.FasesCode.GDBT_9595LeaderBoardObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("A_joystick"), gdjs.FasesCode.GDA_9595joystickObjects3);
gdjs.copyArray(runtimeScene.getObjects("BT_LeaderBoard"), gdjs.FasesCode.GDBT_9595LeaderBoardObjects3);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FasesCode.mapOfGDgdjs_9546FasesCode_9546GDA_95959595joystickObjects3Objects, gdjs.FasesCode.mapOfGDgdjs_9546FasesCode_9546GDBT_95959595LeaderBoardObjects3Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.FasesCode.GDA_9595joystickObjects3.length; j < jLen ; ++j) {
        if ( gdjs.FasesCode.GDA_9595joystickObjects2_1final.indexOf(gdjs.FasesCode.GDA_9595joystickObjects3[j]) === -1 )
            gdjs.FasesCode.GDA_9595joystickObjects2_1final.push(gdjs.FasesCode.GDA_9595joystickObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.FasesCode.GDBT_9595LeaderBoardObjects3.length; j < jLen ; ++j) {
        if ( gdjs.FasesCode.GDBT_9595LeaderBoardObjects2_1final.indexOf(gdjs.FasesCode.GDBT_9595LeaderBoardObjects3[j]) === -1 )
            gdjs.FasesCode.GDBT_9595LeaderBoardObjects2_1final.push(gdjs.FasesCode.GDBT_9595LeaderBoardObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("BT_LeaderBoard"), gdjs.FasesCode.GDBT_9595LeaderBoardObjects3);
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.FasesCode.mapOfGDgdjs_9546FasesCode_9546GDBT_95959595LeaderBoardObjects3Objects, runtimeScene, true, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.FasesCode.GDBT_9595LeaderBoardObjects3.length; j < jLen ; ++j) {
        if ( gdjs.FasesCode.GDBT_9595LeaderBoardObjects2_1final.indexOf(gdjs.FasesCode.GDBT_9595LeaderBoardObjects3[j]) === -1 )
            gdjs.FasesCode.GDBT_9595LeaderBoardObjects2_1final.push(gdjs.FasesCode.GDBT_9595LeaderBoardObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.FasesCode.GDA_9595joystickObjects2_1final, gdjs.FasesCode.GDA_9595joystickObjects2);
gdjs.copyArray(gdjs.FasesCode.GDBT_9595LeaderBoardObjects2_1final, gdjs.FasesCode.GDBT_9595LeaderBoardObjects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 1, "Cross", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "942e6d4e-849c-4d7b-b7a1-578d7c595628", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(3)));
}{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "942e6d4e-849c-4d7b-b7a1-578d7c595628", true);
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasPlayerJustClosedLeaderboardView();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 1, "Circle", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.isLeaderboardViewLoaded();
}
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.closeLeaderboardView(runtimeScene);
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}}

}


};gdjs.FasesCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("A_joystick"), gdjs.FasesCode.GDA_9595joystickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FasesCode.GDA_9595joystickObjects2.length;i<l;++i) {
    if ( !(gdjs.FasesCode.GDA_9595joystickObjects2[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.FasesCode.GDA_9595joystickObjects2[k] = gdjs.FasesCode.GDA_9595joystickObjects2[i];
        ++k;
    }
}
gdjs.FasesCode.GDA_9595joystickObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.FasesCode.GDA_9595joystickObjects2 */
{for(var i = 0, len = gdjs.FasesCode.GDA_9595joystickObjects2.length ;i < len;++i) {
    gdjs.FasesCode.GDA_9595joystickObjects2[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "Controle", 5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("A_joystick"), gdjs.FasesCode.GDA_9595joystickObjects2);
{for(var i = 0, len = gdjs.FasesCode.GDA_9595joystickObjects2.length ;i < len;++i) {
    gdjs.FasesCode.GDA_9595joystickObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("A_joystick"), gdjs.FasesCode.GDA_9595joystickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "Controle2", 5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FasesCode.GDA_9595joystickObjects2.length;i<l;++i) {
    if ( gdjs.FasesCode.GDA_9595joystickObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.FasesCode.GDA_9595joystickObjects2[k] = gdjs.FasesCode.GDA_9595joystickObjects2[i];
        ++k;
    }
}
gdjs.FasesCode.GDA_9595joystickObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.FasesCode.GDA_9595joystickObjects2 */
{for(var i = 0, len = gdjs.FasesCode.GDA_9595joystickObjects2.length ;i < len;++i) {
    gdjs.FasesCode.GDA_9595joystickObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("A_joystick"), gdjs.FasesCode.GDA_9595joystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FasesCode.GDA_9595joystickObjects1.length;i<l;++i) {
    if ( !(gdjs.FasesCode.GDA_9595joystickObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.FasesCode.GDA_9595joystickObjects1[k] = gdjs.FasesCode.GDA_9595joystickObjects1[i];
        ++k;
    }
}
gdjs.FasesCode.GDA_9595joystickObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.func(runtimeScene, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
/* Reuse gdjs.FasesCode.GDA_9595joystickObjects1 */
{for(var i = 0, len = gdjs.FasesCode.GDA_9595joystickObjects1.length ;i < len;++i) {
    gdjs.FasesCode.GDA_9595joystickObjects1[i].hide(false);
}
}}

}


};gdjs.FasesCode.eventsList14 = function(runtimeScene) {

{



}


{


gdjs.FasesCode.eventsList0(runtimeScene);
}


{


gdjs.FasesCode.eventsList1(runtimeScene);
}


{


gdjs.FasesCode.eventsList3(runtimeScene);
}


{


gdjs.FasesCode.eventsList4(runtimeScene);
}


{


gdjs.FasesCode.eventsList8(runtimeScene);
}


{


gdjs.FasesCode.eventsList9(runtimeScene);
}


{


gdjs.FasesCode.eventsList10(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("TXT_Fases"), gdjs.FasesCode.GDTXT_9595FasesObjects1);

for (gdjs.FasesCode.forEachIndex2 = 0;gdjs.FasesCode.forEachIndex2 < gdjs.FasesCode.GDTXT_9595FasesObjects1.length;++gdjs.FasesCode.forEachIndex2) {
gdjs.FasesCode.GDTXT_9595FasesObjects2.length = 0;


gdjs.FasesCode.forEachTemporary2 = gdjs.FasesCode.GDTXT_9595FasesObjects1[gdjs.FasesCode.forEachIndex2];
gdjs.FasesCode.GDTXT_9595FasesObjects2.push(gdjs.FasesCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.FasesCode.eventsList11(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OBJ_Fases"), gdjs.FasesCode.GDOBJ_9595FasesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.FasesCode.mapOfGDgdjs_9546FasesCode_9546GDOBJ_95959595FasesObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FasesCode.GDOBJ_9595FasesObjects1.length;i<l;++i) {
    if ( gdjs.FasesCode.GDOBJ_9595FasesObjects1[i].getVariableNumber(gdjs.FasesCode.GDOBJ_9595FasesObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.FasesCode.GDOBJ_9595FasesObjects1[k] = gdjs.FasesCode.GDOBJ_9595FasesObjects1[i];
        ++k;
    }
}
gdjs.FasesCode.GDOBJ_9595FasesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == 0;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.FasesCode.GDOBJ_9595FasesObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "toc.mp3", false, 75, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cena sem título", false);
}{runtimeScene.getGame().getVariables().getFromIndex(9).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(((gdjs.FasesCode.GDOBJ_9595FasesObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.FasesCode.GDOBJ_9595FasesObjects1[0].getVariables()).getFromIndex(3).getAsNumber());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OBJ_Fases"), gdjs.FasesCode.GDOBJ_9595FasesObjects1);
gdjs.FasesCode.GDA_9595joystickObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FasesCode.GDOBJ_9595FasesObjects1.length;i<l;++i) {
    if ( gdjs.FasesCode.GDOBJ_9595FasesObjects1[i].getVariableNumber(gdjs.FasesCode.GDOBJ_9595FasesObjects1[i].getVariables().getFromIndex(0)) == runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.FasesCode.GDOBJ_9595FasesObjects1[k] = gdjs.FasesCode.GDOBJ_9595FasesObjects1[i];
        ++k;
    }
}
gdjs.FasesCode.GDOBJ_9595FasesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.FasesCode.GDA_9595joystickObjects1_1final.length = 0;
gdjs.FasesCode.GDOBJ_9595FasesObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("A_joystick"), gdjs.FasesCode.GDA_9595joystickObjects2);
gdjs.copyArray(gdjs.FasesCode.GDOBJ_9595FasesObjects1, gdjs.FasesCode.GDOBJ_9595FasesObjects2);

isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FasesCode.mapOfGDgdjs_9546FasesCode_9546GDA_95959595joystickObjects2Objects, gdjs.FasesCode.mapOfGDgdjs_9546FasesCode_9546GDOBJ_95959595FasesObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.FasesCode.GDA_9595joystickObjects2.length; j < jLen ; ++j) {
        if ( gdjs.FasesCode.GDA_9595joystickObjects1_1final.indexOf(gdjs.FasesCode.GDA_9595joystickObjects2[j]) === -1 )
            gdjs.FasesCode.GDA_9595joystickObjects1_1final.push(gdjs.FasesCode.GDA_9595joystickObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.FasesCode.GDOBJ_9595FasesObjects2.length; j < jLen ; ++j) {
        if ( gdjs.FasesCode.GDOBJ_9595FasesObjects1_1final.indexOf(gdjs.FasesCode.GDOBJ_9595FasesObjects2[j]) === -1 )
            gdjs.FasesCode.GDOBJ_9595FasesObjects1_1final.push(gdjs.FasesCode.GDOBJ_9595FasesObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.FasesCode.GDOBJ_9595FasesObjects1, gdjs.FasesCode.GDOBJ_9595FasesObjects2);

isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.FasesCode.mapOfGDgdjs_9546FasesCode_9546GDOBJ_95959595FasesObjects2Objects, runtimeScene, true, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.FasesCode.GDOBJ_9595FasesObjects2.length; j < jLen ; ++j) {
        if ( gdjs.FasesCode.GDOBJ_9595FasesObjects1_1final.indexOf(gdjs.FasesCode.GDOBJ_9595FasesObjects2[j]) === -1 )
            gdjs.FasesCode.GDOBJ_9595FasesObjects1_1final.push(gdjs.FasesCode.GDOBJ_9595FasesObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.FasesCode.GDA_9595joystickObjects1_1final, gdjs.FasesCode.GDA_9595joystickObjects1);
gdjs.copyArray(gdjs.FasesCode.GDOBJ_9595FasesObjects1_1final, gdjs.FasesCode.GDOBJ_9595FasesObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 1, "Cross", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.FasesCode.GDOBJ_9595FasesObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber() + 1);
}{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(((gdjs.FasesCode.GDOBJ_9595FasesObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.FasesCode.GDOBJ_9595FasesObjects1[0].getVariables()).getFromIndex(3).getAsNumber());
}{gdjs.evtTools.sound.playSound(runtimeScene, "toc.mp3", false, 75, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cena sem título", false);
}{runtimeScene.getGame().getVariables().getFromIndex(9).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OBJ_Fases"), gdjs.FasesCode.GDOBJ_9595FasesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FasesCode.GDOBJ_9595FasesObjects1.length;i<l;++i) {
    if ( gdjs.FasesCode.GDOBJ_9595FasesObjects1[i].getVariableNumber(gdjs.FasesCode.GDOBJ_9595FasesObjects1[i].getVariables().getFromIndex(0)) <= runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.FasesCode.GDOBJ_9595FasesObjects1[k] = gdjs.FasesCode.GDOBJ_9595FasesObjects1[i];
        ++k;
    }
}
gdjs.FasesCode.GDOBJ_9595FasesObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FasesCode.GDOBJ_9595FasesObjects1 */
{for(var i = 0, len = gdjs.FasesCode.GDOBJ_9595FasesObjects1.length ;i < len;++i) {
    gdjs.FasesCode.GDOBJ_9595FasesObjects1[i].returnVariable(gdjs.FasesCode.GDOBJ_9595FasesObjects1[i].getVariables().getFromIndex(2)).setBoolean(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OBJ_Fases"), gdjs.FasesCode.GDOBJ_9595FasesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FasesCode.GDOBJ_9595FasesObjects1.length;i<l;++i) {
    if ( !(gdjs.FasesCode.GDOBJ_9595FasesObjects1[i].getVariableNumber(gdjs.FasesCode.GDOBJ_9595FasesObjects1[i].getVariables().getFromIndex(0)) == runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber() + 1) ) {
        isConditionTrue_0 = true;
        gdjs.FasesCode.GDOBJ_9595FasesObjects1[k] = gdjs.FasesCode.GDOBJ_9595FasesObjects1[i];
        ++k;
    }
}
gdjs.FasesCode.GDOBJ_9595FasesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FasesCode.GDOBJ_9595FasesObjects1.length;i<l;++i) {
    if ( gdjs.FasesCode.GDOBJ_9595FasesObjects1[i].getVariableBoolean(gdjs.FasesCode.GDOBJ_9595FasesObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.FasesCode.GDOBJ_9595FasesObjects1[k] = gdjs.FasesCode.GDOBJ_9595FasesObjects1[i];
        ++k;
    }
}
gdjs.FasesCode.GDOBJ_9595FasesObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.FasesCode.GDOBJ_9595FasesObjects1 */
{for(var i = 0, len = gdjs.FasesCode.GDOBJ_9595FasesObjects1.length ;i < len;++i) {
    gdjs.FasesCode.GDOBJ_9595FasesObjects1[i].setAnimationFrame(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OBJ_Fases"), gdjs.FasesCode.GDOBJ_9595FasesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FasesCode.GDOBJ_9595FasesObjects1.length;i<l;++i) {
    if ( gdjs.FasesCode.GDOBJ_9595FasesObjects1[i].getVariableBoolean(gdjs.FasesCode.GDOBJ_9595FasesObjects1[i].getVariables().getFromIndex(2), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.FasesCode.GDOBJ_9595FasesObjects1[k] = gdjs.FasesCode.GDOBJ_9595FasesObjects1[i];
        ++k;
    }
}
gdjs.FasesCode.GDOBJ_9595FasesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FasesCode.GDOBJ_9595FasesObjects1.length;i<l;++i) {
    if ( !(gdjs.FasesCode.GDOBJ_9595FasesObjects1[i].getVariableNumber(gdjs.FasesCode.GDOBJ_9595FasesObjects1[i].getVariables().getFromIndex(0)) == runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber() + 1) ) {
        isConditionTrue_0 = true;
        gdjs.FasesCode.GDOBJ_9595FasesObjects1[k] = gdjs.FasesCode.GDOBJ_9595FasesObjects1[i];
        ++k;
    }
}
gdjs.FasesCode.GDOBJ_9595FasesObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.FasesCode.GDOBJ_9595FasesObjects1 */
{for(var i = 0, len = gdjs.FasesCode.GDOBJ_9595FasesObjects1.length ;i < len;++i) {
    gdjs.FasesCode.GDOBJ_9595FasesObjects1[i].setAnimationFrame(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OBJ_Fases"), gdjs.FasesCode.GDOBJ_9595FasesObjects1);
gdjs.copyArray(runtimeScene.getObjects("TXT_Fases"), gdjs.FasesCode.GDTXT_9595FasesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FasesCode.GDOBJ_9595FasesObjects1.length;i<l;++i) {
    if ( gdjs.FasesCode.GDOBJ_9595FasesObjects1[i].getAnimationFrame() == 2 ) {
        isConditionTrue_0 = true;
        gdjs.FasesCode.GDOBJ_9595FasesObjects1[k] = gdjs.FasesCode.GDOBJ_9595FasesObjects1[i];
        ++k;
    }
}
gdjs.FasesCode.GDOBJ_9595FasesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FasesCode.mapOfGDgdjs_9546FasesCode_9546GDTXT_95959595FasesObjects1Objects, gdjs.FasesCode.mapOfGDgdjs_9546FasesCode_9546GDOBJ_95959595FasesObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.FasesCode.GDTXT_9595FasesObjects1 */
{for(var i = 0, len = gdjs.FasesCode.GDTXT_9595FasesObjects1.length ;i < len;++i) {
    gdjs.FasesCode.GDTXT_9595FasesObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OBJ_Fases"), gdjs.FasesCode.GDOBJ_9595FasesObjects1);
gdjs.copyArray(runtimeScene.getObjects("TXT_Fases"), gdjs.FasesCode.GDTXT_9595FasesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FasesCode.GDOBJ_9595FasesObjects1.length;i<l;++i) {
    if ( gdjs.FasesCode.GDOBJ_9595FasesObjects1[i].getAnimationFrame() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.FasesCode.GDOBJ_9595FasesObjects1[k] = gdjs.FasesCode.GDOBJ_9595FasesObjects1[i];
        ++k;
    }
}
gdjs.FasesCode.GDOBJ_9595FasesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FasesCode.mapOfGDgdjs_9546FasesCode_9546GDTXT_95959595FasesObjects1Objects, gdjs.FasesCode.mapOfGDgdjs_9546FasesCode_9546GDOBJ_95959595FasesObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.FasesCode.GDTXT_9595FasesObjects1 */
{for(var i = 0, len = gdjs.FasesCode.GDTXT_9595FasesObjects1.length ;i < len;++i) {
    gdjs.FasesCode.GDTXT_9595FasesObjects1[i].hide();
}
}}

}


{


gdjs.FasesCode.eventsList12(runtimeScene);
}


{


gdjs.FasesCode.eventsList13(runtimeScene);
}


};

gdjs.FasesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FasesCode.GDBGObjects1.length = 0;
gdjs.FasesCode.GDBGObjects2.length = 0;
gdjs.FasesCode.GDBGObjects3.length = 0;
gdjs.FasesCode.GDBGObjects4.length = 0;
gdjs.FasesCode.GDBT_9595OkObjects1.length = 0;
gdjs.FasesCode.GDBT_9595OkObjects2.length = 0;
gdjs.FasesCode.GDBT_9595OkObjects3.length = 0;
gdjs.FasesCode.GDBT_9595OkObjects4.length = 0;
gdjs.FasesCode.GDBG_9595AguaparadaObjects1.length = 0;
gdjs.FasesCode.GDBG_9595AguaparadaObjects2.length = 0;
gdjs.FasesCode.GDBG_9595AguaparadaObjects3.length = 0;
gdjs.FasesCode.GDBG_9595AguaparadaObjects4.length = 0;
gdjs.FasesCode.GDOBJ_9595FasesObjects1.length = 0;
gdjs.FasesCode.GDOBJ_9595FasesObjects2.length = 0;
gdjs.FasesCode.GDOBJ_9595FasesObjects3.length = 0;
gdjs.FasesCode.GDOBJ_9595FasesObjects4.length = 0;
gdjs.FasesCode.GDTXT_9595FasesObjects1.length = 0;
gdjs.FasesCode.GDTXT_9595FasesObjects2.length = 0;
gdjs.FasesCode.GDTXT_9595FasesObjects3.length = 0;
gdjs.FasesCode.GDTXT_9595FasesObjects4.length = 0;
gdjs.FasesCode.GDHUD_9595MoedaObjects1.length = 0;
gdjs.FasesCode.GDHUD_9595MoedaObjects2.length = 0;
gdjs.FasesCode.GDHUD_9595MoedaObjects3.length = 0;
gdjs.FasesCode.GDHUD_9595MoedaObjects4.length = 0;
gdjs.FasesCode.GDTXT_9595HUD_9595MoedasObjects1.length = 0;
gdjs.FasesCode.GDTXT_9595HUD_9595MoedasObjects2.length = 0;
gdjs.FasesCode.GDTXT_9595HUD_9595MoedasObjects3.length = 0;
gdjs.FasesCode.GDTXT_9595HUD_9595MoedasObjects4.length = 0;
gdjs.FasesCode.GDBT_9595LeaderBoardObjects1.length = 0;
gdjs.FasesCode.GDBT_9595LeaderBoardObjects2.length = 0;
gdjs.FasesCode.GDBT_9595LeaderBoardObjects3.length = 0;
gdjs.FasesCode.GDBT_9595LeaderBoardObjects4.length = 0;
gdjs.FasesCode.GDA_9595joystickObjects1.length = 0;
gdjs.FasesCode.GDA_9595joystickObjects2.length = 0;
gdjs.FasesCode.GDA_9595joystickObjects3.length = 0;
gdjs.FasesCode.GDA_9595joystickObjects4.length = 0;

gdjs.FasesCode.eventsList14(runtimeScene);

return;

}

gdjs['FasesCode'] = gdjs.FasesCode;
