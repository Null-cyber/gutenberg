/**
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from '../../block-management/block-holder.scss';

// Gutenberg imports
import { __ } from '@wordpress/i18n';
import { RawHTML } from '@wordpress/element';

import edit from './edit';

export const name = 'gmobile/unsupported';

export const settings = {
	title: __( 'Unsupported Block' ),

	description: __( 'Unsupported block type.' ),

	icon: 'editor-code',

	category: 'formatting',

	attributes: {
		content: {
			type: 'string',
			source: 'html',
		},
	},

	supports: {
		className: false,
		customClassName: false,
	},

	transforms: {
	},

	edit,

	save({ attributes }) {
		return <RawHTML>{ attributes.content }</RawHTML>;
	},
};
