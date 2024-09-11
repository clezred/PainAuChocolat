const { TOKEN } = require('./config.json')
const { 
    Client,
    GatewayIntentBits,
    Partials,
    ActivityType,
    Collection,
    Events
} = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages

    ],
    partials: [
        Partials.MESSAGE
    ]
});

client.once(Events.ClientReady, () => {
    console.log('Ready!');
    client.user.setActivity({
        name: 'corriger les sudistes.',
        type: ActivityType.Playing
    });
});

client.on(Events.MessageCreate, async message => {
    if (message.author.bot) return;
    if (message.content.toUpperCase().includes('CHOCOLATINE')) {
        message.reply('On dit "**PAIN AU CHOCOLAT**" !!');
    }
});

client.login(TOKEN);
