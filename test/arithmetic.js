import { mulitply, divide } from '../src/arithmetic';

describe('mulitply', ()=> {
  it('should mulitply two numbers', ()=> {
    const value = mulitply(16, 16);
    expect(value === 256);
  });
});

describe('divide', ()=> {
  it('should divide a by b', ()=> {
    const value = divide(512, 8);
    expect(value === 64);
  });
});