const { SlashCommandBuilder, roleMention, bold, PermissionFlagsBits } = require('discord.js');
const { announceChannelId, roleId } = require('./../../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('close')
		.setDescription('Send close server announcement.')
		.addNumberOption(option =>
			option
				.setName('hour')
				.setDescription('The hour city closed.')
				.setMinValue(0)
				.setMaxValue(24)
				.setRequired(true))
		.addNumberOption(option =>
			option
				.setName('minute')
				.setDescription('The minute city closed')
				.setMinValue(0)
				.setMaxValue(60)
				.setRequired(true))
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild),
	async execute(interaction) {
		const hour = interaction.options.getNumber('hour');
		const minute = interaction.options.getNumber('minute');
		const role = roleMention(roleId);
		await interaction.client.channels.cache.get(announceChannelId).send(bold(`PENGUMUMAN UNTUK SEMUA ${role}:`) + `
		Peringatan Badai

		Diberitahukan kepada seluruh warga, akan terjadi badai pada pukul ${hour}:${minute} WIB. Kami menghimbau kepada semua warga yang berada di luar rumah untuk berhati-hati. Mohon pastikan untuk menyimpan kendaraan Anda di dalam garasi sebagai langkah pencegahan kerusakan.
		
		Terima kasih atas perhatian dan kerjasamanya.`);
	},
};