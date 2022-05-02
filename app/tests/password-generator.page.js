import { Selector } from 'testcafe';

class PasswordGenerator {
  constructor() {
    this.pageId = '#password-generator';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async genPassword(testController) {
    await this.isDisplayed(testController);

    const lowerCaseCheckbox = Selector('#password-lower-case', { timeout: 500 });
    const upperCaseCheckbox = Selector('#password-upper-case', { timeout: 500 });
    const numberCheckbox = Selector('#password-numbers', { timeout: 500 });
    const symbolCheckbox = Selector('#password-symbols', { timeout: 500 });

    await testController.click(lowerCaseCheckbox);
    await testController.click(upperCaseCheckbox);
    await testController.click(numberCheckbox);
    await testController.click(symbolCheckbox);
    await testController.click('#password-submit');
    
    const generatedPassword = await Selector('#generated-password').innerText;
    
    await testController.expect(generatedPassword).match(/[a-z]/);
    await testController.expect(generatedPassword).match(/[A-Z]/);
    await testController.expect(generatedPassword).match(/\d/);
    await testController.expect(generatedPassword).match(/[$-/:-?{-~!"^_`\[\]]/);
  }
}

export const passwordGenerator = new PasswordGenerator();