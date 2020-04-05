/**
 * 智慧树刷课脚本
 * 无视弹出问题
 * 自动下一个,加速
 * 修改自@wangzexi-ZhiHuiShu-Assistant
 */
(function() {
const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time))
  $('.Patternbtn-div').click()

  //设置时间30分钟
  time = 30*60;
  const start = async function() {
    while (true) {
	console.log('后台运行中')
	
	$('.el-dialog__wrapper,.dialog-test').css("display","none")
    $('.v-modal').css("z-index", "-1")
      
      //需要加速请删除注释
      /*
      if (!/1\.5/.test($('.speedBox').attr('style'))) {
        console.log('提升到1.5倍速')
        $('.speedTab15').click()
      }
      */
      if(time>0){  
          console.log(time)
          time=time-2;  
      }  
      else {  
        //无习惯分数请注释这行代码
        window.location.href = 'https://github.com/jiajiayao/ZhiHuiShu_2020_New/blob/master/notice.md';
      }  
      if ($('.volumeBox').find('.passVolume').height() != 0) {
        console.log('静音')
        $('.volumeIcon').click()
      }

      if ($('.currentTime').text() == $('.duration').text()) {
        console.log('下一个视频')
        $('#nextBtn').click()
      } else {
        if (String($('.playButton').click()).length == 65) {
          console.log('强制播放')
          $('.playButton').click()
        }
      }
      await sleep(2000)
    }
    
  }

  start()
 
}())
