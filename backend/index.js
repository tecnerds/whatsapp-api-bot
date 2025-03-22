import { Client } from 'whatsapp-web.js';
import qrcode  from 'qrcode-terminal';

const client = new Client();

client.on('ready', () => {
    console.log('Conectado!');
    
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('message_create', message => {
	if (message.body === '!ping') {
		// reply back "pong" directly to the message
		message.reply('pong');
	}
    console.log(menssage.body);
});


client.initialize();
