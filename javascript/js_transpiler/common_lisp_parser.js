/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var common_lisp_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[1,10],$V2=[1,7],$V3=[1,9],$V4=[1,21],$V5=[1,19],$V6=[1,20],$V7=[1,15],$V8=[1,18],$V9=[1,16],$Va=[1,17],$Vb=[1,14],$Vc=[5,8,10,12,35,37],$Vd=[1,24],$Ve=[8,10,12,35,37],$Vf=[10,12];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"statements_":4,"EOF":5,"statement":6,"statements":7,"(":8,"defun":9,"IDENTIFIER":10,"parameters":11,")":12,"e":13,"operator":14,"not":15,"or":16,"and":17,">=":18,">":19,"<=":20,"<":21,"*":22,"/":23,"+":24,"-":25,"equal_exprs":26,"times_exprs":27,"divide_exprs":28,"plus_exprs":29,"minus_exprs":30,"and_exprs":31,"or_exprs":32,"=":33,"function_call":34,"NUMBER":35,"var_name":36,"STRING_LITERAL":37,"parameter":38,"exprs":39,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"(",9:"defun",10:"IDENTIFIER",12:")",15:"not",16:"or",17:"and",18:">=",19:">",20:"<=",21:"<",22:"*",23:"/",24:"+",25:"-",33:"=",35:"NUMBER",37:"STRING_LITERAL"},
productions_: [0,[3,2],[4,2],[4,1],[7,1],[6,8],[6,1],[14,0],[14,1],[14,1],[14,1],[14,1],[14,1],[14,1],[14,1],[14,1],[14,1],[14,1],[14,1],[26,2],[26,1],[27,2],[27,1],[28,2],[28,1],[29,2],[29,1],[30,2],[30,1],[31,2],[31,1],[32,2],[32,1],[13,5],[13,5],[13,5],[13,5],[13,5],[13,5],[13,5],[13,1],[13,1],[13,1],[13,1],[38,1],[11,2],[11,1],[34,3],[34,4],[36,1],[39,2],[39,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return ["top_level_statements",$$[$0-1]]
break;
case 2:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 3: case 46:
this.$ =
 [$$[$0]];
break;
case 4:
this.$ = ["top_level_statements",$$[$0]]
break;
case 5:
this.$ = ["function","public","Object",$$[$0-5],$$[$0-3],$$[$0-1]]
break;
case 6:
this.$=["statements",[["semicolon",["return",$$[$0]]]]];
break;
case 8:
this.$ = "!"
break;
case 9:
this.$ = "logic_or";
break;
case 10:
this.$ = "logic_and";
break;
case 19:
this.$ = ["logic_equals",$$[$0-1],$$[$0]]
break;
case 21:
this.$ = ["*",$$[$0-1],$$[$0]]
break;
case 23:
this.$ = ["/",$$[$0-1],$$[$0]]
break;
case 25:
this.$ = ["+",$$[$0-1],$$[$0]]
break;
case 27:
this.$ = ["-",$$[$0-1],$$[$0]]
break;
case 29:
this.$ = ["logic_and",$$[$0-1],$$[$0]]
break;
case 31:
this.$ = ["logic_or",$$[$0-1],$$[$0]]
break;
case 33: case 34: case 35: case 36: case 37:
this.$ = [$$[$0-3],$$[$0-2],$$[$0-1]];
break;
case 38:
this.$ = ["logic_or",$$[$0-2],$$[$0-1]];
break;
case 39:
this.$ = ["logic_and",$$[$0-2],$$[$0-1]];
break;
case 41: case 42: case 43:
this.$ = yytext;
break;
case 44:
this.$ = ["Object", $$[$0]];
break;
case 45: case 50:
this.$ = $$[$0-1].concat([$$[$0]]);
break;
case 47:
this.$ = ["function_call",$$[$0-1],[]];
break;
case 48:
this.$ = ["function_call",$$[$0-2],$$[$0-1]];
break;
case 51:
this.$ = [$$[$0]];
break;
}
},
table: [{3:1,4:2,6:3,8:$V0,10:$V1,13:5,34:6,35:$V2,36:8,37:$V3},{1:[3]},{5:[1,11]},{4:12,5:[2,3],6:3,8:$V0,10:$V1,13:5,34:6,35:$V2,36:8,37:$V3},{9:[1,13],10:$V4,16:$V5,17:$V6,22:$V7,23:$V8,24:$V9,25:$Va,33:$Vb},o($Vc,[2,6]),o($Vc,[2,40]),o($Vc,[2,41]),o($Vc,[2,42]),o($Vc,[2,43]),o($Vc,[2,49]),{1:[2,1]},{5:[2,2]},{10:[1,22]},{8:$Vd,10:$V1,13:23,34:6,35:$V2,36:8,37:$V3},{8:$Vd,10:$V1,13:25,34:6,35:$V2,36:8,37:$V3},{8:$Vd,10:$V1,13:26,34:6,35:$V2,36:8,37:$V3},{8:$Vd,10:$V1,13:27,34:6,35:$V2,36:8,37:$V3},{8:$Vd,10:$V1,13:28,34:6,35:$V2,36:8,37:$V3},{8:$Vd,10:$V1,13:29,34:6,35:$V2,36:8,37:$V3},{8:$Vd,10:$V1,13:30,34:6,35:$V2,36:8,37:$V3},{8:$Vd,10:$V1,12:[1,31],13:33,34:6,35:$V2,36:8,37:$V3,39:32},{8:[1,34]},{8:$Vd,10:$V1,13:36,26:35,34:6,35:$V2,36:8,37:$V3},{10:$V4,16:$V5,17:$V6,22:$V7,23:$V8,24:$V9,25:$Va,33:$Vb},{8:$Vd,10:$V1,13:38,27:37,34:6,35:$V2,36:8,37:$V3},{8:$Vd,10:$V1,13:40,29:39,34:6,35:$V2,36:8,37:$V3},{8:$Vd,10:$V1,13:42,30:41,34:6,35:$V2,36:8,37:$V3},{8:$Vd,10:$V1,13:44,28:43,34:6,35:$V2,36:8,37:$V3},{8:$Vd,10:$V1,13:46,32:45,34:6,35:$V2,36:8,37:$V3},{8:$Vd,10:$V1,13:48,31:47,34:6,35:$V2,36:8,37:$V3},o($Vc,[2,47]),{8:$Vd,10:$V1,12:[1,49],13:50,34:6,35:$V2,36:8,37:$V3},o($Ve,[2,51]),{10:$V1,11:51,36:53,38:52},{8:$Vd,10:$V1,12:[1,54],13:55,34:6,35:$V2,36:8,37:$V3},o($Ve,[2,20]),{8:$Vd,10:$V1,12:[1,56],13:57,34:6,35:$V2,36:8,37:$V3},o($Ve,[2,22]),{8:$Vd,10:$V1,12:[1,58],13:59,34:6,35:$V2,36:8,37:$V3},o($Ve,[2,26]),{8:$Vd,10:$V1,12:[1,60],13:61,34:6,35:$V2,36:8,37:$V3},o($Ve,[2,28]),{8:$Vd,10:$V1,12:[1,62],13:63,34:6,35:$V2,36:8,37:$V3},o($Ve,[2,24]),{8:$Vd,10:$V1,12:[1,64],13:65,34:6,35:$V2,36:8,37:$V3},o($Ve,[2,32]),{8:$Vd,10:$V1,12:[1,66],13:67,34:6,35:$V2,36:8,37:$V3},o($Ve,[2,30]),o($Vc,[2,48]),o($Ve,[2,50]),{10:$V1,12:[1,68],36:53,38:69},o($Vf,[2,46]),o($Vf,[2,44]),o($Vc,[2,33]),o($Ve,[2,19]),o($Vc,[2,34]),o($Ve,[2,21]),o($Vc,[2,35]),o($Ve,[2,25]),o($Vc,[2,36]),o($Ve,[2,27]),o($Vc,[2,37]),o($Ve,[2,23]),o($Vc,[2,38]),o($Ve,[2,31]),o($Vc,[2,39]),o($Ve,[2,29]),{6:70,8:$V0,10:$V1,13:5,34:6,35:$V2,36:8,37:$V3},o($Vf,[2,45]),{12:[1,71]},o($Vc,[2,5])],
defaultActions: {11:[2,1],12:[2,2]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace and line comments */
break;
case 1:return 35
break;
case 2:return 37
break;
case 3:return 9
break;
case 4:return 15
break;
case 5:return 17
break;
case 6:return '?'
break;
case 7:return 18
break;
case 8:return 19
break;
case 9:return 20
break;
case 10:return 21
break;
case 11:return '=>'
break;
case 12:return '=='
break;
case 13:return 33
break;
case 14:return '*='
break;
case 15:return 22
break;
case 16:return '/='
break;
case 17:return 23
break;
case 18:return '-='
break;
case 19:return '--'
break;
case 20:return 25
break;
case 21:return '++'
break;
case 22:return '+='
break;
case 23:return 24
break;
case 24:return '^'
break;
case 25:return '{'
break;
case 26:return '}'
break;
case 27:return '['
break;
case 28:return ']'
break;
case 29:return 8
break;
case 30:return 12
break;
case 31:return 10
break;
case 32:return 5
break;
case 33:return 'INVALID'
break;
}
},
rules: [/^(?:(\s+|;+.*\n))/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:defun\b)/,/^(?:not\b)/,/^(?:and\b)/,/^(?:\?)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<)/,/^(?:=>)/,/^(?:==)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\/=)/,/^(?:\/)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = common_lisp_parser;
exports.Parser = common_lisp_parser.Parser;
exports.parse = function () { return common_lisp_parser.parse.apply(common_lisp_parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}