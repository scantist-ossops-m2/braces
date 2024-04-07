'use strict';

var extend = require('extend-shallow');
var assert = require('assert');
var braces = require('..');

function equal(pattern, expected, options) {
  var actual = braces.expand(pattern, options);
  assert.deepEqual(actual.sort(), expected.sort(), pattern);
}

/**
 * Bash 4.3 unit tests with `braces.expand()`
 */

describe('bash.expanded', function() {
  it('should throw an error when range exceeds rangeLimit', function() {
    assert.throws(function() {
      braces.expand('{214748364..2147483649}');
    });
  });

  var fixtures = [
    [ 'a{b,c{1..50}/{foo,bar,baz}/,g}h/i', {}, [ 'abh/i', 'ac1/bar/h/i', 'ac1/baz/h/i', 'ac1/foo/h/i', 'ac10/bar/h/i', 'ac10/baz/h/i', 'ac10/foo/h/i', 'ac11/bar/h/i', 'ac11/baz/h/i', 'ac11/foo/h/i', 'ac12/bar/h/i', 'ac12/baz/h/i', 'ac12/foo/h/i', 'ac13/bar/h/i', 'ac13/baz/h/i', 'ac13/foo/h/i', 'ac14/bar/h/i', 'ac14/baz/h/i', 'ac14/foo/h/i', 'ac15/bar/h/i', 'ac15/baz/h/i', 'ac15/foo/h/i', 'ac16/bar/h/i', 'ac16/baz/h/i', 'ac16/foo/h/i', 'ac17/bar/h/i', 'ac17/baz/h/i', 'ac17/foo/h/i', 'ac18/bar/h/i', 'ac18/baz/h/i', 'ac18/foo/h/i', 'ac19/bar/h/i', 'ac19/baz/h/i', 'ac19/foo/h/i', 'ac2/bar/h/i', 'ac2/baz/h/i', 'ac2/foo/h/i', 'ac20/bar/h/i', 'ac20/baz/h/i', 'ac20/foo/h/i', 'ac21/bar/h/i', 'ac21/baz/h/i', 'ac21/foo/h/i', 'ac22/bar/h/i', 'ac22/baz/h/i', 'ac22/foo/h/i', 'ac23/bar/h/i', 'ac23/baz/h/i', 'ac23/foo/h/i', 'ac24/bar/h/i', 'ac24/baz/h/i', 'ac24/foo/h/i', 'ac25/bar/h/i', 'ac25/baz/h/i', 'ac25/foo/h/i', 'ac26/bar/h/i', 'ac26/baz/h/i', 'ac26/foo/h/i', 'ac27/bar/h/i', 'ac27/baz/h/i', 'ac27/foo/h/i', 'ac28/bar/h/i', 'ac28/baz/h/i', 'ac28/foo/h/i', 'ac29/bar/h/i', 'ac29/baz/h/i', 'ac29/foo/h/i', 'ac3/bar/h/i', 'ac3/baz/h/i', 'ac3/foo/h/i', 'ac30/bar/h/i', 'ac30/baz/h/i', 'ac30/foo/h/i', 'ac31/bar/h/i', 'ac31/baz/h/i', 'ac31/foo/h/i', 'ac32/bar/h/i', 'ac32/baz/h/i', 'ac32/foo/h/i', 'ac33/bar/h/i', 'ac33/baz/h/i', 'ac33/foo/h/i', 'ac34/bar/h/i', 'ac34/baz/h/i', 'ac34/foo/h/i', 'ac35/bar/h/i', 'ac35/baz/h/i', 'ac35/foo/h/i', 'ac36/bar/h/i', 'ac36/baz/h/i', 'ac36/foo/h/i', 'ac37/bar/h/i', 'ac37/baz/h/i', 'ac37/foo/h/i', 'ac38/bar/h/i', 'ac38/baz/h/i', 'ac38/foo/h/i', 'ac39/bar/h/i', 'ac39/baz/h/i', 'ac39/foo/h/i', 'ac4/bar/h/i', 'ac4/baz/h/i', 'ac4/foo/h/i', 'ac40/bar/h/i', 'ac40/baz/h/i', 'ac40/foo/h/i', 'ac41/bar/h/i', 'ac41/baz/h/i', 'ac41/foo/h/i', 'ac42/bar/h/i', 'ac42/baz/h/i', 'ac42/foo/h/i', 'ac43/bar/h/i', 'ac43/baz/h/i', 'ac43/foo/h/i', 'ac44/bar/h/i', 'ac44/baz/h/i', 'ac44/foo/h/i', 'ac45/bar/h/i', 'ac45/baz/h/i', 'ac45/foo/h/i', 'ac46/bar/h/i', 'ac46/baz/h/i', 'ac46/foo/h/i', 'ac47/bar/h/i', 'ac47/baz/h/i', 'ac47/foo/h/i', 'ac48/bar/h/i', 'ac48/baz/h/i', 'ac48/foo/h/i', 'ac49/bar/h/i', 'ac49/baz/h/i', 'ac49/foo/h/i', 'ac5/bar/h/i', 'ac5/baz/h/i', 'ac5/foo/h/i', 'ac50/bar/h/i', 'ac50/baz/h/i', 'ac50/foo/h/i', 'ac6/bar/h/i', 'ac6/baz/h/i', 'ac6/foo/h/i', 'ac7/bar/h/i', 'ac7/baz/h/i', 'ac7/foo/h/i', 'ac8/bar/h/i', 'ac8/baz/h/i', 'ac8/foo/h/i', 'ac9/bar/h/i', 'ac9/baz/h/i', 'ac9/foo/h/i', 'agh/i' ] ],
    [ '0{1..9} {10..20}', {}, [ '01 10', '01 11', '01 12', '01 13', '01 14', '01 15', '01 16', '01 17', '01 18', '01 19', '01 20', '02 10', '02 11', '02 12', '02 13', '02 14', '02 15', '02 16', '02 17', '02 18', '02 19', '02 20', '03 10', '03 11', '03 12', '03 13', '03 14', '03 15', '03 16', '03 17', '03 18', '03 19', '03 20', '04 10', '04 11', '04 12', '04 13', '04 14', '04 15', '04 16', '04 17', '04 18', '04 19', '04 20', '05 10', '05 11', '05 12', '05 13', '05 14', '05 15', '05 16', '05 17', '05 18', '05 19', '05 20', '06 10', '06 11', '06 12', '06 13', '06 14', '06 15', '06 16', '06 17', '06 18', '06 19', '06 20', '07 10', '07 11', '07 12', '07 13', '07 14', '07 15', '07 16', '07 17', '07 18', '07 19', '07 20', '08 10', '08 11', '08 12', '08 13', '08 14', '08 15', '08 16', '08 17', '08 18', '08 19', '08 20', '09 10', '09 11', '09 12', '09 13', '09 14', '09 15', '09 16', '09 17', '09 18', '09 19', '09 20' ] ],
    [ 'a/\\{b,c,d,{x,y}}{e,f\\}/g', {}, [ 'a/{b,c,d,x}{e,f}/g', 'a/{b,c,d,y}{e,f}/g' ] ],
    [ 'a/\\{b,c,d\\}\\{e,f\\}/g', {}, [ 'a/{b,c,d}{e,f}/g' ] ],
    [ 'a/\\{b,c,d\\}\\{e,f}/g', {}, [ 'a/{b,c,d}{e,f}/g' ] ],
    [ 'a/\\{b,c,d\\}{e,f}/g', {}, [ 'a/{b,c,d}e/g', 'a/{b,c,d}f/g' ] ],
    [ 'a/\\{b,c,d{x,y}}{e,f\\}/g', {}, [ 'a/{b,c,dx}{e,f}/g', 'a/{b,c,dy}{e,f}/g' ] ],
    [ 'a/\\{b,c,d}{e,f\\}/g', {}, [ 'a/{b,c,d}{e,f}/g' ] ],
    [ 'a/\\{b,c,d}{e,f}/g', {}, [ 'a/{b,c,d}e/g', 'a/{b,c,d}f/g' ] ],
    [ 'a/\\{x,y}/cde', {}, [ 'a/{x,y}/cde' ] ],
    [ 'a/\\{{b,c}{e,f}/g', {}, [ 'a/{be/g', 'a/{bf/g', 'a/{ce/g', 'a/{cf/g' ] ],
    [ 'a/\\{{b,c}{e,f}\\}/g', {}, [ 'a/{be}/g', 'a/{bf}/g', 'a/{ce}/g', 'a/{cf}/g' ] ],
    [ 'a/\\{{b,c}{e,f}}/g', {}, [ 'a/{be}/g', 'a/{bf}/g', 'a/{ce}/g', 'a/{cf}/g' ] ],
    [ 'a/b/{b,c,{d,e{f,g},{w,x}/{y,z}}}/h/i', {}, [ 'a/b/b/h/i', 'a/b/c/h/i', 'a/b/d/h/i', 'a/b/ef/h/i', 'a/b/eg/h/i', 'a/b/w/y/h/i', 'a/b/w/z/h/i', 'a/b/x/y/h/i', 'a/b/x/z/h/i' ] ],
    [ 'a/{b,c,d}{e,f}/g', {}, [ 'a/be/g', 'a/bf/g', 'a/ce/g', 'a/cf/g', 'a/de/g', 'a/df/g' ] ],
    [ 'a/{b,c\\,d}{e,f}/g', {}, [ 'a/be/g', 'a/bf/g', 'a/c,de/g', 'a/c,df/g' ] ],
    [ 'a/{b,c\\}}{e,f}/g', {}, [ 'a/be/g', 'a/bf/g', 'a/c}e/g', 'a/c}f/g' ] ],
    [ 'a/{b,c}', {}, [ 'a/b', 'a/c' ] ],
    [ 'a/{b,c}d{e,f}/g', {}, [ 'a/bde/g', 'a/bdf/g', 'a/cde/g', 'a/cdf/g' ] ],
    [ 'a/{b,c}{e,f}/g', {}, [ 'a/be/g', 'a/bf/g', 'a/ce/g', 'a/cf/g' ] ],
    [ 'a/{b,c}{e,f}{g,h,i}/k', {}, [ 'a/beg/k', 'a/beh/k', 'a/bei/k', 'a/bfg/k', 'a/bfh/k', 'a/bfi/k', 'a/ceg/k', 'a/ceh/k', 'a/cei/k', 'a/cfg/k', 'a/cfh/k', 'a/cfi/k' ] ],
    [ 'a/{b,{c,d},e}/f', {}, [ 'a/b/f', 'a/c/f', 'a/d/f', 'a/e/f' ] ],
    [ 'a/{b,{c,d}/{e,f},g}/h', {}, [ 'a/b/h', 'a/c/e/h', 'a/c/f/h', 'a/d/e/h', 'a/d/f/h', 'a/g/h' ] ],
    [ 'a/{b{c,d},e{f,g}h{i,j}}/k', {}, [ 'a/bc/k', 'a/bd/k', 'a/efhi/k', 'a/efhj/k', 'a/eghi/k', 'a/eghj/k' ] ],
    [ 'a/{b{c,d},e}/f', {}, [ 'a/bc/f', 'a/bd/f', 'a/e/f' ] ],
    [ 'a/{b{c,d}e{f,g}h{i,j}}/k', {}, [ 'a/{bcefhi}/k', 'a/{bcefhj}/k', 'a/{bceghi}/k', 'a/{bceghj}/k', 'a/{bdefhi}/k', 'a/{bdefhj}/k', 'a/{bdeghi}/k', 'a/{bdeghj}/k' ] ],
    [ 'a/{b{c,d}e{f,g},h{i,j}}/k', {}, [ 'a/bcef/k', 'a/bceg/k', 'a/bdef/k', 'a/bdeg/k', 'a/hi/k', 'a/hj/k' ] ],
    [ 'a/{x,y}/{1..5}c{d,e}f.{md,txt}', {}, [ 'a/x/1cdf.md', 'a/x/1cdf.txt', 'a/x/1cef.md', 'a/x/1cef.txt', 'a/x/2cdf.md', 'a/x/2cdf.txt', 'a/x/2cef.md', 'a/x/2cef.txt', 'a/x/3cdf.md', 'a/x/3cdf.txt', 'a/x/3cef.md', 'a/x/3cef.txt', 'a/x/4cdf.md', 'a/x/4cdf.txt', 'a/x/4cef.md', 'a/x/4cef.txt', 'a/x/5cdf.md', 'a/x/5cdf.txt', 'a/x/5cef.md', 'a/x/5cef.txt', 'a/y/1cdf.md', 'a/y/1cdf.txt', 'a/y/1cef.md', 'a/y/1cef.txt', 'a/y/2cdf.md', 'a/y/2cdf.txt', 'a/y/2cef.md', 'a/y/2cef.txt', 'a/y/3cdf.md', 'a/y/3cdf.txt', 'a/y/3cef.md', 'a/y/3cef.txt', 'a/y/4cdf.md', 'a/y/4cdf.txt', 'a/y/4cef.md', 'a/y/4cef.txt', 'a/y/5cdf.md', 'a/y/5cdf.txt', 'a/y/5cef.md', 'a/y/5cef.txt' ] ],
    [ 'a/{x,z}{b,{c,d}/{e,f},g}/h', {}, [ 'a/xb/h', 'a/xc/e/h', 'a/xc/f/h', 'a/xd/e/h', 'a/xd/f/h', 'a/xg/h', 'a/zb/h', 'a/zc/e/h', 'a/zc/f/h', 'a/zd/e/h', 'a/zd/f/h', 'a/zg/h' ] ],
    [ 'a/{x,{1..5},y}/c{d}e', {}, [ 'a/1/c{d}e', 'a/2/c{d}e', 'a/3/c{d}e', 'a/4/c{d}e', 'a/5/c{d}e', 'a/x/c{d}e', 'a/y/c{d}e' ] ],
    [ 'a/{{a,b}/{c,d}}/z', {}, [ 'a/{a/c}/z', 'a/{a/d}/z', 'a/{b/c}/z', 'a/{b/d}/z' ] ],
    [ 'a/{{b,c}/{d,e}}', {}, [ 'a/{b/d}', 'a/{b/e}', 'a/{c/d}', 'a/{c/e}' ] ],
    [ 'a/{{b,c}/{d,e}}/f', {}, [ 'a/{b/d}/f', 'a/{b/e}/f', 'a/{c/d}/f', 'a/{c/e}/f' ] ],
    [ 'a{0..3}d', {}, [ 'a0d', 'a1d', 'a2d', 'a3d' ] ],
    [ 'a{b}c', {}, [ 'a{b}c' ] ],
    [ 'foo {1,2} bar', {}, [ 'foo 1 bar', 'foo 2 bar' ] ],
    [ 'x{10..1}y', {}, [ 'x10y', 'x1y', 'x2y', 'x3y', 'x4y', 'x5y', 'x6y', 'x7y', 'x8y', 'x9y' ] ],
    [ 'x{3..3}y', {}, [ 'x3y' ] ],
    [ '{ }', {}, [ '{ }' ] ],
    [ '{', {}, [ '{' ] ],
    [ '{0..10,braces}', {}, [ '0..10', 'braces' ] ],
    [ '{10..1}', {}, [ '1', '10', '2', '3', '4', '5', '6', '7', '8', '9' ] ],
    [ '{3..3}', {}, [ '3' ] ],
    [ '{5..8}', {}, [ '5', '6', '7', '8' ] ],
    [ '{9..-4}', {}, [ '-1', '-2', '-3', '-4', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ] ],
    [ '{a,b,{c,d},e}', {}, [ 'a', 'b', 'c', 'd', 'e' ] ],
    [ '{a,b,{c,d}e}', {}, [ 'a', 'b', 'ce', 'de' ] ],
    [ '{a,b,{c,d}}', {}, [ 'a', 'b', 'c', 'd' ] ],
    [ '{a,b{c,d}}', {}, [ 'a', 'bc', 'bd' ] ],
    [ '{a,b}/{c,d}', {}, [ 'a/c', 'a/d', 'b/c', 'b/d' ] ],
    [ '{a,b}c,d\\}', {}, [ 'ac,d}', 'bc,d}' ] ],
    [ '{a,b\\}c,d}', {}, [ 'a', 'b}c', 'd' ] ],
    [ '{a,b}{c,d}', {}, [ 'ac', 'ad', 'bc', 'bd' ] ],
    [ '{abc}', {}, [ '{abc}' ] ],
    [ '{b{c,d},e}', {}, [ 'bc', 'bd', 'e' ] ],
    [ '{b{c,d},e}/f', {}, [ 'bc/f', 'bd/f', 'e/f' ] ],
    [ 'x,y,{abc},trie', {}, [ 'x,y,{abc},trie' ] ],
    [ '{{0..10},braces}', {}, [ '0', '1', '10', '2', '3', '4', '5', '6', '7', '8', '9', 'braces' ] ],
    [ '{{a,b},{c,d}}', {}, [ 'a', 'b', 'c', 'd' ] ],
    [ '{{a,b}/{c,d}}', {}, [ '{a/c}', '{a/d}', '{b/c}', '{b/d}' ] ],
    [ '{{a,b}/{c,d}}/z', {}, [ '{a/c}/z', '{a/d}/z', '{b/c}/z', '{b/d}/z' ] ],
    [ '{}', {}, [ '{}' ] ],

    // should ignore globs
    [ '}', {}, [ '}' ] ],

    'should ignore globs',

    [ '{generate,{assemble,update,verb}{file,-generate-*},generator}.js', {}, [ 'assemble-generate-*.js', 'assemblefile.js', 'generate.js', 'generator.js', 'update-generate-*.js', 'updatefile.js', 'verb-generate-*.js', 'verbfile.js' ] ],
    [ '**/{foo,bar}.js', {}, [ '**/bar.js', '**/foo.js' ] ],
    [ '**/{1..5}/a.js', {}, [ '**/1/a.js', '**/2/a.js', '**/3/a.js', '**/4/a.js', '**/5/a.js' ] ],
    [ '**/{a,b,c}/*.js', {}, [ '**/a/*.js', '**/b/*.js', '**/c/*.js' ] ],
    [ '**/{a,b,*}/*.js', {}, [ '**/*/*.js', '**/a/*.js', '**/b/*.js' ] ],
    [ '**/{**,b,*}/*.js', {}, [ '**/**/*.js', '**/*/*.js', '**/b/*.js' ] ],
    [ '/usr/{ucb/{ex,edit},lib/{ex,how_ex}}', {}, [ '/usr/lib/ex', '/usr/lib/how_ex', '/usr/ucb/edit', '/usr/ucb/ex' ] ],
    [ 'ff{c,b,a}', {}, [ 'ffa', 'ffb', 'ffc' ] ],
    [ 'f{d,e,f}g', {}, [ 'fdg', 'feg', 'ffg' ] ],
    [ 'x{{0..10},braces}y', {}, [ 'x0y', 'x10y', 'x1y', 'x2y', 'x3y', 'x4y', 'x5y', 'x6y', 'x7y', 'x8y', 'x9y', 'xbracesy' ] ],
    [ '{a,b,c}', {}, [ 'a', 'b', 'c' ] ],
    [ '{braces,{0..10}}', {}, [ '0', '1', '10', '2', '3', '4', '5', '6', '7', '8', '9', 'braces' ] ],
    [ '{l,n,m}xyz', {}, [ 'lxyz', 'mxyz', 'nxyz' ] ],
    [ '{{0..10},braces}', {}, [ '0', '1', '10', '2', '3', '4', '5', '6', '7', '8', '9', 'braces' ] ],
    [ '{{1..10..2},braces}', {}, [ '1', '3', '5', '7', '9', 'braces' ] ],
    [ '{{1..10},braces}', {}, [ '1', '10', '2', '3', '4', '5', '6', '7', '8', '9', 'braces' ] ],
    [ 'a/{a,b}/{c,d}/e', {}, [ 'a/a/c/e', 'a/a/d/e', 'a/b/c/e', 'a/b/d/e' ] ],
    [ 'a{b,c}d{e,f}g', {}, [ 'abdeg', 'abdfg', 'acdeg', 'acdfg' ] ],
    [ 'a/{x,y}/c{d,e}f.{md,txt}', {}, [ 'a/x/cdf.md', 'a/x/cdf.txt', 'a/x/cef.md', 'a/x/cef.txt', 'a/y/cdf.md', 'a/y/cdf.txt', 'a/y/cef.md', 'a/y/cef.txt' ] ],
    [ '{a,b}{{a,b},a,b}', {}, [ 'aa', 'aa', 'ab', 'ab', 'ba', 'ba', 'bb', 'bb' ] ],
    [ '/usr/{ucb/{ex,edit},lib/{ex,how_ex}}', {}, [ '/usr/lib/ex', '/usr/lib/how_ex', '/usr/ucb/edit', '/usr/ucb/ex' ] ],
    [ 'a{b,c{d,e}f}g', {}, [ 'abg', 'acdfg', 'acefg' ] ],
    [ 'a{{x,y},z}b', {}, [ 'axb', 'ayb', 'azb' ] ],
    [ 'f{x,y{g,z}}h', {}, [ 'fxh', 'fygh', 'fyzh' ] ],
    [ 'a{b,c{d,e},h}x/z', {}, [ 'abx/z', 'acdx/z', 'acex/z', 'ahx/z' ] ],
    [ 'a{b,c{d,e},h}x{y,z}', {}, [ 'abxy', 'abxz', 'acdxy', 'acdxz', 'acexy', 'acexz', 'ahxy', 'ahxz' ] ],
    [ 'a{b,c{d,e},{f,g}h}x{y,z}', {}, [ 'abxy', 'abxz', 'acdxy', 'acdxz', 'acexy', 'acexz', 'afhxy', 'afhxz', 'aghxy', 'aghxz' ] ],

    'should gracefully handle large ranges (`braces` handles these fine,', 'they are tested elsewhere, but they break all the other reference libs)',

    [ '{214748364..2147483649}', { skip: true } ],
    [ '{2147483645..2147483649}', { skip: true } ],

    'should handle invalid sets',

    [ '{0..10,braces}', {}, [ '0..10', 'braces' ] ],
    [ '{1..10,braces}', {}, [ '1..10', 'braces' ] ],

    'should not expand escaped braces',

    [ '\\{a,b,c,d,e}', {}, [ '{a,b,c,d,e}' ] ],
    [ 'a/\\{b,c}/{d,e}/f', {}, [ 'a/{b,c}/d/f', 'a/{b,c}/e/f' ] ],
    [ 'a/\\{x,y}/cde', {}, [ 'a/{x,y}/cde' ] ],
    [ 'a/b/c/{x,y\\}', {}, [ 'a/b/c/{x,y}' ] ],
    [ 'a/{z,\\{a,b,c,d,e}/d', {}, [ 'a/b/d', 'a/c/d', 'a/d/d', 'a/e/d', 'a/z/d', 'a/{a/d' ] ],
    [ 'abcd{efgh', {}, [ 'abcd{efgh' ] ],
    [ '{a,b\\}c,d}', {}, [ 'a', 'b}c', 'd' ] ],
    [ '{abc}', {}, [ '{abc}' ] ],
    [ '{x,y,\\{a,b,c\\}}', {}, [ 'b', 'c}', 'x', 'y', '{a' ] ],
    [ '{x,y,{a,b,c\\}}', {}, [ '{x,y,a', '{x,y,b', '{x,y,c}' ] ],
    [ '{x,y,{abc},trie}', {}, [ 'trie', 'x', 'y', '{abc}' ] ],
    [ './\\{x,y}/{a..z..3}/', {}, [ './{x,y}/a/', './{x,y}/d/', './{x,y}/g/', './{x,y}/j/', './{x,y}/m/', './{x,y}/p/', './{x,y}/s/', './{x,y}/v/', './{x,y}/y/' ] ],

    'should not expand escaped commas',

    [ '{x\\,y,\\{abc\\},trie}', {}, [ 'trie', 'x,y', '{abc}' ] ],
    [ 'a{b\\,c\\,d}e', {}, [ 'a{b,c,d}e' ] ],
    [ 'a{b\\,c}d', {}, [ 'a{b,c}d' ] ],
    [ '{abc\\,def}', {}, [ '{abc,def}' ] ],
    [ '{abc\\,def,ghi}', {}, [ 'abc,def', 'ghi' ] ],
    [ 'a/{b,c}/{x\\,y}/d/e', {}, [ 'a/b/{x,y}/d/e', 'a/c/{x,y}/d/e' ] ],

    'should handle empty braces',

    [ '{ }', {}, [ '{ }' ] ],
    [ '{', {}, [ '{' ] ],
    [ '{}', {}, [ '{}' ] ],
    [ '}', {}, [ '}' ] ],

    'should escape braces when only one value is defined',

    [ 'a{b}c', {}, [ 'a{b}c' ] ],
    [ 'a/b/c{d}e', {}, [ 'a/b/c{d}e' ] ],

    'should escape closing braces when open is not defined',

    [ '{a,b}c,d}', {}, [ 'ac,d}', 'bc,d}' ] ],

    'should not expand braces in sets with es6/bash-like variables',

    [ 'abc/${ddd}/xyz', {}, [ 'abc/${ddd}/xyz' ] ],
    [ 'a${b}c', {}, [ 'a${b}c' ] ],
    [ 'a/{${b},c}/d', {}, [ 'a/${b}/d', 'a/c/d' ] ],
    [ 'a${b,d}/{foo,bar}c', {}, [ 'a${b,d}/barc', 'a${b,d}/fooc' ] ],

    'should support sequence brace operators',

    [ '/usr/{ucb/{ex,edit},lib/{ex,how_ex}}', {}, [ '/usr/lib/ex', '/usr/lib/how_ex', '/usr/ucb/edit', '/usr/ucb/ex' ] ],
    [ 'ff{c,b,a}', {}, [ 'ffa', 'ffb', 'ffc' ] ],
    [ 'f{d,e,f}g', {}, [ 'fdg', 'feg', 'ffg' ] ],
    [ 'x{{0..10},braces}y', {}, [ 'x0y', 'x10y', 'x1y', 'x2y', 'x3y', 'x4y', 'x5y', 'x6y', 'x7y', 'x8y', 'x9y', 'xbracesy' ] ],
    [ '{a,b,c}', {}, [ 'a', 'b', 'c' ] ],
    [ '{braces,{0..10}}', {}, [ '0', '1', '10', '2', '3', '4', '5', '6', '7', '8', '9', 'braces' ] ],
    [ '{l,n,m}xyz', {}, [ 'lxyz', 'mxyz', 'nxyz' ] ],
    [ '{{0..10},braces}', {}, [ '0', '1', '10', '2', '3', '4', '5', '6', '7', '8', '9', 'braces' ] ],
    [ '{{1..10..2},braces}', {}, [ '1', '3', '5', '7', '9', 'braces' ] ],
    [ '{{1..10},braces}', {}, [ '1', '10', '2', '3', '4', '5', '6', '7', '8', '9', 'braces' ] ],

    'should expand multiple sets',

    [ 'a/{a,b}/{c,d}/e', {}, [ 'a/a/c/e', 'a/a/d/e', 'a/b/c/e', 'a/b/d/e' ] ],
    [ 'a{b,c}d{e,f}g', {}, [ 'abdeg', 'abdfg', 'acdeg', 'acdfg' ] ],
    [ 'a/{x,y}/c{d,e}f.{md,txt}', {}, [ 'a/x/cdf.md', 'a/x/cdf.txt', 'a/x/cef.md', 'a/x/cef.txt', 'a/y/cdf.md', 'a/y/cdf.txt', 'a/y/cef.md', 'a/y/cef.txt' ] ],

    'should expand nested sets',

    [ '{a,b}{{a,b},a,b}', {}, [ 'aa', 'aa', 'ab', 'ab', 'ba', 'ba', 'bb', 'bb' ] ],
    [ '/usr/{ucb/{ex,edit},lib/{ex,how_ex}}', {}, [ '/usr/lib/ex', '/usr/lib/how_ex', '/usr/ucb/edit', '/usr/ucb/ex' ] ],
    [ 'a{b,c{d,e}f}g', {}, [ 'abg', 'acdfg', 'acefg' ] ],
    [ 'a{{x,y},z}b', {}, [ 'axb', 'ayb', 'azb' ] ],
    [ 'f{x,y{g,z}}h', {}, [ 'fxh', 'fygh', 'fyzh' ] ],
    [ 'a{b,c{d,e},h}x/z', {}, [ 'abx/z', 'acdx/z', 'acex/z', 'ahx/z' ] ],
    [ 'a{b,c{d,e},h}x{y,z}', {}, [ 'abxy', 'abxz', 'acdxy', 'acdxz', 'acexy', 'acexz', 'ahxy', 'ahxz' ] ],
    [ 'a{b,c{d,e},{f,g}h}x{y,z}', {}, [ 'abxy', 'abxz', 'acdxy', 'acdxz', 'acexy', 'acexz', 'afhxy', 'afhxz', 'aghxy', 'aghxz' ] ],
    [ 'a-{b{d,e}}-c', {}, [ 'a-{bd}-c', 'a-{be}-c' ] ],

    'should ignore glob characters',

    [ 'a/b/{d,e}/*.js', {}, [ 'a/b/d/*.js', 'a/b/e/*.js' ] ],
    [ 'a/**/c/{d,e}/f*.js', {}, [ 'a/**/c/d/f*.js', 'a/**/c/e/f*.js' ] ],
    [ 'a/**/c/{d,e}/f*.{md,txt}', {}, [ 'a/**/c/d/f*.md', 'a/**/c/d/f*.txt', 'a/**/c/e/f*.md', 'a/**/c/e/f*.txt' ] ],
    [ 'a/b/{d,e,[1-5]}/*.js', {}, [ 'a/b/[1-5]/*.js', 'a/b/d/*.js', 'a/b/e/*.js' ] ],

    'should work with leading and trailing commas',

    [ 'a{b,}c', {}, [ 'abc', 'ac' ] ],
    [ 'a{,b}c', {}, [ 'abc', 'ac' ] ],

    'should handle spaces',

    [ '0{1..9} {10..20}', {}, [ '01 10', '01 11', '01 12', '01 13', '01 14', '01 15', '01 16', '01 17', '01 18', '01 19', '01 20', '02 10', '02 11', '02 12', '02 13', '02 14', '02 15', '02 16', '02 17', '02 18', '02 19', '02 20', '03 10', '03 11', '03 12', '03 13', '03 14', '03 15', '03 16', '03 17', '03 18', '03 19', '03 20', '04 10', '04 11', '04 12', '04 13', '04 14', '04 15', '04 16', '04 17', '04 18', '04 19', '04 20', '05 10', '05 11', '05 12', '05 13', '05 14', '05 15', '05 16', '05 17', '05 18', '05 19', '05 20', '06 10', '06 11', '06 12', '06 13', '06 14', '06 15', '06 16', '06 17', '06 18', '06 19', '06 20', '07 10', '07 11', '07 12', '07 13', '07 14', '07 15', '07 16', '07 17', '07 18', '07 19', '07 20', '08 10', '08 11', '08 12', '08 13', '08 14', '08 15', '08 16', '08 17', '08 18', '08 19', '08 20', '09 10', '09 11', '09 12', '09 13', '09 14', '09 15', '09 16', '09 17', '09 18', '09 19', '09 20' ] ],
    [ 'a{ ,c{d, },h}x', {}, [ 'a x', 'ac x', 'acdx', 'ahx' ] ],
    [ 'a{ ,c{d, },h} ', {}, [ 'a  ', 'ac  ', 'acd ', 'ah ' ] ],

    'see https://github.com/jonschlinkert/microequal/issues/66',

    [ '/Users/tobiasreich/Sites/aaa/bbb/ccc 2016/src/**/[^_]*.{html,ejs}', {}, [ '/Users/tobiasreich/Sites/aaa/bbb/ccc 2016/src/**/[^_]*.ejs', '/Users/tobiasreich/Sites/aaa/bbb/ccc 2016/src/**/[^_]*.html' ] ],

    'should not try to expand ranges with decimals',

    [ '{1.1..2.1}', {}, [ '{1.1..2.1}' ] ],
    [ '{1.1..~2.1}', {}, [ '{1.1..~2.1}' ] ],

    'should escape invalid ranges',

    [ '{1..0f}', {}, [ '{1..0f}' ] ],
    [ '{1..10..ff}', {}, [ '{1..10..ff}' ] ],
    [ '{1..10.f}', {}, [ '{1..10.f}' ] ],
    [ '{1..10f}', {}, [ '{1..10f}' ] ],
    [ '{1..20..2f}', {}, [ '{1..20..2f}' ] ],
    [ '{1..20..f2}', {}, [ '{1..20..f2}' ] ],
    [ '{1..2f..2}', {}, [ '{1..2f..2}' ] ],
    [ '{1..ff..2}', {}, [ '{1..ff..2}' ] ],
    [ '{1..ff}', {}, [ '{1..ff}' ] ],
    [ '{1.20..2}', {}, [ '{1.20..2}' ] ],

    'should handle weirdly-formed brace expansions (fixed in post-bash-3.1)',

    [ 'a-{b{d,e}}-c', {}, [ 'a-{bd}-c', 'a-{be}-c' ] ],
    [ 'a-{bdef-{g,i}-c', {}, [ 'a-{bdef-g-c', 'a-{bdef-i-c' ] ],

    'should not expand quoted strings',

    [ '{"klklkl"}{1,2,3}', {}, [ '{klklkl}1', '{klklkl}2', '{klklkl}3' ] ],
    [ '{"x,x"}', {}, [ '{x,x}' ] ],
    [ '{\'x,x\'}', {}, [ '{x,x}' ] ],

    'should escaped outer braces in nested non-sets',

    [ '{a-{b,c,d}}', {}, [ '{a-b}', '{a-c}', '{a-d}' ] ],
    [ '{a,{a-{b,c,d}}}', {}, [ 'a', '{a-b}', '{a-c}', '{a-d}' ] ],

    'should escape imbalanced braces',

    [ 'abc{', {}, [ 'abc{' ] ],
    [ '{abc{', {}, [ '{abc{' ] ],
    [ '{abc', {}, [ '{abc' ] ],
    [ '}abc', {}, [ '}abc' ] ],
    [ 'ab{c', {}, [ 'ab{c' ] ],
    [ 'ab{c', {}, [ 'ab{c' ] ],
    [ '{{a,b}', {}, [ '{a', '{b' ] ],
    [ '{a,b}}', {}, [ 'a}', 'b}' ] ],
    [ 'a{b{c{d,e}f}gh', {}, [ 'a{b{cdf}gh', 'a{b{cef}gh' ] ],
    [ 'a{b{c{d,e}f}g}h', {}, [ 'a{b{cdf}g}h', 'a{b{cef}g}h' ] ],
    [ 'f{x,y{{g,z}}h}', {}, [ 'fx', 'fy{g}h', 'fy{z}h' ] ],
    [ 'z{a,b},c}d', {}, [ 'za,c}d', 'zb,c}d' ] ],
    [ 'a{b{c{d,e}f{x,y{{g}h', {}, [ 'a{b{cdf{x,y{{g}h', 'a{b{cef{x,y{{g}h' ] ],
    [ 'f{x,y{{g}h', {}, [ 'f{x,y{{g}h' ] ],
    [ 'f{x,y{{g}}h', {}, [ 'f{x,y{{g}}h' ] ],
    [ 'a{b{c{d,e}f{x,y{}g}h', {}, [ 'a{b{cdfxh', 'a{b{cdfy{}gh', 'a{b{cefxh', 'a{b{cefy{}gh' ] ],
    [ 'f{x,y{}g}h', {}, [ 'fxh', 'fy{}gh' ] ],
    [ 'z{a,b{,c}d', {}, [ 'z{a,bcd', 'z{a,bd' ] ],

    'should expand numeric ranges',

    [ 'a{0..3}d', {}, [ 'a0d', 'a1d', 'a2d', 'a3d' ] ],
    [ 'x{10..1}y', {}, [ 'x10y', 'x1y', 'x2y', 'x3y', 'x4y', 'x5y', 'x6y', 'x7y', 'x8y', 'x9y' ] ],
    [ 'x{3..3}y', {}, [ 'x3y' ] ],
    [ '{1..10}', {}, [ '1', '10', '2', '3', '4', '5', '6', '7', '8', '9' ] ],
    [ '{1..3}', {}, [ '1', '2', '3' ] ],
    [ '{1..9}', {}, [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ] ],
    [ '{10..1}y', {}, [ '10y', '1y', '2y', '3y', '4y', '5y', '6y', '7y', '8y', '9y' ] ],
    [ '{3..3}', {}, [ '3' ] ],
    [ '{5..8}', {}, [ '5', '6', '7', '8' ] ],

    'should expand ranges with negative numbers',

    [ '{-10..-1}', {}, [ '-1', '-10', '-2', '-3', '-4', '-5', '-6', '-7', '-8', '-9' ] ],
    [ '{-20..0}', {}, [ '-1', '-10', '-11', '-12', '-13', '-14', '-15', '-16', '-17', '-18', '-19', '-2', '-20', '-3', '-4', '-5', '-6', '-7', '-8', '-9', '0' ] ],
    [ '{0..-5}', {}, [ '-1', '-2', '-3', '-4', '-5', '0' ] ],
    [ '{9..-4}', {}, [ '-1', '-2', '-3', '-4', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ] ],

    'should expand alphabetical ranges',

    [ '0{1..9}/{10..20}', {}, [ '01/10', '01/11', '01/12', '01/13', '01/14', '01/15', '01/16', '01/17', '01/18', '01/19', '01/20', '02/10', '02/11', '02/12', '02/13', '02/14', '02/15', '02/16', '02/17', '02/18', '02/19', '02/20', '03/10', '03/11', '03/12', '03/13', '03/14', '03/15', '03/16', '03/17', '03/18', '03/19', '03/20', '04/10', '04/11', '04/12', '04/13', '04/14', '04/15', '04/16', '04/17', '04/18', '04/19', '04/20', '05/10', '05/11', '05/12', '05/13', '05/14', '05/15', '05/16', '05/17', '05/18', '05/19', '05/20', '06/10', '06/11', '06/12', '06/13', '06/14', '06/15', '06/16', '06/17', '06/18', '06/19', '06/20', '07/10', '07/11', '07/12', '07/13', '07/14', '07/15', '07/16', '07/17', '07/18', '07/19', '07/20', '08/10', '08/11', '08/12', '08/13', '08/14', '08/15', '08/16', '08/17', '08/18', '08/19', '08/20', '09/10', '09/11', '09/12', '09/13', '09/14', '09/15', '09/16', '09/17', '09/18', '09/19', '09/20' ] ],
    [ '0{a..d}0', {}, [ '0a0', '0b0', '0c0', '0d0' ] ],
    [ 'a/{b..d}/e', {}, [ 'a/b/e', 'a/c/e', 'a/d/e' ] ],
    [ '{1..f}', { minimatch: false }, [ '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f' ] ],
    [ '{a..A}', {}, [ 'a', '`', '_', '^', ']', '\\', '[', 'Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A' ] ],
    [ '{A..a}', {}, [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_', '`', 'a' ] ],
    [ '{a..e}', {}, [ 'a', 'b', 'c', 'd', 'e' ] ],
    [ '{A..E}', {}, [ 'A', 'B', 'C', 'D', 'E' ] ],
    [ '{a..f}', {}, [ 'a', 'b', 'c', 'd', 'e', 'f' ] ],
    [ '{a..z}', {}, [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ] ],
    [ '{E..A}', {}, [ 'A', 'B', 'C', 'D', 'E' ] ],
    [ '{f..1}', { minimatch: false }, [ 'f', 'e', 'd', 'c', 'b', 'a', '`', '_', '^', ']', '\\', '[', 'Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A', '@', '?', '>', '=', '<', ';', ':', '9', '8', '7', '6', '5', '4', '3', '2', '1' ] ],
    [ '{f..a}', {}, [ 'a', 'b', 'c', 'd', 'e', 'f' ] ],
    [ '{f..f}', {}, [ 'f' ] ],

    'should expand multiple ranges',

    [ 'a/{b..d}/e/{f..h}', {}, [ 'a/b/e/f', 'a/b/e/g', 'a/b/e/h', 'a/c/e/f', 'a/c/e/g', 'a/c/e/h', 'a/d/e/f', 'a/d/e/g', 'a/d/e/h' ] ],

    'should expand numerical ranges - positive and negative',

    [ '{-10..10}', {}, [ '-1', '-10', '-2', '-3', '-4', '-5', '-6', '-7', '-8', '-9', '0', '1', '10', '2', '3', '4', '5', '6', '7', '8', '9' ] ],

    'HEADS UP! If you\'re using the `--mm` flag minimatch freezes on these', 'should expand large numbers',

    [ '{2147483645..2147483649}', { minimatch: false }, [ '2147483645', '2147483646', '2147483647', '2147483648', '2147483649' ] ],

    'should expand ranges using steps',

    [ '{1..10..1}', { optimize: false }, [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ] ],
    [ '{1..10..2}', { optimize: false }, [ '1', '3', '5', '7', '9' ] ],
    [ '{1..20..20}', { optimize: false }, [ '1' ] ],
    [ '{1..20..20}', { optimize: false }, [ '1' ] ],
    [ '{1..20..20}', { optimize: false }, [ '1' ] ],
    [ '{1..20..2}', { optimize: false }, [ '1', '3', '5', '7', '9', '11', '13', '15', '17', '19' ] ],
    [ '{10..0..2}', { optimize: false }, [ '10', '8', '6', '4', '2', '0' ] ],
    [ '{10..1..2}', { optimize: false }, [ '10', '8', '6', '4', '2' ] ],
    [ '{100..0..5}', { optimize: false }, [ '100', '95', '90', '85', '80', '75', '70', '65', '60', '55', '50', '45', '40', '35', '30', '25', '20', '15', '10', '5', '0' ] ],
    [ '{2..10..1}', { optimize: false }, [ '2', '3', '4', '5', '6', '7', '8', '9', '10' ] ],
    [ '{2..10..2}', { optimize: false }, [ '2', '4', '6', '8', '10' ] ],
    [ '{2..10..3}', { optimize: false }, [ '2', '5', '8' ] ],
    [ '{a..z..2}', { optimize: false }, [ 'a', 'c', 'e', 'g', 'i', 'k', 'm', 'o', 'q', 's', 'u', 'w', 'y' ] ],

    'should expand positive ranges with negative steps',

    [ '{10..0..-2}', { optimize: false }, [ '10', '8', '6', '4', '2', '0' ] ],

    'should expand negative ranges using steps',

    [ '{-1..-10..-2}', { optimize: false }, [ '-1', '-3', '-5', '-7', '-9' ] ],
    [ '{-1..-10..2}', { optimize: false }, [ '-1', '-3', '-5', '-7', '-9' ] ],
    [ '{-10..-2..2}', { optimize: false }, [ '-10', '-8', '-6', '-4', '-2' ] ],
    [ '{-2..-10..1}', { optimize: false }, [ '-2', '-3', '-4', '-5', '-6', '-7', '-8', '-9', '-10' ] ],
    [ '{-2..-10..2}', { optimize: false }, [ '-2', '-4', '-6', '-8', '-10' ] ],
    [ '{-2..-10..3}', { optimize: false }, [ '-2', '-5', '-8' ] ],
    [ '{-50..-0..5}', { optimize: false }, [ '-50', '-45', '-40', '-35', '-30', '-25', '-20', '-15', '-10', '-5', '0' ] ],
    [ '{-9..9..3}', { optimize: false }, [ '-9', '-6', '-3', '0', '3', '6', '9' ] ],
    [ '{10..1..-2}', { optimize: false }, [ '10', '8', '6', '4', '2' ] ],
    [ '{100..0..-5}', { optimize: false }, [ '100', '95', '90', '85', '80', '75', '70', '65', '60', '55', '50', '45', '40', '35', '30', '25', '20', '15', '10', '5', '0' ] ],

    'should expand alpha ranges with steps',

    [ '{a..e..2}', { optimize: false }, [ 'a', 'c', 'e' ] ],
    [ '{E..A..2}', { optimize: false }, [ 'E', 'C', 'A' ] ],
    [ '{a..z..2}', { optimize: false }, [ 'a', 'c', 'e', 'g', 'i', 'k', 'm', 'o', 'q', 's', 'u', 'w', 'y' ] ],
    [ '{z..a..-2}', { optimize: false }, [ 'z', 'x', 'v', 't', 'r', 'p', 'n', 'l', 'j', 'h', 'f', 'd', 'b' ] ],

    'should expand alpha ranges with negative steps',

    [ '{z..a..-2}', { optimize: false }, [ 'z', 'x', 'v', 't', 'r', 'p', 'n', 'l', 'j', 'h', 'f', 'd', 'b' ] ],

    'should handle unwanted zero-padding (fixed post-bash-4.0)',

    [ '{10..0..2}', { optimize: false }, [ '10', '8', '6', '4', '2', '0' ] ],
    [ '{10..0..-2}', { optimize: false }, [ '10', '8', '6', '4', '2', '0' ] ],
    [ '{-50..-0..5}', { optimize: false }, [ '-50', '-45', '-40', '-35', '-30', '-25', '-20', '-15', '-10', '-5', '0' ] ],

    'should work with dots in file paths',

    [ '../{1..3}/../foo', {}, [ '../1/../foo', '../2/../foo', '../3/../foo' ] ],
    [ '../{2..10..2}/../foo', { optimize: false }, [ '../2/../foo', '../4/../foo', '../6/../foo', '../8/../foo', '../10/../foo' ] ],
    [ '../{1..3}/../{a,b,c}/foo', {}, [ '../1/../a/foo', '../1/../b/foo', '../1/../c/foo', '../2/../a/foo', '../2/../b/foo', '../2/../c/foo', '../3/../a/foo', '../3/../b/foo', '../3/../c/foo' ] ],
    [ './{a..z..3}/', { optimize: false }, [ './a/', './d/', './g/', './j/', './m/', './p/', './s/', './v/', './y/' ] ],
    [ './{"x,y"}/{a..z..3}/', { minimatch: false, optimize: false }, [ './{x,y}/a/', './{x,y}/d/', './{x,y}/g/', './{x,y}/j/', './{x,y}/m/', './{x,y}/p/', './{x,y}/s/', './{x,y}/v/', './{x,y}/y/' ] ],

    'should expand a complex combination of ranges and sets',

    [ 'a/{x,y}/{1..5}c{d,e}f.{md,txt}', {}, [ 'a/x/1cdf.md', 'a/x/1cdf.txt', 'a/x/1cef.md', 'a/x/1cef.txt', 'a/x/2cdf.md', 'a/x/2cdf.txt', 'a/x/2cef.md', 'a/x/2cef.txt', 'a/x/3cdf.md', 'a/x/3cdf.txt', 'a/x/3cef.md', 'a/x/3cef.txt', 'a/x/4cdf.md', 'a/x/4cdf.txt', 'a/x/4cef.md', 'a/x/4cef.txt', 'a/x/5cdf.md', 'a/x/5cdf.txt', 'a/x/5cef.md', 'a/x/5cef.txt', 'a/y/1cdf.md', 'a/y/1cdf.txt', 'a/y/1cef.md', 'a/y/1cef.txt', 'a/y/2cdf.md', 'a/y/2cdf.txt', 'a/y/2cef.md', 'a/y/2cef.txt', 'a/y/3cdf.md', 'a/y/3cdf.txt', 'a/y/3cef.md', 'a/y/3cef.txt', 'a/y/4cdf.md', 'a/y/4cdf.txt', 'a/y/4cef.md', 'a/y/4cef.txt', 'a/y/5cdf.md', 'a/y/5cdf.txt', 'a/y/5cef.md', 'a/y/5cef.txt' ] ],

    'should expand complex sets and ranges in `bash` mode',

    [ 'a/{x,{1..5},y}/c{d}e', {}, [ 'a/1/c{d}e', 'a/2/c{d}e', 'a/3/c{d}e', 'a/4/c{d}e', 'a/5/c{d}e', 'a/x/c{d}e', 'a/y/c{d}e' ] ]
  ];

  fixtures.forEach(function(arr) {
    if (typeof arr === 'string') {
      return;
    }

    var options = extend({}, arr[1]);
    var pattern = arr[0];
    var expected = arr[2];

    if (options.skip === true) {
      return;
    }

    it('should compile: ' + pattern, function() {
      equal(pattern, expected, options);
    });
  });
});
