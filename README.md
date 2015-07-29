# **Article Information and Analytics** #
### View different posts loaded from an external API and also view analytics regarding each post which contains tracker data. ###


##  About
 - On the home page, there is a list of posts. Click on one for more information
 - The post details page has two parts. In the first tab, you can see basic post information such as its title and article contents. The second contains tracker information loaded from an external API. Since the original tracker information contained a bug, it has been fixed so that data is in the correct format. You can select two dates and view the tracker information between those dates.

## Directory Structure
I have found that it makes most sense for me to organize Angular files based on what state they belong to. For larger apps, I usually make a "app" folder that is very similar to the "pre-build" folder in this application. That folder contains various sub-folders that correspond to the states (ui-router states, that is) of my application. Any state specific files– the state definition itself,controllers, SCSS files, templates, and even directives and services that are state specific go in these state sub-folders. I also usually make a components folder that contains sub-folders resembling larger components of the application– things like often used directives and services that are shared between multiple states.

Since this application is fairly small in size I have combined these two categories of "app" and "components" into the single "pre-build" folder. There are two folders that correspond to states of the application and then one that contains the navbar directive. I like to organize my application by these larger features (of either state or directive) because I think it makes it very easy and intuitive to find any files you are looking for. You know that all the files related to the posts on the home page are in the posts folder, for example. It is a little complicated when you have services shared between states (in this case, the Posts service is used by the posts state and the posts details state) but in general, I find that this directory structure makes the most sense to me over ways I have previously organized my files (where I would put all CSS files in one folder, all services in one folder, all directives in one folder, and then the other files in state specific folders ).

## Live Version
A live version of the application is online at https://kargo-challenge.herokuapp.com/. Alternatively, follow the installation instructions below to run the application locally.

## Installation
1. Clone this repository and `cd` into that directory using the command line
2. Make sure you have  `node` and `npm` installed (https://docs.npmjs.com/getting-started/installing-node)
2. Run `npm install' `(this should also `gulp build`)
3. Start application with `npm start` (should start on port 8001)
4. Visit http://localhost:8001/ to view the application.
