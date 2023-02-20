import { Injectable } from '@nestjs/common';
import { CreateDevDto } from './dto/create-dev.dto';
import { UpdateDevDto } from './dto/update-dev.dto';
import { Model } from 'mongoose';
import { Post, PostDocument } from './schema/post.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DevService {   
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  async create(createDevDto: CreateDevDto): Promise<Post> {
    const createdPost = await this.postModel.create(createDevDto);
    // return createdPost.save();
    return createdPost
  }


  findAll() {
    return `This action returns all dev`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dev`;
  }

  update(id: number, updateDevDto: UpdateDevDto) {
    return `This action updates a #${id} dev`;
  }

  remove(id: number) {
    return `This action removes a #${id} dev`;
  }
}
