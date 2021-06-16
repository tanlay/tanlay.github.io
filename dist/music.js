const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false, //自动播放
    fixed: true, //吸底模式
	  mini: true, //迷你模式
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
        cover: 'http://p4.music.126.net/YxKEZCPUWrvvZf6qeV2_xg==/78065325577755.jpg',
      },
      {
        name: '像我这样的人',
        artist: '毛不易',
        url: 'http://music.163.com/song/media/outer/url?id=569213220.mp3',
        cover: 'http://p3.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg',
      },
      {
        name: '金玉良缘',
        artist: '李琦',
        url: 'http://music.163.com/song/media/outer/url?id=28457938.mp3',
        cover: 'http://p4.music.126.net/titGrI5ym67xGxjTFlsmmg==/6055010534457042.jpg',
      },
      {
        name: '信仰',
        artist: '张信哲',
        url: 'http://music.163.com/song/media/outer/url?id=402073804.mp3',
        cover: 'http://p4.music.126.net/_5NqGU4KU06j7T0N-ahVLg==/1410673418999648.jpg',
      },
      {
        name: '光年之外',
        artist: '邓紫棋',
        url: 'http://music.163.com/song/media/outer/url?id=486194122.mp3',
        cover: 'http://p4.music.126.net/DSGvdBaVhj1gwgh18Z9d3Q==/18812643953229012.jpg',
      },
      {
        name: 'Dream It Possible',
        artist: 'Delacey',
        url: 'http://music.163.com/song/media/outer/url?id=38592976.mp3',
        cover: 'http://p4.music.126.net/Gfq_eVuq7lgilBf0w1g5dg==/109951163088676710.jpg',
      },
      {
        name: '挪威的森林',
        artist: '伍佰',
        url: 'http://music.163.com/song/media/outer/url?id=157288.mp3',
		cover: 'http://p4.music.126.net/HDdQFXVIlRvR96s0mQyu9g==/109951164170257125.jpg',
      },
      {
        name: '等一分钟',
        artist: '徐誉滕',
        url: 'http://music.163.com/song/media/outer/url?id=1493994302.mp3',
		cover: 'http://p3.music.126.net/Z3UPSHkpGsKQ8Md4v3cDAQ==/109951165455249371.jpg',
      },
      {
        name: '大风吹',
        artist: '王赫野',
        url: 'http://music.163.com/song/media/outer/url?id=1826179038.mp3',
		cover: 'http://p3.music.126.net/w1IbAZckwMV51df8SuP1lw==/109951165959142765.jpg',
      },
      {
        name: 'Cry On My Shoulder',
        artist: 'Deutschland sucht den Superstar',
        url: 'http://music.163.com/song/media/outer/url?id=17194024.mp3',
		cover: 'http://p3.music.126.net/_1SSamf87l4mo77TZiWCWQ==/576144092962639.jpg',
      },
      {
        name: '遇萤（橙光游戏《遇龙》主题曲）',
        artist: 'CRITTY',
        url: 'http://music.163.com/song/media/outer/url?id=37782740.mp3',
		cover: 'http://p3.music.126.net/LmvVQr_PDPPp_WyAic5z9g==/18358545649041961.jpg',
      },
      {
        name: '我的一个道姑朋友',
        artist: '双笙',
        url: 'http://music.163.com/song/media/outer/url?id=1367452194.mp3',
		cover: 'http://p3.music.126.net/_SPItojIVnmpsNsgz8LlMw==/109951164096961308.jpg',
      },
      {
        name: '年轮',
        artist: '汪苏泷',
        url: 'http://music.163.com/song/media/outer/url?id=32897777.mp3',
		cover: 'http://p3.music.126.net/5D4hfLdRezRlax4OWiPgnw==/2899412164997218.jpg',
      },
      {
        name: '凉凉',
        artist: '张碧晨,杨宗纬',
        url: 'http://music.163.com/song/media/outer/url?id=472137697.mp3',
		cover: 'http://p4.music.126.net/Lq9zwKrCN-V8uA0G0rSsog==/18745573743838646.jpg',
      },
	  {
        name: '大鱼 (Live)',
        artist: '周深',
        url: 'http://music.163.com/song/media/outer/url?id=1421191783.mp3',
		cover: 'http://p4.music.126.net/yZN047VYz7selK4LCsi1Zg==/109951164681443868.jpg',
      },
	  {
        name: '左手指月',
        artist: '萨顶顶',
        url: 'http://music.163.com/song/media/outer/url?id=536096151.mp3',
		cover: 'http://p3.music.126.net/gEia-o05FSas8uJos54Sug==/109951163456726954.jpg',
      },
	  {
        name: '好久不见',
        artist: '陈奕迅',
        url: 'http://music.163.com/song/media/outer/url?id=65538.mp3',
		cover: 'http://p3.music.126.net/o_OjL_NZNoeog9fIjBXAyw==/18782957139233959.jpg',
      },
    ]
});

