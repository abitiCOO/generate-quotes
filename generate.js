let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quotes = [
   '"I\'m going to make him an offer he can\'t refuse." - The Godfather, 1972' ,
     '"Mama always said life was like a box of chocolates. You never know what you\'re gonna get." - Forrest Gump, 1994' ,
      '"If you build it, he will come." Field of Dreams, 1989',
       '"Go ahead, make my day." - Sudden Impact, 1983' ,
      '"I have always depended on the kindness of strangers" - A Streetcar Named Desire, 1951',
        '"Just keep swimming" - Finding Nimo, 2003' ,
        '"You Either Die A Hero Or Live Long Enough To See Yourself Become The Villain." The Dark Knight, 2008' ,
        '"Don\'t Be What They Made You." - Logan, 2017' ,
        '"If You\'re Nothing Without The Suit, Then You Shouldn\'t Have It." - Spider-Man: Homecoming, 2017' ,
        '"Just Because Someone Stumbles And Loses Their Path, Doesn\'t Mean They\'re Lost Forever." - X-Men: Days of Future Past, 2014' ,
        '"It\'s Not Who I Am Underneath, But What I Do That Defines Me." - Batman Begins, 2005' ,
        '"And I Am... Iron Man." - Avengers: Endgame, 2019' ,
       ' "With Great Power, Comes Great Responsibility." - Spider-Man, 2002' ,
       ' "I Believe There\'s A Hero In All Of Us That Keeps Us Honest" - Spider-Man 2, 2004' ,
        '"Not everyone can become a great artist, but a great artist can come from anywhere." - Ratatouuille 2007' ,
        '"There is no greater gift than friendship." - The Polar Express, 2004' ,
        '"Look inside yourself. You are more than what you have become." - The Lion-King, 1994' ,
        '"Your identity is your most valuable possession. Protect it." - The Incredibles, 2004' ,
        '"To laugh at yourself, is to love yourself." - Mickey Mouse, 1928' ,
        '"All it takes is little faith and trust." - Peter Pan, 2003 ',
        '"Do not be fooled by commonplace appearance. Like so many things, it is not what outside, but what is inside that counts." - Aladdin, 1992' ,
        '"Your mind is like water. When it is agitated it becomes difficult to see, but when you let it settle; the answer becomes clear." - Kung Fu Panda, 2008' ,
        '"I\'m only brave enough when I have to be. Being brave doesn\'t mean you go looking for trouble." - The Lion-King, 1994' ,
        '"If you work on something long enough you will find it, even if you are lost for a while you will find it." - Epic, 2013' ,
        '"Cold never bothered me anyway." - Frozen, 2013' ,

]

btn.addEventListener('click', function() {
    var randomQuotes = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuotes

});