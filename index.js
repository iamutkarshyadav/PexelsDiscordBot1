   const {Client, Intents, Collection} = require('discord.js')
   const client = new Client({intents:[Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES]})
   const fs = require('fs')
   const redditFetch = require('reddit-fetch')
   const PREFIX = '-'
   require('dotenv').config()
   
   //const TOKEN ='OTQzMjU2NDgyMTYwNDQ3NTI4.YgwaDg.GG6a0zxE9fnwhTiuM2Q8PEeEYd4'
   

         client.on('ready',() => {
         console.log(' 👋🕐 I am online')
         client.user.setActivity('PEXELS ACCOUNT', {type:'WATCHING'})
         client.user.setStatus('online')

        })
          
        
          


         client.commands = new Collection()
          const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
          for (const file of commandFiles){
          const command = require(`./commands/${file}`)
          client.commands.set(command.name, command)
  }

          client.on('message', message => {
          if(!message.content.startsWith(PREFIX) || message.author.bot) return 
          const arg = message.content.slice(PREFIX.length).split(/ +/)
          const command = arg.shift().toLowerCase()
          if (command === 'acc'){
            client.commands.get('acc').execute(message,arg)
          } else if(command === 'info'){
              client.commands.get('info').execute(message, arg)

          }else if(command === 'img'){
              client.commands.get('image').execute(message, arg)
          }
          
           if (message.content === '-meme'){
            redditFetch({

                subreddit: 'memes',
                sort: 'hot',
                allowNSFW: false,
                allowModPost: true,
                allowCrossPost: true,
                allowVideo: true
            
            }).then(post => {
                message.channel.send(`${message.author}, ${post.url}`)
                
            })
           }


      })
    client.login(process.env.TOKEN)
