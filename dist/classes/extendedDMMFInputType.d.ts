import { DMMF } from '@prisma/generator-helper';
import { ExtendedDMMFDatamodel } from './extendedDMMFDatamodel';
import { ExtendedDMMFModel } from './extendedDMMFModel';
import { ExtendedDMMFSchemaArg } from './extendedDMMFSchemaArg';
import { FormattedNames } from './formattedNames';
import { GeneratorConfig } from '../schemas';
export declare class ExtendedDMMFInputType extends FormattedNames implements DMMF.InputType {
    readonly generatorConfig: GeneratorConfig;
    readonly name: DMMF.InputType['name'];
    readonly constraints: DMMF.InputType['constraints'];
    readonly meta: DMMF.InputType['meta'];
    readonly fields: ExtendedDMMFSchemaArg[];
    readonly linkedModel?: ExtendedDMMFModel;
    readonly isJsonField: boolean;
    readonly isBytesField: boolean;
    readonly isDecimalField: boolean;
    readonly omitFields: string[];
    readonly imports: Set<string>;
    readonly isWhereUniqueInput?: boolean;
    readonly extendedWhereUniqueFields?: ExtendedDMMFSchemaArg[][];
    constructor(generatorConfig: GeneratorConfig, type: DMMF.InputType, datamodel: ExtendedDMMFDatamodel);
    private _setLinkedModel;
    private _setFields;
    private _fieldIsPrismaFunctionType;
    private _getZodValidatorString;
    private _getZodCustomErrorsString;
    private _getZodCustomValidatorString;
    private _getZodOmitField;
    private _setIsJsonField;
    private _setIsBytesField;
    private _setIsDecimalField;
    private _setOmitFields;
    private _setImports;
    private _getExtendedWhereUniqueFieldCombinations;
    private _setExtendedWhereUniqueFields;
    hasOmitFields(): boolean;
    getOmitFieldsUnion(): string;
}
//# sourceMappingURL=extendedDMMFInputType.d.ts.map