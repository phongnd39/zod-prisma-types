"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedDMMFModelImportStatement = exports.IMPORT_STATEMENT_REGEX = exports.IMPORT_STATEMENT_REGEX_PATTERN = void 0;
const _04_extendedDMMFModelValidatorPattern_1 = require("./04_extendedDMMFModelValidatorPattern");
exports.IMPORT_STATEMENT_REGEX_PATTERN = /(?<type>[\w]+)(\(\[)(?<imports>[\w "@'${}/,;:.~*-]+)(\]\))/;
exports.IMPORT_STATEMENT_REGEX = /"(?<statement>[\w "'${}/,:@;.*-]+)"/;
class ExtendedDMMFModelImportStatement extends _04_extendedDMMFModelValidatorPattern_1.ExtendedDMMFModelValidatorPattern {
    constructor(generatorConfig, model) {
        super(generatorConfig, model);
        Object.defineProperty(this, "_importStatements", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_automaticImports", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "customImports", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "imports", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._importStatements = this._getImportStatement();
        this._automaticImports = this._getAutomaticImports();
        this.customImports = this._getCustomImports();
        this.imports = this._getImports();
    }
    _getImportStatement() {
        if (!this._validatorList)
            return;
        const importStatements = this._validatorList
            .filter((elem) => elem.includes('.import('))
            .map((importStatement) => {
            var _a, _b;
            const importStatementMatch = (_b = (_a = importStatement.match(exports.IMPORT_STATEMENT_REGEX_PATTERN)) === null || _a === void 0 ? void 0 : _a.groups) === null || _b === void 0 ? void 0 : _b['imports'];
            if (!importStatementMatch) {
                throw new Error(`[@zod generator error]: import statement is not valid. Check for unusal characters. ${this._errorLocation}`);
            }
            return importStatementMatch;
        });
        return importStatements;
    }
    _getAutomaticImports() {
        const statements = [];
        const { inputTypePath, prismaClientPath } = this.generatorConfig;
        if (this.fields.some((field) => field.isJsonType)) {
            statements.push(`import { JsonValueSchema } from '../${inputTypePath}/JsonValueSchema'`);
        }
        if (this.hasDecimalFields) {
            statements.push(`import { Prisma } from '${prismaClientPath}'`);
        }
        this.enumFields.forEach((field) => {
            statements.push(`import { ${field.type}Schema } from '../${inputTypePath}/${field.type}Schema'`);
        });
        return statements;
    }
    _getCustomImports() {
        if (!this._importStatements)
            return new Set();
        const importList = this._importStatements
            .map((importStatement) => {
            const importStatementMatch = importStatement
                .split(/(?<="),/g)
                .map((statement) => {
                var _a, _b;
                return (_b = (_a = statement
                    .trim()
                    .match(exports.IMPORT_STATEMENT_REGEX)) === null || _a === void 0 ? void 0 : _a.groups) === null || _b === void 0 ? void 0 : _b['statement'].replace(/["']/g, "'");
            })
                .filter((statement) => typeof statement === 'string');
            return importStatementMatch;
        })
            .flat();
        return new Set(importList);
    }
    _getImports() {
        const imports = new Set();
        if (this._automaticImports) {
            this._automaticImports.forEach((statement) => imports.add(statement));
        }
        if (this.customImports) {
            this.customImports.forEach((statement) => imports.add(statement));
        }
        return imports;
    }
}
exports.ExtendedDMMFModelImportStatement = ExtendedDMMFModelImportStatement;
//# sourceMappingURL=05_extendedDMMFModelImportStatement.js.map