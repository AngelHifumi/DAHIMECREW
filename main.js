'use strict';


const Discord = require("discord.js");
const osu = require("node-osu");
const client = new Discord.Client();

client.on("ready", () => {
	console.log("sup dog");
});


client.on("message", message => {
    if (message.content.startsWith("*avatar")) {
    if (!message.mentions.users.size) {
        return message.channel.send(message.author.displayAvatarURL());
    }

    const avatarList = message.mentions.users.map(user => {
        return user.displayAvatarURL();
    });
    message.channel.send(avatarList);
    }
    });

client.on("message", message => {
    if (message.content.startsWith("Praise Hime")){
        message.channel.send("All Hail Hime");
    }
});


