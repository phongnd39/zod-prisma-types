import { FormattedNames } from '../classes/formattedNames';
import { PrismaAction, PrismaScalarType, ZodCustomErrorKey, ZodPrismaScalarType, ZodScalarType, ZodValidatorType } from '../types';
export declare const PRISMA_TO_VALIDATOR_TYPE_MAP: Record<ZodValidatorType | 'custom', PrismaScalarType[]>;
export declare const PRISMA_TO_ZOD_TYPE_MAP: Record<ZodPrismaScalarType, ZodScalarType>;
export declare const ZOD_VALID_ERROR_KEYS: ZodCustomErrorKey[];
export type FilterdPrismaAction = Exclude<PrismaAction, 'executeRaw' | 'queryRaw' | 'count'>;
export declare const PRISMA_ACTION_ARG_MAP: Record<FilterdPrismaAction, FormattedNames>;
export declare const PRISMA_ACTION_ARRAY: FilterdPrismaAction[];
//# sourceMappingURL=objectMaps.d.ts.map