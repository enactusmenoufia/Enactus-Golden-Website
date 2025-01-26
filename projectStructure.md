
.0# Enactus Website '25

This is the codebase for the Enactus Website '25. It contains multiple pages and resources structured into folders for easy management and scalability.

## Project Structure

enactus-GOLDEN-website/
├── index.html                   # Main landing page
├── teamBoard.html               # Team Board page
├── bestMembers.html             # Page for Best Members
├── events.html                  # Events page
├── projects.html                # Projects overview page with navigation cards to go to projects
├── banova.html                  # Page for the Banova project
├── smartLabels.html             # Page for the Smart Labels project
├── assets/                      # Folder containing all assets
│   ├── css/                     # Stylesheet folder
│   │   ├── style.css            # Stylesheet folder
│   │   ├── subMain.css          # NotImportant
│   |   ├── teamBoard.c          # Team Board Styling 
│   |   ├── bestMembers          # Best Memers Styling
│   |   ├── events.css           # Events Styling
│   |   ├── Projects.cs          # Project Styling
│   |   ├── banova.css           # banova Styling
│   |   ├── smartLabels          # Smart labels 
│   |   └──
│   ├── js/                      # JavaScript folder
│   │   ├── index.js             # main page logic js
│   │   ├── banova.js            # banova Logic
│   |   ├── bestMembers.js       # best mebmers"Very important" ! it implements the html page and with JSON
│   |   ├── events.js            # events logic
│   |   ├── contact.js           # contact form "API + spreed sheet" ! Connected with HR Account 
│   |   ├── smartlabels.js       # Smart labels 
│   |   ├── Projects.js          # projects Page 
│   |   
│   └── images/                  # Images folder
│       └──                      # Additional images
├── EBA Facebook/                # Documentation file
│   └──                          # Board Members 
│                                # Additional images
└── README.md                    # Documentation file
        
## Spare Pages (smartLabels.css + contactUs.js + smartLabels.html  )        


## File Descriptions

### HTML Files
index.html: The main landing page that introduces the website.
teamBoard.html: Highlights the members of the Enactus team.
bestMembers.html: Showcases the best members and their achievements.
events.html: Displays details about past and upcoming events.
projects.html: A project overview page with clickable cards to navigate to individual project pages.
banova.html: Dedicated page for the Banova project.
smartLabels.html: Dedicated page for the Smart Labels project..

### CSS Files
style.css: The primary global stylesheet for the website.
subMain.css: Supporting styles with less priority.
teamBoard.css: Custom styles for the Team Board page.
bestMembers.css: Specific styles for the Best Members page.
events.css: Styles for the Events page.
projects.css: Styles for the Projects overview page.
banova.css: Unique styles for the Banova project page.
smartLabels.css: Unique styles for the Smart Labels project page.


### Java Script Files
index.js: Handles functionality for the landing page.
banova.js: Implements dynamic interactions on the Banova project page.
bestMembers.js: Generates the Best Members page content dynamically using JSON.
events.js: Adds interactive functionality to the Events page.
contact.js: Manages the contact form submission process and integrates with a Google Sheets API (linked to the HR account).
smartLabels.js: Handles interactivity and logic for the Smart Labels project page.
projects.js: Adds logic and dynamic behavior to the Projects overview page.


### Imgs
*Images*
The images folder contains the logos, banners, and other images used throughout the site to ensure consistency and visual appeal.
*all imgs hosted to post images* 

*EBA Facebook Folder*
Contains documentation or assets related to Enactus board members or Facebook content (e.g., posts or images).

## Navigation Flow

1. **Landing Page**: Users start at `index.html`.
2. **Our Projects**: Clicking the **Projects** link navigates the user to `projects.html`.
   - **Banova Card**: Clicking on this card navigates to `banova.html`.
   - **Smart Labels Card**: Clicking on this card navigates to `smartLabels.html`.


## Usage
all exists at enactus HR Git-Hub Repo *Enactus Golden website Repo* 


## Future Improvements
- User Experience (UX) Enhancements *Dark Mode: Add a dark mode toggle* + *Navigation*
- Dynamic Content: Use a backend or a content management system (CMS) like WordPress or Strapi to make content (events, Best members, ) dynamically updatable without needing to edit code.
-  Performance Optimization *upload imgs to PostImgs HOST*
- Future Tech Stack Upgrade *using ReactJS*

## License
2025 Enactus Menofia. All Rights Reserved.

## Devloper
**Mahmoud Mohamed Nayel** *aka* **Golden Boy**

<!--
**************** D e v e l o p e d   b y   G B O Y ********************
                   *   _____ ____   ______     __*
                   *  / ____|  _ \ / __ \ \   / /*
                   * | |  __| |_) | |  | \ \_/ / *
                   * | | |_ |  _ <| |  | |\   /  *
                   * | |__| | |_) | |__| | | |   *
                   *  \_____|____/ \____/  |_|   * 
********************************************************************************
*-->