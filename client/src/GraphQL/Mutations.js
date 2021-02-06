import { gql } from "@apollo/client";

export const CREATE_JOB_MUTATION = gql`
  mutation createJob(
    $company: String!
    $logo: String!
    $isNew: Boolean!
    $isFeatured: Boolean!
    $position: String!
    $level: String!
    $contract: String!
    $location: String!
    $languages: [String]!
    $description: String!
  ) {
    createJob(
      company: $company
      logo: $logo
      isNew: $isNew
      isFeatured: $isFeatured
      position: $position
      level: $level
      contract: $contract
      location: $location
      languages: $languages
      description: $description
    ) {
      id
    }
  }
`;
