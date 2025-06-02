/**
 * A collection of possible error and warning messages.
 */
/* istanbul ignore next */
export const ErrorMessage = {
  NoSchemaConfigured() {
    return '"getSchemaConfig" was called before "setSchemaConfig"';
  },
  UnknownDatabaseAlias(alias: string) {
    return `database "${alias}" is not defined in schema`;
  }
};
