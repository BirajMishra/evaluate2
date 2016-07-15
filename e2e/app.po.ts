export class Evaluate2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('evaluate2-app h1')).getText();
  }
}
