# Word Connect Project

## Description

The Word Connect project is a fun and interactive word puzzle game where users can connect groups of related words by clicking on them. The game challenges players to identify related words based on categories, such as synonyms, antonyms, or other types of associations. The game adjusts the difficulty by modifying the number of groups, group size, and item count.

## Functionalities

### 1. **Dynamic Group Creation**

- The game dynamically generates word groups based on the selected `group size` and `item count` settings.
- Users can customize the number of words per group and the total number of words in the game.

### 2. **Interactive Word Connection**

- Players can click on words to form connections between related words.
- Each connected word group must have all items correctly linked together.
- The game keeps track of the user’s progress as they connect the words.

### 3. **Responsive UI**

- The UI adjusts automatically for smaller screen sizes (e.g., mobile devices).
- Word groups are arranged in columns, with the number of columns also customizable through the app settings.

### 4. **Customizable Settings**

- Users can adjust the following settings using an in-game control panel:
  - **Group Size**: Control how many words are grouped together (e.g., 2, 3, or 4).
  - **Item Count**: Adjust the total number of words used in the game (e.g., 8, 10, or 12).
  - **Columns**: Set the number of columns to display the words (available for larger screens only).

### 5. **Reset Button**

- Users can reset the game to regenerate new word groups and start fresh at any time.

### 6. **Leva Control Panel**

- Integrated with [Leva](https://github.com/utsuboco/leva) for controlling game settings such as group size, item count, and columns.
- The panel is collapsed by default for a cleaner UI and can be expanded when needed.

### 7. **Game Mode: Word Grouping**

- Players are required to connect words that belong to the same group. For example, in a group of 3, players need to click on words that are related or belong to the same category.

### 8. **Visual Feedback**

- When words are correctly connected, they change visually (e.g., background color or highlighting).
- If the connection is incorrect, the words are reset to their original positions.

### 9. **Game Progress Tracking**

- The game tracks and displays the user's progress, indicating how many word groups they have successfully completed.

### 10. **Mobile-Friendly Design**

- The game is fully responsive and adjusts to smaller screens without breaking the layout or functionality.

## Live Demo

Click here to see the live demo :[here]()

## Installation

To get started with this project, follow the instructions below:

1. Clone the repository:
   ```bash
   git clone https://github.com/praveen00219/wordConnect-react.git
   ```
   cd word_connect
   npm install

### Key Functionalities Mentioned:

1. **Dynamic Group Creation**: Word groups are dynamically generated based on user input.
2. **Interactive Word Connection**: Users can click and connect words that belong together.
3. **Responsive UI**: The UI is optimized for both desktop and mobile devices.
4. **Customizable Settings**: The game allows players to change settings like group size, item count, and column layout.
5. **Reset Button**: Players can reset the game for a new challenge.
6. **Leva Control Panel**: A control panel for adjusting game settings.
7. **Game Mode**: Players connect words into predefined groups based on categories.
8. **Visual Feedback**: Immediate visual feedback when words are correctly or incorrectly connected.
9. **Game Progress Tracking**: Tracks player progress during the game.
10. **Mobile-Friendly**: Optimized for smaller screens.

This structure is clear and organized, and it will help users understand the key functionalities of your Word Connect game project. Let me know if you'd like to add or modify anything!
