import { DMMF } from '@prisma/generator-helper';
import { GeneratorConfig } from '../../schemas';
import { ExtendedDMMFModelValidatorPattern } from './04_extendedDMMFModelValidatorPattern';

/////////////////////////////////////////////////
// REGEX
/////////////////////////////////////////////////

export const IMPORT_STATEMENT_REGEX_PATTERN =
  /(?<type>[\w]+)(\(\[)(?<imports>[\w "@'${}/,;:.~*-]+)(\]\))/;

export const IMPORT_STATEMENT_REGEX = /"(?<statement>[\w "'${}/,:@;.*-]+)"/;

/////////////////////////////////////////////////
// CLASS
/////////////////////////////////////////////////

export class ExtendedDMMFModelImportStatement extends ExtendedDMMFModelValidatorPattern {
  protected _importStatements?: string[];
  protected _automaticImports?: string[];
  readonly customImports: Set<string>;
  readonly imports: Set<string>;

  constructor(generatorConfig: GeneratorConfig, model: DMMF.Model) {
    super(generatorConfig, model);

    this._importStatements = this._getImportStatement();
    this._automaticImports = this._getAutomaticImports();
    this.customImports = this._getCustomImports();
    this.imports = this._getImports();
  }

  private _getImportStatement() {
    if (!this._validatorList) return;
    const importStatements = this._validatorList
      .filter((elem) => elem.includes('.import('))
      .map((importStatement) => {
        const importStatementMatch = importStatement.match(
          IMPORT_STATEMENT_REGEX_PATTERN,
        )?.groups?.['imports'];

        if (!importStatementMatch) {
          throw new Error(
            `[@zod generator error]: import statement is not valid. Check for unusal characters. ${this._errorLocation}`,
          );
        }

        return importStatementMatch;
      });

    return importStatements;
  }

  /**
   * Checks for certain field types and conditions and adds the necessary import statements to the model's imports.
   * @returns array of import statements that are automatically added to the model's imports.
   */
  private _getAutomaticImports() {
    const statements: string[] = [];

    const { inputTypePath, prismaClientPath } = this.generatorConfig;

    if (this.fields.some((field) => field.isJsonType)) {
      statements.push(
        `import { JsonValueSchema } from '../${inputTypePath}/JsonValueSchema'`,
      );
    }

    if (this.hasDecimalFields) {
      statements.push(`import { Prisma } from '${prismaClientPath}'`);
    }

    this.enumFields.forEach((field) => {
      statements.push(
        `import { ${field.type}Schema } from '../${inputTypePath}/${field.type}Schema'`,
      );
    });

    return statements;
  }

  private _getCustomImports() {
    if (!this._importStatements) return new Set<string>();

    const importList = this._importStatements
      .map((importStatement) => {
        const importStatementMatch = importStatement
          .split(/(?<="),/g) // split at `"` that is followed by a `,`
          .map(
            (statement) =>
              statement
                .trim()
                .match(IMPORT_STATEMENT_REGEX)
                ?.groups?.['statement'].replace(/["']/g, "'"),
          )
          .filter(
            (statement): statement is string => typeof statement === 'string',
          );

        return importStatementMatch;
      })
      .flat();

    return new Set(importList);
  }

  private _getImports() {
    const imports = new Set<string>();

    if (this._automaticImports) {
      this._automaticImports.forEach((statement) => imports.add(statement));
    }

    if (this.customImports) {
      this.customImports.forEach((statement) => imports.add(statement));
    }

    return imports;
  }
}
