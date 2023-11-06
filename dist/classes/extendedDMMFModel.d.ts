import { DMMF } from '@prisma/generator-helper';
import { ExtendedDMMFField } from './extendedDMMFField/extendedDMMFField';
import { FormattedNames } from './formattedNames';
import '../constants';
import { GeneratorConfig } from '../schemas';
export declare const IMPORT_STATEMENT_REGEX_PATTERN: RegExp;
export declare const IMPORT_STATEMENT_REGEX: RegExp;
export declare class ExtendedDMMFModel extends FormattedNames implements DMMF.Model {
    readonly generatorConfig: GeneratorConfig;
    readonly name: DMMF.Model['name'];
    readonly dbName: DMMF.Model['dbName'];
    readonly fields: ExtendedDMMFField[];
    readonly uniqueFields: DMMF.Model['uniqueFields'];
    readonly uniqueIndexes: DMMF.Model['uniqueIndexes'];
    readonly documentation?: DMMF.Model['documentation'];
    readonly primaryKey: DMMF.Model['primaryKey'];
    readonly scalarFields: ExtendedDMMFField[];
    readonly relationFields: ExtendedDMMFField[];
    readonly filterdRelationFields: ExtendedDMMFField[];
    readonly enumFields: ExtendedDMMFField[];
    readonly hasRelationFields: boolean;
    readonly hasRequiredJsonFields: boolean;
    readonly hasOptionalJsonFields: boolean;
    readonly hasOmitFields: boolean;
    readonly hasDecimalFields: boolean;
    readonly hasOptionalDefaultFields: boolean;
    readonly imports: Set<string>;
    readonly customImports: Set<string>;
    readonly errorLocation: string;
    readonly clearedDocumentation?: string;
    readonly optionalJsonFields: ExtendedDMMFField[];
    readonly optionalJsonFieldUnion: string;
    readonly writeOptionalDefaultValuesTypes: boolean;
    readonly writeRelationValueTypes: boolean;
    readonly writeOptionalDefaultsRelationValueTypes: boolean;
    readonly writePartialTypes: boolean;
    readonly writePartialRelationValueTypes: boolean;
    constructor(generatorConfig: GeneratorConfig, model: DMMF.Model);
    private _setErrorLocation;
    private _getExtendedFields;
    private _setScalarFields;
    private _setRelationFields;
    private _setFilteredRelationFields;
    private _setHasRequiredJsonFields;
    private _setHasOptionalJsonFields;
    private _setEnumfields;
    private _setHasRelationFields;
    private _setHasOmitFields;
    private _setWriteOptionalDefaultValuesTypes;
    private _setWritePartialTypes;
    private _setWriteRelationValueTypes;
    private _setWriteOptionalDefaultsRelationValueTypes;
    private _writePartialRelationValueTypes;
    private _setHasOptionalDefaultFields;
    private _setHasDecimalFields;
    private _setOptionalJsonFields;
    private _setOptionalJsonFieldUnion;
    private _getDocumentationContent;
    private _extractZodDirectives;
    private _getAutomaticImports;
}
//# sourceMappingURL=extendedDMMFModel.d.ts.map