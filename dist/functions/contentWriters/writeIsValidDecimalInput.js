"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeIsValidDecimalInput = void 0;
const writeIsValidDecimalInput = ({ fileWriter: { writer, writeImport }, dmmf, getSingleFileContent = false, }) => {
    const { useMultipleFiles, prismaClientPath } = dmmf.generatorConfig;
    if (useMultipleFiles && !getSingleFileContent) {
        writeImport('type { Prisma }', `${prismaClientPath}`);
    }
    writer
        .blankLine()
        .writeLine(`export const DECIMAL_STRING_REGEX = /^(?:-?Infinity|NaN|-?(?:0[bB][01]+(?:\\.[01]+)?(?:[pP][-+]?\\d+)?|0[oO][0-7]+(?:\\.[0-7]+)?(?:[pP][-+]?\\d+)?|0[xX][\\da-fA-F]+(?:\\.[\\da-fA-F]+)?(?:[pP][-+]?\\d+)?|(?:\\d+|\\d*\\.\\d+)(?:[eE][-+]?\\d+)?))$/;`)
        .blankLine()
        .writeLine(`export const isValidDecimalInput =`)
        .withIndentationLevel(1, () => {
        writer
            .write(`(v?: null | string | number | Prisma.DecimalJsLike): v is string | number | Prisma.DecimalJsLike => `)
            .inlineBlock(() => {
            writer
                .writeLine(`if (v === undefined || v === null) return false;`)
                .writeLine(`return (`)
                .withIndentationLevel(3, () => {
                writer
                    .writeLine(`(typeof v === 'object' && 'd' in v && 'e' in v && 's' in v && 'toFixed' in v) ||`)
                    .writeLine(`(typeof v === 'string' && DECIMAL_STRING_REGEX.test(v)) ||`)
                    .writeLine(`typeof v === 'number'`);
            })
                .write(`)`);
        })
            .write(`;`);
    });
    if (useMultipleFiles && !getSingleFileContent) {
        writer.blankLine().writeLine(`export default isValidDecimalInput;`);
    }
};
exports.writeIsValidDecimalInput = writeIsValidDecimalInput;
//# sourceMappingURL=writeIsValidDecimalInput.js.map