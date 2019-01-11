/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   host-rules-tester.html
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

/// <reference path="../polymer/types/polymer-element.d.ts" />
/// <reference path="../paper-input/paper-input.d.ts" />
/// <reference path="../iron-flex-layout/iron-flex-layout.d.ts" />
/// <reference path="../paper-button/paper-button.d.ts" />

declare namespace UiElements {

  /**
   * An element that tests user input agains provided host rules.
   *
   * The host rules is a model received from `host-rules-editor`. However,
   * it can be any object that contains `from` and `to` properties.
   *
   * It evaluates user entered URL against provided rules and displays the
   * result of the computation.
   */
  class HostRulesTester extends Polymer.Element {

    /**
     * Provided by the user URL
     */
    url: string|null|undefined;

    /**
     * Evaludated result of parsing the URL against rules
     */
    readonly result: string|null|undefined;

    /**
     * List of rules to use to evaluate the URL
     */
    rules: any[]|null|undefined;
    testUrl(): void;
    _evaluate(): any;
    _evaluateAgainst(url: any, rule: any): any;
    _createRuleRe(input: any): any;
    _keyDown(e: any): void;
  }
}

interface HTMLElementTagNameMap {
  "host-rules-tester": UiElements.HostRulesTester;
}
