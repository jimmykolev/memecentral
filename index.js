const Discord = require("discord.js");
const ytdl = require('ytdl-core');

const PREFIX = "-";


var bot = new Discord.Client();

var memeball = [
    " Yes",
    " Maybe",
    " No"


]
var memes = [
    "https://img.ifcdn.com/images/193f2c1811930e230b8c7580085d7ff530516df7a72133e03a0b166faa9ed98a_1.jpg",
    "https://img.ifcdn.com/images/d732a00cee7cdc0ec9dcd8acedacd97f98b6bd15c58c2297f97b890744ea2466_1.jpg",
    "https://img.ifcdn.com/images/1797b3768baf70dbfa036127c450a6716765ab1048ce26488e2ffb83ce9edddc_1.jpg",
    "https://img.ifcdn.com/images/25654a254537be958e20fd88b4800e9762e0817b533f10901a5adb1eebec4260_1.jpg",
    "https://img.ifcdn.com/images/2d610c5ac30ea79ab7d704bb9f4776a848ee75ea5d0b34d99396098d0ec510cf_1.jpg",
    "https://img.ifcdn.com/images/87cdadffb4af9e6ed272d6c3d0abb5d6d3037c04c2c9c3c4ee8f8b6125fe2ea6_1.jpg",
    "https://img.ifcdn.com/images/1d04e885bdaa41d0d8e43f4a31db707b2b6df114706688d02d5e2cdbb7970ac0_1.jpg",
    "https://img.ifcdn.com/images/532b569ea22e0d5e617652e4a29dba2c837390c6e7fc9a12681174aa4e643084_1.jpg",
    "https://img.ifcdn.com/images/6f7edd1d23459f20049b5896f3ccb06ea6940ed8401f16556cfe4fd757e4a443_1.jpg",
    "https://img.ifcdn.com/images/fa8342ed19850d9da3cc77e7a641638d458a0fbc444dda8f41f4d1c6daacd452_1.jpg",
    "https://img.ifcdn.com/images/78fa06839136b359ac608a4be245d0e88477595b56b8112311d161e088c113b8_1.jpg",
    "https://img.ifcdn.com/images/91b0bebc0fe0d75da0befb1d95a38235d3fa8c9502adf3350dc087376b9113c4_1.jpg",
    "https://img.ifcdn.com/images/6e967edb54215b2b8309fd908513b219c6d9d6c981191945a08cad5cec5ef598_1.jpg",
    "https://img.ifcdn.com/images/7087fbe25c4b208b2b559377743ef392af5e418c504af115166596ac7b81583b_1.jpg",
    "https://img.ifcdn.com/images/d9a9e645448fd9051867ac5aef92c4fb00b962d0fb2976c62c87e412305db65a_1.jpg",
    "https://img.ifcdn.com/images/c4c63f5864cafbec965a407b811cf1939e45129c2ccb9a77040f51b1f78829e6_1.jpg",
    "https://img.ifcdn.com/images/7274e7a97c06ee24532af2eacbcf6580461c30baf1dfce2cd3c22f67c18e848c_1.jpg",
    "https://img.ifcdn.com/images/0fa1c1d9152a28a4e1d389130ee6b6c5ecdb3484afd376270e8fb13c316c9ddf_1.jpg",
    "http://i.imgur.com/y3blbsa.png",
    "http://i.imgur.com/kxnmmJW.png",
    "http://i.imgur.com/S85P9IT.jpg",
    "http://i.imgur.com/rYi9rZa.jpg",
    "http://i.imgur.com/GvfbqfV.jpg",
    "http://i.imgur.com/ot7gwbS.jpg",
    "http://i.imgur.com/3pTT8TE.jpg",
    "http://i.imgur.com/p5f5CxU.jpg",
    "http://i.imgur.com/xwqx1D8.jpg",
    "http://i.imgur.com/rRwnFDY.jpg",
    "http://i.imgur.com/UZW3Lqc.jpg",
    "http://i.imgur.com/mw590E7.jpg",
    "http://i.imgur.com/l0QpAI4.jpg",
    "http://i.imgur.com/4m8hK8Z.jpg",
    "http://i.imgur.com/YMCZVrW.jpg",
    "http://i.imgur.com/uQHN3ia.jpg",
    "http://i.imgur.com/6y95B5D.jpg",
    "http://i.imgur.com/dl1smxM.jpg",
    "http://i.imgur.com/oenwK0z.jpg",
    "http://i.imgur.com/SNA7Gfo.png",
    "http://i.imgur.com/oE5S7ov.png",
    "http://i.imgur.com/ujWJCsX.jpg",
    "http://i.imgur.com/3QO7nbp.jpg",
    "http://i.imgur.com/b0AxC2V.jpg",
    "http://i.imgur.com/68NrEPv.jpg",
    "http://i.imgur.com/JxSggr2.jpg",
    "http://i.imgur.com/LgRhZhn.jpg",
    "http://i.imgur.com/wiqter6.jpg",
    "http://i.imgur.com/ycgE7l0.jpg",
    "http://i.imgur.com/7T2s1ho.jpg",
    "http://i.imgur.com/Y9tf3o5.jpg",
    "http://i.imgur.com/alx1Za3.png",
    "http://i.imgur.com/eAr8trB.png",
    "http://i.imgur.com/0Vt0fhi.jpg",
    "http://i.imgur.com/mWeFz1l.jpg",
    "https://cdn.discordapp.com/attachments/314083512275959818/324629677874610197/SJXDJKF.png",
    "http://i.imgur.com/z7soXES.jpg",
    "http://i.imgur.com/r7tTpJj.png",
    "http://i.imgur.com/K1niu9a.jpg",
    "http://i.imgur.com/3mJiR50.jpg",
    "http://i.imgur.com/d3xjiVc.jpg",
    "http://i.imgur.com/rFPAXRz.jpg",
    "http://i.imgur.com/392C1Dt.jpg",
    "http://i.imgur.com/q45kW7O.jpg",
    "http://i.imgur.com/0gqpSAe.jpg",
    "http://i.imgur.com/zo4yA9O.jpg",
    "http://i.imgur.com/iZ9FQ6v.jpg",
    "http://i.imgur.com/VtpCrHB.jpg",
    "http://i.imgur.com/DcJv2TJ.jpg",
    "http://i.imgur.com/Goak33R.jpg",
    "http://i.imgur.com/MFnNXUJ.png",
    "http://i.imgur.com/aEWcpch.jpg",
    "http://i.imgur.com/mwosYhL.jpg",
    "http://i.imgur.com/ElQsgBb.png",
    "http://i.imgur.com/YOAo96F.jpg",
    "http://i.imgur.com/43PWsZ8.jpg",
    "http://i.imgur.com/cZEJaUG.jpg",
    "http://i.imgur.com/sQ2F8th.jpg",
    "http://i.imgur.com/tSommCp.png",
    "http://i.imgur.com/LBltpoV.jpg",
    "http://i.imgur.com/UwovGRI.jpg",
    "http://i.imgur.com/RhWMJ15.jpg",
    "http://i.imgur.com/Rigf9Kw.jpg",
    "http://i.imgur.com/EfwUWdE.jpg",
    "http://i.imgur.com/V0WTgyP.jpg"



]
var say = [
    ": 1/10",
    ": 2/10",
    ": 3/10",
    ": 4/10",
    ": 5/10",
    ": 6/10",
    ": 7/10",
    ": 8/10",
    ": 9/10",
    ": 10/10",
    ": 11/10",
]

