import { Injectable, NotFoundException } from "@nestjs/common";
import { BoardStatus } from "./board-status.enum";
import { CreateBoardDto } from "./dto/create-board.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Board } from "./board.entity";
import { BoardRepository } from "./board.repository";

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  async getBoardById(id: number): Promise <Board> {
    const found = await this.boardRepository.findOne(id);

    if(!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }

    return found;
  }

  createBoard(createBoardDto): Promise <Board> {
    return this.boardRepository.createBoard(createBoardDto);
  }

  // private boards: Board[] = [];
  //
  // getAllBoards(): Board[] {
  //   return this.boards; // 배열에 들어있는 모든 값을 호출
  // }
  //
  // createBoard(createBoardDto: CreateBoardDto) { // Create
  //   const { title, description } = createBoardDto;
  //
  //   const board: Board = {
  //     id: uuid(), // uuid는 unique한 id를 주기 위함
  //     title: title, // title
  //     description: description, // description
  //     status: BoardStatus.PUBLIC
  //   };
  //
  //   this.boards.push(board);
  //   return board;
  // }
  //
  // getBoardById(id: string): Board { // Read
  //   const found = this.boards.find((board) => board.id === id);
  //
  //   if(!found) {
  //     throw new NotFoundException(`Can't find Board with id ${id}`);
  //   }
  //   return found;
  // }
  //
  // updateBoardStatus(id: string, status: BoardStatus): Board { // Update
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
  //
  // deleteBoard(id: string): void { // Delete
  //   const found = this.getBoardById(id);
  //   this.boards = this.boards.filter((board) => board.id !== found.id); // 찾은 id와 같지 않은 것들은 남겨두고 같은 것은 제외
  // }
}
