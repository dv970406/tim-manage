import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { CoreModule } from './core/core.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from './jwt/jwt.module';
import * as Joi from 'joi';
import { JwtMiddleware } from './jwt/jwt.middleware';
import { PositionModule } from './position/position.module';
import { TeamModule } from './team/team.module';
import { VacationModule } from './vacation/vacation.module';
import { Vacation } from './vacation/entities/vacation.entity';
import { Team } from './team/entities/team.entity';
import { Position } from './position/entities/position.entity';
import { SurveyModule } from './survey/survey.module';
import { PostModule } from './post/post.module';
import { Post } from './post/entities/post.entity';
import { Like } from './post/entities/like.entity';
import { Comment } from './post/entities/comment.entity';
import { Survey } from './survey/entities/survey.entity';
import { Answer } from './survey/entities/answer.entity';
import { join } from 'path';
import { MeetingModule } from './meeting/meeting.module';
import { Meeting } from './meeting/entities/meeting.entity';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.test',
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('dev', 'prod').required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_DATABASE: Joi.string().required(),
        PRIVATE_KEY: Joi.string().required(),
      }),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      context: ({ req }) => ({ user: req['user'] }),
      cors: {
        origin: [
          process.env.AUTHORIZED_ORIGIN1,
          process.env.AUTHORIZED_ORIGIN2,
          process.env.AUTHORIZED_ORIGIN3,
        ],
        credentials: true,
      },
      // 소수점 써야하는 것도 있는데 전부 정수로 만들어버려서 일단 주석
      // buildSchemaOptions: {
      //   numberScalarMode: 'integer',
      // },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: process.env.NODE_ENV !== 'prod', // 개발환경에서는 계속 DB 동기화되게 설정
      logging: process.env.NODE_ENV !== 'prod', // DB에서 돌아가는 모든 로그 확인
      entities: [
        User,
        Vacation,
        Team,
        Position,
        Post,
        Like,
        Comment,
        Survey,
        Answer,
        Meeting,
      ],
    }),
    UserModule,
    CoreModule,
    AuthModule,
    JwtModule.forRoot({
      privateKey: process.env.PRIVATE_KEY,
    }),
    PositionModule,
    TeamModule,
    VacationModule,
    SurveyModule,
    PostModule,
    MeetingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleware).forRoutes({
      path: '/graphql',
      method: RequestMethod.ALL,
    });
  }
}
