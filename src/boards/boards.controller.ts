import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { BoardsService } from "./boards.service";
import { Board } from "./board.entity";
import { CreateBoardDto } from "./dto/create-board.dto";

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService){}

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardsService.createBoard(createBoardDto);
  }

  // @Post() // Create
  // @UsePipes(ValidationPipe)
  // createBoard(@Body() createBoardDto: CreateBoardDto): Board {
  //   return this.boardsService.createBoard(createBoardDto);
  // }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardsService.getBoardById(id);
  }
  // @Get('/:id') // Read
  // getBoardById(@Param('id') id: string): Board {
  //   return this.boardsService.getBoardById(id);
  // }

  // @Patch('/:id/status') // Update
  // updataBoardStatus(
  //   @Param('id') id: string,
  //   @Body('status', BoardStatusValidationPipe) status: BoardStatus
  // ) {
  //   return this.boardsService.updateBoardStatus(id, status);
  // }
  //
  // @Delete('/:id') // Delete
  // deleteBoard(@Param('id') id: string): void {
  //   this.boardsService.deleteBoard(id);
  // }
}
