import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerMiddlewear } from './middlewear/logger.middlewear';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(new loggerMiddlewear());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
