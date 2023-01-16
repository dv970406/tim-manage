import { Module } from '@nestjs/common';
import { CustomTypeOrmModule } from 'src/core/repository/custom-typeorm.module';
import { CommentResolver } from './comment.resolver';
import { CommentService } from './comment.service';
import { LikeResolver } from './like.resolver';
import { LikeService } from './like.service';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';
import { CommentRepository } from './repositories/comment.repository';
import { LikeRepository } from './repositories/like.repository';
import { PostRepository } from './repositories/post.repository';

@Module({
  imports: [
    CustomTypeOrmModule.forCustomRepository([
      PostRepository,
      LikeRepository,
      CommentRepository,
    ]),
  ],
  providers: [
    PostResolver,
    PostService,
    LikeResolver,
    LikeService,
    CommentResolver,
    CommentService,
  ],
})
export class PostModule {}
