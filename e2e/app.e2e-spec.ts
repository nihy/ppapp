import { PpappPage } from './app.po';

describe('ppapp App', function() {
  let page: PpappPage;

  beforeEach(() => {
    page = new PpappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
