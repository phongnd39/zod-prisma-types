import { WriteFieldOptions } from '../../types';

export const writeJson = ({ writer, field }: WriteFieldOptions) => {
  writer
    .conditionalWrite(field.omitInModel(), '// omitted: ')
    .write(`${field.formattedNames.original}: JsonValueSchema`)
    // .conditionalWrite(field.isRequired, `InputJsonValue`)
    // .conditionalWrite(field.isRequired, `JsonValue`)
    // .conditionalWrite(
    //   !field.isRequired,
    //   `z.union([JsonValue, z.literal(null)])`,
    // )
    .conditionalWrite(field.isList, `.array()`)
    .conditionalWrite(!field.isNullable, `.nullable()`) // needs to be nullable instead of optional to adhere to the type returned by Prisma
    .write(`,`)
    .newLine();
};
