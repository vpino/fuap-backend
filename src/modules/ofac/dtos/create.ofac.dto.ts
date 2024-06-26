import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsBoolean,
  IsString,
  IsNumber,
  IsDate,
  ArrayNotEmpty,
} from 'class-validator';

export class CreateOfacDto {
  @ApiProperty()
  @IsString()
  messageNumber: string;

  @ApiProperty()
  @IsString()
  messageText: string;
}
