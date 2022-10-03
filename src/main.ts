import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { i18nValidationErrorFactory } from 'nestjs-i18n';
import { I18nValidationExceptionFilter } from 'nestjs-i18n';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      exceptionFactory: i18nValidationErrorFactory,
    }),
  );
  app.useGlobalFilters(new I18nValidationExceptionFilter());

  app.enableCors();
  await app.listen(5001);
}
bootstrap();
