import { Controller, Get } from '@nestjs/common';
import { BoardsService } from "./boards.service";
import { Board } from "./board.model";

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService){}

  @Get('/')
  getAllBoard(): Board[] { // 모든 게시물을 가져오는 핸들러(handdler)
    return this.boardsService.getAllBoards();
  }
}