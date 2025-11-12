import { ApiProperty } from '@nestjs/swagger';

export class BlobValueDto {
  constructor(id: string) {
    this.id = id;
  }

  @ApiProperty({
    description: 'UUID of the uploaded blob for use in template compilation',
    example: 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d',
  })
  id: string;
}
