/* movies object given */

var movies = [
    {
        title: 'Avengers: Age of Ultron',
        image: 'avengers',
        genre: 'Action, Adventure, Sci-Fi',
        rating: 'PG-13',
        runtime: 171,
        director: 'Joss Whedon',
        actors: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo'],
        release: 1428876000000,
        imdbrating: 8.3,
        imdblink: 'http://www.imdb.com/title/tt2395427'
    },
    {
        title: 'Big Eyes',
        image: 'big-eyes',
        genre: 'Biography, Drama',
        rating: 'PG-13',
        runtime: 106,
        director: 'Tim Burton',
        actors: ['Amy Adams', 'Christoph Waltz', 'Danny Huston'],
        release: 1415833200000,
        imdbrating: 7.0,
        imdblink: 'http://www.imdb.com/title/tt1126590'
    },
    {
        title: 'Ex Machina',
        image: 'ex-machina',
        genre: 'Drama, Sci-Fi',
        rating: 'R',
        runtime: 108,
        director: 'Alex Garland',
        actors: ['Alicia Vikander', 'Domhnall Gleeson', 'Oscar Isaac'],
        release: 1421794800000,
        imdbrating: 8.1,
        imdblink: 'http://www.imdb.com/title/tt0470752'
    },
    {
        title: 'The Gunman',
        image: 'gunman',
        genre: 'Action, Crime, Drama',
        rating: 'R',
        runtime: 115,
        director: 'Pierre Morel',
        actors: ['Sean Penn', 'Idris Elba', 'Jasmine Trinca'],
        release: 1424041200000,
        imdbrating: 5.6,
        imdblink: 'http://www.imdb.com/title/tt2515034'
    },
    {
        title: 'The Longest Ride',
        image: 'longest-ride',
        genre: 'Drama, Romance',
        rating: 'PG-13',
        runtime: 139,
        director: 'George Tillman Jr.',
        actors: ['Scott Eastwood', 'Britt Robertson', 'Alan Alda'],
        release: 1428616800000,
        imdbrating: 7.2,
        imdblink: 'http://www.imdb.com/title/tt2726560'
    },
    {
        title: 'Shaun the Sheep Movie',
        image: 'shaun-the-sheep',
        genre: 'Animation, Adventure, Comedy',
        rating: 'G',
        runtime: 85,
        director: 'Mark Burton, Richard Starzak',
        actors: ['Justin Fletcher', 'John Sparkes', 'Omid Djalili'],
        release: 1422054000000,
        imdbrating: 7.6,
        imdblink: 'http://www.imdb.com/title/tt2872750'
    }
];

/* cinema schedule given */

var schedule = [
    {
        'Avengers: Age of Ultron' : ['13:30', '15:00', '16:30', '17:00', '22:30'],
        'Big Eyes' : ['10:15', '16:45', '19:30'],
        'Ex Machina' : ['10:30', '14:00', '17:00', '19:45', '23:00'],
        'The Gunman' : [],
        'The Longest Ride' : [],
        'Shaun the Sheep Movie' : ['10:30', '14:15', '16:00']
    },
    {
        'Avengers: Age of Ultron' : ['13:30', '16:30', '17:00', '19:15', '22:30'],
        'Big Eyes' : ['10:15', '16:45', '19:30'],
        'Ex Machina' : ['10:30', '14:00', '17:00', '19:45', '23:00'],
        'The Gunman' : [],
        'The Longest Ride' : [],
        'Shaun the Sheep Movie' : ['10:30', '14:15', '16:00']
    },
    {
        'Avengers: Age of Ultron' : ['13:30', '16:30', '17:00', '19:15', '19:30', '22:30'],
        'Big Eyes' : ['10:15', '16:45', '19:30'],
        'Ex Machina' : ['10:30', '14:00', '17:00', '19:45', '23:00'],
        'The Gunman' : ['20:30'],
        'The Longest Ride' : ['20:15', '20:30'],
        'Shaun the Sheep Movie' : ['10:30', '14:15', '16:00']
    }
];