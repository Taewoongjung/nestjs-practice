import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { BoardsService } from "./boards.service";
import { Board, BoardStatus } from "./board.model";
import { CreateBoardDto } from "./dto/create-board.dto";

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService){}

  @Get('/')
  getAllBoard(): Board[] { // 모든 게시물을 가져오는 핸들러(handdler)
    return this.boardsService.getAllBoards();
  }

  @Post()
  createBoard( // Create
    @Body() createBoardDto: CreateBoardDto
  ): Board {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Get('/:id') // Read
  getBoardById(@Param('id') id: string): Board {
    return this.boardsService.getBoardById(id);
  }

  @Patch('/:id/status') // Update
  updataBoardStatus(
    @Param('id') id: string,
    @Body('status') status: BoardStatus
  ) {
    return this.boardsService.updataBoardStatus(id, status);
  }

  @Delete('/:id') // Delete
  deleteBoard(@Param('id') id: string): void {
    this.boardsService.deleteBoard(id);
  }
}