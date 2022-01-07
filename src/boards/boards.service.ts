import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  private boards = [1,2]; // 게시판 데이터를 담기 위함
                      // 다른 컴포넌트에서 값을 수정하는 것을 막기 위해 private 사용함.

  getAllBoards() {
    return this.boards; // 배열에 들어있는 모든 값을 호출
  }
}
