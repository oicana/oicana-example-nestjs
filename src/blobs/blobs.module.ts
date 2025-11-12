import { Module } from '@nestjs/common';
import { BlobsController } from './blobs.controller';
import { BlobsService } from './blobs.service';

@Module({
  imports: [],
  controllers: [BlobsController],
  providers: [BlobsService],
  exports: [BlobsService],
})
export class BlobsModule {}
