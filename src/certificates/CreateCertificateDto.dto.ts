import { ApiProperty } from '@nestjs/swagger';

export class CreateCertificateDto {
  @ApiProperty({
    description: 'Name to create the certificate for',
    example: 'Jane Doe',
  })
  name: string;
}
