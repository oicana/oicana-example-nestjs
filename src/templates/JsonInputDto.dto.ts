import { ApiProperty } from '@nestjs/swagger';

export class JsonInputDto {
  @ApiProperty({
    description: 'The input key name as defined in the template',
    example: 'data',
    type: 'string',
  })
  key: string;

  @ApiProperty({
    description: 'The JSON value to pass to the template for this input key',
    example: {
      description: 'Sample data',
      rows: [{ name: 'John', one: 'B', two: 'A', three: 'C' }],
    },
  })
  value: any;
}
