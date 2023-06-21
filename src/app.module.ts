import { Module, ValidationPipe, MiddlewareConsumer } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { Users } from './users/users.entity';
import { Report } from './reports/report.entity';
// Importing the 'ConfigModule' and 'ConfigService' from the '@nestjs/config' package to use the environment variables in the application code.
import { ConfigModule, ConfigService } from '@nestjs/config';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cookieSession = require('cookie-session');

@Module({
  imports: [
    // Added 'ConfigModule.forRoot()' to the '@Module' decorator's 'imports' array to load the environment variables.
    ConfigModule.forRoot({
      // Added 'isGlobal: true' to make the configuration module available everywhere in the application.
      isGlobal: true,
      // Added 'envFilePath: `.env.${process.env.NODE_ENV}`' to load the environment variables from the '.env.development', '.env.test', (etc.) files when the application is running in the development, test... (etc.) environments.
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    // Added 'TypeOrmModule.forRootAsync()' to the '@Module' decorator's 'imports' array to load the environment variables from the 'ConfigService'.
    TypeOrmModule.forRootAsync({
      // Injecting the 'ConfigService' into the 'TypeOrmModule.forRootAsync()' method.
      inject: [ConfigService],
      // Using the 'useFactory' property to load the environment variables from the 'ConfigService'. This is the dependency injection design pattern.
      useFactory: (config: ConfigService) => {
        // Returning the database configuration object.
        return {
          // Using the 'type' property to specify the database type.
          type: 'sqlite',
          // Using the 'database' property to specify the database name.
          database: config.get<string>('DB_NAME'),
          // Using the 'entities' property to specify the entities.
          entities: [Users, Report],
          // Using the 'synchronize' property to synchronize the database schema with the entities.
          synchronize: true,
        };
      },
    }),
    // This is the old way of loading the environment variables from the 'ConfigService', it is commented out because it is not the dependency injection design pattern.
    // TypeOrmModule.forRoot({
    //   type: 'sqlite',
    //   database: 'database.sqlite',
    //   entities: [Users, Report],
    //   synchronize: true,
    // }),
    UsersModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        cookieSession({
          keys: ['asdf'],
        }),
      )
      .forRoutes('*');
  }
}
