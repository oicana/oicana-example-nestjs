import { Module } from '@nestjs/common';
import { TemplatesModule } from './templates/templates.module';
import { BlobsModule } from './blobs/blobs.module';
import { CertificatesModule } from './certificates/certificates.module';

@Module({
  imports: [TemplatesModule, BlobsModule, CertificatesModule],
})
export class AppModule {}
