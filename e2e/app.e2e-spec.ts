import { AngularisaPage } from './app.po';

describe('angularisa App', () => {
  let page: AngularisaPage;

  beforeEach(() => {
    page = new AngularisaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
