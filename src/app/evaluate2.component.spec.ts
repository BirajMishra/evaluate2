import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Evaluate2AppComponent } from '../app/evaluate2.component';

beforeEachProviders(() => [Evaluate2AppComponent]);

describe('App: Evaluate2', () => {
  it('should create the app',
      inject([Evaluate2AppComponent], (app: Evaluate2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'evaluate2 works!\'',
      inject([Evaluate2AppComponent], (app: Evaluate2AppComponent) => {
    expect(app.title).toEqual('evaluate2 works!');
  }));
});
