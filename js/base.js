﻿"use strict";//只有在严格模式下才能使用es6的一些语法
//localStorage只能存储字符串，如果需要存储对象，首先要转化为字符串。利用JSON.stringify()；
var storage = window.localStorage;
if (!storage) {
    alert("请使用支持html5的浏览器!");
}
//IOS safari浏览器无痕模式下localStorage不起作用，我们需要做判断，存在问题则提示
if (typeof storage === 'object') {
    try {
        storage.removeItem('localStorage');
        storage.setItem('localStorage', 1);
        storage.removeItem('localStorage');
    } catch (e) {
        alert('Your web browser does not support storing settings locally. In Safari, the most common cause of this is using "Private Browsing Mode". Some settings may not save or some features may not work properly for you.');
    }
}

//查询
$("txtWord").oninput = function () {
    search();
}
$("btnSearch").onclick = function () {
    search();
}

//显示查询结果
function showResult() {
    showDiv("divResult");
}
//隐藏查询结果
function hidResult() {
    hideDiv("divResult");
}
//查询
function search() {
    //清空从者数据数组
    servants.length = 0;
    //重置计数器
    id = 0;

    //重新初始化从者数据数组
    intialData();


    //过滤关键词特殊字符
    word = filterStr2($("txtWord").value);

    //根据关键词查询匹配结果
    if(word[0]=="$"){
        word=word.substr(1);
        servants = servants.filter(containsAttribute);
    }
    else if(word[0]=="@"){
        word=word.substr(1);
        servants = servants.filter(containsCamp);    
    }
    
    
    //更新数组序号
    let tmpServants = [];
    for (let i = 0; i < servants.length; i++) {
        tmpServants[servants[i].id] = servants[i];
    }
    servants = tmpServants;

    $("ddlChooseServant").length = 0;
    if (word == "") {
        $("ddlChooseServant").options.add(new Option("|----------------------请选择从者-------------------------|", -1));
    }
    intialServantList();
    $("ddlChooseServant").onchange();
}

//点击阵营、属性和特性超链接字体
function autoClickSearch(obj){
    if(confirm(`你确定要搜索关键词【${obj.dataset.value}】?`)){
        $("txtWord").value=obj.dataset.value;
        $("btnSearch").click();        
    }
}

//根据关键词查询结果
var word = "";
function containsAttribute(servant) {
    return servant.attributes.find(check);
}
function containsCamp(servant){
    return servant.camp==word;
}

function check(key) {
    if (word == "") {
        return true;
    }
    return new RegExp(word, "gi").test(key);//忽略大小写
    //return key.indexOf(word) != -1;
}

//设置本地存储信息
function setStorage() {
    if (storage) {
        //另外，在iPhone/iPad上有时设置setItem()时会出现诡异的QUOTA_EXCEEDED_ERR错误，这时一般在setItem之前，先removeItem()就ok了。
        storage.removeItem("ddlChooseServant");
        storage.setItem("ddlChooseServant", $("ddlChooseServant").value);

        //清除缓存
        storage.removeItem("servants");
    }
}
//加载本地存储信息
//360浏览器不支持es6中的函数参数默认值
function loadStorage(isTreasure) {
    $("ckIsMaxGrail").checked=false;
    if (storage) {
        let id = storage.getItem("ddlChooseServant");
        if (id!=null&&id != "" && id != "-1") {
            $("ddlChooseServant").value = id;
            if (isTreasure) {
                changeOc();
            }
            bindServantData(id);
        }
    }
}

//绑定属性和特性值
function binds(servant,key,id,flag){
    let attributes = servant[key].clone();//数组复制，不影响原数组
    if (attributes instanceof Array && attributes.length > 0) {
        for (let i = 0; i < attributes.length; i++) {
            attributes[i]= `<a href=\"javascript:;\" data-value=\"${flag}${attributes[i]}\" onclick=\"autoClickSearch(this)\">${attributes[i]}</a>`;
        }

        attributes = attributes.join("&nbsp;&nbsp;&nbsp;&nbsp;");
        $(id).innerHTML = attributes;
    }
}

//属性
function bindAttributes(servant) {
    binds(servant,"attributes","spanAttributes","$");
}
//加载搜索提示(类似自动完成)
function bindSearchTips(){
    let tips=[],
        tmpCamp,
        tmpAttributes;
//        tmpCharacteristics;
    servants.forEach(function(servant){
        tmpCamp=servant.camp;
        tmpAttributes=servant.attributes.clone();
//        tmpCharacteristics=servant.characteristics.clone();

        tips.push(`@${tmpCamp}`);

        tmpAttributes.forEach(function(a){
            tips.push(`$${a}`);
        });
    })
    //去重
    tips=Array.from(new Set(tips));
    //加载属性和特性的搜索提示(类似自动完成)
    let dlTips=$("dlTips");
    tips.forEach(function(t){
        let opt=document.createElement("option");
        opt.value=t;
        dlTips.appendChild(opt);
    })

    let dlCardTips=$("dlCardTips");
    dlCardTips.innerHTML=`
        <option value="786">20级宝石翁</option>
        <option value="1089">40级宝石翁</option>
	<option value="1392">60级宝石翁</option>
	<option value="1695">80级宝石翁</option>
        <option value="2000">100级宝石翁</option>
        <option value="943">20级黑杯</option>
	<option value="1307">40级黑杯</option>
	<option value="1671">60级黑杯</option>
        <option value="2034">80级黑杯</option>
        <option value="2400">100级黑杯</option>
	<option value="355">15级魔性菩薩</option>
        <option value="393">20级魔性菩薩</option>
        `;
}
(function(){
    let nums=document.querySelectorAll("#txtTreasurePowerBuff,#txtCardBuff,#txtAttackBuff,#txtEnemyDefenceBuff,#txtSpecialAttackPowerBuff,#txtFixedDamageBuff,#txtNpGainBuff");
    nums.forEach(function(n){
        n.onblur=function(){
            //失去焦点后，计算值
            this.value=eval2(this.value);   
        }
    })
})();

