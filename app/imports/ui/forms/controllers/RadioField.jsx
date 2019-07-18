import React from 'react';
import classnames from 'classnames';
import connectField from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';

/**
 * Augment the Uniforms RadioField with an 'inline' property so that radio buttons all appear on a single line.
 * Adapted from https://github.com/vazco/uniforms/blob/master/packages/uniforms-semantic/src/RadioField.js
 */

/* eslint react/prop-types: 0 */
const RadioField = ({
                 allowedValues,
                 checkboxes, // eslint-disable-line no-unused-vars
                 className,
                 disabled,
                 error,
                 errorMessage,
                 id,
                 inline,
                 label,
                 name,
                 onChange,
                 required,
                 showInlineError,
                 transform,
                 value,
                 ...props
               }) => (
  <div
    className={classnames(className, { disabled, error, inline }, (inline ? '' : 'grouped'), 'fields')}
    {...filterDOMProps(props)}
  >
    {label && (
      <div className={classnames({ required }, 'field')}>
        <label>{label}</label>
      </div>
    )}

    {allowedValues.map(item => (
      <div className="field" key={item}>
        <div className="ui radio checkbox">
          <input
            checked={item === value}
            disabled={disabled}
            id={`${id}-${item}`}
            name={name}
            onChange={() => onChange(item)}
            type="radio"
          />

          <label htmlFor={`${id}-${item}`}>
            {transform ? transform(item) : item}
          </label>
        </div>
      </div>
    ))}

    {!!(error && showInlineError) && (
      <div className="ui red basic pointing label">{errorMessage}</div>
    )}
  </div>
);

export default connectField(RadioField);
