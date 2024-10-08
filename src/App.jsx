import { useState } from "react";
import NoteInput from "./components/NoteInput";
import NoteCard from "./components/NoteCard";
export default function App() {
  const [notes, setNotes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentNoteIndex, setCurrentNoteIndex] = useState(null);
  const [currentNote, setCurrentNote] = useState({ title: "", description: "" });

  const addNote = (note) => {
    if (isEditing) {
      const updatedNotes = [...notes];
      updatedNotes[currentNoteIndex] = { ...note, pinned: notes[currentNoteIndex].pinned };
      setNotes(updatedNotes);
      setIsEditing(false);
    } else {
      setNotes([...notes, { ...note, pinned: false }]);
    }
    setCurrentNote({ title: "", description: "" });
  };

  const handleEdit = (index) => {
    setCurrentNoteIndex(index);
    setIsEditing(true);
    setCurrentNote(notes[index]);
  };

  const handleDelete = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const handlePin = (index) => {
    const updatedNotes = [...notes];
    updatedNotes[index].pinned = !updatedNotes[index].pinned;
    setNotes(updatedNotes.sort((a, b) => b.pinned - a.pinned));
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-4xl text-green-500 mb-4">Note Keeper</h1>
      <NoteInput
        addNote={addNote}
        isEditing={isEditing}
        currentNote={currentNote}
      />

      <div className="note-list">
        {notes.map((note, index) => (
          <NoteCard
            key={index}
            note={note}
            index={index}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onPin={handlePin}
          />
        ))}
      </div>
    </div>
  );
}
