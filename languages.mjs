import { StreamLanguage } from "@codemirror/language"
import { css } from "@codemirror/lang-css"
import { cpp } from "@codemirror/lang-cpp"
import { html } from "@codemirror/lang-html"
import { java } from "@codemirror/lang-java"
import { javascript } from "@codemirror/lang-javascript"
import { json } from "@codemirror/lang-json"
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { php } from "@codemirror/lang-php"
import { python } from "@codemirror/lang-python"
import { rust } from "@codemirror/lang-rust"
import { xml } from "@codemirror/lang-xml"

/*
asciidoc
orgmode?
*/

import { c } from "@codemirror/legacy-modes/mode/clike"
import { diff } from "@codemirror/legacy-modes/mode/diff"
import { less } from "@codemirror/legacy-modes/mode/css"
import { sass } from "@codemirror/legacy-modes/mode/sass"
import { nginx } from "@codemirror/legacy-modes/mode/nginx"
import { dockerFile } from "@codemirror/legacy-modes/mode/dockerfile"
import { go } from "@codemirror/legacy-modes/mode/go"
import { shell } from "@codemirror/legacy-modes/mode/shell"
import { standardSQL } from "@codemirror/legacy-modes/mode/sql"
import { yaml } from "@codemirror/legacy-modes/mode/yaml"


