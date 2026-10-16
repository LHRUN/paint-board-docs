# Multiple boards

Paint Board can hold several boards on the same page, so one session can hold more than one piece of work. Click the board button on the bottom toolbar to open the list, switch boards, and change their settings.

## Board settings

- **New board** asks for a name and a starting point. Choose **Blank board**, or a preset template listed under that choice.
- Click a card to open that board.
- **Rename** uses the same rule: after trimming spaces at both ends, the name must be unique.

The current board is marked. A thumbnail appears on the card once it has been generated. Until then, the card says there is no thumbnail yet.

### Delete

Select one or more boards to delete them together.

At least one board has to remain. If every board is selected, the current board stays and the others are deleted.

### Limits

- You can create boards until there are 20. Older boards already past that number can still be opened; you just cannot add another. The list says the limit has been reached.
- At the limit, uploading a board file is blocked too. See [Open a board file](#open-a-board-file) below.
- Board cards cannot be dragged to reorder them. What you can reorder is an object in the layer list, and the background layers.

### Where boards are stored

Boards are saved in the current browser with IndexedDB. They are not uploaded to an account. Clearing this site's data removes the boards too. Before you switch computers or clear the browser, download the JSON, or pack several boards into one ZIP.

## Import and export

You can export from two places:

- The save button on the bottom toolbar.
- The board list, where selecting several boards lets you download them together.

### Save a PNG

| Menu item | Result |
| --- | --- |
| Export the current view | A PNG of the area you can see now |
| Export all drawing content | A PNG that includes everything drawn |
| Export the selection | A PNG of the current selection. This item appears only when something is selected |

Before the PNG downloads, the preview can rotate, scale, and crop, and you can choose whether to include the background. Confirm, then save the picture.

One side of an exported picture stays within 16384 pixels, and the total stays within 4096 × 4096 × 4 pixels. If the result would be larger, the app says the picture is too large and suggests shrinking the content or lowering the zoom.

A picture loaded from another website can also make the export fail. The message in that case says the canvas may contain a picture from another site.

### Save board data

**Export the current board data** downloads a `.json` file. The file name comes from the board title. Characters that cannot appear in a file name are replaced, and a very long name is shortened.

In the board list, select several cards and choose batch download. The app builds `paint-board.zip`, with one JSON file per board. If two titles would produce the same file name, a short id is added. The window shows overall progress. If some boards fail, the ZIP still contains the ones that succeeded. If none can be written, the download does not start.

### Open a board file

**Upload** in the board list accepts a board `.json`. A valid file needs a title and board data.

These uploads are refused:

- The file is not a board JSON the app can read.
- There are already 20 boards.

### What is not a board file

The app does not import PSD, SVG, or PDF as a board.  
JPEG and PNG are pictures you place on a board or use as a background. They are not a full backup. Use JSON when you want to open the same layers, text, and shapes again.

### Tips

- Export JSON before clearing the browser. Once the site data is gone, the boards in IndexedDB are gone too.
- If an export fails, remove cross-site pictures or lower the zoom, then try the save menu again.
