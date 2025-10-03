<br>

### Quick start — SirRawrz fork

If you're using the **SirRawrz** fork of EmulatorJS, follow these steps to get a local server running with playable single- and shared-console netplay.

1. **Download the fork**
   Clone or download the repo at:
   `https://github.com/SirRawrz/EmulatorJS`
   *(Note: I haven't synced the core files with the main project recently — I may touch them tonight. N64 and PSX HTMLs are updated with working netplay. Right now I changed `index.html` for certain consoles to use a specific file per console; I'll eventually switch this to a URL modifier.)*

2. **Install Simple Web Server (Windows)**
   Download and install Simple Web Server:
   `https://simplewebserver.org/download.html`
   In the Basic options choose **Allow local area network access**.
   In Advanced options enable **Allow file uploads** and **Allow replacing files**.
   Point the web server's document root to the folder that contains the fork files (where `indexpsx.html`, `indexn64.html`, `roms/`, `profiles/`, etc. live).

3. **Install Tailscale**
   Install Tailscale on the same computer and log in to an account you can share with family members who will join. This provides an easy way for remote players to reach your server without messing with router configuration.

4. **Configure IP files**
   Edit `serverip.txt` and `tailscaleserverip.txt` with the appropriate IP and port.

   * `serverip.txt` — put your local LAN IP (e.g. `192.168.0.205:8080`). This is **not** the internet-facing IP.
   * `tailscaleserverip.txt` — put your Tailscale IP (e.g. `100.1.121.115:8080`).

5. **Customize profiles**
   Edit `profile.js` to include your profile names. Place avatar/icon images named exactly as the profile keys inside `/profiles`.

6. **Add ROMs**
   Save your ROMs / images / CHD files inside the `roms` folder.

7. **Launch a game**
   Open the game URL from a browser (example using local LAN IP):

   ```
   http://192.168.0.205:8080/indexpsx.html?rom=DigimonWorld3.chd
   ```

   Or, if using Tailscale (remote player), use the tailscale address you put in `tailscaleserverip.txt`, e.g.:

   ```
   http://100.1.121.115:8080/indexpsx.html?rom=DigimonWorld3.chd
   ```

> [!TIP]
> Use the same port for local and Tailscale access (e.g. `:8080`) to keep configuration simple.

<br>

### Netplay (Shared Console) — Host & Join flow

* On the **host** machine (ideally the machine physically on the LAN to reduce latency):

  * Open the game page.
  * Go to **Netplay → Host → Shared Console**.
  * Choose the number of players (2–4).
  * Pick a room number (e.g. `1`).

* On the **joiner** device:

  * They must have Tailscale installed if they are remote. Local LAN joiners do **not** need Tailscale.
  * Open the same game URL (use the Tailscale IP for remote players, or the LAN IP for local players).
  * Go to **Netplay → Join → Shared Console** and enter the room number (e.g. `1`).

At this point the server should be playable for single player (server-side save states/loads) and set up for multiplayer. For the joining player to join they need to have Tailscale installed on the device they are playing on and have the Tailscale IP address (100.x.x.x). That IP should be placed in `tailscaleserverip.txt`. Their join URL will look like:

```
http://100.1.121.115:8080/indexpsx.html?rom=DigimonWorld3.chd
```

(if your Tailscale IP is `100.1.121.115` and you use port `8080`).

Player 1 should hit **Netplay → Host → Shared Console**, choose the number of players (2 is common, up to 4), then choose a room number (e.g. `1`). After that Player 2 (the joiner) should hit **Netplay → Join → Shared Console** and enter the same room number (`1`).

Neither player has to be the Windows program-hosting machine — either can host or join — but ideally the host is physically on the local network to avoid extra latency. Local players on the same LAN do **not** need Tailscale installed to play.

<br>

### Useful links

* Fork: `https://github.com/SirRawrz/EmulatorJS`
* Simple Web Server (download): `https://simplewebserver.org/download.html`
* Tailscale: `https://tailscale.com/`

<br>

> **At this point the server should be playable for single player** (server-side save/load) and **set up for multiplayer**. If you run into problems, consider opening an ***[Issue]*** with logs and details.

<br>

(WARNING: Still testing things until this is removed!)
<div align = center>

<img width = 300 src = docs/Logo-light.png#gh-dark-mode-only>
<img width = 300 src = docs/Logo.png#gh-light-mode-only> 
 
<br>
<br>

[![Badge License]][License]

Self-hosted **Javascript** emulation for various systems.

<br>

