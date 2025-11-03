This is a very rough and limited copy of a "fork" of ethanthesleepyone's and allancoding's 4.2.1 EmulatorJS. Specifically it is a clone of https://demo.emulatorjs.org/, fetched months ago. I had never done any sort of project like this and their extensive documentation, presence on Discord and intuitive design made it approachable with just ChatGPT and Notepad ++.

-------------------------------------------------------------------
SERVER SETUP
-------------------------------------------------------------------
Install Simple Web Server (Windows) Download and install Simple Web Server: https://simplewebserver.org/download.html In the Basic options choose Allow local area network access. In Advanced options enable Allow file uploads and Allow replacing files. Point the web server's document root to the folder that contains the fork files (where indexpsx.html, indexn64.html, roms/, profiles/, etc. live).


New Server -> 
Folder Path is the extracted zip file folder. 
C:\Users\David\Desktop\EmulatorJS-SWS for example

Choose port 8080 or 8079. 

Accessible on Local Network Checked

Under Advanced options checkmark:
Allow file upload
Allow replacing files
Allow deleting files

For simplicity for now just use http and not https.

----------------------------------------------------------------------
Bios and Roms
----------------------------------------------------------------------
You will need to provide your own Bios and Roms. bios go in /emulator/bios/ and roms go in /emulator/roms. Below is the snippet responsible from the index(console-core).htmls

window.EJS_biosUrl = `http://${serverIP}/emulator/bios/SCPH1001.BIN`;
window.EJS_gameUrl     = `http://${serverIP}/emulator/roms/${romParam}?t=${Date.now()}`;

To load a game go to 
http://${serverIP}/emulator/index(console-core).html?rom=romname.extension

So for SuperSmashBros.z64, a n64 game stored in the roms folder:


http://192.168.254.16:8080/emulator/indexn64.html?rom=SuperSmashBros.z64

For now Save your rom names with no spaces!!!!! I'm unsure if it works otherwise. 

---------------Do not ask me or the EmulatorJS Server for Bios or Rom files------------------------- 





-------------------------------------------------------------------
Bugs/missing features with this version:
--------------------------------------------------------------------

For setup you will need to enter your local IP in 4 txt files for now. /serverip.txt, /tailscaleserverip.txt, /emulator/serverip.txt, tailscaleserverip.txt
Just use your local IP for each of them (Usually something like 192.168.0.X) When its setup you can replace the tailscaleserverip.txts with your tailscale IP. 

The folder structure isn't how I planned, as I wanted it to match as it already is for EmulatorJS main repository. In order to avoid digging through the already working project I have just mirrored how I have it hosted.  

Limited to port 8080/8079. You must use port 8080 (preferred) or 8079 in emulatorJS. If you can't use port 8080/8079, you will need to change the index(console-core).htmls replacing each instead of 8080 with your desired port. (You don't have to replace anything for 8079.)

PPSPP requires https. Might be accessible if you checkmark the enable .swshtaccess under advanced
---------------------------------------------------------------------
This has no improvements made by the main repository past 4.2.1.

SirRawrz
