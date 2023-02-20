import { Module } from '@nestjs/common';
import { DevModule } from './dev/dev.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [DevModule, MongooseModule.forRoot('mongodb+srv://tanvir:tanvir@cluster0.r2x6tgi.mongodb.net/?retryWrites=true&w=majority',{dbName : 'Post'})],

})
export class AppModule {}
