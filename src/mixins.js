export default {
    methods: {
        allowOnlyNumbers: function (value) {
            const pressed = value.which || value.keyCode;
            let allowedKeys = [8, 46, 38, 40, 37, 39];

            if (/[^0-9\s]+/.test(value.key)) {
                if (allowedKeys.every(e => e !== pressed)) {
                    value.preventDefault();
                }
            } else
                return true
        },
    }
}