require('./db/connection');
const yargs = require('yargs');
const command = process.argv[2];
const titleInput = yargs.argv.title;
const actorInput = yargs.argv.actor;
const watchedInput = yargs.argv.watched;
const { add, remove, list, update } = require('./utils');

const app = () => {
    if (command === "add") {
        if (actorInput) {
        add({ title: titleInput, actor: actorInput});
        } else {
            add({ title: titleInput});
        }
    } else if (command === "list") {
      list();

    
    } else if (command === "update") {
        update(titleInput)
    

    } else if (command === "delete") {
        remove(titleInput)
        }
    }

app();