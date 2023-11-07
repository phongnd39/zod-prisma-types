"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeArgs = void 0;
const writeArgs = ({ fileWriter: { writer, writeImport }, dmmf, getSingleFileContent = false, }, model) => {
    const { useMultipleFiles, prismaClientPath, inputTypePath, prismaVersion } = dmmf.generatorConfig;
    if (useMultipleFiles && !getSingleFileContent) {
        writeImport('{ z }', 'zod');
        writeImport('type { Prisma }', prismaClientPath);
        writeImport(`{ ${model.name}SelectSchema }`, `../${inputTypePath}/${model.name}SelectSchema`);
        if (model.hasRelationField()) {
            writeImport(`{ ${model.name}IncludeSchema }`, `../${inputTypePath}/${model.name}IncludeSchema`);
        }
    }
    writer
        .blankLine()
        .write(`export const ${model.name}ArgsSchema: `)
        .conditionalWrite(((prismaVersion === null || prismaVersion === void 0 ? void 0 : prismaVersion.major) === 5 && (prismaVersion === null || prismaVersion === void 0 ? void 0 : prismaVersion.minor) >= 1) ||
        prismaVersion === undefined, `z.ZodType<Prisma.${model.name}DefaultArgs> = `)
        .conditionalWrite(((prismaVersion === null || prismaVersion === void 0 ? void 0 : prismaVersion.major) === 5 && (prismaVersion === null || prismaVersion === void 0 ? void 0 : prismaVersion.minor) === 0) ||
        (prismaVersion === null || prismaVersion === void 0 ? void 0 : prismaVersion.major) === 4, `z.ZodType<Prisma.${model.name}Args> = `)
        .write(`z.object(`)
        .inlineBlock(() => {
        writer
            .write(`select: `)
            .write(`z.lazy(() => ${model.name}SelectSchema).optional(),`)
            .newLine()
            .conditionalWrite(model.hasRelationField(), `include: z.lazy(() => ${model.name}IncludeSchema).optional(),`);
    })
        .write(`).strict();`);
    if (useMultipleFiles && !getSingleFileContent) {
        writer.blankLine().writeLine(`export default ${model.name}ArgsSchema;`);
    }
};
exports.writeArgs = writeArgs;
//# sourceMappingURL=writeArgs.js.map