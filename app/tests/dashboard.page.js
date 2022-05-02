import { Selector } from 'testcafe';

class DashboardPage {
  constructor() {
    this.pageId = '#landing-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async copy(testController) {
    const copyButton = Selector('.ui.red.button').nth(0);
    await testController.setNativeDialogHandler(() => true)
    await testController.click(copyButton);
  }
}

export const dashboardPage = new DashboardPage();