// const storage = localStorage;
// let SaveData = {

//     status: 10,
//     HP: 10
// }
// storage.setItem('data_0', JSON.stringify(SaveData));
// const data = JSON.parse(storage.getItem('data_0')); 
//     console.log(data.HP);

// 水属性の魔法

//１つ目
// オク 敵一体 小
// アガスオク　敵全体 小
// オクディア  敵一体 中
// アガスオクディア 敵全体　中
// オクノス 敵一体　大
// アガスオクノス 敵全体　大

//２つ目
//  レイ 敵一体 小
//　アガスレイ 敵全体 小

//  レイエク 敵一体　大
//  アガスレイエク 敵全体　大

// HP回復魔法
// ケイア 味方1対　小
// ケイアス味方1対　中
// ケイオティア　味方1対　全回復


// MP回復魔法
// サイア　味方1対　小
// サイアス　味方1対　中

// バフ魔法
// コンセントレイト

//光属性の魔法
// ヘカテ 敵一体 小
// アガスヘカテ 敵全体 小
// ヘキトス 敵一体　大
// アガスヘキエク 敵全体　大




let SaveData =  {
    Chapter: 1,
    Event_1: false,
    Event_2: false,
    Helene: {
        Magic: [{"name": "レイ", "SP": 3 ,"explanation": "水属性の小魔法攻撃"}, {"name": "ケイア", "SP": 5,"explanation": "味方一体のHPを小回復"}],
        Lv: 1,
        HP: 10,
        MP: 10,
        EXP: 0,
        ATK: 10,
        DEF: 10,
        SPD: 10,
        MAT: 10,
    },
    Laura: {
        Magic: [{"name": "ヘカテ", "SP": 3,"explanation": "光属性の小魔法攻撃"}, {"name": "サイア", "SP": 5,"explanation": "MPの回復"}],
        Lv: 1,
        HP: 10,
        MP: 10,
        EXP: 0,
        ATK: 10,
        DEF: 10,
        SPD: 10,
        MAT: 10,
    },
    Image: "",
    
}
