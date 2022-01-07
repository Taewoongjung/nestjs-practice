import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "Tae Woong Jung is handsome and pretty and rich and gentle and prosperous and topmost";
  }
}