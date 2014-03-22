<?php
class QuestionsWidget extends Action {

    public $ques = array(
        1 => array(
            'q' => 'Lumia1020手机后置摄像头的像素是多少？',
            'a' => array(
                'A' => '1020像素',
                'B' => '800像素',
                'C' => '4100像素',
            ),
            'right' => 'C',
        ),
        2 => array(
            'q' => 'Asha502待机时间为多久？',
            'a' => array(
                'A' => '24天',
                'B' => '108天',
                'C' => '12天',
            ),
            'right' => 'A',
        ),
        3 => array(
            'q' => 'Lumia1520是什么手机系统？',
            'a' => array(
                'A' => '安卓系统',
                'B' => 'WP系统',
                'C' => '塞班系统',
            ),
            'right' => 'B',
        ),
        4 => array(
            'q' => '诺基亚Lumia1520手机屏幕是多少英寸？',
            'a' => array(
                'A' => '3.5英寸',
                'B' => '4英寸',
                'C' => '6英寸',
            ),
            'right' => 'C',
        ),
        5 => array(
            'q' => 'Lumia1520有几种颜色？',
            'a' => array(
                'A' => '1种颜色',
                'B' => '4种颜色',
                'C' => '3种颜色',
            ),
            'right' => 'B',
        ),
        6 => array(
            'q' => '诺基亚自有的拍照应用的名字是什么？',
            'a' => array(
                'A' => '智能拍摄',
                'B' => '诺基亚拍摄',
                'C' => '奇趣拍摄',
            ),
            'right' => 'A',
        ),
        7 => array(
            'q' => '诺基亚手机应用商店有多少种应用？',
            'a' => array(
                'A' => '20多万种',
                'B' => '10万种',
                'C' => '1万多种',
            ),
            'right' => 'A',
        ),
        8 => array(
            'q' => '诺基亚应用商店里有爱奇艺应用吗？',
            'a' => array(
                'A' => '没有',
                'B' => '有',
                'C' => '不知道',
            ),
            'right' => 'B',
        ),
        9 => array(
            'q' => '诺基亚应用商店下载次数最多的应用是哪个？',
            'a' => array(
                'A' => '我叫MT',
                'B' => '微信',
                'C' => '爱奇艺',
            ),
            'right' => 'B',
        ),
        10 => array(
            'q' => '诺基亚自有的地图服务名称是什么？',
            'a' => array(
                'A' => '地图服务',
                'B' => '这里地图',
                'C' => '你在哪',
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