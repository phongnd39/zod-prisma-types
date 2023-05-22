"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedDMMFModel = void 0;
const extendedDMMFField_1 = require("./extendedDMMFField/extendedDMMFField");
const formattedNames_1 = require("./formattedNames");
const constants_1 = require("../constants");
class ExtendedDMMFModel extends formattedNames_1.FormattedNames {
    constructor(generatorConfig, model) {
        super(model.name);
        Object.defineProperty(this, "generatorConfig", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "dbName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "fields", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "uniqueFields", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "uniqueIndexes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "documentation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "primaryKey", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "scalarFields", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "relationFields", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "filterdRelationFields", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "enumFields", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "hasRelationFields", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "hasRequiredJsonFields", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "hasOptionalJsonFields", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "hasOmitFields", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "hasDecimalFields", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "hasOptionalDefaultFields", {
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
        Object.defineProperty(this, "customImports", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "errorLocation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "clearedDocumentation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "optionalJsonFields", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "optionalJsonFieldUnion", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "writeOptionalDefaultValuesTypes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "writeRelationValueTypes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "writeOptionalDefaultsRelationValueTypes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "writePartialTypes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "writePartialRelationValueTypes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.generatorConfig = generatorConfig;
        this.name = model.name;
        this.dbName = model.dbName;
        this.fields = this._getExtendedFields(model);
        this.uniqueFields = model.uniqueFields;
        this.uniqueIndexes = model.uniqueIndexes;
        this.documentation = model.documentation;
        this.primaryKey = model.primaryKey;
        this.scalarFields = this._setScalarFields();
        this.relationFields = this._setRelationFields();
        this.filterdRelationFields = this._setFilteredRelationFields();
        this.enumFields = this._setEnumfields();
        this.hasRelationFields = this._setHasRelationFields();
        this.hasRequiredJsonFields = this._setHasRequiredJsonFields();
        this.hasOptionalJsonFields = this._setHasOptionalJsonFields();
        this.hasDecimalFields = this._setHasDecimalFields();
        this.hasOptionalDefaultFields = this._setHasOptionalDefaultFields();
        this.hasOmitFields = this._setHasOmitFields();
        this.errorLocation = this._setErrorLocation();
        const docsContent = this._getDocumentationContent();
        this.imports = docsContent.imports;
        this.customImports = docsContent.customImports;
        this.clearedDocumentation = docsContent === null || docsContent === void 0 ? void 0 : docsContent.documentation;
        this.optionalJsonFields = this._setOptionalJsonFields();
        this.optionalJsonFieldUnion = this._setOptionalJsonFieldUnion();
        this.writeOptionalDefaultValuesTypes =
            this._setWriteOptionalDefaultValuesTypes();
        this.writeRelationValueTypes = this._setWriteRelationValueTypes();
        this.writeOptionalDefaultsRelationValueTypes =
            this._setWriteOptionalDefaultsRelationValueTypes();
        this.writePartialTypes = this._setWritePartialTypes();
        this.writePartialRelationValueTypes =
            this._writePartialRelationValueTypes();
    }
    _setErrorLocation() {
        return `[Error Location]: Model: '${this.name}'.`;
    }
    _getExtendedFields(model) {
        return model.fields.map((field) => new extendedDMMFField_1.ExtendedDMMFFieldClass(field, this.generatorConfig, this.name));
    }
    _setScalarFields() {
        return this.fields.filter((field) => field.kind === 'scalar');
    }
    _setRelationFields() {
        return this.fields.filter((field) => field.kind === 'object');
    }
    _setFilteredRelationFields() {
        return this.relationFields.filter((field) => !field.type.includes(this.name));
    }
    _setHasRequiredJsonFields() {
        return this.fields.some((field) => field.isJsonType && field.isRequired);
    }
    _setHasOptionalJsonFields() {
        return this.fields.some((field) => field.isJsonType && !field.isRequired);
    }
    _setEnumfields() {
        return this.fields.filter((field) => field.kind === 'enum');
    }
    _setHasRelationFields() {
        return this.relationFields.length > 0;
    }
    _setHasOmitFields() {
        return this.fields.some((field) => field.isOmitField());
    }
    _setWriteOptionalDefaultValuesTypes() {
        return (this.generatorConfig.createOptionalDefaultValuesTypes);
    }
    _setWritePartialTypes() {
        return this.generatorConfig.createPartialTypes;
    }
    _setWriteRelationValueTypes() {
        return (this.hasRelationFields && this.generatorConfig.createRelationValuesTypes);
    }
    _setWriteOptionalDefaultsRelationValueTypes() {
        return this.writeRelationValueTypes && this.writeOptionalDefaultValuesTypes;
    }
    _writePartialRelationValueTypes() {
        return this.writeRelationValueTypes && this.writePartialTypes;
    }
    _setHasOptionalDefaultFields() {
        return this.fields.some((field) => field.isOptionalDefaultField);
    }
    _setHasDecimalFields() {
        return this.fields.some((field) => field.isDecimalType);
    }
    _setOptionalJsonFields() {
        return this.fields.filter((field) => field.isJsonType && !field.isRequired);
    }
    _setOptionalJsonFieldUnion() {
        return this.optionalJsonFields
            .map((field) => `"${field.name}"`)
            .join(' | ');
    }
    _getDocumentationContent() {
        const zodDirectives = this._extractZodDirectives();
        const automaticImports = this._getAutomaticImports();
        if (!zodDirectives)
            return {
                imports: new Set(automaticImports),
                customImports: new Set([]),
            };
        return {
            imports: new Set([...zodDirectives.customImports, ...automaticImports]),
            documentation: zodDirectives.clearedDocumentation,
            customImports: new Set(zodDirectives.customImports),
        };
    }
    _extractZodDirectives() {
        var _a, _b, _c, _d;
        if (!this.documentation)
            return;
        const importStatements = (_a = this.documentation) === null || _a === void 0 ? void 0 : _a.match(constants_1.IMPORT_STATEMENT_REGEX_PATTERN);
        if (!importStatements) {
            return {
                customImports: [],
                clearedDocumentation: this.documentation,
            };
        }
        const type = (_b = importStatements.groups) === null || _b === void 0 ? void 0 : _b['type'];
        if (type !== 'import') {
            throw new Error(`[@zod generator error]: '${type}' is not a valid validator key. ${this.errorLocation}`);
        }
        const importsList = (_d = (_c = importStatements.groups) === null || _c === void 0 ? void 0 : _c['imports']) === null || _d === void 0 ? void 0 : _d.split(/(?<="),/g).map((statement) => statement.trim());
        if (!importsList) {
            return {
                customImports: [],
                clearedDocumentation: this.documentation,
            };
        }
        return {
            customImports: importsList
                .map((statement) => {
                var _a, _b;
                return (_b = (_a = statement
                    .match(constants_1.IMPORT_STATEMENT_REGEX)) === null || _a === void 0 ? void 0 : _a.groups) === null || _b === void 0 ? void 0 : _b['statement'].replace(/["']/g, "'");
            })
                .filter((statement) => typeof statement === 'string'),
            clearedDocumentation: this.documentation
                .replace(constants_1.IMPORT_STATEMENT_REGEX_PATTERN, '')
                .trim(),
        };
    }
    _getAutomaticImports() {
        const statements = [];
        const { inputTypePath } = this.generatorConfig;
        if (this.hasOptionalJsonFields) {
            statements.push(`import { NullableJsonValue } from "../${inputTypePath}/NullableJsonValue"`);
        }
        if (this.hasRequiredJsonFields) {
            statements.push(`import { InputJsonValue } from "../${inputTypePath}/InputJsonValue"`);
        }
        if (this.hasDecimalFields) {
            statements.push(`import { DecimalJSLikeSchema } from "../${inputTypePath}/DecimalJsLikeSchema"`, `import { isValidDecimalInput } from "../${inputTypePath}/isValidDecimalInput"`);
        }
        this.enumFields.forEach((field) => {
            statements.push(`import { ${field.type}Schema } from '../${inputTypePath}/${field.type}Schema'`);
        });
        return statements;
    }
}
exports.ExtendedDMMFModel = ExtendedDMMFModel;
//# sourceMappingURL=extendedDMMFModel.js.map