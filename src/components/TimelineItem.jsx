import React, { useState, useRef, useEffect } from "react";
import { getColumnIndex } from "../utils/dateUtils";
import "./TimelineItem.css";

const TimelineItem = ({item, firstDate, offsetDays = 0}) => {
    const startCol = getColumnIndex(item.start, firstDate) - offsetDays;
    const endCol = getColumnIndex(item.end, firstDate) - offsetDays + 1;
    const categoryClass = item.category?.toLowerCase().replace(/\s+/g, "-") || "default";

    const [editing, setEditing] = useState(false);
    const [name, setName] = useState(item.name);
    const inputRef = useRef(null);

    useEffect(() => {
        if (editing && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [editing]);

    const handleSave = () => {
        setEditing(false);
    };

    return (
        <div
            className={`timeline-item category-${categoryClass}`}
            title={`${item.name} from ${item.start} to ${item.end}`}
            style={{
                gridColumnStart: startCol +1,
                gridColumnEnd: endCol +1
            }}
        >
            {editing ? (
                <input
                    ref={inputRef}
                    className="item-title-input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSave();
                        } else if (e.key === "Escape") {
                            setName(item.name);
                            setEditing(false);
                        }
                    }}
                    autoFocus
                />
            ) : (
                <div
                    className="item-title"
                    title={name}
                    onClick={() => setEditing(true)}
                >
                    {name}
                </div>
            )}
            <div className="item-date-area">
                <span className="item-date">{item.start}</span>
                <span className="item-date">{item.end}</span>
            </div>
        </div>
    )
}

export default TimelineItem;