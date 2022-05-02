import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { sideBar } from './sidebar.component';
import { dashboardPage } from './dashboard.page';
import { passwordGenerator } from './password-generator.page';
import createTestCafe from 'testcafe';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };

fixture('meteor-application-template-react localhost test with default db')
    .page('http://localhost:3000');


test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that signin and signout work', async (testController) => {
  await sideBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await sideBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test Password generator', async (testController) => {
  await sideBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await sideBar.gotoPasswordGenerator(testController);
  await passwordGenerator.genPassword(testController);
});

test('Test copying password', async (testController) => {
  await sideBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await dashboardPage.copy(testController);
});