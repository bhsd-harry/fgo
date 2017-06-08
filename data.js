var servants = new Array();
var id = 0;
function intialData() {
    //----------------------------------Saber---------------------------------------------------------------------//
    /******************************************5星********************************************************************/
    intialServant("Saber", "亚瑟・潘德拉贡〔Prototype〕", 12465, 13975, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Saber", "阿尔提拉", 12343, 13907, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Saber", "沖田総司", 12068, 13225, 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Saber", "宫本武藏", 12037, 136355, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Saber", "莫德雷德", 11723, 14680, 400, 500, 550, 575, 600, 180, 190, 200, 210, 220, "TreasureSpecialAttack", 1.5);
    intialServant("Saber", "尼禄・克劳狄乌斯〔花嫁〕", 11607, 14248, 1200, 1500, 1650, 1725, 1800, 0, 0, 0, 0, 0, "", 1);
    intialServant("Saber", "阿尔托莉雅·潘德拉贡", 11221, 15150, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Saber", "两仪式", 10721, 15453, 450, 600, 1650, 1725, 1800, 0, 0, 0, 0, 0, "", 1);

    /******************************************4星********************************************************************/
    intialServant("Saber", "阿尔托莉雅·潘德拉贡〔Alter〕", 10248, 11589, 450, 550, 600, 625, 650, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Saber", "高文", 10173, 11419, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Saber", "兰斯洛特", 9949, 11589, 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1);
    intialServant("Saber", "伊丽莎白・巴陶里〔勇者〕", 9899, 11248, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Saber", "罗摩", 9854, 11993, 600, 800, 900, 950, 1000, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5);
    intialServant("Saber", "铃鹿御前", 9544, 11753, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Saber", "尼禄・克劳狄乌斯", 9449, 11753, 600, 750, 825, 862.5, 900, 0, 0, 0, 0, 0, "", 1);
    intialServant("Saber", "齐格弗里德", 8181, 14165, 400, 500, 550, 575, 600, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5);
    intialServant("Saber", "阿尔托莉雅·潘德拉贡〔Lily〕", 7726, 10623, 300, 450, 525, 562.5, 600, 0, 0, 0, 0, 0, "", 1.5);


    /******************************************3星及以下********************************************************************/
    intialServant("Saber", "贝狄威尔", 7627, 9595, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Saber", "盖乌斯・尤里乌斯・凯撒", 7497, 9595, 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Saber", "弗格斯・马克・罗伊", 7460, 9786, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5);


    //----------------------------------Archer---------------------------------------------------------------------//
    /******************************************5星********************************************************************/
    intialServant("Archer", "阿周那", 12342, 13230, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Archer", "吉尔伽美什", 12280, 13097, 400, 500, 550, 575, 600, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5);
    intialServant("Archer", "伊修塔尔", 12252, 13965, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Archer", "尼古拉・特斯拉", 11781, 13825, 400, 500, 550, 575, 600, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5);
    intialServant("Archer", "詹姆斯·莫里亚蒂", 11781, 13685, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Archer", "阿尔托莉雅・潘德拉贡〔Archer〕", 11276, 14553, 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1);
    intialServant("Archer", "俄里翁", 11107, 14553, 1200, 1500, 1650, 1725, 1800, 0, 0, 0, 0, 0, "", 1);

    /******************************************4星********************************************************************/
    intialServant("Archer", "克洛伊·冯·爱因兹贝伦", 9845, 10914, 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1);
    intialServant("Archer", "特里斯坦", 9735, 11637, 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Archer", "织田信长", 9494, 11637, 300, 400, 450, 475, 500, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5);
    intialServant("Archer", "安妮・伯妮&玛丽・里德", 9446, 11521, 600, 800, 900, 950, 1000, 600, 600, 600, 600, 600, "TreasureSpecialRemainHpAttack", 1.5);
    intialServant("Archer", "卫宫", 9398, 11521, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Archer", "卫宫〔Alter〕", 8996, 12250, 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1);
    intialServant("Archer", "阿塔兰忒", 8633, 12476, 800, 1000, 1100, 1150, 1200, 0, 0, 0, 0, 0, "", 0.8);

    /******************************************3星及以下********************************************************************/
    intialServant("Archer", "大卫", 7736, 8643, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Archer", "幼吉尔", 7696, 8731, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Archer", "尤瑞艾莉", 7032, 9506, 1200, 1200, 1200, 1200, 1200, 250, 250, 250, 250, 250, "TreasureSpecialAttack", 1);
    intialServant("Archer", "俵藤太", 7032, 9800, 300, 400, 450, 475, 500, 50, 62, 75, 87, 100, "TreasureSpecialAttack", 1.5);
    intialServant("Archer", "比利小子", 6890, 9506, 1600, 2000, 2200, 2300, 2400, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Archer", "罗宾汉", 6715, 10187, 900, 1200, 1350, 1425, 1500, 200, 212.5, 225, 237.5, 250, "TreasureSpecialAttack", 1);
    intialServant("Archer", "阿拉什", 5816, 7122, 800, 1000, 1100, 1150, 1200, 0, 200, 400, 600, 800, "TreasureSpecialExplosionAttack", 1.5);

    //----------------------------------Lancer---------------------------------------------------------------------//
    /******************************************5星********************************************************************/
    intialServant("Lancer", "迦尔纳", 11976, 13632, 300, 400, 450, 475, 500, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5);
    intialServant("Lancer", "布伦希尔德", 11432, 14825, 800, 1000, 1100, 1150, 1200, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5);
    intialServant("Lancer", "斯卡哈", 11375, 14825, 1600, 2000, 2200, 2300, 2400, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Lancer", "阿尔托莉雅・潘德拉贡〔Lancer〕", 10995, 15606, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Lancer", "玉藻前", 10726, 15147, 600, 800, 900, 950, 1000, 150, 162, 175, 187, 200, "TreasureSpecialAttack", 1.5);

    /******************************************4星********************************************************************/
    intialServant("Lancer", "阿尔托莉雅・潘德拉贡〔Alter〕", 9968, 11761, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Lancer", "神枪 李书文", 9653, 11360, 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1);
    intialServant("Lancer", "贞德・Alter・Santa・Lily", 9261, 11870, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Lancer", "伊丽莎白・巴陶里", 9122, 11870, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Lancer", "清姬", 8936, 11870, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Lancer", "芬恩・麦克库尔", 8930, 12750, 600, 750, 825, 862.5, 900, 0, 0, 0, 0, 0, "", 1);
    intialServant("Lancer", "弗拉德三世〔Extra〕", 8775, 13005, 600, 800, 900, 950, 1000, 150, 162, 175, 187, 200, "TreasureSpecialAttack", 1.5);
    intialServant("Lancer", "美杜莎〔Lancer〕", 8253, 13119, 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8);

    /******************************************3星及以下********************************************************************/
    intialServant("Lancer", "库・丘林", 7239, 9593, 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Lancer", "罗穆路斯", 7239, 9883, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Lancer", "库・丘林〔Prototype〕", 7082, 10098, 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Lancer", "豹人", 7022, 9593, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Lancer", "赫克托耳", 6928, 10200, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Lancer", "迪尔姆德・奥迪纳", 6877, 10098, 1600, 2000, 2200, 2300, 2400, 0, 0, 0, 0, 0, "", 0.8);



    //----------------------------------Rider---------------------------------------------------------------------//
    /******************************************5星********************************************************************/
    intialServant("Rider", "魁札尔·科亚特尔", 12001, 12960, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Rider", "奥兹曼迪亚斯", 11971, 12830, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Rider", "伊斯坎达尔", 11560, 13219, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Rider", "弗朗西斯・德雷克", 11326, 12830, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Rider", "女王梅芙", 10296, 13968, 800, 1000, 1100, 1150, 1200, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5);

    /******************************************4星********************************************************************/
    intialServant("Rider", "坂田金时", 9819, 10800, 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Rider", "阿尔托莉雅・潘德拉贡〔Santa Alter〕", 9258, 11286, 450, 550, 600, 625, 650, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Rider", "莫德雷德", 9212, 11400, 450, 600, 675, 712, 750, 0, 0, 0, 0, 0, "", 1);
    intialServant("Rider", "安妮・伯妮&玛丽・里德", 9029, 11286, 1600, 2000, 2200, 2300, 2400, 1200, 1600, 1800, 1900, 2000, "TreasureSpecialRemainHpAttack", 0.8);
    intialServant("Rider", "阿斯托尔福", 8937, 11172, 800, 1000, 1100, 1150, 1200, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Rider", "玛丽・安托瓦内特", 8293, 12348, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 0.8);

    /******************************************3星及以下********************************************************************/
    intialServant("Rider", "亚历山大", 7356, 8640, 800, 1000, 1100, 1150, 1200, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Rider", "美杜莎", 7200, 8937, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Rider", "牛若丸", 7076, 9028, 1600, 2000, 2200, 2300, 2400, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Rider", "爱德华・蒂奇", 6188, 7907, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Rider", "圣乔治", 5236, 9200, 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1);

    //----------------------------------Caster---------------------------------------------------------------------//
    /******************************************5星********************************************************************/
    intialServant("Caster", "玄奘三蔵", 11658, 12965, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Caster", "伊莉雅斯菲尔", 10857, 13825, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Caster", "莱昂纳多・达・芬奇", 10598, 14259, 450, 600, 675, 712, 750, 0, 0, 0, 0, 0, "", 1);

    /******************************************4星********************************************************************/
    intialServant("Caster", "尼托克丽丝", 9060, 11288, 600, 750, 825, 862.5, 900, 0, 0, 0, 0, 0, "", 1);
    intialServant("Caster", "玛丽・安托瓦内特", 9060, 11404, 450, 600, 675, 712, 750, 0, 0, 0, 0, 0, "", 1);
    intialServant("Caster", "童谣", 8629, 11882, 600, 750, 825, 862.5, 900, 0, 0, 0, 0, 0, "", 1);
    intialServant("Caster", "海伦娜・布拉瓦茨基", 8629, 11882, 600, 750, 825, 862.5, 900, 0, 0, 0, 0, 0, "", 1);
    intialServant("Caster", "伊丽莎白・巴陶里〔万圣节〕", 8616, 11404, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Caster", "吉尔伽美什〔Caster〕", 8460, 12005, 450, 600, 675, 712, 750, 0, 0, 0, 0, 0, "", 1);
    intialServant("Caster", "托马斯・爱迪生", 7952, 11882, 450, 600, 675, 712, 750, 0, 0, 0, 0, 0, "", 1);

    /******************************************3星及以下********************************************************************/
    intialServant("Caster", "美狄亚", 7418, 8643, 600, 750, 825, 862.5, 900, 0, 0, 0, 0, 0, "", 1);
    intialServant("Caster", "杰罗尼莫", 6857, 9123, 400, 550, 625, 662.5, 700, 0, 0, 0, 0, 0, "", 1);
    intialServant("Caster", "梅菲斯托费勒斯", 6839, 9216, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Caster", "冯・霍恩海姆・帕拉塞尔苏斯", 6711, 9506, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1);
    intialServant("Caster", "库・丘林", 6580, 9604, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Caster", "吉尔・德・雷", 6514, 9506, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Caster", "查尔斯・巴贝奇", 5996, 10887, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Caster", "威廉・莎士比亚", 5798, 8080, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5);


    //----------------------------------Assassin---------------------------------------------------------------------//
    /******************************************5星********************************************************************/
    intialServant("Assassin", "酒吞童子", 11993, 12825, 450, 600, 675, 712, 750, 0, 0, 0, 0, 0, "", 1);
    intialServant("Assassin", "“山之翁”", 11848, 13338, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Assassin", "谜之女主角X", 11761, 12696, 1600, 2000, 2200, 2300, 2400, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 0.8);
    intialServant("Assassin", "开膛手杰克", 11557, 12696, 1400, 1800, 2000, 2100, 2200, 50, 62.5, 75, 87.5, 100, "SpecialAttackPowerBuff", 0.8);
    intialServant("Assassin", "克利奥帕特拉", 11088, 13402, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5);

    /******************************************4星********************************************************************/
    intialServant("Assassin", "卡米拉", 9408, 10473, 600, 800, 900, 950, 1000, 120, 132.5, 145, 157.5, 170, "TreasureSpecialAttack", 1.5);
    intialServant("Assassin", "斯卡哈", 9049, 11168, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Assassin", "卫宫〔Assassin〕", 8958, 11168, 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1);
    intialServant("Assassin", "两仪式〔Assassin〕", 8867, 11055, 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1);
    intialServant("Assassin", "燕青", 8661, 11637, 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8);

    /******************************************3星及以下********************************************************************/
    intialServant("Assassin", "荆轲", 7207, 8293, 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Assassin", "风魔小太郎", 7091, 8844, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Assassin", "百貌的哈桑", 6686, 9310, 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1);
    intialServant("Assassin", "静谧的哈桑", 6636, 9310, 1200, 1500, 1650, 1725, 1800, 0, 0, 0, 0, 0, "", 1);
    intialServant("Assassin", "咒腕的哈桑", 6280, 7594, 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Assassin", "佐佐木小次郎", 5735, 6220, 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Assassin", "歌剧魅影", 5654, 8393, 600, 750, 825, 862.5, 900, 0, 0, 0, 0, 0, "", 1);
    intialServant("Assassin", "夏尔・亨利・桑松", 5456, 8309, 800, 1000, 1100, 1150, 1200, 0, 0, 0, 0, 0, "", 1.5);

    //----------------------------------Berserker---------------------------------------------------------------------//
    /******************************************5星********************************************************************/
    intialServant("Berserker", "库・丘林〔Alter〕", 12805, 12210, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Berserker", "坂田金时", 12712, 12150, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Berserker", "土方岁三", 12089, 12028, 600, 800, 900, 950, 1000, 600, 800, 900, 950, 1000, "TreasureSpecialRemainHpAttack", 1.5);
    intialServant("Berserker", "源赖光", 11556, 13500, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Berserker", "弗拉德三世", 11499, 13770, 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1);
    intialServant("Berserker", "谜之女主角X〔Alter〕", 11113, 14175, 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8);

    /******************************************4星********************************************************************/
    intialServant("Berserker", "赫拉克勒斯", 10655, 10327, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Berserker", "兰斯洛特", 10477, 10327, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Berserker", "贝奥武夫", 10247, 10327, 700, 900, 1000, 1050, 1100, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Berserker", "茨木童子", 9636, 10954, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Berserker", "弗兰肯斯坦", 9441, 10687, 900, 1100, 1200, 1250, 1300, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Berserker", "玉藻猫", 9026, 11458, 800, 1000, 1100, 1150, 1200, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Berserker", "茶茶", 8945, 11025, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5);

    /******************************************3星及以下********************************************************************/
    intialServant("Berserker", "吕布奉先", 8119, 8302, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Berserker", "大流士三世", 7608, 8763, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Berserker", "清姬", 6644, 9166, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Berserker", "血斧埃里克", 6290, 7688, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Berserker", "斯巴达克斯", 5073, 7722, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5);

    //----------------------------------Ruler---------------------------------------------------------------------//
    /******************************************5星********************************************************************/
    intialServant("Ruler", "天草四郎", 10972, 14107, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5);

    /******************************************4星********************************************************************/
    intialServant("Ruler", "马大", 9546, 11250, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5);


    //----------------------------------Avenger---------------------------------------------------------------------//
    /******************************************5星********************************************************************/
    intialServant("Avenger", "贞德〔Alter〕", 13244, 11761, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Avenger", "岩窟王 爱德蒙・唐泰斯", 12641, 12177, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 0.8);

    /******************************************4星********************************************************************/
    intialServant("Avenger", "戈尔贡", 10706, 10197, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Avenger", "海森・罗伯", 10628, 9949, 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8);

}

function intialServant(career, name, atk, hp, tl1, tl2, tl3, tl4, tl5, oc1, oc2, oc3, oc4, oc5, type, cardColor) {
    id++;
    var tl = new Array();
    tl["tl1"] = tl1;
    tl["tl2"] = tl2;
    tl["tl3"] = tl3;
    tl["tl4"] = tl4;
    tl["tl5"] = tl5;

    var oc = new Array();
    oc["oc1"] = oc1;
    oc["oc2"] = oc2;
    oc["oc3"] = oc3;
    oc["oc4"] = oc4;
    oc["oc5"] = oc5;
    /*
    TreasureSpecialAttack：宝具特攻
    SpecialAttackPowerBuff：特攻威力Buff，比如杰克女性特攻
    ""：无特攻
    TreasureSpecialRemainHpAttack：双子宝具特攻
    TreasureSpecialExplosionAttack：自爆弓宝具特攻
    */
    oc["type"] = type;

    var model = {
        id: id,
        career: career,
        name: name,
        atk: atk,
        hp: hp,
        tl: tl,
        oc: oc,
        cardColor: cardColor
    }

    servants[id] = model;
}

