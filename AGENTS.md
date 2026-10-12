# Project requirements

This project is the standalone `pastel-study.html` miniature room, built from `scene-app.js` and the existing embedded Three.js bundle.

## Mobile support — ongoing user requirement
Every future feature and visual change must consider mobile as well as desktop. Preserve touch orbit, two-finger pan and pinch zoom; avoid hover-only access. Check narrow portrait (at least 360 px), landscape, dialog scrolling, 44 px touch targets, readable input sizes, safe areas and the on-screen keyboard where applicable. Keep the initial whole-room framing responsive. Verify relevant mobile interactions whenever changing them, and state real-device testing limitations accurately. Preserve the single-file output and existing saved local postcards.

## Selected typography
Use the embedded Coming Soon (RoomPaper) for English on paper/stickers/postcards, Finger Paint (RoomBoard) for English written directly on the board, and 乐米小奶泡体 (RoomChinese) for Chinese. Preserve font licenses and original font files. Redraw canvas text after fonts load; validate mobile wrapping. Do not replace these with system handwriting fonts.

## Character proportions
The character represents an adult Chinese woman about 165 cm tall, not a child. Standing model height is about 3.2 scene units, near the fourth shelf. Preserve adult head/body proportions and visible grounded feet in seated/crouching poses. Piano activity automatically emits falling, fading notes.

## Collision and sleep animation
Keep full body and limbs visible throughout sleep transitions. Bed entry/exit must use the reversible bed sequence: bedside approach, shoes off, quilt opening, sitting on edge, lifting/swinging legs above mattress, reclining, quilt closing, eyes closed. Never teleport a sleeping character or hide the torso. Mesh bounds feed navigation collisions; preserve pathfinding, swept walking checks, chair rotation guards and drawer occupancy checks. Test desktop/mobile entry, exit, and full activity loop after animation changes.

## Chair and central rug
Keep the square central rug and the rabbit nest in front of it, outside its footprint. Dragging the chair translates it within the rug with furniture collision checks; tapping rotates it by 45 degrees. Preserve these gestures on mouse and touch, and keep the controls help accurate.


## Animated devices and lighting
Preserve the bottom-up looping 3D print reveal and moving printhead, rotating PC fan blades and flowing RGB strips. Floor lamp pull cord and printer button toggle independent lights by day or night. Entering night turns these and the pinboard garland on once; subsequent manual off must persist. Garland wall switch cycles breathing, irregular twinkle, alternating bulbs, off. Keep touch switch targets accessible.


## Experience photo albums
The 29 supplied original work photos are embedded, mapped in experience-photo-manifest.json. Preserve left stacked photo cards/right matching experience paper on desktop, arrows, bilingual captions, keyboard navigation and touch swipe. Mobile portrait stacks photos above details with a reachable close button. Keep event dates separate from employment dates; related academic visits are grouped with UNSW without claiming employment at the visited institutions.


## Music corner / character removed
The user explicitly removed the human character. Keep girl, sleeping shoes and trophy step detached, disable its animation and all invisible-person collisions; do not restore it. Piano, ukulele and simple electric guitar emit their own synthesized sound and falling notes. Marshall Stanmore III styled speaker has track switching and a power control, with three embedded Kevin MacLeod recordings (Carefree, Life of Riley, Wallpaper; CC BY 4.0), attributed in the record dialog. Score playback pauses the background and restores it only if speaker power remains on. Four score entries are requested: Fur Elise, Butterfly Lovers, La Campanella, Colourful Clouds Chasing the Moon. Elise (V Gao, CC0) and Campanella (Romuald Greiss, public domain) use embedded actual performance recordings; the other two explicitly await audio assets. Never restore synthesized background loops or MIDI score playback. Preserve desktop/mobile input and no autoplay before a user gesture.

