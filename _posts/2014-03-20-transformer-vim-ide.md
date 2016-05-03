---
layout: post
title: Transformer Vim en IDE
categories:
- informatique
tags:
- vim informatique youcompleteme configuration
locale: fr
section: computerscience
permalink: vim-ide
---

<h2><a id="intro">Introduction</a></h2>


Utilisant Vim au quotidien, j'ai eu l'occasion d'essayer et rassembler un certains nombre de configurations et de plugins différents. Une grosse partie de la base que j'ai utilisée vient de <a target="_blank" href="https://github.com/amix/vimrc">The Ultimate vimrc</a>, mais j'ai fini par faire un grand nettoyage car beaucoup des plugins et fonctionnalités activés m'était superflues.


Ce qui suit décrit donc une partie de ma configuration actuelle, avec les fonctionnalités importantes présentes de base, et les différents plugins que j'ai installé, avec leur configuration spécifique.<br />
Le tout donnant un éditeur qui se rapproche fortement des plus gros IDE !


Accès rapide :

<ul>
<li><a href="#choix">Choix des plugins</a></li>
<ul>
<li><a href="#choix-core">Amélioration du core</a></li>
<li><a href="#choix-fonct">Ajout de fonctionnalités</a></li>
</ul>
<li><a href="#config-base">Quelques configurations de base</a></li>
<ul>
<li><a href="#base-leader">La touche "leader"</a></li>
<li><a href="#base-indent">Indentation</a></li>
<li><a href="#base-gui">Interface utilisateur</a></li>
<li><a href="#base-undo">Undo persistant</a></li>
<li><a href="#base-trailing">Espaces de fin de ligne</a></li>
<li><a href="#base-split">Split et onglets</a></li>
<li><a href="#base-status">Ligne de statut</a></li>
<li><a href="#base-paste">Copier/Coller avec le serveur X</a></li>
</ul>
<li><a href="#config-plugin">Configuration des plugins</a></li>
<ul>
<li><a href="#plugin-tree">NERDTree</a></li>
<li><a href="#plugin-buf">BufExplorer</a></li>
<li><a href="#plugin-ctrlp">CtrlP</a></li>
<li><a href="#plugin-ycm">YouCompleteMe</a></li>
</ul>
<li><a href="#conclusion">Conclusion</a></li>
</ul>

<h2><a id="choix" href="#intro">Choix des plugins</a></h2>

On peut décomposer les plugins que j'utilise en deux catégories :

<ul>
<li>Ceux qui améliorent le comportement de base de Vim</li>
<li>Ceux qui ajoute clairement de nouvelles fonctionnalités</li>
</ul>

<h3><a id="choix-core" href="#intro">Amélioration du core</a></h3>
<h4>Vundle</h4>

Je vais présenter ce plugin en premier car c'est celui que j'utilise pour gérer tous mes plugins.<br />
Dans cette catégorie plusieurs alternatives sont possibles : NeoBundle (un fork de Vundle), ou pathogen qui permet également de charger tous les plugins dans un répertoire donné.<br />
Jusqu'à peu j'utilisais d'ailleurs pathogen, plusieurs choses m'ont fait changer pour Vundle : tout d'abord parce qu'il faut spécifier explicitement quels plugins on souhaite activer, et ensuite parce que si le plugin spécifié possède un dépot git, Vundle peut le mettre à jour sur demande.<br />
Bref sans un logiciel de ce type, gérer ses plugins est un vrai fardeau.


<h4>YankRing</h4>

Ce plugin est indispensable ! Il maintient un tampon circulaire des derniers yank (copies) effectués, ce qui permet de changer le texte que l'on vient de coller par un texte précédemment copié dans le yankring (exemple : vous avez yanké successivement les mots "coucou" et "tu"; en appuyant sur <code>p</code> vous collez "tu", et en appuyant après sur <code>ctrl-P</code> "tu" est remplacé par "coucou").<br />
Les raccourcis sont <code>ctrl-P</code> pour coller l'entrée précédente du tampon, et <code>ctrl-N</code> pour coller l'entrée suivante.


<h4>NERDCommenter</h4>


Ce plugin permet de rendre le commentaire de code très agréable, fonctionnalité qui manque de base dans Vim : il permet de commenter une ligne ou un bloc de code, selon les règles du langage de votre fichier.<br />
Une fonctionnalité de base pour un éditeur de fichier vous me direz, mais ça manquait.<br />
Les raccourcis de base sont disponibles sur la <a target="_blank" href="https://github.com/scrooloose/nerdcommenter#usage">page du plugin</a>.


<h4>Markdown</h4>


