function BineryToDecimal(binario) {
    if (binario.constructor != String) {
        return null;
    }
    binario = binario.replace(/^01/gi, " ");
    return Number.parseInt(binario, 2);
}

function BineryToOctal(binario) {
    if (binario.constructor != String) {
        return null;
    }
    binario = binario.replace(/^01/gi, " ");
    return Number.parseInt(binario, 2).toString("8");
}
function BineryToHexa(binario) {
    if (binario.constructor != String) {
        return null;
    }
    binario = binario.replace(/^01/gi, " ");
    return Number.parseInt(binario, 2).toString("16");
}
console.log(BineryToOctal("11111110"));