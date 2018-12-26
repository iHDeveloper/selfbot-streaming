const DISCORD_TOKEN = process.argv[2]
const Discord = require('discord.js')
const client = new Discord.Client({
    fetchAllMembers: false,
    disableEveryone: true
})

client.on('ready', () => {
    console.log(`Loggined in as ${client.user.tag}`)
})

client.on('message', (message) => {
    if (message.author.id !== client.user.id) return undefined;
    if (message.content.startsWith("=streaming")) {
        let command = message.content.replace("=streaming", "").trim()
        if (command === "") {
            client.user.setActivity();
            console.log("Cleaned from streaming")
        } else {
            client.user.setActivity(command, {
                type: 'STREAMING',
                url: 'https://twitch.tv/iHDeveloper'
            })
            console.log("Set the streaming to " + command)
        }
        message.delete();
    } else if (message.content.startsWith('=watching')) {
        let command = message.content.replace("=watching", "").trim()
        if (command === "") {
            client.user.setActivity()
            console.log("Cleaned from watching")
        } else {
            client.user.setActivity(command, {
                type: 'WATCHING'
            })
            console.log("Set the watching to " + command)
        }
        message.delete();
    }
})

console.log("Logging in...")

client.login(DISCORD_TOKEN)