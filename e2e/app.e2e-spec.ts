import { IonicStarterPage } from './app.po';

describe('ionic-starter App', () => {
  let page: IonicStarterPage;

  beforeEach(() => {
    page = new IonicStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
