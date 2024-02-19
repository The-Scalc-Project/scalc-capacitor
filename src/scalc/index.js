import noteData from '../config'

export function label(startNote, set){
  var pattern = set.label
  let notes = calculator(startNote, set)
  
  var map = {}
  for(let noteIndex in notes) {
    map[`[${noteIndex}]`] = notes[noteIndex]
  }

  return set.identifier + ' - ' + pattern.replace(/(\[.\])/g, function (m) {
      return map[m];
  });

}

function getHalfTone(startNote, halfTones) {
  let startNotePosition = noteData.notesByHalfTone.indexOf(startNote)
  let destinationPosition = (startNotePosition + halfTones) % noteData.notesByHalfTone.length
  let result = noteData.notesByHalfTone[destinationPosition]

  /*
  console.log("Start Note ", startNote)
  console.log("Start Note position", Number(startNotePosition))
  console.log("wanted halfTones", Number(halfTones))

  console.log("Dest note position", (Number(startNotePosition) + Number(halfTones)))
  console.log("Number of notes", noteData.notesByHalfTone.length)
  console.log("Dest note position modulo", destinationPosition)
  console.log("result", result)
  */

  return result
}

export function calculator(startNote, set){
  let halfTones = set.halfTones
  var notes = [];

  for(let halfTone of halfTones){
    //console.log("----calculate for ", startNote, halfTone)  
    notes.push(getHalfTone(startNote, halfTone))
  }
  
  return notes
}


