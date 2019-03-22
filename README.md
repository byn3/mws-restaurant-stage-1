# _Three Stage Course Material Project - Restaurant Reviews_
---


# HOW TO RUN
*Follow and type these in to the command line:*   
Clone this repo `git clone https://github.com/byn3/mws-restaurant-stage-1.git`  
CD into the directory `cd mws-restaurant-stage-1`  
Start a local server `python3 -m http.server 8000`    
Open a browser (like Chrome) and enter this in the URL `http://localhost:8000`    

# This should be the website you see  

## This is the front page.
![Landing page of the website showing a map of NY and a selection of places to eat](https://github.com/byn3/mws-restaurant-stage-1/blob/master/img/Rest1.png)
___

## This is the bottom of the front page.
![Screenshot of what a selection of the restauraunts look like](https://github.com/byn3/mws-restaurant-stage-1/blob/master/img/Rest2.png)
___

## This is what the restauraunt info and reviews look like.
![Screen shot of what appears on the screen if a restauraunt is selected. Reviews of that place and the location pops up.](https://github.com/byn3/mws-restaurant-stage-1/blob/master/img/Rest3.png)
___


## Project Overview: Stage 1

For the **Restaurant Reviews** projects, I will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, I will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. I will also add a service worker to begin the process of creating a seamless offline experience for my users.

### Specification

I was provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. It is horrible. My job is to update the code to resolve these issues while still maintaining the included functionality. 

### What did I do??

1. I got a Google API Maps key and implemented it into the web app.

2. I added accessibility regarding tab indexing and Aria. The site now works well with a screen reader (tested with ChromeVox).

3. Added Javascript to make the site work.

4. Added CSS to to all elements. No overflow occurs. Beauty is here. It can be more pretty.\

5. Explored the provided code, and started to make a plan to implement the required features in three areas: responsive design, accessibility and offline use. Service worker is currently working as far as I've tested.

### Future fixes:

1. Adjust margin and padding

2. Improve UX on different media widths

3. Add more features. Implement the other stages of this App.

4. Pivot the focus of the project from a Yelp Clone to a fun quirky web app.



