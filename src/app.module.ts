import { Module } from '@nestjs/common';
// Imported TypeOrmModule to use TypeORM in NestJS application.
// This module is used to connect to the database.
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
// Imported Users entity to use it in the module.
import { Users } from './users/users.entity';
// Imported Report entity to use it in the module.
import { Report } from './reports/report.entity';

@Module({
  imports: [
    // TypeOrmModule is imported with forRoot() method.
    TypeOrmModule.forRoot({
      // Type of database used.
      type: 'sqlite',
      // Path of the database file.
      database: 'database.sqlite',
      // Entities are the models of the database. Added Users entity to the entities array.
      entities: [
        // Added Users entity to the entities array.
        Users,
        // Added Report entity to the entities array.
        Report,
      ],
      // Synchronize is used to synchronize the database with the models.
      synchronize: true,
    }),
    UsersModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
