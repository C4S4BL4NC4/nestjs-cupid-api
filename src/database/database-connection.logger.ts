import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseConnectionLogger implements OnModuleInit {
  private readonly logger = new Logger(DatabaseConnectionLogger.name);

  constructor(@InjectDataSource() private readonly dataSource: DataSource) {}

  async onModuleInit() {
    await this.dataSource.query('SELECT 1');
    this.logger.log('Connected to supabase');
  }
}
