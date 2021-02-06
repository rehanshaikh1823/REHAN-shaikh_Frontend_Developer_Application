import { gql } from "@apollo/client";

export const LOAD_JOBS = gql`
  query {
    getAllJob {
      id
      company
      logo
      isNew
      isFeatured
      position
      level
      contract
      location
      languages
      description
    }
  }
`;
