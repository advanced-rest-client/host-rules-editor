/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   src/HostRulesEditor.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {LitElement, html} from 'lit-element';

export {HostRulesEditor};

declare namespace UiElements {

  /**
   * An element to render host rules mapping editor.
   *
   * Host rules mapping allow ARC to redirect connection from one URI to another
   * without changinh the `host` header value. This element allows to enter mapping
   * rules and to test them agains arbitrary URL.
   *
   * NOTE: This element does not provide data storing interface. Instead of operating
   * on a data store it sends custom events that should be handled by the hosting
   * application. Example inferface is included in `arc-models/host-rules-model` element.
   *
   * NOTE: This element works with `arc-data-export` element to export data to a file.
   * You can use other way to handle `export-user-data` custom event to export host
   * rules data.
   *
   * ### Example
   *
   * ```
   * <arc-data-export></arc-data-export>
   * <host-rules-model></host-rules-model>
   * <host-rules-editor></host-rules-editor>
   * ```
   *
   * ### Data model
   *
   * The `items` property accepts an array of the following objects:
   *
   * ```javascript
   * {
   *    from: String, // The from rule (may contain asterisks)
   *    to: String, // replacement value
   *    enabled: Boolean, // if false the rule is ignored
   *    comment: String // optional rule description
   * }
   * ```
   *
   * ### Narrow view
   *
   * The element does not recognizes screen size to render mobile like view. To render
   * narrow view (that fit mobile screen or narrow drawer etc) set `narrow` attribute
   * on the element
   *
   * ```html
   * <host-rules-editor narrow></host-rules-editor>
   * ```
   */
  class HostRulesEditor extends LitElement {
    readonly hasItems: Boolean|null;

    /**
     * Computed flag that determines that the query to the databastore
     * has been performed and empty result was returned.
     */
    readonly dataUnavailable: Boolean|null;
    readonly _exportOptionsContainer: any;

    /**
     * List of saved items restored from the datastore.
     */
    items: any[]|null|undefined;

    /**
     * True when loading data from the datastore.
     */
    _loading: boolean|null|undefined;

    /**
     * If set it renders "narrow" view fow small screens
     */
    narrow: boolean|null|undefined;

    /**
     * If true the rules tester is visible.
     */
    rulesTesterOpened: boolean|null|undefined;

    /**
     * When set it won't ask the model for data when connected to the DOM.
     */
    noAuto: boolean|null|undefined;

    /**
     * Enables compatibility with Anypoint platform
     */
    compatibility: boolean|null|undefined;

    /**
     * Enables material desing outlined theme
     */
    outlined: boolean|null|undefined;

    /**
     * When set is enables encryption options.
     * Currently only in the export panel.
     */
    withEncrypt: boolean|null|undefined;

    /**
     * Indicates that the export options panel is currently rendered.
     */
    _exportOptionsOpened: boolean|null|undefined;
    _exportOptions: object|null|undefined;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    render(): any;
    _headerTemplate(): any;
    _busyTemplate(): any;
    _testerTemplate(): any;
    _unavailableTemplate(): any;
    _listTemplate(): any;
    _exportOptionsTemplate(): any;
    _toastsTemplate(): any;
    _clearDialogTemplate(): any;

    /**
     * Handles an exception by sending exception details to GA.
     *
     * @param message A message to send.
     */
    _handleException(message: String|null): void;
    _dataImportHandler(): void;
    _dataDestroyHandler(e: any): void;

    /**
     * Refreshes the list of rules from the model.
     * This element is designed to work with `arc-models/host-rules-model`
     * element but can work with any model that handles `host-rules-list`
     * custom event.
     *
     * Calling this function will replace current `items` value with the one
     * received from the model.
     */
    refresh(): Promise<any>|null;
    _deselectMainMenu(): void;

    /**
     * Handler for `accept` event dispatched by export options element.
     *
     * @returns Result of calling `_doExportItems()`
     */
    _acceptExportOptions(e: CustomEvent|null): Promise<any>|null;
    _cancelExportOptions(): void;
    _resizeExportContent(e: any): void;
    _sheetClosedHandler(e: any): void;

    /**
     * Calls `_dispatchExportData()` from requests lists mixin with
     * prepared arguments
     *
     * @param cookies List of cookies to export.
     * @param detail Export configuration
     */
    _doExportItems(cookies: Array<object|null>|null, detail: String|null): Promise<any>|null;

    /**
     * Dispatches `arc-data-export` event and returns it.
     *
     * @param cookies List of cookies to export.
     */
    _dispatchExportData(cookies: Array<object|null>|null, opts: object|null): CustomEvent|null;

    /**
     * Menu item handler to export all data to file
     *
     * @returns Result of calling `_doExportItems()`
     */
    _exportAllFile(): Promise<any>|null;

    /**
     * Menu item handler to export all data to file
     */
    openExportAll(): void;

    /**
     * Appends empty rule to the rules list.
     */
    appendRule(): void;

    /**
     * Handler for delete rule event from an item.
     */
    _deleteRule(e: CustomEvent|null): Promise<any>|null;
    _itemChanged(e: any): void;
    _storeRule(index: any): any;
    _shouldIgnoreEvent(e: any): any;

    /**
     * Updates a rule from the `host-rules-changed` custom event.
     * The event should contain `rule` property on the event's detail object
     * containing the rule object.
     */
    _ruleUpdated(e: CustomEvent|null): void;

    /**
     * Deletes the rule from the `host-rules-deleted` custom event.
     * The event should contain `rule` property on the event's detail object
     * containing the rule object.
     */
    _ruleDeleted(e: CustomEvent|null): void;

    /**
     * Toggles the rule tester view.
     * Use `rulesTesterOpened` property to control the view instead of calling
     * this function.
     */
    toggleRulesTester(): void;
    _onLearnMore(): any;
    _deleteAllClick(): void;

    /**
     * Called when the delete warning dialog closes.
     *
     * The function dispatches custom event handled by the model to remove all
     * data.
     */
    _onClearDialogResult(e: CustomEvent|null): Promise<any>|null;

    /**
     * Generates file name for the export options panel.
     */
    _generateFileName(): String|null;
  }
}