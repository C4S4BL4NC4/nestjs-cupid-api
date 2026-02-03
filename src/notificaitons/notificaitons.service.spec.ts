import { Test, TestingModule } from '@nestjs/testing';
import { NotificaitonsService } from './notificaitons.service';

describe('NotificaitonsService', () => {
  let service: NotificaitonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificaitonsService],
    }).compile();

    service = module.get<NotificaitonsService>(NotificaitonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
