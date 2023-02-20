import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PageInfo } from 'src/core/dtos/pagination.dto';
import { Vacation } from 'src/vacation/entities/vacation.entity';

@ObjectType()
export class VacationsConnection {
  @Field((type) => [VacationEdge])
  edges?: VacationEdge[];

  @Field((type) => PageInfo)
  pageInfo?: PageInfo;
}

@ObjectType()
export class VacationEdge {
  @Field((type) => Date)
  cursor: Date;

  @Field((type) => Vacation)
  node: Vacation;
}
