#OSxAttribution
Grabbing OSx acquisition attribution info from DMGs. 

## What does this thing do?
In its current state, this add-on simply grabs the URL xattr information from the lastest DMG you've mounted on your system. It does so by doing the following (in order) in a child-process within a Firefox SDK add-on:

 1. Runs `/usr/bin/hdiutil info` 
 2. Parses the result of 1 to grab the File System location of the most recently mounted DMG
 3. Uses the file system location from 2 to run `/usr/bin/xattr -p com.apple.metadata:kMDItemWhereFroms  {{FS PATH}} | xxd -r -p | plutil -convert json -o - -` which returns a JSON string of the source URLs for that DMG
 4. Prints the source URLs returned from 3

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
