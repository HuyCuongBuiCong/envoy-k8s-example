import { Controller, Get } from '@nestjs/common';

@Controller('order')
export class OrderController {
@Get()
getOrder() {
    return 'Hello order Service';
}
}