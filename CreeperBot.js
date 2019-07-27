const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();


const sleep = (millisecond) => {
    return new Promise(resolve => setTimeout(resolve, millisecond))
}

client.once('ready', () => {
    console.log('Aww man');
});

client.on('message', message => {
	if (message.content === 'creeper') {
        message.channel.send('Aww man')
        sleep(1000).then(() => {
            message.channel.send('-')
        })
        sleep(1000).then(() => {
            message.channel.send('So we back in the mine')
        })
        sleep(1000).then(() => {
            message.channel.send('Got our pickaxe swinging from side to side')
        })
        sleep(1000).then(() => {
            message.channel.send('Side-side to side')
        })
        sleep(1000).then(() => {
            message.channel.send('This task, a grueling one')
        })
        sleep(1000).then(() => {
            message.channel.send('Hope to find some diamonds tonight, night, night')
        })
        sleep(1000).then(() => {
            message.channel.send('Diamonds tonight')
        })


        sleep(1000).then(() => {
            message.channel.send('-')
        })


        sleep(1000).then(() => {
            message.channel.send('Heads up')
        })
        sleep(1000).then(() => {
            message.channel.send('You hear a sound, turn around and look up')
        })
        sleep(1000).then(() => {
            message.channel.send('Total shock fills your body')
        })
        sleep(1000).then(() => {
            message.channel.send(`Oh no, it's you again`)
        })
        sleep(1000).then(() => {
            message.channel.send('I can never forget those eyes, eyes, eyes')
        })
        sleep(1000).then(() => {
            message.channel.send('Eyes-eyes-eyes')
        })


        sleep(1000).then(() => {
            message.channel.send('-')
        })


        sleep(1000).then(() => {
            message.channel.send(`'Cause, baby, tonight`)
        })
        sleep(1000).then(() => {
            message.channel.send(`The creeper's trying to steal all our stuff again`)
        })
        sleep(1000).then(() => {
            message.channel.send(`'Cause, baby, tonight`)
        })
        sleep(1000).then(() => {
            message.channel.send('You grab your pick, shovel, and bolt again (Bolt again-gain)')
        })
        sleep(1000).then(() => {
            message.channel.send(`And run, run until it's done, done`)
        })
        sleep(1000).then(() => {
            message.channel.send(`Until the sun comes up in the morn'`)
        })
        sleep(1000).then(() => {
            message.channel.send(`'Cause, baby, tonight`)
        })
        sleep(1000).then(() => {
            message.channel.send(`The creeper's trying to steal all our stuff again (Stuff again-gain)`)
        })


        sleep(1000).then(() => {
            message.channel.send(`-`)
        })


        sleep(1000).then(() => {
            message.channel.send(`Just when you think you're safe`)
        })
        sleep(1000).then(() => {
            message.channel.send('Overhear some hissing from right behind')
        })
        sleep(1000).then(() => {
            message.channel.send(`Right-right behind`)
        })
        sleep(1000).then(() => {
            message.channel.send(`That's a nice life you have`)
        })
        sleep(1000).then(() => {
            message.channel.send(`Shame it's gotta end at this time, time, time`)
        })
        sleep(1000).then(() => {
            message.channel.send('Time-time-time-time')
        })


        sleep(1000).then(() => {
            message.channel.send('-')
        })


        sleep(1000).then(() => {
            message.channel.send('Blows up')
        })
        sleep(1000).then(() => {
            message.channel.send(`Get inside, don't be tardy`)
        })
        sleep(1000).then(() => {
            message.channel.send(`So now you're stuck in there`)
        })
        sleep(1000).then(() => {
            message.channel.send(`Half a heart is left, but don't die, die, die`)
        })
        sleep(1000).then(() => {
            message.channel.send('Die-die-die')
        })


        sleep(1000).then(() => {
            message.channel.send('-')
        })


        sleep(1000).then(() => {
            message.channel.send(`'Cause, baby, tonight`)
        })
        sleep(1000).then(() => {
            message.channel.send(`The creeper's trying to steal all our stuff again`)
        })
        sleep(1000).then(() => {
            message.channel.send(`'Cause, baby, tonight`)
        })
        sleep(1000).then(() => {
            message.channel.send('You grab your pick, shovel, and bolt again (Bolt again-gain)')
        })
        sleep(1000).then(() => {
            message.channel.send(`And run, run until it's done, done`)
        })
        sleep(1000).then(() => {
            message.channel.send(`Until the sun comes up in the morn'`)
        })
        sleep(1000).then(() => {
            message.channel.send(`'Cause, baby, tonight`)
        })
        sleep(1000).then(() => {
            message.channel.send(`The creeper's trying to steal all our stuff again`)
        })


        sleep(1000).then(() => {
            message.channel.send('-')
        })


        sleep(1000).then(() => {
            message.channel.send(`(Creepers, you're mine, haha)`)
        })
        sleep(1000).then(() => {
            message.channel.send('Dig up diamonds, craft those diamonds and make some armor')
        })
        sleep(1000).then(() => {
            message.channel.send('Get it, baby, go and forge that like you so MLG pro')
        })
        sleep(1000).then(() => {
            message.channel.send('The swords made of diamonds, so come at me bro')
        })
        sleep(1000).then(() => {
            message.channel.send('Huh? Training in your room under the torchlight')
        })
        sleep(1000).then(() => {
            message.channel.send('Hone that form to get you ready for the big fight')
        })
        sleep(1000).then(() => {
            message.channel.send('Every single day and the whole night')
        })
        sleep(1000).then(() => {
            message.channel.send(`Creeper's out prowlin', hoo, alright`)
        })
        sleep(1000).then(() => {
            message.channel.send('Look at me, look at you')
        })
        sleep(1000).then(() => {
            message.channel.send(`Take my revenge, that's what I'm gonna do`)
        })
        sleep(1000).then(() => {
            message.channel.send(`I'm a warrior, baby, what else is new?`)
        })
        sleep(1000).then(() => {
            message.channel.send(`And my blade's gonna tear through you, bring it`)
        })


        sleep(1000).then(() => {
            message.channel.send(`-`)
        })


        sleep(1000).then(() => {
            message.channel.send(`'Cause, baby, tonight`)
        })
        sleep(1000).then(() => {
            message.channel.send(`The creeper's trying to steal all our stuff again`)
        })
        sleep(1000).then(() => {
            message.channel.send(`'Cause, baby, tonight`)
        })
        sleep(1000).then(() => {
            message.channel.send(`(Gather your stuff, yeah, let's take back the world, haha)`)
        })
        sleep(1000).then(() => {
            message.channel.send(`Yeah, baby, tonight grab your sword, armor and go (It's on)`)
        })
        sleep(1000).then(() => {
            message.channel.send('Take your revenge (Woo), oh-oh-oh-oh')
        })
        sleep(1000).then(() => {
            message.channel.send(`So fight, fight, like it's the last, last night of your life, life`)
        })
        sleep(1000).then(() => {
            message.channel.send('Show them your bite (Woo)')
        })


        sleep(1000).then(() => {
            message.channel.send(`-`)
        })

        
        sleep(1000).then(() => {
            message.channel.send(`'Cause, baby, tonight`)
        })
        sleep(1000).then(() => {
            message.channel.send(`The creeper's trying to steal all our stuff again`)
        })
        sleep(1000).then(() => {
            message.channel.send(`'Cause, baby, tonight`)
        })
        sleep(1000).then(() => {
            message.channel.send('You grab your pick, shovel and bolt again (Bolt again-gain, woo)')
        })
        sleep(1000).then(() => {
            message.channel.send(`And run, run until it's done, done`)
        })
        sleep(1000).then(() => {
            message.channel.send(`Until the sun comes up in the morn'`)
        })
        sleep(1000).then(() => {
            message.channel.send(`'Cause, baby, tonight (Come on, swing your sword up high)`)
        })
        sleep(1000).then(() => {
            message.channel.send(`The creeper's trying to steal all our stuff again (Come on, jab your sword down low)`)
        })
        sleep(1000).then(() => {
            message.channel.send(`(Woo)`)
        })
    }
})
client.login(token)