[![Button Website]][Website]
[![Button Usage]][Usage]<br>
[![Button Configurator]][Configurator]<br>
[![Button Demo]][Demo]<br>
[![Button Contributors]][Contributors]

Join our Discord server:

[![Join our Discord server!](https://invidget.switchblade.xyz/6akryGkETU)](https://discord.gg/6akryGkETU)

</div>

<br>

> [!NOTE]  
> **As of EmulatorJS version 4.0, this project is no longer a reverse-engineered version of the emulatorjs.com project. It is now a complete rewrite.**

> [!WARNING]  
> As of version 4.0.9 cores and minified files are no longer included in the repository. You will need to get them separately. You can get it from [releases](https://github.com/EmulatorJS/EmulatorJS/releases) or the \* new CDN (see [this](#CDN) for more info). There is also a new version system that we will be using. (read [here](#Versioning) for more info).

> [!TIP]
> Cloning the repository is no longer recommended for production use. You should use [releases](https://github.com/EmulatorJS/EmulatorJS/releases) or the [CDN](https://cdn.emulatorjs.org/) instead.

<br>

### Ads

*This project has no ads.* <br>
*Although, the demo page currently has an ad to help fund this project.* <br>
*Ads on the demo page may come and go depending on how many people are* <br>
*funding this project.* <br>

*You can help fund this project on* ***[patreon]***

<br>

### Issues

*If something doesn't work, please consider opening an* ***[Issue]*** <br>
*with as many details as possible, as well as the console log.*

<br>

### 3rd Party Projects

EmulatorJS itself is built to be a plugin, rather than an entire website. This is why there is no docker container of this project. However, there are several projects you can use that use EmulatorJS!

Looking for projects that integrate EmulatorJS? Check out https://emulatorjs.org/docs/3rd-party

<br>

### Versioning

There are three different version names that you need to be aware of:

1. **stable** - This will be the most stable version of the emulator both code and cores will be tested before release. It will be updated every time a new version is released on GitHub. This is the default version on the Demo.
2. **latest** - This will contain the latest code but use the stable cores. This will be updated every time the *main* branch is updated.
3. **nightly** - This will contain the latest code and the latest cores. The cores will be updated every day, so this is considered alpha.

<br>

### CDN

**EmulatorJS provides a CDN** at `https://cdn.emulatorjs.org/`, allowing access to any version of the emulator.

To use it, set `EJS_pathtodata` to `https://cdn.emulatorjs.org/<version>/data/`, replacing `<version>` with `stable`, `latest`, `nightly`, or another main release.

Be sure to also update the `loader.js` path to:
`https://cdn.emulatorjs.org/<version>/data/loader.js`

<br>

### Development:

*Run a local server with:* 

1. Open a terminal in the root of the project.

2. Install the dependencies with:

   ```sh
   npm i
   ```

3. Start the minification with:

   ```sh
   node start
   ```

4. Open your browser and go to `http://localhost:8080/` to see the demo page.

<br>

<br>

#### Minifying

Before pushing the script files onto your production server it is recommended to minify them to save on load times as well as bandwidth.

Read the [minifying](minify/README.md) documentation for more info.

<br>

#### Localization

If you want to help with localization, please check out the [localization](data/localization/README.md) documentation.

<br>

**>> When reporting bugs, please specify what version you are using**

<br>
<br>
<br>

<h1 align = center>Supported Systems</h1>

<br>

<div align = center>

### Nintendo

**[Game Boy Advance][Nintendo Game Boy Advance]**   | 
**[Famicom / NES][NES / Famicom]**   | 
**[Virtual Boy][Virtual Boy]**
    
**[Game Boy][Nintendo Game Boy]**   | 
**[SNES]**   | 
**[DS][Nintendo DS]**   | 
**[64][Nintendo 64]**

<br>
<br>

### Sega

**[Master System][Sega Master System]**   | 
**[Mega Drive][Sega Mega Drive]**   | 
**[Game Gear][Sega Game Gear]**
    
**[Saturn][Sega Saturn]**   | 
**[32X][Sega 32X]**   | 
**[CD][Sega CD]**

<br>
<br>

### Atari

**[2600][Atari 2600]**   | 
**[5200][Atari 5200]**   | 
**[7800][Atari 7800]**   | 
**[Lynx][Atari Lynx]**   | 
**[Jaguar][Atari Jaguar]**

<br>
<br>

### Commodore

**[Commodore 64]** |
**[Commodore 128]** |
**[Commodore Amiga]**

**[Commodore PET]** |
**[Commodore Plus/4]** |
**[Commodore VIC-20]**

<br>
<br>

### Other

**[PlayStation]**   | 
**[PlayStation Portable]**   | 
**[Arcade]**    

**[3DO]** |
**[MAME 2003]** |
**[ColecoVision]**

</div>

<br>

## Star History

<a href="https://star-history.com/#EmulatorJS/EmulatorJS&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=EmulatorJS/EmulatorJS&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=EmulatorJS/EmulatorJS&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=EmulatorJS/EmulatorJS&type=Date" />
 </picture>
</a>

<!-- 🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮 --->

[License]: LICENSE
[Issue]: https://github.com/ethanaobrien/emulatorjs/issues
[patreon]: https://patreon.com/EmulatorJS

<!-- 🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮   Quicklinks   🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮 --->

[Configurator]: https://emulatorjs.org/editor
[Contributors]: docs/contributors.md
[Website]: https://emulatorjs.org/
[Usage]: https://emulatorjs.org/docs/
[Demo]: https://demo.emulatorjs.org/


<!-- 🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮  Systems  🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮 -->

[Nintendo Game Boy Advance]: https://emulatorjs.org/docs/systems/nintendo-game-boy-advance
[Nintendo Game Boy]: https://emulatorjs.org/docs/systems/nintendo-game-boy
[Nintendo 64]: https://emulatorjs.org/docs/systems/nintendo-64
[Nintendo DS]: https://emulatorjs.org/docs/systems/nintendo-ds

[Sega Master System]: https://emulatorjs.org/docs/systems/sega-master-system
[Sega Mega Drive]: https://emulatorjs.org/docs/systems/sega-mega-drive
[Sega Game Gear]: https://emulatorjs.org/docs/systems/sega-game-gear
[Sega Saturn]: https://emulatorjs.org/docs/systems/sega-saturn
[Sega 32X]: https://emulatorjs.org/docs/systems/sega-32x
[Sega CD]: https://emulatorjs.org/docs/systems/sega-cd

[Atari Jaguar]: https://emulatorjs.org/docs/systems/atari-jaguar
[Atari Lynx]: https://emulatorjs.org/docs/systems/atari-lynx
[Atari 7800]: https://emulatorjs.org/docs/systems/atari-7800
[Atari 2600]: https://emulatorjs.org/docs/systems/atari-2600
[Atari 5200]: https://emulatorjs.org/docs/systems/atari-5200

[NES / Famicom]: https://emulatorjs.org/docs/systems/nes-famicom
[SNES]: https://emulatorjs.org/docs/systems/snes

<!--
[TurboGrafs-16 / PC Engine]: https://emulatorjs.org/systems/TurboGrafx-16
[MSX]: https://emulatorjs.org/systems/MSX
[WanderSwan / Color]: https://emulatorjs.org/systems/WonderSwan
[Neo Geo Poket]: https://emulatorjs.org/systems/Neo%20Geo%20Pocket
--->
[PlayStation]: https://emulatorjs.org/docs/systems/playstation
[PlayStation Portable]: https://emulatorjs.org/docs/systems/psp
[Virtual Boy]: https://emulatorjs.org/docs/systems/virtual-boy
[Arcade]: https://emulatorjs.org/docs/systems/arcade
[3DO]: https://emulatorjs.org/docs/systems/3do
[MAME 2003]: https://emulatorjs.org/docs/systems/mame-2003
[ColecoVision]: https://emulatorjs.org/docs/systems/colecovision

[Commodore 64]: https://emulatorjs.org/docs/systems/commodore-64
[Commodore 128]: https://emulatorjs.org/docs/systems/commodore-128
[Commodore Amiga]: https://emulatorjs.org/docs/systems/commodore-amiga
[Commodore PET]: https://emulatorjs.org/docs/systems/commodore-pet
[Commodore Plus/4]: https://emulatorjs.org/docs/systems/commodore-plus4
[Commodore VIC-20]: https://emulatorjs.org/docs/systems/commodore-vic20


<!-- 🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮  Badges  🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮 🎮 --->

[Badge License]: https://img.shields.io/badge/License-GPLv3-blue.svg?style=for-the-badge

[Button Configurator]: https://img.shields.io/badge/Code%20Generator-992cb3?style=for-the-badge
[Button Contributors]: https://img.shields.io/badge/Contributors-54b7dd?style=for-the-badge
[Button Website]: https://img.shields.io/badge/Website-736e9b?style=for-the-badge
[Button Usage]: https://img.shields.io/badge/Usage-2478b5?style=for-the-badge
[Button Demo]: https://img.shields.io/badge/Demo-528116?style=for-the-badge
[Button Beta]: https://img.shields.io/badge/Beta-bb044f?style=for-the-badge
