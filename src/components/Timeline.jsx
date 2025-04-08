import React from "react";
import timelineItems from "../data/timelineItems";
import { assignLanes } from "../utils/assignLanes";
import { getMonthLabels } from "../utils/dateUtils";
import TimelineItem from "./TimelineItem";
import "./Timeline.css";

const Timeline = () => {
    const lanes = assignLanes(timelineItems);
    const rawFirstDate = new Date(timelineItems[0].start);
    const firstDate = new Date(rawFirstDate.getFullYear(), rawFirstDate.getMonth(), 1);
    const lastDate = timelineItems[timelineItems.length - 1].end;
    const months = getMonthLabels(firstDate, lastDate);
    const totalDays = months.reduce((sum, m) => sum + m.span, 0);

    return (
        <div className="timeline-container">
            <div
                className="timeline-header"
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${totalDays}, minmax(6px, 1fr))`
                }}
            >
                {months.map((month, index) => (
                    <div
                        key={index}
                        className="timeline-month"
                        style={{
                            gridColumn: `span ${month.span}`
                        }}
                    >
                        {month.label}
                    </div>
                ))}
            </div>
            <div className="timeline-body">
                {lanes.map((lane, index) => (
                    <div
                        key={index}
                        className="timeline-lane"
                        style={{
                            display: "grid",
                            gridTemplateColumns: `repeat(${totalDays}, minmax(6px, 1fr))`
                        }}
                    >
                        {lane.map((item) => (
                            <TimelineItem
                                key={item.id}
                                item={item}
                                firstDate={firstDate}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;