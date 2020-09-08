https://samc85.github.io/Milestone2-project/


![responsive image](https://samc85.github.io/Milestone2-project/assets/images/milestone2.png)

# Lake district travel
This website is for a travel company based in the Lake District, UK.  
Run by locals, its owners wanted to provide holidayers with the best possible experience within 
the Lake District, based on their own preference.


### Company mission statement:
The company is designed to give holiday seekers a bespoke experience when visiting the Lakes.  
With the explosion in tourism over the past decade, the Lakes have become a popular destination 
with much to offer.

"Bringing the Lakes and all it has to offer to its visitors."


# User Experience (UX)

This website is designed for a company with a strong focus on user choice.  
The website is designed to not only offer a range of packages but also give users help in deciding which package is good for them.

The website can be divided into 3 main areas.  These are:

## Home Page (index)
* About Us
* What we do
* Packages
* Contact Form

## Discover Page (discover)
* Google Map with Locations
* Current Weather
* Attractions Gallery
* Contact Form

## Need some help? (quiz)
* Did you know facts?
* User quiz
* Carousel Gallery
* Contact Form

All pages are linked together through the navbar and footer.

All pages have links back to each section for ease of navigation.

## User Stories

* As a prospective customer, I want to learn about the place I am visiting.

* As a prospective customer, I want to see where I am going and what is on offer there.

* As a prosepctive customer, I want to see where I am going on a map and what locations are available.

* As a prosepctive customer, I want to see images of where I am visiting.

* As a prosepctive customer, I want to hear and see what others have experienced in the destination. 

* As a prospective customer, I want to see a range of packages on offer to suit my preferences.

* As a prospective customer, I want help in choosing my ideal holiday.

* As a prospective customer, I want to be able to navigate a site easily, going back on my choices
and exploring different options.

Tests and examples of User Stories are included further below in the testing section.


# Wireframes

![responsive image](https://samc85.github.io/Milestone2-project/assets/images/Wireframes/revised_page_plan.png)



Wireframes are generally true to the webpage.  The initial frame had seperate page for each package, however
these were merged into one page upon review.  Full frames (desktop, tablet, phone) can be located at:  


https://github.com/samc85/Milestone2-project/tree/master/assets/images/Wireframes

# Features

The website uses Bootstrap 4.5.0 due to its layout and responsiveness.  Custom alterations are made
in order to increase customisation of website e.g, color schemes and spacing. 

The following features are also included throughout the page (external sources attributed).

* **Navbar (Bootstrap 4.5.0, Font Awesome and Google Fonts)**
Navbar includes company name styled with 2 different fonts for impact and to emphasise appeal to children.  Bootstrap 4 was used
to set layout. Navbar links hover red.

* **Content (Font Awesome and Bootstrap 4.5.0)**
Font Awesome icons are used throughout the page.  Various icons are coloured/re-sized using CSS.
Page layout used Bootstraps' carousel example page, with custom alteration made to suit client needs.

* **Background images via CSS**
Images are styled using CSS and written as background images.  As images are non-essential
and do not contain any information, this is why this was done as opposed to using a HTML tag.

* **Footer (Bootstrap 4.5.0 and Font Awesome)**
Footer includes contact page link and repeats menu options from Navbar for UX ease.  
Home button is stylised through Font Awesome.

* **Contact Form (EmailJS)**
Using the EmailJS API, customer email template is setup.

* **Links to social media pages (currently to general social media sites).**

* **Google Maps API**
The Map element was created using the Google Maps API and Places library.  Destination co-ordinates were taken from a google map search.

* **Current Weather (OpenWeather API)**
The current weather element was created using the OpenWeather API.  This is updated approximately every 3 hours due to restrictions in current API subscription.

* **Quiz (Javascript and Jquery)**
The Quiz uses Javascript and Jquery.  It was designed with support from Codeexplained.org who demonstrate making a Javascript quiz on their youtube page.  However, as
this quiz is more of a survey, the logic and code had to be different in order to meet client and user needs.  Code was informed by Code Institute lessons and Code Academy activities.


* **Image controls such as toggle, or hide/show (Jquery)**
Images are controlled using JQuery click events.

* **Carousel (Bootstrap 4.5.0)**
Carousel is a Boostrap 4.5.0 template.


## Features Left to Implement
Once up and running, website can implement a booking system for customers.  A live 
chat feature to help a user decide or ask questions is also considered a key piece of UX to add.

## Technologies Used

1. HTML5
2. CSS
3. Bootstrap 4.5.0
4. Font Awesome
5. Google fonts
6. OpenWeather API
7. GitHub and GitPod
8. Jquery
9. Javascript
10. Google MAP API
11. EmailJS API

# Testing

Testing was done frequently throughout the design process. This included continual tests when writing code through the below methods, as well as user feedback on specific
functions/technologies and external validators.  

The website was tested using the following:

## Internal Testing 

**GitHub live preview port**
This was used through `python3 -m http.server` provided by Code Institute. 

**Google Developer Tools**
This was used to view the responsiveness of the webpage through the following:
Pixel 2, Pixel XL, iphone 5, SE, 6/7/8 and plus versions, X and ipad and ipad pro.  

## Errors

No errors are reported when running the page.  

## Warnings
The following warnings came on each page:

Cookie associated with cross site resource set without same site attribute.  This had no adverse affect on the page.  Please refer to 
https://www.chromestatus.com/feature/5088147346030592 for more details.

* Developer Tools Emulator
The Google Developer Tools Emulator was also used across mobile and tablet devices with no bugs or unexpected discrepencies between devices.

## User testing of User Experiences (UX) 

As a prospective customer, I want to learn about the place I am visiting.

* On the discover page of the site, I can learn more about key facts about the Lake District.  I can also explore images from both the company and other customers' experiences.

![responsive image](https://samc85.github.io/Milestone2-project/assets/images/user-stories-captures/userstory_learnabout.png) 

As a prospective customer, I want to see where I am going and what is on offer there.

* The user is presented a wide variety of images of the Lake District as well as clear indications that this is where the site offerings are based, displayed on the initial hero image.  The user is also given a clear view of what packages and activities are on offer from the company. 

![responsive image](https://samc85.github.io/Milestone2-project/assets/images/user-stories-captures/userstory_whatsonoffer.png) 

As a prosepctive customer, I want to see where I am going on a map and what locations are available.

* On the Discover page, the user is given the opportunity to explore different places in the Lake District using Google Maps.  Button features allow different areas to be zoomed in on for exploration.  

![responsive image](https://samc85.github.io/Milestone2-project/assets/images/user-stories-captures/userstory_map.png) 

As a prosepctive customer, I want to see images of where I am visiting.

* Throughout the pages the user is given a range of images that explore the location.  These include hero images, galleries, itinerary descriptions and a carousel.

![responsive image](https://samc85.github.io/Milestone2-project/assets/images/user-stories-captures/user_story_other.png) 

As a prosepctive customer, I want to hear and see what others have experienced in the destination.

* The user can view user images and experiences in the carousel gallery that quote what others' have expierences.  

![responsive image](https://samc85.github.io/Milestone2-project/assets/images/user-stories-captures/userstory_othersexp.png)

As a prospective customer, I want to see a range of packages on offer to suit my preferences.

* The user is able to choose from a range of different travel packages based on their ideal holiday preference.  The user is able to follow each selection and explore what is on offer each day and activities on offer.

![responsive image](https://samc85.github.io/Milestone2-project/assets/images/user-stories-captures/userstory_packages.png) 

As a prospective customer, I want help in choosing my ideal holiday.

* The user can take a quiz to help them decide what their ideal holiday would be based on a survey which calculates their best choice, based on responses.  

![responsive image](https://samc85.github.io/Milestone2-project/assets/images/user-stories-captures/user_story_helpchoosing.png) 

As a prospective customer, I want to be able to navigate a site easily, going back on my choices and exploring different options.

* The user is able to navigate throughout the site using either the navbar which is sticky and the footer, both of which provides links throughout the page.  

![responsive image](https://samc85.github.io/Milestone2-project/assets/images/user-stories-captures/userstory_nav.png) 


## External Testing

The website was checked through the following Validation service tools:

### W3 validator (for HTML)

* https://validator.w3.org/

When using the HTML w3 validator, 0 errors and  1 warning about using section headings described below.
- Type attribute not needed for Javascript 

### CSS Validator (for CSS)

* https://jigsaw.w3.org/css-validator/validator 

No errors.

### JSLint (for Javascript)

1 error found relating to popover function, expecting identifier but finding )};.  Function is taken from Bootstrap 4.4.1 popover element and as 
it works as expected, was noted, but ignored.

### JSHint (for Javascript)

9 warnings were flagged up through this service, based on use of 'let' to declare variables and arrow function syntax.  However, when set for Jquery and new 
ES6 features, they are not flagged.  

### Esprima (for Javascript)

Code result was deemed syntaxically valid.

### BrowserStack (for Responsiveness)

* Browserstack was also used to test on the following devices (chosen based on Browserstack Start Up data):

https://www.browserstack.com/test-on-the-right-mobile-devices

https://www.browserstack.com

1. iphone 8
2. iphone XR
3. Google Pixel 3
4. Samsung Galaxy S9+
5. Samsung Galaxy S8 

All tests showed the website as it intended to look with little/to no variation between devices.
Overall the website was consistently responsive according to the above tests  and adhered to HTML and CSS standards set out by validation tools described above.  


## User Testing

A range of random users were contacted to test the page.  Users were selected based on their perceived proficiency with technology to ensure a range of different 
users.  This included testing on devices (as reported by users):

* ipad pro 9.7inch
* iphone 10, 8 and 7
* Samsung Galaxy 9
* Imac desktop
* Windows based Desktop (computer make was not specified)

Screenshots of some devices presentations are included below:

iphone 7

![responsive image](https://samc85.github.io/Milestone2-project/assets/images/user-stories-captures/iphonecapture.jpeg)

Imac desktop

![responsive image](https://samc85.github.io/Milestone2-project/assets/images/user-stories-captures/imaccapture.png) 

ipad pro 9.7

![responsive image](https://samc85.github.io/Milestone2-project/assets/images/user-stories-captures/ipadcapture.png) 

Testing across devices no discrepencies were found amongst and all features worked.  One user commented that on smaller mobile devices, in the options section, clicking on day itinerary's and images were squashed and not easy to view.  It was decided, based on this feedback, that package options would only show the Day cards, not the button option to ensure better readability and user experience.  Example comparison is below:

![responsive image](https://samc85.github.io/Milestone2-project/assets/images/user-stories-captures/packagesmall.png)    ![responsive image](https://samc85.github.io/Milestone2-project/assets/images/user-stories-captures/packagelarge.png)  

Users will still see the neccessary information to inform their holiday choice, however, due to screen size constraints, accompanying images were removed when accessing on smaller screened devices.

Users reported that they found the site to be 'professional', 'easy to use' and contained 'a range of options to book from.'

Website was also submitted for Peer Review on Code Institute Slack channel.  Response included suggestions on missing links, which have been rectified.

## Speed

* https://tools.pingdom.com/

Website was tested and given a 'B' with Current Score of 82.

One feature to add in future releases could be the suggested 'Compress components with gzip' as suggested by the speed testing report in order
to further increase speed.  This was the lone item that received a 'C' rating with all others receiving 'B' or 'A.'

## User bugs

No user bugs reported.  
 
# Deployment


## GitHub Pages

### Repository
All code was written on Github using a newly created repository.

https://github.com/samc85/Milestone2-project

### Gitpod Deployment

Code was tested through the GitPod platform by entering 'python3 -m http.server' into the console or by clicking
the windown icon in the right hand corner for a in-window view of page code representation.

### Updates

Using GitHub, HTML, CSS and additional resources were updated via the below process:

* Git add (ed)
* Git commit (ed) -m
* Git push (ed) to Repository

### Published Page

Within the repository, under the settings button GitHub Pages was accessed and published to created
a live website.  This was done through the following steps:

* Access Settings on Repository page
* Scroll down to GitHub Pages container
* Select Master Branch as source
* Publish Page and test live address

Published page is accessible at:

https://samc85.github.io/Milestone2-project/

## Forking the GitHub Repository 

Forking the GitHub Repository creates a copy of the original where another person is able to view and /or make changes without affecting the original repository.  This can be completed through the following steps:

* Log into GitHub and locate the GitHub Repository
* At the top of the Repository locate the "Fork" button.
* Clicking this button will now create a copy of the original repository in one's own GitHub account.

## Local Clone 

If a person wished to make a local clone, the following steps should be followed:

* Log into GitHub and locate the GitHub Repository.
* Under the repository name, click "Clone or Download"
* To clone the repository using HTTPS, under "Clone with HTTPS" copy this link.
* Open Git Bash
* Change the current working directory to the location upon which you want the cloned directory to be made.
* Type 'git clone', and then past the URL previously copied e.g:

$ git clone https://github.com/YOUR-USERNAME/YOUR-Repository

* Press enter and your local clone will be created.  


## API's

If a person wishes to alter a copied or clone version of the repository, new API keys may be required.  The following details how to retrieve an API key from Google Maps, EmailJS and OpenWeatherMap API's, all of which are present throughout the project.  Links to API websites are added as they include comprehensive documentation in how to get started.

### Google Map API

In order to access a Google Map API, a user must first sign up to a Google Account and set up a billing account.  An overview of this can be found here:

https://developers.google.com/maps/gmp-get-started

Once a user has created a billing account, and created a project (as per Google Developer instructions) a user can enable one o more API keys.  Please refer to below for greater detail:

https://developers.google.com/maps/documentation/javascript/get-api-key

To create a custom map, coordinates for specific locations can be obtained by searching for the 'lat lng' of a specifc place, e.g, 'London.'  GoogleMaps documentation for Javasript includes details upon how to create markers for places as well as customizing the map if a user wished to do so further.  

https://developers.google.com/maps/documentation/javascript/overview


### OpenWeather Map API

To sign up for OpenWeatherMap and create an API key, please refer to the link below for step by step guidance.  

https://openweathermap.org/appid

To select the specific OpenWeatherMap API, the below link gives a user options for how their weather is presented.

https://openweathermap.org/api


### EmailJS API

The below link gives the appropriate steps for creating an EmailJS API key.

https://www.emailjs.com/docs/

Further instruction is included within the following link:

https://www.emailjs.com/docs/tutorial/overview/

and explanation of how emailJS works is linked below:

https://www.emailjs.com/docs/introduction/how-does-emailjs-work/


## Credits

* https://www.w3schools.com/   was used as a point of reference

* Code Institute Course resources were used to revise/check back as a point of reference

* Code for HTML, CSS and Javascript was beautified using HTML, CSS and Javascript Formatters.

https://htmlformatter.com/

https://www.cleancss.com/css-beautify/

https://jslint.com/

* Support with writing code referenced the following additional websites:

https://www.codeexplained.org/

https://www.codecademy.com/

https://api.jquery.com/jquery.getjson/

https://stackoverflow.com/

https://codepen.io

* APIs were sourced form the following pages

https://openweathermap.org/appid

https://developers.google.com/maps/documentation

https://www.emailjs.com/

* Some photos were sourced from unsplash

https://unsplash.com/

 
## Content

### Text 

Text was written by myself and proofread by known Lake District residents.

### Media
* The photos have come from personal photos, photos from unsplash and photos from a Lake District Photographer 
whom shared photos via email.

Photos are mostly accreditated to:

Patricia McPoland (Lake District Resident and photographer)

From unsplash:
* Arthur Poulin
* Danny Lau
* Joseph Whyle

* Banner image in README.md was created using

http://techsini.com/multi-mockup/

## Acknowledgements 

This project received inspiration from my own travels to the Lake District, where I have
spent the past few summers visiting. 