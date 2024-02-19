const { SlashCommandBuilder, roleMention, bold, PermissionFlagsBits } = require('discord.js');
const { announceChannelId, roleId } = require('./../../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('open')
		.setDescription('Send open server announcement.')
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild),
	async execute(interaction) {
		const role = roleMention(roleId);
		await interaction.client.channels.cache.get(announceChannelId).send(bold(`PENGUMUMAN UNTUK SEMUA ${role}:`) + `
		Badai Telah Berhenti

		Kami ingin memberitahukan kepada seluruh warga bahwa untuk saat ini, badai telah berhenti. Kami mengingatkan kembali agar tidak lupa untuk membaca dan mematuhi peraturan yang telah ditetapkan. Selain itu, penting bagi kita semua untuk saling menghargai antar sesama.

		Terima kasih atas perhatian dan kerjasama Anda.`);
	},
};