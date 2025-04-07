import { ToMinutesPipe } from './to-minutes.pipe';

describe('ToMinutesPipe', () => {
  it('create an instance', () => {
    const pipe = new ToMinutesPipe();
    expect(pipe).toBeTruthy();
  });
});
