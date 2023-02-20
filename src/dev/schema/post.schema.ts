import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Skill } from './skill.schema';
import { Experience } from './experience.schema';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  // @Prop({required:true, unique:true})
  // uid : number;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  skills: Skill[];

  @Prop({ required: true })
  experiences: Experience[];

  // @Prop({ type: [{ company: String, position: String, duration: String }] })
  // experiences: { company: string, position: string, duration: string }[];
}

export const PostSchema = SchemaFactory.createForClass(Post);