export default function (value) {
    if (!value) return ''
    value = value.toString();
    return value.replace(/_/g, " ");
}