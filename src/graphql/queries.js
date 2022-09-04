/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlayList = /* GraphQL */ `
  query GetPlayList($id: ID!) {
    getPlayList(id: $id) {
      id
      name
      movies
      createdAt
      updatedAt
    }
  }
`;
export const listPlayLists = /* GraphQL */ `
  query ListPlayLists(
    $filter: ModelPlayListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        movies
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
