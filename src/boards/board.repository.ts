import { EntityRepository, Repository } from "typeorm";
import { Board } from "./board.entity";
import { CreateBoardDto } from "./dto/create-board.dto";
import { BoardStatus } from "./board-status.enum";
import { NotFoundException } from "@nestjs/common";
import { User } from "../auth/user.entity";

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {

  async createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board> {
    const {title, description} = createBoardDto;

    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
      user
    })
    await this.save(board);
    return board;
  }

  async getBoardById(id: number): Promise <Board> {
    const found = await this.findOne(id);
    if(!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return found;
  }
}