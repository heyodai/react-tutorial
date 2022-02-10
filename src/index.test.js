import React from 'react';
import renderer from 'react-test-renderer';
import { Board, Square } from '../index.js';

test(
    'Board Component Test',
    () => {
        const component = renderer.create(
            <Board />
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        tree.props.onMouseEnter();
        expect(tree).toMatchSnapshot();
    }
);

test(
    'Square Component Test',
    () => {
        const component = renderer.create(
            <Square />
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        tree.props.onClick();
        expect(tree).toMatchSnapshot();
    }
);