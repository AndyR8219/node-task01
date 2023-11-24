const yargs = require('yargs')
const { addNote, getNotes, removeNote } = require('./notes.controller')

yargs.command({
  command: 'add',
  discribe: 'Add new note to list',
  builder: {
    title: {
      type: 'string',
      description: 'Note title',
      demandOption: true,
    },
  },
  handler({ title }) {
    addNote(title)
  },
})

yargs.command({
  command: 'remove',
  discribe: 'Remove note by id',
  handler({ id }) {
    removeNote(id)
  },
})

yargs.command({
  command: 'list',
  discribe: 'Print all notes',

  async handler() {
    const notes = await getNotes()
    console.log('Here is the list of notes: ')
    notes.forEach((note) => console.log(note.id, ' ', note.title))
  },
})

yargs.parse()
