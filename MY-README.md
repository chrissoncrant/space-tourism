# Frontend Mentor - Space tourism website solution

## The Start
The first thing was setting up the project. This involved:
- Downloading the files and assets
- Setting up an initial project directory and bringing in the assets.
- Going over the Figma design file while taking notes on things that will be challenging (ie the things I know I will have to look up).
- Setup the stylesheet with intial CSS resets, importing fonts, setting up CSS Variables for the colors, setting up certain rules based on the Design System file (font-sizes, character spacings).

## Initial Gameplan
Create the Design System HTML
- At first I was just going to use the Figma file as a reference, but I realized that coding this out is the best way to set up the CSS utility classes and custom properties. Plus, more practice is always good!

Mobile-first design. It makes a lot more sense to me to build up to the desktop version than vice versa.

Define components and look for repeated patterns. 

I have been wanting to explore Cube CSS methodology created by Andy Bell (see [Resources](#resources)). The best way to explore something like this is to apply it and so that's the plan. 

## The Challenges 
- Creating the hamburger menu. I have done this a few times before, but it has been awhile since the last time.
- Creating the active navigation item styling. This occurs in multiple places in different ways.

## Resources
- [Cube CSS](https://piccalil.li/blog/cube-css/)

## Setting Up the CSS Stylesheet
I brought in my usual CSS reset stylesheet, which is based on [Andy Bell's CSS reset](https://piccalil.li/blog/a-modern-css-reset/) and [Josh Comeau's CSS reset](https://www.joshwcomeau.com/css/custom-css-reset/).
I set up some utilities intially based on the design system.
I watched some of the related tutorial to see how Kevin Powell set up his stylesheet along with the utilities. I was a bit resistant to watching at first because I am not a fan of project tutorials, however I did glean a few insights:
- I like his naming scheme for CSS Variables. Specifically using prefixes like --ff for font-family and --fs for font-size as it does make it quicker to find these when implementing them further down the stylesheet.
- I also appreciated the creation of utility classes for the font sizes, and specifically the naming scheme. His naming scheme is to use the font-weight number scale. At first I was hesitant to use this, but it started to make sense to me. The reason it makes sense is because font-size is being set with rem units and so, yes these are based on pixels, but ultimately this value is dependent upon the user. It is more accurate to use this relative scale, then to call them by the pixel name. Before this I was not using font-size utility classes and would be declaring them using var(--150px), etc. This would only be accurate if the user does not change the browser default font-size.

## The Design System HTML
I coded this multiple times. First I coded everything myself, then I watched Kevin Powell's walk-through. Doing it this way was helpful as I wasn't dependent upon someone else during the first build.
During the second build I learned a lot of best practices from Kevin Powell that I plan on implementing. Some of these that I will be using in this and future projects are:
- Whenever I set the styling for a hover pseudo class I will also include a focus pseudo class. 
- When creating components I will think about where the best place is to place the component class. Some components, like lists, will generally have a parent/container element and it could be easier to create the component class on the parent, instead of adding one to each of the child elements. I like this methodology.
- Using the aria-selected attribute for buttons that are active. This is an accessibility thing and I want my websites to be accessible. This is something I want to learn more about and make a priority. 

## The Homepage

The first challenge for this is creating the hamburger navigation. Before seeing how Kevin does this, I am going to build out a hmaburger menu following [Andy Bell's walkthrough](https://piccalil.li/tutorial/build-a-fully-responsive-progressively-enhanced-burger-menu/).

I spent at least 5 days on following this tutorial. Sure, I could have simply copied and pasted, but that's not my style. At least not in the context of learning. I could swallow my pride if it was necessary and there was a deadline and then spend time outside work learning, but that wasn't the case in this case. 

What took me so long was going through the JavaScript that made the burger menu work. It utilizes Custom Elements which extend the HTMLElement object. It involves ES6 classes, proxy objects, state, the Resize Observer API. All of these I wasn't so familiart with. So I spent time learning about each.

While learning about each I was tearing apart the JS code, thinking about what the heck it was going on and creating a [reference project which has thorough comments on what each part of the code does](https://chrissoncrant.github.io/reference-projects/hamburger-menu/).

I feel like my JS game has levelled up tremendously. 

I will be applying what I learned in that tutorial to this project. 

### The Homepage - My Way
I managed to apply the reponsive burger menu to the homepage and finished styling it to taste. I did encounter a funny issue where there was a sort of no-mans land happening between window sizes.

It took me a bit to figure out what was happening here, then I found out that it has to do with the vertical scrollbar. The vertical scrollbar reduced the size of the container, but the media query that adjusted the font-sizes wasn't impacted.

As the window widened, the parent reached the right size to update the burger button visibility and also reached the media query, which changed the font-size in a way that caused the vertical scrollbar to appear. The vertical scroll bar reduced the size of the parent container, which altered the burger button visiblity making it appear when the media query styles assumed it wasn't visible. This lasted for a pixel amount equal to the size of the scrollbar.

To solve this I eliminated the vertical scrolling. This is okay for this app because it is a single page, non-scrolling site. For other apps I would need to either set the container that is being observed to be the window object itself, or add a fucntionality which checks for scrollbar visibilty and compensate for the width. 

### The Homepage - Kevin's Way
Once I got the homepage styled and completed I then branched and redid it by following along with Kevin. I learned a few things along the way. 

I liked his approach of mobile-first when it comes to styling and desktop first when it comes to HTML structure. My intuition says that this makes sense, yet I need to explore it more. It felt rather chaotic to me while following along with Kevin. It certainly wasn't a linear process, but that's okay. 

The most interesting part was the horizontal line in the header. It's easy to just plop down an ornamental line in a graphics program, but when it comes time to create it in the actual environment that it will live in (the one that matters in other words) it is a different story. I managed to solve this problem on my own, then watched Kevin's solution and this introduced me to the 'order' property which I will not forget. 

## Destination Page
I got this page working using flex mode, then watched the tutorial and I liked Kevin's usage of grid. Plus, I haven't had much practice with grid and thought this was an opportunity to do so.

I did take an alternate approach here which I used on all the rest of the pages. Instead of coding all the content for each of the different 'slides' within the page, I used JavaScript to dynamically fill in the content based on the active tab/button.

This was exciting for me. I think something clicked inside by doing it this way. I remember after getting it running, just clicking through the tabs seeing the content switch, thinking about how cool it was that it was working.

The next problem I wanted to solve was the focus issue. I am sure this was going to be addressed in the tutorial, but I wanted to see what I could do myself.

The problem was that the elements within the navigation were being focused on even when the burger menu was visible and the navigation was closed. 

I needed some sort of hook in order to manage the focus. I disocvered the Media Query Listener API which allowed me to check if the page fell into a specific media query and then using the "change" even I could alter the navigation elements by adding or removing tabindex=-1 as necessary. 

My previous studies in the burger menu building was helpful. They gave me awareness to using the tabindex attribute to remove focus, and also made me aware of the good user experience of closing the menu when an item outside the menu is focused on. 

I am satisfied and proud of the implementation I came up with to accomplish this. 

Another thing I addressed, that I didn't see addressed by Kevin was updating the focus styling. This led me to a bit of a detour where I studied how link pseudo classes and focus and focus-visible styling works. The trick here was making the focus work just like it would by default. 

The problem I encountered with Kevin's code was that when clicking a button or tab, the focus styling would remain. This is not how it would behave by default. Thanks to my research I learned that this could be remedied by using the focus-visible pseudo class. 

Another problem I encountered was when a tab or button was active, the focus was not visible, so I added a specific selector for the active tab/button and used focus-visible to give it a consistent styling.

## Crew Page
This page gave me more practice with grid and specifically grid-template-areas property. I really like how this works. This page went by rapidly as it used the same principles as the previous pages.

One thing that I did do was to add the dynamic content loading script into a page specific file.

I also thought of an easy way to indicate the active tabs based on what page is being viewed which simply involved me editing the html of each individual page. Simple and effective. 

## Technology Page
This page gave me more practice with using grid-template-areas. This page had some unique things going for it style-wise. First there was the image that goes right up against the left edge. Second, there were two orientations for each of the images.

The first problem was addressed by making a new grid-template-columns scheme.

The next problem I knew would involve a bit more thought. 

Before tackling this I decided that I wanted to address certain inconsistencies across the previous two pages. Specifically, the page title. The page title was not sitting the same and so I went through and made sure this was fixed. 

Now it was time for the dynamic loading of the last page. Everything was almost the same here except for the images. I needed a way to set the image orientation based on the viewport width. Luckily I had just learned about the Media Query List API and used that again.

By default the page's html is mobile-first and so the landscape image loads. The problem with this is if the user is within the desktop media query the image will load wrong. To solve this, on page load a check is made and if the media query is desktop it will load in the portrait image. 

Next I needed a listener to change the orientation. This worked similar to the focus function. I used the 'change' event set on the Media Query List variable and this set the proper image orientation, choosing the image based on the active tab/button. I created a function for this as I knew I would need to use it again when setting up the click listener on the buttons. 


## Other Things
I love finding the edge cases, seeing where the design breaks and trying to account for those. Most of the time this came up right when the site changes from tablet to desktop.

Usually the problem would be fonts being too large. To solve this issue I utilized a simple clamp value.

I know with the clamp CSS function there is usually a lot of guesswork and I don't like that kind of guesswork.

Awhile back I spent time going through [this article on how the clamp function works and how to calculate the values](https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/). I was glad that I took notes and wrote out the formulas so I didn't have to re-read it, as it was not light reading. 

After calculating a couple clamp values and marveling at how accurately they were working I decided to create the start of a simple calculator to make this process easier. The formulas are not too ugly, but keeping all the variables in order and plugging them in correctly took more mental effort than I liked and left room for mistakes. 

So I made a [calculator for clamp values](https://chrissoncrant.github.io/reference-projects/fluid-type-calculator/index.html).

It's very basic as far as styling goes, but it is a functional minimum viable product. 

## Conclusions
This project has been quite an educational experience. I learned a lot more than I could have anticipated. Before starting the project I had know idea how to do many of the things, I just knew that I could find out.

This was part of the journey. Now that I am on this side of it I look back at all the "side quests" (the progressivley enhanced and accessible burger menu, custom elements, javascript classes, accessibilty and ARIA, how the picture and source elements work for web image optimization, the media query list API, and more) and marvel at how far I've come and what I have done.

There is a bit of sadness at the end. I am left with that empty feeling of where to go now. I could jsut turn right around and do this same quest again, knowing that it may be the same theoretically, but because I am different, it would be a new quest experientially. 

I know there are lots of things I could have done better, but there are also things I am proud of. For instance, the method I came up with for having adaptive focusability of the navigation menu. I learned about this concept through the burger menu side quest, but then implemented it in a whole new way. 

In conclusion, I feel I have grown a lot as a developer. I am now more cognisant of accessibility and focusability and what it means to build using the mental model of progressive enhancement. I am more confident in my abilities to find the answer and to work through problems. And, overall, I am much more familiar with the overall workflow of taking a project from start to finish. 



