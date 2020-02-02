const Discord = require('discord.js');
const client = new Discord.Client();

client.login('NjcyNzQ0NzA1NDYwNTM1MzE3.Xjc0-Q.mf9ubtEGBzWCCqR0UZj9OCqsoGY')
client.on('message', (msg) =>{
	switch(msg.content) {
	case 'h':
		msg.reply('Hey')
	}

})