gdjs.RegistroCode = {};
gdjs.RegistroCode.localVariables = [];
gdjs.RegistroCode.GDINP_9595NomeObjects1_1final = [];

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
gdjs.RegistroCode.GDOBJ_9595FasesObjects1= [];
gdjs.RegistroCode.GDOBJ_9595FasesObjects2= [];
gdjs.RegistroCode.GDTXT_9595FasesObjects1= [];
gdjs.RegistroCode.GDTXT_9595FasesObjects2= [];
gdjs.RegistroCode.GDHUD_9595MoedaObjects1= [];
gdjs.RegistroCode.GDHUD_9595MoedaObjects2= [];
gdjs.RegistroCode.GDTXT_9595HUD_9595MoedasObjects1= [];
gdjs.RegistroCode.GDTXT_9595HUD_9595MoedasObjects2= [];
gdjs.RegistroCode.GDBT_9595LeaderBoardObjects1= [];
gdjs.RegistroCode.GDBT_9595LeaderBoardObjects2= [];
gdjs.RegistroCode.GDA_9595joystickObjects1= [];
gdjs.RegistroCode.GDA_9595joystickObjects2= [];


gdjs.RegistroCode.mapOfGDgdjs_9546RegistroCode_9546GDBT_95959595OkObjects1Objects = Hashtable.newFrom({"BT_Ok": gdjs.RegistroCode.GDBT_9595OkObjects1});
gdjs.RegistroCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BT_Ok"), gdjs.RegistroCode.GDBT_9595OkObjects1);
gdjs.copyArray(runtimeScene.getObjects("INP_Nome"), gdjs.RegistroCode.GDINP_9595NomeObjects1);

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
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.RegistroCode.mapOfGDgdjs_9546RegistroCode_9546GDBT_95959595OkObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.RegistroCode.GDINP_9595NomeObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(3).setString((( gdjs.RegistroCode.GDINP_9595NomeObjects1.length === 0 ) ? "" :gdjs.RegistroCode.GDINP_9595NomeObjects1[0].getBehavior("Text").getText()));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fases", false);
}}

}


{

gdjs.RegistroCode.GDINP_9595NomeObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.RegistroCode.GDINP_9595NomeObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("INP_Nome"), gdjs.RegistroCode.GDINP_9595NomeObjects2);
for (var i = 0, k = 0, l = gdjs.RegistroCode.GDINP_9595NomeObjects2.length;i<l;++i) {
    if ( (gdjs.RegistroCode.GDINP_9595NomeObjects2[i].getBehavior("Text").getText()).includes(" ") ) {
        isConditionTrue_1 = true;
        gdjs.RegistroCode.GDINP_9595NomeObjects2[k] = gdjs.RegistroCode.GDINP_9595NomeObjects2[i];
        ++k;
    }
}
gdjs.RegistroCode.GDINP_9595NomeObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.RegistroCode.GDINP_9595NomeObjects2.length; j < jLen ; ++j) {
        if ( gdjs.RegistroCode.GDINP_9595NomeObjects1_1final.indexOf(gdjs.RegistroCode.GDINP_9595NomeObjects2[j]) === -1 )
            gdjs.RegistroCode.GDINP_9595NomeObjects1_1final.push(gdjs.RegistroCode.GDINP_9595NomeObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("INP_Nome"), gdjs.RegistroCode.GDINP_9595NomeObjects2);
for (var i = 0, k = 0, l = gdjs.RegistroCode.GDINP_9595NomeObjects2.length;i<l;++i) {
    if ( gdjs.RegistroCode.GDINP_9595NomeObjects2[i].getBehavior("Text").getText() == "" ) {
        isConditionTrue_1 = true;
        gdjs.RegistroCode.GDINP_9595NomeObjects2[k] = gdjs.RegistroCode.GDINP_9595NomeObjects2[i];
        ++k;
    }
}
gdjs.RegistroCode.GDINP_9595NomeObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.RegistroCode.GDINP_9595NomeObjects2.length; j < jLen ; ++j) {
        if ( gdjs.RegistroCode.GDINP_9595NomeObjects1_1final.indexOf(gdjs.RegistroCode.GDINP_9595NomeObjects2[j]) === -1 )
            gdjs.RegistroCode.GDINP_9595NomeObjects1_1final.push(gdjs.RegistroCode.GDINP_9595NomeObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.RegistroCode.GDINP_9595NomeObjects1_1final, gdjs.RegistroCode.GDINP_9595NomeObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BT_Ok"), gdjs.RegistroCode.GDBT_9595OkObjects1);
{for(var i = 0, len = gdjs.RegistroCode.GDBT_9595OkObjects1.length ;i < len;++i) {
    gdjs.RegistroCode.GDBT_9595OkObjects1[i].setAnimationFrame(1);
}
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
gdjs.RegistroCode.GDOBJ_9595FasesObjects1.length = 0;
gdjs.RegistroCode.GDOBJ_9595FasesObjects2.length = 0;
gdjs.RegistroCode.GDTXT_9595FasesObjects1.length = 0;
gdjs.RegistroCode.GDTXT_9595FasesObjects2.length = 0;
gdjs.RegistroCode.GDHUD_9595MoedaObjects1.length = 0;
gdjs.RegistroCode.GDHUD_9595MoedaObjects2.length = 0;
gdjs.RegistroCode.GDTXT_9595HUD_9595MoedasObjects1.length = 0;
gdjs.RegistroCode.GDTXT_9595HUD_9595MoedasObjects2.length = 0;
gdjs.RegistroCode.GDBT_9595LeaderBoardObjects1.length = 0;
gdjs.RegistroCode.GDBT_9595LeaderBoardObjects2.length = 0;
gdjs.RegistroCode.GDA_9595joystickObjects1.length = 0;
gdjs.RegistroCode.GDA_9595joystickObjects2.length = 0;

gdjs.RegistroCode.eventsList0(runtimeScene);

return;

}

gdjs['RegistroCode'] = gdjs.RegistroCode;