Ce plugin permet à Vim de comprendre et d'afficher correctement le Markdown, de sorte qu'il n'y ait pas besoin de faire appel à un programme extérieur pour avoir un aperçu de son fichier.


<h4>Thème et améliorations visuelles</h4>


<ul>
<li>Peaksea : c'est le thème que j'utilise.</li>
<li>Powerline/Airline : les deux plugins permettent de personnaliser complètement la barre d'information affichée en bas de Vim, je reviendrai sur les différences entre les deux dans la partie configuration.</li>
</ul>


<h3><a id="choix-fonct" href="#intro">Ajout de fonctionnalités</a></h3>
<h4>NERDTree</h4>

Ce plugin ajoute un explorateur de fichier assez complet à Vim, qui s'ouvre sur la partie gauche de l'écran.<br />
Il s'affiche ou se cache en un raccourci, permet d'ouvrir le fichier courant dans un split vertical, horizontal, ou dans un nouvel onglet, et dispose d'un certain nombre de raccourci pour faciliter la navigation dans l'arborescence des fichiers.



<h4>Bufexplorer</h4>

Ce plugin affiche simplement une liste des buffers ouverts dans la vue courante, et permet d'y accéder ou de les fermer.


<h4>CtrlP</h4>

CtrlP permet l'ouverture rapide de fichiers en se basant sur plusieurs sources : les fichiers présents à partir de la racine du répertoire de travail courant, les fichiers récemment utilisés, et les buffers ouverts.<br />
Il suffit pour cela de déclencher le mode CtrlP, de taper une partie du fichier que vous voulez ouvrir, et le plugin vous propose une série de suggestions parmi lesquelles vous pouvez naviguer, pour finalement ouvrir celle qui correspond à ce que vous cherchez.



<h4>YouCompleteMe</h4>

LE plugin pour gérer l'autocomplétion dans Vim ! Oubliez ctags et autres solutions uniquement syntaxiques, faites confiance à Clang !<br />
Ce plugin propose d'une part une autocomplétions sur des mots "de base" : mots utilisés dans les buffers ouverts, chemins sur votre disque, mots clés dans les différents langage, etc..<br />
Mais aussi, et surtout, une autocomplétion basée sur l'analyse sémantique de votre programme pour les langage C-like et python. Une fonctionnalité présente dans la plupart des gros IDE, mais absente de la majorité des solutions d'autocomplétion pour Vim.<br />
Ce plugin permet aussi de sauter à la déclaration ou la définition des différents éléments de votre code, en utilisant la jump stack incluse dans Vim (vous pouvez donc revenir à la précédente localisation via <code>ctrl-o</code>, et re sauter à la déclaration/définition via <code>ctrl-i</code>).<br />
Cette partie du plugin repose sur libclang, et en pratique il compile votre code à la volée et enregistre les différentes classes et fonctions accessible dans votre unité de compilation (ce qui inclue généralement les librairies standard !).<br />
Le tout sans gêner la fluidité de l'écriture du code !


La mise en place et la configuration de ce plugin n'est <b>pas</b> triviale mais les explications sont claires et le manuel utilisateur est complet (voir <a target="_blank" href="https://github.com/Valloric/YouCompleteMe">ici</a>), je reviendrai néanmoins sur les différents points qui ont pu être bloquant dans la section configuration.

<hr/>

<h2><a id="config-base" href="#intro">Quelques configurations de base</a></h2>

Je ne vais pas détailler toute ma configuration (elle est accessible <a href="https://github.com/viroulep/configFiles/tree/master/.vim" target="_blank">ici</a>), mais parler de la base et des petits détails bien pratiques !

<h3><a id="base-leader" href="#intro">La touche "leader"</a></h3>
Une touche <code>leader</code> permet de pouvoir définir un ensemble de raccourci commençant par cette touche, dans mon cas j'ai choisi le caractère <code>,</code>.

``` vim

let mapleader = ","
let g:mapleader = ","

" Fast saving
nmap <leader>w :w!<cr>

" Fast quit
nnoremap <leader>q :qa<cr>
```


Avec ça, il suffit d'utiliser <code>,w</code> et <code>,q</code> pour enregistrer et quitter.

<h3><a id="base-indent" href="#intro">Indentation</a></h3>
Quelques réglages pour l'indentation, par défaut j'utilise des espaces pour indenter, et une indentation fait 4 espaces.

``` vim
" Use spaces instead of tabs
set expandtab

" Be smart when using tabs ;)
set smarttab

" 1 tab == 4 spaces
set shiftwidth=4
set tabstop=4

set ai "Auto indent
set si "Smart indent
set wrap "Wrap lines
```

