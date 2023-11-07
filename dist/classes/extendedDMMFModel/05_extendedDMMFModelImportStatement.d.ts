import { DMMF } from '@prisma/generator-helper';
import { GeneratorConfig } from '../../schemas';
import { ExtendedDMMFModelValidatorPattern } from './04_extendedDMMFModelValidatorPattern';
export declare const IMPORT_STATEMENT_REGEX_PATTERN: RegExp;
export declare const IMPORT_STATEMENT_REGEX: RegExp;
export declare class ExtendedDMMFModelImportStatement extends ExtendedDMMFModelValidatorPattern {
    protected _importStatements?: string[];
    protected _automaticImports?: string[];
    readonly customImports: Set<string>;
    readonly imports: Set<string>;
    constructor(generatorConfig: GeneratorConfig, model: DMMF.Model);
    private _getImportStatement;
    private _getAutomaticImports;
    private _getCustomImports;
    private _getImports;
}
//# sourceMappingURL=05_extendedDMMFModelImportStatement.d.ts.map