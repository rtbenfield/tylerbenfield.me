---
layout: post
title:  "The Evolution of a Web Developer"
date:   2016-07-24 12:04:00
categories: web
tags: web
---

When I was first starting my career as a developer, my first big project was to build an offline web application utilizing Application Cache and Local Storage. I was given direction to stick with jQuery and Bootstrap, but not rely on any other external libraries. Being new and still getting my bearings, I didn't challenge that requirement. In the end, I ended up writing a massive amount of JavaScript to handle binding between the HTML and Local Storage. The code was riddled with bugs that were addressed over time, but overall the application was a success both as a product and as a learning experience. I'll never reinvent the wheel like that again.

The application I had written continued to evolve over the next two years. It was always an ordeal to teach a new developer how all of the custom code worked. Eventually, our team was asked to complete another offline capable project. I was busy working on other things at the time, but was asked to advise the developer that did take the new project. My first recommendation was to throw out our in-house library in favor of a community-driven option.

After quite a bit of toying with several databinding libraries, we settled on Angular. We had made a great decision on several fronts including the large amount of documentation, community support, and the overall stability. The developer that took on the project grew to love Angular and agreed that it we should continue in that direction for other projects.

Finally, the opportunity came to redesign my original offline project. Scrapping the old, in-house library was the first item on my list. Instead of immediately committing to Angular, however, I wanted to see what the landscaped looked like since the last time we evaluated our options. That's when I came across React.

At first glance I wanted to throw JSX away. We've always preached that writing your view in your code was bad, but so many people were defending JSX that I had to at least give it a shot. It quickly became clear: JSX is just your view layer, not your logic. You can still separate the two safely. Once this clicked, I began to make my case for trying React. Once I was given the thumbs up, I never looked back.

I started by building some initial prototypes of the project to get some experience with React. It didn't take long to realize that with the size of the application we would need some sort of state management. First, I evaluated Flux, but it didn't seem to make things *easier*, just *different*. I liked the idea, but I needed something that other developers could look at and quickly understand (unlike the last time I built this thing). Redux was exactly what I was looking for. It didn't just make things *easier*, it made them *simpler* and *faster* and *more dependable*. It was like elevating to another echelon of software development.

So now, I am in the middle of my third React/Redux project. Each one has taught me more about how to structure my code, connect my components, and make an application that is both maintainable and performant.
