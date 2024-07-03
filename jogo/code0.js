gdjs.InicioCode = {};
gdjs.InicioCode.localVariables = [];
gdjs.InicioCode.GDTXT_95952Objects1= [];
gdjs.InicioCode.GDTXT_95952Objects2= [];
gdjs.InicioCode.GDTXT_95951Objects1= [];
gdjs.InicioCode.GDTXT_95951Objects2= [];
gdjs.InicioCode.GDBT_9595OkObjects1= [];
gdjs.InicioCode.GDBT_9595OkObjects2= [];
gdjs.InicioCode.GDBG_9595AguaparadaObjects1= [];
gdjs.InicioCode.GDBG_9595AguaparadaObjects2= [];


gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDBT_95959595OkObjects1Objects = Hashtable.newFrom({"BT_Ok": gdjs.InicioCode.GDBT_9595OkObjects1});
gdjs.InicioCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BT_Ok"), gdjs.InicioCode.GDBT_9595OkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDBT_95959595OkObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Registro", false);
}}

}


};

gdjs.InicioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InicioCode.GDTXT_95952Objects1.length = 0;
gdjs.InicioCode.GDTXT_95952Objects2.length = 0;
gdjs.InicioCode.GDTXT_95951Objects1.length = 0;
gdjs.InicioCode.GDTXT_95951Objects2.length = 0;
gdjs.InicioCode.GDBT_9595OkObjects1.length = 0;
gdjs.InicioCode.GDBT_9595OkObjects2.length = 0;
gdjs.InicioCode.GDBG_9595AguaparadaObjects1.length = 0;
gdjs.InicioCode.GDBG_9595AguaparadaObjects2.length = 0;

gdjs.InicioCode.eventsList0(runtimeScene);

return;

}

gdjs['InicioCode'] = gdjs.InicioCode;
