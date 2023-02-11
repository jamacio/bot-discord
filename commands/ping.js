const { SlashCommandSubcommandBuilder } = require('discord.js');



module.exports = {
    data: new SlashCommandSubcommandBuilder()
        .setName("ping")
        .setDescription("Responde com Pong!"),

    async execute(interation) {
        console.log(interation);
        await interation.reply("Pong!")
    }
}
