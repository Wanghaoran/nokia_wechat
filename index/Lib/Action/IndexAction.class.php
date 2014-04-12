<?php
// 本类由系统自动生成，仅供测试用途
class IndexAction extends Action {
    public function index(){
        $this -> display();
    }

    public function question(){
        $q = R('Questions/getquestion', array(), 'Widget');
        $this -> assign('q', $q);
        $this -> display();
    }

    public function check(){
        $this -> display();
    }

    public function ajaxget(){
        cookie('isold','true');

        //查询是否能中奖
        $Info = M('Info');
        $isbol = $Info -> getFieldByname('isbol', 'value');

        $result = array(
            'resultCode' => 0,
//            'resultCode' => 1,
            'stat' => 'ok',
//            'num' => '7-7-7',
        );

        $ip = get_client_ip();
        $ip_json = file_get_contents('http://ip.taobao.com/service/getIpInfo.php?ip=' . $ip);
        $ip_arr = json_decode($ip_json, true);

        //北京用户
        if($ip_arr['data']['city_id'] == '110000' || $ip_arr['data']['city_id'] == ''){
            do {
                $one = rand(1, 7);
                $two = rand(1, 6);
                $three = rand(1, 7);
            }while(($one == $two && $two == $three) || ($one == 5 || $two == 5 || $three == 5));

        //非北京用户
        }else{
            //可以中奖
            if($isbol == 1){
                do {
                    /*
                    $one = rand(1, 7);
                    $two = rand(1, 7);
                    $three = rand(1, 7);
                    */
                    $one = 7;
                    $two = 7;
                    $three = 7;
                }while((($one == $two && $two == $three) && $one != 7) || ($one == 5 || $two == 5 || $three == 5));
            //不可中奖
            }else{
                do {
                    $one = rand(1, 7);
                    $two = rand(1, 6);
                    $three = rand(1, 7);
                }while(($one == $two && $two == $three) || ($one == 5 || $two == 5 || $three == 5));
            }

        }

        $result['num'] = $one . '-' . $two . '-' .$three;
        if($result['num'] == '7-7-7'){
            $result['resultCode'] = 1;
            //设置不可中奖
            $Info -> where('name="isbol"') -> save(array('value' => 2));
        }


        //记录抽奖信息
        $list = M('List');
        $list_data = array();
        $list_data['clientIP'] = $ip;
        $list_data['num'] = $result['num'];
        $list_data['city'] = $ip_arr['data']['city'] ? $ip_arr['data']['city'] : '未知';
        $list_data['time'] = time();
        $list -> add($list_data);

        echo json_encode($result);
        //计数加1
        $Info = M('Info');
        $Info -> where('id=1') -> setInc('value');
    }

    public function info(){
        $User = M('User');
        $data = array();
        $data['name'] = $_POST['name'];
        $data['tel'] = $_POST['tel'];
        $data['address'] = $_POST['address'];
        $data['addtime'] = time();
        if($User -> add($data)){
            echo 1;
        }else{
            echo 0;
        }
    }

    public function statistical(){
        $Info = M('Info');
        $result = $Info -> select();
        //1.多少人完整参与
        $this -> show('<h1>活动统计：</h1><h3>1.完整参与人数：' . $result[0]['value'] . '</h3>');

        //2.PV，UV
        $this -> show('<h3>2.PU，PV：<span style="color: green;">单独提供</span></h3>');

        //3.进入每个页面的人数
        $this -> show('<h3>3.进入每个页面的人数：<span style="color: green;">单独提供</span></h3>');

        //4.填写用户信息的名单
        $User = M('User');
        $result_user = $User -> select();
        $user_str = '<table width="800" align="center" border="1"><tr><th>姓名</th><th>手机</th><th>住址</th><th>中奖时间</th></tr>';
        foreach($result_user as $value){
            $user_str .= '<tr>';
            $user_str .= '<td>' . $value['name'] . '</td><td>' . $value['tel'] . '</td><td>' . $value['address'] . '</td><td>' . date('Y-m-d H:i:s', $value['addtime']) . '</td>';
            $user_str .= '</tr>';
        }
        $this -> show('<h3>4.中奖用户信息：</h3>' . $user_str . '<br>');
    }

    public function joinlist(){
        $list = M('List');
        $result = $list -> order('time DESC') -> select();
        $user_str = '<table width="800" align="center" border="1"><tr><th>抽奖时间</th><th>IP</th><th>城市</th><th>结果</th></tr>';
        foreach($result as $value){
            $user_str .= '<tr align="center">';
            $user_str .= '<td>' . date('Y-m-d H:i:s', $value['time']) . '</td><td>' . $value['clientIP'] . '</td><td>' . $value['city'] . '</td><td>' . $value['num'] . '</td>';
            $user_str .= '</tr>';
        }
        $this -> show('<h3>参与抽奖用户列表：</h3>' . $user_str . '<br>');


    }
}