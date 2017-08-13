import { CursoVictorRoblesPage } from './app.po';

describe('curso-victor-robles App', () => {
  let page: CursoVictorRoblesPage;

  beforeEach(() => {
    page = new CursoVictorRoblesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
