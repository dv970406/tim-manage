import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { CreatePostInput, CreatePostOutput } from './dtos/post/create-post.dto';
import { DeletePostInput, DeletePostOutput } from './dtos/post/delete-post.dto';
import { GetPostInput, GetPostOutput } from './dtos/post/get-post.dto';
import { GetPostsOutput } from './dtos/post/get-posts.dto';
import { UpdatePostInput, UpdatePostOutput } from './dtos/post/update-post.dto';
import { Post } from './entities/post.entity';
import { PostRepository } from './repositories/post.repository';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostRepository)
    private readonly postRepo: PostRepository,
  ) {}

  async isMyPost(loggedInUser: User, post: Post): Promise<boolean> {
    return loggedInUser.id === post.user.id;
  }
  async getPosts(): Promise<GetPostsOutput> {
    try {
      const findPosts = await this.postRepo.find({
        order: { createdAt: 'DESC' },
        relations: {
          user: true,
        },
      });
      return {
        ok: true,
        posts: findPosts,
      };
    } catch (error) {
      return {
        ok: false,
        error: '게시글 리스트 조회에 실패했습니다.',
      };
    }
  }
  async getPost({ id: postId }: GetPostInput): Promise<GetPostOutput> {
    try {
      const findPost = await this.postRepo.findPost({ postId });

      return {
        ok: true,
        post: findPost,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '게시글 조회에 실패했습니다.',
      };
    }
  }

  async createPost(
    loggedInUser: User,
    { title, content }: CreatePostInput,
  ): Promise<CreatePostOutput> {
    try {
      if (!title) {
        throw new Error('제목을 입력해주세요.');
      }

      const newPost = await this.postRepo.save({
        title,
        content,
        user: loggedInUser,
      });
      return {
        ok: true,
        post: newPost,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '게시글 생성에 실패했습니다.',
      };
    }
  }

  async updatePost(
    loggedInUser: User,
    { postId, title, content }: UpdatePostInput,
  ): Promise<UpdatePostOutput> {
    try {
      if (!title) {
        throw new Error('제목을 입력해주세요.');
      }

      const findPost = await this.postRepo.findPost({ postId });

      if (loggedInUser.id !== findPost.userId) {
        throw new Error('게시글의 소유자가 아닙니다.');
      }

      await this.postRepo.save([{ id: postId, title, content }]);
      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '직책 수정에 실패했습니다.',
      };
    }
  }
  async deletePost(
    loggedInUser: User,
    { id: postId }: DeletePostInput,
  ): Promise<DeletePostOutput> {
    try {
      const findPost = await this.postRepo.findPost({ postId });

      if (loggedInUser.id !== findPost.userId) {
        throw new Error('게시글의 소유자가 아닙니다.');
      }

      await this.postRepo.delete({ id: postId });
      return {
        ok: true,
        deletedPostId: postId,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message || '직책 삭제에 실패했습니다.',
      };
    }
  }
}
