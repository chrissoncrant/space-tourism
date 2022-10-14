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
