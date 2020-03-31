# Browser technologies - CMDA minor web
![best-layer](https://user-images.githubusercontent.com/43337909/78035258-25bb1780-7369-11ea-998e-fe49ae3e6699.png)

## What is this subject about?
This subject is about learning how your website/webapp responds to all different browsers, network speeds, devices, etc. FE developers tend to create an awesome website, but forget to make it accessible for everyone. In this subject you learn about all the different circumstances and how they effect your website. As a result, you have to create a website which is accessible for everyone, no matter where they are or who they are.

## NPM (dev)dependencies
- [Express](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [Parcel bundler](https://parceljs.org/)
- [Bodyparser](https://www.npmjs.com/package/body-parser)
- [Nodemon](https://www.npmjs.com/package/node-fetch)

## Install
1. Open the terminal on your computer.
2. Create a directory in a location of your choice with `mkdir` in your console.
3. Clone the repository with the following command:
<br></br>
`git clone https://github.com/Coenmathijssen/browser-technologies-1920.git`
<br></br>
4. Navigate to the repo with the `cd` command in your console. Next, install all the dependencies with 
<br></br>
`npm install`
<br></br>
5. For building, bundling and compiling of the SCSS and JS, use
<br></br>
`npm run build`
<br></br>
6. To develop and see changes live, use this in your first window of your terminal:
<br></br>
`npm run watch`
<br></br>
And this in your second window of your terminal:
<br></br>
`npm run dev`
<br></br>
These commands are editable in the package.json file
<br></br>
6. Open the localhost to view the webapp.

## Deployment
Deploy website on Heroku:
1. Go to https://www.heroku.com/ and sign in (or create an account).
2. Create new app.
3. Connect the Git repo to your Heroku.
4. Change the directory to 'dist'.
5. Run the installation commands in your terminal.

## Gekozen opdracht
Ik wil mijn eigen t-shirt-met-nerdy-tekst kunnen ontwerpen, printen, opslaan, en een volgende keer dat ik de site bezoek kunnen gebruiken.

## De core functionaliteit
De core functionaliteit is dat je op elk device en elke browser een shirt kan designen. Vervolgens de site kan verlaten, om daarna weer door te kunnen gaan waar je gebleven was. Om dit te bereiken, moet je ervoor zorgen dat Javacript server side gerendered wordt. Als je dit niet doet, gaat het onmogelijk worden om je data op te slaan wanneer je JS en cookies uit hebt staan. Met dit in mijn achterhoofd ben ik gaan schetsen:

![schetsen-web-1](https://user-images.githubusercontent.com/43337909/78036649-daa20400-736a-11ea-9d85-f31ca4e72adc.jpg)
![schetsen-web-2](https://user-images.githubusercontent.com/43337909/78036662-dc6bc780-736a-11ea-98b9-8db0f6319c87.jpg)
![schetsen-web-3](https://user-images.githubusercontent.com/43337909/78036669-dd9cf480-736a-11ea-9e2c-ae28981b30fe.jpg)

Uiteindelijk heb ik voor de bovenste twee schetsen gekozen. Dit omdat ik mogelijkheden zag voor toffe enhancements. Bijvoorbeeld dat je het formulier multistep kan maken wanneer JS aanwezig is. 

## De drie lagen
### Functional laag
Hierbij is de CSS (en Javascript) niet aanwezig en wordt dus alleen de kale HTML getoond. Door inline stijling op de svg's zorg ik ervoor dat alles redelijk in verhouding blijft. Het is niet mooi, maar zeker funcioneel. Door de fieldsets is er toch nog overzicht en groepering en je kan makkelijk naar alle categoriën navigeren met de anchor links van het menu.
![no-css](https://user-images.githubusercontent.com/43337909/78037023-47b59980-736b-11ea-9239-ceb8f1070639.png)

### Usable laag
Met een likje verf wordt het al een stuk meer usable! De Javascript is niet aanwezig, dus het formulier staat onder elkaar. Desondanks is het nog een prima fijne ervaring. Het t-shirt scrollt mee aan de linkerkant, dus kan je altijd blijven zien. Je kan makkelijk navigeren naar de verschillende menu items door smooth scrolling op de anchor links. Het shirt past zich niet live aan, maar is wel geupdatet als je je opties opslaat en je unieke code invoert.
![no-js](https://user-images.githubusercontent.com/43337909/78037038-4c7a4d80-736b-11ea-8711-733c60073ae0.png)

### Pleasurable laag
Now we're talking! Het formulier is nu multistep. Door progressive disclossure toe te passen blijft het overzichtelijk en behapbaar. Daarnaast wordt het t-shirt nu direct aangepast als je op een andere optie klikt! 
![best-layer](https://user-images.githubusercontent.com/43337909/78037053-50a66b00-736b-11ea-8f5c-f7eadbc7c61d.png)

