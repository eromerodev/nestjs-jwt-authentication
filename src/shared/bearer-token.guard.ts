import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard, PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable()
export class BearerTokenGuard extends AuthGuard('jwt') {}

@Injectable()
export class BearerTokenStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(BearerTokenStrategy.name);
  /**
   *
   */
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true, //for development
      secretOrKey: configService.get<string>('secretOrKey'),
    });
  }

  async validate(payload: any) {
    this.logger.debug(JSON.stringify(payload));
    if (!payload.email) throw new UnauthorizedException();
    return payload;
  }
}
