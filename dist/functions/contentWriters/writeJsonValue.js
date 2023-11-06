"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeJsonValue = void 0;
const writeJsonValue = ({ fileWriter: { writer, writeImport }, dmmf, getSingleFileContent = false, }) => {
    const { useMultipleFiles, prismaClientPath } = dmmf.generatorConfig;
    if (useMultipleFiles && !getSingleFileContent) {
        writeImport('{ z }', 'zod');
        writeImport('type { Prisma }', prismaClientPath);
    }
    writer
        .blankLine()
        .writeLine(`export const JsonValueSchema: z.ZodType<Prisma.JsonValue> = z.lazy(() =>`)
        .withIndentationLevel(1, () => {
        writer
            .writeLine('z.union([')
            .withIndentationLevel(2, () => {
            writer
                .writeLine(`z.string(),`)
                .writeLine(`z.number(),`)
                .writeLine(`z.boolean(),`)
                .writeLine(`z.literal(null),`)
                .writeLine(`z.record(z.lazy(() => JsonValueSchema.optional())),`)
                .writeLine(`z.array(z.lazy(() => JsonValueSchema)),`);
        })
            .writeLine(`])`);
    })
        .writeLine(`);`);
    writer
        .blankLine()
        .writeLine(`export type JsonValueType = z.infer<typeof JsonValueSchema>;`);
    if (useMultipleFiles && !getSingleFileContent) {
        writer.blankLine().writeLine(`export default JsonValueSchema`);
    }
};
exports.writeJsonValue = writeJsonValue;
//# sourceMappingURL=writeJsonValue.js.map