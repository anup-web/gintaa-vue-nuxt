import moment from "moment";
export default function (value) {
    if (!value) return ''
    // value = value.toString();
    return moment.unix(value).format("lll");
}