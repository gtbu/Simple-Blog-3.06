# Simple Blog
Blog plugin for [Typesetter CMS](https://github.com/Typesetter/Typesetter). 
It works for example with [Html5](https://github.com/gtbu/Online-Themes) , Nedstrap 1.0, [Smart Multi](https://github.com/gtbu/Typesetter5-Themes) -> white2, blue5 etc. and Two Point 0 - Themes (with sidebars).

** closing of DOM ready function - from https://www.typesettercms.com/Forum?show=t2762&page=1#post_11526  in static/user.js

Update : all archive gadget levels collapsible and collapse now by default --- 
7/21 : new css with UTF8 icons

<b> 2025 : </b> : strftime is deprecated since php 8.1 . It was replaced by a \PHP81_BC\strftime(). A similar function is <a href=https://www.w3schools.com/PHP/func_date_gmstrftime.asp> Gmstrftime</a>.  Newer typesetter versions have a strftime with \intltime\strftime() -  see <a href=https://github.com/gtbu/Typesetter-5.3-p8/issues/28> issues</a> : make modifikations in include/tool.php (use intltime; use function \intltime\strftime;)  and change all deprecations of strftime to \intltime\strftime in the blog-plugin

( Please remember to fist set Entries Per Page and Entries Per Gadget to 1-2 - otherwise You see lots of entries.)

[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/Typesetter/Simple-Blog/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/Typesetter/Simple-Blog/?branch=master)
