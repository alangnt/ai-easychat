## Easy Tutorial to get a free AI Customer Chat in your NextJS project.

### Step 1 : Create a HuggingFace account
Go to https://huggingface.co/ and Create an Account
Once you're done, verify your email to get started

### Step 2 : Create your Access Token (API Key)
Click on your avatar and navigate to "Settings"
Click on "Access Tokens" then "Create new token"
Give it a name and access if you want (I personally give it all credentials)

### Step 3 : Save your newly created Access Token
Copy and Paste your new API Key and save in a secure place
!!! Once you clicked on "Done", you cannot see your API Key again !!!

### Step 4 : Clone this repository
Make sure Git is installed on your machine. If not, go to : https://git-scm.com/downloads and download it
Once you're done, open the cmd or your terminal in your Code Editor (VSCode, Cursor, etc.) and copy/paste ```git clone https://github.com/alangnt/ai-easychat.git```

### Step 5 : Install all necessary dependencies
Open your Code Editor and navigate to your newly added project folder
Hit ```npm install``` and ```npm install @huggingface/inference``` to install all the required dependencies

### Step 6 : Replace your API Key
Navigate to the .env.local file and replace ```YOUR_API_KEY``` with your saved Access Token

### Step 7 : Let your imagination do the talking !
Hit ```npm run dev``` (or ```npm build```) to verify that everything's working fine
And you're good to go. Now it's time to work on the Front End and add some magic to your website !

Huge shoutout to HuggingFaceH4 and their wonderful zephyr 7b which works brilliantly and is completely free to use ! You can see more of their work here : https://huggingface.co/HuggingFaceH4
