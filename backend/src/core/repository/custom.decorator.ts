import { SetMetadata } from '@nestjs/common';

export const CUSTOM_TYPEORM_REPOSITORY = 'CUSTOM_TYPEORM_REPOSITORY';

export function CustomRepository(entity): ClassDecorator {
  return SetMetadata(CUSTOM_TYPEORM_REPOSITORY, entity);
}
