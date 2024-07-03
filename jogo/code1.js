gdjs.RegistroCode = {};
gdjs.RegistroCode.localVariables = [];
gdjs.RegistroCode.GDINP_9595NomeObjects1= [];
gdjs.RegistroCode.GDINP_9595NomeObjects2= [];
gdjs.RegistroCode.GDNewSpriteObjects1= [];
gdjs.RegistroCode.GDNewSpriteObjects2= [];
gdjs.RegistroCode.GDTXTObjects1= [];
gdjs.RegistroCode.GDTXTObjects2= [];
gdjs.RegistroCode.GDBT_9595OkObjects1= [];
gdjs.RegistroCode.GDBT_9595OkObjects2= [];
gdjs.RegistroCode.GDBG_9595AguaparadaObjects1= [];
gdjs.RegistroCode.GDBG_9595AguaparadaObjects2= [];


gdjs.RegistroCode.mapOfGDgdjs_9546RegistroCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.RegistroCode.GDNewSpriteObjects1});
gdjs.RegistroCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("INP_Nome"), gdjs.RegistroCode.GDINP_9595NomeObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.RegistroCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RegistroCode.GDINP_9595NomeObjects1.length;i<l;++i) {
    if ( gdjs.RegistroCode.GDINP_9595NomeObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.RegistroCode.GDINP_9595NomeObjects1[k] = gdjs.RegistroCode.GDINP_9595NomeObjects1[i];
        ++k;
    }
}
gdjs.RegistroCode.GDINP_9595NomeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RegistroCode.GDINP_9595NomeObjects1.length;i<l;++i) {
    if ( !((gdjs.RegistroCode.GDINP_9595NomeObjects1[i].getBehavior("Text").getText()).includes(" ")) ) {
        isConditionTrue_0 = true;
        gdjs.RegistroCode.GDINP_9595NomeObjects1[k] = gdjs.RegistroCode.GDINP_9595NomeObjects1[i];
        ++k;
    }
}
gdjs.RegistroCode.GDINP_9595NomeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.RegistroCode.mapOfGDgdjs_9546RegistroCode_9546GDNewSpriteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.RegistroCode.GDINP_9595NomeObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(3).setString((( gdjs.RegistroCode.GDINP_9595NomeObjects1.length === 0 ) ? "" :gdjs.RegistroCode.GDINP_9595NomeObjects1[0].getBehavior("Text").getText()));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cena sem título", false);
}}

}


};

gdjs.RegistroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RegistroCode.GDINP_9595NomeObjects1.length = 0;
gdjs.RegistroCode.GDINP_9595NomeObjects2.length = 0;
gdjs.RegistroCode.GDNewSpriteObjects1.length = 0;
gdjs.RegistroCode.GDNewSpriteObjects2.length = 0;
gdjs.RegistroCode.GDTXTObjects1.length = 0;
gdjs.RegistroCode.GDTXTObjects2.length = 0;
gdjs.RegistroCode.GDBT_9595OkObjects1.length = 0;
gdjs.RegistroCode.GDBT_9595OkObjects2.length = 0;
gdjs.RegistroCode.GDBG_9595AguaparadaObjects1.length = 0;
gdjs.RegistroCode.GDBG_9595AguaparadaObjects2.length = 0;

gdjs.RegistroCode.eventsList0(runtimeScene);

return;

}

gdjs['RegistroCode'] = gdjs.RegistroCode;
