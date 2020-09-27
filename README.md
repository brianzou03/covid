This project is behind the website http://www.askcovid19now.com. This COVID-19 screen app is intended to help community by allowing users follow easy COVID-19 related questions and arrive at a decision.

## create project
This project was setup with the following commands
- npx create-react-app covid
- npm install bootstrap

## build
 
- `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

- `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Deployment
Transfer the build folder to the site.
The service is running in background:
- sudo serve -n -s build/ -l 8080&
There is a load balancer nginx listening at https 443 and proxy to the nodejs server

## Author
#### *Brian Zou*
I'm currently a senior high school student and has been passionate about helping community with my skills.
If you have any comments or try to help, feel free to reach out to me at support@askcovid19now.com
