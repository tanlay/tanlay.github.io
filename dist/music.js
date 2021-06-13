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
        name: '天龙八部之宿敌',
        artist: '许嵩',
        url: 'http://music.163.com/song/media/outer/url?id=167691.mp3',
      },
      {
        name: '光年之外',
        artist: '邓紫棋',
        url: 'http://music.163.com/song/media/outer/url?id=486194122.mp3',
      },
      {
        name: '挪威的森林',
        artist: '伍佰',
        url: 'http://music.163.com/song/media/outer/url?id=157288.mp3',
      },
      {
        name: '等一分钟',
        artist: '徐誉滕',
        url: 'http://music.163.com/song/media/outer/url?id=1493994302.mp3',
      },
      {
        name: '我们都一样',
        artist: '张杰',
        url: 'http://music.163.com/song/media/outer/url?id=191252.mp3',
      },
      {
        name: '追梦人',
        artist: '凤飞飞',
        url: 'http://music.163.com/song/media/outer/url?id=231412.mp3',
      },
      {
        name: '最美的期待',
        artist: '周笔畅',
        url: 'http://music.163.com/song/media/outer/url?id=531295576.mp3',
      },
      {
        name: '麻雀',
        artist: '李荣浩',
        url: 'http://music.163.com/song/media/outer/url?id=1407551413.mp3',
      },
      {
        name: '大风吹',
        artist: '王赫野',
        url: 'http://music.163.com/song/media/outer/url?id=1826179038.mp3',
      },
      {
        name: '囚鸟',
        artist: '彭玲',
        url: 'http://music.163.com/song/media/outer/url?id=5252280.mp3',
      },
      {
        name: '往后余生',
        artist: '马良',
        url: 'http://music.163.com/song/media/outer/url?id=557584888.mp3',
      },
      {
        name: '体面',
        artist: '于文文',
        url: 'http://music.163.com/song/media/outer/url?id=1388608541.mp3',
      },
      {
        name: 'Cry On My Shoulder',
        artist: 'Deutschland sucht den Superstar',
        url: 'http://music.163.com/song/media/outer/url?id=17194024.mp3',
      },
      {
        name: '遇萤（橙光游戏《遇龙》主题曲）',
        artist: 'CRITTY',
        url: 'http://music.163.com/song/media/outer/url?id=37782740.mp3',
      },
      {
        name: '我的一个道姑朋友',
        artist: '双笙',
        url: 'http://music.163.com/song/media/outer/url?id=1367452194.mp3',
      },
      {
        name: '年轮',
        artist: '汪苏泷',
        url: 'http://music.163.com/song/media/outer/url?id=32897777.mp3',
      },
	  {
        name: '大鱼 (Live)',
        artist: '周深',
        url: 'http://music.163.com/song/media/outer/url?id=1421191783.mp3',
      },
	  {
        name: '左手指月',
        artist: '萨顶顶',
        url: 'http://music.163.com/song/media/outer/url?id=536096151.mp3',
      },
	  {
        name: '好久不见',
        artist: '陈奕迅',
        url: 'http://music.163.com/song/media/outer/url?id=65538.mp3',
      }
	  {
        name: '海角七号',
        artist: '东来东往',
        url: 'http://music.163.com/song/media/outer/url?id=1479528069.mp3',
      }
    ]
});

