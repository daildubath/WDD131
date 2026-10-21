
const movies = [
    {
        title: "Spider-Man: Into the Spider-Verse",
        date: "Dec 14, 2018",
        description: "Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/spiderman.png",
        imgAlt: "Miles Morales swinging through the city",
        ages: "10+",
        genre: "Action/Adventure",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "The Other Side of Heaven",
        date: "December 14, 2001",
        description: "Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/heaven.png",
        imgAlt: "Poster for The Other Side of Heaven showing a missionary and tropical landscape",
        ages: "10+",
        genre: "Drama/Religious",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "Luca",
        date: "June 18, 2021",
        description: "Two sea monsters experience a life-changing summer on the Italian Riviera.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/luca.png",
        imgAlt: "Luca and Alberto standing on the beach",
        ages: "6+",
        genre: "Family/Fantasy",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "17 Miracles",
        date: "June 3, 2011",
        description: "A moving depiction of the Willie Handcart Company's journey west in 1856, focusing on the miraculous events that helped early pioneers survive one of the harshest migrations in history.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/miracles.jpg",
        imgAlt: "Movie poster for 17 Miracles showing handcart pioneers walking through snow",
        ages: "12+",
        genre: "Historical/Religious",
        stars: "⭐⭐⭐⭐"
    },
    // thanks to AI for all of the broken images (:
    {
        title: "Once I Was a Beehive",
        date: "August 14, 2015",
        description: "After her father passes away, a grieving teenage girl attends a Young Women summer camp where she finds unexpected friendship, humor, and healing.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/2/23/Once_I_Was_a_Beehive_poster.jpg",
        imgAlt: "Teenage girls standing at a summer camp in Once I Was a Beehive",
        ages: "8+",
        genre: "Comedy/Drama",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "The Work and the Glory",
        date: "November 24, 2004",
        description: "A fictional 19th-century family moves to New York and finds their strong family bonds tested by religious conflict and new beliefs.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/9/90/Work_and_the_glory_poster.jpg",
        imgAlt: "The Work and the Glory movie poster depicting the Steed family",
        ages: "10+",
        genre: "Historical/Drama",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "Meet the Mormons",
        date: "October 10, 2014",
        description: "A documentary following the diverse, inspiring daily lives of six devout members of The Church of Jesus Christ of Latter-day Saints across the globe.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/b/b8/Meet_the_Mormons_poster.jpg",
        imgAlt: "Poster for the documentary film Meet the Mormons",
        ages: "6+",
        genre: "Documentary/Faith",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Trek: The Movie",
        date: "April 6, 2018",
        description: "A group of teenagers embark on a youth pioneer handcart trek reenactment filled with humor, unexpected hardships, and self-discovery.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/7/7f/Trek_The_Movie_poster.jpg",
        imgAlt: "Teens pulling a handcart across open fields on pioneer trek",
        ages: "8+",
        genre: "Comedy/Family",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "Ephraim's Rescue",
        date: "May 31, 2013",
        description: "The true story of Ephraim Hanks, a man who answered the call to lead a heroic rescue attempt for stranded pioneer handcart companies in 1856.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/c/c8/Ephraim%27s_Rescue_poster.jpg",
        imgAlt: "Ephraim Hanks standing in snow carrying pioneer supplies",
        ages: "10+",
        genre: "Historical/Drama",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "The Prince of Egypt",
        date: "December 18, 1998",
        description: "An epic animated film recounting the biblical story of Moses, from his royal upbringing in Egypt to leading the Israelites out of captivity.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/7/76/Prince_of_egypt_ver2.jpg",
        imgAlt: "Moses holding a staff in front of the parting Red Sea",
        ages: "7+",
        genre: "Animation/Biblical",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Finding Nemo",
        date: "May 30, 2003",
        description: "An overly cautious clownfish embarks on a dangerous journey across the ocean to rescue his captured son, Nemo.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/2/29/Finding_Nemo.jpg",
        imgAlt: "Marlin and Dory swimming alongside sea turtles",
        ages: "5+",
        genre: "Animation/Adventure",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "The Cokeville Miracle",
        date: "June 5, 2015",
        description: "Based on true events, an elementary school hostage crisis in Wyoming resolves through compelling accounts of prayer and divine protection.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/52/The_Cokeville_Miracle_poster.jpg",
        imgAlt: "Movie poster showing Cokeville Elementary School",
        ages: "12+",
        genre: "Drama/Faith",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "Paddington 2",
        date: "January 12, 2018",
        description: "Paddington Bear gets framed for stealing a rare pop-up book and relies on his adopted family to clear his name.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/2/28/Paddington_2_poster.jpg",
        imgAlt: "Paddington Bear holding marmalade sandwiches",
        ages: "6+",
        genre: "Comedy/Family",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Inside Out",
        date: "June 19, 2015",
        description: "Inside a young girl's mind, five personified emotions navigate her family's move to a new city and learn the value of emotional growth.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/0/0a/Inside_Out_%282015_film%29_poster.jpg",
        imgAlt: "Emotion characters Joy, Sadness, Anger, Fear, and Disgust",
        ages: "6+",
        genre: "Animation/Family",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Saints and Soldiers",
        date: "August 6, 2004",
        description: "Four Allied soldiers and a downed British pilot navigate behind enemy lines in WWII Europe, bound by honor and faith.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/e/e0/Saints_and_Soldiers_poster.jpg",
        imgAlt: "Soldiers trekking through snow-covered woods in World War II",
        ages: "12+",
        genre: "War/Drama",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Johnny Lingo",
        date: "January 1, 1969",
        description: "A classic short film that teaches self-worth and human dignity through the story of a island trader and his famous eight-cow bargain.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/7/70/Johnny_Lingo_1969_poster.jpg",
        imgAlt: "Johnny Lingo and Mahana in a Pacific Island village",
        ages: "6+",
        genre: "Family/Short",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "Up",
        date: "May 29, 2009",
        description: "An elderly widower ties thousands of balloons to his house to travel to South America, accidentally bringing a young scout along.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/0/05/Up_%282009_film%29.jpg",
        imgAlt: "House floating in the air lifted by colorful helium balloons",
        ages: "6+",
        genre: "Animation/Adventure",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "WALL-E",
        date: "June 27, 2008",
        description: "A lonely trash-compacting robot on a deserted future Earth falls in love with a sleek probe named EVE and follows her across space.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/c/c2/WALL-E_poster.jpg",
        imgAlt: "WALL-E the robot looking up towards the stars",
        ages: "5+",
        genre: "Animation/Sci-Fi",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Joseph Smith: Prophet of the Restoration",
        date: "December 17, 2005",
        description: "A depiction of the life, faith, trials, and legacy of Joseph Smith, founder of The Church of Jesus Christ of Latter-day Saints.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/2/2c/Joseph_Smith_Prophet_of_the_Restoration.jpg",
        imgAlt: "Joseph Smith standing in 19th-century attire looking upward",
        ages: "8+",
        genre: "Biography/Religious",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Charly",
        date: "September 27, 2002",
        description: "A carefree young woman named Charly meets Sam, an idealistic Latter-day Saint man, sparking a relationship that changes both of their lives.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/1/1a/Charly_movie_poster.jpg",
        imgAlt: "Sam and Charly sitting together on a grassy hill",
        ages: "12+",
        genre: "Romance/Drama",
        stars: "⭐⭐⭐⭐"
    }
];

let movieList = document.querySelector("#movie-list");

movies.forEach(movie => {

    let article = `

        <article class="movie">
        <h2>${movie.title}</h2>
        <img src="${movie.imgSrc}" alt="${movie.imgAlt}">
        <p><strong>Release Date:</strong> ${movie.date}</p>
        <p><strong>Recommended Age:</strong> ${movie.ages}</p>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Rating:</strong> <span>${movie.stars}</span></p>
        <p id='desc'>${movie.description}</p>
        </article>

        `
    movieList.innerHTML += article;

});
