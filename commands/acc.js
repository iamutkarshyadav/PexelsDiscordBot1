const { MessageEmbed } = require("discord.js")

module.exports ={
    name:'acc', 
    execute(message, arg){
        const acc = new MessageEmbed()
        .setTitle('ACCOUNT INFO!')
        .setColor('RANDOM')
        
        .setTimestamp()
    
        .setImage('https://www.screnter.com/wp-content/uploads/2021/01/pexels-logo.jpg')
        .setThumbnail('https://images.pexels.com/photos/7420912/pexels-photo-7420912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
        .addField("Follow me!", " [Account](https://www.pexels.com/@utkarsh-yadav-660028)");
      
       message.channel.send({embeds:[acc]})
        
    }
}