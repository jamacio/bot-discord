const { SlashCommandSubcommandBuilder } = require('discord.js');



module.exports = {
    data: new SlashCommandSubcommandBuilder()
        .setName("ping")
        .setDescription("Responde com Pong!"),

    async execute(interaction) {
        console.log(interaction);
        await interaction.reply("Pong!")
    }
}
