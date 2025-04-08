## 🗂️ PlanTracks
PlanTracks is a lightweight, interactive timeline component built with React. It displays events across a time grid and allows users to focus on individual months and interact with items, such as renaming them directly in the UI.
----------------------------------------------------------------------------------------------------------------------------------------

## What I like about this implementation
Simplicity: The codebase is clean and easy to understand, with minimal dependencies and no unnecessary complexity.

Visual clarity: The lane-based layout makes it easy to see which events overlap and how they relate across time.

Interaction: Features like month focus, inline editing, hover effects, and color-coding by category help make the timeline more intuitive and engaging.

Responsiveness: The layout adjusts reasonably across screen sizes, and narrow items are handled with truncation to maintain structure.
----------------------------------------------------------------------------------------------------------------------------------------

## What I would change if I were going to do it again
Improve accessibility: Add keyboard navigation, ARIA labels, and better focus handling.

Add persistence: Currently, edited names aren’t saved; implementing a backend or local storage would fix that.

Add animations: Smooth transitions for expanding months or editing fields would improve the experience.

Mobile experience: On very small screens, the timeline isn't ideal. I would consider a vertical layout or zoomable view for mobile users.
----------------------------------------------------------------------------------------------------------------------------------------

## How I made design decisions
Layout & color inspiration: I drew inspiration from tools like Trello's timeline view, Airtable’s calendar mode, and Notion’s timeline block. I aimed for something similarly minimal and structured.

Custom grid system: Instead of relying on third-party timeline components, I used CSS Grid to manually lay out days and months. This gave me full control over positioning and styling.

Categories via CSS classes: I applied category-based styling purely through class names, making the system extensible and easy to tweak via CSS.

Expandable months: I added the focus-on-month interaction to help reduce visual clutter when many months are shown.
----------------------------------------------------------------------------------------------------------------------------------------

## How I would test this if I had more time
Unit tests: For utility functions like assignLanes, getColumnIndex, and date handling logic.

Component tests: Using a library like React Testing Library to test interactions like:

- Editing an item name and pressing Enter or Escape.

- Clicking a month to focus/defocus it.

- Ensuring items are hidden when outside the focused range.

Visual regression tests: To ensure layout and styling don't break with future updates.

Performance testing: Simulate hundreds of items and observe rendering behavior, especially with React's reconciliation.
