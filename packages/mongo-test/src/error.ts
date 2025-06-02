/**
 * A collection of possible error and warning messages.
 */
/* istanbul ignore next */
export const ErrorMessage = {
  NoDummyConfigured() {
    return '"getDummyData" was called before "setDummyData"';
  },
  DuplicateAliasSpecifications(foundAliases: string[]) {
    return `the following aliases have duplicate dummy data specifications (only one may exist): ${foundAliases.join(
      ', '
    )}`;
  },
  DuplicateDatabaseSpecifications(nameActual: string, alias: string) {
    return `duplicate dummy data specifications for database "${nameActual}" and alias "${alias}"`;
  },
  NoDummyData(nameActual: string) {
    return `dummy data for database "${nameActual}" does not exist`;
  },
  NoDummyDataCollection(nameActual: string, colName: string) {
    return `collection "${nameActual}.${colName}" referenced in dummy data is not defined in source db schema`;
  },
  PortUnavailable(port: number | string) {
    return `unable to start mongodb memory server: port ${port} seems to be in use`;
  }
};
