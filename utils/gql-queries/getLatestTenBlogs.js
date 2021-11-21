import { gql } from '@apollo/client';

const GQL_GET_LATEST_TEN_BLOGS = gql`
    query getLatestTenBlogs {
        blogCollection(limit: 10) {
            items {
                sys {
                    id
                }
                title
                shortDescription
            }
        }
    }
`;

export default GQL_GET_LATEST_TEN_BLOGS;
