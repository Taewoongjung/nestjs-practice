import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from "./board.model";
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from "./dto/create-board.dto";

@Injectable()
export class BoardsService {
  private boards: Board[] = []; // 게시판 데이터를 담기 위함
                      // 다른 컴포넌트에서 값을 수정하는 것을 막기 위해 private 사용함.

  getAllBoards(): Board[] {
    return this.boards; // 배열에 들어있는 모든 값을 호출
  }

  createBoard(createBoardDto: CreateBoardDto) { // Create
    const { title, description } = createBoardDto;

    const board: Board = {
      id: uuid(), // uuid는 unique한 id를 주기 위함
      title: title, // title
      description: description, // description
      status: BoardStatus.PUBLIC
    };

    this.boards.push(board);
    return board;
  }

  getBoardById(id: string): Board { // Read
    return this.boards.find((board) => board.id === id);
  }

  updateBoardStatus(id: string, status: BoardStatus): Board { // Update
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }

  deleteBoard(id: string): void { // Delete
    this.boards = this.boards.filter((board) => board.id !== id);
  }
}
