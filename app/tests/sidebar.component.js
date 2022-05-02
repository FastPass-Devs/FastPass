import { Selector } from 'testcafe';

class SideBar {
  async gotoSigninPage(testController) {
    await testController.click('#sign-in');
  }

  async gotoPasswordGenerator(testController) {
    await testController.click('#menu-passwords');
    await testController.click('#password-generator');
  }

  async logout(testController) {
    await testController.expect(Selector('#current-user').exists).ok();
    await testController.expect(Selector('#logout').exists).ok();
    await testController.click('#logout');
    //await testController.click(Selector("li").withAttribute("id", "logout"));
  } 
} 

export const sideBar = new SideBar();