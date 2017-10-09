import { EngeeringAssesmentProjecttttPage } from './app.po';

describe('engeering-assesment-projectttt App', function() {
  let page: EngeeringAssesmentProjecttttPage;

  beforeEach(() => {
    page = new EngeeringAssesmentProjecttttPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
