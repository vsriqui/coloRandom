# ColoRandom

### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
We built a web-based application that generates randomized 5-color palettes, including the hex codes for each color. The user can request a completely new palette by clicking the "New Palette" button, or they can lock in their favorite colors and randomize the rest until they've compiled a unique color palette that they love. The "Save Palette" button stores all the users favorite palettes to the "Saved Palettes" section, where scroll functionality allows them to browse their unlimited collection of saved palettes and click to delete the ones they no longer want to keep saved. Finally, the user can reselect any palette from their saved collection and edit the colors, all without altering the original palette. This application is a great resource for users who are interested in finding inspiring color schemes to use in their creative projects and every day life.

### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)
1. Fork this repository
2. Clone it down to your machine
3. `cd` into the directory
4. Run `open index.html` to launch the application in your default browser

### Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)
![scroll functionality](https://imgur.com/MikTsSn.gif)

### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)
This project was assigned in Week 4 of Module 1 and we were given 8 days to complete it. As a group, we spent a total of 12 hours together working on the styling and functionality of the required features. We each spent several additional hours working independently to do research, generate ideas, and pseudocode solutions before bringing them to scheduled group meetings and were able to complete the base project requirements in just 5 days. The remaining time was spent adding the extension that allows users to edit saved palettes and refactoring. 

### Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)
[Victor Sriqui](https://github.com/vsriqui), [Fernando Robles](https://github.com/fernandorobles97), [Rachel Soae Prather](https://github.com/rachelsoae), and [Jamie Caudill](https://github.com/JamieCaudill)

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)
The primary learning goals of this project were...
- Use semantic HTML and CSS to create a graceful user interface
- Utilize a complete data model to write concise, reusable JavaScript functions
- Use event delegation to manipulate the DOM after page load
- Navigate collaboration and set expectations within a slightly larger team structure

### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
Our greatest win was the stellar effectiveness of our teamwork. We started with intentional time spent on our DTR and maintained open and frequent communication throughout the project. The atmosphere within the group was light-hearted and fun, and we had great energy as a team, which allowed us to learn a lot from each other. From a technical standpoint, it was fantastic to implement some of the new concepts we learned, such as event delegation and function purity, to write a really dynamic program. We also researched and used BEM (Block Element Modifier) methodology to name our classes, which turned out to be a really efficient and semantic way to organize our code. 

The most challenging part of this project was building the functionality for the Saved Palettes section. We all worked independently to find solutions and then met up to bounce ideas off each other. Ultimately, we solved the problem by restructuring our data model from nested arrays to an array of objects, which allowed us to assign each saved palette a unique ID and assign each box within the saved palette to the correct color. 

