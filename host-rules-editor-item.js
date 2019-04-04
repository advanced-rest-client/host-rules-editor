/**
@license
Copyright 2018 The Advanced REST client authors <arc@mulesoft.com>
Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
*/
import {PolymerElement} from '../../@polymer/polymer/polymer-element.js';
import '../../@polymer/paper-input/paper-input.js';
import '../../@polymer/paper-input/paper-textarea.js';
import '../../@polymer/paper-checkbox/paper-checkbox.js';
import '../../@polymer/iron-collapse/iron-collapse.js';
import '../../@polymer/iron-flex-layout/iron-flex-layout.js';
import '../../@polymer/paper-icon-button/paper-icon-button.js';
import '../../@advanced-rest-client/arc-icons/arc-icons.js';
import {html} from '../../@polymer/polymer/lib/utils/html-tag.js';
/**
 * Editor rule item editor.
 *
 * Renders inputs to control host rules.
 *
 * @polymer
 * @customElement
 * @memberof UiElements
 * @demo demo/index.html
 */
export class HostRulesEditorItem extends PolymerElement {
  static get template() {
    return html`
    <style>
    :host {
      display: block;
      @apply --layout-flex;

      @apply --host-rules-editor-item;
    }

    .editor {
      @apply --layout-horizontal;
      @apply --layout-start;
    }

    :host(:not([narrow])) .input-fields {
      @apply --layout-horizontal;
    }

    paper-input,
    .from-field,
    .input-fields {
      @apply --layout-flex;
    }

    .from-field {
      @apply --layout-horizontal;
      @apply --layout-center;
    }

    :host([narrow]) .to-field {
      margin-left: 24px;
      margin-right: 12px;
    }

    .host-from {
      margin-right: 16px;
    }

    .action-icon {
      color: var(--inline-fom-action-icon-color, rgba(0, 0, 0, 0.74));
      transition: color 0.2s linear;
    }

    .action-icon:hover {
      color: var(--inline-fom-action-icon-color-hover, var(--accent-color, rgba(0, 0, 0, 0.74)));
    }

    paper-textarea {
      margin-left: 24px;
      margin-right: 80px;
      @apply --host-rules-editor-item-comment-input;
    }

    :host([narrow]) paper-textarea {
      margin-right: 92px;
      @apply --host-rules-editor-item-comment-input-narrow;
    }

    paper-input {
      @apply --host-rules-editor-item-input;
    }
    </style>
    <div class="editor">
      <div class="input-fields">
        <div class="from-field">
          <paper-checkbox checked="{{enabled}}"></paper-checkbox>
          <paper-input
            label="From (required)"
            value="{{hostFrom}}"
            type="url"
            class="host-from" no-label-float=""></paper-input>
        </div>
        <paper-input
          class="to-field"
          label="To (required)"
          value="{{hostTo}}"
          type="url" no-label-float=""></paper-input>
      </div>
      <paper-icon-button
        icon="arc:close"
        class="action-icon"
        data-action="delete"
        title="Remove rule"
        on-click="_requestRemove"></paper-icon-button>
      <paper-icon-button
        icon="arc:insert-comment"
        class="action-icon"
        data-action="comment"
        title="Add comment to the rule"
        on-click="toggleComment"></paper-icon-button>
    </div>
    <iron-collapse opened="[[commentOpened]]">
      <paper-textarea label="Rule comment (optional)" value="{{comment}}"></paper-textarea>
    </iron-collapse>
`;
  }

  static get properties() {
    return {
      /**
       * From host declaration. It can contain a `*` wildchar.
       *
       * Example:
       * ```
       * http://api.domain.com/*\/endpoint/
       * ```
       */
      hostFrom: {
        type: String,
        notify: true
      },
      /**
       * To host declaration. It must be valid URI to where the request will be
       * redirected.
       */
      hostTo: {
        type: String,
        notify: true
      },
      /**
       * Determines if the option is enabled.
       *
       * Note, this property will inherit boolean `false` value from `paper-checkbox`
       * if not set.
       */
      enabled: {
        type: Boolean,
        notify: true
      },
      /**
       * Comment for the entry
       */
      comment: {
        type: String,
        notify: true
      },
      /**
       * If set comment section is opened and textarea visible.
       */
      commentOpened: Boolean,
      /**
       * If set it renders "narrow" view fow small screens
       */
      narrow: {
        type: Boolean,
        reflectToAttribute: true
      }
    };
  }
  /**
   * Toggles the comment section.
   */
  toggleComment() {
    this.commentOpened = !this.commentOpened;
  }

  _requestRemove() {
    this.dispatchEvent(new CustomEvent('remove-rule', {
      composed: true
    }));
  }

  /**
   * Dispatched when the user request to remove the rule.
   * Note that this event does not bubbles.
   *
   * @event remove-rule
   */
}
window.customElements.define('host-rules-editor-item', HostRulesEditorItem);