/*
import { apl } from "@codemirror/legacy-modes/mode/apl"
import { asciiArmor } from "@codemirror/legacy-modes/mode/asciiarmor"
import { asn1 } from "@codemirror/legacy-modes/mode/asn1"
import { asterisk } from "@codemirror/legacy-modes/mode/asterisk"
import { brainfuck } from "@codemirror/legacy-modes/mode/brainfuck"
import { clike, c, cpp, java, csharp, scala, kotlin, shader, nesC, objectiveC, objectiveCpp,
         squirrel, ceylon, dart } from "@codemirror/legacy-modes/mode/clike"
import { clojure } from "@codemirror/legacy-modes/mode/clojure"
import { cmake } from "@codemirror/legacy-modes/mode/cmake"
import { cobol } from "@codemirror/legacy-modes/mode/cobol"
import { coffeeScript } from "@codemirror/legacy-modes/mode/coffeescript"
import { commonLisp } from "@codemirror/legacy-modes/mode/commonlisp"
import { crystal } from "@codemirror/legacy-modes/mode/crystal"
//import { css, sCSS, less, gss } from "@codemirror/legacy-modes/mode/css"
import { cypher } from "@codemirror/legacy-modes/mode/cypher"
import { d } from "@codemirror/legacy-modes/mode/d"
import { dtd } from "@codemirror/legacy-modes/mode/dtd"
import { dylan } from "@codemirror/legacy-modes/mode/dylan"
import { ebnf } from "@codemirror/legacy-modes/mode/ebnf"
import { ecl } from "@codemirror/legacy-modes/mode/ecl"
import { eiffel } from "@codemirror/legacy-modes/mode/eiffel"
import { elm } from "@codemirror/legacy-modes/mode/elm"
import { erlang } from "@codemirror/legacy-modes/mode/erlang"
import { factor } from "@codemirror/legacy-modes/mode/factor"
import { fcl } from "@codemirror/legacy-modes/mode/fcl"
import { forth } from "@codemirror/legacy-modes/mode/forth"
import { fortran } from "@codemirror/legacy-modes/mode/fortran"
import { gas } from "@codemirror/legacy-modes/mode/gas"
import { gherkin } from "@codemirror/legacy-modes/mode/gherkin"
import { groovy } from "@codemirror/legacy-modes/mode/groovy"
import { haskell } from "@codemirror/legacy-modes/mode/haskell"
import { haxe, hxml } from "@codemirror/legacy-modes/mode/haxe"
import { http } from "@codemirror/legacy-modes/mode/http"
import { idl } from "@codemirror/legacy-modes/mode/idl"
import { jinja2 } from "@codemirror/legacy-modes/mode/jinja2"
import { julia } from "@codemirror/legacy-modes/mode/julia"
import { liveScript } from "@codemirror/legacy-modes/mode/livescript"
import { lua } from "@codemirror/legacy-modes/mode/lua"
import { mathematica } from "@codemirror/legacy-modes/mode/mathematica"
import { mirc } from "@codemirror/legacy-modes/mode/mirc"
import { oCaml, fSharp, sml } from "@codemirror/legacy-modes/mode/mllike"
import { modelica } from "@codemirror/legacy-modes/mode/modelica"
import { mscgen } from "@codemirror/legacy-modes/mode/mscgen"
import { mumps } from "@codemirror/legacy-modes/mode/mumps"
import { nsis } from "@codemirror/legacy-modes/mode/nsis"
import { ntriples } from "@codemirror/legacy-modes/mode/ntriples"
import { octave } from "@codemirror/legacy-modes/mode/octave"
//import { orgmode } from "@codemirror/legacy-modes/mode/orgmode"
import { oz } from "@codemirror/legacy-modes/mode/oz"
import { pascal } from "@codemirror/legacy-modes/mode/pascal"
import { pegjs } from "@codemirror/legacy-modes/mode/pegjs"
import { perl } from "@codemirror/legacy-modes/mode/perl"
//import { php } from "@codemirror/legacy-modes/mode/php // CM6"
import { pig } from "@codemirror/legacy-modes/mode/pig"
import { powerShell } from "@codemirror/legacy-modes/mode/powershell"
import { properties } from "@codemirror/legacy-modes/mode/properties"
import { protobuf } from "@codemirror/legacy-modes/mode/protobuf"
import { puppet } from "@codemirror/legacy-modes/mode/puppet"
import { q } from "@codemirror/legacy-modes/mode/q"
import { r } from "@codemirror/legacy-modes/mode/r"
import { rpmChanges, rpmSpec } from "@codemirror/legacy-modes/mode/rpm"
import { ruby } from "@codemirror/legacy-modes/mode/ruby"
import { scheme } from "@codemirror/legacy-modes/mode/scheme"
import { sieve } from "@codemirror/legacy-modes/mode/sieve"
import { smalltalk } from "@codemirror/legacy-modes/mode/smalltalk"
import { solr } from "@codemirror/legacy-modes/mode/solr"
import { sparql } from "@codemirror/legacy-modes/mode/sparql"
import { spreadsheet } from "@codemirror/legacy-modes/mode/spreadsheet"
import { stex } from "@codemirror/legacy-modes/mode/stex"
import { stylus } from "@codemirror/legacy-modes/mode/stylus"
import { swift } from "@codemirror/legacy-modes/mode/swift"
import { tcl } from "@codemirror/legacy-modes/mode/tcl"
import { textile } from "@codemirror/legacy-modes/mode/textile"
import { tiddlyWiki } from "@codemirror/legacy-modes/mode/tiddlywiki"
import { tiki } from "@codemirror/legacy-modes/mode/tiki"
import { toml } from "@codemirror/legacy-modes/mode/toml"
import { troff } from "@codemirror/legacy-modes/mode/troff"
import { ttcn } from "@codemirror/legacy-modes/mode/ttcn"
import { ttcnCfg } from "@codemirror/legacy-modes/mode/ttcn-cfg"
import { turtle } from "@codemirror/legacy-modes/mode/turtle"
import { vb } from "@codemirror/legacy-modes/mode/vb"
import { vbScript } from "@codemirror/legacy-modes/mode/vbscript"
import { velocity } from "@codemirror/legacy-modes/mode/velocity"
import { verilog } from "@codemirror/legacy-modes/mode/verilog"
import { vhdl } from "@codemirror/legacy-modes/mode/vhdl"
import { xQuery } from "@codemirror/legacy-modes/mode/xquery"
import { z80 } from "@codemirror/legacy-modes/mode/z80"
*/



