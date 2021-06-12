const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false, //自动播放
	mini: false, //迷你模式
    theme: '#FADFA3', //主题色
    loop: 'all', //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
    order: 'random', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    listFolded: true, //列表默认折叠
    listMaxHeight: 90, //列表最大高度
    audio: [
	  {
        name: '勇气',
        artist: '棉子',
        url: 'http://music.163.com/song/media/outer/url?id=1411358329.mp3',
        cover: '#',
      },
      {
        name: "星星",
        artist: '张杰',
        url: 'http://music.163.com/song/media/outer/url?id=1399004693.mp3',
        cover: '/images/xingxing.jpg',
      },
      {
        name: '这就是爱吗',
        artist: '十豆',
        url: 'http://music.163.com/song/media/outer/url?id=1412242872.mp3',
        cover: '/images/zjsam.jpg',
      },
      {
        name: 'Alone',
        artist: 'Alan Walker / Noonie Bao',
        url: 'http://music.163.com/song/media/outer/url?id=444269135.mp3',
        cover: '/images/alone.jpg',
      },
	  {
        name: 'Umbrella (Matte Remix)',
        artist: 'Matte / Ember Island',
        url: 'http://music.163.com/song/media/outer/url?id=164209623.mp3',
        cover: '/images/1.jpg',
      },
	  {
        name: '大眠 (完整版)原唱：王心凌',
        artist: '小乐哥',
        url: 'http://music.163.com/song/media/outer/url?id=3778678.mp3',
        cover: '/images/2.jpg',
      },
	  {
        name: '世间美好与你环环相扣',
        artist: '柏松',
        url: 'http://music.163.com/song/media/outer/url?id=1363948882.mp3',
        cover: '/images/3.jpg',
      },
	  {
        name: '飞',
        artist: '王恩信Est / 二胖u',
        url: 'http://music.163.com/song/media/outer/url?id=1386259535.mp3',
        cover: '/images/4.jpg',
      }
    ]
});

