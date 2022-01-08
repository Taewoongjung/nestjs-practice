import { IsNotEmpty } from "class-validator";

export class CreateBoardDto { // 게시물 생성을 위한 DTO
  @IsNotEmpty() // 자동 유효성 체크
  title: string;

  @IsNotEmpty() // 자동 유효성 체크
  description: string;
}