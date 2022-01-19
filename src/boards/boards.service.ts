import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Board } from "./board.entity";
import { BoardRepository } from "./board.repository";
import { CreateBoardDto } from "./dto/create-board.dto";
import { BoardStatus } from "./board-status.enum";

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto);
  }

  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);

    if(result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
  }

  getBoardById(id: number): Promise <Board> {
    return this.boardRepository.getBoardById(id);
  }
}
