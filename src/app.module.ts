import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilesModule } from './profiles/profiles.module';
import { DatabaseConnectionLogger } from './database/database-connection.logger';
import { AuthModule } from './auth/auth.module';
import { MatchesService } from './matches/matches.service';
import { SwipesService } from './swipes/swipes.service';
import { ChatService } from './chat/chat.service';
import { MediaService } from './media/media.service';
import { LocationService } from './location/location.service';
import { SubscriptionService } from './subscription/subscription.service';
import { NotificationsService } from './notifications/notifications.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const url = configService.getOrThrow<string>('DB_STRING');

        return {
          type: 'postgres',
          url,
          autoLoadEntities: true,
          synchronize: true, // dev only
          // Supabase SSL (pg sometimes expects this under "extra")
          ssl: { rejectUnauthorized: false },
          extra: {
            ssl: { rejectUnauthorized: false },
          },
          logging: ['error'],
        };
      },
    }),
    ProfilesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    DatabaseConnectionLogger,
    MatchesService,
    SwipesService,
    ChatService,
    MediaService,
    LocationService,
    SubscriptionService,
    NotificationsService,
  ],
})
export class AppModule {}
