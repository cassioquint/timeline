import React from "react";
import { getColumnIndex } from "../utils/dateUtils";
import "./TimelineItem.css";

const TimelineItem = ({item, firstDate}) => {
    const startCol = getColumnIndex(item.start, firstDate);
    const endCol = getColumnIndex(item.end, firstDate) + 1;
    const categoryClass = item.category?.toLowerCase().replace(/\s+/g, "-") || "default";

    return (
        <div
            className={`timeline-item category-${categoryClass}`}
            title={`${item.name} from ${item.start} to ${item.end}`}
            style={{
                gridColumnStart: startCol +1,
                gridColumnEnd: endCol +1
            }}
        >
            <div className="item-title" title={item.name}>{ item.name }</div>
        </div>
    )
}

export default TimelineItem;