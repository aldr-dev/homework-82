import mongoose from 'mongoose';
import config from './config';
import User from './models/User';
import Artist from './models/Artist';
import Album from './models/Album';
import Track from './models/Track';

const run = async () => {
  await mongoose.connect(config.database);
  const db = mongoose.connection;

  try {
    await db.dropCollection('albums');
    await db.dropCollection('artists');
    await db.dropCollection('tracks');
    await db.dropCollection('trackhistories');
    await db.dropCollection('users');
  } catch (e) {
    console.log('Skipping drop...');
  }

  const [BeyonceArt, TaylorSwift, TheWeeknd] = await Artist.create({
    name: 'Beyonce',
    image: 'fixtures/Beyonce.webp',
    information: 'Американская певица и актриса, получившая признание за свои альбомы "Lemonade" и "Beyoncé," а также за свои яркие выступления на сцене.',
  }, {
    name: 'Taylor Swift',
    image: 'fixtures/Taylor-Swift.jpeg',
    information: 'Американская певица и автор песен, знаменитая своими альбомами "1989" и "Folklore," а также успешными турне.',
  }, {
    name: 'The Weeknd',
    image: 'fixtures/The-Weeknd.jpeg',
    information: 'Канадский певец и продюсер, известный своими хитами "Blinding Lights" и "Starboy."',
  });

  const [DangerouslyInLove, Beyonce, Fearless, oneThousandNineHundredEightyNine, Starboy, BeautyBehindTheMadness] = await Album.create({
      artist: BeyonceArt,
      title: 'Dangerously in Love',
      dataRelease: '2003',
      image: 'fixtures/dangerously-in-love.jpg',
    }, {
      artist: BeyonceArt,
      title: 'Beyoncé',
      dataRelease: '2013',
      image: 'fixtures/beyonce.svg',
    }, {
      artist: TaylorSwift,
      title: 'Fearless',
      dataRelease: '2008',
      image: 'fixtures/fearless.png',
    }, {
      artist: TaylorSwift,
      title: '1989',
      dataRelease: '2014',
      image: 'fixtures/1989.jpeg',
    }, {
      artist: TheWeeknd,
      title: 'Starboy',
      dataRelease: '2016',
      image: 'fixtures/starboy.jpeg',
    }, {
      artist: TheWeeknd,
      title: 'Beauty Behind the Madness',
      dataRelease: '2015',
      image: 'fixtures/beauty-behind-the-madness.jpeg',
    }
  );

  await Track.create({
    album: DangerouslyInLove,
    title: '"Crazy in Love" (feat. Jay-Z)',
    duration: '3:56',
    trackNumber: 1,
    youTubeLink: 'https://www.youtube.com/watch?v=ViwtNLUqkMY&ab_channel=Beyonc%C3%A9VEVO',
  }, {
    album: DangerouslyInLove,
    title: '"Naughty Girl"',
    duration: '3:27',
    trackNumber: 2,
    youTubeLink: 'https://www.youtube.com/watch?v=RZuJ_OHBN78&ab_channel=Beyonc%C3%A9VEVO',
  }, {
    album: DangerouslyInLove,
    title: '"Baby Boy" (feat. Sean Paul)',
    duration: '4:05',
    trackNumber: 3,
    youTubeLink: 'https://www.youtube.com/watch?v=8ucz_pm3LX8&ab_channel=Beyonc%C3%A9VEVO',
  }, {
    album: DangerouslyInLove,
    title: '"Me, Myself and I"',
    duration: '4:04',
    trackNumber: 4,
    youTubeLink: 'https://www.youtube.com/watch?v=bSfpSOBD30U&ab_channel=GEazyMusicVEVO',
  }, {
    album: DangerouslyInLove,
    title: 'Speechless"',
    duration: '4:20',
    trackNumber: 5,
    youTubeLink: 'https://www.youtube.com/watch?v=mw5VIEIvuMI&ab_channel=DisneyMusicVEVO',
  }, {
    album: Beyonce,
    title: '"Pretty Hurts',
    duration: '4:17',
    trackNumber: 1,
    youTubeLink: 'https://www.youtube.com/watch?v=LXXQLa-5n5w&ab_channel=Beyonc%C3%A9VEVO',
  }, {
    album: Beyonce,
    title: '"Drunk in Love" (feat. Jay-Z)',
    duration: '3:51',
    trackNumber: 2,
    youTubeLink: 'https://www.youtube.com/watch?v=p1JPKLa-Ofc&ab_channel=Beyonc%C3%A9VEVO',
  }, {
    album: Beyonce,
    title: '"XO"',
    duration: '3:39',
    trackNumber: 3,
    youTubeLink: 'https://www.youtube.com/watch?v=3xUfCUFPL-8&ab_channel=Beyonc%C3%A9VEVO',
  }, {
    album: Beyonce,
    title: '"Partition"',
    duration: '3:50',
    trackNumber: 4,
    youTubeLink: 'https://www.youtube.com/watch?v=pZ12_E5R3qc&ab_channel=Beyonc%C3%A9VEVO',
  }, {
    album: Beyonce,
    title: '"Flawless" (feat. Chimamanda Ngozi Adichie)',
    duration: '4:10',
    trackNumber: 5,
    youTubeLink: 'https://www.youtube.com/watch?v=IyuUWOnS9BY&ab_channel=Beyonc%C3%A9VEVO',
  }, {
    album: Fearless,
    title: '"Fearless"',
    duration: '4:00',
    trackNumber: 1,
    youTubeLink: 'https://www.youtube.com/watch?v=7lLigiVgJsE&ab_channel=TaylorSwiftVEVO',
  }, {
    album: Fearless,
    title: '"Love Story"',
    duration: '3:55',
    trackNumber: 2,
    youTubeLink: 'https://www.youtube.com/watch?v=8xg3vE8Ie_E&ab_channel=TaylorSwiftVEVO',
  }, {
    album: Fearless,
    title: '"Hey Stephen"',
    duration: '4:15',
    trackNumber: 3,
    youTubeLink: 'https://www.youtube.com/watch?v=tMhiHrL7rPE&ab_channel=TaylorSwiftVEVO',
  }, {
    album: Fearless,
    title: '"White Horse"',
    duration: '3:55',
    trackNumber: 4,
    youTubeLink: 'https://www.youtube.com/watch?v=D1Xr-JFLxik&ab_channel=TaylorSwiftVEVO',
  }, {
    album: Fearless,
    title: '"You Belong with Me"',
    duration: '3:52',
    trackNumber: 5,
    youTubeLink: 'https://www.youtube.com/watch?v=VuNIsY6JdUw&ab_channel=TaylorSwiftVEVO',
  }, {
    album: oneThousandNineHundredEightyNine,
    title: '"Blank Space"',
    duration: '3:51',
    trackNumber: 1,
    youTubeLink: 'https://www.youtube.com/watch?v=e-ORhEE9VVg&ab_channel=TaylorSwiftVEVO',
  }, {
    album: oneThousandNineHundredEightyNine,
    title: '"Style"',
    duration: '3:51',
    trackNumber: 2,
    youTubeLink: 'https://www.youtube.com/watch?v=-CmadmM5cOk&ab_channel=TaylorSwiftVEVO',
  }, {
    album: oneThousandNineHundredEightyNine,
    title: '"Bad Blood"',
    duration: '3:30',
    trackNumber: 3,
    youTubeLink: 'https://www.youtube.com/watch?v=QcIy9NiNbmo&ab_channel=TaylorSwiftVEVO',
  }, {
    album: oneThousandNineHundredEightyNine,
    title: '"Wildest Dreams"',
    duration: '3:40',
    trackNumber: 4,
    youTubeLink: 'https://www.youtube.com/watch?v=IdneKLhsWOQ&ab_channel=TaylorSwiftVEVO',
  }, {
    album: oneThousandNineHundredEightyNine,
    title: '"Shake It Off"',
    duration: '3:39',
    trackNumber: 5,
    youTubeLink: 'https://www.youtube.com/watch?v=nfWlot6h_JM&ab_channel=TaylorSwiftVEVO',
  }, {
    album: Starboy,
    title: '"Starboy" (feat. Daft Punk)',
    duration: '3:50',
    trackNumber: 1,
    youTubeLink: 'https://www.youtube.com/watch?v=34Na4j8AVgA&ab_channel=TheWeekndVEVO',
  }, {
    album: Starboy,
    title: '"Party Monster"',
    duration: '3:13',
    trackNumber: 2,
    youTubeLink: 'https://www.youtube.com/watch?v=diW6jXhLE0E&ab_channel=TheWeekndVEVO',
  }, {
    album: Starboy,
    title: '"False Alarm"',
    duration: '3:45',
    trackNumber: 3,
    youTubeLink: 'https://www.youtube.com/watch?v=CW5oGRx9CLM&ab_channel=TheWeekndVEVO',
  }, {
    album: Starboy,
    title: '"Reminder"',
    duration: '3:39',
    trackNumber: 4,
    youTubeLink: 'https://www.youtube.com/watch?v=JZjAg6fK-BQ&ab_channel=TheWeekndVEVO',
  }, {
    album: Starboy,
    title: '"I Feel It Coming" (feat. Daft Punk)',
    duration: '4:29',
    trackNumber: 5,
    youTubeLink: 'https://www.youtube.com/watch?v=qFLhGq0060w&ab_channel=TheWeekndVEVO',
  }, {
    album: BeautyBehindTheMadness,
    title: '"Real Life"',
    duration: '4:28',
    trackNumber: 1,
    youTubeLink: 'https://www.youtube.com/watch?v=RVJaTAOPabk&ab_channel=haileynicoleabbott',
  }, {
    album: BeautyBehindTheMadness,
    title: '"Losers" (feat. Labrinth)',
    duration: '3:58',
    trackNumber: 2,
    youTubeLink: 'https://www.youtube.com/watch?v=1TFnXe-Jr-Q&ab_channel=%C5%BDeljkoMili%C4%87',
  }, {
    album: BeautyBehindTheMadness,
    title: '"Can\'t Feel My Face"',
    duration: '3:35',
    trackNumber: 3,
    youTubeLink: 'https://www.youtube.com/watch?v=KEI4qSrkPAs&ab_channel=TheWeekndVEVO',
  }, {
    album: BeautyBehindTheMadness,
    title: '"The Hills"',
    duration: '4:02',
    trackNumber: 4,
    youTubeLink: 'https://www.youtube.com/watch?v=yzTuBuRdAyA&ab_channel=TheWeekndVEVO',
  }, {
    album: BeautyBehindTheMadness,
    title: '"Often"',
    duration: '3:52',
    trackNumber: 5,
    youTubeLink: 'https://www.youtube.com/watch?v=JPIhUaONiLU&ab_channel=TheWeekndVEVO',
  });

  const user = new User({
    username: 'admin',
    password: 'admin',
  });
  user.generateToken();
  await user.save();

  await db.close();
};

run().catch(console.error);