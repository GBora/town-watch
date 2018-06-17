export const StringIsNotEmpty = (input) => {
    let value = input.value;
    let trimedValue = value.trim();
    return trimedValue.length > 0;
}