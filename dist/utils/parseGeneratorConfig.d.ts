import { GeneratorOptions } from '@prisma/generator-helper';
export declare const parseGeneratorConfig: (generatorOptions: GeneratorOptions) => {
    provider?: string | undefined;
    prismaVersion?: {
        major: number;
        minor: number;
        patch: number;
    } | undefined;
    prismaClientPath: string;
    useMultipleFiles: boolean;
    writeBarrelFiles: boolean;
    createInputTypes: boolean;
    createModelTypes: boolean;
    createOptionalDefaultValuesTypes: boolean;
    createRelationValuesTypes: boolean;
    createPartialTypes: boolean;
    addInputTypeValidation: boolean;
    addIncludeType: boolean;
    addSelectType: boolean;
    validateWhereUniqueInput: boolean;
    useDefaultValidators: boolean;
    coerceDate: boolean;
    writeNullishInModelTypes: boolean;
    isMongoDb: boolean;
    inputTypePath: string;
    outputTypePath: string;
    decimalJSInstalled: boolean;
};
//# sourceMappingURL=parseGeneratorConfig.d.ts.map