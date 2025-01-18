const app = new Vue({
    el: '#app',
    data: () => ({
        Base: "10",
        binario: "",
        octal: "",
        decimal: "",
        hexadecimal: "",
        numero: "",
        binarioascii: "",
        octalascii: "",
        decimalascii: "",
        hexadecimalascii: "",
        ascii:[]
    }),
    methods: {
        changeNumberOrBase() {
            this.changesToBase(parseInt(this.numero, this.Base));
            this.generateAscii(this.numero);
        },
        changesToBase(numero) {
            if (!numero || numero.toString().length > 21)
                return;
            this.binario = numero.toString("2");
            this.octal = numero.toString("8");
            this.decimal = numero.toString("10");
            this.hexadecimal = numero.toString("16").toUpperCase();

            this.binarioascii = this.binario.split("").map(char => char.charCodeAt(0));
            this.octalascii = this.octal.split("").map(char => char.charCodeAt(0));
            this.decimalascii = this.decimal.split("").map(char => char.charCodeAt(0));
            this.hexadecimalascii = this.hexadecimal.split("").map(char => char.charCodeAt(0));
        },
        generateAscii(num) {
            if (!num) {
                this.ascii = [];
                this.binario = [];
                return;
            }
            const isHexadecimal = /^[0-9A-Fa-f]+$/.test(num);
        
            if (isHexadecimal) {
                this.ascii = num.split("").map(char => char.charCodeAt(0));
            } else {
                this.ascii = num.split("").map(char => char.charCodeAt(0));
                this.binario = this.ascii.map(ascii => ascii.toString(2).padStart(8, "0"));
            }
        },
        Clean() {
            this.numero = "";
            this.binario = "";
            this.octal = "";
            this.decimal = "";
            this.hexadecimal = "";
            this.ascii = [];
            this.binarioascii ="";
            this.octalascii ="";
            this.decimalascii ="";
            this.hexadecimalascii ="";
        }
    },
    watch: {
        Base() {
            this.changeNumberOrBase();
        },
        numero() {
            this.changeNumberOrBase();
        }
}});