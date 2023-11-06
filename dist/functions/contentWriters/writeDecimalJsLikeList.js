"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeDecimalJsLikeList = void 0;
const writeDecimalJsLikeList = ({ fileWriter: { writer, writeImport }, dmmf, getSingleFileContent = false, }) => {
    const { useMultipleFiles, prismaClientPath } = dmmf.generatorConfig;
    if (useMultipleFiles && !getSingleFileContent) {
        writeImport('{ z }', 'zod');
        writeImport('type { Prisma }', `${prismaClientPath}`);
    }
    writer
        .blankLine()
        .writeLine(`export const DecimalJsLikeListSchema: z.ZodType<Prisma.DecimalJsLike[]> = z.object({`)
        .withIndentationLevel(1, () => {
        writer
            .writeLine(`d: z.array(z.number()),`)
            .writeLine(`e: z.number(),`)
            .writeLine(`s: z.number(),`)
            .writeLine(`toFixed: z.function(z.tuple([]), z.string()),`);
    })
        .writeLine(`}).array();`);
    if (useMultipleFiles && !getSingleFileContent) {
        writer.blankLine().writeLine(`export default DecimalJsLikeListSchema;`);
    }
};
exports.writeDecimalJsLikeList = writeDecimalJsLikeList;
//# sourceMappingURL=writeDecimalJsLikeList.js.map