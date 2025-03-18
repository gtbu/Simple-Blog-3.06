# Simple Blog
Blog plugin for [Typesetter CMS](https://github.com/Typesetter/Typesetter). It works for example with [Html5](https://www.typesettercms.com/Themes/130_h5_html5_template)- , Nedstrap 1.0, [Smart Multi](https://www.typesettercms.com/Themes/345_smart_multi) -> white2,blue5 etc. and Two Point 0 - Templates (with sidebars).

** closing of DOM ready function - from https://www.typesettercms.com/Forum?show=t2762&page=1#post_11526  in static/user.js

Update : all archive gadget levels collapsible and collapsed now by default --- 
7/21 : new css with UTF8 icons

<b> 2025 : </b> : Newer typesetter versions have a strftime with \intltime\strftime() -  see <a href=https://github.com/gtbu/Typesetter-5.3-p8/issues/28> issues</a> : make modifikations in include/tool.php (use intltime; use function \intltime\strftime;)  and change all deprecations to \intltime\strftime

( Please remember to fist set Entries Per Page and Entries Per Gadget to 1-2 - otherwise You see lots of entries.)

[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/Typesetter/Simple-Blog/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/Typesetter/Simple-Blog/?branch=master)
