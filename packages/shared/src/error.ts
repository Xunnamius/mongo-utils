/**
 * A collection of possible error and warning messages.
 */
/* istanbul ignore next */
export const ErrorMessage = {
  IllegalAccessOfSingleton() {
    return 'attempted to access global singleton memory object which is not allowed in multitenancy mode';
  },
  CannotSetReadOnlyProperty(key: string) {
    return `cannot call setToSharedMemory on readonly property "${key}"`;
  },
  MissingTenantId() {
    return 'an async local store is missing its tenantId';
  }
};
