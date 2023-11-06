"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeCountArgs = void 0;
const writeCountArgs = ({ fileWriter: { writer, writeImport }, dmmf, getSingleFileContent = false, }, model) => {
    const { useMultipleFiles, prismaClientPath, prismaVersion } = dmmf.generatorConfig;
    if (useMultipleFiles && !getSingleFileContent) {
        writeImport('{ z }', 'zod');
        writeImport('type { Prisma }', prismaClientPath);
        writeImport(`{ ${model.name}CountOutputTypeSelectSchema }`, `./${model.name}CountOutputTypeSelectSchema`);
    }
    writer
        .blankLine()
        .write(`export const ${model.name}CountOutputTypeArgsSchema: `)
        .conditionalWrite(((prismaVersion === null || prismaVersion === void 0 ? void 0 : prismaVersion.major) === 5 && (prismaVersion === null || prismaVersion === void 0 ? void 0 : prismaVersion.minor) >= 1) ||
        prismaVersion === undefined, `z.ZodType<Prisma.${model.name}CountOutputTypeDefaultArgs> = `)
        .conditionalWrite(((prismaVersion === null || prismaVersion === void 0 ? void 0 : prismaVersion.major) === 5 && (prismaVersion === null || prismaVersion === void 0 ? void 0 : prismaVersion.minor) === 0) ||
        (prismaVersion === null || prismaVersion === void 0 ? void 0 : prismaVersion.major) === 4, `z.ZodType<Prisma.${model.name}CountOutputTypeArgs> = `)
        .write('z.object(')
        .inlineBlock(() => {
        writer.writeLine(`select: z.lazy(() => ${model.name}CountOutputTypeSelectSchema).nullish(),`);
    })
        .write(`).strict();`);
    if (useMultipleFiles && !getSingleFileContent) {
        writer
            .blankLine()
            .writeLine(`export default ${model.name}CountOutputTypeSelectSchema;`);
    }
};
exports.writeCountArgs = writeCountArgs;
//# sourceMappingURL=writeCountArgs.js.map