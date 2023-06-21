// Imported the "ValidationPipe" and "MiddlewareConsumer" classes from the '@nestjs/common' package.
import { Module, ValidationPipe, MiddlewareConsumer } from '@nestjs/common';
// Imported the 'APP_PIPE' constant from the '@nestjs/core' package.
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { Users } from './users/users.entity';
import { Report } from './reports/report.entity';
// Added the "cookie-session" package.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cookieSession = require('cookie-session');

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Users, Report],
      synchronize: true,
    }),
    UsersModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // Added the "ValidationPipe" class to the "providers" array. This makes the "ValidationPipe" class available to the entire application (globally).
    {
      // The "APP_PIPE" constant is a special token that tells Nest to use the "ValidationPipe" class.
      provide: APP_PIPE,
      // The "useValue" property is used to pass a value to the "ValidationPipe" class.
      useValue: new ValidationPipe({
        // The "whitelist" property is used to remove any properties that are not defined in the DTO.
        whitelist: true,
      }),
    },
  ],
})
export class AppModule {
  // Added the "configure" method to the "AppModule" class.
  configure(consumer: MiddlewareConsumer) {
    // The "consumer" parameter is an instance of the "MiddlewareConsumer" class.
    consumer
      // The "apply" method is used to apply middleware to the entire application (globally).
      .apply(
        // The "cookieSession" function is used to create a middleware that will be applied to the entire application (globally).
        cookieSession({
          // The "keys" property is used to encrypt the cookie.
          keys: ['asdf'],
        }),
      )
      // The "forRoutes" method is used to specify the routes that the middleware will be applied to.
      .forRoutes('*');
  }
}
