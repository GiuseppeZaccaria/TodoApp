import {AppComponent} from "./app.component";

describe('AppComponent', () => {
  let fixture: AppComponent;

  beforeEach(() => {
    fixture = new AppComponent(null);
  });

  it('test title', () => {
    expect(fixture.title).toEqual('newApp')
  })



})
