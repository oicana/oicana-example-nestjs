import { Test, TestingModule } from '@nestjs/testing';
import { TemplatesController } from './templates.controller';
import { TemplatesService } from './templates.service';

describe('TemplatesController', () => {
  let templatesController: TemplatesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TemplatesController],
      providers: [TemplatesService],
    }).compile();

    templatesController = app.get<TemplatesController>(TemplatesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(templatesController.renderTemplate()).toBe('Hello World!');
    });
  });
});
