import * as actions from './actions';
import {expect} from '@jest/globals';


describe('Actions', () => {
  it('should add data', () => {
    expect(actions.AddData({text: 'upperCaseName', id: 2}).type).toBe('[Todo Component] Add Data');
  });

  it('should remove data', () => {
    expect(actions.Remove({id: 2}).type).toBe('[Todo Component] Remove');
  });
});
