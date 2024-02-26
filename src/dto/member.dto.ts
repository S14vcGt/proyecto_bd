import { IsDefined, IsUUID } from "class-validator";

export class Member {
  @IsDefined()
  @IsUUID()
  cardId: string;

  @IsDefined()
  @IsUUID()
  memberUserId: string;
}
