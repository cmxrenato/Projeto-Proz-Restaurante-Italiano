// Teste de interação
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#reservaForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevenir envio do formulário até a validação
        let hasErrors = false;

        // Limpar mensagens de erro anteriores
        document.querySelector("#nomeAjuda").textContent = "";
        document.querySelector("#telefoneAjuda").textContent = "";
        document.querySelector("#dataAjuda").textContent = "";
        document.querySelector("#horaAjuda").textContent = "";

        // Nome completo
        const nome = document.querySelector("#nomeCompleto");
        if (nome.value.trim().split(" ").length < 2) {
            document.querySelector("#nomeAjuda").textContent = "Por favor, insira o nome completo.";
            hasErrors = true;
        }

        // Telefone (deve ter pelo menos 10 a 11 dígitos para formatos brasileiros)
        const telefone = document.querySelector("#telefone");
        const telefoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
        if (!telefoneRegex.test(telefone.value.trim())) {
            document.querySelector("#telefoneAjuda").textContent = "Por favor, insira um número de telefone válido (formato: (XX) XXXXX-XXXX).";
            hasErrors = true;
        }

        // Data (deve ser uma data futura)
        const data = document.querySelector("#dataReserva");
        const dataAtual = new Date();
        const dataSelecionada = new Date(data.value);
        if (dataSelecionada <= dataAtual) {
            document.querySelector("#dataAjuda").textContent = "Por favor, insira uma data futura para a reserva.";
            hasErrors = true;
        }

        // Hora (deve ser uma hora futura se a data for hoje)
        const hora = document.querySelector("#horaReserva");
        if (dataSelecionada.toDateString() === dataAtual.toDateString()) {
            const [horaSelecionada, minutoSelecionado] = hora.value.split(":").map(Number);
            const horaAtual = dataAtual.getHours();
            const minutoAtual = dataAtual.getMinutes();
            if (horaSelecionada < horaAtual || (horaSelecionada === horaAtual && minutoSelecionado <= minutoAtual)) {
                document.querySelector("#horaAjuda").textContent = "Por favor, insira um horário futuro para hoje.";
                hasErrors = true;
            }
        }

        if (!hasErrors) {
            form.submit();
        }
    });
});
//Fim do teste :)




document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#reservaForm");
    
    form.addEventListener("submit", function (event) {
        // Evita o envio do formulário se houver erros
        event.preventDefault();
        let hasErrors = false;

        // Nome completo
        const nome = document.querySelector("#nomeCompleto");
        if (nome.value.trim().split(" ").length < 2) {
            alert("Por favor, insira o nome completo.");
            hasErrors = true;
        }

        // Telefone (deve ter pelo menos 10 a 11 dígitos para formatos brasileiros)
        const telefone = document.querySelector("#telefone");
        const telefoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
        if (!telefoneRegex.test(telefone.value.trim())) {
            alert("Por favor, insira um número de telefone válido (formato: (XX) XXXXX-XXXX).");
            hasErrors = true;
        }

        // Data (deve ser uma data futura)
        const data = document.querySelector("#dataReserva");
        const dataAtual = new Date();
        const dataSelecionada = new Date(data.value);
        if (dataSelecionada <= dataAtual) {
            alert("Por favor, insira uma data futura para a reserva.");
            hasErrors = true;
        }

        // Hora (deve ser uma hora futura se a data for hoje)
        const hora = document.querySelector("#horaReserva");
        if (dataSelecionada.toDateString() === dataAtual.toDateString()) {
            const [horaSelecionada, minutoSelecionado] = hora.value.split(":").map(Number);
            const horaAtual = dataAtual.getHours();
            const minutoAtual = dataAtual.getMinutes();
            if (horaSelecionada < horaAtual || (horaSelecionada === horaAtual && minutoSelecionado <= minutoAtual)) {
                alert("Por favor, insira um horário futuro para hoje.");
                hasErrors = true;
            }
        }

        if (!hasErrors) {
            form.submit();
        }
    });
});