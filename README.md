# tiTokyo

[tiTokyo](http://titokyo.jp/) conference application was created using Titanium Mobile and Alloy MVC framework, ACS(data storage).


## ACS using data storage
Custom Objects data format.

| class | filed | type | example |
|-------|------:|:-----|:--------| 
| **home** | description | dictionary | { "en": "Text of English", "ja": "日本語のテキスト" } |
| | order | number | 1 |
| **agenda** | started_at | date | 2013-02-16 08:30:00 |
| | ended_at | date | 2013-02-16 09:30:00 |
| | content | dictionary | { "en": "Text of English", "ja": "日本語のテキスト" } |
| **speaker** | name | dictionary | { "en": "Text of English", "ja": "日本語のテキスト" } |
| | title | dictionary | { "en": "Text of English", "ja": "日本語のテキスト" } |
| | content | dictionary | { "en": "Text of English", "ja": "日本語のテキスト" } |
| | order | number | 1 |
| | photo | image upload | |


## Changelog
### 23 Feb 2013
* Wrote comments in the source code :D
* Fixed GPS bug

### 9 Feb 2013
* Dealing with Alloy 1.0.0
* Changed tab position for Android

### 5 Feb 2013
* home, agenda, speaker data get from ACS

### 31 Jan 2013
* Added Android artwork
* Fixed Android bug

### 30 Jan 2013
* Dealing with toggle in-call status bar height change event for iOS

### 28 Jan 2013
* Added new speaker

### 26 Jan 2013
* Changed progress indicator

### 23 Jan 2013
* Added more venue information

### 21 Jan 2013
* Dealing with Alloy 0.3.6 [expr() syntax removed from .tss files.](https://github.com/appcelerator/alloy/commit/e9fdc93c9760a1590c0abd0136662c11dc678066#commitcomment-2401085)
* Dealing with napp.alloy.adapter.restapi for Android


## Credits
* Font Awesome 3.0 by Dave Gandy http://fortawesome.github.com/Font-Awesome
* napp.alloy.adapter.restapi by Mads Møller https://github.com/viezel/napp.alloy.adapter.restapi
