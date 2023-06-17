import { CustomPIPEPipe } from './custom-pipe.pipe';

describe('CustomPIPEPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomPIPEPipe();
    expect(pipe).toBeTruthy();
  });
});
