import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { Survey } from 'src/survey/entities/survey.entity';

@InputType()
export class DeleteSurveyInput extends PickType(Survey, ['id']) {}

@ObjectType()
export class DeleteSurveyOutput extends CoreOutput {}
