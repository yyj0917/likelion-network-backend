import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // params 같은 거 string -> number 전환.
    }),
  )
  app.enableCors();
  // app.use(cookieParser());
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
