/**
 * Interface used for normalised data structure. When thinking about scalability and separation of concerns 
 * this is a good practice, as you get the following:
 * - Data stored in a Map, with possibility to remain immutable
 * - IDs for iteration and access
 * - Ability to create separate arrays of IDs for presentational and functional purposes (i.e. pagination, filtering, sorting, etc)
 */
interface INormalisedData<T, V extends string | number> {
  ids: V[];
  data: T;
}

export default INormalisedData;