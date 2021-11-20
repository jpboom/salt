const GQL_HOMEPAGE = gql`
    query Countries {
        countries {
            code
            name
            emoji
        }
    }
`;

export default GQL_HOMEPAGE;
