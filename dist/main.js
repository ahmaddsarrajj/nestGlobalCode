"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const nestjs_i18n_1 = require("nestjs-i18n");
const nestjs_i18n_2 = require("nestjs-i18n");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        exceptionFactory: nestjs_i18n_1.i18nValidationErrorFactory,
    }));
    app.useGlobalFilters(new nestjs_i18n_2.I18nValidationExceptionFilter());
    app.enableCors();
    await app.listen(5001);
}
bootstrap();
//# sourceMappingURL=main.js.map