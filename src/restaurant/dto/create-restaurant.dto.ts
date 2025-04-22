import { IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateRestaurantDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsString()
  @IsOptional()
  comment?: string;

  @IsUrl()
  @IsOptional()
  restaurant_url?: string;

  @IsUrl()
  @IsOptional()
  image_url?: string;
}
