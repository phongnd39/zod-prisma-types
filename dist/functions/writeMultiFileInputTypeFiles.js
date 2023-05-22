"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeInputTypeFiles = void 0;
const _1 = require(".");
const classes_1 = require("../classes");
const writeInputTypeFiles = ({ path: outputPath, dmmf, }) => {
    const { inputTypePath } = dmmf.generatorConfig;
    const indexFileWriter = new classes_1.FileWriter();
    const path = indexFileWriter.createPath(`${outputPath}/${inputTypePath}`);
    if (path) {
        indexFileWriter.createFile(`${path}/index.ts`, ({ writeExport }) => {
            if (dmmf.generatorConfig.createInputTypes) {
                dmmf.schema.inputObjectTypes.prisma.forEach(({ name }) => {
                    writeExport(`{ ${name}Schema }`, `./${name}Schema`);
                });
            }
            dmmf.schema.enumTypes.prisma.forEach(({ name }) => {
                writeExport(`{ ${name}Schema }`, `./${name}Schema`);
            });
            dmmf.datamodel.enums.forEach(({ name }) => {
                writeExport(`{ ${name}Schema }`, `./${name}Schema`);
            });
            if (dmmf.schema.hasJsonTypes) {
                writeExport(`{ transformJsonNull }`, `./transformJsonNull`);
                writeExport(`{ NullableJsonValue }`, `./NullableJsonValue`);
                writeExport(`{ InputJsonValue }`, `./InputJsonValue`);
                writeExport(`{ JsonValue }`, `./JsonValue`);
            }
            if (dmmf.schema.hasDecimalTypes) {
                writeExport(`{ DecimalJSLikeSchema }`, `./DecimalJsLikeSchema`);
                writeExport(`{ DecimalJSLikeListSchema }`, `./DecimalJsLikeListSchema`);
                writeExport(`{ isValidDecimalInput }`, `./isValidDecimalInput`);
            }
        });
        if (dmmf.schema.hasJsonTypes) {
            new classes_1.FileWriter().createFile(`${path}/transformJsonNull.ts`, (fileWriter) => (0, _1.writeTransformJsonNull)({ fileWriter, dmmf }));
            new classes_1.FileWriter().createFile(`${path}/JsonValue.ts`, (fileWriter) => (0, _1.writeJsonValue)({ fileWriter, dmmf }));
            new classes_1.FileWriter().createFile(`${path}/NullableJsonValue.ts`, (fileWriter) => (0, _1.writeNullableJsonValue)({ fileWriter, dmmf }));
            new classes_1.FileWriter().createFile(`${path}/InputJsonValue.ts`, (fileWriter) => (0, _1.writeInputJsonValue)({ fileWriter, dmmf }));
        }
        if (dmmf.schema.hasDecimalTypes) {
            new classes_1.FileWriter().createFile(`${path}/DecimalJsLikeSchema.ts`, (fileWriter) => (0, _1.writeDecimalJsLike)({ fileWriter, dmmf }));
            new classes_1.FileWriter().createFile(`${path}/DecimalJsLikeListSchema.ts`, (fileWriter) => (0, _1.writeDecimalJsLikeList)({ fileWriter, dmmf }));
            new classes_1.FileWriter().createFile(`${path}/isValidDecimalInput.ts`, (fileWriter) => (0, _1.writeIsValidDecimalInput)({ fileWriter, dmmf }));
        }
        dmmf.schema.enumTypes.prisma.forEach((enumData) => {
            new classes_1.FileWriter().createFile(`${path}/${enumData.name}Schema.ts`, (fileWriter) => (0, _1.writePrismaEnum)({ fileWriter, dmmf }, enumData));
        });
        dmmf.datamodel.enums.forEach((enumData) => {
            new classes_1.FileWriter().createFile(`${path}/${enumData.name}Schema.ts`, (fileWriter) => (0, _1.writeCustomEnum)({ fileWriter, dmmf }, enumData));
        });
        if (!dmmf.generatorConfig.createInputTypes)
            return;
        dmmf.schema.outputObjectTypes.model.forEach((model) => {
            if (model.hasRelationField()) {
                new classes_1.FileWriter().createFile(`${path}/${model.name}IncludeSchema.ts`, (fileWriter) => (0, _1.writeInclude)({ fileWriter, dmmf }, model));
            }
            new classes_1.FileWriter().createFile(`${path}/${model.name}SelectSchema.ts`, (fileWriter) => (0, _1.writeSelect)({ fileWriter, dmmf }, model));
        });
        dmmf.schema.inputObjectTypes.prisma.forEach((inputType) => {
            new classes_1.FileWriter().createFile(`${path}/${inputType.name}Schema.ts`, (fileWriter) => (0, _1.writeInputObjectType)({ fileWriter, dmmf }, inputType));
        });
    }
};
exports.writeInputTypeFiles = writeInputTypeFiles;
//# sourceMappingURL=writeMultiFileInputTypeFiles.js.map