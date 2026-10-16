# Getting started

Paint Board is a fully open-source creative canvas for the web. It supports brushes, sketched shapes, text, and pictures, enough for a wide range of work.

Preview: [songlh.top/paint-board](https://songlh.top/paint-board/).  
Source: [github.com/LHRUN/paint-board](https://github.com/LHRUN/paint-board).  
If you find it useful, a Star ✨ is welcome. Thank you!

## The first time you open it

The first time you open the page, the preset templates appear. Pick one and create it to get a feel for the board, or close the window and start from a blank board.

<figure>
  <img src="/images/ui-templates.png" alt="Screenshot of the real page" />
  <figcaption>Screenshot of the real page</figcaption>
</figure>

## Tool panel

The main controls sit in the tool panel on the left. There are four modes, and you can expand or collapse the panel yourself.

| Mode | Shortcut | What it does |
| --- | --- | --- |
| Draw | `1` | Brushes and shape drawing |
| Eraser | `2` | Erase whatever you have drawn |
| Select | `3` | Select something, then scale, drag, move, or edit it again |
| Board | `4` | Board settings |

<figure>
  <img src="/images/simple-shape.png" alt="Screenshot of the real page" />
  <figcaption>Screenshot of the real page</figcaption>
</figure>

## Move and zoom the canvas

The board is infinite. Pan and zoom as you like.

- Hold `Space` and drag to pan. `Cmd/Ctrl` plus the arrow keys also pans.
- The mouse wheel zooms. `Cmd/Ctrl` plus `+` or `-` zooms as well.
- The round indicator at the lower left shows the current zoom. Click it to return to 100%. `Cmd/Ctrl` plus `0` does the same.
- On a touch screen, drag with two fingers to pan and pinch to zoom. A two-finger double tap undoes, and a three-finger double tap redoes.

## Bottom toolbar

From left to right:

1. Undo, and redo.
2. Copy the current selection.
3. Group several selected items.
4. Delete the current selection.
5. Add text.
6. Upload a picture.
7. Clear the board. This asks you to confirm first.
8. Save the board. Export a PNG of the current view, of everything drawn, or of the selection. You can also download the current board as JSON, for moving boards in and out.
9. Open the layer list.
10. Open the board list.
11. Enter or leave fullscreen.

The help button at the lower left shows shortcuts, a short introduction to the features, and the language switch.  
Languages: Simplified Chinese, Traditional Chinese, English, Japanese, and Korean.

## A simple drawing

1. Press `1` to switch to Draw mode, and pick a brush.
2. Press on an empty area and drag.
3. Press `3` to switch to Select mode. Drag what you just drew to move it.
4. When you want a PNG or JSON backup, click the save button.

Drawings stay in the current browser. To continue on another computer, export the board file first.

## Common shortcuts

| Action | Shortcut |
| --- | --- |
| Select everything | `Cmd/Ctrl` + `A` |
| Add to the selection | `Shift` + click |
| Copy / paste | `Cmd/Ctrl` + `C`, then `V` |
| Paste the system clipboard | `Cmd/Ctrl` + `B` |
| Duplicate the selection in place | `Cmd/Ctrl` + `D` |
| Delete the selection | `Backspace` |
| Move a layer up or down | `Cmd/Ctrl` + `]` or `[` |
| Undo / redo | `Cmd/Ctrl` + `Z`, and `Cmd/Ctrl` + `Shift` + `Z` |
