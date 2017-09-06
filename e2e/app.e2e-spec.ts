import { CedarPage } from './app.po';

describe('cedar App', () => {
  let page: CedarPage;

  beforeEach(() => {
    page = new CedarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
