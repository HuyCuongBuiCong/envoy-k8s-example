import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
@Get()
getOrder() {
    return 'Hello User Service';
}
}
