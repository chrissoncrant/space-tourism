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



