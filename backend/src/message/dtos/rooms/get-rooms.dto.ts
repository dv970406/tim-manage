import { Field, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Room } from 'src/message/entity/room.entity';

@ObjectType()
export class GetRoomsOutput extends CoreOutput {
  @Field((type) => [Room], { nullable: true })
  rooms?: Room[];
}