<h3><a id="base-gui" href="#intro">Interface utilisateur</a></h3>

Par défaut l'interface ne regorge pas d'informations, il y a donc quelques fonctionnalités à activer, telles que la coloration syntaxique et l'affichage des numéros de ligne.<br />
De plus la touche <code>échap.</code> est quand même bien loin, alors je l'ai remappée sur <code>jj</code>, qui n'apparait presque jamais en Français ou en Anglais.

``` vim
" Map jj on escape
inoremap jj <esc>

" Show line number
set nu

" Enable syntax highlighting
syntax enable

" Set utf8 as standard encoding and en_US as the standard language
set encoding=utf8
```


<h3><a id="base-undo" href="#intro">Undo persistant</a></h3>

Il est possible d'indiquer à Vim un répertoire où conserver les actions effectuées sur un buffer, de cette manière vous pourrez annuler ou restaurer des modifications sur un fichier même après avoir l'avoir fermé ou avoir fermé Vim !

``` vim
set undodir=~/.vim/temp_dirs/undodir
set undofile
```
<h3><a id="base-trailing" href="#intro">Espaces de fin de ligne</a></h3>

"Normalement", il ne faut pas laisser d'espace en fin de ligne, ce bout de configuration les affiche en rouge dans votre code.

``` vim
" Creates a group ExtraWhitespace
hi ExtraWhitespace ctermbg=red guibg=red
" Highlight trailing whitespaces
autocmd Syntax * syn match ExtraWhitespace /\s\%#\@<!$/

```


<h3><a id="base-split" href="#intro">Split et onglets</a></h3>

Permet d'utiliser <code>ctrl+direction</code> pour se déplacer entre les splits :

``` vim
" Smart way to move between windows
map <C-j> <C-W>j
map <C-k> <C-W>k
map <C-h> <C-W>h
map <C-l> <C-W>l
```



Manipulation d'onglet facilement :

``` vim
" Useful mappings for managing tabs
map <leader>tn :tabnew<cr>
map <leader>tc :tabclose<cr>
map <leader>tm :tabmove
```



