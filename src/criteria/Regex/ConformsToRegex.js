export const ConformsToRegex = (input, criteria) => {
    let value = input.value;
    return value.match(criteria.pattern) !== null;
}