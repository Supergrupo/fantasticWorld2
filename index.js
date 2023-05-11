const btn = document.getElementById('btn');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_wv3hfei';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'ENVIAR MENSAJE';
                alert('Mensaje enviado correctamente!');
            }, (err) => {
                btn.value = 'ENVIAR MENSAJE';
                alert(JSON.stringify(err));
            });
    });

function ShowSelected() {
    // Para obtener el valos
    // var cod = document.getElementById("ticket").value;
    // alert(cod);

    // Para obtener el texto
    var combo = document.getElementById("ticket");
    var selected = combo.options[combo.selectedIndex].text;
    // alert(selected);
}