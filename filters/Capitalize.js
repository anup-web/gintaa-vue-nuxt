export default function (value) {
    if (!value) return ''
    value = value.toString();
    return value.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
}