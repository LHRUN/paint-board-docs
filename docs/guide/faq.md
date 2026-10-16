# FAQ

## Where are my drawings saved?

In IndexedDB, in the current browser. There is no account and no cloud copy. When you want a file of your own, export it the way described on [Multiple boards](/guide/boards#import-and-export).

## I opened it on my phone and the old drawing is gone.

Each browser keeps its own boards. A drawing made in Chrome on a computer does not appear in Safari on its own. Export the JSON, then upload it in the browser on that device.

## Why can I not create another board?

New boards stop at 20. Older boards already past that number can still be opened. Delete one, or export it first, then add another. Uploading a JSON file is held to the same limit.

## Why is one board still there after I deleted them?

At least one board always remains. If every board is selected, the current board stays and the others are deleted.

## The eraser will not remove one spot.

In Select mode, every object has an eraser switch. Turn it on if the eraser should remove that object. New objects start with the switch on.

## The text I just added disappeared.

A text box created from the toolbar is removed if you leave it without typing anything. Change the text first, then click outside.

## The font looks like a fallback.

Custom fonts come from Google Fonts and need a network connection.

## Background removal does nothing.

Background removal and image segmentation need WebGPU. A current version of Chrome is the better choice.

## The camera is black.

Allow the camera permission in the browser. Switching boards turns the camera off. Open it again after you return to the board you are using.

## Export says the picture is too large, or fails outright.

Lower the zoom, or export only a small selection. A picture loaded from another website can also make the save fail. The preview before download can rotate, scale, and crop.

## Which browsers are supported?

A current version of Google Chrome is the one to use.

## Feedback

Please report bugs in a [GitHub issue](https://github.com/LHRUN/paint-board/issues). You are also welcome to write to song.lhlh@gmail.com.