const languages = [{
    extension: [],
    name: 'Text',
    id: 'text',
    ext: ['.txt', '']
  }, {
    extension: markdown({
        base: markdownLanguage,
        codeLanguages: (str) => {
            let res = languages.find((obj) => { return obj.id === str });
            if (!res) { return []; }
            return res.extension.language;
        }}),
    name: 'Markdown',
    id: 'gfm',
    ext: ['.md']
  }, {
    extension: javascript(),
    name: 'JavaScript',
    id: 'javascript',
    ext: ['.js']
  }, {
    extension: javascript({
        jsx: true,
        typescript: true
    }),
    name: 'TypeScript',
    id: 'typescript',
    ext: ['.ts']
  }, {
    extension: python(),
    name: 'Python',
    id: 'python',
    ext: ['.py']
  }, {
    extension: css(),
    name: 'CSS',
    id: 'css',
    ext: ['.css']
  }, {
    extension: cpp(),
    name: 'C++',
    id: 'cpp',
    ext: ['.cpp']
  }, {
    extension: html(),
    name: 'HTML',
    id: 'html',
    ext: ['.html']
  }, {
    extension: java(),
    name: 'Java',
    id: 'java',
    ext: ['.java']
  }, {
    extension: json(),
    name: 'JSON',
    id: 'json',
    ext: ['.json']
  }, {
    extension: php(),
    name: 'PHP',
    id: 'php',
    ext: ['.php']
  }, {
    extension: rust(),
    name: 'Rust',
    id: 'rust',
    ext: ['.rs']
  }, {
    extension: xml(),
    name: 'XML',
    id: 'xml',
    ext: ['.xml']
  },
];

// XXX add all official languages

const legacy = [
    {
        extension: [StreamLanguage.define(c)],
        name: 'C',
        id: 'c',
        ext: ['.c']
    },
    {
        extension: [StreamLanguage.define(diff)],
        name: 'Diff',
        id: 'diff',
        ext: ['.diff']
    },
    {
        extension: [StreamLanguage.define(dockerFile)],
        name: 'Dockerfile',
        id: 'dockerfile',
        ext: ['_']
    },
    {
        extension: [StreamLanguage.define(go)],
        name: 'Go',
        id: 'go',
        ext: ['.go']
    },
    {
        extension: [StreamLanguage.define(nginx)],
        name: 'Nginx',
        id: 'nginx',
        ext: ['.conf']
    },
    {
        extension: [StreamLanguage.define(less)],
        name: 'LESS',
        id: 'less',
        ext: ['.less']
    },
    {
        extension: [StreamLanguage.define(sass)],
        name: 'Sass',
        id: 'sass',
        ext: ['.sass']
    },
    {
        extension: [StreamLanguage.define(shell)],
        name: 'Shell',
        id: 'shell',
        ext: ['.sh']
    },
    {
        extension: [StreamLanguage.define(standardSQL)],
        name: 'SQL',
        id: 'sql',
        ext: ['.sql']
    },
    {
        extension: [StreamLanguage.define(yaml)],
        name: 'YAML',
        id: 'yaml',
        ext: ['.yaml']
    }
];

