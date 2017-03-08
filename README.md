#OSxAttribution
Grabbing OSx acquisition attribution info from DMGs

## Build it:
1. Install jpm
2. Navigate to the folder where you've cloned OSxAttribution
3. Run `jpm xpi`

## Run it:
1. Mount a DMG
2. Navigate to about:debugging
3. Select 'Load Temporary Add-on' and then select the XPI from this repo
4. Click "Debug"
5. The console should now display the file source of the latest DMG you've mounted
