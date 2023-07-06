ace.define("ace/mode/smali_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (require, exports, module) {
  "use strict";

  let oop = ace.require("ace/lib/oop");
  let TextHighlightRules = ace.require("ace/mode/text_highlight_rules").TextHighlightRules;

  function SmaliHighlightRules() {
    this.$rules = {
      start: [{
        include: "#annotation"
      }, {
        include: "#annotation-end"
      }, {
        include: "#annotation-value_list"
      }, {
        include: "#annotation-value"
      }, {
        include: "#annotation-name"
      }, {
        include: "#annotation-access"
      }, {
        include: "#comment-alone"
      }, {
        include: "#comment-inline"
      }, {
        include: "#field"
      }, {
        include: "#field-end"
      }, {
        token: [
          "text",
          "constant.language.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "entity.name.tag.smali",
          "string.quoted.double.smali",
          "entity.name.tag.smali"
        ],
        regex: /^([\s\t]*)(\.class)([\s\t]*)((?:(?:interface|public|protected|private|abstract|static|final|synchronized|transient|volatile|native|strictfp|synthetic|enum|annotation)[\s\t]+)*)([\s\t]*)(L)([\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*)(;)(?=[\s\t]*(?:#.*)?$)/,
        comment: "Class name"
      }, {
        token: [
          "text",
          "constant.language.smali",
          "text",
          "entity.name.tag.smali",
          "string.quoted.double.smali",
          "entity.name.tag.smali"
        ],
        regex: /^([\s\t]*)(\.(?:super|implements))([\s\t]+)(L)([\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*)(;)(?=[\s\t]*(?:#.*)?$)/,
        comment: "Super / implements class name"
      }, {
        token: [
          "text",
          "constant.language.smali",
          "text",
          "entity.name.tag.smali",
          "string.quoted.double.smali",
          "entity.name.tag.smali"
        ],
        regex: /^([\s\t]*)(\.source)([\s\t]+)(")(.*?)(")(?=[\s\t]*(?:#.*)?$)(?=[\s\t]*(?:#.*)?$)/,
        comment: "Source file"
      }, {
        token: [
          "text",
          "constant.language.smali",
          "text",
          "variable.parameter.smali",
          "variable.parameter.smali",
          "entity.name.function.smali",
          "text",
          "constant.numeric.smali",
          "text",
          "constant.numeric.smali",
          "text",
          "constant.numeric.smali",
          "text",
          "entity.name.tag.smali",
          "constant.numeric.smali",
          "entity.name.tag.smali",
          "text",
          "constant.numeric.smali"
        ],
        regex: /^([\s\t]*)(\.method)([\s\t]*)((?:(?:bridge|varargs|declared-synchronized|public|protected|private|abstract|static|final|synchronized|transient|volatile|native|strictfp|synthetic|enum)[\s\t]+)*)((?:constructor )?)(<init>|<clinit>|[\$\w_\-][\w\d_\$]*)(\()((?:[\[]*(?:Z|B|S|C|I|J|F|D|L[\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*;))*)(\))(?:(V)|([\[]*)(Z|B|S|C|I|J|F|D)|([\[]*)(L)([\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*)(;))([\s\t]*)((?:#.*)?)$/,
        push: [{
          token: ["text", "constant.language.smali"],
          regex: /^([\s\t]*)(\.end method)(?=[\s\t]*(?:#.*)?$)/,
          next: "pop"
        }, {
          include: "#comment-inline"
        }, {
          token: "constant.language.smali",
          regex: /^[\s\t]*\.prologue(?=[\s\t]*(?:#.*)?$)/,
          comment: "Prologue"
        }, {
          token: [
            "text",
            "constant.language.smali",
            "text",
            "variable.parameter.smali",
            "text",
            "string.interpolated.smali",
            "text",
            "constant.numeric.smali",
            "entity.name.tag.smali",
            "constant.numeric.smali",
            "entity.name.tag.smali",
            "text",
            "entity.name.tag.smali",
            "string.interpolated.smali",
            "entity.name.tag.smali",
            "text",
            "entity.name.tag.smali",
            "string.interpolated.smali",
            "entity.name.tag.smali"
          ],
          regex: /^([\s\t]*)(\.local)([\s\t]+)([vp]\d+)(,[\s\t]+)("[\w_\$][\w\$]*")(:[\[]*)(?:(Z|B|S|C|I|J|F|D)|(L)([\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*)(;))(?:(,)(")(.*?)("))?(?:(,[\s\t]*)(")(.*?)("))?(?=[\s\t]*(?:#.*)?$)/,
          comment: "Local"
        }, {
          token: [
            "text",
            "constant.language.smali",
            "text",
            "entity.name.tag.smali",
            "constant.numeric.smali",
            "entity.name.tag.smali",
            "text",
            "keyword.control.smali",
            "text",
            "keyword.control.smali",
            "text",
            "keyword.control.smali"
          ],
          regex: /^([\s\t]*)(\.catch)([\s\t]+)(L)([\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*)(;)([\s\t]+{)(:[A-Za-z_\d]+)([\s\t]+\.\.[\s\t]+)(:[A-Za-z_\d]+)(}[\s\t]+)(:[A-Za-z_\d]+)(?=[\s\t]*(?:#.*)?$)/,
          comment: "Catch exceptions"
        }, {
          token: [
            "text",
            "constant.language.smali",
            "text",
            "keyword.control.smali",
            "text",
            "keyword.control.smali",
            "text",
            "keyword.control.smali"
          ],
          regex: /^([\s\t]*)(\.catchall)([\s\t]+{)(:[A-Za-z_\d]+)([\s\t]+\.\.[\s\t]+)(:[A-Za-z_\d]+)(}[\s\t]+)(:[A-Za-z_\d]+)(?=[\s\t]*(?:#.*)?$)/,
          comment: "Gotta catch 'em all!"
        }, {
          token: "constant.language.smali",
          regex: /^[\s\t]*\.(?:end|restart)[\s\t]+local[\s\t]+[vp]\d+(?=[\s\t]*(?:#.*)?$)/,
          comment: "End / Restart Local"
        }, {
          token: ["text", "constant.language.smali"],
          regex: /^([\s\t]*)(\.sparse-switch)(?=[\s\t]*(?:#.*)?$)/,
          push: [{
            token: ["text", "constant.language.smali"],
            regex: /^([\s\t]*)(\.end sparse-switch)(?=[\s\t]*(?:#.*)?$)/,
            next: "pop"
          }, {
            include: "#comment-inline"
          }, {
            token: [
              "text",
              "variable.parameter.smali",
              "text",
              "keyword.control.smali"
            ],
            regex: /^([\s\t]*)(-?0x(?:0|[1-9a-f][\da-f]*))([\s\t]+->[\s\t]+)(:[A-Za-z_\d]+)(?=[\s\t]*(?:#.*)?$)/,
            caseInsensitive: true
          }],
          comment: "Sparse Switch"
        }, {
          token: [
            "text",
            "constant.language.smali",
            "text",
            "variable.parameter.smali"
          ],
          regex: /^([\s\t]*)(\.packed-switch)([\s\t]+)(-0x1|0x(?:0|[1-9a-f][\da-f]*))(?=[\s\t]*(?:#.*)?$)/,
          caseInsensitive: true,
          comment: "Begin Packed Switch, no idea what literal limit is for these. Have seen up to 0x7f090005"
        }, {
          token: "constant.language.smali",
          regex: /^[\s\t]*\.end packed-switch(?=[\s\t]*(?:#.*)?$)/,
          comment: "End Packed Switch"
        }, {
          token: [
            "text",
            "constant.language.smali",
            "text",
            "variable.parameter.smali"
          ],
          regex: /^([\s\t]*)(\.array-data)([\s\t]+)(1|2|4|8)(?=[\s\t]*(?:#.*)?$)/,
          push: [{
            token: ["text", "constant.language.smali"],
            regex: /^([\s\t]*)(\.end array-data)(?=[\s\t]*(?:#.*)?$)/,
            next: "pop"
          }, {
            include: "#comment-inline"
          }, {
            token: ["text", "variable.parameter.smali"],
            regex: /^([\s\t]*)((?:-0x(?:0|[1-9a-f][\da-f]{0,6}|[1-7][\da-f]{7}|8[0]{7})|0x(?:0|[1-9a-f][\da-f]{0,6}|[1-7][\da-f]{7}))[st]?|(?:-0x(?:0|[1-9a-f][\da-f]{0,14}|[1-7][\da-f]{15}|8[0]{15})|0x(?:0|[1-9a-f][\da-f]{0,14}|[1-7][\da-f]{15}))L)\b(?=[\s\t]*(?:#.*)?$)/,
            caseInsensitive: true
          }],
          comment: "Array data"
        }, {
          include: "#field"
        }, {
          include: "#field-end"
        }, {
          include: "#annotation"
        }, {
          include: "#annotation-end"
        }, {
          include: "#annotation-value_list"
        }, {
          include: "#annotation-value"
        }, {
          include: "#annotation-name"
        }, {
          include: "#annotation-access"
        }, {
          include: "#comment-alone"
        }, {
          include: "#directive-method-line"
        }, {
          include: "#directive-method-registers_locals"
        }, {
          include: "#directive-method-label"
        }, {
          include: "#directive-method-parameter"
        }, {
          include: "#directive-method-parameter-end"
        }, {
          include: "#directives-method-relaxed"
        }, {
          include: "#opcode-format-10x"
        }, {
          include: "#opcode-format-10x-relaxed"
        }, {
          include: "#opcode-format-11n"
        }, {
          include: "#opcode-format-11n-relaxed"
        }, {
          include: "#opcode-format-11x"
        }, {
          include: "#opcode-format-11x-relaxed"
        }, {
          include: "#opcode-format-22x"
        }, {
          include: "#opcode-format-22x-relaxed"
        }, {
          include: "#opcode-format-32x"
        }, {
          include: "#opcode-format-32x-relaxed"
        }, {
          include: "#opcode-format-12x"
        }, {
          include: "#opcode-format-12x-relaxed"
        }, {
          include: "#opcode-format-21c-string"
        }, {
          include: "#opcode-format-21c-type"
        }, {
          include: "#opcode-format-21c-field"
        }, {
          include: "#opcode-format-21c-relaxed"
        }, {
          include: "#opcode-format-21h"
        }, {
          include: "#opcode-format-21h-relaxed"
        }, {
          include: "#opcode-format-21s"
        }, {
          include: "#opcode-format-21s-relaxed"
        }, {
          include: "#opcode-format-21t"
        }, {
          include: "#opcode-format-21t-relaxed"
        }, {
          include: "#opcode-format-31t"
        }, {
          include: "#opcode-format-31t-relaxed"
        }, {
          include: "#opcode-format-22b"
        }, {
          include: "#opcode-format-22b-relaxed"
        }, {
          include: "#opcode-format-22c-type"
        }, {
          include: "#opcode-format-22c-type_array"
        }, {
          include: "#opcode-format-22c-field"
        }, {
          include: "#opcode-format-22c-relaxed"
        }, {
          include: "#opcode-format-22s"
        }, {
          include: "#opcode-format-22s-relaxed"
        }, {
          include: "#opcode-format-22t"
        }, {
          include: "#opcode-format-22t-relaxed"
        }, {
          include: "#opcode-format-23x"
        }, {
          include: "#opcode-format-23x-relaxed"
        }, {
          include: "#opcode-format-3rc-type"
        }, {
          include: "#opcode-format-3rc-meth"
        }, {
          include: "#opcode-format-3rc-relaxed"
        }, {
          include: "#opcode-format-35c-type"
        }, {
          include: "#opcode-format-35c-meth"
        }, {
          include: "#opcode-format-35c-relaxed"
        }, {
          include: "#opcode-format-51l"
        }, {
          include: "#opcode-format-51l-relaxed"
        }, {
          include: "#opcode-format-31i"
        }, {
          include: "#opcode-format-31i-relaxed"
        }, {
          include: "#opcode-format-10t-20t-30t"
        }, {
          include: "#opcode-format-10t-20t-30t-relaxed"
        }],
        comment: "Method signature and body"
      }, {
        token: ["text", "invalid.illegal.smali"],
        regex: /^([\s\t]*)(\.(?:class|super|implements|method|(?:end )?(?:method|annotation|field)))/,
        comment: "Method directives - relaxed"
      }],
      "#field": [{
        token: [
          "text",
          "constant.language.smali",
          "text",
          "variable.parameter.smali",
          "string.interpolated.smali",
          "text",
          "constant.numeric.smali",
          "entity.name.tag.smali",
          "constant.numeric.smali",
          "entity.name.tag.smali",
          "text",
          "constant.language.smali",
          "constant.numeric.smali",
          "constant.numeric.smali",
          "entity.name.tag.smali",
          "string.quoted.double.smali",
          "entity.name.tag.smali"
        ],
        regex: /^([\s\t]*)(\.field)([\s\t]+)((?:(?:bridge|varargs|declared-synchronized|public|protected|private|abstract|static|final|synchronized|transient|volatile|native|strictfp|synthetic|enum)[\s\t]+)*)([\w_\$\-][\w\$]*)(:[\[]*)(?:(Z|B|S|C|I|J|F|D)|(L)([\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*)(;))(?:([\s\t]+=[\s\t]+)(?:(null|true|false)|(\d+(?:\.\d+)?[fldst]?)|((?:-0x(?:0|[1-9a-f][\da-f]{0,6}|[1-7][\da-f]{7}|8[0]{7})|0x(?:0|[1-9a-f][\da-f]{0,6}|[1-7][\da-f]{7}))|(?:-0x(?:0|[1-9a-f][\da-f]{0,14}|[1-7][\da-f]{15}|8[0]{15})|0x(?:0|[1-9a-f][\da-f]{0,14}|[1-7][\da-f]{15}))[fldst]?)\b|(["'])(.*?)(["'])))?(?=[\s\t]*(?:#.*)?$)/,
        caseInsensitive: true,
        comment: "Field"
      }],
      "#field-end": [{
        token: ["text", "constant.language.smali"],
        regex: /^([\s\t]*)(\.end field)(?=[\s\t]*(?:#.*)?$)/,
        comment: "Parsing this is hard to do right. This is Good Enough™."
      }],
      "#annotation": [{
        token: [
          "text",
          "constant.language.smali",
          "text",
          "storage.modifier.smali",
          "text",
          "entity.name.tag.smali",
          "constant.numeric.smali",
          "entity.name.tag.smali"
        ],
        regex: /^([\s\t]*)(\.annotation)([\s\t]+)(build|runtime|system)([\s\t]+)(L)([\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*)(;)(?=[\s\t]*(?:#.*)?$)/
      }],
      "#annotation-end": [{
        token: ["text", "constant.language.smali"],
        regex: /^([\s\t]*)(\.end annotation)(?=[\s\t]*(?:#.*)?$)/,
        comment: "Parsing this is hard to do right. This is Good Enough™."
      }],
      "#annotation-access": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "constant.numeric.smali"
        ],
        regex: /^([\s\t]*)(accessFlags)([\s\t]*=[\s\t]*)(0x(?:0|[1-9a-f][\da-f]{0,3}))(?=[\s\t]*(?:#.*)?$)/,
        comment: "accessFlags property in annotation. Haven't seen any of these go over 0x4019."
      }],
      "#annotation-name": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "constant.language.smali",
          "entity.name.tag.smali",
          "string.quoted.double.smali",
          "entity.name.tag.smali"
        ],
        regex: /^([\s\t]*)(name)([\s\t]*=[\s\t]*)(?:(null)|(")(.*?)((?:")?))(?=[\s\t]*(?:#.*)?$)/,
        comment: "Name property in annotation"
      }],
      "#annotation-value": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "entity.name.tag.smali",
          "string.quoted.double.smali",
          "entity.name.tag.smali",
          "text",
          "entity.name.tag.smali",
          "text",
          "entity.name.tag.smali",
          "constant.numeric.smali",
          "entity.name.tag.smali",
          "text",
          "string.interpolated.smali",
          "text",
          "constant.numeric.smali",
          "entity.name.tag.smali",
          "constant.numeric.smali",
          "entity.name.tag.smali",
          "entity.name.function.smali",
          "text",
          "constant.numeric.smali",
          "text",
          "constant.numeric.smali",
          "text",
          "constant.numeric.smali",
          "text",
          "entity.name.tag.smali",
          "constant.numeric.smali",
          "entity.name.tag.smali",
          "text",
          "constant.numeric.smali"
        ],
        regex: /^([\s\t]*)(value)([\s\t]*=[\s\t]*)(?:(")(.*?)((?:")?)|(?:(\.)(enum|subannotation)([\s\t]+))?(L)([\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*)(;))(?:(->)(?:([\w_\$][\w\$]*)(:[\[]*)(?:(Z|B|S|C|I|J|F|D)|(L)([\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*)(;))|(<init>|<clinit>|[\$\w_][\w\d_\$]*)(\()((?:[\[]*(?:Z|B|S|C|I|J|F|D|L[\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*;))*)(\))(?:(V)|([\[]*)(Z|B|S|C|I|J|F|D)|([\[]*)(L)([\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*)(;))))?([\s\t]*)((?:#.*)?)$/,
        comment: "This is another hack because sublime can't handle multi-line regex, particulaly for 'end'."
      }],
      "#annotation-value_list": [{
        token: ["text", "support.function.smali", "text"],
        regex: /^([\s\t]*)(value)([\s\t]*=[\s\t]*{)(?=[\s\t]*(?:#.*)?$)/,
        push: [{
          token: "text",
          regex: /^[\s\t]*}(?=[\s\t]*(?:#.*)?$)/,
          next: "pop"
        }, {
          include: "#comment-inline"
        }, {
          token: [
            "entity.name.tag.smali",
            "string.quoted.double.smali",
            "entity.name.tag.smali",
            "entity.name.tag.smali",
            "constant.numeric.smali",
            "entity.name.tag.smali"
          ],
          regex: /(?:(")(.*?)((?:")?)|(L)([\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*)(;))(?:,)?(?=[\s\t]*(?:#.*)?$)/
        }],
        comment: "This is another hack. Deals."
      }],
      "#directive-method-registers_locals": [{
        token: [
          "text",
          "constant.language.smali",
          "text",
          "variable.parameter.smali"
        ],
        regex: /([\s\t]*)(\.(?:registers|locals))([\s\t]+)(\d+)(?=[\s\t]*(?:#.*)?$)/,
        comment: "Registers / Locals"
      }],
      "#directive-method-line": [{
        token: [
          "text",
          "constant.language.smali",
          "text",
          "variable.parameter.smali"
        ],
        regex: /([\s\t]*)(\.line)([\s\t]+)(\d+)(?=[\s\t]*(?:#.*)?$)/,
        comment: "Line"
      }],
      "#directive-method-parameter": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "entity.name.tag.smali",
          "string.quoted.double.smali",
          "entity.name.tag.smali"
        ],
        regex: /([\s\t]*)(\.param(?:eter)?)([\s\t]+)(p(?:0|[1-9][\d]?|[1-4][\d]{2}|50[\d]|51[0-2])\b)(?:(,[\s\t]*)(")(.*?)("))?(?=[\s\t]*(?:#.*)?$)/,
        comment: "Parameter"
      }],
      "#directive-method-parameter-end": [{
        token: ["text", "constant.language.smali"],
        regex: /^([\s\t]*)(\.end param)(?=[\s\t]*(?:#.*)?$)/,
        comment: "Parsing this is hard to do right. This is Good Enough™."
      }],
      "#directive-method-label": [{
        token: ["text", "keyword.control.smali"],
        regex: /^([\s\t]*)(:[A-Za-z_\d]+)(?=[\s\t]*(?:#.*)?$)/,
        comment: "Label"
      }],
      "#directives-method-relaxed": [{
        token: ["text", "invalid.illegal.smali"],
        regex: /^([\s\t]*)(:|\.(?:parameter|line|registers|locals|(?:restart )?local|prologue|(?:end )?(?:annotation|(?:sparse|packed)-switch|local)|catch(?:all)?))/
      }],
      "#comment-alone": [{
        token: ["text", "comment.line.number-sign.smali"],
        regex: /^([\s\t]*)(#.*)$/,
        comment: "Single line, stand alone comment"
      }],
      "#comment-inline": [{
        token: "comment.line.number-sign.smali",
        regex: /#.*$/,
        comment: "In-line comment"
      }],
      "#opcode-format-10x": [{
        token: ["text", "support.function.smali"],
        regex: /^([\s\t]*)(nop|return-void)(?=[\s\t]*(?:#.*)?$)/,
        comment: "Format: op"
      }],
      "#opcode-format-10x-relaxed": [{
        token: ["text", "invalid.illegal.smali"],
        regex: /^([\s\t]*)(nop|return-void)/
      }],
      "#opcode-format-11n": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "constant.numeric.smali"
        ],
        regex: /^([\s\t]*)(const\/4)([\s\t]+)([vp](?:0|[1-9]|1[0-5])\b)(,[\s\t]*)(-0x[0-8]|0x[0-7])(?=[\s\t]*(?:#.*)?$)/,
        caseInsensitive: true,
        comment: "Format: op vA, #+B"
      }],
      "#opcode-format-11n-relaxed": [{
        token: ["text", "invalid.illegal.smali"],
        regex: /^([\s\t]*)(const\/4)/
      }],
      "#opcode-format-11x": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "variable.parameter.smali"
        ],
        regex: /^([\s\t]*)(move-(?:result(?:-wide|-object)?|exception)|return(?:-wide|-object)?|monitor-(?:enter|exit)|throw)([\s\t]+)([vp](?:0|[1-9][\d]?|1[\d]{2}|2[0-4][\d]|25[0-5])\b)(?=[\s\t]*(?:#.*)?$)/,
        comment: "Format: op vAA"
      }],
      "#opcode-format-11x-relaxed": [{
        token: ["text", "invalid.illegal.smali"],
        regex: /^([\s\t]*)(move-(?:result(?:-wide|-object)?|exception)|return(?:-wide|-object)?|monitor-(?:enter|exit)|throw)/
      }],
      "#opcode-format-22x": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "variable.parameter.smali"
        ],
        regex: /^([\s\t]*)(move(?:-wide|-object)?\/from16)([\s\t]+)([vp](?:0|[1-9][\d]?|1[\d]{2}|2[0-4][\d]|25[0-5])\b)(,[\s\t]*)([vp](?:0|[1-9][\d]{0,3}|[1-5][\d]{4}|6[0-4][\d]{3}|65[0-4][\d]{2}|655[0-2][\d]|6553[0-5])\b)(?=[\s\t]*(?:#.*)?$)/,
        comment: "Format: op vAA, vBBBB"
      }],
      "#opcode-format-22x-relaxed": [{
        token: ["text", "invalid.illegal.smali"],
        regex: /^([\s\t]*)(move(?:-wide|-object)?\/from16)/
      }],
      "#opcode-format-32x": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "variable.parameter.smali"
        ],
        regex: /^([\s\t]*)(move(?:-wide|-object)?\/16)([\s\t]+)([vp](?:0|[1-9][\d]{0,3}|[1-5][\d]{4}|6[0-4][\d]{3}|65[0-4][\d]{2}|655[0-2][\d]|6553[0-5])\b)(,[\s\t]*)([vp](?:0|[1-9][\d]{0,3}|[1-5][\d]{4}|6[0-4][\d]{3}|65[0-4][\d]{2}|655[0-2][\d]|6553[0-5])\b)(?=[\s\t]*(?:#.*)?$)/,
        comment: "Format: op vAAAA, vBBBB"
      }],
      "#opcode-format-32x-relaxed": [{
        token: ["text", "invalid.illegal.smali"],
        regex: /^([\s\t]*)(move(?:-wide|-object)?\/16)/
      }],
      "#opcode-format-12x": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "variable.parameter.smali"
        ],
        regex: /^([\s\t]*)(move(?:-wide|-object)?|array-length|neg-(?:int|long|float|double)|not-(?:int|long)|int-to-(?:long|float|double|byte|char|short)|long-to-(?:int|float|double)|float-to-(?:int|long|double)|double-to-(?:int|long|float)|(?:add|sub|mul|div|rem|and|or|xor|shl|shr|ushr)-(?:int|long)\/2addr|(?:add|sub|mul|div|rem)-(?:float|double)\/2addr)([\s\t]+)([vp](?:0|[1-9]|1[0-5])\b)(,[\s\t]*)([vp](?:0|[1-9]|1[0-5])\b)(?=[\s\t]*(?:#.*)?$)/,
        comment: "Format: op vA, vB"
      }],
      "#opcode-format-12x-relaxed": [{
        token: ["text", "invalid.illegal.smali"],
        regex: /^([\s\t]*)(move(?:-wide|-object)?|array-length|neg-(?:int|long|float|double)|not-(?:int|long)|int-to-(?:long|float|double|byte|char|short)|long-to-(?:int|float|double)|float-to-(?:int|long|double)|double-to-(?:int|long|float)|(?:add|sub|mul|div|rem|and|or|xor|shl|shr|ushr)-(?:int|long)\/2addr|(?:add|sub|mul|div|rem)-(?:float|double)\/2addr)/
      }],
      "#opcode-format-21c-string": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "entity.name.tag.smali",
          "string.quoted.double.smali",
          "entity.name.tag.smali"
        ],
        regex: /^([\s\t]*)(const-string(?:\/jumbo)?)([\s\t]+)([vp](?:0|[1-9][\d]?|1[\d]{2}|2[0-4][\d]|25[0-5])\b)(,[\s\t]*)(")(.*?)(")(?=[\s\t]*(?:#.*)?$)/,
        comment: "Format: op vAA, string@BBBB"
      }],
      "#opcode-format-21c-type": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "constant.numeric.smali",
          "entity.name.tag.smali",
          "constant.numeric.smali",
          "entity.name.tag.smali"
        ],
        regex: /^([\s\t]*)(const-class|check-cast|new-instance)([\s\t]+)([vp](?:0|[1-9][\d]?|1[\d]{2}|2[0-4][\d]|25[0-5])\b)(,[\s\t]*[\[]*)(?:(Z|B|S|C|I|J|F|D)|(L)([\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*)(;))(?=[\s\t]*(?:#.*)?$)/,
        comment: "Format: op vAA, type@BBBB"
      }],
      "#opcode-format-21c-field": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "entity.name.tag.smali",
          "constant.numeric.smali",
          "entity.name.tag.smali",
          "text",
          "string.interpolated.smali",
          "text",
          "constant.numeric.smali",
          "entity.name.tag.smali",
          "constant.numeric.smali",
          "entity.name.tag.smali"
        ],
        regex: /^([\s\t]*)((?:sget|sput)(?:-wide|-object|-boolean|-byte|-char|-short)?)([\s\t]+)([vp](?:0|[1-9][\d]?|1[\d]{2}|2[0-4][\d]|25[0-5])\b)(,[\s\t]*)(L)([\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*)(;)(->)([\w_\$][\w\$]*)(:[\[]*)(?:(Z|B|S|C|I|J|F|D)|(L)([\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*)(;))(?=[\s\t]*(?:#.*)?$)/,
        comment: "Format: op vAA, field@BBBB"
      }],
      "#opcode-format-21c-relaxed": [{
        token: ["text", "invalid.illegal.smali"],
        regex: /^([\s\t]*)(const-string|const-class|check-cast|new-instance|(?:sget|sput)(?:-wide|-object|-boolean|-byte|-char|-short)?)/
      }],
      "#opcode-format-21h": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "constant.numeric.smali"
        ],
        regex: /^([\s\t]*)(const(?:-wide)?\/high16)([\s\t]+)([vp](?:0|[1-9][\d]?|1[\d]{2}|2[0-4][\d]|25[0-5])\b)(,[\s\t]*)(-?0x(?:0|[1-9a-f][\da-f]{0,2}|[1-7][\da-f]{3}|8000)[0]{0,12}L?)\b(?=[\s\t]*(?:#.*)?$)/,
        caseInsensitive: true,
        comment: "Format: op vAA, #+BBBB0000(00000000)"
      }],
      "#opcode-format-21h-relaxed": [{
        token: ["text", "invalid.illegal.smali"],
        regex: /^([\s\t]*)(const(?:-wide)?\/high16)/
      }],
      "#opcode-format-21s": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "constant.numeric.smali"
        ],
        regex: /^([\s\t]*)(const(?:-wide)?\/16)([\s\t]+)([vp](?:0|[1-9][\d]?|1[\d]{2}|2[0-4][\d]|25[0-5])\b)(,[\s\t]*)(-0x(?:0|[1-9a-f][\da-f]{0,2}|[1-7][\da-f]{3}|8000)|0x(?:0|[1-9a-f][\da-f]{0,2}|[1-7][\da-f]{3}))\b(?=[\s\t]*(?:#.*)?$)/,
        caseInsensitive: true,
        comment: "Format: op vAA, #+BBBB"
      }],
      "#opcode-format-21s-relaxed": [{
        token: ["text", "invalid.illegal.smali"],
        regex: /^([\s\t]*)(const(?:-wide)?\/16)/
      }],
      "#opcode-format-21t": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "keyword.control.smali"
        ],
        regex: /^([\s\t]*)(if-(?:eq|ne|lt|ge|gt|le)z)([\s\t]+)([vp](?:0|[1-9][\d]?|1[\d]{2}|2[0-4][\d]|25[0-5])\b)(,[\s\t]*)(:[A-Za-z_\d]+)(?=[\s\t]*(?:#.*)?$)/,
        comment: "Format: op vAA, +BBBB"
      }],
      "#opcode-format-21t-relaxed": [{
        token: ["text", "invalid.illegal.smali"],
        regex: /^([\s\t]*)(if-(?:eq|ne|lt|ge|gt|le)z)/
      }],
      "#opcode-format-31t": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "keyword.control"
        ],
        regex: /^([\s\t]*)(fill-array-data|(?:packed|sparse)-switch)([\s\t]+)([vp](?:0|[1-9][\d]?|1[\d]{2}|2[0-4][\d]|25[0-5])\b)(,[\s\t]*)(:[A-Za-z_\d]+)(?=[\s\t]*(?:#.*)?$)/,
        comment: "Format: op vAA, +BBBBBBBB"
      }],
      "#opcode-format-31t-relaxed": [{
        token: ["text", "invalid.illegal.smali"],
        regex: /^([\s\t]*)(fill-array-data|(?:packed|sparse)-switch)/
      }],
      "#opcode-format-22b": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "constant.numeric.smali"
        ],
        regex: /^([\s\t]*)((?:add|rsub|mul|div|rem|and|or|xor|shl|shr|ushr)-int\/lit8)([\s\t]+)([vp](?:0|[1-9][\d]?|1[\d]{2}|2[0-4][\d]|25[0-5])\b)(,[\s\t]*)([vp](?:0|[1-9][\d]?|1[\d]{2}|2[0-4][\d]|25[0-5])\b)(,[\s\t]*)(-0x(?:[\da-f]|[1-7][\da-f]|80)|0x(?:[\da-f]|[1-7][\da-f]))\b(?=[\s\t]*(?:#.*)?$)/,
        caseInsensitive: true,
        comment: "Format: op vAA, vBB, #+CC"
      }],
      "#opcode-format-22b-relaxed": [{
        token: ["text", "invalid.illegal.smali"],
        regex: /^([\s\t]*)((?:add|rsub|mul|div|rem|and|or|xor|shl|shr|ushr)-int\/lit8)/
      }],
      "#opcode-format-22c-type": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "constant.numeric.smali",
          "entity.name.tag.smali",
          "constant.numeric.smali",
          "entity.name.tag.smali"
        ],
        regex: /^([\s\t]*)(instance-of)([\s\t]+)([vp](?:0|[1-9]|1[0-5])\b)(,[\s\t]*)([vp](?:0|[1-9]|1[0-5])\b)(,[\s\t]*[\[]*)(?:(Z|B|S|C|I|J|F|D)|(L)([\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*)(;))(?=[\s\t]*(?:#.*)?$)/,
        comment: "Format: op vA, vB, type@CCCC"
      }],
      "#opcode-format-22c-type_array": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "constant.numeric.smali",
          "entity.name.tag.smali",
          "constant.numeric.smali",
          "entity.name.tag.smali"
        ],
        regex: /^([\s\t]*)(new-array)([\s\t]+)([vp](?:0|[1-9]|1[0-5])\b)(,[\s\t]*)([vp](?:0|[1-9]|1[0-5])\b)(,[\s\t]*[\[]+)(?:(Z|B|S|C|I|J|F|D)|(L)([\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*)(;))(?=[\s\t]*(?:#.*)?$)/,
        comment: "Format: op vA, vB, [type@CCCC"
      }],
      "#opcode-format-22c-field": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "entity.name.tag.smali",
          "constant.numeric.smali",
          "entity.name.tag.smali",
          "text",
          "string.interpolated.smali",
          "text",
          "constant.numeric.smali",
          "constant.numeric.smali",
          "constant.numeric.smali",
          "constant.numeric.smali",
          "constant.numeric.smali",
          "constant.numeric.smali",
          "constant.numeric.smali",
          "constant.numeric.smali",
          "entity.name.tag.smali",
          "constant.numeric.smali",
          "entity.name.tag.smali"
        ],
        regex: /^([\s\t]*)((?:iget|iput)(?:-wide|-object|-boolean|-byte|-char|-short)?)([\s\t]+)([vp](?:0|[1-9]|1[0-5])\b)(,[\s\t]*)([vp](?:0|[1-9]|1[0-5])\b)(,[\s\t]*)(L)([\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*)(;)(->)([\w_\$][\w\$]*)(:[\[]*)(?:(Z)|(B)|(S)|(C)|(I)|(J)|(F)|(D)|(L)([\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*)(;))(?=[\s\t]*(?:#.*)?$)/,
        comment: "Format: op vA, vB, field@CCCC"
      }],
      "#opcode-format-22c-relaxed": [{
        token: ["text", "invalid.illegal.smali"],
        regex: /^([\s\t]*)(instance-of|new-array|(?:iget|iput)(?:-wide|-object|-boolean|-byte|-char|-short)?)/
      }],
      "#opcode-format-22s": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "constant.numeric.smali"
        ],
        regex: /^([\s\t]*)((?:add|mul|div|rem|and|or|xor)-int\/lit16|rsub-int)([\s\t]+)([vp](?:0|[1-9][\d]?|1[\d]{2}|2[0-4][\d]|25[0-5])\b)(,[\s\t]*)([vp](?:0|[1-9][\d]?|1[\d]{2}|2[0-4][\d]|25[0-5])\b)(,[\s\t]*)(-0x(?:0|[1-9a-f][\da-f]{0,2}|[1-7][\da-f]{3}|8000)|0x(?:0|[1-9a-f][\da-f]{0,2}|[1-7][\da-f]{3}))\b(?=[\s\t]*(?:#.*)?$)/,
        caseInsensitive: true,
        comment: "Format: op vA, vB, #+CCCC"
      }],
      "#opcode-format-22s-relaxed": [{
        token: ["text", "invalid.illegal.smali"],
        regex: /^([\s\t]*)((?:add|mul|div|rem|and|or|xor)-int\/lit16|rsub-int)/
      }],
      "#opcode-format-22t": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "keyword.control"
        ],
        regex: /^([\s\t]*)(if-(?:eq|ne|lt|ge|gt|le))([\s\t]+)([vp](?:0|[1-9]|1[0-5])\b)(,[\s\t]*)([vp](?:0|[1-9]|1[0-5])\b)(,[\s\t]*)(:[A-Za-z_\d]+)(?=[\s\t]*(?:#.*)?$)/,
        comment: "*Format: op vA, vB, +CCCC"
      }],
      "#opcode-format-22t-relaxed": [{
        token: "invalid.illegal.smali",
        regex: /if-(?:eq|ne|lt|ge|gt|le)/
      }],
      "#opcode-format-23x": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "variable.parameter.smali"
        ],
        regex: /^([\s\t]*)((?:cmpl|cmpg)-(?:float|double)|cmp-long|(?:aget|aput)(?:-wide|-object|-boolean|-byte|-char|-short)?|(?:add|sub|mul|div|rem|and|or|xor|shl|shr|ushr)-(?:int|long)|(?:add|sub|mul|div|rem)-(?:float|double))([\s\t]+)([vp](?:0|[1-9][\d]?|1[\d]{2}|2[0-4][\d]|25[0-5])\b)(,[\s\t]*)([vp](?:0|[1-9][\d]?|1[\d]{2}|2[0-4][\d]|25[0-5])\b)(,[\s\t]*)([vp](?:0|[1-9][\d]?|1[\d]{2}|2[0-4][\d]|25[0-5])\b)(?=[\s\t]*(?:#.*)?$)/,
        comment: "Format: op vAA, vBB, vCC"
      }],
      "#opcode-format-23x-relaxed": [{
        token: ["text", "invalid.illegal.smali"],
        regex: /^([\s\t]*)((?:cmpl|cmpg)-(?:float|double)|cmp-long|(?:aget|aput)(?:-wide|-object|-boolean|-byte|-char|-short)?|(?:add|sub|mul|div|rem|and|or|xor|shl|shr|ushr)-(?:int|long)|(?:add|sub|mul|div|rem)-(?:float|double))/
      }],
      "#opcode-format-3rc-type": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "constant.numeric.smali",
          "entity.name.tag.smali",
          "constant.numeric.smali",
          "entity.name.tag.smali"
        ],
        regex: /^([\s\t]*)(filled-new-array\/range)( {)([vp](?:0|[1-9][\d]{0,3}|[1-5][\d]{4}|6[0-4][\d]{3}|65[0-4][\d]{2}|655[0-2][\d]|6553[0-5])\b)( \.\. )([vp](?:0|[1-9][\d]{0,3}|[1-5][\d]{4}|6[0-4][\d]{3}|65[0-4][\d]{2}|655[0-2][\d]|6553[0-5])\b)(},[\s\t]*[\[]+)(?:(Z|B|S|C|I|J|F|D)|(L)([\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*)(;))(?=[\s\t]*(?:#.*)?$)/,
        comment: "Format: op {vCCCC .. vNNNN}, type@BBBB"
      }],
      "#opcode-format-3rc-meth": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "entity.name.tag.smali",
          "constant.numeric.smali",
          "entity.name.tag.smali",
          "text",
          "entity.name.function.smali",
          "text",
          "constant.numeric.smali",
          "text",
          "constant.numeric.smali",
          "text",
          "constant.numeric.smali",
          "text",
          "entity.name.tag.smali",
          "constant.numeric.smali",
          "entity.name.tag.smali",
          "text",
          "constant.numeric.smali"
        ],
        regex: /^([\s\t]*)(invoke-(?:virtual|super|direct|static|interface)\/range)( {[\s\t]*)([vp](?:0|[1-9][\d]{0,3}|[1-5][\d]{4}|6[0-4][\d]{3}|65[0-4][\d]{2}|655[0-2][\d]|6553[0-5])\b)( \.\. )([vp](?:0|[1-9][\d]{0,3}|[1-5][\d]{4}|6[0-4][\d]{3}|65[0-4][\d]{2}|655[0-2][\d]|6553[0-5])\b)([\s\t]*},[\s\t]*[\[]*)(L)([\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*)(;)(->)(<init>|<clinit>|[\$\w_][\w\d_\$]*)(\()((?:[\[]*(?:Z|B|S|C|I|J|F|D|L[\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*;))*)(\))(?:(V)|([\[]*)(Z|B|S|C|I|J|F|D)|([\[]*)(L)([\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*)(;))([\s\t]*)((?:#.*)?)$/,
        comment: "Format: op {vCCCC .. vNNNN}, meth@BBBB"
      }],
      "#opcode-format-3rc-relaxed": [{
        token: ["text", "invalid.illegal.smali"],
        regex: /^([\s\t]*)((?:filled-new-array|invoke-(?:virtual|super|direct|static|interface))\/range)/
      }],
      "#opcode-format-35c-type": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "constant.numeric.smali",
          "entity.name.tag.smali",
          "constant.numeric.smali",
          "entity.name.tag.smali",
          "text",
          "constant.numeric.smali"
        ],
        regex: /^([\s\t]*)(filled-new-array)( {)([vp](?:0|[1-9]|1[0-5])\b)(,[\s\t]*)([vp](?:0|[1-9]|1[0-5])\b)(?:(,[\s\t]*)([vp](?:0|[1-9]|1[0-5])\b))?(?:(,[\s\t]*)([vp](?:0|[1-9]|1[0-5])\b))?(?:(,[\s\t]*)([vp](?:0|[1-9]|1[0-5])\b))?(},[\s\t]*[\[]+)(?:(Z|B|S|C|I|J|F|D)|(L)([\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*)(;))([\s\t]*)((?:#.*)?)$/,
        comment: "Format: op {vC, vD, vE, vF, vG}, type@BBBB"
      }],
      "#opcode-format-35c-meth": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "entity.name.tag.smali",
          "constant.numeric.smali",
          "entity.name.tag.smali",
          "text",
          "entity.name.function.smali",
          "text",
          "text",
          "constant.numeric.smali",
          "text",
          "entity.name.tag.smali",
          "constant.numeric.smali",
          "entity.name.tag.smali",
          "text",
          "constant.numeric.smali",
          "text",
          "entity.name.tag.smali",
          "constant.numeric.smali",
          "entity.name.tag.smali",
          "text",
          "constant.numeric.smali",
          "text",
          "entity.name.tag.smali",
          "constant.numeric.smali",
          "entity.name.tag.smali",
          "text",
          "constant.numeric.smali",
          "text",
          "entity.name.tag.smali",
          "constant.numeric.smali",
          "entity.name.tag.smali",
          "text",
          "constant.numeric.smali",
          "text",
          "entity.name.tag.smali",
          "constant.numeric.smali",
          "entity.name.tag.smali",
          "text",
          "constant.numeric.smali",
          "text",
          "constant.numeric.smali",
          "text",
          "entity.name.tag.smali",
          "constant.numeric.smali",
          "entity.name.tag.smali"
        ],
        regex: /^([\s\t]*)(invoke-(?:virtual|super|direct|static|interface))( {[\s\t]*)((?:[vp](?:0|[1-9]|1[0-5])\b)?)(?:(,[\s\t]*)([vp](?:0|[1-9]|1[0-5])\b))?(?:(,[\s\t]*)([vp](?:0|[1-9]|1[0-5])\b))?(?:(,[\s\t]*)([vp](?:0|[1-9]|1[0-5])\b))?(?:(,[\s\t]*)([vp](?:0|[1-9]|1[0-5])\b))?([\s\t]*},[\s\t]*[\[]*)(L)([\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*)(;)(->)(<init>|<clinit>|[\$\w_][\w\d_\$]*)(\()(?:([\[]*)(Z|B|S|C|I|J|F|D)|([\[]*)(L)([\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*)(;))?(?:([\[]*)(Z|B|S|C|I|J|F|D)|([\[]*)(L)([\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*)(;))?(?:([\[]*)(Z|B|S|C|I|J|F|D)|([\[]*)(L)([\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*)(;))?(?:([\[]*)(Z|B|S|C|I|J|F|D)|([\[]*)(L)([\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*)(;))?(?:([\[]*)(Z|B|S|C|I|J|F|D)|([\[]*)(L)([\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*)(;))?(\))(?:(?:(V)|([\[]*)(Z|B|S|C|I|J|F|D))|([\[]*)(L)([\w_\$][\w\d_\$]*(?:\/[\w_\$][\w\d_\$]*)*)(;))(?=[\s\t]*(?:#.*)?$)/,
        comment: "Format: op {vC, vD, vE, vF, vG}, meth@BBBB"
      }],
      "#opcode-format-35c-relaxed": [{
        token: ["text", "invalid.illegal.smali"],
        regex: /^([\s\t]*)(filled-new-array|invoke-(?:virtual|super|direct|static|interface))/
      }],
      "#opcode-format-51l": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "constant.numeric.smali"
        ],
        regex: /^([\s\t]*)(const-wide)(?!\/32)([\s\t]+)([vp](?:0|[1-9][\d]?|1[\d]{2}|2[0-4][\d]|25[0-5])\b)(,[\s\t]*)((?:-0x(?:0|[1-9a-f][\da-f]{0,6}|[1-7][\da-f]{7}|8[0]{7})|0x(?:0|[1-9a-f][\da-f]{0,6}|[1-7][\da-f]{7}))|(?:-0x(?:0|[1-9a-f][\da-f]{0,14}|[1-7][\da-f]{15}|8[0]{15})|0x(?:0|[1-9a-f][\da-f]{0,14}|[1-7][\da-f]{15}))L)\b(?=[\s\t]*(?:#.*)?$)/,
        caseInsensitive: true,
        comment: "Format: op vAA, #+BBBBBBBBBBBBBBBB"
      }],
      "#opcode-format-51l-relaxed": [{
        token: ["text", "invalid.illegal.smali"],
        regex: /^([\s\t]*)(const-wide)(?!\/32)/
      }],
      "#opcode-format-31i": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "variable.parameter.smali",
          "text",
          "constant.numeric.smali"
        ],
        regex: /^([\s\t]*)(const(?:-wide\/32)?)([\s\t]+)([vp](?:0|[1-9][\d]?|1[\d]{2}|2[0-4][\d]|25[0-5])\b)(,[\s\t]*)(-0x(?:0|[1-9a-f][\da-f]{0,6}|[1-7][\da-f]{7}|8[0]{7})|0x(?:0|[1-9a-f][\da-f]{0,6}|[1-7][\da-f]{7}))\b(?=[\s\t]*(?:#.*)?$)/,
        caseInsensitive: true,
        comment: "Format: op vAA, #+BBBBBBBB"
      }],
      "#opcode-format-31i-relaxed": [{
        token: ["text", "invalid.illegal.smali"],
        regex: /^([\s\t]*)(const(?:-wide\/32)?)/
      }],
      "#opcode-format-10t-20t-30t": [{
        token: [
          "text",
          "support.function.smali",
          "text",
          "keyword.control"
        ],
        regex: /^([\s\t]*)(goto(?:\/16|\/32)?)( )(:[A-Za-z_\d]+)(?=[\s\t]*(?:#.*)?$)/,
        comment: "Format: op +AA(AA(AAAA))"
      }],
      "#opcode-format-10t-20t-30t-relaxed": [{
        token: ["text", "invalid.illegal.smali"],
        regex: /^([\s\t]*)(goto(?:\/16|\/32)?)/
      }]
    };

    this.normalizeRules();
  };

  SmaliHighlightRules.metaData = {
    name: "Smali",
    scopeName: "source.smali",
    fileTypes: ["Smali"],
    foldingStartMarker: "[\\s\\t]*\\.method",
    foldingStopMarker: "[\\s\\t]*\\.end method"
  };


  oop.inherits(SmaliHighlightRules, TextHighlightRules);

  exports.SmaliHighlightRules = SmaliHighlightRules;
});

ace.define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function (require, exports, module) {
  "use strict";

  let oop = ace.require("ace/lib/oop");
  let Range = ace.require("ace/range").Range;
  let BaseFoldMode = ace.require("ace/mode/folding/fold_mode").FoldMode;

  let FoldMode = exports.FoldMode = function (commentRegex) {
    if (commentRegex) {
      this.foldingStartMarker = new RegExp(
        this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start)
      );
      this.foldingStopMarker = new RegExp(
        this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end)
      );
    }
  };
  oop.inherits(FoldMode, BaseFoldMode);

  (function () {

    this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function (session, foldStyle, row) {
      let line = session.getLine(row);

      if (this.singleLineBlockCommentRe.test(line)) {
        if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))
          return "";
      }

      let fw = this._getFoldWidgetBase(session, foldStyle, row);

      if (!fw && this.startRegionRe.test(line))
        return "start"; // lineCommentRegionStart

      return fw;
    };

    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
      let line = session.getLine(row);

      if (this.startRegionRe.test(line))
        return this.getCommentRegionBlock(session, line, row);

      let match = line.match(this.foldingStartMarker);
      if (match) {
        let i = match.index;

        if (match[1])
          return this.openingBracketBlock(session, match[1], row, i);

        let range = session.getCommentFoldRange(row, i + match[0].length, 1);

        if (range && !range.isMultiLine()) {
          if (forceMultiline) {
            range = this.getSectionRange(session, row);
          } else if (foldStyle != "all")
            range = null;
        }

        return range;
      }

      if (foldStyle === "markbegin")
        return;

      match = line.match(this.foldingStopMarker);
      if (match) {
        let i = match.index + match[0].length;

        if (match[1])
          return this.closingBracketBlock(session, match[1], row, i);

        return session.getCommentFoldRange(row, i, -1);
      }
    };

    this.getSectionRange = function (session, row) {
      let line = session.getLine(row);
      let startIndent = line.search(/\S/);
      let startRow = row;
      let startColumn = line.length;
      row = row + 1;
      let endRow = row;
      let maxRow = session.getLength();
      while (++row < maxRow) {
        line = session.getLine(row);
        let indent = line.search(/\S/);
        if (indent === -1)
          continue;
        if (startIndent > indent)
          break;
        let subRange = this.getFoldWidgetRange(session, "all", row);

        if (subRange) {
          if (subRange.start.row <= startRow) {
            break;
          } else if (subRange.isMultiLine()) {
            row = subRange.end.row;
          } else if (startIndent == indent) {
            break;
          }
        }
        endRow = row;
      }

      return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    this.getCommentRegionBlock = function (session, line, row) {
      let startColumn = line.search(/\s*$/);
      let maxRow = session.getLength();
      let startRow = row;

      let re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
      let depth = 1;
      while (++row < maxRow) {
        line = session.getLine(row);
        let m = re.exec(line);
        if (!m) continue;
        if (m[1]) depth--;
        else depth++;

        if (!depth) break;
      }

      let endRow = row;
      if (endRow > startRow) {
        return new Range(startRow, startColumn, endRow, line.length);
      }
    };

  }).call(FoldMode.prototype);

});

ace.define("ace/mode/smali", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/smali_highlight_rules", "ace/mode/folding/cstyle"], function (require, exports, module) {
  "use strict";

  let oop = ace.require("ace/lib/oop");
  let TextMode = ace.require("ace/mode/text").Mode;
  let SmaliHighlightRules = ace.require("ace/mode/smali_highlight_rules").SmaliHighlightRules;
  let FoldMode = ace.require("ace/mode/folding/cstyle").FoldMode;

  let Mode = function () {
    this.HighlightRules = SmaliHighlightRules;
    this.foldingRules = new FoldMode();
  };
  oop.inherits(Mode, TextMode);

  (function () {
    this.$id = "ace/mode/smali";
  }).call(Mode.prototype);

  exports.Mode = Mode;
});