import { Test, TestingModule } from '@nestjs/testing';
import { ValorService } from './valor.service';

describe('ValorService', () => {
  let provider: ValorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ValorService],
    }).compile();

    provider = module.get<ValorService>(ValorService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
