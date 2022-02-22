const { MessageEmbed, Client } = require("discord.js")

module.exports={
    name:'info', 
    description:'Sends an Embed containing Details about bot!',
    execute(message, arg){
        const info = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('About me!')
        .setDescription('Praise the LORD!')
        .setThumbnail('https://cdn.sketch.com/extensions/plugins/official-pexels-icon.png')
        .addFields(
            { name:'HELP', value : 'help'},
            {name:'Account Info', value :'acc'},
            {name:'Random Image',value: 'ran'},
             )
                .addField('About me!', 'I am a Discord bot made by Utkarsh and he is teaching me to send random images from his PEXELS in his spare time. If you are FREE , You can check the image below!' , true)
                .setImage('https://images.pexels.com/photos/5642973/pexels-photo-5642973.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
                .setTimestamp()
                message.channel.send({embeds:[info]})
           }
        }