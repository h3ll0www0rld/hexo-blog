const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    // autoplay: true,
    audio: [
        {
            name: '魔女之旅 OP 「リテラチュア」',
            artist: 'Tokyo Guru Re',
            url: '/images/リテラチュア (TV动画「魔女之旅」片头曲OP) - 上田麗奈.mp3',
            cover: 'http://p2.music.126.net/TZ5G2HqrAGvzX-qD_w3U0w==/109951165397769801.jpg?param=140y140',
        },
        {
            name: 'American Pie',
            artist: 'Don McLean',
            url: '/images/American Pie - Don McLean.mp3',
            cover: 'http://p1.music.126.net/9t58aZJXX9Ydxwq3Musnvw==/109951166274331181.jpg?param=130y130',
        },
        {
            name: 'Hedwig’s Theme',
            artist: 'John Williams',
            url: '/images/Hedwig s Theme - John Williams.mp3',
            cover: 'http://p1.music.126.net/9t58aZJXX9Ydxwq3Musnvw==/109951166274331181.jpg?param=130y130',
        }
    ]
});

