import { Evaluate2Page } from './app.po';

describe('evaluate2 App', function() {
  let page: Evaluate2Page;

  beforeEach(() => {
    page = new Evaluate2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('evaluate2 works!');
  });
});
