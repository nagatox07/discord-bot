const {SlashCommandBuilder} = require('discord.js');  
const users=require('../data/users'); 

module.exports={
    data:new SlashCommandBuilder().setName('register').setDescription('register uyourself as F1 driver '),
    async execute(interaction){
        const userId=interaction.user.id;

        if(users.has(userId)){
            return interaction.reply({
                content:"You are already registered!",  
                emphemeral:true
            })}

            const newUser={
            id:userId,
            driver:null,
            races:0,
            points:0
         }

         users.set(userId,newUser);
         return interaction.reply({
            content:"you have been registered as an F1 Driver!!!!!!, lets rev the enginers and start racing",
         })
}}