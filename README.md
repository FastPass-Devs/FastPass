![ci-badge](https://github.com/FastPass-Devs/FastPass/workflows/ci-FastPass/badge.svg)

# FastPass (ICS 427)

Updated: 4/29/2022

## Assignment 5 (5/2/2022)

### Team Progress
* Anat - Final website deployment
* Jolie - AES-256 encryption, Session timeout, copy to clipboard
* Joshua - Multi-factor/2-Factor authentication
* Justin - Removal of template files, TestCafe tests, Encryption of data, 0-knowledge encryption log in

### Technical Notes
#### Specification of use:
1. The site can easily be accessed through your preferred web browser of choice.
2. Upon reaching the landing page of the site, you will be prompted to create their account by providing a valid email address and password.
3. Once the account has been made, you will be presented with a form to add in your first password to save (this can be for any site).  If you wish not to add any password at the moment, you can alternatively navigate to the dashboard in the sidebar.
4. The dashboard presents all the password items that you have saved and created.  Here, you can click a button to copy the password to your clipboard or you can edit the contents of each password item.
5. In the "Add" tab of the sidebar, you can add in additional passwords to save under your account or use the included password generator.
6. You can also alternatively view all your passwords from the categories tab in the sidebar which sorts your saved password based on whehter it is entertainment, social, retail, or miscellaneous.
7. To enable 2FA for you account, install the "Google Authenticator" app on your mobile device and navigate to the "2FA Settings" in the sidebar.  From there, follow the steps presented in the page.  If successful, future log-ins will require you to input the generated code from "Google Authenticator" alongside your email and password.

#### Local Installation Instructions:
1. Install at minimum MeteorJS v.2.7.1 and NodeJS v.12.
2. Clone the FastPass repository.
3. In your terminal or command prompt, navigate to the FastPass directory.
4. Navigate to the app directory and run "meteor npm install" to install 3rd party packages.
5. Run the site locally by running "meteor npm run start"
6. Navigate to your web browser and visit the site at the url, "http://localhost:3000/#/"
7. To stop the site from running locally, hit "control-c" in the terminal.
NOTE: The site can alternatively be viewed from the url in the "Released Website" section.

### Brief Closing Thoughts
TBA

### Repository Link
https://github.com/FastPass-Devs/FastPass

### Final Project Documentation
TBA

### Released Website
TBA

### Wiki Page
TBA

___
# Old Section

## Assignment 4 (4/11/2022)

### Updated Progress
* Generate and export user's information in .csv format
* Expanding category display features
* TOS Page

### Pending
* Master password hint
* Multi-factor/2-Factor authentication
* Autofill login information
* Encryption of data
* Various bug fixes
* AES-256 Encryption

### New Completions
* Anat - Fuzz testing analysis
* Jolie - Static Analysis review, Export user's information in .csv format, Expanding category display features
* Joshua - Fuzz testing analysis, TOS Page
* Justin - Dynamic Analysis review, Testcafe testing

### Current and Next
* Anat - Button to copy login information
* Jolie - AES-256 encryption
* Joshua - Multi-factor/2-Factor authentication
* Justin - Encryption of data, 0-knowledge encryption log in

### Link
* Repo: https://github.com/FastPass-Devs/FastPass/
* Live site: http://fastpass.meteorapp.com/

## Assignment 3 (3/28/2022)

### Progress
* Passwords collection schema
* Deployment
* Forms for adding and editing passwords
* Password generator
* Password category counters

### Link
* Repo: https://github.com/FastPass-Devs/FastPass/
* Live site: http://fastpass.meteorapp.com/

### Pending
* Master password hint
* Multi-factor/2-Factor authentication
* Autofill login information
* Export user's information
* Encryption of data
* Page for Terms of Service
* Various bug fixes

### New Completions
* Anat - Deployment
* Jolie - Password Collection, password counters, forms for adding/editing password, new seed data
* Joshua - Password Generator
* Justin - Testcafe testing

### Current and Next
* Anat - Button to copy login information
* Jolie - Export user's information, expanding category display features
* Joshua - TOS page, Multi-factor/2-Factor authentication
* Justin - Encryption of data, 0-knowledge encryption log in

## Assignment 2 (2/21/2022)

### What is completed:
* Meteor user collection schema
* Privacy Policy Page
* Login system
* Dashboard skeleteon
* Home page
* Sign in/Sign up 

### What is pending:
* Create collections
* Customize forms for adding/editing passwords
* Custom field
* Category display
* Testcafe testing
* Master password hint
* Multi-factor/2-Factor authentication
* Autofill login information
* Export user's information
* Encryption of data
* Page for Terms of Service
* Deployment
* Various bug fixes

### What each team member has worked on:
* Anat - Landing Page
* Jolie - Home Page/Dashboard, Sidebar
* Joshua - Privacy Policy, TOS
* Justin - 0-knowledge encryption log in


