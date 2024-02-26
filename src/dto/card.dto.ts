import { IsDefined, IsString, IsUUID, Length } from "class-validator";

export class Card {
  @IsString()
  @IsDefined()
  @Length(5, 30)
  title: string;

  @IsString()
  @IsDefined()
  @Length(4, 100)
  description: string;

  @IsDefined()
  @IsString()
  due_date: string;

  @IsDefined()
  @IsUUID()
  list_id: string;

  @IsDefined()
  @IsUUID()
  ownerUserId: string;
}
