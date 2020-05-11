const testVar = {}

function superbowlWin(arr) {
  let win = arr.find( r => r.result === "W" )
	  if (win === undefined)
      return undefined
    else
      return win.year
}
