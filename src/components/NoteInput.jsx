import { useState, useEffect } from "react";
import { Input, Button } from "antd";

const { TextArea } = Input;

export default function NoteInput({ addNote, isEditing, currentNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTitle(currentNote.title);
    setDescription(currentNote.description);
  }, [currentNote]);

  const handleSubmit = () => {
    if (title && description) {
      addNote({ title, description });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="mb-4">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        allowClear
        className="mb-2"
      />
      <TextArea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        allowClear
        className="mb-2"
      />
      <Button type="primary" onClick={handleSubmit}>
        {isEditing ? "Update Note" : "Add Note"}
      </Button>
    </div>
  );
}
