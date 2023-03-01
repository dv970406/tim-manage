import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const LoggedInUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    try {
      const gqlContext = GqlExecutionContext.create(context).getContext();
      const user = gqlContext['user'];

      if (!user) {
        throw new Error('로그인이 필요합니다.');
      }
      return user;
    } catch (error) {
      return null;
    }
  },
);
