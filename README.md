![coverImage](https://imgur.com/PfAP6vQ.png)


This web app is built using a JavaScript library called draft.js, which enables the rich text editing functionality of the app. When a user creates or edits a document, draft.js handles the rendering of the text, including the formatting, layout, and styling. 

It also uses Firebase, a cloud-based platform for storing and syncing data, to store all the user's data. It also have support for auto saving. 

To ensure the security of user data,it uses NextAuth.js, a library for handling authentication, to manage user login and authentication. This ensures that only authorized users can access a user's documents and account information.



## Technologies I've used 👨‍💻

- [Next.js](https://nextjs.org/) 
- [NextAuth.js](https://next-auth.js.org/) 
- [Draft.js](https://draftjs.org/) 
- [Firebase](https://firebase.google.com/)
- [Material Tailwind](https://material-tailwind.com/) 
- [Tailwind CSS](https://tailwindcss.com/) 

## How to start? 🔰

### Create Next app

To create a Next.js app, open your terminal, `cd` into the directory you’d like to create the app in, and run the following command:

```bash
$ npx create-next-app <project-name>
```
After that visit the directory and start the server by using-
```
$ cd <project-name>
$ npm run dev
```
if you are using `yarn` then to start the server type `yarn dev` in the terminal.
 
For more info about Create Next app [Visit Here](https://nextjs.org/learn/basics/create-nextjs-app/setup)

### Setup Tailwind CSS 

```bash
$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p
```
We need to update `tailwind.config.js` to do that look at [Tailwind CSS Guide](https://tailwindcss.com/docs/guides/nextjs) and folllow the steps.
 
### Setting `.env.local`
`.env.local` has three values which you need to pass to run this project. 

- **`NEXTAUTH_URL`**:  In the development mode, it should be https://localhost:3000 and in production, you need to change it to your website homepage URL.

	
- **`GOOGLE_CLIENT_ID`** & **`GOOGLE_CLIENT_SECRET`**: go to [Google Cloud Console](https://console.cloud.google.com/) and login with you gmail. Then Create a new Project and fill all the necessary information and click on **Create** button.

![newproject](https://i.imgur.com/s98aDln.png)

After creating a project there will be a search bar in that search for **APIs & Services** or just [click here](https://console.cloud.google.com/apis/dashboard). After visiting the page you need to make sure that you have selected you project or swithc the project if needed.

![selectproject](https://i.imgur.com/7HctR6n.png)

After selecting you desided project the visit the **Credentials** section on the left sidebar

![credentials](https://i.imgur.com/hTeIqRp.png)

After that there will be an new option to **Create Credentials** click on it.

![create Credential](https://i.imgur.com/9OZheKd.png)

There will be a new menu then click on **OAuth client ID**

![oauth](https://i.imgur.com/reUPgFy.png)

It will show you a warning to **Configure Consent Screen** click on it.

![consent screen](https://i.imgur.com/1HxVd2A.png)

After that select the user type as **External** and click on **Create** button.

![option](https://i.imgur.com/8IZ1kAN.png)

After that there will a form which needs to be filled. After filling that form save the data. And go to credential again and Create a new Credentials.
As you progress further then there will be some field which you need to fill very carefully.
It should be the **Domain** of your web app such as `https://example.com`

![js auth domain](https://i.imgur.com/FiQOzvT.png)

After that you need to fill the redirect URI or callback URL which will show when you click on login button.
For the producation it should be like `https://example.com/api/auth/callback/google`

![callbackuri](https://i.imgur.com/eMNN9Zt.png)

After completing all the process you'll get your **Client ID** and **Client Secret** on the top-right corner which will look something like this-

![secret](https://i.imgur.com/kJgsZcS.png)

And after that you are done just paste these in the project and restart your server. 
 
</div>

## What does it look like?

### LoginScreen

<figure>
<img src="https://i.imgur.com/zyEQWwR.png" style="width:100%" />
<figcaption align="center">Login Screen for desktop</figcaption>
</figure>

<figure>
<img src="https://i.imgur.com/D1ifDG4.png" style="width:100%" />
<figcaption align="center">Login Screen for Tablets</figcaption>
</figure>

<figure>
<img src="https://i.imgur.com/lFCNUQW.png" style="width:100%" />
<figcaption align="center">Login Screen for Mobile</figcaption>
</figure>

### Home Screen after Login

<figure>
<img src="https://i.imgur.com/762sH1K.png" style="width:100%" />
<img src="https://i.imgur.com/3UumU6S.png" style="width:100%" />
<figcaption align="center">Home Screen after Login for Desktops </figcaption>
</figure>


<figure>
<img src="https://i.imgur.com/2e1R5w0.png" style="width:100%" />
<img src="https://i.imgur.com/RIOvsAy.png" style="width:100%" />
<figcaption align="center">Home Screen after Login for Mobile </figcaption>
</figure>
	

### Document Screen 

<figure>
<img src="https://i.imgur.com/1bpGTpc.png" style="width:100%" />
<img src="https://i.imgur.com/PG7lHPP.png" style="width:100%" />
<figcaption align="center">Document Screen for Desktops </figcaption>
</figure>


<figure>
<img src="https://i.imgur.com/cXkIGdJ.png" style="width:100%" />
<img src="https://i.imgur.com/2KsdqlE.png" style="width:100%" />
<figcaption align="center">Document Screen for Mobile </figcaption>
</figure>

## Features
Now we have looked at the UI and let's look at what kind of feature does it have in detail-

### Dark Mode Support
It has dark mode support based on user preference. User can switch between dark mode and light mode whenever he wants.

![darkmode](https://i.imgur.com/Tus9rT5.gif)

### Creating New Document
You can create a new document by clicking the **+** icon and then it will show you a pop up to enter the name and click on the submit button and you'll be sent to the document page where you can edit your file.

![create](https://i.imgur.com/cp3f9Hg.gif)

### Open document in the new tab
You can directly open the document from your docs list or else you can click on the three dots, then select the Open in new tab option then it will automatically open that in a new tab.

![open in newtab](https://i.imgur.com/8nswhFB.gif)

### Delete a document
To delete any document just click on three dots and select the **Delete** option and it will ask for the confirmation, then confirm it and it will permanently delete that document.

![delete a document](https://i.imgur.com/Mcmr0SL.gif)

### Edit you Document
You can edit your document as you want, you can change the font style or font size or whatever you want easily with the help of the Editor bar on the top.

![edit you doc](https://i.imgur.com/MbJGuG8.gif)

### Download your document as PDF
You can download or save your file in the pdf format by just clicking the top-right button in the.

![dowload](https://i.imgur.com/3zyMXLy.png)

### Logging Out
To logout from the website, click your profile icon on the top-right section.

![logout](https://i.imgur.com/mkhpPYv.png)


## ⚠️WARNING⚠️
> I want to inform you in advance that it is not very secure and the admin (which is me) can see the documents created by the other users for now. It's not end-to-end encrypted. I have made this just for fun and to learn something new. It is my responsibility to let you know about the downside of it. The below images show how It looks like from my perspective. 

![warning](https://imgur.com/fWwTSNy.png)


## Quick Links 🔗
- [Visit the Production 🚀](https://bit.ly/3I1lOVN)

### Support me ☕
[![buymecoffee](https://imgur.com/2QWo3cm.png)](https://bit.ly/3HXbKNC)