Pour me déplacer dans les onglets j'utilise <code>mod4+direction</code> (mod4 est la touche "Windows" ou "Super"), pour cela il faut configurer votre terminal pour qu'il envoie un code compréhensible pour Vim. Dans ma configuration, urxvt envoie <code>^[^G</code> quand il reçoit <code>mod4</code>.

``` vim
"In my urxvt config, mod4+key is esc+bell + key
nmap ^[^Gh gT
nmap ^[^Gl gt
```


<h3><a id="base-status" href="#intro">Ligne de statut</a></h3>

Par défaut la ligne de statut n'est pas affichée, il faut donc systématiquement l'activer et y ajouter des informations utiles.

``` vim
" Always show the status line
set laststatus=2

" Format the status line
set statusline=\ %{HasPaste()}%F%m%r%h\ %w\ \ CWD:\ %r%{getcwd()}%h\ \ \ Line:\ %l

" Returns true if paste mode is enabled
function! HasPaste()
    if &amp;paste
        return 'PASTE MODE  '
    en
    return ''
endfunction
```


<h3><a id="base-paste" href="#intro">Copier/Coller avec le serveur X</a></h3>

Sauf erreur de ma part, la version de Vim packagé dans Debian n'a pas le support du presse-papier du serveur X, si vous voulez profiter de cette partie de la configuration il faudra donc recompiler Vim avec l'option +xclipboard (ou vérifier que la version proposée par votre système dispose de cette option).
<br/>
Note : il y a deux presse-papier dans X11, <code>*</code> contient la sélection, et <code>+</code> contient le texte copié/coupé.

``` vim
"Paste system clipboard
nnoremap <leader>p "+p
vnoremap <leader>p "+p

"Copy to system clipboard
nnoremap <leader>yy "+yy
vnoremap <leader>y "+y

"Delete to system clipboard
nnoremap <leader>dd "+dd
vnoremap <leader>d "+d
```

<hr/>

<h2><a id="config-plugin" href="#intro">Configuration des plugins</a></h2>

Certains plugins ont besoin de configurations supplémentaires ou d'une installation particulière, cette section les regroupe.


<h3><a id="plugin-tree" href="#intro">NERDTree</a></h3>

Comme je l'indiquais précédemment, ce plugin met à disposition un explorateur de fichier.<br />
Il est possible de filtrer les fichiers affichés en modifiant la variable <code>NERDTreeIgnore</code> (voir ci dessous pour un exemple filtrant les fichiers objet).

``` vim
map <leader>nn :NERDTreeToggle<cr>

"Hide .o in nerd tree
let NERDTreeIgnore=['\.o$']
```



L'explorateur s'ouvrira et se fermera avec un seul raccourci : <code>,nn</code>, et une fois ouvert un certain nombre de possibilités s'ouvre à vous, en fonction du type du nœud courant (fichier/dossier). La première chose à savoir est que l'aide s'affiche et se cache grâce à la touche <code>?</code>, et voici un condensé des opérations que j'utilise régulièrement :

<ul>
<li><code>o</code> ou <code>enter</code> ouvre le fichier sous le curseur dans la fenêtre précédente.</li>
<li><code>s</code> ouvre le fichier sous le curseur dans un split vertical</li>
<li><code>i</code> ouvre le fichier sous le curseur dans un split horizontal</li>
<li><code>t</code> ouvre le fichier sous le curseur dans un nouvel onglet</li>
<li><code>I</code> affiche/cache les fichiers cachés</li>
</ul>


<h3><a id="plugin-buf" href="#intro">Bufexplorer</a></h3>

Idem que pour NERDTree, il n'y a pas grand chose à configurer si ce n'est le raccourci d'activation et la manière dont les buffers sont affichés.

``` vim
let g:bufExplorerDefaultHelp=0
let g:bufExplorerShowRelativePath=1
let g:bufExplorerFindActive=1
let g:bufExplorerSortBy='name'
map <leader>o :BufExplorer<cr>
```


Si votre touche leader est aussi <code>,</code> la liste des buffers s'affichera donc en exécutant <code>,o</code>.<br />
Une fois affichée, vous pouvez effectuer plusieurs opérations sur les buffers :

<ul>
<li><code>o</code> ou <code>enter</code> ouvre le buffer dans la fenêtre courante, ou, s'il est déjà affiché dans un autre onglet, vous place sur l'onglet où il est affiché.</li>
<li><code>t</code> affiche le buffer dans un nouvel onglet</li>
<li><code>d</code> supprime le buffer sous le curseur de la liste.</li>
<li><code>q</code> quitte BufExplorer</li>
</ul>


<h3><a id="plugin-ctrlp" href="#intro">CtrlP</a></h3>


Ce plugin gère très bien l'ouverture de fichier, pour peu que vous sachiez ce que vous cherchez.<br />
Il se base au choix sur les fichiers existant, les fichiers récemment utilisés, les buffers ouverts, ou les 3 à la fois.<br />
J'ai configuré la recherche de fichier pour qu'elle remonte au premier dossier parent contenant un .git ou .svn (avec la variable <code>working_path_mode</code>).

``` vim
let g:ctrlp_working_path_mode = 'ra'
let g:ctrlp_max_height = 20
let g:ctrlp_custom_ignore = 'node_modules\|^\.DS_Store\|^\.git\|^\.coffee'

map <leader>b :CtrlPBuffer<cr>
map <leader>m :CtrlPMRUFiles<cr>
map <leader>f :CtrlP<cr>
```

Cela active également les raccourcis suivant :

<ul>
<li><code>,b</code> : recherche dans les buffers.</li>
<li><code>,m</code> : recherche dans les fichiers récents.</li>
<li><code>,f</code> : recherche partout.</li>
</ul>


<h3><a id="plugin-ycm" href="#intro">YouCompleteMe</a></h3>
<h4>Installation</h4>

C'est le seul plugin pour lequel j'ai du investir plus de 5 minutes pour le faire marcher, et cela vaut le coup !<br />
En fait il marche sans rien toucher pour python, mais pour les langages "C-like" il faut compiler une partie du plugin basé sur la libclang pour qu'il fonctionne (le prix à payer pour ne pas avoir à créer des ctags).<br />
Étant donné que j'ai plusieurs version de clang déjà présentes sur ma machine je n'ai pas suivi la procédure "super-quick" d'installation, mais j'ai suivi le "Full Installation Guide" et n'ai pas rencontré de problèmes particuliers.

<h4>Utilisation</h4>

Comme je le précisais, YCM est opérationnel directement pour les langages autre que le C : il suffit d'appuyer sur <code>tab</code> après avoir commencé à taper un mot pour afficher la liste des suggestions (ou taper <code>ctrl-space</code> directement pour afficher les choix valides dans le contexte). Au delà des choix sémantiquement valides, il propose aussi la complétion sur les mots présent dans les buffers ouverts, ainsi que sur l'arborescence de votre système de fichiers.


Comme il est bien pratique de pouvoir accéder à la définition d'une fonction en un raccourci, j'ai mappé <code>,jd</code> sur la fonction correspondante de YCM :

``` vim
nnoremap <leader>jd :YcmCompleter GoToDefinitionElseDeclaration<CR>
```



Cela ajoute également une entrée dans la jump stack de Vim, vous pouvez donc utiliser <code>ctrl-o</code> pour revenir où vous étiez avant le saut, et <code>ctrl-i</code> pour retourner à la définition.


Mais bon pour être franc, ce qui m'intéressait dans YCM c'était essentiellement la partie sur les langages "C-like". Pour fonctionner, le plugin a besoin de savoir quels sont les flags de compilation à utiliser pour votre fichier courant : <b>ne vous attendez pas à ce que le plugin marche sans avoir correctement écrit ce fichier</b> !<br />
Comme indiqué dans le manuel utilisateur, YCM va remonter l'arborescence de fichier jusqu'à tomber sur un fichier python nommé <code>.ycm_extra_conf.py</code>, implémentant la fonction <code>FlagsForFile</code>, retournant une liste de flags à donner à clang pour qu'il compile votre fichier.<br />
Pour plus de simplicité j'ai choisi d'écrire un package python proposant cette fonction et retournant une liste vide, de manière à ce que pour chacun de mes projets, je n'ai qu'à importer ce package et appeler cette fonction après avoir défini les flags spécifiques.<br />
J'ai également ajouté un fichier à utiliser par défaut dans le cas où aucun fichier <code>.ycm_extra_conf.py</code> n'est trouvé, permettant de compiler un programme c99.


La spécification du fichier par défaut à utiliser ce fait grâce à la configuration suivante :

``` vim
let g:ycm_global_ycm_extra_conf = '~/.vim/ycm_default_global_conf.py'
```


Le contenu du fichier est le suivant :

``` python
import sys
import ycm_sys_conf as conf
from os.path import expanduser

homeDir = expanduser("~")

#Default for project is C files
conf.flags += ['-std=c99', '-x', 'c']
conf.flags += [
'-Wall',
'-Wextra',
'-I',
homeDir + '/local/include',
'-I',
'.',
]

FlagsForFile = conf.FlagsForFile
```


Cela spécifie quelques répertoires d'inclusion supplémentaires à prendre en compte, le standard à utiliser (c99) et définie un alias vers la fonction <code>FlagsForFile</code> du package conf.<br />
Pour chacun de mes projets je prends donc ce fichier comme modèle et l'ajoute sous le nom <code>.ycm_extra_conf.py</code> à la racine du projet, en changeant le langage et les flags le cas échéant.<br />
Le fichier <code>ycm_sys_conf.py</code> sur mon dépot de configuration <a target="_blank" href="https://github.com/viroulep/configFiles/blob/master/.i3/scripts/ycm_sys_conf.py">ici</a>.<br />
Je l'ai mis dans ce dossier car il est ajouté à mon pythonpath.


Une fois tout cela mis en place, c'est un vrai bonheur !<br />
J'avoue avoir déjà utilisé Eclipse pour mes projets en java, et le rendu dans Vim est très similaires : marques rouge/orange aux emplacements des erreurs/warnings, compilation à la volée dans le mode normal, affichage de la signature des méthodes pendant l'autocomplétion, etc...


J'ai néanmoins trouvé une limitation à ce plugin.<br />
Dans le cadre d'un projet de taille petite ou moyenne, la compilation et la complétion se feront de manière transparente (la libstdc++ ne fait pas peur à clang, il s'en sort très bien !).<br />
En revanche dans le cadre professionnel je travaille sur un compilateur source à source basé sur clang, et la plupart des fichiers incluent une bonne partie des headers de la libclang, ce qui engendre des unités de compilation bien trop grande pour que clang s'en sorte en moins de 0.5s...<br />
Clang utilise bien un système de cache pour éviter d'avoir à recompiler le fichier entier, mais il faut lui laisser un bon 4/5s à la première compilation/complétion pour qu'après cela se fluidifie. Il reste encore des moments où on sent qu'il a du mal, mais compte tenu de la taille globale du fichier c'est compréhensible.


<h2><a id="conclusion" href="#intro">Conclusion</a></h2>

"Et voilà !"<br />
Au niveau des plugins vous l'aurez compris, mon gros coup de cœur c'est YCM, qui change vraiment la vie !



Je n'ai bien sur pas présenté tout ce qu'il y avait dans mes fichiers de configuration, donc pour les détails ayant moins d'importance, vous pouvez jeter un œil aux fichier présents dans mon répertoire <a href="https://github.com/viroulep/configFiles/tree/master/.vim" target="_blank">.vim</a>, et aux différents vimrcs qu'il contient.

