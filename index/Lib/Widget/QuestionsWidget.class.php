<?php
class QuestionsWidget extends Action {

    public $ques = array(
        1 => array(
            'q' => '哪个操作系统能更容易的实现手机、平板、PC的多屏同步',
            'a' => array(
                'A' => '安卓',
                'B' => 'IOS',
                'C' => 'WP系统',
            ),
            'right' => 'C',
        ),
        2 => array(
            'q' => '无线充电技术最早被哪个品牌大力推广？',
            'a' => array(
                'A' => 'Nokia',
                'B' => 'Apple',
                'C' => '小米',
            ),
            'right' => 'A',
        ),
        3 => array(
            'q' => 'Lumia系列的手机是什么操作系统？',
            'a' => array(
                'A' => '安卓系统',
                'B' => 'WP系统',
                'C' => '塞班系统',
            ),
            'right' => 'B',
        ),
        4 => array(
            'q' => 'Windows Phone中的office软件可以编辑保存吗？',
            'a' => array(
                'A' => 'Word可以保存',
                'B' => '不可以',
                'C' => 'Excel/Word/PPT都可以编辑保存',
            ),
            'right' => 'C',
        ),
        5 => array(
            'q' => 'Lumia1520的触摸屏技术是什么？',
            'a' => array(
                'A' => '投射式电容触摸屏',
                'B' => '超灵敏触摸屏',
                'C' => '电阻屏',
            ),
            'right' => 'B',
        ),
        6 => array(
            'q' => '诺基亚自有的拍照应用的名字是什么？',
            'a' => array(
                'A' => '智能拍摄',
                'B' => '美图拍摄',
                'C' => '奇趣拍摄',
            ),
            'right' => 'A',
        ),
        7 => array(
            'q' => '诺基亚手机应用商店有多少种应用？',
            'a' => array(
                'A' => '超过22万个热门应用',
                'B' => '10万个热门应用',
                'C' => '少于1万个热门应用',
            ),
            'right' => 'A',
        ),
        8 => array(
            'q' => '诺基亚Lumia支持微信吗？',
            'a' => array(
                'A' => '不可以',
                'B' => '可以支持最新版本的微信',
                'C' => '支持微信2.0',
            ),
            'right' => 'B',
        ),
        9 => array(
            'q' => '诺基亚应用商店中的哪些游戏是其他手机操作平台没有的？',
            'a' => array(
                'A' => 'EA游戏',
                'B' => 'Xbox游戏',
                'C' => '我叫MT',
            ),
            'right' => 'B',
        ),
        10 => array(
            'q' => '诺基亚自有的地图服务名称是什么？',
            'a' => array(
                'A' => '地图导航',
                'B' => 'Here地图',
                'C' => '手机地图',
            ),
            'right' => 'B',
        ),
    );


    public function getquestion(){
        $nu = rand(1, 10);
        $result = $this -> ques[$nu];
        $result['nu'] = $nu;
        return $result;
    }
}