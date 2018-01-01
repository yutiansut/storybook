import { storiesOf } from '@storybook/angular';
import { Button } from '@storybook/angular/demo';
import { action } from '@storybook/addon-actions';

storiesOf('Story with template', module)
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
      title: 'Story with template',
      buttonLabel: 'Test',
      action: action('onClick'),
      text: 'qwerty'
    },
    moduleMetadata: {
      declarations: [Button]
    }
  }));
