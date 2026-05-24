export const storeData = {
  name: '炭火やきとり どっかん。',
  nameEn: 'Sumibiyakitori Dokkan',
  catchcopy: '累計30万本突破！炭火で焼く、金沢名物の本格やきとり',
  description:
    '平成14年（2002年）創業、石川県金沢市で愛され続ける炭火やきとり専門店。\n看板メニューの「つくね」は累計販売30万本を突破し、地元の常連客はもちろん、遠方からも多くのお客様にお越しいただいております。',
  address: '〒920-0000 石川県金沢市○○町X-XX',
  addressMapQuery: '石川県金沢市',
  phone: '076-000-0000',
  businessHours: [
    { day: 'ランチ', time: '11:30 〜 14:00', lastOrder: '13:30' },
    { day: 'ディナー', time: '17:00 〜 23:00', lastOrder: '22:30' },
  ],
  closedDays: '毎週月曜日',
  smoking: {
    allowed: false,
    note: '全席禁煙（店外に喫煙スペースあり）',
  },
  parking: {
    available: true,
    spaces: 10,
    note: '店舗裏手に無料駐車場10台分をご用意しています。満車の場合は近隣のコインパーキングをご利用ください。',
  },
  reservation: {
    phone: '076-000-0000',
    note: 'お電話でのご予約を承っております。\n2名様以上のご利用の際は、事前にご予約いただくとスムーズにご案内できます。\n※コース料理ご希望の場合は前日までにご予約ください。',
    onlineUrl: '#',
    hours: '10:00 〜 22:30（定休日除く）',
  },
  payment: [
    { name: 'au PAY', icon: '📱' },
    { name: 'd払い', icon: '📱' },
    { name: 'NFC モバイル決済', icon: '📲' },
    { name: 'PayPay', icon: '📱' },
    { name: 'クレジットカード', icon: '💳' },
    { name: 'デビットカード', icon: '💳' },
    { name: '楽天ペイ', icon: '📱' },
    { name: '交通系ICカード', icon: '🎫' },
  ],
  sns: {
    instagram: 'https://www.instagram.com/',
    twitter: 'https://x.com/',
    facebook: 'https://www.facebook.com/',
    line: 'https://line.me/',
  },
  news: [
    {
      date: '2026.05.20',
      tag: 'お知らせ',
      title: 'つくね累計販売30万本を突破しました！ありがとうございます',
    },
    {
      date: '2026.05.10',
      tag: 'メニュー',
      title: '夏季限定「梅しそつくね」販売開始しました',
    },
    {
      date: '2026.05.01',
      tag: 'お知らせ',
      title: '5月3日〜5日はゴールデンウィーク特別営業（12:00〜23:00）となります',
    },
    {
      date: '2026.04.15',
      tag: 'メディア',
      title: '地元情報誌「金沢食べ歩きMAP」に掲載されました',
    },
  ],
  menu: [
    {
      name: '名物つくね串',
      description: '創業以来の秘伝タレで丁寧に仕込んだ、累計30万本突破の看板メニュー',
      category: '名物',
      image: '/images/menu/menu1.png',
    },
    {
      name: '炙りチーズつくね',
      description: 'とろけるチーズをのせて炙った、名物つくねの進化系。濃厚な旨みが広がる',
      category: '名物',
      image: '/images/menu/menu2.png',
    },
    {
      name: 'もも炭火焼き',
      description: '国産若鶏のもも肉を炭火でじっくり。外カリ・中ジューシーが絶品',
      category: 'やきとり',
      image: '/images/menu/menu3.png',
    },
    {
      name: 'ねぎま',
      description: '甘みのある長ネギと鶏もも肉が炭火で絶妙に絡み合う定番串',
      category: 'やきとり',
      image: '/images/menu/menu4.png',
    },
    {
      name: 'どっかん盛り合わせ',
      description: '人気串8種類をまとめて味わえるお得なセット。初来店の方に特におすすめ',
      category: 'セット',
      image: '/images/menu/menu5.png',
    },
    {
      name: '生ビール（中）',
      description: '喉越し爽快なキンキン生ビール。やきとりとの相性は抜群',
      category: 'ドリンク',
      image: '/images/menu/menu6.png',
    },
  ],
  gallery: [
    { label: '店内（テーブル席）', image: '/images/gallery/gallery1.png' },
    { label: 'カウンター席', image: '/images/gallery/gallery2.png' },
    { label: '掘りごたつ席', image: '/images/gallery/gallery3.png' },
    { label: '半個室席', image: '/images/gallery/gallery4.png' },
  ],
}
