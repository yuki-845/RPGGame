// const storage = localStorage;
// let SaveData = {

//     status: 10,
//     HP: 10
// }
// storage.setItem('data_0', JSON.stringify(SaveData));
// const data = JSON.parse(storage.getItem('data_0')); 
//     console.log(data.HP);

// 水属性の魔法

const rain = new Image()
rain.src = "img/skillIcon/rain.png"
//  レイ 敵一体 小
//　アガスレイ 敵全体 小

//  レイエク 敵一体　大
//  アガスレイエク 敵全体　大

// HP回復魔法
const HPcare = new Image()
HPcare.src = "img/skillIcon/HPcare.png"
// ケイア 味方1対　小
// ケイアス味方1対　中
// ケイオティア　味方1対　全回復


// MP回復魔法
const MPcare = new Image()
MPcare.src = "img/skillIcon/MPcare.png"
// サイア　味方1対　小
// サイアス　味方1対　中

// バフ魔法
const bahu = new Image()
bahu.src = "img/skillIcon/Skill.png"
// レゾリューション

//光属性の魔法
const shine = new Image()
shine.src = "img/skillIcon/shine.png"
// ヘカテ 敵一体 小
// アガスヘカテ 敵全体 小
// ヘキトス 敵一体　大
// アガスヘキトス 敵全体　大
// アガスヘキエク 敵全体　大




let SaveData =  {
    Chapter: 1,
    Event_1: false,
    Event_2: false,
    Helene: {
        Magic: [{"name": "レイ", "SP": 3 ,"explanation": "水属性の小魔法攻撃","image":rain}, {"name": "ケイア", "SP": 5,"explanation": "味方一体のHPを小回復","image": HPcare}],
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
        Magic: [{"name": "ヘカテ", "SP": 3,"explanation": "光属性の小魔法攻撃","image": shine}, {"name": "サイア", "SP": 5,"explanation": "MPの回復","image": MPcare}],
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
