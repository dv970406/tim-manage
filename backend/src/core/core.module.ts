import { Module } from '@nestjs/common';
import { NodeResolver } from './resolver/node.resolver';

@Module({
  providers: [NodeResolver],
})
export class CoreModule {}
