# HackCMU 2024 Event Website 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Ensure git and npm are installed on your computer.   
The deployed website can be found here: https://www.acmatcmu.com/hackcmu/

## Running the website
Clone the directory onto your computer and ```cd``` into the project directory :
```
git clone [...link here...]
cd hackcmu
```

To install Node.js and npm, go [here](https://nodejs.org/en/download/)

If this is your first time running the website, run:

```
npm install
```
Then, to run the website, run:
```
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

Optionally run ```npm run build``` to run in production mode.

## Workflow
When you have made some changes to the website, run the following commands to push the changes to Github:
```
git add -A
git commit -m "commit message here"
git push
```
This will deploy the changes to the actual website on gh-pages:  
```
npm run deploy
```

