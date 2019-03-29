import React from "react";
import battlesnake2018logo from "../../assets/img/battlesnake2018/battlesnake-2018.jpg";
import event1Img from "../../assets/img/battlesnake2018/event1-2018.jpg"

export default class Battlesnake2018 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "BATTLESNAKE 2018"
    }
  }

  render() {
    return (
      <div className="article">
        <section className="fadeIn">
        <h3 datatext={this.state.title}><span className="underline">{this.state.title}</span>
        </h3>
        </section>
        <section className="fadeIn">
          <div className="image">
            <img src={battlesnake2018logo} alt="battlesnake logo from 2018" />
          </div>
          <h3><span className="underline">
            TL;DR
          </span></h3>
          <ol>
            <li>
              <a>Background</a> - <a>Battlesnake</a> is a programming competition where students and industry professionals develop an AI to play a multiplayer version of the classic game <a>Snake</a>.
            </li>
            <li>
              <a>First Year Competing (2018)</a> - I was very excited to discover this competition and thought it would be a great way to learn Python.
            </li>
            <li>
              <a>Getting Started</a> - Set up a basic "starter snake" provided by <a>sendwithus</a>.
            </li>
            <li>
              <a>Learning the A* Algorithm</a> - After getting use to Python and concept of <a>Battlesnake</a>, I needed to give my snake some smarts.
            </li>
            <li>
              <a>Building a Flood Fill Algorithm</a> - Now that my snake could find its way around, it needed to see beyond its target.
            </li>
            <li>
              <a>Basic Behaviour Switching</a> - With a few basic behaviors coded, I needed to be able to switch between them given some parameters.
            </li>
            <li>
              <a>Agressive Behaviour</a> - Basic survival is taken care of. Now I wanted to be able to hunt my opponents.
            </li>
            <li>
              <a>The Event</a> - The competition consists of a "Bounty Snake" section where you can challenge the sponsors to duels. After that is the tournament itself comprised of Beginner, Intermediate, and Expert divisions.
            </li>
            <li>
              Code for 2018 is on <a>Github</a>.
            </li>
          </ol>
        </section>

        <section className="fadeIn">
          <h3><span className="underline">
            BACKGROUND
          </span></h3>
          <p>
            <a href="https://www.battlesnake.io" alt="Battlesnake official website">Battlesnake</a> is a programming competition where competitors develop an6 AI to play a multiplayer version of the classic game <a href="https://en.wikipedia.org/wiki/Snake_(video_game_genre)" alt="classic game of Snake">Snake</a>. Teams are comprised of individuals, groups, students, and industry professionals. My first entry into the competition was in 2018, but the event has its roots as early as 2013 where some people from sendwithus (now <a href="https://www.dyspatch.io/sendwithus/" alt="dispatch website">Dyspatch</a>) got together for a friendly programming competition.
          </p>
          <p>
            A “snake” is essentially an API (Application Program Interface). This API has several required endpoints such as <code>start</code> and <code>move</code>. For every move, the game server will send a <code>POST</code> request to each snakes <code>move</code> endpoint, with the entire game state in the body of the request. You have 250ms (including your network transit time) to respond with a move, either “up”, “down”, “left”, or “right”. Once each snake has responded, the moves are played out on the board simultaneously. If a snake hits a wall or another snakes body, it dies. If a snake eats food, it grows. If snakes collide head-on, the larger snake will overpower a smaller snake, and the smaller snake will die. The object of the game is to be the last snake alive. The competition is divided into three categories: Beginner, Intermediate, and Expert. Within each bracket, there is a round-robin tournament to determine the winners.
          </p>
          <p>
            The day long event is divided into different sections. Early in the day there is the opportunity for newcomers to begin setting up and developing their AI from scratch. Experienced developers are there to provide assistance in developing and deploying fresh snakes. Midway through the day the field opens for people to challenge what are known as Bounty Snakes. Sponsors of the event are able to set up booths were participants are able to challenge the sponsor to a sort-of duel. Sponsor participating with Bounty Snakes can opt to have their own unique rules to the game format, forcing challengers to adapt their strategies the day of the event. Each Bounty Snake will have some kind of unique prize for defeat. Generally they consist of a small prize such as a t-shirt, and an entry into a raffle into their grand prize. Around 4pm, the tournament begins. Starting with the Beginner division, each tournament is played out on the big screen for all the participants to watch live. Prizes of up to $4,000 are awarded for a podium placing.
          </p>
          <div className="image">
            <img src={event1Img} alt="battlesnake logo from 2018" />
          </div>
        </section>

        <section className="fadeIn">
          <h3><span className="underline">
            FIRST YEAR COMPETING
          </span></h3>
          <p>
            2018 was my first entry into <a href="https://www.battlesnake.io" alt="battlesnake official website">Battlesnake</a>. The event was just coming into its own at this point, moving from the University of Victoria downtown to the events centre. Going into this I wasn’t sure what to expect. I just just really getting into the idea of software development in my second year of a Computer Science undergraduate and was eager to try out some of my newly developed skills.
          </p>
          <p>
            Also remember, one of the great things about a competition like this is that there are essentially infinite ways of approaching the task. Some people do tree searches through the possible board states, some people build a more specific AI architecture, some even have started incorporating machine learning into their snakes. I am unsure if any strategy is the “best” strategy, and this is just me documenting my journey and particular strategies as I became fascinated with this game.
          </p>
        </section>

        <section className="fadeIn">
          <h3><span className="underline">
            GETTING STARTED
          </span></h3>
          <p>
            I decided to write my first entry in Python. At the time I had been into Java for a while with school and was excited to learn Python; and what a better opportunity. I began with one of the provided “starter snakes” which are basic repositories with a simple server setup with the required endpoints, but no logic within those endpoints. Generally the starter snakes just move up upon a <code>move</code> request.
          </p>
          <p>
            With the starter snake as a base, my first goal was to get the snake to chase its tail. Circling on your own tail seems to be a tried and tested method for basic survival so that seemed like a good place to start. Looping over an array of directions and returning a new one each time lets you blindly return a new direction each time. This sort of works, but the snake is still unaware of its surroundings and will still bump into walls, other snakes, and even itself occasionally. What is needed next is to give the snake some eyes so it can see if the next move is deadly or ok.
          </p>
          <p>
            I decided the simplest was to do this was to build myself a representation of the board. Each turn you are sent the board dimensions (which don’t change during the course of a round, but could change round-to-round), locations of all the snakes (for each snake a list of the positions of each body segment), and a list of food locations. At the start of each turn, I build a 2-dimensional array representing the game board, and plot all the snakes and food on it. I set up a simple numbering system representing the different possible board cells in a sort of increasing danger rating. 0 for space, 1 for food, 2 for snake body, and out of bounds represents the board edges. Now, after I pick a move, I can determine what the x, y coordinates of that move will be based on my current location, and I can check if that move will kill me or not based on the current board state. If it is deadly, pick another move. Basic sight!
          </p>
          <p>
            With just this simple start your snake can spin around in a circle and survive for a while. The problem is you have an ever decreasing amount of health, and you need to eat food to replenish it. You begin with 100 health, and each move you take this is decremented by 1. If you reach 0 you die. So you have to eat! But in order to find food to eat reliably when you are getting hungry, your snake will need a little more smarts that just its basic sense of sight.
          </p>
        </section>

        <section className="fadeIn">
          <h3><span className="underline">
            LEARNING THE A* ALGORITHM
          </span></h3>
          <p>
            In order to choose a move that will get you closer to a particular destination, you will need to implement some form of pathfinding. When looking into pathfinding algorithms, <a href="https://en.wikipedia.org/wiki/A*_search_algorithm" alt="a star algorithm on wikipedia">A*</a> almost always comes up at the top of the list. Thinking now I don’t think I can explain it in an understandable way, but the resource I used to initially learn and implement the algorithm was a video from <a href="https://shiffment.net" alt="Daniel Shiffman's personal website">Daniel Shiffman</a> entitled <a href="https://www.youtube.com/watch?v=aKYlikFAV4k" alt="a star pathfinding youtube tutorial">A* Pathfinding Algorithm</a>. He guides you through the algorithm and you can follow along and implement it in JavaScript with the p5.js library. You can see my old implementation here [LINK TO A* THINGER]. Also if you are building your snake with JavaScript and Node, you can just reuse this code! For my first snake I translated this code into Python.
          </p>
          <p>
            With this algorithm you can find the shortest path between a start point and a destination. Your start point will likely be your current head location, and the first destination point I choose was the closest food. I originally wrote this algorithm with my snakes head and the closest food sort of hard-wired in, but later refactored it so that I can pass in any arbitrary start and destination points I want. Also within the algorithm you want to tell it to treat out of bounds as well as all snake body segments as “no go” areas. Basically the walls or obstacles that you are finding a path around. Within the search function I wrote, once you have found the optimal path to your destination, you actually just need to figure out which direction you need to go next. Basically every turn you will be doing this search again and again and just moving whatever it tells you the next move will be. There is no sense in recording or remembering the whole path as the game is filled with other snakes that are also moving every turn, so the optimal path may change from turn to turn.
          </p>
          <p>
            One other thing to note that will start becoming very apparent at this point in your snake development is that maybe there is no path to where you want to go. Maybe a food exists on the board but is completely blocked from you on the current turn. You just want to make sure you are handling situations like that gracefully and avoiding exceptions or other “panic” behaviour that might creep up. Just develop some kind of strategy for when you are unsure which move will get you closer to your destination.
          </p>
          <p>
            An optimisation to the earlier tail-following behavior is that you can use this A* algorithm to find the best move that brings you closer to your tail! You can just pass your tail location to the algorithm rather than a food location as the destination. This is a bit more robust a way to follow your tail rather than looping through a series of move like I initially implemented. Using the A* search allows you to be any size and anywhere on the board. It also makes it so you can follow yourself clockwise or counter-clockwise depending on which is better given the board state.
          </p>
          <p>
          Now that my snake could find food it could survive much longer than 100 turns! At this level you could be well into the beginner category. And every time you improve your snakes smarts and survivability, new problems start to become apparent. The next glaring issue that I began to notice is that my snake loved to travel down into dead ends. The snake was smart enough to find a food and seek it out, but not plan for what would happen after it ate the food.
          </p>
        </section>

        <section className="fadeIn">
          <h3><span className="underline">
            BUILDING A FLOOD FILL ALGORITHM
          </span></h3>
          <p>
            Essentially, the next behaviour I thought of building to combat this tendency to go into small spaces and die, was to build an algorithm to count how large a space was. If the space was too small to fit, or another direction would lead to a large open area, take that into account when choosing the next move.
          </p>
          <p className="aside">
            Sidenote: This was the moment when I should have realized that a move scoring system was the way to go. Next year I would implement this with great success, but this first year I basically stuck to a bunch of `if else` statements. It is really difficult to balance the importance of different signals if you don’t have some kind of weights on them that you can tune. For example, if you have two possible moves, left and right, and there is a food to the left, but much more space to the right, how do you value them? Which move do you choose? With a scoring system, you can apply a score to each move and sum them up in the end, choosing the move with the highest score. This is what I went on to build next year, but more on that in a different post.
          </p>
          <p>
            I believe what I was doing last year was essentially testing to see if my snake length could fit into the area accessible by my next move. I would do my A* search first to see which direction I would prefer to go, and then do the flood fill on that move to see if I can fit. If I couldn’t fit I would choose a different move, abandoning my pursuit of food. This approach sort of helps you to avoid these small areas that will easily trap you, but tramples over a lot of subtlety. For example, if there are snake tails within the area, that area will be expanding, so it is much more sensible for you to move into it. In the same vein, if there are snake heads within the area, the space will shrink as the game progresses. Taking these into consideration is a really good idea.
          </p>
          <p>
            A great tip for beginner programmers is that when you are developing and writing these algorithms, try to write them in reusable ways. Don’t necessarily hard-code your snake to behave in one way.
          </p>
        </section>
        
        <section className="fadeIn">
          <h3><span className="underline">
            AGGRESSIVE BEHAVIOUR
          </span></h3>
          <p>
            Now that my snake had some basic survival skills, I wanted to try to do something a little different. I got the idea of trying to make my snake actively aggressive towards its opponents.
          </p>
          <p>
            When two snakes move in to the same space it is a head-on collision, and the rules state that if one snake is larger (in length) than the other snake, the larger one will win and the smaller snake will die. When a snake dies in the game all of its body segments are immediately removed from the board.
          </p>
          <p>
            So my plan was to use my A* algorithm to seek out other snake heads. Strictly speaking, not target their head, but target the next move that then can make. So I altered my initial board state creation to mark <code>KILL_ZONE</code> for spaces a smaller snake than me could move next, and <code>DANGER_ZONE</code> for spaces a larger or equal size snake than me could move next. So now my board had these possible cell states:
            <ol>
              <li>
                <code>SPACE</code>
              </li>
              <li>
                <code>KILL_ZONE</code>
              </li>
              <li>
                <code>FOOD</code>
              </li>
              <li>
                <code>DANGER_ZONE</code>
              </li>
              <li>
                <code>SNAKE_BODY</code>
              </li>
            </ol>
            I ranked them in order of danger so that in my A* algorithm when testing if a cell is a valid spot for a path I can simply test if its board value is <code>&lt; SNAKE_BODY</code>.
          </p>
          <p>
            Now with the <code>KILL_ZONE</code> markings available, I could simply find the one closest to myself and use my A* to target it.
          </p>
          <p>
            The next thing I wanted to do was to insure I was the biggest snake on the board, so that I could aggress any other snake I wanted. In the section of my code where I was determining which behaviour to use, I would not only test to see if I needed to eat because of hunger, but also if I needed to eat because I wasn’t the longest snake on the board. This behaviour works well sometimes but it has the fatal flaw that there can be other snakes with the same behaviour. You both can get into a sort of feeding frenzy where you are always trying to get bigger than the other snake. You both end up getting really long and it is only a matter of time before one of you makes a mistake and gets trapped. I did not fix this issue for this year and it seemed alright, just something to keep in mind.
          </p>
          <p>
            So now my snake will eat if it is hungry or if there exist snakes larger than it, and it will target the nearest smaller snake if it is the largest on the board. I actually found that this quite simple behaviour has some really interesting and powerful emergent behaviours that I didn’t code for.
          </p>
          <p>
            The first that I noticed is that it is very effective at dealing with the “chicken-snake” strategy. As a chicken snake is spinning away, minding its own business, my snake would be targeting its head, essentially following it around. Since the other snake is smaller and spinning ina ball, my snake would wrap around it, trapping it. When the “chicken-snake” decided it had been spinning for long enough and it was time to eat, there was nowhere to go. Chances were that it might not be able to escape and get to food. If I didn’t kill it first by a head-on collision, I might be able to starve it.
          </p>
          <p>
            The other interesting behaviour I noticed is similar to above, but instead of surrounding the opponent snake, I would block it against a wall. My snake wasn’t smart enough at the time to notice if it could create a dead end of the other snake, but it could keep it against the wall for a long time, essentially starving it.
          </p>
          <p>
            This aggressive behaviour actually seemed to work very well. 1-1 my snake was quite strong at this point (a friend of mine who went on to win 2nd place in the Intermediate division I could defeat almost all the time 1-1).
          </p>
          <p>
            There are a few oversights in my strategy up to this point that I was aware of, but had run out of time to address. One was the eating behaviour that could lead to me getting very big and potentially killing myself. Another was that I didn’t necessarily need to be the biggest snake on the board at all times. There are plenty of opportunities to act aggressive to larger snakes while staying small. And lastly but more importantly, there were still tons of small bugs and edge cases that I just wasn’t accounting for. There were still cases where given two possible moves, my snake was unable to see far enough ahead, or see in enough detail, to choose the best one. Building a robust logging solution is a must so that you can look back one a game to the move where your snake made a vital decision and you can debug why it may have made the wrong one. I had some basic console logging at this point but nothing nearly good enough.
          </p>
          <p>
            But time to work on it was winding down, and the event was coming up.
          </p>
        </section>

        <section className="fadeIn">
          <h3><span className="underline">
            THE EVENT
          </span></h3>
          <p>
            This year the event moved venues from the University of Victoria to the Events Centre downtown Victoria. The Events Centre is a much larger venue and could hold many more competitors as well as sponsor booths.
          </p>
          <p>
            Like I said at the beginning, the day of the event is divided into sections. In the morning people can converse and mingle, and newcomers can get help on getting their snakes setup and working. Then lunch is provided by a bunch of great food trucks in town (<a href="http://www.deadbeetz.com/" alt="dead beets food truck website">Dead Beetz</a> is definitely my favorite go-to burger!).
          </p>
          <p>
            After lunch the Bounty Snake challenge opens to everyone. This part is a lot of fun. You are able to visit each sponsors booth where they usually have some free swag. But also, more crucially, they have a snake of their own which you can challenge to a dual. Each sponsor has different prizes available to competitors who can defeat their snake. This year I actually won a terrific prize of $1000 from the local company <a alt="roof website" href="https://www.rooof.com/">Rooof</a>!
          </p>
          <p>
            Around 4:00 is when the actual competition begins. The setup this year was fantastic. They had two projectors showing the live games to an audience of around 800 people. They had live commentary and were also streaming the entire event live on <a href="https://www.twitch.tv/battlesnakeio" alt="official battlesnake twitch channel">Twitch</a>. They do each bracket separately moving from Beginner to Intermediate and then Expert.
          </p>
          <p>
            I participated in Beginner this year as it was my first event. I was actually a little worried that my snake was too strong for beginner as I knew that some people entering had only started on their AI that day. Well I would be proven very wrong on that front. I won the first round I played and made it to the next head which was very exciting indeed. But alas I was knocked out in the next round, seemingly to some kind of bug (my snake hit another snake with possible move to avoid it existing). Oh well! It was so much fun to watch all the other snakes compete and to see everyones interesting and novel strategies. The top player in the expert division won $5,000, and in his little acceptance speech he said he was very glad to win as this money will partly cover his AWS bills for his snake! Holy cow!
          </p>
        </section>

        <section className="fadeIn">
          <h3><span className="underline">
            CONCLUSION
          </span></h3>
          <p>
            I think this is such a great event to participate in. The challenge itself of creating an AI to play this game is just such a great way to practice and build your coding skills. Everyone has the same 250ms to respond to each move request, but what you do in that time is all up to you. It is accessible to beginner programmers, but still an interesting challenge for a seasoned professional. I had a great time connecting with other students and industry professionals. I see myself participating every year that I can!
          </p>
        </section>

        <section className="fadeIn">
          <p>
            My code for 2018 is available on <a>github</a> [LINK TO 2018 REPO].
          </p>
        </section>

        <section className="fadeIn">
          <p>
            I'll see you next year,<br />
            zeroCool
          </p>
        </section>
      </div>
    )
  }
}
{/* <span className="inline-code"></span> */}