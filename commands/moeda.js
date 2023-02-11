const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const valuesEmbed = new EmbedBuilder();
(async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL');
    const data = await response.json();
    valuesEmbed.setColor("Blue");
    valuesEmbed.setTitle("Cotação de Hoje:");

    Object.keys(data).forEach(key => {
        valuesEmbed.addFields(
            { name: data[key].code, value: 'High: ' + formatValueBr(data[key].high) + ' \n Low: ' + formatValueBr(data[key].low), inline: true }
        );
    });

})();

const formatValueBr = (value) => {
    var value = parseFloat(value).toFixed(2).split('.');
    value[0] = "R$ " + value[0].split(/(?=(?:...)*$)/).join('.');
    return value.join(',');
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName("moeda")
        .setDescription("API de Cotações de Moedas"),

    async execute(interaction) {
        await interaction.reply({ embeds: [valuesEmbed] })
    }
}