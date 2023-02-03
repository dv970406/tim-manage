import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (err) => ({
        ok: false,
        error: err[0].constraints.isUuid,
      }),
    }),
  );
  await app.listen(process.env.PORT);
}
bootstrap();