## Vinyl records and power controls
The supplied 情归 (ink portrait cover) and 月落听风 (blue moon cover) play from two wall vinyl records above the piano. Ukulele, electric guitar, their floor stands and wall rack are removed at the user’s request. Vinyls mount directly on the left wall surface (world x=-4.059), independently of the piano. The Marshall speaker is centered on the piano. All full tracks share one HTMLAudioElement. The speaker power control and symbol are on its top-right knob, with no front power badge. A large power button remains in the record dialog. Preserve the global bottom-right mute button controlling recordings and the Web Audio master gain. Power off stops any score or record. Preserve source/license links in the record dialog and assets/audio/credits.json. All seven full recordings are embedded MP3, including transcoded copies of the user assets; originals remain untouched. Desktop mouse and 360px emulated touch power toggles were verified.

Speaker refinement: speaker centered at piano local (0,2.49,-.393), back touches wall. Remove Records and Stanmore III model tags. Exactly four top controls left-to-right: physical rocker power, next track, volume down, volume up (10% steps clamped 0..100%). Transparent printed names sit immediately below each control. No paper power icon. No grille click action. Mouse and emulated mobile taps verified for all four. This supersedes the earlier top-right power knob description.

User supplied YouTube scores: Butterfly Lovers 2w5fEoXu78E and Colourful Clouds Z-EZTdVJmVQ. Their score buttons now open responsive streaming embeds with direct YouTube fallback links; no downloaded audio. Opening an embed pauses room recordings, switching tracks removes the embed, closing/stopping restores prior recording when applicable. Global mute sends YouTube mute commands. DOM interaction and mobile layout verified, actual YouTube playback not confirmed (file URLs may encounter embed restrictions).

Both wall vinyl captions must include the user-specified credit: 原创 · 原创歌词 · AI 作曲, beneath the supplied song artwork.

Latest score requirement supersedes YouTube embeds: audio only. 彩云追月 successfully extracted from supplied video Z-EZTdVJmVQ (Yundi Li), converted to embedded MP3 (228 seconds), uses unified audio player. 梁祝 download returned HTTP 403; button now disabled awaiting user audio, original source link retained. Online video panel removed. Do not claim 梁祝 audio is available. Both desktop and mobile clouds playback/power checked.

Autonomous rabbit: starts exploring after ~3s; randomized reachable routes, idle pauses, smooth loaf/rest pose and occasional return to cushion. Click still starts a new walk. Keep per-step furniture collision check and dynamic chair refresh. Desktop/mobile simulated five minutes verified all three states with zero collision samples. Remove old three inset rug outline tubes: they were left at the rug’s previous location; preserve wood floor grain.

梁祝 is now available: user replaced source with https://www.youtube.com/watch?v=12q1nUjwjqg (Richard Clayderman China Tour), start at 1:53. Download succeeded; embedded MP3 has first 113 seconds removed, remaining duration 152 seconds. Score button enabled, unified audio playback only, source link includes t=113s. Supersedes previous unavailable/403 note. Desktop/mobile playback and power verified.

Loading screen: inline SVG/CSS 2D twin-ponytail girl running home, responsive and reduced-motion aware. Markup must remain before the first script (room-loader.html); preserve when rebuilding. Fade/remove after default texture loading, font readiness (or font fallback), and two animation frames. Both desktop and 360px load completion verified. This loading illustration does not restore the removed 3D human.

Desk resume: source C:/Users/User/Downloads/Kino_Ding_CV (7).pdf, 3 pages. First-page paper thumbnail on left desk opens #resume-reader with all three rendered pages and an embedded-original PDF Blob link. Preserve PDF bytes, mouse/touch picking, responsive scroll and close. No rewriting of CV content. Physical desktop and mobile taps verified.

Right-side interactive menu: lists live scene interactions by category (55 current entries), hover/focus overrides single glow target; click invokes matching action. Mobile defaults collapsed and collapses after selection; 44px controls and scrolling. Upper-left Kino的 微光书房 neon title uses pastel pink/purple/white/green/yellow/blue glow, breathing light and reduced-motion fallback. Preserve global mute and loader above this UI. Desktop/mobile menu hover, resume opening, and no horizontal overflow verified.
