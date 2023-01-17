import { CustomRepository } from 'src/core/repository/custom.decorator';
import { Repository } from 'typeorm';
import { Answer } from '../entities/answer.entity';

@CustomRepository(Answer)
export class AnswerRepository extends Repository<Answer> {}
