import { CliprjPage } from './app.po';

describe('cliprj App', function() {
  let page: CliprjPage;

  beforeEach(() => {
    page = new CliprjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
