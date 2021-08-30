import { Test, TestingModule } from '@nestjs/testing';
import { PlanoService } from './plano.service';

describe('PlanoService', () => {
  let provider: PlanoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanoService],
    }).compile();

    provider = module.get<PlanoService>(PlanoService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
