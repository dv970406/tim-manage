import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { CoreModule } from './core/core.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from './jwt/jwt.module';
import * as Joi from 'joi';
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
import { MealModule } from './meal/meal.module';
import { Meal } from './meal/entities/meal.entity';
import { Node } from './core/dtos/node.dto';
import { MessageModule } from './message/message.module';
import { Message } from './message/entity/message.entity';
import { Room } from './message/entity/room.entity';
import { CustomTypeOrmModule } from './core/repository/custom-typeorm.module';
import { NotificationModule } from './notification/notification.module';
import { Notification } from './notification/entities/notification.entity';
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
      subscriptions: {
        // graphql-ws로 대체함
        // 'subscriptions-transport-ws': {
        //   onConnect: ({ token }) => {
        //     console.log('token : ', token);
        //     return { token };
        //   },
        // },
        'graphql-ws': {
          onConnect: ({ connectionParams }) => ({
            token: connectionParams.token,
          }),
        },
      },
      context: ({ req, connectionParams }) => {
        console.log(req, connectionParams);
        if (connectionParams) {
          return { token: connectionParams.token };
        } else if (req) {
          return { token: req.headers.token };
        }
      },
      installSubscriptionHandlers: true,
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
        Meal,
        Node,
        Message,
        Room,
        Notification,
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
    MealModule,
    MessageModule,
    CustomTypeOrmModule,
    NotificationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule /* implements NestModule  */ {
  // Subscription을 추가하면서 아래 미들웨어는 HTTP에서만 동작하기에 WS에서도 사용하기 위해 JWT 미들웨어 로직을 Guard로 옮길것임
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(JwtMiddleware).forRoutes({
  //     path: '/graphql',
  //     method: RequestMethod.ALL,
  //   });
  // }
}
