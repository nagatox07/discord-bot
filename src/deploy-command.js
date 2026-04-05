require('dotenv').config(); 
const fs=require('fs');
const path=require('path');
const{REST,Routes}=require('discord.js');

const commands=[];
const commandsPath=path.join(__dirname,'commands');
const commandFiles=fs.readdirSync(commandsPath).filter(file=>file.endsWith('.js'));

for(const file of commandFiles){
    const filePath=path.join(commandsPath,file);
    const command=require(filePath);
    commands.push(command.data);
}

const rest= new REST({version:'10'}).setToken(process.env.TOKEN);

(async()=>{
    try{
        console.log("registering commands");

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID,process.env.GUILD_ID),
            {body:commands}
        );
        console.log("commands registered successfully");
    } catch (error) {
        console.error("Error registering commands:", error);

    }
})();