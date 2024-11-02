function calcularHonorarios() {
    const valorCausa = parseFloat(document.getElementById('valorCausa').value);
    const percentualHonorarios = parseFloat(document.getElementById('percentualHonorarios').value);

    if (isNaN(valorCausa) || isNaN(percentualHonorarios)) {
        document.getElementById('resultadoHonorarios').innerText = "Por favor, insira valores válidos.";
        return;
    }

    const honorarios = (valorCausa * percentualHonorarios) / 100;
    document.getElementById('resultadoHonorarios').innerText = `Honorários: R$ ${honorarios.toFixed(2)}`;
}

function calcularJuros() {
    const capital = parseFloat(document.getElementById('capital').value);
    const taxaJuros = parseFloat(document.getElementById('taxaJuros').value);
    const tempo = parseFloat(document.getElementById('tempo').value);

    if (isNaN(capital) || isNaN(taxaJuros) || isNaN(tempo)) {
        document.getElementById('resultadoJuros').innerText = "Por favor, insira valores válidos.";
        return;
    }

    const juros = (capital * taxaJuros * tempo) / 100;
    const total = capital + juros;
    document.getElementById('resultadoJuros').innerText = `Juros: R$ ${juros.toFixed(2)} | Total: R$ ${total.toFixed(2)}`;
}
