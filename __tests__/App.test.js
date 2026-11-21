import React from 'react';
import renderer, {act} from 'react-test-renderer';
import App from '../App';

test('renders the headline and counter', () => {
  const tree = renderer.create(<App />);
  const root = tree.root;

  expect(root.findByProps({testID: 'headline'}).props.children).toBe(
    'Built on Macrunara M4',
  );
  expect(root.findByProps({testID: 'counter'})).toBeTruthy();
});

test('tapping the button increments the counter', () => {
  const tree = renderer.create(<App />);
  const root = tree.root;

  const counter = () => root.findByProps({testID: 'counter'});
  expect(counter().props.children).toEqual(['Simulated builds: ', 0]);

  act(() => {
    root.findByProps({testID: 'buildButton'}).props.onPress();
  });
  expect(counter().props.children).toEqual(['Simulated builds: ', 1]);
});
