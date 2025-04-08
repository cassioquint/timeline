import React, { useState } from "react";
import timelineItems from "../data/timelineItems";
import { assignLanes } from "../utils/assignLanes";
import { getMonthLabels, getColumnIndex } from "../utils/dateUtils";
import TimelineItem from "./TimelineItem";
import "./Timeline.css";

const Timeline = () => {
    const lanes = assignLanes(timelineItems);
    const rawFirstDate = new Date(timelineItems[0].start);
    const firstDate = new Date(rawFirstDate.getFullYear(), rawFirstDate.getMonth(), 1);
    const lastDate = timelineItems[timelineItems.length - 1].end;
    const months = getMonthLabels(firstDate, lastDate);
    const totalDays = months.reduce((sum, m) => sum + m.span, 0);

    const [focusedMonthIndex, setFocusedMonthIndex] = useState(null);
    const visibleMonths = focusedMonthIndex !== null
        ? [months[focusedMonthIndex]]
        : months;

    const visibleTotalDays = visibleMonths.reduce((sum, m) => sum + m.span, 0);
    const monthStartIndex = focusedMonthIndex !== null
        ? months.slice(0, focusedMonthIndex).reduce((sum, m) => sum + m.span, 0)
        : 0;

    return (
        <div className="timeline-container">
            <div
                className="timeline-header"
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${visibleTotalDays}, minmax(6px, 1fr))`
                }}
            >
                {visibleMonths.map((month, index) => {
                    const actualIndex = focusedMonthIndex !== null ? focusedMonthIndex : index;

                    return (
                            <div
                                key={actualIndex}
                                className="timeline-month"
                                style={{
                                    gridColumn: `span ${month.span}`
                                }}
                                onClick={() =>
                                    setFocusedMonthIndex(focusedMonthIndex === actualIndex ? null : actualIndex)
                                }
                            >
                                {month.label}
                            </div>
                        )
                    }
                )}
            </div>
            <div className="timeline-body">
                {lanes.map((lane, index) => (
                    <div
                        key={index}
                        className="timeline-lane"
                        style={{
                            display: "grid",
                            gridTemplateColumns: `repeat(${visibleTotalDays}, minmax(6px, 1fr))`
                        }}
                    >
                        {lane.map((item) => {
                            const itemStartIndex = getColumnIndex(item.start, firstDate);
                            if (
                                focusedMonthIndex !== null &&
                                (itemStartIndex < monthStartIndex ||
                                    itemStartIndex >= monthStartIndex + months[focusedMonthIndex].span)
                            ) {
                                return null;
                            }
                            return (
                                    <TimelineItem
                                        key={item.id}
                                        item={item}
                                        firstDate={new Date(
                                            firstDate.getFullYear(),
                                            firstDate.getMonth(),
                                            1
                                        )}
                                        offsetDays={monthStartIndex}
                                    />
                                )
                            }
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;