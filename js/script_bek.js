const TOKEN = "6154746876:AAEYgx6I6eUnjVjfkS8tyVHpKjDhZVehVCw";
const CHAT_ID = "-1001980868070";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

document.getElementById("tg").addEventListener('submit', function(e) {
    e.preventDefault();
    let message = '<b>Заявка с сайта</b>\n';
    message += `<b>Имя:</b> ${ this.name.value }\n`;
    message += `<b>Email:</b> ${ this.email.value }\n`;
    message += `<b>Телефон:</b> ${ this.tel.value }\n`;
    console.log(message);
    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
})