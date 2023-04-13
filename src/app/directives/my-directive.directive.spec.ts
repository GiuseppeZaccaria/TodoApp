import { MyDirectiveDirective } from './my-directive.directive';
import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';
import '@testing-library/jest-dom';

describe('MyDirectiveDirective', () => {
  let spectator: SpectatorDirective<MyDirectiveDirective>;

  const createDirective = createDirectiveFactory(MyDirectiveDirective);

  beforeEach(() => {
    spectator = createDirective(`<div myDirective>Test Directive</div>`);
  });

  it('Hover bg', () => {
    spectator.dispatchMouseEvent(spectator.element, 'mouseenter');
    expect(spectator.element).toHaveStyle({ 'background-color': 'yellow' });
  });

  it('Leave bg ', () => {
    spectator.dispatchMouseEvent(spectator.element, 'mouseenter');
    spectator.dispatchMouseEvent(spectator.element, 'mouseleave');
    expect(spectator.element).not.toHaveStyle({ 'background-color': 'yellow' });
  });

});
