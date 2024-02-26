import { IsDefined, IsString, IsUUID, Length } from "class-validator";

export class List {
  @IsString()
  @IsDefined()
  @Length(5, 30)
  name: string;

  @IsDefined()
  @IsUUID()
  boardId: string;
}
