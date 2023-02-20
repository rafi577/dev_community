import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
// import { Skill } from './skill.schema';

@Schema()
export class Experience {
  @Prop({ required: true })
  title: string;

  
  @Prop({ required: true })
  startDate: Date;
  
  @Prop()
  endDate: Date;

  @Prop()
  description: string;
}

export type ExperienceDocument = Experience & Document;

export const ExperienceSchema = SchemaFactory.createForClass(Experience);



  // @Prop({ type: [Skill], required: true })
  // skills: Skill[];