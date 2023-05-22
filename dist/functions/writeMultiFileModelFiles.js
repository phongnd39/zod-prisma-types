"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeModelFiles = void 0;
const classes_1 = require("../classes");
const contentWriters_1 = require("./contentWriters");
const writeModelFiles = ({ path, dmmf }) => {
    if (!dmmf.generatorConfig.createModelTypes)
        return;
    const indexFileWriter = new classes_1.FileWriter();
    const modelPath = indexFileWriter.createPath(`${path}/modelSchema`);
    if (modelPath) {
        indexFileWriter.createFile(`${modelPath}/index.ts`, ({ writeExport }) => {
            dmmf.datamodel.models.forEach((model) => {
                writeExport(`*`, `./${model.name}Schema`);
            });
            dmmf.datamodel.types.forEach((model) => {
                writeExport(`*`, `./${model.name}Schema`);
            });
        });
    }
    dmmf.datamodel.models.forEach((model) => {
        new classes_1.FileWriter().createFile(`${modelPath}/${model.name}Schema.ts`, (fileWriter) => (0, contentWriters_1.writeModelOrType)({ fileWriter, dmmf }, model));
    });
    dmmf.datamodel.types.forEach((model) => {
        new classes_1.FileWriter().createFile(`${modelPath}/${model.name}Schema.ts`, (fileWriter) => (0, contentWriters_1.writeModelOrType)({ fileWriter, dmmf }, model));
    });
};
exports.writeModelFiles = writeModelFiles;
//# sourceMappingURL=writeMultiFileModelFiles.js.map