var quote = [
    " We keep moving forward, opening new doors, and doing new things, because we're curious and curiosity keeps leading us down new paths.",
    " All our dreams can come true, if we have the courage to pursue them.",
    " You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you.",
    " It's kind of fun to do the impossible.",
    " The way to get started is to quit talking and begin doing.",
    " You can design and create, and build the most wonderful place in the world. But it takes people to make the dream a reality.",
    " When you believe in a thing, believe in it all the way, implicitly and unquestionable.",
    " The more you like yourself, the less you are like anyone else, which makes you unique.",
    " Don't cry because it's over, smile because it happened.",
    " Be yourself; everyone else is already taken.",
    " You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    " Our eyes are on the front, so we can keep moving forward."
]


bot.on('ready', function(){
    console.log("Ready");
    bot.user.setPresence({ game: { name: 'Use -help', type: 0 } });
});

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "welcome").sendMessage(member.toString() + " Welcome to Meme Central!");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    if (!message.content.startsWith(PREFIX)) return;
    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {

      case "ping":
         message.channel.sendMessage(message.author.toString() + ` Pong! ${Date.now() - message.createdAt.getTime()}ms`);
         break;
      case "chillball":
         if (args[1]) message.channel.sendMessage(message.author.toString() + memeball[Math.floor(Math.random() * memeball.length)]);
         else message.channel.sendMessage("Usage: -memeball <message>");
         break;
      case "info":
         var embed = new Discord.RichEmbed()
         .setColor(0xFF00a1)
         .addField("Author", "Jimmy/Disappointing", true)
         .addField("ID", "<@224935178227679232>", true)
         .addField("Version", "0.0.1", true)
         .setThumbnail("https://media.discordapp.net/attachments/377511714733686784/384360626912493570/Chill_boty.jpg")
         .setFooter("Chill.")
         .setTimestamp()
         message.channel.sendEmbed(embed);
         break;
      case "help":
         var embed2 = new Discord.RichEmbed()
         .setColor(0xFF00a1)
         .addField("-help", "Shows you this!", true)
         .addField("-ping", "Shows the ping!", true)
         .addField("-chillball", "Basically 8ball!", true)
         .addField("-info", "Shows info about the bot!", true)
         .addField("-quote", "Shows you a nice quote!", true)
         .addField("-rate", "Rates what you give it!", true)
         .addField("-meme", "Sends you a meme!", true)
         .addField("-suggestion", "Accounts your suggestion!", true)
         .addField("-purge", "Kills 100 messages", true)
         .addField("-update", "Tells you about the most recent update", true)
         .setThumbnail("https://media.discordapp.net/attachments/377511714733686784/384360626912493570/Chill_boty.jpg", true)
         .setFooter("Chill.")
         .setTimestamp()
         message.channel.sendMessage(embed2);
         break;
    case "quote":
         message.channel.sendMessage(message.author.toString() + quote[Math.floor(Math.random() * quote.length)]);
         break;
    case "rate":
         const sayMessage = args.join(" ");
         if (args[1]) message.channel.send("I " + sayMessage + say[Math.floor(Math.random() * say.length)]);
         else message.channel.sendMessage("Usage: -rate <What you want to rate>");
         break;
    case "meme":
         var embed3 = new Discord.RichEmbed()
         .setColor(0xFF00a1)
         .setImage(memes[Math.floor(Math.random() * memes.length)])
         .setTitle("The Meme Generator")
         .setFooter("Memes", "https://media.discordapp.net/attachments/377511714733686784/384360626912493570/Chill_boty.jpg")
         .setTimestamp()
         message.channel.sendEmbed(embed3);
         break;
    case "suggestion":
         const sayMessage2 = args.join(" ");
         message.delete().catch(O_o=>{});
         if (args[1]) message.channel.sendMessage(message.author.toString() + " Your " + sayMessage2  + " has been accounted for");
         else message.channel.sendMessage("Usage: -suggestion <suggestion>");
         break;
    case "purge":
      if(!message.member.roles.some(r=>["Executive", "Mod", "VIP"].includes(r.name)) )
         return message.reply("Sorry, you don't have permissions to use this!");
     else (message.channel.bulkDelete(100))
          message.channel.sendMessage("Messages have been purged.");
        break;
        case "update":
         message.channel.sendmessage("Update 0.0.1 features; Renovation!");
        break;

    default:
         message.channel.sendMessage("That is not a command!")
    }
});



bot.login(process.env.BOT_TOKEN);
