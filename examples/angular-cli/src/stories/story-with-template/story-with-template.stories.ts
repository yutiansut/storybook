import { storiesOf } from '@storybook/angular';
import { Button } from '@storybook/angular/demo';
import { action } from '@storybook/addon-actions';

import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  select,
  color,
  date,
  button,
} from '@storybook/addon-knobs/angular';

storiesOf('Story with template', module)
  .addDecorator(withKnobs)
  .add('demo story with template', () => ({
    component: `
        <h3>{{title}}</h3>
        <label>
          <button-component
              [text]="buttonLabel"
              (onClick)="action($event)"
          ></button-component>
          Demo button
        </label>
        <input
            type="text"
            [(ngModel)]="text"
        />
    `,
    props: {
      title: text('title', 'Story with template'),
      buttonLabel: 'Test',
      action: action('onClick'),
      text: text('text', 'qwerty')
    },
    moduleMetadata: {
      declarations: [Button]
    }
  }));