/*
const legacy = [{
            extension: [StreamLanguage.define(apl)],
            name: 'APL',
            id: 'apl',
            ext: ['.apl']
        },
        {
            extension: [StreamLanguage.define(asciiArmor)],
            name: 'ASCII-Armor',
            id: 'asciiarmor',
            ext: ['.asc']
        },
        {
            extension: [StreamLanguage.define(asn1)],
            name: 'ASN.1',
            id: 'asn.1',
            ext: ['.asn1']
        },
        {
            extension: [StreamLanguage.define(asterisk)],
            name: 'Asterisk',
            id: 'asterisk',
            ext: ['undefined']
        },
        {
            extension: [StreamLanguage.define(brainfuck)],
            name: 'Brainfuck',
            id: 'brainfuck',
            ext: ['.b']
        },
        {
            extension: [StreamLanguage.define(clike)],
            name: 'C-like',
            id: 'clike',
            ext: ['.c']
        },
        {
            extension: [StreamLanguage.define(clojure)],
            name: 'Clojure',
            id: 'clojure',
            ext: ['.clj']
        },
        {
            extension: [StreamLanguage.define(cmake)],
            name: 'CMake',
            id: 'cmake',
            ext: ['_']
        },
        {
            extension: [StreamLanguage.define(cobol)],
            name: 'COBOL',
            id: 'cobol',
            ext: ['.cbl']
        },
        {
            extension: [StreamLanguage.define(coffeeScript)],
            name: 'CoffeeScript',
            id: 'coffeescript',
            ext: ['.coffee']
        },
        {
            extension: [StreamLanguage.define(commonLisp)],
            name: 'Common_Lisp',
            id: 'commonlisp',
            ext: ['.lisp']
        },
        {
            extension: [StreamLanguage.define(crystal)],
            name: 'Crystal',
            id: 'crystal',
            ext: ['.cr']
        },
        {
            extension: [StreamLanguage.define(cypher)],
            name: 'Cypher',
            id: 'cypher',
            ext: ['.cypher']
        },
        {
            extension: [StreamLanguage.define(d)],
            name: 'D',
            id: 'd',
            ext: ['.d']
        },
        {
            extension: [StreamLanguage.define(dart)],
            name: 'Dart',
            id: 'dart',
            ext: ['.dart']
        },
                {
            extension: [StreamLanguage.define(dtd)],
            name: 'DTD',
            id: 'dtd',
            ext: ['.dtd']
        },
        {
            extension: [StreamLanguage.define(dylan)],
            name: 'Dylan',
            id: 'dylan',
            ext: ['.dylan']
        },
        {
            extension: [StreamLanguage.define(ebnf)],
            name: 'EBNF',
            id: 'ebnf',
            ext: ['.ebnf']
        },
        {
            extension: [StreamLanguage.define(ecl)],
            name: 'ECL',
            id: 'ecl',
            ext: ['.ecl']
        },
        {
            extension: [StreamLanguage.define(eiffel)],
            name: 'Eiffel',
            id: 'eiffel',
            ext: ['.e']
        },
        {
            extension: [StreamLanguage.define(elm)],
            name: 'Elm',
            id: 'elm',
            ext: ['.elm']
        },
        {
            extension: [StreamLanguage.define(erlang)],
            name: 'Erlang',
            id: 'erlang',
            ext: ['.erl']
        },
        {
            extension: [StreamLanguage.define(factor)],
            name: 'Factor',
            id: 'factor',
            ext: ['.factor']
        },
        {
            extension: [StreamLanguage.define(fcl)],
            name: 'FCL',
            id: 'fcl',
            ext: ['.fcl']
        },
        {
            extension: [StreamLanguage.define(forth)],
            name: 'Forth',
            id: 'forth',
            ext: ['.fs']
        },
        {
            extension: [StreamLanguage.define(fortran)],
            name: 'Fortran',
            id: 'fortran',
            ext: ['.f90']
        },
        {
            extension: [StreamLanguage.define(gas)],
            name: 'GAS',
            id: 'gas',
            ext: ['.gas']
        },
        {
            extension: [StreamLanguage.define(gherkin)],
            name: 'Gherkin',
            id: 'gherkin',
            ext: ['.feature']
        },
        {
            extension: [StreamLanguage.define(groovy)],
            name: 'Groovy',
            id: 'groovy',
            ext: ['.groovy']
        },
        {
            extension: [StreamLanguage.define(haskell)],
            name: 'Haskell',
            id: 'haskell',
            ext: ['.hs']
        },
        {
            extension: [StreamLanguage.define(haxe)],
            name: 'Haxe',
            id: 'haxe',
            ext: ['.hx']
        },
        {
            extension: [StreamLanguage.define(http)],
            name: 'HTTP',
            id: 'http',
            ext: ['_']
        },
        {
            extension: [StreamLanguage.define(idl)],
            name: 'IDL',
            id: 'idl',
            ext: ['.idl']
        },
        {
            extension: [StreamLanguage.define(java)],
            name: 'Java',
            id: 'java',
            ext: ['.java']
        },
        {
            extension: [StreamLanguage.define(jinja2)],
            name: 'Jinja2',
            id: 'jinja2',
            ext: ['.j2']
        },
        {
            extension: [StreamLanguage.define(julia)],
            name: 'Julia',
            id: 'julia',
            ext: ['.jl']
        },
        {
            extension: [StreamLanguage.define(liveScript)],
            name: 'LiveScript',
            id: 'livescript',
            ext: ['.ls']
        },
        {
            extension: [StreamLanguage.define(lua)],
            name: 'Lua',
            id: 'lua',
            ext: ['.lua']
        },
        {
            extension: [StreamLanguage.define(mathematica)],
            name: 'Mathematica',
            id: 'mathematica',
            ext: ['.nb']
        },
        {
            extension: [StreamLanguage.define(mirc)],
            name: 'mIRC',
            id: 'mirc',
            ext: ['.irc']
        },
        {
            extension: [StreamLanguage.define(oCaml)],
            name: 'ML',
            id: 'mllike',
            ext: ['_']
        },
        {
            extension: [StreamLanguage.define(modelica)],
            name: 'Modelica',
            id: 'modelica',
            ext: ['.mo']
        },
        {
            extension: [StreamLanguage.define(mscgen)],
            name: 'MscGen',
            id: 'mscgen',
            ext: ['.mscgen']
        },
        {
            extension: [StreamLanguage.define(mumps)],
            name: 'MUMPS',
            id: 'mumps',
            ext: ['.m']
        },
        {
            extension: [StreamLanguage.define(nsis)],
            name: 'NSIS',
            id: 'nsis',
            ext: ['.nsi']
        },
        {
            extension: [StreamLanguage.define(ntriples)],
            name: 'N-Triples',
            id: 'ntriples',
            ext: ['.nq']
        },
        {
            extension: [StreamLanguage.define(objectiveC)],
            name: 'Objective-C',
            id: 'objectivec',
            ext: ['.m']
        },
        {
            extension: [StreamLanguage.define(objectiveCpp)],
            name: 'Objective-CPP',
            id: 'objectivecpp',
            ext: ['.mm']
        },
        {
            extension: [StreamLanguage.define(octave)],
            name: 'Octave',
            id: 'octave',
            ext: ['.m']
        },
        {
            extension: [StreamLanguage.define(oz)],
            name: 'Oz',
            id: 'oz',
            ext: ['.oz']
        },
        {
            extension: [StreamLanguage.define(pascal)],
            name: 'Pascal',
            id: 'pascal',
            ext: ['.pas']
        },
        {
            extension: [StreamLanguage.define(pegjs)],
            name: 'PEG.js',
            id: 'pegjs',
            ext: ['.pegjs']
        },
        {
            extension: [StreamLanguage.define(perl)],
            name: 'Perl',
            id: 'perl',
            ext: ['.pl']
        },
        {
            extension: [StreamLanguage.define(pig)],
            name: 'Pig',
            id: 'pig',
            ext: ['.pig']
        },
        {
            extension: [StreamLanguage.define(powerShell)],
            name: 'PowerShell',
            id: 'powershell',
            ext: ['.ps1']
        },
        {
            extension: [StreamLanguage.define(properties)],
            name: 'Properties',
            id: 'properties',
            ext: ['.properties']
        },
        {
            extension: [StreamLanguage.define(protobuf)],
            name: 'Protocol_Buffers',
            id: 'protobuf',
            ext: ['.proto']
        },
        {
            extension: [StreamLanguage.define(puppet)],
            name: 'Puppet',
            id: 'puppet',
            ext: ['.pp']
        },
        {
            extension: [StreamLanguage.define(q)],
            name: 'Q',
            id: 'q',
            ext: ['.q']
        },
        {
            extension: [StreamLanguage.define(r)],
            name: 'R',
            id: 'r',
            ext: ['.r']
        },
        {
            extension: [StreamLanguage.define(rpmChanges), StreamLanguage.define(rpmSpec)],
            name: 'RPM',
            id: 'rpm',
            ext: ['.rpm']
        },
        {
            extension: [StreamLanguage.define(ruby)],
            name: 'Ruby',
            id: 'ruby',
            ext: ['.rb']
        },
        {
            extension: [StreamLanguage.define(scheme)],
            name: 'Scheme',
            id: 'scheme',
            ext: ['.scm']
        },
        {
            extension: [StreamLanguage.define(sieve)],
            name: 'Sieve',
            id: 'sieve',
            ext: ['.sieve']
        },
        {
            extension: [StreamLanguage.define(smalltalk)],
            name: 'Smalltalk',
            id: 'smalltalk',
            ext: ['_']
        },
        {
            extension: [StreamLanguage.define(solr)],
            name: 'Solr',
            id: 'solr',
            ext: ['_']
        },
        {
            extension: [StreamLanguage.define(sparql)],
            name: 'SPARQL',
            id: 'sparql',
            ext: ['.rq']
        },
        {
            extension: [StreamLanguage.define(spreadsheet)],
            name: 'Spreadsheet',
            id: 'spreadsheet',
            ext: ['.xls']
        },
        {
            extension: [StreamLanguage.define(stex)],
            name: 'sTeX',
            id: 'stex',
            ext: ['.stex']
        },
        {
            extension: [StreamLanguage.define(stylus)],
            name: 'Stylus',
            id: 'stylus',
            ext: ['.styl']
        },
        {
            extension: [StreamLanguage.define(swift)],
            name: 'Swift',
            id: 'swift',
            ext: ['.swift']
        },
        {
            extension: [StreamLanguage.define(tcl)],
            name: 'Tcl',
            id: 'tcl',
            ext: ['.tcl']
        },
        {
            extension: [StreamLanguage.define(textile)],
            name: 'Textile',
            id: 'textile',
            ext: ['.textile']
        },
        {
            extension: [StreamLanguage.define(tiddlyWiki)],
            name: 'TiddlyWiki',
            id: 'tiddlywiki',
            ext: ['.tw']
        },
        {
            extension: [StreamLanguage.define(tiki)],
            name: 'Tiki',
            id: 'tiki',
            ext: ['_']
        },
        {
            extension: [StreamLanguage.define(toml)],
            name: 'TOML',
            id: 'toml',
            ext: ['.toml']
        },
        {
            extension: [StreamLanguage.define(troff)],
            name: 'troff',
            id: 'troff',
            ext: ['.troff']
        },
        {
            extension: [StreamLanguage.define(ttcn)],
            name: 'TTCN',
            id: 'ttcn',
            ext: ['undefined']
        },
        {
            extension: [StreamLanguage.define(ttcnCfg)],
            name: 'TTCN-cfg',
            id: 'ttcn-cfg',
            ext: ['undefined']
        },
        {
            extension: [StreamLanguage.define(turtle)],
            name: 'Turtle',
            id: 'turtle',
            ext: ['.ttl']
        },
        {
            extension: [StreamLanguage.define(vb)],
            name: 'Visual_Basic',
            id: 'vb',
            ext: ['.vb']
        },
        {
            extension: [StreamLanguage.define(vbScript)],
            name: 'VBScript',
            id: 'vbscript',
            ext: ['.vbs']
        },
        {
            extension: [StreamLanguage.define(velocity)],
            name: 'Velocity',
            id: 'velocity',
            ext: ['.vm']
        },
        {
            extension: [StreamLanguage.define(verilog)],
            name: 'Verilog',
            id: 'verilog',
            ext: ['.v']
        },
        {
            extension: [StreamLanguage.define(vhdl)],
            name: 'VHDL',
            id: 'vhdl',
            ext: ['.vhdl']
        },
        {
            extension: [StreamLanguage.define(xQuery)],
            name: 'XQuery',
            id: 'xquery',
            ext: ['.xquery']
        },
        {
            extension: [StreamLanguage.define(z80)],
            name: 'Z80',
            id: 'z80',
            ext: ['.z80']
        },
]
*/

Array.prototype.push.apply(languages, legacy);

export { languages }
