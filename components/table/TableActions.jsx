import { FaEye, FaEdit, FaTrash ,FaToggleOn} from "react-icons/fa"; // React Icons import
import IconButton from "./IconButton";

export default function TableActions({ onView, onEdit, onDelete ,onStatus}) {
  return (
    <div className="flex gap-2">
      {onView && (
        <IconButton onClick={onView} title="View" icon={FaEye} color="blue" />
      )}
      {onEdit && (
        <IconButton onClick={onEdit} title="Edit" icon={FaEdit} color="green" />
      )}
      {onDelete && (
        <IconButton
          onClick={onDelete}
          title="Delete"
          icon={FaTrash}
          color="red"
        />
      )}

      {onStatus && (
        <IconButton
          onClick={onStatus}
          title="Update Status"
          icon={FaToggleOn}
          color="blue"
        />
      )}
    </div>
  );
}
