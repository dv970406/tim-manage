import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Position } from '../entities/position.entity';

@InputType()
export class GetPositionsInput {}

@ObjectType()
export class GetPositionsOutput extends CoreOutput {
  @Field((type) => [Position], { nullable: true })
  positions?: Position[];
}
