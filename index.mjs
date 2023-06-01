#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";
import ora from "ora";

const emojiList = '🔥,🖖,💻,🪐,🌍,📱,🚀,🧪,⭐️,🙌,🔮,💡,🌱,🥑,👀,🤖,👌,🙌,🧠,🦄,🎉,💗';

const throbber = ora({
  text: chalk.hex("#BD93F9").bold("Let's go make magic stuff happen!"),
  spinner: {
    frames: emojiList.split(','),
    interval: 300,
  },
});

const boxenOptions = {
    padding: 2,
    width: 70,
    title: chalk.hex("#50FA7B").bgHex('#282A36')("🚀 Maksim Troitski 🦄"),
    titleAlignment: "left",
    borderStyle: "round",
    borderColor: "#FF79C6",
    backgroundColor: "#282A36",
};

const intro = chalk.hex("#8BE9FE").bold(
    "👋 Hey there! Nice to meetcha!",
  );

  const description = `${chalk.hex("#F8F8F2")("I'm Maksim, a frontend developer from Minsk")}
${chalk.hex("#F8F8F2")("in Belarus (Brimit)\n")}
${chalk.hex("#F8F8F2")("I get apps done for over 10 years")}

${chalk.hex("#F8F8F2")("#react #reactnative #nextjs #angular")}`;

  const connect = chalk.hex("#FF79C6").bold("Come find me on the interwebs!");
  
  const links = [
    { name: chalk.hex("#F8F8F2").bgHex("#0a66c2")("LinkedIn"), url: "  https://linkedin.com/in/mtroitski" },
    { name: chalk.hex("#F8F8F2").bgHex("#6e5494")("GitHub"),  url: "    https://github.com/mksby" },
    { name: chalk.hex("#F8F8F2")("Email"), url: "     maksim.troitski@outlook.com" },
  ];
  
  const linkList = links.map((link) => `${link.name} ${chalk.hex("#F1FA8C")(link.url)}`).join("\n");
  
  console.log('\n'+boxen([intro, description, connect, linkList].join('\n\n'), boxenOptions)+'\n');
  throbber.start();