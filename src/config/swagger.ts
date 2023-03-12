import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';

const options: SwaggerCustomOptions = {
  swaggerOptions: {
    displayRequestDuration: true,
  },
};

export class SwaggerBuilder {
  public static build(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle('Stock Market API')
      .setDescription('API Authentication with JSON Web Tokens')
      .setVersion('1.0')
      .addBearerAuth(
        {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
        'jwt',
      )
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document, options);
  }
}
