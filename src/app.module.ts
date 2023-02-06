import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ArtistModule } from './artist/artist.module';
import { AlbumModule } from './album/album.module';
import { TrackModule } from './track/track.module';
import { FavsService } from './favs/favs.service';
import { FavsController } from './favs/favs.controller';
import { FavsModule } from './favs/favs.module';

@Module({
  imports: [UserModule, ArtistModule, AlbumModule, TrackModule, FavsModule],
  providers: [FavsService],
  controllers: [FavsController],
})
export class AppModule {}
