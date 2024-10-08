import { Card, Button } from "antd";
import {
  DeleteFilled, EditFilled, PushpinFilled, PushpinOutlined
} from '@ant-design/icons';
const NoteCard = ({ note, index, onEdit, onDelete, onPin }) => {
  return (
    <Card
      title={note.title}
      extra={
        <>
          <Button type="link" onClick={() => onEdit(index)}>
            <EditFilled />
          </Button>
          <Button type="link" onClick={() => onDelete(index)}>
            <DeleteFilled />
          </Button>
          <Button type="link" onClick={() => onPin(index)}>
            {note.pinned ? (
              <>
                <PushpinFilled className="mr-2" /> Unpin
              </>
            ) : (
              <>
                <PushpinOutlined className="mr-2" /> Pin
              </>
            )}
          </Button>
        </>
      }
      className="mb-4 shadow-md"
    >
      <p>{note.description}</p>
    </Card>
  );
};

export default NoteCard;
