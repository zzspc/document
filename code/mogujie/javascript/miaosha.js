var reLoad = $(".buy-refresh");

if(reLoad.length > 0)
{
    console.log('进入倒计时 启动秒杀程序');

    reLoad = reLoad.get(0);

    setInterval('miaosha(reLoad)',100);
}
else
{
    console.log('未进入倒计时 30S 后刷新！');
    setInterval('location.reload()',30000);
}
function miaosha(reload){
    var question  = $(".seckill-question dl:first-child dd").text();

    var answer = $(".seckill-answer").get(0);

    if(question != '')
    {
        switch(question){
            case '1只兔子和2只鸭子，一共有几条腿？（只需填写阿拉伯数字）':
                answer.value = 8;
                break;
            case '电影哈利波特一共有几部？（只需填写阿拉伯数字）':
                answer.value = 8;
                break;
            case '麦当劳的标志是哪个英文字母？（请填写大写字母）':
                answer.value = 'M';
                break;
            case '中国邮政特快专递的英文缩写是？（请填写大写字母）':
                answer.value = 'EMS';
                break;
            case '秦始皇兵马俑是在我国的哪个省发掘的？（两个字）':
                answer.value = '陕西';
                break;
            case '兵马俑在哪个城市？':
                answer.value = '陕西';
                break;
            case '在十二生肖中排列顺序最后一位的是什么动物？':
                answer.value = '猪';
                break;
            case '用来指代飞碟等不明飞行物的英文缩写是？（请填写大写字母）':
                answer.value = 'UFO';
                break;
            case '2只兔子，共有几条腿？（只需填写阿拉伯数字）':
                answer.value = 8;
                break;
            case '儒家学派的创始人是？':
                answer.value = '孔子';
                break;
            case '白娘子和许仙相遇在哪座桥上？（2个字）':
                answer.value = '断桥';
                break;
            case '《还珠格格》中，紫薇的亲生母亲叫？':
                answer.value = '夏雨荷';
                break;
            case '世界第一高峰是我国的什么峰？':
                answer.value = '珠穆朗玛峰';
                break;
            case '童话故事中，匹诺曹说谎后脸上的哪个部位会变长？':
                answer.value = '鼻子';
                break;
            case '苹果公司的标志是哪一种水果？':
                answer.value = '苹果';
                break;
            case '扑克牌一共有多少张？（只需填写阿拉伯数字）':
                answer.value = 54;
                break;
            case '2010年世界博览会由中国的哪座城市举办？':
                answer.value = '上海';
                break;
            case '彩虹有几种颜色？（只需填写阿拉伯数字）':
                answer.value = 7;
                break;
            case '传说为关羽“刮骨疗伤”的名医叫？':
                answer.value = '华佗';
                break;
            case '中国一共有多少个民族？（只需填写阿拉伯数字）':
                answer.value = 56;
                break;
            case '迪斯尼乐园的总部在哪个国家？（中文）':
                answer.value = '美国';
                break;
            case 'angelababy和谁结婚了？（中文名）':
                answer.value = '黄晓明';
                break;
            case '中国的首都？':
                answer.value = '北京';
                break;
            case '请输入美丽说的小写拼音首字母':
            	answer.value = 'mls';
            	break;
            case '一小时有多少分钟？':
            	answer.value = 60;
            	break;
            case '英文字母有多少个？（填写阿拉伯数字）':
            	answer.value = 26;
            	break;
            case '一共有多少个生肖？（答案仅填写阿拉伯数字）':
            	answer.value = 12;
            	break;
            case '最小的自然数是？（阿拉伯数字）':
            	answer.value = 0;
            	break;
            case '相传使董卓、吕布反目成仇的古代美女叫？':
            	answer.value = '貂蝉';
            	break;
            case '浙江的省会城市是哪里？':
            	answer.value = '杭州';
            	break;
            case '上有天堂的下半句是什么？（四个字）':
            	answer.value = '下有苏杭';
            	break;
            case '中国实行多少年的免费义务教育制度？（答案仅填写阿拉伯数字）':
            	answer.value = 9;
            	break;
            case '请输入李易峰的拼音首字母（大写）':
            	answer.value = 'LYF';
            	break;
            case '琅琊榜的男主角是谁？（中文名）':
            	answer.value = '胡歌';
            	break;
            case '麦当劳的标志是哪个英文字母？（请填写大写字母）':
            	answer.value = 'M';
            	break;
            case '请输入快乐大本营的小写拼音首字母':
            	answer.value = 'kldby';
            	break;
            case '用来指代飞碟等不明飞行物的英文缩写是？（请填写大写字母）':
            	answer.value = 'UFO';
            	break;
            case '自由女神像在哪个国家？':
            	answer.value = '美国';
            	break;
            case '康熙来了的男主持人是谁（三个字中文）':
            	answer.value = '蔡康永';
            	break;
            case '一年有多少个季度？（答案仅填写阿拉伯数字）':
            	answer.value = 4;
            	break;
            case '请输入“红包”的全拼字母（小写）':
            	answer.value = 'hongbao';
            	break;
            case '请输入太阳的后裔的拼音首字母（大写）':
            	answer.value = 'TYDHY';
            	break;
            case '请输入杭州的全拼字母（小写）':
            	answer.value = 'hangzhou';
            	break;
            case '埃菲尔铁塔在哪个国家？':
            	answer.value = '法国';
            	break;
            case '世界上海拔最高的山峰是哪一座?':
            	answer.value = '珠穆朗玛峰';
            	break;
            case '一年有几个月？':
            	answer.value = 12;
            	break;
            case '在十二生肖中排列顺序最后一位的是什么动物？':
            	answer.value = '猪';
            	break;
            case '扑克牌一共有多少张？（只需填写阿拉伯数字）':
            	answer.value = 54;
            	break;
            case '天安门在哪个城市？':
            	answer.value = '北京';
            	break;
            case '请输入爸爸去哪儿的小写拼音首字母':
            	answer.value = 'bbqne';
            	break;
            case '请输入奇葩来了的小写拼音首字母':
            	answer.value = 'qpll';
            	break;
            case '清华大学在哪个市？（2个字）':
            	answer.value = '北京';
            	break;
            case '1天有几个小时？':
            	answer.value = 24;
            	break;
            case '小时代的作者名是？（3个字）':
            	answer.value = '郭敬明';
            	break;
            case '我国历史上第一个皇帝？':
            	answer.value = '秦始皇';
            	break;
            case '一个星期一共有多少天？（答案仅填写阿拉伯数字）':
            	answer.value = 7;
            	break;
            case '2016年的2月有几天？（请输入阿拉伯字母）':
            	answer.value = 29;
            	break;
            case '中华人民共和国的首都是？（2个字）':
            	answer.value = '北京';
            	break;
            case '韩国的首都是？（2个字中文）':
            	answer.value = '首尔';
            	break;
            case '农历八月十五是什么节日（三个字）':
            	answer.value = '中秋节';
            	break;
            case '正月十五是什么节日：（3个字中文）':
            	answer.value = '元宵节';
            	break;
            case '《天龙八部》的作者是谁？':
            	answer.value = '金庸';
            	break;
            case '蘑菇街的拼音大写首字母是什么？':
            	answer.value = 'MGJ';
            	break;
            case '太阳的后裔的女主角是：（3个字中文）':
            	answer.value = '宋慧乔';
            	break;
            case '太阳的后裔的男主角是：（3个字中文）':
            	answer.value = '宋仲基';
            	break;
            case '张艺兴所在的组合叫什么名字（大写）？':
            	answer.value = 'EXO';
            	break;
            case '蘑菇街的全拼是（小写字母）':
            	answer.value = 'mogujie';
            	break;
            case '请输入疯狂动物城五个字的小写拼音首字母':
            	answer.value = 'fkdwc';
            	break;
            case '请输入焕新大赏的拼音首字母（大写）':
            	answer.value = 'HXDS';
            	break;
            case '西湖在哪个城市？':
            	answer.value = '杭州';
            	break;
            case '甄嬛传的女主角是谁？（2个字）':
            	answer.value = '孙俪';
            	break;
            case '广东的省会城市是？（2个字）':
            	answer.value = '广州';
            	break;
            case '红楼梦作者是？':
            	answer.value = '曹雪芹';
            	break;
			case '上有天堂下一句是什么？':
				answer.value='下有苏杭';
            default:
                cosole.log('找到未设置问题：'+ question);
                break;
        }

        var confirm = $(".confirm-answer:first-child");

        confirm.get(0).click();

        if($("#vp_wrap").css('display') == 'block')
        {
            window.clearInterval();
        }
    }
    else
    {
        console.log('等待开始中');

        reload.click();

        if($("#vp_wrap").css('display') == 'block')
        {
            $("#vp_wrap").css('display','none');

            $(".light_box_fullbg").css('display','none');
        }
    }


}