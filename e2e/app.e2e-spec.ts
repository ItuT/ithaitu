import { IthaituappPage } from './app.po';

describe('ithaituapp App', function() {
  let page: IthaituappPage;

  beforeEach(() => {
    page = new IthaituappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
