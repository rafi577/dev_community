import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Skill {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  level: string;
}

export type SkillDocument = Skill & Document;

export const SkillSchema = SchemaFactory.createForClass(Skill);
