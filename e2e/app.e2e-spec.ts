import { Growboxes.RuPage } from './app.po';

describe('growboxes.ru App', () => {
  let page: Growboxes.RuPage;

  beforeEach(() => {
    page = new Growboxes.RuPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
